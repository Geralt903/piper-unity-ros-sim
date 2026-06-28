using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public sealed class PiperUnityArticulationBackend : IPiperArmBackend
{
    private const int JointCount = 6;

    private readonly PiperArmStatus status = new();
    private readonly PiperJointCommand feedback = new();
    private PiperJointCommand lastCommand = new();
    private PiperArmController controller;
    private readonly List<ArticulationBody> revoluteJoints = new();
    private ArticulationBody gripperLeft;
    private ArticulationBody gripperRight;
    private ArticulationBody root;

    public PiperArmStatus Status => status;
    public PiperJointCommand Feedback => feedback;
    public PiperJointCommand LastCommand => lastCommand;

    public void Initialize(PiperArmController owner)
    {
        controller = owner;
        revoluteJoints.Clear();

        foreach (var body in controller.GetComponentsInChildren<ArticulationBody>(true))
        {
            if (body.isRoot)
            {
                root = body;
                root.immovable = true;
                root.useGravity = false;
                continue;
            }

            if (body.jointType == ArticulationJointType.RevoluteJoint && revoluteJoints.Count < JointCount)
            {
                ApplyHardDrive(body);
                revoluteJoints.Add(body);
            }
            else if (body.jointType == ArticulationJointType.PrismaticJoint)
            {
                ApplyHardDrive(body);
                if (body.name == "link7")
                    gripperLeft = body;
                else if (body.name == "link8")
                    gripperRight = body;
            }
        }

        feedback.EnsureArrays();
        lastCommand.EnsureArrays();
        for (int i = 0; i < JointCount; i++)
        {
            if (i >= revoluteJoints.Count)
                continue;

            float targetDegrees = revoluteJoints[i].xDrive.target;
            feedback.positionRad[i] = targetDegrees * Mathf.Deg2Rad;
            lastCommand.positionRad[i] = feedback.positionRad[i];
        }

        feedback.SpeedPercent = controller.DefaultSpeedPercent;
        lastCommand.SpeedPercent = controller.DefaultSpeedPercent;
        feedback.GripperEffort = controller.GripperEffort;
        lastCommand.GripperEffort = controller.GripperEffort;
        status.runState = PiperArmRunState.Disabled;
        status.enabled = false;
        status.ctrlMode = 1;
        status.modeFeedback = 1;
        for (int i = 0; i < status.jointCommunicationOk.Length; i++)
            status.jointCommunicationOk[i] = true;
    }

    public void Tick(float deltaTime)
    {
        feedback.EnsureArrays();

        for (int i = 0; i < revoluteJoints.Count && i < JointCount; i++)
        {
            feedback.positionRad[i] = revoluteJoints[i].xDrive.target * Mathf.Deg2Rad;
            feedback.velocity[i] = 0.0;
            feedback.effort[i] = 0.0;
        }

        feedback.GripperMeters = ReadGripperOpening();
        feedback.SpeedPercent = lastCommand.SpeedPercent;
        feedback.GripperEffort = lastCommand.GripperEffort;
        status.motionStatus = status.enabled ? (byte)1 : (byte)0;
    }

    public void Enable()
    {
        status.runState = PiperArmRunState.Enabled;
        status.enabled = true;
        status.armStatus = 1;

        if (root != null)
        {
            root.immovable = true;
            root.useGravity = false;
        }

        foreach (var joint in revoluteJoints)
            ApplyHardDrive(joint);

        if (gripperLeft != null)
            ApplyHardDrive(gripperLeft);
        if (gripperRight != null)
            ApplyHardDrive(gripperRight);
    }

    public void Disable()
    {
        status.runState = PiperArmRunState.Disabled;
        status.enabled = false;
        status.armStatus = 0;

        foreach (var joint in revoluteJoints)
            ApplySoftDrive(joint);

        if (gripperLeft != null)
            ApplySoftDrive(gripperLeft);
        if (gripperRight != null)
            ApplySoftDrive(gripperRight);
    }

    public void SendJointCommand(PiperJointCommand command)
    {
        command.EnsureArrays();
        lastCommand = command.Clone();
        status.ctrlMode = (byte)Mathf.Clamp(command.mode1, 0, 255);
        status.modeFeedback = (byte)Mathf.Clamp(command.mode2, 0, 255);

        if (!status.enabled)
            return;

        for (int i = 0; i < revoluteJoints.Count && i < JointCount; i++)
        {
            var joint = revoluteJoints[i];
            var drive = joint.xDrive;
            float targetDegrees = (float)(command.positionRad[i] * Mathf.Rad2Deg);
            drive.target = ClampToDriveLimits(drive, targetDegrees);
            drive.targetVelocity = 0f;
            joint.xDrive = drive;
        }

        ApplyGripper((float)command.GripperMeters);
    }

    public void SendEndPoseCommand(PiperEndPoseCommand command)
    {
        status.ctrlMode = (byte)Mathf.Clamp(command.mode1, 0, 255);
        status.modeFeedback = (byte)Mathf.Clamp(command.mode2, 0, 255);
        if (status.enabled)
            ApplyGripper((float)command.gripper);
    }

    private void ApplyHardDrive(ArticulationBody joint)
    {
        joint.useGravity = false;
        joint.linearDamping = controller.LinearDamping;
        joint.angularDamping = controller.AngularDamping;
        joint.jointFriction = controller.JointFriction;

        var drive = joint.xDrive;
        drive.stiffness = controller.JointStiffness;
        drive.damping = controller.JointDamping;
        drive.forceLimit = controller.JointForceLimit;
        drive.targetVelocity = 0f;
        joint.xDrive = drive;
    }

    private void ApplySoftDrive(ArticulationBody joint)
    {
        joint.useGravity = true;
        joint.linearDamping = controller.LinearDamping;
        joint.angularDamping = controller.AngularDamping;
        joint.jointFriction = controller.JointFriction;

        var drive = joint.xDrive;
        drive.stiffness = controller.DisabledJointStiffness;
        drive.damping = controller.DisabledJointDamping;
        drive.forceLimit = controller.DisabledJointForceLimit;
        drive.targetVelocity = 0f;
        joint.xDrive = drive;
    }

    private void ApplyGripper(float openingMeters)
    {
        float opening = Mathf.Clamp(openingMeters, 0f, 0.08f);
        if (gripperLeft != null)
        {
            var drive = gripperLeft.xDrive;
            drive.target = Mathf.Clamp(opening * 0.5f, drive.lowerLimit, drive.upperLimit);
            gripperLeft.xDrive = drive;
        }

        if (gripperRight != null)
        {
            var drive = gripperRight.xDrive;
            drive.target = Mathf.Clamp(-opening * 0.5f, drive.lowerLimit, drive.upperLimit);
            gripperRight.xDrive = drive;
        }
    }

    private float ReadGripperOpening()
    {
        float left = gripperLeft != null ? Mathf.Abs(gripperLeft.xDrive.target) : 0f;
        float right = gripperRight != null ? Mathf.Abs(gripperRight.xDrive.target) : 0f;
        return left + right;
    }

    private static float ClampToDriveLimits(ArticulationDrive drive, float target)
    {
        if (drive.lowerLimit < drive.upperLimit)
            return Mathf.Clamp(target, drive.lowerLimit, drive.upperLimit);

        return target;
    }
}
