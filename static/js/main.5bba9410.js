/*! For license information please see main.5bba9410.js.LICENSE.txt */ ! function () {
    "use strict";
    var e = {
            725: function (e) {
                var t = Object.getOwnPropertySymbols,
                    n = Object.prototype.hasOwnProperty,
                    a = Object.prototype.propertyIsEnumerable;

                function r(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                e.exports = function () {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                                return t[e]
                            })).join("")) return !1;
                        var a = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                            a[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a)).join("")
                    } catch (r) {
                        return !1
                    }
                }() ? Object.assign : function (e, o) {
                    for (var i, l, s = r(e), u = 1; u < arguments.length; u++) {
                        for (var c in i = Object(arguments[u])) n.call(i, c) && (s[c] = i[c]);
                        if (t) {
                            l = t(i);
                            for (var d = 0; d < l.length; d++) a.call(i, l[d]) && (s[l[d]] = i[l[d]])
                        }
                    }
                    return s
                }
            },
            463: function (e, t, n) {
                var a = n(791),
                    r = n(725),
                    o = n(296);

                function i(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                if (!a) throw Error(i(227));
                var l = new Set,
                    s = {};

                function u(e, t) {
                    c(e, t), c(e + "Capture", t)
                }

                function c(e, t) {
                    for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e])
                }
                var d = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = Object.prototype.hasOwnProperty,
                    m = {},
                    h = {};

                function v(e, t, n, a, r, o, i) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = a, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
                }
                var g = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
                    g[e] = new v(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function (e) {
                    var t = e[0];
                    g[t] = new v(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
                    g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
                    g[e] = new v(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
                    g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
                    g[e] = new v(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function (e) {
                    g[e] = new v(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function (e) {
                    g[e] = new v(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function (e) {
                    g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var b = /[\-:]([a-z])/g;

                function y(e) {
                    return e[1].toUpperCase()
                }

                function x(e, t, n, a) {
                    var r = g.hasOwnProperty(t) ? g[t] : null;
                    (null !== r ? 0 === r.type : !a && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function (e, t, n, a) {
                        if (null === t || "undefined" === typeof t || function (e, t, n, a) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !a && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, a)) return !0;
                        if (a) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, r, a) && (n = null), a || null === r ? function (e) {
                        return !!p.call(h, e) || !p.call(m, e) && (f.test(e) ? h[e] = !0 : (m[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = null === n ? 3 !== r.type && "" : n : (t = r.attributeName, a = r.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (r = r.type) || 4 === r && !0 === n ? "" : "" + n, a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
                    var t = e.replace(b, y);
                    g[t] = new v(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
                    var t = e.replace(b, y);
                    g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
                    var t = e.replace(b, y);
                    g[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function (e) {
                    g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), g.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
                    g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var w = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    j = 60103,
                    k = 60106,
                    S = 60107,
                    E = 60108,
                    N = 60114,
                    C = 60109,
                    _ = 60110,
                    P = 60112,
                    z = 60113,
                    O = 60120,
                    T = 60115,
                    L = 60116,
                    A = 60121,
                    I = 60128,
                    R = 60129,
                    q = 60130,
                    F = 60131;
                if ("function" === typeof Symbol && Symbol.for) {
                    var D = Symbol.for;
                    j = D("react.element"), k = D("react.portal"), S = D("react.fragment"), E = D("react.strict_mode"), N = D("react.profiler"), C = D("react.provider"), _ = D("react.context"), P = D("react.forward_ref"), z = D("react.suspense"), O = D("react.suspense_list"), T = D("react.memo"), L = D("react.lazy"), A = D("react.block"), D("react.scope"), I = D("react.opaque.id"), R = D("react.debug_trace_mode"), q = D("react.offscreen"), F = D("react.legacy_hidden")
                }
                var M, U = "function" === typeof Symbol && Symbol.iterator;

                function B(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = U && e[U] || e["@@iterator"]) ? e : null
                }

                function V(e) {
                    if (void 0 === M) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        M = t && t[1] || ""
                    }
                    return "\n" + M + e
                }
                var H = !1;

                function W(e, t) {
                    if (!e || H) return "";
                    H = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function () {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function () {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (s) {
                                    var a = s
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (s) {
                                    a = s
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (s) {
                                a = s
                            }
                            e()
                        }
                    } catch (s) {
                        if (s && a && "string" === typeof s.stack) {
                            for (var r = s.stack.split("\n"), o = a.stack.split("\n"), i = r.length - 1, l = o.length - 1; 1 <= i && 0 <= l && r[i] !== o[l];) l--;
                            for (; 1 <= i && 0 <= l; i--, l--)
                                if (r[i] !== o[l]) {
                                    if (1 !== i || 1 !== l)
                                        do {
                                            if (i--, 0 > --l || r[i] !== o[l]) return "\n" + r[i].replace(" at new ", " at ")
                                        } while (1 <= i && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        H = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? V(e) : ""
                }

                function Q(e) {
                    switch (e.tag) {
                        case 5:
                            return V(e.type);
                        case 16:
                            return V("Lazy");
                        case 13:
                            return V("Suspense");
                        case 19:
                            return V("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = W(e.type, !1);
                        case 11:
                            return e = W(e.type.render, !1);
                        case 22:
                            return e = W(e.type._render, !1);
                        case 1:
                            return e = W(e.type, !0);
                        default:
                            return ""
                    }
                }

                function $(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case S:
                            return "Fragment";
                        case k:
                            return "Portal";
                        case N:
                            return "Profiler";
                        case E:
                            return "StrictMode";
                        case z:
                            return "Suspense";
                        case O:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case _:
                            return (e.displayName || "Context") + ".Consumer";
                        case C:
                            return (e._context.displayName || "Context") + ".Provider";
                        case P:
                            var t = e.render;
                            return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case T:
                            return $(e.type);
                        case A:
                            return $(e._render);
                        case L:
                            t = e._payload, e = e._init;
                            try {
                                return $(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function G(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return e;
                        default:
                            return ""
                    }
                }

                function K(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function Y(e) {
                    e._valueTracker || (e._valueTracker = function (e) {
                        var t = K(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            a = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var r = n.get,
                                o = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function () {
                                    return r.call(this)
                                },
                                set: function (e) {
                                    a = "" + e, o.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function () {
                                    return a
                                },
                                setValue: function (e) {
                                    a = "" + e
                                },
                                stopTracking: function () {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function J(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        a = "";
                    return e && (a = K(e) ? e.checked ? "true" : "false" : e.value), (e = a) !== n && (t.setValue(e), !0)
                }

                function X(e) {
                    if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function Z(e, t) {
                    var n = t.checked;
                    return r({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function ee(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        a = null != t.checked ? t.checked : t.defaultChecked;
                    n = G(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: a,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function te(e, t) {
                    null != (t = t.checked) && x(e, "checked", t, !1)
                }

                function ne(e, t) {
                    te(e, t);
                    var n = G(t.value),
                        a = t.type;
                    if (null != n) "number" === a ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === a || "reset" === a) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? re(e, t.type, n) : t.hasOwnProperty("defaultValue") && re(e, t.type, G(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function ae(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var a = t.type;
                        if (!("submit" !== a && "reset" !== a || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function re(e, t, n) {
                    "number" === t && X(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }

                function oe(e, t) {
                    return e = r({
                        children: void 0
                    }, t), (t = function (e) {
                        var t = "";
                        return a.Children.forEach(e, (function (e) {
                            null != e && (t += e)
                        })), t
                    }(t.children)) && (e.children = t), e
                }

                function ie(e, t, n, a) {
                    if (e = e.options, t) {
                        t = {};
                        for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
                        for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && a && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + G(n), t = null, r = 0; r < e.length; r++) {
                            if (e[r].value === n) return e[r].selected = !0, void(a && (e[r].defaultSelected = !0));
                            null !== t || e[r].disabled || (t = e[r])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function le(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                    return r({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function se(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(i(92));
                            if (Array.isArray(n)) {
                                if (!(1 >= n.length)) throw Error(i(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: G(n)
                    }
                }

                function ue(e, t) {
                    var n = G(t.value),
                        a = G(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != a && (e.defaultValue = "" + a)
                }

                function ce(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }
                var de = "http://www.w3.org/1999/xhtml",
                    fe = "http://www.w3.org/2000/svg";

                function pe(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function me(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var he, ve, ge = (ve = function (e, t) {
                    if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((he = he || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = he.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, a) {
                    MSApp.execUnsafeLocalFunction((function () {
                        return ve(e, t)
                    }))
                } : ve);

                function be(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var ye = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    xe = ["Webkit", "ms", "Moz", "O"];

                function we(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || ye.hasOwnProperty(e) && ye[e] ? ("" + t).trim() : t + "px"
                }

                function je(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var a = 0 === n.indexOf("--"),
                                r = we(n, t[n], a);
                            "float" === n && (n = "cssFloat"), a ? e.setProperty(n, r) : e[n] = r
                        }
                }
                Object.keys(ye).forEach((function (e) {
                    xe.forEach((function (t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), ye[t] = ye[e]
                    }))
                }));
                var ke = r({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function Se(e, t) {
                    if (t) {
                        if (ke[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(i(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                    }
                }

                function Ee(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }

                function Ne(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Ce = null,
                    _e = null,
                    Pe = null;

                function ze(e) {
                    if (e = ar(e)) {
                        if ("function" !== typeof Ce) throw Error(i(280));
                        var t = e.stateNode;
                        t && (t = or(t), Ce(e.stateNode, e.type, t))
                    }
                }

                function Oe(e) {
                    _e ? Pe ? Pe.push(e) : Pe = [e] : _e = e
                }

                function Te() {
                    if (_e) {
                        var e = _e,
                            t = Pe;
                        if (Pe = _e = null, ze(e), t)
                            for (e = 0; e < t.length; e++) ze(t[e])
                    }
                }

                function Le(e, t) {
                    return e(t)
                }

                function Ae(e, t, n, a, r) {
                    return e(t, n, a, r)
                }

                function Ie() {}
                var Re = Le,
                    qe = !1,
                    Fe = !1;

                function De() {
                    null === _e && null === Pe || (Ie(), Te())
                }

                function Me(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var a = or(n);
                    if (null === a) return null;
                    n = a[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (a = !a.disabled) || (a = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !a;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var Ue = !1;
                if (d) try {
                    var Be = {};
                    Object.defineProperty(Be, "passive", {
                        get: function () {
                            Ue = !0
                        }
                    }), window.addEventListener("test", Be, Be), window.removeEventListener("test", Be, Be)
                } catch (ve) {
                    Ue = !1
                }

                function Ve(e, t, n, a, r, o, i, l, s) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, u)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var He = !1,
                    We = null,
                    Qe = !1,
                    $e = null,
                    Ge = {
                        onError: function (e) {
                            He = !0, We = e
                        }
                    };

                function Ke(e, t, n, a, r, o, i, l, s) {
                    He = !1, We = null, Ve.apply(Ge, arguments)
                }

                function Ye(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (1026 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function Je(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function Xe(e) {
                    if (Ye(e) !== e) throw Error(i(188))
                }

                function Ze(e) {
                    if (e = function (e) {
                            var t = e.alternate;
                            if (!t) {
                                if (null === (t = Ye(e))) throw Error(i(188));
                                return t !== e ? null : e
                            }
                            for (var n = e, a = t;;) {
                                var r = n.return;
                                if (null === r) break;
                                var o = r.alternate;
                                if (null === o) {
                                    if (null !== (a = r.return)) {
                                        n = a;
                                        continue
                                    }
                                    break
                                }
                                if (r.child === o.child) {
                                    for (o = r.child; o;) {
                                        if (o === n) return Xe(r), e;
                                        if (o === a) return Xe(r), t;
                                        o = o.sibling
                                    }
                                    throw Error(i(188))
                                }
                                if (n.return !== a.return) n = r, a = o;
                                else {
                                    for (var l = !1, s = r.child; s;) {
                                        if (s === n) {
                                            l = !0, n = r, a = o;
                                            break
                                        }
                                        if (s === a) {
                                            l = !0, a = r, n = o;
                                            break
                                        }
                                        s = s.sibling
                                    }
                                    if (!l) {
                                        for (s = o.child; s;) {
                                            if (s === n) {
                                                l = !0, n = o, a = r;
                                                break
                                            }
                                            if (s === a) {
                                                l = !0, a = o, n = r;
                                                break
                                            }
                                            s = s.sibling
                                        }
                                        if (!l) throw Error(i(189))
                                    }
                                }
                                if (n.alternate !== a) throw Error(i(190))
                            }
                            if (3 !== n.tag) throw Error(i(188));
                            return n.stateNode.current === n ? e : t
                        }(e), !e) return null;
                    for (var t = e;;) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        if (t.child) t.child.return = t, t = t.child;
                        else {
                            if (t === e) break;
                            for (; !t.sibling;) {
                                if (!t.return || t.return === e) return null;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return null
                }

                function et(e, t) {
                    for (var n = e.alternate; null !== t;) {
                        if (t === e || t === n) return !0;
                        t = t.return
                    }
                    return !1
                }
                var tt, nt, at, rt, ot = !1,
                    it = [],
                    lt = null,
                    st = null,
                    ut = null,
                    ct = new Map,
                    dt = new Map,
                    ft = [],
                    pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function mt(e, t, n, a, r) {
                    return {
                        blockedOn: e,
                        domEventName: t,
                        eventSystemFlags: 16 | n,
                        nativeEvent: r,
                        targetContainers: [a]
                    }
                }

                function ht(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            lt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            st = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            ut = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            ct.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            dt.delete(t.pointerId)
                    }
                }

                function vt(e, t, n, a, r, o) {
                    return null === e || e.nativeEvent !== o ? (e = mt(t, n, a, r, o), null !== t && (null !== (t = ar(t)) && nt(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, null !== r && -1 === t.indexOf(r) && t.push(r), e)
                }

                function gt(e) {
                    var t = nr(e.target);
                    if (null !== t) {
                        var n = Ye(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = Je(n))) return e.blockedOn = t, void rt(e.lanePriority, (function () {
                                    o.unstable_runWithPriority(e.priority, (function () {
                                        at(n)
                                    }))
                                }))
                            } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function bt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ar(n)) && nt(t), e.blockedOn = n, !1;
                        t.shift()
                    }
                    return !0
                }

                function yt(e, t, n) {
                    bt(e) && n.delete(t)
                }

                function xt() {
                    for (ot = !1; 0 < it.length;) {
                        var e = it[0];
                        if (null !== e.blockedOn) {
                            null !== (e = ar(e.blockedOn)) && tt(e);
                            break
                        }
                        for (var t = e.targetContainers; 0 < t.length;) {
                            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                            if (null !== n) {
                                e.blockedOn = n;
                                break
                            }
                            t.shift()
                        }
                        null === e.blockedOn && it.shift()
                    }
                    null !== lt && bt(lt) && (lt = null), null !== st && bt(st) && (st = null), null !== ut && bt(ut) && (ut = null), ct.forEach(yt), dt.forEach(yt)
                }

                function wt(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, ot || (ot = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, xt)))
                }

                function jt(e) {
                    function t(t) {
                        return wt(t, e)
                    }
                    if (0 < it.length) {
                        wt(it[0], e);
                        for (var n = 1; n < it.length; n++) {
                            var a = it[n];
                            a.blockedOn === e && (a.blockedOn = null)
                        }
                    }
                    for (null !== lt && wt(lt, e), null !== st && wt(st, e), null !== ut && wt(ut, e), ct.forEach(t), dt.forEach(t), n = 0; n < ft.length; n++)(a = ft[n]).blockedOn === e && (a.blockedOn = null);
                    for (; 0 < ft.length && null === (n = ft[0]).blockedOn;) gt(n), null === n.blockedOn && ft.shift()
                }

                function kt(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var St = {
                        animationend: kt("Animation", "AnimationEnd"),
                        animationiteration: kt("Animation", "AnimationIteration"),
                        animationstart: kt("Animation", "AnimationStart"),
                        transitionend: kt("Transition", "TransitionEnd")
                    },
                    Et = {},
                    Nt = {};

                function Ct(e) {
                    if (Et[e]) return Et[e];
                    if (!St[e]) return e;
                    var t, n = St[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Nt) return Et[e] = n[t];
                    return e
                }
                d && (Nt = document.createElement("div").style, "AnimationEvent" in window || (delete St.animationend.animation, delete St.animationiteration.animation, delete St.animationstart.animation), "TransitionEvent" in window || delete St.transitionend.transition);
                var _t = Ct("animationend"),
                    Pt = Ct("animationiteration"),
                    zt = Ct("animationstart"),
                    Ot = Ct("transitionend"),
                    Tt = new Map,
                    Lt = new Map,
                    At = ["abort", "abort", _t, "animationEnd", Pt, "animationIteration", zt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ot, "transitionEnd", "waiting", "waiting"];

                function It(e, t) {
                    for (var n = 0; n < e.length; n += 2) {
                        var a = e[n],
                            r = e[n + 1];
                        r = "on" + (r[0].toUpperCase() + r.slice(1)), Lt.set(a, t), Tt.set(a, r), u(r, [a])
                    }
                }(0, o.unstable_now)();
                var Rt = 8;

                function qt(e) {
                    if (0 !== (1 & e)) return Rt = 15, 1;
                    if (0 !== (2 & e)) return Rt = 14, 2;
                    if (0 !== (4 & e)) return Rt = 13, 4;
                    var t = 24 & e;
                    return 0 !== t ? (Rt = 12, t) : 0 !== (32 & e) ? (Rt = 11, 32) : 0 !== (t = 192 & e) ? (Rt = 10, t) : 0 !== (256 & e) ? (Rt = 9, 256) : 0 !== (t = 3584 & e) ? (Rt = 8, t) : 0 !== (4096 & e) ? (Rt = 7, 4096) : 0 !== (t = 4186112 & e) ? (Rt = 6, t) : 0 !== (t = 62914560 & e) ? (Rt = 5, t) : 67108864 & e ? (Rt = 4, 67108864) : 0 !== (134217728 & e) ? (Rt = 3, 134217728) : 0 !== (t = 805306368 & e) ? (Rt = 2, t) : 0 !== (1073741824 & e) ? (Rt = 1, 1073741824) : (Rt = 8, e)
                }

                function Ft(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return Rt = 0;
                    var a = 0,
                        r = 0,
                        o = e.expiredLanes,
                        i = e.suspendedLanes,
                        l = e.pingedLanes;
                    if (0 !== o) a = o, r = Rt = 15;
                    else if (0 !== (o = 134217727 & n)) {
                        var s = o & ~i;
                        0 !== s ? (a = qt(s), r = Rt) : 0 !== (l &= o) && (a = qt(l), r = Rt)
                    } else 0 !== (o = n & ~i) ? (a = qt(o), r = Rt) : 0 !== l && (a = qt(l), r = Rt);
                    if (0 === a) return 0;
                    if (a = n & ((0 > (a = 31 - Ht(a)) ? 0 : 1 << a) << 1) - 1, 0 !== t && t !== a && 0 === (t & i)) {
                        if (qt(t), r <= Rt) return t;
                        Rt = r
                    }
                    if (0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= a; 0 < t;) r = 1 << (n = 31 - Ht(t)), a |= e[n], t &= ~r;
                    return a
                }

                function Dt(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function Mt(e, t) {
                    switch (e) {
                        case 15:
                            return 1;
                        case 14:
                            return 2;
                        case 12:
                            return 0 === (e = Ut(24 & ~t)) ? Mt(10, t) : e;
                        case 10:
                            return 0 === (e = Ut(192 & ~t)) ? Mt(8, t) : e;
                        case 8:
                            return 0 === (e = Ut(3584 & ~t)) && (0 === (e = Ut(4186112 & ~t)) && (e = 512)), e;
                        case 2:
                            return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t
                    }
                    throw Error(i(358, e))
                }

                function Ut(e) {
                    return e & -e
                }

                function Bt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function Vt(e, t, n) {
                    e.pendingLanes |= t;
                    var a = t - 1;
                    e.suspendedLanes &= a, e.pingedLanes &= a, (e = e.eventTimes)[t = 31 - Ht(t)] = n
                }
                var Ht = Math.clz32 ? Math.clz32 : function (e) {
                        return 0 === e ? 32 : 31 - (Wt(e) / Qt | 0) | 0
                    },
                    Wt = Math.log,
                    Qt = Math.LN2;
                var $t = o.unstable_UserBlockingPriority,
                    Gt = o.unstable_runWithPriority,
                    Kt = !0;

                function Yt(e, t, n, a) {
                    qe || Ie();
                    var r = Xt,
                        o = qe;
                    qe = !0;
                    try {
                        Ae(r, e, t, n, a)
                    } finally {
                        (qe = o) || De()
                    }
                }

                function Jt(e, t, n, a) {
                    Gt($t, Xt.bind(null, e, t, n, a))
                }

                function Xt(e, t, n, a) {
                    var r;
                    if (Kt)
                        if ((r = 0 === (4 & t)) && 0 < it.length && -1 < pt.indexOf(e)) e = mt(null, e, t, n, a), it.push(e);
                        else {
                            var o = Zt(e, t, n, a);
                            if (null === o) r && ht(e, a);
                            else {
                                if (r) {
                                    if (-1 < pt.indexOf(e)) return e = mt(o, e, t, n, a), void it.push(e);
                                    if (function (e, t, n, a, r) {
                                            switch (t) {
                                                case "focusin":
                                                    return lt = vt(lt, e, t, n, a, r), !0;
                                                case "dragenter":
                                                    return st = vt(st, e, t, n, a, r), !0;
                                                case "mouseover":
                                                    return ut = vt(ut, e, t, n, a, r), !0;
                                                case "pointerover":
                                                    var o = r.pointerId;
                                                    return ct.set(o, vt(ct.get(o) || null, e, t, n, a, r)), !0;
                                                case "gotpointercapture":
                                                    return o = r.pointerId, dt.set(o, vt(dt.get(o) || null, e, t, n, a, r)), !0
                                            }
                                            return !1
                                        }(o, e, t, n, a)) return;
                                    ht(e, a)
                                }
                                Ia(e, t, a, null, n)
                            }
                        }
                }

                function Zt(e, t, n, a) {
                    var r = Ne(a);
                    if (null !== (r = nr(r))) {
                        var o = Ye(r);
                        if (null === o) r = null;
                        else {
                            var i = o.tag;
                            if (13 === i) {
                                if (null !== (r = Je(o))) return r;
                                r = null
                            } else if (3 === i) {
                                if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
                                r = null
                            } else o !== r && (r = null)
                        }
                    }
                    return Ia(e, t, a, r, n), null
                }
                var en = null,
                    tn = null,
                    nn = null;

                function an() {
                    if (nn) return nn;
                    var e, t, n = tn,
                        a = n.length,
                        r = "value" in en ? en.value : en.textContent,
                        o = r.length;
                    for (e = 0; e < a && n[e] === r[e]; e++);
                    var i = a - e;
                    for (t = 1; t <= i && n[a - t] === r[o - t]; t++);
                    return nn = r.slice(e, 1 < t ? 1 - t : void 0)
                }

                function rn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function on() {
                    return !0
                }

                function ln() {
                    return !1
                }

                function sn(e) {
                    function t(t, n, a, r, o) {
                        for (var i in this._reactName = t, this._targetInst = a, this.type = n, this.nativeEvent = r, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(r) : r[i]);
                        return this.isDefaultPrevented = (null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue) ? on : ln, this.isPropagationStopped = ln, this
                    }
                    return r(t.prototype, {
                        preventDefault: function () {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = on)
                        },
                        stopPropagation: function () {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = on)
                        },
                        persist: function () {},
                        isPersistent: on
                    }), t
                }
                var un, cn, dn, fn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function (e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    pn = sn(fn),
                    mn = r({}, fn, {
                        view: 0,
                        detail: 0
                    }),
                    hn = sn(mn),
                    vn = r({}, mn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: _n,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function (e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function (e) {
                            return "movementX" in e ? e.movementX : (e !== dn && (dn && "mousemove" === e.type ? (un = e.screenX - dn.screenX, cn = e.screenY - dn.screenY) : cn = un = 0, dn = e), un)
                        },
                        movementY: function (e) {
                            return "movementY" in e ? e.movementY : cn
                        }
                    }),
                    gn = sn(vn),
                    bn = sn(r({}, vn, {
                        dataTransfer: 0
                    })),
                    yn = sn(r({}, mn, {
                        relatedTarget: 0
                    })),
                    xn = sn(r({}, fn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    wn = r({}, fn, {
                        clipboardData: function (e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    jn = sn(wn),
                    kn = sn(r({}, fn, {
                        data: 0
                    })),
                    Sn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    En = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    Nn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Cn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = Nn[e]) && !!t[e]
                }

                function _n() {
                    return Cn
                }
                var Pn = r({}, mn, {
                        key: function (e) {
                            if (e.key) {
                                var t = Sn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = rn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? En[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: _n,
                        charCode: function (e) {
                            return "keypress" === e.type ? rn(e) : 0
                        },
                        keyCode: function (e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function (e) {
                            return "keypress" === e.type ? rn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    zn = sn(Pn),
                    On = sn(r({}, vn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    Tn = sn(r({}, mn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: _n
                    })),
                    Ln = sn(r({}, fn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    An = r({}, vn, {
                        deltaX: function (e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function (e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    In = sn(An),
                    Rn = [9, 13, 27, 32],
                    qn = d && "CompositionEvent" in window,
                    Fn = null;
                d && "documentMode" in document && (Fn = document.documentMode);
                var Dn = d && "TextEvent" in window && !Fn,
                    Mn = d && (!qn || Fn && 8 < Fn && 11 >= Fn),
                    Un = String.fromCharCode(32),
                    Bn = !1;

                function Vn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Rn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Hn(e) {
                    return "object" === typeof (e = e.detail) && "data" in e ? e.data : null
                }
                var Wn = !1;
                var Qn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function $n(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Qn[e.type] : "textarea" === t
                }

                function Gn(e, t, n, a) {
                    Oe(a), 0 < (t = qa(t, "onChange")).length && (n = new pn("onChange", "change", null, n, a), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Kn = null,
                    Yn = null;

                function Jn(e) {
                    Pa(e, 0)
                }

                function Xn(e) {
                    if (J(rr(e))) return e
                }

                function Zn(e, t) {
                    if ("change" === e) return t
                }
                var ea = !1;
                if (d) {
                    var ta;
                    if (d) {
                        var na = "oninput" in document;
                        if (!na) {
                            var aa = document.createElement("div");
                            aa.setAttribute("oninput", "return;"), na = "function" === typeof aa.oninput
                        }
                        ta = na
                    } else ta = !1;
                    ea = ta && (!document.documentMode || 9 < document.documentMode)
                }

                function ra() {
                    Kn && (Kn.detachEvent("onpropertychange", oa), Yn = Kn = null)
                }

                function oa(e) {
                    if ("value" === e.propertyName && Xn(Yn)) {
                        var t = [];
                        if (Gn(t, Yn, e, Ne(e)), e = Jn, qe) e(t);
                        else {
                            qe = !0;
                            try {
                                Le(e, t)
                            } finally {
                                qe = !1, De()
                            }
                        }
                    }
                }

                function ia(e, t, n) {
                    "focusin" === e ? (ra(), Yn = n, (Kn = t).attachEvent("onpropertychange", oa)) : "focusout" === e && ra()
                }

                function la(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xn(Yn)
                }

                function sa(e, t) {
                    if ("click" === e) return Xn(t)
                }

                function ua(e, t) {
                    if ("input" === e || "change" === e) return Xn(t)
                }
                var ca = "function" === typeof Object.is ? Object.is : function (e, t) {
                        return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                    },
                    da = Object.prototype.hasOwnProperty;

                function fa(e, t) {
                    if (ca(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        a = Object.keys(t);
                    if (n.length !== a.length) return !1;
                    for (a = 0; a < n.length; a++)
                        if (!da.call(t, n[a]) || !ca(e[n[a]], t[n[a]])) return !1;
                    return !0
                }

                function pa(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function ma(e, t) {
                    var n, a = pa(e);
                    for (e = 0; a;) {
                        if (3 === a.nodeType) {
                            if (n = e + a.textContent.length, e <= t && n >= t) return {
                                node: a,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; a;) {
                                if (a.nextSibling) {
                                    a = a.nextSibling;
                                    break e
                                }
                                a = a.parentNode
                            }
                            a = void 0
                        }
                        a = pa(a)
                    }
                }

                function ha(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? ha(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function va() {
                    for (var e = window, t = X(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (a) {
                            n = !1
                        }
                        if (!n) break;
                        t = X((e = t.contentWindow).document)
                    }
                    return t
                }

                function ga(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }
                var ba = d && "documentMode" in document && 11 >= document.documentMode,
                    ya = null,
                    xa = null,
                    wa = null,
                    ja = !1;

                function ka(e, t, n) {
                    var a = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    ja || null == ya || ya !== X(a) || ("selectionStart" in (a = ya) && ga(a) ? a = {
                        start: a.selectionStart,
                        end: a.selectionEnd
                    } : a = {
                        anchorNode: (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: a.anchorOffset,
                        focusNode: a.focusNode,
                        focusOffset: a.focusOffset
                    }, wa && fa(wa, a) || (wa = a, 0 < (a = qa(xa, "onSelect")).length && (t = new pn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: a
                    }), t.target = ya)))
                }
                It("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), It("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), It(At, 2);
                for (var Sa = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Ea = 0; Ea < Sa.length; Ea++) Lt.set(Sa[Ea], 0);
                c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Na = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Ca = new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));

                function _a(e, t, n) {
                    var a = e.type || "unknown-event";
                    e.currentTarget = n,
                        function (e, t, n, a, r, o, l, s, u) {
                            if (Ke.apply(this, arguments), He) {
                                if (!He) throw Error(i(198));
                                var c = We;
                                He = !1, We = null, Qe || (Qe = !0, $e = c)
                            }
                        }(a, t, void 0, e), e.currentTarget = null
                }

                function Pa(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n],
                            r = a.event;
                        a = a.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var i = a.length - 1; 0 <= i; i--) {
                                    var l = a[i],
                                        s = l.instance,
                                        u = l.currentTarget;
                                    if (l = l.listener, s !== o && r.isPropagationStopped()) break e;
                                    _a(r, l, u), o = s
                                } else
                                    for (i = 0; i < a.length; i++) {
                                        if (s = (l = a[i]).instance, u = l.currentTarget, l = l.listener, s !== o && r.isPropagationStopped()) break e;
                                        _a(r, l, u), o = s
                                    }
                        }
                    }
                    if (Qe) throw e = $e, Qe = !1, $e = null, e
                }

                function za(e, t) {
                    var n = ir(t),
                        a = e + "__bubble";
                    n.has(a) || (Aa(t, e, 2, !1), n.add(a))
                }
                var Oa = "_reactListening" + Math.random().toString(36).slice(2);

                function Ta(e) {
                    e[Oa] || (e[Oa] = !0, l.forEach((function (t) {
                        Ca.has(t) || La(t, !1, e, null), La(t, !0, e, null)
                    })))
                }

                function La(e, t, n, a) {
                    var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        o = n;
                    if ("selectionchange" === e && 9 !== n.nodeType && (o = n.ownerDocument), null !== a && !t && Ca.has(e)) {
                        if ("scroll" !== e) return;
                        r |= 2, o = a
                    }
                    var i = ir(o),
                        l = e + "__" + (t ? "capture" : "bubble");
                    i.has(l) || (t && (r |= 4), Aa(o, e, r, t), i.add(l))
                }

                function Aa(e, t, n, a) {
                    var r = Lt.get(t);
                    switch (void 0 === r ? 2 : r) {
                        case 0:
                            r = Yt;
                            break;
                        case 1:
                            r = Jt;
                            break;
                        default:
                            r = Xt
                    }
                    n = r.bind(null, t, n, e), r = void 0, !Ue || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (r = !0), a ? void 0 !== r ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: r
                    }) : e.addEventListener(t, n, !0) : void 0 !== r ? e.addEventListener(t, n, {
                        passive: r
                    }) : e.addEventListener(t, n, !1)
                }

                function Ia(e, t, n, a, r) {
                    var o = a;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== a) e: for (;;) {
                        if (null === a) return;
                        var i = a.tag;
                        if (3 === i || 4 === i) {
                            var l = a.stateNode.containerInfo;
                            if (l === r || 8 === l.nodeType && l.parentNode === r) break;
                            if (4 === i)
                                for (i = a.return; null !== i;) {
                                    var s = i.tag;
                                    if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === r || 8 === s.nodeType && s.parentNode === r)) return;
                                    i = i.return
                                }
                            for (; null !== l;) {
                                if (null === (i = nr(l))) return;
                                if (5 === (s = i.tag) || 6 === s) {
                                    a = o = i;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        a = a.return
                    }! function (e, t, n) {
                        if (Fe) return e(t, n);
                        Fe = !0;
                        try {
                            Re(e, t, n)
                        } finally {
                            Fe = !1, De()
                        }
                    }((function () {
                        var a = o,
                            r = Ne(n),
                            i = [];
                        e: {
                            var l = Tt.get(e);
                            if (void 0 !== l) {
                                var s = pn,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === rn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        s = zn;
                                        break;
                                    case "focusin":
                                        u = "focus", s = yn;
                                        break;
                                    case "focusout":
                                        u = "blur", s = yn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        s = yn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        s = gn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        s = bn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        s = Tn;
                                        break;
                                    case _t:
                                    case Pt:
                                    case zt:
                                        s = xn;
                                        break;
                                    case Ot:
                                        s = Ln;
                                        break;
                                    case "scroll":
                                        s = hn;
                                        break;
                                    case "wheel":
                                        s = In;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        s = jn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        s = On
                                }
                                var c = 0 !== (4 & t),
                                    d = !c && "scroll" === e,
                                    f = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, m = a; null !== m;) {
                                    var h = (p = m).stateNode;
                                    if (5 === p.tag && null !== h && (p = h, null !== f && (null != (h = Me(m, f)) && c.push(Ra(m, h, p)))), d) break;
                                    m = m.return
                                }
                                0 < c.length && (l = new s(l, u, null, n, r), i.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || 0 !== (16 & t) || !(u = n.relatedTarget || n.fromElement) || !nr(u) && !u[er]) && (s || l) && (l = r.window === r ? r : (l = r.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = a, null !== (u = (u = n.relatedTarget || n.toElement) ? nr(u) : null) && (u !== (d = Ye(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = a), s !== u)) {
                                if (c = gn, h = "onMouseLeave", f = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = On, h = "onPointerLeave", f = "onPointerEnter", m = "pointer"), d = null == s ? l : rr(s), p = null == u ? l : rr(u), (l = new c(h, m + "leave", s, n, r)).target = d, l.relatedTarget = p, h = null, nr(r) === a && ((c = new c(f, m + "enter", u, n, r)).target = p, c.relatedTarget = d, h = c), d = h, s && u) e: {
                                    for (f = u, m = 0, p = c = s; p; p = Fa(p)) m++;
                                    for (p = 0, h = f; h; h = Fa(h)) p++;
                                    for (; 0 < m - p;) c = Fa(c),
                                    m--;
                                    for (; 0 < p - m;) f = Fa(f),
                                    p--;
                                    for (; m--;) {
                                        if (c === f || null !== f && c === f.alternate) break e;
                                        c = Fa(c), f = Fa(f)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== s && Da(i, l, s, c, !1), null !== u && null !== d && Da(i, d, u, c, !0)
                            }
                            if ("select" === (s = (l = a ? rr(a) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var v = Zn;
                            else if ($n(l))
                                if (ea) v = ua;
                                else {
                                    v = la;
                                    var g = ia
                                }
                            else(s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = sa);
                            switch (v && (v = v(e, a)) ? Gn(i, v, n, r) : (g && g(e, l, a), "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && re(l, "number", l.value)), g = a ? rr(a) : window, e) {
                                case "focusin":
                                    ($n(g) || "true" === g.contentEditable) && (ya = g, xa = a, wa = null);
                                    break;
                                case "focusout":
                                    wa = xa = ya = null;
                                    break;
                                case "mousedown":
                                    ja = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    ja = !1, ka(i, n, r);
                                    break;
                                case "selectionchange":
                                    if (ba) break;
                                case "keydown":
                                case "keyup":
                                    ka(i, n, r)
                            }
                            var b;
                            if (qn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var y = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        y = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        y = "onCompositionUpdate";
                                        break e
                                }
                                y = void 0
                            }
                            else Wn ? Vn(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
                            y && (Mn && "ko" !== n.locale && (Wn || "onCompositionStart" !== y ? "onCompositionEnd" === y && Wn && (b = an()) : (tn = "value" in (en = r) ? en.value : en.textContent, Wn = !0)), 0 < (g = qa(a, y)).length && (y = new kn(y, e, null, n, r), i.push({
                                event: y,
                                listeners: g
                            }), b ? y.data = b : null !== (b = Hn(n)) && (y.data = b))), (b = Dn ? function (e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Hn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Bn = !0, Un);
                                    case "textInput":
                                        return (e = t.data) === Un && Bn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function (e, t) {
                                if (Wn) return "compositionend" === e || !qn && Vn(e, t) ? (e = an(), nn = tn = en = null, Wn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Mn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (a = qa(a, "onBeforeInput")).length && (r = new kn("onBeforeInput", "beforeinput", null, n, r), i.push({
                                event: r,
                                listeners: a
                            }), r.data = b))
                        }
                        Pa(i, t)
                    }))
                }

                function Ra(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function qa(e, t) {
                    for (var n = t + "Capture", a = []; null !== e;) {
                        var r = e,
                            o = r.stateNode;
                        5 === r.tag && null !== o && (r = o, null != (o = Me(e, n)) && a.unshift(Ra(e, o, r)), null != (o = Me(e, t)) && a.push(Ra(e, o, r))), e = e.return
                    }
                    return a
                }

                function Fa(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Da(e, t, n, a, r) {
                    for (var o = t._reactName, i = []; null !== n && n !== a;) {
                        var l = n,
                            s = l.alternate,
                            u = l.stateNode;
                        if (null !== s && s === a) break;
                        5 === l.tag && null !== u && (l = u, r ? null != (s = Me(n, o)) && i.unshift(Ra(n, s, l)) : r || null != (s = Me(n, o)) && i.push(Ra(n, s, l))), n = n.return
                    }
                    0 !== i.length && e.push({
                        event: t,
                        listeners: i
                    })
                }

                function Ma() {}
                var Ua = null,
                    Ba = null;

                function Va(e, t) {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!t.autoFocus
                    }
                    return !1
                }

                function Ha(e, t) {
                    return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var Wa = "function" === typeof setTimeout ? setTimeout : void 0,
                    Qa = "function" === typeof clearTimeout ? clearTimeout : void 0;

                function $a(e) {
                    1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
                }

                function Ga(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break
                    }
                    return e
                }

                function Ka(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var Ya = 0;
                var Ja = Math.random().toString(36).slice(2),
                    Xa = "__reactFiber$" + Ja,
                    Za = "__reactProps$" + Ja,
                    er = "__reactContainer$" + Ja,
                    tr = "__reactEvents$" + Ja;

                function nr(e) {
                    var t = e[Xa];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[er] || n[Xa]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = Ka(e); null !== e;) {
                                    if (n = e[Xa]) return n;
                                    e = Ka(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ar(e) {
                    return !(e = e[Xa] || e[er]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function rr(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(i(33))
                }

                function or(e) {
                    return e[Za] || null
                }

                function ir(e) {
                    var t = e[tr];
                    return void 0 === t && (t = e[tr] = new Set), t
                }
                var lr = [],
                    sr = -1;

                function ur(e) {
                    return {
                        current: e
                    }
                }

                function cr(e) {
                    0 > sr || (e.current = lr[sr], lr[sr] = null, sr--)
                }

                function dr(e, t) {
                    sr++, lr[sr] = e.current, e.current = t
                }
                var fr = {},
                    pr = ur(fr),
                    mr = ur(!1),
                    hr = fr;

                function vr(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return fr;
                    var a = e.stateNode;
                    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
                    var r, o = {};
                    for (r in n) o[r] = t[r];
                    return a && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
                }

                function gr(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function br() {
                    cr(mr), cr(pr)
                }

                function yr(e, t, n) {
                    if (pr.current !== fr) throw Error(i(168));
                    dr(pr, t), dr(mr, n)
                }

                function xr(e, t, n) {
                    var a = e.stateNode;
                    if (e = t.childContextTypes, "function" !== typeof a.getChildContext) return n;
                    for (var o in a = a.getChildContext())
                        if (!(o in e)) throw Error(i(108, $(t) || "Unknown", o));
                    return r({}, n, a)
                }

                function wr(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fr, hr = pr.current, dr(pr, e), dr(mr, mr.current), !0
                }

                function jr(e, t, n) {
                    var a = e.stateNode;
                    if (!a) throw Error(i(169));
                    n ? (e = xr(e, t, hr), a.__reactInternalMemoizedMergedChildContext = e, cr(mr), cr(pr), dr(pr, e)) : cr(mr), dr(mr, n)
                }
                var kr = null,
                    Sr = null,
                    Er = o.unstable_runWithPriority,
                    Nr = o.unstable_scheduleCallback,
                    Cr = o.unstable_cancelCallback,
                    _r = o.unstable_shouldYield,
                    Pr = o.unstable_requestPaint,
                    zr = o.unstable_now,
                    Or = o.unstable_getCurrentPriorityLevel,
                    Tr = o.unstable_ImmediatePriority,
                    Lr = o.unstable_UserBlockingPriority,
                    Ar = o.unstable_NormalPriority,
                    Ir = o.unstable_LowPriority,
                    Rr = o.unstable_IdlePriority,
                    qr = {},
                    Fr = void 0 !== Pr ? Pr : function () {},
                    Dr = null,
                    Mr = null,
                    Ur = !1,
                    Br = zr(),
                    Vr = 1e4 > Br ? zr : function () {
                        return zr() - Br
                    };

                function Hr() {
                    switch (Or()) {
                        case Tr:
                            return 99;
                        case Lr:
                            return 98;
                        case Ar:
                            return 97;
                        case Ir:
                            return 96;
                        case Rr:
                            return 95;
                        default:
                            throw Error(i(332))
                    }
                }

                function Wr(e) {
                    switch (e) {
                        case 99:
                            return Tr;
                        case 98:
                            return Lr;
                        case 97:
                            return Ar;
                        case 96:
                            return Ir;
                        case 95:
                            return Rr;
                        default:
                            throw Error(i(332))
                    }
                }

                function Qr(e, t) {
                    return e = Wr(e), Er(e, t)
                }

                function $r(e, t, n) {
                    return e = Wr(e), Nr(e, t, n)
                }

                function Gr() {
                    if (null !== Mr) {
                        var e = Mr;
                        Mr = null, Cr(e)
                    }
                    Kr()
                }

                function Kr() {
                    if (!Ur && null !== Dr) {
                        Ur = !0;
                        var e = 0;
                        try {
                            var t = Dr;
                            Qr(99, (function () {
                                for (; e < t.length; e++) {
                                    var n = t[e];
                                    do {
                                        n = n(!0)
                                    } while (null !== n)
                                }
                            })), Dr = null
                        } catch (n) {
                            throw null !== Dr && (Dr = Dr.slice(e + 1)), Nr(Tr, Gr), n
                        } finally {
                            Ur = !1
                        }
                    }
                }
                var Yr = w.ReactCurrentBatchConfig;

                function Jr(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = r({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var Xr = ur(null),
                    Zr = null,
                    eo = null,
                    to = null;

                function no() {
                    to = eo = Zr = null
                }

                function ao(e) {
                    var t = Xr.current;
                    cr(Xr), e.type._context._currentValue = t
                }

                function ro(e, t) {
                    for (; null !== e;) {
                        var n = e.alternate;
                        if ((e.childLanes & t) === t) {
                            if (null === n || (n.childLanes & t) === t) break;
                            n.childLanes |= t
                        } else e.childLanes |= t, null !== n && (n.childLanes |= t);
                        e = e.return
                    }
                }

                function oo(e, t) {
                    Zr = e, to = eo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (qi = !0), e.firstContext = null)
                }

                function io(e, t) {
                    if (to !== e && !1 !== t && 0 !== t)
                        if ("number" === typeof t && 1073741823 !== t || (to = e, t = 1073741823), t = {
                                context: e,
                                observedBits: t,
                                next: null
                            }, null === eo) {
                            if (null === Zr) throw Error(i(308));
                            eo = t, Zr.dependencies = {
                                lanes: 0,
                                firstContext: t,
                                responders: null
                            }
                        } else eo = eo.next = t;
                    return e._currentValue
                }
                var lo = !1;

                function so(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null
                        },
                        effects: null
                    }
                }

                function uo(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function co(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function fo(e, t) {
                    if (null !== (e = e.updateQueue)) {
                        var n = (e = e.shared).pending;
                        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                    }
                }

                function po(e, t) {
                    var n = e.updateQueue,
                        a = e.alternate;
                    if (null !== a && n === (a = a.updateQueue)) {
                        var r = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var i = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === o ? r = o = i : o = o.next = i, n = n.next
                            } while (null !== n);
                            null === o ? r = o = t : o = o.next = t
                        } else r = o = t;
                        return n = {
                            baseState: a.baseState,
                            firstBaseUpdate: r,
                            lastBaseUpdate: o,
                            shared: a.shared,
                            effects: a.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function mo(e, t, n, a) {
                    var o = e.updateQueue;
                    lo = !1;
                    var i = o.firstBaseUpdate,
                        l = o.lastBaseUpdate,
                        s = o.shared.pending;
                    if (null !== s) {
                        o.shared.pending = null;
                        var u = s,
                            c = u.next;
                        u.next = null, null === l ? i = c : l.next = c, l = u;
                        var d = e.alternate;
                        if (null !== d) {
                            var f = (d = d.updateQueue).lastBaseUpdate;
                            f !== l && (null === f ? d.firstBaseUpdate = c : f.next = c, d.lastBaseUpdate = u)
                        }
                    }
                    if (null !== i) {
                        for (f = o.baseState, l = 0, d = c = u = null;;) {
                            s = i.lane;
                            var p = i.eventTime;
                            if ((a & s) === s) {
                                null !== d && (d = d.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: i.tag,
                                    payload: i.payload,
                                    callback: i.callback,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        h = i;
                                    switch (s = t, p = n, h.tag) {
                                        case 1:
                                            if ("function" === typeof (m = h.payload)) {
                                                f = m.call(p, f, s);
                                                break e
                                            }
                                            f = m;
                                            break e;
                                        case 3:
                                            m.flags = -4097 & m.flags | 64;
                                        case 0:
                                            if (null === (s = "function" === typeof (m = h.payload) ? m.call(p, f, s) : m) || void 0 === s) break e;
                                            f = r({}, f, s);
                                            break e;
                                        case 2:
                                            lo = !0
                                    }
                                }
                                null !== i.callback && (e.flags |= 32, null === (s = o.effects) ? o.effects = [i] : s.push(i))
                            } else p = {
                                eventTime: p,
                                lane: s,
                                tag: i.tag,
                                payload: i.payload,
                                callback: i.callback,
                                next: null
                            }, null === d ? (c = d = p, u = f) : d = d.next = p, l |= s;
                            if (null === (i = i.next)) {
                                if (null === (s = o.shared.pending)) break;
                                i = s.next, s.next = null, o.lastBaseUpdate = s, o.shared.pending = null
                            }
                        }
                        null === d && (u = f), o.baseState = u, o.firstBaseUpdate = c, o.lastBaseUpdate = d, Ul |= l, e.lanes = l, e.memoizedState = f
                    }
                }

                function ho(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var a = e[t],
                                r = a.callback;
                            if (null !== r) {
                                if (a.callback = null, a = n, "function" !== typeof r) throw Error(i(191, r));
                                r.call(a)
                            }
                        }
                }
                var vo = (new a.Component).refs;

                function go(e, t, n, a) {
                    n = null === (n = n(a, t = e.memoizedState)) || void 0 === n ? t : r({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var bo = {
                    isMounted: function (e) {
                        return !!(e = e._reactInternals) && Ye(e) === e
                    },
                    enqueueSetState: function (e, t, n) {
                        e = e._reactInternals;
                        var a = fs(),
                            r = ps(e),
                            o = co(a, r);
                        o.payload = t, void 0 !== n && null !== n && (o.callback = n), fo(e, o), ms(e, r, a)
                    },
                    enqueueReplaceState: function (e, t, n) {
                        e = e._reactInternals;
                        var a = fs(),
                            r = ps(e),
                            o = co(a, r);
                        o.tag = 1, o.payload = t, void 0 !== n && null !== n && (o.callback = n), fo(e, o), ms(e, r, a)
                    },
                    enqueueForceUpdate: function (e, t) {
                        e = e._reactInternals;
                        var n = fs(),
                            a = ps(e),
                            r = co(n, a);
                        r.tag = 2, void 0 !== t && null !== t && (r.callback = t), fo(e, r), ms(e, a, n)
                    }
                };

                function yo(e, t, n, a, r, o, i) {
                    return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(a, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!fa(n, a) || !fa(r, o))
                }

                function xo(e, t, n) {
                    var a = !1,
                        r = fr,
                        o = t.contextType;
                    return "object" === typeof o && null !== o ? o = io(o) : (r = gr(t) ? hr : pr.current, o = (a = null !== (a = t.contextTypes) && void 0 !== a) ? vr(e, r) : fr), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = bo, e.stateNode = t, t._reactInternals = e, a && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = o), t
                }

                function wo(e, t, n, a) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, a), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && bo.enqueueReplaceState(t, t.state, null)
                }

                function jo(e, t, n, a) {
                    var r = e.stateNode;
                    r.props = n, r.state = e.memoizedState, r.refs = vo, so(e);
                    var o = t.contextType;
                    "object" === typeof o && null !== o ? r.context = io(o) : (o = gr(t) ? hr : pr.current, r.context = vr(e, o)), mo(e, n, r, a), r.state = e.memoizedState, "function" === typeof (o = t.getDerivedStateFromProps) && (go(e, t, o, n), r.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof r.getSnapshotBeforeUpdate || "function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount || (t = r.state, "function" === typeof r.componentWillMount && r.componentWillMount(), "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), t !== r.state && bo.enqueueReplaceState(r, r.state, null), mo(e, n, r, a), r.state = e.memoizedState), "function" === typeof r.componentDidMount && (e.flags |= 4)
                }
                var ko = Array.isArray;

                function So(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(i(309));
                                var a = n.stateNode
                            }
                            if (!a) throw Error(i(147, e));
                            var r = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === r ? t.ref : (t = function (e) {
                                var t = a.refs;
                                t === vo && (t = a.refs = {}), null === e ? delete t[r] : t[r] = e
                            }, t._stringRef = r, t)
                        }
                        if ("string" !== typeof e) throw Error(i(284));
                        if (!n._owner) throw Error(i(290, e))
                    }
                    return e
                }

                function Eo(e, t) {
                    if ("textarea" !== e.type) throw Error(i(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
                }

                function No(e) {
                    function t(t, n) {
                        if (e) {
                            var a = t.lastEffect;
                            null !== a ? (a.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.flags = 8
                        }
                    }

                    function n(n, a) {
                        if (!e) return null;
                        for (; null !== a;) t(n, a), a = a.sibling;
                        return null
                    }

                    function a(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function r(e, t) {
                        return (e = Qs(e, t)).index = 0, e.sibling = null, e
                    }

                    function o(t, n, a) {
                        return t.index = a, e ? null !== (a = t.alternate) ? (a = a.index) < n ? (t.flags = 2, n) : a : (t.flags = 2, n) : n
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags = 2), t
                    }

                    function s(e, t, n, a) {
                        return null === t || 6 !== t.tag ? ((t = Ys(n, e.mode, a)).return = e, t) : ((t = r(t, n)).return = e, t)
                    }

                    function u(e, t, n, a) {
                        return null !== t && t.elementType === n.type ? ((a = r(t, n.props)).ref = So(e, t, n), a.return = e, a) : ((a = $s(n.type, n.key, n.props, null, e.mode, a)).ref = So(e, t, n), a.return = e, a)
                    }

                    function c(e, t, n, a) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Js(n, e.mode, a)).return = e, t) : ((t = r(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, a, o) {
                        return null === t || 7 !== t.tag ? ((t = Gs(n, e.mode, a, o)).return = e, t) : ((t = r(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" === typeof t || "number" === typeof t) return (t = Ys("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case j:
                                    return (n = $s(t.type, t.key, t.props, null, e.mode, n)).ref = So(e, null, t), n.return = e, n;
                                case k:
                                    return (t = Js(t, e.mode, n)).return = e, t
                            }
                            if (ko(t) || B(t)) return (t = Gs(t, e.mode, n, null)).return = e, t;
                            Eo(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, a) {
                        var r = null !== t ? t.key : null;
                        if ("string" === typeof n || "number" === typeof n) return null !== r ? null : s(e, t, "" + n, a);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case j:
                                    return n.key === r ? n.type === S ? d(e, t, n.props.children, a, r) : u(e, t, n, a) : null;
                                case k:
                                    return n.key === r ? c(e, t, n, a) : null
                            }
                            if (ko(n) || B(n)) return null !== r ? null : d(e, t, n, a, null);
                            Eo(e, n)
                        }
                        return null
                    }

                    function m(e, t, n, a, r) {
                        if ("string" === typeof a || "number" === typeof a) return s(t, e = e.get(n) || null, "" + a, r);
                        if ("object" === typeof a && null !== a) {
                            switch (a.$$typeof) {
                                case j:
                                    return e = e.get(null === a.key ? n : a.key) || null, a.type === S ? d(t, e, a.props.children, r, a.key) : u(t, e, a, r);
                                case k:
                                    return c(t, e = e.get(null === a.key ? n : a.key) || null, a, r)
                            }
                            if (ko(a) || B(a)) return d(t, e = e.get(n) || null, a, r, null);
                            Eo(t, a)
                        }
                        return null
                    }

                    function h(r, i, l, s) {
                        for (var u = null, c = null, d = i, h = i = 0, v = null; null !== d && h < l.length; h++) {
                            d.index > h ? (v = d, d = null) : v = d.sibling;
                            var g = p(r, d, l[h], s);
                            if (null === g) {
                                null === d && (d = v);
                                break
                            }
                            e && d && null === g.alternate && t(r, d), i = o(g, i, h), null === c ? u = g : c.sibling = g, c = g, d = v
                        }
                        if (h === l.length) return n(r, d), u;
                        if (null === d) {
                            for (; h < l.length; h++) null !== (d = f(r, l[h], s)) && (i = o(d, i, h), null === c ? u = d : c.sibling = d, c = d);
                            return u
                        }
                        for (d = a(r, d); h < l.length; h++) null !== (v = m(d, r, h, l[h], s)) && (e && null !== v.alternate && d.delete(null === v.key ? h : v.key), i = o(v, i, h), null === c ? u = v : c.sibling = v, c = v);
                        return e && d.forEach((function (e) {
                            return t(r, e)
                        })), u
                    }

                    function v(r, l, s, u) {
                        var c = B(s);
                        if ("function" !== typeof c) throw Error(i(150));
                        if (null == (s = c.call(s))) throw Error(i(151));
                        for (var d = c = null, h = l, v = l = 0, g = null, b = s.next(); null !== h && !b.done; v++, b = s.next()) {
                            h.index > v ? (g = h, h = null) : g = h.sibling;
                            var y = p(r, h, b.value, u);
                            if (null === y) {
                                null === h && (h = g);
                                break
                            }
                            e && h && null === y.alternate && t(r, h), l = o(y, l, v), null === d ? c = y : d.sibling = y, d = y, h = g
                        }
                        if (b.done) return n(r, h), c;
                        if (null === h) {
                            for (; !b.done; v++, b = s.next()) null !== (b = f(r, b.value, u)) && (l = o(b, l, v), null === d ? c = b : d.sibling = b, d = b);
                            return c
                        }
                        for (h = a(r, h); !b.done; v++, b = s.next()) null !== (b = m(h, r, v, b.value, u)) && (e && null !== b.alternate && h.delete(null === b.key ? v : b.key), l = o(b, l, v), null === d ? c = b : d.sibling = b, d = b);
                        return e && h.forEach((function (e) {
                            return t(r, e)
                        })), c
                    }
                    return function (e, a, o, s) {
                        var u = "object" === typeof o && null !== o && o.type === S && null === o.key;
                        u && (o = o.props.children);
                        var c = "object" === typeof o && null !== o;
                        if (c) switch (o.$$typeof) {
                            case j:
                                e: {
                                    for (c = o.key, u = a; null !== u;) {
                                        if (u.key === c) {
                                            if (7 === u.tag) {
                                                if (o.type === S) {
                                                    n(e, u.sibling), (a = r(u, o.props.children)).return = e, e = a;
                                                    break e
                                                }
                                            } else if (u.elementType === o.type) {
                                                n(e, u.sibling), (a = r(u, o.props)).ref = So(e, u, o), a.return = e, e = a;
                                                break e
                                            }
                                            n(e, u);
                                            break
                                        }
                                        t(e, u), u = u.sibling
                                    }
                                    o.type === S ? ((a = Gs(o.props.children, e.mode, s, o.key)).return = e, e = a) : ((s = $s(o.type, o.key, o.props, null, e.mode, s)).ref = So(e, a, o), s.return = e, e = s)
                                }
                                return l(e);
                            case k:
                                e: {
                                    for (u = o.key; null !== a;) {
                                        if (a.key === u) {
                                            if (4 === a.tag && a.stateNode.containerInfo === o.containerInfo && a.stateNode.implementation === o.implementation) {
                                                n(e, a.sibling), (a = r(a, o.children || [])).return = e, e = a;
                                                break e
                                            }
                                            n(e, a);
                                            break
                                        }
                                        t(e, a), a = a.sibling
                                    }(a = Js(o, e.mode, s)).return = e,
                                    e = a
                                }
                                return l(e)
                        }
                        if ("string" === typeof o || "number" === typeof o) return o = "" + o, null !== a && 6 === a.tag ? (n(e, a.sibling), (a = r(a, o)).return = e, e = a) : (n(e, a), (a = Ys(o, e.mode, s)).return = e, e = a), l(e);
                        if (ko(o)) return h(e, a, o, s);
                        if (B(o)) return v(e, a, o, s);
                        if (c && Eo(e, o), "undefined" === typeof o && !u) switch (e.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(i(152, $(e.type) || "Component"))
                        }
                        return n(e, a)
                    }
                }
                var Co = No(!0),
                    _o = No(!1),
                    Po = {},
                    zo = ur(Po),
                    Oo = ur(Po),
                    To = ur(Po);

                function Lo(e) {
                    if (e === Po) throw Error(i(174));
                    return e
                }

                function Ao(e, t) {
                    switch (dr(To, t), dr(Oo, e), dr(zo, Po), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
                            break;
                        default:
                            t = me(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    cr(zo), dr(zo, t)
                }

                function Io() {
                    cr(zo), cr(Oo), cr(To)
                }

                function Ro(e) {
                    Lo(To.current);
                    var t = Lo(zo.current),
                        n = me(t, e.type);
                    t !== n && (dr(Oo, e), dr(zo, n))
                }

                function qo(e) {
                    Oo.current === e && (cr(zo), cr(Oo))
                }
                var Fo = ur(0);

                function Do(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (64 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var Mo = null,
                    Uo = null,
                    Bo = !1;

                function Vo(e, t) {
                    var n = Hs(5, null, null, 0);
                    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
                }

                function Ho(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                        default:
                            return !1
                    }
                }

                function Wo(e) {
                    if (Bo) {
                        var t = Uo;
                        if (t) {
                            var n = t;
                            if (!Ho(e, t)) {
                                if (!(t = Ga(n.nextSibling)) || !Ho(e, t)) return e.flags = -1025 & e.flags | 2, Bo = !1, void(Mo = e);
                                Vo(Mo, n)
                            }
                            Mo = e, Uo = Ga(t.firstChild)
                        } else e.flags = -1025 & e.flags | 2, Bo = !1, Mo = e
                    }
                }

                function Qo(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    Mo = e
                }

                function $o(e) {
                    if (e !== Mo) return !1;
                    if (!Bo) return Qo(e), Bo = !0, !1;
                    var t = e.type;
                    if (5 !== e.tag || "head" !== t && "body" !== t && !Ha(t, e.memoizedProps))
                        for (t = Uo; t;) Vo(e, t), t = Ga(t.nextSibling);
                    if (Qo(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            Uo = Ga(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            Uo = null
                        }
                    } else Uo = Mo ? Ga(e.stateNode.nextSibling) : null;
                    return !0
                }

                function Go() {
                    Uo = Mo = null, Bo = !1
                }
                var Ko = [];

                function Yo() {
                    for (var e = 0; e < Ko.length; e++) Ko[e]._workInProgressVersionPrimary = null;
                    Ko.length = 0
                }
                var Jo = w.ReactCurrentDispatcher,
                    Xo = w.ReactCurrentBatchConfig,
                    Zo = 0,
                    ei = null,
                    ti = null,
                    ni = null,
                    ai = !1,
                    ri = !1;

                function oi() {
                    throw Error(i(321))
                }

                function ii(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!ca(e[n], t[n])) return !1;
                    return !0
                }

                function li(e, t, n, a, r, o) {
                    if (Zo = o, ei = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jo.current = null === e || null === e.memoizedState ? Li : Ai, e = n(a, r), ri) {
                        o = 0;
                        do {
                            if (ri = !1, !(25 > o)) throw Error(i(301));
                            o += 1, ni = ti = null, t.updateQueue = null, Jo.current = Ii, e = n(a, r)
                        } while (ri)
                    }
                    if (Jo.current = Ti, t = null !== ti && null !== ti.next, Zo = 0, ni = ti = ei = null, ai = !1, t) throw Error(i(300));
                    return e
                }

                function si() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === ni ? ei.memoizedState = ni = e : ni = ni.next = e, ni
                }

                function ui() {
                    if (null === ti) {
                        var e = ei.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = ti.next;
                    var t = null === ni ? ei.memoizedState : ni.next;
                    if (null !== t) ni = t, ti = e;
                    else {
                        if (null === e) throw Error(i(310));
                        e = {
                            memoizedState: (ti = e).memoizedState,
                            baseState: ti.baseState,
                            baseQueue: ti.baseQueue,
                            queue: ti.queue,
                            next: null
                        }, null === ni ? ei.memoizedState = ni = e : ni = ni.next = e
                    }
                    return ni
                }

                function ci(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function di(e) {
                    var t = ui(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var a = ti,
                        r = a.baseQueue,
                        o = n.pending;
                    if (null !== o) {
                        if (null !== r) {
                            var l = r.next;
                            r.next = o.next, o.next = l
                        }
                        a.baseQueue = r = o, n.pending = null
                    }
                    if (null !== r) {
                        r = r.next, a = a.baseState;
                        var s = l = o = null,
                            u = r;
                        do {
                            var c = u.lane;
                            if ((Zo & c) === c) null !== s && (s = s.next = {
                                lane: 0,
                                action: u.action,
                                eagerReducer: u.eagerReducer,
                                eagerState: u.eagerState,
                                next: null
                            }), a = u.eagerReducer === e ? u.eagerState : e(a, u.action);
                            else {
                                var d = {
                                    lane: c,
                                    action: u.action,
                                    eagerReducer: u.eagerReducer,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === s ? (l = s = d, o = a) : s = s.next = d, ei.lanes |= c, Ul |= c
                            }
                            u = u.next
                        } while (null !== u && u !== r);
                        null === s ? o = a : s.next = l, ca(a, t.memoizedState) || (qi = !0), t.memoizedState = a, t.baseState = o, t.baseQueue = s, n.lastRenderedState = a
                    }
                    return [t.memoizedState, n.dispatch]
                }

                function fi(e) {
                    var t = ui(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var a = n.dispatch,
                        r = n.pending,
                        o = t.memoizedState;
                    if (null !== r) {
                        n.pending = null;
                        var l = r = r.next;
                        do {
                            o = e(o, l.action), l = l.next
                        } while (l !== r);
                        ca(o, t.memoizedState) || (qi = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                    }
                    return [o, a]
                }

                function pi(e, t, n) {
                    var a = t._getVersion;
                    a = a(t._source);
                    var r = t._workInProgressVersionPrimary;
                    if (null !== r ? e = r === a : (e = e.mutableReadLanes, (e = (Zo & e) === e) && (t._workInProgressVersionPrimary = a, Ko.push(t))), e) return n(t._source);
                    throw Ko.push(t), Error(i(350))
                }

                function mi(e, t, n, a) {
                    var r = Ll;
                    if (null === r) throw Error(i(349));
                    var o = t._getVersion,
                        l = o(t._source),
                        s = Jo.current,
                        u = s.useState((function () {
                            return pi(r, t, n)
                        })),
                        c = u[1],
                        d = u[0];
                    u = ni;
                    var f = e.memoizedState,
                        p = f.refs,
                        m = p.getSnapshot,
                        h = f.source;
                    f = f.subscribe;
                    var v = ei;
                    return e.memoizedState = {
                        refs: p,
                        source: t,
                        subscribe: a
                    }, s.useEffect((function () {
                        p.getSnapshot = n, p.setSnapshot = c;
                        var e = o(t._source);
                        if (!ca(l, e)) {
                            e = n(t._source), ca(d, e) || (c(e), e = ps(v), r.mutableReadLanes |= e & r.pendingLanes), e = r.mutableReadLanes, r.entangledLanes |= e;
                            for (var a = r.entanglements, i = e; 0 < i;) {
                                var s = 31 - Ht(i),
                                    u = 1 << s;
                                a[s] |= e, i &= ~u
                            }
                        }
                    }), [n, t, a]), s.useEffect((function () {
                        return a(t._source, (function () {
                            var e = p.getSnapshot,
                                n = p.setSnapshot;
                            try {
                                n(e(t._source));
                                var a = ps(v);
                                r.mutableReadLanes |= a & r.pendingLanes
                            } catch (o) {
                                n((function () {
                                    throw o
                                }))
                            }
                        }))
                    }), [t, a]), ca(m, n) && ca(h, t) && ca(f, a) || ((e = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: ci,
                        lastRenderedState: d
                    }).dispatch = c = Oi.bind(null, ei, e), u.queue = e, u.baseQueue = null, d = pi(r, t, n), u.memoizedState = u.baseState = d), d
                }

                function hi(e, t, n) {
                    return mi(ui(), e, t, n)
                }

                function vi(e) {
                    var t = si();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: ci,
                        lastRenderedState: e
                    }).dispatch = Oi.bind(null, ei, e), [t.memoizedState, e]
                }

                function gi(e, t, n, a) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: a,
                        next: null
                    }, null === (t = ei.updateQueue) ? (t = {
                        lastEffect: null
                    }, ei.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e
                }

                function bi(e) {
                    return e = {
                        current: e
                    }, si().memoizedState = e
                }

                function yi() {
                    return ui().memoizedState
                }

                function xi(e, t, n, a) {
                    var r = si();
                    ei.flags |= e, r.memoizedState = gi(1 | t, n, void 0, void 0 === a ? null : a)
                }

                function wi(e, t, n, a) {
                    var r = ui();
                    a = void 0 === a ? null : a;
                    var o = void 0;
                    if (null !== ti) {
                        var i = ti.memoizedState;
                        if (o = i.destroy, null !== a && ii(a, i.deps)) return void gi(t, n, o, a)
                    }
                    ei.flags |= e, r.memoizedState = gi(1 | t, n, o, a)
                }

                function ji(e, t) {
                    return xi(516, 4, e, t)
                }

                function ki(e, t) {
                    return wi(516, 4, e, t)
                }

                function Si(e, t) {
                    return wi(4, 2, e, t)
                }

                function Ei(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function () {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
                        t.current = null
                    }) : void 0
                }

                function Ni(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, wi(4, 2, Ei.bind(null, t, e), n)
                }

                function Ci() {}

                function _i(e, t) {
                    var n = ui();
                    t = void 0 === t ? null : t;
                    var a = n.memoizedState;
                    return null !== a && null !== t && ii(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e)
                }

                function Pi(e, t) {
                    var n = ui();
                    t = void 0 === t ? null : t;
                    var a = n.memoizedState;
                    return null !== a && null !== t && ii(t, a[1]) ? a[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function zi(e, t) {
                    var n = Hr();
                    Qr(98 > n ? 98 : n, (function () {
                        e(!0)
                    })), Qr(97 < n ? 97 : n, (function () {
                        var n = Xo.transition;
                        Xo.transition = 1;
                        try {
                            e(!1), t()
                        } finally {
                            Xo.transition = n
                        }
                    }))
                }

                function Oi(e, t, n) {
                    var a = fs(),
                        r = ps(e),
                        o = {
                            lane: r,
                            action: n,
                            eagerReducer: null,
                            eagerState: null,
                            next: null
                        },
                        i = t.pending;
                    if (null === i ? o.next = o : (o.next = i.next, i.next = o), t.pending = o, i = e.alternate, e === ei || null !== i && i === ei) ri = ai = !0;
                    else {
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var l = t.lastRenderedState,
                                s = i(l, n);
                            if (o.eagerReducer = i, o.eagerState = s, ca(s, l)) return
                        } catch (u) {}
                        ms(e, r, a)
                    }
                }
                var Ti = {
                        readContext: io,
                        useCallback: oi,
                        useContext: oi,
                        useEffect: oi,
                        useImperativeHandle: oi,
                        useLayoutEffect: oi,
                        useMemo: oi,
                        useReducer: oi,
                        useRef: oi,
                        useState: oi,
                        useDebugValue: oi,
                        useDeferredValue: oi,
                        useTransition: oi,
                        useMutableSource: oi,
                        useOpaqueIdentifier: oi,
                        unstable_isNewReconciler: !1
                    },
                    Li = {
                        readContext: io,
                        useCallback: function (e, t) {
                            return si().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: io,
                        useEffect: ji,
                        useImperativeHandle: function (e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, xi(4, 2, Ei.bind(null, t, e), n)
                        },
                        useLayoutEffect: function (e, t) {
                            return xi(4, 2, e, t)
                        },
                        useMemo: function (e, t) {
                            var n = si();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function (e, t, n) {
                            var a = si();
                            return t = void 0 !== n ? n(t) : t, a.memoizedState = a.baseState = t, e = (e = a.queue = {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }).dispatch = Oi.bind(null, ei, e), [a.memoizedState, e]
                        },
                        useRef: bi,
                        useState: vi,
                        useDebugValue: Ci,
                        useDeferredValue: function (e) {
                            var t = vi(e),
                                n = t[0],
                                a = t[1];
                            return ji((function () {
                                var t = Xo.transition;
                                Xo.transition = 1;
                                try {
                                    a(e)
                                } finally {
                                    Xo.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function () {
                            var e = vi(!1),
                                t = e[0];
                            return bi(e = zi.bind(null, e[1])), [e, t]
                        },
                        useMutableSource: function (e, t, n) {
                            var a = si();
                            return a.memoizedState = {
                                refs: {
                                    getSnapshot: t,
                                    setSnapshot: null
                                },
                                source: e,
                                subscribe: n
                            }, mi(a, e, t, n)
                        },
                        useOpaqueIdentifier: function () {
                            if (Bo) {
                                var e = !1,
                                    t = function (e) {
                                        return {
                                            $$typeof: I,
                                            toString: e,
                                            valueOf: e
                                        }
                                    }((function () {
                                        throw e || (e = !0, n("r:" + (Ya++).toString(36))), Error(i(355))
                                    })),
                                    n = vi(t)[1];
                                return 0 === (2 & ei.mode) && (ei.flags |= 516, gi(5, (function () {
                                    n("r:" + (Ya++).toString(36))
                                }), void 0, null)), t
                            }
                            return vi(t = "r:" + (Ya++).toString(36)), t
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ai = {
                        readContext: io,
                        useCallback: _i,
                        useContext: io,
                        useEffect: ki,
                        useImperativeHandle: Ni,
                        useLayoutEffect: Si,
                        useMemo: Pi,
                        useReducer: di,
                        useRef: yi,
                        useState: function () {
                            return di(ci)
                        },
                        useDebugValue: Ci,
                        useDeferredValue: function (e) {
                            var t = di(ci),
                                n = t[0],
                                a = t[1];
                            return ki((function () {
                                var t = Xo.transition;
                                Xo.transition = 1;
                                try {
                                    a(e)
                                } finally {
                                    Xo.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function () {
                            var e = di(ci)[0];
                            return [yi().current, e]
                        },
                        useMutableSource: hi,
                        useOpaqueIdentifier: function () {
                            return di(ci)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ii = {
                        readContext: io,
                        useCallback: _i,
                        useContext: io,
                        useEffect: ki,
                        useImperativeHandle: Ni,
                        useLayoutEffect: Si,
                        useMemo: Pi,
                        useReducer: fi,
                        useRef: yi,
                        useState: function () {
                            return fi(ci)
                        },
                        useDebugValue: Ci,
                        useDeferredValue: function (e) {
                            var t = fi(ci),
                                n = t[0],
                                a = t[1];
                            return ki((function () {
                                var t = Xo.transition;
                                Xo.transition = 1;
                                try {
                                    a(e)
                                } finally {
                                    Xo.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function () {
                            var e = fi(ci)[0];
                            return [yi().current, e]
                        },
                        useMutableSource: hi,
                        useOpaqueIdentifier: function () {
                            return fi(ci)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ri = w.ReactCurrentOwner,
                    qi = !1;

                function Fi(e, t, n, a) {
                    t.child = null === e ? _o(t, null, n, a) : Co(t, e.child, n, a)
                }

                function Di(e, t, n, a, r) {
                    n = n.render;
                    var o = t.ref;
                    return oo(t, r), a = li(e, t, n, a, o, r), null === e || qi ? (t.flags |= 1, Fi(e, t, a, r), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~r, ol(e, t, r))
                }

                function Mi(e, t, n, a, r, o) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || Ws(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = $s(n.type, null, a, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Ui(e, t, i, a, r, o))
                    }
                    return i = e.child, 0 === (r & o) && (r = i.memoizedProps, (n = null !== (n = n.compare) ? n : fa)(r, a) && e.ref === t.ref) ? ol(e, t, o) : (t.flags |= 1, (e = Qs(i, a)).ref = t.ref, e.return = t, t.child = e)
                }

                function Ui(e, t, n, a, r, o) {
                    if (null !== e && fa(e.memoizedProps, a) && e.ref === t.ref) {
                        if (qi = !1, 0 === (o & r)) return t.lanes = e.lanes, ol(e, t, o);
                        0 !== (16384 & e.flags) && (qi = !0)
                    }
                    return Hi(e, t, n, a, o)
                }

                function Bi(e, t, n) {
                    var a = t.pendingProps,
                        r = a.children,
                        o = null !== e ? e.memoizedState : null;
                    if ("hidden" === a.mode || "unstable-defer-without-hiding" === a.mode)
                        if (0 === (4 & t.mode)) t.memoizedState = {
                            baseLanes: 0
                        }, js(t, n);
                        else {
                            if (0 === (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e
                            }, js(t, e), null;
                            t.memoizedState = {
                                baseLanes: 0
                            }, js(t, null !== o ? o.baseLanes : n)
                        }
                    else null !== o ? (a = o.baseLanes | n, t.memoizedState = null) : a = n, js(t, a);
                    return Fi(e, t, r, n), t.child
                }

                function Vi(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
                }

                function Hi(e, t, n, a, r) {
                    var o = gr(n) ? hr : pr.current;
                    return o = vr(t, o), oo(t, r), n = li(e, t, n, a, o, r), null === e || qi ? (t.flags |= 1, Fi(e, t, n, r), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~r, ol(e, t, r))
                }

                function Wi(e, t, n, a, r) {
                    if (gr(n)) {
                        var o = !0;
                        wr(t)
                    } else o = !1;
                    if (oo(t, r), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), xo(t, n, a), jo(t, n, a, r), a = !0;
                    else if (null === e) {
                        var i = t.stateNode,
                            l = t.memoizedProps;
                        i.props = l;
                        var s = i.context,
                            u = n.contextType;
                        "object" === typeof u && null !== u ? u = io(u) : u = vr(t, u = gr(n) ? hr : pr.current);
                        var c = n.getDerivedStateFromProps,
                            d = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
                        d || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== a || s !== u) && wo(t, i, a, u), lo = !1;
                        var f = t.memoizedState;
                        i.state = f, mo(t, a, i, r), s = t.memoizedState, l !== a || f !== s || mr.current || lo ? ("function" === typeof c && (go(t, n, c, a), s = t.memoizedState), (l = lo || yo(t, n, l, a, f, s, u)) ? (d || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4)) : ("function" === typeof i.componentDidMount && (t.flags |= 4), t.memoizedProps = a, t.memoizedState = s), i.props = a, i.state = s, i.context = u, a = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4), a = !1)
                    } else {
                        i = t.stateNode, uo(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Jr(t.type, l), i.props = u, d = t.pendingProps, f = i.context, "object" === typeof (s = n.contextType) && null !== s ? s = io(s) : s = vr(t, s = gr(n) ? hr : pr.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== d || f !== s) && wo(t, i, a, s), lo = !1, f = t.memoizedState, i.state = f, mo(t, a, i, r);
                        var m = t.memoizedState;
                        l !== d || f !== m || mr.current || lo ? ("function" === typeof p && (go(t, n, p, a), m = t.memoizedState), (u = lo || yo(t, n, u, a, f, m, s)) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(a, m, s), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(a, m, s)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), t.memoizedProps = a, t.memoizedState = m), i.props = a, i.state = m, i.context = s, a = u) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), a = !1)
                    }
                    return Qi(e, t, n, a, o, r)
                }

                function Qi(e, t, n, a, r, o) {
                    Vi(e, t);
                    var i = 0 !== (64 & t.flags);
                    if (!a && !i) return r && jr(t, n, !1), ol(e, t, o);
                    a = t.stateNode, Ri.current = t;
                    var l = i && "function" !== typeof n.getDerivedStateFromError ? null : a.render();
                    return t.flags |= 1, null !== e && i ? (t.child = Co(t, e.child, null, o), t.child = Co(t, null, l, o)) : Fi(e, t, l, o), t.memoizedState = a.state, r && jr(t, n, !0), t.child
                }

                function $i(e) {
                    var t = e.stateNode;
                    t.pendingContext ? yr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && yr(0, t.context, !1), Ao(e, t.containerInfo)
                }
                var Gi, Ki, Yi, Ji = {
                    dehydrated: null,
                    retryLane: 0
                };

                function Xi(e, t, n) {
                    var a, r = t.pendingProps,
                        o = Fo.current,
                        i = !1;
                    return (a = 0 !== (64 & t.flags)) || (a = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), a ? (i = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === r.fallback || !0 === r.unstable_avoidThisFallback || (o |= 1), dr(Fo, 1 & o), null === e ? (void 0 !== r.fallback && Wo(t), e = r.children, o = r.fallback, i ? (e = Zi(t, e, o, n), t.child.memoizedState = {
                        baseLanes: n
                    }, t.memoizedState = Ji, e) : "number" === typeof r.unstable_expectedLoadTime ? (e = Zi(t, e, o, n), t.child.memoizedState = {
                        baseLanes: n
                    }, t.memoizedState = Ji, t.lanes = 33554432, e) : ((n = Ks({
                        mode: "visible",
                        children: e
                    }, t.mode, n, null)).return = t, t.child = n)) : (e.memoizedState, i ? (r = tl(e, t, r.children, r.fallback, n), i = t.child, o = e.child.memoizedState, i.memoizedState = null === o ? {
                        baseLanes: n
                    } : {
                        baseLanes: o.baseLanes | n
                    }, i.childLanes = e.childLanes & ~n, t.memoizedState = Ji, r) : (n = el(e, t, r.children, n), t.memoizedState = null, n))
                }

                function Zi(e, t, n, a) {
                    var r = e.mode,
                        o = e.child;
                    return t = {
                        mode: "hidden",
                        children: t
                    }, 0 === (2 & r) && null !== o ? (o.childLanes = 0, o.pendingProps = t) : o = Ks(t, r, 0, null), n = Gs(n, r, a, null), o.return = e, n.return = e, o.sibling = n, e.child = o, n
                }

                function el(e, t, n, a) {
                    var r = e.child;
                    return e = r.sibling, n = Qs(r, {
                        mode: "visible",
                        children: n
                    }), 0 === (2 & t.mode) && (n.lanes = a), n.return = t, n.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n
                }

                function tl(e, t, n, a, r) {
                    var o = t.mode,
                        i = e.child;
                    e = i.sibling;
                    var l = {
                        mode: "hidden",
                        children: n
                    };
                    return 0 === (2 & o) && t.child !== i ? ((n = t.child).childLanes = 0, n.pendingProps = l, null !== (i = n.lastEffect) ? (t.firstEffect = n.firstEffect, t.lastEffect = i, i.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Qs(i, l), null !== e ? a = Qs(e, a) : (a = Gs(a, o, r, null)).flags |= 2, a.return = t, n.return = t, n.sibling = a, t.child = n, a
                }

                function nl(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    null !== n && (n.lanes |= t), ro(e.return, t)
                }

                function al(e, t, n, a, r, o) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: a,
                        tail: n,
                        tailMode: r,
                        lastEffect: o
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = n, i.tailMode = r, i.lastEffect = o)
                }

                function rl(e, t, n) {
                    var a = t.pendingProps,
                        r = a.revealOrder,
                        o = a.tail;
                    if (Fi(e, t, a.children, n), 0 !== (2 & (a = Fo.current))) a = 1 & a | 2, t.flags |= 64;
                    else {
                        if (null !== e && 0 !== (64 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                            else if (19 === e.tag) nl(e, n);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        a &= 1
                    }
                    if (dr(Fo, a), 0 === (2 & t.mode)) t.memoizedState = null;
                    else switch (r) {
                        case "forwards":
                            for (n = t.child, r = null; null !== n;) null !== (e = n.alternate) && null === Do(e) && (r = n), n = n.sibling;
                            null === (n = r) ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), al(t, !1, r, n, o, t.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, r = t.child, t.child = null; null !== r;) {
                                if (null !== (e = r.alternate) && null === Do(e)) {
                                    t.child = r;
                                    break
                                }
                                e = r.sibling, r.sibling = n, n = r, r = e
                            }
                            al(t, !0, n, null, o, t.lastEffect);
                            break;
                        case "together":
                            al(t, !1, null, null, void 0, t.lastEffect);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function ol(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Ul |= t.lanes, 0 !== (n & t.childLanes)) {
                        if (null !== e && t.child !== e.child) throw Error(i(153));
                        if (null !== t.child) {
                            for (n = Qs(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Qs(e, e.pendingProps)).return = t;
                            n.sibling = null
                        }
                        return t.child
                    }
                    return null
                }

                function il(e, t) {
                    if (!Bo) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var a = null; null !== n;) null !== n.alternate && (a = n), n = n.sibling;
                            null === a ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : a.sibling = null
                    }
                }

                function ll(e, t, n) {
                    var a = t.pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return null;
                        case 1:
                        case 17:
                            return gr(t.type) && br(), null;
                        case 3:
                            return Io(), cr(mr), cr(pr), Yo(), (a = t.stateNode).pendingContext && (a.context = a.pendingContext, a.pendingContext = null), null !== e && null !== e.child || ($o(t) ? t.flags |= 4 : a.hydrate || (t.flags |= 256)), null;
                        case 5:
                            qo(t);
                            var o = Lo(To.current);
                            if (n = t.type, null !== e && null != t.stateNode) Ki(e, t, n, a), e.ref !== t.ref && (t.flags |= 128);
                            else {
                                if (!a) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return null
                                }
                                if (e = Lo(zo.current), $o(t)) {
                                    a = t.stateNode, n = t.type;
                                    var l = t.memoizedProps;
                                    switch (a[Xa] = t, a[Za] = l, n) {
                                        case "dialog":
                                            za("cancel", a), za("close", a);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            za("load", a);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (e = 0; e < Na.length; e++) za(Na[e], a);
                                            break;
                                        case "source":
                                            za("error", a);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            za("error", a), za("load", a);
                                            break;
                                        case "details":
                                            za("toggle", a);
                                            break;
                                        case "input":
                                            ee(a, l), za("invalid", a);
                                            break;
                                        case "select":
                                            a._wrapperState = {
                                                wasMultiple: !!l.multiple
                                            }, za("invalid", a);
                                            break;
                                        case "textarea":
                                            se(a, l), za("invalid", a)
                                    }
                                    for (var u in Se(n, l), e = null, l) l.hasOwnProperty(u) && (o = l[u], "children" === u ? "string" === typeof o ? a.textContent !== o && (e = ["children", o]) : "number" === typeof o && a.textContent !== "" + o && (e = ["children", "" + o]) : s.hasOwnProperty(u) && null != o && "onScroll" === u && za("scroll", a));
                                    switch (n) {
                                        case "input":
                                            Y(a), ae(a, l, !0);
                                            break;
                                        case "textarea":
                                            Y(a), ce(a);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof l.onClick && (a.onclick = Ma)
                                    }
                                    a = e, t.updateQueue = a, null !== a && (t.flags |= 4)
                                } else {
                                    switch (u = 9 === o.nodeType ? o : o.ownerDocument, e === de && (e = pe(n)), e === de ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof a.is ? e = u.createElement(n, {
                                        is: a.is
                                    }) : (e = u.createElement(n), "select" === n && (u = e, a.multiple ? u.multiple = !0 : a.size && (u.size = a.size))) : e = u.createElementNS(e, n), e[Xa] = t, e[Za] = a, Gi(e, t), t.stateNode = e, u = Ee(n, a), n) {
                                        case "dialog":
                                            za("cancel", e), za("close", e), o = a;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            za("load", e), o = a;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (o = 0; o < Na.length; o++) za(Na[o], e);
                                            o = a;
                                            break;
                                        case "source":
                                            za("error", e), o = a;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            za("error", e), za("load", e), o = a;
                                            break;
                                        case "details":
                                            za("toggle", e), o = a;
                                            break;
                                        case "input":
                                            ee(e, a), o = Z(e, a), za("invalid", e);
                                            break;
                                        case "option":
                                            o = oe(e, a);
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!a.multiple
                                            }, o = r({}, a, {
                                                value: void 0
                                            }), za("invalid", e);
                                            break;
                                        case "textarea":
                                            se(e, a), o = le(e, a), za("invalid", e);
                                            break;
                                        default:
                                            o = a
                                    }
                                    Se(n, o);
                                    var c = o;
                                    for (l in c)
                                        if (c.hasOwnProperty(l)) {
                                            var d = c[l];
                                            "style" === l ? je(e, d) : "dangerouslySetInnerHTML" === l ? null != (d = d ? d.__html : void 0) && ge(e, d) : "children" === l ? "string" === typeof d ? ("textarea" !== n || "" !== d) && be(e, d) : "number" === typeof d && be(e, "" + d) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (s.hasOwnProperty(l) ? null != d && "onScroll" === l && za("scroll", e) : null != d && x(e, l, d, u))
                                        } switch (n) {
                                        case "input":
                                            Y(e), ae(e, a, !1);
                                            break;
                                        case "textarea":
                                            Y(e), ce(e);
                                            break;
                                        case "option":
                                            null != a.value && e.setAttribute("value", "" + G(a.value));
                                            break;
                                        case "select":
                                            e.multiple = !!a.multiple, null != (l = a.value) ? ie(e, !!a.multiple, l, !1) : null != a.defaultValue && ie(e, !!a.multiple, a.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof o.onClick && (e.onclick = Ma)
                                    }
                                    Va(n, a) && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 128)
                            }
                            return null;
                        case 6:
                            if (e && null != t.stateNode) Yi(0, t, e.memoizedProps, a);
                            else {
                                if ("string" !== typeof a && null === t.stateNode) throw Error(i(166));
                                n = Lo(To.current), Lo(zo.current), $o(t) ? (a = t.stateNode, n = t.memoizedProps, a[Xa] = t, a.nodeValue !== n && (t.flags |= 4)) : ((a = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(a))[Xa] = t, t.stateNode = a)
                            }
                            return null;
                        case 13:
                            return cr(Fo), a = t.memoizedState, 0 !== (64 & t.flags) ? (t.lanes = n, t) : (a = null !== a, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && $o(t) : n = null !== e.memoizedState, a && !n && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Fo.current) ? 0 === Fl && (Fl = 3) : (0 !== Fl && 3 !== Fl || (Fl = 4), null === Ll || 0 === (134217727 & Ul) && 0 === (134217727 & Bl) || bs(Ll, Il))), (a || n) && (t.flags |= 4), null);
                        case 4:
                            return Io(), null === e && Ta(t.stateNode.containerInfo), null;
                        case 10:
                            return ao(t), null;
                        case 19:
                            if (cr(Fo), null === (a = t.memoizedState)) return null;
                            if (l = 0 !== (64 & t.flags), null === (u = a.rendering))
                                if (l) il(a, !1);
                                else {
                                    if (0 !== Fl || null !== e && 0 !== (64 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (u = Do(e))) {
                                                for (t.flags |= 64, il(a, !1), null !== (l = u.updateQueue) && (t.updateQueue = l, t.flags |= 4), null === a.lastEffect && (t.firstEffect = null), t.lastEffect = a.lastEffect, a = n, n = t.child; null !== n;) e = a, (l = n).flags &= 2, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null, null === (u = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, e = u.dependencies, l.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return dr(Fo, 1 & Fo.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== a.tail && Vr() > Ql && (t.flags |= 64, l = !0, il(a, !1), t.lanes = 33554432)
                                }
                            else {
                                if (!l)
                                    if (null !== (e = Do(u))) {
                                        if (t.flags |= 64, l = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), il(a, !0), null === a.tail && "hidden" === a.tailMode && !u.alternate && !Bo) return null !== (t = t.lastEffect = a.lastEffect) && (t.nextEffect = null), null
                                    } else 2 * Vr() - a.renderingStartTime > Ql && 1073741824 !== n && (t.flags |= 64, l = !0, il(a, !1), t.lanes = 33554432);
                                a.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = a.last) ? n.sibling = u : t.child = u, a.last = u)
                            }
                            return null !== a.tail ? (n = a.tail, a.rendering = n, a.tail = n.sibling, a.lastEffect = t.lastEffect, a.renderingStartTime = Vr(), n.sibling = null, t = Fo.current, dr(Fo, l ? 1 & t | 2 : 1 & t), n) : null;
                        case 23:
                        case 24:
                            return ks(), null !== e && null !== e.memoizedState !== (null !== t.memoizedState) && "unstable-defer-without-hiding" !== a.mode && (t.flags |= 4), null
                    }
                    throw Error(i(156, t.tag))
                }

                function sl(e) {
                    switch (e.tag) {
                        case 1:
                            gr(e.type) && br();
                            var t = e.flags;
                            return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
                        case 3:
                            if (Io(), cr(mr), cr(pr), Yo(), 0 !== (64 & (t = e.flags))) throw Error(i(285));
                            return e.flags = -4097 & t | 64, e;
                        case 5:
                            return qo(e), null;
                        case 13:
                            return cr(Fo), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
                        case 19:
                            return cr(Fo), null;
                        case 4:
                            return Io(), null;
                        case 10:
                            return ao(e), null;
                        case 23:
                        case 24:
                            return ks(), null;
                        default:
                            return null
                    }
                }

                function ul(e, t) {
                    try {
                        var n = "",
                            a = t;
                        do {
                            n += Q(a), a = a.return
                        } while (a);
                        var r = n
                    } catch (o) {
                        r = "\nError generating stack: " + o.message + "\n" + o.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: r
                    }
                }

                function cl(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function () {
                            throw n
                        }))
                    }
                }
                Gi = function (e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Ki = function (e, t, n, a) {
                    var o = e.memoizedProps;
                    if (o !== a) {
                        e = t.stateNode, Lo(zo.current);
                        var i, l = null;
                        switch (n) {
                            case "input":
                                o = Z(e, o), a = Z(e, a), l = [];
                                break;
                            case "option":
                                o = oe(e, o), a = oe(e, a), l = [];
                                break;
                            case "select":
                                o = r({}, o, {
                                    value: void 0
                                }), a = r({}, a, {
                                    value: void 0
                                }), l = [];
                                break;
                            case "textarea":
                                o = le(e, o), a = le(e, a), l = [];
                                break;
                            default:
                                "function" !== typeof o.onClick && "function" === typeof a.onClick && (e.onclick = Ma)
                        }
                        for (d in Se(n, a), n = null, o)
                            if (!a.hasOwnProperty(d) && o.hasOwnProperty(d) && null != o[d])
                                if ("style" === d) {
                                    var u = o[d];
                                    for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== d && "children" !== d && "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && "autoFocus" !== d && (s.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
                        for (d in a) {
                            var c = a[d];
                            if (u = null != o ? o[d] : void 0, a.hasOwnProperty(d) && c !== u && (null != c || null != u))
                                if ("style" === d)
                                    if (u) {
                                        for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i])
                                    } else n || (l || (l = []), l.push(d, n)), n = c;
                            else "dangerouslySetInnerHTML" === d ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (l = l || []).push(d, c)) : "children" === d ? "string" !== typeof c && "number" !== typeof c || (l = l || []).push(d, "" + c) : "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && (s.hasOwnProperty(d) ? (null != c && "onScroll" === d && za("scroll", e), l || u === c || (l = [])) : "object" === typeof c && null !== c && c.$$typeof === I ? c.toString() : (l = l || []).push(d, c))
                        }
                        n && (l = l || []).push("style", n);
                        var d = l;
                        (t.updateQueue = d) && (t.flags |= 4)
                    }
                }, Yi = function (e, t, n, a) {
                    n !== a && (t.flags |= 4)
                };
                var dl = "function" === typeof WeakMap ? WeakMap : Map;

                function fl(e, t, n) {
                    (n = co(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var a = t.value;
                    return n.callback = function () {
                        Yl || (Yl = !0, Jl = a), cl(0, t)
                    }, n
                }

                function pl(e, t, n) {
                    (n = co(-1, n)).tag = 3;
                    var a = e.type.getDerivedStateFromError;
                    if ("function" === typeof a) {
                        var r = t.value;
                        n.payload = function () {
                            return cl(0, t), a(r)
                        }
                    }
                    var o = e.stateNode;
                    return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function () {
                        "function" !== typeof a && (null === Xl ? Xl = new Set([this]) : Xl.add(this), cl(0, t));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }
                var ml = "function" === typeof WeakSet ? WeakSet : Set;

                function hl(e) {
                    var t = e.ref;
                    if (null !== t)
                        if ("function" === typeof t) try {
                            t(null)
                        } catch (n) {
                            Ms(e, n)
                        } else t.current = null
                }

                function vl(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & t.flags && null !== e) {
                                var n = e.memoizedProps,
                                    a = e.memoizedState;
                                t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Jr(t.type, n), a), e.__reactInternalSnapshotBeforeUpdate = t
                            }
                            return;
                        case 3:
                            return void(256 & t.flags && $a(t.stateNode.containerInfo))
                    }
                    throw Error(i(163))
                }

                function gl(e, t, n) {
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                                e = t = t.next;
                                do {
                                    if (3 === (3 & e.tag)) {
                                        var a = e.create;
                                        e.destroy = a()
                                    }
                                    e = e.next
                                } while (e !== t)
                            }
                            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                                e = t = t.next;
                                do {
                                    var r = e;
                                    a = r.next, 0 !== (4 & (r = r.tag)) && 0 !== (1 & r) && (qs(n, e), Rs(n, e)), e = a
                                } while (e !== t)
                            }
                            return;
                        case 1:
                            return e = n.stateNode, 4 & n.flags && (null === t ? e.componentDidMount() : (a = n.elementType === n.type ? t.memoizedProps : Jr(n.type, t.memoizedProps), e.componentDidUpdate(a, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void(null !== (t = n.updateQueue) && ho(n, t, e));
                        case 3:
                            if (null !== (t = n.updateQueue)) {
                                if (e = null, null !== n.child) switch (n.child.tag) {
                                    case 5:
                                    case 1:
                                        e = n.child.stateNode
                                }
                                ho(n, t, e)
                            }
                            return;
                        case 5:
                            return e = n.stateNode, void(null === t && 4 & n.flags && Va(n.type, n.memoizedProps) && e.focus());
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                        case 23:
                        case 24:
                            return;
                        case 13:
                            return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && jt(n)))))
                    }
                    throw Error(i(163))
                }

                function bl(e, t) {
                    for (var n = e;;) {
                        if (5 === n.tag) {
                            var a = n.stateNode;
                            if (t) "function" === typeof (a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none";
                            else {
                                a = n.stateNode;
                                var r = n.memoizedProps.style;
                                r = void 0 !== r && null !== r && r.hasOwnProperty("display") ? r.display : null, a.style.display = we("display", r)
                            }
                        } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                        else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === e) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }

                function yl(e, t) {
                    if (Sr && "function" === typeof Sr.onCommitFiberUnmount) try {
                        Sr.onCommitFiberUnmount(kr, t)
                    } catch (o) {}
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                                var n = e = e.next;
                                do {
                                    var a = n,
                                        r = a.destroy;
                                    if (a = a.tag, void 0 !== r)
                                        if (0 !== (4 & a)) qs(t, n);
                                        else {
                                            a = t;
                                            try {
                                                r()
                                            } catch (o) {
                                                Ms(a, o)
                                            }
                                        } n = n.next
                                } while (n !== e)
                            }
                            break;
                        case 1:
                            if (hl(t), "function" === typeof (e = t.stateNode).componentWillUnmount) try {
                                e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                            } catch (o) {
                                Ms(t, o)
                            }
                            break;
                        case 5:
                            hl(t);
                            break;
                        case 4:
                            El(e, t)
                    }
                }

                function xl(e) {
                    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
                }

                function wl(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function jl(e) {
                    e: {
                        for (var t = e.return; null !== t;) {
                            if (wl(t)) break e;
                            t = t.return
                        }
                        throw Error(i(160))
                    }
                    var n = t;
                    switch (t = n.stateNode, n.tag) {
                        case 5:
                            var a = !1;
                            break;
                        case 3:
                        case 4:
                            t = t.containerInfo, a = !0;
                            break;
                        default:
                            throw Error(i(161))
                    }
                    16 & n.flags && (be(t, ""), n.flags &= -17);e: t: for (n = e;;) {
                        for (; null === n.sibling;) {
                            if (null === n.return || wl(n.return)) {
                                n = null;
                                break e
                            }
                            n = n.return
                        }
                        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                            if (2 & n.flags) continue t;
                            if (null === n.child || 4 === n.tag) continue t;
                            n.child.return = n, n = n.child
                        }
                        if (!(2 & n.flags)) {
                            n = n.stateNode;
                            break e
                        }
                    }
                    a ? kl(e, n, t) : Sl(e, n, t)
                }

                function kl(e, t, n) {
                    var a = e.tag,
                        r = 5 === a || 6 === a;
                    if (r) e = r ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Ma));
                    else if (4 !== a && null !== (e = e.child))
                        for (kl(e, t, n), e = e.sibling; null !== e;) kl(e, t, n), e = e.sibling
                }

                function Sl(e, t, n) {
                    var a = e.tag,
                        r = 5 === a || 6 === a;
                    if (r) e = r ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== a && null !== (e = e.child))
                        for (Sl(e, t, n), e = e.sibling; null !== e;) Sl(e, t, n), e = e.sibling
                }

                function El(e, t) {
                    for (var n, a, r = t, o = !1;;) {
                        if (!o) {
                            o = r.return;
                            e: for (;;) {
                                if (null === o) throw Error(i(160));
                                switch (n = o.stateNode, o.tag) {
                                    case 5:
                                        a = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        n = n.containerInfo, a = !0;
                                        break e
                                }
                                o = o.return
                            }
                            o = !0
                        }
                        if (5 === r.tag || 6 === r.tag) {
                            e: for (var l = e, s = r, u = s;;)
                                if (yl(l, u), null !== u.child && 4 !== u.tag) u.child.return = u, u = u.child;
                                else {
                                    if (u === s) break e;
                                    for (; null === u.sibling;) {
                                        if (null === u.return || u.return === s) break e;
                                        u = u.return
                                    }
                                    u.sibling.return = u.return, u = u.sibling
                                }a ? (l = n, s = r.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(s) : l.removeChild(s)) : n.removeChild(r.stateNode)
                        }
                        else if (4 === r.tag) {
                            if (null !== r.child) {
                                n = r.stateNode.containerInfo, a = !0, r.child.return = r, r = r.child;
                                continue
                            }
                        } else if (yl(e, r), null !== r.child) {
                            r.child.return = r, r = r.child;
                            continue
                        }
                        if (r === t) break;
                        for (; null === r.sibling;) {
                            if (null === r.return || r.return === t) return;
                            4 === (r = r.return).tag && (o = !1)
                        }
                        r.sibling.return = r.return, r = r.sibling
                    }
                }

                function Nl(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            var n = t.updateQueue;
                            if (null !== (n = null !== n ? n.lastEffect : null)) {
                                var a = n = n.next;
                                do {
                                    3 === (3 & a.tag) && (e = a.destroy, a.destroy = void 0, void 0 !== e && e()), a = a.next
                                } while (a !== n)
                            }
                            return;
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            if (null != (n = t.stateNode)) {
                                a = t.memoizedProps;
                                var r = null !== e ? e.memoizedProps : a;
                                e = t.type;
                                var o = t.updateQueue;
                                if (t.updateQueue = null, null !== o) {
                                    for (n[Za] = a, "input" === e && "radio" === a.type && null != a.name && te(n, a), Ee(e, r), t = Ee(e, a), r = 0; r < o.length; r += 2) {
                                        var l = o[r],
                                            s = o[r + 1];
                                        "style" === l ? je(n, s) : "dangerouslySetInnerHTML" === l ? ge(n, s) : "children" === l ? be(n, s) : x(n, l, s, t)
                                    }
                                    switch (e) {
                                        case "input":
                                            ne(n, a);
                                            break;
                                        case "textarea":
                                            ue(n, a);
                                            break;
                                        case "select":
                                            e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!a.multiple, null != (o = a.value) ? ie(n, !!a.multiple, o, !1) : e !== !!a.multiple && (null != a.defaultValue ? ie(n, !!a.multiple, a.defaultValue, !0) : ie(n, !!a.multiple, a.multiple ? [] : "", !1))
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === t.stateNode) throw Error(i(162));
                            return void(t.stateNode.nodeValue = t.memoizedProps);
                        case 3:
                            return void((n = t.stateNode).hydrate && (n.hydrate = !1, jt(n.containerInfo)));
                        case 13:
                            return null !== t.memoizedState && (Wl = Vr(), bl(t.child, !0)), void Cl(t);
                        case 19:
                            return void Cl(t);
                        case 23:
                        case 24:
                            return void bl(t, null !== t.memoizedState)
                    }
                    throw Error(i(163))
                }

                function Cl(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new ml), t.forEach((function (t) {
                            var a = Bs.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(a, a))
                        }))
                    }
                }

                function _l(e, t) {
                    return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
                }
                var Pl = Math.ceil,
                    zl = w.ReactCurrentDispatcher,
                    Ol = w.ReactCurrentOwner,
                    Tl = 0,
                    Ll = null,
                    Al = null,
                    Il = 0,
                    Rl = 0,
                    ql = ur(0),
                    Fl = 0,
                    Dl = null,
                    Ml = 0,
                    Ul = 0,
                    Bl = 0,
                    Vl = 0,
                    Hl = null,
                    Wl = 0,
                    Ql = 1 / 0;

                function $l() {
                    Ql = Vr() + 500
                }
                var Gl, Kl = null,
                    Yl = !1,
                    Jl = null,
                    Xl = null,
                    Zl = !1,
                    es = null,
                    ts = 90,
                    ns = [],
                    as = [],
                    rs = null,
                    os = 0,
                    is = null,
                    ls = -1,
                    ss = 0,
                    us = 0,
                    cs = null,
                    ds = !1;

                function fs() {
                    return 0 !== (48 & Tl) ? Vr() : -1 !== ls ? ls : ls = Vr()
                }

                function ps(e) {
                    if (0 === (2 & (e = e.mode))) return 1;
                    if (0 === (4 & e)) return 99 === Hr() ? 1 : 2;
                    if (0 === ss && (ss = Ml), 0 !== Yr.transition) {
                        0 !== us && (us = null !== Hl ? Hl.pendingLanes : 0), e = ss;
                        var t = 4186112 & ~us;
                        return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)), t
                    }
                    return e = Hr(), 0 !== (4 & Tl) && 98 === e ? e = Mt(12, ss) : e = Mt(e = function (e) {
                        switch (e) {
                            case 99:
                                return 15;
                            case 98:
                                return 10;
                            case 97:
                            case 96:
                                return 8;
                            case 95:
                                return 2;
                            default:
                                return 0
                        }
                    }(e), ss), e
                }

                function ms(e, t, n) {
                    if (50 < os) throw os = 0, is = null, Error(i(185));
                    if (null === (e = hs(e, t))) return null;
                    Vt(e, t, n), e === Ll && (Bl |= t, 4 === Fl && bs(e, Il));
                    var a = Hr();
                    1 === t ? 0 !== (8 & Tl) && 0 === (48 & Tl) ? ys(e) : (vs(e, n), 0 === Tl && ($l(), Gr())) : (0 === (4 & Tl) || 98 !== a && 99 !== a || (null === rs ? rs = new Set([e]) : rs.add(e)), vs(e, n)), Hl = e
                }

                function hs(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }

                function vs(e, t) {
                    for (var n = e.callbackNode, a = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                        var s = 31 - Ht(l),
                            u = 1 << s,
                            c = o[s];
                        if (-1 === c) {
                            if (0 === (u & a) || 0 !== (u & r)) {
                                c = t, qt(u);
                                var d = Rt;
                                o[s] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1
                            }
                        } else c <= t && (e.expiredLanes |= u);
                        l &= ~u
                    }
                    if (a = Ft(e, e === Ll ? Il : 0), t = Rt, 0 === a) null !== n && (n !== qr && Cr(n), e.callbackNode = null, e.callbackPriority = 0);
                    else {
                        if (null !== n) {
                            if (e.callbackPriority === t) return;
                            n !== qr && Cr(n)
                        }
                        15 === t ? (n = ys.bind(null, e), null === Dr ? (Dr = [n], Mr = Nr(Tr, Kr)) : Dr.push(n), n = qr) : 14 === t ? n = $r(99, ys.bind(null, e)) : (n = function (e) {
                            switch (e) {
                                case 15:
                                case 14:
                                    return 99;
                                case 13:
                                case 12:
                                case 11:
                                case 10:
                                    return 98;
                                case 9:
                                case 8:
                                case 7:
                                case 6:
                                case 4:
                                case 5:
                                    return 97;
                                case 3:
                                case 2:
                                case 1:
                                    return 95;
                                case 0:
                                    return 90;
                                default:
                                    throw Error(i(358, e))
                            }
                        }(t), n = $r(n, gs.bind(null, e))), e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function gs(e) {
                    if (ls = -1, us = ss = 0, 0 !== (48 & Tl)) throw Error(i(327));
                    var t = e.callbackNode;
                    if (Is() && e.callbackNode !== t) return null;
                    var n = Ft(e, e === Ll ? Il : 0);
                    if (0 === n) return null;
                    var a = n,
                        r = Tl;
                    Tl |= 16;
                    var o = Ns();
                    for (Ll === e && Il === a || ($l(), Ss(e, a));;) try {
                        Ps();
                        break
                    } catch (s) {
                        Es(e, s)
                    }
                    if (no(), zl.current = o, Tl = r, null !== Al ? a = 0 : (Ll = null, Il = 0, a = Fl), 0 !== (Ml & Bl)) Ss(e, 0);
                    else if (0 !== a) {
                        if (2 === a && (Tl |= 64, e.hydrate && (e.hydrate = !1, $a(e.containerInfo)), 0 !== (n = Dt(e)) && (a = Cs(e, n))), 1 === a) throw t = Dl, Ss(e, 0), bs(e, n), vs(e, Vr()), t;
                        switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, a) {
                            case 0:
                            case 1:
                                throw Error(i(345));
                            case 2:
                            case 5:
                                Ts(e);
                                break;
                            case 3:
                                if (bs(e, n), (62914560 & n) === n && 10 < (a = Wl + 500 - Vr())) {
                                    if (0 !== Ft(e, 0)) break;
                                    if (((r = e.suspendedLanes) & n) !== n) {
                                        fs(), e.pingedLanes |= e.suspendedLanes & r;
                                        break
                                    }
                                    e.timeoutHandle = Wa(Ts.bind(null, e), a);
                                    break
                                }
                                Ts(e);
                                break;
                            case 4:
                                if (bs(e, n), (4186112 & n) === n) break;
                                for (a = e.eventTimes, r = -1; 0 < n;) {
                                    var l = 31 - Ht(n);
                                    o = 1 << l, (l = a[l]) > r && (r = l), n &= ~o
                                }
                                if (n = r, 10 < (n = (120 > (n = Vr() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Pl(n / 1960)) - n)) {
                                    e.timeoutHandle = Wa(Ts.bind(null, e), n);
                                    break
                                }
                                Ts(e);
                                break;
                            default:
                                throw Error(i(329))
                        }
                    }
                    return vs(e, Vr()), e.callbackNode === t ? gs.bind(null, e) : null
                }

                function bs(e, t) {
                    for (t &= ~Vl, t &= ~Bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - Ht(t),
                            a = 1 << n;
                        e[n] = -1, t &= ~a
                    }
                }

                function ys(e) {
                    if (0 !== (48 & Tl)) throw Error(i(327));
                    if (Is(), e === Ll && 0 !== (e.expiredLanes & Il)) {
                        var t = Il,
                            n = Cs(e, t);
                        0 !== (Ml & Bl) && (n = Cs(e, t = Ft(e, t)))
                    } else n = Cs(e, t = Ft(e, 0));
                    if (0 !== e.tag && 2 === n && (Tl |= 64, e.hydrate && (e.hydrate = !1, $a(e.containerInfo)), 0 !== (t = Dt(e)) && (n = Cs(e, t))), 1 === n) throw n = Dl, Ss(e, 0), bs(e, t), vs(e, Vr()), n;
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ts(e), vs(e, Vr()), null
                }

                function xs(e, t) {
                    var n = Tl;
                    Tl |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Tl = n) && ($l(), Gr())
                    }
                }

                function ws(e, t) {
                    var n = Tl;
                    Tl &= -2, Tl |= 8;
                    try {
                        return e(t)
                    } finally {
                        0 === (Tl = n) && ($l(), Gr())
                    }
                }

                function js(e, t) {
                    dr(ql, Rl), Rl |= t, Ml |= t
                }

                function ks() {
                    Rl = ql.current, cr(ql)
                }

                function Ss(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, Qa(n)), null !== Al)
                        for (n = Al.return; null !== n;) {
                            var a = n;
                            switch (a.tag) {
                                case 1:
                                    null !== (a = a.type.childContextTypes) && void 0 !== a && br();
                                    break;
                                case 3:
                                    Io(), cr(mr), cr(pr), Yo();
                                    break;
                                case 5:
                                    qo(a);
                                    break;
                                case 4:
                                    Io();
                                    break;
                                case 13:
                                case 19:
                                    cr(Fo);
                                    break;
                                case 10:
                                    ao(a);
                                    break;
                                case 23:
                                case 24:
                                    ks()
                            }
                            n = n.return
                        }
                    Ll = e, Al = Qs(e.current, null), Il = Rl = Ml = t, Fl = 0, Dl = null, Vl = Bl = Ul = 0
                }

                function Es(e, t) {
                    for (;;) {
                        var n = Al;
                        try {
                            if (no(), Jo.current = Ti, ai) {
                                for (var a = ei.memoizedState; null !== a;) {
                                    var r = a.queue;
                                    null !== r && (r.pending = null), a = a.next
                                }
                                ai = !1
                            }
                            if (Zo = 0, ni = ti = ei = null, ri = !1, Ol.current = null, null === n || null === n.return) {
                                Fl = 1, Dl = t, Al = null;
                                break
                            }
                            e: {
                                var o = e,
                                    i = n.return,
                                    l = n,
                                    s = t;
                                if (t = Il, l.flags |= 2048, l.firstEffect = l.lastEffect = null, null !== s && "object" === typeof s && "function" === typeof s.then) {
                                    var u = s;
                                    if (0 === (2 & l.mode)) {
                                        var c = l.alternate;
                                        c ? (l.updateQueue = c.updateQueue, l.memoizedState = c.memoizedState, l.lanes = c.lanes) : (l.updateQueue = null, l.memoizedState = null)
                                    }
                                    var d = 0 !== (1 & Fo.current),
                                        f = i;
                                    do {
                                        var p;
                                        if (p = 13 === f.tag) {
                                            var m = f.memoizedState;
                                            if (null !== m) p = null !== m.dehydrated;
                                            else {
                                                var h = f.memoizedProps;
                                                p = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !d)
                                            }
                                        }
                                        if (p) {
                                            var v = f.updateQueue;
                                            if (null === v) {
                                                var g = new Set;
                                                g.add(u), f.updateQueue = g
                                            } else v.add(u);
                                            if (0 === (2 & f.mode)) {
                                                if (f.flags |= 64, l.flags |= 16384, l.flags &= -2981, 1 === l.tag)
                                                    if (null === l.alternate) l.tag = 17;
                                                    else {
                                                        var b = co(-1, 1);
                                                        b.tag = 2, fo(l, b)
                                                    } l.lanes |= 1;
                                                break e
                                            }
                                            s = void 0, l = t;
                                            var y = o.pingCache;
                                            if (null === y ? (y = o.pingCache = new dl, s = new Set, y.set(u, s)) : void 0 === (s = y.get(u)) && (s = new Set, y.set(u, s)), !s.has(l)) {
                                                s.add(l);
                                                var x = Us.bind(null, o, u, l);
                                                u.then(x, x)
                                            }
                                            f.flags |= 4096, f.lanes = t;
                                            break e
                                        }
                                        f = f.return
                                    } while (null !== f);
                                    s = Error(($(l.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                                }
                                5 !== Fl && (Fl = 2),
                                s = ul(s, l),
                                f = i;do {
                                    switch (f.tag) {
                                        case 3:
                                            o = s, f.flags |= 4096, t &= -t, f.lanes |= t, po(f, fl(0, o, t));
                                            break e;
                                        case 1:
                                            o = s;
                                            var w = f.type,
                                                j = f.stateNode;
                                            if (0 === (64 & f.flags) && ("function" === typeof w.getDerivedStateFromError || null !== j && "function" === typeof j.componentDidCatch && (null === Xl || !Xl.has(j)))) {
                                                f.flags |= 4096, t &= -t, f.lanes |= t, po(f, pl(f, o, t));
                                                break e
                                            }
                                    }
                                    f = f.return
                                } while (null !== f)
                            }
                            Os(n)
                        } catch (k) {
                            t = k, Al === n && null !== n && (Al = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function Ns() {
                    var e = zl.current;
                    return zl.current = Ti, null === e ? Ti : e
                }

                function Cs(e, t) {
                    var n = Tl;
                    Tl |= 16;
                    var a = Ns();
                    for (Ll === e && Il === t || Ss(e, t);;) try {
                        _s();
                        break
                    } catch (r) {
                        Es(e, r)
                    }
                    if (no(), Tl = n, zl.current = a, null !== Al) throw Error(i(261));
                    return Ll = null, Il = 0, Fl
                }

                function _s() {
                    for (; null !== Al;) zs(Al)
                }

                function Ps() {
                    for (; null !== Al && !_r();) zs(Al)
                }

                function zs(e) {
                    var t = Gl(e.alternate, e, Rl);
                    e.memoizedProps = e.pendingProps, null === t ? Os(e) : Al = t, Ol.current = null
                }

                function Os(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (2048 & t.flags)) {
                            if (null !== (n = ll(n, t, Rl))) return void(Al = n);
                            if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 !== (1073741824 & Rl) || 0 === (4 & n.mode)) {
                                for (var a = 0, r = n.child; null !== r;) a |= r.lanes | r.childLanes, r = r.sibling;
                                n.childLanes = a
                            }
                            null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
                        } else {
                            if (null !== (n = sl(t))) return n.flags &= 2047, void(Al = n);
                            null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
                        }
                        if (null !== (t = t.sibling)) return void(Al = t);
                        Al = t = e
                    } while (null !== t);
                    0 === Fl && (Fl = 5)
                }

                function Ts(e) {
                    var t = Hr();
                    return Qr(99, Ls.bind(null, e, t)), null
                }

                function Ls(e, t) {
                    do {
                        Is()
                    } while (null !== es);
                    if (0 !== (48 & Tl)) throw Error(i(327));
                    var n = e.finishedWork;
                    if (null === n) return null;
                    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                    e.callbackNode = null;
                    var a = n.lanes | n.childLanes,
                        r = a,
                        o = e.pendingLanes & ~r;
                    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= r, e.mutableReadLanes &= r, e.entangledLanes &= r, r = e.entanglements;
                    for (var l = e.eventTimes, s = e.expirationTimes; 0 < o;) {
                        var u = 31 - Ht(o),
                            c = 1 << u;
                        r[u] = 0, l[u] = -1, s[u] = -1, o &= ~c
                    }
                    if (null !== rs && 0 === (24 & a) && rs.has(e) && rs.delete(e), e === Ll && (Al = Ll = null, Il = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, a = n.firstEffect) : a = n : a = n.firstEffect, null !== a) {
                        if (r = Tl, Tl |= 32, Ol.current = null, Ua = Kt, ga(l = va())) {
                            if ("selectionStart" in l) s = {
                                start: l.selectionStart,
                                end: l.selectionEnd
                            };
                            else e: if (s = (s = l.ownerDocument) && s.defaultView || window, (c = s.getSelection && s.getSelection()) && 0 !== c.rangeCount) {
                                s = c.anchorNode, o = c.anchorOffset, u = c.focusNode, c = c.focusOffset;
                                try {
                                    s.nodeType, u.nodeType
                                } catch (N) {
                                    s = null;
                                    break e
                                }
                                var d = 0,
                                    f = -1,
                                    p = -1,
                                    m = 0,
                                    h = 0,
                                    v = l,
                                    g = null;
                                t: for (;;) {
                                    for (var b; v !== s || 0 !== o && 3 !== v.nodeType || (f = d + o), v !== u || 0 !== c && 3 !== v.nodeType || (p = d + c), 3 === v.nodeType && (d += v.nodeValue.length), null !== (b = v.firstChild);) g = v, v = b;
                                    for (;;) {
                                        if (v === l) break t;
                                        if (g === s && ++m === o && (f = d), g === u && ++h === c && (p = d), null !== (b = v.nextSibling)) break;
                                        g = (v = g).parentNode
                                    }
                                    v = b
                                }
                                s = -1 === f || -1 === p ? null : {
                                    start: f,
                                    end: p
                                }
                            } else s = null;
                            s = s || {
                                start: 0,
                                end: 0
                            }
                        } else s = null;
                        Ba = {
                            focusedElem: l,
                            selectionRange: s
                        }, Kt = !1, cs = null, ds = !1, Kl = a;
                        do {
                            try {
                                As()
                            } catch (N) {
                                if (null === Kl) throw Error(i(330));
                                Ms(Kl, N), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        cs = null, Kl = a;
                        do {
                            try {
                                for (l = e; null !== Kl;) {
                                    var y = Kl.flags;
                                    if (16 & y && be(Kl.stateNode, ""), 128 & y) {
                                        var x = Kl.alternate;
                                        if (null !== x) {
                                            var w = x.ref;
                                            null !== w && ("function" === typeof w ? w(null) : w.current = null)
                                        }
                                    }
                                    switch (1038 & y) {
                                        case 2:
                                            jl(Kl), Kl.flags &= -3;
                                            break;
                                        case 6:
                                            jl(Kl), Kl.flags &= -3, Nl(Kl.alternate, Kl);
                                            break;
                                        case 1024:
                                            Kl.flags &= -1025;
                                            break;
                                        case 1028:
                                            Kl.flags &= -1025, Nl(Kl.alternate, Kl);
                                            break;
                                        case 4:
                                            Nl(Kl.alternate, Kl);
                                            break;
                                        case 8:
                                            El(l, s = Kl);
                                            var j = s.alternate;
                                            xl(s), null !== j && xl(j)
                                    }
                                    Kl = Kl.nextEffect
                                }
                            } catch (N) {
                                if (null === Kl) throw Error(i(330));
                                Ms(Kl, N), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        if (w = Ba, x = va(), y = w.focusedElem, l = w.selectionRange, x !== y && y && y.ownerDocument && ha(y.ownerDocument.documentElement, y)) {
                            null !== l && ga(y) && (x = l.start, void 0 === (w = l.end) && (w = x), "selectionStart" in y ? (y.selectionStart = x, y.selectionEnd = Math.min(w, y.value.length)) : (w = (x = y.ownerDocument || document) && x.defaultView || window).getSelection && (w = w.getSelection(), s = y.textContent.length, j = Math.min(l.start, s), l = void 0 === l.end ? j : Math.min(l.end, s), !w.extend && j > l && (s = l, l = j, j = s), s = ma(y, j), o = ma(y, l), s && o && (1 !== w.rangeCount || w.anchorNode !== s.node || w.anchorOffset !== s.offset || w.focusNode !== o.node || w.focusOffset !== o.offset) && ((x = x.createRange()).setStart(s.node, s.offset), w.removeAllRanges(), j > l ? (w.addRange(x), w.extend(o.node, o.offset)) : (x.setEnd(o.node, o.offset), w.addRange(x))))), x = [];
                            for (w = y; w = w.parentNode;) 1 === w.nodeType && x.push({
                                element: w,
                                left: w.scrollLeft,
                                top: w.scrollTop
                            });
                            for ("function" === typeof y.focus && y.focus(), y = 0; y < x.length; y++)(w = x[y]).element.scrollLeft = w.left, w.element.scrollTop = w.top
                        }
                        Kt = !!Ua, Ba = Ua = null, e.current = n, Kl = a;
                        do {
                            try {
                                for (y = e; null !== Kl;) {
                                    var k = Kl.flags;
                                    if (36 & k && gl(y, Kl.alternate, Kl), 128 & k) {
                                        x = void 0;
                                        var S = Kl.ref;
                                        if (null !== S) {
                                            var E = Kl.stateNode;
                                            Kl.tag, x = E, "function" === typeof S ? S(x) : S.current = x
                                        }
                                    }
                                    Kl = Kl.nextEffect
                                }
                            } catch (N) {
                                if (null === Kl) throw Error(i(330));
                                Ms(Kl, N), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        Kl = null, Fr(), Tl = r
                    } else e.current = n;
                    if (Zl) Zl = !1, es = e, ts = t;
                    else
                        for (Kl = a; null !== Kl;) t = Kl.nextEffect, Kl.nextEffect = null, 8 & Kl.flags && ((k = Kl).sibling = null, k.stateNode = null), Kl = t;
                    if (0 === (a = e.pendingLanes) && (Xl = null), 1 === a ? e === is ? os++ : (os = 0, is = e) : os = 0, n = n.stateNode, Sr && "function" === typeof Sr.onCommitFiberRoot) try {
                        Sr.onCommitFiberRoot(kr, n, void 0, 64 === (64 & n.current.flags))
                    } catch (N) {}
                    if (vs(e, Vr()), Yl) throw Yl = !1, e = Jl, Jl = null, e;
                    return 0 !== (8 & Tl) || Gr(), null
                }

                function As() {
                    for (; null !== Kl;) {
                        var e = Kl.alternate;
                        ds || null === cs || (0 !== (8 & Kl.flags) ? et(Kl, cs) && (ds = !0) : 13 === Kl.tag && _l(e, Kl) && et(Kl, cs) && (ds = !0));
                        var t = Kl.flags;
                        0 !== (256 & t) && vl(e, Kl), 0 === (512 & t) || Zl || (Zl = !0, $r(97, (function () {
                            return Is(), null
                        }))), Kl = Kl.nextEffect
                    }
                }

                function Is() {
                    if (90 !== ts) {
                        var e = 97 < ts ? 97 : ts;
                        return ts = 90, Qr(e, Fs)
                    }
                    return !1
                }

                function Rs(e, t) {
                    ns.push(t, e), Zl || (Zl = !0, $r(97, (function () {
                        return Is(), null
                    })))
                }

                function qs(e, t) {
                    as.push(t, e), Zl || (Zl = !0, $r(97, (function () {
                        return Is(), null
                    })))
                }

                function Fs() {
                    if (null === es) return !1;
                    var e = es;
                    if (es = null, 0 !== (48 & Tl)) throw Error(i(331));
                    var t = Tl;
                    Tl |= 32;
                    var n = as;
                    as = [];
                    for (var a = 0; a < n.length; a += 2) {
                        var r = n[a],
                            o = n[a + 1],
                            l = r.destroy;
                        if (r.destroy = void 0, "function" === typeof l) try {
                            l()
                        } catch (u) {
                            if (null === o) throw Error(i(330));
                            Ms(o, u)
                        }
                    }
                    for (n = ns, ns = [], a = 0; a < n.length; a += 2) {
                        r = n[a], o = n[a + 1];
                        try {
                            var s = r.create;
                            r.destroy = s()
                        } catch (u) {
                            if (null === o) throw Error(i(330));
                            Ms(o, u)
                        }
                    }
                    for (s = e.current.firstEffect; null !== s;) e = s.nextEffect, s.nextEffect = null, 8 & s.flags && (s.sibling = null, s.stateNode = null), s = e;
                    return Tl = t, Gr(), !0
                }

                function Ds(e, t, n) {
                    fo(e, t = fl(0, t = ul(n, t), 1)), t = fs(), null !== (e = hs(e, 1)) && (Vt(e, 1, t), vs(e, t))
                }

                function Ms(e, t) {
                    if (3 === e.tag) Ds(e, e, t);
                    else
                        for (var n = e.return; null !== n;) {
                            if (3 === n.tag) {
                                Ds(n, e, t);
                                break
                            }
                            if (1 === n.tag) {
                                var a = n.stateNode;
                                if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof a.componentDidCatch && (null === Xl || !Xl.has(a))) {
                                    var r = pl(n, e = ul(t, e), 1);
                                    if (fo(n, r), r = fs(), null !== (n = hs(n, 1))) Vt(n, 1, r), vs(n, r);
                                    else if ("function" === typeof a.componentDidCatch && (null === Xl || !Xl.has(a))) try {
                                        a.componentDidCatch(t, e)
                                    } catch (o) {}
                                    break
                                }
                            }
                            n = n.return
                        }
                }

                function Us(e, t, n) {
                    var a = e.pingCache;
                    null !== a && a.delete(t), t = fs(), e.pingedLanes |= e.suspendedLanes & n, Ll === e && (Il & n) === n && (4 === Fl || 3 === Fl && (62914560 & Il) === Il && 500 > Vr() - Wl ? Ss(e, 0) : Vl |= n), vs(e, t)
                }

                function Bs(e, t) {
                    var n = e.stateNode;
                    null !== n && n.delete(t), 0 === (t = 0) && (0 === (2 & (t = e.mode)) ? t = 1 : 0 === (4 & t) ? t = 99 === Hr() ? 1 : 2 : (0 === ss && (ss = Ml), 0 === (t = Ut(62914560 & ~ss)) && (t = 4194304))), n = fs(), null !== (e = hs(e, t)) && (Vt(e, t, n), vs(e, n))
                }

                function Vs(e, t, n, a) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Hs(e, t, n, a) {
                    return new Vs(e, t, n, a)
                }

                function Ws(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Qs(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Hs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function $s(e, t, n, a, r, o) {
                    var l = 2;
                    if (a = e, "function" === typeof e) Ws(e) && (l = 1);
                    else if ("string" === typeof e) l = 5;
                    else e: switch (e) {
                        case S:
                            return Gs(n.children, r, o, t);
                        case R:
                            l = 8, r |= 16;
                            break;
                        case E:
                            l = 8, r |= 1;
                            break;
                        case N:
                            return (e = Hs(12, n, t, 8 | r)).elementType = N, e.type = N, e.lanes = o, e;
                        case z:
                            return (e = Hs(13, n, t, r)).type = z, e.elementType = z, e.lanes = o, e;
                        case O:
                            return (e = Hs(19, n, t, r)).elementType = O, e.lanes = o, e;
                        case q:
                            return Ks(n, r, o, t);
                        case F:
                            return (e = Hs(24, n, t, r)).elementType = F, e.lanes = o, e;
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case C:
                                    l = 10;
                                    break e;
                                case _:
                                    l = 9;
                                    break e;
                                case P:
                                    l = 11;
                                    break e;
                                case T:
                                    l = 14;
                                    break e;
                                case L:
                                    l = 16, a = null;
                                    break e;
                                case A:
                                    l = 22;
                                    break e
                            }
                            throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Hs(l, n, t, r)).elementType = e, t.type = a, t.lanes = o, t
                }

                function Gs(e, t, n, a) {
                    return (e = Hs(7, e, a, t)).lanes = n, e
                }

                function Ks(e, t, n, a) {
                    return (e = Hs(23, e, a, t)).elementType = q, e.lanes = n, e
                }

                function Ys(e, t, n) {
                    return (e = Hs(6, e, null, t)).lanes = n, e
                }

                function Js(e, t, n) {
                    return (t = Hs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Xs(e, t, n) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Bt(0), this.expirationTimes = Bt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bt(0), this.mutableSourceEagerHydrationData = null
                }

                function Zs(e, t, n) {
                    var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: k,
                        key: null == a ? null : "" + a,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }

                function eu(e, t, n, a) {
                    var r = t.current,
                        o = fs(),
                        l = ps(r);
                    e: if (n) {
                        t: {
                            if (Ye(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(i(170));
                            var s = n;do {
                                switch (s.tag) {
                                    case 3:
                                        s = s.stateNode.context;
                                        break t;
                                    case 1:
                                        if (gr(s.type)) {
                                            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break t
                                        }
                                }
                                s = s.return
                            } while (null !== s);
                            throw Error(i(171))
                        }
                        if (1 === n.tag) {
                            var u = n.type;
                            if (gr(u)) {
                                n = xr(n, u, s);
                                break e
                            }
                        }
                        n = s
                    }
                    else n = fr;
                    return null === t.context ? t.context = n : t.pendingContext = n, (t = co(o, l)).payload = {
                        element: e
                    }, null !== (a = void 0 === a ? null : a) && (t.callback = a), fo(r, t), ms(r, l, o), l
                }

                function tu(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function nu(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function au(e, t) {
                    nu(e, t), (e = e.alternate) && nu(e, t)
                }

                function ru(e, t, n) {
                    var a = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                    if (n = new Xs(e, t, null != n && !0 === n.hydrate), t = Hs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), n.current = t, t.stateNode = n, so(t), e[er] = n.current, Ta(8 === e.nodeType ? e.parentNode : e), a)
                        for (e = 0; e < a.length; e++) {
                            var r = (t = a[e])._getVersion;
                            r = r(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, r] : n.mutableSourceEagerHydrationData.push(t, r)
                        }
                    this._internalRoot = n
                }

                function ou(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function iu(e, t, n, a, r) {
                    var o = n._reactRootContainer;
                    if (o) {
                        var i = o._internalRoot;
                        if ("function" === typeof r) {
                            var l = r;
                            r = function () {
                                var e = tu(i);
                                l.call(e)
                            }
                        }
                        eu(t, i, e, r)
                    } else {
                        if (o = n._reactRootContainer = function (e, t) {
                                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                                    for (var n; n = e.lastChild;) e.removeChild(n);
                                return new ru(e, 0, t ? {
                                    hydrate: !0
                                } : void 0)
                            }(n, a), i = o._internalRoot, "function" === typeof r) {
                            var s = r;
                            r = function () {
                                var e = tu(i);
                                s.call(e)
                            }
                        }
                        ws((function () {
                            eu(t, i, e, r)
                        }))
                    }
                    return tu(i)
                }

                function lu(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!ou(t)) throw Error(i(200));
                    return Zs(e, t, null, n)
                }
                Gl = function (e, t, n) {
                    var a = t.lanes;
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || mr.current) qi = !0;
                        else {
                            if (0 === (n & a)) {
                                switch (qi = !1, t.tag) {
                                    case 3:
                                        $i(t), Go();
                                        break;
                                    case 5:
                                        Ro(t);
                                        break;
                                    case 1:
                                        gr(t.type) && wr(t);
                                        break;
                                    case 4:
                                        Ao(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        a = t.memoizedProps.value;
                                        var r = t.type._context;
                                        dr(Xr, r._currentValue), r._currentValue = a;
                                        break;
                                    case 13:
                                        if (null !== t.memoizedState) return 0 !== (n & t.child.childLanes) ? Xi(e, t, n) : (dr(Fo, 1 & Fo.current), null !== (t = ol(e, t, n)) ? t.sibling : null);
                                        dr(Fo, 1 & Fo.current);
                                        break;
                                    case 19:
                                        if (a = 0 !== (n & t.childLanes), 0 !== (64 & e.flags)) {
                                            if (a) return rl(e, t, n);
                                            t.flags |= 64
                                        }
                                        if (null !== (r = t.memoizedState) && (r.rendering = null, r.tail = null, r.lastEffect = null), dr(Fo, Fo.current), a) break;
                                        return null;
                                    case 23:
                                    case 24:
                                        return t.lanes = 0, Bi(e, t, n)
                                }
                                return ol(e, t, n)
                            }
                            qi = 0 !== (16384 & e.flags)
                        }
                    else qi = !1;
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            if (a = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, r = vr(t, pr.current), oo(t, n), r = li(null, t, a, e, r, n), t.flags |= 1, "object" === typeof r && null !== r && "function" === typeof r.render && void 0 === r.$$typeof) {
                                if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, gr(a)) {
                                    var o = !0;
                                    wr(t)
                                } else o = !1;
                                t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null, so(t);
                                var l = a.getDerivedStateFromProps;
                                "function" === typeof l && go(t, a, l, e), r.updater = bo, t.stateNode = r, r._reactInternals = t, jo(t, a, e, n), t = Qi(null, t, a, !0, o, n)
                            } else t.tag = 0, Fi(null, t, r, n), t = t.child;
                            return t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function (e) {
                                    if ("function" === typeof e) return Ws(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === P) return 11;
                                        if (e === T) return 14
                                    }
                                    return 2
                                }(r), e = Jr(r, e), o) {
                                    case 0:
                                        t = Hi(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Wi(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = Di(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = Mi(null, t, r, Jr(r.type, e), a, n);
                                        break e
                                }
                                throw Error(i(306, r, ""))
                            }
                            return t;
                        case 0:
                            return a = t.type, r = t.pendingProps, Hi(e, t, a, r = t.elementType === a ? r : Jr(a, r), n);
                        case 1:
                            return a = t.type, r = t.pendingProps, Wi(e, t, a, r = t.elementType === a ? r : Jr(a, r), n);
                        case 3:
                            if ($i(t), a = t.updateQueue, null === e || null === a) throw Error(i(282));
                            if (a = t.pendingProps, r = null !== (r = t.memoizedState) ? r.element : null, uo(e, t), mo(t, a, null, n), (a = t.memoizedState.element) === r) Go(), t = ol(e, t, n);
                            else {
                                if ((o = (r = t.stateNode).hydrate) && (Uo = Ga(t.stateNode.containerInfo.firstChild), Mo = t, o = Bo = !0), o) {
                                    if (null != (e = r.mutableSourceEagerHydrationData))
                                        for (r = 0; r < e.length; r += 2)(o = e[r])._workInProgressVersionPrimary = e[r + 1], Ko.push(o);
                                    for (n = _o(t, null, a, n), t.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling
                                } else Fi(e, t, a, n), Go();
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Ro(t), null === e && Wo(t), a = t.type, r = t.pendingProps, o = null !== e ? e.memoizedProps : null, l = r.children, Ha(a, r) ? l = null : null !== o && Ha(a, o) && (t.flags |= 16), Vi(e, t), Fi(e, t, l, n), t.child;
                        case 6:
                            return null === e && Wo(t), null;
                        case 13:
                            return Xi(e, t, n);
                        case 4:
                            return Ao(t, t.stateNode.containerInfo), a = t.pendingProps, null === e ? t.child = Co(t, null, a, n) : Fi(e, t, a, n), t.child;
                        case 11:
                            return a = t.type, r = t.pendingProps, Di(e, t, a, r = t.elementType === a ? r : Jr(a, r), n);
                        case 7:
                            return Fi(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return Fi(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                a = t.type._context,
                                r = t.pendingProps,
                                l = t.memoizedProps,
                                o = r.value;
                                var s = t.type._context;
                                if (dr(Xr, s._currentValue), s._currentValue = o, null !== l)
                                    if (s = l.value, 0 === (o = ca(s, o) ? 0 : 0 | ("function" === typeof a._calculateChangedBits ? a._calculateChangedBits(s, o) : 1073741823))) {
                                        if (l.children === r.children && !mr.current) {
                                            t = ol(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (s = t.child) && (s.return = t); null !== s;) {
                                            var u = s.dependencies;
                                            if (null !== u) {
                                                l = s.child;
                                                for (var c = u.firstContext; null !== c;) {
                                                    if (c.context === a && 0 !== (c.observedBits & o)) {
                                                        1 === s.tag && ((c = co(-1, n & -n)).tag = 2, fo(s, c)), s.lanes |= n, null !== (c = s.alternate) && (c.lanes |= n), ro(s.return, n), u.lanes |= n;
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else l = 10 === s.tag && s.type === t.type ? null : s.child;
                                            if (null !== l) l.return = s;
                                            else
                                                for (l = s; null !== l;) {
                                                    if (l === t) {
                                                        l = null;
                                                        break
                                                    }
                                                    if (null !== (s = l.sibling)) {
                                                        s.return = l.return, l = s;
                                                        break
                                                    }
                                                    l = l.return
                                                }
                                            s = l
                                        }
                                Fi(e, t, r.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return r = t.type, a = (o = t.pendingProps).children, oo(t, n), a = a(r = io(r, o.unstable_observedBits)), t.flags |= 1, Fi(e, t, a, n), t.child;
                        case 14:
                            return o = Jr(r = t.type, t.pendingProps), Mi(e, t, r, o = Jr(r.type, o), a, n);
                        case 15:
                            return Ui(e, t, t.type, t.pendingProps, a, n);
                        case 17:
                            return a = t.type, r = t.pendingProps, r = t.elementType === a ? r : Jr(a, r), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, gr(a) ? (e = !0, wr(t)) : e = !1, oo(t, n), xo(t, a, r), jo(t, a, r, n), Qi(null, t, a, !0, e, n);
                        case 19:
                            return rl(e, t, n);
                        case 23:
                        case 24:
                            return Bi(e, t, n)
                    }
                    throw Error(i(156, t.tag))
                }, ru.prototype.render = function (e) {
                    eu(e, this._internalRoot, null, null)
                }, ru.prototype.unmount = function () {
                    var e = this._internalRoot,
                        t = e.containerInfo;
                    eu(null, e, null, (function () {
                        t[er] = null
                    }))
                }, tt = function (e) {
                    13 === e.tag && (ms(e, 4, fs()), au(e, 4))
                }, nt = function (e) {
                    13 === e.tag && (ms(e, 67108864, fs()), au(e, 67108864))
                }, at = function (e) {
                    if (13 === e.tag) {
                        var t = fs(),
                            n = ps(e);
                        ms(e, n, t), au(e, n)
                    }
                }, rt = function (e, t) {
                    return t()
                }, Ce = function (e, t, n) {
                    switch (t) {
                        case "input":
                            if (ne(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var a = n[t];
                                    if (a !== e && a.form === e.form) {
                                        var r = or(a);
                                        if (!r) throw Error(i(90));
                                        J(a), ne(a, r)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ue(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ie(e, !!n.multiple, t, !1)
                    }
                }, Le = xs, Ae = function (e, t, n, a, r) {
                    var o = Tl;
                    Tl |= 4;
                    try {
                        return Qr(98, e.bind(null, t, n, a, r))
                    } finally {
                        0 === (Tl = o) && ($l(), Gr())
                    }
                }, Ie = function () {
                    0 === (49 & Tl) && (function () {
                        if (null !== rs) {
                            var e = rs;
                            rs = null, e.forEach((function (e) {
                                e.expiredLanes |= 24 & e.pendingLanes, vs(e, Vr())
                            }))
                        }
                        Gr()
                    }(), Is())
                }, Re = function (e, t) {
                    var n = Tl;
                    Tl |= 2;
                    try {
                        return e(t)
                    } finally {
                        0 === (Tl = n) && ($l(), Gr())
                    }
                };
                var su = {
                        Events: [ar, rr, or, Oe, Te, Is, {
                            current: !1
                        }]
                    },
                    uu = {
                        findFiberByHostInstance: nr,
                        bundleType: 0,
                        version: "17.0.2",
                        rendererPackageName: "react-dom"
                    },
                    cu = {
                        bundleType: uu.bundleType,
                        version: uu.version,
                        rendererPackageName: uu.rendererPackageName,
                        rendererConfig: uu.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: w.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function (e) {
                            return null === (e = Ze(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: uu.findFiberByHostInstance || function () {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!du.isDisabled && du.supportsFiber) try {
                        kr = du.inject(cu), Sr = du
                    } catch (ve) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = su, t.createPortal = lu, t.findDOMNode = function (e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(i(188));
                        throw Error(i(268, Object.keys(e)))
                    }
                    return e = null === (e = Ze(t)) ? null : e.stateNode
                }, t.flushSync = function (e, t) {
                    var n = Tl;
                    if (0 !== (48 & n)) return e(t);
                    Tl |= 1;
                    try {
                        if (e) return Qr(99, e.bind(null, t))
                    } finally {
                        Tl = n, Gr()
                    }
                }, t.hydrate = function (e, t, n) {
                    if (!ou(t)) throw Error(i(200));
                    return iu(null, e, t, !0, n)
                }, t.render = function (e, t, n) {
                    if (!ou(t)) throw Error(i(200));
                    return iu(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function (e) {
                    if (!ou(e)) throw Error(i(40));
                    return !!e._reactRootContainer && (ws((function () {
                        iu(null, null, e, !1, (function () {
                            e._reactRootContainer = null, e[er] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = xs, t.unstable_createPortal = function (e, t) {
                    return lu(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
                }, t.unstable_renderSubtreeIntoContainer = function (e, t, n, a) {
                    if (!ou(n)) throw Error(i(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                    return iu(e, t, n, !1, a)
                }, t.version = "17.0.2"
            },
            164: function (e, t, n) {
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(463)
            },
            374: function (e, t, n) {
                n(725);
                var a = n(791),
                    r = 60103;
                if (t.Fragment = 60107, "function" === typeof Symbol && Symbol.for) {
                    var o = Symbol.for;
                    r = o("react.element"), t.Fragment = o("react.fragment")
                }
                var i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = Object.prototype.hasOwnProperty,
                    s = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(e, t, n) {
                    var a, o = {},
                        u = null,
                        c = null;
                    for (a in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) l.call(t, a) && !s.hasOwnProperty(a) && (o[a] = t[a]);
                    if (e && e.defaultProps)
                        for (a in t = e.defaultProps) void 0 === o[a] && (o[a] = t[a]);
                    return {
                        $$typeof: r,
                        type: e,
                        key: u,
                        ref: c,
                        props: o,
                        _owner: i.current
                    }
                }
                t.jsx = u, t.jsxs = u
            },
            117: function (e, t, n) {
                var a = n(725),
                    r = 60103,
                    o = 60106;
                t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
                var i = 60109,
                    l = 60110,
                    s = 60112;
                t.Suspense = 60113;
                var u = 60115,
                    c = 60116;
                if ("function" === typeof Symbol && Symbol.for) {
                    var d = Symbol.for;
                    r = d("react.element"), o = d("react.portal"), t.Fragment = d("react.fragment"), t.StrictMode = d("react.strict_mode"), t.Profiler = d("react.profiler"), i = d("react.provider"), l = d("react.context"), s = d("react.forward_ref"), t.Suspense = d("react.suspense"), u = d("react.memo"), c = d("react.lazy")
                }
                var f = "function" === typeof Symbol && Symbol.iterator;

                function p(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var m = {
                        isMounted: function () {
                            return !1
                        },
                        enqueueForceUpdate: function () {},
                        enqueueReplaceState: function () {},
                        enqueueSetState: function () {}
                    },
                    h = {};

                function v(e, t, n) {
                    this.props = e, this.context = t, this.refs = h, this.updater = n || m
                }

                function g() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = h, this.updater = n || m
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function (e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(p(85));
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, v.prototype.forceUpdate = function (e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, g.prototype = v.prototype;
                var y = b.prototype = new g;
                y.constructor = b, a(y, v.prototype), y.isPureReactComponent = !0;
                var x = {
                        current: null
                    },
                    w = Object.prototype.hasOwnProperty,
                    j = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function k(e, t, n) {
                    var a, o = {},
                        i = null,
                        l = null;
                    if (null != t)
                        for (a in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) w.call(t, a) && !j.hasOwnProperty(a) && (o[a] = t[a]);
                    var s = arguments.length - 2;
                    if (1 === s) o.children = n;
                    else if (1 < s) {
                        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
                        o.children = u
                    }
                    if (e && e.defaultProps)
                        for (a in s = e.defaultProps) void 0 === o[a] && (o[a] = s[a]);
                    return {
                        $$typeof: r,
                        type: e,
                        key: i,
                        ref: l,
                        props: o,
                        _owner: x.current
                    }
                }

                function S(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === r
                }
                var E = /\/+/g;

                function N(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function (e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function (e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function C(e, t, n, a, i) {
                    var l = typeof e;
                    "undefined" !== l && "boolean" !== l || (e = null);
                    var s = !1;
                    if (null === e) s = !0;
                    else switch (l) {
                        case "string":
                        case "number":
                            s = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case r:
                                case o:
                                    s = !0
                            }
                    }
                    if (s) return i = i(s = e), e = "" === a ? "." + N(s, 0) : a, Array.isArray(i) ? (n = "", null != e && (n = e.replace(E, "$&/") + "/"), C(i, t, n, "", (function (e) {
                        return e
                    }))) : null != i && (S(i) && (i = function (e, t) {
                        return {
                            $$typeof: r,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(E, "$&/") + "/") + e)), t.push(i)), 1;
                    if (s = 0, a = "" === a ? "." : a + ":", Array.isArray(e))
                        for (var u = 0; u < e.length; u++) {
                            var c = a + N(l = e[u], u);
                            s += C(l, t, n, c, i)
                        } else if (c = function (e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof (e = f && e[f] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), u = 0; !(l = e.next()).done;) s += C(l = l.value, t, n, c = a + N(l, u++), i);
                        else if ("object" === l) throw t = "" + e, Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                    return s
                }

                function _(e, t, n) {
                    if (null == e) return e;
                    var a = [],
                        r = 0;
                    return C(e, a, "", "", (function (e) {
                        return t.call(n, e, r++)
                    })), a
                }

                function P(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        t = t(), e._status = 0, e._result = t, t.then((function (t) {
                            0 === e._status && (t = t.default, e._status = 1, e._result = t)
                        }), (function (t) {
                            0 === e._status && (e._status = 2, e._result = t)
                        }))
                    }
                    if (1 === e._status) return e._result;
                    throw e._result
                }
                var z = {
                    current: null
                };

                function O() {
                    var e = z.current;
                    if (null === e) throw Error(p(321));
                    return e
                }
                var T = {
                    ReactCurrentDispatcher: z,
                    ReactCurrentBatchConfig: {
                        transition: 0
                    },
                    ReactCurrentOwner: x,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: a
                };
                t.Children = {
                    map: _,
                    forEach: function (e, t, n) {
                        _(e, (function () {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function (e) {
                        var t = 0;
                        return _(e, (function () {
                            t++
                        })), t
                    },
                    toArray: function (e) {
                        return _(e, (function (e) {
                            return e
                        })) || []
                    },
                    only: function (e) {
                        if (!S(e)) throw Error(p(143));
                        return e
                    }
                }, t.Component = v, t.PureComponent = b, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, t.cloneElement = function (e, t, n) {
                    if (null === e || void 0 === e) throw Error(p(267, e));
                    var o = a({}, e.props),
                        i = e.key,
                        l = e.ref,
                        s = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (l = t.ref, s = x.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                        for (c in t) w.call(t, c) && !j.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) o.children = n;
                    else if (1 < c) {
                        u = Array(c);
                        for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
                        o.children = u
                    }
                    return {
                        $$typeof: r,
                        type: e.type,
                        key: i,
                        ref: l,
                        props: o,
                        _owner: s
                    }
                }, t.createContext = function (e, t) {
                    return void 0 === t && (t = null), (e = {
                        $$typeof: l,
                        _calculateChangedBits: t,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = {
                        $$typeof: i,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = k, t.createFactory = function (e) {
                    var t = k.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function () {
                    return {
                        current: null
                    }
                }, t.forwardRef = function (e) {
                    return {
                        $$typeof: s,
                        render: e
                    }
                }, t.isValidElement = S, t.lazy = function (e) {
                    return {
                        $$typeof: c,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: P
                    }
                }, t.memo = function (e, t) {
                    return {
                        $$typeof: u,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.useCallback = function (e, t) {
                    return O().useCallback(e, t)
                }, t.useContext = function (e, t) {
                    return O().useContext(e, t)
                }, t.useDebugValue = function () {}, t.useEffect = function (e, t) {
                    return O().useEffect(e, t)
                }, t.useImperativeHandle = function (e, t, n) {
                    return O().useImperativeHandle(e, t, n)
                }, t.useLayoutEffect = function (e, t) {
                    return O().useLayoutEffect(e, t)
                }, t.useMemo = function (e, t) {
                    return O().useMemo(e, t)
                }, t.useReducer = function (e, t, n) {
                    return O().useReducer(e, t, n)
                }, t.useRef = function (e) {
                    return O().useRef(e)
                }, t.useState = function (e) {
                    return O().useState(e)
                }, t.version = "17.0.2"
            },
            791: function (e, t, n) {
                e.exports = n(117)
            },
            184: function (e, t, n) {
                e.exports = n(374)
            },
            813: function (e, t) {
                var n, a, r, o;
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var i = performance;
                    t.unstable_now = function () {
                        return i.now()
                    }
                } else {
                    var l = Date,
                        s = l.now();
                    t.unstable_now = function () {
                        return l.now() - s
                    }
                }
                if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                    var u = null,
                        c = null,
                        d = function e() {
                            if (null !== u) try {
                                var n = t.unstable_now();
                                u(!0, n), u = null
                            } catch (a) {
                                throw setTimeout(e, 0), a
                            }
                        };
                    n = function (e) {
                        null !== u ? setTimeout(n, 0, e) : (u = e, setTimeout(d, 0))
                    }, a = function (e, t) {
                        c = setTimeout(e, t)
                    }, r = function () {
                        clearTimeout(c)
                    }, t.unstable_shouldYield = function () {
                        return !1
                    }, o = t.unstable_forceFrameRate = function () {}
                } else {
                    var f = window.setTimeout,
                        p = window.clearTimeout;
                    if ("undefined" !== typeof console) {
                        var m = window.cancelAnimationFrame;
                        "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                    }
                    var h = !1,
                        v = null,
                        g = -1,
                        b = 5,
                        y = 0;
                    t.unstable_shouldYield = function () {
                        return t.unstable_now() >= y
                    }, o = function () {}, t.unstable_forceFrameRate = function (e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < e ? Math.floor(1e3 / e) : 5
                    };
                    var x = new MessageChannel,
                        w = x.port2;
                    x.port1.onmessage = function () {
                        if (null !== v) {
                            var e = t.unstable_now();
                            y = e + b;
                            try {
                                v(!0, e) ? w.postMessage(null) : (h = !1, v = null)
                            } catch (n) {
                                throw w.postMessage(null), n
                            }
                        } else h = !1
                    }, n = function (e) {
                        v = e, h || (h = !0, w.postMessage(null))
                    }, a = function (e, n) {
                        g = f((function () {
                            e(t.unstable_now())
                        }), n)
                    }, r = function () {
                        p(g), g = -1
                    }
                }

                function j(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (;;) {
                        var a = n - 1 >>> 1,
                            r = e[a];
                        if (!(void 0 !== r && 0 < E(r, t))) break e;
                        e[a] = t, e[n] = r, n = a
                    }
                }

                function k(e) {
                    return void 0 === (e = e[0]) ? null : e
                }

                function S(e) {
                    var t = e[0];
                    if (void 0 !== t) {
                        var n = e.pop();
                        if (n !== t) {
                            e[0] = n;
                            e: for (var a = 0, r = e.length; a < r;) {
                                var o = 2 * (a + 1) - 1,
                                    i = e[o],
                                    l = o + 1,
                                    s = e[l];
                                if (void 0 !== i && 0 > E(i, n)) void 0 !== s && 0 > E(s, i) ? (e[a] = s, e[l] = n, a = l) : (e[a] = i, e[o] = n, a = o);
                                else {
                                    if (!(void 0 !== s && 0 > E(s, n))) break e;
                                    e[a] = s, e[l] = n, a = l
                                }
                            }
                        }
                        return t
                    }
                    return null
                }

                function E(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                var N = [],
                    C = [],
                    _ = 1,
                    P = null,
                    z = 3,
                    O = !1,
                    T = !1,
                    L = !1;

                function A(e) {
                    for (var t = k(C); null !== t;) {
                        if (null === t.callback) S(C);
                        else {
                            if (!(t.startTime <= e)) break;
                            S(C), t.sortIndex = t.expirationTime, j(N, t)
                        }
                        t = k(C)
                    }
                }

                function I(e) {
                    if (L = !1, A(e), !T)
                        if (null !== k(N)) T = !0, n(R);
                        else {
                            var t = k(C);
                            null !== t && a(I, t.startTime - e)
                        }
                }

                function R(e, n) {
                    T = !1, L && (L = !1, r()), O = !0;
                    var o = z;
                    try {
                        for (A(n), P = k(N); null !== P && (!(P.expirationTime > n) || e && !t.unstable_shouldYield());) {
                            var i = P.callback;
                            if ("function" === typeof i) {
                                P.callback = null, z = P.priorityLevel;
                                var l = i(P.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof l ? P.callback = l : P === k(N) && S(N), A(n)
                            } else S(N);
                            P = k(N)
                        }
                        if (null !== P) var s = !0;
                        else {
                            var u = k(C);
                            null !== u && a(I, u.startTime - n), s = !1
                        }
                        return s
                    } finally {
                        P = null, z = o, O = !1
                    }
                }
                var q = o;
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                    e.callback = null
                }, t.unstable_continueExecution = function () {
                    T || O || (T = !0, n(R))
                }, t.unstable_getCurrentPriorityLevel = function () {
                    return z
                }, t.unstable_getFirstCallbackNode = function () {
                    return k(N)
                }, t.unstable_next = function (e) {
                    switch (z) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = z
                    }
                    var n = z;
                    z = t;
                    try {
                        return e()
                    } finally {
                        z = n
                    }
                }, t.unstable_pauseExecution = function () {}, t.unstable_requestPaint = q, t.unstable_runWithPriority = function (e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = z;
                    z = e;
                    try {
                        return t()
                    } finally {
                        z = n
                    }
                }, t.unstable_scheduleCallback = function (e, o, i) {
                    var l = t.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof (i = i.delay) && 0 < i ? l + i : l : i = l, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: _++,
                        callback: o,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: s = i + s,
                        sortIndex: -1
                    }, i > l ? (e.sortIndex = i, j(C, e), null === k(N) && e === k(C) && (L ? r() : L = !0, a(I, i - l))) : (e.sortIndex = s, j(N, e), T || O || (T = !0, n(R))), e
                }, t.unstable_wrapCallback = function (e) {
                    var t = z;
                    return function () {
                        var n = z;
                        z = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            z = n
                        }
                    }
                }
            },
            296: function (e, t, n) {
                e.exports = n(813)
            }
        },
        t = {};

    function n(a) {
        var r = t[a];
        if (void 0 !== r) return r.exports;
        var o = t[a] = {
            exports: {}
        };
        return e[a](o, o.exports, n), o.exports
    }
    n.m = e, n.d = function (e, t) {
            for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
        }, n.f = {}, n.e = function (e) {
            return Promise.all(Object.keys(n.f).reduce((function (t, a) {
                return n.f[a](e, t), t
            }), []))
        }, n.u = function (e) {
            return "./js/" + e + ".841058ce.chunk.js"
        }, n.miniCssF = function (e) {}, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function () {
            var e = {},
                t = "6notarial:";
            n.l = function (a, r, o, i) {
                if (e[a]) e[a].push(r);
                else {
                    var l, s;
                    if (void 0 !== o)
                        for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                            var d = u[c];
                            if (d.getAttribute("src") == a || d.getAttribute("data-webpack") == t + o) {
                                l = d;
                                break
                            }
                        }
                    l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, n.nc && l.setAttribute("nonce", n.nc), l.setAttribute("data-webpack", t + o), l.src = a), e[a] = [r];
                    var f = function (t, n) {
                            l.onerror = l.onload = null, clearTimeout(p);
                            var r = e[a];
                            if (delete e[a], l.parentNode && l.parentNode.removeChild(l), r && r.forEach((function (e) {
                                    return e(n)
                                })), t) return t(n)
                        },
                        p = setTimeout(f.bind(null, void 0, {
                            type: "timeout",
                            target: l
                        }), 12e4);
                    l.onerror = f.bind(null, l.onerror), l.onload = f.bind(null, l.onload), s && document.head.appendChild(l)
                }
            }
        }(), n.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "./",
        function () {
            var e = {
                179: 0
            };
            n.f.j = function (t, a) {
                var r = n.o(e, t) ? e[t] : void 0;
                if (0 !== r)
                    if (r) a.push(r[2]);
                    else {
                        var o = new Promise((function (n, a) {
                            r = e[t] = [n, a]
                        }));
                        a.push(r[2] = o);
                        var i = n.p + n.u(t),
                            l = new Error;
                        n.l(i, (function (a) {
                            if (n.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                                var o = a && ("load" === a.type ? "missing" : a.type),
                                    i = a && a.target && a.target.src;
                                l.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", l.name = "ChunkLoadError", l.type = o, l.request = i, r[1](l)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function (t, a) {
                    var r, o, i = a[0],
                        l = a[1],
                        s = a[2],
                        u = 0;
                    if (i.some((function (t) {
                            return 0 !== e[t]
                        }))) {
                        for (r in l) n.o(l, r) && (n.m[r] = l[r]);
                        if (s) s(n)
                    }
                    for (t && t(a); u < i.length; u++) o = i[u], n.o(e, o) && e[o] && e[o][0](), e[o] = 0
                },
                a = self.webpackChunk_6notarial = self.webpackChunk_6notarial || [];
            a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        }(),
        function () {
            var e = n(791),
                t = n(164),
                a = function (e) {
                    e && e instanceof Function && n.e(377).then(n.bind(n, 377)).then((function (t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            r = t.getFCP,
                            o = t.getLCP,
                            i = t.getTTFB;
                        n(e), a(e), r(e), o(e), i(e)
                    }))
                },
                r = n(184);

            function o() {
                return (0, r.jsx)("i", {
                    className: "ti-facebook pr-2"
                })
            }

            function i() {
                return (0, r.jsx)("i", {
                    className: "ti-instagram pr-2"
                })
            }

            function l() {
                return (0, r.jsx)("i", {
                    className: "ti-email"
                })
            }
            var s = n.p + "static/media/logo.308a8ebba5202020748fd88b52150ce3.svg";

            function u() {
                return (0, r.jsx)("div", {
                    className: "d-none d-lg-block",
                    id: "logo",
                    children: (0, r.jsx)("img", {
                        src: s,
                        alt: "Logo"
                    })
                })
            }

            function c(e) {
                return (0, r.jsx)("div", {
                    className: "icon-block",
                    children: e.Icon
                })
            }

            function d(e) {
                return (0, r.jsxs)("div", {
                    className: "info-block",
                    children: [(0, r.jsx)("h5", {
                        className: "font-weight-500",
                        children: e.Title
                    }), (0, r.jsx)("p", {
                        children: e.Description
                    })]
                })
            }

            function f() {
                return (0, r.jsx)("i", {
                    className: "ti-time"
                })
            }

            function p() {
                return (0, r.jsx)("i", {
                    className: "ti-mobile"
                })
            }

            function m() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: "top-bar navbar-dark ",
                        id: "top-bar",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsxs)("div", {
                                className: "row align-items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-8 col-md-10 top-bar-content",
                                    children: (0, r.jsx)("div", {
                                        className: "text-white",
                                        children: (0, r.jsx)("span", {
                                            className: "ml-1 size-1",
                                            children: "15 de novembro, 428, Campo Grande/ MS, 79002-140"
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-4 ml-lg-auto col-md-2",
                                    children: (0, r.jsxs)("ul", {
                                        className: "d-flex list-unstyled header-socials float-lg-right top-bar-content",
                                        children: [(0, r.jsx)("li", {
                                            children: (0, r.jsx)("a", {
                                                href: "https://www.facebook.com/6oficio/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, r.jsx)(o, {})
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsx)("a", {
                                                href: "https://www.instagram.com/6oficio/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, r.jsx)(i, {})
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsx)("a", {
                                                href: "mailto:atendimento@6notarial.com.br",
                                                children: (0, r.jsx)(l, {})
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)("div", {
                        className: "logo-bar d-none d-md-block d-lg-block bg-light",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsxs)("div", {
                                className: "row",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-2",
                                    children: (0, r.jsx)(u, {})
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-9 justify-content-end ml-lg-auto d-flex col-12",
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsxs)("div", {
                                            className: "top-info-block d-inline-flex",
                                            children: [(0, r.jsx)(c, {
                                                Icon: (0, r.jsx)(p, {})
                                            }), (0, r.jsx)(d, {
                                                Title: "(67) 3382-2590 (67)99919-6848",
                                                Description: "Contate-nos"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "top-info-block d-inline-flex",
                                            children: [(0, r.jsx)(c, {
                                                Icon: (0, r.jsx)(l, {})
                                            }), (0, r.jsx)(d, {
                                                Title: "atendimento@6notarial.com.br",
                                                Description: "Envie um e-mail"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "top-info-block d-inline-flex",
                                            children: [(0, r.jsx)(c, {
                                                Icon: (0, r.jsx)(f, {})
                                            }), (0, r.jsx)(d, {
                                                Title: "Seg-Sex 8:00-17:00",
                                                Description: "Funcionamento"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }

            function h(e) {
                var t = "true" === e.target ? "_black" : "_self";
                return (0, r.jsx)("li", {
                    className: "nav-item ",
                    children: (0, r.jsx)("a", {
                        href: e.href,
                        className: "nav-link js-scroll-trigger",
                        target: t,
                        rel: "noopener noreferrer",
                        children: e.name
                    })
                })
            }

            function v(e) {
                var t = "true" === e.target ? "_black" : "_self";
                return (0, r.jsx)("a", {
                    className: "dropdown-item ",
                    href: e.href,
                    target: t,
                    rel: "noopener noreferrer",
                    children: e.content
                })
            }

            function g(e) {
                return (0, r.jsx)("div", {
                    className: "modal fade mr-3",
                    id: "modal".concat(e.modalId),
                    tabIndex: "-1",
                    role: "dialog",
                    "aria-labelledby": "myModalLabel",
                    children: (0, r.jsx)("div", {
                        className: "modal-dialog modal-lg",
                        role: "document",
                        children: (0, r.jsxs)("div", {
                            className: "modal-content mnh-80",
                            children: [(0, r.jsxs)("div", {
                                className: "modal-header",
                                children: [(0, r.jsx)("h2", {
                                    className: "modal-title",
                                    children: e.title
                                }), (0, r.jsx)("button", {
                                    type: "button",
                                    className: "close",
                                    "data-dismiss": "modal",
                                    "aria-label": "Close",
                                    children: (0, r.jsx)("span", {
                                        "aria-hidden": "true",
                                        children: "\xd7"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "modal-body blog-content",
                                children: e.content
                            }), (0, r.jsx)("div", {
                                className: "modal-footer",
                                children: (0, r.jsx)("button", {
                                    type: "button",
                                    className: "btn btn-primary",
                                    "data-dismiss": "modal",
                                    children: "Fechar"
                                })
                            })]
                        })
                    })
                })
            }
            var b = {
                autenticacao: {
                    title: "Autentica\xe7\xe3o de c\xf3pias",
                    content: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("h5", {
                                children: "O que \xe9?"
                            }), (0, r.jsxs)("p", {
                                children: ["A ", (0, r.jsx)("strong", {
                                    children: "c\xf3pia autenticada"
                                }), " \xe9 a reprodu\xe7\xe3o de um documento, na qual o tabeli\xe3o atesta que se trata de c\xf3pia fiel ao documento original, que conserva todos os sinais caracter\xedsticos e necess\xe1rios \xe0 sua identifica\xe7\xe3o."]
                            }), (0, r.jsx)("h5", {
                                children: "Como \xe9 feita?"
                            }), (0, r.jsx)("p", {
                                children: "A parte interessada apresenta o documento original no tabelionato de notas e solicita a c\xf3pia autenticada. A reprodu\xe7\xe3o do documento original pode ser feita no pr\xf3prio tabelionato ou fornecida pelo usu\xe1rio junto com o documento original. Em ambos os casos ser\xe1 conferida com o documento original para verificar se a c\xf3pia conserva seus elementos identificadores, em seguida \xe9 aposto um selo de autenticidade, carimbo e assinatura do encarregado pela autentica\xe7\xe3o."
                            }), (0, r.jsx)("p", {
                                children: "\xc9 vedada a utiliza\xe7\xe3o de c\xf3pia de documento, autenticada ou n\xe3o, para fazer nova autentica\xe7\xe3o, ou seja, a c\xf3pia autenticada s\xf3 pode ser feita mediante apresenta\xe7\xe3o de documentos originais. Tamb\xe9m \xe9 vedada a extra\xe7\xe3o de c\xf3pia autenticada se o documento original contiver rasuras, tiver sido adulterado por raspagem ou corretivo, bem como contiver escritos a l\xe1pis. No caso de documentos de identifica\xe7\xe3o, \xe9 vedada a extra\xe7\xe3o de c\xf3pia autenticada se o documento estiver replastificado."
                            })]
                        })
                    })
                },
                firma: {
                    title: "Abertura de Firmas",
                    content: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("h5", {
                                children: "O que \xe9?"
                            }), (0, r.jsxs)("p", {
                                children: ["Para a realiza\xe7\xe3o do ", (0, r.jsx)("em", {
                                    children: "reconhecimento de firma"
                                }), " \xe9 necess\xe1rio que a pessoa tenha aberto, previamente no tabelionato de notas, uma ficha de firma que \xe9 o dep\xf3sito do padr\xe3o de sua assinatura (ficha de firma)."]
                            }), (0, r.jsx)("p", {
                                children: "A ficha de firma n\xe3o tem prazo de validade, mas \xe9 necess\xe1ria a sua atualiza\xe7\xe3o caso a assinatura seja alterada."
                            }), (0, r.jsx)("h5", {
                                children: "Como \xe9 feito?"
                            }), (0, r.jsxs)("p", {
                                children: ["O interessado comparece ao tabelionato munido com a documenta\xe7\xe3o necess\xe1ria e assina duas vezes em um formul\xe1rio, preenchendo-o com seus dados. Com o padr\xe3o de assinatura arquivado no cart\xf3rio, documentos por ele assinado podem ser levados para o ", (0, r.jsx)("em", {
                                    children: "reconhecimento de firma por semelhan\xe7a"
                                }), "."]
                            }), (0, r.jsx)("h5", {
                                children: "Documentos necess\xe1rios"
                            }), (0, r.jsx)("p", {
                                children: "Para o preenchimento da ficha de abertura de firma devem ser apresentados os seguintes documentos originais:"
                            }), (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: "Documentos de Identifica\xe7\xe3o: C\xe9dula de Identidade ou RG; Registro Geral ou o modelo atual da Carteira Nacional de Habilita\xe7\xe3o (CNH), ou Carteira de Exerc\xedcio Profissional expedidas nos termos da Lei n\xba 6.206/75, pelos \xf3rg\xe3os de classe tais como OAB, CRM, CREA, entre outros, ou Carteiras de Identidade expedidas pelo Ex\xe9rcito, Marinha, Aeron\xe1utica e carteira de identifica\xe7\xe3o funcional dos Magistrados, membros do Minist\xe9rio P\xfablico e da Defensoria P\xfablica."
                                }), (0, r.jsx)("li", {
                                    children: "Cadastro de Pessoa F\xedsica (CPF);"
                                }), (0, r.jsx)("li", {
                                    children: "Certid\xe3o de Casamento (somente para a mulher/homem que alterou o nome ap\xf3s o casamento, separa\xe7\xe3o ou div\xf3rcio e n\xe3o alterou o documento de identidade);"
                                }), (0, r.jsx)("li", {
                                    children: "Registro Nacional de Estrangeiro (RNE) v\xe1lido, no caso de estrangeiros com visto permanente (*Pessoas maiores de 60 anos cuja validade do RNE expirou ap\xf3s completarem essa idade ou deficientes f\xedsicos est\xe3o dispensados da renova\xe7\xe3o desse documento);"
                                }), (0, r.jsx)("li", {
                                    children: "Passaporte v\xe1lido com prazo de validade do visto em vigor ou Carteira de Identidade do MERCOSUL (Argentina, Uruguai, Paraguai, Chile e Bol\xedvia), para estrangeiros com visto provis\xf3rio."
                                })]
                            }), (0, r.jsx)("h5", {
                                children: "Observa\xe7\xf5es"
                            }), (0, r.jsx)("p", {
                                children: "Pessoas semialfabetizadas e portadoras de defici\xeancia visual podem abrir firma, sem a necessidade de um acompanhante como testemunha."
                            }), (0, r.jsx)("p", {
                                children: "Analfabeto: n\xe3o h\xe1 como abrir firma de analfabeto com sua impress\xe3o digital;"
                            }), (0, r.jsx)("p", {
                                children: "Em casos de menores de 18 anos e maiores de 16 anos, \xe9 poss\xedvel a abertura e reconhecimento de firma;"
                            }), (0, r.jsx)("h4", {
                                className: "pt-5",
                                children: "RECONHECIMENTO DE FIRMA"
                            }), (0, r.jsx)("h5", {
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "O reconhecimento de firma \xe9 o ato pelo qual o tabeli\xe3o, que tem f\xe9 p\xfablica, atesta que a assinatura constante de um documento corresponde \xe0quela da pessoa que a lan\xe7ou."
                            }), (0, r.jsx)("p", {
                                children: "Ou seja, \xe9 uma declara\xe7\xe3o pela qual o tabeli\xe3o confirma a autenticidade ou semelhan\xe7a da assinatura de determinada pessoa em um documento. N\xe3o se refere ao teor do documento, mas t\xe3o somente \xe0 autenticidade da assinatura."
                            }), (0, r.jsx)("p", {
                                children: "As modalidades de reconhecimento de firma s\xe3o: reconhecimento de firma por autenticidade e reconhecimento de firma por semelhan\xe7a. Em ambos os casos dever\xe1 ser aberto um cart\xe3o de assinaturas/ficha de firma (ver Abertura de Firmas)."
                            }), (0, r.jsx)("p", {
                                children: "O que determina a modalidade de reconhecimento a ser praticada \xe9 eventual exig\xeancia legal ou do destinat\xe1rio do documento."
                            }), (0, r.jsx)("h5", {
                                children: (0, r.jsx)("u", {
                                    children: "Reconhecimento de firma por autenticidade"
                                })
                            }), (0, r.jsxs)("p", {
                                children: ["Ato de reconhecimento de assinatura em que o usu\xe1rio comprova, pessoalmente, que \xe9 signat\xe1rio do documento apresentado para o  ", (0, r.jsx)("em", {
                                    children: "reconhecimento de firma"
                                }), "."]
                            }), (0, r.jsx)("p", {
                                children: "O usu\xe1rio deve assinar, diante do tabeli\xe3o, o documento que pretende ter a firma reconhecida como aut\xeantica. Caso o documento j\xe1 esteja assinado, ser\xe1 exigida nova assinatura no documento."
                            }), (0, r.jsx)("p", {
                                children: "No momento do comparecimento dever\xe1 o comparecente assinar, al\xe9m do documento, um termo em livro pr\xf3prio do cart\xf3rio. Esse termo \xe9 a prova da aposi\xe7\xe3o da assinatura perante o agente dotado de f\xe9 p\xfablica."
                            }), (0, r.jsx)("h5", {
                                children: (0, r.jsx)("u", {
                                    children: "Reconhecimento de Firma por semelhan\xe7a"
                                })
                            }), (0, r.jsx)("p", {
                                children: "O reconhecimento de assinatura \xe9 realizado por semelhan\xe7a quando o tabelionato certifica que a assinatura aposta no documento confere com a assinatura depositada em seu banco de dados. Ou seja, o reconhecimento foi feito por meio da compara\xe7\xe3o da assinatura constante no documento com a assinatura depositada na ficha padr\xe3o do usu\xe1rio, n\xe3o sendo necess\xe1rio o seu comparecimento pessoal para o ato de reconhecimento de firma."
                            }), (0, r.jsx)("p", {
                                children: "O reconhecimento de firma por semelhan\xe7a pode ser com valor econ\xf4mico ou sem valor econ\xf4mico, de acordo com o conte\xfado ou natureza do documento."
                            }), (0, r.jsx)("h5", {
                                children: "O que \xe9 necess\xe1rio?"
                            }), (0, r.jsx)("p", {
                                children: "Para que o reconhecimento de firma possa ser feito, \xe9 necess\xe1rio que a pessoa que assinou o documento tenha \u201cficha de firma\u201d no cart\xf3rio de notas, o que \xe9 feito atrav\xe9s da abertura de firma."
                            }), (0, r.jsx)("p", {
                                children: "\xc9 importante que o portador do documento saiba o nome completo de quem assinou. Se o nome estiver incompleto ou errado, ou ainda se for um nome muito repetido, como Jos\xe9 da Silva, \xe9 necess\xe1rio o n\xfamero do RG ou do CPF da pessoa, caso estes dados n\xe3o constem no documento, para que a busca no sistema possa ser feita com sucesso, e sua ficha localizada."
                            }), (0, r.jsx)("p", {
                                children: "Para que o reconhecimento de firma seja feito, a assinatura do documento deve ser semelhante \xe0quela da ficha de firma. A ficha de firma n\xe3o tem prazo de validade, mas as pessoas mudam sua assinatura com o passar dos anos. Nestes casos, \xe9 preciso que a pessoa compare\xe7a novamente ao cart\xf3rio, para renovar sua ficha de firma."
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: \xe9 vedado o reconhecimento de firma em documentos sem data, com espa\xe7os em branco ou incompletos. Por isso, antes de comparecer ao cart\xf3rio, certifique-se de que todos os dados constantes no documento est\xe3o preenchidos e que o mesmo n\xe3o foi p\xf3s-datado."
                            })]
                        })
                    })
                },
                apostila: {
                    title: "Conven\xe7\xe3o da Apostila da Haia",
                    content: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("p", {
                                children: ["A palavra Apostila (em portugu\xeas) \xe9 de origem francesa, sendo grafada \u201d", (0, r.jsx)("em", {
                                    children: "Apostille"
                                }), "\u201d, que prov\xe9m do verbo \u201c", (0, r.jsx)("em", {
                                    children: "apostiller"
                                }), "\u201c, que significa Anota\xe7\xe3o. Assim sendo, apesar do significado corrente na L\xedngua Portuguesa que tem o significado de uma publica\xe7\xe3o, um significado adicional \xe9 que uma apostila consiste numa anota\xe7\xe3o \xe0 margem de um documento ou ao final de uma carta, por exemplo. Neste caso, a Apostila \xe9 definida como um certificado emitido nos termos da ", (0, r.jsx)("strong", {
                                    children: "Conven\xe7\xe3o da Apostila"
                                }), " que autentica a origem de um ", (0, r.jsx)("strong", {
                                    children: "Documento P\xfablico"
                                }), "."]
                            }), (0, r.jsxs)("p", {
                                children: ["O Conselho Nacional de Justi\xe7a (CNJ) \xe9 o respons\xe1vel por coordenar e regulamentar a aplica\xe7\xe3o da ", (0, r.jsx)("a", {
                                    href: "https://www.hcch.net/pt/instruments/conventions/full-text/?cid=41",
                                    target: "_blank",
                                    title: "Conven\xe7\xe3o Relativa \xe0 Supress\xe3o da Exig\xeancia da Legaliza\xe7\xe3o dos Actos P\xfablicos Estrangeiros",
                                    rel: "noreferrer",
                                    children: "Conven\xe7\xe3o da Apostila da Haia"
                                }), " no Brasil, que entra em vigor em agosto de 2016. O tratado, assinado no segundo semestre de 2015 pelo Brasil, tem o objetivo de agilizar e simplificar a legaliza\xe7\xe3o de documentos entre os 112 pa\xedses signat\xe1rios, permitindo o reconhecimento m\xfatuo de documentos brasileiros no exterior e de documentos estrangeiros no Brasil."]
                            }), (0, r.jsxs)("strong", {
                                children: ["Leia ", (0, r.jsx)("a", {
                                    href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8660.htm",
                                    title: "DECRETO N\xba 8.660, DE 29 DE JANEIRO DE 2016",
                                    rel: "noreferrer",
                                    children: "aqui"
                                }), " o texto integral."]
                            }), (0, r.jsx)("p", {
                                children: (0, r.jsx)("iframe", {
                                    width: "560",
                                    height: "315",
                                    src: "https://www.youtube-nocookie.com/embed/XJiCOn9eoNs",
                                    title: "YouTube video player",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                    allowFullScreen: !0
                                })
                            }), (0, r.jsx)("p", {
                                children: "A Conven\xe7\xe3o aplica-se aos atos p\xfablicos lavrados e apresentados em um dos pa\xedses signat\xe1rios. S\xe3o considerados como atos p\xfablicos:"
                            }), (0, r.jsxs)("ul", {
                                className: "li-hifen",
                                children: [(0, r.jsx)("li", {
                                    children: "Documentos provenientes de uma autoridade ou de um funcion\xe1rio dependente de qualquer jurisdi\xe7\xe3o do pa\xeds, compreendidos os provenientes do Minist\xe9rio P\xfablico, de um escriv\xe3o de direito ou de um oficial de dilig\xeancias;"
                                }), (0, r.jsx)("li", {
                                    children: "Documentos administrativos;"
                                }), (0, r.jsx)("li", {
                                    children: "Atos notariais;"
                                }), (0, r.jsx)("li", {
                                    children: "Declara\xe7\xf5es oficiais tais como men\xe7\xf5es de registro, vistos para data determinada e reconhecimento de assinatura, inseridos em atos de natureza privada."
                                })]
                            }), (0, r.jsxs)("p", {
                                children: ["A \xfanica ", (0, r.jsx)("strong", {
                                    children: "formalidade"
                                }), " que pode ser exigida para atestar a veracidade da assinatura, a qualidade e a autenticidade ser\xe1 o selo ou carimbo dado pela autoridade competente do pa\xeds donde o documento \xe9 origin\xe1rio. Esta formalidade n\xe3o pode ser exigida caso as leis, os regulamentos, os costumes que vigorem no pa\xeds onde se celebrou o ato afaste, simplifique ou dispense o ato da legaliza\xe7\xe3o."]
                            }), (0, r.jsxs)("p", {
                                children: ["Clique ", (0, r.jsx)("a", {
                                    href: "https://www.hcch.net/pt/states/authorities/details3/?aid=1043",
                                    target: "_blank",
                                    title: "Autoridade competente",
                                    rel: "noreferrer",
                                    children: "aqui"
                                }), " para saber quais s\xe3o as ", (0, r.jsx)("strong", {
                                    children: "autoridades competentes"
                                }), " no Brasil."]
                            }), (0, r.jsxs)("p", {
                                children: ["Para obter mais informa\xe7\xf5es sobre a Apostila, clique ", (0, r.jsx)("a", {
                                    href: "https://www.hcch.net/pt/instruments/conventions/specialised-sections/apostille",
                                    target: "_blank",
                                    title: "Mais informa\xe7\xf5es sobre Apostila da Haia",
                                    rel: "noreferrer",
                                    children: "aqui"
                                }), " ou acesse o ", (0, r.jsx)("a", {
                                    href: "https://www.hcch.net/pt/home",
                                    target: "_blank",
                                    title: "site da Confer\xeancia da Haia de Direito Internacional Privado",
                                    rel: "noreferrer",
                                    children: "site da Confer\xeancia da Haia de Direito Internacional Privado"
                                }), "."]
                            })]
                        })
                    })
                },
                escritura: {
                    title: "Escrituras",
                    content: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("h4", {
                                className: "pt-3",
                                children: "ESCRITURA DE COMPRA DE VENDA"
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "A Escritura de Compra e Venda \xe9 o ato lavrado no cart\xf3rio de notas por meio do qual uma das partes vende determinado bem (m\xf3vel ou im\xf3vel) para outra."
                            }), (0, r.jsx)("h5", {
                                children: "Como \xe9 feita?"
                            }), (0, r.jsx)("p", {
                                children: "A escritura de compra e venda deve ser feita no cart\xf3rio de notas, mediante agendamento pr\xe9vio, para que seja coletada a documenta\xe7\xe3o necess\xe1ria \xe0 realiza\xe7\xe3o do neg\xf3cio jur\xeddico, bem como para que sejam feitos eventuais esclarecimentos \xe0s partes."
                            }), (0, r.jsx)("p", {
                                children: "Na data marcada, os interessados devem comparecer ao cart\xf3rio, de posse de seus documentos pessoais originais, para a assinatura da escritura."
                            }), (0, r.jsxs)("p", {
                                children: ["A ", (0, r.jsx)("em", {
                                    children: "escritura p\xfablica"
                                }), " \xe9 obrigat\xf3ria para a transfer\xeancia de bens im\xf3veis de valor superior a 30 sal\xe1rios m\xednimos."]
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("u", {
                                    children: "Aten\xe7\xe3o:"
                                }), " Depois de lavrada a escritura de compra e venda do im\xf3vel, ela deve ser registrada no cart\xf3rio de registro de im\xf3veis. Voc\xea pode solicitar que o pr\xf3prio tabelionato providencie esse tr\xe2mite junto ao registro imobili\xe1rio."]
                            }), (0, r.jsx)("h4", {
                                className: "pt-5",
                                children: "ESCRITURA DE DOA\xc7\xc3O DE BENS"
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "A Escritura P\xfablica de Doa\xe7\xe3o \xe9 o ato feito e assinado por meio do qual uma das partes doa determinado bem (m\xf3vel ou im\xf3vel) para outra."
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: geralmente a doa\xe7\xe3o \xe9 gratuita, mas tamb\xe9m pode ser onerosa, ou seja, pode ser estipulada uma contrapresta\xe7\xe3o, como por exemplo, o compromisso de se construir uma escola no terreno doado."
                            }), (0, r.jsx)("h5", {
                                children: "Como \xe9 feita?"
                            }), (0, r.jsx)("p", {
                                children: "A escritura de doa\xe7\xe3o deve ser agendada com o tabeli\xe3o ou com um de seus escreventes, sendo recomend\xe1vel que a parte fa\xe7a o agendamento pessoalmente para entregar a documenta\xe7\xe3o que possui e ser orientada sobre a necessidade de reunir outros documentos."
                            }), (0, r.jsx)("p", {
                                children: "Na data marcada, as partes comparecer\xe3o ao tabelionato de notas, munidas de seus documentos pessoais originais, para assinar a escritura. A assinatura da escritura ser\xe1 feita por todas as partes no mesmo momento. Aquele que vai receber o bem em doa\xe7\xe3o tamb\xe9m precisa estar presente, para aceitar o bem doado, exceto quando for doa\xe7\xe3o pura para pessoa absolutamente incapaz."
                            }), (0, r.jsx)("p", {
                                children: "A escritura p\xfablica \xe9 obrigat\xf3ria para a transfer\xeancia de bens im\xf3veis de valor superior a 30 sal\xe1rios m\xednimos."
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: depois de lavrada a escritura de doa\xe7\xe3o do im\xf3vel, ela deve ser registrada no cart\xf3rio de Registro de Im\xf3veis. Voc\xea pode solicitar que o pr\xf3prio tabelionato providencie esse tr\xe2mite junto ao registro imobili\xe1rio. Somente depois do registro a propriedade fica de fato transferida \xe0 pessoa do donat\xe1rio."
                            }), (0, r.jsx)("h4", {
                                className: "pt-5",
                                children: "INVENT\xc1RIO EXTRAJUDICIAL"
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "O invent\xe1rio \xe9 o procedimento utilizado para apura\xe7\xe3o dos bens, direitos e d\xedvidas do falecido. Com a partilha \xe9 instrumentalizada a transfer\xeancia da propriedade dos bens aos herdeiros. A Lei 11.441/07 facilitou a vida do cidad\xe3o e desburocratizou o procedimento de invent\xe1rio ao permitir a realiza\xe7\xe3o desse ato em cart\xf3rio, por meio de escritura p\xfablica, de forma r\xe1pida, simples e segura."
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: mesmo que a pessoa tenha falecido antes da Lei 11.441/07, tamb\xe9m \xe9 poss\xedvel fazer o invent\xe1rio por escritura p\xfablica, se preenchidos os requisitos da lei."
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "Quais s\xe3o os requisitos para a realiza\xe7\xe3o de um invent\xe1rio em cart\xf3rio?"
                            }), (0, r.jsx)("p", {
                                children: "Para que o invent\xe1rio possa ser feito em cart\xf3rio, \xe9 necess\xe1rio observar os seguintes requisitos:"
                            }), (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: "Todos os herdeiros devem ser maiores e capazes;"
                                }), (0, r.jsx)("li", {
                                    children: "Deve haver consenso entre os herdeiros quanto \xe0 partilha dos bens;"
                                }), (0, r.jsx)("li", {
                                    children: "O falecido n\xe3o pode ter deixado testamento, exceto se o testamento estiver caduco ou revogado;"
                                }), (0, r.jsx)("li", {
                                    children: "A escritura deve contar com a participa\xe7\xe3o de um advogado."
                                })]
                            }), (0, r.jsx)("p", {
                                children: "Se houver filhos menores ou incapazes o invent\xe1rio dever\xe1 ser feito judicialmente. Havendo filhos emancipados, o invent\xe1rio pode ser feito em cart\xf3rio."
                            }), (0, r.jsx)("p", {
                                children: "A escritura de invent\xe1rio n\xe3o depende de homologa\xe7\xe3o judicial."
                            }), (0, r.jsx)("p", {
                                children: "Para transfer\xeancia dos bens para o nome dos herdeiros \xe9 necess\xe1rio apresentar a escritura de invent\xe1rio para registro no Cart\xf3rio de Registro de Im\xf3veis (bens im\xf3veis), no Detran (ve\xedculos), no Cart\xf3rio de Registro Civil de Pessoas Jur\xeddicas ou na Junta Comercial (sociedades), nos bancos (contas banc\xe1rias) etc."
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: caso exista invent\xe1rio judicial em andamento, os herdeiros podem, a qualquer tempo, desistir do processo e optar pela escritura de invent\xe1rio extrajudicial."
                            }), (0, r.jsx)("h4", {
                                className: "pt-5",
                                children: "DIV\xd3RCIO E SEPARA\xc7\xc3O EXTRAJUDICIAL"
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "Separa\xe7\xe3o \xe9 uma forma de dissolu\xe7\xe3o da sociedade conjugal que extingue os deveres de coabita\xe7\xe3o e fidelidade pr\xf3prios do casamento, bem como o regime de bens. Fica mantido, contudo, o v\xednculo matrimonial entre os separados, que os impede de contrair outro casamento."
                            }), (0, r.jsx)("p", {
                                children: "Div\xf3rcio \xe9 uma forma de dissolu\xe7\xe3o do casamento por vontade das partes. Ele pode ser feito a qualquer tempo, independentemente do cumprimento de prazos. Somente ap\xf3s o div\xf3rcio \xe9 permitido aos c\xf4njuges contrair novo casamento."
                            }), (0, r.jsx)("p", {
                                children: "A Lei 11.441/07 facilitou a vida do cidad\xe3o e desburocratizou os procedimentos de div\xf3rcio e de separa\xe7\xe3o consensuais ao permitir a realiza\xe7\xe3o desses atos em cart\xf3rio de forma r\xe1pida, simples e segura."
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "Quais s\xe3o os requisitos para a realiza\xe7\xe3o de um div\xf3rcio ou separa\xe7\xe3o em cart\xf3rio?"
                            }), (0, r.jsx)("p", {
                                children: "O principal requisito \xe9 o consenso entre o casal quanto \xe0 decis\xe3o de separa\xe7\xe3o ou div\xf3rcio. Se houver lit\xedgio entre eles, o processo deve necessariamente ser judicial."
                            }), (0, r.jsx)("p", {
                                children: "Al\xe9m disso, o casal n\xe3o pode ter filhos menores ou incapazes. Se a mulher estiver gr\xe1vida, tamb\xe9m n\xe3o poder\xe1 ser feito o div\xf3rcio ou separa\xe7\xe3o. Todavia, se devidamente for comprovada a pr\xe9via resolu\xe7\xe3o judicial de todas as quest\xf5es referentes aos filhos menores (guarda, visita\xe7\xe3o e alimentos), poder\xe1 ser realizado o div\xf3rcio ou a separa\xe7\xe3o em cart\xf3rio."
                            }), (0, r.jsx)("p", {
                                children: "A escritura de separa\xe7\xe3o ou div\xf3rcio n\xe3o depende de homologa\xe7\xe3o judicial e deve ser averbada no Cart\xf3rio de Registro Civil para altera\xe7\xe3o do estado civil das partes."
                            }), (0, r.jsx)("p", {
                                children: "Para transfer\xeancia dos bens para o nome de cada um dos c\xf4njuges \xe9 necess\xe1rio apresentar a escritura para registro no Cart\xf3rio de Registro de Im\xf3veis (bens im\xf3veis), no Detran (ve\xedculos), no Cart\xf3rio de Registro Civil de Pessoas Jur\xeddicas ou na Junta Comercial (sociedades), nos Bancos (contas banc\xe1rias), etc."
                            }), (0, r.jsx)("p", {
                                children: "Mesmo havendo processo judicial em andamento, os interessados podem, a qualquer momento, desistir do processo e optar pela separa\xe7\xe3o ou div\xf3rcio consensual em cart\xf3rio, desde que preenchidos os requisitos legais."
                            }), (0, r.jsx)("p", {
                                children: "\xc9 livre a escolha do Cart\xf3rio de Notas para lavratura da escritura, independente do domic\xedlio das partes ou do local do casamento."
                            }), (0, r.jsx)("p", {
                                children: "Al\xe9m disso, a lei exige a participa\xe7\xe3o de um advogado como assistente jur\xeddico das partes nas escrituras de separa\xe7\xe3o e div\xf3rcio. As partes podem ter advogados distintos ou um s\xf3 advogado para ambos."
                            }), (0, r.jsx)("p", {
                                children: "Os c\xf4njuges tamb\xe9m podem se fazer representar por procura\xe7\xe3o p\xfablica, feita em cart\xf3rio de notas, a qual dever\xe1 conter poderes especiais e expressos para essa finalidade, com prazo de validade de 30 (trinta) dias."
                            }), (0, r.jsx)("h4", {
                                className: "pt-5",
                                children: "DECLARA\xc7\xc3O DE UNI\xc3O EST\xc1VEL"
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "\xc9 a uni\xe3o entre duas pessoas, configurada na conviv\xeancia p\xfablica, cont\xednua e duradoura com o objetivo de constitui\xe7\xe3o de fam\xedlia. O Supremo Tribunal Federal atribuiu \xe0s uni\xf5es homoafetivas (entre pessoas do mesmo sexo) os mesmos efeitos da uni\xe3o est\xe1vel heteroafetiva (entre pessoas do sexo oposto)."
                            }), (0, r.jsx)("p", {
                                children: "Aplicam-se \xe0 uni\xe3o est\xe1vel os deveres de lealdade, respeito, assist\xeancia, e de guarda, sustento e educa\xe7\xe3o dos filhos."
                            }), (0, r.jsx)("p", {
                                children: "O casal pode formalizar a exist\xeancia da uni\xe3o mediante escritura p\xfablica declarat\xf3ria de uni\xe3o est\xe1vel. A escritura pode ser utilizada para fixar a data do in\xedcio da uni\xe3o est\xe1vel, o regime de bens entre os conviventes, eventual altera\xe7\xe3o do nome, bem como para garantir direitos junto ao INSS, conv\xeanios m\xe9dicos, odontol\xf3gicos, clubes etc."
                            }), (0, r.jsx)("h4", {
                                className: "pt-5",
                                children: "EMANCIPA\xc7\xc3O"
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "Emancipa\xe7\xe3o volunt\xe1ria \xe9 o ato pelo qual os pais autorizam o adolescente, com idade entre 16 e 18 anos, a praticar todos os atos da vida civil, passando a responder por esses atos como se fosse maior de idade."
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "Como \xe9 feita?"
                            }), (0, r.jsx)("p", {
                                children: "A emancipa\xe7\xe3o \xe9 feita por escritura p\xfablica, no cart\xf3rio de notas. Trata-se de ato irrevog\xe1vel que torna o menor plenamente capaz. \xc9 obrigat\xf3rio o comparecimento do pai, da m\xe3e e do filho a ser emancipado, o qual necessariamente deve ser maior de 16 (dezesseis) anos."
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: A escritura de emancipa\xe7\xe3o somente gera efeitos em rela\xe7\xe3o a terceiros depois de registrada no Registro Civil das Pessoas Naturais da comarca onde residir o emancipado (artigo 89 da Lei 6.015/73 \u2013 Lei dos Registros P\xfablicos)."
                            }), (0, r.jsx)("h4", {
                                className: "pt-5",
                                children: "ATA NOTARIAL"
                            }), (0, r.jsx)("h5", {
                                className: "pt-3",
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "A ata notarial \xe9 um instrumento p\xfablico no qual o tabeli\xe3o documenta, de forma imparcial, um fato, uma situa\xe7\xe3o ou uma circunst\xe2ncia presenciada por ele, perpetuando-os no tempo. A ata notarial tem efic\xe1cia probat\xf3ria, presumindo-se verdadeiros os fatos nela contidos. \xc9 um importante meio de prova na esfera judicial, conforme disposto no artigo 384 do C\xf3digo de Processo Civil (Lei 13.105/2015)."
                            }), (0, r.jsx)("p", {
                                children: "Ela pode ser utilizada, por exemplo, para comprovar a exist\xeancia e o conte\xfado de sites na internet, conversas de Whatsapp, realiza\xe7\xe3o de assembleias de pessoas jur\xeddicas, o estado de im\xf3veis na entrega de chaves ou atestar a presen\xe7a de uma pessoa em determinado lugar ou a ocorr\xeancia de qualquer fato."
                            }), (0, r.jsx)("p", {
                                children: "O interessado poder\xe1 solicitar a lavratura da ata notarial, bem como a realiza\xe7\xe3o de dilig\xeancias dentro da circunscri\xe7\xe3o a qual pertence o cart\xf3rio, para certifica\xe7\xe3o de qualquer fato."
                            })]
                        })
                    })
                },
                procuracao: {
                    title: "Procura\xe7\xe3o e Substabelecimento",
                    content: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("h5", {
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "Procura\xe7\xe3o \xe9 o instrumento pelo qual uma pessoa nomeia outra de sua confian\xe7a como seu representante (procurador), para agir em seu nome em determinada situa\xe7\xe3o em que n\xe3o possa estar presente."
                            }), (0, r.jsx)("p", {
                                children: " Na representa\xe7\xe3o para a pr\xe1tica de atos complexos e solenes como, por exemplo, venda e doa\xe7\xe3o de bens im\xf3veis, representa\xe7\xe3o em casamento ou em escrituras de div\xf3rcio e invent\xe1rio, a lei exige poderes especiais e procura\xe7\xe3o na forma p\xfablica, feita em cart\xf3rio."
                            }), (0, r.jsx)("p", {
                                children: "A representa\xe7\xe3o para a pr\xe1tica de atos que a lei n\xe3o exige escritura p\xfablica pode ser feita por procura\xe7\xe3o particular, com firma reconhecida em cart\xf3rio."
                            }), (0, r.jsxs)("p", {
                                children: [" Aten\xe7\xe3o: as procura\xe7\xf5es para fins previdenci\xe1rios( ", (0, r.jsx)("abbr", {
                                    title: "Instituto Nacional do Seguro Social",
                                    className: "initialism ",
                                    children: "INSS"
                                }), ") s\xe3o feitas gratuitamente nos cart\xf3rios do estado de S\xe3o Paulo."]
                            }), (0, r.jsx)("h5", {
                                children: " Documentos Necess\xe1rios"
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("strong", {
                                    children: "Pessoa F\xedsica:"
                                }), " O interessado em nomear um procurador dever\xe1 apresentar seus documentos pessoais originais(", (0, r.jsx)("abbr", {
                                    title: "Registro Geral",
                                    className: "initialism",
                                    children: "RG"
                                }), ", ", (0, r.jsx)("abbr", {
                                    title: "Cadastro de Pessoa F\xedsica",
                                    className: "initialism ",
                                    children: "CPF"
                                }), " e certid\xe3o de casamento). Os dados pessoais do procurador(nome, ", (0, r.jsx)("abbr", {
                                    title: "Registro Geral",
                                    children: "RG"
                                }), ", ", (0, r.jsx)("abbr", {
                                    title: "Cadastro de Pessoa F\xedsica",
                                    className: "initialism",
                                    children: "CPF"
                                }), ", estado civil, profiss\xe3o e endere\xe7o) devem ser informados, sendo recomend\xe1vel que sejam apresentadas as c\xf3pias dos documentos para confer\xeancia."]
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("strong", {
                                    children: "Pessoa Jur\xeddica:"
                                }), " O interessado dever\xe1 apresentar original ou c\xf3pia autenticada do contrato social e de suas altera\xe7\xf5es, ata de nomea\xe7\xe3o da diretoria, CNPJ, al\xe9m do ", (0, r.jsx)("abbr", {
                                    title: "Registro Geral",
                                    children: "RG"
                                }), " e ", (0, r.jsx)("abbr", {
                                    title: "Cadastro de Pessoa F\xedsica",
                                    className: "initialism",
                                    children: "CPF"
                                }), " originais do representante que ir\xe1 assinar o documento.Em procura\xe7\xf5es relativas a bens im\xf3veis \xe9 recomend\xe1vel apresentar a certid\xe3o do im\xf3vel."]
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: desde 14 de agosto de 2016, a legaliza\xe7\xe3o dos documentos foi substitu\xedda pelo Apostilamento, previsto na Conven\xe7\xe3o de Haia, inicialmente feito pelos cart\xf3rios das capitais, segundo procedimento definido pelo Conselho Nacional de Justi\xe7a (CNJ)."
                            }), (0, r.jsx)("h5", {
                                children: " O que \xe9 substabelecimento de procura\xe7\xe3o ? Quais os seus efeitos?"
                            }), (0, r.jsx)("p", {
                                children: "Substabelecimento \xe9 o instrumento pelo qual o procurador transfere os poderes recebidos para outra pessoa, que ir\xe1 substitu\xed-lo na pr\xe1tica dos atos em nome do outorgante origin\xe1rio."
                            }), (0, r.jsxs)("p", {
                                children: [" O substabelecimento pode ser total ou parcial, com ou sem reserva de poderes.O substabelecimento segue a mesma forma exigida para a pr\xe1tica do ato.Ou seja, se a lei determinar que o ato \xe9 solene e deve ser praticado por instrumento p\xfablico, o substabelecimento da procura\xe7\xe3o p\xfablica tamb\xe9m dever\xe1 ser feito sob a forma p\xfablica.Os efeitos est\xe3o no artigo 667 do ", (0, r.jsx)("cite", {
                                    children: "C\xf3digo Civil."
                                })]
                            }), (0, r.jsx)("h5", {
                                children: "O que \xe9 procura\xe7\xe3o em causa pr\xf3pria?"
                            }), (0, r.jsx)("p", {
                                children: "\xc9 a procura\xe7\xe3o que tem uma cl\xe1usula especial que permite ao procurador adquirir o im\xf3vel para si pr\xf3prio. Para que ela tenha plena validade \xe9 importante estabelecer o pre\xe7o de venda ou fazer constar que o valor j\xe1 foi recebido anteriormente, bem como o recolhido tribut\xe1rio correspondente."
                            })]
                        })
                    })
                },
                testamento: {
                    title: "Testamento",
                    content: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("h5", {
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "Testamento \xe9 o ato pelo qual a pessoa declara ao tabeli\xe3o sua vontade, para depois de sua morte. O testamento pode ser utilizado para disposi\xe7\xf5es patrimoniais e n\xe3o patrimoniais."
                            }), (0, r.jsx)("p", {
                                children: "Quem tem herdeiros necess\xe1rios (filhos, netos, pais, av\xf3s, marido ou mulher) deve reservar a eles a leg\xedtima (metade dos bens) prevista em lei, mas poder\xe1 dispor, mediante testamento, da parte dispon\xedvel de seus bens (a outra metade)."
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: voc\xea sabia que muitos lit\xedgios podem ser evitados mediante um planejamento sucess\xf3rio feito atrav\xe9s de testamento?"
                            }), (0, r.jsx)("h5", {
                                children: "Quais s\xe3o os requisitos do testamento p\xfablico?"
                            }), (0, r.jsx)("p", {
                                children: "O testamento p\xfablico \xe9 um ato personal\xedssimo que deve ser feito pessoalmente pelo interessado perante um tabeli\xe3o de notas. Qualquer pessoa, maior de 16 anos, que esteja em plena capacidade e em condi\xe7\xf5es de expressar sua vontade perante o tabeli\xe3o pode fazer um testamento p\xfablico."
                            }), (0, r.jsx)("p", {
                                children: "A lei exige a presen\xe7a de duas testemunhas para o ato, as quais n\xe3o podem ser parentes do testador nem do benefici\xe1rio."
                            }), (0, r.jsxs)("p", {
                                children: ["Aten\xe7\xe3o: o testamento p\xfablico, diferentemente do testamento particular, \xe9 o mais seguro porque fica arquivado no livro do tabeli\xe3o, e sua exist\xeancia fica registrada no Registro Central de Testamentos (RCTO), m\xf3dulo integrante da ", (0, r.jsx)("abbr", {
                                    title: "Central Notarial de Servi\xe7os Eletr\xf4nicos Compartilhados",
                                    className: "initialism",
                                    children: "Censec"
                                }), ", que \xe9 obrigatoriamente consultado para processar invent\xe1rios judiciais ou lavrar escrituras p\xfablicas de invent\xe1rios."]
                            }), (0, r.jsx)("p", {
                                children: "O invent\xe1rio poder\xe1 ser lavrado em cart\xf3rio de notas quando houver testamento, se todos os interessados forem capazes e concordes, nas seguintes hip\xf3teses:"
                            }), (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: "om expressa autoriza\xe7\xe3o do ju\xedzo sucess\xf3rio competente, nos autos do procedimento de abertura e cumprimento de testamento;"
                                }), (0, r.jsxs)("li", {
                                    children: ["os casos de testamento revogado, caduco ou declarado inv\xe1lido por decis\xe3o judicial transitada em julgado. Se houver disposi\xe7\xe3o no testamento reconhecendo filho ou qualquer outra declara\xe7\xe3o irrevog\xe1vel, a lavratura de escritura \xe9 vedada e o invent\xe1rio dever\xe1 ser feito judicialmente (", (0, r.jsx)("cite", {
                                        children: "Provimento CGJ n\xba 37/2016"
                                    }), ")."]
                                })]
                            }), (0, r.jsx)("h5", {
                                children: "\xc9 poss\xedvel alterar o conte\xfado de um testamento?"
                            }), (0, r.jsx)("p", {
                                children: "Um testamento pode ser modificado ou revogado pelo testador, total ou parcialmente, a qualquer momento, por meio de outro testamento."
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: A cl\xe1usula de reconhecimento de filho em testamento \xe9 irrevog\xe1vel."
                            }), (0, r.jsx)("h5", {
                                children: "O que \xe9 testamento cerrado?"
                            }), (0, r.jsx)("p", {
                                children: "O testamento cerrado ou secreto \xe9 aquele escrito e assinado pelo pr\xf3prio testador e aprovado pelo tabeli\xe3o, na presen\xe7a de duas testemunhas."
                            }), (0, r.jsx)("p", {
                                children: "O tabeli\xe3o n\xe3o tem acesso ao conte\xfado do documento e apenas lavra o auto de aprova\xe7\xe3o, lacra e costura o instrumento."
                            }), (0, r.jsx)("p", {
                                children: "Aten\xe7\xe3o: em caso de perda do testamento cerrado ou rompimento do lacre, ele n\xe3o poder\xe1 ser cumprido, uma vez que n\xe3o fica arquivado nos livros do tabeli\xe3o nem no Registro Central de Testamentos (RCTO)."
                            }), (0, r.jsx)("h5", {
                                children: "O que \xe9 \u201ctestamento vital\u201d?"
                            }), (0, r.jsx)("p", {
                                children: "DAV (Diretivas Antecipadas de Vontade), tamb\xe9m conhecida como testamento vital, \xe9 um instrumento que permite ao paciente, antecipadamente, expressar sua vontade quanto \xe0s diretrizes de um tratamento m\xe9dico futuro, caso fique impossibilitado de manifestar sua vontade em virtude de acidente ou doen\xe7a grave."
                            }), (0, r.jsx)("p", {
                                children: "Por exemplo, por esse documento \xe9 poss\xedvel determinar que a pessoa n\xe3o deseja submeter-se a tratamento para prolongamento da vida de modo artificial, \xe0s custas de sofrimento, ou ainda, deixar claro que se recusa a receber transfus\xe3o de sangue em caso de acidente ou cirurgia. Na verdade, n\xe3o se trata de testamento, mas de escritura p\xfablica de declara\xe7\xe3o porque o testamento somente produz efeito ap\xf3s a morte do testador."
                            })]
                        })
                    })
                },
                alegacao: {
                    title: "Alega\xe7\xe3o de Venda de Ve\xedculo (Detran/MS)",
                    content: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("p", {
                                children: ["O usu\xe1rio tem a op\xe7\xe3o de n\xe3o ir at\xe9 uma ag\xeancia do ", (0, r.jsx)("abbr", {
                                    title: "Departamento Estadual de Tr\xe2nsito de Mato Grosso do Sul",
                                    className: "initialism",
                                    children: "Detran/MS"
                                }), " para realizar esse procedimento. Por\xe9m, quem optar por fazer o comunicado de venda em cart\xf3rio paga pelo servi\xe7o o valor correspondente a emiss\xe3o de uma certid\xe3o. No Detran o servi\xe7o n\xe3o tem custo, mas o recibo de venda deve estar assinado e autenticado pelo vendedor e comprador."]
                            }), (0, r.jsx)("p", {
                                children: "Com a comunica\xe7\xe3o de venda, as infra\xe7\xf5es e demais d\xe9bitos passam a ser registrados no nome do verdadeiro propriet\xe1rio, o comprador."
                            }), (0, r.jsx)("h5", {
                                children: "LEGISLA\xc7\xc3O"
                            }), (0, r.jsxs)("p", {
                                children: ["A comunica\xe7\xe3o \xe9 realizada em at\xe9 30 (trinta) dias da data da venda conforme prevista no ", (0, r.jsx)("em", {
                                    children: "Art. 134"
                                }), " do C\xf3digo de Tr\xe2nsito Brasileiro (", (0, r.jsx)("em", {
                                    children: "CTB"
                                }), "), este prazo vale tando para alega\xe7\xe3o feita no Detran/MS como para a comunica\xe7\xe3o realizada no cart\xf3rio, \xe9 vedado ainda o ato quando apenas uma das assinaturas tiver sido reconhecida, vale lembrar que o prazo para cancelamento da comunica\xe7\xe3o feita no cart\xf3rio \xe9 de at\xe9 24h do momento da comunica\xe7\xe3o. Caso as assinaturas forem reconhecidas em cart\xf3rios diferentes o cart\xf3rio que reconhecer a \xfaltima assinatura ser\xe1 o respons\xe1vel pela comunica\xe7\xe3o. Na conclus\xe3o do ato ser\xe1 fornecida \xe0s partes uma certid\xe3o de comunica\xe7\xe3o, onde ir\xe1 conter dados referente ao ato."]
                            }), (0, r.jsx)("p", {
                                children: "Entre em contato conosco para obter mais informa\xe7\xf5es. Segue link para consulta da norma refer\xeante a este servi\xe7o na \xedntegra."
                            })]
                        })
                    })
                },
                certidao: {
                    title: "Certid\xf5es",
                    content: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("h5", {
                                children: "O que \xe9?"
                            }), (0, r.jsx)("p", {
                                children: "Os atos praticados pelo Tabeli\xe3o de Notas, exceto o reconhecimento de firma e a autentica\xe7\xe3o de c\xf3pias, s\xe3o todos feitos em livro pr\xf3prio, que fica arquivado para sempre. Assim, de todos os atos feitos no livro do Tabeli\xe3o de Notas, se pode, a qualquer tempo, obter c\xf3pias fi\xe9is, com a mesma validade dos originais, que s\xe3o as certid\xf5es."
                            }), (0, r.jsx)("h5", {
                                children: "Como \xe9 feito?"
                            }), (0, r.jsx)("p", {
                                children: "A certid\xe3o pode ser obtida por c\xf3pia reprogr\xe1fica, sendo fornecida na hora, ou pode ser datilografada, sendo fornecida em um prazo m\xe1ximo de 5 dias \xfateis."
                            }), (0, r.jsx)("h5", {
                                children: "Documentos necess\xe1rios:"
                            }), (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: "C\xf3pia do ato do qual deseja uma certid\xe3o (certid\xe3o antiga) ou"
                                }), (0, r.jsx)("li", {
                                    children: "N\xfamero do Livro e da P\xe1gina em que est\xe1 o ato ou nome completo das partes constantes no ato."
                                }), (0, r.jsx)("li", {
                                    children: "Pedido de Certid\xe3o de Testamento"
                                })]
                            }), (0, r.jsxs)("p", {
                                children: ["Para realizar a solicita\xe7\xe3o de informa\xe7\xe3o sobre exist\xeancia de testamento \xe9 necess\xe1rio acessar o portal ", (0, r.jsx)("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://www.buscatestamento.org.br/",
                                    children: "https://www.buscatestamento.org.br/"
                                }), ", mais precisamente no link Busca de Testamento, realizar seu cadastro e encaminhar os documentos solicitados."]
                            })]
                        })
                    })
                },
                privacidade: {
                    title: "Lei Geral de Prote\xe7\xe3o de Dados",
                    content: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("p", {
                                className: "h4",
                                children: "Encarregado de dados do 6\xba Servi\xe7o Notarial"
                            }), (0, r.jsx)("blockquote", {
                                cite: "http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
                                children: "Segundo a LGPD em seu Art. 5\xba, inciso VIII, o encarregado \xe9 a \u201cpessoa indicada pelo controlador e operador para atuar como canal de comunica\xe7\xe3o entre o controlador, os titulares dos dados e a Autoridade Nacional de Prote\xe7\xe3o de Dados (ANPD)\u201d."
                            }), (0, r.jsx)("p", {
                                className: "mt-4 h4",
                                children: "Encarregado"
                            }), (0, r.jsx)("p", {
                                children: "Sr. Ariovaldo Pereira Rodrigues Neto - Tabeli\xe3o Interino"
                            }), (0, r.jsx)("p", {
                                className: "mt-5 h4",
                                children: "Atribui\xe7\xf5es do encarregado"
                            }), (0, r.jsx)("p", {
                                children: "Art. 41 da lei, \xa7 2\xba As atividades do encarregado consistem em:"
                            }), (0, r.jsxs)("ul", {
                                className: "list",
                                children: [(0, r.jsx)("li", {
                                    children: "I - aceitar reclama\xe7\xf5es e comunica\xe7\xf5es dos titulares, prestar esclarecimentos e adotar provid\xeancias;"
                                }), (0, r.jsx)("li", {
                                    children: "II - receber comunica\xe7\xf5es da autoridade nacional e adotar provid\xeancias;"
                                }), (0, r.jsx)("li", {
                                    children: "III - orientar os funcion\xe1rios e os contratados da entidade a respeito das pr\xe1ticas a serem tomadas em rela\xe7\xe3o \xe0 prote\xe7\xe3o de dados pessoais; e"
                                }), (0, r.jsx)("li", {
                                    children: "IV - executar as demais atribui\xe7\xf5es determinadas pelo controlador ou estabelecidas em normas complementares."
                                })]
                            }), (0, r.jsx)("p", {
                                className: "mt-4 h4",
                                children: "Canal de atendimento"
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("em", {
                                    children: "Digitalmente"
                                }), " - As solicita\xe7\xf5es poder\xe3o ser realizadas atrav\xe9s do e-mail ", (0, r.jsx)("a", {
                                    href: "mailto:privacidade@6notarial.com.br",
                                    children: "privacidade@6notarial.com.br"
                                }), ", devendo o pedido ser assinado digitalmente pelo titular dos dados utilizando ", (0, r.jsx)("a", {
                                    target: "_blank",
                                    href: "https://www.gov.br/iti/pt-br/assuntos/certificado-digital",
                                    rel: "noreferrer",
                                    children: "Certificado Digital"
                                }), " em acordo com o padr\xe3o ", (0, r.jsx)("abbr", {
                                    title: "Infraestrutura de Chaves P\xfablicas Brasileira \u2013 ICP-Brasil",
                                    className: "initialism",
                                    children: "ICP-Brasil"
                                }), ", acompanhada do Nome, E-mail, CPF e Telefone para contato."]
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("em", {
                                    children: "Presencialmente"
                                }), " - O titular poder\xe1 entregar seu pedido presencialmente, devidamente assinado, acompanhado de seu Nome, E-mail, CPF e Telefone para contato."]
                            }), (0, r.jsx)("p", {
                                children: "Em ambos os casos o titular receber\xe1 sua resposta de provid\xeancias por e-mail, ficando dispon\xedvel retira-la presencialmente."
                            })]
                        })
                    })
                }
            };

            function y() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: "main-navigation",
                        id: "mainmenu-area",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsxs)("nav", {
                                className: "navbar navbar-expand-lg navbar-dark main-nav navbar-togglable",
                                children: [(0, r.jsx)("span", {
                                    className: "navbar-brand d-lg-none d-block",
                                    children: (0, r.jsx)("h4", {
                                        children: "6\xba Servi\xe7o Notarial"
                                    })
                                }), (0, r.jsx)("button", {
                                    className: "navbar-toggler",
                                    type: "button",
                                    "data-toggle": "collapse",
                                    "data-target": "#navbarCollapse",
                                    "aria-controls": "navbarCollapse",
                                    "aria-expanded": "false",
                                    "aria-label": "Toggle navigation",
                                    children: (0, r.jsx)("span", {
                                        className: "ti-view-list"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navbarCollapse",
                                    children: [(0, r.jsxs)("ul", {
                                        className: "navbar-nav ",
                                        children: [(0, r.jsx)(h, {
                                            name: "Sobre",
                                            href: "#sobre"
                                        }), (0, r.jsx)(h, {
                                            name: "Servi\xe7os",
                                            href: "#services"
                                        }), (0, r.jsxs)("li", {
                                            className: "nav-item dropdown",
                                            children: [(0, r.jsx)("a", {
                                                className: "nav-link dropdown-toggle",
                                                href: "#navbarCollapse",
                                                id: "navbarWelcome",
                                                role: "button",
                                                "data-toggle": "dropdown",
                                                "aria-haspopup": "true",
                                                "aria-expanded": "false",
                                                children: "Links \xfateis"
                                            }), (0, r.jsxs)("div", {
                                                className: "dropdown-menu",
                                                "aria-labelledby": "navbarWelcome",
                                                children: [(0, r.jsx)(v, {
                                                    href: "https://buscatestamento.org.br/",
                                                    target: "true",
                                                    content: (0, r.jsxs)(r.Fragment, {
                                                        children: ["Busca de Testamento ", (0, r.jsx)("i", {
                                                            className: "ti-new-window"
                                                        })]
                                                    })
                                                }), (0, r.jsx)(v, {
                                                    href: "https://www.tjms.jus.br/corregedoria/pesquisa-selo",
                                                    target: "true",
                                                    content: (0, r.jsxs)(r.Fragment, {
                                                        children: ["Consulta de Selo - TJMS ", (0, r.jsx)("i", {
                                                            className: "ti-new-window"
                                                        })]
                                                    })
                                                }), (0, r.jsx)(v, {
                                                    href: "https://www2.detran.ms.gov.br/detranet/pserv/veiculo/consCV/index.asp",
                                                    target: "true",
                                                    content: (0, r.jsxs)(r.Fragment, {
                                                        children: ["Consulta de Alega\xe7\xe3o de Venda Detran/MS ", (0, r.jsx)("i", {
                                                            className: "ti-new-window"
                                                        })]
                                                    })
                                                }), (0, r.jsx)(v, {
                                                    href: "https://www.e-notariado.org.br/",
                                                    target: "true",
                                                    content: (0, r.jsxs)(r.Fragment, {
                                                        children: ["Atos Eletr\xf4nicos ", (0, r.jsx)("i", {
                                                            className: "ti-new-window"
                                                        })]
                                                    })
                                                })]
                                            })]
                                        }), (0, r.jsx)(h, {
                                            name: "Pre\xe7os",
                                            href: "https://www.tjms.jus.br/legislacao/visualizar.php?lei=21119",
                                            target: "true"
                                        }), (0, r.jsx)("li", {
                                            className: "nav-item ",
                                            children: (0, r.jsx)("a", {
                                                className: "nav-link js-scroll-trigger",
                                                href: "#navbarCollapse",
                                                "data-toggle": "modal",
                                                "data-target": "#modalPrivacidade",
                                                children: "Privacidade"
                                            })
                                        })]
                                    }), (0, r.jsx)("ul", {
                                        className: "ml-lg-auto list-unstyled m-0",
                                        children: (0, r.jsx)("li", {
                                            children: (0, r.jsxs)("a", {
                                                href: "https://api.whatsapp.com/send?phone=5567999196848",
                                                target: "_blank",
                                                className: "btn btn-white btn-circled",
                                                rel: "noreferrer",
                                                children: [(0, r.jsx)("i", {
                                                    className: ""
                                                }), "Envie uma mensagem"]
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    }), (0, r.jsx)(g, {
                        modalId: "Privacidade",
                        title: b.privacidade.title,
                        content: b.privacidade.content
                    })]
                })
            }
            var x = n.p + "static/media/banner_1.40809a8d52cb0850c127.png";

            function w(e) {
                return (0, r.jsxs)("div", {
                    id: "carouselMainBanner",
                    className: "carousel slide carousel-fade",
                    "data-ride": "carousel",
                    children: [(0, r.jsx)("ol", {
                        className: "carousel-indicators",
                        children: (0, r.jsx)("li", {
                            "data-target": "#carouselMainBanner",
                            "data-slide-to": "0",
                            className: "active"
                        })
                    }), (0, r.jsx)("div", {
                        className: "carousel-inner",
                        id: "innerCarousel",
                        children: (0, r.jsxs)("div", {
                            className: "carousel-item active",
                            children: [(0, r.jsx)("img", {
                                height: "100%",
                                src: e.banner,
                                alt: "..."
                            }), (0, r.jsxs)("div", {
                                className: "carousel-caption d-md-block",
                                children: [(0, r.jsx)("p", {
                                    className: "d-inline-flex h3 text-muted bg-white",
                                    children: e.title
                                }), (0, r.jsx)("p", {
                                    className: "d-inline-flex h4 text-muted bg-white",
                                    children: e.description
                                })]
                            })]
                        })
                    }), (0, r.jsxs)("a", {
                        className: "carousel-control-prev",
                        href: "#carouselMainBanner",
                        role: "button",
                        "data-slide": "prev",
                        children: [(0, r.jsx)("span", {
                            className: "carousel-control-prev-icon",
                            "aria-hidden": "true"
                        }), (0, r.jsx)("span", {
                            className: "visually-hidden"
                        })]
                    }), (0, r.jsxs)("a", {
                        className: "carousel-control-next",
                        href: "#carouselMainBanner",
                        role: "button",
                        "data-slide": "next",
                        children: [(0, r.jsx)("span", {
                            className: "carousel-control-next-icon",
                            "aria-hidden": "true"
                        }), (0, r.jsx)("span", {
                            className: "visually-hidden"
                        })]
                    })]
                })
            }

            function j() {
                return (0, r.jsx)(w, {
                    banner: x,
                    title: "Onde obter um certificado digital notarializado?",
                    description: "Dirija-se a um Tabelionato de Notas mais pr\xf3ximo e solicite a expedi\xe7\xe3o do seu certificado notarial. \xc9 gratuito!"
                })
            }
            var k = n.p + "static/media/predio-601x900.f63ec0c7371543b83237.jpg";

            function S(e) {
                return (0, r.jsx)("section", {
                    className: "section ".concat(e.bgColor),
                    id: "".concat(e.identifier),
                    children: (0, r.jsxs)("div", {
                        className: "container",
                        children: [e.head, (0, r.jsx)("div", {
                            className: "row",
                            children: e.content
                        })]
                    })
                })
            }

            function E() {
                return (0, r.jsx)(S, {
                    bgColor: "bg-light-beige",
                    identifier: "sobre",
                    head: "",
                    content: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: "row justy-content-center",
                            children: [(0, r.jsx)("div", {
                                className: "col-lg-3 col-sm-6 col-md-6",
                                children: (0, r.jsxs)("div", {
                                    className: "text-center feature-block mb-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "img-icon-block mb-1",
                                        children: (0, r.jsx)("i", {
                                            className: "ti-car"
                                        })
                                    }), (0, r.jsx)("h4", {
                                        className: "mb-0",
                                        children: "Estacionamento pr\xf3prio"
                                    }), (0, r.jsx)("p", {
                                        children: "Estacionamento gratuito para clientes."
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-3 col-sm-6 col-md-6",
                                children: (0, r.jsxs)("div", {
                                    className: "text-center feature-block mb-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "img-icon-block mb-1",
                                        children: (0, r.jsx)("i", {
                                            className: "ti-map-alt"
                                        })
                                    }), (0, r.jsx)("h4", {
                                        className: "mb-0",
                                        children: "F\xe1cil localiza\xe7\xe3o"
                                    }), (0, r.jsx)("p", {
                                        children: "Localizado frente a pra\xe7a Ary Coelho."
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-3 col-sm-6 col-md-6",
                                children: (0, r.jsxs)("div", {
                                    className: "text-center feature-block mb-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "img-icon-block mb-1",
                                        children: (0, r.jsx)("i", {
                                            className: "ti-signal"
                                        })
                                    }), (0, r.jsx)("h4", {
                                        className: "mb-0",
                                        children: "Ponto de acesso a internet"
                                    }), (0, r.jsx)("p", {
                                        children: "Acesso descomplicado via Check-in"
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-3 col-sm-6 col-md-6",
                                children: (0, r.jsxs)("div", {
                                    className: "text-center feature-block mb-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "img-icon-block mb-1",
                                        children: (0, r.jsx)("i", {
                                            className: "ti-stamp"
                                        })
                                    }), (0, r.jsx)("h4", {
                                        className: "mb-0",
                                        children: "Atendimento de qualidade"
                                    }), (0, r.jsx)("p", {
                                        className: "mb-3",
                                        children: "Buscamos sempre melhor atend\xea-los."
                                    })]
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "row",
                            children: [(0, r.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, r.jsx)("div", {
                                    className: "about-img",
                                    children: (0, r.jsx)("img", {
                                        src: k,
                                        alt: "Fachada da sede do Cart\xf3rio do 6\xba Of\xedcio de Notas",
                                        className: "img-fluid"
                                    })
                                })
                            }), (0, r.jsxs)("article", {
                                className: "col-lg-8 pl-5 pt-5 pr-4 mb-1",
                                children: [(0, r.jsx)("header", {
                                    children: (0, r.jsx)("h1", {
                                        className: "h2",
                                        children: "6\xba SERVI\xc7O NOTARIAL E ANTIGA  4\xba. CIRCUNSCRI\xc7\xc3O IMOBILI\xc1RIA"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "blog-content",
                                    children: [(0, r.jsx)("p", {
                                        children: "Cart\xf3rio localizado na regi\xe3o central da capital Sul-mato-grossense, tem atribui\xe7\xe3o de Tabelionato de Notas e/ou Servi\xe7o Notarial, no qual se lavram escrituras, procura\xe7\xf5es, invent\xe1rios, separa\xe7\xf5es, div\xf3rcios, Ata Notarial, Apostilamento de Haia e muitos outros servi\xe7os, bem como fazemos reconhecimento de firmas (assinaturas), autentica\xe7\xf5es e emiss\xe3o de certid\xf5es."
                                    }), (0, r.jsx)("p", {
                                        children: "A 4\xaa. Circunscri\xe7\xe3o Imobili\xe1ria abrangia os munic\xedpios de Corguinho, Ribas do Rio Pardo e Rochedo/MS, de forma que no per\xedodo de 1971 a 1982, os im\xf3veis situados nestes munic\xedpios foram registrados nesse cart\xf3rio, podendo nesse caso aqui serem emitidas Certid\xf5es de Transcri\xe7\xf5es e/ou matr\xedculas, isso, caso ainda n\xe3o tenham sido transferidos para as Comarcas de atual compet\xeancia."
                                    }), (0, r.jsx)("p", {
                                        children: "O Cart\xf3rio do 6\xba Of\xedcio de Notas e/ou 6\xba Servi\xe7o Notarial, era de titularidade do Sr. Izaias Gomes Ferro (in memoriam) e desde a data de 18 de Dezembro de 2017, responde interinamente pela Serventia o Sr. Ariovaldo Pereira R. Neto, o qual trabalhou sem interrup\xe7\xe3o no mesmo Servi\xe7o Notarial, como funcion\xe1rio desde a data de 1\xba de Mar\xe7o de 1983, mantendo assim a tradi\xe7\xe3o de excel\xeancia, seguran\xe7a jur\xeddica e qualidade nos servi\xe7os prestados."
                                    }), (0, r.jsxs)("p", {
                                        className: "pt-1",
                                        children: ["Fa\xe7a-nos uma ", (0, r.jsx)("a", {
                                            href: "https://g.page/6oficio?share",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "visita"
                                        }), "!"]
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }

            function N(e) {
                return (0, r.jsx)("div", {
                    className: "row justify-content-center",
                    children: (0, r.jsx)("div", {
                        className: "col-md-8 col-lg-6 text-center",
                        children: (0, r.jsxs)("div", {
                            className: "section-heading",
                            children: [(0, r.jsx)("h2", {
                                className: "section-title mb-2 " + e.color,
                                children: e.title
                            }), (0, r.jsx)("p", {
                                className: "mb-5 " + e.color,
                                children: e.description
                            })]
                        })
                    })
                })
            }

            function C(e) {
                return (0, r.jsx)("div", {
                    className: "col-lg-3 col-sm-6 col-md-6 card-thumb",
                    children: (0, r.jsx)("a", {
                        href: "_",
                        "data-toggle": "modal",
                        "data-target": "#modal".concat(e.modalId),
                        children: (0, r.jsxs)("div", {
                            className: "service-block box-shadow",
                            children: [(0, r.jsx)("i", {
                                className: "".concat(e.icon, " icons")
                            }), (0, r.jsx)("h3", {
                                children: e.content
                            })]
                        })
                    })
                })
            }

            function _() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(S, {
                        bgColor: "bg-transparent",
                        identifier: "services",
                        head: (0, r.jsx)(N, {
                            title: "Principais Servi\xe7os",
                            description: "Conhe\xe7a mais sobre os principais servi\xe7os oferecidos por n\xf3s.",
                            color: "text-white"
                        }),
                        content: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(C, {
                                modalId: "Autenticacao",
                                icon: "ti-stamp",
                                content: "Autentica\xe7\xe3o de c\xf3pia"
                            }), (0, r.jsx)(C, {
                                modalId: "Reconhecimento",
                                icon: "ti-id-badge",
                                content: "Abertura e Reconhecimento de Firma"
                            }), (0, r.jsx)(C, {
                                modalId: "Apostila",
                                icon: "ti-world",
                                content: "Conven\xe7\xe3o da Apostila da Haia"
                            }), (0, r.jsx)(C, {
                                modalId: "Escritura",
                                icon: "ti-home",
                                content: "Escrituras"
                            }), (0, r.jsx)(C, {
                                modalId: "Procuracao",
                                icon: "ti-id-badge",
                                content: "Procura\xe7\xe3o, Substabelecimento e Revoga\xe7\xe3o"
                            }), (0, r.jsx)(C, {
                                modalId: "Testamento",
                                icon: "ti-pencil-alt",
                                content: "Testamento"
                            }), (0, r.jsx)(C, {
                                modalId: "Alegacao",
                                icon: "ti-car",
                                content: "Alega\xe7\xe3o de Venda de Ve\xedculo (Detran/MS)"
                            }), (0, r.jsx)(C, {
                                modalId: "Certidao",
                                icon: "ti-files",
                                content: "Certid\xf5es"
                            })]
                        })
                    }), (0, r.jsx)(g, {
                        modalId: "Autenticacao",
                        title: b.autenticacao.title,
                        content: b.autenticacao.content
                    }), (0, r.jsx)(g, {
                        modalId: "Reconhecimento",
                        title: b.firma.title,
                        content: b.firma.content
                    }), (0, r.jsx)(g, {
                        modalId: "Apostila",
                        title: b.apostila.title,
                        content: b.apostila.content
                    }), (0, r.jsx)(g, {
                        modalId: "Escritura",
                        title: b.escritura.title,
                        content: b.escritura.content
                    }), (0, r.jsx)(g, {
                        modalId: "Procuracao",
                        title: b.procuracao.title,
                        content: b.procuracao.content
                    }), (0, r.jsx)(g, {
                        modalId: "Testamento",
                        title: b.testamento.title,
                        content: b.testamento.content
                    }), (0, r.jsx)(g, {
                        modalId: "Alegacao",
                        title: b.alegacao.title,
                        content: b.alegacao.content
                    }), (0, r.jsx)(g, {
                        modalId: "Certidao",
                        title: b.certidao.title,
                        content: b.certidao.content
                    })]
                })
            }

            function P() {
                return (0, r.jsx)("i", {
                    className: "ti-google pr-2"
                })
            }
            var z = new Date;

            function O() {
                return (0, r.jsx)("iframe", {
                    title: "Mapa",
                    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7475.988370764312!2d-54.616024!3d-20.465432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e618a1483461%3A0xd41437c5f22b86ee!2zNsKwIFNlcnZpw6dvIE5vdGFyaWFs!5e0!3m2!1spt-BR!2sbr!4v1680026104931!5m2!1spt-BR!2sbr",
                    allowFullScreen: "",
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade"
                })
            }

            function T() {
                return (0, r.jsxs)("footer", {
                    className: "section",
                    id: "footer",
                    children: [(0, r.jsx)("div", {
                        className: "overlay footer-overlay"
                    }), (0, r.jsxs)("div", {
                        className: "container",
                        children: [(0, r.jsxs)("div", {
                            className: "row justify-content-start",
                            children: [(0, r.jsx)("div", {
                                className: "col-lg-4 col-11",
                                children: (0, r.jsxs)("div", {
                                    className: "footer-widget",
                                    children: [(0, r.jsx)("h1", {
                                        className: "h3 text-white",
                                        children: "Fale conosco"
                                    }), (0, r.jsxs)("ul", {
                                        className: "footer-links-contact-us",
                                        children: [(0, r.jsxs)("li", {
                                            children: [(0, r.jsx)("i", {
                                                className: "ti-location-pin pr-2"
                                            }), "Rua 15 de Novembro, 428, Centro, Campo Grande/MS"]
                                        }), (0, r.jsxs)("li", {
                                            children: [(0, r.jsx)("i", {
                                                className: "ti-email pr-2"
                                            }), (0, r.jsx)("a", {
                                                href: "mailto:atendimento@6notarial.com.br",
                                                children: "atendimento@6notarial.com.br"
                                            })]
                                        }), (0, r.jsxs)("li", {
                                            children: [(0, r.jsx)("i", {
                                                className: "ti-mobile pr-2"
                                            }), (0, r.jsx)("a", {
                                                href: "tel:6733822590",
                                                children: "(67)3382-2590"
                                            }), " / ", (0, r.jsx)("a", {
                                                href: "tel:67999196848",
                                                children: "(67)99919-6848"
                                            })]
                                        }), (0, r.jsxs)("li", {
                                            children: [(0, r.jsx)("i", {
                                                className: "ti-time pr-2"
                                            }), "Seg-Sex ", (0, r.jsx)("time", {
                                                children: "8:00"
                                            }), "-", (0, r.jsx)("time", {
                                                children: "17:00"
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-2 col-6",
                                children: (0, r.jsxs)("div", {
                                    className: "footer-widget",
                                    children: [(0, r.jsx)("h1", {
                                        className: "h4 text-white",
                                        children: "Mapa do site"
                                    }), (0, r.jsxs)("ul", {
                                        className: "footer-links-site-map",
                                        children: [(0, r.jsx)("li", {
                                            children: (0, r.jsx)("a", {
                                                className: "js-scroll-trigger",
                                                href: "#top-bar",
                                                children: "\xcdnicio"
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsx)("a", {
                                                className: "js-scroll-trigger",
                                                href: "#sobre",
                                                children: "Quem Somos"
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsx)("a", {
                                                className: "js-scroll-trigger",
                                                href: "#services",
                                                children: "Servi\xe7os"
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsx)("a", {
                                                className: "js-scroll-trigger",
                                                href: "https://www.tjms.jus.br/legislacao/visualizar.php?lei=21119",
                                                target: "_black",
                                                rel: "noreferrer",
                                                children: "Tabela de Pre\xe7os"
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsx)("a", {
                                                className: "js-scroll-trigger",
                                                href: "#navbarCollapse",
                                                "data-toggle": "modal",
                                                "data-target": "#modalPrivacidade",
                                                children: "Privacidade"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-2 col-4",
                                children: (0, r.jsxs)("div", {
                                    className: "footer-widget",
                                    children: [(0, r.jsx)("h1", {
                                        className: "h4 text-white",
                                        children: "Siga-nos!"
                                    }), (0, r.jsxs)("ul", {
                                        className: "list-unstyled footer-links-site-map",
                                        children: [(0, r.jsx)("li", {
                                            children: (0, r.jsxs)("a", {
                                                href: "https://www.facebook.com/6oficio/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: [(0, r.jsx)(o, {}), "Facebook"]
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsxs)("a", {
                                                href: "https://www.instagram.com/6oficio/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: [(0, r.jsx)(i, {}), "Instagram"]
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsxs)("a", {
                                                href: "https://g.page/6oficio?share",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: [(0, r.jsx)(P, {}), "Google"]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, r.jsx)("div", {
                                    className: "footer-widget",
                                    children: (0, r.jsx)(O, {})
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "container footer-copy",
                            children: (0, r.jsx)("div", {
                                className: "d-flex justify-content-center col pt-2",
                                children: (0, r.jsxs)("p", {
                                    children: ["\xa9 ", z.getFullYear(), " 6\xba Servi\xe7o Notarial - hospedado por ", (0, r.jsx)("a", {
                                        href: "http://www.avianti.com.br/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Avianti"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
            var L = function () {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(m, {}), (0, r.jsx)(y, {}), (0, r.jsx)(j, {}), (0, r.jsx)(E, {}), (0, r.jsx)(_, {}), (0, r.jsx)(T, {})]
                })
            };
            t.render((0, r.jsx)(e.StrictMode, {
                children: (0, r.jsx)(L, {})
            }), document.getElementById("root")), setTimeout((function () {
                return document.getElementById("load").remove()
            }), 2e3), a()
        }()
}();
//# sourceMappingURL=main.5bba9410.js.map