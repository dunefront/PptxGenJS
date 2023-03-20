"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={id:"installation",title:"Installation"},i=void 0,s={unversionedId:"installation",id:"installation",title:"Installation",description:"Modern Applications",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/PptxGenJS/docs/installation",draft:!1,tags:[],version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1679284534,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Quick Start Guide",permalink:"/PptxGenJS/docs/quick-start"},next:{title:"Integration",permalink:"/PptxGenJS/docs/integration"}},p={},o=[{value:"Modern Applications",id:"modern-applications",level:2},{value:"Install with NPM",id:"install-with-npm",level:3},{value:"Install with Yarn",id:"install-with-yarn",level:3},{value:"Additional Builds",id:"additional-builds",level:3},{value:"Browser-Based Applications",id:"browser-based-applications",level:2},{value:"Using CDN",id:"using-cdn",level:3},{value:"Download",id:"download",level:3}],c={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"modern-applications"},"Modern Applications"),(0,a.kt)("h3",{id:"install-with-npm"},"Install with ",(0,a.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/pptxgenjs"},"NPM")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install pptxgenjs --save\n")),(0,a.kt)("h3",{id:"install-with-yarn"},"Install with Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add pptxgenjs\n")),(0,a.kt)("h3",{id:"additional-builds"},"Additional Builds"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CommonJS: ",(0,a.kt)("inlineCode",{parentName:"li"},"dist/pptxgen.cjs.js")),(0,a.kt)("li",{parentName:"ul"},"ES Module: ",(0,a.kt)("inlineCode",{parentName:"li"},"dist/pptxgen.es.js"))),(0,a.kt)("h2",{id:"browser-based-applications"},"Browser-Based Applications"),(0,a.kt)("h3",{id:"using-cdn"},"Using CDN"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/pptxgenjs"},"jsDelivr Home")),(0,a.kt)("p",null,"Bundle: Modern Browsers and IE11"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js"><\/script>\n')),(0,a.kt)("p",null,"Min files: Modern Browsers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/libs/jszip.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.min.js"><\/script>\n')),(0,a.kt)("h3",{id:"download"},"Download"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/releases/latest"},"GitHub Latest Release")),(0,a.kt)("p",null,"Bundle: Modern Browsers and IE11"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="PptxGenJS/dist/pptxgen.bundle.js"><\/script>\n')),(0,a.kt)("p",null,"Min files: Modern Browsers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="PptxGenJS/libs/jszip.min.js"><\/script>\n<script src="PptxGenJS/dist/pptxgen.min.js"><\/script>\n')))}d.isMDXComponent=!0}}]);