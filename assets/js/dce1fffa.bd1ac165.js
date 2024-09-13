"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"Fields and field helpers"},o=void 0,i={unversionedId:"query-syntax/fields",id:"query-syntax/fields",title:"Fields and field helpers",description:"The standard syntax to select fields is to add them to the returned list result.",source:"@site/docs/query-syntax/fields.md",sourceDirName:"query-syntax",slug:"/query-syntax/fields",permalink:"/docs/query-syntax/fields",draft:!1,editUrl:"https://github.com/typed-graphql-builder/documentation/tree/main/docs/docs/query-syntax/fields.md",tags:[],version:"current",frontMatter:{title:"Fields and field helpers"},sidebar:"tutorialSidebar",previous:{title:"Aliases",permalink:"/docs/query-syntax/aliases"},next:{title:"Interfaces",permalink:"/docs/query-syntax/interfaces"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The standard syntax to select fields is to add them to the returned list result."),(0,a.kt)("p",null,"This page also lists additional field helpers below"),(0,a.kt)("h1",{id:"all"},(0,a.kt)("inlineCode",{parentName:"h1"},"all")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"all")," helper is a function that lets you select all fields for a given output"),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { all } from './generated-api'\n\nlet compareCountriesQuery = query(q => [\n  q.country({ code: $(\"code1\") }, all)\n])\n")),(0,a.kt)("p",null,"This will select all country fields."),(0,a.kt)("p",null,"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"all")," will not call any methods that require arguments. However, you can combine it\nwith additional selectors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { all } from \'./generated-api\'\n\nlet compareCountriesQuery = query(q => [\n  q.country({ code: $("code1") }, q => [\n    q.additionalMethod({param: "value"}, res => [res.content]),\n    ...all(q)\n  ])\n])\n')))}u.isMDXComponent=!0}}]);