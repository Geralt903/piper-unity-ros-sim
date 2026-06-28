using UnityEngine;
using UnityEngine.InputSystem;

public sealed class PiperKeyboardController : MonoBehaviour
{
    [SerializeField] private float speedDegreesPerSecond = 45f;
    [SerializeField] private float gripperSpeedMetersPerSecond = 0.025f;
    [SerializeField] private bool autoEnableOnFirstInput = true;

    private PiperArmController arm;
    private readonly Key[] positiveKeys = { Key.Q, Key.W, Key.E, Key.R, Key.T, Key.Y };
    private readonly Key[] negativeKeys = { Key.A, Key.S, Key.D, Key.F, Key.G, Key.H };

    private void Awake()
    {
        arm = GetComponent<PiperArmController>();
        if (arm == null)
            arm = gameObject.AddComponent<PiperArmController>();
    }

    private void Update()
    {
        var keyboard = Keyboard.current;
        if (keyboard == null)
            return;

        if (keyboard[Key.Space].wasPressedThisFrame)
            arm.EnableArm();
        if (keyboard[Key.Escape].wasPressedThisFrame)
            arm.DisableArm();
        if (keyboard[Key.Digit0].wasPressedThisFrame || keyboard[Key.Numpad0].wasPressedThisFrame || keyboard[Key.Home].wasPressedThisFrame)
        {
            if (autoEnableOnFirstInput && !arm.IsEnabled)
                arm.EnableArm();
            arm.Home();
        }

        float step = speedDegreesPerSecond * Time.deltaTime;
        bool hasMotionInput = HasMotionInput(keyboard);
        if (hasMotionInput && autoEnableOnFirstInput && !arm.IsEnabled)
            arm.EnableArm();

        for (int i = 0; i < positiveKeys.Length; i++)
        {
            float input = 0f;
            if (keyboard[positiveKeys[i]].isPressed)
                input += 1f;
            if (keyboard[negativeKeys[i]].isPressed)
                input -= 1f;

            if (Mathf.Approximately(input, 0f))
                continue;

            arm.AddJointDeltaDegrees(i, input * step);
        }

        float gripperInput = 0f;
        if (keyboard[Key.O].isPressed)
            gripperInput += 1f;
        if (keyboard[Key.P].isPressed)
            gripperInput -= 1f;

        if (!Mathf.Approximately(gripperInput, 0f))
        {
            double currentOpening = arm.LastCommand?.GripperMeters ?? arm.Feedback?.GripperMeters ?? 0.0;
            arm.SetGripperMeters(currentOpening + gripperInput * gripperSpeedMetersPerSecond * Time.deltaTime);
        }
    }

    private bool HasMotionInput(Keyboard keyboard)
    {
        for (int i = 0; i < positiveKeys.Length; i++)
        {
            if (keyboard[positiveKeys[i]].isPressed || keyboard[negativeKeys[i]].isPressed)
                return true;
        }

        return keyboard[Key.O].isPressed || keyboard[Key.P].isPressed;
    }
}
