!function() {
    "use strict";
    function t(t, i) {
        var s = {
            section: ".section",
            animationDuration: 700,
            animationTiming: "ease",
            animationTranform: "transform",
            pagination: !0,
            keyboard: !0,
            touch: !0,
            touchLimit: 100,
            loop: !1,
            onLeave: null,
            afterLoad: null
        };
        return this.el = document.querySelector(t),
        this.settings = e.extend(s, i),
        this.body = document.querySelector("body"),
        this.sections = this.el.querySelectorAll(this.settings.section),
        this.init(),
        this
    }
    var e = {
        extend: function(t, e) {
            "object" != typeof e && (e = {});
            for (var i in e)
                t.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        },
        isIE: function() {
            var t = navigator.userAgent.toLowerCase();
            return t.indexOf("msie") != -1 && parseInt(t.split("msie")[1])
        },
        setStyle: function(t, e, i) {
            t.style[e.charAt(0).toLowerCase() + e.slice(1)] = i
        },
        setVendor: function(t, e, i) {
            t.style[e.charAt(0).toLowerCase() + e.slice(1)] = i,
            t.style["webkit" + e] = i,
            t.style["moz" + e] = i,
            t.style["ms" + e] = i,
            t.style["o" + e] = i
        },
        hasClass: function(t, e) {
            return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
        },
        addClass: function(t, i) {
            t.classList ? t.classList.add(i) : e.hasClass(t, i) || (t.className += " " + i)
        },
        removeClass: function(t, i) {
            if (t.classList)
                t.classList.remove(i);
            else if (e.hasClass(t, i)) {
                var s = new RegExp("(\\s|^)" + i + "(\\s|$)");
                t.className = t.className.replace(s, " ")
            }
        }
    };
    t.prototype.init = function() {
        this.index = 0,
        this.lastAnimation = 0,
        this.build(),
        this.bindEvents(),
        this.makeActive(this.index),
        "function" == typeof this.settings.afterLoad && this.settings.afterLoad(this.index)
    }
    ,
    t.prototype.build = function() {
        this.settings.pagination && this.paginationHTML()
    }
    ,
    t.prototype.bindEvents = function() {
        var t = this;
        if (this.settings.pagination)
            for (var e = document.querySelectorAll(".slide-navigation li a"), i = 0; i < e.length; i++)
                !function(s) {
                    e[i].addEventListener("click", function(e) {
                        t.index = s,
                        t.move(t.index),
                        e.preventDefault()
                    })
                }(i);
        this.settings.keyboard && document.addEventListener("keydown", this.keyboard.bind(this)),
        this.settings.touch && this.enableTouch(document),
        document.addEventListener("mousewheel", this.mousewheel.bind(this)),
        document.addEventListener("DOMMouseScroll", this.mousewheel.bind(this))
    }
    ,
    t.prototype.makeActive = function(t) {
        for (var i = document.querySelectorAll(".slide-navigation li a"), s = 0; s < this.sections.length; s++)
            e.removeClass(this.sections[s], "is-active"),
            e.removeClass(i[s], "is-active");
        e.addClass(this.sections[t], "is-active"),
        e.addClass(i[t], "is-active")
    }
    ,
    t.prototype.move = function(t) {
        var i = this;
        "function" == typeof i.settings.onLeave && i.settings.onLeave(this.index),
        9 === e.isIE() && (e.setStyle(this.el, "position", "relative"),
        e.setStyle(this.el, "top", t * -100 + "%"),
        e.setVendor(this.el, "Transition", "transform " + this.settings.animationDuration + "ms")),
        e.setVendor(this.el, "Transform", "translate3d(0, " + t * -100 + "%, 0)"),
        e.setVendor(this.el, "Transition", "transform " + this.settings.animationDuration + "ms");
        var s = function() {
            "function" == typeof i.settings.afterLoad && i.settings.afterLoad(i.index)
        };
        this.el.addEventListener("transitionend", s),
        this.index = t,
        this.makeActive(t)
    }
    ,
    t.prototype.moveUp = function() {
        this.index > 0 && this.move(this.index - 1)
    }
    ,
    t.prototype.moveDown = function() {
        this.index + 1 < this.sections.length && this.move(this.index + 1)
    }
    ,
    t.prototype.moveTo = function(t) {
        this.move(t)
    }
    ,
    t.prototype.enableTouch = function(t) {
        var e = this
          , i = 0
          , s = 0
          , n = 0;
        t.addEventListener("touchstart", function(t) {
            i = t.changedTouches[0].pageY
        }),
        t.addEventListener("touchmove", function(t) {
            t.preventDefault()
        }),
        t.addEventListener("touchend", function(t) {
            var o = (new Date).getTime();
            s = t.changedTouches[0].pageY,
            n = s - i,
            o - Math.abs(e.lastAnimation) < e.settings.animationDuration || (n < 0 && Math.abs(n) > e.settings.touchLimit ? e.moveDown() : n > 0 && Math.abs(n) > e.settings.touchLimit && e.moveUp(),
            e.lastAnimation = o)
        })
    }
    ,
    t.prototype.mousewheel = function(t) {
        var e = (new Date).getTime()
          , i = t.wheelDelta || -t.detail;
        e - Math.abs(this.lastAnimation) < this.settings.animationDuration || (i < 0 ? this.moveDown() : this.moveUp(),
        this.lastAnimation = e)
    }
    ,
    t.prototype.keyboard = function(t) {
        var e = (new Date).getTime();
        e - Math.abs(this.lastAnimation) < this.settings.animationDuration || (38 === t.keyCode && this.moveUp(),
        40 === t.keyCode && this.moveDown(),
        this.lastAnimation = e)
    }
    ,
    t.prototype.paginationHTML = function() {
        for (var t = "", e = 0; e < this.sections.length; e++)
            t += '<li><a data-index="' + e + '" href="#' + e + '"></a></li>';
        var i = document.createElement("ul");
        i.setAttribute("class", "slide-navigation"),
        i.innerHTML = t,
        this.body.appendChild(i)
    }
    ,
    window.FullPage = t
  }(window);
  