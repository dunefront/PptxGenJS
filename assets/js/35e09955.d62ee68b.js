"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[3088],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=o(a),N=r,f=k["".concat(d,".").concat(N)]||k[N]||m[N]||p;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<p;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const p={id:"api-shapes",title:"Shapes"},l=void 0,i={unversionedId:"api-shapes",id:"api-shapes",title:"Shapes",description:"Almost 200 shape types can be added to Slides (see ShapeType enum).",source:"@site/docs/api-shapes.md",sourceDirName:".",slug:"/api-shapes",permalink:"/PptxGenJS/docs/api-shapes",draft:!1,tags:[],version:"current",frontMatter:{id:"api-shapes",title:"Shapes"},sidebar:"docs",previous:{title:"Media",permalink:"/PptxGenJS/docs/api-media"},next:{title:"Tables",permalink:"/PptxGenJS/docs/api-tables"}},d={},o=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Position/Size Props (PositionProps)",id:"positionsize-props-positionprops",level:3},{value:"Shape Props (ShapeProps)",id:"shape-props-shapeprops",level:3},{value:"Examples",id:"examples",level:2},{value:"Samples",id:"samples",level:2}],s={toc:o};function m(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Almost 200 shape types can be added to Slides (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/blob/master/types/index.d.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"ShapeType"))," enum)."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Shapes without text\nslide.addShape(pres.ShapeType.rect, { fill: { color: "FF0000" } });\nslide.addShape(pres.ShapeType.ellipse, {\n  fill: { type: "solid", color: "0088CC" },\n});\nslide.addShape(pres.ShapeType.line, { line: { color: "FF0000", width: 1 } });\n\n// Shapes with text\nslide.addText("ShapeType.rect", {\n  shape: pres.ShapeType.rect,\n  fill: { color: "FF0000" },\n});\nslide.addText("ShapeType.ellipse", {\n  shape: pres.ShapeType.ellipse,\n  fill: { color: "FF0000" },\n});\nslide.addText("ShapeType.line", {\n  shape: pres.ShapeType.line,\n  line: { color: "FF0000", width: 1, dashType: "lgDash" },\n});\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"positionsize-props-positionprops"},"Position/Size Props (",(0,r.kt)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#position-props"},"PositionProps"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"hor location (inches)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"hor location (percent)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"{x:'50%'}")," middle of the Slide)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ver location (inches)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"ver location (percent)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"{y:'50%'}")," middle of the Slide)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"w")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"width (inches)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"w")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"width (percent)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"{w:'50%'}")," 50% the Slide width)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"h")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"height (inches)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"h")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"height (percent)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"{h:'50%'}")," 50% the Slide height)")))),(0,r.kt)("h3",{id:"shape-props-shapeprops"},"Shape Props (",(0,r.kt)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#shape-props-shapeprops"},"ShapeProps"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"align")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alignment"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"left")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"center")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"right"),". Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"left"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fill")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/PptxGenJS/docs/types#fill-props-shapefillprops"},"ShapeFillProps")),(0,r.kt)("td",{parentName:"tr",align:"left"},"fill props"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fill color/transparency props")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flipH")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"flip Horizontal"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flipV")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"flip Vertical"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hyperlink")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/PptxGenJS/docs/types#hyperlink-props-hyperlinkprops"},"HyperlinkProps")),(0,r.kt)("td",{parentName:"tr",align:"left"},"hyperlink props"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(see type link)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"line")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/PptxGenJS/docs/types#shape-line-props-shapelineprops"},"ShapeLineProps")),(0,r.kt)("td",{parentName:"tr",align:"left"},"border line props"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(see type link)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rectRadius")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"rounding radius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0 to 1. (Ex: 0.5. Only for ",(0,r.kt)("inlineCode",{parentName:"td"},"pptx.shapes.ROUNDED_RECTANGLE"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rotate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"rotation (degrees)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-360 to 360. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shadow")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/PptxGenJS/docs/types#shadow-props-shadowprops"},"ShadowProps")),(0,r.kt)("td",{parentName:"tr",align:"left"},"shadow props"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(see type link)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shapeName")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional shape name"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Ex: "Customer Network Diagram 99"')))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shapes with Text Demo",src:a(6999).Z,width:"981",height:"561"})),(0,r.kt)("h2",{id:"samples"},"Samples"),(0,r.kt)("p",null,"Sample code all available types: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/blob/master/demos/modules/demo_shape.mjs"},"demos/modules/demo_shape.mjs")))}m.isMDXComponent=!0},6999:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ex-shape-slide-da6d30f411b3140efc58bef6b275c2b5.png"}}]);