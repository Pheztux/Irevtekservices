!function(s){woodmartThemeModule.searchFullScreen=function(){var a=s("[class*=wd-search-full-screen]"),o=("yes"===woodmart_settings.ajax_fullscreen_content&&woodmartThemeModule.$body.on("mouseover click touchstart",".wd-header-search.wd-display-full-screen > a, .wd-search-form.wd-display-full-screen-2",function(){var o,e=s(this);e.hasClass("wd-inited")||(e.addClass("wd-inited"),(o=a.find(".wd-search-area")).length&&s.ajax({url:woodmart_settings.ajaxurl,data:{action:"woodmart_load_full_search_html"},dataType:"json",method:"POST",success:function(e){e.content&&(o.html(e.content),setTimeout(function(){a.addClass("wp-content-loaded")},10),woodmartThemeModule.$document.trigger("wdSearchFullScreenContentLoaded"),woodmartThemeModule.$document.trigger("wood-images-loaded"))},error:function(){console.log("loading html full search ajax error")}}))}),woodmartThemeModule.$body.on("click",".wd-header-search.wd-display-full-screen > a, .wd-search-form.wd-display-full-screen-2",function(e){e.preventDefault();var e=s(this),o=s(".wd-search-full-screen-2");0<e.parent().find(".wd-search-dropdown").length||woodmartThemeModule.$body.hasClass("global-search-dropdown")||(r()?d():(e.hasClass("wd-display-full-screen-2")||(o=s(".wd-search-full-screen"),t()),setTimeout(function(){n(o)},10)))}),woodmartThemeModule.$body.on("click",".wd-close-search a, .website-wrapper, .header-banner",function(e){!s(e.target).is(".wd-close-search a")&&s(e.target).closest(".wd-search-full-screen").length||(s(e.target).is(".wd-close-search a")&&e.preventDefault(),r()&&d())}),function(e){27===e.keyCode&&(d(),woodmartThemeModule.$body.unbind("keyup",o))}),d=function(){s("html").removeClass("wd-search-opened"),a.removeClass("wd-opened"),setTimeout(function(){a.removeClass("wd-searched")},500)},t=function(){var e,o=s("#wpadminbar"),o=0<o.length?o.outerHeight():0,a=s(".whb-sticked"),d=s(".whb-main-header");0<a.length?e=0<s(".whb-clone").length?a.outerHeight()+o:d.outerHeight()+o:(e=d.outerHeight()+o,woodmartThemeModule.$body.hasClass("header-banner-display")&&(e+=s(".header-banner").outerHeight())),s(".wd-search-full-screen").css("top",e)},n=function(a){woodmartThemeModule.$body.on("keyup",o),s("html").addClass("wd-search-opened"),a.addClass("wd-opened"),setTimeout(function(){var e=a.find('input[type="text"]'),o=e.val().length;e[0].setSelectionRange(o,o),e.trigger("focus"),1024<woodmartThemeModule.windowWidth&&woodmartThemeModule.$window.one("scroll",function(){r()&&d()})},500)},r=function(){return s("html").hasClass("wd-search-opened")}},s(document).ready(function(){woodmartThemeModule.searchFullScreen()})}(jQuery);