! function(o) {
    o.fn.modal = function(e) {
        e = o.extend({
            trigger: ".trigger",
            modals: ".modal",
            closeButton: ".close",
            opacity: .8,
            backgroundColor: "000",
            effect: "fadein",
            effectSpeed: "500",
            docClose: !0,
            moveOnScroll: !0,
            disableScroll: !1,
            moveOnResize: !0,
            escapeKey: !0,
            openOnLoad: !1,
            alignTop: !1,
            top: 20,
            onAfterShow: function() {},
            onAfterHide: function() {}
        }, e), o(".overlay").length || o("body").append('<div class="overlay"></div>');
        var n = !1,
            t = o(e.trigger),
            i = o(e.modals),
            l = o(".overlay"),
            c = o(e.closeButton),
            d = o(window);

        function s() {
            return r(), i.hide(), n || r(), l[e.effect](e.effectSpeed), i.delay(e.effectSpeed)[e.effect](e.effectSpeed, e.onAfterShow), n = !0, !1
        }

        function f() {
            return i.fadeOut(100, (function() {
                l.delay(100).fadeOut("slow", e.onAfterHide)
            })), e.disableScroll && o("html, body").css({
                "overflow-y": "auto"
            }), !1
        }

        function r(n) {
            var t, l = "50%",
                c = -i.outerWidth() / 2;
            d.height() < 2 * e.top + i.height() ? (e.disableScroll && o("html, body").css({
                "overflow-y": "auto"
            }), e.moveOnScroll && o(e.modals).css({
                position: "absolute"
            }), l = e.top + d.scrollTop(), t = 0) : (e.disableScroll && (o("html").css({
                "overflow-y": "hidden"
            }), o("body").css({
                "overflow-y": "scroll"
            })), e.moveOnScroll ? (o(e.modals).css({
                position: "fixed"
            }), t = -i.outerHeight() / 2, e.alignTop && (t = 0, l = e.top)) : t = -i.outerHeight() / 2 + d.scrollTop()), o(e.modals).css({
                marginTop: t,
                marginLeft: c,
                top: l
            })
        }
        return "fadein" == e.effect && (e.effect = "fadeIn"), "slidedown" == e.effect && (e.effect = "slideDown"), l.css({
            background: "#" + e.backgroundColor,
            opacity: e.opacity
        }), c.bind("click", f), t.bind("click", s), e.openOnLoad && s(), e.docClose && l.bind("click", f), e.escapeKey && o(document).bind("keyup", (function(o) {
            27 == o.keyCode && f()
        })), e.moveOnResize && o(window).bind("resize", (function() {
            i.is(":visible") && r()
        })), e.moveOnScroll || o(e.modals).css("position", "absolute"), this.open = function() {
            s()
        }, this.close = function() {
            f()
        }, this
    }
}(jQuery);