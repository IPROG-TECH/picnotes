/*!
 * froala_editor v3.2.2 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */


!function(n,a){"object"==typeof exports&&"undefined"!=typeof module?a(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],a):a(n.FroalaEditor)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n["default"]:n,Object.assign(n.DEFAULTS,{inlineClasses:{"fr-class-code":"Code","fr-class-highlighted":"Highlighted","fr-class-transparency":"Transparent"}}),n.PLUGINS.inlineClass=function(e){var i=e.$;return{apply:function a(n){e.format.toggle("span",{"class":n})},refreshOnShow:function s(n,a){a.find(".fr-command").each(function(){var n=i(this).data("param1"),a=e.format.is("span",{"class":n});i(this).toggleClass("fr-active",a).attr("aria-selected",a)})}}},n.RegisterCommand("inlineClass",{type:"dropdown",title:"Inline Class",html:function(){var n='<ul class="fr-dropdown-list" role="presentation">',a=this.opts.inlineClasses;for(var e in a)a.hasOwnProperty(e)&&(n+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineClass" data-param1="'.concat(e,'" title="').concat(a[e],'">').concat(a[e],"</a></li>"));return n+="</ul>"},callback:function(n,a){this.inlineClass.apply(a)},refreshOnShow:function(n,a){this.inlineClass.refreshOnShow(n,a)},plugin:"inlineClass"}),n.DefineIcon("inlineClass",{NAME:"tag",SVG_KEY:"inlineClass"})});
