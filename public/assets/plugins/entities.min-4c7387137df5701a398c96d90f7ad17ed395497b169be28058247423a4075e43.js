/*!
 * froala_editor v3.2.2 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(require("froala-editor")):"function"==typeof define&&define.amd?define(["froala-editor"],a):a(e.FroalaEditor)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e["default"]:e,Object.assign(e.DEFAULTS,{entities:"&quot;&#39;&iexcl;&cent;&pound;&curren;&yen;&brvbar;&sect;&uml;&copy;&ordf;&laquo;&not;&shy;&reg;&macr;&deg;&plusmn;&sup2;&sup3;&acute;&micro;&para;&middot;&cedil;&sup1;&ordm;&raquo;&frac14;&frac12;&frac34;&iquest;&Agrave;&Aacute;&Acirc;&Atilde;&Auml;&Aring;&AElig;&Ccedil;&Egrave;&Eacute;&Ecirc;&Euml;&Igrave;&Iacute;&Icirc;&Iuml;&ETH;&Ntilde;&Ograve;&Oacute;&Ocirc;&Otilde;&Ouml;&times;&Oslash;&Ugrave;&Uacute;&Ucirc;&Uuml;&Yacute;&THORN;&szlig;&agrave;&aacute;&acirc;&atilde;&auml;&aring;&aelig;&ccedil;&egrave;&eacute;&ecirc;&euml;&igrave;&iacute;&icirc;&iuml;&eth;&ntilde;&ograve;&oacute;&ocirc;&otilde;&ouml;&divide;&oslash;&ugrave;&uacute;&ucirc;&uuml;&yacute;&thorn;&yuml;&OElig;&oelig;&Scaron;&scaron;&Yuml;&fnof;&circ;&tilde;&Alpha;&Beta;&Gamma;&Delta;&Epsilon;&Zeta;&Eta;&Theta;&Iota;&Kappa;&Lambda;&Mu;&Nu;&Xi;&Omicron;&Pi;&Rho;&Sigma;&Tau;&Upsilon;&Phi;&Chi;&Psi;&Omega;&alpha;&beta;&gamma;&delta;&epsilon;&zeta;&eta;&theta;&iota;&kappa;&lambda;&mu;&nu;&xi;&omicron;&pi;&rho;&sigmaf;&sigma;&tau;&upsilon;&phi;&chi;&psi;&omega;&thetasym;&upsih;&piv;&ensp;&emsp;&thinsp;&zwnj;&zwj;&lrm;&rlm;&ndash;&mdash;&lsquo;&rsquo;&sbquo;&ldquo;&rdquo;&bdquo;&dagger;&Dagger;&bull;&hellip;&permil;&prime;&Prime;&lsaquo;&rsaquo;&oline;&frasl;&euro;&image;&weierp;&real;&trade;&alefsym;&larr;&uarr;&rarr;&darr;&harr;&crarr;&lArr;&uArr;&rArr;&dArr;&hArr;&forall;&part;&exist;&empty;&nabla;&isin;&notin;&ni;&prod;&sum;&minus;&lowast;&radic;&prop;&infin;&ang;&and;&or;&cap;&cup;&int;&there4;&sim;&cong;&asymp;&ne;&equiv;&le;&ge;&sub;&sup;&nsub;&sube;&supe;&oplus;&otimes;&perp;&sdot;&lceil;&rceil;&lfloor;&rfloor;&lang;&rang;&loz;&spades;&clubs;&hearts;&diams;"}),e.PLUGINS.entities=function(e){function a(e){var a=e.textContent;if(a.match(r)){for(var t="",n=0;n<a.length;n++)i[a[n]]?t+=i[a[n]]:t+=a[n];e.textContent=t}}function t(r){if(r&&0<=["STYLE","SCRIPT","svg","IFRAME"].indexOf(r.tagName))return!0;for(var i=e.node.contents(r),n=0;n<i.length;n++)i[n].nodeType===Node.TEXT_NODE?a(i[n]):t(i[n]);return r.nodeType===Node.TEXT_NODE&&a(r),!1}var r,i,n=e.$,o=function(a){return 0===a.length?"":e.clean.exec(a,t).replace(/\&amp;/g,"&")};return{_init:function(){e.opts.htmlSimpleAmpersand||(e.opts.entities="".concat(e.opts.entities,"&amp;"));var a=n(document.createElement("div")).html(e.opts.entities).text(),t=e.opts.entities.split(";");i={},r="";for(var l=0;l<a.length;l++){var u=a.charAt(l);i[u]="".concat(t[l],";"),r+="\\".concat(u+(l<a.length-1?"|":""))}r=new RegExp("(".concat(r,")"),"g"),e.events.on("html.get",o,!0)}}}});