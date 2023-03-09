var ch = Object.defineProperty;
var hh = (e, t, i) => t in e ? ch(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var $ = (e, t, i) => (hh(e, typeof t != "symbol" ? t + "" : t, i), i);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    n(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerpolicy && (o.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? o.credentials = "include" : s.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function n(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const o = i(s);
    fetch(s.href, o);
  }
})();
function To(e, t) {
  const i = /* @__PURE__ */ Object.create(null), n = e.split(",");
  for (let s = 0; s < n.length; s++)
    i[n[s]] = !0;
  return t ? (s) => !!i[s.toLowerCase()] : (s) => !!i[s];
}
function oi(e) {
  if (G(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], s = wt(n) ? ph(n) : oi(n);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else {
    if (wt(e))
      return e;
    if (ct(e))
      return e;
  }
}
const dh = /;(?![^(]*\))/g, uh = /:([^]+)/, fh = /\/\*.*?\*\//gs;
function ph(e) {
  const t = {};
  return e.replace(fh, "").split(dh).forEach((i) => {
    if (i) {
      const n = i.split(uh);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ms(e) {
  let t = "";
  if (wt(e))
    t = e;
  else if (G(e))
    for (let i = 0; i < e.length; i++) {
      const n = ms(e[i]);
      n && (t += n + " ");
    }
  else if (ct(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
const gh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mh = /* @__PURE__ */ To(gh);
function ol(e) {
  return !!e || e === "";
}
function _h(e, t) {
  if (e.length !== t.length)
    return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = _s(e[n], t[n]);
  return i;
}
function _s(e, t) {
  if (e === t)
    return !0;
  let i = hr(e), n = hr(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = en(e), n = en(t), i || n)
    return e === t;
  if (i = G(e), n = G(t), i || n)
    return i && n ? _h(e, t) : !1;
  if (i = ct(e), n = ct(t), i || n) {
    if (!i || !n)
      return !1;
    const s = Object.keys(e).length, o = Object.keys(t).length;
    if (s !== o)
      return !1;
    for (const r in e) {
      const a = e.hasOwnProperty(r), l = t.hasOwnProperty(r);
      if (a && !l || !a && l || !_s(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function bh(e, t) {
  return e.findIndex((i) => _s(i, t));
}
const Rt = (e) => wt(e) ? e : e == null ? "" : G(e) || ct(e) && (e.toString === ll || !X(e.toString)) ? JSON.stringify(e, rl, 2) : String(e), rl = (e, t) => t && t.__v_isRef ? rl(e, t.value) : pi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((i, [n, s]) => (i[`${n} =>`] = s, i), {})
} : xs(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ct(t) && !G(t) && !cl(t) ? String(t) : t, ht = {}, fi = [], ee = () => {
}, xh = () => !1, vh = /^on[^a-z]/, bs = (e) => vh.test(e), Ao = (e) => e.startsWith("onUpdate:"), Dt = Object.assign, Po = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, yh = Object.prototype.hasOwnProperty, st = (e, t) => yh.call(e, t), G = Array.isArray, pi = (e) => gn(e) === "[object Map]", xs = (e) => gn(e) === "[object Set]", hr = (e) => gn(e) === "[object Date]", X = (e) => typeof e == "function", wt = (e) => typeof e == "string", en = (e) => typeof e == "symbol", ct = (e) => e !== null && typeof e == "object", al = (e) => ct(e) && X(e.then) && X(e.catch), ll = Object.prototype.toString, gn = (e) => ll.call(e), Oh = (e) => gn(e).slice(8, -1), cl = (e) => gn(e) === "[object Object]", Ro = (e) => wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gn = /* @__PURE__ */ To(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => t[i] || (t[i] = e(i));
}, Eh = /-(\w)/g, ue = vs((e) => e.replace(Eh, (t, i) => i ? i.toUpperCase() : "")), Sh = /\B([A-Z])/g, Pi = vs((e) => e.replace(Sh, "-$1").toLowerCase()), ys = vs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gs = vs((e) => e ? `on${ys(e)}` : ""), nn = (e, t) => !Object.is(e, t), Wn = (e, t) => {
  for (let i = 0; i < e.length; i++)
    e[i](t);
}, Qn = (e, t, i) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: i
  });
}, Io = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let dr;
const wh = () => dr || (dr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Gt;
class hl {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = Gt, !t && Gt && (this.index = (Gt.scopes || (Gt.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const i = Gt;
      try {
        return Gt = this, t();
      } finally {
        Gt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Gt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Gt = this.parent;
  }
  stop(t) {
    if (this.active) {
      let i, n;
      for (i = 0, n = this.effects.length; i < n; i++)
        this.effects[i].stop();
      for (i = 0, n = this.cleanups.length; i < n; i++)
        this.cleanups[i]();
      if (this.scopes)
        for (i = 0, n = this.scopes.length; i < n; i++)
          this.scopes[i].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function dl(e) {
  return new hl(e);
}
function Ch(e, t = Gt) {
  t && t.active && t.effects.push(e);
}
function Th() {
  return Gt;
}
function Ah(e) {
  Gt && Gt.cleanups.push(e);
}
const Mo = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, ul = (e) => (e.w & De) > 0, fl = (e) => (e.n & De) > 0, Ph = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= De;
}, Rh = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let i = 0;
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      ul(s) && !fl(s) ? s.delete(e) : t[i++] = s, s.w &= ~De, s.n &= ~De;
    }
    t.length = i;
  }
}, io = /* @__PURE__ */ new WeakMap();
let Bi = 0, De = 1;
const no = 30;
let Qt;
const Je = Symbol(""), so = Symbol("");
class ko {
  constructor(t, i = null, n) {
    this.fn = t, this.scheduler = i, this.active = !0, this.deps = [], this.parent = void 0, Ch(this, n);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Qt, i = Ie;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Qt, Qt = this, Ie = !0, De = 1 << ++Bi, Bi <= no ? Ph(this) : ur(this), this.fn();
    } finally {
      Bi <= no && Rh(this), De = 1 << --Bi, Qt = this.parent, Ie = i, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Qt === this ? this.deferStop = !0 : this.active && (ur(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ur(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let i = 0; i < t.length; i++)
      t[i].delete(e);
    t.length = 0;
  }
}
let Ie = !0;
const pl = [];
function Ri() {
  pl.push(Ie), Ie = !1;
}
function Ii() {
  const e = pl.pop();
  Ie = e === void 0 ? !0 : e;
}
function Kt(e, t, i) {
  if (Ie && Qt) {
    let n = io.get(e);
    n || io.set(e, n = /* @__PURE__ */ new Map());
    let s = n.get(i);
    s || n.set(i, s = Mo()), gl(s);
  }
}
function gl(e, t) {
  let i = !1;
  Bi <= no ? fl(e) || (e.n |= De, i = !ul(e)) : i = !e.has(Qt), i && (e.add(Qt), Qt.deps.push(e));
}
function ve(e, t, i, n, s, o) {
  const r = io.get(e);
  if (!r)
    return;
  let a = [];
  if (t === "clear")
    a = [...r.values()];
  else if (i === "length" && G(e)) {
    const l = Io(n);
    r.forEach((c, h) => {
      (h === "length" || h >= l) && a.push(c);
    });
  } else
    switch (i !== void 0 && a.push(r.get(i)), t) {
      case "add":
        G(e) ? Ro(i) && a.push(r.get("length")) : (a.push(r.get(Je)), pi(e) && a.push(r.get(so)));
        break;
      case "delete":
        G(e) || (a.push(r.get(Je)), pi(e) && a.push(r.get(so)));
        break;
      case "set":
        pi(e) && a.push(r.get(Je));
        break;
    }
  if (a.length === 1)
    a[0] && oo(a[0]);
  else {
    const l = [];
    for (const c of a)
      c && l.push(...c);
    oo(Mo(l));
  }
}
function oo(e, t) {
  const i = G(e) ? e : [...e];
  for (const n of i)
    n.computed && fr(n);
  for (const n of i)
    n.computed || fr(n);
}
function fr(e, t) {
  (e !== Qt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Ih = /* @__PURE__ */ To("__proto__,__v_isRef,__isVue"), ml = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(en)
), Mh = /* @__PURE__ */ Do(), kh = /* @__PURE__ */ Do(!1, !0), Dh = /* @__PURE__ */ Do(!0), pr = /* @__PURE__ */ Lh();
function Lh() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...i) {
      const n = nt(this);
      for (let o = 0, r = this.length; o < r; o++)
        Kt(n, "get", o + "");
      const s = n[t](...i);
      return s === -1 || s === !1 ? n[t](...i.map(nt)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...i) {
      Ri();
      const n = nt(this)[t].apply(this, i);
      return Ii(), n;
    };
  }), e;
}
function Do(e = !1, t = !1) {
  return function(n, s, o) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && o === (e ? t ? Zh : yl : t ? vl : xl).get(n))
      return n;
    const r = G(n);
    if (!e && r && st(pr, s))
      return Reflect.get(pr, s, o);
    const a = Reflect.get(n, s, o);
    return (en(s) ? ml.has(s) : Ih(s)) || (e || Kt(n, "get", s), t) ? a : pt(a) ? r && Ro(s) ? a : a.value : ct(a) ? e ? Ol(a) : Es(a) : a;
  };
}
const Nh = /* @__PURE__ */ _l(), Hh = /* @__PURE__ */ _l(!0);
function _l(e = !1) {
  return function(i, n, s, o) {
    let r = i[n];
    if (xi(r) && pt(r) && !pt(s))
      return !1;
    if (!e && (!ts(s) && !xi(s) && (r = nt(r), s = nt(s)), !G(i) && pt(r) && !pt(s)))
      return r.value = s, !0;
    const a = G(i) && Ro(n) ? Number(n) < i.length : st(i, n), l = Reflect.set(i, n, s, o);
    return i === nt(o) && (a ? nn(s, r) && ve(i, "set", n, s) : ve(i, "add", n, s)), l;
  };
}
function zh(e, t) {
  const i = st(e, t);
  e[t];
  const n = Reflect.deleteProperty(e, t);
  return n && i && ve(e, "delete", t, void 0), n;
}
function Fh(e, t) {
  const i = Reflect.has(e, t);
  return (!en(t) || !ml.has(t)) && Kt(e, "has", t), i;
}
function Vh(e) {
  return Kt(e, "iterate", G(e) ? "length" : Je), Reflect.ownKeys(e);
}
const bl = {
  get: Mh,
  set: Nh,
  deleteProperty: zh,
  has: Fh,
  ownKeys: Vh
}, Bh = {
  get: Dh,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, Gh = /* @__PURE__ */ Dt({}, bl, {
  get: kh,
  set: Hh
}), Lo = (e) => e, Os = (e) => Reflect.getPrototypeOf(e);
function On(e, t, i = !1, n = !1) {
  e = e.__v_raw;
  const s = nt(e), o = nt(t);
  i || (t !== o && Kt(s, "get", t), Kt(s, "get", o));
  const { has: r } = Os(s), a = n ? Lo : i ? zo : sn;
  if (r.call(s, t))
    return a(e.get(t));
  if (r.call(s, o))
    return a(e.get(o));
  e !== s && e.get(t);
}
function En(e, t = !1) {
  const i = this.__v_raw, n = nt(i), s = nt(e);
  return t || (e !== s && Kt(n, "has", e), Kt(n, "has", s)), e === s ? i.has(e) : i.has(e) || i.has(s);
}
function Sn(e, t = !1) {
  return e = e.__v_raw, !t && Kt(nt(e), "iterate", Je), Reflect.get(e, "size", e);
}
function gr(e) {
  e = nt(e);
  const t = nt(this);
  return Os(t).has.call(t, e) || (t.add(e), ve(t, "add", e, e)), this;
}
function mr(e, t) {
  t = nt(t);
  const i = nt(this), { has: n, get: s } = Os(i);
  let o = n.call(i, e);
  o || (e = nt(e), o = n.call(i, e));
  const r = s.call(i, e);
  return i.set(e, t), o ? nn(t, r) && ve(i, "set", e, t) : ve(i, "add", e, t), this;
}
function _r(e) {
  const t = nt(this), { has: i, get: n } = Os(t);
  let s = i.call(t, e);
  s || (e = nt(e), s = i.call(t, e)), n && n.call(t, e);
  const o = t.delete(e);
  return s && ve(t, "delete", e, void 0), o;
}
function br() {
  const e = nt(this), t = e.size !== 0, i = e.clear();
  return t && ve(e, "clear", void 0, void 0), i;
}
function wn(e, t) {
  return function(n, s) {
    const o = this, r = o.__v_raw, a = nt(r), l = t ? Lo : e ? zo : sn;
    return !e && Kt(a, "iterate", Je), r.forEach((c, h) => n.call(s, l(c), l(h), o));
  };
}
function Cn(e, t, i) {
  return function(...n) {
    const s = this.__v_raw, o = nt(s), r = pi(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = s[e](...n), h = i ? Lo : t ? zo : sn;
    return !t && Kt(o, "iterate", l ? so : Je), {
      // iterator protocol
      next() {
        const { value: d, done: u } = c.next();
        return u ? { value: d, done: u } : {
          value: a ? [h(d[0]), h(d[1])] : h(d),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ee(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function Wh() {
  const e = {
    get(o) {
      return On(this, o);
    },
    get size() {
      return Sn(this);
    },
    has: En,
    add: gr,
    set: mr,
    delete: _r,
    clear: br,
    forEach: wn(!1, !1)
  }, t = {
    get(o) {
      return On(this, o, !1, !0);
    },
    get size() {
      return Sn(this);
    },
    has: En,
    add: gr,
    set: mr,
    delete: _r,
    clear: br,
    forEach: wn(!1, !0)
  }, i = {
    get(o) {
      return On(this, o, !0);
    },
    get size() {
      return Sn(this, !0);
    },
    has(o) {
      return En.call(this, o, !0);
    },
    add: Ee(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Ee(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Ee(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Ee(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: wn(!0, !1)
  }, n = {
    get(o) {
      return On(this, o, !0, !0);
    },
    get size() {
      return Sn(this, !0);
    },
    has(o) {
      return En.call(this, o, !0);
    },
    add: Ee(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Ee(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Ee(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Ee(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: wn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Cn(o, !1, !1), i[o] = Cn(o, !0, !1), t[o] = Cn(o, !1, !0), n[o] = Cn(o, !0, !0);
  }), [
    e,
    i,
    t,
    n
  ];
}
const [jh, Uh, Kh, $h] = /* @__PURE__ */ Wh();
function No(e, t) {
  const i = t ? e ? $h : Kh : e ? Uh : jh;
  return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(st(i, s) && s in n ? i : n, s, o);
}
const Yh = {
  get: /* @__PURE__ */ No(!1, !1)
}, Xh = {
  get: /* @__PURE__ */ No(!1, !0)
}, qh = {
  get: /* @__PURE__ */ No(!0, !1)
}, xl = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), Zh = /* @__PURE__ */ new WeakMap();
function Jh(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Qh(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jh(Oh(e));
}
function Es(e) {
  return xi(e) ? e : Ho(e, !1, bl, Yh, xl);
}
function td(e) {
  return Ho(e, !1, Gh, Xh, vl);
}
function Ol(e) {
  return Ho(e, !0, Bh, qh, yl);
}
function Ho(e, t, i, n, s) {
  if (!ct(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const r = Qh(e);
  if (r === 0)
    return e;
  const a = new Proxy(e, r === 2 ? n : i);
  return s.set(e, a), a;
}
function xe(e) {
  return xi(e) ? xe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xi(e) {
  return !!(e && e.__v_isReadonly);
}
function ts(e) {
  return !!(e && e.__v_isShallow);
}
function Ss(e) {
  return xe(e) || xi(e);
}
function nt(e) {
  const t = e && e.__v_raw;
  return t ? nt(t) : e;
}
function vi(e) {
  return Qn(e, "__v_skip", !0), e;
}
const sn = (e) => ct(e) ? Es(e) : e, zo = (e) => ct(e) ? Ol(e) : e;
function El(e) {
  Ie && Qt && (e = nt(e), gl(e.dep || (e.dep = Mo())));
}
function Sl(e, t) {
  e = nt(e), e.dep && oo(e.dep);
}
function pt(e) {
  return !!(e && e.__v_isRef === !0);
}
function jt(e) {
  return Cl(e, !1);
}
function wl(e) {
  return Cl(e, !0);
}
function Cl(e, t) {
  return pt(e) ? e : new ed(e, t);
}
class ed {
  constructor(t, i) {
    this.__v_isShallow = i, this.dep = void 0, this.__v_isRef = !0, this._rawValue = i ? t : nt(t), this._value = i ? t : sn(t);
  }
  get value() {
    return El(this), this._value;
  }
  set value(t) {
    const i = this.__v_isShallow || ts(t) || xi(t);
    t = i ? t : nt(t), nn(t, this._rawValue) && (this._rawValue = t, this._value = i ? t : sn(t), Sl(this));
  }
}
function K(e) {
  return pt(e) ? e.value : e;
}
const id = {
  get: (e, t, i) => K(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const s = e[t];
    return pt(s) && !pt(i) ? (s.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function Tl(e) {
  return xe(e) ? e : new Proxy(e, id);
}
function Mi(e) {
  const t = G(e) ? new Array(e.length) : {};
  for (const i in e)
    t[i] = Al(e, i);
  return t;
}
class nd {
  constructor(t, i, n) {
    this._object = t, this._key = i, this._defaultValue = n, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Al(e, t, i) {
  const n = e[t];
  return pt(n) ? n : new nd(e, t, i);
}
var Pl;
class sd {
  constructor(t, i, n, s) {
    this._setter = i, this.dep = void 0, this.__v_isRef = !0, this[Pl] = !1, this._dirty = !0, this.effect = new ko(t, () => {
      this._dirty || (this._dirty = !0, Sl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n;
  }
  get value() {
    const t = nt(this);
    return El(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Pl = "__v_isReadonly";
function od(e, t, i = !1) {
  let n, s;
  const o = X(e);
  return o ? (n = e, s = ee) : (n = e.get, s = e.set), new sd(n, s, o || !s, i);
}
function Me(e, t, i, n) {
  let s;
  try {
    s = n ? e(...n) : e();
  } catch (o) {
    ws(o, t, i);
  }
  return s;
}
function ie(e, t, i, n) {
  if (X(e)) {
    const o = Me(e, t, i, n);
    return o && al(o) && o.catch((r) => {
      ws(r, t, i);
    }), o;
  }
  const s = [];
  for (let o = 0; o < e.length; o++)
    s.push(ie(e[o], t, i, n));
  return s;
}
function ws(e, t, i, n = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const r = t.proxy, a = i;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, r, a) === !1)
            return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Me(l, null, 10, [e, r, a]);
      return;
    }
  }
  rd(e, i, s, n);
}
function rd(e, t, i, n = !0) {
  console.error(e);
}
let on = !1, ro = !1;
const It = [];
let ce = 0;
const gi = [];
let _e = null, Ye = 0;
const Rl = /* @__PURE__ */ Promise.resolve();
let Fo = null;
function Il(e) {
  const t = Fo || Rl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ad(e) {
  let t = ce + 1, i = It.length;
  for (; t < i; ) {
    const n = t + i >>> 1;
    rn(It[n]) < e ? t = n + 1 : i = n;
  }
  return t;
}
function Vo(e) {
  (!It.length || !It.includes(e, on && e.allowRecurse ? ce + 1 : ce)) && (e.id == null ? It.push(e) : It.splice(ad(e.id), 0, e), Ml());
}
function Ml() {
  !on && !ro && (ro = !0, Fo = Rl.then(Dl));
}
function ld(e) {
  const t = It.indexOf(e);
  t > ce && It.splice(t, 1);
}
function cd(e) {
  G(e) ? gi.push(...e) : (!_e || !_e.includes(e, e.allowRecurse ? Ye + 1 : Ye)) && gi.push(e), Ml();
}
function xr(e, t = on ? ce + 1 : 0) {
  for (; t < It.length; t++) {
    const i = It[t];
    i && i.pre && (It.splice(t, 1), t--, i());
  }
}
function kl(e) {
  if (gi.length) {
    const t = [...new Set(gi)];
    if (gi.length = 0, _e) {
      _e.push(...t);
      return;
    }
    for (_e = t, _e.sort((i, n) => rn(i) - rn(n)), Ye = 0; Ye < _e.length; Ye++)
      _e[Ye]();
    _e = null, Ye = 0;
  }
}
const rn = (e) => e.id == null ? 1 / 0 : e.id, hd = (e, t) => {
  const i = rn(e) - rn(t);
  if (i === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return i;
};
function Dl(e) {
  ro = !1, on = !0, It.sort(hd);
  const t = ee;
  try {
    for (ce = 0; ce < It.length; ce++) {
      const i = It[ce];
      i && i.active !== !1 && Me(
        i,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    ce = 0, It.length = 0, kl(), on = !1, Fo = null, (It.length || gi.length) && Dl();
  }
}
function dd(e, t, ...i) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || ht;
  let s = i;
  const o = t.startsWith("update:"), r = o && t.slice(7);
  if (r && r in n) {
    const h = `${r === "modelValue" ? "model" : r}Modifiers`, { number: d, trim: u } = n[h] || ht;
    u && (s = i.map((f) => wt(f) ? f.trim() : f)), d && (s = i.map(Io));
  }
  let a, l = n[a = Gs(t)] || // also try camelCase event handler (#2249)
  n[a = Gs(ue(t))];
  !l && o && (l = n[a = Gs(Pi(t))]), l && ie(l, e, 6, s);
  const c = n[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, ie(c, e, 6, s);
  }
}
function Ll(e, t, i = !1) {
  const n = t.emitsCache, s = n.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let r = {}, a = !1;
  if (!X(e)) {
    const l = (c) => {
      const h = Ll(c, t, !0);
      h && (a = !0, Dt(r, h));
    };
    !i && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (ct(e) && n.set(e, null), null) : (G(o) ? o.forEach((l) => r[l] = null) : Dt(r, o), ct(e) && n.set(e, r), r);
}
function Cs(e, t) {
  return !e || !bs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Pi(t)) || st(e, t));
}
let Ut = null, Ts = null;
function es(e) {
  const t = Ut;
  return Ut = e, Ts = e && e.type.__scopeId || null, t;
}
function Bo(e) {
  Ts = e;
}
function Go() {
  Ts = null;
}
function ud(e, t = Ut, i) {
  if (!t || e._n)
    return e;
  const n = (...s) => {
    n._d && Pr(-1);
    const o = es(t);
    let r;
    try {
      r = e(...s);
    } finally {
      es(o), n._d && Pr(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ws(e) {
  const { type: t, vnode: i, proxy: n, withProxy: s, props: o, propsOptions: [r], slots: a, attrs: l, emit: c, render: h, renderCache: d, data: u, setupState: f, ctx: m, inheritAttrs: p } = e;
  let g, x;
  const v = es(e);
  try {
    if (i.shapeFlag & 4) {
      const S = s || n;
      g = le(h.call(S, S, d, o, f, u, m)), x = l;
    } else {
      const S = t;
      g = le(S.length > 1 ? S(o, { attrs: l, slots: a, emit: c }) : S(
        o,
        null
        /* we know it doesn't need it */
      )), x = t.props ? l : fd(l);
    }
  } catch (S) {
    Xi.length = 0, ws(
      S,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), g = yt(ni);
  }
  let y = g;
  if (x && p !== !1) {
    const S = Object.keys(x), { shapeFlag: E } = y;
    S.length && E & 7 && (r && S.some(Ao) && (x = pd(x, r)), y = Oi(y, x));
  }
  return i.dirs && (y = Oi(y), y.dirs = y.dirs ? y.dirs.concat(i.dirs) : i.dirs), i.transition && (y.transition = i.transition), g = y, es(v), g;
}
const fd = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || bs(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, pd = (e, t) => {
  const i = {};
  for (const n in e)
    (!Ao(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
  return i;
};
function gd(e, t, i) {
  const { props: n, children: s, component: o } = e, { props: r, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? vr(n, r, c) : !!r;
    if (l & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const u = h[d];
        if (r[u] !== n[u] && !Cs(c, u))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : n === r ? !1 : n ? r ? vr(n, r, c) : !0 : !!r;
  return !1;
}
function vr(e, t, i) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (t[o] !== e[o] && !Cs(i, o))
      return !0;
  }
  return !1;
}
function md({ vnode: e, parent: t }, i) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = i, t = t.parent;
}
const _d = (e) => e.__isSuspense;
function bd(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : cd(e);
}
function xd(e, t) {
  if (Ct) {
    let i = Ct.provides;
    const n = Ct.parent && Ct.parent.provides;
    n === i && (i = Ct.provides = Object.create(n)), i[e] = t;
  }
}
function $i(e, t, i = !1) {
  const n = Ct || Ut;
  if (n) {
    const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return i && X(t) ? t.call(n.proxy) : t;
  }
}
const Tn = {};
function Qe(e, t, i) {
  return Nl(e, t, i);
}
function Nl(e, t, { immediate: i, deep: n, flush: s, onTrack: o, onTrigger: r } = ht) {
  const a = Ct;
  let l, c = !1, h = !1;
  if (pt(e) ? (l = () => e.value, c = ts(e)) : xe(e) ? (l = () => e, n = !0) : G(e) ? (h = !0, c = e.some((y) => xe(y) || ts(y)), l = () => e.map((y) => {
    if (pt(y))
      return y.value;
    if (xe(y))
      return qe(y);
    if (X(y))
      return Me(
        y,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : X(e) ? t ? l = () => Me(
    e,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : l = () => {
    if (!(a && a.isUnmounted))
      return d && d(), ie(e, a, 3, [u]);
  } : l = ee, t && n) {
    const y = l;
    l = () => qe(y());
  }
  let d, u = (y) => {
    d = x.onStop = () => {
      Me(
        y,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, f;
  if (ln)
    if (u = ee, t ? i && ie(t, a, 3, [
      l(),
      h ? [] : void 0,
      u
    ]) : l(), s === "sync") {
      const y = cu();
      f = y.__watcherHandles || (y.__watcherHandles = []);
    } else
      return ee;
  let m = h ? new Array(e.length).fill(Tn) : Tn;
  const p = () => {
    if (x.active)
      if (t) {
        const y = x.run();
        (n || c || (h ? y.some((S, E) => nn(S, m[E])) : nn(y, m))) && (d && d(), ie(t, a, 3, [
          y,
          // pass undefined as the old value when it's changed for the first time
          m === Tn ? void 0 : h && m[0] === Tn ? [] : m,
          u
        ]), m = y);
      } else
        x.run();
  };
  p.allowRecurse = !!t;
  let g;
  s === "sync" ? g = p : s === "post" ? g = () => Ht(p, a && a.suspense) : (p.pre = !0, a && (p.id = a.uid), g = () => Vo(p));
  const x = new ko(l, g);
  t ? i ? p() : m = x.run() : s === "post" ? Ht(x.run.bind(x), a && a.suspense) : x.run();
  const v = () => {
    x.stop(), a && a.scope && Po(a.scope.effects, x);
  };
  return f && f.push(v), v;
}
function vd(e, t, i) {
  const n = this.proxy, s = wt(e) ? e.includes(".") ? Hl(n, e) : () => n[e] : e.bind(n, n);
  let o;
  X(t) ? o = t : (o = t.handler, i = t);
  const r = Ct;
  Ei(this);
  const a = Nl(s, o.bind(n), i);
  return r ? Ei(r) : ei(), a;
}
function Hl(e, t) {
  const i = t.split(".");
  return () => {
    let n = e;
    for (let s = 0; s < i.length && n; s++)
      n = n[i[s]];
    return n;
  };
}
function qe(e, t) {
  if (!ct(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), pt(e))
    qe(e.value, t);
  else if (G(e))
    for (let i = 0; i < e.length; i++)
      qe(e[i], t);
  else if (xs(e) || pi(e))
    e.forEach((i) => {
      qe(i, t);
    });
  else if (cl(e))
    for (const i in e)
      qe(e[i], t);
  return e;
}
function qt(e) {
  return X(e) ? { setup: e, name: e.name } : e;
}
const jn = (e) => !!e.type.__asyncLoader, zl = (e) => e.type.__isKeepAlive;
function yd(e, t) {
  Fl(e, "a", t);
}
function Od(e, t) {
  Fl(e, "da", t);
}
function Fl(e, t, i = Ct) {
  const n = e.__wdc || (e.__wdc = () => {
    let s = i;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (As(t, n, i), i) {
    let s = i.parent;
    for (; s && s.parent; )
      zl(s.parent.vnode) && Ed(n, t, i, s), s = s.parent;
  }
}
function Ed(e, t, i, n) {
  const s = As(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Gl(() => {
    Po(n[t], s);
  }, i);
}
function As(e, t, i = Ct, n = !1) {
  if (i) {
    const s = i[e] || (i[e] = []), o = t.__weh || (t.__weh = (...r) => {
      if (i.isUnmounted)
        return;
      Ri(), Ei(i);
      const a = ie(t, i, e, r);
      return ei(), Ii(), a;
    });
    return n ? s.unshift(o) : s.push(o), o;
  }
}
const ye = (e) => (t, i = Ct) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!ln || e === "sp") && As(e, (...n) => t(...n), i)
), Sd = ye(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Wo = ye(
  "m"
  /* LifecycleHooks.MOUNTED */
), wd = ye(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Vl = ye(
  "u"
  /* LifecycleHooks.UPDATED */
), Bl = ye(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Gl = ye(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Cd = ye(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Td = ye(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Ad = ye(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Pd(e, t = Ct) {
  As("ec", e, t);
}
function Wl(e, t) {
  const i = Ut;
  if (i === null)
    return e;
  const n = Ms(i) || i.proxy, s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, a, l, c = ht] = t[o];
    r && (X(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && qe(a), s.push({
      dir: r,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Fe(e, t, i, n) {
  const s = e.dirs, o = t && t.dirs;
  for (let r = 0; r < s.length; r++) {
    const a = s[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[n];
    l && (Ri(), ie(l, i, 8, [
      e.el,
      a,
      e,
      t
    ]), Ii());
  }
}
const jl = "components", Ul = Symbol();
function yr(e) {
  return wt(e) ? Rd(jl, e, !1) || e : e || Ul;
}
function Rd(e, t, i = !0, n = !1) {
  const s = Ut || Ct;
  if (s) {
    const o = s.type;
    if (e === jl) {
      const a = ru(
        o,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (a && (a === t || a === ue(t) || a === ys(ue(t))))
        return o;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      Or(s[e] || o[e], t) || // global registration
      Or(s.appContext[e], t)
    );
    return !r && n ? o : r;
  }
}
function Or(e, t) {
  return e && (e[t] || e[ue(t)] || e[ys(ue(t))]);
}
function he(e, t, i, n) {
  let s;
  const o = i && i[n];
  if (G(e) || wt(e)) {
    s = new Array(e.length);
    for (let r = 0, a = e.length; r < a; r++)
      s[r] = t(e[r], r, void 0, o && o[r]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let r = 0; r < e; r++)
      s[r] = t(r + 1, r, void 0, o && o[r]);
  } else if (ct(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (r, a) => t(r, a, void 0, o && o[a]));
    else {
      const r = Object.keys(e);
      s = new Array(r.length);
      for (let a = 0, l = r.length; a < l; a++) {
        const c = r[a];
        s[a] = t(e[c], c, a, o && o[a]);
      }
    }
  else
    s = [];
  return i && (i[n] = s), s;
}
const ao = (e) => e ? nc(e) ? Ms(e) || e.proxy : ao(e.parent) : null, Yi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Dt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ao(e.parent),
    $root: (e) => ao(e.root),
    $emit: (e) => e.emit,
    $options: (e) => jo(e),
    $forceUpdate: (e) => e.f || (e.f = () => Vo(e.update)),
    $nextTick: (e) => e.n || (e.n = Il.bind(e.proxy)),
    $watch: (e) => vd.bind(e)
  })
), js = (e, t) => e !== ht && !e.__isScriptSetup && st(e, t), Id = {
  get({ _: e }, t) {
    const { ctx: i, setupState: n, data: s, props: o, accessCache: r, type: a, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const f = r[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return n[t];
          case 2:
            return s[t];
          case 4:
            return i[t];
          case 3:
            return o[t];
        }
      else {
        if (js(n, t))
          return r[t] = 1, n[t];
        if (s !== ht && st(s, t))
          return r[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && st(c, t)
        )
          return r[t] = 3, o[t];
        if (i !== ht && st(i, t))
          return r[t] = 4, i[t];
        lo && (r[t] = 0);
      }
    }
    const h = Yi[t];
    let d, u;
    if (h)
      return t === "$attrs" && Kt(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (i !== ht && st(i, t))
      return r[t] = 4, i[t];
    if (
      // global properties
      u = l.config.globalProperties, st(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: s, ctx: o } = e;
    return js(s, t) ? (s[t] = i, !0) : n !== ht && st(n, t) ? (n[t] = i, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = i, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: s, propsOptions: o } }, r) {
    let a;
    return !!i[r] || e !== ht && st(e, r) || js(t, r) || (a = o[0]) && st(a, r) || st(n, r) || st(Yi, r) || st(s.config.globalProperties, r);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : st(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
let lo = !0;
function Md(e) {
  const t = jo(e), i = e.proxy, n = e.ctx;
  lo = !1, t.beforeCreate && Er(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: s,
    computed: o,
    methods: r,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: h,
    beforeMount: d,
    mounted: u,
    beforeUpdate: f,
    updated: m,
    activated: p,
    deactivated: g,
    beforeDestroy: x,
    beforeUnmount: v,
    destroyed: y,
    unmounted: S,
    render: E,
    renderTracked: k,
    renderTriggered: I,
    errorCaptured: A,
    serverPrefetch: H,
    // public API
    expose: V,
    inheritAttrs: B,
    // assets
    components: Z,
    directives: ut,
    filters: gt
  } = t;
  if (c && kd(c, n, null, e.appContext.config.unwrapInjectedRef), r)
    for (const j in r) {
      const J = r[j];
      X(J) && (n[j] = J.bind(i));
    }
  if (s) {
    const j = s.call(i, i);
    ct(j) && (e.data = Es(j));
  }
  if (lo = !0, o)
    for (const j in o) {
      const J = o[j], ft = X(J) ? J.bind(i, i) : X(J.get) ? J.get.bind(i, i) : ee, Zt = !X(J) && X(J.set) ? J.set.bind(i) : ee, $t = At({
        get: ft,
        set: Zt
      });
      Object.defineProperty(n, j, {
        enumerable: !0,
        configurable: !0,
        get: () => $t.value,
        set: (Tt) => $t.value = Tt
      });
    }
  if (a)
    for (const j in a)
      Kl(a[j], n, i, j);
  if (l) {
    const j = X(l) ? l.call(i) : l;
    Reflect.ownKeys(j).forEach((J) => {
      xd(J, j[J]);
    });
  }
  h && Er(
    h,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function q(j, J) {
    G(J) ? J.forEach((ft) => j(ft.bind(i))) : J && j(J.bind(i));
  }
  if (q(Sd, d), q(Wo, u), q(wd, f), q(Vl, m), q(yd, p), q(Od, g), q(Pd, A), q(Ad, k), q(Td, I), q(Bl, v), q(Gl, S), q(Cd, H), G(V))
    if (V.length) {
      const j = e.exposed || (e.exposed = {});
      V.forEach((J) => {
        Object.defineProperty(j, J, {
          get: () => i[J],
          set: (ft) => i[J] = ft
        });
      });
    } else
      e.exposed || (e.exposed = {});
  E && e.render === ee && (e.render = E), B != null && (e.inheritAttrs = B), Z && (e.components = Z), ut && (e.directives = ut);
}
function kd(e, t, i = ee, n = !1) {
  G(e) && (e = co(e));
  for (const s in e) {
    const o = e[s];
    let r;
    ct(o) ? "default" in o ? r = $i(
      o.from || s,
      o.default,
      !0
      /* treat default function as factory */
    ) : r = $i(o.from || s) : r = $i(o), pt(r) && n ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (a) => r.value = a
    }) : t[s] = r;
  }
}
function Er(e, t, i) {
  ie(G(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, i);
}
function Kl(e, t, i, n) {
  const s = n.includes(".") ? Hl(i, n) : () => i[n];
  if (wt(e)) {
    const o = t[e];
    X(o) && Qe(s, o);
  } else if (X(e))
    Qe(s, e.bind(i));
  else if (ct(e))
    if (G(e))
      e.forEach((o) => Kl(o, t, i, n));
    else {
      const o = X(e.handler) ? e.handler.bind(i) : t[e.handler];
      X(o) && Qe(s, o, e);
    }
}
function jo(e) {
  const t = e.type, { mixins: i, extends: n } = t, { mixins: s, optionsCache: o, config: { optionMergeStrategies: r } } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !s.length && !i && !n ? l = t : (l = {}, s.length && s.forEach((c) => is(l, c, r, !0)), is(l, t, r)), ct(t) && o.set(t, l), l;
}
function is(e, t, i, n = !1) {
  const { mixins: s, extends: o } = t;
  o && is(e, o, i, !0), s && s.forEach((r) => is(e, r, i, !0));
  for (const r in t)
    if (!(n && r === "expose")) {
      const a = Dd[r] || i && i[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const Dd = {
  data: Sr,
  props: Ue,
  emits: Ue,
  // objects
  methods: Ue,
  computed: Ue,
  // lifecycle
  beforeCreate: kt,
  created: kt,
  beforeMount: kt,
  mounted: kt,
  beforeUpdate: kt,
  updated: kt,
  beforeDestroy: kt,
  beforeUnmount: kt,
  destroyed: kt,
  unmounted: kt,
  activated: kt,
  deactivated: kt,
  errorCaptured: kt,
  serverPrefetch: kt,
  // assets
  components: Ue,
  directives: Ue,
  // watch
  watch: Nd,
  // provide / inject
  provide: Sr,
  inject: Ld
};
function Sr(e, t) {
  return t ? e ? function() {
    return Dt(X(e) ? e.call(this, this) : e, X(t) ? t.call(this, this) : t);
  } : t : e;
}
function Ld(e, t) {
  return Ue(co(e), co(t));
}
function co(e) {
  if (G(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function kt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ue(e, t) {
  return e ? Dt(Dt(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Nd(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const i = Dt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = kt(e[n], t[n]);
  return i;
}
function Hd(e, t, i, n = !1) {
  const s = {}, o = {};
  Qn(o, Rs, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), $l(e, t, s, o);
  for (const r in e.propsOptions[0])
    r in s || (s[r] = void 0);
  i ? e.props = n ? s : td(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function zd(e, t, i, n) {
  const { props: s, attrs: o, vnode: { patchFlag: r } } = e, a = nt(s), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let u = h[d];
        if (Cs(e.emitsOptions, u))
          continue;
        const f = t[u];
        if (l)
          if (st(o, u))
            f !== o[u] && (o[u] = f, c = !0);
          else {
            const m = ue(u);
            s[m] = ho(
              l,
              a,
              m,
              f,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          f !== o[u] && (o[u] = f, c = !0);
      }
    }
  } else {
    $l(e, t, s, o) && (c = !0);
    let h;
    for (const d in a)
      (!t || // for camelCase
      !st(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Pi(d)) === d || !st(t, h))) && (l ? i && // for camelCase
      (i[d] !== void 0 || // for kebab-case
      i[h] !== void 0) && (s[d] = ho(
        l,
        a,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete s[d]);
    if (o !== a)
      for (const d in o)
        (!t || !st(t, d)) && (delete o[d], c = !0);
  }
  c && ve(e, "set", "$attrs");
}
function $l(e, t, i, n) {
  const [s, o] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (Gn(l))
        continue;
      const c = t[l];
      let h;
      s && st(s, h = ue(l)) ? !o || !o.includes(h) ? i[h] = c : (a || (a = {}))[h] = c : Cs(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, r = !0);
    }
  if (o) {
    const l = nt(i), c = a || ht;
    for (let h = 0; h < o.length; h++) {
      const d = o[h];
      i[d] = ho(s, l, d, c[d], e, !st(c, d));
    }
  }
  return r;
}
function ho(e, t, i, n, s, o) {
  const r = e[i];
  if (r != null) {
    const a = st(r, "default");
    if (a && n === void 0) {
      const l = r.default;
      if (r.type !== Function && X(l)) {
        const { propsDefaults: c } = s;
        i in c ? n = c[i] : (Ei(s), n = c[i] = l.call(null, t), ei());
      } else
        n = l;
    }
    r[
      0
      /* BooleanFlags.shouldCast */
    ] && (o && !a ? n = !1 : r[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (n === "" || n === Pi(i)) && (n = !0));
  }
  return n;
}
function Yl(e, t, i = !1) {
  const n = t.propsCache, s = n.get(e);
  if (s)
    return s;
  const o = e.props, r = {}, a = [];
  let l = !1;
  if (!X(e)) {
    const h = (d) => {
      l = !0;
      const [u, f] = Yl(d, t, !0);
      Dt(r, u), f && a.push(...f);
    };
    !i && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!o && !l)
    return ct(e) && n.set(e, fi), fi;
  if (G(o))
    for (let h = 0; h < o.length; h++) {
      const d = ue(o[h]);
      wr(d) && (r[d] = ht);
    }
  else if (o)
    for (const h in o) {
      const d = ue(h);
      if (wr(d)) {
        const u = o[h], f = r[d] = G(u) || X(u) ? { type: u } : Object.assign({}, u);
        if (f) {
          const m = Ar(Boolean, f.type), p = Ar(String, f.type);
          f[
            0
            /* BooleanFlags.shouldCast */
          ] = m > -1, f[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = p < 0 || m < p, (m > -1 || st(f, "default")) && a.push(d);
        }
      }
    }
  const c = [r, a];
  return ct(e) && n.set(e, c), c;
}
function wr(e) {
  return e[0] !== "$";
}
function Cr(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Tr(e, t) {
  return Cr(e) === Cr(t);
}
function Ar(e, t) {
  return G(t) ? t.findIndex((i) => Tr(i, e)) : X(t) && Tr(t, e) ? 0 : -1;
}
const Xl = (e) => e[0] === "_" || e === "$stable", Uo = (e) => G(e) ? e.map(le) : [le(e)], Fd = (e, t, i) => {
  if (t._n)
    return t;
  const n = ud((...s) => Uo(t(...s)), i);
  return n._c = !1, n;
}, ql = (e, t, i) => {
  const n = e._ctx;
  for (const s in e) {
    if (Xl(s))
      continue;
    const o = e[s];
    if (X(o))
      t[s] = Fd(s, o, n);
    else if (o != null) {
      const r = Uo(o);
      t[s] = () => r;
    }
  }
}, Zl = (e, t) => {
  const i = Uo(t);
  e.slots.default = () => i;
}, Vd = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (e.slots = nt(t), Qn(t, "_", i)) : ql(t, e.slots = {});
  } else
    e.slots = {}, t && Zl(e, t);
  Qn(e.slots, Rs, 1);
}, Bd = (e, t, i) => {
  const { vnode: n, slots: s } = e;
  let o = !0, r = ht;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? i && a === 1 ? o = !1 : (Dt(s, t), !i && a === 1 && delete s._) : (o = !t.$stable, ql(t, s)), r = t;
  } else
    t && (Zl(e, t), r = { default: 1 });
  if (o)
    for (const a in s)
      !Xl(a) && !(a in r) && delete s[a];
};
function Jl() {
  return {
    app: null,
    config: {
      isNativeTag: xh,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Gd = 0;
function Wd(e, t) {
  return function(n, s = null) {
    X(n) || (n = Object.assign({}, n)), s != null && !ct(s) && (s = null);
    const o = Jl(), r = /* @__PURE__ */ new Set();
    let a = !1;
    const l = o.app = {
      _uid: Gd++,
      _component: n,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: rc,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return r.has(c) || (c && X(c.install) ? (r.add(c), c.install(l, ...h)) : X(c) && (r.add(c), c(l, ...h))), l;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), l;
      },
      component(c, h) {
        return h ? (o.components[c] = h, l) : o.components[c];
      },
      directive(c, h) {
        return h ? (o.directives[c] = h, l) : o.directives[c];
      },
      mount(c, h, d) {
        if (!a) {
          const u = yt(n, s);
          return u.appContext = o, h && t ? t(u, c) : e(u, c, d), a = !0, l._container = c, c.__vue_app__ = l, Ms(u.component) || u.component.proxy;
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, h) {
        return o.provides[c] = h, l;
      }
    };
    return l;
  };
}
function uo(e, t, i, n, s = !1) {
  if (G(e)) {
    e.forEach((u, f) => uo(u, t && (G(t) ? t[f] : t), i, n, s));
    return;
  }
  if (jn(n) && !s)
    return;
  const o = n.shapeFlag & 4 ? Ms(n.component) || n.component.proxy : n.el, r = s ? null : o, { i: a, r: l } = e, c = t && t.r, h = a.refs === ht ? a.refs = {} : a.refs, d = a.setupState;
  if (c != null && c !== l && (wt(c) ? (h[c] = null, st(d, c) && (d[c] = null)) : pt(c) && (c.value = null)), X(l))
    Me(l, a, 12, [r, h]);
  else {
    const u = wt(l), f = pt(l);
    if (u || f) {
      const m = () => {
        if (e.f) {
          const p = u ? st(d, l) ? d[l] : h[l] : l.value;
          s ? G(p) && Po(p, o) : G(p) ? p.includes(o) || p.push(o) : u ? (h[l] = [o], st(d, l) && (d[l] = h[l])) : (l.value = [o], e.k && (h[e.k] = l.value));
        } else
          u ? (h[l] = r, st(d, l) && (d[l] = r)) : f && (l.value = r, e.k && (h[e.k] = r));
      };
      r ? (m.id = -1, Ht(m, i)) : m();
    }
  }
}
const Ht = bd;
function jd(e) {
  return Ud(e);
}
function Ud(e, t) {
  const i = wh();
  i.__VUE__ = !0;
  const { insert: n, remove: s, patchProp: o, createElement: r, createText: a, createComment: l, setText: c, setElementText: h, parentNode: d, nextSibling: u, setScopeId: f = ee, insertStaticContent: m } = e, p = (_, b, O, C = null, w = null, R = null, D = !1, P = null, M = !!b.dynamicChildren) => {
    if (_ === b)
      return;
    _ && !Li(_, b) && (C = yn(_), Tt(_, w, R, !0), _ = null), b.patchFlag === -2 && (M = !1, b.dynamicChildren = null);
    const { type: T, ref: z, shapeFlag: L } = b;
    switch (T) {
      case Ps:
        g(_, b, O, C);
        break;
      case ni:
        x(_, b, O, C);
        break;
      case Un:
        _ == null && v(b, O, C, D);
        break;
      case vt:
        Z(_, b, O, C, w, R, D, P, M);
        break;
      default:
        L & 1 ? E(_, b, O, C, w, R, D, P, M) : L & 6 ? ut(_, b, O, C, w, R, D, P, M) : (L & 64 || L & 128) && T.process(_, b, O, C, w, R, D, P, M, ai);
    }
    z != null && w && uo(z, _ && _.ref, R, b || _, !b);
  }, g = (_, b, O, C) => {
    if (_ == null)
      n(b.el = a(b.children), O, C);
    else {
      const w = b.el = _.el;
      b.children !== _.children && c(w, b.children);
    }
  }, x = (_, b, O, C) => {
    _ == null ? n(b.el = l(b.children || ""), O, C) : b.el = _.el;
  }, v = (_, b, O, C) => {
    [_.el, _.anchor] = m(_.children, b, O, C, _.el, _.anchor);
  }, y = ({ el: _, anchor: b }, O, C) => {
    let w;
    for (; _ && _ !== b; )
      w = u(_), n(_, O, C), _ = w;
    n(b, O, C);
  }, S = ({ el: _, anchor: b }) => {
    let O;
    for (; _ && _ !== b; )
      O = u(_), s(_), _ = O;
    s(b);
  }, E = (_, b, O, C, w, R, D, P, M) => {
    D = D || b.type === "svg", _ == null ? k(b, O, C, w, R, D, P, M) : H(_, b, w, R, D, P, M);
  }, k = (_, b, O, C, w, R, D, P) => {
    let M, T;
    const { type: z, props: L, shapeFlag: F, transition: U, dirs: tt } = _;
    if (M = _.el = r(_.type, R, L && L.is, L), F & 8 ? h(M, _.children) : F & 16 && A(_.children, M, null, C, w, R && z !== "foreignObject", D, P), tt && Fe(_, null, C, "created"), L) {
      for (const rt in L)
        rt !== "value" && !Gn(rt) && o(M, rt, null, L[rt], R, _.children, C, w, Mt);
      "value" in L && o(M, "value", null, L.value), (T = L.onVnodeBeforeMount) && oe(T, C, _);
    }
    I(M, _, _.scopeId, D, C), tt && Fe(_, null, C, "beforeMount");
    const at = (!w || w && !w.pendingBranch) && U && !U.persisted;
    at && U.beforeEnter(M), n(M, b, O), ((T = L && L.onVnodeMounted) || at || tt) && Ht(() => {
      T && oe(T, C, _), at && U.enter(M), tt && Fe(_, null, C, "mounted");
    }, w);
  }, I = (_, b, O, C, w) => {
    if (O && f(_, O), C)
      for (let R = 0; R < C.length; R++)
        f(_, C[R]);
    if (w) {
      let R = w.subTree;
      if (b === R) {
        const D = w.vnode;
        I(_, D, D.scopeId, D.slotScopeIds, w.parent);
      }
    }
  }, A = (_, b, O, C, w, R, D, P, M = 0) => {
    for (let T = M; T < _.length; T++) {
      const z = _[T] = P ? we(_[T]) : le(_[T]);
      p(null, z, b, O, C, w, R, D, P);
    }
  }, H = (_, b, O, C, w, R, D) => {
    const P = b.el = _.el;
    let { patchFlag: M, dynamicChildren: T, dirs: z } = b;
    M |= _.patchFlag & 16;
    const L = _.props || ht, F = b.props || ht;
    let U;
    O && Ve(O, !1), (U = F.onVnodeBeforeUpdate) && oe(U, O, b, _), z && Fe(b, _, O, "beforeUpdate"), O && Ve(O, !0);
    const tt = w && b.type !== "foreignObject";
    if (T ? V(_.dynamicChildren, T, P, O, C, tt, R) : D || J(_, b, P, null, O, C, tt, R, !1), M > 0) {
      if (M & 16)
        B(P, b, L, F, O, C, w);
      else if (M & 2 && L.class !== F.class && o(P, "class", null, F.class, w), M & 4 && o(P, "style", L.style, F.style, w), M & 8) {
        const at = b.dynamicProps;
        for (let rt = 0; rt < at.length; rt++) {
          const St = at[rt], Jt = L[St], li = F[St];
          (li !== Jt || St === "value") && o(P, St, Jt, li, w, _.children, O, C, Mt);
        }
      }
      M & 1 && _.children !== b.children && h(P, b.children);
    } else
      !D && T == null && B(P, b, L, F, O, C, w);
    ((U = F.onVnodeUpdated) || z) && Ht(() => {
      U && oe(U, O, b, _), z && Fe(b, _, O, "updated");
    }, C);
  }, V = (_, b, O, C, w, R, D) => {
    for (let P = 0; P < b.length; P++) {
      const M = _[P], T = b[P], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === vt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Li(M, T) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 70) ? d(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      p(M, T, z, null, C, w, R, D, !0);
    }
  }, B = (_, b, O, C, w, R, D) => {
    if (O !== C) {
      if (O !== ht)
        for (const P in O)
          !Gn(P) && !(P in C) && o(_, P, O[P], null, D, b.children, w, R, Mt);
      for (const P in C) {
        if (Gn(P))
          continue;
        const M = C[P], T = O[P];
        M !== T && P !== "value" && o(_, P, T, M, D, b.children, w, R, Mt);
      }
      "value" in C && o(_, "value", O.value, C.value);
    }
  }, Z = (_, b, O, C, w, R, D, P, M) => {
    const T = b.el = _ ? _.el : a(""), z = b.anchor = _ ? _.anchor : a("");
    let { patchFlag: L, dynamicChildren: F, slotScopeIds: U } = b;
    U && (P = P ? P.concat(U) : U), _ == null ? (n(T, O, C), n(z, O, C), A(b.children, O, z, w, R, D, P, M)) : L > 0 && L & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (V(_.dynamicChildren, F, O, w, R, D, P), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || w && b === w.subTree) && Ql(
      _,
      b,
      !0
      /* shallow */
    )) : J(_, b, O, z, w, R, D, P, M);
  }, ut = (_, b, O, C, w, R, D, P, M) => {
    b.slotScopeIds = P, _ == null ? b.shapeFlag & 512 ? w.ctx.activate(b, O, C, D, M) : gt(b, O, C, w, R, D, M) : W(_, b, M);
  }, gt = (_, b, O, C, w, R, D) => {
    const P = _.component = tu(_, C, w);
    if (zl(_) && (P.ctx.renderer = ai), iu(P), P.asyncDep) {
      if (w && w.registerDep(P, q), !_.el) {
        const M = P.subTree = yt(ni);
        x(null, M, b, O);
      }
      return;
    }
    q(P, _, b, O, w, R, D);
  }, W = (_, b, O) => {
    const C = b.component = _.component;
    if (gd(_, b, O))
      if (C.asyncDep && !C.asyncResolved) {
        j(C, b, O);
        return;
      } else
        C.next = b, ld(C.update), C.update();
    else
      b.el = _.el, C.vnode = b;
  }, q = (_, b, O, C, w, R, D) => {
    const P = () => {
      if (_.isMounted) {
        let { next: z, bu: L, u: F, parent: U, vnode: tt } = _, at = z, rt;
        Ve(_, !1), z ? (z.el = tt.el, j(_, z, D)) : z = tt, L && Wn(L), (rt = z.props && z.props.onVnodeBeforeUpdate) && oe(rt, U, z, tt), Ve(_, !0);
        const St = Ws(_), Jt = _.subTree;
        _.subTree = St, p(
          Jt,
          St,
          // parent may have changed if it's in a teleport
          d(Jt.el),
          // anchor may have changed if it's in a fragment
          yn(Jt),
          _,
          w,
          R
        ), z.el = St.el, at === null && md(_, St.el), F && Ht(F, w), (rt = z.props && z.props.onVnodeUpdated) && Ht(() => oe(rt, U, z, tt), w);
      } else {
        let z;
        const { el: L, props: F } = b, { bm: U, m: tt, parent: at } = _, rt = jn(b);
        if (Ve(_, !1), U && Wn(U), !rt && (z = F && F.onVnodeBeforeMount) && oe(z, at, b), Ve(_, !0), L && Bs) {
          const St = () => {
            _.subTree = Ws(_), Bs(L, _.subTree, _, w, null);
          };
          rt ? b.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !_.isUnmounted && St()
          ) : St();
        } else {
          const St = _.subTree = Ws(_);
          p(null, St, O, C, _, w, R), b.el = St.el;
        }
        if (tt && Ht(tt, w), !rt && (z = F && F.onVnodeMounted)) {
          const St = b;
          Ht(() => oe(z, at, St), w);
        }
        (b.shapeFlag & 256 || at && jn(at.vnode) && at.vnode.shapeFlag & 256) && _.a && Ht(_.a, w), _.isMounted = !0, b = O = C = null;
      }
    }, M = _.effect = new ko(
      P,
      () => Vo(T),
      _.scope
      // track it in component's effect scope
    ), T = _.update = () => M.run();
    T.id = _.uid, Ve(_, !0), T();
  }, j = (_, b, O) => {
    b.component = _;
    const C = _.vnode.props;
    _.vnode = b, _.next = null, zd(_, b.props, C, O), Bd(_, b.children, O), Ri(), xr(), Ii();
  }, J = (_, b, O, C, w, R, D, P, M = !1) => {
    const T = _ && _.children, z = _ ? _.shapeFlag : 0, L = b.children, { patchFlag: F, shapeFlag: U } = b;
    if (F > 0) {
      if (F & 128) {
        Zt(T, L, O, C, w, R, D, P, M);
        return;
      } else if (F & 256) {
        ft(T, L, O, C, w, R, D, P, M);
        return;
      }
    }
    U & 8 ? (z & 16 && Mt(T, w, R), L !== T && h(O, L)) : z & 16 ? U & 16 ? Zt(T, L, O, C, w, R, D, P, M) : Mt(T, w, R, !0) : (z & 8 && h(O, ""), U & 16 && A(L, O, C, w, R, D, P, M));
  }, ft = (_, b, O, C, w, R, D, P, M) => {
    _ = _ || fi, b = b || fi;
    const T = _.length, z = b.length, L = Math.min(T, z);
    let F;
    for (F = 0; F < L; F++) {
      const U = b[F] = M ? we(b[F]) : le(b[F]);
      p(_[F], U, O, null, w, R, D, P, M);
    }
    T > z ? Mt(_, w, R, !0, !1, L) : A(b, O, C, w, R, D, P, M, L);
  }, Zt = (_, b, O, C, w, R, D, P, M) => {
    let T = 0;
    const z = b.length;
    let L = _.length - 1, F = z - 1;
    for (; T <= L && T <= F; ) {
      const U = _[T], tt = b[T] = M ? we(b[T]) : le(b[T]);
      if (Li(U, tt))
        p(U, tt, O, null, w, R, D, P, M);
      else
        break;
      T++;
    }
    for (; T <= L && T <= F; ) {
      const U = _[L], tt = b[F] = M ? we(b[F]) : le(b[F]);
      if (Li(U, tt))
        p(U, tt, O, null, w, R, D, P, M);
      else
        break;
      L--, F--;
    }
    if (T > L) {
      if (T <= F) {
        const U = F + 1, tt = U < z ? b[U].el : C;
        for (; T <= F; )
          p(null, b[T] = M ? we(b[T]) : le(b[T]), O, tt, w, R, D, P, M), T++;
      }
    } else if (T > F)
      for (; T <= L; )
        Tt(_[T], w, R, !0), T++;
    else {
      const U = T, tt = T, at = /* @__PURE__ */ new Map();
      for (T = tt; T <= F; T++) {
        const Ft = b[T] = M ? we(b[T]) : le(b[T]);
        Ft.key != null && at.set(Ft.key, T);
      }
      let rt, St = 0;
      const Jt = F - tt + 1;
      let li = !1, ar = 0;
      const Di = new Array(Jt);
      for (T = 0; T < Jt; T++)
        Di[T] = 0;
      for (T = U; T <= L; T++) {
        const Ft = _[T];
        if (St >= Jt) {
          Tt(Ft, w, R, !0);
          continue;
        }
        let se;
        if (Ft.key != null)
          se = at.get(Ft.key);
        else
          for (rt = tt; rt <= F; rt++)
            if (Di[rt - tt] === 0 && Li(Ft, b[rt])) {
              se = rt;
              break;
            }
        se === void 0 ? Tt(Ft, w, R, !0) : (Di[se - tt] = T + 1, se >= ar ? ar = se : li = !0, p(Ft, b[se], O, null, w, R, D, P, M), St++);
      }
      const lr = li ? Kd(Di) : fi;
      for (rt = lr.length - 1, T = Jt - 1; T >= 0; T--) {
        const Ft = tt + T, se = b[Ft], cr = Ft + 1 < z ? b[Ft + 1].el : C;
        Di[T] === 0 ? p(null, se, O, cr, w, R, D, P, M) : li && (rt < 0 || T !== lr[rt] ? $t(
          se,
          O,
          cr,
          2
          /* MoveType.REORDER */
        ) : rt--);
      }
    }
  }, $t = (_, b, O, C, w = null) => {
    const { el: R, type: D, transition: P, children: M, shapeFlag: T } = _;
    if (T & 6) {
      $t(_.component.subTree, b, O, C);
      return;
    }
    if (T & 128) {
      _.suspense.move(b, O, C);
      return;
    }
    if (T & 64) {
      D.move(_, b, O, ai);
      return;
    }
    if (D === vt) {
      n(R, b, O);
      for (let L = 0; L < M.length; L++)
        $t(M[L], b, O, C);
      n(_.anchor, b, O);
      return;
    }
    if (D === Un) {
      y(_, b, O);
      return;
    }
    if (C !== 2 && T & 1 && P)
      if (C === 0)
        P.beforeEnter(R), n(R, b, O), Ht(() => P.enter(R), w);
      else {
        const { leave: L, delayLeave: F, afterLeave: U } = P, tt = () => n(R, b, O), at = () => {
          L(R, () => {
            tt(), U && U();
          });
        };
        F ? F(R, tt, at) : at();
      }
    else
      n(R, b, O);
  }, Tt = (_, b, O, C = !1, w = !1) => {
    const { type: R, props: D, ref: P, children: M, dynamicChildren: T, shapeFlag: z, patchFlag: L, dirs: F } = _;
    if (P != null && uo(P, null, O, _, !0), z & 256) {
      b.ctx.deactivate(_);
      return;
    }
    const U = z & 1 && F, tt = !jn(_);
    let at;
    if (tt && (at = D && D.onVnodeBeforeUnmount) && oe(at, b, _), z & 6)
      ze(_.component, O, C);
    else {
      if (z & 128) {
        _.suspense.unmount(O, C);
        return;
      }
      U && Fe(_, null, b, "beforeUnmount"), z & 64 ? _.type.remove(_, b, O, w, ai, C) : T && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== vt || L > 0 && L & 64) ? Mt(T, b, O, !1, !0) : (R === vt && L & 384 || !w && z & 16) && Mt(M, b, O), C && Oe(_);
    }
    (tt && (at = D && D.onVnodeUnmounted) || U) && Ht(() => {
      at && oe(at, b, _), U && Fe(_, null, b, "unmounted");
    }, O);
  }, Oe = (_) => {
    const { type: b, el: O, anchor: C, transition: w } = _;
    if (b === vt) {
      He(O, C);
      return;
    }
    if (b === Un) {
      S(_);
      return;
    }
    const R = () => {
      s(O), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (_.shapeFlag & 1 && w && !w.persisted) {
      const { leave: D, delayLeave: P } = w, M = () => D(O, R);
      P ? P(_.el, R, M) : M();
    } else
      R();
  }, He = (_, b) => {
    let O;
    for (; _ !== b; )
      O = u(_), s(_), _ = O;
    s(b);
  }, ze = (_, b, O) => {
    const { bum: C, scope: w, update: R, subTree: D, um: P } = _;
    C && Wn(C), w.stop(), R && (R.active = !1, Tt(D, _, b, O)), P && Ht(P, b), Ht(() => {
      _.isUnmounted = !0;
    }, b), b && b.pendingBranch && !b.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve());
  }, Mt = (_, b, O, C = !1, w = !1, R = 0) => {
    for (let D = R; D < _.length; D++)
      Tt(_[D], b, O, C, w);
  }, yn = (_) => _.shapeFlag & 6 ? yn(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : u(_.anchor || _.el), rr = (_, b, O) => {
    _ == null ? b._vnode && Tt(b._vnode, null, null, !0) : p(b._vnode || null, _, b, null, null, null, O), xr(), kl(), b._vnode = _;
  }, ai = {
    p,
    um: Tt,
    m: $t,
    r: Oe,
    mt: gt,
    mc: A,
    pc: J,
    pbc: V,
    n: yn,
    o: e
  };
  let Vs, Bs;
  return t && ([Vs, Bs] = t(ai)), {
    render: rr,
    hydrate: Vs,
    createApp: Wd(rr, Vs)
  };
}
function Ve({ effect: e, update: t }, i) {
  e.allowRecurse = t.allowRecurse = i;
}
function Ql(e, t, i = !1) {
  const n = e.children, s = t.children;
  if (G(n) && G(s))
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = we(s[o]), a.el = r.el), i || Ql(r, a)), a.type === Ps && (a.el = r.el);
    }
}
function Kd(e) {
  const t = e.slice(), i = [0];
  let n, s, o, r, a;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (s = i[i.length - 1], e[s] < c) {
        t[n] = s, i.push(n);
        continue;
      }
      for (o = 0, r = i.length - 1; o < r; )
        a = o + r >> 1, e[i[a]] < c ? o = a + 1 : r = a;
      c < e[i[o]] && (o > 0 && (t[n] = i[o - 1]), i[o] = n);
    }
  }
  for (o = i.length, r = i[o - 1]; o-- > 0; )
    i[o] = r, r = t[r];
  return i;
}
const $d = (e) => e.__isTeleport, vt = Symbol(void 0), Ps = Symbol(void 0), ni = Symbol(void 0), Un = Symbol(void 0), Xi = [];
let te = null;
function Y(e = !1) {
  Xi.push(te = e ? null : []);
}
function Yd() {
  Xi.pop(), te = Xi[Xi.length - 1] || null;
}
let an = 1;
function Pr(e) {
  an += e;
}
function tc(e) {
  return e.dynamicChildren = an > 0 ? te || fi : null, Yd(), an > 0 && te && te.push(e), e;
}
function et(e, t, i, n, s, o) {
  return tc(N(
    e,
    t,
    i,
    n,
    s,
    o,
    !0
    /* isBlock */
  ));
}
function yi(e, t, i, n, s) {
  return tc(yt(
    e,
    t,
    i,
    n,
    s,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function fo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Li(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rs = "__vInternal", ec = ({ key: e }) => e ?? null, Kn = ({ ref: e, ref_key: t, ref_for: i }) => e != null ? wt(e) || pt(e) || X(e) ? { i: Ut, r: e, k: t, f: !!i } : e : null;
function N(e, t = null, i = null, n = 0, s = null, o = e === vt ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ec(t),
    ref: t && Kn(t),
    scopeId: Ts,
    slotScopeIds: null,
    children: i,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ut
  };
  return a ? (Ko(l, i), o & 128 && e.normalize(l)) : i && (l.shapeFlag |= wt(i) ? 8 : 16), an > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  te && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && te.push(l), l;
}
const yt = Xd;
function Xd(e, t = null, i = null, n = 0, s = null, o = !1) {
  if ((!e || e === Ul) && (e = ni), fo(e)) {
    const a = Oi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && Ko(a, i), an > 0 && !o && te && (a.shapeFlag & 6 ? te[te.indexOf(e)] = a : te.push(a)), a.patchFlag |= -2, a;
  }
  if (au(e) && (e = e.__vccOpts), t) {
    t = qd(t);
    let { class: a, style: l } = t;
    a && !wt(a) && (t.class = ms(a)), ct(l) && (Ss(l) && !G(l) && (l = Dt({}, l)), t.style = oi(l));
  }
  const r = wt(e) ? 1 : _d(e) ? 128 : $d(e) ? 64 : ct(e) ? 4 : X(e) ? 2 : 0;
  return N(e, t, i, n, s, r, o, !0);
}
function qd(e) {
  return e ? Ss(e) || Rs in e ? Dt({}, e) : e : null;
}
function Oi(e, t, i = !1) {
  const { props: n, ref: s, patchFlag: o, children: r } = e, a = t ? Zd(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && ec(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && s ? G(s) ? s.concat(Kn(t)) : [s, Kn(t)] : Kn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== vt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Oi(e.ssContent),
    ssFallback: e.ssFallback && Oi(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function ic(e = " ", t = 0) {
  return yt(Ps, null, e, t);
}
function Is(e, t) {
  const i = yt(Un, null, e);
  return i.staticCount = t, i;
}
function ti(e = "", t = !1) {
  return t ? (Y(), yi(ni, null, e)) : yt(ni, null, e);
}
function le(e) {
  return e == null || typeof e == "boolean" ? yt(ni) : G(e) ? yt(
    vt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? we(e) : yt(Ps, null, String(e));
}
function we(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Oi(e);
}
function Ko(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (G(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ko(e, s()), s._c && (s._d = !0));
      return;
    } else {
      i = 32;
      const s = t._;
      !s && !(Rs in t) ? t._ctx = Ut : s === 3 && Ut && (Ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    X(t) ? (t = { default: t, _ctx: Ut }, i = 32) : (t = String(t), n & 64 ? (i = 16, t = [ic(t)]) : i = 8);
  e.children = t, e.shapeFlag |= i;
}
function Zd(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const s in n)
      if (s === "class")
        t.class !== n.class && (t.class = ms([t.class, n.class]));
      else if (s === "style")
        t.style = oi([t.style, n.style]);
      else if (bs(s)) {
        const o = t[s], r = n[s];
        r && o !== r && !(G(o) && o.includes(r)) && (t[s] = o ? [].concat(o, r) : r);
      } else
        s !== "" && (t[s] = n[s]);
  }
  return t;
}
function oe(e, t, i, n = null) {
  ie(e, t, 7, [
    i,
    n
  ]);
}
const Jd = Jl();
let Qd = 0;
function tu(e, t, i) {
  const n = e.type, s = (t ? t.appContext : e.appContext) || Jd, o = {
    uid: Qd++,
    vnode: e,
    type: n,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new hl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Yl(n, s),
    emitsOptions: Ll(n, s),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: ht,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ht,
    data: ht,
    props: ht,
    attrs: ht,
    slots: ht,
    refs: ht,
    setupState: ht,
    setupContext: null,
    // suspense related
    suspense: i,
    suspenseId: i ? i.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = dd.bind(null, o), e.ce && e.ce(o), o;
}
let Ct = null;
const eu = () => Ct || Ut, Ei = (e) => {
  Ct = e, e.scope.on();
}, ei = () => {
  Ct && Ct.scope.off(), Ct = null;
};
function nc(e) {
  return e.vnode.shapeFlag & 4;
}
let ln = !1;
function iu(e, t = !1) {
  ln = t;
  const { props: i, children: n } = e.vnode, s = nc(e);
  Hd(e, i, s, t), Vd(e, n);
  const o = s ? nu(e, t) : void 0;
  return ln = !1, o;
}
function nu(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = vi(new Proxy(e.ctx, Id));
  const { setup: n } = i;
  if (n) {
    const s = e.setupContext = n.length > 1 ? ou(e) : null;
    Ei(e), Ri();
    const o = Me(n, e, 0, [e.props, s]);
    if (Ii(), ei(), al(o)) {
      if (o.then(ei, ei), t)
        return o.then((r) => {
          Rr(e, r, t);
        }).catch((r) => {
          ws(
            r,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = o;
    } else
      Rr(e, o, t);
  } else
    sc(e, t);
}
function Rr(e, t, i) {
  X(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ct(t) && (e.setupState = Tl(t)), sc(e, i);
}
let Ir;
function sc(e, t, i) {
  const n = e.type;
  if (!e.render) {
    if (!t && Ir && !n.render) {
      const s = n.template || jo(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: l } = n, c = Dt(Dt({
          isCustomElement: o,
          delimiters: a
        }, r), l);
        n.render = Ir(s, c);
      }
    }
    e.render = n.render || ee;
  }
  Ei(e), Ri(), Md(e), Ii(), ei();
}
function su(e) {
  return new Proxy(e.attrs, {
    get(t, i) {
      return Kt(e, "get", "$attrs"), t[i];
    }
  });
}
function ou(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  let i;
  return {
    get attrs() {
      return i || (i = su(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ms(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Tl(vi(e.exposed)), {
      get(t, i) {
        if (i in t)
          return t[i];
        if (i in Yi)
          return Yi[i](e);
      },
      has(t, i) {
        return i in t || i in Yi;
      }
    }));
}
function ru(e, t = !0) {
  return X(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function au(e) {
  return X(e) && "__vccOpts" in e;
}
const At = (e, t) => od(e, t, ln);
function oc(e, t, i) {
  const n = arguments.length;
  return n === 2 ? ct(t) && !G(t) ? fo(t) ? yt(e, null, [t]) : yt(e, t) : yt(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && fo(i) && (i = [i]), yt(e, t, i));
}
const lu = Symbol(""), cu = () => $i(lu), rc = "3.2.45", hu = "http://www.w3.org/2000/svg", Xe = typeof document < "u" ? document : null, Mr = Xe && /* @__PURE__ */ Xe.createElement("template"), du = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const s = t ? Xe.createElementNS(hu, e) : Xe.createElement(e, i ? { is: i } : void 0);
    return e === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, i, n, s, o) {
    const r = i ? i.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), i), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      Mr.innerHTML = n ? `<svg>${e}</svg>` : e;
      const a = Mr.content;
      if (n) {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, i);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      i ? i.previousSibling : t.lastChild
    ];
  }
};
function uu(e, t, i) {
  const n = e._vtc;
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
function fu(e, t, i) {
  const n = e.style, s = wt(i);
  if (i && !s) {
    for (const o in i)
      po(n, o, i[o]);
    if (t && !wt(t))
      for (const o in t)
        i[o] == null && po(n, o, "");
  } else {
    const o = n.display;
    s ? t !== i && (n.cssText = i) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o);
  }
}
const kr = /\s*!important$/;
function po(e, t, i) {
  if (G(i))
    i.forEach((n) => po(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    e.setProperty(t, i);
  else {
    const n = pu(e, t);
    kr.test(i) ? e.setProperty(Pi(n), i.replace(kr, ""), "important") : e[n] = i;
  }
}
const Dr = ["Webkit", "Moz", "ms"], Us = {};
function pu(e, t) {
  const i = Us[t];
  if (i)
    return i;
  let n = ue(t);
  if (n !== "filter" && n in e)
    return Us[t] = n;
  n = ys(n);
  for (let s = 0; s < Dr.length; s++) {
    const o = Dr[s] + n;
    if (o in e)
      return Us[t] = o;
  }
  return t;
}
const Lr = "http://www.w3.org/1999/xlink";
function gu(e, t, i, n, s) {
  if (n && t.startsWith("xlink:"))
    i == null ? e.removeAttributeNS(Lr, t.slice(6, t.length)) : e.setAttributeNS(Lr, t, i);
  else {
    const o = mh(t);
    i == null || o && !ol(i) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : i);
  }
}
function mu(e, t, i, n, s, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n && r(n, s, o), e[t] = i ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = i;
    const l = i ?? "";
    (e.value !== l || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = l), i == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (i === "" || i == null) {
    const l = typeof e[t];
    l === "boolean" ? i = ol(i) : i == null && l === "string" ? (i = "", a = !0) : l === "number" && (i = 0, a = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  a && e.removeAttribute(t);
}
function ac(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function _u(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
function bu(e, t, i, n, s = null) {
  const o = e._vei || (e._vei = {}), r = o[t];
  if (n && r)
    r.value = n;
  else {
    const [a, l] = xu(t);
    if (n) {
      const c = o[t] = Ou(n, s);
      ac(e, a, c, l);
    } else
      r && (_u(e, a, r, l), o[t] = void 0);
  }
}
const Nr = /(?:Once|Passive|Capture)$/;
function xu(e) {
  let t;
  if (Nr.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Nr); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pi(e.slice(2)), t];
}
let Ks = 0;
const vu = /* @__PURE__ */ Promise.resolve(), yu = () => Ks || (vu.then(() => Ks = 0), Ks = Date.now());
function Ou(e, t) {
  const i = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= i.attached)
      return;
    ie(Eu(n, i.value), t, 5, [n]);
  };
  return i.value = e, i.attached = yu(), i;
}
function Eu(e, t) {
  if (G(t)) {
    const i = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      i.call(e), e._stopped = !0;
    }, t.map((n) => (s) => !s._stopped && n && n(s));
  } else
    return t;
}
const Hr = /^on[a-z]/, Su = (e, t, i, n, s = !1, o, r, a, l) => {
  t === "class" ? uu(e, n, s) : t === "style" ? fu(e, i, n) : bs(t) ? Ao(t) || bu(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wu(e, t, n, s)) ? mu(e, t, n, o, r, a, l) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), gu(e, t, n, s));
};
function wu(e, t, i, n) {
  return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Hr.test(t) && X(i)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Hr.test(t) && wt(i) ? !1 : t in e;
}
const zr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return G(t) ? (i) => Wn(t, i) : t;
}, lc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    const s = xs(t);
    ac(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (r) => r.selected).map((r) => i ? Io(ns(r)) : ns(r));
      e._assign(e.multiple ? s ? new Set(o) : o : o[0]);
    }), e._assign = zr(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Fr(e, t);
  },
  beforeUpdate(e, t, i) {
    e._assign = zr(i);
  },
  updated(e, { value: t }) {
    Fr(e, t);
  }
};
function Fr(e, t) {
  const i = e.multiple;
  if (!(i && !G(t) && !xs(t))) {
    for (let n = 0, s = e.options.length; n < s; n++) {
      const o = e.options[n], r = ns(o);
      if (i)
        G(t) ? o.selected = bh(t, r) > -1 : o.selected = t.has(r);
      else if (_s(ns(o), t)) {
        e.selectedIndex !== n && (e.selectedIndex = n);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ns(e) {
  return "_value" in e ? e._value : e.value;
}
const Cu = ["ctrl", "shift", "alt", "meta"], Tu = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Cu.some((i) => e[`${i}Key`] && !t.includes(i))
}, Au = (e, t) => (i, ...n) => {
  for (let s = 0; s < t.length; s++) {
    const o = Tu[t[s]];
    if (o && o(i, t))
      return;
  }
  return e(i, ...n);
}, Pu = /* @__PURE__ */ Dt({ patchProp: Su }, du);
let Vr;
function Ru() {
  return Vr || (Vr = jd(Pu));
}
const Br = (...e) => {
  const t = Ru().createApp(...e), { mount: i } = t;
  return t.mount = (n) => {
    const s = Iu(n);
    if (!s)
      return;
    const o = t._component;
    !X(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
    const r = i(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r;
  }, t;
};
function Iu(e) {
  return wt(e) ? document.querySelector(e) : e;
}
var Mu = !1;
/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let cc;
const ks = (e) => cc = e, hc = (
  /* istanbul ignore next */
  Symbol()
);
function go(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var qi;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(qi || (qi = {}));
function ku() {
  const e = dl(!0), t = e.run(() => jt({}));
  let i = [], n = [];
  const s = vi({
    install(o) {
      ks(s), s._a = o, o.provide(hc, s), o.config.globalProperties.$pinia = s, n.forEach((r) => i.push(r)), n = [];
    },
    use(o) {
      return !this._a && !Mu ? n.push(o) : i.push(o), this;
    },
    _p: i,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return s;
}
const dc = () => {
};
function Gr(e, t, i, n = dc) {
  e.push(t);
  const s = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), n());
  };
  return !i && Th() && Ah(s), s;
}
function ci(e, ...t) {
  e.slice().forEach((i) => {
    i(...t);
  });
}
function mo(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((i, n) => e.set(n, i)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const i in t) {
    if (!t.hasOwnProperty(i))
      continue;
    const n = t[i], s = e[i];
    go(s) && go(n) && e.hasOwnProperty(i) && !pt(n) && !xe(n) ? e[i] = mo(s, n) : e[i] = n;
  }
  return e;
}
const Du = (
  /* istanbul ignore next */
  Symbol()
);
function Lu(e) {
  return !go(e) || !e.hasOwnProperty(Du);
}
const { assign: Ce } = Object;
function Nu(e) {
  return !!(pt(e) && e.effect);
}
function Hu(e, t, i, n) {
  const { state: s, actions: o, getters: r } = t, a = i.state.value[e];
  let l;
  function c() {
    a || (i.state.value[e] = s ? s() : {});
    const h = Mi(i.state.value[e]);
    return Ce(h, o, Object.keys(r || {}).reduce((d, u) => (d[u] = vi(At(() => {
      ks(i);
      const f = i._s.get(e);
      return r[u].call(f, f);
    })), d), {}));
  }
  return l = uc(e, c, t, i, n, !0), l.$reset = function() {
    const d = s ? s() : {};
    this.$patch((u) => {
      Ce(u, d);
    });
  }, l;
}
function uc(e, t, i = {}, n, s, o) {
  let r;
  const a = Ce({ actions: {} }, i), l = {
    deep: !0
    // flush: 'post',
  };
  let c, h, d = vi([]), u = vi([]), f;
  const m = n.state.value[e];
  !o && !m && (n.state.value[e] = {}), jt({});
  let p;
  function g(I) {
    let A;
    c = h = !1, typeof I == "function" ? (I(n.state.value[e]), A = {
      type: qi.patchFunction,
      storeId: e,
      events: f
    }) : (mo(n.state.value[e], I), A = {
      type: qi.patchObject,
      payload: I,
      storeId: e,
      events: f
    });
    const H = p = Symbol();
    Il().then(() => {
      p === H && (c = !0);
    }), h = !0, ci(d, A, n.state.value[e]);
  }
  const x = dc;
  function v() {
    r.stop(), d = [], u = [], n._s.delete(e);
  }
  function y(I, A) {
    return function() {
      ks(n);
      const H = Array.from(arguments), V = [], B = [];
      function Z(W) {
        V.push(W);
      }
      function ut(W) {
        B.push(W);
      }
      ci(u, {
        args: H,
        name: I,
        store: E,
        after: Z,
        onError: ut
      });
      let gt;
      try {
        gt = A.apply(this && this.$id === e ? this : E, H);
      } catch (W) {
        throw ci(B, W), W;
      }
      return gt instanceof Promise ? gt.then((W) => (ci(V, W), W)).catch((W) => (ci(B, W), Promise.reject(W))) : (ci(V, gt), gt);
    };
  }
  const S = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: Gr.bind(null, u),
    $patch: g,
    $reset: x,
    $subscribe(I, A = {}) {
      const H = Gr(d, I, A.detached, () => V()), V = r.run(() => Qe(() => n.state.value[e], (B) => {
        (A.flush === "sync" ? h : c) && I({
          storeId: e,
          type: qi.direct,
          events: f
        }, B);
      }, Ce({}, l, A)));
      return H;
    },
    $dispose: v
  }, E = Es(S);
  n._s.set(e, E);
  const k = n._e.run(() => (r = dl(), r.run(() => t())));
  for (const I in k) {
    const A = k[I];
    if (pt(A) && !Nu(A) || xe(A))
      o || (m && Lu(A) && (pt(A) ? A.value = m[I] : mo(A, m[I])), n.state.value[e][I] = A);
    else if (typeof A == "function") {
      const H = y(I, A);
      k[I] = H, a.actions[I] = A;
    }
  }
  return Ce(E, k), Ce(nt(E), k), Object.defineProperty(E, "$state", {
    get: () => n.state.value[e],
    set: (I) => {
      g((A) => {
        Ce(A, I);
      });
    }
  }), n._p.forEach((I) => {
    Ce(E, r.run(() => I({
      store: E,
      app: n._a,
      pinia: n,
      options: a
    })));
  }), m && o && i.hydrate && i.hydrate(E.$state, m), c = !0, h = !0, E;
}
function zu(e, t, i) {
  let n, s;
  const o = typeof t == "function";
  typeof e == "string" ? (n = e, s = o ? i : t) : (s = e, n = e.id);
  function r(a, l) {
    const c = eu();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || c && $i(hc, null), a && ks(a), a = cc, a._s.has(n) || (o ? uc(n, t, s, a) : Hu(n, s, a)), a._s.get(n);
  }
  return r.$id = n, r;
}
function mn(e) {
  {
    e = nt(e);
    const t = {};
    for (const i in e) {
      const n = e[i];
      (pt(n) || xe(n)) && (t[i] = // ---
      Al(e, i));
    }
    return t;
  }
}
const _n = zu("lca", () => {
  const e = jt(""), t = jt(), i = jt([]), n = jt([]), s = jt([]), o = At(() => {
    const p = [];
    return n.value.forEach((g) => {
      if (g.Core_Data && g.Core_Data.Market) {
        const x = g.Core_Data.Market;
        p.includes(x) || p.push(x);
      }
    }), p;
  }), r = At(() => {
    const p = [
      "#E77724",
      "#78BE43",
      "#02A9E0",
      "#CC8899"
    ];
    return n.value.filter(
      (g) => g.Core_Data.Market == e.value
    ).map(
      (g, x) => (g.display = { color: p[x % p.length] }, g)
    ).sort((g, x) => Number(g.Core_Data.Rank) - Number(x.Core_Data.Rank));
  }), a = At(() => r.value.slice(1)), l = At(() => r.value[0]), c = At(() => {
    var p = {};
    return s.value.forEach((g) => {
      p[g.Metric] = {
        market: g[e.value],
        overview: g.Overview
      };
    }), p;
  }), h = At(() => i.value.find((p) => p.Market == e.value));
  function d(p) {
    let g = [], x = [];
    n.value = [], p.forEach((v, y) => {
      if (y === 0) {
        let S = "";
        g = v.map((E) => (E && (S = E), S));
      } else if (y === 1)
        x = v;
      else {
        const S = {};
        x.forEach((E, k) => {
          const I = Math.min(k, g.length - 1), A = g[I].replace(/\s/, "_");
          S[A] || (S[A] = {}), S[A][x[k]] = v[k];
        }), n.value.push(S);
      }
    });
  }
  function u(p) {
    i.value = [];
    const g = p.shift();
    if (!g)
      return [];
    i.value = p.map((x) => {
      const v = {};
      return g.forEach((y, S) => {
        v[y] = x[S];
      }), v;
    });
  }
  function f(p) {
    s.value = [];
    const g = p.shift();
    if (!g)
      return [];
    s.value = p.map((x) => {
      const v = {};
      return g.forEach((y, S) => {
        v[y] = x[S];
      }), v;
    });
  }
  async function m(p, g) {
    const x = `https://sheets.googleapis.com/v4/spreadsheets/${p}/values:batchGet`;
    try {
      const y = await (await fetch(x + "?" + [
        "key=" + g,
        "ranges=" + encodeURIComponent("Materials Data"),
        "ranges=" + encodeURIComponent("Markets"),
        "ranges=" + encodeURIComponent("In Depth Analysis")
      ].join("&"))).json();
      d(y.valueRanges[0].values), u(y.valueRanges[1].values), f(y.valueRanges[2].values), o.value.length && (e.value = o.value[0]);
    } catch (v) {
      console.log(v);
    }
  }
  return Qe(e, (p) => {
    r.value.length && (t.value = a.value[a.value.length - 1]);
  }), {
    market: e,
    material: t,
    baselineMaterial: l,
    allMaterials: n,
    allAnalysis: s,
    materials: r,
    materialsForComparison: a,
    markets: o,
    marketDetails: h,
    loadLcaData: m,
    analysis: c
  };
}), Fu = { class: "row justify-content-center" }, Vu = { class: "col-auto" }, Bu = ["value"], Gu = /* @__PURE__ */ qt({
  __name: "Selector",
  setup(e) {
    const { markets: t, market: i } = mn(_n());
    return (n, s) => (Y(), et("div", Fu, [
      N("div", Vu, [
        Wl(N("select", {
          class: "form-select form-select-lg dark",
          "onUpdate:modelValue": s[0] || (s[0] = (o) => pt(i) ? i.value = o : null)
        }, [
          (Y(!0), et(vt, null, he(K(t), (o) => (Y(), et("option", { value: o }, Rt(o), 9, Bu))), 256))
        ], 512), [
          [lc, K(i)]
        ])
      ])
    ]));
  }
});
const fe = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, s] of t)
    i[n] = s;
  return i;
}, Wu = /* @__PURE__ */ fe(Gu, [["__scopeId", "data-v-7964f3f3"]]), ju = {}, Uu = {
  width: "92",
  height: "102",
  viewBox: "0 0 92 102",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Ku = /* @__PURE__ */ N("path", {
  d: "M46 101.405C43.92 101.405 41.85 100.875 40 99.805L6.69995 80.575C2.99995 78.435 0.699951 74.455 0.699951 70.185V31.725C0.699951 27.455 2.99995 23.465 6.69995 21.335L40 2.105C43.7 -0.0350001 48.3 -0.0350001 52 2.105L85.2999 21.335C88.9999 23.475 91.2999 27.455 91.2999 31.725V70.175C91.2999 74.445 88.9999 78.425 85.2999 80.565L52 99.795C50.15 100.865 48.07 101.395 46 101.395V101.405ZM46 4.505C44.62 4.505 43.23 4.865 42 5.575L8.69995 24.795C6.22995 26.215 4.69995 28.875 4.69995 31.725V70.175C4.69995 73.025 6.22995 75.675 8.69995 77.105L42 96.335C44.47 97.755 47.53 97.755 50 96.335L83.2999 77.105C85.7699 75.685 87.2999 73.025 87.2999 70.175V31.725C87.2999 28.875 85.7699 26.225 83.2999 24.795L50 5.575C48.77 4.865 47.38 4.505 46 4.505Z",
  fill: "black"
}, null, -1), $u = /* @__PURE__ */ N("path", {
  d: "M38.61 30.205C40.94 30.205 42.84 29.445 42.84 28.515C42.84 27.585 40.95 26.825 38.61 26.825C36.27 26.825 34.38 27.585 34.38 28.515C34.38 29.445 36.27 30.205 38.61 30.205Z",
  fill: "black"
}, null, -1), Yu = /* @__PURE__ */ N("path", {
  d: "M77.89 65.885H66.72V28.505C66.72 23.125 55.98 20.675 46.01 20.675C36.04 20.675 25.3 23.125 25.3 28.505V65.885H14.13C13.03 65.885 12.13 66.785 12.13 67.885C12.13 68.985 13.03 69.885 14.13 69.885H25.3V70.885C25.3 76.265 36.04 78.715 46.01 78.715C55.98 78.715 66.72 76.265 66.72 70.885V69.885H77.89C78.99 69.885 79.89 68.985 79.89 67.885C79.89 66.785 78.99 65.885 77.89 65.885ZM35.66 39.225C36.76 39.225 37.66 38.325 37.66 37.225V35.745C40.33 36.145 43.2 36.335 46 36.335C46.96 36.335 47.93 36.315 48.9 36.265V42.725C48.9 43.825 49.8 44.725 50.9 44.725C52 44.725 52.9 43.825 52.9 42.725V35.925C54.03 35.795 55.13 35.625 56.19 35.415V37.775C56.19 38.875 57.09 39.775 58.19 39.775C59.29 39.775 60.19 38.875 60.19 37.775V34.395C61.11 34.095 61.96 33.745 62.72 33.375V42.595C62.43 43.655 56.88 46.455 46.01 46.455C35.14 46.455 29.57 43.655 29.3 42.625V33.375C30.55 33.995 32.03 34.515 33.67 34.935V37.215C33.67 38.315 34.57 39.215 35.67 39.215L35.66 39.225ZM29.29 47.515C33.32 49.525 39.81 50.465 46 50.465C52.19 50.465 58.69 49.515 62.71 47.515V56.735C62.43 57.795 56.87 60.595 46 60.595C35.13 60.595 29.56 57.795 29.29 56.765V47.515V47.515ZM46 24.675C56.79 24.675 62.35 27.425 62.71 28.505C62.35 29.585 56.79 32.335 46 32.335C41.97 32.335 38.67 31.945 36.09 31.415C36.06 31.415 36.04 31.405 36.01 31.395C31.7 30.485 29.46 29.165 29.28 28.525C29.57 27.455 35.13 24.665 45.99 24.665L46 24.675ZM46 74.715C35.12 74.715 29.56 71.915 29.29 70.885V61.635C33.32 63.645 39.81 64.585 46 64.585C52.19 64.585 58.69 63.635 62.72 61.635V67.855C62.72 67.855 62.72 67.865 62.72 67.875C62.72 67.885 62.72 67.885 62.72 67.895V70.845C62.44 71.905 56.88 74.705 46 74.705V74.715Z",
  fill: "black"
}, null, -1), Xu = [
  Ku,
  $u,
  Yu
];
function qu(e, t) {
  return Y(), et("svg", Uu, Xu);
}
const Zu = /* @__PURE__ */ fe(ju, [["render", qu]]), Ju = {}, Qu = {
  width: "92",
  height: "102",
  viewBox: "0 0 92 102",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, tf = /* @__PURE__ */ Is('<g clip-path="url(#clip0_899_2739)"><path d="M46 101.4C43.93 101.4 41.85 100.87 40 99.8L6.69995 80.57C2.99995 78.43 0.699951 74.45 0.699951 70.18V31.72C0.699951 27.45 2.99995 23.46 6.69995 21.33L40 2.1C43.7 -0.040005 48.3 -0.040005 52 2.1L85.2999 21.33C88.9999 23.47 91.2999 27.45 91.2999 31.72V70.17C91.2999 74.44 88.9999 78.43 85.2999 80.56L52 99.79C50.15 100.86 48.07 101.39 46 101.39V101.4ZM46 4.5C44.62 4.5 43.23 4.86 42 5.57L8.69995 24.79C6.22995 26.21 4.69995 28.87 4.69995 31.72V70.17C4.69995 73.02 6.22995 75.67 8.69995 77.1L42 96.33C44.47 97.75 47.53 97.75 50 96.33L83.2999 77.1C85.7699 75.68 87.2999 73.02 87.2999 70.17V31.72C87.2999 28.87 85.7699 26.22 83.2999 24.79L50 5.57C48.77 4.86 47.38 4.5 46 4.5Z" fill="#A8A8AB"></path><path d="M27.0999 25.72L30.9299 24.18C32.5899 23.51 34.4699 23.82 35.8299 24.99C38.3299 27.15 41.7799 27.72 44.8399 26.49L48.6699 24.95C50.3299 24.28 52.2099 24.59 53.5699 25.76C55.1999 27.17 57.2299 27.9 59.2899 27.9C60.3899 27.9 61.5099 27.69 62.5799 27.26L66.4099 25.72C67.4299 25.31 67.9299 24.14 67.5199 23.12C67.1099 22.1 65.9399 21.6 64.9199 22.01L61.0899 23.55C59.4299 24.22 57.5499 23.91 56.1899 22.74C53.6899 20.58 50.2399 20.01 47.1799 21.24L43.3499 22.78C41.6899 23.45 39.8099 23.14 38.4499 21.97C35.9499 19.81 32.4999 19.24 29.4399 20.47L25.6099 22.01C24.5899 22.42 24.0899 23.59 24.4999 24.61C24.9099 25.64 26.0799 26.13 27.0999 25.72V25.72Z" fill="#A8A8AB"></path><path d="M53.5599 35.68C55.1899 37.09 57.2199 37.82 59.2799 37.82C60.3799 37.82 61.4999 37.61 62.5699 37.18L66.3999 35.64C67.4199 35.23 67.9199 34.06 67.5099 33.04C67.0999 32.02 65.9299 31.52 64.9099 31.93L61.0799 33.47C59.4199 34.14 57.5399 33.83 56.1799 32.66C53.6799 30.5 50.2299 29.93 47.1699 31.16L43.3399 32.7C41.6799 33.37 39.7999 33.06 38.4399 31.89C35.9399 29.73 32.4899 29.16 29.4299 30.39L25.5999 31.93C24.5799 32.34 24.0799 33.51 24.4899 34.53C24.8999 35.55 26.0699 36.05 27.0899 35.64L30.9199 34.1C32.5799 33.43 34.4599 33.74 35.8199 34.91C38.3199 37.07 41.7699 37.64 44.8299 36.41L48.6599 34.87C50.3199 34.2 52.1999 34.51 53.5599 35.68V35.68Z" fill="#A8A8AB"></path><path d="M75.3599 56.84L70.0999 56.69C69.9699 56.17 69.7799 55.67 69.5299 55.19L72.9199 51.99C73.7199 51.23 73.7599 49.97 72.9999 49.16C72.2399 48.36 70.9799 48.32 70.1699 49.08L66.7799 52.28C66.3099 52 65.8199 51.78 65.3199 51.62L65.4399 47.43C65.4699 46.33 64.5999 45.41 63.4999 45.37C62.3999 45.33 61.4799 46.21 61.4399 47.31L61.3199 51.5C60.7999 51.63 60.2999 51.82 59.8199 52.07L55.0399 47.01C54.2799 46.21 53.0199 46.17 52.2099 46.93C51.4099 47.69 51.3699 48.95 52.1299 49.76L56.9099 54.82C56.6299 55.29 56.4099 55.78 56.2499 56.28L50.9899 56.13C49.8799 56.11 48.9699 56.97 48.9299 58.07C48.8899 59.17 49.7699 60.09 50.8699 60.13L56.1299 60.28C56.2599 60.8 56.4499 61.3 56.6999 61.78L51.6399 66.56C50.8399 67.32 50.7999 68.58 51.5599 69.39C51.9499 69.81 52.4799 70.02 53.0099 70.02C53.4999 70.02 53.9999 69.84 54.3799 69.47L59.4399 64.69C59.8999 64.96 60.3899 65.18 60.9099 65.35L60.7599 70.61C60.7299 71.71 61.5999 72.63 62.6999 72.67C62.7199 72.67 62.7399 72.67 62.7599 72.67C63.8399 72.67 64.7299 71.81 64.7599 70.73L64.9099 65.47C65.4299 65.34 65.9399 65.15 66.4099 64.9L70.7699 69.51C71.1599 69.93 71.6899 70.14 72.2199 70.14C72.7099 70.14 73.2099 69.96 73.5899 69.59C74.3899 68.83 74.4299 67.57 73.6699 66.76L69.3099 62.14C69.5899 61.67 69.8099 61.18 69.9699 60.68L75.2299 60.83C75.2299 60.83 75.2699 60.83 75.2899 60.83C76.3699 60.83 77.2599 59.97 77.2899 58.89C77.3199 57.79 76.4499 56.87 75.3499 56.83L75.3599 56.84ZM65.3199 60.83C64.6999 61.42 63.8799 61.74 63.0199 61.71C62.1599 61.69 61.3699 61.33 60.7799 60.7C59.5599 59.41 59.6199 57.37 60.9099 56.16C61.5299 55.57 62.3199 55.28 63.1199 55.28C63.9699 55.28 64.8299 55.62 65.4599 56.29C66.6799 57.58 66.6199 59.62 65.3299 60.83H65.3199Z" fill="#A8A8AB"></path><path d="M40.8199 63.25L37.5999 63.13C37.5199 62.84 37.4099 62.56 37.2899 62.29L41.3399 58.54C42.1499 57.79 42.1999 56.52 41.4499 55.71C40.6999 54.9 39.4299 54.85 38.6199 55.6L34.5699 59.35C34.3099 59.21 34.0399 59.08 33.7599 58.98L33.9199 54.87C33.9599 53.77 33.0999 52.84 31.9999 52.79C30.9199 52.76 29.9699 53.61 29.9199 54.71L29.7599 58.82C29.4699 58.9 29.1899 59.01 28.9199 59.13L25.1699 55.08C24.4199 54.27 23.1499 54.22 22.3399 54.97C21.5299 55.72 21.4799 56.99 22.2299 57.8L25.9799 61.85C25.8399 62.11 25.7099 62.38 25.6099 62.66L21.4999 62.5C20.4099 62.47 19.4699 63.32 19.4199 64.42C19.3699 65.52 20.2399 66.45 21.3399 66.5L25.4499 66.66C25.5299 66.95 25.6399 67.23 25.7599 67.5L22.0799 70.91C21.2699 71.66 21.2199 72.93 21.9699 73.74C22.3599 74.17 22.8999 74.38 23.4399 74.38C23.9299 74.38 24.4099 74.2 24.7999 73.85L28.4799 70.44C28.7399 70.58 29.0099 70.71 29.2899 70.81L29.1299 74.92C29.0899 76.02 29.9499 76.95 31.0499 77C31.0799 77 31.0999 77 31.1299 77C32.1999 77 33.0899 76.15 33.1299 75.08L33.2899 70.95C33.5699 70.87 33.8499 70.77 34.1099 70.65L36.5799 73.31C36.9699 73.74 37.5099 73.95 38.0499 73.95C38.5399 73.95 39.0199 73.77 39.4099 73.42C40.2199 72.67 40.2699 71.4 39.5199 70.59L37.0599 67.94C37.1999 67.68 37.3299 67.41 37.4299 67.13L40.6499 67.25C40.6499 67.25 40.6999 67.25 40.7299 67.25C41.7999 67.25 42.6899 66.4 42.7299 65.33C42.7699 64.23 41.9099 63.3 40.8099 63.25H40.8199ZM33.1099 66.6C32.6599 67.02 32.0599 67.23 31.4399 67.22C30.8199 67.2 30.2499 66.93 29.8299 66.48C28.9599 65.54 29.0199 64.07 29.9599 63.2C30.3899 62.8 30.9499 62.58 31.5299 62.58C31.5599 62.58 31.5899 62.58 31.6199 62.58C32.2399 62.6 32.8099 62.87 33.2299 63.32C34.0999 64.26 34.0399 65.73 33.0999 66.6H33.1099Z" fill="#A8A8AB"></path></g><defs><clipPath id="clip0_899_2739"><rect width="90.6" height="100.9" fill="white" transform="translate(0.699951 0.5)"></rect></clipPath></defs>', 2), ef = [
  tf
];
function nf(e, t) {
  return Y(), et("svg", Qu, ef);
}
const sf = /* @__PURE__ */ fe(Ju, [["render", nf]]), of = {}, rf = {
  width: "92",
  height: "102",
  viewBox: "0 0 92 102",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, af = /* @__PURE__ */ Is('<g clip-path="url(#clip0_899_2717)"><path d="M46 101.4C43.93 101.4 41.85 100.87 40 99.8L6.69995 80.57C2.99995 78.43 0.699951 74.45 0.699951 70.18V31.72C0.699951 27.45 2.99995 23.46 6.69995 21.33L40 2.1C43.7 -0.040005 48.3 -0.040005 52 2.1L85.2999 21.33C88.9999 23.47 91.2999 27.45 91.2999 31.72V70.17C91.2999 74.44 88.9999 78.43 85.2999 80.56L52 99.79C50.15 100.86 48.07 101.39 46 101.39V101.4ZM46 4.5C44.62 4.5 43.23 4.86 42 5.57L8.69995 24.79C6.22995 26.21 4.69995 28.87 4.69995 31.72V70.17C4.69995 73.02 6.22995 75.67 8.69995 77.1L42 96.33C44.47 97.75 47.53 97.75 50 96.33L83.2999 77.1C85.7699 75.68 87.2999 73.02 87.2999 70.17V31.72C87.2999 28.87 85.7699 26.22 83.2999 24.79L50 5.57C48.77 4.86 47.38 4.5 46 4.5Z" fill="#A8A8AB"></path><path d="M63.9 50.03L65.3 53.91C65.59 54.72 66.36 55.23 67.18 55.23C67.41 55.23 67.64 55.19 67.86 55.11C68.9 54.73 69.44 53.59 69.06 52.55L67.66 48.67C67.05 46.98 67.43 45.12 68.65 43.8C70.89 41.38 71.59 37.95 70.47 34.85L69.07 30.97C68.69 29.93 67.55 29.39 66.51 29.77C65.47 30.15 64.93 31.29 65.31 32.33L66.71 36.21C67.32 37.9 66.94 39.76 65.72 41.07C63.48 43.49 62.78 46.92 63.9 50.02V50.03Z" fill="#A8A8AB"></path><path d="M50.89 50.03L52.29 53.91C52.58 54.72 53.35 55.23 54.17 55.23C54.4 55.23 54.63 55.19 54.85 55.11C55.89 54.73 56.43 53.59 56.05 52.55L54.65 48.67C54.04 46.98 54.42 45.12 55.64 43.8C57.88 41.38 58.58 37.95 57.46 34.85L56.06 30.97C55.68 29.93 54.54 29.39 53.5 29.77C52.46 30.15 51.92 31.29 52.3 32.33L53.7 36.21C54.31 37.9 53.93 39.76 52.71 41.07C50.47 43.49 49.77 46.92 50.89 50.02V50.03Z" fill="#A8A8AB"></path><path d="M34.54 40.03L35.94 43.91C36.23 44.72 37 45.23 37.82 45.23C38.05 45.23 38.28 45.19 38.5 45.11C39.54 44.73 40.08 43.59 39.7 42.55L38.3 38.67C37.69 36.98 38.07 35.12 39.29 33.8C41.53 31.38 42.23 27.95 41.11 24.85L39.71 20.97C39.33 19.93 38.19 19.39 37.15 19.77C36.11 20.15 35.57 21.29 35.95 22.33L37.35 26.21C37.96 27.9 37.58 29.76 36.36 31.07C34.12 33.49 33.42 36.92 34.54 40.02V40.03Z" fill="#A8A8AB"></path><path d="M21.53 40.03L22.93 43.91C23.22 44.72 23.99 45.23 24.81 45.23C25.04 45.23 25.27 45.19 25.49 45.11C26.53 44.73 27.07 43.59 26.69 42.55L25.29 38.67C24.68 36.98 25.06 35.12 26.28 33.8C28.52 31.38 29.22 27.95 28.1 24.85L26.7 20.97C26.32 19.93 25.18 19.4 24.14 19.77C23.1 20.15 22.56 21.29 22.94 22.33L24.34 26.21C24.95 27.9 24.57 29.76 23.35 31.07C21.11 33.49 20.41 36.92 21.53 40.02V40.03Z" fill="#A8A8AB"></path><path d="M70.14 59.71H51.22C50.12 59.71 49.22 60.61 49.22 61.71V76.68H42.77V51.71C42.77 50.61 41.87 49.71 40.77 49.71H21.85C20.75 49.71 19.85 50.61 19.85 51.71V87.01C19.85 87.72 20.23 88.39 20.85 88.74L39.77 99.66C40.08 99.84 40.43 99.93 40.77 99.93C41.46 99.93 42.13 99.57 42.5 98.93C43.05 97.97 42.72 96.75 41.77 96.2L23.85 85.86V53.71H38.77V78.68C38.77 79.78 39.67 80.68 40.77 80.68H51.22C52.32 80.68 53.22 79.78 53.22 78.68V63.71H68.14V85.86L50.22 96.2C49.26 96.75 48.94 97.98 49.49 98.93C49.86 99.57 50.53 99.93 51.22 99.93C51.56 99.93 51.9 99.84 52.22 99.66L71.14 88.74C71.76 88.38 72.14 87.72 72.14 87.01V61.71C72.14 60.61 71.24 59.71 70.14 59.71V59.71Z" fill="#A8A8AB"></path></g><defs><clipPath id="clip0_899_2717"><rect width="90.6" height="100.9" fill="white" transform="translate(0.699951 0.5)"></rect></clipPath></defs>', 2), lf = [
  af
];
function cf(e, t) {
  return Y(), et("svg", rf, lf);
}
const hf = /* @__PURE__ */ fe(of, [["render", cf]]), df = {}, uf = {
  width: "92",
  height: "102",
  viewBox: "0 0 92 102",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ff = /* @__PURE__ */ Is('<g clip-path="url(#clip0_899_2729)"><path d="M46 101.4C43.92 101.4 41.85 100.87 40 99.8L6.69995 80.57C2.99995 78.43 0.699951 74.45 0.699951 70.18V31.72C0.699951 27.45 2.99995 23.46 6.69995 21.33L40 2.1C43.7 -0.040005 48.3 -0.040005 52 2.1L85.2999 21.33C88.9999 23.47 91.2999 27.45 91.2999 31.72V70.17C91.2999 74.44 88.9999 78.42 85.2999 80.56L52 99.79C50.15 100.86 48.07 101.39 46 101.39V101.4ZM46 4.5C44.62 4.5 43.23 4.86 42 5.57L8.69995 24.79C6.22995 26.21 4.69995 28.87 4.69995 31.72V70.17C4.69995 73.02 6.22995 75.67 8.69995 77.1L42 96.33C44.47 97.75 47.53 97.75 50 96.33L83.2999 77.1C85.7699 75.68 87.2999 73.02 87.2999 70.17V31.72C87.2999 28.87 85.7699 26.22 83.2999 24.79L50 5.57C48.77 4.86 47.38 4.5 46 4.5Z" fill="#A8A8AB"></path><path d="M45.9999 59.27C53.8999 59.27 60.3299 52.84 60.3299 44.94C60.3299 37.76 48.9899 19.49 47.6999 17.43C47.3299 16.85 46.6899 16.49 46.0099 16.49C45.3299 16.49 44.6799 16.84 44.3199 17.43C43.0299 19.49 31.6899 37.77 31.6899 44.94C31.6899 52.84 38.1199 59.27 46.0199 59.27H45.9999ZM45.9999 22.33C49.9199 28.9 56.3299 40.55 56.3299 44.94C56.3299 50.63 51.6999 55.27 45.9999 55.27C40.2999 55.27 35.6699 50.64 35.6699 44.94C35.6699 40.55 42.0699 28.9 45.9999 22.33Z" fill="#A8A8AB"></path><path d="M64.8999 76.17L61.0699 77.71C59.4099 78.38 57.5299 78.07 56.1699 76.9C53.6699 74.74 50.2199 74.17 47.1599 75.4L43.3299 76.94C41.6699 77.61 39.7899 77.3 38.4299 76.13C35.9299 73.97 32.4799 73.4 29.4199 74.63L25.5899 76.17C24.5699 76.58 24.0699 77.75 24.4799 78.77C24.8899 79.8 26.0599 80.29 27.0799 79.88L30.9099 78.34C32.5699 77.67 34.4499 77.98 35.8099 79.15C38.3099 81.31 41.7599 81.88 44.8199 80.65L48.6499 79.11C50.3099 78.44 52.1899 78.75 53.5499 79.92C55.1799 81.32 57.2099 82.06 59.2699 82.06C60.3699 82.06 61.4899 81.85 62.5599 81.42L66.3899 79.88C67.4099 79.47 67.9099 78.3 67.4999 77.28C67.0899 76.26 65.9199 75.76 64.8999 76.17V76.17Z" fill="#A8A8AB"></path><path d="M27.0999 69.97L30.9299 68.43C32.5899 67.76 34.4699 68.07 35.8299 69.24C38.3299 71.4 41.7799 71.97 44.8399 70.74L48.6699 69.2C50.3299 68.53 52.2099 68.84 53.5699 70.01C55.1999 71.41 57.2299 72.15 59.2899 72.15C60.3899 72.15 61.5099 71.94 62.5799 71.51L66.4099 69.97C67.4299 69.56 67.9299 68.39 67.5199 67.37C67.1099 66.35 65.9399 65.85 64.9199 66.26L61.0899 67.8C59.4299 68.47 57.5499 68.16 56.1899 66.99C53.6899 64.83 50.2399 64.26 47.1799 65.49L43.3499 67.03C41.6899 67.7 39.8099 67.39 38.4499 66.21C35.9499 64.05 32.4999 63.48 29.4399 64.71L25.6099 66.25C24.5899 66.66 24.0899 67.83 24.4999 68.85C24.9099 69.88 26.0799 70.37 27.0999 69.96V69.97Z" fill="#A8A8AB"></path></g><defs><clipPath id="clip0_899_2729"><rect width="90.6" height="100.9" fill="white" transform="translate(0.699951 0.5)"></rect></clipPath></defs>', 2), pf = [
  ff
];
function gf(e, t) {
  return Y(), et("svg", uf, pf);
}
const mf = /* @__PURE__ */ fe(df, [["render", gf]]), _f = ["fill"], bf = /* @__PURE__ */ qt({
  __name: "IconCircle",
  props: {
    color: null,
    size: null
  },
  setup(e) {
    const t = e, { size: i, color: n } = Mi(t), s = At(() => i != null && i.value ? { width: i.value } : {});
    return (o, r) => (Y(), et("svg", {
      style: oi(K(s)),
      viewBox: "0 0 20 20"
    }, [
      N("circle", {
        cx: "50%",
        cy: "50%",
        r: "10",
        fill: K(n)
      }, null, 8, _f)
    ], 4));
  }
});
const fc = /* @__PURE__ */ fe(bf, [["__scopeId", "data-v-403b2dde"]]);
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function bn(e) {
  return e + 0.5 | 0;
}
const Te = (e, t, i) => Math.max(Math.min(e, i), t);
function Gi(e) {
  return Te(bn(e * 2.55), 0, 255);
}
function ke(e) {
  return Te(bn(e * 255), 0, 255);
}
function be(e) {
  return Te(bn(e / 2.55) / 100, 0, 1);
}
function Wr(e) {
  return Te(bn(e * 100), 0, 100);
}
const Yt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, _o = [..."0123456789ABCDEF"], xf = (e) => _o[e & 15], vf = (e) => _o[(e & 240) >> 4] + _o[e & 15], An = (e) => (e & 240) >> 4 === (e & 15), yf = (e) => An(e.r) && An(e.g) && An(e.b) && An(e.a);
function Of(e) {
  var t = e.length, i;
  return e[0] === "#" && (t === 4 || t === 5 ? i = {
    r: 255 & Yt[e[1]] * 17,
    g: 255 & Yt[e[2]] * 17,
    b: 255 & Yt[e[3]] * 17,
    a: t === 5 ? Yt[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (i = {
    r: Yt[e[1]] << 4 | Yt[e[2]],
    g: Yt[e[3]] << 4 | Yt[e[4]],
    b: Yt[e[5]] << 4 | Yt[e[6]],
    a: t === 9 ? Yt[e[7]] << 4 | Yt[e[8]] : 255
  })), i;
}
const Ef = (e, t) => e < 255 ? t(e) : "";
function Sf(e) {
  var t = yf(e) ? xf : vf;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + Ef(e.a, t) : void 0;
}
const wf = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function pc(e, t, i) {
  const n = t * Math.min(i, 1 - i), s = (o, r = (o + e / 30) % 12) => i - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function Cf(e, t, i) {
  const n = (s, o = (s + e / 60) % 6) => i - i * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Tf(e, t, i) {
  const n = pc(e, 1, 0.5);
  let s;
  for (t + i > 1 && (s = 1 / (t + i), t *= s, i *= s), s = 0; s < 3; s++)
    n[s] *= 1 - t - i, n[s] += t;
  return n;
}
function Af(e, t, i, n, s) {
  return e === s ? (t - i) / n + (t < i ? 6 : 0) : t === s ? (i - e) / n + 2 : (e - t) / n + 4;
}
function $o(e) {
  const i = e.r / 255, n = e.g / 255, s = e.b / 255, o = Math.max(i, n, s), r = Math.min(i, n, s), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = Af(i, n, s, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Yo(e, t, i, n) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, i, n)).map(ke);
}
function Xo(e, t, i) {
  return Yo(pc, e, t, i);
}
function Pf(e, t, i) {
  return Yo(Tf, e, t, i);
}
function Rf(e, t, i) {
  return Yo(Cf, e, t, i);
}
function gc(e) {
  return (e % 360 + 360) % 360;
}
function If(e) {
  const t = wf.exec(e);
  let i = 255, n;
  if (!t)
    return;
  t[5] !== n && (i = t[6] ? Gi(+t[5]) : ke(+t[5]));
  const s = gc(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? n = Pf(s, o, r) : t[1] === "hsv" ? n = Rf(s, o, r) : n = Xo(s, o, r), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: i
  };
}
function Mf(e, t) {
  var i = $o(e);
  i[0] = gc(i[0] + t), i = Xo(i), e.r = i[0], e.g = i[1], e.b = i[2];
}
function kf(e) {
  if (!e)
    return;
  const t = $o(e), i = t[0], n = Wr(t[1]), s = Wr(t[2]);
  return e.a < 255 ? `hsla(${i}, ${n}%, ${s}%, ${be(e.a)})` : `hsl(${i}, ${n}%, ${s}%)`;
}
const jr = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Ur = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Df() {
  const e = {}, t = Object.keys(Ur), i = Object.keys(jr);
  let n, s, o, r, a;
  for (n = 0; n < t.length; n++) {
    for (r = a = t[n], s = 0; s < i.length; s++)
      o = i[s], a = a.replace(o, jr[o]);
    o = parseInt(Ur[r], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let Pn;
function Lf(e) {
  Pn || (Pn = Df(), Pn.transparent = [0, 0, 0, 0]);
  const t = Pn[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Nf = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Hf(e) {
  const t = Nf.exec(e);
  let i = 255, n, s, o;
  if (t) {
    if (t[7] !== n) {
      const r = +t[7];
      i = t[8] ? Gi(r) : Te(r * 255, 0, 255);
    }
    return n = +t[1], s = +t[3], o = +t[5], n = 255 & (t[2] ? Gi(n) : Te(n, 0, 255)), s = 255 & (t[4] ? Gi(s) : Te(s, 0, 255)), o = 255 & (t[6] ? Gi(o) : Te(o, 0, 255)), {
      r: n,
      g: s,
      b: o,
      a: i
    };
  }
}
function zf(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${be(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const $s = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, hi = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function Ff(e, t, i) {
  const n = hi(be(e.r)), s = hi(be(e.g)), o = hi(be(e.b));
  return {
    r: ke($s(n + i * (hi(be(t.r)) - n))),
    g: ke($s(s + i * (hi(be(t.g)) - s))),
    b: ke($s(o + i * (hi(be(t.b)) - o))),
    a: e.a + i * (t.a - e.a)
  };
}
function Rn(e, t, i) {
  if (e) {
    let n = $o(e);
    n[t] = Math.max(0, Math.min(n[t] + n[t] * i, t === 0 ? 360 : 1)), n = Xo(n), e.r = n[0], e.g = n[1], e.b = n[2];
  }
}
function mc(e, t) {
  return e && Object.assign(t || {}, e);
}
function Kr(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = ke(e[3]))) : (t = mc(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = ke(t.a)), t;
}
function Vf(e) {
  return e.charAt(0) === "r" ? Hf(e) : If(e);
}
class cn {
  constructor(t) {
    if (t instanceof cn)
      return t;
    const i = typeof t;
    let n;
    i === "object" ? n = Kr(t) : i === "string" && (n = Of(t) || Lf(t) || Vf(t)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = mc(this._rgb);
    return t && (t.a = be(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Kr(t);
  }
  rgbString() {
    return this._valid ? zf(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Sf(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? kf(this._rgb) : void 0;
  }
  mix(t, i) {
    if (t) {
      const n = this.rgb, s = t.rgb;
      let o;
      const r = i === o ? 0.5 : i, a = 2 * r - 1, l = n.a - s.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, n.r = 255 & c * n.r + o * s.r + 0.5, n.g = 255 & c * n.g + o * s.g + 0.5, n.b = 255 & c * n.b + o * s.b + 0.5, n.a = r * n.a + (1 - r) * s.a, this.rgb = n;
    }
    return this;
  }
  interpolate(t, i) {
    return t && (this._rgb = Ff(this._rgb, t._rgb, i)), this;
  }
  clone() {
    return new cn(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = ke(t), this;
  }
  clearer(t) {
    const i = this._rgb;
    return i.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, i = bn(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = i, this;
  }
  opaquer(t) {
    const i = this._rgb;
    return i.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return Rn(this._rgb, 2, t), this;
  }
  darken(t) {
    return Rn(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Rn(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Rn(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Mf(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.2.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
function pe() {
}
const Bf = (() => {
  let e = 0;
  return () => e++;
})();
function mt(e) {
  return e === null || typeof e > "u";
}
function _t(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function it(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function bt(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function Bt(e, t) {
  return bt(e) ? e : t;
}
function Q(e, t) {
  return typeof e > "u" ? t : e;
}
const Gf = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t, _c = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function lt(e, t, i) {
  if (e && typeof e.call == "function")
    return e.apply(i, t);
}
function ot(e, t, i, n) {
  let s, o, r;
  if (_t(e))
    if (o = e.length, n)
      for (s = o - 1; s >= 0; s--)
        t.call(i, e[s], s);
    else
      for (s = 0; s < o; s++)
        t.call(i, e[s], s);
  else if (it(e))
    for (r = Object.keys(e), o = r.length, s = 0; s < o; s++)
      t.call(i, e[r[s]], r[s]);
}
function ss(e, t) {
  let i, n, s, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (i = 0, n = e.length; i < n; ++i)
    if (s = e[i], o = t[i], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function os(e) {
  if (_t(e))
    return e.map(os);
  if (it(e)) {
    const t = /* @__PURE__ */ Object.create(null), i = Object.keys(e), n = i.length;
    let s = 0;
    for (; s < n; ++s)
      t[i[s]] = os(e[i[s]]);
    return t;
  }
  return e;
}
function bc(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function Wf(e, t, i, n) {
  if (!bc(e))
    return;
  const s = t[e], o = i[e];
  it(s) && it(o) ? hn(s, o, n) : t[e] = os(o);
}
function hn(e, t, i) {
  const n = _t(t) ? t : [
    t
  ], s = n.length;
  if (!it(e))
    return e;
  i = i || {};
  const o = i.merger || Wf;
  let r;
  for (let a = 0; a < s; ++a) {
    if (r = n[a], !it(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], e, r, i);
  }
  return e;
}
function Zi(e, t) {
  return hn(e, t, {
    merger: jf
  });
}
function jf(e, t, i) {
  if (!bc(e))
    return;
  const n = t[e], s = i[e];
  it(n) && it(s) ? Zi(n, s) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = os(s));
}
const $r = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function Uf(e) {
  const t = e.split("."), i = [];
  let n = "";
  for (const s of t)
    n += s, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (i.push(n), n = "");
  return i;
}
function Kf(e) {
  const t = Uf(e);
  return (i) => {
    for (const n of t) {
      if (n === "")
        break;
      i = i && i[n];
    }
    return i;
  };
}
function Si(e, t) {
  return ($r[t] || ($r[t] = Kf(t)))(e);
}
function qo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ne = (e) => typeof e < "u", Le = (e) => typeof e == "function", Yr = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const i of e)
    if (!t.has(i))
      return !1;
  return !0;
};
function $f(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Et = Math.PI, dt = 2 * Et, Yf = dt + Et, rs = Number.POSITIVE_INFINITY, Xf = Et / 180, xt = Et / 2, Be = Et / 4, Xr = Et * 2 / 3, Ae = Math.log10, wi = Math.sign;
function Ji(e, t, i) {
  return Math.abs(e - t) < i;
}
function qr(e) {
  const t = Math.round(e);
  e = Ji(e, t, e / 1e3) ? t : e;
  const i = Math.pow(10, Math.floor(Ae(e))), n = e / i;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
}
function qf(e) {
  const t = [], i = Math.sqrt(e);
  let n;
  for (n = 1; n < i; n++)
    e % n === 0 && (t.push(n), t.push(e / n));
  return i === (i | 0) && t.push(i), t.sort((s, o) => s - o).pop(), t;
}
function as(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Zf(e, t) {
  const i = Math.round(e);
  return i - t <= e && i + t >= e;
}
function xc(e, t, i) {
  let n, s, o;
  for (n = 0, s = e.length; n < s; n++)
    o = e[n][i], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function de(e) {
  return e * (Et / 180);
}
function Zo(e) {
  return e * (180 / Et);
}
function Zr(e) {
  if (!bt(e))
    return;
  let t = 1, i = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, i++;
  return i;
}
function vc(e, t) {
  const i = t.x - e.x, n = t.y - e.y, s = Math.sqrt(i * i + n * n);
  let o = Math.atan2(n, i);
  return o < -0.5 * Et && (o += dt), {
    angle: o,
    distance: s
  };
}
function bo(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Jf(e, t) {
  return (e - t + Yf) % dt - Et;
}
function Wt(e) {
  return (e % dt + dt) % dt;
}
function dn(e, t, i, n) {
  const s = Wt(e), o = Wt(t), r = Wt(i), a = Wt(o - s), l = Wt(r - s), c = Wt(s - o), h = Wt(s - r);
  return s === o || s === r || n && o === r || a > l && c < h;
}
function Xt(e, t, i) {
  return Math.max(t, Math.min(i, e));
}
function Qf(e) {
  return Xt(e, -32768, 32767);
}
function Ze(e, t, i, n = 1e-6) {
  return e >= Math.min(t, i) - n && e <= Math.max(t, i) + n;
}
function Jo(e, t, i) {
  i = i || ((r) => e[r] < t);
  let n = e.length - 1, s = 0, o;
  for (; n - s > 1; )
    o = s + n >> 1, i(o) ? s = o : n = o;
  return {
    lo: s,
    hi: n
  };
}
const xo = (e, t, i, n) => Jo(e, i, n ? (s) => {
  const o = e[s][t];
  return o < i || o === i && e[s + 1][t] === i;
} : (s) => e[s][t] < i), tp = (e, t, i) => Jo(e, i, (n) => e[n][t] >= i);
function ep(e, t, i) {
  let n = 0, s = e.length;
  for (; n < s && e[n] < t; )
    n++;
  for (; s > n && e[s - 1] > i; )
    s--;
  return n > 0 || s < e.length ? e.slice(n, s) : e;
}
const yc = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function ip(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), yc.forEach((i) => {
    const n = "_onData" + qo(i), s = e[i];
    Object.defineProperty(e, i, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = s.apply(this, o);
        return e._chartjs.listeners.forEach((a) => {
          typeof a[n] == "function" && a[n](...o);
        }), r;
      }
    });
  });
}
function Jr(e, t) {
  const i = e._chartjs;
  if (!i)
    return;
  const n = i.listeners, s = n.indexOf(t);
  s !== -1 && n.splice(s, 1), !(n.length > 0) && (yc.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function np(e) {
  const t = /* @__PURE__ */ new Set();
  let i, n;
  for (i = 0, n = e.length; i < n; ++i)
    t.add(e[i]);
  return t.size === n ? e : Array.from(t);
}
const Oc = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function Ec(e, t) {
  let i = [], n = !1;
  return function(...s) {
    i = s, n || (n = !0, Oc.call(window, () => {
      n = !1, e.apply(t, i);
    }));
  };
}
function sp(e, t) {
  let i;
  return function(...n) {
    return t ? (clearTimeout(i), i = setTimeout(e, t, n)) : e.apply(this, n), t;
  };
}
const Sc = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", Vt = (e, t, i) => e === "start" ? t : e === "end" ? i : (t + i) / 2, op = (e, t, i, n) => e === (n ? "left" : "right") ? i : e === "center" ? (t + i) / 2 : t, In = (e) => e === 0 || e === 1, Qr = (e, t, i) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * dt / i)), ta = (e, t, i) => Math.pow(2, -10 * e) * Math.sin((e - t) * dt / i) + 1, Qi = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => -e * (e - 2),
  easeInOutQuad: (e) => (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => (e -= 1) * e * e + 1,
  easeInOutCubic: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
  easeInOutQuart: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
  easeInOutQuint: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
  easeInSine: (e) => -Math.cos(e * xt) + 1,
  easeOutSine: (e) => Math.sin(e * xt),
  easeInOutSine: (e) => -0.5 * (Math.cos(Et * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => In(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => In(e) ? e : Qr(e, 0.075, 0.3),
  easeOutElastic: (e) => In(e) ? e : ta(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return In(e) ? e : e < 0.5 ? 0.5 * Qr(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * ta(e * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(e) {
    return e * e * ((1.70158 + 1) * e - 1.70158);
  },
  easeOutBack(e) {
    return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
  },
  easeInOutBack(e) {
    let t = 1.70158;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  },
  easeInBounce: (e) => 1 - Qi.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? Qi.easeInBounce(e * 2) * 0.5 : Qi.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function wc(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function ea(e) {
  return wc(e) ? e : new cn(e);
}
function Ys(e) {
  return wc(e) ? e : new cn(e).saturate(0.5).darken(0.1).hexString();
}
const rp = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], ap = [
  "color",
  "borderColor",
  "backgroundColor"
];
function lp(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), e.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), e.set("animations", {
    colors: {
      type: "color",
      properties: ap
    },
    numbers: {
      type: "number",
      properties: rp
    }
  }), e.describe("animations", {
    _fallback: "animation"
  }), e.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function cp(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const ia = /* @__PURE__ */ new Map();
function hp(e, t) {
  t = t || {};
  const i = e + JSON.stringify(t);
  let n = ia.get(i);
  return n || (n = new Intl.NumberFormat(e, t), ia.set(i, n)), n;
}
function Ds(e, t, i) {
  return hp(t, i).format(e);
}
const Cc = {
  values(e) {
    return _t(e) ? e : "" + e;
  },
  numeric(e, t, i) {
    if (e === 0)
      return "0";
    const n = this.chart.options.locale;
    let s, o = e;
    if (i.length > 1) {
      const c = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = dp(e, i);
    }
    const r = Ae(Math.abs(o)), a = Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Ds(e, n, l);
  },
  logarithmic(e, t, i) {
    if (e === 0)
      return "0";
    const n = i[t].significand || e / Math.pow(10, Math.floor(Ae(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(n) || t > 0.8 * i.length ? Cc.numeric.call(this, e, t, i) : "";
  }
};
function dp(e, t) {
  let i = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(i) >= 1 && e !== Math.floor(e) && (i = e - Math.floor(e)), i;
}
var Ls = {
  formatters: Cc
};
function up(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, i) => i.lineWidth,
      tickColor: (t, i) => i.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ls.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), e.describe("scales", {
    _fallback: "scale"
  }), e.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const si = /* @__PURE__ */ Object.create(null), vo = /* @__PURE__ */ Object.create(null);
function tn(e, t) {
  if (!t)
    return e;
  const i = t.split(".");
  for (let n = 0, s = i.length; n < s; ++n) {
    const o = i[n];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function Xs(e, t, i) {
  return typeof t == "string" ? hn(tn(e, t), i) : hn(tn(e, ""), t);
}
class fp {
  constructor(t, i) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (n, s) => Ys(s.backgroundColor), this.hoverBorderColor = (n, s) => Ys(s.borderColor), this.hoverColor = (n, s) => Ys(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(i);
  }
  set(t, i) {
    return Xs(this, t, i);
  }
  get(t) {
    return tn(this, t);
  }
  describe(t, i) {
    return Xs(vo, t, i);
  }
  override(t, i) {
    return Xs(si, t, i);
  }
  route(t, i, n, s) {
    const o = tn(this, t), r = tn(this, n), a = "_" + i;
    Object.defineProperties(o, {
      [a]: {
        value: o[i],
        writable: !0
      },
      [i]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[s];
          return it(l) ? Object.assign({}, c, l) : Q(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((i) => i(this));
  }
}
var Ot = /* @__PURE__ */ new fp({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  lp,
  cp,
  up
]);
function pp(e) {
  return !e || mt(e.size) || mt(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function ls(e, t, i, n, s) {
  let o = t[s];
  return o || (o = t[s] = e.measureText(s).width, i.push(s)), o > n && (n = o), n;
}
function gp(e, t, i, n) {
  n = n || {};
  let s = n.data = n.data || {}, o = n.garbageCollect = n.garbageCollect || [];
  n.font !== t && (s = n.data = {}, o = n.garbageCollect = [], n.font = t), e.save(), e.font = t;
  let r = 0;
  const a = i.length;
  let l, c, h, d, u;
  for (l = 0; l < a; l++)
    if (d = i[l], d != null && _t(d) !== !0)
      r = ls(e, s, o, r, d);
    else if (_t(d))
      for (c = 0, h = d.length; c < h; c++)
        u = d[c], u != null && !_t(u) && (r = ls(e, s, o, r, u));
  e.restore();
  const f = o.length / 2;
  if (f > i.length) {
    for (l = 0; l < f; l++)
      delete s[o[l]];
    o.splice(0, f);
  }
  return r;
}
function Ge(e, t, i) {
  const n = e.currentDevicePixelRatio, s = i !== 0 ? Math.max(i / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function na(e, t) {
  t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore();
}
function yo(e, t, i, n) {
  Tc(e, t, i, n, null);
}
function Tc(e, t, i, n, s) {
  let o, r, a, l, c, h, d, u;
  const f = t.pointStyle, m = t.rotation, p = t.radius;
  let g = (m || 0) * Xf;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(i, n), e.rotate(g), e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), e.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (e.beginPath(), f) {
      default:
        s ? e.ellipse(i, n, s / 2, p, 0, 0, dt) : e.arc(i, n, p, 0, dt), e.closePath();
        break;
      case "triangle":
        h = s ? s / 2 : p, e.moveTo(i + Math.sin(g) * h, n - Math.cos(g) * p), g += Xr, e.lineTo(i + Math.sin(g) * h, n - Math.cos(g) * p), g += Xr, e.lineTo(i + Math.sin(g) * h, n - Math.cos(g) * p), e.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(g + Be) * l, d = Math.cos(g + Be) * (s ? s / 2 - c : l), a = Math.sin(g + Be) * l, u = Math.sin(g + Be) * (s ? s / 2 - c : l), e.arc(i - d, n - a, c, g - Et, g - xt), e.arc(i + u, n - r, c, g - xt, g), e.arc(i + d, n + a, c, g, g + xt), e.arc(i - u, n + r, c, g + xt, g + Et), e.closePath();
        break;
      case "rect":
        if (!m) {
          l = Math.SQRT1_2 * p, h = s ? s / 2 : l, e.rect(i - h, n - l, 2 * h, 2 * l);
          break;
        }
        g += Be;
      case "rectRot":
        d = Math.cos(g) * (s ? s / 2 : p), r = Math.cos(g) * p, a = Math.sin(g) * p, u = Math.sin(g) * (s ? s / 2 : p), e.moveTo(i - d, n - a), e.lineTo(i + u, n - r), e.lineTo(i + d, n + a), e.lineTo(i - u, n + r), e.closePath();
        break;
      case "crossRot":
        g += Be;
      case "cross":
        d = Math.cos(g) * (s ? s / 2 : p), r = Math.cos(g) * p, a = Math.sin(g) * p, u = Math.sin(g) * (s ? s / 2 : p), e.moveTo(i - d, n - a), e.lineTo(i + d, n + a), e.moveTo(i + u, n - r), e.lineTo(i - u, n + r);
        break;
      case "star":
        d = Math.cos(g) * (s ? s / 2 : p), r = Math.cos(g) * p, a = Math.sin(g) * p, u = Math.sin(g) * (s ? s / 2 : p), e.moveTo(i - d, n - a), e.lineTo(i + d, n + a), e.moveTo(i + u, n - r), e.lineTo(i - u, n + r), g += Be, d = Math.cos(g) * (s ? s / 2 : p), r = Math.cos(g) * p, a = Math.sin(g) * p, u = Math.sin(g) * (s ? s / 2 : p), e.moveTo(i - d, n - a), e.lineTo(i + d, n + a), e.moveTo(i + u, n - r), e.lineTo(i - u, n + r);
        break;
      case "line":
        r = s ? s / 2 : Math.cos(g) * p, a = Math.sin(g) * p, e.moveTo(i - r, n - a), e.lineTo(i + r, n + a);
        break;
      case "dash":
        e.moveTo(i, n), e.lineTo(i + Math.cos(g) * (s ? s / 2 : p), n + Math.sin(g) * p);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function un(e, t, i) {
  return i = i || 0.5, !t || e && e.x > t.left - i && e.x < t.right + i && e.y > t.top - i && e.y < t.bottom + i;
}
function Ns(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function Hs(e) {
  e.restore();
}
function mp(e, t, i, n, s) {
  if (!t)
    return e.lineTo(i.x, i.y);
  if (s === "middle") {
    const o = (t.x + i.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, i.y);
  } else
    s === "after" != !!n ? e.lineTo(t.x, i.y) : e.lineTo(i.x, t.y);
  e.lineTo(i.x, i.y);
}
function _p(e, t, i, n) {
  if (!t)
    return e.lineTo(i.x, i.y);
  e.bezierCurveTo(n ? t.cp1x : t.cp2x, n ? t.cp1y : t.cp2y, n ? i.cp2x : i.cp1x, n ? i.cp2y : i.cp1y, i.x, i.y);
}
function Ci(e, t, i, n, s, o = {}) {
  const r = _t(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = s.string, bp(e, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && vp(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), mt(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, i, n, o.maxWidth)), e.fillText(c, i, n, o.maxWidth), xp(e, i, n, c, o), n += s.lineHeight;
  e.restore();
}
function bp(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), mt(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function xp(e, t, i, n, s) {
  if (s.strikethrough || s.underline) {
    const o = e.measureText(n), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = i - o.actualBoundingBoxAscent, c = i + o.actualBoundingBoxDescent, h = s.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = s.decorationWidth || 2, e.moveTo(r, h), e.lineTo(a, h), e.stroke();
  }
}
function vp(e, t) {
  const i = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = i;
}
function cs(e, t) {
  const { x: i, y: n, w: s, h: o, radius: r } = t;
  e.arc(i + r.topLeft, n + r.topLeft, r.topLeft, -xt, Et, !0), e.lineTo(i, n + o - r.bottomLeft), e.arc(i + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, Et, xt, !0), e.lineTo(i + s - r.bottomRight, n + o), e.arc(i + s - r.bottomRight, n + o - r.bottomRight, r.bottomRight, xt, 0, !0), e.lineTo(i + s, n + r.topRight), e.arc(i + s - r.topRight, n + r.topRight, r.topRight, 0, -xt, !0), e.lineTo(i + r.topLeft, n);
}
const yp = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Op = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Ep(e, t) {
  const i = ("" + e).match(yp);
  if (!i || i[1] === "normal")
    return t * 1.2;
  switch (e = +i[2], i[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const Sp = (e) => +e || 0;
function Qo(e, t) {
  const i = {}, n = it(t), s = n ? Object.keys(t) : t, o = it(e) ? n ? (r) => Q(e[r], e[t[r]]) : (r) => e[r] : () => e;
  for (const r of s)
    i[r] = Sp(o(r));
  return i;
}
function wp(e) {
  return Qo(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function mi(e) {
  return Qo(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Lt(e) {
  const t = wp(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Pt(e, t) {
  e = e || {}, t = t || Ot.font;
  let i = Q(e.size, t.size);
  typeof i == "string" && (i = parseInt(i, 10));
  let n = Q(e.style, t.style);
  n && !("" + n).match(Op) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const s = {
    family: Q(e.family, t.family),
    lineHeight: Ep(Q(e.lineHeight, t.lineHeight), i),
    size: i,
    style: n,
    weight: Q(e.weight, t.weight),
    string: ""
  };
  return s.string = pp(s), s;
}
function Mn(e, t, i, n) {
  let s = !0, o, r, a;
  for (o = 0, r = e.length; o < r; ++o)
    if (a = e[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), s = !1), i !== void 0 && _t(a) && (a = a[i % a.length], s = !1), a !== void 0))
      return n && !s && (n.cacheable = !1), a;
}
function Cp(e, t, i) {
  const { min: n, max: s } = e, o = _c(t, (s - n) / 2), r = (a, l) => i && a === 0 ? 0 : a + l;
  return {
    min: r(n, -Math.abs(o)),
    max: r(s, o)
  };
}
function Ne(e, t) {
  return Object.assign(Object.create(e), t);
}
function tr(e, t = [
  ""
], i = e, n, s = () => e[0]) {
  ne(n) || (n = Ic("_fallback", e));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: i,
    _fallback: n,
    _getTarget: s,
    override: (r) => tr([
      r,
      ...e
    ], t, i, n)
  };
  return new Proxy(o, {
    deleteProperty(r, a) {
      return delete r[a], delete r._keys, delete e[0][a], !0;
    },
    get(r, a) {
      return Pc(r, a, () => Dp(a, t, e, r));
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(r, a) {
      return oa(r).includes(a);
    },
    ownKeys(r) {
      return oa(r);
    },
    set(r, a, l) {
      const c = r._storage || (r._storage = s());
      return r[a] = c[a] = l, delete r._keys, !0;
    }
  });
}
function Ti(e, t, i, n) {
  const s = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: i,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Ac(e, n),
    setContext: (o) => Ti(e, o, i, n),
    override: (o) => Ti(e.override(o), t, i, n)
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0;
    },
    get(o, r, a) {
      return Pc(o, r, () => Ap(o, r, a));
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(e, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(e, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(o, r) {
      return Reflect.has(e, r);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(o, r, a) {
      return e[r] = a, delete o[r], !0;
    }
  });
}
function Ac(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: i = t.scriptable, _indexable: n = t.indexable, _allKeys: s = t.allKeys } = e;
  return {
    allKeys: s,
    scriptable: i,
    indexable: n,
    isScriptable: Le(i) ? i : () => i,
    isIndexable: Le(n) ? n : () => n
  };
}
const Tp = (e, t) => e ? e + qo(t) : t, er = (e, t) => it(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Pc(e, t, i) {
  if (Object.prototype.hasOwnProperty.call(e, t))
    return e[t];
  const n = i();
  return e[t] = n, n;
}
function Ap(e, t, i) {
  const { _proxy: n, _context: s, _subProxy: o, _descriptors: r } = e;
  let a = n[t];
  return Le(a) && r.isScriptable(t) && (a = Pp(t, a, e, i)), _t(a) && a.length && (a = Rp(t, a, e, r.isIndexable)), er(t, a) && (a = Ti(a, s, o && o[t], r)), a;
}
function Pp(e, t, i, n) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = i;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  return a.add(e), t = t(o, r || n), a.delete(e), er(e, t) && (t = ir(s._scopes, s, e, t)), t;
}
function Rp(e, t, i, n) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = i;
  if (ne(o.index) && n(e))
    t = t[o.index % t.length];
  else if (it(t[0])) {
    const l = t, c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = ir(c, s, e, h);
      t.push(Ti(d, o, r && r[e], a));
    }
  }
  return t;
}
function Rc(e, t, i) {
  return Le(e) ? e(t, i) : e;
}
const Ip = (e, t) => e === !0 ? t : typeof e == "string" ? Si(t, e) : void 0;
function Mp(e, t, i, n, s) {
  for (const o of t) {
    const r = Ip(i, o);
    if (r) {
      e.add(r);
      const a = Rc(r._fallback, i, s);
      if (ne(a) && a !== i && a !== n)
        return a;
    } else if (r === !1 && ne(n) && i !== n)
      return null;
  }
  return !1;
}
function ir(e, t, i, n) {
  const s = t._rootScopes, o = Rc(t._fallback, i, n), r = [
    ...e,
    ...s
  ], a = /* @__PURE__ */ new Set();
  a.add(n);
  let l = sa(a, r, i, o || i, n);
  return l === null || ne(o) && o !== i && (l = sa(a, r, o, l, n), l === null) ? !1 : tr(Array.from(a), [
    ""
  ], s, o, () => kp(t, i, n));
}
function sa(e, t, i, n, s) {
  for (; i; )
    i = Mp(e, t, i, n, s);
  return i;
}
function kp(e, t, i) {
  const n = e._getTarget();
  t in n || (n[t] = {});
  const s = n[t];
  return _t(s) && it(i) ? i : s || {};
}
function Dp(e, t, i, n) {
  let s;
  for (const o of t)
    if (s = Ic(Tp(o, e), i), ne(s))
      return er(e, s) ? ir(i, n, e, s) : s;
}
function Ic(e, t) {
  for (const i of t) {
    if (!i)
      continue;
    const n = i[e];
    if (ne(n))
      return n;
  }
}
function oa(e) {
  let t = e._keys;
  return t || (t = e._keys = Lp(e._scopes)), t;
}
function Lp(e) {
  const t = /* @__PURE__ */ new Set();
  for (const i of e)
    for (const n of Object.keys(i).filter((s) => !s.startsWith("_")))
      t.add(n);
  return Array.from(t);
}
function Np(e, t, i, n) {
  const { iScale: s } = e, { key: o = "r" } = this._parsing, r = new Array(n);
  let a, l, c, h;
  for (a = 0, l = n; a < l; ++a)
    c = a + i, h = t[c], r[a] = {
      r: s.parse(Si(h, o), c)
    };
  return r;
}
const Hp = Number.EPSILON || 1e-14, Ai = (e, t) => t < e.length && !e[t].skip && e[t], Mc = (e) => e === "x" ? "y" : "x";
function zp(e, t, i, n) {
  const s = e.skip ? t : e, o = t, r = i.skip ? t : i, a = bo(o, s), l = bo(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = n * c, u = n * h;
  return {
    previous: {
      x: o.x - d * (r.x - s.x),
      y: o.y - d * (r.y - s.y)
    },
    next: {
      x: o.x + u * (r.x - s.x),
      y: o.y + u * (r.y - s.y)
    }
  };
}
function Fp(e, t, i) {
  const n = e.length;
  let s, o, r, a, l, c = Ai(e, 0);
  for (let h = 0; h < n - 1; ++h)
    if (l = c, c = Ai(e, h + 1), !(!l || !c)) {
      if (Ji(t[h], 0, Hp)) {
        i[h] = i[h + 1] = 0;
        continue;
      }
      s = i[h] / t[h], o = i[h + 1] / t[h], a = Math.pow(s, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), i[h] = s * r * t[h], i[h + 1] = o * r * t[h]);
    }
}
function Vp(e, t, i = "x") {
  const n = Mc(i), s = e.length;
  let o, r, a, l = Ai(e, 0);
  for (let c = 0; c < s; ++c) {
    if (r = a, a = l, l = Ai(e, c + 1), !a)
      continue;
    const h = a[i], d = a[n];
    r && (o = (h - r[i]) / 3, a[`cp1${i}`] = h - o, a[`cp1${n}`] = d - o * t[c]), l && (o = (l[i] - h) / 3, a[`cp2${i}`] = h + o, a[`cp2${n}`] = d + o * t[c]);
  }
}
function Bp(e, t = "x") {
  const i = Mc(t), n = e.length, s = Array(n).fill(0), o = Array(n);
  let r, a, l, c = Ai(e, 0);
  for (r = 0; r < n; ++r)
    if (a = l, l = c, c = Ai(e, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        s[r] = h !== 0 ? (c[i] - l[i]) / h : 0;
      }
      o[r] = a ? c ? wi(s[r - 1]) !== wi(s[r]) ? 0 : (s[r - 1] + s[r]) / 2 : s[r - 1] : s[r];
    }
  Fp(e, s, o), Vp(e, o, t);
}
function kn(e, t, i) {
  return Math.max(Math.min(e, i), t);
}
function Gp(e, t) {
  let i, n, s, o, r, a = un(e[0], t);
  for (i = 0, n = e.length; i < n; ++i)
    r = o, o = a, a = i < n - 1 && un(e[i + 1], t), o && (s = e[i], r && (s.cp1x = kn(s.cp1x, t.left, t.right), s.cp1y = kn(s.cp1y, t.top, t.bottom)), a && (s.cp2x = kn(s.cp2x, t.left, t.right), s.cp2y = kn(s.cp2y, t.top, t.bottom)));
}
function Wp(e, t, i, n, s) {
  let o, r, a, l;
  if (t.spanGaps && (e = e.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Bp(e, s);
  else {
    let c = n ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      a = e[o], l = zp(c, a, e[Math.min(o + 1, r - (n ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && Gp(e, i);
}
function kc() {
  return typeof window < "u" && typeof document < "u";
}
function nr(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function hs(e, t, i) {
  let n;
  return typeof e == "string" ? (n = parseInt(e, 10), e.indexOf("%") !== -1 && (n = n / 100 * t.parentNode[i])) : n = e, n;
}
const zs = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function jp(e, t) {
  return zs(e).getPropertyValue(t);
}
const Up = [
  "top",
  "right",
  "bottom",
  "left"
];
function ii(e, t, i) {
  const n = {};
  i = i ? "-" + i : "";
  for (let s = 0; s < 4; s++) {
    const o = Up[s];
    n[o] = parseFloat(e[t + "-" + o + i]) || 0;
  }
  return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
}
const Kp = (e, t, i) => (e > 0 || t > 0) && (!i || !i.shadowRoot);
function $p(e, t) {
  const i = e.touches, n = i && i.length ? i[0] : e, { offsetX: s, offsetY: o } = n;
  let r = !1, a, l;
  if (Kp(s, o, e.target))
    a = s, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = n.clientX - c.left, l = n.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function Ke(e, t) {
  if ("native" in e)
    return e;
  const { canvas: i, currentDevicePixelRatio: n } = t, s = zs(i), o = s.boxSizing === "border-box", r = ii(s, "padding"), a = ii(s, "border", "width"), { x: l, y: c, box: h } = $p(e, i), d = r.left + (h && a.left), u = r.top + (h && a.top);
  let { width: f, height: m } = t;
  return o && (f -= r.width + a.width, m -= r.height + a.height), {
    x: Math.round((l - d) / f * i.width / n),
    y: Math.round((c - u) / m * i.height / n)
  };
}
function Yp(e, t, i) {
  let n, s;
  if (t === void 0 || i === void 0) {
    const o = nr(e);
    if (!o)
      t = e.clientWidth, i = e.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = zs(o), l = ii(a, "border", "width"), c = ii(a, "padding");
      t = r.width - c.width - l.width, i = r.height - c.height - l.height, n = hs(a.maxWidth, o, "clientWidth"), s = hs(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: i,
    maxWidth: n || rs,
    maxHeight: s || rs
  };
}
const Dn = (e) => Math.round(e * 10) / 10;
function Xp(e, t, i, n) {
  const s = zs(e), o = ii(s, "margin"), r = hs(s.maxWidth, e, "clientWidth") || rs, a = hs(s.maxHeight, e, "clientHeight") || rs, l = Yp(e, t, i);
  let { width: c, height: h } = l;
  if (s.boxSizing === "content-box") {
    const u = ii(s, "border", "width"), f = ii(s, "padding");
    c -= f.width + u.width, h -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, n ? c / n : h - o.height), c = Dn(Math.min(c, r, l.maxWidth)), h = Dn(Math.min(h, a, l.maxHeight)), c && !h && (h = Dn(c / 2)), (t !== void 0 || i !== void 0) && n && l.height && h > l.height && (h = l.height, c = Dn(Math.floor(h * n))), {
    width: c,
    height: h
  };
}
function ra(e, t, i) {
  const n = t || 1, s = Math.floor(e.height * n), o = Math.floor(e.width * n);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const r = e.canvas;
  return r.style && (i || !r.style.height && !r.style.width) && (r.style.height = `${e.height}px`, r.style.width = `${e.width}px`), e.currentDevicePixelRatio !== n || r.height !== s || r.width !== o ? (e.currentDevicePixelRatio = n, r.height = s, r.width = o, e.ctx.setTransform(n, 0, 0, n, 0, 0), !0) : !1;
}
const qp = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
  } catch {
  }
  return e;
}();
function aa(e, t) {
  const i = jp(e, t), n = i && i.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function $e(e, t, i, n) {
  return {
    x: e.x + i * (t.x - e.x),
    y: e.y + i * (t.y - e.y)
  };
}
function Zp(e, t, i, n) {
  return {
    x: e.x + i * (t.x - e.x),
    y: n === "middle" ? i < 0.5 ? e.y : t.y : n === "after" ? i < 1 ? e.y : t.y : i > 0 ? t.y : e.y
  };
}
function Jp(e, t, i, n) {
  const s = {
    x: e.cp2x,
    y: e.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = $e(e, s, i), a = $e(s, o, i), l = $e(o, t, i), c = $e(r, a, i), h = $e(a, l, i);
  return $e(c, h, i);
}
const Qp = function(e, t) {
  return {
    x(i) {
      return e + e + t - i;
    },
    setWidth(i) {
      t = i;
    },
    textAlign(i) {
      return i === "center" ? i : i === "right" ? "left" : "right";
    },
    xPlus(i, n) {
      return i - n;
    },
    leftForLtr(i, n) {
      return i - n;
    }
  };
}, tg = function() {
  return {
    x(e) {
      return e;
    },
    setWidth(e) {
    },
    textAlign(e) {
      return e;
    },
    xPlus(e, t) {
      return e + t;
    },
    leftForLtr(e, t) {
      return e;
    }
  };
};
function _i(e, t, i) {
  return e ? Qp(t, i) : tg();
}
function Dc(e, t) {
  let i, n;
  (t === "ltr" || t === "rtl") && (i = e.canvas.style, n = [
    i.getPropertyValue("direction"),
    i.getPropertyPriority("direction")
  ], i.setProperty("direction", t, "important"), e.prevTextDirection = n);
}
function Lc(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Nc(e) {
  return e === "angle" ? {
    between: dn,
    compare: Jf,
    normalize: Wt
  } : {
    between: Ze,
    compare: (t, i) => t - i,
    normalize: (t) => t
  };
}
function la({ start: e, end: t, count: i, loop: n, style: s }) {
  return {
    start: e % i,
    end: t % i,
    loop: n && (t - e + 1) % i === 0,
    style: s
  };
}
function eg(e, t, i) {
  const { property: n, start: s, end: o } = i, { between: r, normalize: a } = Nc(n), l = t.length;
  let { start: c, end: h, loop: d } = e, u, f;
  if (d) {
    for (c += l, h += l, u = 0, f = l; u < f && r(a(t[c % l][n]), s, o); ++u)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: d,
    style: e.style
  };
}
function Hc(e, t, i) {
  if (!i)
    return [
      e
    ];
  const { property: n, start: s, end: o } = i, r = t.length, { compare: a, between: l, normalize: c } = Nc(n), { start: h, end: d, loop: u, style: f } = eg(e, t, i), m = [];
  let p = !1, g = null, x, v, y;
  const S = () => l(s, y, x) && a(s, y) !== 0, E = () => a(o, x) === 0 || l(o, y, x), k = () => p || S(), I = () => !p || E();
  for (let A = h, H = h; A <= d; ++A)
    v = t[A % r], !v.skip && (x = c(v[n]), x !== y && (p = l(x, s, o), g === null && k() && (g = a(x, s) === 0 ? A : H), g !== null && I() && (m.push(la({
      start: g,
      end: A,
      loop: u,
      count: r,
      style: f
    })), g = null), H = A, y = x));
  return g !== null && m.push(la({
    start: g,
    end: d,
    loop: u,
    count: r,
    style: f
  })), m;
}
function zc(e, t) {
  const i = [], n = e.segments;
  for (let s = 0; s < n.length; s++) {
    const o = Hc(n[s], e.points, t);
    o.length && i.push(...o);
  }
  return i;
}
function ig(e, t, i, n) {
  let s = 0, o = t - 1;
  if (i && !n)
    for (; s < t && !e[s].skip; )
      s++;
  for (; s < t && e[s].skip; )
    s++;
  for (s %= t, i && (o += s); o > s && e[o % t].skip; )
    o--;
  return o %= t, {
    start: s,
    end: o
  };
}
function ng(e, t, i, n) {
  const s = e.length, o = [];
  let r = t, a = e[t], l;
  for (l = t + 1; l <= i; ++l) {
    const c = e[l % s];
    c.skip || c.stop ? a.skip || (n = !1, o.push({
      start: t % s,
      end: (l - 1) % s,
      loop: n
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % s,
    end: r % s,
    loop: n
  }), o;
}
function sg(e, t) {
  const i = e.points, n = e.options.spanGaps, s = i.length;
  if (!s)
    return [];
  const o = !!e._loop, { start: r, end: a } = ig(i, s, o, n);
  if (n === !0)
    return ca(e, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], i, t);
  const l = a < r ? a + s : a, c = !!e._fullLoop && r === 0 && a === s - 1;
  return ca(e, ng(i, r, l, c), i, t);
}
function ca(e, t, i, n) {
  return !n || !n.setContext || !i ? t : og(e, t, i, n);
}
function og(e, t, i, n) {
  const s = e._chart.getContext(), o = ha(e.options), { _datasetIndex: r, options: { spanGaps: a } } = e, l = i.length, c = [];
  let h = o, d = t[0].start, u = d;
  function f(m, p, g, x) {
    const v = a ? -1 : 1;
    if (m !== p) {
      for (m += l; i[m % l].skip; )
        m -= v;
      for (; i[p % l].skip; )
        p += v;
      m % l !== p % l && (c.push({
        start: m % l,
        end: p % l,
        loop: g,
        style: x
      }), h = x, d = p % l);
    }
  }
  for (const m of t) {
    d = a ? d : m.start;
    let p = i[d % l], g;
    for (u = d + 1; u <= m.end; u++) {
      const x = i[u % l];
      g = ha(n.setContext(Ne(s, {
        type: "segment",
        p0: p,
        p1: x,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: r
      }))), rg(g, h) && f(d, u - 1, m.loop, h), p = x, h = g;
    }
    d < u - 1 && f(d, u - 1, m.loop, h);
  }
  return c;
}
function ha(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor
  };
}
function rg(e, t) {
  return t && JSON.stringify(e) !== JSON.stringify(t);
}
/*!
 * Chart.js v4.2.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class ag {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, i, n, s) {
    const o = i.listeners[s], r = i.duration;
    o.forEach((a) => a({
      chart: t,
      initial: i.initial,
      numSteps: r,
      currentStep: Math.min(n - i.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Oc.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let i = 0;
    this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length)
        return;
      const o = n.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > n.duration && (n.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (s.draw(), this._notify(s, n, t, "progress")), o.length || (n.running = !1, this._notify(s, n, t, "complete"), n.initial = !1), i += o.length;
    }), this._lastDate = t, i === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const i = this._charts;
    let n = i.get(t);
    return n || (n = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, i.set(t, n)), n;
  }
  listen(t, i, n) {
    this._getAnims(t).listeners[i].push(n);
  }
  add(t, i) {
    !i || !i.length || this._getAnims(t).items.push(...i);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const i = this._charts.get(t);
    i && (i.running = !0, i.start = Date.now(), i.duration = i.items.reduce((n, s) => Math.max(n, s._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const i = this._charts.get(t);
    return !(!i || !i.running || !i.items.length);
  }
  stop(t) {
    const i = this._charts.get(t);
    if (!i || !i.items.length)
      return;
    const n = i.items;
    let s = n.length - 1;
    for (; s >= 0; --s)
      n[s].cancel();
    i.items = [], this._notify(t, i, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var ge = /* @__PURE__ */ new ag();
const da = "transparent", lg = {
  boolean(e, t, i) {
    return i > 0.5 ? t : e;
  },
  color(e, t, i) {
    const n = ea(e || da), s = n.valid && ea(t || da);
    return s && s.valid ? s.mix(n, i).hexString() : t;
  },
  number(e, t, i) {
    return e + (t - e) * i;
  }
};
class cg {
  constructor(t, i, n, s) {
    const o = i[n];
    s = Mn([
      t.to,
      s,
      o,
      t.from
    ]);
    const r = Mn([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || lg[t.type || typeof r], this._easing = Qi[t.easing] || Qi.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = i, this._prop = n, this._from = r, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, i, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = n - this._start, r = this._duration - o;
      this._start = n, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Mn([
        t.to,
        i,
        s,
        t.from
      ]), this._from = Mn([
        t.from,
        s,
        i
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const i = t - this._start, n = this._duration, s = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || i < n), !this._active) {
      this._target[s] = a, this._notify(!0);
      return;
    }
    if (i < 0) {
      this._target[s] = o;
      return;
    }
    l = i / n % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((i, n) => {
      t.push({
        res: i,
        rej: n
      });
    });
  }
  _notify(t) {
    const i = t ? "res" : "rej", n = this._promises || [];
    for (let s = 0; s < n.length; s++)
      n[s][i]();
  }
}
class Fc {
  constructor(t, i) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(i);
  }
  configure(t) {
    if (!it(t))
      return;
    const i = Object.keys(Ot.animation), n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!it(o))
        return;
      const r = {};
      for (const a of i)
        r[a] = o[a];
      (_t(o.properties) && o.properties || [
        s
      ]).forEach((a) => {
        (a === s || !n.has(a)) && n.set(a, r);
      });
    });
  }
  _animateOptions(t, i) {
    const n = i.options, s = dg(t, n);
    if (!s)
      return [];
    const o = this._createAnimations(s, n);
    return n.$shared && hg(t.options.$animations, n).then(() => {
      t.options = n;
    }, () => {
    }), o;
  }
  _createAnimations(t, i) {
    const n = this._properties, s = [], o = t.$animations || (t.$animations = {}), r = Object.keys(i), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, i));
        continue;
      }
      const h = i[c];
      let d = o[c];
      const u = n.get(c);
      if (d)
        if (u && d.active()) {
          d.update(u, h, a);
          continue;
        } else
          d.cancel();
      if (!u || !u.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new cg(u, t, c, h), s.push(d);
    }
    return s;
  }
  update(t, i) {
    if (this._properties.size === 0) {
      Object.assign(t, i);
      return;
    }
    const n = this._createAnimations(t, i);
    if (n.length)
      return ge.add(this._chart, n), !0;
  }
}
function hg(e, t) {
  const i = [], n = Object.keys(t);
  for (let s = 0; s < n.length; s++) {
    const o = e[n[s]];
    o && o.active() && i.push(o.wait());
  }
  return Promise.all(i);
}
function dg(e, t) {
  if (!t)
    return;
  let i = e.options;
  if (!i) {
    e.options = t;
    return;
  }
  return i.$shared && (e.options = i = Object.assign({}, i, {
    $shared: !1,
    $animations: {}
  })), i;
}
function ua(e, t) {
  const i = e && e.options || {}, n = i.reverse, s = i.min === void 0 ? t : 0, o = i.max === void 0 ? t : 0;
  return {
    start: n ? o : s,
    end: n ? s : o
  };
}
function ug(e, t, i) {
  if (i === !1)
    return !1;
  const n = ua(e, i), s = ua(t, i);
  return {
    top: s.end,
    right: n.end,
    bottom: s.start,
    left: n.start
  };
}
function fg(e) {
  let t, i, n, s;
  return it(e) ? (t = e.top, i = e.right, n = e.bottom, s = e.left) : t = i = n = s = e, {
    top: t,
    right: i,
    bottom: n,
    left: s,
    disabled: e === !1
  };
}
function Vc(e, t) {
  const i = [], n = e._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s)
    i.push(n[s].index);
  return i;
}
function fa(e, t, i, n = {}) {
  const s = e.keys, o = n.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (l = +s[r], l === i) {
        if (n.all)
          continue;
        break;
      }
      c = e.values[l], bt(c) && (o || t === 0 || wi(t) === wi(c)) && (t += c);
    }
    return t;
  }
}
function pg(e) {
  const t = Object.keys(e), i = new Array(t.length);
  let n, s, o;
  for (n = 0, s = t.length; n < s; ++n)
    o = t[n], i[n] = {
      x: o,
      y: e[o]
    };
  return i;
}
function pa(e, t) {
  const i = e && e.options.stacked;
  return i || i === void 0 && t.stack !== void 0;
}
function gg(e, t, i) {
  return `${e.id}.${t.id}.${i.stack || i.type}`;
}
function mg(e) {
  const { min: t, max: i, minDefined: n, maxDefined: s } = e.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: s ? i : Number.POSITIVE_INFINITY
  };
}
function _g(e, t, i) {
  const n = e[t] || (e[t] = {});
  return n[i] || (n[i] = {});
}
function ga(e, t, i, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = e[s.index];
    if (i && o > 0 || !i && o < 0)
      return s.index;
  }
  return null;
}
function ma(e, t) {
  const { chart: i, _cachedMeta: n } = e, s = i._stacks || (i._stacks = {}), { iScale: o, vScale: r, index: a } = n, l = o.axis, c = r.axis, h = gg(o, r, n), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const m = t[f], { [l]: p, [c]: g } = m, x = m._stacks || (m._stacks = {});
    u = x[c] = _g(s, h, p), u[a] = g, u._top = ga(u, r, !0, n.type), u._bottom = ga(u, r, !1, n.type);
    const v = u._visualValues || (u._visualValues = {});
    v[a] = g;
  }
}
function qs(e, t) {
  const i = e.scales;
  return Object.keys(i).filter((n) => i[n].axis === t).shift();
}
function bg(e, t) {
  return Ne(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function xg(e, t, i) {
  return Ne(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: i,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Ni(e, t) {
  const i = e.controller.index, n = e.vScale && e.vScale.axis;
  if (n) {
    t = t || e._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][i] === void 0)
        return;
      delete o[n][i], o[n]._visualValues !== void 0 && o[n]._visualValues[i] !== void 0 && delete o[n]._visualValues[i];
    }
  }
}
const Zs = (e) => e === "reset" || e === "none", _a = (e, t) => t ? e : Object.assign({}, e), vg = (e, t, i) => e && !t.hidden && t._stacked && {
  keys: Vc(i, !0),
  values: null
};
class bi {
  constructor(t, i) {
    this.chart = t, this._ctx = t.ctx, this.index = i, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = pa(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ni(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, i = this._cachedMeta, n = this.getDataset(), s = (d, u, f, m) => d === "x" ? u : d === "r" ? m : f, o = i.xAxisID = Q(n.xAxisID, qs(t, "x")), r = i.yAxisID = Q(n.yAxisID, qs(t, "y")), a = i.rAxisID = Q(n.rAxisID, qs(t, "r")), l = i.indexAxis, c = i.iAxisID = s(l, o, r, a), h = i.vAxisID = s(l, r, o, a);
    i.xScale = this.getScaleForId(o), i.yScale = this.getScaleForId(r), i.rScale = this.getScaleForId(a), i.iScale = this.getScaleForId(c), i.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const i = this._cachedMeta;
    return t === i.iScale ? i.vScale : i.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Jr(this._data, this), t._stacked && Ni(t);
  }
  _dataCheck() {
    const t = this.getDataset(), i = t.data || (t.data = []), n = this._data;
    if (it(i))
      this._data = pg(i);
    else if (n !== i) {
      if (n) {
        Jr(n, this);
        const s = this._cachedMeta;
        Ni(s), s._parsed = [];
      }
      i && Object.isExtensible(i) && ip(i, this), this._syncList = [], this._data = i;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const i = this._cachedMeta, n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = i._stacked;
    i._stacked = pa(i.vScale, i), i.stack !== n.stack && (s = !0, Ni(i), i.stack = n.stack), this._resyncElements(t), (s || o !== i._stacked) && ma(this, i._parsed);
  }
  configure() {
    const t = this.chart.config, i = t.datasetScopeKeys(this._type), n = t.getOptionScopes(this.getDataset(), i, !0);
    this.options = t.createResolver(n, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, i) {
    const { _cachedMeta: n, _data: s } = this, { iScale: o, _stacked: r } = n, a = o.axis;
    let l = t === 0 && i === s.length ? !0 : n._sorted, c = t > 0 && n._parsed[t - 1], h, d, u;
    if (this._parsing === !1)
      n._parsed = s, n._sorted = !0, u = s;
    else {
      _t(s[t]) ? u = this.parseArrayData(n, s, t, i) : it(s[t]) ? u = this.parseObjectData(n, s, t, i) : u = this.parsePrimitiveData(n, s, t, i);
      const f = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < i; ++h)
        n._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
      n._sorted = l;
    }
    r && ma(this, u);
  }
  parsePrimitiveData(t, i, n, s) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(s);
    let u, f, m;
    for (u = 0, f = s; u < f; ++u)
      m = u + n, d[u] = {
        [a]: h || o.parse(c[m], m),
        [l]: r.parse(i[m], m)
      };
    return d;
  }
  parseArrayData(t, i, n, s) {
    const { xScale: o, yScale: r } = t, a = new Array(s);
    let l, c, h, d;
    for (l = 0, c = s; l < c; ++l)
      h = l + n, d = i[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, i, n, s) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let h, d, u, f;
    for (h = 0, d = s; h < d; ++h)
      u = h + n, f = i[u], c[h] = {
        x: o.parse(Si(f, a), u),
        y: r.parse(Si(f, l), u)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, i, n) {
    const s = this.chart, o = this._cachedMeta, r = i[t.axis], a = {
      keys: Vc(s, !0),
      values: i._stacks[t.axis]._visualValues
    };
    return fa(a, r, o.index, {
      mode: n
    });
  }
  updateRangeFromParsed(t, i, n, s) {
    const o = n[i.axis];
    let r = o === null ? NaN : o;
    const a = s && n._stacks[i.axis];
    s && a && (s.values = a, r = fa(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, i) {
    const n = this._cachedMeta, s = n._parsed, o = n._sorted && t === n.iScale, r = s.length, a = this._getOtherScale(t), l = vg(i, n, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = mg(a);
    let u, f;
    function m() {
      f = s[u];
      const p = f[a.axis];
      return !bt(f[t.axis]) || h > p || d < p;
    }
    for (u = 0; u < r && !(!m() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u)
      ;
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!m()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const i = this._cachedMeta._parsed, n = [];
    let s, o, r;
    for (s = 0, o = i.length; s < o; ++s)
      r = i[s][t.axis], bt(r) && n.push(r);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta, n = i.iScale, s = i.vScale, o = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const i = this._cachedMeta;
    this.update(t || "default"), i._clip = fg(Q(this.options.clip, ug(i.xScale, i.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, i = this.chart, n = this._cachedMeta, s = n.data || [], o = i.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || s.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (n.dataset && n.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = s[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
  }
  getStyle(t, i) {
    const n = i ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, i, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = xg(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = bg(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!i, o.mode = n, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, i) {
    return this._resolveElementOptions(this.dataElementType.id, i, t);
  }
  _resolveElementOptions(t, i = "default", n) {
    const s = i === "active", o = this._cachedDataOpts, r = t + "-" + i, a = o[r], l = this.enableOptionSharing && ne(n);
    if (a)
      return _a(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(Ot.elements[t]), m = () => this.getContext(n, s, i), p = c.resolveNamedOptions(u, f, m, d);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(_a(p, l))), p;
  }
  _resolveAnimations(t, i, n) {
    const s = this.chart, o = this._cachedDataOpts, r = `animation-${i}`, a = o[r];
    if (a)
      return a;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, i), u = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(u, this.getContext(t, n, i));
    }
    const c = new Fc(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, i) {
    return !i || Zs(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, i) {
    const n = this.resolveDataElementOptions(t, i), s = this._sharedOptions, o = this.getSharedOptions(n), r = this.includeOptions(i, o) || o !== s;
    return this.updateSharedOptions(o, i, n), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, i, n, s) {
    Zs(s) ? Object.assign(t, n) : this._resolveAnimations(i, s).update(t, n);
  }
  updateSharedOptions(t, i, n) {
    t && !Zs(i) && this._resolveAnimations(void 0, i).update(t, n);
  }
  _setStyle(t, i, n, s) {
    t.active = s;
    const o = this.getStyle(i, s);
    this._resolveAnimations(i, n, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, i, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, i, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const i = this._data, n = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const s = n.length, o = i.length, r = Math.min(o, s);
    r && this.parse(0, r), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, i, n = !0) {
    const s = this._cachedMeta, o = s.data, r = t + i;
    let a;
    const l = (c) => {
      for (c.length += i, a = c.length - 1; a >= r; a--)
        c[a] = c[a - i];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, i), n && this.updateElements(o, t, i, "reset");
  }
  updateElements(t, i, n, s) {
  }
  _removeElements(t, i) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, i);
      n._stacked && Ni(n, s);
    }
    n.data.splice(t, i);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [i, n, s] = t;
      this[i](n, s);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, i) {
    i && this._sync([
      "_removeElements",
      t,
      i
    ]);
    const n = arguments.length - 2;
    n && this._sync([
      "_insertElements",
      t,
      n
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
$(bi, "defaults", {}), $(bi, "datasetElementType", null), $(bi, "dataElementType", null);
function yg(e, t, i) {
  let n = 1, s = 1, o = 0, r = 0;
  if (t < dt) {
    const a = e, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), u = Math.sin(l), f = (y, S, E) => dn(y, a, l, !0) ? 1 : Math.max(S, S * i, E, E * i), m = (y, S, E) => dn(y, a, l, !0) ? -1 : Math.min(S, S * i, E, E * i), p = f(0, c, d), g = f(xt, h, u), x = m(Et, c, d), v = m(Et + xt, h, u);
    n = (p - x) / 2, s = (g - v) / 2, o = -(p + x) / 2, r = -(g + v) / 2;
  }
  return {
    ratioX: n,
    ratioY: s,
    offsetX: o,
    offsetY: r
  };
}
class Wi extends bi {
  constructor(t, i) {
    super(t, i), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, i) {
    const n = this.getDataset().data, s = this._cachedMeta;
    if (this._parsing === !1)
      s._parsed = n;
    else {
      let o = (l) => +n[l];
      if (it(n[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +Si(n[c], l);
      }
      let r, a;
      for (r = t, a = t + i; r < a; ++r)
        s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return de(this.options.rotation - 90);
  }
  _getCircumference() {
    return de(this.options.circumference);
  }
  _getRotationExtents() {
    let t = dt, i = -dt;
    for (let n = 0; n < this.chart.data.datasets.length; ++n)
      if (this.chart.isDatasetVisible(n) && this.chart.getDatasetMeta(n).type === this._type) {
        const s = this.chart.getDatasetMeta(n).controller, o = s._getRotation(), r = s._getCircumference();
        t = Math.min(t, o), i = Math.max(i, o + r);
      }
    return {
      rotation: t,
      circumference: i - t
    };
  }
  update(t) {
    const i = this.chart, { chartArea: n } = i, s = this._cachedMeta, o = s.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(n.width, n.height) - r) / 2, 0), l = Math.min(Gf(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: m, offsetY: p } = yg(d, h, l), g = (n.width - r) / u, x = (n.height - r) / f, v = Math.max(Math.min(g, x) / 2, 0), y = _c(this.options.radius, v), S = Math.max(y * l, 0), E = (y - S) / this._getVisibleDatasetWeightTotal();
    this.offsetX = m * y, this.offsetY = p * y, s.total = this.calculateTotal(), this.outerRadius = y - E * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - E * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, i) {
    const n = this.options, s = this._cachedMeta, o = this._getCircumference();
    return i && n.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / dt);
  }
  updateElements(t, i, n, s) {
    const o = s === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, m = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: g } = this._getSharedOptions(i, s);
    let x = this._getRotation(), v;
    for (v = 0; v < i; ++v)
      x += this._circumference(v, o);
    for (v = i; v < i + n; ++v) {
      const y = this._circumference(v, o), S = t[v], E = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: x,
        endAngle: x + y,
        circumference: y,
        outerRadius: m,
        innerRadius: f
      };
      g && (E.options = p || this.resolveDataElementOptions(v, S.active ? "active" : s)), x += y, this.updateElement(S, v, E, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, i = t.data;
    let n = 0, s;
    for (s = 0; s < i.length; s++) {
      const o = t._parsed[s];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !i[s].hidden && (n += Math.abs(o));
    }
    return n;
  }
  calculateCircumference(t) {
    const i = this._cachedMeta.total;
    return i > 0 && !isNaN(t) ? dt * (Math.abs(t) / i) : 0;
  }
  getLabelAndValue(t) {
    const i = this._cachedMeta, n = this.chart, s = n.data.labels || [], o = Ds(i._parsed[t], n.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let i = 0;
    const n = this.chart;
    let s, o, r, a, l;
    if (!t) {
      for (s = 0, o = n.data.datasets.length; s < o; ++s)
        if (n.isDatasetVisible(s)) {
          r = n.getDatasetMeta(s), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (s = 0, o = t.length; s < o; ++s)
      l = a.resolveDataElementOptions(s), l.borderAlign !== "inner" && (i = Math.max(i, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return i;
  }
  getMaxOffset(t) {
    let i = 0;
    for (let n = 0, s = t.length; n < s; ++n) {
      const o = this.resolveDataElementOptions(n);
      i = Math.max(i, o.offset || 0, o.hoverOffset || 0);
    }
    return i;
  }
  _getRingWeightOffset(t) {
    let i = 0;
    for (let n = 0; n < t; ++n)
      this.chart.isDatasetVisible(n) && (i += this._getRingWeight(n));
    return i;
  }
  _getRingWeight(t) {
    return Math.max(Q(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
$(Wi, "id", "doughnut"), $(Wi, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), $(Wi, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing"
}), $(Wi, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const i = t.data;
          if (i.labels.length && i.datasets.length) {
            const { labels: { pointStyle: n, color: s } } = t.legend.options;
            return i.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: s,
                lineWidth: l.borderWidth,
                pointStyle: n,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, i, n) {
        n.chart.toggleDataVisibility(i.index), n.chart.update();
      }
    }
  }
});
class $n extends bi {
  getLabelAndValue(t) {
    const i = this._cachedMeta.vScale, n = this.getParsed(t);
    return {
      label: i.getLabels()[t],
      value: "" + i.getLabelForValue(n[i.axis])
    };
  }
  parseObjectData(t, i, n, s) {
    return Np.bind(this)(t, i, n, s);
  }
  update(t) {
    const i = this._cachedMeta, n = i.dataset, s = i.data || [], o = i.iScale.getLabels();
    if (n.points = s, t !== "resize") {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const a = {
        _loop: !0,
        _fullLoop: o.length === s.length,
        options: r
      };
      this.updateElement(n, void 0, a, t);
    }
    this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, i, n, s) {
    const o = this._cachedMeta.rScale, r = s === "reset";
    for (let a = i; a < i + n; a++) {
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : s), h = o.getPointPositionForValue(a, this.getParsed(a).r), d = r ? o.xCenter : h.x, u = r ? o.yCenter : h.y, f = {
        x: d,
        y: u,
        angle: h.angle,
        skip: isNaN(d) || isNaN(u),
        options: c
      };
      this.updateElement(l, a, f, s);
    }
  }
}
$($n, "id", "radar"), $($n, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), $($n, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
function We() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class sr {
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(sr.prototype, t);
  }
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return We();
  }
  parse() {
    return We();
  }
  format() {
    return We();
  }
  add() {
    return We();
  }
  diff() {
    return We();
  }
  startOf() {
    return We();
  }
  endOf() {
    return We();
  }
}
var Og = {
  _date: sr
};
function Eg(e, t, i, n) {
  const { controller: s, data: o, _sorted: r } = e, a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? tp : xo;
    if (n) {
      if (s._sharedOptions) {
        const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const d = l(o, t, i - h), u = l(o, t, i + h);
          return {
            lo: d.lo,
            hi: u.hi
          };
        }
      }
    } else
      return l(o, t, i);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function xn(e, t, i, n, s) {
  const o = e.getSortedVisibleDatasetMetas(), r = i[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: u } = Eg(o[a], t, r, s);
    for (let f = d; f <= u; ++f) {
      const m = h[f];
      m.skip || n(m, c, f);
    }
  }
}
function Sg(e) {
  const t = e.indexOf("x") !== -1, i = e.indexOf("y") !== -1;
  return function(n, s) {
    const o = t ? Math.abs(n.x - s.x) : 0, r = i ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Js(e, t, i, n, s) {
  const o = [];
  return !s && !e.isPointInArea(t) || xn(e, i, t, function(a, l, c) {
    !s && !un(a, e.chartArea, 0) || a.inRange(t.x, t.y, n) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function wg(e, t, i, n) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], n), { angle: d } = vc(r, {
      x: t.x,
      y: t.y
    });
    dn(d, c, h) && s.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return xn(e, i, t, o), s;
}
function Cg(e, t, i, n, s, o) {
  let r = [];
  const a = Sg(i);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, u) {
    const f = h.inRange(t.x, t.y, s);
    if (n && !f)
      return;
    const m = h.getCenterPoint(s);
    if (!(!!o || e.isPointInArea(m)) && !f)
      return;
    const g = a(t, m);
    g < l ? (r = [
      {
        element: h,
        datasetIndex: d,
        index: u
      }
    ], l = g) : g === l && r.push({
      element: h,
      datasetIndex: d,
      index: u
    });
  }
  return xn(e, i, t, c), r;
}
function Qs(e, t, i, n, s, o) {
  return !o && !e.isPointInArea(t) ? [] : i === "r" && !n ? wg(e, t, i, s) : Cg(e, t, i, n, s, o);
}
function ba(e, t, i, n, s) {
  const o = [], r = i === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return xn(e, i, t, (l, c, h) => {
    l[r](t[i], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, s));
  }), n && !a ? [] : o;
}
var Tg = {
  evaluateInteractionItems: xn,
  modes: {
    index(e, t, i, n) {
      const s = Ke(t, e), o = i.axis || "x", r = i.includeInvisible || !1, a = i.intersect ? Js(e, s, o, n, r) : Qs(e, s, o, !1, n, r), l = [];
      return a.length ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(e, t, i, n) {
      const s = Ke(t, e), o = i.axis || "xy", r = i.includeInvisible || !1;
      let a = i.intersect ? Js(e, s, o, n, r) : Qs(e, s, o, !1, n, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = e.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return a;
    },
    point(e, t, i, n) {
      const s = Ke(t, e), o = i.axis || "xy", r = i.includeInvisible || !1;
      return Js(e, s, o, n, r);
    },
    nearest(e, t, i, n) {
      const s = Ke(t, e), o = i.axis || "xy", r = i.includeInvisible || !1;
      return Qs(e, s, o, i.intersect, n, r);
    },
    x(e, t, i, n) {
      const s = Ke(t, e);
      return ba(e, s, "x", i.intersect, n);
    },
    y(e, t, i, n) {
      const s = Ke(t, e);
      return ba(e, s, "y", i.intersect, n);
    }
  }
};
const Bc = [
  "left",
  "top",
  "right",
  "bottom"
];
function Hi(e, t) {
  return e.filter((i) => i.pos === t);
}
function xa(e, t) {
  return e.filter((i) => Bc.indexOf(i.pos) === -1 && i.box.axis === t);
}
function zi(e, t) {
  return e.sort((i, n) => {
    const s = t ? n : i, o = t ? i : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Ag(e) {
  const t = [];
  let i, n, s, o, r, a;
  for (i = 0, n = (e || []).length; i < n; ++i)
    s = e[i], { position: o, options: { stack: r, stackWeight: a = 1 } } = s, t.push({
      index: i,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function Pg(e) {
  const t = {};
  for (const i of e) {
    const { stack: n, pos: s, stackWeight: o } = i;
    if (!n || !Bc.includes(s))
      continue;
    const r = t[n] || (t[n] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function Rg(e, t) {
  const i = Pg(e), { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box, c = i[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * n : l && t.availableWidth, a.height = s) : (a.width = n, a.height = h ? h * s : l && t.availableHeight);
  }
  return i;
}
function Ig(e) {
  const t = Ag(e), i = zi(t.filter((c) => c.box.fullSize), !0), n = zi(Hi(t, "left"), !0), s = zi(Hi(t, "right")), o = zi(Hi(t, "top"), !0), r = zi(Hi(t, "bottom")), a = xa(t, "x"), l = xa(t, "y");
  return {
    fullSize: i,
    leftAndTop: n.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: Hi(t, "chartArea"),
    vertical: n.concat(s).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function va(e, t, i, n) {
  return Math.max(e[i], t[i]) + Math.max(e[n], t[n]);
}
function Gc(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function Mg(e, t, i, n) {
  const { pos: s, box: o } = i, r = e.maxPadding;
  if (!it(s)) {
    i.size && (e[s] -= i.size);
    const d = n[i.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, i.horizontal ? o.height : o.width), i.size = d.size / d.count, e[s] += i.size;
  }
  o.getPadding && Gc(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - va(r, e, "left", "right")), l = Math.max(0, t.outerHeight - va(r, e, "top", "bottom")), c = a !== e.w, h = l !== e.h;
  return e.w = a, e.h = l, i.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function kg(e) {
  const t = e.maxPadding;
  function i(n) {
    const s = Math.max(t[n] - e[n], 0);
    return e[n] += s, s;
  }
  e.y += i("top"), e.x += i("left"), i("right"), i("bottom");
}
function Dg(e, t) {
  const i = t.maxPadding;
  function n(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((r) => {
      o[r] = Math.max(t[r], i[r]);
    }), o;
  }
  return n(e ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function ji(e, t, i, n) {
  const s = [];
  let o, r, a, l, c, h;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    a = e[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Dg(a.horizontal, t));
    const { same: d, other: u } = Mg(t, i, a, n);
    c |= d && s.length, h = h || u, l.fullSize || s.push(a);
  }
  return c && ji(s, t, i, n) || h;
}
function Ln(e, t, i, n, s) {
  e.top = i, e.left = t, e.right = t + n, e.bottom = i + s, e.width = n, e.height = s;
}
function ya(e, t, i, n) {
  const s = i.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box, c = n[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, u = c.size || l.height;
      ne(c.start) && (r = c.start), l.fullSize ? Ln(l, s.left, r, i.outerWidth - s.right - s.left, u) : Ln(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, u = c.size || l.width;
      ne(c.start) && (o = c.start), l.fullSize ? Ln(l, o, s.top, u, i.outerHeight - s.bottom - s.top) : Ln(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Pe = {
  addBox(e, t) {
    e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(i) {
            t.draw(i);
          }
        }
      ];
    }, e.boxes.push(t);
  },
  removeBox(e, t) {
    const i = e.boxes ? e.boxes.indexOf(t) : -1;
    i !== -1 && e.boxes.splice(i, 1);
  },
  configure(e, t, i) {
    t.fullSize = i.fullSize, t.position = i.position, t.weight = i.weight;
  },
  update(e, t, i, n) {
    if (!e)
      return;
    const s = Lt(e.options.layout.padding), o = Math.max(t - s.width, 0), r = Math.max(i - s.height, 0), a = Ig(e.boxes), l = a.vertical, c = a.horizontal;
    ot(e.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = l.reduce((p, g) => g.box.options && g.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: i,
      padding: s,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), u = Object.assign({}, s);
    Gc(u, Lt(n));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: s.left,
      y: s.top
    }, s), m = Rg(l.concat(c), d);
    ji(a.fullSize, f, d, m), ji(l, f, d, m), ji(c, f, d, m) && ji(l, f, d, m), kg(f), ya(a.leftAndTop, f, d, m), f.x += f.w, f.y += f.h, ya(a.rightAndBottom, f, d, m), e.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, ot(a.chartArea, (p) => {
      const g = p.box;
      Object.assign(g, e.chartArea), g.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Wc {
  acquireContext(t, i) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, i, n) {
  }
  removeEventListener(t, i, n) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, i, n, s) {
    return i = Math.max(0, i || t.width), n = n || t.height, {
      width: i,
      height: Math.max(0, s ? Math.floor(i / s) : n)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Lg extends Wc {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Yn = "$chartjs", Ng = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Oa = (e) => e === null || e === "";
function Hg(e, t) {
  const i = e.style, n = e.getAttribute("height"), s = e.getAttribute("width");
  if (e[Yn] = {
    initial: {
      height: n,
      width: s,
      style: {
        display: i.display,
        height: i.height,
        width: i.width
      }
    }
  }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", Oa(s)) {
    const o = aa(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (Oa(n))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = aa(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const jc = qp ? {
  passive: !0
} : !1;
function zg(e, t, i) {
  e.addEventListener(t, i, jc);
}
function Fg(e, t, i) {
  e.canvas.removeEventListener(t, i, jc);
}
function Vg(e, t) {
  const i = Ng[e.type] || e.type, { x: n, y: s } = Ke(e, t);
  return {
    type: i,
    chart: t,
    native: e,
    x: n !== void 0 ? n : null,
    y: s !== void 0 ? s : null
  };
}
function ds(e, t) {
  for (const i of e)
    if (i === t || i.contains(t))
      return !0;
}
function Bg(e, t, i) {
  const n = e.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || ds(a.addedNodes, n), r = r && !ds(a.removedNodes, n);
    r && i();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function Gg(e, t, i) {
  const n = e.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || ds(a.removedNodes, n), r = r && !ds(a.addedNodes, n);
    r && i();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const fn = /* @__PURE__ */ new Map();
let Ea = 0;
function Uc() {
  const e = window.devicePixelRatio;
  e !== Ea && (Ea = e, fn.forEach((t, i) => {
    i.currentDevicePixelRatio !== e && t();
  }));
}
function Wg(e, t) {
  fn.size || window.addEventListener("resize", Uc), fn.set(e, t);
}
function jg(e) {
  fn.delete(e), fn.size || window.removeEventListener("resize", Uc);
}
function Ug(e, t, i) {
  const n = e.canvas, s = n && nr(n);
  if (!s)
    return;
  const o = Ec((a, l) => {
    const c = s.clientWidth;
    i(a, l), c < s.clientWidth && i();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(s), Wg(e, o), r;
}
function to(e, t, i) {
  i && i.disconnect(), t === "resize" && jg(e);
}
function Kg(e, t, i) {
  const n = e.canvas, s = Ec((o) => {
    e.ctx !== null && i(Vg(o, e));
  }, e);
  return zg(n, t, s), s;
}
class $g extends Wc {
  acquireContext(t, i) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (Hg(t, i), n) : null;
  }
  releaseContext(t) {
    const i = t.canvas;
    if (!i[Yn])
      return !1;
    const n = i[Yn].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = n[o];
      mt(r) ? i.removeAttribute(o) : i.setAttribute(o, r);
    });
    const s = n.style || {};
    return Object.keys(s).forEach((o) => {
      i.style[o] = s[o];
    }), i.width = i.width, delete i[Yn], !0;
  }
  addEventListener(t, i, n) {
    this.removeEventListener(t, i);
    const s = t.$proxies || (t.$proxies = {}), r = {
      attach: Bg,
      detach: Gg,
      resize: Ug
    }[i] || Kg;
    s[i] = r(t, i, n);
  }
  removeEventListener(t, i) {
    const n = t.$proxies || (t.$proxies = {}), s = n[i];
    if (!s)
      return;
    ({
      attach: to,
      detach: to,
      resize: to
    }[i] || Fg)(t, i, s), n[i] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, i, n, s) {
    return Xp(t, i, n, s);
  }
  isAttached(t) {
    const i = nr(t);
    return !!(i && i.isConnected);
  }
}
function Yg(e) {
  return !kc() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? Lg : $g;
}
var Bn;
let ri = (Bn = class {
  constructor() {
    $(this, "active", !1);
  }
  tooltipPosition(t) {
    const { x: i, y: n } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: i,
      y: n
    };
  }
  hasValue() {
    return as(this.x) && as(this.y);
  }
  getProps(t, i) {
    const n = this.$animations;
    if (!i || !n)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
    }), s;
  }
}, $(Bn, "defaults", {}), $(Bn, "defaultRoutes"), Bn);
function Xg(e, t) {
  const i = e.options.ticks, n = qg(e), s = Math.min(i.maxTicksLimit || n, n), o = i.major.enabled ? Jg(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > s)
    return Qg(t, c, o, r / s), c;
  const h = Zg(o, t, s);
  if (r > 0) {
    let d, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Nn(t, c, h, mt(f) ? 0 : a - f, a), d = 0, u = r - 1; d < u; d++)
      Nn(t, c, h, o[d], o[d + 1]);
    return Nn(t, c, h, l, mt(f) ? t.length : l + f), c;
  }
  return Nn(t, c, h), c;
}
function qg(e) {
  const t = e.options.offset, i = e._tickSize(), n = e._length / i + (t ? 0 : 1), s = e._maxLength / i;
  return Math.floor(Math.min(n, s));
}
function Zg(e, t, i) {
  const n = tm(e), s = t.length / i;
  if (!n)
    return Math.max(s, 1);
  const o = qf(n);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function Jg(e) {
  const t = [];
  let i, n;
  for (i = 0, n = e.length; i < n; i++)
    e[i].major && t.push(i);
  return t;
}
function Qg(e, t, i, n) {
  let s = 0, o = i[0], r;
  for (n = Math.ceil(n), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), s++, o = i[s * n]);
}
function Nn(e, t, i, n, s) {
  const o = Q(n, 0), r = Math.min(Q(s, e.length), e.length);
  let a = 0, l, c, h;
  for (i = Math.ceil(i), s && (l = s - n, i = l / Math.floor(l / i)), h = o; h < 0; )
    a++, h = Math.round(o + a * i);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(e[c]), a++, h = Math.round(o + a * i));
}
function tm(e) {
  const t = e.length;
  let i, n;
  if (t < 2)
    return !1;
  for (n = e[0], i = 1; i < t; ++i)
    if (e[i] - e[i - 1] !== n)
      return !1;
  return n;
}
const em = (e) => e === "left" ? "right" : e === "right" ? "left" : e, Sa = (e, t, i) => t === "top" || t === "left" ? e[t] + i : e[t] - i;
function wa(e, t) {
  const i = [], n = e.length / t, s = e.length;
  let o = 0;
  for (; o < s; o += n)
    i.push(e[Math.floor(o)]);
  return i;
}
function im(e, t, i) {
  const n = e.ticks.length, s = Math.min(t, n - 1), o = e._startPixel, r = e._endPixel, a = 1e-6;
  let l = e.getPixelForTick(s), c;
  if (!(i && (n === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function nm(e, t) {
  ot(e, (i) => {
    const n = i.gc, s = n.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete i.data[n[o]];
      n.splice(0, s);
    }
  });
}
function Fi(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Ca(e, t) {
  if (!e.display)
    return 0;
  const i = Pt(e.font, t), n = Lt(e.padding);
  return (_t(e.text) ? e.text.length : 1) * i.lineHeight + n.height;
}
function sm(e, t) {
  return Ne(e, {
    scale: t,
    type: "scale"
  });
}
function om(e, t, i) {
  return Ne(e, {
    tick: i,
    index: t,
    type: "tick"
  });
}
function rm(e, t, i) {
  let n = Sc(e);
  return (i && t !== "right" || !i && t === "right") && (n = em(n)), n;
}
function am(e, t, i, n) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = e, { chartArea: c, scales: h } = l;
  let d = 0, u, f, m;
  const p = r - s, g = a - o;
  if (e.isHorizontal()) {
    if (f = Vt(n, o, a), it(i)) {
      const x = Object.keys(i)[0], v = i[x];
      m = h[x].getPixelForValue(v) + p - t;
    } else
      i === "center" ? m = (c.bottom + c.top) / 2 + p - t : m = Sa(e, i, t);
    u = a - o;
  } else {
    if (it(i)) {
      const x = Object.keys(i)[0], v = i[x];
      f = h[x].getPixelForValue(v) - g + t;
    } else
      i === "center" ? f = (c.left + c.right) / 2 - g + t : f = Sa(e, i, t);
    m = Vt(n, r, s), d = i === "left" ? -xt : xt;
  }
  return {
    titleX: f,
    titleY: m,
    maxWidth: u,
    rotation: d
  };
}
class ki extends ri {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, i) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: i, _suggestedMin: n, _suggestedMax: s } = this;
    return t = Bt(t, Number.POSITIVE_INFINITY), i = Bt(i, Number.NEGATIVE_INFINITY), n = Bt(n, Number.POSITIVE_INFINITY), s = Bt(s, Number.NEGATIVE_INFINITY), {
      min: Bt(t, n),
      max: Bt(i, s),
      minDefined: bt(t),
      maxDefined: bt(i)
    };
  }
  getMinMax(t) {
    let { min: i, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(), r;
    if (s && o)
      return {
        min: i,
        max: n
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), s || (i = Math.min(i, r.min)), o || (n = Math.max(n, r.max));
    return i = o && i > n ? n : i, n = s && i > n ? i : n, {
      min: Bt(i, Bt(n, i)),
      max: Bt(n, Bt(i, n))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    lt(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, i, n) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = i, this._margins = n = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Cp(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? wa(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Xg(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, i, n;
    this.isHorizontal() ? (i = this.left, n = this.right) : (i = this.top, n = this.bottom, t = !t), this._startPixel = i, this._endPixel = n, this._reversePixels = t, this._length = n - i, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    lt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    lt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    lt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), lt(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    lt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const i = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      o = t[n], o.label = lt(i.callback, [
        o.value,
        n,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    lt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    lt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, i = t.ticks, n = this.ticks.length, s = i.minRotation || 0, o = i.maxRotation;
    let r = s, a, l, c;
    if (!this._isVisible() || !i.display || s >= o || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = Xt(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / n : f / (n - 1), d + 6 > a && (a = f / (n - (t.offset ? 0.5 : 1)), l = this.maxHeight - Fi(t.grid) - i.padding - Ca(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = Zo(Math.min(Math.asin(Xt((h.highest.height + 6) / a, -1, 1)), Math.asin(Xt(l / c, -1, 1)) - Math.asin(Xt(u / c, -1, 1)))), r = Math.max(s, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    lt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    lt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: i, options: { ticks: n, title: s, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Ca(s, i.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Fi(o) + l) : (t.height = this.maxHeight, t.width = Fi(o) + l), n.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = n.padding * 2, m = de(this.labelRotation), p = Math.cos(m), g = Math.sin(m);
        if (a) {
          const x = n.mirror ? 0 : g * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + x + f);
        } else {
          const x = n.mirror ? 0 : p * d.width + g * u.height;
          t.width = Math.min(this.maxWidth, t.width + x + f);
        }
        this._calculatePadding(c, h, g, p);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = i.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = i.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, i, n, s) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? c ? (u = s * t.width, f = n * i.height) : (u = n * t.height, f = s * i.width) : o === "start" ? f = i.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = i.width / 2), this.paddingLeft = Math.max((u - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = i.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = i.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    lt(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: i } = this.options;
    return i === "top" || i === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let i, n;
    for (i = 0, n = t.length; i < n; i++)
      mt(t[i].label) && (t.splice(i, 1), n--, i--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const i = this.options.ticks.sampleSize;
      let n = this.ticks;
      i < n.length && (n = wa(n, i)), this._labelSizes = t = this._computeLabelSizes(n, n.length);
    }
    return t;
  }
  _computeLabelSizes(t, i) {
    const { ctx: n, _longestTextCache: s } = this, o = [], r = [];
    let a = 0, l = 0, c, h, d, u, f, m, p, g, x, v, y;
    for (c = 0; c < i; ++c) {
      if (u = t[c].label, f = this._resolveTickFontOptions(c), n.font = m = f.string, p = s[m] = s[m] || {
        data: {},
        gc: []
      }, g = f.lineHeight, x = v = 0, !mt(u) && !_t(u))
        x = ls(n, p.data, p.gc, x, u), v = g;
      else if (_t(u))
        for (h = 0, d = u.length; h < d; ++h)
          y = u[h], !mt(y) && !_t(y) && (x = ls(n, p.data, p.gc, x, y), v += g);
      o.push(x), r.push(v), a = Math.max(x, a), l = Math.max(v, l);
    }
    nm(s, i);
    const S = o.indexOf(a), E = r.indexOf(l), k = (I) => ({
      width: o[I] || 0,
      height: r[I] || 0
    });
    return {
      first: k(0),
      last: k(i - 1),
      widest: k(S),
      highest: k(E),
      widths: o,
      heights: r
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, i) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const i = this.ticks;
    return t < 0 || t > i.length - 1 ? null : this.getPixelForValue(i[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const i = this._startPixel + t * this._length;
    return Qf(this._alignToPixels ? Ge(this.chart, i, 0) : i);
  }
  getDecimalForPixel(t) {
    const i = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - i : i;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: i } = this;
    return t < 0 && i < 0 ? i : t > 0 && i > 0 ? t : 0;
  }
  getContext(t) {
    const i = this.ticks || [];
    if (t >= 0 && t < i.length) {
      const n = i[t];
      return n.$context || (n.$context = om(this.getContext(), t, n));
    }
    return this.$context || (this.$context = sm(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, i = de(this.labelRotation), n = Math.abs(Math.cos(i)), s = Math.abs(Math.sin(i)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * n > a * s ? a / n : l / s : l * s < a * n ? l / n : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const i = this.axis, n = this.chart, s = this.options, { grid: o, position: r, border: a } = s, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = Fi(o), f = [], m = a.setContext(this.getContext()), p = m.display ? m.width : 0, g = p / 2, x = function(q) {
      return Ge(n, q, p);
    };
    let v, y, S, E, k, I, A, H, V, B, Z, ut;
    if (r === "top")
      v = x(this.bottom), I = this.bottom - u, H = v - g, B = x(t.top) + g, ut = t.bottom;
    else if (r === "bottom")
      v = x(this.top), B = t.top, ut = x(t.bottom) - g, I = v + g, H = this.top + u;
    else if (r === "left")
      v = x(this.right), k = this.right - u, A = v - g, V = x(t.left) + g, Z = t.right;
    else if (r === "right")
      v = x(this.left), V = t.left, Z = x(t.right) - g, k = v + g, A = this.left + u;
    else if (i === "x") {
      if (r === "center")
        v = x((t.top + t.bottom) / 2 + 0.5);
      else if (it(r)) {
        const q = Object.keys(r)[0], j = r[q];
        v = x(this.chart.scales[q].getPixelForValue(j));
      }
      B = t.top, ut = t.bottom, I = v + g, H = I + u;
    } else if (i === "y") {
      if (r === "center")
        v = x((t.left + t.right) / 2);
      else if (it(r)) {
        const q = Object.keys(r)[0], j = r[q];
        v = x(this.chart.scales[q].getPixelForValue(j));
      }
      k = v - g, A = k - u, V = t.left, Z = t.right;
    }
    const gt = Q(s.ticks.maxTicksLimit, d), W = Math.max(1, Math.ceil(d / gt));
    for (y = 0; y < d; y += W) {
      const q = this.getContext(y), j = o.setContext(q), J = a.setContext(q), ft = j.lineWidth, Zt = j.color, $t = J.dash || [], Tt = J.dashOffset, Oe = j.tickWidth, He = j.tickColor, ze = j.tickBorderDash || [], Mt = j.tickBorderDashOffset;
      S = im(this, y, l), S !== void 0 && (E = Ge(n, S, ft), c ? k = A = V = Z = E : I = H = B = ut = E, f.push({
        tx1: k,
        ty1: I,
        tx2: A,
        ty2: H,
        x1: V,
        y1: B,
        x2: Z,
        y2: ut,
        width: ft,
        color: Zt,
        borderDash: $t,
        borderDashOffset: Tt,
        tickWidth: Oe,
        tickColor: He,
        tickBorderDash: ze,
        tickBorderDashOffset: Mt
      }));
    }
    return this._ticksLength = d, this._borderValue = v, f;
  }
  _computeLabelItems(t) {
    const i = this.axis, n = this.options, { position: s, ticks: o } = n, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = Fi(n.grid), f = u + h, m = d ? -h : f, p = -de(this.labelRotation), g = [];
    let x, v, y, S, E, k, I, A, H, V, B, Z, ut = "middle";
    if (s === "top")
      k = this.bottom - m, I = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      k = this.top + m, I = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const W = this._getYAxisLabelAlignment(u);
      I = W.textAlign, E = W.x;
    } else if (s === "right") {
      const W = this._getYAxisLabelAlignment(u);
      I = W.textAlign, E = W.x;
    } else if (i === "x") {
      if (s === "center")
        k = (t.top + t.bottom) / 2 + f;
      else if (it(s)) {
        const W = Object.keys(s)[0], q = s[W];
        k = this.chart.scales[W].getPixelForValue(q) + f;
      }
      I = this._getXAxisLabelAlignment();
    } else if (i === "y") {
      if (s === "center")
        E = (t.left + t.right) / 2 - f;
      else if (it(s)) {
        const W = Object.keys(s)[0], q = s[W];
        E = this.chart.scales[W].getPixelForValue(q);
      }
      I = this._getYAxisLabelAlignment(u).textAlign;
    }
    i === "y" && (l === "start" ? ut = "top" : l === "end" && (ut = "bottom"));
    const gt = this._getLabelSizes();
    for (x = 0, v = a.length; x < v; ++x) {
      y = a[x], S = y.label;
      const W = o.setContext(this.getContext(x));
      A = this.getPixelForTick(x) + o.labelOffset, H = this._resolveTickFontOptions(x), V = H.lineHeight, B = _t(S) ? S.length : 1;
      const q = B / 2, j = W.color, J = W.textStrokeColor, ft = W.textStrokeWidth;
      let Zt = I;
      r ? (E = A, I === "inner" && (x === v - 1 ? Zt = this.options.reverse ? "left" : "right" : x === 0 ? Zt = this.options.reverse ? "right" : "left" : Zt = "center"), s === "top" ? c === "near" || p !== 0 ? Z = -B * V + V / 2 : c === "center" ? Z = -gt.highest.height / 2 - q * V + V : Z = -gt.highest.height + V / 2 : c === "near" || p !== 0 ? Z = V / 2 : c === "center" ? Z = gt.highest.height / 2 - q * V : Z = gt.highest.height - B * V, d && (Z *= -1), p !== 0 && !W.showLabelBackdrop && (E += V / 2 * Math.sin(p))) : (k = A, Z = (1 - B) * V / 2);
      let $t;
      if (W.showLabelBackdrop) {
        const Tt = Lt(W.backdropPadding), Oe = gt.heights[x], He = gt.widths[x];
        let ze = Z - Tt.top, Mt = 0 - Tt.left;
        switch (ut) {
          case "middle":
            ze -= Oe / 2;
            break;
          case "bottom":
            ze -= Oe;
            break;
        }
        switch (I) {
          case "center":
            Mt -= He / 2;
            break;
          case "right":
            Mt -= He;
            break;
        }
        $t = {
          left: Mt,
          top: ze,
          width: He + Tt.width,
          height: Oe + Tt.height,
          color: W.backdropColor
        };
      }
      g.push({
        label: S,
        font: H,
        textOffset: Z,
        options: {
          rotation: p,
          color: j,
          strokeColor: J,
          strokeWidth: ft,
          textAlign: Zt,
          textBaseline: ut,
          translation: [
            E,
            k
          ],
          backdrop: $t
        }
      });
    }
    return g;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: i } = this.options;
    if (-de(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return i.align === "start" ? s = "left" : i.align === "end" ? s = "right" : i.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: i, ticks: { crossAlign: n, mirror: s, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return i === "left" ? s ? (h = this.right + o, n === "near" ? c = "left" : n === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, n === "near" ? c = "right" : n === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : i === "right" ? s ? (h = this.left + o, n === "near" ? c = "right" : n === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, n === "near" ? c = "left" : n === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, i = this.options.position;
    if (i === "left" || i === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (i === "top" || i === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: i }, left: n, top: s, width: o, height: r } = this;
    i && (t.save(), t.fillStyle = i, t.fillRect(n, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const i = this.options.grid;
    if (!this._isVisible() || !i.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? i.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const i = this.options.grid, n = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width || !h.color || (n.save(), n.lineWidth = h.width, n.strokeStyle = h.color, n.setLineDash(h.borderDash || []), n.lineDashOffset = h.borderDashOffset, n.beginPath(), n.moveTo(l.x, l.y), n.lineTo(c.x, c.y), n.stroke(), n.restore());
    };
    if (i.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        i.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), i.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: i, options: { border: n, grid: s } } = this, o = n.setContext(this.getContext()), r = n.display ? o.width : 0;
    if (!r)
      return;
    const a = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, d, u;
    this.isHorizontal() ? (c = Ge(t, this.left, r) - r / 2, h = Ge(t, this.right, a) + a / 2, d = u = l) : (d = Ge(t, this.top, r) - r / 2, u = Ge(t, this.bottom, a) + a / 2, c = h = l), i.save(), i.lineWidth = o.width, i.strokeStyle = o.color, i.beginPath(), i.moveTo(c, d), i.lineTo(h, u), i.stroke(), i.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const n = this.ctx, s = this._computeLabelArea();
    s && Ns(n, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      Ci(n, c, 0, h, l, a);
    }
    s && Hs(n);
  }
  drawTitle() {
    const { ctx: t, options: { position: i, title: n, reverse: s } } = this;
    if (!n.display)
      return;
    const o = Pt(n.font), r = Lt(n.padding), a = n.align;
    let l = o.lineHeight / 2;
    i === "bottom" || i === "center" || it(i) ? (l += r.bottom, _t(n.text) && (l += o.lineHeight * (n.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = am(this, l, i, a);
    Ci(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: d,
      rotation: u,
      textAlign: rm(a, i, s),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, i = t.ticks && t.ticks.z || 0, n = Q(t.grid && t.grid.z, -1), s = Q(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== ki.prototype.draw ? [
      {
        z: i,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: n,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: s,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: i,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const i = this.chart.getSortedVisibleDatasetMetas(), n = this.axis + "AxisID", s = [];
    let o, r;
    for (o = 0, r = i.length; o < r; ++o) {
      const a = i[o];
      a[n] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const i = this.options.ticks.setContext(this.getContext(t));
    return Pt(i.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Hn {
  constructor(t, i, n) {
    this.type = t, this.scope = i, this.override = n, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const i = Object.getPrototypeOf(t);
    let n;
    hm(i) && (n = this.register(i));
    const s = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, lm(t, r, n), this.override && Ot.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const i = this.items, n = t.id, s = this.scope;
    n in i && delete i[n], s && n in Ot[s] && (delete Ot[s][n], this.override && delete si[n]);
  }
}
function lm(e, t, i) {
  const n = hn(/* @__PURE__ */ Object.create(null), [
    i ? Ot.get(i) : {},
    Ot.get(t),
    e.defaults
  ]);
  Ot.set(t, n), e.defaultRoutes && cm(t, e.defaultRoutes), e.descriptors && Ot.describe(t, e.descriptors);
}
function cm(e, t) {
  Object.keys(t).forEach((i) => {
    const n = i.split("."), s = n.pop(), o = [
      e
    ].concat(n).join("."), r = t[i].split("."), a = r.pop(), l = r.join(".");
    Ot.route(o, s, l, a);
  });
}
function hm(e) {
  return "id" in e && "defaults" in e;
}
class dm {
  constructor() {
    this.controllers = new Hn(bi, "datasets", !0), this.elements = new Hn(ri, "elements"), this.plugins = new Hn(Object, "plugins"), this.scales = new Hn(ki, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, i, n) {
    [
      ...i
    ].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : ot(s, (r) => {
        const a = n || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, i, n) {
    const s = qo(t);
    lt(n["before" + s], [], n), i[t](n), lt(n["after" + s], [], n);
  }
  _getRegistryForType(t) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const n = this._typedRegistries[i];
      if (n.isForType(t))
        return n;
    }
    return this.plugins;
  }
  _get(t, i, n) {
    const s = i.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return s;
  }
}
var ae = /* @__PURE__ */ new dm();
class um {
  constructor() {
    this._init = [];
  }
  notify(t, i, n, s) {
    i === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), r = this._notify(o, t, i, n);
    return i === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, i, n, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin, a = r[n], l = [
        i,
        s,
        o.options
      ];
      if (lt(a, l, r) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    mt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const i = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), i;
  }
  _createDescriptors(t, i) {
    const n = t && t.config, s = Q(n.options && n.options.plugins, {}), o = fm(n);
    return s === !1 && !i ? [] : gm(t, o, s, i);
  }
  _notifyStateChanges(t) {
    const i = this._oldCache || [], n = this._cache, s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(i, n), t, "stop"), this._notify(s(n, i), t, "start");
  }
}
function fm(e) {
  const t = {}, i = [], n = Object.keys(ae.plugins.items);
  for (let o = 0; o < n.length; o++)
    i.push(ae.getPlugin(n[o]));
  const s = e.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    i.indexOf(r) === -1 && (i.push(r), t[r.id] = !0);
  }
  return {
    plugins: i,
    localIds: t
  };
}
function pm(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function gm(e, { plugins: t, localIds: i }, n, s) {
  const o = [], r = e.getContext();
  for (const a of t) {
    const l = a.id, c = pm(n[l], s);
    c !== null && o.push({
      plugin: a,
      options: mm(e.config, {
        plugin: a,
        local: i[l]
      }, c, r)
    });
  }
  return o;
}
function mm(e, { plugin: t, local: i }, n, s) {
  const o = e.pluginScopeKeys(t), r = e.getOptionScopes(n, o);
  return i && t.defaults && r.push(t.defaults), e.createResolver(r, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Oo(e, t) {
  const i = Ot.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || i.indexAxis || "x";
}
function _m(e, t) {
  let i = e;
  return e === "_index_" ? i = t : e === "_value_" && (i = t === "x" ? "y" : "x"), i;
}
function bm(e, t) {
  return e === t ? "_index_" : "_value_";
}
function xm(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function us(e, t) {
  if (e === "x" || e === "y" || e === "r" || (e = t.axis || xm(t.position) || e.length > 1 && us(e[0].toLowerCase(), t), e))
    return e;
  throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function vm(e, t) {
  const i = si[e.type] || {
    scales: {}
  }, n = t.scales || {}, s = Oo(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach((r) => {
    const a = n[r];
    if (!it(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = us(r, a), c = bm(l, s), h = i.scales || {};
    o[r] = Zi(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), e.data.datasets.forEach((r) => {
    const a = r.type || e.type, l = r.indexAxis || Oo(a, t), h = (si[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const u = _m(d, l), f = r[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Zi(o[f], [
        {
          axis: u
        },
        n[f],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Zi(a, [
      Ot.scales[a.type],
      Ot.scale
    ]);
  }), o;
}
function Kc(e) {
  const t = e.options || (e.options = {});
  t.plugins = Q(t.plugins, {}), t.scales = vm(e, t);
}
function $c(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function ym(e) {
  return e = e || {}, e.data = $c(e.data), Kc(e), e;
}
const Ta = /* @__PURE__ */ new Map(), Yc = /* @__PURE__ */ new Set();
function zn(e, t) {
  let i = Ta.get(e);
  return i || (i = t(), Ta.set(e, i), Yc.add(i)), i;
}
const Vi = (e, t, i) => {
  const n = Si(t, i);
  n !== void 0 && e.add(n);
};
class Om {
  constructor(t) {
    this._config = ym(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = $c(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Kc(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return zn(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, i) {
    return zn(`${t}.transition.${i}`, () => [
      [
        `datasets.${t}.transitions.${i}`,
        `transitions.${i}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, i) {
    return zn(`${t}-${i}`, () => [
      [
        `datasets.${t}.elements.${i}`,
        `datasets.${t}`,
        `elements.${i}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const i = t.id, n = this.type;
    return zn(`${n}-plugin-${i}`, () => [
      [
        `plugins.${i}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, i) {
    const n = this._scopeCache;
    let s = n.get(t);
    return (!s || i) && (s = /* @__PURE__ */ new Map(), n.set(t, s)), s;
  }
  getOptionScopes(t, i, n) {
    const { options: s, type: o } = this, r = this._cachedScopes(t, n), a = r.get(i);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    i.forEach((h) => {
      t && (l.add(t), h.forEach((d) => Vi(l, t, d))), h.forEach((d) => Vi(l, s, d)), h.forEach((d) => Vi(l, si[o] || {}, d)), h.forEach((d) => Vi(l, Ot, d)), h.forEach((d) => Vi(l, vo, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Yc.has(i) && r.set(i, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: i } = this;
    return [
      t,
      si[i] || {},
      Ot.datasets[i] || {},
      {
        type: i
      },
      Ot,
      vo
    ];
  }
  resolveNamedOptions(t, i, n, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Aa(this._resolverCache, t, s);
    let l = r;
    if (Sm(r, i)) {
      o.$shared = !1, n = Le(n) ? n() : n;
      const c = this.createResolver(t, n, a);
      l = Ti(r, n, c);
    }
    for (const c of i)
      o[c] = l[c];
    return o;
  }
  createResolver(t, i, n = [
    ""
  ], s) {
    const { resolver: o } = Aa(this._resolverCache, t, n);
    return it(i) ? Ti(o, i, void 0, s) : o;
  }
}
function Aa(e, t, i) {
  let n = e.get(t);
  n || (n = /* @__PURE__ */ new Map(), e.set(t, n));
  const s = i.join();
  let o = n.get(s);
  return o || (o = {
    resolver: tr(t, i),
    subPrefixes: i.filter((a) => !a.toLowerCase().includes("hover"))
  }, n.set(s, o)), o;
}
const Em = (e) => it(e) && Object.getOwnPropertyNames(e).reduce((t, i) => t || Le(e[i]), !1);
function Sm(e, t) {
  const { isScriptable: i, isIndexable: n } = Ac(e);
  for (const s of t) {
    const o = i(s), r = n(s), a = (r || o) && e[s];
    if (o && (Le(a) || Em(a)) || r && _t(a))
      return !0;
  }
  return !1;
}
var wm = "4.2.0";
const Cm = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Pa(e, t) {
  return e === "top" || e === "bottom" || Cm.indexOf(e) === -1 && t === "x";
}
function Ra(e, t) {
  return function(i, n) {
    return i[e] === n[e] ? i[t] - n[t] : i[e] - n[e];
  };
}
function Ia(e) {
  const t = e.chart, i = t.options.animation;
  t.notifyPlugins("afterRender"), lt(i && i.onComplete, [
    e
  ], t);
}
function Tm(e) {
  const t = e.chart, i = t.options.animation;
  lt(i && i.onProgress, [
    e
  ], t);
}
function Xc(e) {
  return kc() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const Xn = {}, Ma = (e) => {
  const t = Xc(e);
  return Object.values(Xn).filter((i) => i.canvas === t).pop();
};
function Am(e, t, i) {
  const n = Object.keys(e);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const r = e[s];
      delete e[s], (i > 0 || o > t) && (e[o + i] = r);
    }
  }
}
function Pm(e, t, i, n) {
  return !i || e.type === "mouseout" ? null : n ? t : e;
}
function Rm(e) {
  const { xScale: t, yScale: i } = e;
  if (t && i)
    return {
      left: t.left,
      right: t.right,
      top: i.top,
      bottom: i.bottom
    };
}
var Se;
let vn = (Se = class {
  static register(...t) {
    ae.add(...t), ka();
  }
  static unregister(...t) {
    ae.remove(...t), ka();
  }
  constructor(t, i) {
    const n = this.config = new Om(i), s = Xc(t), o = Ma(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || Yg(s))(), this.platform.updateConfig(n);
    const a = this.platform.acquireContext(s, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Bf(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new um(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = sp((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], Xn[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    ge.listen(this, "complete", Ia), ge.listen(this, "progress", Tm), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: i }, width: n, height: s, _aspectRatio: o } = this;
    return mt(t) ? i && o ? o : s ? n / s : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return ae;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ra(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return na(this.canvas, this.ctx), this;
  }
  stop() {
    return ge.stop(this), this;
  }
  resize(t, i) {
    ge.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: i
    } : this._resize(t, i);
  }
  _resize(t, i) {
    const n = this.options, s = this.canvas, o = n.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(s, t, i, o), a = n.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, ra(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), lt(n.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const i = this.options.scales || {};
    ot(i, (n, s) => {
      n.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, i = t.scales, n = this.scales, s = Object.keys(n).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    i && (o = o.concat(Object.keys(i).map((r) => {
      const a = i[r], l = us(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), ot(o, (r) => {
      const a = r.options, l = a.id, c = us(l, a), h = Q(a.type, r.dtype);
      (a.position === void 0 || Pa(a.position, c) !== Pa(r.dposition)) && (a.position = r.dposition), s[l] = !0;
      let d = null;
      if (l in n && n[l].type === h)
        d = n[l];
      else {
        const u = ae.getScale(h);
        d = new u({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), n[d.id] = d;
      }
      d.init(a, t);
    }), ot(s, (r, a) => {
      r || delete n[a];
    }), ot(n, (r) => {
      Pe.configure(this, r, r.options), Pe.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, i = this.data.datasets.length, n = t.length;
    if (t.sort((s, o) => s.index - o.index), n > i) {
      for (let s = i; s < n; ++s)
        this._destroyDatasetMeta(s);
      t.splice(i, n - i);
    }
    this._sortedMetasets = t.slice(0).sort(Ra("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: i } } = this;
    t.length > i.length && delete this._stacks, t.forEach((n, s) => {
      i.filter((o) => o === n._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], i = this.data.datasets;
    let n, s;
    for (this._removeUnreferencedMetasets(), n = 0, s = i.length; n < s; n++) {
      const o = i[n];
      let r = this.getDatasetMeta(n);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(n), r = this.getDatasetMeta(n)), r.type = a, r.indexAxis = o.indexAxis || Oo(a, this.options), r.order = o.order || 0, r.index = n, r.label = "" + o.label, r.visible = this.isDatasetVisible(n), r.controller)
        r.controller.updateIndex(n), r.controller.linkScales();
      else {
        const l = ae.getController(a), { datasetElementType: c, dataElementType: h } = Ot.datasets[a];
        Object.assign(l, {
          dataElementType: ae.getElement(h),
          datasetElementType: c && ae.getElement(c)
        }), r.controller = new l(this, n), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    ot(this.data.datasets, (t, i) => {
      this.getDatasetMeta(i).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const i = this.config;
    i.update();
    const n = this._options = i.createResolver(i.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !n.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), u = !s && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), r = Math.max(+d.getMaxOverflow(), r);
    }
    r = this._minPadding = n.layout.autoPadding ? r : 0, this._updateLayout(r), s || ot(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Ra("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    ot(this.scales, (t) => {
      Pe.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, i = new Set(Object.keys(this._listeners)), n = new Set(t.events);
    (!Yr(i, n) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, i = this._getUniformDataChanges() || [];
    for (const { method: n, start: s, count: o } of i) {
      const r = n === "_removeElements" ? -o : o;
      Am(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const i = this.data.datasets.length, n = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), s = n(0);
    for (let o = 1; o < i; o++)
      if (!Yr(s, n(o)))
        return;
    return Array.from(s).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Pe.update(this, this.width, this.height, t);
    const i = this.chartArea, n = i.width <= 0 || i.height <= 0;
    this._layers = [], ot(this.boxes, (s) => {
      n && s.position === "chartArea" || (s.configure && s.configure(), this._layers.push(...s._layers()));
    }, this), this._layers.forEach((s, o) => {
      s._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let i = 0, n = this.data.datasets.length; i < n; ++i)
        this.getDatasetMeta(i).controller.configure();
      for (let i = 0, n = this.data.datasets.length; i < n; ++i)
        this._updateDataset(i, Le(t) ? t({
          datasetIndex: i
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, i) {
    const n = this.getDatasetMeta(t), s = {
      meta: n,
      index: t,
      mode: i,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (n.controller._update(i), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (ge.has(this) ? this.attached && !ge.running(this) && ge.start(this) : (this.draw(), Ia({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: n, height: s } = this._resizeBeforeDraw;
      this._resize(n, s), this._resizeBeforeDraw = null;
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const i = this._layers;
    for (t = 0; t < i.length && i[t].z <= 0; ++t)
      i[t].draw(this.chartArea);
    for (this._drawDatasets(); t < i.length; ++t)
      i[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const i = this._sortedMetasets, n = [];
    let s, o;
    for (s = 0, o = i.length; s < o; ++s) {
      const r = i[s];
      (!t || r.visible) && n.push(r);
    }
    return n;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let i = t.length - 1; i >= 0; --i)
      this._drawDataset(t[i]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const i = this.ctx, n = t._clip, s = !n.disabled, o = Rm(t) || this.chartArea, r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (s && Ns(i, {
      left: n.left === !1 ? 0 : o.left - n.left,
      right: n.right === !1 ? this.width : o.right + n.right,
      top: n.top === !1 ? 0 : o.top - n.top,
      bottom: n.bottom === !1 ? this.height : o.bottom + n.bottom
    }), t.controller.draw(), s && Hs(i), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return un(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, i, n, s) {
    const o = Tg.modes[i];
    return typeof o == "function" ? o(this, t, n, s) : [];
  }
  getDatasetMeta(t) {
    const i = this.data.datasets[t], n = this._metasets;
    let s = n.filter((o) => o && o._dataset === i).pop();
    return s || (s = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: i && i.order || 0,
      index: t,
      _dataset: i,
      _parsed: [],
      _sorted: !1
    }, n.push(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = Ne(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const i = this.data.datasets[t];
    if (!i)
      return !1;
    const n = this.getDatasetMeta(t);
    return typeof n.hidden == "boolean" ? !n.hidden : !i.hidden;
  }
  setDatasetVisibility(t, i) {
    const n = this.getDatasetMeta(t);
    n.hidden = !i;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, i, n) {
    const s = n ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, s);
    ne(i) ? (o.data[i].hidden = !n, this.update()) : (this.setDatasetVisibility(t, n), r.update(o, {
      visible: n
    }), this.update((a) => a.datasetIndex === t ? s : void 0));
  }
  hide(t, i) {
    this._updateVisibility(t, i, !1);
  }
  show(t, i) {
    this._updateVisibility(t, i, !0);
  }
  _destroyDatasetMeta(t) {
    const i = this._metasets[t];
    i && i.controller && i.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, i;
    for (this.stop(), ge.remove(this), t = 0, i = this.data.datasets.length; t < i; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: i } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), na(t, i), this.platform.releaseContext(i), this.canvas = null, this.ctx = null), delete Xn[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, i = this.platform, n = (o, r) => {
      i.addEventListener(this, o, r), t[o] = r;
    }, s = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    ot(this.options.events, (o) => n(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, i = this.platform, n = (l, c) => {
      i.addEventListener(this, l, c), t[l] = c;
    }, s = (l, c) => {
      t[l] && (i.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      s("attach", a), this.attached = !0, this.resize(), n("resize", o), n("detach", r);
    };
    r = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), n("attach", a);
    }, i.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    ot(this._listeners, (t, i) => {
      this.platform.removeEventListener(this, i, t);
    }), this._listeners = {}, ot(this._responsiveListeners, (t, i) => {
      this.platform.removeEventListener(this, i, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, i, n) {
    const s = n ? "set" : "remove";
    let o, r, a, l;
    for (i === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const i = this._active || [], n = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !ss(n, i) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, i));
  }
  notifyPlugins(t, i, n) {
    return this._plugins.notify(this, t, i, n);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((i) => i.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, i, n) {
    const s = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(i, t), a = n ? t : o(t, i);
    r.length && this.updateHoverStyle(r, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
  }
  _eventHandler(t, i) {
    const n = {
      event: t,
      replay: i,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", n, s) === !1)
      return;
    const o = this._handleEvent(t, i, n.inChartArea);
    return n.cancelable = !1, this.notifyPlugins("afterEvent", n, s), (o || n.changed) && this.render(), this;
  }
  _handleEvent(t, i, n) {
    const { _active: s = [], options: o } = this, r = i, a = this._getActiveElements(t, s, n, r), l = $f(t), c = Pm(t, this._lastEvent, n, l);
    n && (this._lastEvent = null, lt(o.onHover, [
      t,
      a,
      this
    ], this), l && lt(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !ss(a, s);
    return (h || i) && (this._active = a, this._updateHoverStyles(a, s, i)), this._lastEvent = c, h;
  }
  _getActiveElements(t, i, n, s) {
    if (t.type === "mouseout")
      return [];
    if (!n)
      return i;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}, $(Se, "defaults", Ot), $(Se, "instances", Xn), $(Se, "overrides", si), $(Se, "registry", ae), $(Se, "version", wm), $(Se, "getChart", Ma), Se);
function ka() {
  return ot(vn.instances, (e) => e._plugins.invalidate());
}
function Im(e, t, i) {
  const { startAngle: n, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = s / a;
  e.beginPath(), e.arc(o, r, a, n - c, i + c), l > s ? (c = s / l, e.arc(o, r, l, i + c, n - c, !0)) : e.arc(o, r, s, i + xt, n - xt), e.closePath(), e.clip();
}
function Mm(e) {
  return Qo(e, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function km(e, t, i, n) {
  const s = Mm(e.options.borderRadius), o = (i - t) / 2, r = Math.min(o, n * t / 2), a = (l) => {
    const c = (i - Math.min(o, l)) * n / 2;
    return Xt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: Xt(s.innerStart, 0, r),
    innerEnd: Xt(s.innerEnd, 0, r)
  };
}
function di(e, t, i, n) {
  return {
    x: i + e * Math.cos(t),
    y: n + e * Math.sin(t)
  };
}
function fs(e, t, i, n, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + n + i - c, 0), u = h > 0 ? h + n + i + c : 0;
  let f = 0;
  const m = s - l;
  if (n) {
    const W = h > 0 ? h - n : 0, q = d > 0 ? d - n : 0, j = (W + q) / 2, J = j !== 0 ? m * j / (j + n) : m;
    f = (m - J) / 2;
  }
  const p = Math.max(1e-3, m * d - i / Et) / d, g = (m - p) / 2, x = l + g + f, v = s - g - f, { outerStart: y, outerEnd: S, innerStart: E, innerEnd: k } = km(t, u, d, v - x), I = d - y, A = d - S, H = x + y / I, V = v - S / A, B = u + E, Z = u + k, ut = x + E / B, gt = v - k / Z;
  if (e.beginPath(), o) {
    const W = (H + V) / 2;
    if (e.arc(r, a, d, H, W), e.arc(r, a, d, W, V), S > 0) {
      const ft = di(A, V, r, a);
      e.arc(ft.x, ft.y, S, V, v + xt);
    }
    const q = di(Z, v, r, a);
    if (e.lineTo(q.x, q.y), k > 0) {
      const ft = di(Z, gt, r, a);
      e.arc(ft.x, ft.y, k, v + xt, gt + Math.PI);
    }
    const j = (v - k / u + (x + E / u)) / 2;
    if (e.arc(r, a, u, v - k / u, j, !0), e.arc(r, a, u, j, x + E / u, !0), E > 0) {
      const ft = di(B, ut, r, a);
      e.arc(ft.x, ft.y, E, ut + Math.PI, x - xt);
    }
    const J = di(I, x, r, a);
    if (e.lineTo(J.x, J.y), y > 0) {
      const ft = di(I, H, r, a);
      e.arc(ft.x, ft.y, y, x - xt, H);
    }
  } else {
    e.moveTo(r, a);
    const W = Math.cos(H) * d + r, q = Math.sin(H) * d + a;
    e.lineTo(W, q);
    const j = Math.cos(V) * d + r, J = Math.sin(V) * d + a;
    e.lineTo(j, J);
  }
  e.closePath();
}
function Dm(e, t, i, n, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    fs(e, t, i, n, l, s);
    for (let c = 0; c < o; ++c)
      e.fill();
    isNaN(a) || (l = r + (a % dt || dt));
  }
  return fs(e, t, i, n, l, s), e.fill(), l;
}
function Lm(e, t, i, n, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h } = l, d = l.borderAlign === "inner";
  if (!c)
    return;
  d ? (e.lineWidth = c * 2, e.lineJoin = h || "round") : (e.lineWidth = c, e.lineJoin = h || "bevel");
  let u = t.endAngle;
  if (o) {
    fs(e, t, i, n, u, s);
    for (let f = 0; f < o; ++f)
      e.stroke();
    isNaN(a) || (u = r + (a % dt || dt));
  }
  d && Im(e, t, u), o || (fs(e, t, i, n, u, s), e.stroke());
}
class qn extends ri {
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, i, n) {
    const s = this.getProps([
      "x",
      "y"
    ], n), { angle: o, distance: r } = vc(s, {
      x: t,
      y: i
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], n), u = this.options.spacing / 2, m = Q(d, l - a) >= dt || dn(o, a, l), p = Ze(r, c + u, h + u);
    return m && p;
  }
  getCenterPoint(t) {
    const { x: i, y: n, startAngle: s, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], t), { offset: l, spacing: c } = this.options, h = (s + o) / 2, d = (r + a + c + l) / 2;
    return {
      x: i + Math.cos(h) * d,
      y: n + Math.sin(h) * d
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: i, circumference: n } = this, s = (i.offset || 0) / 4, o = (i.spacing || 0) / 2, r = i.circular;
    if (this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = n > dt ? Math.floor(n / dt) : 0, n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * s, Math.sin(a) * s);
    const l = 1 - Math.sin(Math.min(Et, n || 0)), c = s * l;
    t.fillStyle = i.backgroundColor, t.strokeStyle = i.borderColor, Dm(t, this, c, o, r), Lm(t, this, c, o, r), t.restore();
  }
}
$(qn, "id", "arc"), $(qn, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), $(qn, "defaultRoutes", {
  backgroundColor: "backgroundColor"
});
function qc(e, t, i = t) {
  e.lineCap = Q(i.borderCapStyle, t.borderCapStyle), e.setLineDash(Q(i.borderDash, t.borderDash)), e.lineDashOffset = Q(i.borderDashOffset, t.borderDashOffset), e.lineJoin = Q(i.borderJoinStyle, t.borderJoinStyle), e.lineWidth = Q(i.borderWidth, t.borderWidth), e.strokeStyle = Q(i.borderColor, t.borderColor);
}
function Nm(e, t, i) {
  e.lineTo(i.x, i.y);
}
function Hm(e) {
  return e.stepped ? mp : e.tension || e.cubicInterpolationMode === "monotone" ? _p : Nm;
}
function Zc(e, t, i = {}) {
  const n = e.length, { start: s = 0, end: o = n - 1 } = i, { start: r, end: a } = t, l = Math.max(s, r), c = Math.min(o, a), h = s < r && o < r || s > a && o > a;
  return {
    count: n,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? n + c - l : c - l
  };
}
function zm(e, t, i, n) {
  const { points: s, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Zc(s, i, n), h = Hm(o);
  let { move: d = !0, reverse: u } = n || {}, f, m, p;
  for (f = 0; f <= c; ++f)
    m = s[(a + (u ? c - f : f)) % r], !m.skip && (d ? (e.moveTo(m.x, m.y), d = !1) : h(e, p, m, u, o.stepped), p = m);
  return l && (m = s[(a + (u ? c : 0)) % r], h(e, p, m, u, o.stepped)), !!l;
}
function Fm(e, t, i, n) {
  const s = t.points, { count: o, start: r, ilen: a } = Zc(s, i, n), { move: l = !0, reverse: c } = n || {};
  let h = 0, d = 0, u, f, m, p, g, x;
  const v = (S) => (r + (c ? a - S : S)) % o, y = () => {
    p !== g && (e.lineTo(h, g), e.lineTo(h, p), e.lineTo(h, x));
  };
  for (l && (f = s[v(0)], e.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = s[v(u)], f.skip)
      continue;
    const S = f.x, E = f.y, k = S | 0;
    k === m ? (E < p ? p = E : E > g && (g = E), h = (d * h + S) / ++d) : (y(), e.lineTo(S, E), m = k, d = 0, p = g = E), x = E;
  }
  y();
}
function Eo(e) {
  const t = e.options, i = t.borderDash && t.borderDash.length;
  return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !i ? Fm : zm;
}
function Vm(e) {
  return e.stepped ? Zp : e.tension || e.cubicInterpolationMode === "monotone" ? Jp : $e;
}
function Bm(e, t, i, n) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, i, n) && s.closePath()), qc(e, t.options), e.stroke(s);
}
function Gm(e, t, i, n) {
  const { segments: s, options: o } = t, r = Eo(t);
  for (const a of s)
    qc(e, o, a.style), e.beginPath(), r(e, t, a, {
      start: i,
      end: i + n - 1
    }) && e.closePath(), e.stroke();
}
const Wm = typeof Path2D == "function";
function jm(e, t, i, n) {
  Wm && !t.options.segment ? Bm(e, t, i, n) : Gm(e, t, i, n);
}
class Re extends ri {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, i) {
    const n = this.options;
    if ((n.tension || n.cubicInterpolationMode === "monotone") && !n.stepped && !this._pointsUpdated) {
      const s = n.spanGaps ? this._loop : this._fullLoop;
      Wp(this._points, n, t, s, i), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = sg(this, this.options.segment));
  }
  first() {
    const t = this.segments, i = this.points;
    return t.length && i[t[0].start];
  }
  last() {
    const t = this.segments, i = this.points, n = t.length;
    return n && i[t[n - 1].end];
  }
  interpolate(t, i) {
    const n = this.options, s = t[i], o = this.points, r = zc(this, {
      property: i,
      start: s,
      end: s
    });
    if (!r.length)
      return;
    const a = [], l = Vm(n);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: u } = r[c], f = o[d], m = o[u];
      if (f === m) {
        a.push(f);
        continue;
      }
      const p = Math.abs((s - f[i]) / (m[i] - f[i])), g = l(f, m, p, n.stepped);
      g[i] = t[i], a.push(g);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, i, n) {
    return Eo(this)(t, this, i, n);
  }
  path(t, i, n) {
    const s = this.segments, o = Eo(this);
    let r = this._loop;
    i = i || 0, n = n || this.points.length - i;
    for (const a of s)
      r &= o(t, this, a, {
        start: i,
        end: i + n - 1
      });
    return !!r;
  }
  draw(t, i, n, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), jm(t, this, n, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
$(Re, "id", "line"), $(Re, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), $(Re, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), $(Re, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Da(e, t, i, n) {
  const s = e.options, { [i]: o } = e.getProps([
    i
  ], n);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Zn extends ri {
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, i, n) {
    const s = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], n);
    return Math.pow(t - o, 2) + Math.pow(i - r, 2) < Math.pow(s.hitRadius + s.radius, 2);
  }
  inXRange(t, i) {
    return Da(this, t, "x", i);
  }
  inYRange(t, i) {
    return Da(this, t, "y", i);
  }
  getCenterPoint(t) {
    const { x: i, y: n } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: i,
      y: n
    };
  }
  size(t) {
    t = t || this.options || {};
    let i = t.radius || 0;
    i = Math.max(i, i && t.hoverRadius || 0);
    const n = i && t.borderWidth || 0;
    return (i + n) * 2;
  }
  draw(t, i) {
    const n = this.options;
    this.skip || n.radius < 0.1 || !un(this, i, this.size(n) / 2) || (t.strokeStyle = n.borderColor, t.lineWidth = n.borderWidth, t.fillStyle = n.backgroundColor, yo(t, n, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
$(Zn, "id", "point"), /**
* @type {any}
*/
$(Zn, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
$(Zn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function Um(e, t, i) {
  const n = e.segments, s = e.points, o = t.points, r = [];
  for (const a of n) {
    let { start: l, end: c } = a;
    c = or(l, c, s);
    const h = So(i, s[l], s[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: h,
        start: s[l],
        end: s[c]
      });
      continue;
    }
    const d = zc(t, h);
    for (const u of d) {
      const f = So(i, o[u.start], o[u.end], u.loop), m = Hc(a, s, f);
      for (const p of m)
        r.push({
          source: p,
          target: u,
          start: {
            [i]: La(h, f, "start", Math.max)
          },
          end: {
            [i]: La(h, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function So(e, t, i, n) {
  if (n)
    return;
  let s = t[e], o = i[e];
  return e === "angle" && (s = Wt(s), o = Wt(o)), {
    property: e,
    start: s,
    end: o
  };
}
function Km(e, t) {
  const { x: i = null, y: n = null } = e || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = or(r, a, s);
    const l = s[r], c = s[a];
    n !== null ? (o.push({
      x: l.x,
      y: n
    }), o.push({
      x: c.x,
      y: n
    })) : i !== null && (o.push({
      x: i,
      y: l.y
    }), o.push({
      x: i,
      y: c.y
    }));
  }), o;
}
function or(e, t, i) {
  for (; t > e; t--) {
    const n = i[t];
    if (!isNaN(n.x) && !isNaN(n.y))
      break;
  }
  return t;
}
function La(e, t, i, n) {
  return e && t ? n(e[i], t[i]) : e ? e[i] : t ? t[i] : 0;
}
function Jc(e, t) {
  let i = [], n = !1;
  return _t(e) ? (n = !0, i = e) : i = Km(e, t), i.length ? new Re({
    points: i,
    options: {
      tension: 0
    },
    _loop: n,
    _fullLoop: n
  }) : null;
}
function Na(e) {
  return e && e.fill !== !1;
}
function $m(e, t, i) {
  let s = e[t].fill;
  const o = [
    t
  ];
  let r;
  if (!i)
    return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!bt(s))
      return s;
    if (r = e[s], !r)
      return !1;
    if (r.visible)
      return s;
    o.push(s), s = r.fill;
  }
  return !1;
}
function Ym(e, t, i) {
  const n = Jm(e);
  if (it(n))
    return isNaN(n.value) ? !1 : n;
  let s = parseFloat(n);
  return bt(s) && Math.floor(s) === s ? Xm(n[0], t, s, i) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(n) >= 0 && n;
}
function Xm(e, t, i, n) {
  return (e === "-" || e === "+") && (i = t + i), i === t || i < 0 || i >= n ? !1 : i;
}
function qm(e, t) {
  let i = null;
  return e === "start" ? i = t.bottom : e === "end" ? i = t.top : it(e) ? i = t.getPixelForValue(e.value) : t.getBasePixel && (i = t.getBasePixel()), i;
}
function Zm(e, t, i) {
  let n;
  return e === "start" ? n = i : e === "end" ? n = t.options.reverse ? t.min : t.max : it(e) ? n = e.value : n = t.getBaseValue(), n;
}
function Jm(e) {
  const t = e.options, i = t.fill;
  let n = Q(i && i.target, i);
  return n === void 0 && (n = !!t.backgroundColor), n === !1 || n === null ? !1 : n === !0 ? "origin" : n;
}
function Qm(e) {
  const { scale: t, index: i, line: n } = e, s = [], o = n.segments, r = n.points, a = t_(t, i);
  a.push(Jc({
    x: null,
    y: t.bottom
  }, n));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      e_(s, r[h], a);
  }
  return new Re({
    points: s,
    options: {}
  });
}
function t_(e, t) {
  const i = [], n = e.getMatchingVisibleMetas("line");
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (o.index === t)
      break;
    o.hidden || i.unshift(o.dataset);
  }
  return i;
}
function e_(e, t, i) {
  const n = [];
  for (let s = 0; s < i.length; s++) {
    const o = i[s], { first: r, last: a, point: l } = i_(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        n.unshift(l);
      else if (e.push(l), !a)
        break;
    }
  }
  e.push(...n);
}
function i_(e, t, i) {
  const n = e.interpolate(t, i);
  if (!n)
    return {};
  const s = n[i], o = e.segments, r = e.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], d = r[h.start][i], u = r[h.end][i];
    if (Ze(s, d, u)) {
      a = s === d, l = s === u;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: n
  };
}
class Qc {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, i, n) {
    const { x: s, y: o, radius: r } = this;
    return i = i || {
      start: 0,
      end: dt
    }, t.arc(s, o, r, i.end, i.start, !0), !n.bounds;
  }
  interpolate(t) {
    const { x: i, y: n, radius: s } = this, o = t.angle;
    return {
      x: i + Math.cos(o) * s,
      y: n + Math.sin(o) * s,
      angle: o
    };
  }
}
function n_(e) {
  const { chart: t, fill: i, line: n } = e;
  if (bt(i))
    return s_(t, i);
  if (i === "stack")
    return Qm(e);
  if (i === "shape")
    return !0;
  const s = o_(e);
  return s instanceof Qc ? s : Jc(s, n);
}
function s_(e, t) {
  const i = e.getDatasetMeta(t);
  return i && e.isDatasetVisible(t) ? i.dataset : null;
}
function o_(e) {
  return (e.scale || {}).getPointPositionForValue ? a_(e) : r_(e);
}
function r_(e) {
  const { scale: t = {}, fill: i } = e, n = qm(i, t);
  if (bt(n)) {
    const s = t.isHorizontal();
    return {
      x: s ? n : null,
      y: s ? null : n
    };
  }
  return null;
}
function a_(e) {
  const { scale: t, fill: i } = e, n = t.options, s = t.getLabels().length, o = n.reverse ? t.max : t.min, r = Zm(i, t, o), a = [];
  if (n.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Qc({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < s; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function eo(e, t, i) {
  const n = n_(t), { line: s, scale: o, axis: r } = t, a = s.options, l = a.fill, c = a.backgroundColor, { above: h = c, below: d = c } = l || {};
  n && s.points.length && (Ns(e, i), l_(e, {
    line: s,
    target: n,
    above: h,
    below: d,
    area: i,
    scale: o,
    axis: r
  }), Hs(e));
}
function l_(e, t) {
  const { line: i, target: n, above: s, below: o, area: r, scale: a } = t, l = i._loop ? "angle" : t.axis;
  e.save(), l === "x" && o !== s && (Ha(e, n, r.top), za(e, {
    line: i,
    target: n,
    color: s,
    scale: a,
    property: l
  }), e.restore(), e.save(), Ha(e, n, r.bottom)), za(e, {
    line: i,
    target: n,
    color: o,
    scale: a,
    property: l
  }), e.restore();
}
function Ha(e, t, i) {
  const { segments: n, points: s } = t;
  let o = !0, r = !1;
  e.beginPath();
  for (const a of n) {
    const { start: l, end: c } = a, h = s[l], d = s[or(l, c, s)];
    o ? (e.moveTo(h.x, h.y), o = !1) : (e.lineTo(h.x, i), e.lineTo(h.x, h.y)), r = !!t.pathSegment(e, a, {
      move: r
    }), r ? e.closePath() : e.lineTo(d.x, i);
  }
  e.lineTo(t.first().x, i), e.closePath(), e.clip();
}
function za(e, t) {
  const { line: i, target: n, property: s, color: o, scale: r } = t, a = Um(i, n, s);
  for (const { source: l, target: c, start: h, end: d } of a) {
    const { style: { backgroundColor: u = o } = {} } = l, f = n !== !0;
    e.save(), e.fillStyle = u, c_(e, r, f && So(s, h, d)), e.beginPath();
    const m = !!i.pathSegment(e, l);
    let p;
    if (f) {
      m ? e.closePath() : Fa(e, n, d, s);
      const g = !!n.pathSegment(e, c, {
        move: m,
        reverse: !0
      });
      p = m && g, p || Fa(e, n, h, s);
    }
    e.closePath(), e.fill(p ? "evenodd" : "nonzero"), e.restore();
  }
}
function c_(e, t, i) {
  const { top: n, bottom: s } = t.chart.chartArea, { property: o, start: r, end: a } = i || {};
  o === "x" && (e.beginPath(), e.rect(r, n, a - r, s - n), e.clip());
}
function Fa(e, t, i, n) {
  const s = t.interpolate(i, n);
  s && e.lineTo(s.x, s.y);
}
var h_ = {
  id: "filler",
  afterDatasetsUpdate(e, t, i) {
    const n = (e.data.datasets || []).length, s = [];
    let o, r, a, l;
    for (r = 0; r < n; ++r)
      o = e.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Re && (l = {
        visible: e.isDatasetVisible(r),
        index: r,
        fill: Ym(a, r, n),
        chart: e,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, s.push(l);
    for (r = 0; r < n; ++r)
      l = s[r], !(!l || l.fill === !1) && (l.fill = $m(s, r, i.propagate));
  },
  beforeDraw(e, t, i) {
    const n = i.drawTime === "beforeDraw", s = e.getSortedVisibleDatasetMetas(), o = e.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), n && a.fill && eo(e.ctx, a, o));
    }
  },
  beforeDatasetsDraw(e, t, i) {
    if (i.drawTime !== "beforeDatasetsDraw")
      return;
    const n = e.getSortedVisibleDatasetMetas();
    for (let s = n.length - 1; s >= 0; --s) {
      const o = n[s].$filler;
      Na(o) && eo(e.ctx, o, e.chartArea);
    }
  },
  beforeDatasetDraw(e, t, i) {
    const n = t.meta.$filler;
    !Na(n) || i.drawTime !== "beforeDatasetDraw" || eo(e.ctx, n, e.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Va = (e, t) => {
  let { boxHeight: i = t, boxWidth: n = t } = e;
  return e.usePointStyle && (i = Math.min(i, t), n = e.pointStyleWidth || Math.min(n, t)), {
    boxWidth: n,
    boxHeight: i,
    itemHeight: Math.max(t, i)
  };
}, d_ = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class Ba extends ri {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, i, n) {
    this.maxWidth = t, this.maxHeight = i, this._margins = n, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let i = lt(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (i = i.filter((n) => t.filter(n, this.chart.data))), t.sort && (i = i.sort((n, s) => t.sort(n, s, this.chart.data))), this.options.reverse && i.reverse(), this.legendItems = i;
  }
  fit() {
    const { options: t, ctx: i } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const n = t.labels, s = Pt(n.font), o = s.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Va(n, o);
    let c, h;
    i.font = s.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, s, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, i, n, s) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = s + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -h;
    return this.legendItems.forEach((m, p) => {
      const g = n + i / 2 + o.measureText(m.text).width;
      (p === 0 || c[c.length - 1] + g + 2 * a > r) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = {
        left: 0,
        top: f,
        row: u,
        width: g,
        height: s
      }, c[c.length - 1] += g + a;
    }), d;
  }
  _fitCols(t, i, n, s) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, u = 0, f = 0, m = 0, p = 0;
    return this.legendItems.forEach((g, x) => {
      const { itemWidth: v, itemHeight: y } = u_(n, i, o, g, s);
      x > 0 && f + y + 2 * a > h && (d += u + a, c.push({
        width: u,
        height: f
      }), m += u + a, p++, u = f = 0), l[x] = {
        left: m,
        top: f,
        col: p,
        width: v,
        height: y
      }, u = Math.max(u, v), f += y + a;
    }), d += u, c.push({
      width: u,
      height: f
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: i, options: { align: n, labels: { padding: s }, rtl: o } } = this, r = _i(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = Vt(n, this.left + s, this.right - this.lineWidths[a]);
      for (const c of i)
        a !== c.row && (a = c.row, l = Vt(n, this.left + s, this.right - this.lineWidths[a])), c.top += this.top + t + s, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + s;
    } else {
      let a = 0, l = Vt(n, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of i)
        c.col !== a && (a = c.col, l = Vt(n, this.top + t + s, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + s, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Ns(t, this), this._draw(), Hs(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: i, lineWidths: n, ctx: s } = this, { align: o, labels: r } = t, a = Ot.color, l = _i(t.rtl, this.left, this.width), c = Pt(r.font), { padding: h } = r, d = c.size, u = d / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: m, boxHeight: p, itemHeight: g } = Va(r, d), x = function(k, I, A) {
      if (isNaN(m) || m <= 0 || isNaN(p) || p < 0)
        return;
      s.save();
      const H = Q(A.lineWidth, 1);
      if (s.fillStyle = Q(A.fillStyle, a), s.lineCap = Q(A.lineCap, "butt"), s.lineDashOffset = Q(A.lineDashOffset, 0), s.lineJoin = Q(A.lineJoin, "miter"), s.lineWidth = H, s.strokeStyle = Q(A.strokeStyle, a), s.setLineDash(Q(A.lineDash, [])), r.usePointStyle) {
        const V = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: A.pointStyle,
          rotation: A.rotation,
          borderWidth: H
        }, B = l.xPlus(k, m / 2), Z = I + u;
        Tc(s, V, B, Z, r.pointStyleWidth && m);
      } else {
        const V = I + Math.max((d - p) / 2, 0), B = l.leftForLtr(k, m), Z = mi(A.borderRadius);
        s.beginPath(), Object.values(Z).some((ut) => ut !== 0) ? cs(s, {
          x: B,
          y: V,
          w: m,
          h: p,
          radius: Z
        }) : s.rect(B, V, m, p), s.fill(), H !== 0 && s.stroke();
      }
      s.restore();
    }, v = function(k, I, A) {
      Ci(s, A.text, k, I + g / 2, c, {
        strikethrough: A.hidden,
        textAlign: l.textAlign(A.textAlign)
      });
    }, y = this.isHorizontal(), S = this._computeTitleHeight();
    y ? f = {
      x: Vt(o, this.left + h, this.right - n[0]),
      y: this.top + h + S,
      line: 0
    } : f = {
      x: this.left + h,
      y: Vt(o, this.top + S + h, this.bottom - i[0].height),
      line: 0
    }, Dc(this.ctx, t.textDirection);
    const E = g + h;
    this.legendItems.forEach((k, I) => {
      s.strokeStyle = k.fontColor, s.fillStyle = k.fontColor;
      const A = s.measureText(k.text).width, H = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)), V = m + u + A;
      let B = f.x, Z = f.y;
      l.setWidth(this.width), y ? I > 0 && B + V + h > this.right && (Z = f.y += E, f.line++, B = f.x = Vt(o, this.left + h, this.right - n[f.line])) : I > 0 && Z + E > this.bottom && (B = f.x = B + i[f.line].width + h, f.line++, Z = f.y = Vt(o, this.top + S + h, this.bottom - i[f.line].height));
      const ut = l.x(B);
      if (x(ut, Z, k), B = op(H, B + m + u, y ? B + V : this.right, t.rtl), v(l.x(B), Z, k), y)
        f.x += V + h;
      else if (typeof k.text != "string") {
        const gt = c.lineHeight;
        f.y += th(k, gt);
      } else
        f.y += E;
    }), Lc(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, i = t.title, n = Pt(i.font), s = Lt(i.padding);
    if (!i.display)
      return;
    const o = _i(t.rtl, this.left, this.width), r = this.ctx, a = i.position, l = n.size / 2, c = s.top + l;
    let h, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), h = this.top + c, d = Vt(t.align, d, this.right - u);
    else {
      const m = this.columnSizes.reduce((p, g) => Math.max(p, g.height), 0);
      h = c + Vt(t.align, this.top, this.bottom - m - t.labels.padding - this._computeTitleHeight());
    }
    const f = Vt(a, d, d + u);
    r.textAlign = o.textAlign(Sc(a)), r.textBaseline = "middle", r.strokeStyle = i.color, r.fillStyle = i.color, r.font = n.string, Ci(r, i.text, f, h, n);
  }
  _computeTitleHeight() {
    const t = this.options.title, i = Pt(t.font), n = Lt(t.padding);
    return t.display ? i.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, i) {
    let n, s, o;
    if (Ze(t, this.left, this.right) && Ze(i, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
        if (s = o[n], Ze(t, s.left, s.left + s.width) && Ze(i, s.top, s.top + s.height))
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const i = this.options;
    if (!g_(t.type, i))
      return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = d_(s, n);
      s && !o && lt(i.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = n, n && !o && lt(i.onHover, [
        t,
        n,
        this
      ], this);
    } else
      n && lt(i.onClick, [
        t,
        n,
        this
      ], this);
  }
}
function u_(e, t, i, n, s) {
  const o = f_(n, e, t, i), r = p_(s, n, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function f_(e, t, i, n) {
  let s = e.text;
  return s && typeof s != "string" && (s = s.reduce((o, r) => o.length > r.length ? o : r)), t + i.size / 2 + n.measureText(s).width;
}
function p_(e, t, i) {
  let n = e;
  return typeof t.text != "string" && (n = th(t, i)), n;
}
function th(e, t) {
  const i = e.text ? e.text.length + 0.5 : 0;
  return t * i;
}
function g_(e, t) {
  return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"));
}
var m_ = {
  id: "legend",
  _element: Ba,
  start(e, t, i) {
    const n = e.legend = new Ba({
      ctx: e.ctx,
      options: i,
      chart: e
    });
    Pe.configure(e, n, i), Pe.addBox(e, n);
  },
  stop(e) {
    Pe.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, i) {
    const n = e.legend;
    Pe.configure(e, n, i), n.options = i;
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, i) {
      const n = t.datasetIndex, s = i.chart;
      s.isDatasetVisible(n) ? (s.hide(n), t.hidden = !0) : (s.show(n), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets, { labels: { usePointStyle: i, pointStyle: n, textAlign: s, color: o, useBorderRadius: r, borderRadius: a } } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(i ? 0 : void 0), h = Lt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(e)
    }
  }
};
const Ui = {
  average(e) {
    if (!e.length)
      return !1;
    let t, i, n = 0, s = 0, o = 0;
    for (t = 0, i = e.length; t < i; ++t) {
      const r = e[t].element;
      if (r && r.hasValue()) {
        const a = r.tooltipPosition();
        n += a.x, s += a.y, ++o;
      }
    }
    return {
      x: n / o,
      y: s / o
    };
  },
  nearest(e, t) {
    if (!e.length)
      return !1;
    let i = t.x, n = t.y, s = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = bo(t, c);
        h < s && (s = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      i = l.x, n = l.y;
    }
    return {
      x: i,
      y: n
    };
  }
};
function re(e, t) {
  return t && (_t(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function me(e) {
  return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e;
}
function __(e, t) {
  const { element: i, datasetIndex: n, index: s } = t, o = e.getDatasetMeta(n).controller, { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(s),
    raw: e.data.datasets[n].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: i
  };
}
function Ga(e, t) {
  const i = e.chart.ctx, { body: n, footer: s, title: o } = e, { boxWidth: r, boxHeight: a } = t, l = Pt(t.bodyFont), c = Pt(t.titleFont), h = Pt(t.footerFont), d = o.length, u = s.length, f = n.length, m = Lt(t.padding);
  let p = m.height, g = 0, x = n.reduce((S, E) => S + E.before.length + E.lines.length + E.after.length, 0);
  if (x += e.beforeBody.length + e.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), x) {
    const S = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * S + (x - f) * l.lineHeight + (x - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let v = 0;
  const y = function(S) {
    g = Math.max(g, i.measureText(S).width + v);
  };
  return i.save(), i.font = c.string, ot(e.title, y), i.font = l.string, ot(e.beforeBody.concat(e.afterBody), y), v = t.displayColors ? r + 2 + t.boxPadding : 0, ot(n, (S) => {
    ot(S.before, y), ot(S.lines, y), ot(S.after, y);
  }), v = 0, i.font = h.string, ot(e.footer, y), i.restore(), g += m.width, {
    width: g,
    height: p
  };
}
function b_(e, t) {
  const { y: i, height: n } = t;
  return i < n / 2 ? "top" : i > e.height - n / 2 ? "bottom" : "center";
}
function x_(e, t, i, n) {
  const { x: s, width: o } = n, r = i.caretSize + i.caretPadding;
  if (e === "left" && s + o + r > t.width || e === "right" && s - o - r < 0)
    return !0;
}
function v_(e, t, i, n) {
  const { x: s, width: o } = i, { width: r, chartArea: { left: a, right: l } } = e;
  let c = "center";
  return n === "center" ? c = s <= (a + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= r - o / 2 && (c = "right"), x_(c, e, t, i) && (c = "center"), c;
}
function Wa(e, t, i) {
  const n = i.yAlign || t.yAlign || b_(e, i);
  return {
    xAlign: i.xAlign || t.xAlign || v_(e, t, i, n),
    yAlign: n
  };
}
function y_(e, t) {
  let { x: i, width: n } = e;
  return t === "right" ? i -= n : t === "center" && (i -= n / 2), i;
}
function O_(e, t, i) {
  let { y: n, height: s } = e;
  return t === "top" ? n += i : t === "bottom" ? n -= s + i : n -= s / 2, n;
}
function ja(e, t, i, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = e, { xAlign: a, yAlign: l } = i, c = s + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = mi(r);
  let m = y_(t, a);
  const p = O_(t, l, c);
  return l === "center" ? a === "left" ? m += c : a === "right" && (m -= c) : a === "left" ? m -= Math.max(h, u) + s : a === "right" && (m += Math.max(d, f) + s), {
    x: Xt(m, 0, n.width - t.width),
    y: Xt(p, 0, n.height - t.height)
  };
}
function Fn(e, t, i) {
  const n = Lt(i.padding);
  return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - n.right : e.x + n.left;
}
function Ua(e) {
  return re([], me(e));
}
function E_(e, t, i) {
  return Ne(e, {
    tooltip: t,
    tooltipItems: i,
    type: "tooltip"
  });
}
function Ka(e, t) {
  const i = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return i ? e.override(i) : e;
}
const eh = {
  beforeTitle: pe,
  title(e) {
    if (e.length > 0) {
      const t = e[0], i = t.chart.data.labels, n = i ? i.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (n > 0 && t.dataIndex < n)
        return i[t.dataIndex];
    }
    return "";
  },
  afterTitle: pe,
  beforeBody: pe,
  beforeLabel: pe,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const i = e.formattedValue;
    return mt(i) || (t += i), t;
  },
  labelColor(e) {
    const i = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      borderColor: i.borderColor,
      backgroundColor: i.backgroundColor,
      borderWidth: i.borderWidth,
      borderDash: i.borderDash,
      borderDashOffset: i.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const i = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      pointStyle: i.pointStyle,
      rotation: i.rotation
    };
  },
  afterLabel: pe,
  afterBody: pe,
  beforeFooter: pe,
  footer: pe,
  afterFooter: pe
};
function Nt(e, t, i, n) {
  const s = e[t].call(i, n);
  return typeof s > "u" ? eh[t].call(i, n) : s;
}
class wo extends ri {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const i = this.chart, n = this.options.setContext(this.getContext()), s = n.enabled && i.options.animation && n.animations, o = new Fc(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = E_(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, i) {
    const { callbacks: n } = i, s = Nt(n, "beforeTitle", this, t), o = Nt(n, "title", this, t), r = Nt(n, "afterTitle", this, t);
    let a = [];
    return a = re(a, me(s)), a = re(a, me(o)), a = re(a, me(r)), a;
  }
  getBeforeBody(t, i) {
    return Ua(Nt(i.callbacks, "beforeBody", this, t));
  }
  getBody(t, i) {
    const { callbacks: n } = i, s = [];
    return ot(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Ka(n, o);
      re(r.before, me(Nt(a, "beforeLabel", this, o))), re(r.lines, Nt(a, "label", this, o)), re(r.after, me(Nt(a, "afterLabel", this, o))), s.push(r);
    }), s;
  }
  getAfterBody(t, i) {
    return Ua(Nt(i.callbacks, "afterBody", this, t));
  }
  getFooter(t, i) {
    const { callbacks: n } = i, s = Nt(n, "beforeFooter", this, t), o = Nt(n, "footer", this, t), r = Nt(n, "afterFooter", this, t);
    let a = [];
    return a = re(a, me(s)), a = re(a, me(o)), a = re(a, me(r)), a;
  }
  _createItems(t) {
    const i = this._active, n = this.chart.data, s = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = i.length; l < c; ++l)
      a.push(__(this.chart, i[l]));
    return t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, n))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, n))), ot(a, (h) => {
      const d = Ka(t.callbacks, h);
      s.push(Nt(d, "labelColor", this, h)), o.push(Nt(d, "labelPointStyle", this, h)), r.push(Nt(d, "labelTextColor", this, h));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, i) {
    const n = this.options.setContext(this.getContext()), s = this._active;
    let o, r = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = Ui[n.position].call(this, s, this._eventPosition);
      r = this._createItems(n), this.title = this.getTitle(r, n), this.beforeBody = this.getBeforeBody(r, n), this.body = this.getBody(r, n), this.afterBody = this.getAfterBody(r, n), this.footer = this.getFooter(r, n);
      const l = this._size = Ga(this, n), c = Object.assign({}, a, l), h = Wa(this.chart, n, c), d = ja(n, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && n.external && n.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: i
    });
  }
  drawCaret(t, i, n, s) {
    const o = this.getCaretPosition(t, n, s);
    i.lineTo(o.x1, o.y1), i.lineTo(o.x2, o.y2), i.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, i, n) {
    const { xAlign: s, yAlign: o } = this, { caretSize: r, cornerRadius: a } = n, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = mi(a), { x: u, y: f } = t, { width: m, height: p } = i;
    let g, x, v, y, S, E;
    return o === "center" ? (S = f + p / 2, s === "left" ? (g = u, x = g - r, y = S + r, E = S - r) : (g = u + m, x = g + r, y = S - r, E = S + r), v = g) : (s === "left" ? x = u + Math.max(l, h) + r : s === "right" ? x = u + m - Math.max(c, d) - r : x = this.caretX, o === "top" ? (y = f, S = y - r, g = x - r, v = x + r) : (y = f + p, S = y + r, g = x + r, v = x - r), E = y), {
      x1: g,
      x2: x,
      x3: v,
      y1: y,
      y2: S,
      y3: E
    };
  }
  drawTitle(t, i, n) {
    const s = this.title, o = s.length;
    let r, a, l;
    if (o) {
      const c = _i(n.rtl, this.x, this.width);
      for (t.x = Fn(this, n.titleAlign, n), i.textAlign = c.textAlign(n.titleAlign), i.textBaseline = "middle", r = Pt(n.titleFont), a = n.titleSpacing, i.fillStyle = n.titleColor, i.font = r.string, l = 0; l < o; ++l)
        i.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += n.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, i, n, s, o) {
    const r = this.labelColors[n], a = this.labelPointStyles[n], { boxHeight: l, boxWidth: c, boxPadding: h } = o, d = Pt(o.bodyFont), u = Fn(this, "left", o), f = s.x(u), m = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, p = i.y + m;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, x = s.leftForLtr(f, c) + c / 2, v = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, yo(t, g, x, v), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, yo(t, g, x, v);
    } else {
      t.lineWidth = it(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const g = s.leftForLtr(f, c - h), x = s.leftForLtr(s.xPlus(f, 1), c - h - 2), v = mi(r.borderRadius);
      Object.values(v).some((y) => y !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, cs(t, {
        x: g,
        y: p,
        w: c,
        h: l,
        radius: v
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), cs(t, {
        x,
        y: p + 1,
        w: c - 2,
        h: l - 2,
        radius: v
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, p, c, l), t.strokeRect(g, p, c, l), t.fillStyle = r.backgroundColor, t.fillRect(x, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, i, n) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = n, d = Pt(n.bodyFont);
    let u = d.lineHeight, f = 0;
    const m = _i(n.rtl, this.x, this.width), p = function(A) {
      i.fillText(A, m.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, g = m.textAlign(r);
    let x, v, y, S, E, k, I;
    for (i.textAlign = r, i.textBaseline = "middle", i.font = d.string, t.x = Fn(this, g, n), i.fillStyle = n.bodyColor, ot(this.beforeBody, p), f = a && g !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, S = 0, k = s.length; S < k; ++S) {
      for (x = s[S], v = this.labelTextColors[S], i.fillStyle = v, ot(x.before, p), y = x.lines, a && y.length && (this._drawColorBox(i, t, S, m, n), u = Math.max(d.lineHeight, l)), E = 0, I = y.length; E < I; ++E)
        p(y[E]), u = d.lineHeight;
      ot(x.after, p);
    }
    f = 0, u = d.lineHeight, ot(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, i, n) {
    const s = this.footer, o = s.length;
    let r, a;
    if (o) {
      const l = _i(n.rtl, this.x, this.width);
      for (t.x = Fn(this, n.footerAlign, n), t.y += n.footerMarginTop, i.textAlign = l.textAlign(n.footerAlign), i.textBaseline = "middle", r = Pt(n.footerFont), i.fillStyle = n.footerColor, i.font = r.string, a = 0; a < o; ++a)
        i.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + n.footerSpacing;
    }
  }
  drawBackground(t, i, n, s) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = n, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: m } = mi(s.cornerRadius);
    i.fillStyle = s.backgroundColor, i.strokeStyle = s.borderColor, i.lineWidth = s.borderWidth, i.beginPath(), i.moveTo(a + d, l), r === "top" && this.drawCaret(t, i, n, s), i.lineTo(a + c - u, l), i.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, i, n, s), i.lineTo(a + c, l + h - m), i.quadraticCurveTo(a + c, l + h, a + c - m, l + h), r === "bottom" && this.drawCaret(t, i, n, s), i.lineTo(a + f, l + h), i.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, i, n, s), i.lineTo(a, l + d), i.quadraticCurveTo(a, l, a + d, l), i.closePath(), i.fill(), s.borderWidth > 0 && i.stroke();
  }
  _updateAnimationTarget(t) {
    const i = this.chart, n = this.$animations, s = n && n.x, o = n && n.y;
    if (s || o) {
      const r = Ui[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Ga(this, t), l = Object.assign({}, r, this._size), c = Wa(i, t, l), h = ja(t, l, c, i);
      (s._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const i = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n)
      return;
    this._updateAnimationTarget(i);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    n = Math.abs(n) < 1e-3 ? 0 : n;
    const r = Lt(i.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    i.enabled && a && (t.save(), t.globalAlpha = n, this.drawBackground(o, t, s, i), Dc(t, i.textDirection), o.y += r.top, this.drawTitle(o, t, i), this.drawBody(o, t, i), this.drawFooter(o, t, i), Lc(t, i.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, i) {
    const n = this._active, s = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !ss(n, s), r = this._positionChanged(s, i);
    (o || r) && (this._active = s, this._eventPosition = i, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, i, n = !0) {
    if (i && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], r = this._getActiveElements(t, o, i, n), a = this._positionChanged(r, t), l = i || !ss(r, o) || a;
    return l && (this._active = r, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, i))), l;
  }
  _getActiveElements(t, i, n, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return i;
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, i) {
    const { caretX: n, caretY: s, options: o } = this, r = Ui[o.position].call(this, t, i);
    return r !== !1 && (n !== r.x || s !== r.y);
  }
}
$(wo, "positioners", Ui);
var S_ = {
  id: "tooltip",
  _element: wo,
  positioners: Ui,
  afterInit(e, t, i) {
    i && (e.tooltip = new wo({
      chart: e,
      options: i
    }));
  },
  beforeUpdate(e, t, i) {
    e.tooltip && e.tooltip.initialize(i);
  },
  reset(e, t, i) {
    e.tooltip && e.tooltip.initialize(i);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const i = {
        tooltip: t
      };
      if (e.notifyPlugins("beforeTooltipDraw", {
        ...i,
        cancelable: !0
      }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", i);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const i = t.replay;
      e.tooltip.handleEvent(t.event, i, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: eh
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
function w_(e, t) {
  const i = [], { bounds: s, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = e, f = o || 1, m = h - 1, { min: p, max: g } = t, x = !mt(r), v = !mt(a), y = !mt(c), S = (g - p) / (d + 1);
  let E = qr((g - p) / m / f) * f, k, I, A, H;
  if (E < 1e-14 && !x && !v)
    return [
      {
        value: p
      },
      {
        value: g
      }
    ];
  H = Math.ceil(g / E) - Math.floor(p / E), H > m && (E = qr(H * E / m / f) * f), mt(l) || (k = Math.pow(10, l), E = Math.ceil(E * k) / k), s === "ticks" ? (I = Math.floor(p / E) * E, A = Math.ceil(g / E) * E) : (I = p, A = g), x && v && o && Zf((a - r) / o, E / 1e3) ? (H = Math.round(Math.min((a - r) / E, h)), E = (a - r) / H, I = r, A = a) : y ? (I = x ? r : I, A = v ? a : A, H = c - 1, E = (A - I) / H) : (H = (A - I) / E, Ji(H, Math.round(H), E / 1e3) ? H = Math.round(H) : H = Math.ceil(H));
  const V = Math.max(Zr(E), Zr(I));
  k = Math.pow(10, mt(l) ? V : l), I = Math.round(I * k) / k, A = Math.round(A * k) / k;
  let B = 0;
  for (x && (u && I !== r ? (i.push({
    value: r
  }), I < r && B++, Ji(Math.round((I + B * E) * k) / k, r, $a(r, S, e)) && B++) : I < r && B++); B < H; ++B)
    i.push({
      value: Math.round((I + B * E) * k) / k
    });
  return v && u && A !== a ? i.length && Ji(i[i.length - 1].value, a, $a(a, S, e)) ? i[i.length - 1].value = a : i.push({
    value: a
  }) : (!v || A === a) && i.push({
    value: A
  }), i;
}
function $a(e, t, { horizontal: i, minRotation: n }) {
  const s = de(n), o = (i ? Math.sin(s) : Math.cos(s)) || 1e-3, r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class ps extends ki {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, i) {
    return mt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: i, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => s = i ? s : l, a = (l) => o = n ? o : l;
    if (t) {
      const l = wi(s), c = wi(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(s - l);
    }
    this.min = s, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: i, stepSize: n } = t, s;
    return n ? (s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1, s > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`), s = 1e3)) : (s = this.computeTickLimit(), i = i || 11), i && (s = Math.min(i, s)), s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, i = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
      maxTicks: n,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: i.precision,
      step: i.stepSize,
      count: i.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: i.minRotation || 0,
      includeBounds: i.includeBounds !== !1
    }, o = this._range || this, r = w_(s, o);
    return t.bounds === "ticks" && xc(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let i = this.min, n = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const s = (n - i) / Math.max(t.length - 1, 1) / 2;
      i -= s, n += s;
    }
    this._startValue = i, this._endValue = n, this._valueRange = n - i;
  }
  getLabelForValue(t) {
    return Ds(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ya extends ps {
  determineDataLimits() {
    const { min: t, max: i } = this.getMinMax(!0);
    this.min = bt(t) ? t : 0, this.max = bt(i) ? i : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), i = t ? this.width : this.height, n = de(this.options.ticks.minRotation), s = (t ? Math.sin(n) : Math.cos(n)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(i / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
$(Ya, "id", "linear"), $(Ya, "defaults", {
  ticks: {
    callback: Ls.formatters.numeric
  }
});
const pn = (e) => Math.floor(Ae(e)), je = (e, t) => Math.pow(10, pn(e) + t);
function Xa(e) {
  return e / Math.pow(10, pn(e)) === 1;
}
function qa(e, t, i) {
  const n = Math.pow(10, i), s = Math.floor(e / n);
  return Math.ceil(t / n) - s;
}
function C_(e, t) {
  const i = t - e;
  let n = pn(i);
  for (; qa(e, t, n) > 10; )
    n++;
  for (; qa(e, t, n) < 10; )
    n--;
  return Math.min(n, pn(e));
}
function T_(e, { min: t, max: i }) {
  t = Bt(e.min, t);
  const n = [], s = pn(t);
  let o = C_(t, i), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = s > o ? Math.pow(10, s) : 0, c = Math.round((t - l) * r) / r, h = Math.floor((t - l) / a / 10) * a * 10;
  let d = Math.floor((c - h) / Math.pow(10, o)), u = Bt(e.min, Math.round((l + h + d * Math.pow(10, o)) * r) / r);
  for (; u < i; )
    n.push({
      value: u,
      major: Xa(u),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (o++, d = 2, r = o >= 0 ? 1 : r), u = Math.round((l + h + d * Math.pow(10, o)) * r) / r;
  const f = Bt(e.max, u);
  return n.push({
    value: f,
    major: Xa(f),
    significand: d
  }), n;
}
class Za extends ki {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, i) {
    const n = ps.prototype.parse.apply(this, [
      t,
      i
    ]);
    if (n === 0) {
      this._zero = !0;
      return;
    }
    return bt(n) && n > 0 ? n : null;
  }
  determineDataLimits() {
    const { min: t, max: i } = this.getMinMax(!0);
    this.min = bt(t) ? Math.max(0, t) : null, this.max = bt(i) ? Math.max(0, i) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !bt(this._userMin) && (this.min = t === je(this.min, 0) ? je(this.min, -1) : je(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: i } = this.getUserBounds();
    let n = this.min, s = this.max;
    const o = (a) => n = t ? n : a, r = (a) => s = i ? s : a;
    n === s && (n <= 0 ? (o(1), r(10)) : (o(je(n, -1)), r(je(s, 1)))), n <= 0 && o(je(s, -1)), s <= 0 && r(je(n, 1)), this.min = n, this.max = s;
  }
  buildTicks() {
    const t = this.options, i = {
      min: this._userMin,
      max: this._userMax
    }, n = T_(i, this);
    return t.bounds === "ticks" && xc(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : Ds(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = Ae(t), this._valueRange = Ae(this.max) - Ae(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Ae(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const i = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + i * this._valueRange);
  }
}
$(Za, "id", "logarithmic"), $(Za, "defaults", {
  ticks: {
    callback: Ls.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Co(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const i = Lt(t.backdropPadding);
    return Q(t.font && t.font.size, Ot.font.size) + i.height;
  }
  return 0;
}
function A_(e, t, i) {
  return i = _t(i) ? i : [
    i
  ], {
    w: gp(e, t.string, i),
    h: i.length * t.lineHeight
  };
}
function Ja(e, t, i, n, s) {
  return e === n || e === s ? {
    start: t - i / 2,
    end: t + i / 2
  } : e < n || e > s ? {
    start: t - i,
    end: t
  } : {
    start: t,
    end: t + i
  };
}
function P_(e) {
  const t = {
    l: e.left + e._padding.left,
    r: e.right - e._padding.right,
    t: e.top + e._padding.top,
    b: e.bottom - e._padding.bottom
  }, i = Object.assign({}, t), n = [], s = [], o = e._pointLabels.length, r = e.options.pointLabels, a = r.centerPointLabels ? Et / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(e.getPointLabelContext(l));
    s[l] = c.padding;
    const h = e.getPointPosition(l, e.drawingArea + s[l], a), d = Pt(c.font), u = A_(e.ctx, d, e._pointLabels[l]);
    n[l] = u;
    const f = Wt(e.getIndexAngle(l) + a), m = Math.round(Zo(f)), p = Ja(m, h.x, u.w, 0, 180), g = Ja(m, h.y, u.h, 90, 270);
    R_(i, t, f, p, g);
  }
  e.setCenterPoint(t.l - i.l, i.r - t.r, t.t - i.t, i.b - t.b), e._pointLabelItems = I_(e, n, s);
}
function R_(e, t, i, n, s) {
  const o = Math.abs(Math.sin(i)), r = Math.abs(Math.cos(i));
  let a = 0, l = 0;
  n.start < t.l ? (a = (t.l - n.start) / o, e.l = Math.min(e.l, t.l - a)) : n.end > t.r && (a = (n.end - t.r) / o, e.r = Math.max(e.r, t.r + a)), s.start < t.t ? (l = (t.t - s.start) / r, e.t = Math.min(e.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / r, e.b = Math.max(e.b, t.b + l));
}
function I_(e, t, i) {
  const n = [], s = e._pointLabels.length, o = e.options, r = Co(o) / 2, a = e.drawingArea, l = o.pointLabels.centerPointLabels ? Et / s : 0;
  for (let c = 0; c < s; c++) {
    const h = e.getPointPosition(c, a + r + i[c], l), d = Math.round(Zo(Wt(h.angle + xt))), u = t[c], f = D_(h.y, u.h, d), m = M_(d), p = k_(h.x, u.w, m);
    n.push({
      x: h.x,
      y: f,
      textAlign: m,
      left: p,
      top: f,
      right: p + u.w,
      bottom: f + u.h
    });
  }
  return n;
}
function M_(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function k_(e, t, i) {
  return i === "right" ? e -= t : i === "center" && (e -= t / 2), e;
}
function D_(e, t, i) {
  return i === 90 || i === 270 ? e -= t / 2 : (i > 270 || i < 90) && (e -= t), e;
}
function L_(e, t) {
  const { ctx: i, options: { pointLabels: n } } = e;
  for (let s = t - 1; s >= 0; s--) {
    const o = n.setContext(e.getPointLabelContext(s)), r = Pt(o.font), { x: a, y: l, textAlign: c, left: h, top: d, right: u, bottom: f } = e._pointLabelItems[s], { backdropColor: m } = o;
    if (!mt(m)) {
      const p = mi(o.borderRadius), g = Lt(o.backdropPadding);
      i.fillStyle = m;
      const x = h - g.left, v = d - g.top, y = u - h + g.width, S = f - d + g.height;
      Object.values(p).some((E) => E !== 0) ? (i.beginPath(), cs(i, {
        x,
        y: v,
        w: y,
        h: S,
        radius: p
      }), i.fill()) : i.fillRect(x, v, y, S);
    }
    Ci(i, e._pointLabels[s], a, l + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle"
    });
  }
}
function ih(e, t, i, n) {
  const { ctx: s } = e;
  if (i)
    s.arc(e.xCenter, e.yCenter, t, 0, dt);
  else {
    let o = e.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < n; r++)
      o = e.getPointPosition(r, t), s.lineTo(o.x, o.y);
  }
}
function N_(e, t, i, n, s) {
  const o = e.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !n || !a || !l || i < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(s.dash), o.lineDashOffset = s.dashOffset, o.beginPath(), ih(e, i, r, n), o.closePath(), o.stroke(), o.restore());
}
function H_(e, t, i) {
  return Ne(e, {
    label: i,
    index: t,
    type: "pointLabel"
  });
}
class Ki extends ps {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = Lt(Co(this.options) / 2), i = this.width = this.maxWidth - t.width, n = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + i / 2 + t.left), this.yCenter = Math.floor(this.top + n / 2 + t.top), this.drawingArea = Math.floor(Math.min(i, n) / 2);
  }
  determineDataLimits() {
    const { min: t, max: i } = this.getMinMax(!1);
    this.min = bt(t) && !isNaN(t) ? t : 0, this.max = bt(i) && !isNaN(i) ? i : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Co(this.options));
  }
  generateTickLabels(t) {
    ps.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((i, n) => {
      const s = lt(this.options.pointLabels.callback, [
        i,
        n
      ], this);
      return s || s === 0 ? s : "";
    }).filter((i, n) => this.chart.getDataVisibility(n));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? P_(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, i, n, s) {
    this.xCenter += Math.floor((t - i) / 2), this.yCenter += Math.floor((n - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, i, n, s));
  }
  getIndexAngle(t) {
    const i = dt / (this._pointLabels.length || 1), n = this.options.startAngle || 0;
    return Wt(t * i + de(n));
  }
  getDistanceFromCenterForValue(t) {
    if (mt(t))
      return NaN;
    const i = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * i : (t - this.min) * i;
  }
  getValueForDistanceFromCenter(t) {
    if (mt(t))
      return NaN;
    const i = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - i : this.min + i;
  }
  getPointLabelContext(t) {
    const i = this._pointLabels || [];
    if (t >= 0 && t < i.length) {
      const n = i[t];
      return H_(this.getContext(), t, n);
    }
  }
  getPointPosition(t, i, n = 0) {
    const s = this.getIndexAngle(t) - xt + n;
    return {
      x: Math.cos(s) * i + this.xCenter,
      y: Math.sin(s) * i + this.yCenter,
      angle: s
    };
  }
  getPointPositionForValue(t, i) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(i));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: i, top: n, right: s, bottom: o } = this._pointLabelItems[t];
    return {
      left: i,
      top: n,
      right: s,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: i } } = this.options;
    if (t) {
      const n = this.ctx;
      n.save(), n.beginPath(), ih(this, this.getDistanceFromCenterForValue(this._endValue), i, this._pointLabels.length), n.closePath(), n.fillStyle = t, n.fill(), n.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, i = this.options, { angleLines: n, grid: s, border: o } = i, r = this._pointLabels.length;
    let a, l, c;
    if (i.pointLabels.display && L_(this, r), s.display && this.ticks.forEach((h, d) => {
      if (d !== 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const u = this.getContext(d), f = s.setContext(u), m = o.setContext(u);
        N_(this, f, l, r, m);
      }
    }), n.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const h = n.setContext(this.getPointLabelContext(a)), { color: d, lineWidth: u } = h;
        !u || !d || (t.lineWidth = u, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(i.ticks.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, i = this.options, n = i.ticks;
    if (!n.display)
      return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && !i.reverse)
        return;
      const c = n.setContext(this.getContext(l)), h = Pt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const d = Lt(c.backdropPadding);
        t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
      }
      Ci(t, a.label, 0, -o, h, {
        color: c.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
$(Ki, "id", "radialLinear"), $(Ki, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: Ls.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(t) {
      return t;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), $(Ki, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), $(Ki, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const Fs = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, zt = /* @__PURE__ */ Object.keys(Fs);
function z_(e, t) {
  return e - t;
}
function Qa(e, t) {
  if (mt(t))
    return null;
  const i = e._adapter, { parser: n, round: s, isoWeekday: o } = e._parseOpts;
  let r = t;
  return typeof n == "function" && (r = n(r)), bt(r) || (r = typeof n == "string" ? i.parse(r, n) : i.parse(r)), r === null ? null : (s && (r = s === "week" && (as(o) || o === !0) ? i.startOf(r, "isoWeek", o) : i.startOf(r, s)), +r);
}
function tl(e, t, i, n) {
  const s = zt.length;
  for (let o = zt.indexOf(e); o < s - 1; ++o) {
    const r = Fs[zt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((i - t) / (a * r.size)) <= n)
      return zt[o];
  }
  return zt[s - 1];
}
function F_(e, t, i, n, s) {
  for (let o = zt.length - 1; o >= zt.indexOf(i); o--) {
    const r = zt[o];
    if (Fs[r].common && e._adapter.diff(s, n, r) >= t - 1)
      return r;
  }
  return zt[i ? zt.indexOf(i) : 0];
}
function V_(e) {
  for (let t = zt.indexOf(e) + 1, i = zt.length; t < i; ++t)
    if (Fs[zt[t]].common)
      return zt[t];
}
function el(e, t, i) {
  if (!i)
    e[t] = !0;
  else if (i.length) {
    const { lo: n, hi: s } = Jo(i, t), o = i[n] >= t ? i[n] : i[s];
    e[o] = !0;
  }
}
function B_(e, t, i, n) {
  const s = e._adapter, o = +s.startOf(t[0].value, n), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, n))
    l = i[a], l >= 0 && (t[l].major = !0);
  return t;
}
function il(e, t, i) {
  const n = [], s = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], s[a] = r, n.push({
      value: a,
      major: !1
    });
  return o === 0 || !i ? n : B_(e, n, s, i);
}
class gs extends ki {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, i = {}) {
    const n = t.time || (t.time = {}), s = this._adapter = new Og._date(t.adapters.date);
    s.init(i), Zi(n.displayFormats, s.formats()), this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    }, super.init(t), this._normalized = i.normalized;
  }
  parse(t, i) {
    return t === void 0 ? null : Qa(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, i = this._adapter, n = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = bt(s) && !isNaN(s) ? s : +i.startOf(Date.now(), n), o = bt(o) && !isNaN(o) ? o : +i.endOf(Date.now(), n) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let i = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
    return t.length && (i = t[0], n = t[t.length - 1]), {
      min: i,
      max: n
    };
  }
  buildTicks() {
    const t = this.options, i = t.time, n = t.ticks, s = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, r = this.max, a = ep(s, o, r);
    return this._unit = i.unit || (n.autoSkip ? tl(i.minUnit, this.min, this.max, this._getLabelCapacity(o)) : F_(this, a.length, i.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : V_(this._unit), this.initOffsets(s), t.reverse && a.reverse(), il(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let i = 0, n = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? i = 1 - s : i = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? n = o : n = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    i = Xt(i, 0, r), n = Xt(n, 0, r), this._offsets = {
      start: i,
      end: n,
      factor: 1 / (i + 1 + n)
    };
  }
  _generate() {
    const t = this._adapter, i = this.min, n = this.max, s = this.options, o = s.time, r = o.unit || tl(o.minUnit, i, n, this._getLabelCapacity(i)), a = Q(s.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = as(l) || l === !0, h = {};
    let d = i, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(n, i, r) > 1e5 * a)
      throw new Error(i + " and " + n + " are too far apart with stepSize of " + a + " " + r);
    const m = s.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < n; u = +t.add(u, a, r), f++)
      el(h, u, m);
    return (u === n || s.bounds === "ticks" || f === 1) && el(h, u, m), Object.keys(h).sort((p, g) => p - g).map((p) => +p);
  }
  getLabelForValue(t) {
    const i = this._adapter, n = this.options.time;
    return n.tooltipFormat ? i.format(t, n.tooltipFormat) : i.format(t, n.displayFormats.datetime);
  }
  format(t, i) {
    const s = this.options.time.displayFormats, o = this._unit, r = i || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, i, n, s) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return lt(r, [
        t,
        i,
        n
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], d = c && a[c], u = n[i], f = c && d && u && u.major;
    return this._adapter.format(t, s || (f ? d : h));
  }
  generateTickLabels(t) {
    let i, n, s;
    for (i = 0, n = t.length; i < n; ++i)
      s = t[i], s.label = this._tickFormatFunction(s.value, i, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const i = this._offsets, n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((i.start + n) * i.factor);
  }
  getValueForPixel(t) {
    const i = this._offsets, n = this.getDecimalForPixel(t) / i.factor - i.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const i = this.options.ticks, n = this.ctx.measureText(t).width, s = de(this.isHorizontal() ? i.maxRotation : i.minRotation), o = Math.cos(s), r = Math.sin(s), a = this._resolveTickFontOptions(0).size;
    return {
      w: n * o + a * r,
      h: n * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const i = this.options.time, n = i.displayFormats, s = n[i.unit] || n.millisecond, o = this._tickFormatFunction(t, 0, il(this, [
      t
    ], this._majorUnit), s), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], i, n;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (i = 0, n = s.length; i < n; ++i)
      t = t.concat(s[i].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let i, n;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (i = 0, n = s.length; i < n; ++i)
      t.push(Qa(this, s[i]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return np(t.sort(z_));
  }
}
$(gs, "id", "time"), $(gs, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Vn(e, t, i) {
  let n = 0, s = e.length - 1, o, r, a, l;
  i ? (t >= e[n].pos && t <= e[s].pos && ({ lo: n, hi: s } = xo(e, "pos", t)), { pos: o, time: a } = e[n], { pos: r, time: l } = e[s]) : (t >= e[n].time && t <= e[s].time && ({ lo: n, hi: s } = xo(e, "time", t)), { time: o, pos: a } = e[n], { time: r, pos: l } = e[s]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class nl extends gs {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), i = this._table = this.buildLookupTable(t);
    this._minPos = Vn(i, this.min), this._tableRange = Vn(i, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: i, max: n } = this, s = [], o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= i && c <= n && s.push(c);
    if (s.length < 2)
      return [
        {
          time: i,
          pos: 0
        },
        {
          time: n,
          pos: 1
        }
      ];
    for (r = 0, a = s.length; r < a; ++r)
      h = s[r + 1], l = s[r - 1], c = s[r], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const i = this.getDataTimestamps(), n = this.getLabelTimestamps();
    return i.length && n.length ? t = this.normalize(i.concat(n)) : t = i.length ? i : n, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Vn(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const i = this._offsets, n = this.getDecimalForPixel(t) / i.factor - i.end;
    return Vn(this._table, n * this._tableRange + this._minPos, !0);
  }
}
$(nl, "id", "timeseries"), $(nl, "defaults", gs.defaults);
const nh = {
  data: {
    type: Object,
    required: !0
  },
  options: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  datasetIdKey: {
    type: String,
    default: "label"
  },
  updateMode: {
    type: String,
    default: void 0
  }
}, G_ = {
  type: {
    type: String,
    required: !0
  },
  ...nh
}, W_ = rc[0] === "2" ? (e, t) => Object.assign(e, {
  attrs: t
}) : (e, t) => Object.assign(e, t);
function ui(e) {
  return Ss(e) ? nt(e) : e;
}
function j_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
  return Ss(t) ? new Proxy(e, {}) : e;
}
function U_(e, t) {
  const i = e.options;
  i && t && Object.assign(i, t);
}
function sh(e, t) {
  e.labels = t;
}
function oh(e, t, i) {
  const n = [];
  e.datasets = t.map((s) => {
    const o = e.datasets.find((r) => r[i] === s[i]);
    return !o || !s.data || n.includes(o) ? {
      ...s
    } : (n.push(o), Object.assign(o, s), o);
  });
}
function K_(e, t) {
  const i = {
    labels: [],
    datasets: []
  };
  return sh(i, e.labels), oh(i, e.datasets, t), i;
}
const $_ = qt({
  props: G_,
  setup(e, t) {
    let { expose: i } = t;
    const n = jt(null), s = wl(null);
    i({
      chart: s
    });
    const o = () => {
      if (!n.value)
        return;
      const { type: l, data: c, options: h, plugins: d, datasetIdKey: u } = e, f = K_(c, u), m = j_(f, c);
      s.value = new vn(n.value, {
        type: l,
        data: m,
        options: {
          ...h
        },
        plugins: d
      });
    }, r = () => {
      const l = nt(s.value);
      l && (l.destroy(), s.value = null);
    }, a = (l) => {
      l.update(e.updateMode);
    };
    return Wo(o), Bl(r), Qe([
      () => e.options,
      () => e.data
    ], (l, c) => {
      let [h, d] = l, [u, f] = c;
      const m = nt(s.value);
      if (!m)
        return;
      let p = !1;
      if (h) {
        const g = ui(h), x = ui(u);
        g && g !== x && (U_(m, g), p = !0);
      }
      if (d) {
        const g = ui(d.labels), x = ui(f.labels), v = ui(d.datasets), y = ui(f.datasets);
        g !== x && (sh(m.config.data, g), p = !0), v && v !== y && (oh(m.config.data, v, e.datasetIdKey), p = !0);
      }
      p && a(m);
    }, {
      deep: !0
    }), () => oc("canvas", {
      ref: n
    });
  }
});
function rh(e, t) {
  return vn.register(t), qt({
    props: nh,
    setup(i, n) {
      let { expose: s } = n;
      const o = wl(null), r = (a) => {
        o.value = a == null ? void 0 : a.chart;
      };
      return s({
        chart: o
      }), () => oc($_, W_({
        ref: r
      }, {
        type: e,
        ...i
      }));
    }
  });
}
const Y_ = /* @__PURE__ */ rh("doughnut", Wi), X_ = /* @__PURE__ */ rh("radar", $n), q_ = (e) => (Bo("data-v-792806d3"), e = e(), Go(), e), Z_ = { class: "doughnut-container" }, J_ = { class: "doughnut-title" }, Q_ = { class: "doughnut-title-percent" }, t0 = /* @__PURE__ */ q_(() => /* @__PURE__ */ N("span", { class: "small" }, "%", -1)), e0 = {
  key: 0,
  class: "doughnut-title-below"
}, i0 = /* @__PURE__ */ qt({
  __name: "Doughnut",
  props: {
    percent: null
  },
  setup(e) {
    const t = e, { percent: i } = Mi(t), n = At(() => Math.max(0, i.value)), s = jt();
    Qe(n, (c) => {
      r.value = {
        labels: ["", ""],
        datasets: [{
          backgroundColor: ["#62BB46", "transparent"],
          data: [Number(c || 0), 100 - c]
        }]
      };
    }), vn.register(qn);
    const o = {
      id: "backgroundCircle",
      beforeDatasetsDraw(c, h, d) {
        const { ctx: u } = c;
        u.save();
        const f = c.getDatasetMeta(0).data[0], m = f.x, p = f.y, g = f.innerRadius, x = f.outerRadius, v = x - g, y = Math.PI / 180;
        u.beginPath(), u.lineWidth = v, u.strokeStyle = "rgba(0,0,0,0.1)", u.arc(m, p, x - v / 2, 0, y * 360, !1), u.stroke();
      }
    }, r = jt({
      labels: ["", ""],
      datasets: [{
        backgroundColor: ["#62BB46", "transparent"],
        data: [Number(i.value || 0), 100 - i.value]
      }]
    }), a = {
      responsive: !0,
      maintainAspectRatio: !0,
      aspectRatio: 1 / 1,
      cutout: "65%",
      borderColor: "transparent",
      hover: {},
      layout: {
        autoPadding: !1,
        padding: 0
      },
      plugins: {
        legend: {
          display: !1
        },
        tooltip: {
          enabled: !1
        }
      }
    }, l = [o];
    return (c, h) => (Y(), et("div", Z_, [
      yt(K(Y_), {
        data: r.value,
        options: a,
        plugins: l,
        ref_key: "doughnutInstance",
        ref: s
      }, null, 8, ["data"]),
      N("div", J_, [
        N("div", Q_, [
          ic(Rt(K(n)), 1),
          t0
        ]),
        K(n) >= 0 ? (Y(), et("div", e0, "reduction")) : ti("", !0)
      ])
    ]));
  }
});
const n0 = /* @__PURE__ */ fe(i0, [["__scopeId", "data-v-792806d3"]]), ah = (e) => (Bo("data-v-4b3dea21"), e = e(), Go(), e), s0 = {
  key: 0,
  class: "row text-start gx-5"
}, o0 = { class: "col-md-6" }, r0 = { class: "lca-heading" }, a0 = { class: "col-md-6" }, l0 = { class: "row" }, c0 = { class: "col-auto" }, h0 = { class: "doughnut" }, d0 = { class: "col" }, u0 = /* @__PURE__ */ ah(() => /* @__PURE__ */ N("h6", { class: "lca-heading mb-3" }, "Quick Comparison", -1)), f0 = { key: 0 }, p0 = ["value"], g0 = ["innerHTML"], m0 = { class: "row text-start" }, _0 = { class: "col-12" }, b0 = { key: 0 }, x0 = { class: "stat-table" }, v0 = /* @__PURE__ */ ah(() => /* @__PURE__ */ N("th", null, null, -1)), y0 = { class: "stat" }, O0 = /* @__PURE__ */ qt({
  __name: "TabContent",
  props: {
    tab: null
  },
  setup(e) {
    const t = e, i = _n(), n = function(m, p) {
      const g = m[o.value.title.replace(/\s/, "_")], x = Object.keys(g).reduce((v, y) => v + Number(g[y].replace(/,/, "")), 0);
      return g[p] / x * 100;
    }, s = [{
      title: "Material",
      color: "#62BB46"
    }, {
      title: "Manufacturing",
      color: "#FDBA12"
    }, {
      title: "Transportation",
      color: "#F57F29"
    }, {
      title: "End of Life",
      color: "#26C0F2"
    }], { tab: o } = Mi(t), { analysis: r, materialsForComparison: a, material: l, materials: c, baselineMaterial: h } = mn(i), d = At(() => {
      if (!l.value || !h.value)
        return 0;
      const m = Number(l.value.Overall_ratings[o.value.title]), p = Number(h.value.Overall_ratings[o.value.title]);
      return Math.max(0, Math.round((p - m) / p * 100));
    }), u = At(() => o.value.comparisonString.replace(/\$percent/, String(d.value) + "%") + " " + h.value.Core_Data.Material), f = At({
      get: () => l.value && a.value ? a.value.indexOf(l.value) : 0,
      set: (m) => {
        a.value && a.value[m] && (l.value = a.value[m]);
      }
    });
    return (m, p) => (Y(), et(vt, null, [
      K(r) && K(r)[K(o).title] ? (Y(), et("div", s0, [
        N("div", o0, [
          N("h6", r0, Rt(K(o).title) + " Overview", 1),
          N("p", null, Rt(K(r)[K(o).title].overview), 1)
        ]),
        N("div", a0, [
          N("div", l0, [
            N("div", c0, [
              N("div", h0, [
                yt(n0, { percent: K(d) }, null, 8, ["percent"])
              ])
            ]),
            N("div", d0, [
              u0,
              K(a).length > 1 ? (Y(), et("div", f0, [
                Wl(N("select", {
                  class: "form-select mb-3",
                  "onUpdate:modelValue": p[0] || (p[0] = (g) => pt(f) ? f.value = g : null)
                }, [
                  (Y(!0), et(vt, null, he(K(a), (g, x) => (Y(), et("option", { value: x }, Rt(g.Core_Data.Material), 9, p0))), 256))
                ], 512), [
                  [lc, K(f)]
                ])
              ])) : ti("", !0),
              N("p", null, [
                N("strong", null, Rt(K(l).Core_Data.Material), 1),
                N("span", { innerHTML: K(u) }, null, 8, g0)
              ])
            ])
          ])
        ])
      ])) : ti("", !0),
      N("div", m0, [
        N("div", _0, [
          K(r) && K(r)[K(o).title] && K(r)[K(o).title].market ? (Y(), et("p", b0, [
            N("strong", null, Rt(K(r)[K(o).title].market), 1)
          ])) : ti("", !0),
          N("table", x0, [
            N("thead", null, [
              N("tr", null, [
                v0,
                (Y(), et(vt, null, he(s, (g) => N("th", null, Rt(g.title), 1)), 64))
              ])
            ]),
            N("tbody", null, [
              (Y(!0), et(vt, null, he(K(c), (g) => (Y(), et("tr", null, [
                N("th", null, Rt(g.Core_Data.Material), 1),
                (Y(), et(vt, null, he(s, (x) => N("td", y0, [
                  N("div", {
                    class: "stat-bar",
                    style: oi({ backgroundColor: x.color, width: String(n(g, x.title)) + "%" }),
                    title: ""
                  }, [
                    N("span", null, Rt(n(g, x.title)), 1)
                  ], 4)
                ])), 64))
              ]))), 256))
            ])
          ])
        ])
      ])
    ], 64));
  }
});
const Jn = /* @__PURE__ */ fe(O0, [["__scopeId", "data-v-4b3dea21"]]), E0 = /* @__PURE__ */ qt({
  __name: "TabFossilFuel",
  setup(e) {
    return (t, i) => (Y(), yi(Jn));
  }
}), S0 = { class: "d-flex mb-1 align-items-center" }, w0 = { class: "number" }, C0 = /* @__PURE__ */ qt({
  __name: "BarChartBar",
  props: {
    item: null,
    index: null,
    range: null
  },
  setup(e) {
    const t = e, { item: i, index: n, range: s } = Mi(t);
    jt(0);
    const o = jt(), r = (l) => ({
      backgroundColor: l.material.display.color
    }), a = () => {
      o.value && (o.value.style.width = "0px", setTimeout(() => {
        const c = (Number(i.value.value.replace(/[^\d\.]/gi, "")) - s.value.min) / (s.value.max - s.value.min);
        o.value && (o.value.style.width = 200 * c + "px");
      }, 100 + n.value * 10));
    };
    return Wo(() => {
      a();
    }), Vl(() => {
      a();
    }), (l, c) => (Y(), et("div", S0, [
      N("div", {
        class: "bar me-2",
        ref_key: "bar",
        ref: o,
        style: oi(r(K(i)))
      }, null, 4),
      N("div", w0, Rt(K(i).value), 1)
    ]));
  }
});
const T0 = /* @__PURE__ */ fe(C0, [["__scopeId", "data-v-baf4c0c4"]]), A0 = { class: "list-unstyled" }, P0 = /* @__PURE__ */ qt({
  __name: "BarChart",
  props: {
    section: null
  },
  setup(e) {
    const t = e, { section: i } = Mi(t), n = At(() => {
      const o = i.value.items.map((a) => Number(a.value.replace(/[^\d\.]/gi, ""))), r = s(o);
      return { min: r[0], max: r[1] };
    });
    function s(o) {
      const r = Math.max(...o), a = Math.min(...o), c = (r - a) * 0.55;
      return [a - c, r + c];
    }
    return (o, r) => (Y(), et("ul", A0, [
      (Y(!0), et(vt, null, he(K(i).items, (a, l) => (Y(), et("li", null, [
        yt(T0, {
          item: a,
          index: l,
          range: K(n)
        }, null, 8, ["item", "index", "range"])
      ]))), 256))
    ]));
  }
});
const R0 = { class: "stats" }, I0 = { class: "stat-section" }, M0 = { class: "lca-heading" }, k0 = {
  key: 1,
  class: "list-unstyled"
}, D0 = /* @__PURE__ */ qt({
  __name: "StatsSection",
  setup(e) {
    const { materials: t } = mn(_n()), i = [
      "Description Summary"
    ], n = [
      "Product to Package Ratio",
      "Packaging Weight (g)",
      "Average SKU film weight  (Medium sized bag)"
    ], s = At(() => {
      const o = [];
      return !t.value || !t.value[0] || !t.value[0].Optional_Data || Object.keys(t.value[0].Optional_Data).forEach((a) => {
        i.includes(a) || t.value.every((l) => l.Optional_Data[a] != "") && [...new Set(t.value.map((l) => l.Optional_Data[a]))].length === t.value.length && o.push({
          title: a,
          items: t.value.map((l) => ({
            material: l,
            value: l.Optional_Data[a]
          }))
        });
      }), o;
    });
    return (o, r) => (Y(), et("div", R0, [
      (Y(!0), et(vt, null, he(K(s), (a) => (Y(), et("section", I0, [
        N("h6", M0, Rt(a.title), 1),
        n.includes(a.title) ? (Y(), yi(P0, {
          key: 0,
          section: a
        }, null, 8, ["section"])) : (Y(), et("ul", k0, [
          (Y(!0), et(vt, null, he(a.items, (l) => (Y(), et("li", null, [
            yt(fc, {
              class: "me-2",
              color: l.material.display.color
            }, null, 8, ["color"]),
            N("span", null, Rt(l.value), 1)
          ]))), 256))
        ]))
      ]))), 256))
    ]));
  }
}), L0 = /* @__PURE__ */ qt({
  __name: "Chart",
  setup(e) {
    vn.register(
      Ki,
      Zn,
      Re,
      h_,
      S_,
      m_
    );
    const { materials: t } = mn(_n()), i = {
      maintainAspectRatio: !0,
      aspectRatio: 5 / 4,
      interaction: {
        mode: "index",
        axis: "xy",
        intersect: !1
      },
      plugins: {
        legend: {
          display: !1
        },
        tooltip: {
          // enabled: false,
          // external: externalTooltipHandler,
          padding: 20,
          backgroundColor: "rgba(255,255,255,0.95)",
          bodyColor: "rgba(0,0,0,1)",
          titleColor: "rgba(0,0,0,0.4)",
          titleFont: {
            weight: "bold",
            size: 14
          },
          bodyFont: {
            size: 14
          },
          titleMarginBottom: 10,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          bodySpacing: 8,
          cornerRadius: 10,
          usePointStyle: !0,
          boxPadding: 6,
          xAlign: (s) => {
            if (!s.tooltipItems.length)
              return;
            const o = s.tooltipItems[0].label;
            return o == "GREENHOUSE GAS EMISSIONS" || o == "FRESHWATER EUTROPHICATION" ? "center" : o == "WATER USE" ? "left" : "right";
          },
          yAlign: (s) => {
            if (!s.tooltipItems.length)
              return;
            const o = s.tooltipItems[0].label;
            return o == "GREENHOUSE GAS EMISSIONS" ? "top" : o == "FRESHWATER EUTROPHICATION" ? "bottom" : "center";
          },
          callbacks: {
            labelPointStyle: (s) => ({
              pointStyle: "circle",
              rotation: 0
            }),
            label: (s) => String(s.parsed.r),
            labelColor: function(s) {
              if (s.dataset.borderColor)
                return {
                  backgroundColor: s.dataset.borderColor,
                  borderColor: s.dataset.borderColor,
                  borderWidth: 2,
                  borderDash: [2, 2],
                  borderRadius: 2
                };
            },
            title: (s) => (Array.isArray(s[0].label) ? s[0].label.join(" ") : s[0].label) + " RATING"
          }
        }
      },
      scales: {
        r: {
          beginAtZero: !0,
          max: 10,
          pointLabels: {
            font: {
              size: 12
            }
          },
          ticks: {
            showLabelBackdrop: !1,
            font: {
              size: 14
            },
            callback: (s, o, r) => s == "2" ? "Better" : s == "4" ? "↕" : s == "6" ? "Worse" : Number(s) % 2 == 0 ? "" : void 0
          }
        }
      }
    }, n = At(() => {
      const s = t.value.filter((a) => typeof a.Overall_ratings < "u");
      if (!s.length)
        return {};
      const o = Object.keys(s[0].Overall_ratings), r = s.sort(
        (a, l) => Number(a.Core_Data.Rank) - Number(l.Core_Data.Rank)
      ).map((a, l) => ({
        label: a.Core_Data.Material,
        data: o.map((c) => a.Overall_ratings[c]),
        backgroundColor: a.display.color + "00",
        borderColor: a.display.color,
        pointBackgroundColor: (c) => c.dataset.borderColor,
        pointRadius: 5
      }));
      return {
        labels: o.map((a) => a.match(/fossil/i) ? ["FOSSIL FUEL", "USAGE"] : a.toUpperCase()),
        datasets: r
      };
    });
    return (s, o) => K(n) && K(n).datasets ? (Y(), yi(K(X_), {
      key: 0,
      options: i,
      data: K(n)
    }, null, 8, ["data"])) : ti("", !0);
  }
}), lh = (e) => (Bo("data-v-a60c5b90"), e = e(), Go(), e), N0 = { class: "container" }, H0 = { class: "row g-5" }, z0 = { class: "col-sm-12 col-md-6 d-flex align-items-center justify-content-center" }, F0 = { class: "col-sm-12 col-md-6 text-start align-items-start justify-content-start" }, V0 = {
  key: 0,
  class: "mb-4"
}, B0 = /* @__PURE__ */ lh(() => /* @__PURE__ */ N("h6", { class: "lca-heading" }, "Objective", -1)), G0 = /* @__PURE__ */ lh(() => /* @__PURE__ */ N("h6", { class: "lca-heading" }, "Compare", -1)), W0 = { class: "list-unstyled" }, j0 = {
  class: "d-flex align-items-start my-2",
  style: { "line-height": "1.25" }
}, U0 = { class: "small text-muted mt-1" }, K0 = { class: "row" }, $0 = { class: "col-12" }, Y0 = /* @__PURE__ */ Is('<div class="container my-5" data-v-a60c5b90><div class="row justify-content-center" data-v-a60c5b90><div class="col-12 col-xl-8" data-v-a60c5b90><h2 class="text-light-emphasis" data-v-a60c5b90>In-depth Analysis</h2><p class="text-light-emphasis" data-v-a60c5b90>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur odio vitae aliquam suscipit. Praesent et ante molestie, mattis mauris nec, hendrerit justo. Mauris augue libero, congue nec purus in, egestas ullamcorper est.</p></div></div></div>', 1), X0 = { class: "tabs" }, q0 = { class: "nav nav-tabs report-tabs" }, Z0 = { class: "nav-item" }, J0 = ["href", "onClick"], Q0 = ["innerHTML"], t1 = { class: "lca-tab-content pt-5 pb-5" }, e1 = {
  key: 0,
  class: "container"
}, i1 = /* @__PURE__ */ qt({
  __name: "Report",
  props: {
    googleSheetId: null,
    googleApiKey: null
  },
  setup(e) {
    const t = e, i = _n(), { markets: n, market: s, materials: o, marketDetails: r, materialsForComparison: a } = mn(i), l = jt("fossil-fuel"), c = At(() => h.find((d) => d.key == l.value)), h = [
      {
        key: "ghg",
        title: "Greenhouse Gas Emissions",
        titleHTML: "Greenhouse Gas<br />Emissions",
        comparisonString: " emits <strong> $percent less Greenhouse Gass</strong> than the ",
        icon: hf,
        content: Jn
      },
      {
        key: "fossil-fuel",
        title: "Fossil Fuel Usage",
        titleHTML: "Fossil Fuel<br />Use",
        comparisonString: " uses <strong> $percent less fossil fuels</strong> than the ",
        icon: Zu,
        content: E0
      },
      {
        key: "water-use",
        title: "Water Use",
        titleHTML: "Water<br /> Use",
        comparisonString: " uses <strong> $percent less water</strong> than the ",
        icon: mf,
        content: Jn
      },
      {
        key: "freshwater-eutrophication",
        title: "Freshwater Eutrophication",
        titleHTML: "Freshwater<br />Eutrophication",
        comparisonString: " <strong>has $percent less impact on the freshwater supply</strong> than the ",
        icon: sf,
        content: Jn
      }
    ];
    return i.loadLcaData(String(t.googleSheetId), String(t.googleApiKey)), (d, u) => (Y(), et(vt, null, [
      N("div", N0, [
        N("div", H0, [
          N("div", z0, [
            yt(L0)
          ]),
          N("div", F0, [
            K(r) && K(r).Objective ? (Y(), et("div", V0, [
              B0,
              N("p", null, Rt(K(r).Objective), 1)
            ])) : ti("", !0),
            G0,
            N("ul", W0, [
              (Y(!0), et(vt, null, he(K(o), (f) => (Y(), et("li", j0, [
                yt(fc, {
                  style: oi({ marginRight: "10px", marginTop: "0.15em" }),
                  color: f.display.color,
                  size: "1em"
                }, null, 8, ["style", "color"]),
                N("div", null, [
                  N("div", null, Rt(f.Core_Data.Material), 1),
                  N("div", U0, Rt(f.Optional_Data["Description Summary"]), 1)
                ])
              ]))), 256))
            ]),
            yt(D0)
          ])
        ])
      ]),
      N("div", K0, [
        N("div", $0, [
          Y0,
          N("div", X0, [
            N("ul", q0, [
              (Y(), et(vt, null, he(h, (f) => N("li", Z0, [
                N("a", {
                  class: ms(["nav-link", { active: l.value == f.key }]),
                  href: `#${f.key}`,
                  onClick: Au((m) => l.value = f.key, ["prevent"])
                }, [
                  (Y(), yi(yr(f.icon))),
                  N("span", {
                    innerHTML: f.titleHTML
                  }, null, 8, Q0)
                ], 10, J0)
              ])), 64))
            ])
          ]),
          N("div", t1, [
            K(c).content ? (Y(), et("div", e1, [
              (Y(), yi(yr(K(c).content), { tab: K(c) }, null, 8, ["tab"]))
            ])) : ti("", !0)
          ])
        ])
      ])
    ], 64));
  }
});
const n1 = /* @__PURE__ */ fe(i1, [["__scopeId", "data-v-a60c5b90"]]), sl = ku();
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-proampac-component]").forEach((t) => {
    switch (t.dataset.proampacComponent) {
      case "proampac-lca-selector":
        Br(Wu).use(sl).mount(t);
        break;
      case "proampac-lca-report":
        Br(n1, t.dataset).use(sl).mount(t);
        break;
    }
  });
});
