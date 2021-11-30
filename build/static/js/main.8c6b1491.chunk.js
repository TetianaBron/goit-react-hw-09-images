(this["webpackJsonpgoit-react-hw-09-image-finder"]=this["webpackJsonpgoit-react-hw-09-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2UBti",SpinnerCentered:"ImageGallery_SpinnerCentered__oCgY0"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2TgCM",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3y0Tj"}},13:function(e,t,a){e.exports={Button:"Button_Button__2-CRG",ButtonSection:"Button_ButtonSection__zXSEM"}},15:function(e,t,a){e.exports={layout:"Layout_layout__WQ909"}},17:function(e,t,a){e.exports={Loader:"Spinner_Loader__OwgWw"}},23:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a(4),o=a.n(r),s=(a(23),a(5)),i=(a(24),a(15)),l=a.n(i),u=function(e){var t=e.children;return Object(n.jsx)("div",{className:l.a.layout,children:t})},m=a(14),b=a(3),j=a(11),d=a.n(j),h=a(6),f=a.n(h);function O(e){var t=e.onSubmit,a=Object(c.useState)(""),r=Object(b.a)(a,2),o=r[0],i=r[1];return Object(n.jsx)("header",{className:f.a.Searchbar,children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),i("")):s.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e.")},className:f.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(n.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:f.a.SearchFormInput,type:"text",name:"query",value:o,onChange:function(e){return i(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search pictures from Pixabay..."})]})})}var _=a(12),g=a.n(_),S=a.p+"static/media/No_Image-512.6bca87e4.webp",p=function(e){var t=e.webformatURL,a=e.tags,c=e.clickOnItem;return Object(n.jsx)("div",{className:g.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:t||S,alt:a,onClick:c,className:g.a.ImageGalleryItemImage})})};p.defaultProps={webformatURL:S};var x=p,I=a(13),y=a.n(I),v=function(e){var t=e.onIncrement;return Object(n.jsx)("div",{className:y.a.ButtonSection,children:Object(n.jsx)("button",{type:"button",onClick:t,className:y.a.Button,children:"Load more"})})},w=a(16),N=a.n(w),C=(a(46),a(17)),L=a.n(C),G=function(){return Object(n.jsx)("div",{className:L.a.Loader,children:Object(n.jsx)(N.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80,timeout:3e3})})};var F={fetchImg:function(e,t){return fetch("".concat("https://pixabay.com/api","/?q=").concat(e,"&page=").concat(t,"&key=").concat("19207978-b8cc5d5178f1c84e5ac39b1c7","&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(e){return e.json()}))},INAGES_PER_PAGE:12},B=a(9),E=a.n(B),k=document.querySelector("#modal-root");function R(e){var t=e.onClose,a=e.image,o=a.src,s=a.alt,i=Object(c.useState)(!0),l=Object(b.a)(i,2),u=l[0],m=l[1];Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(r.createPortal)(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:E.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(n.jsxs)("div",{className:E.a.Modal,children:[u&&Object(n.jsx)("div",{className:E.a.SpinnerCentered,children:Object(n.jsx)(G,{})}),Object(n.jsx)("img",{onLoad:function(){m(!1)},src:o||S,alt:s})]})})}),k)}function M(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)([]),i=Object(b.a)(o,2),l=i[0],u=i[1],j=Object(c.useState)(null),h=Object(b.a)(j,2),f=h[0],_=h[1],g=Object(c.useState)(null),S=Object(b.a)(g,2),p=(S[0],S[1]),I=Object(c.useState)(!1),y=Object(b.a)(I,2),w=y[0],N=y[1],C=Object(c.useState)(1),L=Object(b.a)(C,2),B=L[0],E=L[1],k=Object(c.useState)(null),M=Object(b.a)(k,2),P=M[0],T=M[1];Object(c.useEffect)((function(){if(a){!function(e){N(!0),F.fetchImg(e,B).then((function(t){0===t.total?s.b.error("".concat(e," is not found. Try another one!")):1===B&&s.b.success("".concat(t.total," pictures is found.")),u((function(e){return[].concat(Object(m.a)(e),Object(m.a)(t.hits))})),_(t.total)})).catch((function(e){s.b.error(e.message),p(e.message)})).finally((function(){N(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}(a)}}),[B,a]);var U=f/F.INAGES_PER_PAGE,q=Object(c.useCallback)((function(){T(null)}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{onSubmit:function(e){r(e),E(1),u([]),p(null)}}),l.length>0&&Object(n.jsx)("ul",{className:d.a.ImageGallery,children:l.map((function(e,t){var a=e.webformatURL,c=e.largeImageURL,r=e.tags;return Object(n.jsx)("li",{children:Object(n.jsx)(x,{webformatURL:a,largeImageURL:c,tags:r,clickOnItem:function(){T({src:c,alt:r})}})},t)}))}),w&&1===B&&Object(n.jsx)("div",{className:d.a.SpinnerCentered,children:Object(n.jsx)(G,{})}),w&&1!==B&&Object(n.jsx)(G,{}),P&&Object(n.jsx)(R,{image:P,onClose:q}),B<U&&!w&&Object(n.jsx)(v,{onIncrement:function(){E((function(e){return e+1}))}})]})}function P(){return Object(n.jsxs)(u,{children:[Object(n.jsx)(M,{}),Object(n.jsx)(s.a,{})]})}o.a.render(Object(n.jsx)(P,{}),document.querySelector("#root"))},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2AXBZ",SearchForm:"Searchbar_SearchForm__DcCqc",SearchFormButton:"Searchbar_SearchFormButton__3K_G9",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1i8NF",SearchFormInput:"Searchbar_SearchFormInput__ptrCo"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__eNFuD",Modal:"Modal_Modal__jLnWe",SpinnerCentered:"Modal_SpinnerCentered__3OQLK"}}},[[47,1,2]]]);
//# sourceMappingURL=main.8c6b1491.chunk.js.map