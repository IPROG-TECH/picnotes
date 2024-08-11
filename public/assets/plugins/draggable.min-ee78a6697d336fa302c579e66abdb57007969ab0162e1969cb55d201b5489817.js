/*!
 * froala_editor v3.2.2 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e["default"]:e,Object.assign(e.DEFAULTS,{dragInline:!0}),e.PLUGINS.draggable=function(t){function r(e){return!(!e.originalEvent||!e.originalEvent.target||e.originalEvent.target.nodeType!==Node.TEXT_NODE)||(e.target&&"A"===e.target.tagName&&1===e.target.childNodes.length&&"IMG"===e.target.childNodes[0].tagName&&(e.target=e.target.childNodes[0]),g(e.target).hasClass("fr-draggable")?(t.undo.canDo()||t.undo.saveStep(),t.opts.dragInline?t.$el.attr("contenteditable",!0):t.$el.attr("contenteditable",!1),t.opts.toolbarInline&&t.toolbar.hide(),g(e.target).addClass("fr-dragging"),t.browser.msie||t.browser.edge||t.selection.clear(),void e.originalEvent.dataTransfer.setData("text","Froala")):(e.preventDefault(),!1))}function n(e,r,n){if(t.opts.iframe){var a=t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-top")),o=t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-left"));e+=t.$iframe.offset().top+a,r+=t.$iframe.offset().left+o}f.offset().top!==e&&f.css("top",e),f.offset().left!==r&&f.css("left",r),f.width()!==n&&f.css("width",n)}function a(r){r.originalEvent.dataTransfer.dropEffect="move",t.opts.dragInline?(!function(){for(var t=null,r=0;r<e.INSTANCES.length;r++)if((t=e.INSTANCES[r].$el.find(".fr-dragging")).length)return t.get(0)}()||t.browser.msie||t.browser.edge)&&r.preventDefault():(r.preventDefault(),function(r){var a=t.doc.elementFromPoint(r.originalEvent.pageX-t.win.pageXOffset,r.originalEvent.pageY-t.win.pageYOffset);if(!d(a)){for(var o=0,i=a;!d(i)&&i===a&&0<r.originalEvent.pageY-t.win.pageYOffset-o;)o++,i=t.doc.elementFromPoint(r.originalEvent.pageX-t.win.pageXOffset,r.originalEvent.pageY-t.win.pageYOffset-o);(!d(i)||f&&0===t.$el.find(i).length&&i!==f.get(0))&&(i=null);for(var l=0,s=a;!d(s)&&s===a&&r.originalEvent.pageY-t.win.pageYOffset+l<g(t.doc).height();)l++,s=t.doc.elementFromPoint(r.originalEvent.pageX-t.win.pageXOffset,r.originalEvent.pageY-t.win.pageYOffset+l);(!d(s)||f&&0===t.$el.find(s).length&&s!==f.get(0))&&(s=null),a=null===s&&i?i:s&&null===i?s:s&&i?o<l?i:s:null}if(g(a).hasClass("fr-drag-helper"))return!1;if(a&&!t.node.isBlock(a)&&(a=t.node.blockParent(a)),a&&0<=["TD","TH","TR","THEAD","TBODY"].indexOf(a.tagName)&&(a=g(a).parents("table").get(0)),a&&0<=["LI"].indexOf(a.tagName)&&(a=g(a).parents("UL, OL").get(0)),a&&!g(a).hasClass("fr-drag-helper")){var p;f||(e.$draggable_helper||(e.$draggable_helper=g(document.createElement("div")).attr("class","fr-drag-helper")),f=e.$draggable_helper,t.events.on("shared.destroy",function(){f.html("").removeData().remove(),f=null},!0)),p=r.originalEvent.pageY<g(a).offset().top+g(a).outerHeight()/2;var v=g(a),m=0;p||0!==v.next().length?(p||(v=v.next()),"before"===f.data("fr-position")&&v.is(f.data("fr-tag"))||(0<v.prev().length&&(m=parseFloat(v.prev().css("margin-bottom"))||0),m=Math.max(m,parseFloat(v.css("margin-top"))||0),n(v.offset().top-m/2-t.$box.offset().top,v.offset().left-t.win.pageXOffset-t.$box.offset().left,v.width()),f.data("fr-position","before"))):"after"===f.data("fr-position")&&v.is(f.data("fr-tag"))||(m=parseFloat(v.css("margin-bottom"))||0,n(v.offset().top+g(a).height()+m/2-t.$box.offset().top,v.offset().left-t.win.pageXOffset-t.$box.offset().left,v.width()),f.data("fr-position","after")),f.data("fr-tag",v),f.addClass("fr-visible"),t.$box.append(f)}else f&&0<t.$box.find(f).length&&f.removeClass("fr-visible")}(r))}function o(e){e.originalEvent.dataTransfer.dropEffect="move",t.opts.dragInline||e.preventDefault()}function i(e){t.$el.attr("contenteditable",!0);var r=t.$el.find(".fr-dragging");f&&f.hasClass("fr-visible")&&t.$box.find(f).length?l(e):r.length&&(e.preventDefault(),e.stopPropagation()),f&&t.$box.find(f).length&&f.removeClass("fr-visible"),r.removeClass("fr-dragging")}function l(r){var n,a;t.$el.attr("contenteditable",!0);for(var o=0;o<e.INSTANCES.length;o++)if((n=e.INSTANCES[o].$el.find(".fr-dragging")).length){a=e.INSTANCES[o];break}if(n.length){if(r.preventDefault(),r.stopPropagation(),f&&f.hasClass("fr-visible")&&t.$box.find(f).length)f.data("fr-tag")[f.data("fr-position")]('<span class="fr-marker"></span>'),f.removeClass("fr-visible");else if(!1===t.markers.insertAtPoint(r.originalEvent))return!1;if(n.removeClass("fr-dragging"),!1===(n=t.events.chainTrigger("element.beforeDrop",n)))return!1;var i=n;if(n.parent().is("A")&&1===n.parent().get(0).childNodes.length&&(i=n.parent()),t.core.isEmpty()?t.events.focus():(t.$el.find(".fr-marker").replaceWith(e.MARKERS),t.selection.restore()),a===t||t.undo.canDo()||t.undo.saveStep(),t.core.isEmpty())t.$el.html(i);else{var l=t.markers.insert();0===i.find(l).length?g(l).replaceWith(i):0===n.find(l).length&&g(l).replaceWith(n),n.after(e.MARKERS),t.selection.restore()}return t.popups.hideAll(),t.selection.save(),t.$el.find(t.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").not(t.opts.htmlAllowedEmptyTags.join(",")).remove(),t.html.wrap(),t.html.fillEmptyBlocks(),t.selection.restore(),t.undo.saveStep(),t.opts.iframe&&t.size.syncIframe(),a!==t&&(a.popups.hideAll(),a.$el.find(a.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").remove(),a.html.wrap(),a.html.fillEmptyBlocks(),a.undo.saveStep(),a.events.trigger("element.dropped"),a.opts.iframe&&a.size.syncIframe()),t.events.trigger("element.dropped",[i]),!1}f&&f.removeClass("fr-visible"),t.undo.canDo()||t.undo.saveStep(),setTimeout(function(){t.undo.saveStep()},0)}function s(e){if(e&&"DIV"===e.tagName&&t.node.hasClass(e,"fr-drag-helper"))e.parentNode.removeChild(e);else if(e&&e.nodeType===Node.ELEMENT_NODE)for(var r=e.querySelectorAll("div.fr-drag-helper"),n=0;n<r.length;n++)r[n].parentNode.removeChild(r[n])}var f,g=t.$,d=function(e){return!(e&&("HTML"===e.tagName||"BODY"===e.tagName||t.node.isElement(e)))};return{_init:function(){t.opts.enter===e.ENTER_BR&&(t.opts.dragInline=!0),t.events.on("dragstart",r,!0),t.events.on("dragover",a,!0),t.events.on("dragenter",o,!0),t.events.on("document.dragend",i,!0),t.events.on("document.drop",i,!0),t.events.on("drop",l,!0),t.events.on("html.processGet",s)}}}});