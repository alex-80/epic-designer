import{t as N,m as K}from"./monacoEditor.155cdd76.71ce7d70.js";import"../guide_components_k-designer.md.da94422c.js";import"../app.2d306cc2.js";var M=Object.defineProperty,R=(e,t,i)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,_=(e,t,i)=>(R(e,typeof t!="symbol"?t+"":t,i),i);/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var L=Object.defineProperty,E=Object.getOwnPropertyDescriptor,H=Object.getOwnPropertyNames,V=Object.prototype.hasOwnProperty,W=(e,t,i)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,I=(e,t,i,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of H(t))!V.call(e,a)&&a!==i&&L(e,a,{get:()=>t[a],enumerable:!(s=E(t,a))||s.enumerable});return e},j=(e,t,i)=>(I(e,t,"default"),i&&I(i,t,"default")),m=(e,t,i)=>(W(e,typeof t!="symbol"?t+"":t,i),i),r={};j(r,K);var B=class{constructor(e,t){_(this,"_configChangeListener"),_(this,"_updateExtraLibsToken"),_(this,"_extraLibsChangeListener"),_(this,"_worker"),_(this,"_client"),this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=r.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(r.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},o={};o["lib.d.ts"]=!0;o["lib.dom.d.ts"]=!0;o["lib.dom.iterable.d.ts"]=!0;o["lib.es2015.collection.d.ts"]=!0;o["lib.es2015.core.d.ts"]=!0;o["lib.es2015.d.ts"]=!0;o["lib.es2015.generator.d.ts"]=!0;o["lib.es2015.iterable.d.ts"]=!0;o["lib.es2015.promise.d.ts"]=!0;o["lib.es2015.proxy.d.ts"]=!0;o["lib.es2015.reflect.d.ts"]=!0;o["lib.es2015.symbol.d.ts"]=!0;o["lib.es2015.symbol.wellknown.d.ts"]=!0;o["lib.es2016.array.include.d.ts"]=!0;o["lib.es2016.d.ts"]=!0;o["lib.es2016.full.d.ts"]=!0;o["lib.es2017.d.ts"]=!0;o["lib.es2017.full.d.ts"]=!0;o["lib.es2017.intl.d.ts"]=!0;o["lib.es2017.object.d.ts"]=!0;o["lib.es2017.sharedmemory.d.ts"]=!0;o["lib.es2017.string.d.ts"]=!0;o["lib.es2017.typedarrays.d.ts"]=!0;o["lib.es2018.asyncgenerator.d.ts"]=!0;o["lib.es2018.asynciterable.d.ts"]=!0;o["lib.es2018.d.ts"]=!0;o["lib.es2018.full.d.ts"]=!0;o["lib.es2018.intl.d.ts"]=!0;o["lib.es2018.promise.d.ts"]=!0;o["lib.es2018.regexp.d.ts"]=!0;o["lib.es2019.array.d.ts"]=!0;o["lib.es2019.d.ts"]=!0;o["lib.es2019.full.d.ts"]=!0;o["lib.es2019.object.d.ts"]=!0;o["lib.es2019.string.d.ts"]=!0;o["lib.es2019.symbol.d.ts"]=!0;o["lib.es2020.bigint.d.ts"]=!0;o["lib.es2020.d.ts"]=!0;o["lib.es2020.full.d.ts"]=!0;o["lib.es2020.intl.d.ts"]=!0;o["lib.es2020.promise.d.ts"]=!0;o["lib.es2020.sharedmemory.d.ts"]=!0;o["lib.es2020.string.d.ts"]=!0;o["lib.es2020.symbol.wellknown.d.ts"]=!0;o["lib.es2021.d.ts"]=!0;o["lib.es2021.full.d.ts"]=!0;o["lib.es2021.intl.d.ts"]=!0;o["lib.es2021.promise.d.ts"]=!0;o["lib.es2021.string.d.ts"]=!0;o["lib.es2021.weakref.d.ts"]=!0;o["lib.es5.d.ts"]=!0;o["lib.es6.d.ts"]=!0;o["lib.esnext.d.ts"]=!0;o["lib.esnext.full.d.ts"]=!0;o["lib.esnext.intl.d.ts"]=!0;o["lib.esnext.promise.d.ts"]=!0;o["lib.esnext.string.d.ts"]=!0;o["lib.esnext.weakref.d.ts"]=!0;o["lib.scripthost.d.ts"]=!0;o["lib.webworker.d.ts"]=!0;o["lib.webworker.importscripts.d.ts"]=!0;o["lib.webworker.iterable.d.ts"]=!0;function A(e,t,i=0){if(typeof e=="string")return e;if(e===void 0)return"";let s="";if(i){s+=t;for(let a=0;a<i;a++)s+="  "}if(s+=e.messageText,i++,e.next)for(const a of e.next)s+=A(a,t,i);return s}function w(e){return e?e.map(t=>t.text).join(""):""}var y=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:a,column:g}=i,{lineNumber:d,column:n}=s;return{startLineNumber:a,startColumn:g,endLineNumber:d,endColumn:n}}},U=class{constructor(e){_(this,"_libFiles"),_(this,"_hasFetchedLibFiles"),_(this,"_fetchLibFilesPromise"),this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!o[e.path.slice(1)]:!1}getOrCreateModel(e){const t=r.Uri.parse(e),i=r.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return r.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=N.getExtraLibs()[e];return s?r.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){!this._containsLibFile(e)||await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},$=class extends y{constructor(e,t,i,s){super(s),_(this,"_disposables",[]),_(this,"_listener",Object.create(null)),this._libFiles=e,this._defaults=t,this._selector=i;const a=n=>{if(n.getLanguageId()!==i)return;const c=()=>{const{onlyVisible:f}=this._defaults.getDiagnosticsOptions();f?n.isAttachedToEditor()&&this._doValidate(n):this._doValidate(n)};let u;const p=n.onDidChangeContent(()=>{clearTimeout(u),u=window.setTimeout(c,500)}),h=n.onDidChangeAttached(()=>{const{onlyVisible:f}=this._defaults.getDiagnosticsOptions();f&&(n.isAttachedToEditor()?c():r.editor.setModelMarkers(n,this._selector,[]))});this._listener[n.uri.toString()]={dispose(){p.dispose(),h.dispose(),clearTimeout(u)}},c()},g=n=>{r.editor.setModelMarkers(n,this._selector,[]);const c=n.uri.toString();this._listener[c]&&(this._listener[c].dispose(),delete this._listener[c])};this._disposables.push(r.editor.onDidCreateModel(n=>a(n))),this._disposables.push(r.editor.onWillDisposeModel(g)),this._disposables.push(r.editor.onDidChangeModelLanguage(n=>{g(n.model),a(n.model)})),this._disposables.push({dispose(){for(const n of r.editor.getModels())g(n)}});const d=()=>{for(const n of r.editor.getModels())g(n),a(n)};this._disposables.push(this._defaults.onDidChange(d)),this._disposables.push(this._defaults.onDidExtraLibsChange(d)),r.editor.getModels().forEach(n=>a(n))}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:a,noSuggestionDiagnostics:g}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),a||i.push(t.getSemanticDiagnostics(e.uri.toString())),g||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const d=await Promise.all(i);if(!d||e.isDisposed())return;const n=d.reduce((u,p)=>p.concat(u),[]).filter(u=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(u.code)===-1),c=n.map(u=>u.relatedInformation||[]).reduce((u,p)=>p.concat(u),[]).map(u=>u.file?r.Uri.parse(u.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(c),!e.isDisposed()&&r.editor.setModelMarkers(e,this._selector,n.map(u=>this._convertDiagnostics(e,u)))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:a,column:g}=e.getPositionAt(i),{lineNumber:d,column:n}=e.getPositionAt(i+s),c=[];return t.reportsUnnecessary&&c.push(r.MarkerTag.Unnecessary),t.reportsDeprecated&&c.push(r.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:a,startColumn:g,endLineNumber:d,endColumn:n,message:A(t.messageText,`
`),code:t.code.toString(),tags:c,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach(s=>{let a=e;if(s.file&&(a=this._libFiles.getOrCreateModel(s.file.fileName)),!a)return;const g=s.start||0,d=s.length||1,{lineNumber:n,column:c}=a.getPositionAt(g),{lineNumber:u,column:p}=a.getPositionAt(g+d);i.push({resource:a.uri,startLineNumber:n,startColumn:c,endLineNumber:u,endColumn:p,message:A(s.messageText,`
`)})}),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return r.MarkerSeverity.Error;case 3:return r.MarkerSeverity.Info;case 0:return r.MarkerSeverity.Warning;case 2:return r.MarkerSeverity.Hint}return r.MarkerSeverity.Info}},C=class extends y{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const a=e.getWordUntilPosition(t),g=new r.Range(t.lineNumber,a.startColumn,t.lineNumber,a.endColumn),d=e.uri,n=e.getOffsetAt(t),c=await this._worker(d);if(e.isDisposed())return;const u=await c.getCompletionsAtPosition(d.toString(),n);return!u||e.isDisposed()?void 0:{suggestions:u.entries.map(p=>{var h;let f=g;if(p.replacementSpan){const x=e.getPositionAt(p.replacementSpan.start),k=e.getPositionAt(p.replacementSpan.start+p.replacementSpan.length);f=new r.Range(x.lineNumber,x.column,k.lineNumber,k.column)}const v=[];return((h=p.kindModifiers)==null?void 0:h.indexOf("deprecated"))!==-1&&v.push(r.languages.CompletionItemTag.Deprecated),{uri:d,position:t,offset:n,range:f,label:p.name,insertText:p.name,sortText:p.sortText,kind:C.convertKind(p.kind),tags:v}})}}async resolveCompletionItem(e,t){const i=e,s=i.uri,a=i.position,g=i.offset,d=await(await this._worker(s)).getCompletionEntryDetails(s.toString(),g,i.label);return d?{uri:s,position:a,label:d.name,kind:C.convertKind(d.kind),detail:w(d.displayParts),documentation:{value:C.createDocumentationString(d)}}:i}static convertKind(e){switch(e){case l.primitiveType:case l.keyword:return r.languages.CompletionItemKind.Keyword;case l.variable:case l.localVariable:return r.languages.CompletionItemKind.Variable;case l.memberVariable:case l.memberGetAccessor:case l.memberSetAccessor:return r.languages.CompletionItemKind.Field;case l.function:case l.memberFunction:case l.constructSignature:case l.callSignature:case l.indexSignature:return r.languages.CompletionItemKind.Function;case l.enum:return r.languages.CompletionItemKind.Enum;case l.module:return r.languages.CompletionItemKind.Module;case l.class:return r.languages.CompletionItemKind.Class;case l.interface:return r.languages.CompletionItemKind.Interface;case l.warning:return r.languages.CompletionItemKind.File}return r.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=w(e.documentation);if(e.tags)for(const i of e.tags)t+=`

${T(i)}`;return t}};function T(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` \u2014 ${s.map(a=>a.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(i=>i.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var P=class extends y{constructor(){super(...arguments),_(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case r.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case r.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case r.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const a=e.uri,g=e.getOffsetAt(t),d=await this._worker(a);if(e.isDisposed())return;const n=await d.getSignatureHelpItems(a.toString(),g,{triggerReason:P._toSignatureHelpTriggerReason(s)});if(!n||e.isDisposed())return;const c={activeSignature:n.selectedItemIndex,activeParameter:n.argumentIndex,signatures:[]};return n.items.forEach(u=>{const p={label:"",parameters:[]};p.documentation={value:w(u.documentation)},p.label+=w(u.prefixDisplayParts),u.parameters.forEach((h,f,v)=>{const x=w(h.displayParts),k={label:x,documentation:{value:w(h.documentation)}};p.label+=x,p.parameters.push(k),f<v.length-1&&(p.label+=w(u.separatorDisplayParts))}),p.label+=w(u.suffixDisplayParts),c.signatures.push(p)}),{value:c,dispose(){}}}},z=class extends y{async provideHover(e,t,i){const s=e.uri,a=e.getOffsetAt(t),g=await this._worker(s);if(e.isDisposed())return;const d=await g.getQuickInfoAtPosition(s.toString(),a);if(!d||e.isDisposed())return;const n=w(d.documentation),c=d.tags?d.tags.map(p=>T(p)).join(`  

`):"",u=w(d.displayParts);return{range:this._textSpanToRange(e,d.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:n+(c?`

`+c:"")}]}}},G=class extends y{async provideDocumentHighlights(e,t,i){const s=e.uri,a=e.getOffsetAt(t),g=await this._worker(s);if(e.isDisposed())return;const d=await g.getOccurrencesAtPosition(s.toString(),a);if(!(!d||e.isDisposed()))return d.map(n=>({range:this._textSpanToRange(e,n.textSpan),kind:n.isWriteAccess?r.languages.DocumentHighlightKind.Write:r.languages.DocumentHighlightKind.Text}))}},J=class extends y{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,a=e.getOffsetAt(t),g=await this._worker(s);if(e.isDisposed())return;const d=await g.getDefinitionAtPosition(s.toString(),a);if(!d||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(d.map(c=>r.Uri.parse(c.fileName))),e.isDisposed()))return;const n=[];for(let c of d){const u=this._libFiles.getOrCreateModel(c.fileName);u&&n.push({uri:u.uri,range:this._textSpanToRange(u,c.textSpan)})}return n}},Q=class extends y{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const a=e.uri,g=e.getOffsetAt(t),d=await this._worker(a);if(e.isDisposed())return;const n=await d.getReferencesAtPosition(a.toString(),g);if(!n||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(n.map(u=>r.Uri.parse(u.fileName))),e.isDisposed()))return;const c=[];for(let u of n){const p=this._libFiles.getOrCreateModel(u.fileName);p&&c.push({uri:p.uri,range:this._textSpanToRange(p,u.textSpan)})}return c}},q=class extends y{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const a=await s.getNavigationBarItems(i.toString());if(!a||e.isDisposed())return;const g=(n,c,u)=>{let p={name:c.text,detail:"",kind:b[c.kind]||r.languages.SymbolKind.Variable,range:this._textSpanToRange(e,c.spans[0]),selectionRange:this._textSpanToRange(e,c.spans[0]),tags:[]};if(u&&(p.containerName=u),c.childItems&&c.childItems.length>0)for(let h of c.childItems)g(n,h,p.name);n.push(p)};let d=[];return a.forEach(n=>g(d,n)),d}},l=class{};m(l,"unknown","");m(l,"keyword","keyword");m(l,"script","script");m(l,"module","module");m(l,"class","class");m(l,"interface","interface");m(l,"type","type");m(l,"enum","enum");m(l,"variable","var");m(l,"localVariable","local var");m(l,"function","function");m(l,"localFunction","local function");m(l,"memberFunction","method");m(l,"memberGetAccessor","getter");m(l,"memberSetAccessor","setter");m(l,"memberVariable","property");m(l,"constructorImplementation","constructor");m(l,"callSignature","call");m(l,"indexSignature","index");m(l,"constructSignature","construct");m(l,"parameter","parameter");m(l,"typeParameter","type parameter");m(l,"primitiveType","primitive type");m(l,"label","label");m(l,"alias","alias");m(l,"const","const");m(l,"let","let");m(l,"warning","warning");var b=Object.create(null);b[l.module]=r.languages.SymbolKind.Module;b[l.class]=r.languages.SymbolKind.Class;b[l.enum]=r.languages.SymbolKind.Enum;b[l.interface]=r.languages.SymbolKind.Interface;b[l.memberFunction]=r.languages.SymbolKind.Method;b[l.memberVariable]=r.languages.SymbolKind.Property;b[l.memberGetAccessor]=r.languages.SymbolKind.Property;b[l.memberSetAccessor]=r.languages.SymbolKind.Property;b[l.variable]=r.languages.SymbolKind.Variable;b[l.const]=r.languages.SymbolKind.Variable;b[l.localVariable]=r.languages.SymbolKind.Variable;b[l.variable]=r.languages.SymbolKind.Variable;b[l.function]=r.languages.SymbolKind.Function;b[l.localFunction]=r.languages.SymbolKind.Function;var S=class extends y{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},X=class extends S{async provideDocumentRangeFormattingEdits(e,t,i,s){const a=e.uri,g=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),d=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),n=await this._worker(a);if(e.isDisposed())return;const c=await n.getFormattingEditsForRange(a.toString(),g,d,S._convertOptions(i));if(!(!c||e.isDisposed()))return c.map(u=>this._convertTextChanges(e,u))}},Y=class extends S{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,i,s,a){const g=e.uri,d=e.getOffsetAt(t),n=await this._worker(g);if(e.isDisposed())return;const c=await n.getFormattingEditsAfterKeystroke(g.toString(),d,i,S._convertOptions(s));if(!(!c||e.isDisposed()))return c.map(u=>this._convertTextChanges(e,u))}},Z=class extends S{async provideCodeActions(e,t,i,s){const a=e.uri,g=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),d=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),n=S._convertOptions(e.getOptions()),c=i.markers.filter(h=>h.code).map(h=>h.code).map(Number),u=await this._worker(a);if(e.isDisposed())return;const p=await u.getCodeFixesAtPosition(a.toString(),g,d,c,n);return!p||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:p.filter(h=>h.changes.filter(f=>f.isNewFile).length===0).map(h=>this._tsCodeFixActionToMonacoCodeAction(e,i,h)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const a of i.changes)for(const g of a.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,g.span),text:g.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},ee=class extends y{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const a=e.uri,g=a.toString(),d=e.getOffsetAt(t),n=await this._worker(a);if(e.isDisposed())return;const c=await n.getRenameInfo(g,d,{allowRenameOfImportPath:!1});if(c.canRename===!1)return{edits:[],rejectReason:c.localizedErrorMessage};if(c.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const u=await n.findRenameLocations(g,d,!1,!1,!1);if(!u||e.isDisposed())return;const p=[];for(const h of u){const f=this._libFiles.getOrCreateModel(h.fileName);if(f)p.push({resource:f.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(f,h.textSpan),text:i}});else throw new Error(`Unknown file ${h.fileName}.`)}return{edits:p}}},te=class extends y{async provideInlayHints(e,t,i){const s=e.uri,a=s.toString(),g=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),d=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),n=await this._worker(s);return e.isDisposed()?null:{hints:(await n.provideInlayHints(a,g,d)).map(c=>({...c,label:c.text,position:e.getPositionAt(c.position),kind:this._convertHintKind(c.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return r.languages.InlayHintKind.Parameter;case"Type":return r.languages.InlayHintKind.Type;default:return r.languages.InlayHintKind.Type}}},D,F;function ne(e){F=O(e,"typescript")}function ae(e){D=O(e,"javascript")}function oe(){return new Promise((e,t)=>{if(!D)return t("JavaScript not registered!");e(D)})}function le(){return new Promise((e,t)=>{if(!F)return t("TypeScript not registered!");e(F)})}function O(e,t){const i=new B(t,e),s=(...g)=>i.getLanguageServiceWorker(...g),a=new U(s);return r.languages.registerCompletionItemProvider(t,new C(s)),r.languages.registerSignatureHelpProvider(t,new P(s)),r.languages.registerHoverProvider(t,new z(s)),r.languages.registerDocumentHighlightProvider(t,new G(s)),r.languages.registerDefinitionProvider(t,new J(a,s)),r.languages.registerReferenceProvider(t,new Q(a,s)),r.languages.registerDocumentSymbolProvider(t,new q(s)),r.languages.registerDocumentRangeFormattingEditProvider(t,new X(s)),r.languages.registerOnTypeFormattingEditProvider(t,new Y(s)),r.languages.registerCodeActionProvider(t,new Z(s)),r.languages.registerRenameProvider(t,new ee(a,s)),r.languages.registerInlayHintsProvider(t,new te(s)),new $(a,e,t,s),s}export{y as Adapter,Z as CodeActionAdaptor,J as DefinitionAdapter,$ as DiagnosticsAdapter,X as FormatAdapter,S as FormatHelper,Y as FormatOnTypeAdapter,te as InlayHintsAdapter,l as Kind,U as LibFiles,G as OccurrencesAdapter,q as OutlineAdapter,z as QuickInfoAdapter,Q as ReferenceAdapter,ee as RenameAdapter,P as SignatureHelpAdapter,C as SuggestAdapter,B as WorkerManager,A as flattenDiagnosticMessageText,oe as getJavaScriptWorker,le as getTypeScriptWorker,ae as setupJavaScript,ne as setupTypeScript};
