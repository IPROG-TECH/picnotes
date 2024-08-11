/*!
 * froala_editor v3.2.2 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(e){"use strict";(e=e&&e.hasOwnProperty("default")?e["default"]:e).PLUGINS.quote=function(e){function t(t){for(;t.parentNode&&t.parentNode!=e.el;)t=t.parentNode;return t}var o=e.$;return{apply:function(n){e.selection.save(),e.html.wrap(!0,!0,!0,!0),e.selection.restore(),"increase"==n?function(){var n,r=e.selection.blocks();for(n=0;n<r.length;n++)r[n]=t(r[n]);e.selection.save();var a=o(document.createElement("blockquote"));for(a.insertBefore(r[0]),n=0;n<r.length;n++)a.append(r[n]);e.html.unwrap(),e.selection.restore()}():"decrease"==n&&function(){var t,n=e.selection.blocks();for(t=0;t<n.length;t++)"BLOCKQUOTE"!=n[t].tagName&&(n[t]=o(n[t]).parentsUntil(e.$el,"BLOCKQUOTE").get(0));for(e.selection.save(),t=0;t<n.length;t++)n[t]&&o(n[t]).replaceWith(n[t].innerHTML);e.html.unwrap(),e.selection.restore()}()}}},e.RegisterShortcut(e.KEYCODE.SINGLE_QUOTE,"quote","increase","'"),e.RegisterShortcut(e.KEYCODE.SINGLE_QUOTE,"quote","decrease","'",!0),e.RegisterCommand("quote",{title:"Quote",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t={increase:"Increase",decrease:"Decrease"};for(var o in t)if(t.hasOwnProperty(o)){var n=this.shortcuts.get("quote.".concat(o));e+='<li role="presentation"><a class="fr-command fr-active '.concat(o,'" tabIndex="-1" role="option" data-cmd="quote" data-param1="').concat(o,'" title="').concat(t[o],'">').concat(this.language.translate(t[o])).concat(n?'<span class="fr-shortcut">'.concat(n,"</span>"):"","</a></li>")}return e+"</ul>"},callback:function(e,t){this.quote.apply(t)},plugin:"quote"}),e.DefineIcon("quote",{NAME:"quote-left",SVG_KEY:"blockquote"})});