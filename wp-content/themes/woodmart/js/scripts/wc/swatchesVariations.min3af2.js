!function(v){woodmartThemeModule.$document.on("wdQuickShopSuccess wdQuickViewOpen wdUpdateWishlist",function(){woodmartThemeModule.swatchesVariations()}),v.each(["frontend/element_ready/wd_single_product_add_to_cart.default"],function(a,e){woodmartThemeModule.wdElementorAddAction(e,function(a){a.find(".variations_form").each(function(){v(this).wc_variation_form()}),woodmartThemeModule.swatchesVariations()})}),woodmartThemeModule.swatchesVariations=function(){woodmartThemeModule.setupMainCarouselArg();var a=v(".variations_form"),n=!1,t=!1===a.data("product_variations"),r=(v(".variations_form .label").on("click",function(a){v(this).siblings(".value").hasClass("with-swatches")&&a.preventDefault()}),a.each(function(){var a,s=v(this);s.data("swatches")||s.hasClass("wd-quick-shop-2")||(s.data("swatches",!0),s.data("product_variations")||s.find(".wd-swatches-product").find("> .wd-swatch").addClass("wd-enabled"),v(".wd-swatches-product > div").hasClass("wd-active")&&(s.addClass("variation-swatch-selected"),g(s)),(a=s.find("select.wd-changes-variation-image")).on("change",function(){var t,o,i,a=v(this),r=a.attr("name"),d=a.val(),a=s.data("product_variations"),e=!1;s.find("select").each(function(){if(!v(this).val())return!(e=!0)}),e&&d&&a&&(t=s.parents(".product, .main-page-wrapper"),o=t.find(".thumbnails .product-image-thumbnail img").first(),i=t.find(".woocommerce-product-gallery .woocommerce-product-gallery__image > a .wp-post-image").first(),v.each(a,function(a,e){if(e.attributes[r]===d)return setTimeout(function(){s.wc_variations_image_update(e),w(e.variation_id,s)||o.attr("src")===e.image.thumb_src&&o.attr("srcset")===e.image.thumb_src||((o=t.find(".thumbnails .product-image-thumbnail img").first()).wc_set_variation_attr("src",e.image.src),o.wc_set_variation_attr("srcset",e.image.src),i.attr("data-o_src",e.image.src),i.attr("data-o_srcset",e.image.src),o.siblings("source").length&&o.siblings("source").attr("srcset",e.image.src),woodmartThemeModule.$document.trigger("wdResetVariation"))}),!1}))}),a.val()&&a.trigger("change"),s.on("click",".wd-swatches-single > .wd-swatch",function(){var a=v(this),e=a.data("value"),t=a.parent().data("id");a.data("title");r(s),a.parents(".wd-swatches-limited").length&&a.parents(".wd-swatches-limited").find(".wd-swatch-divider").trigger("click"),a.hasClass("wd-active")||a.hasClass("wd-disabled")||(s.find("select#"+t).val(e).trigger("change"),a.parent().find(".wd-active").removeClass("wd-active"),a.addClass("wd-active"),r(s),_())}).on("woocommerce_update_variation_values",function(){_(),r(s)}).on("click",".reset_variations",function(){s.find(".wd-active").removeClass("wd-active"),("yes"===woodmart_settings.swatches_labels_name&&769<=woodmartThemeModule.$window.width()||woodmartThemeModule.$window.width()<=768)&&s.find(".wd-attr-selected").html("")}).on("reset_data",function(){var e=v(this),t=!0,o=!0,a=(s.find(".variations select").each(function(){var a=v(this);0===(e.val()||"").length&&(t=!1),a.has("wd-changes-variation-image")&&a.val()&&(o=!1)}),t&&e.parent().find(".wd-active").removeClass("wd-active"),s.removeClass("variation-swatch-selected"),s.find(".woocommerce-variation").removeClass("wd-show"),v(".woocommerce-product-gallery__wrapper.owl-carousel")),i=v(".woocommerce-product-gallery");r(s),o&&w("default",s),a.hasClass("owl-carousel")&&("yes"===woodmart_settings.product_slider_auto_height?(!l()&&m("default",s)&&n&&a.trigger("destroy.owl.carousel"),v(".product-images").imagesLoaded(function(){(a=a.owlCarousel(woodmartThemeModule.mainCarouselArg)).trigger("refresh.owl.carousel")})):(a=a.owlCarousel(woodmartThemeModule.mainCarouselArg)).trigger("refresh.owl.carousel"),i=i.hasClass("thumbs-position-centered")?woodmart_settings.centered_gallery_start:0,l()&&(i=0),a.trigger("to.owl.carousel",i)),woodmartThemeModule.$document.trigger("wdResetVariation")}).on("found_variation",function(a,e){t&&w(e.variation_id,s,e)}).on("reset_image",function(){var a=v(".thumbnails .product-image-thumbnail img").first();l()||c(s)||a.wc_reset_variation_attr("src")}).on("show_variation",function(a,e){var t,o,i,r,d;s.find(".wd-swatch").length&&!s.find(".wd-swatch.wd-active").length&&s.find("select").each(function(){var a=v(this),e=a.val();e&&a.siblings(".wd-swatches-product").find(".wd-swatch[data-value="+e+"]").addClass("wd-active")}),_(),s.addClass("variation-swatch-selected"),void 0!==e&&e.image.src&&(d=0<(i=s.parents(".product, .main-page-wrapper")).find('.thumbnails .product-image-thumbnail img[data-o_src="'+e.image.thumb_src+'"]').length,o=(t=i.find(".thumbnails .product-image-thumbnail img").first()).siblings("source"),i=i.find(".woocommerce-product-gallery .woocommerce-product-gallery__image > a").first().data("o_href"),d&&t.wc_reset_variation_attr("src"),c(s)||w(e.variation_id,s)||(t.attr("src")!==e.image.thumb_src&&(t.wc_set_variation_attr("src",e.image.src),e.image.srcset.length&&t.wc_set_variation_attr("srcset",e.image.srcset),o.length)&&(e.image.srcset.length?o.attr("srcset",e.image.srcset):o.attr("srcset",e.image.src)),woodmartThemeModule.$document.trigger("wdShowVariationNotQuickView")),g(s),c(s)||l()||i===e.image.full_src||u(),(r=v(".woocommerce-product-gallery__wrapper.owl-carousel")).hasClass("owl-carousel"))&&("yes"===woodmart_settings.product_slider_auto_height?(!l()&&m(e.variation_id,s)&&n&&r.trigger("destroy.owl.carousel"),v(".product-images").imagesLoaded(function(){(r=r.owlCarousel(woodmartThemeModule.mainCarouselArg)).trigger("refresh.owl.carousel")})):(r=r.owlCarousel(woodmartThemeModule.mainCarouselArg)).trigger("refresh.owl.carousel"),d=v(".images .thumbnails"),r.trigger("to.owl.carousel",0),d.hasClass("owl-carousel")?(d.owlCarousel().trigger("to.owl.carousel",0),d.find(".active-thumb").removeClass("active-thumb"),d.find(".product-image-thumbnail").eq(0).addClass("active-thumb")):d.hasClass("slick-slider")&&(d.slick("slickGoTo",0),d.find(".product-image-thumbnail").eq(0).hasClass("active-thumb")||(d.find(".active-thumb").removeClass("active-thumb"),d.find(".product-image-thumbnail").eq(0).addClass("active-thumb"))))}))}),function(a){a.data("product_variations")&&a.find(".variations select").each(function(){var a=v(this),e=a.parent().find(".wd-swatches-product"),a=a.html(),a=v(a);e.find(".wd-swatch").removeClass("wd-enabled").addClass("wd-disabled"),a.each(function(){var a=v(this).val();v(this).hasClass("enabled")?e.find('div[data-value="'+a+'"]').removeClass("wd-disabled").addClass("wd-enabled"):e.find('div[data-value="'+a+'"]').addClass("wd-disabled").removeClass("wd-enabled")})})}),l=function(){return v(".single-product-content").hasClass("product-quick-view")},c=function(a){return a.parent().hasClass("quick-shop-form")},m=function(a,e){return"old"===woodmart_settings.variation_gallery_storage_method?o(a):i(a,e)},o=function(a){var e;if("undefined"!=typeof woodmart_variation_gallery_data||"undefined"!=typeof woodmart_qv_variation_gallery_data)return void 0!==(e=l()?woodmart_qv_variation_gallery_data:woodmart_variation_gallery_data)&&e&&e[a]},i=function(a,e){e=d(e);return void 0!==e&&e&&e[a]&&1<e[a].length||"default"===a},u=function(){var a;0!==v(".woocommerce-product-gallery__wrapper").length&&("yes"===woodmart_settings.swatches_scroll_top_desktop&&1024<=woodmartThemeModule.$window.width()||"yes"===woodmart_settings.swatches_scroll_top_mobile&&woodmartThemeModule.$window.width()<=1024)&&((a=v("html, body")).stop(!0),woodmartThemeModule.$window.on("mousedown wheel DOMMouseScroll mousewheel keyup touchmove",function(){a.stop(!0)}),a.animate({scrollTop:v(".woocommerce-product-gallery__wrapper").offset().top-150},800),v(".wd-swatch").tooltip("hide"))},d=function(a,e){void 0===e&&(e=!1);var t=a.data("product_variations"),o=(t=(t=e?e:t)||a.data("wd_product_variations"),[]);return t&&("object"!=typeof t||Array.isArray(t)?(t="string"==typeof t?JSON.parse(t):t).forEach(function(a){o[a.variation_id]=a.additional_variation_images,o.default=a.additional_variation_images_default}):(o[t.variation_id]=t.additional_variation_images,o.default=t.additional_variation_images_default,a.data("wd_product_variations",JSON.stringify([{additional_variation_images_default:t.additional_variation_images_default}])))),o},w=function(a,e,t){if(void 0===t&&(t=!1),"old"===woodmart_settings.variation_gallery_storage_method){if(!m(a,e)||c(e)||"default"===a&&!n)return!1;s(a,e)}else{if(!m(a,e)&&!t||t&&(o=a,!(void 0!==(i=t)&&i&&i.additional_variation_images&&1<i.additional_variation_images.length||"default"===o))||c(e)||"default"===a&&!n)return!1;i=d(e,t);h(i[a],e,a)}var o,i;return v(".woocommerce-product-gallery__image").trigger("zoom.destroy"),woodmartThemeModule.$document.trigger("wdReplaceMainGallery"),l()||woodmartThemeModule.$document.trigger("wdReplaceMainGalleryNotQuickView"),n="default"!==a,woodmartThemeModule.$window.trigger("resize"),!0},s=function(a,e){var t=(l()?woodmart_qv_variation_gallery_data:woodmart_variation_gallery_data)[a],e=e.parents(".product, .main-page-wrapper"),o=e.find(".woocommerce-product-gallery__wrapper");1<t.length?e.find(".woocommerce-product-gallery").addClass("wd-has-thumb"):e.find(".woocommerce-product-gallery").removeClass("wd-has-thumb"),o.empty();for(var i=0;i<t.length;i++){var r="",r=(l()||"default"!==a||void 0===t[i].video||void 0===t[i].video.classes||(r+=t[i].video.classes),'<div class="product-image-wrap'+r+'">');r+='<figure data-thumb="'+t[i].data_thumb+'" class="woocommerce-product-gallery__image">',l()||"default"!==a||void 0===t[i].video||void 0===t[i].video.controls||(r+=t[i].video.controls),l()||(r+='<a href="'+t[i].href+'">'),r+=t[i].image,l()||(r+="</a>"),l()||"default"!==a||void 0===t[i].video||void 0===t[i].video.content||(r+=t[i].video.content),r+="</figure></div>",o.append(r)}},h=function(a,e,t=""){var o,i,r,e=e.parents(".product, .main-page-wrapper"),d=e.find(".woocommerce-product-gallery__wrapper");for(o in d.empty(),1<a.length?e.find(".woocommerce-product-gallery").addClass("wd-has-thumb"):e.find(".woocommerce-product-gallery").removeClass("wd-has-thumb"),a)a.hasOwnProperty(o)&&(i="",l()||"default"!==t||void 0===a[o].video||void 0===a[o].video.classes||(i+=a[o].video.classes),i='<div class="product-image-wrap'+i+'">',l()||"default"!==t||void 0===a[o].video||void 0===a[o].video.controls||(i+=a[o].video.controls),i+='<figure class="woocommerce-product-gallery__image" data-thumb="'+a[o].thumbnail_src+'">',l()||(i+='<a href="'+a[o].full_src+'" data-elementor-open-lightbox="no">'),r=a[o].srcset?'srcset="'+a[o].srcset+'"':"",i+='<img width="'+a[o].width+'" height="'+a[o].height+'" src="'+a[o].src+'" class="'+a[o].class+'" alt="'+a[o].alt+'" title="'+a[o].title+'" data-caption="'+a[o].data_caption+'" data-src="'+a[o].data_src+'"  data-large_image="'+a[o].data_large_image+'" data-large_image_width="'+a[o].data_large_image_width+'" data-large_image_height="'+a[o].data_large_image_height+'" '+r+' sizes="'+a[o].sizes+'" />',l()||(i+="</a>"),l()||"default"!==t||void 0===a[o].video||void 0===a[o].video.content||(i+=a[o].video.content),i+="</figure></div>",d.append(i))};function g(a){var a=a.find(".woocommerce-variation"),e=!1;a.length&&(a.find("> *").each(function(){v(this).is(":empty")||(e=!0)}),e)&&a.addClass("wd-show")}function _(){var e=!1;v(".variations_form").each(function(){var a=v(this);("yes"===woodmart_settings.swatches_labels_name&&769<=woodmartThemeModule.$window.width()||woodmartThemeModule.$window.width()<=768)&&!e&&(a.find(".wd-active").each(function(){var a=v(this),e=a.data("title"),t=a.parents("tr").find(".wd-attr-selected");t.length?t.html(e):a.parents("tr").find(" > th").append('<span class="wd-attr-selected">'+e+"</span>")}),e=!0)})}},v(document).ready(function(){woodmartThemeModule.swatchesVariations()})}(jQuery);