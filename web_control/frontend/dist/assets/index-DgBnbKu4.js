var Pd=Object.defineProperty;var Ld=(i,t,e)=>t in i?Pd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var yc=(i,t,e)=>Ld(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class Nd extends Error{constructor(t,e=0,n=null){super(t),this.name="ApiError",this.status=e,this.payload=n}}async function jt(i,t){const e=await fetch(i,{method:t===void 0?"GET":"POST",headers:t===void 0?{}:{"Content-Type":"application/json"},body:t===void 0?void 0:JSON.stringify(t),cache:t===void 0?"no-store":"default"}),s=(e.headers.get("content-type")??"").includes("application/json")?await e.json():await e.text();if(!e.ok||(s==null?void 0:s.ok)===!1){const r=(s==null?void 0:s.error)||(s==null?void 0:s.message)||`HTTP ${e.status}`;throw new Nd(r,e.status,s)}return s}function Dd(){return jt("/api/status")}function Id(){return jt("/api/robot_state")}function bc(i){return jt(`/api/links?arm=${encodeURIComponent(i)}`)}function Ud(i){return jt(`/api/gripper?arm=${encodeURIComponent(i)}`)}function uh(){return jt("/api/vision_target")}function Fd(){return jt("/api/vision_status")}function kd(){return jt("/api/camera_extrinsic")}function Vo(i){return jt(`/api/joint_config?arm=${encodeURIComponent(i)}`)}function Od(){return jt("/api/kinematics")}function Bd(){return jt("/api/ompl_config")}function hh(i){return jt("/api/planning_presets",i)}function zd(i){return jt("/api/planning_presets/delete",i)}function Vd(i){return jt(`/api/benchmark/options?arm=${encodeURIComponent(i)}`)}function Hd(i){return jt(`/api/benchmark/progress?arm=${encodeURIComponent(i)}`)}function Gd(i){return jt("/api/benchmark/generate",i)}function Wd(i){return jt("/api/benchmark/run",i)}function Xd(i){return jt("/api/benchmark/export_csv",i)}function $d(){return jt("/api/platform_obstacle")}function qd(){return jt("/api/manual_collision_boxes")}function jd(){return jt("/api/workspace_bounds")}function Yd(i){return jt("/api/workspace_bounds",i)}function Kd(i){return jt("/api/manual_collision_boxes",i)}function Zd(i){return jt("/api/manual_collision_boxes/apply",i)}function Jd(){return jt("/api/manual_collision_boxes/clear",{})}function Qd(){return jt("/api/points")}function tf(){return jt("/api/presets")}function ef(i=200){return jt(`/api/logs?n=${i}`)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ul="174",ws={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nf=0,Mc=1,sf=2,dh=1,fh=2,Qn=3,ri=0,gn=1,Mn=2,Si=0,As=1,Sc=2,Ec=3,Tc=4,rf=5,Gi=100,af=101,of=102,lf=103,cf=104,uf=200,hf=201,df=202,ff=203,Ho=204,Go=205,pf=206,mf=207,gf=208,_f=209,vf=210,xf=211,yf=212,bf=213,Mf=214,Wo=0,Xo=1,$o=2,Is=3,qo=4,jo=5,Yo=6,Ko=7,Ia=0,Sf=1,Ef=2,Ei=0,Tf=1,wf=2,Af=3,ph=4,Cf=5,Rf=6,Pf=7,wc="attached",Lf="detached",mh=300,Us=301,Fs=302,Zo=303,Jo=304,Ua=306,Xi=1e3,In=1001,Qo=1002,En=1003,Nf=1004,Ar=1005,Sn=1006,Qa=1007,ei=1008,ai=1009,gh=1010,_h=1011,ur=1012,Fl=1013,Yi=1014,zn=1015,pr=1016,kl=1017,Ol=1018,ks=1020,vh=35902,xh=1021,yh=1022,Cn=1023,bh=1024,Mh=1025,Cs=1026,Os=1027,Sh=1028,Bl=1029,Eh=1030,zl=1031,Vl=1033,da=33776,fa=33777,pa=33778,ma=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,rl=37492,al=37496,ol=37808,ll=37809,cl=37810,ul=37811,hl=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,_l=37818,vl=37819,xl=37820,yl=37821,ga=36492,bl=36494,Ml=36495,Th=36283,Sl=36284,El=36285,Tl=36286,ba=2300,wl=2301,to=2302,Ac=2400,Cc=2401,Rc=2402,Df=2500,If=3200,Uf=3201,Fa=0,Ff=1,bi="",ze="srgb",Bs="srgb-linear",Ma="linear",we="srgb",ls=7680,Pc=519,kf=512,Of=513,Bf=514,wh=515,zf=516,Vf=517,Hf=518,Gf=519,Lc=35044,Nc="300 es",ni=2e3,Sa=2001;class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dc=1234567;const Rs=Math.PI/180,zs=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function Wf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xf(i,t,e){return i!==t?(e-i)/(t-i):0}function or(i,t,e){return(1-e)*i+e*t}function $f(i,t,e,n){return or(i,t,1-Math.exp(-e*n))}function qf(i,t=1){return t-Math.abs(Hl(i,t*2)-t)}function jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Kf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zf(i,t){return i+Math.random()*(t-i)}function Jf(i){return i*(.5-Math.random())}function Qf(i){i!==void 0&&(Dc=i);let t=Dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tp(i){return i*Rs}function ep(i){return i*zs}function np(i){return(i&i-1)===0&&i!==0}function ip(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ss={DEG2RAD:Rs,RAD2DEG:zs,generateUUID:Ri,clamp:ce,euclideanModulo:Hl,mapLinear:Wf,inverseLerp:Xf,lerp:or,damp:$f,pingpong:qf,smoothstep:jf,smootherstep:Yf,randInt:Kf,randFloat:Zf,randFloatSpread:Jf,seededRandom:Qf,degToRad:tp,radToDeg:ep,isPowerOfTwo:np,ceilPowerOfTwo:ip,floorPowerOfTwo:sp,setQuaternionFromProperEuler:rp,normalize:ln,denormalize:Ms};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(t,e,n,s,r,a,o,l,c){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],R=s[1],C=s[4],T=s[7],D=s[2],F=s[5],I=s[8];return r[0]=a*x+o*R+l*D,r[3]=a*m+o*C+l*F,r[6]=a*f+o*T+l*I,r[1]=c*x+u*R+h*D,r[4]=c*m+u*C+h*F,r[7]=c*f+u*T+h*I,r[2]=d*x+p*R+g*D,r[5]=d*m+p*C+g*F,r[8]=d*f+p*T+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new ae;function Ah(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ap(){const i=hr("canvas");return i.style.display="block",i}const Ic={};function zi(i){i in Ic||(Ic[i]=!0,console.warn(i))}function op(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Uc=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){const i={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===we&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===we&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Ma:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bs]:{primaries:t,whitePoint:n,transfer:Ma,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}const pe=up();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let cs;class hp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=hr("canvas")),cs.width=t.width,cs.height=t.height;const n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dp=0;class Gl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(no(s[a].image)):r.push(no(s[a]))}else r=no(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fp=0;class rn extends Qi{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=In,s=In,r=Sn,a=ei,o=Cn,l=ai,c=rn.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ri(),this.name="",this.source=new Gl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=mh;rn.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(c+1)/2,T=(p+1)/2,D=(f+1)/2,F=(u+d)/4,I=(h+x)/4,U=(g+m)/4;return C>T&&C>D?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=F/n,r=I/n):T>D?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=F/s,r=U/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=I/r,s=U/r),this.set(n,s,r,e),this}let R=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(h-x)/R,this.z=(d-u)/R,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends Qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends pp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ch extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*x,R=f>=0?1:-1,C=1-f*f;if(C>Number.EPSILON){const D=Math.sqrt(C),F=Math.atan2(D,f*R);m=Math.sin(m*F)/D,o=Math.sin(o*F)/D}const T=o*R;if(l=l*m+d*T,c=c*m+p*T,u=u*m+g*T,h=h*m+x*T,m===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-o*p,t[e+2]=c*g+u*p+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new k,kc=new Un;class Ti{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Rr.subVectors(this.max,Js),us.subVectors(t.a,Js),hs.subVectors(t.b,Js),ds.subVectors(t.c,Js),ci.subVectors(hs,us),ui.subVectors(ds,hs),Ii.subVectors(us,ds);let e=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ii.y,Ii.x,0];return!so(e,us,hs,ds,Rr)||(e=[1,0,0,0,1,0,0,0,1],!so(e,us,hs,ds,Rr))?!1:(Pr.crossVectors(ci,ui),e=[Pr.x,Pr.y,Pr.z],so(e,us,hs,ds,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new k,new k,new k,new k,new k,new k,new k,new k],Ln=new k,Cr=new Ti,us=new k,hs=new k,ds=new k,ci=new k,ui=new k,Ii=new k,Js=new k,Rr=new k,Pr=new k,Ui=new k;function so(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ui.fromArray(i,r);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const gp=new Ti,Qs=new k,ro=new k;class ts{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(ro)),this.expandByPoint(Qs.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new k,ao=new k,Lr=new k,hi=new k,oo=new k,Nr=new k,lo=new k;class mr{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ao.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(ao);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Lr),o=hi.dot(this.direction),l=-hi.dot(Lr),c=hi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ao).addScaledVector(Lr,d),p}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){oo.subVectors(e,t),Nr.subVectors(n,t),lo.crossVectors(oo,Nr);let a=this.direction.dot(lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,t);const l=o*this.direction.dot(Nr.crossVectors(hi,Nr));if(l<0)return null;const c=o*this.direction.dot(oo.cross(hi));if(c<0||l+c>a)return null;const u=-o*hi.dot(lo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,a,o,l,c,u,h,d,p,g,x,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,d,p,g,x,m)}set(t,e,n,s,r,a,o,l,c,u,h,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),a=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,g=c*u,x=c*h;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,g=c*u,x=c*h;e[0]=d-x*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-d*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,vp)}lookAt(t,e,n){const s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),di.crossVectors(n,yn),di.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),di.crossVectors(n,yn)),di.normalize(),Dr.crossVectors(yn,di),s[0]=di.x,s[4]=Dr.x,s[8]=yn.x,s[1]=di.y,s[5]=Dr.y,s[9]=yn.y,s[2]=di.z,s[6]=Dr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],R=n[3],C=n[7],T=n[11],D=n[15],F=s[0],I=s[4],U=s[8],y=s[12],b=s[1],N=s[5],V=s[9],W=s[13],J=s[2],et=s[6],z=s[10],it=s[14],$=s[3],ut=s[7],mt=s[11],gt=s[15];return r[0]=a*F+o*b+l*J+c*$,r[4]=a*I+o*N+l*et+c*ut,r[8]=a*U+o*V+l*z+c*mt,r[12]=a*y+o*W+l*it+c*gt,r[1]=u*F+h*b+d*J+p*$,r[5]=u*I+h*N+d*et+p*ut,r[9]=u*U+h*V+d*z+p*mt,r[13]=u*y+h*W+d*it+p*gt,r[2]=g*F+x*b+m*J+f*$,r[6]=g*I+x*N+m*et+f*ut,r[10]=g*U+x*V+m*z+f*mt,r[14]=g*y+x*W+m*it+f*gt,r[3]=R*F+C*b+T*J+D*$,r[7]=R*I+C*N+T*et+D*ut,r[11]=R*U+C*V+T*z+D*mt,r[15]=R*y+C*W+T*it+D*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*p-n*l*p)+x*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-s*o*u-e*l*h+e*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],R=h*m*c-x*d*c+x*l*p-o*m*p-h*l*f+o*d*f,C=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,T=u*x*c-g*h*c+g*o*p-a*x*p-u*o*f+a*h*f,D=g*h*l-u*x*l-g*o*d+a*x*d+u*o*m-a*h*m,F=e*R+n*C+s*T+r*D;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return t[0]=R*I,t[1]=(x*d*r-h*m*r-x*s*p+n*m*p+h*s*f-n*d*f)*I,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*I,t[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*p-n*l*p)*I,t[4]=C*I,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*I,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*I,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*p+e*l*p)*I,t[8]=T*I,t[9]=(g*h*r-u*x*r-g*n*p+e*x*p+u*n*f-e*h*f)*I,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*I,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*I,t[12]=D*I,t[13]=(u*x*s-g*h*s+g*n*d-e*x*d-u*n*m+e*h*m)*I,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*I,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*d+e*o*d)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,x=a*u,m=a*h,f=o*h,R=l*c,C=l*u,T=l*h,D=n.x,F=n.y,I=n.z;return s[0]=(1-(x+f))*D,s[1]=(p+T)*D,s[2]=(g-C)*D,s[3]=0,s[4]=(p-T)*F,s[5]=(1-(d+f))*F,s[6]=(m+R)*F,s[7]=0,s[8]=(g+C)*I,s[9]=(m-R)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=fs.set(s[0],s[1],s[2]).length();const a=fs.set(s[4],s[5],s[6]).length(),o=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);const c=1/r,u=1/a,h=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,e.setFromRotationMatrix(Nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ni){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===ni)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ni){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*c,p=(n+s)*u;let g,x;if(o===ni)g=(a+r)*h,x=-2*h;else if(o===Sa)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new k,Nn=new Jt,_p=new k(0,0,0),vp=new k(1,1,1),di=new k,Dr=new k,yn=new k,Oc=new Jt,Bc=new Un;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xp=0;const zc=new k,ps=new Un,Yn=new Jt,Ir=new k,tr=new k,yp=new k,bp=new Un,Vc=new k(1,0,0),Hc=new k(0,1,0),Gc=new k(0,0,1),Wc={type:"added"},Mp={type:"removed"},ms={type:"childadded",child:null},co={type:"childremoved",child:null};class Ve extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new k,e=new vn,n=new Un,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ae}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(tr,Ir,this.up):Yn.lookAt(Ir,tr,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Yn),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mp),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new k(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new k,Kn=new k,uo=new k,Zn=new k,gs=new k,_s=new k,Xc=new k,ho=new k,fo=new k,po=new k,mo=new Me,go=new Me,_o=new Me;class An{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),Kn.subVectors(n,e),uo.subVectors(t,e);const a=Dn.dot(Dn),o=Dn.dot(Kn),l=Dn.dot(uo),c=Kn.dot(Kn),u=Kn.dot(uo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(go,r.y),a.addScaledVector(_o,r.z),a}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),Kn.subVectors(t,e),Dn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Dn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;gs.subVectors(s,n),_s.subVectors(r,n),ho.subVectors(t,n);const l=gs.dot(ho),c=_s.dot(ho);if(l<=0&&c<=0)return e.copy(n);fo.subVectors(t,s);const u=gs.dot(fo),h=_s.dot(fo);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(gs,a);po.subVectors(t,r);const p=gs.dot(po),g=_s.dot(po);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(_s,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Xc.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Xc,o);const f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Hl(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vo(a,r,t+1/3),this.g=vo(a,r,t),this.b=vo(a,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return pe.fromWorkingColorSpace(nn.copy(this),t),Math.round(ce(nn.r*255,0,255))*65536+Math.round(ce(nn.g*255,0,255))*256+Math.round(ce(nn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=ze){pe.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,s=nn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Ur);const n=or(fi.h,Ur.h,e),s=or(fi.s,Ur.s,e),r=or(fi.l,Ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Qt;Qt.NAMES=Ph;let Sp=0;class oi extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=As,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Go,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dr extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new k,Fr=new qt;let Ep=0;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}}class Lh extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nh extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Tp=0;const Tn=new Jt,xo=new Ve,vs=new k,bn=new Ti,er=new Ti,Je=new k;class We extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?Nh:Lh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(bn.min,er.min),bn.expandByPoint(Je),Je.addVectors(bn.max,er.max),bn.expandByPoint(Je)):(bn.expandByPoint(er.min),bn.expandByPoint(er.max))}bn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Je.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(t,c),Je.add(vs)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new k,l[U]=new k;const c=new k,u=new k,h=new k,d=new qt,p=new qt,g=new qt,x=new k,m=new k;function f(U,y,b){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),o[U].add(x),o[y].add(x),o[b].add(x),l[U].add(m),l[y].add(m),l[b].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,y=R.length;U<y;++U){const b=R[U],N=b.start,V=b.count;for(let W=N,J=N+V;W<J;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const C=new k,T=new k,D=new k,F=new k;function I(U){D.fromBufferAttribute(s,U),F.copy(D);const y=o[U];C.copy(y),C.sub(D.multiplyScalar(D.dot(y))).normalize(),T.crossVectors(F,y);const N=T.dot(l[U])<0?-1:1;a.setXYZW(U,C.x,C.y,C.z,N)}for(let U=0,y=R.length;U<y;++U){const b=R[U],N=b.start,V=b.count;for(let W=N,J=N+V;W<J;W+=3)I(t.getX(W+0)),I(t.getX(W+1)),I(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new Jt,Fi=new mr,kr=new ts,qc=new k,Or=new k,Br=new k,zr=new k,yo=new k,Vr=new k,jc=new k,Hr=new k;class Fe extends Ve{constructor(t=new We,e=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(yo.fromBufferAttribute(h,t),a?Vr.addScaledVector(yo,u):Vr.addScaledVector(yo.sub(e),u))}e.add(Vr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(kr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(kr,qc)===null||Fi.origin.distanceToSquared(qc)>(t.far-t.near)**2))&&($c.copy(r).invert(),Fi.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],R=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=R,D=C;T<D;T+=3){const F=o.getX(T),I=o.getX(T+1),U=o.getX(T+2);s=Gr(this,f,t,n,c,u,h,F,I,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const R=o.getX(m),C=o.getX(m+1),T=o.getX(m+2);s=Gr(this,a,t,n,c,u,h,R,C,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],R=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=R,D=C;T<D;T+=3){const F=T,I=T+1,U=T+2;s=Gr(this,f,t,n,c,u,h,F,I,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const R=m,C=m+1,T=m+2;s=Gr(this,a,t,n,c,u,h,R,C,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function wp(i,t,e,n,s,r,a,o){let l;if(t.side===gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ri,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Hr);return c<e.near||c>e.far?null:{distance:c,point:Hr.clone(),object:i}}function Gr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Or),i.getVertexPosition(l,Br),i.getVertexPosition(c,zr);const u=wp(i,t,e,n,Or,Br,zr,jc);if(u){const h=new k;An.getBarycoord(jc,Or,Br,zr,h),s&&(u.uv=An.getInterpolatedAttribute(s,o,l,c,h,new qt)),r&&(u.uv1=An.getInterpolatedAttribute(r,o,l,c,h,new qt)),a&&(u.normal=An.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};An.getNormal(Or,Br,zr,d.normal),u.face=d,u.barycoord=h}return u}class wi extends We{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(h,2));function g(x,m,f,R,C,T,D,F,I,U,y){const b=T/I,N=D/U,V=T/2,W=D/2,J=F/2,et=I+1,z=U+1;let it=0,$=0;const ut=new k;for(let mt=0;mt<z;mt++){const gt=mt*N-W;for(let Pt=0;Pt<et;Pt++){const wt=Pt*b-V;ut[x]=wt*R,ut[m]=gt*C,ut[f]=J,c.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[f]=F>0?1:-1,u.push(ut.x,ut.y,ut.z),h.push(Pt/I),h.push(1-mt/U),it+=1}}for(let mt=0;mt<U;mt++)for(let gt=0;gt<I;gt++){const Pt=d+gt+et*mt,wt=d+gt+et*(mt+1),q=d+(gt+1)+et*(mt+1),Q=d+(gt+1)+et*mt;l.push(Pt,wt,Q),l.push(wt,q,Q),$+=6}o.addGroup(p,$,y),p+=$,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){const t={};for(let e=0;e<i.length;e++){const n=Vs(i[e]);for(const s in n)t[s]=n[s]}return t}function Ap(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Cp={clone:Vs,merge:cn};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ih extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new k,Yc=new qt,Kc=new qt;class sn extends Ih{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,Kc),e.subVectors(Kc,Yc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,ys=1;class Lp extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(xs,ys,t,e);s.layers=this.layers,this.add(s);const r=new sn(xs,ys,t,e);r.layers=this.layers,this.add(r);const a=new sn(xs,ys,t,e);a.layers=this.layers,this.add(a);const o=new sn(xs,ys,t,e);o.layers=this.layers,this.add(o);const l=new sn(xs,ys,t,e);l.layers=this.layers,this.add(l);const c=new sn(xs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uh extends rn{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Np extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wi(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Si});r.uniforms.tEquirect.value=e;const a=new Fe(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=Sn),new Lp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class je extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Fh extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Zc=new k,Jc=new Me,Qc=new Me,Ip=new k,tu=new Jt,Wr=new k,Mo=new ts,eu=new Jt,So=new mr;class Up extends Fe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Wr),this.boundingBox.expandByPoint(Wr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ts),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Wr),this.boundingSphere.expandByPoint(Wr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(s),t.ray.intersectsSphere(Mo)!==!1&&(eu.copy(s).invert(),So.copy(t.ray).applyMatrix4(eu),!(this.boundingBox!==null&&So.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,So)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Jc.fromBufferAttribute(s.attributes.skinIndex,t),Qc.fromBufferAttribute(s.attributes.skinWeight,t),Zc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Qc.getComponent(r);if(a!==0){const o=Jc.getComponent(r);tu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Ip.copy(Zc).applyMatrix4(tu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class kh extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Oh extends rn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=En,u=En,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=new Jt,Fp=new Jt;class Wl{constructor(t=[],e=[]){this.uuid=Ri(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Fp;nu.multiplyMatrices(o,e[r]),nu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Wl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Oh(e,t,t,Cn,zn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new kh),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}const Eo=new k,kp=new k,Op=new ae;class yi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Eo.subVectors(n,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Op.getNormalMatrix(t),s=this.coplanarPoint(Eo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new ts,Xr=new k;class Xl{constructor(t=new yi,e=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],R=s[13],C=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,m-p,T-f).normalize(),n[1].setComponents(l+r,d+c,m+p,T+f).normalize(),n[2].setComponents(l+a,d+u,m+g,T+R).normalize(),n[3].setComponents(l-a,d-u,m-g,T-R).normalize(),n[4].setComponents(l-o,d-h,m-x,T-C).normalize(),e===ni)n[5].setComponents(l+o,d+h,m+x,T+C).normalize();else if(e===Sa)n[5].setComponents(o,h,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mi extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ea=new k,Ta=new k,iu=new Jt,nr=new mr,$r=new ts,To=new k,su=new k;class $l extends Ve{constructor(t=new We,e=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ea.fromBufferAttribute(e,s-1),Ta.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ea.distanceTo(Ta);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;iu.copy(s).invert(),nr.copy(t.ray).applyMatrix4(iu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=u.getX(x),R=u.getX(x+1),C=qr(this,t,nr,l,f,R,x);C&&e.push(C)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),f=qr(this,t,nr,l,x,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=qr(this,t,nr,l,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){const x=qr(this,t,nr,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Ea.fromBufferAttribute(o,s),Ta.fromBufferAttribute(o,r),e.distanceSqToSegment(Ea,Ta,To,su)>n)return;To.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(To);if(!(c<t.near||c>t.far))return{distance:c,point:su.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ru=new k,au=new k;class rr extends $l{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ru.fromBufferAttribute(e,s),au.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ru.distanceTo(au);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bh extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ou=new Jt,Al=new mr,jr=new ts,Yr=new k;class Bp extends Ve{constructor(t=new We,e=new Bh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;ou.copy(s).invert(),Al.copy(t.ray).applyMatrix4(ou);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,x=p;g<x;g++){const m=c.getX(g);Yr.fromBufferAttribute(h,m),lu(Yr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,x=p;g<x;g++)Yr.fromBufferAttribute(h,g),lu(Yr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lu(i,t,e,n,s,r,a){const o=Al.distanceSqToPoint(i);if(o<e){const l=new k;Al.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class zh extends rn{constructor(t,e,n,s,r,a,o,l,c,u=Cs){if(u!==Cs&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cs&&(n=Yi),n===void 0&&u===Os&&(n=ks),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ka extends We{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const x=[],m=n/2;let f=0;R(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2));function R(){const T=new k,D=new k;let F=0;const I=(e-t)/n;for(let U=0;U<=r;U++){const y=[],b=U/r,N=b*(e-t)+t;for(let V=0;V<=s;V++){const W=V/s,J=W*l+o,et=Math.sin(J),z=Math.cos(J);D.x=N*et,D.y=-b*n+m,D.z=N*z,h.push(D.x,D.y,D.z),T.set(et,I,z).normalize(),d.push(T.x,T.y,T.z),p.push(W,1-b),y.push(g++)}x.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){const b=x[y][U],N=x[y+1][U],V=x[y+1][U+1],W=x[y][U+1];(t>0||y!==0)&&(u.push(b,N,W),F+=3),(e>0||y!==r-1)&&(u.push(N,V,W),F+=3)}c.addGroup(f,F,0),f+=F}function C(T){const D=g,F=new qt,I=new k;let U=0;const y=T===!0?t:e,b=T===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const N=g;for(let V=0;V<=s;V++){const J=V/s*l+o,et=Math.cos(J),z=Math.sin(J);I.x=y*z,I.y=m*b,I.z=y*et,h.push(I.x,I.y,I.z),d.push(0,b,0),F.x=et*.5+.5,F.y=z*.5*b+.5,p.push(F.x,F.y),g++}for(let V=0;V<s;V++){const W=D+V,J=N+V;T===!0?u.push(J,J+1,W):u.push(J+1,J,W),U+=3}c.addGroup(f,U,T===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Kr=new k,Zr=new k,wo=new k,Jr=new An;class cu extends We{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Rs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:f}=Jr;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Jr.getNormal(wo),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let R=0;R<3;R++){const C=(R+1)%3,T=h[R],D=h[C],F=Jr[u[R]],I=Jr[u[C]],U=`${T}_${D}`,y=`${D}_${T}`;y in d&&d[y]?(wo.dot(d[y].normal)<=r&&(p.push(F.x,F.y,F.z),p.push(I.x,I.y,I.z)),d[y]=null):U in d||(d[U]={index0:c[R],index1:c[C],normal:wo.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];Kr.fromBufferAttribute(o,x),Zr.fromBufferAttribute(o,m),p.push(Kr.x,Kr.y,Kr.z),p.push(Zr.x,Zr.y,Zr.z)}this.setAttribute("position",new Te(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class gr extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const R=f*d-a;for(let C=0;C<c;C++){const T=C*h-r;g.push(T,-R,0),x.push(0,0,1),m.push(C/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<o;R++){const C=R+c*f,T=R+c*(f+1),D=R+1+c*(f+1),F=R+1+c*f;p.push(C,T,F),p.push(T,D,F)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.widthSegments,t.heightSegments)}}class ql extends We{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,p=new k,g=new qt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const R=f+m,C=R,T=R+n+1,D=R+n+2,F=R+1;o.push(C,T,F),o.push(T,D,F)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fr extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new k,d=new k,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const R=[],C=f/n;let T=0;f===0&&a===0?T=.5/e:f===n&&l===Math.PI&&(T=-.5/e);for(let D=0;D<=e;D++){const F=D/e;h.x=-t*Math.cos(s+F*r)*Math.sin(a+C*o),h.y=t*Math.cos(a+C*o),h.z=t*Math.sin(s+F*r)*Math.sin(a+C*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(F+T,1-C),R.push(c++)}u.push(R)}for(let f=0;f<n;f++)for(let R=0;R<e;R++){const C=u[f][R+1],T=u[f][R],D=u[f+1][R],F=u[f+1][R+1];(f!==0||a>0)&&p.push(C,T,F),(f!==n-1||l<Math.PI)&&p.push(T,D,F)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vi extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zp extends Vi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class lr extends oi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qt(16777215),this.specular=new Qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vp extends oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hp extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gp extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Qr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xp(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function uu(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function Vh(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}class Oa{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $p extends Oa{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cc:r=t,o=2*e-n;break;case Rc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:a=t,l=2*n-e;break;case Rc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,R=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,C=(-1-p)*m+(1.5+p)*x+.5*g,T=p*m-p*x;for(let D=0;D!==o;++D)r[D]=f*a[u+D]+R*a[c+D]+C*a[l+D]+T*a[h+D];return r}}class qp extends Oa{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class jp extends Oa{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Gn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qr(e,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qr(t.times,Array),values:Qr(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $p(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ba:e=this.InterpolantFactoryMethodDiscrete;break;case wl:e=this.InterpolantFactoryMethodLinear;break;case to:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return to}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Wp(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===to,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const x=e[h+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=wl;class Ws extends Gn{constructor(t,e,n){super(t,e,n)}}Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=ba;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Hh extends Gn{}Hh.prototype.ValueTypeName="color";class wa extends Gn{}wa.prototype.ValueTypeName="number";class Yp extends Oa{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e);let c=t*o;for(let u=c+o;c!==u;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}}class _r extends Gn{InterpolantFactoryMethodLinear(t){return new Yp(this.times,this.values,this.getValueSize(),t)}}_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Gn{constructor(t,e,n){super(t,e,n)}}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=ba;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends Gn{}Hs.prototype.ValueTypeName="vector";class hu{constructor(t="",e=-1,n=[],s=Df){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Zp(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Xp(l);l=uu(l,1,u),c=uu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new wa(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,x){if(p.length!==0){const m=[],f=[];Vh(p,m,f,g),m.length!==0&&x.push(new h(d,m,f))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)p[d[g].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let R=0;R!==d[g].morphTargets.length;++R){const C=d[g];m.push(C.time),f.push(C.morphTarget===x?1:0)}s.push(new wa(".morphTargetInfluence["+x+"]",m,f))}l=p.length*a}else{const p=".bones["+e[h].name+"]";n(Hs,p+".position",d,"pos",s),n(_r,p+".quaternion",d,"rot",s),n(Hs,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Kp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wa;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return Hh;case"quaternion":return _r;case"bool":case"boolean":return Ws;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Zp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Kp(i.type);if(i.times===void 0){const e=[],n=[];Vh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Aa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Gh{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Wh=new Gh;class Ci{constructor(t){this.manager=t!==void 0?t:Wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class Jp extends Error{constructor(t,e){super(t),this.response=e}}class jl extends Ci{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Aa.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Jn[t]!==void 0){Jn[t].push({onLoad:e,onProgress:n,onError:s});return}Jn[t]=[],Jn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Jn[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let x=0;const m=new ReadableStream({start(f){R();function R(){h.read().then(({done:C,value:T})=>{if(C)f.close();else{x+=T.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let F=0,I=u.length;F<I;F++){const U=u[F];U.onProgress&&U.onProgress(D)}f.enqueue(T),R()}},C=>{f.error(C)})}}});return new Response(m)}else throw new Jp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Aa.add(t,c);const u=Jn[t];delete Jn[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Jn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Jn[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Qp extends Ci{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Aa.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=hr("img");function l(){u(),Aa.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class tm extends Ci{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new Oh,o=new jl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:In,a.wrapT=c.wrapT!==void 0?c.wrapT:In,a.magFilter=c.magFilter!==void 0?c.magFilter:Sn,a.minFilter=c.minFilter!==void 0?c.minFilter:Sn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ei),c.mipmapCount===1&&(a.minFilter=Sn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,s),a}}class Xh extends Ci{constructor(t){super(t)}load(t,e,n,s){const r=new rn,a=new Qp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ba extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ao=new Jt,du=new k,fu=new k;class Yl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fu),e.updateMatrixWorld(),Ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class em extends Yl{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=zs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class nm extends Ba{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new em}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const pu=new Jt,ir=new k,Co=new k;class im extends Yl{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(ir),Co.copy(n.position),Co.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Co),n.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu)}}class sm extends Ba{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new im}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Kl extends Ih{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rm extends Yl{constructor(){super(new Kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _a extends Ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new rm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $h extends Ba{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class qh{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class am extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class mu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gu=new k;let ta,Ro;class ea extends Ve{constructor(t=new k(0,0,1),e=new k(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",ta===void 0&&(ta=new We,ta.setAttribute("position",new Te([0,0,0,0,1,0],3)),Ro=new ka(0,.5,1,5,1),Ro.translate(0,-.5,0)),this.position.copy(e),this.line=new $l(ta,new Mi({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Fe(Ro,new dr({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{gu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(gu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class om extends Qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function _u(i,t,e,n){const s=lm(n);switch(e){case xh:return i*t;case bh:return i*t;case Mh:return i*t*2;case Sh:return i*t/s.components*s.byteLength;case Bl:return i*t/s.components*s.byteLength;case Eh:return i*t*2/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case yh:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case Vl:return i*t*4/s.components*s.byteLength;case da:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(i,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(i,8)*Math.max(t,8)/2;case sl:case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ga:case bl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Th:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case El:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lm(i){switch(i){case ai:case gh:return{byteLength:1,components:1};case ur:case _h:case pr:return{byteLength:2,components:1};case kl:case Ol:return{byteLength:2,components:4};case Yi:case Fl:case zn:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cm(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,__=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,v_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,V_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:um,alphahash_pars_fragment:hm,alphamap_fragment:dm,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:_m,batching_pars_vertex:vm,batching_vertex:xm,begin_vertex:ym,beginnormal_vertex:bm,bsdfs:Mm,iridescence_fragment:Sm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Cm,color_fragment:Rm,color_pars_fragment:Pm,color_pars_vertex:Lm,color_vertex:Nm,common:Dm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Um,displacementmap_pars_vertex:Fm,displacementmap_vertex:km,emissivemap_fragment:Om,emissivemap_pars_fragment:Bm,colorspace_fragment:zm,colorspace_pars_fragment:Vm,envmap_fragment:Hm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:ng,envmap_vertex:$m,fog_vertex:qm,fog_pars_vertex:jm,fog_fragment:Ym,fog_pars_fragment:Km,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:Jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:tg,lights_pars_begin:eg,lights_toon_fragment:ig,lights_toon_pars_fragment:sg,lights_phong_fragment:rg,lights_phong_pars_fragment:ag,lights_physical_fragment:og,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:ug,lights_fragment_end:hg,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:mg,map_fragment:gg,map_pars_fragment:_g,map_particle_fragment:vg,map_particle_pars_fragment:xg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:bg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Tg,morphtarget_vertex:wg,normal_fragment_begin:Ag,normal_fragment_maps:Cg,normal_pars_fragment:Rg,normal_pars_vertex:Pg,normal_vertex:Lg,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ig,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:Fg,opaque_fragment:kg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:Vg,dithering_pars_fragment:Hg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Wg,shadowmap_pars_fragment:Xg,shadowmap_pars_vertex:$g,shadowmap_vertex:qg,shadowmask_pars_fragment:jg,skinbase_vertex:Yg,skinning_pars_vertex:Kg,skinning_vertex:Zg,skinnormal_vertex:Jg,specularmap_fragment:Qg,specularmap_pars_fragment:t_,tonemapping_fragment:e_,tonemapping_pars_fragment:n_,transmission_fragment:i_,transmission_pars_fragment:s_,uv_pars_fragment:r_,uv_pars_vertex:a_,uv_vertex:o_,worldpos_vertex:l_,background_vert:c_,background_frag:u_,backgroundCube_vert:h_,backgroundCube_frag:d_,cube_vert:f_,cube_frag:p_,depth_vert:m_,depth_frag:g_,distanceRGBA_vert:__,distanceRGBA_frag:v_,equirect_vert:x_,equirect_frag:y_,linedashed_vert:b_,linedashed_frag:M_,meshbasic_vert:S_,meshbasic_frag:E_,meshlambert_vert:T_,meshlambert_frag:w_,meshmatcap_vert:A_,meshmatcap_frag:C_,meshnormal_vert:R_,meshnormal_frag:P_,meshphong_vert:L_,meshphong_frag:N_,meshphysical_vert:D_,meshphysical_frag:I_,meshtoon_vert:U_,meshtoon_frag:F_,points_vert:k_,points_frag:O_,shadow_vert:B_,shadow_frag:z_,sprite_vert:V_,sprite_frag:H_},yt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Bn={basic:{uniforms:cn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:cn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:cn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:cn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:cn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:cn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:cn([yt.points,yt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:cn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:cn([yt.common,yt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:cn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:cn([yt.sprite,yt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:cn([yt.common,yt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:cn([yt.lights,yt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Bn.physical={uniforms:cn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const na={r:0,b:0,g:0},Oi=new vn,G_=new Jt;function W_(i,t,e,n,s,r,a){const o=new Qt(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?e:t).get(T)),T}function x(C){let T=!1;const D=g(C);D===null?f(o,l):D&&D.isColor&&(f(D,1),T=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,T){const D=g(T);D&&(D.isCubeTexture||D.mapping===Ua)?(u===void 0&&(u=new Fe(new wi(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Vs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Oi.copy(T.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G_.makeRotationFromEuler(Oi)),u.material.toneMapped=pe.getTransfer(D.colorSpace)!==we,(h!==D||d!==D.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=D,d=D.version,p=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Fe(new gr(2,2),new Ai({name:"BackgroundMaterial",uniforms:Vs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=pe.getTransfer(D.colorSpace)!==we,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||d!==D.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=D,d=D.version,p=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function f(C,T){C.getRGB(na,Dh(i)),n.buffers.color.setClear(na.r,na.g,na.b,T,a)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,T=1){o.set(C),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,f(o,l)},render:x,addToRenderList:m,dispose:R}}function X_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,N,V,W,J){let et=!1;const z=h(W,V,N);r!==z&&(r=z,c(r.object)),et=p(b,W,V,J),et&&g(b,W,V,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,T(b,N,V,W),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,N,V){const W=V.wireframe===!0;let J=n[b.id];J===void 0&&(J={},n[b.id]=J);let et=J[N.id];et===void 0&&(et={},J[N.id]=et);let z=et[W];return z===void 0&&(z=d(l()),et[W]=z),z}function d(b){const N=[],V=[],W=[];for(let J=0;J<e;J++)N[J]=0,V[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:W,object:b,attributes:{},index:null}}function p(b,N,V,W){const J=r.attributes,et=N.attributes;let z=0;const it=V.getAttributes();for(const $ in it)if(it[$].location>=0){const mt=J[$];let gt=et[$];if(gt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor)),mt===void 0||mt.attribute!==gt||gt&&mt.data!==gt.data)return!0;z++}return r.attributesNum!==z||r.index!==W}function g(b,N,V,W){const J={},et=N.attributes;let z=0;const it=V.getAttributes();for(const $ in it)if(it[$].location>=0){let mt=et[$];mt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor));const gt={};gt.attribute=mt,mt&&mt.data&&(gt.data=mt.data),J[$]=gt,z++}r.attributes=J,r.attributesNum=z,r.index=W}function x(){const b=r.newAttributes;for(let N=0,V=b.length;N<V;N++)b[N]=0}function m(b){f(b,0)}function f(b,N){const V=r.newAttributes,W=r.enabledAttributes,J=r.attributeDivisors;V[b]=1,W[b]===0&&(i.enableVertexAttribArray(b),W[b]=1),J[b]!==N&&(i.vertexAttribDivisor(b,N),J[b]=N)}function R(){const b=r.newAttributes,N=r.enabledAttributes;for(let V=0,W=N.length;V<W;V++)N[V]!==b[V]&&(i.disableVertexAttribArray(V),N[V]=0)}function C(b,N,V,W,J,et,z){z===!0?i.vertexAttribIPointer(b,N,V,J,et):i.vertexAttribPointer(b,N,V,W,J,et)}function T(b,N,V,W){x();const J=W.attributes,et=V.getAttributes(),z=N.defaultAttributeValues;for(const it in et){const $=et[it];if($.location>=0){let ut=J[it];if(ut===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor)),ut!==void 0){const mt=ut.normalized,gt=ut.itemSize,Pt=t.get(ut);if(Pt===void 0)continue;const wt=Pt.buffer,q=Pt.type,Q=Pt.bytesPerElement,nt=q===i.INT||q===i.UNSIGNED_INT||ut.gpuType===Fl;if(ut.isInterleavedBufferAttribute){const st=ut.data,vt=st.stride,te=ut.offset;if(st.isInstancedInterleavedBuffer){for(let Ht=0;Ht<$.locationSize;Ht++)f($.location+Ht,st.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ht=0;Ht<$.locationSize;Ht++)m($.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let Ht=0;Ht<$.locationSize;Ht++)C($.location+Ht,gt/$.locationSize,q,mt,vt*Q,(te+gt/$.locationSize*Ht)*Q,nt)}else{if(ut.isInstancedBufferAttribute){for(let st=0;st<$.locationSize;st++)f($.location+st,ut.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let st=0;st<$.locationSize;st++)m($.location+st);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let st=0;st<$.locationSize;st++)C($.location+st,gt/$.locationSize,q,mt,gt*Q,gt/$.locationSize*st*Q,nt)}}else if(z!==void 0){const mt=z[it];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv($.location,mt);break;case 3:i.vertexAttrib3fv($.location,mt);break;case 4:i.vertexAttrib4fv($.location,mt);break;default:i.vertexAttrib1fv($.location,mt)}}}}R()}function D(){U();for(const b in n){const N=n[b];for(const V in N){const W=N[V];for(const J in W)u(W[J].object),delete W[J];delete N[V]}delete n[b]}}function F(b){if(n[b.id]===void 0)return;const N=n[b.id];for(const V in N){const W=N[V];for(const J in W)u(W[J].object),delete W[J];delete N[V]}delete n[b.id]}function I(b){for(const N in n){const V=n[N];if(V[b.id]===void 0)continue;const W=V[b.id];for(const J in W)u(W[J].object),delete W[J];delete V[b.id]}}function U(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function $_(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function q_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Cn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const U=I===pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ai&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zn&&!U)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:D,maxSamples:F}}function j_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new yi,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const R=r?0:n,C=R*4;let T=f.clippingState||null;l.value=T,T=u(g,d,C,p);for(let D=0;D!==C;++D)T[D]=e[D];f.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,T=p;C!==x;++C,T+=4)a.copy(h[C]).applyMatrix4(R,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Y_(i){let t=new WeakMap;function e(a,o){return o===Zo?a.mapping=Us:o===Jo&&(a.mapping=Fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zo||o===Jo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Np(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ts=4,vu=[.125,.215,.35,.446,.526,.582],Wi=20,Po=new Kl,xu=new Qt;let Lo=null,No=0,Do=0,Io=!1;const Hi=(1+Math.sqrt(5))/2,bs=1/Hi,yu=[new k(-Hi,bs,0),new k(Hi,bs,0),new k(-bs,0,Hi),new k(bs,0,Hi),new k(0,Hi,-bs),new k(0,Hi,bs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],K_=new k;class bu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=K_}=r;Lo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,No,Do),this._renderer.xr.enabled=Io,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:pr,format:Cn,colorSpace:Bs,depthBuffer:!1},s=Mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(r)),this._blurMaterial=J_(r,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,s,r){const l=new sn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(xu),h.toneMapping=Ei,h.autoClear=!1;const g=new dr({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),x=new Fe(new wi,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(xu),m=!0);for(let R=0;R<6;R++){const C=R%3;C===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):C===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));const T=this._cubeSize;ia(s,C*T,R>2?T:0,T,T),h.setRenderTarget(s),m&&h.render(x,l),h.render(t,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Us||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yu[(s-r-1)%yu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Fe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Wi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const f=[];let R=0;for(let I=0;I<Wi;++I){const U=I/x,y=Math.exp(-U*U/2);f.push(y),I===0?R+=y:I<m&&(R+=2*y)}for(let I=0;I<f.length;I++)f[I]=f[I]/R;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:C}=this;d.dTheta.value=g,d.mipInt.value=C-n;const T=this._sizeLods[s],D=3*T*(s>C-Ts?s-C+Ts:0),F=4*(this._cubeSize-T);ia(e,D,F,3*T,2*T),l.setRenderTarget(e),l.render(h,Po)}}function Z_(i){const t=[],e=[],n=[];let s=i;const r=i-Ts+1+vu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ts?l=vu[a-i+Ts-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,f=1,R=new Float32Array(x*g*p),C=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let F=0;F<p;F++){const I=F%3*2/3-1,U=F>2?0:-1,y=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];R.set(y,x*g*F),C.set(d,m*g*F);const b=[F,F,F,F,F,F];T.set(b,f*g*F)}const D=new We;D.setAttribute("position",new un(R,x)),D.setAttribute("uv",new un(C,m)),D.setAttribute("faceIndex",new un(T,f)),t.push(D),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mu(i,t,e){const n=new Ki(i,t,e);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function J_(i,t,e){const n=new Float32Array(Wi),s=new k(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Su(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Eu(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zo||l===Jo,u=l===Us||l===Fs;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new bu(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new bu(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function t0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&zi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function e0(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const R=p.array;x=p.version;for(let C=0,T=R.length;C<T;C+=3){const D=R[C+0],F=R[C+1],I=R[C+2];d.push(D,F,F,I,I,D)}}else if(g!==void 0){const R=g.array;x=g.version;for(let C=0,T=R.length/3-1;C<T;C+=3){const D=C+0,F=C+1,I=C+2;d.push(D,F,F,I,I,D)}}else return;const m=new(Ah(d)?Nh:Lh)(d,1);m.version=x;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function n0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let R=0;R<g;R++)f+=p[R]*x[R];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function i0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function s0(i,t,e){const n=new WeakMap,s=new Me;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let b=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),x===!0&&(T=2),m===!0&&(T=3);let D=o.attributes.position.count*T,F=1;D>t.maxTextureSize&&(F=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const I=new Float32Array(D*F*4*h),U=new Ch(I,D,F,h);U.type=zn,U.needsUpdate=!0;const y=T*4;for(let N=0;N<h;N++){const V=f[N],W=R[N],J=C[N],et=D*F*4*N;for(let z=0;z<V.count;z++){const it=z*y;g===!0&&(s.fromBufferAttribute(V,z),I[et+it+0]=s.x,I[et+it+1]=s.y,I[et+it+2]=s.z,I[et+it+3]=0),x===!0&&(s.fromBufferAttribute(W,z),I[et+it+4]=s.x,I[et+it+5]=s.y,I[et+it+6]=s.z,I[et+it+7]=0),m===!0&&(s.fromBufferAttribute(J,z),I[et+it+8]=s.x,I[et+it+9]=s.y,I[et+it+10]=s.z,I[et+it+11]=J.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new qt(D,F)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function r0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Yh=new rn,Tu=new zh(1,1),Kh=new Ch,Zh=new mp,Jh=new Uh,wu=[],Au=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Pu=new Float32Array(4);function $s(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=wu[s];if(r===void 0&&(r=new Float32Array(s),wu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function za(i,t){let e=Au[t];e===void 0&&(e=new Int32Array(t),Au[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function u0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;Pu.set(n),i.uniformMatrix2fv(this.addr,!1,Pu),Ke(e,n)}}function h0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;Ru.set(n),i.uniformMatrix3fv(this.addr,!1,Ru),Ke(e,n)}}function d0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;Cu.set(n),i.uniformMatrix4fv(this.addr,!1,Cu),Ke(e,n)}}function f0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function _0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function b0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tu.compareFunction=wh,r=Tu):r=Yh,e.setTexture2D(t||r,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zh,s)}function S0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jh,s)}function E0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kh,s)}function T0(i){switch(i){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return u0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return v0;case 36295:return x0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}function w0(i,t){i.uniform1fv(this.addr,t)}function A0(i,t){const e=$s(t,this.size,2);i.uniform2fv(this.addr,e)}function C0(i,t){const e=$s(t,this.size,3);i.uniform3fv(this.addr,e)}function R0(i,t){const e=$s(t,this.size,4);i.uniform4fv(this.addr,e)}function P0(i,t){const e=$s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function L0(i,t){const e=$s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function N0(i,t){const e=$s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function D0(i,t){i.uniform1iv(this.addr,t)}function I0(i,t){i.uniform2iv(this.addr,t)}function U0(i,t){i.uniform3iv(this.addr,t)}function F0(i,t){i.uniform4iv(this.addr,t)}function k0(i,t){i.uniform1uiv(this.addr,t)}function O0(i,t){i.uniform2uiv(this.addr,t)}function B0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function V0(i,t,e){const n=this.cache,s=t.length,r=za(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Yh,r[a])}function H0(i,t,e){const n=this.cache,s=t.length,r=za(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zh,r[a])}function G0(i,t,e){const n=this.cache,s=t.length,r=za(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jh,r[a])}function W0(i,t,e){const n=this.cache,s=t.length,r=za(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kh,r[a])}function X0(i){switch(i){case 5126:return w0;case 35664:return A0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return L0;case 35676:return N0;case 5124:case 35670:return D0;case 35667:case 35671:return I0;case 35668:case 35672:return U0;case 35669:case 35673:return F0;case 5125:return k0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return W0}}class $0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}}class q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X0(e.type)}}class j0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Lu(i,t){i.seq.push(t),i.map[t.id]=t}function Y0(i,t,e){const n=i.name,s=n.length;for(Uo.lastIndex=0;;){const r=Uo.exec(n),a=Uo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lu(e,c===void 0?new $0(o,i,t):new q0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new j0(o),Lu(e,h)),e=h}}}class va{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Y0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Nu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const K0=37297;let Z0=0;function J0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Du=new ae;function Q0(i){pe._getMatrix(Du,pe.workingColorSpace,i);const t=`mat3( ${Du.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Ma:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Iu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+J0(i.getShaderSource(t),a)}else return s}function tv(i,t){const e=Q0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ev(i,t){let e;switch(t){case Tf:e="Linear";break;case wf:e="Reinhard";break;case Af:e="Cineon";break;case ph:e="ACESFilmic";break;case Rf:e="AgX";break;case Pf:e="Neutral";break;case Cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const sa=new k;function nv(){pe.getLuminanceCoefficients(sa);const i=sa.x.toFixed(4),t=sa.y.toFixed(4),e=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function sv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ar(i){return i!==""}function Uu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const av=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(av,lv)}const ov=new Map;function lv(i,t){let e=le[t];if(e===void 0){const n=ov.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}const cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(i){return i.replace(cv,uv)}function uv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ou(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function dv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Fs:t="ENVMAP_TYPE_CUBE";break;case Ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function pv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ia:t="ENVMAP_BLENDING_MULTIPLY";break;case Sf:t="ENVMAP_BLENDING_MIX";break;case Ef:t="ENVMAP_BLENDING_ADD";break}return t}function mv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=hv(e),c=dv(e),u=fv(e),h=pv(e),d=mv(e),p=iv(e),g=sv(r),x=s.createProgram();let m,f,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(m=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?le.tonemapping_pars_fragment:"",e.toneMapping!==Ei?ev("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,tv("linearToOutputTexel",e.outputColorSpace),nv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),a=Cl(a),a=Uu(a,e),a=Fu(a,e),o=Cl(o),o=Uu(o,e),o=Fu(o,e),a=ku(a),o=ku(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=R+m+a,T=R+f+o,D=Nu(s,s.VERTEX_SHADER,C),F=Nu(s,s.FRAGMENT_SHADER,T);s.attachShader(x,D),s.attachShader(x,F),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(N){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(D).trim(),J=s.getShaderInfoLog(F).trim();let et=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,F);else{const it=Iu(s,D,"vertex"),$=Iu(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+it+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||J==="")&&(z=!1);z&&(N.diagnostics={runnable:et,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:J,prefix:f}})}s.deleteShader(D),s.deleteShader(F),U=new va(s,x),y=rv(s,x)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,K0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=F,this}let _v=0;class vv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xv(t),e.set(t,n)),n}}class xv{constructor(t){this.id=_v++,this.code=t,this.usedTimes=0}}function yv(i,t,e,n,s,r,a){const o=new Rh,l=new vv,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,N,V,W){const J=V.fog,et=W.geometry,z=y.isMeshStandardMaterial?V.environment:null,it=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),$=it&&it.mapping===Ua?it.image.height:null,ut=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const mt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,gt=mt!==void 0?mt.length:0;let Pt=0;et.morphAttributes.position!==void 0&&(Pt=1),et.morphAttributes.normal!==void 0&&(Pt=2),et.morphAttributes.color!==void 0&&(Pt=3);let wt,q,Q,nt;if(ut){const re=Bn[ut];wt=re.vertexShader,q=re.fragmentShader}else wt=y.vertexShader,q=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),nt=l.getFragmentShaderID(y);const st=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),te=W.isInstancedMesh===!0,Ht=W.isBatchedMesh===!0,ke=!!y.map,De=!!y.matcap,de=!!it,O=!!y.aoMap,hn=!!y.lightMap,ue=!!y.bumpMap,he=!!y.normalMap,Bt=!!y.displacementMap,Pe=!!y.emissiveMap,Ot=!!y.metalnessMap,L=!!y.roughnessMap,M=y.anisotropy>0,j=y.clearcoat>0,ot=y.dispersion>0,ht=y.iridescence>0,at=y.sheen>0,Ut=y.transmission>0,Mt=M&&!!y.anisotropyMap,Rt=j&&!!y.clearcoatMap,me=j&&!!y.clearcoatNormalMap,pt=j&&!!y.clearcoatRoughnessMap,Lt=ht&&!!y.iridescenceMap,Xt=ht&&!!y.iridescenceThicknessMap,Yt=at&&!!y.sheenColorMap,Nt=at&&!!y.sheenRoughnessMap,fe=!!y.specularMap,se=!!y.specularColorMap,Se=!!y.specularIntensityMap,G=Ut&&!!y.transmissionMap,bt=Ut&&!!y.thicknessMap,tt=!!y.gradientMap,lt=!!y.alphaMap,Tt=y.alphaTest>0,St=!!y.alphaHash,ne=!!y.extensions;let Ie=Ei;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Ze={shaderID:ut,shaderType:y.type,shaderName:y.name,vertexShader:wt,fragmentShader:q,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:nt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&W._colorsTexture!==null,instancing:te,instancingColor:te&&W.instanceColor!==null,instancingMorph:te&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Bs,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:De,envMap:de,envMapMode:de&&it.mapping,envMapCubeUVHeight:$,aoMap:O,lightMap:hn,bumpMap:ue,normalMap:he,displacementMap:d&&Bt,emissiveMap:Pe,normalMapObjectSpace:he&&y.normalMapType===Ff,normalMapTangentSpace:he&&y.normalMapType===Fa,metalnessMap:Ot,roughnessMap:L,anisotropy:M,anisotropyMap:Mt,clearcoat:j,clearcoatMap:Rt,clearcoatNormalMap:me,clearcoatRoughnessMap:pt,dispersion:ot,iridescence:ht,iridescenceMap:Lt,iridescenceThicknessMap:Xt,sheen:at,sheenColorMap:Yt,sheenRoughnessMap:Nt,specularMap:fe,specularColorMap:se,specularIntensityMap:Se,transmission:Ut,transmissionMap:G,thicknessMap:bt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===As&&y.alphaToCoverage===!1,alphaMap:lt,alphaTest:Tt,alphaHash:St,combine:y.combine,mapUv:ke&&x(y.map.channel),aoMapUv:O&&x(y.aoMap.channel),lightMapUv:hn&&x(y.lightMap.channel),bumpMapUv:ue&&x(y.bumpMap.channel),normalMapUv:he&&x(y.normalMap.channel),displacementMapUv:Bt&&x(y.displacementMap.channel),emissiveMapUv:Pe&&x(y.emissiveMap.channel),metalnessMapUv:Ot&&x(y.metalnessMap.channel),roughnessMapUv:L&&x(y.roughnessMap.channel),anisotropyMapUv:Mt&&x(y.anisotropyMap.channel),clearcoatMapUv:Rt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&x(y.sheenRoughnessMap.channel),specularMapUv:fe&&x(y.specularMap.channel),specularColorMapUv:se&&x(y.specularColorMap.channel),specularIntensityMapUv:Se&&x(y.specularIntensityMap.channel),transmissionMapUv:G&&x(y.transmissionMap.channel),thicknessMapUv:bt&&x(y.thicknessMap.channel),alphaMapUv:lt&&x(y.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(he||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!et.attributes.uv&&(ke||lt),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:vt,skinning:W.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===we,decodeVideoTextureEmissive:Pe&&y.emissiveMap.isVideoTexture===!0&&pe.getTransfer(y.emissiveMap.colorSpace)===we,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&y.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function f(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(R(b,y),C(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function R(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function C(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function T(y){const b=g[y.type];let N;if(b){const V=Bn[b];N=Cp.clone(V.uniforms)}else N=y.uniforms;return N}function D(y,b){let N;for(let V=0,W=u.length;V<W;V++){const J=u[V];if(J.cacheKey===b){N=J,++N.usedTimes;break}}return N===void 0&&(N=new gv(i,b,y,r),u.push(N)),N}function F(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function I(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:D,releaseProgram:F,releaseShaderCache:I,programs:u,dispose:U}}function bv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function o(h,d,p,g,x,m){const f=a(h,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,g,x,m){const f=a(h,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||Mv),n.length>1&&n.sort(d||Bu),s.length>1&&s.sort(d||Bu)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Sv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new zu,i.set(n,[a])):s>=r.length?(a=new zu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ev(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Qt};break;case"SpotLight":e={position:new k,direction:new k,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Tv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wv=0;function Av(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cv(i){const t=new Ev,e=Tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new Jt,a=new Jt;function o(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,R=0,C=0,T=0,D=0,F=0,I=0;c.sort(Av);for(let y=0,b=c.length;y<b;y++){const N=c[y],V=N.color,W=N.intensity,J=N.distance,et=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=V.r*W,h+=V.g*W,d+=V.b*W;else if(N.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(N.sh.coefficients[z],W);I++}else if(N.isDirectionalLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const it=N.shadow,$=e.get(N);$.shadowIntensity=it.intensity,$.shadowBias=it.bias,$.shadowNormalBias=it.normalBias,$.shadowRadius=it.radius,$.shadowMapSize=it.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=N.shadow.matrix,R++}n.directional[p]=z,p++}else if(N.isSpotLight){const z=t.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(V).multiplyScalar(W),z.distance=J,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,n.spot[x]=z;const it=N.shadow;if(N.map&&(n.spotLightMap[D]=N.map,D++,it.updateMatrices(N),N.castShadow&&F++),n.spotLightMatrix[x]=it.matrix,N.castShadow){const $=e.get(N);$.shadowIntensity=it.intensity,$.shadowBias=it.bias,$.shadowNormalBias=it.normalBias,$.shadowRadius=it.radius,$.shadowMapSize=it.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=et,T++}x++}else if(N.isRectAreaLight){const z=t.get(N);z.color.copy(V).multiplyScalar(W),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=z,m++}else if(N.isPointLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),z.distance=N.distance,z.decay=N.decay,N.castShadow){const it=N.shadow,$=e.get(N);$.shadowIntensity=it.intensity,$.shadowBias=it.bias,$.shadowNormalBias=it.normalBias,$.shadowRadius=it.radius,$.shadowMapSize=it.mapSize,$.shadowCameraNear=it.camera.near,$.shadowCameraFar=it.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=N.shadow.matrix,C++}n.point[g]=z,g++}else if(N.isHemisphereLight){const z=t.get(N);z.skyColor.copy(N.color).multiplyScalar(W),z.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==R||U.numPointShadows!==C||U.numSpotShadows!==T||U.numSpotMaps!==D||U.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+D-F,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=I,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=R,U.numPointShadows=C,U.numSpotShadows=T,U.numSpotMaps=D,U.numLightProbes=I,n.version=wv++)}function l(c,u){let h=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){const C=c[f];if(C.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(C.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(C.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(C.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),d++}else if(C.isHemisphereLight){const T=n.hemi[x];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Vu(i){const t=new Cv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Vu(i),t.set(s,[o])):r>=a.length?(o=new Vu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nv(i,t,e){let n=new Xl;const s=new qt,r=new qt,a=new Me,o=new Hp({depthPacking:Uf}),l=new Gp,c={},u=e.maxTextureSize,h={[ri]:gn,[gn]:ri,[Mn]:Mn},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Pv,fragmentShader:Lv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new We;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Fe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dh;let f=this.type;this.render=function(F,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;const y=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Si),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=f!==Qn&&this.type===Qn,J=f===Qn&&this.type!==Qn;for(let et=0,z=F.length;et<z;et++){const it=F[et],$=it.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ut=$.getFrameExtents();if(s.multiply(ut),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,$.mapSize.y=r.y)),$.map===null||W===!0||J===!0){const gt=this.type!==Qn?{minFilter:En,magFilter:En}:{};$.map!==null&&$.map.dispose(),$.map=new Ki(s.x,s.y,gt),$.map.texture.name=it.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const mt=$.getViewportCount();for(let gt=0;gt<mt;gt++){const Pt=$.getViewport(gt);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),V.viewport(a),$.updateMatrices(it,gt),n=$.getFrustum(),T(I,U,$.camera,it,this.type)}$.isPointLightShadow!==!0&&this.type===Qn&&R($,U),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,b,N)};function R(F,I){const U=t.update(x);d.defines.VSM_SAMPLES!==F.blurSamples&&(d.defines.VSM_SAMPLES=F.blurSamples,p.defines.VSM_SAMPLES=F.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ki(s.x,s.y)),d.uniforms.shadow_pass.value=F.map.texture,d.uniforms.resolution.value=F.mapSize,d.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(I,null,U,d,x,null),p.uniforms.shadow_pass.value=F.mapPass.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(I,null,U,p,x,null)}function C(F,I,U,y){let b=null;const N=U.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(N!==void 0)b=N;else if(b=U.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=b.uuid,W=I.uuid;let J=c[V];J===void 0&&(J={},c[V]=J);let et=J[W];et===void 0&&(et=b.clone(),J[W]=et,I.addEventListener("dispose",D)),b=et}if(b.visible=I.visible,b.wireframe=I.wireframe,y===Qn?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:h[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=i.properties.get(b);V.light=U}return b}function T(F,I,U,y,b){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&b===Qn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,F.matrixWorld);const W=t.update(F),J=F.material;if(Array.isArray(J)){const et=W.groups;for(let z=0,it=et.length;z<it;z++){const $=et[z],ut=J[$.materialIndex];if(ut&&ut.visible){const mt=C(F,ut,y,b);F.onBeforeShadow(i,F,I,U,W,mt,$),i.renderBufferDirect(U,null,W,mt,F,$),F.onAfterShadow(i,F,I,U,W,mt,$)}}}else if(J.visible){const et=C(F,J,y,b);F.onBeforeShadow(i,F,I,U,W,et,null),i.renderBufferDirect(U,null,W,et,F,null),F.onAfterShadow(i,F,I,U,W,et,null)}}const V=F.children;for(let W=0,J=V.length;W<J;W++)T(V[W],I,U,y,b)}function D(F){F.target.removeEventListener("dispose",D);for(const U in c){const y=c[U],b=F.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const Dv={[Wo]:Xo,[$o]:Yo,[qo]:Ko,[Is]:jo,[Xo]:Wo,[Yo]:$o,[Ko]:qo,[jo]:Is};function Iv(i,t){function e(){let G=!1;const bt=new Me;let tt=null;const lt=new Me(0,0,0,0);return{setMask:function(Tt){tt!==Tt&&!G&&(i.colorMask(Tt,Tt,Tt,Tt),tt=Tt)},setLocked:function(Tt){G=Tt},setClear:function(Tt,St,ne,Ie,Ze){Ze===!0&&(Tt*=Ie,St*=Ie,ne*=Ie),bt.set(Tt,St,ne,Ie),lt.equals(bt)===!1&&(i.clearColor(Tt,St,ne,Ie),lt.copy(bt))},reset:function(){G=!1,tt=null,lt.set(-1,0,0,0)}}}function n(){let G=!1,bt=!1,tt=null,lt=null,Tt=null;return{setReversed:function(St){if(bt!==St){const ne=t.get("EXT_clip_control");bt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const Ie=Tt;Tt=null,this.setClear(Ie)}bt=St},getReversed:function(){return bt},setTest:function(St){St?st(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(St){tt!==St&&!G&&(i.depthMask(St),tt=St)},setFunc:function(St){if(bt&&(St=Dv[St]),lt!==St){switch(St){case Wo:i.depthFunc(i.NEVER);break;case Xo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=St}},setLocked:function(St){G=St},setClear:function(St){Tt!==St&&(bt&&(St=1-St),i.clearDepth(St),Tt=St)},reset:function(){G=!1,tt=null,lt=null,Tt=null,bt=!1}}}function s(){let G=!1,bt=null,tt=null,lt=null,Tt=null,St=null,ne=null,Ie=null,Ze=null;return{setTest:function(re){G||(re?st(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(re){bt!==re&&!G&&(i.stencilMask(re),bt=re)},setFunc:function(re,dn,Pn){(tt!==re||lt!==dn||Tt!==Pn)&&(i.stencilFunc(re,dn,Pn),tt=re,lt=dn,Tt=Pn)},setOp:function(re,dn,Pn){(St!==re||ne!==dn||Ie!==Pn)&&(i.stencilOp(re,dn,Pn),St=re,ne=dn,Ie=Pn)},setLocked:function(re){G=re},setClear:function(re){Ze!==re&&(i.clearStencil(re),Ze=re)},reset:function(){G=!1,bt=null,tt=null,lt=null,Tt=null,St=null,ne=null,Ie=null,Ze=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,R=null,C=null,T=null,D=null,F=null,I=new Qt(0,0,0),U=0,y=!1,b=null,N=null,V=null,W=null,J=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,it=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec($)[1]),z=it>=1):$.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=it>=2);let ut=null,mt={};const gt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),wt=new Me().fromArray(gt),q=new Me().fromArray(Pt);function Q(G,bt,tt,lt){const Tt=new Uint8Array(4),St=i.createTexture();i.bindTexture(G,St),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<tt;ne++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(bt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return St}const nt={};nt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Is),ue(!1),he(Mc),st(i.CULL_FACE),O(Si);function st(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function vt(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function te(G,bt){return h[G]!==bt?(i.bindFramebuffer(G,bt),h[G]=bt,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=bt),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ht(G,bt){let tt=p,lt=!1;if(G){tt=d.get(bt),tt===void 0&&(tt=[],d.set(bt,tt));const Tt=G.textures;if(tt.length!==Tt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let St=0,ne=Tt.length;St<ne;St++)tt[St]=i.COLOR_ATTACHMENT0+St;tt.length=Tt.length,lt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,lt=!0);lt&&i.drawBuffers(tt)}function ke(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const De={[Gi]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[of]:i.FUNC_REVERSE_SUBTRACT};De[lf]=i.MIN,De[cf]=i.MAX;const de={[uf]:i.ZERO,[hf]:i.ONE,[df]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[gf]:i.DST_COLOR,[pf]:i.DST_ALPHA,[ff]:i.ONE_MINUS_SRC_COLOR,[Go]:i.ONE_MINUS_SRC_ALPHA,[_f]:i.ONE_MINUS_DST_COLOR,[mf]:i.ONE_MINUS_DST_ALPHA,[xf]:i.CONSTANT_COLOR,[yf]:i.ONE_MINUS_CONSTANT_COLOR,[bf]:i.CONSTANT_ALPHA,[Mf]:i.ONE_MINUS_CONSTANT_ALPHA};function O(G,bt,tt,lt,Tt,St,ne,Ie,Ze,re){if(G===Si){x===!0&&(vt(i.BLEND),x=!1);return}if(x===!1&&(st(i.BLEND),x=!0),G!==rf){if(G!==m||re!==y){if((f!==Gi||T!==Gi)&&(i.blendEquation(i.FUNC_ADD),f=Gi,T=Gi),re)switch(G){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}R=null,C=null,D=null,F=null,I.set(0,0,0),U=0,m=G,y=re}return}Tt=Tt||bt,St=St||tt,ne=ne||lt,(bt!==f||Tt!==T)&&(i.blendEquationSeparate(De[bt],De[Tt]),f=bt,T=Tt),(tt!==R||lt!==C||St!==D||ne!==F)&&(i.blendFuncSeparate(de[tt],de[lt],de[St],de[ne]),R=tt,C=lt,D=St,F=ne),(Ie.equals(I)===!1||Ze!==U)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Ze),I.copy(Ie),U=Ze),m=G,y=!1}function hn(G,bt){G.side===Mn?vt(i.CULL_FACE):st(i.CULL_FACE);let tt=G.side===gn;bt&&(tt=!tt),ue(tt),G.blending===As&&G.transparent===!1?O(Si):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const lt=G.stencilWrite;o.setTest(lt),lt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Pe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function he(G){G!==nf?(st(i.CULL_FACE),G!==N&&(G===Mc?i.cullFace(i.BACK):G===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),N=G}function Bt(G){G!==V&&(z&&i.lineWidth(G),V=G)}function Pe(G,bt,tt){G?(st(i.POLYGON_OFFSET_FILL),(W!==bt||J!==tt)&&(i.polygonOffset(bt,tt),W=bt,J=tt)):vt(i.POLYGON_OFFSET_FILL)}function Ot(G){G?st(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function L(G){G===void 0&&(G=i.TEXTURE0+et-1),ut!==G&&(i.activeTexture(G),ut=G)}function M(G,bt,tt){tt===void 0&&(ut===null?tt=i.TEXTURE0+et-1:tt=ut);let lt=mt[tt];lt===void 0&&(lt={type:void 0,texture:void 0},mt[tt]=lt),(lt.type!==G||lt.texture!==bt)&&(ut!==tt&&(i.activeTexture(tt),ut=tt),i.bindTexture(G,bt||nt[G]),lt.type=G,lt.texture=bt)}function j(){const G=mt[ut];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(G){wt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),wt.copy(G))}function Nt(G){q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function fe(G,bt){let tt=c.get(bt);tt===void 0&&(tt=new WeakMap,c.set(bt,tt));let lt=tt.get(G);lt===void 0&&(lt=i.getUniformBlockIndex(bt,G.name),tt.set(G,lt))}function se(G,bt){const lt=c.get(bt).get(G);l.get(bt)!==lt&&(i.uniformBlockBinding(bt,lt,G.__bindingPointIndex),l.set(bt,lt))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ut=null,mt={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,R=null,C=null,T=null,D=null,F=null,I=new Qt(0,0,0),U=0,y=!1,b=null,N=null,V=null,W=null,J=null,wt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:vt,bindFramebuffer:te,drawBuffers:Ht,useProgram:ke,setBlending:O,setMaterial:hn,setFlipSided:ue,setCullFace:he,setLineWidth:Bt,setPolygonOffset:Pe,setScissorTest:Ot,activeTexture:L,bindTexture:M,unbindTexture:j,compressedTexImage2D:ot,compressedTexImage3D:ht,texImage2D:Lt,texImage3D:Xt,updateUBOMapping:fe,uniformBlockBinding:se,texStorage2D:me,texStorage3D:pt,texSubImage2D:at,texSubImage3D:Ut,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Rt,scissor:Yt,viewport:Nt,reset:Se}}function Uv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,M){return p?new OffscreenCanvas(L,M):hr("canvas")}function x(L,M,j){let ot=1;const ht=Ot(L);if((ht.width>j||ht.height>j)&&(ot=j/Math.max(ht.width,ht.height)),ot<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const at=Math.floor(ot*ht.width),Ut=Math.floor(ot*ht.height);h===void 0&&(h=g(at,Ut));const Mt=M?g(at,Ut):h;return Mt.width=at,Mt.height=Ut,Mt.getContext("2d").drawImage(L,0,0,at,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+at+"x"+Ut+")."),Mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){i.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(L,M,j,ot,ht=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=M;if(M===i.RED&&(j===i.FLOAT&&(at=i.R32F),j===i.HALF_FLOAT&&(at=i.R16F),j===i.UNSIGNED_BYTE&&(at=i.R8)),M===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(at=i.R8UI),j===i.UNSIGNED_SHORT&&(at=i.R16UI),j===i.UNSIGNED_INT&&(at=i.R32UI),j===i.BYTE&&(at=i.R8I),j===i.SHORT&&(at=i.R16I),j===i.INT&&(at=i.R32I)),M===i.RG&&(j===i.FLOAT&&(at=i.RG32F),j===i.HALF_FLOAT&&(at=i.RG16F),j===i.UNSIGNED_BYTE&&(at=i.RG8)),M===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(at=i.RG8UI),j===i.UNSIGNED_SHORT&&(at=i.RG16UI),j===i.UNSIGNED_INT&&(at=i.RG32UI),j===i.BYTE&&(at=i.RG8I),j===i.SHORT&&(at=i.RG16I),j===i.INT&&(at=i.RG32I)),M===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(at=i.RGB8UI),j===i.UNSIGNED_SHORT&&(at=i.RGB16UI),j===i.UNSIGNED_INT&&(at=i.RGB32UI),j===i.BYTE&&(at=i.RGB8I),j===i.SHORT&&(at=i.RGB16I),j===i.INT&&(at=i.RGB32I)),M===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),j===i.UNSIGNED_INT&&(at=i.RGBA32UI),j===i.BYTE&&(at=i.RGBA8I),j===i.SHORT&&(at=i.RGBA16I),j===i.INT&&(at=i.RGBA32I)),M===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),M===i.RGBA){const Ut=ht?Ma:pe.getTransfer(ot);j===i.FLOAT&&(at=i.RGBA32F),j===i.HALF_FLOAT&&(at=i.RGBA16F),j===i.UNSIGNED_BYTE&&(at=Ut===we?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function T(L,M){let j;return L?M===null||M===Yi||M===ks?j=i.DEPTH24_STENCIL8:M===zn?j=i.DEPTH32F_STENCIL8:M===ur&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===ks?j=i.DEPTH_COMPONENT24:M===zn?j=i.DEPTH_COMPONENT32F:M===ur&&(j=i.DEPTH_COMPONENT16),j}function D(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==En&&L.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function F(L){const M=L.target;M.removeEventListener("dispose",F),U(M),M.isVideoTexture&&u.delete(M)}function I(L){const M=L.target;M.removeEventListener("dispose",I),b(M)}function U(L){const M=n.get(L);if(M.__webglInit===void 0)return;const j=L.source,ot=d.get(j);if(ot){const ht=ot[M.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&y(L),Object.keys(ot).length===0&&d.delete(j)}n.remove(L)}function y(L){const M=n.get(L);i.deleteTexture(M.__webglTexture);const j=L.source,ot=d.get(j);delete ot[M.__cacheKey],a.memory.textures--}function b(L){const M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(M.__webglFramebuffer[ot]))for(let ht=0;ht<M.__webglFramebuffer[ot].length;ht++)i.deleteFramebuffer(M.__webglFramebuffer[ot][ht]);else i.deleteFramebuffer(M.__webglFramebuffer[ot]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ot])}else{if(Array.isArray(M.__webglFramebuffer))for(let ot=0;ot<M.__webglFramebuffer.length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[ot]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ot=0;ot<M.__webglColorRenderbuffer.length;ot++)M.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ot]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const j=L.textures;for(let ot=0,ht=j.length;ot<ht;ot++){const at=n.get(j[ot]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(j[ot])}n.remove(L)}let N=0;function V(){N=0}function W(){const L=N;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function J(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function et(L,M){const j=n.get(L);if(L.isVideoTexture&&Bt(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const ot=L.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(j,L,M);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+M)}function z(L,M){const j=n.get(L);if(L.version>0&&j.__version!==L.version){q(j,L,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+M)}function it(L,M){const j=n.get(L);if(L.version>0&&j.__version!==L.version){q(j,L,M);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+M)}function $(L,M){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Q(j,L,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+M)}const ut={[Xi]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},mt={[En]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},gt={[kf]:i.NEVER,[Gf]:i.ALWAYS,[Of]:i.LESS,[wh]:i.LEQUAL,[Bf]:i.EQUAL,[Hf]:i.GEQUAL,[zf]:i.GREATER,[Vf]:i.NOTEQUAL};function Pt(L,M){if(M.type===zn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===Qa||M.magFilter===Ar||M.magFilter===ei||M.minFilter===Sn||M.minFilter===Qa||M.minFilter===Ar||M.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ut[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ut[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ut[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,mt[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,mt[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===En||M.minFilter!==Ar&&M.minFilter!==ei||M.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function wt(L,M){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",F));const ot=M.source;let ht=d.get(ot);ht===void 0&&(ht={},d.set(ot,ht));const at=J(M);if(at!==L.__cacheKey){ht[at]===void 0&&(ht[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ht[at].usedTimes++;const Ut=ht[L.__cacheKey];Ut!==void 0&&(ht[L.__cacheKey].usedTimes--,Ut.usedTimes===0&&y(M)),L.__cacheKey=at,L.__webglTexture=ht[at].texture}return j}function q(L,M,j){let ot=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=i.TEXTURE_3D);const ht=wt(L,M),at=M.source;e.bindTexture(ot,L.__webglTexture,i.TEXTURE0+j);const Ut=n.get(at);if(at.version!==Ut.__version||ht===!0){e.activeTexture(i.TEXTURE0+j);const Mt=pe.getPrimaries(pe.workingColorSpace),Rt=M.colorSpace===bi?null:pe.getPrimaries(M.colorSpace),me=M.colorSpace===bi||Mt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let pt=x(M.image,!1,s.maxTextureSize);pt=Pe(M,pt);const Lt=r.convert(M.format,M.colorSpace),Xt=r.convert(M.type);let Yt=C(M.internalFormat,Lt,Xt,M.colorSpace,M.isVideoTexture);Pt(ot,M);let Nt;const fe=M.mipmaps,se=M.isVideoTexture!==!0,Se=Ut.__version===void 0||ht===!0,G=at.dataReady,bt=D(M,pt);if(M.isDepthTexture)Yt=T(M.format===Os,M.type),Se&&(se?e.texStorage2D(i.TEXTURE_2D,1,Yt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Lt,Xt,null));else if(M.isDataTexture)if(fe.length>0){se&&Se&&e.texStorage2D(i.TEXTURE_2D,bt,Yt,fe[0].width,fe[0].height);for(let tt=0,lt=fe.length;tt<lt;tt++)Nt=fe[tt],se?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Nt.width,Nt.height,Lt,Xt,Nt.data):e.texImage2D(i.TEXTURE_2D,tt,Yt,Nt.width,Nt.height,0,Lt,Xt,Nt.data);M.generateMipmaps=!1}else se?(Se&&e.texStorage2D(i.TEXTURE_2D,bt,Yt,pt.width,pt.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Lt,Xt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Lt,Xt,pt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){se&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Yt,fe[0].width,fe[0].height,pt.depth);for(let tt=0,lt=fe.length;tt<lt;tt++)if(Nt=fe[tt],M.format!==Cn)if(Lt!==null)if(se){if(G)if(M.layerUpdates.size>0){const Tt=_u(Nt.width,Nt.height,M.format,M.type);for(const St of M.layerUpdates){const ne=Nt.data.subarray(St*Tt/Nt.data.BYTES_PER_ELEMENT,(St+1)*Tt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,St,Nt.width,Nt.height,1,Lt,ne)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Nt.width,Nt.height,pt.depth,Lt,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Yt,Nt.width,Nt.height,pt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Nt.width,Nt.height,pt.depth,Lt,Xt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Yt,Nt.width,Nt.height,pt.depth,0,Lt,Xt,Nt.data)}else{se&&Se&&e.texStorage2D(i.TEXTURE_2D,bt,Yt,fe[0].width,fe[0].height);for(let tt=0,lt=fe.length;tt<lt;tt++)Nt=fe[tt],M.format!==Cn?Lt!==null?se?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Nt.width,Nt.height,Lt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Yt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Nt.width,Nt.height,Lt,Xt,Nt.data):e.texImage2D(i.TEXTURE_2D,tt,Yt,Nt.width,Nt.height,0,Lt,Xt,Nt.data)}else if(M.isDataArrayTexture)if(se){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Yt,pt.width,pt.height,pt.depth),G)if(M.layerUpdates.size>0){const tt=_u(pt.width,pt.height,M.format,M.type);for(const lt of M.layerUpdates){const Tt=pt.data.subarray(lt*tt/pt.data.BYTES_PER_ELEMENT,(lt+1)*tt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,pt.width,pt.height,1,Lt,Xt,Tt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Lt,Xt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,pt.width,pt.height,pt.depth,0,Lt,Xt,pt.data);else if(M.isData3DTexture)se?(Se&&e.texStorage3D(i.TEXTURE_3D,bt,Yt,pt.width,pt.height,pt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Lt,Xt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,pt.width,pt.height,pt.depth,0,Lt,Xt,pt.data);else if(M.isFramebufferTexture){if(Se)if(se)e.texStorage2D(i.TEXTURE_2D,bt,Yt,pt.width,pt.height);else{let tt=pt.width,lt=pt.height;for(let Tt=0;Tt<bt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Yt,tt,lt,0,Lt,Xt,null),tt>>=1,lt>>=1}}else if(fe.length>0){if(se&&Se){const tt=Ot(fe[0]);e.texStorage2D(i.TEXTURE_2D,bt,Yt,tt.width,tt.height)}for(let tt=0,lt=fe.length;tt<lt;tt++)Nt=fe[tt],se?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Lt,Xt,Nt):e.texImage2D(i.TEXTURE_2D,tt,Yt,Lt,Xt,Nt);M.generateMipmaps=!1}else if(se){if(Se){const tt=Ot(pt);e.texStorage2D(i.TEXTURE_2D,bt,Yt,tt.width,tt.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Xt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Lt,Xt,pt);m(M)&&f(ot),Ut.__version=at.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Q(L,M,j){if(M.image.length!==6)return;const ot=wt(L,M),ht=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+j);const at=n.get(ht);if(ht.version!==at.__version||ot===!0){e.activeTexture(i.TEXTURE0+j);const Ut=pe.getPrimaries(pe.workingColorSpace),Mt=M.colorSpace===bi?null:pe.getPrimaries(M.colorSpace),Rt=M.colorSpace===bi||Ut===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,pt=M.image[0]&&M.image[0].isDataTexture,Lt=[];for(let lt=0;lt<6;lt++)!me&&!pt?Lt[lt]=x(M.image[lt],!0,s.maxCubemapSize):Lt[lt]=pt?M.image[lt].image:M.image[lt],Lt[lt]=Pe(M,Lt[lt]);const Xt=Lt[0],Yt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),fe=C(M.internalFormat,Yt,Nt,M.colorSpace),se=M.isVideoTexture!==!0,Se=at.__version===void 0||ot===!0,G=ht.dataReady;let bt=D(M,Xt);Pt(i.TEXTURE_CUBE_MAP,M);let tt;if(me){se&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,fe,Xt.width,Xt.height);for(let lt=0;lt<6;lt++){tt=Lt[lt].mipmaps;for(let Tt=0;Tt<tt.length;Tt++){const St=tt[Tt];M.format!==Cn?Yt!==null?se?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,0,0,St.width,St.height,Yt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,fe,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,0,0,St.width,St.height,Yt,Nt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,fe,St.width,St.height,0,Yt,Nt,St.data)}}}else{if(tt=M.mipmaps,se&&Se){tt.length>0&&bt++;const lt=Ot(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,fe,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(pt){se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Lt[lt].width,Lt[lt].height,Yt,Nt,Lt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,fe,Lt[lt].width,Lt[lt].height,0,Yt,Nt,Lt[lt].data);for(let Tt=0;Tt<tt.length;Tt++){const ne=tt[Tt].image[lt].image;se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,0,0,ne.width,ne.height,Yt,Nt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,fe,ne.width,ne.height,0,Yt,Nt,ne.data)}}else{se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Yt,Nt,Lt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,fe,Yt,Nt,Lt[lt]);for(let Tt=0;Tt<tt.length;Tt++){const St=tt[Tt];se?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,0,0,Yt,Nt,St.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,fe,Yt,Nt,St.image[lt])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),at.__version=ht.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function nt(L,M,j,ot,ht,at){const Ut=r.convert(j.format,j.colorSpace),Mt=r.convert(j.type),Rt=C(j.internalFormat,Ut,Mt,j.colorSpace),me=n.get(M),pt=n.get(j);if(pt.__renderTarget=M,!me.__hasExternalTextures){const Lt=Math.max(1,M.width>>at),Xt=Math.max(1,M.height>>at);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,at,Rt,Lt,Xt,M.depth,0,Ut,Mt,null):e.texImage2D(ht,at,Rt,Lt,Xt,0,Ut,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),he(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ht,pt.__webglTexture,0,ue(M)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ht,pt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(L,M,j){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){const ot=M.depthTexture,ht=ot&&ot.isDepthTexture?ot.type:null,at=T(M.stencilBuffer,ht),Ut=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=ue(M);he(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,at,M.width,M.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,at,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,at,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,L)}else{const ot=M.textures;for(let ht=0;ht<ot.length;ht++){const at=ot[ht],Ut=r.convert(at.format,at.colorSpace),Mt=r.convert(at.type),Rt=C(at.internalFormat,Ut,Mt,at.colorSpace),me=ue(M);j&&he(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,Rt,M.width,M.height):he(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,Rt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=n.get(M.depthTexture);ot.__renderTarget=M,(!ot.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),et(M.depthTexture,0);const ht=ot.__webglTexture,at=ue(M);if(M.depthTexture.format===Cs)he(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(M.depthTexture.format===Os)he(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function te(L){const M=n.get(L),j=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const ot=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ot){const ht=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ot.removeEventListener("dispose",ht)};ot.addEventListener("dispose",ht),M.__depthDisposeCallback=ht}M.__boundDepthTexture=ot}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");vt(M.__webglFramebuffer,L)}else if(j){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]===void 0)M.__webglDepthbuffer[ot]=i.createRenderbuffer(),st(M.__webglDepthbuffer[ot],L,!1);else{const ht=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),st(M.__webglDepthbuffer,L,!1);else{const ot=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(L,M,j){const ot=n.get(L);M!==void 0&&nt(ot.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&te(L)}function ke(L){const M=L.texture,j=n.get(L),ot=n.get(M);L.addEventListener("dispose",I);const ht=L.textures,at=L.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=M.version,a.memory.textures++),at){j.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[Mt]=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)j.__webglFramebuffer[Mt][Rt]=i.createFramebuffer()}else j.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)j.__webglFramebuffer[Mt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let Mt=0,Rt=ht.length;Mt<Rt;Mt++){const me=n.get(ht[Mt]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&he(L)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ht.length;Mt++){const Rt=ht[Mt];j.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Mt]);const me=r.convert(Rt.format,Rt.colorSpace),pt=r.convert(Rt.type),Lt=C(Rt.internalFormat,me,pt,Rt.colorSpace,L.isXRRenderTarget===!0),Xt=ue(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Lt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,j.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),st(j.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,M);for(let Mt=0;Mt<6;Mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)nt(j.__webglFramebuffer[Mt][Rt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Rt);else nt(j.__webglFramebuffer[Mt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Mt=0,Rt=ht.length;Mt<Rt;Mt++){const me=ht[Mt],pt=n.get(me);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),Pt(i.TEXTURE_2D,me),nt(j.__webglFramebuffer,L,me,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(me)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ot.__webglTexture),Pt(Mt,M),M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)nt(j.__webglFramebuffer[Rt],L,M,i.COLOR_ATTACHMENT0,Mt,Rt);else nt(j.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,Mt,0);m(M)&&f(Mt),e.unbindTexture()}L.depthBuffer&&te(L)}function De(L){const M=L.textures;for(let j=0,ot=M.length;j<ot;j++){const ht=M[j];if(m(ht)){const at=R(L),Ut=n.get(ht).__webglTexture;e.bindTexture(at,Ut),f(at),e.unbindTexture()}}}const de=[],O=[];function hn(L){if(L.samples>0){if(he(L)===!1){const M=L.textures,j=L.width,ot=L.height;let ht=i.COLOR_BUFFER_BIT;const at=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(L),Mt=M.length>1;if(Mt)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const me=n.get(M[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,j,ot,0,0,j,ot,ht,i.NEAREST),l===!0&&(de.length=0,O.length=0,de.push(i.COLOR_ATTACHMENT0+Rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(de.push(at),O.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const me=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,me,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ue(L){return Math.min(s.maxSamples,L.samples)}function he(L){const M=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Bt(L){const M=a.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function Pe(L,M){const j=L.colorSpace,ot=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Bs&&j!==bi&&(pe.getTransfer(j)===we?(ot!==Cn||ht!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}function Ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=et,this.setTexture2DArray=z,this.setTexture3D=it,this.setTextureCube=$,this.rebindTextures=Ht,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=he}function Fv(i,t){function e(n,s=bi){let r;const a=pe.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return i.BYTE;if(n===_h)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Fl)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===pr)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===yh)return i.RGB;if(n===Cn)return i.RGBA;if(n===bh)return i.LUMINANCE;if(n===Mh)return i.LUMINANCE_ALPHA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===Sh)return i.RED;if(n===Bl)return i.RED_INTEGER;if(n===Eh)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Vl)return i.RGBA_INTEGER;if(n===da||n===fa||n===pa||n===ma)if(a===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return a===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===ll||n===cl||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===bl||n===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return a===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===Sl||n===El||n===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ov=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ai({vertexShader:kv,fragmentShader:Ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zv extends Qi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const x=new Bv,m=e.getContextAttributes();let f=null,R=null;const C=[],T=[],D=new qt;let F=null;const I=new sn;I.viewport=new Me;const U=new sn;U.viewport=new Me;const y=[I,U],b=new am;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=C[q];return Q===void 0&&(Q=new bo,C[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=C[q];return Q===void 0&&(Q=new bo,C[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=C[q];return Q===void 0&&(Q=new bo,C[q]=Q),Q.getHandSpace()};function W(q){const Q=T.indexOf(q.inputSource);if(Q===-1)return;const nt=C[Q];nt!==void 0&&(nt.update(q.inputSource,q.frame,c||a),nt.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",et);for(let q=0;q<C.length;q++){const Q=T[q];Q!==null&&(T[q]=null,C[q].disconnect(Q))}N=null,V=null,x.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,R=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",J),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,st=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Os:Cs,st=m.stencil?ks:Yi);const te={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(te),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),R=new Ki(d.textureWidth,d.textureHeight,{format:Cn,type:ai,depthTexture:new zh(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Ki(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function et(q){for(let Q=0;Q<q.removed.length;Q++){const nt=q.removed[Q],st=T.indexOf(nt);st>=0&&(T[st]=null,C[st].disconnect(nt))}for(let Q=0;Q<q.added.length;Q++){const nt=q.added[Q];let st=T.indexOf(nt);if(st===-1){for(let te=0;te<C.length;te++)if(te>=T.length){T.push(nt),st=te;break}else if(T[te]===null){T[te]=nt,st=te;break}if(st===-1)break}const vt=C[st];vt&&vt.connect(nt)}}const z=new k,it=new k;function $(q,Q,nt){z.setFromMatrixPosition(Q.matrixWorld),it.setFromMatrixPosition(nt.matrixWorld);const st=z.distanceTo(it),vt=Q.projectionMatrix.elements,te=nt.projectionMatrix.elements,Ht=vt[14]/(vt[10]-1),ke=vt[14]/(vt[10]+1),De=(vt[9]+1)/vt[5],de=(vt[9]-1)/vt[5],O=(vt[8]-1)/vt[0],hn=(te[8]+1)/te[0],ue=Ht*O,he=Ht*hn,Bt=st/(-O+hn),Pe=Bt*-O;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pe),q.translateZ(Bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),vt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ot=Ht+Bt,L=ke+Bt,M=ue-Pe,j=he+(st-Pe),ot=De*ke/L*Ot,ht=de*ke/L*Ot;q.projectionMatrix.makePerspective(M,j,ot,ht,Ot,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ut(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,nt=q.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(nt=x.depthFar)),b.near=U.near=I.near=Q,b.far=U.far=I.far=nt,(N!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,V=b.far),I.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,b.layers.mask=I.layers.mask|U.layers.mask;const st=q.parent,vt=b.cameras;ut(b,st);for(let te=0;te<vt.length;te++)ut(vt[te],st);vt.length===2?$(b,I,U):b.projectionMatrix.copy(I.projectionMatrix),mt(q,b,st)};function mt(q,Q,nt){nt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(nt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let gt=null;function Pt(q,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const nt=u.views;p!==null&&(t.setRenderTargetFramebuffer(R,p.framebuffer),t.setRenderTarget(R));let st=!1;nt.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let Ht=0;Ht<nt.length;Ht++){const ke=nt[Ht];let De=null;if(p!==null)De=p.getViewport(ke);else{const O=h.getViewSubImage(d,ke);De=O.viewport,Ht===0&&(t.setRenderTargetTextures(R,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(R))}let de=y[Ht];de===void 0&&(de=new sn,de.layers.enable(Ht),de.viewport=new Me,y[Ht]=de),de.matrix.fromArray(ke.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ke.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(De.x,De.y,De.width,De.height),Ht===0&&(b.matrix.copy(de.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push(de)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Ht=h.getDepthInformation(nt[0]);Ht&&Ht.isValid&&Ht.texture&&x.init(t,Ht,s.renderState)}}for(let nt=0;nt<C.length;nt++){const st=T[nt],vt=C[nt];st!==null&&vt!==void 0&&vt.update(st,Q,c||a)}gt&&gt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const wt=new jh;wt.setAnimationLoop(Pt),this.setAnimationLoop=function(q){gt=q},this.dispose=function(){}}}const Bi=new vn,Vv=new Jt;function Hv(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Dh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,R,C,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,R,C):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const R=t.get(f),C=R.envMap,T=R.envMapRotation;C&&(m.envMap.value=C,Bi.copy(T),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(Bi)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,R,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*R,m.scale.value=C*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,R){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const R=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,C){const T=C.program;n.uniformBlockBinding(R,T)}function c(R,C){let T=s[R.id];T===void 0&&(g(R),T=u(R),s[R.id]=T,R.addEventListener("dispose",m));const D=C.program;n.updateUBOMapping(R,D);const F=t.render.frame;r[R.id]!==F&&(d(R),r[R.id]=F)}function u(R){const C=h();R.__bindingPointIndex=C;const T=i.createBuffer(),D=R.__size,F=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,T),T}function h(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const C=s[R.id],T=R.uniforms,D=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let F=0,I=T.length;F<I;F++){const U=Array.isArray(T[F])?T[F]:[T[F]];for(let y=0,b=U.length;y<b;y++){const N=U[y];if(p(N,F,y,D)===!0){const V=N.__offset,W=Array.isArray(N.value)?N.value:[N.value];let J=0;for(let et=0;et<W.length;et++){const z=W[et],it=x(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+J,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,J),J+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,C,T,D){const F=R.value,I=C+"_"+T;if(D[I]===void 0)return typeof F=="number"||typeof F=="boolean"?D[I]=F:D[I]=F.clone(),!0;{const U=D[I];if(typeof F=="number"||typeof F=="boolean"){if(U!==F)return D[I]=F,!0}else if(U.equals(F)===!1)return U.copy(F),!0}return!1}function g(R){const C=R.uniforms;let T=0;const D=16;for(let I=0,U=C.length;I<U;I++){const y=Array.isArray(C[I])?C[I]:[C[I]];for(let b=0,N=y.length;b<N;b++){const V=y[b],W=Array.isArray(V.value)?V.value:[V.value];for(let J=0,et=W.length;J<et;J++){const z=W[J],it=x(z),$=T%D,ut=$%it.boundary,mt=$+ut;T+=ut,mt!==0&&D-mt<it.storage&&(T+=D-mt),V.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=it.storage}}}const F=T%D;return F>0&&(T+=D-F),R.__size=T,R.__cache={},this}function x(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function m(R){const C=R.target;C.removeEventListener("dispose",m);const T=a.indexOf(C.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function f(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Wv{constructor(t={}){const{canvas:e=ap(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const R=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Ei,this.toneMappingExposure=1;const T=this;let D=!1,F=0,I=0,U=null,y=-1,b=null;const N=new Me,V=new Me;let W=null;const J=new Qt(0);let et=0,z=e.width,it=e.height,$=1,ut=null,mt=null;const gt=new Me(0,0,z,it),Pt=new Me(0,0,z,it);let wt=!1;const q=new Xl;let Q=!1,nt=!1;this.transmissionResolutionScale=1;const st=new Jt,vt=new Jt,te=new k,Ht=new Me,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function de(){return U===null?$:1}let O=n;function hn(E,H){return e.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ul}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",St,!1),O===null){const H="webgl2";if(O=hn(H,E),O===null)throw hn(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ue,he,Bt,Pe,Ot,L,M,j,ot,ht,at,Ut,Mt,Rt,me,pt,Lt,Xt,Yt,Nt,fe,se,Se,G;function bt(){ue=new t0(O),ue.init(),se=new Fv(O,ue),he=new q_(O,ue,t,se),Bt=new Iv(O,ue),he.reverseDepthBuffer&&d&&Bt.buffers.depth.setReversed(!0),Pe=new i0(O),Ot=new bv,L=new Uv(O,ue,Bt,Ot,he,se,Pe),M=new Y_(T),j=new Q_(T),ot=new cm(O),Se=new X_(O,ot),ht=new e0(O,ot,Pe,Se),at=new r0(O,ht,ot,Pe),Yt=new s0(O,he,L),pt=new j_(Ot),Ut=new yv(T,M,j,ue,he,Se,pt),Mt=new Hv(T,Ot),Rt=new Sv,me=new Rv(ue),Xt=new W_(T,M,j,Bt,at,p,l),Lt=new Nv(T,at,he),G=new Gv(O,Pe,he,Bt),Nt=new $_(O,ue,Pe),fe=new n0(O,ue,Pe),Pe.programs=Ut.programs,T.capabilities=he,T.extensions=ue,T.properties=Ot,T.renderLists=Rt,T.shadowMap=Lt,T.state=Bt,T.info=Pe}bt();const tt=new zv(T,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(z,it,!1))},this.getSize=function(E){return E.set(z,it)},this.setSize=function(E,H,Y=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,it=H,e.width=Math.floor(E*$),e.height=Math.floor(H*$),Y===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(z*$,it*$).floor()},this.setDrawingBufferSize=function(E,H,Y){z=E,it=H,$=Y,e.width=Math.floor(E*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,H,Y,K){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,H,Y,K),Bt.viewport(N.copy(gt).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Pt)},this.setScissor=function(E,H,Y,K){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,H,Y,K),Bt.scissor(V.copy(Pt).multiplyScalar($).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(E){Bt.setScissorTest(wt=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,Y=!0){let K=0;if(E){let X=!1;if(U!==null){const ft=U.texture.format;X=ft===Vl||ft===zl||ft===Bl}if(X){const ft=U.texture.type,xt=ft===ai||ft===Yi||ft===ur||ft===ks||ft===kl||ft===Ol,At=Xt.getClearColor(),Dt=Xt.getClearAlpha(),Kt=At.r,Zt=At.g,zt=At.b;xt?(g[0]=Kt,g[1]=Zt,g[2]=zt,g[3]=Dt,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Kt,x[1]=Zt,x[2]=zt,x[3]=Dt,O.clearBufferiv(O.COLOR,0,x))}else K|=O.COLOR_BUFFER_BIT}H&&(K|=O.DEPTH_BUFFER_BIT),Y&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Xt.dispose(),Rt.dispose(),me.dispose(),Ot.dispose(),M.dispose(),j.dispose(),at.dispose(),Se.dispose(),G.dispose(),Ut.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",br),tt.removeEventListener("sessionend",Mr),Wn.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Pe.autoReset,H=Lt.enabled,Y=Lt.autoUpdate,K=Lt.needsUpdate,X=Lt.type;bt(),Pe.autoReset=E,Lt.enabled=H,Lt.autoUpdate=Y,Lt.needsUpdate=K,Lt.type=X}function St(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ne(E){const H=E.target;H.removeEventListener("dispose",ne),Ie(H)}function Ie(E){Ze(E),Ot.remove(E)}function Ze(E){const H=Ot.get(E).programs;H!==void 0&&(H.forEach(function(Y){Ut.releaseProgram(Y)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Y,K,X,ft){H===null&&(H=ke);const xt=X.isMesh&&X.matrixWorld.determinant()<0,At=qa(E,H,Y,K,X);Bt.setMaterial(K,xt);let Dt=Y.index,Kt=1;if(K.wireframe===!0){if(Dt=ht.getWireframeAttribute(Y),Dt===void 0)return;Kt=2}const Zt=Y.drawRange,zt=Y.attributes.position;let oe=Zt.start*Kt,_e=(Zt.start+Zt.count)*Kt;ft!==null&&(oe=Math.max(oe,ft.start*Kt),_e=Math.min(_e,(ft.start+ft.count)*Kt)),Dt!==null?(oe=Math.max(oe,0),_e=Math.min(_e,Dt.count)):zt!=null&&(oe=Math.max(oe,0),_e=Math.min(_e,zt.count));const Oe=_e-oe;if(Oe<0||Oe===1/0)return;Se.setup(X,K,At,Y,Dt);let Ue,ge=Nt;if(Dt!==null&&(Ue=ot.get(Dt),ge=fe,ge.setIndex(Ue)),X.isMesh)K.wireframe===!0?(Bt.setLineWidth(K.wireframeLinewidth*de()),ge.setMode(O.LINES)):ge.setMode(O.TRIANGLES);else if(X.isLine){let Gt=K.linewidth;Gt===void 0&&(Gt=1),Bt.setLineWidth(Gt*de()),X.isLineSegments?ge.setMode(O.LINES):X.isLineLoop?ge.setMode(O.LINE_LOOP):ge.setMode(O.LINE_STRIP)}else X.isPoints?ge.setMode(O.POINTS):X.isSprite&&ge.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ge.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Gt=X._multiDrawStarts,Xe=X._multiDrawCounts,ve=X._multiDrawCount,fn=Dt?ot.get(Dt).bytesPerElement:1,Ne=Ot.get(K).currentProgram.getUniforms();for(let Qe=0;Qe<ve;Qe++)Ne.setValue(O,"_gl_DrawID",Qe),ge.render(Gt[Qe]/fn,Xe[Qe])}else if(X.isInstancedMesh)ge.renderInstances(oe,Oe,X.count);else if(Y.isInstancedBufferGeometry){const Gt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Xe=Math.min(Y.instanceCount,Gt);ge.renderInstances(oe,Oe,Xe)}else ge.render(oe,Oe)};function re(E,H,Y){E.transparent===!0&&E.side===Mn&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,rs(E,H,Y),E.side=ri,E.needsUpdate=!0,rs(E,H,Y),E.side=Mn):rs(E,H,Y)}this.compile=function(E,H,Y=null){Y===null&&(Y=E),f=me.get(Y),f.init(H),C.push(f),Y.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),E!==Y&&E.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights();const K=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ft=X.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){const At=ft[xt];re(At,Y,X),K.add(At)}else re(ft,Y,X),K.add(ft)}),f=C.pop(),K},this.compileAsync=function(E,H,Y=null){const K=this.compile(E,H,Y);return new Promise(X=>{function ft(){if(K.forEach(function(xt){Ot.get(xt).currentProgram.isReady()&&K.delete(xt)}),K.size===0){X(E);return}setTimeout(ft,10)}ue.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let dn=null;function Pn(E){dn&&dn(E)}function br(){Wn.stop()}function Mr(){Wn.start()}const Wn=new jh;Wn.setAnimationLoop(Pn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(E){dn=E,tt.setAnimationLoop(E),E===null?Wn.stop():Wn.start()},tt.addEventListener("sessionstart",br),tt.addEventListener("sessionend",Mr),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(H),H=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,H,U),f=me.get(E,C.length),f.init(H),C.push(f),vt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q.setFromProjectionMatrix(vt),nt=this.localClippingEnabled,Q=pt.init(this.clippingPlanes,nt),m=Rt.get(E,R.length),m.init(),R.push(m),tt.enabled===!0&&tt.isPresenting===!0){const ft=T.xr.getDepthSensingMesh();ft!==null&&Ys(ft,H,-1/0,T.sortObjects)}Ys(E,H,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(ut,mt),De=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,De&&Xt.addToRenderList(m,E),this.info.render.frame++,Q===!0&&pt.beginShadows();const Y=f.state.shadowsArray;Lt.render(Y,E,H),Q===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,X=m.transmissive;if(f.setupLights(),H.isArrayCamera){const ft=H.cameras;if(X.length>0)for(let xt=0,At=ft.length;xt<At;xt++){const Dt=ft[xt];Ks(K,X,E,Dt)}De&&Xt.render(E);for(let xt=0,At=ft.length;xt<At;xt++){const Dt=ft[xt];Sr(m,E,Dt,Dt.viewport)}}else X.length>0&&Ks(K,X,E,H),De&&Xt.render(E),Sr(m,E,H);U!==null&&I===0&&(L.updateMultisampleRenderTarget(U),L.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(T,E,H),Se.resetDefaultState(),y=-1,b=null,C.pop(),C.length>0?(f=C[C.length-1],Q===!0&&pt.setGlobalState(T.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Ys(E,H,Y,K){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){K&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(vt);const xt=at.update(E),At=E.material;At.visible&&m.push(E,xt,At,Y,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const xt=at.update(E),At=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ht.copy(xt.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(vt)),Array.isArray(At)){const Dt=xt.groups;for(let Kt=0,Zt=Dt.length;Kt<Zt;Kt++){const zt=Dt[Kt],oe=At[zt.materialIndex];oe&&oe.visible&&m.push(E,xt,oe,Y,Ht.z,zt)}}else At.visible&&m.push(E,xt,At,Y,Ht.z,null)}}const ft=E.children;for(let xt=0,At=ft.length;xt<At;xt++)Ys(ft[xt],H,Y,K)}function Sr(E,H,Y,K){const X=E.opaque,ft=E.transmissive,xt=E.transparent;f.setupLightsView(Y),Q===!0&&pt.setGlobalState(T.clippingPlanes,Y),K&&Bt.viewport(N.copy(K)),X.length>0&&ss(X,H,Y),ft.length>0&&ss(ft,H,Y),xt.length>0&&ss(xt,H,Y),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Ks(E,H,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new Ki(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?pr:ai,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ft=f.state.transmissionRenderTarget[K.id],xt=K.viewport||N;ft.setSize(xt.z*T.transmissionResolutionScale,xt.w*T.transmissionResolutionScale);const At=T.getRenderTarget();T.setRenderTarget(ft),T.getClearColor(J),et=T.getClearAlpha(),et<1&&T.setClearColor(16777215,.5),T.clear(),De&&Xt.render(Y);const Dt=T.toneMapping;T.toneMapping=Ei;const Kt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),Q===!0&&pt.setGlobalState(T.clippingPlanes,K),ss(E,Y,K),L.updateMultisampleRenderTarget(ft),L.updateRenderTargetMipmap(ft),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let zt=0,oe=H.length;zt<oe;zt++){const _e=H[zt],Oe=_e.object,Ue=_e.geometry,ge=_e.material,Gt=_e.group;if(ge.side===Mn&&Oe.layers.test(K.layers)){const Xe=ge.side;ge.side=gn,ge.needsUpdate=!0,Zs(Oe,Y,K,Ue,ge,Gt),ge.side=Xe,ge.needsUpdate=!0,Zt=!0}}Zt===!0&&(L.updateMultisampleRenderTarget(ft),L.updateRenderTargetMipmap(ft))}T.setRenderTarget(At),T.setClearColor(J,et),Kt!==void 0&&(K.viewport=Kt),T.toneMapping=Dt}function ss(E,H,Y){const K=H.isScene===!0?H.overrideMaterial:null;for(let X=0,ft=E.length;X<ft;X++){const xt=E[X],At=xt.object,Dt=xt.geometry,Kt=K===null?xt.material:K,Zt=xt.group;At.layers.test(Y.layers)&&Zs(At,H,Y,Dt,Kt,Zt)}}function Zs(E,H,Y,K,X,ft){E.onBeforeRender(T,H,Y,K,X,ft),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(T,H,Y,K,E,ft),X.transparent===!0&&X.side===Mn&&X.forceSinglePass===!1?(X.side=gn,X.needsUpdate=!0,T.renderBufferDirect(Y,H,K,X,E,ft),X.side=ri,X.needsUpdate=!0,T.renderBufferDirect(Y,H,K,X,E,ft),X.side=Mn):T.renderBufferDirect(Y,H,K,X,E,ft),E.onAfterRender(T,H,Y,K,X,ft)}function rs(E,H,Y){H.isScene!==!0&&(H=ke);const K=Ot.get(E),X=f.state.lights,ft=f.state.shadowsArray,xt=X.state.version,At=Ut.getParameters(E,X.state,ft,H,Y),Dt=Ut.getProgramCacheKey(At);let Kt=K.programs;K.environment=E.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(E.isMeshStandardMaterial?j:M).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Kt===void 0&&(E.addEventListener("dispose",ne),Kt=new Map,K.programs=Kt);let Zt=Kt.get(Dt);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===xt)return Tr(E,At),Zt}else At.uniforms=Ut.getUniforms(E),E.onBeforeCompile(At,T),Zt=Ut.acquireProgram(At,Dt),Kt.set(Dt,Zt),K.uniforms=At.uniforms;const zt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=pt.uniform),Tr(E,At),K.needsLights=Ya(E),K.lightsStateVersion=xt,K.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function Er(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=va.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Tr(E,H){const Y=Ot.get(E);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function qa(E,H,Y,K,X){H.isScene!==!0&&(H=ke),L.resetTextureUnits();const ft=H.fog,xt=K.isMeshStandardMaterial?H.environment:null,At=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Bs,Dt=(K.isMeshStandardMaterial?j:M).get(K.envMap||xt),Kt=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Zt=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),zt=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,_e=!!Y.morphAttributes.color;let Oe=Ei;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Oe=T.toneMapping);const Ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ge=Ue!==void 0?Ue.length:0,Gt=Ot.get(K),Xe=f.state.lights;if(Q===!0&&(nt===!0||E!==b)){const He=E===b&&K.id===y;pt.setState(K,E,He)}let ve=!1;K.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Xe.state.version||Gt.outputColorSpace!==At||X.isBatchedMesh&&Gt.batching===!1||!X.isBatchedMesh&&Gt.batching===!0||X.isBatchedMesh&&Gt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Gt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Gt.instancing===!1||!X.isInstancedMesh&&Gt.instancing===!0||X.isSkinnedMesh&&Gt.skinning===!1||!X.isSkinnedMesh&&Gt.skinning===!0||X.isInstancedMesh&&Gt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Gt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Gt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Gt.instancingMorph===!1&&X.morphTexture!==null||Gt.envMap!==Dt||K.fog===!0&&Gt.fog!==ft||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==pt.numPlanes||Gt.numIntersection!==pt.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==Zt||Gt.morphTargets!==zt||Gt.morphNormals!==oe||Gt.morphColors!==_e||Gt.toneMapping!==Oe||Gt.morphTargetsCount!==ge)&&(ve=!0):(ve=!0,Gt.__version=K.version);let fn=Gt.currentProgram;ve===!0&&(fn=rs(K,H,X));let Ne=!1,Qe=!1,Di=!1;const Le=fn.getUniforms(),on=Gt.uniforms;if(Bt.useProgram(fn.program)&&(Ne=!0,Qe=!0,Di=!0),K.id!==y&&(y=K.id,Qe=!0),Ne||b!==E){Bt.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),lp(st),cp(st),Le.setValue(O,"projectionMatrix",st)):Le.setValue(O,"projectionMatrix",E.projectionMatrix),Le.setValue(O,"viewMatrix",E.matrixWorldInverse);const $e=Le.map.cameraPosition;$e!==void 0&&$e.setValue(O,te.setFromMatrixPosition(E.matrixWorld)),he.logarithmicDepthBuffer&&Le.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Le.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Qe=!0,Di=!0)}if(X.isSkinnedMesh){Le.setOptional(O,X,"bindMatrix"),Le.setOptional(O,X,"bindMatrixInverse");const He=X.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Le.setValue(O,"boneTexture",He.boneTexture,L))}X.isBatchedMesh&&(Le.setOptional(O,X,"batchingTexture"),Le.setValue(O,"batchingTexture",X._matricesTexture,L),Le.setOptional(O,X,"batchingIdTexture"),Le.setValue(O,"batchingIdTexture",X._indirectTexture,L),Le.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Le.setValue(O,"batchingColorTexture",X._colorsTexture,L));const tn=Y.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Yt.update(X,Y,fn),(Qe||Gt.receiveShadow!==X.receiveShadow)&&(Gt.receiveShadow=X.receiveShadow,Le.setValue(O,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(on.envMap.value=Dt,on.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(on.envMapIntensity.value=H.environmentIntensity),Qe&&(Le.setValue(O,"toneMappingExposure",T.toneMappingExposure),Gt.needsLights&&ja(on,Di),ft&&K.fog===!0&&Mt.refreshFogUniforms(on,ft),Mt.refreshMaterialUniforms(on,K,$,it,f.state.transmissionRenderTarget[E.id]),va.upload(O,Er(Gt),on,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(va.upload(O,Er(Gt),on,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Le.setValue(O,"center",X.center),Le.setValue(O,"modelViewMatrix",X.modelViewMatrix),Le.setValue(O,"normalMatrix",X.normalMatrix),Le.setValue(O,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const He=K.uniformsGroups;for(let $e=0,as=He.length;$e<as;$e++){const Xn=He[$e];G.update(Xn,fn),G.bind(Xn,fn)}}return fn}function ja(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Ya(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,H,Y){Ot.get(E.texture).__webglTexture=H,Ot.get(E.depthTexture).__webglTexture=Y;const K=Ot.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const Y=Ot.get(E);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const Ka=O.createFramebuffer();this.setRenderTarget=function(E,H=0,Y=0){U=E,F=H,I=Y;let K=!0,X=null,ft=!1,xt=!1;if(E){const Dt=Ot.get(E);if(Dt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Dt.__webglFramebuffer===void 0)L.setupRenderTarget(E);else if(Dt.__hasExternalTextures)L.rebindTextures(E,Ot.get(E.texture).__webglTexture,Ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const zt=E.depthTexture;if(Dt.__boundDepthTexture!==zt){if(zt!==null&&Ot.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(E)}}const Kt=E.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(xt=!0);const Zt=Ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Zt[H])?X=Zt[H][Y]:X=Zt[H],ft=!0):E.samples>0&&L.useMultisampledRTT(E)===!1?X=Ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Zt)?X=Zt[Y]:X=Zt,N.copy(E.viewport),V.copy(E.scissor),W=E.scissorTest}else N.copy(gt).multiplyScalar($).floor(),V.copy(Pt).multiplyScalar($).floor(),W=wt;if(Y!==0&&(X=Ka),Bt.bindFramebuffer(O.FRAMEBUFFER,X)&&K&&Bt.drawBuffers(E,X),Bt.viewport(N),Bt.scissor(V),Bt.setScissorTest(W),ft){const Dt=Ot.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,Y)}else if(xt){const Dt=Ot.get(E.texture),Kt=H;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,Y,Kt)}else if(E!==null&&Y!==0){const Dt=Ot.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Dt.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(E,H,Y,K,X,ft,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){Bt.bindFramebuffer(O.FRAMEBUFFER,At);try{const Dt=E.texture,Kt=Dt.format,Zt=Dt.type;if(!he.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-K&&Y>=0&&Y<=E.height-X&&O.readPixels(H,Y,K,X,se.convert(Kt),se.convert(Zt),ft)}finally{const Dt=U!==null?Ot.get(U).__webglFramebuffer:null;Bt.bindFramebuffer(O.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,H,Y,K,X,ft,xt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){const Dt=E.texture,Kt=Dt.format,Zt=Dt.type;if(!he.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-K&&Y>=0&&Y<=E.height-X){Bt.bindFramebuffer(O.FRAMEBUFFER,At);const zt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,zt),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(H,Y,K,X,se.convert(Kt),se.convert(Zt),0);const oe=U!==null?Ot.get(U).__webglFramebuffer:null;Bt.bindFramebuffer(O.FRAMEBUFFER,oe);const _e=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await op(O,_e,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,zt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.deleteBuffer(zt),O.deleteSync(_e),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,Y=0){E.isTexture!==!0&&(zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-Y),X=Math.floor(E.image.width*K),ft=Math.floor(E.image.height*K),xt=H!==null?H.x:0,At=H!==null?H.y:0;L.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,xt,At,X,ft),Bt.unbindTexture()};const Za=O.createFramebuffer(),Ja=O.createFramebuffer();this.copyTextureToTexture=function(E,H,Y=null,K=null,X=0,ft=null){E.isTexture!==!0&&(zi("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],H=arguments[2],ft=arguments[3]||0,Y=null),ft===null&&(X!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=X,X=0):ft=0);let xt,At,Dt,Kt,Zt,zt,oe,_e,Oe;const Ue=E.isCompressedTexture?E.mipmaps[ft]:E.image;if(Y!==null)xt=Y.max.x-Y.min.x,At=Y.max.y-Y.min.y,Dt=Y.isBox3?Y.max.z-Y.min.z:1,Kt=Y.min.x,Zt=Y.min.y,zt=Y.isBox3?Y.min.z:0;else{const tn=Math.pow(2,-X);xt=Math.floor(Ue.width*tn),At=Math.floor(Ue.height*tn),E.isDataArrayTexture?Dt=Ue.depth:E.isData3DTexture?Dt=Math.floor(Ue.depth*tn):Dt=1,Kt=0,Zt=0,zt=0}K!==null?(oe=K.x,_e=K.y,Oe=K.z):(oe=0,_e=0,Oe=0);const ge=se.convert(H.format),Gt=se.convert(H.type);let Xe;H.isData3DTexture?(L.setTexture3D(H,0),Xe=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(L.setTexture2DArray(H,0),Xe=O.TEXTURE_2D_ARRAY):(L.setTexture2D(H,0),Xe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const ve=O.getParameter(O.UNPACK_ROW_LENGTH),fn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ne=O.getParameter(O.UNPACK_SKIP_PIXELS),Qe=O.getParameter(O.UNPACK_SKIP_ROWS),Di=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,zt);const Le=E.isDataArrayTexture||E.isData3DTexture,on=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const tn=Ot.get(E),He=Ot.get(H),$e=Ot.get(tn.__renderTarget),as=Ot.get(He.__renderTarget);Bt.bindFramebuffer(O.READ_FRAMEBUFFER,$e.__webglFramebuffer),Bt.bindFramebuffer(O.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let Xn=0;Xn<Dt;Xn++)Le&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(E).__webglTexture,X,zt+Xn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(H).__webglTexture,ft,Oe+Xn)),O.blitFramebuffer(Kt,Zt,xt,At,oe,_e,xt,At,O.DEPTH_BUFFER_BIT,O.NEAREST);Bt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Ot.has(E)){const tn=Ot.get(E),He=Ot.get(H);Bt.bindFramebuffer(O.READ_FRAMEBUFFER,Za),Bt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ja);for(let $e=0;$e<Dt;$e++)Le?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,X,zt+$e):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,X),on?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.__webglTexture,ft,Oe+$e):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,He.__webglTexture,ft),X!==0?O.blitFramebuffer(Kt,Zt,xt,At,oe,_e,xt,At,O.COLOR_BUFFER_BIT,O.NEAREST):on?O.copyTexSubImage3D(Xe,ft,oe,_e,Oe+$e,Kt,Zt,xt,At):O.copyTexSubImage2D(Xe,ft,oe,_e,Kt,Zt,xt,At);Bt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else on?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Xe,ft,oe,_e,Oe,xt,At,Dt,ge,Gt,Ue.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Xe,ft,oe,_e,Oe,xt,At,Dt,ge,Ue.data):O.texSubImage3D(Xe,ft,oe,_e,Oe,xt,At,Dt,ge,Gt,Ue):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,oe,_e,xt,At,ge,Gt,Ue.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,oe,_e,Ue.width,Ue.height,ge,Ue.data):O.texSubImage2D(O.TEXTURE_2D,ft,oe,_e,xt,At,ge,Gt,Ue);O.pixelStorei(O.UNPACK_ROW_LENGTH,ve),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Di),ft===0&&H.generateMipmaps&&O.generateMipmap(Xe),Bt.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Y=null,K=null,X=0){return E.isTexture!==!0&&(zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,E=arguments[2],H=arguments[3],X=arguments[4]||0),zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,Y,K,X)},this.initRenderTarget=function(E){Ot.get(E).__webglFramebuffer===void 0&&L.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?L.setTextureCube(E,0):E.isData3DTexture?L.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?L.setTexture2DArray(E,0):L.setTexture2D(E,0),Bt.unbindTexture()},this.resetState=function(){F=0,I=0,U=null,Bt.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const Hu={type:"change"},Jl={type:"start"},Qh={type:"end"},ra=new mr,Gu=new yi,Xv=Math.cos(70*Ss.DEG2RAD),qe=new k,mn=2*Math.PI,Ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fo=1e-6;class $v extends om{constructor(t,e=null){super(t,e),this.state=Ae.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Un,this._lastTargetPosition=new k,this._quat=new Un().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mu,this._sphericalDelta=new mu,this._scale=1,this._panOffset=new k,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new k,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jv.bind(this),this._onPointerDown=qv.bind(this),this._onPointerUp=Yv.bind(this),this._onContextMenu=nx.bind(this),this._onMouseWheel=Jv.bind(this),this._onKeyDown=Qv.bind(this),this._onTouchStart=tx.bind(this),this._onTouchMove=ex.bind(this),this._onMouseDown=Kv.bind(this),this._onMouseMove=Zv.bind(this),this._interceptControlDown=ix.bind(this),this._interceptControlUp=sx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=Ae.NONE}update(t=null){const e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=qe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ra.origin.copy(this.object.position),ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ra.direction))<Xv?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ra.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fo||this._lastTargetPosition.distanceToSquared(this.target)>Fo?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mn/60*this.autoRotateSpeed*t:mn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;qe.copy(s).sub(this.target);let r=qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new qt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function jv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Yv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qh),this.state=Ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Kv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ae.DOLLY;break;case ws.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ae.ROTATE}break;case ws.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ae.PAN}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Jl)}function Zv(i){switch(this.state){case Ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Jv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ae.NONE||(i.preventDefault(),this.dispatchEvent(Jl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qh))}function Qv(i){this.enabled!==!1&&this._handleKeyDown(i)}function tx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ae.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ae.TOUCH_PAN;break;default:this.state=Ae.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ae.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ae.TOUCH_DOLLY_ROTATE;break;default:this.state=Ae.NONE}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Jl)}function ex(i){switch(this._trackPointer(i),this.state){case Ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ae.NONE}}function nx(i){this.enabled!==!1&&i.preventDefault()}function ix(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class td extends Ci{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new jl(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){function e(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*h===u.byteLength)return!0;const g=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(g,u,x))return!1;return!0}function n(c,u,h){for(let d=0,p=c.length;d<p;d++)if(c[d]!==u.getUint8(h+d))return!1;return!0}function s(c){const u=new DataView(c),h=u.getUint32(80,!0);let d,p,g,x=!1,m,f,R,C,T;for(let N=0;N<70;N++)u.getUint32(N,!1)==1129270351&&u.getUint8(N+4)==82&&u.getUint8(N+5)==61&&(x=!0,m=new Float32Array(h*3*3),f=u.getUint8(N+6)/255,R=u.getUint8(N+7)/255,C=u.getUint8(N+8)/255,T=u.getUint8(N+9)/255);const D=84,F=50,I=new We,U=new Float32Array(h*3*3),y=new Float32Array(h*3*3),b=new Qt;for(let N=0;N<h;N++){const V=D+N*F,W=u.getFloat32(V,!0),J=u.getFloat32(V+4,!0),et=u.getFloat32(V+8,!0);if(x){const z=u.getUint16(V+48,!0);(z&32768)===0?(d=(z&31)/31,p=(z>>5&31)/31,g=(z>>10&31)/31):(d=f,p=R,g=C)}for(let z=1;z<=3;z++){const it=V+z*12,$=N*3*3+(z-1)*3;U[$]=u.getFloat32(it,!0),U[$+1]=u.getFloat32(it+4,!0),U[$+2]=u.getFloat32(it+8,!0),y[$]=W,y[$+1]=J,y[$+2]=et,x&&(b.setRGB(d,p,g,ze),m[$]=b.r,m[$+1]=b.g,m[$+2]=b.b)}}return I.setAttribute("position",new un(U,3)),I.setAttribute("normal",new un(y,3)),x&&(I.setAttribute("color",new un(m,3)),I.hasColors=!0,I.alpha=T),I}function r(c){const u=new We,h=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),f=new RegExp("normal"+x+x+x,"g"),R=[],C=[],T=[],D=new k;let F,I=0,U=0,y=0;for(;(F=h.exec(c))!==null;){U=y;const b=F[0],N=(F=p.exec(b))!==null?F[1]:"";for(T.push(N);(F=d.exec(b))!==null;){let J=0,et=0;const z=F[0];for(;(F=f.exec(z))!==null;)D.x=parseFloat(F[1]),D.y=parseFloat(F[2]),D.z=parseFloat(F[3]),et++;for(;(F=m.exec(z))!==null;)R.push(parseFloat(F[1]),parseFloat(F[2]),parseFloat(F[3])),C.push(D.x,D.y,D.z),J++,y++;et!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),J!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const V=U,W=y-U;u.userData.groupNames=T,u.addGroup(V,W,I),I++}return u.setAttribute("position",new Te(R,3)),u.setAttribute("normal",new Te(C,3)),u}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=o(t);return e(l)?s(l):r(a(t))}}class Wu extends tm{constructor(t){super(t)}parse(t){function e(z){switch(z.image_type){case d:case x:if(z.colormap_length>256||z.colormap_size!==24||z.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(z.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+z.image_type)}if(z.width<=0||z.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(z.pixel_size!==8&&z.pixel_size!==16&&z.pixel_size!==24&&z.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+z.pixel_size)}function n(z,it,$,ut,mt){let gt,Pt;const wt=$.pixel_size>>3,q=$.width*$.height*wt;if(it&&(Pt=mt.subarray(ut,ut+=$.colormap_length*($.colormap_size>>3))),z){gt=new Uint8Array(q);let Q,nt,st,vt=0;const te=new Uint8Array(wt);for(;vt<q;)if(Q=mt[ut++],nt=(Q&127)+1,Q&128){for(st=0;st<wt;++st)te[st]=mt[ut++];for(st=0;st<nt;++st)gt.set(te,vt+st*wt);vt+=wt*nt}else{for(nt*=wt,st=0;st<nt;++st)gt[vt+st]=mt[ut++];vt+=nt}}else gt=mt.subarray(ut,ut+=it?$.width*$.height:q);return{pixel_data:gt,palettes:Pt}}function s(z,it,$,ut,mt,gt,Pt,wt,q){const Q=q;let nt,st=0,vt,te;const Ht=b.width;for(te=it;te!==ut;te+=$)for(vt=mt;vt!==Pt;vt+=gt,st++)nt=wt[st],z[(vt+Ht*te)*4+3]=255,z[(vt+Ht*te)*4+2]=Q[nt*3+0],z[(vt+Ht*te)*4+1]=Q[nt*3+1],z[(vt+Ht*te)*4+0]=Q[nt*3+2];return z}function r(z,it,$,ut,mt,gt,Pt,wt){let q,Q=0,nt,st;const vt=b.width;for(st=it;st!==ut;st+=$)for(nt=mt;nt!==Pt;nt+=gt,Q+=2)q=wt[Q+0]+(wt[Q+1]<<8),z[(nt+vt*st)*4+0]=(q&31744)>>7,z[(nt+vt*st)*4+1]=(q&992)>>2,z[(nt+vt*st)*4+2]=(q&31)<<3,z[(nt+vt*st)*4+3]=q&32768?0:255;return z}function a(z,it,$,ut,mt,gt,Pt,wt){let q=0,Q,nt;const st=b.width;for(nt=it;nt!==ut;nt+=$)for(Q=mt;Q!==Pt;Q+=gt,q+=3)z[(Q+st*nt)*4+3]=255,z[(Q+st*nt)*4+2]=wt[q+0],z[(Q+st*nt)*4+1]=wt[q+1],z[(Q+st*nt)*4+0]=wt[q+2];return z}function o(z,it,$,ut,mt,gt,Pt,wt){let q=0,Q,nt;const st=b.width;for(nt=it;nt!==ut;nt+=$)for(Q=mt;Q!==Pt;Q+=gt,q+=4)z[(Q+st*nt)*4+2]=wt[q+0],z[(Q+st*nt)*4+1]=wt[q+1],z[(Q+st*nt)*4+0]=wt[q+2],z[(Q+st*nt)*4+3]=wt[q+3];return z}function l(z,it,$,ut,mt,gt,Pt,wt){let q,Q=0,nt,st;const vt=b.width;for(st=it;st!==ut;st+=$)for(nt=mt;nt!==Pt;nt+=gt,Q++)q=wt[Q],z[(nt+vt*st)*4+0]=q,z[(nt+vt*st)*4+1]=q,z[(nt+vt*st)*4+2]=q,z[(nt+vt*st)*4+3]=255;return z}function c(z,it,$,ut,mt,gt,Pt,wt){let q=0,Q,nt;const st=b.width;for(nt=it;nt!==ut;nt+=$)for(Q=mt;Q!==Pt;Q+=gt,q+=2)z[(Q+st*nt)*4+0]=wt[q+0],z[(Q+st*nt)*4+1]=wt[q+0],z[(Q+st*nt)*4+2]=wt[q+0],z[(Q+st*nt)*4+3]=wt[q+1];return z}function u(z,it,$,ut,mt){let gt,Pt,wt,q,Q,nt;switch((b.flags&R)>>C){default:case F:gt=0,wt=1,Q=it,Pt=0,q=1,nt=$;break;case T:gt=0,wt=1,Q=it,Pt=$-1,q=-1,nt=-1;break;case I:gt=it-1,wt=-1,Q=-1,Pt=0,q=1,nt=$;break;case D:gt=it-1,wt=-1,Q=-1,Pt=$-1,q=-1,nt=-1;break}if(W)switch(b.pixel_size){case 8:l(z,Pt,q,nt,gt,wt,Q,ut);break;case 16:c(z,Pt,q,nt,gt,wt,Q,ut);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(b.pixel_size){case 8:s(z,Pt,q,nt,gt,wt,Q,ut,mt);break;case 16:r(z,Pt,q,nt,gt,wt,Q,ut);break;case 24:a(z,Pt,q,nt,gt,wt,Q,ut);break;case 32:o(z,Pt,q,nt,gt,wt,Q,ut);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return z}const h=0,d=1,p=2,g=3,x=9,m=10,f=11,R=48,C=4,T=0,D=1,F=2,I=3;if(t.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let U=0;const y=new Uint8Array(t),b={id_length:y[U++],colormap_type:y[U++],image_type:y[U++],colormap_index:y[U++]|y[U++]<<8,colormap_length:y[U++]|y[U++]<<8,colormap_size:y[U++],origin:[y[U++]|y[U++]<<8,y[U++]|y[U++]<<8],width:y[U++]|y[U++]<<8,height:y[U++]|y[U++]<<8,pixel_size:y[U++],flags:y[U++]};if(e(b),b.id_length+U>t.length)throw new Error("THREE.TGALoader: No data.");U+=b.id_length;let N=!1,V=!1,W=!1;switch(b.image_type){case x:N=!0,V=!0;break;case d:V=!0;break;case m:N=!0;break;case p:break;case f:N=!0,W=!0;break;case g:W=!0;break}const J=new Uint8Array(b.width*b.height*4),et=n(N,V,b,U,y);return u(J,b.width,b.height,et.pixel_data,et.palettes),{data:J,width:b.width,height:b.height,flipY:!0,generateMipmaps:!0,minFilter:ei}}}class rx extends Ci{load(t,e,n,s){const r=this,a=r.path===""?qh.extractUrlBase(t):r.path,o=new jl(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(l){try{e(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t,e){function n(v,_){const w=[],S=v.childNodes;for(let A=0,Z=S.length;A<Z;A++){const rt=S[A];rt.nodeName===_&&w.push(rt)}return w}function s(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),w=new Array(_.length);for(let S=0,A=_.length;S<A;S++)w[S]=_[S];return w}function r(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),w=new Array(_.length);for(let S=0,A=_.length;S<A;S++)w[S]=parseFloat(_[S]);return w}function a(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),w=new Array(_.length);for(let S=0,A=_.length;S<A;S++)w[S]=parseInt(_[S]);return w}function o(v){return v.substring(1)}function l(){return"three_default_"+Xn++}function c(v){return Object.keys(v).length===0}function u(v){return{unit:h(n(v,"unit")[0]),upAxis:d(n(v,"up_axis")[0])}}function h(v){return v!==void 0&&v.hasAttribute("meter")===!0?parseFloat(v.getAttribute("meter")):1}function d(v){return v!==void 0?v.textContent:"Y_UP"}function p(v,_,w,S){const A=n(v,_)[0];if(A!==void 0){const Z=n(A,w);for(let rt=0;rt<Z.length;rt++)S(Z[rt])}}function g(v,_){for(const w in v){const S=v[w];S.build=_(v[w])}}function x(v,_){return v.build!==void 0||(v.build=_(v)),v.build}function m(v){const _={sources:{},samplers:{},channels:{}};let w=!1;for(let S=0,A=v.childNodes.length;S<A;S++){const Z=v.childNodes[S];if(Z.nodeType!==1)continue;let rt;switch(Z.nodeName){case"source":rt=Z.getAttribute("id"),_.sources[rt]=tt(Z);break;case"sampler":rt=Z.getAttribute("id"),_.samplers[rt]=f(Z);break;case"channel":rt=Z.getAttribute("target"),_.channels[rt]=R(Z);break;case"animation":m(Z),w=!0;break;default:console.log(Z)}}w===!1&&($t.animations[v.getAttribute("id")||Ss.generateUUID()]=_)}function f(v){const _={inputs:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const Z=o(A.getAttribute("source")),rt=A.getAttribute("semantic");_.inputs[rt]=Z;break}}return _}function R(v){const _={};let S=v.getAttribute("target").split("/");const A=S.shift();let Z=S.shift();const rt=Z.indexOf("(")!==-1,Ct=Z.indexOf(".")!==-1;if(Ct)S=Z.split("."),Z=S.shift(),_.member=S.shift();else if(rt){const _t=Z.split("(");Z=_t.shift();for(let Et=0;Et<_t.length;Et++)_t[Et]=parseInt(_t[Et].replace(/\)/,""));_.indices=_t}return _.id=A,_.sid=Z,_.arraySyntax=rt,_.memberSyntax=Ct,_.sampler=o(v.getAttribute("source")),_}function C(v){const _=[],w=v.channels,S=v.samplers,A=v.sources;for(const Z in w)if(w.hasOwnProperty(Z)){const rt=w[Z],Ct=S[rt.sampler],_t=Ct.inputs.INPUT,Et=Ct.inputs.OUTPUT,kt=A[_t],dt=A[Et],Ft=D(rt,kt,dt);b(Ft,_)}return _}function T(v){return x($t.animations[v],C)}function D(v,_,w){const S=$t.nodes[v.id],A=oe(S.id),Z=S.transforms[v.sid],rt=S.matrix.clone().transpose();let Ct,_t,Et,kt,dt,Ft;const It={};switch(Z){case"matrix":for(Et=0,kt=_.array.length;Et<kt;Et++)if(Ct=_.array[Et],_t=Et*w.stride,It[Ct]===void 0&&(It[Ct]={}),v.arraySyntax===!0){const Be=w.array[_t],Ee=v.indices[0]+4*v.indices[1];It[Ct][Ee]=Be}else for(dt=0,Ft=w.stride;dt<Ft;dt++)It[Ct][dt]=w.array[_t+dt];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break}const Wt=F(It,rt);return{name:A.uuid,keyframes:Wt}}function F(v,_){const w=[];for(const A in v)w.push({time:parseFloat(A),value:v[A]});w.sort(S);for(let A=0;A<16;A++)N(w,A,_.elements[A]);return w;function S(A,Z){return A.time-Z.time}}const I=new k,U=new k,y=new Un;function b(v,_){const w=v.keyframes,S=v.name,A=[],Z=[],rt=[],Ct=[];for(let _t=0,Et=w.length;_t<Et;_t++){const kt=w[_t],dt=kt.time,Ft=kt.value;H.fromArray(Ft).transpose(),H.decompose(I,y,U),A.push(dt),Z.push(I.x,I.y,I.z),rt.push(y.x,y.y,y.z,y.w),Ct.push(U.x,U.y,U.z)}return Z.length>0&&_.push(new Hs(S+".position",A,Z)),rt.length>0&&_.push(new _r(S+".quaternion",A,rt)),Ct.length>0&&_.push(new Hs(S+".scale",A,Ct)),_}function N(v,_,w){let S,A=!0,Z,rt;for(Z=0,rt=v.length;Z<rt;Z++)S=v[Z],S.value[_]===void 0?S.value[_]=null:A=!1;if(A===!0)for(Z=0,rt=v.length;Z<rt;Z++)S=v[Z],S.value[_]=w;else V(v,_)}function V(v,_){let w,S;for(let A=0,Z=v.length;A<Z;A++){const rt=v[A];if(rt.value[_]===null){if(w=W(v,A,_),S=J(v,A,_),w===null){rt.value[_]=S.value[_];continue}if(S===null){rt.value[_]=w.value[_];continue}et(rt,w,S,_)}}}function W(v,_,w){for(;_>=0;){const S=v[_];if(S.value[w]!==null)return S;_--}return null}function J(v,_,w){for(;_<v.length;){const S=v[_];if(S.value[w]!==null)return S;_++}return null}function et(v,_,w,S){if(w.time-_.time===0){v.value[S]=_.value[S];return}v.value[S]=(v.time-_.time)*(w.value[S]-_.value[S])/(w.time-_.time)+_.value[S]}function z(v){const _={name:v.getAttribute("id")||"default",start:parseFloat(v.getAttribute("start")||0),end:parseFloat(v.getAttribute("end")||0),animations:[]};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":_.animations.push(o(A.getAttribute("url")));break}}$t.clips[v.getAttribute("id")]=_}function it(v){const _=[],w=v.name,S=v.end-v.start||-1,A=v.animations;for(let Z=0,rt=A.length;Z<rt;Z++){const Ct=T(A[Z]);for(let _t=0,Et=Ct.length;_t<Et;_t++)_.push(Ct[_t])}return new hu(w,S,_)}function $(v){return x($t.clips[v],it)}function ut(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"skin":_.id=o(A.getAttribute("source")),_.skin=mt(A);break;case"morph":_.id=o(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}$t.controllers[v.getAttribute("id")]=_}function mt(v){const _={sources:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=r(A.textContent);break;case"source":const Z=A.getAttribute("id");_.sources[Z]=tt(A);break;case"joints":_.joints=gt(A);break;case"vertex_weights":_.vertexWeights=Pt(A);break}}return _}function gt(v){const _={inputs:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const Z=A.getAttribute("semantic"),rt=o(A.getAttribute("source"));_.inputs[Z]=rt;break}}return _}function Pt(v){const _={inputs:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const Z=A.getAttribute("semantic"),rt=o(A.getAttribute("source")),Ct=parseInt(A.getAttribute("offset"));_.inputs[Z]={id:rt,offset:Ct};break;case"vcount":_.vcount=a(A.textContent);break;case"v":_.v=a(A.textContent);break}}return _}function wt(v){const _={id:v.id},w=$t.geometries[_.id];return v.skin!==void 0&&(_.skin=q(v.skin),w.sources.skinIndices=_.skin.indices,w.sources.skinWeights=_.skin.weights),_}function q(v){const w={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},S=v.sources,A=v.vertexWeights,Z=A.vcount,rt=A.v,Ct=A.inputs.JOINT.offset,_t=A.inputs.WEIGHT.offset,Et=v.sources[v.joints.inputs.JOINT],kt=v.sources[v.joints.inputs.INV_BIND_MATRIX],dt=S[A.inputs.WEIGHT.id].array;let Ft=0,It,Wt,Vt;for(It=0,Vt=Z.length;It<Vt;It++){const Ee=Z[It],xe=[];for(Wt=0;Wt<Ee;Wt++){const ye=rt[Ft+Ct],$n=rt[Ft+_t],pn=dt[$n];xe.push({index:ye,weight:pn}),Ft+=2}for(xe.sort(Be),Wt=0;Wt<4;Wt++){const ye=xe[Wt];ye!==void 0?(w.indices.array.push(ye.index),w.weights.array.push(ye.weight)):(w.indices.array.push(0),w.weights.array.push(0))}}for(v.bindShapeMatrix?w.bindMatrix=new Jt().fromArray(v.bindShapeMatrix).transpose():w.bindMatrix=new Jt().identity(),It=0,Vt=Et.array.length;It<Vt;It++){const Ee=Et.array[It],xe=new Jt().fromArray(kt.array,It*kt.stride).transpose();w.joints.push({name:Ee,boneInverse:xe})}return w;function Be(Ee,xe){return xe.weight-Ee.weight}}function Q(v){return x($t.controllers[v],wt)}function nt(v){const _={init_from:n(v,"init_from")[0].textContent};$t.images[v.getAttribute("id")]=_}function st(v){return v.build!==void 0?v.build:v.init_from}function vt(v){const _=$t.images[v];return _!==void 0?x(_,st):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",v),null)}function te(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":_.profile=Ht(A);break}}$t.effects[v.getAttribute("id")]=_}function Ht(v){const _={surfaces:{},samplers:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"newparam":ke(A,_);break;case"technique":_.technique=O(A);break;case"extra":_.extra=Ot(A);break}}return _}function ke(v,_){const w=v.getAttribute("sid");for(let S=0,A=v.childNodes.length;S<A;S++){const Z=v.childNodes[S];if(Z.nodeType===1)switch(Z.nodeName){case"surface":_.surfaces[w]=De(Z);break;case"sampler2D":_.samplers[w]=de(Z);break}}}function De(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"init_from":_.init_from=A.textContent;break}}return _}function de(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"source":_.source=A.textContent;break}}return _}function O(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=A.nodeName,_.parameters=hn(A);break;case"extra":_.extra=Ot(A);break}}return _}function hn(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[A.nodeName]=ue(A);break;case"transparent":_[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:ue(A)};break}}return _}function ue(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":_[A.nodeName]=r(A.textContent);break;case"float":_[A.nodeName]=parseFloat(A.textContent);break;case"texture":_[A.nodeName]={id:A.getAttribute("texture"),extra:he(A)};break}}return _}function he(v){const _={technique:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"extra":Bt(A,_);break}}return _}function Bt(v,_){for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":Pe(A,_);break}}}function Pe(v,_){for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?_.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?_.technique[A.nodeName]=0:_.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":_[A.nodeName]=M(A);break}}}function Ot(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":_.technique=L(A);break}}return _}function L(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"double_sided":_[A.nodeName]=parseInt(A.textContent);break;case"bump":_[A.nodeName]=M(A);break}}return _}function M(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"texture":_[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:he(A)};break}}return _}function j(v){return v}function ot(v){return x($t.effects[v],j)}function ht(v){const _={name:v.getAttribute("name")};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":_.url=o(A.getAttribute("url"));break}}$t.materials[v.getAttribute("id")]=_}function at(v){let _,w=v.slice((v.lastIndexOf(".")-1>>>0)+2);switch(w=w.toLowerCase(),w){case"tga":_=tn;break;default:_=on}return _}function Ut(v){const _=ot(v.url),w=_.profile.technique;let S;switch(w.type){case"phong":case"blinn":S=new lr;break;case"lambert":S=new Vp;break;default:S=new dr;break}S.name=v.name||"";function A(_t,Et=null){const kt=_.profile.samplers[_t.id];let dt=null;if(kt!==void 0){const Ft=_.profile.surfaces[kt.source];dt=vt(Ft.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),dt=vt(_t.id);if(dt!==null){const Ft=at(dt);if(Ft!==void 0){const It=Ft.load(dt),Wt=_t.extra;if(Wt!==void 0&&Wt.technique!==void 0&&c(Wt.technique)===!1){const Vt=Wt.technique;It.wrapS=Vt.wrapU?Xi:In,It.wrapT=Vt.wrapV?Xi:In,It.offset.set(Vt.offsetU||0,Vt.offsetV||0),It.repeat.set(Vt.repeatU||1,Vt.repeatV||1)}else It.wrapS=Xi,It.wrapT=Xi;return Et!==null&&(It.colorSpace=Et),It}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",dt),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",_t.id),null}const Z=w.parameters;for(const _t in Z){const Et=Z[_t];switch(_t){case"diffuse":Et.color&&S.color.fromArray(Et.color),Et.texture&&(S.map=A(Et.texture,ze));break;case"specular":Et.color&&S.specular&&S.specular.fromArray(Et.color),Et.texture&&(S.specularMap=A(Et.texture));break;case"bump":Et.texture&&(S.normalMap=A(Et.texture));break;case"ambient":Et.texture&&(S.lightMap=A(Et.texture,ze));break;case"shininess":Et.float&&S.shininess&&(S.shininess=Et.float);break;case"emission":Et.color&&S.emissive&&S.emissive.fromArray(Et.color),Et.texture&&(S.emissiveMap=A(Et.texture,ze));break}}pe.toWorkingColorSpace(S.color,ze),S.specular&&pe.toWorkingColorSpace(S.specular,ze),S.emissive&&pe.toWorkingColorSpace(S.emissive,ze);let rt=Z.transparent,Ct=Z.transparency;if(Ct===void 0&&rt&&(Ct={float:1}),rt===void 0&&Ct&&(rt={opaque:"A_ONE",data:{color:[1,1,1,1]}}),rt&&Ct)if(rt.data.texture)S.transparent=!0;else{const _t=rt.data.color;switch(rt.opaque){case"A_ONE":S.opacity=_t[3]*Ct.float;break;case"RGB_ZERO":S.opacity=1-_t[0]*Ct.float;break;case"A_ZERO":S.opacity=1-_t[3]*Ct.float;break;case"RGB_ONE":S.opacity=_t[0]*Ct.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',rt.opaque)}S.opacity<1&&(S.transparent=!0)}if(w.extra!==void 0&&w.extra.technique!==void 0){const _t=w.extra.technique;for(const Et in _t){const kt=_t[Et];switch(Et){case"double_sided":S.side=kt===1?Mn:ri;break;case"bump":S.normalMap=A(kt.texture),S.normalScale=new qt(1,1);break}}}return S}function Mt(v){return x($t.materials[v],Ut)}function Rt(v){const _={name:v.getAttribute("name")};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"optics":_.optics=me(A);break}}$t.cameras[v.getAttribute("id")]=_}function me(v){for(let _=0;_<v.childNodes.length;_++){const w=v.childNodes[_];switch(w.nodeName){case"technique_common":return pt(w)}}return{}}function pt(v){const _={};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];switch(S.nodeName){case"perspective":case"orthographic":_.technique=S.nodeName,_.parameters=Lt(S);break}}return _}function Lt(v){const _={};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];switch(S.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[S.nodeName]=parseFloat(S.textContent);break}}return _}function Xt(v){let _;switch(v.optics.technique){case"perspective":_=new sn(v.optics.parameters.yfov,v.optics.parameters.aspect_ratio,v.optics.parameters.znear,v.optics.parameters.zfar);break;case"orthographic":let w=v.optics.parameters.ymag,S=v.optics.parameters.xmag;const A=v.optics.parameters.aspect_ratio;S=S===void 0?w*A:S,w=w===void 0?S/A:w,S*=.5,w*=.5,_=new Kl(-S,S,w,-w,v.optics.parameters.znear,v.optics.parameters.zfar);break;default:_=new sn;break}return _.name=v.name||"",_}function Yt(v){const _=$t.cameras[v];return _!==void 0?x(_,Xt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",v),null)}function Nt(v){let _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique_common":_=fe(A);break}}$t.lights[v.getAttribute("id")]=_}function fe(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=A.nodeName,_.parameters=se(A)}}return _}function se(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":const Z=r(A.textContent);_.color=new Qt().fromArray(Z),pe.toWorkingColorSpace(_.color,ze);break;case"falloff_angle":_.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":const rt=parseFloat(A.textContent);_.distance=rt?Math.sqrt(1/rt):0;break}}return _}function Se(v){let _;switch(v.technique){case"directional":_=new _a;break;case"point":_=new sm;break;case"spot":_=new nm;break;case"ambient":_=new $h;break}return v.parameters.color&&_.color.copy(v.parameters.color),v.parameters.distance&&(_.distance=v.parameters.distance),_}function G(v){const _=$t.lights[v];return _!==void 0?x(_,Se):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",v),null)}function bt(v){const _={name:v.getAttribute("name"),sources:{},vertices:{},primitives:[]},w=n(v,"mesh")[0];if(w!==void 0){for(let S=0;S<w.childNodes.length;S++){const A=w.childNodes[S];if(A.nodeType!==1)continue;const Z=A.getAttribute("id");switch(A.nodeName){case"source":_.sources[Z]=tt(A);break;case"vertices":_.vertices=lt(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(Tt(A));break;default:console.log(A)}}$t.geometries[v.getAttribute("id")]=_}}function tt(v){const _={array:[],stride:3};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"float_array":_.array=r(S.textContent);break;case"Name_array":_.array=s(S.textContent);break;case"technique_common":const A=n(S,"accessor")[0];A!==void 0&&(_.stride=parseInt(A.getAttribute("stride")));break}}return _}function lt(v){const _={};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];S.nodeType===1&&(_[S.getAttribute("semantic")]=o(S.getAttribute("source")))}return _}function Tt(v){const _={type:v.nodeName,material:v.getAttribute("material"),count:parseInt(v.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const Z=o(A.getAttribute("source")),rt=A.getAttribute("semantic"),Ct=parseInt(A.getAttribute("offset")),_t=parseInt(A.getAttribute("set")),Et=_t>0?rt+_t:rt;_.inputs[Et]={id:Z,offset:Ct},_.stride=Math.max(_.stride,Ct+1),rt==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=a(A.textContent);break;case"p":_.p=a(A.textContent);break}}return _}function St(v){const _={};for(let w=0;w<v.length;w++){const S=v[w];_[S.type]===void 0&&(_[S.type]=[]),_[S.type].push(S)}return _}function ne(v){let _=0;for(let w=0,S=v.length;w<S;w++)v[w].hasUV===!0&&_++;_>0&&_<v.length&&(v.uvsNeedsFix=!0)}function Ie(v){const _={},w=v.sources,S=v.vertices,A=v.primitives;if(A.length===0)return{};const Z=St(A);for(const rt in Z){const Ct=Z[rt];ne(Ct),_[rt]=Ze(Ct,w,S)}return _}function Ze(v,_,w){const S={},A={array:[],stride:0},Z={array:[],stride:0},rt={array:[],stride:0},Ct={array:[],stride:0},_t={array:[],stride:0},Et={array:[],stride:4},kt={array:[],stride:4},dt=new We,Ft=[];let It=0;for(let Wt=0;Wt<v.length;Wt++){const Vt=v[Wt],Be=Vt.inputs;let Ee=0;switch(Vt.type){case"lines":case"linestrips":Ee=Vt.count*2;break;case"triangles":Ee=Vt.count*3;break;case"polylist":for(let xe=0;xe<Vt.count;xe++){const ye=Vt.vcount[xe];switch(ye){case 3:Ee+=3;break;case 4:Ee+=6;break;default:Ee+=(ye-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",Vt.type)}dt.addGroup(It,Ee,Wt),It+=Ee,Vt.material&&Ft.push(Vt.material);for(const xe in Be){const ye=Be[xe];switch(xe){case"VERTEX":for(const $n in w){const pn=w[$n];switch($n){case"POSITION":const os=A.array.length;if(re(Vt,_[pn],ye.offset,A.array),A.stride=_[pn].stride,_.skinWeights&&_.skinIndices&&(re(Vt,_.skinIndices,ye.offset,Et.array),re(Vt,_.skinWeights,ye.offset,kt.array)),Vt.hasUV===!1&&v.uvsNeedsFix===!0){const Rd=(A.array.length-os)/A.stride;for(let xc=0;xc<Rd;xc++)rt.array.push(0,0)}break;case"NORMAL":re(Vt,_[pn],ye.offset,Z.array),Z.stride=_[pn].stride;break;case"COLOR":re(Vt,_[pn],ye.offset,_t.array),_t.stride=_[pn].stride;break;case"TEXCOORD":re(Vt,_[pn],ye.offset,rt.array),rt.stride=_[pn].stride;break;case"TEXCOORD1":re(Vt,_[pn],ye.offset,Ct.array),rt.stride=_[pn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',$n)}}break;case"NORMAL":re(Vt,_[ye.id],ye.offset,Z.array),Z.stride=_[ye.id].stride;break;case"COLOR":re(Vt,_[ye.id],ye.offset,_t.array,!0),_t.stride=_[ye.id].stride;break;case"TEXCOORD":re(Vt,_[ye.id],ye.offset,rt.array),rt.stride=_[ye.id].stride;break;case"TEXCOORD1":re(Vt,_[ye.id],ye.offset,Ct.array),Ct.stride=_[ye.id].stride;break}}}return A.array.length>0&&dt.setAttribute("position",new Te(A.array,A.stride)),Z.array.length>0&&dt.setAttribute("normal",new Te(Z.array,Z.stride)),_t.array.length>0&&dt.setAttribute("color",new Te(_t.array,_t.stride)),rt.array.length>0&&dt.setAttribute("uv",new Te(rt.array,rt.stride)),Ct.array.length>0&&dt.setAttribute("uv1",new Te(Ct.array,Ct.stride)),Et.array.length>0&&dt.setAttribute("skinIndex",new Te(Et.array,Et.stride)),kt.array.length>0&&dt.setAttribute("skinWeight",new Te(kt.array,kt.stride)),S.data=dt,S.type=v[0].type,S.materialKeys=Ft,S}function re(v,_,w,S,A=!1){const Z=v.p,rt=v.stride,Ct=v.vcount;function _t(dt){let Ft=Z[dt+w]*kt;const It=Ft+kt;for(;Ft<It;Ft++)S.push(Et[Ft]);if(A){const Wt=S.length-kt-1;He.setRGB(S[Wt+0],S[Wt+1],S[Wt+2],ze),S[Wt+0]=He.r,S[Wt+1]=He.g,S[Wt+2]=He.b}}const Et=_.array,kt=_.stride;if(v.vcount!==void 0){let dt=0;for(let Ft=0,It=Ct.length;Ft<It;Ft++){const Wt=Ct[Ft];if(Wt===4){const Vt=dt+rt*0,Be=dt+rt*1,Ee=dt+rt*2,xe=dt+rt*3;_t(Vt),_t(Be),_t(xe),_t(Be),_t(Ee),_t(xe)}else if(Wt===3){const Vt=dt+rt*0,Be=dt+rt*1,Ee=dt+rt*2;_t(Vt),_t(Be),_t(Ee)}else if(Wt>4)for(let Vt=1,Be=Wt-2;Vt<=Be;Vt++){const Ee=dt+rt*0,xe=dt+rt*Vt,ye=dt+rt*(Vt+1);_t(Ee),_t(xe),_t(ye)}dt+=rt*Wt}}else for(let dt=0,Ft=Z.length;dt<Ft;dt+=rt)_t(dt)}function dn(v){return x($t.geometries[v],Ie)}function Pn(v){const _={name:v.getAttribute("name")||"",joints:{},links:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"technique_common":Wn(S,_);break}}$t.kinematicsModels[v.getAttribute("id")]=_}function br(v){return v.build!==void 0?v.build:v}function Mr(v){return x($t.kinematicsModels[v],br)}function Wn(v,_){for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"joint":_.joints[S.getAttribute("sid")]=Ys(S);break;case"link":_.links.push(Ks(S));break}}}function Ys(v){let _;for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"prismatic":case"revolute":_=Sr(S);break}}return _}function Sr(v){const _={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",axis:new k,limits:{min:0,max:0},type:v.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"axis":const A=r(S.textContent);_.axis.fromArray(A);break;case"limits":const Z=S.getElementsByTagName("max")[0],rt=S.getElementsByTagName("min")[0];_.limits.max=parseFloat(Z.textContent),_.limits.min=parseFloat(rt.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function Ks(v){const _={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",attachments:[],transforms:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"attachment_full":_.attachments.push(ss(S));break;case"matrix":case"translate":case"rotate":_.transforms.push(Zs(S));break}}return _}function ss(v){const _={joint:v.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"link":_.links.push(Ks(S));break;case"matrix":case"translate":case"rotate":_.transforms.push(Zs(S));break}}return _}function Zs(v){const _={type:v.nodeName},w=r(v.textContent);switch(_.type){case"matrix":_.obj=new Jt,_.obj.fromArray(w).transpose();break;case"translate":_.obj=new k,_.obj.fromArray(w);break;case"rotate":_.obj=new k,_.obj.fromArray(w),_.angle=Ss.degToRad(w[3]);break}return _}function rs(v){const _={name:v.getAttribute("name")||"",rigidBodies:{}};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"rigid_body":_.rigidBodies[S.getAttribute("name")]={},Er(S,_.rigidBodies[S.getAttribute("name")]);break}}$t.physicsModels[v.getAttribute("id")]=_}function Er(v,_){for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"technique_common":Tr(S,_);break}}}function Tr(v,_){for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"inertia":_.inertia=r(S.textContent);break;case"mass":_.mass=r(S.textContent)[0];break}}}function qa(v){const _={bindJointAxis:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"bind_joint_axis":_.bindJointAxis.push(ja(S));break}}$t.kinematicsScenes[o(v.getAttribute("url"))]=_}function ja(v){const _={target:v.getAttribute("target").split("/").pop()};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"axis":const A=S.getElementsByTagName("param")[0];_.axis=A.textContent;const Z=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=Z.substring(0,Z.length-1);break}}return _}function Ya(v){return v.build!==void 0?v.build:v}function Ka(v){return x($t.kinematicsScenes[v],Ya)}function Za(){const v=Object.keys($t.kinematicsModels)[0],_=Object.keys($t.kinematicsScenes)[0],w=Object.keys($t.visualScenes)[0];if(v===void 0||_===void 0)return;const S=Mr(v),A=Ka(_),Z=ge(w),rt=A.bindJointAxis,Ct={};for(let kt=0,dt=rt.length;kt<dt;kt++){const Ft=rt[kt],It=Ne.querySelector('[sid="'+Ft.target+'"]');if(It){const Wt=It.parentElement;_t(Ft.jointIndex,Wt)}}function _t(kt,dt){const Ft=dt.getAttribute("name"),It=S.joints[kt];Z.traverse(function(Wt){Wt.name===Ft&&(Ct[kt]={object:Wt,transforms:Ja(dt),joint:It,position:It.zeroPosition})})}const Et=new Jt;as={joints:S&&S.joints,getJointValue:function(kt){const dt=Ct[kt];if(dt)return dt.position;console.warn("THREE.ColladaLoader: Joint "+kt+" doesn't exist.")},setJointValue:function(kt,dt){const Ft=Ct[kt];if(Ft){const It=Ft.joint;if(dt>It.limits.max||dt<It.limits.min)console.warn("THREE.ColladaLoader: Joint "+kt+" value "+dt+" outside of limits (min: "+It.limits.min+", max: "+It.limits.max+").");else if(It.static)console.warn("THREE.ColladaLoader: Joint "+kt+" is static.");else{const Wt=Ft.object,Vt=It.axis,Be=Ft.transforms;H.identity();for(let Ee=0;Ee<Be.length;Ee++){const xe=Be[Ee];if(xe.sid&&xe.sid.indexOf(kt)!==-1)switch(It.type){case"revolute":H.multiply(Et.makeRotationAxis(Vt,Ss.degToRad(dt)));break;case"prismatic":H.multiply(Et.makeTranslation(Vt.x*dt,Vt.y*dt,Vt.z*dt));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+It.type);break}else switch(xe.type){case"matrix":H.multiply(xe.obj);break;case"translate":H.multiply(Et.makeTranslation(xe.obj.x,xe.obj.y,xe.obj.z));break;case"scale":H.scale(xe.obj);break;case"rotate":H.multiply(Et.makeRotationAxis(xe.obj,xe.angle));break}}Wt.matrix.copy(H),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Ct[kt].position=dt}}else console.log("THREE.ColladaLoader: "+kt+" does not exist.")}}}function Ja(v){const _=[],w=Ne.querySelector('[id="'+v.id+'"]');for(let S=0;S<w.childNodes.length;S++){const A=w.childNodes[S];if(A.nodeType!==1)continue;let Z,rt;switch(A.nodeName){case"matrix":Z=r(A.textContent);const Ct=new Jt().fromArray(Z).transpose();_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Ct});break;case"translate":case"scale":Z=r(A.textContent),rt=new k().fromArray(Z),_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:rt});break;case"rotate":Z=r(A.textContent),rt=new k().fromArray(Z);const _t=Ss.degToRad(Z[3]);_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:rt,angle:_t});break}}return _}function E(v){const _=v.getElementsByTagName("node");for(let w=0;w<_.length;w++){const S=_[w];S.hasAttribute("id")===!1&&S.setAttribute("id",l())}}const H=new Jt,Y=new k;function K(v){const _={name:v.getAttribute("name")||"",type:v.getAttribute("type"),id:v.getAttribute("id"),sid:v.getAttribute("sid"),matrix:new Jt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType!==1)continue;let A;switch(S.nodeName){case"node":_.nodes.push(S.getAttribute("id")),K(S);break;case"instance_camera":_.instanceCameras.push(o(S.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(X(S));break;case"instance_light":_.instanceLights.push(o(S.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(X(S));break;case"instance_node":_.instanceNodes.push(o(S.getAttribute("url")));break;case"matrix":A=r(S.textContent),_.matrix.multiply(H.fromArray(A).transpose()),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"translate":A=r(S.textContent),Y.fromArray(A),_.matrix.multiply(H.makeTranslation(Y.x,Y.y,Y.z)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"rotate":A=r(S.textContent);const Z=Ss.degToRad(A[3]);_.matrix.multiply(H.makeRotationAxis(Y.fromArray(A),Z)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"scale":A=r(S.textContent),_.matrix.scale(Y.fromArray(A)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"extra":break;default:console.log(S)}}return zt(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):$t.nodes[_.id]=_,_}function X(v){const _={id:o(v.getAttribute("url")),materials:{},skeletons:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];switch(S.nodeName){case"bind_material":const A=S.getElementsByTagName("instance_material");for(let Z=0;Z<A.length;Z++){const rt=A[Z],Ct=rt.getAttribute("symbol"),_t=rt.getAttribute("target");_.materials[Ct]=o(_t)}break;case"skeleton":_.skeletons.push(o(S.textContent));break}}return _}function ft(v,_){const w=[],S=[];let A,Z,rt;for(A=0;A<v.length;A++){const Et=v[A];let kt;if(zt(Et))kt=oe(Et),xt(kt,_,w);else if(Ue(Et)){const Ft=$t.visualScenes[Et].children;for(let It=0;It<Ft.length;It++){const Wt=Ft[It];if(Wt.type==="JOINT"){const Vt=oe(Wt.id);xt(Vt,_,w)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Et)}for(A=0;A<_.length;A++)for(Z=0;Z<w.length;Z++)if(rt=w[Z],rt.bone.name===_[A].name){S[A]=rt,rt.processed=!0;break}for(A=0;A<w.length;A++)rt=w[A],rt.processed===!1&&(S.push(rt),rt.processed=!0);const Ct=[],_t=[];for(A=0;A<S.length;A++)rt=S[A],Ct.push(rt.bone),_t.push(rt.boneInverse);return new Wl(Ct,_t)}function xt(v,_,w){v.traverse(function(S){if(S.isBone===!0){let A;for(let Z=0;Z<_.length;Z++){const rt=_[Z];if(rt.name===S.name){A=rt.boneInverse;break}}A===void 0&&(A=new Jt),w.push({bone:S,boneInverse:A,processed:!1})}})}function At(v){const _=[],w=v.matrix,S=v.nodes,A=v.type,Z=v.instanceCameras,rt=v.instanceControllers,Ct=v.instanceLights,_t=v.instanceGeometries,Et=v.instanceNodes;for(let dt=0,Ft=S.length;dt<Ft;dt++)_.push(oe(S[dt]));for(let dt=0,Ft=Z.length;dt<Ft;dt++){const It=Yt(Z[dt]);It!==null&&_.push(It.clone())}for(let dt=0,Ft=rt.length;dt<Ft;dt++){const It=rt[dt],Wt=Q(It.id),Vt=dn(Wt.id),Be=Zt(Vt,It.materials),Ee=It.skeletons,xe=Wt.skin.joints,ye=ft(Ee,xe);for(let $n=0,pn=Be.length;$n<pn;$n++){const os=Be[$n];os.isSkinnedMesh&&(os.bind(ye,Wt.skin.bindMatrix),os.normalizeSkinWeights()),_.push(os)}}for(let dt=0,Ft=Ct.length;dt<Ft;dt++){const It=G(Ct[dt]);It!==null&&_.push(It.clone())}for(let dt=0,Ft=_t.length;dt<Ft;dt++){const It=_t[dt],Wt=dn(It.id),Vt=Zt(Wt,It.materials);for(let Be=0,Ee=Vt.length;Be<Ee;Be++)_.push(Vt[Be])}for(let dt=0,Ft=Et.length;dt<Ft;dt++)_.push(oe(Et[dt]).clone());let kt;if(S.length===0&&_.length===1)kt=_[0];else{kt=A==="JOINT"?new kh:new je;for(let dt=0;dt<_.length;dt++)kt.add(_[dt])}return kt.name=A==="JOINT"?v.sid:v.name,kt.matrix.copy(w),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt}const Dt=new dr({name:Ci.DEFAULT_MATERIAL_NAME,color:16711935});function Kt(v,_){const w=[];for(let S=0,A=v.length;S<A;S++){const Z=_[v[S]];Z===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",v[S]),w.push(Dt)):w.push(Mt(Z))}return w}function Zt(v,_){const w=[];for(const S in v){const A=v[S],Z=Kt(A.materialKeys,_);if(Z.length===0&&(S==="lines"||S==="linestrips"?Z.push(new Mi):Z.push(new lr)),S==="lines"||S==="linestrips")for(let Et=0,kt=Z.length;Et<kt;Et++){const dt=Z[Et];if(dt.isMeshPhongMaterial===!0||dt.isMeshLambertMaterial===!0){const Ft=new Mi;Ft.color.copy(dt.color),Ft.opacity=dt.opacity,Ft.transparent=dt.transparent,Z[Et]=Ft}}const rt=A.data.attributes.skinIndex!==void 0,Ct=Z.length===1?Z[0]:Z;let _t;switch(S){case"lines":_t=new rr(A.data,Ct);break;case"linestrips":_t=new $l(A.data,Ct);break;case"triangles":case"polylist":rt?_t=new Up(A.data,Ct):_t=new Fe(A.data,Ct);break}w.push(_t)}return w}function zt(v){return $t.nodes[v]!==void 0}function oe(v){return x($t.nodes[v],At)}function _e(v){const _={name:v.getAttribute("name"),children:[]};E(v);const w=n(v,"node");for(let S=0;S<w.length;S++)_.children.push(K(w[S]));$t.visualScenes[v.getAttribute("id")]=_}function Oe(v){const _=new je;_.name=v.name;const w=v.children;for(let S=0;S<w.length;S++){const A=w[S];_.add(oe(A.id))}return _}function Ue(v){return $t.visualScenes[v]!==void 0}function ge(v){return x($t.visualScenes[v],Oe)}function Gt(v){const _=n(v,"instance_visual_scene")[0];return ge(o(_.getAttribute("url")))}function Xe(){const v=$t.clips;if(c(v)===!0){if(c($t.animations)===!1){const _=[];for(const w in $t.animations){const S=T(w);for(let A=0,Z=S.length;A<Z;A++)_.push(S[A])}$e.push(new hu("default",-1,_))}}else for(const _ in v)$e.push($(_))}function ve(v){let _="";const w=[v];for(;w.length;){const S=w.shift();S.nodeType===Node.TEXT_NODE?_+=S.textContent:(_+=`
`,w.push(...S.childNodes))}return _.trim()}if(t.length===0)return{scene:new Fh};const fn=new DOMParser().parseFromString(t,"application/xml"),Ne=n(fn,"COLLADA")[0],Qe=fn.getElementsByTagName("parsererror")[0];if(Qe!==void 0){const v=n(Qe,"div")[0];let _;return v?_=v.textContent:_=ve(Qe),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}const Di=Ne.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Di);const Le=u(n(Ne,"asset")[0]),on=new Xh(this.manager);on.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);let tn;Wu&&(tn=new Wu(this.manager),tn.setPath(this.resourcePath||e));const He=new Qt,$e=[];let as={},Xn=0;const $t={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(Ne,"library_animations","animation",m),p(Ne,"library_animation_clips","animation_clip",z),p(Ne,"library_controllers","controller",ut),p(Ne,"library_images","image",nt),p(Ne,"library_effects","effect",te),p(Ne,"library_materials","material",ht),p(Ne,"library_cameras","camera",Rt),p(Ne,"library_lights","light",Nt),p(Ne,"library_geometries","geometry",bt),p(Ne,"library_nodes","node",K),p(Ne,"library_visual_scenes","visual_scene",_e),p(Ne,"library_kinematics_models","kinematics_model",Pn),p(Ne,"library_physics_models","physics_model",rs),p(Ne,"scene","instance_kinematics_scene",qa),g($t.animations,C),g($t.clips,it),g($t.controllers,wt),g($t.images,st),g($t.effects,j),g($t.materials,Ut),g($t.cameras,Xt),g($t.lights,Se),g($t.geometries,Ie),g($t.visualScenes,Oe),Xe(),Za();const wr=Gt(n(Ne,"scene")[0]);return wr.animations=$e,Le.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),wr.rotation.set(-Math.PI/2,0,0)),wr.scale.multiplyScalar(Le.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),$e},kinematics:as,library:$t,scene:wr}}}const Xu=new k,ax=new vn,aa=new Jt,mi=new Jt,oa=new Un,la=new k(1,1,1),ca=new k;class Va extends Ve{constructor(...t){super(...t),this.urdfNode=null,this.urdfName=""}copy(t,e){return super.copy(t,e),this.urdfNode=t.urdfNode,this.urdfName=t.urdfName,this}}class ox extends Va{constructor(...t){super(...t),this.isURDFCollider=!0,this.type="URDFCollider"}}class lx extends Va{constructor(...t){super(...t),this.isURDFVisual=!0,this.type="URDFVisual"}}class ed extends Va{constructor(...t){super(...t),this.isURDFLink=!0,this.type="URDFLink",this.inertial={mass:0,origin:{xyz:[0,0,0],rpy:[0,0,0]},inertia:{ixx:0,ixy:0,ixz:0,iyy:0,iyz:0,izz:0}}}copy(t,e){return super.copy(t,e),this.inertial={mass:t.inertial.mass,origin:{xyz:[...t.inertial.origin.xyz],rpy:[...t.inertial.origin.rpy]},inertia:{...t.inertial.inertia}},this}}class nd extends Va{get jointType(){return this._jointType}set jointType(t){if(this.jointType!==t)switch(this._jointType=t,this.matrixWorldNeedsUpdate=!0,t){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new k(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...t){super(...t),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new k(1,0,0),this.limit={lower:0,upper:0,effort:0,velocity:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(t,e){return super.copy(t,e),this.jointType=t.jointType,this.axis=t.axis.clone(),this.limit.lower=t.limit.lower,this.limit.upper=t.limit.upper,this.limit.effort=t.limit.effort,this.limit.velocity=t.limit.velocity,this.ignoreLimits=!1,this.jointValue=[...t.jointValue],this.origPosition=t.origPosition?t.origPosition.clone():null,this.origQuaternion=t.origQuaternion?t.origQuaternion.clone():null,this.mimicJoints=[...t.mimicJoints],this}setJointValue(...t){t=t.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let e=!1;switch(this.mimicJoints.forEach(n=>{e=n.updateFromMimickedJoint(...t)||e}),this.jointType){case"fixed":return e;case"continuous":case"revolute":{let n=t[0];return n==null||n===this.jointValue[0]?e:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"prismatic":{let n=t[0];return n==null||n===this.jointValue[0]?e:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),Xu.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Xu,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"floating":return this.jointValue.every((n,s)=>t[s]===n||t[s]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],this.jointValue[3]=t[3]!==null?t[3]:this.jointValue[3],this.jointValue[4]=t[4]!==null?t[4]:this.jointValue[4],this.jointValue[5]=t[5]!==null?t[5]:this.jointValue[5],mi.compose(this.origPosition,this.origQuaternion,la),oa.setFromEuler(ax.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),ca.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),aa.compose(ca,oa,la),mi.premultiply(aa),this.position.setFromMatrixPosition(mi),this.rotation.setFromRotationMatrix(mi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,s)=>t[s]===n||t[s]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],mi.compose(this.origPosition,this.origQuaternion,la),oa.setFromAxisAngle(this.axis,this.jointValue[2]),ca.set(this.jointValue[0],this.jointValue[1],0),aa.compose(ca,oa,la),mi.premultiply(aa),this.position.setFromMatrixPosition(mi),this.rotation.setFromRotationMatrix(mi),this.matrixWorldNeedsUpdate=!0,!0)}return e}}class $u extends nd{constructor(...t){super(...t),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...t){const e=t.map(n=>n===null?null:n*this.multiplier+this.offset);return super.setJointValue(...e)}copy(t,e){return super.copy(t,e),this.mimicJoint=t.mimicJoint,this.offset=t.offset,this.multiplier=t.multiplier,this}}class cx extends ed{constructor(...t){super(...t),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(t,e){super.copy(t,e),this.urdfRobotNode=t.urdfRobotNode,this.robotName=t.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in t.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in t.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in t.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in t.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(t){return this.frames[t]}setJointValue(t,...e){const n=this.joints[t];return n?n.setJointValue(...e):!1}setJointValues(t){let e=!1;for(const n in t){const s=t[n];Array.isArray(s)?e=this.setJointValue(n,...s)||e:e=this.setJointValue(n,s)||e}return e}}const ko=new Un,qu=new vn;function gi(i){return i?i.trim().split(/\s+/g).map(t=>parseFloat(t)):[0,0,0]}function ju(i,t,e=!1){e||i.rotation.set(0,0,0),qu.set(t[0],t[1],t[2],"ZYX"),ko.setFromEuler(qu),ko.multiply(i.quaternion),i.quaternion.copy(ko)}class ux{constructor(t){this.manager=t||Wh,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(t){return new Promise((e,n)=>{this.load(t,e,null,n)})}load(t,e,n,s){const r=this.manager,a=qh.extractUrlBase(t),o=this.manager.resolveURL(t);r.itemStart(o),fetch(o,this.fetchOptions).then(l=>{if(l.ok)return n&&n(null),l.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||a);e(c),r.itemEnd(o)}).catch(l=>{s?s(l):console.error("URDFLoader: Error loading file.",l),r.itemError(o),r.itemEnd(o)})}parse(t,e=this.workingPath){const n=this.packages,s=this.loadMeshCb,r=this.parseVisual,a=this.parseCollision,o=this.manager,l={},c={},u={};function h(R){if(!/^package:\/\//.test(R))return e?e+R:R;const[C,T]=R.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(C)?n+"/"+T:n+"/"+C+"/"+T;if(typeof n=="function")return n(C)+"/"+T;if(typeof n=="object")return C in n?n[C]+"/"+T:(console.error(`URDFLoader : ${C} not found in provided package list.`),null)}function d(R){let C;R instanceof Document?C=[...R.children]:R instanceof Element?C=[R]:C=[...new DOMParser().parseFromString(R,"text/xml").children];const T=C.filter(D=>D.nodeName==="robot").pop();return p(T)}function p(R){const C=[...R.children],T=C.filter(N=>N.nodeName.toLowerCase()==="link"),D=C.filter(N=>N.nodeName.toLowerCase()==="joint"),F=C.filter(N=>N.nodeName.toLowerCase()==="material"),I=new cx;I.robotName=R.getAttribute("name"),I.urdfRobotNode=R,F.forEach(N=>{const V=N.getAttribute("name");u[V]=m(N)});const U={},y={};T.forEach(N=>{const V=N.getAttribute("name"),W=R.querySelector(`child[link="${V}"]`)===null;l[V]=x(N,U,y,W?I:null)}),D.forEach(N=>{const V=N.getAttribute("name");c[V]=g(N)}),I.joints=c,I.links=l,I.colliders=y,I.visual=U;const b=Object.values(c);return b.forEach(N=>{N instanceof $u&&c[N.mimicJoint].mimicJoints.push(N)}),b.forEach(N=>{const V=new Set,W=J=>{if(V.has(J))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");V.add(J),J.mimicJoints.forEach(et=>{W(et)})};W(N)}),I.frames={...y,...U,...l,...c},I}function g(R){const C=[...R.children],T=R.getAttribute("type");let D;const F=C.find(V=>V.nodeName.toLowerCase()==="mimic");F?(D=new $u,D.mimicJoint=F.getAttribute("joint"),D.multiplier=parseFloat(F.getAttribute("multiplier")||1),D.offset=parseFloat(F.getAttribute("offset")||0)):D=new nd,D.urdfNode=R,D.name=R.getAttribute("name"),D.urdfName=D.name,D.jointType=T;let I=null,U=null,y=[0,0,0],b=[0,0,0];C.forEach(V=>{const W=V.nodeName.toLowerCase();W==="origin"?(y=gi(V.getAttribute("xyz")),b=gi(V.getAttribute("rpy"))):W==="child"?U=l[V.getAttribute("link")]:W==="parent"?I=l[V.getAttribute("link")]:W==="limit"&&(D.limit.lower=parseFloat(V.getAttribute("lower")||D.limit.lower),D.limit.upper=parseFloat(V.getAttribute("upper")||D.limit.upper),D.limit.effort=parseFloat(V.getAttribute("effort")||D.limit.effort),D.limit.velocity=parseFloat(V.getAttribute("velocity")||D.limit.velocity))}),I.add(D),D.add(U),ju(D,b),D.position.set(y[0],y[1],y[2]);const N=C.filter(V=>V.nodeName.toLowerCase()==="axis")[0];if(N){const V=N.getAttribute("xyz").split(/\s+/g).map(W=>parseFloat(W));D.axis=new k(V[0],V[1],V[2]),D.axis.normalize()}return D}function x(R,C,T,D=null){D===null&&(D=new ed);const F=[...R.children];D.name=R.getAttribute("name"),D.urdfName=D.name,D.urdfNode=R;const I=F.find(U=>U.nodeName.toLowerCase()==="inertial");return I&&[...I.children].forEach(U=>{const y=U.nodeName.toLowerCase();y==="origin"?(D.inertial.origin.xyz=gi(U.getAttribute("xyz")),D.inertial.origin.rpy=gi(U.getAttribute("rpy"))):y==="mass"?D.inertial.mass=parseFloat(U.getAttribute("value"))||0:y==="inertia"&&(D.inertial.inertia.ixx=parseFloat(U.getAttribute("ixx"))||0,D.inertial.inertia.ixy=parseFloat(U.getAttribute("ixy"))||0,D.inertial.inertia.ixz=parseFloat(U.getAttribute("ixz"))||0,D.inertial.inertia.iyy=parseFloat(U.getAttribute("iyy"))||0,D.inertial.inertia.iyz=parseFloat(U.getAttribute("iyz"))||0,D.inertial.inertia.izz=parseFloat(U.getAttribute("izz"))||0)}),r&&F.filter(y=>y.nodeName.toLowerCase()==="visual").forEach(y=>{const b=f(y,u);if(D.add(b),y.hasAttribute("name")){const N=y.getAttribute("name");b.name=N,b.urdfName=N,C[N]=b}}),a&&F.filter(y=>y.nodeName.toLowerCase()==="collision").forEach(y=>{const b=f(y);if(D.add(b),y.hasAttribute("name")){const N=y.getAttribute("name");b.name=N,b.urdfName=N,T[N]=b}}),D}function m(R){const C=[...R.children],T=new lr;return T.name=R.getAttribute("name")||"",C.forEach(D=>{const F=D.nodeName.toLowerCase();if(F==="color"){const I=D.getAttribute("rgba").split(/\s/g).map(U=>parseFloat(U));T.color.setRGB(I[0],I[1],I[2]),T.opacity=I[3],T.transparent=I[3]<1,T.depthWrite=!T.transparent}else if(F==="texture"){const I=D.getAttribute("filename");if(I){const U=new Xh(o),y=h(I);T.map=U.load(y),T.map.colorSpace=ze}}}),T}function f(R,C={}){const T=R.nodeName.toLowerCase()==="collision",D=[...R.children];let F=null;const I=D.filter(y=>y.nodeName.toLowerCase()==="material")[0];if(I){const y=I.getAttribute("name");y&&y in C?F=C[y]:F=m(I)}else F=new lr;const U=T?new ox:new lx;return U.urdfNode=R,D.forEach(y=>{const b=y.nodeName.toLowerCase();if(b==="geometry"){const N=y.children[0].nodeName.toLowerCase();if(N==="mesh"){const V=y.children[0].getAttribute("filename"),W=h(V);if(W!==null){const J=y.children[0].getAttribute("scale");if(J){const et=gi(J);U.scale.set(et[0],et[1],et[2])}s(W,o,(et,z)=>{z?console.error("URDFLoader: Error loading mesh.",z):et&&(et instanceof Fe&&(et.material=F),et.position.set(0,0,0),et.quaternion.identity(),U.add(et))})}}else if(N==="box"){const V=new Fe;V.geometry=new wi(1,1,1),V.material=F;const W=gi(y.children[0].getAttribute("size"));V.scale.set(W[0],W[1],W[2]),U.add(V)}else if(N==="sphere"){const V=new Fe;V.geometry=new fr(1,30,30),V.material=F;const W=parseFloat(y.children[0].getAttribute("radius"))||0;V.scale.set(W,W,W),U.add(V)}else if(N==="cylinder"){const V=new Fe;V.geometry=new ka(1,1,1,30),V.material=F;const W=parseFloat(y.children[0].getAttribute("radius"))||0,J=parseFloat(y.children[0].getAttribute("length"))||0;V.scale.set(W,J,W),V.rotation.set(Math.PI/2,0,0),U.add(V)}}else if(b==="origin"){const N=gi(y.getAttribute("xyz")),V=gi(y.getAttribute("rpy"));U.position.set(N[0],N[1],N[2]),U.rotation.set(0,0,0),ju(U,V)}}),U}return d(t)}defaultMeshLoader(t,e,n){/\.stl$/i.test(t)?new td(e).load(t,r=>{const a=new Fe(r,new lr);n(a)},null,r=>n(null,r)):/\.dae$/i.test(t)?new rx(e).load(t,r=>n(r.scene),null,r=>n(null,r)):console.warn(`URDFLoader: Could not load model at ${t}.
No loader available`)}}const hx="/urdf/piper_description.urdf",dx="/models/part.stl",fx=.001,xa=-0;class px{constructor(t,e={}){yc(this,"animate",()=>{var e,n;this.animationFrame=requestAnimationFrame(this.animate),this.resize(),this.controls.update(),this.renderer.render(this.scene,this.camera),this.frameCounter+=1;const t=performance.now();if(t-this.frameWindowStart>=1e3){const s=Math.round(this.frameCounter*1e3/(t-this.frameWindowStart));(n=(e=this.callbacks).onFps)==null||n.call(e,s),this.frameCounter=0,this.frameWindowStart=t}});this.canvas=t,this.callbacks=e,this.scene=new Fh,this.scene.background=new Qt(1581863),this.camera=new sn(42,1,.01,100),this.renderer=new Wv({canvas:t,antialias:!0,alpha:!1}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fh,this.renderer.toneMapping=ph,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=ze,this.controls=new $v(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.07,this.controls.minDistance=.7,this.controls.maxDistance=8,this.controls.target.set(0,.85+xa,0),this.robot=null,this.robotBounds=null,this.jointLimits=new Map,this.targetGroup=new je,this.tcpFrameGroup=new je,this.benchmarkGroup=new je,this.visionGroup=new je,this.visionPartGeometry=null,this.visionPartMarker=null,this.visionPartPoint=null,this.visionPartLoadPromise=null,this.cameraMarkerGroup=new je,this.platformGroup=new je,this.workspaceBoundsGroup=new je,this.manualCollisionGroup=new je,this.objectMarkerGroup=new je,this.cloudPoints=null,this.cameraExtrinsic=null,this.cloudVisible=!0,this.frameCounter=0,this.frameWindowStart=performance.now(),this.lastWidth=0,this.lastHeight=0,this.scene.add(this.targetGroup,this.tcpFrameGroup,this.benchmarkGroup,this.visionGroup,this.cameraMarkerGroup,this.platformGroup,this.workspaceBoundsGroup,this.manualCollisionGroup,this.objectMarkerGroup),this.addLighting(),this.addGround(),this.setDefaultView(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t.parentElement),this.loadRobot(),this.loadVisionPartModel(),this.animate()}addLighting(){const t=new _a(16777215,1.45);t.position.set(3.5,5.5,4),t.castShadow=!0,t.shadow.mapSize.setScalar(2048),t.shadow.camera.near=.1,t.shadow.camera.far=15,t.shadow.camera.left=-3,t.shadow.camera.right=3,t.shadow.camera.top=3,t.shadow.camera.bottom=-3,this.scene.add(t);const e=new _a(12180973,.62);e.position.set(-4,3,-2.5),this.scene.add(e);const n=new _a(16768432,.34);n.position.set(0,2,-4),this.scene.add(n),this.scene.add(new $h(16777215,.5))}addGround(){const t=new Fe(new gr(12,12),new zp({color:4937815,roughness:.82,metalness:.08,clearcoat:.08,side:Mn}));t.rotation.x=-Math.PI/2,t.position.y=-.002,t.receiveShadow=!0,this.scene.add(t);const e=this.createGrid();e.position.y=.001,this.scene.add(e)}createGrid(){const t=new je,e=8,n=40,s=e/n,r=e/2,a=new Mi({color:3425095,transparent:!0,opacity:.68}),o=new Mi({color:5399142,transparent:!0,opacity:.72});for(let l=0;l<=n;l+=1){const c=-r+l*s,u=new We().setFromPoints([new k(-r,0,c),new k(r,0,c)]),h=new We().setFromPoints([new k(c,0,-r),new k(c,0,r)]),d=l%5===0?o:a;t.add(new rr(u,d),new rr(h,d))}return t}loadRobot(){const t=new Gh,e=new ux(t);let n=null;t.onProgress=(s,r,a)=>{var o,l;(l=(o=this.callbacks).onLoadProgress)==null||l.call(o,r,a)},t.onLoad=()=>{var s,r;n&&(this.robot=n,this.scene.add(n),n.updateMatrixWorld(!0),this.robotBounds=new Ti().setFromObject(n),this.fitView(),(r=(s=this.callbacks).onLoaded)==null||r.call(s,n))},e.load(hx,s=>{n=s,s.name="PiperURDF",s.rotation.set(-Math.PI/2,0,0),s.scale.setScalar(1),s.position.set(0,xa,0),s.traverse(r=>{r.castShadow=!0,r.receiveShadow=!0,r.material&&(r.material.side=Mn,"roughness"in r.material&&(r.material.roughness=.58),r.material.needsUpdate=!0)})},void 0,s=>{var r,a;console.error("Failed to load Piper URDF",s),(a=(r=this.callbacks).onLoadError)==null||a.call(r,s)})}applyJointState(t){if(!this.robot||!(t!=null&&t.name)||!(t!=null&&t.position))return 0;let e=0;return t.name.forEach((n,s)=>{var l;const r=(l=this.robot.joints)==null?void 0:l[n];let a=Number(t.position[s]);if(!r||!Number.isFinite(a))return;const o=this.jointLimits.get(n);o&&(r.limit&&(r.limit.lower=o.lower,r.limit.upper=o.upper),a=Math.min(o.upper,Math.max(o.lower,a))),r.setJointValue(a),e+=1}),this.robot.updateMatrixWorld(!0),e}setJointLimits(t={}){this.jointLimits=new Map(Object.entries(t))}loadVisionPartModel(){if(this.visionPartLoadPromise)return this.visionPartLoadPromise;const t=new td;return this.visionPartLoadPromise=new Promise(e=>{t.load(dx,n=>{var a;n.computeVertexNormals(),n.computeBoundingBox();const s=new k;(a=n.boundingBox)==null||a.getCenter(s),n.translate(-s.x,-s.y,-s.z),n.computeBoundingBox(),this.visionPartGeometry=n;const r=this.ensureVisionPartMarker();r&&this.visionPartPoint&&(r.position.copy(this.visionPartPoint),r.visible=!0),e(n)},void 0,n=>{var s,r;(r=(s=this.callbacks).onStatus)==null||r.call(s,`零件模型加载失败: ${(n==null?void 0:n.message)||n}`),e(null)})}),this.visionPartLoadPromise}ensureVisionPartMarker(){if(!this.visionPartGeometry)return null;if(this.visionPartMarker)return this.visionPartMarker;const t=new je,e=new je,n=new Fe(this.visionPartGeometry,new Vi({color:15775311,emissive:4139788,roughness:.42,metalness:.08}));n.castShadow=!0,n.receiveShadow=!0;const s=new rr(new cu(this.visionPartGeometry,35),new Mi({color:16767371,transparent:!0,opacity:.55}));return e.add(n,s),e.scale.setScalar(fx),e.rotation.x=-Math.PI/2,t.add(e),t.visible=!!this.visionPartPoint,this.visionPartMarker=t,this.visionGroup.add(t),t}setTargetPose(t){if(_i(this.targetGroup),!t||!On([t.x,t.y,t.z]))return;const e=xi([t.x,t.y,t.z]),n=new Fe(new ql(.035,.043,40),new Vi({color:3723965,emissive:739906,side:Mn}));n.position.copy(e),n.quaternion.setFromUnitVectors(new k(0,0,1),new k(0,1,0)),this.targetGroup.add(n);const s=Ku(t.roll,t.pitch,t.yaw),r=$i(s).normalize();this.targetGroup.add(new ea(r,e,.16,3723965,.035,.02))}setBenchmarkSamples(t=[],e=null){_i(this.benchmarkGroup);for(const n of(t||[]).slice(0,120)){if(!On([n.x,n.y,n.z]))continue;const s=String(n.id)===String(e),r=n.ik&&n.ik.ok!==!0,a=s?4441222:r?15622754:_x(n.source),o=xi([n.x,n.y,n.z]),l=new Fe(new fr(s?.023:.016,16,10),new Vi({color:a,emissive:a,emissiveIntensity:s?.28:.12,transparent:!0,opacity:r?.68:.92,depthWrite:!1}));l.position.copy(o),this.benchmarkGroup.add(l);const c=$i(Ku(n.roll,n.pitch,n.yaw)).normalize();this.benchmarkGroup.add(new ea(c,o,s?.11:.07,a,s?.026:.018,s?.014:.009))}}setTcpFrame(t){if(_i(this.tcpFrameGroup),!t||!On(t.position)||!vx(t.orientation))return;const e=xi(t.position),n=[{axis:[1,0,0],color:16731469,length:.12},{axis:[0,1,0],color:4441222,length:.105},{axis:[0,0,1],color:5089535,length:.095}];for(const s of n){const r=$i(xx(s.axis,t.orientation)).normalize();this.tcpFrameGroup.add(new ea(r,e,s.length,s.color,.024,.012))}}setVisionTarget(t){const e=t==null?void 0:t.urdf_xyz_m;if(!On(e)){this.visionPartPoint=null,this.visionPartMarker&&(this.visionPartMarker.visible=!1);return}this.visionPartPoint=xi(e);const n=this.ensureVisionPartMarker();n?(n.position.copy(this.visionPartPoint),n.visible=!0):this.loadVisionPartModel()}setObjectMarkers(t=[]){_i(this.objectMarkerGroup);for(const e of t.slice(0,16)){const n=e.center_camera_xyz_m;if(!On(n)||!this.cameraExtrinsic)continue;const s=xi(Zu(n,this.cameraExtrinsic)),r=new Fe(new fr(.014,16,10),new Vi({color:6801389,emissive:1522763}));r.position.copy(s),this.objectMarkerGroup.add(r)}}setCameraExtrinsic(t){if(this.cameraExtrinsic=t?{...t}:null,_i(this.cameraMarkerGroup),!t||!On([t.x,t.y,t.z]))return;const e=xi([t.x,t.y,t.z]),n=Oo(t,[1,0,0]),s=Oo(t,[0,1,0]),r=Oo(t,[0,0,1]),a=new Jt().makeBasis(n,s,r),o=new je;o.position.copy(e),o.quaternion.setFromRotationMatrix(a);const l=new Fe(new wi(.124,.029,.026),new Vi({color:10135725,roughness:.52,metalness:.16,transparent:!0,opacity:.45}));o.add(l),this.cameraMarkerGroup.add(o),this.cameraMarkerGroup.add(new ea(r,e,.18,6801389,.03,.018))}setPlatformObstacle(t){_i(this.platformGroup);const e=(t==null?void 0:t.platform_obstacle)??t,n=Array.isArray(e)?e:Array.isArray(e==null?void 0:e.platform_obstacles)?e.platform_obstacles:e?[e]:[];for(const s of n)this.addCollisionBox(this.platformGroup,s,{fill:14901091,edge:15628154,opacity:.14})}setManualCollisionBoxes(t=[]){_i(this.manualCollisionGroup);for(const e of t||[])this.addCollisionBox(this.manualCollisionGroup,e,{fill:e.enabled===!1?8095113:15249485,edge:e.enabled===!1?10135725:16762719,opacity:e.enabled===!1?.08:.18})}setWorkspaceBounds(t){if(_i(this.workspaceBoundsGroup),!(t!=null&&t.enabled)||!On(t.min)||!On(t.max))return;const e=t.min.map(Number),n=t.max.map(Number),s=n.map((a,o)=>a-e[o]);if(s.some(a=>!Number.isFinite(a)||a<=0))return;const r=e.map((a,o)=>(a+n[o])/2);this.addCollisionBox(this.workspaceBoundsGroup,{center:r,dimensions:s,rpy:[0,0,0]},{fill:5089498,edge:6801389,opacity:.06})}addCollisionBox(t,e,n){if(!On(e==null?void 0:e.center)||!On(e==null?void 0:e.dimensions))return;const[s,r,a]=e.dimensions.map(Number),o=new wi(s,a,r),l=new Fe(o,new Vi({color:n.fill,transparent:!0,opacity:n.opacity,depthWrite:!1}));Yu(l,e);const c=new rr(new cu(o),new Mi({color:n.edge,transparent:!0,opacity:.9}));Yu(c,e),t.add(l,c)}async loadScenePointCloud(){if(!this.cloudVisible||!this.cameraExtrinsic)return null;const t=await fetch("/api/scene_pointcloud.bin",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.arrayBuffer();if(e.byteLength<8)throw new Error("点云数据为空");const n=new DataView(e),s=n.getUint32(0,!0),r=n.getUint32(4,!0),a=8+r*6*4;if(!r||e.byteLength<a)throw new Error("点云数据格式无效");const o=new Float32Array(e,8,r*6),l=new Float32Array(r*3),c=new Float32Array(r*3);for(let p=0;p<r;p+=1){const g=p*6,x=p*3,m=Zu([o[g],o[g+1],o[g+2]],this.cameraExtrinsic),f=xi(m);l[x]=f.x,l[x+1]=f.y,l[x+2]=f.z,c[x]=o[g+3],c[x+1]=o[g+4],c[x+2]=o[g+5]}const u=new We;u.setAttribute("position",new un(l,3)),u.setAttribute("color",new un(c,3));const h=new Bh({size:.005,vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1}),d=new Bp(u,h);return d.frustumCulled=!1,this.cloudPoints&&(this.scene.remove(this.cloudPoints),sd(this.cloudPoints)),this.cloudPoints=d,this.scene.add(d),{sequence:s,count:r}}setCloudVisible(t){this.cloudVisible=!!t,this.cloudPoints&&(this.cloudPoints.visible=this.cloudVisible)}setDefaultView(){this.camera.position.set(2.8,1.65,3.7),this.controls.target.set(0,.85+xa,0),this.controls.update()}frontView(){const t=this.controls.target.clone();this.camera.position.set(t.x,t.y+.15,t.z+3.9),this.camera.up.set(0,1,0),this.controls.update()}fitView(){if(!this.robot){this.setDefaultView();return}this.robot.updateMatrixWorld(!0);const t=new Ti().setFromObject(this.robot),e=t.getCenter(new k),n=t.getSize(new k),r=Math.max(n.x,n.y,n.z,1)/(2*Math.tan(this.camera.fov*Math.PI/360));this.controls.target.copy(e),this.camera.position.set(e.x+r*.62,e.y+r*.18,e.z+r*1.08),this.camera.near=Math.max(.01,r/100),this.camera.far=Math.max(20,r*10),this.camera.updateProjectionMatrix(),this.controls.update()}resetView(){this.setDefaultView()}resize(){const t=this.canvas.parentElement;if(!t)return;const e=Math.max(1,t.clientWidth),n=Math.max(1,t.clientHeight);e===this.lastWidth&&n===this.lastHeight||(this.lastWidth=e,this.lastHeight=n,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix())}dispose(){cancelAnimationFrame(this.animationFrame),this.resizeObserver.disconnect(),this.controls.dispose(),this.renderer.dispose()}}function xi(i){return new k(Number(i[0]),Number(i[2])+xa,-Number(i[1]))}function $i(i){return new k(Number(i[0]),Number(i[2]),-Number(i[1]))}function Yu(i,t){i.position.copy(xi(t.center)),i.quaternion.setFromRotationMatrix(mx(t.rpy||[0,0,0]))}function mx(i){const t=gx(Number(i[0]||0),Number(i[1]||0),Number(i[2]||0)),e=[t[0][0],t[1][0],t[2][0]],n=[t[0][1],t[1][1],t[2][1]],s=[t[0][2],t[1][2],t[2][2]],r=$i(e).normalize(),a=$i(s).normalize(),o=$i(n).multiplyScalar(-1).normalize();return new Jt().makeBasis(r,a,o)}function gx(i,t,e){const n=Math.sin(i),s=Math.cos(i),r=Math.sin(t),a=Math.cos(t),o=Math.sin(e),l=Math.cos(e);return[[l*a,l*r*n-o*s,l*r*s+o*n],[o*a,o*r*n+l*s,o*r*s-l*n],[-r,a*n,a*s]]}function Ku(i=0,t=0,e=0){const n=Math.cos(Number(t)),s=Math.sin(Number(t)),r=Math.cos(Number(e)),a=Math.sin(Number(e));return[r*n,a*n,-s]}function _x(i){return i==="box_top"?5089498:i==="edge"?15249485:i==="random"?14148068:10135725}function id(i){const t=Math.cos(Number(i.pitch)),e=Math.sin(Number(i.pitch)),n=Math.cos(Number(i.roll)),s=Math.sin(Number(i.roll)),r=Math.cos(Number(i.yaw)),a=Math.sin(Number(i.yaw));return[[r*n,r*s*e-a*t,r*s*t+a*e],[a*n,a*s*e+r*t,a*s*t-r*e],[-s,n*e,n*t]]}function Oo(i,t){const e=id(i),n=[e[0][0]*t[0]+e[0][1]*t[1]+e[0][2]*t[2],e[1][0]*t[0]+e[1][1]*t[1]+e[1][2]*t[2],e[2][0]*t[0]+e[2][1]*t[1]+e[2][2]*t[2]];return $i(n).normalize()}function Zu(i,t){const e=id(t);return[Number(t.x)+e[0][0]*i[0]+e[0][1]*i[1]+e[0][2]*i[2],Number(t.y)+e[1][0]*i[0]+e[1][1]*i[1]+e[1][2]*i[2],Number(t.z)+e[2][0]*i[0]+e[2][1]*i[1]+e[2][2]*i[2]]}function On(i){return Array.isArray(i)&&i.length===3&&i.every(t=>Number.isFinite(Number(t)))}function vx(i){return Array.isArray(i)&&i.length===4&&i.every(t=>Number.isFinite(Number(t)))}function xx(i,t){const[e,n,s]=i.map(Number),[r,a,o,l]=t.map(Number),c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return[e+l*c+(a*h-o*u),n+l*u+(o*c-r*h),s+l*h+(r*u-a*c)]}function _i(i){for(;i.children.length;){const t=i.children.pop();sd(t)}}function sd(i){var t;(t=i==null?void 0:i.traverse)==null||t.call(i,e=>{var n,s,r,a;(s=(n=e.geometry)==null?void 0:n.dispose)==null||s.call(n),Array.isArray(e.material)?e.material.forEach(o=>{var l;return(l=o==null?void 0:o.dispose)==null?void 0:l.call(o)}):(a=(r=e.material)==null?void 0:r.dispose)==null||a.call(r)})}/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=(i,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(t).forEach(s=>{n.setAttribute(s,String(t[s]))}),e.length&&e.forEach(s=>{const r=rd(...s);n.appendChild(r)}),n};var yx=([i,t,e])=>rd(i,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=i=>Array.from(i.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),Mx=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",Sx=i=>i.flatMap(Mx).map(e=>e.trim()).filter(Boolean).filter((e,n,s)=>s.indexOf(e)===n).join(" "),Ex=i=>i.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),Ju=(i,{nameAttr:t,icons:e,attrs:n})=>{var g;const s=i.getAttribute(t);if(s==null)return;const r=Ex(s),a=e[r];if(!a)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const o=bx(i),[l,c,u]=a,h={...c,"data-lucide":s,...n,...o},d=Sx(["lucide",`lucide-${s}`,o,n]);d&&Object.assign(h,{class:d});const p=yx([l,h,u]);return(g=i.parentNode)==null?void 0:g.replaceChild(p,i)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=["svg",ie,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=["svg",ie,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=["svg",ie,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=["svg",ie,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=["svg",ie,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=["svg",ie,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=["svg",ie,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=["svg",ie,[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=["svg",ie,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=["svg",ie,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=["svg",ie,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=["svg",ie,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=["svg",ie,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=["svg",ie,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=["svg",ie,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=["svg",ie,[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=["svg",ie,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=["svg",ie,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=["svg",ie,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=["svg",ie,[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=["svg",ie,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=["svg",ie,[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=["svg",ie,[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=["svg",ie,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=["svg",ie,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=["svg",ie,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=["svg",ie,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=["svg",ie,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=["svg",ie,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=["svg",ie,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=["svg",ie,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=["svg",ie,[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=["svg",ie,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=["svg",ie,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=["svg",ie,[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=["svg",ie,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=["svg",ie,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=["svg",ie,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=["svg",ie,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=["svg",ie,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=["svg",ie,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=["svg",ie,[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=["svg",ie,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=({icons:i={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(s=>Ju(s,{nameAttr:t,icons:i,attrs:e})),t==="data-lucide"){const s=document.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(r=>Ju(r,{nameAttr:"icon-name",icons:i,attrs:e})))}},my={ArrowDownToLine:Tx,ArrowUp:Ax,ArrowUpFromLine:wx,Bot:Cx,Box:Rx,CircleCheck:Px,CircleX:Lx,Cloud:Dx,CloudDownload:Nx,CornerDownLeft:Ix,Crosshair:Ux,Focus:Fx,FoldHorizontal:kx,Gauge:Ox,Grab:Bx,Hand:zx,House:Vx,ListChecks:Hx,ListTree:Gx,MapPinPlus:Wx,Move3d:Xx,OctagonAlert:$x,PackageOpen:qx,PanelRight:jx,Play:Yx,Plus:Kx,Power:Jx,PowerOff:Zx,RefreshCw:Qx,RotateCcw:ty,Route:ey,Save:ny,Scan:sy,ScanEye:iy,ScrollText:ry,ShieldAlert:ay,ShieldCheck:oy,SlidersHorizontal:ly,Trash2:cy,TriangleAlert:uy,UnfoldHorizontal:hy,View:dy,WandSparkles:fy};function B(i){return document.getElementById(i)}function vr(){py({icons:my,attrs:{"stroke-width":1.8}})}function be(i,t=3){const e=Number(i);return Number.isFinite(e)?e.toFixed(t):"--"}function ee(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Vn(i,t,e,n="neutral"){const s=B(i);if(!s)return;const r=s.querySelector("b"),a=s.querySelector("span:last-child");r&&(r.textContent=t),a&&(a.textContent=e),s.dataset.state=n}function _n(i,t,e="neutral"){const n=B(i);n&&(n.textContent=t,n.dataset.state=e)}function Ce(i,t="good",e=3600){const n=B("toastStack"),s=document.createElement("div"),r=t==="bad"?"circle-x":t==="warn"?"triangle-alert":"circle-check";s.className="toast",s.dataset.kind=t,s.innerHTML=`<i data-lucide="${r}"></i><p>${ee(i)}</p>`,n.appendChild(s),vr(),window.setTimeout(()=>s.remove(),e)}function gy(i){var s;const t=(s=i==null?void 0:i.payload)==null?void 0:s.failure;if(!t)return(i==null?void 0:i.message)||"未知错误";const e=[];t.stage_label&&e.push(t.stage_label),t.title&&e.push(t.title);const n=t.message||(i==null?void 0:i.message);return n&&!e.includes(n)&&e.push(n),t.moveit_error_code!==void 0&&e.push(`MoveIt=${t.moveit_error_code}${t.moveit_error_name?` ${t.moveit_error_name}`:""}`),t.hint&&e.push(t.hint),e.filter(Boolean).join(" | ")}function Ha(i,t="确认操作",e="确认"){const n=B("confirmDialog");return B("confirmTitle").textContent=t,B("confirmMessage").textContent=i,B("confirmAccept").textContent=e,n.hidden=!1,new Promise(s=>{const r=u=>{n.hidden=!0,B("confirmCancel").removeEventListener("click",a),B("confirmAccept").removeEventListener("click",o),n.removeEventListener("click",l),window.removeEventListener("keydown",c),s(u)},a=()=>r(!1),o=()=>r(!0),l=u=>{u.target===n&&a()},c=u=>{u.key==="Escape"&&a(),u.key==="Enter"&&o()};B("confirmCancel").addEventListener("click",a),B("confirmAccept").addEventListener("click",o),n.addEventListener("click",l),window.addEventListener("keydown",c),B("confirmCancel").focus()})}async function Re(i,t,e={}){const{confirm:n,confirmTitle:s,success:r=`${i}完成`,quiet:a=!1,onError:o=null}=e;if(document.body.dataset.busy)return Ce("已有命令正在执行，请等待完成","warn",2200),null;if(n&&!await Ha(n,s))return null;B("footerMessage").textContent=`${i}...`,document.body.dataset.busy="true",document.querySelectorAll("button").forEach(l=>{l.disabled||(l.dataset.busyDisabled="true",l.disabled=!0)});try{const l=await t();return B("footerMessage").textContent=r,a||Ce(r),l}catch(l){const c=`${i}失败：${gy(l)}`;return B("footerMessage").textContent=c,Ce(c,"bad",9e3),o==null||o(l,c),null}finally{document.querySelectorAll('button[data-busy-disabled="true"]').forEach(l=>{l.disabled=!1,delete l.dataset.busyDisabled}),delete document.body.dataset.busy}}const Ca=[["x","X",-.65,.75,.001,.3],["y","Y",-.65,.65,.001,0],["z","Z",.02,.85,.001,.35]],Ra=[["x","X",-2,2,.001,0],["y","Y",-2,2,.001,0],["z","Z",0,3,.001,1.4],["roll","Roll",-3.142,3.142,.001,0],["pitch","Pitch",-3.142,3.142,.001,-1.571],["yaw","Yaw",-3.142,3.142,.001,3.142],["image_rotation_deg","Image Rot",0,270,90,180]],Rl=[["1","q"],["2","w"],["3","e"],["4","r"],["5","t"],["6","y"]],_y=.8*Math.PI/180,vy=180,xy={approach:"接近",grasp:"抓取",lift:"抬起",move:"移动",release:"释放",close:"闭合",pick:"自动夹取",wait:"等待"},yy="side",by={vertical:{roll:0,pitch:-Math.PI/2,yaw:Math.PI,grasp_orientation_mode:"vertical_grasp"},side:{roll:Math.PI/2,pitch:0,yaw:0,grasp_orientation_mode:"side_grasp"},z_parallel:{roll:0,pitch:Math.PI/6,yaw:0,grasp_orientation_mode:"angled_grasp"}},Qu={vertical_grasp:{title:"垂直抓取",summary:"IK 先验证垂直末端姿态，再按候选姿态逐个规划。",scanLabel:"垂直候选",candidateText:i=>sr(i)},side_grasp:{title:"侧面抓取",summary:"IK 扫描侧向接近姿态，找到可规划候选后锁定。",scanLabel:"侧向候选",candidateText:i=>sr(i)},angled_grasp:{title:"斜向抓取",summary:"IK 扫描斜向抓取姿态，兼顾目标方向和碰撞约束。",scanLabel:"斜向候选",candidateText:i=>sr(i)},z_parallel_grasp:{title:"斜向抓取",summary:"IK 扫描斜向抓取姿态，兼顾目标方向和碰撞约束。",scanLabel:"斜向候选",candidateText:i=>sr(i)},flexible_grasp:{title:"灵活抓取",summary:"IK 扫描圆柱接触方向，先确认预抓取，再确认抓取位姿。",scanLabel:"接触角",candidateText:i=>Number.isFinite(Number(i==null?void 0:i.theta_deg))?`theta ${be(i.theta_deg,1)}°`:sr(i)}},ad="piper.omplConfig",Rn={planner_id:"RRTConnectkConfigDefault",planning_time:1,attempts:1,ik_timeout:.6},My={box_top:"箱上",edge:"边缘",random:"随机",custom:"自定义"},P={arm:"right",activePanel:"motion",linksByArm:{right:[],left:[]},jointState:null,jointConfig:null,jointLimitsByArm:{right:{},left:{}},kinematics:null,ompl:{options:null,config:pb(),selectedPresetId:null},benchmark:{options:null,defaultsApplied:!1,selectedPlanners:[],samples:[],selectedSampleId:null,result:null,progress:null},visionTarget:null,cameraExtrinsic:null,points:[],presets:[],sequence:Gb(),cloudVisible:localStorage.getItem("piper.cloudVisible")!=="false",graspPoseMode:tc(localStorage.getItem("piper.graspPoseMode")),platformObstacleVisible:!1,platformObstacleApplied:!1,manualCollision:{boxes:[],applied:!1},workspaceBoundsByArm:{right:{enabled:!1,min:[-.55,-.55,.02],max:[.65,.55,.85]},left:{enabled:!1,min:[-.55,-.55,.02],max:[.65,.55,.85]}},lastPlanByArm:{right:null,left:null},lastDecisionError:null,robotByArm:{right:{motors_enabled:null,estop_active:null},left:{motors_enabled:null,estop_active:null}},lastStatusAt:0};let ct;const Ls=new Set;let Bo=!1,cr=null,th=0,ya=null;function Sy(){Cy(),Ry(),eh("velocityScaling","velocityValue",i=>Number(i).toFixed(2)),eh("accelerationScaling","accelerationValue",i=>Number(i).toFixed(2)),Py(),Dy(),Iy(),ld(),cd(),Dl({anyConnected:!1,anyEnabled:!1,allEnabled:!1,anyEstop:!1}),xd(),ji(),Hn(),Ns(),$a(),Ni(),is(),li(),Li(),vr(),Ey(),Ay(),Ty(),wy()}function Ey(){ct=new px(B("robotScene"),{onLoadProgress:(i,t)=>{B("sceneLoadState").querySelector("span:last-child").textContent=`正在加载 Piper URDF ${i}/${t}`},onLoaded:i=>{B("sceneLoadState").classList.add("ready"),B("sceneLoadState").querySelector("span:last-child").textContent="Piper URDF 已加载",B("sceneModelState").textContent=`${Object.keys(i.joints||{}).length} 个关节`,ct.applyJointState(P.jointState),window.setTimeout(()=>{B("sceneLoadState").hidden=!0},1e3)},onLoadError:i=>{B("sceneLoadState").querySelector("span:last-child").textContent="URDF 加载失败",B("sceneModelState").textContent="模型不可用",Ce(`URDF 加载失败：${i.message||i}`,"bad",6e3)},onFps:i=>{B("sceneFps").textContent=`${i} FPS`}}),ct.setCloudVisible(P.cloudVisible),ct.setTargetPose(xn())}async function Ty(){await Promise.allSettled([Pi(),es(),rc(),ac(),ub(),pd(),fd(),gc(),_c(),md(!1),ib(!1),tb(!1),dc(),js(),xr(!1)]),oc()}function wy(){ua(Pi,100),ua(rc,400),ua(es,600),ua(fd,2e3),window.setInterval(()=>{P.activePanel==="logs"&&B("logAutoRefresh").checked&&Da()},3e3)}function ua(i,t){let e=!1;window.setInterval(async()=>{if(!e){e=!0;try{await i()}finally{e=!1}}},t)}function Ay(){const i=()=>{B("footerClock").textContent=new Date().toLocaleTimeString("zh-CN",{hour12:!1})};i(),window.setInterval(i,1e3)}function Cy(){const i=B("poseFields");i.innerHTML=Ca.map(([t,e,n,s,r,a])=>`
    <label class="pose-field pose-slider-field">
      <span>${e} / m</span>
      <output id="pose_${t}_value">${be(a,3)}</output>
      <input id="pose_${t}" type="range" min="${n}" max="${s}" step="${r}" value="${a}">
    </label>
  `).join("");for(const[t]of Ca)B(`pose_${t}`).addEventListener("input",()=>{od(t),ct==null||ct.setTargetPose(xn())})}function od(i){const t=B(`pose_${i}_value`);t&&(t.textContent=be(Number(B(`pose_${i}`).value),3))}function Ry(){const i=B("cameraFields");i.innerHTML=Ra.map(([t,e,n,s,r,a])=>`
    <label class="pose-field">
      <span>${e}</span>
      <input id="camera_${t}" type="number" min="${n}" max="${s}" step="${r}" value="${a}">
    </label>
  `).join("");for(const[t]of Ra)B(`camera_${t}`).addEventListener("input",()=>{P.cameraExtrinsic=Gs(),ct==null||ct.setCameraExtrinsic(P.cameraExtrinsic),B("extrinsicStatus").textContent="外参已修改，尚未保存"})}function eh(i,t,e){const n=B(i),s=B(t);if(!n||!s)return;const r=()=>{s.textContent=e(n.value)};n.addEventListener("input",r),r()}function Py(){document.querySelectorAll("[data-panel]").forEach(i=>{i.addEventListener("click",()=>Ly(i.dataset.panel))}),B("toggleInspector").addEventListener("click",()=>{B("inspectorPanel").classList.toggle("open")}),document.querySelectorAll("[data-arm]").forEach(i=>{i.addEventListener("click",()=>Ql(i.dataset.arm))}),document.querySelectorAll("[data-grasp-mode]").forEach(i=>{i.addEventListener("click",()=>Ny(i.dataset.graspMode))}),B("fitViewButton").addEventListener("click",()=>ct.fitView()),B("frontViewButton").addEventListener("click",()=>ct.frontView()),B("resetViewButton").addEventListener("click",()=>ct.resetView()),document.querySelector(".scene-panel").addEventListener("click",i=>{i.target.closest("button")||(window.innerWidth<=760&&B("controlPanel").classList.remove("open"),window.innerWidth<=1040&&B("inspectorPanel").classList.remove("open"))})}function Ly(i){P.activePanel=i,document.querySelectorAll("[data-panel]").forEach(t=>{t.classList.toggle("active",t.dataset.panel===i)}),document.querySelectorAll("[data-panel-content]").forEach(t=>{t.classList.toggle("active",t.dataset.panelContent===i)}),window.innerWidth<=760&&B("controlPanel").classList.add("open"),i==="logs"&&Da(),i==="ompl"&&js(),i==="benchmark"&&xr(),i==="calibration"&&(uc(),dc())}async function Ql(i){nc(),P.arm="right",localStorage.setItem("piper.activeArm",P.arm),ld(),await Promise.allSettled([Pi(),es(),rc(),ac()]),P.activePanel==="calibration"&&uc(),B("footerMessage").textContent=`当前控制：${an()}`}function ld(){document.querySelectorAll("[data-arm]").forEach(i=>{const t=i.dataset.arm===P.arm;i.classList.toggle("active",t),i.setAttribute("aria-selected",String(t))}),B("jointPanelTitle").textContent=`${an()}关节`,lc(),ct==null||ct.setWorkspaceBounds(Zi()),Pa(),dd(),Ni(),li(),P.activePanel==="benchmark"&&xr(!1)}function tc(i){return i==="vertical"||i==="side"||i==="z_parallel"?i:yy}function Ny(i){P.graspPoseMode=tc(i),localStorage.setItem("piper.graspPoseMode",P.graspPoseMode),cd(),Ns(),ct==null||ct.setTargetPose(xn())}function cd(){document.querySelectorAll("[data-grasp-mode]").forEach(i=>{const t=i.dataset.graspMode===P.graspPoseMode;i.classList.toggle("active",t),i.setAttribute("aria-selected",String(t))})}function Dy(){const i=(t,e,n)=>{var s;return(s=B(t))==null?void 0:s.addEventListener(e,n)};i("syncTcpButton","click",ky),i("planButton","click",By),i("executeButton","click",Hy),i("readVisionButton","click",()=>Oy(!0)),i("savePointQuickButton","click",lh),i("savePointButton","click",lh),i("savePresetButton","click",kb),i("emergencyStop","click",qy),i("enableButton","click",Gy),i("disableButton","click",Wy),i("resetEstopButton","click",Xy),i("homeButton","click",$y),i("gripperOpenButton","click",()=>nh("gripper_open")),i("gripperCloseButton","click",()=>nh("gripper_close")),i("reloadExtrinsicButton","click",pd),i("saveExtrinsicButton","click",jy),i("toggleCloudButton","click",Yy),i("saveCloudButton","click",Ky),i("rebuildCloudButton","click",Zy),i("loadPlatformButton","click",Jy),i("applyPlatformButton","click",Qy),i("addCollisionBoxButton","click",sb),i("saveCollisionBoxesButton","click",ab),i("applyCollisionBoxesButton","click",ob),i("clearCollisionBoxesButton","click",lb),i("manualCollisionFields","input",rh),i("manualCollisionFields","change",rh),i("manualCollisionFields","click",rb),i("workspaceBoundsFields","input",sh),i("workspaceBoundsFields","change",sh),i("saveWorkspaceBoundsButton","click",nb),i("loadJointConfigButton","click",uc),i("saveJointConfigButton","click",hb),i("reloadKinematicsButton","click",dc),i("saveKinematicsButton","click",fb),i("reloadOmplConfigButton","click",js),i("applyOmplPresetButton","click",gb),i("saveOmplPresetButton","click",_b),i("deleteOmplPresetButton","click",vb),i("omplPlannerSelect","change",ha),i("omplPlanningTime","input",ha),i("omplAttempts","input",ha),i("omplIkTimeout","input",ha),i("generateBenchmarkButton","click",wb),i("runBenchmarkButton","click",Ab),i("saveBenchmarkPresetButton","click",Mb),i("exportBenchmarkCsvButton","click",Sb),i("benchmarkSamples","click",Fb),i("benchmarkPlanners","change",Nb),["benchmarkCollisionBox","benchmarkBoxCount","benchmarkBoxOffsetCm","benchmarkEdgeCount","benchmarkEdgeDistanceCm","benchmarkRandomCount","benchmarkSeed"].forEach(t=>i(t,t==="benchmarkCollisionBox"?"change":"input",Pb)),["benchmarkPlanningTime","benchmarkAttempts","benchmarkIkTimeout"].forEach(t=>{i(t,"input",Lb)}),i("addSequenceButton","click",Bb),i("clearSequenceButton","click",Vb),i("executeSequenceButton","click",Hb),i("refreshLogsButton","click",Da),i("logLevelFilter","change",Da),i("pointsList","click",ch),i("presetsList","click",ch),i("sequenceList","click",zb)}function Iy(){window.addEventListener("keydown",i=>{if(Uy(i.target)||!B("confirmDialog").hidden)return;const t=i.key.toLowerCase();if(t==="tab"||t==="["||t==="]"){if(i.preventDefault(),i.repeat)return;Ql();return}const e=Pl(t);if(e){if(i.preventDefault(),!ec()){i.repeat||Ce(`${an()}尚未使能，不能使用关节键盘控制`,"warn");return}Ls.add(t),Ll(t,!0),i.repeat||Nl(e.joint,e.direction),Fy()}}),window.addEventListener("keyup",i=>{const t=i.key.toLowerCase();Pl(t)&&(Ls.delete(t),Ll(t,!1),Ls.size||ud())}),window.addEventListener("blur",nc),B("jointTelemetry").addEventListener("click",i=>{const t=i.target.closest("[data-jog-joint]");!t||t.disabled||Nl(Number(t.dataset.jogJoint),Number(t.dataset.jogDirection))})}function Uy(i){return i instanceof HTMLElement&&(i.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(i.tagName))}function Pl(i){for(let t=0;t<Rl.length;t+=1){const[e,n]=Rl[t];if(i===e)return{joint:t+1,direction:1};if(i===n)return{joint:t+1,direction:-1}}return null}function ec(){const i=P.robotByArm[P.arm];return(i==null?void 0:i.motors_enabled)===!0&&(i==null?void 0:i.estop_active)!==!0}function Ll(i,t){document.querySelectorAll(`[data-jog-key="${i}"]`).forEach(e=>{e.classList.toggle("pressed",t)})}function Fy(){cr||(cr=window.setInterval(()=>{const i=Ls.values().next().value,t=Pl(i);t&&Nl(t.joint,t.direction)},vy))}function ud(){cr&&(window.clearInterval(cr),cr=null)}function nc(){Ls.clear(),ud(),document.querySelectorAll("[data-jog-key].pressed").forEach(i=>i.classList.remove("pressed"))}async function Nl(i,t){if(!(Bo||!ec())){Bo=!0;try{const e=await jt("/api/joint_jog",{arm:P.arm,joint:i,delta_rad:t*_y,duration_sec:.25}),n=Number(e.target_rad)*180/Math.PI;B("footerMessage").textContent=`${an()} J${i} → ${Number.isFinite(n)?`${n.toFixed(1)}°`:"已发送"}`}catch(e){nc(),Date.now()-th>1500&&(Ce(`关节键盘控制失败：${e.message}`,"bad",5e3),th=Date.now())}finally{Bo=!1}}}function xn(){const i=Object.fromEntries(Ca.map(([s])=>[s,Number(B(`pose_${s}`).value)])),t=tc(P.graspPoseMode),e=by[t];return{...i,roll:e.roll,pitch:e.pitch,yaw:e.yaw,arm:P.arm,velocity_scaling:Number(B("velocityScaling").value),acceleration_scaling:Number(B("accelerationScaling").value),orientation_tolerance:.5,stay_near:!1,avoid_platform:B("avoidPlatform").checked,collision_boxes:vd(),grasp_orientation_mode:e.grasp_orientation_mode,position_only:!0,...Wa()}}function ic(){return xn()}function wn(i,t){var n;const e=Number((n=B(i))==null?void 0:n.value);return Number.isFinite(e)?e:t}function Ga(i){for(const[t]of Ca)Number.isFinite(Number(i==null?void 0:i[t]))&&(B(`pose_${t}`).value=i[t],od(t));ct==null||ct.setTargetPose(xn())}function Gs(){return Object.fromEntries(Ra.map(([i])=>[i,Number(B(`camera_${i}`).value)]))}function sc(i){for(const[t]of Ra)Number.isFinite(Number(i==null?void 0:i[t]))&&(B(`camera_${t}`).value=i[t]);P.cameraExtrinsic=Gs(),ct==null||ct.setCameraExtrinsic(P.cameraExtrinsic)}async function Pi(){var i,t,e;try{const n=await Dd();P.lastStatusAt=Date.now(),P.jointState=n.joint_state||null,P.lastPlanByArm={...P.lastPlanByArm,...n.last_plan||{}},ct==null||ct.applyJointState(P.jointState),Pa(),Ns();const s=(i=n.last_plan)==null?void 0:i[P.arm],r=((t=n.status)==null?void 0:t[P.arm])||"就绪",a=(e=s==null?void 0:s.ompl)!=null&&e.planner_id?` / ${s.ompl.planner_id}`:"";Vn("statusPlan","规划",s?`${s.points??"--"} 点 / ${be(s.duration,2)} s${a}`:r,s?"good":"neutral"),Vn("statusConnection","控制服务","在线","good"),!document.body.dataset.busy&&B("footerMessage").textContent.startsWith("等待")&&(B("footerMessage").textContent="Piper 控制服务在线")}catch{Vn("statusConnection","控制服务","离线","bad"),Vn("statusPlan","规划","状态不可用","bad"),document.body.dataset.busy||(B("footerMessage").textContent="Piper 控制服务离线")}}async function es(){var i;try{const t=await Id();let e=!1,n=!1,s=!1,r=!0,a=!0;for(const o of["right"]){const l=((i=t.state)==null?void 0:i[o])||{};P.robotByArm[o]={motors_enabled:l.motors_enabled,estop_active:l.estop_active};const c=B(`${o}ArmState`),u=l.motors_enabled,h=l.estop_active;e||(e=u!=null),s||(s=u===!0),r&&(r=u===!0),a&&(a=u!=null),n||(n=h===!0),c.children[1].textContent=u==null?"未连接":u?"已使能":"未使能",c.children[2].textContent=h==null?"--":h?"急停":"正常",c.dataset.state=h?"bad":u?"good":"neutral"}P.robotByArm.left={motors_enabled:null,estop_active:null},r&&(r=a),_n("robotOverallState",n?"急停":e?"在线":"未连接",n?"bad":e?"good":"bad"),Dl({anyConnected:e,anyEnabled:s,allEnabled:r,anyEstop:n}),Pa()}catch{P.robotByArm.right={motors_enabled:null,estop_active:null},P.robotByArm.left={motors_enabled:null,estop_active:null},_n("robotOverallState","离线","bad"),Dl({anyConnected:!1,anyEnabled:!1,allEnabled:!1,anyEstop:!1}),Pa()}}async function rc(){try{const[i,t]=await Promise.all([bc("right"),bc("left")]);P.linksByArm.right=i.links||[],P.linksByArm.left=t.links||[],dd()}catch{Vn("statusTcp","末端位置","读取失败","bad")}}function hd(){var t;const i="link6";return(t=P.linksByArm[P.arm])==null?void 0:t.find(e=>e.name===i&&e.position)}function dd(){const i=hd(),t=i==null?void 0:i.position;B("tcpX").textContent=be(t==null?void 0:t[0]),B("tcpY").textContent=be(t==null?void 0:t[1]),B("tcpZ").textContent=be(t==null?void 0:t[2]),ct==null||ct.setTcpFrame(i),Vn("statusTcp","末端位置",t?`${be(t[0],2)}, ${be(t[1],2)}, ${be(t[2],2)}`:"等待数据",t?"good":"neutral")}function ky(){const i=hd();if(!i){Ce("当前没有可用的末端位置数据","warn");return}Ga({...xn(),x:i.position[0],y:i.position[1],z:i.position[2]}),Ce(`已同步 ${an()}末端位置`)}function Pa(){var s;const i=B("jointTelemetry"),t=P.jointState,e=ec(),n=[];for(let r=1;r<=6;r+=1){const a=((s=t==null?void 0:t.name)==null?void 0:s.indexOf(`joint${r}`))??-1,l=(a>=0?Number(t.position[a]):NaN)*180/Math.PI,c=Number.isFinite(l)?Math.min(50,Math.abs(l)/3.6):0,u=l<0?"translateX(-100%)":"none",[h,d]=Rl[r-1];n.push(`
      <div class="joint-telemetry-row">
        <b>J${r}</b>
        <div class="joint-meter"><span style="width:${c}%;transform:${u}"></span></div>
        <output>${Number.isFinite(l)?`${l.toFixed(1)}°`:"--"}</output>
        <div class="joint-jog-keys">
          <button type="button" data-jog-joint="${r}" data-jog-direction="1" data-jog-key="${h}"
            title="关节 ${r} 正向微动" ${e?"":"disabled"}>${h.toUpperCase()}</button>
          <button type="button" data-jog-joint="${r}" data-jog-direction="-1" data-jog-key="${d}"
            title="关节 ${r} 反向微动" ${e?"":"disabled"}>${d.toUpperCase()}</button>
        </div>
      </div>
    `)}i.innerHTML=n.join(""),Ls.forEach(r=>Ll(r,!0)),B("jointStamp").textContent=t?"实时":"--"}async function ac(){try{const t=(await Ud(P.arm)).state==="closed";_n("gripperState",t?"已闭合":"已张开","good")}catch{_n("gripperState","未知","bad")}}async function fd(){var i;try{const[t,e]=await Promise.allSettled([uh(),Fd()]);if(t.status==="fulfilled"&&((i=t.value)!=null&&i.urdf_xyz_m)){P.visionTarget=t.value;const n=P.visionTarget.urdf_xyz_m;ct==null||ct.setVisionTarget(P.visionTarget),B("visionX").textContent=be(n[0]),B("visionY").textContent=be(n[1]),B("visionZ").textContent=be(n[2]),Vn("statusVision","视觉",`${be(n[0],2)}, ${be(n[1],2)}, ${be(n[2],2)}`,"good")}else Vn("statusVision","视觉","无目标","neutral");if(e.status==="fulfilled"){const n=e.value.objects||e.value.detections||[];ct==null||ct.setObjectMarkers(n),_n("cloudState","视觉在线","good")}}catch{Vn("statusVision","视觉","离线","bad"),_n("cloudState","未连接","bad")}}async function Oy(i){await Re("读取视觉目标",async()=>{const t=await uh();if(!(t!=null&&t.urdf_xyz_m))throw new Error((t==null?void 0:t.error)||"未找到有效视觉目标");if(P.visionTarget=t,ct.setVisionTarget(t),i){const[e,n,s]=t.urdf_xyz_m;Ga({...xn(),x:e,y:n,z:s})}return t})}async function By(){await Re("运动规划",async()=>{var t,e,n;P.lastDecisionError=null,Ns({pending:!0});const i=await jt("/api/plan",xn());return((t=i.plan)!=null&&t.platform_obstacles||(e=i.plan)!=null&&e.platform_obstacle)&&ct.setPlatformObstacle(i.plan.platform_obstacles||i.plan.platform_obstacle),cc((n=i.plan)==null?void 0:n.manual_collision),i.plan&&(P.lastPlanByArm[P.arm]=i.plan,Ns()),await Pi(),i},{onError:i=>{var s;const t=(s=i==null?void 0:i.payload)==null?void 0:s.failure;P.lastDecisionError=t||{title:i.message},Ns();const e=t!=null&&t.stage_label?`${t.stage_label}失败`:"规划失败",n=(t==null?void 0:t.title)||i.message;Vn("statusPlan",e,n,"bad")}})}function Ns(i={}){var g;const t=xn(),e=P.lastPlanByArm[P.arm],n=(e==null?void 0:e.grasp_orientation)||null,s=t.grasp_orientation_mode,r=!!(n&&Vy(n.mode,s)),a=r?n.mode:s,o=Qu[a]||Qu[t.grasp_orientation_mode],l=Array.isArray(n==null?void 0:n.rejected_candidates)?n.rejected_candidates.length:0,c=Number(n==null?void 0:n.candidate_index),u=r&&Number.isFinite(c)?Math.max(1,c):null,h=r?Math.max(u||1,l+1):3,d=zy({detail:o,orientation:n,plan:e,pose:t,selected:r,pending:i.pending,activeIndex:u,totalScan:h});P.lastDecisionError&&d.push({label:"失败",detail:P.lastDecisionError.stage_label||P.lastDecisionError.title||"未找到可行候选",state:"failed"});const p=`
    <div class="decision-title">
      <strong>${ee(o.title)}</strong>
      <span>${ee(r?"已确定":i.pending?"规划中":"预览")}</span>
    </div>
    <p>${ee(o.summary)}</p>
    <div class="decision-chain">
      ${d.map(x=>`
        <div class="decision-step" data-state="${x.state}">
          <b>${ee(x.label)}</b>
          <span>${ee(x.detail)}</span>
        </div>
      `).join("")}
    </div>
    ${r?`
      <div class="decision-meta">
        <span>候选 ${u??"--"}</span>
        <span>拒绝 ${l}</span>
        <span>${ee(((g=e==null?void 0:e.ompl)==null?void 0:g.planner_id)||"IK")}</span>
      </div>
    `:""}
  `;for(const x of["decisionPreview","activeDecisionPreview"]){const m=B(x);m&&(m.innerHTML=p)}_n("decisionState",r?"已确定":i.pending?"规划中":"预览",r?"good":i.pending?"warn":"neutral")}function zy({detail:i,orientation:t,plan:e,pose:n,selected:s,pending:r,activeIndex:a,totalScan:o}){var h,d;const l=Math.min(o,6),c=[],u=s&&String((e==null?void 0:e.mode)||"").includes("direct IK fallback");for(let p=1;p<=l;p+=1){const g=s&&a&&p<a,x=s&&a===p,f=x?"done":g?"failed":r&&p===1?"active":"idle",R=x?u?"failed":"done":g?"failed":"idle",C=x?i.candidateText(t):`IK ${be(n.ik_timeout,2)}s`,T=x?u?"OMPL失败，使用IK直达":`${((h=e==null?void 0:e.ompl)==null?void 0:h.planner_id)||"OMPL"} ${be(((d=e==null?void 0:e.ompl)==null?void 0:d.planning_time)??n.planning_time,1)}s`:g?"未通过":"等待IK通过";c.push({label:`${i.scanLabel}${p} IK`,detail:C,state:f}),c.push({label:`${i.scanLabel}${p} OMPL`,detail:T,state:R})}return c.push({label:s?"确定":r?"等待结果":"待确定",detail:s?`${i.title} · ${(e==null?void 0:e.mode)||"规划完成"}`:i.title,state:s?"done":r?"active":"idle"}),c}function sr(i){const t=[];for(const e of["roll","pitch","yaw"]){const n=Number(i==null?void 0:i[e]);Number.isFinite(n)&&t.push(`${e} ${be(n,2)}`)}return t.length?t.join(" / "):"候选姿态"}function Vy(i,t){return i===t?!0:i==="angled_grasp"&&t==="z_parallel_grasp"}async function Hy(){await Re("执行规划",async()=>{const i=await jt("/api/execute",{arm:P.arm});return await Pi(),i},{confirm:`即将让${an()}执行最后一次规划，确认工作区安全后继续。`,confirmTitle:"确认执行轨迹"})}async function nh(i){const t=["approach","grasp"].includes(i)?ic():xn(),n={approach:["接近目标","/api/approach",{pose:t,offset_z:wn("pickApproach",.1)}],lift:["抬起机械臂","/api/lift",{arm:P.arm,offset_z:wn("pickLift",.1)}],grasp:["抓取目标","/api/grasp",{pose:t}],place:["放置目标","/api/place",{pose:t}],gripper_open:["张开夹爪","/api/gripper",{arm:P.arm,action:"open"}],gripper_close:["闭合夹爪","/api/gripper",{arm:P.arm,action:"close"}]}[i];if(!n)return;const s=await Re(n[0],async()=>jt(n[1],n[2]),{confirm:`${n[0]}将驱动${an()}，确认周围无人员或障碍物。`});cc(La(s)),ac(),Pi()}async function Gy(){await Re("Piper 使能",()=>jt("/api/enable",{arm:"right",enabled:!0}),{confirm:"即将使能 Piper，确认急停可用且工作区安全。"}),es()}async function Wy(){await Re("取消使能",()=>jt("/api/enable",{arm:"right",enabled:!1})),es()}async function Xy(){await Re("复位急停",()=>jt("/api/reset_estop",{arm:"right"}),{confirm:"确认急停原因已经排除，然后复位 Piper 急停状态。"}),es()}async function $y(){const i=await Re("Piper 回零",()=>{var t;return jt("/api/home_zero",{arm:"right",avoid_platform:((t=B("avoidPlatform"))==null?void 0:t.checked)!==!1,collision_boxes:vd(),velocity_scaling:Number(B("velocityScaling").value),acceleration_scaling:Number(B("accelerationScaling").value),...Wa()})},{confirm:"将让 Piper 回到零位，请确认工作区安全。",confirmTitle:"确认 Piper 回零"});cc(La(i)),Pi()}async function qy(){if(await Ha("将立即向 Piper 发送停止命令。","紧急停止","立即停止"))try{await jt("/api/estop",{arm:"right",active:!0}),Ce("已发送 Piper 停止命令","warn",5e3),es()}catch(i){Ce(`急停命令发送失败：${i.message}`,"bad",6e3)}}async function pd(){try{const i=await kd();sc(i.extrinsic||{}),B("extrinsicStatus").textContent=`已读取 ${i.path||"camera_extrinsic.json"}`}catch(i){B("extrinsicStatus").textContent=`读取失败：${i.message}`}}async function jy(){await Re("保存相机外参",async()=>{const i=await jt("/api/camera_extrinsic",Gs());return sc(i.extrinsic||Gs()),B("extrinsicStatus").textContent=`已保存 ${i.path||"camera_extrinsic.json"}`,i},{confirm:"该配置将写入相机外参文件，并影响视觉目标与点云坐标。"})}async function oc(){try{const i=await ct.loadScenePointCloud();_n("cloudState",`${i.count} 点`,"good")}catch{_n("cloudState","暂无点云","neutral")}}function Yy(){P.cloudVisible=!P.cloudVisible,localStorage.setItem("piper.cloudVisible",String(P.cloudVisible)),ct.setCloudVisible(P.cloudVisible),xd()}async function Ky(){await Re("保存场景点云",async()=>{const i=await jt("/api/scene_pointcloud/save",{});return await oc(),i})}async function Zy(){await Re("按当前外参重建点云",async()=>{const i=await jt("/api/camera_extrinsic",Gs());sc(i.extrinsic||Gs());const t=await jt("/api/scene_pointcloud/save",{});return await oc(),B("extrinsicStatus").textContent=`已保存 ${i.path||"camera_extrinsic.json"}`,t},{confirm:"将保存当前相机外参，并让视觉服务按该外参重新保存静态场景点云。",confirmTitle:"确认重建点云"})}async function md(i){try{const e=(await $d()).platform_obstacle;return cb(e)?(ct==null||ct.setPlatformObstacle(e),P.platformObstacleVisible=!0,P.platformObstacleApplied=!0,B("platformState").textContent="避障区已显示",ji(),i&&Ce("已显示平台避障区"),e):(ct==null||ct.setPlatformObstacle(null),P.platformObstacleVisible=!1,P.platformObstacleApplied=!1,B("platformState").textContent="避障区未加载",ji(),i&&Ce("当前没有已应用的避障区","warn"),null)}catch(t){return B("platformState").textContent=`读取失败：${t.message}`,ji(),null}}async function Jy(){if(P.platformObstacleVisible){ct==null||ct.setPlatformObstacle(null),P.platformObstacleVisible=!1,B("platformState").textContent=P.platformObstacleApplied?"避障区已隐藏，规划场景仍保留":"避障区已隐藏",ji();return}await md(!0)}async function Qy(){if(P.platformObstacleApplied){await Re("取消平台避障区",async()=>{const i=await jt("/api/platform_obstacle/clear",{});return ct==null||ct.setPlatformObstacle(null),P.platformObstacleVisible=!1,P.platformObstacleApplied=!1,B("platformState").textContent="避障区已从规划场景移除",ji(),i},{confirm:"将从 MoveIt 规划场景移除当前平台避障区，后续规划不再使用该避障区。",confirmTitle:"确认取消避障区"});return}await Re("应用平台避障区",async()=>{const i=await jt("/api/platform_obstacle/apply",{});return ct.setPlatformObstacle(i.platform_obstacle),P.platformObstacleVisible=!0,P.platformObstacleApplied=!0,B("platformState").textContent="避障区已应用到规划场景",ji(),i})}async function tb(i=!1){try{const t=await jd();P.workspaceBoundsByArm={right:qi(t.right,"right"),left:qi(t.left,"left")},lc(),ct==null||ct.setWorkspaceBounds(Zi()),_d("已读取"),i&&Ce("已读取工作区边界")}catch(t){B("workspaceBoundsState").textContent=`读取失败：${t.message}`}}function eb(i=P.arm){return i==="left"?{enabled:!1,min:[-.35,-.65,.2],max:[.8,.35,1.55]}:{enabled:!1,min:[-.8,-.65,.2],max:[.35,.35,1.55]}}function Zi(){return qi(P.workspaceBoundsByArm[P.arm],P.arm)}function qi(i={},t=P.arm){var s;const e=((s=P.workspaceBoundsByArm)==null?void 0:s[t])||eb(t),n=(r,a)=>{const o=Array.isArray(i[r])?i[r]:a;return[0,1,2].map(l=>{const c=Number(o==null?void 0:o[l]);return Number.isFinite(c)?c:a[l]})};return{enabled:!!i.enabled,min:n("min",e.min),max:n("max",e.max)}}function lc(){const i=Zi(),t=B("workspaceBoundsFields");t&&(t.innerHTML=`
    <label class="workspace-enable"><input id="workspaceBoundsEnabled" type="checkbox" ${i.enabled?"checked":""}><span>启用${an()}边界拒绝</span></label>
    <div class="compact-fields workspace-bounds-grid">
      ${ih("min",i.min,["X min","Y min","Z min"])}
      ${ih("max",i.max,["X max","Y max","Z max"])}
    </div>
  `)}function ih(i,t,e){return e.map((n,s)=>`
    <label>${n}<input data-workspace-bound="${i}" data-workspace-axis="${s}"
      type="number" step="0.001" value="${Number(t[s]??0)}" /><span>m</span></label>
  `).join("")}function gd(){var t;const i=e=>[0,1,2].map(n=>{var r,a;const s=Number((a=(r=B("workspaceBoundsFields"))==null?void 0:r.querySelector(`[data-workspace-bound="${e}"][data-workspace-axis="${n}"]`))==null?void 0:a.value);return Number.isFinite(s)?s:0});return{enabled:((t=B("workspaceBoundsEnabled"))==null?void 0:t.checked)===!0,min:i("min"),max:i("max")}}function sh(){P.workspaceBoundsByArm[P.arm]=qi(gd(),P.arm),ct==null||ct.setWorkspaceBounds(Zi()),B("workspaceBoundsState").textContent=`${an()}工作区边界已修改，保存后生效`}async function nb(){P.workspaceBoundsByArm[P.arm]=qi(gd(),P.arm),await Re("保存工作区边界",async()=>{const i=await Yd({arm:P.arm,...Zi()});return P.workspaceBoundsByArm={right:qi(i.right||P.workspaceBoundsByArm.right,"right"),left:qi(i.left||P.workspaceBoundsByArm.left,"left")},lc(),ct==null||ct.setWorkspaceBounds(Zi()),_d("已保存"),i})}function _d(i=""){const e=Zi().enabled?`${i?`${i} · `:""}${an()}工作区已启用`:`${i?`${i} · `:""}${an()}工作区未启用`;B("workspaceBoundsState").textContent=e}async function ib(i=!1){var t,e;try{const n=await qd();P.manualCollision.boxes=n.boxes||[],P.manualCollision.applied=!!((t=n.summary)!=null&&t.applied&&!((e=n.summary)!=null&&e.cleared)),ns(),ct==null||ct.setManualCollisionBoxes(P.manualCollision.boxes),Fn(),Hn(),B("manualCollisionState").textContent=P.manualCollision.boxes.length?`已读取 ${P.manualCollision.boxes.length} 个碰撞箱`:"尚未添加手动碰撞箱",i&&Ce("已读取手动碰撞箱")}catch(n){B("manualCollisionState").textContent=`读取失败：${n.message}`,Hn()}}function sb(){const i=xn(),t=P.manualCollision.boxes.length+1;P.manualCollision.boxes.push({id:`box_${t}`,name:`碰撞箱 ${t}`,enabled:!0,center:[Number(i.x),Number(i.y),Number(i.z)],dimensions:[.18,.18,.18],rpy:[0,0,0]}),P.manualCollision.applied=!1,ns(),ct==null||ct.setManualCollisionBoxes(P.manualCollision.boxes),Fn(),Hn(),B("manualCollisionState").textContent="已添加碰撞箱，下一次规划/控制自动生效"}function ns(){const i=B("manualCollisionFields"),t=P.manualCollision.boxes||[];if(!t.length){kn("manualCollisionFields","没有手动碰撞箱"),Fn();return}i.innerHTML=t.map((e,n)=>`
    <div class="collision-box-row" data-collision-index="${n}">
      <div class="collision-box-header">
        <input data-collision-field="name" type="text" value="${ee(e.name||`碰撞箱 ${n+1}`)}" aria-label="碰撞箱名称">
        <label><input data-collision-field="enabled" type="checkbox" ${e.enabled===!1?"":"checked"}><span>启用</span></label>
        <button class="icon-button" type="button" data-collision-delete="${n}" aria-label="删除碰撞箱" title="删除碰撞箱">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
      <div class="compact-fields collision-fields">
        ${zo(n,e,"center",["X","Y","Z"],"m",.001)}
        ${zo(n,e,"dimensions",["长","宽","高"],"m",.001)}
        ${zo(n,e,"rpy",["Roll","Pitch","Yaw"],"rad",.001)}
      </div>
    </div>
  `).join(""),Fn(),vr()}function zo(i,t,e,n,s,r){const a=Array.isArray(t[e])?t[e]:[0,0,0];return n.map((o,l)=>`
    <label>${o}<input data-collision-vector="${e}" data-collision-axis="${l}" data-collision-index="${i}"
      type="number" step="${r}" value="${Number(a[l]??0)}" /><span>${s}</span></label>
  `).join("")}function rh(){P.manualCollision.boxes=qs(),P.manualCollision.applied=!1,ct==null||ct.setManualCollisionBoxes(P.manualCollision.boxes),Hn(),B("manualCollisionState").textContent="配置已修改，下一次规划/控制自动同步到 MoveIt"}function rb(i){const t=i.target.closest("[data-collision-delete]");t&&(P.manualCollision.boxes=qs(),P.manualCollision.boxes.splice(Number(t.dataset.collisionDelete),1),P.manualCollision.applied=!1,ns(),ct==null||ct.setManualCollisionBoxes(P.manualCollision.boxes),Fn(),Hn(),B("manualCollisionState").textContent="已删除碰撞箱，下一次规划/控制自动更新 MoveIt")}function qs(){return Array.from(document.querySelectorAll(".collision-box-row")).map((i,t)=>{var r,a,o;const e=Number(i.dataset.collisionIndex),n=P.manualCollision.boxes[e]||{},s=l=>[0,1,2].map(c=>{const u=i.querySelector(`[data-collision-vector="${l}"][data-collision-axis="${c}"]`),h=Number(u==null?void 0:u.value);return Number.isFinite(h)?h:0});return{id:n.id||`box_${t+1}`,name:((a=(r=i.querySelector('[data-collision-field="name"]'))==null?void 0:r.value)==null?void 0:a.trim())||`碰撞箱 ${t+1}`,enabled:((o=i.querySelector('[data-collision-field="enabled"]'))==null?void 0:o.checked)!==!1,center:s("center"),dimensions:s("dimensions").map(l=>Math.max(.005,Math.abs(l))),rpy:s("rpy")}})}function vd(){return document.querySelector(".collision-box-row")&&(P.manualCollision.boxes=qs()),P.manualCollision.boxes||[]}async function ab(){P.manualCollision.boxes=qs(),await Re("保存手动碰撞箱",async()=>{const i=await Kd({boxes:P.manualCollision.boxes});return P.manualCollision.boxes=i.boxes||[],P.manualCollision.applied=!1,ns(),ct==null||ct.setManualCollisionBoxes(P.manualCollision.boxes),Fn(),Hn(),B("manualCollisionState").textContent=`已保存 ${P.manualCollision.boxes.length} 个碰撞箱，下一次规划/控制自动生效`,i})}async function ob(){P.manualCollision.boxes=qs(),await Re("应用手动碰撞箱",async()=>{const i=await Zd({boxes:P.manualCollision.boxes}),t=i.manual_collision||{};return P.manualCollision.boxes=t.boxes||P.manualCollision.boxes,P.manualCollision.applied=Number(t.count||0)>0,ns(),ct==null||ct.setManualCollisionBoxes(P.manualCollision.boxes),Fn(),Hn(),B("manualCollisionState").textContent=`已应用 ${t.count??0} 个启用碰撞箱到 MoveIt`,i})}async function lb(){await Re("清除手动碰撞箱",async()=>{const i=await Jd(),t=i.manual_collision||{};return P.manualCollision.boxes=t.boxes||P.manualCollision.boxes,P.manualCollision.applied=!1,ns(),ct==null||ct.setManualCollisionBoxes(P.manualCollision.boxes),Fn(),Hn(),B("manualCollisionState").textContent="已从 MoveIt 移除手动碰撞箱，网页配置仍保留",i},{confirm:"将从 MoveIt PlanningScene 移除手动碰撞箱，但保留网页配置。",confirmTitle:"确认清除手动碰撞箱"})}function Hn(){const t=(P.manualCollision.boxes||[]).filter(e=>e.enabled!==!1).length;B("applyCollisionBoxesButton").querySelector("span").textContent=P.manualCollision.applied?`已应用 ${t} 个`:"提前应用",ii("applyCollisionBoxesButton",P.manualCollision.applied?"active-good":t?"ready-warning":"inactive",P.manualCollision.applied),ii("clearCollisionBoxesButton",P.manualCollision.applied?"ready-warning":"inactive",!1)}function cc(i){i&&(P.manualCollision.boxes=i.boxes||P.manualCollision.boxes,P.manualCollision.applied=!!(i.applied&&Number(i.count||0)>0),ns(),ct==null||ct.setManualCollisionBoxes(P.manualCollision.boxes),Fn(),Hn(),B("manualCollisionState").textContent=P.manualCollision.applied?`已自动同步 ${i.count??0} 个碰撞箱到 MoveIt`:"当前没有启用的碰撞箱")}function La(i){if(!i||typeof i!="object")return null;if(i.manual_collision)return i.manual_collision;for(const t of["plan","result","results","approach","descend","lift"]){const e=La(i[t]);if(e)return e}for(const t of Object.values(i))if(t&&typeof t=="object"&&t!==i){const e=La(t);if(e)return e}return null}function Dl({anyConnected:i,anyEnabled:t,allEnabled:e,anyEstop:n}){ii("enableButton",e?"active-good":"ready-good",e),B("enableButton").querySelector("span").textContent=e?"已使能":"使能",ii("disableButton",t?"ready-danger":"inactive",!1),B("disableButton").querySelector("span").textContent=t?"取消使能":"未使能",ii("resetEstopButton",n?"ready-warning":"inactive",n),B("resetEstopButton").querySelector("span").textContent=n?"复位急停":"急停正常",ii("homeButton",i&&e&&!n?"ready-neutral":"inactive",!1),B("homeButton").querySelector("span").textContent="回零"}function xd(){const i=B("toggleCloudButton");i.querySelector("span").textContent=P.cloudVisible?"隐藏点云":"显示点云",ii("toggleCloudButton",P.cloudVisible?"active-neutral":"inactive",P.cloudVisible)}function ji(){const i=B("loadPlatformButton");i.querySelector("span").textContent=P.platformObstacleVisible?"隐藏避障区":"显示避障区",ii("loadPlatformButton",P.platformObstacleVisible?"active-neutral":"ready-neutral",P.platformObstacleVisible);const t=B("applyPlatformButton");t.querySelector("span").textContent=P.platformObstacleApplied?"取消避障区":"应用避障区",ii("applyPlatformButton",P.platformObstacleApplied?"active-warning":"ready-warning",P.platformObstacleApplied)}function ii(i,t,e){const n=B(i);n.dataset.mode=t,n.setAttribute("aria-pressed",String(!!e))}function cb(i){return i?Array.isArray(i)?i.length>0:Array.isArray(i.platform_obstacles)?i.platform_obstacles.length>0:!!(i.center||i.dimensions):!1}async function uc(){var i;B("jointConfigStatus").textContent=`正在读取${an()}配置...`;try{const t=await Vo(P.arm);P.jointConfig=t,hc(t),yd(t),B("jointConfigStatus").textContent=`已读取 ${((i=t.files)==null?void 0:i.bridge)||an()}`}catch(t){B("jointConfigStatus").textContent=`读取失败：${t.message}`}}async function ub(){(await Promise.allSettled([Vo("right"),Vo("left")])).forEach(t=>{t.status==="fulfilled"&&hc(t.value)})}function hc(i){const t=(i==null?void 0:i.arm)==="left"?"left":"right",e=(i==null?void 0:i.joint_names)||[],n={};e.forEach((s,r)=>{var o;const a=(o=i==null?void 0:i.joint_limits_rad)==null?void 0:o[r];n[s]=a!=null&&a.enabled&&Number.isFinite(Number(a.lower))&&Number.isFinite(Number(a.upper))?{lower:Number(a.lower),upper:Number(a.upper)}:{lower:-1e6,upper:1e6}}),P.jointLimitsByArm[t]=n,ct==null||ct.setJointLimits({...P.jointLimitsByArm.right,...P.jointLimitsByArm.left})}function yd(i){const t=i.joint_names||[],e=B("jointConfigFields");e.innerHTML=`
    <div class="joint-config-header"><span>关节</span><span>零位</span><span>限位</span><span>下限</span><span>上限</span></div>
    ${t.map((n,s)=>{var r,a,o,l;return`
      <div class="joint-config-row">
        <b>J${s+1}</b>
        <input id="cfg_offset_${s}" type="number" step="1" value="${Number(((r=i.zero_offsets)==null?void 0:r[s])||0)}" aria-label="${ee(n)}零位">
        <input id="cfg_limit_${s}" type="checkbox" ${(a=i.limit_enabled)!=null&&a[s]?"checked":""} aria-label="${ee(n)}启用限位">
        <input id="cfg_min_${s}" type="number" step="1" value="${Number(((o=i.raw_limit_a)==null?void 0:o[s])||0)}" aria-label="${ee(n)}下限">
        <input id="cfg_max_${s}" type="number" step="1" value="${Number(((l=i.raw_limit_b)==null?void 0:l[s])||0)}" aria-label="${ee(n)}上限">
      </div>
    `}).join("")}
  `}async function hb(){var e;const i=((e=P.jointConfig)==null?void 0:e.joint_names)||[];if(!i.length){Ce("请先读取关节配置","warn");return}const t={arm:P.arm,zero_offsets:[],limit_enabled:[],raw_limit_a:[],raw_limit_b:[]};i.forEach((n,s)=>{t.zero_offsets.push(Number.parseInt(B(`cfg_offset_${s}`).value,10)),t.limit_enabled.push(B(`cfg_limit_${s}`).checked),t.raw_limit_a.push(Number.parseInt(B(`cfg_min_${s}`).value,10)),t.raw_limit_b.push(Number.parseInt(B(`cfg_max_${s}`).value,10))}),await Re("保存关节配置",async()=>{const n=await jt("/api/joint_config",t);return P.jointConfig=n,hc(n),yd(n),n},{confirm:`将覆盖${an()}的编码器零位与原始限位配置。该操作会影响实际运动范围。`,confirmTitle:"确认写入关节配置"})}async function dc(){B("kinematicsStatus").textContent="正在读取求解器配置...";try{const i=await Od();P.kinematics=i,bd(i)}catch(i){B("kinematicsStatus").textContent=`读取失败：${i.message}`}}function db(i,t){if(!i)return"--";const e=t.find(n=>n.id===i.solver_id||n.plugin===i.solver_plugin);return e?e.label:i.solver_plugin||i.solver_id||"--"}function bd(i){var a;const t=i.options||[],e=B("ikSolverSelect"),n=i.active_solver_id||"kdl",s=t.some(o=>o.id===n);if(e.innerHTML=[...!s&&n?[{id:n,label:n==="mixed"?"Piper 配置不一致":n,available:!1,plugin:""}]:[],...t].map(o=>`
    <option value="${ee(o.id)}" ${o.available?"":"disabled"} ${o.id===n?"selected":""}>
      ${ee(o.label)}${o.available?"":"（未安装）"}
    </option>
  `).join(""),n!=="mixed"&&t.some(o=>o.id===n&&o.available))e.value=n;else{const o=t.find(l=>l.available);o&&(e.value=o.id)}const r=(a=i.groups)==null?void 0:a.arm;B("ikRightSolver").textContent=`Piper ${db(r,t)}`,B("ikLeftSolver").textContent="",B("kinematicsStatus").textContent=`配置文件：${i.path||"--"}。保存后需重启 MoveIt 才会生效。`}async function fb(){var n,s;const i=B("ikSolverSelect").value;if(!i){Ce("请选择可用的 IK 求解器","warn");return}const t=(s=(n=P.kinematics)==null?void 0:n.options)==null?void 0:s.find(r=>r.id===i),e=(t==null?void 0:t.label)||i;await Re("保存 IK 求解器",async()=>{const r=await jt("/api/kinematics",{solver_id:i,target:"right"});return P.kinematics=r,bd(r),r},{confirm:`将 Piper MoveIt IK 求解器配置切换为 ${e}。已运行的 MoveIt 不会动态切换，保存后需要重启 MoveIt。`,confirmTitle:"确认切换 IK 求解器",success:`IK 求解器已写入：${e}，重启 MoveIt 后生效`})}function pb(){try{return Ji(JSON.parse(localStorage.getItem(ad)||"{}"))}catch{return{...Rn}}}function Ji(i={}){return{planner_id:String(i.planner_id||Rn.planner_id),planning_time:ti(i.planning_time,Rn.planning_time),attempts:Math.max(1,Math.round(ti(i.attempts,Rn.attempts))),ik_timeout:ti(i.ik_timeout,Rn.ik_timeout)}}function ti(i,t){const e=Number(i);return Number.isFinite(e)?e:t}async function js(){var i;B("omplConfigStatus").textContent="正在读取 OMPL 配置...";try{const t=await Bd();P.ompl.options=t;const e=((i=t.recommended)==null?void 0:i.config)||t.defaults||Rn,n=new Set((t.planners||[]).map(r=>r.planner_id)),s=Ji(P.ompl.config);P.ompl.config=n.has(s.planner_id)?s:Ji(e),Xa(),mb()}catch(t){B("omplConfigStatus").textContent=`读取失败：${t.message}`,kn("omplPlannerDetails","OMPL 配置不可用")}}function mb(){var a;const i=P.ompl.options||{},t=i.planners||[],e=i.presets||[],n=B("omplPresetSelect");n.innerHTML=e.map(o=>`
    <option value="${ee(o.id)}">
      ${ee(o.custom?`自定义 · ${o.label}`:o.label)}
    </option>
  `).join("");const s=new Set(e.map(o=>o.id));P.ompl.selectedPresetId&&s.has(P.ompl.selectedPresetId)?n.value=P.ompl.selectedPresetId:(a=i.recommended)!=null&&a.id&&(n.value=i.recommended.id);const r=B("omplPlannerSelect");r.innerHTML=t.map(o=>`
    <option value="${ee(o.planner_id)}">
      ${ee(o.label||o.planner_id)}
    </option>
  `).join(""),t.some(o=>o.planner_id===P.ompl.config.planner_id)&&(r.value=P.ompl.config.planner_id),Md(P.ompl.config),xb(i.recommended),pc(),B("omplConfigStatus").textContent=`运行时生效 · 配置文件：${i.path||"--"}`}function Md(i){const t=Ji(i);B("omplPlannerSelect").value=t.planner_id,B("omplPlanningTime").value=t.planning_time,B("omplAttempts").value=t.attempts,B("omplIkTimeout").value=t.ik_timeout}function Wa(){const i=B("omplPlannerSelect");if(!i)return{...P.ompl.config};const t=Ji({planner_id:i.value||P.ompl.config.planner_id,planning_time:B("omplPlanningTime").value,attempts:B("omplAttempts").value,ik_timeout:B("omplIkTimeout").value});return P.ompl.config=t,t}function Xa(){localStorage.setItem(ad,JSON.stringify(P.ompl.config))}function ha(){P.ompl.config=Wa(),Xa(),pc();const i=fc(P.ompl.config.planner_id);B("omplConfigStatus").textContent=`下一次规划使用 ${(i==null?void 0:i.label)||P.ompl.config.planner_id} · ${P.ompl.config.planning_time}s / ${P.ompl.config.attempts} 次`}function gb(){var e,n;const i=B("omplPresetSelect").value,t=(((e=P.ompl.options)==null?void 0:e.presets)||[]).find(s=>s.id===i)||((n=P.ompl.options)==null?void 0:n.recommended);P.ompl.selectedPresetId=(t==null?void 0:t.id)||null,P.ompl.config=Ji((t==null?void 0:t.config)||Rn),Md(P.ompl.config),Xa(),pc(),Ce(`已应用 OMPL 配置：${(t==null?void 0:t.label)||"推荐配置"}`),B("omplConfigStatus").textContent=`已应用 ${(t==null?void 0:t.label)||"推荐配置"}，下一次规划生效`}async function _b(){const i=Sd("omplPresetName"),t=Wa(),e=await Re("保存规划预设",()=>hh({name:i,source:"ompl",config:t}),{quiet:!0,success:"规划预设已保存"});if(!e)return;const n=Ed(e.presets,i,t);P.ompl.selectedPresetId=(n==null?void 0:n.id)||null,await js(),B("omplConfigStatus").textContent=`已保存到预设库：${(n==null?void 0:n.label)||i}`,Ce(`已保存规划预设：${(n==null?void 0:n.label)||i}`)}async function vb(){var n;const i=B("omplPresetSelect").value,t=(((n=P.ompl.options)==null?void 0:n.presets)||[]).find(s=>s.id===i);if(!(t!=null&&t.custom)){Ce("只能删除自定义预设","warn");return}!await Ha(`删除自定义预设「${t.label}」？`,"删除规划预设","删除")||!await Re("删除规划预设",()=>zd({id:t.id}),{quiet:!0,success:"规划预设已删除"})||(P.ompl.selectedPresetId=null,await js(),Ce(`已删除规划预设：${t.label}`))}function Sd(i){const t=B(i),e=String((t==null?void 0:t.value)||"").trim();if(e)return e;const n=`规划预设 ${new Date().toLocaleString("zh-CN",{hour12:!1})}`;return t&&(t.value=n),n}function Ed(i=[],t,e){const n=i.find(s=>s.name===t||s.label===t);return n||i.find(s=>{const r=s.config||{};return r.planner_id===e.planner_id&&Number(r.planning_time)===Number(e.planning_time)&&Number(r.attempts)===Number(e.attempts)&&Number(r.ik_timeout)===Number(e.ik_timeout)})||null}function fc(i){var t;return(((t=P.ompl.options)==null?void 0:t.planners)||[]).find(e=>e.planner_id===i)||null}function xb(i){const t=B("omplRecommended"),e=(i==null?void 0:i.config)||Rn,n=fc(e.planner_id);t.innerHTML=`
    <div class="ompl-recommendation-main">
      <strong>${ee((i==null?void 0:i.label)||"推荐配置")}</strong>
      <span>${ee((n==null?void 0:n.label)||e.planner_id)}</span>
    </div>
    <div class="ompl-config-chips">
      <span>规划 ${be(e.planning_time,1)}s</span>
      <span>尝试 ${Number(e.attempts)} 次</span>
      <span>IK ${be(e.ik_timeout,1)}s</span>
    </div>
    <p>${ee((i==null?void 0:i.description)||"用于快速调试的默认配置。")}</p>
  `}function pc(){const i=fc(P.ompl.config.planner_id),t=B("omplPlannerDetails");if(!i){kn("omplPlannerDetails","请选择规划器");return}const e=Object.entries(i.config||{});t.innerHTML=`
    <div class="ompl-detail-row"><b>planner_id</b><span>${ee(i.planner_id)}</span></div>
    <div class="ompl-detail-row"><b>type</b><span>${ee(i.type||"--")}</span></div>
    <div class="ompl-detail-row"><b>groups</b><span>${ee((i.groups||[]).join(", ")||"--")}</span></div>
    ${e.map(([n,s])=>`
      <div class="ompl-detail-row"><b>${ee(n)}</b><span>${ee(String(s))}</span></div>
    `).join("")}
  `}async function xr(i=!1){const t=B("benchmarkStatus");t&&P.activePanel==="benchmark"&&(t.textContent="正在读取跑分配置...");try{const e=await Vd(P.arm);P.benchmark.options=e,yb(e),Fn(),Td(),Ni(),is(),li(),t&&i&&(t.textContent="跑分配置已读取")}catch(e){t&&(t.textContent=`跑分配置读取失败：${e.message}`),kn("benchmarkPlanners","规划器配置不可用")}}function yb(i={}){const t=Number(i.max_samples||120);for(const n of["benchmarkBoxCount","benchmarkEdgeCount","benchmarkRandomCount"]){const s=B(n);s&&Number.isFinite(t)&&(s.max=String(t))}if(P.benchmark.defaultsApplied)return;const e=i.defaults||{};vi("benchmarkBoxCount",e.box_top_count),vi("benchmarkBoxOffsetCm",e.box_top_offset_cm),vi("benchmarkEdgeCount",e.edge_count),vi("benchmarkEdgeDistanceCm",e.edge_distance_cm),vi("benchmarkRandomCount",e.random_count),vi("benchmarkPlanningTime",e.planning_time),vi("benchmarkAttempts",e.attempts),vi("benchmarkIkTimeout",e.ik_timeout),P.benchmark.defaultsApplied=!0}function vi(i,t){const e=B(i),n=Number(t);e&&Number.isFinite(n)&&(e.value=String(t))}function Fn(){var a,o;const i=B("benchmarkCollisionBox");if(!i)return;const t=i.value,e=(P.manualCollision.boxes||[]).filter(l=>l.enabled!==!1),n=Array.isArray((a=P.benchmark.options)==null?void 0:a.collision_boxes)?P.benchmark.options.collision_boxes:[],s=e.length?e:n;if(!s.length){i.innerHTML='<option value="">没有启用的碰撞箱</option>',i.disabled=!0;const l=B("benchmarkBoxCount");l&&(l.value="0");return}i.disabled=!1,i.innerHTML=s.map((l,c)=>{const u=l.id||l.name||`box_${c+1}`,h=l.name||l.id||`碰撞箱 ${c+1}`;return`<option value="${ee(u)}">${ee(h)}</option>`}).join("");const r=new Set(s.map((l,c)=>String(l.id||l.name||`box_${c+1}`)));i.value=r.has(t)?t:((o=i.options[0])==null?void 0:o.value)||""}function Td(){var r,a;const i=B("benchmarkPlanners");if(!i)return;const t=((r=P.benchmark.options)==null?void 0:r.planners)||((a=P.ompl.options)==null?void 0:a.planners)||[];if(!t.length){kn("benchmarkPlanners","未读取到适用于当前手臂的规划器");return}let e=new Set(P.benchmark.selectedPlanners);e.size||(e=new Set([P.ompl.config.planner_id]));const n=t.filter(o=>e.has(o.planner_id)).map(o=>o.planner_id);P.benchmark.selectedPlanners=n.length?n:[t[0].planner_id];const s=new Set(P.benchmark.selectedPlanners);i.innerHTML=t.map(o=>`
    <label class="planner-option">
      <input type="checkbox" value="${ee(o.planner_id)}" ${s.has(o.planner_id)?"checked":""}>
      <span>
        <b>${ee(o.label||o.planner_id)}</b>
        <small>${ee(o.planner_id)}</small>
      </span>
    </label>
  `).join("")}function yr(){var n,s,r,a;const i=B("benchmarkPlanners"),t=Array.from((i==null?void 0:i.querySelectorAll('input[type="checkbox"]'))||[]);if(t.length)return P.benchmark.selectedPlanners=t.filter(o=>o.checked).map(o=>o.value),[...P.benchmark.selectedPlanners];if(P.benchmark.selectedPlanners.length)return[...P.benchmark.selectedPlanners];const e=((n=P.ompl.config)==null?void 0:n.planner_id)||((a=(r=(s=P.benchmark.options)==null?void 0:s.planners)==null?void 0:r[0])==null?void 0:a.planner_id);return e?[e]:[]}function wd(){var i,t;return yr().length||((t=(i=P.benchmark.result)==null?void 0:i.planners)==null?void 0:t.length)||0}function mc(){var r,a,o,l,c,u,h;const i=xn();document.querySelector(".collision-box-row")&&(P.manualCollision.boxes=qs());const t=(r=B("benchmarkSeed"))==null?void 0:r.value,e=Number(t),n={...i,avoid_collisions:((a=B("avoidPlatform"))==null?void 0:a.checked)!==!1,box_top_count:Ds("benchmarkBoxCount",0),box_top_offset_cm:ti((o=B("benchmarkBoxOffsetCm"))==null?void 0:o.value,5),edge_count:Ds("benchmarkEdgeCount",0),edge_distance_cm:ti((l=B("benchmarkEdgeDistanceCm"))==null?void 0:l.value,5),random_count:Ds("benchmarkRandomCount",0),planning_time:ti((c=B("benchmarkPlanningTime"))==null?void 0:c.value,Rn.planning_time),attempts:Math.max(1,Math.round(ti((u=B("benchmarkAttempts"))==null?void 0:u.value,Rn.attempts))),ik_timeout:ti((h=B("benchmarkIkTimeout"))==null?void 0:h.value,Rn.ik_timeout),collision_boxes:P.manualCollision.boxes||[],planners:yr()},s=B("benchmarkCollisionBox");return s!=null&&s.disabled?n.box_top_count=0:s!=null&&s.value&&(n.collision_box_id=s.value),t!==""&&Number.isFinite(e)&&(n.seed=Math.max(1,Math.round(e))),n}function bb(i){var s,r;const t=yr();let e=t[0]||((s=P.ompl.config)==null?void 0:s.planner_id)||Rn.planner_id;const n=Object.values(((r=P.benchmark.result)==null?void 0:r.summary)||{}).filter(a=>!t.length||t.includes(a.planner_id));return n.length&&(n.sort((a,o)=>{const l=Number(o.success_rate||0)-Number(a.success_rate||0);return l||Number(a.mean_elapsed_ms||1/0)-Number(o.mean_elapsed_ms||1/0)}),e=n[0].planner_id||e),Ji({planner_id:e,planning_time:i.planning_time,attempts:i.attempts,ik_timeout:i.ik_timeout})}async function Mb(){const i=Sd("benchmarkPresetName"),t=mc(),e=bb(t),n=await Re("保存跑分配置",()=>hh({name:i,source:"benchmark",config:e}),{quiet:!0,success:"跑分配置已保存"});if(!n)return;const s=Ed(n.presets,i,e);P.ompl.config=e,P.ompl.selectedPresetId=(s==null?void 0:s.id)||null,Xa(),await js(),B("benchmarkStatus").textContent=`已保存到规划预设库：${(s==null?void 0:s.label)||i}`,Ce(`已保存跑分配置：${(s==null?void 0:s.label)||i}`)}async function Sb(){if(!P.benchmark.result){B("benchmarkStatus").textContent="没有可导出的跑分结果",Ce("请先完成一次跑分","warn");return}const i={arm:P.arm,...P.benchmark.result},t=await Re("导出跑分 CSV",()=>Xd({result:i}),{quiet:!0,success:"跑分 CSV 已导出"});t&&(Eb(t),B("benchmarkStatus").textContent=`CSV 已保存：${t.path}`,Ce("跑分 CSV 已导出"))}function Eb(i){if(!(i!=null&&i.csv))return;const t=new Blob([i.csv],{type:"text/csv;charset=utf-8"}),e=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download=(i.path||"piper_benchmark.csv").split("/").pop()||"piper_benchmark.csv",document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(e)}function Ds(i,t){var e;return Math.max(0,Math.round(ti((e=B(i))==null?void 0:e.value,t)))}function Tb(){return Ds("benchmarkBoxCount",0)+Ds("benchmarkEdgeCount",0)+Ds("benchmarkRandomCount",0)}async function wb(){P.benchmark.options||await xr(!1);const i=mc(),t=await Re("生成跑分测试点",()=>Gd(i),{quiet:!0,success:"测试点已生成"});t&&(P.benchmark.options={...P.benchmark.options,...t},P.benchmark.samples=t.samples||[],P.benchmark.selectedSampleId=null,P.benchmark.result=null,P.benchmark.progress=null,t.seed&&B("benchmarkSeed")&&(B("benchmarkSeed").value=t.seed),ct==null||ct.setBenchmarkSamples(P.benchmark.samples),Fn(),Td(),Ni(),is(),li(),Li(),B("benchmarkStatus").textContent=`已生成 ${P.benchmark.samples.length} 个测试点，种子 ${t.seed??"--"}`,Ce(`已生成 ${P.benchmark.samples.length} 个跑分测试点`))}async function Ab(){P.benchmark.options||await xr(!1);const i=mc();if(!i.planners.length){B("benchmarkStatus").textContent="至少选择一个规划器",Ce("至少选择一个规划器","warn");return}P.benchmark.samples.length&&(i.samples=P.benchmark.samples),Cb(i);const t=await Re("规划器跑分",()=>Wd(i),{quiet:!0,success:"跑分完成"});if(await Il(),Ad(),!t)return;P.benchmark.result=t,P.benchmark.samples=t.samples||P.benchmark.samples,P.benchmark.selectedSampleId=null,ct==null||ct.setBenchmarkSamples(P.benchmark.samples),Ni(),is(),li();const e=Number(t.total_points||P.benchmark.samples.length),n=Number(t.valid_points||0);B("benchmarkStatus").textContent=`跑分完成：IK 有效 ${n}/${e}，耗时 ${be(Number(t.elapsed_ms||0)/1e3,2)} s`,Ce(`跑分完成：有效点 ${n}/${e}`),Li(),Pi()}function Cb(i={}){Ad();const t=P.benchmark.samples.length||Number(i.box_top_count||0)+Number(i.edge_count||0)+Number(i.random_count||0),e=yr().length;P.benchmark.progress={running:!0,stage:"starting",label:"等待 MoveIt 服务",percent:0,total_points:t,completed_steps:0,total_steps:t+t*e,ik_done:0,ik_ok:0,plan_done:0,plan_total:t*e,elapsed_ms:0,eta_sec:null},Li(),ya=window.setInterval(Il,500),Il()}function Ad(){ya&&(window.clearInterval(ya),ya=null)}async function Il(){try{const i=await Hd(P.arm);P.benchmark.progress=i,Li()}catch{}}function Li(){const i=B("benchmarkProgress");if(!i)return;const t=P.benchmark.progress;if(!t){i.hidden=!0;return}i.hidden=!1;const e=Math.max(0,Math.min(100,Number(t.percent||0)));B("benchmarkProgressStage").textContent=Rb(t),B("benchmarkProgressPercent").textContent=`${be(e,1)}%`,B("benchmarkProgressBar").style.width=`${e}%`,B("benchmarkProgressMeta").textContent=ah(t),i.dataset.state=t.stage==="failed"||t.stage==="blocked"?"bad":t.stage==="done"?"good":t.running?"running":"neutral",t.running?(_n("benchmarkState","跑分中","warn"),B("benchmarkStatus").textContent=ah(t)):(t.stage==="failed"||t.stage==="blocked")&&(_n("benchmarkState","跑分失败","bad"),B("benchmarkStatus").textContent=t.error||t.label||"跑分失败")}function Rb(i){return i.error&&(i.stage==="failed"||i.stage==="blocked")?i.label||"跑分失败":i.label||(i.stage==="ik"?"IK 检查":i.stage==="planning"?"规划中":i.stage==="done"?"跑分完成":"等待跑分")}function ah(i){const t=[],e=Number(i.total_points||0),n=Number(i.ik_done||0),s=Number(i.ik_ok||0);e&&t.push(`IK ${n}/${e}，有效 ${s}`);const r=Number(i.plan_total||0);return r&&t.push(`规划 ${Number(i.plan_done||0)}/${r}`),i.current_sample_id!==null&&i.current_sample_id!==void 0&&t.push(`点 #${i.current_sample_id}`),(i.current_planner_label||i.current_planner_id)&&t.push(i.current_planner_label||i.current_planner_id),Number(i.elapsed_ms)>0&&t.push(`已用 ${oh(Number(i.elapsed_ms)/1e3)}`),i.running&&Number(i.eta_sec)>0&&t.push(`预计剩余 ${oh(i.eta_sec)}`),i.error&&t.push(i.error),t.join(" · ")||"等待跑分"}function oh(i){const t=Number(i);return Number.isFinite(t)?t<10?`${be(t,1)}s`:t<90?`${Math.round(t)}s`:`${Math.floor(t/60)}m${Math.round(t%60)}s`:"--"}function Pb(){document.body.dataset.busy||(P.benchmark.samples=[],P.benchmark.result=null,P.benchmark.selectedSampleId=null,P.benchmark.progress=null,ct==null||ct.setBenchmarkSamples([]),Ni(),is(),li(),Li(),B("benchmarkStatus").textContent="点集参数已修改，重新生成后生效")}function Lb(){P.benchmark.result&&(P.benchmark.result=null,P.benchmark.progress=null,is(),li(),Li()),Ni(),B("benchmarkStatus").textContent=P.benchmark.samples.length?"规划参数已修改，重新跑分后生效":"等待生成测试点"}function Nb(){yr(),P.benchmark.result&&(P.benchmark.result=null),P.benchmark.progress=null,Ni(),is(),li(),Li(),B("benchmarkStatus").textContent=P.benchmark.samples.length?"规划器选择已修改，重新跑分后生效":"等待生成测试点"}function Na(){var i;return((i=P.benchmark.result)==null?void 0:i.samples)||P.benchmark.samples||[]}function Ni(){const i=B("benchmarkQuickStats");if(!i)return;const t=Na(),e=P.benchmark.result,n=Tb(),s=Number((e==null?void 0:e.total_points)??t.length),r=Number((e==null?void 0:e.valid_points)??t.filter(o=>{var l;return(l=o.ik)==null?void 0:l.ok}).length),a=wd();i.innerHTML=[["请求点",n],["已生成",t.length||0],["IK 有效",e?`${r}/${s}`:"--"],["规划器",a]].map(([o,l])=>`
    <div class="benchmark-metric"><span>${ee(o)}</span><b>${ee(l)}</b></div>
  `).join(""),e?_n("benchmarkState",r?"结果已生成":"无有效点",r?"good":"bad"):t.length?_n("benchmarkState",`已生成 ${t.length}`,"good"):_n("benchmarkState","未生成","neutral")}function is(){const i=B("benchmarkSummary");if(!i)return;const t=P.benchmark.result,e=Object.values((t==null?void 0:t.summary)||{});if(!e.length){kn("benchmarkSummary","跑分后生成规划器成功率结果");return}const n=new Map((t.planners||[]).map((s,r)=>[s.planner_id,r]));e.sort((s,r)=>(n.get(s.planner_id)??999)-(n.get(r.planner_id)??999)),i.innerHTML=e.map(s=>{const r=Math.max(0,Math.min(1,Number(s.success_rate||0))),a=`${Math.round(r*100)}%`;return`
      <div class="benchmark-score-row">
        <div>
          <strong>${ee(s.label||s.planner_id)}</strong>
          <small>${ee(s.planner_id)}</small>
        </div>
        <div class="benchmark-score-meter"><span style="width:${r*100}%"></span></div>
        <b>${a}</b>
        <small>${Number(s.planned_ok||0)}/${Number(s.valid_points||0)} · ${be(s.mean_elapsed_ms,1)} ms</small>
      </div>
    `}).join("")}function li(){var l;const i=B("benchmarkSamples");if(!i)return;const t=Na(),e=P.benchmark.result,n=Number((e==null?void 0:e.total_points)??t.length),s=Number((e==null?void 0:e.valid_points)??t.filter(c=>{var u;return(u=c.ik)==null?void 0:u.ok}).length),r=B("benchmarkSetBadge");if(r&&(r.textContent=`${s}/${n||0}`),ct==null||ct.setBenchmarkSamples(t,P.benchmark.selectedSampleId),!t.length){kn("benchmarkSamples","暂无测试点");return}const a=Ub(e),o=((l=e==null?void 0:e.planners)==null?void 0:l.length)||wd();i.innerHTML=t.map(c=>{var C;const u=[c.x,c.y,c.z].map(T=>be(T,3)).join(", "),h=a.get(Number(c.id))||[],d=h.filter(T=>T.ok).length,p=!!c.ik,g=((C=c.ik)==null?void 0:C.ok)===!0,x=String(c.id)===String(P.benchmark.selectedSampleId),m=p&&!g?"未计入":e?`${d}/${o}`:"待跑分",f=Db(c.ik),R=Ib(h,o);return`
      <div class="benchmark-sample ${x?"active":""}" data-benchmark-sample="${ee(c.id)}">
        <div>
          <strong>#${ee(c.id)} ${ee(My[c.source]||c.source||"测试点")}</strong>
          <small>X/Y/Z ${ee(u)}${f?` · ${ee(f)}`:""}${R?` · ${ee(R)}`:""}</small>
        </div>
        <div class="benchmark-sample-state">
          <span data-state="${p?g?"good":"bad":"neutral"}">${p?g?"IK 通过":"IK 失败":"未跑 IK"}</span>
          <span data-state="${e?d?"good":"bad":"neutral"}">规划 ${ee(m)}</span>
        </div>
      </div>
    `}).join("")}function Db(i){if(!i)return"";const t=Number(i.scanned_count??i.candidate_index),e=Number(i.candidate_count),n=i.mode?`${i.mode} `:"";return Number.isFinite(t)&&Number.isFinite(e)&&e>1?`姿态 ${n}${t}/${e}`:Number.isFinite(t)&&t>1?`姿态 ${n}第 ${t} 个`:n?`姿态 ${n}`:""}function Ib(i,t){if(!(i!=null&&i.length)||t!==1)return"";const e=i[0],n=Number(e.scanned_count??e.candidate_index),s=Number(e.candidate_count);return Number.isFinite(n)&&Number.isFinite(s)&&s>1?`规划姿态 ${n}/${s}`:""}function Ub(i){const t=new Map;for(const e of Object.values((i==null?void 0:i.results)||{}))for(const n of e||[]){const s=Number(n.sample_id);t.has(s)||t.set(s,[]),t.get(s).push(n)}return t}function Fb(i){const t=i.target.closest("[data-benchmark-sample]");if(!t)return;const e=Na().find(n=>String(n.id)===String(t.dataset.benchmarkSample));e&&(P.benchmark.selectedSampleId=e.id,Ga(e),ct==null||ct.setBenchmarkSamples(Na(),P.benchmark.selectedSampleId),li(),B("footerMessage").textContent=`已选中跑分点 #${e.id}：${be(e.x,3)}, ${be(e.y,3)}, ${be(e.z,3)}`)}async function gc(){try{const i=await Qd();P.points=i.points||[],Cd("pointsList",P.points,"point")}catch(i){kn("pointsList",i.message)}}async function _c(){try{const i=await tf();P.presets=i.presets||[],Cd("presetsList",P.presets,"preset")}catch(i){kn("presetsList",i.message)}}function Cd(i,t,e){const n=B(i);if(!t.length){kn(i,e==="point"?"暂无点位":"暂无预设");return}n.innerHTML=t.map((s,r)=>`
    <div class="list-item">
      <div>
        <strong>${ee(s.name||`${e==="point"?"点位":"预设"} ${r+1}`)}</strong>
        <small>${an(s.arm)} · X ${be(s.x)} · Y ${be(s.y)} · Z ${be(s.z)}</small>
      </div>
      <div class="item-actions">
        <button class="icon-button" type="button" data-library-use="${e}:${r}" aria-label="载入" title="载入"><i data-lucide="corner-down-left"></i></button>
        <button class="icon-button" type="button" data-library-delete="${e}:${r}" aria-label="删除" title="删除"><i data-lucide="trash-2"></i></button>
      </div>
    </div>
  `).join(""),vr()}function kn(i,t){B(i).innerHTML=`<p class="empty-state">${ee(t)}</p>`}async function lh(){const i=B("pointName").value.trim()||new Date().toLocaleTimeString("zh-CN",{hour12:!1});await Re("保存点位",()=>jt("/api/points",{...xn(),name:i})),B("pointName").value="",gc()}async function kb(){const i=B("presetName").value.trim()||new Date().toLocaleTimeString("zh-CN",{hour12:!1});await Re("保存抓取预设",()=>jt("/api/presets",{...ic(),name:i,pick_approach:wn("pickApproach",.1),pick_descend:wn("pickDescend",.05),pick_hold:wn("pickHold",1),pick_lift:wn("pickLift",.1)})),B("presetName").value="",_c()}async function ch(i){var o,l,c;const t=(o=i.target.closest("[data-library-use]"))==null?void 0:o.dataset.libraryUse,e=(l=i.target.closest("[data-library-delete]"))==null?void 0:l.dataset.libraryDelete;if(!t&&!e)return;const[n,s]=(t||e).split(":"),r=Number(s),a=n==="point"?P.points:P.presets;if(t){const u=a[r];if(!u)return;u.arm&&await Ql(u.arm),Ga(u),n==="preset"&&Ob(u),Ce(`已载入${n==="point"?"点位":"预设"}：${u.name||r+1}`);return}await Ha(`删除“${((c=a[r])==null?void 0:c.name)||r+1}”？`,"确认删除")&&(await jt(`/api/${n==="point"?"points":"presets"}/delete`,{index:r}),n==="point"?gc():_c())}function Ob(i){const t=[["pickApproach","pick_approach"],["pickDescend","pick_descend"],["pickHold","pick_hold"],["pickLift","pick_lift"]];for(const[e,n]of t){const s=B(e);s&&Number.isFinite(Number(i[n]))&&(s.value=i[n])}}function Bb(){const i=B("sequenceType").value;let t={type:i,arm:P.arm};["approach","grasp","pick"].includes(i)&&(t.pose=ic()),i==="move"&&(t.pose=xn()),i==="approach"&&(t.offset_z=wn("pickApproach",.1)),i==="lift"&&(t.offset_z=wn("pickLift",.1)),i==="pick"&&(t={...t,approach_height:wn("pickApproach",.1),descend_distance:wn("pickDescend",.05),hold_seconds:wn("pickHold",1),lift_height:wn("pickLift",.1)}),i==="wait"&&(t.seconds=1),P.sequence.push(t),vc(),$a()}function $a(){const i=B("sequenceList");if(!P.sequence.length){kn("sequenceList","暂无动作步骤");return}i.innerHTML=P.sequence.map((t,e)=>`
    <div class="list-item">
      <div><strong>${e+1}. ${xy[t.type]||t.type}</strong><small>${an(t.arm)}${t.seconds?` · ${t.seconds} s`:""}</small></div>
      <div class="item-actions">
        <button class="icon-button" type="button" data-sequence-up="${e}" aria-label="上移" title="上移"><i data-lucide="arrow-up"></i></button>
        <button class="icon-button" type="button" data-sequence-delete="${e}" aria-label="删除" title="删除"><i data-lucide="trash-2"></i></button>
      </div>
    </div>
  `).join(""),vr()}function zb(i){var n,s;const t=(n=i.target.closest("[data-sequence-up]"))==null?void 0:n.dataset.sequenceUp,e=(s=i.target.closest("[data-sequence-delete]"))==null?void 0:s.dataset.sequenceDelete;if(t!==void 0){const r=Number(t);r>0&&([P.sequence[r-1],P.sequence[r]]=[P.sequence[r],P.sequence[r-1]])}else if(e!==void 0)P.sequence.splice(Number(e),1);else return;vc(),$a()}function Vb(){P.sequence=[],vc(),$a()}function vc(){localStorage.setItem("piper.sequence",JSON.stringify(P.sequence))}async function Hb(){if(!P.sequence.length){Ce("请先添加动作步骤","warn");return}await Re("执行动作序列",()=>jt("/api/sequence",{steps:P.sequence}),{confirm:`即将连续执行 ${P.sequence.length} 个动作步骤，请确认 Piper 工作区安全。`,confirmTitle:"确认执行动作序列"})}async function Da(){try{const i=await ef(200),t=B("logLevelFilter").value,e=(i.logs||[]).map(s=>typeof s=="string"?s:JSON.stringify(s)),n=t==="all"?e:e.filter(s=>s.includes(t));B("logViewer").textContent=n.join(`
`)||"暂无日志"}catch(i){B("logViewer").textContent=`日志读取失败：${i.message}`}}function an(i=P.arm){return i==="left"?"未使用":"Piper"}function Gb(){try{const i=JSON.parse(localStorage.getItem("piper.sequence")||"[]");return Array.isArray(i)?i:[]}catch{return[]}}Sy();
