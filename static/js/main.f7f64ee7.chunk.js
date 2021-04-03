(this["webpackJsonpgoit-react-hw-09-image-finder"]=this["webpackJsonpgoit-react-hw-09-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2UBti",SpinnerCentered:"ImageGallery_SpinnerCentered__oCgY0"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2TgCM",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3y0Tj"}},13:function(e,t,a){e.exports={Button:"Button_Button__2-CRG",ButtonSection:"Button_ButtonSection__zXSEM"}},15:function(e,t,a){e.exports={layout:"Layout_layout__WQ909"}},17:function(e,t,a){e.exports={Loader:"Spinner_Loader__OwgWw"}},23:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a(4),o=a.n(r),i=(a(23),a(5)),s=(a(24),a(15)),u=a.n(s),l=function(e){var t=e.children;return Object(n.jsx)("div",{className:u.a.layout,children:t})},m=a(14),b=a(3),j=a(11),d=a.n(j),h=a(6),O=a.n(h);function f(e){var t=e.onSubmit,a=Object(c.useState)(""),r=Object(b.a)(a,2),o=r[0],s=r[1];return Object(n.jsx)("header",{className:O.a.Searchbar,children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):i.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e.")},className:O.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",className:O.a.SearchFormButton,children:Object(n.jsx)("span",{className:O.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:O.a.SearchFormInput,type:"text",name:"query",value:o,onChange:function(e){return s(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search pictures from Pixabay..."})]})})}var _=a(12),g=a.n(_),p=a.p+"static/media/No_Image-512.6bca87e4.webp",S=function(e){var t=e.webformatURL,a=e.tags,c=e.clickOnItem;return Object(n.jsx)("div",{className:g.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:t||p,alt:a,onClick:c,className:g.a.ImageGalleryItemImage})})};S.defaultProps={webformatURL:p};var x=S,y=a(13),I=a.n(y),v=function(e){var t=e.onIncrement;return Object(n.jsx)("div",{className:I.a.ButtonSection,children:Object(n.jsx)("button",{type:"button",onClick:t,className:I.a.Button,children:"Load more"})})},w=a(16),C=a.n(w),L=(a(46),a(17)),N=a.n(L),F=function(){return Object(n.jsx)("div",{className:N.a.Loader,children:Object(n.jsx)(C.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80,timeout:3e3})})};var B={fetchImg:function(e,t,a){return fetch("".concat("https://pixabay.com/api","/?q=").concat(e,"&page=").concat(t,"&key=").concat("19207978-b8cc5d5178f1c84e5ac39b1c7","&image_type=photo&orientation=horizontal&per_page=").concat(a)).then((function(e){return e.json()}))}},G=a(9),k=a.n(G),M=document.querySelector("#modal-root");function E(e){var t=e.onClose,a=e.image,o=a.src,i=a.alt,s=Object(c.useState)(!0),u=Object(b.a)(s,2),l=u[0],m=u[1];Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(r.createPortal)(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:k.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(n.jsxs)("div",{className:k.a.Modal,children:[l&&Object(n.jsx)("div",{className:k.a.SpinnerCentered,children:Object(n.jsx)(F,{})}),Object(n.jsx)("img",{onLoad:function(){m(!1)},src:o||p,alt:i})]})})}),M)}function R(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)([]),s=Object(b.a)(o,2),u=s[0],l=s[1],j=Object(c.useState)(null),h=Object(b.a)(j,2),O=h[0],_=h[1],g=Object(c.useState)(null),p=Object(b.a)(g,2),S=(p[0],p[1]),y=Object(c.useState)(!1),I=Object(b.a)(y,2),w=I[0],C=I[1],L=Object(c.useState)(1),N=Object(b.a)(L,2),G=N[0],k=N[1],M=Object(c.useState)(!1),R=Object(b.a)(M,2),T=R[0],U=R[1],q=Object(c.useState)({src:"",alt:""}),D=Object(b.a)(q,2),P=D[0],W=D[1];Object(c.useEffect)((function(){if(a){!function(e){C(!0),B.fetchImg(e,G,12).then((function(t){0===t.total?i.b.error("".concat(e," is not found. Try another one!")):1===G&&i.b.error("".concat(t.total," pictures is found.")),l((function(e){return[].concat(Object(m.a)(e),Object(m.a)(t.hits))})),_(t.total)})).catch((function(e){i.b.error(e.message),S(e.message)})).finally((function(){C(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}(a)}}),[G,a]);var z=O/12,J=Object(c.useCallback)((function(){U((function(e){return!e}))}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{onSubmit:function(e){r(e),k(1),l([]),S(null)}}),u.length>0&&Object(n.jsx)("ul",{className:d.a.ImageGallery,children:u.map((function(e,t){var a=e.webformatURL,c=e.largeImageURL,r=e.tags;return Object(n.jsx)("li",{children:Object(n.jsx)(x,{webformatURL:a,largeImageURL:c,tags:r,clickOnItem:function(){return W({src:c,alt:r}),void J()}})},t)}))}),w&&1===G&&Object(n.jsx)("div",{className:d.a.SpinnerCentered,children:Object(n.jsx)(F,{})}),w&&1!==G&&Object(n.jsx)(F,{}),T&&Object(n.jsx)(E,{image:P,onClose:J}),G<z&&!w&&Object(n.jsx)(v,{onIncrement:function(){k((function(e){return e+1}))}})]})}function T(){return Object(n.jsxs)(l,{children:[Object(n.jsx)(R,{}),Object(n.jsx)(i.a,{})]})}o.a.render(Object(n.jsx)(T,{}),document.querySelector("#root"))},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2AXBZ",SearchForm:"Searchbar_SearchForm__DcCqc",SearchFormButton:"Searchbar_SearchFormButton__3K_G9",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1i8NF",SearchFormInput:"Searchbar_SearchFormInput__ptrCo"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__eNFuD",Modal:"Modal_Modal__jLnWe",SpinnerCentered:"Modal_SpinnerCentered__3OQLK"}}},[[47,1,2]]]);
//# sourceMappingURL=main.f7f64ee7.chunk.js.map