"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=/https?:\/\/[^\s]+/;class k{constructor(e,d){e.on("text-change",function(f){const c=e.getSelection(!1),t=c==null?void 0:c.index;if(t===null||typeof t>"u")return;const[r]=e.getLeaf(t);if(r==null)return;const[u]=f.ops.filter(s=>s.insert).map(s=>s.insert)??[null],o=r.value();if(!o||typeof o!="string"||r.parent.domNode.localName==="a")return;const x=[`
`,"	"].find(s=>s===u),g=d.linkRegex??m,[n]=o.match(g)??[null];if(n===null)return;const i=o.indexOf(n);if(i===null)return;const l=e.getIndex(r),a=l+i,p=a+n.length;!x&&t<=p&&t>a||(e.deleteText(l+i,n.length,"api"),e.insertText(l+i,n,"link",n))})}}exports.SmartLinks=k;
