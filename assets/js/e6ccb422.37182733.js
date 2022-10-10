"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Comparison with other clients",sidebar_position:40},o=void 0,l={unversionedId:"comparison",id:"comparison",title:"Comparison with other clients",description:"This page compares typed-graphql-builder with [Zeus] and [tql], as those were the two libraries that served as the primary inspiration.",source:"@site/docs/comparison.md",sourceDirName:".",slug:"/comparison",permalink:"/docs/comparison",draft:!1,editUrl:"https://github.com/typed-graphql-builder/documentation/tree/main/docs/docs/comparison.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Comparison with other clients",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Custom scalars",permalink:"/docs/custom-scalars"},next:{title:"Tips",permalink:"/docs/tips"}},p={},s=[],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page compares ",(0,a.kt)("inlineCode",{parentName:"p"},"typed-graphql-builder")," with ",(0,a.kt)("a",{parentName:"p",href:"https://zeus.graphqleditor.com/"},"Zeus")," and ",(0,a.kt)("a",{parentName:"p",href:"https://tql.dev"},"tql"),", as those were the two libraries that served as the primary inspiration."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"typed-grapql-builder")," owes much of its API design to ",(0,a.kt)("a",{parentName:"p",href:"https://tql.dev"},"tql"),". Although our\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hfour/gql-builder/blob/22a077aea0db71962ffcc2266e131fe159e14e57/src/builder-3.ts"},"initial design sketches")," predate it, ",(0,a.kt)("inlineCode",{parentName:"p"},"tql")," is still the principal inspiration for\n",(0,a.kt)("inlineCode",{parentName:"p"},"typed-graphql-builder"),"'s API, especially variables, aliases and selections, with only a few\ndifferences:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"scalar fields can be selected without method calls i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"[t.id, t.name]")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"[t.id(), t.name()]")),(0,a.kt)("li",{parentName:"ol"},"the union selection method is called ",(0,a.kt)("inlineCode",{parentName:"li"},"$on")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"on")," to more easily avoid conflict with\nexisting field names"),(0,a.kt)("li",{parentName:"ol"},"fragments are supported via the ",(0,a.kt)("inlineCode",{parentName:"li"},"fragment")," function")),(0,a.kt)("p",null,"In terms of capabilities, there is one notable difference"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"typed-graphql-builer")," can infer a variable placed anywhere in an input type.")),(0,a.kt)("p",null,"The generated code is where most of the differences come from. Here, we took inspiration from the\nway ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-zeus")," provides a compact map of all input types. In this way, we reduce the generated\ncode size to ~ 25% of what ",(0,a.kt)("inlineCode",{parentName:"p"},"tql")," generates."),(0,a.kt)("p",null,"The estimate is based on the Hasura generated schema of a large database included in the examples\n(",(0,a.kt)("inlineCode",{parentName:"p"},"x.graphql"),")"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"schema"),(0,a.kt)("th",{parentName:"tr",align:null},"tql"),(0,a.kt)("th",{parentName:"tr",align:null},"typed-graphql-builder"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x.graphql"),(0,a.kt)("td",{parentName:"tr",align:null},"3.43 MB"),(0,a.kt)("td",{parentName:"tr",align:null},"0.71 MB")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"note: generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"tql")," v1.0.0-rc.10 and ",(0,a.kt)("inlineCode",{parentName:"p"},"typed-graphql-builder")," v1.3.1")))}d.isMDXComponent=!0}}]);