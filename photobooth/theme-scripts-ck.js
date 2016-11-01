function is_touch_device() {
    return !!("ontouchstart" in window) || !!("onmsgesturechange" in window)
}
jQuery.exists = function (e) {
        return jQuery(e)
            .length > 0
    }, jQuery.fn.hasAttr = function (e) {
        return void 0 !== this.attr(e)
    },
    function (e) {
        "use strict";

        function t() {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE "),
                a = e.indexOf("Trident/");
            if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
            if (a > 0) {
                var i = e.indexOf("rv:");
                return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10)
            }
            return !1
        }

        function a() {
            jQuery()
                .queryLoader2 && 0 == t() && e("body")
                .queryLoader2({
                    showbar: "on",
                    barColor: mk_accent_color,
                    textColor: mk_preloader_txt_color,
                    backgroundColor: mk_preloader_bg_color,
                    barHeight: 1,
                    logo: mk_preloader_logo,
                    percentage: !0,
                    completeAnimation: "fade",
                    minimumTime: 700,
                    onComplete: function () {
                        e(".mk-body-loader-overlay")
                            .fadeOut(600, "easeInOutExpo", function () {
                                e(this)
                                    .remove()
                            })
                    }
                }), t() > 7 && e(".mk-body-loader-overlay")
                .hide()
        }

        function i() {
            return e.exists(".mk-window-scroller") ? void e(".mk-window-scroller")
                .each(function () {
                    var t = e(this),
                        a = t.attr("data-height"),
                        i = t.find("img"),
                        n = parseInt(t.attr("data-speed"));
                    t.stop(!0, !0)
                        .hoverIntent(function () {
                            i.animate({
                                top: -(i.height() - a)
                            }, n)
                        }, function () {
                            i.animate({
                                top: 0
                            }, n / 3)
                        })
                }) : !1
        }

        function n() {
            if (e("#mk-header")
                .hasClass("sticky-header") && e(window)
                .width() > mk_nav_res_width) {
                var t = parseInt(e(window)
                        .scrollTop()),
                    a = parseInt(2 * mk_header_padding + mk_logo_height) + 30;
                t > a ? e("#mk-header")
                    .addClass("sticky-trigger-header") : e("#mk-header")
                    .removeClass("sticky-trigger-header"), setTimeout(function () {
                        s()
                    }, 200)
            }
        }

        function o() {
            if (e("#mk-header")
                .hasClass("transparent-header") && e(window)
                .width() > mk_nav_res_width) {
                var t = parseInt(e(window)
                        .scrollTop()),
                    a = e(".mk-edge-slider.first-el-true")
                    .find(".swiper-slide-active")
                    .attr("data-header-skin"),
                    i = parseInt(2 * mk_header_padding + mk_logo_height) + 30;
                if (mk_header_trans_offset = 0 == mk_header_trans_offset ? e(window)
                    .height() : mk_header_trans_offset, e.exists("#wpadminbar")) var n = e("#wpadminbar")
                    .height();
                else var n = 0;
                t > i ? e("#mk-header")
                    .addClass("header-offset-passed")
                    .css("top", -200) : e("#mk-header")
                    .removeClass("header-offset-passed")
                    .attr("top", ""), t > mk_header_trans_offset ? e("#mk-header")
                    .addClass("transparent-header-sticky sticky-trigger-header")
                    .removeClass("light-header-skin dark-header-skin")
                    .css("top", n) : "" != a && "undefined" != typeof a ? e("#mk-header")
                    .removeClass("transparent-header-sticky sticky-trigger-header")
                    .addClass(a + "-header-skin")
                    .css("top", "") : e("#mk-header")
                    .removeClass("transparent-header-sticky sticky-trigger-header")
                    .addClass(e("#mk-header")
                        .attr("data-transparent-skin") + "-header-skin")
                    .css("top", ""), setTimeout(function () {
                        s()
                    }, 200)
            }
        }

        function r() {
            e(".main-navigation-ul")
                .dcMegaMenu({
                    rowItems: "6",
                    speed: 200,
                    effect: "fade",
                    fullWidth: !0
                })
        }

        function s() {
            var t = 2 * mk_header_padding + mk_logo_height,
                a = parseInt(2 * mk_header_padding / 2.4) + parseInt(mk_logo_height / 1.5);
            (e("#mk-header")
                .hasClass("sticky-header") || e.exists(".mk-secondary-header") || e("#mk-header")
                .hasClass("transparent-header")) && (e("#mk-header")
                .hasClass("sticky-trigger-header") || e(".mk-secondary-header")
                .hasClass("sticky-trigger-header")) && e(window)
                .width() > mk_nav_res_width && 0 != mk_squeeze_header ? e(".main-navigation-ul div.sub-container, .mk-shopping-box")
                .css("top", a) : e(".main-navigation-ul div.sub-container, .mk-shopping-box")
                .css("top", t)
        }

        function d() {
            e(window)
                .width() > mk_nav_res_width ? (e("#mk-responsive-nav")
                    .hide(), setTimeout(function () {
                        r(), s()
                    }, 200), "transparent" == e("#mk-header")
                    .attr("data-header-style") && e("#mk-header")
                    .addClass("transparent-header " + e("#mk-header")
                        .attr("data-transparent-skin") + "-header-skin")) : (e.exists("#mk-responsive-nav") || (e(".main-navigation-ul")
                        .clone()
                        .attr({
                            id: "mk-responsive-nav",
                            "class": ""
                        })
                        .appendTo(".responsive-nav-container"), e("#mk-responsive-nav > li > ul, #mk-responsive-nav > li > div")
                        .each(function () {
                            e(this)
                                .siblings("a")
                                .append('<span class="mk-theme-icon-bottom-big mk-nav-arrow mk-nav-sub-closed"></span>')
                        }), e("#mk-responsive-nav")
                        .on("click", ".mk-nav-arrow", function (t) {
                            e(this)
                                .hasClass("mk-nav-sub-closed") ? (e(this)
                                    .parent()
                                    .siblings("ul")
                                    .slideDown(300), e(this)
                                    .parent()
                                    .siblings("div")
                                    .slideDown(300), e(this)
                                    .removeClass("mk-nav-sub-closed")
                                    .addClass("mk-nav-sub-opened")) : (e(this)
                                    .parent()
                                    .siblings("ul")
                                    .slideUp(300), e(this)
                                    .parent()
                                    .siblings("div")
                                    .slideUp(300), e(this)
                                    .removeClass("mk-nav-sub-opened")
                                    .addClass("mk-nav-sub-closed")), t.preventDefault()
                        })), "transparent" == e("#mk-header")
                    .attr("data-header-style") && e("#mk-header")
                    .removeClass("transparent-header " + e("#mk-header")
                        .attr("data-transparent-skin") + "-header-skin"), e("#mk-responsive-nav li, #mk-responsive-nav li a, #mk-responsive-nav ul, #mk-responsive-nav div")
                    .removeAttr("style"), e(".mk-header-inner")
                    .attr("style", ""), e("#mk-responsive-nav")
                    .append(e(".responsive-searchform")), e("#mk-responsive-nav")
                    .show()), e(window)
                .width() < mk_grid_width && e(".main-navigation-ul .sub-container.mega, .main-navigation-ul .sub-container.mega .row")
                .each(function () {
                    e(this)
                        .css("width", e(window)
                            .width() - 40)
                })
        }

        function l() {
            e.exists(".mk-secondary-header") && (U = e(".mk-secondary-header")
                .position()
                .top)
        }

        function c() {
            if (e.exists(".mk-secondary-header")) {
                var t = 0,
                    a = 0,
                    i = e(window)
                    .scrollTop();
                if (e.exists("#wpadminbar")) var t = e("#wpadminbar")
                    .height();
                if (e.exists("#mk-header.sticky-header")) var a = parseInt(e("#mk-header.sticky-header")
                    .attr("data-sticky-height"));
                var n = U - a;
                i > n ? (e(".mk-secondary-header")
                    .addClass("secondary-header-sticky")
                    .css("top", a + t), e(".secondary-header-space")
                    .addClass("secondary-space-sticky")) : (e(".mk-secondary-header")
                    .removeClass("secondary-header-sticky")
                    .css("top", "auto"), e(".secondary-header-space")
                    .removeClass("secondary-space-sticky"))
            }
        }

        function h() {
            e(".mk-gmaps")
                .each(function () {
                    function t() {
                        var e = new google.maps.LatLngBounds,
                            t = {
                                zoom: n,
                                panControl: m,
                                zoomControl: k,
                                mapTypeControl: g,
                                scaleControl: v,
                                draggable: w,
                                scrollwheel: !1,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                styles: _
                            };
                        j = new google.maps.Map(document.getElementById(i), t), j.setTilt(45);
                        var a = [],
                            y = [];
                        "" != o && "" != r && (a[0] = [s, o, r], y[0] = ['<div class="info_content"><p>' + s + "</p></div>"]), "" != d && "" != l && (a[1] = [c, d, l], y[1] = ['<div class="info_content"><p>' + c + "</p></div>"]), "" != h && "" != p && (a[2] = [f, h, p], y[3] = ['<div class="info_content"><p>' + f + "</p></div>"]);
                        var x = new google.maps.InfoWindow,
                            b, C;
                        for (C = 0; C < a.length; C++) {
                            var T = new google.maps.LatLng(a[C][1], a[C][2]);
                            e.extend(T), b = new google.maps.Marker({
                                position: T,
                                map: j,
                                title: a[C][0],
                                icon: u
                            }), google.maps.event.addListener(b, "click", function (e, t) {
                                return function () {
                                    x.setContent(y[t][0]), x.open(j, e)
                                }
                            }(b, C)), j.fitBounds(e)
                        }
                        var I = google.maps.event.addListener(j, "bounds_changed", function (e) {
                            this.setZoom(n), google.maps.event.removeListener(I)
                        })
                    }
                    var a = e(this),
                        i = a.attr("id"),
                        n = parseInt(a.attr("data-zoom")),
                        o = a.attr("data-latitude"),
                        r = a.attr("data-longitude"),
                        s = a.attr("data-address"),
                        d = a.attr("data-latitude2"),
                        l = a.attr("data-longitude2"),
                        c = a.attr("data-address2"),
                        h = a.attr("data-latitude3"),
                        p = a.attr("data-longitude3"),
                        f = a.attr("data-address3"),
                        u = a.attr("data-pin-icon"),
                        m = "true" === a.attr("data-pan-control") ? !0 : !1,
                        g = "true" === a.attr("data-map-type-control") ? !0 : !1,
                        v = "true" === a.attr("data-scale-control") ? !0 : !1,
                        w = "true" === a.attr("data-draggable") ? !0 : !1,
                        k = "true" === a.attr("data-zoom-control") ? !0 : !1,
                        y = "true" === a.attr("data-modify-coloring") ? !0 : !1,
                        x = a.attr("data-saturation"),
                        b = a.attr("data-hue"),
                        C = a.attr("data-lightness"),
                        _;
                    if (1 == y) var _ = [{
                        stylers: [{
                            hue: b
                        }, {
                            saturation: x
                        }, {
                            lightness: C
                        }, {
                            featureType: "landscape.man_made",
                            stylers: [{
                                visibility: "on"
                            }]
                        }]
                    }];
                    var j;
                    google.maps.event.addDomListener(window, "load", t)
                }), e(window)
                .load(function () {
                    if (e.exists(".mk-gmaps-parallax")) {
                        var t = skrollr.init({
                            forceHeight: !1
                        });
                        t.refresh(e(".mk-page-section"))
                    }
                })
        }

        function p() {
            e(".mk-lightbox")
                .fancybox({
                    padding: 15,
                    margin: 15,
                    width: 800,
                    height: 600,
                    minWidth: 100,
                    minHeight: 100,
                    maxWidth: 9999,
                    maxHeight: 9999,
                    pixelRatio: 1,
                    autoSize: !0,
                    autoHeight: !1,
                    autoWidth: !1,
                    autoResize: !0,
                    fitToView: !0,
                    aspectRatio: !1,
                    topRatio: .5,
                    leftRatio: .5,
                    scrolling: "auto",
                    wrapCSS: "",
                    arrows: !0,
                    closeBtn: !0,
                    closeClick: !1,
                    nextClick: !1,
                    mouseWheel: !0,
                    autoPlay: !1,
                    playSpeed: 3e3,
                    preload: 3,
                    modal: !1,
                    loop: !0,
                    openEffect: "elastic",
                    openSpeed: 250,
                    openEasing: "swing",
                    openOpacity: !0,
                    openMethod: "zoomIn",
                    closeEffect: "elastic",
                    closeSpeed: 250,
                    closeEasing: "swing",
                    closeOpacity: !0,
                    closeMethod: "zoomOut",
                    nextEffect: "fade",
                    nextSpeed: 350,
                    nextEasing: "swing",
                    nextMethod: "changeIn",
                    prevEffect: "fade",
                    prevSpeed: 350,
                    prevEasing: "swing",
                    prevMethod: "changeOut",
                    tpl: {
                        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i class="mk-theme-icon-cancel"></i></a>',
                        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><i class="mk-theme-icon-next-small"></i></span>11</a>',
                        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><i class="mk-theme-icon-prev-small"></i></span></a>',
                        loading: '<div id="fancybox-loading"><div></div></div>'
                    }
                })
        }

        function f() {
            e(".mk-edge-slider")
                .each(function () {
                    var a = e(this),
                        i = a.find(".mk-edge-next"),
                        n = a.find(".mk-edge-prev"),
                        o = a.attr("data-pause"),
                        r = a.attr("data-first"),
                        s = a.attr("data-speed");
                    a.find(".mk-animate-element")
                        .removeClass("mk-animate-element fade-in scale-up right-to-left left-to-right bottom-to-top top-to-bottom forthy-five-rotate");
                    var d = a.swiper({
                        mode: "horizontal",
                        loop: !0,
                        grabCursor: !0,
                        useCSS3Transforms: !0,
                        mousewheelControl: !1,
                        freeModeFluid: !0,
                        speed: s,
                        autoplay: o,
                        autoplayDisableOnInteraction: !0,
                        onSwiperCreated: function (o) {
                            if (0 == t()) {
                                var s = a.find(".swiper-slide")
                                    .eq(0)
                                    .find(".edge-slide-content .mk-edge-title")
                                    .text(),
                                    d = a.find(".swiper-slide")
                                    .eq(2)
                                    .find(".edge-slide-content .mk-edge-title")
                                    .text();
                                s.length > 1 ? n.find(".prev-item-caption")
                                    .show()
                                    .text(s) : n.find(".prev-item-caption")
                                    .css("display", "none"), d.length > 1 ? i.find(".next-item-caption")
                                    .show()
                                    .text(d) : i.find(".next-item-caption")
                                    .css("display", "none"), e("#mk-header")
                                    .hasClass("transparent-header-sticky") || "true" == r && e("#mk-header.transparent-header")
                                    .removeClass("light-header-skin dark-header-skin")
                                    .addClass(a.find(".swiper-slide")
                                        .eq(1)
                                        .attr("data-header-skin") + "-header-skin")
                            } else i.find(".next-item-caption")
                                .css("display", "none"), n.find(".prev-item-caption")
                                .css("display", "none")
                        },
                        onSlideChangeEnd: function () {
                            if (0 == t()) {
                                var a = e(d.getSlide(d.activeLoopIndex))
                                    .find(".edge-slide-content .mk-edge-title")
                                    .text(),
                                    o = e(d.getSlide(d.activeLoopIndex + 2))
                                    .find(".edge-slide-content .mk-edge-title")
                                    .text();
                                a.length > 1 ? n.find(".prev-item-caption")
                                    .show()
                                    .text(a) : n.find(".prev-item-caption")
                                    .css("display", "none"), o.length > 1 ? i.find(".next-item-caption")
                                    .show()
                                    .text(o) : i.find(".next-item-caption")
                                    .css("display", "none"), e("#mk-header")
                                    .hasClass("transparent-header-sticky") || "true" == r && e("#mk-header.transparent-header")
                                    .removeClass("light-header-skin dark-header-skin")
                                    .addClass(e(d.getSlide(d.activeLoopIndex + 1))
                                        .attr("data-header-skin") + "-header-skin")
                            } else i.find(".next-item-caption")
                                .css("display", "none"), n.find(".prev-item-caption")
                                .css("display", "none")
                        }
                    });
                    n.click(function (e) {
                        d.swipePrev(), e.preventDefault()
                    }), i.click(function (e) {
                        d.swipeNext(), e.preventDefault()
                    })
                })
        }

        function u() {
            e(".mk-edge-slider")
                .each(function () {
                    var t = e(this),
                        a = t.find(".edge-slider-holder, .swiper-slide"),
                        i = t.attr("data-height"),
                        n = t.attr("data-fullHeight"),
                        o = 0,
                        r = 0,
                        s = e(window)
                        .outerHeight();
                    if (e.exists("#wpadminbar") && (o = e("#wpadminbar")
                            .outerHeight()), e.exists("#mk-header.sticky-header") && !e("#mk-header")
                        .hasClass("transparent-header")) var r = parseInt(e("#mk-header.sticky-header")
                        .attr("data-sticky-height"));
                    s = "true" === n ? s - r - o : i, a.css("height", s), t.css("height", s), t.find(".swiper-slide")
                        .each(function () {
                            var t = e(this),
                                a = t.find(".edge-slide-content");
                            if (t.hasClass("left_center") || t.hasClass("center_center") || t.hasClass("right_center")) {
                                var i = a.outerHeight() / 2,
                                    n = s / 2;
                                a.css("marginTop", n - i)
                            }
                            if (t.hasClass("left_bottom") || t.hasClass("center_bottom") || t.hasClass("right_bottom")) {
                                var o = s - a.outerHeight() - 90;
                                a.css("marginTop", o)
                            }
                        }), t.find(".edge-slider-loading")
                        .fadeOut()
                })
        }

        function m() {
            e(".mk-swiper-slider")
                .each(function () {
                    var t = e(this),
                        a = t.parent()
                        .siblings(".gallery-thumbs-small"),
                        i = t.find(".mk-swiper-next"),
                        n = t.find(".mk-swiper-prev"),
                        o = t.attr("data-direction"),
                        r = "true" === t.attr("data-pagination") ? !0 : !1,
                        s = t.attr("data-slideshowSpeed"),
                        d = t.attr("data-animationSpeed"),
                        l = "true" === t.attr("data-freeModeFluid") ? !0 : !1,
                        c = "true" === t.attr("data-freeMode") ? !0 : !1,
                        h = "true" === t.attr("data-mousewheelControl") ? !0 : !1,
                        f = "true" === t.attr("data-loop") ? !0 : !1,
                        u = t.attr("data-slidesPerView");
                    if (r === !0) var m = "#" + t.attr("id") + " .swiper-pagination";
                    else var m = !1;
                    var g = e(this)
                        .swiper({
                            mode: o,
                            loop: f,
                            freeMode: c,
                            pagination: m,
                            freeModeFluid: l,
                            autoplay: s,
                            speed: d,
                            calculateHeight: !0,
                            grabCursor: !0,
                            mousewheelControl: !0,
                            mousewheelControlForceToAxis: !0,
                            paginationClickable: !0,
                            slidesPerView: u,
                            onSwiperCreated: function (e) {
                                p()
                            },
                            onSlideChangeStart: function () {
                                a.find(".active-item")
                                    .removeClass("active-item"), a.find("a")
                                    .eq(g.activeIndex)
                                    .addClass("active-item")
                            }
                        });
                    n.click(function (e) {
                            g.swipePrev(), e.preventDefault()
                        }), i.click(function (e) {
                            g.swipeNext(), e.preventDefault()
                        }), a.find("a")
                        .on("touchstart mousedown", function (t) {
                            t.preventDefault(), a.find(".active-item")
                                .removeClass("active-item"), e(this)
                                .addClass("active-item"), g.swipeTo(e(this)
                                    .index())
                        }), a.find("a")
                        .click(function (e) {
                            e.preventDefault()
                        })
                })
        }

        function g() {
            e(".mk-gallery.thumb-style .gallery-thumbs-small")
                .each(function () {
                    var t = e(this),
                        a = t.children()
                        .length,
                        i = a * t.find("a")
                        .outerWidth(),
                        n = t.siblings(".gallery-thumb-large")
                        .outerWidth();
                    i > n && t.find("a")
                        .css("width", 100 / a + "%")
                })
        }

        function v() {
            return is_touch_device() || e(window)
                .width() < 800 ? !1 : void e(".mk-page-section.parallax-true")
                .each(function () {
                    var t = e(this),
                        a = t.attr("data-direction"),
                        i = t.attr("data-speedFactor");
                    if ("horizontal_mouse" === a || "vertical_mouse" === a || "both_axis_mouse" === a) {
                        var n = "vertical_mouse" === t.attr("data-direction") ? !0 : !1,
                            o = "horizontal_mouse" === t.attr("data-direction") ? !0 : !1,
                            r = "both_axis_mouse" === t.attr("data-direction") ? !0 : !1;
                        r === !0 && (o = !0, n = !0), e(this)
                            .find(".parallax-layer")
                            .parallax({
                                mouseport: t,
                                yparallax: n,
                                xparallax: o,
                                decay: .8,
                                frameDuration: 50
                            })
                    } else {
                        var s = skrollr.init({
                            forceHeight: !1,
                            mobileCheck: function () {
                                return !1
                            }
                        });
                        s.refresh(e(".mk-page-section"))
                    }
                })
        }

        function w() {
            e(".mk-image")
                .each(function () {
                    var t = e(this),
                        a = t.outerWidth(),
                        i = t.find(".mk-image-hover")
                        .outerHeight(),
                        n = a - 40;
                    t.find(".mk-image-hover")
                        .css({
                            width: n,
                            "margin-top": -(i / 2),
                            "margin-left": -(n / 2)
                        })
                })
        }

        function k() {
            e(".mk-parent-element")
                .each(function () {
                    var t = e(this),
                        a = t.outerWidth(),
                        i = t.find(".mk-caption-item")
                        .outerHeight(),
                        n = a - 120;
                    t.find(".mk-caption-item")
                        .css({
                            width: n,
                            "margin-top": -(i / 2),
                            "margin-left": -(n / 2)
                        })
                })
        }

        function y() {
            e(".mk-portfolio-item, .widget_recent_portfolio .item-holder")
                .each(function () {
                    var t = e(this),
                        a = t.outerWidth(),
                        i = t.find(".portfolio-meta")
                        .outerHeight(),
                        n = a > 300 ? a - 100 : a - 20;
                    t.find(".portfolio-meta")
                        .css({
                            width: n,
                            "margin-top": -(i / 2),
                            "margin-left": -(n / 2)
                        });
                    var o = e(this)
                        .find(".portfolio-entry-logo"),
                        r = o.width(),
                        s = o.height();
                    o.css({
                        "margin-left": -r / 2,
                        "margin-top": -s / 2
                    })
                })
        }

        function x() {
            e(".mk-employees.grid-style .mk-employee-item")
                .each(function () {
                    var t = e(this),
                        a = t.outerHeight();
                    t.find(".team-info-wrapper")
                        .css({
                            height: a
                        })
                })
        }

        function b() {
            e(".mk-gallery-item")
                .each(function () {
                    var t = e(this),
                        a = t.outerWidth(),
                        i = t.find(".gallery-meta")
                        .outerHeight(),
                        n;
                    n = 200 > a ? a : a - 100, t.find(".gallery-meta")
                        .css({
                            width: n,
                            "margin-top": -(i / 2),
                            "margin-left": -(n / 2)
                        })
                })
        }

        function C() {
            e(".masonry-portfolio-item")
                .each(function () {
                    var t = e(this),
                        a = t.parent()
                        .find(".regular-entry")
                        .outerHeight();
                    t.hasClass("tall-entry") || t.hasClass("wide-tall-entry") ? (t.css("height", 2 * a + "px"), t.find(".featured-image")
                        .css("height", 2 * a + "px")) : t.hasClass("wide-entry") && (t.css("height", a + "px"), t.find(".featured-image")
                        .css("height", a + "px"))
                })
        }

        function _() {
            e(".masonry-portfolio-item, .grid-portfolio-item, .portfolio-scroller")
                .each(function () {
                    var t = e(this);
                    t.hover(function () {
                        t.find(".border-tb")
                            .stop(!0, !0)
                            .animate({
                                height: "100%"
                            }, 1200, "easeInOutQuint"), t.find(".border-bt")
                            .stop(!0, !0)
                            .animate({
                                height: "100%"
                            }, 1200, "easeInOutQuint"), t.find(".border-bl")
                            .stop(!0, !0)
                            .animate({
                                width: "100%"
                            }, 1200, "easeInOutQuint"), t.find(".border-tr")
                            .stop(!0, !0)
                            .animate({
                                width: "100%"
                            }, 1200, "easeInOutQuint")
                    }, function () {
                        t.find(".border-tb")
                            .stop(!0, !0)
                            .animate({
                                height: 0
                            }, 800, "easeInOutQuint"), t.find(".border-bt")
                            .stop(!0, !0)
                            .animate({
                                height: 0
                            }, 800, "easeInOutQuint"), t.find(".border-bl")
                            .stop(!0, !0)
                            .animate({
                                width: 0
                            }, 800, "easeInOutQuint"), t.find(".border-tr")
                            .stop(!0, !0)
                            .animate({
                                width: 0
                            }, 800, "easeInOutQuint")
                    })
                })
        }

        function j() {
            e.exists(".mk-tabs") && (e(".mk-tabs")
                .tabs(), e(".mk-tabs.vertical-style")
                .each(function () {
                    var t = e(this),
                        a = t.find(".inner-box"),
                        i = e(this)
                        .find(".mk-tabs-tabs")
                        .height() + 80;
                    a.css("minHeight", i)
                }))
        }

        function T() {
            e.exists(".jp-jplayer") && e(".jp-jplayer.mk-blog-audio")
                .each(function () {
                    var t = "#" + e(this)
                        .siblings(".jp-audio")
                        .attr("id"),
                        a, i, n;
                    a = e(this)
                        .attr("data-ogg"), i = e(this)
                        .attr("data-mp3"), e(this)
                        .jPlayer({
                            ready: function () {
                                e(this)
                                    .jPlayer("setMedia", {
                                        mp3: i,
                                        ogg: a
                                    })
                            },
                            play: function () {
                                e(this)
                                    .jPlayer("pauseOthers")
                            },
                            swfPath: n,
                            supplied: "mp3, ogg",
                            cssSelectorAncestor: t,
                            wmode: "window"
                        })
                })
        }

        function I() {
            e(".portfolio-grid.portfolio-ajax-enabled")
                .ajaxPortfolio()
        }

        function O() {
            e(".loop-main-wrapper")
                .each(function () {
                    var t = e(this),
                        a = t.find(".mk-theme-loop"),
                        i = ".mk-isotop-item",
                        n = t.find(".mk-loadmore-button"),
                        o = t.find(".mk-pagination");
                    a.hasClass("isotop-enabled") && a.isotope({
                            itemSelector: i,
                            animationEngine: "best-available",
                            masonry: {
                                columnWidth: 1
                            }
                        }), e(".mk-isotop-filter")
                        .on("click", "a", function () {
                            var t;
                            if (t = e(this), t.parents(".portfolio-grid")
                                .find(".ajax-container")
                                .animate({
                                    height: 0,
                                    opacity: 0
                                }, 500), t.hasClass(".current")) return !1;
                            var i = t.parents(".mk-isotop-filter ul");
                            i.find(".current")
                                .removeClass("current"), t.addClass("current");
                            var n = e(this)
                                .attr("data-filter");
                            return a.isotope({
                                filter: ""
                            }), a.isotope({
                                filter: n
                            }), !1
                        }), n.hide(), t.find(".mk-theme-loop")
                        .hasClass("scroll-load-style") || t.find(".mk-theme-loop")
                        .hasClass("load-button-style") ? (o.length > 0 && n.css("display", "block"), o.hide(), n.on("click", function () {
                                e(this)
                                    .hasClass("pagination-loading") || e(this)
                                    .addClass("pagination-loading")
                            }), a.infinitescroll({
                                navSelector: o,
                                nextSelector: t.find(".mk-pagination a:first"),
                                itemSelector: i,
                                bufferPx: 70,
                                loading: {
                                    finishedMsg: "",
                                    msg: null,
                                    msgText: "",
                                    selector: n,
                                    speed: 300,
                                    start: void 0
                                },
                                errorCallback: function () {
                                    n.html(mk_no_more_posts)
                                        .addClass("disable-pagination")
                                }
                            }, function (t) {
                                var i = e(t);
                                i.imagesLoaded(function () {
                                    n.removeClass("pagination-loading"), a.isotope("appended", i), a.isotope({
                                        filter: ""
                                    });
                                    var t = e(".mk-isotop-filter ul")
                                        .find(".current")
                                        .attr("data-filter");
                                    a.isotope({
                                        filter: t
                                    }), a.isotope("reLayout"), T(), p(), y(), b(), m(), I()
                                })
                            }), t.find(".mk-theme-loop")
                            .hasClass("load-button-style") && (e(window)
                                .unbind(".infscr"), n.click(function () {
                                    return a.infinitescroll("retrieve"), !1
                                }))) : n.hide()
                })
        }

        function S() {
            (e.exists(".mk-blog-container") || e.exists(".mk-portfolio-container")) && e(".mk-blog-container>article, .mk-portfolio-container>article")
                .each(function (t) {
                    e(this)
                        .delay(100 * t)
                        .animate({
                            opacity: 1
                        }, 100)
                })
                .promise()
                .done(function () {
                    e(".mk-theme-loop")
                        .isotope("reLayout")
                })
        }

        function H() {
            e.exists(".mk-event-countdown") && e(".mk-event-countdown")
                .each(function () {
                    var t = e(this),
                        a = t.attr("data-date"),
                        i = t.attr("data-offset");
                    t.downCount({
                        date: a,
                        offset: i
                    })
                })
        }

        function L() {
            e.exists(".mk-instagram-feeds") && e(".mk-instagram-feeds")
                .each(function () {
                    var t = e(this),
                        a = t.attr("data-size"),
                        i = t.attr("data-sort"),
                        n = t.attr("data-count"),
                        o = parseInt(t.attr("data-userid")),
                        r = t.attr("data-accesstoken"),
                        s = t.attr("data-column"),
                        d = t.attr("id");
                    console.log(o);
                    var l = new Instafeed({
                        get: "user",
                        target: d,
                        resolution: a,
                        sortBy: i,
                        limit: n,
                        userId: o,
                        accessToken: r,
                        template: '<a class="featured-image ' + s + '-columns" href="{{link}}"><div class="item-holder"><img src="{{image}}" /><div class="hover-overlay"></div></div></a>'
                    });
                    l.run()
                })
        }

        function D() {
            e.exists(".mk-accordion") && e(".mk-accordion")
                .each(function () {
                    var t = e(this),
                        a = t.find(".mk-accordion-single"),
                        i = t.find(".mk-accordion-pane")
                        .hide();
                    a.first()
                        .addClass("current-item")
                        .find(".mk-accordion-pane")
                        .slideDown(300), t.find(".mk-accordion-tab")
                        .click(function () {
                            var t = e(this),
                                a = t.parent();
                            return a.hasClass("current-item") || (a.siblings()
                                .removeClass("current-item")
                                .end()
                                .addClass("current-item"), i.slideUp(300), t.parent()
                                .children(".mk-accordion-pane")
                                .slideDown(300)), !1
                        })
                }), e.exists(".mk-toggle-title") && e(".mk-toggle-title")
                .toggle(function () {
                    e(this)
                        .addClass("active-toggle"), e(this)
                        .siblings(".mk-toggle-pane")
                        .slideDown("fast")
                }, function () {
                    e(this)
                        .removeClass("active-toggle"), e(this)
                        .siblings(".mk-toggle-pane")
                        .slideUp("fast")
                })
        }

        function E() {
            e(".twitter-share")
                .on("click", function () {
                    var t = e(this)
                        .attr("data-url"),
                        a = e(this)
                        .attr("data-title");
                    return window.open("http://twitter.com/intent/tweet?text=" + a + " " + t, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"), !1
                }), e(".pinterest-share")
                .on("click", function () {
                    var t = e(this)
                        .attr("data-url"),
                        a = e(this)
                        .attr("data-title"),
                        i = e(this)
                        .attr("data-image");
                    return window.open("http://pinterest.com/pin/create/button/?url=" + t + "&media=" + i + "&description=" + a, "twitterWindow", "height=320,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"), !1
                }), e(".facebook-share")
                .on("click", function () {
                    var t = e(this)
                        .attr("data-url");
                    return window.open("https://www.facebook.com/sharer/sharer.php?u=" + t, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"), !1
                }), e(".googleplus-share")
                .on("click", function () {
                    var t = e(this)
                        .attr("data-url");
                    return window.open("https://plus.google.com/share?url=" + t, "googlePlusWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"), !1
                })
        }

        function P() {
            e("[data-typer-targets]")
                .each(function () {
                    var t = e(this),
                        a = [t.text()],
                        i = t.attr("data-typer-targets")
                        .split(","),
                        n = a.concat(i);
                    t.text(""), t.typed({
                        strings: n,
                        typeSpeed: 30,
                        backDelay: 1200,
                        loop: !0,
                        loopCount: !1
                    })
                })
        }

        function W() {
            e.exists(".mk-process-steps.horizontal") && e(".mk-process-steps.horizontal")
                .each(function () {
                    var t = e(this),
                        a = t.find(".step-items"),
                        i = t.find(".step-panes");
                    a.find("li")
                        .first()
                        .addClass("active-step-item"), i.css("height", i.find(".mk-step")
                            .first()
                            .outerHeight() + 30), i.find(".mk-step")
                        .first()
                        .addClass("active-step"), a.find("span")
                        .hoverIntent(function () {
                            var t = e(this)
                                .attr("data-id"),
                                a = i.find('div[id^="' + t + '"]'),
                                n = a.outerHeight() + 30;
                            e(this)
                                .parent()
                                .siblings("li")
                                .removeClass("active-step-item")
                                .end()
                                .addClass("active-step-item"), i.css("height", n), i.find(".mk-step")
                                .removeClass("active-step"), a.addClass("active-step")
                        })
                })
        }

        function M() {
            e(".full-height-true.mk-page-section")
                .each(function () {
                    var t = e(this),
                        a = t.find(".page-section-content")
                        .outerHeight(),
                        i = e(window)
                        .outerHeight();
                    if (e.exists("#wpadminbar")) var n = e("#wpadminbar")
                        .outerHeight();
                    else var n = 0;
                    if (e.exists("#mk-header.sticky-header"))
                        if (e("#mk-header")
                            .hasClass("sticky-trigger-header")) var o = parseInt(e("#mk-header.sticky-header")
                            .attr("data-sticky-height"));
                        else var o = parseInt(e("#mk-header.sticky-header")
                            .attr("data-height"));
                    else var o = 0;
                    if (i = i - n - o, a > i) t.css("height", "auto"), t.find(".page-section-content")
                        .css({
                            "padding-top": 30,
                            "padding-bottom": 30
                        });
                    else {
                        t.css("height", i);
                        var r = t.find(".page-section-content")
                            .outerHeight() / 2,
                            s = i / 2;
                        t.find(".page-section-content")
                            .css("marginTop", s - r)
                    }
                    t.find(".mk-page-section-loader")
                        .fadeOut()
                })
        }

        function z() {
            e(".section-expandable-true")
                .each(function () {
                    var t = e(this)
                        .find(".mk-padding-wrapper")
                        .hide();
                    e(this)
                        .find(".expandable-section-trigger")
                        .on("click", function () {
                            var a = e(this);
                            a.hasClass("active-toggle") ? (a.removeClass("active-toggle"), t.slideUp(400)) : (a.addClass("active-toggle"), t.slideDown(400))
                        })
                })
        }

        function R() {
            e(".mk-flickr-feeds")
                .each(function () {
                    var t = e(this),
                        a = t.attr("data-key"),
                        i = t.attr("data-userid"),
                        n = t.attr("data-count");
                    jQuery.getJSON("http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=" + a + "&user_id=" + i + "&&per_page=" + n + "&jsoncallback=?", function (e) {
                        jQuery.each(e.photos.photo, function (e, a) {
                            var i = "http://farm" + a.farm + ".static.flickr.com/" + a.server + "/" + a.id + "_" + a.secret,
                                o = i + "_q.jpg",
                                r = i + ".jpg",
                                s = "<a ",
                                d = 'title="' + a.title + '" rel="flickr-feeds" class="mk-lightbox featured-image" href="' + r + '"><img src="' + o + '" alt="' + a.title + '"/><div class="hover-overlay"></div></a>;',
                                l = n > e ? s + d : s + d;
                            jQuery(l)
                                .appendTo(t)
                        })
                    })
                })
        }

        function A() {
            e(".mk-flexslider.mk-script-call")
                .each(function () {
                    (e(this)
                        .parents(".mk-tabs")
                        .length || e(this)
                        .parents(".mk-accordion")
                        .length) && e(this)
                        .removeData("flexslider");
                    var t = e(this),
                        a = t.attr("data-selector"),
                        i = t.attr("data-animation"),
                        n = t.attr("data-easing"),
                        o = t.attr("data-direction"),
                        r = "true" == t.attr("data-smoothHeight") ? !0 : !1,
                        s = t.attr("data-slideshowSpeed"),
                        d = t.attr("data-animationSpeed"),
                        l = "true" == t.attr("data-controlNav") ? !0 : !1,
                        c = "true" == t.attr("data-directionNav") ? !0 : !1,
                        h = "true" == t.attr("data-pauseOnHover") ? !0 : !1,
                        p = "true" == t.attr("data-isCarousel") ? !0 : !1;
                    if (void 0 != a) var f = a;
                    else var f = ".mk-flex-slides > li";
                    if (1 == p) var u = parseInt(t.attr("data-itemWidth")),
                        m = parseInt(t.attr("data-itemMargin")),
                        g = parseInt(t.attr("data-minItems")),
                        v = parseInt(t.attr("data-maxItems")),
                        w = parseInt(t.attr("data-move"));
                    else var u = m = g = v = w = 0;
                    t.flexslider({
                        selector: f,
                        animation: i,
                        easing: n,
                        direction: o,
                        smoothHeight: r,
                        slideshow: !0,
                        slideshowSpeed: s,
                        animationSpeed: d,
                        controlNav: l,
                        directionNav: c,
                        pauseOnHover: h,
                        prevText: "",
                        nextText: "",
                        itemWidth: u,
                        itemMargin: m,
                        minItems: g,
                        maxItems: v,
                        move: w
                    })
                })
        }

        function B() {
            e(".mk-mobile-image")
                .fadeIn(), e(".mk-tablet-image")
                .fadeIn()
        }

        function q() {
            e(".mk-edge-one-pager")
                .each(function () {
                    var t = e(this),
                        a = [];
                    t.find(".section")
                        .each(function () {
                            a.push(e(this)
                                .attr("data-title"))
                        }), t.fullpage({
                            verticalCentered: !1,
                            resize: !0,
                            slidesColor: ["#ccc", "#fff"],
                            anchors: a,
                            scrollingSpeed: 600,
                            easing: "easeInQuart",
                            menu: !1,
                            navigation: !0,
                            navigationPosition: "right",
                            navigationTooltips: !1,
                            slidesNavigation: !0,
                            slidesNavPosition: "bottom",
                            loopBottom: !1,
                            loopTop: !1,
                            loopHorizontal: !0,
                            autoScrolling: !0,
                            scrollOverflow: !1,
                            css3: !0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            fixedElements: "#element1, .element2",
                            normalScrollElements: "#element1, .element2",
                            normalScrollElementTouchThreshold: 5,
                            keyboardScrolling: !0,
                            touchSensitivity: 15,
                            continuousVertical: !1,
                            animateAnchor: !0,
                            onLeave: function (a, i, n) {
                                e("#mk-header")
                                    .hasClass("transparent-header-sticky") || (e("#mk-header.transparent-header")
                                        .removeClass("light-header-skin dark-header-skin")
                                        .addClass(t.find(".one-pager-slide")
                                            .eq(i - 1)
                                            .attr("data-header-skin") + "-header-skin"), e("#fullPage-nav")
                                        .removeClass("light-skin dark-skin")
                                        .addClass(t.find(".one-pager-slide")
                                            .eq(i - 1)
                                            .attr("data-header-skin") + "-skin"))
                            },
                            afterLoad: function (e, t) {},
                            afterRender: function () {
                                e("#mk-header")
                                    .hasClass("transparent-header-sticky") || setTimeout(function () {
                                        e("#mk-header.transparent-header")
                                            .removeClass("light-header-skin dark-header-skin")
                                            .addClass(t.find(".one-pager-slide")
                                                .eq(0)
                                                .attr("data-header-skin") + "-header-skin"), e("#fullPage-nav")
                                            .removeClass("light-skin dark-skin")
                                            .addClass(t.find(".one-pager-slide")
                                                .eq(nextIndex - 1)
                                                .attr("data-header-skin") + "-skin")
                                    }, 300)
                            },
                            afterResize: function () {},
                            afterSlideLoad: function (e, t, a, i) {},
                            onSlideLeave: function (e, t, a, i) {}
                        })
                })
        }

        function Q() {
            e(".mk-edge-one-pager")
                .each(function () {
                    var t = e(this),
                        a = 0,
                        i = 0,
                        n = e(window)
                        .outerHeight();
                    if (e.exists("#wpadminbar") && (a = e("#wpadminbar")
                            .outerHeight()), e.exists("#mk-header.sticky-header") && !e("#mk-header")
                        .hasClass("transparent-header")) var i = parseInt(e("#mk-header.sticky-header")
                        .attr("data-sticky-height"));
                    n = n - i - a, t.find(".one-pager-slide")
                        .each(function () {
                            var t = e(this),
                                a = t.find(".edge-slide-content");
                            if (t.hasClass("left_center") || t.hasClass("center_center") || t.hasClass("right_center")) {
                                var i = a.outerHeight() / 2,
                                    o = n / 2;
                                a.css("marginTop", o - i)
                            }
                            if (t.hasClass("left_bottom") || t.hasClass("center_bottom") || t.hasClass("right_bottom")) {
                                var r = n - a.outerHeight() - 90;
                                a.css("marginTop", r)
                            }
                        })
                })
        }

        function V() {
            e(".mk-animated-columns")
                .each(function () {
                    var t = e(this);
                    t.find(".animated-column-item")
                        .each(t.hasClass("full-style") ? function () {
                            var t = e(this),
                                a = t.outerHeight(!0),
                                i = t.find(".animated-column-icon")
                                .outerHeight(!0);
                            t.find(".animated-column-holder")
                                .css({
                                    paddingTop: a / 2 - i
                                })
                        } : function () {
                            var t = e(this),
                                a = t.outerHeight(!0) / 2,
                                i = t.find(".animated-column-icon")
                                .outerHeight(!0),
                                n = t.find(".animated-column-simple-title")
                                .outerHeight(!0);
                            t.find(".animated-column-holder")
                                .css({
                                    paddingTop: a - i
                                }), t.find(".animated-column-title")
                                .css({
                                    paddingTop: a - n
                                })
                        })
                }), e(".mk-animated-columns.full-style .animated-column-item")
                .hover(function () {
                    TweenLite.to(e(this)
                        .find(".animated-column-holder"), .5, {
                            top: "-15%",
                            ease: Back.easeOut
                        }), TweenLite.to(e(this)
                        .find(".animated-column-desc"), .5, {
                            top: "50%",
                            ease: Expo.easeOut
                        }, .4), TweenLite.to(e(this)
                        .find(".animated-column-btn"), .5, {
                            top: "80%",
                            ease: Expo.easeOut
                        }, .6)
                }, function () {
                    TweenLite.to(e(this)
                        .find(".animated-column-holder"), .5, {
                            top: "0%",
                            ease: Back.easeOut
                        }), TweenLite.to(e(this)
                        .find(".animated-column-desc"), .5, {
                            top: "100%",
                            ease: Back.easeOut
                        }, .4), TweenLite.to(e(this)
                        .find(".animated-column-btn"), .5, {
                            top: "100%",
                            ease: Back.easeOut
                        }, .2)
                }), e(".mk-animated-columns.simple-style .animated-column-item")
                .hover(function () {
                    TweenLite.to(e(this)
                        .find(".animated-column-holder"), .7, {
                            top: "100%",
                            ease: Expo.easeOut
                        }), TweenLite.to(e(this)
                        .find(".animated-column-title"), .7, {
                            top: "0%",
                            ease: Back.easeOut
                        }, .2)
                }, function () {
                    TweenLite.to(e(this)
                        .find(".animated-column-holder"), .7, {
                            top: "0%",
                            ease: Expo.easeOut
                        }), TweenLite.to(e(this)
                        .find(".animated-column-title"), .7, {
                            top: "-100%",
                            ease: Back.easeOut
                        }, .2)
                })
        }

        function N() {
            e("html")
                .niceScroll({
                    scrollspeed: 65,
                    mousescrollstep: 40,
                    cursorwidth: 10,
                    cursorborder: 0,
                    cursorcolor: "#434343",
                    cursorborderradius: 6,
                    autohidemode: !1,
                    zindex: 9999,
                    horizrailenabled: !1
                })
        }

        function F() {
            function t(t, a) {
                this.element = e(t), this.settings = e.extend({}, i, a), this.init()
            }
            var a = "ajaxPortfolio",
                i = {
                    propertyName: "value"
                };
            t.prototype = {
                init: function () {
                    var t = this;
                    return this.grid = this.element.find(".mk-portfolio-container"), this.items = this.grid.children(), this.items.length < 1 ? !1 : (this.ajaxDiv = this.element.find("div.ajax-container"), this.filter = this.element.find("#mk-filter-portfolio"), this.loader = this.element.find(".portfolio-loader"), this.triggers = this.items.find(".project-load"), this.closeBtn = this.ajaxDiv.find(".close-ajax"), this.nextBtn = this.ajaxDiv.find(".next-ajax"), this.prevBtn = this.ajaxDiv.find(".prev-ajax"), this.api = {}, this.id = null, this.win = e(window), this.current = 0, this.breakpointT = 989, this.breakpointP = 767, this.columns = this.grid.data("columns"), this.real_col = this.columns, this.loader.fadeIn(), 1 === this.items.length && (this.nextBtn.remove(), this.prevBtn.remove()), void this.grid.waitForImages(function () {
                        t.loader.fadeOut(), t.bind_handler()
                    }))
                },
                bind_handler: function () {
                    var t = this;
                    t.filter.find("a")
                        .click(function () {
                            t.triggers.removeClass("active"), t.grid.removeClass("grid-open"), t.close_project(), t.filter.find("a")
                                .removeClass("active_sort"), e(this)
                                .addClass("active_sort");
                            var a = e(this)
                                .attr("data-filter");
                            return t.grid.isotope({
                                filter: a
                            }), !1
                        }), t.triggers.on("click", function () {
                            var a = e(this),
                                i = a.parents(".portfolio-ajax-item");
                            return t.current = i.index(), a.hasClass("active") ? !1 : (t.close_project(), t.triggers.removeClass("active"), a.addClass("active"), t.grid.addClass("grid-open"), t.loader.fadeIn(), t.id = a.data("post-id"), t.load_project(), !1)
                        }), t.nextBtn.on("click", function () {
                            return t.current === t.triggers.length - 1 ? (t.triggers.eq(0)
                                .trigger("click"), !1) : (t.triggers.eq(t.current + 1)
                                .trigger("click"), !1)
                        }), t.prevBtn.on("click", function () {
                            return 0 === t.current ? (t.triggers.eq(t.triggers.length - 1)
                                .trigger("click"), !1) : (t.triggers.eq(t.current - 1)
                                .trigger("click"), !1)
                        }), t.closeBtn.on("click", function () {
                            return t.close_project(), t.triggers.removeClass("active"), t.grid.removeClass("grid-open"), !1
                        })
                },
                close_project: function () {
                    var e = this,
                        t = e.ajaxDiv.find(".ajax_project"),
                        a = t.actual("outerHeight");
                    e.ajaxDiv.height() > 0 ? e.ajaxDiv.css("height", a + "px")
                        .transition({
                            height: 0,
                            opacity: 0
                        }, 600) : e.ajaxDiv.transition({
                            height: 0,
                            opacity: 0
                        }, 600)
                },
                load_project: function () {
                    var t = this;
                    e.post(ajaxurl, {
                        action: "mk_ajax_portfolio",
                        id: t.id
                    }, function (e) {
                        t.ajaxDiv.find(".ajax_project")
                            .remove(), t.ajaxDiv.find(".portfolio-ajax-holder")
                            .append(e), t.project_factory(), p(), j(), m(), y(), b(), D(), E()
                    })
                },
                project_factory: function () {
                    var t = this,
                        a = this.ajaxDiv.find(".ajax_project");
                    a.waitForImages(function () {
                        e("html:not(:animated),body:not(:animated)")
                            .animate({
                                scrollTop: t.ajaxDiv.offset()
                                    .top - 160
                            }, 700), t.loader.fadeOut(function () {
                                var e = a.actual("outerHeight");
                                t.ajaxDiv.transition({
                                    opacity: 1,
                                    height: e
                                }, 400, function () {
                                    t.ajaxDiv.css({
                                        height: "auto"
                                    })
                                })
                            })
                    })
                }
            }, e.fn[a] = function (i) {
                return this.each(function () {
                    e.data(this, "plugin_" + a, new t(this, i))
                })
            }
        }
        var U, Z = function () {
            return {
                init: function () {
                    var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    t > 1 && e("img")
                        .each(function (t, a) {
                            a = e(a), a.attr("data-retina-src") && (a.attr("data-src-orig", a.attr("src")), a.attr("src", a.attr("data-retina-src")))
                        })
                }
            }
        }();
        Z.init(), e(window)
            .load(function () {
                e(".mk-milestone")
                    .one("inview", function (t, a) {
                        if (1 == a) {
                            var i = e(this),
                                n = i.find(".milestone-number")
                                .attr("data-stop"),
                                o = parseInt(i.find(".milestone-number")
                                    .attr("data-speed"));
                            e({
                                    countNum: i.find(".milestone-number")
                                        .text()
                                })
                                .animate({
                                    countNum: n
                                }, {
                                    duration: o,
                                    step: function () {
                                        i.find(".milestone-number")
                                            .text(Math.floor(this.countNum))
                                    },
                                    complete: function () {
                                        i.find(".milestone-number")
                                            .text(this.countNum)
                                    }
                                })
                        }
                    }), e(".mk-skill-meter .progress-outer")
                    .one("inview", function (t, a) {
                        if (1 == a) {
                            var i = e(this);
                            i.animate({
                                width: e(this)
                                    .attr("data-width") + "%"
                            }, 2e3)
                        }
                    }), e(".mk-chart")
                    .one("inview", function (t, a) {
                        if (1 == a) {
                            var i = e(this),
                                n = e(this)
                                .parent()
                                .width(),
                                o = i.attr("data-barSize");
                            o > n && (o = n, i.css("line-height", o), i.find("i")
                                .css({
                                    "line-height": o + "px",
                                    "font-size": o / 3
                                })), i.easyPieChart({
                                animate: 1300,
                                lineCap: "square",
                                lineWidth: i.attr("data-lineWidth"),
                                size: o,
                                barColor: i.attr("data-barColor"),
                                trackColor: i.attr("data-trackColor"),
                                scaleColor: "transparent",
                                onStep: function (e) {
                                    this.$el.find(".chart-percent span")
                                        .text(Math.ceil(e))
                                }
                            })
                        }
                    }), (is_touch_device() || e(window)
                        .width() < 800) && e("body")
                    .addClass("no-transform")
                    .find(".mk-animate-element")
                    .removeClass("mk-animate-element"), e(".mk-animate-element")
                    .one("inview", function (t, a) {
                        1 == a && e(this)
                            .addClass("mk-in-viewport")
                    })
            }), e(".mk-header-search, .mk-side-dashboard, .dashboard-trigger, .search-ajax-input")
            .click(function (e) {
                e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0)
            }), e("html")
            .click(function () {
                e(".header-search-icon")
                    .removeClass("search-clicked"), e("form.header-searchform-input")
                    .fadeOut(250), e("#mk-header")
                    .removeClass("header-search-triggered"), e(".dashboard-trigger")
                    .removeClass("dashboard-active"), e(".theme-main-wrapper, .mk-side-dashboard")
                    .removeClass("dashboard-opened")
            }), e(".header-search-icon")
            .on("click", function (t) {
                e("form.header-searchform-input")
                    .fadeIn(250), e("#mk-header")
                    .addClass("header-search-triggered"), e("form.header-searchform-input input[type=text]")
                    .focus(), t.preventDefault()
            }), e(".header-search-close")
            .on("click", function (t) {
                e("form.header-searchform-input")
                    .fadeOut(250), e("#mk-header")
                    .removeClass("header-search-triggered"), t.preventDefault()
            }), e(".dashboard-trigger")
            .on("click", function (t) {
                e(this)
                    .hasClass("dashboard-active") ? (e(this)
                        .removeClass("dashboard-active"), e(".theme-main-wrapper, .mk-side-dashboard")
                        .removeClass("dashboard-opened")) : (e(this)
                        .addClass("dashboard-active"), e(".theme-main-wrapper, .mk-side-dashboard")
                        .addClass("dashboard-opened")), t.preventDefault()
            }), e(".responsive-nav-link")
            .on("click", function (t) {
                e(this)
                    .hasClass("res-nav-opened") ? (e(this)
                        .removeClass("res-nav-opened"), e(".responsive-nav-container")
                        .slideUp(600)) : (e(this)
                        .addClass("res-nav-opened"), e(".responsive-nav-container")
                        .slideDown(600)), t.preventDefault()
            }), e(window)
            .on("debouncedresize", function (e) {
                setTimeout(function () {
                    u()
                }, 500)
            }), R(), e(document)
            .ready(function () {
                function t() {
                    e("body")
                        .on("click", ".mk-love-this", function () {
                            var t = e(this),
                                a = t.attr("id");
                            if (t.hasClass("item-loved")) return !1;
                            if (t.hasClass("item-inactive")) return !1;
                            var i = {
                                action: "mk_love_post",
                                post_id: a
                            };
                            return e.post(ajaxurl, i, function (e) {
                                t.find("span")
                                    .html(e), t.addClass("item-loved")
                            }), t.addClass("item-inactive"), !1
                        })
                }

                function r() {
                    e(".mk-shopping-cart")
                        .hoverIntent(function () {
                            e(".mk-shopping-box")
                                .fadeIn(200)
                        }, function () {
                            e(".mk-shopping-box")
                                .delay(500)
                                .fadeOut(200)
                        })
                }

                function R() {
                    var t = e("body");
                    t.on("click", ".add_to_cart_button", function () {
                        var t = e(this)
                            .parents(".product:eq(0)")
                            .addClass("adding-to-cart")
                            .removeClass("added-to-cart")
                    }), t.bind("added_to_cart", function () {
                        e(".adding-to-cart")
                            .removeClass("adding-to-cart")
                            .addClass("added-to-cart"), r()
                    })
                }

                function F(e) {
                    e.wrap("<div class='table-wrapper' />");
                    var t = e.clone();
                    t.find("td:not(:first-child), th:not(:first-child)")
                        .css("display", "none"), t.removeClass("shop_table"), e.closest(".table-wrapper")
                        .append(t), t.wrap("<div class='pinned' />"), e.wrap("<div class='scrollable' />"), Z(e, t)
                }

                function U(e) {
                    e.closest(".table-wrapper")
                        .find(".pinned")
                        .remove(), e.unwrap(), e.unwrap()
                }

                function Z(t, a) {
                    var i = t.find("tr"),
                        n = a.find("tr"),
                        o = [];
                    i.each(function (t) {
                        var a = e(this),
                            i = a.find("th, td");
                        i.each(function () {
                            var a = e(this)
                                .outerHeight(!0);
                            o[t] = o[t] || 0, a > o[t] && (o[t] = a)
                        })
                    }), n.each(function (t) {
                        e(this)
                            .height(o[t])
                    })
                }

                function K() {
                    e.exists(".search-ajax-input") && (e(".search-ajax-input")
                        .autocomplete({
                            delay: 50,
                            minLength: 2,
                            messages: {
                                noResults: "",
                                results: function () {}
                            },
                            appendTo: e(".header-searchform-input"),
                            source: function (t, a) {
                                e.getJSON(ajaxurl + "?callback=?&action=mk_ajax_search", t, a)
                            },
                            select: function (e, t) {
                                window.location.href = t.item.link
                            }
                        })
                        .data("ui-autocomplete")
                        ._renderItem = function (t, a) {
                            return e("<li>")
                                .append("<a>" + a.image + "<span class='search-title'>" + a.label + "</span><span class='search-date'>" + a.date + "</span></a>")
                                .appendTo(t)
                        })
                }

                function $() {
                    void 0 != e.tools.validator && (e.tools.validator.addEffect("contact_form", function (t) {
                            e.each(t, function (e, t) {
                                var a = t.input;
                                a.addClass("mk-invalid")
                            })
                        }, function (e) {
                            e.removeClass("mk-invalid")
                        }), e(".mk-contact-form")
                        .validator({
                            effect: "contact_form"
                        })
                        .submit(function (t) {
                            var a = e(this);
                            if (!t.isDefaultPrevented()) {
                                e(this)
                                    .find(".mk-contact-loading")
                                    .fadeIn("slow")
				    //.delay(8e3)
                                    //.fadeOut();
                                var i = {
                                    action: "mk_contact_form",
                                    to: e(this)
                                        .find('input[name="contact_to"]')
                                        .val()
                                        .replace("*", "@"),
                                    name: e(this)
                                        .find('input[name="contact_name"]')
                                        .val(),
                                    phone: e(this)
                                        .find('input[name="contact_phone"]')
                                        .val(),
                                    email: e(this)
                                        .find('input[name="contact_email"]')
                                        .val(),
                                    content: e(this)
                                        .find('textarea[name="contact_content"]')
                                        .val(),
				    plan: e(this)
                                        .find('input[name="contact_plan"]')
                                        .val()

                                };

                                e.post(ajaxurl, i, function (e) {
                                    a.find(".mk-contact-loading")
                                        .fadeOut("slow"), a.find(".mk-contact-success")
                                        .delay(2e3)
                                        .fadeIn("slow")
                                        .delay(8e3),
                                        //.fadeOut(),
					a.find("input[name=contact_email], input[name=contact_name], textarea")
                                        .val(""), setTimeout(function(){ var parent = $('form'); parent.$.fancybox.close(); }, 4000)
                                }), t.preventDefault()
                            }
                        }))
                }

                function J() {
                    e("form.mk-login-form")
                        .each(function () {
                            var t = e(this);
                            t.on("submit", function (a) {
                                e("p.mk-login-status", t)
                                    .show()
                                    .text(ajax_login_object.loadingmessage), e.ajax({
                                        type: "POST",
                                        dataType: "json",
                                        url: ajax_login_object.ajaxurl,
                                        data: {
                                            action: "ajaxlogin",
                                            username: e("#username", t)
                                                .val(),
                                            password: e("#password", t)
                                                .val(),
                                            security: e("#security", t)
                                                .val()
                                        },
                                        success: function (a) {
                                            e("p.mk-login-status", t)
                                                .text(a.message), a.loggedin === !0 && (document.location.href = ajax_login_object.redirecturl)
                                        }
                                    }), a.preventDefault()
                            })
                        })
                }

                function X() {
                    var t, a = e(".main-navigation-ul"),
                        i = a.find(".menu-item a"),
                        n = 0,
                        o = 0,
                        r = 0;
                    i.each(function () {
                        if (e(this)
                            .hasAttr("href")) var t = e(this)
                            .attr("href")
                            .split("#")[0];
                        else t = "";
                        t === window.location.href.split("#")[0] && "undefined" != typeof e(this)
                            .attr("href")
                            .split("#")[1] && "" !== t && (e(this)
                                .attr("href", "#" + e(this)
                                    .attr("href")
                                    .split("#")[1]), e(this)
                                .parent()
                                .removeClass("current-menu-item"))
                    });
                    var s = i.map(function () {
                        var t = e(this)
                            .attr("href");
                        return /^#\w/.test(t) && e(t)
                            .length ? e(t) : void 0
                    });
                    if (e.exists("#wpadminbar")) var r = e("#wpadminbar")
                        .height();
                    e.exists("#mk-header") && (o = parseInt(e("#mk-header")
                            .attr("data-sticky-height"))), e.exists(".mk-secondary-header") && (n = parseInt(e(".mk-secondary-header")
                            .attr("data-sticky-height"))), i.click(function (t) {
                            var a = e(this)
                                .attr("href");
                            if ("undefined" != typeof e(a)
                                .offset()) var i = e(a)
                                .offset()
                                .top;
                            else var i = 0;
                            var s = "#" === a ? 0 : i - (r + o + n - 2) + "px";
                            e("html, body")
                                .stop()
                                .animate({
                                    scrollTop: s
                                }, {
                                    duration: 800,
                                    easing: "easeInOutExpo"
                                }), t.preventDefault()
                        }), e(window)
                        .scroll(function () {
                            if (!s.length) return !1;
                            var a = e(this)
                                .scrollTop() + (r + o + n - 1),
                                d = s.map(function () {
                                    return e(this)
                                        .offset()
                                        .top < a ? this : void 0
                                });
                            d = d[d.length - 1];
                            var l = d && d.length ? d[0].id : "";
                            t !== l && (t = l, i.parent()
                                .removeClass("current-menu-item"), l.length && i.filter("[href=#" + l + "]")
                                .parent()
                                .addClass("current-menu-item"))
                        })
                }
                1 == mk_smooth_scroll_option && e(window)
                    .width() > 960 && e("body")
                    .outerHeight(!0) > e(window)
                    .height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && N(), L(), d(), s(), m(), n(), o(), T(), E(), h(), H(), f(), I(), P(), A(), q(), Q(), V(), e(window)
                    .load(function () {
                        B(), p(), C(), w(), y(), b(), i(), M(), z(), D(), x(), W(), g(), u(), k(), O(), S(), v(), l(), j(), c(), _(), a()
                    }), e(window)
                    .on("debouncedresize", function () {
                        y(), C(), w(), M(), d(), x(), i(), v(), l(), c(), k(), Q()
                    }), new ChopScroll(function () {
                        n(), c(), o(), e(this)
                            .scrollTop() > 700 ? e(".mk-go-top")
                            .removeClass("off")
                            .addClass("on") : e(".mk-go-top")
                            .removeClass("on")
                            .addClass("off")
                    }, 100), e(".mk-go-top, .mk-back-top-link")
                    .click(function () {
                        return e("html, body")
                            .animate({
                                scrollTop: 0
                            }, 800, "easeInOutExpo"), !1
                    }), t(), setTimeout(function () {
                        r()
                    }, 500), R();
                var G = !1,
                    Y = function () {
                        return e(window)
                            .width() < 767 && !G ? (G = !0, e("table.shop_table")
                                .each(function (t, a) {
                                    F(e(a))
                                }), !0) : void(G && e(window)
                                .width() > 767 && (G = !1, e("table.shop_table")
                                    .each(function (t, a) {
                                        U(e(a))
                                    })))
                    };
                e(window)
                    .load(Y), e(window)
                    .on("redraw", function () {
                        G = !1, Y()
                    }), e(window)
                    .on("resize", Y), e.exists("#wpadminbar") && e(".mk-side-dashboard")
                    .addClass("wpadminbar-exists"), K(), $(), e(this)
                    .find(".mk-form-row input, .comment-form-row input, .mk-login-form input")
                    .each(function () {
                        e(this)
                            .focusin(function () {
                                e(this)
                                    .siblings("i")
                                    .addClass("input-focused")
                            }), e(this)
                            .focusout(function () {
                                e(this)
                                    .siblings("i")
                                    .removeClass("input-focused")
                            })
                    }), J(), e(".mk-smooth, .blog-comments")
                    .bind("click", function (t) {
                        var a = 0,
                            i = 0,
                            n = 0;
                        if (e.exists("#wpadminbar")) var n = e("#wpadminbar")
                            .height();
                        if (e.exists("#mk-header") && !e("#mk-header")
                            .hasClass("transparent-header")) var i = parseInt(e("#mk-header")
                            .attr("data-sticky-height"));
                        if (e.exists(".mk-secondary-header")) var a = parseInt(e(".mk-secondary-header")
                            .attr("data-sticky-height"));
                        e("body, html")
                            .animate({
                                scrollTop: e(e(this)
                                        .attr("href"))
                                    .offset()
                                    .top - (n + i + a - 2) + "px"
                            }, {
                                duration: 1200,
                                easing: "easeInOutExpo"
                            }), t.preventDefault()
                    }), X()
            }), F()
    }(jQuery),
    function (e) {
        function t(a) {
            var i, n, o, r, s = /url\((.*)\)/,
                d = ["background-image", "-webkit-border-image"],
                l = {};
            if (a.styleSheets)
                for (i = 0; i < a.styleSheets.length; ++i) l = e.extend(l, t(a.styleSheets[i]));
            else if (a.cssRules)
                for (i = 0; i < a.cssRules.length; ++i)
                    if (o = a.cssRules[i], o.styleSheet) l = e.extend(l, t(o.styleSheet));
                    else if (o.style)
                for (n = 0; n < d.length; n++) r = s.exec(o.style.getPropertyValue(d[n])), r && 2 === r.length && (l[r[1]] = r[0]);
            return l
        }
        e.extend({
            preload: {
                images: function (a) {
                    a = a || document;
                    var i = e.map(t(a), function (e) {
                            return e
                        }),
                        n = a.getElementsByTagName("head")[0],
                        o = a.createElement("style");
                    o.type = "text/css", o.id = "preload", o.innerHTML = "body::after { content: " + i.join(" ") + "; display: none; }", n.appendChild(o)
                }
            }
        })
    }(jQuery),
    function (e) {
        function t() {
            var t = window.innerHeight,
                a = document.compatMode;
            return (a || !e.support.boxModel) && (t = "CSS1Compat" == a ? document.documentElement.clientHeight : document.body.clientHeight), t
        }

        function a() {
            var a = t(),
                i = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop,
                n = [];
            e.each(e.cache, function () {
                    this.events && this.events.inview && n.push(this.handle.elem)
                }), n.length && e(n)
                .each(function () {
                    var t = e(this),
                        n = t.offset()
                        .top + 150,
                        o = t.height(),
                        r = t.data("inview") || !1;
                    i > n + o || n > i + a ? r && (t.data("inview", !1), t.trigger("inview", [!1])) : n + o > i && (r || (t.data("inview", !0), t.trigger("inview", [!0])))
                })
        }
        a(), e(window)
            .scroll(function () {
                a()
            }), e(function () {
                e(window)
                    .load(function () {
                        a()
                    }), e(window)
                    .scroll()
            })
    }(jQuery),
    function (e, t, a, i) {
        var n = a("html"),
            o = a(e),
            r = a(t),
            s = a.fancybox = function () {
                s.open.apply(this, arguments)
            },
            d = navigator.userAgent.match(/msie/i),
            l = null,
            c = t.createTouch !== i,
            h = function (e) {
                return e && e.hasOwnProperty && e instanceof a
            },
            p = function (e) {
                return e && "string" === a.type(e)
            },
            f = function (e) {
                return p(e) && 0 < e.indexOf("%")
            },
            u = function (e, t) {
                var a = parseInt(e, 10) || 0;
                return t && f(e) && (a *= s.getViewport()[t] / 100), Math.ceil(a)
            },
            m = function (e, t) {
                return u(e, t) + "px"
            };
        a.extend(s, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !c,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (d ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i class="fa fa-times"></i></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: a.noop,
                beforeLoad: a.noop,
                afterLoad: a.noop,
                beforeShow: a.noop,
                afterShow: a.noop,
                beforeChange: a.noop,
                beforeClose: a.noop,
                afterClose: a.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function (e, t) {
                return e && (a.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) ? (a.isArray(e) || (e = h(e) ? a(e)
                    .get() : [e]), a.each(e, function (n, o) {
                    var r = {},
                        d, l, c, f, u;
                    "object" === a.type(o) && (o.nodeType && (o = a(o)), h(o) ? (r = {
                        href: o.data("fancybox-href") || o.attr("href"),
                        title: a("<div/>")
                            .text(o.data("fancybox-title") || o.attr("title"))
                            .html(),
                        isDom: !0,
                        element: o
                    }, a.metadata && a.extend(!0, r, o.metadata())) : r = o), d = t.href || r.href || (p(o) ? o : null), l = t.title !== i ? t.title : r.title || "", f = (c = t.content || r.content) ? "html" : t.type || r.type, !f && r.isDom && (f = o.data("fancybox-type"), f || (f = (f = o.prop("class")
                        .match(/fancybox\.(\w+)/)) ? f[1] : null)), p(d) && (f || (s.isImage(d) ? f = "image" : s.isSWF(d) ? f = "swf" : "#" === d.charAt(0) ? f = "inline" : p(o) && (f = "html", c = o)), "ajax" === f && (u = d.split(/\s+/, 2), d = u.shift(), u = u.shift())), c || ("inline" === f ? d ? c = a(p(d) ? d.replace(/.*(?=#[^\s]+$)/, "") : d) : r.isDom && (c = o) : "html" === f ? c = d : f || d || !r.isDom || (f = "inline", c = o)), a.extend(r, {
                        href: d,
                        type: f,
                        content: c,
                        title: l,
                        selector: u
                    }), e[n] = r
                }), s.opts = a.extend(!0, {}, s.defaults, t), t.keys !== i && (s.opts.keys = t.keys ? a.extend({}, s.defaults.keys, t.keys) : !1), s.group = e, s._start(s.opts.index)) : void 0
            },
            cancel: function () {
                var e = s.coming;
                e && !1 === s.trigger("onCancel") || (s.hideLoading(), e && (s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0)
                    .trigger("onReset")
                    .remove(), s.coming = null, s.current || s._afterZoomOut(e)))
            },
            close: function (e) {
                s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && !0 !== e ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, a(".fancybox-item, .fancybox-nav")
                    .remove(), s.wrap.stop(!0, !0)
                    .removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (a(".fancybox-wrap")
                    .stop(!0)
                    .trigger("onReset")
                    .remove(), s._afterZoomOut())))
            },
            play: function (e) {
                var t = function () {
                        clearTimeout(s.player.timer)
                    },
                    a = function () {
                        t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
                    },
                    i = function () {
                        t(), r.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
                    };
                !0 === e || !s.player.isActive && !1 !== e ? s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, r.bind({
                    "onCancel.player beforeClose.player": i,
                    "onUpdate.player": a,
                    "beforeLoad.player": t
                }), a(), s.trigger("onPlayStart")) : i()
            },
            next: function (e) {
                var t = s.current;
                t && (p(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
            },
            prev: function (e) {
                var t = s.current;
                t && (p(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function (e, t, a) {
                var n = s.current;
                n && (e = u(e), s.direction = t || n.direction[e >= n.index ? "next" : "prev"], s.router = a || "jumpto", n.loop && (0 > e && (e = n.group.length + e % n.group.length), e %= n.group.length), n.group[e] !== i && (s.cancel(), s._start(e)))
            },
            reposition: function (e, t) {
                var i = s.current,
                    n = i ? i.wrap : null,
                    o;
                n && (o = s._getPosition(t), e && "scroll" === e.type ? (delete o.position, n.stop(!0, !0)
                    .animate(o, 200)) : (n.css(o), i.pos = a.extend({}, i.dim, o)))
            },
            update: function (e) {
                var t = e && e.originalEvent && e.originalEvent.type,
                    a = !t || "orientationchange" === t;
                a && (clearTimeout(l), l = null), s.isOpen && !l && (l = setTimeout(function () {
                    var i = s.current;
                    i && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (a || "load" === t || "resize" === t && i.autoResize) && s._setDimension(), "scroll" === t && i.canShrink || s.reposition(e), s.trigger("onUpdate"), l = null)
                }, a && !c ? 0 : 300))
            },
            toggle: function (e) {
                s.isOpen && (s.current.fitToView = "boolean" === a.type(e) ? e : !s.current.fitToView, c && (s.wrap.removeAttr("style")
                    .addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
            },
            hideLoading: function () {
                r.unbind(".loading"), a("#fancybox-loading")
                    .remove()
            },
            showLoading: function () {
                var e, t;
                s.hideLoading(), e = a('<div id="fancybox-loading"><div></div></div>')
                    .click(s.cancel)
                    .appendTo("body"), r.bind("keydown.loading", function (e) {
                        27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
                    }), s.defaults.fixed || (t = s.getViewport(), e.css({
                        position: "absolute",
                        top: .5 * t.h + t.y,
                        left: .5 * t.w + t.x
                    })), s.trigger("onLoading")
            },
            getViewport: function () {
                var t = s.current && s.current.locked || !1,
                    a = {
                        x: o.scrollLeft(),
                        y: o.scrollTop()
                    };
                return t && t.length ? (a.w = t[0].clientWidth, a.h = t[0].clientHeight) : (a.w = c && e.innerWidth ? e.innerWidth : o.width(), a.h = c && e.innerHeight ? e.innerHeight : o.height()), a
            },
            unbindEvents: function () {
                s.wrap && h(s.wrap) && s.wrap.unbind(".fb"), r.unbind(".fb"), o.unbind(".fb")
            },
            bindEvents: function () {
                var e = s.current,
                    t;
                e && (o.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), s.update), (t = e.keys) && r.bind("keydown.fb", function (n) {
                    var o = n.which || n.keyCode,
                        r = n.target || n.srcElement;
                    return 27 === o && s.coming ? !1 : void(n.ctrlKey || n.altKey || n.shiftKey || n.metaKey || r && (r.type || a(r)
                        .is("[contenteditable]")) || a.each(t, function (t, r) {
                        return 1 < e.group.length && r[o] !== i ? (s[t](r[o]), n.preventDefault(), !1) : -1 < a.inArray(o, r) ? (s[t](), n.preventDefault(), !1) : void 0
                    }))
                }), a.fn.mousewheel && e.mouseWheel && s.wrap.bind("mousewheel.fb", function (t, i, n, o) {
                    for (var r = a(t.target || null), d = !1; r.length && !(d || r.is(".fancybox-skin") || r.is(".fancybox-wrap"));) d = r[0] && !(r[0].style.overflow && "hidden" === r[0].style.overflow) && (r[0].clientWidth && r[0].scrollWidth > r[0].clientWidth || r[0].clientHeight && r[0].scrollHeight > r[0].clientHeight), r = a(r)
                        .parent();
                    0 !== i && !d && 1 < s.group.length && !e.canShrink && (o > 0 || n > 0 ? s.prev(o > 0 ? "down" : "left") : (0 > o || 0 > n) && s.next(0 > o ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function (e, t) {
                var i, n = t || s.coming || s.current;
                if (n) {
                    if (a.isFunction(n[e]) && (i = n[e].apply(n, Array.prototype.slice.call(arguments, 1))), !1 === i) return !1;
                    n.helpers && a.each(n.helpers, function (t, i) {
                        i && s.helpers[t] && a.isFunction(s.helpers[t][e]) && s.helpers[t][e](a.extend(!0, {}, s.helpers[t].defaults, i), n)
                    })
                }
                r.trigger(e)
            },
            isImage: function (e) {
                return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function (e) {
                return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function (e) {
                var t = {},
                    i, n;
                if (e = u(e), i = s.group[e] || null, !i) return !1;
                if (t = a.extend(!0, {}, s.opts, i), i = t.margin, n = t.padding, "number" === a.type(i) && (t.margin = [i, i, i, i]), "number" === a.type(n) && (t.padding = [n, n, n, n]), t.modal && a.extend(!0, t, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), t.autoSize && (t.autoWidth = t.autoHeight = !0), "auto" === t.width && (t.autoWidth = !0), "auto" === t.height && (t.autoHeight = !0), t.group = s.group, t.index = e, s.coming = t, !1 === s.trigger("beforeLoad")) s.coming = null;
                else {
                    if (n = t.type, i = t.href, !n) return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = e, s[s.router](s.direction)) : !1;
                    if (s.isActive = !0, ("image" === n || "swf" === n) && (t.autoHeight = t.autoWidth = !1, t.scrolling = "visible"), "image" === n && (t.aspectRatio = !0), "iframe" === n && c && (t.scrolling = "scroll"), t.wrap = a(t.tpl.wrap)
                        .addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + t.wrapCSS)
                        .appendTo(t.parent || "body"), a.extend(t, {
                            skin: a(".fancybox-skin", t.wrap),
                            outer: a(".fancybox-outer", t.wrap),
                            inner: a(".fancybox-inner", t.wrap)
                        }), a.each(["Top", "Right", "Bottom", "Left"], function (e, a) {
                            t.skin.css("padding" + a, m(t.padding[e]))
                        }), s.trigger("onReady"), "inline" === n || "html" === n) {
                        if (!t.content || !t.content.length) return s._error("content")
                    } else if (!i) return s._error("href");
                    "image" === n ? s._loadImage() : "ajax" === n ? s._loadAjax() : "iframe" === n ? s._loadIframe() : s._afterLoad()
                }
            },
            _error: function (e) {
                a.extend(s.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: s.coming.tpl.error
                }), s._afterLoad()
            },
            _loadImage: function () {
                var e = s.imgPreload = new Image;
                e.onload = function () {
                    this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
                }, e.onerror = function () {
                    this.onload = this.onerror = null, s._error("image")
                }, e.src = s.coming.href, !0 !== e.complete && s.showLoading()
            },
            _loadAjax: function () {
                var e = s.coming;
                s.showLoading(), s.ajaxLoad = a.ajax(a.extend({}, e.ajax, {
                    url: e.href,
                    error: function (e, t) {
                        s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                    },
                    success: function (t, a) {
                        "success" === a && (e.content = t, s._afterLoad())
                    }
                }))
            },
            _loadIframe: function () {
                var e = s.coming,
                    t = a(e.tpl.iframe.replace(/\{rnd\}/g, (new Date)
                        .getTime()))
                    .attr("scrolling", c ? "auto" : e.iframe.scrolling)
                    .attr("src", e.href);
                a(e.wrap)
                    .bind("onReset", function () {
                        try {
                            a(this)
                                .find("iframe")
                                .hide()
                                .attr("src", "//about:blank")
                                .end()
                                .empty()
                        } catch (e) {}
                    }), e.iframe.preload && (s.showLoading(), t.one("load", function () {
                        a(this)
                            .data("ready", 1), c || a(this)
                            .bind("load.fb", s.update), a(this)
                            .parents(".fancybox-wrap")
                            .width("100%")
                            .removeClass("fancybox-tmp")
                            .show(), s._afterLoad()
                    })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
            },
            _preloadImages: function () {
                var e = s.group,
                    t = s.current,
                    a = e.length,
                    i = t.preload ? Math.min(t.preload, a - 1) : 0,
                    n, o;
                for (o = 1; i >= o; o += 1) n = e[(t.index + o) % a], "image" === n.type && n.href && ((new Image)
                    .src = n.href)
            },
            _afterLoad: function () {
                var e = s.coming,
                    t = s.current,
                    i, n, o, r, d;
                if (s.hideLoading(), e && !1 !== s.isActive)
                    if (!1 === s.trigger("afterLoad", e, t)) e.wrap.stop(!0)
                        .trigger("onReset")
                        .remove(), s.coming = null;
                    else {
                        switch (t && (s.trigger("beforeChange", t), t.wrap.stop(!0)
                            .removeClass("fancybox-opened")
                            .find(".fancybox-item, .fancybox-nav")
                            .remove()), s.unbindEvents(), i = e.content, n = e.type, o = e.scrolling, a.extend(s, {
                            wrap: e.wrap,
                            skin: e.skin,
                            outer: e.outer,
                            inner: e.inner,
                            current: e,
                            previous: t
                        }), r = e.href, n) {
                        case "inline":
                        case "ajax":
                        case "html":
                            e.selector ? i = a("<div>")
                                .html(i)
                                .find(e.selector) : h(i) && (i.data("fancybox-placeholder") || i.data("fancybox-placeholder", a('<div class="fancybox-placeholder"></div>')
                                        .insertAfter(i)
                                        .hide()), i = i.show()
                                    .detach(), e.wrap.bind("onReset", function () {
                                        a(this)
                                            .find(i)
                                            .length && i.hide()
                                            .replaceAll(i.data("fancybox-placeholder"))
                                            .data("fancybox-placeholder", !1)
                                    }));
                            break;
                        case "image":
                            i = e.tpl.image.replace(/\{href\}/g, r);
                            break;
                        case "swf":
                            i = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>', d = "", a.each(e.swf, function (e, t) {
                                i += '<param name="' + e + '" value="' + t + '"></param>', d += " " + e + '="' + t + '"'
                            }), i += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + d + "></embed></object>"
                        }
                        h(i) && i.parent()
                            .is(e.inner) || e.inner.append(i), s.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? t.prevMethod && s.transitions[t.prevMethod]() : a(".fancybox-wrap")
                            .not(e.wrap)
                            .stop(!0)
                            .trigger("onReset")
                            .remove(), s.transitions[s.isOpened ? e.nextMethod : e.openMethod](), s._preloadImages()
                    }
            },
            _setDimension: function () {
                var e = s.getViewport(),
                    t = 0,
                    i = !1,
                    n = !1,
                    i = s.wrap,
                    o = s.skin,
                    r = s.inner,
                    d = s.current,
                    n = d.width,
                    l = d.height,
                    c = d.minWidth,
                    h = d.minHeight,
                    p = d.maxWidth,
                    g = d.maxHeight,
                    v = d.scrolling,
                    w = d.scrollOutside ? d.scrollbarWidth : 0,
                    k = d.margin,
                    y = u(k[1] + k[3]),
                    x = u(k[0] + k[2]),
                    b, C, _, j, T, I, O, S, H;
                if (i.add(o)
                    .add(r)
                    .width("auto")
                    .height("auto")
                    .removeClass("fancybox-tmp"), k = u(o.outerWidth(!0) - o.width()), b = u(o.outerHeight(!0) - o.height()), C = y + k, _ = x + b, j = f(n) ? (e.w - C) * u(n) / 100 : n, T = f(l) ? (e.h - _) * u(l) / 100 : l, "iframe" === d.type) {
                    if (H = d.content, d.autoHeight && 1 === H.data("ready")) try {
                        H[0].contentWindow.document.location && (r.width(j)
                            .height(9999), I = H.contents()
                            .find("body"), w && I.css("overflow-x", "hidden"), T = I.outerHeight(!0))
                    } catch (L) {}
                } else(d.autoWidth || d.autoHeight) && (r.addClass("fancybox-tmp"), d.autoWidth || r.width(j), d.autoHeight || r.height(T), d.autoWidth && (j = r.width()), d.autoHeight && (T = r.height()), r.removeClass("fancybox-tmp"));
                if (n = u(j), l = u(T), S = j / T, c = u(f(c) ? u(c, "w") - C : c), p = u(f(p) ? u(p, "w") - C : p), h = u(f(h) ? u(h, "h") - _ : h), g = u(f(g) ? u(g, "h") - _ : g), I = p, O = g, d.fitToView && (p = Math.min(e.w - C, p), g = Math.min(e.h - _, g)), C = e.w - y, x = e.h - x, d.aspectRatio ? (n > p && (n = p, l = u(n / S)), l > g && (l = g, n = u(l * S)), c > n && (n = c, l = u(n / S)), h > l && (l = h, n = u(l * S))) : (n = Math.max(c, Math.min(n, p)), d.autoHeight && "iframe" !== d.type && (r.width(n), l = r.height()), l = Math.max(h, Math.min(l, g))), d.fitToView)
                    if (r.width(n)
                        .height(l), i.width(n + k), e = i.width(), y = i.height(), d.aspectRatio)
                        for (;
                            (e > C || y > x) && n > c && l > h && !(19 < t++);) l = Math.max(h, Math.min(g, l - 10)), n = u(l * S), c > n && (n = c, l = u(n / S)), n > p && (n = p, l = u(n / S)), r.width(n)
                            .height(l), i.width(n + k), e = i.width(), y = i.height();
                    else n = Math.max(c, Math.min(n, n - (e - C))), l = Math.max(h, Math.min(l, l - (y - x)));
                w && "auto" === v && T > l && C > n + k + w && (n += w), r.width(n)
                    .height(l), i.width(n + k), e = i.width(), y = i.height(), i = (e > C || y > x) && n > c && l > h, n = d.aspectRatio ? I > n && O > l && j > n && T > l : (I > n || O > l) && (j > n || T > l), a.extend(d, {
                        dim: {
                            width: m(e),
                            height: m(y)
                        },
                        origWidth: j,
                        origHeight: T,
                        canShrink: i,
                        canExpand: n,
                        wPadding: k,
                        hPadding: b,
                        wrapSpace: y - o.outerHeight(!0),
                        skinSpace: o.height() - l
                    }), !H && d.autoHeight && l > h && g > l && !n && r.height("auto")
            },
            _getPosition: function (e) {
                var t = s.current,
                    a = s.getViewport(),
                    i = t.margin,
                    n = s.wrap.width() + i[1] + i[3],
                    o = s.wrap.height() + i[0] + i[2],
                    i = {
                        position: "absolute",
                        top: i[0],
                        left: i[3]
                    };
                return t.autoCenter && t.fixed && !e && o <= a.h && n <= a.w ? i.position = "fixed" : t.locked || (i.top += a.y, i.left += a.x), i.top = m(Math.max(i.top, i.top + (a.h - o) * t.topRatio)), i.left = m(Math.max(i.left, i.left + (a.w - n) * t.leftRatio)), i
            },
            _afterZoomIn: function () {
                var e = s.current;
                e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible")
                    .addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && 1 < s.group.length) && s.inner.css("cursor", "pointer")
                    .bind("click.fb", function (t) {
                        a(t.target)
                            .is("a") || a(t.target)
                            .parent()
                            .is("a") || (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
                    }), e.closeBtn && a(e.tpl.closeBtn)
                    .appendTo(s.skin)
                    .bind("click.fb", function (e) {
                        e.preventDefault(), s.close()
                    }), e.arrows && 1 < s.group.length && ((e.loop || 0 < e.index) && a(e.tpl.prev)
                        .appendTo(s.outer)
                        .bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && a(e.tpl.next)
                        .appendTo(s.outer)
                        .bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play(!0)) : s.play(!1))
            },
            _afterZoomOut: function (e) {
                e = e || s.current, a(".fancybox-wrap")
                    .trigger("onReset")
                    .remove(), a.extend(s, {
                        group: {},
                        opts: {},
                        router: !1,
                        current: null,
                        isActive: !1,
                        isOpened: !1,
                        isOpen: !1,
                        isClosing: !1,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null
                    }), s.trigger("afterClose", e)
            }
        }), s.transitions = {
            getOrigPosition: function () {
                var e = s.current,
                    t = e.element,
                    a = e.orig,
                    i = {},
                    n = 50,
                    o = 50,
                    r = e.hPadding,
                    d = e.wPadding,
                    l = s.getViewport();
                return !a && e.isDom && t.is(":visible") && (a = t.find("img:first"), a.length || (a = t)), h(a) ? (i = a.offset(), a.is("img") && (n = a.outerWidth(), o = a.outerHeight())) : (i.top = l.y + (l.h - o) * e.topRatio, i.left = l.x + (l.w - n) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (i.top -= l.y, i.left -= l.x), i = {
                    top: m(i.top - r * e.topRatio),
                    left: m(i.left - d * e.leftRatio),
                    width: m(n + d),
                    height: m(o + r)
                }
            },
            step: function (e, t) {
                var a, i, n = t.prop;
                i = s.current;
                var o = i.wrapSpace,
                    r = i.skinSpace;
                ("width" === n || "height" === n) && (a = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (a = 1 - a), i = "width" === n ? i.wPadding : i.hPadding, i = e - i, s.skin[n](u("width" === n ? i : i - o * a)), s.inner[n](u("width" === n ? i : i - o * a - r * a)))
            },
            zoomIn: function () {
                var e = s.current,
                    t = e.pos,
                    i = e.openEffect,
                    n = "elastic" === i,
                    o = a.extend({
                        opacity: 1
                    }, t);
                delete o.position, n ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), s.wrap.css(t)
                    .animate(o, {
                        duration: "none" === i ? 0 : e.openSpeed,
                        easing: e.openEasing,
                        step: n ? this.step : null,
                        complete: s._afterZoomIn
                    })
            },
            zoomOut: function () {
                var e = s.current,
                    t = e.closeEffect,
                    a = "elastic" === t,
                    i = {
                        opacity: .1
                    };
                a && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), s.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: a ? this.step : null,
                    complete: s._afterZoomOut
                })
            },
            changeIn: function () {
                var e = s.current,
                    t = e.nextEffect,
                    a = e.pos,
                    i = {
                        opacity: 1
                    },
                    n = s.direction,
                    o;
                a.opacity = .1, "elastic" === t && (o = "down" === n || "up" === n ? "top" : "left", "down" === n || "right" === n ? (a[o] = m(u(a[o]) - 200), i[o] = "+=200px") : (a[o] = m(u(a[o]) + 200), i[o] = "-=200px")), "none" === t ? s._afterZoomIn() : s.wrap.css(a)
                    .animate(i, {
                        duration: e.nextSpeed,
                        easing: e.nextEasing,
                        complete: s._afterZoomIn
                    })
            },
            changeOut: function () {
                var e = s.previous,
                    t = e.prevEffect,
                    i = {
                        opacity: .1
                    },
                    n = s.direction;
                "elastic" === t && (i["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"), e.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function () {
                        a(this)
                            .trigger("onReset")
                            .remove()
                    }
                })
            }
        }, s.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !c,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: a("html"),
            create: function (e) {
                var t;
                e = a.extend({}, this.defaults, e), this.overlay && this.close(), t = s.coming ? s.coming.parent : e.parent, this.overlay = a('<div class="fancybox-overlay"></div>')
                    .appendTo(t && t.lenth ? t : "body"), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function (e) {
                var t = this;
                e = a.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay")
                    .width("auto")
                    .height("auto") : this.create(e), this.fixed || (o.bind("resize.overlay", a.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
                        return a(e.target)
                            .hasClass("fancybox-overlay") ? (s.isActive ? s.close() : t.close(), !1) : void 0
                    }), this.overlay.css(e.css)
                    .show()
            },
            close: function () {
                o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (a(".fancybox-margin")
                        .removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), o.scrollTop(this.scrollV)
                        .scrollLeft(this.scrollH)), a(".fancybox-overlay")
                    .remove()
                    .hide(), a.extend(this, {
                        overlay: null,
                        fixed: !1
                    })
            },
            update: function () {
                var e = "100%",
                    a;
                this.overlay.width(e)
                    .height("100%"), d ? (a = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > a && (e = r.width())) : r.width() > o.width() && (e = r.width()), this.overlay.width(e)
                    .height(r.height())
            },
            onReady: function (e, t) {
                var i = this.overlay;
                a(".fancybox-overlay")
                    .stop(!0, !0), i || this.create(e), e.locked && this.fixed && t.fixed && (t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function (e, t) {
                t.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && a("*")
                    .filter(function () {
                        return "fixed" === a(this)
                            .css("position") && !a(this)
                            .hasClass("fancybox-overlay") && !a(this)
                            .hasClass("fancybox-wrap")
                    })
                    .addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = o.scrollTop(), this.scrollH = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(this.scrollV)
                    .scrollLeft(this.scrollH)), this.open(e)
            },
            onUpdate: function () {
                this.fixed || this.update()
            },
            afterClose: function (e) {
                this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, a.proxy(this.close, this))
            }
        }, s.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function (e) {
                var t = s.current,
                    i = t.title,
                    n = e.type;
                if (a.isFunction(i) && (i = i.call(t.element, t)), p(i) && "" !== a.trim(i)) {
                    switch (t = a('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + i + "</div>"), n) {
                    case "inside":
                        n = s.skin;
                        break;
                    case "outside":
                        n = s.wrap;
                        break;
                    case "over":
                        n = s.inner;
                        break;
                    default:
                        n = s.skin, t.appendTo("body"), d && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(u(t.css("margin-bottom")))
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](n)
                }
            }
        }, a.fn.fancybox = function (e) {
            var t, i = a(this),
                n = this.selector || "",
                o = function (o) {
                    var r = a(this)
                        .blur(),
                        d = t,
                        l, c;
                    o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r.is(".fancybox-wrap") || (l = e.groupAttr || "data-fancybox-group", c = r.attr(l), c || (l = "rel", c = r.get(0)[l]), c && "" !== c && "nofollow" !== c && (r = n.length ? a(n) : i, r = r.filter("[" + l + '="' + c + '"]'), d = r.index(this)), e.index = d, !1 !== s.open(r, e) && o.preventDefault())
                };
            return e = e || {}, t = e.index || 0, n && !1 !== e.live ? r.undelegate(n, "click.fb-start")
                .delegate(n + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : i.unbind("click.fb-start")
                .bind("click.fb-start", o), this.filter("[data-fancybox-start=1]")
                .trigger("click"), this
        }, r.ready(function () {
            var t, o;
            a.scrollbarWidth === i && (a.scrollbarWidth = function () {
                    var e = a('<div style="width:50px;height:50px;overflow:auto"><div/></div>')
                        .appendTo("body"),
                        t = e.children(),
                        t = t.innerWidth() - t.height(99)
                        .innerWidth();
                    return e.remove(), t
                }), a.support.fixedPosition === i && (a.support.fixedPosition = function () {
                    var e = a('<div style="position:fixed;top:20px;"></div>')
                        .appendTo("body"),
                        t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                    return e.remove(), t
                }()), a.extend(s.defaults, {
                    scrollbarWidth: a.scrollbarWidth(),
                    fixed: a.support.fixedPosition,
                    parent: a("body")
                }), t = a(e)
                .width(), n.addClass("fancybox-lock-test"), o = a(e)
                .width(), n.removeClass("fancybox-lock-test"), a("<style type='text/css'>.fancybox-margin{margin-right:" + (o - t) + "px;}</style>")
                .appendTo("head")
        })
    }(window, document, jQuery);