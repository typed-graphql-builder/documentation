"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(y,o(o({ref:t},c),{},{components:a})):r.createElement(y,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:35,title:"Custom scalars"},o=void 0,p={unversionedId:"custom-scalars",id:"custom-scalars",title:"Custom scalars",description:"Custom scalars are supported through the --scalar CLI option.",source:"@site/docs/custom-scalars.md",sourceDirName:".",slug:"/custom-scalars",permalink:"/docs/custom-scalars",draft:!1,editUrl:"https://github.com/typed-graphql-builder/documentation/tree/main/docs/docs/custom-scalars.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,title:"Custom scalars"},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/docs/query-syntax/variables"},next:{title:"Comparison with other clients",permalink:"/docs/comparison"}},s={},i=[{value:"Specifying types",id:"specifying-types",level:3},{value:"Specifying patterns",id:"specifying-patterns",level:3}],c={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Custom scalars are supported through the ",(0,n.kt)("inlineCode",{parentName:"p"},"--scalar")," CLI option."),(0,n.kt)("p",null,"The syntax is in the format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--scalar ScalarName=ScalarTypeSpec\n")),(0,n.kt)("h3",{id:"specifying-types"},"Specifying types"),(0,n.kt)("p",null,"A type specification can be a simple built in TypeScript type like ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),". For example, to map all scalars of type ",(0,n.kt)("inlineCode",{parentName:"p"},"jsonb")," to the ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")," type, you would use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--scalar jsonb=unknown\n")),(0,n.kt)("p",null,"The type can be imported from another file. The following example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--scalar MyScalar=./scalars#SomeType\n")),(0,n.kt)("p",null,"will add the following import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { SomeType as MyScalar } from "./scalars"\n')),(0,n.kt)("p",null,"and will ensure ",(0,n.kt)("inlineCode",{parentName:"p"},"MyScalar")," is used everywhere the scalar is used in types."),(0,n.kt)("h3",{id:"specifying-patterns"},"Specifying patterns"),(0,n.kt)("p",null,"Instead of specifying each scalar by name, you can also use a regular expression pattern, e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--scalar 'JSON.+=unknown`\n")),(0,n.kt)("p",null,"will map all scalars that start with ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON")," to the type ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"You can also use replacements for pattern capture groups found in ",(0,n.kt)("inlineCode",{parentName:"p"},"()")," the type. Assuming you have the scalars ",(0,n.kt)("inlineCode",{parentName:"p"},"JSONDocument")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"JSONParagraph"),", the following example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--scalar 'JSON(.+)=./json-scalars#JSON$1'\n")),(0,n.kt)("p",null,"will produce the imports"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { JSONDocument } from "./json-scalars"\nimport type { JSONParagraph } from "./json-scalars"\n')),(0,n.kt)("p",null,"The order of patterns is important. You can specify a catch-all pattern at the end:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--scalar '.+=unknown'\n")),(0,n.kt)("p",null,"Or you could specify some built-in scalars then map any remaining custom ones to a file. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--scalar uuid=string --scalar timestamp=string --scalar jsonb=unknown --scalar '(.+)=./scalars#$1'\n")),(0,n.kt)("p",null,"will map some standard Hasura scalars to sensible types, then map any other scalars to imports\nfrom ",(0,n.kt)("inlineCode",{parentName:"p"},"'./scalars'"),". If you have a scalar ",(0,n.kt)("inlineCode",{parentName:"p"},"MyScalar"),", the above will add the following import:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { MyScalar } from "./scalars"\n')),(0,n.kt)("p",null,"while at the same time, Hasura's ",(0,n.kt)("inlineCode",{parentName:"p"},"timestamp")," scalar will still map to a string."))}u.isMDXComponent=!0}}]);