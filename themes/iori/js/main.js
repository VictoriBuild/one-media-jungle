(() => {
    var e = e || {};
    if (window.ioriTheme = e, e.showError = function(e) {
            toastr.error(e)
        }, e.showSuccess = function(e) {
            toastr.success(e)
        }, e.handleError = function(i) {
            void 0 !== i.errors && i.errors.length ? e.handleValidationError(i.errors) : void 0 !== i.responseJSON ? void 0 !== i.responseJSON.errors ? 422 === i.status && e.handleValidationError(i.responseJSON.errors) : void 0 !== i.responseJSON.message ? e.showError(i.responseJSON.message) : $.each(i.responseJSON, (function(i, s) {
                $.each(s, (function(i, s) {
                    e.showError(s)
                }))
            })) : e.showError(i.statusText)
        }, e.handleValidationError = function(i) {
            var s = "";
            $.each(i, (function(e, i) {
                "" !== s && (s += "<br />"), s += i
            })), e.showError(s)
        }, function(e) {
            e(window).on("load", (function() {
                e("#preloader-active").fadeOut("slow")
            }));
            var i = e(".sticky-bar");
            (s = e(window)).on("scroll", (function() {
                s.scrollTop() < 200 ? (i.removeClass("stick"), e(".header-style-2 .categories-dropdown-active-large").removeClass("open"), e(".header-style-2 .categories-button-active").removeClass("open")) : i.addClass("stick")
            }));
            var s, o, n, t, r = e(".sidebar-left");
            ((s = e(window)).on("scroll", (function() {
                s.scrollTop() < 760 ? r.removeClass("stick") : r.addClass("stick")
            })), e.scrollUp({
                scrollText: '<i class="fi-rr-arrow-small-up"></i>',
                easingType: "linear",
                scrollSpeed: 900,
                animation: "fade"
            }), (new WOW).init(), e(".sticky-sidebar").length && e(".sticky-sidebar").theiaStickySidebar(), e(".categories-button-active").length) && e(".categories-button-active").on("click", (function(i) {
                i.preventDefault(), e(this).hasClass("open") ? (e(this).removeClass("open"), e(this).siblings(".categories-dropdown-active-large").removeClass("open")) : (e(this).addClass("open"), e(this).siblings(".categories-dropdown-active-large").addClass("open"))
            }));
            e(".select-active").length && e(".select-active").select2(), e(".count").length && e(".count").counterUp({
                    delay: 10,
                    time: 600
                }), e(".counter").length && e(".counter").counterUp({
                    delay: 10,
                    time: 600
                }), e(".grid").length && e(".grid").imagesLoaded((function() {
                    e(".grid").isotope({
                        itemSelector: ".grid-item",
                        percentPosition: !0,
                        layoutMode: "masonry",
                        masonry: {
                            columnWidth: ".grid-item"
                        }
                    })
                })), o = e(".search-active"), n = e(".search-close"), t = e(".main-search-active"), o.on("click", (function(e) {
                    e.preventDefault(), t.addClass("search-visible")
                })), n.on("click", (function() {
                    t.removeClass("search-visible")
                })),
                function() {
                    var i = e(".burger-icon"),
                        s = e(".mobile-menu-close"),
                        o = e(".mobile-header-active"),
                        n = e("body");
                    n.prepend('<div class="body-overlay-1"></div>'), i.on("click", (function(e) {
                        i.toggleClass("burger-close"), e.preventDefault(), o.toggleClass("sidebar-visible"), n.toggleClass("mobile-menu-active"), window.scrollTo(0, 0)
                    })), s.on("click", (function() {
                        o.removeClass("sidebar-visible"), n.removeClass("mobile-menu-active")
                    })), e(".body-overlay-1").on("click", (function() {
                        o.removeClass("sidebar-visible"), n.removeClass("mobile-menu-active"), i.removeClass("burger-close")
                    }))
                }();
            var a = e(".mobile-menu"),
                l = a.find(".sub-menu");
            l.parent().prepend('<span class="menu-expand"><svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>'), l.slideUp(), a.on("click", "li a, li .menu-expand", (function(i) {
                var s = e(this);
                s.parent().attr("class").match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ("#" === s.attr("href") || s.hasClass("menu-expand")) && (i.preventDefault(), s.siblings("ul:visible").length ? (s.parent("li").removeClass("active"), s.siblings("ul").slideUp()) : (s.parent("li").addClass("active"), s.closest("li").siblings("li").removeClass("active").find("li").removeClass("active"), s.closest("li").siblings("li").find("ul:visible").slideUp(), s.siblings("ul").slideDown()))
            })), e(".mobile-language-active").on("click", (function(i) {
                i.preventDefault(), e(".lang-dropdown-active").slideToggle(900)
            })), e(".categories-button-active-2").on("click", (function(i) {
                i.preventDefault(), e(".categori-dropdown-active-small").slideToggle(900)
            }));
            var c = e(".tm-demo-options-wrapper");
            e(".view-demo-btn-active").on("click", (function(e) {
                e.preventDefault(), c.toggleClass("demo-open")
            })), e(".more_slide_open").slideUp(), e(".more_categories").on("click", (function() {
                e(this).toggleClass("show"), e(".more_slide_open").slideToggle()
            })), e(".swiper-group-8").each((function() {
                new Swiper(this, {
                    spaceBetween: 30,
                    slidesPerView: 8,
                    slidesPerGroup: 3,
                    loop: !0,
                    pagination: {
                        el: ".swiper-pagination-group-8",
                        clickable: !0
                    },
                    autoplay: {
                        delay: 1e4
                    },
                    breakpoints: {
                        1199: {
                            slidesPerView: 8
                        },
                        800: {
                            slidesPerView: 6
                        },
                        600: {
                            slidesPerView: 5
                        },
                        400: {
                            slidesPerView: 4
                        },
                        350: {
                            slidesPerView: 2
                        },
                        150: {
                            slidesPerView: 2
                        }
                    }
                })
            })), e(".swiper-group-7-center").each((function() {
                new Swiper(this, {
                    spaceBetween: 30,
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                    centeredSlides: !0,
                    loop: !0,
                    navigation: {
                        nextEl: ".swiper-button-next-group-4",
                        prevEl: ".swiper-button-prev-group-4"
                    },
                    pagination: {
                        el: ".swiper-pagination-group-4",
                        clickable: !0
                    },
                    autoplay: {
                        delay: 1e4
                    },
                    breakpoints: {
                        1399: {
                            slidesPerView: 6
                        },
                        1100: {
                            slidesPerView: 4
                        },
                        850: {
                            slidesPerView: 3
                        },
                        600: {
                            slidesPerView: 2
                        },
                        150: {
                            slidesPerView: 1
                        }
                    }
                })
            })), e(".swiper-group-4").each((function() {
                new Swiper(this, {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    loop: !0,
                    navigation: {
                        nextEl: ".swiper-button-next-group-4",
                        prevEl: ".swiper-button-prev-group-4"
                    },
                    pagination: {
                        el: ".swiper-pagination-group-4",
                        clickable: !0
                    },
                    autoplay: {
                        delay: 1e4
                    },
                    breakpoints: {
                        1399: {
                            slidesPerView: 4
                        },
                        1100: {
                            slidesPerView: 3
                        },
                        780: {
                            slidesPerView: 2
                        },
                        500: {
                            slidesPerView: 1
                        },
                        400: {
                            slidesPerView: 1
                        },
                        350: {
                            slidesPerView: 1
                        },
                        150: {
                            slidesPerView: 1
                        }
                    }
                })
            })), e(".swiper-group-3").each((function() {
                new Swiper(this, {
                    spaceBetween: 30,
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    loop: !0,
                    navigation: {
                        nextEl: ".swiper-button-next-group-3",
                        prevEl: ".swiper-button-prev-group-3"
                    },
                    pagination: {
                        el: ".swiper-pagination-group-3",
                        clickable: !0
                    },
                    autoplay: {
                        delay: 1e4
                    },
                    breakpoints: {
                        1199: {
                            slidesPerView: 3
                        },
                        800: {
                            slidesPerView: 2
                        },
                        600: {
                            slidesPerView: 1
                        },
                        400: {
                            slidesPerView: 1
                        },
                        250: {
                            slidesPerView: 1
                        }
                    }
                })
            })), e(".swiper-group-2").each((function() {
                new Swiper(this, {
                    spaceBetween: 30,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    loop: !0,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0
                    },
                    autoplay: {
                        delay: 1e4
                    },
                    breakpoints: {
                        1199: {
                            slidesPerView: 2
                        },
                        1e3: {
                            slidesPerView: 2
                        },
                        800: {
                            slidesPerView: 1
                        },
                        600: {
                            slidesPerView: 1
                        },
                        400: {
                            slidesPerView: 1
                        },
                        350: {
                            slidesPerView: 1
                        }
                    }
                })
            })), e(".swiper-group-1").each((function() {
                new Swiper(this, {
                    slidesPerView: 1,
                    loop: !0,
                    navigation: {
                        nextEl: ".swiper-button-next-group-1",
                        prevEl: ".swiper-button-prev-group-1"
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0
                    },
                    autoplay: {
                        delay: 1e4
                    }
                })
            })), e(".swiper-notify").each((function() {
                new Swiper(this, {
                    slidesPerView: 1,
                    loop: !0,
                    navigation: {
                        nextEl: ".swiper-button-next-notify",
                        prevEl: ".swiper-button-prev-notify"
                    },
                    pagination: {
                        el: ".swiper-pagination-notify",
                        clickable: !0
                    },
                    autoplay: {
                        delay: 1e4
                    }
                })
            })), e(".popup-youtube").length && e(".popup-youtube").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), e("[data-countdown]").each((function() {
                var i = e(this),
                    s = e(this).data("countdown");
                i.countdown(s, (function(i) {
                    e(this).html(i.strftime('<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%D</span><span class="countdown-period lh-14 font-xs"> days </span></span><span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%H</span><span class="countdown-period font-xs lh-14"> hour </span></span><span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%M</span><span class="countdown-period font-xs lh-14"> min </span></span><span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%S</span><span class="countdown-period font-xs lh-14"> sec </span></span>'))
                }))
            })), e(window).width() < 992 && (e(".menu-texts li.has-children > a").removeAttr("href"), e(".menu-texts li.has-children > a").on("click", (function(i) {
                e(this).parent().toggleClass("submenu-open"), e(this).parent().siblings().removeClass("submenu-open")
            }))), e(".btn-close").on("click", (function() {
                e(".box-notify").hide((function() {
                    e(".sidebar-left").css("top", "")
                }))
            }));
            e(document).on("click", (function(i) {
                var s = e(".box-dropdown-cart");
                s === i.target || s.has(i.target).length || (e(".dropdown-account").removeClass("dropdown-open"), e(".dropdown-cart").removeClass("dropdown-open"))
            })), e(".icon-account").on("click", (function() {
                e(".dropdown-account").toggleClass("dropdown-open")
            })), e(".icon-cart").on("click", (function() {
                e(".dropdown-cart").toggleClass("dropdown-open")
            })), e(".change-price-plan li a").on("click", (function(i) {
                var s, o, n;
                i.preventDefault(), e(".change-price-plan li a").removeClass("active"), e(this).addClass("active"), "monthly" == e(this).attr("data-type") ? (s = e(".price-plan").find(".box-price"), o = s.find(".month_price"), n = s.find(".year_price"), o.each((function(i, s) {
                    e(s).show()
                })), n.each((function(i, s) {
                    e(s).hide()
                }))) : function() {
                    var i = e(".price-plan").find(".box-price"),
                        s = i.find(".month_price"),
                        o = i.find(".year_price");
                    s.each((function(i, s) {
                        e(s).hide()
                    })), o.each((function(i, s) {
                        e(s).show()
                    }))
                }()
            })), e(".change-media li a").on("click", (function(i) {
                i.preventDefault(), e(".change-media li a").removeClass("active"), e(this).addClass("active");
                var s = e(this).attr("data-type");
                e(".social-media").hide(), e("." + s).show()
            })), e(".enterprise").hide(), e(".button-click").on("click", (function(i) {
                i.preventDefault(), e(".button-click").removeClass("active"), e(this).addClass("active")
            })), e(".product-image-slider").length > 0 && e(".product-image-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                fade: !1,
                asNavFor: ".slider-nav-thumbnails",
                rtl: window.isRtl
            }), e(".slider-nav-thumbnails").length > 0 && e(".slider-nav-thumbnails").slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: ".product-image-slider",
                dots: !1,
                focusOnSelect: !0,
                vertical: !1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }],
                prevArrow: '<button type="button" class="slick-prev"><svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>',
                rtl: window.isRtl
            }), e(".list-terms li a").on("click", (function(i) {
                i.preventDefault();
                var s = e(this).attr("href"),
                    o = e(s).offset().top - 90;
                e("html,body").animate({
                    scrollTop: o
                }, 500)
            })), e(window).scroll((function() {
                var i = e(document).scrollTop();
                if (e(window).width() > 992 && i < 850) {
                    var s = i / 30,
                        o = s - 10;
                    e(".banner-7-img-1").css("transform", "translate3d(0px, -" + s + "%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"), e(".banner-7-img-2").css("transform", "translate3d(0px, " + o + "%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)")
                }
            })).scroll()
        }(jQuery), $(".mobile-header-wrapper-inner").length) new PerfectScrollbar(".mobile-header-wrapper-inner")
})();