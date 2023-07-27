/** 
 * onetrust-banner-sdk
 * v202304.1.0
 * by OneTrust LLC
 * Copyright 2023 
 */
!function() {
    "use strict";
    var A = function(e, t) {
        return (A = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        ))(e, t)
    };
    function I(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function o() {
            this.constructor = e
        }
        A(e, t),
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
        new o)
    }
    var L, _ = function() {
        return (_ = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ).apply(this, arguments)
    };
    function d(e, s, a, l) {
        return new (a = a || Promise)(function(o, t) {
            function n(e) {
                try {
                    i(l.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                try {
                    i(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function i(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value)instanceof a ? t : new a(function(e) {
                    e(t)
                }
                )).then(n, r)
            }
            i((l = l.apply(e, s || [])).next())
        }
        )
    }
    function E(n, r) {
        var i, s, a, l = {
            label: 0,
            sent: function() {
                if (1 & a[0])
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        }, c = {
            next: e(0),
            throw: e(1),
            return: e(2)
        };
        return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }
        ),
        c;
        function e(o) {
            return function(e) {
                var t = [o, e];
                if (i)
                    throw new TypeError("Generator is already executing.");
                for (; l = c && t[c = 0] ? 0 : l; )
                    try {
                        if (i = 1,
                        s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s),
                        0) : s.next) && !(a = a.call(s, t[1])).done)
                            return a;
                        switch (s = 0,
                        (t = a ? [2 & t[0], a.value] : t)[0]) {
                        case 0:
                        case 1:
                            a = t;
                            break;
                        case 4:
                            return l.label++,
                            {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            l.label++,
                            s = t[1],
                            t = [0];
                            continue;
                        case 7:
                            t = l.ops.pop(),
                            l.trys.pop();
                            continue;
                        default:
                            if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3]))
                                l.label = t[1];
                            else if (6 === t[0] && l.label < a[1])
                                l.label = a[1],
                                a = t;
                            else {
                                if (!(a && l.label < a[2])) {
                                    a[2] && l.ops.pop(),
                                    l.trys.pop();
                                    continue
                                }
                                l.label = a[2],
                                l.ops.push(t)
                            }
                        }
                        t = r.call(n, l)
                    } catch (e) {
                        t = [6, e],
                        s = 0
                    } finally {
                        i = a = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
    function q() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++)
            e += arguments[t].length;
        for (var n = Array(e), r = 0, t = 0; t < o; t++)
            for (var i = arguments[t], s = 0, a = i.length; s < a; s++,
            r++)
                n[r] = i[s];
        return n
    }
    (e = L = L || {})[e.ACTIVE = 0] = "ACTIVE",
    e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE",
    e[e.EXPIRED = 2] = "EXPIRED",
    e[e.NO_CONSENT = 3] = "NO_CONSENT",
    e[e.OPT_OUT = 4] = "OPT_OUT",
    e[e.PENDING = 5] = "PENDING",
    e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var M = setTimeout;
    function U(e) {
        return Boolean(e && void 0 !== e.length)
    }
    function j() {}
    function z(e) {
        if (!(this instanceof z))
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e)
            throw new TypeError("not a function");
        this._state = 0,
        this._handled = !1,
        this._value = void 0,
        this._deferreds = [],
        Q(e, this)
    }
    function K(o, n) {
        for (; 3 === o._state; )
            o = o._value;
        0 === o._state ? o._deferreds.push(n) : (o._handled = !0,
        z._immediateFn(function() {
            var e, t = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null === t)
                (1 === o._state ? W : J)(n.promise, o._value);
            else {
                try {
                    e = t(o._value)
                } catch (e) {
                    return void J(n.promise, e)
                }
                W(n.promise, e)
            }
        }))
    }
    function W(t, e) {
        try {
            if (e === t)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof z)
                    return t._state = 3,
                    t._value = e,
                    void Y(t);
                if ("function" == typeof o)
                    return void Q((n = o,
                    r = e,
                    function() {
                        n.apply(r, arguments)
                    }
                    ), t)
            }
            t._state = 1,
            t._value = e,
            Y(t)
        } catch (e) {
            J(t, e)
        }
        var n, r
    }
    function J(e, t) {
        e._state = 2,
        e._value = t,
        Y(e)
    }
    function Y(e) {
        2 === e._state && 0 === e._deferreds.length && z._immediateFn(function() {
            e._handled || z._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++)
            K(e, e._deferreds[t]);
        e._deferreds = null
    }
    function X(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null,
        this.onRejected = "function" == typeof t ? t : null,
        this.promise = o
    }
    function Q(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0,
                W(t, e))
            }, function(e) {
                o || (o = !0,
                J(t, e))
            })
        } catch (e) {
            o || (o = !0,
            J(t, e))
        }
    }
    function $() {}
    z.prototype.catch = function(e) {
        return this.then(null, e)
    }
    ,
    z.prototype.then = function(e, t) {
        var o = new this.constructor(j);
        return K(this, new X(e,t,o)),
        o
    }
    ,
    z.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }
    ,
    z.all = function(t) {
        return new z(function(r, i) {
            if (!U(t))
                return i(new TypeError("Promise.all accepts an array"));
            var s = Array.prototype.slice.call(t);
            if (0 === s.length)
                return r([]);
            var a = s.length;
            for (var e = 0; e < s.length; e++)
                !function t(o, e) {
                    try {
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if ("function" == typeof n)
                                return void n.call(e, function(e) {
                                    t(o, e)
                                }, i)
                        }
                        s[o] = e,
                        0 == --a && r(s)
                    } catch (e) {
                        i(e)
                    }
                }(e, s[e])
        }
        )
    }
    ,
    z.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === z ? t : new z(function(e) {
            e(t)
        }
        )
    }
    ,
    z.reject = function(o) {
        return new z(function(e, t) {
            t(o)
        }
        )
    }
    ,
    z.race = function(r) {
        return new z(function(e, t) {
            if (!U(r))
                return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++)
                z.resolve(r[o]).then(e, t)
        }
        )
    }
    ,
    z._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    }
    : function(e) {
        M(e, 0)
    }
    ,
    z._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    }
    ,
    $.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(),
        this.initObjectAssignPolyfill(),
        this.initArrayFillPolyfill(),
        this.initClosestPolyfill(),
        this.initIncludesPolyfill(),
        this.initEndsWithPoly(),
        this.initCustomEventPolyfill(),
        this.promisesPolyfil()
    }
    ,
    $.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                if (null == this)
                    throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this)
                  , r = parseInt(n.length, 10) || 0;
                if (0 !== r) {
                    var i, s, a = t[1] || 0;
                    for (0 <= a ? i = a : (i = r + a) < 0 && (i = 0); i < r; ) {
                        if (e === (s = n[i]) || e != e && s != s)
                            return !0;
                        i++
                    }
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    $.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length),
                this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    $.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
        Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e))
                        return t
                } while (null !== (t = t.parentElement || t.parentNode) && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    $.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return !((t = "number" != typeof t ? 0 : t) + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    $.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var i in r)
                            Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    $.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this)
                    throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), n = arguments[2], n = void 0 === n ? o : n >> 0, i = n < 0 ? Math.max(o + n, 0) : Math.min(n, o); r < i; )
                    t[r] = e,
                    r++;
                return t
            }
        })
    }
    ,
    $.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent)
            return !1;
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            o
        }
        e.prototype = window.Event.prototype,
        window.CustomEvent = e
    }
    ,
    $.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]')
          , t = document.createElement("meta");
        t.name = "viewport",
        t.content = "width=device-width, initial-scale=1",
        e || document.head.appendChild(t)
    }
    ,
    $.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = z)
    }
    ;
    var Z, ee, te, oe, ne, re, ie, se, ae, le, ce, de, pe, ue, he, ge, Ce, ye, fe, ke, me, ve, be, Se, Pe, Te, Ae, Ie, Le, _e, Ee, Ve, Oe, we, Be, Ge, xe = new $;
    (e = Z = Z || {})[e.Unknown = 0] = "Unknown",
    e[e.BannerCloseButton = 1] = "BannerCloseButton",
    e[e.ConfirmChoiceButton = 2] = "ConfirmChoiceButton",
    e[e.AcceptAll = 3] = "AcceptAll",
    e[e.RejectAll = 4] = "RejectAll",
    e[e.BannerSaveSettings = 5] = "BannerSaveSettings",
    e[e.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton",
    (e = ee = ee || {})[e.Banner = 1] = "Banner",
    e[e.PC = 2] = "PC",
    e[e.API = 3] = "API",
    (e = te = te || {}).AcceptAll = "AcceptAll",
    e.RejectAll = "RejectAll",
    e.UpdateConsent = "UpdateConsent",
    (e = oe = oe || {})[e.Purpose = 1] = "Purpose",
    e[e.SpecialFeature = 2] = "SpecialFeature",
    (e = ne = ne || {}).Legal = "legal",
    e.UserFriendly = "user_friendly",
    (e = re = re || {}).Top = "top",
    e.Bottom = "bottom",
    (e = ie = ie || {})[e.Banner = 0] = "Banner",
    e[e.PrefCenterHome = 1] = "PrefCenterHome",
    e[e.VendorList = 2] = "VendorList",
    e[e.CookieList = 3] = "CookieList",
    (e = se = se || {})[e.RightArrow = 39] = "RightArrow",
    e[e.LeftArrow = 37] = "LeftArrow",
    (e = ae = ae || {}).AfterTitle = "AfterTitle",
    e.AfterDescription = "AfterDescription",
    e.AfterDPD = "AfterDPD",
    (e = le = le || {}).PlusMinus = "Plusminus",
    e.Caret = "Caret",
    e.NoAccordion = "NoAccordion",
    (e = ce = ce || {}).Consent = "Consent",
    e.LI = "LI",
    e.AddtlConsent = "AddtlConsent",
    (e = de = de || {}).Iab1Pub = "eupubconsent",
    e.Iab2Pub = "eupubconsent-v2",
    e.Iab1Eu = "euconsent",
    e.Iab2Eu = "euconsent-v2",
    (e = pe = pe || {})[e.Disabled = 0] = "Disabled",
    e[e.Consent = 1] = "Consent",
    e[e.LegInt = 2] = "LegInt",
    (e = ue = ue || {})[e["Banner - Allow All"] = 1] = "Banner - Allow All",
    e[e["Banner - Reject All"] = 2] = "Banner - Reject All",
    e[e["Banner - Close"] = 3] = "Banner - Close",
    e[e["Preference Center - Allow All"] = 4] = "Preference Center - Allow All",
    e[e["Preference Center - Reject All"] = 5] = "Preference Center - Reject All",
    e[e["Preference Center - Confirm"] = 6] = "Preference Center - Confirm",
    (e = he = he || {}).Active = "1",
    e.InActive = "0",
    (e = ge = ge || {}).Host = "Host",
    e.GenVendor = "GenVen",
    (e = Ce = Ce || {})[e.Host = 1] = "Host",
    e[e.GenVen = 2] = "GenVen",
    e[e.HostAndGenVen = 3] = "HostAndGenVen",
    (e = ye = ye || {})[e.minDays = 1] = "minDays",
    e[e.maxDays = 30] = "maxDays",
    e[e.maxYear = 31536e3] = "maxYear",
    e[e.maxSecToDays = 86400] = "maxSecToDays",
    (e = fe = fe || {})[e.RTL = 0] = "RTL",
    e[e.LTR = 1] = "LTR",
    (e = ke = ke || {})[e.GoogleVendor = 1] = "GoogleVendor",
    e[e.GeneralVendor = 2] = "GeneralVendor",
    (e = Rt = Rt || {})[e.Days = 1] = "Days",
    e[e.Weeks = 7] = "Weeks",
    e[e.Months = 30] = "Months",
    e[e.Years = 365] = "Years",
    (e = me = me || {}).Checkbox = "Checkbox",
    e.Toggle = "Toggle",
    (e = ve = ve || {}).SlideIn = "Slide_In",
    e.FadeIn = "Fade_In",
    e.RemoveAnimation = "Remove_Animation",
    (e = be = be || {}).Link = "Link",
    e.Icon = "Icon",
    (e = Se = Se || {}).consent = "consent",
    e.set = "set",
    (e = Pe = Pe || {}).update = "update",
    e.default = "default",
    e.ads_data_redaction = "ads_data_redaction",
    (e = Te = Te || {}).analytics_storage = "analytics_storage",
    e.ad_storage = "ad_storage",
    e.functionality_storage = "functionality_storage",
    e.personalization_storage = "personalization_storage",
    e.security_storage = "security_storage",
    e.region = "region",
    e.wait_for_update = "wait_for_update",
    (e = Ae = Ae || {}).granted = "granted",
    e.denied = "denied",
    (e = Ie = Ie || {}).OBJECT_TO_LI = "ObjectToLI",
    e.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis",
    (e = Le = Le || {}).cookies = "cookies",
    e.vendors = "vendors",
    (e = _e = _e || {}).GDPR = "GDPR",
    e.IAB = "IAB",
    e.CCPA = "CCPA",
    e.IAB2 = "IAB2",
    e.GENERIC = "GENERIC",
    e.LGPD = "LGPD",
    e.GENERIC_PROMPT = "GENERIC_PROMPT",
    e.CPRA = "CPRA",
    e.CDPA = "CDPA",
    e.USNATIONAL = "USNATIONAL",
    e.CUSTOM = "CUSTOM",
    e.COLORADO = "COLORADO",
    e.CONNECTICUT = "CTDPA",
    (e = Ee = Ee || {}).Name = "OTGPPConsent",
    e[e.ChunkSize = 4e3] = "ChunkSize",
    e.ChunkCountParam = "GPPCookiesCount",
    (e = Ve = Ve || {}).MspaCoveredTransaction = "IsMSPAEnabled",
    e.MspaOptOutOptionMode = "Opt-Out",
    e.MspaServiceProviderMode = "Service Provider",
    (e = Oe = Oe || {}).GpcSegmentType = "GpcSegmentType",
    e.Gpc = "Gpc",
    (e = we = we || {}).SensitiveDataProcessing = "SensitiveDataProcessing",
    e.KnownChildSensitiveDataConsents = "KnownChildSensitiveDataConsents",
    (e = Be = Be || {}).CPRA = "uspcav1",
    e.CCPA = "uspcav1",
    e.CDPA = "uspvav1",
    e.USNATIONAL = "uspnatv1",
    e.COLORADO = "uspcov1",
    e.CTDPA = "uspctv1",
    (e = Ge = Ge || {})[e.CPRA = 8] = "CPRA",
    e[e.CCPA = 8] = "CCPA",
    e[e.CDPA = 9] = "CDPA",
    e[e.USNATIONAL = 7] = "USNATIONAL",
    e[e.COLORADO = 10] = "COLORADO",
    e[e.CONNECTICUT = 12] = "CONNECTICUT";
    var Ne = "AwaitingReconsent"
      , De = "consentId"
      , He = "geolocation"
      , Fe = "interactionCount"
      , Re = "isIABGlobal"
      , qe = "NotLandingPage"
      , Me = "isGpcEnabled"
      , Ue = "browserGpcFlag"
      , m = {
        ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
        ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
        OPTANON_CONSENT: "OptanonConsent",
        EU_PUB_CONSENT: "eupubconsent-v2",
        EU_CONSENT: "euconsent-v2",
        SELECTED_VARIANT: "OTVariant",
        OT_PREVIEW: "otpreview",
        GPP_CONSENT: Ee.Name
    }
      , je = "CONFIRMED"
      , ze = "OPT_OUT"
      , Ke = "NO_CHOICE"
      , We = "NOTGIVEN"
      , Je = "NO_OPT_OUT"
      , Ye = "always active"
      , Xe = "active"
      , Qe = "inactive landingpage"
      , $e = "inactive"
      , Ze = "dnt"
      , et = "LOCAL"
      , tt = "TEST"
      , ot = "LOCAL_TEST"
      , nt = "data-language"
      , rt = "otCookieSettingsButton.json"
      , it = "otCookieSettingsButtonRtl.json"
      , st = "otCenterRounded"
      , at = "otFlat"
      , lt = "otFloatingRoundedCorner"
      , ct = "otFloatingFlat"
      , dt = "otFloatingRoundedIcon"
      , pt = "otFloatingRounded"
      , ut = "otChoicesBanner"
      , ht = "otNoBanner"
      , gt = "otPcCenter"
      , Ct = "otPcList"
      , yt = "otPcPanel"
      , ft = "otPcPopup"
      , V = "otPcTab"
      , kt = "hidebanner"
      , mt = ((e = {})[Rt.Days] = "PCenterVendorListLifespanDay",
    e[Rt.Weeks] = "LfSpnWk",
    e[Rt.Months] = "PCenterVendorListLifespanMonth",
    e[Rt.Years] = "LfSpnYr",
    e)
      , vt = "DNAC"
      , bt = "Category"
      , St = "Host"
      , Pt = "General Vendor"
      , Tt = "VendorService"
      , At = "aria-label"
      , It = "aria-hidden"
      , Lt = "BRANCH"
      , _t = "COOKIE"
      , Et = "IAB2_FEATURE"
      , Vt = "IAB2_PURPOSE"
      , Ot = "IAB2_SPL_FEATURE"
      , wt = "IAB2_SPL_PURPOSE"
      , Bt = "IAB2_STACK"
      , Gt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE"]
      , xt = ["COOKIE", "BRANCH", "IAB2_STACK"]
      , Nt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE"]
      , Dt = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"]
      , Ht = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"]
      , O = new function() {}
    ;
    function w(e, t, o) {
        void 0 === o && (o = !1);
        function n(e) {
            return e ? (";" !== (e = e.trim()).charAt(e.length - 1) && (e += ";"),
            e.trim()) : null
        }
        var i = n(e.getAttribute("style"))
          , s = n(t)
          , t = ""
          , t = o && i ? function() {
            for (var e = i.split(";").concat(s.split(";")).filter(function(e) {
                return 0 !== e.length
            }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                var r = e[n].substring(0, e[n].indexOf(":") + 1).trim();
                t.indexOf(r) < 0 && (t += r,
                o += e[n] + ";")
            }
            return o
        }() : s;
        e.setAttribute("style", t)
    }
    function Ft() {}
    Ft.prototype.convertKeyValueLowerCase = function(e) {
        for (var t in e)
            e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()),
            delete e[t]);
        return e
    }
    ,
    Ft.prototype.arrToStr = function(e) {
        return e.toString()
    }
    ,
    Ft.prototype.strToArr = function(e) {
        return e ? e.split(",") : []
    }
    ,
    Ft.prototype.strToMap = function(e) {
        if (!e)
            return new Map;
        for (var t = new Map, o = 0, n = this.strToArr(e); o < n.length; o++) {
            var r = n[o].split(":");
            t.set(r[0], "1" === r[1])
        }
        return t
    }
    ,
    Ft.prototype.empty = function(e) {
        var t = document.getElementById(e);
        if (t)
            for (; t.hasChildNodes(); )
                t.removeChild(t.lastChild)
    }
    ,
    Ft.prototype.show = function(e) {
        e = document.getElementById(e);
        e && w(e, "display: block;", !0)
    }
    ,
    Ft.prototype.remove = function(e) {
        e = document.getElementById(e);
        e && e.parentNode && e.parentNode.removeChild(e)
    }
    ,
    Ft.prototype.appendTo = function(e, t) {
        var o, e = document.getElementById(e);
        e && ((o = document.createElement("div")).innerHTML = t,
        e.appendChild(o))
    }
    ,
    Ft.prototype.contains = function(e, t) {
        for (var o = 0; o < e.length; o += 1)
            if (e[o].toString().toLowerCase() === t.toString().toLowerCase())
                return !0;
        return !1
    }
    ,
    Ft.prototype.indexOf = function(e, t) {
        for (var o = 0; o < e.length; o += 1)
            if (e[o] === t)
                return o;
        return -1
    }
    ,
    Ft.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }
    ,
    Ft.prototype.generateUUID = function() {
        var o = (new Date).getTime();
        return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (o + 16 * Math.random()) % 16 | 0;
            return o = Math.floor(o / 16),
            ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }
    ,
    Ft.prototype.getActiveIdArray = function(e) {
        return e.filter(function(e) {
            return "true" === e.split(":")[1]
        }).map(function(e) {
            return parseInt(e.split(":")[0])
        })
    }
    ,
    Ft.prototype.distinctArray = function(e) {
        var t = new Array;
        return e.forEach(function(e) {
            t.indexOf(e) < 0 && t.push(e)
        }),
        t
    }
    ,
    Ft.prototype.findIndex = function(e, t) {
        for (var o = -1, n = 0; n < e.length; n++)
            if (void 0 !== e[n] && t(e[n], n)) {
                o = n;
                break
            }
        return o
    }
    ,
    Ft.prototype.getURL = function(e) {
        var t = document.createElement("a");
        return t.href = e,
        t
    }
    ,
    Ft.prototype.removeURLPrefixes = function(e) {
        return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }
    ,
    Ft.prototype.removeChild = function(e) {
        if (e)
            if (e instanceof NodeList || e instanceof Array)
                for (var t = 0; t < e.length; t++)
                    e[t].parentElement.removeChild(e[t]);
            else
                e.parentElement.removeChild(e)
    }
    ,
    Ft.prototype.getRelativeURL = function(e, t, o) {
        return void 0 === o && (o = !1),
        t ? (t = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", ""),
        o ? t : t + ".js") : e
    }
    ,
    Ft.prototype.setCheckedAttribute = function(e, t, o) {
        (t = e ? document.querySelector(e) : t) && (t.setAttribute("aria-checked", o.toString()),
        o ? t.setAttribute("checked", "") : t.removeAttribute("checked"),
        t.checked = o)
    }
    ,
    Ft.prototype.setDisabledAttribute = function(e, t, o) {
        (t = e ? document.querySelector(e) : t) && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
    }
    ,
    Ft.prototype.setHtmlAttributes = function(e, t) {
        for (var o in t)
            e.setAttribute(o, t[o]),
            e[o] = t[o]
    }
    ,
    Ft.prototype.calculateCookieLifespan = function(e) {
        return e < 0 ? x.LifespanTypeText : (e = Math.floor(e / ye.maxSecToDays)) < ye.minDays ? "< 1 " + x.PCenterVendorListLifespanDay : e < ye.maxDays ? e + " " + x.PCenterVendorListLifespanDays : 1 === (e = Math.floor(e / ye.maxDays)) ? e + " " + x.PCenterVendorListLifespanMonth : e + " " + x.PCenterVendorListLifespanMonths
    }
    ,
    Ft.prototype.insertElement = function(e, t, o) {
        e && t && e.insertAdjacentElement(o, t)
    }
    ,
    Ft.prototype.customQuerySelector = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    }
    ,
    Ft.prototype.customQuerySelectorAll = function(t) {
        return function(e) {
            return t.querySelectorAll(e)
        }
    }
    ;
    var v, B = new Ft, Rt = (qt.prototype.removeAlertBox = function() {
        null !== this.getCookie(m.ALERT_BOX_CLOSED) && this.setCookie(m.ALERT_BOX_CLOSED, "", 0, !0)
    }
    ,
    qt.prototype.removeIab1 = function() {
        null !== this.getCookie(de.Iab1Pub) && this.setCookie(de.Iab1Pub, "", 0, !0)
    }
    ,
    qt.prototype.removeIab2 = function() {
        null !== this.getCookie(de.Iab2Pub) && this.setCookie(de.Iab2Pub, "", 0, !0)
    }
    ,
    qt.prototype.removeAddtlStr = function() {
        null !== this.getCookie(m.ADDITIONAL_CONSENT_STRING) && this.setCookie(m.ADDITIONAL_CONSENT_STRING, "", 0, !0)
    }
    ,
    qt.prototype.removeVariant = function() {
        null !== this.getCookie(m.SELECTED_VARIANT) && this.setCookie(m.SELECTED_VARIANT, "", 0, !0)
    }
    ,
    qt.prototype.removeOptanon = function() {
        null !== this.getCookie(m.OPTANON_CONSENT) && this.setCookie(m.OPTANON_CONSENT, "", 0, !0)
    }
    ,
    qt.prototype.removePreview = function() {
        null !== this.getCookie(m.OT_PREVIEW) && this.setCookie(m.OT_PREVIEW, "", 0, !0)
    }
    ,
    qt.prototype.writeCookieParam = function(e, t, o, n) {
        var r, i, s, a = {}, l = this.getCookie(e);
        if (l)
            for (i = l.split("&"),
            r = 0; r < i.length; r += 1)
                s = i[r].split("="),
                a[decodeURIComponent(s[0])] = s[0] === t && n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
        a[t] = o;
        l = O.moduleInitializer.TenantFeatures;
        l && l.CookieV2CookieDateTimeInISO ? a.datestamp = (new Date).toISOString() : a.datestamp = (new Date).toString(),
        a.version = N.otSDKVersion,
        o = this.param(a),
        this.setCookie(e, o, x.ReconsentFrequencyDays)
    }
    ,
    qt.prototype.readCookieParam = function(e, t, o) {
        var n, r, i, s, e = this.getCookie(e);
        if (e) {
            for (r = {},
            i = e.split("&"),
            n = 0; n < i.length; n += 1)
                s = i[n].split("="),
                r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
            return t && r[t] ? r[t] : t && !r[t] ? "" : r
        }
        return ""
    }
    ,
    qt.prototype.getCookie = function(e) {
        if (O && O.moduleInitializer && O.moduleInitializer.MobileSDK) {
            var t = this.getCookieDataObj(e);
            if (t)
                return t.value
        }
        if (N.isAMP && (N.ampData = JSON.parse(localStorage.getItem(N.dataDomainId)) || {},
        N.ampData))
            return N.ampData[e] || null;
        for (var o, n = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i += 1) {
            for (o = r[i]; " " === o.charAt(0); )
                o = o.substring(1, o.length);
            if (0 === o.indexOf(n))
                return o.substring(n.length, o.length)
        }
        return null
    }
    ,
    qt.prototype.setAmpStorage = function() {
        window.localStorage.setItem(N.dataDomainId, JSON.stringify(N.ampData))
    }
    ,
    qt.prototype.removeAmpStorage = function() {
        window.localStorage.removeItem(N.dataDomainId)
    }
    ,
    qt.prototype.handleAmp = function(e, t) {
        "" !== t ? N.ampData[e] = t : delete N.ampData[e],
        0 === Object.keys(N.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
    }
    ,
    qt.prototype.setCookie = function(e, t, o, n, r) {
        var i, s, a, l, c;
        void 0 === n && (n = !1),
        void 0 === r && (r = new Date),
        N.isAMP ? this.handleAmp(e, t) : (i = void 0,
        i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3),
        "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "",
        o = "",
        (s = (n = O.moduleInitializer) && n.Domain ? n.Domain.split("/") : []).length <= 1 ? s[1] = "" : o = s.slice(1).join("/"),
        a = "Samesite=Lax",
        n.CookieSameSiteNoneEnabled && (a = "Samesite=None; Secure"),
        l = n.ScriptType === tt || n.ScriptType === ot,
        N.isPreview || !l && !n.MobileSDK ? (c = t + i + "; path=/" + o + "; domain=." + s[0] + "; " + a,
        document.cookie = e + "=" + c) : (c = t + i + "; path=/; " + a,
        n.MobileSDK ? this.setCookieDataObj({
            name: e,
            value: t,
            expires: i,
            date: r,
            domainAndPath: s
        }) : document.cookie = e + "=" + c))
    }
    ,
    qt.prototype.setCookieDataObj = function(t) {
        var e;
        t && (N.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? N.otCookieData = window.OneTrust.otCookieData : N.otCookieData = []),
        -1 < (e = B.findIndex(N.otCookieData, function(e) {
            return e.name === t.name
        })) ? N.otCookieData[e] = t : N.otCookieData.push(t))
    }
    ,
    qt.prototype.getCookieDataObj = function(t) {
        N.otCookieData && 0 !== N.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? N.otCookieData = window.OneTrust.otCookieData : N.otCookieData = []);
        var e = B.findIndex(N.otCookieData, function(e) {
            return e.name === t
        });
        if (0 <= e) {
            var o = N.otCookieData[e];
            if (o.date)
                return new Date(o.date) < new Date ? (N.otCookieData.splice(e, 1),
                null) : o
        }
        return null
    }
    ,
    qt.prototype.param = function(e) {
        var t, o = "";
        for (t in e)
            e.hasOwnProperty(t) && ("" !== o && (o += "&"),
            o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
        return o
    }
    ,
    qt);
    function qt() {}
    t.prototype.setRegionRule = function(e) {
        this.rule = e
    }
    ,
    t.prototype.getRegionRule = function() {
        return this.rule
    }
    ,
    t.prototype.getRegionRuleType = function() {
        return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
    }
    ,
    t.prototype.canUseGoogleVendors = function(e) {
        return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition : this.rule).UseGoogleVendors
    }
    ,
    t.prototype.initVariables = function() {
        this.consentableGrps = [],
        this.consentableIabGrps = [],
        this.iabGrps = [],
        this.iabGrpIdMap = {},
        this.domainGrps = {},
        this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }
    }
    ,
    t.prototype.init = function(e) {
        this.getGPCSignal(),
        this.initVariables();
        var t = e.DomainData;
        this.setPublicDomainData(JSON.parse(JSON.stringify(t))),
        this.domainDataMapper(t),
        this.commonDataMapper(e.CommonData),
        x.NtfyConfig = e.NtfyConfig || {},
        this.setBannerName(),
        this.setPcName(),
        this.populateGPCSignal(),
        this.populateGPCBrowserSignal(),
        x.GoogleConsent.GCEnable && this.initGCM()
    }
    ,
    t.prototype.getGPCSignal = function() {
        this.gpcEnabled = !0 === navigator.globalPrivacyControl
    }
    ,
    t.prototype.isValidConsentNoticeGroup = function(e, t) {
        var o, n, r, i;
        return !!e.ShowInPopup && (o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || e.VendorServices && e.VendorServices.length,
        i = r = n = !1,
        e && !e.Parent && (e.SubGroups.length && (n = e.SubGroups.some(function(e) {
            return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
        }),
        r = e.SubGroups.some(function(e) {
            return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
        }),
        !t || e.FirstPartyCookies.length && e.Hosts.length || (i = !e.SubGroups.some(function(e) {
            return -1 === Gt.indexOf(e.Type)
        }))),
        t = e.SubGroups.some(function(e) {
            return -1 < Gt.indexOf(e.Type)
        }),
        (-1 < Gt.indexOf(e.Type) || t) && (e.ShowVendorList = !0),
        e.Hosts.length || r || n) && (e.ShowHostList = !0),
        o || -1 < Gt.indexOf(e.Type) || n || r || i)
    }
    ,
    t.prototype.extractGroupIdForIabGroup = function(e) {
        return -1 < e.indexOf("ISPV2_") ? e = e.replace("ISPV2_", "") : -1 < e.indexOf("IABV2_") ? e = e.replace("IABV2_", "") : -1 < e.indexOf("IFEV2_") ? e = e.replace("IFEV2_", "") : -1 < e.indexOf("ISFV2_") && (e = e.replace("ISFV2_", "")),
        e
    }
    ,
    t.prototype.populateGroups = function(e, r) {
        var i = this
          , s = {}
          , a = []
          , t = (e.forEach(function(e) {
            var t = e.CustomGroupId;
            if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0),
            !(!r.IsIabEnabled && -1 < Gt.indexOf(e.Type) || "IAB2" === i.iabType && (e.Type === Vt || e.Type === Bt) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === Ot && !e.HasConsentOptOut) && (t !== G.purposeOneGrpId || e.ShowInPopup || (i.purposeOneTreatment = !0),
            i.grpContainLegalOptOut = e.HasLegIntOptOut || i.grpContainLegalOptOut,
            e.SubGroups = [],
            e.Parent ? a.push(e) : s[t] = e,
            "IAB2" === i.iabType) && -1 < Gt.indexOf(e.Type)) {
                var o = i.extractGroupIdForIabGroup(t)
                  , n = (i.iabGrpIdMap[t] = o,
                e.IabGrpId = o,
                {
                    description: e.GroupDescription,
                    descriptionLegal: e.DescriptionLegal,
                    id: Number(o),
                    name: e.GroupName
                });
                switch (e.Type) {
                case Vt:
                    i.iabGroups.purposes[o] = n;
                    break;
                case wt:
                    i.iabGroups.specialPurposes[o] = n;
                    break;
                case Et:
                    i.iabGroups.features[o] = n;
                    break;
                case Ot:
                    i.iabGroups.specialFeatures[o] = n
                }
            }
        }),
        a.forEach(function(e) {
            s[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < Gt.indexOf(e.Type)) && s[e.Parent].SubGroups.push(e)
        }),
        []);
        return Object.keys(s).forEach(function(e) {
            i.isValidConsentNoticeGroup(s[e], r.IsIabEnabled) && (s[e].SubGroups.sort(function(e, t) {
                return e.Order - t.Order
            }),
            t.push(s[e]))
        }),
        this.initGrpVar(t),
        t.sort(function(e, t) {
            return e.Order - t.Order
        })
    }
    ,
    t.prototype.initGrpVar = function(e) {
        var o = this
          , n = !0
          , r = !0;
        e.forEach(function(e) {
            q([e], e.SubGroups).forEach(function(e) {
                var t;
                e.Type !== _t && e.Type !== Vt && e.Type !== Ot || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId),
                -1 < xt.indexOf(e.Type) && o.consentableGrps.push(e),
                -1 < Nt.indexOf(e.Type) && o.consentableIabGrps.push(e),
                -1 === xt.indexOf(e.Type) && o.iabGrps.push(e),
                o.gpcEnabled && e.IsGpcEnabled && (e.Status = $e),
                (t = o.DNTEnabled && e.IsDntEnabled ? Ze : e.Status.toLowerCase()) !== Xe && t !== Qe && t !== Ze || (n = !1),
                t !== Qe && t !== Ye && (r = !1),
                o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
            })
        }),
        this.isOptInMode = n,
        this.isSoftOptInMode = r
    }
    ,
    t.prototype.domainDataMapper = function(e) {
        var t = {
            AriaClosePreferences: e.AriaClosePreferences,
            AriaOpenPreferences: e.AriaOpenPreferences,
            AriaPrivacy: e.AriaPrivacy,
            CenterRounded: e.CenterRounded,
            Flat: e.Flat,
            FloatingFlat: e.FloatingFlat,
            FloatingRounded: e.FloatingRounded,
            FloatingRoundedCorner: e.FloatingRoundedCorner,
            FloatingRoundedIcon: e.FloatingRoundedIcon,
            VendorLevelOptOut: e.IsIabEnabled,
            AboutCookiesText: e.AboutCookiesText,
            AboutLink: e.AboutLink,
            AboutText: e.AboutText,
            ActiveText: e.ActiveText,
            AddLinksToCookiepedia: e.AddLinksToCookiepedia,
            AlertAllowCookiesText: e.AlertAllowCookiesText,
            AlertCloseText: e.AlertCloseText,
            AlertLayout: e.AlertLayout,
            AlertMoreInfoText: e.AlertMoreInfoText,
            AlertNoticeText: e.AlertNoticeText,
            AllowAllText: e.PreferenceCenterConfirmText,
            AlwaysActiveText: e.AlwaysActiveText,
            BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
            BannerAdditionalDescription: e.BannerAdditionalDescription,
            BannerCloseButtonText: e.BannerCloseButtonText,
            BannerFeatureDescription: e.BannerFeatureDescription,
            BannerFeatureTitle: e.BannerFeatureTitle,
            BannerIABPartnersLink: e.BannerIABPartnersLink,
            BannerInformationDescription: e.BannerInformationDescription,
            BannerInformationTitle: e.BannerInformationTitle,
            BannerNonIABVendorListText: e.BannerNonIABVendorListText,
            BannerPosition: e.BannerPosition,
            BannerPurposeDescription: e.BannerPurposeDescription,
            BannerPurposeTitle: e.BannerPurposeTitle,
            BannerRejectAllButtonText: e.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: e.BannerShowRejectAllButton,
            BShowOptOutSignal: e.BShowOptOutSignal,
            BOptOutSignalText: e.BOptOutSignalText,
            BRegionAriaLabel: e.BRegionAriaLabel,
            BannerTitle: e.BannerTitle,
            BCloseButtonType: e.BCloseButtonType,
            BContinueText: e.BContinueText,
            BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
            BnrLogoAria: e.BnrLogoAria,
            BImprintLinkScreenReader: e.BImprintLinkScreenReader,
            BInitialFocus: e.BInitialFocus,
            BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
            BRejectConsentType: e.BRejectConsentType,
            BSaveBtnTxt: e.BSaveBtnText,
            BShowImprintLink: e.BShowImprintLink,
            BShowPolicyLink: e.BShowPolicyLink,
            BShowSaveBtn: e.BShowSaveBtn,
            cctId: e.cctId,
            ChoicesBanner: e.ChoicesBanner,
            CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
            CloseText: e.CloseText,
            ConfirmText: e.ConfirmText,
            ConsentModel: {
                Name: e.ConsentModel
            },
            CookieListDescription: e.CookieListDescription,
            CookieListTitle: e.CookieListTitle,
            CookieSettingButtonText: e.CookieSettingButtonText,
            CookiesUsedText: e.CookiesUsedText,
            CustomJs: e.CustomJs,
            firstPartyTxt: e.CookieFirstPartyText,
            FooterDescriptionText: e.FooterDescriptionText,
            ForceConsent: e.ForceConsent,
            GeneralVendors: e.GeneralVendors,
            GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
            GenVenOptOut: e.PCenterAllowVendorOptout,
            GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
            GlobalRestrictions: e.GlobalRestrictions,
            GoogleConsent: {
                GCAdStorage: e.GCAdStorage,
                GCAnalyticsStorage: e.GCAnalyticsStorage,
                GCEnable: e.GCEnable,
                GCFunctionalityStorage: e.GCFunctionalityStorage,
                GCPersonalizationStorage: e.GCPersonalizationStorage,
                GCRedactEnable: e.GCRedactEnable,
                GCSecurityStorage: e.GCSecurityStorage,
                GCWaitTime: e.GCWaitTime
            },
            GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
            Groups: this.populateGroups(e.Groups, e),
            HideToolbarCookieList: e.HideToolbarCookieList,
            IabType: e.IabType,
            InactiveText: e.InactiveText,
            IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
            IsIabEnabled: e.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: e.IsLifespanEnabled,
            Language: e.Language,
            LastReconsentDate: e.LastReconsentDate,
            LfSpanSecs: e.PCLifeSpanSecs,
            LfSpnWk: e.PCLifeSpanWk,
            LfSpnWks: e.PCLifeSpanWks,
            LfSpnYr: e.PCLifeSpanYr,
            LfSpnYrs: e.PCLifeSpanYrs,
            LifespanDurationText: e.LifespanDurationText,
            MainInfoText: e.MainInfoText,
            MainText: e.MainText,
            ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
            NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
            NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
            NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
            NextPageCloseBanner: e.NextPageCloseBanner,
            NoBanner: e.NoBanner,
            OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
            OnClickCloseBanner: e.OnClickCloseBanner,
            OverriddenVendors: null != (t = e.OverriddenVendors) ? t : {},
            OverridenGoogleVendors: null != (t = e.OverridenGoogleVendors) ? t : {},
            Publisher: e.publisher,
            PublisherCC: e.PublisherCC,
            ReconsentFrequencyDays: e.ReconsentFrequencyDays,
            ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
            ScrollCloseBanner: e.ScrollCloseBanner,
            ShowAlertNotice: e.ShowAlertNotice,
            showBannerCloseButton: e.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: e.ThirdPartyCookieListText,
            thirdPartyTxt: e.CookieThirdPartyText,
            UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
            VendorConsentModel: e.VendorConsentModel,
            VendorListText: e.VendorListText,
            Vendors: e.Vendors,
            PCCategoryStyle: e.PCCategoryStyle || me.Checkbox,
            PCShowAlwaysActiveToggle: e.PCShowAlwaysActiveToggle,
            PCenterImprintLinkScreenReader: e.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: e.PCenterImprintLinkText,
            PCenterImprintLinkUrl: e.PCenterImprintLinkUrl,
            PCShowOptOutSignal: e.PCShowOptOutSignal,
            PCOptOutSignalText: e.PCOptOutSignalText,
            PCRegionAriaLabel: e.PCRegionAriaLabel,
            PCHostNotFound: e.PCHostNotFound,
            PCVendorNotFound: e.PCVendorNotFound,
            PCTechNotFound: e.PCTechNotFound
        };
        this.setPCDomainData(t, e),
        this.setAdditionalTechnologies(t, e),
        this.setVendorServiceConfigData(t, e),
        this.setDomainCommonDataDefaults(t, e),
        this.setDomainPCDataDefaults(t, e),
        this.setGppData(t, e),
        e.PCTemplateUpgrade && (e.Center || e.Panel) && (t.PCAccordionStyle = e.PCAccordionStyle),
        t.PCenterEnableAccordion = e.PCAccordionStyle !== le.NoAccordion,
        this.legIntSettings = e.LegIntSettings || {},
        void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0),
        O.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage),
        x = _(_({}, x), t)
    }
    ,
    t.prototype.setGppData = function(e, t) {
        e.GPPPurposes = _({}, t.GPPPurposes),
        e.IsGPPDataProcessingApplicable = t.IsGPPDataProcessingApplicable,
        e.IsGPPEnabled = t.IsGPPEnabled,
        e.IsGPPKnownChildApplicable = t.IsGPPKnownChildApplicable,
        e.IsMSPAEnabled = t.IsMSPAEnabled,
        e.MSPAOptionMode = t.MSPAOptionMode,
        e.UseGPPUSNational = t.UseGPPUSNational
    }
    ,
    t.prototype.setPCDomainData = function(e, t) {
        e.PCAccordionStyle = le.Caret,
        e.PCActiveText = t.PCActiveText,
        e.PCCloseButtonType = t.PCCloseButtonType,
        e.PCContinueText = t.PCContinueText,
        e.PCCookiePolicyLinkScreenReader = t.PCCookiePolicyLinkScreenReader,
        e.PCCookiePolicyText = t.PCCookiePolicyText,
        e.PCenterAllowAllConsentText = t.PCenterAllowAllConsentText,
        e.PCenterApplyFiltersText = t.PCenterApplyFiltersText,
        e.PCenterBackText = t.PCenterBackText,
        e.PCenterCancelFiltersText = t.PCenterCancelFiltersText,
        e.PCenterClearFiltersText = t.PCenterClearFiltersText,
        e.PCenterCookiesListText = t.PCenterCookiesListText,
        e.PCenterEnableAccordion = t.PCenterEnableAccordion,
        e.PCenterFilterText = t.PCenterFilterText,
        e.PCenterGeneralVendorsText = t.PCenterGeneralVendorsText,
        e.PCenterRejectAllButtonText = t.PCenterRejectAllButtonText,
        e.PCenterSelectAllVendorsText = t.PCenterSelectAllVendorsText,
        e.PCenterShowRejectAllButton = t.PCenterShowRejectAllButton,
        e.PCenterUserIdDescriptionText = t.PCenterUserIdDescriptionText,
        e.PCenterUserIdNotYetConsentedText = t.PCenterUserIdNotYetConsentedText,
        e.PCenterUserIdTimestampTitleText = t.PCenterUserIdTimestampTitleText,
        e.PCenterUserIdTitleText = t.PCenterUserIdTitleText,
        e.PCenterVendorListDescText = t.PCenterVendorListDescText,
        e.PCenterVendorListDisclosure = t.PCenterVendorListDisclosure,
        e.PCenterVendorListLifespan = t.PCenterVendorListLifespan,
        e.PCenterVendorListLifespanDay = t.PCenterVendorListLifespanDay,
        e.PCenterVendorListLifespanDays = t.PCenterVendorListLifespanDays,
        e.PCenterVendorListLifespanMonth = t.PCenterVendorListLifespanMonth,
        e.PCenterVendorListLifespanMonths = t.PCenterVendorListLifespanMonths,
        e.PCenterVendorListNonCookieUsage = t.PCenterVendorListNonCookieUsage,
        e.PCenterVendorListStorageDomain = t.PCenterVendorListStorageDomain,
        e.PCVLSDomainsUsed = t.PCVLSDomainsUsed,
        e.PCVLSUse = t.PCVLSUse,
        e.PCenterVendorListStorageIdentifier = t.PCenterVendorListStorageIdentifier,
        e.PCenterVendorListStoragePurposes = t.PCenterVendorListStoragePurposes,
        e.PCenterVendorListStorageType = t.PCenterVendorListStorageType,
        e.PCenterVendorsListText = t.PCenterVendorsListText,
        e.PCenterViewPrivacyPolicyText = t.PCenterViewPrivacyPolicyText,
        e.PCGoogleVendorsText = t.PCGoogleVendorsText,
        e.PCGrpDescLinkPosition = t.PCGrpDescLinkPosition,
        e.PCGrpDescType = t.PCGrpDescType,
        e.PCGVenPolicyTxt = t.PCGeneralVendorsPolicyText,
        e.PCIABVendorsText = t.PCIABVendorsText,
        e.PCInactiveText = t.PCInactiveText,
        e.PCLogoAria = t.PCLogoScreenReader,
        e.PCOpensCookiesDetailsAlert = t.PCOpensCookiesDetailsAlert,
        e.PCenterVendorListScreenReader = t.PCenterVendorListScreenReader,
        e.PCOpensVendorDetailsAlert = t.PCOpensVendorDetailsAlert,
        e.PCenterDynamicRenderingEnable = t.PCenterDynamicRenderingEnable,
        e.PCTemplateUpgrade = t.PCTemplateUpgrade,
        e.PCVendorFullLegalText = t.PCVendorFullLegalText,
        e.PCViewCookiesText = t.PCViewCookiesText,
        e.PCLayout = {
            Center: t.Center,
            List: t.List,
            Panel: t.Panel,
            Popup: t.Popup,
            Tab: t.Tab
        },
        e.PCenterVendorListLinkText = t.PCenterVendorListLinkText,
        e.PCenterVendorListLinkAriaLabel = t.PCenterVendorListLinkAriaLabel,
        e.PreferenceCenterPosition = t.PreferenceCenterPosition
    }
    ,
    t.prototype.setVendorServiceConfigData = function(e, t) {
        e.VendorServiceConfig = {
            PCVSOptOut: t.PCVSOptOut,
            PCVSEnable: t.PCVSEnable,
            PCVSExpandCategory: t.PCVSExpandCategory,
            PCVSExpandGroup: t.PCVSExpandGroup,
            PCVSCategoryView: t.PCVSCategoryView,
            PCVSNameText: t.PCVSNameText,
            PCVSAllowAllText: t.PCVSAllowAllText,
            PCVSListTitle: t.PCVSListTitle,
            PCVSParentCompanyText: t.PCVSParentCompanyText,
            PCVSAddressText: t.PCVSAddressText,
            PCVSDefaultCategoryText: t.PCVSDefaultCategoryText,
            PCVSDefaultDescriptionText: t.PCVSDefaultDescriptionText,
            PCVSDPOEmailText: t.PCVSDPOEmailText,
            PCVSDPOLinkText: t.PCVSDPOLinkText,
            PCVSPrivacyPolicyLinkText: t.PCVSPrivacyPolicyLinkText,
            PCVSCookiePolicyLinkText: t.PCVSCookiePolicyLinkText,
            PCVSOptOutLinkText: t.PCVSOptOutLinkText,
            PCVSLegalBasisText: t.PCVSLegalBasisText
        }
    }
    ,
    t.prototype.setAdditionalTechnologies = function(e, t) {
        e.AdditionalTechnologiesConfig = {
            PCShowTrackingTech: t.PCShowTrackingTech,
            PCCookiesLabel: t.PCCookiesLabel,
            PCTechDetailsText: t.PCTechDetailsText,
            PCTrackingTechTitle: t.PCTrackingTechTitle,
            PCLocalStorageLabel: t.PCLocalStorageLabel,
            PCSessionStorageLabel: t.PCSessionStorageLabel,
            PCTechDetailsAriaLabel: t.PCTechDetailsAriaLabel,
            PCLocalStorageDurationText: t.PCLocalStorageDurationText,
            PCSessionStorageDurationText: t.PCSessionStorageDurationText
        }
    }
    ,
    t.prototype.setDomainCommonDataDefaults = function(e, t) {
        e.AdvancedAnalyticsCategory = t.AdvancedAnalyticsCategory || "",
        e.BannerDPDDescription = t.BannerDPDDescription || [],
        e.BannerDPDDescriptionFormat = t.BannerDPDDescriptionFormat || "",
        e.BannerDPDTitle = t.BannerDPDTitle || "",
        e.CategoriesText = t.CategoriesText || "Categories",
        e.CookiesText = t.CookiesText || "Cookies",
        e.CookiesDescText = t.CookiesDescText || "Description",
        e.LifespanText = t.LifespanText || "Lifespan",
        e.LifespanTypeText = t.LifespanTypeText || "Session",
        e.PCenterConsentText = t.PCenterConsentText || "Consent"
    }
    ,
    t.prototype.setDomainPCDataDefaults = function(e, t) {
        e.PCenterCookieListFilterAria = t.PCenterCookieListFilterAria || "Filter",
        e.PCenterCookieListSearch = t.PCenterCookieListSearch || "Search",
        e.PCenterCookieSearchAriaLabel = t.PCenterCookieSearchAriaLabel || "Cookie list search",
        e.PCenterFilterAppliedAria = t.PCenterFilterAppliedAria || "Applied",
        e.PCenterFilterClearedAria = t.PCenterFilterClearedAria || "Filters Cleared",
        e.PCenterLegIntColumnHeader = t.PCenterLegIntColumnHeader || "Legitimate Interest",
        e.PCenterLegitInterestText = t.PCenterLegitInterestText || "Legitimate Interest",
        e.PCenterVendorListFilterAria = t.PCenterVendorListFilterAria || "Filter",
        e.PCenterVendorListSearch = t.PCenterVendorListSearch || "Search",
        e.PCenterVendorSearchAriaLabel = t.PCenterVendorSearchAriaLabel || "Vendor list search",
        e.PCFirstPartyCookieListText = t.PCFirstPartyCookieListText || "First Party Cookies",
        e.PCShowConsentLabels = !(!t.Tab || !t.PCTemplateUpgrade) && t.PCShowConsentLabels,
        e.PCShowPersistentCookiesHoverButton = t.PCShowPersistentCookiesHoverButton || !1
    }
    ,
    t.prototype.commonDataMapper = function(e) {
        var t = {
            iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
            optanonHideAcceptButton: e.OptanonHideAcceptButton,
            optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
            optanonStyle: e.OptanonStyle,
            optanonStaticContentLocation: e.OptanonStaticContentLocation,
            bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
            pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
            textColor: e.TextColor,
            buttonColor: e.ButtonColor,
            buttonTextColor: e.ButtonTextColor,
            bannerMPButtonColor: e.BannerMPButtonColor,
            bannerMPButtonTextColor: e.BannerMPButtonTextColor,
            backgroundColor: e.BackgroundColor,
            bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
            BContinueColor: e.BContinueColor,
            PCContinueColor: e.PCContinueColor,
            pcTextColor: e.PcTextColor,
            pcButtonColor: e.PcButtonColor,
            pcButtonTextColor: e.PcButtonTextColor,
            pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
            pcLinksTextColor: e.PcLinksTextColor,
            bannerLinksTextColor: e.BannerLinksTextColor,
            pcEnableToggles: e.PcEnableToggles,
            pcBackgroundColor: e.PcBackgroundColor,
            pcMenuColor: e.PcMenuColor,
            pcMenuHighLightColor: e.PcMenuHighLightColor,
            legacyBannerLayout: e.LegacyBannerLayout,
            optanonLogo: e.OptanonLogo,
            oneTrustFtrLogo: e.OneTrustFooterLogo,
            optanonCookieDomain: e.OptanonCookieDomain,
            cookiePersistentLogo: e.CookiePersistentLogo,
            optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
            optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
            optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
            optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
            optanonShowSubGroupCookies: e.ShowSubGroupCookies,
            useRTL: e.UseRTL,
            showBannerCookieSettings: e.ShowBannerCookieSettings,
            showBannerAcceptButton: e.ShowBannerAcceptButton,
            showCookieList: e.ShowCookieList,
            allowHostOptOut: e.AllowHostOptOut,
            CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
            cookieListTitleColor: e.CookieListTitleColor,
            cookieListGroupNameColor: e.CookieListGroupNameColor,
            cookieListTableHeaderColor: e.CookieListTableHeaderColor,
            CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
            cookieListPrimaryColor: e.CookieListPrimaryColor,
            cookieListCustomCss: e.CookieListCustomCss,
            pcShowCookieHost: e.PCShowCookieHost,
            pcShowCookieDuration: e.PCShowCookieDuration,
            pcShowCookieType: e.PCShowCookieType,
            pcShowCookieCategory: e.PCShowCookieCategory,
            pcShowCookieDescription: e.PCShowCookieDescription,
            ConsentIntegration: e.ConsentIntegration,
            ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
            FeaturesText: e.BFeaturesText || "Features",
            LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
            ConsentText: e.BConsentText || "Consent",
            LegitInterestText: e.BLegitInterestText || "Legit. Interest",
            pcDialogClose: e.PCDialogClose || "dialog closed",
            pCFooterLogoUrl: e.PCFooterLogoUrl,
            SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
            SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
            pcCListName: e.PCCListName || "Name",
            pcCListHost: e.PCCListHost || "Host",
            pcCListDuration: e.PCCListDuration || "Duration",
            pcCListType: e.PCCListType || "Type",
            pcCListCategory: e.PCCListCategory || "Category",
            pcCListDescription: e.PCCListDescription || "Description",
            IabLegalTextUrl: e.IabLegalTextUrl,
            pcLegIntButtonColor: e.PcLegIntButtonColor,
            pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
            PCenterExpandToViewText: e.PCenterExpandToViewText,
            BCategoryContainerColor: e.BCategoryContainerColor,
            BCategoryStyleColor: e.BCategoryStyleColor,
            BLineBreakColor: e.BLineBreakColor,
            BSaveBtnColor: e.BSaveBtnColor,
            BCategoryStyle: e.BCategoryStyle,
            BAnimation: e.BAnimation,
            BFocusBorderColor: e.BFocusBorderColor,
            PCFocusBorderColor: e.PCFocusBorderColor,
            BnrLogo: e.BnrLogo,
            OTCloseBtnLogo: e.OTCloseBtnLogo,
            OTExternalLinkLogo: e.OTExternalLinkLogo
        };
        this.cookieListMapper(t, e),
        x = _(_({}, x), t),
        this.pubDomainData.CookiesV2NewCookiePolicy = e.CookiesV2NewCookiePolicy
    }
    ,
    t.prototype.cookieListMapper = function(e, t) {
        e.TTLGroupByTech = t.TTLGroupByTech,
        e.TTLShowTechDesc = t.TTLShowTechDesc
    }
    ,
    t.prototype.setPublicDomainData = function(n) {
        this.pubDomainData = {
            AboutCookiesText: n.AboutCookiesText,
            AboutLink: n.AboutLink,
            AboutText: n.AboutText,
            ActiveText: n.ActiveText,
            AddLinksToCookiepedia: n.AddLinksToCookiepedia,
            AlertAllowCookiesText: n.AlertAllowCookiesText,
            AlertCloseText: n.AlertCloseText,
            AlertLayout: n.AlertLayout,
            AlertMoreInfoText: n.AlertMoreInfoText,
            AlertNoticeText: n.AlertNoticeText,
            AllowAllText: n.PreferenceCenterConfirmText,
            AlwaysActiveText: n.AlwaysActiveText,
            BAnimation: n.BAnimation,
            BannerCloseButtonText: n.BannerCloseButtonText,
            BannerDPDDescription: n.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: n.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: n.BannerDPDTitle || "",
            BannerFeatureDescription: n.BannerFeatureDescription,
            BannerFeatureTitle: n.BannerFeatureTitle,
            BannerIABPartnersLink: n.BannerIABPartnersLink,
            BannerInformationDescription: n.BannerInformationDescription,
            BannerInformationTitle: n.BannerInformationTitle,
            BannerPosition: n.BannerPosition,
            BannerPurposeDescription: n.BannerPurposeDescription,
            BannerPurposeTitle: n.BannerPurposeTitle,
            BannerRejectAllButtonText: n.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: n.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: n.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: n.BannerShowRejectAllButton,
            BannerTitle: n.BannerTitle,
            BCategoryContainerColor: n.BCategoryContainerColor,
            BCategoryStyle: n.BCategoryStyle,
            BCategoryStyleColor: n.BCategoryStyleColor,
            BCloseButtonType: n.BCloseButtonType,
            BContinueText: n.BContinueText,
            BInitialFocus: n.BInitialFocus,
            BInitialFocusLinkAndButton: n.BInitialFocusLinkAndButton,
            BLineBreakColor: n.BLineBreakColor,
            BRejectConsentType: n.BRejectConsentType,
            BSaveBtnColor: n.BSaveBtnColor,
            BSaveBtnTxt: n.BSaveBtnText,
            BShowSaveBtn: n.BShowSaveBtn,
            CategoriesText: n.CategoriesText,
            cctId: n.cctId,
            ChoicesBanner: n.ChoicesBanner,
            CloseShouldAcceptAllCookies: n.CloseShouldAcceptAllCookies,
            CloseText: n.CloseText,
            ConfirmText: n.ConfirmText,
            ConsentIntegrationData: null,
            ConsentModel: {
                Name: n.ConsentModel
            },
            CookieListDescription: n.CookieListDescription,
            CookieListTitle: n.CookieListTitle,
            CookieSettingButtonText: n.CookieSettingButtonText,
            CookiesText: n.CookiesText,
            CookiesDescText: n.CookiesDescText,
            CookiesUsedText: n.CookiesUsedText,
            CustomJs: n.CustomJs,
            Domain: O.moduleInitializer.Domain,
            FooterDescriptionText: n.FooterDescriptionText,
            ForceConsent: n.ForceConsent,
            GeneralVendors: n.GeneralVendors,
            GoogleConsent: {
                GCAdStorage: n.GCAdStorage,
                GCAnalyticsStorage: n.GCAnalyticsStorage,
                GCEnable: n.GCEnable,
                GCFunctionalityStorage: n.GCFunctionalityStorage,
                GCPersonalizationStorage: n.GCPersonalizationStorage,
                GCRedactEnable: n.GCRedactEnable,
                GCSecurityStorage: n.GCSecurityStorage,
                GCWaitTime: n.GCWaitTime
            },
            Groups: null,
            HideToolbarCookieList: n.HideToolbarCookieList,
            IabType: n.IabType,
            InactiveText: n.InactiveText,
            IsBannerLoaded: !1,
            IsConsentLoggingEnabled: n.IsConsentLoggingEnabled,
            IsIABEnabled: n.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: n.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: n.IsLifespanEnabled,
            Language: n.Language,
            LastReconsentDate: n.LastReconsentDate,
            LifespanDurationText: n.LifespanDurationText,
            LifespanText: n.LifespanText,
            LifespanTypeText: n.LifespanTypeText,
            MainInfoText: n.MainInfoText,
            MainText: n.MainText,
            ManagePreferenceText: n.PreferenceCenterManagePreferencesText,
            NextPageAcceptAllCookies: n.NextPageAcceptAllCookies,
            NextPageCloseBanner: n.NextPageCloseBanner,
            NoBanner: n.NoBanner,
            OnClickAcceptAllCookies: n.OnClickAcceptAllCookies,
            OnClickCloseBanner: n.OnClickCloseBanner,
            OverridenGoogleVendors: n.OverridenGoogleVendors,
            PCAccordionStyle: le.Caret,
            PCCloseButtonType: n.PCCloseButtonType,
            PCContinueText: n.PCContinueText,
            PCenterAllowAllConsentText: n.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: n.PCenterApplyFiltersText,
            PCenterBackText: n.PCenterBackText,
            PCenterCancelFiltersText: n.PCenterCancelFiltersText,
            PCenterClearFiltersText: n.PCenterClearFiltersText,
            PCenterCookieSearchAriaLabel: n.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: n.PCenterCookiesListText,
            PCenterEnableAccordion: n.PCenterEnableAccordion,
            PCenterExpandToViewText: n.PCenterExpandToViewText,
            PCenterFilterAppliedAria: n.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: n.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: n.PCenterFilterText,
            PCenterRejectAllButtonText: n.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: n.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: n.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: n.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: n.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: n.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: n.PCenterUserIdTitleText,
            PCenterVendorListDescText: n.PCenterVendorListDescText,
            PCenterVendorSearchAriaLabel: n.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: n.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: n.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: n.PCFirstPartyCookieListText,
            PCGoogleVendorsText: n.PCGoogleVendorsText,
            PCGrpDescLinkPosition: n.PCGrpDescLinkPosition,
            PCGrpDescType: n.PCGrpDescType,
            PCIABVendorsText: n.PCIABVendorsText,
            PCLogoAria: n.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: n.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: n.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: n.PCOpensVendorDetailsAlert,
            PCShowPersistentCookiesHoverButton: n.PCShowPersistentCookiesHoverButton,
            PCenterDynamicRenderingEnable: n.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: n.PCTemplateUpgrade,
            PCVendorFullLegalText: n.PCVendorFullLegalText,
            PCViewCookiesText: n.PCViewCookiesText,
            PCLayout: {
                Center: n.Center,
                List: n.List,
                Panel: n.Panel,
                Popup: n.Popup,
                Tab: n.Tab
            },
            PCenterVendorListLinkText: n.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: n.PCenterVendorListLinkAriaLabel,
            PCenterImprintLinkScreenReader: n.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: n.PCenterImprintLinkText,
            PCenterImprintLinkUrl: n.PCenterImprintLinkUrl,
            PreferenceCenterPosition: n.PreferenceCenterPosition,
            ScrollAcceptAllCookies: n.ScrollAcceptAllCookies,
            ScrollCloseBanner: n.ScrollCloseBanner,
            ShowAlertNotice: n.ShowAlertNotice,
            showBannerCloseButton: n.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: n.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: n.ThirdPartyCookieListText,
            UseGoogleVendors: this.canUseGoogleVendors(n.PCTemplateUpgrade),
            VendorConsentModel: n.VendorConsentModel,
            VendorLevelOptOut: n.IsIabEnabled,
            VendorListText: n.VendorListText,
            CookiesV2NewCookiePolicy: !1
        },
        n.PCTemplateUpgrade && (n.Center || n.Panel) && n.PCAccordionStyle !== le.NoAccordion && (this.pubDomainData.PCAccordionStyle = n.PCAccordionStyle),
        this.pubDomainData.PCenterEnableAccordion = n.PCAccordionStyle !== le.NoAccordion;
        var r = [];
        n.Groups.forEach(function(e) {
            var t, o;
            !n.IsIabEnabled && e.IsIabPurpose || (e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies)),
            o = null == (o = e.Hosts) ? void 0 : o.reduce(function(e, t) {
                return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
            }, []),
            (t = e.Cookies).push.apply(t, o),
            r.push(e))
        }),
        this.pubDomainData.Groups = r
    }
    ,
    t.prototype.setBannerScriptElement = function(e) {
        this.bannerScriptElement = e,
        this.setDomainElementAttributes()
    }
    ,
    t.prototype.setGCMcallback = function() {
        window.otEventListeners && window.otEventListeners.length && window.otEventListeners.forEach(function(e) {
            e && "consent.changed" === e.event && (G.gcmUpdateCallback = e.listener)
        })
    }
    ,
    t.prototype.setDomainElementAttributes = function() {
        this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")),
        this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")),
        this.bannerScriptElement.hasAttribute("data-ignore-html")) && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html"))
    }
    ,
    t.prototype.setUseDocumentLanguage = function(e) {
        this.useDocumentLanguage = e
    }
    ,
    t.prototype.setPcName = function() {
        var e = x.PCLayout;
        e.Center ? this.pcName = gt : e.Panel ? this.pcName = yt : e.Popup ? this.pcName = ft : e.List ? this.pcName = Ct : e.Tab && (this.pcName = V)
    }
    ,
    t.prototype.setBannerName = function() {
        x.Flat ? this.bannerName = at : x.FloatingRoundedCorner ? this.bannerName = lt : x.FloatingFlat ? this.bannerName = ct : x.FloatingRounded ? this.bannerName = pt : x.FloatingRoundedIcon ? this.bannerName = dt : x.CenterRounded ? this.bannerName = st : x.ChoicesBanner ? this.bannerName = ut : x.NoBanner && (this.bannerName = ht)
    }
    ,
    t.prototype.populateGPCSignal = function() {
        var e = v.readCookieParam(m.OPTANON_CONSENT, Me)
          , t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
        this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled,
        v.writeCookieParam(m.OPTANON_CONSENT, Me, t)
    }
    ,
    t.prototype.populateGPCBrowserSignal = function() {
        var e = v.readCookieParam(m.OPTANON_CONSENT, Ue)
          , t = this.gpcEnabled ? "1" : "0";
        this.gpcBrowserValueChanged = e !== t,
        v.writeCookieParam(m.OPTANON_CONSENT, Ue, t)
    }
    ,
    t.prototype.initGCM = function() {
        var o = []
          , e = (Object.keys(this.rule.States).forEach(function(t) {
            G.rule.States[t].forEach(function(e) {
                o.push((t + "-" + e).toUpperCase())
            })
        }),
        G.rule.Countries.map(function(e) {
            return e.toUpperCase()
        }));
        G.gcmCountries = e.concat(o)
    }
    ;
    var e = t;
    function t() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack,
        this.gpcEnabled = !1,
        this.gpcForAGrpEnabled = !1,
        this.pagePushedDown = !1,
        this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        },
        this.iabType = null,
        this.grpContainLegalOptOut = !1,
        this.purposeOneTreatment = !1,
        this.ignoreInjectingHtmlCss = !1,
        this.ignoreGoogleAnlyticsCall = !1,
        this.mobileOnlineURL = [],
        this.iabGrpIdMap = {},
        this.iabGrps = [],
        this.consentableGrps = [],
        this.consentableIabGrps = [],
        this.domainGrps = {},
        this.thirdPartyiFrameLoaded = !1,
        this.thirdPartyiFrameResolve = null,
        this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }
        ),
        this.isOptInMode = !1,
        this.isSoftOptInMode = !1,
        this.gpcValueChanged = !1,
        this.gpcBrowserValueChanged = !1,
        this.conditionalLogicEnabled = !1,
        this.allConditionsFailed = !1,
        this.canUseConditionalLogic = !1,
        this.gtmUpdatedinStub = !1,
        this.gcmDevIdSet = !1,
        this.purposeOneGrpId = "IABV2_1"
    }
    var G, x = {};
    function Mt() {
        this.otSDKVersion = "202304.1.0",
        this.isAMP = !1,
        this.ampData = {},
        this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [],
        this.syncRequired = !1,
        this.isIabSynced = !1,
        this.isGacSynced = !1,
        this.grpsSynced = [],
        this.syncedValidGrp = !1,
        this.groupsConsent = [],
        this.initialGroupsConsent = [],
        this.hostsConsent = [],
        this.initialHostConsent = [],
        this.genVendorsConsent = {},
        this.vsConsent = new Map,
        this.initialGenVendorsConsent = {},
        this.vendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        },
        this.initialVendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        },
        this.oneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        },
        this.initialOneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        },
        this.addtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        },
        this.initialAddtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        },
        this.addtlConsentVersion = "1~",
        this.initialAddtlVendorsList = {},
        this.isAddtlConsent = !1,
        this.currentGlobalFilteredList = [],
        this.filterByIABCategories = [],
        this.filterByCategories = [],
        this.hosts = {
            hostTemplate: null,
            hostCookieTemplate: null
        },
        this.generalVendors = {
            gvTemplate: null,
            gvCookieTemplate: null
        },
        this.oneTrustAlwaysActiveHosts = [],
        this.alwaysActiveGenVendors = [],
        this.softOptInGenVendors = [],
        this.optInGenVendors = [],
        this.optanonHostList = [],
        this.srcExecGrps = [],
        this.htmlExecGrps = [],
        this.srcExecGrpsTemp = [],
        this.htmlExecGrpsTemp = [],
        this.isPCVisible = !1,
        this.dataGroupState = [],
        this.userLocation = {
            country: "",
            state: ""
        },
        this.vendorsSetting = {},
        this.dsParams = {},
        this.isV2Stub = !1,
        this.fireOnetrustGrp = !1,
        this.showVendorService = !1,
        this.showGeneralVendors = !1,
        this.genVenOptOutEnabled = !1,
        this.vsIsActiveAndOptOut = !1,
        this.bAsset = {},
        this.pcAsset = {},
        this.csBtnAsset = {},
        this.cStyles = {},
        this.vendorDomInit = !1,
        this.genVendorDomInit = !1,
        this.syncNtfyContent = {},
        this.ntfyRequired = !1,
        this.skipAddingHTML = !1,
        this.bnrAnimationInProg = !1,
        this.isPreview = !1,
        this.geoFromUrl = "",
        this.hideBanner = !1,
        this.setAttributePolyfillIsActive = !1,
        this.storageBaseURL = "",
        this.isKeyboardUser = !1,
        this.customerStyles = new Map,
        this.showTrackingTech = !1,
        this.currentTrackingTech = {}
    }
    Mt.prototype.getVendorsInDomain = function() {
        var e, t;
        return N._vendorsInDomain || (e = new Map,
        t = null != (t = x.Groups) ? t : [],
        N.setVendorServicesMap(t, e),
        N._vendorsInDomain = e),
        N._vendorsInDomain
    }
    ,
    Mt.prototype.setVendorServicesMap = function(e, t) {
        for (var o, n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i.SubGroups && 0 < i.SubGroups.length && N.setVendorServicesMap(i.SubGroups, t);
            for (var s = 0, a = null != (o = i.VendorServices) ? o : []; s < a.length; s++) {
                var l = a[s]
                  , c = Object.assign({}, i);
                delete c.VendorServices,
                l.groupRef = c,
                t.set(l.CustomVendorServiceId, l)
            }
        }
    }
    ,
    Mt.prototype.clearVendorsInDomain = function() {
        N._vendorsInDomain = null
    }
    ;
    var N = new Mt
      , Ut = (l.insertAfter = function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }
    ,
    l.insertBefore = function(e, t) {
        t.parentNode.insertBefore(e, t)
    }
    ,
    l.inArray = function(e, t) {
        return t.indexOf(e)
    }
    ,
    l.ajax = function(e) {
        var t = null
          , o = new XMLHttpRequest
          , n = e.type
          , r = e.url
          , i = (e.dataType,
        e.contentType)
          , s = e.data
          , a = e.success
          , t = e.error
          , e = e.sync;
        o.open(n, r, !e),
        o.setRequestHeader("Content-Type", i),
        o.withCredentials = !1,
        o.onload = function() {
            var e;
            200 <= this.status && this.status < 400 ? (e = JSON.parse(this.responseText),
            a(e)) : t({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }
        ,
        o.onerror = function(e) {
            t(e)
        }
        ,
        "post" === n.toLowerCase() || "put" === n.toLowerCase() ? o.send(s) : o.send()
    }
    ,
    l.prevNextHelper = function(o, e, n) {
        var r = [];
        function i(e, t, o) {
            t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
        }
        return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
            i(o, e, n)
        }) : i(o, e, n),
        r
    }
    ,
    l.browser = function() {
        var e, t, o;
        return navigator.sayswho = (t = navigator.userAgent,
        o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
        /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"],
        null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]),
        o.join(" "))),
        {
            version: parseInt(navigator.sayswho.split(" ")[1]),
            type: navigator.sayswho.split(" ")[0],
            userAgent: navigator.userAgent
        }
    }
    ,
    l.isNodeList = function(e) {
        e = Object.prototype.toString.call(e);
        return "[object NodeList]" === e || "[object Array]" === e
    }
    ,
    l.prototype.fadeOut = function(e) {
        var t = this;
        if (void 0 === e && (e = 60),
        1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++)
                w(this.el[o], "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ", !0);
        var n = setInterval(function() {
            if (1 <= t.el.length)
                for (var e = 0; e < t.el.length; e++)
                    t.el[e].style.opacity <= 0 && (w(t.el[e], "display: none;", !0),
                    clearInterval(n),
                    "optanon-popup-bg" === t.el[e].id) && t.el[e].removeAttribute("style")
        }, e);
        return this
    }
    ,
    l.prototype.hide = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++)
                w(this.el[e], "display: none;", !0),
                this.el[e].setAttribute(It, !0);
        else
            l.isNodeList(this.el) || (w(this.el, "display: none;", !0),
            this.el.setAttribute(It, !0));
        return this
    }
    ,
    l.prototype.show = function(e) {
        if (void 0 === e && (e = "block"),
        1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                w(this.el[t], "display: " + e + ";", !0),
                this.el[t].removeAttribute(It);
        else
            l.isNodeList(this.el) || (w(this.el, "display: " + e + ";", !0),
            this.el.removeAttribute(It));
        return this
    }
    ,
    l.prototype.remove = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++)
                this.el[e].parentNode.removeChild(this.el[e]);
        else
            this.el.parentNode.removeChild(this.el);
        return this
    }
    ,
    l.prototype.css = function(e) {
        if (e)
            if (1 <= this.el.length) {
                if (!e.includes(":"))
                    return this.el[0].style[e];
                for (var t = 0; t < this.el.length; t++)
                    w(this.el[t], e)
            } else {
                if (!e.includes(":"))
                    return this.el.style[e];
                w(this.el, e)
            }
        return this
    }
    ,
    l.prototype.removeClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " ");
        else
            this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " ");
        return this
    }
    ,
    l.prototype.addClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
        else
            this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
        return this
    }
    ,
    l.prototype.on = function(r, i, s) {
        var e = this;
        if ("string" != typeof i)
            if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r)
                switch (r) {
                case "load":
                    window.onload = i;
                    break;
                case "resize":
                    window.onresize = i;
                    break;
                case "scroll":
                    window.onscroll = i
                }
            else if (this.el && 1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++)
                    this.el[t].addEventListener(r, i);
            else
                this.el && this.el instanceof Element && this.el.addEventListener(r, i);
        else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r)
            switch (r) {
            case "load":
                window.onload = s;
                break;
            case "resize":
                window.onresize = s;
                break;
            case "scroll":
                window.onscroll = s
            }
        else {
            var a = function(o) {
                var n = o.target;
                e.el.eventExecuted = !0,
                Array.prototype.forEach.call(document.querySelectorAll(i), function(e, t) {
                    zt["" + r + i] && delete zt["" + r + i],
                    e.addEventListener(r, s),
                    e === n && s && s.call(e, o)
                }),
                e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
            };
            if (this.el && 1 <= this.el.length)
                for (t = 0; t < this.el.length; t++)
                    this.el[t].eventExecuted = !1,
                    this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
            else
                this.el && (this.el.eventExecuted = !1,
                !this.el.eventExecuted) && this.el instanceof Element && (zt["" + r + i] || (zt["" + r + i] = !0,
                this.el.addEventListener(r, a)))
        }
        return this
    }
    ,
    l.prototype.off = function(e, t) {
        if (1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++)
                this.el[o].removeEventListener(e, t);
        else
            this.el.removeEventListener(e, t);
        return this
    }
    ,
    l.prototype.one = function(t, o) {
        var n = this;
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++)
                this.el[e].addEventListener(t, function(e) {
                    e.stopPropagation(),
                    e.currentTarget.dataset.triggered || (o(),
                    e.currentTarget.dataset.triggered = !0)
                });
        else {
            var r = function(e) {
                e.stopPropagation(),
                o(),
                n.off(t, r)
            };
            this.el.addEventListener(t, r)
        }
        return this
    }
    ,
    l.prototype.trigger = function(e) {
        e = new CustomEvent(e,{
            customEvent: "yes"
        });
        return this.el.dispatchEvent(e),
        this
    }
    ,
    l.prototype.focus = function() {
        return (1 <= this.el.length ? this.el[0] : this.el).focus(),
        this
    }
    ,
    l.prototype.attr = function(e, t) {
        return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t),
        this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t),
        this) : this.el && this.el.getAttribute(e)
    }
    ,
    l.prototype.html = function(e) {
        if (null == e)
            return (1 <= this.el.length ? this.el[0] : this.el).innerHTML;
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                this.el[t].innerHTML = e;
        else
            this.el.innerHTML = e;
        return this
    }
    ,
    l.prototype.append = function(o) {
        if ("string" != typeof o || o.includes("<") || o.includes(">"))
            if (Array.isArray(o)) {
                var n = this;
                Array.prototype.forEach.call(o, function(e, t) {
                    document.querySelector(n.selector).appendChild(new l(e,"ce").el)
                })
            } else if ("string" == typeof o || Array.isArray(o)) {
                var r, i, e;
                "string" == typeof this.selector ? document.querySelector(this.selector).appendChild(new l(o,"ce").el) : this.useEl ? (r = document.createDocumentFragment(),
                (i = !(!o.includes("<th") && !o.includes("<td"))) && (e = o.split(" ")[0].split("<")[1],
                r.appendChild(document.createElement(e)),
                r.firstChild.innerHTML = o),
                Array.prototype.forEach.call(this.el, function(e, t) {
                    i ? e.appendChild(r.firstChild) : e.appendChild(new l(o,"ce").el)
                })) : this.selector.appendChild(new l(o,"ce").el)
            } else if ("string" == typeof this.selector)
                document.querySelector(this.selector).appendChild(o);
            else if (1 <= o.length)
                for (var t = 0; t < o.length; t++)
                    this.selector.appendChild(o[t]);
            else
                this.selector.appendChild(o);
        else
            this.el.insertAdjacentText("beforeend", o);
        return this
    }
    ,
    l.prototype.text = function(o) {
        if (this.el) {
            if (1 <= this.el.length) {
                if (!o)
                    return this.el[0].textContent;
                Array.prototype.forEach.call(this.el, function(e, t) {
                    e.textContent = o
                })
            } else {
                if (!o)
                    return this.el.textContent;
                this.el.textContent = o
            }
            return this
        }
    }
    ,
    l.prototype.data = function(o, n) {
        if (!(this.el.length < 1)) {
            if (!(1 <= this.el.length))
                return r(this.el, n);
            Array.prototype.forEach.call(this.el, function(e, t) {
                r(e, n)
            })
        }
        return this;
        function r(e, t) {
            if (!t)
                return JSON.parse(e.getAttribute("data-" + o));
            "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
        }
    }
    ,
    l.prototype.height = function(e) {
        this.el.length && (this.el = this.el[0]);
        for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l < s.length; l++)
            0 < s[l] && (a += s[l]);
        return e ? (t = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px",
        o = "number" == typeof e ? e : parseInt(e.toString().split(t)[0]),
        (t && "px" === t || "%" === t || "em" === t || "rem" === t) && (0 < o ? w(this.el, "height: " + (a + o + t) + ";", !0) : "auto" === e && w(this.el, "height: " + e + ";", !0)),
        this) : this.selector === document ? i : this.el.clientHeight - a
    }
    ,
    l.prototype.each = function(e) {
        var t = !1;
        return void 0 === this.el.length && (this.el = [this.el],
        t = !0),
        Array.prototype.forEach.call(this.el, e),
        t && (this.el = this.el[0]),
        this
    }
    ,
    l.prototype.is = function(e) {
        return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
    }
    ,
    l.prototype.filter = function(e) {
        return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e),
        this
    }
    ,
    l.prototype.animate = function(e, t) {
        var o, n, r, i, s, a = this;
        this.el = document.querySelector(this.selector);
        for (o in e)
            n = o,
            s = i = r = void 0,
            i = parseInt(e[n]),
            s = e[n].split(parseInt(e[n]))[1] ? e[n].split(parseInt(e[n]))[1] : "px",
            i = "\n                      @keyframes slide-" + ("top" === n ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === n ? "top" : "bottom") + ": " + ("top" === n ? a.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === n ? "top" : "bottom") + ": " + (i + s) + ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" + ("top" === n ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === n ? "top" : "bottom") + ": " + ("top" === n ? a.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === n ? "top" : "bottom") + ": " + (i + s) + ";\n                          }\n                      }\n                      @-moz-keyframes slide-" + ("top" === n ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === n ? "top" : "bottom") + ": " + ("top" === n ? a.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === n ? "top" : "bottom") + ": " + (i + s) + ";\n                          }\n                      }\n                      ",
            (s = document.head.querySelector("#onetrust-style")) ? s.innerHTML += i : ((r = document.createElement("style")).id = "onetrust-legacy-style",
            r.type = "text/css",
            r.innerHTML = i,
            document.head.appendChild(r)),
            (l.browser().type = l.browser().version <= 8) ? w(a.el, "top" === n ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + t + "ms ease-out forwards;") : w(a.el, r = "\n                        animation-name: " + ("top" === n ? "slide-up-custom" : "slide-down-custom") + ";\n                        animation-duration: " + t + "ms;\n                        animation-fill-mode: forwards;\n                        animation-timing-function: ease-out;\n                    ", !0);
        return this
    }
    ,
    l.prototype.scrollTop = function() {
        return this.el.scrollTop
    }
    ,
    l);
    function l(e, t) {
        switch (void 0 === t && (t = ""),
        this.selector = e,
        this.useEl = !1,
        t) {
        case "ce":
            var o = l.browser().type.toLowerCase()
              , n = l.browser().version;
            n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o ? ((n = document.implementation.createHTMLDocument()).body.innerHTML = e,
            this.el = n.body.children[0]) : (o = document.createRange().createContextualFragment(e),
            this.el = o.firstChild),
            this.length = 1;
            break;
        case "":
            this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e),
            this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
            break;
        default:
            this.length = 0
        }
    }
    function D(e, t) {
        return new Ut(e,t = void 0 === t ? "" : t)
    }
    var jt, zt = {}, Kt = (Wt.prototype.getDataLanguageCulture = function() {
        var e = G.bannerScriptElement;
        return e && e.getAttribute(nt) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(nt).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
    }
    ,
    Wt.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
        return e.replace(/\_/, "-")
    }
    ,
    Wt.prototype.detectDocumentOrBrowserLanguage = function() {
        var e = "";
        if (G.langSwitcherPldr) {
            var t = B.convertKeyValueLowerCase(G.langSwitcherPldr)
              , o = this.getUserLanguage().toLowerCase();
            if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                if (2 === o.length)
                    for (var n = 0; n < Object.keys(t).length; n += 1) {
                        var r = Object.keys(t)[n];
                        if (r.substr(0, 2) === o) {
                            e = t[r];
                            break
                        }
                    }
                else
                    2 < o.length && (e = t[o.substr(0, 2)]);
            e = e || t.default
        }
        return e
    }
    ,
    Wt.prototype.getUserLanguage = function() {
        return G.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
    }
    ,
    Wt.prototype.isValidLanguage = function(e, t) {
        var o = B.convertKeyValueLowerCase(G.langSwitcherPldr);
        return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
    }
    ,
    Wt.prototype.getLangJsonUrl = function(e) {
        void 0 === e && (e = null);
        var t, o = G.getRegionRule();
        if (e) {
            if (e = e.toLowerCase(),
            !this.isValidLanguage(o, e))
                return null
        } else
            e = this.getDataLanguageCulture();
        return N.lang = e,
        N.consentLanguage = e.substr(0, 2),
        t = G.canUseConditionalLogic ? G.bannerDataParentURL + "/" + o.Id + "/" + G.Condition.Id + "/" + e : G.bannerDataParentURL + "/" + o.Id + "/" + e,
        t = G.multiVariantTestingEnabled ? G.bannerDataParentURL + "/" + o.Id + "/variants/" + G.selectedVariant.Id + "/" + e : t
    }
    ,
    Wt.prototype.populateLangSwitcherPlhdr = function() {
        var e, t, o, n = G.getRegionRule();
        n && (e = n.Variants,
        G.multiVariantTestingEnabled && e ? (o = void 0,
        (t = v.getCookie(m.SELECTED_VARIANT)) && (o = e[B.findIndex(e, function(e) {
            return e.Id === t
        })]),
        t && o || (o = e[Math.floor(Math.random() * e.length)]),
        G.langSwitcherPldr = o.LanguageSwitcherPlaceholder,
        G.selectedVariant = o) : G.canUseConditionalLogic ? G.langSwitcherPldr = G.Condition.LanguageSwitcherPlaceholder : G.langSwitcherPldr = n.LanguageSwitcherPlaceholder)
    }
    ,
    Wt);
    function Wt() {}
    Xt.prototype.getLangJson = function(e) {
        var t;
        return void 0 === e && (e = null),
        G.previewMode ? (t = JSON.parse(window.sessionStorage.getItem("otPreviewData")),
        Promise.resolve(t.langJson)) : (t = jt.getLangJsonUrl(e)) ? Jt.otFetch(t + ".json") : Promise.resolve(null)
    }
    ,
    Xt.prototype.getPersistentCookieSvg = function(e) {
        e = e || x.cookiePersistentLogo;
        return e ? Jt.otFetch(e, !0) : Promise.resolve(null)
    }
    ,
    Xt.prototype.fetchGvlObj = function() {
        return this.otFetch(O.moduleInitializer.IabV2Data.globalVendorListUrl)
    }
    ,
    Xt.prototype.fetchGoogleVendors = function() {
        var e = y.updateCorrectIABUrl(O.moduleInitializer.GoogleData.googleVendorListUrl);
        return y.checkMobileOfflineRequest(y.getBannerVersionUrl()) ? y.otFetchOfflineFile(B.getRelativeURL(e, !0)) : (G.mobileOnlineURL.push(e),
        this.otFetch(e))
    }
    ,
    Xt.prototype.getStorageDisclosure = function(t) {
        return d(this, void 0, void 0, function() {
            return E(this, function(e) {
                return [2, this.otFetch(t, !1, !0)]
            })
        })
    }
    ,
    Xt.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            y.jsonp(y.getBannerVersionUrl() + "/" + t + ".js", e, e)
        }
        )
    }
    ,
    Xt.prototype.loadGPP = function() {
        return new Promise(function(e) {
            y.jsonp(y.getBannerVersionUrl() + "/otGPP.js", e, e)
        }
        )
    }
    ,
    Xt.prototype.getCSBtnContent = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = x.useRTL ? fe.RTL : fe.LTR,
                    N.csBtnAsset[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/" + (x.useRTL ? it : rt),
                    n = N.csBtnAsset,
                    r = t,
                    [4, this.otFetch(o)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, N.csBtnAsset[t]]
                }
            })
        })
    }
    ,
    Xt.prototype.getPcContent = function(i) {
        return void 0 === i && (i = !1),
        d(this, void 0, void 0, function() {
            var t, o, n, r;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = x.useRTL ? fe.RTL : fe.LTR,
                    N.pcAsset[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl(),
                    x.PCTemplateUpgrade && (o += "/v2"),
                    o = o + "/" + G.pcName + (x.useRTL ? "Rtl" : "") + ".json",
                    n = N.pcAsset,
                    r = t,
                    [4, this.otFetch(o)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, N.pcAsset[t]]
                }
            })
        })
    }
    ,
    Xt.prototype.getBannerContent = function(s, a) {
        return void 0 === s && (s = !1),
        void 0 === a && (a = null),
        d(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    if (t = x.useRTL ? fe.RTL : fe.LTR,
                    o = a || jt.getDataLanguageCulture(),
                    N.bAsset[t] && !s)
                        return [3, 2];
                    if (i = G.getRegionRule(),
                    n = void 0,
                    O.fp.CookieV2SSR) {
                        if (G.previewMode)
                            return r = JSON.parse(window.sessionStorage.getItem("otPreviewData")),
                            [2, Promise.resolve(r.bLayout)];
                        n = G.bannerDataParentURL + "/" + i.Id,
                        G.canUseConditionalLogic && (n += "/" + G.Condition.Id),
                        n += "/bLayout-" + o + ".json"
                    } else
                        n = y.getBannerSDKAssestsUrl() + ("/" + G.bannerName + (x.useRTL ? "Rtl" : "")) + ".json";
                    return r = N.bAsset,
                    i = t,
                    [4, this.otFetch(n)];
                case 1:
                    r[i] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, N.bAsset[t]]
                }
            })
        })
    }
    ,
    Xt.prototype.getCommonStyles = function(i) {
        return void 0 === i && (i = !1),
        d(this, void 0, void 0, function() {
            var t, o, n, r;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = x.useRTL ? fe.RTL : fe.LTR,
                    N.cStyles[t] && !i) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otCommonStyles" + (x.useRTL ? "Rtl" : "") + ".css",
                    n = N.cStyles,
                    r = t,
                    [4, this.otFetch(o, !0)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, N.cStyles[t]]
                }
            })
        })
    }
    ,
    Xt.prototype.getSyncNtfyContent = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = x.useRTL ? fe.RTL : fe.LTR,
                    N.syncNtfyContent[t]) ? [3, 2] : (o = y.getBannerSDKAssestsUrl() + "/otSyncNotification" + (x.useRTL ? "Rtl" : "") + ".json",
                    n = N.syncNtfyContent,
                    r = t,
                    [4, this.otFetch(o)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, N.syncNtfyContent[t]]
                }
            })
        })
    }
    ,
    Xt.prototype.getConsentProfile = function(e, t) {
        var o = this
          , n = {
            Identifier: e,
            TenantId: N.tenantId,
            Authorization: t
        };
        return new Promise(function(e) {
            o.getJSON(N.consentApi, n, e, e)
        }
        )
    }
    ,
    Xt.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }
    ,
    Xt.prototype.otFetch = function(r, i, s) {
        return void 0 === i && (i = !1),
        void 0 === s && (s = !1),
        d(this, void 0, void 0, function() {
            var t, o, n = this;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return y.checkMobileOfflineRequest(r) ? [4, y.otFetchOfflineFile(r)] : [3, 2];
                case 1:
                    return [2, e.sent()];
                case 2:
                    return e.trys.push([2, 9, , 10]),
                    G.mobileOnlineURL.push(r),
                    "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                        n.getJSON(r, null, e, e, i)
                    }
                    )];
                case 3:
                    return [4, fetch(r)];
                case 4:
                    return (t = e.sent(),
                    s && t.headers.get("Access-Control-Allow-Credentials")) ? [2, Promise.resolve()] : i ? [4, t.text()] : [3, 6];
                case 5:
                    return [2, e.sent()];
                case 6:
                    return [4, t.json()];
                case 7:
                    return [2, e.sent()];
                case 8:
                    return [3, 10];
                case 9:
                    return o = e.sent(),
                    console.log("Error in fetch URL : " + r + " Exception :" + o),
                    [3, 10];
                case 10:
                    return [2]
                }
            })
        })
    }
    ,
    Xt.prototype.getJSON = function(e, t, o, n, r) {
        void 0 === t && (t = null),
        void 0 === r && (r = !1);
        var i = new XMLHttpRequest;
        if (i.open("GET", e, !0),
        i.withCredentials = !1,
        t)
            for (var s in t)
                i.setRequestHeader(s, t[s]);
        i.onload = function() {
            var e;
            200 <= this.status && this.status < 400 && this.responseText ? (e = void 0,
            e = r ? this.responseText : JSON.parse(this.responseText),
            o(e)) : n({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }
        ,
        i.onerror = function(e) {
            n(e)
        }
        ,
        i.send()
    }
    ;
    var Jt, Yt = Xt;
    function Xt() {}
    $t.prototype.addLogoUrls = function() {
        y.checkMobileOfflineRequest(y.getBannerVersionUrl()) || (G.mobileOnlineURL.push(y.updateCorrectUrl(x.optanonLogo)),
        G.mobileOnlineURL.push(y.updateCorrectUrl(x.oneTrustFtrLogo)))
    }
    ,
    $t.prototype.getCookieLabel = function(e, t, o) {
        var n;
        return void 0 === o && (o = !0),
        e ? (n = e.Name,
        t ? '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + x.NewWinTxt + "</span>\n                </a>\n            " : n) : ""
    }
    ,
    $t.prototype.getBannerSDKAssestsUrl = function() {
        return this.getBannerVersionUrl() + "/assets"
    }
    ,
    $t.prototype.getBannerVersionUrl = function() {
        var e = G.bannerScriptElement.getAttribute("src");
        return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + O.moduleInitializer.Version
    }
    ,
    $t.prototype.checkMobileOfflineRequest = function(e) {
        return O.moduleInitializer.MobileSDK && new RegExp("^file://","i").test(e)
    }
    ,
    $t.prototype.updateCorrectIABUrl = function(e) {
        var t, o = O.moduleInitializer.ScriptType;
        return o !== et && o !== ot || (o = B.getURL(e),
        (t = (t = G.bannerScriptElement) && t.getAttribute("src") ? B.getURL(t.getAttribute("src")) : null) && o && t.hostname !== o.hostname && (e = (e = (t = "" + G.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, t.hostname))),
        e
    }
    ,
    $t.prototype.updateCorrectUrl = function(e, t) {
        if ((void 0 === t && (t = !1),
        G.previewMode) && new RegExp("^data:image/").test(e))
            return e;
        var o = B.getURL(e)
          , n = G.bannerScriptElement
          , n = n && n.getAttribute("src") ? B.getURL(n.getAttribute("src")) : null;
        if (n && o && n.hostname !== o.hostname) {
            var r = O.moduleInitializer.ScriptType;
            if (r === et || r === ot) {
                if (t)
                    return e;
                e = (n = G.bannerDataParentURL + "/" + G.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
            } else
                e = null == (r = e) ? void 0 : r.replace(o.hostname, n.hostname)
        }
        return e
    }
    ,
    $t.prototype.isBundleOrStackActive = function(n, r) {
        void 0 === r && (r = null);
        for (var i = N.oneTrustIABConsent, s = !0, a = (r = r || N.groupsConsent,
        0); function() {
            var e, t, o = n.SubGroups[a];
            o.Type === _t ? (-1 < (t = B.findIndex(r, function(e) {
                return e.split(":")[0] === o.CustomGroupId
            })) && "0" === r[t].split(":")[1] || !r.length) && (s = !1) : (e = o.Type === Ot ? i.specialFeatures : i.purpose,
            (-1 < (t = B.findIndex(e, function(e) {
                return e.split(":")[0] === o.IabGrpId
            })) && "false" === e[t].split(":")[1] || !e.length) && (s = !1)),
            a++
        }(),
        s && a < n.SubGroups.length; )
            ;
        return s
    }
    ,
    $t.prototype.otFetchOfflineFile = function(n) {
        return d(this, void 0, void 0, function() {
            var t, o;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return n = n.replace(".json", ".js"),
                    t = n.split("/"),
                    t = t[t.length - 1],
                    o = t.split(".js")[0],
                    [4, new Promise(function(e) {
                        function t() {
                            e(window[o])
                        }
                        y.jsonp(n, t, t)
                    }
                    )];
                case 1:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    $t.prototype.jsonp = function(e, t, o) {
        y.checkMobileOfflineRequest(e) || G.mobileOnlineURL.push(e);
        var n = document.createElement("script")
          , r = document.getElementsByTagName("head")[0];
        function i() {
            t()
        }
        n.onreadystatechange = function() {
            "loaded" !== this.readyState && "complete" !== this.readyState || i()
        }
        ,
        n.onload = i,
        n.onerror = function() {
            o()
        }
        ,
        n.type = "text/javascript",
        n.async = !0,
        n.src = e,
        N.crossOrigin && n.setAttribute("crossorigin", N.crossOrigin),
        r.appendChild(n)
    }
    ,
    $t.prototype.isCookiePolicyPage = function(e) {
        for (var t = !1, o = B.removeURLPrefixes(window.location.href), n = D("<div></div>", "ce").el, r = (D(n).html(e),
        n.querySelectorAll("a")), i = 0; i < r.length; i++)
            if (B.removeURLPrefixes(r[i].href) === o) {
                t = !0;
                break
            }
        return t
    }
    ,
    $t.prototype.isBannerVisible = function() {
        var e = !1
          , t = document.getElementById("onetrust-banner-sdk");
        return e = t && t.getAttribute("style") ? -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none") : e
    }
    ,
    $t.prototype.hideBanner = function() {
        var e = this;
        N.bnrAnimationInProg ? setTimeout(function() {
            return e.hideBanner()
        }, 100) : D("#onetrust-banner-sdk").fadeOut(400)
    }
    ,
    $t.prototype.resetFocusToBody = function() {
        document.activeElement && document.activeElement.blur()
    }
    ,
    $t.prototype.getDuration = function(e) {
        var t, o = e.Length, e = e.DurationType;
        return o && 0 !== parseInt(o) ? (o = parseInt(o),
        e ? (t = 1 < (o = this.round_to_precision(o / e, .5)) ? mt[e] + "s" : mt[e],
        x.LifespanDurationText && 1 === e && (t = "LifespanDurationText"),
        o + " " + x[t]) : this.getDurationText(o)) : x.LfSpanSecs
    }
    ,
    $t.prototype.isDateCurrent = function(e) {
        var e = e.split("/")
          , t = parseInt(e[1])
          , o = parseInt(e[0])
          , e = parseInt(e[2])
          , n = new Date
          , r = n.getDate()
          , i = n.getFullYear()
          , n = n.getMonth() + 1;
        return i < e || e === i && n < o || e === i && o === n && r <= t
    }
    ,
    $t.prototype.insertFooterLogo = function(e) {
        var t = D(e).el;
        if (t.length && x.oneTrustFtrLogo) {
            var o = y.updateCorrectUrl(x.oneTrustFtrLogo);
            y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = B.getRelativeURL(o, !0, !0));
            for (var n = 0; n < t.length; n++) {
                var r = t[n].querySelector("img")
                  , i = "Powered by OneTrust " + x.NewWinTxt;
                D(t[n]).attr("href", x.pCFooterLogoUrl),
                r.setAttribute("src", o),
                r.setAttribute("title", i),
                D(t[n]).attr("aria-label", i)
            }
        }
    }
    ,
    $t.prototype.getUTCFormattedDate = function(e) {
        e = new Date(e);
        return e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + e.getUTCDate().toString().toString().padStart(2, "0") + " " + e.getUTCHours() + ":" + e.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + e.getUTCSeconds().toString().toString().padStart(2, "0")
    }
    ,
    $t.prototype.getDurationText = function(e) {
        return 365 <= e ? (e = this.round_to_precision(e /= 365, .5)) + " " + (1 < e ? x.LfSpnYrs : x.LfSpnYr) : x.LifespanDurationText ? e + " " + x.LifespanDurationText : e + " " + (1 < e ? x.PCenterVendorListLifespanDays : x.PCenterVendorListLifespanDay)
    }
    ,
    $t.prototype.round_to_precision = function(e, t) {
        e = +e + (void 0 === t ? .5 : t / 2);
        return e - e % (void 0 === t ? 1 : +t)
    }
    ,
    $t.prototype.isOptOutEnabled = function() {
        return x.PCTemplateUpgrade ? N.genVenOptOutEnabled : x.allowHostOptOut
    }
    ,
    $t.prototype.findUserType = function(e) {
        N.isKeyboardUser = !(!e || 0 !== e.detail)
    }
    ,
    $t.prototype.getCSSPropsFromString = function(e) {
        var t, o;
        return e ? (t = e.length,
        o = {},
        (e = e.endsWith(";") ? e.substring(0, t - 1) : e).trim().split(";").forEach(function(e) {
            e = e.trim().toString().split(":"),
            e = JSON.parse('{ "' + e[0].trim() + '" : "' + e[1].trim() + '" }');
            o = Object.assign(o, e)
        }),
        o) : {}
    }
    ,
    $t.prototype.setCloseIcon = function(e) {
        var t = y.updateCorrectUrl(x.OTCloseBtnLogo)
          , e = D(e);
        e.length && w(e.el, 'background-image: url("' + t + '")', !0)
    }
    ,
    $t.prototype.createOptOutSignalElement = function(e, t) {
        var e = e(t ? "#ot-pc-content" : "#onetrust-policy")
          , o = document.createElement("div")
          , n = (o.classList.add("ot-optout-signal"),
        document.createElement("div"))
          , r = (n.classList.add("ot-optout-icon"),
        document.createElement("span"));
        return r.innerText = t ? x.PCOptOutSignalText : x.BOptOutSignalText,
        o.append(n),
        o.append(r),
        null != (t = e) && t.prepend(o),
        this.applyGuardLogo(),
        o
    }
    ,
    $t.prototype.applyGuardLogo = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = x.cookiePersistentLogo).includes("ot_guard_logo.svg") || (n = x.OTCloseBtnLogo,
                    o = n.indexOf("static/"),
                    t = n.replace(n.slice(o + 7), "ot_guard_logo.svg")),
                    [4, Jt.getPersistentCookieSvg(t)];
                case 1:
                    return n = e.sent(),
                    D(".ot-optout-icon").html(n),
                    [2]
                }
            })
        })
    }
    ;
    var y, Qt = $t;
    function $t() {}
    var H, Zt = {
        P_Content: "#ot-pc-content",
        P_Logo: ".ot-pc-logo",
        P_Title: "#ot-pc-title",
        P_Policy_Txt: "#ot-pc-desc",
        P_Vendor_Title_Elm: "#ot-lst-title",
        P_Vendor_Title: "#ot-lst-title h3",
        P_Manage_Cookies_Txt: "#ot-category-title",
        P_Label_Txt: ".ot-label-txt",
        P_Category_Header: ".ot-cat-header",
        P_Category_Grp: ".ot-cat-grp",
        P_Category_Item: ".ot-cat-item",
        P_Vendor_List: "#ot-pc-lst",
        P_Vendor_Content: "#ot-lst-cnt",
        P_Vendor_Container: "#ot-ven-lst",
        P_Ven_Bx: "ot-ven-box",
        P_Ven_Name: ".ot-ven-name",
        P_Ven_Link: ".ot-ven-link",
        P_Ven_Ctgl: "ot-ven-ctgl",
        P_Ven_Ltgl: "ot-ven-litgl",
        P_Ven_Ltgl_Only: "ot-ven-litgl-only",
        P_Ven_Opts: ".ot-ven-opts",
        P_Triangle: "#ot-anchor",
        P_Fltr_Modal: "#ot-fltr-modal",
        P_Fltr_Options: ".ot-fltr-opts",
        P_Fltr_Option: ".ot-fltr-opt",
        P_Select_Cntr: "#ot-sel-blk",
        P_Host_Cntr: "#ot-host-lst",
        P_Host_Hdr: ".ot-host-hdr",
        P_Host_Desc: ".ot-host-desc",
        P_Li_Hdr: ".ot-pli-hdr",
        P_Li_Title: ".ot-li-title",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Host_Title: ".ot-host-name",
        P_Leg_Select_All: ".ot-sel-all-hdr",
        P_Leg_Header: ".ot-li-hdr",
        P_Acc_Header: ".ot-acc-hdr",
        P_Cnsnt_Header: ".ot-consent-hdr",
        P_Tgl_Cntr: ".ot-tgl-cntr",
        P_CBx_Cntr: ".ot-chkbox",
        P_Sel_All_Host_El: "ot-selall-hostcntr",
        P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
        P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
        P_c_Name: "ot-c-name",
        P_c_Host: "ot-c-host",
        P_c_Duration: "ot-c-duration",
        P_c_Type: "ot-c-type",
        P_c_Category: "ot-c-category",
        P_c_Desc: "ot-c-description",
        P_Host_View_Cookies: ".ot-host-expand",
        P_Host_Opt: ".ot-host-opt",
        P_Host_Info: ".ot-host-info",
        P_Arrw_Cntr: ".ot-arw-cntr",
        P_Acc_Txt: ".ot-acc-txt",
        P_Vendor_CheckBx: "ot-ven-chkbox",
        P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
        P_Host_UI: "ot-hosts-ui",
        P_Host_Cnt: "ot-host-cnt",
        P_Host_Bx: "ot-host-box",
        P_Ven_Dets: ".ot-ven-dets",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Close_Btn: ".ot-close-icon",
        P_Ven_Lst_Cntr: ".ot-vlst-cntr",
        P_Host_Lst_cntr: ".ot-hlst-cntr",
        P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
        P_Subgrp_Desc: ".ot-subgrp-desc",
        P_Subgp_ul: ".ot-subgrps",
        P_Subgrp_li: ".ot-subgrp",
        P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
        P_Grp_Container: ".ot-grps-cntr",
        P_Privacy_Txt: "#ot-pvcy-txt",
        P_Privacy_Hdr: "#ot-pvcy-hdr",
        P_Active_Menu: "ot-active-menu",
        P_Desc_Container: ".ot-desc-cntr",
        P_Tab_Grp_Hdr: "ot-grp-hdr1",
        P_Search_Cntr: "#ot-search-cntr",
        P_Clr_Fltr_Txt: "#clear-filters-handler",
        P_Acc_Grp_Desc: ".ot-acc-grpdesc",
        P_Acc_Container: ".ot-acc-grpcntr",
        P_Line_Through: "line-through",
        P_Vendor_Search_Input: "#vendor-search-handler"
    }, eo = {
        P_Grp_Container: ".groups-container",
        P_Content: "#ot-content",
        P_Category_Header: ".category-header",
        P_Desc_Container: ".description-container",
        P_Label_Txt: ".label-text",
        P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
        P_Leg_Int_Hdr: ".leg-int-header",
        P_Not_Always_Active: "p:not(.ot-always-active)",
        P_Category_Grp: ".category-group",
        P_Category_Item: ".category-item",
        P_Sub_Grp_Cntr: ".cookie-subgroups-container",
        P_Acc_Container: ".ot-accordion-pc-container",
        P_Close_Btn: ".pc-close-button",
        P_Logo: ".pc-logo",
        P_Title: "#pc-title",
        P_Privacy_Txt: "#privacy-text",
        P_Privacy_Hdr: "#pc-privacy-header",
        P_Policy_Txt: "#pc-policy-text",
        P_Manage_Cookies_Txt: "#manage-cookies-text",
        P_Vendor_Title: "#vendors-list-title",
        P_Vendor_Title_Elm: "#vendors-list-title",
        P_Vendor_List: "#vendors-list",
        P_Vendor_Content: "#vendor-list-content",
        P_Vendor_Container: "#vendors-list-container",
        P_Ven_Bx: "vendor-box",
        P_Ven_Name: ".vendor-title",
        P_Ven_Link: ".vendor-privacy-notice",
        P_Ven_Ctgl: "ot-vendor-consent-tgl",
        P_Ven_Ltgl: "ot-leg-int-tgl",
        P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
        P_Ven_Opts: ".vendor-options",
        P_Triangle: "#ot-triangle",
        P_Fltr_Modal: "#ot-filter-modal",
        P_Fltr_Options: ".ot-group-options",
        P_Fltr_Option: ".ot-group-option",
        P_Select_Cntr: "#select-all-container",
        P_Host_Cntr: "#hosts-list-container",
        P_Host_Hdr: ".host-info",
        P_Host_Desc: ".host-description",
        P_Host_Opt: ".host-option-group",
        P_Host_Info: ".vendor-host",
        P_Ven_Dets: ".vendor-purpose-groups",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Arrw_Cntr: ".ot-arrow-container",
        P_Li_Hdr: ".leg-int-header",
        P_Li_Title: ".leg-int-title",
        P_Acc_Txt: ".accordion-text",
        P_Tgl_Cntr: ".ot-toggle-group",
        P_CBx_Cntr: ".ot-chkbox-container",
        P_Host_Title: ".host-title",
        P_Leg_Select_All: ".leg-int-sel-all-hdr",
        P_Leg_Header: ".leg-int-hdr",
        P_Cnsnt_Header: ".consent-hdr",
        P_Acc_Header: ".accordion-header",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Sel_All_Host_El: "select-all-hosts-input-container",
        P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
        P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
        P_c_Name: "cookie-name-container",
        P_c_Host: "cookie-host-container",
        P_c_Duration: "cookie-duration-container",
        P_c_Type: "cookie-type-container",
        P_c_Category: "cookie-category-container",
        P_c_Desc: "cookie-description-container",
        P_Host_View_Cookies: ".host-view-cookies",
        P_Vendor_CheckBx: "vendor-chkbox",
        P_Vendor_LegCheckBx: "vendor-leg-chkbox",
        P_Host_UI: "hosts-list",
        P_Host_Cnt: "host-list-content",
        P_Host_Bx: "host-box",
        P_Ven_Lst_Cntr: ".category-vendors-list-container",
        P_Host_Lst_cntr: ".category-host-list-container",
        P_Subgrp_Desc: ".cookie-subgroups-description-legal",
        P_Subgp_ul: ".cookie-subgroups",
        P_Subgrp_li: ".cookie-subgroup",
        P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
        P_Active_Menu: "active-group",
        P_Tab_Grp_Hdr: "group-toggle",
        P_Search_Cntr: "#search-container",
        P_Clr_Fltr_Txt: "#clear-filters-handler p",
        P_Vendor_Search_Input: "#vendor-search-handler"
    };
    function o() {}
    o.prototype.initializeBannerVariables = function(e) {
        var t = e.DomainData;
        G.iabType = t.IabType,
        t = t.PCTemplateUpgrade,
        H = t ? Zt : eo,
        G.init(e),
        N.showGeneralVendors = x.GeneralVendorsEnabled && x.PCTemplateUpgrade,
        N.showVendorService = O.fp.CookieV2VendorServiceScript && x.VendorServiceConfig.PCVSEnable && "IAB2" !== x.IabType && x.PCTemplateUpgrade,
        N.vsIsActiveAndOptOut = N.showVendorService && x.VendorServiceConfig.PCVSOptOut,
        N.showTrackingTech = O.fp.CookieV2TrackingTechPrefCenter && x.AdditionalTechnologiesConfig.PCShowTrackingTech,
        N.genVenOptOutEnabled = N.showGeneralVendors && x.GenVenOptOut,
        y.addLogoUrls(),
        this.setGeolocationInCookies(),
        this.setOrUpdate3rdPartyIABConsentFlag()
    }
    ,
    o.prototype.initializeVendorInOverriddenVendors = function(e, t) {
        x.OverriddenVendors[e] = {
            disabledCP: [],
            disabledLIP: [],
            active: t,
            legInt: !1,
            consent: !1
        }
    }
    ,
    o.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
        var r = x.GlobalRestrictions
          , i = x.OverriddenVendors;
        switch (i[t] || this.initializeVendorInOverriddenVendors(t, !0),
        i[t].disabledCP || (i[t].disabledCP = []),
        i[t].disabledLIP || (i[t].disabledLIP = []),
        r[o]) {
        case pe.Disabled:
            (n ? i[t].disabledCP : i[t].disabledLIP).push(o),
            x.Publisher.restrictions[o][t] = pe.Disabled;
            break;
        case pe.Consent:
            n ? (i[t].consent = !0,
            x.Publisher.restrictions[o][t] = pe.Consent) : (i[t].disabledLIP.push(o),
            this.checkFlexiblePurpose(e, t, o, !1));
            break;
        case pe.LegInt:
            n ? (i[t].disabledCP.push(o),
            this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0,
            x.Publisher.restrictions[o][t] = pe.LegInt);
            break;
        case void 0:
            n ? i[t].consent = !0 : i[t].legInt = !0
        }
    }
    ,
    o.prototype.checkFlexiblePurpose = function(e, t, o, n) {
        e.flexiblePurposes.includes(o) ? (n ? x.OverriddenVendors[t].legInt = !0 : x.OverriddenVendors[t].consent = !0,
        x.Publisher.restrictions[o][t] = n ? pe.LegInt : pe.Consent) : x.Publisher.restrictions[o][t] = pe.Disabled
    }
    ,
    o.prototype.removeInActiveVendorsForTcf = function(i) {
        var s = this
          , a = N.iabData.vendorListVersion
          , e = x.Publisher
          , l = x.GlobalRestrictionEnabled
          , c = !(0 === Object.keys(e).length || e && 0 === Object.keys(e.restrictions).length);
        Object.keys(i.vendors).forEach(function(t) {
            var o = i.vendors[t]
              , e = (o.iab2GVLVersion > a && (x.NewVendorsInactiveEnabled ? s.initializeVendorInOverriddenVendors(t, !1) : l && (o.purposes.forEach(function(e) {
                s.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
            }),
            o.legIntPurposes.forEach(function(e) {
                s.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
            }))),
            !1)
              , n = (x.IsIabThirdPartyCookieEnabled || (G.legIntSettings.PAllowLI ? x.OverriddenVendors[t] && !x.OverriddenVendors[t].active && (e = !0) : -1 < x.Vendors.indexOf(Number(t)) && (e = !0)),
            !o.purposes.length && !o.flexiblePurposes.length)
              , r = (x.OverriddenVendors[t] && !x.OverriddenVendors[t].consent && (n = !0),
            !0);
            G.legIntSettings.PAllowLI && o.legIntPurposes.length && (!x.OverriddenVendors[t] || x.OverriddenVendors[t].legInt) && (r = !1),
            !n || !r || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0),
            (e = !l && c && o.iab2GVLVersion > a ? !0 : e) && delete i.vendors[t]
        })
    }
    ,
    o.prototype.setPublisherRestrictions = function() {
        var i, t, s, a, e = x.Publisher;
        e && e.restrictions && (i = this.iabStringSDK(),
        t = e.restrictions,
        s = N.iabData,
        a = N.oneTrustIABConsent.vendorList.vendors,
        Object.keys(t).forEach(function(o) {
            var n, r = t[o], e = G.iabGroups.purposes[o];
            e && (n = {
                description: e.description,
                purposeId: e.id,
                purposeName: e.name
            }),
            Object.keys(r).forEach(function(e) {
                var t;
                N.vendorsSetting[e] && (t = N.vendorsSetting[e].arrIndex,
                1 === r[e] && -1 === a[e].purposes.indexOf(Number(o)) ? s.vendors[t].purposes.push(n) : 2 === r[e] && -1 === a[e].legIntPurposes.indexOf(Number(o)) && s.vendors[t].legIntPurposes.push(n),
                t = i.purposeRestriction(Number(o), r[e]),
                N.tcModel.publisherRestrictions.add(Number(e), t))
            })
        }))
    }
    ,
    o.prototype.populateVendorListTCF = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a, l, c;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = this.iabStringSDK(),
                    o = N.iabData,
                    n = y.updateCorrectIABUrl(o.globalVendorListUrl),
                    r = !this.isIABCrossConsentEnabled(),
                    y.checkMobileOfflineRequest(y.getBannerVersionUrl())) ? [3, 1] : (G.mobileOnlineURL.push(n),
                    i = t.gvl(n, N.gvlObj),
                    [3, 3]);
                case 1:
                    return a = (s = t).gvl,
                    l = [null],
                    [4, y.otFetchOfflineFile(B.getRelativeURL(n, !0))];
                case 2:
                    i = a.apply(s, l.concat([e.sent()])),
                    e.label = 3;
                case 3:
                    return this.removeInActiveVendorsForTcf(i),
                    N.oneTrustIABConsent.vendorList = i,
                    this.assignIABDataWithGlobalVendorList(i),
                    c = N,
                    [4, t.tcModel(i)];
                case 4:
                    c.tcModel = e.sent(),
                    r && this.setPublisherRestrictions(),
                    N.tcModel.cmpId = parseInt(o.cmpId),
                    N.tcModel.cmpVersion = parseInt(o.cmpVersion);
                    try {
                        N.tcModel.consentLanguage = N.consentLanguage
                    } catch (e) {
                        N.tcModel.consentLanguage = "EN"
                    }
                    return N.tcModel.consentScreen = parseInt(o.consentScreen),
                    N.tcModel.isServiceSpecific = r,
                    N.tcModel.purposeOneTreatment = G.purposeOneTreatment,
                    x.PublisherCC ? N.tcModel.publisherCountryCode = x.PublisherCC : N.userLocation.country && (N.tcModel.publisherCountryCode = N.userLocation.country),
                    N.cmpApi = t.cmpApi(N.tcModel.cmpId, N.tcModel.cmpVersion, r, x.UseGoogleVendors ? {
                        getTCData: this.addtlConsentString,
                        getInAppTCData: this.addtlConsentString
                    } : void 0),
                    null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(),
                    [2]
                }
            })
        })
    }
    ,
    o.prototype.resetTCModel = function() {
        var e, t, o = this.iabStringSDK(), n = N.tcModel.clone();
        n.unsetAll(),
        G.legIntSettings.PAllowLI && (e = G.consentableIabGrps.filter(function(e) {
            return e.HasLegIntOptOut && e.Type === Vt
        }).map(function(e) {
            return parseInt(G.iabGrpIdMap[e.CustomGroupId])
        }),
        t = Object.keys(N.vendorsSetting).filter(function(e) {
            return N.vendorsSetting[e].legInt
        }).map(function(e) {
            return parseInt(e)
        }),
        n.purposeLegitimateInterests.set(e),
        n.vendorLegitimateInterests.set(t),
        n.isServiceSpecific) && n.publisherLegitimateInterests.set(e),
        N.cmpApi.update(o.tcString().encode(n), !0)
    }
    ,
    o.prototype.addtlConsentString = function(e, t, o) {
        t && t.tcString && (t.addtlConsent = "" + N.addtlConsentVersion + (N.isAddtlConsent ? N.addtlVendors.vendorConsent.join(".") : "")),
        "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
    }
    ,
    o.prototype.setIabData = function() {
        N.iabData = O.moduleInitializer.IabV2Data,
        N.iabData.consentLanguage = N.consentLanguage
    }
    ,
    o.prototype.assignIABDataWithGlobalVendorList = function(r) {
        var i = x.OverriddenVendors;
        N.iabData.vendorListVersion = r.vendorListVersion,
        N.iabData.vendors = [],
        Object.keys(r.vendors).forEach(function(n) {
            N.vendorsSetting[n] = {
                consent: !0,
                legInt: !0,
                arrIndex: 0,
                specialPurposesOnly: !1
            };
            var e = {}
              , t = r.vendors[n]
              , o = (e.vendorId = n,
            e.vendorName = t.name,
            e.policyUrl = t.policyUrl,
            e.cookieMaxAge = B.calculateCookieLifespan(t.cookieMaxAgeSeconds),
            e.usesNonCookieAccess = t.usesNonCookieAccess,
            e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null,
            !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length);
            G.legIntSettings.PAllowLI && ((!i[n] || i[n].legInt) && (i[n] || t.legIntPurposes.length) || o) || (N.vendorsSetting[n].legInt = !1),
            G.legIntSettings.PAllowLI && o && (N.vendorsSetting[n].specialPurposesOnly = !0),
            (!i[n] || i[n].consent) && (i[n] || t.purposes.length || t.flexiblePurposes.length) && (t.purposes.length || t.flexiblePurposes.length) || (N.vendorsSetting[n].consent = !1),
            e.features = t.features.map(function(e) {
                var t, e = G.iabGroups.features[e];
                return t = e ? {
                    description: e.description,
                    featureId: e.id,
                    featureName: e.name
                } : t
            }),
            e.specialFeatures = r.vendors[n].specialFeatures.reduce(function(e, t) {
                t = G.iabGroups.specialFeatures[t];
                return t && e.push({
                    description: t.description,
                    featureId: t.id,
                    featureName: t.name
                }),
                e
            }, []),
            e.purposes = r.vendors[n].purposes.reduce(function(e, t) {
                var o = G.iabGroups.purposes[t];
                return !o || i[n] && i[n].disabledCP && -1 !== i[n].disabledCP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }),
                e
            }, []),
            e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function(e, t) {
                var o = G.iabGroups.purposes[t];
                return !o || i[n] && i[n].disabledLIP && -1 !== i[n].disabledLIP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }),
                e
            }, []),
            e.specialPurposes = t.specialPurposes.map(function(e) {
                var t, e = G.iabGroups.specialPurposes[e];
                return t = e ? {
                    description: e.description,
                    purposeId: e.id,
                    purposeName: e.name
                } : t
            }),
            N.iabData.vendors.push(e),
            N.vendorsSetting[n].arrIndex = N.iabData.vendors.length - 1
        })
    }
    ,
    o.prototype.populateIABCookies = function() {
        return d(this, void 0, void 0, function() {
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    if (!this.isIABCrossConsentEnabled())
                        return [3, 5];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, this.setIAB3rdPartyCookie(m.EU_CONSENT, "", 0, !0)];
                case 2:
                    return e.sent(),
                    [3, 4];
                case 3:
                    return e.sent(),
                    this.setIABCookieData(),
                    this.updateCrossConsentCookie(!1),
                    [3, 4];
                case 4:
                    return [3, 6];
                case 5:
                    R.needReconsent() || this.setIABCookieData(),
                    e.label = 6;
                case 6:
                    return [2]
                }
            })
        })
    }
    ,
    o.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
        var r = x.iabThirdPartyConsentUrl;
        try {
            if (r && document.body)
                return this.updateThirdPartyConsent(r, e, t, o, n);
            throw new ReferenceError
        } catch (e) {
            throw e
        }
    }
    ,
    o.prototype.setIABCookieData = function() {
        N.oneTrustIABConsent.IABCookieValue = v.getCookie(m.EU_PUB_CONSENT)
    }
    ,
    o.prototype.updateThirdPartyConsent = function(n, r, i, s, a) {
        return d(this, void 0, void 0, function() {
            var t, o;
            return E(this, function(e) {
                return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + i + "&expire=" + s + "&isFirstRequest=" + a,
                document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t),
                [2]) : (w(o = document.createElement("iframe"), "display: none;", !0),
                o.id = "onetrustIabCookie",
                o.setAttribute("title", "OneTrust IAB Cookie"),
                o.src = t,
                document.body.appendChild(o),
                [2, new Promise(function(e) {
                    o.onload = function() {
                        G.thirdPartyiFrameResolve(),
                        G.thirdPartyiFrameLoaded = !0,
                        e()
                    }
                    ,
                    o.onerror = function() {
                        throw G.thirdPartyiFrameResolve(),
                        G.thirdPartyiFrameLoaded = !0,
                        e(),
                        new URIError
                    }
                }
                )])
            })
        })
    }
    ,
    o.prototype.setIABVendor = function(o, n) {
        var t;
        void 0 === o && (o = !0),
        void 0 === n && (n = !1),
        N.iabData.vendors.forEach(function(e) {
            var t, e = e.vendorId;
            G.legIntSettings.PAllowLI ? (t = void 0,
            t = (n || !!N.vendorsSetting[e].consent) && o,
            N.oneTrustIABConsent.vendors.push(e.toString() + ":" + t),
            N.oneTrustIABConsent.legIntVendors.push(e.toString() + ":" + N.vendorsSetting[e].legInt)) : (N.oneTrustIABConsent.legIntVendors = [],
            N.oneTrustIABConsent.vendors.push(e.toString() + ":" + o))
        }),
        x.UseGoogleVendors && (t = N.addtlVendors,
        Object.keys(N.addtlVendorsList).forEach(function(e) {
            o && (t.vendorSelected["" + e.toString()] = !0,
            t.vendorConsent.push("" + e.toString()))
        }))
    }
    ,
    o.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
        var e = this.getIABCrossConsentflagData();
        x.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(x.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
    }
    ,
    o.prototype.isIABCrossConsentEnabled = function() {
        return "true" === this.getIABCrossConsentflagData()
    }
    ,
    o.prototype.getIABCrossConsentflagData = function() {
        return v.readCookieParam(m.OPTANON_CONSENT, Re)
    }
    ,
    o.prototype.setGeolocationInCookies = function() {
        var e, t = v.readCookieParam(m.OPTANON_CONSENT, He);
        N.userLocation && !t && this.isAlertBoxClosedAndValid() ? (e = N.userLocation.country + ";" + N.userLocation.state,
        this.setUpdateGeolocationCookiesData(e)) : this.reconsentRequired() && t && this.setUpdateGeolocationCookiesData("")
    }
    ,
    o.prototype.iabStringSDK = function() {
        var e = O.moduleInitializer.otIABModuleData;
        if (x.IsIabEnabled && e)
            return {
                gvl: e.tcfSdkRef.gvl,
                tcModel: e.tcfSdkRef.tcModel,
                tcString: e.tcfSdkRef.tcString,
                cmpApi: e.tcfSdkRef.cmpApi,
                purposeRestriction: e.tcfSdkRef.purposeRestriction
            }
    }
    ,
    o.prototype.setUpdateGeolocationCookiesData = function(e) {
        v.writeCookieParam(m.OPTANON_CONSENT, He, e)
    }
    ,
    o.prototype.reconsentRequired = function() {
        return (O.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
    }
    ,
    o.prototype.awaitingReconsent = function() {
        return "true" === v.readCookieParam(m.OPTANON_CONSENT, Ne)
    }
    ,
    o.prototype.needReconsent = function() {
        var e = this.alertBoxCloseDate()
          , t = x.LastReconsentDate;
        return e && t && new Date(t) > new Date(e)
    }
    ,
    o.prototype.updateCrossConsentCookie = function(e) {
        v.writeCookieParam(m.OPTANON_CONSENT, Re, e)
    }
    ,
    o.prototype.alertBoxCloseDate = function() {
        return v.getCookie(m.ALERT_BOX_CLOSED)
    }
    ,
    o.prototype.isAlertBoxClosedAndValid = function() {
        return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
    }
    ,
    o.prototype.generateLegIntButtonElements = function(e, t, o) {
        return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + (o = void 0 === o ? !1 : o) + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + x.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? G.legIntSettings.PObjectLegIntText : G.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + x.pcButtonColor + "; " + (e ? "display:none;" : "") + '"\n                    >\n                        ' + G.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
    }
    ,
    o.prototype.syncAlertBoxCookie = function(e) {
        var t = x.ReconsentFrequencyDays;
        v.setCookie(m.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
    }
    ,
    o.prototype.syncCookieExpiry = function() {
        var e, t, o;
        N.syncRequired && (e = x.ReconsentFrequencyDays,
        t = v.getCookie(m.ALERT_BOX_CLOSED),
        o = v.getCookie(m.OPTANON_CONSENT),
        v.setCookie(m.OPTANON_CONSENT, o, e, !1, new Date(t)),
        R.needReconsent() && v.removeAlertBox(),
        (o = v.getCookie(m.EU_PUB_CONSENT)) && (R.isIABCrossConsentEnabled() ? v.removeIab2() : v.setCookie(m.EU_PUB_CONSENT, o, e, !1, new Date(t))),
        o = v.getCookie(m.ADDITIONAL_CONSENT_STRING)) && v.setCookie(m.ADDITIONAL_CONSENT_STRING, o, e, !1, new Date(t))
    }
    ,
    o.prototype.syncOtPreviewCookie = function() {
        var e = v.getCookie(m.OT_PREVIEW);
        e && v.setCookie(m.OT_PREVIEW, e, 1, !1)
    }
    ,
    o.prototype.dispatchConsentEvent = function() {
        window.dispatchEvent(new CustomEvent("OTConsentApplied",{
            OTConsentApplied: "yes"
        }))
    }
    ;
    var F, R = new o, to = function() {};
    no.prototype.isAlwaysActiveGroup = function(e) {
        var t;
        return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(),
        (t = e.Parent && t !== Ye ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === Ye)
    }
    ,
    no.prototype.getGrpStatus = function(e) {
        return e && e.Status ? G.DNTEnabled && e.IsDntEnabled ? Ze : e.Status : ""
    }
    ,
    no.prototype.getParentGroup = function(t) {
        var e;
        return t && 0 < (e = x.Groups.filter(function(e) {
            return e.OptanonGroupId === t
        })).length ? e[0] : null
    }
    ,
    no.prototype.checkIfGroupHasConsent = function(t) {
        var e = N.groupsConsent
          , o = B.findIndex(e, function(e) {
            return e.split(":")[0] === t.CustomGroupId
        });
        return -1 < o && "1" === e[o].split(":")[1]
    }
    ,
    no.prototype.checkIsActiveByDefault = function(e) {
        var t;
        return !this.getGrpStatus(e) || (t = this.getGrpStatus(e).toLowerCase(),
        (t = e.Parent && t !== Ye ? this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase() : t) === Ye) || t === Qe || t === Xe || t === Ze && !G.DNTEnabled
    }
    ,
    no.prototype.getGroupById = function(e) {
        for (var t = null, o = 0, n = x.Groups; o < n.length; o++) {
            for (var r = n[o], i = 0, s = q(r.SubGroups, [r]); i < s.length; i++) {
                var a = s[i];
                if (a.CustomGroupId === e) {
                    t = a;
                    break
                }
            }
            if (t)
                break
        }
        return t
    }
    ,
    no.prototype.isSoftOptInGrp = function(e) {
        return !!e && (e = e && !e.Parent ? e : C.getParentGroup(e.Parent),
        "inactive landingpage" === C.getGrpStatus(e).toLowerCase())
    }
    ,
    no.prototype.isOptInGrp = function(e) {
        return !!e && "inactive" === C.getGrpStatus(e).toLowerCase()
    }
    ,
    no.prototype.getParentByGrp = function(e) {
        return e.Parent ? this.getGroupById(e.Parent) : null
    }
    ,
    no.prototype.getVSById = function(e) {
        return N.getVendorsInDomain().get(e)
    }
    ,
    no.prototype.getGrpByVendorId = function(e) {
        var t = null;
        return t = N.getVendorsInDomain().has(e) ? N.getVendorsInDomain().get(e).groupRef : t
    }
    ;
    var C, oo = no;
    function no() {}
    so.prototype.ensureConsentId = function(e, t) {
        var o, n = !1, r = v.readCookieParam(m.OPTANON_CONSENT, De, !0), e = !e && t ? (n = !0,
        1) : 0;
        return r ? (o = parseInt(v.readCookieParam(m.OPTANON_CONSENT, Fe), 10),
        isNaN(o) || (e = t ? ++o : o,
        n = !1)) : (r = B.generateUUID(),
        v.writeCookieParam(m.OPTANON_CONSENT, De, r)),
        v.writeCookieParam(m.OPTANON_CONSENT, Fe, e),
        {
            id: r,
            count: e,
            addDfltInt: n
        }
    }
    ,
    so.prototype.isAnonymousConsent = function() {
        var e = !0
          , t = N.dsParams;
        return e = t && t.hasOwnProperty("isAnonymous") ? t.isAnonymous : e
    }
    ,
    so.prototype.isAuthUsr = function(e) {
        N.consentPreferences ? v.writeCookieParam(m.OPTANON_CONSENT, "iType", "") : v.writeCookieParam(m.OPTANON_CONSENT, "iType", "" + ue[e])
    }
    ,
    so.prototype.createConsentTxn = function(e, t, o, n) {
        void 0 === t && (t = ""),
        void 0 === o && (o = !1);
        var r, i = this.ensureConsentId(e, n = void 0 === n ? !0 : n), s = x.ConsentIntegration, a = window.navigator.userAgent, l = /OneTrustBot/.test(a);
        s.ConsentApi && s.RequestInformation && i.id && !l && (l = O.moduleInitializer,
        ro.noOptOutToogle = l.TenantFeatures.CookieV2NoOptOut,
        r = N.bannerCloseSource,
        ro.isCloseByIconOrLink = r === Z.BannerCloseButton || r === Z.ContinueWithoutAcceptingButton,
        r = {
            requestInformation: s.RequestInformation,
            identifier: i.id,
            customPayload: {
                Interaction: i.count,
                AddDefaultInteraction: i.addDfltInt
            },
            isAnonymous: this.isAnonymousConsent(),
            test: l.ScriptType === tt || l.ScriptType === ot,
            purposes: this.getConsetPurposes(e),
            dsDataElements: {}
        },
        N.isV2Stub && (r.syncGroup = N.syncGrpId,
        "IAB2" !== G.iabType || R.isIABCrossConsentEnabled() || (r.tcStringV2 = v.getCookie(m.EU_PUB_CONSENT)),
        x.UseGoogleVendors) && (r.gacString = v.getCookie(m.ADDITIONAL_CONSENT_STRING)),
        (i = C.getGroupById(x.AdvancedAnalyticsCategory)) && this.canSendAdvancedAnalytics(r.purposes, i) && (r.dsDataElements = {
            InteractionType: t,
            Country: N && N.userLocation ? N.userLocation.country : "",
            UserAgent: a,
            ConsentModel: x.ConsentModel.Name
        }),
        !l.MobileSDK && n && r.purposes.length && (i = JSON.stringify(r),
        e && navigator.sendBeacon ? (navigator.sendBeacon(s.ConsentApi, i),
        R.dispatchConsentEvent()) : !o && G.apiSource !== te.UpdateConsent && N.consentInteractionType === t || (N.isV2Stub && t && this.isAuthUsr(t),
        Ut.ajax({
            url: s.ConsentApi,
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(r),
            sync: e,
            success: function() {
                R.dispatchConsentEvent()
            },
            error: function() {
                R.dispatchConsentEvent()
            }
        }))),
        G.pubDomainData.ConsentIntegrationData = {
            consentApi: s.ConsentApi,
            consentPayload: r
        }),
        N.consentInteractionType = t
    }
    ,
    so.prototype.getGrpDetails = function(e, o) {
        var n = [];
        return e.forEach(function(e) {
            var e = e.split(":")
              , t = e[0]
              , e = "true" === e[1] ? "1" : "0"
              , t = ro.getOptanonIdForIabGroup(t, o);
            n.push(t + ":" + e)
        }),
        n
    }
    ,
    so.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === oe.Purpose ? o = "IABV2_" + e : t === oe.SpecialFeature && (o = "ISFV2_" + e),
        o
    }
    ,
    so.prototype.getConsetPurposes = function(o) {
        var n = this
          , r = []
          , e = []
          , t = N.oneTrustIABConsent
          , i = t && t.purpose ? this.getGrpDetails(t.purpose, oe.Purpose) : []
          , s = t && t.specialFeatures ? this.getGrpDetails(t.specialFeatures, oe.SpecialFeature) : []
          , e = q(t.specialPurposes, t.features);
        return q(N.groupsConsent, i, s).forEach(function(e) {
            var e = e.split(":")
              , t = C.getGroupById(e[0]);
            t && t.PurposeId && (e = n.getTransactionType(t, e, o),
            r.push({
                Id: t.PurposeId,
                TransactionType: e.txnType
            }),
            n.setVSConsentByGroup(t, e).forEach(function(e) {
                return r.push(e)
            }))
        }),
        e.forEach(function(e) {
            e.purposeId && r.push({
                Id: e.purposeId,
                TransactionType: Ke
            })
        }),
        N.bannerCloseSource = Z.Unknown,
        r
    }
    ,
    so.prototype.setVSConsentByGroup = function(e, o) {
        var n = [];
        return N.showVendorService && e.VendorServices && e.VendorServices.forEach(function(e) {
            var t;
            t = o.useOwn ? N.vsConsent.get(e.CustomVendorServiceId) ? je : ze : o.txnType,
            n.push({
                Id: e.PurposeId,
                TransactionType: t
            })
        }),
        n
    }
    ,
    so.prototype.getTransactionType = function(e, t, o) {
        var n = {
            txnType: Ke,
            useOwn: !1
        };
        return e.Status === Ye ? n.txnType = Ke : e.Status === $e && ro.isCloseByIconOrLink || o ? n.txnType = We : e.Status === Xe && ro.isCloseByIconOrLink ? n.txnType = ro.noOptOutToogle ? Je : je : (n.useOwn = !0,
        n.txnType = this.getTxnType(t[1])),
        n
    }
    ,
    so.prototype.getTxnType = function(e) {
        return "0" === e ? ze : je
    }
    ,
    so.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [je, Ke];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }
    ,
    so.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || "IAB2_STACK" === e.Type ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    }
    ;
    var ro, io = so;
    function so() {}
    co.prototype.isIabCookieValid = function() {
        var e = null;
        return null !== (e = "IAB2" === G.iabType ? v.getCookie("eupubconsent-v2") : e)
    }
    ,
    co.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (v.removeAlertBox(),
        v.removeIab1())
    }
    ,
    co.prototype.initializeIABModule = function() {
        return d(this, void 0, void 0, function() {
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return x.IsIabEnabled ? (O.moduleInitializer.otIABModuleData = window.otIabModule,
                    R.setIabData(),
                    [4, R.populateVendorListTCF()]) : [3, 2];
                case 1:
                    return e.sent(),
                    R.isIABCrossConsentEnabled() || this.iabTypeIsChanged(),
                    R.populateIABCookies(),
                    x.UseGoogleVendors && this.removeInActiveAddtlVendors(),
                    [3, 3];
                case 2:
                    v.removeIab1(),
                    e.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    co.prototype.removeInActiveAddtlVendors = function() {
        var e, t = x.OverridenGoogleVendors;
        for (e in N.addtlVendorsList)
            t && t[e] && !t[e].active && delete N.addtlVendorsList[e]
    }
    ,
    co.prototype.getIABConsentData = function() {
        var e = N.oneTrustIABConsent
          , t = R.iabStringSDK().tcString()
          , o = (N.tcModel.unsetAllPurposeConsents(),
        N.tcModel.unsetAllVendorConsents(),
        N.tcModel.unsetAllVendorLegitimateInterests(),
        N.tcModel.unsetAllSpecialFeatureOptins(),
        N.tcModel.unsetAllPurposeLegitimateInterests(),
        N.tcModel.publisherConsents.empty(),
        N.tcModel.publisherLegitimateInterests.empty(),
        N.tcModel.purposeConsents.set(B.getActiveIdArray(e.purpose)),
        N.tcModel.publisherConsents.set(B.getActiveIdArray(e.purpose)),
        G.legIntSettings.PAllowLI ? B.getActiveIdArray(e.legimateInterest) : [])
          , o = (N.tcModel.purposeLegitimateInterests.set(o),
        N.tcModel.publisherLegitimateInterests.set(o),
        N.tcModel.vendorConsents.set(B.getActiveIdArray(B.distinctArray(e.vendors))),
        G.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []),
        N.tcModel.vendorLegitimateInterests.set(B.getActiveIdArray(B.distinctArray(e.legIntVendors))),
        N.tcModel.specialFeatureOptins.set(B.getActiveIdArray(e.specialFeatures)),
        new Date)
          , e = new Date(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate(),0,0,0)
          , o = (N.tcModel.lastUpdated = e,
        N.tcModel.created = e,
        t.encode(N.tcModel));
        return N.cmpApi.update(o, !1),
        o
    }
    ,
    co.prototype.decodeTCString = function(e) {
        return R.iabStringSDK().tcString().decode(e)
    }
    ,
    co.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }),
        e.apply(this, o)
    }
    ,
    co.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }),
        e.apply(this, t)
    }
    ,
    co.prototype.populateVendorAndPurposeFromCookieData = function() {
        var n = N.oneTrustIABConsent
          , e = ao.decodeTCString(n.IABCookieValue)
          , r = {}
          , i = {}
          , s = (G.iabGrps.forEach(function(e) {
            e.Type === Vt ? r[G.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === Ot && (i[G.iabGrpIdMap[e.CustomGroupId]] = e)
        }),
        [])
          , e = (e.vendorConsents.forEach(function(e, t) {
            var o = e;
            N.vendorsSetting[t] && N.vendorsSetting[t].consent || !e || (s.push(t),
            o = !1),
            n.vendors.push(t + ":" + o)
        }),
        e.vendorConsents.unset(s),
        s = [],
        e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            N.vendorsSetting[t] && N.vendorsSetting[t].legInt || !e || (s.push(t),
            o = !1),
            n.legIntVendors.push(t + ":" + o)
        }),
        e.vendorLegitimateInterests.unset(s),
        s = [],
        e.purposeConsents.forEach(function(e, o) {
            var t = e
              , e = (!(r[o] && r[o].HasConsentOptOut) && e && (s.push(o),
            t = !1),
            B.findIndex(n.purpose, function(e, t) {
                return e.split(":")[0] === o.toString()
            }));
            -1 === e ? n.purpose.push(o + ":" + t) : n.purpose[e] = o + ":" + t
        }),
        e.purposeConsents.unset(s),
        e.publisherConsents.unset(s),
        s = [],
        e.specialFeatureOptins.forEach(function(e, o) {
            var t = e
              , e = (!(i[o] && i[o].HasConsentOptOut) && e && (s.push(o),
            t = !1),
            B.findIndex(n.specialFeatures, function(e, t) {
                return e.split(":")[0] === o.toString()
            }));
            -1 === e ? n.specialFeatures.push(o + ":" + t) : n.specialFeatures[e] = o + ":" + t
        }),
        e.specialFeatureOptins.unset(s),
        s = [],
        e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e
              , e = (!(r[o] && r[o].HasLegIntOptOut && G.legIntSettings.PAllowLI) && e && (s.push(o),
            t = !1),
            B.findIndex(n.legimateInterest, function(e, t) {
                return e.split(":")[0] === o.toString()
            }));
            -1 === e ? n.legimateInterest.push(o + ":" + t) : n.legimateInterest[e] = o + ":" + t
        }),
        e.purposeLegitimateInterests.unset(s),
        e.publisherLegitimateInterests.unset(s),
        this.syncBundleAndStack(),
        e.gvl = N.tcModel.gvl,
        e.isServiceSpecific = !R.isIABCrossConsentEnabled(),
        N.tcModel = e,
        R.iabStringSDK().tcString().encode(e));
        R.isAlertBoxClosedAndValid() ? (n.IABCookieValue !== e && (n.IABCookieValue = e,
        R.isIABCrossConsentEnabled() ? R.setIAB3rdPartyCookie(m.EU_CONSENT, n.IABCookieValue, x.ReconsentFrequencyDays, !1) : v.setCookie(m.EU_PUB_CONSENT, n.IABCookieValue, x.ReconsentFrequencyDays)),
        N.cmpApi.update(e, !1)) : R.resetTCModel()
    }
    ,
    co.prototype.syncBundleAndStack = function() {
        var e = v.readCookieParam(m.OPTANON_CONSENT, "groups");
        N.groupsConsent = B.strToArr(e),
        x.Groups.forEach(function(t) {
            var e, o;
            t.Type !== Lt && t.Type !== Bt || (o = y.isBundleOrStackActive(t),
            e = B.findIndex(N.groupsConsent, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            }),
            o = t.CustomGroupId + ":" + Number(o),
            -1 < e ? N.groupsConsent[e] = o : N.groupsConsent.push(o))
        }),
        v.writeCookieParam(m.OPTANON_CONSENT, "groups", N.groupsConsent.join(","))
    }
    ,
    co.prototype.populateGoogleConsent = function() {
        var e;
        x.UseGoogleVendors && (e = v.getCookie(m.ADDITIONAL_CONSENT_STRING)) && (N.isAddtlConsent = !0,
        N.addtlVendors.vendorConsent = e.replace(N.addtlConsentVersion, "").split("."))
    }
    ,
    co.prototype.isInitIABCookieData = function(e) {
        return "init" === e || R.needReconsent()
    }
    ,
    co.prototype.updateFromGlobalConsent = function(e) {
        var t = N.oneTrustIABConsent;
        t.IABCookieValue = e,
        t.purpose = t.purpose || [],
        t.specialFeatures = t.specialFeatures || [],
        t.legIntVendors = [],
        t.legimateInterest = t.legimateInterest || [],
        t.vendors = [],
        ao.populateVendorAndPurposeFromCookieData(),
        v.setCookie(m.EU_PUB_CONSENT, "", -1)
    }
    ;
    var ao, lo = co;
    function co() {}
    var po, uo = "groups", ho = "hosts", go = "genVendors", Co = "vs", yo = (fo.prototype.writeHstParam = function(e, t) {
        v.writeCookieParam(e, "hosts", B.arrToStr((t = void 0 === t ? null : t) || N.hostsConsent))
    }
    ,
    fo.prototype.writeGenVenCookieParam = function(e) {
        var t = x.GeneralVendors
          , o = N.genVendorsConsent
          , n = "";
        t.forEach(function(e) {
            n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
        }),
        v.writeCookieParam(e, "genVendors", n)
    }
    ,
    fo.prototype.writeVSConsentCookieParam = function(e) {
        var o = "";
        N.vsConsent.forEach(function(e, t) {
            return o += t + ":" + (e ? "1" : "0") + ","
        }),
        o = o.slice(0, -1),
        v.writeCookieParam(e, Co, o)
    }
    ,
    fo.prototype.updateGroupsInCookie = function(e, t) {
        v.writeCookieParam(e, "groups", B.arrToStr((t = void 0 === t ? null : t) || N.groupsConsent))
    }
    ,
    fo.prototype.writeGrpParam = function(e, t) {
        this.updateGroupsInCookie(e, t = void 0 === t ? null : t),
        x.IsIabEnabled && R.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
    }
    ,
    fo.prototype.insertOrUpdateIabCookies = function() {
        var e, t = N.oneTrustIABConsent;
        t.purpose && t.vendors && (N.isAddtlConsent = x.UseGoogleVendors,
        t.IABCookieValue = ao.getIABConsentData(),
        e = x.ReconsentFrequencyDays,
        R.isIABCrossConsentEnabled() ? R.setIAB3rdPartyCookie(m.EU_CONSENT, t.IABCookieValue, e, !1) : (v.setCookie(m.EU_PUB_CONSENT, t.IABCookieValue, e),
        x.UseGoogleVendors && v.setCookie(m.ADDITIONAL_CONSENT_STRING, "" + N.addtlConsentVersion + N.addtlVendors.vendorConsent.join("."), e)))
    }
    ,
    fo);
    function fo() {}
    vo.prototype.initGenVendorConsent = function() {
        var e, t, n = this;
        x.GenVenOptOut ? (e = G.consentableGrps,
        (t = v.readCookieParam(m.OPTANON_CONSENT, "genVendors")) ? (N.genVendorsConsent = {},
        t.split(",").forEach(function(e) {
            e && "1" === (e = e.split(":"))[1] && (N.genVendorsConsent[e[0]] = !0)
        })) : (N.genVendorsConsent = {},
        e.forEach(function(e) {
            var o = N.syncRequired ? C.checkIfGroupHasConsent(e) : C.checkIsActiveByDefault(e);
            e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                N.genVendorsConsent[e] = t || o
            })
        }))) : (N.genVendorsConsent = {},
        po.writeGenVenCookieParam(m.OPTANON_CONSENT))
    }
    ,
    vo.prototype.populateGenVendorLists = function() {
        G.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (C.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                N.alwaysActiveGenVendors.push(e)
            }) : C.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                N.optInGenVendors.push(e)
            }) : C.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                N.optInGenVendors.includes(e) || N.softOptInGenVendors.push(e)
            }))
        })
    }
    ,
    vo.prototype.updateGenVendorStatus = function(e, t) {
        N.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }
    ,
    vo.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return N.alwaysActiveGenVendors.includes(e)
    }
    ;
    var ko, mo = vo;
    function vo() {}
    Po.prototype.synchroniseCookieGroupData = function(e) {
        var t = v.readCookieParam(m.OPTANON_CONSENT, "groups")
          , n = B.strToArr(t)
          , r = B.strToArr(t.replace(/:0|:1/g, ""))
          , t = R.needReconsent()
          , i = !1
          , s = !1;
        e.forEach(function(e) {
            var t, o = e.CustomGroupId;
            e.Type !== Lt && e.Type !== Bt && (-1 === B.indexOf(r, o) ? (i = !0,
            t = C.checkIsActiveByDefault(e),
            s = !0,
            n.push(o + (t ? ":1" : ":0"))) : G.gpcEnabled && e.IsGpcEnabled && G.gpcValueChanged && -1 < (t = n.indexOf(o + ":1")) && (s = !0,
            n[t] = o + ":0"))
        }),
        s = this.updateConsentForBundleGrps(e, n, r, s, t),
        (s = this.removeRedundantGrpsFromCookie(n, t, s)) && (N.fireOnetrustGrp = !0,
        po.updateGroupsInCookie(m.OPTANON_CONSENT, n),
        N.syncRequired) && i && v.removeAlertBox()
    }
    ,
    Po.prototype.removeRedundantGrpsFromCookie = function(e, o, t) {
        for (var n = e.length, r = t; n--; )
            !function() {
                var t = e[n].replace(/:0|:1/g, "");
                x.Groups.some(function(e) {
                    return (!o || e.Type !== Bt) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                        return e.CustomGroupId === t
                    }))
                }) || (r = !0,
                e.splice(n, 1))
            }();
        return r
    }
    ,
    Po.prototype.updateConsentForBundleGrps = function(e, n, r, t, i) {
        var s = t;
        return e.forEach(function(e) {
            var t = e.Type === Lt || e.Type === Bt
              , o = e.CustomGroupId;
            t && (-1 === B.indexOf(r, o) ? (t = y.isBundleOrStackActive(e, n),
            s = !0,
            n.push(o + (t ? ":1" : ":0"))) : (i && "false" === R.getIABCrossConsentflagData() || G.gpcEnabled && G.gpcValueChanged || N.syncRequired) && (t = y.isBundleOrStackActive(e, n),
            -1 < (e = n.indexOf(o + ":" + (t ? "0" : "1")))) && (s = !0,
            n[e] = o + (t ? ":1" : ":0")))
        }),
        s
    }
    ,
    Po.prototype.groupHasConsent = function(t) {
        var e = B.strToArr(v.readCookieParam(m.OPTANON_CONSENT, "groups"))
          , o = B.findIndex(e, function(e) {
            return e.split(":")[0] === t.CustomGroupId
        });
        return -1 < o && "1" === e[o].split(":")[1]
    }
    ,
    Po.prototype.synchroniseCookieHostData = function() {
        for (var n = this, e = v.readCookieParam(m.OPTANON_CONSENT, "hosts"), r = B.strToArr(e), i = B.strToArr(e.replace(/:0|:1/g, "")), s = !1, o = (x.Groups.forEach(function(e) {
            q(e.SubGroups, [e]).forEach(function(o) {
                o.Hosts.length && o.Hosts.forEach(function(e) {
                    var t;
                    -1 === B.indexOf(i, e.HostId) && (s = !0,
                    t = N.syncRequired ? n.groupHasConsent(o) : C.checkIsActiveByDefault(o),
                    r.push(e.HostId + (t ? ":1" : ":0")))
                })
            })
        }),
        r.length); o--; )
            !function() {
                var t = r[o].replace(/:0|:1/g, "");
                x.Groups.some(function(e) {
                    return q(e.SubGroups, [e]).some(function(e) {
                        return e.Hosts.some(function(e) {
                            return e.HostId === t
                        })
                    })
                }) || (s = !0,
                r.splice(o, 1))
            }();
        s && (N.fireOnetrustGrp = !0,
        po.writeHstParam(m.OPTANON_CONSENT, r))
    }
    ,
    Po.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }
    ,
    Po.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            ko.updateGenVendorStatus(e, t)
        })
    }
    ,
    Po.prototype.updateHostStatus = function(t, e) {
        var o = B.findIndex(N.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        });
        -1 < o && (e = e || this.isHostPartOfAlwaysActiveGroup(t.HostId),
        N.hostsConsent[o] = t.HostId + ":" + (e ? "1" : "0"))
    }
    ,
    Po.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return N.oneTrustAlwaysActiveHosts.includes(e)
    }
    ;
    var bo, So = Po;
    function Po() {}
    var To, Ao = function() {
        this.assets = function() {
            return {
                name: "otCookiePolicy",
                html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
            }
        }
    }, Io = (Lo.prototype.isLandingPage = function() {
        var e = v.readCookieParam(m.OPTANON_CONSENT, "landingPath");
        return !e || e === location.href
    }
    ,
    Lo.prototype.setLandingPathParam = function(e) {
        v.writeCookieParam(m.OPTANON_CONSENT, "landingPath", e)
    }
    ,
    Lo);
    function Lo() {}
    Eo.prototype.loadBanner = function() {
        O.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? D(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            D(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? D(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            D(window).trigger("otloadbanner")
        }),
        G.pubDomainData.IsBannerLoaded = !0
    }
    ,
    Eo.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        a.consentChangedEventMap[t] || (a.consentChangedEventMap[t] = !0,
        window.addEventListener("consent.onetrust", e))
    }
    ,
    Eo.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        var r = !1;
        O.moduleInitializer.GATrackToggle && ("AS" === O.moduleInitializer.GATrackAssignedCategory || "" === O.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + O.moduleInitializer.GATrackAssignedCategory + ",")) && (r = !0),
        !G.ignoreGoogleAnlyticsCall && r && (void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]),
        "function" == typeof window.ga && window.ga("send", "event", e, t, o, n),
        r = window[G.otDataLayer.name],
        !G.otDataLayer.ignore) && void 0 !== r && r && r.constructor === Array && r.push({
            event: "trackOptanonEvent",
            optanonCategory: e,
            optanonAction: t,
            optanonLabel: o,
            optanonValue: n
        })
    }
    ,
    Eo.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString()
          , e = (e ? v.setCookie(m.ALERT_BOX_CLOSED, t, x.ReconsentFrequencyDays) : v.setCookie(m.ALERT_BOX_CLOSED, t, 0),
        D(".onetrust-pc-dark-filter").el[0]);
        e && "none" !== getComputedStyle(e).getPropertyValue("display") && D(".onetrust-pc-dark-filter").fadeOut(400)
    }
    ,
    Eo.prototype.updateConsentFromCookie = function(t) {
        return d(this, void 0, void 0, function() {
            return E(this, function(e) {
                return t ? (ao.isInitIABCookieData(t) || ao.updateFromGlobalConsent(t),
                "init" === t && (v.removeIab1(),
                R.isAlertBoxClosedAndValid() && R.resetTCModel(),
                v.removeAlertBox())) : (R.resetTCModel(),
                R.updateCrossConsentCookie(!1),
                R.setIABCookieData()),
                a.assetPromise.then(function() {
                    a.loadBanner()
                }),
                [2]
            })
        })
    }
    ;
    var a, _o = Eo;
    function Eo() {
        var t = this;
        this.consentChangedEventMap = {},
        this.assetResolve = null,
        this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        }
        )
    }
    var f, Vo = "opt-out", Oo = "OneTrust Cookie Consent", wo = "Banner Auto Close", Bo = "Banner Close Button", Go = "Banner - Continue without Accepting", xo = "Banner - Confirm", No = "Preferences Close Button", Do = "Preference Center Opened From Banner", Ho = "Preference Center Opened From Button", Fo = "Preference Center Opened From Function", Ro = "Preferences Save Settings", qo = "Vendors List Opened From Function", Mo = "Floating Cookie Settings Open Button", Uo = "Floating Cookie Settings Close Button", jo = "Preferences Toggle On", zo = "Preferences Toggle Off", Ko = "General Vendor Toggle On", Wo = "General Vendor Toggle Off", Jo = "Host Toggle On", Yo = "Host Toggle Off", Xo = "Preferences Legitimate Interest Objection", Qo = "Preferences Legitimate Interest Remove Objection", $o = "IAB Vendor Toggle ON", Zo = "IAB Vendor Toggle Off", en = "IAB Vendor Legitimate Interest Objection", tn = "IAB Vendor Legitimate Interest Remove Objection", on = "Vendor Service Toggle On", nn = "Vendor Service Toggle Off", rn = (sn.prototype.initializeFeaturesAndSpecialPurposes = function() {
        N.oneTrustIABConsent.features = [],
        N.oneTrustIABConsent.specialPurposes = [],
        x.Groups.forEach(function(e) {
            var t;
            "IAB2_FEATURE" !== e.Type && "IAB2_SPL_PURPOSE" !== e.Type || ((t = {}).groupId = e.OptanonGroupId,
            t.purposeId = e.PurposeId,
            t.value = !0,
            ("IAB2_FEATURE" === e.Type ? N.oneTrustIABConsent.features : N.oneTrustIABConsent.specialPurposes).push(t))
        })
    }
    ,
    sn.prototype.initGrpsAndHosts = function() {
        this.initializeGroupData(G.consentableGrps),
        x.showCookieList && y.isOptOutEnabled() ? this.initializeHostData(G.consentableGrps) : (N.hostsConsent = [],
        po.writeHstParam(m.OPTANON_CONSENT))
    }
    ,
    sn.prototype.ensureHtmlGroupDataInitialised = function() {
        var e, t, o, n;
        this.initGrpsAndHosts(),
        N.showGeneralVendors && (ko.populateGenVendorLists(),
        ko.initGenVendorConsent()),
        x.IsIabEnabled && (this.initializeIABData(),
        this.initializeFeaturesAndSpecialPurposes()),
        N.vsIsActiveAndOptOut && this.initializeVendorsService(),
        R.setOrUpdate3rdPartyIABConsentFlag(),
        R.setGeolocationInCookies(),
        x.IsConsentLoggingEnabled && (e = window.OneTrust.dataSubjectParams || {},
        o = "",
        n = !1,
        (t = v.readCookieParam(m.OPTANON_CONSENT, "iType")) && N.isV2Stub && e.id && e.token && (n = !0,
        o = ue[t]),
        ro.createConsentTxn(!1, o, !1, n))
    }
    ,
    sn.prototype.initializeVendorsService = function() {
        var o = R.isAlertBoxClosedAndValid()
          , e = v.readCookieParam(m.OPTANON_CONSENT, Co)
          , n = B.strToMap(e);
        N.getVendorsInDomain().forEach(function(e, t) {
            n.has(t) || (e = !o && C.checkIsActiveByDefault(e.groupRef),
            n.set(t, e))
        }),
        N.vsConsent = n
    }
    ,
    sn.prototype.initializeGroupData = function(e) {
        var t;
        v.readCookieParam(m.OPTANON_CONSENT, uo) ? (bo.synchroniseCookieGroupData(e),
        t = v.readCookieParam(m.OPTANON_CONSENT, uo),
        N.groupsConsent = B.strToArr(t)) : (N.groupsConsent = [],
        e.forEach(function(e) {
            N.groupsConsent.push("" + e.CustomGroupId + (C.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
        }),
        x.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
    }
    ,
    sn.prototype.initializeHostData = function(e) {
        var t, r;
        v.readCookieParam(m.OPTANON_CONSENT, "hosts") ? (bo.synchroniseCookieHostData(),
        t = v.readCookieParam(m.OPTANON_CONSENT, "hosts"),
        N.hostsConsent = B.strToArr(t),
        e.forEach(function(e) {
            C.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                N.oneTrustAlwaysActiveHosts.push(e.HostId)
            })
        })) : (N.hostsConsent = [],
        r = {},
        e.forEach(function(e) {
            var o = C.isAlwaysActiveGroup(e)
              , n = N.syncRequired ? bo.groupHasConsent(e) : C.checkIsActiveByDefault(e);
            e.Hosts.length && e.Hosts.forEach(function(e) {
                var t;
                r[e.HostId] ? bo.updateHostStatus(e, n) : (r[e.HostId] = !0,
                o && N.oneTrustAlwaysActiveHosts.push(e.HostId),
                t = bo.isHostPartOfAlwaysActiveGroup(e.HostId),
                N.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0")))
            })
        }))
    }
    ,
    sn.prototype.consentDefaulCall = function() {
        var e = parseInt(v.readCookieParam(m.OPTANON_CONSENT, Fe), 10);
        !isNaN(e) && 0 !== e || (a.triggerGoogleAnalyticsEvent(Oo, "Click", "No interaction"),
        x.IsConsentLoggingEnabled && ro.createConsentTxn(!0),
        window.removeEventListener("beforeunload", f.consentDefaulCall))
    }
    ,
    sn.prototype.fetchAssets = function(s) {
        return void 0 === s && (s = null),
        d(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = O.moduleInitializer,
                    i = R.isAlertBoxClosedAndValid(),
                    o = !!s,
                    i = f.isFetchBanner(t.IsSuppressBanner, i),
                    n = f.cookieSettingBtnPresent(),
                    n = "IAB2" === x.IabType ? x.PCShowPersistentCookiesHoverButton && (!x.PCenterDynamicRenderingEnable || x.PCenterDynamicRenderingEnable && !n) : x.PCShowPersistentCookiesHoverButton,
                    r = "true" === N.urlParams.get(kt),
                    N.hideBanner = r,
                    [4, Promise.all([!i || x.NoBanner || r ? Promise.resolve(null) : Jt.getBannerContent(o, s), !t.IsSuppressPC || N.isPCVisible ? Jt.getPcContent() : Promise.resolve(null), n ? Jt.getCSBtnContent() : Promise.resolve(null), Jt.getCommonStyles()])];
                case 1:
                    return i = e.sent(),
                    r = i[0],
                    o = i[1],
                    t = i[2],
                    n = i[3],
                    f.fetchContent(r, o, t, n),
                    f.setCookieListGroupData(),
                    [2]
                }
            })
        })
    }
    ,
    sn.prototype.fetchContent = function(e, t, o, n) {
        var r;
        e && (r = e.html,
        O.fp.CookieV2SSR || (r = atob(e.html)),
        this.bannerGroup = {
            name: e.name,
            html: r,
            css: e.css
        }),
        t && (this.preferenceCenterGroup = {
            name: t.name,
            html: atob(t.html),
            css: t.css
        },
        O.isV2Template = x.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name)),
        o && (this.csBtnGroup = {
            name: "CookieSettingsButton",
            html: atob(o.html),
            css: o.css
        }),
        n && (this.commonStyles = n)
    }
    ,
    sn.prototype.cookieSettingBtnPresent = function() {
        return D("#ot-sdk-btn").length || D(".ot-sdk-show-settings").length || D(".optanon-show-settings").length
    }
    ,
    sn.prototype.isFetchBanner = function(e, t) {
        return !e || x.ShowAlertNotice && !t && e && !D("#onetrust-banner-sdk").length
    }
    ,
    sn.prototype.setCookieListGroupData = function() {
        var e;
        O.fp.CookieV2TrackingTechnologies || (e = (new Ao).assets(),
        f.cookieListGroup = {
            name: e.name,
            html: e.html,
            css: x.useRTL ? e.cssRTL : e.css
        })
    }
    ,
    sn.prototype.initializeIabPurposeConsentOnReload = function() {
        var t = this;
        G.consentableIabGrps.forEach(function(e) {
            t.setIABConsent(e, !1),
            e.IsLegIntToggle = !0,
            t.setIABConsent(e, !1)
        })
    }
    ,
    sn.prototype.initializeIABData = function(o, n, r) {
        var i = this
          , e = (void 0 === o && (o = !1),
        void 0 === n && (n = !1),
        void 0 === r && (r = !1),
        N.oneTrustIABConsent)
          , t = (e.purpose = [],
        e.vendors = [],
        e.legIntVendors = [],
        e.specialFeatures = [],
        e.legimateInterest = [],
        N.addtlVendors)
          , s = x.VendorConsentModel === Vo;
        t.vendorConsent = [],
        !e.IABCookieValue || o || n || R.reconsentRequired() ? (G.consentableIabGrps.forEach(function(e) {
            var t;
            n && !r ? i.setIABConsent(e, C.isAlwaysActiveGroup(e)) : r ? e.HasConsentOptOut && i.setIABConsent(e, !1) : (t = o && e.HasConsentOptOut,
            i.setIABConsent(e, t),
            "IAB2_PURPOSE" === e.Type && (e.IsLegIntToggle = !0,
            i.setIABConsent(e, e.HasLegIntOptOut)))
        }),
        x.IsIabEnabled && r && (N.oneTrustIABConsent.legimateInterest = N.vendors.selectedLegInt.slice()),
        t = r ? s : o || !n && s,
        R.setIABVendor(t, r),
        !R.reconsentRequired() || o || n || R.resetTCModel()) : (this.initializeIabPurposeConsentOnReload(),
        ao.populateGoogleConsent(),
        ao.populateVendorAndPurposeFromCookieData())
    }
    ,
    sn.prototype.canSoftOptInInsertForGroup = function(e) {
        var e = C.getGroupById(e);
        if (e)
            return e = e && !e.Parent ? e : C.getParentGroup(e.Parent),
            "inactive landingpage" !== C.getGrpStatus(e).toLowerCase() || !To.isLandingPage()
    }
    ,
    sn.prototype.setIABConsent = function(e, t) {
        e.Type === Ot ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t),
        e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
    }
    ,
    sn.prototype.setIabPurposeConsent = function(o, n) {
        var r = !1;
        N.oneTrustIABConsent.purpose = N.oneTrustIABConsent.purpose.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n,
            r = !0),
            e
        }),
        r || N.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
    }
    ,
    sn.prototype.setIabLegIntConsent = function(o, n) {
        var r = !1;
        N.oneTrustIABConsent.legimateInterest = N.oneTrustIABConsent.legimateInterest.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n,
            r = !0),
            e
        }),
        r || N.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
    }
    ,
    sn.prototype.setIabSpeciFeatureConsent = function(o, n) {
        var r = !1;
        N.oneTrustIABConsent.specialFeatures = N.oneTrustIABConsent.specialFeatures.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n,
            r = !0),
            e
        }),
        r || N.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
    }
    ,
    sn);
    function sn() {}
    cn.prototype.getAllowAllButton = function() {
        return D("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }
    ,
    cn.prototype.getSelectedVendors = function() {
        return D("#onetrust-pc-sdk " + H.P_Tgl_Cntr + " .ot-checkbox input:checked")
    }
    ;
    var an, ln = cn;
    function cn() {}
    un.prototype.setBannerFocus = function() {
        var e = Array.prototype.slice.call(D("#onetrust-banner-sdk .onetrust-vendors-list-handler").el)
          , t = Array.prototype.slice.call(D('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el)
          , o = Array.prototype.slice.call(D("#onetrust-banner-sdk .ot-bnr-save-handler").el)
          , n = Array.prototype.slice.call(D("#onetrust-banner-sdk #onetrust-pc-btn-handler").el)
          , r = Array.prototype.concat.call(Array.prototype.slice.call(D("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(D("#onetrust-banner-sdk .ot-cat-lst button").el), e)
          , r = Array.prototype.concat.call(t, r)
          , i = Array.prototype.slice.call(D("#onetrust-banner-sdk .onetrust-close-btn-handler").el)
          , e = (G.bannerName === ct && (r = Array.prototype.concat.call(e, t)),
        Array.prototype.slice.call(D("#onetrust-banner-sdk #onetrust-accept-btn-handler").el))
          , t = Array.prototype.slice.call(D("#onetrust-banner-sdk #onetrust-reject-all-handler").el)
          , o = Array.prototype.concat.call(o, e, t, n)
          , n = ((G.bannerName !== at || x.IsIabEnabled) && G.bannerName !== st && G.bannerName !== pt || (o = Array.prototype.concat.call(n, t, e)),
        Array.prototype.slice.call(D("#onetrust-banner-sdk .ot-gv-list-handler").el));
        G.bannerName === ut ? (r = Array.prototype.concat.call(n, r),
        o = Array.prototype.slice.call(D("#onetrust-banner-sdk #onetrust-button-group button").el)) : r = Array.prototype.concat.call(r, n),
        this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(D("#onetrust-banner-sdk #onetrust-cookie-btn").el), r, Array.prototype.slice.call(D("#onetrust-banner-sdk .banner-option-input").el), o, Array.prototype.slice.call(D("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), i),
        this.banner = D("#onetrust-banner-sdk").el[0],
        (x.BInitialFocus || x.BInitialFocusLinkAndButton || x.ForceConsent) && (x.BInitialFocus ? this.banner : this.bannerEl[0]).focus()
    }
    ,
    un.prototype.handleBannerFocus = function(e, t) {
        var o = e.target
          , n = dn.bannerEl
          , r = n.indexOf(o)
          , i = n.length - 1
          , s = null;
        if (this.handleBannerFocusBodyReset(t, r, i))
            y.resetFocusToBody();
        else if (this.banner === o)
            s = this.handleInitialBannerFocus(t, n, i, s);
        else
            for (; !s; ) {
                var a = void 0;
                0 !== (a = t ? r <= 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
            }
        s && (e.preventDefault(),
        s.focus())
    }
    ,
    un.prototype.handleBannerFocusBodyReset = function(e, t, o) {
        return !(x.ForceConsent || !x.BInitialFocus && !x.BInitialFocusLinkAndButton || !(e && 0 === t || !e && t === o))
    }
    ,
    un.prototype.handleInitialBannerFocus = function(e, t, o, n) {
        return e && x.ForceConsent ? n = t[o] : e || (n = t[0]),
        n
    }
    ,
    un.prototype.setPCFocus = function(e) {
        if (e && !(e.length <= 0)) {
            for (var t = 0; t < e.length; t++)
                e[t].setAttribute("tabindex", "0");
            this.setFirstAndLast(e);
            var o = x.ShowPreferenceCenterCloseButton
              , n = o ? this.getElementForFocus(e, x.PCLayout.Popup ? 2 : 1, !0) : null
              , r = {
                preventScroll: !0
            };
            this.firstItem ? (o ? n : this.firstItem).focus(r) : e[0].focus(),
            this.firstItem && D(this.firstItem).on("keydown", dn.firstItemHandler),
            this.lastItem && D(this.lastItem).on("keydown", dn.lastItemHandler)
        }
    }
    ,
    un.prototype.setFirstAndLast = function(e) {
        this.firstItem = this.getElementForFocus(e, 0, !0),
        this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
    }
    ,
    un.prototype.setLastItem = function() {
        var e = this.getPCElements()
          , e = this.getElementForFocus(e, e.length - 1, !1);
        e !== this.lastItem && (D(this.lastItem).off("keydown", dn.lastItemHandler),
        this.lastItem = e,
        D(e).on("keydown", dn.lastItemHandler))
    }
    ,
    un.prototype.getPCElements = function() {
        var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + H.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
        return N.pcLayer === ie.CookieList ? e += " ,#onetrust-pc-sdk " + H.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo",
        Array.prototype.slice.call(D(e).el)
    }
    ,
    un.prototype.getActiveTab = function() {
        return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
    }
    ,
    un.prototype.getElementForFocus = function(e, t, o) {
        for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t; )
            n = e[t],
            o ? ++t : --t;
        return n
    }
    ,
    un.prototype.firstItemHandler = function(e) {
        var t = document.getElementById("onetrust-banner-sdk");
        9 === e.keyCode && e.shiftKey && dn.firstItem !== t ? (e.preventDefault(),
        dn.lastItem.focus()) : (t = "close-pc-btn-handler" === e.target.id && ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code),
        x.PCLayout.Tab && N.pcLayer === ie.PrefCenterHome && !t && (t = dn.getActiveTab()) && (e.preventDefault(),
        t.focus()))
    }
    ,
    un.prototype.lastItemHandler = function(e) {
        9 !== e.keyCode || e.shiftKey || (e.preventDefault(),
        e = N.pcLayer === ie.VendorList || N.pcLayer === ie.CookieList,
        (x.PCLayout.Tab && N.isPCVisible && !x.ShowPreferenceCenterCloseButton && !e ? dn.getActiveTab() : dn.firstItem).focus())
    }
    ;
    var dn, pn = un;
    function un() {
        this.bannerEl = []
    }
    n.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + H.P_Category_Grp + " " + H.P_Category_Item + ":not(.ot-vnd-item)")
    }
    ,
    n.prototype.toggleGrpElements = function(e, t, o, n) {
        void 0 === n && (n = !1);
        for (var r = (e = G.pcName === V && x.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i < r.length; i++) {
            var s = r[i].getAttribute("id").includes("leg-out");
            n && s || (B.setCheckedAttribute(null, r[i], o),
            r[i] && x.PCShowConsentLabels && (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? x.PCActiveText : x.PCInactiveText))
        }
        G.legIntSettings.PAllowLI && G.legIntSettings.PShowLegIntBtn && t.Type === Vt && t.HasLegIntOptOut && !n && k.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }
    ,
    n.prototype.toogleAllSubGrpElements = function(e, t) {
        var o;
        e.ShowSubgroup ? (o = e.CustomGroupId,
        o = this.getGroupElementByOptanonGroupId(o.toString()),
        k.toogleSubGroupElement(o, t, e.IsLegIntToggle)) : this.updateHiddenSubGroupData(e, t)
    }
    ,
    n.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1),
        void 0 === n && (n = !1);
        for (var r = (e = G.pcName === V && x.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelectorAll("li" + H.P_Subgrp_li), i = 0; i < r.length; i++) {
            var s = C.getGroupById(r[i].getAttribute("data-optanongroupid"))
              , a = s.OptanonGroupId
              , l = C.getParentGroup(s.Parent)
              , l = (G.legIntSettings.PAllowLI && G.legIntSettings.PShowLegIntBtn && o && s.Type === Vt && s.HasLegIntOptOut && l.ShowSubgroupToggle && k.updateLegIntBtnElement(r[i], t),
            o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']")
              , a = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + l);
            B.setCheckedAttribute(null, a, t),
            a && x.PCShowConsentLabels && (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? x.PCActiveText : x.PCInactiveText),
            n || (s.IsLegIntToggle = o,
            k.toggleGrpStatus(s, t),
            s.IsLegIntToggle = !1,
            bo.toggleGroupHosts(s, t),
            N.genVenOptOutEnabled && bo.toggleGroupGenVendors(s, t))
        }
    }
    ,
    n.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === Vt ? t ? Qo : Xo : t ? jo : zo;
        a.triggerGoogleAnalyticsEvent(Oo, o, e.GroupName + ": " + e.OptanonGroupId),
        t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }
    ,
    n.prototype.setInputID = function(e, t, o, n, r) {
        D(e).attr("id", t),
        D(e).attr("name", t),
        D(e).data("optanonGroupId", o),
        B.setCheckedAttribute(null, e, n),
        D(e).attr("aria-labelledby", r)
    }
    ,
    n.prototype.updateEnabledGroupData = function(e) {
        var t, o;
        -1 < Nt.indexOf(e.Type) ? this.updateIabGroupData(e, !0) : (t = k.getGroupVariable(),
        -1 !== (o = B.indexOf(t, e.CustomGroupId + ":0")) && (t[o] = e.CustomGroupId + ":1"))
    }
    ,
    n.prototype.updateDisabledGroupData = function(e) {
        var t, o;
        -1 < Nt.indexOf(e.Type) ? this.updateIabGroupData(e, !1) : e.Status !== Ye && (t = k.getGroupVariable(),
        -1 !== (o = B.indexOf(t, e.CustomGroupId + ":1"))) && (t[o] = e.CustomGroupId + ":0")
    }
    ,
    n.prototype.updateIabGroupData = function(e, t) {
        var o;
        e.Type === Ot ? this.updateIabSpecialFeatureData(e.IabGrpId, t) : (o = e.IsLegIntToggle ? N.vendors.selectedLegInt : N.vendors.selectedPurpose,
        this.updateIabPurposeData(e.IabGrpId, t, o))
    }
    ,
    n.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return k.isGroupActive(e)
        })
    }
    ,
    n.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return k.IsGroupInActive(e)
        })
    }
    ,
    n.prototype.toggleGroupHtmlElement = function(e, t, o) {
        G.legIntSettings.PAllowLI && G.legIntSettings.PShowLegIntBtn && e.Type === Vt && e.HasLegIntOptOut && (e = document.querySelector("[data-el-id=" + t + "]")) && this.updateLegIntBtnElement(e, o);
        e = D("#ot-group-id-" + t).el[0];
        B.setCheckedAttribute(null, e, o),
        e && x.PCShowConsentLabels && (e.parentElement.querySelector(".ot-label-status").innerHTML = o ? x.PCActiveText : x.PCInactiveText)
    }
    ,
    n.prototype.updateLegIntBtnElement = function(e, t) {
        var o = G.legIntSettings
          , n = e.querySelector(".ot-obj-leg-btn-handler")
          , e = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"),
        n.classList.add("ot-leg-int-enabled"),
        n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"),
        n.classList.remove("ot-inactive-leg-btn"),
        n.classList.remove("ot-leg-int-enabled")),
        n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText,
        w(e, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }
    ,
    n.prototype.isGroupActive = function(e) {
        e = -1 < Nt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== Ut.inArray(e.CustomGroupId + ":1", k.getGroupVariable());
        return e
    }
    ,
    n.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }
    ,
    n.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o = null != e && void 0 !== e
          , n = v.readCookieParam(m.OPTANON_CONSENT, "groups")
          , r = N.groupsConsent.join(",")
          , i = v.readCookieParam(m.OPTANON_CONSENT, "hosts")
          , s = N.hostsConsent.join(",");
        if (t)
            return !0;
        n === r && i === s || f.ensureHtmlGroupDataInitialised();
        var a = [];
        if (N.showGeneralVendors)
            for (var l = 0, c = Object.entries(N.genVendorsConsent); l < c.length; l++) {
                var d = c[l]
                  , p = d[0]
                  , d = d[1];
                a.push(p + ":" + (d ? "1" : "0"))
            }
        N.showVendorService && N.vsConsent.forEach(function(e, t) {
            a.push(t + ":" + (e ? "1" : "0"))
        });
        t = N.groupsConsent.concat(N.hostsConsent).concat(a),
        n = B.contains(t, e + ":1"),
        r = this.doesHostExist(e),
        i = this.doesGroupExist(e),
        s = !1,
        N.showGeneralVendors ? s = this.doesGenVendorExist(e) : N.showVendorService && (s = this.doesVendorServiceExist(e)),
        t = !(!r && !s) || n && f.canSoftOptInInsertForGroup(e);
        return !(!o || !(n && t || !i && !r && !s))
    }
    ,
    n.prototype.setAllowAllButton = function() {
        var t = 0
          , e = x.Groups.some(function(e) {
            if (-1 === Dt.indexOf(e.Type))
                return k.IsGroupInActive(e) && t++,
                e.SubGroups.some(function(e) {
                    return k.IsGroupInActive(e)
                }) && t++,
                1 <= t
        })
          , o = an.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(),
        dn.lastItem && dn.setLastItem(),
        e
    }
    ,
    n.prototype.isAnyGroupOptedOut = function() {
        for (var e = !1, t = 0, o = x.Groups; t < o.length; t++) {
            var n = o[t];
            if (!0 === k.IsGroupInActive(n)) {
                e = !0;
                break
            }
        }
        return e
    }
    ,
    n.prototype.getGroupVariable = function() {
        return N.groupsConsent
    }
    ,
    n.prototype.IsGroupInActive = function(e) {
        e = -1 < Nt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < Dt.indexOf(e.Type)) && -1 === Ut.inArray(e.CustomGroupId + ":1", k.getGroupVariable());
        return e
    }
    ,
    n.prototype.updateIabPurposeData = function(t, e, o) {
        var n = B.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[-1 === n ? Number(t) : n] = t + ":" + e
    }
    ,
    n.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = -1 === (o = B.findIndex(N.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        })) ? Number(t) : o;
        N.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }
    ,
    n.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + H.P_Category_Grp + " " + H.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }
    ,
    n.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            k.toggleGrpStatus(e, t),
            bo.toggleGroupHosts(e, t),
            N.genVenOptOutEnabled && bo.toggleGroupGenVendors(e, t)
        })
    }
    ,
    n.prototype.isIabPurposeActive = function(e) {
        var t = e.Type === Ot ? N.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? N.vendors.selectedLegInt : N.vendors.selectedPurpose;
        return Ut.inArray(e.IabGrpId + ":true", t)
    }
    ,
    n.prototype.doesGroupExist = function(e) {
        return !!C.getGroupById(e)
    }
    ,
    n.prototype.doesHostExist = function(e) {
        var t = N.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }
    ,
    n.prototype.doesGenVendorExist = function(t) {
        return !!x.GeneralVendors && !!x.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        })
    }
    ,
    n.prototype.doesVendorServiceExist = function(e) {
        return N.getVendorsInDomain().has(e)
    }
    ;
    var k, hn = n;
    function n() {}
    yn.prototype.updateFilterSelection = function(e) {
        o = (e = void 0 === e ? !1 : e) ? (t = N.filterByCategories,
        "data-optanongroupid") : (t = N.filterByIABCategories,
        "data-purposeid");
        for (var t, o, n = D("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var i = n[r].getAttribute(o)
              , i = -1 < t.indexOf(i);
            B.setCheckedAttribute(null, n[r], i)
        }
    }
    ,
    yn.prototype.cancelHostFilter = function() {
        for (var e = D("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid")
              , o = 0 <= N.filterByCategories.indexOf(o);
            B.setCheckedAttribute(null, e[t], o)
        }
    }
    ,
    yn.prototype.updateHostFilterList = function() {
        for (var e = D("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o, n = e[t].getAttribute("data-optanongroupid");
            e[t].checked && N.filterByCategories.indexOf(n) < 0 ? N.filterByCategories.push(n) : !e[t].checked && -1 < N.filterByCategories.indexOf(n) && (o = N.filterByCategories,
            N.filterByCategories.splice(o.indexOf(n), 1))
        }
        return N.filterByCategories
    }
    ,
    yn.prototype.InitializeHostList = function() {
        var e = H.P_Vendor_List + " " + H.P_Host_Cntr + " li";
        N.hosts.hostTemplate = D(e).el[0].cloneNode(!0),
        N.hosts.hostCookieTemplate = D(H.P_Vendor_List + " " + H.P_Host_Cntr + " " + H.P_Host_Opt + " li").el[0].cloneNode(!0)
    }
    ,
    yn.prototype.getCookiesForGroup = function(t) {
        var o = []
          , n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(_(_({}, e), {
                groupName: t.GroupName
            }))
        }),
        t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(_(_({}, e), {
                isActive: "always active" === C.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: ge.Host
            }))
        }),
        {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }
    ,
    yn.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])),
        e.removeAttribute("data-src")
    }
    ,
    yn.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode
          , o = document.createElement(e.tagName)
          , n = (o.innerHTML = e.innerHTML,
        e.attributes);
        if (0 < n.length)
            for (var r = 0; r < n.length; r++)
                "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o),
        t.removeChild(e)
    }
    ,
    yn.prototype.reactivateTag = function(e, t) {
        var o, n = 0 <= e.className.indexOf("ot-vscat"), r = 0 <= e.className.indexOf("optanon-category"), i = (n && r ? o = this.getGroupElements(e.className, N.showVendorService) : n ? N.showVendorService ? o = this.getGroupElements(e.className, !0) : this.unBlockTag(t, e) : r && (N.showVendorService ? this.unBlockTag(t, e) : o = this.getGroupElements(e.className, !1)),
        !0);
        if (o && 0 < o.length) {
            for (var s = 0; s < o.length; s++)
                if (!k.canInsertForGroup(o[s].trim())) {
                    i = !1;
                    break
                }
            i && this.unBlockTag(t, e)
        }
    }
    ,
    yn.prototype.unBlockTag = function(e, t) {
        e ? this.reactivateSrcTag(t) : this.reactivateScriptTag(t)
    }
    ,
    yn.prototype.getGroupElements = function(e, t) {
        return (t ? e.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i) : e.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i))[1].split("-")
    }
    ,
    yn.prototype.substitutePlainTextScriptTags = function() {
        var t = this
          , e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]'))
          , o = [].slice.call(document.querySelectorAll('*[class*="optanon-category"]'))
          , e = Array.from(new Set(e.concat([].slice.call(document.querySelectorAll('script[class*="ot-vscat"]') || []))))
          , o = Array.from(new Set(o.concat([].slice.call(document.querySelectorAll('*[class*="ot-vscat"]') || []))));
        Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }),
        Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    }
    ;
    var gn, Cn = yn;
    function yn() {}
    r.prototype.getSearchQuery = function(e) {
        var t = this
          , e = e.trim().split(/\s+/g);
        return new RegExp(e.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?","gi")
    }
    ,
    r.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    ,
    r.prototype.setGlobalFilteredList = function(e) {
        return N.currentGlobalFilteredList = e
    }
    ,
    r.prototype.filterList = function(t, e, n) {
        var r, i, o = n && n.length;
        return "" !== t || o ? (o && (o = D("#onetrust-pc-sdk " + H.P_Fltr_Options + " input").el.length,
        i = !(r = []),
        o !== n.length ? e.forEach(function(o) {
            i = !0,
            o.vendorName && n.forEach(function(e) {
                var t = parseInt(G.iabGrpIdMap[e]);
                -1 < e.indexOf("IFEV2_") ? (o.features || []).forEach(function(e) {
                    e.featureId === t && r.push(o)
                }) : -1 < e.indexOf("ISFV2_") ? o.specialFeatures.forEach(function(e) {
                    e.featureId === t && r.push(o)
                }) : -1 < e.indexOf("ISPV2_") ? (o.specialPurposes || []).forEach(function(e) {
                    e.purposeId === t && r.push(o)
                }) : (o.purposes.forEach(function(e) {
                    e.purposeId === t && r.push(o)
                }),
                o.legIntPurposes.forEach(function(e) {
                    e.purposeId === t && r.push(o)
                }))
            })
        }) : r = e,
        i && (r = r.filter(function(e, t, o) {
            return o.indexOf(e) === t
        })),
        this.setGlobalFilteredList(r)),
        "" === t ? N.currentGlobalFilteredList : N.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName)
                return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })) : this.setGlobalFilteredList(e)
    }
    ,
    r.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = N.vendors
          , o = (N.currentGlobalFilteredList = o.list,
        e ? (o.searchParam = e,
        N.filterByIABCategories = [],
        gn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = N.filterByIABCategories,
        this.filterList(o.searchParam, o.list, t));
        D("#onetrust-pc-sdk " + H.P_Vendor_Content).el[0].scrollTop = 0,
        this.initVendorsData(e, o)
    }
    ,
    r.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var r, i, s = this.getSearchQuery(n), a = 0;
            for (r in t)
                r && (i = o === ke.GoogleVendor ? r : t[r].VendorCustomId,
                i = D("" + e.vendorAccBtn + i).el[0].parentElement,
                s.lastIndex = 0,
                s.test(t[r][e.name]) ? (w(i, this._displayNull, !0),
                a++) : w(i, "display: none;", !0));
            0 === a ? (D(e.accId).hide(),
            o === ke.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === ke.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0,
            D(e.accId).show()),
            this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var l = D(" " + e.venListId + ' li[style^="display: none"]').el, c = 0; c < l.length; c++)
                w(l[c], this._displayNull, !0);
        n = D("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? B.setCheckedAttribute("", n, !0) : B.setCheckedAttribute("", n, !1),
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? n.parentElement.classList.add("line-through") : n.parentElement.classList.remove("line-through")
    }
    ,
    r.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(N.addtlVendorsList),
        this.venAdtlSelAllTglEvent()
    }
    ,
    r.prototype.initGenVendors = function() {
        this.populateGeneralVendors(),
        x.GenVenOptOut && x.GeneralVendors && x.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }
    ,
    r.prototype.resetAddtlVendors = function() {
        h.searchVendors(h.googleSearchSelectors, N.addtlVendorsList, ke.GoogleVendor),
        this.showConsentHeader()
    }
    ,
    r.prototype.venAdtlSelAllTglEvent = function() {
        h.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }
    ,
    r.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: H.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        h.selectAllEventHandler(e)
    }
    ,
    r.prototype.selectAllEventHandler = function(e) {
        for (var t = D(e.vendorsList).el, o = D(e.selAllCntr).el[0], n = D(e.selAllChkbox).el[0], r = !0, i = 0; i < t.length; i++) {
            if (!t[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")),
        n.checked = !0;
        for (var s = 0; s < t.length && !t[s].checked; s++)
            s !== t.length - 1 || t[s].checked || (n.checked = !1);
        B.setCheckedAttribute("", n, n.checked)
    }
    ,
    r.prototype.vendorLegIntToggleEvent = function() {
        for (var e = D(H.P_Vendor_Container + ' li:not([style^="display: none"]) .' + H.P_Ven_Ltgl + " input").el, t = D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Leg_El).el[0], o = D("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"),
        o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++)
            i !== e.length - 1 || e[i].checked || (o.checked = !1);
        B.setCheckedAttribute("", o, o.checked)
    }
    ,
    r.prototype.vendorsListEvent = function() {
        for (var e = D(H.P_Vendor_Container + ' li:not([style^="display: none"]) .' + H.P_Ven_Ctgl + " input").el, t = D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Consent_El).el[0], o = D("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"),
        o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++)
            i !== e.length - 1 || e[i].checked || (o.checked = !1);
        B.setCheckedAttribute("", o, o.checked)
    }
    ,
    r.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = D("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (D("#onetrust-pc-sdk " + H.P_Vendor_Content).removeClass("no-results"),
        n.length && n.remove())
    }
    ,
    r.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll(H.P_Host_Cntr + " > li") : document.querySelectorAll(H.P_Vendor_Container + ' li:not([style$="none;"]),' + H.P_Gven_List + ' li:not([style$="none;"])')
          , o = t.length
          , n = D('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }
    ,
    r.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o, n, r, i = D("#onetrust-pc-sdk #no-results").el[0];
        if (!i)
            return t = h.getNoResultsFound(t),
            o = document.createElement("div"),
            n = document.createElement("p"),
            t = document.createTextNode(t),
            r = document.createElement("span"),
            o.id = "no-results",
            r.id = "user-text",
            r.innerText = e,
            n.appendChild(r),
            n.appendChild(t),
            o.appendChild(n),
            D("#onetrust-pc-sdk " + H.P_Vendor_Content).addClass("no-results"),
            D("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id),
            D("#onetrust-pc-sdk " + H.P_Vendor_Content).append(o);
        i.querySelector("span").innerText = e
    }
    ,
    r.prototype.searchHostList = function(e) {
        var t = {}
          , o = [];
        N.showTrackingTech ? (t = N.currentTrackingTech,
        o = (t = e ? h.getFilteredAdditionaTechtData(e, t) : t).Cookies) : (o = N.currentGlobalFilteredList,
        e && (o = this.searchList(e, o))),
        this.initHostData({
            searchString: e,
            cookiesList: o,
            addTechData: t
        })
    }
    ,
    r.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0,
            o.test(e.DisplayName || e.HostName)
        })
    }
    ,
    r.prototype.setListSearchValues = function(e) {
        var t = x.PCenterVendorSearchAriaLabel
          , o = x.PCenterVendorListSearch
          , n = x.PCenterVendorsListText
          , e = (e === Le.cookies && (t = x.PCenterCookieSearchAriaLabel,
        o = x.PCenterCookieListSearch,
        n = x.PCenterCookiesListText),
        N.cookieListType !== Ce.HostAndGenVen && N.cookieListType !== Ce.Host || !N.showTrackingTech || (n = x.AdditionalTechnologiesConfig.PCTrackingTechTitle),
        document.querySelector("#onetrust-pc-sdk " + H.P_Vendor_Title).innerText = n,
        D("#onetrust-pc-sdk " + H.P_Vendor_Search_Input));
        e.el[0].placeholder = o,
        e.attr("aria-label", t)
    }
    ,
    r.prototype.initHostData = function(e) {
        var t = e.searchString
          , o = e.cookiesList
          , e = e.addTechData
          , n = (N.optanonHostList = o,
        !1)
          , r = (this.setBackBtnTxt(),
        D(H.P_Vendor_List + " #select-all-text-container p").html(x.PCenterAllowAllConsentText),
        h.getHostParentContainer())
          , i = o && 0 === o.length
          , s = (N.showTrackingTech && (i = 0 === e.LocalStorages.length && 0 === e.SessionStorages.length && (0 === e.Cookies.length || 0 === e.Cookies[0].Cookies.length)),
        N.cookieListType === Ce.Host);
        this.showEmptyResults(i, t, s),
        this.setHostListSearchValues(),
        D("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, x.PCenterCookieListFilterAria);
        D("#filter-btn-handler title").html(x.PCenterCookieListFilterAria),
        O.isV2Template && D("#ot-sel-blk span:first-child").html(x.PCenterAllowAllConsentText || x.ConsentText);
        for (var a = document.createDocumentFragment(), l = 0; l < o.length; l++) {
            var c = N.hosts.hostTemplate.cloneNode(!0)
              , d = o[l].DisplayName || o[l].HostName;
            this.createHostAccordions(d, c, l),
            n = this.createHostCheckboxes(d, o, l, c, n),
            this.populateHostDataIntoDOMElements(c, o, d, l, a)
        }
        h.setCookiesInsideHostContainer(r, a, e);
        i = 1 === o.length && o[0].HostName === x.PCFirstPartyCookieListText;
        if (y.isOptOutEnabled() && !i) {
            B.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !n);
            for (var p = D("#onetrust-pc-sdk " + H.P_Host_Cntr + " .ot-host-tgl input").el, u = 0; u < p.length; u++)
                p[u].addEventListener("click", this.hostsListEvent);
            D("#onetrust-pc-sdk " + H.P_Select_Cntr).removeClass("ot-hide"),
            this.hostsListEvent()
        } else
            D("#onetrust-pc-sdk " + H.P_Select_Cntr).addClass("ot-hide")
    }
    ,
    r.prototype.setCookiesInsideHostContainer = function(e, t, o) {
        var n, r;
        N.showTrackingTech && o ? 0 < (o = h.getAdditionalTechnologiesHtml(o)).children.length && ((n = o.querySelector("." + this.TECH_COOKIES_SELECTOR + " .ot-acc-txt")) && ((r = e.querySelector("ul" + H.P_Host_Cntr)).appendChild(t),
        n.appendChild(r)),
        e.appendChild(o)) : e.appendChild(t)
    }
    ,
    r.prototype.getHostParentContainer = function() {
        var e = null;
        return N.showTrackingTech ? (e = document.querySelector("#onetrust-pc-sdk " + H.P_Vendor_Content + " .ot-sdk-column"),
        h.removeTrackingTechAccorions()) : (e = document.querySelector("#onetrust-pc-sdk " + H.P_Vendor_Content + " ul" + H.P_Host_Cntr)).innerHTML = "",
        e
    }
    ,
    r.prototype.removeTrackingTechAccorions = function() {
        var e = document.querySelector("#onetrust-pc-sdk " + H.P_Vendor_Content + " .ot-sdk-column")
          , t = e.querySelector("." + this.TECH_COOKIES_SELECTOR + " ul" + H.P_Host_Cntr);
        if (t ? (t.innerHTML = "",
        e.appendChild(t)) : (t = e.querySelector("ul" + H.P_Host_Cntr)).innerHTML = "",
        e)
            for (var o = e.querySelectorAll(".ot-add-tech"), n = o.length - 1; 0 <= n; n--) {
                var r = o.item(n);
                e.removeChild(r)
            }
    }
    ,
    r.prototype.setHostListSearchValues = function() {
        var e = G.pcName;
        x.GeneralVendorsEnabled && (O.isV2Template || e !== V) && this.setListSearchValues(Le.vendors),
        x.GeneralVendorsEnabled || !O.isV2Template && e === V || this.setListSearchValues(Le.cookies)
    }
    ,
    r.prototype.createHostAccordions = function(e, t, o) {
        var n = t.querySelector("." + H.P_Host_Bx)
          , e = (n && B.setHtmlAttributes(n, {
            id: "host-" + o,
            name: "host-" + o,
            "aria-label": e + " " + x.PCViewCookiesText,
            "aria-controls": "ot-host-acc-txt-" + o
        }),
        t.querySelector(H.P_Acc_Txt));
        e && B.setHtmlAttributes(e, {
            id: "ot-host-acc-txt-" + o,
            role: "region",
            "aria-labelledby": n.id
        })
    }
    ,
    r.prototype.createHostCheckboxes = function(e, t, o, n, r) {
        var i = y.isOptOutEnabled()
          , s = O.isV2Template
          , a = G.pcName;
        return !i || t[o].isFirstParty ? (i = n.querySelector(".ot-host-tgl")) && i.parentElement.removeChild(i) : (i = void 0,
        s ? ((i = F.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"),
        i.querySelector("input").classList.add("host-checkbox-handler"),
        a === V ? n.querySelector(H.P_Host_Hdr).insertAdjacentElement("beforebegin", i) : n.querySelector(H.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)) : i = n.querySelector(".ot-host-tgl"),
        B.setHtmlAttributes(i.querySelector("input"), {
            id: "ot-host-chkbox-" + o,
            "aria-label": e,
            hostId: t[o].HostId,
            ckType: t[o].Type
        }),
        i.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o),
        (t[o].Type === ge.GenVendor ? N.genVendorsConsent[t[o].HostId] : -1 !== N.hostsConsent.indexOf(t[o].HostId + ":1")) ? (B.setCheckedAttribute(null, i.querySelector("input"), !0),
        t[o].isActive ? B.setDisabledAttribute(null, i.querySelector("input"), !0) : r = r || !0) : (r = !0,
        B.setCheckedAttribute(null, i.querySelector("input"), !1)),
        i.querySelector(H.P_Label_Txt).innerText = e),
        r
    }
    ,
    r.prototype.populateHostDataIntoDOMElements = function(t, o, e, n, r) {
        var i, s = this, a = O.isV2Template, l = G.pcName, l = (x.PCAccordionStyle === le.PlusMinus ? t.querySelector(H.P_Acc_Header).insertAdjacentElement("afterbegin", F.plusMinusEl.cloneNode(!0)) : a && (i = F.arrowEl.cloneNode(!0),
        l === V ? t.querySelector(H.P_Host_View_Cookies).insertAdjacentElement("afterend", i) : t.querySelector(H.P_Tgl_Cntr).insertAdjacentElement("beforeend", i)),
        x.AddLinksToCookiepedia && !o[n].isFirstParty && (e = '\n                            <a  class="cookie-label"\n                                href="http://cookiepedia.co.uk/host/' + o[n].HostName + '"\n                                rel="noopener"\n                                target="_blank"\n                            >\n                                ' + e + '&nbsp;<span class="ot-scrn-rdr">' + x.NewWinTxt + "</span>\n                            </a>\n                        "),
        t.querySelector(H.P_Host_Title).innerHTML = e,
        t.querySelector(H.P_Host_Desc).innerHTML = o[n].Description,
        o[n].PrivacyPolicy && x.pcShowCookieHost && t.querySelector(H.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + o[n].PrivacyPolicy + '" rel="noopener" target="_blank">' + (a ? x.PCGVenPolicyTxt : x.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + x.NewWinTxt + "</span></a>"),
        t.querySelector(H.P_Host_View_Cookies));
        return !N.showGeneralVendors || o[n].Cookies && o[n].Cookies.length ? x.PCViewCookiesText && (l.innerHTML = x.PCViewCookiesText) : (B.removeChild(l),
        D(t).addClass("ot-hide-acc")),
        o[n].Description && x.pcShowCookieHost || (i = t.querySelector(H.P_Host_Desc)).parentElement.removeChild(i),
        D(t.querySelector(H.P_Host_Opt)).html(""),
        null != (a = o[n].Cookies) && a.forEach(function(e) {
            e = s.getCookieElement(e, o[n]);
            D(t.querySelector(H.P_Host_Opt)).append(e)
        }),
        r.append(t),
        e
    }
    ,
    r.prototype.hostsListEvent = function() {
        for (var e = D("#onetrust-pc-sdk " + H.P_Host_Cntr + " .ot-host-tgl input").el, t = D("#onetrust-pc-sdk #" + H.P_Sel_All_Host_El).el[0], o = D("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = D("#onetrust-pc-sdk " + H.P_Cnsnt_Header).el[0], r = !0, i = 0; i < e.length; i++) {
            if (!e[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"),
        o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++)
            s !== e.length - 1 || e[s].checked || (o.checked = !1);
        B.setCheckedAttribute("", o, o.checked),
        o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + x.PCenterSelectAllVendorsText)
    }
    ,
    r.prototype.loadHostList = function(e, t) {
        var o = {}
          , n = []
          , n = N.showTrackingTech ? (o = h.getAdditionalTechnologiesDataFromGroup(t),
        (N.currentTrackingTech = o).Cookies) : h.getCombinedCookieList(t);
        N.currentGlobalFilteredList = n,
        this.initHostData({
            searchString: e,
            cookiesList: n,
            addTechData: o
        })
    }
    ,
    r.prototype.getCombinedCookieList = function(e) {
        var t, o = [], n = [];
        return N.cookieListType !== Ce.GenVen && (n = (t = h.getFirstsAndThirdCookisFromGroups(e)).firstPartyCookiesList,
        o = t.thirdPartyCookiesList,
        n.length) && o.unshift({
            HostName: x.PCFirstPartyCookieListText,
            DisplayName: x.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: n,
            Description: ""
        }),
        N.showGeneralVendors ? (t = this.getFilteredGenVendorsList(e),
        q(o, this.mapGenVendorListToHostFormat(t))) : o
    }
    ,
    r.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: ge.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < N.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }
    ,
    r.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: ge.GenVendor
        }
    }
    ,
    r.prototype.getFilteredGenVendorsList = function(t) {
        var e, o = [], n = [];
        return t.length ? (x.Groups.forEach(function(e) {
            q(e.SubGroups, [e]).forEach(function(e) {
                -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                    o.push(e)
                })
            })
        }),
        e = x.GeneralVendors,
        o.length ? e.filter(function(e) {
            if (-1 < o.indexOf(e.VendorCustomId))
                return e
        }) : n) : x.GeneralVendors
    }
    ,
    r.prototype.initVendorsData = function(e, t) {
        var o = this
          , n = t
          , t = N.vendors.list;
        if (this.setBackBtnTxt(),
        D(H.P_Vendor_List + " #select-all-text-container p").html(x.PCenterAllowAllConsentText),
        h.setConsentLegIntAndHeaderText(),
        D("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, x.PCenterVendorListFilterAria),
        D("#onetrust-pc-sdk #filter-btn-handler title").html(x.PCenterVendorListFilterAria),
        this.hasIabVendors = 0 < n.length,
        this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1),
        h.hideOrShowVendorList(n),
        D("#onetrust-pc-sdk " + H.P_Vendor_Container + " ." + H.P_Ven_Bx).length !== t.length && this.attachVendorsToDOM(),
        n.length !== t.length)
            t.forEach(function(e) {
                var t = D(H.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement;
                -1 === n.indexOf(e) ? w(t, "display: none;", !0) : w(t, o._displayNull, !0)
            });
        else
            for (var r = D(H.P_Vendor_Container + ' li[style^="display: none"]').el, i = 0; i < r.length; i++)
                w(r[i], this._displayNull, !0);
        !O.isV2Template && G.pcName === V || this.setListSearchValues(Le.vendors);
        e = document.querySelector("#vdr-lst-dsc");
        !e && x.PCenterVendorListDescText && ((e = document.createElement("p")).id = "vdr-lst-dsc",
        D(e).html(x.PCenterVendorListDescText),
        G.pcName !== V && G.pcName !== Ct ? (t = document.querySelector("#onetrust-pc-sdk " + H.P_Vendor_Title_Elm)) && t.insertAdjacentElement("afterend", e) : (t = document.querySelector(H.P_Vendor_Content + " .ot-sdk-row")) && t.insertAdjacentElement("beforebegin", e)),
        D("#onetrust-pc-sdk " + H.P_Select_Cntr).removeClass("ot-hide"),
        this.vendorsListEvent(),
        G.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }
    ,
    r.prototype.setConsentLegIntAndHeaderText = function() {
        O.isV2Template && (D("#ot-sel-blk span:first-child").html(x.PCenterAllowAllConsentText || x.ConsentText),
        D("#ot-sel-blk span:last-child").html(x.LegitInterestText),
        D("#onetrust-pc-sdk " + H.P_Cnsnt_Header).html(x.PCenterAllowAllConsentText),
        G.legIntSettings.PAllowLI && !G.legIntSettings.PShowLegIntBtn && D("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(x.PCenterLegitInterestText),
        G.legIntSettings.PAllowLI && !G.legIntSettings.PShowLegIntBtn || w(D("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0))
    }
    ,
    r.prototype.hideOrShowVendorList = function(e) {
        0 === e.length ? D("#ot-lst-cnt .ot-acc-cntr").hide() : D("#ot-lst-cnt .ot-acc-cntr").show(),
        N.showTrackingTech && h.removeTrackingTechAccorions()
    }
    ,
    r.prototype.updateVendorsDOMToggleStatus = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = D(H.P_Vendor_Container + " " + H.P_Tgl_Cntr).el, n = x.VendorConsentModel === Vo, r = 0; r < o.length; r++) {
            var i = o[r].querySelector("." + H.P_Ven_Ctgl + " input")
              , s = o[r].querySelector("." + H.P_Ven_Ltgl + " input");
            t ? (i && B.setCheckedAttribute("", i, n),
            s && B.setCheckedAttribute("", s, !0)) : (i && B.setCheckedAttribute("", i, e),
            s && B.setCheckedAttribute("", s, e))
        }
        var a = D("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0]
          , a = (a && (a.parentElement.classList.remove("line-through"),
        B.setCheckedAttribute("", a, !!t || e)),
        D("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0]);
        a && (a.parentElement.classList.remove("line-through"),
        B.setCheckedAttribute("", a, t ? n : e)),
        x.UseGoogleVendors && (t ? this.updateGoogleCheckbox(n) : this.updateGoogleCheckbox(e)),
        N.showGeneralVendors && x.GenVenOptOut && this.updateGenVenCheckbox(e)
    }
    ,
    r.prototype.updateGenVenCheckbox = function(e) {
        for (var t = D(H.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++)
            B.setCheckedAttribute("", t[o], e);
        var n = D("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"),
        B.setCheckedAttribute("", n, e))
    }
    ,
    r.prototype.updateGoogleCheckbox = function(e) {
        for (var t = D("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++)
            B.setCheckedAttribute("", t[o], e);
        var n = D("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"),
        B.setCheckedAttribute("", n, e))
    }
    ,
    r.prototype.updateVendorDisclosure = function(e, t) {
        var r, i, e = D(H.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        t && t.disclosures && (r = e.querySelector(H.P_Ven_Dets),
        (e = (i = e.querySelector(H.P_Ven_Disc).cloneNode(!0)).cloneNode(!0)).innerHTML = "<p><b>" + x.PCenterVendorListDisclosure + ": </b></p>",
        r.insertAdjacentElement("beforeend", e),
        t.disclosures.forEach(function(e) {
            var t, o = i.cloneNode(!0), n = "<p>" + x.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
            e.type && (n += "<p>" + x.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"),
            e.maxAgeSeconds && (t = B.calculateCookieLifespan(e.maxAgeSeconds),
            n += "<p>" + x.PCenterVendorListLifespan + " </p> <p>" + t + " </p>"),
            e.domain && (n += "<p>" + x.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"),
            e.purposes && (n += "<p>" + x.PCenterVendorListStoragePurposes + ' </p><div class="disc-pur-cont">',
            e.purposes.forEach(function(e) {
                e = G.iabGroups.purposes[e].name;
                e && (n += ' <p class="disc-pur">' + e + " </p>")
            }),
            n += "</div>"),
            o.innerHTML = n,
            r.insertAdjacentElement("beforeend", o)
        }),
        this.updateDomainsUsageInDisclosures(t, i, r))
    }
    ,
    r.prototype.updateDomainsUsageInDisclosures = function(e, n, r) {
        var t;
        e.domains && e.domains.length && ((t = n.cloneNode(!0)).innerHTML = "<p><b>" + x.PCVLSDomainsUsed + ": </b></p>",
        r.insertAdjacentElement("beforeend", t),
        e.domains.forEach(function(e) {
            var t, o = n.cloneNode(!0);
            e.domain && (t = "<p>" + x.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"),
            e.use && (t += "<p>" + x.PCVLSUse + " </p> <p>" + e.use + " </p>"),
            o.innerHTML = t,
            r.insertAdjacentElement("beforeend", o)
        }))
    }
    ,
    r.prototype.addDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        o.innerHTML = t || "",
        e.parentNode.insertBefore(o, e)
    }
    ,
    r.prototype.attachVendorsToDOM = function() {
        for (var S, P, T = N.vendors.list, A = x.IabType, I = G.pcName, L = N.vendors.vendorTemplate.cloneNode(!0), _ = (N.discVendors = {},
        O.isV2Template && (S = L.querySelector(".ot-ven-pur").cloneNode(!0),
        P = L.querySelector(H.P_Ven_Disc).cloneNode(!0),
        D(L.querySelector(".ot-ven-dets")).html("")),
        document.createDocumentFragment()), E = this, e = 0; e < T.length; e++)
            !function(e) {
                var t, o, n, r, i, s, a, l, c, d, p, u = L.cloneNode(!0), h = T[e].vendorId, g = T[e].vendorName, C = u.querySelector("." + H.P_Ven_Bx), y = N.vendorsSetting[h], f = u.querySelector(H.P_Ven_Link), f = (B.setHtmlAttributes(C, {
                    id: "IAB" + h,
                    name: "IAB" + h,
                    "aria-controls": "IAB-ACC-TXT" + h,
                    "aria-label": g
                }),
                C.nextElementSibling.setAttribute("for", "IAB" + h),
                u.querySelector(H.P_Ven_Name).innerText = g,
                B.setHtmlAttributes(f, {
                    href: T[e].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }),
                f.innerHTML = x.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + g + " " + x.NewWinTxt + "</span>",
                O.isV2Template ? F.chkboxEl.cloneNode(!0) : u.querySelector(".ot-checkbox")), k = f.cloneNode(!0), m = f.cloneNode(!0), v = u.querySelector(H.P_Tgl_Cntr), f = (O.isV2Template || f.parentElement.removeChild(f),
                u.querySelector(H.P_Arrw_Cntr)), m = (y.consent && (m.classList.add(H.P_Ven_Ctgl),
                b = -1 !== Ut.inArray(h + ":true", N.vendors.selectedVendors),
                n = m.querySelector("input"),
                O.isV2Template && (n.classList.add("vendor-checkbox-handler"),
                t = m.querySelector(".ot-label-status"),
                x.PCShowConsentLabels ? t.innerHTML = b ? x.PCActiveText : x.PCInactiveText : B.removeChild(t)),
                B.setCheckedAttribute("", n, b),
                B.setHtmlAttributes(n, {
                    id: H.P_Vendor_CheckBx + "-" + e,
                    vendorid: h,
                    "aria-label": g
                }),
                m.querySelector("label").setAttribute("for", H.P_Vendor_CheckBx + "-" + e),
                m.querySelector(H.P_Label_Txt).textContent = g,
                I === V ? x.PCTemplateUpgrade ? v.insertAdjacentElement("beforeend", m) : D(v).append(m) : v.insertBefore(m, f)),
                y.legInt && !y.specialPurposesOnly && (b = -1 !== Ut.inArray(h + ":true", N.vendors.selectedLegIntVendors),
                G.legIntSettings.PShowLegIntBtn ? (m = R.generateLegIntButtonElements(b, h, !0),
                u.querySelector(H.P_Acc_Txt).insertAdjacentHTML("beforeend", m),
                (m = u.querySelector(".ot-remove-objection-handler")) && w(m, m.getAttribute("data-style"))) : (n = k.querySelector("input"),
                O.isV2Template && (n.classList.add("vendor-checkbox-handler"),
                t = k.querySelector(".ot-label-status"),
                x.PCShowConsentLabels ? t.innerHTML = b ? x.PCActiveText : x.PCInactiveText : B.removeChild(t)),
                k.classList.add(H.P_Ven_Ltgl),
                n.classList.remove("vendor-checkbox-handler"),
                n.classList.add("vendor-leg-checkbox-handler"),
                B.setCheckedAttribute("", n, b),
                B.setHtmlAttributes(n, {
                    id: H.P_Vendor_LegCheckBx + "-" + e,
                    "leg-vendorid": h,
                    "aria-label": g
                }),
                k.querySelector("label").setAttribute("for", H.P_Vendor_LegCheckBx + "-" + e),
                k.querySelector(H.P_Label_Txt).textContent = g,
                u.querySelector("." + H.P_Ven_Ctgl) && (f = u.querySelector("." + H.P_Ven_Ctgl)),
                I !== V || v.children.length ? v.insertBefore(k, f) : D(v).append(k),
                y.consent || I !== V || k.classList.add(H.P_Ven_Ltgl_Only))),
                O.isV2Template && (v.insertAdjacentElement("beforeend", F.arrowEl.cloneNode(!0)),
                x.PCAccordionStyle !== le.Caret) && u.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", F.plusMinusEl.cloneNode(!0)),
                u.querySelector(H.P_Acc_Txt)), m = (m && B.setHtmlAttributes(m, {
                    id: "IAB-ACC-TXT" + h,
                    "aria-labelledby": "IAB-ACC-TXT" + h,
                    role: "region"
                }),
                T[e].deviceStorageDisclosureUrl && (B.setHtmlAttributes(C, {
                    "disc-vid": h
                }),
                N.discVendors[h] = {
                    isFetched: !1,
                    disclosureUrl: T[e].deviceStorageDisclosureUrl
                }),
                O.isV2Template ? E.populateVendorDetailsHtml(u, S, T[e], P) : (t = u.querySelector(".vendor-option-purpose"),
                b = u.querySelector(".vendor-consent-group"),
                o = u.querySelector(".legitimate-interest"),
                n = u.querySelector(".legitimate-interest-group"),
                r = u.querySelector(".spl-purpose"),
                g = u.querySelector(".spl-purpose-grp"),
                i = u.querySelector(".vendor-feature"),
                f = u.querySelector(".vendor-feature-group"),
                s = u.querySelector(".vendor-spl-feature"),
                k = u.querySelector(".vendor-spl-feature-grp"),
                a = b.cloneNode(!0),
                l = n.cloneNode(!0),
                c = g.cloneNode(!0),
                d = f.cloneNode(!0),
                p = k.cloneNode(!0),
                P = u.querySelector(H.P_Ven_Disc),
                v = u.querySelector(H.P_Ven_Dets),
                m = P.cloneNode(!0),
                P.parentElement.removeChild(P),
                E.attachVendorDisclosure(m, T[e]),
                v.insertAdjacentElement("afterbegin", m),
                b.parentElement.removeChild(b),
                y.consent && (D(t.querySelector("p")).text(x.ConsentPurposesText),
                T[e].purposes.forEach(function(e) {
                    D(a.querySelector(".consent-category")).text(e.purposeName);
                    e = a.querySelector(".consent-status");
                    e && a.removeChild(e),
                    o.insertAdjacentHTML("beforebegin", a.outerHTML)
                })),
                y.consent || t.parentElement.removeChild(t),
                h = l.querySelector(".vendor-opt-out-handler"),
                "IAB2" === x.IabType && h.parentElement.removeChild(h),
                n.parentElement.removeChild(n),
                y.legInt && (D(o.querySelector("p")).text(x.LegitimateInterestPurposesText),
                G.legIntSettings.PAllowLI) && "IAB2" === x.IabType && T[e].legIntPurposes.forEach(function(e) {
                    D(l.querySelector(".consent-category")).text(e.purposeName),
                    o.insertAdjacentHTML("afterend", l.outerHTML)
                }),
                y.legInt || o.parentElement.removeChild(o),
                g.parentElement.removeChild(g),
                "IAB2" === A && T[e].specialPurposes.forEach(function(e) {
                    D(c.querySelector(".consent-category")).text(e.purposeName),
                    r.insertAdjacentHTML("afterend", c.outerHTML)
                }),
                0 === T[e].specialPurposes.length ? r.parentElement.removeChild(r) : D(r.querySelector("p")).text(x.SpecialPurposesText),
                f.parentElement.removeChild(f),
                D(i.querySelector("p")).text(x.FeaturesText),
                T[e].features.forEach(function(e) {
                    D(d.querySelector(".consent-category")).text(e.featureName),
                    i.insertAdjacentHTML("afterend", d.outerHTML)
                }),
                0 === T[e].features.length && i.parentElement.removeChild(i),
                s.parentElement.removeChild(k),
                "IAB2" === A && T[e].specialFeatures.forEach(function(e) {
                    D(p.querySelector(".consent-category")).text(e.featureName),
                    s.insertAdjacentHTML("afterend", p.outerHTML)
                }),
                0 === T[e].specialFeatures.length ? s.parentElement.removeChild(s) : D(s.querySelector("p")).text(x.SpecialFeaturesText),
                (v = C.parentElement.querySelector(".vendor-purposes p")).parentElement.removeChild(v)),
                _.appendChild(u),
                D("#onetrust-pc-sdk " + H.P_Sel_All_Vendor_Consent_Handler).el[0]), b = (m && m.setAttribute(E.ARIA_LABEL_ATTRIBUTE, x.PCenterSelectAllVendorsText + " " + x.LegitInterestText),
                D("#onetrust-pc-sdk " + H.P_Sel_All_Vendor_Leg_Handler).el[0]);
                b && b.setAttribute(E.ARIA_LABEL_ATTRIBUTE, x.PCenterSelectAllVendorsText + " " + x.ConsentText)
            }(e);
        document.querySelector("#onetrust-pc-sdk " + H.P_Vendor_Container).append(_)
    }
    ,
    r.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var r, i, s, a, l, e = e.querySelector(".ot-ven-dets"), c = N.vendorsSetting[o.vendorId], n = n.cloneNode(!0);
        this.attachVendorDisclosure(n, o),
        e.insertAdjacentElement("beforeEnd", n),
        c.consent && (n = t.cloneNode(!0),
        r = "<h4>" + x.ConsentPurposesText + "</h4>",
        r += "<ul>",
        o.purposes.forEach(function(e) {
            r += "<li><p>" + e.purposeName + "</p></li>"
        }),
        r += "</ul>",
        n.innerHTML = r,
        e.insertAdjacentElement("beforeEnd", n)),
        c.legInt && o.legIntPurposes.length && (n = t.cloneNode(!0),
        i = "<h4>" + x.LegitimateInterestPurposesText + "</h4>",
        i += "<ul>",
        o.legIntPurposes.forEach(function(e) {
            i += "<li><p>" + e.purposeName + "</p></li>"
        }),
        i += "</ul>",
        n.innerHTML = i,
        e.insertAdjacentElement("beforeEnd", n)),
        "IAB2" === G.iabType && o.specialPurposes.length && (c = t.cloneNode(!0),
        s = "<h4>" + x.SpecialPurposesText + "</h4>",
        s += "<ul>",
        o.specialPurposes.forEach(function(e) {
            s += "<li><p>" + e.purposeName + "</p></li>"
        }),
        s += "</ul>",
        c.innerHTML = s,
        e.insertAdjacentElement("beforeEnd", c)),
        o.features.length && (n = t.cloneNode(!0),
        a = "<h4>" + x.FeaturesText + "</h4>",
        a += "<ul>",
        o.features.forEach(function(e) {
            a += "<li><p>" + e.featureName + "</p></li>"
        }),
        a += "</ul>",
        n.innerHTML = a,
        e.insertAdjacentElement("beforeEnd", n)),
        "IAB2" === G.iabType && o.specialFeatures.length && (c = t.cloneNode(!0),
        l = "<h4>" + x.SpecialFeaturesText + "</h4>",
        l += "<ul>",
        o.specialFeatures.forEach(function(e) {
            l += "<li><p>" + e.featureName + "</p></li>"
        }),
        l += "</ul>",
        c.innerHTML = l,
        e.insertAdjacentElement("beforeEnd", c))
    }
    ,
    r.prototype.InitializeVendorList = function() {
        var e;
        N.vendors.list = N.iabData ? N.iabData.vendors : null,
        N.vendors.vendorTemplate = D(H.P_Vendor_Container + " li").el[0].cloneNode(!0),
        D("#onetrust-pc-sdk " + H.P_Vendor_Container).html(""),
        O.isV2Template || G.pcName !== V || (e = N.vendors.vendorTemplate.querySelectorAll(H.P_Acc_Header),
        (e = G.legIntSettings.PAllowLI && "IAB2" === G.iabType ? e[0] : e[1]).parentElement.removeChild(e))
    }
    ,
    r.prototype.cancelVendorFilter = function() {
        for (var e = D("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid")
              , o = 0 <= N.filterByIABCategories.indexOf(o);
            B.setCheckedAttribute(null, e[t], o)
        }
    }
    ,
    r.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<h4>" + x.PCenterVendorListLifespan + " :</h4><span> " + t.cookieMaxAge + "</span>";
        t.usesNonCookieAccess && (o += "<p>" + x.PCenterVendorListNonCookieUsage + "</p>"),
        e.innerHTML = o
    }
    ,
    r.prototype.updateVendorFilterList = function() {
        for (var e = D("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o, n = e[t].getAttribute("data-purposeid");
            e[t].checked && N.filterByIABCategories.indexOf(n) < 0 ? N.filterByIABCategories.push(n) : !e[t].checked && -1 < N.filterByIABCategories.indexOf(n) && (o = N.filterByIABCategories,
            N.filterByIABCategories.splice(o.indexOf(n), 1))
        }
        return N.filterByIABCategories
    }
    ,
    r.prototype.saveVendorStatus = function() {
        var e = N.vendors
          , t = N.oneTrustIABConsent
          , t = (t.purpose = e.selectedPurpose.slice(),
        t.legimateInterest = e.selectedLegInt.slice(),
        t.vendors = e.selectedVendors.slice(),
        t.legIntVendors = e.selectedLegIntVendors.slice(),
        t.specialFeatures = e.selectedSpecialFeatures.slice(),
        N.addtlVendors);
        t.vendorConsent = Object.keys(t.vendorSelected)
    }
    ,
    r.prototype.updateIabVariableReference = function() {
        var e = N.oneTrustIABConsent
          , t = N.vendors
          , o = (t.selectedPurpose = e.purpose.slice(),
        t.selectedLegInt = e.legimateInterest.slice(),
        t.selectedVendors = e.vendors.slice(),
        t.selectedLegIntVendors = e.legIntVendors.slice(),
        t.selectedSpecialFeatures = e.specialFeatures.slice(),
        N.addtlVendors);
        o.vendorSelected = {},
        o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }
    ,
    r.prototype.allowAllhandler = function() {
        f.initializeIABData(!0, !1)
    }
    ,
    r.prototype.rejectAllHandler = function(e) {
        f.initializeIABData(!1, !0, e = void 0 === e ? !1 : e)
    }
    ,
    r.prototype.populateAddtlVendors = function(e) {
        var t, o, n, r, i, s, a, l = (x.PCAccordionStyle === le.Caret ? F.arrowEl : F.plusMinusEl).cloneNode(!0), c = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"), d = c.cloneNode(!0), c = (B.removeChild(d.querySelector("#ot-selall-hostcntr")),
        B.removeChild(c.querySelector("#ot-selall-vencntr")),
        B.removeChild(c.querySelector("#ot-selall-licntr")),
        F.accordionEl.cloneNode(!0)), c = (c.classList.add("ot-iab-acc"),
        c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)),
        c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + x.PCIABVendorsText + "</div>"),
        c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", d),
        c.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", D("#ot-ven-lst").el[0]),
        D("#ot-lst-cnt .ot-sdk-column").append(c),
        c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, x.PCIABVendorsText),
        this.iabAccInit = !0,
        d.cloneNode(!0)), p = (B.removeChild(c.querySelector("#ot-selall-licntr")),
        c.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr",
        c.querySelector("input").id = "ot-selall-adtlven-handler",
        c.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler"),
        F.accordionEl.cloneNode(!0)), u = (p.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", l.cloneNode(!0)),
        p.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + x.PCGoogleVendorsText + "</div>"),
        p.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", c),
        p.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"),
        p.classList.add("ot-adtlv-acc"),
        p.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, x.PCGoogleVendorsText),
        N.vendors.vendorTemplate.cloneNode(!0));
        for (t in u.querySelector("button").classList.remove("ot-ven-box"),
        u.querySelector("button").classList.add("ot-addtl-venbox"),
        B.removeChild(u.querySelector(".ot-acc-txt")),
        e)
            e[t] && (o = u.cloneNode(!0),
            n = e[t].name,
            o.querySelector(H.P_Ven_Name).innerText = n,
            r = o.querySelector("button"),
            B.setHtmlAttributes(r, {
                id: "Adtl-IAB" + t
            }),
            B.setHtmlAttributes(o.querySelector(H.P_Ven_Link), {
                href: e[t].policyUrl,
                rel: "noopener",
                target: "_blank"
            }),
            o.querySelector(H.P_Ven_Link).innerHTML = x.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + x.NewWinTxt + "</span>",
            (r = F.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"),
            r.classList.add("ot-ven-adtlctgl"),
            i = Boolean(N.addtlVendors.vendorSelected[t]),
            (s = r.querySelector("input")).classList.add("ot-addtlven-chkbox-handler"),
            a = r.querySelector(".ot-label-status"),
            x.PCShowConsentLabels ? a.innerHTML = i ? x.PCActiveText : x.PCInactiveText : B.removeChild(a),
            B.setCheckedAttribute("", s, i),
            B.setHtmlAttributes(s, {
                id: "ot-addtlven-chkbox-" + t,
                "addtl-vid": t,
                "aria-label": n
            }),
            r.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + t),
            r.querySelector(H.P_Label_Txt).textContent = n,
            a = o.querySelector(H.P_Tgl_Cntr),
            D(a).append(r),
            a.insertAdjacentElement("beforeend", F.arrowEl.cloneNode(!0)),
            x.PCAccordionStyle !== le.Caret && o.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", F.plusMinusEl.cloneNode(!0)),
            D(p.querySelector("#ot-addtl-venlst")).append(o));
        D("#ot-lst-cnt .ot-sdk-column").append(p),
        D("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            B.setCheckedAttribute(null, e.target, e.target.checked)
        }),
        this.showConsentHeader()
    }
    ,
    r.prototype.populateGeneralVendors = function() {
        var e, t, o, c, d, p, u = this, n = x.GeneralVendors, r = document.querySelector(".ot-gv-acc"), h = !!r;
        n.length ? (this.hasGenVendors = !0,
        r && D(r).show(),
        e = (x.PCAccordionStyle === le.Caret ? F.arrowEl : F.plusMinusEl).cloneNode(!0),
        this.iabAccInit || this.addIabAccordion(),
        (t = document.createElement("div")).setAttribute("class", "ot-sel-all-chkbox"),
        o = F.chkboxEl.cloneNode(!0),
        o.id = "ot-selall-gnvencntr",
        o.querySelector("input").id = "ot-selall-gnven-handler",
        o.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"),
        D(t).append(o),
        c = F.accordionEl.cloneNode(!0),
        c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)),
        c.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + x.PCenterGeneralVendorsText + "</div>"),
        x.GenVenOptOut && c.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t),
        c.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"),
        c.classList.add("ot-gv-acc"),
        c.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, x.PCenterGeneralVendorsText),
        d = N.vendors.vendorTemplate.cloneNode(!0),
        d.querySelector("button").classList.remove("ot-ven-box"),
        d.querySelector("button").classList.add("ot-gv-venbox"),
        D(d.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'),
        h && D("" + H.P_Gven_List).html(""),
        p = !0,
        n.forEach(function(e) {
            var t, o, n = u.mapGenVendorToHostFormat(e), r = d.cloneNode(!0), i = e.VendorCustomId, s = e.Name, a = r.querySelector(H.P_Ven_Link), l = (r.querySelector(H.P_Ven_Name).innerText = s,
            r.querySelector("button"));
            B.setHtmlAttributes(l, {
                id: "Gn-" + i
            }),
            e.PrivacyPolicyUrl ? (B.setHtmlAttributes(a, {
                href: e.PrivacyPolicyUrl,
                rel: "noopener",
                target: "_blank"
            }),
            a.innerHTML = x.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + s + " " + x.NewWinTxt + "</span>") : a.classList.add("ot-hide"),
            u.addDescriptionElement(a, e.Description),
            x.GenVenOptOut && ((l = F.chkboxEl.cloneNode(!0)).classList.remove("ot-ven-ctgl"),
            l.classList.add("ot-ven-gvctgl"),
            a = Boolean(N.genVendorsConsent[i]),
            (t = l.querySelector("input")).classList.add("ot-gnven-chkbox-handler"),
            o = l.querySelector(".ot-label-status"),
            x.PCShowConsentLabels ? o.innerHTML = a ? x.PCActiveText : x.PCInactiveText : B.removeChild(o),
            B.setCheckedAttribute("", t, a),
            B.setHtmlAttributes(t, {
                id: "ot-gnven-chkbox-" + i,
                "gn-vid": i,
                "aria-label": s
            }),
            ko.isGenVenPartOfAlwaysActiveGroup(i) ? B.setDisabledAttribute(null, t, !0) : p = !1,
            l.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + i),
            l.querySelector(H.P_Label_Txt).textContent = s,
            o = r.querySelector(H.P_Tgl_Cntr),
            D(o).append(l),
            o.insertAdjacentElement("beforeend", F.arrowEl.cloneNode(!0))),
            x.PCAccordionStyle !== le.Caret && r.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", F.plusMinusEl.cloneNode(!0)),
            e.Cookies.length || D(r).addClass("ot-hide-acc"),
            e.Cookies.forEach(function(e) {
                e = u.getCookieElement(e, n);
                D(r.querySelector(".ot-host-opt")).append(e)
            }),
            D(h ? "" + H.P_Gven_List : c.querySelector("" + H.P_Gven_List)).append(r)
        }),
        h || D("#ot-lst-cnt .ot-sdk-column").append(c),
        D("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            B.setCheckedAttribute(null, e.target, e.target.checked)
        }),
        this.showConsentHeader(),
        p && B.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)) : (this.hasGenVendors = !1,
        r && D(r).hide())
    }
    ,
    r.prototype.addIabAccordion = function() {
        var e = (x.PCAccordionStyle === le.Caret ? F.arrowEl : F.plusMinusEl).cloneNode(!0)
          , t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox")
          , o = t.cloneNode(!0)
          , t = (B.removeChild(o.querySelector("#ot-selall-hostcntr")),
        B.removeChild(t.querySelector("#ot-selall-vencntr")),
        B.removeChild(t.querySelector("#ot-selall-licntr")),
        F.accordionEl.cloneNode(!0));
        t.classList.add("ot-iab-acc"),
        t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)),
        t.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + x.PCIABVendorsText + "</div>"),
        t.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o),
        t.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", D("#ot-ven-lst").el[0]),
        D("#ot-lst-cnt .ot-sdk-column").append(t),
        t.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, x.PCIABVendorsText),
        this.iabAccInit = !0
    }
    ,
    r.prototype.showConsentHeader = function() {
        var e = G.legIntSettings;
        D("#onetrust-pc-sdk .ot-sel-all-hdr").show(),
        e.PAllowLI && !e.PShowLegIntBtn || D("#onetrust-pc-sdk .ot-li-hdr").hide()
    }
    ,
    r.prototype.setBackBtnTxt = function() {
        (O.isV2Template ? (D(H.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, x.PCenterBackText),
        D(H.P_Vendor_List + " .back-btn-handler title")) : D(H.P_Vendor_List + " .back-btn-handler .pc-back-button-text")).html(x.PCenterBackText)
    }
    ,
    r.prototype.getCookieElement = function(e, t) {
        var o = N.hosts.hostCookieTemplate.cloneNode(!0)
          , n = o.querySelector("div").cloneNode(!0)
          , r = (n.classList.remove("cookie-name-container"),
        D(o).html(""),
        e.Name)
          , i = (x.AddLinksToCookiepedia && t.isFirstParty && (r = y.getCookieLabel(e, x.AddLinksToCookiepedia)),
        n.cloneNode(!0));
        return i.classList.add(H.P_c_Name),
        i.querySelector("div:nth-child(1)").innerHTML = x.pcCListName,
        i.querySelector("div:nth-child(2)").innerHTML = r,
        D(o).append(i),
        x.pcShowCookieHost && ((r = n.cloneNode(!0)).classList.add(H.P_c_Host),
        r.querySelector("div:nth-child(1)").innerHTML = x.pcCListHost,
        r.querySelector("div:nth-child(2)").innerHTML = e.Host,
        D(o).append(r)),
        x.pcShowCookieDuration && ((i = n.cloneNode(!0)).classList.add(H.P_c_Duration),
        i.querySelector("div:nth-child(1)").innerHTML = x.pcCListDuration,
        i.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? x.LifespanTypeText : y.getDuration(e),
        D(o).append(i)),
        x.pcShowCookieType && (r = t.Type === ge.GenVendor ? !e.isThirdParty : t.isFirstParty,
        (i = n.cloneNode(!0)).classList.add(H.P_c_Type),
        i.querySelector("div:nth-child(1)").innerHTML = x.pcCListType,
        i.querySelector("div:nth-child(2)").innerHTML = r ? x.firstPartyTxt : x.thirdPartyTxt,
        D(o).append(i)),
        x.pcShowCookieCategory && (r = void 0,
        r = t.Type === ge.GenVendor ? e.category : (t.isFirstParty ? e : t).groupName) && ((i = n.cloneNode(!0)).classList.add(H.P_c_Category),
        i.querySelector("div:nth-child(1)").innerHTML = x.pcCListCategory,
        i.querySelector("div:nth-child(2)").innerHTML = r,
        D(o).append(i)),
        x.pcShowCookieDescription && e.description && ((t = n.cloneNode(!0)).classList.add(H.P_c_Desc),
        t.querySelector("div:nth-child(1)").innerHTML = x.pcCListDescription,
        t.querySelector("div:nth-child(2)").innerHTML = e.description,
        D(o).append(t)),
        o
    }
    ,
    r.prototype.getNoResultsFound = function(e) {
        e = N.showTrackingTech ? x.PCTechNotFound : e ? x.PCHostNotFound : x.PCVendorNotFound;
        return " " + e + "."
    }
    ,
    r.prototype.getAdditionalTechnologiesHtml = function(e) {
        var t = document.createDocumentFragment()
          , o = x.AdditionalTechnologiesConfig
          , n = 0 < e.Cookies.length;
        return (n = n && e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME ? 0 < e.Cookies[0].Cookies.length : n) && ((n = h.getMainAccordionContainer(o.PCCookiesLabel, o.PCCookiesLabel, !1)).classList.add(this.TECH_COOKIES_SELECTOR),
        t.appendChild(n)),
        0 < e.LocalStorages.length && ((n = h.getMainAccordionContainer(o.PCLocalStorageLabel, o.PCLocalStorageLabel)).classList.add("tech-local"),
        h.setSessionLocalStorageTemplate(n, e.LocalStorages, x.AdditionalTechnologiesConfig.PCLocalStorageDurationText),
        t.appendChild(n)),
        0 < e.SessionStorages.length && ((n = h.getMainAccordionContainer(o.PCSessionStorageLabel, o.PCSessionStorageDurationText)).classList.add("tech-session"),
        h.setSessionLocalStorageTemplate(n, e.SessionStorages, x.AdditionalTechnologiesConfig.PCSessionStorageDurationText),
        t.appendChild(n)),
        t
    }
    ,
    r.prototype.getMainAccordionContainer = function(e, t, o) {
        void 0 === o && (o = !0);
        var n = h.getAccordionStyleElement()
          , r = F.accordionEl.cloneNode(!0);
        return r.classList.add("ot-add-tech"),
        r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n),
        r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + e + "</div>"),
        r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, t),
        o && r.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeend", '<ul id="ot-host-lst" style="display: block;"></ul>'),
        r.cloneNode(!0)
    }
    ,
    r.prototype.setSessionLocalStorageTemplate = function(e, t, o) {
        var n = N.hosts.hostTemplate.cloneNode(!0)
          , r = (B.removeChild(n.querySelector(".ot-a scc-txt")),
        e.querySelector(".ot-acc-txt " + H.P_Host_Cntr));
        r.removeAttribute("style"),
        r.classList.add("ot-host-opt");
        for (var i = 0, s = t; i < s.length; i++) {
            var a = s[i]
              , a = h.getSessionLocalStorageElement(a, o);
            r.append(a)
        }
    }
    ,
    r.prototype.getSessionLocalStorageElement = function(e, t) {
        var o = N.hosts.hostCookieTemplate.cloneNode(!0)
          , n = o.querySelector("div").cloneNode(!0)
          , r = (D(o).html(""),
        h.createKeyValueDivEle(n, H.P_c_Name, x.pcCListName, e.Name))
          , r = (D(o).append(r),
        h.createKeyValueDivEle(n, H.P_c_Host, x.pcCListHost, e.Host))
          , r = (D(o).append(r),
        h.createKeyValueDivEle(n, H.P_c_Duration, x.pcCListDuration, t))
          , t = (D(o).append(r),
        h.createKeyValueDivEle(n, H.P_c_Desc, x.pcCListDescription, e.description));
        return D(o).append(t),
        o
    }
    ,
    r.prototype.createKeyValueDivEle = function(e, t, o, n) {
        e = e.cloneNode(!0);
        return e.classList.add(t),
        e.querySelector("div:nth-child(1)").innerHTML = o,
        e.querySelector("div:nth-child(2)").innerHTML = n,
        e
    }
    ,
    r.prototype.getAdditionalTechnologiesDataFromGroup = function(e) {
        for (var t, o = [], n = {
            SessionStorages: [],
            LocalStorages: [],
            Cookies: []
        }, r = 0, i = h.getGroupsFromFilter(e); r < i.length; r++) {
            var s = i[r]
              , a = gn.getCookiesForGroup(s)
              , o = q(o, null != (t = a.firstPartyCookiesList) ? t : []);
            n.Cookies = q(n.Cookies, a.thirdPartyCookiesList),
            n.LocalStorages = q(n.LocalStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.LocalStorages) ? a : []),
            n.SessionStorages = q(n.SessionStorages, null != (a = null == (t = s.TrackingTech) ? void 0 : t.SessionStorages) ? a : [])
        }
        return o.length && n.Cookies.unshift({
            HostName: x.PCFirstPartyCookieListText,
            DisplayName: x.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: o,
            Description: ""
        }),
        n
    }
    ,
    r.prototype.getFirstsAndThirdCookisFromGroups = function(e) {
        var t = []
          , o = [];
        return h.getGroupsFromFilter(e).forEach(function(e) {
            e = gn.getCookiesForGroup(e);
            t = q(t, e.firstPartyCookiesList),
            o = q(o, e.thirdPartyCookiesList)
        }),
        {
            firstPartyCookiesList: t,
            thirdPartyCookiesList: o
        }
    }
    ,
    r.prototype.getGroupsFromFilter = function(t) {
        var o = [];
        return x.Groups.forEach(function(e) {
            q(e.SubGroups, [e]).forEach(function(e) {
                (!t || !t.length || -1 !== t.indexOf(e.CustomGroupId)) && o.push(e)
            })
        }),
        o
    }
    ,
    r.prototype.getAccordionStyleElement = function() {
        return (x.PCAccordionStyle === le.Caret ? F.arrowEl : F.plusMinusEl).cloneNode(!0)
    }
    ,
    r.prototype.getFilteredAdditionaTechtData = function(e, t) {
        var o, n = {
            SessionStorages: [],
            LocalStorages: [],
            Cookies: []
        }, r = this.getSearchQuery(e), e = JSON.parse(JSON.stringify(t));
        return e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME && ((o = e.Cookies.shift()).Cookies = null == (t = o.Cookies) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0,
            r.test(e.Name || e.Host)
        })),
        n.Cookies = null == (t = e.Cookies) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0,
            r.test(e.DisplayName || e.HostName)
        }),
        o && 0 < o.Cookies.length && n.Cookies.unshift(o),
        n.LocalStorages = null == (t = e.LocalStorages) ? void 0 : t.filter(function(e) {
            return r.lastIndex = 0,
            r.test(e.Name || e.Host)
        }),
        n.SessionStorages = null == (o = e.SessionStorages) ? void 0 : o.filter(function(e) {
            return r.lastIndex = 0,
            r.test(e.Name || e.Host)
        }),
        n
    }
    ;
    var h, fn = r;
    function r() {
        this.hasIabVendors = !1,
        this.hasGoogleVendors = !1,
        this.hasGenVendors = !1,
        this.iabAccInit = !1,
        this._displayNull = "display: '';",
        this.ARIA_LABEL_ATTRIBUTE = "aria-label",
        this.TECH_COOKIES_SELECTOR = "tech-cookies",
        this.FIRST_PARTY_COOKIES_GROUP_NAME = "first-party-cookies-group",
        this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        },
        this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }
    function kn() {
        return ("IAB2" !== x.IabType && x.PCTemplateUpgrade && x.PCCategoryStyle === me.Toggle ? F.toggleEl : F.chkboxEl).cloneNode(!0)
    }
    i.prototype.setHtmlTemplate = function(e) {
        b.setInternalData(),
        b.rootHtml = e,
        b.cloneHtmlElements()
    }
    ,
    i.prototype.getVendorListEle = function(e) {
        var t = document.createDocumentFragment()
          , o = document.createElement("div")
          , n = (o.classList.add("ot-vs-list"),
        x.VendorServiceConfig.PCVSExpandGroup);
        return e.forEach(function(e, t) {
            e = b.createVendor(e.groupRef, e, n, "ot-vs-lst-id-" + t);
            o.appendChild(e)
        }),
        t.appendChild(o),
        t
    }
    ,
    i.prototype.insertVendorServiceHtml = function(e, t) {
        var o;
        b.checkIfIsInvalid(e, t) || (o = document.createDocumentFragment(),
        b.setVendorContainer(o, e),
        b.setVendorList(o, e),
        e.SubGroups && 0 < e.SubGroups.length ? (o.querySelector(this.MAIN_CONT_ELE).classList.add("ot-vnd-subgrp-cnt"),
        e = t.children[1],
        G.pcName === V && (e = t.children[2]),
        t.insertBefore(o, e)) : t.appendChild(o))
    }
    ,
    i.prototype.toggleVendorService = function(e, t, o, n) {
        e = C.getGroupById(e),
        t = C.getVSById(t);
        n = n || b.getVendorInputElement(t.CustomVendorServiceId),
        b.setVendorServiceState(n, t, o),
        o ? b.changeGroupState(e, o, b.isToggle) : b.checkGroupChildrenState(e) || b.changeGroupState(e, !1, b.isToggle)
    }
    ,
    i.prototype.setVendorStateByGroup = function(e, t) {
        e = e.VendorServices;
        if (N.showVendorService && e)
            for (var o = 0, n = e; o < n.length; o++) {
                var r = n[o]
                  , i = b.getVendorInputElement(r.CustomVendorServiceId);
                b.setVendorServiceState(i, r, t)
            }
    }
    ,
    i.prototype.resetVendorUIState = function(e) {
        e.forEach(function(e, t) {
            t = b.getVendorInputElement(t);
            b.changeVendorServiceUIState(t, e)
        })
    }
    ,
    i.prototype.setVendorServiceState = function(e, t, o) {
        b.changeVendorServiceState(t, o),
        b.changeVendorServiceUIState(e, o);
        e = o ? on : nn;
        a.triggerGoogleAnalyticsEvent(Oo, e, t.ServiceName + ": " + t.CustomVendorServiceId)
    }
    ,
    i.prototype.removeVSUITemplate = function(e) {
        var t = e.querySelector(this.MAIN_CONT_ELE);
        t && e.removeChild(t)
    }
    ,
    i.prototype.consentAll = function(o) {
        N.getVendorsInDomain().forEach(function(e) {
            var t = o;
            o || (t = C.isAlwaysActiveGroup(e.groupRef)),
            b.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
        })
    }
    ,
    i.prototype.cloneHtmlElements = function() {
        var e, t, o, n, r = b.rootHtml.querySelector(this.MAIN_CONT_ELE);
        r && (e = r.querySelector(".ot-vnd-serv-hdr-cntr"),
        n = (o = (t = r.querySelector(".ot-vnd-lst-cont")).querySelector(".ot-vnd-item")).querySelector(".ot-vnd-info"),
        b.vendorLabelContainerClone = e.cloneNode(!0),
        r.removeChild(e),
        b.vendorInfoClone = n.cloneNode(!0),
        o.querySelector(".ot-vnd-info-cntr").removeChild(n),
        b.vendorItemClone = o.cloneNode(!0),
        t.removeChild(o),
        b.vendorListContainerClone = t.cloneNode(!0),
        r.removeChild(t),
        b.vendorServMainContainerClone = r.cloneNode(!0),
        b.rootHtml.removeChild(r))
    }
    ,
    i.prototype.setInternalData = function() {
        b.isToggle = x.PCCategoryStyle === me.Toggle;
        var e = x.VendorServiceConfig;
        b.stringTranslation = new Map,
        b.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"),
        b.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"),
        b.stringTranslation.set("Address", e.PCVSAddressText || "Address"),
        b.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"),
        b.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"),
        b.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"),
        b.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"),
        b.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"),
        b.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"),
        b.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"),
        b.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
    }
    ,
    i.prototype.setVendorContainer = function(e, t) {
        var o = b.vendorServMainContainerClone.cloneNode(!0)
          , t = (o.setAttribute("data-group-id", t.CustomGroupId),
        b.vendorLabelContainerClone.cloneNode(!0));
        t.querySelector(".ot-vnd-serv-hdr").innerHTML = x.VendorServiceConfig.PCVSListTitle,
        o.appendChild(t),
        e.appendChild(o)
    }
    ,
    i.prototype.setVendorList = function(e, t) {
        for (var o = 0, n = b.getVSFromGroupAndSubgroups(t), r = n.length, e = e.querySelector(this.MAIN_CONT_ELE), i = b.vendorListContainerClone.cloneNode(), s = x.VendorServiceConfig.PCVSExpandCategory; o < r; o++) {
            var a = b.createVendor(t, n[o], s);
            i.appendChild(a)
        }
        e.appendChild(i)
    }
    ,
    i.prototype.getVSFromGroupAndSubgroups = function(e, t) {
        var o, n = null != (o = e.VendorServices) ? o : [];
        if (t = void 0 === t ? !1 : t)
            for (var r = 0, i = null != (o = e.SubGroups) ? o : []; r < i.length; r++) {
                var s = null != (s = i[r].VendorServices) ? s : [];
                n.push.apply(n, s)
            }
        return n
    }
    ,
    i.prototype.createVendor = function(e, t, o, n) {
        var r = b.vendorItemClone.cloneNode(!0)
          , i = (r.setAttribute("data-vnd-id", t.CustomVendorServiceId),
        x.PCAccordionStyle === le.NoAccordion ? (r.classList.remove("ot-accordion-layout"),
        (i = r.querySelector("button")) && r.removeChild(i)) : b.setExpandVendorList(r, o),
        b.setVendorHeader(e, t, r, n),
        r.querySelector(".ot-vnd-info-cntr"));
        return b.setVendorInfo(i, t),
        r
    }
    ,
    i.prototype.setExpandVendorList = function(e, t) {
        e.querySelector("button").setAttribute("aria-expanded", "" + t)
    }
    ,
    i.prototype.setVendorHeader = function(e, t, o, n) {
        var r = x.PCShowAlwaysActiveToggle
          , i = "always active" === C.getGrpStatus(e).toLowerCase()
          , o = o.querySelector(".ot-acc-hdr")
          , s = (i && o.classList.add("ot-always-active-group"),
        null)
          , e = (i && x.PCCategoryStyle === me.Toggle || (s = b.setHeaderInputStyle(e, t, i, n)),
        b.setHeaderText(t, o))
          , n = (o.appendChild(e),
        b.getPositionForElement(x.PCAccordionStyle, b.isToggle))
          , t = n.positionIcon
          , e = n.positionInput;
        s && o.insertAdjacentElement(e, s),
        i && r && (n = b.getAlwaysActiveElement(),
        o.insertAdjacentElement("beforeend", n)),
        x.PCAccordionStyle !== le.NoAccordion && (e = b.setHeaderAccordionIcon(),
        o.insertAdjacentElement(t, e))
    }
    ,
    i.prototype.getPositionForElement = function(e, t) {
        var o = "beforeend"
          , n = "beforeend";
        return {
            positionIcon: o = t && e === le.PlusMinus ? "afterbegin" : o,
            positionInput: n = t ? n : "afterbegin"
        }
    }
    ,
    i.prototype.setHeaderAccordionIcon = function() {
        var e = (x.PCAccordionStyle === le.Caret ? F.arrowEl : F.plusMinusEl).cloneNode(!0);
        return e
    }
    ,
    i.prototype.setHeaderText = function(e, t) {
        var o = t.querySelector(".ot-cat-header")
          , n = o.cloneNode();
        return t.removeChild(o),
        n.innerText = e.ServiceName,
        n
    }
    ,
    i.prototype.setHeaderInputStyle = function(e, t, o, n) {
        var r, i, s, a;
        return x.VendorServiceConfig.PCVSOptOut ? (e = C.checkIsActiveByDefault(e),
        r = !1,
        r = (i = N.vsConsent).has(t.CustomVendorServiceId) ? i.get(t.CustomVendorServiceId) : e,
        (i = kn()).querySelector("input").classList.add("category-switch-handler"),
        e = i.querySelector("input"),
        a = t.CustomVendorServiceId,
        n = null != n ? n : "ot-vendor-id-" + a,
        s = "ot-vendor-header-id-" + a,
        D(e).attr("id", n),
        D(e).attr("name", n),
        D(e).attr("aria-labelledby", s),
        D(e).data("ot-vs-id", a),
        D(e).data("optanongroupid", t.groupRef.CustomGroupId),
        e.disabled = o,
        B.setCheckedAttribute(null, e, r),
        a = b.isToggle ? n : s,
        D(i.querySelector("label")).attr("for", a),
        D(i.querySelector(".ot-label-txt")).html(t.ServiceName),
        i) : null
    }
    ,
    i.prototype.getAlwaysActiveElement = function() {
        var e = document.createElement("div");
        return e.classList.add("ot-always-active"),
        e.innerText = x.AlwaysActiveText,
        e
    }
    ,
    i.prototype.setVendorInfo = function(e, t) {
        var o, n, r, i, s, a, l = ["DPOLink", "PrivacyPolicyLink", "CookiePolicyLink", "OptOutLink"];
        for (o in t)
            b.skipVendorInfoKey(o, t) || (n = t[o],
            (r = b.vendorInfoClone.cloneNode(!0)).dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId,
            i = r.querySelector(".ot-vnd-lbl"),
            s = r.querySelector(".ot-vnd-cnt"),
            i.innerHTML = b.getLocalizedString(o),
            l.includes(o) ? (s.remove(),
            a = document.createElement("a"),
            D(a).attr("href", n),
            D(a).attr("target", "_blank"),
            D(a).attr("rel", "noopener"),
            D(a).attr("aria-label", n + " " + x.NewWinTxt),
            a.classList.add("ot-vnd-cnt"),
            a.innerText = n,
            i.insertAdjacentElement("afterend", a)) : s.innerHTML = n,
            e.appendChild(r))
    }
    ,
    i.prototype.skipVendorInfoKey = function(e, t) {
        return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
    }
    ,
    i.prototype.getLocalizedString = function(e) {
        return b.stringTranslation.has(e) ? b.stringTranslation.get(e) : "DEFAULT"
    }
    ,
    i.prototype.checkGroupChildrenState = function(e) {
        for (var t, o = 0, n = null != (t = e.SubGroups) ? t : []; o < n.length; o++) {
            var r = n[o];
            if (b.checkGroupChildrenState(r))
                return !0
        }
        for (var i = 0, s = null != (t = e.VendorServices) ? t : []; i < s.length; i++) {
            var a = s[i];
            if (N.vsConsent.get(a.CustomVendorServiceId))
                return !0
        }
        return !1
    }
    ,
    i.prototype.changeVendorServiceState = function(e, t) {
        N.vsConsent.set(e.CustomVendorServiceId, t)
    }
    ,
    i.prototype.changeVendorServiceUIState = function(e, t) {
        e && (B.setCheckedAttribute(null, e, t),
        b.isToggle) && e.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t)
    }
    ,
    i.prototype.changeGroupState = function(e, t, o) {
        var n = C.getParentByGrp(e);
        k.toggleGrpStatus(e, t),
        b.updateGroupUIState(e.CustomGroupId, t, o, null !== n),
        n && (e = b.checkGroupChildrenState(n),
        b.changeGroupState(n, e, o))
    }
    ,
    i.prototype.updateGroupUIState = function(e, t, o, n) {
        void 0 === n && (n = !1);
        n = document.querySelector((n ? "#ot-sub-group-id-" : "#ot-group-id-") + e);
        n && (B.setCheckedAttribute(null, n, t),
        o) && n.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t)
    }
    ,
    i.prototype.getVendorInputElement = function(e) {
        return document.getElementById("ot-vendor-id-" + e)
    }
    ,
    i.prototype.checkIfIsInvalid = function(e, t) {
        return !e || !e.VendorServices || !t || e.VendorServices.length <= 0
    }
    ;
    var b, mn = i;
    function i() {
        this.MAIN_CONT_ELE = ".ot-vnd-serv"
    }
    var S, vn = "#onetrust-banner-sdk", bn = ".banner_logo", Sn = "#onetrust-pc-sdk", Pn = (s.prototype.insertPcHtml = function() {
        S.jsonAddAboutCookies(x);
        var t = document.createDocumentFragment()
          , e = (f.preferenceCenterGroup && (e = document.createElement("div"),
        D(e).html(f.preferenceCenterGroup.html),
        e = e.querySelector("#onetrust-pc-sdk"),
        S.addClassesPerConfig(e),
        D(t).append(e),
        S.manageCloseButtons(e, e = function(e) {
            return t.querySelectorAll(e)
        }
        , o = function(e) {
            return t.querySelector(e)
        }
        ),
        x.Language && x.Language.Culture && D(o("#onetrust-pc-sdk")).attr("lang", x.Language.Culture),
        S.addLogos(o, e),
        D(o(H.P_Title)).html(x.MainText),
        x.PCCloseButtonType === be.Link && x.PCTemplateUpgrade && G.pcName === V && D(o(H.P_Title)).addClass("ot-pc-title-shrink"),
        x.PCTemplateUpgrade && D(o(Sn + ' > div[role="alertdialog"]')).css("height: 100%;"),
        D(o(Sn + ' > div[role="alertdialog"]')).attr(this._ariaLabel, x.MainText),
        x.PCRegionAriaLabel && (D(o("#onetrust-pc-sdk")).attr(this._ariaLabel, x.PCRegionAriaLabel),
        D(o("#onetrust-pc-sdk")).attr("role", "region")),
        G.pcName === V && (D(o(H.P_Privacy_Txt)).html(x.AboutCookiesText),
        D(o(H.P_Privacy_Hdr)).html(x.AboutCookiesText)),
        D(o(H.P_Policy_Txt)).html(x.MainInfoText),
        S.configureLinkFields(o),
        S.configureSubjectDataFields(o),
        S.configureButtons(o, e),
        S.setManagePreferenceText(o),
        S.initializePreferenceCenterGroups(o, t),
        S.removeListsWhenAppropriate(o),
        x.PCTemplateUpgrade) && S.setOptOutSignalNotification(o),
        document.createElement("iframe"))
          , o = (e.setAttribute("class", "ot-text-resize"),
        e.setAttribute("sandbox", "allow-same-origin"),
        e.setAttribute("title", "onetrust-text-resize"),
        w(e, "position: absolute; top: -50000px; width: 100em;"),
        e.setAttribute(this._ariaHidden, "true"),
        D(t.querySelector("#onetrust-pc-sdk")).append(e),
        document.getElementById("onetrust-consent-sdk"))
          , e = (D(o).append(t),
        G.ignoreInjectingHtmlCss || D(document.body).append(o),
        (x.showCookieList || N.showGeneralVendors) && gn.InitializeHostList(),
        H.P_Vendor_List + " " + H.P_Host_Cntr + " li")
          , o = D(e).el[0];
        o && B.removeChild(o)
    }
    ,
    s.prototype.addClassesPerConfig = function(e) {
        /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || D(e).addClass("ot-sdk-not-webkit"),
        x.useRTL && D(e).attr("dir", "rtl"),
        G.legIntSettings.PAllowLI && "IAB2" === G.iabType && (D(e).addClass("ot-leg-opt-out"),
        G.legIntSettings.PShowLegIntBtn) && D(e).addClass("ot-leg-btn"),
        x.BannerRelativeFontSizesToggle && D(e).addClass("otRelFont"),
        x.PCShowConsentLabels && D(e).addClass("ot-tgl-with-label"),
        (x.UseGoogleVendors || N.showGeneralVendors) && D(e).addClass("ot-addtl-vendors"),
        "right" === x.PreferenceCenterPosition && D(e).addClass(x.useRTL ? "right-rtl" : "right")
    }
    ,
    s.prototype.manageCloseButtons = function(e, t, o) {
        var n = D(t(H.P_Close_Btn)).el;
        if (x.ShowPreferenceCenterCloseButton) {
            x.CloseText || (x.CloseText = "Close Preference Center");
            for (var r = 0, i = n; r < i.length; r++) {
                var s = i[r];
                x.PCCloseButtonType === be.Link && x.PCTemplateUpgrade ? (D(s).html(x.PCContinueText),
                D(e).addClass("ot-close-btn-link"),
                D(s).el.removeAttribute(this._ariaLabel)) : (D(s).el.setAttribute(this._ariaLabel, x.CloseText),
                y.setCloseIcon(o("#onetrust-pc-sdk .ot-close-icon")))
            }
        } else
            for (var a = 0; a < n.length; a++)
                D(n[a].parentElement).el.removeChild(n[a])
    }
    ,
    s.prototype.addLogos = function(e, t) {
        var o, n, e = e(H.P_Logo);
        e && x.optanonLogo && (o = y.updateCorrectUrl(x.optanonLogo),
        y.checkMobileOfflineRequest(y.getBannerVersionUrl()) && (o = B.getRelativeURL(o, !0, !0)),
        (n = document.createElement("img")).setAttribute("alt", x.PCLogoAria),
        n.setAttribute("src", o),
        e.append(n),
        x.PCLogoAria) && D(e).attr(this._ariaLabel, x.PCLogoAria),
        y.insertFooterLogo(t(".ot-pc-footer-logo a"))
    }
    ,
    s.prototype.configureLinkFields = function(e) {
        var t;
        x.AboutText && D(e(H.P_Policy_Txt)).html(D(e(H.P_Policy_Txt)).html() + '\n            <br/><a href="' + x.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                    aria-label="' + x.PCCookiePolicyLinkScreenReader + '">' + x.AboutText + "</a>"),
        x.PCenterImprintLinkText && (x.AboutText || e(H.P_Policy_Txt).insertAdjacentHTML("beforeend", "<br/>"),
        (t = document.createElement("a")).classList.add("ot-link-btn", "ot-imprint-handler"),
        t.textContent = x.PCenterImprintLinkText,
        t.setAttribute(this._ariaLabel, x.PCenterImprintLinkScreenReader),
        t.setAttribute("href", x.PCenterImprintLinkUrl),
        e(H.P_Policy_Txt).appendChild(t)),
        x.PCenterVendorListLinkText && (t = !x.IsIabEnabled && N.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler",
        e(H.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + t + '" aria-label="' + x.PCenterVendorListLinkAriaLabel + '">\n            ' + x.PCenterVendorListLinkText + "\n            </button>"))
    }
    ,
    s.prototype.configureSubjectDataFields = function(e) {
        var t;
        x.PCTemplateUpgrade && x.PCenterUserIdTitleText && x.IsConsentLoggingEnabled && (t = v.readCookieParam(m.OPTANON_CONSENT, De),
        e(H.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + x.PCenterUserIdTitleText + ": </span> " + t + "</div>"),
        x.PCenterUserIdDescriptionText && e(H.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + x.PCenterUserIdDescriptionText + "</div>"),
        x.PCenterUserIdTimestampTitleText) && (t = (t = v.getCookie(m.ALERT_BOX_CLOSED)) && y.getUTCFormattedDate(t) || x.PCenterUserIdNotYetConsentedText,
        e(H.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + x.PCenterUserIdTimestampTitleText + ": </span> " + t + "</div>"))
    }
    ,
    s.prototype.setManagePreferenceText = function(e) {
        var e = e(H.P_Manage_Cookies_Txt)
          , t = D(e);
        e && (t.html(x.ManagePreferenceText),
        x.ManagePreferenceText || t.attr(this._ariaHidden, !0))
    }
    ,
    s.prototype.configureButtons = function(e, t) {
        x.ConfirmText.trim() ? D(e("#accept-recommended-btn-handler")).html(x.ConfirmText) : e("#accept-recommended-btn-handler").parentElement.removeChild(e("#accept-recommended-btn-handler"));
        for (var o = t(".save-preference-btn-handler"), n = 0; n < o.length; n++)
            D(o[n]).html(x.AllowAllText);
        var r = t(".ot-pc-refuse-all-handler");
        if (x.PCenterShowRejectAllButton && x.PCenterRejectAllButtonText.trim())
            for (n = 0; n < r.length; n++)
                D(r[n]).html(x.PCenterRejectAllButtonText);
        else
            B.removeChild(r)
    }
    ,
    s.prototype.removeListsWhenAppropriate = function(e) {
        var t;
        x.IsIabEnabled || (t = e(H.P_Vendor_Container)) && t.parentElement.removeChild(t),
        x.showCookieList || N.showGeneralVendors || (t = e(H.P_Host_Cntr)) && t.parentElement.removeChild(t)
    }
    ,
    s.prototype.setParentGroupName = function(e, t, o, n) {
        var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
        D(r).html(t),
        D(r).attr("id", o),
        G.pcName === V && (e.querySelector(H.P_Category_Header).innerHTML = t,
        e.querySelector("" + H.P_Desc_Container).setAttribute("id", n),
        e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
    }
    ,
    s.prototype.setLegIntButton = function(e, t, o, n) {
        void 0 === o && (o = !1);
        var r = !0
          , r = (-1 < N.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1),
        R.generateLegIntButtonElements(r, t.OptanonGroupId))
          , t = (o ? n.insertAdjacentHTML("afterend", r) : e.insertAdjacentHTML("beforeend", r),
        e.querySelector(".ot-remove-objection-handler"));
        t && w(t, t.getAttribute("data-style"))
    }
    ,
    s.prototype.setParentGroupDescription = function(e, t, o, n, r) {
        var i = k.safeFormattedGroupDescription(t)
          , s = e.querySelector("p:not(.ot-always-active)")
          , a = e.querySelector(H.P_Acc_Grp_Desc)
          , s = s || a;
        return -1 < Ht.indexOf(t.Type) && o.PCGrpDescType === ne.Legal ? i = t.DescriptionLegal : s.classList.add("ot-category-desc"),
        G.legIntSettings.PAllowLI && !G.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
            return e.HasLegIntOptOut
        }) || t.HasLegIntOptOut ? s.parentElement.classList.add("ot-leg-border-color") : B.removeChild(e.querySelector(H.P_Li_Hdr))),
        G.pcName !== V && s.setAttribute("id", n),
        D(s).html(i),
        t.Type === Bt && B.removeChild(s),
        s
    }
    ,
    s.prototype.cloneOtHtmlEls = function(e) {
        var t = /otPcPanel|otPcCenter/;
        F.toggleEl = D(e(".ot-tgl")).el.cloneNode(!0),
        F.arrowEl = D(e('#onetrust-pc-sdk [role="alertdialog"] > ' + H.P_Arrw_Cntr)).el.cloneNode(!0),
        F.subGrpEl = D(e(H.P_Sub_Grp_Cntr)).el.cloneNode(!0),
        F.vListEl = D(e(H.P_Ven_Lst_Cntr)).el.cloneNode(!0),
        F.cListEl = D(e(H.P_Host_Lst_cntr)).el.cloneNode(!0),
        F.chkboxEl = D(e(H.P_CBx_Cntr)).el.cloneNode(!0),
        F.accordionEl = D(e(".ot-acc-cntr")).el.cloneNode(!0),
        t.test(G.pcName) && (F.plusMinusEl = D(e(".ot-plus-minus")).el.cloneNode(!0)),
        B.removeChild(e(".ot-tgl")),
        B.removeChild(e('#onetrust-pc-sdk [role="alertdialog"] > ' + H.P_Arrw_Cntr)),
        B.removeChild(e(H.P_Sub_Grp_Cntr)),
        B.removeChild(e(H.P_Ven_Lst_Cntr)),
        B.removeChild(e(H.P_Host_Lst_cntr)),
        B.removeChild(e(H.P_CBx_Cntr)),
        B.removeChild(e(".ot-acc-cntr")),
        t.test(G.pcName) && B.removeChild(e(".ot-plus-minus"))
    }
    ,
    s.prototype.insertSelectAllEls = function(e) {
        var e = e(H.P_Select_Cntr + " .ot-sel-all-chkbox")
          , t = N.showVendorService ? kn() : F.chkboxEl.cloneNode(!0)
          , t = (t.id = H.P_Sel_All_Host_El,
        t.querySelector("input").id = "select-all-hosts-groups-handler",
        t.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"),
        D(e).append(t),
        N.showVendorService ? kn() : F.chkboxEl.cloneNode(!0))
          , t = (t.id = H.P_Sel_All_Vendor_Consent_El,
        t.querySelector("input").id = "select-all-vendor-groups-handler",
        t.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"),
        D(e).append(t),
        N.showVendorService ? kn() : F.chkboxEl.cloneNode(!0));
        t.id = H.P_Sel_All_Vendor_Leg_El,
        t.querySelector("input").id = "select-all-vendor-leg-handler",
        t.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"),
        D(e).append(t)
    }
    ,
    s.prototype.initializePreferenceCenterGroups = function(e, t) {
        var o, n = G.pcName, r = (O.isV2Template && (S.cloneOtHtmlEls(e),
        (r = F.chkboxEl.cloneNode(!0)).querySelector("input").classList.add("category-filter-handler"),
        D(e(H.P_Fltr_Modal + " " + H.P_Fltr_Option)).append(r),
        S.insertSelectAllEls(e)),
        D(e("#onetrust-pc-sdk " + H.P_Category_Grp))), i = (n === gt || n === yt || n === Ct ? x.PCenterEnableAccordion ? B.removeChild(r.el.querySelector(H.P_Category_Item + ":not(.ot-accordion-layout)")) : B.removeChild(r.el.querySelector(H.P_Category_Item + ".ot-accordion-layout")) : n === V && (x.PCenterEnableAccordion = !1),
        e("#onetrust-pc-sdk " + H.P_Category_Item)), s = O.isV2Template ? F.subGrpEl.cloneNode(!0) : D(e(H.P_Sub_Grp_Cntr)), a = O.isV2Template ? null : D(e(H.P_Acc_Container + " " + H.P_Sub_Grp_Cntr));
        x.PCTemplateUpgrade && /otPcTab/.test(n) && (o = e(".ot-abt-tab").cloneNode(!0),
        B.removeChild(e(".ot-abt-tab"))),
        r.el.removeChild(i),
        S.setVendorListClass(e, i),
        S.setPCHeader(e, i),
        S.createHtmlForEachGroup({
            fm: e,
            fragment: t,
            categoryGroupTemplate: i,
            cookiePreferencesContainer: r,
            popupSubGrpContainer: a,
            subGrpContainer: s
        }),
        S.setPcTabLayout(e, t, o)
    }
    ,
    s.prototype.createHtmlForEachGroup = function(e) {
        var t = e.fm
          , o = e.fragment
          , n = e.categoryGroupTemplate
          , r = e.cookiePreferencesContainer
          , i = e.popupSubGrpContainer
          , s = e.subGrpContainer
          , e = x.Groups.filter(function(e) {
            return e.Order
        })
          , a = 0 === r.el.children.length;
        x.PCTemplateUpgrade && (N.showVendorService ? b.setHtmlTemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')) : b.removeVSUITemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')));
        for (var l = 0, c = e; l < c.length; l++) {
            var d = c[l]
              , p = d.GroupName
              , u = d.CustomGroupId
              , h = n.cloneNode(!0)
              , g = "ot-group-id-" + u
              , C = "ot-header-id-" + u
              , y = "ot-desc-id-" + u
              , u = ((h = D(h).el).setAttribute("data-optanongroupid", u),
            h.querySelector("input,button"))
              , u = (u && (u.setAttribute("aria-controls", y),
            u.setAttribute("aria-labelledby", C)),
            S.setParentGroupName(h, p, C, y),
            S.setPopupData(d, h),
            S.setParentGroupDescription(h, d, x, y, g))
              , p = (O.isV2Template ? S.setToggle(h, u, d, g, C) : S.setToggleProps(h, u, d, g, C),
            !!t("#onetrust-pc-sdk " + H.P_Category_Grp).querySelector(H.P_Category_Item))
              , y = (y = r.el.querySelectorAll(H.P_Category_Item + ":not(.ot-vnd-item)"))[y.length - 1]
              , g = (a ? r.append(h) : p ? Ut.insertAfter(h, y) : Ut.insertAfter(h, r.el.querySelector(H.P_Li_Hdr) || r.el.querySelector("h3")),
            S.setSubGroupData(d, h, i, s),
            x.PCGrpDescLinkPosition === re.Top)
              , C = (d.Type === Bt && g && (u = h.querySelector(H.P_Sub_Grp_Cntr)),
            g ? u : null);
            S.setVendorListBtn(h, t, o, d, C, x),
            S.setHostListBtn(h, t, o, d),
            S.setVendorServiceData(d, h),
            N.dataGroupState.push(d)
        }
    }
    ,
    s.prototype.setPopupData = function(e, t) {
        G.pcName === ft && (e.ShowVendorList && "IAB2" === x.IabType ? (B.removeChild(t.querySelector("p:not(.ot-always-active)")),
        B.removeChild(t.querySelector(H.P_Acc_Txt + ":not(" + H.P_Acc_Container + ")")),
        e.SubGroups.length || O.isV2Template || B.removeChild(t.querySelector(H.P_Sub_Grp_Cntr))) : B.removeChild(t.querySelector(H.P_Acc_Container)))
    }
    ,
    s.prototype.setVendorServiceData = function(e, t) {
        var o, n = G.pcName;
        N.showVendorService && x.VendorServiceConfig.PCVSCategoryView && (o = H.P_Acc_Txt,
        n === V && (o = H.P_Desc_Container),
        n = t.querySelector(o),
        x.PCAccordionStyle === le.NoAccordion && (n = t),
        b.insertVendorServiceHtml(e, n))
    }
    ,
    s.prototype.jsonAddAboutCookies = function(e) {
        var t = {};
        return t.GroupName = e.AboutCookiesText,
        t.GroupDescription = e.MainInfoText,
        t.ShowInPopup = !0,
        t.Order = 0,
        t.IsAboutGroup = !0,
        t
    }
    ,
    s.prototype.setVendorListBtn = function(e, t, o, n, r, i) {
        var s, a, l = G.pcName;
        n.ShowVendorList ? (s = a = void 0,
        O.isV2Template ? a = (s = F.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : s = (a = e.querySelector(".category-vendors-list-handler")).parentElement,
        a.innerHTML = i.VendorListText + "&#x200E;",
        a.setAttribute(this._ariaLabel, x.PCOpensVendorDetailsAlert),
        a.setAttribute("data-parent-id", n.CustomGroupId),
        i.PCGrpDescType === ne.UserFriendly && (a.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"),
        a.insertAdjacentHTML("afterend", "<a href='" + x.IabLegalTextUrl + "?lang=" + N.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + i.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + x.NewWinTxt + "</span></a>")),
        O.isV2Template && (n = e,
        l === V ? n = e.querySelector("" + H.P_Desc_Container) : i.PCenterEnableAccordion && (n = e.querySelector(H.P_Acc_Txt)),
        n.insertAdjacentElement("beforeend", s)),
        r && r.insertAdjacentElement("beforebegin", s)) : O.isV2Template || (l !== yt && l !== gt || i.PCenterEnableAccordion ? (l === ft || l === yt || l === gt && i.PCenterEnableAccordion) && (a = t("#vendor-list-container"),
        n = e.querySelector(H.P_Acc_Txt),
        a && o.querySelector("" + H.P_Content).removeChild(a),
        O.isV2Template || D(n).el.removeChild(n.querySelector(H.P_Ven_Lst_Cntr))) : B.removeChild(e.querySelector(H.P_Ven_Lst_Cntr)),
        l !== V && l !== Ct) || (r = e.querySelector(H.P_Ven_Lst_Cntr)) && r.parentElement.removeChild(r)
    }
    ,
    s.prototype.setHostListBtn = function(e, t, o, n) {
        var r, i = G.pcName, s = !1, a = (x.showCookieList && (s = -1 < B.findIndex(q(n.SubGroups, [n]), function(e) {
            return -1 === Gt.indexOf(e.Type) && e.FirstPartyCookies.length
        })),
        N.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length);
        !N.showVendorService && (x.showCookieList || N.showGeneralVendors) && (n.ShowHostList || s || a) ? (s = void 0,
        O.isV2Template ? (s = (a = F.cListEl.cloneNode(!0)).querySelector(".category-host-list-handler"),
        r = e,
        i === V ? r = e.querySelector("" + H.P_Desc_Container) : x.PCenterEnableAccordion && (r = e.querySelector(H.P_Acc_Txt)),
        r.insertAdjacentElement("beforeend", a)) : s = e.querySelector(".category-host-list-handler"),
        S.setcListHandler(s, n)) : S.setHostListVendorList(t, o, e)
    }
    ,
    s.prototype.setcListHandler = function(e, t) {
        var o, n;
        e && (o = (n = S.setcListHeaderTitleAndScreenReader())[0],
        n = n[1],
        e.innerHTML = o + "&#x200E;",
        e.setAttribute(this._ariaLabel, n),
        e.setAttribute("data-parent-id", t.CustomGroupId))
    }
    ,
    s.prototype.setcListHeaderTitleAndScreenReader = function() {
        var e, t = N.showTrackingTech ? (e = x.AdditionalTechnologiesConfig.PCTechDetailsText,
        x.AdditionalTechnologiesConfig.PCTechDetailsAriaLabel) : N.showGeneralVendors ? (e = x.GroupGenVenListLabel,
        x.PCenterVendorListScreenReader) : (e = x.ThirdPartyCookieListText,
        x.PCOpensCookiesDetailsAlert);
        return [e, t]
    }
    ,
    s.prototype.setHostListVendorList = function(e, t, o) {
        var n;
        G.pcName === ft ? (e = e("#vendor-list-container"),
        n = o.querySelector(H.P_Acc_Txt),
        e && t.querySelector("" + H.P_Content).removeChild(e),
        n.querySelector(H.P_Host_Lst_cntr) && D(n).el.removeChild(n.querySelector(H.P_Host_Lst_cntr))) : (t = o.querySelector(H.P_Host_Lst_cntr)) && t.parentElement.removeChild(t)
    }
    ,
    s.prototype.setSubGroupData = function(e, t, o, n) {
        var r;
        0 < e.SubGroups.length && e.ShowSubgroup && (r = G.pcName === ft && e.ShowVendorList && "IAB2" === x.IabType && !x.PCTemplateUpgrade,
        S.setSubGrps(e, r ? o : n, t, x))
    }
    ,
    s.prototype.setSubGrps = function(t, o, n, r) {
        var e;
        G.pcName === ft && t.ShowVendorList && "IAB2" === r.IabType && !x.PCTemplateUpgrade && (e = n.querySelector(H.P_Sub_Grp_Cntr)).parentElement.removeChild(e),
        t.SubGroups.forEach(function(e) {
            S.setSubGroups({
                group: t,
                subgroup: e,
                grpEl: n,
                subGrpEl: o,
                json: r
            })
        })
    }
    ,
    s.prototype.setSubGroups = function(e) {
        var t, o, n = e.group, r = e.subgroup, i = e.grpEl, s = e.subGrpEl, e = e.json, a = G.pcName, s = ("IAB2" !== G.iabType || r.Type !== Vt || r.HasConsentOptOut || (t = !0),
        (O.isV2Template ? s : s.el).cloneNode(!0)), l = s.querySelector(H.P_Subgp_ul), c = s.querySelector(H.P_Subgrp_li).cloneNode(!0), d = r.CustomGroupId, p = "ot-sub-group-id-" + d, u = C.getGrpStatus(r).toLowerCase(), h = c.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"), g = c.querySelector(H.P_Tgl_Cntr), h = (c.setAttribute("data-optanongroupid", d),
        O.isV2Template ? ((o = S.getInputEle()).querySelector("input").setAttribute("data-optanongroupid", d),
        o.querySelector("input").classList.add("cookie-subgroup-handler"),
        o = o.cloneNode(!0),
        g.insertAdjacentElement("beforeend", o)) : (o = c.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", d),
        D(s.querySelector(H.P_Subgp_ul)).html(""),
        D(h).html(r.GroupName),
        N.showVendorService && ((d = document.createElement("div")).classList.add("ot-acc-hdr"),
        h.classList.add("ot-cat-header"),
        d.appendChild(h),
        h = "afterbegin",
        x.PCCategoryStyle === me.Toggle && (h = "beforeend"),
        d.insertAdjacentElement(h, o),
        c.removeChild(c.querySelector(H.P_Subgrp_Tgl_Cntr)),
        c.insertAdjacentElement("afterbegin", d)),
        o.querySelector("input").setAttribute("id", p),
        o.querySelector("input").setAttribute(this._ariaLabel, r.GroupName),
        o.querySelector("label").setAttribute("for", p),
        S.setSubGroupDescription({
            json: e,
            group: n,
            subgroup: r,
            subGroupClone: c
        }),
        q(Nt, xt));
        n.ShowSubgroupToggle && -1 < h.indexOf(r.Type) ? S.setSubGroupToggle({
            id: p,
            subGroupClone: c,
            group: n,
            subgroup: r,
            toggleGroup: g
        }) : u === Ye && (n.ShowSubgroupToggle || -1 === Dt.indexOf(r.Type)) || (t = !0),
        S.setSubGroupsProperties({
            removeConsentToggle: t,
            subGroupToggle: o,
            subGroupClone: c,
            status: u,
            subgroup: r,
            grpEl: i,
            pcName: a,
            json: e,
            subGrpElClone: s,
            ulParentContainerEle: l
        })
    }
    ,
    s.prototype.setSubGroupDescription = function(e) {
        var t, o = e.json, n = e.group, r = e.subgroup, e = e.subGroupClone, i = G.pcName, s = o.PCGrpDescType === ne.Legal, i = i === ft && n.ShowVendorList && "IAB2" === o.IabType, a = D(e.querySelector(H.P_Subgrp_Desc));
        i ? (t = r.DescriptionLegal && s ? r.DescriptionLegal : r.GroupDescription,
        a.html(t)) : (t = k.safeFormattedGroupDescription(r),
        i = !1,
        -1 < Ht.indexOf(r.Type) && s && (i = !0,
        t = r.DescriptionLegal),
        o.PCenterEnableAccordion && i || (a = D(e.querySelector("p"))),
        n.ShowSubGroupDescription ? a.html(t) : a.html(""))
    }
    ,
    s.prototype.setSubGroupToggle = function(e) {
        var t = e.id
          , o = e.subGroupClone
          , n = e.group
          , r = e.subgroup
          , e = e.toggleGroup
          , i = k.isGroupActive(r)
          , n = (S.setSubGroupActive({
            group: n,
            subgroup: r,
            subGroupClone: o
        }, i),
        e.querySelector(".ot-label-status"));
        x.PCShowConsentLabels ? n.innerHTML = i ? x.PCActiveText : x.PCInactiveText : B.removeChild(n),
        G.legIntSettings.PAllowLI && r.Type === Vt && r.HasLegIntOptOut && (G.legIntSettings.PShowLegIntBtn ? S.setLegIntButton(o, r) : (i = e.cloneNode(!0),
        e.insertAdjacentElement("afterend", i),
        n = i.querySelector(".ot-label-status"),
        (o = i.querySelector("input")).setAttribute("id", t + "-leg-out"),
        i.querySelector("label").setAttribute("for", t + "-leg-out"),
        r.IsLegIntToggle = !0,
        e = k.isGroupActive(r),
        x.PCShowConsentLabels ? n.innerHTML = e ? x.PCActiveText : x.PCInactiveText : B.removeChild(n),
        B.setCheckedAttribute(null, o, e),
        r.IsLegIntToggle = !1))
    }
    ,
    s.prototype.setSubGroupActive = function(e, t) {
        var o;
        t && (t = e.group,
        o = e.subgroup,
        e = e.subGroupClone,
        t = C.getGrpStatus(t).toLowerCase(),
        e.querySelector("input").setAttribute("checked", ""),
        t === Ye) && -1 === Ht.indexOf(o.Type) && (e.querySelector("input").disabled = !0,
        e.querySelector("input").setAttribute("disabled", "true"))
    }
    ,
    s.prototype.setSubGroupsProperties = function(e) {
        var t = e.removeConsentToggle
          , o = e.subGroupToggle
          , n = e.subGroupClone
          , r = e.status
          , i = e.subgroup
          , s = e.grpEl
          , a = e.pcName
          , l = e.json
          , c = e.subGrpElClone
          , e = e.ulParentContainerEle;
        t && (o.classList.add("ot-hide-tgl"),
        o.querySelector("input").setAttribute(this._ariaHidden, "true")),
        r !== Ye || t || (o && o.parentElement.removeChild(o),
        (r = n.querySelector(H.P_Tgl_Cntr)) && r.classList.add("ot-always-active-subgroup"),
        S.setAlwaysActive(n, !0)),
        "COOKIE" === i.Type && -1 !== i.Parent.indexOf("STACK") && w(c, "display: none;"),
        D(e).append(n),
        O.isV2Template ? (t = s,
        "otPcTab" === a ? t = s.querySelector("" + H.P_Desc_Container) : l.PCenterEnableAccordion && (t = s.querySelector(H.P_Acc_Txt)),
        t.insertAdjacentElement("beforeend", c)) : (o = s.querySelector(H.P_Category_Item + " " + H.P_Ven_Lst_Cntr)) && o.insertAdjacentElement("beforebegin", c),
        N.showVendorService && x.VendorServiceConfig.PCVSCategoryView && b.insertVendorServiceHtml(i, e)
    }
    ,
    s.prototype.getInputEleForCategory = function(e) {
        return N.showVendorService && x.PCCategoryStyle === me.Checkbox && e.classList.add("ot-checkbox-consent"),
        S.getInputEle()
    }
    ,
    s.prototype.getInputEle = function() {
        return "IAB2" !== x.IabType && x.PCTemplateUpgrade ? kn() : F.toggleEl.cloneNode(!0)
    }
    ,
    s.prototype.setToggle = function(e, t, o, n, r) {
        var i = S.getInputEleForCategory(e)
          , s = (i.querySelector("input").classList.add("category-switch-handler"),
        i.querySelector("input"))
          , a = e.querySelector(H.P_Category_Header)
          , l = k.isGroupActive(o)
          , c = C.getGrpStatus(o).toLowerCase() === Ye
          , d = o.OptanonGroupId.toString()
          , p = !0;
        "IAB2" !== G.iabType || o.Type !== Vt && o.Type !== Bt || o.HasConsentOptOut || (p = !1),
        D(i.querySelector("label")).attr("for", n),
        D(i.querySelector(".ot-label-txt")).html(o.GroupName);
        G.legIntSettings.PAllowLI && o.Type === Vt && o.HasLegIntOptOut && (G.legIntSettings.PShowLegIntBtn ? S.setLegIntButton(e, o, !0, t) : (t = i.cloneNode(!0),
        o.IsLegIntToggle = !0,
        u = k.isGroupActive(o),
        h = t.querySelector(".ot-label-status"),
        x.PCShowConsentLabels ? h.innerHTML = u ? x.PCActiveText : x.PCInactiveText : B.removeChild(h),
        o.IsLegIntToggle = !1,
        k.setInputID(t.querySelector("input"), n + "-leg-out", d, u, r),
        D(t.querySelector("label")).attr("for", n + "-leg-out"),
        a.insertAdjacentElement("afterend", t)));
        var u, h = i.querySelector(".ot-label-status"), d = (x.PCShowConsentLabels ? h.innerHTML = l ? x.PCActiveText : x.PCInactiveText : B.removeChild(h),
        x.PCCategoryStyle === me.Toggle);
        this.hideToggleContainer(c, p, d, i),
        p && this.setAlwaysActiveOrToggleInput(o, e, i, s, n, r),
        S.setNoAccordionHeader(e, c)
    }
    ,
    s.prototype.setNoAccordionHeader = function(e, t) {
        var o, n, r, i;
        "IAB2" !== x.IabType && x.PCTemplateUpgrade && (o = x.PCCategoryStyle === me.Checkbox,
        x.PCAccordionStyle === le.NoAccordion) && o && ((o = document.createElement("div")).classList.add("ot-acc-hdr"),
        n = e.querySelector(".ot-chkbox"),
        r = e.querySelector(".ot-always-active"),
        i = e.querySelector(H.P_Category_Header),
        n && o.appendChild(n),
        o.appendChild(i),
        t && o.appendChild(r),
        e.insertBefore(o, e.firstChild))
    }
    ,
    s.prototype.hideToggleContainer = function(e, t, o, n) {
        !e && t || !o || (n.classList.add("ot-hide-tgl"),
        n.querySelector("input").setAttribute(this._ariaHidden, "true"))
    }
    ,
    s.prototype.setAlwaysActiveOrToggleInput = function(e, t, o, n, r, i) {
        var s = "always active" === C.getGrpStatus(e).toLowerCase()
          , a = x.PCCategoryStyle === me.Toggle
          , l = e.OptanonGroupId.toString()
          , e = k.isGroupActive(e)
          , c = t.querySelector(H.P_Category_Header);
        "IAB2" !== x.IabType && x.PCTemplateUpgrade ? (s && x.PCShowAlwaysActiveToggle && (S.setAlwaysActive(t),
        o.querySelector("input").setAttribute("disabled", "true")),
        s && a || S.insertAccordionInputHeader(c, o),
        k.setInputID(n, r, l, e, i),
        S.insertAccordionPointer(t, c)) : (S.insertAccordionPointer(t, c),
        s ? x.PCShowAlwaysActiveToggle && S.setAlwaysActive(t) : (S.insertAccordionInputHeader(c, o),
        k.setInputID(n, r, l, e, i)))
    }
    ,
    s.prototype.setOptOutSignalVisibility = function(e) {
        var t = !0 === navigator.globalPrivacyControl && G.gpcForAGrpEnabled
          , o = R.isAlertBoxClosedAndValid() && k.isAnyGroupOptedOut();
        x.PCShowOptOutSignal && (t || o || G.previewMode) ? e.classList.remove("ot-hide") : e.classList.add("ot-hide")
    }
    ,
    s.prototype.setOptOutSignalNotification = function(e) {
        e = y.createOptOutSignalElement(e, !0);
        S.setOptOutSignalVisibility(e)
    }
    ,
    s.prototype.insertAccordionInputHeader = function(e, t) {
        var o = S.getPositionForInputEle();
        e.insertAdjacentElement(o, t)
    }
    ,
    s.prototype.getPositionForInputEle = function() {
        var e = "beforebegin";
        return e = "IAB2" !== x.IabType && x.PCTemplateUpgrade && x.PCCategoryStyle !== me.Toggle ? e : "afterend"
    }
    ,
    s.prototype.insertAccordionPointer = function(e, t) {
        var o, n;
        e.classList.add("ot-vs-config"),
        x.PCenterEnableAccordion && ("IAB2" !== x.IabType && x.PCTemplateUpgrade ? (e = e.querySelector(H.P_Acc_Header),
        o = n = void 0,
        n = (x.PCAccordionStyle === le.Caret ? (o = "beforeend",
        F.arrowEl) : (o = x.PCCategoryStyle === me.Checkbox ? "beforeend" : "afterbegin",
        F.plusMinusEl)).cloneNode(!0),
        e.insertAdjacentElement(o, n)) : x.PCAccordionStyle === le.Caret ? t.insertAdjacentElement("afterend", F.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", F.plusMinusEl.cloneNode(!0)))
    }
    ,
    s.prototype.setToggleProps = function(e, t, o, n, r) {
        var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)")
          , s = e.querySelectorAll("label")
          , a = k.isGroupActive(o)
          , l = o.CustomGroupId
          , c = e.querySelector(".label-text");
        c && D(c).html(o.GroupName);
        for (var d, p, u, h, g = 0; g < i.length; g++)
            s[g] && D(s[g]).attr("for", n),
            2 <= i.length && 0 === g ? D(i[g]).attr("id", n + "-toggle") : (d = !0,
            "IAB2" !== G.iabType || o.Type !== Vt && o.Type !== Bt || o.HasConsentOptOut || (d = !1),
            G.legIntSettings.PAllowLI && o.Type === Vt && o.HasLegIntOptOut && (G.legIntSettings.PShowLegIntBtn ? S.setLegIntButton(e, o, !0, t) : (p = (u = e.querySelector(H.P_Tgl_Cntr + ":not(" + H.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle")).cloneNode(!0),
            u.insertAdjacentElement("afterend", p),
            u = p.querySelector("input"),
            o.IsLegIntToggle = !0,
            h = k.isGroupActive(o),
            o.IsLegIntToggle = !1,
            k.setInputID(u, n + "-leg-out", l, h, r),
            D(p.querySelector("label")).attr("for", n + "-leg-out"),
            B.removeChild(p.querySelector(H.P_Arrw_Cntr)))),
            !(u = C.getGrpStatus(o).toLowerCase() === Ye) && d || (h = i[g].closest(".ot-toggle")) && (h.classList.add("ot-hide-tgl"),
            h.querySelector("input").setAttribute(this._ariaHidden, !0)),
            d && (u && S.setAlwaysActive(e),
            k.setInputID(i[g], n, l, a, r)))
    }
    ,
    s.prototype.setAlwaysActive = function(e, t) {
        void 0 === t && (t = !1);
        var o = G.pcName;
        o === ft || o === V || t ? (o = e.querySelector(H.P_Tgl_Cntr)) && o.insertAdjacentElement("afterbegin", D("<div class='ot-always-active'>" + x.AlwaysActiveText + "</div>", "ce").el) : (t = e.querySelector(H.P_Category_Header),
        !O.isV2Template && x.PCenterEnableAccordion && (t = e.querySelector(H.P_Arrw_Cntr)),
        D(t).el.insertAdjacentElement("afterend", D("<div class='ot-always-active'>" + x.AlwaysActiveText + "</div>", "ce").el)),
        x.PCenterEnableAccordion ? (o = e.querySelector(H.P_Acc_Header)) && o.classList.add("ot-always-active-group") : ((t = e.querySelector("" + H.P_Desc_Container)) && t.classList.add("ot-always-active-group"),
        e.classList.add("ot-always-active-group"))
    }
    ,
    s.prototype.setPcTabLayout = function(e, t, o) {
        var n = e(".ot-tab-desc");
        "otPcTab" === G.pcName && (o && e("#onetrust-pc-sdk " + H.P_Category_Grp).insertAdjacentElement("afterbegin", o),
        n && 640 < window.innerWidth && D(n).append(t.querySelectorAll("#onetrust-pc-sdk " + H.P_Desc_Container)),
        x.IsIabEnabled ? e(H.P_Desc_Container + " .category-vendors-list-handler").innerHTML = x.VendorListText + "&#x200E;" : (o = e(H.P_Desc_Container + " .category-vendors-list-handler")) && o.parentElement.removeChild(o))
    }
    ,
    s.prototype.setVendorListClass = function(e, t) {
        O.isV2Template ? x.PCAccordionStyle === le.Caret && (D(e("#onetrust-pc-sdk " + H.P_Vendor_List)).addClass("ot-enbl-chr"),
        x.PCenterEnableAccordion) && D(e("#onetrust-pc-sdk " + H.P_Content)).addClass("ot-enbl-chr") : D(t.querySelector(H.P_Sub_Grp_Cntr)).remove()
    }
    ,
    s.prototype.setPCHeader = function(e, t) {
        var o = G.pcName
          , n = e(H.P_Li_Hdr) || t.querySelector(H.P_Li_Hdr);
        G.legIntSettings.PAllowLI && G.grpContainLegalOptOut && "IAB2" === x.IabType && !G.legIntSettings.PShowLegIntBtn ? (n.querySelector("span:first-child").innerText = x.ConsentText,
        n.querySelector("span:last-child").innerText = x.LegitInterestText,
        O.isV2Template && (n.querySelector("span:first-child").innerText = x.PCenterConsentText,
        n.querySelector("span:last-child").innerText = x.PCenterLegIntColumnHeader),
        x.PCenterEnableAccordion && n ? n.classList.add("ot-leg-border-color") : "otPcList" === o && t.insertAdjacentElement("afterbegin", n)) : (B.removeChild(e("#onetrust-pc-sdk " + H.P_Li_Hdr)),
        B.removeChild(t.querySelector(H.P_Li_Hdr)))
    }
    ,
    s);
    function s() {
        this._ariaHidden = "aria-hidden",
        this._ariaLabel = "aria-label"
    }
    In.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        N.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", "")
              , o = C.getGrpStatus(C.getGroupById(t)).toLowerCase() === Ye;
            B.endsWith(e, ":1") && (f.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }),
        N.hostsConsent.forEach(function(e) {
            B.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }),
        N.showGeneralVendors && x.GenVenOptOut && x.GeneralVendors.forEach(function(e) {
            !N.genVendorsConsent[e.VendorCustomId] || N.softOptInGenVendors.includes(e.VendorCustomId) && To.isLandingPage() || n.push(e.VendorCustomId)
        });
        N.vsIsActiveAndOptOut && N.getVendorsInDomain().forEach(function(e) {
            N.vsConsent.get(e.CustomVendorServiceId) && n.push(e.CustomVendorServiceId)
        });
        var t = "," + B.arrToStr(n) + ",";
        x.GoogleConsent.GCEnable && !G.otDataLayer.ignore && this.updateGCMTags(n),
        window.OnetrustActiveGroups = t,
        window.OptanonActiveGroups = t,
        G.gcmUpdateCallback && G.gcmUpdateCallback(),
        G.otDataLayer.ignore || void 0 === this._window[G.otDataLayer.name] || this._window[G.otDataLayer.name].constructor !== Array ? !G.otDataLayer.ignore && G.otDataLayer.name && (this._window[G.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        }]) : (this._window[G.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }),
        this._window[G.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        })),
        this.dispatchEvents(e, n, t)
    }
    ,
    In.prototype.dispatchEvents = function(e, t, o) {
        !e && G.gtmUpdatedinStub || (n = new CustomEvent("consent.onetrust",{
            detail: t
        }));
        var n, r, i = v.readCookieParam(m.OPTANON_CONSENT, "groups"), s = N.fireOnetrustGrp || !i || e || !G.gtmUpdatedinStub;
        s && (N.fireOnetrustGrp = !1,
        !G.otDataLayer.ignore && this._window[G.otDataLayer.name] && this._window[G.otDataLayer.name].constructor === Array && this._window[G.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }),
        r = new CustomEvent("OneTrustGroupsUpdated",{
            detail: t
        })),
        setTimeout(function() {
            n && s && window.dispatchEvent(n),
            r && window.dispatchEvent(r)
        })
    }
    ,
    In.prototype.updateGCMTags = function(e) {
        var n, t = {}, e = (this.canUpdateGCMCategories() && (x.GoogleConsent.GCAdStorage !== vt && (o = e.includes(x.GoogleConsent.GCAdStorage) ? Ae.granted : Ae.denied,
        t[Te.ad_storage] = o),
        x.GoogleConsent.GCAnalyticsStorage !== vt && (o = e.includes(x.GoogleConsent.GCAnalyticsStorage) ? Ae.granted : Ae.denied,
        t[Te.analytics_storage] = o),
        x.GoogleConsent.GCFunctionalityStorage !== vt && (o = e.includes(x.GoogleConsent.GCFunctionalityStorage) ? Ae.granted : Ae.denied,
        t[Te.functionality_storage] = o),
        x.GoogleConsent.GCPersonalizationStorage !== vt && (o = e.includes(x.GoogleConsent.GCPersonalizationStorage) ? Ae.granted : Ae.denied,
        t[Te.personalization_storage] = o),
        x.GoogleConsent.GCSecurityStorage !== vt) && (o = e.includes(x.GoogleConsent.GCSecurityStorage) ? Ae.granted : Ae.denied,
        t[Te.security_storage] = o),
        v.getCookie(m.ALERT_BOX_CLOSED)), o = G.getRegionRule().Global;
        "function" != typeof window.gtag && (n = this._window,
        window.gtag = function(e, t, o) {
            G.otDataLayer.ignore || (n[G.otDataLayer.name] ? n[G.otDataLayer.name].push(arguments) : n[G.otDataLayer.name] = [arguments])
        }
        ),
        "function" == typeof window.gtag && (G.gcmDevIdSet || (window.gtag(Se.set, "developer_id.dYWJhMj", !0),
        G.gcmDevIdSet = !0),
        e) && (o || (t[Te.region] = G.gcmCountries),
        0 !== Object.keys(t).length) && window.gtag(Se.consent, Pe.update, t)
    }
    ,
    In.prototype.canUpdateGCMCategories = function() {
        return x.GoogleConsent.GCAdStorage !== vt || x.GoogleConsent.GCAnalyticsStorage !== vt || x.GoogleConsent.GCFunctionalityStorage !== vt || x.GoogleConsent.GCPersonalizationStorage !== vt || x.GoogleConsent.GCSecurityStorage !== vt
    }
    ;
    var Tn, An = In;
    function In() {
        this._window = window
    }
    var Ln, _n, En = "Banner", Vn = "Preference Center", On = "API", wn = "Close", Bn = "Allow All", Gn = "Reject All", xn = "Confirm", Nn = "Confirm", Dn = "Continue without Accepting", Hn = (Fn.prototype.BannerPushDownHandler = function() {
        this.checkIsBrowserIE11OrBelow() || (_n.pushPageDown(vn),
        D(window).on("resize", function() {
            "none" !== D(vn).css("display") && _n.pushPageDown(vn)
        }))
    }
    ,
    Fn.prototype.checkIsBrowserIE11OrBelow = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
    }
    ,
    Fn.prototype.addOTCssPropertiesToBody = function(e, t) {
        var o = _n.getCssData(e, t);
        N.customerStyles.set(e, o),
        _n.setStylesOnBody(t),
        e === Ln.PC && _n.setStylesOnHtml(t)
    }
    ,
    Fn.prototype.removeAddedOTCssStyles = function(e) {
        void 0 === e && (e = Ln.Banner);
        var t = N.customerStyles.get(e);
        t ? (_n.setStylesOnBody(t.customerBodyCSS),
        _n.setStylesOnHtml(t.customerHtmlCSS),
        N.customerStyles.delete(e)) : 0 < N.customerStyles.size && N.customerStyles.forEach(function(e, t) {
            return _n.removeAddedOTCssStyles(t)
        })
    }
    ,
    Fn.prototype.getCssData = function(e, t) {
        var o, n, r = D("body").el[0], i = D("html").el[0], s = {}, a = {}, e = N.customerStyles.get(e), a = e ? (o = e.scriptBodyCSS,
        n = e.customerBodyCSS,
        e = e.customerHtmlCSS,
        r.style.top !== o.top && (n.top = r.style.top),
        r.style.position !== o.position && (n.position = r.style.position),
        r.style.overflow !== o.overflow && (n.overflow = r.style.overflow),
        i.style.overflow !== o.overflow && (e.overflow = i.style.overflow),
        s = n,
        e) : (s = {
            top: r.style.top,
            position: r.style.position,
            overflow: r.style.overflow
        },
        {
            overflow: i.style.overflow
        });
        return {
            scriptBodyCSS: t,
            customerBodyCSS: s,
            customerHtmlCSS: a
        }
    }
    ,
    Fn.prototype.setStylesOnBody = function(e) {
        var t = D("body").el[0];
        _n.setStylesOnHtmlElement(t, e)
    }
    ,
    Fn.prototype.setStylesOnHtml = function(e) {
        var t = D("html").el[0];
        _n.setStylesOnHtmlElement(t, {
            overflow: e.overflow
        })
    }
    ,
    Fn.prototype.setStylesOnHtmlElement = function(e, t) {
        for (var o = "", n = 0, r = Object.entries(t); n < r.length; n++) {
            var i = r[n]
              , s = i[0]
              , i = i[1];
            i ? o += s + ": " + i + ";" : e.style.removeProperty(s)
        }
        o && w(e, o, !0)
    }
    ,
    Fn.prototype.pushPageDown = function(e) {
        var t = D(e).height() + "px"
          , e = (D(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        "),
        N.isPCVisible ? Ln.PC : Ln.Banner)
          , t = {
            position: "relative",
            top: t
        };
        N.isPCVisible && (t.overflow = "hidden"),
        _n.addOTCssPropertiesToBody(e, t)
    }
    ,
    Fn);
    function Fn() {}
    (c = Ln = Ln || {}).Banner = "Banner",
    c.PC = "PC";
    Mn.prototype.showConsentNotice = function() {
        var e, t, o;
        !x.NoBanner || x.ForceConsent ? D(".onetrust-pc-dark-filter").removeClass("ot-hide") : D(".onetrust-pc-dark-filter").addClass("ot-hide"),
        D("#onetrust-pc-sdk").removeClass("ot-hide"),
        G.pcName === yt && (D("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") || D("#onetrust-pc-sdk").addClass("ot-animated"),
        e = x.PreferenceCenterPosition,
        t = (o = x.useRTL) ? "right" : "left",
        o = o ? "left" : "right",
        D("#onetrust-pc-sdk").el[0].classList.contains("ot-slide-out-" + ("right" === e ? o : t)) && D("#onetrust-pc-sdk").removeClass("ot-slide-out-" + ("right" === e ? o : t)),
        D("#onetrust-pc-sdk").addClass("ot-slide-in-" + ("right" === e ? o : t))),
        k.setAllowAllButton(),
        dn.setPCFocus(dn.getPCElements()),
        x.NoBanner && x.ScrollCloseBanner || this.pcHasScroll()
    }
    ,
    Mn.prototype.hideConsentNoticeV2 = function() {
        var e, t, o;
        0 === D(this.ONETRUST_PC_SDK).length ? this.setFocusOnPage() : (O.isV2Template && this.closePCText(),
        x.ForceConsent && !y.isCookiePolicyPage(x.AlertNoticeText) && !R.isAlertBoxClosedAndValid() && x.ShowAlertNotice ? D("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : D("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(x.PCLayout.Panel ? 500 : 400),
        x.PCLayout.Panel && (e = x.PreferenceCenterPosition,
        t = (o = x.useRTL) ? "right" : "left",
        o = o ? "left" : "right",
        D("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? o : t)),
        D("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? o : t))),
        D("" + this.ONETRUST_PC_SDK).fadeOut(x.PCLayout.Panel ? 500 : 400),
        N.isPCVisible = !1,
        N.pcLayer = ie.Banner,
        this.setFocus())
    }
    ,
    Mn.prototype.setFocus = function() {
        var e;
        N.pcSource || R.isAlertBoxClosedAndValid() ? N.pcSource ? (N.pcSource.focus(),
        N.pcSource = null) : x.BInitialFocus ? y.resetFocusToBody() : this.setFocusOnPage() : (e = D("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0]) && e.focus()
    }
    ,
    Mn.prototype.setFocusOnPage = function() {
        var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        N.isKeyboardUser && e.length && e[0].focus()
    }
    ,
    Mn.prototype.closePCText = function() {
        var e = document.querySelector("#onetrust-pc-sdk span[aria-live]")
          , t = x.AboutCookiesText;
        e.innerText = t + (" " + x.pcDialogClose)
    }
    ,
    Mn.prototype.pcHasScroll = function() {
        var e = D(H.P_Grp_Container).el[0] || D("#onetrust-pc-sdk " + H.P_Content).el[0];
        e.scrollHeight > e.clientHeight && (this.bodyStyleChanged = !0,
        e = D("body")) && e.length && _n.addOTCssPropertiesToBody(Ln.PC, {
            overflow: "hidden"
        })
    }
    ,
    Mn.prototype.checkIfPcSdkContainerExist = function() {
        return !D("#onetrust-pc-sdk").length
    }
    ;
    var Rn, qn = Mn;
    function Mn() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk",
        this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter",
        this.bodyStyleChanged = !1
    }
    zn.prototype.init = function() {
        this.insertHtml(),
        this.insertCss(),
        this.showNty(),
        this.initHandler()
    }
    ,
    zn.prototype.getContent = function() {
        return d(this, void 0, void 0, function() {
            return E(this, function(e) {
                return [2, Jt.getSyncNtfyContent().then(function(e) {
                    N.syncNtfyGrp = {
                        name: e.name,
                        html: atob(e.html),
                        css: e.css
                    }
                })]
            })
        })
    }
    ,
    zn.prototype.insertHtml = function() {
        this.removeHtml();
        function e(e) {
            return t.querySelector(e)
        }
        var t = document.createDocumentFragment()
          , o = document.createElement("div")
          , o = (D(o).html(N.syncNtfyGrp.html),
        o.querySelector(this.El))
          , n = (x.BannerRelativeFontSizesToggle && D(o).addClass("otRelFont"),
        x.useRTL && D(o).attr("dir", "rtl"),
        D(t).append(o),
        x.NtfyConfig)
          , n = (this.initHtml("Sync", n.Sync, e, t.querySelector(this.El)),
        n.ShowCS ? D(e(".ot-pc-handler")).html(n.CSTxt) : (D(o).addClass("ot-hide-csbtn"),
        e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr"))),
        document.createElement("div"));
        D(n).append(t),
        D("#onetrust-consent-sdk").append(n.firstChild)
    }
    ,
    zn.prototype.initHandler = function() {
        D(this.El + " .ot-sync-close-handler").on("click", function() {
            return Un.close()
        })
    }
    ,
    zn.prototype.showNty = function() {
        var e = D(this.El);
        e.css("bottom: -300px;"),
        e.animate({
            bottom: "1em;"
        }, 1e3),
        setTimeout(function() {
            e.css("bottom: 1rem;")
        }, 1e3),
        e.focus()
    }
    ,
    zn.prototype.changeState = function() {
        setTimeout(function() {
            Un.refreshState()
        }, 1500)
    }
    ,
    zn.prototype.refreshState = function() {
        function e(e) {
            return t.querySelector(e)
        }
        var t = D(this.El).el[0]
          , o = (t.classList.add("ot-nty-complete"),
        t.classList.remove("ot-nty-sync"),
        x.NtfyConfig);
        this.initHtml("Complete", o.Complete, e, t),
        o.ShowCS && ("LINK" === o.CSType && D(e(".ot-pc-handler")).addClass("ot-pc-link"),
        D(".ot-sync-btncntr").show("inline-block"),
        this.alignContent(),
        D(window).on("resize", function() {
            return Un.resizeEvent
        })),
        setTimeout(function() {
            Un.close()
        }, 1e3 * x.NtfyConfig.NtfyDuration)
    }
    ,
    zn.prototype.insertCss = function() {
        var e = document.getElementById("onetrust-style");
        e.innerHTML += N.syncNtfyGrp.css,
        e.innerHTML += this.addCustomStyles()
    }
    ,
    zn.prototype.addCustomStyles = function() {
        var e = x.NtfyConfig
          , t = e.Sync
          , o = e.Complete
          , n = e.CSButton
          , r = e.CSLink;
        return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
    }
    ,
    zn.prototype.initHtml = function(e, t, o, n) {
        var r = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
        t.ShowIcon ? (D(o("Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check")).show(),
        D(o(r)).hide(),
        D(o(".ot-sync-icon")).show("inline-block"),
        n.classList.remove("ot-hide-icon")) : (D(o(".ot-sync-icon")).hide(),
        n.classList.add("ot-hide-icon")),
        t.Title ? D(o("#ot-sync-title")).html(t.Title) : D(o("#ot-sync-title")).hide(),
        t.Desc ? D(o(".ot-sync-desc")).html(t.Desc) : D(o(".ot-sync-desc")).hide(),
        t.ShowClose ? (D(o(".ot-sync-close-handler")).show("inline-block"),
        D(o(".ot-close-icon")).attr("aria-label", t.CloseAria),
        n.classList.remove("ot-hide-close")) : (D(o(".ot-sync-close-handler")).hide(),
        n.classList.add("ot-hide-close"))
    }
    ,
    zn.prototype.close = function() {
        this.hideSyncNtfy(),
        y.resetFocusToBody()
    }
    ,
    zn.prototype.hideSyncNtfy = function() {
        x.NtfyConfig.ShowCS && window.removeEventListener("resize", Un.resizeEvent),
        D("#ot-sync-ntfy").fadeOut(400)
    }
    ,
    zn.prototype.removeHtml = function() {
        var e = D(this.El).el;
        e && B.removeChild(e)
    }
    ,
    zn.prototype.alignContent = function() {
        D(".ot-sync-btncntr").el[0].clientHeight > D(".ot-sync-titlecntr").el[0].clientHeight && (D(".ot-sync-titlecntr").addClass("ot-pos-abs"),
        D(".ot-sync-btncntr").addClass("ot-pos-rel"))
    }
    ,
    zn.prototype.resizeEvent = function() {
        window.innerWidth <= 896 && Un.alignContent()
    }
    ;
    var Un, jn = zn;
    function zn() {
        this.El = "#ot-sync-ntfy"
    }
    Jn.prototype.toggleVendorConsent = function(e, t) {
        void 0 === t && (t = null),
        (e = (e = void 0 === e ? [] : e).length ? e : N.oneTrustIABConsent.vendors).forEach(function(e) {
            var e = e.split(":")
              , t = e[0]
              , e = e[1]
              , t = D(H.P_Vendor_Container + " ." + H.P_Ven_Ctgl + ' [vendorid="' + t + '"]').el[0];
            t && B.setCheckedAttribute("", t, "true" === e)
        });
        var o, n = D("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        n && (o = B.getActiveIdArray(B.distinctArray(e)),
        (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(Zt.P_Line_Through) : n.parentElement.classList.add(Zt.P_Line_Through),
        B.setCheckedAttribute("", n, t))
    }
    ,
    Jn.prototype.toggleVendorLi = function(e, t) {
        void 0 === t && (t = null),
        (e = (e = void 0 === e ? [] : e).length ? e : N.oneTrustIABConsent.legIntVendors).forEach(function(e) {
            var e = e.split(":")
              , t = e[0]
              , e = e[1]
              , t = D(H.P_Vendor_Container + " ." + H.P_Ven_Ltgl + ' [leg-vendorid="' + t + '"]').el[0];
            t && B.setCheckedAttribute("", t, "true" === e)
        });
        var o, n = D("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        n && (o = B.getActiveIdArray(B.distinctArray(e)),
        (t = null === t ? o.length === e.length : t) || 0 === o.length ? n.parentElement.classList.remove(Zt.P_Line_Through) : n.parentElement.classList.add(Zt.P_Line_Through),
        B.setCheckedAttribute("", n, t))
    }
    ,
    Jn.prototype.updateVendorLegBtns = function(e) {
        (e = (e = void 0 === e ? [] : e).length ? e : N.oneTrustIABConsent.legIntVendors).forEach(function(e) {
            var e = e.split(":")
              , t = e[0]
              , e = e[1]
              , t = D(H.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + t + '"]').el[0];
            t && k.updateLegIntBtnElement(t, "true" === e)
        })
    }
    ;
    var Kn, Wn = Jn;
    function Jn() {}
    Qn.prototype.setFilterList = function(o) {
        var n = this
          , r = D("#onetrust-pc-sdk " + H.P_Fltr_Modal + " " + H.P_Fltr_Option).el[0].cloneNode(!0);
        D("#onetrust-pc-sdk " + H.P_Fltr_Modal + " " + H.P_Fltr_Options).html(""),
        (O.isV2Template || x.PCLayout.Popup) && D("#onetrust-pc-sdk #filter-cancel-handler").html(x.PCenterCancelFiltersText || "Cancel"),
        !O.isV2Template && x.PCLayout.Popup || (D("#onetrust-pc-sdk " + H.P_Clr_Fltr_Txt).html(x.PCenterClearFiltersText),
        D("#filter-btn-handler").el[0].setAttribute("aria-label", x.PCenterFilterText)),
        D("#onetrust-pc-sdk #filter-apply-handler").html(x.PCenterApplyFiltersText),
        o ? G.consentableGrps.forEach(function(e) {
            var t = N.cookieListType === Ce.GenVen || N.cookieListType === Ce.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length;
            t && n.filterGroupOptionSetter(r, e, o)
        }) : G.iabGrps.forEach(function(e) {
            n.filterGroupOptionSetter(r, e, o)
        })
    }
    ,
    Qn.prototype.setFilterListByGroup = function(e, t) {
        var o, n = this;
        !e || e.length <= 0 ? D("#onetrust-pc-sdk " + H.P_Fltr_Modal + " " + H.P_Fltr_Options).html("") : (o = D("#onetrust-pc-sdk " + H.P_Fltr_Modal + " " + H.P_Fltr_Option).el[0].cloneNode(!0),
        D("#onetrust-pc-sdk " + H.P_Fltr_Modal + " " + H.P_Fltr_Options).html(""),
        (O.isV2Template || x.PCLayout.Popup) && D("#onetrust-pc-sdk #filter-cancel-handler").html(x.PCenterCancelFiltersText || "Cancel"),
        !O.isV2Template && x.PCLayout.Popup || (D("#onetrust-pc-sdk " + H.P_Clr_Fltr_Txt).html(x.PCenterClearFiltersText),
        D("#filter-btn-handler").el[0].setAttribute("aria-label", x.PCenterFilterText)),
        D("#onetrust-pc-sdk #filter-apply-handler").html(x.PCenterApplyFiltersText),
        e.forEach(function(e) {
            n.filterGroupOptionSetter(o, e, t)
        }))
    }
    ,
    Qn.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId
          , r = n + "-filter"
          , e = e.cloneNode(!0);
        D(H.P_Fltr_Modal + " " + H.P_Fltr_Options).append(e),
        D(e.querySelector("input")).attr("id", r),
        D(e.querySelector("label")).attr("for", r),
        (O.isV2Template ? D(e.querySelector(H.P_Label_Txt)) : D(e.querySelector("label span"))).html(t.GroupName),
        D(e.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    }
    ;
    var Yn, Xn = Qn;
    function Qn() {
        this.bodyScrollProp = "",
        this.htmlScrollProp = "",
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk",
        this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    rr.prototype.initialiseCssReferences = function() {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style",
        O.moduleInitializer.CookieV2CSPEnabled && N.nonce && e.setAttribute("nonce", N.nonce)),
        f.commonStyles && (t += f.commonStyles),
        f.bannerGroup && (t += f.bannerGroup.css,
        O.fp.CookieV2SSR || (t += this.addCustomBannerCSS()),
        x.bannerCustomCSS) && (t += x.bannerCustomCSS),
        f.preferenceCenterGroup && (t = (t += f.preferenceCenterGroup.css) + this.addCustomPreferenceCenterCSS()),
        f.cookieListGroup && !O.fp.CookieV2TrackingTechnologies && (t = (t += f.cookieListGroup.css) + this.addCustomCookieListCSS()),
        x.cookiePersistentLogo && !x.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + y.updateCorrectUrl(x.cookiePersistentLogo) + "')}"),
        this.processedCSS = t,
        G.ignoreInjectingHtmlCss || (e.textContent = t,
        D(document.head).append(e))
    }
    ,
    rr.prototype.setButonColor = function() {
        var e, t = x.pcButtonColor, o = x.pcButtonTextColor, n = x.pcLegIntButtonColor, r = x.pcLegIntButtonTextColor, i = "";
        return (t || o) && (e = G.pcName === Ct ? "#onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Category_Item + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + H.P_Li_Hdr + "{\n                    border-color: " + t + ";\n                }" : "",
        i = "#onetrust-consent-sdk #onetrust-pc-sdk\n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (o ? "color: " + o + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + H.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + e + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (n ? "background-color: " + n + ";" : "") + "\n                " + (r ? "color: " + r + "; border-color: " + r + ";" : "") + "\n            }"),
        i
    }
    ,
    rr.prototype.setFocusBorderColor = function() {
        var e = ""
          , t = x.PCFocusBorderColor;
        return t && (e += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + t + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + t + ";\n            }"),
        e
    }
    ,
    rr.prototype.setCloseIconColor = function() {
        var e = "";
        return x.PCCloseButtonType === be.Link && (e += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + x.PCContinueColor + "}"),
        e
    }
    ,
    rr.prototype.setTabLayoutStyles = function() {
        var e = ""
          , t = x.pcMenuColor
          , o = x.pcMenuHighLightColor;
        return G.pcName === V && (t && (e += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + t + "\n                }"),
        o) && (e += "#onetrust-consent-sdk #onetrust-pc-sdk ." + H.P_Active_Menu + " {\n                    background-color: " + o + "\n                }"),
        e
    }
    ,
    rr.prototype.setFocusIfTemplateUpgrade = function() {
        var e = ""
          , t = x.PCFocusBorderColor;
        return !x.PCTemplateUpgrade && t && (e += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }"),
        e
    }
    ,
    rr.prototype.setExtLnkUrl = function() {
        var e = ""
          , t = y.updateCorrectUrl(x.OTExternalLinkLogo);
        return t && (e += "#onetrust-pc-sdk .ot-vlst-cntr .ot-ext-lnk {\n                    background-image: url('" + t + "');\n                }\n            "),
        e
    }
    ,
    rr.prototype.setCustomCss = function() {
        var e = "";
        return x.pcCustomCSS && (e += x.pcCustomCSS),
        e
    }
    ;
    var $n, Zn, er, tr, or, nr = rr;
    function rr() {
        this.processedCSS = "",
        this.addCustomBannerCSS = function() {
            var e = x.backgroundColor
              , t = x.buttonColor
              , o = x.textColor
              , n = x.buttonTextColor
              , r = x.bannerMPButtonColor
              , i = x.bannerMPButtonTextColor
              , s = x.bannerAccordionBackgroundColor
              , a = x.BSaveBtnColor
              , l = x.BCategoryContainerColor
              , c = x.BLineBreakColor
              , d = x.BCategoryStyleColor
              , p = x.bannerLinksTextColor
              , u = x.BFocusBorderColor
              , o = "\n        " + (G.bannerName === ct ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header,\n                    #onetrust-banner-sdk .ot-optout-signal\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (p ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + p + ";\n                        }" : "");
            return (t || n) && (o += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"),
            u && (o += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + u + ";\n               outline-width: 1px;\n            }"),
            (i || r) && (o += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color:\n                " + (r && !x.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"),
            G.bannerName === ut && (r = i = t = p = s = void 0,
            d && (i = "background-color: " + d + ";",
            r = "border-color: " + d + ";"),
            u && (o += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + u + ";\n                    outline-width: 1px;\n                }"),
            o += "#onetrust-banner-sdk .ot-bnr-save-handler {" + (s = a ? "color: " + n + ";border-color: " + n + ";background-color: " + a + ";" : s) + "}#onetrust-banner-sdk .ot-cat-lst {" + (p = l ? "background-color: " + l + ";" : p) + "}#onetrust-banner-sdk .ot-cat-bdr {" + (t = c ? "border-color: " + c + ";" : t) + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + i + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + r + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"),
            x.BCloseButtonType === be.Link && (o += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + x.BContinueColor + "}"),
            o
        }
        ,
        this.addCustomPreferenceCenterCSS = function() {
            var e = x.pcBackgroundColor
              , t = x.pcTextColor
              , o = x.pcLinksTextColor
              , n = x.PCenterEnableAccordion
              , r = x.pcAccordionBackgroundColor
              , e = "\n            " + (e ? (G.pcName === Ct ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + H.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + H.P_Search_Cntr + ",\n                " + (n && G.pcName === Ct ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + H.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Title + ":after\n                " + (O.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (t ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Vendor_Container + " " + H.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Host_Cntr + " " + H.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Vendor_List + " " + H.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Vendor_List + " " + H.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Vendor_List + " " + H.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Vendor_List + " " + H.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal\n                {\n                    color: " + t + ";\n                }" : "") + "\n            " + (o ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Host_Cntr + " " + H.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Host_Cntr + " " + H.P_Acc_Header + " " + H.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Host_Cntr + " " + H.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Content + " " + H.P_Policy_Txt + " .ot-link-btn,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (n && r ? "#onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Acc_Container + H.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Acc_Txt + " " + H.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + r + ";\n            }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Host_Cntr + " " + H.P_Host_Info + ",\n                    " + (O.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + H.P_Acc_Txt + " " + H.P_Ven_Opts) + "\n                            {\n                                background-color: " + r + ";\n                            }" : "") + "\n        ";
            return (e += $n.setButonColor()) + $n.setFocusBorderColor() + $n.setCloseIconColor() + $n.setTabLayoutStyles() + $n.setTabLayoutStyles() + $n.setFocusIfTemplateUpgrade() + $n.setExtLnkUrl() + $n.setCustomCss()
        }
        ,
        this.addCustomCookieListCSS = function() {
            var e = x.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : ""
              , e = "\n                " + (x.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + x.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (x.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + x.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (x.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + x.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (x.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + x.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && x.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + x.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return x.cookieListCustomCss && (e += x.cookieListCustomCss),
            e
        }
    }
    (c = Zn = Zn || {}).SaleOptOut = "SaleOptOutCID",
    c.SharingOptOut = "SharingOptOutCID",
    c.PersonalDataConsents = "PersonalDataCID",
    (c = er = er || {}).SharingOptOutNotice = "SharingOptOutCID",
    c.SaleOptOutNotice = "SaleOptOutCID",
    c.SensitiveDataLimitUseNotice = "SensitivePICID",
    (c = tr = tr || {}).KnownChildSensitiveDataConsents1 = "KnownChildSellPICID",
    c.KnownChildSensitiveDataConsents2 = "KnownChildSharePICID",
    (c = or = or || {}).SensitiveDataProcessing1 = "SensitivePICID",
    c.SensitiveDataProcessing2 = "SensitiveSICID",
    c.SensitiveDataProcessing3 = "GeolocationCID",
    c.SensitiveDataProcessing4 = "RREPInfoCID",
    c.SensitiveDataProcessing5 = "CommunicationCID",
    c.SensitiveDataProcessing6 = "GeneticCID",
    c.SensitiveDataProcessing7 = "BiometricCID",
    c.SensitiveDataProcessing8 = "HealthCID",
    c.SensitiveDataProcessing9 = "SexualOrientationCID";
    ar.prototype.initialiseLandingPath = function() {
        var e = R.needReconsent();
        To.isLandingPage() ? To.setLandingPathParam(location.href) : e && !R.awaitingReconsent() ? (To.setLandingPathParam(location.href),
        v.writeCookieParam(m.OPTANON_CONSENT, Ne, !0)) : (e || v.writeCookieParam(m.OPTANON_CONSENT, Ne, !1),
        To.setLandingPathParam(qe),
        G.isSoftOptInMode && !O.moduleInitializer.MobileSDK && a.setAlertBoxClosed(!0),
        x.NextPageCloseBanner && x.ShowAlertNotice && P.nextPageCloseBanner())
    }
    ;
    var ir, sr = ar;
    function ar() {}
    dr.prototype.insertCookiePolicyHtml = function() {
        if (D(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t, o, n = document.createDocumentFragment(), r = (f.cookieListGroup && (t = x.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2",
            o = document.createElement("div"),
            D(o).html(f.cookieListGroup.html),
            o.removeChild(o.querySelector(t)),
            e = o.querySelector(".ot-sdk-cookie-policy"),
            x.useRTL) && D(e).attr("dir", "rtl"),
            e.querySelector("#cookie-policy-title").innerHTML = x.CookieListTitle || "",
            e.querySelector("#cookie-policy-description").innerHTML = x.CookieListDescription || "",
            e.querySelector("section")), i = e.querySelector("section tbody tr"), s = null, a = null;
            x.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"),
            a = e.querySelector("section.subgroup tbody tr"),
            D(e).el.removeChild(e.querySelector("section.subgroup"))),
            D(e).el.removeChild(e.querySelector("section")),
            !D(this.COOKIE_POLICY_SELECTOR).length && D(this.OPTANON_POLICY_SELECTOR).length ? D(this.OPTANON_POLICY_SELECTOR).append('<div id="ot-sdk-cookie-policy"></div>') : (D(this.COOKIE_POLICY_SELECTOR).html(""),
            D(this.OPTANON_POLICY_SELECTOR).html(""));
            for (var l = 0, c = x.Groups; l < c.length; l++) {
                var d = c[l]
                  , p = {
                    json: x,
                    group: d,
                    sectionTemplate: r,
                    tableRowTemplate: i,
                    cookieList: e,
                    fragment: n
                };
                if (x.CookiesV2NewCookiePolicy)
                    this.insertGroupHTMLV2(p);
                else if (this.insertGroupHTML(p),
                d.ShowSubgroup)
                    for (var u = 0, h = d.SubGroups; u < h.length; u++) {
                        var g = h[u]
                          , g = {
                            json: x,
                            group: g,
                            sectionTemplate: s,
                            tableRowTemplate: a,
                            cookieList: e,
                            fragment: n
                        };
                        this.insertGroupHTML(g)
                    }
            }
        }
    }
    ,
    dr.prototype.insertGroupHTMLV2 = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o, n = this, r = e.json, i = e.group, s = e.sectionTemplate, a = e.tableRowTemplate, l = e.cookieList, e = e.fragment, c = s.cloneNode(!0), s = i.SubGroups, d = (D(t("tbody")).html(""),
        i.Hosts.slice()), p = i.FirstPartyCookies.slice(), u = d.length || p.length ? i.GroupName : "", s = (i.ShowSubgroup && s.length ? (o = c.querySelector("section.ot-sdk-subgroup ul li"),
        s.forEach(function(e) {
            var t = o.cloneNode(!0);
            d = d.concat(e.Hosts),
            p = p.concat(e.FirstPartyCookies),
            (e.Hosts.length || e.FirstPartyCookies.length) && (u += "," + e.GroupName),
            D(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName),
            D(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(n.groupsClass.safeFormattedGroupDescription(e)),
            D(o.parentElement).append(t)
        }),
        c.querySelector("section.ot-sdk-subgroup ul").removeChild(o)) : c.removeChild(c.querySelector("section.ot-sdk-subgroup")),
        x.TTLGroupByTech && (this.setCookieListHeaderOrder(c),
        this.setCookieListBodyOrder(a)),
        r.IsLifespanEnabled ? D(t("th.ot-life-span")).el.innerHTML = r.LifespanText : D(t("thead tr")).el.removeChild(D(t("th.ot-life-span")).el),
        D(t("th.ot-cookies")).el.innerHTML = r.CookiesText,
        D(t("th.ot-host")).el.innerHTML = r.CategoriesText,
        D(t("th.ot-cookies-type")).el.innerHTML = r.CookiesUsedText,
        D(t("th.ot-host-description")).el.innerHTML = r.CookiesDescText,
        this.transformFirstPartyCookies(p, d, i)), h = !1;
        (h = x.TTLGroupByTech ? x.TTLShowTechDesc : s.some(function(e) {
            return e.Description
        })) || D(t("thead tr")).el.removeChild(D(t("th.ot-host-description")).el),
        D(t(".ot-sdk-cookie-policy-group")).html(i.GroupName),
        D(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(i)),
        x.TTLGroupByTech ? this.insertCookieLineByLine({
            json: r,
            hosts: s,
            tableRowTemplate: a,
            showHostDescription: h,
            st: t
        }) : this.insertHostHtmlV2({
            json: r,
            hosts: s,
            tableRowTemplate: a,
            showHostDescription: h,
            st: t
        }),
        0 === s.length ? c.removeChild(c.querySelector("table")) : D(t("caption")).el.innerHTML = u,
        D(l).append(c),
        D(e).append(l),
        D(this.COOKIE_POLICY_SELECTOR).append(e)
    }
    ,
    dr.prototype.insertHostHtmlV2 = function(e) {
        for (var l, c = e.json, t = e.hosts, d = e.tableRowTemplate, p = e.showHostDescription, u = e.st, h = this, o = 0, n = t; o < n.length; o++)
            !function(e) {
                for (var t = d.cloneNode(!0), o = function(e) {
                    return t.querySelector(e)
                }, n = (h.clearCookieRowElement(o),
                []), r = [], i = 0, s = e.Cookies; i < s.length; i++) {
                    var a = s[i]
                      , a = ((l = a).IsSession ? n.push(c.LifespanTypeText) : n.push(y.getDuration(l)),
                    l.Name);
                    e.Type && (a = '\n                    <a href="https://cookiepedia.co.uk/cookies/' + l.Name + '" \n                        rel="noopener" target="_blank" aria-label="' + l.Name + " " + x.NewWinTxt + '">\n                        ' + l.Name + "\n                    </a>"),
                    r.push(a)
                }
                h.setDataLabelAttribute(o, c),
                h.createCookieRowHtmlElement({
                    host: e,
                    subGroupCookie: l,
                    trt: o,
                    json: c,
                    lifespanText: n.join(", "),
                    hostType: r.join(", ")
                }),
                h.removeLifeSpanOrHostDescription(c, p, t, o),
                D(u("tbody")).append(t)
            }(n[o])
    }
    ,
    dr.prototype.insertGroupHTML = function(e) {
        function t(e) {
            return l.querySelector(e)
        }
        var o, n = e.json, r = e.group, i = e.sectionTemplate, s = e.tableRowTemplate, a = e.cookieList, e = e.fragment, l = i.cloneNode(!0), i = (D(t("caption")).el.innerHTML = r.GroupName,
        D(t("tbody")).html(""),
        D(t("thead tr")),
        n.IsLifespanEnabled ? D(t("th.life-span")).el.innerHTML = n.LifespanText : D(t("thead tr")).el.removeChild(D(t("th.life-span")).el),
        D(t("th.cookies")).el.innerHTML = n.CookiesText,
        D(t("th.host")).el.innerHTML = n.CategoriesText,
        !1);
        if (r.Hosts.some(function(e) {
            return e.description
        }) ? i = !0 : D(t("thead tr")).el.removeChild(D(t("th.host-description")).el),
        D(t(".ot-sdk-cookie-policy-group")).html(r.GroupName),
        D(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)),
        0 < r.FirstPartyCookies.length) {
            D(t(".cookies-used-header")).html(n.CookiesUsedText),
            D(t(".cookies-list")).html("");
            for (var c = 0; c < r.FirstPartyCookies.length; c++)
                o = r.FirstPartyCookies[c],
                D(t(".cookies-list")).append("<li> " + y.getCookieLabel(o, n.AddLinksToCookiepedia) + " <li>")
        } else
            l.removeChild(t(".cookies-used-header")),
            l.removeChild(t(".cookies-list"));
        this.insertHostHtmlV1({
            json: n,
            hosts: r.Hosts,
            tableRowTemplate: s,
            showHostDescription: i,
            st: t
        }),
        D(a).append(l),
        D(e).append(a),
        D(this.COOKIE_POLICY_SELECTOR).append(e)
    }
    ,
    dr.prototype.insertHostHtmlV1 = function(e) {
        for (var l = e.json, t = e.hosts, c = e.tableRowTemplate, d = e.showHostDescription, p = e.st, o = 0, n = t; o < n.length; o++)
            !function(e) {
                for (var t = c.cloneNode(!0), o = function(e) {
                    return t.querySelector(e)
                }, n = (D(o(".cookies-td ul")).html(""),
                D(o(".life-span-td ul")).html(""),
                D(o(".host-td")).html(""),
                D(o(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> "),
                0), r = 0, i = e.Cookies; r < i.length; r++) {
                    var s = i[r]
                      , a = ""
                      , a = s.IsSession ? l.LifespanTypeText : 0 === s.Length ? "<1 " + l.LifespanDurationText || l.PCenterVendorListLifespanDays : s.Length + " " + l.LifespanDurationText || l.PCenterVendorListLifespanDays
                      , a = l.IsLifespanEnabled ? "&nbsp;(" + a + ")" : "";
                    D(o(".cookies-td ul")).append("<li> " + s.Name + " " + a + " </li>"),
                    l.IsLifespanEnabled && (a = s.Length ? s.Length + " days" : "N/A",
                    D(o(".life-span-td ul")).append("<li>" + a + "</li>")),
                    0 === n && (D(o(".host-td")).append('<span class="ot-mobile-border"></span>'),
                    D(o(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + s.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (e.DisplayName || e.HostName) + " " + x.NewWinTxt + '">' + (e.DisplayName || e.HostName) + "</a>")),
                    n++
                }
                d || t.removeChild(o("td.host-description-td")),
                D(p("tbody")).append(t)
            }(n[o]);
        0 === t.length && D(p("table")).el.removeChild(D(p("thead")).el)
    }
    ,
    dr.prototype.transformFirstPartyCookies = function(e, t, o) {
        var n = this
          , r = t.slice()
          , t = (e.forEach(function(e) {
            n.populateHostGroup(e, r, x.firstPartyTxt)
        }),
        o.GeneralVendorsIds)
          , e = (this.populateGenVendor(t, o, r),
        o.SubGroups || []);
        return e.length && e.forEach(function(e) {
            var t = e.GeneralVendorsIds;
            n.populateGenVendor(t, e, r)
        }),
        r
    }
    ,
    dr.prototype.populateGenVendor = function(e, o, n) {
        var r = this;
        e.length && e.forEach(function(t) {
            var e = x.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            });
            e.Cookies.length && e.Cookies.forEach(function(e) {
                var t;
                e.category === o.GroupName && (t = e.isThirdParty ? "" : x.firstPartyTxt,
                r.populateHostGroup(e, n, t))
            })
        })
    }
    ,
    dr.prototype.populateHostGroup = function(t, e, o) {
        e.some(function(e) {
            if (e.HostName === t.Host && e.Type === o)
                return e.Cookies.push(t),
                !0
        }) || e.unshift({
            HostName: t.Host,
            DisplayName: t.Host,
            HostId: "",
            Description: "",
            Type: o,
            Cookies: [t]
        })
    }
    ,
    dr.prototype.insertCookieLineByLine = function(e) {
        for (var t = e.json, o = e.hosts, n = e.tableRowTemplate, r = e.showHostDescription, i = e.st, s = 0, a = o; s < a.length; s++)
            for (var l = a[s], c = 0, d = l.Cookies; c < d.length; c++) {
                var p = d[c]
                  , u = p.IsSession ? t.LifespanTypeText : y.getDuration(p)
                  , h = p.Name
                  , g = (l.Type && (h = '<a href="https://cookiepedia.co.uk/cookies/' + h + '" \n                        rel="noopener" target="_blank" aria-label="' + h + " " + x.NewWinTxt + '">' + h + "\n                    </a>"),
                n.cloneNode(!0))
                  , C = this.queryToHtmlElement(g);
                this.clearCookieRowElement(C),
                this.createCookieRowHtmlElement({
                    host: l,
                    subGroupCookie: p,
                    trt: C,
                    json: t,
                    lifespanText: u,
                    hostType: h
                }),
                this.removeLifeSpanOrHostDescription(t, r, g, C),
                D(i("tbody")).append(g)
            }
    }
    ,
    dr.prototype.removeLifeSpanOrHostDescription = function(e, t, o, n) {
        e.IsLifespanEnabled || o.removeChild(n("td.ot-life-span-td")),
        t || o.removeChild(n("td.ot-host-description-td"))
    }
    ,
    dr.prototype.createCookieRowHtmlElement = function(e) {
        var t = e.host
          , o = e.subGroupCookie
          , n = e.trt
          , r = e.json
          , i = e.lifespanText
          , e = e.hostType
          , s = ".ot-host-td"
          , r = (this.setDataLabelAttribute(n, r),
        D(n(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + o.description + "</p> "),
        D(n(s)).append('<span class="ot-mobile-border"></span>'),
        t.DisplayName || t.HostName);
        D(n(s)).append(t.Type ? r : '<a href="https://cookiepedia.co.uk/host/' + o.Host + '" rel="noopener" target="_blank" \n                        aria-label="' + r + " " + x.NewWinTxt + '">\n                        ' + r + "\n                        </a>"),
        n(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", e),
        n(".ot-life-span-td .ot-life-span-td-content").innerText = i,
        n(".ot-cookies-type .ot-cookies-type-td-content").innerText = t.Type ? x.firstPartyTxt : x.thirdPartyTxt
    }
    ,
    dr.prototype.setDataLabelAttribute = function(e, t) {
        var o = "data-label";
        e(".ot-host-td").setAttribute(o, t.CategoriesText),
        e(".ot-cookies-td").setAttribute(o, t.CookiesText),
        e(".ot-cookies-type").setAttribute(o, t.CookiesUsedText),
        e(".ot-life-span-td").setAttribute(o, t.LifespanText)
    }
    ,
    dr.prototype.clearCookieRowElement = function(e) {
        D(e(".ot-cookies-td span")).text(""),
        D(e(".ot-life-span-td span")).text(""),
        D(e(".ot-cookies-type span")).text(""),
        D(e(".ot-cookies-td .ot-cookies-td-content")).html(""),
        D(e(".ot-host-td")).html("")
    }
    ,
    dr.prototype.setCookieListHeaderOrder = function(e) {
        var e = e.querySelector("section table thead tr")
          , t = e.querySelector("th.ot-host")
          , o = e.querySelector("th.ot-cookies")
          , n = e.querySelector("th.ot-life-span")
          , r = e.querySelector("th.ot-cookies-type")
          , i = e.querySelector("th.ot-host-description");
        e.innerHTML = "",
        e.appendChild(o.cloneNode(!0)),
        e.appendChild(t.cloneNode(!0)),
        e.appendChild(n.cloneNode(!0)),
        e.appendChild(r.cloneNode(!0)),
        e.appendChild(i.cloneNode(!0))
    }
    ,
    dr.prototype.setCookieListBodyOrder = function(e) {
        var t = e.querySelector("td.ot-host-td")
          , o = e.querySelector("td.ot-cookies-td")
          , n = e.querySelector("td.ot-life-span-td")
          , r = e.querySelector("td.ot-cookies-type")
          , i = e.querySelector("td.ot-host-description-td");
        e.innerHTML = "",
        e.appendChild(o.cloneNode(!0)),
        e.appendChild(t.cloneNode(!0)),
        e.appendChild(n.cloneNode(!0)),
        e.appendChild(r.cloneNode(!0)),
        e.appendChild(i.cloneNode(!0))
    }
    ,
    dr.prototype.queryToHtmlElement = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    }
    ;
    var lr, cr = dr;
    function dr() {
        this.groupsClass = k,
        this.COOKIE_POLICY_SELECTOR = "#ot-sdk-cookie-policy",
        this.OPTANON_POLICY_SELECTOR = "#optanon-cookie-policy",
        this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    hr.prototype.IsAlertBoxClosedAndValid = function() {
        return R.isAlertBoxClosedAndValid()
    }
    ,
    hr.prototype.LoadBanner = function() {
        a.loadBanner()
    }
    ,
    hr.prototype.Init = function(e) {
        void 0 === e && (e = !1),
        xe.insertViewPortTag(),
        f.ensureHtmlGroupDataInitialised(),
        Tn.updateGtmMacros(!1),
        ir.initialiseLandingPath(),
        e || $n.initialiseCssReferences()
    }
    ,
    hr.prototype.FetchAndDownloadPC = function() {
        u.fetchAndSetupPC()
    }
    ,
    hr.prototype.ToggleInfoDisplay = function() {
        a.triggerGoogleAnalyticsEvent(Oo, Fo),
        u.toggleInfoDisplay()
    }
    ,
    hr.prototype.Close = function(e) {
        u.close(e)
    }
    ,
    hr.prototype.AllowAll = function(e) {
        P.allowAllEvent(e)
    }
    ,
    hr.prototype.RejectAll = function(e) {
        P.rejectAllEvent(e)
    }
    ,
    hr.prototype.setDataSubjectIdV2 = function(e, t) {
        void 0 === t && (t = !1),
        e && e.trim() && (e = e.replace(/ /g, ""),
        v.writeCookieParam(m.OPTANON_CONSENT, De, e, !0),
        N.dsParams.isAnonymous = t)
    }
    ,
    hr.prototype.getDataSubjectId = function() {
        return v.readCookieParam(m.OPTANON_CONSENT, De, !0)
    }
    ,
    hr.prototype.synchroniseCookieWithPayload = function(n) {
        var e = v.readCookieParam(m.OPTANON_CONSENT, "groups")
          , e = B.strToArr(e)
          , r = [];
        e.forEach(function(e) {
            var e = e.split(":")
              , t = C.getGroupById(e[0])
              , o = B.findIndex(n, function(e) {
                return e.Id === t.PurposeId
            })
              , o = n[o];
            o ? o.TransactionType === je ? (r.push(e[0] + ":1"),
            t.Parent ? u.toggleSubCategory(null, t.CustomGroupId, !0, t.CustomGroupId) : u.toggleV2Category(null, t, !0, t.CustomGroupId)) : (r.push(e[0] + ":0"),
            t.Parent ? u.toggleSubCategory(null, t.CustomGroupId, !1, t.CustomGroupId) : u.toggleV2Category(null, t, !1, t.CustomGroupId)) : r.push(e[0] + ":" + e[1])
        }),
        po.writeGrpParam(m.OPTANON_CONSENT, r)
    }
    ,
    hr.prototype.getGeolocationData = function() {
        return N.userLocation
    }
    ,
    hr.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        a.triggerGoogleAnalyticsEvent(e, t, o, n)
    }
    ,
    hr.prototype.ReconsentGroups = function() {
        var n = !1
          , e = v.readCookieParam(m.OPTANON_CONSENT, "groups")
          , r = B.strToArr(e)
          , i = B.strToArr(e.replace(/:0|:1/g, ""))
          , s = !1
          , t = v.readCookieParam(m.OPTANON_CONSENT, "hosts")
          , a = B.strToArr(t)
          , l = B.strToArr(t.replace(/:0|:1/g, ""))
          , c = ["inactive", "inactive landingpage", "do not track"];
        e && (x.Groups.forEach(function(e) {
            q(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId
                  , o = B.indexOf(i, t);
                -1 !== o && (e = C.getGrpStatus(e).toLowerCase(),
                -1 < c.indexOf(e)) && (n = !0,
                r[o] = t + ("inactive landingpage" === e ? ":1" : ":0"))
            })
        }),
        n) && po.writeGrpParam(m.OPTANON_CONSENT, r),
        t && (x.Groups.forEach(function(e) {
            q(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t, o = B.indexOf(l, e.HostId);
                    -1 !== o && (t = C.getGrpStatus(n).toLowerCase(),
                    -1 < c.indexOf(t)) && (s = !0,
                    a[o] = e.HostId + ("inactive landingpage" === t ? ":1" : ":0"))
                })
            })
        }),
        s) && po.writeHstParam(m.OPTANON_CONSENT, a)
    }
    ,
    hr.prototype.SetAlertBoxClosed = function(e) {
        a.setAlertBoxClosed(e)
    }
    ,
    hr.prototype.GetDomainData = function() {
        return G.pubDomainData
    }
    ,
    hr.prototype.setGeoLocation = function(e, t) {
        N.userLocation = {
            country: e,
            state: t = void 0 === t ? "" : t
        }
    }
    ,
    hr.prototype.changeLang = function(t) {
        var o;
        t !== N.lang && (o = O.moduleInitializer,
        Jt.getLangJson(t).then(function(e) {
            e ? (G.init(e),
            f.fetchAssets(t).then(function() {
                var e = document.getElementById("onetrust-style")
                  , e = (e && (e.textContent = ""),
                $n.initialiseCssReferences(),
                o.IsSuppressPC && !N.isPCVisible || (B.removeChild(D("#onetrust-pc-sdk").el),
                N.vendorDomInit = !1,
                N.genVendorDomInit = !1,
                S.insertPcHtml(),
                u.initialiseConsentNoticeHandlers(),
                x.IsIabEnabled && h.InitializeVendorList(),
                N.isPCVisible && u.restorePc()),
                !0);
                R.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || N.skipAddingHTML) || x.NoBanner || (B.removeChild(D("#onetrust-banner-sdk").el),
                u.initializeAlartHtmlAndHandler(),
                e = !1),
                pr.initCookiePolicyAndSettings(),
                B.removeChild(D("#ot-sdk-btn-floating").el),
                ti.insertCSBtn(e),
                pr.processedHtml = null
            })) : console.error("Language:" + t + " doesn't exist for the geo rule")
        }))
    }
    ,
    hr.prototype.initCookiePolicyAndSettings = function(e) {
        var t;
        (e = void 0 === e ? !1 : e) && (null != (t = document.querySelector(".ot-sdk-show-settings")) && t.removeEventListener("click", u.cookiesSettingsBoundListener),
        null != (t = document.querySelector(".optanon-toggle-display"))) && t.removeEventListener("click", u.cookiesSettingsBoundListener),
        O.fp.CookieV2TrackingTechnologies ? ti.insertTrackingTechnologies() : lr.insertCookiePolicyHtml(),
        u.insertCookieSettingText(e)
    }
    ,
    hr.prototype.showVendorsList = function() {
        N.pcLayer !== ie.VendorList && (u.showAllVendors(),
        a.triggerGoogleAnalyticsEvent(Oo, qo))
    }
    ,
    hr.prototype.getTestLogData = function() {
        var e = x.Groups
          , t = G.pubDomainData
          , o = O.moduleInitializer.Version
          , o = (console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"),
        console.info("Script is for: %c" + (t.Domain || x.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"),
        console.info("Script Version Published: " + o),
        console.info("The consent model is: " + t.ConsentModel.Name),
        null !== R.alertBoxCloseDate())
          , n = (console.info("Consent has " + (o ? "" : "not ") + "been given " + (o ? "👍" : "🛑")),
        [])
          , r = (e.forEach(function(e) {
            var t = ""
              , t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : k.isGroupActive(e) ? "Active" : "Inactive";
            n.push({
                CustomGroupId: e.CustomGroupId,
                GroupName: e.GroupName,
                Status: t
            })
        }),
        console.groupCollapsed("Current Category Status"),
        console.table(n),
        console.groupEnd(),
        [])
          , o = (t.GeneralVendors.forEach(function(e) {
            r.push({
                CustomGroupId: e.VendorCustomId,
                Name: e.Name,
                Status: pr.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
            })
        }),
        console.groupCollapsed("General Vendor Ids"),
        console.table(r),
        console.groupEnd(),
        G.getRegionRule())
          , t = N.userLocation
          , i = O.moduleInitializer.GeoRuleGroupName
          , t = (G.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"),
        N.userLocation.country && console.info("The Geolocation is " + t.country.toUpperCase()),
        console.info("The Geolocation rule is " + o.Name),
        console.info("The GeolocationRuleGroup is " + i),
        G.canUseConditionalLogic ? (console.info("The Condition name is " + G.Condition.Name),
        console.info("The TemplateName is " + G.Condition.TemplateName)) : console.info("The TemplateName is " + o.TemplateName),
        console.groupEnd(),
        e.filter(function(e) {
            return k.isGroupActive(e) && "COOKIE" === e.Type
        }));
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"),
        t.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            e = pr.getAllFormatCookiesForAGroup(e);
            console.table(e, ["Name", "Host", "description"]),
            console.groupEnd()
        }),
        console.groupEnd()
    }
    ,
    hr.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf("," + e + ",")
    }
    ,
    hr.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return t.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }),
        (null == (e = e.Hosts) ? void 0 : e.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return t.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }),
        t
    }
    ,
    hr.prototype.updateSingularConsent = function(l, c) {
        return d(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, u.fetchAndSetupPC()];
                case 1:
                    for (e.sent(),
                    G.apiSource = te.UpdateConsent,
                    t = c.split(","),
                    o = [],
                    n = 0,
                    r = t; n < r.length; n++)
                        s = r[n],
                        s = s.split(":"),
                        i = s[0],
                        s = s[1],
                        a = Boolean(Number(s)),
                        l === bt ? "always active" === C.getGrpStatus(C.getGroupById(i)) || (pr.updateConsentArray(N.groupsConsent, i, s),
                        o.push({
                            id: i,
                            isEnabled: a
                        })) : l === St ? pr.updateConsentArray(N.hostsConsent, i, s) : l === Pt ? N.genVendorsConsent[i] = a : l === Tt && o.push({
                            id: i,
                            isEnabled: a
                        });
                    return P.handleTogglesOnSingularConsentUpdate(l, o),
                    [2]
                }
            })
        })
    }
    ,
    hr.prototype.vendorServiceEnabled = function() {
        return N.showVendorService
    }
    ,
    hr.prototype.updateGCM = function(e) {
        e || console.error("No callback passed to the UpdateGCM"),
        G.gcmUpdateCallback = e
    }
    ,
    hr.prototype.updateConsentArray = function(e, t, o) {
        var n = e.findIndex(function(e) {
            return e.includes(t + ":0") || e.includes(t + ":1")
        });
        -1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
    }
    ;
    var pr, ur = hr;
    function hr() {
        this.processedHtml = "",
        this.useGeoLocationService = !0,
        this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid,
        this.InitializeBanner = function() {
            return ti.initBanner()
        }
        ,
        this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (S.insertPcHtml(),
            Wr.insertAlertHtml()),
            pr.processedHtml || (pr.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML),
            pr.processedHtml
        }
        ,
        this.getCSS = function() {
            return $n.processedCSS
        }
        ,
        this.setConsentProfile = function(e) {
            var t;
            e.customPayload && (t = e.customPayload).Interaction && v.writeCookieParam(m.OPTANON_CONSENT, Fe, t.Interaction),
            pr.setDataSubjectIdV2(e.identifier, e.isAnonymous),
            pr.synchroniseCookieWithPayload(e.purposes),
            P.executeOptanonWrapper()
        }
        ,
        this.InsertScript = function(e, t, o, n, r, i) {
            var s, a = null != n && void 0 !== n, l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (k.canInsertForGroup(r, l) && !B.contains(N.srcExecGrps, r)) {
                N.srcExecGrpsTemp.push(r),
                a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && B.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (s = !1,
                c.onload = c.onreadystatechange = function() {
                    s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0,
                    o())
                }
                ),
                c.type = "text/javascript",
                c.src = e,
                i && (c.async = i),
                t) {
                case "head":
                    document.getElementsByTagName("head")[0].appendChild(c);
                    break;
                case "body":
                    document.getElementsByTagName("body")[0].appendChild(c);
                    break;
                default:
                    var d = document.getElementById(t);
                    d && (d.appendChild(c),
                    a) && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && B.show(t)
                }
                if (a && void 0 !== n.makeElementsVisible)
                    for (var p = 0, u = n.makeElementsVisible; p < u.length; p++) {
                        var h = u[p];
                        B.show(h)
                    }
                if (a && void 0 !== n.deleteElements)
                    for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                        h = C[g];
                        B.remove(h)
                    }
            }
        }
        ,
        this.InsertHtml = function(e, t, o, n, r) {
            var i = null != n && void 0 !== n
              , s = i && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (k.canInsertForGroup(r, s) && !B.contains(N.htmlExecGrps, r)) {
                if (N.htmlExecGrpsTemp.push(r),
                i && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && B.empty(t),
                B.appendTo(t, e),
                i && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && B.show(t),
                i && void 0 !== n.makeElementsVisible)
                    for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                        var c = l[a];
                        B.show(c)
                    }
                if (i && void 0 !== n.deleteElements)
                    for (var d = 0, p = n.deleteElements; d < p.length; d++) {
                        c = p[d];
                        B.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }
        ,
        this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !k.canInsertForGroup(t)
        }
    }
    gr.prototype.getFieldsValues = function(e, t, o, n, r) {
        void 0 === r && (r = !1);
        e = this.getSectionFieldsMapping(e),
        t = this.getSectionFieldsMapping(t, !0),
        o = this.getDynamicFields(o, n),
        n = this.getMSPASectionFieldValue(),
        r = r ? this.getGpcSectionFieldValue() : {};
        return _(_(_(_(_({}, e), t), o), n), r)
    }
    ,
    gr.prototype.getGpcSectionFieldValue = function() {
        var e = {};
        return e[Oe.GpcSegmentType] = 1,
        e[Oe.Gpc] = Boolean(navigator.globalPrivacyControl),
        e
    }
    ,
    gr.prototype.getMSPASectionFieldValue = function() {
        var e = {};
        return x.IsMSPAEnabled ? (e.MspaCoveredTransaction = 1,
        x.MSPAOptionMode === Ve.MspaServiceProviderMode ? (e.MspaServiceProviderMode = 1,
        e.MspaOptOutOptionMode = 2) : x.MSPAOptionMode === Ve.MspaOptOutOptionMode ? (e.MspaServiceProviderMode = 2,
        e.MspaOptOutOptionMode = 1) : (e.MspaServiceProviderMode = 2,
        e.MspaOptOutOptionMode = 2)) : (e.MspaCoveredTransaction = 2,
        e.MspaServiceProviderMode = 0,
        e.MspaOptOutOptionMode = 0),
        e
    }
    ,
    gr.prototype.getDynamicArrayFieldsValue = function(e, t) {
        for (var o = {}, n = [], r = this.getSectionFieldsMapping(t), i = 1; i <= Object.keys(r).length; i++)
            n.push(r[e + i]);
        return o[e] = n,
        o
    }
    ,
    gr.prototype.getDynamicFields = function(e, t) {
        var o, n = {};
        return x.IsGPPKnownChildApplicable && e && (o = this.getDynamicArrayFieldsValue(we.KnownChildSensitiveDataConsents, e),
        n = _(_({}, n), o)),
        x.IsGPPDataProcessingApplicable && t && (o = this.getDynamicArrayFieldsValue(we.SensitiveDataProcessing, t),
        n = _(_({}, n), o)),
        n
    }
    ,
    gr.prototype.getSectionFieldsMapping = function(e, o) {
        var n = this
          , r = (void 0 === o && (o = !1),
        {});
        return Object.entries(e).forEach(function(e) {
            var t = e[0]
              , e = e[1]
              , e = n.evaluateValueOperators(e);
            r[t] = n.calculateFieldValue(e, o)
        }),
        r
    }
    ,
    gr.prototype.evaluateValueOperators = function(e) {
        var t, o, n = "", r = [];
        return e && (t = e.split(" && "),
        o = e.split(" || "),
        r = (1 < t.length ? (n = "&&",
        t) : 1 < o.length ? (n = "||",
        o) : (n = "",
        [e])).map(function(e) {
            return x.GPPPurposes[e] || ""
        })),
        {
            values: r,
            operator: n
        }
    }
    ,
    gr.prototype.calculateFieldValue = function(e, t) {
        var o;
        if (e.values.length)
            switch (e.operator) {
            case "&&":
                o = this.calculateAndFieldValue(e.values, t);
                break;
            case "||":
                o = this.calculateOrFieldValue(e.values, t);
                break;
            default:
                o = this.calculateSingleFieldValue(e.values[0], t)
            }
        else
            o = 0;
        return o
    }
    ,
    gr.prototype.calculateOrFieldValue = function(e, t) {
        var o = this;
        return this.isNotApplicable(e) ? 0 : (e = e.some(function(e) {
            return o.fieldValueCondition(e, t)
        }),
        this.calculateFieldValueFromBit(e, t))
    }
    ,
    gr.prototype.calculateAndFieldValue = function(e, t) {
        var o = this;
        return this.isNotApplicable(e) ? 0 : (e = e.every(function(e) {
            return o.fieldValueCondition(e, t)
        }),
        this.calculateFieldValueFromBit(e, t))
    }
    ,
    gr.prototype.calculateSingleFieldValue = function(e, t) {
        return e ? (e = this.fieldValueCondition(e, t),
        this.calculateFieldValueFromBit(e, t)) : 0
    }
    ,
    gr.prototype.calculateFieldValueFromBit = function(e, t) {
        t = t ? e ? 1 : 0 : e ? 2 : 1;
        return t
    }
    ,
    gr.prototype.isNotApplicable = function(e) {
        return !e.some(function(e) {
            return Boolean(e)
        })
    }
    ,
    gr.prototype.fieldValueCondition = function(e, t) {
        return t ? Boolean(e) : pr.isCategoryActive(e)
    }
    ;
    var c = gr;
    function gr() {}
    I(vr, Cr = c),
    vr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Zn, er, tr, or, !0)
    }
    ;
    var Cr, yr, fr, kr, mr = vr;
    function vr() {
        return null !== Cr && Cr.apply(this, arguments) || this
    }
    (T = yr = yr || {}).SaleOptOut = "SaleOptOutCID",
    T.KnownChildSensitiveDataConsents = "KnownChildSellPICID",
    T.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID",
    (T = fr = fr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID",
    T.SaleOptOutNotice = "SaleOptOutCID",
    T.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID",
    (T = kr = kr || {}).SensitiveDataProcessing1 = "RaceCID",
    T.SensitiveDataProcessing2 = "ReligionCID",
    T.SensitiveDataProcessing3 = "HealthCID",
    T.SensitiveDataProcessing4 = "SexualOrientationCID",
    T.SensitiveDataProcessing5 = "ImmigrationCID",
    T.SensitiveDataProcessing6 = "GeneticCID",
    T.SensitiveDataProcessing7 = "BiometricCID",
    T.SensitiveDataProcessing8 = "GeolocationCID";
    I(Lr, br = c),
    Lr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(yr, fr, null, kr, !1)
    }
    ;
    var br, Sr, Pr, Tr, Ar, Ir = Lr;
    function Lr() {
        return null !== br && br.apply(this, arguments) || this
    }
    (T = Sr = Sr || {}).SaleOptOut = "SaleOptOutCID",
    T.SharingOptOut = "SharingOptOutCID",
    T.PersonalDataConsents = "PersonalDataCID",
    T.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID",
    (T = Pr = Pr || {}).SharingNotice = "SharingOptOutCID",
    T.SaleOptOutNotice = "SaleOptOutCID",
    T.SharingOptOutNotice = "SharingOptOutCID",
    T.SensitiveDataProcessingOptOutNotice = "SensitivePICID",
    T.SensitiveDataLimitUseNotice = "SensitivePICID",
    T.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID",
    (T = Tr = Tr || {}).KnownChildSensitiveDataConsents1 = "PDCAboveAgeCID",
    T.KnownChildSensitiveDataConsents2 = "PDCBelowAgeCID",
    (T = Ar = Ar || {}).SensitiveDataProcessing1 = "RaceCID",
    T.SensitiveDataProcessing2 = "ReligionCID",
    T.SensitiveDataProcessing3 = "HealthCID",
    T.SensitiveDataProcessing4 = "SexualOrientationCID",
    T.SensitiveDataProcessing5 = "ImmigrationCID",
    T.SensitiveDataProcessing6 = "GeneticCID",
    T.SensitiveDataProcessing7 = "BiometricCID",
    T.SensitiveDataProcessing8 = "GeolocationCID",
    T.SensitiveDataProcessing9 = "SensitivePICID",
    T.SensitiveDataProcessing10 = "SensitiveSICID",
    T.SensitiveDataProcessing11 = "UnionMembershipCID",
    T.SensitiveDataProcessing12 = "CommunicationCID";
    I(Br, _r = c),
    Br.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Sr, Pr, Tr, Ar, !0)
    }
    ;
    var _r, Er, Vr, Or, wr = Br;
    function Br() {
        return null !== _r && _r.apply(this, arguments) || this
    }
    (T = Er = Er || {}).SaleOptOut = "SaleOptOutCID",
    T.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID",
    T.KnownChildSensitiveDataConsents = "KnownChildSellPICID",
    (T = Vr = Vr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID",
    T.SaleOptOutNotice = "SaleOptOutCID",
    T.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID",
    (T = Or = Or || {}).SensitiveDataProcessing1 = "RaceCID",
    T.SensitiveDataProcessing2 = "ReligionCID",
    T.SensitiveDataProcessing3 = "HealthCID",
    T.SensitiveDataProcessing4 = "SexualOrientationCID",
    T.SensitiveDataProcessing5 = "ImmigrationCID",
    T.SensitiveDataProcessing6 = "GeneticCID",
    T.SensitiveDataProcessing7 = "BiometricCID";
    I(Rr, Gr = c),
    Rr.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Er, Vr, null, Or, !0)
    }
    ;
    var Gr, xr, Nr, Dr, Hr, Fr = Rr;
    function Rr() {
        return null !== Gr && Gr.apply(this, arguments) || this
    }
    (T = xr = xr || {}).SaleOptOut = "SaleOptOutCID",
    T.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID",
    (T = Nr = Nr || {}).SharingNotice = "SaleOptOutCID || TargetedAdvertisingOptOutCID",
    T.SaleOptOutNotice = "SaleOptOutCID",
    T.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID",
    (T = Dr = Dr || {}).KnownChildSensitiveDataConsents1 = "KnownChildProcessCID",
    T.KnownChildSensitiveDataConsents2 = "KnownChildSellPICID",
    T.KnownChildSensitiveDataConsents3 = "KnownChildSharePICID",
    (T = Hr = Hr || {}).SensitiveDataProcessing1 = "RaceCID",
    T.SensitiveDataProcessing2 = "ReligionCID",
    T.SensitiveDataProcessing3 = "HealthCID",
    T.SensitiveDataProcessing4 = "SexualOrientationCID",
    T.SensitiveDataProcessing5 = "ImmigrationCID",
    T.SensitiveDataProcessing6 = "GeneticCID",
    T.SensitiveDataProcessing7 = "BiometricCID",
    T.SensitiveDataProcessing8 = "GeolocationCID";
    I(Ur, qr = c),
    Ur.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(xr, Nr, Dr, Hr, !0)
    }
    ;
    var qr, Mr = Ur;
    function Ur() {
        return null !== qr && qr.apply(this, arguments) || this
    }
    Kr.prototype.initGppConsent = function() {
        this.initTemplateAndSectionInstance(),
        this.cmpApi.setApplicableSections(this.getApplicableSections(this.gppTemplateApplied));
        var e = this.readGppCookies()
          , t = this.getCurrentSectionName(this.gppTemplateApplied)
          , o = !1;
        e && (R.needReconsent() ? this.deleteAllGppCookies() : (this.cmpApi.setGppString(e),
        o = !0)),
        this.cmpApi.setCmpStatus(null == (e = this.gppSDKRef) ? void 0 : e.cmpStatus.LOADED),
        (t && !this.cmpApi.hasSection(t) || G.gpcBrowserValueChanged || N.grpsSynced && 0 < N.grpsSynced.length) && this.setOrUpdateGppSectionString(t, o),
        window.OneTrust.OnConsentChanged(this.updateGppConsentString)
    }
    ,
    Kr.prototype.initTemplateAndSectionInstance = function() {
        this.gppTemplateApplied = this.getGppTemplateApplied(),
        this.gppSection = this.getSectionInstance(this.gppTemplateApplied)
    }
    ,
    Kr.prototype.setCmpDisplayStatus = function(e) {
        var t;
        "visible" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.VISIBLE) : "hidden" === e ? this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.HIDDEN) : "disabled" === e && this.cmpApi.setCmpDisplayStatus(null == (t = this.gppSDKRef) ? void 0 : t.displayStatus.DISABLED)
    }
    ,
    Kr.prototype.setGppCookies = function(e, t) {
        t ? this.updateGppCookies(e) : (t = this.getCookiesChunk(e),
        e = Object.keys(t).length,
        this.writeGppCookies(e, t))
    }
    ,
    Kr.prototype.readGppCookies = function() {
        var e = Number(v.readCookieParam(m.OPTANON_CONSENT, Ee.ChunkCountParam) || 0);
        if (e <= 1)
            return 0 === e ? "" : v.getCookie(m.GPP_CONSENT);
        for (var t = "", o = 1; o <= e; o++)
            var n = v.getCookie("" + Ee.Name + o)
              , t = t.concat(n);
        return t
    }
    ,
    Kr.prototype.deleteGppCookies = function(e, t) {
        if (0 < e && (1 === e && (v.setCookie("" + Ee.Name, "", 0, !0),
        e++),
        e <= t))
            for (var o = e; o <= t; o++)
                v.setCookie("" + Ee.Name + o, "", 0, !0)
    }
    ,
    Kr.prototype.getSectionInstance = function(e) {
        var t;
        switch (e) {
        case _e.CPRA:
        case _e.CCPA:
            t = new mr;
            break;
        case _e.CDPA:
            t = new Ir;
            break;
        case _e.USNATIONAL:
            t = new wr;
            break;
        case _e.COLORADO:
            t = new Fr;
            break;
        case _e.CONNECTICUT:
            t = new Mr
        }
        return t
    }
    ,
    Kr.prototype.getGppTemplateApplied = function() {
        var e = G.getRegionRule();
        return x.UseGPPUSNational ? _e.USNATIONAL : e.Type
    }
    ,
    Kr.prototype.initGppSDK = function() {
        var e, t = Number.parseInt((null == (t = O.moduleInitializer.GppData) ? void 0 : t.cmpId) || "28");
        return null == (e = this.gppSDKRef) ? void 0 : e.gppCmpApi(t, 1)
    }
    ,
    Kr.prototype.setOrUpdateGppSectionString = function(o, e) {
        var n = this
          , t = this.gppSection.getSectionFieldsValues();
        Object.entries(t).forEach(function(e) {
            var t = e[0]
              , e = e[1];
            n.cmpApi.setFieldValue(o, t, e)
        }),
        this.cmpApi.fireSectionChange(o),
        this.setGppCookies(this.cmpApi.getGppString(), e)
    }
    ,
    Kr.prototype.getCurrentSectionName = function(o) {
        var e, t = "", n = Object.entries(Be).find(function(e) {
            var t = e[0];
            e[1];
            return t === o
        });
        return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
    }
    ,
    Kr.prototype.getCurrentSectionId = function(o) {
        var e, t = 0, n = Object.entries(Ge).find(function(e) {
            var t = e[0];
            e[1];
            return t === o
        });
        return t = null != (e = n) && e.length && 1 < n.length ? n[1] : t
    }
    ,
    Kr.prototype.updateGppCookies = function(e) {
        var e = this.getCookiesChunk(e)
          , t = Object.keys(e).length
          , o = Number(v.readCookieParam(m.OPTANON_CONSENT, Ee.ChunkCountParam) || 0);
        this.writeGppCookies(t, e),
        t < o && this.deleteGppCookies(t + 1, o)
    }
    ,
    Kr.prototype.deleteAllGppCookies = function() {
        var e = Number(v.readCookieParam(m.OPTANON_CONSENT, Ee.ChunkCountParam) || 0);
        this.deleteGppCookies(1, e)
    }
    ,
    Kr.prototype.getCookiesChunk = function(e) {
        for (var t = {}, o = !1, n = e, r = 1; n.length; ) {
            var i, s = void 0;
            n.length > Ee.ChunkSize ? s = Ee.ChunkSize : (s = n.length,
            o = 1 === r),
            o ? (t[Ee.Name] = n,
            n = "") : (i = n.slice(0, s),
            n = n.slice(s, n.length),
            t["" + Ee.Name + r] = i),
            r++
        }
        return t
    }
    ,
    Kr.prototype.writeGppCookies = function(e, t) {
        v.writeCookieParam(m.OPTANON_CONSENT, Ee.ChunkCountParam, e);
        for (var o = 0, n = Object.entries(t); o < n.length; o++) {
            var r = n[o]
              , i = r[0]
              , r = r[1];
            v.setCookie(i, r, x.ReconsentFrequencyDays)
        }
    }
    ,
    Kr.prototype.getSupportedAPIs = function() {
        return Object.values(Be).filter(function(e, t, o) {
            return o.indexOf(e) === t
        })
    }
    ,
    Kr.prototype.getApplicableSections = function(e) {
        return [this.getCurrentSectionId(e)]
    }
    ;
    var jr, zr = Kr;
    function Kr() {
        var e, t = this;
        this.gppSDKRef = null == (e = window.otIabModule) ? void 0 : e.gppSdkRef,
        this.cmpApi = this.initGppSDK(),
        this.updateGppConsentString = function() {
            t.cmpApi.getCmpDisplayStatus() === (null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.VISIBLE) && t.cmpApi.setCmpDisplayStatus(null == (e = t.gppSDKRef) ? void 0 : e.displayStatus.HIDDEN);
            var e = t.getCurrentSectionName(t.gppTemplateApplied);
            t.setOrUpdateGppSectionString(e, !0)
        }
    }
    Yr.prototype.showBanner = function() {
        var e = G.bannerName
          , t = D(this.El);
        N.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== lt && e !== at && e !== pt ? t.css("display: block;") : x.BAnimation === ve.SlideIn ? this.slideInAnimation(t, e) : x.BAnimation === ve.FadeIn && t.addClass("ot-fade-in")
    }
    ,
    Yr.prototype.insertAlertHtml = function() {
        x.IsGPPEnabled && jr.setCmpDisplayStatus("visible");
        function e(e) {
            return t.querySelector(e)
        }
        var t = document.createDocumentFragment()
          , o = document.createElement("div")
          , o = (D(o).html(f.bannerGroup.html),
        o.querySelector("#onetrust-banner-sdk"));
        this.setAriaModalForBanner(o),
        O.fp.CookieV2SSR ? (D(t).append(o),
        this._rejectBtn = e("#onetrust-reject-all-handler"),
        this._acceptBtn = e("#onetrust-accept-btn-handler")) : this.insertHtmlForNonSSRFlow(o, t, e, function(e) {
            return t.querySelectorAll(e)
        }),
        this.ssrAndNonSSRCommonHtml(t)
    }
    ,
    Yr.prototype.insertHtmlForNonSSRFlow = function(e, t, o, n) {
        var r, i, s = G.bannerName;
        f.bannerGroup && (x.BannerRelativeFontSizesToggle && D(e).addClass("otRelFont"),
        (x.BInitialFocus || x.BInitialFocusLinkAndButton) && (e.setAttribute("tabindex", "0"),
        e.setAttribute("role", "main")),
        x.useRTL && D(e).attr("dir", "rtl"),
        "IAB2" === G.iabType && x.BannerDPDDescription.length && D(e).addClass("ot-iab-2"),
        (r = x.BannerPosition) && ("bottom-left" === r ? D(e).addClass("ot-bottom-left") : "bottom-right" === r ? D(e).addClass("ot-bottom-right") : D(e).addClass(r)),
        D(t).append(e),
        this.setBannerData(o),
        r = this.setIAB2HtmlData(o),
        this.setAcceptAndRejectBtnHtml(o),
        t = this.htmlForBannerButtons(e, o, n),
        n = x.showBannerCloseButton,
        i = x.BCloseButtonType === be.Link,
        this.setWidthForFlatBanner(o, r, t),
        n && s === ct && "IAB2" === G.iabType && !i && ((t = o(".banner-close-btn-container")).parentElement.removeChild(t),
        D(e).el.insertAdjacentElement("beforeEnd", t),
        D(o("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")),
        this.setBannerOptions(o, r),
        this.setBannerLogo(e, o))
    }
    ,
    Yr.prototype.setBannerOptions = function(e, t) {
        var o = this
          , n = G.bannerName
          , r = this.isCmpEnabled()
          , i = [{
            type: "purpose",
            titleKey: "BannerPurposeTitle",
            descriptionKey: "BannerPurposeDescription",
            identifier: "purpose-option"
        }, {
            type: "feature",
            titleKey: "BannerFeatureTitle",
            descriptionKey: "BannerFeatureDescription",
            identifier: "feature-option"
        }, {
            type: "information",
            titleKey: "BannerInformationTitle",
            descriptionKey: "BannerInformationDescription",
            identifier: "information-option"
        }]
          , s = D(e(this._bannerOptionsSelector)).el;
        r ? (n === dt ? this.setFloatingRoundedIconBannerCmpOptions(e, i) : (this.setCmpBannerOptions(e, i),
        n === ut && t.el.insertAdjacentElement("beforeend", s)),
        D(window).on("resize", function() {
            window.innerWidth <= 896 && o.setBannerOptionContent()
        })) : (G.bannerName === ct && (s = D(e(".banner-options-card")).el),
        B.removeChild(s))
    }
    ,
    Yr.prototype.setWidthForFlatBanner = function(e, t, o) {
        var n = G.bannerName
          , r = x.showBannerCloseButton
          , i = this.hasNoActionButtons();
        n === at && ("IAB2" === G.iabType && (t.removeClass("ot-sdk-eight"),
        x.showBannerAcceptButton && o.insertAdjacentElement("afterbegin", this._acceptBtn),
        x.showBannerCookieSettings) && o.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler")),
        r && !i && "IAB2" === G.iabType ? t.addClass("ot-sdk-nine") : r && i ? t.addClass("ot-sdk-eleven") : !r && i ? t.addClass("ot-sdk-twelve") : r || i || "IAB2" !== G.iabType || (t.addClass("ot-sdk-ten"),
        D(e(this._btnGrpParentSelector)).addClass("ot-sdk-two"),
        D(e(this._btnGrpParentSelector)).removeClass("ot-sdk-three")))
    }
    ,
    Yr.prototype.hasNoActionButtons = function() {
        return !x.showBannerAcceptButton && !x.showBannerCookieSettings && !x.BannerShowRejectAllButton
    }
    ,
    Yr.prototype.htmlForBannerButtons = function(e, t, o) {
        var n = G.bannerName
          , r = (this.hasNoActionButtons() && t(this._btnGrpParentSelector).parentElement.removeChild(t(this._btnGrpParentSelector)),
        x.showBannerCloseButton)
          , i = D(o(".banner-close-button")).el
          , s = t("#onetrust-button-group")
          , a = x.BCloseButtonType === be.Link;
        if (r)
            for (l = 0; l < i.length; l++)
                a ? (D(i[l]).html(x.BContinueText),
                D(e).addClass("ot-close-btn-link"),
                D(i[l]).addClass("ot-close-link"),
                D(i[l]).removeClass("onetrust-close-btn-ui"),
                D(i[l]).removeClass("ot-close-icon"),
                n !== ct && n !== dt || (s.insertAdjacentElement("afterbegin", t(".onetrust-close-btn-handler").parentElement),
                D(i[l]).attr("tabindex", "1"))) : (y.setCloseIcon(t("#onetrust-banner-sdk .ot-close-icon")),
                D(i[l]).el.setAttribute(At, x.BannerCloseButtonText || "Close Cookie Banner"));
        else {
            for (var l = 0; l < i.length; l++)
                D(i[l].parentElement).el.removeChild(i[l]);
            n !== at && n !== dt || B.removeChild(t("#onetrust-close-btn-container-mobile"))
        }
        return s
    }
    ,
    Yr.prototype.setAcceptAndRejectBtnHtml = function(e) {
        var t = G.bannerName
          , e = (x.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"),
        D(this._acceptBtn).html(x.AlertAllowCookiesText),
        t !== pt || x.showBannerCookieSettings || x.BannerShowRejectAllButton || D(this._acceptBtn.parentElement).addClass("accept-btn-only")) : B.removeChild(e("#onetrust-accept-btn-handler")),
        x.BannerShowRejectAllButton && x.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"),
        D(this._rejectBtn).html(x.BannerRejectAllButtonText),
        e(this._btnGrpParentSelector).classList.add("has-reject-all-button")) : (B.removeChild(e("#onetrust-reject-all-handler")),
        B.removeChild(e("#onetrust-reject-btn-container"))),
        D(e("#onetrust-pc-btn-handler")));
        x.showBannerCookieSettings ? (e.html(x.AlertMoreInfoText),
        x.BannerSettingsButtonDisplayLink && e.addClass("cookie-setting-link"),
        t !== pt || x.showBannerAcceptButton || e.addClass("cookie-settings-btn-only")) : B.removeChild(e.el)
    }
    ,
    Yr.prototype.setIAB2HtmlData = function(e) {
        var t = G.bannerName
          , o = ("IAB2" === x.IabType && x.BannerDPDDescription.length && t !== ut ? (D(e(".ot-dpd-container .ot-dpd-title")).html(x.BannerDPDTitle),
        D(e(".ot-dpd-container .ot-dpd-desc")).html(x.BannerDPDDescription.join(",&nbsp;"))) : B.removeChild(e(".ot-dpd-container")),
        D(e(this._otGrpContainerSelector)))
          , t = ("IAB2" === G.iabType && x.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e),
        "IAB2" === x.IabType && x.BannerDPDDescription.length ? t !== ut ? D(e(".ot-dpd-container .ot-dpd-desc")) : o : D(e("#onetrust-policy-text")));
        return x.IsIabEnabled && x.BannerIABPartnersLink && t.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n        ' + x.BannerIABPartnersLink + "\n        </button>"),
        o
    }
    ,
    Yr.prototype.setBannerData = function(e) {
        var t;
        x.BannerTitle ? (D(e("#onetrust-policy-title")).html(x.BannerTitle),
        D(e('[role="alertdialog"]')).attr(At, x.BannerTitle)) : (B.removeChild(e("#onetrust-policy-title")),
        D(e("#onetrust-banner-sdk")).addClass("ot-wo-title"),
        D(e('[role="alertdialog"]')).attr(At, x.AriaPrivacy)),
        !x.IsIabEnabled && N.showGeneralVendors && x.BannerNonIABVendorListText && ((t = document.createElement("div")).setAttribute("id", "ot-gv-link-ctnr"),
        D(t).html('<button class="ot-link-btn ot-gv-list-handler">' + x.BannerNonIABVendorListText + "</button>"),
        D(e("#onetrust-policy")).el.appendChild(t)),
        D(e("#onetrust-policy-text")).html(x.AlertNoticeText),
        x.BShowPolicyLink && x.BShowImprintLink && D(e(this.cookiePolicyLinkSelector)).length ? (D(e("#onetrust-policy-text a:first-child")).attr(At, x.BCookiePolicyLinkScreenReader),
        D(e("#onetrust-policy-text a:last-child")).attr(At, x.BImprintLinkScreenReader)) : x.BShowPolicyLink && D(e(this.cookiePolicyLinkSelector)).length ? D(e(this.cookiePolicyLinkSelector)).attr(At, x.BCookiePolicyLinkScreenReader) : x.BShowImprintLink && D(e(this.cookiePolicyLinkSelector)).length && D(e(this.cookiePolicyLinkSelector)).attr(At, x.BImprintLinkScreenReader)
    }
    ,
    Yr.prototype.isCmpEnabled = function() {
        return x.BannerPurposeTitle || x.BannerPurposeDescription || x.BannerFeatureTitle || x.BannerFeatureDescription || x.BannerInformationTitle || x.BannerInformationDescription
    }
    ,
    Yr.prototype.ssrAndNonSSRCommonHtml = function(t) {
        function e(e) {
            return t.querySelector(e)
        }
        var o = this
          , n = this.isCmpEnabled()
          , r = (this.setOptOutSignalNotification(e),
        x.BRegionAriaLabel && (D(e("#onetrust-banner-sdk")).attr("role", "region"),
        D(e("#onetrust-banner-sdk")).attr(At, x.BRegionAriaLabel)),
        G.bannerName === ut && O.moduleInitializer.IsSuppressPC && (N.dataGroupState = x.Groups.filter(function(e) {
            return e.Order
        })),
        G.bannerName === ut && (this._fourBtns = x.BannerShowRejectAllButton && x.showBannerAcceptButton && x.showBannerCookieSettings && x.BShowSaveBtn,
        this._saveBtn = e(".ot-bnr-save-handler"),
        this._settingsBtn = e("#onetrust-pc-btn-handler"),
        this._btnsCntr = e(".banner-actions-container"),
        x.BShowSaveBtn ? D(this._saveBtn).html(x.BSaveBtnTxt) : (B.removeChild(this._saveBtn),
        this._saveBtn = null),
        y.insertFooterLogo(t.querySelectorAll(".ot-bnr-footer-logo a")),
        this._descriptCntr = e(".ot-cat-lst"),
        this.setBannerBtn(),
        window.addEventListener("resize", function() {
            o.setBannerBtn()
        }),
        this._fourBtns && D(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"),
        this.insertGrps(e)),
        document.createElement("div"));
        D(r).append(t),
        G.ignoreInjectingHtmlCss || (D("#onetrust-consent-sdk").append(r.firstChild),
        n && this.setBannerOptionContent()),
        this.setBnrBtnGrpAlignment()
    }
    ,
    Yr.prototype.setAriaModalForBanner = function(e) {
        x.ForceConsent && e.querySelector('[role="alertdialog"]').setAttribute("aria-modal", "true")
    }
    ,
    Yr.prototype.setBnrBtnGrpAlignment = function() {
        var e = D(this._otGrpContainerSelector).el
          , t = D(this._btnGrpParentSelector).el
          , e = ((e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? D("#onetrust-banner-sdk").removeClass("vertical-align-content") : D("#onetrust-banner-sdk").addClass("vertical-align-content"),
        document.querySelector("#onetrust-button-group-parent button:first-of-type"))
          , t = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        t && e && 1 < Math.abs(t.offsetTop - e.offsetTop) && D("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }
    ,
    Yr.prototype.slideInAnimation = function(e, t) {
        t === at ? "bottom" === x.BannerPosition ? (e.css("bottom: -99px;"),
        e.animate({
            bottom: "0px"
        }, 1e3),
        N.bnrAnimationInProg = !0,
        setTimeout(function() {
            e.css("bottom: 0px;"),
            N.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"),
        G.pagePushedDown && !_n.checkIsBrowserIE11OrBelow() ? _n.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3),
        N.bnrAnimationInProg = !0,
        setTimeout(function() {
            e.css("top: 0px; bottom: auto;"),
            N.bnrAnimationInProg = !1
        }, 1e3))) : t !== lt && t !== pt || (e.css("bottom: -300px;"),
        e.animate({
            bottom: "1em"
        }, 2e3),
        N.bnrAnimationInProg = !0,
        setTimeout(function() {
            e.css("bottom: 1rem;"),
            N.bnrAnimationInProg = !1
        }, 2e3))
    }
    ,
    Yr.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (B.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"),
        B.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"),
        B.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"),
        B.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn),
        this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn),
        this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (B.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"),
        B.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"),
        B.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"),
        B.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }
    ,
    Yr.prototype.setCmpBannerOptions = function(n, e) {
        var r = D(n("#banner-options .banner-option")).el.cloneNode(!0)
          , i = (D(n(this._bannerOptionsSelector)).html(""),
        1);
        e.forEach(function(e) {
            var t = r.cloneNode(!0)
              , o = x[e.titleKey]
              , e = x[e.descriptionKey];
            (o || e) && (t.querySelector(".banner-option-header :first-child").innerHTML = o,
            o = t.querySelector(".banner-option-details"),
            e ? (o.setAttribute("id", "option-details-" + i++),
            o.innerHTML = e) : o.parentElement.removeChild(o),
            D(n("#banner-options")).el.appendChild(t))
        })
    }
    ,
    Yr.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
        var i = this
          , s = D(r("#banner-options button")).el.cloneNode(!0)
          , n = D(r(".banner-option-details")).el.cloneNode(!0);
        D(r(this._bannerOptionsSelector)).html(""),
        e.forEach(function(e) {
            var t = s.cloneNode(!0)
              , o = x[e.titleKey]
              , n = x[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier),
            t.querySelector(".banner-option-header :first-child").innerHTML = o,
            D(r(i._bannerOptionsSelector)).el.appendChild(t))
        }),
        e.forEach(function(e) {
            var t, o = x[e.descriptionKey];
            o && ((t = n.cloneNode(!0)).innerHTML = o,
            t.classList.add(e.identifier),
            D(r(i._bannerOptionsSelector)).el.appendChild(t))
        })
    }
    ,
    Yr.prototype.setBannerOptionContent = function() {
        var t = this;
        G.bannerName !== at && G.bannerName !== dt || setTimeout(function() {
            var e;
            (window.innerWidth < 769 ? (e = D(t._bannerOptionsSelector).el[0],
            D(t._otGrpContainerSelector)) : (e = D(t._bannerOptionsSelector).el[0],
            G.bannerName === dt ? D(".banner-content") : D("#onetrust-banner-sdk .ot-sdk-container"))).el[0].appendChild(e)
        })
    }
    ,
    Yr.prototype.setAdditionalDesc = function(e) {
        var t = x.BannerAdditionalDescPlacement
          , o = document.createElement("span")
          , n = (o.classList.add("ot-b-addl-desc"),
        o.innerHTML = x.BannerAdditionalDescription,
        e("#onetrust-policy-text"));
        t === ae.AfterTitle ? n.insertAdjacentElement("beforeBegin", o) : t === ae.AfterDescription ? n.insertAdjacentElement("afterEnd", o) : t === ae.AfterDPD && (n = e(".ot-dpd-container .ot-dpd-desc"),
        (n = x.ChoicesBanner ? e(this._otGrpContainerSelector) : n).insertAdjacentElement("beforeEnd", o))
    }
    ,
    Yr.prototype.insertGrps = function(e) {
        var c = e(".ot-cat-item").cloneNode(!0)
          , d = (B.removeChild(e(".ot-cat-item")),
        x.BCategoryStyle === me.Checkbox ? B.removeChild(c.querySelector(".ot-tgl")) : (B.removeChild(c.querySelector(".ot-chkbox")),
        D(c).addClass("ot-cat-bdr")),
        e(".ot-cat-lst ul"));
        x.Groups.forEach(function(e) {
            var t = c.cloneNode(!0)
              , o = t.querySelector(".ot-tgl,.ot-chkbox")
              , n = e.GroupName
              , r = e.CustomGroupId
              , i = "ot-bnr-grp-id-" + r
              , s = "ot-bnr-hdr-id-" + r
              , a = -1 !== Dt.indexOf(e.Type)
              , l = C.getGrpStatus(e).toLowerCase() === Ye || a
              , a = k.isGroupActive(e) || a
              , e = (D(o.querySelector("label")).attr("for", i),
            D(o.querySelector(".ot-label-txt")).html(e.GroupName),
            o.querySelector("input"))
              , l = (l && (x.BCategoryStyle === me.Toggle ? (B.removeChild(o),
            t.insertAdjacentElement("beforeend", D("<div class='ot-always-active'>" + x.AlwaysActiveText + "</div>", "ce").el)) : D(e).attr("disabled", !0)),
            e.classList.add("category-switch-handler"),
            k.setInputID(e, i, r, a, s),
            t.querySelector("h4"));
            D(l).html(n),
            D(l).attr("id", s),
            D(d).append(t)
        })
    }
    ,
    Yr.prototype.setBannerLogo = function(e, t) {
        var o, n;
        O.fp.CookieV2BannerLogo && x.BnrLogo && (o = t(bn),
        n = "afterend",
        G.bannerName === dt && (o = t("#onetrust-cookie-btn"),
        n = "beforeend"),
        t = y.updateCorrectUrl(x.BnrLogo),
        D(e).addClass("ot-bnr-w-logo"),
        D(o).el.innerHTML = "",
        o.insertAdjacentHTML(n, "<img class='ot-bnr-logo' src='" + t + "'\n            title='" + x.BnrLogoAria + "'\n            alt='" + x.BnrLogoAria + "'/>"))
    }
    ,
    Yr.prototype.setOptOutSignalNotification = function(e) {
        var t = !0 === navigator.globalPrivacyControl && G.gpcForAGrpEnabled;
        x.BShowOptOutSignal && (t || G.previewMode) && y.createOptOutSignalElement(e, !1)
    }
    ;
    var Wr, Jr = Yr;
    function Yr() {
        this.El = "#onetrust-banner-sdk",
        this._saveBtn = null,
        this._settingsBtn = null,
        this._acceptBtn = null,
        this._rejectBtn = null,
        this._descriptCntr = null,
        this._btnsCntr = null,
        this._fourBtns = !1,
        this._bannerOptionsSelector = "#banner-options",
        this._btnGrpParentSelector = "#onetrust-button-group-parent",
        this._otGrpContainerSelector = "#onetrust-group-container",
        this.cookiePolicyLinkSelector = "#onetrust-policy-text a"
    }
    Qr.prototype.setHeaderConfig = function() {
        p.setHeader(),
        p.setSearchInput(),
        p.setHeaderUIConsent();
        var e = p.getGroupsForFilter();
        Yn.setFilterListByGroup(e, !1)
    }
    ,
    Qr.prototype.filterVendorByString = function(e) {
        p.searchQuery = e,
        p.filterVendorByGroupOrQuery()
    }
    ,
    Qr.prototype.filterVendorByGroup = function(e) {
        p.filterGroups = e,
        p.filterVendorByGroupOrQuery()
    }
    ,
    Qr.prototype.showVSList = function() {
        p.removeListeners(),
        p.showEmptyResults(!1, ""),
        p.clearUIElementsInMain(),
        p.addVSList(N.getVendorsInDomain())
    }
    ,
    Qr.prototype.showEmptyResults = function(e, t) {
        e ? this.setNoResultsContent(t) : (D("#onetrust-pc-sdk " + H.P_Vendor_Content).removeClass("no-results"),
        (e = D("#onetrust-pc-sdk #no-results")).length && e.remove())
    }
    ,
    Qr.prototype.setNoResultsContent = function(e) {
        var t, o, n, r, i = D("#onetrust-pc-sdk #no-results").el[0];
        if (!i)
            return t = document.createElement("div"),
            o = document.createElement("p"),
            n = document.createTextNode(" " + x.PCVendorNotFound + "."),
            r = document.createElement("span"),
            t.id = "no-results",
            r.id = "user-text",
            r.innerText = e,
            o.appendChild(r),
            o.appendChild(n),
            t.appendChild(o),
            D("#onetrust-pc-sdk " + H.P_Vendor_Content).addClass("no-results"),
            D("#vendor-search-handler").el[0].setAttribute("aria-describedby", t.id),
            D("#onetrust-pc-sdk " + H.P_Vendor_Content).append(t);
        i.querySelector("span").innerText = e
    }
    ,
    Qr.prototype.getGroupsFilter = function() {
        for (var e = [], t = 0, o = D("#onetrust-pc-sdk .category-filter-handler").el; t < o.length; t++) {
            var n = o[t]
              , r = n.getAttribute("data-purposeid");
            n.checked && e.push(r)
        }
        return e
    }
    ,
    Qr.prototype.cancelFilter = function() {
        for (var e = 0, t = D("#onetrust-pc-sdk .category-filter-handler").el; e < t.length; e++) {
            var o = t[e]
              , n = o.getAttribute("data-optanongroupid")
              , n = 0 <= N.filterByCategories.indexOf(n);
            B.setCheckedAttribute(null, o, n)
        }
        var r = p.getGroupsFilter();
        p.filterVendorByGroup(r)
    }
    ,
    Qr.prototype.clearFilter = function() {
        p.searchQuery = "",
        p.filterGroups = []
    }
    ,
    Qr.prototype.toggleVendors = function(r) {
        N.getVendorsInDomain().forEach(function(e, t) {
            var o, n;
            C.isAlwaysActiveGroup(e.groupRef) || (o = document.getElementById("ot-vendor-id-" + t),
            n = document.getElementById("ot-vs-lst-id-" + t),
            b.toggleVendorService(e.groupRef.CustomGroupId, t, r, o),
            b.toggleVendorService(e.groupRef.CustomGroupId, t, r, n))
        })
    }
    ,
    Qr.prototype.hideVendorList = function() {
        p.removeListeners(),
        p.clearUIElementsInMain()
    }
    ,
    Qr.prototype.addListeners = function() {
        D("#onetrust-pc-sdk " + H.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", p.toggleVendorHandler),
        D("#onetrust-pc-sdk").on("click", ".ot-vs-list", u.onCategoryItemToggle.bind(this))
    }
    ,
    Qr.prototype.removeListeners = function() {
        var e;
        document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function(e) {
            return e.removeEventListener("click", u.toggleGroupORVendorHandler)
        }),
        null != (e = document.querySelector("#onetrust-pc-sdk .ot-vs-list")) && e.removeEventListener("click", u.onCategoryItemToggle)
    }
    ,
    Qr.prototype.toggleVendorHandler = function(e) {
        u.toggleVendorFromListHandler(e),
        p.checkAllowAllCheckedValue()
    }
    ,
    Qr.prototype.filterVendorByGroupOrQuery = function() {
        var o = new Map;
        N.getVendorsInDomain().forEach(function(e, t) {
            p.checkVendorConditions(e) && o.set(t, e)
        }),
        p.showEmptyResults(o.size <= 0, p.searchQuery),
        p.removeListeners(),
        p.clearUIElementsInMain(),
        p.addVSList(o)
    }
    ,
    Qr.prototype.checkVendorConditions = function(e) {
        return !("" !== p.searchQuery && e.ServiceName.toLowerCase().indexOf(p.searchQuery.toLowerCase()) < 0 || 0 < p.filterGroups.length && p.filterGroups.indexOf(e.groupRef.CustomGroupId) < 0)
    }
    ,
    Qr.prototype.addVSList = function(e) {
        var t = D("#onetrust-pc-sdk " + H.P_Vendor_Content + " .ot-sdk-column")
          , e = b.getVendorListEle(e);
        t.append(e),
        p.addListeners()
    }
    ,
    Qr.prototype.getGroupsForFilter = function() {
        var t = new Map;
        return N.getVendorsInDomain().forEach(function(e) {
            t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
        }),
        Array.from(t.values())
    }
    ,
    Qr.prototype.clearUIElementsInMain = function() {
        D("#onetrust-pc-sdk " + H.P_Vendor_Content + " ul" + H.P_Host_Cntr).html(""),
        D("#onetrust-pc-sdk " + H.P_Vendor_Content + " ul" + H.P_Host_Cntr).hide(),
        D("#onetrust-pc-sdk " + H.P_Vendor_Content + " ul" + H.P_Vendor_Container).html(""),
        D("#onetrust-pc-sdk " + H.P_Vendor_Content + " ul" + H.P_Vendor_Container).hide();
        var e = D("#onetrust-pc-sdk " + H.P_Vendor_Content + " .ot-vs-list");
        e && e.length && e.remove()
    }
    ,
    Qr.prototype.setHeader = function() {
        var e = x.VendorServiceConfig.PCVSListTitle
          , t = document.querySelector("#onetrust-pc-sdk " + H.P_Vendor_Title);
        t && (t.innerText = e)
    }
    ,
    Qr.prototype.setSearchInput = function() {
        var e = x.PCenterCookieListSearch
          , t = x.PCenterCookieSearchAriaLabel
          , o = D("#onetrust-pc-sdk " + H.P_Vendor_Search_Input);
        o.el[0].placeholder = e,
        o.attr("aria-label", t)
    }
    ,
    Qr.prototype.setHeaderUIConsent = function() {
        var e, t, o;
        D("#onetrust-pc-sdk " + H.P_Select_Cntr).addClass("ot-vnd-list-cnt"),
        D("#onetrust-pc-sdk " + H.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"),
        x.PCCategoryStyle === me.Toggle && (D("#onetrust-pc-sdk " + H.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"),
        x.PCAccordionStyle === le.Caret) && D("#onetrust-pc-sdk " + H.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf"),
        D("#onetrust-pc-sdk " + H.P_Leg_Select_All).hide(),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Host_El).hide(),
        D("#onetrust-pc-sdk " + H.P_Host_Cntr).hide(),
        D(H.P_Vendor_List + " #select-all-text-container").hide(),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Leg_El).hide(),
        D("#onetrust-pc-sdk " + H.P_Vendor_Container).show(),
        D("#onetrust-pc-sdk " + H.P_Select_Cntr).show(),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Consent_El).show("inline-block"),
        D("#onetrust-pc-sdk " + H.P_Vendor_List).removeClass(H.P_Host_UI),
        D("#onetrust-pc-sdk " + H.P_Vendor_Content).removeClass(H.P_Host_Cnt),
        document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr") || ((e = document.createElement("h4")).className = "sel-all-hdr",
        e.textContent = (null == (t = x.VendorServiceConfig) ? void 0 : t.PCVSAllowAllText) || "PCVSAllowAllText",
        t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
        o = x.PCCategoryStyle === me.Checkbox ? "beforeend" : "afterbegin",
        t.insertAdjacentElement(o, e)),
        p.checkAllowAllCheckedValue()
    }
    ,
    Qr.prototype.checkAllowAllCheckedValue = function() {
        var t = !0
          , e = (N.vsConsent.forEach(function(e) {
            e || (t = !1)
        }),
        document.getElementById("#select-all-vendor-groups-handler"));
        B.setCheckedAttribute(null, e, t)
    }
    ;
    var p, Xr = Qr;
    function Qr() {
        this.searchQuery = "",
        this.filterGroups = []
    }
    g.prototype.initCookieSettingHandlers = function() {
        D(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }
    ,
    g.prototype.initFlgtCkStgBtnEventHandlers = function() {
        D(".ot-floating-button__open").on("click", u.floatingCookieSettingOpenBtnClicked),
        D(".ot-floating-button__close").on("click", u.floatingCookieSettingCloseBtnClicked)
    }
    ,
    g.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        D(u.fltgBtnSltr).addClass("ot-pc-open"),
        x.cookiePersistentLogo.includes("ot_guard_logo.svg") && D(u.fltgBtnFSltr).attr(It, "true"),
        D(u.fltgBtnBSltr).attr(It, ""),
        D(u.fltgBtnFrontBtn).el[0].setAttribute(It, !0),
        D(u.fltgBtnBackBtn).el[0].setAttribute(At, x.AriaClosePreferences),
        D(u.fltgBtnBackBtn).el[0].setAttribute(It, !1),
        a.triggerGoogleAnalyticsEvent(Oo, Mo),
        u.showCookieSettingsHandler(e)
    }
    ,
    g.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        D(u.fltgBtnFrontBtn).el[0].setAttribute(At, x.AriaOpenPreferences),
        D(u.fltgBtnFrontBtn).el[0].setAttribute(It, !1),
        D(u.fltgBtnBackBtn).el[0].setAttribute(It, !0),
        e && (a.triggerGoogleAnalyticsEvent(Oo, Uo),
        u.hideCookieSettingsHandler(e))
    }
    ,
    g.prototype.initialiseLegIntBtnHandlers = function() {
        D(document).on("click", ".ot-obj-leg-btn-handler", u.onLegIntButtonClick),
        D(document).on("click", ".ot-remove-objection-handler", u.onLegIntButtonClick)
    }
    ,
    g.prototype.initialiseAddtlVenHandler = function() {
        D("#onetrust-pc-sdk #ot-addtl-venlst").on("click", u.selectVendorsGroupHandler),
        D("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", u.selAllAdtlVenHandler)
    }
    ,
    g.prototype.initializeGenVenHandlers = function() {
        D("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", u.genVendorToggled),
        D("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", u.genVendorDetails),
        D("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", u.selectAllGenVenHandler)
    }
    ,
    g.prototype.initialiseConsentNoticeHandlers = function() {
        var e = this
          , t = 37
          , o = 39;
        G.pcName === V && u.categoryMenuSwitchHandler(),
        D("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", u.bannerCloseButtonHandler),
        D("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", P.allowAllEventHandler.bind(this, !0)),
        D("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", P.rejectAllEventHandler.bind(this, !0)),
        D("#onetrust-pc-sdk #close-pc-btn-handler").on("click", u.hideCookieSettingsHandler),
        D(document).on("keydown", u.closePCWhenEscPressed),
        D("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", u.hideCookieSettingsHandler),
        D("#onetrust-pc-sdk .category-switch-handler").on("click", u.toggleGroupORVendorHandler),
        D("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", u.toggleSubCategory),
        D("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
            G.pcName !== V || e.keyCode !== t && e.keyCode !== o || (x.PCTemplateUpgrade ? u.changeSelectedTabV2(e) : u.changeSelectedTab(e))
        }),
        D("#onetrust-pc-sdk").on("click", H.P_Category_Item + " > input:first-child," + H.P_Category_Item + " > button:first-child", u.onCategoryItemToggle.bind(this)),
        (x.showCookieList || N.showGeneralVendors) && (D("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
            N.showGeneralVendors && x.showCookieList ? N.cookieListType = Ce.HostAndGenVen : N.showGeneralVendors ? N.cookieListType = Ce.GenVen : N.cookieListType = Ce.Host,
            u.pcLinkSource = e.target,
            u.loadCookieList(e.target)
        }),
        y.isOptOutEnabled() ? (D("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", u.selectAllHostsGroupsHandler),
        D("#onetrust-pc-sdk " + H.P_Host_Cntr).on("click", u.selectHostsGroupHandler)) : D("#onetrust-pc-sdk " + H.P_Host_Cntr).on("click", u.toggleAccordionStatus)),
        u.addListenerWhenIabEnabled(),
        u.addEventListenerWhenIsHostOrVendorsAreEnabled(),
        u.adddListenerWhenNoBanner(),
        D("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function(t) {
            return d(e, void 0, void 0, function() {
                return E(this, function(e) {
                    return N.cookieListType = Ce.GenVen,
                    u.loadCookieList(t.target),
                    [2]
                })
            })
        }),
        u.addListenerWhenVendorServices()
    }
    ,
    g.prototype.addEventListenerWhenIsHostOrVendorsAreEnabled = function() {
        var e;
        (x.IsIabEnabled || x.showCookieList || N.showGeneralVendors || N.showVendorService) && (D(document).on("click", ".back-btn-handler", u.backBtnHandler),
        u.addListenerSearchKeyEvent(),
        D("#onetrust-pc-sdk #filter-btn-handler").on("click", u.toggleVendorFiltersHandler),
        D("#onetrust-pc-sdk #filter-apply-handler").on("click", u.applyFilterHandler),
        D("#onetrust-pc-sdk " + H.P_Fltr_Modal).on("click", u.tglFltrOptionHandler),
        !O.isV2Template && G.pcName !== ft || D("#onetrust-pc-sdk #filter-cancel-handler").on("click", u.cancelFilterHandler),
        !O.isV2Template && G.pcName === ft || D("#onetrust-pc-sdk #clear-filters-handler").on("click", u.clearFiltersHandler),
        O.isV2Template ? D("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(),
            D("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
        }) : D("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(),
            D("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
        }),
        e = D("#onetrust-pc-sdk .category-filter-handler").el,
        D(e[0]).on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(),
            D("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
        }))
    }
    ,
    g.prototype.addListenerSearchKeyEvent = function() {
        D(u.VENDOR_SEARCH_SELECTOR).on("keyup", function(e) {
            e = e.target.value.trim();
            u.currentSearchInput !== e && (N.showVendorService ? p.filterVendorByString(e) : u.isCookieList ? (h.searchHostList(e),
            N.showTrackingTech && u.addEventAdditionalTechnologies()) : (h.loadVendorList(e, []),
            x.UseGoogleVendors && h.searchVendors(h.googleSearchSelectors, N.addtlVendorsList, ke.GoogleVendor, e),
            N.showGeneralVendors && x.GeneralVendors.length && h.searchVendors(h.genVendorSearchSelectors, x.GeneralVendors, ke.GeneralVendor, e)),
            h.playSearchStatus(u.isCookieList),
            u.currentSearchInput = e)
        })
    }
    ,
    g.prototype.addListenerWhenIabEnabled = function() {
        x.IsIabEnabled && (D("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
            u.pcLinkSource = e.target,
            u.showVendorsList(e.target)
        }),
        D("#onetrust-pc-sdk " + H.P_Vendor_Container).on("click", u.selectVendorsGroupHandler),
        x.UseGoogleVendors || u.bindSelAllHandlers(),
        u.initialiseLegIntBtnHandlers())
    }
    ,
    g.prototype.adddListenerWhenNoBanner = function() {
        x.NoBanner && (x.OnClickCloseBanner && document.body.addEventListener("click", P.bodyClickEvent),
        x.ScrollCloseBanner) && window.addEventListener("scroll", P.scrollCloseBanner)
    }
    ,
    g.prototype.addListenerWhenVendorServices = function() {
        N.showVendorService && (u.bindSelAllHandlers(),
        D("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function() {
            return u.showVendorsList(null, !0)
        }))
    }
    ,
    g.prototype.bindSelAllHandlers = function() {
        D("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", u.selectAllVendorsLegIntHandler),
        D("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", u.SelectAllVendorConsentHandler)
    }
    ,
    g.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event),
        a.triggerGoogleAnalyticsEvent(Oo, No),
        _n.removeAddedOTCssStyles(Ln.PC),
        Rn.hideConsentNoticeV2(),
        D(document).off("keydown", u.closePCWhenEscPressed),
        u.getResizeElement().removeEventListener("resize", u.setCenterLayoutFooterHeight),
        window.removeEventListener("resize", u.setCenterLayoutFooterHeight),
        !O.isV2Template && G.pcName !== ft || u.closeFilter(!1),
        G.pcName === Ct && D("#onetrust-pc-sdk " + H.P_Content).removeClass("ot-hide"),
        P.hideVendorsList(),
        f.csBtnGroup && (D(u.fltgBtnSltr).removeClass("ot-pc-open"),
        u.floatingCookieSettingCloseBtnClicked(null)),
        u.confirmPC(e),
        P.resetConsent(),
        !1
    }
    ,
    g.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked
          , e = D("#onetrust-pc-sdk #" + H.P_Sel_All_Host_El).el[0]
          , o = e.classList.contains("line-through")
          , n = D("#onetrust-pc-sdk .host-checkbox-handler").el;
        B.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var r = 0; r < n.length; r++)
            n[r].getAttribute("disabled") || B.setCheckedAttribute(null, n[r], t);
        N.optanonHostList.forEach(function(e) {
            bo.updateHostStatus(e, t)
        }),
        n.forEach(function(e) {
            ko.updateGenVendorStatus(e.getAttribute("hostId"), t)
        }),
        o && e.classList.remove("line-through")
    }
    ,
    g.prototype.selectHostsGroupHandler = function(e) {
        u.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId")
          , o = e.target.getAttribute("ckType")
          , n = e.target.checked;
        null !== t && (o === ge.GenVendor ? (o = x.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name,
        a.triggerGoogleAnalyticsEvent(Oo, n ? Ko : Wo, o + ": VEN_" + t),
        ko.updateGenVendorStatus(t, n)) : (o = B.findIndex(N.optanonHostList, function(e) {
            return e.HostId === t
        }),
        o = N.optanonHostList[o],
        u.toggleHostStatus(o, n)),
        B.setCheckedAttribute(null, e.target, n))
    }
    ,
    g.prototype.onCategoryItemToggle = function(e) {
        e.stopPropagation();
        var t = e.target;
        "BUTTON" !== t.tagName && "INPUT" !== t.tagName || (G.pcName === Ct && this.setPcListContainerHeight(),
        u.toggleAccordionStatus(e))
    }
    ,
    g.prototype.toggleAccordionStatus = function(e) {
        var t, e = e.target;
        e && e.getAttribute("aria-expanded") && (t = "true" === e.getAttribute("aria-expanded") ? "false" : "true",
        e.setAttribute("aria-expanded", t))
    }
    ,
    g.prototype.toggleHostStatus = function(e, t) {
        a.triggerGoogleAnalyticsEvent(Oo, t ? Jo : Yo, e.HostName + ": H_" + e.HostId),
        bo.updateHostStatus(e, t)
    }
    ,
    g.prototype.toggleBannerOptions = function(e) {
        D(".banner-option-input").each(function(e) {
            D(e).el.setAttribute("aria-expanded", !1)
        }),
        u.toggleAccordionStatus(e)
    }
    ,
    g.prototype.bannerCloseButtonHandler = function(e) {
        var t;
        return D(document).off("keydown", u.shiftBannerFocus),
        e && e.target && e.target.className && (-1 < (e = e.target.className).indexOf("save-preference-btn-handler") ? (N.bannerCloseSource = Z.ConfirmChoiceButton,
        a.triggerGoogleAnalyticsEvent(Oo, Ro)) : -1 < e.indexOf("banner-close-button") ? (N.bannerCloseSource = Z.BannerCloseButton,
        t = Bo,
        -1 < e.indexOf("ot-close-link") && (t = Go,
        N.bannerCloseSource = Z.ContinueWithoutAcceptingButton),
        a.triggerGoogleAnalyticsEvent(Oo, t)) : -1 < e.indexOf("ot-bnr-save-handler") && (N.bannerCloseSource = Z.BannerSaveSettings,
        a.triggerGoogleAnalyticsEvent(Oo, xo))),
        _n.removeAddedOTCssStyles(),
        P.hideVendorsList(),
        P.bannerCloseButtonHandler()
    }
    ,
    g.prototype.onLegIntButtonClick = function(e) {
        var t, o, n;
        e && (n = "true" === (e = e.currentTarget).parentElement.getAttribute("is-vendor"),
        t = e.parentElement.getAttribute("data-group-id"),
        o = !e.classList.contains("ot-leg-int-enabled"),
        n ? u.onVendorToggle(t, ce.LI) : (n = C.getGroupById(t)).Parent ? u.updateSubGroupToggles(n, o, !0) : u.updateGroupToggles(n, o, !0),
        k.updateLegIntBtnElement(e.parentElement, o))
    }
    ,
    g.prototype.updateGroupToggles = function(t, o, e) {
        bo.toggleGroupHosts(t, o),
        N.genVenOptOutEnabled && bo.toggleGroupGenVendors(t, o),
        t.IsLegIntToggle = e,
        k.toggleGrpStatus(t, o),
        t.SubGroups && t.SubGroups.length && (G.bannerName === ut && O.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function(e) {
            e.IsLegIntToggle = t.IsLegIntToggle,
            k.toggleGrpStatus(e, o),
            e.IsLegIntToggle = !1,
            bo.toggleGroupHosts(e, o),
            N.genVenOptOutEnabled && bo.toggleGroupGenVendors(e, o),
            b.setVendorStateByGroup(e, o)
        }) : k.toogleAllSubGrpElements(t, o),
        t.SubGroups.forEach(function(e) {
            return b.setVendorStateByGroup(e, o)
        })),
        b.setVendorStateByGroup(t, o),
        this.allowAllVisible(k.setAllowAllButton()),
        t.IsLegIntToggle = !1
    }
    ,
    g.prototype.updateSubGroupToggles = function(e, t, o) {
        bo.toggleGroupHosts(e, t),
        N.genVenOptOutEnabled && bo.toggleGroupGenVendors(e, t);
        var n = C.getGroupById(e.Parent)
          , o = (e.IsLegIntToggle = o,
        n.IsLegIntToggle = e.IsLegIntToggle,
        k.isGroupActive(n));
        t ? (k.toggleGrpStatus(e, !0),
        k.isAllSubgroupsEnabled(n) && !o && (k.toggleGrpStatus(n, !0),
        bo.toggleGroupHosts(n, t),
        N.genVenOptOutEnabled && bo.toggleGroupGenVendors(n, t),
        k.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (k.toggleGrpStatus(e, !1),
        k.isAllSubgroupsDisabled(n) && o ? (k.toggleGrpStatus(n, !1),
        bo.toggleGroupHosts(n, t),
        N.genVenOptOutEnabled && bo.toggleGroupGenVendors(n, t),
        k.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (k.toggleGrpStatus(n, !1),
        bo.toggleGroupHosts(n, !1),
        N.genVenOptOutEnabled && bo.toggleGroupGenVendors(n, t),
        k.toggleGroupHtmlElement(e, "" + e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))),
        this.allowAllVisible(k.setAllowAllButton()),
        e.IsLegIntToggle = !1,
        n.IsLegIntToggle = e.IsLegIntToggle
    }
    ,
    g.prototype.hideCategoryContainer = function(e) {
        var t = G.pcName;
        this.isCookieList = e = void 0 === e ? !1 : e,
        x.PCTemplateUpgrade ? D("#onetrust-pc-sdk " + H.P_Content).addClass("ot-hide") : D("#onetrust-pc-sdk .ot-main-content").hide(),
        D("#onetrust-pc-sdk " + H.P_Vendor_List).removeClass("ot-hide"),
        t !== ft && t !== Ct && D("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(),
        t === Ct && w(D("#onetrust-pc-sdk").el[0], 'height: "";', !0),
        N.showVendorService ? p.setHeaderConfig() : (e ? u.setCookieListTemplate() : u.setVendorListTemplate(),
        Yn.setFilterList(e))
    }
    ,
    g.prototype.setCookieListTemplate = function() {
        var e = O.isV2Template;
        D(H.P_Vendor_List + " #select-all-text-container").show("inline-block"),
        D("#onetrust-pc-sdk " + H.P_Host_Cntr).show(),
        y.isOptOutEnabled() ? D("#onetrust-pc-sdk #" + H.P_Sel_All_Host_El).show("inline-block") : D("#onetrust-pc-sdk #" + H.P_Sel_All_Host_El).hide(),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Leg_El).hide(),
        D("#onetrust-pc-sdk " + H.P_Leg_Header).hide(),
        e || D("#onetrust-pc-sdk " + H.P_Leg_Select_All).hide(),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Consent_El).hide(),
        D("#onetrust-pc-sdk  " + H.P_Vendor_Container).hide(),
        (x.UseGoogleVendors || N.showGeneralVendors) && D("#onetrust-pc-sdk .ot-acc-cntr").hide(),
        D("#onetrust-pc-sdk " + H.P_Vendor_List).addClass(H.P_Host_UI),
        D("#onetrust-pc-sdk " + H.P_Vendor_Content).addClass(H.P_Host_Cnt)
    }
    ,
    g.prototype.setVendorListTemplate = function() {
        D("#onetrust-pc-sdk " + H.P_Vendor_Container).show(),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Consent_El).show("inline-block"),
        x.UseGoogleVendors && D("#onetrust-pc-sdk .ot-acc-cntr").show(),
        G.legIntSettings.PAllowLI && "IAB2" === G.iabType ? (D("#onetrust-pc-sdk " + H.P_Select_Cntr).show(O.isV2Template ? void 0 : "inline-block"),
        D("#onetrust-pc-sdk " + H.P_Leg_Select_All).show("inline-block"),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Leg_El).show("inline-block"),
        D(H.P_Vendor_List + " #select-all-text-container").hide(),
        G.legIntSettings.PShowLegIntBtn ? (D("#onetrust-pc-sdk " + H.P_Leg_Header).hide(),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Leg_El).hide()) : D("#onetrust-pc-sdk " + H.P_Leg_Header).show()) : (D("#onetrust-pc-sdk " + H.P_Select_Cntr).show(),
        D(H.P_Vendor_List + " #select-all-text-container").show("inline-block"),
        D("#onetrust-pc-sdk " + H.P_Leg_Select_All).hide(),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Leg_El).hide()),
        D("#onetrust-pc-sdk #" + H.P_Sel_All_Host_El).hide(),
        D("#onetrust-pc-sdk " + H.P_Host_Cntr).hide(),
        D("#onetrust-pc-sdk " + H.P_Vendor_List).removeClass(H.P_Host_UI),
        D("#onetrust-pc-sdk " + H.P_Vendor_Content).removeClass(H.P_Host_Cnt)
    }
    ,
    g.prototype.showAllVendors = function(t) {
        return d(this, void 0, void 0, function() {
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, u.fetchAndSetupPC()];
                case 1:
                    return e.sent(),
                    u.showVendorsList(null, !0),
                    N.isPCVisible ? [3, 3] : [4, u.showCookieSettingsHandler(t)];
                case 2:
                    e.sent(),
                    e.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    g.prototype.fetchAndSetupPC = function() {
        return d(this, void 0, void 0, function() {
            var t;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return O.moduleInitializer.IsSuppressPC && 0 === D("#onetrust-pc-sdk").length ? [4, Jt.getPcContent()] : [3, 2];
                case 1:
                    t = e.sent(),
                    f.preferenceCenterGroup = {
                        name: t.name,
                        html: atob(t.html),
                        css: t.css
                    },
                    O.isV2Template = x.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name),
                    (t = document.getElementById("onetrust-style")).innerHTML += f.preferenceCenterGroup.css,
                    t.innerHTML += $n.addCustomPreferenceCenterCSS(),
                    S.insertPcHtml(),
                    u.initialiseConsentNoticeHandlers(),
                    x.IsIabEnabled && h.InitializeVendorList(),
                    e.label = 2;
                case 2:
                    return 0 !== D("#onetrust-pc-sdk").length && x.PCTemplateUpgrade && (t = document.querySelector("#onetrust-pc-sdk .ot-optout-signal"),
                    S.setOptOutSignalVisibility(t)),
                    [2]
                }
            })
        })
    }
    ,
    g.prototype.setVendorContent = function() {
        D("#onetrust-pc-sdk #filter-count").text(N.filterByIABCategories.length.toString()),
        h.loadVendorList("", N.filterByIABCategories),
        x.UseGoogleVendors && (N.vendorDomInit ? h.resetAddtlVendors() : (h.initGoogleVendors(),
        D("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", u.toggleAccordionStatus.bind(this)))),
        N.vendorDomInit || (N.vendorDomInit = !0,
        u.initialiseLegIntBtnHandlers(),
        x.UseGoogleVendors && (u.initialiseAddtlVenHandler(),
        u.bindSelAllHandlers())),
        N.showGeneralVendors && !N.genVendorDomInit && (N.genVendorDomInit = !0,
        h.initGenVendors(),
        u.initializeGenVenHandlers(),
        x.UseGoogleVendors || (u.bindSelAllHandlers(),
        D("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", u.toggleAccordionStatus.bind(this))))
    }
    ,
    g.prototype.addEventAdditionalTechnologies = function() {
        var e = document.querySelectorAll("#onetrust-pc-sdk .ot-acc-cntr.ot-add-tech > button");
        0 < e.length && (D(e).off("click", u.toggleAccordionStatus),
        D(e).on("click", u.toggleAccordionStatus))
    }
    ,
    g.prototype.showVendorsList = function(e, t) {
        return void 0 === t && (t = !1),
        N.cookieListType = null,
        u.hideCategoryContainer(!1),
        _n.addOTCssPropertiesToBody(Ln.PC, {}),
        N.showVendorService ? p.showVSList() : (t || (t = e.getAttribute("data-parent-id")) && (t = C.getGroupById(t)) && (t = q(t.SubGroups, [t]).reduce(function(e, t) {
            return -1 < Gt.indexOf(t.Type) && e.push(t.CustomGroupId),
            e
        }, []),
        N.filterByIABCategories = q(N.filterByIABCategories, t)),
        u.setVendorContent(),
        gn.updateFilterSelection(!1)),
        N.pcLayer = ie.VendorList,
        e && dn.setPCFocus(dn.getPCElements()),
        this.setSearchInputFocus(),
        !1
    }
    ,
    g.prototype.loadCookieList = function(e) {
        N.filterByCategories = [],
        u.hideCategoryContainer(!0);
        var t, e = e && e.getAttribute("data-parent-id");
        return e && (t = C.getGroupById(e),
        N.filterByCategories.push(e),
        t.SubGroups.length) && t.SubGroups.forEach(function(e) {
            -1 === Gt.indexOf(e.Type) && (e = e.CustomGroupId,
            N.filterByCategories.indexOf(e) < 0) && N.filterByCategories.push(e)
        }),
        h.loadHostList("", N.filterByCategories),
        N.showTrackingTech && u.addEventAdditionalTechnologies(),
        D("#onetrust-pc-sdk #filter-count").text(N.filterByCategories.length.toString()),
        gn.updateFilterSelection(!0),
        N.pcLayer = ie.CookieList,
        dn.setPCFocus(dn.getPCElements()),
        this.setSearchInputFocus(),
        !1
    }
    ,
    g.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Leg_El).el[0]
          , o = t.classList.contains("line-through")
          , n = D(H.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el
          , r = e.target.checked
          , i = {};
        N.vendors.selectedLegIntVendors.map(function(e, t) {
            i[e.split(":")[0]] = t
        });
        for (var s = 0; s < n.length; s++) {
            B.setCheckedAttribute(null, n[s], r),
            x.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? x.PCActiveText : x.PCInactiveText);
            var a = n[s].getAttribute("leg-vendorid")
              , l = i[a];
            void 0 === l && (l = a),
            N.vendors.selectedLegIntVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"),
        B.setCheckedAttribute(null, e.target, r)
    }
    ,
    g.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = D("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = D("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i < n.length; i++)
            B.setCheckedAttribute(null, n[i], r),
            x.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? x.PCActiveText : x.PCInactiveText);
        r ? x.UseGoogleVendors && Object.keys(N.addtlVendorsList).forEach(function(e) {
            N.addtlVendors.vendorSelected[e] = !0
        }) : N.addtlVendors.vendorSelected = {},
        o && t.classList.remove("line-through")
    }
    ,
    g.prototype.selectAllGenVenHandler = function(e) {
        e = e.target.checked;
        u.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", e)
    }
    ,
    g.prototype.selectAllHandler = function(e, t, o) {
        for (var n = D(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = D(e.vendorBoxes).el, s = 0; s < i.length; s++)
            "genven" === t && !o && N.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (B.setDisabledAttribute(null, i[s], !0),
            B.setCheckedAttribute(null, i[s], !0)) : B.setCheckedAttribute(null, i[s], o),
            x.PCShowConsentLabels && (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? x.PCActiveText : x.PCInactiveText);
        o ? "googleven" === t && x.UseGoogleVendors ? Object.keys(N.addtlVendorsList).forEach(function(e) {
            N.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && N.showGeneralVendors && x.GeneralVendors.forEach(function(e) {
            N.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? N.addtlVendors.vendorSelected = {} : (N.genVendorsConsent = {},
        N.alwaysActiveGenVendors.forEach(function(e) {
            N.genVendorsConsent[e] = !0
        })),
        r && n.classList.remove("line-through")
    }
    ,
    g.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = e.target.checked;
        if (N.showVendorService)
            p.toggleVendors(t);
        else {
            var o = D("#onetrust-pc-sdk #" + H.P_Sel_All_Vendor_Consent_El).el[0]
              , n = o.classList.contains("line-through")
              , r = D(H.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el
              , i = {};
            N.vendors.selectedVendors.map(function(e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s < r.length; s++) {
                B.setCheckedAttribute(null, r[s], t),
                x.PCShowConsentLabels && (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? x.PCActiveText : x.PCInactiveText);
                var a = r[s].getAttribute("vendorid")
                  , l = i[a];
                void 0 === l && (l = a),
                N.vendors.selectedVendors[l] = a + ":" + t
            }
            n && o.classList.remove("line-through")
        }
        B.setCheckedAttribute(null, e.target, t)
    }
    ,
    g.prototype.onVendorToggle = function(o, e) {
        var t = N.vendors
          , n = N.addtlVendors
          , r = e === ce.LI ? t.selectedLegIntVendors : e === ce.AddtlConsent ? [] : t.selectedVendors
          , i = !1
          , s = Number(o);
        r.some(function(e, t) {
            e = e.split(":");
            if (e[0] === o)
                return s = t,
                i = "true" === e[1],
                !0
        }),
        e === ce.LI ? (a.triggerGoogleAnalyticsEvent(Oo, i ? en : tn, t.list.find(function(e) {
            return e.vendorId === o
        }).vendorName + ": IABV2_" + o),
        t.selectedLegIntVendors[s] = o + ":" + !i,
        G.legIntSettings.PShowLegIntBtn || h.vendorLegIntToggleEvent()) : e === ce.AddtlConsent ? (n.vendorSelected[o] ? delete n.vendorSelected[o] : n.vendorSelected[o] = !0,
        h.venAdtlSelAllTglEvent()) : (a.triggerGoogleAnalyticsEvent(Oo, i ? Zo : $o, t.list.find(function(e) {
            return e.vendorId === o
        }).vendorName + ": IABV2_" + o),
        t.selectedVendors[s] = o + ":" + !i,
        h.vendorsListEvent())
    }
    ,
    g.prototype.onVendorDisclosure = function(o) {
        return d(this, void 0, void 0, function() {
            var t;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = N.discVendors)[o].isFetched ? [3, 2] : (t[o].isFetched = !0,
                    [4, Jt.getStorageDisclosure(t[o].disclosureUrl)]);
                case 1:
                    t = e.sent(),
                    h.updateVendorDisclosure(o, t),
                    e.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    g.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && B.setCheckedAttribute(null, e.target, e.target.checked)
    }
    ,
    g.prototype.selectVendorsGroupHandler = function(e) {
        u.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid")
          , o = e.target.getAttribute("vendorid")
          , n = e.target.getAttribute("addtl-vid")
          , r = e.target.getAttribute("disc-vid");
        t ? u.onVendorToggle(t, ce.LI) : o ? u.onVendorToggle(o, ce.Consent) : n && u.onVendorToggle(n, ce.AddtlConsent),
        r && u.onVendorDisclosure(r),
        (t || o || n) && (B.setCheckedAttribute(null, e.target, e.target.checked),
        x.PCShowConsentLabels) && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? x.PCActiveText : x.PCInactiveText)
    }
    ,
    g.prototype.toggleVendorFiltersHandler = function() {
        var e, t = !1, o = D("#onetrust-pc-sdk " + H.P_Fltr_Modal).el[0];
        switch (G.pcName) {
        case yt:
        case gt:
        case Ct:
        case V:
            (t = "block" === o.style.display) ? u.closeFilter() : (e = D("#onetrust-pc-sdk " + H.P_Triangle).el[0],
            D(e).attr("style", "display: block;"),
            D(o).attr("style", "display: block;"),
            e = Array.prototype.slice.call(o.querySelectorAll("[href], input, button")),
            dn.setPCFocus(e));
            break;
        case ft:
            896 < window.innerWidth || 896 < window.screen.height ? w(o, "width: 400px;", !0) : w(o, "height: 100%; width: 100%;"),
            o.querySelector(".ot-checkbox input").focus();
            break;
        default:
            return
        }
        O.isV2Template && !t && (D("#onetrust-pc-sdk").addClass("ot-shw-fltr"),
        D("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }
    ,
    g.prototype.clearFiltersHandler = function() {
        u.setAriaLabelforButtonInFilter(x.PCenterFilterClearedAria);
        for (var e = D("#onetrust-pc-sdk " + H.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++)
            B.setCheckedAttribute(null, e[t], !1);
        u.isCookieList ? N.filterByCategories = [] : N.filterByIABCategories = []
    }
    ,
    g.prototype.cancelFilterHandler = function() {
        N.showVendorService ? p.cancelFilter() : u.isCookieList ? gn.cancelHostFilter() : h.cancelVendorFilter(),
        u.closeFilter(),
        D("#onetrust-pc-sdk #filter-btn-handler").focus()
    }
    ,
    g.prototype.applyFilterHandler = function() {
        var e;
        u.setAriaLabelforButtonInFilter(x.PCenterFilterAppliedAria),
        N.showVendorService ? (e = p.getGroupsFilter(),
        p.filterVendorByGroup(e)) : u.isCookieList ? (e = gn.updateHostFilterList(),
        h.loadHostList("", e),
        N.showTrackingTech && u.addEventAdditionalTechnologies()) : (e = h.updateVendorFilterList(),
        h.loadVendorList("", e)),
        D("#onetrust-pc-sdk #filter-count").text(String(e.length)),
        u.closeFilter(),
        D("#onetrust-pc-sdk #filter-btn-handler").focus()
    }
    ,
    g.prototype.setAriaLabelforButtonInFilter = function(e) {
        var t = N.isPCVisible ? document.querySelector("#onetrust-pc-sdk span[aria-live]") : document.querySelector("#onetrust-banner-sdk span[aria-live]");
        if (!t) {
            (t = document.createElement("span")).classList.add("ot-scrn-rdr"),
            t.setAttribute("aria-atomic", "true");
            var o = void 0;
            if (N.isPCVisible ? o = document.getElementById(u.pcSDKSelector) : document.getElementById(u.bannerSelector) && (o = document.getElementById(u.bannerSelector)),
            !o)
                return;
            o.appendChild(t)
        }
        t.setAttribute("aria-atomic", "true"),
        t.setAttribute("aria-relevant", "additions"),
        t.setAttribute("aria-live", "assertive"),
        t.setAttribute(At, e),
        u.timeCallback && clearTimeout(u.timeCallback),
        u.timeCallback = setTimeout(function() {
            u.timeCallback = null,
            t.setAttribute(At, "")
        }, 900)
    }
    ,
    g.prototype.setPcListContainerHeight = function() {
        D("#onetrust-pc-sdk " + H.P_Content).el[0].classList.contains("ot-hide") ? w(D("#onetrust-pc-sdk").el[0], 'height: "";', !0) : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight),
            !D("#onetrust-pc-sdk " + H.P_Content).el[0].scrollHeight || D("#onetrust-pc-sdk " + H.P_Content).el[0].scrollHeight >= e ? w(D("#onetrust-pc-sdk").el[0], "height: " + e + "px;", !0) : w(D("#onetrust-pc-sdk").el[0], "height: auto;", !0)
        })
    }
    ,
    g.prototype.changeSelectedTab = function(e) {
        var t, o = D("#onetrust-pc-sdk .category-menu-switch-handler"), n = 0, r = D(o.el[0]);
        o.each(function(e, t) {
            D(e).el.classList.contains(H.P_Active_Menu) && (n = t,
            D(e).el.classList.remove(H.P_Active_Menu),
            r = D(e))
        }),
        e.keyCode === se.RightArrow ? t = n + 1 >= o.el.length ? D(o.el[0]) : D(o.el[n + 1]) : e.keyCode === se.LeftArrow && (t = D(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])),
        this.tabMenuToggle(t, r)
    }
    ,
    g.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement, e = (e.keyCode === se.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === se.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild),
        t.querySelector(".category-menu-switch-handler"));
        e.focus(),
        this.groupTabClick(e)
    }
    ,
    g.prototype.categoryMenuSwitchHandler = function() {
        for (var t = this, e = D("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++)
            e[o].addEventListener("click", this.groupTabClick),
            e[o].addEventListener("keydown", function(e) {
                if (32 === e.keyCode || "space" === e.code)
                    return t.groupTabClick(e.currentTarget),
                    e.preventDefault(),
                    !1
            })
    }
    ,
    g.prototype.groupTabClick = function(e) {
        var t = D("#onetrust-pc-sdk " + H.P_Grp_Container).el[0]
          , o = t.querySelector("." + H.P_Active_Menu)
          , e = e.currentTarget || e
          , n = e.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1),
        o.setAttribute("aria-selected", !1),
        o.classList.remove(H.P_Active_Menu),
        t.querySelector(H.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"),
        t.querySelector("#" + n).classList.remove("ot-hide"),
        e.setAttribute("tabindex", 0),
        e.setAttribute("aria-selected", !0),
        e.classList.add(H.P_Active_Menu)
    }
    ,
    g.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0),
        e.el.setAttribute("aria-selected", !0),
        t.el.setAttribute("tabindex", -1),
        t.el.setAttribute("aria-selected", !1),
        e.focus(),
        t.el.parentElement.parentElement.querySelector("" + H.P_Desc_Container).classList.add("ot-hide"),
        e.el.parentElement.parentElement.querySelector("" + H.P_Desc_Container).classList.remove("ot-hide"),
        e.el.classList.add(H.P_Active_Menu)
    }
    ,
    g.prototype.closeFilter = function(e) {
        var t, o;
        void 0 === e && (e = !0),
        Rn.checkIfPcSdkContainerExist() || (t = D("#onetrust-pc-sdk " + H.P_Fltr_Modal).el[0],
        o = D("#onetrust-pc-sdk " + H.P_Triangle).el[0],
        G.pcName === ft ? 896 < window.innerWidth || 896 < window.screen.height ? w(t, "width: 0;", !0) : w(t, "height: 0;") : w(t, "display: none;"),
        o && D(o).attr("style", "display: none;"),
        O.isV2Template && D("#onetrust-pc-sdk").removeClass("ot-shw-fltr"),
        e && dn.setFirstAndLast(dn.getPCElements()))
    }
    ,
    g.prototype.setBackButtonFocus = function() {
        D("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }
    ,
    g.prototype.setSearchInputFocus = function() {
        D(u.VENDOR_SEARCH_SELECTOR).el[0].focus()
    }
    ,
    g.prototype.setCenterLayoutFooterHeight = function() {
        var e = u.pc;
        if (u.setMainContentHeight(),
        G.pcName === V && e) {
            var t = e.querySelectorAll("" + H.P_Desc_Container)
              , o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + H.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++)
                    o[n].insertAdjacentElement("afterend", t[n]);
            else
                e.querySelector(".category-menu-switch-handler + " + H.P_Desc_Container) && 640 < window.innerWidth && D(e.querySelector(".ot-tab-desc")).append(t)
        }
    }
    ,
    g.prototype.setMainContentHeight = function() {
        var e = this.pc
          , t = e.querySelector(".ot-pc-footer")
          , o = e.querySelector(".ot-pc-header")
          , n = e.querySelectorAll(".ot-pc-footer button")
          , r = n[n.length - 1]
          , i = x.PCLayout
          , r = (e.classList.remove("ot-ftr-stacked"),
        n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"),
        x.PCTemplateUpgrade || i.Center || (n = e.clientHeight - t.clientHeight - o.clientHeight - 3,
        x.PCTemplateUpgrade && !i.Tab && x.PCenterVendorListDescText && (n = n - ((r = D("#vdr-lst-dsc").el).length && r[0].clientHeight) - 10),
        w(e.querySelector("" + H.P_Vendor_List), "height: " + n + "px;", !0)),
        e.querySelector("" + H.P_Content));
        x.PCTemplateUpgrade && i.Center ? (n = 600 < window.innerWidth && 475 < window.innerHeight,
        !this.pcBodyHeight && n && (this.pcBodyHeight = r.scrollHeight),
        n ? (i = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20) > .8 * window.innerHeight || 0 === this.pcBodyHeight ? w(e, "height: " + .8 * window.innerHeight + "px;", !0) : w(e, "height: " + i + "px;", !0) : w(e, "height: 100%;", !0)) : w(e.querySelector("" + H.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }
    ,
    g.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && x.PCLayout.Tab && x.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(),
        this.allowVisible = e)
    }
    ,
    g.prototype.restorePc = function() {
        N.pcLayer === ie.CookieList ? (u.hideCategoryContainer(!0),
        h.loadHostList("", N.filterByCategories),
        N.showTrackingTech && u.addEventAdditionalTechnologies(),
        D("#onetrust-pc-sdk #filter-count").text(N.filterByCategories.length.toString())) : N.pcLayer === ie.VendorList && (u.hideCategoryContainer(!1),
        u.setVendorContent()),
        N.isPCVisible = !1,
        u.toggleInfoDisplay(),
        N.pcLayer !== ie.VendorList && N.pcLayer !== ie.CookieList || (gn.updateFilterSelection(N.pcLayer === ie.CookieList),
        u.setBackButtonFocus(),
        dn.setPCFocus(dn.getPCElements()))
    }
    ,
    g.prototype.toggleInfoDisplay = function() {
        return d(this, void 0, void 0, function() {
            var t;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return f.csBtnGroup && (D(u.fltgBtnSltr).addClass("ot-pc-open"),
                    u.otGuardLogoPromise.then(function() {
                        x.cookiePersistentLogo.includes("ot_guard_logo.svg") && D(u.fltgBtnFSltr).attr(It, "true")
                    }),
                    D(u.fltgBtnBSltr).attr(It, "")),
                    [4, u.fetchAndSetupPC()];
                case 1:
                    return e.sent(),
                    G.pcName === Ct && this.setPcListContainerHeight(),
                    void 0 !== N.pcLayer && N.pcLayer !== ie.Banner || (N.pcLayer = ie.PrefCenterHome),
                    t = D("#onetrust-pc-sdk").el[0],
                    D(".onetrust-pc-dark-filter").el[0].removeAttribute("style"),
                    t.removeAttribute("style"),
                    N.isPCVisible || (Rn.showConsentNotice(),
                    N.isPCVisible = !0,
                    x.PCTemplateUpgrade && (this.pc = t,
                    t = t.querySelector("#accept-recommended-btn-handler"),
                    this.allowVisible = t && 0 < t.clientHeight,
                    this.setCenterLayoutFooterHeight(),
                    u.getResizeElement().addEventListener("resize", u.setCenterLayoutFooterHeight),
                    window.addEventListener("resize", u.setCenterLayoutFooterHeight))),
                    window.dispatchEvent(new CustomEvent("OneTrustPCLoaded",{
                        OneTrustPCLoaded: "yes"
                    })),
                    u.captureInitialConsent(),
                    [2]
                }
            })
        })
    }
    ,
    g.prototype.close = function(e) {
        x.BCloseButtonType === be.Link ? N.bannerCloseSource = Z.ContinueWithoutAcceptingButton : N.bannerCloseSource = Z.BannerCloseButton,
        P.bannerCloseButtonHandler(e),
        u.getResizeElement().removeEventListener("resize", u.setCenterLayoutFooterHeight),
        window.removeEventListener("resize", u.setCenterLayoutFooterHeight)
    }
    ,
    g.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    g.prototype.initializeAlartHtmlAndHandler = function() {
        N.skipAddingHTML = 0 < D("#onetrust-banner-sdk").length,
        N.skipAddingHTML || Wr.insertAlertHtml(),
        this.initialiseAlertHandlers()
    }
    ,
    g.prototype.initialiseAlertHandlers = function() {
        var e = this
          , t = (Wr.showBanner(),
        x.ForceConsent && !y.isCookiePolicyPage(x.AlertNoticeText) && D(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"),
        x.OnClickCloseBanner && document.body.addEventListener("click", P.bodyClickEvent),
        x.ScrollCloseBanner && (window.addEventListener("scroll", P.scrollCloseBanner),
        D(document).on("click", ".onetrust-close-btn-handler", P.rmScrollAndClickBodyEvents),
        D(document).on("click", "#onetrust-accept-btn-handler", P.rmScrollAndClickBodyEvents),
        D(document).on("click", "#accept-recommended-btn-handler", P.rmScrollAndClickBodyEvents)),
        (x.IsIabEnabled || x.UseGoogleVendors || N.showGeneralVendors) && !N.showVendorService && D(document).on("click", ".onetrust-vendors-list-handler", u.showAllVendors),
        x.FloatingRoundedIcon && D("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
            N.pcSource = e.currentTarget,
            u.showCookieSettingsHandler(e)
        }),
        D("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", u.bannerCloseButtonHandler),
        D("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", u.showCookieSettingsHandler),
        D("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", P.allowAllEventHandler.bind(this, !1)),
        D("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", P.rejectAllEventHandler.bind(this, !1)),
        D("#onetrust-banner-sdk .banner-option-input").on("click", G.bannerName === dt ? u.toggleBannerOptions : u.toggleAccordionStatus),
        D("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
            return d(e, void 0, void 0, function() {
                return E(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return N.cookieListType = Ce.GenVen,
                        [4, u.fetchAndSetupPC()];
                    case 1:
                        return e.sent(),
                        u.loadCookieList(t.target),
                        u.showCookieSettingsHandler(t),
                        [2]
                    }
                })
            })
        }),
        D("#onetrust-banner-sdk .category-switch-handler").on("click", u.toggleBannerCategory),
        document.getElementById("onetrust-banner-sdk"));
        x.ForceConsent && t && "none" !== window.getComputedStyle(t).display && D(document).on("keydown", u.shiftBannerFocus),
        D("#onetrust-banner-sdk").on("keydown", function(e) {
            32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || y.findUserType(e)
        })
    }
    ,
    g.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e ? e.contentWindow || e : document
    }
    ,
    g.prototype.insertCookieSettingText = function(e) {
        void 0 === e && (e = !1);
        for (var t = x.CookieSettingButtonText, o = D(".ot-sdk-show-settings").el, n = D(".optanon-toggle-display").el, r = 0; r < o.length; r++)
            D(o[r]).text(t),
            D(n[r]).text(t);
        e ? (null != (e = document.querySelector(".ot-sdk-show-settings")) && e.addEventListener("click", this.cookiesSettingsBoundListener),
        null != (e = document.querySelector(".optanon-toggle-display")) && e.addEventListener("click", this.cookiesSettingsBoundListener)) : u.initCookieSettingHandlers()
    }
    ,
    g.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid")
          , o = (ko.updateGenVendorStatus(t, e.target.checked),
        x.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name);
        a.triggerGoogleAnalyticsEvent(Oo, e.target.checked ? Ko : Wo, o + ": VEN_" + t),
        h.genVenSelectAllTglEvent()
    }
    ,
    g.prototype.genVendorDetails = function(e) {
        u.toggleAccordionStatus(e)
    }
    ,
    g.prototype.confirmPC = function(e) {
        var t = R.isAlertBoxClosedAndValid()
          , o = (x.NoBanner && x.ShowPreferenceCenterCloseButton && !t && P.bannerCloseButtonHandler(),
        y.isBannerVisible());
        !O.moduleInitializer.MobileSDK || !t && o || u.closePreferenceCenter(e)
    }
    ,
    g.prototype.captureInitialConsent = function() {
        N.initialGroupsConsent = JSON.parse(JSON.stringify(N.groupsConsent)),
        N.initialHostConsent = JSON.parse(JSON.stringify(N.hostsConsent)),
        N.showGeneralVendors && (N.initialGenVendorsConsent = JSON.parse(JSON.stringify(N.genVendorsConsent))),
        x.IsIabEnabled && (N.initialOneTrustIABConsent = JSON.parse(JSON.stringify(N.oneTrustIABConsent)),
        N.initialVendors = JSON.parse(JSON.stringify(N.vendors)),
        N.initialVendors.vendorTemplate = N.vendors.vendorTemplate),
        x.UseGoogleVendors && (N.initialAddtlVendorsList = JSON.parse(JSON.stringify(N.addtlVendorsList)),
        N.initialAddtlVendors = JSON.parse(JSON.stringify(N.addtlVendors))),
        N.vsIsActiveAndOptOut && (N.initialVendorsServiceConsent = new Map(N.vsConsent))
    }
    ;
    var u, $r = g;
    function g() {
        var t = this;
        this.allowVisible = !1,
        this.fltgBtnBackBtn = ".ot-floating-button__back button",
        this.fltgBtnBSltr = ".ot-floating-button__back svg",
        this.fltgBtnFrontBtn = ".ot-floating-button__front button",
        this.fltgBtnFSltr = ".ot-floating-button__front svg",
        this.fltgBtnSltr = "#ot-sdk-btn-floating",
        this.VENDOR_SEARCH_SELECTOR = "#onetrust-pc-sdk #vendor-search-handler",
        this.isCookieList = !1,
        this.pc = null,
        this.currentSearchInput = "",
        this.pcLinkSource = null,
        this.pcSDKSelector = "onetrust-pc-sdk",
        this.bannerSelector = "onetrust-banner-sdk",
        this.otGuardLogoResolve = null,
        this.otGuardLogoPromise = new Promise(function(e) {
            t.otGuardLogoResolve = e
        }
        ),
        this.closePCWhenEscPressed = function(e) {
            var t = document.getElementById(u.pcSDKSelector)
              , o = "none" !== window.getComputedStyle(t).display;
            27 === e.keyCode && t && o && ("block" === (t = D("#onetrust-pc-sdk " + H.P_Fltr_Modal).el[0]).style.display || "0px" < t.style.width ? (u.closeFilter(),
            D("#onetrust-pc-sdk #filter-btn-handler").focus()) : x.NoBanner && !x.ShowPreferenceCenterCloseButton || u.hideCookieSettingsHandler(),
            u.confirmPC()),
            (o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && y.findUserType(e)
        }
        ,
        this.showCookieSettingsHandler = function(n) {
            return d(t, void 0, void 0, function() {
                var t, o;
                return E(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return (o = document.getElementById(u.pcSDKSelector),
                        o && "none" !== window.getComputedStyle(o).getPropertyValue("display")) ? [2] : (D(document).on("keydown", u.closePCWhenEscPressed),
                        n && n.stopPropagation(),
                        n && n.target && (o = n.target.className,
                        t = "onetrust-pc-btn-handler" === n.target.id,
                        o = "ot-sdk-show-settings" === o,
                        (t || o) && (o = t ? Do : Ho,
                        a.triggerGoogleAnalyticsEvent(Oo, o)),
                        N.pcSource = n.target),
                        [4, u.toggleInfoDisplay()]);
                    case 1:
                        return e.sent(),
                        [2, !1]
                    }
                })
            })
        }
        ,
        this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this),
        this.backBtnHandler = function() {
            return N.showVendorService && p.hideVendorList(),
            N.showTrackingTech && (u.currentSearchInput = ""),
            P.hideVendorsList(),
            G.pcName === Ct && (D("#onetrust-pc-sdk " + H.P_Content).removeClass("ot-hide"),
            D("#onetrust-pc-sdk").el[0].removeAttribute("style"),
            t.setPcListContainerHeight()),
            D("#onetrust-pc-sdk #filter-count").text("0"),
            D(u.VENDOR_SEARCH_SELECTOR).length && (D(u.VENDOR_SEARCH_SELECTOR).el[0].value = ""),
            N.currentGlobalFilteredList = [],
            N.filterByCategories = [],
            N.filterByIABCategories = [],
            N.vendors.searchParam = "",
            u.closeFilter(),
            N.pcLayer = ie.PrefCenterHome,
            t.pcLinkSource ? (t.pcLinkSource.focus(),
            t.pcLinkSource = null) : dn.setPCFocus(dn.getPCElements()),
            !1
        }
        ,
        this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this),
        this.toggleGroupORVendorHandler = function(e) {
            var t = e.currentTarget;
            t.dataset.otVsId ? u.toggleVendorServiceHandler.bind(this)(e) : t.dataset.optanongroupid && u.toggleV2Category.bind(this)()
        }
        ,
        this.toggleVendorFromListHandler = function(e) {
            var e = e.currentTarget
              , t = e.checked
              , o = e.dataset.otVsId
              , e = e.dataset.optanongroupid
              , n = document.getElementById("ot-vendor-id-" + o);
            b.toggleVendorService(e, o, t, n)
        }
        ,
        this.toggleVendorServiceHandler = function(e) {
            var e = e.currentTarget
              , t = e.checked
              , o = e.dataset.otVsId
              , n = e.dataset.optanongroupid
              , n = (b.toggleVendorService(n, o, t, e),
            C.getVSById(o));
            u.setAriaLabelforButtonInFilter(n.ServiceName)
        }
        ,
        this.toggleV2Category = function(e, t, o, n) {
            t || (r = this.getAttribute("data-optanongroupid"),
            i = "function" == typeof this.getAttribute,
            a = B.findIndex(N.dataGroupState, function(e) {
                return i && e.CustomGroupId === r
            }),
            t = N.dataGroupState[a]),
            void 0 === o && (o = D(this).is(":checked")),
            x.ChoicesBanner && B.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o),
            n ? document.querySelector("#ot-group-id-" + n) && (B.setCheckedAttribute("#ot-group-id-" + n, null, o),
            s = document.querySelector("#ot-group-id-" + n)) : (B.setCheckedAttribute(null, s = this, o),
            a = s.parentElement.querySelector(".ot-switch-nob"),
            O.fp.CookieV2VendorServiceScript ? x.PCCategoryStyle === me.Toggle && a && a.setAttribute("aria-checked", o) : x.PCTemplateUpgrade && a && a.setAttribute("aria-checked", o)),
            x.PCShowConsentLabels && (s.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? x.PCActiveText : x.PCInactiveText);
            var r, i, s, a, n = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            u.setAriaLabelforButtonInFilter(t.GroupName),
            u.updateGroupToggles(t, o, n)
        }
        ,
        this.toggleBannerCategory = function() {
            var t = this
              , e = B.findIndex(N.dataGroupState, function(e) {
                return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
            })
              , e = N.dataGroupState[e]
              , o = D(t).is(":checked");
            u.toggleV2Category(null, e, o, e.CustomGroupId)
        }
        ,
        this.shiftBannerFocus = function(e) {
            var t = document.getElementById(u.pcSDKSelector)
              , o = !1;
            t && (o = "none" !== window.getComputedStyle(t).display),
            "Tab" !== e.code || o || dn.handleBannerFocus(e, e.shiftKey)
        }
        ,
        this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, t = C.getGroupById(t), n = (void 0 === o && (o = D(this).is(":checked")),
            n ? (B.setCheckedAttribute("#ot-sub-group-id-" + n, null, o),
            r = document.querySelector("#ot-sub-group-id-" + n)) : B.setCheckedAttribute(null, r = this, o),
            x.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? x.PCActiveText : x.PCInactiveText),
            this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out"));
            u.setAriaLabelforButtonInFilter(t.GroupName),
            u.updateSubGroupToggles(t, o, n),
            b.setVendorStateByGroup(t, o)
        }
    }
    ei.prototype.updateDataSubjectTimestamp = function() {
        var e = R.alertBoxCloseDate()
          , e = e && y.getUTCFormattedDate(e);
        D(".ot-userid-timestamp").html(x.PCenterUserIdTimestampTitleText + ": " + e)
    }
    ,
    ei.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(),
        e ? this.allowAll(!1) : this.close(!1)
    }
    ,
    ei.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1),
        O.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }
    ,
    ei.prototype.bannerActionsHandler = function(t, n, e) {
        var r = this
          , i = (void 0 === e && (e = !1),
        To.setLandingPathParam(qe),
        N.groupsConsent = [],
        N.hostsConsent = [],
        N.genVendorsConsent = {},
        {});
        x.Groups.forEach(function(e) {
            if (e.IsAboutGroup)
                return !1;
            q(e.SubGroups, [e]).forEach(function(e) {
                var o = r.getGroupStatus(t, n, e);
                r.setGroupConsent(o, e),
                e.Hosts.length && y.isOptOutEnabled() && e.Hosts.forEach(function(e) {
                    var t;
                    i[e.HostId] ? bo.updateHostStatus(e, o) : (i[e.HostId] = !0,
                    t = bo.isHostPartOfAlwaysActiveGroup(e.HostId),
                    N.hostsConsent.push(e.HostId + ":" + (t || o ? "1" : "0")))
                }),
                N.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    ko.updateGenVendorStatus(e, o)
                })
            })
        }),
        x.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)),
        _n.removeAddedOTCssStyles(),
        Rn.hideConsentNoticeV2(),
        po.writeGrpParam(m.OPTANON_CONSENT),
        po.writeHstParam(m.OPTANON_CONSENT),
        N.genVenOptOutEnabled && po.writeGenVenCookieParam(m.OPTANON_CONSENT),
        N.vsIsActiveAndOptOut && po.writeVSConsentCookieParam(m.OPTANON_CONSENT),
        gn.substitutePlainTextScriptTags(),
        Tn.updateGtmMacros(),
        this.executeOptanonWrapper()
    }
    ,
    ei.prototype.getGroupStatus = function(e, t, o) {
        return !!e || !!t && C.isAlwaysActiveGroup(o)
    }
    ,
    ei.prototype.setGroupConsent = function(e, t) {
        -1 < xt.indexOf(t.Type) && N.groupsConsent.push(t.CustomGroupId + ":" + (e && t.HasConsentOptOut ? "1" : "0"))
    }
    ,
    ei.prototype.nextPageCloseBanner = function() {
        To.isLandingPage() || R.isAlertBoxClosedAndValid() || this.closeBanner(x.NextPageAcceptAllCookies)
    }
    ,
    ei.prototype.rmScrollAndClickBodyEvents = function() {
        x.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner),
        x.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }
    ,
    ei.prototype.onClickCloseBanner = function(e) {
        R.isAlertBoxClosedAndValid() || (a.triggerGoogleAnalyticsEvent(Oo, wo),
        this.closeBanner(x.OnClickAcceptAllCookies),
        e.stopPropagation()),
        P.rmScrollAndClickBodyEvents()
    }
    ,
    ei.prototype.scrollCloseBanner = function() {
        var e = D(document).height() - D(window).height()
          , e = (0 === e && (e = D(window).height()),
        100 * D(window).scrollTop() / e);
        25 < (e = e <= 0 ? 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight) : e) && !R.isAlertBoxClosedAndValid() && (!N.isPCVisible || x.NoBanner) ? (a.triggerGoogleAnalyticsEvent(Oo, wo),
        P.closeBanner(x.ScrollAcceptAllCookies),
        P.rmScrollAndClickBodyEvents()) : R.isAlertBoxClosedAndValid() && P.rmScrollAndClickBodyEvents()
    }
    ,
    ei.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = C.getGroupById(o[n].getAttribute("data-optanongroupid"));
            this.groupsClass.toggleGrpElements(o[n], r, !0),
            this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0),
            this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
        }
        N.showVendorService && b.consentAll(!0),
        this.bannerActionsHandler(!0, !1),
        this.consentTransactions(e, !0, t),
        x.IsIabEnabled && (this.iab.updateIabVariableReference(),
        this.iab.updateVendorsDOMToggleStatus(!0),
        this.updateVendorLegBtns(!0))
    }
    ,
    ei.prototype.rejectAll = function(e, t) {
        for (var o, n = (t = void 0 === t ? !1 : t) ? ue[5] : ue[2], r = this.groupsClass.getAllGroupElements(), i = O.fp.CookieV2RejectAll ? (o = this.initializeObjectToLIRejectAll(t),
        this.initializeAllowLIRejectAll(t)) : !(o = !0), s = 0; s < r.length; s++) {
            var a = C.getGroupById(r[s].getAttribute("data-optanongroupid"));
            "always active" !== C.getGrpStatus(a).toLowerCase() && (k.toggleGrpElements(r[s], a, !1, i),
            this.groupsClass.toogleSubGroupElement(r[s], !1, !1, !0),
            !x.IsIabEnabled || x.IsIabEnabled && o) && this.groupsClass.toogleSubGroupElement(r[s], !1, !0, !0)
        }
        N.showVendorService && b.consentAll(!1),
        this.bannerActionsHandler(!1, !0, i),
        n !== N.consentInteractionType && this.consentTransactions(e, !1, t),
        x.IsIabEnabled && (this.iab.updateIabVariableReference(),
        this.iab.updateVendorsDOMToggleStatus(!1, i),
        i || this.updateVendorLegBtns(!1))
    }
    ,
    ei.prototype.initializeObjectToLIRejectAll = function(e) {
        return !e && x.BannerShowRejectAllButton && x.BRejectConsentType === Ie.OBJECT_TO_LI || e && x.PCenterShowRejectAllButton && x.BRejectConsentType === Ie.OBJECT_TO_LI
    }
    ,
    ei.prototype.initializeAllowLIRejectAll = function(e) {
        return x.IsIabEnabled && (!e && x.BannerShowRejectAllButton && x.BRejectConsentType === Ie.LI_ACTIVE_IF_LEGAL_BASIS || e && x.PCenterShowRejectAllButton && x.BRejectConsentType === Ie.LI_ACTIVE_IF_LEGAL_BASIS)
    }
    ,
    ei.prototype.executeCustomScript = function() {
        x.CustomJs && new Function(x.CustomJs)()
    }
    ,
    ei.prototype.updateConsentData = function(e) {
        To.setLandingPathParam(qe),
        x.IsIabEnabled && !e && this.iab.saveVendorStatus(),
        po.writeGrpParam(m.OPTANON_CONSENT),
        po.writeHstParam(m.OPTANON_CONSENT),
        N.showGeneralVendors && x.GenVenOptOut && po.writeGenVenCookieParam(m.OPTANON_CONSENT),
        N.vsIsActiveAndOptOut && po.writeVSConsentCookieParam(m.OPTANON_CONSENT),
        gn.substitutePlainTextScriptTags(),
        Tn.updateGtmMacros()
    }
    ,
    ei.prototype.close = function(e, t) {
        var o;
        void 0 === t && (t = ee.Banner),
        Rn.hideConsentNoticeV2(),
        this.updateConsentData(e),
        x.IsConsentLoggingEnabled ? (e = t === ee.PC ? xn : t === ee.Banner ? wn : G.apiSource,
        o = t === ee.PC ? Vn : t === ee.Banner ? En : On,
        N.bannerCloseSource === Z.ContinueWithoutAcceptingButton && (e = Dn),
        N.bannerCloseSource === Z.BannerSaveSettings && (e = Nn),
        ro.createConsentTxn(!1, o + " - " + e, t === ee.PC)) : R.dispatchConsentEvent(),
        this.executeOptanonWrapper()
    }
    ,
    ei.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(),
            "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = N.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e];
                    -1 === N.srcExecGrps.indexOf(o) && N.srcExecGrps.push(o)
                }
                N.srcExecGrpsTemp = [];
                for (var n = 0, r = N.htmlExecGrpsTemp; n < r.length; n++) {
                    o = r[n];
                    -1 === N.htmlExecGrps.indexOf(o) && N.htmlExecGrps.push(o)
                }
                N.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }
    ,
    ei.prototype.updateVendorLegBtns = function(e) {
        if (G.legIntSettings.PAllowLI && G.legIntSettings.PShowLegIntBtn)
            for (var t = D(H.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++)
                this.groupsClass.updateLegIntBtnElement(t[o], e)
    }
    ,
    ei.prototype.showFltgCkStgButton = function() {
        var e = D("#ot-sdk-btn-floating");
        e.removeClass("ot-hide"),
        e.removeClass("ot-pc-open"),
        x.cookiePersistentLogo.includes("ot_guard_logo.svg") && D(".ot-floating-button__front svg").attr("aria-hidden", ""),
        D(".ot-floating-button__back svg").attr("aria-hidden", "true")
    }
    ,
    ei.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1),
        ro && !e && x.IsConsentLoggingEnabled ? ro.createConsentTxn(!1, (o ? Vn : En) + " - " + (t ? Bn : Gn), o) : R.dispatchConsentEvent()
    }
    ,
    ei.prototype.hideVendorsList = function() {
        Rn.checkIfPcSdkContainerExist() || (x.PCTemplateUpgrade ? D("#onetrust-pc-sdk " + H.P_Content).removeClass("ot-hide") : D("#onetrust-pc-sdk .ot-main-content").show(),
        D("#onetrust-pc-sdk #close-pc-btn-handler.main").show(),
        D("#onetrust-pc-sdk " + H.P_Vendor_List).addClass("ot-hide"))
    }
    ,
    ei.prototype.resetConsent = function() {
        var e = this;
        N.groupsConsent = JSON.parse(JSON.stringify(N.initialGroupsConsent)),
        N.hostsConsent = JSON.parse(JSON.stringify(N.initialHostConsent)),
        N.showGeneralVendors && (N.genVendorsConsent = JSON.parse(JSON.stringify(N.initialGenVendorsConsent))),
        N.vsIsActiveAndOptOut && (N.vsConsent = new Map(N.initialVendorsServiceConsent)),
        x.IsIabEnabled && (N.oneTrustIABConsent = JSON.parse(JSON.stringify(N.initialOneTrustIABConsent)),
        N.vendors = JSON.parse(JSON.stringify(N.initialVendors)),
        N.vendors.vendorTemplate = N.initialVendors.vendorTemplate),
        x.UseGoogleVendors && (N.addtlVendors = JSON.parse(JSON.stringify(N.initialAddtlVendors)),
        N.addtlVendorsList = JSON.parse(JSON.stringify(N.initialAddtlVendorsList))),
        this.updateConsentData(!1),
        setTimeout(function() {
            e.resetConsentUI()
        }, 400)
    }
    ,
    ei.prototype.resetConsentUI = function() {
        k.getAllGroupElements().forEach(function(e) {
            var t = e.getAttribute("data-optanongroupid")
              , o = C.getGroupById(t)
              , t = P.isGroupActive(o, t)
              , n = (e = G.pcName === V && x.PCTemplateUpgrade ? document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")) : e).querySelector(".ot-label-status");
            if (x.PCShowConsentLabels && n && (n.innerHTML = t ? x.PCActiveText : x.PCInactiveText),
            o.Type === Lt || o.Type === Bt)
                for (var r = y.isBundleOrStackActive(o, N.initialGroupsConsent), i = e.querySelector('input[class*="category-switch-handler"]'), s = (B.setCheckedAttribute(null, i, r),
                e.querySelectorAll("li" + H.P_Subgrp_li)), a = 0; a < s.length; a++) {
                    var l = C.getGroupById(s[a].getAttribute("data-optanongroupid"))
                      , c = l.OptanonGroupId
                      , c = P.isGroupActive(l, c)
                      , d = s[a].querySelector('input[class*="cookie-subgroup-handler"]')
                      , p = s[a].querySelector(".ot-label-status");
                    x.PCShowConsentLabels && p && (n.innerHTML = c ? x.PCActiveText : x.PCInactiveText),
                    B.setCheckedAttribute(null, d, c),
                    P.resetLegIntButton(l, s[a])
                }
            else {
                i = e.querySelector('input[class*="category-switch-handler"]');
                B.setCheckedAttribute(null, i, t),
                P.resetLegIntButton(o, e)
            }
        }),
        x.IsIabEnabled && Kn.toggleVendorConsent();
        var e = D("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
        if (N.showGeneralVendors && e && e.length) {
            for (var t = 0, o = e; t < o.length; t++) {
                var n = (a = o[t]).getAttribute("gn-vid")
                  , r = Boolean(N.genVendorsConsent[n]);
                B.setCheckedAttribute("", a, r),
                ko.updateGenVendorStatus(n, r)
            }
            h.genVenSelectAllTglEvent()
        }
        e = D("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
        if (x.UseGoogleVendors && e && e.length)
            for (var i = 0, s = e; i < s.length; i++) {
                var a, n = (a = s[i]).getAttribute("addtl-vid");
                N.addtlVendorsList[n] && (r = Boolean(N.addtlVendors.vendorSelected[n]),
                B.setCheckedAttribute("", a, r))
            }
        N.vsIsActiveAndOptOut && b.resetVendorUIState(N.vsConsent)
    }
    ,
    ei.prototype.isGroupActive = function(e, t) {
        var o;
        return e.IabGrpId ? (o = void 0,
        o = e.Type === Ot ? N.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? N.initialVendors.selectedLegInt : N.initialVendors.selectedPurpose,
        -1 !== Ut.inArray(e.IabGrpId + ":true", o)) : -1 !== Ut.inArray(t + ":1", N.initialGroupsConsent)
    }
    ,
    ei.prototype.resetLegIntButton = function(e, t) {
        var o;
        G.legIntSettings.PAllowLI && e.Type === Vt && e.HasLegIntOptOut && G.legIntSettings.PShowLegIntBtn && (o = !0,
        -1 < N.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1),
        k.updateLegIntBtnElement(t, o))
    }
    ,
    ei.prototype.handleTogglesOnSingularConsentUpdate = function(e, t) {
        if (this.closeOptanonAlertBox(),
        e === bt)
            for (var s = this, o = 0, n = t; o < n.length; o++) {
                var r = n[o];
                !function(e, t) {
                    for (var o = C.getGroupById(e), n = s.groupsClass.getAllGroupElements(), r = 0; r < n.length; r++) {
                        var i = C.getGroupById(n[r].getAttribute("data-optanongroupid"));
                        if (i.OptanonGroupId === o.OptanonGroupId && !i.Parent) {
                            u.toggleV2Category(null, i, t, i.CustomGroupId);
                            break
                        }
                        i = i.SubGroups.find(function(e) {
                            return e.OptanonGroupId === o.OptanonGroupId
                        });
                        i && u.toggleSubCategory(null, i.CustomGroupId, t, i.CustomGroupId)
                    }
                }(c = r.id, d = r.isEnabled)
            }
        else if (e === Tt)
            for (var i = 0, a = t; i < a.length; i++) {
                var l = a[i]
                  , c = l.id
                  , d = l.isEnabled
                  , l = C.getGrpByVendorId(c);
                l && b.toggleVendorService(l.CustomGroupId, c, d)
            }
        this.close(!1, ee.API)
    }
    ;
    var P, Zr = ei;
    function ei() {
        var o = this;
        this.iab = h,
        this.groupsClass = k,
        this.closeOptanonAlertBox = function() {
            var e;
            y.hideBanner(),
            D(document).off("keydown", u.closePCWhenEscPressed),
            x.NtfyConfig.ShowNtfy && Un.hideSyncNtfy(),
            G.isOptInMode || !G.isOptInMode && !R.isAlertBoxClosedAndValid() ? (a.setAlertBoxClosed(!0),
            x.PCTemplateUpgrade && x.PCenterUserIdTitleText && x.IsConsentLoggingEnabled && o.updateDataSubjectTimestamp()) : R.isAlertBoxClosedAndValid() && (e = D(".onetrust-pc-dark-filter").el[0]) && "none" !== getComputedStyle(e).getPropertyValue("display") && D(".onetrust-pc-dark-filter").fadeOut(400),
            f.csBtnGroup && o.showFltgCkStgButton()
        }
        ,
        this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || P.onClickCloseBanner(e)
        }
        ,
        this.bannerCloseButtonHandler = function(e) {
            var t;
            return void 0 === e && (e = !1),
            P.closeOptanonAlertBox(),
            O.moduleInitializer.MobileSDK ? window.OneTrust.Close() : (t = N.bannerCloseSource === Z.ConfirmChoiceButton ? ee.PC : ee.Banner,
            P.close(e, t)),
            !1
        }
        ,
        this.allowAllEventHandler = function(e) {
            void 0 === e && (e = !1),
            D(document).off("keydown", u.shiftBannerFocus),
            a.triggerGoogleAnalyticsEvent(Oo, e ? "Preferences Allow All" : "Banner Accept Cookies"),
            o.allowAllEvent(!1, e),
            o.hideVendorsList()
        }
        ,
        this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1),
            void 0 === t && (t = !1),
            o.closeOptanonAlertBox(),
            P.allowAll(e, t)
        }
        ,
        this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1),
            D(document).off("keydown", u.shiftBannerFocus),
            a.triggerGoogleAnalyticsEvent(Oo, e ? "Preferences Reject All" : "Banner Reject All"),
            O.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (o.rejectAllEvent(!1, e),
            o.hideVendorsList())
        }
        ,
        this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1),
            void 0 === t && (t = !1),
            o.closeOptanonAlertBox(),
            !R.isIABCrossConsentEnabled() || G.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : G.thirdPartyiFramePromise.then(function() {
                o.rejectAll(e, t)
            })
        }
    }
    ni.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(),
        O.moduleInitializer.CookieSPAEnabled ? D(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : D(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }
    ,
    ni.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += f.csBtnGroup.css;
        var t = document.createElement("div")
          , t = (D(t).html(f.csBtnGroup.html),
        t.querySelector("#ot-sdk-btn-floating"));
        e && t && D(t).removeClass("ot-hide"),
        D("#onetrust-consent-sdk").append(t),
        x.cookiePersistentLogo && (x.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : D(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
    }
    ,
    ni.prototype.applyPersistentSvgOnDOM = function() {
        return d(this, void 0, void 0, function() {
            var t;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, Jt.getPersistentCookieSvg()];
                case 1:
                    return t = e.sent(),
                    D(this.FLOATING_COOKIE_FRONT_BTN).html(t),
                    u.otGuardLogoResolve(!0),
                    [2]
                }
            })
        })
    }
    ,
    ni.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !To.isLandingPage() && "true" === v.readCookieParam(m.OPTANON_CONSENT, Ne) && this.checkForRefreshCloseImplied()
    }
    ,
    ni.prototype.isImpliedConsent = function() {
        return x.ConsentModel && "implied consent" === x.ConsentModel.Name.toLowerCase()
    }
    ,
    ni.prototype.checkForRefreshCloseImplied = function() {
        P.closeOptanonAlertBox(),
        P.close(!0)
    }
    ,
    ni.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && w(e, "display: none;")
    }
    ,
    ni.prototype.shouldShowBanner = function(e) {
        return x.ShowAlertNotice && !e && !x.NoBanner && !N.hideBanner
    }
    ,
    ni.prototype.shouldShowPc = function(e) {
        return x.ShowAlertNotice && !e && x.NoBanner
    }
    ,
    ni.prototype.windowLoadBanner = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return (this.core.substitutePlainTextScriptTags(),
                    t = O.moduleInitializer,
                    D("#onetrust-consent-sdk").length ? o = document.getElementById("onetrust-consent-sdk") : (o = document.createElement("div"),
                    D(o).attr("id", "onetrust-consent-sdk"),
                    D(document.body).append(o)),
                    D(".onetrust-pc-dark-filter").length || (n = document.createElement("div"),
                    D(n).attr("class", "onetrust-pc-dark-filter"),
                    D(n).attr("class", "ot-hide"),
                    D(n).attr("class", "ot-fade-in"),
                    o.firstChild ? o.insertBefore(n, o.firstChild) : D(o).append(n)),
                    x.IsIabEnabled && this.iab.updateIabVariableReference(),
                    n = R.isAlertBoxClosedAndValid(),
                    r = this.shouldShowBanner(n),
                    i = this.shouldShowPc(n),
                    N.ntfyRequired ? (this.hideCustomHtml(),
                    Un.init(),
                    Un.changeState()) : r ? u.initializeAlartHtmlAndHandler() : (x.IsGPPEnabled && jr.setCmpDisplayStatus("disabled"),
                    this.hideCustomHtml()),
                    t.IsSuppressPC || (S.insertPcHtml(),
                    u.initialiseConsentNoticeHandlers(),
                    x.IsIabEnabled && this.iab.InitializeVendorList()),
                    this.prepopulateCookieOrVendorPageTitle(),
                    this.initializeHbbTvScript(),
                    this.insertCSBtn(!r),
                    i) ? [4, u.toggleInfoDisplay()] : [3, 2];
                case 1:
                    e.sent(),
                    e.label = 2;
                case 2:
                    return u.insertCookieSettingText(),
                    this.initializeFloatingButtonOnBannerLoad(i),
                    ti.insertTrackigTechOrCookiePolicy(),
                    P.executeOptanonWrapper(),
                    this.initializeCookieParamsOnBannerLoad(r),
                    [2]
                }
            })
        })
    }
    ,
    ni.prototype.prepopulateCookieOrVendorPageTitle = function() {
        O.isV2Template && (x.GeneralVendorsEnabled ? this.iab.setListSearchValues(Le.vendors) : this.iab.setListSearchValues(Le.cookies))
    }
    ,
    ni.prototype.initializeFloatingButtonOnBannerLoad = function(e) {
        var t = D(this.FLOATING_COOKIE_BTN)
          , o = D(this.FLOATING_COOKIE_FRONT_BTN)
          , n = D(this.FLOATING_COOKIE_BACK_BTN);
        t.length && (t.attr("title", x.CookieSettingButtonText),
        o.el[0].setAttribute("aria-label", x.AriaOpenPreferences),
        n.el[0].setAttribute("aria-label", x.AriaClosePreferences),
        (e ? o : n).el[0].setAttribute("aria-hidden", !0))
    }
    ,
    ni.prototype.initializeCookieParamsOnBannerLoad = function(e) {
        v.readCookieParam(m.OPTANON_CONSENT, uo) || po.writeGrpParam(m.OPTANON_CONSENT),
        v.readCookieParam(m.OPTANON_CONSENT, ho) || po.writeHstParam(m.OPTANON_CONSENT),
        N.showGeneralVendors && !v.readCookieParam(m.OPTANON_CONSENT, go) && po.writeGenVenCookieParam(m.OPTANON_CONSENT),
        N.vsIsActiveAndOptOut && !v.readCookieParam(m.OPTANON_CONSENT, Co) && po.writeVSConsentCookieParam(m.OPTANON_CONSENT),
        e && dn.setBannerFocus()
    }
    ,
    ni.prototype.initializeHbbTvScript = function() {
        var e;
        O.moduleInitializer.RemoteActionsEnabled && ((e = document.getElementById("hbbtv")) && e.remove(),
        (e = document.createElement("script")).id = "hbbtv",
        e.src = N.storageBaseURL + "/scripttemplates/" + O.moduleInitializer.Version + "/hbbtv.js",
        e.type = "text/javascript",
        D(document.body).append(e))
    }
    ,
    ni.prototype.insertCSBtn = function(e) {
        f.csBtnGroup && (this.insertCSBtnHtmlAndCss(e),
        u.initFlgtCkStgBtnEventHandlers())
    }
    ,
    ni.prototype.insertTrackingTechnologies = function() {
        var e;
        D("#ot-sdk-cookie-policy, #optanon-cookie-policy").length && (window.OnetrustCookiePolicy && window.OnetrustCookiePolicy.InsertCookiePolicyHtml ? window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, x, D) : ((e = document.createElement("script")).id = "cookie-policy-script",
        e.onload = function() {
            return window.OnetrustCookiePolicy.InsertCookiePolicyHtml(y, x, D)
        }
        ,
        e.type = "text/javascript",
        e.src = N.storageBaseURL + "/scripttemplates/" + O.moduleInitializer.Version + "/trackingTechnologies.js",
        document.head.appendChild(e)))
    }
    ,
    ni.prototype.insertTrackigTechOrCookiePolicy = function() {
        O.fp.CookieV2TrackingTechnologies ? ti.insertTrackingTechnologies() : lr.insertCookiePolicyHtml()
    }
    ;
    var ti, oi = ni;
    function ni() {
        this.iab = h,
        this.core = gn,
        this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating",
        this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open",
        this.FLOATING_COOKIE_BACK_BTN = "#ot-sdk-btn-floating .ot-floating-button__back .ot-floating-button__close"
    }
    I(ai, ri = ur),
    ai.prototype.Close = function(e) {
        P.closeBanner(!1),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    ai.prototype.RejectAll = function(e) {
        P.rejectAllEvent(),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    ai.prototype.AllowAll = function(e) {
        P.AllowAllV2(e),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    ai.prototype.ToggleInfoDisplay = function() {
        u.toggleInfoDisplay()
    }
    ;
    var ri, ii, si = ai;
    function ai() {
        var e = null !== ri && ri.apply(this, arguments) || this;
        return e.mobileOnlineURL = G.mobileOnlineURL,
        e
    }
    di.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1),
        e ? (N.dsParams.id = e.trim(),
        pr.setDataSubjectIdV2(e)) : e = N.dsParams.id,
        o && (N.dsParams.isAnonymous = o),
        t = t || N.dsParams.token,
        e && t && Jt.getConsentProfile(e, t).then(function(e) {
            return li.consentProfileCallback(e)
        })
    }
    ,
    di.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
        case L[L.ACTIVE]:
        case L[L.ALWAYS_ACTIVE]:
            t = he.Active;
            break;
        case L[L.EXPIRED]:
        case L[L.OPT_OUT]:
        case L[L.PENDING]:
        case L[L.WITHDRAWN]:
            t = he.InActive
        }
        return t
    }
    ,
    di.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e)
    }
    ,
    di.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = C = v.getCookie(m.ALERT_BOX_CLOSED)
          , n = !1
          , r = !0
          , i = !1
          , s = B.strToArr(v.readCookieParam(m.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length)
            for (var a = 0, l = e.preferences; a < l.length; a++) {
                var c = l[a]
                  , d = c.status === L[L.NO_CONSENT]
                  , p = G.domainGrps[c.id];
                if (p)
                    if (-1 < N.grpsSynced.indexOf(p) && (N.syncedValidGrp = !0),
                    d && s.length) {
                        for (var u = -1, h = 0; h < s.length; h++)
                            if (s[h].split(":")[0] === p) {
                                u = h;
                                break
                            }
                        -1 < u && (s.splice(u, 1),
                        N.grpsSynced.push(p))
                    } else if (!d && (!C || new Date(c.lastInteractionDate) > new Date(o))) {
                        var g = this.getConsentValue(c.status)
                          , i = !0
                          , C = c.lastInteractionDate;
                        if (!t && this.isCookieGroup(p)) {
                            for (var y = p + ":" + g, f = -1, h = 0; h < s.length; h++) {
                                var k = s[h].split(":");
                                if (k[0] === p) {
                                    k[1] !== g && (s[h] = y,
                                    n = !0),
                                    f = h;
                                    break
                                }
                            }
                            -1 === f && (s.push(y),
                            n = !0)
                        }
                    }
            }
        else
            r = !1;
        return {
            alertBoxCookieVal: C,
            groupsConsent: s,
            profileFound: r,
            syncRequired: n,
            syncOnlyDate: i = i && !n
        }
    }
    ,
    di.prototype.hideBannerAndPc = function() {
        var e = y.isBannerVisible();
        e && y.hideBanner(),
        (e || N.isPCVisible) && (_n.removeAddedOTCssStyles(),
        Rn.hideConsentNoticeV2())
    }
    ,
    di.prototype.setOptanonConsentCookie = function(e, t) {
        var o;
        e.syncRequired && (v.writeCookieParam(m.OPTANON_CONSENT, "groups", e.groupsConsent.toString()),
        o = v.getCookie(m.OPTANON_CONSENT),
        v.setCookie(m.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal)))
    }
    ,
    di.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[N.syncGrpId] && o.syncGroups[N.syncGrpId].tcStringV2 ? v.getCookie(m.EU_PUB_CONSENT) !== o.syncGroups[N.syncGrpId].tcStringV2 && (e.syncRequired = !0,
        v.setCookie(m.EU_PUB_CONSENT, o.syncGroups[N.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }
    ,
    di.prototype.setAddtlVendorsCookie = function(e, t) {
        x.UseGoogleVendors && !v.getCookie(m.ADDITIONAL_CONSENT_STRING) && v.setCookie(m.ADDITIONAL_CONSENT_STRING, N.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal))
    }
    ,
    di.prototype.createTrans = function() {
        var e = v.readCookieParam(m.OPTANON_CONSENT, "iType");
        ro.createConsentTxn(!1, ue[e], !1, !0)
    }
    ,
    di.prototype.updateGrpsDom = function() {
        for (var e = 0, t = k.getAllGroupElements(); e < t.length; e++)
            !function(e) {
                var t = e.getAttribute("data-optanongroupid")
                  , o = C.getGroupById(t)
                  , n = !0
                  , r = B.findIndex(N.groupsConsent, function(e) {
                    return e.split(":")[0] === t
                });
                -1 < r && N.groupsConsent[r].split(":")[1] === he.InActive && (n = !1),
                k.toggleGrpElements(e, o, n),
                k.toogleSubGroupElement(e, n, !1, !0),
                k.toogleSubGroupElement(e, n, !0, !0)
            }(t[e])
    }
    ,
    di.prototype.updateVendorsDom = function() {
        x.IsIabEnabled && (h.updateIabVariableReference(),
        Kn.toggleVendorConsent(),
        G.legIntSettings.PAllowLI) && (G.legIntSettings.PShowLegIntBtn ? Kn.updateVendorLegBtns() : Kn.toggleVendorLi())
    }
    ,
    di.prototype.consentProfileCallback = function(r) {
        return d(this, void 0, void 0, function() {
            var t, o, n;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = this.syncPreferences(r),
                    o = x.ReconsentFrequencyDays,
                    n = R.isIABCrossConsentEnabled(),
                    this.setOptanonConsentCookie(t, o),
                    x.IsIabEnabled && !n && this.setIabCookie(t, o, r),
                    t.syncOnlyDate && (R.syncAlertBoxCookie(t.alertBoxCookieVal),
                    R.syncCookieExpiry()),
                    t.syncRequired && t.profileFound) ? (N.syncRequired = t.syncRequired,
                    R.syncAlertBoxCookie(t.alertBoxCookieVal),
                    this.setAddtlVendorsCookie(t, o),
                    this.hideBannerAndPc(),
                    f.initGrpsAndHosts(),
                    !n && x.NtfyConfig.ShowNtfy && R.isAlertBoxClosedAndValid() ? [4, Un.getContent()] : [3, 2]) : [3, 3];
                case 1:
                    e.sent(),
                    Un.init(),
                    Un.changeState(),
                    e.label = 2;
                case 2:
                    return x.IsIabEnabled && (R.setIABCookieData(),
                    ao.populateVendorAndPurposeFromCookieData()),
                    this.updateGrpsDom(),
                    this.updateVendorsDom(),
                    To.setLandingPathParam(qe),
                    gn.substitutePlainTextScriptTags(),
                    Tn.updateGtmMacros(!0),
                    P.executeOptanonWrapper(),
                    [3, 4];
                case 3:
                    !t.profileFound && t.alertBoxCookieVal && this.createTrans(),
                    e.label = 4;
                case 4:
                    return [2]
                }
            })
        })
    }
    ;
    var li, ci = di;
    function di() {}
    hi.prototype.removeCookies = function() {
        v.removePreview(),
        v.removeOptanon(),
        v.removeAlertBox(),
        v.removeIab2(),
        v.removeAddtlStr(),
        v.removeVariant(),
        N.isPreview && pi.setPreviewCookie(),
        N.urlParams.get("otreset") && N.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + N.urlParams.toString() + window.location.hash;
        pi.replaceHistory(e)
    }
    ,
    hi.prototype.setPreviewCookie = function() {
        var e = new Date
          , t = (e.setTime(e.getTime() + 864e5),
        N.geoFromUrl ? "&geo=" + N.geoFromUrl : "")
          , e = "expiry=" + e.toISOString() + t;
        v.setCookie(m.OT_PREVIEW, e, 1, !1)
    }
    ,
    hi.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return pi.onMessage(e)
        })
    }
    ,
    hi.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e),
        location.reload()
    }
    ,
    hi.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === pi.CLEAR_COOKIES && (pi.removeCookies(),
        e.source) && e.source.postMessage && e.source.postMessage(pi.CLEARED_COOKIES, e.origin)
    }
    ;
    var pi, ui, T = hi;
    function hi() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES",
        this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }
    xe.initPolyfill(),
    v = new Rt,
    y = new Qt,
    G = new e,
    jt = new Kt,
    pi = new T,
    (c = window.otStubData) && (O.moduleInitializer = c.domainData,
    O.fp = O.moduleInitializer.TenantFeatures,
    N.isAMP = c.isAmp,
    N.dataDomainId = c.domainId,
    N.isPreview = c.isPreview,
    N.urlParams = c.urlParams,
    N.isV2Stub = c.isV2Stub || !1,
    G.gtmUpdatedinStub = c.gtmUpdated,
    c.isReset ? pi.removeCookies() : c.isPreview && pi.setPreviewCookie(),
    G.setBannerScriptElement(c.stubElement),
    G.setRegionRule(c.regionRule),
    O.fp.CookieV2TargetedTemplates && (G.conditionalLogicEnabled = !(null == (ui = G.getRegionRule().Conditions) || !ui.length),
    G.conditionalLogicEnabled) && (function() {
        for (var e = G.getRegionRule(), t = 0; t < e.Conditions.length; t++)
            try {
                if (function(e) {
                    if (e)
                        return e = window.atob(e),
                        Function('"use strict"; return ' + e)()
                }(e.Conditions[t].Expression))
                    return G.Condition = e.Conditions[t]
            } catch (e) {
                console.warn(e);
                continue
            }
        G.allConditionsFailed = !0
    }(),
    G.canUseConditionalLogic = !G.allConditionsFailed),
    N.userLocation = c.userLocation,
    N.crossOrigin = c.crossOrigin,
    G.bannerDataParentURL = c.bannerBaseDataURL,
    G.mobileOnlineURL = q(G.mobileOnlineURL, c.mobileOnlineURL),
    ui = G.getRegionRule(),
    G.multiVariantTestingEnabled = O.moduleInitializer.MultiVariantTestingEnabled && 0 < ui.Variants.length && y.isDateCurrent(ui.TestEndTime),
    G.otDataLayer = c.otDataLayer,
    N.grpsSynced = c.grpsSynced || [],
    N.isIabSynced = c.isIabSynced,
    N.isGacSynced = c.isGacSynced,
    N.syncRequired = c.isIabSynced || c.isGacSynced || c.grpsSynced && 0 < c.grpsSynced.length,
    N.consentPreferences = c.preferences,
    N.syncGrpId = c.syncGrpId,
    N.consentApi = c.consentApi,
    N.tenantId = c.tenantId,
    N.geoFromUrl = c.geoFromUrl,
    N.nonce = c.nonce,
    N.setAttributePolyfillIsActive = c.setAttributePolyfillIsActive,
    N.storageBaseURL = c.storageBaseURL,
    G.previewMode = c.previewMode,
    jt.populateLangSwitcherPlhdr(),
    window.otStubData = {
        userLocation: N.userLocation
    },
    window.OneTrustStub = null),
    function() {
        d(this, void 0, void 0, function() {
            var n, r, i, s;
            return E(this, function(e) {
                switch (e.label) {
                case 0:
                    return C = new oo,
                    k = new hn,
                    an = new ln,
                    h = new fn,
                    gn = new Cn,
                    P = new Zr,
                    u = new $r,
                    S = new Pn,
                    Wr = new Jr,
                    ti = new oi,
                    O.fp.CookieV2TrackingTechnologies || (lr = new cr),
                    $n = new nr,
                    ko = new mo,
                    f = new rn,
                    Tn = new An,
                    ir = new sr,
                    a = new _o,
                    F = new to,
                    li = new ci,
                    Kn = new Wn,
                    Jt = new Yt,
                    dn = new pn,
                    Rn = new qn,
                    b = new mn,
                    p = new Xr,
                    O.moduleInitializer.MobileSDK ? ii = new si : pr = new ur,
                    ao = new lo,
                    G.setGCMcallback(),
                    s = G.getRegionRule(),
                    s = (G.canUseConditionalLogic ? G.Condition : s).UseGoogleVendors,
                    "IAB2" !== G.getRegionRuleType() ? [3, 2] : [4, Promise.all([Jt.getLangJson(), Jt.fetchGvlObj(), s ? Jt.fetchGoogleVendors() : Promise.resolve(null), Jt.loadCMP()])];
                case 1:
                    return s = e.sent(),
                    n = s[0],
                    r = s[1],
                    i = s[2],
                    N.gvlObj = r,
                    N.addtlVendorsList = i ? i.vendors : null,
                    [3, 4];
                case 2:
                    return [4, Jt.getLangJson()];
                case 3:
                    n = e.sent(),
                    e.label = 4;
                case 4:
                    return n.DomainData.IsGPPEnabled ? [4, Jt.loadGPP()] : [3, 6];
                case 5:
                    e.sent(),
                    jr = new zr,
                    e.label = 6;
                case 6:
                    var t, o;
                    return function(s) {
                        d(this, void 0, void 0, function() {
                            var r, i;
                            return E(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                        var t, o = O.moduleInitializer.MobileSDK;
                                        t = o ? ii : pr;
                                        var n = {
                                            AllowAll: t.AllowAll,
                                            BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                            Close: t.Close,
                                            getCSS: t.getCSS,
                                            GetDomainData: t.GetDomainData,
                                            getGeolocationData: t.getGeolocationData,
                                            getHTML: t.getHTML,
                                            Init: t.Init,
                                            InitializeBanner: t.InitializeBanner,
                                            initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                            InsertHtml: t.InsertHtml,
                                            InsertScript: t.InsertScript,
                                            IsAlertBoxClosed: t.IsAlertBoxClosed,
                                            IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                            LoadBanner: t.LoadBanner,
                                            OnConsentChanged: a.OnConsentChanged,
                                            ReconsentGroups: t.ReconsentGroups,
                                            RejectAll: t.RejectAll,
                                            SetAlertBoxClosed: t.SetAlertBoxClosed,
                                            setGeoLocation: t.setGeoLocation,
                                            ToggleInfoDisplay: t.ToggleInfoDisplay,
                                            TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                            useGeoLocationService: t.useGeoLocationService,
                                            FetchAndDownloadPC: t.FetchAndDownloadPC,
                                            changeLanguage: t.changeLang,
                                            testLog: t.getTestLogData,
                                            UpdateConsent: t.updateSingularConsent,
                                            IsVendorServiceEnabled: t.vendorServiceEnabled,
                                            UpdateGCM: t.updateGCM
                                        };
                                        e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId,
                                        n.setConsentProfile = t.setConsentProfile,
                                        n.setDataSubjectId = t.setDataSubjectIdV2,
                                        N.isV2Stub) && (n.syncConsentProfile = li.syncConsentProfile);
                                        o && (n.mobileOnlineURL = t.mobileOnlineURL,
                                        n.otCookieData = N.otCookieData);
                                        e.IsIabEnabled && (n.updateConsentFromCookies = a.updateConsentFromCookie,
                                        n.getPingRequest = ao.getPingRequestForTcf,
                                        n.getVendorConsentsRequestV2 = ao.getVendorConsentsRequestV2,
                                        n.showVendorsList = t.showVendorsList);
                                        return n
                                    }(s.DomainData)),
                                    R.initializeBannerVariables(s),
                                    po = new yo,
                                    bo = new So,
                                    ro = new io,
                                    _n = new Hn,
                                    To = new Io,
                                    Yn = new Xn,
                                    Un = new jn;
                                    var t, o = window.OTExternalConsent;
                                    return o && o.consentedDate && (o.groups || o.tcString || o.addtlString) && (t = [],
                                    (n = o.groups.split(",")).forEach(function(e) {
                                        e = e.split(":");
                                        t.push({
                                            lastInteractionDate: o.consentedDate,
                                            status: "1" === e[1] ? L[L.ACTIVE] : L[L.OPT_OUT],
                                            id: e[0]
                                        }),
                                        N.grpsSynced.push(e[0])
                                    }),
                                    N.consentPreferences = {
                                        preferences: t,
                                        syncGroups: null
                                    },
                                    N.syncRequired = !0,
                                    po.updateGroupsInCookie(m.OPTANON_CONSENT, n),
                                    v.setCookie(m.ALERT_BOX_CLOSED, o.consentedDate, 365),
                                    o.tcString && (N.isIabSynced = !0,
                                    v.setCookie(m.EU_PUB_CONSENT, o.tcString, 365)),
                                    o.addtlString) && (N.isGacSynced = !0,
                                    v.setCookie(m.ADDITIONAL_CONSENT_STRING, "" + o.addtlString, 365)),
                                    N.isPreview && (R.syncOtPreviewCookie(),
                                    pi.bindStopPreviewEvent()),
                                    r = li.syncPreferences(N.consentPreferences, !0),
                                    (N.syncRequired || r.syncRequired) && R.syncAlertBoxCookie(r.alertBoxCookieVal),
                                    R.syncCookieExpiry(),
                                    n = window.OneTrust.dataSubjectParams || {},
                                    (N.dsParams = n).id && pr.setDataSubjectIdV2(n.id, n.isAnonymous),
                                    G.multiVariantTestingEnabled && G.selectedVariant && v.setCookie(m.SELECTED_VARIANT, G.selectedVariant.Id, x.ReconsentFrequencyDays),
                                    [4, ao.initializeIABModule()];
                                case 1:
                                    return e.sent(),
                                    window.OneTrust.Init(!0),
                                    s.DomainData.IsGPPEnabled && jr.initGppConsent(),
                                    [4, f.fetchAssets()];
                                case 2:
                                    return (e.sent(),
                                    ti.initBanner(),
                                    a.assetResolve(!0),
                                    $n.initialiseCssReferences(),
                                    i = R.isIABCrossConsentEnabled(),
                                    (N.syncedValidGrp || N.isIabSynced || N.isGacSynced) && !i && x.NtfyConfig.ShowNtfy && R.isAlertBoxClosedAndValid()) ? (N.ntfyRequired = !0,
                                    [4, Un.getContent()]) : [3, 4];
                                case 3:
                                    e.sent(),
                                    e.label = 4;
                                case 4:
                                    return i || window.OneTrust.LoadBanner(),
                                    [2]
                                }
                                var n
                            })
                        })
                    }(n),
                    O.moduleInitializer.WebFormIntegrationEnabled && (t = window.otStubData,
                    (o = document.createElement("script")).type = "text/javascript",
                    o.src = O.moduleInitializer.WebFormSrcUrl,
                    o.setAttribute("dataId", O.moduleInitializer.TenantGuid),
                    o.setAttribute("worker", O.moduleInitializer.WebFormWorkerUrl),
                    t.charset && o.setAttribute("charset", t.charset),
                    t.crossOrigin && o.setAttribute("crossorigin", t.crossOrigin),
                    document.getElementsByTagName("head")[0].appendChild(o)),
                    [2]
                }
            })
        })
    }()
}();