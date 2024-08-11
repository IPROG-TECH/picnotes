/*!
 * froala_editor v3.2.2 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
!function(a,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],t):t(a.FroalaEditor)}(this,function(a){"use strict";a=a&&a.hasOwnProperty("default")?a["default"]:a,Object.assign(a.DEFAULTS,{paragraphFormat:{N:"Normal",H1:"Heading 1",H2:"Heading 2",H3:"Heading 3",H4:"Heading 4",PRE:"Code"},paragraphFormatSelection:!1,paragraphDefaultSelection:"Paragraph Format"}),a.PLUGINS.paragraphFormat=function(a){function t(t,r){var n=a.html.defaultTag();if(r&&r.toLowerCase()!=n)if(0<t.find("ul, ol").length){var o=e("<"+r+">");t.prepend(o);for(var i=a.node.contents(t.get(0))[0];i&&["UL","OL"].indexOf(i.tagName)<0;){var l=i.nextSibling;o.append(i),i=l}}else t.html("<"+r+">"+t.html()+"</"+r+">")}var e=a.$;return{apply:function(r){"N"==r&&(r=a.html.defaultTag()),a.selection.save(),a.html.wrap(!0,!0,!a.opts.paragraphFormat.BLOCKQUOTE,!0,!0),a.selection.restore();var n,o,i,l,p,s,d,m,h=a.selection.blocks();a.selection.save(),a.$el.find("pre").attr("skip",!0);for(var f=0;f<h.length;f++)if(h[f].tagName!=r&&!a.node.isList(h[f])){var g=e(h[f]);"LI"==h[f].tagName?t(g,r):"LI"==h[f].parentNode.tagName&&h[f]?(s=g,d=r,m=a.html.defaultTag(),d&&d.toLowerCase()!=m||(d='div class="fr-temp-div"'),s.replaceWith(e("<"+d+">").html(s.html()))):0<=["TD","TH"].indexOf(h[f].parentNode.tagName)?(i=g,l=r,p=a.html.defaultTag(),l||(l='div class="fr-temp-div"'+(a.node.isEmpty(i.get(0),!0)?' data-empty="true"':"")),l.toLowerCase()==p?(a.node.isEmpty(i.get(0),!0)||i.append("<br/>"),i.replaceWith(i.html())):i.replaceWith(e("<"+l+">").html(i.html()))):(n=g,(o=r)||(o='div class="fr-temp-div"'+(a.node.isEmpty(n.get(0),!0)?' data-empty="true"':"")),"H1"!=o&&"H2"!=o&&"H3"!=o&&"H4"!=o&&"H5"!=o||!a.node.attributes(n.get(0)).includes("font-size:")?n.replaceWith(e("<"+o+" "+a.node.attributes(n.get(0))+">").html(n.html()).removeAttr("data-empty")):n.replaceWith(e("<"+o+" "+a.node.attributes(n.get(0)).replace(/font-size:[0-9]+px;?/,"")+">").html(n.html()).removeAttr("data-empty")))}a.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function(){e(this).prev().append("<br>"+e(this).html()),e(this).remove()}),a.$el.find("pre").removeAttr("skip"),a.html.unwrap(),a.selection.restore()},refreshOnShow:function(t,e){var r=a.selection.blocks();if(r.length){var n=r[0],o="N",i=a.html.defaultTag();n.tagName.toLowerCase()!=i&&n!=a.el&&(o=n.tagName),e.find('.fr-command[data-param1="'+o+'"]').addClass("fr-active").attr("aria-selected",!0)}else e.find('.fr-command[data-param1="N"]').addClass("fr-active").attr("aria-selected",!0)},refresh:function(t){if(a.opts.paragraphFormatSelection){var e=a.selection.blocks();if(e.length){var r=e[0],n="N",o=a.html.defaultTag();r.tagName.toLowerCase()!=o&&r!=a.el&&(n=r.tagName),0<=["LI","TD","TH"].indexOf(n)&&(n="N"),t.find(">span").text(a.language.translate(a.opts.paragraphFormat[n]))}else t.find(">span").text(a.language.translate(a.opts.paragraphFormat.N))}}}},a.RegisterCommand("paragraphFormat",{type:"dropdown",displaySelection:function(a){return a.opts.paragraphFormatSelection},defaultSelection:function(a){return a.language.translate(a.opts.paragraphDefaultSelection)},displaySelectionWidth:80,html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.paragraphFormat;for(var e in t)if(t.hasOwnProperty(e)){var r=this.shortcuts.get("paragraphFormat."+e);r=r?'<span class="fr-shortcut">'+r+"</span>":"",a+='<li role="presentation"><'+("N"==e?this.html.defaultTag()||"DIV":e)+' style="padding: 0 !important; margin: 0 !important;" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="'+e+'" title="'+this.language.translate(t[e])+'">'+this.language.translate(t[e])+"</a></"+("N"==e?this.html.defaultTag()||"DIV":e)+"></li>"}return a+"</ul>"},title:"Paragraph Format",callback:function(a,t){this.paragraphFormat.apply(t)},refresh:function(a){this.paragraphFormat.refresh(a)},refreshOnShow:function(a,t){this.paragraphFormat.refreshOnShow(a,t)},plugin:"paragraphFormat"}),a.DefineIcon("paragraphFormat",{NAME:"paragraph",SVG_KEY:"paragraphFormat"})});