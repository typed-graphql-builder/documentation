"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=l(r),d=a,m=y["".concat(i,".").concat(d)]||y[d]||p[d]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Named query"},u=void 0,c={unversionedId:"query-syntax/named-query",id:"query-syntax/named-query",title:"Named query",description:"For debugging and metric purposes, its useful to be able to give your query a name.",source:"@site/docs/query-syntax/named-query.md",sourceDirName:"query-syntax",slug:"/query-syntax/named-query",permalink:"/docs/query-syntax/named-query",draft:!1,editUrl:"https://github.com/typed-graphql-builder/documentation/tree/main/docs/docs/query-syntax/named-query.md",tags:[],version:"current",frontMatter:{title:"Named query"},sidebar:"tutorialSidebar",previous:{title:"Interfaces",permalink:"/docs/query-syntax/interfaces"},next:{title:"Schema roots",permalink:"/docs/query-syntax/schema-root"}},i={},l=[],s={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For debugging and metric purposes, its useful to be able to give your query a name."),(0,a.kt)("p",null,"typed-graphql-builder offers simple and familiar syntax to do this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { $, query } from "./generated-api"\n\nconst countryQuery = query(\'CountryQuery\', q => [\n  q.countries({ filter: { continent: { eq: $("continentCode") } } }, c => [\n    c.code,\n    c.capital,\n    c.name,\n    c.languages(l => [l.name]),\n  ]),\n')),(0,a.kt)("p",null,"This will generate a named query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query CountryQuery($continentCode: String) {\n  countries(filter: { continent: { eq: $continentCode } }) {\n    code\n    capital\n    name\n    languages {\n      name\n    }\n  }\n}\n")))}p.isMDXComponent=!0}}]);