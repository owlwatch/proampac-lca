var ch = Object.defineProperty;
var hh = (e, t, n) => t in e ? ch(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var K = (e, t, n) => (hh(e, typeof t != "symbol" ? t + "" : t, n), n);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    i(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerpolicy && (o.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? o.credentials = "include" : s.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function i(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function To(e, t) {
  const n = /* @__PURE__ */ Object.create(null), i = e.split(",");
  for (let s = 0; s < i.length; s++)
    n[i[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function rn(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = Ct(i) ? ph(i) : rn(i);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else {
    if (Ct(e))
      return e;
    if (ct(e))
      return e;
  }
}
const dh = /;(?![^(]*\))/g, uh = /:([^]+)/, fh = /\/\*.*?\*\//gs;
function ph(e) {
  const t = {};
  return e.replace(fh, "").split(dh).forEach((n) => {
    if (n) {
      const i = n.split(uh);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function ms(e) {
  let t = "";
  if (Ct(e))
    t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const i = ms(e[n]);
      i && (t += i + " ");
    }
  else if (ct(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const gh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mh = /* @__PURE__ */ To(gh);
function ol(e) {
  return !!e || e === "";
}
function _h(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = _s(e[i], t[i]);
  return n;
}
function _s(e, t) {
  if (e === t)
    return !0;
  let n = hr(e), i = hr(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = ni(e), i = ni(t), n || i)
    return e === t;
  if (n = W(e), i = W(t), n || i)
    return n && i ? _h(e, t) : !1;
  if (n = ct(e), i = ct(t), n || i) {
    if (!n || !i)
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
  return e.findIndex((n) => _s(n, t));
}
const It = (e) => Ct(e) ? e : e == null ? "" : W(e) || ct(e) && (e.toString === ll || !X(e.toString)) ? JSON.stringify(e, rl, 2) : String(e), rl = (e, t) => t && t.__v_isRef ? rl(e, t.value) : gn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [i, s]) => (n[`${i} =>`] = s, n), {})
} : xs(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ct(t) && !W(t) && !cl(t) ? String(t) : t, ht = {}, pn = [], ee = () => {
}, xh = () => !1, vh = /^on[^a-z]/, bs = (e) => vh.test(e), Po = (e) => e.startsWith("onUpdate:"), Dt = Object.assign, Ao = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yh = Object.prototype.hasOwnProperty, st = (e, t) => yh.call(e, t), W = Array.isArray, gn = (e) => gi(e) === "[object Map]", xs = (e) => gi(e) === "[object Set]", hr = (e) => gi(e) === "[object Date]", X = (e) => typeof e == "function", Ct = (e) => typeof e == "string", ni = (e) => typeof e == "symbol", ct = (e) => e !== null && typeof e == "object", al = (e) => ct(e) && X(e.then) && X(e.catch), ll = Object.prototype.toString, gi = (e) => ll.call(e), Oh = (e) => gi(e).slice(8, -1), cl = (e) => gi(e) === "[object Object]", Io = (e) => Ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Wi = /* @__PURE__ */ To(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Eh = /-(\w)/g, ue = vs((e) => e.replace(Eh, (t, n) => n ? n.toUpperCase() : "")), wh = /\B([A-Z])/g, In = vs((e) => e.replace(wh, "-$1").toLowerCase()), ys = vs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ws = vs((e) => e ? `on${ys(e)}` : ""), ii = (e, t) => !Object.is(e, t), ji = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Qi = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ro = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let dr;
const Ch = () => dr || (dr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Wt;
class hl {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = Wt, !t && Wt && (this.index = (Wt.scopes || (Wt.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Wt;
      try {
        return Wt = this, t();
      } finally {
        Wt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Wt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Wt = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
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
function Sh(e, t = Wt) {
  t && t.active && t.effects.push(e);
}
function Th() {
  return Wt;
}
function Ph(e) {
  Wt && Wt.cleanups.push(e);
}
const Mo = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, ul = (e) => (e.w & De) > 0, fl = (e) => (e.n & De) > 0, Ah = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= De;
}, Ih = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      ul(s) && !fl(s) ? s.delete(e) : t[n++] = s, s.w &= ~De, s.n &= ~De;
    }
    t.length = n;
  }
}, no = /* @__PURE__ */ new WeakMap();
let Wn = 0, De = 1;
const io = 30;
let Qt;
const Ze = Symbol(""), so = Symbol("");
class ko {
  constructor(t, n = null, i) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Sh(this, i);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Qt, n = Re;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Qt, Qt = this, Re = !0, De = 1 << ++Wn, Wn <= io ? Ah(this) : ur(this), this.fn();
    } finally {
      Wn <= io && Ih(this), De = 1 << --Wn, Qt = this.parent, Re = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Qt === this ? this.deferStop = !0 : this.active && (ur(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ur(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Re = !0;
const pl = [];
function Rn() {
  pl.push(Re), Re = !1;
}
function Mn() {
  const e = pl.pop();
  Re = e === void 0 ? !0 : e;
}
function $t(e, t, n) {
  if (Re && Qt) {
    let i = no.get(e);
    i || no.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || i.set(n, s = Mo()), gl(s);
  }
}
function gl(e, t) {
  let n = !1;
  Wn <= io ? fl(e) || (e.n |= De, n = !ul(e)) : n = !e.has(Qt), n && (e.add(Qt), Qt.deps.push(e));
}
function ve(e, t, n, i, s, o) {
  const r = no.get(e);
  if (!r)
    return;
  let a = [];
  if (t === "clear")
    a = [...r.values()];
  else if (n === "length" && W(e)) {
    const l = Ro(i);
    r.forEach((c, h) => {
      (h === "length" || h >= l) && a.push(c);
    });
  } else
    switch (n !== void 0 && a.push(r.get(n)), t) {
      case "add":
        W(e) ? Io(n) && a.push(r.get("length")) : (a.push(r.get(Ze)), gn(e) && a.push(r.get(so)));
        break;
      case "delete":
        W(e) || (a.push(r.get(Ze)), gn(e) && a.push(r.get(so)));
        break;
      case "set":
        gn(e) && a.push(r.get(Ze));
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
  const n = W(e) ? e : [...e];
  for (const i of n)
    i.computed && fr(i);
  for (const i of n)
    i.computed || fr(i);
}
function fr(e, t) {
  (e !== Qt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Rh = /* @__PURE__ */ To("__proto__,__v_isRef,__isVue"), ml = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ni)
), Mh = /* @__PURE__ */ Do(), kh = /* @__PURE__ */ Do(!1, !0), Dh = /* @__PURE__ */ Do(!0), pr = /* @__PURE__ */ Lh();
function Lh() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const i = it(this);
      for (let o = 0, r = this.length; o < r; o++)
        $t(i, "get", o + "");
      const s = i[t](...n);
      return s === -1 || s === !1 ? i[t](...n.map(it)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Rn();
      const i = it(this)[t].apply(this, n);
      return Mn(), i;
    };
  }), e;
}
function Do(e = !1, t = !1) {
  return function(i, s, o) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && o === (e ? t ? Jh : yl : t ? vl : xl).get(i))
      return i;
    const r = W(i);
    if (!e && r && st(pr, s))
      return Reflect.get(pr, s, o);
    const a = Reflect.get(i, s, o);
    return (ni(s) ? ml.has(s) : Rh(s)) || (e || $t(i, "get", s), t) ? a : pt(a) ? r && Io(s) ? a : a.value : ct(a) ? e ? Ol(a) : Es(a) : a;
  };
}
const Nh = /* @__PURE__ */ _l(), Hh = /* @__PURE__ */ _l(!0);
function _l(e = !1) {
  return function(n, i, s, o) {
    let r = n[i];
    if (vn(r) && pt(r) && !pt(s))
      return !1;
    if (!e && (!ts(s) && !vn(s) && (r = it(r), s = it(s)), !W(n) && pt(r) && !pt(s)))
      return r.value = s, !0;
    const a = W(n) && Io(i) ? Number(i) < n.length : st(n, i), l = Reflect.set(n, i, s, o);
    return n === it(o) && (a ? ii(s, r) && ve(n, "set", i, s) : ve(n, "add", i, s)), l;
  };
}
function zh(e, t) {
  const n = st(e, t);
  e[t];
  const i = Reflect.deleteProperty(e, t);
  return i && n && ve(e, "delete", t, void 0), i;
}
function Fh(e, t) {
  const n = Reflect.has(e, t);
  return (!ni(t) || !ml.has(t)) && $t(e, "has", t), n;
}
function Vh(e) {
  return $t(e, "iterate", W(e) ? "length" : Ze), Reflect.ownKeys(e);
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
}, Wh = /* @__PURE__ */ Dt({}, bl, {
  get: kh,
  set: Hh
}), Lo = (e) => e, Os = (e) => Reflect.getPrototypeOf(e);
function Oi(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = it(e), o = it(t);
  n || (t !== o && $t(s, "get", t), $t(s, "get", o));
  const { has: r } = Os(s), a = i ? Lo : n ? zo : si;
  if (r.call(s, t))
    return a(e.get(t));
  if (r.call(s, o))
    return a(e.get(o));
  e !== s && e.get(t);
}
function Ei(e, t = !1) {
  const n = this.__v_raw, i = it(n), s = it(e);
  return t || (e !== s && $t(i, "has", e), $t(i, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function wi(e, t = !1) {
  return e = e.__v_raw, !t && $t(it(e), "iterate", Ze), Reflect.get(e, "size", e);
}
function gr(e) {
  e = it(e);
  const t = it(this);
  return Os(t).has.call(t, e) || (t.add(e), ve(t, "add", e, e)), this;
}
function mr(e, t) {
  t = it(t);
  const n = it(this), { has: i, get: s } = Os(n);
  let o = i.call(n, e);
  o || (e = it(e), o = i.call(n, e));
  const r = s.call(n, e);
  return n.set(e, t), o ? ii(t, r) && ve(n, "set", e, t) : ve(n, "add", e, t), this;
}
function _r(e) {
  const t = it(this), { has: n, get: i } = Os(t);
  let s = n.call(t, e);
  s || (e = it(e), s = n.call(t, e)), i && i.call(t, e);
  const o = t.delete(e);
  return s && ve(t, "delete", e, void 0), o;
}
function br() {
  const e = it(this), t = e.size !== 0, n = e.clear();
  return t && ve(e, "clear", void 0, void 0), n;
}
function Ci(e, t) {
  return function(i, s) {
    const o = this, r = o.__v_raw, a = it(r), l = t ? Lo : e ? zo : si;
    return !e && $t(a, "iterate", Ze), r.forEach((c, h) => i.call(s, l(c), l(h), o));
  };
}
function Si(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, o = it(s), r = gn(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = s[e](...i), h = n ? Lo : t ? zo : si;
    return !t && $t(o, "iterate", l ? so : Ze), {
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
function jh() {
  const e = {
    get(o) {
      return Oi(this, o);
    },
    get size() {
      return wi(this);
    },
    has: Ei,
    add: gr,
    set: mr,
    delete: _r,
    clear: br,
    forEach: Ci(!1, !1)
  }, t = {
    get(o) {
      return Oi(this, o, !1, !0);
    },
    get size() {
      return wi(this);
    },
    has: Ei,
    add: gr,
    set: mr,
    delete: _r,
    clear: br,
    forEach: Ci(!1, !0)
  }, n = {
    get(o) {
      return Oi(this, o, !0);
    },
    get size() {
      return wi(this, !0);
    },
    has(o) {
      return Ei.call(this, o, !0);
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
    forEach: Ci(!0, !1)
  }, i = {
    get(o) {
      return Oi(this, o, !0, !0);
    },
    get size() {
      return wi(this, !0);
    },
    has(o) {
      return Ei.call(this, o, !0);
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
    forEach: Ci(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Si(o, !1, !1), n[o] = Si(o, !0, !1), t[o] = Si(o, !1, !0), i[o] = Si(o, !0, !0);
  }), [
    e,
    n,
    t,
    i
  ];
}
const [Gh, Uh, $h, Kh] = /* @__PURE__ */ jh();
function No(e, t) {
  const n = t ? e ? Kh : $h : e ? Uh : Gh;
  return (i, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(st(n, s) && s in i ? n : i, s, o);
}
const Yh = {
  get: /* @__PURE__ */ No(!1, !1)
}, Xh = {
  get: /* @__PURE__ */ No(!1, !0)
}, qh = {
  get: /* @__PURE__ */ No(!0, !1)
}, xl = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), Jh = /* @__PURE__ */ new WeakMap();
function Zh(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Zh(Oh(e));
}
function Es(e) {
  return vn(e) ? e : Ho(e, !1, bl, Yh, xl);
}
function td(e) {
  return Ho(e, !1, Wh, Xh, vl);
}
function Ol(e) {
  return Ho(e, !0, Bh, qh, yl);
}
function Ho(e, t, n, i, s) {
  if (!ct(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const r = Qh(e);
  if (r === 0)
    return e;
  const a = new Proxy(e, r === 2 ? i : n);
  return s.set(e, a), a;
}
function xe(e) {
  return vn(e) ? xe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function vn(e) {
  return !!(e && e.__v_isReadonly);
}
function ts(e) {
  return !!(e && e.__v_isShallow);
}
function ws(e) {
  return xe(e) || vn(e);
}
function it(e) {
  const t = e && e.__v_raw;
  return t ? it(t) : e;
}
function yn(e) {
  return Qi(e, "__v_skip", !0), e;
}
const si = (e) => ct(e) ? Es(e) : e, zo = (e) => ct(e) ? Ol(e) : e;
function El(e) {
  Re && Qt && (e = it(e), gl(e.dep || (e.dep = Mo())));
}
function wl(e, t) {
  e = it(e), e.dep && oo(e.dep);
}
function pt(e) {
  return !!(e && e.__v_isRef === !0);
}
function Gt(e) {
  return Sl(e, !1);
}
function Cl(e) {
  return Sl(e, !0);
}
function Sl(e, t) {
  return pt(e) ? e : new ed(e, t);
}
class ed {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : it(t), this._value = n ? t : si(t);
  }
  get value() {
    return El(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || ts(t) || vn(t);
    t = n ? t : it(t), ii(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : si(t), wl(this));
  }
}
function $(e) {
  return pt(e) ? e.value : e;
}
const nd = {
  get: (e, t, n) => $(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return pt(s) && !pt(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Tl(e) {
  return xe(e) ? e : new Proxy(e, nd);
}
function kn(e) {
  const t = W(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Pl(e, n);
  return t;
}
class id {
  constructor(t, n, i) {
    this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Pl(e, t, n) {
  const i = e[t];
  return pt(i) ? i : new id(e, t, n);
}
var Al;
class sd {
  constructor(t, n, i, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Al] = !1, this._dirty = !0, this.effect = new ko(t, () => {
      this._dirty || (this._dirty = !0, wl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = i;
  }
  get value() {
    const t = it(this);
    return El(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Al = "__v_isReadonly";
function od(e, t, n = !1) {
  let i, s;
  const o = X(e);
  return o ? (i = e, s = ee) : (i = e.get, s = e.set), new sd(i, s, o || !s, n);
}
function Me(e, t, n, i) {
  let s;
  try {
    s = i ? e(...i) : e();
  } catch (o) {
    Cs(o, t, n);
  }
  return s;
}
function ne(e, t, n, i) {
  if (X(e)) {
    const o = Me(e, t, n, i);
    return o && al(o) && o.catch((r) => {
      Cs(r, t, n);
    }), o;
  }
  const s = [];
  for (let o = 0; o < e.length; o++)
    s.push(ne(e[o], t, n, i));
  return s;
}
function Cs(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const r = t.proxy, a = n;
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
  rd(e, n, s, i);
}
function rd(e, t, n, i = !0) {
  console.error(e);
}
let oi = !1, ro = !1;
const Rt = [];
let ce = 0;
const mn = [];
let _e = null, Ye = 0;
const Il = /* @__PURE__ */ Promise.resolve();
let Fo = null;
function Rl(e) {
  const t = Fo || Il;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ad(e) {
  let t = ce + 1, n = Rt.length;
  for (; t < n; ) {
    const i = t + n >>> 1;
    ri(Rt[i]) < e ? t = i + 1 : n = i;
  }
  return t;
}
function Vo(e) {
  (!Rt.length || !Rt.includes(e, oi && e.allowRecurse ? ce + 1 : ce)) && (e.id == null ? Rt.push(e) : Rt.splice(ad(e.id), 0, e), Ml());
}
function Ml() {
  !oi && !ro && (ro = !0, Fo = Il.then(Dl));
}
function ld(e) {
  const t = Rt.indexOf(e);
  t > ce && Rt.splice(t, 1);
}
function cd(e) {
  W(e) ? mn.push(...e) : (!_e || !_e.includes(e, e.allowRecurse ? Ye + 1 : Ye)) && mn.push(e), Ml();
}
function xr(e, t = oi ? ce + 1 : 0) {
  for (; t < Rt.length; t++) {
    const n = Rt[t];
    n && n.pre && (Rt.splice(t, 1), t--, n());
  }
}
function kl(e) {
  if (mn.length) {
    const t = [...new Set(mn)];
    if (mn.length = 0, _e) {
      _e.push(...t);
      return;
    }
    for (_e = t, _e.sort((n, i) => ri(n) - ri(i)), Ye = 0; Ye < _e.length; Ye++)
      _e[Ye]();
    _e = null, Ye = 0;
  }
}
const ri = (e) => e.id == null ? 1 / 0 : e.id, hd = (e, t) => {
  const n = ri(e) - ri(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Dl(e) {
  ro = !1, oi = !0, Rt.sort(hd);
  const t = ee;
  try {
    for (ce = 0; ce < Rt.length; ce++) {
      const n = Rt[ce];
      n && n.active !== !1 && Me(
        n,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    ce = 0, Rt.length = 0, kl(), oi = !1, Fo = null, (Rt.length || mn.length) && Dl();
  }
}
function dd(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const i = e.vnode.props || ht;
  let s = n;
  const o = t.startsWith("update:"), r = o && t.slice(7);
  if (r && r in i) {
    const h = `${r === "modelValue" ? "model" : r}Modifiers`, { number: d, trim: u } = i[h] || ht;
    u && (s = n.map((f) => Ct(f) ? f.trim() : f)), d && (s = n.map(Ro));
  }
  let a, l = i[a = Ws(t)] || // also try camelCase event handler (#2249)
  i[a = Ws(ue(t))];
  !l && o && (l = i[a = Ws(In(t))]), l && ne(l, e, 6, s);
  const c = i[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, ne(c, e, 6, s);
  }
}
function Ll(e, t, n = !1) {
  const i = t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let r = {}, a = !1;
  if (!X(e)) {
    const l = (c) => {
      const h = Ll(c, t, !0);
      h && (a = !0, Dt(r, h));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (ct(e) && i.set(e, null), null) : (W(o) ? o.forEach((l) => r[l] = null) : Dt(r, o), ct(e) && i.set(e, r), r);
}
function Ss(e, t) {
  return !e || !bs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, In(t)) || st(e, t));
}
let Ut = null, Ts = null;
function es(e) {
  const t = Ut;
  return Ut = e, Ts = e && e.type.__scopeId || null, t;
}
function Bo(e) {
  Ts = e;
}
function Wo() {
  Ts = null;
}
function ud(e, t = Ut, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && Ar(-1);
    const o = es(t);
    let r;
    try {
      r = e(...s);
    } finally {
      es(o), i._d && Ar(1);
    }
    return r;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function js(e) {
  const { type: t, vnode: n, proxy: i, withProxy: s, props: o, propsOptions: [r], slots: a, attrs: l, emit: c, render: h, renderCache: d, data: u, setupState: f, ctx: m, inheritAttrs: p } = e;
  let g, x;
  const v = es(e);
  try {
    if (n.shapeFlag & 4) {
      const w = s || i;
      g = le(h.call(w, w, d, o, f, u, m)), x = l;
    } else {
      const w = t;
      g = le(w.length > 1 ? w(o, { attrs: l, slots: a, emit: c }) : w(
        o,
        null
        /* we know it doesn't need it */
      )), x = t.props ? l : fd(l);
    }
  } catch (w) {
    qn.length = 0, Cs(
      w,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), g = yt(sn);
  }
  let y = g;
  if (x && p !== !1) {
    const w = Object.keys(x), { shapeFlag: E } = y;
    w.length && E & 7 && (r && w.some(Po) && (x = pd(x, r)), y = En(y, x));
  }
  return n.dirs && (y = En(y), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (y.transition = n.transition), g = y, es(v), g;
}
const fd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || bs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, pd = (e, t) => {
  const n = {};
  for (const i in e)
    (!Po(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function gd(e, t, n) {
  const { props: i, children: s, component: o } = e, { props: r, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? vr(i, r, c) : !!r;
    if (l & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const u = h[d];
        if (r[u] !== i[u] && !Ss(c, u))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : i === r ? !1 : i ? r ? vr(i, r, c) : !0 : !!r;
  return !1;
}
function vr(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (t[o] !== e[o] && !Ss(n, o))
      return !0;
  }
  return !1;
}
function md({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const _d = (e) => e.__isSuspense;
function bd(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : cd(e);
}
function xd(e, t) {
  if (St) {
    let n = St.provides;
    const i = St.parent && St.parent.provides;
    i === n && (n = St.provides = Object.create(i)), n[e] = t;
  }
}
function Yn(e, t, n = !1) {
  const i = St || Ut;
  if (i) {
    const s = i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && X(t) ? t.call(i.proxy) : t;
  }
}
const Ti = {};
function Qe(e, t, n) {
  return Nl(e, t, n);
}
function Nl(e, t, { immediate: n, deep: i, flush: s, onTrack: o, onTrigger: r } = ht) {
  const a = St;
  let l, c = !1, h = !1;
  if (pt(e) ? (l = () => e.value, c = ts(e)) : xe(e) ? (l = () => e, i = !0) : W(e) ? (h = !0, c = e.some((y) => xe(y) || ts(y)), l = () => e.map((y) => {
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
      return d && d(), ne(e, a, 3, [u]);
  } : l = ee, t && i) {
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
  if (li)
    if (u = ee, t ? n && ne(t, a, 3, [
      l(),
      h ? [] : void 0,
      u
    ]) : l(), s === "sync") {
      const y = cu();
      f = y.__watcherHandles || (y.__watcherHandles = []);
    } else
      return ee;
  let m = h ? new Array(e.length).fill(Ti) : Ti;
  const p = () => {
    if (x.active)
      if (t) {
        const y = x.run();
        (i || c || (h ? y.some((w, E) => ii(w, m[E])) : ii(y, m))) && (d && d(), ne(t, a, 3, [
          y,
          // pass undefined as the old value when it's changed for the first time
          m === Ti ? void 0 : h && m[0] === Ti ? [] : m,
          u
        ]), m = y);
      } else
        x.run();
  };
  p.allowRecurse = !!t;
  let g;
  s === "sync" ? g = p : s === "post" ? g = () => Ht(p, a && a.suspense) : (p.pre = !0, a && (p.id = a.uid), g = () => Vo(p));
  const x = new ko(l, g);
  t ? n ? p() : m = x.run() : s === "post" ? Ht(x.run.bind(x), a && a.suspense) : x.run();
  const v = () => {
    x.stop(), a && a.scope && Ao(a.scope.effects, x);
  };
  return f && f.push(v), v;
}
function vd(e, t, n) {
  const i = this.proxy, s = Ct(e) ? e.includes(".") ? Hl(i, e) : () => i[e] : e.bind(i, i);
  let o;
  X(t) ? o = t : (o = t.handler, n = t);
  const r = St;
  wn(this);
  const a = Nl(s, o.bind(i), n);
  return r ? wn(r) : en(), a;
}
function Hl(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
function qe(e, t) {
  if (!ct(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), pt(e))
    qe(e.value, t);
  else if (W(e))
    for (let n = 0; n < e.length; n++)
      qe(e[n], t);
  else if (xs(e) || gn(e))
    e.forEach((n) => {
      qe(n, t);
    });
  else if (cl(e))
    for (const n in e)
      qe(e[n], t);
  return e;
}
function qt(e) {
  return X(e) ? { setup: e, name: e.name } : e;
}
const Gi = (e) => !!e.type.__asyncLoader, zl = (e) => e.type.__isKeepAlive;
function yd(e, t) {
  Fl(e, "a", t);
}
function Od(e, t) {
  Fl(e, "da", t);
}
function Fl(e, t, n = St) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Ps(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      zl(s.parent.vnode) && Ed(i, t, n, s), s = s.parent;
  }
}
function Ed(e, t, n, i) {
  const s = Ps(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Wl(() => {
    Ao(i[t], s);
  }, n);
}
function Ps(e, t, n = St, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      if (n.isUnmounted)
        return;
      Rn(), wn(n);
      const a = ne(t, n, e, r);
      return en(), Mn(), a;
    });
    return i ? s.unshift(o) : s.push(o), o;
  }
}
const ye = (e) => (t, n = St) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!li || e === "sp") && Ps(e, (...i) => t(...i), n)
), wd = ye(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), jo = ye(
  "m"
  /* LifecycleHooks.MOUNTED */
), Cd = ye(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Vl = ye(
  "u"
  /* LifecycleHooks.UPDATED */
), Bl = ye(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Wl = ye(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Sd = ye(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Td = ye(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Pd = ye(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Ad(e, t = St) {
  Ps("ec", e, t);
}
function jl(e, t) {
  const n = Ut;
  if (n === null)
    return e;
  const i = Ms(n) || n.proxy, s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, a, l, c = ht] = t[o];
    r && (X(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && qe(a), s.push({
      dir: r,
      instance: i,
      value: a,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Fe(e, t, n, i) {
  const s = e.dirs, o = t && t.dirs;
  for (let r = 0; r < s.length; r++) {
    const a = s[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[i];
    l && (Rn(), ne(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Mn());
  }
}
const Gl = "components", Ul = Symbol();
function yr(e) {
  return Ct(e) ? Id(Gl, e, !1) || e : e || Ul;
}
function Id(e, t, n = !0, i = !1) {
  const s = Ut || St;
  if (s) {
    const o = s.type;
    if (e === Gl) {
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
    return !r && i ? o : r;
  }
}
function Or(e, t) {
  return e && (e[t] || e[ue(t)] || e[ys(ue(t))]);
}
function he(e, t, n, i) {
  let s;
  const o = n && n[i];
  if (W(e) || Ct(e)) {
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
  return n && (n[i] = s), s;
}
const ao = (e) => e ? ic(e) ? Ms(e) || e.proxy : ao(e.parent) : null, Xn = (
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
    $options: (e) => Go(e),
    $forceUpdate: (e) => e.f || (e.f = () => Vo(e.update)),
    $nextTick: (e) => e.n || (e.n = Rl.bind(e.proxy)),
    $watch: (e) => vd.bind(e)
  })
), Gs = (e, t) => e !== ht && !e.__isScriptSetup && st(e, t), Rd = {
  get({ _: e }, t) {
    const { ctx: n, setupState: i, data: s, props: o, accessCache: r, type: a, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const f = r[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Gs(i, t))
          return r[t] = 1, i[t];
        if (s !== ht && st(s, t))
          return r[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && st(c, t)
        )
          return r[t] = 3, o[t];
        if (n !== ht && st(n, t))
          return r[t] = 4, n[t];
        lo && (r[t] = 0);
      }
    }
    const h = Xn[t];
    let d, u;
    if (h)
      return t === "$attrs" && $t(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ht && st(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      u = l.config.globalProperties, st(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: o } = e;
    return Gs(s, t) ? (s[t] = n, !0) : i !== ht && st(i, t) ? (i[t] = n, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: o } }, r) {
    let a;
    return !!n[r] || e !== ht && st(e, r) || Gs(t, r) || (a = o[0]) && st(a, r) || st(i, r) || st(Xn, r) || st(s.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let lo = !0;
function Md(e) {
  const t = Go(e), n = e.proxy, i = e.ctx;
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
    unmounted: w,
    render: E,
    renderTracked: k,
    renderTriggered: R,
    errorCaptured: P,
    serverPrefetch: H,
    // public API
    expose: V,
    inheritAttrs: B,
    // assets
    components: J,
    directives: ut,
    filters: gt
  } = t;
  if (c && kd(c, i, null, e.appContext.config.unwrapInjectedRef), r)
    for (const G in r) {
      const Z = r[G];
      X(Z) && (i[G] = Z.bind(n));
    }
  if (s) {
    const G = s.call(n, n);
    ct(G) && (e.data = Es(G));
  }
  if (lo = !0, o)
    for (const G in o) {
      const Z = o[G], ft = X(Z) ? Z.bind(n, n) : X(Z.get) ? Z.get.bind(n, n) : ee, Jt = !X(Z) && X(Z.set) ? Z.set.bind(n) : ee, Kt = Pt({
        get: ft,
        set: Jt
      });
      Object.defineProperty(i, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Kt.value,
        set: (Tt) => Kt.value = Tt
      });
    }
  if (a)
    for (const G in a)
      $l(a[G], i, n, G);
  if (l) {
    const G = X(l) ? l.call(n) : l;
    Reflect.ownKeys(G).forEach((Z) => {
      xd(Z, G[Z]);
    });
  }
  h && Er(
    h,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function q(G, Z) {
    W(Z) ? Z.forEach((ft) => G(ft.bind(n))) : Z && G(Z.bind(n));
  }
  if (q(wd, d), q(jo, u), q(Cd, f), q(Vl, m), q(yd, p), q(Od, g), q(Ad, P), q(Pd, k), q(Td, R), q(Bl, v), q(Wl, w), q(Sd, H), W(V))
    if (V.length) {
      const G = e.exposed || (e.exposed = {});
      V.forEach((Z) => {
        Object.defineProperty(G, Z, {
          get: () => n[Z],
          set: (ft) => n[Z] = ft
        });
      });
    } else
      e.exposed || (e.exposed = {});
  E && e.render === ee && (e.render = E), B != null && (e.inheritAttrs = B), J && (e.components = J), ut && (e.directives = ut);
}
function kd(e, t, n = ee, i = !1) {
  W(e) && (e = co(e));
  for (const s in e) {
    const o = e[s];
    let r;
    ct(o) ? "default" in o ? r = Yn(
      o.from || s,
      o.default,
      !0
      /* treat default function as factory */
    ) : r = Yn(o.from || s) : r = Yn(o), pt(r) && i ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (a) => r.value = a
    }) : t[s] = r;
  }
}
function Er(e, t, n) {
  ne(W(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function $l(e, t, n, i) {
  const s = i.includes(".") ? Hl(n, i) : () => n[i];
  if (Ct(e)) {
    const o = t[e];
    X(o) && Qe(s, o);
  } else if (X(e))
    Qe(s, e.bind(n));
  else if (ct(e))
    if (W(e))
      e.forEach((o) => $l(o, t, n, i));
    else {
      const o = X(e.handler) ? e.handler.bind(n) : t[e.handler];
      X(o) && Qe(s, o, e);
    }
}
function Go(e) {
  const t = e.type, { mixins: n, extends: i } = t, { mixins: s, optionsCache: o, config: { optionMergeStrategies: r } } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !s.length && !n && !i ? l = t : (l = {}, s.length && s.forEach((c) => ns(l, c, r, !0)), ns(l, t, r)), ct(t) && o.set(t, l), l;
}
function ns(e, t, n, i = !1) {
  const { mixins: s, extends: o } = t;
  o && ns(e, o, n, !0), s && s.forEach((r) => ns(e, r, n, !0));
  for (const r in t)
    if (!(i && r === "expose")) {
      const a = Dd[r] || n && n[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const Dd = {
  data: wr,
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
  provide: wr,
  inject: Ld
};
function wr(e, t) {
  return t ? e ? function() {
    return Dt(X(e) ? e.call(this, this) : e, X(t) ? t.call(this, this) : t);
  } : t : e;
}
function Ld(e, t) {
  return Ue(co(e), co(t));
}
function co(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
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
  const n = Dt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = kt(e[i], t[i]);
  return n;
}
function Hd(e, t, n, i = !1) {
  const s = {}, o = {};
  Qi(o, Is, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Kl(e, t, s, o);
  for (const r in e.propsOptions[0])
    r in s || (s[r] = void 0);
  n ? e.props = i ? s : td(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function zd(e, t, n, i) {
  const { props: s, attrs: o, vnode: { patchFlag: r } } = e, a = it(s), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let u = h[d];
        if (Ss(e.emitsOptions, u))
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
    Kl(e, t, s, o) && (c = !0);
    let h;
    for (const d in a)
      (!t || // for camelCase
      !st(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = In(d)) === d || !st(t, h))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[h] !== void 0) && (s[d] = ho(
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
function Kl(e, t, n, i) {
  const [s, o] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (Wi(l))
        continue;
      const c = t[l];
      let h;
      s && st(s, h = ue(l)) ? !o || !o.includes(h) ? n[h] = c : (a || (a = {}))[h] = c : Ss(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, r = !0);
    }
  if (o) {
    const l = it(n), c = a || ht;
    for (let h = 0; h < o.length; h++) {
      const d = o[h];
      n[d] = ho(s, l, d, c[d], e, !st(c, d));
    }
  }
  return r;
}
function ho(e, t, n, i, s, o) {
  const r = e[n];
  if (r != null) {
    const a = st(r, "default");
    if (a && i === void 0) {
      const l = r.default;
      if (r.type !== Function && X(l)) {
        const { propsDefaults: c } = s;
        n in c ? i = c[n] : (wn(s), i = c[n] = l.call(null, t), en());
      } else
        i = l;
    }
    r[
      0
      /* BooleanFlags.shouldCast */
    ] && (o && !a ? i = !1 : r[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (i === "" || i === In(n)) && (i = !0));
  }
  return i;
}
function Yl(e, t, n = !1) {
  const i = t.propsCache, s = i.get(e);
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
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!o && !l)
    return ct(e) && i.set(e, pn), pn;
  if (W(o))
    for (let h = 0; h < o.length; h++) {
      const d = ue(o[h]);
      Cr(d) && (r[d] = ht);
    }
  else if (o)
    for (const h in o) {
      const d = ue(h);
      if (Cr(d)) {
        const u = o[h], f = r[d] = W(u) || X(u) ? { type: u } : Object.assign({}, u);
        if (f) {
          const m = Pr(Boolean, f.type), p = Pr(String, f.type);
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
  return ct(e) && i.set(e, c), c;
}
function Cr(e) {
  return e[0] !== "$";
}
function Sr(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Tr(e, t) {
  return Sr(e) === Sr(t);
}
function Pr(e, t) {
  return W(t) ? t.findIndex((n) => Tr(n, e)) : X(t) && Tr(t, e) ? 0 : -1;
}
const Xl = (e) => e[0] === "_" || e === "$stable", Uo = (e) => W(e) ? e.map(le) : [le(e)], Fd = (e, t, n) => {
  if (t._n)
    return t;
  const i = ud((...s) => Uo(t(...s)), n);
  return i._c = !1, i;
}, ql = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (Xl(s))
      continue;
    const o = e[s];
    if (X(o))
      t[s] = Fd(s, o, i);
    else if (o != null) {
      const r = Uo(o);
      t[s] = () => r;
    }
  }
}, Jl = (e, t) => {
  const n = Uo(t);
  e.slots.default = () => n;
}, Vd = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = it(t), Qi(t, "_", n)) : ql(t, e.slots = {});
  } else
    e.slots = {}, t && Jl(e, t);
  Qi(e.slots, Is, 1);
}, Bd = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let o = !0, r = ht;
  if (i.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : (Dt(s, t), !n && a === 1 && delete s._) : (o = !t.$stable, ql(t, s)), r = t;
  } else
    t && (Jl(e, t), r = { default: 1 });
  if (o)
    for (const a in s)
      !Xl(a) && !(a in r) && delete s[a];
};
function Zl() {
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
let Wd = 0;
function jd(e, t) {
  return function(i, s = null) {
    X(i) || (i = Object.assign({}, i)), s != null && !ct(s) && (s = null);
    const o = Zl(), r = /* @__PURE__ */ new Set();
    let a = !1;
    const l = o.app = {
      _uid: Wd++,
      _component: i,
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
          const u = yt(i, s);
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
function uo(e, t, n, i, s = !1) {
  if (W(e)) {
    e.forEach((u, f) => uo(u, t && (W(t) ? t[f] : t), n, i, s));
    return;
  }
  if (Gi(i) && !s)
    return;
  const o = i.shapeFlag & 4 ? Ms(i.component) || i.component.proxy : i.el, r = s ? null : o, { i: a, r: l } = e, c = t && t.r, h = a.refs === ht ? a.refs = {} : a.refs, d = a.setupState;
  if (c != null && c !== l && (Ct(c) ? (h[c] = null, st(d, c) && (d[c] = null)) : pt(c) && (c.value = null)), X(l))
    Me(l, a, 12, [r, h]);
  else {
    const u = Ct(l), f = pt(l);
    if (u || f) {
      const m = () => {
        if (e.f) {
          const p = u ? st(d, l) ? d[l] : h[l] : l.value;
          s ? W(p) && Ao(p, o) : W(p) ? p.includes(o) || p.push(o) : u ? (h[l] = [o], st(d, l) && (d[l] = h[l])) : (l.value = [o], e.k && (h[e.k] = l.value));
        } else
          u ? (h[l] = r, st(d, l) && (d[l] = r)) : f && (l.value = r, e.k && (h[e.k] = r));
      };
      r ? (m.id = -1, Ht(m, n)) : m();
    }
  }
}
const Ht = bd;
function Gd(e) {
  return Ud(e);
}
function Ud(e, t) {
  const n = Ch();
  n.__VUE__ = !0;
  const { insert: i, remove: s, patchProp: o, createElement: r, createText: a, createComment: l, setText: c, setElementText: h, parentNode: d, nextSibling: u, setScopeId: f = ee, insertStaticContent: m } = e, p = (_, b, O, S = null, C = null, I = null, D = !1, A = null, M = !!b.dynamicChildren) => {
    if (_ === b)
      return;
    _ && !Nn(_, b) && (S = yi(_), Tt(_, C, I, !0), _ = null), b.patchFlag === -2 && (M = !1, b.dynamicChildren = null);
    const { type: T, ref: z, shapeFlag: L } = b;
    switch (T) {
      case As:
        g(_, b, O, S);
        break;
      case sn:
        x(_, b, O, S);
        break;
      case Ui:
        _ == null && v(b, O, S, D);
        break;
      case vt:
        J(_, b, O, S, C, I, D, A, M);
        break;
      default:
        L & 1 ? E(_, b, O, S, C, I, D, A, M) : L & 6 ? ut(_, b, O, S, C, I, D, A, M) : (L & 64 || L & 128) && T.process(_, b, O, S, C, I, D, A, M, ln);
    }
    z != null && C && uo(z, _ && _.ref, I, b || _, !b);
  }, g = (_, b, O, S) => {
    if (_ == null)
      i(b.el = a(b.children), O, S);
    else {
      const C = b.el = _.el;
      b.children !== _.children && c(C, b.children);
    }
  }, x = (_, b, O, S) => {
    _ == null ? i(b.el = l(b.children || ""), O, S) : b.el = _.el;
  }, v = (_, b, O, S) => {
    [_.el, _.anchor] = m(_.children, b, O, S, _.el, _.anchor);
  }, y = ({ el: _, anchor: b }, O, S) => {
    let C;
    for (; _ && _ !== b; )
      C = u(_), i(_, O, S), _ = C;
    i(b, O, S);
  }, w = ({ el: _, anchor: b }) => {
    let O;
    for (; _ && _ !== b; )
      O = u(_), s(_), _ = O;
    s(b);
  }, E = (_, b, O, S, C, I, D, A, M) => {
    D = D || b.type === "svg", _ == null ? k(b, O, S, C, I, D, A, M) : H(_, b, C, I, D, A, M);
  }, k = (_, b, O, S, C, I, D, A) => {
    let M, T;
    const { type: z, props: L, shapeFlag: F, transition: U, dirs: tt } = _;
    if (M = _.el = r(_.type, I, L && L.is, L), F & 8 ? h(M, _.children) : F & 16 && P(_.children, M, null, S, C, I && z !== "foreignObject", D, A), tt && Fe(_, null, S, "created"), L) {
      for (const rt in L)
        rt !== "value" && !Wi(rt) && o(M, rt, null, L[rt], I, _.children, S, C, Mt);
      "value" in L && o(M, "value", null, L.value), (T = L.onVnodeBeforeMount) && oe(T, S, _);
    }
    R(M, _, _.scopeId, D, S), tt && Fe(_, null, S, "beforeMount");
    const at = (!C || C && !C.pendingBranch) && U && !U.persisted;
    at && U.beforeEnter(M), i(M, b, O), ((T = L && L.onVnodeMounted) || at || tt) && Ht(() => {
      T && oe(T, S, _), at && U.enter(M), tt && Fe(_, null, S, "mounted");
    }, C);
  }, R = (_, b, O, S, C) => {
    if (O && f(_, O), S)
      for (let I = 0; I < S.length; I++)
        f(_, S[I]);
    if (C) {
      let I = C.subTree;
      if (b === I) {
        const D = C.vnode;
        R(_, D, D.scopeId, D.slotScopeIds, C.parent);
      }
    }
  }, P = (_, b, O, S, C, I, D, A, M = 0) => {
    for (let T = M; T < _.length; T++) {
      const z = _[T] = A ? Ce(_[T]) : le(_[T]);
      p(null, z, b, O, S, C, I, D, A);
    }
  }, H = (_, b, O, S, C, I, D) => {
    const A = b.el = _.el;
    let { patchFlag: M, dynamicChildren: T, dirs: z } = b;
    M |= _.patchFlag & 16;
    const L = _.props || ht, F = b.props || ht;
    let U;
    O && Ve(O, !1), (U = F.onVnodeBeforeUpdate) && oe(U, O, b, _), z && Fe(b, _, O, "beforeUpdate"), O && Ve(O, !0);
    const tt = C && b.type !== "foreignObject";
    if (T ? V(_.dynamicChildren, T, A, O, S, tt, I) : D || Z(_, b, A, null, O, S, tt, I, !1), M > 0) {
      if (M & 16)
        B(A, b, L, F, O, S, C);
      else if (M & 2 && L.class !== F.class && o(A, "class", null, F.class, C), M & 4 && o(A, "style", L.style, F.style, C), M & 8) {
        const at = b.dynamicProps;
        for (let rt = 0; rt < at.length; rt++) {
          const wt = at[rt], Zt = L[wt], cn = F[wt];
          (cn !== Zt || wt === "value") && o(A, wt, Zt, cn, C, _.children, O, S, Mt);
        }
      }
      M & 1 && _.children !== b.children && h(A, b.children);
    } else
      !D && T == null && B(A, b, L, F, O, S, C);
    ((U = F.onVnodeUpdated) || z) && Ht(() => {
      U && oe(U, O, b, _), z && Fe(b, _, O, "updated");
    }, S);
  }, V = (_, b, O, S, C, I, D) => {
    for (let A = 0; A < b.length; A++) {
      const M = _[A], T = b[A], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === vt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Nn(M, T) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 70) ? d(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      p(M, T, z, null, S, C, I, D, !0);
    }
  }, B = (_, b, O, S, C, I, D) => {
    if (O !== S) {
      if (O !== ht)
        for (const A in O)
          !Wi(A) && !(A in S) && o(_, A, O[A], null, D, b.children, C, I, Mt);
      for (const A in S) {
        if (Wi(A))
          continue;
        const M = S[A], T = O[A];
        M !== T && A !== "value" && o(_, A, T, M, D, b.children, C, I, Mt);
      }
      "value" in S && o(_, "value", O.value, S.value);
    }
  }, J = (_, b, O, S, C, I, D, A, M) => {
    const T = b.el = _ ? _.el : a(""), z = b.anchor = _ ? _.anchor : a("");
    let { patchFlag: L, dynamicChildren: F, slotScopeIds: U } = b;
    U && (A = A ? A.concat(U) : U), _ == null ? (i(T, O, S), i(z, O, S), P(b.children, O, z, C, I, D, A, M)) : L > 0 && L & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (V(_.dynamicChildren, F, O, C, I, D, A), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || C && b === C.subTree) && Ql(
      _,
      b,
      !0
      /* shallow */
    )) : Z(_, b, O, z, C, I, D, A, M);
  }, ut = (_, b, O, S, C, I, D, A, M) => {
    b.slotScopeIds = A, _ == null ? b.shapeFlag & 512 ? C.ctx.activate(b, O, S, D, M) : gt(b, O, S, C, I, D, M) : j(_, b, M);
  }, gt = (_, b, O, S, C, I, D) => {
    const A = _.component = tu(_, S, C);
    if (zl(_) && (A.ctx.renderer = ln), nu(A), A.asyncDep) {
      if (C && C.registerDep(A, q), !_.el) {
        const M = A.subTree = yt(sn);
        x(null, M, b, O);
      }
      return;
    }
    q(A, _, b, O, C, I, D);
  }, j = (_, b, O) => {
    const S = b.component = _.component;
    if (gd(_, b, O))
      if (S.asyncDep && !S.asyncResolved) {
        G(S, b, O);
        return;
      } else
        S.next = b, ld(S.update), S.update();
    else
      b.el = _.el, S.vnode = b;
  }, q = (_, b, O, S, C, I, D) => {
    const A = () => {
      if (_.isMounted) {
        let { next: z, bu: L, u: F, parent: U, vnode: tt } = _, at = z, rt;
        Ve(_, !1), z ? (z.el = tt.el, G(_, z, D)) : z = tt, L && ji(L), (rt = z.props && z.props.onVnodeBeforeUpdate) && oe(rt, U, z, tt), Ve(_, !0);
        const wt = js(_), Zt = _.subTree;
        _.subTree = wt, p(
          Zt,
          wt,
          // parent may have changed if it's in a teleport
          d(Zt.el),
          // anchor may have changed if it's in a fragment
          yi(Zt),
          _,
          C,
          I
        ), z.el = wt.el, at === null && md(_, wt.el), F && Ht(F, C), (rt = z.props && z.props.onVnodeUpdated) && Ht(() => oe(rt, U, z, tt), C);
      } else {
        let z;
        const { el: L, props: F } = b, { bm: U, m: tt, parent: at } = _, rt = Gi(b);
        if (Ve(_, !1), U && ji(U), !rt && (z = F && F.onVnodeBeforeMount) && oe(z, at, b), Ve(_, !0), L && Bs) {
          const wt = () => {
            _.subTree = js(_), Bs(L, _.subTree, _, C, null);
          };
          rt ? b.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !_.isUnmounted && wt()
          ) : wt();
        } else {
          const wt = _.subTree = js(_);
          p(null, wt, O, S, _, C, I), b.el = wt.el;
        }
        if (tt && Ht(tt, C), !rt && (z = F && F.onVnodeMounted)) {
          const wt = b;
          Ht(() => oe(z, at, wt), C);
        }
        (b.shapeFlag & 256 || at && Gi(at.vnode) && at.vnode.shapeFlag & 256) && _.a && Ht(_.a, C), _.isMounted = !0, b = O = S = null;
      }
    }, M = _.effect = new ko(
      A,
      () => Vo(T),
      _.scope
      // track it in component's effect scope
    ), T = _.update = () => M.run();
    T.id = _.uid, Ve(_, !0), T();
  }, G = (_, b, O) => {
    b.component = _;
    const S = _.vnode.props;
    _.vnode = b, _.next = null, zd(_, b.props, S, O), Bd(_, b.children, O), Rn(), xr(), Mn();
  }, Z = (_, b, O, S, C, I, D, A, M = !1) => {
    const T = _ && _.children, z = _ ? _.shapeFlag : 0, L = b.children, { patchFlag: F, shapeFlag: U } = b;
    if (F > 0) {
      if (F & 128) {
        Jt(T, L, O, S, C, I, D, A, M);
        return;
      } else if (F & 256) {
        ft(T, L, O, S, C, I, D, A, M);
        return;
      }
    }
    U & 8 ? (z & 16 && Mt(T, C, I), L !== T && h(O, L)) : z & 16 ? U & 16 ? Jt(T, L, O, S, C, I, D, A, M) : Mt(T, C, I, !0) : (z & 8 && h(O, ""), U & 16 && P(L, O, S, C, I, D, A, M));
  }, ft = (_, b, O, S, C, I, D, A, M) => {
    _ = _ || pn, b = b || pn;
    const T = _.length, z = b.length, L = Math.min(T, z);
    let F;
    for (F = 0; F < L; F++) {
      const U = b[F] = M ? Ce(b[F]) : le(b[F]);
      p(_[F], U, O, null, C, I, D, A, M);
    }
    T > z ? Mt(_, C, I, !0, !1, L) : P(b, O, S, C, I, D, A, M, L);
  }, Jt = (_, b, O, S, C, I, D, A, M) => {
    let T = 0;
    const z = b.length;
    let L = _.length - 1, F = z - 1;
    for (; T <= L && T <= F; ) {
      const U = _[T], tt = b[T] = M ? Ce(b[T]) : le(b[T]);
      if (Nn(U, tt))
        p(U, tt, O, null, C, I, D, A, M);
      else
        break;
      T++;
    }
    for (; T <= L && T <= F; ) {
      const U = _[L], tt = b[F] = M ? Ce(b[F]) : le(b[F]);
      if (Nn(U, tt))
        p(U, tt, O, null, C, I, D, A, M);
      else
        break;
      L--, F--;
    }
    if (T > L) {
      if (T <= F) {
        const U = F + 1, tt = U < z ? b[U].el : S;
        for (; T <= F; )
          p(null, b[T] = M ? Ce(b[T]) : le(b[T]), O, tt, C, I, D, A, M), T++;
      }
    } else if (T > F)
      for (; T <= L; )
        Tt(_[T], C, I, !0), T++;
    else {
      const U = T, tt = T, at = /* @__PURE__ */ new Map();
      for (T = tt; T <= F; T++) {
        const Ft = b[T] = M ? Ce(b[T]) : le(b[T]);
        Ft.key != null && at.set(Ft.key, T);
      }
      let rt, wt = 0;
      const Zt = F - tt + 1;
      let cn = !1, ar = 0;
      const Ln = new Array(Zt);
      for (T = 0; T < Zt; T++)
        Ln[T] = 0;
      for (T = U; T <= L; T++) {
        const Ft = _[T];
        if (wt >= Zt) {
          Tt(Ft, C, I, !0);
          continue;
        }
        let se;
        if (Ft.key != null)
          se = at.get(Ft.key);
        else
          for (rt = tt; rt <= F; rt++)
            if (Ln[rt - tt] === 0 && Nn(Ft, b[rt])) {
              se = rt;
              break;
            }
        se === void 0 ? Tt(Ft, C, I, !0) : (Ln[se - tt] = T + 1, se >= ar ? ar = se : cn = !0, p(Ft, b[se], O, null, C, I, D, A, M), wt++);
      }
      const lr = cn ? $d(Ln) : pn;
      for (rt = lr.length - 1, T = Zt - 1; T >= 0; T--) {
        const Ft = tt + T, se = b[Ft], cr = Ft + 1 < z ? b[Ft + 1].el : S;
        Ln[T] === 0 ? p(null, se, O, cr, C, I, D, A, M) : cn && (rt < 0 || T !== lr[rt] ? Kt(
          se,
          O,
          cr,
          2
          /* MoveType.REORDER */
        ) : rt--);
      }
    }
  }, Kt = (_, b, O, S, C = null) => {
    const { el: I, type: D, transition: A, children: M, shapeFlag: T } = _;
    if (T & 6) {
      Kt(_.component.subTree, b, O, S);
      return;
    }
    if (T & 128) {
      _.suspense.move(b, O, S);
      return;
    }
    if (T & 64) {
      D.move(_, b, O, ln);
      return;
    }
    if (D === vt) {
      i(I, b, O);
      for (let L = 0; L < M.length; L++)
        Kt(M[L], b, O, S);
      i(_.anchor, b, O);
      return;
    }
    if (D === Ui) {
      y(_, b, O);
      return;
    }
    if (S !== 2 && T & 1 && A)
      if (S === 0)
        A.beforeEnter(I), i(I, b, O), Ht(() => A.enter(I), C);
      else {
        const { leave: L, delayLeave: F, afterLeave: U } = A, tt = () => i(I, b, O), at = () => {
          L(I, () => {
            tt(), U && U();
          });
        };
        F ? F(I, tt, at) : at();
      }
    else
      i(I, b, O);
  }, Tt = (_, b, O, S = !1, C = !1) => {
    const { type: I, props: D, ref: A, children: M, dynamicChildren: T, shapeFlag: z, patchFlag: L, dirs: F } = _;
    if (A != null && uo(A, null, O, _, !0), z & 256) {
      b.ctx.deactivate(_);
      return;
    }
    const U = z & 1 && F, tt = !Gi(_);
    let at;
    if (tt && (at = D && D.onVnodeBeforeUnmount) && oe(at, b, _), z & 6)
      ze(_.component, O, S);
    else {
      if (z & 128) {
        _.suspense.unmount(O, S);
        return;
      }
      U && Fe(_, null, b, "beforeUnmount"), z & 64 ? _.type.remove(_, b, O, C, ln, S) : T && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== vt || L > 0 && L & 64) ? Mt(T, b, O, !1, !0) : (I === vt && L & 384 || !C && z & 16) && Mt(M, b, O), S && Oe(_);
    }
    (tt && (at = D && D.onVnodeUnmounted) || U) && Ht(() => {
      at && oe(at, b, _), U && Fe(_, null, b, "unmounted");
    }, O);
  }, Oe = (_) => {
    const { type: b, el: O, anchor: S, transition: C } = _;
    if (b === vt) {
      He(O, S);
      return;
    }
    if (b === Ui) {
      w(_);
      return;
    }
    const I = () => {
      s(O), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (_.shapeFlag & 1 && C && !C.persisted) {
      const { leave: D, delayLeave: A } = C, M = () => D(O, I);
      A ? A(_.el, I, M) : M();
    } else
      I();
  }, He = (_, b) => {
    let O;
    for (; _ !== b; )
      O = u(_), s(_), _ = O;
    s(b);
  }, ze = (_, b, O) => {
    const { bum: S, scope: C, update: I, subTree: D, um: A } = _;
    S && ji(S), C.stop(), I && (I.active = !1, Tt(D, _, b, O)), A && Ht(A, b), Ht(() => {
      _.isUnmounted = !0;
    }, b), b && b.pendingBranch && !b.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve());
  }, Mt = (_, b, O, S = !1, C = !1, I = 0) => {
    for (let D = I; D < _.length; D++)
      Tt(_[D], b, O, S, C);
  }, yi = (_) => _.shapeFlag & 6 ? yi(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : u(_.anchor || _.el), rr = (_, b, O) => {
    _ == null ? b._vnode && Tt(b._vnode, null, null, !0) : p(b._vnode || null, _, b, null, null, null, O), xr(), kl(), b._vnode = _;
  }, ln = {
    p,
    um: Tt,
    m: Kt,
    r: Oe,
    mt: gt,
    mc: P,
    pc: Z,
    pbc: V,
    n: yi,
    o: e
  };
  let Vs, Bs;
  return t && ([Vs, Bs] = t(ln)), {
    render: rr,
    hydrate: Vs,
    createApp: jd(rr, Vs)
  };
}
function Ve({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ql(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (W(i) && W(s))
    for (let o = 0; o < i.length; o++) {
      const r = i[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = Ce(s[o]), a.el = r.el), n || Ql(r, a)), a.type === As && (a.el = r.el);
    }
}
function $d(e) {
  const t = e.slice(), n = [0];
  let i, s, o, r, a;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const c = e[i];
    if (c !== 0) {
      if (s = n[n.length - 1], e[s] < c) {
        t[i] = s, n.push(i);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        a = o + r >> 1, e[n[a]] < c ? o = a + 1 : r = a;
      c < e[n[o]] && (o > 0 && (t[i] = n[o - 1]), n[o] = i);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
const Kd = (e) => e.__isTeleport, vt = Symbol(void 0), As = Symbol(void 0), sn = Symbol(void 0), Ui = Symbol(void 0), qn = [];
let te = null;
function Y(e = !1) {
  qn.push(te = e ? null : []);
}
function Yd() {
  qn.pop(), te = qn[qn.length - 1] || null;
}
let ai = 1;
function Ar(e) {
  ai += e;
}
function tc(e) {
  return e.dynamicChildren = ai > 0 ? te || pn : null, Yd(), ai > 0 && te && te.push(e), e;
}
function et(e, t, n, i, s, o) {
  return tc(N(
    e,
    t,
    n,
    i,
    s,
    o,
    !0
    /* isBlock */
  ));
}
function On(e, t, n, i, s) {
  return tc(yt(
    e,
    t,
    n,
    i,
    s,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function fo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Nn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Is = "__vInternal", ec = ({ key: e }) => e ?? null, $i = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Ct(e) || pt(e) || X(e) ? { i: Ut, r: e, k: t, f: !!n } : e : null;
function N(e, t = null, n = null, i = 0, s = null, o = e === vt ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ec(t),
    ref: t && $i(t),
    scopeId: Ts,
    slotScopeIds: null,
    children: n,
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
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ut
  };
  return a ? ($o(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ct(n) ? 8 : 16), ai > 0 && // avoid a block node from tracking itself
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
function Xd(e, t = null, n = null, i = 0, s = null, o = !1) {
  if ((!e || e === Ul) && (e = sn), fo(e)) {
    const a = En(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $o(a, n), ai > 0 && !o && te && (a.shapeFlag & 6 ? te[te.indexOf(e)] = a : te.push(a)), a.patchFlag |= -2, a;
  }
  if (au(e) && (e = e.__vccOpts), t) {
    t = qd(t);
    let { class: a, style: l } = t;
    a && !Ct(a) && (t.class = ms(a)), ct(l) && (ws(l) && !W(l) && (l = Dt({}, l)), t.style = rn(l));
  }
  const r = Ct(e) ? 1 : _d(e) ? 128 : Kd(e) ? 64 : ct(e) ? 4 : X(e) ? 2 : 0;
  return N(e, t, n, i, s, r, o, !0);
}
function qd(e) {
  return e ? ws(e) || Is in e ? Dt({}, e) : e : null;
}
function En(e, t, n = !1) {
  const { props: i, ref: s, patchFlag: o, children: r } = e, a = t ? Jd(i || {}, t) : i;
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
      n && s ? W(s) ? s.concat($i(t)) : [s, $i(t)] : $i(t)
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
    ssContent: e.ssContent && En(e.ssContent),
    ssFallback: e.ssFallback && En(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function nc(e = " ", t = 0) {
  return yt(As, null, e, t);
}
function Rs(e, t) {
  const n = yt(Ui, null, e);
  return n.staticCount = t, n;
}
function tn(e = "", t = !1) {
  return t ? (Y(), On(sn, null, e)) : yt(sn, null, e);
}
function le(e) {
  return e == null || typeof e == "boolean" ? yt(sn) : W(e) ? yt(
    vt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ce(e) : yt(As, null, String(e));
}
function Ce(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : En(e);
}
function $o(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (W(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), $o(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Is in t) ? t._ctx = Ut : s === 3 && Ut && (Ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    X(t) ? (t = { default: t, _ctx: Ut }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [nc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Jd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = ms([t.class, i.class]));
      else if (s === "style")
        t.style = rn([t.style, i.style]);
      else if (bs(s)) {
        const o = t[s], r = i[s];
        r && o !== r && !(W(o) && o.includes(r)) && (t[s] = o ? [].concat(o, r) : r);
      } else
        s !== "" && (t[s] = i[s]);
  }
  return t;
}
function oe(e, t, n, i = null) {
  ne(e, t, 7, [
    n,
    i
  ]);
}
const Zd = Zl();
let Qd = 0;
function tu(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || Zd, o = {
    uid: Qd++,
    vnode: e,
    type: i,
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
    propsOptions: Yl(i, s),
    emitsOptions: Ll(i, s),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: ht,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
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
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
let St = null;
const eu = () => St || Ut, wn = (e) => {
  St = e, e.scope.on();
}, en = () => {
  St && St.scope.off(), St = null;
};
function ic(e) {
  return e.vnode.shapeFlag & 4;
}
let li = !1;
function nu(e, t = !1) {
  li = t;
  const { props: n, children: i } = e.vnode, s = ic(e);
  Hd(e, n, s, t), Vd(e, i);
  const o = s ? iu(e, t) : void 0;
  return li = !1, o;
}
function iu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = yn(new Proxy(e.ctx, Rd));
  const { setup: i } = n;
  if (i) {
    const s = e.setupContext = i.length > 1 ? ou(e) : null;
    wn(e), Rn();
    const o = Me(i, e, 0, [e.props, s]);
    if (Mn(), en(), al(o)) {
      if (o.then(en, en), t)
        return o.then((r) => {
          Ir(e, r, t);
        }).catch((r) => {
          Cs(
            r,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = o;
    } else
      Ir(e, o, t);
  } else
    sc(e, t);
}
function Ir(e, t, n) {
  X(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ct(t) && (e.setupState = Tl(t)), sc(e, n);
}
let Rr;
function sc(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Rr && !i.render) {
      const s = i.template || Go(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: l } = i, c = Dt(Dt({
          isCustomElement: o,
          delimiters: a
        }, r), l);
        i.render = Rr(s, c);
      }
    }
    e.render = i.render || ee;
  }
  wn(e), Rn(), Md(e), Mn(), en();
}
function su(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return $t(e, "get", "$attrs"), t[n];
    }
  });
}
function ou(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = su(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ms(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Tl(yn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Xn)
          return Xn[n](e);
      },
      has(t, n) {
        return n in t || n in Xn;
      }
    }));
}
function ru(e, t = !0) {
  return X(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function au(e) {
  return X(e) && "__vccOpts" in e;
}
const Pt = (e, t) => od(e, t, li);
function oc(e, t, n) {
  const i = arguments.length;
  return i === 2 ? ct(t) && !W(t) ? fo(t) ? yt(e, null, [t]) : yt(e, t) : yt(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && fo(n) && (n = [n]), yt(e, t, n));
}
const lu = Symbol(""), cu = () => Yn(lu), rc = "3.2.45", hu = "http://www.w3.org/2000/svg", Xe = typeof document < "u" ? document : null, Mr = Xe && /* @__PURE__ */ Xe.createElement("template"), du = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t ? Xe.createElementNS(hu, e) : Xe.createElement(e, n ? { is: n } : void 0);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
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
  insertStaticContent(e, t, n, i, s, o) {
    const r = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      Mr.innerHTML = i ? `<svg>${e}</svg>` : e;
      const a = Mr.content;
      if (i) {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function uu(e, t, n) {
  const i = e._vtc;
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function fu(e, t, n) {
  const i = e.style, s = Ct(n);
  if (n && !s) {
    for (const o in n)
      po(i, o, n[o]);
    if (t && !Ct(t))
      for (const o in t)
        n[o] == null && po(i, o, "");
  } else {
    const o = i.display;
    s ? t !== n && (i.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (i.display = o);
  }
}
const kr = /\s*!important$/;
function po(e, t, n) {
  if (W(n))
    n.forEach((i) => po(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = pu(e, t);
    kr.test(n) ? e.setProperty(In(i), n.replace(kr, ""), "important") : e[i] = n;
  }
}
const Dr = ["Webkit", "Moz", "ms"], Us = {};
function pu(e, t) {
  const n = Us[t];
  if (n)
    return n;
  let i = ue(t);
  if (i !== "filter" && i in e)
    return Us[t] = i;
  i = ys(i);
  for (let s = 0; s < Dr.length; s++) {
    const o = Dr[s] + i;
    if (o in e)
      return Us[t] = o;
  }
  return t;
}
const Lr = "http://www.w3.org/1999/xlink";
function gu(e, t, n, i, s) {
  if (i && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Lr, t.slice(6, t.length)) : e.setAttributeNS(Lr, t, n);
  else {
    const o = mh(t);
    n == null || o && !ol(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function mu(e, t, n, i, s, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    i && r(i, s, o), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const l = n ?? "";
    (e.value !== l || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = ol(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(t);
}
function ac(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function _u(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
function bu(e, t, n, i, s = null) {
  const o = e._vei || (e._vei = {}), r = o[t];
  if (i && r)
    r.value = i;
  else {
    const [a, l] = xu(t);
    if (i) {
      const c = o[t] = Ou(i, s);
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
    let i;
    for (; i = e.match(Nr); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : In(e.slice(2)), t];
}
let $s = 0;
const vu = /* @__PURE__ */ Promise.resolve(), yu = () => $s || (vu.then(() => $s = 0), $s = Date.now());
function Ou(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    ne(Eu(i, n.value), t, 5, [i]);
  };
  return n.value = e, n.attached = yu(), n;
}
function Eu(e, t) {
  if (W(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((i) => (s) => !s._stopped && i && i(s));
  } else
    return t;
}
const Hr = /^on[a-z]/, wu = (e, t, n, i, s = !1, o, r, a, l) => {
  t === "class" ? uu(e, i, s) : t === "style" ? fu(e, n, i) : bs(t) ? Po(t) || bu(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cu(e, t, i, s)) ? mu(e, t, i, o, r, a, l) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), gu(e, t, i, s));
};
function Cu(e, t, n, i) {
  return i ? !!(t === "innerHTML" || t === "textContent" || t in e && Hr.test(t) && X(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Hr.test(t) && Ct(n) ? !1 : t in e;
}
const zr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return W(t) ? (n) => ji(t, n) : t;
}, lc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    const s = xs(t);
    ac(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (r) => r.selected).map((r) => n ? Ro(is(r)) : is(r));
      e._assign(e.multiple ? s ? new Set(o) : o : o[0]);
    }), e._assign = zr(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Fr(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = zr(n);
  },
  updated(e, { value: t }) {
    Fr(e, t);
  }
};
function Fr(e, t) {
  const n = e.multiple;
  if (!(n && !W(t) && !xs(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const o = e.options[i], r = is(o);
      if (n)
        W(t) ? o.selected = bh(t, r) > -1 : o.selected = t.has(r);
      else if (_s(is(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function is(e) {
  return "_value" in e ? e._value : e.value;
}
const Su = ["ctrl", "shift", "alt", "meta"], Tu = {
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
  exact: (e, t) => Su.some((n) => e[`${n}Key`] && !t.includes(n))
}, Pu = (e, t) => (n, ...i) => {
  for (let s = 0; s < t.length; s++) {
    const o = Tu[t[s]];
    if (o && o(n, t))
      return;
  }
  return e(n, ...i);
}, Au = /* @__PURE__ */ Dt({ patchProp: wu }, du);
let Vr;
function Iu() {
  return Vr || (Vr = Gd(Au));
}
const Br = (...e) => {
  const t = Iu().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const s = Ru(i);
    if (!s)
      return;
    const o = t._component;
    !X(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
    const r = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r;
  }, t;
};
function Ru(e) {
  return Ct(e) ? document.querySelector(e) : e;
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
var Jn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Jn || (Jn = {}));
function ku() {
  const e = dl(!0), t = e.run(() => Gt({}));
  let n = [], i = [];
  const s = yn({
    install(o) {
      ks(s), s._a = o, o.provide(hc, s), o.config.globalProperties.$pinia = s, i.forEach((r) => n.push(r)), i = [];
    },
    use(o) {
      return !this._a && !Mu ? i.push(o) : n.push(o), this;
    },
    _p: n,
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
function Wr(e, t, n, i = dc) {
  e.push(t);
  const s = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), i());
  };
  return !n && Th() && Ph(s), s;
}
function hn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
function mo(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, i) => e.set(i, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const i = t[n], s = e[n];
    go(s) && go(i) && e.hasOwnProperty(n) && !pt(i) && !xe(i) ? e[n] = mo(s, i) : e[n] = i;
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
const { assign: Se } = Object;
function Nu(e) {
  return !!(pt(e) && e.effect);
}
function Hu(e, t, n, i) {
  const { state: s, actions: o, getters: r } = t, a = n.state.value[e];
  let l;
  function c() {
    a || (n.state.value[e] = s ? s() : {});
    const h = kn(n.state.value[e]);
    return Se(h, o, Object.keys(r || {}).reduce((d, u) => (d[u] = yn(Pt(() => {
      ks(n);
      const f = n._s.get(e);
      return r[u].call(f, f);
    })), d), {}));
  }
  return l = uc(e, c, t, n, i, !0), l.$reset = function() {
    const d = s ? s() : {};
    this.$patch((u) => {
      Se(u, d);
    });
  }, l;
}
function uc(e, t, n = {}, i, s, o) {
  let r;
  const a = Se({ actions: {} }, n), l = {
    deep: !0
    // flush: 'post',
  };
  let c, h, d = yn([]), u = yn([]), f;
  const m = i.state.value[e];
  !o && !m && (i.state.value[e] = {}), Gt({});
  let p;
  function g(R) {
    let P;
    c = h = !1, typeof R == "function" ? (R(i.state.value[e]), P = {
      type: Jn.patchFunction,
      storeId: e,
      events: f
    }) : (mo(i.state.value[e], R), P = {
      type: Jn.patchObject,
      payload: R,
      storeId: e,
      events: f
    });
    const H = p = Symbol();
    Rl().then(() => {
      p === H && (c = !0);
    }), h = !0, hn(d, P, i.state.value[e]);
  }
  const x = dc;
  function v() {
    r.stop(), d = [], u = [], i._s.delete(e);
  }
  function y(R, P) {
    return function() {
      ks(i);
      const H = Array.from(arguments), V = [], B = [];
      function J(j) {
        V.push(j);
      }
      function ut(j) {
        B.push(j);
      }
      hn(u, {
        args: H,
        name: R,
        store: E,
        after: J,
        onError: ut
      });
      let gt;
      try {
        gt = P.apply(this && this.$id === e ? this : E, H);
      } catch (j) {
        throw hn(B, j), j;
      }
      return gt instanceof Promise ? gt.then((j) => (hn(V, j), j)).catch((j) => (hn(B, j), Promise.reject(j))) : (hn(V, gt), gt);
    };
  }
  const w = {
    _p: i,
    // _s: scope,
    $id: e,
    $onAction: Wr.bind(null, u),
    $patch: g,
    $reset: x,
    $subscribe(R, P = {}) {
      const H = Wr(d, R, P.detached, () => V()), V = r.run(() => Qe(() => i.state.value[e], (B) => {
        (P.flush === "sync" ? h : c) && R({
          storeId: e,
          type: Jn.direct,
          events: f
        }, B);
      }, Se({}, l, P)));
      return H;
    },
    $dispose: v
  }, E = Es(w);
  i._s.set(e, E);
  const k = i._e.run(() => (r = dl(), r.run(() => t())));
  for (const R in k) {
    const P = k[R];
    if (pt(P) && !Nu(P) || xe(P))
      o || (m && Lu(P) && (pt(P) ? P.value = m[R] : mo(P, m[R])), i.state.value[e][R] = P);
    else if (typeof P == "function") {
      const H = y(R, P);
      k[R] = H, a.actions[R] = P;
    }
  }
  return Se(E, k), Se(it(E), k), Object.defineProperty(E, "$state", {
    get: () => i.state.value[e],
    set: (R) => {
      g((P) => {
        Se(P, R);
      });
    }
  }), i._p.forEach((R) => {
    Se(E, r.run(() => R({
      store: E,
      app: i._a,
      pinia: i,
      options: a
    })));
  }), m && o && n.hydrate && n.hydrate(E.$state, m), c = !0, h = !0, E;
}
function zu(e, t, n) {
  let i, s;
  const o = typeof t == "function";
  typeof e == "string" ? (i = e, s = o ? n : t) : (s = e, i = e.id);
  function r(a, l) {
    const c = eu();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || c && Yn(hc, null), a && ks(a), a = cc, a._s.has(i) || (o ? uc(i, t, s, a) : Hu(i, s, a)), a._s.get(i);
  }
  return r.$id = i, r;
}
function mi(e) {
  {
    e = it(e);
    const t = {};
    for (const n in e) {
      const i = e[n];
      (pt(i) || xe(i)) && (t[n] = // ---
      Pl(e, n));
    }
    return t;
  }
}
const _i = zu("lca", () => {
  const e = Gt(""), t = Gt(), n = Gt([]), i = Gt([]), s = Gt([]), o = Pt(() => {
    const p = [];
    return i.value.forEach((g) => {
      if (g.Core_Data && g.Core_Data.Market) {
        const x = g.Core_Data.Market;
        p.includes(x) || p.push(x);
      }
    }), p;
  }), r = Pt(() => {
    const p = [
      "#E77724",
      "#78BE43",
      "#02A9E0",
      "#CC8899"
    ];
    return i.value.filter(
      (g) => g.Core_Data.Market == e.value
    ).map(
      (g, x) => (g.display = { color: p[x % p.length] }, g)
    ).sort((g, x) => Number(g.Core_Data.Rank) - Number(x.Core_Data.Rank));
  }), a = Pt(() => r.value.slice(1)), l = Pt(() => r.value[0]), c = Pt(() => {
    var p = {};
    return s.value.forEach((g) => {
      p[g.Metric] = {
        market: g[e.value],
        overview: g.Overview
      };
    }), p;
  }), h = Pt(() => n.value.find((p) => p.Market == e.value));
  function d(p) {
    let g = [], x = [];
    i.value = [], p.forEach((v, y) => {
      if (y === 0) {
        let w = "";
        g = v.map((E) => (E && (w = E), w));
      } else if (y === 1)
        x = v;
      else {
        const w = {};
        x.forEach((E, k) => {
          const R = Math.min(k, g.length - 1), P = g[R].replace(/\s/, "_");
          w[P] || (w[P] = {}), w[P][x[k]] = v[k];
        }), i.value.push(w);
      }
    });
  }
  function u(p) {
    n.value = [];
    const g = p.shift();
    if (!g)
      return [];
    n.value = p.map((x) => {
      const v = {};
      return g.forEach((y, w) => {
        v[y] = x[w];
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
      return g.forEach((y, w) => {
        v[y] = x[w];
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
    allMaterials: i,
    allAnalysis: s,
    materials: r,
    materialsForComparison: a,
    markets: o,
    marketDetails: h,
    loadLcaData: m,
    analysis: c
  };
}), Fu = { class: "row justify-content-center" }, Vu = { class: "col-auto" }, Bu = ["value"], Wu = /* @__PURE__ */ qt({
  __name: "Selector",
  setup(e) {
    const { markets: t, market: n } = mi(_i());
    return (i, s) => (Y(), et("div", Fu, [
      N("div", Vu, [
        jl(N("select", {
          class: "form-select form-select-lg dark",
          "onUpdate:modelValue": s[0] || (s[0] = (o) => pt(n) ? n.value = o : null)
        }, [
          (Y(!0), et(vt, null, he($(t), (o) => (Y(), et("option", { value: o }, It(o), 9, Bu))), 256))
        ], 512), [
          [lc, $(n)]
        ])
      ])
    ]));
  }
});
const fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, ju = /* @__PURE__ */ fe(Wu, [["__scopeId", "data-v-7964f3f3"]]), Gu = {}, Uu = {
  width: "92",
  height: "102",
  viewBox: "0 0 92 102",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, $u = /* @__PURE__ */ N("path", {
  d: "M46 101.405C43.92 101.405 41.85 100.875 40 99.805L6.69995 80.575C2.99995 78.435 0.699951 74.455 0.699951 70.185V31.725C0.699951 27.455 2.99995 23.465 6.69995 21.335L40 2.105C43.7 -0.0350001 48.3 -0.0350001 52 2.105L85.2999 21.335C88.9999 23.475 91.2999 27.455 91.2999 31.725V70.175C91.2999 74.445 88.9999 78.425 85.2999 80.565L52 99.795C50.15 100.865 48.07 101.395 46 101.395V101.405ZM46 4.505C44.62 4.505 43.23 4.865 42 5.575L8.69995 24.795C6.22995 26.215 4.69995 28.875 4.69995 31.725V70.175C4.69995 73.025 6.22995 75.675 8.69995 77.105L42 96.335C44.47 97.755 47.53 97.755 50 96.335L83.2999 77.105C85.7699 75.685 87.2999 73.025 87.2999 70.175V31.725C87.2999 28.875 85.7699 26.225 83.2999 24.795L50 5.575C48.77 4.865 47.38 4.505 46 4.505Z",
  fill: "black"
}, null, -1), Ku = /* @__PURE__ */ N("path", {
  d: "M38.61 30.205C40.94 30.205 42.84 29.445 42.84 28.515C42.84 27.585 40.95 26.825 38.61 26.825C36.27 26.825 34.38 27.585 34.38 28.515C34.38 29.445 36.27 30.205 38.61 30.205Z",
  fill: "black"
}, null, -1), Yu = /* @__PURE__ */ N("path", {
  d: "M77.89 65.885H66.72V28.505C66.72 23.125 55.98 20.675 46.01 20.675C36.04 20.675 25.3 23.125 25.3 28.505V65.885H14.13C13.03 65.885 12.13 66.785 12.13 67.885C12.13 68.985 13.03 69.885 14.13 69.885H25.3V70.885C25.3 76.265 36.04 78.715 46.01 78.715C55.98 78.715 66.72 76.265 66.72 70.885V69.885H77.89C78.99 69.885 79.89 68.985 79.89 67.885C79.89 66.785 78.99 65.885 77.89 65.885ZM35.66 39.225C36.76 39.225 37.66 38.325 37.66 37.225V35.745C40.33 36.145 43.2 36.335 46 36.335C46.96 36.335 47.93 36.315 48.9 36.265V42.725C48.9 43.825 49.8 44.725 50.9 44.725C52 44.725 52.9 43.825 52.9 42.725V35.925C54.03 35.795 55.13 35.625 56.19 35.415V37.775C56.19 38.875 57.09 39.775 58.19 39.775C59.29 39.775 60.19 38.875 60.19 37.775V34.395C61.11 34.095 61.96 33.745 62.72 33.375V42.595C62.43 43.655 56.88 46.455 46.01 46.455C35.14 46.455 29.57 43.655 29.3 42.625V33.375C30.55 33.995 32.03 34.515 33.67 34.935V37.215C33.67 38.315 34.57 39.215 35.67 39.215L35.66 39.225ZM29.29 47.515C33.32 49.525 39.81 50.465 46 50.465C52.19 50.465 58.69 49.515 62.71 47.515V56.735C62.43 57.795 56.87 60.595 46 60.595C35.13 60.595 29.56 57.795 29.29 56.765V47.515V47.515ZM46 24.675C56.79 24.675 62.35 27.425 62.71 28.505C62.35 29.585 56.79 32.335 46 32.335C41.97 32.335 38.67 31.945 36.09 31.415C36.06 31.415 36.04 31.405 36.01 31.395C31.7 30.485 29.46 29.165 29.28 28.525C29.57 27.455 35.13 24.665 45.99 24.665L46 24.675ZM46 74.715C35.12 74.715 29.56 71.915 29.29 70.885V61.635C33.32 63.645 39.81 64.585 46 64.585C52.19 64.585 58.69 63.635 62.72 61.635V67.855C62.72 67.855 62.72 67.865 62.72 67.875C62.72 67.885 62.72 67.885 62.72 67.895V70.845C62.44 71.905 56.88 74.705 46 74.705V74.715Z",
  fill: "black"
}, null, -1), Xu = [
  $u,
  Ku,
  Yu
];
function qu(e, t) {
  return Y(), et("svg", Uu, Xu);
}
const Ju = /* @__PURE__ */ fe(Gu, [["render", qu]]), Zu = {}, Qu = {
  width: "92",
  height: "102",
  viewBox: "0 0 92 102",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, tf = /* @__PURE__ */ Rs('<g clip-path="url(#clip0_899_2739)"><path d="M46 101.4C43.93 101.4 41.85 100.87 40 99.8L6.69995 80.57C2.99995 78.43 0.699951 74.45 0.699951 70.18V31.72C0.699951 27.45 2.99995 23.46 6.69995 21.33L40 2.1C43.7 -0.040005 48.3 -0.040005 52 2.1L85.2999 21.33C88.9999 23.47 91.2999 27.45 91.2999 31.72V70.17C91.2999 74.44 88.9999 78.43 85.2999 80.56L52 99.79C50.15 100.86 48.07 101.39 46 101.39V101.4ZM46 4.5C44.62 4.5 43.23 4.86 42 5.57L8.69995 24.79C6.22995 26.21 4.69995 28.87 4.69995 31.72V70.17C4.69995 73.02 6.22995 75.67 8.69995 77.1L42 96.33C44.47 97.75 47.53 97.75 50 96.33L83.2999 77.1C85.7699 75.68 87.2999 73.02 87.2999 70.17V31.72C87.2999 28.87 85.7699 26.22 83.2999 24.79L50 5.57C48.77 4.86 47.38 4.5 46 4.5Z" fill="#A8A8AB"></path><path d="M27.0999 25.72L30.9299 24.18C32.5899 23.51 34.4699 23.82 35.8299 24.99C38.3299 27.15 41.7799 27.72 44.8399 26.49L48.6699 24.95C50.3299 24.28 52.2099 24.59 53.5699 25.76C55.1999 27.17 57.2299 27.9 59.2899 27.9C60.3899 27.9 61.5099 27.69 62.5799 27.26L66.4099 25.72C67.4299 25.31 67.9299 24.14 67.5199 23.12C67.1099 22.1 65.9399 21.6 64.9199 22.01L61.0899 23.55C59.4299 24.22 57.5499 23.91 56.1899 22.74C53.6899 20.58 50.2399 20.01 47.1799 21.24L43.3499 22.78C41.6899 23.45 39.8099 23.14 38.4499 21.97C35.9499 19.81 32.4999 19.24 29.4399 20.47L25.6099 22.01C24.5899 22.42 24.0899 23.59 24.4999 24.61C24.9099 25.64 26.0799 26.13 27.0999 25.72V25.72Z" fill="#A8A8AB"></path><path d="M53.5599 35.68C55.1899 37.09 57.2199 37.82 59.2799 37.82C60.3799 37.82 61.4999 37.61 62.5699 37.18L66.3999 35.64C67.4199 35.23 67.9199 34.06 67.5099 33.04C67.0999 32.02 65.9299 31.52 64.9099 31.93L61.0799 33.47C59.4199 34.14 57.5399 33.83 56.1799 32.66C53.6799 30.5 50.2299 29.93 47.1699 31.16L43.3399 32.7C41.6799 33.37 39.7999 33.06 38.4399 31.89C35.9399 29.73 32.4899 29.16 29.4299 30.39L25.5999 31.93C24.5799 32.34 24.0799 33.51 24.4899 34.53C24.8999 35.55 26.0699 36.05 27.0899 35.64L30.9199 34.1C32.5799 33.43 34.4599 33.74 35.8199 34.91C38.3199 37.07 41.7699 37.64 44.8299 36.41L48.6599 34.87C50.3199 34.2 52.1999 34.51 53.5599 35.68V35.68Z" fill="#A8A8AB"></path><path d="M75.3599 56.84L70.0999 56.69C69.9699 56.17 69.7799 55.67 69.5299 55.19L72.9199 51.99C73.7199 51.23 73.7599 49.97 72.9999 49.16C72.2399 48.36 70.9799 48.32 70.1699 49.08L66.7799 52.28C66.3099 52 65.8199 51.78 65.3199 51.62L65.4399 47.43C65.4699 46.33 64.5999 45.41 63.4999 45.37C62.3999 45.33 61.4799 46.21 61.4399 47.31L61.3199 51.5C60.7999 51.63 60.2999 51.82 59.8199 52.07L55.0399 47.01C54.2799 46.21 53.0199 46.17 52.2099 46.93C51.4099 47.69 51.3699 48.95 52.1299 49.76L56.9099 54.82C56.6299 55.29 56.4099 55.78 56.2499 56.28L50.9899 56.13C49.8799 56.11 48.9699 56.97 48.9299 58.07C48.8899 59.17 49.7699 60.09 50.8699 60.13L56.1299 60.28C56.2599 60.8 56.4499 61.3 56.6999 61.78L51.6399 66.56C50.8399 67.32 50.7999 68.58 51.5599 69.39C51.9499 69.81 52.4799 70.02 53.0099 70.02C53.4999 70.02 53.9999 69.84 54.3799 69.47L59.4399 64.69C59.8999 64.96 60.3899 65.18 60.9099 65.35L60.7599 70.61C60.7299 71.71 61.5999 72.63 62.6999 72.67C62.7199 72.67 62.7399 72.67 62.7599 72.67C63.8399 72.67 64.7299 71.81 64.7599 70.73L64.9099 65.47C65.4299 65.34 65.9399 65.15 66.4099 64.9L70.7699 69.51C71.1599 69.93 71.6899 70.14 72.2199 70.14C72.7099 70.14 73.2099 69.96 73.5899 69.59C74.3899 68.83 74.4299 67.57 73.6699 66.76L69.3099 62.14C69.5899 61.67 69.8099 61.18 69.9699 60.68L75.2299 60.83C75.2299 60.83 75.2699 60.83 75.2899 60.83C76.3699 60.83 77.2599 59.97 77.2899 58.89C77.3199 57.79 76.4499 56.87 75.3499 56.83L75.3599 56.84ZM65.3199 60.83C64.6999 61.42 63.8799 61.74 63.0199 61.71C62.1599 61.69 61.3699 61.33 60.7799 60.7C59.5599 59.41 59.6199 57.37 60.9099 56.16C61.5299 55.57 62.3199 55.28 63.1199 55.28C63.9699 55.28 64.8299 55.62 65.4599 56.29C66.6799 57.58 66.6199 59.62 65.3299 60.83H65.3199Z" fill="#A8A8AB"></path><path d="M40.8199 63.25L37.5999 63.13C37.5199 62.84 37.4099 62.56 37.2899 62.29L41.3399 58.54C42.1499 57.79 42.1999 56.52 41.4499 55.71C40.6999 54.9 39.4299 54.85 38.6199 55.6L34.5699 59.35C34.3099 59.21 34.0399 59.08 33.7599 58.98L33.9199 54.87C33.9599 53.77 33.0999 52.84 31.9999 52.79C30.9199 52.76 29.9699 53.61 29.9199 54.71L29.7599 58.82C29.4699 58.9 29.1899 59.01 28.9199 59.13L25.1699 55.08C24.4199 54.27 23.1499 54.22 22.3399 54.97C21.5299 55.72 21.4799 56.99 22.2299 57.8L25.9799 61.85C25.8399 62.11 25.7099 62.38 25.6099 62.66L21.4999 62.5C20.4099 62.47 19.4699 63.32 19.4199 64.42C19.3699 65.52 20.2399 66.45 21.3399 66.5L25.4499 66.66C25.5299 66.95 25.6399 67.23 25.7599 67.5L22.0799 70.91C21.2699 71.66 21.2199 72.93 21.9699 73.74C22.3599 74.17 22.8999 74.38 23.4399 74.38C23.9299 74.38 24.4099 74.2 24.7999 73.85L28.4799 70.44C28.7399 70.58 29.0099 70.71 29.2899 70.81L29.1299 74.92C29.0899 76.02 29.9499 76.95 31.0499 77C31.0799 77 31.0999 77 31.1299 77C32.1999 77 33.0899 76.15 33.1299 75.08L33.2899 70.95C33.5699 70.87 33.8499 70.77 34.1099 70.65L36.5799 73.31C36.9699 73.74 37.5099 73.95 38.0499 73.95C38.5399 73.95 39.0199 73.77 39.4099 73.42C40.2199 72.67 40.2699 71.4 39.5199 70.59L37.0599 67.94C37.1999 67.68 37.3299 67.41 37.4299 67.13L40.6499 67.25C40.6499 67.25 40.6999 67.25 40.7299 67.25C41.7999 67.25 42.6899 66.4 42.7299 65.33C42.7699 64.23 41.9099 63.3 40.8099 63.25H40.8199ZM33.1099 66.6C32.6599 67.02 32.0599 67.23 31.4399 67.22C30.8199 67.2 30.2499 66.93 29.8299 66.48C28.9599 65.54 29.0199 64.07 29.9599 63.2C30.3899 62.8 30.9499 62.58 31.5299 62.58C31.5599 62.58 31.5899 62.58 31.6199 62.58C32.2399 62.6 32.8099 62.87 33.2299 63.32C34.0999 64.26 34.0399 65.73 33.0999 66.6H33.1099Z" fill="#A8A8AB"></path></g><defs><clipPath id="clip0_899_2739"><rect width="90.6" height="100.9" fill="white" transform="translate(0.699951 0.5)"></rect></clipPath></defs>', 2), ef = [
  tf
];
function nf(e, t) {
  return Y(), et("svg", Qu, ef);
}
const sf = /* @__PURE__ */ fe(Zu, [["render", nf]]), of = {}, rf = {
  width: "92",
  height: "102",
  viewBox: "0 0 92 102",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, af = /* @__PURE__ */ Rs('<g clip-path="url(#clip0_899_2717)"><path d="M46 101.4C43.93 101.4 41.85 100.87 40 99.8L6.69995 80.57C2.99995 78.43 0.699951 74.45 0.699951 70.18V31.72C0.699951 27.45 2.99995 23.46 6.69995 21.33L40 2.1C43.7 -0.040005 48.3 -0.040005 52 2.1L85.2999 21.33C88.9999 23.47 91.2999 27.45 91.2999 31.72V70.17C91.2999 74.44 88.9999 78.43 85.2999 80.56L52 99.79C50.15 100.86 48.07 101.39 46 101.39V101.4ZM46 4.5C44.62 4.5 43.23 4.86 42 5.57L8.69995 24.79C6.22995 26.21 4.69995 28.87 4.69995 31.72V70.17C4.69995 73.02 6.22995 75.67 8.69995 77.1L42 96.33C44.47 97.75 47.53 97.75 50 96.33L83.2999 77.1C85.7699 75.68 87.2999 73.02 87.2999 70.17V31.72C87.2999 28.87 85.7699 26.22 83.2999 24.79L50 5.57C48.77 4.86 47.38 4.5 46 4.5Z" fill="#A8A8AB"></path><path d="M63.9 50.03L65.3 53.91C65.59 54.72 66.36 55.23 67.18 55.23C67.41 55.23 67.64 55.19 67.86 55.11C68.9 54.73 69.44 53.59 69.06 52.55L67.66 48.67C67.05 46.98 67.43 45.12 68.65 43.8C70.89 41.38 71.59 37.95 70.47 34.85L69.07 30.97C68.69 29.93 67.55 29.39 66.51 29.77C65.47 30.15 64.93 31.29 65.31 32.33L66.71 36.21C67.32 37.9 66.94 39.76 65.72 41.07C63.48 43.49 62.78 46.92 63.9 50.02V50.03Z" fill="#A8A8AB"></path><path d="M50.89 50.03L52.29 53.91C52.58 54.72 53.35 55.23 54.17 55.23C54.4 55.23 54.63 55.19 54.85 55.11C55.89 54.73 56.43 53.59 56.05 52.55L54.65 48.67C54.04 46.98 54.42 45.12 55.64 43.8C57.88 41.38 58.58 37.95 57.46 34.85L56.06 30.97C55.68 29.93 54.54 29.39 53.5 29.77C52.46 30.15 51.92 31.29 52.3 32.33L53.7 36.21C54.31 37.9 53.93 39.76 52.71 41.07C50.47 43.49 49.77 46.92 50.89 50.02V50.03Z" fill="#A8A8AB"></path><path d="M34.54 40.03L35.94 43.91C36.23 44.72 37 45.23 37.82 45.23C38.05 45.23 38.28 45.19 38.5 45.11C39.54 44.73 40.08 43.59 39.7 42.55L38.3 38.67C37.69 36.98 38.07 35.12 39.29 33.8C41.53 31.38 42.23 27.95 41.11 24.85L39.71 20.97C39.33 19.93 38.19 19.39 37.15 19.77C36.11 20.15 35.57 21.29 35.95 22.33L37.35 26.21C37.96 27.9 37.58 29.76 36.36 31.07C34.12 33.49 33.42 36.92 34.54 40.02V40.03Z" fill="#A8A8AB"></path><path d="M21.53 40.03L22.93 43.91C23.22 44.72 23.99 45.23 24.81 45.23C25.04 45.23 25.27 45.19 25.49 45.11C26.53 44.73 27.07 43.59 26.69 42.55L25.29 38.67C24.68 36.98 25.06 35.12 26.28 33.8C28.52 31.38 29.22 27.95 28.1 24.85L26.7 20.97C26.32 19.93 25.18 19.4 24.14 19.77C23.1 20.15 22.56 21.29 22.94 22.33L24.34 26.21C24.95 27.9 24.57 29.76 23.35 31.07C21.11 33.49 20.41 36.92 21.53 40.02V40.03Z" fill="#A8A8AB"></path><path d="M70.14 59.71H51.22C50.12 59.71 49.22 60.61 49.22 61.71V76.68H42.77V51.71C42.77 50.61 41.87 49.71 40.77 49.71H21.85C20.75 49.71 19.85 50.61 19.85 51.71V87.01C19.85 87.72 20.23 88.39 20.85 88.74L39.77 99.66C40.08 99.84 40.43 99.93 40.77 99.93C41.46 99.93 42.13 99.57 42.5 98.93C43.05 97.97 42.72 96.75 41.77 96.2L23.85 85.86V53.71H38.77V78.68C38.77 79.78 39.67 80.68 40.77 80.68H51.22C52.32 80.68 53.22 79.78 53.22 78.68V63.71H68.14V85.86L50.22 96.2C49.26 96.75 48.94 97.98 49.49 98.93C49.86 99.57 50.53 99.93 51.22 99.93C51.56 99.93 51.9 99.84 52.22 99.66L71.14 88.74C71.76 88.38 72.14 87.72 72.14 87.01V61.71C72.14 60.61 71.24 59.71 70.14 59.71V59.71Z" fill="#A8A8AB"></path></g><defs><clipPath id="clip0_899_2717"><rect width="90.6" height="100.9" fill="white" transform="translate(0.699951 0.5)"></rect></clipPath></defs>', 2), lf = [
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
}, ff = /* @__PURE__ */ Rs('<g clip-path="url(#clip0_899_2729)"><path d="M46 101.4C43.92 101.4 41.85 100.87 40 99.8L6.69995 80.57C2.99995 78.43 0.699951 74.45 0.699951 70.18V31.72C0.699951 27.45 2.99995 23.46 6.69995 21.33L40 2.1C43.7 -0.040005 48.3 -0.040005 52 2.1L85.2999 21.33C88.9999 23.47 91.2999 27.45 91.2999 31.72V70.17C91.2999 74.44 88.9999 78.42 85.2999 80.56L52 99.79C50.15 100.86 48.07 101.39 46 101.39V101.4ZM46 4.5C44.62 4.5 43.23 4.86 42 5.57L8.69995 24.79C6.22995 26.21 4.69995 28.87 4.69995 31.72V70.17C4.69995 73.02 6.22995 75.67 8.69995 77.1L42 96.33C44.47 97.75 47.53 97.75 50 96.33L83.2999 77.1C85.7699 75.68 87.2999 73.02 87.2999 70.17V31.72C87.2999 28.87 85.7699 26.22 83.2999 24.79L50 5.57C48.77 4.86 47.38 4.5 46 4.5Z" fill="#A8A8AB"></path><path d="M45.9999 59.27C53.8999 59.27 60.3299 52.84 60.3299 44.94C60.3299 37.76 48.9899 19.49 47.6999 17.43C47.3299 16.85 46.6899 16.49 46.0099 16.49C45.3299 16.49 44.6799 16.84 44.3199 17.43C43.0299 19.49 31.6899 37.77 31.6899 44.94C31.6899 52.84 38.1199 59.27 46.0199 59.27H45.9999ZM45.9999 22.33C49.9199 28.9 56.3299 40.55 56.3299 44.94C56.3299 50.63 51.6999 55.27 45.9999 55.27C40.2999 55.27 35.6699 50.64 35.6699 44.94C35.6699 40.55 42.0699 28.9 45.9999 22.33Z" fill="#A8A8AB"></path><path d="M64.8999 76.17L61.0699 77.71C59.4099 78.38 57.5299 78.07 56.1699 76.9C53.6699 74.74 50.2199 74.17 47.1599 75.4L43.3299 76.94C41.6699 77.61 39.7899 77.3 38.4299 76.13C35.9299 73.97 32.4799 73.4 29.4199 74.63L25.5899 76.17C24.5699 76.58 24.0699 77.75 24.4799 78.77C24.8899 79.8 26.0599 80.29 27.0799 79.88L30.9099 78.34C32.5699 77.67 34.4499 77.98 35.8099 79.15C38.3099 81.31 41.7599 81.88 44.8199 80.65L48.6499 79.11C50.3099 78.44 52.1899 78.75 53.5499 79.92C55.1799 81.32 57.2099 82.06 59.2699 82.06C60.3699 82.06 61.4899 81.85 62.5599 81.42L66.3899 79.88C67.4099 79.47 67.9099 78.3 67.4999 77.28C67.0899 76.26 65.9199 75.76 64.8999 76.17V76.17Z" fill="#A8A8AB"></path><path d="M27.0999 69.97L30.9299 68.43C32.5899 67.76 34.4699 68.07 35.8299 69.24C38.3299 71.4 41.7799 71.97 44.8399 70.74L48.6699 69.2C50.3299 68.53 52.2099 68.84 53.5699 70.01C55.1999 71.41 57.2299 72.15 59.2899 72.15C60.3899 72.15 61.5099 71.94 62.5799 71.51L66.4099 69.97C67.4299 69.56 67.9299 68.39 67.5199 67.37C67.1099 66.35 65.9399 65.85 64.9199 66.26L61.0899 67.8C59.4299 68.47 57.5499 68.16 56.1899 66.99C53.6899 64.83 50.2399 64.26 47.1799 65.49L43.3499 67.03C41.6899 67.7 39.8099 67.39 38.4499 66.21C35.9499 64.05 32.4999 63.48 29.4399 64.71L25.6099 66.25C24.5899 66.66 24.0899 67.83 24.4999 68.85C24.9099 69.88 26.0799 70.37 27.0999 69.96V69.97Z" fill="#A8A8AB"></path></g><defs><clipPath id="clip0_899_2729"><rect width="90.6" height="100.9" fill="white" transform="translate(0.699951 0.5)"></rect></clipPath></defs>', 2), pf = [
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
    const t = e, { size: n, color: i } = kn(t), s = Pt(() => n != null && n.value ? { width: n.value } : {});
    return (o, r) => (Y(), et("svg", {
      style: rn($(s)),
      viewBox: "0 0 20 20"
    }, [
      N("circle", {
        cx: "50%",
        cy: "50%",
        r: "10",
        fill: $(i)
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
function bi(e) {
  return e + 0.5 | 0;
}
const Te = (e, t, n) => Math.max(Math.min(e, n), t);
function jn(e) {
  return Te(bi(e * 2.55), 0, 255);
}
function ke(e) {
  return Te(bi(e * 255), 0, 255);
}
function be(e) {
  return Te(bi(e / 2.55) / 100, 0, 1);
}
function jr(e) {
  return Te(bi(e * 100), 0, 100);
}
const Yt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, _o = [..."0123456789ABCDEF"], xf = (e) => _o[e & 15], vf = (e) => _o[(e & 240) >> 4] + _o[e & 15], Pi = (e) => (e & 240) >> 4 === (e & 15), yf = (e) => Pi(e.r) && Pi(e.g) && Pi(e.b) && Pi(e.a);
function Of(e) {
  var t = e.length, n;
  return e[0] === "#" && (t === 4 || t === 5 ? n = {
    r: 255 & Yt[e[1]] * 17,
    g: 255 & Yt[e[2]] * 17,
    b: 255 & Yt[e[3]] * 17,
    a: t === 5 ? Yt[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (n = {
    r: Yt[e[1]] << 4 | Yt[e[2]],
    g: Yt[e[3]] << 4 | Yt[e[4]],
    b: Yt[e[5]] << 4 | Yt[e[6]],
    a: t === 9 ? Yt[e[7]] << 4 | Yt[e[8]] : 255
  })), n;
}
const Ef = (e, t) => e < 255 ? t(e) : "";
function wf(e) {
  var t = yf(e) ? xf : vf;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + Ef(e.a, t) : void 0;
}
const Cf = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function pc(e, t, n) {
  const i = t * Math.min(n, 1 - n), s = (o, r = (o + e / 30) % 12) => n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function Sf(e, t, n) {
  const i = (s, o = (s + e / 60) % 6) => n - n * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function Tf(e, t, n) {
  const i = pc(e, 1, 0.5);
  let s;
  for (t + n > 1 && (s = 1 / (t + n), t *= s, n *= s), s = 0; s < 3; s++)
    i[s] *= 1 - t - n, i[s] += t;
  return i;
}
function Pf(e, t, n, i, s) {
  return e === s ? (t - n) / i + (t < n ? 6 : 0) : t === s ? (n - e) / i + 2 : (e - t) / i + 4;
}
function Ko(e) {
  const n = e.r / 255, i = e.g / 255, s = e.b / 255, o = Math.max(n, i, s), r = Math.min(n, i, s), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = Pf(n, i, s, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Yo(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(ke);
}
function Xo(e, t, n) {
  return Yo(pc, e, t, n);
}
function Af(e, t, n) {
  return Yo(Tf, e, t, n);
}
function If(e, t, n) {
  return Yo(Sf, e, t, n);
}
function gc(e) {
  return (e % 360 + 360) % 360;
}
function Rf(e) {
  const t = Cf.exec(e);
  let n = 255, i;
  if (!t)
    return;
  t[5] !== i && (n = t[6] ? jn(+t[5]) : ke(+t[5]));
  const s = gc(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? i = Af(s, o, r) : t[1] === "hsv" ? i = If(s, o, r) : i = Xo(s, o, r), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: n
  };
}
function Mf(e, t) {
  var n = Ko(e);
  n[0] = gc(n[0] + t), n = Xo(n), e.r = n[0], e.g = n[1], e.b = n[2];
}
function kf(e) {
  if (!e)
    return;
  const t = Ko(e), n = t[0], i = jr(t[1]), s = jr(t[2]);
  return e.a < 255 ? `hsla(${n}, ${i}%, ${s}%, ${be(e.a)})` : `hsl(${n}, ${i}%, ${s}%)`;
}
const Gr = {
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
  const e = {}, t = Object.keys(Ur), n = Object.keys(Gr);
  let i, s, o, r, a;
  for (i = 0; i < t.length; i++) {
    for (r = a = t[i], s = 0; s < n.length; s++)
      o = n[s], a = a.replace(o, Gr[o]);
    o = parseInt(Ur[r], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let Ai;
function Lf(e) {
  Ai || (Ai = Df(), Ai.transparent = [0, 0, 0, 0]);
  const t = Ai[e.toLowerCase()];
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
  let n = 255, i, s, o;
  if (t) {
    if (t[7] !== i) {
      const r = +t[7];
      n = t[8] ? jn(r) : Te(r * 255, 0, 255);
    }
    return i = +t[1], s = +t[3], o = +t[5], i = 255 & (t[2] ? jn(i) : Te(i, 0, 255)), s = 255 & (t[4] ? jn(s) : Te(s, 0, 255)), o = 255 & (t[6] ? jn(o) : Te(o, 0, 255)), {
      r: i,
      g: s,
      b: o,
      a: n
    };
  }
}
function zf(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${be(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Ks = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, dn = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function Ff(e, t, n) {
  const i = dn(be(e.r)), s = dn(be(e.g)), o = dn(be(e.b));
  return {
    r: ke(Ks(i + n * (dn(be(t.r)) - i))),
    g: ke(Ks(s + n * (dn(be(t.g)) - s))),
    b: ke(Ks(o + n * (dn(be(t.b)) - o))),
    a: e.a + n * (t.a - e.a)
  };
}
function Ii(e, t, n) {
  if (e) {
    let i = Ko(e);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1)), i = Xo(i), e.r = i[0], e.g = i[1], e.b = i[2];
  }
}
function mc(e, t) {
  return e && Object.assign(t || {}, e);
}
function $r(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = ke(e[3]))) : (t = mc(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = ke(t.a)), t;
}
function Vf(e) {
  return e.charAt(0) === "r" ? Hf(e) : Rf(e);
}
class ci {
  constructor(t) {
    if (t instanceof ci)
      return t;
    const n = typeof t;
    let i;
    n === "object" ? i = $r(t) : n === "string" && (i = Of(t) || Lf(t) || Vf(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = mc(this._rgb);
    return t && (t.a = be(t.a)), t;
  }
  set rgb(t) {
    this._rgb = $r(t);
  }
  rgbString() {
    return this._valid ? zf(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? wf(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? kf(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb, s = t.rgb;
      let o;
      const r = n === o ? 0.5 : n, a = 2 * r - 1, l = i.a - s.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, i.r = 255 & c * i.r + o * s.r + 0.5, i.g = 255 & c * i.g + o * s.g + 0.5, i.b = 255 & c * i.b + o * s.b + 0.5, i.a = r * i.a + (1 - r) * s.a, this.rgb = i;
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = Ff(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new ci(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = ke(t), this;
  }
  clearer(t) {
    const n = this._rgb;
    return n.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, n = bi(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = n, this;
  }
  opaquer(t) {
    const n = this._rgb;
    return n.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return Ii(this._rgb, 2, t), this;
  }
  darken(t) {
    return Ii(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Ii(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Ii(this._rgb, 1, -t), this;
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
function nt(e) {
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
const Wf = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t, _c = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function lt(e, t, n) {
  if (e && typeof e.call == "function")
    return e.apply(n, t);
}
function ot(e, t, n, i) {
  let s, o, r;
  if (_t(e))
    if (o = e.length, i)
      for (s = o - 1; s >= 0; s--)
        t.call(n, e[s], s);
    else
      for (s = 0; s < o; s++)
        t.call(n, e[s], s);
  else if (nt(e))
    for (r = Object.keys(e), o = r.length, s = 0; s < o; s++)
      t.call(n, e[r[s]], r[s]);
}
function ss(e, t) {
  let n, i, s, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (n = 0, i = e.length; n < i; ++n)
    if (s = e[n], o = t[n], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function os(e) {
  if (_t(e))
    return e.map(os);
  if (nt(e)) {
    const t = /* @__PURE__ */ Object.create(null), n = Object.keys(e), i = n.length;
    let s = 0;
    for (; s < i; ++s)
      t[n[s]] = os(e[n[s]]);
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
function jf(e, t, n, i) {
  if (!bc(e))
    return;
  const s = t[e], o = n[e];
  nt(s) && nt(o) ? hi(s, o, i) : t[e] = os(o);
}
function hi(e, t, n) {
  const i = _t(t) ? t : [
    t
  ], s = i.length;
  if (!nt(e))
    return e;
  n = n || {};
  const o = n.merger || jf;
  let r;
  for (let a = 0; a < s; ++a) {
    if (r = i[a], !nt(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], e, r, n);
  }
  return e;
}
function Zn(e, t) {
  return hi(e, t, {
    merger: Gf
  });
}
function Gf(e, t, n) {
  if (!bc(e))
    return;
  const i = t[e], s = n[e];
  nt(i) && nt(s) ? Zn(i, s) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = os(s));
}
const Kr = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function Uf(e) {
  const t = e.split("."), n = [];
  let i = "";
  for (const s of t)
    i += s, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (n.push(i), i = "");
  return n;
}
function $f(e) {
  const t = Uf(e);
  return (n) => {
    for (const i of t) {
      if (i === "")
        break;
      n = n && n[i];
    }
    return n;
  };
}
function Cn(e, t) {
  return (Kr[t] || (Kr[t] = $f(t)))(e);
}
function qo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ie = (e) => typeof e < "u", Le = (e) => typeof e == "function", Yr = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
};
function Kf(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Et = Math.PI, dt = 2 * Et, Yf = dt + Et, rs = Number.POSITIVE_INFINITY, Xf = Et / 180, xt = Et / 2, Be = Et / 4, Xr = Et * 2 / 3, Pe = Math.log10, Sn = Math.sign;
function Qn(e, t, n) {
  return Math.abs(e - t) < n;
}
function qr(e) {
  const t = Math.round(e);
  e = Qn(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(Pe(e))), i = e / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function qf(e) {
  const t = [], n = Math.sqrt(e);
  let i;
  for (i = 1; i < n; i++)
    e % i === 0 && (t.push(i), t.push(e / i));
  return n === (n | 0) && t.push(n), t.sort((s, o) => s - o).pop(), t;
}
function as(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Jf(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function xc(e, t, n) {
  let i, s, o;
  for (i = 0, s = e.length; i < s; i++)
    o = e[i][n], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function de(e) {
  return e * (Et / 180);
}
function Jo(e) {
  return e * (180 / Et);
}
function Jr(e) {
  if (!bt(e))
    return;
  let t = 1, n = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, n++;
  return n;
}
function vc(e, t) {
  const n = t.x - e.x, i = t.y - e.y, s = Math.sqrt(n * n + i * i);
  let o = Math.atan2(i, n);
  return o < -0.5 * Et && (o += dt), {
    angle: o,
    distance: s
  };
}
function bo(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Zf(e, t) {
  return (e - t + Yf) % dt - Et;
}
function jt(e) {
  return (e % dt + dt) % dt;
}
function di(e, t, n, i) {
  const s = jt(e), o = jt(t), r = jt(n), a = jt(o - s), l = jt(r - s), c = jt(s - o), h = jt(s - r);
  return s === o || s === r || i && o === r || a > l && c < h;
}
function Xt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Qf(e) {
  return Xt(e, -32768, 32767);
}
function Je(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i;
}
function Zo(e, t, n) {
  n = n || ((r) => e[r] < t);
  let i = e.length - 1, s = 0, o;
  for (; i - s > 1; )
    o = s + i >> 1, n(o) ? s = o : i = o;
  return {
    lo: s,
    hi: i
  };
}
const xo = (e, t, n, i) => Zo(e, n, i ? (s) => {
  const o = e[s][t];
  return o < n || o === n && e[s + 1][t] === n;
} : (s) => e[s][t] < n), tp = (e, t, n) => Zo(e, n, (i) => e[i][t] >= n);
function ep(e, t, n) {
  let i = 0, s = e.length;
  for (; i < s && e[i] < t; )
    i++;
  for (; s > i && e[s - 1] > n; )
    s--;
  return i > 0 || s < e.length ? e.slice(i, s) : e;
}
const yc = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function np(e, t) {
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
  }), yc.forEach((n) => {
    const i = "_onData" + qo(n), s = e[n];
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = s.apply(this, o);
        return e._chartjs.listeners.forEach((a) => {
          typeof a[i] == "function" && a[i](...o);
        }), r;
      }
    });
  });
}
function Zr(e, t) {
  const n = e._chartjs;
  if (!n)
    return;
  const i = n.listeners, s = i.indexOf(t);
  s !== -1 && i.splice(s, 1), !(i.length > 0) && (yc.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function ip(e) {
  const t = /* @__PURE__ */ new Set();
  let n, i;
  for (n = 0, i = e.length; n < i; ++n)
    t.add(e[n]);
  return t.size === i ? e : Array.from(t);
}
const Oc = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function Ec(e, t) {
  let n = [], i = !1;
  return function(...s) {
    n = s, i || (i = !0, Oc.call(window, () => {
      i = !1, e.apply(t, n);
    }));
  };
}
function sp(e, t) {
  let n;
  return function(...i) {
    return t ? (clearTimeout(n), n = setTimeout(e, t, i)) : e.apply(this, i), t;
  };
}
const wc = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", Vt = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2, op = (e, t, n, i) => e === (i ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t, Ri = (e) => e === 0 || e === 1, Qr = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * dt / n)), ta = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * dt / n) + 1, ti = {
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
  easeInOutExpo: (e) => Ri(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => Ri(e) ? e : Qr(e, 0.075, 0.3),
  easeOutElastic: (e) => Ri(e) ? e : ta(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return Ri(e) ? e : e < 0.5 ? 0.5 * Qr(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * ta(e * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (e) => 1 - ti.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? ti.easeInBounce(e * 2) * 0.5 : ti.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function Cc(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function ea(e) {
  return Cc(e) ? e : new ci(e);
}
function Ys(e) {
  return Cc(e) ? e : new ci(e).saturate(0.5).darken(0.1).hexString();
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
const na = /* @__PURE__ */ new Map();
function hp(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let i = na.get(n);
  return i || (i = new Intl.NumberFormat(e, t), na.set(n, i)), i;
}
function Ds(e, t, n) {
  return hp(t, n).format(e);
}
const Sc = {
  values(e) {
    return _t(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0)
      return "0";
    const i = this.chart.options.locale;
    let s, o = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = dp(e, n);
    }
    const r = Pe(Math.abs(o)), a = Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Ds(e, i, l);
  },
  logarithmic(e, t, n) {
    if (e === 0)
      return "0";
    const i = n[t].significand || e / Math.pow(10, Math.floor(Pe(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || t > 0.8 * n.length ? Sc.numeric.call(this, e, t, n) : "";
  }
};
function dp(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var Ls = {
  formatters: Sc
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
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
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
const on = /* @__PURE__ */ Object.create(null), vo = /* @__PURE__ */ Object.create(null);
function ei(e, t) {
  if (!t)
    return e;
  const n = t.split(".");
  for (let i = 0, s = n.length; i < s; ++i) {
    const o = n[i];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function Xs(e, t, n) {
  return typeof t == "string" ? hi(ei(e, t), n) : hi(ei(e, ""), t);
}
class fp {
  constructor(t, n) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
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
    }, this.hover = {}, this.hoverBackgroundColor = (i, s) => Ys(s.backgroundColor), this.hoverBorderColor = (i, s) => Ys(s.borderColor), this.hoverColor = (i, s) => Ys(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(n);
  }
  set(t, n) {
    return Xs(this, t, n);
  }
  get(t) {
    return ei(this, t);
  }
  describe(t, n) {
    return Xs(vo, t, n);
  }
  override(t, n) {
    return Xs(on, t, n);
  }
  route(t, n, i, s) {
    const o = ei(this, t), r = ei(this, i), a = "_" + n;
    Object.defineProperties(o, {
      [a]: {
        value: o[n],
        writable: !0
      },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[s];
          return nt(l) ? Object.assign({}, c, l) : Q(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
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
function ls(e, t, n, i, s) {
  let o = t[s];
  return o || (o = t[s] = e.measureText(s).width, n.push(s)), o > i && (i = o), i;
}
function gp(e, t, n, i) {
  i = i || {};
  let s = i.data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
  i.font !== t && (s = i.data = {}, o = i.garbageCollect = [], i.font = t), e.save(), e.font = t;
  let r = 0;
  const a = n.length;
  let l, c, h, d, u;
  for (l = 0; l < a; l++)
    if (d = n[l], d != null && _t(d) !== !0)
      r = ls(e, s, o, r, d);
    else if (_t(d))
      for (c = 0, h = d.length; c < h; c++)
        u = d[c], u != null && !_t(u) && (r = ls(e, s, o, r, u));
  e.restore();
  const f = o.length / 2;
  if (f > n.length) {
    for (l = 0; l < f; l++)
      delete s[o[l]];
    o.splice(0, f);
  }
  return r;
}
function We(e, t, n) {
  const i = e.currentDevicePixelRatio, s = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function ia(e, t) {
  t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore();
}
function yo(e, t, n, i) {
  Tc(e, t, n, i, null);
}
function Tc(e, t, n, i, s) {
  let o, r, a, l, c, h, d, u;
  const f = t.pointStyle, m = t.rotation, p = t.radius;
  let g = (m || 0) * Xf;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(n, i), e.rotate(g), e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), e.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (e.beginPath(), f) {
      default:
        s ? e.ellipse(n, i, s / 2, p, 0, 0, dt) : e.arc(n, i, p, 0, dt), e.closePath();
        break;
      case "triangle":
        h = s ? s / 2 : p, e.moveTo(n + Math.sin(g) * h, i - Math.cos(g) * p), g += Xr, e.lineTo(n + Math.sin(g) * h, i - Math.cos(g) * p), g += Xr, e.lineTo(n + Math.sin(g) * h, i - Math.cos(g) * p), e.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(g + Be) * l, d = Math.cos(g + Be) * (s ? s / 2 - c : l), a = Math.sin(g + Be) * l, u = Math.sin(g + Be) * (s ? s / 2 - c : l), e.arc(n - d, i - a, c, g - Et, g - xt), e.arc(n + u, i - r, c, g - xt, g), e.arc(n + d, i + a, c, g, g + xt), e.arc(n - u, i + r, c, g + xt, g + Et), e.closePath();
        break;
      case "rect":
        if (!m) {
          l = Math.SQRT1_2 * p, h = s ? s / 2 : l, e.rect(n - h, i - l, 2 * h, 2 * l);
          break;
        }
        g += Be;
      case "rectRot":
        d = Math.cos(g) * (s ? s / 2 : p), r = Math.cos(g) * p, a = Math.sin(g) * p, u = Math.sin(g) * (s ? s / 2 : p), e.moveTo(n - d, i - a), e.lineTo(n + u, i - r), e.lineTo(n + d, i + a), e.lineTo(n - u, i + r), e.closePath();
        break;
      case "crossRot":
        g += Be;
      case "cross":
        d = Math.cos(g) * (s ? s / 2 : p), r = Math.cos(g) * p, a = Math.sin(g) * p, u = Math.sin(g) * (s ? s / 2 : p), e.moveTo(n - d, i - a), e.lineTo(n + d, i + a), e.moveTo(n + u, i - r), e.lineTo(n - u, i + r);
        break;
      case "star":
        d = Math.cos(g) * (s ? s / 2 : p), r = Math.cos(g) * p, a = Math.sin(g) * p, u = Math.sin(g) * (s ? s / 2 : p), e.moveTo(n - d, i - a), e.lineTo(n + d, i + a), e.moveTo(n + u, i - r), e.lineTo(n - u, i + r), g += Be, d = Math.cos(g) * (s ? s / 2 : p), r = Math.cos(g) * p, a = Math.sin(g) * p, u = Math.sin(g) * (s ? s / 2 : p), e.moveTo(n - d, i - a), e.lineTo(n + d, i + a), e.moveTo(n + u, i - r), e.lineTo(n - u, i + r);
        break;
      case "line":
        r = s ? s / 2 : Math.cos(g) * p, a = Math.sin(g) * p, e.moveTo(n - r, i - a), e.lineTo(n + r, i + a);
        break;
      case "dash":
        e.moveTo(n, i), e.lineTo(n + Math.cos(g) * (s ? s / 2 : p), i + Math.sin(g) * p);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function ui(e, t, n) {
  return n = n || 0.5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function Ns(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function Hs(e) {
  e.restore();
}
function mp(e, t, n, i, s) {
  if (!t)
    return e.lineTo(n.x, n.y);
  if (s === "middle") {
    const o = (t.x + n.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, n.y);
  } else
    s === "after" != !!i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function _p(e, t, n, i) {
  if (!t)
    return e.lineTo(n.x, n.y);
  e.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? n.cp2x : n.cp1x, i ? n.cp2y : n.cp1y, n.x, n.y);
}
function Tn(e, t, n, i, s, o = {}) {
  const r = _t(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = s.string, bp(e, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && vp(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), mt(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, n, i, o.maxWidth)), e.fillText(c, n, i, o.maxWidth), xp(e, n, i, c, o), i += s.lineHeight;
  e.restore();
}
function bp(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), mt(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function xp(e, t, n, i, s) {
  if (s.strikethrough || s.underline) {
    const o = e.measureText(i), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = n - o.actualBoundingBoxAscent, c = n + o.actualBoundingBoxDescent, h = s.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = s.decorationWidth || 2, e.moveTo(r, h), e.lineTo(a, h), e.stroke();
  }
}
function vp(e, t) {
  const n = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function cs(e, t) {
  const { x: n, y: i, w: s, h: o, radius: r } = t;
  e.arc(n + r.topLeft, i + r.topLeft, r.topLeft, -xt, Et, !0), e.lineTo(n, i + o - r.bottomLeft), e.arc(n + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, Et, xt, !0), e.lineTo(n + s - r.bottomRight, i + o), e.arc(n + s - r.bottomRight, i + o - r.bottomRight, r.bottomRight, xt, 0, !0), e.lineTo(n + s, i + r.topRight), e.arc(n + s - r.topRight, i + r.topRight, r.topRight, 0, -xt, !0), e.lineTo(n + r.topLeft, i);
}
const yp = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Op = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Ep(e, t) {
  const n = ("" + e).match(yp);
  if (!n || n[1] === "normal")
    return t * 1.2;
  switch (e = +n[2], n[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const wp = (e) => +e || 0;
function Qo(e, t) {
  const n = {}, i = nt(t), s = i ? Object.keys(t) : t, o = nt(e) ? i ? (r) => Q(e[r], e[t[r]]) : (r) => e[r] : () => e;
  for (const r of s)
    n[r] = wp(o(r));
  return n;
}
function Cp(e) {
  return Qo(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function _n(e) {
  return Qo(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Lt(e) {
  const t = Cp(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function At(e, t) {
  e = e || {}, t = t || Ot.font;
  let n = Q(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = Q(e.style, t.style);
  i && !("" + i).match(Op) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const s = {
    family: Q(e.family, t.family),
    lineHeight: Ep(Q(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: Q(e.weight, t.weight),
    string: ""
  };
  return s.string = pp(s), s;
}
function Mi(e, t, n, i) {
  let s = !0, o, r, a;
  for (o = 0, r = e.length; o < r; ++o)
    if (a = e[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), s = !1), n !== void 0 && _t(a) && (a = a[n % a.length], s = !1), a !== void 0))
      return i && !s && (i.cacheable = !1), a;
}
function Sp(e, t, n) {
  const { min: i, max: s } = e, o = _c(t, (s - i) / 2), r = (a, l) => n && a === 0 ? 0 : a + l;
  return {
    min: r(i, -Math.abs(o)),
    max: r(s, o)
  };
}
function Ne(e, t) {
  return Object.assign(Object.create(e), t);
}
function tr(e, t = [
  ""
], n = e, i, s = () => e[0]) {
  ie(i) || (i = Rc("_fallback", e));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: n,
    _fallback: i,
    _getTarget: s,
    override: (r) => tr([
      r,
      ...e
    ], t, n, i)
  };
  return new Proxy(o, {
    deleteProperty(r, a) {
      return delete r[a], delete r._keys, delete e[0][a], !0;
    },
    get(r, a) {
      return Ac(r, a, () => Dp(a, t, e, r));
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
function Pn(e, t, n, i) {
  const s = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Pc(e, i),
    setContext: (o) => Pn(e, o, n, i),
    override: (o) => Pn(e.override(o), t, n, i)
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0;
    },
    get(o, r, a) {
      return Ac(o, r, () => Pp(o, r, a));
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
function Pc(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: n = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = e;
  return {
    allKeys: s,
    scriptable: n,
    indexable: i,
    isScriptable: Le(n) ? n : () => n,
    isIndexable: Le(i) ? i : () => i
  };
}
const Tp = (e, t) => e ? e + qo(t) : t, er = (e, t) => nt(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Ac(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t))
    return e[t];
  const i = n();
  return e[t] = i, i;
}
function Pp(e, t, n) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: r } = e;
  let a = i[t];
  return Le(a) && r.isScriptable(t) && (a = Ap(t, a, e, n)), _t(a) && a.length && (a = Ip(t, a, e, r.isIndexable)), er(t, a) && (a = Pn(a, s, o && o[t], r)), a;
}
function Ap(e, t, n, i) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = n;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  return a.add(e), t = t(o, r || i), a.delete(e), er(e, t) && (t = nr(s._scopes, s, e, t)), t;
}
function Ip(e, t, n, i) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = n;
  if (ie(o.index) && i(e))
    t = t[o.index % t.length];
  else if (nt(t[0])) {
    const l = t, c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = nr(c, s, e, h);
      t.push(Pn(d, o, r && r[e], a));
    }
  }
  return t;
}
function Ic(e, t, n) {
  return Le(e) ? e(t, n) : e;
}
const Rp = (e, t) => e === !0 ? t : typeof e == "string" ? Cn(t, e) : void 0;
function Mp(e, t, n, i, s) {
  for (const o of t) {
    const r = Rp(n, o);
    if (r) {
      e.add(r);
      const a = Ic(r._fallback, n, s);
      if (ie(a) && a !== n && a !== i)
        return a;
    } else if (r === !1 && ie(i) && n !== i)
      return null;
  }
  return !1;
}
function nr(e, t, n, i) {
  const s = t._rootScopes, o = Ic(t._fallback, n, i), r = [
    ...e,
    ...s
  ], a = /* @__PURE__ */ new Set();
  a.add(i);
  let l = sa(a, r, n, o || n, i);
  return l === null || ie(o) && o !== n && (l = sa(a, r, o, l, i), l === null) ? !1 : tr(Array.from(a), [
    ""
  ], s, o, () => kp(t, n, i));
}
function sa(e, t, n, i, s) {
  for (; n; )
    n = Mp(e, t, n, i, s);
  return n;
}
function kp(e, t, n) {
  const i = e._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return _t(s) && nt(n) ? n : s || {};
}
function Dp(e, t, n, i) {
  let s;
  for (const o of t)
    if (s = Rc(Tp(o, e), n), ie(s))
      return er(e, s) ? nr(n, i, e, s) : s;
}
function Rc(e, t) {
  for (const n of t) {
    if (!n)
      continue;
    const i = n[e];
    if (ie(i))
      return i;
  }
}
function oa(e) {
  let t = e._keys;
  return t || (t = e._keys = Lp(e._scopes)), t;
}
function Lp(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const i of Object.keys(n).filter((s) => !s.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function Np(e, t, n, i) {
  const { iScale: s } = e, { key: o = "r" } = this._parsing, r = new Array(i);
  let a, l, c, h;
  for (a = 0, l = i; a < l; ++a)
    c = a + n, h = t[c], r[a] = {
      r: s.parse(Cn(h, o), c)
    };
  return r;
}
const Hp = Number.EPSILON || 1e-14, An = (e, t) => t < e.length && !e[t].skip && e[t], Mc = (e) => e === "x" ? "y" : "x";
function zp(e, t, n, i) {
  const s = e.skip ? t : e, o = t, r = n.skip ? t : n, a = bo(o, s), l = bo(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = i * c, u = i * h;
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
function Fp(e, t, n) {
  const i = e.length;
  let s, o, r, a, l, c = An(e, 0);
  for (let h = 0; h < i - 1; ++h)
    if (l = c, c = An(e, h + 1), !(!l || !c)) {
      if (Qn(t[h], 0, Hp)) {
        n[h] = n[h + 1] = 0;
        continue;
      }
      s = n[h] / t[h], o = n[h + 1] / t[h], a = Math.pow(s, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), n[h] = s * r * t[h], n[h + 1] = o * r * t[h]);
    }
}
function Vp(e, t, n = "x") {
  const i = Mc(n), s = e.length;
  let o, r, a, l = An(e, 0);
  for (let c = 0; c < s; ++c) {
    if (r = a, a = l, l = An(e, c + 1), !a)
      continue;
    const h = a[n], d = a[i];
    r && (o = (h - r[n]) / 3, a[`cp1${n}`] = h - o, a[`cp1${i}`] = d - o * t[c]), l && (o = (l[n] - h) / 3, a[`cp2${n}`] = h + o, a[`cp2${i}`] = d + o * t[c]);
  }
}
function Bp(e, t = "x") {
  const n = Mc(t), i = e.length, s = Array(i).fill(0), o = Array(i);
  let r, a, l, c = An(e, 0);
  for (r = 0; r < i; ++r)
    if (a = l, l = c, c = An(e, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        s[r] = h !== 0 ? (c[n] - l[n]) / h : 0;
      }
      o[r] = a ? c ? Sn(s[r - 1]) !== Sn(s[r]) ? 0 : (s[r - 1] + s[r]) / 2 : s[r - 1] : s[r];
    }
  Fp(e, s, o), Vp(e, o, t);
}
function ki(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function Wp(e, t) {
  let n, i, s, o, r, a = ui(e[0], t);
  for (n = 0, i = e.length; n < i; ++n)
    r = o, o = a, a = n < i - 1 && ui(e[n + 1], t), o && (s = e[n], r && (s.cp1x = ki(s.cp1x, t.left, t.right), s.cp1y = ki(s.cp1y, t.top, t.bottom)), a && (s.cp2x = ki(s.cp2x, t.left, t.right), s.cp2y = ki(s.cp2y, t.top, t.bottom)));
}
function jp(e, t, n, i, s) {
  let o, r, a, l;
  if (t.spanGaps && (e = e.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Bp(e, s);
  else {
    let c = i ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      a = e[o], l = zp(c, a, e[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && Wp(e, n);
}
function kc() {
  return typeof window < "u" && typeof document < "u";
}
function ir(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function hs(e, t, n) {
  let i;
  return typeof e == "string" ? (i = parseInt(e, 10), e.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[n])) : i = e, i;
}
const zs = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Gp(e, t) {
  return zs(e).getPropertyValue(t);
}
const Up = [
  "top",
  "right",
  "bottom",
  "left"
];
function nn(e, t, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let s = 0; s < 4; s++) {
    const o = Up[s];
    i[o] = parseFloat(e[t + "-" + o + n]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const $p = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Kp(e, t) {
  const n = e.touches, i = n && n.length ? n[0] : e, { offsetX: s, offsetY: o } = i;
  let r = !1, a, l;
  if ($p(s, o, e.target))
    a = s, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = i.clientX - c.left, l = i.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function $e(e, t) {
  if ("native" in e)
    return e;
  const { canvas: n, currentDevicePixelRatio: i } = t, s = zs(n), o = s.boxSizing === "border-box", r = nn(s, "padding"), a = nn(s, "border", "width"), { x: l, y: c, box: h } = Kp(e, n), d = r.left + (h && a.left), u = r.top + (h && a.top);
  let { width: f, height: m } = t;
  return o && (f -= r.width + a.width, m -= r.height + a.height), {
    x: Math.round((l - d) / f * n.width / i),
    y: Math.round((c - u) / m * n.height / i)
  };
}
function Yp(e, t, n) {
  let i, s;
  if (t === void 0 || n === void 0) {
    const o = ir(e);
    if (!o)
      t = e.clientWidth, n = e.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = zs(o), l = nn(a, "border", "width"), c = nn(a, "padding");
      t = r.width - c.width - l.width, n = r.height - c.height - l.height, i = hs(a.maxWidth, o, "clientWidth"), s = hs(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: n,
    maxWidth: i || rs,
    maxHeight: s || rs
  };
}
const Di = (e) => Math.round(e * 10) / 10;
function Xp(e, t, n, i) {
  const s = zs(e), o = nn(s, "margin"), r = hs(s.maxWidth, e, "clientWidth") || rs, a = hs(s.maxHeight, e, "clientHeight") || rs, l = Yp(e, t, n);
  let { width: c, height: h } = l;
  if (s.boxSizing === "content-box") {
    const u = nn(s, "border", "width"), f = nn(s, "padding");
    c -= f.width + u.width, h -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, i ? c / i : h - o.height), c = Di(Math.min(c, r, l.maxWidth)), h = Di(Math.min(h, a, l.maxHeight)), c && !h && (h = Di(c / 2)), (t !== void 0 || n !== void 0) && i && l.height && h > l.height && (h = l.height, c = Di(Math.floor(h * i))), {
    width: c,
    height: h
  };
}
function ra(e, t, n) {
  const i = t || 1, s = Math.floor(e.height * i), o = Math.floor(e.width * i);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const r = e.canvas;
  return r.style && (n || !r.style.height && !r.style.width) && (r.style.height = `${e.height}px`, r.style.width = `${e.width}px`), e.currentDevicePixelRatio !== i || r.height !== s || r.width !== o ? (e.currentDevicePixelRatio = i, r.height = s, r.width = o, e.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
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
  const n = Gp(e, t), i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Ke(e, t, n, i) {
  return {
    x: e.x + n * (t.x - e.x),
    y: e.y + n * (t.y - e.y)
  };
}
function Jp(e, t, n, i) {
  return {
    x: e.x + n * (t.x - e.x),
    y: i === "middle" ? n < 0.5 ? e.y : t.y : i === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
  };
}
function Zp(e, t, n, i) {
  const s = {
    x: e.cp2x,
    y: e.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Ke(e, s, n), a = Ke(s, o, n), l = Ke(o, t, n), c = Ke(r, a, n), h = Ke(a, l, n);
  return Ke(c, h, n);
}
const Qp = function(e, t) {
  return {
    x(n) {
      return e + e + t - n;
    },
    setWidth(n) {
      t = n;
    },
    textAlign(n) {
      return n === "center" ? n : n === "right" ? "left" : "right";
    },
    xPlus(n, i) {
      return n - i;
    },
    leftForLtr(n, i) {
      return n - i;
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
function bn(e, t, n) {
  return e ? Qp(t, n) : tg();
}
function Dc(e, t) {
  let n, i;
  (t === "ltr" || t === "rtl") && (n = e.canvas.style, i = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", t, "important"), e.prevTextDirection = i);
}
function Lc(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Nc(e) {
  return e === "angle" ? {
    between: di,
    compare: Zf,
    normalize: jt
  } : {
    between: Je,
    compare: (t, n) => t - n,
    normalize: (t) => t
  };
}
function la({ start: e, end: t, count: n, loop: i, style: s }) {
  return {
    start: e % n,
    end: t % n,
    loop: i && (t - e + 1) % n === 0,
    style: s
  };
}
function eg(e, t, n) {
  const { property: i, start: s, end: o } = n, { between: r, normalize: a } = Nc(i), l = t.length;
  let { start: c, end: h, loop: d } = e, u, f;
  if (d) {
    for (c += l, h += l, u = 0, f = l; u < f && r(a(t[c % l][i]), s, o); ++u)
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
function Hc(e, t, n) {
  if (!n)
    return [
      e
    ];
  const { property: i, start: s, end: o } = n, r = t.length, { compare: a, between: l, normalize: c } = Nc(i), { start: h, end: d, loop: u, style: f } = eg(e, t, n), m = [];
  let p = !1, g = null, x, v, y;
  const w = () => l(s, y, x) && a(s, y) !== 0, E = () => a(o, x) === 0 || l(o, y, x), k = () => p || w(), R = () => !p || E();
  for (let P = h, H = h; P <= d; ++P)
    v = t[P % r], !v.skip && (x = c(v[i]), x !== y && (p = l(x, s, o), g === null && k() && (g = a(x, s) === 0 ? P : H), g !== null && R() && (m.push(la({
      start: g,
      end: P,
      loop: u,
      count: r,
      style: f
    })), g = null), H = P, y = x));
  return g !== null && m.push(la({
    start: g,
    end: d,
    loop: u,
    count: r,
    style: f
  })), m;
}
function zc(e, t) {
  const n = [], i = e.segments;
  for (let s = 0; s < i.length; s++) {
    const o = Hc(i[s], e.points, t);
    o.length && n.push(...o);
  }
  return n;
}
function ng(e, t, n, i) {
  let s = 0, o = t - 1;
  if (n && !i)
    for (; s < t && !e[s].skip; )
      s++;
  for (; s < t && e[s].skip; )
    s++;
  for (s %= t, n && (o += s); o > s && e[o % t].skip; )
    o--;
  return o %= t, {
    start: s,
    end: o
  };
}
function ig(e, t, n, i) {
  const s = e.length, o = [];
  let r = t, a = e[t], l;
  for (l = t + 1; l <= n; ++l) {
    const c = e[l % s];
    c.skip || c.stop ? a.skip || (i = !1, o.push({
      start: t % s,
      end: (l - 1) % s,
      loop: i
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % s,
    end: r % s,
    loop: i
  }), o;
}
function sg(e, t) {
  const n = e.points, i = e.options.spanGaps, s = n.length;
  if (!s)
    return [];
  const o = !!e._loop, { start: r, end: a } = ng(n, s, o, i);
  if (i === !0)
    return ca(e, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], n, t);
  const l = a < r ? a + s : a, c = !!e._fullLoop && r === 0 && a === s - 1;
  return ca(e, ig(n, r, l, c), n, t);
}
function ca(e, t, n, i) {
  return !i || !i.setContext || !n ? t : og(e, t, n, i);
}
function og(e, t, n, i) {
  const s = e._chart.getContext(), o = ha(e.options), { _datasetIndex: r, options: { spanGaps: a } } = e, l = n.length, c = [];
  let h = o, d = t[0].start, u = d;
  function f(m, p, g, x) {
    const v = a ? -1 : 1;
    if (m !== p) {
      for (m += l; n[m % l].skip; )
        m -= v;
      for (; n[p % l].skip; )
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
    let p = n[d % l], g;
    for (u = d + 1; u <= m.end; u++) {
      const x = n[u % l];
      g = ha(i.setContext(Ne(s, {
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
  _notify(t, n, i, s) {
    const o = n.listeners[s], r = n.duration;
    o.forEach((a) => a({
      chart: t,
      initial: n.initial,
      numSteps: r,
      currentStep: Math.min(i - n.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Oc.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length)
        return;
      const o = i.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > i.duration && (i.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (s.draw(), this._notify(s, i, t, "progress")), o.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), n += o.length;
    }), this._lastDate = t, n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let i = n.get(t);
    return i || (i = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, n.set(t, i)), i;
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n && (n.running = !0, n.start = Date.now(), n.duration = n.items.reduce((i, s) => Math.max(i, s._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length)
      return;
    const i = n.items;
    let s = i.length - 1;
    for (; s >= 0; --s)
      i[s].cancel();
    n.items = [], this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var ge = /* @__PURE__ */ new ag();
const da = "transparent", lg = {
  boolean(e, t, n) {
    return n > 0.5 ? t : e;
  },
  color(e, t, n) {
    const i = ea(e || da), s = i.valid && ea(t || da);
    return s && s.valid ? s.mix(i, n).hexString() : t;
  },
  number(e, t, n) {
    return e + (t - e) * n;
  }
};
class cg {
  constructor(t, n, i, s) {
    const o = n[i];
    s = Mi([
      t.to,
      s,
      o,
      t.from
    ]);
    const r = Mi([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || lg[t.type || typeof r], this._easing = ti[t.easing] || ti.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = n, this._prop = i, this._from = r, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = i - this._start, r = this._duration - o;
      this._start = i, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Mi([
        t.to,
        n,
        s,
        t.from
      ]), this._from = Mi([
        t.from,
        s,
        n
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const n = t - this._start, i = this._duration, s = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || n < i), !this._active) {
      this._target[s] = a, this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[s] = o;
      return;
    }
    l = n / i % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      t.push({
        res: n,
        rej: i
      });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej", i = this._promises || [];
    for (let s = 0; s < i.length; s++)
      i[s][n]();
  }
}
class Fc {
  constructor(t, n) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(n);
  }
  configure(t) {
    if (!nt(t))
      return;
    const n = Object.keys(Ot.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!nt(o))
        return;
      const r = {};
      for (const a of n)
        r[a] = o[a];
      (_t(o.properties) && o.properties || [
        s
      ]).forEach((a) => {
        (a === s || !i.has(a)) && i.set(a, r);
      });
    });
  }
  _animateOptions(t, n) {
    const i = n.options, s = dg(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && hg(t.options.$animations, i).then(() => {
      t.options = i;
    }, () => {
    }), o;
  }
  _createAnimations(t, n) {
    const i = this._properties, s = [], o = t.$animations || (t.$animations = {}), r = Object.keys(n), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, n));
        continue;
      }
      const h = n[c];
      let d = o[c];
      const u = i.get(c);
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
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const i = this._createAnimations(t, n);
    if (i.length)
      return ge.add(this._chart, i), !0;
  }
}
function hg(e, t) {
  const n = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = e[i[s]];
    o && o.active() && n.push(o.wait());
  }
  return Promise.all(n);
}
function dg(e, t) {
  if (!t)
    return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return n.$shared && (e.options = n = Object.assign({}, n, {
    $shared: !1,
    $animations: {}
  })), n;
}
function ua(e, t) {
  const n = e && e.options || {}, i = n.reverse, s = n.min === void 0 ? t : 0, o = n.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function ug(e, t, n) {
  if (n === !1)
    return !1;
  const i = ua(e, n), s = ua(t, n);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function fg(e) {
  let t, n, i, s;
  return nt(e) ? (t = e.top, n = e.right, i = e.bottom, s = e.left) : t = n = i = s = e, {
    top: t,
    right: n,
    bottom: i,
    left: s,
    disabled: e === !1
  };
}
function Vc(e, t) {
  const n = [], i = e._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    n.push(i[s].index);
  return n;
}
function fa(e, t, n, i = {}) {
  const s = e.keys, o = i.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (l = +s[r], l === n) {
        if (i.all)
          continue;
        break;
      }
      c = e.values[l], bt(c) && (o || t === 0 || Sn(t) === Sn(c)) && (t += c);
    }
    return t;
  }
}
function pg(e) {
  const t = Object.keys(e), n = new Array(t.length);
  let i, s, o;
  for (i = 0, s = t.length; i < s; ++i)
    o = t[i], n[i] = {
      x: o,
      y: e[o]
    };
  return n;
}
function pa(e, t) {
  const n = e && e.options.stacked;
  return n || n === void 0 && t.stack !== void 0;
}
function gg(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function mg(e) {
  const { min: t, max: n, minDefined: i, maxDefined: s } = e.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? n : Number.POSITIVE_INFINITY
  };
}
function _g(e, t, n) {
  const i = e[t] || (e[t] = {});
  return i[n] || (i[n] = {});
}
function ga(e, t, n, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = e[s.index];
    if (n && o > 0 || !n && o < 0)
      return s.index;
  }
  return null;
}
function ma(e, t) {
  const { chart: n, _cachedMeta: i } = e, s = n._stacks || (n._stacks = {}), { iScale: o, vScale: r, index: a } = i, l = o.axis, c = r.axis, h = gg(o, r, i), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const m = t[f], { [l]: p, [c]: g } = m, x = m._stacks || (m._stacks = {});
    u = x[c] = _g(s, h, p), u[a] = g, u._top = ga(u, r, !0, i.type), u._bottom = ga(u, r, !1, i.type);
    const v = u._visualValues || (u._visualValues = {});
    v[a] = g;
  }
}
function qs(e, t) {
  const n = e.scales;
  return Object.keys(n).filter((i) => n[i].axis === t).shift();
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
function xg(e, t, n) {
  return Ne(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Hn(e, t) {
  const n = e.controller.index, i = e.vScale && e.vScale.axis;
  if (i) {
    t = t || e._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[i] === void 0 || o[i][n] === void 0)
        return;
      delete o[i][n], o[i]._visualValues !== void 0 && o[i]._visualValues[n] !== void 0 && delete o[i]._visualValues[n];
    }
  }
}
const Js = (e) => e === "reset" || e === "none", _a = (e, t) => t ? e : Object.assign({}, e), vg = (e, t, n) => e && !t.hidden && t._stacked && {
  keys: Vc(n, !0),
  values: null
};
class xn {
  constructor(t, n) {
    this.chart = t, this._ctx = t.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = pa(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Hn(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, n = this._cachedMeta, i = this.getDataset(), s = (d, u, f, m) => d === "x" ? u : d === "r" ? m : f, o = n.xAxisID = Q(i.xAxisID, qs(t, "x")), r = n.yAxisID = Q(i.yAxisID, qs(t, "y")), a = n.rAxisID = Q(i.rAxisID, qs(t, "r")), l = n.indexAxis, c = n.iAxisID = s(l, o, r, a), h = n.vAxisID = s(l, r, o, a);
    n.xScale = this.getScaleForId(o), n.yScale = this.getScaleForId(r), n.rScale = this.getScaleForId(a), n.iScale = this.getScaleForId(c), n.vScale = this.getScaleForId(h);
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
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Zr(this._data, this), t._stacked && Hn(t);
  }
  _dataCheck() {
    const t = this.getDataset(), n = t.data || (t.data = []), i = this._data;
    if (nt(n))
      this._data = pg(n);
    else if (i !== n) {
      if (i) {
        Zr(i, this);
        const s = this._cachedMeta;
        Hn(s), s._parsed = [];
      }
      n && Object.isExtensible(n) && np(n, this), this._syncList = [], this._data = n;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta, i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = n._stacked;
    n._stacked = pa(n.vScale, n), n.stack !== i.stack && (s = !0, Hn(n), n.stack = i.stack), this._resyncElements(t), (s || o !== n._stacked) && ma(this, n._parsed);
  }
  configure() {
    const t = this.chart.config, n = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), n, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: r } = i, a = o.axis;
    let l = t === 0 && n === s.length ? !0 : i._sorted, c = t > 0 && i._parsed[t - 1], h, d, u;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, u = s;
    else {
      _t(s[t]) ? u = this.parseArrayData(i, s, t, n) : nt(s[t]) ? u = this.parseObjectData(i, s, t, n) : u = this.parsePrimitiveData(i, s, t, n);
      const f = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < n; ++h)
        i._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
      i._sorted = l;
    }
    r && ma(this, u);
  }
  parsePrimitiveData(t, n, i, s) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(s);
    let u, f, m;
    for (u = 0, f = s; u < f; ++u)
      m = u + i, d[u] = {
        [a]: h || o.parse(c[m], m),
        [l]: r.parse(n[m], m)
      };
    return d;
  }
  parseArrayData(t, n, i, s) {
    const { xScale: o, yScale: r } = t, a = new Array(s);
    let l, c, h, d;
    for (l = 0, c = s; l < c; ++l)
      h = l + i, d = n[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, n, i, s) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let h, d, u, f;
    for (h = 0, d = s; h < d; ++h)
      u = h + i, f = n[u], c[h] = {
        x: o.parse(Cn(f, a), u),
        y: r.parse(Cn(f, l), u)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, i) {
    const s = this.chart, o = this._cachedMeta, r = n[t.axis], a = {
      keys: Vc(s, !0),
      values: n._stacks[t.axis]._visualValues
    };
    return fa(a, r, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, n, i, s) {
    const o = i[n.axis];
    let r = o === null ? NaN : o;
    const a = s && i._stacks[n.axis];
    s && a && (s.values = a, r = fa(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, n) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, r = s.length, a = this._getOtherScale(t), l = vg(n, i, this.chart), c = {
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
    const n = this._cachedMeta._parsed, i = [];
    let s, o, r;
    for (s = 0, o = n.length; s < o; ++s)
      r = n[s][t.axis], bt(r) && i.push(r);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, i = n.iScale, s = n.vScale, o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"), n._clip = fg(Q(this.options.clip, ug(n.xScale, n.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, n = this.chart, i = this._cachedMeta, s = i.data || [], o = n.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || s.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (i.dataset && i.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = s[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
  }
  getStyle(t, n) {
    const i = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, n, i) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = xg(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = bg(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!n, o.mode = i, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", i) {
    const s = n === "active", o = this._cachedDataOpts, r = t + "-" + n, a = o[r], l = this.enableOptionSharing && ie(i);
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
    ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(Ot.elements[t]), m = () => this.getContext(i, s, n), p = c.resolveNamedOptions(u, f, m, d);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(_a(p, l))), p;
  }
  _resolveAnimations(t, n, i) {
    const s = this.chart, o = this._cachedDataOpts, r = `animation-${n}`, a = o[r];
    if (a)
      return a;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, n), u = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(u, this.getContext(t, i, n));
    }
    const c = new Fc(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, n) {
    return !n || Js(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const i = this.resolveDataElementOptions(t, n), s = this._sharedOptions, o = this.getSharedOptions(i), r = this.includeOptions(n, o) || o !== s;
    return this.updateSharedOptions(o, n, i), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, n, i, s) {
    Js(s) ? Object.assign(t, i) : this._resolveAnimations(n, s).update(t, i);
  }
  updateSharedOptions(t, n, i) {
    t && !Js(n) && this._resolveAnimations(void 0, n).update(t, i);
  }
  _setStyle(t, n, i, s) {
    t.active = s;
    const o = this.getStyle(n, s);
    this._resolveAnimations(n, i, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !0);
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
    const n = this._data, i = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const s = i.length, o = n.length, r = Math.min(o, s);
    r && this.parse(0, r), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, n, i = !0) {
    const s = this._cachedMeta, o = s.data, r = t + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= r; a--)
        c[a] = c[a - n];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, n), i && this.updateElements(o, t, n, "reset");
  }
  updateElements(t, n, i, s) {
  }
  _removeElements(t, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, n);
      i._stacked && Hn(i, s);
    }
    i.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [n, i, s] = t;
      this[n](i, s);
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
  _onDataSplice(t, n) {
    n && this._sync([
      "_removeElements",
      t,
      n
    ]);
    const i = arguments.length - 2;
    i && this._sync([
      "_insertElements",
      t,
      i
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
K(xn, "defaults", {}), K(xn, "datasetElementType", null), K(xn, "dataElementType", null);
function yg(e, t, n) {
  let i = 1, s = 1, o = 0, r = 0;
  if (t < dt) {
    const a = e, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), u = Math.sin(l), f = (y, w, E) => di(y, a, l, !0) ? 1 : Math.max(w, w * n, E, E * n), m = (y, w, E) => di(y, a, l, !0) ? -1 : Math.min(w, w * n, E, E * n), p = f(0, c, d), g = f(xt, h, u), x = m(Et, c, d), v = m(Et + xt, h, u);
    i = (p - x) / 2, s = (g - v) / 2, o = -(p + x) / 2, r = -(g + v) / 2;
  }
  return {
    ratioX: i,
    ratioY: s,
    offsetX: o,
    offsetY: r
  };
}
class Gn extends xn {
  constructor(t, n) {
    super(t, n), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, n) {
    const i = this.getDataset().data, s = this._cachedMeta;
    if (this._parsing === !1)
      s._parsed = i;
    else {
      let o = (l) => +i[l];
      if (nt(i[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +Cn(i[c], l);
      }
      let r, a;
      for (r = t, a = t + n; r < a; ++r)
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
    let t = dt, n = -dt;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller, o = s._getRotation(), r = s._getCircumference();
        t = Math.min(t, o), n = Math.max(n, o + r);
      }
    return {
      rotation: t,
      circumference: n - t
    };
  }
  update(t) {
    const n = this.chart, { chartArea: i } = n, s = this._cachedMeta, o = s.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(i.width, i.height) - r) / 2, 0), l = Math.min(Wf(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: m, offsetY: p } = yg(d, h, l), g = (i.width - r) / u, x = (i.height - r) / f, v = Math.max(Math.min(g, x) / 2, 0), y = _c(this.options.radius, v), w = Math.max(y * l, 0), E = (y - w) / this._getVisibleDatasetWeightTotal();
    this.offsetX = m * y, this.offsetY = p * y, s.total = this.calculateTotal(), this.outerRadius = y - E * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - E * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, n) {
    const i = this.options, s = this._cachedMeta, o = this._getCircumference();
    return n && i.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / dt);
  }
  updateElements(t, n, i, s) {
    const o = s === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, m = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: g } = this._getSharedOptions(n, s);
    let x = this._getRotation(), v;
    for (v = 0; v < n; ++v)
      x += this._circumference(v, o);
    for (v = n; v < n + i; ++v) {
      const y = this._circumference(v, o), w = t[v], E = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: x,
        endAngle: x + y,
        circumference: y,
        outerRadius: m,
        innerRadius: f
      };
      g && (E.options = p || this.resolveDataElementOptions(v, w.active ? "active" : s)), x += y, this.updateElement(w, v, E, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, n = t.data;
    let i = 0, s;
    for (s = 0; s < n.length; s++) {
      const o = t._parsed[s];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !n[s].hidden && (i += Math.abs(o));
    }
    return i;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? dt * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = Ds(n._parsed[t], i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const i = this.chart;
    let s, o, r, a, l;
    if (!t) {
      for (s = 0, o = i.data.datasets.length; s < o; ++s)
        if (i.isDatasetVisible(s)) {
          r = i.getDatasetMeta(s), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (s = 0, o = t.length; s < o; ++s)
      l = a.resolveDataElementOptions(s), l.borderAlign !== "inner" && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let i = 0, s = t.length; i < s; ++i) {
      const o = this.resolveDataElementOptions(i);
      n = Math.max(n, o.offset || 0, o.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(Q(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
K(Gn, "id", "doughnut"), K(Gn, "defaults", {
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
}), K(Gn, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing"
}), K(Gn, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: i, color: s } } = t.legend.options;
            return n.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: s,
                lineWidth: l.borderWidth,
                pointStyle: i,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, n, i) {
        i.chart.toggleDataVisibility(n.index), i.chart.update();
      }
    }
  }
});
class Ki extends xn {
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale, i = this.getParsed(t);
    return {
      label: n.getLabels()[t],
      value: "" + n.getLabelForValue(i[n.axis])
    };
  }
  parseObjectData(t, n, i, s) {
    return Np.bind(this)(t, n, i, s);
  }
  update(t) {
    const n = this._cachedMeta, i = n.dataset, s = n.data || [], o = n.iScale.getLabels();
    if (i.points = s, t !== "resize") {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const a = {
        _loop: !0,
        _fullLoop: o.length === s.length,
        options: r
      };
      this.updateElement(i, void 0, a, t);
    }
    this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, n, i, s) {
    const o = this._cachedMeta.rScale, r = s === "reset";
    for (let a = n; a < n + i; a++) {
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
K(Ki, "id", "radar"), K(Ki, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), K(Ki, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
function je() {
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
    return je();
  }
  parse() {
    return je();
  }
  format() {
    return je();
  }
  add() {
    return je();
  }
  diff() {
    return je();
  }
  startOf() {
    return je();
  }
  endOf() {
    return je();
  }
}
var Og = {
  _date: sr
};
function Eg(e, t, n, i) {
  const { controller: s, data: o, _sorted: r } = e, a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? tp : xo;
    if (i) {
      if (s._sharedOptions) {
        const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const d = l(o, t, n - h), u = l(o, t, n + h);
          return {
            lo: d.lo,
            hi: u.hi
          };
        }
      }
    } else
      return l(o, t, n);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function xi(e, t, n, i, s) {
  const o = e.getSortedVisibleDatasetMetas(), r = n[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: u } = Eg(o[a], t, r, s);
    for (let f = d; f <= u; ++f) {
      const m = h[f];
      m.skip || i(m, c, f);
    }
  }
}
function wg(e) {
  const t = e.indexOf("x") !== -1, n = e.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, r = n ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Zs(e, t, n, i, s) {
  const o = [];
  return !s && !e.isPointInArea(t) || xi(e, n, t, function(a, l, c) {
    !s && !ui(a, e.chartArea, 0) || a.inRange(t.x, t.y, i) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Cg(e, t, n, i) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: d } = vc(r, {
      x: t.x,
      y: t.y
    });
    di(d, c, h) && s.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return xi(e, n, t, o), s;
}
function Sg(e, t, n, i, s, o) {
  let r = [];
  const a = wg(n);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, u) {
    const f = h.inRange(t.x, t.y, s);
    if (i && !f)
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
  return xi(e, n, t, c), r;
}
function Qs(e, t, n, i, s, o) {
  return !o && !e.isPointInArea(t) ? [] : n === "r" && !i ? Cg(e, t, n, s) : Sg(e, t, n, i, s, o);
}
function ba(e, t, n, i, s) {
  const o = [], r = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return xi(e, n, t, (l, c, h) => {
    l[r](t[n], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, s));
  }), i && !a ? [] : o;
}
var Tg = {
  evaluateInteractionItems: xi,
  modes: {
    index(e, t, n, i) {
      const s = $e(t, e), o = n.axis || "x", r = n.includeInvisible || !1, a = n.intersect ? Zs(e, s, o, i, r) : Qs(e, s, o, !1, i, r), l = [];
      return a.length ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(e, t, n, i) {
      const s = $e(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      let a = n.intersect ? Zs(e, s, o, i, r) : Qs(e, s, o, !1, i, r);
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
    point(e, t, n, i) {
      const s = $e(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return Zs(e, s, o, i, r);
    },
    nearest(e, t, n, i) {
      const s = $e(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return Qs(e, s, o, n.intersect, i, r);
    },
    x(e, t, n, i) {
      const s = $e(t, e);
      return ba(e, s, "x", n.intersect, i);
    },
    y(e, t, n, i) {
      const s = $e(t, e);
      return ba(e, s, "y", n.intersect, i);
    }
  }
};
const Bc = [
  "left",
  "top",
  "right",
  "bottom"
];
function zn(e, t) {
  return e.filter((n) => n.pos === t);
}
function xa(e, t) {
  return e.filter((n) => Bc.indexOf(n.pos) === -1 && n.box.axis === t);
}
function Fn(e, t) {
  return e.sort((n, i) => {
    const s = t ? i : n, o = t ? n : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Pg(e) {
  const t = [];
  let n, i, s, o, r, a;
  for (n = 0, i = (e || []).length; n < i; ++n)
    s = e[n], { position: o, options: { stack: r, stackWeight: a = 1 } } = s, t.push({
      index: n,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function Ag(e) {
  const t = {};
  for (const n of e) {
    const { stack: i, pos: s, stackWeight: o } = n;
    if (!i || !Bc.includes(s))
      continue;
    const r = t[i] || (t[i] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function Ig(e, t) {
  const n = Ag(e), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box, c = n[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * i : l && t.availableWidth, a.height = s) : (a.width = i, a.height = h ? h * s : l && t.availableHeight);
  }
  return n;
}
function Rg(e) {
  const t = Pg(e), n = Fn(t.filter((c) => c.box.fullSize), !0), i = Fn(zn(t, "left"), !0), s = Fn(zn(t, "right")), o = Fn(zn(t, "top"), !0), r = Fn(zn(t, "bottom")), a = xa(t, "x"), l = xa(t, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: zn(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function va(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i]);
}
function Wc(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function Mg(e, t, n, i) {
  const { pos: s, box: o } = n, r = e.maxPadding;
  if (!nt(s)) {
    n.size && (e[s] -= n.size);
    const d = i[n.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, n.horizontal ? o.height : o.width), n.size = d.size / d.count, e[s] += n.size;
  }
  o.getPadding && Wc(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - va(r, e, "left", "right")), l = Math.max(0, t.outerHeight - va(r, e, "top", "bottom")), c = a !== e.w, h = l !== e.h;
  return e.w = a, e.h = l, n.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function kg(e) {
  const t = e.maxPadding;
  function n(i) {
    const s = Math.max(t[i] - e[i], 0);
    return e[i] += s, s;
  }
  e.y += n("top"), e.x += n("left"), n("right"), n("bottom");
}
function Dg(e, t) {
  const n = t.maxPadding;
  function i(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((r) => {
      o[r] = Math.max(t[r], n[r]);
    }), o;
  }
  return i(e ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Un(e, t, n, i) {
  const s = [];
  let o, r, a, l, c, h;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    a = e[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Dg(a.horizontal, t));
    const { same: d, other: u } = Mg(t, n, a, i);
    c |= d && s.length, h = h || u, l.fullSize || s.push(a);
  }
  return c && Un(s, t, n, i) || h;
}
function Li(e, t, n, i, s) {
  e.top = n, e.left = t, e.right = t + i, e.bottom = n + s, e.width = i, e.height = s;
}
function ya(e, t, n, i) {
  const s = n.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box, c = i[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, u = c.size || l.height;
      ie(c.start) && (r = c.start), l.fullSize ? Li(l, s.left, r, n.outerWidth - s.right - s.left, u) : Li(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, u = c.size || l.width;
      ie(c.start) && (o = c.start), l.fullSize ? Li(l, o, s.top, u, n.outerHeight - s.bottom - s.top) : Li(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Ae = {
  addBox(e, t) {
    e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(n) {
            t.draw(n);
          }
        }
      ];
    }, e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    t.fullSize = n.fullSize, t.position = n.position, t.weight = n.weight;
  },
  update(e, t, n, i) {
    if (!e)
      return;
    const s = Lt(e.options.layout.padding), o = Math.max(t - s.width, 0), r = Math.max(n - s.height, 0), a = Rg(e.boxes), l = a.vertical, c = a.horizontal;
    ot(e.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = l.reduce((p, g) => g.box.options && g.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: n,
      padding: s,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), u = Object.assign({}, s);
    Wc(u, Lt(i));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: s.left,
      y: s.top
    }, s), m = Ig(l.concat(c), d);
    Un(a.fullSize, f, d, m), Un(l, f, d, m), Un(c, f, d, m) && Un(l, f, d, m), kg(f), ya(a.leftAndTop, f, d, m), f.x += f.w, f.y += f.h, ya(a.rightAndBottom, f, d, m), e.chartArea = {
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
class jc {
  acquireContext(t, n) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, i) {
  }
  removeEventListener(t, n, i) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, i, s) {
    return n = Math.max(0, n || t.width), i = i || t.height, {
      width: n,
      height: Math.max(0, s ? Math.floor(n / s) : i)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Lg extends jc {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Yi = "$chartjs", Ng = {
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
  const n = e.style, i = e.getAttribute("height"), s = e.getAttribute("width");
  if (e[Yi] = {
    initial: {
      height: i,
      width: s,
      style: {
        display: n.display,
        height: n.height,
        width: n.width
      }
    }
  }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", Oa(s)) {
    const o = aa(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (Oa(i))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = aa(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const Gc = qp ? {
  passive: !0
} : !1;
function zg(e, t, n) {
  e.addEventListener(t, n, Gc);
}
function Fg(e, t, n) {
  e.canvas.removeEventListener(t, n, Gc);
}
function Vg(e, t) {
  const n = Ng[e.type] || e.type, { x: i, y: s } = $e(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null
  };
}
function ds(e, t) {
  for (const n of e)
    if (n === t || n.contains(t))
      return !0;
}
function Bg(e, t, n) {
  const i = e.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || ds(a.addedNodes, i), r = r && !ds(a.removedNodes, i);
    r && n();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function Wg(e, t, n) {
  const i = e.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || ds(a.removedNodes, i), r = r && !ds(a.addedNodes, i);
    r && n();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const fi = /* @__PURE__ */ new Map();
let Ea = 0;
function Uc() {
  const e = window.devicePixelRatio;
  e !== Ea && (Ea = e, fi.forEach((t, n) => {
    n.currentDevicePixelRatio !== e && t();
  }));
}
function jg(e, t) {
  fi.size || window.addEventListener("resize", Uc), fi.set(e, t);
}
function Gg(e) {
  fi.delete(e), fi.size || window.removeEventListener("resize", Uc);
}
function Ug(e, t, n) {
  const i = e.canvas, s = i && ir(i);
  if (!s)
    return;
  const o = Ec((a, l) => {
    const c = s.clientWidth;
    n(a, l), c < s.clientWidth && n();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(s), jg(e, o), r;
}
function to(e, t, n) {
  n && n.disconnect(), t === "resize" && Gg(e);
}
function $g(e, t, n) {
  const i = e.canvas, s = Ec((o) => {
    e.ctx !== null && n(Vg(o, e));
  }, e);
  return zg(i, t, s), s;
}
class Kg extends jc {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (Hg(t, n), i) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[Yi])
      return !1;
    const i = n[Yi].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = i[o];
      mt(r) ? n.removeAttribute(o) : n.setAttribute(o, r);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      n.style[o] = s[o];
    }), n.width = n.width, delete n[Yi], !0;
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n);
    const s = t.$proxies || (t.$proxies = {}), r = {
      attach: Bg,
      detach: Wg,
      resize: Ug
    }[n] || $g;
    s[n] = r(t, n, i);
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}), s = i[n];
    if (!s)
      return;
    ({
      attach: to,
      detach: to,
      resize: to
    }[n] || Fg)(t, n, s), i[n] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, i, s) {
    return Xp(t, n, i, s);
  }
  isAttached(t) {
    const n = ir(t);
    return !!(n && n.isConnected);
  }
}
function Yg(e) {
  return !kc() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? Lg : Kg;
}
var Bi;
let an = (Bi = class {
  constructor() {
    K(this, "active", !1);
  }
  tooltipPosition(t) {
    const { x: n, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: n,
      y: i
    };
  }
  hasValue() {
    return as(this.x) && as(this.y);
  }
  getProps(t, n) {
    const i = this.$animations;
    if (!n || !i)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = i[o] && i[o].active() ? i[o]._to : this[o];
    }), s;
  }
}, K(Bi, "defaults", {}), K(Bi, "defaultRoutes"), Bi);
function Xg(e, t) {
  const n = e.options.ticks, i = qg(e), s = Math.min(n.maxTicksLimit || i, i), o = n.major.enabled ? Zg(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > s)
    return Qg(t, c, o, r / s), c;
  const h = Jg(o, t, s);
  if (r > 0) {
    let d, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Ni(t, c, h, mt(f) ? 0 : a - f, a), d = 0, u = r - 1; d < u; d++)
      Ni(t, c, h, o[d], o[d + 1]);
    return Ni(t, c, h, l, mt(f) ? t.length : l + f), c;
  }
  return Ni(t, c, h), c;
}
function qg(e) {
  const t = e.options.offset, n = e._tickSize(), i = e._length / n + (t ? 0 : 1), s = e._maxLength / n;
  return Math.floor(Math.min(i, s));
}
function Jg(e, t, n) {
  const i = tm(e), s = t.length / n;
  if (!i)
    return Math.max(s, 1);
  const o = qf(i);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function Zg(e) {
  const t = [];
  let n, i;
  for (n = 0, i = e.length; n < i; n++)
    e[n].major && t.push(n);
  return t;
}
function Qg(e, t, n, i) {
  let s = 0, o = n[0], r;
  for (i = Math.ceil(i), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), s++, o = n[s * i]);
}
function Ni(e, t, n, i, s) {
  const o = Q(i, 0), r = Math.min(Q(s, e.length), e.length);
  let a = 0, l, c, h;
  for (n = Math.ceil(n), s && (l = s - i, n = l / Math.floor(l / n)), h = o; h < 0; )
    a++, h = Math.round(o + a * n);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(e[c]), a++, h = Math.round(o + a * n));
}
function tm(e) {
  const t = e.length;
  let n, i;
  if (t < 2)
    return !1;
  for (i = e[0], n = 1; n < t; ++n)
    if (e[n] - e[n - 1] !== i)
      return !1;
  return i;
}
const em = (e) => e === "left" ? "right" : e === "right" ? "left" : e, wa = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n;
function Ca(e, t) {
  const n = [], i = e.length / t, s = e.length;
  let o = 0;
  for (; o < s; o += i)
    n.push(e[Math.floor(o)]);
  return n;
}
function nm(e, t, n) {
  const i = e.ticks.length, s = Math.min(t, i - 1), o = e._startPixel, r = e._endPixel, a = 1e-6;
  let l = e.getPixelForTick(s), c;
  if (!(n && (i === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function im(e, t) {
  ot(e, (n) => {
    const i = n.gc, s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete n.data[i[o]];
      i.splice(0, s);
    }
  });
}
function Vn(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Sa(e, t) {
  if (!e.display)
    return 0;
  const n = At(e.font, t), i = Lt(e.padding);
  return (_t(e.text) ? e.text.length : 1) * n.lineHeight + i.height;
}
function sm(e, t) {
  return Ne(e, {
    scale: t,
    type: "scale"
  });
}
function om(e, t, n) {
  return Ne(e, {
    tick: n,
    index: t,
    type: "tick"
  });
}
function rm(e, t, n) {
  let i = wc(e);
  return (n && t !== "right" || !n && t === "right") && (i = em(i)), i;
}
function am(e, t, n, i) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = e, { chartArea: c, scales: h } = l;
  let d = 0, u, f, m;
  const p = r - s, g = a - o;
  if (e.isHorizontal()) {
    if (f = Vt(i, o, a), nt(n)) {
      const x = Object.keys(n)[0], v = n[x];
      m = h[x].getPixelForValue(v) + p - t;
    } else
      n === "center" ? m = (c.bottom + c.top) / 2 + p - t : m = wa(e, n, t);
    u = a - o;
  } else {
    if (nt(n)) {
      const x = Object.keys(n)[0], v = n[x];
      f = h[x].getPixelForValue(v) - g + t;
    } else
      n === "center" ? f = (c.left + c.right) / 2 - g + t : f = wa(e, n, t);
    m = Vt(i, r, s), d = n === "left" ? -xt : xt;
  }
  return {
    titleX: f,
    titleY: m,
    maxWidth: u,
    rotation: d
  };
}
class Dn extends an {
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
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: s } = this;
    return t = Bt(t, Number.POSITIVE_INFINITY), n = Bt(n, Number.NEGATIVE_INFINITY), i = Bt(i, Number.POSITIVE_INFINITY), s = Bt(s, Number.NEGATIVE_INFINITY), {
      min: Bt(t, i),
      max: Bt(n, s),
      minDefined: bt(t),
      maxDefined: bt(n)
    };
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(), r;
    if (s && o)
      return {
        min: n,
        max: i
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), s || (n = Math.min(n, r.min)), o || (i = Math.max(i, r.max));
    return n = o && n > i ? i : n, i = s && n > i ? n : i, {
      min: Bt(n, Bt(i, n)),
      max: Bt(i, Bt(n, i))
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
  update(t, n, i) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = n, this._margins = i = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Sp(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Ca(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Xg(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, n, i;
    this.isHorizontal() ? (n = this.left, i = this.right) : (n = this.top, i = this.bottom, t = !t), this._startPixel = n, this._endPixel = i, this._reversePixels = t, this._length = i - n, this._alignToPixels = this.options.alignToPixels;
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
    const n = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      o = t[i], o.label = lt(n.callback, [
        o.value,
        i,
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
    const t = this.options, n = t.ticks, i = this.ticks.length, s = n.minRotation || 0, o = n.maxRotation;
    let r = s, a, l, c;
    if (!this._isVisible() || !n.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = Xt(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / i : f / (i - 1), d + 6 > a && (a = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - Vn(t.grid) - n.padding - Sa(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = Jo(Math.min(Math.asin(Xt((h.highest.height + 6) / a, -1, 1)), Math.asin(Xt(l / c, -1, 1)) - Math.asin(Xt(u / c, -1, 1)))), r = Math.max(s, Math.min(o, r))), this.labelRotation = r;
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
    }, { chart: n, options: { ticks: i, title: s, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Sa(s, n.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Vn(o) + l) : (t.height = this.maxHeight, t.width = Vn(o) + l), i.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = i.padding * 2, m = de(this.labelRotation), p = Math.cos(m), g = Math.sin(m);
        if (a) {
          const x = i.mirror ? 0 : g * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + x + f);
        } else {
          const x = i.mirror ? 0 : p * d.width + g * u.height;
          t.width = Math.min(this.maxWidth, t.width + x + f);
        }
        this._calculatePadding(c, h, g, p);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, n, i, s) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? c ? (u = s * t.width, f = i * n.height) : (u = i * t.height, f = s * n.width) : o === "start" ? f = n.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = n.width / 2), this.paddingLeft = Math.max((u - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = n.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = n.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
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
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, i;
    for (n = 0, i = t.length; n < i; n++)
      mt(t[n].label) && (t.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = Ca(i, n)), this._labelSizes = t = this._computeLabelSizes(i, i.length);
    }
    return t;
  }
  _computeLabelSizes(t, n) {
    const { ctx: i, _longestTextCache: s } = this, o = [], r = [];
    let a = 0, l = 0, c, h, d, u, f, m, p, g, x, v, y;
    for (c = 0; c < n; ++c) {
      if (u = t[c].label, f = this._resolveTickFontOptions(c), i.font = m = f.string, p = s[m] = s[m] || {
        data: {},
        gc: []
      }, g = f.lineHeight, x = v = 0, !mt(u) && !_t(u))
        x = ls(i, p.data, p.gc, x, u), v = g;
      else if (_t(u))
        for (h = 0, d = u.length; h < d; ++h)
          y = u[h], !mt(y) && !_t(y) && (x = ls(i, p.data, p.gc, x, y), v += g);
      o.push(x), r.push(v), a = Math.max(x, a), l = Math.max(v, l);
    }
    im(s, n);
    const w = o.indexOf(a), E = r.indexOf(l), k = (R) => ({
      width: o[R] || 0,
      height: r[R] || 0
    });
    return {
      first: k(0),
      last: k(n - 1),
      widest: k(w),
      highest: k(E),
      widths: o,
      heights: r
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return Qf(this._alignToPixels ? We(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return i.$context || (i.$context = om(this.getContext(), t, i));
    }
    return this.$context || (this.$context = sm(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, n = de(this.labelRotation), i = Math.abs(Math.cos(n)), s = Math.abs(Math.sin(n)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * i > a * s ? a / i : l / s : l * s < a * i ? l / i : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis, i = this.chart, s = this.options, { grid: o, position: r, border: a } = s, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = Vn(o), f = [], m = a.setContext(this.getContext()), p = m.display ? m.width : 0, g = p / 2, x = function(q) {
      return We(i, q, p);
    };
    let v, y, w, E, k, R, P, H, V, B, J, ut;
    if (r === "top")
      v = x(this.bottom), R = this.bottom - u, H = v - g, B = x(t.top) + g, ut = t.bottom;
    else if (r === "bottom")
      v = x(this.top), B = t.top, ut = x(t.bottom) - g, R = v + g, H = this.top + u;
    else if (r === "left")
      v = x(this.right), k = this.right - u, P = v - g, V = x(t.left) + g, J = t.right;
    else if (r === "right")
      v = x(this.left), V = t.left, J = x(t.right) - g, k = v + g, P = this.left + u;
    else if (n === "x") {
      if (r === "center")
        v = x((t.top + t.bottom) / 2 + 0.5);
      else if (nt(r)) {
        const q = Object.keys(r)[0], G = r[q];
        v = x(this.chart.scales[q].getPixelForValue(G));
      }
      B = t.top, ut = t.bottom, R = v + g, H = R + u;
    } else if (n === "y") {
      if (r === "center")
        v = x((t.left + t.right) / 2);
      else if (nt(r)) {
        const q = Object.keys(r)[0], G = r[q];
        v = x(this.chart.scales[q].getPixelForValue(G));
      }
      k = v - g, P = k - u, V = t.left, J = t.right;
    }
    const gt = Q(s.ticks.maxTicksLimit, d), j = Math.max(1, Math.ceil(d / gt));
    for (y = 0; y < d; y += j) {
      const q = this.getContext(y), G = o.setContext(q), Z = a.setContext(q), ft = G.lineWidth, Jt = G.color, Kt = Z.dash || [], Tt = Z.dashOffset, Oe = G.tickWidth, He = G.tickColor, ze = G.tickBorderDash || [], Mt = G.tickBorderDashOffset;
      w = nm(this, y, l), w !== void 0 && (E = We(i, w, ft), c ? k = P = V = J = E : R = H = B = ut = E, f.push({
        tx1: k,
        ty1: R,
        tx2: P,
        ty2: H,
        x1: V,
        y1: B,
        x2: J,
        y2: ut,
        width: ft,
        color: Jt,
        borderDash: Kt,
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
    const n = this.axis, i = this.options, { position: s, ticks: o } = i, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = Vn(i.grid), f = u + h, m = d ? -h : f, p = -de(this.labelRotation), g = [];
    let x, v, y, w, E, k, R, P, H, V, B, J, ut = "middle";
    if (s === "top")
      k = this.bottom - m, R = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      k = this.top + m, R = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const j = this._getYAxisLabelAlignment(u);
      R = j.textAlign, E = j.x;
    } else if (s === "right") {
      const j = this._getYAxisLabelAlignment(u);
      R = j.textAlign, E = j.x;
    } else if (n === "x") {
      if (s === "center")
        k = (t.top + t.bottom) / 2 + f;
      else if (nt(s)) {
        const j = Object.keys(s)[0], q = s[j];
        k = this.chart.scales[j].getPixelForValue(q) + f;
      }
      R = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (s === "center")
        E = (t.left + t.right) / 2 - f;
      else if (nt(s)) {
        const j = Object.keys(s)[0], q = s[j];
        E = this.chart.scales[j].getPixelForValue(q);
      }
      R = this._getYAxisLabelAlignment(u).textAlign;
    }
    n === "y" && (l === "start" ? ut = "top" : l === "end" && (ut = "bottom"));
    const gt = this._getLabelSizes();
    for (x = 0, v = a.length; x < v; ++x) {
      y = a[x], w = y.label;
      const j = o.setContext(this.getContext(x));
      P = this.getPixelForTick(x) + o.labelOffset, H = this._resolveTickFontOptions(x), V = H.lineHeight, B = _t(w) ? w.length : 1;
      const q = B / 2, G = j.color, Z = j.textStrokeColor, ft = j.textStrokeWidth;
      let Jt = R;
      r ? (E = P, R === "inner" && (x === v - 1 ? Jt = this.options.reverse ? "left" : "right" : x === 0 ? Jt = this.options.reverse ? "right" : "left" : Jt = "center"), s === "top" ? c === "near" || p !== 0 ? J = -B * V + V / 2 : c === "center" ? J = -gt.highest.height / 2 - q * V + V : J = -gt.highest.height + V / 2 : c === "near" || p !== 0 ? J = V / 2 : c === "center" ? J = gt.highest.height / 2 - q * V : J = gt.highest.height - B * V, d && (J *= -1), p !== 0 && !j.showLabelBackdrop && (E += V / 2 * Math.sin(p))) : (k = P, J = (1 - B) * V / 2);
      let Kt;
      if (j.showLabelBackdrop) {
        const Tt = Lt(j.backdropPadding), Oe = gt.heights[x], He = gt.widths[x];
        let ze = J - Tt.top, Mt = 0 - Tt.left;
        switch (ut) {
          case "middle":
            ze -= Oe / 2;
            break;
          case "bottom":
            ze -= Oe;
            break;
        }
        switch (R) {
          case "center":
            Mt -= He / 2;
            break;
          case "right":
            Mt -= He;
            break;
        }
        Kt = {
          left: Mt,
          top: ze,
          width: He + Tt.width,
          height: Oe + Tt.height,
          color: j.backdropColor
        };
      }
      g.push({
        label: w,
        font: H,
        textOffset: J,
        options: {
          rotation: p,
          color: G,
          strokeColor: Z,
          strokeWidth: ft,
          textAlign: Jt,
          textBaseline: ut,
          translation: [
            E,
            k
          ],
          backdrop: Kt
        }
      });
    }
    return g;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-de(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return n.align === "start" ? s = "left" : n.align === "end" ? s = "right" : n.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: n, ticks: { crossAlign: i, mirror: s, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return n === "left" ? s ? (h = this.right + o, i === "near" ? c = "left" : i === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, i === "near" ? c = "right" : i === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : n === "right" ? s ? (h = this.left + o, i === "near" ? c = "right" : i === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, i === "near" ? c = "left" : i === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, n = this.options.position;
    if (n === "left" || n === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (n === "top" || n === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: n }, left: i, top: s, width: o, height: r } = this;
    n && (t.save(), t.fillStyle = n, t.fillRect(i, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? n.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width || !h.color || (i.save(), i.lineWidth = h.width, i.strokeStyle = h.color, i.setLineDash(h.borderDash || []), i.lineDashOffset = h.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(c.x, c.y), i.stroke(), i.restore());
    };
    if (n.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        n.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), n.drawTicks && a({
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
    const { chart: t, ctx: n, options: { border: i, grid: s } } = this, o = i.setContext(this.getContext()), r = i.display ? o.width : 0;
    if (!r)
      return;
    const a = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, d, u;
    this.isHorizontal() ? (c = We(t, this.left, r) - r / 2, h = We(t, this.right, a) + a / 2, d = u = l) : (d = We(t, this.top, r) - r / 2, u = We(t, this.bottom, a) + a / 2, c = h = l), n.save(), n.lineWidth = o.width, n.strokeStyle = o.color, n.beginPath(), n.moveTo(c, d), n.lineTo(h, u), n.stroke(), n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && Ns(i, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      Tn(i, c, 0, h, l, a);
    }
    s && Hs(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: n, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = At(i.font), r = Lt(i.padding), a = i.align;
    let l = o.lineHeight / 2;
    n === "bottom" || n === "center" || nt(n) ? (l += r.bottom, _t(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = am(this, l, n, a);
    Tn(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: d,
      rotation: u,
      textAlign: rm(a, n, s),
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
    const t = this.options, n = t.ticks && t.ticks.z || 0, i = Q(t.grid && t.grid.z, -1), s = Q(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Dn.prototype.draw ? [
      {
        z: n,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: i,
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
        z: n,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = [];
    let o, r;
    for (o = 0, r = n.length; o < r; ++o) {
      const a = n[o];
      a[i] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return At(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Hi {
  constructor(t, n, i) {
    this.type = t, this.scope = n, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let i;
    hm(n) && (i = this.register(n));
    const s = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, lm(t, r, i), this.override && Ot.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items, i = t.id, s = this.scope;
    i in n && delete n[i], s && i in Ot[s] && (delete Ot[s][i], this.override && delete on[i]);
  }
}
function lm(e, t, n) {
  const i = hi(/* @__PURE__ */ Object.create(null), [
    n ? Ot.get(n) : {},
    Ot.get(t),
    e.defaults
  ]);
  Ot.set(t, i), e.defaultRoutes && cm(t, e.defaultRoutes), e.descriptors && Ot.describe(t, e.descriptors);
}
function cm(e, t) {
  Object.keys(t).forEach((n) => {
    const i = n.split("."), s = i.pop(), o = [
      e
    ].concat(i).join("."), r = t[n].split("."), a = r.pop(), l = r.join(".");
    Ot.route(o, s, l, a);
  });
}
function hm(e) {
  return "id" in e && "defaults" in e;
}
class dm {
  constructor() {
    this.controllers = new Hi(xn, "datasets", !0), this.elements = new Hi(an, "elements"), this.plugins = new Hi(Object, "plugins"), this.scales = new Hi(Dn, "scales"), this._typedRegistries = [
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
  _each(t, n, i) {
    [
      ...n
    ].forEach((s) => {
      const o = i || this._getRegistryForType(s);
      i || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : ot(s, (r) => {
        const a = i || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, n, i) {
    const s = qo(t);
    lt(i["before" + s], [], i), n[t](i), lt(i["after" + s], [], i);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(t))
        return i;
    }
    return this.plugins;
  }
  _get(t, n, i) {
    const s = n.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return s;
  }
}
var ae = /* @__PURE__ */ new dm();
class um {
  constructor() {
    this._init = [];
  }
  notify(t, n, i, s) {
    n === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), r = this._notify(o, t, n, i);
    return n === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, n, i, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin, a = r[i], l = [
        n,
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
    const n = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const i = t && t.config, s = Q(i.options && i.options.plugins, {}), o = fm(i);
    return s === !1 && !n ? [] : gm(t, o, s, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [], i = this._cache, s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(n, i), t, "stop"), this._notify(s(i, n), t, "start");
  }
}
function fm(e) {
  const t = {}, n = [], i = Object.keys(ae.plugins.items);
  for (let o = 0; o < i.length; o++)
    n.push(ae.getPlugin(i[o]));
  const s = e.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    n.indexOf(r) === -1 && (n.push(r), t[r.id] = !0);
  }
  return {
    plugins: n,
    localIds: t
  };
}
function pm(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function gm(e, { plugins: t, localIds: n }, i, s) {
  const o = [], r = e.getContext();
  for (const a of t) {
    const l = a.id, c = pm(i[l], s);
    c !== null && o.push({
      plugin: a,
      options: mm(e.config, {
        plugin: a,
        local: n[l]
      }, c, r)
    });
  }
  return o;
}
function mm(e, { plugin: t, local: n }, i, s) {
  const o = e.pluginScopeKeys(t), r = e.getOptionScopes(i, o);
  return n && t.defaults && r.push(t.defaults), e.createResolver(r, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Oo(e, t) {
  const n = Ot.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x";
}
function _m(e, t) {
  let n = e;
  return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n;
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
  const n = on[e.type] || {
    scales: {}
  }, i = t.scales || {}, s = Oo(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((r) => {
    const a = i[r];
    if (!nt(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = us(r, a), c = bm(l, s), h = n.scales || {};
    o[r] = Zn(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), e.data.datasets.forEach((r) => {
    const a = r.type || e.type, l = r.indexAxis || Oo(a, t), h = (on[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const u = _m(d, l), f = r[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Zn(o[f], [
        {
          axis: u
        },
        i[f],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Zn(a, [
      Ot.scales[a.type],
      Ot.scale
    ]);
  }), o;
}
function $c(e) {
  const t = e.options || (e.options = {});
  t.plugins = Q(t.plugins, {}), t.scales = vm(e, t);
}
function Kc(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function ym(e) {
  return e = e || {}, e.data = Kc(e.data), $c(e), e;
}
const Ta = /* @__PURE__ */ new Map(), Yc = /* @__PURE__ */ new Set();
function zi(e, t) {
  let n = Ta.get(e);
  return n || (n = t(), Ta.set(e, n), Yc.add(n)), n;
}
const Bn = (e, t, n) => {
  const i = Cn(t, n);
  i !== void 0 && e.add(i);
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
    this._config.data = Kc(t);
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
    this.clearCache(), $c(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return zi(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, n) {
    return zi(`${t}.transition.${n}`, () => [
      [
        `datasets.${t}.transitions.${n}`,
        `transitions.${n}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return zi(`${t}-${n}`, () => [
      [
        `datasets.${t}.elements.${n}`,
        `datasets.${t}`,
        `elements.${n}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id, i = this.type;
    return zi(`${i}-plugin-${n}`, () => [
      [
        `plugins.${n}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (!s || n) && (s = /* @__PURE__ */ new Map(), i.set(t, s)), s;
  }
  getOptionScopes(t, n, i) {
    const { options: s, type: o } = this, r = this._cachedScopes(t, i), a = r.get(n);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    n.forEach((h) => {
      t && (l.add(t), h.forEach((d) => Bn(l, t, d))), h.forEach((d) => Bn(l, s, d)), h.forEach((d) => Bn(l, on[o] || {}, d)), h.forEach((d) => Bn(l, Ot, d)), h.forEach((d) => Bn(l, vo, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Yc.has(n) && r.set(n, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [
      t,
      on[n] || {},
      Ot.datasets[n] || {},
      {
        type: n
      },
      Ot,
      vo
    ];
  }
  resolveNamedOptions(t, n, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Pa(this._resolverCache, t, s);
    let l = r;
    if (wm(r, n)) {
      o.$shared = !1, i = Le(i) ? i() : i;
      const c = this.createResolver(t, i, a);
      l = Pn(r, i, c);
    }
    for (const c of n)
      o[c] = l[c];
    return o;
  }
  createResolver(t, n, i = [
    ""
  ], s) {
    const { resolver: o } = Pa(this._resolverCache, t, i);
    return nt(n) ? Pn(o, n, void 0, s) : o;
  }
}
function Pa(e, t, n) {
  let i = e.get(t);
  i || (i = /* @__PURE__ */ new Map(), e.set(t, i));
  const s = n.join();
  let o = i.get(s);
  return o || (o = {
    resolver: tr(t, n),
    subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const Em = (e) => nt(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || Le(e[n]), !1);
function wm(e, t) {
  const { isScriptable: n, isIndexable: i } = Pc(e);
  for (const s of t) {
    const o = n(s), r = i(s), a = (r || o) && e[s];
    if (o && (Le(a) || Em(a)) || r && _t(a))
      return !0;
  }
  return !1;
}
var Cm = "4.2.0";
const Sm = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Aa(e, t) {
  return e === "top" || e === "bottom" || Sm.indexOf(e) === -1 && t === "x";
}
function Ia(e, t) {
  return function(n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e];
  };
}
function Ra(e) {
  const t = e.chart, n = t.options.animation;
  t.notifyPlugins("afterRender"), lt(n && n.onComplete, [
    e
  ], t);
}
function Tm(e) {
  const t = e.chart, n = t.options.animation;
  lt(n && n.onProgress, [
    e
  ], t);
}
function Xc(e) {
  return kc() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const Xi = {}, Ma = (e) => {
  const t = Xc(e);
  return Object.values(Xi).filter((n) => n.canvas === t).pop();
};
function Pm(e, t, n) {
  const i = Object.keys(e);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const r = e[s];
      delete e[s], (n > 0 || o > t) && (e[o + n] = r);
    }
  }
}
function Am(e, t, n, i) {
  return !n || e.type === "mouseout" ? null : i ? t : e;
}
function Im(e) {
  const { xScale: t, yScale: n } = e;
  if (t && n)
    return {
      left: t.left,
      right: t.right,
      top: n.top,
      bottom: n.bottom
    };
}
var we;
let vi = (we = class {
  static register(...t) {
    ae.add(...t), ka();
  }
  static unregister(...t) {
    ae.remove(...t), ka();
  }
  constructor(t, n) {
    const i = this.config = new Om(n), s = Xc(t), o = Ma(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || Yg(s))(), this.platform.updateConfig(i);
    const a = this.platform.acquireContext(s, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Bf(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new um(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = sp((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], Xi[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    ge.listen(this, "complete", Ra), ge.listen(this, "progress", Tm), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: n }, width: i, height: s, _aspectRatio: o } = this;
    return mt(t) ? n && o ? o : s ? i / s : null : t;
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
    return ia(this.canvas, this.ctx), this;
  }
  stop() {
    return ge.stop(this), this;
  }
  resize(t, n) {
    ge.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: n
    } : this._resize(t, n);
  }
  _resize(t, n) {
    const i = this.options, s = this.canvas, o = i.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(s, t, n, o), a = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, ra(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), lt(i.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    ot(n, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, n = t.scales, i = this.scales, s = Object.keys(i).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    n && (o = o.concat(Object.keys(n).map((r) => {
      const a = n[r], l = us(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), ot(o, (r) => {
      const a = r.options, l = a.id, c = us(l, a), h = Q(a.type, r.dtype);
      (a.position === void 0 || Aa(a.position, c) !== Aa(r.dposition)) && (a.position = r.dposition), s[l] = !0;
      let d = null;
      if (l in i && i[l].type === h)
        d = i[l];
      else {
        const u = ae.getScale(h);
        d = new u({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), i[d.id] = d;
      }
      d.init(a, t);
    }), ot(s, (r, a) => {
      r || delete i[a];
    }), ot(i, (r) => {
      Ae.configure(this, r, r.options), Ae.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, n = this.data.datasets.length, i = t.length;
    if (t.sort((s, o) => s.index - o.index), i > n) {
      for (let s = n; s < i; ++s)
        this._destroyDatasetMeta(s);
      t.splice(n, i - n);
    }
    this._sortedMetasets = t.slice(0).sort(Ia("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: n } } = this;
    t.length > n.length && delete this._stacks, t.forEach((i, s) => {
      n.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], n = this.data.datasets;
    let i, s;
    for (this._removeUnreferencedMetasets(), i = 0, s = n.length; i < s; i++) {
      const o = n[i];
      let r = this.getDatasetMeta(i);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(i), r = this.getDatasetMeta(i)), r.type = a, r.indexAxis = o.indexAxis || Oo(a, this.options), r.order = o.order || 0, r.index = i, r.label = "" + o.label, r.visible = this.isDatasetVisible(i), r.controller)
        r.controller.updateIndex(i), r.controller.linkScales();
      else {
        const l = ae.getController(a), { datasetElementType: c, dataElementType: h } = Ot.datasets[a];
        Object.assign(l, {
          dataElementType: ae.getElement(h),
          datasetElementType: c && ae.getElement(c)
        }), r.controller = new l(this, i), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    ot(this.data.datasets, (t, n) => {
      this.getDatasetMeta(n).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const n = this.config;
    n.update();
    const i = this._options = n.createResolver(n.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation;
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
    r = this._minPadding = i.layout.autoPadding ? r : 0, this._updateLayout(r), s || ot(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Ia("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    ot(this.scales, (t) => {
      Ae.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, n = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!Yr(n, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, n = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of n) {
      const r = i === "_removeElements" ? -o : o;
      Pm(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const n = this.data.datasets.length, i = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), s = i(0);
    for (let o = 1; o < n; o++)
      if (!Yr(s, i(o)))
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
    Ae.update(this, this.width, this.height, t);
    const n = this.chartArea, i = n.width <= 0 || n.height <= 0;
    this._layers = [], ot(this.boxes, (s) => {
      i && s.position === "chartArea" || (s.configure && s.configure(), this._layers.push(...s._layers()));
    }, this), this._layers.forEach((s, o) => {
      s._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this.getDatasetMeta(n).controller.configure();
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this._updateDataset(n, Le(t) ? t({
          datasetIndex: n
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, n) {
    const i = this.getDatasetMeta(t), s = {
      meta: i,
      index: t,
      mode: n,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (i.controller._update(n), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (ge.has(this) ? this.attached && !ge.running(this) && ge.start(this) : (this.draw(), Ra({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: s } = this._resizeBeforeDraw;
      this._resize(i, s), this._resizeBeforeDraw = null;
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const n = this._layers;
    for (t = 0; t < n.length && n[t].z <= 0; ++t)
      n[t].draw(this.chartArea);
    for (this._drawDatasets(); t < n.length; ++t)
      n[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const n = this._sortedMetasets, i = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const r = n[s];
      (!t || r.visible) && i.push(r);
    }
    return i;
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
    for (let n = t.length - 1; n >= 0; --n)
      this._drawDataset(t[n]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const n = this.ctx, i = t._clip, s = !i.disabled, o = Im(t) || this.chartArea, r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (s && Ns(n, {
      left: i.left === !1 ? 0 : o.left - i.left,
      right: i.right === !1 ? this.width : o.right + i.right,
      top: i.top === !1 ? 0 : o.top - i.top,
      bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom
    }), t.controller.draw(), s && Hs(n), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return ui(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, i, s) {
    const o = Tg.modes[n];
    return typeof o == "function" ? o(this, t, i, s) : [];
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t], i = this._metasets;
    let s = i.filter((o) => o && o._dataset === n).pop();
    return s || (s = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: n && n.order || 0,
      index: t,
      _dataset: n,
      _parsed: [],
      _sorted: !1
    }, i.push(s)), s;
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
    const n = this.data.datasets[t];
    if (!n)
      return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
  }
  setDatasetVisibility(t, n) {
    const i = this.getDatasetMeta(t);
    i.hidden = !n;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, n, i) {
    const s = i ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, s);
    ie(n) ? (o.data[n].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), r.update(o, {
      visible: i
    }), this.update((a) => a.datasetIndex === t ? s : void 0));
  }
  hide(t, n) {
    this._updateVisibility(t, n, !1);
  }
  show(t, n) {
    this._updateVisibility(t, n, !0);
  }
  _destroyDatasetMeta(t) {
    const n = this._metasets[t];
    n && n.controller && n.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, n;
    for (this.stop(), ge.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: n } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), ia(t, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), delete Xi[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, n = this.platform, i = (o, r) => {
      n.addEventListener(this, o, r), t[o] = r;
    }, s = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    ot(this.options.events, (o) => i(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, n = this.platform, i = (l, c) => {
      n.addEventListener(this, l, c), t[l] = c;
    }, s = (l, c) => {
      t[l] && (n.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      s("attach", a), this.attached = !0, this.resize(), i("resize", o), i("detach", r);
    };
    r = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), i("attach", a);
    }, n.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    ot(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._listeners = {}, ot(this._responsiveListeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, n, i) {
    const s = i ? "set" : "remove";
    let o, r, a, l;
    for (n === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const n = this._active || [], i = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !ss(i, n) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, n));
  }
  notifyPlugins(t, n, i) {
    return this._plugins.notify(this, t, n, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, n, i) {
    const s = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(n, t), a = i ? t : o(t, n);
    r.length && this.updateHoverStyle(r, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
  }
  _eventHandler(t, n) {
    const i = {
      event: t,
      replay: n,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, s) === !1)
      return;
    const o = this._handleEvent(t, n, i.inChartArea);
    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (o || i.changed) && this.render(), this;
  }
  _handleEvent(t, n, i) {
    const { _active: s = [], options: o } = this, r = n, a = this._getActiveElements(t, s, i, r), l = Kf(t), c = Am(t, this._lastEvent, i, l);
    i && (this._lastEvent = null, lt(o.onHover, [
      t,
      a,
      this
    ], this), l && lt(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !ss(a, s);
    return (h || n) && (this._active = a, this._updateHoverStyles(a, s, n)), this._lastEvent = c, h;
  }
  _getActiveElements(t, n, i, s) {
    if (t.type === "mouseout")
      return [];
    if (!i)
      return n;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}, K(we, "defaults", Ot), K(we, "instances", Xi), K(we, "overrides", on), K(we, "registry", ae), K(we, "version", Cm), K(we, "getChart", Ma), we);
function ka() {
  return ot(vi.instances, (e) => e._plugins.invalidate());
}
function Rm(e, t, n) {
  const { startAngle: i, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = s / a;
  e.beginPath(), e.arc(o, r, a, i - c, n + c), l > s ? (c = s / l, e.arc(o, r, l, n + c, i - c, !0)) : e.arc(o, r, s, n + xt, i - xt), e.closePath(), e.clip();
}
function Mm(e) {
  return Qo(e, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function km(e, t, n, i) {
  const s = Mm(e.options.borderRadius), o = (n - t) / 2, r = Math.min(o, i * t / 2), a = (l) => {
    const c = (n - Math.min(o, l)) * i / 2;
    return Xt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: Xt(s.innerStart, 0, r),
    innerEnd: Xt(s.innerEnd, 0, r)
  };
}
function un(e, t, n, i) {
  return {
    x: n + e * Math.cos(t),
    y: i + e * Math.sin(t)
  };
}
function fs(e, t, n, i, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + i + n - c, 0), u = h > 0 ? h + i + n + c : 0;
  let f = 0;
  const m = s - l;
  if (i) {
    const j = h > 0 ? h - i : 0, q = d > 0 ? d - i : 0, G = (j + q) / 2, Z = G !== 0 ? m * G / (G + i) : m;
    f = (m - Z) / 2;
  }
  const p = Math.max(1e-3, m * d - n / Et) / d, g = (m - p) / 2, x = l + g + f, v = s - g - f, { outerStart: y, outerEnd: w, innerStart: E, innerEnd: k } = km(t, u, d, v - x), R = d - y, P = d - w, H = x + y / R, V = v - w / P, B = u + E, J = u + k, ut = x + E / B, gt = v - k / J;
  if (e.beginPath(), o) {
    const j = (H + V) / 2;
    if (e.arc(r, a, d, H, j), e.arc(r, a, d, j, V), w > 0) {
      const ft = un(P, V, r, a);
      e.arc(ft.x, ft.y, w, V, v + xt);
    }
    const q = un(J, v, r, a);
    if (e.lineTo(q.x, q.y), k > 0) {
      const ft = un(J, gt, r, a);
      e.arc(ft.x, ft.y, k, v + xt, gt + Math.PI);
    }
    const G = (v - k / u + (x + E / u)) / 2;
    if (e.arc(r, a, u, v - k / u, G, !0), e.arc(r, a, u, G, x + E / u, !0), E > 0) {
      const ft = un(B, ut, r, a);
      e.arc(ft.x, ft.y, E, ut + Math.PI, x - xt);
    }
    const Z = un(R, x, r, a);
    if (e.lineTo(Z.x, Z.y), y > 0) {
      const ft = un(R, H, r, a);
      e.arc(ft.x, ft.y, y, x - xt, H);
    }
  } else {
    e.moveTo(r, a);
    const j = Math.cos(H) * d + r, q = Math.sin(H) * d + a;
    e.lineTo(j, q);
    const G = Math.cos(V) * d + r, Z = Math.sin(V) * d + a;
    e.lineTo(G, Z);
  }
  e.closePath();
}
function Dm(e, t, n, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    fs(e, t, n, i, l, s);
    for (let c = 0; c < o; ++c)
      e.fill();
    isNaN(a) || (l = r + (a % dt || dt));
  }
  return fs(e, t, n, i, l, s), e.fill(), l;
}
function Lm(e, t, n, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h } = l, d = l.borderAlign === "inner";
  if (!c)
    return;
  d ? (e.lineWidth = c * 2, e.lineJoin = h || "round") : (e.lineWidth = c, e.lineJoin = h || "bevel");
  let u = t.endAngle;
  if (o) {
    fs(e, t, n, i, u, s);
    for (let f = 0; f < o; ++f)
      e.stroke();
    isNaN(a) || (u = r + (a % dt || dt));
  }
  d && Rm(e, t, u), o || (fs(e, t, n, i, u, s), e.stroke());
}
class qi extends an {
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, n, i) {
    const s = this.getProps([
      "x",
      "y"
    ], i), { angle: o, distance: r } = vc(s, {
      x: t,
      y: n
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), u = this.options.spacing / 2, m = Q(d, l - a) >= dt || di(o, a, l), p = Je(r, c + u, h + u);
    return m && p;
  }
  getCenterPoint(t) {
    const { x: n, y: i, startAngle: s, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], t), { offset: l, spacing: c } = this.options, h = (s + o) / 2, d = (r + a + c + l) / 2;
    return {
      x: n + Math.cos(h) * d,
      y: i + Math.sin(h) * d
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: n, circumference: i } = this, s = (n.offset || 0) / 4, o = (n.spacing || 0) / 2, r = n.circular;
    if (this.pixelMargin = n.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > dt ? Math.floor(i / dt) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * s, Math.sin(a) * s);
    const l = 1 - Math.sin(Math.min(Et, i || 0)), c = s * l;
    t.fillStyle = n.backgroundColor, t.strokeStyle = n.borderColor, Dm(t, this, c, o, r), Lm(t, this, c, o, r), t.restore();
  }
}
K(qi, "id", "arc"), K(qi, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), K(qi, "defaultRoutes", {
  backgroundColor: "backgroundColor"
});
function qc(e, t, n = t) {
  e.lineCap = Q(n.borderCapStyle, t.borderCapStyle), e.setLineDash(Q(n.borderDash, t.borderDash)), e.lineDashOffset = Q(n.borderDashOffset, t.borderDashOffset), e.lineJoin = Q(n.borderJoinStyle, t.borderJoinStyle), e.lineWidth = Q(n.borderWidth, t.borderWidth), e.strokeStyle = Q(n.borderColor, t.borderColor);
}
function Nm(e, t, n) {
  e.lineTo(n.x, n.y);
}
function Hm(e) {
  return e.stepped ? mp : e.tension || e.cubicInterpolationMode === "monotone" ? _p : Nm;
}
function Jc(e, t, n = {}) {
  const i = e.length, { start: s = 0, end: o = i - 1 } = n, { start: r, end: a } = t, l = Math.max(s, r), c = Math.min(o, a), h = s < r && o < r || s > a && o > a;
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? i + c - l : c - l
  };
}
function zm(e, t, n, i) {
  const { points: s, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Jc(s, n, i), h = Hm(o);
  let { move: d = !0, reverse: u } = i || {}, f, m, p;
  for (f = 0; f <= c; ++f)
    m = s[(a + (u ? c - f : f)) % r], !m.skip && (d ? (e.moveTo(m.x, m.y), d = !1) : h(e, p, m, u, o.stepped), p = m);
  return l && (m = s[(a + (u ? c : 0)) % r], h(e, p, m, u, o.stepped)), !!l;
}
function Fm(e, t, n, i) {
  const s = t.points, { count: o, start: r, ilen: a } = Jc(s, n, i), { move: l = !0, reverse: c } = i || {};
  let h = 0, d = 0, u, f, m, p, g, x;
  const v = (w) => (r + (c ? a - w : w)) % o, y = () => {
    p !== g && (e.lineTo(h, g), e.lineTo(h, p), e.lineTo(h, x));
  };
  for (l && (f = s[v(0)], e.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = s[v(u)], f.skip)
      continue;
    const w = f.x, E = f.y, k = w | 0;
    k === m ? (E < p ? p = E : E > g && (g = E), h = (d * h + w) / ++d) : (y(), e.lineTo(w, E), m = k, d = 0, p = g = E), x = E;
  }
  y();
}
function Eo(e) {
  const t = e.options, n = t.borderDash && t.borderDash.length;
  return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !n ? Fm : zm;
}
function Vm(e) {
  return e.stepped ? Jp : e.tension || e.cubicInterpolationMode === "monotone" ? Zp : Ke;
}
function Bm(e, t, n, i) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, n, i) && s.closePath()), qc(e, t.options), e.stroke(s);
}
function Wm(e, t, n, i) {
  const { segments: s, options: o } = t, r = Eo(t);
  for (const a of s)
    qc(e, o, a.style), e.beginPath(), r(e, t, a, {
      start: n,
      end: n + i - 1
    }) && e.closePath(), e.stroke();
}
const jm = typeof Path2D == "function";
function Gm(e, t, n, i) {
  jm && !t.options.segment ? Bm(e, t, n, i) : Wm(e, t, n, i);
}
class Ie extends an {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      jp(this._points, i, t, s, n), this._pointsUpdated = !0;
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
    const t = this.segments, n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments, n = this.points, i = t.length;
    return i && n[t[i - 1].end];
  }
  interpolate(t, n) {
    const i = this.options, s = t[n], o = this.points, r = zc(this, {
      property: n,
      start: s,
      end: s
    });
    if (!r.length)
      return;
    const a = [], l = Vm(i);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: u } = r[c], f = o[d], m = o[u];
      if (f === m) {
        a.push(f);
        continue;
      }
      const p = Math.abs((s - f[n]) / (m[n] - f[n])), g = l(f, m, p, i.stepped);
      g[n] = t[n], a.push(g);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, n, i) {
    return Eo(this)(t, this, n, i);
  }
  path(t, n, i) {
    const s = this.segments, o = Eo(this);
    let r = this._loop;
    n = n || 0, i = i || this.points.length - n;
    for (const a of s)
      r &= o(t, this, a, {
        start: n,
        end: n + i - 1
      });
    return !!r;
  }
  draw(t, n, i, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Gm(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
K(Ie, "id", "line"), K(Ie, "defaults", {
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
}), K(Ie, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), K(Ie, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Da(e, t, n, i) {
  const s = e.options, { [n]: o } = e.getProps([
    n
  ], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Ji extends an {
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, n, i) {
    const s = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], i);
    return Math.pow(t - o, 2) + Math.pow(n - r, 2) < Math.pow(s.hitRadius + s.radius, 2);
  }
  inXRange(t, n) {
    return Da(this, t, "x", n);
  }
  inYRange(t, n) {
    return Da(this, t, "y", n);
  }
  getCenterPoint(t) {
    const { x: n, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: n,
      y: i
    };
  }
  size(t) {
    t = t || this.options || {};
    let n = t.radius || 0;
    n = Math.max(n, n && t.hoverRadius || 0);
    const i = n && t.borderWidth || 0;
    return (n + i) * 2;
  }
  draw(t, n) {
    const i = this.options;
    this.skip || i.radius < 0.1 || !ui(this, n, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, yo(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
K(Ji, "id", "point"), /**
* @type {any}
*/
K(Ji, "defaults", {
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
K(Ji, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function Um(e, t, n) {
  const i = e.segments, s = e.points, o = t.points, r = [];
  for (const a of i) {
    let { start: l, end: c } = a;
    c = or(l, c, s);
    const h = wo(n, s[l], s[c], a.loop);
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
      const f = wo(n, o[u.start], o[u.end], u.loop), m = Hc(a, s, f);
      for (const p of m)
        r.push({
          source: p,
          target: u,
          start: {
            [n]: La(h, f, "start", Math.max)
          },
          end: {
            [n]: La(h, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function wo(e, t, n, i) {
  if (i)
    return;
  let s = t[e], o = n[e];
  return e === "angle" && (s = jt(s), o = jt(o)), {
    property: e,
    start: s,
    end: o
  };
}
function $m(e, t) {
  const { x: n = null, y: i = null } = e || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = or(r, a, s);
    const l = s[r], c = s[a];
    i !== null ? (o.push({
      x: l.x,
      y: i
    }), o.push({
      x: c.x,
      y: i
    })) : n !== null && (o.push({
      x: n,
      y: l.y
    }), o.push({
      x: n,
      y: c.y
    }));
  }), o;
}
function or(e, t, n) {
  for (; t > e; t--) {
    const i = n[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function La(e, t, n, i) {
  return e && t ? i(e[n], t[n]) : e ? e[n] : t ? t[n] : 0;
}
function Zc(e, t) {
  let n = [], i = !1;
  return _t(e) ? (i = !0, n = e) : n = $m(e, t), n.length ? new Ie({
    points: n,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function Na(e) {
  return e && e.fill !== !1;
}
function Km(e, t, n) {
  let s = e[t].fill;
  const o = [
    t
  ];
  let r;
  if (!n)
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
function Ym(e, t, n) {
  const i = Zm(e);
  if (nt(i))
    return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return bt(s) && Math.floor(s) === s ? Xm(i[0], t, s, n) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function Xm(e, t, n, i) {
  return (e === "-" || e === "+") && (n = t + n), n === t || n < 0 || n >= i ? !1 : n;
}
function qm(e, t) {
  let n = null;
  return e === "start" ? n = t.bottom : e === "end" ? n = t.top : nt(e) ? n = t.getPixelForValue(e.value) : t.getBasePixel && (n = t.getBasePixel()), n;
}
function Jm(e, t, n) {
  let i;
  return e === "start" ? i = n : e === "end" ? i = t.options.reverse ? t.min : t.max : nt(e) ? i = e.value : i = t.getBaseValue(), i;
}
function Zm(e) {
  const t = e.options, n = t.fill;
  let i = Q(n && n.target, n);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function Qm(e) {
  const { scale: t, index: n, line: i } = e, s = [], o = i.segments, r = i.points, a = t_(t, n);
  a.push(Zc({
    x: null,
    y: t.bottom
  }, i));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      e_(s, r[h], a);
  }
  return new Ie({
    points: s,
    options: {}
  });
}
function t_(e, t) {
  const n = [], i = e.getMatchingVisibleMetas("line");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t)
      break;
    o.hidden || n.unshift(o.dataset);
  }
  return n;
}
function e_(e, t, n) {
  const i = [];
  for (let s = 0; s < n.length; s++) {
    const o = n[s], { first: r, last: a, point: l } = n_(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        i.unshift(l);
      else if (e.push(l), !a)
        break;
    }
  }
  e.push(...i);
}
function n_(e, t, n) {
  const i = e.interpolate(t, n);
  if (!i)
    return {};
  const s = i[n], o = e.segments, r = e.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], d = r[h.start][n], u = r[h.end][n];
    if (Je(s, d, u)) {
      a = s === d, l = s === u;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: i
  };
}
class Qc {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, n, i) {
    const { x: s, y: o, radius: r } = this;
    return n = n || {
      start: 0,
      end: dt
    }, t.arc(s, o, r, n.end, n.start, !0), !i.bounds;
  }
  interpolate(t) {
    const { x: n, y: i, radius: s } = this, o = t.angle;
    return {
      x: n + Math.cos(o) * s,
      y: i + Math.sin(o) * s,
      angle: o
    };
  }
}
function i_(e) {
  const { chart: t, fill: n, line: i } = e;
  if (bt(n))
    return s_(t, n);
  if (n === "stack")
    return Qm(e);
  if (n === "shape")
    return !0;
  const s = o_(e);
  return s instanceof Qc ? s : Zc(s, i);
}
function s_(e, t) {
  const n = e.getDatasetMeta(t);
  return n && e.isDatasetVisible(t) ? n.dataset : null;
}
function o_(e) {
  return (e.scale || {}).getPointPositionForValue ? a_(e) : r_(e);
}
function r_(e) {
  const { scale: t = {}, fill: n } = e, i = qm(n, t);
  if (bt(i)) {
    const s = t.isHorizontal();
    return {
      x: s ? i : null,
      y: s ? null : i
    };
  }
  return null;
}
function a_(e) {
  const { scale: t, fill: n } = e, i = t.options, s = t.getLabels().length, o = i.reverse ? t.max : t.min, r = Jm(n, t, o), a = [];
  if (i.grid.circular) {
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
function eo(e, t, n) {
  const i = i_(t), { line: s, scale: o, axis: r } = t, a = s.options, l = a.fill, c = a.backgroundColor, { above: h = c, below: d = c } = l || {};
  i && s.points.length && (Ns(e, n), l_(e, {
    line: s,
    target: i,
    above: h,
    below: d,
    area: n,
    scale: o,
    axis: r
  }), Hs(e));
}
function l_(e, t) {
  const { line: n, target: i, above: s, below: o, area: r, scale: a } = t, l = n._loop ? "angle" : t.axis;
  e.save(), l === "x" && o !== s && (Ha(e, i, r.top), za(e, {
    line: n,
    target: i,
    color: s,
    scale: a,
    property: l
  }), e.restore(), e.save(), Ha(e, i, r.bottom)), za(e, {
    line: n,
    target: i,
    color: o,
    scale: a,
    property: l
  }), e.restore();
}
function Ha(e, t, n) {
  const { segments: i, points: s } = t;
  let o = !0, r = !1;
  e.beginPath();
  for (const a of i) {
    const { start: l, end: c } = a, h = s[l], d = s[or(l, c, s)];
    o ? (e.moveTo(h.x, h.y), o = !1) : (e.lineTo(h.x, n), e.lineTo(h.x, h.y)), r = !!t.pathSegment(e, a, {
      move: r
    }), r ? e.closePath() : e.lineTo(d.x, n);
  }
  e.lineTo(t.first().x, n), e.closePath(), e.clip();
}
function za(e, t) {
  const { line: n, target: i, property: s, color: o, scale: r } = t, a = Um(n, i, s);
  for (const { source: l, target: c, start: h, end: d } of a) {
    const { style: { backgroundColor: u = o } = {} } = l, f = i !== !0;
    e.save(), e.fillStyle = u, c_(e, r, f && wo(s, h, d)), e.beginPath();
    const m = !!n.pathSegment(e, l);
    let p;
    if (f) {
      m ? e.closePath() : Fa(e, i, d, s);
      const g = !!i.pathSegment(e, c, {
        move: m,
        reverse: !0
      });
      p = m && g, p || Fa(e, i, h, s);
    }
    e.closePath(), e.fill(p ? "evenodd" : "nonzero"), e.restore();
  }
}
function c_(e, t, n) {
  const { top: i, bottom: s } = t.chart.chartArea, { property: o, start: r, end: a } = n || {};
  o === "x" && (e.beginPath(), e.rect(r, i, a - r, s - i), e.clip());
}
function Fa(e, t, n, i) {
  const s = t.interpolate(n, i);
  s && e.lineTo(s.x, s.y);
}
var h_ = {
  id: "filler",
  afterDatasetsUpdate(e, t, n) {
    const i = (e.data.datasets || []).length, s = [];
    let o, r, a, l;
    for (r = 0; r < i; ++r)
      o = e.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Ie && (l = {
        visible: e.isDatasetVisible(r),
        index: r,
        fill: Ym(a, r, i),
        chart: e,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, s.push(l);
    for (r = 0; r < i; ++r)
      l = s[r], !(!l || l.fill === !1) && (l.fill = Km(s, r, n.propagate));
  },
  beforeDraw(e, t, n) {
    const i = n.drawTime === "beforeDraw", s = e.getSortedVisibleDatasetMetas(), o = e.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), i && a.fill && eo(e.ctx, a, o));
    }
  },
  beforeDatasetsDraw(e, t, n) {
    if (n.drawTime !== "beforeDatasetsDraw")
      return;
    const i = e.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      Na(o) && eo(e.ctx, o, e.chartArea);
    }
  },
  beforeDatasetDraw(e, t, n) {
    const i = t.meta.$filler;
    !Na(i) || n.drawTime !== "beforeDatasetDraw" || eo(e.ctx, i, e.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Va = (e, t) => {
  let { boxHeight: n = t, boxWidth: i = t } = e;
  return e.usePointStyle && (n = Math.min(n, t), i = e.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: n,
    itemHeight: Math.max(t, n)
  };
}, d_ = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class Ba extends an {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, n, i) {
    this.maxWidth = t, this.maxHeight = n, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = lt(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))), t.sort && (n = n.sort((i, s) => t.sort(i, s, this.chart.data))), this.options.reverse && n.reverse(), this.legendItems = n;
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels, s = At(i.font), o = s.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Va(i, o);
    let c, h;
    n.font = s.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, s, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, n, i, s) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = s + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -h;
    return this.legendItems.forEach((m, p) => {
      const g = i + n / 2 + o.measureText(m.text).width;
      (p === 0 || c[c.length - 1] + g + 2 * a > r) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = {
        left: 0,
        top: f,
        row: u,
        width: g,
        height: s
      }, c[c.length - 1] += g + a;
    }), d;
  }
  _fitCols(t, n, i, s) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, u = 0, f = 0, m = 0, p = 0;
    return this.legendItems.forEach((g, x) => {
      const { itemWidth: v, itemHeight: y } = u_(i, n, o, g, s);
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
    const t = this._computeTitleHeight(), { legendHitBoxes: n, options: { align: i, labels: { padding: s }, rtl: o } } = this, r = bn(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = Vt(i, this.left + s, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row && (a = c.row, l = Vt(i, this.left + s, this.right - this.lineWidths[a])), c.top += this.top + t + s, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + s;
    } else {
      let a = 0, l = Vt(i, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a && (a = c.col, l = Vt(i, this.top + t + s, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + s, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + s;
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
    const { options: t, columnSizes: n, lineWidths: i, ctx: s } = this, { align: o, labels: r } = t, a = Ot.color, l = bn(t.rtl, this.left, this.width), c = At(r.font), { padding: h } = r, d = c.size, u = d / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: m, boxHeight: p, itemHeight: g } = Va(r, d), x = function(k, R, P) {
      if (isNaN(m) || m <= 0 || isNaN(p) || p < 0)
        return;
      s.save();
      const H = Q(P.lineWidth, 1);
      if (s.fillStyle = Q(P.fillStyle, a), s.lineCap = Q(P.lineCap, "butt"), s.lineDashOffset = Q(P.lineDashOffset, 0), s.lineJoin = Q(P.lineJoin, "miter"), s.lineWidth = H, s.strokeStyle = Q(P.strokeStyle, a), s.setLineDash(Q(P.lineDash, [])), r.usePointStyle) {
        const V = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: P.pointStyle,
          rotation: P.rotation,
          borderWidth: H
        }, B = l.xPlus(k, m / 2), J = R + u;
        Tc(s, V, B, J, r.pointStyleWidth && m);
      } else {
        const V = R + Math.max((d - p) / 2, 0), B = l.leftForLtr(k, m), J = _n(P.borderRadius);
        s.beginPath(), Object.values(J).some((ut) => ut !== 0) ? cs(s, {
          x: B,
          y: V,
          w: m,
          h: p,
          radius: J
        }) : s.rect(B, V, m, p), s.fill(), H !== 0 && s.stroke();
      }
      s.restore();
    }, v = function(k, R, P) {
      Tn(s, P.text, k, R + g / 2, c, {
        strikethrough: P.hidden,
        textAlign: l.textAlign(P.textAlign)
      });
    }, y = this.isHorizontal(), w = this._computeTitleHeight();
    y ? f = {
      x: Vt(o, this.left + h, this.right - i[0]),
      y: this.top + h + w,
      line: 0
    } : f = {
      x: this.left + h,
      y: Vt(o, this.top + w + h, this.bottom - n[0].height),
      line: 0
    }, Dc(this.ctx, t.textDirection);
    const E = g + h;
    this.legendItems.forEach((k, R) => {
      s.strokeStyle = k.fontColor, s.fillStyle = k.fontColor;
      const P = s.measureText(k.text).width, H = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)), V = m + u + P;
      let B = f.x, J = f.y;
      l.setWidth(this.width), y ? R > 0 && B + V + h > this.right && (J = f.y += E, f.line++, B = f.x = Vt(o, this.left + h, this.right - i[f.line])) : R > 0 && J + E > this.bottom && (B = f.x = B + n[f.line].width + h, f.line++, J = f.y = Vt(o, this.top + w + h, this.bottom - n[f.line].height));
      const ut = l.x(B);
      if (x(ut, J, k), B = op(H, B + m + u, y ? B + V : this.right, t.rtl), v(l.x(B), J, k), y)
        f.x += V + h;
      else if (typeof k.text != "string") {
        const gt = c.lineHeight;
        f.y += th(k, gt);
      } else
        f.y += E;
    }), Lc(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, n = t.title, i = At(n.font), s = Lt(n.padding);
    if (!n.display)
      return;
    const o = bn(t.rtl, this.left, this.width), r = this.ctx, a = n.position, l = i.size / 2, c = s.top + l;
    let h, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), h = this.top + c, d = Vt(t.align, d, this.right - u);
    else {
      const m = this.columnSizes.reduce((p, g) => Math.max(p, g.height), 0);
      h = c + Vt(t.align, this.top, this.bottom - m - t.labels.padding - this._computeTitleHeight());
    }
    const f = Vt(a, d, d + u);
    r.textAlign = o.textAlign(wc(a)), r.textBaseline = "middle", r.strokeStyle = n.color, r.fillStyle = n.color, r.font = i.string, Tn(r, n.text, f, h, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, n = At(t.font), i = Lt(t.padding);
    return t.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, n) {
    let i, s, o;
    if (Je(t, this.left, this.right) && Je(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (s = o[i], Je(t, s.left, s.left + s.width) && Je(n, s.top, s.top + s.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!g_(t.type, n))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = d_(s, i);
      s && !o && lt(n.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = i, i && !o && lt(n.onHover, [
        t,
        i,
        this
      ], this);
    } else
      i && lt(n.onClick, [
        t,
        i,
        this
      ], this);
  }
}
function u_(e, t, n, i, s) {
  const o = f_(i, e, t, n), r = p_(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function f_(e, t, n, i) {
  let s = e.text;
  return s && typeof s != "string" && (s = s.reduce((o, r) => o.length > r.length ? o : r)), t + n.size / 2 + i.measureText(s).width;
}
function p_(e, t, n) {
  let i = e;
  return typeof t.text != "string" && (i = th(t, n)), i;
}
function th(e, t) {
  const n = e.text ? e.text.length + 0.5 : 0;
  return t * n;
}
function g_(e, t) {
  return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"));
}
var m_ = {
  id: "legend",
  _element: Ba,
  start(e, t, n) {
    const i = e.legend = new Ba({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    Ae.configure(e, i, n), Ae.addBox(e, i);
  },
  stop(e) {
    Ae.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const i = e.legend;
    Ae.configure(e, i, n), i.options = n;
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
    onClick(e, t, n) {
      const i = t.datasetIndex, s = n.chart;
      s.isDatasetVisible(i) ? (s.hide(i), t.hidden = !0) : (s.show(i), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets, { labels: { usePointStyle: n, pointStyle: i, textAlign: s, color: o, useBorderRadius: r, borderRadius: a } } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0), h = Lt(c.borderWidth);
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
            pointStyle: i || c.pointStyle,
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
const $n = {
  average(e) {
    if (!e.length)
      return !1;
    let t, n, i = 0, s = 0, o = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const r = e[t].element;
      if (r && r.hasValue()) {
        const a = r.tooltipPosition();
        i += a.x, s += a.y, ++o;
      }
    }
    return {
      x: i / o,
      y: s / o
    };
  },
  nearest(e, t) {
    if (!e.length)
      return !1;
    let n = t.x, i = t.y, s = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = bo(t, c);
        h < s && (s = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      n = l.x, i = l.y;
    }
    return {
      x: n,
      y: i
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
  const { element: n, datasetIndex: i, index: s } = t, o = e.getDatasetMeta(i).controller, { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(s),
    raw: e.data.datasets[i].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: n
  };
}
function Wa(e, t) {
  const n = e.chart.ctx, { body: i, footer: s, title: o } = e, { boxWidth: r, boxHeight: a } = t, l = At(t.bodyFont), c = At(t.titleFont), h = At(t.footerFont), d = o.length, u = s.length, f = i.length, m = Lt(t.padding);
  let p = m.height, g = 0, x = i.reduce((w, E) => w + E.before.length + E.lines.length + E.after.length, 0);
  if (x += e.beforeBody.length + e.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), x) {
    const w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * w + (x - f) * l.lineHeight + (x - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let v = 0;
  const y = function(w) {
    g = Math.max(g, n.measureText(w).width + v);
  };
  return n.save(), n.font = c.string, ot(e.title, y), n.font = l.string, ot(e.beforeBody.concat(e.afterBody), y), v = t.displayColors ? r + 2 + t.boxPadding : 0, ot(i, (w) => {
    ot(w.before, y), ot(w.lines, y), ot(w.after, y);
  }), v = 0, n.font = h.string, ot(e.footer, y), n.restore(), g += m.width, {
    width: g,
    height: p
  };
}
function b_(e, t) {
  const { y: n, height: i } = t;
  return n < i / 2 ? "top" : n > e.height - i / 2 ? "bottom" : "center";
}
function x_(e, t, n, i) {
  const { x: s, width: o } = i, r = n.caretSize + n.caretPadding;
  if (e === "left" && s + o + r > t.width || e === "right" && s - o - r < 0)
    return !0;
}
function v_(e, t, n, i) {
  const { x: s, width: o } = n, { width: r, chartArea: { left: a, right: l } } = e;
  let c = "center";
  return i === "center" ? c = s <= (a + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= r - o / 2 && (c = "right"), x_(c, e, t, n) && (c = "center"), c;
}
function ja(e, t, n) {
  const i = n.yAlign || t.yAlign || b_(e, n);
  return {
    xAlign: n.xAlign || t.xAlign || v_(e, t, n, i),
    yAlign: i
  };
}
function y_(e, t) {
  let { x: n, width: i } = e;
  return t === "right" ? n -= i : t === "center" && (n -= i / 2), n;
}
function O_(e, t, n) {
  let { y: i, height: s } = e;
  return t === "top" ? i += n : t === "bottom" ? i -= s + n : i -= s / 2, i;
}
function Ga(e, t, n, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = e, { xAlign: a, yAlign: l } = n, c = s + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = _n(r);
  let m = y_(t, a);
  const p = O_(t, l, c);
  return l === "center" ? a === "left" ? m += c : a === "right" && (m -= c) : a === "left" ? m -= Math.max(h, u) + s : a === "right" && (m += Math.max(d, f) + s), {
    x: Xt(m, 0, i.width - t.width),
    y: Xt(p, 0, i.height - t.height)
  };
}
function Fi(e, t, n) {
  const i = Lt(n.padding);
  return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - i.right : e.x + i.left;
}
function Ua(e) {
  return re([], me(e));
}
function E_(e, t, n) {
  return Ne(e, {
    tooltip: t,
    tooltipItems: n,
    type: "tooltip"
  });
}
function $a(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const eh = {
  beforeTitle: pe,
  title(e) {
    if (e.length > 0) {
      const t = e[0], n = t.chart.data.labels, i = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (i > 0 && t.dataIndex < i)
        return n[t.dataIndex];
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
    const n = e.formattedValue;
    return mt(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      pointStyle: n.pointStyle,
      rotation: n.rotation
    };
  },
  afterLabel: pe,
  afterBody: pe,
  beforeFooter: pe,
  footer: pe,
  afterFooter: pe
};
function Nt(e, t, n, i) {
  const s = e[t].call(n, i);
  return typeof s > "u" ? eh[t].call(n, i) : s;
}
class Co extends an {
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
    const n = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && n.options.animation && i.animations, o = new Fc(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = E_(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, n) {
    const { callbacks: i } = n, s = Nt(i, "beforeTitle", this, t), o = Nt(i, "title", this, t), r = Nt(i, "afterTitle", this, t);
    let a = [];
    return a = re(a, me(s)), a = re(a, me(o)), a = re(a, me(r)), a;
  }
  getBeforeBody(t, n) {
    return Ua(Nt(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: i } = n, s = [];
    return ot(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = $a(i, o);
      re(r.before, me(Nt(a, "beforeLabel", this, o))), re(r.lines, Nt(a, "label", this, o)), re(r.after, me(Nt(a, "afterLabel", this, o))), s.push(r);
    }), s;
  }
  getAfterBody(t, n) {
    return Ua(Nt(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: i } = n, s = Nt(i, "beforeFooter", this, t), o = Nt(i, "footer", this, t), r = Nt(i, "afterFooter", this, t);
    let a = [];
    return a = re(a, me(s)), a = re(a, me(o)), a = re(a, me(r)), a;
  }
  _createItems(t) {
    const n = this._active, i = this.chart.data, s = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = n.length; l < c; ++l)
      a.push(__(this.chart, n[l]));
    return t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, i))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, i))), ot(a, (h) => {
      const d = $a(t.callbacks, h);
      s.push(Nt(d, "labelColor", this, h)), o.push(Nt(d, "labelPointStyle", this, h)), r.push(Nt(d, "labelTextColor", this, h));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()), s = this._active;
    let o, r = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = $n[i.position].call(this, s, this._eventPosition);
      r = this._createItems(i), this.title = this.getTitle(r, i), this.beforeBody = this.getBeforeBody(r, i), this.body = this.getBody(r, i), this.afterBody = this.getAfterBody(r, i), this.footer = this.getFooter(r, i);
      const l = this._size = Wa(this, i), c = Object.assign({}, a, l), h = ja(this.chart, i, c), d = Ga(i, c, h, this.chart);
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
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && i.external && i.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: n
    });
  }
  drawCaret(t, n, i, s) {
    const o = this.getCaretPosition(t, i, s);
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, n, i) {
    const { xAlign: s, yAlign: o } = this, { caretSize: r, cornerRadius: a } = i, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = _n(a), { x: u, y: f } = t, { width: m, height: p } = n;
    let g, x, v, y, w, E;
    return o === "center" ? (w = f + p / 2, s === "left" ? (g = u, x = g - r, y = w + r, E = w - r) : (g = u + m, x = g + r, y = w - r, E = w + r), v = g) : (s === "left" ? x = u + Math.max(l, h) + r : s === "right" ? x = u + m - Math.max(c, d) - r : x = this.caretX, o === "top" ? (y = f, w = y - r, g = x - r, v = x + r) : (y = f + p, w = y + r, g = x + r, v = x - r), E = y), {
      x1: g,
      x2: x,
      x3: v,
      y1: y,
      y2: w,
      y3: E
    };
  }
  drawTitle(t, n, i) {
    const s = this.title, o = s.length;
    let r, a, l;
    if (o) {
      const c = bn(i.rtl, this.x, this.width);
      for (t.x = Fi(this, i.titleAlign, i), n.textAlign = c.textAlign(i.titleAlign), n.textBaseline = "middle", r = At(i.titleFont), a = i.titleSpacing, n.fillStyle = i.titleColor, n.font = r.string, l = 0; l < o; ++l)
        n.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, i, s, o) {
    const r = this.labelColors[i], a = this.labelPointStyles[i], { boxHeight: l, boxWidth: c, boxPadding: h } = o, d = At(o.bodyFont), u = Fi(this, "left", o), f = s.x(u), m = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, p = n.y + m;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, x = s.leftForLtr(f, c) + c / 2, v = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, yo(t, g, x, v), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, yo(t, g, x, v);
    } else {
      t.lineWidth = nt(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const g = s.leftForLtr(f, c - h), x = s.leftForLtr(s.xPlus(f, 1), c - h - 2), v = _n(r.borderRadius);
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
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, n, i) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = i, d = At(i.bodyFont);
    let u = d.lineHeight, f = 0;
    const m = bn(i.rtl, this.x, this.width), p = function(P) {
      n.fillText(P, m.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, g = m.textAlign(r);
    let x, v, y, w, E, k, R;
    for (n.textAlign = r, n.textBaseline = "middle", n.font = d.string, t.x = Fi(this, g, i), n.fillStyle = i.bodyColor, ot(this.beforeBody, p), f = a && g !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, w = 0, k = s.length; w < k; ++w) {
      for (x = s[w], v = this.labelTextColors[w], n.fillStyle = v, ot(x.before, p), y = x.lines, a && y.length && (this._drawColorBox(n, t, w, m, i), u = Math.max(d.lineHeight, l)), E = 0, R = y.length; E < R; ++E)
        p(y[E]), u = d.lineHeight;
      ot(x.after, p);
    }
    f = 0, u = d.lineHeight, ot(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, n, i) {
    const s = this.footer, o = s.length;
    let r, a;
    if (o) {
      const l = bn(i.rtl, this.x, this.width);
      for (t.x = Fi(this, i.footerAlign, i), t.y += i.footerMarginTop, n.textAlign = l.textAlign(i.footerAlign), n.textBaseline = "middle", r = At(i.footerFont), n.fillStyle = i.footerColor, n.font = r.string, a = 0; a < o; ++a)
        n.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, n, i, s) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = i, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: m } = _n(s.cornerRadius);
    n.fillStyle = s.backgroundColor, n.strokeStyle = s.borderColor, n.lineWidth = s.borderWidth, n.beginPath(), n.moveTo(a + d, l), r === "top" && this.drawCaret(t, n, i, s), n.lineTo(a + c - u, l), n.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, n, i, s), n.lineTo(a + c, l + h - m), n.quadraticCurveTo(a + c, l + h, a + c - m, l + h), r === "bottom" && this.drawCaret(t, n, i, s), n.lineTo(a + f, l + h), n.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, n, i, s), n.lineTo(a, l + d), n.quadraticCurveTo(a, l, a + d, l), n.closePath(), n.fill(), s.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const r = $n[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Wa(this, t), l = Object.assign({}, r, this._size), c = ja(n, t, l), h = Ga(t, l, c, n);
      (s._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i)
      return;
    this._updateAnimationTarget(n);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const r = Lt(n.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, n), Dc(t, n.textDirection), o.y += r.top, this.drawTitle(o, t, n), this.drawBody(o, t, n), this.drawFooter(o, t, n), Lc(t, n.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const i = this._active, s = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !ss(i, s), r = this._positionChanged(s, n);
    (o || r) && (this._active = s, this._eventPosition = n, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], r = this._getActiveElements(t, o, n, i), a = this._positionChanged(r, t), l = n || !ss(r, o) || a;
    return l && (this._active = r, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, n))), l;
  }
  _getActiveElements(t, n, i, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return n;
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: s, options: o } = this, r = $n[o.position].call(this, t, n);
    return r !== !1 && (i !== r.x || s !== r.y);
  }
}
K(Co, "positioners", $n);
var w_ = {
  id: "tooltip",
  _element: Co,
  positioners: $n,
  afterInit(e, t, n) {
    n && (e.tooltip = new Co({
      chart: e,
      options: n
    }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = {
        tooltip: t
      };
      if (e.notifyPlugins("beforeTooltipDraw", {
        ...n,
        cancelable: !0
      }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
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
function C_(e, t) {
  const n = [], { bounds: s, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = e, f = o || 1, m = h - 1, { min: p, max: g } = t, x = !mt(r), v = !mt(a), y = !mt(c), w = (g - p) / (d + 1);
  let E = qr((g - p) / m / f) * f, k, R, P, H;
  if (E < 1e-14 && !x && !v)
    return [
      {
        value: p
      },
      {
        value: g
      }
    ];
  H = Math.ceil(g / E) - Math.floor(p / E), H > m && (E = qr(H * E / m / f) * f), mt(l) || (k = Math.pow(10, l), E = Math.ceil(E * k) / k), s === "ticks" ? (R = Math.floor(p / E) * E, P = Math.ceil(g / E) * E) : (R = p, P = g), x && v && o && Jf((a - r) / o, E / 1e3) ? (H = Math.round(Math.min((a - r) / E, h)), E = (a - r) / H, R = r, P = a) : y ? (R = x ? r : R, P = v ? a : P, H = c - 1, E = (P - R) / H) : (H = (P - R) / E, Qn(H, Math.round(H), E / 1e3) ? H = Math.round(H) : H = Math.ceil(H));
  const V = Math.max(Jr(E), Jr(R));
  k = Math.pow(10, mt(l) ? V : l), R = Math.round(R * k) / k, P = Math.round(P * k) / k;
  let B = 0;
  for (x && (u && R !== r ? (n.push({
    value: r
  }), R < r && B++, Qn(Math.round((R + B * E) * k) / k, r, Ka(r, w, e)) && B++) : R < r && B++); B < H; ++B)
    n.push({
      value: Math.round((R + B * E) * k) / k
    });
  return v && u && P !== a ? n.length && Qn(n[n.length - 1].value, a, Ka(a, w, e)) ? n[n.length - 1].value = a : n.push({
    value: a
  }) : (!v || P === a) && n.push({
    value: P
  }), n;
}
function Ka(e, t, { horizontal: n, minRotation: i }) {
  const s = de(i), o = (n ? Math.sin(s) : Math.cos(s)) || 1e-3, r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class ps extends Dn {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    return mt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => s = n ? s : l, a = (l) => o = i ? o : l;
    if (t) {
      const l = Sn(s), c = Sn(o);
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
    let { maxTicksLimit: n, stepSize: i } = t, s;
    return i ? (s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, s > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`), s = 1e3)) : (s = this.computeTickLimit(), n = n || 11), n && (s = Math.min(n, s)), s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, n = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = {
      maxTicks: i,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: n.precision,
      step: n.stepSize,
      count: n.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: n.minRotation || 0,
      includeBounds: n.includeBounds !== !1
    }, o = this._range || this, r = C_(s, o);
    return t.bounds === "ticks" && xc(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let n = this.min, i = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const s = (i - n) / Math.max(t.length - 1, 1) / 2;
      n -= s, i += s;
    }
    this._startValue = n, this._endValue = i, this._valueRange = i - n;
  }
  getLabelForValue(t) {
    return Ds(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ya extends ps {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = bt(t) ? t : 0, this.max = bt(n) ? n : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), n = t ? this.width : this.height, i = de(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
K(Ya, "id", "linear"), K(Ya, "defaults", {
  ticks: {
    callback: Ls.formatters.numeric
  }
});
const pi = (e) => Math.floor(Pe(e)), Ge = (e, t) => Math.pow(10, pi(e) + t);
function Xa(e) {
  return e / Math.pow(10, pi(e)) === 1;
}
function qa(e, t, n) {
  const i = Math.pow(10, n), s = Math.floor(e / i);
  return Math.ceil(t / i) - s;
}
function S_(e, t) {
  const n = t - e;
  let i = pi(n);
  for (; qa(e, t, i) > 10; )
    i++;
  for (; qa(e, t, i) < 10; )
    i--;
  return Math.min(i, pi(e));
}
function T_(e, { min: t, max: n }) {
  t = Bt(e.min, t);
  const i = [], s = pi(t);
  let o = S_(t, n), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = s > o ? Math.pow(10, s) : 0, c = Math.round((t - l) * r) / r, h = Math.floor((t - l) / a / 10) * a * 10;
  let d = Math.floor((c - h) / Math.pow(10, o)), u = Bt(e.min, Math.round((l + h + d * Math.pow(10, o)) * r) / r);
  for (; u < n; )
    i.push({
      value: u,
      major: Xa(u),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (o++, d = 2, r = o >= 0 ? 1 : r), u = Math.round((l + h + d * Math.pow(10, o)) * r) / r;
  const f = Bt(e.max, u);
  return i.push({
    value: f,
    major: Xa(f),
    significand: d
  }), i;
}
class Ja extends Dn {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    const i = ps.prototype.parse.apply(this, [
      t,
      n
    ]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return bt(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = bt(t) ? Math.max(0, t) : null, this.max = bt(n) ? Math.max(0, n) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !bt(this._userMin) && (this.min = t === Ge(this.min, 0) ? Ge(this.min, -1) : Ge(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let i = this.min, s = this.max;
    const o = (a) => i = t ? i : a, r = (a) => s = n ? s : a;
    i === s && (i <= 0 ? (o(1), r(10)) : (o(Ge(i, -1)), r(Ge(s, 1)))), i <= 0 && o(Ge(s, -1)), s <= 0 && r(Ge(i, 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.options, n = {
      min: this._userMin,
      max: this._userMax
    }, i = T_(n, this);
    return t.bounds === "ticks" && xc(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : Ds(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = Pe(t), this._valueRange = Pe(this.max) - Pe(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Pe(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
K(Ja, "id", "logarithmic"), K(Ja, "defaults", {
  ticks: {
    callback: Ls.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function So(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = Lt(t.backdropPadding);
    return Q(t.font && t.font.size, Ot.font.size) + n.height;
  }
  return 0;
}
function P_(e, t, n) {
  return n = _t(n) ? n : [
    n
  ], {
    w: gp(e, t.string, n),
    h: n.length * t.lineHeight
  };
}
function Za(e, t, n, i, s) {
  return e === i || e === s ? {
    start: t - n / 2,
    end: t + n / 2
  } : e < i || e > s ? {
    start: t - n,
    end: t
  } : {
    start: t,
    end: t + n
  };
}
function A_(e) {
  const t = {
    l: e.left + e._padding.left,
    r: e.right - e._padding.right,
    t: e.top + e._padding.top,
    b: e.bottom - e._padding.bottom
  }, n = Object.assign({}, t), i = [], s = [], o = e._pointLabels.length, r = e.options.pointLabels, a = r.centerPointLabels ? Et / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(e.getPointLabelContext(l));
    s[l] = c.padding;
    const h = e.getPointPosition(l, e.drawingArea + s[l], a), d = At(c.font), u = P_(e.ctx, d, e._pointLabels[l]);
    i[l] = u;
    const f = jt(e.getIndexAngle(l) + a), m = Math.round(Jo(f)), p = Za(m, h.x, u.w, 0, 180), g = Za(m, h.y, u.h, 90, 270);
    I_(n, t, f, p, g);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b), e._pointLabelItems = R_(e, i, s);
}
function I_(e, t, n, i, s) {
  const o = Math.abs(Math.sin(n)), r = Math.abs(Math.cos(n));
  let a = 0, l = 0;
  i.start < t.l ? (a = (t.l - i.start) / o, e.l = Math.min(e.l, t.l - a)) : i.end > t.r && (a = (i.end - t.r) / o, e.r = Math.max(e.r, t.r + a)), s.start < t.t ? (l = (t.t - s.start) / r, e.t = Math.min(e.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / r, e.b = Math.max(e.b, t.b + l));
}
function R_(e, t, n) {
  const i = [], s = e._pointLabels.length, o = e.options, r = So(o) / 2, a = e.drawingArea, l = o.pointLabels.centerPointLabels ? Et / s : 0;
  for (let c = 0; c < s; c++) {
    const h = e.getPointPosition(c, a + r + n[c], l), d = Math.round(Jo(jt(h.angle + xt))), u = t[c], f = D_(h.y, u.h, d), m = M_(d), p = k_(h.x, u.w, m);
    i.push({
      x: h.x,
      y: f,
      textAlign: m,
      left: p,
      top: f,
      right: p + u.w,
      bottom: f + u.h
    });
  }
  return i;
}
function M_(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function k_(e, t, n) {
  return n === "right" ? e -= t : n === "center" && (e -= t / 2), e;
}
function D_(e, t, n) {
  return n === 90 || n === 270 ? e -= t / 2 : (n > 270 || n < 90) && (e -= t), e;
}
function L_(e, t) {
  const { ctx: n, options: { pointLabels: i } } = e;
  for (let s = t - 1; s >= 0; s--) {
    const o = i.setContext(e.getPointLabelContext(s)), r = At(o.font), { x: a, y: l, textAlign: c, left: h, top: d, right: u, bottom: f } = e._pointLabelItems[s], { backdropColor: m } = o;
    if (!mt(m)) {
      const p = _n(o.borderRadius), g = Lt(o.backdropPadding);
      n.fillStyle = m;
      const x = h - g.left, v = d - g.top, y = u - h + g.width, w = f - d + g.height;
      Object.values(p).some((E) => E !== 0) ? (n.beginPath(), cs(n, {
        x,
        y: v,
        w: y,
        h: w,
        radius: p
      }), n.fill()) : n.fillRect(x, v, y, w);
    }
    Tn(n, e._pointLabels[s], a, l + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle"
    });
  }
}
function nh(e, t, n, i) {
  const { ctx: s } = e;
  if (n)
    s.arc(e.xCenter, e.yCenter, t, 0, dt);
  else {
    let o = e.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < i; r++)
      o = e.getPointPosition(r, t), s.lineTo(o.x, o.y);
  }
}
function N_(e, t, n, i, s) {
  const o = e.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !i || !a || !l || n < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(s.dash), o.lineDashOffset = s.dashOffset, o.beginPath(), nh(e, n, r, i), o.closePath(), o.stroke(), o.restore());
}
function H_(e, t, n) {
  return Ne(e, {
    label: n,
    index: t,
    type: "pointLabel"
  });
}
class Kn extends ps {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = Lt(So(this.options) / 2), n = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + n / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(n, i) / 2);
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    this.min = bt(t) && !isNaN(t) ? t : 0, this.max = bt(n) && !isNaN(n) ? n : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / So(this.options));
  }
  generateTickLabels(t) {
    ps.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((n, i) => {
      const s = lt(this.options.pointLabels.callback, [
        n,
        i
      ], this);
      return s || s === 0 ? s : "";
    }).filter((n, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? A_(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, i, s) {
    this.xCenter += Math.floor((t - n) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, i, s));
  }
  getIndexAngle(t) {
    const n = dt / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return jt(t * n + de(i));
  }
  getDistanceFromCenterForValue(t) {
    if (mt(t))
      return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (mt(t))
      return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return H_(this.getContext(), t, i);
    }
  }
  getPointPosition(t, n, i = 0) {
    const s = this.getIndexAngle(t) - xt + i;
    return {
      x: Math.cos(s) * n + this.xCenter,
      y: Math.sin(s) * n + this.yCenter,
      angle: s
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: i, right: s, bottom: o } = this._pointLabelItems[t];
    return {
      left: n,
      top: i,
      right: s,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: n } } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(), i.beginPath(), nh(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, n = this.options, { angleLines: i, grid: s, border: o } = n, r = this._pointLabels.length;
    let a, l, c;
    if (n.pointLabels.display && L_(this, r), s.display && this.ticks.forEach((h, d) => {
      if (d !== 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const u = this.getContext(d), f = s.setContext(u), m = o.setContext(u);
        N_(this, f, l, r, m);
      }
    }), i.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const h = i.setContext(this.getPointLabelContext(a)), { color: d, lineWidth: u } = h;
        !u || !d || (t.lineWidth = u, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, n = this.options, i = n.ticks;
    if (!i.display)
      return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && !n.reverse)
        return;
      const c = i.setContext(this.getContext(l)), h = At(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const d = Lt(c.backdropPadding);
        t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
      }
      Tn(t, a.label, 0, -o, h, {
        color: c.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
K(Kn, "id", "radialLinear"), K(Kn, "defaults", {
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
}), K(Kn, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), K(Kn, "descriptors", {
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
  const n = e._adapter, { parser: i, round: s, isoWeekday: o } = e._parseOpts;
  let r = t;
  return typeof i == "function" && (r = i(r)), bt(r) || (r = typeof i == "string" ? n.parse(r, i) : n.parse(r)), r === null ? null : (s && (r = s === "week" && (as(o) || o === !0) ? n.startOf(r, "isoWeek", o) : n.startOf(r, s)), +r);
}
function tl(e, t, n, i) {
  const s = zt.length;
  for (let o = zt.indexOf(e); o < s - 1; ++o) {
    const r = Fs[zt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((n - t) / (a * r.size)) <= i)
      return zt[o];
  }
  return zt[s - 1];
}
function F_(e, t, n, i, s) {
  for (let o = zt.length - 1; o >= zt.indexOf(n); o--) {
    const r = zt[o];
    if (Fs[r].common && e._adapter.diff(s, i, r) >= t - 1)
      return r;
  }
  return zt[n ? zt.indexOf(n) : 0];
}
function V_(e) {
  for (let t = zt.indexOf(e) + 1, n = zt.length; t < n; ++t)
    if (Fs[zt[t]].common)
      return zt[t];
}
function el(e, t, n) {
  if (!n)
    e[t] = !0;
  else if (n.length) {
    const { lo: i, hi: s } = Zo(n, t), o = n[i] >= t ? n[i] : n[s];
    e[o] = !0;
  }
}
function B_(e, t, n, i) {
  const s = e._adapter, o = +s.startOf(t[0].value, i), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, i))
    l = n[a], l >= 0 && (t[l].major = !0);
  return t;
}
function nl(e, t, n) {
  const i = [], s = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], s[a] = r, i.push({
      value: a,
      major: !1
    });
  return o === 0 || !n ? i : B_(e, i, s, n);
}
class gs extends Dn {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, n = {}) {
    const i = t.time || (t.time = {}), s = this._adapter = new Og._date(t.adapters.date);
    s.init(n), Zn(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = n.normalized;
  }
  parse(t, n) {
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
    const t = this.options, n = this._adapter, i = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = bt(s) && !isNaN(s) ? s : +n.startOf(Date.now(), i), o = bt(o) && !isNaN(o) ? o : +n.endOf(Date.now(), i) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    return t.length && (n = t[0], i = t[t.length - 1]), {
      min: n,
      max: i
    };
  }
  buildTicks() {
    const t = this.options, n = t.time, i = t.ticks, s = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, r = this.max, a = ep(s, o, r);
    return this._unit = n.unit || (i.autoSkip ? tl(n.minUnit, this.min, this.max, this._getLabelCapacity(o)) : F_(this, a.length, n.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : V_(this._unit), this.initOffsets(s), t.reverse && a.reverse(), nl(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0, i = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? n = 1 - s : n = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    n = Xt(n, 0, r), i = Xt(i, 0, r), this._offsets = {
      start: n,
      end: i,
      factor: 1 / (n + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, n = this.min, i = this.max, s = this.options, o = s.time, r = o.unit || tl(o.minUnit, n, i, this._getLabelCapacity(n)), a = Q(s.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = as(l) || l === !0, h = {};
    let d = n, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(i, n, r) > 1e5 * a)
      throw new Error(n + " and " + i + " are too far apart with stepSize of " + a + " " + r);
    const m = s.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < i; u = +t.add(u, a, r), f++)
      el(h, u, m);
    return (u === i || s.bounds === "ticks" || f === 1) && el(h, u, m), Object.keys(h).sort((p, g) => p - g).map((p) => +p);
  }
  getLabelForValue(t) {
    const n = this._adapter, i = this.options.time;
    return i.tooltipFormat ? n.format(t, i.tooltipFormat) : n.format(t, i.displayFormats.datetime);
  }
  format(t, n) {
    const s = this.options.time.displayFormats, o = this._unit, r = n || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, n, i, s) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return lt(r, [
        t,
        n,
        i
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], d = c && a[c], u = i[n], f = c && d && u && u.major;
    return this._adapter.format(t, s || (f ? d : h));
  }
  generateTickLabels(t) {
    let n, i, s;
    for (n = 0, i = t.length; n < i; ++n)
      s = t[n], s.label = this._tickFormatFunction(s.value, n, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets, i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets, i = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks, i = this.ctx.measureText(t).width, s = de(this.isHorizontal() ? n.maxRotation : n.minRotation), o = Math.cos(s), r = Math.sin(s), a = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + a * r,
      h: i * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const n = this.options.time, i = n.displayFormats, s = i[n.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, nl(this, [
      t
    ], this._majorUnit), s), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], n, i;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (n = 0, i = s.length; n < i; ++n)
      t = t.concat(s[n].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, i;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (n = 0, i = s.length; n < i; ++n)
      t.push(Qa(this, s[n]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return ip(t.sort(z_));
  }
}
K(gs, "id", "time"), K(gs, "defaults", {
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
function Vi(e, t, n) {
  let i = 0, s = e.length - 1, o, r, a, l;
  n ? (t >= e[i].pos && t <= e[s].pos && ({ lo: i, hi: s } = xo(e, "pos", t)), { pos: o, time: a } = e[i], { pos: r, time: l } = e[s]) : (t >= e[i].time && t <= e[s].time && ({ lo: i, hi: s } = xo(e, "time", t)), { time: o, pos: a } = e[i], { time: r, pos: l } = e[s]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class il extends gs {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(t);
    this._minPos = Vi(n, this.min), this._tableRange = Vi(n, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this, s = [], o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= n && c <= i && s.push(c);
    if (s.length < 2)
      return [
        {
          time: n,
          pos: 0
        },
        {
          time: i,
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
    const n = this.getDataTimestamps(), i = this.getLabelTimestamps();
    return n.length && i.length ? t = this.normalize(n.concat(i)) : t = n.length ? n : i, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Vi(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets, i = this.getDecimalForPixel(t) / n.factor - n.end;
    return Vi(this._table, i * this._tableRange + this._minPos, !0);
  }
}
K(il, "id", "timeseries"), K(il, "defaults", gs.defaults);
const ih = {
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
}, W_ = {
  type: {
    type: String,
    required: !0
  },
  ...ih
}, j_ = rc[0] === "2" ? (e, t) => Object.assign(e, {
  attrs: t
}) : (e, t) => Object.assign(e, t);
function fn(e) {
  return ws(e) ? it(e) : e;
}
function G_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
  return ws(t) ? new Proxy(e, {}) : e;
}
function U_(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function sh(e, t) {
  e.labels = t;
}
function oh(e, t, n) {
  const i = [];
  e.datasets = t.map((s) => {
    const o = e.datasets.find((r) => r[n] === s[n]);
    return !o || !s.data || i.includes(o) ? {
      ...s
    } : (i.push(o), Object.assign(o, s), o);
  });
}
function $_(e, t) {
  const n = {
    labels: [],
    datasets: []
  };
  return sh(n, e.labels), oh(n, e.datasets, t), n;
}
const K_ = qt({
  props: W_,
  setup(e, t) {
    let { expose: n } = t;
    const i = Gt(null), s = Cl(null);
    n({
      chart: s
    });
    const o = () => {
      if (!i.value)
        return;
      const { type: l, data: c, options: h, plugins: d, datasetIdKey: u } = e, f = $_(c, u), m = G_(f, c);
      s.value = new vi(i.value, {
        type: l,
        data: m,
        options: {
          ...h
        },
        plugins: d
      });
    }, r = () => {
      const l = it(s.value);
      l && (l.destroy(), s.value = null);
    }, a = (l) => {
      l.update(e.updateMode);
    };
    return jo(o), Bl(r), Qe([
      () => e.options,
      () => e.data
    ], (l, c) => {
      let [h, d] = l, [u, f] = c;
      const m = it(s.value);
      if (!m)
        return;
      let p = !1;
      if (h) {
        const g = fn(h), x = fn(u);
        g && g !== x && (U_(m, g), p = !0);
      }
      if (d) {
        const g = fn(d.labels), x = fn(f.labels), v = fn(d.datasets), y = fn(f.datasets);
        g !== x && (sh(m.config.data, g), p = !0), v && v !== y && (oh(m.config.data, v, e.datasetIdKey), p = !0);
      }
      p && a(m);
    }, {
      deep: !0
    }), () => oc("canvas", {
      ref: i
    });
  }
});
function rh(e, t) {
  return vi.register(t), qt({
    props: ih,
    setup(n, i) {
      let { expose: s } = i;
      const o = Cl(null), r = (a) => {
        o.value = a == null ? void 0 : a.chart;
      };
      return s({
        chart: o
      }), () => oc(K_, j_({
        ref: r
      }, {
        type: e,
        ...n
      }));
    }
  });
}
const Y_ = /* @__PURE__ */ rh("doughnut", Gn), X_ = /* @__PURE__ */ rh("radar", Ki), q_ = (e) => (Bo("data-v-792806d3"), e = e(), Wo(), e), J_ = { class: "doughnut-container" }, Z_ = { class: "doughnut-title" }, Q_ = { class: "doughnut-title-percent" }, t0 = /* @__PURE__ */ q_(() => /* @__PURE__ */ N("span", { class: "small" }, "%", -1)), e0 = {
  key: 0,
  class: "doughnut-title-below"
}, n0 = /* @__PURE__ */ qt({
  __name: "Doughnut",
  props: {
    percent: null
  },
  setup(e) {
    const t = e, { percent: n } = kn(t), i = Pt(() => Math.max(0, n.value)), s = Gt();
    Qe(i, (c) => {
      r.value = {
        labels: ["", ""],
        datasets: [{
          backgroundColor: ["#62BB46", "transparent"],
          data: [Number(c || 0), 100 - c]
        }]
      };
    }), vi.register(qi);
    const o = {
      id: "backgroundCircle",
      beforeDatasetsDraw(c, h, d) {
        const { ctx: u } = c;
        u.save();
        const f = c.getDatasetMeta(0).data[0], m = f.x, p = f.y, g = f.innerRadius, x = f.outerRadius, v = x - g, y = Math.PI / 180;
        u.beginPath(), u.lineWidth = v, u.strokeStyle = "rgba(0,0,0,0.1)", u.arc(m, p, x - v / 2, 0, y * 360, !1), u.stroke();
      }
    }, r = Gt({
      labels: ["", ""],
      datasets: [{
        backgroundColor: ["#62BB46", "transparent"],
        data: [Number(n.value || 0), 100 - n.value]
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
    return (c, h) => (Y(), et("div", J_, [
      yt($(Y_), {
        data: r.value,
        options: a,
        plugins: l,
        ref_key: "doughnutInstance",
        ref: s
      }, null, 8, ["data"]),
      N("div", Z_, [
        N("div", Q_, [
          nc(It($(i)), 1),
          t0
        ]),
        $(i) >= 0 ? (Y(), et("div", e0, "reduction")) : tn("", !0)
      ])
    ]));
  }
});
const i0 = /* @__PURE__ */ fe(n0, [["__scopeId", "data-v-792806d3"]]), ah = (e) => (Bo("data-v-4b3dea21"), e = e(), Wo(), e), s0 = {
  key: 0,
  class: "row text-start gx-5"
}, o0 = { class: "col-md-6" }, r0 = { class: "lca-heading" }, a0 = { class: "col-md-6" }, l0 = { class: "row" }, c0 = { class: "col-auto" }, h0 = { class: "doughnut" }, d0 = { class: "col" }, u0 = /* @__PURE__ */ ah(() => /* @__PURE__ */ N("h6", { class: "lca-heading mb-3" }, "Quick Comparison", -1)), f0 = { key: 0 }, p0 = ["value"], g0 = ["innerHTML"], m0 = { class: "row text-start" }, _0 = { class: "col-12" }, b0 = { key: 0 }, x0 = { class: "stat-table" }, v0 = /* @__PURE__ */ ah(() => /* @__PURE__ */ N("th", null, null, -1)), y0 = { class: "stat" }, O0 = /* @__PURE__ */ qt({
  __name: "TabContent",
  props: {
    tab: null
  },
  setup(e) {
    const t = e, n = _i(), i = function(m, p) {
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
    }], { tab: o } = kn(t), { analysis: r, materialsForComparison: a, material: l, materials: c, baselineMaterial: h } = mi(n), d = Pt(() => {
      if (!l.value || !h.value)
        return 0;
      const m = Number(l.value.Overall_ratings[o.value.title]), p = Number(h.value.Overall_ratings[o.value.title]);
      return Math.max(0, Math.round((p - m) / p * 100));
    }), u = Pt(() => o.value.comparisonString.replace(/\$percent/, String(d.value) + "%") + " " + h.value.Core_Data.Material), f = Pt({
      get: () => l.value && a.value ? a.value.indexOf(l.value) : 0,
      set: (m) => {
        a.value && a.value[m] && (l.value = a.value[m]);
      }
    });
    return (m, p) => (Y(), et(vt, null, [
      $(r) && $(r)[$(o).title] ? (Y(), et("div", s0, [
        N("div", o0, [
          N("h6", r0, It($(o).title) + " Overview", 1),
          N("p", null, It($(r)[$(o).title].overview), 1)
        ]),
        N("div", a0, [
          N("div", l0, [
            N("div", c0, [
              N("div", h0, [
                yt(i0, { percent: $(d) }, null, 8, ["percent"])
              ])
            ]),
            N("div", d0, [
              u0,
              $(a).length > 1 ? (Y(), et("div", f0, [
                jl(N("select", {
                  class: "form-select mb-3",
                  "onUpdate:modelValue": p[0] || (p[0] = (g) => pt(f) ? f.value = g : null)
                }, [
                  (Y(!0), et(vt, null, he($(a), (g, x) => (Y(), et("option", { value: x }, It(g.Core_Data.Material), 9, p0))), 256))
                ], 512), [
                  [lc, $(f)]
                ])
              ])) : tn("", !0),
              N("p", null, [
                N("strong", null, It($(l).Core_Data.Material), 1),
                N("span", { innerHTML: $(u) }, null, 8, g0)
              ])
            ])
          ])
        ])
      ])) : tn("", !0),
      N("div", m0, [
        N("div", _0, [
          $(r) && $(r)[$(o).title] && $(r)[$(o).title].market ? (Y(), et("p", b0, [
            N("strong", null, It($(r)[$(o).title].market), 1)
          ])) : tn("", !0),
          N("table", x0, [
            N("thead", null, [
              N("tr", null, [
                v0,
                (Y(), et(vt, null, he(s, (g) => N("th", null, It(g.title), 1)), 64))
              ])
            ]),
            N("tbody", null, [
              (Y(!0), et(vt, null, he($(c), (g) => (Y(), et("tr", null, [
                N("th", null, It(g.Core_Data.Material), 1),
                (Y(), et(vt, null, he(s, (x) => N("td", y0, [
                  N("div", {
                    class: "stat-bar",
                    style: rn({ backgroundColor: x.color, width: String(i(g, x.title)) + "%" }),
                    title: ""
                  }, [
                    N("span", null, It(i(g, x.title)), 1)
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
const Zi = /* @__PURE__ */ fe(O0, [["__scopeId", "data-v-4b3dea21"]]), E0 = /* @__PURE__ */ qt({
  __name: "TabFossilFuel",
  setup(e) {
    return (t, n) => (Y(), On(Zi));
  }
}), w0 = { class: "d-flex mb-1 align-items-center" }, C0 = { class: "number" }, S0 = /* @__PURE__ */ qt({
  __name: "BarChartBar",
  props: {
    item: null,
    index: null,
    range: null
  },
  setup(e) {
    const t = e, { item: n, index: i, range: s } = kn(t);
    Gt(0);
    const o = Gt(), r = (l) => ({
      backgroundColor: l.material.display.color
    }), a = () => {
      o.value && (o.value.style.width = "0px", setTimeout(() => {
        const c = (Number(n.value.value.replace(/[^\d\.]/gi, "")) - s.value.min) / (s.value.max - s.value.min);
        o.value && (o.value.style.width = 200 * c + "px");
      }, 100 + i.value * 10));
    };
    return jo(() => {
      a();
    }), Vl(() => {
      a();
    }), (l, c) => (Y(), et("div", w0, [
      N("div", {
        class: "bar me-2",
        ref_key: "bar",
        ref: o,
        style: rn(r($(n)))
      }, null, 4),
      N("div", C0, It($(n).value), 1)
    ]));
  }
});
const T0 = /* @__PURE__ */ fe(S0, [["__scopeId", "data-v-baf4c0c4"]]), P0 = { class: "list-unstyled" }, A0 = /* @__PURE__ */ qt({
  __name: "BarChart",
  props: {
    section: null
  },
  setup(e) {
    const t = e, { section: n } = kn(t), i = Pt(() => {
      const o = n.value.items.map((a) => Number(a.value.replace(/[^\d\.]/gi, ""))), r = s(o);
      return { min: r[0], max: r[1] };
    });
    function s(o) {
      const r = Math.max(...o), a = Math.min(...o), c = (r - a) * 0.55;
      return [a - c, r + c];
    }
    return (o, r) => (Y(), et("ul", P0, [
      (Y(!0), et(vt, null, he($(n).items, (a, l) => (Y(), et("li", null, [
        yt(T0, {
          item: a,
          index: l,
          range: $(i)
        }, null, 8, ["item", "index", "range"])
      ]))), 256))
    ]));
  }
});
const I0 = { class: "stats" }, R0 = { class: "stat-section" }, M0 = { class: "lca-heading" }, k0 = {
  key: 1,
  class: "list-unstyled"
}, D0 = /* @__PURE__ */ qt({
  __name: "StatsSection",
  setup(e) {
    const { materials: t } = mi(_i()), n = [
      "Description Summary"
    ], i = [
      "Product to Package Ratio",
      "Packaging Weight (g)",
      "Average SKU film weight  (Medium sized bag)"
    ], s = Pt(() => {
      const o = [];
      return !t.value || !t.value[0] || !t.value[0].Optional_Data || Object.keys(t.value[0].Optional_Data).forEach((a) => {
        n.includes(a) || t.value.every((l) => l.Optional_Data[a] != "") && [...new Set(t.value.map((l) => l.Optional_Data[a]))].length === t.value.length && o.push({
          title: a,
          items: t.value.map((l) => ({
            material: l,
            value: l.Optional_Data[a]
          }))
        });
      }), o;
    });
    return (o, r) => (Y(), et("div", I0, [
      (Y(!0), et(vt, null, he($(s), (a) => (Y(), et("section", R0, [
        N("h6", M0, It(a.title), 1),
        i.includes(a.title) ? (Y(), On(A0, {
          key: 0,
          section: a
        }, null, 8, ["section"])) : (Y(), et("ul", k0, [
          (Y(!0), et(vt, null, he(a.items, (l) => (Y(), et("li", null, [
            yt(fc, {
              class: "me-2",
              color: l.material.display.color
            }, null, 8, ["color"]),
            N("span", null, It(l.value), 1)
          ]))), 256))
        ]))
      ]))), 256))
    ]));
  }
}), L0 = /* @__PURE__ */ qt({
  __name: "Chart",
  setup(e) {
    vi.register(
      Kn,
      Ji,
      Ie,
      h_,
      w_,
      m_
    );
    const { materials: t } = mi(_i()), n = {
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
    }, i = Pt(() => {
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
    return (s, o) => $(i) && $(i).datasets ? (Y(), On($(X_), {
      key: 0,
      options: n,
      data: $(i)
    }, null, 8, ["data"])) : tn("", !0);
  }
}), lh = (e) => (Bo("data-v-a60c5b90"), e = e(), Wo(), e), N0 = { class: "container" }, H0 = { class: "row g-5" }, z0 = { class: "col-sm-12 col-md-6 d-flex align-items-center justify-content-center" }, F0 = { class: "col-sm-12 col-md-6 text-start align-items-start justify-content-start" }, V0 = {
  key: 0,
  class: "mb-4"
}, B0 = /* @__PURE__ */ lh(() => /* @__PURE__ */ N("h6", { class: "lca-heading" }, "Objective", -1)), W0 = /* @__PURE__ */ lh(() => /* @__PURE__ */ N("h6", { class: "lca-heading" }, "Compare", -1)), j0 = { class: "list-unstyled" }, G0 = {
  class: "d-flex align-items-start my-2",
  style: { "line-height": "1.25" }
}, U0 = { class: "small text-muted mt-1" }, $0 = { class: "row" }, K0 = { class: "col-12" }, Y0 = /* @__PURE__ */ Rs('<div class="container my-5" data-v-a60c5b90><div class="row justify-content-center" data-v-a60c5b90><div class="col-12 col-xl-8" data-v-a60c5b90><h2 class="text-light-emphasis" data-v-a60c5b90>In-depth Analysis</h2><p class="text-light-emphasis" data-v-a60c5b90>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur odio vitae aliquam suscipit. Praesent et ante molestie, mattis mauris nec, hendrerit justo. Mauris augue libero, congue nec purus in, egestas ullamcorper est.</p></div></div></div>', 1), X0 = { class: "tabs" }, q0 = { class: "nav nav-tabs report-tabs" }, J0 = { class: "nav-item" }, Z0 = ["href", "onClick"], Q0 = ["innerHTML"], t1 = { class: "lca-tab-content pt-5 pb-5" }, e1 = {
  key: 0,
  class: "container"
}, n1 = /* @__PURE__ */ qt({
  __name: "Report",
  props: {
    googleSheetId: null,
    googleApiKey: null
  },
  setup(e) {
    const t = e, n = _i(), { markets: i, market: s, materials: o, marketDetails: r, materialsForComparison: a } = mi(n), l = Gt("fossil-fuel"), c = Pt(() => h.find((d) => d.key == l.value)), h = [
      {
        key: "ghg",
        title: "Greenhouse Gas Emissions",
        titleHTML: "Greenhouse Gas<br />Emissions",
        comparisonString: " emits <strong> $percent less Greenhouse Gass</strong> than the ",
        icon: hf,
        content: Zi
      },
      {
        key: "fossil-fuel",
        title: "Fossil Fuel Usage",
        titleHTML: "Fossil Fuel<br />Use",
        comparisonString: " uses <strong> $percent less fossil fuels</strong> than the ",
        icon: Ju,
        content: E0
      },
      {
        key: "water-use",
        title: "Water Use",
        titleHTML: "Water<br /> Use",
        comparisonString: " uses <strong> $percent less water</strong> than the ",
        icon: mf,
        content: Zi
      },
      {
        key: "freshwater-eutrophication",
        title: "Freshwater Eutrophication",
        titleHTML: "Freshwater<br />Eutrophication",
        comparisonString: " <strong>has $percent less impact on the freshwater supply</strong> than the ",
        icon: sf,
        content: Zi
      }
    ];
    return n.loadLcaData(String(t.googleSheetId), String(t.googleApiKey)), (d, u) => (Y(), et(vt, null, [
      N("div", N0, [
        N("div", H0, [
          N("div", z0, [
            yt(L0)
          ]),
          N("div", F0, [
            $(r) && $(r).Objective ? (Y(), et("div", V0, [
              B0,
              N("p", null, It($(r).Objective), 1)
            ])) : tn("", !0),
            W0,
            N("ul", j0, [
              (Y(!0), et(vt, null, he($(o), (f) => (Y(), et("li", G0, [
                yt(fc, {
                  style: rn({ marginRight: "10px", marginTop: "0.15em" }),
                  color: f.display.color,
                  size: "1em"
                }, null, 8, ["style", "color"]),
                N("div", null, [
                  N("div", null, It(f.Core_Data.Material), 1),
                  N("div", U0, It(f.Optional_Data["Description Summary"]), 1)
                ])
              ]))), 256))
            ]),
            yt(D0)
          ])
        ])
      ]),
      N("div", $0, [
        N("div", K0, [
          Y0,
          N("div", X0, [
            N("ul", q0, [
              (Y(), et(vt, null, he(h, (f) => N("li", J0, [
                N("a", {
                  class: ms(["nav-link", { active: l.value == f.key }]),
                  href: `#${f.key}`,
                  onClick: Pu((m) => l.value = f.key, ["prevent"])
                }, [
                  (Y(), On(yr(f.icon))),
                  N("span", {
                    innerHTML: f.titleHTML
                  }, null, 8, Q0)
                ], 10, Z0)
              ])), 64))
            ])
          ]),
          N("div", t1, [
            $(c).content ? (Y(), et("div", e1, [
              (Y(), On(yr($(c).content), { tab: $(c) }, null, 8, ["tab"]))
            ])) : tn("", !0)
          ])
        ])
      ])
    ], 64));
  }
});
const i1 = /* @__PURE__ */ fe(n1, [["__scopeId", "data-v-a60c5b90"]]), sl = ku();
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-proampac-component]").forEach((t) => {
    switch (t.dataset.proampacComponent) {
      case "proampac-lca-selector":
        Br(ju).use(sl).mount(t);
        break;
      case "proampac-lca-report":
        Br(i1, t.dataset).use(sl).mount(t);
        break;
    }
  });
});
