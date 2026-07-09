var Od=Object.defineProperty;var Bd=(n,t,e)=>t in n?Od(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Tc=(n,t,e)=>Bd(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class zd extends Error{constructor(t,e=0,i=null){super(t),this.name="ApiError",this.status=e,this.payload=i}}async function qt(n,t){const e=await fetch(n,{method:t===void 0?"GET":"POST",headers:t===void 0?{}:{"Content-Type":"application/json"},body:t===void 0?void 0:JSON.stringify(t),cache:t===void 0?"no-store":"default"}),s=(e.headers.get("content-type")??"").includes("application/json")?await e.json():await e.text();if(!e.ok||(s==null?void 0:s.ok)===!1){const r=(s==null?void 0:s.error)||(s==null?void 0:s.message)||`HTTP ${e.status}`;throw new zd(r,e.status,s)}return s}function Vd(){return qt("/api/status")}function Hd(){return qt("/api/robot_state")}function wc(n){return qt(`/api/links?arm=${encodeURIComponent(n)}`)}function Gd(n){return qt(`/api/gripper?arm=${encodeURIComponent(n)}`)}function ph(){return qt("/api/vision_target")}function Wd(){return qt("/api/vision_status")}function Xd(){return qt("/api/camera_extrinsic")}function qo(n){return qt(`/api/joint_config?arm=${encodeURIComponent(n)}`)}function $d(){return qt("/api/kinematics")}function qd(){return qt("/api/ompl_config")}function mh(n){return qt("/api/planning_presets",n)}function jd(n){return qt("/api/planning_presets/delete",n)}function Yd(n){return qt(`/api/benchmark/options?arm=${encodeURIComponent(n)}`)}function Kd(n){return qt(`/api/benchmark/progress?arm=${encodeURIComponent(n)}`)}function Zd(n){return qt("/api/benchmark/generate",n)}function Jd(n){return qt("/api/benchmark/run",n)}function Qd(n){return qt("/api/benchmark/export_csv",n)}function tf(){return qt("/api/platform_obstacle")}function ef(){return qt("/api/manual_collision_boxes")}function nf(){return qt("/api/workspace_bounds")}function sf(n){return qt("/api/workspace_bounds",n)}function rf(n){return qt("/api/manual_collision_boxes",n)}function af(n){return qt("/api/manual_collision_boxes/apply",n)}function of(){return qt("/api/manual_collision_boxes/clear",{})}function lf(){return qt("/api/points")}function cf(){return qt("/api/presets")}function uf(n=200){return qt(`/api/logs?n=${n}`)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="174",Rs={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hf=0,Ac=1,df=2,gh=1,_h=2,ti=3,ai=0,vn=1,Sn=2,Ei=0,Ps=1,Cc=2,Rc=3,Pc=4,ff=5,$i=100,pf=101,mf=102,gf=103,_f=104,vf=200,xf=201,yf=202,bf=203,jo=204,Yo=205,Mf=206,Sf=207,Ef=208,Tf=209,wf=210,Af=211,Cf=212,Rf=213,Pf=214,Ko=0,Zo=1,Jo=2,Fs=3,Qo=4,tl=5,el=6,nl=7,ka=0,Lf=1,Nf=2,Ti=0,Df=1,If=2,Uf=3,vh=4,Ff=5,kf=6,Of=7,Lc="attached",Bf="detached",xh=300,ks=301,Os=302,il=303,sl=304,Oa=306,ji=1e3,Un=1001,rl=1002,Tn=1003,zf=1004,Lr=1005,En=1006,ro=1007,ei=1008,oi=1009,yh=1010,bh=1011,fr=1012,Hl=1013,Ji=1014,Vn=1015,vr=1016,Gl=1017,Wl=1018,Bs=1020,Mh=35902,Sh=1021,Eh=1022,Rn=1023,Th=1024,wh=1025,Ls=1026,zs=1027,Ah=1028,Xl=1029,Ch=1030,$l=1031,ql=1033,ga=33776,_a=33777,va=33778,xa=33779,al=35840,ol=35841,ll=35842,cl=35843,ul=36196,hl=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,vl=37813,xl=37814,yl=37815,bl=37816,Ml=37817,Sl=37818,El=37819,Tl=37820,wl=37821,ya=36492,Al=36494,Cl=36495,Rh=36283,Rl=36284,Pl=36285,Ll=36286,Ta=2300,Nl=2301,ao=2302,Nc=2400,Dc=2401,Ic=2402,Vf=2500,Hf=3200,Gf=3201,Ba=0,Wf=1,Mi="",ze="srgb",Vs="srgb-linear",wa="linear",Ae="srgb",hs=7680,Uc=519,Xf=512,$f=513,qf=514,Ph=515,jf=516,Yf=517,Kf=518,Zf=519,Fc=35044,kc="300 es",ni=2e3,Aa=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oc=1234567;const Ns=Math.PI/180,Hs=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function jl(n,t){return(n%t+t)%t}function Jf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Qf(n,t,e){return n!==t?(e-n)/(t-n):0}function ur(n,t,e){return(1-e)*n+e*t}function tp(n,t,e,i){return ur(n,t,1-Math.exp(-e*i))}function ep(n,t=1){return t-Math.abs(jl(n,t*2)-t)}function np(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ip(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function sp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function rp(n,t){return n+Math.random()*(t-n)}function ap(n){return n*(.5-Math.random())}function op(n){n!==void 0&&(Oc=n);let t=Oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lp(n){return n*Ns}function cp(n){return n*Hs}function up(n){return(n&n-1)===0&&n!==0}function hp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fp(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ws={DEG2RAD:Ns,RAD2DEG:Hs,generateUUID:Ni,clamp:ce,euclideanModulo:jl,mapLinear:Jf,inverseLerp:Qf,lerp:ur,damp:tp,pingpong:ep,smoothstep:np,smootherstep:ip,randInt:sp,randFloat:rp,randFloatSpread:ap,seededRandom:op,degToRad:lp,radToDeg:cp,isPowerOfTwo:up,ceilPowerOfTwo:hp,floorPowerOfTwo:dp,setQuaternionFromProperEuler:fp,normalize:un,denormalize:Ts};class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(t,e,i,s,r,a,o,l,c){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],P=s[1],R=s[4],T=s[7],D=s[2],F=s[5],I=s[8];return r[0]=a*x+o*P+l*D,r[3]=a*m+o*R+l*F,r[6]=a*f+o*T+l*I,r[1]=c*x+u*P+h*D,r[4]=c*m+u*R+h*F,r[7]=c*f+u*T+h*I,r[2]=d*x+p*P+g*D,r[5]=d*m+p*R+g*F,r[8]=d*f+p*T+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=e*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*a)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new ae;function Lh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pp(){const n=pr("canvas");return n.style.display="block",n}const Bc={};function Gi(n){n in Bc||(Bc[n]=!0,console.warn(n))}function mp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function gp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _p(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zc=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){const n={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?wa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vs]:{primaries:t,whitePoint:i,transfer:wa,toXYZ:zc,fromXYZ:Vc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:zc,fromXYZ:Vc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),n}const pe=vp();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class xp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=pr("canvas")),ds.width=t.width,ds.height=t.height;const i=ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ds}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(si(e[i]/255)*255):e[i]=si(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yp=0;class Yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function lo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bp=0;class on extends ns{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,i=Un,s=Un,r=En,a=ei,o=Rn,l=oi,c=on.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ni(),this.name="",this.source=new Yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ji:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ji:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=xh;on.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,T=(p+1)/2,D=(f+1)/2,F=(u+d)/4,I=(h+x)/4,U=(g+m)/4;return R>T&&R>D?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=F/i,r=I/i):T>D?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=F/s,r=U/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=I/r,s=U/r),this.set(i,s,r,e),this}let P=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(P)<.001&&(P=1),this.x=(m-g)/P,this.y=(h-x)/P,this.z=(d-u)/P,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mp extends ns{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Mp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Nh extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sp extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*x,P=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){const D=Math.sqrt(R),F=Math.atan2(D,f*P);m=Math.sin(m*F)/D,o=Math.sin(o*F)/D}const T=o*P;if(l=l*m+d*T,c=c*m+p*T,u=u*m+g*T,h=h*m+x*T,m===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-o*p,t[e+2]=c*g+u*p+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return co.copy(this).projectOnVector(t),this.sub(co)}reflect(t){return this.sub(co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new k,Hc=new Fn;class Ci{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),Dr.subVectors(this.max,tr),fs.subVectors(t.a,tr),ps.subVectors(t.b,tr),ms.subVectors(t.c,tr),ui.subVectors(ps,fs),hi.subVectors(ms,ps),ki.subVectors(fs,ms);let e=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-ki.z,ki.y,ui.z,0,-ui.x,hi.z,0,-hi.x,ki.z,0,-ki.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-ki.y,ki.x,0];return!uo(e,fs,ps,ms,Dr)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,fs,ps,ms,Dr))?!1:(Ir.crossVectors(ui,hi),e=[Ir.x,Ir.y,Ir.z],uo(e,fs,ps,ms,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new k,new k,new k,new k,new k,new k,new k,new k],Nn=new k,Nr=new Ci,fs=new k,ps=new k,ms=new k,ui=new k,hi=new k,ki=new k,tr=new k,Dr=new k,Ir=new k,Oi=new k;function uo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Oi.fromArray(n,r);const o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ep=new Ci,er=new k,ho=new k;class is{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ep.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(ho)),this.expandByPoint(er.copy(t.center).sub(ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new k,fo=new k,Ur=new k,di=new k,po=new k,Fr=new k,mo=new k;class xr{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){fo.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),di.copy(this.origin).sub(fo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),o=di.dot(this.direction),l=-di.dot(Ur),c=di.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(fo).addScaledVector(Ur,d),p}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,i,s,r){po.subVectors(e,t),Fr.subVectors(i,t),mo.crossVectors(po,Fr);let a=this.direction.dot(mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(Fr.crossVectors(di,Fr));if(l<0)return null;const c=o*this.direction.dot(po.cross(di));if(c<0||l+c>a)return null;const u=-o*di.dot(mo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,i,s,r,a,o,l,c,u,h,d,p,g,x,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,d,p,g,x,m)}set(t,e,i,s,r,a,o,l,c,u,h,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,g=c*u,x=c*h;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,g=c*u,x=c*h;e[0]=d-x*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-d*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tp,t,wp)}lookAt(t,e,i){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),fi.crossVectors(i,bn),fi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),fi.crossVectors(i,bn)),fi.normalize(),kr.crossVectors(bn,fi),s[0]=fi.x,s[4]=kr.x,s[8]=bn.x,s[1]=fi.y,s[5]=kr.y,s[9]=bn.y,s[2]=fi.z,s[6]=kr.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],P=i[3],R=i[7],T=i[11],D=i[15],F=s[0],I=s[4],U=s[8],y=s[12],b=s[1],N=s[5],V=s[9],W=s[13],J=s[2],et=s[6],z=s[10],it=s[14],$=s[3],ut=s[7],mt=s[11],gt=s[15];return r[0]=a*F+o*b+l*J+c*$,r[4]=a*I+o*N+l*et+c*ut,r[8]=a*U+o*V+l*z+c*mt,r[12]=a*y+o*W+l*it+c*gt,r[1]=u*F+h*b+d*J+p*$,r[5]=u*I+h*N+d*et+p*ut,r[9]=u*U+h*V+d*z+p*mt,r[13]=u*y+h*W+d*it+p*gt,r[2]=g*F+x*b+m*J+f*$,r[6]=g*I+x*N+m*et+f*ut,r[10]=g*U+x*V+m*z+f*mt,r[14]=g*y+x*W+m*it+f*gt,r[3]=P*F+R*b+T*J+D*$,r[7]=P*I+R*N+T*et+D*ut,r[11]=P*U+R*V+T*z+D*mt,r[15]=P*y+R*W+T*it+D*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*p-i*l*p)+x*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+i*a*p+r*o*u-i*c*u)+f*(-s*o*u-e*l*h+e*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],P=h*m*c-x*d*c+x*l*p-o*m*p-h*l*f+o*d*f,R=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,T=u*x*c-g*h*c+g*o*p-a*x*p-u*o*f+a*h*f,D=g*h*l-u*x*l-g*o*d+a*x*d+u*o*m-a*h*m,F=e*P+i*R+s*T+r*D;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return t[0]=P*I,t[1]=(x*d*r-h*m*r-x*s*p+i*m*p+h*s*f-i*d*f)*I,t[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*f+i*l*f)*I,t[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*p-i*l*p)*I,t[4]=R*I,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*I,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*I,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*p+e*l*p)*I,t[8]=T*I,t[9]=(g*h*r-u*x*r-g*i*p+e*x*p+u*i*f-e*h*f)*I,t[10]=(a*x*r-g*o*r+g*i*c-e*x*c-a*i*f+e*o*f)*I,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*p-e*o*p)*I,t[12]=D*I,t[13]=(u*x*s-g*h*s+g*i*d-e*x*d-u*i*m+e*h*m)*I,t[14]=(g*o*s-a*x*s-g*i*l+e*x*l+a*i*m-e*o*m)*I,t[15]=(a*h*s-u*o*s+u*i*l-e*h*l-a*i*d+e*o*d)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,x=a*u,m=a*h,f=o*h,P=l*c,R=l*u,T=l*h,D=i.x,F=i.y,I=i.z;return s[0]=(1-(x+f))*D,s[1]=(p+T)*D,s[2]=(g-R)*D,s[3]=0,s[4]=(p-T)*F,s[5]=(1-(d+f))*F,s[6]=(m+P)*F,s[7]=0,s[8]=(g+R)*I,s[9]=(m-P)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const a=gs.set(s[4],s[5],s[6]).length(),o=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const c=1/r,u=1/a,h=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,e.setFromRotationMatrix(Dn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=ni){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let p,g;if(o===ni)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Aa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ni){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(a-r),d=(e+t)*c,p=(i+s)*u;let g,x;if(o===ni)g=(a+r)*h,x=-2*h;else if(o===Aa)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const gs=new k,Dn=new Jt,Tp=new k(0,0,0),wp=new k(1,1,1),fi=new k,kr=new k,bn=new k,Gc=new Jt,Wc=new Fn;class yn{constructor(t=0,e=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ap=0;const Xc=new k,_s=new Fn,Kn=new Jt,Or=new k,nr=new k,Cp=new k,Rp=new Fn,$c=new k(1,0,0),qc=new k(0,1,0),jc=new k(0,0,1),Yc={type:"added"},Pp={type:"removed"},vs={type:"childadded",child:null},go={type:"childremoved",child:null};class Ve extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new k,e=new yn,i=new Fn,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ae}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis($c,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($c,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Or.copy(t):Or.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(nr,Or,this.up):Kn.lookAt(Or,nr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(Kn),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new k(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new k,Zn=new k,_o=new k,Jn=new k,xs=new k,ys=new k,Kc=new k,vo=new k,xo=new k,yo=new k,bo=new Me,Mo=new Me,So=new Me;class An{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){In.subVectors(s,e),Zn.subVectors(i,e),_o.subVectors(t,e);const a=In.dot(In),o=In.dot(Zn),l=In.dot(_o),c=Zn.dot(Zn),u=Zn.dot(_o),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return bo.setScalar(0),Mo.setScalar(0),So.setScalar(0),bo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,i),So.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bo,r.x),a.addScaledVector(Mo,r.y),a.addScaledVector(So,r.z),a}static isFrontFacing(t,e,i,s){return In.subVectors(i,e),Zn.subVectors(t,e),In.cross(Zn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),In.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;xs.subVectors(s,i),ys.subVectors(r,i),vo.subVectors(t,i);const l=xs.dot(vo),c=ys.dot(vo);if(l<=0&&c<=0)return e.copy(i);xo.subVectors(t,s);const u=xs.dot(xo),h=ys.dot(xo);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(xs,a);yo.subVectors(t,r);const p=xs.dot(yo),g=ys.dot(yo);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ys,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Kc.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Kc,o);const f=1/(m+x+d);return a=x*f,o=d*f,e.copy(i).addScaledVector(xs,a).addScaledVector(ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Eo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=jl(t,1),e=ce(e,0,1),i=ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Eo(a,r,t+1/3),this.g=Eo(a,r,t),this.b=Eo(a,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const i=Ih[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return pe.fromWorkingColorSpace(sn.copy(this),t),Math.round(ce(sn.r*255,0,255))*65536+Math.round(ce(sn.g*255,0,255))*256+Math.round(ce(sn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(sn.copy(this),e);const i=sn.r,s=sn.g,r=sn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=ze){pe.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,i=sn.g,s=sn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Br);const i=ur(pi.h,Br.h,e),s=ur(pi.s,Br.s,e),r=ur(pi.l,Br.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Qt;Qt.NAMES=Ih;let Lp=0;class li extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ps,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Yo,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Yo&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mr extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new k,zr=new jt;let Np=0;class dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=un(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),i=un(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),i=un(i,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class Uh extends dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fh extends dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Te extends dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Dp=0;const wn=new Jt,To=new Ve,bs=new k,Mn=new Ci,ir=new Ci,Je=new k;class We extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Fh:Uh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ae().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,i){return wn.makeTranslation(t,e,i),this.applyMatrix4(wn),this}scale(t,e,i){return wn.makeScale(t,e,i),this.applyMatrix4(wn),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(Mn.min,ir.min),Mn.expandByPoint(Je),Je.addVectors(Mn.max,ir.max),Mn.expandByPoint(Je)):(Mn.expandByPoint(ir.min),Mn.expandByPoint(ir.max))}Mn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Je.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(t,c),Je.add(bs)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new k,l[U]=new k;const c=new k,u=new k,h=new k,d=new jt,p=new jt,g=new jt,x=new k,m=new k;function f(U,y,b){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,b),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),o[U].add(x),o[y].add(x),o[b].add(x),l[U].add(m),l[y].add(m),l[b].add(m))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let U=0,y=P.length;U<y;++U){const b=P[U],N=b.start,V=b.count;for(let W=N,J=N+V;W<J;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const R=new k,T=new k,D=new k,F=new k;function I(U){D.fromBufferAttribute(s,U),F.copy(D);const y=o[U];R.copy(y),R.sub(D.multiplyScalar(D.dot(y))).normalize(),T.crossVectors(F,y);const N=T.dot(l[U])<0?-1:1;a.setXYZW(U,R.x,R.y,R.z,N)}for(let U=0,y=P.length;U<y;++U){const b=P[U],N=b.start,V=b.count;for(let W=N,J=N+V;W<J;W+=3)I(t.getX(W+0)),I(t.getX(W+1)),I(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new dn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new Jt,Bi=new xr,Vr=new is,Jc=new k,Hr=new k,Gr=new k,Wr=new k,wo=new k,Xr=new k,Qc=new k,$r=new k;class Fe extends Ve{constructor(t=new We,e=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(wo.fromBufferAttribute(h,t),a?Xr.addScaledVector(wo,u):Xr.addScaledVector(wo.sub(e),u))}e.add(Xr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Vr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Vr,Jc)===null||Bi.origin.distanceToSquared(Jc)>(t.far-t.near)**2))&&(Zc.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Zc),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],P=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=P,D=R;T<D;T+=3){const F=o.getX(T),I=o.getX(T+1),U=o.getX(T+2);s=qr(this,f,t,i,c,u,h,F,I,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const P=o.getX(m),R=o.getX(m+1),T=o.getX(m+2);s=qr(this,a,t,i,c,u,h,P,R,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],P=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=P,D=R;T<D;T+=3){const F=T,I=T+1,U=T+2;s=qr(this,f,t,i,c,u,h,F,I,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const P=m,R=m+1,T=m+2;s=qr(this,a,t,i,c,u,h,P,R,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ip(n,t,e,i,s,r,a,o){let l;if(t.side===vn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ai,o),l===null)return null;$r.copy(o),$r.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:n}}function qr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Hr),n.getVertexPosition(l,Gr),n.getVertexPosition(c,Wr);const u=Ip(n,t,e,i,Hr,Gr,Wr,Qc);if(u){const h=new k;An.getBarycoord(Qc,Hr,Gr,Wr,h),s&&(u.uv=An.getInterpolatedAttribute(s,o,l,c,h,new jt)),r&&(u.uv1=An.getInterpolatedAttribute(r,o,l,c,h,new jt)),a&&(u.normal=An.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};An.getNormal(Hr,Gr,Wr,d.normal),u.face=d,u.barycoord=h}return u}class Ri extends We{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(h,2));function g(x,m,f,P,R,T,D,F,I,U,y){const b=T/I,N=D/U,V=T/2,W=D/2,J=F/2,et=I+1,z=U+1;let it=0,$=0;const ut=new k;for(let mt=0;mt<z;mt++){const gt=mt*N-W;for(let Pt=0;Pt<et;Pt++){const wt=Pt*b-V;ut[x]=wt*P,ut[m]=gt*R,ut[f]=J,c.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[f]=F>0?1:-1,u.push(ut.x,ut.y,ut.z),h.push(Pt/I),h.push(1-mt/U),it+=1}}for(let mt=0;mt<U;mt++)for(let gt=0;gt<I;gt++){const Pt=d+gt+et*mt,wt=d+gt+et*(mt+1),q=d+(gt+1)+et*(mt+1),Q=d+(gt+1)+et*mt;l.push(Pt,wt,Q),l.push(wt,q,Q),$+=6}o.addGroup(p,$,y),p+=$,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function hn(n){const t={};for(let e=0;e<n.length;e++){const i=Gs(n[e]);for(const s in i)t[s]=i[s]}return t}function Up(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Fp={clone:Gs,merge:hn};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=Up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Oh extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new k,tu=new jt,eu=new jt;class rn extends Oh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,tu,eu),e.subVectors(eu,tu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,Ss=1;class Bp extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ms,Ss,t,e);s.layers=this.layers,this.add(s);const r=new rn(Ms,Ss,t,e);r.layers=this.layers,this.add(r);const a=new rn(Ms,Ss,t,e);a.layers=this.layers,this.add(a);const o=new rn(Ms,Ss,t,e);o.layers=this.layers,this.add(o);const l=new rn(Ms,Ss,t,e);l.layers=this.layers,this.add(l);const c=new rn(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bh extends on{constructor(t,e,i,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zp extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Bh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ei});r.uniforms.tEquirect.value=e;const a=new Fe(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=En),new Bp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class je extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class zh extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const nu=new k,iu=new Me,su=new Me,Hp=new k,ru=new Jt,jr=new k,Co=new is,au=new Jt,Ro=new xr;class Gp extends Fe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lc,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new is),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,jr),this.boundingSphere.expandByPoint(jr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(s),t.ray.intersectsSphere(Co)!==!1&&(au.copy(s).invert(),Ro.copy(t.ray).applyMatrix4(au),!(this.boundingBox!==null&&Ro.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ro)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Me,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Lc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,s=this.geometry;iu.fromBufferAttribute(s.attributes.skinIndex,t),su.fromBufferAttribute(s.attributes.skinWeight,t),nu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=su.getComponent(r);if(a!==0){const o=iu.getComponent(r);ru.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Hp.copy(nu).applyMatrix4(ru),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Vh extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hh extends on{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Tn,u=Tn,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ou=new Jt,Wp=new Jt;class Kl{constructor(t=[],e=[]){this.uuid=Ni(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Jt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Wp;ou.multiplyMatrices(o,e[r]),ou.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Kl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Hh(e,t,t,Rn,Vn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const r=t.bones[i];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Vh),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=i[s];t.boneInverses.push(o.toArray())}return t}}const Po=new k,Xp=new k,$p=new ae;class bi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Po.subVectors(i,e).cross(Xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Po),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||$p.getNormalMatrix(t),s=this.coplanarPoint(Po).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new is,Yr=new k;class Zl{constructor(t=new bi,e=new bi,i=new bi,s=new bi,r=new bi,a=new bi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],P=s[13],R=s[14],T=s[15];if(i[0].setComponents(l-r,d-c,m-p,T-f).normalize(),i[1].setComponents(l+r,d+c,m+p,T+f).normalize(),i[2].setComponents(l+a,d+u,m+g,T+P).normalize(),i[3].setComponents(l-a,d-u,m-g,T-P).normalize(),i[4].setComponents(l-o,d-h,m-x,T-R).normalize(),e===ni)i[5].setComponents(l+o,d+h,m+x,T+R).normalize();else if(e===Aa)i[5].setComponents(o,h,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Si extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ca=new k,Ra=new k,lu=new Jt,sr=new xr,Kr=new is,Lo=new k,cu=new k;class Jl extends Ve{constructor(t=new We,e=new Si){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ca.fromBufferAttribute(e,s-1),Ra.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ca.distanceTo(Ra);t.setAttribute("lineDistance",new Te(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;lu.copy(s).invert(),sr.copy(t.ray).applyMatrix4(lu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=u.getX(x),P=u.getX(x+1),R=Zr(this,t,sr,l,f,P,x);R&&e.push(R)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),f=Zr(this,t,sr,l,x,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=Zr(this,t,sr,l,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){const x=Zr(this,t,sr,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Ca.fromBufferAttribute(o,s),Ra.fromBufferAttribute(o,r),e.distanceSqToSegment(Ca,Ra,Lo,cu)>i)return;Lo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Lo);if(!(c<t.near||c>t.far))return{distance:c,point:cu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const uu=new k,hu=new k;class lr extends Jl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)uu.fromBufferAttribute(e,s),hu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+uu.distanceTo(hu);t.setAttribute("lineDistance",new Te(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gh extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const du=new Jt,Dl=new xr,Jr=new is,Qr=new k;class qp extends Ve{constructor(t=new We,e=new Gh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;du.copy(s).invert(),Dl.copy(t.ray).applyMatrix4(du);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,x=p;g<x;g++){const m=c.getX(g);Qr.fromBufferAttribute(h,m),fu(Qr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,x=p;g<x;g++)Qr.fromBufferAttribute(h,g),fu(Qr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fu(n,t,e,i,s,r,a){const o=Dl.distanceSqToPoint(n);if(o<e){const l=new k;Dl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Wh extends on{constructor(t,e,i,s,r,a,o,l,c,u=Ls){if(u!==Ls&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ls&&(i=Ji),i===void 0&&u===zs&&(i=Bs),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class za extends We{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const x=[],m=i/2;let f=0;P(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2));function P(){const T=new k,D=new k;let F=0;const I=(e-t)/i;for(let U=0;U<=r;U++){const y=[],b=U/r,N=b*(e-t)+t;for(let V=0;V<=s;V++){const W=V/s,J=W*l+o,et=Math.sin(J),z=Math.cos(J);D.x=N*et,D.y=-b*i+m,D.z=N*z,h.push(D.x,D.y,D.z),T.set(et,I,z).normalize(),d.push(T.x,T.y,T.z),p.push(W,1-b),y.push(g++)}x.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){const b=x[y][U],N=x[y+1][U],V=x[y+1][U+1],W=x[y][U+1];(t>0||y!==0)&&(u.push(b,N,W),F+=3),(e>0||y!==r-1)&&(u.push(N,V,W),F+=3)}c.addGroup(f,F,0),f+=F}function R(T){const D=g,F=new jt,I=new k;let U=0;const y=T===!0?t:e,b=T===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const N=g;for(let V=0;V<=s;V++){const J=V/s*l+o,et=Math.cos(J),z=Math.sin(J);I.x=y*z,I.y=m*b,I.z=y*et,h.push(I.x,I.y,I.z),d.push(0,b,0),F.x=et*.5+.5,F.y=z*.5*b+.5,p.push(F.x,F.y),g++}for(let V=0;V<s;V++){const W=D+V,J=N+V;T===!0?u.push(J,J+1,W):u.push(J+1,J,W),U+=3}c.addGroup(f,U,T===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const ta=new k,ea=new k,No=new k,na=new An;class pu extends We{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ns*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:f}=na;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),na.getNormal(No),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let P=0;P<3;P++){const R=(P+1)%3,T=h[P],D=h[R],F=na[u[P]],I=na[u[R]],U=`${T}_${D}`,y=`${D}_${T}`;y in d&&d[y]?(No.dot(d[y].normal)<=r&&(p.push(F.x,F.y,F.z),p.push(I.x,I.y,I.z)),d[y]=null):U in d||(d[U]={index0:c[P],index1:c[R],normal:No.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];ta.fromBufferAttribute(o,x),ea.fromBufferAttribute(o,m),p.push(ta.x,ta.y,ta.z),p.push(ea.x,ea.y,ea.z)}this.setAttribute("position",new Te(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class yr extends We{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const P=f*d-a;for(let R=0;R<c;R++){const T=R*h-r;g.push(T,-P,0),x.push(0,0,1),m.push(R/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let P=0;P<o;P++){const R=P+c*f,T=P+c*(f+1),D=P+1+c*(f+1),F=P+1+c*f;p.push(R,T,F),p.push(T,D,F)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ql extends We{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,p=new k,g=new jt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){const m=x*(i+1);for(let f=0;f<i;f++){const P=f+m,R=P,T=P+i+1,D=P+i+2,F=P+1;o.push(R,T,F),o.push(T,D,F)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ql(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gr extends We{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new k,d=new k,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const P=[],R=f/i;let T=0;f===0&&a===0?T=.5/e:f===i&&l===Math.PI&&(T=-.5/e);for(let D=0;D<=e;D++){const F=D/e;h.x=-t*Math.cos(s+F*r)*Math.sin(a+R*o),h.y=t*Math.cos(a+R*o),h.z=t*Math.sin(s+F*r)*Math.sin(a+R*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(F+T,1-R),P.push(c++)}u.push(P)}for(let f=0;f<i;f++)for(let P=0;P<e;P++){const R=u[f][P+1],T=u[f][P],D=u[f+1][P],F=u[f+1][P+1];(f!==0||a>0)&&p.push(R,T,F),(f!==i-1||l<Math.PI)&&p.push(T,D,F)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wi extends li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jp extends Wi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class hr extends li{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qt(16777215),this.specular=new Qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yp extends li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kp extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zp extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ia(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Jp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qp(n){function t(s,r){return n[s]-n[r]}const e=n.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function mu(n,t,e){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=n[o+l]}return s}function Xh(n,t,e,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(t.push(r.time),e.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(t.push(r.time),e.push(a)),r=n[s++];while(r!==void 0)}class Va{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tm extends Va{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(t,e,i){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dc:r=t,o=2*e-i;break;case Ic:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dc:a=t,l=2*i-e;break;case Ic:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}const c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,P=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,R=(-1-p)*m+(1.5+p)*x+.5*g,T=p*m-p*x;for(let D=0;D!==o;++D)r[D]=f*a[u+D]+P*a[c+D]+R*a[l+D]+T*a[h+D];return r}}class em extends Va{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class nm extends Va{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Wn{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ia(e,this.TimeBufferType),this.values=ia(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ia(t.times,Array),values:ia(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new nm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new em(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ta:e=this.InterpolantFactoryMethodDiscrete;break;case Nl:e=this.InterpolantFactoryMethodLinear;break;case ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Jp(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ao,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{const h=o*i,d=h-i,p=h+i;for(let g=0;g!==i;++g){const x=e[h+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*i,d=a*i;for(let p=0;p!==i;++p)e[d+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Nl;class $s extends Wn{constructor(t,e,i){super(t,e,i)}}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ta;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class $h extends Wn{}$h.prototype.ValueTypeName="color";class Pa extends Wn{}Pa.prototype.ValueTypeName="number";class im extends Va{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e);let c=t*o;for(let u=c+o;c!==u;c+=4)Fn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class br extends Wn{InterpolantFactoryMethodLinear(t){return new im(this.times,this.values,this.getValueSize(),t)}}br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends Wn{constructor(t,e,i){super(t,e,i)}}qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Ta;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Wn{}Ws.prototype.ValueTypeName="vector";class gu{constructor(t="",e=-1,i=[],s=Vf){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=Ni(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,s=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(rm(i[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=i.length;r!==a;++r)e.push(Wn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,e,i,s){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Qp(l);l=mu(l,1,u),c=mu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Pa(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,p,g,x){if(p.length!==0){const m=[],f=[];Xh(p,m,f,g),m.length!==0&&x.push(new h(d,m,f))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)p[d[g].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let P=0;P!==d[g].morphTargets.length;++P){const R=d[g];m.push(R.time),f.push(R.morphTarget===x?1:0)}s.push(new Pa(".morphTargetInfluence["+x+"]",m,f))}l=p.length*a}else{const p=".bones["+e[h].name+"]";i(Ws,p+".position",d,"pos",s),i(br,p+".quaternion",d,"rot",s),i(Ws,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,s=t.length;i!==s;++i){const r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sm(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pa;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return $h;case"quaternion":return br;case"bool":case"boolean":return $s;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function rm(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=sm(n.type);if(n.times===void 0){const e=[],i=[];Xh(n.keys,e,i,"value"),n.times=e,n.values=i}return t.parse!==void 0?t.parse(n):new t(n.name,n.times,n.values,n.interpolation)}const La={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qh{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const jh=new qh;class Li{constructor(t){this.manager=t!==void 0?t:jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Li.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class am extends Error{constructor(t,e){super(t),this.response=e}}class tc extends Li{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=La.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Qn[t]!==void 0){Qn[t].push({onLoad:e,onProgress:i,onError:s});return}Qn[t]=[],Qn[t].push({onLoad:e,onProgress:i,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Qn[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let x=0;const m=new ReadableStream({start(f){P();function P(){h.read().then(({done:R,value:T})=>{if(R)f.close();else{x+=T.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let F=0,I=u.length;F<I;F++){const U=u[F];U.onProgress&&U.onProgress(D)}f.enqueue(T),P()}},R=>{f.error(R)})}}});return new Response(m)}else throw new am(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{La.add(t,c);const u=Qn[t];delete Qn[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Qn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Qn[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class om extends Li{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=La.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=pr("img");function l(){u(),La.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class lm extends Li{constructor(t){super(t)}load(t,e,i,s){const r=this,a=new Hh,o=new tc(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Un,a.wrapT=c.wrapT!==void 0?c.wrapT:Un,a.magFilter=c.magFilter!==void 0?c.magFilter:En,a.minFilter=c.minFilter!==void 0?c.minFilter:En,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ei),c.mipmapCount===1&&(a.minFilter=En),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},i,s),a}}class Yh extends Li{constructor(t){super(t)}load(t,e,i,s){const r=new on,a=new om(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Ha extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Do=new Jt,_u=new k,vu=new k;class ec{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;_u.setFromMatrixPosition(t.matrixWorld),e.position.copy(_u),vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vu),e.updateMatrixWorld(),Do.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Do)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cm extends ec{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Hs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class um extends Ha{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new cm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const xu=new Jt,rr=new k,Io=new k;class hm extends ec{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),i.position.copy(rr),Io.copy(i.position),Io.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Io),i.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),xu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu)}}class dm extends Ha{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class nc extends Oh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fm extends ec{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ba extends Ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new fm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kh extends Ha{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zh{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,s=t.length;i<s;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class pm extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class yu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bu=new k;let sa,Uo;class ra extends Ve{constructor(t=new k(0,0,1),e=new k(0,0,0),i=1,s=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",sa===void 0&&(sa=new We,sa.setAttribute("position",new Te([0,0,0,0,1,0],3)),Uo=new za(0,.5,1,5,1),Uo.translate(0,-.5,0)),this.position.copy(e),this.line=new Jl(sa,new Si({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Fe(Uo,new mr({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{bu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(bu,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class mm extends ns{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Mu(n,t,e,i){const s=gm(i);switch(e){case Sh:return n*t;case Th:return n*t;case wh:return n*t*2;case Ah:return n*t/s.components*s.byteLength;case Xl:return n*t/s.components*s.byteLength;case Ch:return n*t*2/s.components*s.byteLength;case $l:return n*t*2/s.components*s.byteLength;case Eh:return n*t*3/s.components*s.byteLength;case Rn:return n*t*4/s.components*s.byteLength;case ql:return n*t*4/s.components*s.byteLength;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case va:case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:case cl:return Math.max(n,16)*Math.max(t,8)/4;case al:case ll:return Math.max(n,8)*Math.max(t,8)/2;case ul:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ya:case Al:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rh:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Pl:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gm(n){switch(n){case oi:case yh:return{byteLength:1,components:1};case fr:case bh:case vr:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case Ji:case Hl:case Vn:return{byteLength:4,components:1};case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _m(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
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
#endif`,Tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
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
#endif`,Nm=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vm=`#define PI 3.141592653589793
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
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
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
}`,ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
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
#endif`,gg=`struct PhysicalMaterial {
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
}`,_g=`
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ag=`#if defined( USE_POINTS_UV )
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
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zg=`#ifdef USE_NORMALMAP
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
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n_=`float getShadowMask() {
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
}`,i_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
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
#endif`,o_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const __=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`#include <common>
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
}`,E_=`#if DEPTH_PACKING == 3200
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
}`,T_=`#define DISTANCE
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
}`,w_=`#define DISTANCE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,N_=`uniform vec3 diffuse;
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
}`,D_=`#define LAMBERT
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
}`,I_=`#define LAMBERT
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
}`,U_=`#define MATCAP
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
}`,F_=`#define MATCAP
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
}`,k_=`#define NORMAL
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
}`,O_=`#define NORMAL
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
}`,B_=`#define PHONG
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
}`,z_=`#define PHONG
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
}`,V_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,G_=`#define TOON
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
}`,W_=`#define TOON
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
}`,X_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,q_=`#include <common>
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
}`,j_=`uniform vec3 color;
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
}`,Y_=`uniform float rotation;
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
}`,K_=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:vm,alphahash_pars_fragment:xm,alphamap_fragment:ym,alphamap_pars_fragment:bm,alphatest_fragment:Mm,alphatest_pars_fragment:Sm,aomap_fragment:Em,aomap_pars_fragment:Tm,batching_pars_vertex:wm,batching_vertex:Am,begin_vertex:Cm,beginnormal_vertex:Rm,bsdfs:Pm,iridescence_fragment:Lm,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Fm,color_fragment:km,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:zm,common:Vm,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:$m,emissivemap_pars_fragment:qm,colorspace_fragment:jm,colorspace_pars_fragment:Ym,envmap_fragment:Km,envmap_common_pars_fragment:Zm,envmap_pars_fragment:Jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:ug,envmap_vertex:tg,fog_vertex:eg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:sg,gradientmap_pars_fragment:rg,lightmap_pars_fragment:ag,lights_lambert_fragment:og,lights_lambert_pars_fragment:lg,lights_pars_begin:cg,lights_toon_fragment:hg,lights_toon_pars_fragment:dg,lights_phong_fragment:fg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:gg,lights_fragment_begin:_g,lights_fragment_maps:vg,lights_fragment_end:xg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:bg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:Eg,map_pars_fragment:Tg,map_particle_fragment:wg,map_particle_pars_fragment:Ag,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Pg,morphcolor_vertex:Lg,morphnormal_vertex:Ng,morphtarget_pars_vertex:Dg,morphtarget_vertex:Ig,normal_fragment_begin:Ug,normal_fragment_maps:Fg,normal_pars_fragment:kg,normal_pars_vertex:Og,normal_vertex:Bg,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Wg,opaque_fragment:Xg,packing:$g,premultiplied_alpha_fragment:qg,project_vertex:jg,dithering_fragment:Yg,dithering_pars_fragment:Kg,roughnessmap_fragment:Zg,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:t_,shadowmap_vertex:e_,shadowmask_pars_fragment:n_,skinbase_vertex:i_,skinning_pars_vertex:s_,skinning_vertex:r_,skinnormal_vertex:a_,specularmap_fragment:o_,specularmap_pars_fragment:l_,tonemapping_fragment:c_,tonemapping_pars_fragment:u_,transmission_fragment:h_,transmission_pars_fragment:d_,uv_pars_fragment:f_,uv_pars_vertex:p_,uv_vertex:m_,worldpos_vertex:g_,background_vert:__,background_frag:v_,backgroundCube_vert:x_,backgroundCube_frag:y_,cube_vert:b_,cube_frag:M_,depth_vert:S_,depth_frag:E_,distanceRGBA_vert:T_,distanceRGBA_frag:w_,equirect_vert:A_,equirect_frag:C_,linedashed_vert:R_,linedashed_frag:P_,meshbasic_vert:L_,meshbasic_frag:N_,meshlambert_vert:D_,meshlambert_frag:I_,meshmatcap_vert:U_,meshmatcap_frag:F_,meshnormal_vert:k_,meshnormal_frag:O_,meshphong_vert:B_,meshphong_frag:z_,meshphysical_vert:V_,meshphysical_frag:H_,meshtoon_vert:G_,meshtoon_frag:W_,points_vert:X_,points_frag:$_,shadow_vert:q_,shadow_frag:j_,sprite_vert:Y_,sprite_frag:K_},yt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},zn={basic:{uniforms:hn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:hn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:hn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:hn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:hn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:hn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:hn([yt.points,yt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:hn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:hn([yt.common,yt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:hn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:hn([yt.sprite,yt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:hn([yt.common,yt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:hn([yt.lights,yt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};zn.physical={uniforms:hn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const aa={r:0,b:0,g:0},Vi=new yn,Z_=new Jt;function J_(n,t,e,i,s,r,a){const o=new Qt(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?e:t).get(T)),T}function x(R){let T=!1;const D=g(R);D===null?f(o,l):D&&D.isColor&&(f(D,1),T=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,T){const D=g(T);D&&(D.isCubeTexture||D.mapping===Oa)?(u===void 0&&(u=new Fe(new Ri(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Gs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vi.copy(T.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(Vi)),u.material.toneMapped=pe.getTransfer(D.colorSpace)!==Ae,(h!==D||d!==D.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=D,d=D.version,p=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Fe(new yr(2,2),new Pi({name:"BackgroundMaterial",uniforms:Gs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=pe.getTransfer(D.colorSpace)!==Ae,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||d!==D.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=D,d=D.version,p=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function f(R,T){R.getRGB(aa,kh(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,T,a)}function P(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,T=1){o.set(R),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,f(o,l)},render:x,addToRenderList:m,dispose:P}}function Q_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(b,N,V,W,J){let et=!1;const z=h(W,V,N);r!==z&&(r=z,c(r.object)),et=p(b,W,V,J),et&&g(b,W,V,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,T(b,N,V,W),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,N,V){const W=V.wireframe===!0;let J=i[b.id];J===void 0&&(J={},i[b.id]=J);let et=J[N.id];et===void 0&&(et={},J[N.id]=et);let z=et[W];return z===void 0&&(z=d(l()),et[W]=z),z}function d(b){const N=[],V=[],W=[];for(let J=0;J<e;J++)N[J]=0,V[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:W,object:b,attributes:{},index:null}}function p(b,N,V,W){const J=r.attributes,et=N.attributes;let z=0;const it=V.getAttributes();for(const $ in it)if(it[$].location>=0){const mt=J[$];let gt=et[$];if(gt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor)),mt===void 0||mt.attribute!==gt||gt&&mt.data!==gt.data)return!0;z++}return r.attributesNum!==z||r.index!==W}function g(b,N,V,W){const J={},et=N.attributes;let z=0;const it=V.getAttributes();for(const $ in it)if(it[$].location>=0){let mt=et[$];mt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor));const gt={};gt.attribute=mt,mt&&mt.data&&(gt.data=mt.data),J[$]=gt,z++}r.attributes=J,r.attributesNum=z,r.index=W}function x(){const b=r.newAttributes;for(let N=0,V=b.length;N<V;N++)b[N]=0}function m(b){f(b,0)}function f(b,N){const V=r.newAttributes,W=r.enabledAttributes,J=r.attributeDivisors;V[b]=1,W[b]===0&&(n.enableVertexAttribArray(b),W[b]=1),J[b]!==N&&(n.vertexAttribDivisor(b,N),J[b]=N)}function P(){const b=r.newAttributes,N=r.enabledAttributes;for(let V=0,W=N.length;V<W;V++)N[V]!==b[V]&&(n.disableVertexAttribArray(V),N[V]=0)}function R(b,N,V,W,J,et,z){z===!0?n.vertexAttribIPointer(b,N,V,J,et):n.vertexAttribPointer(b,N,V,W,J,et)}function T(b,N,V,W){x();const J=W.attributes,et=V.getAttributes(),z=N.defaultAttributeValues;for(const it in et){const $=et[it];if($.location>=0){let ut=J[it];if(ut===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor)),ut!==void 0){const mt=ut.normalized,gt=ut.itemSize,Pt=t.get(ut);if(Pt===void 0)continue;const wt=Pt.buffer,q=Pt.type,Q=Pt.bytesPerElement,nt=q===n.INT||q===n.UNSIGNED_INT||ut.gpuType===Hl;if(ut.isInterleavedBufferAttribute){const st=ut.data,vt=st.stride,te=ut.offset;if(st.isInstancedInterleavedBuffer){for(let Ht=0;Ht<$.locationSize;Ht++)f($.location+Ht,st.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ht=0;Ht<$.locationSize;Ht++)m($.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let Ht=0;Ht<$.locationSize;Ht++)R($.location+Ht,gt/$.locationSize,q,mt,vt*Q,(te+gt/$.locationSize*Ht)*Q,nt)}else{if(ut.isInstancedBufferAttribute){for(let st=0;st<$.locationSize;st++)f($.location+st,ut.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let st=0;st<$.locationSize;st++)m($.location+st);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let st=0;st<$.locationSize;st++)R($.location+st,gt/$.locationSize,q,mt,gt*Q,gt/$.locationSize*st*Q,nt)}}else if(z!==void 0){const mt=z[it];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv($.location,mt);break;case 3:n.vertexAttrib3fv($.location,mt);break;case 4:n.vertexAttrib4fv($.location,mt);break;default:n.vertexAttrib1fv($.location,mt)}}}}P()}function D(){U();for(const b in i){const N=i[b];for(const V in N){const W=N[V];for(const J in W)u(W[J].object),delete W[J];delete N[V]}delete i[b]}}function F(b){if(i[b.id]===void 0)return;const N=i[b.id];for(const V in N){const W=N[V];for(const J in W)u(W[J].object),delete W[J];delete N[V]}delete i[b.id]}function I(b){for(const N in i){const V=i[N];if(V[b.id]===void 0)continue;const W=V[b.id];for(const J in W)u(W[J].object),delete W[J];delete V[b.id]}}function U(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:P}}function t0(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function e0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Rn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const U=I===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==oi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vn&&!U)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:P,maxVaryings:R,maxFragmentUniforms:T,vertexTextures:D,maxSamples:F}}function n0(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new bi,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const P=r?0:i,R=P*4;let T=f.clippingState||null;l.value=T,T=u(g,d,R,p);for(let D=0;D!==R;++D)T[D]=e[D];f.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=P}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,P=d.matrixWorldInverse;o.getNormalMatrix(P),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,T=p;R!==x;++R,T+=4)a.copy(h[R]).applyMatrix4(P,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function i0(n){let t=new WeakMap;function e(a,o){return o===il?a.mapping=ks:o===sl&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===il||o===sl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zp(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Cs=4,Su=[.125,.215,.35,.446,.526,.582],qi=20,Fo=new nc,Eu=new Qt;let ko=null,Oo=0,Bo=0,zo=!1;const Xi=(1+Math.sqrt(5))/2,Es=1/Xi,Tu=[new k(-Xi,Es,0),new k(Xi,Es,0),new k(-Es,0,Xi),new k(Es,0,Xi),new k(0,Xi,-Es),new k(0,Xi,Es),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],s0=new k;class wu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=s0}=r;ko=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ko,Oo,Bo),this._renderer.xr.enabled=zo,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ko=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:vr,format:Rn,colorSpace:Vs,depthBuffer:!1},s=Au(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r0(r)),this._blurMaterial=a0(r,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,i,s,r){const l=new rn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Eu),h.toneMapping=Ti,h.autoClear=!1;const g=new mr({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),x=new Fe(new Ri,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(Eu),m=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):R===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));const T=this._cubeSize;oa(s,R*T,P>2?T:0,T,T),h.setRenderTarget(s),m&&h.render(x,l),h.render(t,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ks||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;oa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Fo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tu[(s-r-1)%Tu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Fe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const f=[];let P=0;for(let I=0;I<qi;++I){const U=I/x,y=Math.exp(-U*U/2);f.push(y),I===0?P+=y:I<m&&(P+=2*y)}for(let I=0;I<f.length;I++)f[I]=f[I]/P;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:R}=this;d.dTheta.value=g,d.mipInt.value=R-i;const T=this._sizeLods[s],D=3*T*(s>R-Cs?s-R+Cs:0),F=4*(this._cubeSize-T);oa(e,D,F,3*T,2*T),l.setRenderTarget(e),l.render(h,Fo)}}function r0(n){const t=[],e=[],i=[];let s=n;const r=n-Cs+1+Su.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Cs?l=Su[a-n+Cs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,f=1,P=new Float32Array(x*g*p),R=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let F=0;F<p;F++){const I=F%3*2/3-1,U=F>2?0:-1,y=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];P.set(y,x*g*F),R.set(d,m*g*F);const b=[F,F,F,F,F,F];T.set(b,f*g*F)}const D=new We;D.setAttribute("position",new dn(P,x)),D.setAttribute("uv",new dn(R,m)),D.setAttribute("faceIndex",new dn(T,f)),t.push(D),s>Cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Au(n,t,e){const i=new Qi(n,t,e);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function a0(n,t,e){const i=new Float32Array(qi),s=new k(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Cu(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ru(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function o0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===il||l===sl,u=l===ks||l===Os;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new wu(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new wu(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function l0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Gi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function c0(n,t,e,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const P=p.array;x=p.version;for(let R=0,T=P.length;R<T;R+=3){const D=P[R+0],F=P[R+1],I=P[R+2];d.push(D,F,F,I,I,D)}}else if(g!==void 0){const P=g.array;x=g.version;for(let R=0,T=P.length/3-1;R<T;R+=3){const D=R+0,F=R+1,I=R+2;d.push(D,F,F,I,I,D)}}else return;const m=new(Lh(d)?Fh:Uh)(d,1);m.version=x;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function u0(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,g);let f=0;for(let P=0;P<g;P++)f+=p[P]*x[P];e.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function h0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function d0(n,t,e){const i=new WeakMap,s=new Me;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let b=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],P=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),x===!0&&(T=2),m===!0&&(T=3);let D=o.attributes.position.count*T,F=1;D>t.maxTextureSize&&(F=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const I=new Float32Array(D*F*4*h),U=new Nh(I,D,F,h);U.type=Vn,U.needsUpdate=!0;const y=T*4;for(let N=0;N<h;N++){const V=f[N],W=P[N],J=R[N],et=D*F*4*N;for(let z=0;z<V.count;z++){const it=z*y;g===!0&&(s.fromBufferAttribute(V,z),I[et+it+0]=s.x,I[et+it+1]=s.y,I[et+it+2]=s.z,I[et+it+3]=0),x===!0&&(s.fromBufferAttribute(W,z),I[et+it+4]=s.x,I[et+it+5]=s.y,I[et+it+6]=s.z,I[et+it+7]=0),m===!0&&(s.fromBufferAttribute(J,z),I[et+it+8]=s.x,I[et+it+9]=s.y,I[et+it+10]=s.z,I[et+it+11]=J.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new jt(D,F)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function f0(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Qh=new on,Pu=new Wh(1,1),td=new Nh,ed=new Sp,nd=new Bh,Lu=[],Nu=[],Du=new Float32Array(16),Iu=new Float32Array(9),Uu=new Float32Array(4);function js(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Lu[s];if(r===void 0&&(r=new Float32Array(s),Lu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ga(n,t){let e=Nu[t];e===void 0&&(e=new Int32Array(t),Nu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function p0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function m0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),Ke(e,t)}}function g0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),Ke(e,t)}}function _0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),Ke(e,t)}}function v0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,i))return;Uu.set(i),n.uniformMatrix2fv(this.addr,!1,Uu),Ke(e,i)}}function x0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,i))return;Iu.set(i),n.uniformMatrix3fv(this.addr,!1,Iu),Ke(e,i)}}function y0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),Ke(e,i)}}function b0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function M0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),Ke(e,t)}}function S0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),Ke(e,t)}}function E0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),Ke(e,t)}}function T0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function w0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),Ke(e,t)}}function A0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),Ke(e,t)}}function C0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),Ke(e,t)}}function R0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Pu.compareFunction=Ph,r=Pu):r=Qh,e.setTexture2D(t||r,s)}function P0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ed,s)}function L0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nd,s)}function N0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||td,s)}function D0(n){switch(n){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return v0;case 35675:return x0;case 35676:return y0;case 5124:case 35670:return b0;case 35667:case 35671:return M0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return T0;case 36294:return w0;case 36295:return A0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return N0}}function I0(n,t){n.uniform1fv(this.addr,t)}function U0(n,t){const e=js(t,this.size,2);n.uniform2fv(this.addr,e)}function F0(n,t){const e=js(t,this.size,3);n.uniform3fv(this.addr,e)}function k0(n,t){const e=js(t,this.size,4);n.uniform4fv(this.addr,e)}function O0(n,t){const e=js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function B0(n,t){const e=js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function z0(n,t){const e=js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function V0(n,t){n.uniform1iv(this.addr,t)}function H0(n,t){n.uniform2iv(this.addr,t)}function G0(n,t){n.uniform3iv(this.addr,t)}function W0(n,t){n.uniform4iv(this.addr,t)}function X0(n,t){n.uniform1uiv(this.addr,t)}function $0(n,t){n.uniform2uiv(this.addr,t)}function q0(n,t){n.uniform3uiv(this.addr,t)}function j0(n,t){n.uniform4uiv(this.addr,t)}function Y0(n,t,e){const i=this.cache,s=t.length,r=Ga(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qh,r[a])}function K0(n,t,e){const i=this.cache,s=t.length,r=Ga(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ed,r[a])}function Z0(n,t,e){const i=this.cache,s=t.length,r=Ga(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nd,r[a])}function J0(n,t,e){const i=this.cache,s=t.length,r=Ga(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||td,r[a])}function Q0(n){switch(n){case 5126:return I0;case 35664:return U0;case 35665:return F0;case 35666:return k0;case 35674:return O0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return V0;case 35667:case 35671:return H0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return $0;case 36295:return q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return J0}}class tv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=D0(e.type)}}class ev{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Q0(e.type)}}class nv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Fu(n,t){n.seq.push(t),n.map[t.id]=t}function iv(n,t,e){const i=n.name,s=i.length;for(Vo.lastIndex=0;;){const r=Vo.exec(i),a=Vo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fu(e,c===void 0?new tv(o,n,t):new ev(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new nv(o),Fu(e,h)),e=h}}}class Ma{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);iv(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function ku(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sv=37297;let rv=0;function av(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ou=new ae;function ov(n){pe._getMatrix(Ou,pe.workingColorSpace,n);const t=`mat3( ${Ou.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case wa:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Bu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+av(n.getShaderSource(t),a)}else return s}function lv(n,t){const e=ov(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cv(n,t){let e;switch(t){case Df:e="Linear";break;case If:e="Reinhard";break;case Uf:e="Cineon";break;case vh:e="ACESFilmic";break;case kf:e="AgX";break;case Of:e="Neutral";break;case Ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const la=new k;function uv(){pe.getLuminanceCoefficients(la);const n=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function dv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function cr(n){return n!==""}function zu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(n){return n.replace(pv,gv)}const mv=new Map;function gv(n,t){let e=le[t];if(e===void 0){const i=mv.get(t);if(i!==void 0)e=le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Il(e)}const _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(n){return n.replace(_v,vv)}function vv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function yv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case Os:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function Mv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ka:t="ENVMAP_BLENDING_MULTIPLY";break;case Lf:t="ENVMAP_BLENDING_MIX";break;case Nf:t="ENVMAP_BLENDING_ADD";break}return t}function Sv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ev(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=xv(e),c=yv(e),u=bv(e),h=Mv(e),d=Sv(e),p=hv(e),g=dv(r),x=s.createProgram();let m,f,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),f.length>0&&(f+=`
`)):(m=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),f=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?le.tonemapping_pars_fragment:"",e.toneMapping!==Ti?cv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,lv("linearToOutputTexel",e.outputColorSpace),uv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),a=Il(a),a=zu(a,e),a=Vu(a,e),o=Il(o),o=zu(o,e),o=Vu(o,e),a=Hu(a),o=Hu(o),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=P+m+a,T=P+f+o,D=ku(s,s.VERTEX_SHADER,R),F=ku(s,s.FRAGMENT_SHADER,T);s.attachShader(x,D),s.attachShader(x,F),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(N){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(D).trim(),J=s.getShaderInfoLog(F).trim();let et=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,D,F);else{const it=Bu(s,D,"vertex"),$=Bu(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+it+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||J==="")&&(z=!1);z&&(N.diagnostics={runnable:et,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:J,prefix:f}})}s.deleteShader(D),s.deleteShader(F),U=new Ma(s,x),y=fv(s,x)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,sv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=F,this}let Tv=0;class wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Av(t),e.set(t,i)),i}}class Av{constructor(t){this.id=Tv++,this.code=t,this.usedTimes=0}}function Cv(n,t,e,i,s,r,a){const o=new Dh,l=new wv,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,N,V,W){const J=V.fog,et=W.geometry,z=y.isMeshStandardMaterial?V.environment:null,it=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),$=it&&it.mapping===Oa?it.image.height:null,ut=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const mt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,gt=mt!==void 0?mt.length:0;let Pt=0;et.morphAttributes.position!==void 0&&(Pt=1),et.morphAttributes.normal!==void 0&&(Pt=2),et.morphAttributes.color!==void 0&&(Pt=3);let wt,q,Q,nt;if(ut){const re=zn[ut];wt=re.vertexShader,q=re.fragmentShader}else wt=y.vertexShader,q=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),nt=l.getFragmentShaderID(y);const st=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),te=W.isInstancedMesh===!0,Ht=W.isBatchedMesh===!0,ke=!!y.map,De=!!y.matcap,de=!!it,O=!!y.aoMap,fn=!!y.lightMap,ue=!!y.bumpMap,he=!!y.normalMap,Bt=!!y.displacementMap,Pe=!!y.emissiveMap,Ot=!!y.metalnessMap,L=!!y.roughnessMap,M=y.anisotropy>0,j=y.clearcoat>0,lt=y.dispersion>0,ht=y.iridescence>0,at=y.sheen>0,Ut=y.transmission>0,Mt=M&&!!y.anisotropyMap,Rt=j&&!!y.clearcoatMap,me=j&&!!y.clearcoatNormalMap,pt=j&&!!y.clearcoatRoughnessMap,Lt=ht&&!!y.iridescenceMap,Xt=ht&&!!y.iridescenceThicknessMap,Yt=at&&!!y.sheenColorMap,Nt=at&&!!y.sheenRoughnessMap,fe=!!y.specularMap,se=!!y.specularColorMap,Se=!!y.specularIntensityMap,G=Ut&&!!y.transmissionMap,bt=Ut&&!!y.thicknessMap,tt=!!y.gradientMap,ct=!!y.alphaMap,Tt=y.alphaTest>0,St=!!y.alphaHash,ne=!!y.extensions;let Ie=Ti;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ie=n.toneMapping);const Ze={shaderID:ut,shaderType:y.type,shaderName:y.name,vertexShader:wt,fragmentShader:q,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:nt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&W._colorsTexture!==null,instancing:te,instancingColor:te&&W.instanceColor!==null,instancingMorph:te&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Vs,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:De,envMap:de,envMapMode:de&&it.mapping,envMapCubeUVHeight:$,aoMap:O,lightMap:fn,bumpMap:ue,normalMap:he,displacementMap:d&&Bt,emissiveMap:Pe,normalMapObjectSpace:he&&y.normalMapType===Wf,normalMapTangentSpace:he&&y.normalMapType===Ba,metalnessMap:Ot,roughnessMap:L,anisotropy:M,anisotropyMap:Mt,clearcoat:j,clearcoatMap:Rt,clearcoatNormalMap:me,clearcoatRoughnessMap:pt,dispersion:lt,iridescence:ht,iridescenceMap:Lt,iridescenceThicknessMap:Xt,sheen:at,sheenColorMap:Yt,sheenRoughnessMap:Nt,specularMap:fe,specularColorMap:se,specularIntensityMap:Se,transmission:Ut,transmissionMap:G,thicknessMap:bt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===Ps&&y.alphaToCoverage===!1,alphaMap:ct,alphaTest:Tt,alphaHash:St,combine:y.combine,mapUv:ke&&x(y.map.channel),aoMapUv:O&&x(y.aoMap.channel),lightMapUv:fn&&x(y.lightMap.channel),bumpMapUv:ue&&x(y.bumpMap.channel),normalMapUv:he&&x(y.normalMap.channel),displacementMapUv:Bt&&x(y.displacementMap.channel),emissiveMapUv:Pe&&x(y.emissiveMap.channel),metalnessMapUv:Ot&&x(y.metalnessMap.channel),roughnessMapUv:L&&x(y.roughnessMap.channel),anisotropyMapUv:Mt&&x(y.anisotropyMap.channel),clearcoatMapUv:Rt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&x(y.sheenRoughnessMap.channel),specularMapUv:fe&&x(y.specularMap.channel),specularColorMapUv:se&&x(y.specularColorMap.channel),specularIntensityMapUv:Se&&x(y.specularIntensityMap.channel),transmissionMapUv:G&&x(y.transmissionMap.channel),thicknessMapUv:bt&&x(y.thicknessMap.channel),alphaMapUv:ct&&x(y.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(he||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!et.attributes.uv&&(ke||ct),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:vt,skinning:W.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===Ae,decodeVideoTextureEmissive:Pe&&y.emissiveMap.isVideoTexture===!0&&pe.getTransfer(y.emissiveMap.colorSpace)===Ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Sn,flipSided:y.side===vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&y.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function f(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(P(b,y),R(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function P(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function R(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function T(y){const b=g[y.type];let N;if(b){const V=zn[b];N=Fp.clone(V.uniforms)}else N=y.uniforms;return N}function D(y,b){let N;for(let V=0,W=u.length;V<W;V++){const J=u[V];if(J.cacheKey===b){N=J,++N.usedTimes;break}}return N===void 0&&(N=new Ev(n,b,y,r),u.push(N)),N}function F(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function I(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:D,releaseProgram:F,releaseShaderCache:I,programs:u,dispose:U}}function Rv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Pv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Wu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,d,p,g,x,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function o(h,d,p,g,x,m){const f=a(h,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,g,x,m){const f=a(h,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||Pv),i.length>1&&i.sort(d||Wu),s.length>1&&s.sort(d||Wu)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Lv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Xu,n.set(i,[a])):s>=r.length?(a=new Xu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Nv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Qt};break;case"SpotLight":e={position:new k,direction:new k,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function Dv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Iv=0;function Uv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Fv(n){const t=new Nv,e=Dv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new Jt,a=new Jt;function o(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,P=0,R=0,T=0,D=0,F=0,I=0;c.sort(Uv);for(let y=0,b=c.length;y<b;y++){const N=c[y],V=N.color,W=N.intensity,J=N.distance,et=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=V.r*W,h+=V.g*W,d+=V.b*W;else if(N.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(N.sh.coefficients[z],W);I++}else if(N.isDirectionalLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const it=N.shadow,$=e.get(N);$.shadowIntensity=it.intensity,$.shadowBias=it.bias,$.shadowNormalBias=it.normalBias,$.shadowRadius=it.radius,$.shadowMapSize=it.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=et,i.directionalShadowMatrix[p]=N.shadow.matrix,P++}i.directional[p]=z,p++}else if(N.isSpotLight){const z=t.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(V).multiplyScalar(W),z.distance=J,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,i.spot[x]=z;const it=N.shadow;if(N.map&&(i.spotLightMap[D]=N.map,D++,it.updateMatrices(N),N.castShadow&&F++),i.spotLightMatrix[x]=it.matrix,N.castShadow){const $=e.get(N);$.shadowIntensity=it.intensity,$.shadowBias=it.bias,$.shadowNormalBias=it.normalBias,$.shadowRadius=it.radius,$.shadowMapSize=it.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=et,T++}x++}else if(N.isRectAreaLight){const z=t.get(N);z.color.copy(V).multiplyScalar(W),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=z,m++}else if(N.isPointLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),z.distance=N.distance,z.decay=N.decay,N.castShadow){const it=N.shadow,$=e.get(N);$.shadowIntensity=it.intensity,$.shadowBias=it.bias,$.shadowNormalBias=it.normalBias,$.shadowRadius=it.radius,$.shadowMapSize=it.mapSize,$.shadowCameraNear=it.camera.near,$.shadowCameraFar=it.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=et,i.pointShadowMatrix[g]=N.shadow.matrix,R++}i.point[g]=z,g++}else if(N.isHemisphereLight){const z=t.get(N);z.skyColor.copy(N.color).multiplyScalar(W),z.groundColor.copy(N.groundColor).multiplyScalar(W),i.hemi[f]=z,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==P||U.numPointShadows!==R||U.numSpotShadows!==T||U.numSpotMaps!==D||U.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=T+D-F,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=I,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=P,U.numPointShadows=R,U.numSpotShadows=T,U.numSpotMaps=D,U.numLightProbes=I,i.version=Iv++)}function l(c,u){let h=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,P=c.length;f<P;f++){const R=c[f];if(R.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(R.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(R.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(R.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(R.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(m),d++}else if(R.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function $u(n){const t=new Fv(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function kv(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new $u(n),t.set(s,[o])):r>=a.length?(o=new $u(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
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
}`;function zv(n,t,e){let i=new Zl;const s=new jt,r=new jt,a=new Me,o=new Kp({depthPacking:Gf}),l=new Zp,c={},u=e.maxTextureSize,h={[ai]:vn,[vn]:ai,[Sn]:Sn},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:Ov,fragmentShader:Bv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new We;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Fe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let f=this.type;this.render=function(F,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;const y=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ei),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=f!==ti&&this.type===ti,J=f===ti&&this.type!==ti;for(let et=0,z=F.length;et<z;et++){const it=F[et],$=it.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ut=$.getFrameExtents();if(s.multiply(ut),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,$.mapSize.y=r.y)),$.map===null||W===!0||J===!0){const gt=this.type!==ti?{minFilter:Tn,magFilter:Tn}:{};$.map!==null&&$.map.dispose(),$.map=new Qi(s.x,s.y,gt),$.map.texture.name=it.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const mt=$.getViewportCount();for(let gt=0;gt<mt;gt++){const Pt=$.getViewport(gt);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),V.viewport(a),$.updateMatrices(it,gt),i=$.getFrustum(),T(I,U,$.camera,it,this.type)}$.isPointLightShadow!==!0&&this.type===ti&&P($,U),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,b,N)};function P(F,I){const U=t.update(x);d.defines.VSM_SAMPLES!==F.blurSamples&&(d.defines.VSM_SAMPLES=F.blurSamples,p.defines.VSM_SAMPLES=F.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Qi(s.x,s.y)),d.uniforms.shadow_pass.value=F.map.texture,d.uniforms.resolution.value=F.mapSize,d.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(I,null,U,d,x,null),p.uniforms.shadow_pass.value=F.mapPass.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(I,null,U,p,x,null)}function R(F,I,U,y){let b=null;const N=U.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(N!==void 0)b=N;else if(b=U.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=b.uuid,W=I.uuid;let J=c[V];J===void 0&&(J={},c[V]=J);let et=J[W];et===void 0&&(et=b.clone(),J[W]=et,I.addEventListener("dispose",D)),b=et}if(b.visible=I.visible,b.wireframe=I.wireframe,y===ti?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:h[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=n.properties.get(b);V.light=U}return b}function T(F,I,U,y,b){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&b===ti)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,F.matrixWorld);const W=t.update(F),J=F.material;if(Array.isArray(J)){const et=W.groups;for(let z=0,it=et.length;z<it;z++){const $=et[z],ut=J[$.materialIndex];if(ut&&ut.visible){const mt=R(F,ut,y,b);F.onBeforeShadow(n,F,I,U,W,mt,$),n.renderBufferDirect(U,null,W,mt,F,$),F.onAfterShadow(n,F,I,U,W,mt,$)}}}else if(J.visible){const et=R(F,J,y,b);F.onBeforeShadow(n,F,I,U,W,et,null),n.renderBufferDirect(U,null,W,et,F,null),F.onAfterShadow(n,F,I,U,W,et,null)}}const V=F.children;for(let W=0,J=V.length;W<J;W++)T(V[W],I,U,y,b)}function D(F){F.target.removeEventListener("dispose",D);for(const U in c){const y=c[U],b=F.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const Vv={[Ko]:Zo,[Jo]:el,[Qo]:nl,[Fs]:tl,[Zo]:Ko,[el]:Jo,[nl]:Qo,[tl]:Fs};function Hv(n,t){function e(){let G=!1;const bt=new Me;let tt=null;const ct=new Me(0,0,0,0);return{setMask:function(Tt){tt!==Tt&&!G&&(n.colorMask(Tt,Tt,Tt,Tt),tt=Tt)},setLocked:function(Tt){G=Tt},setClear:function(Tt,St,ne,Ie,Ze){Ze===!0&&(Tt*=Ie,St*=Ie,ne*=Ie),bt.set(Tt,St,ne,Ie),ct.equals(bt)===!1&&(n.clearColor(Tt,St,ne,Ie),ct.copy(bt))},reset:function(){G=!1,tt=null,ct.set(-1,0,0,0)}}}function i(){let G=!1,bt=!1,tt=null,ct=null,Tt=null;return{setReversed:function(St){if(bt!==St){const ne=t.get("EXT_clip_control");bt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const Ie=Tt;Tt=null,this.setClear(Ie)}bt=St},getReversed:function(){return bt},setTest:function(St){St?st(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(St){tt!==St&&!G&&(n.depthMask(St),tt=St)},setFunc:function(St){if(bt&&(St=Vv[St]),ct!==St){switch(St){case Ko:n.depthFunc(n.NEVER);break;case Zo:n.depthFunc(n.ALWAYS);break;case Jo:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case Qo:n.depthFunc(n.EQUAL);break;case tl:n.depthFunc(n.GEQUAL);break;case el:n.depthFunc(n.GREATER);break;case nl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=St}},setLocked:function(St){G=St},setClear:function(St){Tt!==St&&(bt&&(St=1-St),n.clearDepth(St),Tt=St)},reset:function(){G=!1,tt=null,ct=null,Tt=null,bt=!1}}}function s(){let G=!1,bt=null,tt=null,ct=null,Tt=null,St=null,ne=null,Ie=null,Ze=null;return{setTest:function(re){G||(re?st(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(re){bt!==re&&!G&&(n.stencilMask(re),bt=re)},setFunc:function(re,pn,Ln){(tt!==re||ct!==pn||Tt!==Ln)&&(n.stencilFunc(re,pn,Ln),tt=re,ct=pn,Tt=Ln)},setOp:function(re,pn,Ln){(St!==re||ne!==pn||Ie!==Ln)&&(n.stencilOp(re,pn,Ln),St=re,ne=pn,Ie=Ln)},setLocked:function(re){G=re},setClear:function(re){Ze!==re&&(n.clearStencil(re),Ze=re)},reset:function(){G=!1,bt=null,tt=null,ct=null,Tt=null,St=null,ne=null,Ie=null,Ze=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,P=null,R=null,T=null,D=null,F=null,I=new Qt(0,0,0),U=0,y=!1,b=null,N=null,V=null,W=null,J=null;const et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,it=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec($)[1]),z=it>=1):$.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=it>=2);let ut=null,mt={};const gt=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),wt=new Me().fromArray(gt),q=new Me().fromArray(Pt);function Q(G,bt,tt,ct){const Tt=new Uint8Array(4),St=n.createTexture();n.bindTexture(G,St),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ne=0;ne<tt;ne++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(bt+ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return St}const nt={};nt[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),nt[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),nt[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(n.DEPTH_TEST),a.setFunc(Fs),ue(!1),he(Ac),st(n.CULL_FACE),O(Ei);function st(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function vt(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function te(G,bt){return h[G]!==bt?(n.bindFramebuffer(G,bt),h[G]=bt,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=bt),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ht(G,bt){let tt=p,ct=!1;if(G){tt=d.get(bt),tt===void 0&&(tt=[],d.set(bt,tt));const Tt=G.textures;if(tt.length!==Tt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let St=0,ne=Tt.length;St<ne;St++)tt[St]=n.COLOR_ATTACHMENT0+St;tt.length=Tt.length,ct=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,ct=!0);ct&&n.drawBuffers(tt)}function ke(G){return g!==G?(n.useProgram(G),g=G,!0):!1}const De={[$i]:n.FUNC_ADD,[pf]:n.FUNC_SUBTRACT,[mf]:n.FUNC_REVERSE_SUBTRACT};De[gf]=n.MIN,De[_f]=n.MAX;const de={[vf]:n.ZERO,[xf]:n.ONE,[yf]:n.SRC_COLOR,[jo]:n.SRC_ALPHA,[wf]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[Mf]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[Yo]:n.ONE_MINUS_SRC_ALPHA,[Tf]:n.ONE_MINUS_DST_COLOR,[Sf]:n.ONE_MINUS_DST_ALPHA,[Af]:n.CONSTANT_COLOR,[Cf]:n.ONE_MINUS_CONSTANT_COLOR,[Rf]:n.CONSTANT_ALPHA,[Pf]:n.ONE_MINUS_CONSTANT_ALPHA};function O(G,bt,tt,ct,Tt,St,ne,Ie,Ze,re){if(G===Ei){x===!0&&(vt(n.BLEND),x=!1);return}if(x===!1&&(st(n.BLEND),x=!0),G!==ff){if(G!==m||re!==y){if((f!==$i||T!==$i)&&(n.blendEquation(n.FUNC_ADD),f=$i,T=$i),re)switch(G){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}P=null,R=null,D=null,F=null,I.set(0,0,0),U=0,m=G,y=re}return}Tt=Tt||bt,St=St||tt,ne=ne||ct,(bt!==f||Tt!==T)&&(n.blendEquationSeparate(De[bt],De[Tt]),f=bt,T=Tt),(tt!==P||ct!==R||St!==D||ne!==F)&&(n.blendFuncSeparate(de[tt],de[ct],de[St],de[ne]),P=tt,R=ct,D=St,F=ne),(Ie.equals(I)===!1||Ze!==U)&&(n.blendColor(Ie.r,Ie.g,Ie.b,Ze),I.copy(Ie),U=Ze),m=G,y=!1}function fn(G,bt){G.side===Sn?vt(n.CULL_FACE):st(n.CULL_FACE);let tt=G.side===vn;bt&&(tt=!tt),ue(tt),G.blending===Ps&&G.transparent===!1?O(Ei):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const ct=G.stencilWrite;o.setTest(ct),ct&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Pe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(G){b!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),b=G)}function he(G){G!==hf?(st(n.CULL_FACE),G!==N&&(G===Ac?n.cullFace(n.BACK):G===df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),N=G}function Bt(G){G!==V&&(z&&n.lineWidth(G),V=G)}function Pe(G,bt,tt){G?(st(n.POLYGON_OFFSET_FILL),(W!==bt||J!==tt)&&(n.polygonOffset(bt,tt),W=bt,J=tt)):vt(n.POLYGON_OFFSET_FILL)}function Ot(G){G?st(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function L(G){G===void 0&&(G=n.TEXTURE0+et-1),ut!==G&&(n.activeTexture(G),ut=G)}function M(G,bt,tt){tt===void 0&&(ut===null?tt=n.TEXTURE0+et-1:tt=ut);let ct=mt[tt];ct===void 0&&(ct={type:void 0,texture:void 0},mt[tt]=ct),(ct.type!==G||ct.texture!==bt)&&(ut!==tt&&(n.activeTexture(tt),ut=tt),n.bindTexture(G,bt||nt[G]),ct.type=G,ct.texture=bt)}function j(){const G=mt[ut];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function lt(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(G){wt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),wt.copy(G))}function Nt(G){q.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function fe(G,bt){let tt=c.get(bt);tt===void 0&&(tt=new WeakMap,c.set(bt,tt));let ct=tt.get(G);ct===void 0&&(ct=n.getUniformBlockIndex(bt,G.name),tt.set(G,ct))}function se(G,bt){const ct=c.get(bt).get(G);l.get(bt)!==ct&&(n.uniformBlockBinding(bt,ct,G.__bindingPointIndex),l.set(bt,ct))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ut=null,mt={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,P=null,R=null,T=null,D=null,F=null,I=new Qt(0,0,0),U=0,y=!1,b=null,N=null,V=null,W=null,J=null,wt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:vt,bindFramebuffer:te,drawBuffers:Ht,useProgram:ke,setBlending:O,setMaterial:fn,setFlipSided:ue,setCullFace:he,setLineWidth:Bt,setPolygonOffset:Pe,setScissorTest:Ot,activeTexture:L,bindTexture:M,unbindTexture:j,compressedTexImage2D:lt,compressedTexImage3D:ht,texImage2D:Lt,texImage3D:Xt,updateUBOMapping:fe,uniformBlockBinding:se,texStorage2D:me,texStorage3D:pt,texSubImage2D:at,texSubImage3D:Ut,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Rt,scissor:Yt,viewport:Nt,reset:Se}}function Gv(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,M){return p?new OffscreenCanvas(L,M):pr("canvas")}function x(L,M,j){let lt=1;const ht=Ot(L);if((ht.width>j||ht.height>j)&&(lt=j/Math.max(ht.width,ht.height)),lt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const at=Math.floor(lt*ht.width),Ut=Math.floor(lt*ht.height);h===void 0&&(h=g(at,Ut));const Mt=M?g(at,Ut):h;return Mt.width=at,Mt.height=Ut,Mt.getContext("2d").drawImage(L,0,0,at,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+at+"x"+Ut+")."),Mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){n.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(L,M,j,lt,ht=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=M;if(M===n.RED&&(j===n.FLOAT&&(at=n.R32F),j===n.HALF_FLOAT&&(at=n.R16F),j===n.UNSIGNED_BYTE&&(at=n.R8)),M===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(at=n.R8UI),j===n.UNSIGNED_SHORT&&(at=n.R16UI),j===n.UNSIGNED_INT&&(at=n.R32UI),j===n.BYTE&&(at=n.R8I),j===n.SHORT&&(at=n.R16I),j===n.INT&&(at=n.R32I)),M===n.RG&&(j===n.FLOAT&&(at=n.RG32F),j===n.HALF_FLOAT&&(at=n.RG16F),j===n.UNSIGNED_BYTE&&(at=n.RG8)),M===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(at=n.RG8UI),j===n.UNSIGNED_SHORT&&(at=n.RG16UI),j===n.UNSIGNED_INT&&(at=n.RG32UI),j===n.BYTE&&(at=n.RG8I),j===n.SHORT&&(at=n.RG16I),j===n.INT&&(at=n.RG32I)),M===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(at=n.RGB8UI),j===n.UNSIGNED_SHORT&&(at=n.RGB16UI),j===n.UNSIGNED_INT&&(at=n.RGB32UI),j===n.BYTE&&(at=n.RGB8I),j===n.SHORT&&(at=n.RGB16I),j===n.INT&&(at=n.RGB32I)),M===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(at=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(at=n.RGBA16UI),j===n.UNSIGNED_INT&&(at=n.RGBA32UI),j===n.BYTE&&(at=n.RGBA8I),j===n.SHORT&&(at=n.RGBA16I),j===n.INT&&(at=n.RGBA32I)),M===n.RGB&&j===n.UNSIGNED_INT_5_9_9_9_REV&&(at=n.RGB9_E5),M===n.RGBA){const Ut=ht?wa:pe.getTransfer(lt);j===n.FLOAT&&(at=n.RGBA32F),j===n.HALF_FLOAT&&(at=n.RGBA16F),j===n.UNSIGNED_BYTE&&(at=Ut===Ae?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(at=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(at=n.RGB5_A1)}return(at===n.R16F||at===n.R32F||at===n.RG16F||at===n.RG32F||at===n.RGBA16F||at===n.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function T(L,M){let j;return L?M===null||M===Ji||M===Bs?j=n.DEPTH24_STENCIL8:M===Vn?j=n.DEPTH32F_STENCIL8:M===fr&&(j=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ji||M===Bs?j=n.DEPTH_COMPONENT24:M===Vn?j=n.DEPTH_COMPONENT32F:M===fr&&(j=n.DEPTH_COMPONENT16),j}function D(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function F(L){const M=L.target;M.removeEventListener("dispose",F),U(M),M.isVideoTexture&&u.delete(M)}function I(L){const M=L.target;M.removeEventListener("dispose",I),b(M)}function U(L){const M=i.get(L);if(M.__webglInit===void 0)return;const j=L.source,lt=d.get(j);if(lt){const ht=lt[M.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&y(L),Object.keys(lt).length===0&&d.delete(j)}i.remove(L)}function y(L){const M=i.get(L);n.deleteTexture(M.__webglTexture);const j=L.source,lt=d.get(j);delete lt[M.__cacheKey],a.memory.textures--}function b(L){const M=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(M.__webglFramebuffer[lt]))for(let ht=0;ht<M.__webglFramebuffer[lt].length;ht++)n.deleteFramebuffer(M.__webglFramebuffer[lt][ht]);else n.deleteFramebuffer(M.__webglFramebuffer[lt]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[lt])}else{if(Array.isArray(M.__webglFramebuffer))for(let lt=0;lt<M.__webglFramebuffer.length;lt++)n.deleteFramebuffer(M.__webglFramebuffer[lt]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let lt=0;lt<M.__webglColorRenderbuffer.length;lt++)M.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[lt]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const j=L.textures;for(let lt=0,ht=j.length;lt<ht;lt++){const at=i.get(j[lt]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),i.remove(j[lt])}i.remove(L)}let N=0;function V(){N=0}function W(){const L=N;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function J(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function et(L,M){const j=i.get(L);if(L.isVideoTexture&&Bt(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const lt=L.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(j,L,M);return}}e.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+M)}function z(L,M){const j=i.get(L);if(L.version>0&&j.__version!==L.version){q(j,L,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+M)}function it(L,M){const j=i.get(L);if(L.version>0&&j.__version!==L.version){q(j,L,M);return}e.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+M)}function $(L,M){const j=i.get(L);if(L.version>0&&j.__version!==L.version){Q(j,L,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+M)}const ut={[ji]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},mt={[Tn]:n.NEAREST,[zf]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[ro]:n.LINEAR_MIPMAP_NEAREST,[ei]:n.LINEAR_MIPMAP_LINEAR},gt={[Xf]:n.NEVER,[Zf]:n.ALWAYS,[$f]:n.LESS,[Ph]:n.LEQUAL,[qf]:n.EQUAL,[Kf]:n.GEQUAL,[jf]:n.GREATER,[Yf]:n.NOTEQUAL};function Pt(L,M){if(M.type===Vn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===ro||M.magFilter===Lr||M.magFilter===ei||M.minFilter===En||M.minFilter===ro||M.minFilter===Lr||M.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ut[M.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ut[M.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ut[M.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,mt[M.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,mt[M.minFilter]),M.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==Lr&&M.minFilter!==ei||M.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function wt(L,M){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",F));const lt=M.source;let ht=d.get(lt);ht===void 0&&(ht={},d.set(lt,ht));const at=J(M);if(at!==L.__cacheKey){ht[at]===void 0&&(ht[at]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ht[at].usedTimes++;const Ut=ht[L.__cacheKey];Ut!==void 0&&(ht[L.__cacheKey].usedTimes--,Ut.usedTimes===0&&y(M)),L.__cacheKey=at,L.__webglTexture=ht[at].texture}return j}function q(L,M,j){let lt=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(lt=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(lt=n.TEXTURE_3D);const ht=wt(L,M),at=M.source;e.bindTexture(lt,L.__webglTexture,n.TEXTURE0+j);const Ut=i.get(at);if(at.version!==Ut.__version||ht===!0){e.activeTexture(n.TEXTURE0+j);const Mt=pe.getPrimaries(pe.workingColorSpace),Rt=M.colorSpace===Mi?null:pe.getPrimaries(M.colorSpace),me=M.colorSpace===Mi||Mt===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let pt=x(M.image,!1,s.maxTextureSize);pt=Pe(M,pt);const Lt=r.convert(M.format,M.colorSpace),Xt=r.convert(M.type);let Yt=R(M.internalFormat,Lt,Xt,M.colorSpace,M.isVideoTexture);Pt(lt,M);let Nt;const fe=M.mipmaps,se=M.isVideoTexture!==!0,Se=Ut.__version===void 0||ht===!0,G=at.dataReady,bt=D(M,pt);if(M.isDepthTexture)Yt=T(M.format===zs,M.type),Se&&(se?e.texStorage2D(n.TEXTURE_2D,1,Yt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Lt,Xt,null));else if(M.isDataTexture)if(fe.length>0){se&&Se&&e.texStorage2D(n.TEXTURE_2D,bt,Yt,fe[0].width,fe[0].height);for(let tt=0,ct=fe.length;tt<ct;tt++)Nt=fe[tt],se?G&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Nt.width,Nt.height,Lt,Xt,Nt.data):e.texImage2D(n.TEXTURE_2D,tt,Yt,Nt.width,Nt.height,0,Lt,Xt,Nt.data);M.generateMipmaps=!1}else se?(Se&&e.texStorage2D(n.TEXTURE_2D,bt,Yt,pt.width,pt.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,Lt,Xt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Lt,Xt,pt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){se&&Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Yt,fe[0].width,fe[0].height,pt.depth);for(let tt=0,ct=fe.length;tt<ct;tt++)if(Nt=fe[tt],M.format!==Rn)if(Lt!==null)if(se){if(G)if(M.layerUpdates.size>0){const Tt=Mu(Nt.width,Nt.height,M.format,M.type);for(const St of M.layerUpdates){const ne=Nt.data.subarray(St*Tt/Nt.data.BYTES_PER_ELEMENT,(St+1)*Tt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,St,Nt.width,Nt.height,1,Lt,ne)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Nt.width,Nt.height,pt.depth,Lt,Nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Yt,Nt.width,Nt.height,pt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Nt.width,Nt.height,pt.depth,Lt,Xt,Nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Yt,Nt.width,Nt.height,pt.depth,0,Lt,Xt,Nt.data)}else{se&&Se&&e.texStorage2D(n.TEXTURE_2D,bt,Yt,fe[0].width,fe[0].height);for(let tt=0,ct=fe.length;tt<ct;tt++)Nt=fe[tt],M.format!==Rn?Lt!==null?se?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,Nt.width,Nt.height,Lt,Nt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Yt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?G&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Nt.width,Nt.height,Lt,Xt,Nt.data):e.texImage2D(n.TEXTURE_2D,tt,Yt,Nt.width,Nt.height,0,Lt,Xt,Nt.data)}else if(M.isDataArrayTexture)if(se){if(Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Yt,pt.width,pt.height,pt.depth),G)if(M.layerUpdates.size>0){const tt=Mu(pt.width,pt.height,M.format,M.type);for(const ct of M.layerUpdates){const Tt=pt.data.subarray(ct*tt/pt.data.BYTES_PER_ELEMENT,(ct+1)*tt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,pt.width,pt.height,1,Lt,Xt,Tt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Lt,Xt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,pt.width,pt.height,pt.depth,0,Lt,Xt,pt.data);else if(M.isData3DTexture)se?(Se&&e.texStorage3D(n.TEXTURE_3D,bt,Yt,pt.width,pt.height,pt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Lt,Xt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,pt.width,pt.height,pt.depth,0,Lt,Xt,pt.data);else if(M.isFramebufferTexture){if(Se)if(se)e.texStorage2D(n.TEXTURE_2D,bt,Yt,pt.width,pt.height);else{let tt=pt.width,ct=pt.height;for(let Tt=0;Tt<bt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,Yt,tt,ct,0,Lt,Xt,null),tt>>=1,ct>>=1}}else if(fe.length>0){if(se&&Se){const tt=Ot(fe[0]);e.texStorage2D(n.TEXTURE_2D,bt,Yt,tt.width,tt.height)}for(let tt=0,ct=fe.length;tt<ct;tt++)Nt=fe[tt],se?G&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Lt,Xt,Nt):e.texImage2D(n.TEXTURE_2D,tt,Yt,Lt,Xt,Nt);M.generateMipmaps=!1}else if(se){if(Se){const tt=Ot(pt);e.texStorage2D(n.TEXTURE_2D,bt,Yt,tt.width,tt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Lt,Xt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Yt,Lt,Xt,pt);m(M)&&f(lt),Ut.__version=at.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Q(L,M,j){if(M.image.length!==6)return;const lt=wt(L,M),ht=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+j);const at=i.get(ht);if(ht.version!==at.__version||lt===!0){e.activeTexture(n.TEXTURE0+j);const Ut=pe.getPrimaries(pe.workingColorSpace),Mt=M.colorSpace===Mi?null:pe.getPrimaries(M.colorSpace),Rt=M.colorSpace===Mi||Ut===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,pt=M.image[0]&&M.image[0].isDataTexture,Lt=[];for(let ct=0;ct<6;ct++)!me&&!pt?Lt[ct]=x(M.image[ct],!0,s.maxCubemapSize):Lt[ct]=pt?M.image[ct].image:M.image[ct],Lt[ct]=Pe(M,Lt[ct]);const Xt=Lt[0],Yt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),fe=R(M.internalFormat,Yt,Nt,M.colorSpace),se=M.isVideoTexture!==!0,Se=at.__version===void 0||lt===!0,G=ht.dataReady;let bt=D(M,Xt);Pt(n.TEXTURE_CUBE_MAP,M);let tt;if(me){se&&Se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,fe,Xt.width,Xt.height);for(let ct=0;ct<6;ct++){tt=Lt[ct].mipmaps;for(let Tt=0;Tt<tt.length;Tt++){const St=tt[Tt];M.format!==Rn?Yt!==null?se?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,0,0,St.width,St.height,Yt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,fe,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,0,0,St.width,St.height,Yt,Nt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,fe,St.width,St.height,0,Yt,Nt,St.data)}}}else{if(tt=M.mipmaps,se&&Se){tt.length>0&&bt++;const ct=Ot(Lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,fe,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(pt){se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt[ct].width,Lt[ct].height,Yt,Nt,Lt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,fe,Lt[ct].width,Lt[ct].height,0,Yt,Nt,Lt[ct].data);for(let Tt=0;Tt<tt.length;Tt++){const ne=tt[Tt].image[ct].image;se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,0,0,ne.width,ne.height,Yt,Nt,ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,fe,ne.width,ne.height,0,Yt,Nt,ne.data)}}else{se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Yt,Nt,Lt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,fe,Yt,Nt,Lt[ct]);for(let Tt=0;Tt<tt.length;Tt++){const St=tt[Tt];se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,0,0,Yt,Nt,St.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,fe,Yt,Nt,St.image[ct])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),at.__version=ht.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function nt(L,M,j,lt,ht,at){const Ut=r.convert(j.format,j.colorSpace),Mt=r.convert(j.type),Rt=R(j.internalFormat,Ut,Mt,j.colorSpace),me=i.get(M),pt=i.get(j);if(pt.__renderTarget=M,!me.__hasExternalTextures){const Lt=Math.max(1,M.width>>at),Xt=Math.max(1,M.height>>at);ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,at,Rt,Lt,Xt,M.depth,0,Ut,Mt,null):e.texImage2D(ht,at,Rt,Lt,Xt,0,Ut,Mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),he(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,ht,pt.__webglTexture,0,ue(M)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,lt,ht,pt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(L,M,j){if(n.bindRenderbuffer(n.RENDERBUFFER,L),M.depthBuffer){const lt=M.depthTexture,ht=lt&&lt.isDepthTexture?lt.type:null,at=T(M.stencilBuffer,ht),Ut=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=ue(M);he(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,at,M.width,M.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,at,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,at,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,L)}else{const lt=M.textures;for(let ht=0;ht<lt.length;ht++){const at=lt[ht],Ut=r.convert(at.format,at.colorSpace),Mt=r.convert(at.type),Rt=R(at.internalFormat,Ut,Mt,at.colorSpace),me=ue(M);j&&he(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Rt,M.width,M.height):he(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,Rt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Rt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=i.get(M.depthTexture);lt.__renderTarget=M,(!lt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),et(M.depthTexture,0);const ht=lt.__webglTexture,at=ue(M);if(M.depthTexture.format===Ls)he(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0);else if(M.depthTexture.format===zs)he(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function te(L){const M=i.get(L),j=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const lt=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),lt){const ht=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,lt.removeEventListener("dispose",ht)};lt.addEventListener("dispose",ht),M.__depthDisposeCallback=ht}M.__boundDepthTexture=lt}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");vt(M.__webglFramebuffer,L)}else if(j){M.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[lt]),M.__webglDepthbuffer[lt]===void 0)M.__webglDepthbuffer[lt]=n.createRenderbuffer(),st(M.__webglDepthbuffer[lt],L,!1);else{const ht=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer[lt];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,at)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),st(M.__webglDepthbuffer,L,!1);else{const lt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,ht)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(L,M,j){const lt=i.get(L);M!==void 0&&nt(lt.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&te(L)}function ke(L){const M=L.texture,j=i.get(L),lt=i.get(M);L.addEventListener("dispose",I);const ht=L.textures,at=L.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture()),lt.__version=M.version,a.memory.textures++),at){j.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[Mt]=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)j.__webglFramebuffer[Mt][Rt]=n.createFramebuffer()}else j.__webglFramebuffer[Mt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)j.__webglFramebuffer[Mt]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let Mt=0,Rt=ht.length;Mt<Rt;Mt++){const me=i.get(ht[Mt]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&he(L)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ht.length;Mt++){const Rt=ht[Mt];j.__webglColorRenderbuffer[Mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Mt]);const me=r.convert(Rt.format,Rt.colorSpace),pt=r.convert(Rt.type),Lt=R(Rt.internalFormat,me,pt,Rt.colorSpace,L.isXRRenderTarget===!0),Xt=ue(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Lt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,j.__webglColorRenderbuffer[Mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),st(j.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,M);for(let Mt=0;Mt<6;Mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)nt(j.__webglFramebuffer[Mt][Rt],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Rt);else nt(j.__webglFramebuffer[Mt],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(M)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Mt=0,Rt=ht.length;Mt<Rt;Mt++){const me=ht[Mt],pt=i.get(me);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),Pt(n.TEXTURE_2D,me),nt(j.__webglFramebuffer,L,me,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,0),m(me)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let Mt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,lt.__webglTexture),Pt(Mt,M),M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)nt(j.__webglFramebuffer[Rt],L,M,n.COLOR_ATTACHMENT0,Mt,Rt);else nt(j.__webglFramebuffer,L,M,n.COLOR_ATTACHMENT0,Mt,0);m(M)&&f(Mt),e.unbindTexture()}L.depthBuffer&&te(L)}function De(L){const M=L.textures;for(let j=0,lt=M.length;j<lt;j++){const ht=M[j];if(m(ht)){const at=P(L),Ut=i.get(ht).__webglTexture;e.bindTexture(at,Ut),f(at),e.unbindTexture()}}}const de=[],O=[];function fn(L){if(L.samples>0){if(he(L)===!1){const M=L.textures,j=L.width,lt=L.height;let ht=n.COLOR_BUFFER_BIT;const at=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(L),Mt=M.length>1;if(Mt)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),Mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const me=i.get(M[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,j,lt,0,0,j,lt,ht,n.NEAREST),l===!0&&(de.length=0,O.length=0,de.push(n.COLOR_ATTACHMENT0+Rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(de.push(at),O.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Mt)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const me=i.get(M[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,me,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const M=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ue(L){return Math.min(s.maxSamples,L.samples)}function he(L){const M=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Bt(L){const M=a.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function Pe(L,M){const j=L.colorSpace,lt=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Vs&&j!==Mi&&(pe.getTransfer(j)===Ae?(lt!==Rn||ht!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}function Ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=et,this.setTexture2DArray=z,this.setTexture3D=it,this.setTextureCube=$,this.rebindTextures=Ht,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=he}function Wv(n,t){function e(i,s=Mi){let r;const a=pe.getTransfer(s);if(i===oi)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yh)return n.BYTE;if(i===bh)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===Hl)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===Sh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===Rn)return n.RGBA;if(i===Th)return n.LUMINANCE;if(i===wh)return n.LUMINANCE_ALPHA;if(i===Ls)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===Ah)return n.RED;if(i===Xl)return n.RED_INTEGER;if(i===Ch)return n.RG;if(i===$l)return n.RG_INTEGER;if(i===ql)return n.RGBA_INTEGER;if(i===ga||i===_a||i===va||i===xa)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===al||i===ol||i===ll||i===cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===hl||i===dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ul||i===hl)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===yl||i===bl||i===Ml||i===Sl||i===El||i===Tl||i===wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ml)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ya||i===Al||i===Cl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ya)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rh||i===Rl||i===Pl||i===Ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$v=`
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

}`;class qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Pi({vertexShader:Xv,fragmentShader:$v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jv extends ns{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const x=new qv,m=e.getContextAttributes();let f=null,P=null;const R=[],T=[],D=new jt;let F=null;const I=new rn;I.viewport=new Me;const U=new rn;U.viewport=new Me;const y=[I,U],b=new pm;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=R[q];return Q===void 0&&(Q=new Ao,R[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=R[q];return Q===void 0&&(Q=new Ao,R[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=R[q];return Q===void 0&&(Q=new Ao,R[q]=Q),Q.getHandSpace()};function W(q){const Q=T.indexOf(q.inputSource);if(Q===-1)return;const nt=R[Q];nt!==void 0&&(nt.update(q.inputSource,q.frame,c||a),nt.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",et);for(let q=0;q<R.length;q++){const Q=T[q];Q!==null&&(T[q]=null,R[q].disconnect(Q))}N=null,V=null,x.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,P=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",J),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,st=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?zs:Ls,st=m.stencil?Bs:Ji);const te={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(te),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),P=new Qi(d.textureWidth,d.textureHeight,{format:Rn,type:oi,depthTexture:new Wh(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),P=new Qi(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function et(q){for(let Q=0;Q<q.removed.length;Q++){const nt=q.removed[Q],st=T.indexOf(nt);st>=0&&(T[st]=null,R[st].disconnect(nt))}for(let Q=0;Q<q.added.length;Q++){const nt=q.added[Q];let st=T.indexOf(nt);if(st===-1){for(let te=0;te<R.length;te++)if(te>=T.length){T.push(nt),st=te;break}else if(T[te]===null){T[te]=nt,st=te;break}if(st===-1)break}const vt=R[st];vt&&vt.connect(nt)}}const z=new k,it=new k;function $(q,Q,nt){z.setFromMatrixPosition(Q.matrixWorld),it.setFromMatrixPosition(nt.matrixWorld);const st=z.distanceTo(it),vt=Q.projectionMatrix.elements,te=nt.projectionMatrix.elements,Ht=vt[14]/(vt[10]-1),ke=vt[14]/(vt[10]+1),De=(vt[9]+1)/vt[5],de=(vt[9]-1)/vt[5],O=(vt[8]-1)/vt[0],fn=(te[8]+1)/te[0],ue=Ht*O,he=Ht*fn,Bt=st/(-O+fn),Pe=Bt*-O;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pe),q.translateZ(Bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),vt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ot=Ht+Bt,L=ke+Bt,M=ue-Pe,j=he+(st-Pe),lt=De*ke/L*Ot,ht=de*ke/L*Ot;q.projectionMatrix.makePerspective(M,j,lt,ht,Ot,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ut(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,nt=q.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(nt=x.depthFar)),b.near=U.near=I.near=Q,b.far=U.far=I.far=nt,(N!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,V=b.far),I.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,b.layers.mask=I.layers.mask|U.layers.mask;const st=q.parent,vt=b.cameras;ut(b,st);for(let te=0;te<vt.length;te++)ut(vt[te],st);vt.length===2?$(b,I,U):b.projectionMatrix.copy(I.projectionMatrix),mt(q,b,st)};function mt(q,Q,nt){nt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(nt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let gt=null;function Pt(q,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const nt=u.views;p!==null&&(t.setRenderTargetFramebuffer(P,p.framebuffer),t.setRenderTarget(P));let st=!1;nt.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let Ht=0;Ht<nt.length;Ht++){const ke=nt[Ht];let De=null;if(p!==null)De=p.getViewport(ke);else{const O=h.getViewSubImage(d,ke);De=O.viewport,Ht===0&&(t.setRenderTargetTextures(P,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(P))}let de=y[Ht];de===void 0&&(de=new rn,de.layers.enable(Ht),de.viewport=new Me,y[Ht]=de),de.matrix.fromArray(ke.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ke.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(De.x,De.y,De.width,De.height),Ht===0&&(b.matrix.copy(de.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push(de)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Ht=h.getDepthInformation(nt[0]);Ht&&Ht.isValid&&Ht.texture&&x.init(t,Ht,s.renderState)}}for(let nt=0;nt<R.length;nt++){const st=T[nt],vt=R[nt];st!==null&&vt!==void 0&&vt.update(st,Q,c||a)}gt&&gt(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const wt=new Jh;wt.setAnimationLoop(Pt),this.setAnimationLoop=function(q){gt=q},this.dispose=function(){}}}const Hi=new yn,Yv=new Jt;function Kv(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,kh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,P,R,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,P,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===vn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===vn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const P=t.get(f),R=P.envMap,T=P.envMapRotation;R&&(m.envMap.value=R,Hi.copy(T),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(Hi)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,P,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*P,m.scale.value=R*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,P){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=P.texture,m.transmissionSamplerSize.value.set(P.width,P.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const P=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(P.matrixWorld),m.nearDistance.value=P.shadow.camera.near,m.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zv(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(P,R){const T=R.program;i.uniformBlockBinding(P,T)}function c(P,R){let T=s[P.id];T===void 0&&(g(P),T=u(P),s[P.id]=T,P.addEventListener("dispose",m));const D=R.program;i.updateUBOMapping(P,D);const F=t.render.frame;r[P.id]!==F&&(d(P),r[P.id]=F)}function u(P){const R=h();P.__bindingPointIndex=R;const T=n.createBuffer(),D=P.__size,F=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,D,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,T),T}function h(){for(let P=0;P<o;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(P){const R=s[P.id],T=P.uniforms,D=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let F=0,I=T.length;F<I;F++){const U=Array.isArray(T[F])?T[F]:[T[F]];for(let y=0,b=U.length;y<b;y++){const N=U[y];if(p(N,F,y,D)===!0){const V=N.__offset,W=Array.isArray(N.value)?N.value:[N.value];let J=0;for(let et=0;et<W.length;et++){const z=W[et],it=x(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,V+J,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,J),J+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(P,R,T,D){const F=P.value,I=R+"_"+T;if(D[I]===void 0)return typeof F=="number"||typeof F=="boolean"?D[I]=F:D[I]=F.clone(),!0;{const U=D[I];if(typeof F=="number"||typeof F=="boolean"){if(U!==F)return D[I]=F,!0}else if(U.equals(F)===!1)return U.copy(F),!0}return!1}function g(P){const R=P.uniforms;let T=0;const D=16;for(let I=0,U=R.length;I<U;I++){const y=Array.isArray(R[I])?R[I]:[R[I]];for(let b=0,N=y.length;b<N;b++){const V=y[b],W=Array.isArray(V.value)?V.value:[V.value];for(let J=0,et=W.length;J<et;J++){const z=W[J],it=x(z),$=T%D,ut=$%it.boundary,mt=$+ut;T+=ut,mt!==0&&D-mt<it.storage&&(T+=D-mt),V.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=it.storage}}}const F=T%D;return F>0&&(T+=D-F),P.__size=T,P.__cache={},this}function x(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function m(P){const R=P.target;R.removeEventListener("dispose",m);const T=a.indexOf(R.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(const P in s)n.deleteBuffer(s[P]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Jv{constructor(t={}){const{canvas:e=pp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const P=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Ti,this.toneMappingExposure=1;const T=this;let D=!1,F=0,I=0,U=null,y=-1,b=null;const N=new Me,V=new Me;let W=null;const J=new Qt(0);let et=0,z=e.width,it=e.height,$=1,ut=null,mt=null;const gt=new Me(0,0,z,it),Pt=new Me(0,0,z,it);let wt=!1;const q=new Zl;let Q=!1,nt=!1;this.transmissionResolutionScale=1;const st=new Jt,vt=new Jt,te=new k,Ht=new Me,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function de(){return U===null?$:1}let O=i;function fn(E,H){return e.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",St,!1),O===null){const H="webgl2";if(O=fn(H,E),O===null)throw fn(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ue,he,Bt,Pe,Ot,L,M,j,lt,ht,at,Ut,Mt,Rt,me,pt,Lt,Xt,Yt,Nt,fe,se,Se,G;function bt(){ue=new l0(O),ue.init(),se=new Wv(O,ue),he=new e0(O,ue,t,se),Bt=new Hv(O,ue),he.reverseDepthBuffer&&d&&Bt.buffers.depth.setReversed(!0),Pe=new h0(O),Ot=new Rv,L=new Gv(O,ue,Bt,Ot,he,se,Pe),M=new i0(T),j=new o0(T),lt=new _m(O),Se=new Q_(O,lt),ht=new c0(O,lt,Pe,Se),at=new f0(O,ht,lt,Pe),Yt=new d0(O,he,L),pt=new n0(Ot),Ut=new Cv(T,M,j,ue,he,Se,pt),Mt=new Kv(T,Ot),Rt=new Lv,me=new kv(ue),Xt=new J_(T,M,j,Bt,at,p,l),Lt=new zv(T,at,he),G=new Zv(O,Pe,he,Bt),Nt=new t0(O,ue,Pe),fe=new u0(O,ue,Pe),Pe.programs=Ut.programs,T.capabilities=he,T.extensions=ue,T.properties=Ot,T.renderLists=Rt,T.shadowMap=Lt,T.state=Bt,T.info=Pe}bt();const tt=new jv(T,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(z,it,!1))},this.getSize=function(E){return E.set(z,it)},this.setSize=function(E,H,Y=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,it=H,e.width=Math.floor(E*$),e.height=Math.floor(H*$),Y===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(z*$,it*$).floor()},this.setDrawingBufferSize=function(E,H,Y){z=E,it=H,$=Y,e.width=Math.floor(E*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,H,Y,K){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,H,Y,K),Bt.viewport(N.copy(gt).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Pt)},this.setScissor=function(E,H,Y,K){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,H,Y,K),Bt.scissor(V.copy(Pt).multiplyScalar($).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(E){Bt.setScissorTest(wt=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,Y=!0){let K=0;if(E){let X=!1;if(U!==null){const ft=U.texture.format;X=ft===ql||ft===$l||ft===Xl}if(X){const ft=U.texture.type,xt=ft===oi||ft===Ji||ft===fr||ft===Bs||ft===Gl||ft===Wl,At=Xt.getClearColor(),Dt=Xt.getClearAlpha(),Kt=At.r,Zt=At.g,zt=At.b;xt?(g[0]=Kt,g[1]=Zt,g[2]=zt,g[3]=Dt,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Kt,x[1]=Zt,x[2]=zt,x[3]=Dt,O.clearBufferiv(O.COLOR,0,x))}else K|=O.COLOR_BUFFER_BIT}H&&(K|=O.DEPTH_BUFFER_BIT),Y&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Xt.dispose(),Rt.dispose(),me.dispose(),Ot.dispose(),M.dispose(),j.dispose(),at.dispose(),Se.dispose(),G.dispose(),Ut.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Tr),tt.removeEventListener("sessionend",wr),Xn.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Pe.autoReset,H=Lt.enabled,Y=Lt.autoUpdate,K=Lt.needsUpdate,X=Lt.type;bt(),Pe.autoReset=E,Lt.enabled=H,Lt.autoUpdate=Y,Lt.needsUpdate=K,Lt.type=X}function St(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ne(E){const H=E.target;H.removeEventListener("dispose",ne),Ie(H)}function Ie(E){Ze(E),Ot.remove(E)}function Ze(E){const H=Ot.get(E).programs;H!==void 0&&(H.forEach(function(Y){Ut.releaseProgram(Y)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Y,K,X,ft){H===null&&(H=ke);const xt=X.isMesh&&X.matrixWorld.determinant()<0,At=Qa(E,H,Y,K,X);Bt.setMaterial(K,xt);let Dt=Y.index,Kt=1;if(K.wireframe===!0){if(Dt=ht.getWireframeAttribute(Y),Dt===void 0)return;Kt=2}const Zt=Y.drawRange,zt=Y.attributes.position;let oe=Zt.start*Kt,ve=(Zt.start+Zt.count)*Kt;ft!==null&&(oe=Math.max(oe,ft.start*Kt),ve=Math.min(ve,(ft.start+ft.count)*Kt)),Dt!==null?(oe=Math.max(oe,0),ve=Math.min(ve,Dt.count)):zt!=null&&(oe=Math.max(oe,0),ve=Math.min(ve,zt.count));const Oe=ve-oe;if(Oe<0||Oe===1/0)return;Se.setup(X,K,At,Y,Dt);let Ue,ge=Nt;if(Dt!==null&&(Ue=lt.get(Dt),ge=fe,ge.setIndex(Ue)),X.isMesh)K.wireframe===!0?(Bt.setLineWidth(K.wireframeLinewidth*de()),ge.setMode(O.LINES)):ge.setMode(O.TRIANGLES);else if(X.isLine){let Gt=K.linewidth;Gt===void 0&&(Gt=1),Bt.setLineWidth(Gt*de()),X.isLineSegments?ge.setMode(O.LINES):X.isLineLoop?ge.setMode(O.LINE_LOOP):ge.setMode(O.LINE_STRIP)}else X.isPoints?ge.setMode(O.POINTS):X.isSprite&&ge.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Gi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ge.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Gt=X._multiDrawStarts,Xe=X._multiDrawCounts,xe=X._multiDrawCount,mn=Dt?lt.get(Dt).bytesPerElement:1,Ne=Ot.get(K).currentProgram.getUniforms();for(let Qe=0;Qe<xe;Qe++)Ne.setValue(O,"_gl_DrawID",Qe),ge.render(Gt[Qe]/mn,Xe[Qe])}else if(X.isInstancedMesh)ge.renderInstances(oe,Oe,X.count);else if(Y.isInstancedBufferGeometry){const Gt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Xe=Math.min(Y.instanceCount,Gt);ge.renderInstances(oe,Oe,Xe)}else ge.render(oe,Oe)};function re(E,H,Y){E.transparent===!0&&E.side===Sn&&E.forceSinglePass===!1?(E.side=vn,E.needsUpdate=!0,ls(E,H,Y),E.side=ai,E.needsUpdate=!0,ls(E,H,Y),E.side=Sn):ls(E,H,Y)}this.compile=function(E,H,Y=null){Y===null&&(Y=E),f=me.get(Y),f.init(H),R.push(f),Y.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),E!==Y&&E.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights();const K=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ft=X.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){const At=ft[xt];re(At,Y,X),K.add(At)}else re(ft,Y,X),K.add(ft)}),f=R.pop(),K},this.compileAsync=function(E,H,Y=null){const K=this.compile(E,H,Y);return new Promise(X=>{function ft(){if(K.forEach(function(xt){Ot.get(xt).currentProgram.isReady()&&K.delete(xt)}),K.size===0){X(E);return}setTimeout(ft,10)}ue.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let pn=null;function Ln(E){pn&&pn(E)}function Tr(){Xn.stop()}function wr(){Xn.start()}const Xn=new Jh;Xn.setAnimationLoop(Ln),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(E){pn=E,tt.setAnimationLoop(E),E===null?Xn.stop():Xn.start()},tt.addEventListener("sessionstart",Tr),tt.addEventListener("sessionend",wr),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(H),H=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,H,U),f=me.get(E,R.length),f.init(H),R.push(f),vt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q.setFromProjectionMatrix(vt),nt=this.localClippingEnabled,Q=pt.init(this.clippingPlanes,nt),m=Rt.get(E,P.length),m.init(),P.push(m),tt.enabled===!0&&tt.isPresenting===!0){const ft=T.xr.getDepthSensingMesh();ft!==null&&Zs(ft,H,-1/0,T.sortObjects)}Zs(E,H,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(ut,mt),De=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,De&&Xt.addToRenderList(m,E),this.info.render.frame++,Q===!0&&pt.beginShadows();const Y=f.state.shadowsArray;Lt.render(Y,E,H),Q===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,X=m.transmissive;if(f.setupLights(),H.isArrayCamera){const ft=H.cameras;if(X.length>0)for(let xt=0,At=ft.length;xt<At;xt++){const Dt=ft[xt];Js(K,X,E,Dt)}De&&Xt.render(E);for(let xt=0,At=ft.length;xt<At;xt++){const Dt=ft[xt];Ar(m,E,Dt,Dt.viewport)}}else X.length>0&&Js(K,X,E,H),De&&Xt.render(E),Ar(m,E,H);U!==null&&I===0&&(L.updateMultisampleRenderTarget(U),L.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(T,E,H),Se.resetDefaultState(),y=-1,b=null,R.pop(),R.length>0?(f=R[R.length-1],Q===!0&&pt.setGlobalState(T.clippingPlanes,f.state.camera)):f=null,P.pop(),P.length>0?m=P[P.length-1]:m=null};function Zs(E,H,Y,K){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){K&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(vt);const xt=at.update(E),At=E.material;At.visible&&m.push(E,xt,At,Y,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const xt=at.update(E),At=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ht.copy(xt.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(vt)),Array.isArray(At)){const Dt=xt.groups;for(let Kt=0,Zt=Dt.length;Kt<Zt;Kt++){const zt=Dt[Kt],oe=At[zt.materialIndex];oe&&oe.visible&&m.push(E,xt,oe,Y,Ht.z,zt)}}else At.visible&&m.push(E,xt,At,Y,Ht.z,null)}}const ft=E.children;for(let xt=0,At=ft.length;xt<At;xt++)Zs(ft[xt],H,Y,K)}function Ar(E,H,Y,K){const X=E.opaque,ft=E.transmissive,xt=E.transparent;f.setupLightsView(Y),Q===!0&&pt.setGlobalState(T.clippingPlanes,Y),K&&Bt.viewport(N.copy(K)),X.length>0&&os(X,H,Y),ft.length>0&&os(ft,H,Y),xt.length>0&&os(xt,H,Y),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Js(E,H,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new Qi(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?vr:oi,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ft=f.state.transmissionRenderTarget[K.id],xt=K.viewport||N;ft.setSize(xt.z*T.transmissionResolutionScale,xt.w*T.transmissionResolutionScale);const At=T.getRenderTarget();T.setRenderTarget(ft),T.getClearColor(J),et=T.getClearAlpha(),et<1&&T.setClearColor(16777215,.5),T.clear(),De&&Xt.render(Y);const Dt=T.toneMapping;T.toneMapping=Ti;const Kt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),Q===!0&&pt.setGlobalState(T.clippingPlanes,K),os(E,Y,K),L.updateMultisampleRenderTarget(ft),L.updateRenderTargetMipmap(ft),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let zt=0,oe=H.length;zt<oe;zt++){const ve=H[zt],Oe=ve.object,Ue=ve.geometry,ge=ve.material,Gt=ve.group;if(ge.side===Sn&&Oe.layers.test(K.layers)){const Xe=ge.side;ge.side=vn,ge.needsUpdate=!0,Qs(Oe,Y,K,Ue,ge,Gt),ge.side=Xe,ge.needsUpdate=!0,Zt=!0}}Zt===!0&&(L.updateMultisampleRenderTarget(ft),L.updateRenderTargetMipmap(ft))}T.setRenderTarget(At),T.setClearColor(J,et),Kt!==void 0&&(K.viewport=Kt),T.toneMapping=Dt}function os(E,H,Y){const K=H.isScene===!0?H.overrideMaterial:null;for(let X=0,ft=E.length;X<ft;X++){const xt=E[X],At=xt.object,Dt=xt.geometry,Kt=K===null?xt.material:K,Zt=xt.group;At.layers.test(Y.layers)&&Qs(At,H,Y,Dt,Kt,Zt)}}function Qs(E,H,Y,K,X,ft){E.onBeforeRender(T,H,Y,K,X,ft),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(T,H,Y,K,E,ft),X.transparent===!0&&X.side===Sn&&X.forceSinglePass===!1?(X.side=vn,X.needsUpdate=!0,T.renderBufferDirect(Y,H,K,X,E,ft),X.side=ai,X.needsUpdate=!0,T.renderBufferDirect(Y,H,K,X,E,ft),X.side=Sn):T.renderBufferDirect(Y,H,K,X,E,ft),E.onAfterRender(T,H,Y,K,X,ft)}function ls(E,H,Y){H.isScene!==!0&&(H=ke);const K=Ot.get(E),X=f.state.lights,ft=f.state.shadowsArray,xt=X.state.version,At=Ut.getParameters(E,X.state,ft,H,Y),Dt=Ut.getProgramCacheKey(At);let Kt=K.programs;K.environment=E.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(E.isMeshStandardMaterial?j:M).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Kt===void 0&&(E.addEventListener("dispose",ne),Kt=new Map,K.programs=Kt);let Zt=Kt.get(Dt);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===xt)return Rr(E,At),Zt}else At.uniforms=Ut.getUniforms(E),E.onBeforeCompile(At,T),Zt=Ut.acquireProgram(At,Dt),Kt.set(Dt,Zt),K.uniforms=At.uniforms;const zt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=pt.uniform),Rr(E,At),K.needsLights=eo(E),K.lightsStateVersion=xt,K.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function Cr(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Ma.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Rr(E,H){const Y=Ot.get(E);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Qa(E,H,Y,K,X){H.isScene!==!0&&(H=ke),L.resetTextureUnits();const ft=H.fog,xt=K.isMeshStandardMaterial?H.environment:null,At=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Vs,Dt=(K.isMeshStandardMaterial?j:M).get(K.envMap||xt),Kt=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Zt=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),zt=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,ve=!!Y.morphAttributes.color;let Oe=Ti;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Oe=T.toneMapping);const Ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ge=Ue!==void 0?Ue.length:0,Gt=Ot.get(K),Xe=f.state.lights;if(Q===!0&&(nt===!0||E!==b)){const He=E===b&&K.id===y;pt.setState(K,E,He)}let xe=!1;K.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Xe.state.version||Gt.outputColorSpace!==At||X.isBatchedMesh&&Gt.batching===!1||!X.isBatchedMesh&&Gt.batching===!0||X.isBatchedMesh&&Gt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Gt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Gt.instancing===!1||!X.isInstancedMesh&&Gt.instancing===!0||X.isSkinnedMesh&&Gt.skinning===!1||!X.isSkinnedMesh&&Gt.skinning===!0||X.isInstancedMesh&&Gt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Gt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Gt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Gt.instancingMorph===!1&&X.morphTexture!==null||Gt.envMap!==Dt||K.fog===!0&&Gt.fog!==ft||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==pt.numPlanes||Gt.numIntersection!==pt.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==Zt||Gt.morphTargets!==zt||Gt.morphNormals!==oe||Gt.morphColors!==ve||Gt.toneMapping!==Oe||Gt.morphTargetsCount!==ge)&&(xe=!0):(xe=!0,Gt.__version=K.version);let mn=Gt.currentProgram;xe===!0&&(mn=ls(K,H,X));let Ne=!1,Qe=!1,Fi=!1;const Le=mn.getUniforms(),cn=Gt.uniforms;if(Bt.useProgram(mn.program)&&(Ne=!0,Qe=!0,Fi=!0),K.id!==y&&(y=K.id,Qe=!0),Ne||b!==E){Bt.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),gp(st),_p(st),Le.setValue(O,"projectionMatrix",st)):Le.setValue(O,"projectionMatrix",E.projectionMatrix),Le.setValue(O,"viewMatrix",E.matrixWorldInverse);const $e=Le.map.cameraPosition;$e!==void 0&&$e.setValue(O,te.setFromMatrixPosition(E.matrixWorld)),he.logarithmicDepthBuffer&&Le.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Le.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Qe=!0,Fi=!0)}if(X.isSkinnedMesh){Le.setOptional(O,X,"bindMatrix"),Le.setOptional(O,X,"bindMatrixInverse");const He=X.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Le.setValue(O,"boneTexture",He.boneTexture,L))}X.isBatchedMesh&&(Le.setOptional(O,X,"batchingTexture"),Le.setValue(O,"batchingTexture",X._matricesTexture,L),Le.setOptional(O,X,"batchingIdTexture"),Le.setValue(O,"batchingIdTexture",X._indirectTexture,L),Le.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Le.setValue(O,"batchingColorTexture",X._colorsTexture,L));const en=Y.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Yt.update(X,Y,mn),(Qe||Gt.receiveShadow!==X.receiveShadow)&&(Gt.receiveShadow=X.receiveShadow,Le.setValue(O,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(cn.envMap.value=Dt,cn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(cn.envMapIntensity.value=H.environmentIntensity),Qe&&(Le.setValue(O,"toneMappingExposure",T.toneMappingExposure),Gt.needsLights&&to(cn,Fi),ft&&K.fog===!0&&Mt.refreshFogUniforms(cn,ft),Mt.refreshMaterialUniforms(cn,K,$,it,f.state.transmissionRenderTarget[E.id]),Ma.upload(O,Cr(Gt),cn,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ma.upload(O,Cr(Gt),cn,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Le.setValue(O,"center",X.center),Le.setValue(O,"modelViewMatrix",X.modelViewMatrix),Le.setValue(O,"normalMatrix",X.normalMatrix),Le.setValue(O,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const He=K.uniformsGroups;for(let $e=0,cs=He.length;$e<cs;$e++){const $n=He[$e];G.update($n,mn),G.bind($n,mn)}}return mn}function to(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function eo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,H,Y){Ot.get(E.texture).__webglTexture=H,Ot.get(E.depthTexture).__webglTexture=Y;const K=Ot.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const Y=Ot.get(E);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const no=O.createFramebuffer();this.setRenderTarget=function(E,H=0,Y=0){U=E,F=H,I=Y;let K=!0,X=null,ft=!1,xt=!1;if(E){const Dt=Ot.get(E);if(Dt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Dt.__webglFramebuffer===void 0)L.setupRenderTarget(E);else if(Dt.__hasExternalTextures)L.rebindTextures(E,Ot.get(E.texture).__webglTexture,Ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const zt=E.depthTexture;if(Dt.__boundDepthTexture!==zt){if(zt!==null&&Ot.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(E)}}const Kt=E.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(xt=!0);const Zt=Ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Zt[H])?X=Zt[H][Y]:X=Zt[H],ft=!0):E.samples>0&&L.useMultisampledRTT(E)===!1?X=Ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Zt)?X=Zt[Y]:X=Zt,N.copy(E.viewport),V.copy(E.scissor),W=E.scissorTest}else N.copy(gt).multiplyScalar($).floor(),V.copy(Pt).multiplyScalar($).floor(),W=wt;if(Y!==0&&(X=no),Bt.bindFramebuffer(O.FRAMEBUFFER,X)&&K&&Bt.drawBuffers(E,X),Bt.viewport(N),Bt.scissor(V),Bt.setScissorTest(W),ft){const Dt=Ot.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,Y)}else if(xt){const Dt=Ot.get(E.texture),Kt=H;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,Y,Kt)}else if(E!==null&&Y!==0){const Dt=Ot.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Dt.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(E,H,Y,K,X,ft,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){Bt.bindFramebuffer(O.FRAMEBUFFER,At);try{const Dt=E.texture,Kt=Dt.format,Zt=Dt.type;if(!he.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-K&&Y>=0&&Y<=E.height-X&&O.readPixels(H,Y,K,X,se.convert(Kt),se.convert(Zt),ft)}finally{const Dt=U!==null?Ot.get(U).__webglFramebuffer:null;Bt.bindFramebuffer(O.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,H,Y,K,X,ft,xt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){const Dt=E.texture,Kt=Dt.format,Zt=Dt.type;if(!he.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-K&&Y>=0&&Y<=E.height-X){Bt.bindFramebuffer(O.FRAMEBUFFER,At);const zt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,zt),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(H,Y,K,X,se.convert(Kt),se.convert(Zt),0);const oe=U!==null?Ot.get(U).__webglFramebuffer:null;Bt.bindFramebuffer(O.FRAMEBUFFER,oe);const ve=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mp(O,ve,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,zt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.deleteBuffer(zt),O.deleteSync(ve),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,Y=0){E.isTexture!==!0&&(Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-Y),X=Math.floor(E.image.width*K),ft=Math.floor(E.image.height*K),xt=H!==null?H.x:0,At=H!==null?H.y:0;L.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,xt,At,X,ft),Bt.unbindTexture()};const io=O.createFramebuffer(),so=O.createFramebuffer();this.copyTextureToTexture=function(E,H,Y=null,K=null,X=0,ft=null){E.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],H=arguments[2],ft=arguments[3]||0,Y=null),ft===null&&(X!==0?(Gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=X,X=0):ft=0);let xt,At,Dt,Kt,Zt,zt,oe,ve,Oe;const Ue=E.isCompressedTexture?E.mipmaps[ft]:E.image;if(Y!==null)xt=Y.max.x-Y.min.x,At=Y.max.y-Y.min.y,Dt=Y.isBox3?Y.max.z-Y.min.z:1,Kt=Y.min.x,Zt=Y.min.y,zt=Y.isBox3?Y.min.z:0;else{const en=Math.pow(2,-X);xt=Math.floor(Ue.width*en),At=Math.floor(Ue.height*en),E.isDataArrayTexture?Dt=Ue.depth:E.isData3DTexture?Dt=Math.floor(Ue.depth*en):Dt=1,Kt=0,Zt=0,zt=0}K!==null?(oe=K.x,ve=K.y,Oe=K.z):(oe=0,ve=0,Oe=0);const ge=se.convert(H.format),Gt=se.convert(H.type);let Xe;H.isData3DTexture?(L.setTexture3D(H,0),Xe=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(L.setTexture2DArray(H,0),Xe=O.TEXTURE_2D_ARRAY):(L.setTexture2D(H,0),Xe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const xe=O.getParameter(O.UNPACK_ROW_LENGTH),mn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ne=O.getParameter(O.UNPACK_SKIP_PIXELS),Qe=O.getParameter(O.UNPACK_SKIP_ROWS),Fi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,zt);const Le=E.isDataArrayTexture||E.isData3DTexture,cn=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const en=Ot.get(E),He=Ot.get(H),$e=Ot.get(en.__renderTarget),cs=Ot.get(He.__renderTarget);Bt.bindFramebuffer(O.READ_FRAMEBUFFER,$e.__webglFramebuffer),Bt.bindFramebuffer(O.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let $n=0;$n<Dt;$n++)Le&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(E).__webglTexture,X,zt+$n),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(H).__webglTexture,ft,Oe+$n)),O.blitFramebuffer(Kt,Zt,xt,At,oe,ve,xt,At,O.DEPTH_BUFFER_BIT,O.NEAREST);Bt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Ot.has(E)){const en=Ot.get(E),He=Ot.get(H);Bt.bindFramebuffer(O.READ_FRAMEBUFFER,io),Bt.bindFramebuffer(O.DRAW_FRAMEBUFFER,so);for(let $e=0;$e<Dt;$e++)Le?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,X,zt+$e):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,X),cn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.__webglTexture,ft,Oe+$e):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,He.__webglTexture,ft),X!==0?O.blitFramebuffer(Kt,Zt,xt,At,oe,ve,xt,At,O.COLOR_BUFFER_BIT,O.NEAREST):cn?O.copyTexSubImage3D(Xe,ft,oe,ve,Oe+$e,Kt,Zt,xt,At):O.copyTexSubImage2D(Xe,ft,oe,ve,Kt,Zt,xt,At);Bt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else cn?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Xe,ft,oe,ve,Oe,xt,At,Dt,ge,Gt,Ue.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Xe,ft,oe,ve,Oe,xt,At,Dt,ge,Ue.data):O.texSubImage3D(Xe,ft,oe,ve,Oe,xt,At,Dt,ge,Gt,Ue):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,oe,ve,xt,At,ge,Gt,Ue.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,oe,ve,Ue.width,Ue.height,ge,Ue.data):O.texSubImage2D(O.TEXTURE_2D,ft,oe,ve,xt,At,ge,Gt,Ue);O.pixelStorei(O.UNPACK_ROW_LENGTH,xe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Fi),ft===0&&H.generateMipmaps&&O.generateMipmap(Xe),Bt.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Y=null,K=null,X=0){return E.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,E=arguments[2],H=arguments[3],X=arguments[4]||0),Gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,Y,K,X)},this.initRenderTarget=function(E){Ot.get(E).__webglFramebuffer===void 0&&L.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?L.setTextureCube(E,0):E.isData3DTexture?L.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?L.setTexture2DArray(E,0):L.setTexture2D(E,0),Bt.unbindTexture()},this.resetState=function(){F=0,I=0,U=null,Bt.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const qu={type:"change"},sc={type:"start"},id={type:"end"},ca=new xr,ju=new bi,Qv=Math.cos(70*ws.DEG2RAD),qe=new k,_n=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ho=1e-6;class tx extends mm{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Fn,this._lastTargetPosition=new k,this._quat=new Fn().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yu,this._sphericalDelta=new yu,this._scale=1,this._panOffset=new k,this._rotateStart=new jt,this._rotateEnd=new jt,this._rotateDelta=new jt,this._panStart=new jt,this._panEnd=new jt,this._panDelta=new jt,this._dollyStart=new jt,this._dollyEnd=new jt,this._dollyDelta=new jt,this._dollyDirection=new k,this._mouse=new jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nx.bind(this),this._onPointerDown=ex.bind(this),this._onPointerUp=ix.bind(this),this._onContextMenu=ux.bind(this),this._onMouseWheel=ax.bind(this),this._onKeyDown=ox.bind(this),this._onTouchStart=lx.bind(this),this._onTouchMove=cx.bind(this),this._onMouseDown=sx.bind(this),this._onMouseMove=rx.bind(this),this._interceptControlDown=hx.bind(this),this._interceptControlUp=dx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qu),this.update(),this.state=Ce.NONE}update(t=null){const e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=qe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ca.origin.copy(this.object.position),ca.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ca.direction))<Qv?this.object.lookAt(this.target):(ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),ca.intersectPlane(ju,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ho||this._lastTargetPosition.distanceToSquared(this.target)>Ho?(this.dispatchEvent(qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;qe.copy(s).sub(this.target);let r=qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ex(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function nx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ix(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(id),this.state=Ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ce.DOLLY;break;case Rs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ce.ROTATE}break;case Rs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(sc)}function rx(n){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ax(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(n.preventDefault(),this.dispatchEvent(sc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(id))}function ox(n){this.enabled!==!1&&this._handleKeyDown(n)}function lx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ce.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ce.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(sc)}function cx(n){switch(this._trackPointer(n),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ce.NONE}}function ux(n){this.enabled!==!1&&n.preventDefault()}function hx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class sd extends Li{constructor(t){super(t)}load(t,e,i,s){const r=this,a=new tc(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},i,s)}parse(t){function e(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*h===u.byteLength)return!0;const g=[115,111,108,105,100];for(let x=0;x<5;x++)if(i(g,u,x))return!1;return!0}function i(c,u,h){for(let d=0,p=c.length;d<p;d++)if(c[d]!==u.getUint8(h+d))return!1;return!0}function s(c){const u=new DataView(c),h=u.getUint32(80,!0);let d,p,g,x=!1,m,f,P,R,T;for(let N=0;N<70;N++)u.getUint32(N,!1)==1129270351&&u.getUint8(N+4)==82&&u.getUint8(N+5)==61&&(x=!0,m=new Float32Array(h*3*3),f=u.getUint8(N+6)/255,P=u.getUint8(N+7)/255,R=u.getUint8(N+8)/255,T=u.getUint8(N+9)/255);const D=84,F=50,I=new We,U=new Float32Array(h*3*3),y=new Float32Array(h*3*3),b=new Qt;for(let N=0;N<h;N++){const V=D+N*F,W=u.getFloat32(V,!0),J=u.getFloat32(V+4,!0),et=u.getFloat32(V+8,!0);if(x){const z=u.getUint16(V+48,!0);(z&32768)===0?(d=(z&31)/31,p=(z>>5&31)/31,g=(z>>10&31)/31):(d=f,p=P,g=R)}for(let z=1;z<=3;z++){const it=V+z*12,$=N*3*3+(z-1)*3;U[$]=u.getFloat32(it,!0),U[$+1]=u.getFloat32(it+4,!0),U[$+2]=u.getFloat32(it+8,!0),y[$]=W,y[$+1]=J,y[$+2]=et,x&&(b.setRGB(d,p,g,ze),m[$]=b.r,m[$+1]=b.g,m[$+2]=b.b)}}return I.setAttribute("position",new dn(U,3)),I.setAttribute("normal",new dn(y,3)),x&&(I.setAttribute("color",new dn(m,3)),I.hasColors=!0,I.alpha=T),I}function r(c){const u=new We,h=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),f=new RegExp("normal"+x+x+x,"g"),P=[],R=[],T=[],D=new k;let F,I=0,U=0,y=0;for(;(F=h.exec(c))!==null;){U=y;const b=F[0],N=(F=p.exec(b))!==null?F[1]:"";for(T.push(N);(F=d.exec(b))!==null;){let J=0,et=0;const z=F[0];for(;(F=f.exec(z))!==null;)D.x=parseFloat(F[1]),D.y=parseFloat(F[2]),D.z=parseFloat(F[3]),et++;for(;(F=m.exec(z))!==null;)P.push(parseFloat(F[1]),parseFloat(F[2]),parseFloat(F[3])),R.push(D.x,D.y,D.z),J++,y++;et!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),J!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const V=U,W=y-U;u.userData.groupNames=T,u.addGroup(V,W,I),I++}return u.setAttribute("position",new Te(P,3)),u.setAttribute("normal",new Te(R,3)),u}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=o(t);return e(l)?s(l):r(a(t))}}class Yu extends lm{constructor(t){super(t)}parse(t){function e(z){switch(z.image_type){case d:case x:if(z.colormap_length>256||z.colormap_size!==24||z.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(z.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+z.image_type)}if(z.width<=0||z.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(z.pixel_size!==8&&z.pixel_size!==16&&z.pixel_size!==24&&z.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+z.pixel_size)}function i(z,it,$,ut,mt){let gt,Pt;const wt=$.pixel_size>>3,q=$.width*$.height*wt;if(it&&(Pt=mt.subarray(ut,ut+=$.colormap_length*($.colormap_size>>3))),z){gt=new Uint8Array(q);let Q,nt,st,vt=0;const te=new Uint8Array(wt);for(;vt<q;)if(Q=mt[ut++],nt=(Q&127)+1,Q&128){for(st=0;st<wt;++st)te[st]=mt[ut++];for(st=0;st<nt;++st)gt.set(te,vt+st*wt);vt+=wt*nt}else{for(nt*=wt,st=0;st<nt;++st)gt[vt+st]=mt[ut++];vt+=nt}}else gt=mt.subarray(ut,ut+=it?$.width*$.height:q);return{pixel_data:gt,palettes:Pt}}function s(z,it,$,ut,mt,gt,Pt,wt,q){const Q=q;let nt,st=0,vt,te;const Ht=b.width;for(te=it;te!==ut;te+=$)for(vt=mt;vt!==Pt;vt+=gt,st++)nt=wt[st],z[(vt+Ht*te)*4+3]=255,z[(vt+Ht*te)*4+2]=Q[nt*3+0],z[(vt+Ht*te)*4+1]=Q[nt*3+1],z[(vt+Ht*te)*4+0]=Q[nt*3+2];return z}function r(z,it,$,ut,mt,gt,Pt,wt){let q,Q=0,nt,st;const vt=b.width;for(st=it;st!==ut;st+=$)for(nt=mt;nt!==Pt;nt+=gt,Q+=2)q=wt[Q+0]+(wt[Q+1]<<8),z[(nt+vt*st)*4+0]=(q&31744)>>7,z[(nt+vt*st)*4+1]=(q&992)>>2,z[(nt+vt*st)*4+2]=(q&31)<<3,z[(nt+vt*st)*4+3]=q&32768?0:255;return z}function a(z,it,$,ut,mt,gt,Pt,wt){let q=0,Q,nt;const st=b.width;for(nt=it;nt!==ut;nt+=$)for(Q=mt;Q!==Pt;Q+=gt,q+=3)z[(Q+st*nt)*4+3]=255,z[(Q+st*nt)*4+2]=wt[q+0],z[(Q+st*nt)*4+1]=wt[q+1],z[(Q+st*nt)*4+0]=wt[q+2];return z}function o(z,it,$,ut,mt,gt,Pt,wt){let q=0,Q,nt;const st=b.width;for(nt=it;nt!==ut;nt+=$)for(Q=mt;Q!==Pt;Q+=gt,q+=4)z[(Q+st*nt)*4+2]=wt[q+0],z[(Q+st*nt)*4+1]=wt[q+1],z[(Q+st*nt)*4+0]=wt[q+2],z[(Q+st*nt)*4+3]=wt[q+3];return z}function l(z,it,$,ut,mt,gt,Pt,wt){let q,Q=0,nt,st;const vt=b.width;for(st=it;st!==ut;st+=$)for(nt=mt;nt!==Pt;nt+=gt,Q++)q=wt[Q],z[(nt+vt*st)*4+0]=q,z[(nt+vt*st)*4+1]=q,z[(nt+vt*st)*4+2]=q,z[(nt+vt*st)*4+3]=255;return z}function c(z,it,$,ut,mt,gt,Pt,wt){let q=0,Q,nt;const st=b.width;for(nt=it;nt!==ut;nt+=$)for(Q=mt;Q!==Pt;Q+=gt,q+=2)z[(Q+st*nt)*4+0]=wt[q+0],z[(Q+st*nt)*4+1]=wt[q+0],z[(Q+st*nt)*4+2]=wt[q+0],z[(Q+st*nt)*4+3]=wt[q+1];return z}function u(z,it,$,ut,mt){let gt,Pt,wt,q,Q,nt;switch((b.flags&P)>>R){default:case F:gt=0,wt=1,Q=it,Pt=0,q=1,nt=$;break;case T:gt=0,wt=1,Q=it,Pt=$-1,q=-1,nt=-1;break;case I:gt=it-1,wt=-1,Q=-1,Pt=0,q=1,nt=$;break;case D:gt=it-1,wt=-1,Q=-1,Pt=$-1,q=-1,nt=-1;break}if(W)switch(b.pixel_size){case 8:l(z,Pt,q,nt,gt,wt,Q,ut);break;case 16:c(z,Pt,q,nt,gt,wt,Q,ut);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(b.pixel_size){case 8:s(z,Pt,q,nt,gt,wt,Q,ut,mt);break;case 16:r(z,Pt,q,nt,gt,wt,Q,ut);break;case 24:a(z,Pt,q,nt,gt,wt,Q,ut);break;case 32:o(z,Pt,q,nt,gt,wt,Q,ut);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return z}const h=0,d=1,p=2,g=3,x=9,m=10,f=11,P=48,R=4,T=0,D=1,F=2,I=3;if(t.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let U=0;const y=new Uint8Array(t),b={id_length:y[U++],colormap_type:y[U++],image_type:y[U++],colormap_index:y[U++]|y[U++]<<8,colormap_length:y[U++]|y[U++]<<8,colormap_size:y[U++],origin:[y[U++]|y[U++]<<8,y[U++]|y[U++]<<8],width:y[U++]|y[U++]<<8,height:y[U++]|y[U++]<<8,pixel_size:y[U++],flags:y[U++]};if(e(b),b.id_length+U>t.length)throw new Error("THREE.TGALoader: No data.");U+=b.id_length;let N=!1,V=!1,W=!1;switch(b.image_type){case x:N=!0,V=!0;break;case d:V=!0;break;case m:N=!0;break;case p:break;case f:N=!0,W=!0;break;case g:W=!0;break}const J=new Uint8Array(b.width*b.height*4),et=i(N,V,b,U,y);return u(J,b.width,b.height,et.pixel_data,et.palettes),{data:J,width:b.width,height:b.height,flipY:!0,generateMipmaps:!0,minFilter:ei}}}class fx extends Li{load(t,e,i,s){const r=this,a=r.path===""?Zh.extractUrlBase(t):r.path,o=new tc(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(l){try{e(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},i,s)}parse(t,e){function i(v,_){const w=[],S=v.childNodes;for(let A=0,Z=S.length;A<Z;A++){const rt=S[A];rt.nodeName===_&&w.push(rt)}return w}function s(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),w=new Array(_.length);for(let S=0,A=_.length;S<A;S++)w[S]=_[S];return w}function r(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),w=new Array(_.length);for(let S=0,A=_.length;S<A;S++)w[S]=parseFloat(_[S]);return w}function a(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),w=new Array(_.length);for(let S=0,A=_.length;S<A;S++)w[S]=parseInt(_[S]);return w}function o(v){return v.substring(1)}function l(){return"three_default_"+$n++}function c(v){return Object.keys(v).length===0}function u(v){return{unit:h(i(v,"unit")[0]),upAxis:d(i(v,"up_axis")[0])}}function h(v){return v!==void 0&&v.hasAttribute("meter")===!0?parseFloat(v.getAttribute("meter")):1}function d(v){return v!==void 0?v.textContent:"Y_UP"}function p(v,_,w,S){const A=i(v,_)[0];if(A!==void 0){const Z=i(A,w);for(let rt=0;rt<Z.length;rt++)S(Z[rt])}}function g(v,_){for(const w in v){const S=v[w];S.build=_(v[w])}}function x(v,_){return v.build!==void 0||(v.build=_(v)),v.build}function m(v){const _={sources:{},samplers:{},channels:{}};let w=!1;for(let S=0,A=v.childNodes.length;S<A;S++){const Z=v.childNodes[S];if(Z.nodeType!==1)continue;let rt;switch(Z.nodeName){case"source":rt=Z.getAttribute("id"),_.sources[rt]=tt(Z);break;case"sampler":rt=Z.getAttribute("id"),_.samplers[rt]=f(Z);break;case"channel":rt=Z.getAttribute("target"),_.channels[rt]=P(Z);break;case"animation":m(Z),w=!0;break;default:console.log(Z)}}w===!1&&($t.animations[v.getAttribute("id")||ws.generateUUID()]=_)}function f(v){const _={inputs:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const Z=o(A.getAttribute("source")),rt=A.getAttribute("semantic");_.inputs[rt]=Z;break}}return _}function P(v){const _={};let S=v.getAttribute("target").split("/");const A=S.shift();let Z=S.shift();const rt=Z.indexOf("(")!==-1,Ct=Z.indexOf(".")!==-1;if(Ct)S=Z.split("."),Z=S.shift(),_.member=S.shift();else if(rt){const _t=Z.split("(");Z=_t.shift();for(let Et=0;Et<_t.length;Et++)_t[Et]=parseInt(_t[Et].replace(/\)/,""));_.indices=_t}return _.id=A,_.sid=Z,_.arraySyntax=rt,_.memberSyntax=Ct,_.sampler=o(v.getAttribute("source")),_}function R(v){const _=[],w=v.channels,S=v.samplers,A=v.sources;for(const Z in w)if(w.hasOwnProperty(Z)){const rt=w[Z],Ct=S[rt.sampler],_t=Ct.inputs.INPUT,Et=Ct.inputs.OUTPUT,kt=A[_t],dt=A[Et],Ft=D(rt,kt,dt);b(Ft,_)}return _}function T(v){return x($t.animations[v],R)}function D(v,_,w){const S=$t.nodes[v.id],A=oe(S.id),Z=S.transforms[v.sid],rt=S.matrix.clone().transpose();let Ct,_t,Et,kt,dt,Ft;const It={};switch(Z){case"matrix":for(Et=0,kt=_.array.length;Et<kt;Et++)if(Ct=_.array[Et],_t=Et*w.stride,It[Ct]===void 0&&(It[Ct]={}),v.arraySyntax===!0){const Be=w.array[_t],Ee=v.indices[0]+4*v.indices[1];It[Ct][Ee]=Be}else for(dt=0,Ft=w.stride;dt<Ft;dt++)It[Ct][dt]=w.array[_t+dt];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break}const Wt=F(It,rt);return{name:A.uuid,keyframes:Wt}}function F(v,_){const w=[];for(const A in v)w.push({time:parseFloat(A),value:v[A]});w.sort(S);for(let A=0;A<16;A++)N(w,A,_.elements[A]);return w;function S(A,Z){return A.time-Z.time}}const I=new k,U=new k,y=new Fn;function b(v,_){const w=v.keyframes,S=v.name,A=[],Z=[],rt=[],Ct=[];for(let _t=0,Et=w.length;_t<Et;_t++){const kt=w[_t],dt=kt.time,Ft=kt.value;H.fromArray(Ft).transpose(),H.decompose(I,y,U),A.push(dt),Z.push(I.x,I.y,I.z),rt.push(y.x,y.y,y.z,y.w),Ct.push(U.x,U.y,U.z)}return Z.length>0&&_.push(new Ws(S+".position",A,Z)),rt.length>0&&_.push(new br(S+".quaternion",A,rt)),Ct.length>0&&_.push(new Ws(S+".scale",A,Ct)),_}function N(v,_,w){let S,A=!0,Z,rt;for(Z=0,rt=v.length;Z<rt;Z++)S=v[Z],S.value[_]===void 0?S.value[_]=null:A=!1;if(A===!0)for(Z=0,rt=v.length;Z<rt;Z++)S=v[Z],S.value[_]=w;else V(v,_)}function V(v,_){let w,S;for(let A=0,Z=v.length;A<Z;A++){const rt=v[A];if(rt.value[_]===null){if(w=W(v,A,_),S=J(v,A,_),w===null){rt.value[_]=S.value[_];continue}if(S===null){rt.value[_]=w.value[_];continue}et(rt,w,S,_)}}}function W(v,_,w){for(;_>=0;){const S=v[_];if(S.value[w]!==null)return S;_--}return null}function J(v,_,w){for(;_<v.length;){const S=v[_];if(S.value[w]!==null)return S;_++}return null}function et(v,_,w,S){if(w.time-_.time===0){v.value[S]=_.value[S];return}v.value[S]=(v.time-_.time)*(w.value[S]-_.value[S])/(w.time-_.time)+_.value[S]}function z(v){const _={name:v.getAttribute("id")||"default",start:parseFloat(v.getAttribute("start")||0),end:parseFloat(v.getAttribute("end")||0),animations:[]};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":_.animations.push(o(A.getAttribute("url")));break}}$t.clips[v.getAttribute("id")]=_}function it(v){const _=[],w=v.name,S=v.end-v.start||-1,A=v.animations;for(let Z=0,rt=A.length;Z<rt;Z++){const Ct=T(A[Z]);for(let _t=0,Et=Ct.length;_t<Et;_t++)_.push(Ct[_t])}return new gu(w,S,_)}function $(v){return x($t.clips[v],it)}function ut(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"skin":_.id=o(A.getAttribute("source")),_.skin=mt(A);break;case"morph":_.id=o(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}$t.controllers[v.getAttribute("id")]=_}function mt(v){const _={sources:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=r(A.textContent);break;case"source":const Z=A.getAttribute("id");_.sources[Z]=tt(A);break;case"joints":_.joints=gt(A);break;case"vertex_weights":_.vertexWeights=Pt(A);break}}return _}function gt(v){const _={inputs:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const Z=A.getAttribute("semantic"),rt=o(A.getAttribute("source"));_.inputs[Z]=rt;break}}return _}function Pt(v){const _={inputs:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const Z=A.getAttribute("semantic"),rt=o(A.getAttribute("source")),Ct=parseInt(A.getAttribute("offset"));_.inputs[Z]={id:rt,offset:Ct};break;case"vcount":_.vcount=a(A.textContent);break;case"v":_.v=a(A.textContent);break}}return _}function wt(v){const _={id:v.id},w=$t.geometries[_.id];return v.skin!==void 0&&(_.skin=q(v.skin),w.sources.skinIndices=_.skin.indices,w.sources.skinWeights=_.skin.weights),_}function q(v){const w={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},S=v.sources,A=v.vertexWeights,Z=A.vcount,rt=A.v,Ct=A.inputs.JOINT.offset,_t=A.inputs.WEIGHT.offset,Et=v.sources[v.joints.inputs.JOINT],kt=v.sources[v.joints.inputs.INV_BIND_MATRIX],dt=S[A.inputs.WEIGHT.id].array;let Ft=0,It,Wt,Vt;for(It=0,Vt=Z.length;It<Vt;It++){const Ee=Z[It],ye=[];for(Wt=0;Wt<Ee;Wt++){const be=rt[Ft+Ct],qn=rt[Ft+_t],gn=dt[qn];ye.push({index:be,weight:gn}),Ft+=2}for(ye.sort(Be),Wt=0;Wt<4;Wt++){const be=ye[Wt];be!==void 0?(w.indices.array.push(be.index),w.weights.array.push(be.weight)):(w.indices.array.push(0),w.weights.array.push(0))}}for(v.bindShapeMatrix?w.bindMatrix=new Jt().fromArray(v.bindShapeMatrix).transpose():w.bindMatrix=new Jt().identity(),It=0,Vt=Et.array.length;It<Vt;It++){const Ee=Et.array[It],ye=new Jt().fromArray(kt.array,It*kt.stride).transpose();w.joints.push({name:Ee,boneInverse:ye})}return w;function Be(Ee,ye){return ye.weight-Ee.weight}}function Q(v){return x($t.controllers[v],wt)}function nt(v){const _={init_from:i(v,"init_from")[0].textContent};$t.images[v.getAttribute("id")]=_}function st(v){return v.build!==void 0?v.build:v.init_from}function vt(v){const _=$t.images[v];return _!==void 0?x(_,st):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",v),null)}function te(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":_.profile=Ht(A);break}}$t.effects[v.getAttribute("id")]=_}function Ht(v){const _={surfaces:{},samplers:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"newparam":ke(A,_);break;case"technique":_.technique=O(A);break;case"extra":_.extra=Ot(A);break}}return _}function ke(v,_){const w=v.getAttribute("sid");for(let S=0,A=v.childNodes.length;S<A;S++){const Z=v.childNodes[S];if(Z.nodeType===1)switch(Z.nodeName){case"surface":_.surfaces[w]=De(Z);break;case"sampler2D":_.samplers[w]=de(Z);break}}}function De(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"init_from":_.init_from=A.textContent;break}}return _}function de(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"source":_.source=A.textContent;break}}return _}function O(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=A.nodeName,_.parameters=fn(A);break;case"extra":_.extra=Ot(A);break}}return _}function fn(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[A.nodeName]=ue(A);break;case"transparent":_[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:ue(A)};break}}return _}function ue(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":_[A.nodeName]=r(A.textContent);break;case"float":_[A.nodeName]=parseFloat(A.textContent);break;case"texture":_[A.nodeName]={id:A.getAttribute("texture"),extra:he(A)};break}}return _}function he(v){const _={technique:{}};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"extra":Bt(A,_);break}}return _}function Bt(v,_){for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":Pe(A,_);break}}}function Pe(v,_){for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?_.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?_.technique[A.nodeName]=0:_.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":_[A.nodeName]=M(A);break}}}function Ot(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":_.technique=L(A);break}}return _}function L(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"double_sided":_[A.nodeName]=parseInt(A.textContent);break;case"bump":_[A.nodeName]=M(A);break}}return _}function M(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"texture":_[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:he(A)};break}}return _}function j(v){return v}function lt(v){return x($t.effects[v],j)}function ht(v){const _={name:v.getAttribute("name")};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":_.url=o(A.getAttribute("url"));break}}$t.materials[v.getAttribute("id")]=_}function at(v){let _,w=v.slice((v.lastIndexOf(".")-1>>>0)+2);switch(w=w.toLowerCase(),w){case"tga":_=en;break;default:_=cn}return _}function Ut(v){const _=lt(v.url),w=_.profile.technique;let S;switch(w.type){case"phong":case"blinn":S=new hr;break;case"lambert":S=new Yp;break;default:S=new mr;break}S.name=v.name||"";function A(_t,Et=null){const kt=_.profile.samplers[_t.id];let dt=null;if(kt!==void 0){const Ft=_.profile.surfaces[kt.source];dt=vt(Ft.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),dt=vt(_t.id);if(dt!==null){const Ft=at(dt);if(Ft!==void 0){const It=Ft.load(dt),Wt=_t.extra;if(Wt!==void 0&&Wt.technique!==void 0&&c(Wt.technique)===!1){const Vt=Wt.technique;It.wrapS=Vt.wrapU?ji:Un,It.wrapT=Vt.wrapV?ji:Un,It.offset.set(Vt.offsetU||0,Vt.offsetV||0),It.repeat.set(Vt.repeatU||1,Vt.repeatV||1)}else It.wrapS=ji,It.wrapT=ji;return Et!==null&&(It.colorSpace=Et),It}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",dt),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",_t.id),null}const Z=w.parameters;for(const _t in Z){const Et=Z[_t];switch(_t){case"diffuse":Et.color&&S.color.fromArray(Et.color),Et.texture&&(S.map=A(Et.texture,ze));break;case"specular":Et.color&&S.specular&&S.specular.fromArray(Et.color),Et.texture&&(S.specularMap=A(Et.texture));break;case"bump":Et.texture&&(S.normalMap=A(Et.texture));break;case"ambient":Et.texture&&(S.lightMap=A(Et.texture,ze));break;case"shininess":Et.float&&S.shininess&&(S.shininess=Et.float);break;case"emission":Et.color&&S.emissive&&S.emissive.fromArray(Et.color),Et.texture&&(S.emissiveMap=A(Et.texture,ze));break}}pe.toWorkingColorSpace(S.color,ze),S.specular&&pe.toWorkingColorSpace(S.specular,ze),S.emissive&&pe.toWorkingColorSpace(S.emissive,ze);let rt=Z.transparent,Ct=Z.transparency;if(Ct===void 0&&rt&&(Ct={float:1}),rt===void 0&&Ct&&(rt={opaque:"A_ONE",data:{color:[1,1,1,1]}}),rt&&Ct)if(rt.data.texture)S.transparent=!0;else{const _t=rt.data.color;switch(rt.opaque){case"A_ONE":S.opacity=_t[3]*Ct.float;break;case"RGB_ZERO":S.opacity=1-_t[0]*Ct.float;break;case"A_ZERO":S.opacity=1-_t[3]*Ct.float;break;case"RGB_ONE":S.opacity=_t[0]*Ct.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',rt.opaque)}S.opacity<1&&(S.transparent=!0)}if(w.extra!==void 0&&w.extra.technique!==void 0){const _t=w.extra.technique;for(const Et in _t){const kt=_t[Et];switch(Et){case"double_sided":S.side=kt===1?Sn:ai;break;case"bump":S.normalMap=A(kt.texture),S.normalScale=new jt(1,1);break}}}return S}function Mt(v){return x($t.materials[v],Ut)}function Rt(v){const _={name:v.getAttribute("name")};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"optics":_.optics=me(A);break}}$t.cameras[v.getAttribute("id")]=_}function me(v){for(let _=0;_<v.childNodes.length;_++){const w=v.childNodes[_];switch(w.nodeName){case"technique_common":return pt(w)}}return{}}function pt(v){const _={};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];switch(S.nodeName){case"perspective":case"orthographic":_.technique=S.nodeName,_.parameters=Lt(S);break}}return _}function Lt(v){const _={};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];switch(S.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[S.nodeName]=parseFloat(S.textContent);break}}return _}function Xt(v){let _;switch(v.optics.technique){case"perspective":_=new rn(v.optics.parameters.yfov,v.optics.parameters.aspect_ratio,v.optics.parameters.znear,v.optics.parameters.zfar);break;case"orthographic":let w=v.optics.parameters.ymag,S=v.optics.parameters.xmag;const A=v.optics.parameters.aspect_ratio;S=S===void 0?w*A:S,w=w===void 0?S/A:w,S*=.5,w*=.5,_=new nc(-S,S,w,-w,v.optics.parameters.znear,v.optics.parameters.zfar);break;default:_=new rn;break}return _.name=v.name||"",_}function Yt(v){const _=$t.cameras[v];return _!==void 0?x(_,Xt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",v),null)}function Nt(v){let _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique_common":_=fe(A);break}}$t.lights[v.getAttribute("id")]=_}function fe(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=A.nodeName,_.parameters=se(A)}}return _}function se(v){const _={};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":const Z=r(A.textContent);_.color=new Qt().fromArray(Z),pe.toWorkingColorSpace(_.color,ze);break;case"falloff_angle":_.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":const rt=parseFloat(A.textContent);_.distance=rt?Math.sqrt(1/rt):0;break}}return _}function Se(v){let _;switch(v.technique){case"directional":_=new ba;break;case"point":_=new dm;break;case"spot":_=new um;break;case"ambient":_=new Kh;break}return v.parameters.color&&_.color.copy(v.parameters.color),v.parameters.distance&&(_.distance=v.parameters.distance),_}function G(v){const _=$t.lights[v];return _!==void 0?x(_,Se):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",v),null)}function bt(v){const _={name:v.getAttribute("name"),sources:{},vertices:{},primitives:[]},w=i(v,"mesh")[0];if(w!==void 0){for(let S=0;S<w.childNodes.length;S++){const A=w.childNodes[S];if(A.nodeType!==1)continue;const Z=A.getAttribute("id");switch(A.nodeName){case"source":_.sources[Z]=tt(A);break;case"vertices":_.vertices=ct(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(Tt(A));break;default:console.log(A)}}$t.geometries[v.getAttribute("id")]=_}}function tt(v){const _={array:[],stride:3};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"float_array":_.array=r(S.textContent);break;case"Name_array":_.array=s(S.textContent);break;case"technique_common":const A=i(S,"accessor")[0];A!==void 0&&(_.stride=parseInt(A.getAttribute("stride")));break}}return _}function ct(v){const _={};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];S.nodeType===1&&(_[S.getAttribute("semantic")]=o(S.getAttribute("source")))}return _}function Tt(v){const _={type:v.nodeName,material:v.getAttribute("material"),count:parseInt(v.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let w=0,S=v.childNodes.length;w<S;w++){const A=v.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const Z=o(A.getAttribute("source")),rt=A.getAttribute("semantic"),Ct=parseInt(A.getAttribute("offset")),_t=parseInt(A.getAttribute("set")),Et=_t>0?rt+_t:rt;_.inputs[Et]={id:Z,offset:Ct},_.stride=Math.max(_.stride,Ct+1),rt==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=a(A.textContent);break;case"p":_.p=a(A.textContent);break}}return _}function St(v){const _={};for(let w=0;w<v.length;w++){const S=v[w];_[S.type]===void 0&&(_[S.type]=[]),_[S.type].push(S)}return _}function ne(v){let _=0;for(let w=0,S=v.length;w<S;w++)v[w].hasUV===!0&&_++;_>0&&_<v.length&&(v.uvsNeedsFix=!0)}function Ie(v){const _={},w=v.sources,S=v.vertices,A=v.primitives;if(A.length===0)return{};const Z=St(A);for(const rt in Z){const Ct=Z[rt];ne(Ct),_[rt]=Ze(Ct,w,S)}return _}function Ze(v,_,w){const S={},A={array:[],stride:0},Z={array:[],stride:0},rt={array:[],stride:0},Ct={array:[],stride:0},_t={array:[],stride:0},Et={array:[],stride:4},kt={array:[],stride:4},dt=new We,Ft=[];let It=0;for(let Wt=0;Wt<v.length;Wt++){const Vt=v[Wt],Be=Vt.inputs;let Ee=0;switch(Vt.type){case"lines":case"linestrips":Ee=Vt.count*2;break;case"triangles":Ee=Vt.count*3;break;case"polylist":for(let ye=0;ye<Vt.count;ye++){const be=Vt.vcount[ye];switch(be){case 3:Ee+=3;break;case 4:Ee+=6;break;default:Ee+=(be-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",Vt.type)}dt.addGroup(It,Ee,Wt),It+=Ee,Vt.material&&Ft.push(Vt.material);for(const ye in Be){const be=Be[ye];switch(ye){case"VERTEX":for(const qn in w){const gn=w[qn];switch(qn){case"POSITION":const us=A.array.length;if(re(Vt,_[gn],be.offset,A.array),A.stride=_[gn].stride,_.skinWeights&&_.skinIndices&&(re(Vt,_.skinIndices,be.offset,Et.array),re(Vt,_.skinWeights,be.offset,kt.array)),Vt.hasUV===!1&&v.uvsNeedsFix===!0){const kd=(A.array.length-us)/A.stride;for(let Ec=0;Ec<kd;Ec++)rt.array.push(0,0)}break;case"NORMAL":re(Vt,_[gn],be.offset,Z.array),Z.stride=_[gn].stride;break;case"COLOR":re(Vt,_[gn],be.offset,_t.array),_t.stride=_[gn].stride;break;case"TEXCOORD":re(Vt,_[gn],be.offset,rt.array),rt.stride=_[gn].stride;break;case"TEXCOORD1":re(Vt,_[gn],be.offset,Ct.array),rt.stride=_[gn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',qn)}}break;case"NORMAL":re(Vt,_[be.id],be.offset,Z.array),Z.stride=_[be.id].stride;break;case"COLOR":re(Vt,_[be.id],be.offset,_t.array,!0),_t.stride=_[be.id].stride;break;case"TEXCOORD":re(Vt,_[be.id],be.offset,rt.array),rt.stride=_[be.id].stride;break;case"TEXCOORD1":re(Vt,_[be.id],be.offset,Ct.array),Ct.stride=_[be.id].stride;break}}}return A.array.length>0&&dt.setAttribute("position",new Te(A.array,A.stride)),Z.array.length>0&&dt.setAttribute("normal",new Te(Z.array,Z.stride)),_t.array.length>0&&dt.setAttribute("color",new Te(_t.array,_t.stride)),rt.array.length>0&&dt.setAttribute("uv",new Te(rt.array,rt.stride)),Ct.array.length>0&&dt.setAttribute("uv1",new Te(Ct.array,Ct.stride)),Et.array.length>0&&dt.setAttribute("skinIndex",new Te(Et.array,Et.stride)),kt.array.length>0&&dt.setAttribute("skinWeight",new Te(kt.array,kt.stride)),S.data=dt,S.type=v[0].type,S.materialKeys=Ft,S}function re(v,_,w,S,A=!1){const Z=v.p,rt=v.stride,Ct=v.vcount;function _t(dt){let Ft=Z[dt+w]*kt;const It=Ft+kt;for(;Ft<It;Ft++)S.push(Et[Ft]);if(A){const Wt=S.length-kt-1;He.setRGB(S[Wt+0],S[Wt+1],S[Wt+2],ze),S[Wt+0]=He.r,S[Wt+1]=He.g,S[Wt+2]=He.b}}const Et=_.array,kt=_.stride;if(v.vcount!==void 0){let dt=0;for(let Ft=0,It=Ct.length;Ft<It;Ft++){const Wt=Ct[Ft];if(Wt===4){const Vt=dt+rt*0,Be=dt+rt*1,Ee=dt+rt*2,ye=dt+rt*3;_t(Vt),_t(Be),_t(ye),_t(Be),_t(Ee),_t(ye)}else if(Wt===3){const Vt=dt+rt*0,Be=dt+rt*1,Ee=dt+rt*2;_t(Vt),_t(Be),_t(Ee)}else if(Wt>4)for(let Vt=1,Be=Wt-2;Vt<=Be;Vt++){const Ee=dt+rt*0,ye=dt+rt*Vt,be=dt+rt*(Vt+1);_t(Ee),_t(ye),_t(be)}dt+=rt*Wt}}else for(let dt=0,Ft=Z.length;dt<Ft;dt+=rt)_t(dt)}function pn(v){return x($t.geometries[v],Ie)}function Ln(v){const _={name:v.getAttribute("name")||"",joints:{},links:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"technique_common":Xn(S,_);break}}$t.kinematicsModels[v.getAttribute("id")]=_}function Tr(v){return v.build!==void 0?v.build:v}function wr(v){return x($t.kinematicsModels[v],Tr)}function Xn(v,_){for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"joint":_.joints[S.getAttribute("sid")]=Zs(S);break;case"link":_.links.push(Js(S));break}}}function Zs(v){let _;for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"prismatic":case"revolute":_=Ar(S);break}}return _}function Ar(v){const _={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",axis:new k,limits:{min:0,max:0},type:v.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"axis":const A=r(S.textContent);_.axis.fromArray(A);break;case"limits":const Z=S.getElementsByTagName("max")[0],rt=S.getElementsByTagName("min")[0];_.limits.max=parseFloat(Z.textContent),_.limits.min=parseFloat(rt.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function Js(v){const _={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",attachments:[],transforms:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"attachment_full":_.attachments.push(os(S));break;case"matrix":case"translate":case"rotate":_.transforms.push(Qs(S));break}}return _}function os(v){const _={joint:v.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"link":_.links.push(Js(S));break;case"matrix":case"translate":case"rotate":_.transforms.push(Qs(S));break}}return _}function Qs(v){const _={type:v.nodeName},w=r(v.textContent);switch(_.type){case"matrix":_.obj=new Jt,_.obj.fromArray(w).transpose();break;case"translate":_.obj=new k,_.obj.fromArray(w);break;case"rotate":_.obj=new k,_.obj.fromArray(w),_.angle=ws.degToRad(w[3]);break}return _}function ls(v){const _={name:v.getAttribute("name")||"",rigidBodies:{}};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"rigid_body":_.rigidBodies[S.getAttribute("name")]={},Cr(S,_.rigidBodies[S.getAttribute("name")]);break}}$t.physicsModels[v.getAttribute("id")]=_}function Cr(v,_){for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"technique_common":Rr(S,_);break}}}function Rr(v,_){for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"inertia":_.inertia=r(S.textContent);break;case"mass":_.mass=r(S.textContent)[0];break}}}function Qa(v){const _={bindJointAxis:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"bind_joint_axis":_.bindJointAxis.push(to(S));break}}$t.kinematicsScenes[o(v.getAttribute("url"))]=_}function to(v){const _={target:v.getAttribute("target").split("/").pop()};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"axis":const A=S.getElementsByTagName("param")[0];_.axis=A.textContent;const Z=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=Z.substring(0,Z.length-1);break}}return _}function eo(v){return v.build!==void 0?v.build:v}function no(v){return x($t.kinematicsScenes[v],eo)}function io(){const v=Object.keys($t.kinematicsModels)[0],_=Object.keys($t.kinematicsScenes)[0],w=Object.keys($t.visualScenes)[0];if(v===void 0||_===void 0)return;const S=wr(v),A=no(_),Z=ge(w),rt=A.bindJointAxis,Ct={};for(let kt=0,dt=rt.length;kt<dt;kt++){const Ft=rt[kt],It=Ne.querySelector('[sid="'+Ft.target+'"]');if(It){const Wt=It.parentElement;_t(Ft.jointIndex,Wt)}}function _t(kt,dt){const Ft=dt.getAttribute("name"),It=S.joints[kt];Z.traverse(function(Wt){Wt.name===Ft&&(Ct[kt]={object:Wt,transforms:so(dt),joint:It,position:It.zeroPosition})})}const Et=new Jt;cs={joints:S&&S.joints,getJointValue:function(kt){const dt=Ct[kt];if(dt)return dt.position;console.warn("THREE.ColladaLoader: Joint "+kt+" doesn't exist.")},setJointValue:function(kt,dt){const Ft=Ct[kt];if(Ft){const It=Ft.joint;if(dt>It.limits.max||dt<It.limits.min)console.warn("THREE.ColladaLoader: Joint "+kt+" value "+dt+" outside of limits (min: "+It.limits.min+", max: "+It.limits.max+").");else if(It.static)console.warn("THREE.ColladaLoader: Joint "+kt+" is static.");else{const Wt=Ft.object,Vt=It.axis,Be=Ft.transforms;H.identity();for(let Ee=0;Ee<Be.length;Ee++){const ye=Be[Ee];if(ye.sid&&ye.sid.indexOf(kt)!==-1)switch(It.type){case"revolute":H.multiply(Et.makeRotationAxis(Vt,ws.degToRad(dt)));break;case"prismatic":H.multiply(Et.makeTranslation(Vt.x*dt,Vt.y*dt,Vt.z*dt));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+It.type);break}else switch(ye.type){case"matrix":H.multiply(ye.obj);break;case"translate":H.multiply(Et.makeTranslation(ye.obj.x,ye.obj.y,ye.obj.z));break;case"scale":H.scale(ye.obj);break;case"rotate":H.multiply(Et.makeRotationAxis(ye.obj,ye.angle));break}}Wt.matrix.copy(H),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Ct[kt].position=dt}}else console.log("THREE.ColladaLoader: "+kt+" does not exist.")}}}function so(v){const _=[],w=Ne.querySelector('[id="'+v.id+'"]');for(let S=0;S<w.childNodes.length;S++){const A=w.childNodes[S];if(A.nodeType!==1)continue;let Z,rt;switch(A.nodeName){case"matrix":Z=r(A.textContent);const Ct=new Jt().fromArray(Z).transpose();_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Ct});break;case"translate":case"scale":Z=r(A.textContent),rt=new k().fromArray(Z),_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:rt});break;case"rotate":Z=r(A.textContent),rt=new k().fromArray(Z);const _t=ws.degToRad(Z[3]);_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:rt,angle:_t});break}}return _}function E(v){const _=v.getElementsByTagName("node");for(let w=0;w<_.length;w++){const S=_[w];S.hasAttribute("id")===!1&&S.setAttribute("id",l())}}const H=new Jt,Y=new k;function K(v){const _={name:v.getAttribute("name")||"",type:v.getAttribute("type"),id:v.getAttribute("id"),sid:v.getAttribute("sid"),matrix:new Jt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];if(S.nodeType!==1)continue;let A;switch(S.nodeName){case"node":_.nodes.push(S.getAttribute("id")),K(S);break;case"instance_camera":_.instanceCameras.push(o(S.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(X(S));break;case"instance_light":_.instanceLights.push(o(S.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(X(S));break;case"instance_node":_.instanceNodes.push(o(S.getAttribute("url")));break;case"matrix":A=r(S.textContent),_.matrix.multiply(H.fromArray(A).transpose()),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"translate":A=r(S.textContent),Y.fromArray(A),_.matrix.multiply(H.makeTranslation(Y.x,Y.y,Y.z)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"rotate":A=r(S.textContent);const Z=ws.degToRad(A[3]);_.matrix.multiply(H.makeRotationAxis(Y.fromArray(A),Z)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"scale":A=r(S.textContent),_.matrix.scale(Y.fromArray(A)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"extra":break;default:console.log(S)}}return zt(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):$t.nodes[_.id]=_,_}function X(v){const _={id:o(v.getAttribute("url")),materials:{},skeletons:[]};for(let w=0;w<v.childNodes.length;w++){const S=v.childNodes[w];switch(S.nodeName){case"bind_material":const A=S.getElementsByTagName("instance_material");for(let Z=0;Z<A.length;Z++){const rt=A[Z],Ct=rt.getAttribute("symbol"),_t=rt.getAttribute("target");_.materials[Ct]=o(_t)}break;case"skeleton":_.skeletons.push(o(S.textContent));break}}return _}function ft(v,_){const w=[],S=[];let A,Z,rt;for(A=0;A<v.length;A++){const Et=v[A];let kt;if(zt(Et))kt=oe(Et),xt(kt,_,w);else if(Ue(Et)){const Ft=$t.visualScenes[Et].children;for(let It=0;It<Ft.length;It++){const Wt=Ft[It];if(Wt.type==="JOINT"){const Vt=oe(Wt.id);xt(Vt,_,w)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Et)}for(A=0;A<_.length;A++)for(Z=0;Z<w.length;Z++)if(rt=w[Z],rt.bone.name===_[A].name){S[A]=rt,rt.processed=!0;break}for(A=0;A<w.length;A++)rt=w[A],rt.processed===!1&&(S.push(rt),rt.processed=!0);const Ct=[],_t=[];for(A=0;A<S.length;A++)rt=S[A],Ct.push(rt.bone),_t.push(rt.boneInverse);return new Kl(Ct,_t)}function xt(v,_,w){v.traverse(function(S){if(S.isBone===!0){let A;for(let Z=0;Z<_.length;Z++){const rt=_[Z];if(rt.name===S.name){A=rt.boneInverse;break}}A===void 0&&(A=new Jt),w.push({bone:S,boneInverse:A,processed:!1})}})}function At(v){const _=[],w=v.matrix,S=v.nodes,A=v.type,Z=v.instanceCameras,rt=v.instanceControllers,Ct=v.instanceLights,_t=v.instanceGeometries,Et=v.instanceNodes;for(let dt=0,Ft=S.length;dt<Ft;dt++)_.push(oe(S[dt]));for(let dt=0,Ft=Z.length;dt<Ft;dt++){const It=Yt(Z[dt]);It!==null&&_.push(It.clone())}for(let dt=0,Ft=rt.length;dt<Ft;dt++){const It=rt[dt],Wt=Q(It.id),Vt=pn(Wt.id),Be=Zt(Vt,It.materials),Ee=It.skeletons,ye=Wt.skin.joints,be=ft(Ee,ye);for(let qn=0,gn=Be.length;qn<gn;qn++){const us=Be[qn];us.isSkinnedMesh&&(us.bind(be,Wt.skin.bindMatrix),us.normalizeSkinWeights()),_.push(us)}}for(let dt=0,Ft=Ct.length;dt<Ft;dt++){const It=G(Ct[dt]);It!==null&&_.push(It.clone())}for(let dt=0,Ft=_t.length;dt<Ft;dt++){const It=_t[dt],Wt=pn(It.id),Vt=Zt(Wt,It.materials);for(let Be=0,Ee=Vt.length;Be<Ee;Be++)_.push(Vt[Be])}for(let dt=0,Ft=Et.length;dt<Ft;dt++)_.push(oe(Et[dt]).clone());let kt;if(S.length===0&&_.length===1)kt=_[0];else{kt=A==="JOINT"?new Vh:new je;for(let dt=0;dt<_.length;dt++)kt.add(_[dt])}return kt.name=A==="JOINT"?v.sid:v.name,kt.matrix.copy(w),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt}const Dt=new mr({name:Li.DEFAULT_MATERIAL_NAME,color:16711935});function Kt(v,_){const w=[];for(let S=0,A=v.length;S<A;S++){const Z=_[v[S]];Z===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",v[S]),w.push(Dt)):w.push(Mt(Z))}return w}function Zt(v,_){const w=[];for(const S in v){const A=v[S],Z=Kt(A.materialKeys,_);if(Z.length===0&&(S==="lines"||S==="linestrips"?Z.push(new Si):Z.push(new hr)),S==="lines"||S==="linestrips")for(let Et=0,kt=Z.length;Et<kt;Et++){const dt=Z[Et];if(dt.isMeshPhongMaterial===!0||dt.isMeshLambertMaterial===!0){const Ft=new Si;Ft.color.copy(dt.color),Ft.opacity=dt.opacity,Ft.transparent=dt.transparent,Z[Et]=Ft}}const rt=A.data.attributes.skinIndex!==void 0,Ct=Z.length===1?Z[0]:Z;let _t;switch(S){case"lines":_t=new lr(A.data,Ct);break;case"linestrips":_t=new Jl(A.data,Ct);break;case"triangles":case"polylist":rt?_t=new Gp(A.data,Ct):_t=new Fe(A.data,Ct);break}w.push(_t)}return w}function zt(v){return $t.nodes[v]!==void 0}function oe(v){return x($t.nodes[v],At)}function ve(v){const _={name:v.getAttribute("name"),children:[]};E(v);const w=i(v,"node");for(let S=0;S<w.length;S++)_.children.push(K(w[S]));$t.visualScenes[v.getAttribute("id")]=_}function Oe(v){const _=new je;_.name=v.name;const w=v.children;for(let S=0;S<w.length;S++){const A=w[S];_.add(oe(A.id))}return _}function Ue(v){return $t.visualScenes[v]!==void 0}function ge(v){return x($t.visualScenes[v],Oe)}function Gt(v){const _=i(v,"instance_visual_scene")[0];return ge(o(_.getAttribute("url")))}function Xe(){const v=$t.clips;if(c(v)===!0){if(c($t.animations)===!1){const _=[];for(const w in $t.animations){const S=T(w);for(let A=0,Z=S.length;A<Z;A++)_.push(S[A])}$e.push(new gu("default",-1,_))}}else for(const _ in v)$e.push($(_))}function xe(v){let _="";const w=[v];for(;w.length;){const S=w.shift();S.nodeType===Node.TEXT_NODE?_+=S.textContent:(_+=`
`,w.push(...S.childNodes))}return _.trim()}if(t.length===0)return{scene:new zh};const mn=new DOMParser().parseFromString(t,"application/xml"),Ne=i(mn,"COLLADA")[0],Qe=mn.getElementsByTagName("parsererror")[0];if(Qe!==void 0){const v=i(Qe,"div")[0];let _;return v?_=v.textContent:_=xe(Qe),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}const Fi=Ne.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Fi);const Le=u(i(Ne,"asset")[0]),cn=new Yh(this.manager);cn.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);let en;Yu&&(en=new Yu(this.manager),en.setPath(this.resourcePath||e));const He=new Qt,$e=[];let cs={},$n=0;const $t={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(Ne,"library_animations","animation",m),p(Ne,"library_animation_clips","animation_clip",z),p(Ne,"library_controllers","controller",ut),p(Ne,"library_images","image",nt),p(Ne,"library_effects","effect",te),p(Ne,"library_materials","material",ht),p(Ne,"library_cameras","camera",Rt),p(Ne,"library_lights","light",Nt),p(Ne,"library_geometries","geometry",bt),p(Ne,"library_nodes","node",K),p(Ne,"library_visual_scenes","visual_scene",ve),p(Ne,"library_kinematics_models","kinematics_model",Ln),p(Ne,"library_physics_models","physics_model",ls),p(Ne,"scene","instance_kinematics_scene",Qa),g($t.animations,R),g($t.clips,it),g($t.controllers,wt),g($t.images,st),g($t.effects,j),g($t.materials,Ut),g($t.cameras,Xt),g($t.lights,Se),g($t.geometries,Ie),g($t.visualScenes,Oe),Xe(),io();const Pr=Gt(i(Ne,"scene")[0]);return Pr.animations=$e,Le.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Pr.rotation.set(-Math.PI/2,0,0)),Pr.scale.multiplyScalar(Le.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),$e},kinematics:cs,library:$t,scene:Pr}}}const Ku=new k,px=new yn,ua=new Jt,gi=new Jt,ha=new Fn,da=new k(1,1,1),fa=new k;class Wa extends Ve{constructor(...t){super(...t),this.urdfNode=null,this.urdfName=""}copy(t,e){return super.copy(t,e),this.urdfNode=t.urdfNode,this.urdfName=t.urdfName,this}}class mx extends Wa{constructor(...t){super(...t),this.isURDFCollider=!0,this.type="URDFCollider"}}class gx extends Wa{constructor(...t){super(...t),this.isURDFVisual=!0,this.type="URDFVisual"}}class rd extends Wa{constructor(...t){super(...t),this.isURDFLink=!0,this.type="URDFLink",this.inertial={mass:0,origin:{xyz:[0,0,0],rpy:[0,0,0]},inertia:{ixx:0,ixy:0,ixz:0,iyy:0,iyz:0,izz:0}}}copy(t,e){return super.copy(t,e),this.inertial={mass:t.inertial.mass,origin:{xyz:[...t.inertial.origin.xyz],rpy:[...t.inertial.origin.rpy]},inertia:{...t.inertial.inertia}},this}}class ad extends Wa{get jointType(){return this._jointType}set jointType(t){if(this.jointType!==t)switch(this._jointType=t,this.matrixWorldNeedsUpdate=!0,t){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new k(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...t){super(...t),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new k(1,0,0),this.limit={lower:0,upper:0,effort:0,velocity:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(t,e){return super.copy(t,e),this.jointType=t.jointType,this.axis=t.axis.clone(),this.limit.lower=t.limit.lower,this.limit.upper=t.limit.upper,this.limit.effort=t.limit.effort,this.limit.velocity=t.limit.velocity,this.ignoreLimits=!1,this.jointValue=[...t.jointValue],this.origPosition=t.origPosition?t.origPosition.clone():null,this.origQuaternion=t.origQuaternion?t.origQuaternion.clone():null,this.mimicJoints=[...t.mimicJoints],this}setJointValue(...t){t=t.map(i=>i===null?null:parseFloat(i)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let e=!1;switch(this.mimicJoints.forEach(i=>{e=i.updateFromMimickedJoint(...t)||e}),this.jointType){case"fixed":return e;case"continuous":case"revolute":{let i=t[0];return i==null||i===this.jointValue[0]?e:(!this.ignoreLimits&&this.jointType==="revolute"&&(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.quaternion.setFromAxisAngle(this.axis,i).premultiply(this.origQuaternion),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):e)}case"prismatic":{let i=t[0];return i==null||i===this.jointValue[0]?e:(this.ignoreLimits||(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.position.copy(this.origPosition),Ku.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Ku,i),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):e)}case"floating":return this.jointValue.every((i,s)=>t[s]===i||t[s]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],this.jointValue[3]=t[3]!==null?t[3]:this.jointValue[3],this.jointValue[4]=t[4]!==null?t[4]:this.jointValue[4],this.jointValue[5]=t[5]!==null?t[5]:this.jointValue[5],gi.compose(this.origPosition,this.origQuaternion,da),ha.setFromEuler(px.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),fa.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),ua.compose(fa,ha,da),gi.premultiply(ua),this.position.setFromMatrixPosition(gi),this.rotation.setFromRotationMatrix(gi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((i,s)=>t[s]===i||t[s]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],gi.compose(this.origPosition,this.origQuaternion,da),ha.setFromAxisAngle(this.axis,this.jointValue[2]),fa.set(this.jointValue[0],this.jointValue[1],0),ua.compose(fa,ha,da),gi.premultiply(ua),this.position.setFromMatrixPosition(gi),this.rotation.setFromRotationMatrix(gi),this.matrixWorldNeedsUpdate=!0,!0)}return e}}class Zu extends ad{constructor(...t){super(...t),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...t){const e=t.map(i=>i===null?null:i*this.multiplier+this.offset);return super.setJointValue(...e)}copy(t,e){return super.copy(t,e),this.mimicJoint=t.mimicJoint,this.offset=t.offset,this.multiplier=t.multiplier,this}}class _x extends rd{constructor(...t){super(...t),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(t,e){super.copy(t,e),this.urdfRobotNode=t.urdfRobotNode,this.robotName=t.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(i=>{i.isURDFJoint&&i.urdfName in t.joints&&(this.joints[i.urdfName]=i),i.isURDFLink&&i.urdfName in t.links&&(this.links[i.urdfName]=i),i.isURDFCollider&&i.urdfName in t.colliders&&(this.colliders[i.urdfName]=i),i.isURDFVisual&&i.urdfName in t.visual&&(this.visual[i.urdfName]=i)});for(const i in this.joints)this.joints[i].mimicJoints=this.joints[i].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(t){return this.frames[t]}setJointValue(t,...e){const i=this.joints[t];return i?i.setJointValue(...e):!1}setJointValues(t){let e=!1;for(const i in t){const s=t[i];Array.isArray(s)?e=this.setJointValue(i,...s)||e:e=this.setJointValue(i,s)||e}return e}}const Go=new Fn,Ju=new yn;function _i(n){return n?n.trim().split(/\s+/g).map(t=>parseFloat(t)):[0,0,0]}function Qu(n,t,e=!1){e||n.rotation.set(0,0,0),Ju.set(t[0],t[1],t[2],"ZYX"),Go.setFromEuler(Ju),Go.multiply(n.quaternion),n.quaternion.copy(Go)}class vx{constructor(t){this.manager=t||jh,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(t){return new Promise((e,i)=>{this.load(t,e,null,i)})}load(t,e,i,s){const r=this.manager,a=Zh.extractUrlBase(t),o=this.manager.resolveURL(t);r.itemStart(o),fetch(o,this.fetchOptions).then(l=>{if(l.ok)return i&&i(null),l.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||a);e(c),r.itemEnd(o)}).catch(l=>{s?s(l):console.error("URDFLoader: Error loading file.",l),r.itemError(o),r.itemEnd(o)})}parse(t,e=this.workingPath){const i=this.packages,s=this.loadMeshCb,r=this.parseVisual,a=this.parseCollision,o=this.manager,l={},c={},u={};function h(P){if(!/^package:\/\//.test(P))return e?e+P:P;const[R,T]=P.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof i=="string")return i.endsWith(R)?i+"/"+T:i+"/"+R+"/"+T;if(typeof i=="function")return i(R)+"/"+T;if(typeof i=="object")return R in i?i[R]+"/"+T:(console.error(`URDFLoader : ${R} not found in provided package list.`),null)}function d(P){let R;P instanceof Document?R=[...P.children]:P instanceof Element?R=[P]:R=[...new DOMParser().parseFromString(P,"text/xml").children];const T=R.filter(D=>D.nodeName==="robot").pop();return p(T)}function p(P){const R=[...P.children],T=R.filter(N=>N.nodeName.toLowerCase()==="link"),D=R.filter(N=>N.nodeName.toLowerCase()==="joint"),F=R.filter(N=>N.nodeName.toLowerCase()==="material"),I=new _x;I.robotName=P.getAttribute("name"),I.urdfRobotNode=P,F.forEach(N=>{const V=N.getAttribute("name");u[V]=m(N)});const U={},y={};T.forEach(N=>{const V=N.getAttribute("name"),W=P.querySelector(`child[link="${V}"]`)===null;l[V]=x(N,U,y,W?I:null)}),D.forEach(N=>{const V=N.getAttribute("name");c[V]=g(N)}),I.joints=c,I.links=l,I.colliders=y,I.visual=U;const b=Object.values(c);return b.forEach(N=>{N instanceof Zu&&c[N.mimicJoint].mimicJoints.push(N)}),b.forEach(N=>{const V=new Set,W=J=>{if(V.has(J))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");V.add(J),J.mimicJoints.forEach(et=>{W(et)})};W(N)}),I.frames={...y,...U,...l,...c},I}function g(P){const R=[...P.children],T=P.getAttribute("type");let D;const F=R.find(V=>V.nodeName.toLowerCase()==="mimic");F?(D=new Zu,D.mimicJoint=F.getAttribute("joint"),D.multiplier=parseFloat(F.getAttribute("multiplier")||1),D.offset=parseFloat(F.getAttribute("offset")||0)):D=new ad,D.urdfNode=P,D.name=P.getAttribute("name"),D.urdfName=D.name,D.jointType=T;let I=null,U=null,y=[0,0,0],b=[0,0,0];R.forEach(V=>{const W=V.nodeName.toLowerCase();W==="origin"?(y=_i(V.getAttribute("xyz")),b=_i(V.getAttribute("rpy"))):W==="child"?U=l[V.getAttribute("link")]:W==="parent"?I=l[V.getAttribute("link")]:W==="limit"&&(D.limit.lower=parseFloat(V.getAttribute("lower")||D.limit.lower),D.limit.upper=parseFloat(V.getAttribute("upper")||D.limit.upper),D.limit.effort=parseFloat(V.getAttribute("effort")||D.limit.effort),D.limit.velocity=parseFloat(V.getAttribute("velocity")||D.limit.velocity))}),I.add(D),D.add(U),Qu(D,b),D.position.set(y[0],y[1],y[2]);const N=R.filter(V=>V.nodeName.toLowerCase()==="axis")[0];if(N){const V=N.getAttribute("xyz").split(/\s+/g).map(W=>parseFloat(W));D.axis=new k(V[0],V[1],V[2]),D.axis.normalize()}return D}function x(P,R,T,D=null){D===null&&(D=new rd);const F=[...P.children];D.name=P.getAttribute("name"),D.urdfName=D.name,D.urdfNode=P;const I=F.find(U=>U.nodeName.toLowerCase()==="inertial");return I&&[...I.children].forEach(U=>{const y=U.nodeName.toLowerCase();y==="origin"?(D.inertial.origin.xyz=_i(U.getAttribute("xyz")),D.inertial.origin.rpy=_i(U.getAttribute("rpy"))):y==="mass"?D.inertial.mass=parseFloat(U.getAttribute("value"))||0:y==="inertia"&&(D.inertial.inertia.ixx=parseFloat(U.getAttribute("ixx"))||0,D.inertial.inertia.ixy=parseFloat(U.getAttribute("ixy"))||0,D.inertial.inertia.ixz=parseFloat(U.getAttribute("ixz"))||0,D.inertial.inertia.iyy=parseFloat(U.getAttribute("iyy"))||0,D.inertial.inertia.iyz=parseFloat(U.getAttribute("iyz"))||0,D.inertial.inertia.izz=parseFloat(U.getAttribute("izz"))||0)}),r&&F.filter(y=>y.nodeName.toLowerCase()==="visual").forEach(y=>{const b=f(y,u);if(D.add(b),y.hasAttribute("name")){const N=y.getAttribute("name");b.name=N,b.urdfName=N,R[N]=b}}),a&&F.filter(y=>y.nodeName.toLowerCase()==="collision").forEach(y=>{const b=f(y);if(D.add(b),y.hasAttribute("name")){const N=y.getAttribute("name");b.name=N,b.urdfName=N,T[N]=b}}),D}function m(P){const R=[...P.children],T=new hr;return T.name=P.getAttribute("name")||"",R.forEach(D=>{const F=D.nodeName.toLowerCase();if(F==="color"){const I=D.getAttribute("rgba").split(/\s/g).map(U=>parseFloat(U));T.color.setRGB(I[0],I[1],I[2]),T.opacity=I[3],T.transparent=I[3]<1,T.depthWrite=!T.transparent}else if(F==="texture"){const I=D.getAttribute("filename");if(I){const U=new Yh(o),y=h(I);T.map=U.load(y),T.map.colorSpace=ze}}}),T}function f(P,R={}){const T=P.nodeName.toLowerCase()==="collision",D=[...P.children];let F=null;const I=D.filter(y=>y.nodeName.toLowerCase()==="material")[0];if(I){const y=I.getAttribute("name");y&&y in R?F=R[y]:F=m(I)}else F=new hr;const U=T?new mx:new gx;return U.urdfNode=P,D.forEach(y=>{const b=y.nodeName.toLowerCase();if(b==="geometry"){const N=y.children[0].nodeName.toLowerCase();if(N==="mesh"){const V=y.children[0].getAttribute("filename"),W=h(V);if(W!==null){const J=y.children[0].getAttribute("scale");if(J){const et=_i(J);U.scale.set(et[0],et[1],et[2])}s(W,o,(et,z)=>{z?console.error("URDFLoader: Error loading mesh.",z):et&&(et instanceof Fe&&(et.material=F),et.position.set(0,0,0),et.quaternion.identity(),U.add(et))})}}else if(N==="box"){const V=new Fe;V.geometry=new Ri(1,1,1),V.material=F;const W=_i(y.children[0].getAttribute("size"));V.scale.set(W[0],W[1],W[2]),U.add(V)}else if(N==="sphere"){const V=new Fe;V.geometry=new gr(1,30,30),V.material=F;const W=parseFloat(y.children[0].getAttribute("radius"))||0;V.scale.set(W,W,W),U.add(V)}else if(N==="cylinder"){const V=new Fe;V.geometry=new za(1,1,1,30),V.material=F;const W=parseFloat(y.children[0].getAttribute("radius"))||0,J=parseFloat(y.children[0].getAttribute("length"))||0;V.scale.set(W,J,W),V.rotation.set(Math.PI/2,0,0),U.add(V)}}else if(b==="origin"){const N=_i(y.getAttribute("xyz")),V=_i(y.getAttribute("rpy"));U.position.set(N[0],N[1],N[2]),U.rotation.set(0,0,0),Qu(U,V)}}),U}return d(t)}defaultMeshLoader(t,e,i){/\.stl$/i.test(t)?new sd(e).load(t,r=>{const a=new Fe(r,new hr);i(a)},null,r=>i(null,r)):/\.dae$/i.test(t)?new fx(e).load(t,r=>i(r.scene),null,r=>i(null,r)):console.warn(`URDFLoader: Could not load model at ${t}.
No loader available`)}}const xx="/urdf/piper_description.urdf",yx="/models/part.stl",bx=.001,Sa=-0;class Mx{constructor(t,e={}){Tc(this,"animate",()=>{var e,i;this.animationFrame=requestAnimationFrame(this.animate),this.resize(),this.controls.update(),this.renderer.render(this.scene,this.camera),this.frameCounter+=1;const t=performance.now();if(t-this.frameWindowStart>=1e3){const s=Math.round(this.frameCounter*1e3/(t-this.frameWindowStart));(i=(e=this.callbacks).onFps)==null||i.call(e,s),this.frameCounter=0,this.frameWindowStart=t}});this.canvas=t,this.callbacks=e,this.scene=new zh,this.scene.background=new Qt(1581863),this.camera=new rn(42,1,.01,100),this.renderer=new Jv({canvas:t,antialias:!0,alpha:!1}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_h,this.renderer.toneMapping=vh,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=ze,this.controls=new tx(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.07,this.controls.minDistance=.7,this.controls.maxDistance=8,this.controls.target.set(0,.85+Sa,0),this.robot=null,this.robotBounds=null,this.jointLimits=new Map,this.targetGroup=new je,this.tcpFrameGroup=new je,this.benchmarkGroup=new je,this.visionGroup=new je,this.visionPartGeometry=null,this.visionPartMarker=null,this.visionPartPoint=null,this.visionPartLoadPromise=null,this.cameraMarkerGroup=new je,this.platformGroup=new je,this.workspaceBoundsGroup=new je,this.manualCollisionGroup=new je,this.objectMarkerGroup=new je,this.cloudPoints=null,this.cameraExtrinsic=null,this.cloudVisible=!0,this.frameCounter=0,this.frameWindowStart=performance.now(),this.lastWidth=0,this.lastHeight=0,this.scene.add(this.targetGroup,this.tcpFrameGroup,this.benchmarkGroup,this.visionGroup,this.cameraMarkerGroup,this.platformGroup,this.workspaceBoundsGroup,this.manualCollisionGroup,this.objectMarkerGroup),this.addLighting(),this.addGround(),this.setDefaultView(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t.parentElement),this.loadRobot(),this.loadVisionPartModel(),this.animate()}addLighting(){const t=new ba(16777215,1.45);t.position.set(3.5,5.5,4),t.castShadow=!0,t.shadow.mapSize.setScalar(2048),t.shadow.camera.near=.1,t.shadow.camera.far=15,t.shadow.camera.left=-3,t.shadow.camera.right=3,t.shadow.camera.top=3,t.shadow.camera.bottom=-3,this.scene.add(t);const e=new ba(12180973,.62);e.position.set(-4,3,-2.5),this.scene.add(e);const i=new ba(16768432,.34);i.position.set(0,2,-4),this.scene.add(i),this.scene.add(new Kh(16777215,.5))}addGround(){const t=new Fe(new yr(12,12),new jp({color:4937815,roughness:.82,metalness:.08,clearcoat:.08,side:Sn}));t.rotation.x=-Math.PI/2,t.position.y=-.002,t.receiveShadow=!0,this.scene.add(t);const e=this.createGrid();e.position.y=.001,this.scene.add(e)}createGrid(){const t=new je,e=8,i=40,s=e/i,r=e/2,a=new Si({color:3425095,transparent:!0,opacity:.68}),o=new Si({color:5399142,transparent:!0,opacity:.72});for(let l=0;l<=i;l+=1){const c=-r+l*s,u=new We().setFromPoints([new k(-r,0,c),new k(r,0,c)]),h=new We().setFromPoints([new k(c,0,-r),new k(c,0,r)]),d=l%5===0?o:a;t.add(new lr(u,d),new lr(h,d))}return t}loadRobot(){const t=new qh,e=new vx(t);let i=null;t.onProgress=(s,r,a)=>{var o,l;(l=(o=this.callbacks).onLoadProgress)==null||l.call(o,r,a)},t.onLoad=()=>{var s,r;i&&(this.robot=i,this.scene.add(i),i.updateMatrixWorld(!0),this.robotBounds=new Ci().setFromObject(i),this.fitView(),(r=(s=this.callbacks).onLoaded)==null||r.call(s,i))},e.load(xx,s=>{i=s,s.name="PiperURDF",s.rotation.set(-Math.PI/2,0,0),s.scale.setScalar(1),s.position.set(0,Sa,0),s.traverse(r=>{r.castShadow=!0,r.receiveShadow=!0,r.material&&(r.material.side=Sn,"roughness"in r.material&&(r.material.roughness=.58),r.material.needsUpdate=!0)})},void 0,s=>{var r,a;console.error("Failed to load Piper URDF",s),(a=(r=this.callbacks).onLoadError)==null||a.call(r,s)})}applyJointState(t){if(!this.robot||!(t!=null&&t.name)||!(t!=null&&t.position))return 0;let e=0;return t.name.forEach((i,s)=>{var l;const r=(l=this.robot.joints)==null?void 0:l[i];let a=Number(t.position[s]);if(!r||!Number.isFinite(a))return;const o=this.jointLimits.get(i);o&&(r.limit&&(r.limit.lower=o.lower,r.limit.upper=o.upper),a=Math.min(o.upper,Math.max(o.lower,a))),r.setJointValue(a),e+=1}),this.robot.updateMatrixWorld(!0),e}setJointLimits(t={}){this.jointLimits=new Map(Object.entries(t))}loadVisionPartModel(){if(this.visionPartLoadPromise)return this.visionPartLoadPromise;const t=new sd;return this.visionPartLoadPromise=new Promise(e=>{t.load(yx,i=>{var a;i.computeVertexNormals(),i.computeBoundingBox();const s=new k;(a=i.boundingBox)==null||a.getCenter(s),i.translate(-s.x,-s.y,-s.z),i.computeBoundingBox(),this.visionPartGeometry=i;const r=this.ensureVisionPartMarker();r&&this.visionPartPoint&&(r.position.copy(this.visionPartPoint),r.visible=!0),e(i)},void 0,i=>{var s,r;(r=(s=this.callbacks).onStatus)==null||r.call(s,`零件模型加载失败: ${(i==null?void 0:i.message)||i}`),e(null)})}),this.visionPartLoadPromise}ensureVisionPartMarker(){if(!this.visionPartGeometry)return null;if(this.visionPartMarker)return this.visionPartMarker;const t=new je,e=new je,i=new Fe(this.visionPartGeometry,new Wi({color:15775311,emissive:4139788,roughness:.42,metalness:.08}));i.castShadow=!0,i.receiveShadow=!0;const s=new lr(new pu(this.visionPartGeometry,35),new Si({color:16767371,transparent:!0,opacity:.55}));return e.add(i,s),e.scale.setScalar(bx),e.rotation.x=-Math.PI/2,t.add(e),t.visible=!!this.visionPartPoint,this.visionPartMarker=t,this.visionGroup.add(t),t}setTargetPose(t){if(vi(this.targetGroup),!t||!Bn([t.x,t.y,t.z]))return;const e=yi([t.x,t.y,t.z]),i=new Fe(new Ql(.035,.043,40),new Wi({color:3723965,emissive:739906,side:Sn}));i.position.copy(e),i.quaternion.setFromUnitVectors(new k(0,0,1),new k(0,1,0)),this.targetGroup.add(i);const s=eh(t.roll,t.pitch,t.yaw),r=Yi(s).normalize();this.targetGroup.add(new ra(r,e,.16,3723965,.035,.02))}setBenchmarkSamples(t=[],e=null){vi(this.benchmarkGroup);for(const i of(t||[]).slice(0,120)){if(!Bn([i.x,i.y,i.z]))continue;const s=String(i.id)===String(e),r=i.ik&&i.ik.ok!==!0,a=s?4441222:r?15622754:Tx(i.source),o=yi([i.x,i.y,i.z]),l=new Fe(new gr(s?.023:.016,16,10),new Wi({color:a,emissive:a,emissiveIntensity:s?.28:.12,transparent:!0,opacity:r?.68:.92,depthWrite:!1}));l.position.copy(o),this.benchmarkGroup.add(l);const c=Yi(eh(i.roll,i.pitch,i.yaw)).normalize();this.benchmarkGroup.add(new ra(c,o,s?.11:.07,a,s?.026:.018,s?.014:.009))}}setTcpFrame(t){if(vi(this.tcpFrameGroup),!t||!Bn(t.position)||!wx(t.orientation))return;const e=yi(t.position),i=[{axis:[1,0,0],color:16731469,length:.12},{axis:[0,1,0],color:4441222,length:.105},{axis:[0,0,1],color:5089535,length:.095}];for(const s of i){const r=Yi(Ax(s.axis,t.orientation)).normalize();this.tcpFrameGroup.add(new ra(r,e,s.length,s.color,.024,.012))}}setVisionTarget(t){const e=t==null?void 0:t.urdf_xyz_m;if(!Bn(e)){this.visionPartPoint=null,this.visionPartMarker&&(this.visionPartMarker.visible=!1);return}this.visionPartPoint=yi(e);const i=this.ensureVisionPartMarker();i?(i.position.copy(this.visionPartPoint),i.visible=!0):this.loadVisionPartModel()}setObjectMarkers(t=[]){vi(this.objectMarkerGroup);for(const e of t.slice(0,16)){const i=e.center_camera_xyz_m;if(!Bn(i)||!this.cameraExtrinsic)continue;const s=yi(nh(i,this.cameraExtrinsic)),r=new Fe(new gr(.014,16,10),new Wi({color:6801389,emissive:1522763}));r.position.copy(s),this.objectMarkerGroup.add(r)}}setCameraExtrinsic(t){if(this.cameraExtrinsic=t?{...t}:null,vi(this.cameraMarkerGroup),!t||!Bn([t.x,t.y,t.z]))return;const e=yi([t.x,t.y,t.z]),i=Wo(t,[1,0,0]),s=Wo(t,[0,1,0]),r=Wo(t,[0,0,1]),a=new Jt().makeBasis(i,s,r),o=new je;o.position.copy(e),o.quaternion.setFromRotationMatrix(a);const l=new Fe(new Ri(.124,.029,.026),new Wi({color:10135725,roughness:.52,metalness:.16,transparent:!0,opacity:.45}));o.add(l),this.cameraMarkerGroup.add(o),this.cameraMarkerGroup.add(new ra(r,e,.18,6801389,.03,.018))}setPlatformObstacle(t){vi(this.platformGroup);const e=(t==null?void 0:t.platform_obstacle)??t,i=Array.isArray(e)?e:Array.isArray(e==null?void 0:e.platform_obstacles)?e.platform_obstacles:e?[e]:[];for(const s of i)this.addCollisionBox(this.platformGroup,s,{fill:14901091,edge:15628154,opacity:.14})}setManualCollisionBoxes(t=[]){vi(this.manualCollisionGroup);for(const e of t||[])this.addCollisionBox(this.manualCollisionGroup,e,{fill:e.enabled===!1?8095113:15249485,edge:e.enabled===!1?10135725:16762719,opacity:e.enabled===!1?.08:.18})}setWorkspaceBounds(t){if(vi(this.workspaceBoundsGroup),!(t!=null&&t.enabled)||!Bn(t.min)||!Bn(t.max))return;const e=t.min.map(Number),i=t.max.map(Number),s=i.map((a,o)=>a-e[o]);if(s.some(a=>!Number.isFinite(a)||a<=0))return;const r=e.map((a,o)=>(a+i[o])/2);this.addCollisionBox(this.workspaceBoundsGroup,{center:r,dimensions:s,rpy:[0,0,0]},{fill:5089498,edge:6801389,opacity:.06})}addCollisionBox(t,e,i){if(!Bn(e==null?void 0:e.center)||!Bn(e==null?void 0:e.dimensions))return;const[s,r,a]=e.dimensions.map(Number),o=new Ri(s,a,r),l=new Fe(o,new Wi({color:i.fill,transparent:!0,opacity:i.opacity,depthWrite:!1}));th(l,e);const c=new lr(new pu(o),new Si({color:i.edge,transparent:!0,opacity:.9}));th(c,e),t.add(l,c)}async loadScenePointCloud(){if(!this.cloudVisible||!this.cameraExtrinsic)return null;const t=await fetch("/api/scene_pointcloud.bin",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.arrayBuffer();if(e.byteLength<8)throw new Error("点云数据为空");const i=new DataView(e),s=i.getUint32(0,!0),r=i.getUint32(4,!0),a=8+r*6*4;if(!r||e.byteLength<a)throw new Error("点云数据格式无效");const o=new Float32Array(e,8,r*6),l=new Float32Array(r*3),c=new Float32Array(r*3);for(let p=0;p<r;p+=1){const g=p*6,x=p*3,m=nh([o[g],o[g+1],o[g+2]],this.cameraExtrinsic),f=yi(m);l[x]=f.x,l[x+1]=f.y,l[x+2]=f.z,c[x]=o[g+3],c[x+1]=o[g+4],c[x+2]=o[g+5]}const u=new We;u.setAttribute("position",new dn(l,3)),u.setAttribute("color",new dn(c,3));const h=new Gh({size:.005,vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1}),d=new qp(u,h);return d.frustumCulled=!1,this.cloudPoints&&(this.scene.remove(this.cloudPoints),ld(this.cloudPoints)),this.cloudPoints=d,this.scene.add(d),{sequence:s,count:r}}setCloudVisible(t){this.cloudVisible=!!t,this.cloudPoints&&(this.cloudPoints.visible=this.cloudVisible)}setDefaultView(){this.camera.position.set(2.8,1.65,3.7),this.controls.target.set(0,.85+Sa,0),this.controls.update()}frontView(){const t=this.controls.target.clone();this.camera.position.set(t.x,t.y+.15,t.z+3.9),this.camera.up.set(0,1,0),this.controls.update()}fitView(){if(!this.robot){this.setDefaultView();return}this.robot.updateMatrixWorld(!0);const t=new Ci().setFromObject(this.robot),e=t.getCenter(new k),i=t.getSize(new k),r=Math.max(i.x,i.y,i.z,1)/(2*Math.tan(this.camera.fov*Math.PI/360));this.controls.target.copy(e),this.camera.position.set(e.x+r*.62,e.y+r*.18,e.z+r*1.08),this.camera.near=Math.max(.01,r/100),this.camera.far=Math.max(20,r*10),this.camera.updateProjectionMatrix(),this.controls.update()}resetView(){this.setDefaultView()}resize(){const t=this.canvas.parentElement;if(!t)return;const e=Math.max(1,t.clientWidth),i=Math.max(1,t.clientHeight);e===this.lastWidth&&i===this.lastHeight||(this.lastWidth=e,this.lastHeight=i,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())}dispose(){cancelAnimationFrame(this.animationFrame),this.resizeObserver.disconnect(),this.controls.dispose(),this.renderer.dispose()}}function yi(n){return new k(Number(n[0]),Number(n[2])+Sa,-Number(n[1]))}function Yi(n){return new k(Number(n[0]),Number(n[2]),-Number(n[1]))}function th(n,t){n.position.copy(yi(t.center)),n.quaternion.setFromRotationMatrix(Sx(t.rpy||[0,0,0]))}function Sx(n){const t=Ex(Number(n[0]||0),Number(n[1]||0),Number(n[2]||0)),e=[t[0][0],t[1][0],t[2][0]],i=[t[0][1],t[1][1],t[2][1]],s=[t[0][2],t[1][2],t[2][2]],r=Yi(e).normalize(),a=Yi(s).normalize(),o=Yi(i).multiplyScalar(-1).normalize();return new Jt().makeBasis(r,a,o)}function Ex(n,t,e){const i=Math.sin(n),s=Math.cos(n),r=Math.sin(t),a=Math.cos(t),o=Math.sin(e),l=Math.cos(e);return[[l*a,l*r*i-o*s,l*r*s+o*i],[o*a,o*r*i+l*s,o*r*s-l*i],[-r,a*i,a*s]]}function eh(n=0,t=0,e=0){const i=Math.cos(Number(t)),s=Math.sin(Number(t)),r=Math.cos(Number(e)),a=Math.sin(Number(e));return[r*i,a*i,-s]}function Tx(n){return n==="box_top"?5089498:n==="edge"?15249485:n==="random"?14148068:10135725}function od(n){const t=Math.cos(Number(n.pitch)),e=Math.sin(Number(n.pitch)),i=Math.cos(Number(n.roll)),s=Math.sin(Number(n.roll)),r=Math.cos(Number(n.yaw)),a=Math.sin(Number(n.yaw));return[[r*i,r*s*e-a*t,r*s*t+a*e],[a*i,a*s*e+r*t,a*s*t-r*e],[-s,i*e,i*t]]}function Wo(n,t){const e=od(n),i=[e[0][0]*t[0]+e[0][1]*t[1]+e[0][2]*t[2],e[1][0]*t[0]+e[1][1]*t[1]+e[1][2]*t[2],e[2][0]*t[0]+e[2][1]*t[1]+e[2][2]*t[2]];return Yi(i).normalize()}function nh(n,t){const e=od(t);return[Number(t.x)+e[0][0]*n[0]+e[0][1]*n[1]+e[0][2]*n[2],Number(t.y)+e[1][0]*n[0]+e[1][1]*n[1]+e[1][2]*n[2],Number(t.z)+e[2][0]*n[0]+e[2][1]*n[1]+e[2][2]*n[2]]}function Bn(n){return Array.isArray(n)&&n.length===3&&n.every(t=>Number.isFinite(Number(t)))}function wx(n){return Array.isArray(n)&&n.length===4&&n.every(t=>Number.isFinite(Number(t)))}function Ax(n,t){const[e,i,s]=n.map(Number),[r,a,o,l]=t.map(Number),c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return[e+l*c+(a*h-o*u),i+l*u+(o*c-r*h),s+l*h+(r*u-a*c)]}function vi(n){for(;n.children.length;){const t=n.children.pop();ld(t)}}function ld(n){var t;(t=n==null?void 0:n.traverse)==null||t.call(n,e=>{var i,s,r,a;(s=(i=e.geometry)==null?void 0:i.dispose)==null||s.call(i),Array.isArray(e.material)?e.material.forEach(o=>{var l;return(l=o==null?void 0:o.dispose)==null?void 0:l.call(o)}):(a=(r=e.material)==null?void 0:r.dispose)==null||a.call(r)})}/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=(n,t,e=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",n);return Object.keys(t).forEach(s=>{i.setAttribute(s,String(t[s]))}),e.length&&e.forEach(s=>{const r=cd(...s);i.appendChild(r)}),i};var Cx=([n,t,e])=>cd(n,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=n=>Array.from(n.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),Px=n=>typeof n=="string"?n:!n||!n.class?"":n.class&&typeof n.class=="string"?n.class.split(" "):n.class&&Array.isArray(n.class)?n.class:"",Lx=n=>n.flatMap(Px).map(e=>e.trim()).filter(Boolean).filter((e,i,s)=>s.indexOf(e)===i).join(" "),Nx=n=>n.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,i)=>e.toUpperCase()+i.toLowerCase()),ih=(n,{nameAttr:t,icons:e,attrs:i})=>{var g;const s=n.getAttribute(t);if(s==null)return;const r=Nx(s),a=e[r];if(!a)return console.warn(`${n.outerHTML} icon name was not found in the provided icons object.`);const o=Rx(n),[l,c,u]=a,h={...c,"data-lucide":s,...i,...o},d=Lx(["lucide",`lucide-${s}`,o,i]);d&&Object.assign(h,{class:d});const p=Cx([l,h,u]);return(g=n.parentNode)==null?void 0:g.replaceChild(p,n)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=["svg",ie,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=["svg",ie,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=["svg",ie,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=["svg",ie,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=["svg",ie,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=["svg",ie,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=["svg",ie,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=["svg",ie,[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=["svg",ie,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=["svg",ie,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=["svg",ie,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=["svg",ie,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=["svg",ie,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=["svg",ie,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=["svg",ie,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=["svg",ie,[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=["svg",ie,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=["svg",ie,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=["svg",ie,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=["svg",ie,[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=["svg",ie,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=["svg",ie,[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=["svg",ie,[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=["svg",ie,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=["svg",ie,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=["svg",ie,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=["svg",ie,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=["svg",ie,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=["svg",ie,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=["svg",ie,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=["svg",ie,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=["svg",ie,[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=["svg",ie,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=["svg",ie,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=["svg",ie,[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=["svg",ie,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=["svg",ie,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=["svg",ie,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=["svg",ie,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=["svg",ie,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=["svg",ie,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=["svg",ie,[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=["svg",ie,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=({icons:n={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(n).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(s=>ih(s,{nameAttr:t,icons:n,attrs:e})),t==="data-lucide"){const s=document.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(r=>ih(r,{nameAttr:"icon-name",icons:n,attrs:e})))}},Sy={ArrowDownToLine:Dx,ArrowUp:Ux,ArrowUpFromLine:Ix,Bot:Fx,Box:kx,CircleCheck:Ox,CircleX:Bx,Cloud:Vx,CloudDownload:zx,CornerDownLeft:Hx,Crosshair:Gx,Focus:Wx,FoldHorizontal:Xx,Gauge:$x,Grab:qx,Hand:jx,House:Yx,ListChecks:Kx,ListTree:Zx,MapPinPlus:Jx,Move3d:Qx,OctagonAlert:ty,PackageOpen:ey,PanelRight:ny,Play:iy,Plus:sy,Power:ay,PowerOff:ry,RefreshCw:oy,RotateCcw:ly,Route:cy,Save:uy,Scan:dy,ScanEye:hy,ScrollText:fy,ShieldAlert:py,ShieldCheck:my,SlidersHorizontal:gy,Trash2:_y,TriangleAlert:vy,UnfoldHorizontal:xy,View:yy,WandSparkles:by};function B(n){return document.getElementById(n)}function Mr(){My({icons:Sy,attrs:{"stroke-width":1.8}})}function _e(n,t=3){const e=Number(n);return Number.isFinite(e)?e.toFixed(t):"--"}function ee(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Hn(n,t,e,i="neutral"){const s=B(n);if(!s)return;const r=s.querySelector("b"),a=s.querySelector("span:last-child");r&&(r.textContent=t),a&&(a.textContent=e),s.dataset.state=i}function xn(n,t,e="neutral"){const i=B(n);i&&(i.textContent=t,i.dataset.state=e)}function Re(n,t="good",e=3600){const i=B("toastStack"),s=document.createElement("div"),r=t==="bad"?"circle-x":t==="warn"?"triangle-alert":"circle-check";s.className="toast",s.dataset.kind=t,s.innerHTML=`<i data-lucide="${r}"></i><p>${ee(n)}</p>`,i.appendChild(s),Mr(),window.setTimeout(()=>s.remove(),e)}function Ey(n){var s;const t=(s=n==null?void 0:n.payload)==null?void 0:s.failure;if(!t)return(n==null?void 0:n.message)||"未知错误";const e=[];t.stage_label&&e.push(t.stage_label),t.title&&e.push(t.title);const i=t.message||(n==null?void 0:n.message);return i&&!e.includes(i)&&e.push(i),t.moveit_error_code!==void 0&&e.push(`MoveIt=${t.moveit_error_code}${t.moveit_error_name?` ${t.moveit_error_name}`:""}`),t.hint&&e.push(t.hint),e.filter(Boolean).join(" | ")}function Xa(n,t="确认操作",e="确认"){const i=B("confirmDialog");return B("confirmTitle").textContent=t,B("confirmMessage").textContent=n,B("confirmAccept").textContent=e,i.hidden=!1,new Promise(s=>{const r=u=>{i.hidden=!0,B("confirmCancel").removeEventListener("click",a),B("confirmAccept").removeEventListener("click",o),i.removeEventListener("click",l),window.removeEventListener("keydown",c),s(u)},a=()=>r(!1),o=()=>r(!0),l=u=>{u.target===i&&a()},c=u=>{u.key==="Escape"&&a(),u.key==="Enter"&&o()};B("confirmCancel").addEventListener("click",a),B("confirmAccept").addEventListener("click",o),i.addEventListener("click",l),window.addEventListener("keydown",c),B("confirmCancel").focus()})}async function we(n,t,e={}){const{confirm:i,confirmTitle:s,success:r=`${n}完成`,quiet:a=!1,onError:o=null}=e;if(document.body.dataset.busy)return Re("已有命令正在执行，请等待完成","warn",2200),null;if(i&&!await Xa(i,s))return null;B("footerMessage").textContent=`${n}...`,document.body.dataset.busy="true",document.querySelectorAll("button").forEach(l=>{l.disabled||(l.dataset.busyDisabled="true",l.disabled=!0)});try{const l=await t();return B("footerMessage").textContent=r,a||Re(r),l}catch(l){const c=`${n}失败：${Ey(l)}`;return B("footerMessage").textContent=c,Re(c,"bad",9e3),o==null||o(l,c),null}finally{document.querySelectorAll('button[data-busy-disabled="true"]').forEach(l=>{l.disabled=!1,delete l.dataset.busyDisabled}),delete document.body.dataset.busy}}const Na=[["x","X",-.65,.75,.001,.3],["y","Y",-.65,.65,.001,0],["z","Z",.02,.85,.001,.35]],rc=[["roll","Roll",-180,180,1],["pitch","Pitch",-180,180,1],["yaw","Yaw",-180,180,1]],Da=[["x","X",-2,2,.001,0],["y","Y",-2,2,.001,0],["z","Z",0,3,.001,1.4],["roll","Roll",-3.142,3.142,.001,0],["pitch","Pitch",-3.142,3.142,.001,-1.571],["yaw","Yaw",-3.142,3.142,.001,3.142],["image_rotation_deg","Image Rot",0,270,90,180]],Ul=[["1","q"],["2","w"],["3","e"],["4","r"],["5","t"],["6","y"]],Ty=.8*Math.PI/180,wy=180,Ay={approach:"接近",grasp:"抓取",lift:"抬起",move:"移动",release:"释放",close:"闭合",pick:"自动夹取",wait:"等待"},Cy="side",Ry=180/Math.PI,Py=Math.PI/180,ud="piper.graspOrientation",hd="piper.lockGraspOrientation",ri={vertical:{roll:0,pitch:-Math.PI/2,yaw:Math.PI,grasp_orientation_mode:"vertical_grasp"},side:{roll:Math.PI/2,pitch:0,yaw:0,grasp_orientation_mode:"side_grasp"},z_parallel:{roll:0,pitch:Math.PI/6,yaw:0,grasp_orientation_mode:"angled_grasp"}},sh={vertical_grasp:{title:"垂直抓取",summary:"IK 先验证垂直末端姿态，再按候选姿态逐个规划。",scanLabel:"垂直候选",candidateText:n=>ar(n)},side_grasp:{title:"侧面抓取",summary:"IK 扫描侧向接近姿态，找到可规划候选后锁定。",scanLabel:"侧向候选",candidateText:n=>ar(n)},angled_grasp:{title:"斜向抓取",summary:"IK 扫描斜向抓取姿态，兼顾目标方向和碰撞约束。",scanLabel:"斜向候选",candidateText:n=>ar(n)},z_parallel_grasp:{title:"斜向抓取",summary:"IK 扫描斜向抓取姿态，兼顾目标方向和碰撞约束。",scanLabel:"斜向候选",candidateText:n=>ar(n)},flexible_grasp:{title:"灵活抓取",summary:"IK 扫描圆柱接触方向，先确认预抓取，再确认抓取位姿。",scanLabel:"接触角",candidateText:n=>Number.isFinite(Number(n==null?void 0:n.theta_deg))?`theta ${_e(n.theta_deg,1)}°`:ar(n)}},dd="piper.omplConfig",Pn={planner_id:"RRTConnectkConfigDefault",planning_time:1,attempts:1,ik_timeout:.6},Ly={box_top:"箱上",edge:"边缘",random:"随机",custom:"自定义"},C={arm:"right",activePanel:"motion",linksByArm:{right:[],left:[]},jointState:null,jointConfig:null,jointLimitsByArm:{right:{},left:{}},kinematics:null,ompl:{options:null,config:Rb(),selectedPresetId:null},benchmark:{options:null,defaultsApplied:!1,selectedPlanners:[],samples:[],selectedSampleId:null,result:null,progress:null},visionTarget:null,cameraExtrinsic:null,points:[],presets:[],sequence:sM(),cloudVisible:localStorage.getItem("piper.cloudVisible")!=="false",graspPoseMode:wi(localStorage.getItem("piper.graspPoseMode")),platformObstacleVisible:!1,platformObstacleApplied:!1,manualCollision:{boxes:[],applied:!1},workspaceBoundsByArm:{right:{enabled:!1,min:[-.55,-.55,.02],max:[.65,.55,.85]},left:{enabled:!1,min:[-.55,-.55,.02],max:[.65,.55,.85]}},lastPlanByArm:{right:null,left:null},lastDecisionError:null,robotByArm:{right:{motors_enabled:null,estop_active:null},left:{motors_enabled:null,estop_active:null}},lastStatusAt:0};C.graspOrientation=Yy(C.graspPoseMode);C.lockGraspOrientation=localStorage.getItem(hd)!=="false";let ot;const Is=new Set;let Xo=!1,dr=null,rh=0,Ea=null;function Ny(){ky(),Oy(),By(),ah("velocityScaling","velocityValue",n=>Number(n).toFixed(2)),ah("accelerationScaling","accelerationValue",n=>Number(n).toFixed(2)),zy(),Gy(),Wy(),pd(),oc(),Bl({anyConnected:!1,anyEnabled:!1,allEnabled:!1,anyEstop:!1}),Ad(),Zi(),Gn(),Ai(),Ja(),Ui(),as(),ci(),Ii(),Mr(),Dy(),Fy(),Iy(),Uy()}function Dy(){ot=new Mx(B("robotScene"),{onLoadProgress:(n,t)=>{B("sceneLoadState").querySelector("span:last-child").textContent=`正在加载 Piper URDF ${n}/${t}`},onLoaded:n=>{B("sceneLoadState").classList.add("ready"),B("sceneLoadState").querySelector("span:last-child").textContent="Piper URDF 已加载",B("sceneModelState").textContent=`${Object.keys(n.joints||{}).length} 个关节`,ot.applyJointState(C.jointState),window.setTimeout(()=>{B("sceneLoadState").hidden=!0},1e3)},onLoadError:n=>{B("sceneLoadState").querySelector("span:last-child").textContent="URDF 加载失败",B("sceneModelState").textContent="模型不可用",Re(`URDF 加载失败：${n.message||n}`,"bad",6e3)},onFps:n=>{B("sceneFps").textContent=`${n} FPS`}}),ot.setCloudVisible(C.cloudVisible),ot.setTargetPose(ln())}async function Iy(){await Promise.allSettled([Di(),ss(),dc(),ja(),Tb(),Md(),bd(),bc(),Mc(),Sd(!1),vb(!1),mb(!1),_c(),Ks(),Sr(!1)]),fc()}function Uy(){pa(Di,100),pa(dc,400),pa(ss,600),pa(bd,2e3),window.setInterval(()=>{C.activePanel==="logs"&&B("logAutoRefresh").checked&&Fa()},3e3)}function pa(n,t){let e=!1;window.setInterval(async()=>{if(!e){e=!0;try{await n()}finally{e=!1}}},t)}function Fy(){const n=()=>{B("footerClock").textContent=new Date().toLocaleTimeString("zh-CN",{hour12:!1})};n(),window.setInterval(n,1e3)}function ky(){const n=B("poseFields");n.innerHTML=Na.map(([t,e,i,s,r,a])=>`
    <label class="pose-field pose-slider-field">
      <span>${e} / m</span>
      <output id="pose_${t}_value">${_e(a,3)}</output>
      <input id="pose_${t}" type="range" min="${i}" max="${s}" step="${r}" value="${a}">
    </label>
  `).join("");for(const[t]of Na)B(`pose_${t}`).addEventListener("input",()=>{fd(t),ot==null||ot.setTargetPose(ln())})}function Oy(){const n=B("graspOrientationFields");if(!n)return;n.innerHTML=rc.map(([e,i,s,r,a])=>`
    <label>${i}<input id="grasp_${e}" type="number" min="${s}" max="${r}" step="${a}" /><span>deg</span></label>
  `).join("");const t=B("lockGraspOrientation");t&&(t.checked=C.lockGraspOrientation),uc(C.graspOrientation,{persist:!1})}function fd(n){const t=B(`pose_${n}_value`);t&&(t.textContent=_e(Number(B(`pose_${n}`).value),3))}function By(){const n=B("cameraFields");n.innerHTML=Da.map(([t,e,i,s,r,a])=>`
    <label class="pose-field">
      <span>${e}</span>
      <input id="camera_${t}" type="number" min="${i}" max="${s}" step="${r}" value="${a}">
    </label>
  `).join("");for(const[t]of Da)B(`camera_${t}`).addEventListener("input",()=>{C.cameraExtrinsic=Xs(),ot==null||ot.setCameraExtrinsic(C.cameraExtrinsic),B("extrinsicStatus").textContent="外参已修改，尚未保存"})}function ah(n,t,e){const i=B(n),s=B(t);if(!i||!s)return;const r=()=>{s.textContent=e(i.value)};i.addEventListener("input",r),r()}function zy(){document.querySelectorAll("[data-panel]").forEach(n=>{n.addEventListener("click",()=>Vy(n.dataset.panel))}),B("toggleInspector").addEventListener("click",()=>{B("inspectorPanel").classList.toggle("open")}),document.querySelectorAll("[data-arm]").forEach(n=>{n.addEventListener("click",()=>ac(n.dataset.arm))}),document.querySelectorAll("[data-grasp-mode]").forEach(n=>{n.addEventListener("click",()=>Hy(n.dataset.graspMode))}),B("fitViewButton").addEventListener("click",()=>ot.fitView()),B("frontViewButton").addEventListener("click",()=>ot.frontView()),B("resetViewButton").addEventListener("click",()=>ot.resetView()),document.querySelector(".scene-panel").addEventListener("click",n=>{n.target.closest("button")||(window.innerWidth<=760&&B("controlPanel").classList.remove("open"),window.innerWidth<=1040&&B("inspectorPanel").classList.remove("open"))})}function Vy(n){C.activePanel=n,document.querySelectorAll("[data-panel]").forEach(t=>{t.classList.toggle("active",t.dataset.panel===n)}),document.querySelectorAll("[data-panel-content]").forEach(t=>{t.classList.toggle("active",t.dataset.panelContent===n)}),window.innerWidth<=760&&B("controlPanel").classList.add("open"),n==="logs"&&Fa(),n==="ompl"&&Ks(),n==="benchmark"&&Sr(),n==="calibration"&&(mc(),_c())}async function ac(n){cc(),C.arm="right",localStorage.setItem("piper.activeArm",C.arm),pd(),await Promise.allSettled([Di(),ss(),dc(),ja()]),C.activePanel==="calibration"&&mc(),B("footerMessage").textContent=`当前控制：${tn()}`}function pd(){document.querySelectorAll("[data-arm]").forEach(n=>{const t=n.dataset.arm===C.arm;n.classList.toggle("active",t),n.setAttribute("aria-selected",String(t))}),B("jointPanelTitle").textContent=`${tn()}关节`,pc(),ot==null||ot.setWorkspaceBounds(ts()),Ia(),yd(),Ui(),ci(),C.activePanel==="benchmark"&&Sr(!1)}function wi(n){return n==="vertical"||n==="side"||n==="z_parallel"?n:Cy}function Hy(n){C.graspPoseMode=wi(n),localStorage.setItem("piper.graspPoseMode",C.graspPoseMode),uc(ri[C.graspPoseMode]),oc(),Ai(),ot==null||ot.setTargetPose(ln())}function oc(){document.querySelectorAll("[data-grasp-mode]").forEach(n=>{const t=n.dataset.graspMode===C.graspPoseMode;n.classList.toggle("active",t),n.setAttribute("aria-selected",String(t))})}function Gy(){const n=(t,e,i)=>{var s;return(s=B(t))==null?void 0:s.addEventListener(e,i)};n("syncTcpButton","click",Zy),n("planButton","click",Qy),n("executeButton","click",nb),n("approachButton","click",()=>or("approach")),n("graspButton","click",()=>or("grasp")),n("liftButton","click",()=>or("lift")),n("autoPickButton","click",ib),n("readVisionButton","click",()=>Jy(!0)),n("savePointQuickButton","click",dh),n("savePointButton","click",dh),n("savePresetButton","click",Jb),n("emergencyStop","click",lb),n("enableButton","click",sb),n("disableButton","click",rb),n("resetEstopButton","click",ab),n("homeButton","click",ob),n("gripperOpenButton","click",()=>or("gripper_open")),n("gripperCloseButton","click",()=>or("gripper_close")),n("reloadExtrinsicButton","click",Md),n("saveExtrinsicButton","click",cb),n("toggleCloudButton","click",ub),n("saveCloudButton","click",hb),n("rebuildCloudButton","click",db),n("loadPlatformButton","click",fb),n("applyPlatformButton","click",pb),n("addCollisionBoxButton","click",xb),n("saveCollisionBoxesButton","click",bb),n("applyCollisionBoxesButton","click",Mb),n("clearCollisionBoxesButton","click",Sb),n("graspOrientationFields","input",qy),n("lockGraspOrientation","change",jy),n("manualCollisionFields","input",ch),n("manualCollisionFields","change",ch),n("manualCollisionFields","click",yb),n("workspaceBoundsFields","input",lh),n("workspaceBoundsFields","change",lh),n("saveWorkspaceBoundsButton","click",_b),n("loadJointConfigButton","click",mc),n("saveJointConfigButton","click",wb),n("reloadKinematicsButton","click",_c),n("saveKinematicsButton","click",Cb),n("reloadOmplConfigButton","click",Ks),n("applyOmplPresetButton","click",Lb),n("saveOmplPresetButton","click",Nb),n("deleteOmplPresetButton","click",Db),n("omplPlannerSelect","change",ma),n("omplPlanningTime","input",ma),n("omplAttempts","input",ma),n("omplIkTimeout","input",ma),n("generateBenchmarkButton","click",Vb),n("runBenchmarkButton","click",Hb),n("saveBenchmarkPresetButton","click",kb),n("exportBenchmarkCsvButton","click",Ob),n("benchmarkSamples","click",Zb),n("benchmarkPlanners","change",qb),["benchmarkCollisionBox","benchmarkBoxCount","benchmarkBoxOffsetCm","benchmarkEdgeCount","benchmarkEdgeDistanceCm","benchmarkRandomCount","benchmarkSeed"].forEach(t=>n(t,t==="benchmarkCollisionBox"?"change":"input",Xb)),["benchmarkPlanningTime","benchmarkAttempts","benchmarkIkTimeout"].forEach(t=>{n(t,"input",$b)}),n("addSequenceButton","click",tM),n("clearSequenceButton","click",nM),n("executeSequenceButton","click",iM),n("refreshLogsButton","click",Fa),n("logLevelFilter","change",Fa),n("pointsList","click",fh),n("presetsList","click",fh),n("sequenceList","click",eM)}function Wy(){window.addEventListener("keydown",n=>{if(Xy(n.target)||!B("confirmDialog").hidden)return;const t=n.key.toLowerCase();if(t==="tab"||t==="["||t==="]"){if(n.preventDefault(),n.repeat)return;ac();return}const e=Fl(t);if(e){if(n.preventDefault(),!lc()){n.repeat||Re(`${tn()}尚未使能，不能使用关节键盘控制`,"warn");return}Is.add(t),kl(t,!0),n.repeat||Ol(e.joint,e.direction),$y()}}),window.addEventListener("keyup",n=>{const t=n.key.toLowerCase();Fl(t)&&(Is.delete(t),kl(t,!1),Is.size||md())}),window.addEventListener("blur",cc),B("jointTelemetry").addEventListener("click",n=>{const t=n.target.closest("[data-jog-joint]");!t||t.disabled||Ol(Number(t.dataset.jogJoint),Number(t.dataset.jogDirection))})}function Xy(n){return n instanceof HTMLElement&&(n.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(n.tagName))}function Fl(n){for(let t=0;t<Ul.length;t+=1){const[e,i]=Ul[t];if(n===e)return{joint:t+1,direction:1};if(n===i)return{joint:t+1,direction:-1}}return null}function lc(){const n=C.robotByArm[C.arm];return(n==null?void 0:n.motors_enabled)===!0&&(n==null?void 0:n.estop_active)!==!0}function kl(n,t){document.querySelectorAll(`[data-jog-key="${n}"]`).forEach(e=>{e.classList.toggle("pressed",t)})}function $y(){dr||(dr=window.setInterval(()=>{const n=Is.values().next().value,t=Fl(n);t&&Ol(t.joint,t.direction)},wy))}function md(){dr&&(window.clearInterval(dr),dr=null)}function cc(){Is.clear(),md(),document.querySelectorAll("[data-jog-key].pressed").forEach(n=>n.classList.remove("pressed"))}async function Ol(n,t){if(!(Xo||!lc())){Xo=!0;try{const e=await qt("/api/joint_jog",{arm:C.arm,joint:n,delta_rad:t*Ty,duration_sec:.25}),i=Number(e.target_rad)*180/Math.PI;B("footerMessage").textContent=`${tn()} J${n} → ${Number.isFinite(i)?`${i.toFixed(1)}°`:"已发送"}`}catch(e){cc(),Date.now()-rh>1500&&(Re(`关节键盘控制失败：${e.message}`,"bad",5e3),rh=Date.now())}finally{Xo=!1}}}function ln(){const n=Object.fromEntries(Na.map(([r])=>[r,Number(B(`pose_${r}`).value)])),t=wi(C.graspPoseMode),e=gd(),i=_d();return{...n,roll:e.roll,pitch:e.pitch,yaw:e.yaw,arm:C.arm,velocity_scaling:Number(B("velocityScaling").value),acceleration_scaling:Number(B("accelerationScaling").value),orientation_tolerance:i?.12:.5,position_tolerance:i?.012:.006,stay_near:!1,avoid_platform:B("avoidPlatform").checked,collision_boxes:wd(),grasp_orientation_mode:ri[t].grasp_orientation_mode,position_only:!i,...Ka()}}function $a(){return{...ln(),position_only:!1,orientation_tolerance:.12,position_tolerance:.012}}function an(n,t){var i;const e=Number((i=B(n))==null?void 0:i.value);return Number.isFinite(e)?e:t}function qa(n){for(const[e]of Na)Number.isFinite(Number(n==null?void 0:n[e]))&&(B(`pose_${e}`).value=n[e],fd(e));const t=Ky(n==null?void 0:n.grasp_orientation_mode);t&&(C.graspPoseMode=t,localStorage.setItem("piper.graspPoseMode",C.graspPoseMode),oc()),["roll","pitch","yaw"].some(e=>Number.isFinite(Number(n==null?void 0:n[e])))&&uc(n),ot==null||ot.setTargetPose(ln())}function gd(){var e;const n=C.graspOrientation||ri[wi(C.graspPoseMode)],t={};for(const[i]of rc){const s=Number((e=B(`grasp_${i}`))==null?void 0:e.value);t[i]=Number.isFinite(s)?s*Py:n[i]}return t}function uc(n,t={}){const e={roll:Cn(n==null?void 0:n.roll,ri[wi(C.graspPoseMode)].roll),pitch:Cn(n==null?void 0:n.pitch,ri[wi(C.graspPoseMode)].pitch),yaw:Cn(n==null?void 0:n.yaw,ri[wi(C.graspPoseMode)].yaw)};C.graspOrientation=e;for(const[i]of rc){const s=B(`grasp_${i}`);s&&(s.value=_e(e[i]*Ry,1))}t.persist!==!1&&vd()}function qy(){C.graspOrientation=gd(),vd(),Ai(),ot==null||ot.setTargetPose(ln())}function jy(){C.lockGraspOrientation=_d(),localStorage.setItem(hd,String(C.lockGraspOrientation)),Ai(),ot==null||ot.setTargetPose(ln())}function _d(){const n=B("lockGraspOrientation");return n?n.checked:C.lockGraspOrientation!==!1}function vd(){localStorage.setItem(ud,JSON.stringify(C.graspOrientation))}function Yy(n){try{const e=JSON.parse(localStorage.getItem(ud)||"{}");if(["roll","pitch","yaw"].every(i=>Number.isFinite(Number(e[i]))))return{roll:Number(e.roll),pitch:Number(e.pitch),yaw:Number(e.yaw)}}catch{}const t=wi(n);return{roll:ri[t].roll,pitch:ri[t].pitch,yaw:ri[t].yaw}}function Ky(n){return n==="vertical_grasp"?"vertical":n==="side_grasp"?"side":n==="angled_grasp"||n==="z_parallel_grasp"?"z_parallel":null}function Xs(){return Object.fromEntries(Da.map(([n])=>[n,Number(B(`camera_${n}`).value)]))}function hc(n){for(const[t]of Da)Number.isFinite(Number(n==null?void 0:n[t]))&&(B(`camera_${t}`).value=n[t]);C.cameraExtrinsic=Xs(),ot==null||ot.setCameraExtrinsic(C.cameraExtrinsic)}async function Di(){var n,t,e;try{const i=await Vd();C.lastStatusAt=Date.now(),C.jointState=i.joint_state||null,C.lastPlanByArm={...C.lastPlanByArm,...i.last_plan||{}},ot==null||ot.applyJointState(C.jointState),Ia(),Ai();const s=(n=i.last_plan)==null?void 0:n[C.arm],r=((t=i.status)==null?void 0:t[C.arm])||"就绪",a=(e=s==null?void 0:s.ompl)!=null&&e.planner_id?` / ${s.ompl.planner_id}`:"";Hn("statusPlan","规划",s?`${s.points??"--"} 点 / ${_e(s.duration,2)} s${a}`:r,s?"good":"neutral"),Hn("statusConnection","控制服务","在线","good"),!document.body.dataset.busy&&B("footerMessage").textContent.startsWith("等待")&&(B("footerMessage").textContent="Piper 控制服务在线")}catch{Hn("statusConnection","控制服务","离线","bad"),Hn("statusPlan","规划","状态不可用","bad"),document.body.dataset.busy||(B("footerMessage").textContent="Piper 控制服务离线")}}async function ss(){var n;try{const t=await Hd();let e=!1,i=!1,s=!1,r=!0,a=!0;for(const o of["right"]){const l=((n=t.state)==null?void 0:n[o])||{};C.robotByArm[o]={motors_enabled:l.motors_enabled,estop_active:l.estop_active};const c=B(`${o}ArmState`),u=l.motors_enabled,h=l.estop_active;e||(e=u!=null),s||(s=u===!0),r&&(r=u===!0),a&&(a=u!=null),i||(i=h===!0),c.children[1].textContent=u==null?"未连接":u?"已使能":"未使能",c.children[2].textContent=h==null?"--":h?"急停":"正常",c.dataset.state=h?"bad":u?"good":"neutral"}C.robotByArm.left={motors_enabled:null,estop_active:null},r&&(r=a),xn("robotOverallState",i?"急停":e?"在线":"未连接",i?"bad":e?"good":"bad"),Bl({anyConnected:e,anyEnabled:s,allEnabled:r,anyEstop:i}),Ia()}catch{C.robotByArm.right={motors_enabled:null,estop_active:null},C.robotByArm.left={motors_enabled:null,estop_active:null},xn("robotOverallState","离线","bad"),Bl({anyConnected:!1,anyEnabled:!1,allEnabled:!1,anyEstop:!1}),Ia()}}async function dc(){try{const[n,t]=await Promise.all([wc("right"),wc("left")]);C.linksByArm.right=n.links||[],C.linksByArm.left=t.links||[],yd()}catch{Hn("statusTcp","末端位置","读取失败","bad")}}function xd(){var t;const n="link6";return(t=C.linksByArm[C.arm])==null?void 0:t.find(e=>e.name===n&&e.position)}function yd(){const n=xd(),t=n==null?void 0:n.position;B("tcpX").textContent=_e(t==null?void 0:t[0]),B("tcpY").textContent=_e(t==null?void 0:t[1]),B("tcpZ").textContent=_e(t==null?void 0:t[2]),ot==null||ot.setTcpFrame(n),Hn("statusTcp","末端位置",t?`${_e(t[0],2)}, ${_e(t[1],2)}, ${_e(t[2],2)}`:"等待数据",t?"good":"neutral")}function Zy(){const n=xd();if(!n){Re("当前没有可用的末端位置数据","warn");return}qa({...ln(),x:n.position[0],y:n.position[1],z:n.position[2]}),Re(`已同步 ${tn()}末端位置`)}function Ia(){var s;const n=B("jointTelemetry"),t=C.jointState,e=lc(),i=[];for(let r=1;r<=6;r+=1){const a=((s=t==null?void 0:t.name)==null?void 0:s.indexOf(`joint${r}`))??-1,l=(a>=0?Number(t.position[a]):NaN)*180/Math.PI,c=Number.isFinite(l)?Math.min(50,Math.abs(l)/3.6):0,u=l<0?"translateX(-100%)":"none",[h,d]=Ul[r-1];i.push(`
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
    `)}n.innerHTML=i.join(""),Is.forEach(r=>kl(r,!0)),B("jointStamp").textContent=t?"实时":"--"}async function ja(){try{const t=(await Gd(C.arm)).state==="closed";xn("gripperState",t?"已闭合":"已张开","good")}catch{xn("gripperState","未知","bad")}}async function bd(){var n;try{const[t,e]=await Promise.allSettled([ph(),Wd()]);if(t.status==="fulfilled"&&((n=t.value)!=null&&n.urdf_xyz_m)){C.visionTarget=t.value;const i=C.visionTarget.urdf_xyz_m;ot==null||ot.setVisionTarget(C.visionTarget),B("visionX").textContent=_e(i[0]),B("visionY").textContent=_e(i[1]),B("visionZ").textContent=_e(i[2]),Hn("statusVision","视觉",`${_e(i[0],2)}, ${_e(i[1],2)}, ${_e(i[2],2)}`,"good")}else Hn("statusVision","视觉","无目标","neutral");if(e.status==="fulfilled"){const i=e.value.objects||e.value.detections||[];ot==null||ot.setObjectMarkers(i),xn("cloudState","视觉在线","good")}}catch{Hn("statusVision","视觉","离线","bad"),xn("cloudState","未连接","bad")}}async function Jy(n){await we("读取视觉目标",async()=>{const t=await ph();if(!(t!=null&&t.urdf_xyz_m))throw new Error((t==null?void 0:t.error)||"未找到有效视觉目标");if(C.visionTarget=t,ot.setVisionTarget(t),n){const[e,i,s]=t.urdf_xyz_m;qa({...ln(),x:e,y:i,z:s})}return t})}async function Qy(){await we("运动规划",async()=>{var t,e,i;C.lastDecisionError=null,Ai({pending:!0});const n=await qt("/api/plan",ln());return((t=n.plan)!=null&&t.platform_obstacles||(e=n.plan)!=null&&e.platform_obstacle)&&ot.setPlatformObstacle(n.plan.platform_obstacles||n.plan.platform_obstacle),Ya((i=n.plan)==null?void 0:i.manual_collision),n.plan&&(C.lastPlanByArm[C.arm]=n.plan,Ai()),await Di(),n},{onError:n=>{var s;const t=(s=n==null?void 0:n.payload)==null?void 0:s.failure;C.lastDecisionError=t||{title:n.message},Ai();const e=t!=null&&t.stage_label?`${t.stage_label}失败`:"规划失败",i=(t==null?void 0:t.title)||n.message;Hn("statusPlan",e,i,"bad")}})}function Ai(n={}){var g;const t=ln(),e=C.lastPlanByArm[C.arm],i=(e==null?void 0:e.grasp_orientation)||null,s=t.grasp_orientation_mode,r=!!(i&&eb(i.mode,s)),a=r?i.mode:s,o=sh[a]||sh[t.grasp_orientation_mode],l=Array.isArray(i==null?void 0:i.rejected_candidates)?i.rejected_candidates.length:0,c=Number(i==null?void 0:i.candidate_index),u=r&&Number.isFinite(c)?Math.max(1,c):null,h=r?Math.max(u||1,l+1):3,d=tb({detail:o,orientation:i,plan:e,pose:t,selected:r,pending:n.pending,activeIndex:u,totalScan:h});C.lastDecisionError&&d.push({label:"失败",detail:C.lastDecisionError.stage_label||C.lastDecisionError.title||"未找到可行候选",state:"failed"});const p=`
    <div class="decision-title">
      <strong>${ee(o.title)}</strong>
      <span>${ee(r?"已确定":n.pending?"规划中":"预览")}</span>
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
  `;for(const x of["decisionPreview","activeDecisionPreview"]){const m=B(x);m&&(m.innerHTML=p)}xn("decisionState",r?"已确定":n.pending?"规划中":"预览",r?"good":n.pending?"warn":"neutral")}function tb({detail:n,orientation:t,plan:e,pose:i,selected:s,pending:r,activeIndex:a,totalScan:o}){var h,d;const l=Math.min(o,6),c=[],u=s&&String((e==null?void 0:e.mode)||"").includes("direct IK fallback");for(let p=1;p<=l;p+=1){const g=s&&a&&p<a,x=s&&a===p,f=x?"done":g?"failed":r&&p===1?"active":"idle",P=x?u?"failed":"done":g?"failed":"idle",R=x?n.candidateText(t):`IK ${_e(i.ik_timeout,2)}s`,T=x?u?"OMPL失败，使用IK直达":`${((h=e==null?void 0:e.ompl)==null?void 0:h.planner_id)||"OMPL"} ${_e(((d=e==null?void 0:e.ompl)==null?void 0:d.planning_time)??i.planning_time,1)}s`:g?"未通过":"等待IK通过";c.push({label:`${n.scanLabel}${p} IK`,detail:R,state:f}),c.push({label:`${n.scanLabel}${p} OMPL`,detail:T,state:P})}return c.push({label:s?"确定":r?"等待结果":"待确定",detail:s?`${n.title} · ${(e==null?void 0:e.mode)||"规划完成"}`:n.title,state:s?"done":r?"active":"idle"}),c}function ar(n){const t=[];for(const e of["roll","pitch","yaw"]){const i=Number(n==null?void 0:n[e]);Number.isFinite(i)&&t.push(`${e} ${_e(i,2)}`)}return t.length?t.join(" / "):"候选姿态"}function eb(n,t){return n===t?!0:n==="angled_grasp"&&t==="z_parallel_grasp"}async function nb(){await we("执行规划",async()=>{const n=await qt("/api/execute",{arm:C.arm});return await Di(),n},{confirm:`即将让${tn()}执行最后一次规划，确认工作区安全后继续。`,confirmTitle:"确认执行轨迹"})}async function or(n){const t=["approach","grasp"].includes(n)?$a():ln(),i={approach:["接近目标","/api/approach",{pose:t,offset_z:an("pickApproach",.1)}],lift:["抬起机械臂","/api/lift",{arm:C.arm,offset_z:an("pickLift",.1)}],grasp:["抓取目标","/api/grasp",{pose:t}],place:["放置目标","/api/place",{pose:t}],gripper_open:["张开夹爪","/api/gripper",{arm:C.arm,action:"open"}],gripper_close:["闭合夹爪","/api/gripper",{arm:C.arm,action:"close"}]}[n];if(!i)return;const s=await we(i[0],async()=>qt(i[1],i[2]),{confirm:`${i[0]}将驱动${tn()}，确认周围无人员或障碍物。`});Ya(_r(s)),await ja(),await Di()}async function ib(){const n=await we("自动夹取",async()=>qt("/api/pick",{pose:$a(),approach_height:an("pickApproach",.1),descend_distance:an("pickDescend",.05),hold_seconds:an("pickHold",1),lift_height:an("pickLift",.1)}),{confirm:`即将由${tn()}执行完整夹取流程，请确认目标位姿和现场安全。`,confirmTitle:"确认自动夹取"});Ya(_r(n)),await ja()}async function sb(){await we("Piper 使能",()=>qt("/api/enable",{arm:"right",enabled:!0}),{confirm:"即将使能 Piper，确认急停可用且工作区安全。"}),ss()}async function rb(){await we("取消使能",()=>qt("/api/enable",{arm:"right",enabled:!1})),ss()}async function ab(){await we("复位急停",()=>qt("/api/reset_estop",{arm:"right"}),{confirm:"确认急停原因已经排除，然后复位 Piper 急停状态。"}),ss()}async function ob(){const n=await we("Piper 回零",()=>{var t;return qt("/api/home_zero",{arm:"right",avoid_platform:((t=B("avoidPlatform"))==null?void 0:t.checked)!==!1,collision_boxes:wd(),velocity_scaling:Number(B("velocityScaling").value),acceleration_scaling:Number(B("accelerationScaling").value),...Ka()})},{confirm:"将让 Piper 回到零位，请确认工作区安全。",confirmTitle:"确认 Piper 回零"});Ya(_r(n)),Di()}async function lb(){if(await Xa("将立即向 Piper 发送停止命令。","紧急停止","立即停止"))try{await qt("/api/estop",{arm:"right",active:!0}),Re("已发送 Piper 停止命令","warn",5e3),ss()}catch(n){Re(`急停命令发送失败：${n.message}`,"bad",6e3)}}async function Md(){try{const n=await Xd();hc(n.extrinsic||{}),B("extrinsicStatus").textContent=`已读取 ${n.path||"camera_extrinsic.json"}`}catch(n){B("extrinsicStatus").textContent=`读取失败：${n.message}`}}async function cb(){await we("保存相机外参",async()=>{const n=await qt("/api/camera_extrinsic",Xs());return hc(n.extrinsic||Xs()),B("extrinsicStatus").textContent=`已保存 ${n.path||"camera_extrinsic.json"}`,n},{confirm:"该配置将写入相机外参文件，并影响视觉目标与点云坐标。"})}async function fc(){try{const n=await ot.loadScenePointCloud();xn("cloudState",`${n.count} 点`,"good")}catch{xn("cloudState","暂无点云","neutral")}}function ub(){C.cloudVisible=!C.cloudVisible,localStorage.setItem("piper.cloudVisible",String(C.cloudVisible)),ot.setCloudVisible(C.cloudVisible),Ad()}async function hb(){await we("保存场景点云",async()=>{const n=await qt("/api/scene_pointcloud/save",{});return await fc(),n})}async function db(){await we("按当前外参重建点云",async()=>{const n=await qt("/api/camera_extrinsic",Xs());hc(n.extrinsic||Xs());const t=await qt("/api/scene_pointcloud/save",{});return await fc(),B("extrinsicStatus").textContent=`已保存 ${n.path||"camera_extrinsic.json"}`,t},{confirm:"将保存当前相机外参，并让视觉服务按该外参重新保存静态场景点云。",confirmTitle:"确认重建点云"})}async function Sd(n){try{const e=(await tf()).platform_obstacle;return Eb(e)?(ot==null||ot.setPlatformObstacle(e),C.platformObstacleVisible=!0,C.platformObstacleApplied=!0,B("platformState").textContent="避障区已显示",Zi(),n&&Re("已显示平台避障区"),e):(ot==null||ot.setPlatformObstacle(null),C.platformObstacleVisible=!1,C.platformObstacleApplied=!1,B("platformState").textContent="避障区未加载",Zi(),n&&Re("当前没有已应用的避障区","warn"),null)}catch(t){return B("platformState").textContent=`读取失败：${t.message}`,Zi(),null}}async function fb(){if(C.platformObstacleVisible){ot==null||ot.setPlatformObstacle(null),C.platformObstacleVisible=!1,B("platformState").textContent=C.platformObstacleApplied?"避障区已隐藏，规划场景仍保留":"避障区已隐藏",Zi();return}await Sd(!0)}async function pb(){if(C.platformObstacleApplied){await we("取消平台避障区",async()=>{const n=await qt("/api/platform_obstacle/clear",{});return ot==null||ot.setPlatformObstacle(null),C.platformObstacleVisible=!1,C.platformObstacleApplied=!1,B("platformState").textContent="避障区已从规划场景移除",Zi(),n},{confirm:"将从 MoveIt 规划场景移除当前平台避障区，后续规划不再使用该避障区。",confirmTitle:"确认取消避障区"});return}await we("应用平台避障区",async()=>{const n=await qt("/api/platform_obstacle/apply",{});return ot.setPlatformObstacle(n.platform_obstacle),C.platformObstacleVisible=!0,C.platformObstacleApplied=!0,B("platformState").textContent="避障区已应用到规划场景",Zi(),n})}async function mb(n=!1){try{const t=await nf();C.workspaceBoundsByArm={right:Ki(t.right,"right"),left:Ki(t.left,"left")},pc(),ot==null||ot.setWorkspaceBounds(ts()),Td("已读取"),n&&Re("已读取工作区边界")}catch(t){B("workspaceBoundsState").textContent=`读取失败：${t.message}`}}function gb(n=C.arm){return n==="left"?{enabled:!1,min:[-.35,-.65,.2],max:[.8,.35,1.55]}:{enabled:!1,min:[-.8,-.65,.2],max:[.35,.35,1.55]}}function ts(){return Ki(C.workspaceBoundsByArm[C.arm],C.arm)}function Ki(n={},t=C.arm){var s;const e=((s=C.workspaceBoundsByArm)==null?void 0:s[t])||gb(t),i=(r,a)=>{const o=Array.isArray(n[r])?n[r]:a;return[0,1,2].map(l=>{const c=Number(o==null?void 0:o[l]);return Number.isFinite(c)?c:a[l]})};return{enabled:!!n.enabled,min:i("min",e.min),max:i("max",e.max)}}function pc(){const n=ts(),t=B("workspaceBoundsFields");t&&(t.innerHTML=`
    <label class="workspace-enable"><input id="workspaceBoundsEnabled" type="checkbox" ${n.enabled?"checked":""}><span>启用${tn()}边界拒绝</span></label>
    <div class="compact-fields workspace-bounds-grid">
      ${oh("min",n.min,["X min","Y min","Z min"])}
      ${oh("max",n.max,["X max","Y max","Z max"])}
    </div>
  `)}function oh(n,t,e){return e.map((i,s)=>`
    <label>${i}<input data-workspace-bound="${n}" data-workspace-axis="${s}"
      type="number" step="0.001" value="${Number(t[s]??0)}" /><span>m</span></label>
  `).join("")}function Ed(){var t;const n=e=>[0,1,2].map(i=>{var r,a;const s=Number((a=(r=B("workspaceBoundsFields"))==null?void 0:r.querySelector(`[data-workspace-bound="${e}"][data-workspace-axis="${i}"]`))==null?void 0:a.value);return Number.isFinite(s)?s:0});return{enabled:((t=B("workspaceBoundsEnabled"))==null?void 0:t.checked)===!0,min:n("min"),max:n("max")}}function lh(){C.workspaceBoundsByArm[C.arm]=Ki(Ed(),C.arm),ot==null||ot.setWorkspaceBounds(ts()),B("workspaceBoundsState").textContent=`${tn()}工作区边界已修改，保存后生效`}async function _b(){C.workspaceBoundsByArm[C.arm]=Ki(Ed(),C.arm),await we("保存工作区边界",async()=>{const n=await sf({arm:C.arm,...ts()});return C.workspaceBoundsByArm={right:Ki(n.right||C.workspaceBoundsByArm.right,"right"),left:Ki(n.left||C.workspaceBoundsByArm.left,"left")},pc(),ot==null||ot.setWorkspaceBounds(ts()),Td("已保存"),n})}function Td(n=""){const e=ts().enabled?`${n?`${n} · `:""}${tn()}工作区已启用`:`${n?`${n} · `:""}${tn()}工作区未启用`;B("workspaceBoundsState").textContent=e}async function vb(n=!1){var t,e;try{const i=await ef();C.manualCollision.boxes=i.boxes||[],C.manualCollision.applied=!!((t=i.summary)!=null&&t.applied&&!((e=i.summary)!=null&&e.cleared)),rs(),ot==null||ot.setManualCollisionBoxes(C.manualCollision.boxes),kn(),Gn(),B("manualCollisionState").textContent=C.manualCollision.boxes.length?`已读取 ${C.manualCollision.boxes.length} 个碰撞箱`:"尚未添加手动碰撞箱",n&&Re("已读取手动碰撞箱")}catch(i){B("manualCollisionState").textContent=`读取失败：${i.message}`,Gn()}}function xb(){const n=ln(),t=C.manualCollision.boxes.length+1;C.manualCollision.boxes.push({id:`box_${t}`,name:`碰撞箱 ${t}`,enabled:!0,center:[Number(n.x),Number(n.y),Number(n.z)],dimensions:[.18,.18,.18],rpy:[0,0,0]}),C.manualCollision.applied=!1,rs(),ot==null||ot.setManualCollisionBoxes(C.manualCollision.boxes),kn(),Gn(),B("manualCollisionState").textContent="已添加碰撞箱，下一次规划/控制自动生效"}function rs(){const n=B("manualCollisionFields"),t=C.manualCollision.boxes||[];if(!t.length){On("manualCollisionFields","没有手动碰撞箱"),kn();return}n.innerHTML=t.map((e,i)=>`
    <div class="collision-box-row" data-collision-index="${i}">
      <div class="collision-box-header">
        <input data-collision-field="name" type="text" value="${ee(e.name||`碰撞箱 ${i+1}`)}" aria-label="碰撞箱名称">
        <label><input data-collision-field="enabled" type="checkbox" ${e.enabled===!1?"":"checked"}><span>启用</span></label>
        <button class="icon-button" type="button" data-collision-delete="${i}" aria-label="删除碰撞箱" title="删除碰撞箱">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
      <div class="compact-fields collision-fields">
        ${$o(i,e,"center",["X","Y","Z"],"m",.001)}
        ${$o(i,e,"dimensions",["长","宽","高"],"m",.001)}
        ${$o(i,e,"rpy",["Roll","Pitch","Yaw"],"rad",.001)}
      </div>
    </div>
  `).join(""),kn(),Mr()}function $o(n,t,e,i,s,r){const a=Array.isArray(t[e])?t[e]:[0,0,0];return i.map((o,l)=>`
    <label>${o}<input data-collision-vector="${e}" data-collision-axis="${l}" data-collision-index="${n}"
      type="number" step="${r}" value="${Number(a[l]??0)}" /><span>${s}</span></label>
  `).join("")}function ch(){C.manualCollision.boxes=Ys(),C.manualCollision.applied=!1,ot==null||ot.setManualCollisionBoxes(C.manualCollision.boxes),Gn(),B("manualCollisionState").textContent="配置已修改，下一次规划/控制自动同步到 MoveIt"}function yb(n){const t=n.target.closest("[data-collision-delete]");t&&(C.manualCollision.boxes=Ys(),C.manualCollision.boxes.splice(Number(t.dataset.collisionDelete),1),C.manualCollision.applied=!1,rs(),ot==null||ot.setManualCollisionBoxes(C.manualCollision.boxes),kn(),Gn(),B("manualCollisionState").textContent="已删除碰撞箱，下一次规划/控制自动更新 MoveIt")}function Ys(){return Array.from(document.querySelectorAll(".collision-box-row")).map((n,t)=>{var r,a,o;const e=Number(n.dataset.collisionIndex),i=C.manualCollision.boxes[e]||{},s=l=>[0,1,2].map(c=>{const u=n.querySelector(`[data-collision-vector="${l}"][data-collision-axis="${c}"]`),h=Number(u==null?void 0:u.value);return Number.isFinite(h)?h:0});return{id:i.id||`box_${t+1}`,name:((a=(r=n.querySelector('[data-collision-field="name"]'))==null?void 0:r.value)==null?void 0:a.trim())||`碰撞箱 ${t+1}`,enabled:((o=n.querySelector('[data-collision-field="enabled"]'))==null?void 0:o.checked)!==!1,center:s("center"),dimensions:s("dimensions").map(l=>Math.max(.005,Math.abs(l))),rpy:s("rpy")}})}function wd(){return document.querySelector(".collision-box-row")&&(C.manualCollision.boxes=Ys()),C.manualCollision.boxes||[]}async function bb(){C.manualCollision.boxes=Ys(),await we("保存手动碰撞箱",async()=>{const n=await rf({boxes:C.manualCollision.boxes});return C.manualCollision.boxes=n.boxes||[],C.manualCollision.applied=!1,rs(),ot==null||ot.setManualCollisionBoxes(C.manualCollision.boxes),kn(),Gn(),B("manualCollisionState").textContent=`已保存 ${C.manualCollision.boxes.length} 个碰撞箱，下一次规划/控制自动生效`,n})}async function Mb(){C.manualCollision.boxes=Ys(),await we("应用手动碰撞箱",async()=>{const n=await af({boxes:C.manualCollision.boxes}),t=n.manual_collision||{};return C.manualCollision.boxes=t.boxes||C.manualCollision.boxes,C.manualCollision.applied=Number(t.count||0)>0,rs(),ot==null||ot.setManualCollisionBoxes(C.manualCollision.boxes),kn(),Gn(),B("manualCollisionState").textContent=`已应用 ${t.count??0} 个启用碰撞箱到 MoveIt`,n})}async function Sb(){await we("清除手动碰撞箱",async()=>{const n=await of(),t=n.manual_collision||{};return C.manualCollision.boxes=t.boxes||C.manualCollision.boxes,C.manualCollision.applied=!1,rs(),ot==null||ot.setManualCollisionBoxes(C.manualCollision.boxes),kn(),Gn(),B("manualCollisionState").textContent="已从 MoveIt 移除手动碰撞箱，网页配置仍保留",n},{confirm:"将从 MoveIt PlanningScene 移除手动碰撞箱，但保留网页配置。",confirmTitle:"确认清除手动碰撞箱"})}function Gn(){const t=(C.manualCollision.boxes||[]).filter(e=>e.enabled!==!1).length;B("applyCollisionBoxesButton").querySelector("span").textContent=C.manualCollision.applied?`已应用 ${t} 个`:"提前应用",ii("applyCollisionBoxesButton",C.manualCollision.applied?"active-good":t?"ready-warning":"inactive",C.manualCollision.applied),ii("clearCollisionBoxesButton",C.manualCollision.applied?"ready-warning":"inactive",!1)}function Ya(n){n&&(C.manualCollision.boxes=n.boxes||C.manualCollision.boxes,C.manualCollision.applied=!!(n.applied&&Number(n.count||0)>0),rs(),ot==null||ot.setManualCollisionBoxes(C.manualCollision.boxes),kn(),Gn(),B("manualCollisionState").textContent=C.manualCollision.applied?`已自动同步 ${n.count??0} 个碰撞箱到 MoveIt`:"当前没有启用的碰撞箱")}function _r(n){if(!n||typeof n!="object")return null;if(n.manual_collision)return n.manual_collision;for(const t of["plan","result","results","approach","descend","lift"]){const e=_r(n[t]);if(e)return e}for(const t of Object.values(n))if(t&&typeof t=="object"&&t!==n){const e=_r(t);if(e)return e}return null}function Bl({anyConnected:n,anyEnabled:t,allEnabled:e,anyEstop:i}){ii("enableButton",e?"active-good":"ready-good",e),B("enableButton").querySelector("span").textContent=e?"已使能":"使能",ii("disableButton",t?"ready-danger":"inactive",!1),B("disableButton").querySelector("span").textContent=t?"取消使能":"未使能",ii("resetEstopButton",i?"ready-warning":"inactive",i),B("resetEstopButton").querySelector("span").textContent=i?"复位急停":"急停正常",ii("homeButton",n&&e&&!i?"ready-neutral":"inactive",!1),B("homeButton").querySelector("span").textContent="回零"}function Ad(){const n=B("toggleCloudButton");n.querySelector("span").textContent=C.cloudVisible?"隐藏点云":"显示点云",ii("toggleCloudButton",C.cloudVisible?"active-neutral":"inactive",C.cloudVisible)}function Zi(){const n=B("loadPlatformButton");n.querySelector("span").textContent=C.platformObstacleVisible?"隐藏避障区":"显示避障区",ii("loadPlatformButton",C.platformObstacleVisible?"active-neutral":"ready-neutral",C.platformObstacleVisible);const t=B("applyPlatformButton");t.querySelector("span").textContent=C.platformObstacleApplied?"取消避障区":"应用避障区",ii("applyPlatformButton",C.platformObstacleApplied?"active-warning":"ready-warning",C.platformObstacleApplied)}function ii(n,t,e){const i=B(n);i.dataset.mode=t,i.setAttribute("aria-pressed",String(!!e))}function Eb(n){return n?Array.isArray(n)?n.length>0:Array.isArray(n.platform_obstacles)?n.platform_obstacles.length>0:!!(n.center||n.dimensions):!1}async function mc(){var n;B("jointConfigStatus").textContent=`正在读取${tn()}配置...`;try{const t=await qo(C.arm);C.jointConfig=t,gc(t),Cd(t),B("jointConfigStatus").textContent=`已读取 ${((n=t.files)==null?void 0:n.bridge)||tn()}`}catch(t){B("jointConfigStatus").textContent=`读取失败：${t.message}`}}async function Tb(){(await Promise.allSettled([qo("right"),qo("left")])).forEach(t=>{t.status==="fulfilled"&&gc(t.value)})}function gc(n){const t=(n==null?void 0:n.arm)==="left"?"left":"right",e=(n==null?void 0:n.joint_names)||[],i={};e.forEach((s,r)=>{var o;const a=(o=n==null?void 0:n.joint_limits_rad)==null?void 0:o[r];i[s]=a!=null&&a.enabled&&Number.isFinite(Number(a.lower))&&Number.isFinite(Number(a.upper))?{lower:Number(a.lower),upper:Number(a.upper)}:{lower:-1e6,upper:1e6}}),C.jointLimitsByArm[t]=i,ot==null||ot.setJointLimits({...C.jointLimitsByArm.right,...C.jointLimitsByArm.left})}function Cd(n){const t=n.joint_names||[],e=B("jointConfigFields");e.innerHTML=`
    <div class="joint-config-header"><span>关节</span><span>零位</span><span>限位</span><span>下限</span><span>上限</span></div>
    ${t.map((i,s)=>{var r,a,o,l;return`
      <div class="joint-config-row">
        <b>J${s+1}</b>
        <input id="cfg_offset_${s}" type="number" step="1" value="${Number(((r=n.zero_offsets)==null?void 0:r[s])||0)}" aria-label="${ee(i)}零位">
        <input id="cfg_limit_${s}" type="checkbox" ${(a=n.limit_enabled)!=null&&a[s]?"checked":""} aria-label="${ee(i)}启用限位">
        <input id="cfg_min_${s}" type="number" step="1" value="${Number(((o=n.raw_limit_a)==null?void 0:o[s])||0)}" aria-label="${ee(i)}下限">
        <input id="cfg_max_${s}" type="number" step="1" value="${Number(((l=n.raw_limit_b)==null?void 0:l[s])||0)}" aria-label="${ee(i)}上限">
      </div>
    `}).join("")}
  `}async function wb(){var e;const n=((e=C.jointConfig)==null?void 0:e.joint_names)||[];if(!n.length){Re("请先读取关节配置","warn");return}const t={arm:C.arm,zero_offsets:[],limit_enabled:[],raw_limit_a:[],raw_limit_b:[]};n.forEach((i,s)=>{t.zero_offsets.push(Number.parseInt(B(`cfg_offset_${s}`).value,10)),t.limit_enabled.push(B(`cfg_limit_${s}`).checked),t.raw_limit_a.push(Number.parseInt(B(`cfg_min_${s}`).value,10)),t.raw_limit_b.push(Number.parseInt(B(`cfg_max_${s}`).value,10))}),await we("保存关节配置",async()=>{const i=await qt("/api/joint_config",t);return C.jointConfig=i,gc(i),Cd(i),i},{confirm:`将覆盖${tn()}的编码器零位与原始限位配置。该操作会影响实际运动范围。`,confirmTitle:"确认写入关节配置"})}async function _c(){B("kinematicsStatus").textContent="正在读取求解器配置...";try{const n=await $d();C.kinematics=n,Rd(n)}catch(n){B("kinematicsStatus").textContent=`读取失败：${n.message}`}}function Ab(n,t){if(!n)return"--";const e=t.find(i=>i.id===n.solver_id||i.plugin===n.solver_plugin);return e?e.label:n.solver_plugin||n.solver_id||"--"}function Rd(n){var a;const t=n.options||[],e=B("ikSolverSelect"),i=n.active_solver_id||"kdl",s=t.some(o=>o.id===i);if(e.innerHTML=[...!s&&i?[{id:i,label:i==="mixed"?"Piper 配置不一致":i,available:!1,plugin:""}]:[],...t].map(o=>`
    <option value="${ee(o.id)}" ${o.available?"":"disabled"} ${o.id===i?"selected":""}>
      ${ee(o.label)}${o.available?"":"（未安装）"}
    </option>
  `).join(""),i!=="mixed"&&t.some(o=>o.id===i&&o.available))e.value=i;else{const o=t.find(l=>l.available);o&&(e.value=o.id)}const r=(a=n.groups)==null?void 0:a.arm;B("ikRightSolver").textContent=`Piper ${Ab(r,t)}`,B("ikLeftSolver").textContent="",B("kinematicsStatus").textContent=`配置文件：${n.path||"--"}。保存后需重启 MoveIt 才会生效。`}async function Cb(){var i,s;const n=B("ikSolverSelect").value;if(!n){Re("请选择可用的 IK 求解器","warn");return}const t=(s=(i=C.kinematics)==null?void 0:i.options)==null?void 0:s.find(r=>r.id===n),e=(t==null?void 0:t.label)||n;await we("保存 IK 求解器",async()=>{const r=await qt("/api/kinematics",{solver_id:n,target:"right"});return C.kinematics=r,Rd(r),r},{confirm:`将 Piper MoveIt IK 求解器配置切换为 ${e}。已运行的 MoveIt 不会动态切换，保存后需要重启 MoveIt。`,confirmTitle:"确认切换 IK 求解器",success:`IK 求解器已写入：${e}，重启 MoveIt 后生效`})}function Rb(){try{return es(JSON.parse(localStorage.getItem(dd)||"{}"))}catch{return{...Pn}}}function es(n={}){return{planner_id:String(n.planner_id||Pn.planner_id),planning_time:Cn(n.planning_time,Pn.planning_time),attempts:Math.max(1,Math.round(Cn(n.attempts,Pn.attempts))),ik_timeout:Cn(n.ik_timeout,Pn.ik_timeout)}}function Cn(n,t){const e=Number(n);return Number.isFinite(e)?e:t}async function Ks(){var n;B("omplConfigStatus").textContent="正在读取 OMPL 配置...";try{const t=await qd();C.ompl.options=t;const e=((n=t.recommended)==null?void 0:n.config)||t.defaults||Pn,i=new Set((t.planners||[]).map(r=>r.planner_id)),s=es(C.ompl.config);C.ompl.config=i.has(s.planner_id)?s:es(e),Za(),Pb()}catch(t){B("omplConfigStatus").textContent=`读取失败：${t.message}`,On("omplPlannerDetails","OMPL 配置不可用")}}function Pb(){var a;const n=C.ompl.options||{},t=n.planners||[],e=n.presets||[],i=B("omplPresetSelect");i.innerHTML=e.map(o=>`
    <option value="${ee(o.id)}">
      ${ee(o.custom?`自定义 · ${o.label}`:o.label)}
    </option>
  `).join("");const s=new Set(e.map(o=>o.id));C.ompl.selectedPresetId&&s.has(C.ompl.selectedPresetId)?i.value=C.ompl.selectedPresetId:(a=n.recommended)!=null&&a.id&&(i.value=n.recommended.id);const r=B("omplPlannerSelect");r.innerHTML=t.map(o=>`
    <option value="${ee(o.planner_id)}">
      ${ee(o.label||o.planner_id)}
    </option>
  `).join(""),t.some(o=>o.planner_id===C.ompl.config.planner_id)&&(r.value=C.ompl.config.planner_id),Pd(C.ompl.config),Ib(n.recommended),xc(),B("omplConfigStatus").textContent=`运行时生效 · 配置文件：${n.path||"--"}`}function Pd(n){const t=es(n);B("omplPlannerSelect").value=t.planner_id,B("omplPlanningTime").value=t.planning_time,B("omplAttempts").value=t.attempts,B("omplIkTimeout").value=t.ik_timeout}function Ka(){const n=B("omplPlannerSelect");if(!n)return{...C.ompl.config};const t=es({planner_id:n.value||C.ompl.config.planner_id,planning_time:B("omplPlanningTime").value,attempts:B("omplAttempts").value,ik_timeout:B("omplIkTimeout").value});return C.ompl.config=t,t}function Za(){localStorage.setItem(dd,JSON.stringify(C.ompl.config))}function ma(){C.ompl.config=Ka(),Za(),xc();const n=vc(C.ompl.config.planner_id);B("omplConfigStatus").textContent=`下一次规划使用 ${(n==null?void 0:n.label)||C.ompl.config.planner_id} · ${C.ompl.config.planning_time}s / ${C.ompl.config.attempts} 次`}function Lb(){var e,i;const n=B("omplPresetSelect").value,t=(((e=C.ompl.options)==null?void 0:e.presets)||[]).find(s=>s.id===n)||((i=C.ompl.options)==null?void 0:i.recommended);C.ompl.selectedPresetId=(t==null?void 0:t.id)||null,C.ompl.config=es((t==null?void 0:t.config)||Pn),Pd(C.ompl.config),Za(),xc(),Re(`已应用 OMPL 配置：${(t==null?void 0:t.label)||"推荐配置"}`),B("omplConfigStatus").textContent=`已应用 ${(t==null?void 0:t.label)||"推荐配置"}，下一次规划生效`}async function Nb(){const n=Ld("omplPresetName"),t=Ka(),e=await we("保存规划预设",()=>mh({name:n,source:"ompl",config:t}),{quiet:!0,success:"规划预设已保存"});if(!e)return;const i=Nd(e.presets,n,t);C.ompl.selectedPresetId=(i==null?void 0:i.id)||null,await Ks(),B("omplConfigStatus").textContent=`已保存到预设库：${(i==null?void 0:i.label)||n}`,Re(`已保存规划预设：${(i==null?void 0:i.label)||n}`)}async function Db(){var i;const n=B("omplPresetSelect").value,t=(((i=C.ompl.options)==null?void 0:i.presets)||[]).find(s=>s.id===n);if(!(t!=null&&t.custom)){Re("只能删除自定义预设","warn");return}!await Xa(`删除自定义预设「${t.label}」？`,"删除规划预设","删除")||!await we("删除规划预设",()=>jd({id:t.id}),{quiet:!0,success:"规划预设已删除"})||(C.ompl.selectedPresetId=null,await Ks(),Re(`已删除规划预设：${t.label}`))}function Ld(n){const t=B(n),e=String((t==null?void 0:t.value)||"").trim();if(e)return e;const i=`规划预设 ${new Date().toLocaleString("zh-CN",{hour12:!1})}`;return t&&(t.value=i),i}function Nd(n=[],t,e){const i=n.find(s=>s.name===t||s.label===t);return i||n.find(s=>{const r=s.config||{};return r.planner_id===e.planner_id&&Number(r.planning_time)===Number(e.planning_time)&&Number(r.attempts)===Number(e.attempts)&&Number(r.ik_timeout)===Number(e.ik_timeout)})||null}function vc(n){var t;return(((t=C.ompl.options)==null?void 0:t.planners)||[]).find(e=>e.planner_id===n)||null}function Ib(n){const t=B("omplRecommended"),e=(n==null?void 0:n.config)||Pn,i=vc(e.planner_id);t.innerHTML=`
    <div class="ompl-recommendation-main">
      <strong>${ee((n==null?void 0:n.label)||"推荐配置")}</strong>
      <span>${ee((i==null?void 0:i.label)||e.planner_id)}</span>
    </div>
    <div class="ompl-config-chips">
      <span>规划 ${_e(e.planning_time,1)}s</span>
      <span>尝试 ${Number(e.attempts)} 次</span>
      <span>IK ${_e(e.ik_timeout,1)}s</span>
    </div>
    <p>${ee((n==null?void 0:n.description)||"用于快速调试的默认配置。")}</p>
  `}function xc(){const n=vc(C.ompl.config.planner_id),t=B("omplPlannerDetails");if(!n){On("omplPlannerDetails","请选择规划器");return}const e=Object.entries(n.config||{});t.innerHTML=`
    <div class="ompl-detail-row"><b>planner_id</b><span>${ee(n.planner_id)}</span></div>
    <div class="ompl-detail-row"><b>type</b><span>${ee(n.type||"--")}</span></div>
    <div class="ompl-detail-row"><b>groups</b><span>${ee((n.groups||[]).join(", ")||"--")}</span></div>
    ${e.map(([i,s])=>`
      <div class="ompl-detail-row"><b>${ee(i)}</b><span>${ee(String(s))}</span></div>
    `).join("")}
  `}async function Sr(n=!1){const t=B("benchmarkStatus");t&&C.activePanel==="benchmark"&&(t.textContent="正在读取跑分配置...");try{const e=await Yd(C.arm);C.benchmark.options=e,Ub(e),kn(),Dd(),Ui(),as(),ci(),t&&n&&(t.textContent="跑分配置已读取")}catch(e){t&&(t.textContent=`跑分配置读取失败：${e.message}`),On("benchmarkPlanners","规划器配置不可用")}}function Ub(n={}){const t=Number(n.max_samples||120);for(const i of["benchmarkBoxCount","benchmarkEdgeCount","benchmarkRandomCount"]){const s=B(i);s&&Number.isFinite(t)&&(s.max=String(t))}if(C.benchmark.defaultsApplied)return;const e=n.defaults||{};xi("benchmarkBoxCount",e.box_top_count),xi("benchmarkBoxOffsetCm",e.box_top_offset_cm),xi("benchmarkEdgeCount",e.edge_count),xi("benchmarkEdgeDistanceCm",e.edge_distance_cm),xi("benchmarkRandomCount",e.random_count),xi("benchmarkPlanningTime",e.planning_time),xi("benchmarkAttempts",e.attempts),xi("benchmarkIkTimeout",e.ik_timeout),C.benchmark.defaultsApplied=!0}function xi(n,t){const e=B(n),i=Number(t);e&&Number.isFinite(i)&&(e.value=String(t))}function kn(){var a,o;const n=B("benchmarkCollisionBox");if(!n)return;const t=n.value,e=(C.manualCollision.boxes||[]).filter(l=>l.enabled!==!1),i=Array.isArray((a=C.benchmark.options)==null?void 0:a.collision_boxes)?C.benchmark.options.collision_boxes:[],s=e.length?e:i;if(!s.length){n.innerHTML='<option value="">没有启用的碰撞箱</option>',n.disabled=!0;const l=B("benchmarkBoxCount");l&&(l.value="0");return}n.disabled=!1,n.innerHTML=s.map((l,c)=>{const u=l.id||l.name||`box_${c+1}`,h=l.name||l.id||`碰撞箱 ${c+1}`;return`<option value="${ee(u)}">${ee(h)}</option>`}).join("");const r=new Set(s.map((l,c)=>String(l.id||l.name||`box_${c+1}`)));n.value=r.has(t)?t:((o=n.options[0])==null?void 0:o.value)||""}function Dd(){var r,a;const n=B("benchmarkPlanners");if(!n)return;const t=((r=C.benchmark.options)==null?void 0:r.planners)||((a=C.ompl.options)==null?void 0:a.planners)||[];if(!t.length){On("benchmarkPlanners","未读取到适用于当前手臂的规划器");return}let e=new Set(C.benchmark.selectedPlanners);e.size||(e=new Set([C.ompl.config.planner_id]));const i=t.filter(o=>e.has(o.planner_id)).map(o=>o.planner_id);C.benchmark.selectedPlanners=i.length?i:[t[0].planner_id];const s=new Set(C.benchmark.selectedPlanners);n.innerHTML=t.map(o=>`
    <label class="planner-option">
      <input type="checkbox" value="${ee(o.planner_id)}" ${s.has(o.planner_id)?"checked":""}>
      <span>
        <b>${ee(o.label||o.planner_id)}</b>
        <small>${ee(o.planner_id)}</small>
      </span>
    </label>
  `).join("")}function Er(){var i,s,r,a;const n=B("benchmarkPlanners"),t=Array.from((n==null?void 0:n.querySelectorAll('input[type="checkbox"]'))||[]);if(t.length)return C.benchmark.selectedPlanners=t.filter(o=>o.checked).map(o=>o.value),[...C.benchmark.selectedPlanners];if(C.benchmark.selectedPlanners.length)return[...C.benchmark.selectedPlanners];const e=((i=C.ompl.config)==null?void 0:i.planner_id)||((a=(r=(s=C.benchmark.options)==null?void 0:s.planners)==null?void 0:r[0])==null?void 0:a.planner_id);return e?[e]:[]}function Id(){var n,t;return Er().length||((t=(n=C.benchmark.result)==null?void 0:n.planners)==null?void 0:t.length)||0}function yc(){var r,a,o,l,c,u,h;const n=ln();document.querySelector(".collision-box-row")&&(C.manualCollision.boxes=Ys());const t=(r=B("benchmarkSeed"))==null?void 0:r.value,e=Number(t),i={...n,avoid_collisions:((a=B("avoidPlatform"))==null?void 0:a.checked)!==!1,box_top_count:Us("benchmarkBoxCount",0),box_top_offset_cm:Cn((o=B("benchmarkBoxOffsetCm"))==null?void 0:o.value,5),edge_count:Us("benchmarkEdgeCount",0),edge_distance_cm:Cn((l=B("benchmarkEdgeDistanceCm"))==null?void 0:l.value,5),random_count:Us("benchmarkRandomCount",0),planning_time:Cn((c=B("benchmarkPlanningTime"))==null?void 0:c.value,Pn.planning_time),attempts:Math.max(1,Math.round(Cn((u=B("benchmarkAttempts"))==null?void 0:u.value,Pn.attempts))),ik_timeout:Cn((h=B("benchmarkIkTimeout"))==null?void 0:h.value,Pn.ik_timeout),collision_boxes:C.manualCollision.boxes||[],planners:Er()},s=B("benchmarkCollisionBox");return s!=null&&s.disabled?i.box_top_count=0:s!=null&&s.value&&(i.collision_box_id=s.value),t!==""&&Number.isFinite(e)&&(i.seed=Math.max(1,Math.round(e))),i}function Fb(n){var s,r;const t=Er();let e=t[0]||((s=C.ompl.config)==null?void 0:s.planner_id)||Pn.planner_id;const i=Object.values(((r=C.benchmark.result)==null?void 0:r.summary)||{}).filter(a=>!t.length||t.includes(a.planner_id));return i.length&&(i.sort((a,o)=>{const l=Number(o.success_rate||0)-Number(a.success_rate||0);return l||Number(a.mean_elapsed_ms||1/0)-Number(o.mean_elapsed_ms||1/0)}),e=i[0].planner_id||e),es({planner_id:e,planning_time:n.planning_time,attempts:n.attempts,ik_timeout:n.ik_timeout})}async function kb(){const n=Ld("benchmarkPresetName"),t=yc(),e=Fb(t),i=await we("保存跑分配置",()=>mh({name:n,source:"benchmark",config:e}),{quiet:!0,success:"跑分配置已保存"});if(!i)return;const s=Nd(i.presets,n,e);C.ompl.config=e,C.ompl.selectedPresetId=(s==null?void 0:s.id)||null,Za(),await Ks(),B("benchmarkStatus").textContent=`已保存到规划预设库：${(s==null?void 0:s.label)||n}`,Re(`已保存跑分配置：${(s==null?void 0:s.label)||n}`)}async function Ob(){if(!C.benchmark.result){B("benchmarkStatus").textContent="没有可导出的跑分结果",Re("请先完成一次跑分","warn");return}const n={arm:C.arm,...C.benchmark.result},t=await we("导出跑分 CSV",()=>Qd({result:n}),{quiet:!0,success:"跑分 CSV 已导出"});t&&(Bb(t),B("benchmarkStatus").textContent=`CSV 已保存：${t.path}`,Re("跑分 CSV 已导出"))}function Bb(n){if(!(n!=null&&n.csv))return;const t=new Blob([n.csv],{type:"text/csv;charset=utf-8"}),e=URL.createObjectURL(t),i=document.createElement("a");i.href=e,i.download=(n.path||"piper_benchmark.csv").split("/").pop()||"piper_benchmark.csv",document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(e)}function Us(n,t){var e;return Math.max(0,Math.round(Cn((e=B(n))==null?void 0:e.value,t)))}function zb(){return Us("benchmarkBoxCount",0)+Us("benchmarkEdgeCount",0)+Us("benchmarkRandomCount",0)}async function Vb(){C.benchmark.options||await Sr(!1);const n=yc(),t=await we("生成跑分测试点",()=>Zd(n),{quiet:!0,success:"测试点已生成"});t&&(C.benchmark.options={...C.benchmark.options,...t},C.benchmark.samples=t.samples||[],C.benchmark.selectedSampleId=null,C.benchmark.result=null,C.benchmark.progress=null,t.seed&&B("benchmarkSeed")&&(B("benchmarkSeed").value=t.seed),ot==null||ot.setBenchmarkSamples(C.benchmark.samples),kn(),Dd(),Ui(),as(),ci(),Ii(),B("benchmarkStatus").textContent=`已生成 ${C.benchmark.samples.length} 个测试点，种子 ${t.seed??"--"}`,Re(`已生成 ${C.benchmark.samples.length} 个跑分测试点`))}async function Hb(){C.benchmark.options||await Sr(!1);const n=yc();if(!n.planners.length){B("benchmarkStatus").textContent="至少选择一个规划器",Re("至少选择一个规划器","warn");return}C.benchmark.samples.length&&(n.samples=C.benchmark.samples),Gb(n);const t=await we("规划器跑分",()=>Jd(n),{quiet:!0,success:"跑分完成"});if(await zl(),Ud(),!t)return;C.benchmark.result=t,C.benchmark.samples=t.samples||C.benchmark.samples,C.benchmark.selectedSampleId=null,ot==null||ot.setBenchmarkSamples(C.benchmark.samples),Ui(),as(),ci();const e=Number(t.total_points||C.benchmark.samples.length),i=Number(t.valid_points||0);B("benchmarkStatus").textContent=`跑分完成：IK 有效 ${i}/${e}，耗时 ${_e(Number(t.elapsed_ms||0)/1e3,2)} s`,Re(`跑分完成：有效点 ${i}/${e}`),Ii(),Di()}function Gb(n={}){Ud();const t=C.benchmark.samples.length||Number(n.box_top_count||0)+Number(n.edge_count||0)+Number(n.random_count||0),e=Er().length;C.benchmark.progress={running:!0,stage:"starting",label:"等待 MoveIt 服务",percent:0,total_points:t,completed_steps:0,total_steps:t+t*e,ik_done:0,ik_ok:0,plan_done:0,plan_total:t*e,elapsed_ms:0,eta_sec:null},Ii(),Ea=window.setInterval(zl,500),zl()}function Ud(){Ea&&(window.clearInterval(Ea),Ea=null)}async function zl(){try{const n=await Kd(C.arm);C.benchmark.progress=n,Ii()}catch{}}function Ii(){const n=B("benchmarkProgress");if(!n)return;const t=C.benchmark.progress;if(!t){n.hidden=!0;return}n.hidden=!1;const e=Math.max(0,Math.min(100,Number(t.percent||0)));B("benchmarkProgressStage").textContent=Wb(t),B("benchmarkProgressPercent").textContent=`${_e(e,1)}%`,B("benchmarkProgressBar").style.width=`${e}%`,B("benchmarkProgressMeta").textContent=uh(t),n.dataset.state=t.stage==="failed"||t.stage==="blocked"?"bad":t.stage==="done"?"good":t.running?"running":"neutral",t.running?(xn("benchmarkState","跑分中","warn"),B("benchmarkStatus").textContent=uh(t)):(t.stage==="failed"||t.stage==="blocked")&&(xn("benchmarkState","跑分失败","bad"),B("benchmarkStatus").textContent=t.error||t.label||"跑分失败")}function Wb(n){return n.error&&(n.stage==="failed"||n.stage==="blocked")?n.label||"跑分失败":n.label||(n.stage==="ik"?"IK 检查":n.stage==="planning"?"规划中":n.stage==="done"?"跑分完成":"等待跑分")}function uh(n){const t=[],e=Number(n.total_points||0),i=Number(n.ik_done||0),s=Number(n.ik_ok||0);e&&t.push(`IK ${i}/${e}，有效 ${s}`);const r=Number(n.plan_total||0);return r&&t.push(`规划 ${Number(n.plan_done||0)}/${r}`),n.current_sample_id!==null&&n.current_sample_id!==void 0&&t.push(`点 #${n.current_sample_id}`),(n.current_planner_label||n.current_planner_id)&&t.push(n.current_planner_label||n.current_planner_id),Number(n.elapsed_ms)>0&&t.push(`已用 ${hh(Number(n.elapsed_ms)/1e3)}`),n.running&&Number(n.eta_sec)>0&&t.push(`预计剩余 ${hh(n.eta_sec)}`),n.error&&t.push(n.error),t.join(" · ")||"等待跑分"}function hh(n){const t=Number(n);return Number.isFinite(t)?t<10?`${_e(t,1)}s`:t<90?`${Math.round(t)}s`:`${Math.floor(t/60)}m${Math.round(t%60)}s`:"--"}function Xb(){document.body.dataset.busy||(C.benchmark.samples=[],C.benchmark.result=null,C.benchmark.selectedSampleId=null,C.benchmark.progress=null,ot==null||ot.setBenchmarkSamples([]),Ui(),as(),ci(),Ii(),B("benchmarkStatus").textContent="点集参数已修改，重新生成后生效")}function $b(){C.benchmark.result&&(C.benchmark.result=null,C.benchmark.progress=null,as(),ci(),Ii()),Ui(),B("benchmarkStatus").textContent=C.benchmark.samples.length?"规划参数已修改，重新跑分后生效":"等待生成测试点"}function qb(){Er(),C.benchmark.result&&(C.benchmark.result=null),C.benchmark.progress=null,Ui(),as(),ci(),Ii(),B("benchmarkStatus").textContent=C.benchmark.samples.length?"规划器选择已修改，重新跑分后生效":"等待生成测试点"}function Ua(){var n;return((n=C.benchmark.result)==null?void 0:n.samples)||C.benchmark.samples||[]}function Ui(){const n=B("benchmarkQuickStats");if(!n)return;const t=Ua(),e=C.benchmark.result,i=zb(),s=Number((e==null?void 0:e.total_points)??t.length),r=Number((e==null?void 0:e.valid_points)??t.filter(o=>{var l;return(l=o.ik)==null?void 0:l.ok}).length),a=Id();n.innerHTML=[["请求点",i],["已生成",t.length||0],["IK 有效",e?`${r}/${s}`:"--"],["规划器",a]].map(([o,l])=>`
    <div class="benchmark-metric"><span>${ee(o)}</span><b>${ee(l)}</b></div>
  `).join(""),e?xn("benchmarkState",r?"结果已生成":"无有效点",r?"good":"bad"):t.length?xn("benchmarkState",`已生成 ${t.length}`,"good"):xn("benchmarkState","未生成","neutral")}function as(){const n=B("benchmarkSummary");if(!n)return;const t=C.benchmark.result,e=Object.values((t==null?void 0:t.summary)||{});if(!e.length){On("benchmarkSummary","跑分后生成规划器成功率结果");return}const i=new Map((t.planners||[]).map((s,r)=>[s.planner_id,r]));e.sort((s,r)=>(i.get(s.planner_id)??999)-(i.get(r.planner_id)??999)),n.innerHTML=e.map(s=>{const r=Math.max(0,Math.min(1,Number(s.success_rate||0))),a=`${Math.round(r*100)}%`;return`
      <div class="benchmark-score-row">
        <div>
          <strong>${ee(s.label||s.planner_id)}</strong>
          <small>${ee(s.planner_id)}</small>
        </div>
        <div class="benchmark-score-meter"><span style="width:${r*100}%"></span></div>
        <b>${a}</b>
        <small>${Number(s.planned_ok||0)}/${Number(s.valid_points||0)} · ${_e(s.mean_elapsed_ms,1)} ms</small>
      </div>
    `}).join("")}function ci(){var l;const n=B("benchmarkSamples");if(!n)return;const t=Ua(),e=C.benchmark.result,i=Number((e==null?void 0:e.total_points)??t.length),s=Number((e==null?void 0:e.valid_points)??t.filter(c=>{var u;return(u=c.ik)==null?void 0:u.ok}).length),r=B("benchmarkSetBadge");if(r&&(r.textContent=`${s}/${i||0}`),ot==null||ot.setBenchmarkSamples(t,C.benchmark.selectedSampleId),!t.length){On("benchmarkSamples","暂无测试点");return}const a=Kb(e),o=((l=e==null?void 0:e.planners)==null?void 0:l.length)||Id();n.innerHTML=t.map(c=>{var R;const u=[c.x,c.y,c.z].map(T=>_e(T,3)).join(", "),h=a.get(Number(c.id))||[],d=h.filter(T=>T.ok).length,p=!!c.ik,g=((R=c.ik)==null?void 0:R.ok)===!0,x=String(c.id)===String(C.benchmark.selectedSampleId),m=p&&!g?"未计入":e?`${d}/${o}`:"待跑分",f=jb(c.ik),P=Yb(h,o);return`
      <div class="benchmark-sample ${x?"active":""}" data-benchmark-sample="${ee(c.id)}">
        <div>
          <strong>#${ee(c.id)} ${ee(Ly[c.source]||c.source||"测试点")}</strong>
          <small>X/Y/Z ${ee(u)}${f?` · ${ee(f)}`:""}${P?` · ${ee(P)}`:""}</small>
        </div>
        <div class="benchmark-sample-state">
          <span data-state="${p?g?"good":"bad":"neutral"}">${p?g?"IK 通过":"IK 失败":"未跑 IK"}</span>
          <span data-state="${e?d?"good":"bad":"neutral"}">规划 ${ee(m)}</span>
        </div>
      </div>
    `}).join("")}function jb(n){if(!n)return"";const t=Number(n.scanned_count??n.candidate_index),e=Number(n.candidate_count),i=n.mode?`${n.mode} `:"";return Number.isFinite(t)&&Number.isFinite(e)&&e>1?`姿态 ${i}${t}/${e}`:Number.isFinite(t)&&t>1?`姿态 ${i}第 ${t} 个`:i?`姿态 ${i}`:""}function Yb(n,t){if(!(n!=null&&n.length)||t!==1)return"";const e=n[0],i=Number(e.scanned_count??e.candidate_index),s=Number(e.candidate_count);return Number.isFinite(i)&&Number.isFinite(s)&&s>1?`规划姿态 ${i}/${s}`:""}function Kb(n){const t=new Map;for(const e of Object.values((n==null?void 0:n.results)||{}))for(const i of e||[]){const s=Number(i.sample_id);t.has(s)||t.set(s,[]),t.get(s).push(i)}return t}function Zb(n){const t=n.target.closest("[data-benchmark-sample]");if(!t)return;const e=Ua().find(i=>String(i.id)===String(t.dataset.benchmarkSample));e&&(C.benchmark.selectedSampleId=e.id,qa(e),ot==null||ot.setBenchmarkSamples(Ua(),C.benchmark.selectedSampleId),ci(),B("footerMessage").textContent=`已选中跑分点 #${e.id}：${_e(e.x,3)}, ${_e(e.y,3)}, ${_e(e.z,3)}`)}async function bc(){try{const n=await lf();C.points=n.points||[],Fd("pointsList",C.points,"point")}catch(n){On("pointsList",n.message)}}async function Mc(){try{const n=await cf();C.presets=n.presets||[],Fd("presetsList",C.presets,"preset")}catch(n){On("presetsList",n.message)}}function Fd(n,t,e){const i=B(n);if(!t.length){On(n,e==="point"?"暂无点位":"暂无预设");return}i.innerHTML=t.map((s,r)=>`
    <div class="list-item">
      <div>
        <strong>${ee(s.name||`${e==="point"?"点位":"预设"} ${r+1}`)}</strong>
        <small>${tn(s.arm)} · X ${_e(s.x)} · Y ${_e(s.y)} · Z ${_e(s.z)}</small>
      </div>
      <div class="item-actions">
        <button class="icon-button" type="button" data-library-use="${e}:${r}" aria-label="载入" title="载入"><i data-lucide="corner-down-left"></i></button>
        <button class="icon-button" type="button" data-library-delete="${e}:${r}" aria-label="删除" title="删除"><i data-lucide="trash-2"></i></button>
      </div>
    </div>
  `).join(""),Mr()}function On(n,t){B(n).innerHTML=`<p class="empty-state">${ee(t)}</p>`}async function dh(){const n=B("pointName").value.trim()||new Date().toLocaleTimeString("zh-CN",{hour12:!1});await we("保存点位",()=>qt("/api/points",{...ln(),name:n})),B("pointName").value="",bc()}async function Jb(){const n=B("presetName").value.trim()||new Date().toLocaleTimeString("zh-CN",{hour12:!1});await we("保存抓取预设",()=>qt("/api/presets",{...$a(),name:n,pick_approach:an("pickApproach",.1),pick_descend:an("pickDescend",.05),pick_hold:an("pickHold",1),pick_lift:an("pickLift",.1)})),B("presetName").value="",Mc()}async function fh(n){var o,l,c;const t=(o=n.target.closest("[data-library-use]"))==null?void 0:o.dataset.libraryUse,e=(l=n.target.closest("[data-library-delete]"))==null?void 0:l.dataset.libraryDelete;if(!t&&!e)return;const[i,s]=(t||e).split(":"),r=Number(s),a=i==="point"?C.points:C.presets;if(t){const u=a[r];if(!u)return;u.arm&&await ac(u.arm),qa(u),i==="preset"&&Qb(u),Re(`已载入${i==="point"?"点位":"预设"}：${u.name||r+1}`);return}await Xa(`删除“${((c=a[r])==null?void 0:c.name)||r+1}”？`,"确认删除")&&(await qt(`/api/${i==="point"?"points":"presets"}/delete`,{index:r}),i==="point"?bc():Mc())}function Qb(n){const t=[["pickApproach","pick_approach"],["pickDescend","pick_descend"],["pickHold","pick_hold"],["pickLift","pick_lift"]];for(const[e,i]of t){const s=B(e);s&&Number.isFinite(Number(n[i]))&&(s.value=n[i])}}function tM(){const n=B("sequenceType").value;let t={type:n,arm:C.arm};["approach","grasp","pick"].includes(n)&&(t.pose=$a()),n==="move"&&(t.pose=ln()),n==="approach"&&(t.offset_z=an("pickApproach",.1)),n==="lift"&&(t.offset_z=an("pickLift",.1)),n==="pick"&&(t={...t,approach_height:an("pickApproach",.1),descend_distance:an("pickDescend",.05),hold_seconds:an("pickHold",1),lift_height:an("pickLift",.1)}),n==="wait"&&(t.seconds=1),C.sequence.push(t),Sc(),Ja()}function Ja(){const n=B("sequenceList");if(!C.sequence.length){On("sequenceList","暂无动作步骤");return}n.innerHTML=C.sequence.map((t,e)=>`
    <div class="list-item">
      <div><strong>${e+1}. ${Ay[t.type]||t.type}</strong><small>${tn(t.arm)}${t.seconds?` · ${t.seconds} s`:""}</small></div>
      <div class="item-actions">
        <button class="icon-button" type="button" data-sequence-up="${e}" aria-label="上移" title="上移"><i data-lucide="arrow-up"></i></button>
        <button class="icon-button" type="button" data-sequence-delete="${e}" aria-label="删除" title="删除"><i data-lucide="trash-2"></i></button>
      </div>
    </div>
  `).join(""),Mr()}function eM(n){var i,s;const t=(i=n.target.closest("[data-sequence-up]"))==null?void 0:i.dataset.sequenceUp,e=(s=n.target.closest("[data-sequence-delete]"))==null?void 0:s.dataset.sequenceDelete;if(t!==void 0){const r=Number(t);r>0&&([C.sequence[r-1],C.sequence[r]]=[C.sequence[r],C.sequence[r-1]])}else if(e!==void 0)C.sequence.splice(Number(e),1);else return;Sc(),Ja()}function nM(){C.sequence=[],Sc(),Ja()}function Sc(){localStorage.setItem("piper.sequence",JSON.stringify(C.sequence))}async function iM(){if(!C.sequence.length){Re("请先添加动作步骤","warn");return}await we("执行动作序列",()=>qt("/api/sequence",{steps:C.sequence}),{confirm:`即将连续执行 ${C.sequence.length} 个动作步骤，请确认 Piper 工作区安全。`,confirmTitle:"确认执行动作序列"})}async function Fa(){try{const n=await uf(200),t=B("logLevelFilter").value,e=(n.logs||[]).map(s=>typeof s=="string"?s:JSON.stringify(s)),i=t==="all"?e:e.filter(s=>s.includes(t));B("logViewer").textContent=i.join(`
`)||"暂无日志"}catch(n){B("logViewer").textContent=`日志读取失败：${n.message}`}}function tn(n=C.arm){return n==="left"?"未使用":"Piper"}function sM(){try{const n=JSON.parse(localStorage.getItem("piper.sequence")||"[]");return Array.isArray(n)?n:[]}catch{return[]}}Ny();
