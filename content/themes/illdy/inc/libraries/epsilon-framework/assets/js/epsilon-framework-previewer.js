!function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/js/",t(t.s=51)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.args=e}return e.prototype.request=function(){var e=this;jQuery.ajax({type:"POST",data:{action:"epsilon_framework_ajax_action",args:e.args},dataType:"json",url:EpsilonWPUrls.ajaxurl,success:function(t){e.result=t,jQuery(e).trigger("epsilon-received-success")},error:function(e,t,n){console.log(e+" :: "+t+" :: "+n)}})},e}();t.EpsilonAjaxRequest=o},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),s=function(){function e(){wp.customize.preview.bind("update-inline-color-schemes-css",function(e){var t,n={action:[e.class,e.action],nonce:EpsilonWPUrls.ajax_nonce,args:e.data,id:e.id};t=new o.EpsilonAjaxRequest(n),t.request(),jQuery(t).on("epsilon-received-success",function(n){var o=e.action+e.id,s=jQuery("#epsilon-stylesheet-"+o);s.length||(s=jQuery("body").append('<style type="text/css" id="epsilon-stylesheet-'+o+'" />').find("#epsilon-stylesheet-"+o)),s.html()!==t.result.css&&s.html(t.result.css)})})}return e}();t.EpsilonColorSchemesPreviewer=s},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),s=function(){function e(){this.sections=[],this.registerSections(),this.handleEvents()}return e.prototype.registerSections=function(){for(var e=this,t=jQuery("[data-customizer-section-id]"),n=0;n<t.length;n++){var o=jQuery(t[n]).attr("data-section"),s={id:parseInt(o),section:jQuery(t[n])};e.sections.push(s)}},e.prototype.handleEvents=function(){var e=this;wp.customize.preview.bind("updated-section-repeater",_.debounce(function(t){e.changeSection(t)},300))},e.prototype.changeSection=function(e){var t,n=this,s={action:["Epsilon_Page_Generator","generate_partial_section"],nonce:EpsilonWPUrls.ajax_nonce,args:{control:e.control,postId:e.postId,id:e.index,value:e.value}};t=new o.EpsilonAjaxRequest(s),t.request(),this.standBySection(n.sections[e.index].section),jQuery(t).on("epsilon-received-success",function(o){n.liveSection(e.index,n.sections[e.index].section,t.result.section),jQuery(document).trigger("epsilon-selective-refresh-ready")})},e.prototype.standBySection=function(e){e.animate({opacity:.5})},e.prototype.liveSection=function(e,t,n){var o=this;t.replaceWith(n),o.sections=[],o.registerSections(),t.animate({opacity:1})},e}();t.EpsilonPartialRefresh=s},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.normalSectionFocus(),this.advancedSectionFocus()}return e.prototype.normalSectionFocus=function(){jQuery(document).on("click",".epsilon-section-editor",function(e){e.preventDefault();var t={section:jQuery(this).parents("[data-section]").attr("data-section"),customizerSection:jQuery(this).parents("[data-section]").attr("data-customizer-section-id")};wp.customize.preview.send("epsilon-section-edit",t)})},e.prototype.advancedSectionFocus=function(){jQuery(document).on("click",".epsilon-pencil-button-group > a",function(e){e.preventDefault();var t={section:jQuery(this).parents("[data-section]").attr("data-section"),customizerSection:jQuery(this).parents("[data-section]").attr("data-customizer-section-id"),sectionTab:jQuery(this).attr("data-focus")};wp.customize.preview.send("epsilon-section-edit",t)})},e}();t.EpsilonSectionEditorPreviewer=o},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){var e=this;wp.customize.preview.bind("epsilon-section-focused",_.debounce(function(t){void 0===t&&(t={index:0,closed:!0}),t.closed||e.scrollTo(t.index)},300))}return e.prototype.scrollTo=function(e){void 0===e&&(e=0);var t,n=$('[data-section="'+e+'"]');t=this.calculateOffsets(n),$("html, body").animate({scrollTop:t},500)},e.prototype.calculateOffsets=function(e){var t=e.offset();return void 0!==t&&t.hasOwnProperty("top")?t.top:0},e}();t.EpsilonSectionFocus=o},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),s=function(){function e(){wp.customize.preview.bind("update-inline-typography-css",function(e){var t,n,s={action:[e.class,e.action],nonce:EpsilonWPUrls.ajax_nonce,args:e.data,id:e.id};n=new o.EpsilonAjaxRequest(s),n.request(),jQuery(n).on("epsilon-received-success",function(e){t=jQuery("#"+n.result.stylesheet+"-inline-css"),t.length||(t=jQuery("body").append('<style type="text/css" id="'+n.result.stylesheet+'-inline-css" />').find("#"+n.result.stylesheet+"-inline-css"));for(var o=0;o<n.result.fonts.length;o++)jQuery('link[href="https://fonts.googleapis.com/css?family='+n.result.fonts[o]+'"]').length||jQuery("head").append('<link href="https://fonts.googleapis.com/css?family='+n.result.fonts[o]+'" rel="stylesheet">');t.html(n.result.css)})})}return e}();t.EpsilonTypographyPreviewer=s},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(35),s=n(32),i=n(36),r=n(34),c=n(33);wp.customize.bind("preview-ready",function(){new s.EpsilonColorSchemesPreviewer,new i.EpsilonTypographyPreviewer,new r.EpsilonSectionEditorPreviewer,new c.EpsilonPartialRefresh,new o.EpsilonSectionFocus})}});
//# sourceMappingURL=epsilon-framework-previewer.js.map