/*!
 * froala_editor v3.2.2 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(e.FroalaEditor)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e["default"]:e,Object.assign(e.DEFAULTS,{saveInterval:1e4,saveURL:null,saveParams:{},saveParam:"body",saveMethod:"POST"}),e.PLUGINS.save=function(e){function t(t,s){e.events.trigger("save.error",[{code:t,message:v[t]},s])}function s(s){void 0===s&&(s=e.html.get());var n=s,o=e.events.trigger("save.before",[s]);if(!1===o)return!1;if("string"==typeof o&&(s=o),e.opts.saveURL){var i={};for(var v in e.opts.saveParams)if(e.opts.saveParams.hasOwnProperty(v)){var c=e.opts.saveParams[v];i[v]="function"==typeof c?c.call(this):c}var u={};u[e.opts.saveParam]=s,a(this).ajax({method:e.opts.saveMethod,url:e.opts.saveURL,data:Object.assign(u,i),crossDomain:e.opts.requestWithCORS,withCredentials:e.opts.requestWithCredentials,headers:e.opts.requestHeaders,done:function(t){r=n,e.events.trigger("save.after",[t])},fail:function(e){t(l,e.response||e.responseText)}})}else t(f)}function n(){clearTimeout(o),o=setTimeout(function(){var t=e.html.get();(r!=t||i)&&(i=!1,s(r=t))},0)}var a=e.$,o=null,r=null,i=!1,f=1,l=2,v={};return v[f]="Missing saveURL option.",v[l]="Something went wrong during save.",{_init:function(){if(e.opts.letteringClass)for(var t=e.opts.letteringClass,s=e.$el.find(".".concat(t)).length,a=0;a<s;a++)e.$el.find(".".concat(t))[a].innerHTML=e.$el.find(".".concat(t))[a].innerText.replace(/([\w'-]+|[?.",])/g,"<span class = 'fr-word-select'>$1</span>");e.opts.saveInterval&&(r=e.html.get(),e.events.on("contentChanged",function(){setTimeout(n,e.opts.saveInterval)}),e.events.on("keydown destroy",function(){clearTimeout(o)}))},save:s,reset:function(){n(),i=!1},force:function(){i=!0}}},e.DefineIcon("save",{NAME:"floppy-o",FA5NAME:"save"}),e.RegisterCommand("save",{title:"Save",undo:!1,focus:!1,refreshAfterCallback:!1,callback:function(){this.save.save()},plugin:"save"})});