function y() {}
function J(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function z(t) {
  return t();
}
function D() {
  return Object.create(null);
}
function $(t) {
  t.forEach(z);
}
function C(t) {
  return typeof t == "function";
}
function ft(t, n) {
  return t != t
    ? n == n
    : t !== n || (t && typeof t == "object") || typeof t == "function";
}
function K(t) {
  return Object.keys(t).length === 0;
}
function B(t, ...n) {
  if (t == null) return y;
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function dt(t) {
  let n;
  return B(t, (e) => (n = e))(), n;
}
function _t(t, n, e) {
  t.$$.on_destroy.push(B(n, e));
}
function ht(t, n, e, i) {
  if (t) {
    const r = L(t, n, e, i);
    return t[0](r);
  }
}
function L(t, n, e, i) {
  return t[1] && i ? J(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function mt(t, n, e, i) {
  if (t[2] && i) {
    const r = t[2](i(e));
    if (n.dirty === void 0) return r;
    if (typeof r == "object") {
      const a = [],
        c = Math.max(n.dirty.length, r.length);
      for (let u = 0; u < c; u += 1) a[u] = n.dirty[u] | r[u];
      return a;
    }
    return n.dirty | r;
  }
  return n.dirty;
}
function pt(t, n, e, i, r, a) {
  if (r) {
    const c = L(n, e, i, a);
    t.p(c, r);
  }
}
function yt(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let i = 0; i < e; i++) n[i] = -1;
    return n;
  }
  return -1;
}
function gt(t) {
  const n = {};
  for (const e in t) e[0] !== "$" && (n[e] = t[e]);
  return n;
}
function bt(t, n) {
  const e = {};
  n = new Set(n);
  for (const i in t) !n.has(i) && i[0] !== "$" && (e[i] = t[i]);
  return e;
}
function xt(t, n, e) {
  return t.set(e), n;
}
function $t(t) {
  return t && C(t.destroy) ? t.destroy : y;
}
const T = typeof window < "u";
let wt = T ? () => window.performance.now() : () => Date.now(),
  q = T ? (t) => requestAnimationFrame(t) : y;
const m = new Set();
function F(t) {
  m.forEach((n) => {
    n.c(t) || (m.delete(n), n.f());
  }),
    m.size !== 0 && q(F);
}
function vt(t) {
  let n;
  return (
    m.size === 0 && q(F),
    {
      promise: new Promise((e) => {
        m.add((n = { c: t, f: e }));
      }),
      abort() {
        m.delete(n);
      },
    }
  );
}
let E = !1;
function Q() {
  E = !0;
}
function R() {
  E = !1;
}
function U(t, n, e, i) {
  for (; t < n; ) {
    const r = t + ((n - t) >> 1);
    e(r) <= i ? (t = r + 1) : (n = r);
  }
  return t;
}
function V(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let n = t.childNodes;
  if (t.nodeName === "HEAD") {
    const s = [];
    for (let o = 0; o < n.length; o++) {
      const f = n[o];
      f.claim_order !== void 0 && s.push(f);
    }
    n = s;
  }
  const e = new Int32Array(n.length + 1),
    i = new Int32Array(n.length);
  e[0] = -1;
  let r = 0;
  for (let s = 0; s < n.length; s++) {
    const o = n[s].claim_order,
      f =
        (r > 0 && n[e[r]].claim_order <= o
          ? r + 1
          : U(1, r, (w) => n[e[w]].claim_order, o)) - 1;
    i[s] = e[f] + 1;
    const l = f + 1;
    (e[l] = s), (r = Math.max(l, r));
  }
  const a = [],
    c = [];
  let u = n.length - 1;
  for (let s = e[r] + 1; s != 0; s = i[s - 1]) {
    for (a.push(n[s - 1]); u >= s; u--) c.push(n[u]);
    u--;
  }
  for (; u >= 0; u--) c.push(n[u]);
  a.reverse(), c.sort((s, o) => s.claim_order - o.claim_order);
  for (let s = 0, o = 0; s < c.length; s++) {
    for (; o < a.length && c[s].claim_order >= a[o].claim_order; ) o++;
    const f = o < a.length ? a[o] : null;
    t.insertBefore(c[s], f);
  }
}
function X(t, n) {
  if (E) {
    for (
      V(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    n !== t.actual_end_child
      ? (n.claim_order !== void 0 || n.parentNode !== t) &&
        t.insertBefore(n, t.actual_end_child)
      : (t.actual_end_child = n.nextSibling);
  } else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function Et(t, n, e) {
  E && !e
    ? X(t, n)
    : (n.parentNode !== t || n.nextSibling != e) &&
      t.insertBefore(n, e || null);
}
function Y(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Nt(t, n) {
  for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function Z(t) {
  return document.createElement(t);
}
function j(t) {
  return document.createTextNode(t);
}
function St() {
  return j(" ");
}
function kt() {
  return j("");
}
function At(t, n, e, i) {
  return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function Ct(t, n, e) {
  e == null
    ? t.removeAttribute(n)
    : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function tt(t) {
  return Array.from(t.childNodes);
}
function nt(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function H(t, n, e, i, r = !1) {
  nt(t);
  const a = (() => {
    for (let c = t.claim_info.last_index; c < t.length; c++) {
      const u = t[c];
      if (n(u)) {
        const s = e(u);
        return (
          s === void 0 ? t.splice(c, 1) : (t[c] = s),
          r || (t.claim_info.last_index = c),
          u
        );
      }
    }
    for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
      const u = t[c];
      if (n(u)) {
        const s = e(u);
        return (
          s === void 0 ? t.splice(c, 1) : (t[c] = s),
          r
            ? s === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = c),
          u
        );
      }
    }
    return i();
  })();
  return (
    (a.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    a
  );
}
function et(t, n, e, i) {
  return H(
    t,
    (r) => r.nodeName === n,
    (r) => {
      const a = [];
      for (let c = 0; c < r.attributes.length; c++) {
        const u = r.attributes[c];
        e[u.name] || a.push(u.name);
      }
      a.forEach((c) => r.removeAttribute(c));
    },
    () => i(n)
  );
}
function jt(t, n, e) {
  return et(t, n, e, Z);
}
function it(t, n) {
  return H(
    t,
    (e) => e.nodeType === 3,
    (e) => {
      const i = "" + n;
      if (e.data.startsWith(i)) {
        if (e.data.length !== i.length) return e.splitText(i.length);
      } else e.data = i;
    },
    () => j(n),
    !0
  );
}
function Mt(t) {
  return it(t, " ");
}
function Pt(t, n) {
  (n = "" + n), t.data !== n && (t.data = n);
}
function Dt(t, n, e, i) {
  e === null
    ? t.style.removeProperty(n)
    : t.style.setProperty(n, e, i ? "important" : "");
}
function rt(t, n, { bubbles: e = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, e, i, n), r;
}
function Ot(t, n) {
  return new t(n);
}
let x;
function b(t) {
  x = t;
}
function g() {
  if (!x) throw new Error("Function called outside component initialization");
  return x;
}
function zt(t) {
  g().$$.on_mount.push(t);
}
function Bt(t) {
  g().$$.after_update.push(t);
}
function Lt(t) {
  g().$$.on_destroy.push(t);
}
function Tt() {
  const t = g();
  return (n, e, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[n];
    if (r) {
      const a = rt(n, e, { cancelable: i });
      return (
        r.slice().forEach((c) => {
          c.call(t, a);
        }),
        !a.defaultPrevented
      );
    }
    return !0;
  };
}
function qt(t, n) {
  return g().$$.context.set(t, n), n;
}
function Ft(t) {
  return g().$$.context.get(t);
}
function Ht(t, n) {
  const e = t.$$.callbacks[n.type];
  e && e.slice().forEach((i) => i.call(this, n));
}
const h = [],
  O = [];
let p = [];
const S = [],
  I = Promise.resolve();
let k = !1;
function W() {
  k || ((k = !0), I.then(G));
}
function It() {
  return W(), I;
}
function A(t) {
  p.push(t);
}
function Wt(t) {
  S.push(t);
}
const N = new Set();
let _ = 0;
function G() {
  if (_ !== 0) return;
  const t = x;
  do {
    try {
      for (; _ < h.length; ) {
        const n = h[_];
        _++, b(n), ct(n.$$);
      }
    } catch (n) {
      throw ((h.length = 0), (_ = 0), n);
    }
    for (b(null), h.length = 0, _ = 0; O.length; ) O.pop()();
    for (let n = 0; n < p.length; n += 1) {
      const e = p[n];
      N.has(e) || (N.add(e), e());
    }
    p.length = 0;
  } while (h.length);
  for (; S.length; ) S.pop()();
  (k = !1), N.clear(), b(t);
}
function ct(t) {
  if (t.fragment !== null) {
    t.update(), $(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(A);
  }
}
function st(t) {
  const n = [],
    e = [];
  p.forEach((i) => (t.indexOf(i) === -1 ? n.push(i) : e.push(i))),
    e.forEach((i) => i()),
    (p = n);
}
const v = new Set();
let d;
function Gt() {
  d = { r: 0, c: [], p: d };
}
function Jt() {
  d.r || $(d.c), (d = d.p);
}
function ot(t, n) {
  t && t.i && (v.delete(t), t.i(n));
}
function Kt(t, n, e, i) {
  if (t && t.o) {
    if (v.has(t)) return;
    v.add(t),
      d.c.push(() => {
        v.delete(t), i && (e && t.d(1), i());
      }),
      t.o(n);
  } else i && i();
}
function Qt(t, n, e) {
  const i = t.$$.props[n];
  i !== void 0 && ((t.$$.bound[i] = e), e(t.$$.ctx[i]));
}
function Rt(t) {
  t && t.c();
}
function Ut(t, n) {
  t && t.l(n);
}
function ut(t, n, e, i) {
  const { fragment: r, after_update: a } = t.$$;
  r && r.m(n, e),
    i ||
      A(() => {
        const c = t.$$.on_mount.map(z).filter(C);
        t.$$.on_destroy ? t.$$.on_destroy.push(...c) : $(c),
          (t.$$.on_mount = []);
      }),
    a.forEach(A);
}
function at(t, n) {
  const e = t.$$;
  e.fragment !== null &&
    (st(e.after_update),
    $(e.on_destroy),
    e.fragment && e.fragment.d(n),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function lt(t, n) {
  t.$$.dirty[0] === -1 && (h.push(t), W(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Vt(t, n, e, i, r, a, c, u = [-1]) {
  const s = x;
  b(t);
  const o = (t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: y,
    not_equal: r,
    bound: D(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (s ? s.$$.context : [])),
    callbacks: D(),
    dirty: u,
    skip_bound: !1,
    root: n.target || s.$$.root,
  });
  c && c(o.root);
  let f = !1;
  if (
    ((o.ctx = e
      ? e(t, n.props || {}, (l, w, ...M) => {
          const P = M.length ? M[0] : w;
          return (
            o.ctx &&
              r(o.ctx[l], (o.ctx[l] = P)) &&
              (!o.skip_bound && o.bound[l] && o.bound[l](P), f && lt(t, l)),
            w
          );
        })
      : []),
    o.update(),
    (f = !0),
    $(o.before_update),
    (o.fragment = i ? i(o.ctx) : !1),
    n.target)
  ) {
    if (n.hydrate) {
      Q();
      const l = tt(n.target);
      o.fragment && o.fragment.l(l), l.forEach(Y);
    } else o.fragment && o.fragment.c();
    n.intro && ot(t.$$.fragment),
      ut(t, n.target, n.anchor, n.customElement),
      R(),
      G();
  }
  b(s);
}
class Xt {
  $destroy() {
    at(this, 1), (this.$destroy = y);
  }
  $on(n, e) {
    if (!C(e)) return y;
    const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return (
      i.push(e),
      () => {
        const r = i.indexOf(e);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(n) {
    this.$$set &&
      !K(n) &&
      ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
  }
}
export {
  wt as $,
  ut as A,
  at as B,
  ht as C,
  pt as D,
  yt as E,
  mt as F,
  X as G,
  y as H,
  _t as I,
  dt as J,
  Lt as K,
  qt as L,
  Ft as M,
  $t as N,
  At as O,
  $ as P,
  xt as Q,
  Tt as R,
  Xt as S,
  Qt as T,
  Wt as U,
  Ht as V,
  g as W,
  bt as X,
  J as Y,
  gt as Z,
  Nt as _,
  St as a,
  vt as a0,
  B as a1,
  C as a2,
  Et as b,
  Mt as c,
  Kt as d,
  kt as e,
  Jt as f,
  ot as g,
  Y as h,
  Vt as i,
  Bt as j,
  Z as k,
  jt as l,
  tt as m,
  Ct as n,
  zt as o,
  Dt as p,
  j as q,
  it as r,
  ft as s,
  It as t,
  Pt as u,
  Gt as v,
  O as w,
  Ot as x,
  Rt as y,
  Ut as z,
};
