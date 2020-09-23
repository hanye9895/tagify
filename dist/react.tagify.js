/**
 * Tagify (v 3.18.6)- tags input component
 * By Yair Even-Or
 * Don't sell this code. (c)
 * https://github.com/yairEO/tagify
 */

!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.React.tagify=t()}(this,function(){"use strict";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,z=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n,r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var i;Object.prototype.hasOwnProperty.call(e,n)&&((i=o?Object.getOwnPropertyDescriptor(e,n):null)&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n])}r.default=e,t&&t.set(e,r);return r}(require("react")),G=require("react-dom/server"),t=require("prop-types"),H=(e=require("./tagify.min.js"))&&e.__esModule?e:{default:e};function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function L(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e){return e}function n(e){function t(e){K.current=e}var n=e.name,r=e.value,o=void 0===r?"":r,i=e.loading,u=void 0!==i&&i,a=e.onInput,c=void 0===a?Q:a,f=e.onAdd,l=void 0===f?Q:f,s=e.onRemove,d=void 0===s?Q:s,p=e.onEdit,y=void 0===p?Q:p,m=e.onInvalid,v=void 0===m?Q:m,g=e.onClick,b=void 0===g?Q:g,h=e.onKeydown,w=void 0===h?Q:h,O=e.onFocus,j=void 0===O?Q:O,S=e.onBlur,E=void 0===S?Q:S,M=e.onChange,A=void 0===M?Q:M,x=e.readOnly,I=e.readonly,R=e.children,T=e.settings,k=void 0===T?{}:T,C=e.InputMode,N=void 0===C?"input":C,P=e.autoFocus,_=e.className,F=e.whitelist,q=e.tagifyRef,D=e.placeholder,V=void 0===D?"":D,W=e.defaultValue,B=e.showDropdown,J=(0,z.useRef)(),K=(0,z.useRef)(),U=(0,z.useRef)(),$=(0,z.useMemo)(function(){return{ref:t,name:n,value:R||("string"==typeof o?o:JSON.stringify(o)),className:_,readOnly:I||x,onChange:A,autoFocus:P,placeholder:V,defaultValue:W}},[W,V,P,_,R,A,x,o,n]);return(0,z.useEffect)(function(){!function(e){if(e)for(var n in e){String(e[n]).includes(".createElement")&&function(){var t=e[n];e[n]=function(e){return(0,G.renderToStaticMarkup)(z.default.createElement(t,e))}}()}}(k.templates),"textarea"==N&&(k.mode="mix");var e=new H.default(K.current,k);return c&&e.on("input",c),l&&e.on("add",l),d&&e.on("remove",d),y&&e.on("edit",y),v&&e.on("invalid",v),w&&e.on("keydown",w),j&&e.on("focus",j),E&&e.on("blur",E),b&&e.on("click",b),q&&(q.current=e),U.current=e,function(){e.destroy()}},[]),(0,z.useEffect)(function(){J.current&&U.current.loadOriginalValues(o)},[o]),(0,z.useEffect)(function(){var e;J.current&&(e=U.current.settings.whitelist).splice.apply(e,[0,U.current.settings.whitelist.length].concat(L(F||[])))},[F]),(0,z.useEffect)(function(){J.current&&U.current.loading(u)},[u]),(0,z.useEffect)(function(){var e=U.current;J.current&&(B?(e.dropdown.show.call(e,B),e.toggleFocusClass(!0)):e.dropdown.hide.call(e))},[B]),(0,z.useEffect)(function(){J.current=!0},[]),z.default.createElement("div",{className:"tags-input"},z.default.createElement(N,$))}n.propTypes={name:t.string,value:(0,t.oneOfType)([t.string,t.array]),loading:t.bool,children:t.element,onChange:t.func,readOnly:t.bool,settings:t.object,InputMode:t.string,autoFocus:t.bool,className:t.string,tagifyRef:t.object,whitelist:t.array,placeholder:t.string,defaultValue:(0,t.oneOfType)([t.string,t.array]),showDropdown:(0,t.oneOfType)([t.string,t.bool])};var o=z.default.memo(n);return o.displayName="Tags",exports.default=o});