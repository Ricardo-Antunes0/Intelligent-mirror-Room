"use strict";const performance=require("./vs/base/common/performance");performance.mark("code/fork/start");const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node");bootstrapNode.removeGlobalNodeModuleLookupPaths(),bootstrap.enableASARSupport(),process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH&&bootstrapNode.injectNodeModuleLookupPath(process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH),!!process.send&&process.env.VSCODE_PIPE_LOGGING==="true"&&pipeLoggingToParent(),process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS||handleExceptions(),process.env.VSCODE_PARENT_PID&&terminateWhenParentTerminates(),process.env.VSCODE_WILL_SEND_MESSAGE_PORT&&listenForMessagePort(),require("./bootstrap-amd").load(process.env.VSCODE_AMD_ENTRYPOINT);function pipeLoggingToParent(){const t=1024*1024,f=1e5;function u(e){const s=[],c=[];if(e.length)for(let n=0;n<e.length;n++){let o=e[n];if(typeof o=="undefined")o="undefined";else if(o instanceof Error){const r=o;r.stack?o=r.stack:o=r.toString()}c.push(o)}try{const n=JSON.stringify(c,function(o,r){if(E(r)||Array.isArray(r)){if(s.indexOf(r)!==-1)return"[Circular]";s.push(r)}return r});return n.length>f?"Output omitted for a large object that exceeds the limits":n}catch(n){return`Output omitted for an object that cannot be inspected ('${n.toString()}')`}}function d(e){try{process.send&&process.send(e)}catch{}}function E(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&!(e instanceof RegExp)&&!(e instanceof Date)}function _(e,s){d({type:"__$console",severity:e,arguments:s})}function i(e,s){Object.defineProperty(console,e,{set:()=>{},get:()=>function(){_(s,u(arguments))}})}function l(e,s){const c=process[e],n=c.write;let o="";Object.defineProperty(c,"write",{set:()=>{},get:()=>(r,p,O)=>{o+=r.toString(p);const a=o.length>t?o.length:o.lastIndexOf(`
`);a!==-1&&(console[s](o.slice(0,a)),o=o.slice(a+1)),n.call(c,r,p,O)}})}process.env.VSCODE_VERBOSE_LOGGING==="true"?(i("info","log"),i("log","log"),i("warn","warn"),i("error","error")):(console.log=function(){},console.warn=function(){},console.info=function(){},i("error","error")),l("stderr","error"),l("stdout","log")}function handleExceptions(){process.on("uncaughtException",function(t){console.error("Uncaught Exception: ",t)}),process.on("unhandledRejection",function(t){console.error("Unhandled Promise Rejection: ",t)})}function terminateWhenParentTerminates(){const t=Number(process.env.VSCODE_PARENT_PID);typeof t=="number"&&!isNaN(t)&&setInterval(function(){try{process.kill(t,0)}catch{process.exit()}},5e3)}function listenForMessagePort(){process.on("port",t=>{global.vscodePortsCallback?global.vscodePortsCallback(t.ports):global.vscodePorts=t.ports})}

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/b06ae3b2d2dbfe28bca3134cc6be65935cdfea6a/core/bootstrap-fork.js.map
