/*!
 * froala_editor v3.2.2 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],e):e(t.FroalaEditor)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t["default"]:t,Object.assign(t.DEFAULTS,{charCounterMax:-1,charCounterCount:!0}),t.PLUGINS.charCounter=function(e){function n(n){if(e.opts.charCounterMax<0)return!0;if(u()<e.opts.charCounterMax)return!0;var r=n.which;return!(!e.keys.ctrlKey(n)&&e.keys.isCharacter(r)||r===t.KEYCODE.IME)||(n.preventDefault(),n.stopPropagation(),e.events.trigger("charCounter.exceeded"),!1)}function r(t){return e.opts.charCounterMax<0?t:c("<div>").html(t).text().length+u()<=e.opts.charCounterMax?t:(e.events.trigger("charCounter.exceeded"),"")}function o(){if(e.opts.charCounterCount){var t=u()+(0<e.opts.charCounterMax?"/"+e.opts.charCounterMax:"");a.text("".concat(e.language.translate("Characters")," : ").concat(t)),e.opts.toolbarBottom&&a.css("margin-bottom",e.$tb.outerHeight(!0));var n=e.$wp.get(0).offsetWidth-e.$wp.get(0).clientWidth;0<=n&&("rtl"==e.opts.direction?a.css("margin-left",n):a.css("margin-right",n))}}var a,c=e.$,u=function(){return(e.el.textContent||"").replace(/\u200B/g,"").length};return{_init:function(){return!!e.$wp&&!!e.opts.charCounterCount&&((a=c(document.createElement("span")).attr("class","fr-counter")).css("bottom",e.$wp.css("border-bottom-width")),e.$second_tb&&e.$second_tb.append(a),e.events.on("keydown",n,!0),e.events.on("paste.afterCleanup",r),e.events.on("keyup contentChanged input",function(){e.events.trigger("charCounter.update")}),e.events.on("charCounter.update",o),e.events.trigger("charCounter.update"),void e.events.on("destroy",function(){c(e.o_win).off("resize.char".concat(e.id)),a.removeData().remove(),a=null}))},count:u}}});