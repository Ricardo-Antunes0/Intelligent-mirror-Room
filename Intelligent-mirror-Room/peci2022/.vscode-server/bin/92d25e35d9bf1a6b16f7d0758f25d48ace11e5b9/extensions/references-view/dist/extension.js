(()=>{"use strict";var e={800:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var n,s,o,r=i(926);function a(e){return void 0!==e}function c(e,i){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===i.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var n=t[0],s=i[n],o=e;return"string"==typeof s?o=s:"number"!=typeof s&&"boolean"!=typeof s&&null!=s||(o=String(s)),o}))}(o=t.MessageFormat||(t.MessageFormat={})).file="file",o.bundle="bundle",o.both="both",(s=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",s.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&a(t.key)&&a(t.comment)}}(n||(n={})),t.isDefined=a,t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=c,t.localize=function(e,t){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];return c(t,i)},t.loadMessageBundle=function(e){return(0,r.default)().loadMessageBundle(e)},t.config=function(e){return(0,r.default)().config(e)}},926:(e,t)=>{var i;function n(){if(void 0===i)throw new Error("No runtime abstraction layer installed");return i}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");i=e}}(n||(n={})),t.default=n},472:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.BundleFormat=t.MessageFormat=void 0;var n=i(622),s=i(747),o=i(926),r=i(800),a=i(800);Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return a.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return a.BundleFormat}});var c,l,d=Object.prototype.toString;function u(e){return"[object Number]"===d.call(e)}function h(e){return"[object String]"===d.call(e)}function m(e){return JSON.parse(s.readFileSync(e,"utf8"))}function g(e){return function(t,i){for(var n=[],s=2;s<arguments.length;s++)n[s-2]=arguments[s];return u(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: ".concat(new Error("").stack)):(0,r.format)(e[t],n):h(i)?(console.warn("Message ".concat(i," didn't get externalized correctly.")),(0,r.format)(i,n)):void console.error("Broken localize call found. Stacktrace is\n: ".concat(new Error("").stack))}}function f(e,t){return c[e]=t,t}function p(e){try{return function(e){var t=m(n.join(e,"nls.metadata.json")),i=Object.create(null);for(var s in t){var o=t[s];i[s]=o.messages}return i}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function v(e,t){var i;if(!0===l.languagePackSupport&&void 0!==l.cacheRoot&&void 0!==l.languagePackId&&void 0!==l.translationsConfigFile&&void 0!==l.translationsConfig)try{i=function(e,t){var i,o,r,a=n.join(l.cacheRoot,"".concat(e.id,"-").concat(e.hash,".json")),c=!1,d=!1;try{return i=JSON.parse(s.readFileSync(a,{encoding:"utf8",flag:"r"})),o=a,r=new Date,s.utimes(o,r,r,(function(){})),i}catch(e){if("ENOENT"===e.code)d=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: ".concat(e.message,".")),s.unlink(a,(function(e){e&&console.error("Deleting corrupted bundle ".concat(a," failed."))})),c=!0}}if(!(i=function(e,t){var i=l.translationsConfig[e.id];if(i){var s=m(i).contents,o=m(n.join(t,"nls.metadata.json")),r=Object.create(null);for(var a in o){var c=o[a],d=s["".concat(e.outDir,"/").concat(a)];if(d){for(var u=[],g=0;g<c.keys.length;g++){var f=c.keys[g],p=d[h(f)?f:f.key];void 0===p&&(p=c.messages[g]),u.push(p)}r[a]=u}else r[a]=c.messages}return r}}(e,t))||c)return i;if(d)try{s.writeFileSync(a,JSON.stringify(i),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return i;throw e}return i}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!i){if(l.languagePackSupport)return p(t);var o=function(e){for(var t=l.language;t;){var i=n.join(e,"nls.bundle.".concat(t,".json"));if(s.existsSync(i))return i;var o=t.lastIndexOf("-");t=o>0?t.substring(0,o):void 0}if(void 0===t&&(i=n.join(e,"nls.bundle.json"),s.existsSync(i)))return i}(t);if(o)try{return m(o)}catch(e){console.log("Loading in the box message bundle failed.",e)}i=p(t)}return i}function _(e){if(!e)return r.localize;var t=n.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),l.messageFormat===r.MessageFormat.both||l.messageFormat===r.MessageFormat.bundle){var i=function(e){for(var t,i=n.dirname(e);t=n.join(i,"nls.metadata.header.json"),!s.existsSync(t);){var o=n.dirname(i);if(o===i){t=void 0;break}i=o}return t}(e);if(i){var o=n.dirname(i),a=c[o];if(void 0===a)try{var d=JSON.parse(s.readFileSync(i,"utf8"));try{var u=v(d,o);a=f(o,u?{header:d,nlsBundle:u}:null)}catch(e){console.error("Failed to load nls bundle",e),a=f(o,null)}}catch(e){console.error("Failed to read header file",e),a=f(o,null)}if(a){var h=e.substr(o.length+1).replace(/\\/g,"/"),p=a.nlsBundle[h];return void 0===p?(console.error("Messages for file ".concat(e," not found. See console for details.")),function(){return"Messages not found."}):g(p)}}}if(l.messageFormat===r.MessageFormat.both||l.messageFormat===r.MessageFormat.file)try{var _=m(function(e){var t;if(l.cacheLanguageResolution&&t)t=t;else{if(r.isPseudo||!l.language)t=".nls.json";else for(var i=l.language;i;){var n=".nls."+i+".json";if(s.existsSync(e+n)){t=n;break}var o=i.lastIndexOf("-");o>0?i=i.substring(0,o):(t=".nls.json",i=null)}l.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(_)?g(_):(0,r.isDefined)(_.messages)&&(0,r.isDefined)(_.keys)?g(_.messages):(console.error("String bundle '".concat(e,"' uses an unsupported format.")),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file ".concat(e)),function(){return"Failed to load message bundle. See console for details."}}function w(e){return e&&(h(e.locale)&&(l.locale=e.locale.toLowerCase(),l.language=l.locale,c=Object.create(null)),void 0!==e.messageFormat&&(l.messageFormat=e.messageFormat),e.bundleFormat===r.BundleFormat.standalone&&!0===l.languagePackSupport&&(l.languagePackSupport=!1)),(0,r.setPseudo)("pseudo"===l.locale),_}!function(){if(l={locale:void 0,language:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:r.MessageFormat.bundle},h(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG),t=void 0;if(e.availableLanguages){var i=e.availableLanguages["*"];h(i)&&(t=i)}if(h(e.locale)&&(l.locale=e.locale.toLowerCase()),void 0===t?l.language=l.locale:"en"!==t&&(l.language=t),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(l.languagePackSupport=e._languagePackSupport),h(e._cacheRoot)&&(l.cacheRoot=e._cacheRoot),h(e._languagePackId)&&(l.languagePackId=e._languagePackId),h(e._translationsConfigFile)){l.translationsConfigFile=e._translationsConfigFile;try{l.translationsConfig=m(l.translationsConfigFile)}catch(t){if(e._corruptedFile){var o=n.dirname(e._corruptedFile);s.exists(o,(function(t){t&&s.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}))}}}}catch(e){}(0,r.setPseudo)("pseudo"===l.locale),c=Object.create(null)}(),t.loadMessageBundle=_,t.config=w,o.default.install(Object.freeze({loadMessageBundle:_,config:w}))},879:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=void 0;const n=i(549),s=i(206),o=i(711);function r(e){e instanceof o.CallItem&&e.remove()}t.register=function(e,t){const i=new a(t.workspaceState,0);function s(t,s){let r;i.value=t;const a=e.getInput();s instanceof o.CallItem?r=new o.CallsTreeInput(new n.Location(s.item.uri,s.item.selectionRange.start),i.value):a instanceof o.CallsTreeInput&&(r=new o.CallsTreeInput(a.location,i.value)),r&&e.setInput(r)}t.subscriptions.push(n.commands.registerCommand("references-view.showCallHierarchy",(function(){if(n.window.activeTextEditor){const t=new o.CallsTreeInput(new n.Location(n.window.activeTextEditor.document.uri,n.window.activeTextEditor.selection.active),i.value);e.setInput(t)}})),n.commands.registerCommand("references-view.showOutgoingCalls",(e=>s(1,e))),n.commands.registerCommand("references-view.showIncomingCalls",(e=>s(0,e))),n.commands.registerCommand("references-view.removeCallItem",r))};class a{constructor(e,t=1){this._mem=e,this._value=t,this._ctxMode=new s.ContextKey("references-view.callHierarchyMode");const i=e.get(a._key);this.value="number"==typeof i&&i>=0&&i<=1?i:t}get value(){return this._value}set value(e){this._value=e,this._ctxMode.set(0===this._value?"showIncoming":"showOutgoing"),this._mem.update(a._key,e)}}a._key="references-view.callHierarchyMode"},711:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CallItem=t.CallsTreeInput=void 0;const n=i(549),s=i(206),o=i(472).loadMessageBundle(i(622).join(__dirname,"calls/model.ts"));class r{constructor(e,t){this.location=e,this.direction=t,this.contextValue="callHierarchy",this.title=o(0===t?0:1,null)}async resolve(){const e=await Promise.resolve(n.commands.executeCommand("vscode.prepareCallHierarchy",this.location.uri,this.location.range.start)),t=new c(this.direction,e??[]),i=new l(t);if(0!==t.roots.length)return{provider:i,get message(){return 0===t.roots.length?o(2,null):void 0},navigation:t,highlights:t,dnd:t,dispose(){i.dispose()}}}with(e){return new r(e,this.direction)}}t.CallsTreeInput=r;class a{constructor(e,t,i,n){this.model=e,this.item=t,this.parent=i,this.locations=n}remove(){this.model.remove(this)}}t.CallItem=a;class c{constructor(e,t){this.direction=e,this.roots=[],this._onDidChange=new n.EventEmitter,this.onDidChange=this._onDidChange.event,this.roots=t.map((e=>new a(this,e,void 0,void 0)))}async _resolveCalls(e){if(0===this.direction){const t=await n.commands.executeCommand("vscode.provideIncomingCalls",e.item);return t?t.map((t=>new a(this,t.from,e,t.fromRanges.map((e=>new n.Location(t.from.uri,e)))))):[]}{const t=await n.commands.executeCommand("vscode.provideOutgoingCalls",e.item);return t?t.map((t=>new a(this,t.to,e,t.fromRanges.map((t=>new n.Location(e.item.uri,t)))))):[]}}async getCallChildren(e){return e.children||(e.children=await this._resolveCalls(e)),e.children}location(e){return new n.Location(e.item.uri,e.item.range)}nearest(e,t){return this.roots.find((t=>t.item.uri.toString()===e.toString()))??this.roots[0]}next(e){return this._move(e,!0)??e}previous(e){return this._move(e,!1)??e}_move(e,t){if(e.children?.length)return t?e.children[0]:(0,s.tail)(e.children);const i=this.roots.includes(e)?this.roots:e.parent?.children;if(i?.length){const n=i.indexOf(e);return i[n+(t?1:-1)+i.length%i.length]}}getDragUri(e){return(0,s.asResourceUrl)(e.item.uri,e.item.range)}getEditorHighlights(e,t){return e.locations?e.locations.filter((e=>e.uri.toString()===t.toString())).map((e=>e.range)):e.item.uri.toString()===t.toString()?[e.item.selectionRange]:void 0}remove(e){const t=this.roots.includes(e)?this.roots:e.parent?.children;t&&((0,s.del)(t,e),this._onDidChange.fire(this))}}class l{constructor(e){this._model=e,this._emitter=new n.EventEmitter,this.onDidChangeTreeData=this._emitter.event,this._modelListener=e.onDidChange((e=>this._emitter.fire(e instanceof a?e:void 0)))}dispose(){this._emitter.dispose(),this._modelListener.dispose()}getTreeItem(e){const t=new n.TreeItem(e.item.name);return t.description=e.item.detail,t.tooltip=t.label?`${t.label} - ${e.item.detail}`:e.item.detail,t.contextValue="call-item",t.iconPath=(0,s.getThemeIcon)(e.item.kind),t.command={command:"vscode.open",title:o(3,null),arguments:[e.item.uri,{selection:e.item.selectionRange.with({end:e.item.selectionRange.start})}]},t.collapsibleState=n.TreeItemCollapsibleState.Collapsed,t}getChildren(e){return e?this._model.getCallChildren(e):this._model.roots}getParent(e){return e.parent}}},85:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EditorHighlights=void 0;const n=i(549);t.EditorHighlights=class{constructor(e,t){this._view=e,this._delegate=t,this._decorationType=n.window.createTextEditorDecorationType({backgroundColor:new n.ThemeColor("editor.findMatchHighlightBackground"),rangeBehavior:n.DecorationRangeBehavior.ClosedClosed,overviewRulerLane:n.OverviewRulerLane.Center,overviewRulerColor:new n.ThemeColor("editor.findMatchHighlightBackground")}),this.disposables=[],this._ignore=new Set,this.disposables.push(n.workspace.onDidChangeTextDocument((e=>this._ignore.add(e.document.uri.toString()))),n.window.onDidChangeActiveTextEditor((()=>e.visible&&this.update())),e.onDidChangeVisibility((e=>e.visible?this._show():this._hide())),e.onDidChangeSelection((()=>e.visible&&this.update()))),this._show()}dispose(){n.Disposable.from(...this.disposables).dispose();for(const e of n.window.visibleTextEditors)e.setDecorations(this._decorationType,[])}_show(){const{activeTextEditor:e}=n.window;if(!e||!e.viewColumn)return;if(this._ignore.has(e.document.uri.toString()))return;const[t]=this._view.selection;if(!t)return;const i=this._delegate.getEditorHighlights(t,e.document.uri);i&&e.setDecorations(this._decorationType,i)}_hide(){for(const e of n.window.visibleTextEditors)e.setDecorations(this._decorationType,[])}update(){this._hide(),this._show()}}},784:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Navigation=void 0;const n=i(549),s=i(206);t.Navigation=class{constructor(e){this._view=e,this._disposables=[],this._ctxCanNavigate=new s.ContextKey("references-view.canNavigate"),this._disposables.push(n.commands.registerCommand("references-view.next",(()=>this.next(!1))),n.commands.registerCommand("references-view.prev",(()=>this.previous(!1))))}dispose(){n.Disposable.from(...this._disposables).dispose()}update(e){this._delegate=e,this._ctxCanNavigate.set(Boolean(this._delegate))}_anchor(){if(!this._delegate)return;const[e]=this._view.selection;return e||(n.window.activeTextEditor?this._delegate.nearest(n.window.activeTextEditor.document.uri,n.window.activeTextEditor.selection.active):void 0)}_open(e,t){n.commands.executeCommand("vscode.open",e.uri,{selection:new n.Selection(e.range.start,e.range.start),preserveFocus:t})}previous(e){if(!this._delegate)return;const t=this._anchor();if(!t)return;const i=this._delegate.previous(t),n=this._delegate.location(i);n&&(this._view.reveal(i,{select:!0,focus:!0}),this._open(n,e))}next(e){if(!this._delegate)return;const t=this._anchor();if(!t)return;const i=this._delegate.next(t),n=this._delegate.location(i);n&&(this._view.reveal(i,{select:!0,focus:!0}),this._open(n,e))}}},119:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=void 0;const n=i(549),s=i(995),o=i(472).loadMessageBundle(i(622).join(__dirname,"references/index.ts"));t.register=function(e,t){function i(t,i){if(n.window.activeTextEditor){const o=new s.ReferencesTreeInput(t,new n.Location(n.window.activeTextEditor.document.uri,n.window.activeTextEditor.selection.active),i);e.setInput(o)}}let d;t.subscriptions.push(n.commands.registerCommand("references-view.findReferences",(()=>i("References","vscode.executeReferenceProvider"))),n.commands.registerCommand("references-view.findImplementations",(()=>i("Implementations","vscode.executeImplementationProvider"))),n.commands.registerCommand("references-view.find",((...e)=>n.commands.executeCommand("references-view.findReferences",...e))),n.commands.registerCommand("references-view.removeReferenceItem",a),n.commands.registerCommand("references-view.copy",c),n.commands.registerCommand("references-view.copyAll",r),n.commands.registerCommand("references-view.copyPath",l));const u="references.preferredLocation";function h(t){if(t&&!t.affectsConfiguration(u))return;const i=n.workspace.getConfiguration().get(u);d?.dispose(),d=void 0,"view"===i&&(d=n.commands.registerCommand("editor.action.showReferences",(async(t,i,r)=>{const a=new s.ReferencesTreeInput(o(0,null),new n.Location(t,i),"vscode.executeReferenceProvider",r);e.setInput(a)})))}t.subscriptions.push(n.workspace.onDidChangeConfiguration(h)),t.subscriptions.push({dispose:()=>d?.dispose()}),h()};const r=async e=>{e instanceof s.ReferenceItem?c(e.file.model):e instanceof s.FileItem&&c(e.model)};function a(e){(e instanceof s.FileItem||e instanceof s.ReferenceItem)&&e.remove()}async function c(e){let t;(e instanceof s.ReferencesModel||e instanceof s.ReferenceItem||e instanceof s.FileItem)&&(t=await e.asCopyText()),t&&await n.env.clipboard.writeText(t)}async function l(e){e instanceof s.FileItem&&("file"===e.uri.scheme?n.env.clipboard.writeText(e.uri.fsPath):n.env.clipboard.writeText(e.uri.toString(!0)))}},995:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ReferenceItem=t.FileItem=t.ReferencesModel=t.ReferencesTreeInput=void 0;const n=i(549),s=i(206),o=i(472).loadMessageBundle(i(622).join(__dirname,"references/model.ts"));class r{constructor(e,t,i,n){this.title=e,this.location=t,this._command=i,this._result=n,this.contextValue=i}async resolve(){let e;if(this._result)e=new a(this._result);else{const t=await Promise.resolve(n.commands.executeCommand(this._command,this.location.uri,this.location.range.start));e=new a(t??[])}if(0===e.items.length)return;const t=new c(e);return{provider:t,get message(){return e.message},navigation:e,highlights:e,dnd:e,dispose(){t.dispose()}}}with(e){return new r(this.title,e,this._command)}}t.ReferencesTreeInput=r;class a{constructor(e){let t;this._onDidChange=new n.EventEmitter,this.onDidChangeTreeData=this._onDidChange.event,this.items=[];for(const i of e.sort(a._compareLocations)){const e=i instanceof n.Location?i:new n.Location(i.targetUri,i.targetRange);t&&0===a._compareUriIgnoreFragment(t.uri,e.uri)||(t=new l(e.uri.with({fragment:""}),[],this),this.items.push(t)),t.references.push(new d(e,t))}}static _compareUriIgnoreFragment(e,t){const i=e.with({fragment:""}).toString(),n=t.with({fragment:""}).toString();return i<n?-1:i>n?1:0}static _compareLocations(e,t){const i=e instanceof n.Location?e.uri:e.targetUri,s=t instanceof n.Location?t.uri:t.targetUri;if(i.toString()<s.toString())return-1;if(i.toString()>s.toString())return 1;const o=e instanceof n.Location?e.range:e.targetRange,r=t instanceof n.Location?t.range:t.targetRange;return o.start.isBefore(r.start)?-1:o.start.isAfter(r.start)?1:0}get message(){if(0===this.items.length)return o(0,null);const e=this.items.reduce(((e,t)=>e+t.references.length),0),t=this.items.length;return o(1===e&&1===t?1:1===e?2:1===t?3:4,null,e,t)}location(e){return e instanceof d?e.location:void 0}nearest(e,t){if(0===this.items.length)return;for(const i of this.items)if(i.uri.toString()===e.toString()){for(const e of i.references)if(e.location.range.contains(t))return e;let e;for(const n of i.references){if(n.location.range.end.isAfter(t))return n;e=n}if(e)return e;break}let i=0;const n=a._prefixLen(this.items[i].toString(),e.toString());for(let t=1;t<this.items.length;t++)a._prefixLen(this.items[t].uri.toString(),e.toString())>n&&(i=t);return this.items[i].references[0]}static _prefixLen(e,t){let i=0;for(;i<e.length&&i<t.length&&e.charCodeAt(i)===t.charCodeAt(i);)i+=1;return i}next(e){return this._move(e,!0)??e}previous(e){return this._move(e,!1)??e}_move(e,t){const i=t?1:-1,n=e=>{const t=(this.items.indexOf(e)+i+this.items.length)%this.items.length;return this.items[t]};if(e instanceof l)return t?n(e).references[0]:(0,s.tail)(n(e).references);if(e instanceof d){const t=e.file.references.indexOf(e)+i;return t<0?(0,s.tail)(n(e.file).references):t>=e.file.references.length?n(e.file).references[0]:e.file.references[t]}}getEditorHighlights(e,t){return this.items.find((e=>e.uri.toString()===t.toString()))?.references.map((e=>e.location.range))}remove(e){e instanceof l?((0,s.del)(this.items,e),this._onDidChange.fire(void 0)):((0,s.del)(e.file.references,e),0===e.file.references.length?((0,s.del)(this.items,e.file),this._onDidChange.fire(void 0)):this._onDidChange.fire(e.file))}async asCopyText(){let e="";for(const t of this.items)e+=`${await t.asCopyText()}\n`;return e}getDragUri(e){return e instanceof l?e.uri:(0,s.asResourceUrl)(e.file.uri,e.location.range)}}t.ReferencesModel=a;class c{constructor(e){this._model=e,this._onDidChange=new n.EventEmitter,this.onDidChangeTreeData=this._onDidChange.event,this._listener=e.onDidChangeTreeData((()=>this._onDidChange.fire(void 0)))}dispose(){this._onDidChange.dispose(),this._listener.dispose()}async getTreeItem(e){if(e instanceof l){const t=new n.TreeItem(e.uri);return t.contextValue="file-item",t.description=!0,t.iconPath=n.ThemeIcon.File,t.collapsibleState=n.TreeItemCollapsibleState.Collapsed,t}{const{range:t}=e.location,i=await e.getDocument(!0),{before:r,inside:a,after:c}=(0,s.getPreviewChunks)(i,t),l={label:r+a+c,highlights:[[r.length,r.length+a.length]]},d=new n.TreeItem(l);return d.collapsibleState=n.TreeItemCollapsibleState.None,d.contextValue="reference-item",d.command={command:"vscode.open",title:o(5,null),arguments:[e.location.uri,{selection:t.with({end:t.start})}]},d}}async getChildren(e){return e?e instanceof l?e.references:void 0:this._model.items}getParent(e){return e instanceof d?e.file:void 0}}class l{constructor(e,t,i){this.uri=e,this.references=t,this.model=i}remove(){this.model.remove(this)}async asCopyText(){let e=`${n.workspace.asRelativePath(this.uri)}\n`;for(const t of this.references)e+=`  ${await t.asCopyText()}\n`;return e}}t.FileItem=l;class d{constructor(e,t){this.location=e,this.file=t}async getDocument(e){if(this._document||(this._document=n.workspace.openTextDocument(this.location.uri)),e){const e=this.file.model.next(this.file);e instanceof l&&e!==this.file?n.workspace.openTextDocument(e.uri):e instanceof d&&n.workspace.openTextDocument(e.location.uri)}return this._document}remove(){this.file.model.remove(this)}async asCopyText(){const e=await this.getDocument(),t=(0,s.getPreviewChunks)(e,this.location.range,21,!1);return`${this.location.range.start.line+1}, ${this.location.range.start.character+1}: ${t.before+t.inside+t.after}`}}t.ReferenceItem=d},182:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SymbolsTree=void 0;const n=i(549),s=i(85),o=i(784),r=i(206),a=i(472).loadMessageBundle(i(622).join(__dirname,"tree.ts"));t.SymbolsTree=class{constructor(){this.viewId="references-view.tree",this._ctxIsActive=new r.ContextKey("reference-list.isActive"),this._ctxHasResult=new r.ContextKey("reference-list.hasResult"),this._ctxInputSource=new r.ContextKey("reference-list.source"),this._history=new u(this),this._provider=new c,this._dnd=new l,this._tree=n.window.createTreeView(this.viewId,{treeDataProvider:this._provider,showCollapseAll:!0,dragAndDropController:this._dnd}),this._navigation=new o.Navigation(this._tree)}dispose(){this._history.dispose(),this._tree.dispose(),this._sessionDisposable?.dispose()}getInput(){return this._input}async setInput(e){if(!await(0,r.isValidRequestPosition)(e.location.uri,e.location.range.start))return void this.clearInput();this._ctxInputSource.set(e.contextValue),this._ctxIsActive.set(!0),this._ctxHasResult.set(!0),n.commands.executeCommand(`${this.viewId}.focus`);const t=!this._input||Object.getPrototypeOf(this._input)!==Object.getPrototypeOf(e);this._input=e,this._sessionDisposable?.dispose(),this._tree.title=e.title,this._tree.message=t?void 0:this._tree.message;const i=Promise.resolve(e.resolve());this._provider.update(i.then((e=>e?.provider??this._history))),this._dnd.update(i.then((e=>e?.dnd)));const o=await i;if(this._input!==e)return;if(!o)return void this.clearInput();this._history.add(e),this._tree.message=o.message,this._navigation.update(o.navigation);const a=o.navigation?.nearest(e.location.uri,e.location.range.start);a&&this._tree.visible&&await this._tree.reveal(a,{select:!0,focus:!0,expand:!0});const c=[];let l;o.highlights&&(l=new s.EditorHighlights(this._tree,o.highlights),c.push(l)),o.provider.onDidChangeTreeData&&c.push(o.provider.onDidChangeTreeData((()=>{this._tree.title=e.title,this._tree.message=o.message,l?.update()}))),"function"==typeof o.dispose&&c.push(new n.Disposable((()=>o.dispose()))),this._sessionDisposable=n.Disposable.from(...c)}clearInput(){this._sessionDisposable?.dispose(),this._input=void 0,this._ctxHasResult.set(!1),this._ctxInputSource.reset(),this._tree.title=a(0,null),this._tree.message=0===this._history.size?a(1,null):a(2,null),this._provider.update(Promise.resolve(this._history))}};class c{constructor(){this._onDidChange=new n.EventEmitter,this.onDidChangeTreeData=this._onDidChange.event}update(e){this._sessionDispoables?.dispose(),this._sessionDispoables=void 0,this._onDidChange.fire(void 0),this.provider=e,e.then((t=>{this.provider===e&&t.onDidChangeTreeData&&(this._sessionDispoables=t.onDidChangeTreeData(this._onDidChange.fire,this._onDidChange))})).catch((e=>{this.provider=void 0,console.error(e)}))}async getTreeItem(e){return this._assertProvider(),(await this.provider).getTreeItem(e)}async getChildren(e){return this._assertProvider(),(await this.provider).getChildren(e)}async getParent(e){this._assertProvider();const t=await this.provider;return t.getParent?t.getParent(e):void 0}_assertProvider(){if(!this.provider)throw new Error("MISSING provider")}}class l{constructor(){this.dropMimeTypes=[],this.dragMimeTypes=["text/uri-list"]}update(e){this._delegate=void 0,e.then((e=>this._delegate=e))}handleDrag(e,t){if(this._delegate){const i=[];for(const t of e){const e=this._delegate.getDragUri(t);e&&i.push(e.toString())}i.length>0&&t.set("text/uri-list",new n.DataTransferItem(i.join("\r\n")))}}handleDrop(){throw new Error("Method not implemented.")}}class d{constructor(e,t,i,s){this.key=e,this.word=t,this.anchor=i,this.input=s,this.description=`${n.workspace.asRelativePath(s.location.uri)} • ${s.title.toLocaleLowerCase()}`}}class u{constructor(e){this._tree=e,this._onDidChangeTreeData=new n.EventEmitter,this.onDidChangeTreeData=this._onDidChangeTreeData.event,this._disposables=[],this._ctxHasHistory=new r.ContextKey("reference-list.hasHistory"),this._inputs=new Map,this._disposables.push(n.commands.registerCommand("references-view.clear",(()=>e.clearInput())),n.commands.registerCommand("references-view.clearHistory",(()=>{this.clear(),e.clearInput()})),n.commands.registerCommand("references-view.refind",(e=>{e instanceof d&&this._reRunHistoryItem(e)})),n.commands.registerCommand("references-view.refresh",(()=>{const e=Array.from(this._inputs.values()).pop();e&&this._reRunHistoryItem(e)})),n.commands.registerCommand("_references-view.showHistoryItem",(async e=>{if(e instanceof d){const t=e.anchor.guessedTrackedPosition()??e.input.location.range.start;return n.commands.executeCommand("vscode.open",e.input.location.uri,{selection:new n.Range(t,t)})}})),n.commands.registerCommand("references-view.pickFromHistory",(async()=>{const e=(await this.getChildren()).map((e=>({label:e.word,description:e.description,item:e}))),t=await n.window.showQuickPick(e,{placeHolder:a(3,null)});t&&this._reRunHistoryItem(t.item)})))}dispose(){n.Disposable.from(...this._disposables).dispose(),this._onDidChangeTreeData.dispose()}_reRunHistoryItem(e){this._inputs.delete(e.key);const t=e.anchor.guessedTrackedPosition();let i=e.input;t&&!e.input.location.range.start.isEqual(t)&&(i=e.input.with(new n.Location(e.input.location.uri,t))),this._tree.setInput(i)}async add(e){const t=await n.workspace.openTextDocument(e.location.uri),i=new r.WordAnchor(t,e.location.range.start),s=t.getWordRangeAtPosition(e.location.range.start)??t.getWordRangeAtPosition(e.location.range.start,/[^\s]+/),o=s?t.getText(s):"???",a=new d(JSON.stringify([s?.start??e.location.range.start,e.location.uri,e.title]),o,i,e);this._inputs.delete(a.key),this._inputs.set(a.key,a),this._ctxHasHistory.set(!0)}clear(){this._inputs.clear(),this._ctxHasHistory.set(!1),this._onDidChangeTreeData.fire(void 0)}get size(){return this._inputs.size}getTreeItem(e){const t=new n.TreeItem(e.word);return t.description=e.description,t.command={command:"_references-view.showHistoryItem",arguments:[e],title:a(4,null)},t.collapsibleState=n.TreeItemCollapsibleState.None,t.contextValue="history-item",t}getChildren(){return Promise.all([...this._inputs.values()].reverse())}getParent(){}}},214:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=void 0;const n=i(549),s=i(206),o=i(767);function r(e){e instanceof o.TypeItem&&e.remove()}t.register=function(e,t){const i=new a(t.workspaceState,"subtypes");function s(t,s){let r;i.value=t;const a=e.getInput();s instanceof o.TypeItem?r=new o.TypesTreeInput(new n.Location(s.item.uri,s.item.selectionRange.start),i.value):a instanceof o.TypesTreeInput&&(r=new o.TypesTreeInput(a.location,i.value)),r&&e.setInput(r)}t.subscriptions.push(n.commands.registerCommand("references-view.showTypeHierarchy",(function(){if(n.window.activeTextEditor){const t=new o.TypesTreeInput(new n.Location(n.window.activeTextEditor.document.uri,n.window.activeTextEditor.selection.active),i.value);e.setInput(t)}})),n.commands.registerCommand("references-view.showSupertypes",(e=>s("supertypes",e))),n.commands.registerCommand("references-view.showSubtypes",(e=>s("subtypes",e))),n.commands.registerCommand("references-view.removeTypeItem",r))};class a{constructor(e,t="subtypes"){this._mem=e,this._value=t,this._ctxMode=new s.ContextKey("references-view.typeHierarchyMode");const i=e.get(a._key);this.value="string"==typeof i?i:t}get value(){return this._value}set value(e){this._value=e,this._ctxMode.set(e),this._mem.update(a._key,e)}}a._key="references-view.typeHierarchyMode"},767:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TypeItem=t.TypesTreeInput=void 0;const n=i(549),s=i(206),o=i(472).loadMessageBundle(i(622).join(__dirname,"types/model.ts"));class r{constructor(e,t){this.location=e,this.direction=t,this.contextValue="typeHierarchy",this.title=o("supertypes"===t?0:1,null)}async resolve(){const e=await Promise.resolve(n.commands.executeCommand("vscode.prepareTypeHierarchy",this.location.uri,this.location.range.start)),t=new c(this.direction,e??[]),i=new l(t);if(0!==t.roots.length)return{provider:i,get message(){return 0===t.roots.length?o(2,null):void 0},navigation:t,highlights:t,dnd:t,dispose(){i.dispose()}}}with(e){return new r(e,this.direction)}}t.TypesTreeInput=r;class a{constructor(e,t,i){this.model=e,this.item=t,this.parent=i}remove(){this.model.remove(this)}}t.TypeItem=a;class c{constructor(e,t){this.direction=e,this.roots=[],this._onDidChange=new n.EventEmitter,this.onDidChange=this._onDidChange.event,this.roots=t.map((e=>new a(this,e,void 0)))}async _resolveTypes(e){if("supertypes"===this.direction){const t=await n.commands.executeCommand("vscode.provideSupertypes",e.item);return t?t.map((t=>new a(this,t,e))):[]}{const t=await n.commands.executeCommand("vscode.provideSubtypes",e.item);return t?t.map((t=>new a(this,t,e))):[]}}async getTypeChildren(e){return e.children||(e.children=await this._resolveTypes(e)),e.children}getDragUri(e){return(0,s.asResourceUrl)(e.item.uri,e.item.range)}location(e){return new n.Location(e.item.uri,e.item.range)}nearest(e,t){return this.roots.find((t=>t.item.uri.toString()===e.toString()))??this.roots[0]}next(e){return this._move(e,!0)??e}previous(e){return this._move(e,!1)??e}_move(e,t){if(e.children?.length)return t?e.children[0]:(0,s.tail)(e.children);const i=this.roots.includes(e)?this.roots:e.parent?.children;if(i?.length){const n=i.indexOf(e);return i[n+(t?1:-1)+i.length%i.length]}}getEditorHighlights(e,t){return e.item.uri.toString()===t.toString()?[e.item.selectionRange]:void 0}remove(e){const t=this.roots.includes(e)?this.roots:e.parent?.children;t&&((0,s.del)(t,e),this._onDidChange.fire(this))}}class l{constructor(e){this._model=e,this._emitter=new n.EventEmitter,this.onDidChangeTreeData=this._emitter.event,this._modelListener=e.onDidChange((e=>this._emitter.fire(e instanceof a?e:void 0)))}dispose(){this._emitter.dispose(),this._modelListener.dispose()}getTreeItem(e){const t=new n.TreeItem(e.item.name);return t.description=e.item.detail,t.contextValue="type-item",t.iconPath=(0,s.getThemeIcon)(e.item.kind),t.command={command:"vscode.open",title:o(3,null),arguments:[e.item.uri,{selection:e.item.selectionRange.with({end:e.item.selectionRange.start})}]},t.collapsibleState=n.TreeItemCollapsibleState.Collapsed,t}getChildren(e){return e?this._model.getTypeChildren(e):this._model.roots}getParent(e){return e.parent}}},206:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getThemeIcon=t.WordAnchor=t.ContextKey=t.getPreviewChunks=t.isValidRequestPosition=t.asResourceUrl=t.tail=t.del=void 0;const n=i(549);t.del=function(e,t){const i=e.indexOf(t);i>=0&&e.splice(i,1)},t.tail=function(e){return e[e.length-1]},t.asResourceUrl=function(e,t){return e.with({fragment:`L${1+t.start.line},${1+t.start.character}-${1+t.end.line},${1+t.end.character}`})},t.isValidRequestPosition=async function(e,t){const i=await n.workspace.openTextDocument(e);let s=i.getWordRangeAtPosition(t);return s||(s=i.getWordRangeAtPosition(t,/[^\s]+/)),Boolean(s)},t.getPreviewChunks=function(e,t,i=8,s=!0){const o=t.start.with({character:Math.max(0,t.start.character-i)}),r=e.getWordRangeAtPosition(o);let a=e.getText(new n.Range(r?r.start:o,t.start));const c=e.getText(t),l=t.end.translate(0,331);let d=e.getText(new n.Range(t.end,l));return s&&(a=a.replace(/^\s*/g,""),d=d.replace(/\s*$/g,"")),{before:a,inside:c,after:d}},t.ContextKey=class{constructor(e){this.name=e}async set(e){await n.commands.executeCommand("setContext",this.name,e)}async reset(){await n.commands.executeCommand("setContext",this.name,void 0)}},t.WordAnchor=class{constructor(e,t){this._doc=e,this._position=t,this._version=e.version,this._word=this._getAnchorWord(e,t)}_getAnchorWord(e,t){const i=e.getWordRangeAtPosition(t)||e.getWordRangeAtPosition(t,/[^\s]+/);return i&&e.getText(i)}guessedTrackedPosition(){if(!this._word)return this._position;if(this._version===this._doc.version)return this._position;const e=this._getAnchorWord(this._doc,this._position);if(this._word===e)return this._position;const t=this._position.line;let i,s,o=0;do{if(s=!1,i=t+o,i<this._doc.lineCount){s=!0;const e=this._doc.lineAt(i).text.indexOf(this._word);if(e>=0)return new n.Position(i,e)}if(o+=1,i=t-o,i>=0){s=!0;const e=this._doc.lineAt(i).text.indexOf(this._word);if(e>=0)return new n.Position(i,e)}}while(o<100&&s);return this._position}};const s=["symbol-file","symbol-module","symbol-namespace","symbol-package","symbol-class","symbol-method","symbol-property","symbol-field","symbol-constructor","symbol-enum","symbol-interface","symbol-function","symbol-variable","symbol-constant","symbol-string","symbol-number","symbol-boolean","symbol-array","symbol-object","symbol-key","symbol-null","symbol-enum-member","symbol-struct","symbol-event","symbol-operator","symbol-type-parameter"];t.getThemeIcon=function(e){const t=s[e];return t?new n.ThemeIcon(t):void 0}},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},549:e=>{e.exports=require("vscode")}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,i),o.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=i(879),s=i(119),o=i(182),r=i(214);e.activate=function(e){const i=new o.SymbolsTree;return s.register(i,e),t.register(i,e),r.register(i,e),{setInput:function(e){i.setInput(e)}}}})();var s=exports;for(var o in n)s[o]=n[o];n.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/92d25e35d9bf1a6b16f7d0758f25d48ace11e5b9/extensions/references-view/dist/extension.js.map