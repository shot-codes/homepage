import {
  J as Fa,
  K as nt,
  L as an,
  t as bs,
  M as mn,
  S as pt,
  i as gt,
  s as ut,
  C as qn,
  D as Yn,
  E as Kn,
  F as Jn,
  g as ce,
  d as Ae,
  I as ft,
  y as Re,
  z as Le,
  A as Qe,
  B as Pe,
  k as cr,
  l as lr,
  m as ur,
  h as Fe,
  n as hr,
  b as We,
  N as zu,
  O as ti,
  v as cn,
  f as ln,
  P as Hu,
  o as yl,
  Q as vr,
  w as ka,
  R as ji,
  T as vl,
  a as st,
  c as rt,
  U as wl,
  V as rn,
  W as Vu,
  e as Nt,
  X as co,
  Y as lo,
  Z as Wu,
  _ as Sl,
  H as vs,
  $ as uo,
  a0 as ju,
  q as qu,
  r as Yu,
  G as Ku,
} from "../chunks/index.7ab02cb4.js";
import { d as Ju, w as xt, r as Xu } from "../chunks/index.debdc600.js";
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Na = "149",
  mi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  bi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Zu = 0,
  ho = 1,
  $u = 2,
  Ml = 1,
  Bl = 2,
  hs = 3,
  Pn = 0,
  jt = 1,
  Rn = 2,
  Vn = 0,
  Pi = 1,
  fo = 2,
  Ao = 3,
  po = 4,
  eh = 5,
  Li = 100,
  th = 101,
  nh = 102,
  go = 103,
  mo = 104,
  ih = 200,
  sh = 201,
  rh = 202,
  ah = 203,
  Tl = 204,
  Dl = 205,
  oh = 206,
  ch = 207,
  lh = 208,
  uh = 209,
  hh = 210,
  fh = 0,
  dh = 1,
  Ah = 2,
  Aa = 3,
  ph = 4,
  gh = 5,
  mh = 6,
  bh = 7,
  Rl = 0,
  _h = 1,
  Eh = 2,
  pn = 0,
  xh = 1,
  Ch = 2,
  Ih = 3,
  Ll = 4,
  yh = 5,
  Ql = 300,
  Ui = 301,
  Gi = 302,
  pa = 303,
  ga = 304,
  fr = 306,
  Oi = 1e3,
  Ht = 1001,
  ar = 1002,
  Et = 1003,
  ma = 1004,
  $s = 1005,
  Bt = 1006,
  Pl = 1007,
  Wn = 1008,
  Ft = 1009,
  vh = 1010,
  wh = 1011,
  Fl = 1012,
  Sh = 1013,
  ci = 1014,
  Zt = 1015,
  Qn = 1016,
  Mh = 1017,
  Bh = 1018,
  Fi = 1020,
  Th = 1021,
  vt = 1023,
  Dh = 1024,
  Rh = 1025,
  ui = 1026,
  zi = 1027,
  fs = 1028,
  Lh = 1029,
  ds = 1030,
  Qh = 1031,
  Ph = 1033,
  er = 33776,
  wr = 33777,
  Sr = 33778,
  tr = 33779,
  ba = 35840,
  bo = 35841,
  _a = 35842,
  _o = 35843,
  kl = 36196,
  Ea = 37492,
  xa = 37496,
  Ca = 37808,
  Eo = 37809,
  xo = 37810,
  Co = 37811,
  Io = 37812,
  yo = 37813,
  vo = 37814,
  wo = 37815,
  So = 37816,
  Mo = 37817,
  Bo = 37818,
  To = 37819,
  Do = 37820,
  Ro = 37821,
  nr = 36492,
  Fh = 36283,
  Lo = 36284,
  Qo = 36285,
  Po = 36286,
  _s = 2300,
  Hi = 2301,
  Mr = 2302,
  Fo = 2400,
  ko = 2401,
  No = 2402,
  kh = 2500,
  Nh = 0,
  Nl = 1,
  Ia = 2,
  bn = 3e3,
  Ne = 3001,
  Uh = 3200,
  Gh = 3201,
  Ul = 0,
  Oh = 1,
  fn = "srgb",
  Es = "srgb-linear",
  Br = 7680,
  zh = 519,
  ya = 35044,
  Uo = "300 es",
  va = 1035;
class Ai {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const Mt = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Go = 1234567;
const ps = Math.PI / 180,
  xs = 180 / Math.PI;
function un() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Mt[r & 255] +
    Mt[(r >> 8) & 255] +
    Mt[(r >> 16) & 255] +
    Mt[(r >> 24) & 255] +
    "-" +
    Mt[e & 255] +
    Mt[(e >> 8) & 255] +
    "-" +
    Mt[((e >> 16) & 15) | 64] +
    Mt[(e >> 24) & 255] +
    "-" +
    Mt[(t & 63) | 128] +
    Mt[(t >> 8) & 255] +
    "-" +
    Mt[(t >> 16) & 255] +
    Mt[(t >> 24) & 255] +
    Mt[n & 255] +
    Mt[(n >> 8) & 255] +
    Mt[(n >> 16) & 255] +
    Mt[(n >> 24) & 255]
  ).toLowerCase();
}
function Tt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Ua(r, e) {
  return ((r % e) + e) % e;
}
function Hh(r, e, t, n, i) {
  return n + ((r - e) * (i - n)) / (t - e);
}
function Vh(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function gs(r, e, t) {
  return (1 - t) * r + t * e;
}
function Wh(r, e, t, n) {
  return gs(r, e, 1 - Math.exp(-t * n));
}
function jh(r, e = 1) {
  return e - Math.abs(Ua(r, e * 2) - e);
}
function qh(r, e, t) {
  return r <= e
    ? 0
    : r >= t
    ? 1
    : ((r = (r - e) / (t - e)), r * r * (3 - 2 * r));
}
function Yh(r, e, t) {
  return r <= e
    ? 0
    : r >= t
    ? 1
    : ((r = (r - e) / (t - e)), r * r * r * (r * (r * 6 - 15) + 10));
}
function Kh(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function Jh(r, e) {
  return r + Math.random() * (e - r);
}
function Xh(r) {
  return r * (0.5 - Math.random());
}
function Zh(r) {
  r !== void 0 && (Go = r);
  let e = (Go += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function $h(r) {
  return r * ps;
}
function ef(r) {
  return r * xs;
}
function wa(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}
function Gl(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function or(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function tf(r, e, t, n, i) {
  const s = Math.cos,
    a = Math.sin,
    o = s(t / 2),
    c = a(t / 2),
    l = s((e + n) / 2),
    f = a((e + n) / 2),
    h = s((e - n) / 2),
    u = a((e - n) / 2),
    p = s((n - e) / 2),
    m = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * f, c * h, c * u, o * l);
      break;
    case "YZY":
      r.set(c * u, o * f, c * h, o * l);
      break;
    case "ZXZ":
      r.set(c * h, c * u, o * f, o * l);
      break;
    case "XZX":
      r.set(o * f, c * m, c * p, o * l);
      break;
    case "YXY":
      r.set(c * p, o * f, c * m, o * l);
      break;
    case "ZYZ":
      r.set(c * m, c * p, o * f, o * l);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
function Ln(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Xe(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var nf = Object.freeze({
  __proto__: null,
  DEG2RAD: ps,
  RAD2DEG: xs,
  ceilPowerOfTwo: Gl,
  clamp: Tt,
  damp: Wh,
  degToRad: $h,
  denormalize: Ln,
  euclideanModulo: Ua,
  floorPowerOfTwo: or,
  generateUUID: un,
  inverseLerp: Vh,
  isPowerOfTwo: wa,
  lerp: gs,
  mapLinear: Hh,
  normalize: Xe,
  pingpong: jh,
  radToDeg: ef,
  randFloat: Jh,
  randFloatSpread: Xh,
  randInt: Kh,
  seededRandom: Zh,
  setQuaternionFromProperEuler: tf,
  smootherstep: Yh,
  smoothstep: qh,
});
class ye {
  constructor(e = 0, t = 0) {
    (ye.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (this.x = s * n - a * i + e.x), (this.y = s * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Vt {
  constructor() {
    (Vt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, a, o, c, l) {
    const f = this.elements;
    return (
      (f[0] = e),
      (f[1] = i),
      (f[2] = o),
      (f[3] = t),
      (f[4] = s),
      (f[5] = c),
      (f[6] = n),
      (f[7] = a),
      (f[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      c = n[6],
      l = n[1],
      f = n[4],
      h = n[7],
      u = n[2],
      p = n[5],
      m = n[8],
      d = i[0],
      A = i[3],
      g = i[6],
      _ = i[1],
      b = i[4],
      E = i[7],
      C = i[2],
      v = i[5],
      T = i[8];
    return (
      (s[0] = a * d + o * _ + c * C),
      (s[3] = a * A + o * b + c * v),
      (s[6] = a * g + o * E + c * T),
      (s[1] = l * d + f * _ + h * C),
      (s[4] = l * A + f * b + h * v),
      (s[7] = l * g + f * E + h * T),
      (s[2] = u * d + p * _ + m * C),
      (s[5] = u * A + p * b + m * v),
      (s[8] = u * g + p * E + m * T),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      f = e[8];
    return (
      t * a * f - t * o * l - n * s * f + n * o * c + i * s * l - i * a * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      f = e[8],
      h = f * a - o * l,
      u = o * c - f * s,
      p = l * s - a * c,
      m = t * h + n * u + i * p;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const d = 1 / m;
    return (
      (e[0] = h * d),
      (e[1] = (i * l - f * n) * d),
      (e[2] = (o * n - i * a) * d),
      (e[3] = u * d),
      (e[4] = (f * t - i * c) * d),
      (e[5] = (i * s - o * t) * d),
      (e[6] = p * d),
      (e[7] = (n * c - l * t) * d),
      (e[8] = (a * t - n * s) * d),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const c = Math.cos(s),
      l = Math.sin(s);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * a + l * o) + a + e,
        -i * l,
        i * c,
        -i * (-l * a + c * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(Tr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Tr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Tr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Tr = new Vt();
function Ol(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function Cs(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function hi(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ir(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const Dr = { [fn]: { [Es]: hi }, [Es]: { [fn]: ir } },
  Rt = {
    legacyMode: !0,
    get workingColorSpace() {
      return Es;
    },
    set workingColorSpace(r) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (r, e, t) {
      if (this.legacyMode || e === t || !e || !t) return r;
      if (Dr[e] && Dr[e][t] !== void 0) {
        const n = Dr[e][t];
        return (r.r = n(r.r)), (r.g = n(r.g)), (r.b = n(r.b)), r;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (r, e) {
      return this.convert(r, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (r, e) {
      return this.convert(r, e, this.workingColorSpace);
    },
  },
  zl = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  ht = { r: 0, g: 0, b: 0 },
  tn = { h: 0, s: 0, l: 0 },
  Ts = { h: 0, s: 0, l: 0 };
function Rr(r, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? r + (e - r) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? r + (e - r) * 6 * (2 / 3 - t)
      : r
  );
}
function Ds(r, e) {
  return (e.r = r.r), (e.g = r.g), (e.b = r.b), e;
}
class Se {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = fn) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Rt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = Rt.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Rt.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = Rt.workingColorSpace) {
    if (((e = Ua(e, 1)), (t = Tt(t, 0, 1)), (n = Tt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - s;
      (this.r = Rr(a, s, e + 1 / 3)),
        (this.g = Rr(a, s, e)),
        (this.b = Rr(a, s, e - 1 / 3));
    }
    return Rt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = fn) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = i[1],
        o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(s[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(s[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(s[3], 10)) / 255),
              Rt.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(s[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(s[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(s[3], 10)) / 100),
              Rt.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          ) {
            const c = parseFloat(s[1]) / 360,
              l = parseFloat(s[2]) / 100,
              f = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(c, l, f, t);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = i[1],
        a = s.length;
      if (a === 3)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255),
          (this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255),
          (this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255),
          Rt.toWorkingColorSpace(this, t),
          this
        );
      if (a === 6)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255),
          (this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255),
          (this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255),
          Rt.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = fn) {
    const n = zl[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = hi(e.r)), (this.g = hi(e.g)), (this.b = hi(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = ir(e.r)), (this.g = ir(e.g)), (this.b = ir(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = fn) {
    return (
      Rt.fromWorkingColorSpace(Ds(this, ht), e),
      (Tt(ht.r * 255, 0, 255) << 16) ^
        (Tt(ht.g * 255, 0, 255) << 8) ^
        (Tt(ht.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = fn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Rt.workingColorSpace) {
    Rt.fromWorkingColorSpace(Ds(this, ht), t);
    const n = ht.r,
      i = ht.g,
      s = ht.b,
      a = Math.max(n, i, s),
      o = Math.min(n, i, s);
    let c, l;
    const f = (o + a) / 2;
    if (o === a) (c = 0), (l = 0);
    else {
      const h = a - o;
      switch (((l = f <= 0.5 ? h / (a + o) : h / (2 - a - o)), a)) {
        case n:
          c = (i - s) / h + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / h + 2;
          break;
        case s:
          c = (n - i) / h + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = f), e;
  }
  getRGB(e, t = Rt.workingColorSpace) {
    return (
      Rt.fromWorkingColorSpace(Ds(this, ht), t),
      (e.r = ht.r),
      (e.g = ht.g),
      (e.b = ht.b),
      e
    );
  }
  getStyle(e = fn) {
    return (
      Rt.fromWorkingColorSpace(Ds(this, ht), e),
      e !== fn
        ? `color(${e} ${ht.r} ${ht.g} ${ht.b})`
        : `rgb(${(ht.r * 255) | 0},${(ht.g * 255) | 0},${(ht.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(tn),
      (tn.h += e),
      (tn.s += t),
      (tn.l += n),
      this.setHSL(tn.h, tn.s, tn.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(tn), e.getHSL(Ts);
    const n = gs(tn.h, Ts.h, t),
      i = gs(tn.s, Ts.s, t),
      s = gs(tn.l, Ts.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Se.NAMES = zl;
let _i;
class Hl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      _i === void 0 && (_i = Cs("canvas")),
        (_i.width = e.width),
        (_i.height = e.height);
      const n = _i.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = _i);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Cs("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        s = i.data;
      for (let a = 0; a < s.length; a++) s[a] = hi(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(hi(t[n] / 255) * 255))
          : (t[n] = hi(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class Vl {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = un()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(Lr(i[a].image)) : s.push(Lr(i[a]));
      } else s = Lr(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Lr(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? Hl.getDataURL(r)
    : r.data
    ? {
        data: Array.from(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let sf = 0;
class Ct extends Ai {
  constructor(
    e = Ct.DEFAULT_IMAGE,
    t = Ct.DEFAULT_MAPPING,
    n = Ht,
    i = Ht,
    s = Bt,
    a = Wn,
    o = vt,
    c = Ft,
    l = Ct.DEFAULT_ANISOTROPY,
    f = bn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: sf++ }),
      (this.uuid = un()),
      (this.name = ""),
      (this.source = new Vl(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new ye(0, 0)),
      (this.repeat = new ye(1, 1)),
      (this.center = new ye(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Vt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = f),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Ql) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Oi:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ht:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ar:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Oi:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ht:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ar:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
Ct.DEFAULT_IMAGE = null;
Ct.DEFAULT_MAPPING = Ql;
Ct.DEFAULT_ANISOTROPY = 1;
class Ze {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (Ze.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements,
      l = c[0],
      f = c[4],
      h = c[8],
      u = c[1],
      p = c[5],
      m = c[9],
      d = c[2],
      A = c[6],
      g = c[10];
    if (
      Math.abs(f - u) < 0.01 &&
      Math.abs(h - d) < 0.01 &&
      Math.abs(m - A) < 0.01
    ) {
      if (
        Math.abs(f + u) < 0.1 &&
        Math.abs(h + d) < 0.1 &&
        Math.abs(m + A) < 0.1 &&
        Math.abs(l + p + g - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2,
        E = (p + 1) / 2,
        C = (g + 1) / 2,
        v = (f + u) / 4,
        T = (h + d) / 4,
        x = (m + A) / 4;
      return (
        b > E && b > C
          ? b < 0.01
            ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(b)), (i = v / n), (s = T / n))
          : E > C
          ? E < 0.01
            ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
            : ((i = Math.sqrt(E)), (n = v / i), (s = x / i))
          : C < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
          : ((s = Math.sqrt(C)), (n = T / s), (i = x / s)),
        this.set(n, i, s, t),
        this
      );
    }
    let _ = Math.sqrt(
      (A - m) * (A - m) + (h - d) * (h - d) + (u - f) * (u - f)
    );
    return (
      Math.abs(_) < 0.001 && (_ = 1),
      (this.x = (A - m) / _),
      (this.y = (h - d) / _),
      (this.z = (u - f) / _),
      (this.w = Math.acos((l + p + g - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class jn extends Ai {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Ze(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Ze(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new Ct(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Bt),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Vl(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Wl extends Ct {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Et),
      (this.minFilter = Et),
      (this.wrapR = Ht),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class jl extends Ct {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Et),
      (this.minFilter = Et),
      (this.wrapR = Ht),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class _n {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let c = n[i + 0],
      l = n[i + 1],
      f = n[i + 2],
      h = n[i + 3];
    const u = s[a + 0],
      p = s[a + 1],
      m = s[a + 2],
      d = s[a + 3];
    if (o === 0) {
      (e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = f), (e[t + 3] = h);
      return;
    }
    if (o === 1) {
      (e[t + 0] = u), (e[t + 1] = p), (e[t + 2] = m), (e[t + 3] = d);
      return;
    }
    if (h !== d || c !== u || l !== p || f !== m) {
      let A = 1 - o;
      const g = c * u + l * p + f * m + h * d,
        _ = g >= 0 ? 1 : -1,
        b = 1 - g * g;
      if (b > Number.EPSILON) {
        const C = Math.sqrt(b),
          v = Math.atan2(C, g * _);
        (A = Math.sin(A * v) / C), (o = Math.sin(o * v) / C);
      }
      const E = o * _;
      if (
        ((c = c * A + u * E),
        (l = l * A + p * E),
        (f = f * A + m * E),
        (h = h * A + d * E),
        A === 1 - o)
      ) {
        const C = 1 / Math.sqrt(c * c + l * l + f * f + h * h);
        (c *= C), (l *= C), (f *= C), (h *= C);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = f), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i],
      c = n[i + 1],
      l = n[i + 2],
      f = n[i + 3],
      h = s[a],
      u = s[a + 1],
      p = s[a + 2],
      m = s[a + 3];
    return (
      (e[t] = o * m + f * h + c * p - l * u),
      (e[t + 1] = c * m + f * u + l * h - o * p),
      (e[t + 2] = l * m + f * p + o * u - c * h),
      (e[t + 3] = f * m - o * h - c * u - l * p),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      c = Math.sin,
      l = o(n / 2),
      f = o(i / 2),
      h = o(s / 2),
      u = c(n / 2),
      p = c(i / 2),
      m = c(s / 2);
    switch (a) {
      case "XYZ":
        (this._x = u * f * h + l * p * m),
          (this._y = l * p * h - u * f * m),
          (this._z = l * f * m + u * p * h),
          (this._w = l * f * h - u * p * m);
        break;
      case "YXZ":
        (this._x = u * f * h + l * p * m),
          (this._y = l * p * h - u * f * m),
          (this._z = l * f * m - u * p * h),
          (this._w = l * f * h + u * p * m);
        break;
      case "ZXY":
        (this._x = u * f * h - l * p * m),
          (this._y = l * p * h + u * f * m),
          (this._z = l * f * m + u * p * h),
          (this._w = l * f * h - u * p * m);
        break;
      case "ZYX":
        (this._x = u * f * h - l * p * m),
          (this._y = l * p * h + u * f * m),
          (this._z = l * f * m - u * p * h),
          (this._w = l * f * h + u * p * m);
        break;
      case "YZX":
        (this._x = u * f * h + l * p * m),
          (this._y = l * p * h + u * f * m),
          (this._z = l * f * m - u * p * h),
          (this._w = l * f * h - u * p * m);
        break;
      case "XZY":
        (this._x = u * f * h - l * p * m),
          (this._y = l * p * h - u * f * m),
          (this._z = l * f * m + u * p * h),
          (this._w = l * f * h + u * p * m);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      c = t[9],
      l = t[2],
      f = t[6],
      h = t[10],
      u = n + o + h;
    if (u > 0) {
      const p = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / p),
        (this._x = (f - c) * p),
        (this._y = (s - l) * p),
        (this._z = (a - i) * p);
    } else if (n > o && n > h) {
      const p = 2 * Math.sqrt(1 + n - o - h);
      (this._w = (f - c) / p),
        (this._x = 0.25 * p),
        (this._y = (i + a) / p),
        (this._z = (s + l) / p);
    } else if (o > h) {
      const p = 2 * Math.sqrt(1 + o - n - h);
      (this._w = (s - l) / p),
        (this._x = (i + a) / p),
        (this._y = 0.25 * p),
        (this._z = (c + f) / p);
    } else {
      const p = 2 * Math.sqrt(1 + h - n - o);
      (this._w = (a - i) / p),
        (this._x = (s + l) / p),
        (this._y = (c + f) / p),
        (this._z = 0.25 * p);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Tt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      c = t._y,
      l = t._z,
      f = t._w;
    return (
      (this._x = n * f + a * o + i * l - s * c),
      (this._y = i * f + a * c + s * o - n * l),
      (this._z = s * f + a * l + n * c - i * o),
      (this._w = a * f - n * o - i * c - s * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = s), this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return (
        (this._w = p * a + t * this._w),
        (this._x = p * n + t * this._x),
        (this._y = p * i + t * this._y),
        (this._z = p * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const l = Math.sqrt(c),
      f = Math.atan2(l, o),
      h = Math.sin((1 - t) * f) / l,
      u = Math.sin(t * f) / l;
    return (
      (this._w = a * h + this._w * u),
      (this._x = n * h + this._x * u),
      (this._y = i * h + this._y * u),
      (this._z = s * h + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    (R.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Oo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Oo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * i),
      (this.y = s[1] * t + s[4] * n + s[7] * i),
      (this.z = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      c = e.w,
      l = c * t + a * i - o * n,
      f = c * n + o * t - s * i,
      h = c * i + s * n - a * t,
      u = -s * t - a * n - o * i;
    return (
      (this.x = l * c + u * -s + f * -o - h * -a),
      (this.y = f * c + u * -a + h * -s - l * -o),
      (this.z = h * c + u * -o + l * -a - f * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * i),
      (this.y = s[1] * t + s[5] * n + s[9] * i),
      (this.z = s[2] * t + s[6] * n + s[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = i * c - s * o),
      (this.y = s * a - n * c),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Qr.copy(this).projectOnVector(e), this.sub(Qr);
  }
  reflect(e) {
    return this.sub(Qr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Tt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Qr = new R(),
  Oo = new _n();
class qi {
  constructor(
    e = new R(1 / 0, 1 / 0, 1 / 0),
    t = new R(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const f = e[c],
        h = e[c + 1],
        u = e[c + 2];
      f < t && (t = f),
        h < n && (n = h),
        u < i && (i = u),
        f > s && (s = f),
        h > a && (a = h),
        u > o && (o = u);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const f = e.getX(c),
        h = e.getY(c),
        u = e.getZ(c);
      f < t && (t = f),
        h < n && (n = h),
        u < i && (i = u),
        f > s && (s = f),
        h > a && (a = h),
        u > o && (o = u);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = ni.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let a = 0, o = s.count; a < o; a++)
          ni.fromBufferAttribute(s, a).applyMatrix4(e.matrixWorld),
            this.expandByPoint(ni);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          Pr.copy(n.boundingBox),
          Pr.applyMatrix4(e.matrixWorld),
          this.union(Pr);
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++) this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, ni),
      ni.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter($i),
      Rs.subVectors(this.max, $i),
      Ei.subVectors(e.a, $i),
      xi.subVectors(e.b, $i),
      Ci.subVectors(e.c, $i),
      Fn.subVectors(xi, Ei),
      kn.subVectors(Ci, xi),
      ii.subVectors(Ei, Ci);
    let t = [
      0,
      -Fn.z,
      Fn.y,
      0,
      -kn.z,
      kn.y,
      0,
      -ii.z,
      ii.y,
      Fn.z,
      0,
      -Fn.x,
      kn.z,
      0,
      -kn.x,
      ii.z,
      0,
      -ii.x,
      -Fn.y,
      Fn.x,
      0,
      -kn.y,
      kn.x,
      0,
      -ii.y,
      ii.x,
      0,
    ];
    return !Fr(t, Ei, xi, Ci, Rs) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Fr(t, Ei, xi, Ci, Rs))
      ? !1
      : (Ls.crossVectors(Fn, kn),
        (t = [Ls.x, Ls.y, Ls.z]),
        Fr(t, Ei, xi, Ci, Rs));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return ni.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(ni).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (yn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        yn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        yn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        yn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        yn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        yn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        yn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        yn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(yn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const yn = [
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
  ],
  ni = new R(),
  Pr = new qi(),
  Ei = new R(),
  xi = new R(),
  Ci = new R(),
  Fn = new R(),
  kn = new R(),
  ii = new R(),
  $i = new R(),
  Rs = new R(),
  Ls = new R(),
  si = new R();
function Fr(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    si.fromArray(r, s);
    const o =
        i.x * Math.abs(si.x) + i.y * Math.abs(si.y) + i.z * Math.abs(si.z),
      c = e.dot(si),
      l = t.dot(si),
      f = n.dot(si);
    if (Math.max(-Math.max(c, l, f), Math.min(c, l, f)) > o) return !1;
  }
  return !0;
}
const rf = new qi(),
  es = new R(),
  kr = new R();
class Yi {
  constructor(e = new R(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : rf.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    es.subVectors(e, this.center);
    const t = es.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(es, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (kr.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(es.copy(e.center).add(kr)),
            this.expandByPoint(es.copy(e.center).sub(kr))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = new R(),
  Nr = new R(),
  Qs = new R(),
  Nn = new R(),
  Ur = new R(),
  Ps = new R(),
  Gr = new R();
class dr {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, vn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = vn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (vn.copy(this.direction).multiplyScalar(t).add(this.origin),
        vn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Nr.copy(e).add(t).multiplyScalar(0.5),
      Qs.copy(t).sub(e).normalize(),
      Nn.copy(this.origin).sub(Nr);
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Qs),
      o = Nn.dot(this.direction),
      c = -Nn.dot(Qs),
      l = Nn.lengthSq(),
      f = Math.abs(1 - a * a);
    let h, u, p, m;
    if (f > 0)
      if (((h = a * c - o), (u = a * o - c), (m = s * f), h >= 0))
        if (u >= -m)
          if (u <= m) {
            const d = 1 / f;
            (h *= d),
              (u *= d),
              (p = h * (h + a * u + 2 * o) + u * (a * h + u + 2 * c) + l);
          } else
            (u = s),
              (h = Math.max(0, -(a * u + o))),
              (p = -h * h + u * (u + 2 * c) + l);
        else
          (u = -s),
            (h = Math.max(0, -(a * u + o))),
            (p = -h * h + u * (u + 2 * c) + l);
      else
        u <= -m
          ? ((h = Math.max(0, -(-a * s + o))),
            (u = h > 0 ? -s : Math.min(Math.max(-s, -c), s)),
            (p = -h * h + u * (u + 2 * c) + l))
          : u <= m
          ? ((h = 0),
            (u = Math.min(Math.max(-s, -c), s)),
            (p = u * (u + 2 * c) + l))
          : ((h = Math.max(0, -(a * s + o))),
            (u = h > 0 ? s : Math.min(Math.max(-s, -c), s)),
            (p = -h * h + u * (u + 2 * c) + l));
    else
      (u = a > 0 ? -s : s),
        (h = Math.max(0, -(a * u + o))),
        (p = -h * h + u * (u + 2 * c) + l);
    return (
      n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
      i && i.copy(Qs).multiplyScalar(u).add(Nr),
      p
    );
  }
  intersectSphere(e, t) {
    vn.subVectors(e.center, this.origin);
    const n = vn.dot(this.direction),
      i = vn.dot(vn) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i),
      o = n - a,
      c = n + a;
    return o < 0 && c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, c;
    const l = 1 / this.direction.x,
      f = 1 / this.direction.y,
      h = 1 / this.direction.z,
      u = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - u.x) * l), (i = (e.max.x - u.x) * l))
        : ((n = (e.max.x - u.x) * l), (i = (e.min.x - u.x) * l)),
      f >= 0
        ? ((s = (e.min.y - u.y) * f), (a = (e.max.y - u.y) * f))
        : ((s = (e.max.y - u.y) * f), (a = (e.min.y - u.y) * f)),
      n > a ||
      s > i ||
      ((s > n || isNaN(n)) && (n = s),
      (a < i || isNaN(i)) && (i = a),
      h >= 0
        ? ((o = (e.min.z - u.z) * h), (c = (e.max.z - u.z) * h))
        : ((o = (e.max.z - u.z) * h), (c = (e.min.z - u.z) * h)),
      n > c || o > i) ||
      ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, vn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Ur.subVectors(t, e), Ps.subVectors(n, e), Gr.crossVectors(Ur, Ps);
    let a = this.direction.dot(Gr),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Nn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Ps.crossVectors(Nn, Ps));
    if (c < 0) return null;
    const l = o * this.direction.dot(Ur.cross(Nn));
    if (l < 0 || c + l > a) return null;
    const f = -o * Nn.dot(Gr);
    return f < 0 ? null : this.at(f / a, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Be {
  constructor() {
    (Be.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, a, o, c, l, f, h, u, p, m, d, A) {
    const g = this.elements;
    return (
      (g[0] = e),
      (g[4] = t),
      (g[8] = n),
      (g[12] = i),
      (g[1] = s),
      (g[5] = a),
      (g[9] = o),
      (g[13] = c),
      (g[2] = l),
      (g[6] = f),
      (g[10] = h),
      (g[14] = u),
      (g[3] = p),
      (g[7] = m),
      (g[11] = d),
      (g[15] = A),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Be().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Ii.setFromMatrixColumn(e, 0).length(),
      s = 1 / Ii.setFromMatrixColumn(e, 1).length(),
      a = 1 / Ii.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(i),
      l = Math.sin(i),
      f = Math.cos(s),
      h = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * f,
        p = a * h,
        m = o * f,
        d = o * h;
      (t[0] = c * f),
        (t[4] = -c * h),
        (t[8] = l),
        (t[1] = p + m * l),
        (t[5] = u - d * l),
        (t[9] = -o * c),
        (t[2] = d - u * l),
        (t[6] = m + p * l),
        (t[10] = a * c);
    } else if (e.order === "YXZ") {
      const u = c * f,
        p = c * h,
        m = l * f,
        d = l * h;
      (t[0] = u + d * o),
        (t[4] = m * o - p),
        (t[8] = a * l),
        (t[1] = a * h),
        (t[5] = a * f),
        (t[9] = -o),
        (t[2] = p * o - m),
        (t[6] = d + u * o),
        (t[10] = a * c);
    } else if (e.order === "ZXY") {
      const u = c * f,
        p = c * h,
        m = l * f,
        d = l * h;
      (t[0] = u - d * o),
        (t[4] = -a * h),
        (t[8] = m + p * o),
        (t[1] = p + m * o),
        (t[5] = a * f),
        (t[9] = d - u * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * c);
    } else if (e.order === "ZYX") {
      const u = a * f,
        p = a * h,
        m = o * f,
        d = o * h;
      (t[0] = c * f),
        (t[4] = m * l - p),
        (t[8] = u * l + d),
        (t[1] = c * h),
        (t[5] = d * l + u),
        (t[9] = p * l - m),
        (t[2] = -l),
        (t[6] = o * c),
        (t[10] = a * c);
    } else if (e.order === "YZX") {
      const u = a * c,
        p = a * l,
        m = o * c,
        d = o * l;
      (t[0] = c * f),
        (t[4] = d - u * h),
        (t[8] = m * h + p),
        (t[1] = h),
        (t[5] = a * f),
        (t[9] = -o * f),
        (t[2] = -l * f),
        (t[6] = p * h + m),
        (t[10] = u - d * h);
    } else if (e.order === "XZY") {
      const u = a * c,
        p = a * l,
        m = o * c,
        d = o * l;
      (t[0] = c * f),
        (t[4] = -h),
        (t[8] = l * f),
        (t[1] = u * h + d),
        (t[5] = a * f),
        (t[9] = p * h - m),
        (t[2] = m * h - p),
        (t[6] = o * f),
        (t[10] = d * h + u);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(af, e, of);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Ot.subVectors(e, t),
      Ot.lengthSq() === 0 && (Ot.z = 1),
      Ot.normalize(),
      Un.crossVectors(n, Ot),
      Un.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Ot.x += 1e-4) : (Ot.z += 1e-4),
        Ot.normalize(),
        Un.crossVectors(n, Ot)),
      Un.normalize(),
      Fs.crossVectors(Ot, Un),
      (i[0] = Un.x),
      (i[4] = Fs.x),
      (i[8] = Ot.x),
      (i[1] = Un.y),
      (i[5] = Fs.y),
      (i[9] = Ot.y),
      (i[2] = Un.z),
      (i[6] = Fs.z),
      (i[10] = Ot.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      f = n[1],
      h = n[5],
      u = n[9],
      p = n[13],
      m = n[2],
      d = n[6],
      A = n[10],
      g = n[14],
      _ = n[3],
      b = n[7],
      E = n[11],
      C = n[15],
      v = i[0],
      T = i[4],
      x = i[8],
      w = i[12],
      B = i[1],
      G = i[5],
      H = i[9],
      P = i[13],
      Q = i[2],
      z = i[6],
      Y = i[10],
      K = i[14],
      O = i[3],
      ee = i[7],
      Z = i[11],
      W = i[15];
    return (
      (s[0] = a * v + o * B + c * Q + l * O),
      (s[4] = a * T + o * G + c * z + l * ee),
      (s[8] = a * x + o * H + c * Y + l * Z),
      (s[12] = a * w + o * P + c * K + l * W),
      (s[1] = f * v + h * B + u * Q + p * O),
      (s[5] = f * T + h * G + u * z + p * ee),
      (s[9] = f * x + h * H + u * Y + p * Z),
      (s[13] = f * w + h * P + u * K + p * W),
      (s[2] = m * v + d * B + A * Q + g * O),
      (s[6] = m * T + d * G + A * z + g * ee),
      (s[10] = m * x + d * H + A * Y + g * Z),
      (s[14] = m * w + d * P + A * K + g * W),
      (s[3] = _ * v + b * B + E * Q + C * O),
      (s[7] = _ * T + b * G + E * z + C * ee),
      (s[11] = _ * x + b * H + E * Y + C * Z),
      (s[15] = _ * w + b * P + E * K + C * W),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      c = e[9],
      l = e[13],
      f = e[2],
      h = e[6],
      u = e[10],
      p = e[14],
      m = e[3],
      d = e[7],
      A = e[11],
      g = e[15];
    return (
      m *
        (+s * c * h -
          i * l * h -
          s * o * u +
          n * l * u +
          i * o * p -
          n * c * p) +
      d *
        (+t * c * p -
          t * l * u +
          s * a * u -
          i * a * p +
          i * l * f -
          s * c * f) +
      A *
        (+t * l * h -
          t * o * p -
          s * a * h +
          n * a * p +
          s * o * f -
          n * l * f) +
      g *
        (-i * o * f - t * c * h + t * o * u + i * a * h - n * a * u + n * c * f)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      f = e[8],
      h = e[9],
      u = e[10],
      p = e[11],
      m = e[12],
      d = e[13],
      A = e[14],
      g = e[15],
      _ = h * A * l - d * u * l + d * c * p - o * A * p - h * c * g + o * u * g,
      b = m * u * l - f * A * l - m * c * p + a * A * p + f * c * g - a * u * g,
      E = f * d * l - m * h * l + m * o * p - a * d * p - f * o * g + a * h * g,
      C = m * h * c - f * d * c - m * o * u + a * d * u + f * o * A - a * h * A,
      v = t * _ + n * b + i * E + s * C;
    if (v === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const T = 1 / v;
    return (
      (e[0] = _ * T),
      (e[1] =
        (d * u * s -
          h * A * s -
          d * i * p +
          n * A * p +
          h * i * g -
          n * u * g) *
        T),
      (e[2] =
        (o * A * s -
          d * c * s +
          d * i * l -
          n * A * l -
          o * i * g +
          n * c * g) *
        T),
      (e[3] =
        (h * c * s -
          o * u * s -
          h * i * l +
          n * u * l +
          o * i * p -
          n * c * p) *
        T),
      (e[4] = b * T),
      (e[5] =
        (f * A * s -
          m * u * s +
          m * i * p -
          t * A * p -
          f * i * g +
          t * u * g) *
        T),
      (e[6] =
        (m * c * s -
          a * A * s -
          m * i * l +
          t * A * l +
          a * i * g -
          t * c * g) *
        T),
      (e[7] =
        (a * u * s -
          f * c * s +
          f * i * l -
          t * u * l -
          a * i * p +
          t * c * p) *
        T),
      (e[8] = E * T),
      (e[9] =
        (m * h * s -
          f * d * s -
          m * n * p +
          t * d * p +
          f * n * g -
          t * h * g) *
        T),
      (e[10] =
        (a * d * s -
          m * o * s +
          m * n * l -
          t * d * l -
          a * n * g +
          t * o * g) *
        T),
      (e[11] =
        (f * o * s -
          a * h * s -
          f * n * l +
          t * h * l +
          a * n * p -
          t * o * p) *
        T),
      (e[12] = C * T),
      (e[13] =
        (f * d * i -
          m * h * i +
          m * n * u -
          t * d * u -
          f * n * A +
          t * h * A) *
        T),
      (e[14] =
        (m * o * i -
          a * d * i -
          m * n * c +
          t * d * c +
          a * n * A -
          t * o * A) *
        T),
      (e[15] =
        (a * h * i -
          f * o * i +
          f * n * c -
          t * h * c -
          a * n * u +
          t * o * u) *
        T),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      c = e.z,
      l = s * a,
      f = s * o;
    return (
      this.set(
        l * a + n,
        l * o - i * c,
        l * c + i * o,
        0,
        l * o + i * c,
        f * o + n,
        f * c - i * a,
        0,
        l * c - i * o,
        f * c + i * a,
        s * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      c = t._w,
      l = s + s,
      f = a + a,
      h = o + o,
      u = s * l,
      p = s * f,
      m = s * h,
      d = a * f,
      A = a * h,
      g = o * h,
      _ = c * l,
      b = c * f,
      E = c * h,
      C = n.x,
      v = n.y,
      T = n.z;
    return (
      (i[0] = (1 - (d + g)) * C),
      (i[1] = (p + E) * C),
      (i[2] = (m - b) * C),
      (i[3] = 0),
      (i[4] = (p - E) * v),
      (i[5] = (1 - (u + g)) * v),
      (i[6] = (A + _) * v),
      (i[7] = 0),
      (i[8] = (m + b) * T),
      (i[9] = (A - _) * T),
      (i[10] = (1 - (u + d)) * T),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Ii.set(i[0], i[1], i[2]).length();
    const a = Ii.set(i[4], i[5], i[6]).length(),
      o = Ii.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      nn.copy(this);
    const l = 1 / s,
      f = 1 / a,
      h = 1 / o;
    return (
      (nn.elements[0] *= l),
      (nn.elements[1] *= l),
      (nn.elements[2] *= l),
      (nn.elements[4] *= f),
      (nn.elements[5] *= f),
      (nn.elements[6] *= f),
      (nn.elements[8] *= h),
      (nn.elements[9] *= h),
      (nn.elements[10] *= h),
      t.setFromRotationMatrix(nn),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, s, a) {
    const o = this.elements,
      c = (2 * s) / (t - e),
      l = (2 * s) / (n - i),
      f = (t + e) / (t - e),
      h = (n + i) / (n - i),
      u = -(a + s) / (a - s),
      p = (-2 * a * s) / (a - s);
    return (
      (o[0] = c),
      (o[4] = 0),
      (o[8] = f),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = l),
      (o[9] = h),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = u),
      (o[14] = p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, s, a) {
    const o = this.elements,
      c = 1 / (t - e),
      l = 1 / (n - i),
      f = 1 / (a - s),
      h = (t + e) * c,
      u = (n + i) * l,
      p = (a + s) * f;
    return (
      (o[0] = 2 * c),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -h),
      (o[1] = 0),
      (o[5] = 2 * l),
      (o[9] = 0),
      (o[13] = -u),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = -2 * f),
      (o[14] = -p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Ii = new R(),
  nn = new Be(),
  af = new R(0, 0, 0),
  of = new R(1, 1, 1),
  Un = new R(),
  Fs = new R(),
  Ot = new R(),
  zo = new Be(),
  Ho = new _n();
class Ar {
  constructor(e = 0, t = 0, n = 0, i = Ar.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      s = i[0],
      a = i[4],
      o = i[8],
      c = i[1],
      l = i[5],
      f = i[9],
      h = i[2],
      u = i[6],
      p = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Tt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-f, p)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Tt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(o, p)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-h, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Tt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-h, p)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Tt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(u, p)), (this._z = Math.atan2(c, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(Tt(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-f, l)), (this._y = Math.atan2(-h, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, p)));
        break;
      case "XZY":
        (this._z = Math.asin(-Tt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-f, p)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      zo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(zo, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ho.setFromEuler(this), this.setFromQuaternion(Ho, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ar.DEFAULT_ORDER = "XYZ";
class Ga {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let cf = 0;
const Vo = new R(),
  yi = new _n(),
  wn = new Be(),
  ks = new R(),
  ts = new R(),
  lf = new R(),
  uf = new _n(),
  Wo = new R(1, 0, 0),
  jo = new R(0, 1, 0),
  qo = new R(0, 0, 1),
  hf = { type: "added" },
  Yo = { type: "removed" };
class $e extends Ai {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: cf++ }),
      (this.uuid = un()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = $e.DEFAULT_UP.clone());
    const e = new R(),
      t = new Ar(),
      n = new _n(),
      i = new R(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Be() },
        normalMatrix: { value: new Vt() },
      }),
      (this.matrix = new Be()),
      (this.matrixWorld = new Be()),
      (this.matrixAutoUpdate = $e.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = $e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new Ga()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return yi.setFromAxisAngle(e, t), this.quaternion.multiply(yi), this;
  }
  rotateOnWorldAxis(e, t) {
    return yi.setFromAxisAngle(e, t), this.quaternion.premultiply(yi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Wo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(jo, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(qo, e);
  }
  translateOnAxis(e, t) {
    return (
      Vo.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Vo.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Wo, e);
  }
  translateY(e) {
    return this.translateOnAxis(jo, e);
  }
  translateZ(e) {
    return this.translateOnAxis(qo, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(wn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? ks.copy(e) : ks.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      ts.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? wn.lookAt(ts, ks, this.up)
        : wn.lookAt(ks, ts, this.up),
      this.quaternion.setFromRotationMatrix(wn),
      i &&
        (wn.extractRotation(i.matrixWorld),
        yi.setFromRotationMatrix(wn),
        this.quaternion.premultiply(yi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(hf))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Yo)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(Yo);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      wn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), wn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(wn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ts, e, lf), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ts, uf, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, f = c.length; l < f; l++) {
            const h = c[l];
            s(e.shapes, h);
          }
        else s(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        i.material = o;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        f = a(e.images),
        h = a(e.shapes),
        u = a(e.skeletons),
        p = a(e.animations),
        m = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        f.length > 0 && (n.images = f),
        h.length > 0 && (n.shapes = h),
        u.length > 0 && (n.skeletons = u),
        p.length > 0 && (n.animations = p),
        m.length > 0 && (n.nodes = m);
    }
    return (n.object = i), n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const f = o[l];
        delete f.metadata, c.push(f);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
$e.DEFAULT_UP = new R(0, 1, 0);
$e.DEFAULT_MATRIX_AUTO_UPDATE = !0;
$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const sn = new R(),
  Sn = new R(),
  Or = new R(),
  Mn = new R(),
  vi = new R(),
  wi = new R(),
  Ko = new R(),
  zr = new R(),
  Hr = new R(),
  Vr = new R();
class Dn {
  constructor(e = new R(), t = new R(), n = new R()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), sn.subVectors(e, t), i.cross(sn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    sn.subVectors(i, t), Sn.subVectors(n, t), Or.subVectors(e, t);
    const a = sn.dot(sn),
      o = sn.dot(Sn),
      c = sn.dot(Or),
      l = Sn.dot(Sn),
      f = Sn.dot(Or),
      h = a * l - o * o;
    if (h === 0) return s.set(-2, -1, -1);
    const u = 1 / h,
      p = (l * c - o * f) * u,
      m = (a * f - o * c) * u;
    return s.set(1 - p - m, m, p);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, Mn),
      Mn.x >= 0 && Mn.y >= 0 && Mn.x + Mn.y <= 1
    );
  }
  static getUV(e, t, n, i, s, a, o, c) {
    return (
      this.getBarycoord(e, t, n, i, Mn),
      c.set(0, 0),
      c.addScaledVector(s, Mn.x),
      c.addScaledVector(a, Mn.y),
      c.addScaledVector(o, Mn.z),
      c
    );
  }
  static isFrontFacing(e, t, n, i) {
    return sn.subVectors(n, t), Sn.subVectors(e, t), sn.cross(Sn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      sn.subVectors(this.c, this.b),
      Sn.subVectors(this.a, this.b),
      sn.cross(Sn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Dn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Dn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Dn.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Dn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Dn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      s = this.c;
    let a, o;
    vi.subVectors(i, n), wi.subVectors(s, n), zr.subVectors(e, n);
    const c = vi.dot(zr),
      l = wi.dot(zr);
    if (c <= 0 && l <= 0) return t.copy(n);
    Hr.subVectors(e, i);
    const f = vi.dot(Hr),
      h = wi.dot(Hr);
    if (f >= 0 && h <= f) return t.copy(i);
    const u = c * h - f * l;
    if (u <= 0 && c >= 0 && f <= 0)
      return (a = c / (c - f)), t.copy(n).addScaledVector(vi, a);
    Vr.subVectors(e, s);
    const p = vi.dot(Vr),
      m = wi.dot(Vr);
    if (m >= 0 && p <= m) return t.copy(s);
    const d = p * l - c * m;
    if (d <= 0 && l >= 0 && m <= 0)
      return (o = l / (l - m)), t.copy(n).addScaledVector(wi, o);
    const A = f * m - p * h;
    if (A <= 0 && h - f >= 0 && p - m >= 0)
      return (
        Ko.subVectors(s, i),
        (o = (h - f) / (h - f + (p - m))),
        t.copy(i).addScaledVector(Ko, o)
      );
    const g = 1 / (A + d + u);
    return (
      (a = d * g),
      (o = u * g),
      t.copy(n).addScaledVector(vi, a).addScaledVector(wi, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let ff = 0;
class gn extends Ai {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: ff++ }),
      (this.uuid = un()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Pi),
      (this.side = Pn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Tl),
      (this.blendDst = Dl),
      (this.blendEquation = Li),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Aa),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = zh),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Br),
      (this.stencilZFail = Br),
      (this.stencilZPass = Br),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Pi && (n.blending = this.blending),
      this.side !== Pn && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures),
        a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class li extends gn {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Se(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Rl),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const lt = new R(),
  Ns = new ye();
class wt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = ya),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ns.fromBufferAttribute(this, t),
          Ns.applyMatrix3(e),
          this.setXY(t, Ns.x, Ns.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        lt.fromBufferAttribute(this, t),
          lt.applyMatrix3(e),
          this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t),
        lt.applyMatrix4(e),
        this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t),
        lt.applyNormalMatrix(e),
        this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t),
        lt.transformDirection(e),
        this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Xe(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Xe(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Xe(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Xe(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Xe(t, this.array)), (n = Xe(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Xe(t, this.array)),
        (n = Xe(n, this.array)),
        (i = Xe(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Xe(t, this.array)),
        (n = Xe(n, this.array)),
        (i = Xe(i, this.array)),
        (s = Xe(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== ya && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class ql extends wt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Yl extends wt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class hn extends wt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let df = 0;
const Jt = new Be(),
  Wr = new $e(),
  Si = new R(),
  zt = new qi(),
  ns = new qi(),
  _t = new R();
class en extends Ai {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: df++ }),
      (this.uuid = un()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Ol(e) ? Yl : ql)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Vt().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Jt.makeRotationFromQuaternion(e), this.applyMatrix4(Jt), this;
  }
  rotateX(e) {
    return Jt.makeRotationX(e), this.applyMatrix4(Jt), this;
  }
  rotateY(e) {
    return Jt.makeRotationY(e), this.applyMatrix4(Jt), this;
  }
  rotateZ(e) {
    return Jt.makeRotationZ(e), this.applyMatrix4(Jt), this;
  }
  translate(e, t, n) {
    return Jt.makeTranslation(e, t, n), this.applyMatrix4(Jt), this;
  }
  scale(e, t, n) {
    return Jt.makeScale(e, t, n), this.applyMatrix4(Jt), this;
  }
  lookAt(e) {
    return Wr.lookAt(e), Wr.updateMatrix(), this.applyMatrix4(Wr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Si).negate(),
      this.translate(Si.x, Si.y, Si.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new hn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new qi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new R(-1 / 0, -1 / 0, -1 / 0),
          new R(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          zt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (_t.addVectors(this.boundingBox.min, zt.min),
                this.boundingBox.expandByPoint(_t),
                _t.addVectors(this.boundingBox.max, zt.max),
                this.boundingBox.expandByPoint(_t))
              : (this.boundingBox.expandByPoint(zt.min),
                this.boundingBox.expandByPoint(zt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Yi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((zt.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          ns.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (_t.addVectors(zt.min, ns.min),
                zt.expandByPoint(_t),
                _t.addVectors(zt.max, ns.max),
                zt.expandByPoint(_t))
              : (zt.expandByPoint(ns.min), zt.expandByPoint(ns.max));
        }
      zt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        _t.fromBufferAttribute(e, s),
          (i = Math.max(i, n.distanceToSquared(_t)));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            c = this.morphTargetsRelative;
          for (let l = 0, f = o.count; l < f; l++)
            _t.fromBufferAttribute(o, l),
              c && (Si.fromBufferAttribute(e, l), _t.add(Si)),
              (i = Math.max(i, n.distanceToSquared(_t)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      s = t.normal.array,
      a = t.uv.array,
      o = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new wt(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array,
      l = [],
      f = [];
    for (let B = 0; B < o; B++) (l[B] = new R()), (f[B] = new R());
    const h = new R(),
      u = new R(),
      p = new R(),
      m = new ye(),
      d = new ye(),
      A = new ye(),
      g = new R(),
      _ = new R();
    function b(B, G, H) {
      h.fromArray(i, B * 3),
        u.fromArray(i, G * 3),
        p.fromArray(i, H * 3),
        m.fromArray(a, B * 2),
        d.fromArray(a, G * 2),
        A.fromArray(a, H * 2),
        u.sub(h),
        p.sub(h),
        d.sub(m),
        A.sub(m);
      const P = 1 / (d.x * A.y - A.x * d.y);
      isFinite(P) &&
        (g
          .copy(u)
          .multiplyScalar(A.y)
          .addScaledVector(p, -d.y)
          .multiplyScalar(P),
        _.copy(p)
          .multiplyScalar(d.x)
          .addScaledVector(u, -A.x)
          .multiplyScalar(P),
        l[B].add(g),
        l[G].add(g),
        l[H].add(g),
        f[B].add(_),
        f[G].add(_),
        f[H].add(_));
    }
    let E = this.groups;
    E.length === 0 && (E = [{ start: 0, count: n.length }]);
    for (let B = 0, G = E.length; B < G; ++B) {
      const H = E[B],
        P = H.start,
        Q = H.count;
      for (let z = P, Y = P + Q; z < Y; z += 3) b(n[z + 0], n[z + 1], n[z + 2]);
    }
    const C = new R(),
      v = new R(),
      T = new R(),
      x = new R();
    function w(B) {
      T.fromArray(s, B * 3), x.copy(T);
      const G = l[B];
      C.copy(G),
        C.sub(T.multiplyScalar(T.dot(G))).normalize(),
        v.crossVectors(x, G);
      const P = v.dot(f[B]) < 0 ? -1 : 1;
      (c[B * 4] = C.x),
        (c[B * 4 + 1] = C.y),
        (c[B * 4 + 2] = C.z),
        (c[B * 4 + 3] = P);
    }
    for (let B = 0, G = E.length; B < G; ++B) {
      const H = E[B],
        P = H.start,
        Q = H.count;
      for (let z = P, Y = P + Q; z < Y; z += 3)
        w(n[z + 0]), w(n[z + 1]), w(n[z + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new wt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let u = 0, p = n.count; u < p; u++) n.setXYZ(u, 0, 0, 0);
      const i = new R(),
        s = new R(),
        a = new R(),
        o = new R(),
        c = new R(),
        l = new R(),
        f = new R(),
        h = new R();
      if (e)
        for (let u = 0, p = e.count; u < p; u += 3) {
          const m = e.getX(u + 0),
            d = e.getX(u + 1),
            A = e.getX(u + 2);
          i.fromBufferAttribute(t, m),
            s.fromBufferAttribute(t, d),
            a.fromBufferAttribute(t, A),
            f.subVectors(a, s),
            h.subVectors(i, s),
            f.cross(h),
            o.fromBufferAttribute(n, m),
            c.fromBufferAttribute(n, d),
            l.fromBufferAttribute(n, A),
            o.add(f),
            c.add(f),
            l.add(f),
            n.setXYZ(m, o.x, o.y, o.z),
            n.setXYZ(d, c.x, c.y, c.z),
            n.setXYZ(A, l.x, l.y, l.z);
        }
      else
        for (let u = 0, p = t.count; u < p; u += 3)
          i.fromBufferAttribute(t, u + 0),
            s.fromBufferAttribute(t, u + 1),
            a.fromBufferAttribute(t, u + 2),
            f.subVectors(a, s),
            h.subVectors(i, s),
            f.cross(h),
            n.setXYZ(u + 0, f.x, f.y, f.z),
            n.setXYZ(u + 1, f.x, f.y, f.z),
            n.setXYZ(u + 2, f.x, f.y, f.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      _t.fromBufferAttribute(e, t),
        _t.normalize(),
        e.setXYZ(t, _t.x, _t.y, _t.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array,
        f = o.itemSize,
        h = o.normalized,
        u = new l.constructor(c.length * f);
      let p = 0,
        m = 0;
      for (let d = 0, A = c.length; d < A; d++) {
        o.isInterleavedBufferAttribute
          ? (p = c[d] * o.data.stride + o.offset)
          : (p = c[d] * f);
        for (let g = 0; g < f; g++) u[m++] = l[p++];
      }
      return new wt(u, f, h);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new en(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const c = i[o],
        l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [],
        l = s[o];
      for (let f = 0, h = l.length; f < h; f++) {
        const u = l[f],
          p = e(u, n);
        c.push(p);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        f = [];
      for (let h = 0, u = l.length; h < u; h++) {
        const p = l[h];
        f.push(p.toJSON(e.data));
      }
      f.length > 0 && ((i[c] = f), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const f = i[l];
      this.setAttribute(l, f.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const f = [],
        h = s[l];
      for (let u = 0, p = h.length; u < p; u++) f.push(h[u].clone(t));
      this.morphAttributes[l] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, f = a.length; l < f; l++) {
      const h = a[l];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Jo = new Be(),
  Mi = new dr(),
  jr = new Yi(),
  is = new R(),
  ss = new R(),
  rs = new R(),
  qr = new R(),
  Us = new R(),
  Gs = new ye(),
  Os = new ye(),
  zs = new ye(),
  Yr = new R(),
  Hs = new R();
class Wt extends $e {
  constructor(e = new en(), t = new li()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Us.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const f = o[c],
          h = s[c];
        f !== 0 &&
          (qr.fromBufferAttribute(h, e),
          a ? Us.addScaledVector(qr, f) : Us.addScaledVector(qr.sub(t), f));
      }
      t.add(Us);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      jr.copy(n.boundingSphere),
      jr.applyMatrix4(s),
      e.ray.intersectsSphere(jr) === !1) ||
      (Jo.copy(s).invert(),
      Mi.copy(e.ray).applyMatrix4(Jo),
      n.boundingBox !== null && Mi.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let a;
    const o = n.index,
      c = n.attributes.position,
      l = n.attributes.uv,
      f = n.attributes.uv2,
      h = n.groups,
      u = n.drawRange;
    if (o !== null)
      if (Array.isArray(i))
        for (let p = 0, m = h.length; p < m; p++) {
          const d = h[p],
            A = i[d.materialIndex],
            g = Math.max(d.start, u.start),
            _ = Math.min(
              o.count,
              Math.min(d.start + d.count, u.start + u.count)
            );
          for (let b = g, E = _; b < E; b += 3) {
            const C = o.getX(b),
              v = o.getX(b + 1),
              T = o.getX(b + 2);
            (a = Vs(this, A, e, Mi, l, f, C, v, T)),
              a &&
                ((a.faceIndex = Math.floor(b / 3)),
                (a.face.materialIndex = d.materialIndex),
                t.push(a));
          }
        }
      else {
        const p = Math.max(0, u.start),
          m = Math.min(o.count, u.start + u.count);
        for (let d = p, A = m; d < A; d += 3) {
          const g = o.getX(d),
            _ = o.getX(d + 1),
            b = o.getX(d + 2);
          (a = Vs(this, i, e, Mi, l, f, g, _, b)),
            a && ((a.faceIndex = Math.floor(d / 3)), t.push(a));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let p = 0, m = h.length; p < m; p++) {
          const d = h[p],
            A = i[d.materialIndex],
            g = Math.max(d.start, u.start),
            _ = Math.min(
              c.count,
              Math.min(d.start + d.count, u.start + u.count)
            );
          for (let b = g, E = _; b < E; b += 3) {
            const C = b,
              v = b + 1,
              T = b + 2;
            (a = Vs(this, A, e, Mi, l, f, C, v, T)),
              a &&
                ((a.faceIndex = Math.floor(b / 3)),
                (a.face.materialIndex = d.materialIndex),
                t.push(a));
          }
        }
      else {
        const p = Math.max(0, u.start),
          m = Math.min(c.count, u.start + u.count);
        for (let d = p, A = m; d < A; d += 3) {
          const g = d,
            _ = d + 1,
            b = d + 2;
          (a = Vs(this, i, e, Mi, l, f, g, _, b)),
            a && ((a.faceIndex = Math.floor(d / 3)), t.push(a));
        }
      }
  }
}
function Af(r, e, t, n, i, s, a, o) {
  let c;
  if (
    (e.side === jt
      ? (c = n.intersectTriangle(a, s, i, !0, o))
      : (c = n.intersectTriangle(i, s, a, e.side === Pn, o)),
    c === null)
  )
    return null;
  Hs.copy(o), Hs.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(Hs);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: Hs.clone(), object: r };
}
function Vs(r, e, t, n, i, s, a, o, c) {
  r.getVertexPosition(a, is),
    r.getVertexPosition(o, ss),
    r.getVertexPosition(c, rs);
  const l = Af(r, e, t, n, is, ss, rs, Yr);
  if (l) {
    i &&
      (Gs.fromBufferAttribute(i, a),
      Os.fromBufferAttribute(i, o),
      zs.fromBufferAttribute(i, c),
      (l.uv = Dn.getUV(Yr, is, ss, rs, Gs, Os, zs, new ye()))),
      s &&
        (Gs.fromBufferAttribute(s, a),
        Os.fromBufferAttribute(s, o),
        zs.fromBufferAttribute(s, c),
        (l.uv2 = Dn.getUV(Yr, is, ss, rs, Gs, Os, zs, new ye())));
    const f = { a, b: o, c, normal: new R(), materialIndex: 0 };
    Dn.getNormal(is, ss, rs, f.normal), (l.face = f);
  }
  return l;
}
class ws extends en {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (a = Math.floor(a));
    const c = [],
      l = [],
      f = [],
      h = [];
    let u = 0,
      p = 0;
    m("z", "y", "x", -1, -1, n, t, e, a, s, 0),
      m("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
      m("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      m("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      m("x", "y", "z", 1, -1, e, t, n, i, s, 4),
      m("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
      this.setIndex(c),
      this.setAttribute("position", new hn(l, 3)),
      this.setAttribute("normal", new hn(f, 3)),
      this.setAttribute("uv", new hn(h, 2));
    function m(d, A, g, _, b, E, C, v, T, x, w) {
      const B = E / T,
        G = C / x,
        H = E / 2,
        P = C / 2,
        Q = v / 2,
        z = T + 1,
        Y = x + 1;
      let K = 0,
        O = 0;
      const ee = new R();
      for (let Z = 0; Z < Y; Z++) {
        const W = Z * G - P;
        for (let U = 0; U < z; U++) {
          const $ = U * B - H;
          (ee[d] = $ * _),
            (ee[A] = W * b),
            (ee[g] = Q),
            l.push(ee.x, ee.y, ee.z),
            (ee[d] = 0),
            (ee[A] = 0),
            (ee[g] = v > 0 ? 1 : -1),
            f.push(ee.x, ee.y, ee.z),
            h.push(U / T),
            h.push(1 - Z / x),
            (K += 1);
        }
      }
      for (let Z = 0; Z < x; Z++)
        for (let W = 0; W < T; W++) {
          const U = u + W + z * Z,
            $ = u + W + z * (Z + 1),
            ie = u + (W + 1) + z * (Z + 1),
            se = u + (W + 1) + z * Z;
          c.push(U, $, se), c.push($, ie, se), (O += 6);
        }
      o.addGroup(p, O, w), (p += O), (u += K);
    }
  }
  static fromJSON(e) {
    return new ws(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Vi(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function Pt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Vi(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function pf(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function Kl(r) {
  return r.getRenderTarget() === null && r.outputEncoding === Ne ? fn : Es;
}
const Oa = { clone: Vi, merge: Pt };
var gf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  mf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class En extends gn {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = gf),
      (this.fragmentShader = mf),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Vi(e.uniforms)),
      (this.uniformsGroups = pf(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[i] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
        : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class za extends $e {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Be()),
      (this.projectionMatrix = new Be()),
      (this.projectionMatrixInverse = new Be());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class yt extends za {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = xs * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ps * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return xs * 2 * Math.atan(Math.tan(ps * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(ps * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      (s += (a.offsetX * i) / c),
        (t -= (a.offsetY * n) / l),
        (i *= a.width / c),
        (n *= a.height / l);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Bi = -90,
  Ti = 1;
class bf extends $e {
  constructor(e, t, n) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = n);
    const i = new yt(Bi, Ti, e, t);
    (i.layers = this.layers), i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new yt(Bi, Ti, e, t);
    (s.layers = this.layers),
      s.up.set(0, 1, 0),
      s.lookAt(-1, 0, 0),
      this.add(s);
    const a = new yt(Bi, Ti, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(0, 1, 0),
      this.add(a);
    const o = new yt(Bi, Ti, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(0, -1, 0),
      this.add(o);
    const c = new yt(Bi, Ti, e, t);
    (c.layers = this.layers), c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new yt(Bi, Ti, e, t);
    (l.layers = this.layers),
      l.up.set(0, 1, 0),
      l.lookAt(0, 0, -1),
      this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, s, a, o, c, l] = this.children,
      f = e.getRenderTarget(),
      h = e.toneMapping,
      u = e.xr.enabled;
    (e.toneMapping = pn), (e.xr.enabled = !1);
    const p = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, a),
      e.setRenderTarget(n, 3),
      e.render(t, o),
      e.setRenderTarget(n, 4),
      e.render(t, c),
      (n.texture.generateMipmaps = p),
      e.setRenderTarget(n, 5),
      e.render(t, l),
      e.setRenderTarget(f),
      (e.toneMapping = h),
      (e.xr.enabled = u),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Jl extends Ct {
  constructor(e, t, n, i, s, a, o, c, l, f) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Ui),
      super(e, t, n, i, s, a, o, c, l, f),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class _f extends jn {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Jl(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Bt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new ws(5, 5, 5),
      s = new En({
        name: "CubemapFromEquirect",
        uniforms: Vi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: jt,
        blending: Vn,
      });
    s.uniforms.tEquirect.value = t;
    const a = new Wt(i, s),
      o = t.minFilter;
    return (
      t.minFilter === Wn && (t.minFilter = Bt),
      new bf(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Kr = new R(),
  Ef = new R(),
  xf = new Vt();
class ri {
  constructor(e = new R(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Kr.subVectors(n, t).cross(Ef.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(Kr),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || xf.getNormalMatrix(e),
      i = this.coplanarPoint(Kr).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Di = new Yi(),
  Ws = new R();
class pr {
  constructor(
    e = new ri(),
    t = new ri(),
    n = new ri(),
    i = new ri(),
    s = new ri(),
    a = new ri()
  ) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      s = n[1],
      a = n[2],
      o = n[3],
      c = n[4],
      l = n[5],
      f = n[6],
      h = n[7],
      u = n[8],
      p = n[9],
      m = n[10],
      d = n[11],
      A = n[12],
      g = n[13],
      _ = n[14],
      b = n[15];
    return (
      t[0].setComponents(o - i, h - c, d - u, b - A).normalize(),
      t[1].setComponents(o + i, h + c, d + u, b + A).normalize(),
      t[2].setComponents(o + s, h + l, d + p, b + g).normalize(),
      t[3].setComponents(o - s, h - l, d - p, b - g).normalize(),
      t[4].setComponents(o - a, h - f, d - m, b - _).normalize(),
      t[5].setComponents(o + a, h + f, d + m, b + _).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Di)
    );
  }
  intersectsSprite(e) {
    return (
      Di.center.set(0, 0, 0),
      (Di.radius = 0.7071067811865476),
      Di.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Di)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Ws.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Ws.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Ws.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Ws) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Xl() {
  let r = null,
    e = !1,
    t = null,
    n = null;
  function i(s, a) {
    t(s, a), (n = r.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      r = s;
    },
  };
}
function Cf(r, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(l, f) {
    const h = l.array,
      u = l.usage,
      p = r.createBuffer();
    r.bindBuffer(f, p), r.bufferData(f, h, u), l.onUploadCallback();
    let m;
    if (h instanceof Float32Array) m = 5126;
    else if (h instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t) m = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else m = 5123;
    else if (h instanceof Int16Array) m = 5122;
    else if (h instanceof Uint32Array) m = 5125;
    else if (h instanceof Int32Array) m = 5124;
    else if (h instanceof Int8Array) m = 5120;
    else if (h instanceof Uint8Array) m = 5121;
    else if (h instanceof Uint8ClampedArray) m = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + h
      );
    return {
      buffer: p,
      type: m,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: l.version,
    };
  }
  function s(l, f, h) {
    const u = f.array,
      p = f.updateRange;
    r.bindBuffer(h, l),
      p.count === -1
        ? r.bufferSubData(h, 0, u)
        : (t
            ? r.bufferSubData(
                h,
                p.offset * u.BYTES_PER_ELEMENT,
                u,
                p.offset,
                p.count
              )
            : r.bufferSubData(
                h,
                p.offset * u.BYTES_PER_ELEMENT,
                u.subarray(p.offset, p.offset + p.count)
              ),
          (p.count = -1)),
      f.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const f = n.get(l);
    f && (r.deleteBuffer(f.buffer), n.delete(l));
  }
  function c(l, f) {
    if (l.isGLBufferAttribute) {
      const u = n.get(l);
      (!u || u.version < l.version) &&
        n.set(l, {
          buffer: l.buffer,
          type: l.type,
          bytesPerElement: l.elementSize,
          version: l.version,
        });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h === void 0
      ? n.set(l, i(l, f))
      : h.version < l.version && (s(h.buffer, l, f), (h.version = l.version));
  }
  return { get: a, remove: o, update: c };
}
class Ha extends en {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      c = Math.floor(i),
      l = o + 1,
      f = c + 1,
      h = e / o,
      u = t / c,
      p = [],
      m = [],
      d = [],
      A = [];
    for (let g = 0; g < f; g++) {
      const _ = g * u - a;
      for (let b = 0; b < l; b++) {
        const E = b * h - s;
        m.push(E, -_, 0), d.push(0, 0, 1), A.push(b / o), A.push(1 - g / c);
      }
    }
    for (let g = 0; g < c; g++)
      for (let _ = 0; _ < o; _++) {
        const b = _ + l * g,
          E = _ + l * (g + 1),
          C = _ + 1 + l * (g + 1),
          v = _ + 1 + l * g;
        p.push(b, E, v), p.push(E, C, v);
      }
    this.setIndex(p),
      this.setAttribute("position", new hn(m, 3)),
      this.setAttribute("normal", new hn(d, 3)),
      this.setAttribute("uv", new hn(A, 2));
  }
  static fromJSON(e) {
    return new Ha(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var If = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  yf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  vf = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  wf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Sf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Mf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Bf = "vec3 transformed = vec3( position );",
  Tf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Df = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  Rf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Lf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Qf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  Pf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Ff = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  kf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Nf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Uf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Gf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Of = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  zf = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  Hf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Vf = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Wf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  jf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  qf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Yf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Kf = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Jf = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Xf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Zf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  $f = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  ed = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  td = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  nd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  id = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  sd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  rd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  ad = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  od = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  cd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  ld = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  ud = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  hd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  fd = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  dd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Ad = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  pd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  gd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  md = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  bd = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  _d = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Ed = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  xd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Cd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Id = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  yd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  vd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  wd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Sd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Md = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Bd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Td = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Dd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Rd = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Ld = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  Qd = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Pd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Fd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  kd = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Nd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Ud = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Gd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Od = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  zd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  Hd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  Vd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  Wd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  jd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  qd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  Yd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Kd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Jd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Xd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Zd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  $d = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  eA = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  tA = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  nA = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  iA = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  sA = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  rA = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  aA = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  oA = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  cA = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  lA = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  uA = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  hA = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  fA = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  dA = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  AA = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  pA = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  gA = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  mA = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  bA = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  _A = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  EA = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const xA = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  CA = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  IA = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  yA = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  vA = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  wA = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  SA = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  MA = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  BA = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  TA = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  DA = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  RA = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  LA = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  QA = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  PA = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  FA = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  kA = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  NA = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  UA = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  GA = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  OA = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  zA = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  HA = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  VA = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  WA = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  jA = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  qA = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  YA = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  KA = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  JA = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  XA = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ZA = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  $A = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  ep = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Me = {
    alphamap_fragment: If,
    alphamap_pars_fragment: yf,
    alphatest_fragment: vf,
    alphatest_pars_fragment: wf,
    aomap_fragment: Sf,
    aomap_pars_fragment: Mf,
    begin_vertex: Bf,
    beginnormal_vertex: Tf,
    bsdfs: Df,
    iridescence_fragment: Rf,
    bumpmap_pars_fragment: Lf,
    clipping_planes_fragment: Qf,
    clipping_planes_pars_fragment: Pf,
    clipping_planes_pars_vertex: Ff,
    clipping_planes_vertex: kf,
    color_fragment: Nf,
    color_pars_fragment: Uf,
    color_pars_vertex: Gf,
    color_vertex: Of,
    common: zf,
    cube_uv_reflection_fragment: Hf,
    defaultnormal_vertex: Vf,
    displacementmap_pars_vertex: Wf,
    displacementmap_vertex: jf,
    emissivemap_fragment: qf,
    emissivemap_pars_fragment: Yf,
    encodings_fragment: Kf,
    encodings_pars_fragment: Jf,
    envmap_fragment: Xf,
    envmap_common_pars_fragment: Zf,
    envmap_pars_fragment: $f,
    envmap_pars_vertex: ed,
    envmap_physical_pars_fragment: fd,
    envmap_vertex: td,
    fog_vertex: nd,
    fog_pars_vertex: id,
    fog_fragment: sd,
    fog_pars_fragment: rd,
    gradientmap_pars_fragment: ad,
    lightmap_fragment: od,
    lightmap_pars_fragment: cd,
    lights_lambert_fragment: ld,
    lights_lambert_pars_fragment: ud,
    lights_pars_begin: hd,
    lights_toon_fragment: dd,
    lights_toon_pars_fragment: Ad,
    lights_phong_fragment: pd,
    lights_phong_pars_fragment: gd,
    lights_physical_fragment: md,
    lights_physical_pars_fragment: bd,
    lights_fragment_begin: _d,
    lights_fragment_maps: Ed,
    lights_fragment_end: xd,
    logdepthbuf_fragment: Cd,
    logdepthbuf_pars_fragment: Id,
    logdepthbuf_pars_vertex: yd,
    logdepthbuf_vertex: vd,
    map_fragment: wd,
    map_pars_fragment: Sd,
    map_particle_fragment: Md,
    map_particle_pars_fragment: Bd,
    metalnessmap_fragment: Td,
    metalnessmap_pars_fragment: Dd,
    morphcolor_vertex: Rd,
    morphnormal_vertex: Ld,
    morphtarget_pars_vertex: Qd,
    morphtarget_vertex: Pd,
    normal_fragment_begin: Fd,
    normal_fragment_maps: kd,
    normal_pars_fragment: Nd,
    normal_pars_vertex: Ud,
    normal_vertex: Gd,
    normalmap_pars_fragment: Od,
    clearcoat_normal_fragment_begin: zd,
    clearcoat_normal_fragment_maps: Hd,
    clearcoat_pars_fragment: Vd,
    iridescence_pars_fragment: Wd,
    output_fragment: jd,
    packing: qd,
    premultiplied_alpha_fragment: Yd,
    project_vertex: Kd,
    dithering_fragment: Jd,
    dithering_pars_fragment: Xd,
    roughnessmap_fragment: Zd,
    roughnessmap_pars_fragment: $d,
    shadowmap_pars_fragment: eA,
    shadowmap_pars_vertex: tA,
    shadowmap_vertex: nA,
    shadowmask_pars_fragment: iA,
    skinbase_vertex: sA,
    skinning_pars_vertex: rA,
    skinning_vertex: aA,
    skinnormal_vertex: oA,
    specularmap_fragment: cA,
    specularmap_pars_fragment: lA,
    tonemapping_fragment: uA,
    tonemapping_pars_fragment: hA,
    transmission_fragment: fA,
    transmission_pars_fragment: dA,
    uv_pars_fragment: AA,
    uv_pars_vertex: pA,
    uv_vertex: gA,
    uv2_pars_fragment: mA,
    uv2_pars_vertex: bA,
    uv2_vertex: _A,
    worldpos_vertex: EA,
    background_vert: xA,
    background_frag: CA,
    backgroundCube_vert: IA,
    backgroundCube_frag: yA,
    cube_vert: vA,
    cube_frag: wA,
    depth_vert: SA,
    depth_frag: MA,
    distanceRGBA_vert: BA,
    distanceRGBA_frag: TA,
    equirect_vert: DA,
    equirect_frag: RA,
    linedashed_vert: LA,
    linedashed_frag: QA,
    meshbasic_vert: PA,
    meshbasic_frag: FA,
    meshlambert_vert: kA,
    meshlambert_frag: NA,
    meshmatcap_vert: UA,
    meshmatcap_frag: GA,
    meshnormal_vert: OA,
    meshnormal_frag: zA,
    meshphong_vert: HA,
    meshphong_frag: VA,
    meshphysical_vert: WA,
    meshphysical_frag: jA,
    meshtoon_vert: qA,
    meshtoon_frag: YA,
    points_vert: KA,
    points_frag: JA,
    shadow_vert: XA,
    shadow_frag: ZA,
    sprite_vert: $A,
    sprite_frag: ep,
  },
  oe = {
    common: {
      diffuse: { value: new Se(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new Vt() },
      uv2Transform: { value: new Vt() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new ye(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Se(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Se(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Vt() },
    },
    sprite: {
      diffuse: { value: new Se(16777215) },
      opacity: { value: 1 },
      center: { value: new ye(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Vt() },
    },
  },
  dn = {
    basic: {
      uniforms: Pt([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.fog,
      ]),
      vertexShader: Me.meshbasic_vert,
      fragmentShader: Me.meshbasic_frag,
    },
    lambert: {
      uniforms: Pt([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        oe.lights,
        { emissive: { value: new Se(0) } },
      ]),
      vertexShader: Me.meshlambert_vert,
      fragmentShader: Me.meshlambert_frag,
    },
    phong: {
      uniforms: Pt([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        oe.lights,
        {
          emissive: { value: new Se(0) },
          specular: { value: new Se(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Me.meshphong_vert,
      fragmentShader: Me.meshphong_frag,
    },
    standard: {
      uniforms: Pt([
        oe.common,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.roughnessmap,
        oe.metalnessmap,
        oe.fog,
        oe.lights,
        {
          emissive: { value: new Se(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Me.meshphysical_vert,
      fragmentShader: Me.meshphysical_frag,
    },
    toon: {
      uniforms: Pt([
        oe.common,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.gradientmap,
        oe.fog,
        oe.lights,
        { emissive: { value: new Se(0) } },
      ]),
      vertexShader: Me.meshtoon_vert,
      fragmentShader: Me.meshtoon_frag,
    },
    matcap: {
      uniforms: Pt([
        oe.common,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Me.meshmatcap_vert,
      fragmentShader: Me.meshmatcap_frag,
    },
    points: {
      uniforms: Pt([oe.points, oe.fog]),
      vertexShader: Me.points_vert,
      fragmentShader: Me.points_frag,
    },
    dashed: {
      uniforms: Pt([
        oe.common,
        oe.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Me.linedashed_vert,
      fragmentShader: Me.linedashed_frag,
    },
    depth: {
      uniforms: Pt([oe.common, oe.displacementmap]),
      vertexShader: Me.depth_vert,
      fragmentShader: Me.depth_frag,
    },
    normal: {
      uniforms: Pt([
        oe.common,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Me.meshnormal_vert,
      fragmentShader: Me.meshnormal_frag,
    },
    sprite: {
      uniforms: Pt([oe.sprite, oe.fog]),
      vertexShader: Me.sprite_vert,
      fragmentShader: Me.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Vt() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Me.background_vert,
      fragmentShader: Me.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Me.backgroundCube_vert,
      fragmentShader: Me.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Me.cube_vert,
      fragmentShader: Me.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Me.equirect_vert,
      fragmentShader: Me.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Pt([
        oe.common,
        oe.displacementmap,
        {
          referencePosition: { value: new R() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Me.distanceRGBA_vert,
      fragmentShader: Me.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Pt([
        oe.lights,
        oe.fog,
        { color: { value: new Se(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Me.shadow_vert,
      fragmentShader: Me.shadow_frag,
    },
  };
dn.physical = {
  uniforms: Pt([
    dn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new ye(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Se(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new ye() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Se(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Se(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: Me.meshphysical_vert,
  fragmentShader: Me.meshphysical_frag,
};
const js = { r: 0, b: 0, g: 0 };
function tp(r, e, t, n, i, s, a) {
  const o = new Se(0);
  let c = s === !0 ? 0 : 1,
    l,
    f,
    h = null,
    u = 0,
    p = null;
  function m(A, g) {
    let _ = !1,
      b = g.isScene === !0 ? g.background : null;
    b && b.isTexture && (b = (g.backgroundBlurriness > 0 ? t : e).get(b));
    const E = r.xr,
      C = E.getSession && E.getSession();
    C && C.environmentBlendMode === "additive" && (b = null),
      b === null ? d(o, c) : b && b.isColor && (d(b, 1), (_ = !0)),
      (r.autoClear || _) &&
        r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
      b && (b.isCubeTexture || b.mapping === fr)
        ? (f === void 0 &&
            ((f = new Wt(
              new ws(1, 1, 1),
              new En({
                name: "BackgroundCubeMaterial",
                uniforms: Vi(dn.backgroundCube.uniforms),
                vertexShader: dn.backgroundCube.vertexShader,
                fragmentShader: dn.backgroundCube.fragmentShader,
                side: jt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            f.geometry.deleteAttribute("normal"),
            f.geometry.deleteAttribute("uv"),
            (f.onBeforeRender = function (v, T, x) {
              this.matrixWorld.copyPosition(x.matrixWorld);
            }),
            Object.defineProperty(f.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(f)),
          (f.material.uniforms.envMap.value = b),
          (f.material.uniforms.flipEnvMap.value =
            b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1),
          (f.material.uniforms.backgroundBlurriness.value =
            g.backgroundBlurriness),
          (f.material.uniforms.backgroundIntensity.value =
            g.backgroundIntensity),
          (f.material.toneMapped = b.encoding !== Ne),
          (h !== b || u !== b.version || p !== r.toneMapping) &&
            ((f.material.needsUpdate = !0),
            (h = b),
            (u = b.version),
            (p = r.toneMapping)),
          f.layers.enableAll(),
          A.unshift(f, f.geometry, f.material, 0, 0, null))
        : b &&
          b.isTexture &&
          (l === void 0 &&
            ((l = new Wt(
              new Ha(2, 2),
              new En({
                name: "BackgroundMaterial",
                uniforms: Vi(dn.background.uniforms),
                vertexShader: dn.background.vertexShader,
                fragmentShader: dn.background.fragmentShader,
                side: Pn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(l)),
          (l.material.uniforms.t2D.value = b),
          (l.material.uniforms.backgroundIntensity.value =
            g.backgroundIntensity),
          (l.material.toneMapped = b.encoding !== Ne),
          b.matrixAutoUpdate === !0 && b.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(b.matrix),
          (h !== b || u !== b.version || p !== r.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (h = b),
            (u = b.version),
            (p = r.toneMapping)),
          l.layers.enableAll(),
          A.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function d(A, g) {
    A.getRGB(js, Kl(r)), n.buffers.color.setClear(js.r, js.g, js.b, g, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (A, g = 1) {
      o.set(A), (c = g), d(o, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (A) {
      (c = A), d(o, c);
    },
    render: m,
  };
}
function np(r, e, t, n) {
  const i = r.getParameter(34921),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    a = n.isWebGL2 || s !== null,
    o = {},
    c = A(null);
  let l = c,
    f = !1;
  function h(Q, z, Y, K, O) {
    let ee = !1;
    if (a) {
      const Z = d(K, Y, z);
      l !== Z && ((l = Z), p(l.object)),
        (ee = g(Q, K, Y, O)),
        ee && _(Q, K, Y, O);
    } else {
      const Z = z.wireframe === !0;
      (l.geometry !== K.id || l.program !== Y.id || l.wireframe !== Z) &&
        ((l.geometry = K.id), (l.program = Y.id), (l.wireframe = Z), (ee = !0));
    }
    O !== null && t.update(O, 34963),
      (ee || f) &&
        ((f = !1),
        x(Q, z, Y, K),
        O !== null && r.bindBuffer(34963, t.get(O).buffer));
  }
  function u() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function p(Q) {
    return n.isWebGL2 ? r.bindVertexArray(Q) : s.bindVertexArrayOES(Q);
  }
  function m(Q) {
    return n.isWebGL2 ? r.deleteVertexArray(Q) : s.deleteVertexArrayOES(Q);
  }
  function d(Q, z, Y) {
    const K = Y.wireframe === !0;
    let O = o[Q.id];
    O === void 0 && ((O = {}), (o[Q.id] = O));
    let ee = O[z.id];
    ee === void 0 && ((ee = {}), (O[z.id] = ee));
    let Z = ee[K];
    return Z === void 0 && ((Z = A(u())), (ee[K] = Z)), Z;
  }
  function A(Q) {
    const z = [],
      Y = [],
      K = [];
    for (let O = 0; O < i; O++) (z[O] = 0), (Y[O] = 0), (K[O] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: z,
      enabledAttributes: Y,
      attributeDivisors: K,
      object: Q,
      attributes: {},
      index: null,
    };
  }
  function g(Q, z, Y, K) {
    const O = l.attributes,
      ee = z.attributes;
    let Z = 0;
    const W = Y.getAttributes();
    for (const U in W)
      if (W[U].location >= 0) {
        const ie = O[U];
        let se = ee[U];
        if (
          (se === void 0 &&
            (U === "instanceMatrix" &&
              Q.instanceMatrix &&
              (se = Q.instanceMatrix),
            U === "instanceColor" && Q.instanceColor && (se = Q.instanceColor)),
          ie === void 0 || ie.attribute !== se || (se && ie.data !== se.data))
        )
          return !0;
        Z++;
      }
    return l.attributesNum !== Z || l.index !== K;
  }
  function _(Q, z, Y, K) {
    const O = {},
      ee = z.attributes;
    let Z = 0;
    const W = Y.getAttributes();
    for (const U in W)
      if (W[U].location >= 0) {
        let ie = ee[U];
        ie === void 0 &&
          (U === "instanceMatrix" &&
            Q.instanceMatrix &&
            (ie = Q.instanceMatrix),
          U === "instanceColor" && Q.instanceColor && (ie = Q.instanceColor));
        const se = {};
        (se.attribute = ie),
          ie && ie.data && (se.data = ie.data),
          (O[U] = se),
          Z++;
      }
    (l.attributes = O), (l.attributesNum = Z), (l.index = K);
  }
  function b() {
    const Q = l.newAttributes;
    for (let z = 0, Y = Q.length; z < Y; z++) Q[z] = 0;
  }
  function E(Q) {
    C(Q, 0);
  }
  function C(Q, z) {
    const Y = l.newAttributes,
      K = l.enabledAttributes,
      O = l.attributeDivisors;
    (Y[Q] = 1),
      K[Q] === 0 && (r.enableVertexAttribArray(Q), (K[Q] = 1)),
      O[Q] !== z &&
        ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](Q, z),
        (O[Q] = z));
  }
  function v() {
    const Q = l.newAttributes,
      z = l.enabledAttributes;
    for (let Y = 0, K = z.length; Y < K; Y++)
      z[Y] !== Q[Y] && (r.disableVertexAttribArray(Y), (z[Y] = 0));
  }
  function T(Q, z, Y, K, O, ee) {
    n.isWebGL2 === !0 && (Y === 5124 || Y === 5125)
      ? r.vertexAttribIPointer(Q, z, Y, O, ee)
      : r.vertexAttribPointer(Q, z, Y, K, O, ee);
  }
  function x(Q, z, Y, K) {
    if (
      n.isWebGL2 === !1 &&
      (Q.isInstancedMesh || K.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    b();
    const O = K.attributes,
      ee = Y.getAttributes(),
      Z = z.defaultAttributeValues;
    for (const W in ee) {
      const U = ee[W];
      if (U.location >= 0) {
        let $ = O[W];
        if (
          ($ === void 0 &&
            (W === "instanceMatrix" &&
              Q.instanceMatrix &&
              ($ = Q.instanceMatrix),
            W === "instanceColor" && Q.instanceColor && ($ = Q.instanceColor)),
          $ !== void 0)
        ) {
          const ie = $.normalized,
            se = $.itemSize,
            D = t.get($);
          if (D === void 0) continue;
          const ae = D.buffer,
            me = D.type,
            ge = D.bytesPerElement;
          if ($.isInterleavedBufferAttribute) {
            const ue = $.data,
              je = ue.stride,
              ve = $.offset;
            if (ue.isInstancedInterleavedBuffer) {
              for (let Ce = 0; Ce < U.locationSize; Ce++)
                C(U.location + Ce, ue.meshPerAttribute);
              Q.isInstancedMesh !== !0 &&
                K._maxInstanceCount === void 0 &&
                (K._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let Ce = 0; Ce < U.locationSize; Ce++) E(U.location + Ce);
            r.bindBuffer(34962, ae);
            for (let Ce = 0; Ce < U.locationSize; Ce++)
              T(
                U.location + Ce,
                se / U.locationSize,
                me,
                ie,
                je * ge,
                (ve + (se / U.locationSize) * Ce) * ge
              );
          } else {
            if ($.isInstancedBufferAttribute) {
              for (let ue = 0; ue < U.locationSize; ue++)
                C(U.location + ue, $.meshPerAttribute);
              Q.isInstancedMesh !== !0 &&
                K._maxInstanceCount === void 0 &&
                (K._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let ue = 0; ue < U.locationSize; ue++) E(U.location + ue);
            r.bindBuffer(34962, ae);
            for (let ue = 0; ue < U.locationSize; ue++)
              T(
                U.location + ue,
                se / U.locationSize,
                me,
                ie,
                se * ge,
                (se / U.locationSize) * ue * ge
              );
          }
        } else if (Z !== void 0) {
          const ie = Z[W];
          if (ie !== void 0)
            switch (ie.length) {
              case 2:
                r.vertexAttrib2fv(U.location, ie);
                break;
              case 3:
                r.vertexAttrib3fv(U.location, ie);
                break;
              case 4:
                r.vertexAttrib4fv(U.location, ie);
                break;
              default:
                r.vertexAttrib1fv(U.location, ie);
            }
        }
      }
    }
    v();
  }
  function w() {
    H();
    for (const Q in o) {
      const z = o[Q];
      for (const Y in z) {
        const K = z[Y];
        for (const O in K) m(K[O].object), delete K[O];
        delete z[Y];
      }
      delete o[Q];
    }
  }
  function B(Q) {
    if (o[Q.id] === void 0) return;
    const z = o[Q.id];
    for (const Y in z) {
      const K = z[Y];
      for (const O in K) m(K[O].object), delete K[O];
      delete z[Y];
    }
    delete o[Q.id];
  }
  function G(Q) {
    for (const z in o) {
      const Y = o[z];
      if (Y[Q.id] === void 0) continue;
      const K = Y[Q.id];
      for (const O in K) m(K[O].object), delete K[O];
      delete Y[Q.id];
    }
  }
  function H() {
    P(), (f = !0), l !== c && ((l = c), p(l.object));
  }
  function P() {
    (c.geometry = null), (c.program = null), (c.wireframe = !1);
  }
  return {
    setup: h,
    reset: H,
    resetDefaultState: P,
    dispose: w,
    releaseStatesOfGeometry: B,
    releaseStatesOfProgram: G,
    initAttributes: b,
    enableAttribute: E,
    disableUnusedAttributes: v,
  };
}
function ip(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(l) {
    s = l;
  }
  function o(l, f) {
    r.drawArrays(s, l, f), t.update(f, s, 1);
  }
  function c(l, f, h) {
    if (h === 0) return;
    let u, p;
    if (i) (u = r), (p = "drawArraysInstanced");
    else if (
      ((u = e.get("ANGLE_instanced_arrays")),
      (p = "drawArraysInstancedANGLE"),
      u === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    u[p](s, l, f, h), t.update(f, s, h);
  }
  (this.setMode = a), (this.render = o), (this.renderInstances = c);
}
function sp(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const T = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(T) {
    if (T === "highp") {
      if (
        r.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        r.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      T = "mediump";
    }
    return T === "mediump" &&
      r.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      r.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const a =
    typeof WebGL2RenderingContext < "u" && r instanceof WebGL2RenderingContext;
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = s(o);
  c !== o &&
    (console.warn(
      "THREE.WebGLRenderer:",
      o,
      "not supported, using",
      c,
      "instead."
    ),
    (o = c));
  const l = a || e.has("WEBGL_draw_buffers"),
    f = t.logarithmicDepthBuffer === !0,
    h = r.getParameter(34930),
    u = r.getParameter(35660),
    p = r.getParameter(3379),
    m = r.getParameter(34076),
    d = r.getParameter(34921),
    A = r.getParameter(36347),
    g = r.getParameter(36348),
    _ = r.getParameter(36349),
    b = u > 0,
    E = a || e.has("OES_texture_float"),
    C = b && E,
    v = a ? r.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: f,
    maxTextures: h,
    maxVertexTextures: u,
    maxTextureSize: p,
    maxCubemapSize: m,
    maxAttributes: d,
    maxVertexUniforms: A,
    maxVaryings: g,
    maxFragmentUniforms: _,
    vertexTextures: b,
    floatFragmentTextures: E,
    floatVertexTextures: C,
    maxSamples: v,
  };
}
function rp(r) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const a = new ri(),
    o = new Vt(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, u) {
      const p = h.length !== 0 || u || n !== 0 || i;
      return (i = u), (n = h.length), p;
    }),
    (this.beginShadows = function () {
      (s = !0), f(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (h, u) {
      t = f(h, u, 0);
    }),
    (this.setState = function (h, u, p) {
      const m = h.clippingPlanes,
        d = h.clipIntersection,
        A = h.clipShadows,
        g = r.get(h);
      if (!i || m === null || m.length === 0 || (s && !A)) s ? f(null) : l();
      else {
        const _ = s ? 0 : n,
          b = _ * 4;
        let E = g.clippingState || null;
        (c.value = E), (E = f(m, u, b, p));
        for (let C = 0; C !== b; ++C) E[C] = t[C];
        (g.clippingState = E),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += _);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function f(h, u, p, m) {
    const d = h !== null ? h.length : 0;
    let A = null;
    if (d !== 0) {
      if (((A = c.value), m !== !0 || A === null)) {
        const g = p + d * 4,
          _ = u.matrixWorldInverse;
        o.getNormalMatrix(_),
          (A === null || A.length < g) && (A = new Float32Array(g));
        for (let b = 0, E = p; b !== d; ++b, E += 4)
          a.copy(h[b]).applyMatrix4(_, o),
            a.normal.toArray(A, E),
            (A[E + 3] = a.constant);
      }
      (c.value = A), (c.needsUpdate = !0);
    }
    return (e.numPlanes = d), (e.numIntersection = 0), A;
  }
}
function ap(r) {
  let e = new WeakMap();
  function t(a, o) {
    return o === pa ? (a.mapping = Ui) : o === ga && (a.mapping = Gi), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === pa || o === ga)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new _f(c.height / 2);
            return (
              l.fromEquirectangularTexture(r, a),
              e.set(a, l),
              a.addEventListener("dispose", i),
              t(l.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class gr extends za {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = i + t,
      c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += l * this.view.offsetX),
        (a = s + l * this.view.width),
        (o -= f * this.view.offsetY),
        (c = o - f * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Qi = 4,
  Xo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  oi = 20,
  Jr = new gr(),
  Zo = new Se();
let Xr = null;
const ai = (1 + Math.sqrt(5)) / 2,
  Ri = 1 / ai,
  $o = [
    new R(1, 1, 1),
    new R(-1, 1, 1),
    new R(1, 1, -1),
    new R(-1, 1, -1),
    new R(0, ai, Ri),
    new R(0, ai, -Ri),
    new R(Ri, 0, ai),
    new R(-Ri, 0, ai),
    new R(ai, Ri, 0),
    new R(-ai, Ri, 0),
  ];
class ec {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (Xr = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = ic()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = nc()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Xr),
      (e.scissorTest = !1),
      qs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ui || e.mapping === Gi
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Xr = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Bt,
        minFilter: Bt,
        generateMipmaps: !1,
        type: Qn,
        format: vt,
        encoding: bn,
        depthBuffer: !1,
      },
      i = tc(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = tc(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = op(s)),
        (this._blurMaterial = cp(s, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Wt(this._lodPlanes[0], e);
    this._renderer.compile(t, Jr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new yt(90, 1, t, n),
      c = [1, -1, 1, 1, 1, 1],
      l = [1, 1, 1, -1, -1, -1],
      f = this._renderer,
      h = f.autoClear,
      u = f.toneMapping;
    f.getClearColor(Zo), (f.toneMapping = pn), (f.autoClear = !1);
    const p = new li({
        name: "PMREM.Background",
        side: jt,
        depthWrite: !1,
        depthTest: !1,
      }),
      m = new Wt(new ws(), p);
    let d = !1;
    const A = e.background;
    A
      ? A.isColor && (p.color.copy(A), (e.background = null), (d = !0))
      : (p.color.copy(Zo), (d = !0));
    for (let g = 0; g < 6; g++) {
      const _ = g % 3;
      _ === 0
        ? (o.up.set(0, c[g], 0), o.lookAt(l[g], 0, 0))
        : _ === 1
        ? (o.up.set(0, 0, c[g]), o.lookAt(0, l[g], 0))
        : (o.up.set(0, c[g], 0), o.lookAt(0, 0, l[g]));
      const b = this._cubeSize;
      qs(i, _ * b, g > 2 ? b : 0, b, b),
        f.setRenderTarget(i),
        d && f.render(m, o),
        f.render(e, o);
    }
    m.geometry.dispose(),
      m.material.dispose(),
      (f.toneMapping = u),
      (f.autoClear = h),
      (e.background = A);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === Ui || e.mapping === Gi;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = ic()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = nc());
    const s = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new Wt(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    qs(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Jr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        a = $o[(i - 1) % $o.length];
      this._blur(e, i - 1, i, s, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", s),
      this._halfBlur(a, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const c = this._renderer,
      l = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const f = 3,
      h = new Wt(this._lodPlanes[i], l),
      u = l.uniforms,
      p = this._sizeLods[n] - 1,
      m = isFinite(s) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * oi - 1),
      d = s / m,
      A = isFinite(s) ? 1 + Math.floor(f * d) : oi;
    A > oi &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${oi}`
      );
    const g = [];
    let _ = 0;
    for (let T = 0; T < oi; ++T) {
      const x = T / d,
        w = Math.exp((-x * x) / 2);
      g.push(w), T === 0 ? (_ += w) : T < A && (_ += 2 * w);
    }
    for (let T = 0; T < g.length; T++) g[T] = g[T] / _;
    (u.envMap.value = e.texture),
      (u.samples.value = A),
      (u.weights.value = g),
      (u.latitudinal.value = a === "latitudinal"),
      o && (u.poleAxis.value = o);
    const { _lodMax: b } = this;
    (u.dTheta.value = m), (u.mipInt.value = b - n);
    const E = this._sizeLods[i],
      C = 3 * E * (i > b - Qi ? i - b + Qi : 0),
      v = 4 * (this._cubeSize - E);
    qs(t, C, v, 3 * E, 2 * E), c.setRenderTarget(t), c.render(h, Jr);
  }
}
function op(r) {
  const e = [],
    t = [],
    n = [];
  let i = r;
  const s = r - Qi + 1 + Xo.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r - Qi ? (c = Xo[a - r + Qi - 1]) : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2),
      f = -l,
      h = 1 + l,
      u = [f, f, h, f, h, h, f, f, h, h, f, h],
      p = 6,
      m = 6,
      d = 3,
      A = 2,
      g = 1,
      _ = new Float32Array(d * m * p),
      b = new Float32Array(A * m * p),
      E = new Float32Array(g * m * p);
    for (let v = 0; v < p; v++) {
      const T = ((v % 3) * 2) / 3 - 1,
        x = v > 2 ? 0 : -1,
        w = [
          T,
          x,
          0,
          T + 2 / 3,
          x,
          0,
          T + 2 / 3,
          x + 1,
          0,
          T,
          x,
          0,
          T + 2 / 3,
          x + 1,
          0,
          T,
          x + 1,
          0,
        ];
      _.set(w, d * m * v), b.set(u, A * m * v);
      const B = [v, v, v, v, v, v];
      E.set(B, g * m * v);
    }
    const C = new en();
    C.setAttribute("position", new wt(_, d)),
      C.setAttribute("uv", new wt(b, A)),
      C.setAttribute("faceIndex", new wt(E, g)),
      e.push(C),
      i > Qi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function tc(r, e, t) {
  const n = new jn(r, e, t);
  return (
    (n.texture.mapping = fr),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function qs(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function cp(r, e, t) {
  const n = new Float32Array(oi),
    i = new R(0, 1, 0);
  return new En({
    name: "SphericalGaussianBlur",
    defines: {
      n: oi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: Va(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Vn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function nc() {
  return new En({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Va(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Vn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ic() {
  return new En({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Va(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Vn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Va() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function lp(r) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping,
        l = c === pa || c === ga,
        f = c === Ui || c === Gi;
      if (l || f)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let h = e.get(o);
          return (
            t === null && (t = new ec(r)),
            (h = l ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h)),
            e.set(o, h),
            h.texture
          );
        } else {
          if (e.has(o)) return e.get(o).texture;
          {
            const h = o.image;
            if ((l && h && h.height > 0) || (f && h && i(h))) {
              t === null && (t = new ec(r));
              const u = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, u), o.addEventListener("dispose", s), u.texture;
            } else return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let f = 0; f < l; f++) o[f] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function up(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          r.getExtension("WEBGL_depth_texture") ||
          r.getExtension("MOZ_WEBGL_depth_texture") ||
          r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          r.getExtension("EXT_texture_filter_anisotropic") ||
          r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          r.getExtension("WEBGL_compressed_texture_s3tc") ||
          r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          r.getExtension("WEBGL_compressed_texture_pvrtc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function hp(r, e, t, n) {
  const i = {},
    s = new WeakMap();
  function a(h) {
    const u = h.target;
    u.index !== null && e.remove(u.index);
    for (const m in u.attributes) e.remove(u.attributes[m]);
    u.removeEventListener("dispose", a), delete i[u.id];
    const p = s.get(u);
    p && (e.remove(p), s.delete(u)),
      n.releaseStatesOfGeometry(u),
      u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(h, u) {
    return (
      i[u.id] === !0 ||
        (u.addEventListener("dispose", a),
        (i[u.id] = !0),
        t.memory.geometries++),
      u
    );
  }
  function c(h) {
    const u = h.attributes;
    for (const m in u) e.update(u[m], 34962);
    const p = h.morphAttributes;
    for (const m in p) {
      const d = p[m];
      for (let A = 0, g = d.length; A < g; A++) e.update(d[A], 34962);
    }
  }
  function l(h) {
    const u = [],
      p = h.index,
      m = h.attributes.position;
    let d = 0;
    if (p !== null) {
      const _ = p.array;
      d = p.version;
      for (let b = 0, E = _.length; b < E; b += 3) {
        const C = _[b + 0],
          v = _[b + 1],
          T = _[b + 2];
        u.push(C, v, v, T, T, C);
      }
    } else {
      const _ = m.array;
      d = m.version;
      for (let b = 0, E = _.length / 3 - 1; b < E; b += 3) {
        const C = b + 0,
          v = b + 1,
          T = b + 2;
        u.push(C, v, v, T, T, C);
      }
    }
    const A = new (Ol(u) ? Yl : ql)(u, 1);
    A.version = d;
    const g = s.get(h);
    g && e.remove(g), s.set(h, A);
  }
  function f(h) {
    const u = s.get(h);
    if (u) {
      const p = h.index;
      p !== null && u.version < p.version && l(h);
    } else l(h);
    return s.get(h);
  }
  return { get: o, update: c, getWireframeAttribute: f };
}
function fp(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(u) {
    s = u;
  }
  let o, c;
  function l(u) {
    (o = u.type), (c = u.bytesPerElement);
  }
  function f(u, p) {
    r.drawElements(s, p, o, u * c), t.update(p, s, 1);
  }
  function h(u, p, m) {
    if (m === 0) return;
    let d, A;
    if (i) (d = r), (A = "drawElementsInstanced");
    else if (
      ((d = e.get("ANGLE_instanced_arrays")),
      (A = "drawElementsInstancedANGLE"),
      d === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    d[A](s, p, o, u * c, m), t.update(p, s, m);
  }
  (this.setMode = a),
    (this.setIndex = l),
    (this.render = f),
    (this.renderInstances = h);
}
function dp(r) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case 4:
        t.triangles += o * (s / 3);
        break;
      case 1:
        t.lines += o * (s / 2);
        break;
      case 3:
        t.lines += o * (s - 1);
        break;
      case 2:
        t.lines += o * s;
        break;
      case 0:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Ap(r, e) {
  return r[0] - e[0];
}
function pp(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function gp(r, e, t) {
  const n = {},
    i = new Float32Array(8),
    s = new WeakMap(),
    a = new Ze(),
    o = [];
  for (let l = 0; l < 8; l++) o[l] = [l, 0];
  function c(l, f, h, u) {
    const p = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m =
          f.morphAttributes.position ||
          f.morphAttributes.normal ||
          f.morphAttributes.color,
        d = m !== void 0 ? m.length : 0;
      let A = s.get(f);
      if (A === void 0 || A.count !== d) {
        let z = function () {
          P.dispose(), s.delete(f), f.removeEventListener("dispose", z);
        };
        A !== void 0 && A.texture.dispose();
        const b = f.morphAttributes.position !== void 0,
          E = f.morphAttributes.normal !== void 0,
          C = f.morphAttributes.color !== void 0,
          v = f.morphAttributes.position || [],
          T = f.morphAttributes.normal || [],
          x = f.morphAttributes.color || [];
        let w = 0;
        b === !0 && (w = 1), E === !0 && (w = 2), C === !0 && (w = 3);
        let B = f.attributes.position.count * w,
          G = 1;
        B > e.maxTextureSize &&
          ((G = Math.ceil(B / e.maxTextureSize)), (B = e.maxTextureSize));
        const H = new Float32Array(B * G * 4 * d),
          P = new Wl(H, B, G, d);
        (P.type = Zt), (P.needsUpdate = !0);
        const Q = w * 4;
        for (let Y = 0; Y < d; Y++) {
          const K = v[Y],
            O = T[Y],
            ee = x[Y],
            Z = B * G * 4 * Y;
          for (let W = 0; W < K.count; W++) {
            const U = W * Q;
            b === !0 &&
              (a.fromBufferAttribute(K, W),
              (H[Z + U + 0] = a.x),
              (H[Z + U + 1] = a.y),
              (H[Z + U + 2] = a.z),
              (H[Z + U + 3] = 0)),
              E === !0 &&
                (a.fromBufferAttribute(O, W),
                (H[Z + U + 4] = a.x),
                (H[Z + U + 5] = a.y),
                (H[Z + U + 6] = a.z),
                (H[Z + U + 7] = 0)),
              C === !0 &&
                (a.fromBufferAttribute(ee, W),
                (H[Z + U + 8] = a.x),
                (H[Z + U + 9] = a.y),
                (H[Z + U + 10] = a.z),
                (H[Z + U + 11] = ee.itemSize === 4 ? a.w : 1));
          }
        }
        (A = { count: d, texture: P, size: new ye(B, G) }),
          s.set(f, A),
          f.addEventListener("dispose", z);
      }
      let g = 0;
      for (let b = 0; b < p.length; b++) g += p[b];
      const _ = f.morphTargetsRelative ? 1 : 1 - g;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", _),
        u.getUniforms().setValue(r, "morphTargetInfluences", p),
        u.getUniforms().setValue(r, "morphTargetsTexture", A.texture, t),
        u.getUniforms().setValue(r, "morphTargetsTextureSize", A.size);
    } else {
      const m = p === void 0 ? 0 : p.length;
      let d = n[f.id];
      if (d === void 0 || d.length !== m) {
        d = [];
        for (let E = 0; E < m; E++) d[E] = [E, 0];
        n[f.id] = d;
      }
      for (let E = 0; E < m; E++) {
        const C = d[E];
        (C[0] = E), (C[1] = p[E]);
      }
      d.sort(pp);
      for (let E = 0; E < 8; E++)
        E < m && d[E][1]
          ? ((o[E][0] = d[E][0]), (o[E][1] = d[E][1]))
          : ((o[E][0] = Number.MAX_SAFE_INTEGER), (o[E][1] = 0));
      o.sort(Ap);
      const A = f.morphAttributes.position,
        g = f.morphAttributes.normal;
      let _ = 0;
      for (let E = 0; E < 8; E++) {
        const C = o[E],
          v = C[0],
          T = C[1];
        v !== Number.MAX_SAFE_INTEGER && T
          ? (A &&
              f.getAttribute("morphTarget" + E) !== A[v] &&
              f.setAttribute("morphTarget" + E, A[v]),
            g &&
              f.getAttribute("morphNormal" + E) !== g[v] &&
              f.setAttribute("morphNormal" + E, g[v]),
            (i[E] = T),
            (_ += T))
          : (A &&
              f.hasAttribute("morphTarget" + E) === !0 &&
              f.deleteAttribute("morphTarget" + E),
            g &&
              f.hasAttribute("morphNormal" + E) === !0 &&
              f.deleteAttribute("morphNormal" + E),
            (i[E] = 0));
      }
      const b = f.morphTargetsRelative ? 1 : 1 - _;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", b),
        u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return { update: c };
}
function mp(r, e, t, n) {
  let i = new WeakMap();
  function s(c) {
    const l = n.render.frame,
      f = c.geometry,
      h = e.get(c, f);
    return (
      i.get(h) !== l && (e.update(h), i.set(h, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", o) === !1 &&
          c.addEventListener("dispose", o),
        t.update(c.instanceMatrix, 34962),
        c.instanceColor !== null && t.update(c.instanceColor, 34962)),
      h
    );
  }
  function a() {
    i = new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return { update: s, dispose: a };
}
const Zl = new Ct(),
  $l = new Wl(),
  eu = new jl(),
  tu = new Jl(),
  sc = [],
  rc = [],
  ac = new Float32Array(16),
  oc = new Float32Array(9),
  cc = new Float32Array(4);
function Ki(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = sc[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (sc[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), r[a].toArray(s, o);
  }
  return s;
}
function dt(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function At(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function mr(r, e) {
  let t = rc[e];
  t === void 0 && ((t = new Int32Array(e)), (rc[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function bp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function _p(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (dt(t, e)) return;
    r.uniform2fv(this.addr, e), At(t, e);
  }
}
function Ep(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (dt(t, e)) return;
    r.uniform3fv(this.addr, e), At(t, e);
  }
}
function xp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (dt(t, e)) return;
    r.uniform4fv(this.addr, e), At(t, e);
  }
}
function Cp(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), At(t, e);
  } else {
    if (dt(t, n)) return;
    cc.set(n), r.uniformMatrix2fv(this.addr, !1, cc), At(t, n);
  }
}
function Ip(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), At(t, e);
  } else {
    if (dt(t, n)) return;
    oc.set(n), r.uniformMatrix3fv(this.addr, !1, oc), At(t, n);
  }
}
function yp(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), At(t, e);
  } else {
    if (dt(t, n)) return;
    ac.set(n), r.uniformMatrix4fv(this.addr, !1, ac), At(t, n);
  }
}
function vp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function wp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (dt(t, e)) return;
    r.uniform2iv(this.addr, e), At(t, e);
  }
}
function Sp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (dt(t, e)) return;
    r.uniform3iv(this.addr, e), At(t, e);
  }
}
function Mp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (dt(t, e)) return;
    r.uniform4iv(this.addr, e), At(t, e);
  }
}
function Bp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function Tp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (dt(t, e)) return;
    r.uniform2uiv(this.addr, e), At(t, e);
  }
}
function Dp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (dt(t, e)) return;
    r.uniform3uiv(this.addr, e), At(t, e);
  }
}
function Rp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (dt(t, e)) return;
    r.uniform4uiv(this.addr, e), At(t, e);
  }
}
function Lp(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || Zl, i);
}
function Qp(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || eu, i);
}
function Pp(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || tu, i);
}
function Fp(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || $l, i);
}
function kp(r) {
  switch (r) {
    case 5126:
      return bp;
    case 35664:
      return _p;
    case 35665:
      return Ep;
    case 35666:
      return xp;
    case 35674:
      return Cp;
    case 35675:
      return Ip;
    case 35676:
      return yp;
    case 5124:
    case 35670:
      return vp;
    case 35667:
    case 35671:
      return wp;
    case 35668:
    case 35672:
      return Sp;
    case 35669:
    case 35673:
      return Mp;
    case 5125:
      return Bp;
    case 36294:
      return Tp;
    case 36295:
      return Dp;
    case 36296:
      return Rp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Lp;
    case 35679:
    case 36299:
    case 36307:
      return Qp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Pp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Fp;
  }
}
function Np(r, e) {
  r.uniform1fv(this.addr, e);
}
function Up(r, e) {
  const t = Ki(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Gp(r, e) {
  const t = Ki(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function Op(r, e) {
  const t = Ki(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function zp(r, e) {
  const t = Ki(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function Hp(r, e) {
  const t = Ki(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function Vp(r, e) {
  const t = Ki(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function Wp(r, e) {
  r.uniform1iv(this.addr, e);
}
function jp(r, e) {
  r.uniform2iv(this.addr, e);
}
function qp(r, e) {
  r.uniform3iv(this.addr, e);
}
function Yp(r, e) {
  r.uniform4iv(this.addr, e);
}
function Kp(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Jp(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Xp(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Zp(r, e) {
  r.uniform4uiv(this.addr, e);
}
function $p(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = mr(t, i);
  dt(n, s) || (r.uniform1iv(this.addr, s), At(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || Zl, s[a]);
}
function eg(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = mr(t, i);
  dt(n, s) || (r.uniform1iv(this.addr, s), At(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || eu, s[a]);
}
function tg(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = mr(t, i);
  dt(n, s) || (r.uniform1iv(this.addr, s), At(n, s));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || tu, s[a]);
}
function ng(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = mr(t, i);
  dt(n, s) || (r.uniform1iv(this.addr, s), At(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || $l, s[a]);
}
function ig(r) {
  switch (r) {
    case 5126:
      return Np;
    case 35664:
      return Up;
    case 35665:
      return Gp;
    case 35666:
      return Op;
    case 35674:
      return zp;
    case 35675:
      return Hp;
    case 35676:
      return Vp;
    case 5124:
    case 35670:
      return Wp;
    case 35667:
    case 35671:
      return jp;
    case 35668:
    case 35672:
      return qp;
    case 35669:
    case 35673:
      return Yp;
    case 5125:
      return Kp;
    case 36294:
      return Jp;
    case 36295:
      return Xp;
    case 36296:
      return Zp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return $p;
    case 35679:
    case 36299:
    case 36307:
      return eg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return tg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ng;
  }
}
class sg {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = kp(t.type));
  }
}
class rg {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = ig(t.type));
  }
}
class ag {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Zr = /(\w+)(\])?(\[|\.)?/g;
function lc(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}
function og(r, e, t) {
  const n = r.name,
    i = n.length;
  for (Zr.lastIndex = 0; ; ) {
    const s = Zr.exec(n),
      a = Zr.lastIndex;
    let o = s[1];
    const c = s[2] === "]",
      l = s[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && a + 2 === i))) {
      lc(t, l === void 0 ? new sg(o, r, e) : new rg(o, r, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && ((h = new ag(o)), lc(t, h)), (t = h);
    }
  }
}
class sr {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, s.name);
      og(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function uc(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let cg = 0;
function lg(r, e) {
  const t = r.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function ug(r) {
  switch (r) {
    case bn:
      return ["Linear", "( value )"];
    case Ne:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", r),
        ["Linear", "( value )"]
      );
  }
}
function hc(r, e, t) {
  const n = r.getShaderParameter(e, 35713),
    i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      lg(r.getShaderSource(e), a)
    );
  } else return i;
}
function hg(r, e) {
  const t = ug(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function fg(r, e) {
  let t;
  switch (e) {
    case xh:
      t = "Linear";
      break;
    case Ch:
      t = "Reinhard";
      break;
    case Ih:
      t = "OptimizedCineon";
      break;
    case Ll:
      t = "ACESFilmic";
      break;
    case yh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function dg(r) {
  return [
    r.extensionDerivatives ||
    r.envMapCubeUVHeight ||
    r.bumpMap ||
    r.tangentSpaceNormalMap ||
    r.clearcoatNormalMap ||
    r.flatShading ||
    r.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) &&
    r.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) &&
    r.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(As).join(`
`);
}
function Ag(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function pg(r, e) {
  const t = {},
    n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i),
      a = s.name;
    let o = 1;
    s.type === 35674 && (o = 2),
      s.type === 35675 && (o = 3),
      s.type === 35676 && (o = 4),
      (t[a] = {
        type: s.type,
        location: r.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function As(r) {
  return r !== "";
}
function fc(r, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function dc(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const gg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Sa(r) {
  return r.replace(gg, mg);
}
function mg(r, e) {
  const t = Me[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Sa(t);
}
const bg =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ac(r) {
  return r.replace(bg, _g);
}
function _g(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function pc(r) {
  let e =
    "precision " +
    r.precision +
    ` float;
precision ` +
    r.precision +
    " int;";
  return (
    r.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : r.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Eg(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    r.shadowMapType === Ml
      ? (e = "SHADOWMAP_TYPE_PCF")
      : r.shadowMapType === Bl
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : r.shadowMapType === hs && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function xg(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Ui:
      case Gi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case fr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Cg(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case Gi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Ig(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case Rl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case _h:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Eh:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function yg(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function vg(r, e, t, n) {
  const i = r.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const c = Eg(t),
    l = xg(t),
    f = Cg(t),
    h = Ig(t),
    u = yg(t),
    p = t.isWebGL2 ? "" : dg(t),
    m = Ag(s),
    d = i.createProgram();
  let A,
    g,
    _ = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((A = [m].filter(As).join(`
`)),
      A.length > 0 &&
        (A += `
`),
      (g = [p, m].filter(As).join(`
`)),
      g.length > 0 &&
        (g += `
`))
    : ((A = [
        pc(t),
        "#define SHADER_NAME " + t.shaderName,
        m,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + f : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(As).join(`
`)),
      (g = [
        p,
        pc(t),
        "#define SHADER_NAME " + t.shaderName,
        m,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + f : "",
        t.envMap ? "#define " + h : "",
        u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
        u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
        u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== pn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== pn ? Me.tonemapping_pars_fragment : "",
        t.toneMapping !== pn ? fg("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Me.encodings_pars_fragment,
        hg("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(As).join(`
`))),
    (a = Sa(a)),
    (a = fc(a, t)),
    (a = dc(a, t)),
    (o = Sa(o)),
    (o = fc(o, t)),
    (o = dc(o, t)),
    (a = Ac(a)),
    (o = Ac(o)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((_ = `#version 300 es
`),
      (A =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        A),
      (g =
        [
          "#define varying in",
          t.glslVersion === Uo
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Uo ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        g));
  const b = _ + A + a,
    E = _ + g + o,
    C = uc(i, 35633, b),
    v = uc(i, 35632, E);
  if (
    (i.attachShader(d, C),
    i.attachShader(d, v),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(d, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(d, 0, "position"),
    i.linkProgram(d),
    r.debug.checkShaderErrors)
  ) {
    const w = i.getProgramInfoLog(d).trim(),
      B = i.getShaderInfoLog(C).trim(),
      G = i.getShaderInfoLog(v).trim();
    let H = !0,
      P = !0;
    if (i.getProgramParameter(d, 35714) === !1) {
      H = !1;
      const Q = hc(i, C, "vertex"),
        z = hc(i, v, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(d, 35715) +
          `

Program Info Log: ` +
          w +
          `
` +
          Q +
          `
` +
          z
      );
    } else
      w !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", w)
        : (B === "" || G === "") && (P = !1);
    P &&
      (this.diagnostics = {
        runnable: H,
        programLog: w,
        vertexShader: { log: B, prefix: A },
        fragmentShader: { log: G, prefix: g },
      });
  }
  i.deleteShader(C), i.deleteShader(v);
  let T;
  this.getUniforms = function () {
    return T === void 0 && (T = new sr(i, d)), T;
  };
  let x;
  return (
    (this.getAttributes = function () {
      return x === void 0 && (x = pg(i, d)), x;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(d),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = cg++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = d),
    (this.vertexShader = C),
    (this.fragmentShader = v),
    this
  );
}
let wg = 0;
class Sg {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      s = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Mg(e)), t.set(e, n)), n;
  }
}
class Mg {
  constructor(e) {
    (this.id = wg++), (this.code = e), (this.usedTimes = 0);
  }
}
function Bg(r, e, t, n, i, s, a) {
  const o = new Ga(),
    c = new Sg(),
    l = [],
    f = i.isWebGL2,
    h = i.logarithmicDepthBuffer,
    u = i.vertexTextures;
  let p = i.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function d(x, w, B, G, H) {
    const P = G.fog,
      Q = H.geometry,
      z = x.isMeshStandardMaterial ? G.environment : null,
      Y = (x.isMeshStandardMaterial ? t : e).get(x.envMap || z),
      K = Y && Y.mapping === fr ? Y.image.height : null,
      O = m[x.type];
    x.precision !== null &&
      ((p = i.getMaxPrecision(x.precision)),
      p !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          p,
          "instead."
        ));
    const ee =
        Q.morphAttributes.position ||
        Q.morphAttributes.normal ||
        Q.morphAttributes.color,
      Z = ee !== void 0 ? ee.length : 0;
    let W = 0;
    Q.morphAttributes.position !== void 0 && (W = 1),
      Q.morphAttributes.normal !== void 0 && (W = 2),
      Q.morphAttributes.color !== void 0 && (W = 3);
    let U, $, ie, se;
    if (O) {
      const je = dn[O];
      (U = je.vertexShader), ($ = je.fragmentShader);
    } else
      (U = x.vertexShader),
        ($ = x.fragmentShader),
        c.update(x),
        (ie = c.getVertexShaderID(x)),
        (se = c.getFragmentShaderID(x));
    const D = r.getRenderTarget(),
      ae = x.alphaTest > 0,
      me = x.clearcoat > 0,
      ge = x.iridescence > 0;
    return {
      isWebGL2: f,
      shaderID: O,
      shaderName: x.type,
      vertexShader: U,
      fragmentShader: $,
      defines: x.defines,
      customVertexShaderID: ie,
      customFragmentShaderID: se,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: p,
      instancing: H.isInstancedMesh === !0,
      instancingColor: H.isInstancedMesh === !0 && H.instanceColor !== null,
      supportsVertexTextures: u,
      outputEncoding:
        D === null
          ? r.outputEncoding
          : D.isXRRenderTarget === !0
          ? D.texture.encoding
          : bn,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!Y,
      envMapMode: Y && Y.mapping,
      envMapCubeUVHeight: K,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === Oh,
      tangentSpaceNormalMap: x.normalMapType === Ul,
      decodeVideoTexture:
        !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === Ne,
      clearcoat: me,
      clearcoatMap: me && !!x.clearcoatMap,
      clearcoatRoughnessMap: me && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: me && !!x.clearcoatNormalMap,
      iridescence: ge,
      iridescenceMap: ge && !!x.iridescenceMap,
      iridescenceThicknessMap: ge && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === Pi,
      alphaMap: !!x.alphaMap,
      alphaTest: ae,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!Q.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas:
        x.vertexColors === !0 &&
        !!Q.attributes.color &&
        Q.attributes.color.itemSize === 4,
      vertexUvs:
        !!x.map ||
        !!x.bumpMap ||
        !!x.normalMap ||
        !!x.specularMap ||
        !!x.alphaMap ||
        !!x.emissiveMap ||
        !!x.roughnessMap ||
        !!x.metalnessMap ||
        !!x.clearcoatMap ||
        !!x.clearcoatRoughnessMap ||
        !!x.clearcoatNormalMap ||
        !!x.iridescenceMap ||
        !!x.iridescenceThicknessMap ||
        !!x.displacementMap ||
        !!x.transmissionMap ||
        !!x.thicknessMap ||
        !!x.specularIntensityMap ||
        !!x.specularColorMap ||
        !!x.sheenColorMap ||
        !!x.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          x.map ||
          x.bumpMap ||
          x.normalMap ||
          x.specularMap ||
          x.alphaMap ||
          x.emissiveMap ||
          x.roughnessMap ||
          x.metalnessMap ||
          x.clearcoatNormalMap ||
          x.iridescenceMap ||
          x.iridescenceThicknessMap ||
          x.transmission > 0 ||
          x.transmissionMap ||
          x.thicknessMap ||
          x.specularIntensityMap ||
          x.specularColorMap ||
          x.sheen > 0 ||
          x.sheenColorMap ||
          x.sheenRoughnessMap
        ) && !!x.displacementMap,
      fog: !!P,
      useFog: x.fog === !0,
      fogExp2: P && P.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: h,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: Q.morphAttributes.position !== void 0,
      morphNormals: Q.morphAttributes.normal !== void 0,
      morphColors: Q.morphAttributes.color !== void 0,
      morphTargetsCount: Z,
      morphTextureStride: W,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: r.shadowMap.enabled && B.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: x.toneMapped ? r.toneMapping : pn,
      physicallyCorrectLights: r.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Rn,
      flipSided: x.side === jt,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: f || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: f || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: f || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
  }
  function A(x) {
    const w = [];
    if (
      (x.shaderID
        ? w.push(x.shaderID)
        : (w.push(x.customVertexShaderID), w.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const B in x.defines) w.push(B), w.push(x.defines[B]);
    return (
      x.isRawShaderMaterial === !1 &&
        (g(w, x), _(w, x), w.push(r.outputEncoding)),
      w.push(x.customProgramCacheKey),
      w.join()
    );
  }
  function g(x, w) {
    x.push(w.precision),
      x.push(w.outputEncoding),
      x.push(w.envMapMode),
      x.push(w.envMapCubeUVHeight),
      x.push(w.combine),
      x.push(w.vertexUvs),
      x.push(w.fogExp2),
      x.push(w.sizeAttenuation),
      x.push(w.morphTargetsCount),
      x.push(w.morphAttributeCount),
      x.push(w.numDirLights),
      x.push(w.numPointLights),
      x.push(w.numSpotLights),
      x.push(w.numSpotLightMaps),
      x.push(w.numHemiLights),
      x.push(w.numRectAreaLights),
      x.push(w.numDirLightShadows),
      x.push(w.numPointLightShadows),
      x.push(w.numSpotLightShadows),
      x.push(w.numSpotLightShadowsWithMaps),
      x.push(w.shadowMapType),
      x.push(w.toneMapping),
      x.push(w.numClippingPlanes),
      x.push(w.numClipIntersection),
      x.push(w.depthPacking);
  }
  function _(x, w) {
    o.disableAll(),
      w.isWebGL2 && o.enable(0),
      w.supportsVertexTextures && o.enable(1),
      w.instancing && o.enable(2),
      w.instancingColor && o.enable(3),
      w.map && o.enable(4),
      w.matcap && o.enable(5),
      w.envMap && o.enable(6),
      w.lightMap && o.enable(7),
      w.aoMap && o.enable(8),
      w.emissiveMap && o.enable(9),
      w.bumpMap && o.enable(10),
      w.normalMap && o.enable(11),
      w.objectSpaceNormalMap && o.enable(12),
      w.tangentSpaceNormalMap && o.enable(13),
      w.clearcoat && o.enable(14),
      w.clearcoatMap && o.enable(15),
      w.clearcoatRoughnessMap && o.enable(16),
      w.clearcoatNormalMap && o.enable(17),
      w.iridescence && o.enable(18),
      w.iridescenceMap && o.enable(19),
      w.iridescenceThicknessMap && o.enable(20),
      w.displacementMap && o.enable(21),
      w.specularMap && o.enable(22),
      w.roughnessMap && o.enable(23),
      w.metalnessMap && o.enable(24),
      w.gradientMap && o.enable(25),
      w.alphaMap && o.enable(26),
      w.alphaTest && o.enable(27),
      w.vertexColors && o.enable(28),
      w.vertexAlphas && o.enable(29),
      w.vertexUvs && o.enable(30),
      w.vertexTangents && o.enable(31),
      w.uvsVertexOnly && o.enable(32),
      x.push(o.mask),
      o.disableAll(),
      w.fog && o.enable(0),
      w.useFog && o.enable(1),
      w.flatShading && o.enable(2),
      w.logarithmicDepthBuffer && o.enable(3),
      w.skinning && o.enable(4),
      w.morphTargets && o.enable(5),
      w.morphNormals && o.enable(6),
      w.morphColors && o.enable(7),
      w.premultipliedAlpha && o.enable(8),
      w.shadowMapEnabled && o.enable(9),
      w.physicallyCorrectLights && o.enable(10),
      w.doubleSided && o.enable(11),
      w.flipSided && o.enable(12),
      w.useDepthPacking && o.enable(13),
      w.dithering && o.enable(14),
      w.specularIntensityMap && o.enable(15),
      w.specularColorMap && o.enable(16),
      w.transmission && o.enable(17),
      w.transmissionMap && o.enable(18),
      w.thicknessMap && o.enable(19),
      w.sheen && o.enable(20),
      w.sheenColorMap && o.enable(21),
      w.sheenRoughnessMap && o.enable(22),
      w.decodeVideoTexture && o.enable(23),
      w.opaque && o.enable(24),
      x.push(o.mask);
  }
  function b(x) {
    const w = m[x.type];
    let B;
    if (w) {
      const G = dn[w];
      B = Oa.clone(G.uniforms);
    } else B = x.uniforms;
    return B;
  }
  function E(x, w) {
    let B;
    for (let G = 0, H = l.length; G < H; G++) {
      const P = l[G];
      if (P.cacheKey === w) {
        (B = P), ++B.usedTimes;
        break;
      }
    }
    return B === void 0 && ((B = new vg(r, w, x, s)), l.push(B)), B;
  }
  function C(x) {
    if (--x.usedTimes === 0) {
      const w = l.indexOf(x);
      (l[w] = l[l.length - 1]), l.pop(), x.destroy();
    }
  }
  function v(x) {
    c.remove(x);
  }
  function T() {
    c.dispose();
  }
  return {
    getParameters: d,
    getProgramCacheKey: A,
    getUniforms: b,
    acquireProgram: E,
    releaseProgram: C,
    releaseShaderCache: v,
    programs: l,
    dispose: T,
  };
}
function Tg() {
  let r = new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && ((a = {}), r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Dg(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.material.id !== e.material.id
    ? r.material.id - e.material.id
    : r.z !== e.z
    ? r.z - e.z
    : r.id - e.id;
}
function gc(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.z !== e.z
    ? e.z - r.z
    : r.id - e.id;
}
function mc() {
  const r = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(h, u, p, m, d, A) {
    let g = r[e];
    return (
      g === void 0
        ? ((g = {
            id: h.id,
            object: h,
            geometry: u,
            material: p,
            groupOrder: m,
            renderOrder: h.renderOrder,
            z: d,
            group: A,
          }),
          (r[e] = g))
        : ((g.id = h.id),
          (g.object = h),
          (g.geometry = u),
          (g.material = p),
          (g.groupOrder = m),
          (g.renderOrder = h.renderOrder),
          (g.z = d),
          (g.group = A)),
      e++,
      g
    );
  }
  function o(h, u, p, m, d, A) {
    const g = a(h, u, p, m, d, A);
    p.transmission > 0
      ? n.push(g)
      : p.transparent === !0
      ? i.push(g)
      : t.push(g);
  }
  function c(h, u, p, m, d, A) {
    const g = a(h, u, p, m, d, A);
    p.transmission > 0
      ? n.unshift(g)
      : p.transparent === !0
      ? i.unshift(g)
      : t.unshift(g);
  }
  function l(h, u) {
    t.length > 1 && t.sort(h || Dg),
      n.length > 1 && n.sort(u || gc),
      i.length > 1 && i.sort(u || gc);
  }
  function f() {
    for (let h = e, u = r.length; h < u; h++) {
      const p = r[h];
      if (p.id === null) break;
      (p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: c,
    finish: f,
    sort: l,
  };
}
function Rg() {
  let r = new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new mc()), r.set(n, [a]))
        : i >= s.length
        ? ((a = new mc()), s.push(a))
        : (a = s[i]),
      a
    );
  }
  function t() {
    r = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Lg() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new R(), color: new Se() };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new Se(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new R(), color: new Se(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new R(), skyColor: new Se(), groundColor: new Se() };
          break;
        case "RectAreaLight":
          t = {
            color: new Se(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R(),
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
function Qg() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
let Pg = 0;
function Fg(r, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (r.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (r.map ? 1 : 0)
  );
}
function kg(r, e) {
  const t = new Lg(),
    n = Qg(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let f = 0; f < 9; f++) i.probe.push(new R());
  const s = new R(),
    a = new Be(),
    o = new Be();
  function c(f, h) {
    let u = 0,
      p = 0,
      m = 0;
    for (let G = 0; G < 9; G++) i.probe[G].set(0, 0, 0);
    let d = 0,
      A = 0,
      g = 0,
      _ = 0,
      b = 0,
      E = 0,
      C = 0,
      v = 0,
      T = 0,
      x = 0;
    f.sort(Fg);
    const w = h !== !0 ? Math.PI : 1;
    for (let G = 0, H = f.length; G < H; G++) {
      const P = f[G],
        Q = P.color,
        z = P.intensity,
        Y = P.distance,
        K = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        (u += Q.r * z * w), (p += Q.g * z * w), (m += Q.b * z * w);
      else if (P.isLightProbe)
        for (let O = 0; O < 9; O++)
          i.probe[O].addScaledVector(P.sh.coefficients[O], z);
      else if (P.isDirectionalLight) {
        const O = t.get(P);
        if (
          (O.color.copy(P.color).multiplyScalar(P.intensity * w), P.castShadow)
        ) {
          const ee = P.shadow,
            Z = n.get(P);
          (Z.shadowBias = ee.bias),
            (Z.shadowNormalBias = ee.normalBias),
            (Z.shadowRadius = ee.radius),
            (Z.shadowMapSize = ee.mapSize),
            (i.directionalShadow[d] = Z),
            (i.directionalShadowMap[d] = K),
            (i.directionalShadowMatrix[d] = P.shadow.matrix),
            E++;
        }
        (i.directional[d] = O), d++;
      } else if (P.isSpotLight) {
        const O = t.get(P);
        O.position.setFromMatrixPosition(P.matrixWorld),
          O.color.copy(Q).multiplyScalar(z * w),
          (O.distance = Y),
          (O.coneCos = Math.cos(P.angle)),
          (O.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          (O.decay = P.decay),
          (i.spot[g] = O);
        const ee = P.shadow;
        if (
          (P.map &&
            ((i.spotLightMap[T] = P.map),
            T++,
            ee.updateMatrices(P),
            P.castShadow && x++),
          (i.spotLightMatrix[g] = ee.matrix),
          P.castShadow)
        ) {
          const Z = n.get(P);
          (Z.shadowBias = ee.bias),
            (Z.shadowNormalBias = ee.normalBias),
            (Z.shadowRadius = ee.radius),
            (Z.shadowMapSize = ee.mapSize),
            (i.spotShadow[g] = Z),
            (i.spotShadowMap[g] = K),
            v++;
        }
        g++;
      } else if (P.isRectAreaLight) {
        const O = t.get(P);
        O.color.copy(Q).multiplyScalar(z),
          O.halfWidth.set(P.width * 0.5, 0, 0),
          O.halfHeight.set(0, P.height * 0.5, 0),
          (i.rectArea[_] = O),
          _++;
      } else if (P.isPointLight) {
        const O = t.get(P);
        if (
          (O.color.copy(P.color).multiplyScalar(P.intensity * w),
          (O.distance = P.distance),
          (O.decay = P.decay),
          P.castShadow)
        ) {
          const ee = P.shadow,
            Z = n.get(P);
          (Z.shadowBias = ee.bias),
            (Z.shadowNormalBias = ee.normalBias),
            (Z.shadowRadius = ee.radius),
            (Z.shadowMapSize = ee.mapSize),
            (Z.shadowCameraNear = ee.camera.near),
            (Z.shadowCameraFar = ee.camera.far),
            (i.pointShadow[A] = Z),
            (i.pointShadowMap[A] = K),
            (i.pointShadowMatrix[A] = P.shadow.matrix),
            C++;
        }
        (i.point[A] = O), A++;
      } else if (P.isHemisphereLight) {
        const O = t.get(P);
        O.skyColor.copy(P.color).multiplyScalar(z * w),
          O.groundColor.copy(P.groundColor).multiplyScalar(z * w),
          (i.hemi[b] = O),
          b++;
      }
    }
    _ > 0 &&
      (e.isWebGL2 || r.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = oe.LTC_FLOAT_1), (i.rectAreaLTC2 = oe.LTC_FLOAT_2))
        : r.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = oe.LTC_HALF_1), (i.rectAreaLTC2 = oe.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = u),
      (i.ambient[1] = p),
      (i.ambient[2] = m);
    const B = i.hash;
    (B.directionalLength !== d ||
      B.pointLength !== A ||
      B.spotLength !== g ||
      B.rectAreaLength !== _ ||
      B.hemiLength !== b ||
      B.numDirectionalShadows !== E ||
      B.numPointShadows !== C ||
      B.numSpotShadows !== v ||
      B.numSpotMaps !== T) &&
      ((i.directional.length = d),
      (i.spot.length = g),
      (i.rectArea.length = _),
      (i.point.length = A),
      (i.hemi.length = b),
      (i.directionalShadow.length = E),
      (i.directionalShadowMap.length = E),
      (i.pointShadow.length = C),
      (i.pointShadowMap.length = C),
      (i.spotShadow.length = v),
      (i.spotShadowMap.length = v),
      (i.directionalShadowMatrix.length = E),
      (i.pointShadowMatrix.length = C),
      (i.spotLightMatrix.length = v + T - x),
      (i.spotLightMap.length = T),
      (i.numSpotLightShadowsWithMaps = x),
      (B.directionalLength = d),
      (B.pointLength = A),
      (B.spotLength = g),
      (B.rectAreaLength = _),
      (B.hemiLength = b),
      (B.numDirectionalShadows = E),
      (B.numPointShadows = C),
      (B.numSpotShadows = v),
      (B.numSpotMaps = T),
      (i.version = Pg++));
  }
  function l(f, h) {
    let u = 0,
      p = 0,
      m = 0,
      d = 0,
      A = 0;
    const g = h.matrixWorldInverse;
    for (let _ = 0, b = f.length; _ < b; _++) {
      const E = f[_];
      if (E.isDirectionalLight) {
        const C = i.directional[u];
        C.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          C.direction.sub(s),
          C.direction.transformDirection(g),
          u++;
      } else if (E.isSpotLight) {
        const C = i.spot[m];
        C.position.setFromMatrixPosition(E.matrixWorld),
          C.position.applyMatrix4(g),
          C.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          C.direction.sub(s),
          C.direction.transformDirection(g),
          m++;
      } else if (E.isRectAreaLight) {
        const C = i.rectArea[d];
        C.position.setFromMatrixPosition(E.matrixWorld),
          C.position.applyMatrix4(g),
          o.identity(),
          a.copy(E.matrixWorld),
          a.premultiply(g),
          o.extractRotation(a),
          C.halfWidth.set(E.width * 0.5, 0, 0),
          C.halfHeight.set(0, E.height * 0.5, 0),
          C.halfWidth.applyMatrix4(o),
          C.halfHeight.applyMatrix4(o),
          d++;
      } else if (E.isPointLight) {
        const C = i.point[p];
        C.position.setFromMatrixPosition(E.matrixWorld),
          C.position.applyMatrix4(g),
          p++;
      } else if (E.isHemisphereLight) {
        const C = i.hemi[A];
        C.direction.setFromMatrixPosition(E.matrixWorld),
          C.direction.transformDirection(g),
          A++;
      }
    }
  }
  return { setup: c, setupView: l, state: i };
}
function bc(r, e) {
  const t = new kg(r, e),
    n = [],
    i = [];
  function s() {
    (n.length = 0), (i.length = 0);
  }
  function a(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function c(h) {
    t.setup(n, h);
  }
  function l(h) {
    t.setupView(n, h);
  }
  return {
    init: s,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o,
  };
}
function Ng(r, e) {
  let t = new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let c;
    return (
      o === void 0
        ? ((c = new bc(r, e)), t.set(s, [c]))
        : a >= o.length
        ? ((c = new bc(r, e)), o.push(c))
        : (c = o[a]),
      c
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class Ug extends gn {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Uh),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Gg extends gn {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new R()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Og = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  zg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Hg(r, e, t) {
  let n = new pr();
  const i = new ye(),
    s = new ye(),
    a = new Ze(),
    o = new Ug({ depthPacking: Gh }),
    c = new Gg(),
    l = {},
    f = t.maxTextureSize,
    h = { [Pn]: jt, [jt]: Pn, [Rn]: Rn },
    u = new En({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new ye() },
        radius: { value: 4 },
      },
      vertexShader: Og,
      fragmentShader: zg,
    }),
    p = u.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const m = new en();
  m.setAttribute(
    "position",
    new wt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const d = new Wt(m, u),
    A = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Ml),
    (this.render = function (E, C, v) {
      if (
        A.enabled === !1 ||
        (A.autoUpdate === !1 && A.needsUpdate === !1) ||
        E.length === 0
      )
        return;
      const T = r.getRenderTarget(),
        x = r.getActiveCubeFace(),
        w = r.getActiveMipmapLevel(),
        B = r.state;
      B.setBlending(Vn),
        B.buffers.color.setClear(1, 1, 1, 1),
        B.buffers.depth.setTest(!0),
        B.setScissorTest(!1);
      for (let G = 0, H = E.length; G < H; G++) {
        const P = E[G],
          Q = P.shadow;
        if (Q === void 0) {
          console.warn("THREE.WebGLShadowMap:", P, "has no shadow.");
          continue;
        }
        if (Q.autoUpdate === !1 && Q.needsUpdate === !1) continue;
        i.copy(Q.mapSize);
        const z = Q.getFrameExtents();
        if (
          (i.multiply(z),
          s.copy(Q.mapSize),
          (i.x > f || i.y > f) &&
            (i.x > f &&
              ((s.x = Math.floor(f / z.x)),
              (i.x = s.x * z.x),
              (Q.mapSize.x = s.x)),
            i.y > f &&
              ((s.y = Math.floor(f / z.y)),
              (i.y = s.y * z.y),
              (Q.mapSize.y = s.y))),
          Q.map === null)
        ) {
          const K = this.type !== hs ? { minFilter: Et, magFilter: Et } : {};
          (Q.map = new jn(i.x, i.y, K)),
            (Q.map.texture.name = P.name + ".shadowMap"),
            Q.camera.updateProjectionMatrix();
        }
        r.setRenderTarget(Q.map), r.clear();
        const Y = Q.getViewportCount();
        for (let K = 0; K < Y; K++) {
          const O = Q.getViewport(K);
          a.set(s.x * O.x, s.y * O.y, s.x * O.z, s.y * O.w),
            B.viewport(a),
            Q.updateMatrices(P, K),
            (n = Q.getFrustum()),
            b(C, v, Q.camera, P, this.type);
        }
        Q.isPointLightShadow !== !0 && this.type === hs && g(Q, v),
          (Q.needsUpdate = !1);
      }
      (A.needsUpdate = !1), r.setRenderTarget(T, x, w);
    });
  function g(E, C) {
    const v = e.update(d);
    u.defines.VSM_SAMPLES !== E.blurSamples &&
      ((u.defines.VSM_SAMPLES = E.blurSamples),
      (p.defines.VSM_SAMPLES = E.blurSamples),
      (u.needsUpdate = !0),
      (p.needsUpdate = !0)),
      E.mapPass === null && (E.mapPass = new jn(i.x, i.y)),
      (u.uniforms.shadow_pass.value = E.map.texture),
      (u.uniforms.resolution.value = E.mapSize),
      (u.uniforms.radius.value = E.radius),
      r.setRenderTarget(E.mapPass),
      r.clear(),
      r.renderBufferDirect(C, null, v, u, d, null),
      (p.uniforms.shadow_pass.value = E.mapPass.texture),
      (p.uniforms.resolution.value = E.mapSize),
      (p.uniforms.radius.value = E.radius),
      r.setRenderTarget(E.map),
      r.clear(),
      r.renderBufferDirect(C, null, v, p, d, null);
  }
  function _(E, C, v, T, x, w) {
    let B = null;
    const G =
      v.isPointLight === !0 ? E.customDistanceMaterial : E.customDepthMaterial;
    if (G !== void 0) B = G;
    else if (
      ((B = v.isPointLight === !0 ? c : o),
      (r.localClippingEnabled &&
        C.clipShadows === !0 &&
        Array.isArray(C.clippingPlanes) &&
        C.clippingPlanes.length !== 0) ||
        (C.displacementMap && C.displacementScale !== 0) ||
        (C.alphaMap && C.alphaTest > 0) ||
        (C.map && C.alphaTest > 0))
    ) {
      const H = B.uuid,
        P = C.uuid;
      let Q = l[H];
      Q === void 0 && ((Q = {}), (l[H] = Q));
      let z = Q[P];
      z === void 0 && ((z = B.clone()), (Q[P] = z)), (B = z);
    }
    return (
      (B.visible = C.visible),
      (B.wireframe = C.wireframe),
      w === hs
        ? (B.side = C.shadowSide !== null ? C.shadowSide : C.side)
        : (B.side = C.shadowSide !== null ? C.shadowSide : h[C.side]),
      (B.alphaMap = C.alphaMap),
      (B.alphaTest = C.alphaTest),
      (B.map = C.map),
      (B.clipShadows = C.clipShadows),
      (B.clippingPlanes = C.clippingPlanes),
      (B.clipIntersection = C.clipIntersection),
      (B.displacementMap = C.displacementMap),
      (B.displacementScale = C.displacementScale),
      (B.displacementBias = C.displacementBias),
      (B.wireframeLinewidth = C.wireframeLinewidth),
      (B.linewidth = C.linewidth),
      v.isPointLight === !0 &&
        B.isMeshDistanceMaterial === !0 &&
        (B.referencePosition.setFromMatrixPosition(v.matrixWorld),
        (B.nearDistance = T),
        (B.farDistance = x)),
      B
    );
  }
  function b(E, C, v, T, x) {
    if (E.visible === !1) return;
    if (
      E.layers.test(C.layers) &&
      (E.isMesh || E.isLine || E.isPoints) &&
      (E.castShadow || (E.receiveShadow && x === hs)) &&
      (!E.frustumCulled || n.intersectsObject(E))
    ) {
      E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, E.matrixWorld);
      const G = e.update(E),
        H = E.material;
      if (Array.isArray(H)) {
        const P = G.groups;
        for (let Q = 0, z = P.length; Q < z; Q++) {
          const Y = P[Q],
            K = H[Y.materialIndex];
          if (K && K.visible) {
            const O = _(E, K, T, v.near, v.far, x);
            r.renderBufferDirect(v, null, G, O, E, Y);
          }
        }
      } else if (H.visible) {
        const P = _(E, H, T, v.near, v.far, x);
        r.renderBufferDirect(v, null, G, P, E, null);
      }
    }
    const B = E.children;
    for (let G = 0, H = B.length; G < H; G++) b(B[G], C, v, T, x);
  }
}
function Vg(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let L = !1;
    const j = new Ze();
    let te = null;
    const de = new Ze(0, 0, 0, 0);
    return {
      setMask: function (Ee) {
        te !== Ee && !L && (r.colorMask(Ee, Ee, Ee, Ee), (te = Ee));
      },
      setLocked: function (Ee) {
        L = Ee;
      },
      setClear: function (Ee, Ye, mt, St, Xn) {
        Xn === !0 && ((Ee *= St), (Ye *= St), (mt *= St)),
          j.set(Ee, Ye, mt, St),
          de.equals(j) === !1 && (r.clearColor(Ee, Ye, mt, St), de.copy(j));
      },
      reset: function () {
        (L = !1), (te = null), de.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let L = !1,
      j = null,
      te = null,
      de = null;
    return {
      setTest: function (Ee) {
        Ee ? ae(2929) : me(2929);
      },
      setMask: function (Ee) {
        j !== Ee && !L && (r.depthMask(Ee), (j = Ee));
      },
      setFunc: function (Ee) {
        if (te !== Ee) {
          switch (Ee) {
            case fh:
              r.depthFunc(512);
              break;
            case dh:
              r.depthFunc(519);
              break;
            case Ah:
              r.depthFunc(513);
              break;
            case Aa:
              r.depthFunc(515);
              break;
            case ph:
              r.depthFunc(514);
              break;
            case gh:
              r.depthFunc(518);
              break;
            case mh:
              r.depthFunc(516);
              break;
            case bh:
              r.depthFunc(517);
              break;
            default:
              r.depthFunc(515);
          }
          te = Ee;
        }
      },
      setLocked: function (Ee) {
        L = Ee;
      },
      setClear: function (Ee) {
        de !== Ee && (r.clearDepth(Ee), (de = Ee));
      },
      reset: function () {
        (L = !1), (j = null), (te = null), (de = null);
      },
    };
  }
  function a() {
    let L = !1,
      j = null,
      te = null,
      de = null,
      Ee = null,
      Ye = null,
      mt = null,
      St = null,
      Xn = null;
    return {
      setTest: function (tt) {
        L || (tt ? ae(2960) : me(2960));
      },
      setMask: function (tt) {
        j !== tt && !L && (r.stencilMask(tt), (j = tt));
      },
      setFunc: function (tt, Cn, Kt) {
        (te !== tt || de !== Cn || Ee !== Kt) &&
          (r.stencilFunc(tt, Cn, Kt), (te = tt), (de = Cn), (Ee = Kt));
      },
      setOp: function (tt, Cn, Kt) {
        (Ye !== tt || mt !== Cn || St !== Kt) &&
          (r.stencilOp(tt, Cn, Kt), (Ye = tt), (mt = Cn), (St = Kt));
      },
      setLocked: function (tt) {
        L = tt;
      },
      setClear: function (tt) {
        Xn !== tt && (r.clearStencil(tt), (Xn = tt));
      },
      reset: function () {
        (L = !1),
          (j = null),
          (te = null),
          (de = null),
          (Ee = null),
          (Ye = null),
          (mt = null),
          (St = null),
          (Xn = null);
      },
    };
  }
  const o = new i(),
    c = new s(),
    l = new a(),
    f = new WeakMap(),
    h = new WeakMap();
  let u = {},
    p = {},
    m = new WeakMap(),
    d = [],
    A = null,
    g = !1,
    _ = null,
    b = null,
    E = null,
    C = null,
    v = null,
    T = null,
    x = null,
    w = !1,
    B = null,
    G = null,
    H = null,
    P = null,
    Q = null;
  const z = r.getParameter(35661);
  let Y = !1,
    K = 0;
  const O = r.getParameter(7938);
  O.indexOf("WebGL") !== -1
    ? ((K = parseFloat(/^WebGL (\d)/.exec(O)[1])), (Y = K >= 1))
    : O.indexOf("OpenGL ES") !== -1 &&
      ((K = parseFloat(/^OpenGL ES (\d)/.exec(O)[1])), (Y = K >= 2));
  let ee = null,
    Z = {};
  const W = r.getParameter(3088),
    U = r.getParameter(2978),
    $ = new Ze().fromArray(W),
    ie = new Ze().fromArray(U);
  function se(L, j, te) {
    const de = new Uint8Array(4),
      Ee = r.createTexture();
    r.bindTexture(L, Ee),
      r.texParameteri(L, 10241, 9728),
      r.texParameteri(L, 10240, 9728);
    for (let Ye = 0; Ye < te; Ye++)
      r.texImage2D(j + Ye, 0, 6408, 1, 1, 0, 6408, 5121, de);
    return Ee;
  }
  const D = {};
  (D[3553] = se(3553, 3553, 1)),
    (D[34067] = se(34067, 34069, 6)),
    o.setClear(0, 0, 0, 1),
    c.setClear(1),
    l.setClear(0),
    ae(2929),
    c.setFunc(Aa),
    et(!1),
    It(ho),
    ae(2884),
    at(Vn);
  function ae(L) {
    u[L] !== !0 && (r.enable(L), (u[L] = !0));
  }
  function me(L) {
    u[L] !== !1 && (r.disable(L), (u[L] = !1));
  }
  function ge(L, j) {
    return p[L] !== j
      ? (r.bindFramebuffer(L, j),
        (p[L] = j),
        n && (L === 36009 && (p[36160] = j), L === 36160 && (p[36009] = j)),
        !0)
      : !1;
  }
  function ue(L, j) {
    let te = d,
      de = !1;
    if (L)
      if (
        ((te = m.get(j)),
        te === void 0 && ((te = []), m.set(j, te)),
        L.isWebGLMultipleRenderTargets)
      ) {
        const Ee = L.texture;
        if (te.length !== Ee.length || te[0] !== 36064) {
          for (let Ye = 0, mt = Ee.length; Ye < mt; Ye++) te[Ye] = 36064 + Ye;
          (te.length = Ee.length), (de = !0);
        }
      } else te[0] !== 36064 && ((te[0] = 36064), (de = !0));
    else te[0] !== 1029 && ((te[0] = 1029), (de = !0));
    de &&
      (t.isWebGL2
        ? r.drawBuffers(te)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te));
  }
  function je(L) {
    return A !== L ? (r.useProgram(L), (A = L), !0) : !1;
  }
  const ve = { [Li]: 32774, [th]: 32778, [nh]: 32779 };
  if (n) (ve[go] = 32775), (ve[mo] = 32776);
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && ((ve[go] = L.MIN_EXT), (ve[mo] = L.MAX_EXT));
  }
  const Ce = {
    [ih]: 0,
    [sh]: 1,
    [rh]: 768,
    [Tl]: 770,
    [hh]: 776,
    [lh]: 774,
    [oh]: 772,
    [ah]: 769,
    [Dl]: 771,
    [uh]: 775,
    [ch]: 773,
  };
  function at(L, j, te, de, Ee, Ye, mt, St) {
    if (L === Vn) {
      g === !0 && (me(3042), (g = !1));
      return;
    }
    if ((g === !1 && (ae(3042), (g = !0)), L !== eh)) {
      if (L !== _ || St !== w) {
        if (
          ((b !== Li || v !== Li) &&
            (r.blendEquation(32774), (b = Li), (v = Li)),
          St)
        )
          switch (L) {
            case Pi:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case fo:
              r.blendFunc(1, 1);
              break;
            case Ao:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case po:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case Pi:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case fo:
              r.blendFunc(770, 1);
              break;
            case Ao:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case po:
              r.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        (E = null), (C = null), (T = null), (x = null), (_ = L), (w = St);
      }
      return;
    }
    (Ee = Ee || j),
      (Ye = Ye || te),
      (mt = mt || de),
      (j !== b || Ee !== v) &&
        (r.blendEquationSeparate(ve[j], ve[Ee]), (b = j), (v = Ee)),
      (te !== E || de !== C || Ye !== T || mt !== x) &&
        (r.blendFuncSeparate(Ce[te], Ce[de], Ce[Ye], Ce[mt]),
        (E = te),
        (C = de),
        (T = Ye),
        (x = mt)),
      (_ = L),
      (w = !1);
  }
  function X(L, j) {
    L.side === Rn ? me(2884) : ae(2884);
    let te = L.side === jt;
    j && (te = !te),
      et(te),
      L.blending === Pi && L.transparent === !1
        ? at(Vn)
        : at(
            L.blending,
            L.blendEquation,
            L.blendSrc,
            L.blendDst,
            L.blendEquationAlpha,
            L.blendSrcAlpha,
            L.blendDstAlpha,
            L.premultipliedAlpha
          ),
      c.setFunc(L.depthFunc),
      c.setTest(L.depthTest),
      c.setMask(L.depthWrite),
      o.setMask(L.colorWrite);
    const de = L.stencilWrite;
    l.setTest(de),
      de &&
        (l.setMask(L.stencilWriteMask),
        l.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask),
        l.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)),
      qe(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits),
      L.alphaToCoverage === !0 ? ae(32926) : me(32926);
  }
  function et(L) {
    B !== L && (L ? r.frontFace(2304) : r.frontFace(2305), (B = L));
  }
  function It(L) {
    L !== Zu
      ? (ae(2884),
        L !== G &&
          (L === ho
            ? r.cullFace(1029)
            : L === $u
            ? r.cullFace(1028)
            : r.cullFace(1032)))
      : me(2884),
      (G = L);
  }
  function it(L) {
    L !== H && (Y && r.lineWidth(L), (H = L));
  }
  function qe(L, j, te) {
    L
      ? (ae(32823),
        (P !== j || Q !== te) && (r.polygonOffset(j, te), (P = j), (Q = te)))
      : me(32823);
  }
  function Yt(L) {
    L ? ae(3089) : me(3089);
  }
  function kt(L) {
    L === void 0 && (L = 33984 + z - 1),
      ee !== L && (r.activeTexture(L), (ee = L));
  }
  function S(L, j, te) {
    te === void 0 && (ee === null ? (te = 33984 + z - 1) : (te = ee));
    let de = Z[te];
    de === void 0 && ((de = { type: void 0, texture: void 0 }), (Z[te] = de)),
      (de.type !== L || de.texture !== j) &&
        (ee !== te && (r.activeTexture(te), (ee = te)),
        r.bindTexture(L, j || D[L]),
        (de.type = L),
        (de.texture = j));
  }
  function I() {
    const L = Z[ee];
    L !== void 0 &&
      L.type !== void 0 &&
      (r.bindTexture(L.type, null), (L.type = void 0), (L.texture = void 0));
  }
  function V() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ne() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function le() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ie() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function M() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function F() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function fe() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function pe() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function he() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function _e(L) {
    $.equals(L) === !1 && (r.scissor(L.x, L.y, L.z, L.w), $.copy(L));
  }
  function be(L) {
    ie.equals(L) === !1 && (r.viewport(L.x, L.y, L.z, L.w), ie.copy(L));
  }
  function ke(L, j) {
    let te = h.get(j);
    te === void 0 && ((te = new WeakMap()), h.set(j, te));
    let de = te.get(L);
    de === void 0 && ((de = r.getUniformBlockIndex(j, L.name)), te.set(L, de));
  }
  function Ue(L, j) {
    const de = h.get(j).get(L);
    f.get(j) !== de &&
      (r.uniformBlockBinding(j, de, L.__bindingPointIndex), f.set(j, de));
  }
  function Je() {
    r.disable(3042),
      r.disable(2884),
      r.disable(2929),
      r.disable(32823),
      r.disable(3089),
      r.disable(2960),
      r.disable(32926),
      r.blendEquation(32774),
      r.blendFunc(1, 0),
      r.blendFuncSeparate(1, 0, 1, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(513),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(519, 0, 4294967295),
      r.stencilOp(7680, 7680, 7680),
      r.clearStencil(0),
      r.cullFace(1029),
      r.frontFace(2305),
      r.polygonOffset(0, 0),
      r.activeTexture(33984),
      r.bindFramebuffer(36160, null),
      n === !0 &&
        (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (u = {}),
      (ee = null),
      (Z = {}),
      (p = {}),
      (m = new WeakMap()),
      (d = []),
      (A = null),
      (g = !1),
      (_ = null),
      (b = null),
      (E = null),
      (C = null),
      (v = null),
      (T = null),
      (x = null),
      (w = !1),
      (B = null),
      (G = null),
      (H = null),
      (P = null),
      (Q = null),
      $.set(0, 0, r.canvas.width, r.canvas.height),
      ie.set(0, 0, r.canvas.width, r.canvas.height),
      o.reset(),
      c.reset(),
      l.reset();
  }
  return {
    buffers: { color: o, depth: c, stencil: l },
    enable: ae,
    disable: me,
    bindFramebuffer: ge,
    drawBuffers: ue,
    useProgram: je,
    setBlending: at,
    setMaterial: X,
    setFlipSided: et,
    setCullFace: It,
    setLineWidth: it,
    setPolygonOffset: qe,
    setScissorTest: Yt,
    activeTexture: kt,
    bindTexture: S,
    unbindTexture: I,
    compressedTexImage2D: V,
    compressedTexImage3D: ne,
    texImage2D: pe,
    texImage3D: he,
    updateUBOMapping: ke,
    uniformBlockBinding: Ue,
    texStorage2D: F,
    texStorage3D: fe,
    texSubImage2D: re,
    texSubImage3D: le,
    compressedTexSubImage2D: Ie,
    compressedTexSubImage3D: M,
    scissor: _e,
    viewport: be,
    reset: Je,
  };
}
function Wg(r, e, t, n, i, s, a) {
  const o = i.isWebGL2,
    c = i.maxTextures,
    l = i.maxCubemapSize,
    f = i.maxTextureSize,
    h = i.maxSamples,
    u = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    p =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    m = new WeakMap();
  let d;
  const A = new WeakMap();
  let g = !1;
  try {
    g =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function _(S, I) {
    return g ? new OffscreenCanvas(S, I) : Cs("canvas");
  }
  function b(S, I, V, ne) {
    let re = 1;
    if (
      ((S.width > ne || S.height > ne) &&
        (re = ne / Math.max(S.width, S.height)),
      re < 1 || I === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && S instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && S instanceof ImageBitmap)
      ) {
        const le = I ? or : Math.floor,
          Ie = le(re * S.width),
          M = le(re * S.height);
        d === void 0 && (d = _(Ie, M));
        const F = V ? _(Ie, M) : d;
        return (
          (F.width = Ie),
          (F.height = M),
          F.getContext("2d").drawImage(S, 0, 0, Ie, M),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              S.width +
              "x" +
              S.height +
              ") to (" +
              Ie +
              "x" +
              M +
              ")."
          ),
          F
        );
      } else
        return (
          "data" in S &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                S.width +
                "x" +
                S.height +
                ")."
            ),
          S
        );
    return S;
  }
  function E(S) {
    return wa(S.width) && wa(S.height);
  }
  function C(S) {
    return o
      ? !1
      : S.wrapS !== Ht ||
          S.wrapT !== Ht ||
          (S.minFilter !== Et && S.minFilter !== Bt);
  }
  function v(S, I) {
    return S.generateMipmaps && I && S.minFilter !== Et && S.minFilter !== Bt;
  }
  function T(S) {
    r.generateMipmap(S);
  }
  function x(S, I, V, ne, re = !1) {
    if (o === !1) return I;
    if (S !== null) {
      if (r[S] !== void 0) return r[S];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          S +
          "'"
      );
    }
    let le = I;
    return (
      I === 6403 &&
        (V === 5126 && (le = 33326),
        V === 5131 && (le = 33325),
        V === 5121 && (le = 33321)),
      I === 33319 &&
        (V === 5126 && (le = 33328),
        V === 5131 && (le = 33327),
        V === 5121 && (le = 33323)),
      I === 6408 &&
        (V === 5126 && (le = 34836),
        V === 5131 && (le = 34842),
        V === 5121 && (le = ne === Ne && re === !1 ? 35907 : 32856),
        V === 32819 && (le = 32854),
        V === 32820 && (le = 32855)),
      (le === 33325 ||
        le === 33326 ||
        le === 33327 ||
        le === 33328 ||
        le === 34842 ||
        le === 34836) &&
        e.get("EXT_color_buffer_float"),
      le
    );
  }
  function w(S, I, V) {
    return v(S, V) === !0 ||
      (S.isFramebufferTexture && S.minFilter !== Et && S.minFilter !== Bt)
      ? Math.log2(Math.max(I.width, I.height)) + 1
      : S.mipmaps !== void 0 && S.mipmaps.length > 0
      ? S.mipmaps.length
      : S.isCompressedTexture && Array.isArray(S.image)
      ? I.mipmaps.length
      : 1;
  }
  function B(S) {
    return S === Et || S === ma || S === $s ? 9728 : 9729;
  }
  function G(S) {
    const I = S.target;
    I.removeEventListener("dispose", G), P(I), I.isVideoTexture && m.delete(I);
  }
  function H(S) {
    const I = S.target;
    I.removeEventListener("dispose", H), z(I);
  }
  function P(S) {
    const I = n.get(S);
    if (I.__webglInit === void 0) return;
    const V = S.source,
      ne = A.get(V);
    if (ne) {
      const re = ne[I.__cacheKey];
      re.usedTimes--,
        re.usedTimes === 0 && Q(S),
        Object.keys(ne).length === 0 && A.delete(V);
    }
    n.remove(S);
  }
  function Q(S) {
    const I = n.get(S);
    r.deleteTexture(I.__webglTexture);
    const V = S.source,
      ne = A.get(V);
    delete ne[I.__cacheKey], a.memory.textures--;
  }
  function z(S) {
    const I = S.texture,
      V = n.get(S),
      ne = n.get(I);
    if (
      (ne.__webglTexture !== void 0 &&
        (r.deleteTexture(ne.__webglTexture), a.memory.textures--),
      S.depthTexture && S.depthTexture.dispose(),
      S.isWebGLCubeRenderTarget)
    )
      for (let re = 0; re < 6; re++)
        r.deleteFramebuffer(V.__webglFramebuffer[re]),
          V.__webglDepthbuffer &&
            r.deleteRenderbuffer(V.__webglDepthbuffer[re]);
    else {
      if (
        (r.deleteFramebuffer(V.__webglFramebuffer),
        V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer),
        V.__webglMultisampledFramebuffer &&
          r.deleteFramebuffer(V.__webglMultisampledFramebuffer),
        V.__webglColorRenderbuffer)
      )
        for (let re = 0; re < V.__webglColorRenderbuffer.length; re++)
          V.__webglColorRenderbuffer[re] &&
            r.deleteRenderbuffer(V.__webglColorRenderbuffer[re]);
      V.__webglDepthRenderbuffer &&
        r.deleteRenderbuffer(V.__webglDepthRenderbuffer);
    }
    if (S.isWebGLMultipleRenderTargets)
      for (let re = 0, le = I.length; re < le; re++) {
        const Ie = n.get(I[re]);
        Ie.__webglTexture &&
          (r.deleteTexture(Ie.__webglTexture), a.memory.textures--),
          n.remove(I[re]);
      }
    n.remove(I), n.remove(S);
  }
  let Y = 0;
  function K() {
    Y = 0;
  }
  function O() {
    const S = Y;
    return (
      S >= c &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            S +
            " texture units while this GPU supports only " +
            c
        ),
      (Y += 1),
      S
    );
  }
  function ee(S) {
    const I = [];
    return (
      I.push(S.wrapS),
      I.push(S.wrapT),
      I.push(S.wrapR || 0),
      I.push(S.magFilter),
      I.push(S.minFilter),
      I.push(S.anisotropy),
      I.push(S.internalFormat),
      I.push(S.format),
      I.push(S.type),
      I.push(S.generateMipmaps),
      I.push(S.premultiplyAlpha),
      I.push(S.flipY),
      I.push(S.unpackAlignment),
      I.push(S.encoding),
      I.join()
    );
  }
  function Z(S, I) {
    const V = n.get(S);
    if (
      (S.isVideoTexture && Yt(S),
      S.isRenderTargetTexture === !1 &&
        S.version > 0 &&
        V.__version !== S.version)
    ) {
      const ne = S.image;
      if (ne === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (ne.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        me(V, S, I);
        return;
      }
    }
    t.bindTexture(3553, V.__webglTexture, 33984 + I);
  }
  function W(S, I) {
    const V = n.get(S);
    if (S.version > 0 && V.__version !== S.version) {
      me(V, S, I);
      return;
    }
    t.bindTexture(35866, V.__webglTexture, 33984 + I);
  }
  function U(S, I) {
    const V = n.get(S);
    if (S.version > 0 && V.__version !== S.version) {
      me(V, S, I);
      return;
    }
    t.bindTexture(32879, V.__webglTexture, 33984 + I);
  }
  function $(S, I) {
    const V = n.get(S);
    if (S.version > 0 && V.__version !== S.version) {
      ge(V, S, I);
      return;
    }
    t.bindTexture(34067, V.__webglTexture, 33984 + I);
  }
  const ie = { [Oi]: 10497, [Ht]: 33071, [ar]: 33648 },
    se = {
      [Et]: 9728,
      [ma]: 9984,
      [$s]: 9986,
      [Bt]: 9729,
      [Pl]: 9985,
      [Wn]: 9987,
    };
  function D(S, I, V) {
    if (
      (V
        ? (r.texParameteri(S, 10242, ie[I.wrapS]),
          r.texParameteri(S, 10243, ie[I.wrapT]),
          (S === 32879 || S === 35866) &&
            r.texParameteri(S, 32882, ie[I.wrapR]),
          r.texParameteri(S, 10240, se[I.magFilter]),
          r.texParameteri(S, 10241, se[I.minFilter]))
        : (r.texParameteri(S, 10242, 33071),
          r.texParameteri(S, 10243, 33071),
          (S === 32879 || S === 35866) && r.texParameteri(S, 32882, 33071),
          (I.wrapS !== Ht || I.wrapT !== Ht) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          r.texParameteri(S, 10240, B(I.magFilter)),
          r.texParameteri(S, 10241, B(I.minFilter)),
          I.minFilter !== Et &&
            I.minFilter !== Bt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const ne = e.get("EXT_texture_filter_anisotropic");
      if (
        I.magFilter === Et ||
        (I.minFilter !== $s && I.minFilter !== Wn) ||
        (I.type === Zt && e.has("OES_texture_float_linear") === !1) ||
        (o === !1 &&
          I.type === Qn &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (I.anisotropy > 1 || n.get(I).__currentAnisotropy) &&
        (r.texParameterf(
          S,
          ne.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(I.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(I).__currentAnisotropy = I.anisotropy));
    }
  }
  function ae(S, I) {
    let V = !1;
    S.__webglInit === void 0 &&
      ((S.__webglInit = !0), I.addEventListener("dispose", G));
    const ne = I.source;
    let re = A.get(ne);
    re === void 0 && ((re = {}), A.set(ne, re));
    const le = ee(I);
    if (le !== S.__cacheKey) {
      re[le] === void 0 &&
        ((re[le] = { texture: r.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (V = !0)),
        re[le].usedTimes++;
      const Ie = re[S.__cacheKey];
      Ie !== void 0 &&
        (re[S.__cacheKey].usedTimes--, Ie.usedTimes === 0 && Q(I)),
        (S.__cacheKey = le),
        (S.__webglTexture = re[le].texture);
    }
    return V;
  }
  function me(S, I, V) {
    let ne = 3553;
    (I.isDataArrayTexture || I.isCompressedArrayTexture) && (ne = 35866),
      I.isData3DTexture && (ne = 32879);
    const re = ae(S, I),
      le = I.source;
    t.bindTexture(ne, S.__webglTexture, 33984 + V);
    const Ie = n.get(le);
    if (le.version !== Ie.__version || re === !0) {
      t.activeTexture(33984 + V),
        r.pixelStorei(37440, I.flipY),
        r.pixelStorei(37441, I.premultiplyAlpha),
        r.pixelStorei(3317, I.unpackAlignment),
        r.pixelStorei(37443, 0);
      const M = C(I) && E(I.image) === !1;
      let F = b(I.image, M, !1, f);
      F = kt(I, F);
      const fe = E(F) || o,
        pe = s.convert(I.format, I.encoding);
      let he = s.convert(I.type),
        _e = x(I.internalFormat, pe, he, I.encoding, I.isVideoTexture);
      D(ne, I, fe);
      let be;
      const ke = I.mipmaps,
        Ue = o && I.isVideoTexture !== !0,
        Je = Ie.__version === void 0 || re === !0,
        L = w(I, F, fe);
      if (I.isDepthTexture)
        (_e = 6402),
          o
            ? I.type === Zt
              ? (_e = 36012)
              : I.type === ci
              ? (_e = 33190)
              : I.type === Fi
              ? (_e = 35056)
              : (_e = 33189)
            : I.type === Zt &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          I.format === ui &&
            _e === 6402 &&
            I.type !== Fl &&
            I.type !== ci &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (I.type = ci),
            (he = s.convert(I.type))),
          I.format === zi &&
            _e === 6402 &&
            ((_e = 34041),
            I.type !== Fi &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (I.type = Fi),
              (he = s.convert(I.type)))),
          Je &&
            (Ue
              ? t.texStorage2D(3553, 1, _e, F.width, F.height)
              : t.texImage2D(3553, 0, _e, F.width, F.height, 0, pe, he, null));
      else if (I.isDataTexture)
        if (ke.length > 0 && fe) {
          Ue && Je && t.texStorage2D(3553, L, _e, ke[0].width, ke[0].height);
          for (let j = 0, te = ke.length; j < te; j++)
            (be = ke[j]),
              Ue
                ? t.texSubImage2D(
                    3553,
                    j,
                    0,
                    0,
                    be.width,
                    be.height,
                    pe,
                    he,
                    be.data
                  )
                : t.texImage2D(
                    3553,
                    j,
                    _e,
                    be.width,
                    be.height,
                    0,
                    pe,
                    he,
                    be.data
                  );
          I.generateMipmaps = !1;
        } else
          Ue
            ? (Je && t.texStorage2D(3553, L, _e, F.width, F.height),
              t.texSubImage2D(3553, 0, 0, 0, F.width, F.height, pe, he, F.data))
            : t.texImage2D(3553, 0, _e, F.width, F.height, 0, pe, he, F.data);
      else if (I.isCompressedTexture)
        if (I.isCompressedArrayTexture) {
          Ue &&
            Je &&
            t.texStorage3D(35866, L, _e, ke[0].width, ke[0].height, F.depth);
          for (let j = 0, te = ke.length; j < te; j++)
            (be = ke[j]),
              I.format !== vt
                ? pe !== null
                  ? Ue
                    ? t.compressedTexSubImage3D(
                        35866,
                        j,
                        0,
                        0,
                        0,
                        be.width,
                        be.height,
                        F.depth,
                        pe,
                        be.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        35866,
                        j,
                        _e,
                        be.width,
                        be.height,
                        F.depth,
                        0,
                        be.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Ue
                ? t.texSubImage3D(
                    35866,
                    j,
                    0,
                    0,
                    0,
                    be.width,
                    be.height,
                    F.depth,
                    pe,
                    he,
                    be.data
                  )
                : t.texImage3D(
                    35866,
                    j,
                    _e,
                    be.width,
                    be.height,
                    F.depth,
                    0,
                    pe,
                    he,
                    be.data
                  );
        } else {
          Ue && Je && t.texStorage2D(3553, L, _e, ke[0].width, ke[0].height);
          for (let j = 0, te = ke.length; j < te; j++)
            (be = ke[j]),
              I.format !== vt
                ? pe !== null
                  ? Ue
                    ? t.compressedTexSubImage2D(
                        3553,
                        j,
                        0,
                        0,
                        be.width,
                        be.height,
                        pe,
                        be.data
                      )
                    : t.compressedTexImage2D(
                        3553,
                        j,
                        _e,
                        be.width,
                        be.height,
                        0,
                        be.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Ue
                ? t.texSubImage2D(
                    3553,
                    j,
                    0,
                    0,
                    be.width,
                    be.height,
                    pe,
                    he,
                    be.data
                  )
                : t.texImage2D(
                    3553,
                    j,
                    _e,
                    be.width,
                    be.height,
                    0,
                    pe,
                    he,
                    be.data
                  );
        }
      else if (I.isDataArrayTexture)
        Ue
          ? (Je && t.texStorage3D(35866, L, _e, F.width, F.height, F.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              F.width,
              F.height,
              F.depth,
              pe,
              he,
              F.data
            ))
          : t.texImage3D(
              35866,
              0,
              _e,
              F.width,
              F.height,
              F.depth,
              0,
              pe,
              he,
              F.data
            );
      else if (I.isData3DTexture)
        Ue
          ? (Je && t.texStorage3D(32879, L, _e, F.width, F.height, F.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              F.width,
              F.height,
              F.depth,
              pe,
              he,
              F.data
            ))
          : t.texImage3D(
              32879,
              0,
              _e,
              F.width,
              F.height,
              F.depth,
              0,
              pe,
              he,
              F.data
            );
      else if (I.isFramebufferTexture) {
        if (Je)
          if (Ue) t.texStorage2D(3553, L, _e, F.width, F.height);
          else {
            let j = F.width,
              te = F.height;
            for (let de = 0; de < L; de++)
              t.texImage2D(3553, de, _e, j, te, 0, pe, he, null),
                (j >>= 1),
                (te >>= 1);
          }
      } else if (ke.length > 0 && fe) {
        Ue && Je && t.texStorage2D(3553, L, _e, ke[0].width, ke[0].height);
        for (let j = 0, te = ke.length; j < te; j++)
          (be = ke[j]),
            Ue
              ? t.texSubImage2D(3553, j, 0, 0, pe, he, be)
              : t.texImage2D(3553, j, _e, pe, he, be);
        I.generateMipmaps = !1;
      } else
        Ue
          ? (Je && t.texStorage2D(3553, L, _e, F.width, F.height),
            t.texSubImage2D(3553, 0, 0, 0, pe, he, F))
          : t.texImage2D(3553, 0, _e, pe, he, F);
      v(I, fe) && T(ne),
        (Ie.__version = le.version),
        I.onUpdate && I.onUpdate(I);
    }
    S.__version = I.version;
  }
  function ge(S, I, V) {
    if (I.image.length !== 6) return;
    const ne = ae(S, I),
      re = I.source;
    t.bindTexture(34067, S.__webglTexture, 33984 + V);
    const le = n.get(re);
    if (re.version !== le.__version || ne === !0) {
      t.activeTexture(33984 + V),
        r.pixelStorei(37440, I.flipY),
        r.pixelStorei(37441, I.premultiplyAlpha),
        r.pixelStorei(3317, I.unpackAlignment),
        r.pixelStorei(37443, 0);
      const Ie = I.isCompressedTexture || I.image[0].isCompressedTexture,
        M = I.image[0] && I.image[0].isDataTexture,
        F = [];
      for (let j = 0; j < 6; j++)
        !Ie && !M
          ? (F[j] = b(I.image[j], !1, !0, l))
          : (F[j] = M ? I.image[j].image : I.image[j]),
          (F[j] = kt(I, F[j]));
      const fe = F[0],
        pe = E(fe) || o,
        he = s.convert(I.format, I.encoding),
        _e = s.convert(I.type),
        be = x(I.internalFormat, he, _e, I.encoding),
        ke = o && I.isVideoTexture !== !0,
        Ue = le.__version === void 0 || ne === !0;
      let Je = w(I, fe, pe);
      D(34067, I, pe);
      let L;
      if (Ie) {
        ke && Ue && t.texStorage2D(34067, Je, be, fe.width, fe.height);
        for (let j = 0; j < 6; j++) {
          L = F[j].mipmaps;
          for (let te = 0; te < L.length; te++) {
            const de = L[te];
            I.format !== vt
              ? he !== null
                ? ke
                  ? t.compressedTexSubImage2D(
                      34069 + j,
                      te,
                      0,
                      0,
                      de.width,
                      de.height,
                      he,
                      de.data
                    )
                  : t.compressedTexImage2D(
                      34069 + j,
                      te,
                      be,
                      de.width,
                      de.height,
                      0,
                      de.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : ke
              ? t.texSubImage2D(
                  34069 + j,
                  te,
                  0,
                  0,
                  de.width,
                  de.height,
                  he,
                  _e,
                  de.data
                )
              : t.texImage2D(
                  34069 + j,
                  te,
                  be,
                  de.width,
                  de.height,
                  0,
                  he,
                  _e,
                  de.data
                );
          }
        }
      } else {
        (L = I.mipmaps),
          ke &&
            Ue &&
            (L.length > 0 && Je++,
            t.texStorage2D(34067, Je, be, F[0].width, F[0].height));
        for (let j = 0; j < 6; j++)
          if (M) {
            ke
              ? t.texSubImage2D(
                  34069 + j,
                  0,
                  0,
                  0,
                  F[j].width,
                  F[j].height,
                  he,
                  _e,
                  F[j].data
                )
              : t.texImage2D(
                  34069 + j,
                  0,
                  be,
                  F[j].width,
                  F[j].height,
                  0,
                  he,
                  _e,
                  F[j].data
                );
            for (let te = 0; te < L.length; te++) {
              const Ee = L[te].image[j].image;
              ke
                ? t.texSubImage2D(
                    34069 + j,
                    te + 1,
                    0,
                    0,
                    Ee.width,
                    Ee.height,
                    he,
                    _e,
                    Ee.data
                  )
                : t.texImage2D(
                    34069 + j,
                    te + 1,
                    be,
                    Ee.width,
                    Ee.height,
                    0,
                    he,
                    _e,
                    Ee.data
                  );
            }
          } else {
            ke
              ? t.texSubImage2D(34069 + j, 0, 0, 0, he, _e, F[j])
              : t.texImage2D(34069 + j, 0, be, he, _e, F[j]);
            for (let te = 0; te < L.length; te++) {
              const de = L[te];
              ke
                ? t.texSubImage2D(34069 + j, te + 1, 0, 0, he, _e, de.image[j])
                : t.texImage2D(34069 + j, te + 1, be, he, _e, de.image[j]);
            }
          }
      }
      v(I, pe) && T(34067),
        (le.__version = re.version),
        I.onUpdate && I.onUpdate(I);
    }
    S.__version = I.version;
  }
  function ue(S, I, V, ne, re) {
    const le = s.convert(V.format, V.encoding),
      Ie = s.convert(V.type),
      M = x(V.internalFormat, le, Ie, V.encoding);
    n.get(I).__hasExternalTextures ||
      (re === 32879 || re === 35866
        ? t.texImage3D(re, 0, M, I.width, I.height, I.depth, 0, le, Ie, null)
        : t.texImage2D(re, 0, M, I.width, I.height, 0, le, Ie, null)),
      t.bindFramebuffer(36160, S),
      qe(I)
        ? u.framebufferTexture2DMultisampleEXT(
            36160,
            ne,
            re,
            n.get(V).__webglTexture,
            0,
            it(I)
          )
        : (re === 3553 || (re >= 34069 && re <= 34074)) &&
          r.framebufferTexture2D(36160, ne, re, n.get(V).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function je(S, I, V) {
    if ((r.bindRenderbuffer(36161, S), I.depthBuffer && !I.stencilBuffer)) {
      let ne = 33189;
      if (V || qe(I)) {
        const re = I.depthTexture;
        re &&
          re.isDepthTexture &&
          (re.type === Zt ? (ne = 36012) : re.type === ci && (ne = 33190));
        const le = it(I);
        qe(I)
          ? u.renderbufferStorageMultisampleEXT(
              36161,
              le,
              ne,
              I.width,
              I.height
            )
          : r.renderbufferStorageMultisample(36161, le, ne, I.width, I.height);
      } else r.renderbufferStorage(36161, ne, I.width, I.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (I.depthBuffer && I.stencilBuffer) {
      const ne = it(I);
      V && qe(I) === !1
        ? r.renderbufferStorageMultisample(36161, ne, 35056, I.width, I.height)
        : qe(I)
        ? u.renderbufferStorageMultisampleEXT(
            36161,
            ne,
            35056,
            I.width,
            I.height
          )
        : r.renderbufferStorage(36161, 34041, I.width, I.height),
        r.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      const ne =
        I.isWebGLMultipleRenderTargets === !0 ? I.texture : [I.texture];
      for (let re = 0; re < ne.length; re++) {
        const le = ne[re],
          Ie = s.convert(le.format, le.encoding),
          M = s.convert(le.type),
          F = x(le.internalFormat, Ie, M, le.encoding),
          fe = it(I);
        V && qe(I) === !1
          ? r.renderbufferStorageMultisample(36161, fe, F, I.width, I.height)
          : qe(I)
          ? u.renderbufferStorageMultisampleEXT(36161, fe, F, I.width, I.height)
          : r.renderbufferStorage(36161, F, I.width, I.height);
      }
    }
    r.bindRenderbuffer(36161, null);
  }
  function ve(S, I) {
    if (I && I.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, S),
      !(I.depthTexture && I.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(I.depthTexture).__webglTexture ||
      I.depthTexture.image.width !== I.width ||
      I.depthTexture.image.height !== I.height) &&
      ((I.depthTexture.image.width = I.width),
      (I.depthTexture.image.height = I.height),
      (I.depthTexture.needsUpdate = !0)),
      Z(I.depthTexture, 0);
    const ne = n.get(I.depthTexture).__webglTexture,
      re = it(I);
    if (I.depthTexture.format === ui)
      qe(I)
        ? u.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ne, 0, re)
        : r.framebufferTexture2D(36160, 36096, 3553, ne, 0);
    else if (I.depthTexture.format === zi)
      qe(I)
        ? u.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ne, 0, re)
        : r.framebufferTexture2D(36160, 33306, 3553, ne, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Ce(S) {
    const I = n.get(S),
      V = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture && !I.__autoAllocateDepthBuffer) {
      if (V)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      ve(I.__webglFramebuffer, S);
    } else if (V) {
      I.__webglDepthbuffer = [];
      for (let ne = 0; ne < 6; ne++)
        t.bindFramebuffer(36160, I.__webglFramebuffer[ne]),
          (I.__webglDepthbuffer[ne] = r.createRenderbuffer()),
          je(I.__webglDepthbuffer[ne], S, !1);
    } else
      t.bindFramebuffer(36160, I.__webglFramebuffer),
        (I.__webglDepthbuffer = r.createRenderbuffer()),
        je(I.__webglDepthbuffer, S, !1);
    t.bindFramebuffer(36160, null);
  }
  function at(S, I, V) {
    const ne = n.get(S);
    I !== void 0 && ue(ne.__webglFramebuffer, S, S.texture, 36064, 3553),
      V !== void 0 && Ce(S);
  }
  function X(S) {
    const I = S.texture,
      V = n.get(S),
      ne = n.get(I);
    S.addEventListener("dispose", H),
      S.isWebGLMultipleRenderTargets !== !0 &&
        (ne.__webglTexture === void 0 &&
          (ne.__webglTexture = r.createTexture()),
        (ne.__version = I.version),
        a.memory.textures++);
    const re = S.isWebGLCubeRenderTarget === !0,
      le = S.isWebGLMultipleRenderTargets === !0,
      Ie = E(S) || o;
    if (re) {
      V.__webglFramebuffer = [];
      for (let M = 0; M < 6; M++)
        V.__webglFramebuffer[M] = r.createFramebuffer();
    } else {
      if (((V.__webglFramebuffer = r.createFramebuffer()), le))
        if (i.drawBuffers) {
          const M = S.texture;
          for (let F = 0, fe = M.length; F < fe; F++) {
            const pe = n.get(M[F]);
            pe.__webglTexture === void 0 &&
              ((pe.__webglTexture = r.createTexture()), a.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (o && S.samples > 0 && qe(S) === !1) {
        const M = le ? I : [I];
        (V.__webglMultisampledFramebuffer = r.createFramebuffer()),
          (V.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer);
        for (let F = 0; F < M.length; F++) {
          const fe = M[F];
          (V.__webglColorRenderbuffer[F] = r.createRenderbuffer()),
            r.bindRenderbuffer(36161, V.__webglColorRenderbuffer[F]);
          const pe = s.convert(fe.format, fe.encoding),
            he = s.convert(fe.type),
            _e = x(
              fe.internalFormat,
              pe,
              he,
              fe.encoding,
              S.isXRRenderTarget === !0
            ),
            be = it(S);
          r.renderbufferStorageMultisample(36161, be, _e, S.width, S.height),
            r.framebufferRenderbuffer(
              36160,
              36064 + F,
              36161,
              V.__webglColorRenderbuffer[F]
            );
        }
        r.bindRenderbuffer(36161, null),
          S.depthBuffer &&
            ((V.__webglDepthRenderbuffer = r.createRenderbuffer()),
            je(V.__webglDepthRenderbuffer, S, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (re) {
      t.bindTexture(34067, ne.__webglTexture), D(34067, I, Ie);
      for (let M = 0; M < 6; M++)
        ue(V.__webglFramebuffer[M], S, I, 36064, 34069 + M);
      v(I, Ie) && T(34067), t.unbindTexture();
    } else if (le) {
      const M = S.texture;
      for (let F = 0, fe = M.length; F < fe; F++) {
        const pe = M[F],
          he = n.get(pe);
        t.bindTexture(3553, he.__webglTexture),
          D(3553, pe, Ie),
          ue(V.__webglFramebuffer, S, pe, 36064 + F, 3553),
          v(pe, Ie) && T(3553);
      }
      t.unbindTexture();
    } else {
      let M = 3553;
      (S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) &&
        (o
          ? (M = S.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(M, ne.__webglTexture),
        D(M, I, Ie),
        ue(V.__webglFramebuffer, S, I, 36064, M),
        v(I, Ie) && T(M),
        t.unbindTexture();
    }
    S.depthBuffer && Ce(S);
  }
  function et(S) {
    const I = E(S) || o,
      V = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
    for (let ne = 0, re = V.length; ne < re; ne++) {
      const le = V[ne];
      if (v(le, I)) {
        const Ie = S.isWebGLCubeRenderTarget ? 34067 : 3553,
          M = n.get(le).__webglTexture;
        t.bindTexture(Ie, M), T(Ie), t.unbindTexture();
      }
    }
  }
  function It(S) {
    if (o && S.samples > 0 && qe(S) === !1) {
      const I = S.isWebGLMultipleRenderTargets ? S.texture : [S.texture],
        V = S.width,
        ne = S.height;
      let re = 16384;
      const le = [],
        Ie = S.stencilBuffer ? 33306 : 36096,
        M = n.get(S),
        F = S.isWebGLMultipleRenderTargets === !0;
      if (F)
        for (let fe = 0; fe < I.length; fe++)
          t.bindFramebuffer(36160, M.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(36160, 36064 + fe, 36161, null),
            t.bindFramebuffer(36160, M.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + fe, 3553, null, 0);
      t.bindFramebuffer(36008, M.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, M.__webglFramebuffer);
      for (let fe = 0; fe < I.length; fe++) {
        le.push(36064 + fe), S.depthBuffer && le.push(Ie);
        const pe =
          M.__ignoreDepthValues !== void 0 ? M.__ignoreDepthValues : !1;
        if (
          (pe === !1 &&
            (S.depthBuffer && (re |= 256), S.stencilBuffer && (re |= 1024)),
          F &&
            r.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              M.__webglColorRenderbuffer[fe]
            ),
          pe === !0 &&
            (r.invalidateFramebuffer(36008, [Ie]),
            r.invalidateFramebuffer(36009, [Ie])),
          F)
        ) {
          const he = n.get(I[fe]).__webglTexture;
          r.framebufferTexture2D(36009, 36064, 3553, he, 0);
        }
        r.blitFramebuffer(0, 0, V, ne, 0, 0, V, ne, re, 9728),
          p && r.invalidateFramebuffer(36008, le);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), F))
        for (let fe = 0; fe < I.length; fe++) {
          t.bindFramebuffer(36160, M.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(
              36160,
              36064 + fe,
              36161,
              M.__webglColorRenderbuffer[fe]
            );
          const pe = n.get(I[fe]).__webglTexture;
          t.bindFramebuffer(36160, M.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + fe, 3553, pe, 0);
        }
      t.bindFramebuffer(36009, M.__webglMultisampledFramebuffer);
    }
  }
  function it(S) {
    return Math.min(h, S.samples);
  }
  function qe(S) {
    const I = n.get(S);
    return (
      o &&
      S.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      I.__useRenderToTexture !== !1
    );
  }
  function Yt(S) {
    const I = a.render.frame;
    m.get(S) !== I && (m.set(S, I), S.update());
  }
  function kt(S, I) {
    const V = S.encoding,
      ne = S.format,
      re = S.type;
    return (
      S.isCompressedTexture === !0 ||
        S.isVideoTexture === !0 ||
        S.format === va ||
        (V !== bn &&
          (V === Ne
            ? o === !1
              ? e.has("EXT_sRGB") === !0 && ne === vt
                ? ((S.format = va),
                  (S.minFilter = Bt),
                  (S.generateMipmaps = !1))
                : (I = Hl.sRGBToLinear(I))
              : (ne !== vt || re !== Ft) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                V
              ))),
      I
    );
  }
  (this.allocateTextureUnit = O),
    (this.resetTextureUnits = K),
    (this.setTexture2D = Z),
    (this.setTexture2DArray = W),
    (this.setTexture3D = U),
    (this.setTextureCube = $),
    (this.rebindTextures = at),
    (this.setupRenderTarget = X),
    (this.updateRenderTargetMipmap = et),
    (this.updateMultisampleRenderTarget = It),
    (this.setupDepthRenderbuffer = Ce),
    (this.setupFrameBufferTexture = ue),
    (this.useMultisampledRTT = qe);
}
function jg(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = null) {
    let o;
    if (s === Ft) return 5121;
    if (s === Mh) return 32819;
    if (s === Bh) return 32820;
    if (s === vh) return 5120;
    if (s === wh) return 5122;
    if (s === Fl) return 5123;
    if (s === Sh) return 5124;
    if (s === ci) return 5125;
    if (s === Zt) return 5126;
    if (s === Qn)
      return n
        ? 5131
        : ((o = e.get("OES_texture_half_float")),
          o !== null ? o.HALF_FLOAT_OES : null);
    if (s === Th) return 6406;
    if (s === vt) return 6408;
    if (s === Dh) return 6409;
    if (s === Rh) return 6410;
    if (s === ui) return 6402;
    if (s === zi) return 34041;
    if (s === va)
      return (o = e.get("EXT_sRGB")), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === fs) return 6403;
    if (s === Lh) return 36244;
    if (s === ds) return 33319;
    if (s === Qh) return 33320;
    if (s === Ph) return 36249;
    if (s === er || s === wr || s === Sr || s === tr)
      if (a === Ne)
        if (((o = e.get("WEBGL_compressed_texture_s3tc_srgb")), o !== null)) {
          if (s === er) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === wr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Sr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === tr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get("WEBGL_compressed_texture_s3tc")), o !== null)) {
        if (s === er) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === wr) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Sr) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === tr) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === ba || s === bo || s === _a || s === _o)
      if (((o = e.get("WEBGL_compressed_texture_pvrtc")), o !== null)) {
        if (s === ba) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === bo) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === _a) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === _o) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === kl)
      return (
        (o = e.get("WEBGL_compressed_texture_etc1")),
        o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === Ea || s === xa)
      if (((o = e.get("WEBGL_compressed_texture_etc")), o !== null)) {
        if (s === Ea)
          return a === Ne ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === xa)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === Ca ||
      s === Eo ||
      s === xo ||
      s === Co ||
      s === Io ||
      s === yo ||
      s === vo ||
      s === wo ||
      s === So ||
      s === Mo ||
      s === Bo ||
      s === To ||
      s === Do ||
      s === Ro
    )
      if (((o = e.get("WEBGL_compressed_texture_astc")), o !== null)) {
        if (s === Ca)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Eo)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === xo)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Co)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Io)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === yo)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === vo)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === wo)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === So)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Mo)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Bo)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === To)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Do)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Ro)
          return a === Ne
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === nr)
      if (((o = e.get("EXT_texture_compression_bptc")), o !== null)) {
        if (s === nr)
          return a === Ne
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    if (s === Fh || s === Lo || s === Qo || s === Po)
      if (((o = e.get("EXT_texture_compression_rgtc")), o !== null)) {
        if (s === nr) return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === Lo) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Qo) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Po) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return s === Fi
      ? n
        ? 34042
        : ((o = e.get("WEBGL_depth_texture")),
          o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
      : r[s] !== void 0
      ? r[s]
      : null;
  }
  return { convert: i };
}
class qg extends yt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Hn extends $e {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Yg = { type: "move" };
class $r {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Hn()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Hn()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new R()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new R())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Hn()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new R()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new R())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      s = null,
      a = null;
    const o = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const d of e.hand.values()) {
          const A = t.getJointPose(d, n),
            g = this._getHandJoint(l, d);
          A !== null &&
            (g.matrix.fromArray(A.transform.matrix),
            g.matrix.decompose(g.position, g.rotation, g.scale),
            (g.jointRadius = A.radius)),
            (g.visible = A !== null);
        }
        const f = l.joints["index-finger-tip"],
          h = l.joints["thumb-tip"],
          u = f.position.distanceTo(h.position),
          p = 0.02,
          m = 0.005;
        l.inputState.pinching && u > p + m
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            u <= p - m &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (c.matrix.fromArray(s.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            s.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(s.linearVelocity))
              : (c.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(s.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      o !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && s !== null && (i = s),
        i !== null &&
          (o.matrix.fromArray(i.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          i.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(i.linearVelocity))
            : (o.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(i.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Yg)));
    }
    return (
      o !== null && (o.visible = i !== null),
      c !== null && (c.visible = s !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Hn();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Kg extends Ct {
  constructor(e, t, n, i, s, a, o, c, l, f) {
    if (((f = f !== void 0 ? f : ui), f !== ui && f !== zi))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && f === ui && (n = ci),
      n === void 0 && f === zi && (n = Fi),
      super(null, i, s, a, o, c, f, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : Et),
      (this.minFilter = c !== void 0 ? c : Et),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Jg extends Ai {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      s = 1,
      a = null,
      o = "local-floor",
      c = 1,
      l = null,
      f = null,
      h = null,
      u = null,
      p = null,
      m = null;
    const d = t.getContextAttributes();
    let A = null,
      g = null;
    const _ = [],
      b = [],
      E = new Set(),
      C = new Map(),
      v = new yt();
    v.layers.enable(1), (v.viewport = new Ze());
    const T = new yt();
    T.layers.enable(2), (T.viewport = new Ze());
    const x = [v, T],
      w = new qg();
    w.layers.enable(1), w.layers.enable(2);
    let B = null,
      G = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (U) {
        let $ = _[U];
        return (
          $ === void 0 && (($ = new $r()), (_[U] = $)), $.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (U) {
        let $ = _[U];
        return $ === void 0 && (($ = new $r()), (_[U] = $)), $.getGripSpace();
      }),
      (this.getHand = function (U) {
        let $ = _[U];
        return $ === void 0 && (($ = new $r()), (_[U] = $)), $.getHandSpace();
      });
    function H(U) {
      const $ = b.indexOf(U.inputSource);
      if ($ === -1) return;
      const ie = _[$];
      ie !== void 0 && ie.dispatchEvent({ type: U.type, data: U.inputSource });
    }
    function P() {
      i.removeEventListener("select", H),
        i.removeEventListener("selectstart", H),
        i.removeEventListener("selectend", H),
        i.removeEventListener("squeeze", H),
        i.removeEventListener("squeezestart", H),
        i.removeEventListener("squeezeend", H),
        i.removeEventListener("end", P),
        i.removeEventListener("inputsourceschange", Q);
      for (let U = 0; U < _.length; U++) {
        const $ = b[U];
        $ !== null && ((b[U] = null), _[U].disconnect($));
      }
      (B = null),
        (G = null),
        e.setRenderTarget(A),
        (p = null),
        (u = null),
        (h = null),
        (i = null),
        (g = null),
        W.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (U) {
      (s = U),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (U) {
        (o = U),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (U) {
        l = U;
      }),
      (this.getBaseLayer = function () {
        return u !== null ? u : p;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return m;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (U) {
        if (((i = U), i !== null)) {
          if (
            ((A = e.getRenderTarget()),
            i.addEventListener("select", H),
            i.addEventListener("selectstart", H),
            i.addEventListener("selectend", H),
            i.addEventListener("squeeze", H),
            i.addEventListener("squeezestart", H),
            i.addEventListener("squeezeend", H),
            i.addEventListener("end", P),
            i.addEventListener("inputsourceschange", Q),
            d.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const $ = {
              antialias: i.renderState.layers === void 0 ? d.antialias : !0,
              alpha: d.alpha,
              depth: d.depth,
              stencil: d.stencil,
              framebufferScaleFactor: s,
            };
            (p = new XRWebGLLayer(i, t, $)),
              i.updateRenderState({ baseLayer: p }),
              (g = new jn(p.framebufferWidth, p.framebufferHeight, {
                format: vt,
                type: Ft,
                encoding: e.outputEncoding,
                stencilBuffer: d.stencil,
              }));
          } else {
            let $ = null,
              ie = null,
              se = null;
            d.depth &&
              ((se = d.stencil ? 35056 : 33190),
              ($ = d.stencil ? zi : ui),
              (ie = d.stencil ? Fi : ci));
            const D = { colorFormat: 32856, depthFormat: se, scaleFactor: s };
            (h = new XRWebGLBinding(i, t)),
              (u = h.createProjectionLayer(D)),
              i.updateRenderState({ layers: [u] }),
              (g = new jn(u.textureWidth, u.textureHeight, {
                format: vt,
                type: Ft,
                depthTexture: new Kg(
                  u.textureWidth,
                  u.textureHeight,
                  ie,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  $
                ),
                stencilBuffer: d.stencil,
                encoding: e.outputEncoding,
                samples: d.antialias ? 4 : 0,
              }));
            const ae = e.properties.get(g);
            ae.__ignoreDepthValues = u.ignoreDepthValues;
          }
          (g.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (a = await i.requestReferenceSpace(o)),
            W.setContext(i),
            W.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function Q(U) {
      for (let $ = 0; $ < U.removed.length; $++) {
        const ie = U.removed[$],
          se = b.indexOf(ie);
        se >= 0 && ((b[se] = null), _[se].disconnect(ie));
      }
      for (let $ = 0; $ < U.added.length; $++) {
        const ie = U.added[$];
        let se = b.indexOf(ie);
        if (se === -1) {
          for (let ae = 0; ae < _.length; ae++)
            if (ae >= b.length) {
              b.push(ie), (se = ae);
              break;
            } else if (b[ae] === null) {
              (b[ae] = ie), (se = ae);
              break;
            }
          if (se === -1) break;
        }
        const D = _[se];
        D && D.connect(ie);
      }
    }
    const z = new R(),
      Y = new R();
    function K(U, $, ie) {
      z.setFromMatrixPosition($.matrixWorld),
        Y.setFromMatrixPosition(ie.matrixWorld);
      const se = z.distanceTo(Y),
        D = $.projectionMatrix.elements,
        ae = ie.projectionMatrix.elements,
        me = D[14] / (D[10] - 1),
        ge = D[14] / (D[10] + 1),
        ue = (D[9] + 1) / D[5],
        je = (D[9] - 1) / D[5],
        ve = (D[8] - 1) / D[0],
        Ce = (ae[8] + 1) / ae[0],
        at = me * ve,
        X = me * Ce,
        et = se / (-ve + Ce),
        It = et * -ve;
      $.matrixWorld.decompose(U.position, U.quaternion, U.scale),
        U.translateX(It),
        U.translateZ(et),
        U.matrixWorld.compose(U.position, U.quaternion, U.scale),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const it = me + et,
        qe = ge + et,
        Yt = at - It,
        kt = X + (se - It),
        S = ((ue * ge) / qe) * it,
        I = ((je * ge) / qe) * it;
      U.projectionMatrix.makePerspective(Yt, kt, S, I, it, qe);
    }
    function O(U, $) {
      $ === null
        ? U.matrixWorld.copy(U.matrix)
        : U.matrixWorld.multiplyMatrices($.matrixWorld, U.matrix),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    (this.updateCamera = function (U) {
      if (i === null) return;
      (w.near = T.near = v.near = U.near),
        (w.far = T.far = v.far = U.far),
        (B !== w.near || G !== w.far) &&
          (i.updateRenderState({ depthNear: w.near, depthFar: w.far }),
          (B = w.near),
          (G = w.far));
      const $ = U.parent,
        ie = w.cameras;
      O(w, $);
      for (let D = 0; D < ie.length; D++) O(ie[D], $);
      w.matrixWorld.decompose(w.position, w.quaternion, w.scale),
        U.matrix.copy(w.matrix),
        U.matrix.decompose(U.position, U.quaternion, U.scale);
      const se = U.children;
      for (let D = 0, ae = se.length; D < ae; D++) se[D].updateMatrixWorld(!0);
      ie.length === 2
        ? K(w, v, T)
        : w.projectionMatrix.copy(v.projectionMatrix);
    }),
      (this.getCamera = function () {
        return w;
      }),
      (this.getFoveation = function () {
        if (!(u === null && p === null)) return c;
      }),
      (this.setFoveation = function (U) {
        (c = U),
          u !== null && (u.fixedFoveation = U),
          p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = U);
      }),
      (this.getPlanes = function () {
        return E;
      });
    let ee = null;
    function Z(U, $) {
      if (((f = $.getViewerPose(l || a)), (m = $), f !== null)) {
        const ie = f.views;
        p !== null &&
          (e.setRenderTargetFramebuffer(g, p.framebuffer),
          e.setRenderTarget(g));
        let se = !1;
        ie.length !== w.cameras.length && ((w.cameras.length = 0), (se = !0));
        for (let D = 0; D < ie.length; D++) {
          const ae = ie[D];
          let me = null;
          if (p !== null) me = p.getViewport(ae);
          else {
            const ue = h.getViewSubImage(u, ae);
            (me = ue.viewport),
              D === 0 &&
                (e.setRenderTargetTextures(
                  g,
                  ue.colorTexture,
                  u.ignoreDepthValues ? void 0 : ue.depthStencilTexture
                ),
                e.setRenderTarget(g));
          }
          let ge = x[D];
          ge === void 0 &&
            ((ge = new yt()),
            ge.layers.enable(D),
            (ge.viewport = new Ze()),
            (x[D] = ge)),
            ge.matrix.fromArray(ae.transform.matrix),
            ge.projectionMatrix.fromArray(ae.projectionMatrix),
            ge.viewport.set(me.x, me.y, me.width, me.height),
            D === 0 && w.matrix.copy(ge.matrix),
            se === !0 && w.cameras.push(ge);
        }
      }
      for (let ie = 0; ie < _.length; ie++) {
        const se = b[ie],
          D = _[ie];
        se !== null && D !== void 0 && D.update(se, $, l || a);
      }
      if ((ee && ee(U, $), $.detectedPlanes)) {
        n.dispatchEvent({ type: "planesdetected", data: $.detectedPlanes });
        let ie = null;
        for (const se of E)
          $.detectedPlanes.has(se) || (ie === null && (ie = []), ie.push(se));
        if (ie !== null)
          for (const se of ie)
            E.delete(se),
              C.delete(se),
              n.dispatchEvent({ type: "planeremoved", data: se });
        for (const se of $.detectedPlanes)
          if (!E.has(se))
            E.add(se),
              C.set(se, $.lastChangedTime),
              n.dispatchEvent({ type: "planeadded", data: se });
          else {
            const D = C.get(se);
            se.lastChangedTime > D &&
              (C.set(se, se.lastChangedTime),
              n.dispatchEvent({ type: "planechanged", data: se }));
          }
      }
      m = null;
    }
    const W = new Xl();
    W.setAnimationLoop(Z),
      (this.setAnimationLoop = function (U) {
        ee = U;
      }),
      (this.dispose = function () {});
  }
}
function Xg(r, e) {
  function t(d, A) {
    A.color.getRGB(d.fogColor.value, Kl(r)),
      A.isFog
        ? ((d.fogNear.value = A.near), (d.fogFar.value = A.far))
        : A.isFogExp2 && (d.fogDensity.value = A.density);
  }
  function n(d, A, g, _, b) {
    A.isMeshBasicMaterial || A.isMeshLambertMaterial
      ? i(d, A)
      : A.isMeshToonMaterial
      ? (i(d, A), f(d, A))
      : A.isMeshPhongMaterial
      ? (i(d, A), l(d, A))
      : A.isMeshStandardMaterial
      ? (i(d, A), h(d, A), A.isMeshPhysicalMaterial && u(d, A, b))
      : A.isMeshMatcapMaterial
      ? (i(d, A), p(d, A))
      : A.isMeshDepthMaterial
      ? i(d, A)
      : A.isMeshDistanceMaterial
      ? (i(d, A), m(d, A))
      : A.isMeshNormalMaterial
      ? i(d, A)
      : A.isLineBasicMaterial
      ? (s(d, A), A.isLineDashedMaterial && a(d, A))
      : A.isPointsMaterial
      ? o(d, A, g, _)
      : A.isSpriteMaterial
      ? c(d, A)
      : A.isShadowMaterial
      ? (d.color.value.copy(A.color), (d.opacity.value = A.opacity))
      : A.isShaderMaterial && (A.uniformsNeedUpdate = !1);
  }
  function i(d, A) {
    (d.opacity.value = A.opacity),
      A.color && d.diffuse.value.copy(A.color),
      A.emissive &&
        d.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),
      A.map && (d.map.value = A.map),
      A.alphaMap && (d.alphaMap.value = A.alphaMap),
      A.bumpMap &&
        ((d.bumpMap.value = A.bumpMap),
        (d.bumpScale.value = A.bumpScale),
        A.side === jt && (d.bumpScale.value *= -1)),
      A.displacementMap &&
        ((d.displacementMap.value = A.displacementMap),
        (d.displacementScale.value = A.displacementScale),
        (d.displacementBias.value = A.displacementBias)),
      A.emissiveMap && (d.emissiveMap.value = A.emissiveMap),
      A.normalMap &&
        ((d.normalMap.value = A.normalMap),
        d.normalScale.value.copy(A.normalScale),
        A.side === jt && d.normalScale.value.negate()),
      A.specularMap && (d.specularMap.value = A.specularMap),
      A.alphaTest > 0 && (d.alphaTest.value = A.alphaTest);
    const g = e.get(A).envMap;
    if (
      (g &&
        ((d.envMap.value = g),
        (d.flipEnvMap.value =
          g.isCubeTexture && g.isRenderTargetTexture === !1 ? -1 : 1),
        (d.reflectivity.value = A.reflectivity),
        (d.ior.value = A.ior),
        (d.refractionRatio.value = A.refractionRatio)),
      A.lightMap)
    ) {
      d.lightMap.value = A.lightMap;
      const E = r.physicallyCorrectLights !== !0 ? Math.PI : 1;
      d.lightMapIntensity.value = A.lightMapIntensity * E;
    }
    A.aoMap &&
      ((d.aoMap.value = A.aoMap), (d.aoMapIntensity.value = A.aoMapIntensity));
    let _;
    A.map
      ? (_ = A.map)
      : A.specularMap
      ? (_ = A.specularMap)
      : A.displacementMap
      ? (_ = A.displacementMap)
      : A.normalMap
      ? (_ = A.normalMap)
      : A.bumpMap
      ? (_ = A.bumpMap)
      : A.roughnessMap
      ? (_ = A.roughnessMap)
      : A.metalnessMap
      ? (_ = A.metalnessMap)
      : A.alphaMap
      ? (_ = A.alphaMap)
      : A.emissiveMap
      ? (_ = A.emissiveMap)
      : A.clearcoatMap
      ? (_ = A.clearcoatMap)
      : A.clearcoatNormalMap
      ? (_ = A.clearcoatNormalMap)
      : A.clearcoatRoughnessMap
      ? (_ = A.clearcoatRoughnessMap)
      : A.iridescenceMap
      ? (_ = A.iridescenceMap)
      : A.iridescenceThicknessMap
      ? (_ = A.iridescenceThicknessMap)
      : A.specularIntensityMap
      ? (_ = A.specularIntensityMap)
      : A.specularColorMap
      ? (_ = A.specularColorMap)
      : A.transmissionMap
      ? (_ = A.transmissionMap)
      : A.thicknessMap
      ? (_ = A.thicknessMap)
      : A.sheenColorMap
      ? (_ = A.sheenColorMap)
      : A.sheenRoughnessMap && (_ = A.sheenRoughnessMap),
      _ !== void 0 &&
        (_.isWebGLRenderTarget && (_ = _.texture),
        _.matrixAutoUpdate === !0 && _.updateMatrix(),
        d.uvTransform.value.copy(_.matrix));
    let b;
    A.aoMap ? (b = A.aoMap) : A.lightMap && (b = A.lightMap),
      b !== void 0 &&
        (b.isWebGLRenderTarget && (b = b.texture),
        b.matrixAutoUpdate === !0 && b.updateMatrix(),
        d.uv2Transform.value.copy(b.matrix));
  }
  function s(d, A) {
    d.diffuse.value.copy(A.color), (d.opacity.value = A.opacity);
  }
  function a(d, A) {
    (d.dashSize.value = A.dashSize),
      (d.totalSize.value = A.dashSize + A.gapSize),
      (d.scale.value = A.scale);
  }
  function o(d, A, g, _) {
    d.diffuse.value.copy(A.color),
      (d.opacity.value = A.opacity),
      (d.size.value = A.size * g),
      (d.scale.value = _ * 0.5),
      A.map && (d.map.value = A.map),
      A.alphaMap && (d.alphaMap.value = A.alphaMap),
      A.alphaTest > 0 && (d.alphaTest.value = A.alphaTest);
    let b;
    A.map ? (b = A.map) : A.alphaMap && (b = A.alphaMap),
      b !== void 0 &&
        (b.matrixAutoUpdate === !0 && b.updateMatrix(),
        d.uvTransform.value.copy(b.matrix));
  }
  function c(d, A) {
    d.diffuse.value.copy(A.color),
      (d.opacity.value = A.opacity),
      (d.rotation.value = A.rotation),
      A.map && (d.map.value = A.map),
      A.alphaMap && (d.alphaMap.value = A.alphaMap),
      A.alphaTest > 0 && (d.alphaTest.value = A.alphaTest);
    let g;
    A.map ? (g = A.map) : A.alphaMap && (g = A.alphaMap),
      g !== void 0 &&
        (g.matrixAutoUpdate === !0 && g.updateMatrix(),
        d.uvTransform.value.copy(g.matrix));
  }
  function l(d, A) {
    d.specular.value.copy(A.specular),
      (d.shininess.value = Math.max(A.shininess, 1e-4));
  }
  function f(d, A) {
    A.gradientMap && (d.gradientMap.value = A.gradientMap);
  }
  function h(d, A) {
    (d.roughness.value = A.roughness),
      (d.metalness.value = A.metalness),
      A.roughnessMap && (d.roughnessMap.value = A.roughnessMap),
      A.metalnessMap && (d.metalnessMap.value = A.metalnessMap),
      e.get(A).envMap && (d.envMapIntensity.value = A.envMapIntensity);
  }
  function u(d, A, g) {
    (d.ior.value = A.ior),
      A.sheen > 0 &&
        (d.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),
        (d.sheenRoughness.value = A.sheenRoughness),
        A.sheenColorMap && (d.sheenColorMap.value = A.sheenColorMap),
        A.sheenRoughnessMap &&
          (d.sheenRoughnessMap.value = A.sheenRoughnessMap)),
      A.clearcoat > 0 &&
        ((d.clearcoat.value = A.clearcoat),
        (d.clearcoatRoughness.value = A.clearcoatRoughness),
        A.clearcoatMap && (d.clearcoatMap.value = A.clearcoatMap),
        A.clearcoatRoughnessMap &&
          (d.clearcoatRoughnessMap.value = A.clearcoatRoughnessMap),
        A.clearcoatNormalMap &&
          (d.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),
          (d.clearcoatNormalMap.value = A.clearcoatNormalMap),
          A.side === jt && d.clearcoatNormalScale.value.negate())),
      A.iridescence > 0 &&
        ((d.iridescence.value = A.iridescence),
        (d.iridescenceIOR.value = A.iridescenceIOR),
        (d.iridescenceThicknessMinimum.value = A.iridescenceThicknessRange[0]),
        (d.iridescenceThicknessMaximum.value = A.iridescenceThicknessRange[1]),
        A.iridescenceMap && (d.iridescenceMap.value = A.iridescenceMap),
        A.iridescenceThicknessMap &&
          (d.iridescenceThicknessMap.value = A.iridescenceThicknessMap)),
      A.transmission > 0 &&
        ((d.transmission.value = A.transmission),
        (d.transmissionSamplerMap.value = g.texture),
        d.transmissionSamplerSize.value.set(g.width, g.height),
        A.transmissionMap && (d.transmissionMap.value = A.transmissionMap),
        (d.thickness.value = A.thickness),
        A.thicknessMap && (d.thicknessMap.value = A.thicknessMap),
        (d.attenuationDistance.value = A.attenuationDistance),
        d.attenuationColor.value.copy(A.attenuationColor)),
      (d.specularIntensity.value = A.specularIntensity),
      d.specularColor.value.copy(A.specularColor),
      A.specularIntensityMap &&
        (d.specularIntensityMap.value = A.specularIntensityMap),
      A.specularColorMap && (d.specularColorMap.value = A.specularColorMap);
  }
  function p(d, A) {
    A.matcap && (d.matcap.value = A.matcap);
  }
  function m(d, A) {
    d.referencePosition.value.copy(A.referencePosition),
      (d.nearDistance.value = A.nearDistance),
      (d.farDistance.value = A.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function Zg(r, e, t, n) {
  let i = {},
    s = {},
    a = [];
  const o = t.isWebGL2 ? r.getParameter(35375) : 0;
  function c(_, b) {
    const E = b.program;
    n.uniformBlockBinding(_, E);
  }
  function l(_, b) {
    let E = i[_.id];
    E === void 0 &&
      (m(_), (E = f(_)), (i[_.id] = E), _.addEventListener("dispose", A));
    const C = b.program;
    n.updateUBOMapping(_, C);
    const v = e.render.frame;
    s[_.id] !== v && (u(_), (s[_.id] = v));
  }
  function f(_) {
    const b = h();
    _.__bindingPointIndex = b;
    const E = r.createBuffer(),
      C = _.__size,
      v = _.usage;
    return (
      r.bindBuffer(35345, E),
      r.bufferData(35345, C, v),
      r.bindBuffer(35345, null),
      r.bindBufferBase(35345, b, E),
      E
    );
  }
  function h() {
    for (let _ = 0; _ < o; _++) if (a.indexOf(_) === -1) return a.push(_), _;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function u(_) {
    const b = i[_.id],
      E = _.uniforms,
      C = _.__cache;
    r.bindBuffer(35345, b);
    for (let v = 0, T = E.length; v < T; v++) {
      const x = E[v];
      if (p(x, v, C) === !0) {
        const w = x.__offset,
          B = Array.isArray(x.value) ? x.value : [x.value];
        let G = 0;
        for (let H = 0; H < B.length; H++) {
          const P = B[H],
            Q = d(P);
          typeof P == "number"
            ? ((x.__data[0] = P), r.bufferSubData(35345, w + G, x.__data))
            : P.isMatrix3
            ? ((x.__data[0] = P.elements[0]),
              (x.__data[1] = P.elements[1]),
              (x.__data[2] = P.elements[2]),
              (x.__data[3] = P.elements[0]),
              (x.__data[4] = P.elements[3]),
              (x.__data[5] = P.elements[4]),
              (x.__data[6] = P.elements[5]),
              (x.__data[7] = P.elements[0]),
              (x.__data[8] = P.elements[6]),
              (x.__data[9] = P.elements[7]),
              (x.__data[10] = P.elements[8]),
              (x.__data[11] = P.elements[0]))
            : (P.toArray(x.__data, G),
              (G += Q.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        r.bufferSubData(35345, w, x.__data);
      }
    }
    r.bindBuffer(35345, null);
  }
  function p(_, b, E) {
    const C = _.value;
    if (E[b] === void 0) {
      if (typeof C == "number") E[b] = C;
      else {
        const v = Array.isArray(C) ? C : [C],
          T = [];
        for (let x = 0; x < v.length; x++) T.push(v[x].clone());
        E[b] = T;
      }
      return !0;
    } else if (typeof C == "number") {
      if (E[b] !== C) return (E[b] = C), !0;
    } else {
      const v = Array.isArray(E[b]) ? E[b] : [E[b]],
        T = Array.isArray(C) ? C : [C];
      for (let x = 0; x < v.length; x++) {
        const w = v[x];
        if (w.equals(T[x]) === !1) return w.copy(T[x]), !0;
      }
    }
    return !1;
  }
  function m(_) {
    const b = _.uniforms;
    let E = 0;
    const C = 16;
    let v = 0;
    for (let T = 0, x = b.length; T < x; T++) {
      const w = b[T],
        B = { boundary: 0, storage: 0 },
        G = Array.isArray(w.value) ? w.value : [w.value];
      for (let H = 0, P = G.length; H < P; H++) {
        const Q = G[H],
          z = d(Q);
        (B.boundary += z.boundary), (B.storage += z.storage);
      }
      if (
        ((w.__data = new Float32Array(
          B.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (w.__offset = E),
        T > 0)
      ) {
        v = E % C;
        const H = C - v;
        v !== 0 && H - B.boundary < 0 && ((E += C - v), (w.__offset = E));
      }
      E += B.storage;
    }
    return (
      (v = E % C), v > 0 && (E += C - v), (_.__size = E), (_.__cache = {}), this
    );
  }
  function d(_) {
    const b = { boundary: 0, storage: 0 };
    return (
      typeof _ == "number"
        ? ((b.boundary = 4), (b.storage = 4))
        : _.isVector2
        ? ((b.boundary = 8), (b.storage = 8))
        : _.isVector3 || _.isColor
        ? ((b.boundary = 16), (b.storage = 12))
        : _.isVector4
        ? ((b.boundary = 16), (b.storage = 16))
        : _.isMatrix3
        ? ((b.boundary = 48), (b.storage = 48))
        : _.isMatrix4
        ? ((b.boundary = 64), (b.storage = 64))
        : _.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            _
          ),
      b
    );
  }
  function A(_) {
    const b = _.target;
    b.removeEventListener("dispose", A);
    const E = a.indexOf(b.__bindingPointIndex);
    a.splice(E, 1), r.deleteBuffer(i[b.id]), delete i[b.id], delete s[b.id];
  }
  function g() {
    for (const _ in i) r.deleteBuffer(i[_]);
    (a = []), (i = {}), (s = {});
  }
  return { bind: c, update: l, dispose: g };
}
function $g() {
  const r = Cs("canvas");
  return (r.style.display = "block"), r;
}
function nu(r = {}) {
  this.isWebGLRenderer = !0;
  const e = r.canvas !== void 0 ? r.canvas : $g(),
    t = r.context !== void 0 ? r.context : null,
    n = r.depth !== void 0 ? r.depth : !0,
    i = r.stencil !== void 0 ? r.stencil : !0,
    s = r.antialias !== void 0 ? r.antialias : !1,
    a = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0,
    o = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1,
    c = r.powerPreference !== void 0 ? r.powerPreference : "default",
    l =
      r.failIfMajorPerformanceCaveat !== void 0
        ? r.failIfMajorPerformanceCaveat
        : !1;
  let f;
  t !== null
    ? (f = t.getContextAttributes().alpha)
    : (f = r.alpha !== void 0 ? r.alpha : !1);
  let h = null,
    u = null;
  const p = [],
    m = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = bn),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = pn),
    (this.toneMappingExposure = 1);
  const d = this;
  let A = !1,
    g = 0,
    _ = 0,
    b = null,
    E = -1,
    C = null;
  const v = new Ze(),
    T = new Ze();
  let x = null,
    w = e.width,
    B = e.height,
    G = 1,
    H = null,
    P = null;
  const Q = new Ze(0, 0, w, B),
    z = new Ze(0, 0, w, B);
  let Y = !1;
  const K = new pr();
  let O = !1,
    ee = !1,
    Z = null;
  const W = new Be(),
    U = new ye(),
    $ = new R(),
    ie = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function se() {
    return b === null ? G : 1;
  }
  let D = t;
  function ae(y, N) {
    for (let q = 0; q < y.length; q++) {
      const k = y[q],
        J = e.getContext(k, N);
      if (J !== null) return J;
    }
    return null;
  }
  try {
    const y = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: a,
      preserveDrawingBuffer: o,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Na}`),
      e.addEventListener("webglcontextlost", _e, !1),
      e.addEventListener("webglcontextrestored", be, !1),
      e.addEventListener("webglcontextcreationerror", ke, !1),
      D === null)
    ) {
      const N = ["webgl2", "webgl", "experimental-webgl"];
      if ((d.isWebGL1Renderer === !0 && N.shift(), (D = ae(N, y)), D === null))
        throw ae(N)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    D.getShaderPrecisionFormat === void 0 &&
      (D.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (y) {
    throw (console.error("THREE.WebGLRenderer: " + y.message), y);
  }
  let me,
    ge,
    ue,
    je,
    ve,
    Ce,
    at,
    X,
    et,
    It,
    it,
    qe,
    Yt,
    kt,
    S,
    I,
    V,
    ne,
    re,
    le,
    Ie,
    M,
    F,
    fe;
  function pe() {
    (me = new up(D)),
      (ge = new sp(D, me, r)),
      me.init(ge),
      (M = new jg(D, me, ge)),
      (ue = new Vg(D, me, ge)),
      (je = new dp()),
      (ve = new Tg()),
      (Ce = new Wg(D, me, ue, ve, ge, M, je)),
      (at = new ap(d)),
      (X = new lp(d)),
      (et = new Cf(D, ge)),
      (F = new np(D, me, et, ge)),
      (It = new hp(D, et, je, F)),
      (it = new mp(D, It, et, je)),
      (re = new gp(D, ge, Ce)),
      (I = new rp(ve)),
      (qe = new Bg(d, at, X, me, ge, F, I)),
      (Yt = new Xg(d, ve)),
      (kt = new Rg()),
      (S = new Ng(me, ge)),
      (ne = new tp(d, at, X, ue, it, f, a)),
      (V = new Hg(d, it, ge)),
      (fe = new Zg(D, je, ge, ue)),
      (le = new ip(D, me, je, ge)),
      (Ie = new fp(D, me, je, ge)),
      (je.programs = qe.programs),
      (d.capabilities = ge),
      (d.extensions = me),
      (d.properties = ve),
      (d.renderLists = kt),
      (d.shadowMap = V),
      (d.state = ue),
      (d.info = je);
  }
  pe();
  const he = new Jg(d, D);
  (this.xr = he),
    (this.getContext = function () {
      return D;
    }),
    (this.getContextAttributes = function () {
      return D.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const y = me.get("WEBGL_lose_context");
      y && y.loseContext();
    }),
    (this.forceContextRestore = function () {
      const y = me.get("WEBGL_lose_context");
      y && y.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return G;
    }),
    (this.setPixelRatio = function (y) {
      y !== void 0 && ((G = y), this.setSize(w, B, !1));
    }),
    (this.getSize = function (y) {
      return y.set(w, B);
    }),
    (this.setSize = function (y, N, q) {
      if (he.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (w = y),
        (B = N),
        (e.width = Math.floor(y * G)),
        (e.height = Math.floor(N * G)),
        q !== !1 && ((e.style.width = y + "px"), (e.style.height = N + "px")),
        this.setViewport(0, 0, y, N);
    }),
    (this.getDrawingBufferSize = function (y) {
      return y.set(w * G, B * G).floor();
    }),
    (this.setDrawingBufferSize = function (y, N, q) {
      (w = y),
        (B = N),
        (G = q),
        (e.width = Math.floor(y * q)),
        (e.height = Math.floor(N * q)),
        this.setViewport(0, 0, y, N);
    }),
    (this.getCurrentViewport = function (y) {
      return y.copy(v);
    }),
    (this.getViewport = function (y) {
      return y.copy(Q);
    }),
    (this.setViewport = function (y, N, q, k) {
      y.isVector4 ? Q.set(y.x, y.y, y.z, y.w) : Q.set(y, N, q, k),
        ue.viewport(v.copy(Q).multiplyScalar(G).floor());
    }),
    (this.getScissor = function (y) {
      return y.copy(z);
    }),
    (this.setScissor = function (y, N, q, k) {
      y.isVector4 ? z.set(y.x, y.y, y.z, y.w) : z.set(y, N, q, k),
        ue.scissor(T.copy(z).multiplyScalar(G).floor());
    }),
    (this.getScissorTest = function () {
      return Y;
    }),
    (this.setScissorTest = function (y) {
      ue.setScissorTest((Y = y));
    }),
    (this.setOpaqueSort = function (y) {
      H = y;
    }),
    (this.setTransparentSort = function (y) {
      P = y;
    }),
    (this.getClearColor = function (y) {
      return y.copy(ne.getClearColor());
    }),
    (this.setClearColor = function () {
      ne.setClearColor.apply(ne, arguments);
    }),
    (this.getClearAlpha = function () {
      return ne.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      ne.setClearAlpha.apply(ne, arguments);
    }),
    (this.clear = function (y = !0, N = !0, q = !0) {
      let k = 0;
      y && (k |= 16384), N && (k |= 256), q && (k |= 1024), D.clear(k);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", _e, !1),
        e.removeEventListener("webglcontextrestored", be, !1),
        e.removeEventListener("webglcontextcreationerror", ke, !1),
        kt.dispose(),
        S.dispose(),
        ve.dispose(),
        at.dispose(),
        X.dispose(),
        it.dispose(),
        F.dispose(),
        fe.dispose(),
        qe.dispose(),
        he.dispose(),
        he.removeEventListener("sessionstart", de),
        he.removeEventListener("sessionend", Ee),
        Z && (Z.dispose(), (Z = null)),
        Ye.stop();
    });
  function _e(y) {
    y.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (A = !0);
  }
  function be() {
    console.log("THREE.WebGLRenderer: Context Restored."), (A = !1);
    const y = je.autoReset,
      N = V.enabled,
      q = V.autoUpdate,
      k = V.needsUpdate,
      J = V.type;
    pe(),
      (je.autoReset = y),
      (V.enabled = N),
      (V.autoUpdate = q),
      (V.needsUpdate = k),
      (V.type = J);
  }
  function ke(y) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      y.statusMessage
    );
  }
  function Ue(y) {
    const N = y.target;
    N.removeEventListener("dispose", Ue), Je(N);
  }
  function Je(y) {
    L(y), ve.remove(y);
  }
  function L(y) {
    const N = ve.get(y).programs;
    N !== void 0 &&
      (N.forEach(function (q) {
        qe.releaseProgram(q);
      }),
      y.isShaderMaterial && qe.releaseShaderCache(y));
  }
  (this.renderBufferDirect = function (y, N, q, k, J, xe) {
    N === null && (N = ie);
    const we = J.isMesh && J.matrixWorld.determinant() < 0,
      Te = Nu(y, N, q, k, J);
    ue.setMaterial(k, we);
    let De = q.index,
      Ve = 1;
    k.wireframe === !0 && ((De = It.getWireframeAttribute(q)), (Ve = 2));
    const Ge = q.drawRange,
      Oe = q.attributes.position;
    let ot = Ge.start * Ve,
      Ut = (Ge.start + Ge.count) * Ve;
    xe !== null &&
      ((ot = Math.max(ot, xe.start * Ve)),
      (Ut = Math.min(Ut, (xe.start + xe.count) * Ve))),
      De !== null
        ? ((ot = Math.max(ot, 0)), (Ut = Math.min(Ut, De.count)))
        : Oe != null && ((ot = Math.max(ot, 0)), (Ut = Math.min(Ut, Oe.count)));
    const In = Ut - ot;
    if (In < 0 || In === 1 / 0) return;
    F.setup(J, k, Te, q, De);
    let Zn,
      ct = le;
    if (
      (De !== null && ((Zn = et.get(De)), (ct = Ie), ct.setIndex(Zn)), J.isMesh)
    )
      k.wireframe === !0
        ? (ue.setLineWidth(k.wireframeLinewidth * se()), ct.setMode(1))
        : ct.setMode(4);
    else if (J.isLine) {
      let ze = k.linewidth;
      ze === void 0 && (ze = 1),
        ue.setLineWidth(ze * se()),
        J.isLineSegments
          ? ct.setMode(1)
          : J.isLineLoop
          ? ct.setMode(2)
          : ct.setMode(3);
    } else J.isPoints ? ct.setMode(0) : J.isSprite && ct.setMode(4);
    if (J.isInstancedMesh) ct.renderInstances(ot, In, J.count);
    else if (q.isInstancedBufferGeometry) {
      const ze = q._maxInstanceCount !== void 0 ? q._maxInstanceCount : 1 / 0,
        xr = Math.min(q.instanceCount, ze);
      ct.renderInstances(ot, In, xr);
    } else ct.render(ot, In);
  }),
    (this.compile = function (y, N) {
      function q(k, J, xe) {
        k.transparent === !0 && k.side === Rn && k.forceSinglePass === !1
          ? ((k.side = jt),
            (k.needsUpdate = !0),
            Kt(k, J, xe),
            (k.side = Pn),
            (k.needsUpdate = !0),
            Kt(k, J, xe),
            (k.side = Rn))
          : Kt(k, J, xe);
      }
      (u = S.get(y)),
        u.init(),
        m.push(u),
        y.traverseVisible(function (k) {
          k.isLight &&
            k.layers.test(N.layers) &&
            (u.pushLight(k), k.castShadow && u.pushShadow(k));
        }),
        u.setupLights(d.physicallyCorrectLights),
        y.traverse(function (k) {
          const J = k.material;
          if (J)
            if (Array.isArray(J))
              for (let xe = 0; xe < J.length; xe++) {
                const we = J[xe];
                q(we, y, k);
              }
            else q(J, y, k);
        }),
        m.pop(),
        (u = null);
    });
  let j = null;
  function te(y) {
    j && j(y);
  }
  function de() {
    Ye.stop();
  }
  function Ee() {
    Ye.start();
  }
  const Ye = new Xl();
  Ye.setAnimationLoop(te),
    typeof self < "u" && Ye.setContext(self),
    (this.setAnimationLoop = function (y) {
      (j = y), he.setAnimationLoop(y), y === null ? Ye.stop() : Ye.start();
    }),
    he.addEventListener("sessionstart", de),
    he.addEventListener("sessionend", Ee),
    (this.render = function (y, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (A === !0) return;
      y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(),
        N.parent === null &&
          N.matrixWorldAutoUpdate === !0 &&
          N.updateMatrixWorld(),
        he.enabled === !0 &&
          he.isPresenting === !0 &&
          (he.cameraAutoUpdate === !0 && he.updateCamera(N),
          (N = he.getCamera())),
        y.isScene === !0 && y.onBeforeRender(d, y, N, b),
        (u = S.get(y, m.length)),
        u.init(),
        m.push(u),
        W.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse),
        K.setFromProjectionMatrix(W),
        (ee = this.localClippingEnabled),
        (O = I.init(this.clippingPlanes, ee)),
        (h = kt.get(y, p.length)),
        h.init(),
        p.push(h),
        mt(y, N, 0, d.sortObjects),
        h.finish(),
        d.sortObjects === !0 && h.sort(H, P),
        O === !0 && I.beginShadows();
      const q = u.state.shadowsArray;
      if (
        (V.render(q, y, N),
        O === !0 && I.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        ne.render(h, y),
        u.setupLights(d.physicallyCorrectLights),
        N.isArrayCamera)
      ) {
        const k = N.cameras;
        for (let J = 0, xe = k.length; J < xe; J++) {
          const we = k[J];
          St(h, y, we, we.viewport);
        }
      } else St(h, y, N);
      b !== null &&
        (Ce.updateMultisampleRenderTarget(b), Ce.updateRenderTargetMipmap(b)),
        y.isScene === !0 && y.onAfterRender(d, y, N),
        F.resetDefaultState(),
        (E = -1),
        (C = null),
        m.pop(),
        m.length > 0 ? (u = m[m.length - 1]) : (u = null),
        p.pop(),
        p.length > 0 ? (h = p[p.length - 1]) : (h = null);
    });
  function mt(y, N, q, k) {
    if (y.visible === !1) return;
    if (y.layers.test(N.layers)) {
      if (y.isGroup) q = y.renderOrder;
      else if (y.isLOD) y.autoUpdate === !0 && y.update(N);
      else if (y.isLight) u.pushLight(y), y.castShadow && u.pushShadow(y);
      else if (y.isSprite) {
        if (!y.frustumCulled || K.intersectsSprite(y)) {
          k && $.setFromMatrixPosition(y.matrixWorld).applyMatrix4(W);
          const we = it.update(y),
            Te = y.material;
          Te.visible && h.push(y, we, Te, q, $.z, null);
        }
      } else if (
        (y.isMesh || y.isLine || y.isPoints) &&
        (y.isSkinnedMesh &&
          y.skeleton.frame !== je.render.frame &&
          (y.skeleton.update(), (y.skeleton.frame = je.render.frame)),
        !y.frustumCulled || K.intersectsObject(y))
      ) {
        k && $.setFromMatrixPosition(y.matrixWorld).applyMatrix4(W);
        const we = it.update(y),
          Te = y.material;
        if (Array.isArray(Te)) {
          const De = we.groups;
          for (let Ve = 0, Ge = De.length; Ve < Ge; Ve++) {
            const Oe = De[Ve],
              ot = Te[Oe.materialIndex];
            ot && ot.visible && h.push(y, we, ot, q, $.z, Oe);
          }
        } else Te.visible && h.push(y, we, Te, q, $.z, null);
      }
    }
    const xe = y.children;
    for (let we = 0, Te = xe.length; we < Te; we++) mt(xe[we], N, q, k);
  }
  function St(y, N, q, k) {
    const J = y.opaque,
      xe = y.transmissive,
      we = y.transparent;
    u.setupLightsView(q),
      O === !0 && I.setGlobalState(d.clippingPlanes, q),
      xe.length > 0 && Xn(J, N, q),
      k && ue.viewport(v.copy(k)),
      J.length > 0 && tt(J, N, q),
      xe.length > 0 && tt(xe, N, q),
      we.length > 0 && tt(we, N, q),
      ue.buffers.depth.setTest(!0),
      ue.buffers.depth.setMask(!0),
      ue.buffers.color.setMask(!0),
      ue.setPolygonOffset(!1);
  }
  function Xn(y, N, q) {
    const k = ge.isWebGL2;
    Z === null &&
      (Z = new jn(1, 1, {
        generateMipmaps: !0,
        type: me.has("EXT_color_buffer_half_float") ? Qn : Ft,
        minFilter: Wn,
        samples: k && s === !0 ? 4 : 0,
      })),
      d.getDrawingBufferSize(U),
      k ? Z.setSize(U.x, U.y) : Z.setSize(or(U.x), or(U.y));
    const J = d.getRenderTarget();
    d.setRenderTarget(Z), d.clear();
    const xe = d.toneMapping;
    (d.toneMapping = pn),
      tt(y, N, q),
      (d.toneMapping = xe),
      Ce.updateMultisampleRenderTarget(Z),
      Ce.updateRenderTargetMipmap(Z),
      d.setRenderTarget(J);
  }
  function tt(y, N, q) {
    const k = N.isScene === !0 ? N.overrideMaterial : null;
    for (let J = 0, xe = y.length; J < xe; J++) {
      const we = y[J],
        Te = we.object,
        De = we.geometry,
        Ve = k === null ? we.material : k,
        Ge = we.group;
      Te.layers.test(q.layers) && Cn(Te, N, q, De, Ve, Ge);
    }
  }
  function Cn(y, N, q, k, J, xe) {
    y.onBeforeRender(d, N, q, k, J, xe),
      y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, y.matrixWorld),
      y.normalMatrix.getNormalMatrix(y.modelViewMatrix),
      J.onBeforeRender(d, N, q, k, y, xe),
      J.transparent === !0 && J.side === Rn && J.forceSinglePass === !1
        ? ((J.side = jt),
          (J.needsUpdate = !0),
          d.renderBufferDirect(q, N, k, J, y, xe),
          (J.side = Pn),
          (J.needsUpdate = !0),
          d.renderBufferDirect(q, N, k, J, y, xe),
          (J.side = Rn))
        : d.renderBufferDirect(q, N, k, J, y, xe),
      y.onAfterRender(d, N, q, k, J, xe);
  }
  function Kt(y, N, q) {
    N.isScene !== !0 && (N = ie);
    const k = ve.get(y),
      J = u.state.lights,
      xe = u.state.shadowsArray,
      we = J.state.version,
      Te = qe.getParameters(y, J.state, xe, N, q),
      De = qe.getProgramCacheKey(Te);
    let Ve = k.programs;
    (k.environment = y.isMeshStandardMaterial ? N.environment : null),
      (k.fog = N.fog),
      (k.envMap = (y.isMeshStandardMaterial ? X : at).get(
        y.envMap || k.environment
      )),
      Ve === void 0 &&
        (y.addEventListener("dispose", Ue),
        (Ve = new Map()),
        (k.programs = Ve));
    let Ge = Ve.get(De);
    if (Ge !== void 0) {
      if (k.currentProgram === Ge && k.lightsStateVersion === we)
        return ro(y, Te), Ge;
    } else
      (Te.uniforms = qe.getUniforms(y)),
        y.onBuild(q, Te, d),
        y.onBeforeCompile(Te, d),
        (Ge = qe.acquireProgram(Te, De)),
        Ve.set(De, Ge),
        (k.uniforms = Te.uniforms);
    const Oe = k.uniforms;
    ((!y.isShaderMaterial && !y.isRawShaderMaterial) || y.clipping === !0) &&
      (Oe.clippingPlanes = I.uniform),
      ro(y, Te),
      (k.needsLights = Gu(y)),
      (k.lightsStateVersion = we),
      k.needsLights &&
        ((Oe.ambientLightColor.value = J.state.ambient),
        (Oe.lightProbe.value = J.state.probe),
        (Oe.directionalLights.value = J.state.directional),
        (Oe.directionalLightShadows.value = J.state.directionalShadow),
        (Oe.spotLights.value = J.state.spot),
        (Oe.spotLightShadows.value = J.state.spotShadow),
        (Oe.rectAreaLights.value = J.state.rectArea),
        (Oe.ltc_1.value = J.state.rectAreaLTC1),
        (Oe.ltc_2.value = J.state.rectAreaLTC2),
        (Oe.pointLights.value = J.state.point),
        (Oe.pointLightShadows.value = J.state.pointShadow),
        (Oe.hemisphereLights.value = J.state.hemi),
        (Oe.directionalShadowMap.value = J.state.directionalShadowMap),
        (Oe.directionalShadowMatrix.value = J.state.directionalShadowMatrix),
        (Oe.spotShadowMap.value = J.state.spotShadowMap),
        (Oe.spotLightMatrix.value = J.state.spotLightMatrix),
        (Oe.spotLightMap.value = J.state.spotLightMap),
        (Oe.pointShadowMap.value = J.state.pointShadowMap),
        (Oe.pointShadowMatrix.value = J.state.pointShadowMatrix));
    const ot = Ge.getUniforms(),
      Ut = sr.seqWithValue(ot.seq, Oe);
    return (k.currentProgram = Ge), (k.uniformsList = Ut), Ge;
  }
  function ro(y, N) {
    const q = ve.get(y);
    (q.outputEncoding = N.outputEncoding),
      (q.instancing = N.instancing),
      (q.skinning = N.skinning),
      (q.morphTargets = N.morphTargets),
      (q.morphNormals = N.morphNormals),
      (q.morphColors = N.morphColors),
      (q.morphTargetsCount = N.morphTargetsCount),
      (q.numClippingPlanes = N.numClippingPlanes),
      (q.numIntersection = N.numClipIntersection),
      (q.vertexAlphas = N.vertexAlphas),
      (q.vertexTangents = N.vertexTangents),
      (q.toneMapping = N.toneMapping);
  }
  function Nu(y, N, q, k, J) {
    N.isScene !== !0 && (N = ie), Ce.resetTextureUnits();
    const xe = N.fog,
      we = k.isMeshStandardMaterial ? N.environment : null,
      Te =
        b === null
          ? d.outputEncoding
          : b.isXRRenderTarget === !0
          ? b.texture.encoding
          : bn,
      De = (k.isMeshStandardMaterial ? X : at).get(k.envMap || we),
      Ve =
        k.vertexColors === !0 &&
        !!q.attributes.color &&
        q.attributes.color.itemSize === 4,
      Ge = !!k.normalMap && !!q.attributes.tangent,
      Oe = !!q.morphAttributes.position,
      ot = !!q.morphAttributes.normal,
      Ut = !!q.morphAttributes.color,
      In = k.toneMapped ? d.toneMapping : pn,
      Zn =
        q.morphAttributes.position ||
        q.morphAttributes.normal ||
        q.morphAttributes.color,
      ct = Zn !== void 0 ? Zn.length : 0,
      ze = ve.get(k),
      xr = u.state.lights;
    if (O === !0 && (ee === !0 || y !== C)) {
      const Gt = y === C && k.id === E;
      I.setState(k, y, Gt);
    }
    let bt = !1;
    k.version === ze.__version
      ? ((ze.needsLights && ze.lightsStateVersion !== xr.state.version) ||
          ze.outputEncoding !== Te ||
          (J.isInstancedMesh && ze.instancing === !1) ||
          (!J.isInstancedMesh && ze.instancing === !0) ||
          (J.isSkinnedMesh && ze.skinning === !1) ||
          (!J.isSkinnedMesh && ze.skinning === !0) ||
          ze.envMap !== De ||
          (k.fog === !0 && ze.fog !== xe) ||
          (ze.numClippingPlanes !== void 0 &&
            (ze.numClippingPlanes !== I.numPlanes ||
              ze.numIntersection !== I.numIntersection)) ||
          ze.vertexAlphas !== Ve ||
          ze.vertexTangents !== Ge ||
          ze.morphTargets !== Oe ||
          ze.morphNormals !== ot ||
          ze.morphColors !== Ut ||
          ze.toneMapping !== In ||
          (ge.isWebGL2 === !0 && ze.morphTargetsCount !== ct)) &&
        (bt = !0)
      : ((bt = !0), (ze.__version = k.version));
    let $n = ze.currentProgram;
    bt === !0 && ($n = Kt(k, N, J));
    let ao = !1,
      Zi = !1,
      Cr = !1;
    const Dt = $n.getUniforms(),
      ei = ze.uniforms;
    if (
      (ue.useProgram($n.program) && ((ao = !0), (Zi = !0), (Cr = !0)),
      k.id !== E && ((E = k.id), (Zi = !0)),
      ao || C !== y)
    ) {
      if (
        (Dt.setValue(D, "projectionMatrix", y.projectionMatrix),
        ge.logarithmicDepthBuffer &&
          Dt.setValue(D, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)),
        C !== y && ((C = y), (Zi = !0), (Cr = !0)),
        k.isShaderMaterial ||
          k.isMeshPhongMaterial ||
          k.isMeshToonMaterial ||
          k.isMeshStandardMaterial ||
          k.envMap)
      ) {
        const Gt = Dt.map.cameraPosition;
        Gt !== void 0 && Gt.setValue(D, $.setFromMatrixPosition(y.matrixWorld));
      }
      (k.isMeshPhongMaterial ||
        k.isMeshToonMaterial ||
        k.isMeshLambertMaterial ||
        k.isMeshBasicMaterial ||
        k.isMeshStandardMaterial ||
        k.isShaderMaterial) &&
        Dt.setValue(D, "isOrthographic", y.isOrthographicCamera === !0),
        (k.isMeshPhongMaterial ||
          k.isMeshToonMaterial ||
          k.isMeshLambertMaterial ||
          k.isMeshBasicMaterial ||
          k.isMeshStandardMaterial ||
          k.isShaderMaterial ||
          k.isShadowMaterial ||
          J.isSkinnedMesh) &&
          Dt.setValue(D, "viewMatrix", y.matrixWorldInverse);
    }
    if (J.isSkinnedMesh) {
      Dt.setOptional(D, J, "bindMatrix"),
        Dt.setOptional(D, J, "bindMatrixInverse");
      const Gt = J.skeleton;
      Gt &&
        (ge.floatVertexTextures
          ? (Gt.boneTexture === null && Gt.computeBoneTexture(),
            Dt.setValue(D, "boneTexture", Gt.boneTexture, Ce),
            Dt.setValue(D, "boneTextureSize", Gt.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const Ir = q.morphAttributes;
    if (
      ((Ir.position !== void 0 ||
        Ir.normal !== void 0 ||
        (Ir.color !== void 0 && ge.isWebGL2 === !0)) &&
        re.update(J, q, k, $n),
      (Zi || ze.receiveShadow !== J.receiveShadow) &&
        ((ze.receiveShadow = J.receiveShadow),
        Dt.setValue(D, "receiveShadow", J.receiveShadow)),
      k.isMeshGouraudMaterial &&
        k.envMap !== null &&
        ((ei.envMap.value = De),
        (ei.flipEnvMap.value =
          De.isCubeTexture && De.isRenderTargetTexture === !1 ? -1 : 1)),
      Zi &&
        (Dt.setValue(D, "toneMappingExposure", d.toneMappingExposure),
        ze.needsLights && Uu(ei, Cr),
        xe && k.fog === !0 && Yt.refreshFogUniforms(ei, xe),
        Yt.refreshMaterialUniforms(ei, k, G, B, Z),
        sr.upload(D, ze.uniformsList, ei, Ce)),
      k.isShaderMaterial &&
        k.uniformsNeedUpdate === !0 &&
        (sr.upload(D, ze.uniformsList, ei, Ce), (k.uniformsNeedUpdate = !1)),
      k.isSpriteMaterial && Dt.setValue(D, "center", J.center),
      Dt.setValue(D, "modelViewMatrix", J.modelViewMatrix),
      Dt.setValue(D, "normalMatrix", J.normalMatrix),
      Dt.setValue(D, "modelMatrix", J.matrixWorld),
      k.isShaderMaterial || k.isRawShaderMaterial)
    ) {
      const Gt = k.uniformsGroups;
      for (let yr = 0, Ou = Gt.length; yr < Ou; yr++)
        if (ge.isWebGL2) {
          const oo = Gt[yr];
          fe.update(oo, $n), fe.bind(oo, $n);
        } else
          console.warn(
            "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
          );
    }
    return $n;
  }
  function Uu(y, N) {
    (y.ambientLightColor.needsUpdate = N),
      (y.lightProbe.needsUpdate = N),
      (y.directionalLights.needsUpdate = N),
      (y.directionalLightShadows.needsUpdate = N),
      (y.pointLights.needsUpdate = N),
      (y.pointLightShadows.needsUpdate = N),
      (y.spotLights.needsUpdate = N),
      (y.spotLightShadows.needsUpdate = N),
      (y.rectAreaLights.needsUpdate = N),
      (y.hemisphereLights.needsUpdate = N);
  }
  function Gu(y) {
    return (
      y.isMeshLambertMaterial ||
      y.isMeshToonMaterial ||
      y.isMeshPhongMaterial ||
      y.isMeshStandardMaterial ||
      y.isShadowMaterial ||
      (y.isShaderMaterial && y.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return g;
  }),
    (this.getActiveMipmapLevel = function () {
      return _;
    }),
    (this.getRenderTarget = function () {
      return b;
    }),
    (this.setRenderTargetTextures = function (y, N, q) {
      (ve.get(y.texture).__webglTexture = N),
        (ve.get(y.depthTexture).__webglTexture = q);
      const k = ve.get(y);
      (k.__hasExternalTextures = !0),
        k.__hasExternalTextures &&
          ((k.__autoAllocateDepthBuffer = q === void 0),
          k.__autoAllocateDepthBuffer ||
            (me.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (k.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (y, N) {
      const q = ve.get(y);
      (q.__webglFramebuffer = N), (q.__useDefaultFramebuffer = N === void 0);
    }),
    (this.setRenderTarget = function (y, N = 0, q = 0) {
      (b = y), (g = N), (_ = q);
      let k = !0,
        J = null,
        xe = !1,
        we = !1;
      if (y) {
        const De = ve.get(y);
        De.__useDefaultFramebuffer !== void 0
          ? (ue.bindFramebuffer(36160, null), (k = !1))
          : De.__webglFramebuffer === void 0
          ? Ce.setupRenderTarget(y)
          : De.__hasExternalTextures &&
            Ce.rebindTextures(
              y,
              ve.get(y.texture).__webglTexture,
              ve.get(y.depthTexture).__webglTexture
            );
        const Ve = y.texture;
        (Ve.isData3DTexture ||
          Ve.isDataArrayTexture ||
          Ve.isCompressedArrayTexture) &&
          (we = !0);
        const Ge = ve.get(y).__webglFramebuffer;
        y.isWebGLCubeRenderTarget
          ? ((J = Ge[N]), (xe = !0))
          : ge.isWebGL2 && y.samples > 0 && Ce.useMultisampledRTT(y) === !1
          ? (J = ve.get(y).__webglMultisampledFramebuffer)
          : (J = Ge),
          v.copy(y.viewport),
          T.copy(y.scissor),
          (x = y.scissorTest);
      } else
        v.copy(Q).multiplyScalar(G).floor(),
          T.copy(z).multiplyScalar(G).floor(),
          (x = Y);
      if (
        (ue.bindFramebuffer(36160, J) &&
          ge.drawBuffers &&
          k &&
          ue.drawBuffers(y, J),
        ue.viewport(v),
        ue.scissor(T),
        ue.setScissorTest(x),
        xe)
      ) {
        const De = ve.get(y.texture);
        D.framebufferTexture2D(36160, 36064, 34069 + N, De.__webglTexture, q);
      } else if (we) {
        const De = ve.get(y.texture),
          Ve = N || 0;
        D.framebufferTextureLayer(36160, 36064, De.__webglTexture, q || 0, Ve);
      }
      E = -1;
    }),
    (this.readRenderTargetPixels = function (y, N, q, k, J, xe, we) {
      if (!(y && y.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let Te = ve.get(y).__webglFramebuffer;
      if ((y.isWebGLCubeRenderTarget && we !== void 0 && (Te = Te[we]), Te)) {
        ue.bindFramebuffer(36160, Te);
        try {
          const De = y.texture,
            Ve = De.format,
            Ge = De.type;
          if (Ve !== vt && M.convert(Ve) !== D.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Oe =
            Ge === Qn &&
            (me.has("EXT_color_buffer_half_float") ||
              (ge.isWebGL2 && me.has("EXT_color_buffer_float")));
          if (
            Ge !== Ft &&
            M.convert(Ge) !== D.getParameter(35738) &&
            !(
              Ge === Zt &&
              (ge.isWebGL2 ||
                me.has("OES_texture_float") ||
                me.has("WEBGL_color_buffer_float"))
            ) &&
            !Oe
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          N >= 0 &&
            N <= y.width - k &&
            q >= 0 &&
            q <= y.height - J &&
            D.readPixels(N, q, k, J, M.convert(Ve), M.convert(Ge), xe);
        } finally {
          const De = b !== null ? ve.get(b).__webglFramebuffer : null;
          ue.bindFramebuffer(36160, De);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (y, N, q = 0) {
      const k = Math.pow(2, -q),
        J = Math.floor(N.image.width * k),
        xe = Math.floor(N.image.height * k);
      Ce.setTexture2D(N, 0),
        D.copyTexSubImage2D(3553, q, 0, 0, y.x, y.y, J, xe),
        ue.unbindTexture();
    }),
    (this.copyTextureToTexture = function (y, N, q, k = 0) {
      const J = N.image.width,
        xe = N.image.height,
        we = M.convert(q.format),
        Te = M.convert(q.type);
      Ce.setTexture2D(q, 0),
        D.pixelStorei(37440, q.flipY),
        D.pixelStorei(37441, q.premultiplyAlpha),
        D.pixelStorei(3317, q.unpackAlignment),
        N.isDataTexture
          ? D.texSubImage2D(3553, k, y.x, y.y, J, xe, we, Te, N.image.data)
          : N.isCompressedTexture
          ? D.compressedTexSubImage2D(
              3553,
              k,
              y.x,
              y.y,
              N.mipmaps[0].width,
              N.mipmaps[0].height,
              we,
              N.mipmaps[0].data
            )
          : D.texSubImage2D(3553, k, y.x, y.y, we, Te, N.image),
        k === 0 && q.generateMipmaps && D.generateMipmap(3553),
        ue.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (y, N, q, k, J = 0) {
      if (d.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const xe = y.max.x - y.min.x + 1,
        we = y.max.y - y.min.y + 1,
        Te = y.max.z - y.min.z + 1,
        De = M.convert(k.format),
        Ve = M.convert(k.type);
      let Ge;
      if (k.isData3DTexture) Ce.setTexture3D(k, 0), (Ge = 32879);
      else if (k.isDataArrayTexture) Ce.setTexture2DArray(k, 0), (Ge = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      D.pixelStorei(37440, k.flipY),
        D.pixelStorei(37441, k.premultiplyAlpha),
        D.pixelStorei(3317, k.unpackAlignment);
      const Oe = D.getParameter(3314),
        ot = D.getParameter(32878),
        Ut = D.getParameter(3316),
        In = D.getParameter(3315),
        Zn = D.getParameter(32877),
        ct = q.isCompressedTexture ? q.mipmaps[0] : q.image;
      D.pixelStorei(3314, ct.width),
        D.pixelStorei(32878, ct.height),
        D.pixelStorei(3316, y.min.x),
        D.pixelStorei(3315, y.min.y),
        D.pixelStorei(32877, y.min.z),
        q.isDataTexture || q.isData3DTexture
          ? D.texSubImage3D(Ge, J, N.x, N.y, N.z, xe, we, Te, De, Ve, ct.data)
          : q.isCompressedArrayTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            D.compressedTexSubImage3D(
              Ge,
              J,
              N.x,
              N.y,
              N.z,
              xe,
              we,
              Te,
              De,
              ct.data
            ))
          : D.texSubImage3D(Ge, J, N.x, N.y, N.z, xe, we, Te, De, Ve, ct),
        D.pixelStorei(3314, Oe),
        D.pixelStorei(32878, ot),
        D.pixelStorei(3316, Ut),
        D.pixelStorei(3315, In),
        D.pixelStorei(32877, Zn),
        J === 0 && k.generateMipmaps && D.generateMipmap(Ge),
        ue.unbindTexture();
    }),
    (this.initTexture = function (y) {
      y.isCubeTexture
        ? Ce.setTextureCube(y, 0)
        : y.isData3DTexture
        ? Ce.setTexture3D(y, 0)
        : y.isDataArrayTexture || y.isCompressedArrayTexture
        ? Ce.setTexture2DArray(y, 0)
        : Ce.setTexture2D(y, 0),
        ue.unbindTexture();
    }),
    (this.resetState = function () {
      (g = 0), (_ = 0), (b = null), ue.reset(), F.reset();
    }),
    typeof __THREE_DEVTOOLS__ < "u" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class em extends nu {}
em.prototype.isWebGL1Renderer = !0;
let tm = class extends $e {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
};
class nm {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = ya),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = un());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const Lt = new R();
class Wa {
  constructor(e, t, n, i = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = i);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Lt.fromBufferAttribute(this, t),
        Lt.applyMatrix4(e),
        this.setXYZ(t, Lt.x, Lt.y, Lt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Lt.fromBufferAttribute(this, t),
        Lt.applyNormalMatrix(e),
        this.setXYZ(t, Lt.x, Lt.y, Lt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Lt.fromBufferAttribute(this, t),
        Lt.transformDirection(e),
        this.setXYZ(t, Lt.x, Lt.y, Lt.z);
    return this;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Xe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = Xe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Xe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = Xe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Ln(t, this.array)), t;
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = Xe(t, this.array)), (n = Xe(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = Xe(t, this.array)),
        (n = Xe(n, this.array)),
        (i = Xe(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = Xe(t, this.array)),
        (n = Xe(n, this.array)),
        (i = Xe(i, this.array)),
        (s = Xe(s, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      (this.data.array[e + 3] = s),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return new wt(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new Wa(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
const _c = new R(),
  Ec = new Ze(),
  xc = new Ze(),
  im = new R(),
  Cc = new Be();
class sm extends Wt {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new Be()),
      (this.bindMatrixInverse = new Be());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      this
    );
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ze(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === "attached"
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === "detached"
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  boneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    Ec.fromBufferAttribute(i.attributes.skinIndex, e),
      xc.fromBufferAttribute(i.attributes.skinWeight, e),
      _c.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = xc.getComponent(s);
      if (a !== 0) {
        const o = Ec.getComponent(s);
        Cc.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
          t.addScaledVector(im.copy(_c).applyMatrix4(Cc), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class iu extends $e {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class su extends Ct {
  constructor(e = null, t = 1, n = 1, i, s, a, o, c, l = Et, f = Et, h, u) {
    super(null, a, o, c, l, f, i, s, h, u),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const Ic = new Be(),
  rm = new Be();
class ja {
  constructor(e = [], t = []) {
    (this.uuid = un()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      (this.boneTextureSize = 0),
      (this.frame = -1),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Be());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Be();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : rm;
      Ic.multiplyMatrices(o, t[s]), Ic.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new ja(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    (e = Gl(e)), (e = Math.max(e, 4));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new su(t, e, e, vt, Zt);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      (this.boneTextureSize = e),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", s),
        (a = new iu())),
        this.bones.push(a),
        this.boneInverses.push(new Be().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class yc extends wt {
  constructor(e, t, n, i = 1) {
    super(e, t, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = i);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const vc = new Be(),
  wc = new Be(),
  Ys = [],
  am = new Be(),
  as = new Wt();
class om extends Wt {
  constructor(e, t, n) {
    super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new yc(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.count = n),
      (this.frustumCulled = !1);
    for (let i = 0; i < n; i++) this.setMatrixAt(i, am);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((as.geometry = this.geometry),
      (as.material = this.material),
      as.material !== void 0)
    )
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, vc),
          wc.multiplyMatrices(n, vc),
          (as.matrixWorld = wc),
          as.raycast(e, Ys);
        for (let a = 0, o = Ys.length; a < o; a++) {
          const c = Ys[a];
          (c.instanceId = s), (c.object = this), t.push(c);
        }
        Ys.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null &&
      (this.instanceColor = new yc(
        new Float32Array(this.instanceMatrix.count * 3),
        3
      )),
      t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ru extends gn {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Se(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Sc = new R(),
  Mc = new R(),
  Bc = new Be(),
  ea = new dr(),
  Ks = new Yi();
class qa extends $e {
  constructor(e = new en(), t = new ru()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        Sc.fromBufferAttribute(t, i - 1),
          Mc.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += Sc.distanceTo(Mc));
      e.setAttribute("lineDistance", new hn(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ks.copy(n.boundingSphere),
      Ks.applyMatrix4(i),
      (Ks.radius += s),
      e.ray.intersectsSphere(Ks) === !1)
    )
      return;
    Bc.copy(i).invert(), ea.copy(e.ray).applyMatrix4(Bc);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = new R(),
      f = new R(),
      h = new R(),
      u = new R(),
      p = this.isLineSegments ? 2 : 1,
      m = n.index,
      A = n.attributes.position;
    if (m !== null) {
      const g = Math.max(0, a.start),
        _ = Math.min(m.count, a.start + a.count);
      for (let b = g, E = _ - 1; b < E; b += p) {
        const C = m.getX(b),
          v = m.getX(b + 1);
        if (
          (l.fromBufferAttribute(A, C),
          f.fromBufferAttribute(A, v),
          ea.distanceSqToSegment(l, f, u, h) > c)
        )
          continue;
        u.applyMatrix4(this.matrixWorld);
        const x = e.ray.origin.distanceTo(u);
        x < e.near ||
          x > e.far ||
          t.push({
            distance: x,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: b,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const g = Math.max(0, a.start),
        _ = Math.min(A.count, a.start + a.count);
      for (let b = g, E = _ - 1; b < E; b += p) {
        if (
          (l.fromBufferAttribute(A, b),
          f.fromBufferAttribute(A, b + 1),
          ea.distanceSqToSegment(l, f, u, h) > c)
        )
          continue;
        u.applyMatrix4(this.matrixWorld);
        const v = e.ray.origin.distanceTo(u);
        v < e.near ||
          v > e.far ||
          t.push({
            distance: v,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: b,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
const Tc = new R(),
  Dc = new R();
class cm extends qa {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Tc.fromBufferAttribute(t, i),
          Dc.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + Tc.distanceTo(Dc));
      e.setAttribute("lineDistance", new hn(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class lm extends qa {
  constructor(e, t) {
    super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class au extends gn {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new Se(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Rc = new Be(),
  Ma = new dr(),
  Js = new Yi(),
  Xs = new R();
class um extends $e {
  constructor(e = new en(), t = new au()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Js.copy(n.boundingSphere),
      Js.applyMatrix4(i),
      (Js.radius += s),
      e.ray.intersectsSphere(Js) === !1)
    )
      return;
    Rc.copy(i).invert(), Ma.copy(e.ray).applyMatrix4(Rc);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = n.index,
      h = n.attributes.position;
    if (l !== null) {
      const u = Math.max(0, a.start),
        p = Math.min(l.count, a.start + a.count);
      for (let m = u, d = p; m < d; m++) {
        const A = l.getX(m);
        Xs.fromBufferAttribute(h, A), Lc(Xs, A, c, i, e, t, this);
      }
    } else {
      const u = Math.max(0, a.start),
        p = Math.min(h.count, a.start + a.count);
      for (let m = u, d = p; m < d; m++)
        Xs.fromBufferAttribute(h, m), Lc(Xs, m, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
function Lc(r, e, t, n, i, s, a) {
  const o = Ma.distanceSqToPoint(r);
  if (o < t) {
    const c = new R();
    Ma.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      object: a,
    });
  }
}
class ou extends Ct {
  constructor(e, t, n, i, s, a, o, c, l, f, h, u) {
    super(null, a, o, c, l, f, i, s, h, u),
      (this.isCompressedTexture = !0),
      (this.image = { width: t, height: n }),
      (this.mipmaps = e),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class hm extends ou {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, s, a),
      (this.isCompressedArrayTexture = !0),
      (this.image.depth = i),
      (this.wrapR = Ht);
  }
}
class Ya extends gn {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Se(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Se(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ul),
      (this.normalScale = new ye(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class pi extends Ya {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new ye(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return Tt((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new Se(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new Se(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Se(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._iridescence = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
function Gn(r, e, t) {
  return cu(r)
    ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length))
    : r.slice(e, t);
}
function Zs(r, e, t) {
  return !r || (!t && r.constructor === e)
    ? r
    : typeof e.BYTES_PER_ELEMENT == "number"
    ? new e(r)
    : Array.prototype.slice.call(r);
}
function cu(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function fm(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length,
    n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Qc(r, e, t) {
  const n = r.length,
    i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let c = 0; c !== e; ++c) i[a++] = r[o + c];
  }
  return i;
}
function lu(r, e, t, n) {
  let i = 1,
    s = r[0];
  for (; s !== void 0 && s[n] === void 0; ) s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        (a = s[n]),
          a !== void 0 && (e.push(s.time), t.push.apply(t, a)),
          (s = r[i++]);
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        (a = s[n]),
          a !== void 0 && (e.push(s.time), a.toArray(t, t.length)),
          (s = r[i++]);
      while (s !== void 0);
    else
      do (a = s[n]), a !== void 0 && (e.push(s.time), t.push(a)), (s = r[i++]);
      while (s !== void 0);
}
class Ss {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      s = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === o) break;
              if (((s = i), (i = t[++n]), e < i)) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && ((n = 2), (s = o));
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === c) break;
              if (((i = s), (s = t[--n - 1]), e >= s)) break e;
            }
            (a = n), (n = 0);
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = (n + a) >>> 1;
          e < t[o] ? (a = o) : (n = o + 1);
        }
        if (((i = t[n]), (s = t[n - 1]), s === void 0))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (i === void 0)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      s = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[s + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class dm extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: Fo, endingEnd: Fo });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2,
      a = e + 1,
      o = i[s],
      c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case ko:
          (s = e), (o = 2 * t - n);
          break;
        case No:
          (s = i.length - 2), (o = t + i[s] - i[s + 1]);
          break;
        default:
          (s = e), (o = n);
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case ko:
          (a = e), (c = 2 * n - t);
          break;
        case No:
          (a = 1), (c = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (c = t);
      }
    const l = (n - t) * 0.5,
      f = this.valueSize;
    (this._weightPrev = l / (t - o)),
      (this._weightNext = l / (c - n)),
      (this._offsetPrev = s * f),
      (this._offsetNext = a * f);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      f = this._offsetPrev,
      h = this._offsetNext,
      u = this._weightPrev,
      p = this._weightNext,
      m = (n - t) / (i - t),
      d = m * m,
      A = d * m,
      g = -u * A + 2 * u * d - u * m,
      _ = (1 + u) * A + (-1.5 - 2 * u) * d + (-0.5 + u) * m + 1,
      b = (-1 - p) * A + (1.5 + p) * d + 0.5 * m,
      E = p * A - p * d;
    for (let C = 0; C !== o; ++C)
      s[C] = g * a[f + C] + _ * a[l + C] + b * a[c + C] + E * a[h + C];
    return s;
  }
}
class Am extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      f = (n - t) / (i - t),
      h = 1 - f;
    for (let u = 0; u !== o; ++u) s[u] = a[l + u] * h + a[c + u] * f;
    return s;
  }
}
class pm extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class xn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = Zs(t, this.TimeBufferType)),
      (this.values = Zs(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Zs(e.times, Array),
        values: Zs(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new pm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Am(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new dm(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case _s:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Hi:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Mr:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return _s;
      case this.InterpolantFactoryMethodLinear:
        return Hi;
      case this.InterpolantFactoryMethodSmooth:
        return Mr;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let s = 0,
      a = i - 1;
    for (; s !== i && n[s] < e; ) ++s;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, s !== 0 || a !== i)) {
      s >= a && ((a = Math.max(a, 1)), (s = a - 1));
      const o = this.getValueSize();
      (this.times = Gn(n, s, a)), (this.values = Gn(this.values, s * o, a * o));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      s = n.length;
    s === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let o = 0; o !== s; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          o,
          c
        ),
          (e = !1);
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a),
          (e = !1);
        break;
      }
      a = c;
    }
    if (i !== void 0 && cu(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            o,
            l
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = Gn(this.times),
      t = Gn(this.values),
      n = this.getValueSize(),
      i = this.getInterpolation() === Mr,
      s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let c = !1;
      const l = e[o],
        f = e[o + 1];
      if (l !== f && (o !== 1 || l !== e[0]))
        if (i) c = !0;
        else {
          const h = o * n,
            u = h - n,
            p = h + n;
          for (let m = 0; m !== n; ++m) {
            const d = t[h + m];
            if (d !== t[u + m] || d !== t[p + m]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const h = o * n,
            u = a * n;
          for (let p = 0; p !== n; ++p) t[u + p] = t[h + p];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, c = a * n, l = 0; l !== n; ++l) t[c + l] = t[o + l];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = Gn(e, 0, a)), (this.values = Gn(t, 0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = Gn(this.times, 0),
      t = Gn(this.values, 0),
      n = this.constructor,
      i = new n(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
xn.prototype.TimeBufferType = Float32Array;
xn.prototype.ValueBufferType = Float32Array;
xn.prototype.DefaultInterpolation = Hi;
class Ji extends xn {}
Ji.prototype.ValueTypeName = "bool";
Ji.prototype.ValueBufferType = Array;
Ji.prototype.DefaultInterpolation = _s;
Ji.prototype.InterpolantFactoryMethodLinear = void 0;
Ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class uu extends xn {}
uu.prototype.ValueTypeName = "color";
class Is extends xn {}
Is.prototype.ValueTypeName = "number";
class gm extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = (n - t) / (i - t);
    let l = e * o;
    for (let f = l + o; l !== f; l += 4) _n.slerpFlat(s, 0, a, l - o, a, l, c);
    return s;
  }
}
class di extends xn {
  InterpolantFactoryMethodLinear(e) {
    return new gm(this.times, this.values, this.getValueSize(), e);
  }
}
di.prototype.ValueTypeName = "quaternion";
di.prototype.DefaultInterpolation = Hi;
di.prototype.InterpolantFactoryMethodSmooth = void 0;
class Xi extends xn {}
Xi.prototype.ValueTypeName = "string";
Xi.prototype.ValueBufferType = Array;
Xi.prototype.DefaultInterpolation = _s;
Xi.prototype.InterpolantFactoryMethodLinear = void 0;
Xi.prototype.InterpolantFactoryMethodSmooth = void 0;
class ys extends xn {}
ys.prototype.ValueTypeName = "vector";
class mm {
  constructor(e, t = -1, n, i = kh) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = un()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(_m(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return (s.uuid = e.uuid), s;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let s = 0, a = n.length; s !== a; ++s) t.push(xn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length,
      a = [];
    for (let o = 0; o < s; o++) {
      let c = [],
        l = [];
      c.push((o + s - 1) % s, o, (o + 1) % s), l.push(0, 1, 0);
      const f = fm(c);
      (c = Qc(c, 1, f)),
        (l = Qc(l, 1, f)),
        !i && c[0] === 0 && (c.push(s), l.push(l[0])),
        a.push(
          new Is(".morphTargetInfluences[" + t[o].name + "]", c, l).scale(1 / n)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        f = l.name.match(s);
      if (f && f.length > 1) {
        const h = f[1];
        let u = i[h];
        u || (i[h] = u = []), u.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (h, u, p, m, d) {
        if (p.length !== 0) {
          const A = [],
            g = [];
          lu(p, A, g, m), A.length !== 0 && d.push(new h(u, A, g));
        }
      },
      i = [],
      s = e.name || "default",
      a = e.fps || 30,
      o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let h = 0; h < l.length; h++) {
      const u = l[h].keys;
      if (!(!u || u.length === 0))
        if (u[0].morphTargets) {
          const p = {};
          let m;
          for (m = 0; m < u.length; m++)
            if (u[m].morphTargets)
              for (let d = 0; d < u[m].morphTargets.length; d++)
                p[u[m].morphTargets[d]] = -1;
          for (const d in p) {
            const A = [],
              g = [];
            for (let _ = 0; _ !== u[m].morphTargets.length; ++_) {
              const b = u[m];
              A.push(b.time), g.push(b.morphTarget === d ? 1 : 0);
            }
            i.push(new Is(".morphTargetInfluence[" + d + "]", A, g));
          }
          c = p.length * a;
        } else {
          const p = ".bones[" + t[h].name + "]";
          n(ys, p + ".position", u, "pos", i),
            n(di, p + ".quaternion", u, "rot", i),
            n(ys, p + ".scale", u, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(s, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function bm(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Is;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ys;
    case "color":
      return uu;
    case "quaternion":
      return di;
    case "bool":
    case "boolean":
      return Ji;
    case "string":
      return Xi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function _m(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = bm(r.type);
  if (r.times === void 0) {
    const t = [],
      n = [];
    lu(r.keys, t, n, "value"), (r.times = t), (r.values = n);
  }
  return e.parse !== void 0
    ? e.parse(r)
    : new e(r.name, r.times, r.values, r.interpolation);
}
const Wi = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  },
};
class Em {
  constructor(e, t, n) {
    const i = this;
    let s = !1,
      a = 0,
      o = 0,
      c;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (f) {
        o++, s === !1 && i.onStart !== void 0 && i.onStart(f, a, o), (s = !0);
      }),
      (this.itemEnd = function (f) {
        a++,
          i.onProgress !== void 0 && i.onProgress(f, a, o),
          a === o && ((s = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (f) {
        i.onError !== void 0 && i.onError(f);
      }),
      (this.resolveURL = function (f) {
        return c ? c(f) : f;
      }),
      (this.setURLModifier = function (f) {
        return (c = f), this;
      }),
      (this.addHandler = function (f, h) {
        return l.push(f, h), this;
      }),
      (this.removeHandler = function (f) {
        const h = l.indexOf(f);
        return h !== -1 && l.splice(h, 2), this;
      }),
      (this.getHandler = function (f) {
        for (let h = 0, u = l.length; h < u; h += 2) {
          const p = l[h],
            m = l[h + 1];
          if ((p.global && (p.lastIndex = 0), p.test(f))) return m;
        }
        return null;
      });
  }
}
const ms = new Em();
class gi {
  constructor(e) {
    (this.manager = e !== void 0 ? e : ms),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
const Bn = {};
class xm extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class fi extends gi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = Wi.get(e);
    if (s !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(s), this.manager.itemEnd(e);
        }, 0),
        s
      );
    if (Bn[e] !== void 0) {
      Bn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    (Bn[e] = []), Bn[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      o = this.mimeType,
      c = this.responseType;
    fetch(a)
      .then((l) => {
        if (l.status === 200 || l.status === 0) {
          if (
            (l.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              l.body === void 0 ||
              l.body.getReader === void 0)
          )
            return l;
          const f = Bn[e],
            h = l.body.getReader(),
            u = l.headers.get("Content-Length") || l.headers.get("X-File-Size"),
            p = u ? parseInt(u) : 0,
            m = p !== 0;
          let d = 0;
          const A = new ReadableStream({
            start(g) {
              _();
              function _() {
                h.read().then(({ done: b, value: E }) => {
                  if (b) g.close();
                  else {
                    d += E.byteLength;
                    const C = new ProgressEvent("progress", {
                      lengthComputable: m,
                      loaded: d,
                      total: p,
                    });
                    for (let v = 0, T = f.length; v < T; v++) {
                      const x = f[v];
                      x.onProgress && x.onProgress(C);
                    }
                    g.enqueue(E), _();
                  }
                });
              }
            },
          });
          return new Response(A);
        } else
          throw new xm(
            `fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,
            l
          );
      })
      .then((l) => {
        switch (c) {
          case "arraybuffer":
            return l.arrayBuffer();
          case "blob":
            return l.blob();
          case "document":
            return l.text().then((f) => new DOMParser().parseFromString(f, o));
          case "json":
            return l.json();
          default:
            if (o === void 0) return l.text();
            {
              const h = /charset="?([^;"\s]*)"?/i.exec(o),
                u = h && h[1] ? h[1].toLowerCase() : void 0,
                p = new TextDecoder(u);
              return l.arrayBuffer().then((m) => p.decode(m));
            }
        }
      })
      .then((l) => {
        Wi.add(e, l);
        const f = Bn[e];
        delete Bn[e];
        for (let h = 0, u = f.length; h < u; h++) {
          const p = f[h];
          p.onLoad && p.onLoad(l);
        }
      })
      .catch((l) => {
        const f = Bn[e];
        if (f === void 0) throw (this.manager.itemError(e), l);
        delete Bn[e];
        for (let h = 0, u = f.length; h < u; h++) {
          const p = f[h];
          p.onError && p.onError(l);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class Cm extends gi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = Wi.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = Cs("img");
    function c() {
      f(), Wi.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(h) {
      f(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function f() {
      o.removeEventListener("load", c, !1),
        o.removeEventListener("error", l, !1);
    }
    return (
      o.addEventListener("load", c, !1),
      o.addEventListener("error", l, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class Ba extends gi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new Ct(),
      a = new Cm(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (s.image = o), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        i
      ),
      s
    );
  }
}
class br extends $e {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Se(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const ta = new Be(),
  Pc = new R(),
  Fc = new R();
class Ka {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new ye(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Be()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new pr()),
      (this._frameExtents = new ye(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Ze(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    Pc.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Pc),
      Fc.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Fc),
      t.updateMatrixWorld(),
      ta.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(ta),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(ta);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class Im extends Ka {
  constructor() {
    super(new yt(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = xs * 2 * e.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = s), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class ym extends br {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy($e.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new $e()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = s),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new Im());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const kc = new Be(),
  os = new R(),
  na = new R();
class vm extends Ka {
  constructor() {
    super(new yt(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new ye(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Ze(2, 1, 1, 1),
        new Ze(0, 1, 1, 1),
        new Ze(3, 1, 1, 1),
        new Ze(1, 1, 1, 1),
        new Ze(3, 0, 1, 1),
        new Ze(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new R(1, 0, 0),
        new R(-1, 0, 0),
        new R(0, 0, 1),
        new R(0, 0, -1),
        new R(0, 1, 0),
        new R(0, -1, 0),
      ]),
      (this._cubeUps = [
        new R(0, 1, 0),
        new R(0, 1, 0),
        new R(0, 1, 0),
        new R(0, 1, 0),
        new R(0, 0, 1),
        new R(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      s = e.distance || n.far;
    s !== n.far && ((n.far = s), n.updateProjectionMatrix()),
      os.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(os),
      na.copy(n.position),
      na.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(na),
      n.updateMatrixWorld(),
      i.makeTranslation(-os.x, -os.y, -os.z),
      kc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(kc);
  }
}
class wm extends br {
  constructor(e, t, n = 0, i = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new vm());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Sm extends Ka {
  constructor() {
    super(new gr(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class ki extends br {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy($e.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new $e()),
      (this.shadow = new Sm());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class hu extends br {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class Ta {
  static decodeText(e) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
class Mm extends gi {
  constructor(e) {
    super(e),
      (this.isImageBitmapLoader = !0),
      typeof createImageBitmap > "u" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      typeof fetch > "u" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = Wi.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = {};
    (o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader),
      fetch(e, o)
        .then(function (c) {
          return c.blob();
        })
        .then(function (c) {
          return createImageBitmap(
            c,
            Object.assign(s.options, { colorSpaceConversion: "none" })
          );
        })
        .then(function (c) {
          Wi.add(e, c), t && t(c), s.manager.itemEnd(e);
        })
        .catch(function (c) {
          i && i(c), s.manager.itemError(e), s.manager.itemEnd(e);
        }),
      s.manager.itemStart(e);
  }
}
class fu {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Nc()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Nc();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function Nc() {
  return (typeof performance > "u" ? Date : performance).now();
}
const Ja = "\\[\\]\\.:\\/",
  Bm = new RegExp("[" + Ja + "]", "g"),
  Xa = "[^" + Ja + "]",
  Tm = "[^" + Ja.replace("\\.", "") + "]",
  Dm = /((?:WC+[\/:])*)/.source.replace("WC", Xa),
  Rm = /(WCOD+)?/.source.replace("WCOD", Tm),
  Lm = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Xa),
  Qm = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Xa),
  Pm = new RegExp("^" + Dm + Rm + Lm + Qm + "$"),
  Fm = ["material", "materials", "bones", "map"];
class km {
  constructor(e, t, n) {
    const i = n || Ke.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Ke {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || Ke.parseTrackName(t)),
      (this.node = Ke.findNode(e, this.parsedPath.nodeName) || e),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new Ke.Composite(e, t, n)
      : new Ke(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Bm, "");
  }
  static parseTrackName(e) {
    const t = Pm.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      Fm.indexOf(s) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = s));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (s) {
          for (let a = 0; a < s.length; a++) {
            const o = s[a];
            if (o.name === t || o.uuid === t) return o;
            const c = n(o.children);
            if (c) return c;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let s = t.propertyIndex;
    if (
      (e ||
        ((e = Ke.findNode(this.rootNode, t.nodeName) || this.rootNode),
        (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.error(
        "THREE.PropertyBinding: Trying to update node for track: " +
          this.path +
          " but it wasn't found."
      );
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let f = 0; f < e.length; f++)
            if (e[f].name === l) {
              l = f;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.map) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          l +
          "." +
          i +
          " but it wasn't found.",
        e
      );
      return;
    }
    let o = this.Versioning.None;
    (this.targetObject = e),
      e.needsUpdate !== void 0
        ? (o = this.Versioning.NeedsUpdate)
        : e.matrixWorldNeedsUpdate !== void 0 &&
          (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
          return;
        }
        e.morphTargetDictionary[s] !== void 0 &&
          (s = e.morphTargetDictionary[s]);
      }
      (c = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = s);
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[c]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[c][o]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
Ke.Composite = km;
Ke.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
Ke.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
Ke.prototype.GetterByBindingType = [
  Ke.prototype._getValue_direct,
  Ke.prototype._getValue_array,
  Ke.prototype._getValue_arrayElement,
  Ke.prototype._getValue_toArray,
];
Ke.prototype.SetterByBindingTypeAndVersioning = [
  [
    Ke.prototype._setValue_direct,
    Ke.prototype._setValue_direct_setNeedsUpdate,
    Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    Ke.prototype._setValue_array,
    Ke.prototype._setValue_array_setNeedsUpdate,
    Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    Ke.prototype._setValue_arrayElement,
    Ke.prototype._setValue_arrayElement_setNeedsUpdate,
    Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    Ke.prototype._setValue_fromArray,
    Ke.prototype._setValue_fromArray_setNeedsUpdate,
    Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class Nm {
  constructor(e, t, n = 0, i = 1 / 0) {
    (this.ray = new dr(e, t)),
      (this.near = n),
      (this.far = i),
      (this.camera = null),
      (this.layers = new Ga()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      });
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
      ? (this.ray.origin
          .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
          .unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        (this.camera = t))
      : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Da(e, this, n, t), n.sort(Uc), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++) Da(e[i], this, n, t);
    return n.sort(Uc), n;
  }
}
function Uc(r, e) {
  return r.distance - e.distance;
}
function Da(r, e, t, n) {
  if ((r.layers.test(e.layers) && r.raycast(e, t), n === !0)) {
    const i = r.children;
    for (let s = 0, a = i.length; s < a; s++) Da(i[s], e, t, !0);
  }
}
class Gc {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(Tt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Na } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Na));
const Um = {
  uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`,
};
let Ms = class {
  constructor() {
    (this.enabled = !0),
      (this.needsSwap = !0),
      (this.clear = !1),
      (this.renderToScreen = !1);
  }
  setSize() {}
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {}
};
const Gm = new gr(-1, 1, 1, -1, 0, 1),
  Za = new en();
Za.setAttribute("position", new hn([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
Za.setAttribute("uv", new hn([0, 2, 0, 0, 2, 0], 2));
class du {
  constructor(e) {
    this._mesh = new Wt(Za, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Gm);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class Om extends Ms {
  constructor(e, t) {
    super(),
      (this.textureID = t !== void 0 ? t : "tDiffuse"),
      e instanceof En
        ? ((this.uniforms = e.uniforms), (this.material = e))
        : e &&
          ((this.uniforms = Oa.clone(e.uniforms)),
          (this.material = new En({
            defines: Object.assign({}, e.defines),
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader,
          }))),
      (this.fsQuad = new du(this.material));
  }
  render(e, t, n) {
    this.uniforms[this.textureID] &&
      (this.uniforms[this.textureID].value = n.texture),
      (this.fsQuad.material = this.material),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(t),
          this.clear &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
          this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class Oc extends Ms {
  constructor(e, t) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.clear = !0),
      (this.needsSwap = !1),
      (this.inverse = !1);
  }
  render(e, t, n) {
    const i = e.getContext(),
      s = e.state;
    s.buffers.color.setMask(!1),
      s.buffers.depth.setMask(!1),
      s.buffers.color.setLocked(!0),
      s.buffers.depth.setLocked(!0);
    let a, o;
    this.inverse ? ((a = 0), (o = 1)) : ((a = 1), (o = 0)),
      s.buffers.stencil.setTest(!0),
      s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE),
      s.buffers.stencil.setFunc(i.ALWAYS, a, 4294967295),
      s.buffers.stencil.setClear(o),
      s.buffers.stencil.setLocked(!0),
      e.setRenderTarget(n),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      e.setRenderTarget(t),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      s.buffers.color.setLocked(!1),
      s.buffers.depth.setLocked(!1),
      s.buffers.stencil.setLocked(!1),
      s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295),
      s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP),
      s.buffers.stencil.setLocked(!0);
  }
}
class zm extends Ms {
  constructor() {
    super(), (this.needsSwap = !1);
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Hm {
  constructor(e, t) {
    if (((this.renderer = e), t === void 0)) {
      const n = e.getSize(new ye());
      (this._pixelRatio = e.getPixelRatio()),
        (this._width = n.width),
        (this._height = n.height),
        (t = new jn(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        )),
        (t.texture.name = "EffectComposer.rt1");
    } else
      (this._pixelRatio = 1),
        (this._width = t.width),
        (this._height = t.height);
    (this.renderTarget1 = t),
      (this.renderTarget2 = t.clone()),
      (this.renderTarget2.texture.name = "EffectComposer.rt2"),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2),
      (this.renderToScreen = !0),
      (this.passes = []),
      (this.copyPass = new Om(Um)),
      (this.clock = new fu());
  }
  swapBuffers() {
    const e = this.readBuffer;
    (this.readBuffer = this.writeBuffer), (this.writeBuffer = e);
  }
  addPass(e) {
    this.passes.push(e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio
      );
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio
      );
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled) return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let i = 0, s = this.passes.length; i < s; i++) {
      const a = this.passes[i];
      if (a.enabled !== !1) {
        if (
          ((a.renderToScreen =
            this.renderToScreen && this.isLastEnabledPass(i)),
          a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
          a.needsSwap)
        ) {
          if (n) {
            const o = this.renderer.getContext(),
              c = this.renderer.state.buffers.stencil;
            c.setFunc(o.NOTEQUAL, 1, 4294967295),
              this.copyPass.render(
                this.renderer,
                this.writeBuffer,
                this.readBuffer,
                e
              ),
              c.setFunc(o.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        Oc !== void 0 &&
          (a instanceof Oc ? (n = !0) : a instanceof zm && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new ye());
      (this._pixelRatio = this.renderer.getPixelRatio()),
        (this._width = t.width),
        (this._height = t.height),
        (e = this.renderTarget1.clone()),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        );
    }
    this.renderTarget1.dispose(),
      this.renderTarget2.dispose(),
      (this.renderTarget1 = e),
      (this.renderTarget2 = e.clone()),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2);
  }
  setSize(e, t) {
    (this._width = e), (this._height = t);
    const n = this._width * this._pixelRatio,
      i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let s = 0; s < this.passes.length; s++) this.passes[s].setSize(n, i);
  }
  setPixelRatio(e) {
    (this._pixelRatio = e), this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(),
      this.renderTarget2.dispose(),
      this.copyPass.dispose();
  }
}
class Au extends Ms {
  constructor(e, t, n, i, s) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.overrideMaterial = n),
      (this.clearColor = i),
      (this.clearAlpha = s !== void 0 ? s : 0),
      (this.clear = !0),
      (this.clearDepth = !1),
      (this.needsSwap = !1),
      (this._oldClearColor = new Se());
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let s, a;
    this.overrideMaterial !== void 0 &&
      ((a = this.scene.overrideMaterial),
      (this.scene.overrideMaterial = this.overrideMaterial)),
      this.clearColor &&
        (e.getClearColor(this._oldClearColor),
        (s = e.getClearAlpha()),
        e.setClearColor(this.clearColor, this.clearAlpha)),
      this.clearDepth && e.clearDepth(),
      e.setRenderTarget(this.renderToScreen ? null : n),
      this.clear &&
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
      e.render(this.scene, this.camera),
      this.clearColor && e.setClearColor(this._oldClearColor, s),
      this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = a),
      (e.autoClear = i);
  }
}
const Vm = (r, e, t) => {
    (r.renderer = new nu({
      powerPreference: "high-performance",
      canvas: e,
      antialias: !0,
      alpha: !0,
      ...t,
    })),
      (r.composer = new Hm(r.renderer)),
      r.composer.addPass(new Au(r.scene, Fa(r.camera)));
  },
  zc = (r, e, t) => {
    r.renderer &&
      (e ? (r.renderer.outputEncoding = bn) : (r.renderer.outputEncoding = Ne),
      t ? (r.renderer.toneMapping = pn) : (r.renderer.toneMapping = Ll));
  },
  Hc = (r, e, t) => {
    var n, i, s, a, o, c, l, f;
    !r.renderer ||
      !r.composer ||
      ((i = (n = r.renderer).setSize) == null || i.call(n, e.width, e.height),
      (a = (s = r.renderer).setPixelRatio) == null || a.call(s, t),
      (c = (o = r.composer).setSize) == null || c.call(o, e.width, e.height),
      (f = (l = r.composer).setPixelRatio) == null || f.call(l, t));
  },
  Vc = (r, e, t) => {
    r.renderer &&
      ((r.renderer.shadowMap.enabled = e), (r.renderer.shadowMap.type = t));
  },
  $t = (r) => r.userData,
  Wm = (r, e) => {
    r.pointer.update((t) =>
      r.renderer
        ? t.set(
            (e.offsetX / r.renderer.domElement.clientWidth) * 2 - 1,
            -(e.offsetY / r.renderer.domElement.clientHeight) * 2 + 1
          )
        : t
    );
  },
  pu = (r, e, t, n) => (
    r.raycaster.setFromCamera(e, t), r.raycaster.intersectObjects(n, !1)
  ),
  jm = (r, e) =>
    r.object.uuid !== e.object.uuid || r.instanceId !== e.instanceId,
  qm = (r, e, t) => {
    let n;
    const i = r.camera.subscribe((l) => (n = l));
    nt(i);
    let s;
    const a = r.pointer.subscribe((l) => (s = l));
    nt(a);
    let o;
    const c = (l) => {
      var u, p;
      l.preventDefault();
      const f = l.type;
      r.pointerOverCanvas.set(!0), (t.pointerInvalidated = !0), Wm(r, l);
      const h = Ym(e, s, n);
      if (
        (f === "pointerdown" &&
          (o = h ? { object: h.object, instanceId: h.instanceId } : null),
        f === "click")
      ) {
        if (!Km(h, o)) {
          o = null;
          return;
        }
        o = null;
      }
      h &&
        ((p = (u = $t(h.object)).eventDispatcher) == null ||
          p.call(u, f, { ...h, event: l }));
    };
    return {
      onClick: c,
      onContextMenu: c,
      onPointerUp: c,
      onPointerDown: c,
      onPointerMove: c,
    };
  };
function Ym(r, e, t) {
  if (r.interactiveObjects.size === 0 || r.raycastableObjects.size === 0)
    return null;
  const n = pu(r, e, t, Array.from(r.raycastableObjects));
  return n.length === 0 || !r.interactiveObjects.has(n[0].object) ? null : n[0];
}
function Km(r, e) {
  return !r || !e
    ? !1
    : r.object.uuid === e.object.uuid && r.instanceId === e.instanceId;
}
const Jm = (r, e) => {
    let t;
    const n = r.pointerOverCanvas.subscribe((l) => (t = l));
    nt(n);
    let i;
    const s = r.camera.subscribe((l) => (i = l));
    nt(s);
    let a;
    const o = r.pointer.subscribe((l) => (a = l));
    return (
      nt(o),
      {
        raycast: () => {
          var h, u, p, m, d, A, g, _;
          if (
            e.interactiveObjects.size === 0 ||
            e.raycastableObjects.size === 0
          )
            return;
          const l = t ? pu(e, a, i, Array.from(e.raycastableObjects)) : [],
            f = l.length && e.interactiveObjects.has(l[0].object) ? l[0] : null;
          f
            ? e.lastIntersection
              ? e.lastIntersection &&
                jm(e.lastIntersection, f) &&
                ((A = (d = $t(e.lastIntersection.object)).eventDispatcher) ==
                  null || A.call(d, "pointerleave", e.lastIntersection),
                (_ = (g = $t(f.object)).eventDispatcher) == null ||
                  _.call(g, "pointerenter", f))
              : (m = (p = $t(f.object)).eventDispatcher) == null ||
                m.call(p, "pointerenter", f)
            : e.lastIntersection &&
              ((u = (h = $t(e.lastIntersection.object)).eventDispatcher) ==
                null ||
                u.call(h, "pointerleave", e.lastIntersection)),
            (e.lastIntersection = f);
        },
      }
    );
  },
  _r = typeof window < "u",
  Xm = (r) => {
    if (!_r) return;
    let e;
    const t = () => {
      r(), (e = requestAnimationFrame(t));
    };
    t(),
      nt(() => {
        e && cancelAnimationFrame(e);
      });
  },
  Zm = (r, e) => {
    if (e.frameHandlers.size === 0) return;
    if (e.debugFrameloop) {
      let i = 0;
      e.frameHandlers.forEach((s) => {
        s.debugFrameloopMessage
          ? (e.invalidations[s.debugFrameloopMessage] =
              s.debugFrameloopMessage in e.invalidations
                ? e.invalidations[s.debugFrameloopMessage] + 1
                : 1)
          : ++i;
      }),
        i > 0 && (e.invalidations.onFrame = e.frameHandlers.size);
    }
    const t = Array.from(e.frameHandlers).reduce(
        (i, s) => (s.order ? !0 : i),
        !1
      ),
      n = r.clock.getDelta();
    t
      ? Array.from(e.frameHandlers)
          .sort((i, s) => ((i.order ?? 0) > (s.order ?? 0) ? 1 : -1))
          .forEach((i) => i.fn(r, n))
      : e.frameHandlers.forEach((i) => i.fn(r, n));
  },
  $m = (r) => {
    r.debugFrameloop &&
      ((r.frame += 1),
      console.log(
        `frame: ${r.frame}${
          Object.keys(r.invalidations).length > 0 ? ", requested by ↴" : ""
        }`
      ),
      Object.keys(r.invalidations).length > 0 && console.table(r.invalidations),
      (r.invalidations = {}));
  },
  eb = (r, e, t, n) => {
    let i = Fa(r.camera);
    const s = r.camera.subscribe((o) => (i = o));
    nt(s);
    const { raycast: a } = Jm(r, e);
    Xm(() => {
      n.dispose();
      const o =
        t.frameloop === "always" ||
        (t.frameloop === "demand" &&
          (t.frameInvalidated || t.frameHandlers.size > 0)) ||
        (t.frameloop === "never" && t.advance);
      (o || t.pointerInvalidated) && (a(), (t.pointerInvalidated = !1)),
        o &&
          (!i ||
            !r.composer ||
            !r.renderer ||
            (Zm(r, t),
            r.composer.passes.length > 1
              ? r.composer.render()
              : r.renderer.render(r.scene, i),
            $m(t),
            (t.frameInvalidated = !1),
            (t.advance = !1)));
    });
  },
  tb = () => {
    const r = new yt(75, 0, 0.1, 1e3);
    return (
      ($t(r).threlteDefaultCamera = !0),
      (r.position.z = 5),
      r.lookAt(0, 0, 0),
      r
    );
  },
  nb = (r) => {
    const e = r.size.subscribe((t) => {
      $t(Fa(r.camera)).threlteDefaultCamera &&
        r.camera.update((n) => {
          const i = n;
          return (
            (i.aspect = t.width / t.height),
            i.updateProjectionMatrix(),
            r.invalidate("Default camera: aspect ratio changed"),
            i
          );
        });
    });
    nt(e);
  },
  ib = (r, e, t, n, i, s, a) => {
    const o = {
        audioListeners: new Map(),
        addAudioListener: (g, _) => {
          if (((_ = _ ?? "default"), o.audioListeners.has(_))) {
            console.warn(
              `An AudioListener with the id "${_}" has already been added, aborting.`
            );
            return;
          }
          o.audioListeners.set(_, g);
        },
        removeAudioListener: (g) => {
          if (((g = g ?? "default"), !o.audioListeners.has(g))) {
            console.warn(
              `No AudioListener with the id "${g}" found, aborting.`
            );
            return;
          }
          o.audioListeners.delete(g);
        },
        getAudioListener: (g) => {
          if (((g = g ?? "default"), !o.audioListeners.has(g))) {
            console.warn(
              `No AudioListener with the id "${g}" found, aborting.`
            );
            return;
          }
          return o.audioListeners.get(g);
        },
      },
      c = {
        debugFrameloop: s,
        frameloop: a,
        frame: 0,
        frameInvalidated: !0,
        pointerInvalidated: !0,
        invalidations: {},
        frameHandlers: new Set(),
        advance: !1,
      },
      l = {
        size: Ju([n, i], ([g, _]) => g || _),
        pointer: xt(new ye()),
        pointerOverCanvas: xt(!1),
        clock: new fu(),
        camera: xt(tb()),
        scene: new tm(),
        renderer: void 0,
        composer: void 0,
        invalidate: (g) => {
          (c.frameInvalidated = !0),
            c.debugFrameloop &&
              g &&
              (c.invalidations[g] = c.invalidations[g]
                ? c.invalidations[g] + 1
                : 1);
        },
        advance: () => {
          c.advance = !0;
        },
      },
      f = {
        flat: xt(e),
        linear: xt(r),
        dpr: xt(t),
        setCamera: (g) => {
          l.camera.set(g),
            l.composer &&
              (l.composer.passes.forEach((_) => {
                _ instanceof Au && (_.camera = g);
              }),
              l.invalidate("Canvas: setting camera"));
        },
        raycastableObjects: new Set(),
        interactiveObjects: new Set(),
        raycaster: new Nm(),
        lastIntersection: null,
        addRaycastableObject: (g) => {
          f.raycastableObjects.add(g);
        },
        removeRaycastableObject: (g) => {
          f.raycastableObjects.delete(g);
        },
        addInteractiveObject: (g) => {
          f.interactiveObjects.add(g);
        },
        removeInteractiveObject: (g) => {
          f.interactiveObjects.delete(g);
        },
        addPass: (g) => {
          l.composer &&
            (l.composer.addPass(g), l.invalidate("Canvas: adding pass"));
        },
        removePass: (g) => {
          l.composer &&
            (l.composer.removePass(g), l.invalidate("Canvas: removing pass"));
        },
      },
      h = {
        dispose: async (g = !1) => {
          await bs(),
            !(!h.shouldDispose && !g) &&
              (h.disposableObjects.forEach((_, b) => {
                var E;
                (_ === 0 || g) &&
                  ((E = b == null ? void 0 : b.dispose) == null || E.call(b),
                  h.disposableObjects.delete(b));
              }),
              (h.shouldDispose = !1));
        },
        collectDisposableObjects: (g, _) => {
          const b = _ ?? [];
          return (
            g &&
              (g != null &&
                g.dispose &&
                typeof g.dispose == "function" &&
                g.type !== "Scene" &&
                b.push(g),
              Object.entries(g).forEach(([E, C]) => {
                if (E === "parent" || E === "children" || typeof C != "object")
                  return;
                const v = C;
                v != null && v.dispose && h.collectDisposableObjects(v, b);
              })),
            b
          );
        },
        addDisposableObjects: (g) => {
          g.forEach((_) => {
            const b = h.disposableObjects.get(_);
            b
              ? h.disposableObjects.set(_, b + 1)
              : h.disposableObjects.set(_, 1);
          });
        },
        removeDisposableObjects: (g) => {
          g.length !== 0 &&
            (g.forEach((_) => {
              const b = h.disposableObjects.get(_);
              b && b > 0 && h.disposableObjects.set(_, b - 1);
            }),
            (h.shouldDispose = !0));
        },
        disposableObjects: new Map(),
        shouldDispose: !1,
      };
    return (
      an("threlte", l),
      an("threlte-root", f),
      an("threlte-render-context", c),
      an("threlte-audio-context", o),
      an("threlte-disposal-context", h),
      {
        ctx: l,
        rootCtx: f,
        renderCtx: c,
        audioCtx: o,
        disposalCtx: h,
        getCtx: () => l,
        getRootCtx: () => f,
        getRenderCtx: () => c,
        getAudioCtx: () => o,
        getDisposalCtx: () => h,
      }
    );
  };
function $a(r, e) {
  const t = xt(r);
  let n = r;
  const i = t.subscribe((o) => (n = o));
  return (
    nt(i),
    {
      ...t,
      set: (o) => {
        if ((o == null ? void 0 : o.uuid) === (n == null ? void 0 : n.uuid))
          return;
        const c = n;
        t.set(o), e == null || e(o, c);
      },
      update: (o) => {
        const c = o(n);
        if ((c == null ? void 0 : c.uuid) === (n == null ? void 0 : n.uuid))
          return;
        const l = n;
        t.set(c), e == null || e(c, l);
      },
    }
  );
}
const qt = () => mn("threlte");
function sb(r) {
  let e;
  const t = r[8].default,
    n = qn(t, r, r[7], null);
  return {
    c() {
      n && n.c();
    },
    l(i) {
      n && n.l(i);
    },
    m(i, s) {
      n && n.m(i, s), (e = !0);
    },
    p(i, [s]) {
      n &&
        n.p &&
        (!e || s & 128) &&
        Yn(n, t, i, i[7], e ? Jn(t, i[7], s, null) : Kn(i[7]), null);
    },
    i(i) {
      e || (ce(n, i), (e = !0));
    },
    o(i) {
      Ae(n, i), (e = !1);
    },
    d(i) {
      n && n.d(i);
    },
  };
}
const rb = () => ({
    onChildMount: mn("threlte-hierarchical-object-on-mount"),
    onChildDestroy: mn("threlte-hierarchical-object-on-destroy"),
  }),
  gu = () => mn("threlte-hierarchical-parent-context");
function ab(r, e, t) {
  var g;
  let n,
    { $$slots: i = {}, $$scope: s } = e,
    { object: a = void 0 } = e,
    { children: o = [] } = e,
    { onChildMount: c = void 0 } = e;
  const l = (_) => {
    o.push(_), t(1, o), c == null || c(_);
  };
  let { onChildDestroy: f = void 0 } = e;
  const h = (_) => {
      const b = o.findIndex((E) => E.uuid === _.uuid);
      b !== -1 && o.splice(b, 1), t(1, o), f == null || f(_);
    },
    { invalidate: u } = qt(),
    p = gu();
  ft(r, p, (_) => t(6, (n = _)));
  let { parent: m = n } = e;
  const d = rb();
  a &&
    ((g = d.onChildMount) == null || g.call(d, a),
    u("HierarchicalObject: object added"));
  const A = $a(a, (_, b) => {
    var E, C;
    b &&
      ((E = d.onChildDestroy) == null || E.call(d, b),
      u("HierarchicalObject: object added")),
      _ &&
        ((C = d.onChildMount) == null || C.call(d, _),
        u("HierarchicalObject: object removed"));
  });
  return (
    nt(() => {
      var _;
      a &&
        ((_ = d.onChildDestroy) == null || _.call(d, a),
        u("HierarchicalObject: object removed"));
    }),
    an("threlte-hierarchical-object-on-mount", l),
    an("threlte-hierarchical-object-on-destroy", h),
    an("threlte-hierarchical-parent-context", A),
    (r.$$set = (_) => {
      "object" in _ && t(3, (a = _.object)),
        "children" in _ && t(1, (o = _.children)),
        "onChildMount" in _ && t(4, (c = _.onChildMount)),
        "onChildDestroy" in _ && t(5, (f = _.onChildDestroy)),
        "parent" in _ && t(2, (m = _.parent)),
        "$$scope" in _ && t(7, (s = _.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 64 && t(2, (m = n)), r.$$.dirty & 8 && A.set(a);
    }),
    [p, o, m, a, c, f, n, s, i]
  );
}
class ob extends pt {
  constructor(e) {
    super(),
      gt(this, e, ab, sb, ut, {
        object: 3,
        children: 1,
        onChildMount: 4,
        onChildDestroy: 5,
        parent: 2,
      });
  }
}
function cb(r) {
  let e;
  const t = r[1].default,
    n = qn(t, r, r[4], null);
  return {
    c() {
      n && n.c();
    },
    l(i) {
      n && n.l(i);
    },
    m(i, s) {
      n && n.m(i, s), (e = !0);
    },
    p(i, s) {
      n &&
        n.p &&
        (!e || s & 16) &&
        Yn(n, t, i, i[4], e ? Jn(t, i[4], s, null) : Kn(i[4]), null);
    },
    i(i) {
      e || (ce(n, i), (e = !0));
    },
    o(i) {
      Ae(n, i), (e = !1);
    },
    d(i) {
      n && n.d(i);
    },
  };
}
function lb(r) {
  let e, t;
  return (
    (e = new ob({
      props: {
        object: r[0],
        onChildMount: r[2],
        onChildDestroy: r[3],
        $$slots: { default: [cb] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const s = {};
        i & 1 && (s.object = n[0]),
          i & 1 && (s.onChildMount = n[2]),
          i & 1 && (s.onChildDestroy = n[3]),
          i & 16 && (s.$$scope = { dirty: i, ctx: n }),
          e.$set(s);
      },
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function ub(r, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { object: s } = e;
  const a = (c) => s.add(c),
    o = (c) => s.remove(c);
  return (
    (r.$$set = (c) => {
      "object" in c && t(0, (s = c.object)),
        "$$scope" in c && t(4, (i = c.$$scope));
    }),
    [s, n, a, o, i]
  );
}
class eo extends pt {
  constructor(e) {
    super(), gt(this, e, ub, lb, ut, { object: 0 });
  }
}
const hb = () => {
  const r = xt({ width: 0, height: 0 });
  let e = { width: 0, height: 0 };
  const t = r.subscribe((a) => (e = a));
  nt(t);
  let n;
  const i = () => {
      const a = e;
      if (!n || !n.parentElement) return;
      const { clientWidth: o, clientHeight: c } = n.parentElement;
      (o !== a.width || c !== a.height) && r.set({ width: o, height: c });
    },
    s = (a) => {
      (n = a), i(), window.addEventListener("resize", i);
    };
  return _r
    ? (nt(() => {
        window.removeEventListener("resize", i);
      }),
      { parentSizeAction: s, parentSize: r })
    : { parentSize: r, parentSizeAction: s };
};
function Wc(r) {
  let e, t;
  return (
    (e = new eo({
      props: {
        object: r[0].scene,
        $$slots: { default: [fb] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p(n, i) {
        const s = {};
        i[1] & 4 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
      },
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function fb(r) {
  let e;
  const t = r[29].default,
    n = qn(t, r, r[33], null);
  return {
    c() {
      n && n.c();
    },
    l(i) {
      n && n.l(i);
    },
    m(i, s) {
      n && n.m(i, s), (e = !0);
    },
    p(i, s) {
      n &&
        n.p &&
        (!e || s[1] & 4) &&
        Yn(n, t, i, i[33], e ? Jn(t, i[33], s, null) : Kn(i[33]), null);
    },
    i(i) {
      e || (ce(n, i), (e = !0));
    },
    o(i) {
      Ae(n, i), (e = !1);
    },
    d(i) {
      n && n.d(i);
    },
  };
}
function db(r) {
  let e,
    t,
    n,
    i,
    s = r[2] && Wc(r);
  return {
    c() {
      (e = cr("canvas")), s && s.c(), this.h();
    },
    l(a) {
      e = lr(a, "CANVAS", { class: !0 });
      var o = ur(e);
      s && s.l(o), o.forEach(Fe), this.h();
    },
    h() {
      hr(e, "class", "svelte-o3oskp");
    },
    m(a, o) {
      We(a, e, o),
        s && s.m(e, null),
        r[30](e),
        (t = !0),
        n ||
          ((i = [
            zu(r[3].call(null, e)),
            ti(e, "click", r[9]),
            ti(e, "contextmenu", r[10]),
            ti(e, "pointerup", r[13]),
            ti(e, "pointerdown", r[11]),
            ti(e, "pointermove", r[12]),
            ti(e, "pointerenter", r[31]),
            ti(e, "pointerleave", r[32]),
          ]),
          (n = !0));
    },
    p(a, o) {
      a[2]
        ? s
          ? (s.p(a, o), o[0] & 4 && ce(s, 1))
          : ((s = Wc(a)), s.c(), ce(s, 1), s.m(e, null))
        : s &&
          (cn(),
          Ae(s, 1, 1, () => {
            s = null;
          }),
          ln());
    },
    i(a) {
      t || (ce(s), (t = !0));
    },
    o(a) {
      Ae(s), (t = !1);
    },
    d(a) {
      a && Fe(e), s && s.d(), r[30](null), (n = !1), Hu(i);
    },
  };
}
const jc = new Set();
function Ab(r, e, t) {
  let n,
    i,
    s,
    a,
    { $$slots: o = {}, $$scope: c } = e,
    { dpr: l = _r ? window.devicePixelRatio : 1 } = e,
    { flat: f = !1 } = e,
    { linear: h = !1 } = e,
    { frameloop: u = "demand" } = e,
    { debugFrameloop: p = !1 } = e,
    { shadows: m = !0 } = e,
    { shadowMapType: d = Bl } = e,
    { size: A = void 0 } = e,
    { rendererParameters: g = void 0 } = e,
    _,
    b = !1;
  const E = xt(A),
    { parentSize: C, parentSizeAction: v } = hb(),
    T = ib(h, f, l, E, C, p, u),
    { getCtx: x, renderCtx: w, disposalCtx: B } = T,
    { ctx: G, rootCtx: H, audioCtx: P } = T;
  nb(G),
    jc.add(G.invalidate),
    nt(() => {
      jc.delete(G.invalidate);
    });
  const { size: Q, scene: z } = G;
  ft(r, Q, (ae) => t(26, (i = ae)));
  const { flat: Y, linear: K, dpr: O } = H;
  ft(r, Y, (ae) => t(27, (s = ae))),
    ft(r, K, (ae) => t(28, (a = ae))),
    ft(r, O, (ae) => t(25, (n = ae))),
    an("threlte-parent", xt(z)),
    yl(() => {
      _ && (Vm(G, _, g), zc(G, a, s), Hc(G, i, n), Vc(G, m, d), t(2, (b = !0)));
    }),
    eb(G, H, w, B);
  const {
    onClick: ee,
    onContextMenu: Z,
    onPointerDown: W,
    onPointerMove: U,
    onPointerUp: $,
  } = qm(G, H, w);
  nt(() => {
    B.dispose(!0);
  });
  function ie(ae) {
    ka[ae ? "unshift" : "push"](() => {
      (_ = ae), t(1, _);
    });
  }
  const se = () => x().pointerOverCanvas.set(!0),
    D = () => x().pointerOverCanvas.set(!1);
  return (
    (r.$$set = (ae) => {
      "dpr" in ae && t(14, (l = ae.dpr)),
        "flat" in ae && t(15, (f = ae.flat)),
        "linear" in ae && t(16, (h = ae.linear)),
        "frameloop" in ae && t(17, (u = ae.frameloop)),
        "debugFrameloop" in ae && t(18, (p = ae.debugFrameloop)),
        "shadows" in ae && t(19, (m = ae.shadows)),
        "shadowMapType" in ae && t(20, (d = ae.shadowMapType)),
        "size" in ae && t(21, (A = ae.size)),
        "rendererParameters" in ae && t(22, (g = ae.rendererParameters)),
        "$$scope" in ae && t(33, (c = ae.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty[0] & 2097152 && E.set(A),
        r.$$.dirty[0] & 65536 && vr(K, (a = h), a),
        r.$$.dirty[0] & 32768 && vr(Y, (s = f), s),
        r.$$.dirty[0] & 16384 && vr(O, (n = l), n),
        r.$$.dirty[0] & 402653184 && zc(x(), a, s),
        r.$$.dirty[0] & 100663296 && Hc(x(), i, n),
        r.$$.dirty[0] & 1572864 && Vc(x(), m, d);
    }),
    [
      G,
      _,
      b,
      v,
      x,
      Q,
      Y,
      K,
      O,
      ee,
      Z,
      W,
      U,
      $,
      l,
      f,
      h,
      u,
      p,
      m,
      d,
      A,
      g,
      H,
      P,
      n,
      i,
      s,
      a,
      o,
      ie,
      se,
      D,
      c,
    ]
  );
}
class mu extends pt {
  constructor(e) {
    super(),
      gt(
        this,
        e,
        Ab,
        db,
        ut,
        {
          dpr: 14,
          flat: 15,
          linear: 16,
          frameloop: 17,
          debugFrameloop: 18,
          shadows: 19,
          shadowMapType: 20,
          size: 21,
          rendererParameters: 22,
          ctx: 0,
          rootCtx: 23,
          audioCtx: 24,
        },
        null,
        [-1, -1]
      );
  }
  get ctx() {
    return this.$$.ctx[0];
  }
  get rootCtx() {
    return this.$$.ctx[23];
  }
  get audioCtx() {
    return this.$$.ctx[24];
  }
}
const to = () => mn("threlte-root"),
  pb = () => mn("threlte-disposal-context");
function gb(r) {
  let e;
  const t = r[9].default,
    n = qn(t, r, r[8], null);
  return {
    c() {
      n && n.c();
    },
    l(i) {
      n && n.l(i);
    },
    m(i, s) {
      n && n.m(i, s), (e = !0);
    },
    p(i, [s]) {
      n &&
        n.p &&
        (!e || s & 256) &&
        Yn(n, t, i, i[8], e ? Jn(t, i[8], s, null) : Kn(i[8]), null);
    },
    i(i) {
      e || (ce(n, i), (e = !0));
    },
    o(i) {
      Ae(n, i), (e = !1);
    },
    d(i) {
      n && n.d(i);
    },
  };
}
const qc = "threlte-disposable-object-context";
function mb(r, e, t) {
  let n,
    i,
    { $$slots: s = {}, $$scope: a } = e;
  const {
    collectDisposableObjects: o,
    addDisposableObjects: c,
    removeDisposableObjects: l,
  } = pb();
  let { object: f = void 0 } = e,
    h = f,
    { dispose: u = void 0 } = e;
  const p = mn(qc);
  ft(r, p, (A) => t(7, (i = A)));
  const m = xt(u ?? i ?? !0);
  ft(r, m, (A) => t(6, (n = A))), an(qc, m);
  let d = n ? o(f) : [];
  return (
    c(d),
    nt(() => {
      l(d);
    }),
    (r.$$set = (A) => {
      "object" in A && t(2, (f = A.object)),
        "dispose" in A && t(3, (u = A.dispose)),
        "$$scope" in A && t(8, (a = A.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 136 && m.set(u ?? i ?? !0),
        r.$$.dirty & 116 &&
          f !== h &&
          (l(d), t(5, (d = n ? o(f) : [])), c(d), t(4, (h = f)));
    }),
    [p, m, f, u, h, d, n, i, a, s]
  );
}
class Bs extends pt {
  constructor(e) {
    super(), gt(this, e, mb, gb, ut, { object: 2, dispose: 3 });
  }
}
function bb(r, e, t) {
  let n,
    i,
    { object: s } = e;
  const a = $a(s);
  ft(r, a, (l) => t(4, (i = l)));
  const o = mn("threlte-layers");
  ft(r, o, (l) => t(3, (n = l)));
  const { invalidate: c } = qt();
  return (
    (r.$$set = (l) => {
      "object" in l && t(2, (s = l.object));
    }),
    (r.$$.update = () => {
      if ((r.$$.dirty & 4 && a.set(s), r.$$.dirty & 24)) {
        if (n === "all") i.layers.enableAll();
        else if (n === "none") i.layers.disableAll();
        else if (Array.isArray(n))
          for (let l = 0; l < 32; l += 1) {
            const f = l;
            n.includes(f) ? i.layers.enable(l) : i.layers.disable(l);
          }
        else n !== void 0 && i.layers.set(n);
        c("LayerableObject");
      }
    }),
    [a, o, s, n, i]
  );
}
class bu extends pt {
  constructor(e) {
    super(), gt(this, e, bb, null, ut, { object: 2 });
  }
}
const Er = (r, e) => {
    if (!_r) return { start: () => {}, stop: () => {}, started: Xu(!1) };
    const t = mn("threlte-render-context"),
      n = {
        fn: r,
        order: e == null ? void 0 : e.order,
        debugFrameloopMessage: e == null ? void 0 : e.debugFrameloopMessage,
      },
      i = xt(!1),
      s = () => {
        t.frameHandlers.delete(n), i.set(!1);
      },
      a = () => {
        t.frameHandlers.add(n), i.set(!0);
      };
    return (
      ((e == null ? void 0 : e.autostart) ?? !0) && a(),
      nt(() => {
        s();
      }),
      { start: a, stop: s, started: { subscribe: i.subscribe } }
    );
  },
  _u = () => {
    const r = xt(!1);
    return (
      (async () => {
        await bs(), r.set(!0);
      })(),
      r
    );
  };
function _b(r, e, t) {
  let n,
    i,
    { object: s } = e,
    { position: a = void 0 } = e,
    { scale: o = void 0 } = e,
    { rotation: c = void 0 } = e,
    { lookAt: l = void 0 } = e;
  const f = new R(),
    h = ji(),
    { invalidate: u } = qt(),
    p = _u();
  ft(r, p, (b) => t(8, (i = b)));
  const m = async () => {
      i || (await bs()), h("transform");
    },
    d = async () => {
      u("TransformableObject: transformed"), await m();
    };
  $t(s).onTransform = d;
  const { start: A, stop: g } = Er(
      async () => {
        l &&
          !c &&
          l instanceof $e &&
          (l.getWorldPosition(f), s.lookAt(f), await m());
      },
      {
        autostart: !1,
        debugFrameloopMessage: "TransformableObject: tracking object",
      }
    ),
    _ = $a(s);
  return (
    ft(r, _, (b) => t(7, (n = b))),
    (r.$$set = (b) => {
      "object" in b && t(2, (s = b.object)),
        "position" in b && t(3, (a = b.position)),
        "scale" in b && t(4, (o = b.scale)),
        "rotation" in b && t(5, (c = b.rotation)),
        "lookAt" in b && t(6, (l = b.lookAt));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 4 && _.set(s),
        r.$$.dirty & 232 &&
          (a && (n.position.set(a.x ?? 0, a.y ?? 0, a.z ?? 0), d()),
          l &&
            !c &&
            (l instanceof $e
              ? A()
              : (g(), n.lookAt(l.x ?? 0, l.y ?? 0, l.z ?? 0), d())),
          l || g()),
        r.$$.dirty & 144 &&
          o &&
          (typeof o == "number"
            ? n.scale.set(o, o, o)
            : n.scale.set(o.x ?? 1, o.y ?? 1, o.z ?? 1),
          d()),
        r.$$.dirty & 160 &&
          c &&
          (n.rotation.set(c.x ?? 0, c.y ?? 0, c.z ?? 0, c.order ?? "XYZ"), d());
    }),
    [p, _, s, a, o, c, l, n]
  );
}
class Eu extends pt {
  constructor(e) {
    super(),
      gt(this, e, _b, null, ut, {
        object: 2,
        position: 3,
        scale: 4,
        rotation: 5,
        lookAt: 6,
      });
  }
}
function Eb(r, e, t) {
  let n,
    i,
    s,
    { object: a } = e,
    { viewportAware: o = !1 } = e;
  const c = ji(),
    { camera: l, invalidate: f } = qt();
  ft(r, l, (v) => t(8, (s = v)));
  const h = new pr(),
    u = new Be(),
    p = (v) => v.type === "Mesh",
    m = new R(),
    d = () =>
      s
        ? (u.multiplyMatrices(s.projectionMatrix, s.matrixWorldInverse),
          h.setFromProjectionMatrix(u),
          p(a)
            ? h.intersectsObject(a)
            : (a.getWorldPosition(m), h.containsPoint(m)))
        : !0,
    A = _u();
  ft(r, A, (v) => t(7, (i = v)));
  let { inViewport: g = d() } = e;
  const _ = async (v) => {
      v
        ? (i || (await bs()), c("viewportenter", a))
        : (i || (await bs()), c("viewportleave", a));
    },
    {
      start: b,
      stop: E,
      started: C,
    } = Er(
      () => {
        const v = d();
        g === void 0
          ? (t(3, (g = d())), _(g))
          : v !== g && (_(v), t(3, (g = v)));
      },
      {
        autostart: o,
        debugFrameloopMessage:
          "ViewportAwareObject: tracking viewport visibility",
      }
    );
  return (
    ft(r, C, (v) => t(6, (n = v))),
    f("ViewportAwareObject"),
    (r.$$set = (v) => {
      "object" in v && t(4, (a = v.object)),
        "viewportAware" in v && t(5, (o = v.viewportAware)),
        "inViewport" in v && t(3, (g = v.inViewport));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 96 && (o && !n ? b() : !o && n && E());
    }),
    [l, A, C, g, a, o, n]
  );
}
class xb extends pt {
  constructor(e) {
    super(),
      gt(this, e, Eb, null, ut, { object: 4, viewportAware: 5, inViewport: 3 });
  }
}
function Cb(r) {
  let e;
  const t = r[14].default,
    n = qn(t, r, r[18], null);
  return {
    c() {
      n && n.c();
    },
    l(i) {
      n && n.l(i);
    },
    m(i, s) {
      n && n.m(i, s), (e = !0);
    },
    p(i, s) {
      n &&
        n.p &&
        (!e || s & 262144) &&
        Yn(n, t, i, i[18], e ? Jn(t, i[18], s, null) : Kn(i[18]), null);
    },
    i(i) {
      e || (ce(n, i), (e = !0));
    },
    o(i) {
      Ae(n, i), (e = !1);
    },
    d(i) {
      n && n.d(i);
    },
  };
}
function Ib(r) {
  let e, t;
  return (
    (e = new eo({
      props: { object: r[1], $$slots: { default: [Cb] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p(n, i) {
        const s = {};
        i & 2 && (s.object = n[1]),
          i & 262144 && (s.$$scope = { dirty: i, ctx: n }),
          e.$set(s);
      },
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function yb(r) {
  let e, t, n, i, s, a, o, c, l;
  (e = new bu({ props: { object: r[1] } })),
    (n = new Eu({
      props: {
        object: r[1],
        position: r[2],
        rotation: r[4],
        scale: r[3],
        lookAt: r[5],
      },
    })),
    (s = new Bs({
      props: {
        object: r[1],
        dispose: r[7],
        $$slots: { default: [Ib] },
        $$scope: { ctx: r },
      },
    }));
  function f(u) {
    r[15](u);
  }
  let h = { object: r[1], viewportAware: r[6] };
  return (
    r[0] !== void 0 && (h.inViewport = r[0]),
    (o = new xb({ props: h })),
    ka.push(() => vl(o, "inViewport", f)),
    o.$on("viewportenter", r[16]),
    o.$on("viewportleave", r[17]),
    {
      c() {
        Re(e.$$.fragment),
          (t = st()),
          Re(n.$$.fragment),
          (i = st()),
          Re(s.$$.fragment),
          (a = st()),
          Re(o.$$.fragment);
      },
      l(u) {
        Le(e.$$.fragment, u),
          (t = rt(u)),
          Le(n.$$.fragment, u),
          (i = rt(u)),
          Le(s.$$.fragment, u),
          (a = rt(u)),
          Le(o.$$.fragment, u);
      },
      m(u, p) {
        Qe(e, u, p),
          We(u, t, p),
          Qe(n, u, p),
          We(u, i, p),
          Qe(s, u, p),
          We(u, a, p),
          Qe(o, u, p),
          (l = !0);
      },
      p(u, [p]) {
        const m = {};
        p & 2 && (m.object = u[1]), e.$set(m);
        const d = {};
        p & 2 && (d.object = u[1]),
          p & 4 && (d.position = u[2]),
          p & 16 && (d.rotation = u[4]),
          p & 8 && (d.scale = u[3]),
          p & 32 && (d.lookAt = u[5]),
          n.$set(d);
        const A = {};
        p & 2 && (A.object = u[1]),
          p & 128 && (A.dispose = u[7]),
          p & 262146 && (A.$$scope = { dirty: p, ctx: u }),
          s.$set(A);
        const g = {};
        p & 2 && (g.object = u[1]),
          p & 64 && (g.viewportAware = u[6]),
          !c && p & 1 && ((c = !0), (g.inViewport = u[0]), wl(() => (c = !1))),
          o.$set(g);
      },
      i(u) {
        l ||
          (ce(e.$$.fragment, u),
          ce(n.$$.fragment, u),
          ce(s.$$.fragment, u),
          ce(o.$$.fragment, u),
          (l = !0));
      },
      o(u) {
        Ae(e.$$.fragment, u),
          Ae(n.$$.fragment, u),
          Ae(s.$$.fragment, u),
          Ae(o.$$.fragment, u),
          (l = !1);
      },
      d(u) {
        Pe(e, u),
          u && Fe(t),
          Pe(n, u),
          u && Fe(i),
          Pe(s, u),
          u && Fe(a),
          Pe(o, u);
      },
    }
  );
}
function vb(r, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { object: s } = e,
    { position: a = void 0 } = e,
    { scale: o = void 0 } = e,
    { rotation: c = void 0 } = e,
    { lookAt: l = void 0 } = e,
    { viewportAware: f = !1 } = e,
    { inViewport: h = !1 } = e,
    { castShadow: u = void 0 } = e,
    { receiveShadow: p = void 0 } = e,
    { frustumCulled: m = void 0 } = e,
    { renderOrder: d = void 0 } = e,
    { visible: A = void 0 } = e,
    { dispose: g = void 0 } = e,
    { userData: _ = void 0 } = e;
  const { invalidate: b } = qt(),
    E = () => s;
  function C(x) {
    (h = x), t(0, h);
  }
  function v(x) {
    rn.call(this, r, x);
  }
  function T(x) {
    rn.call(this, r, x);
  }
  return (
    (r.$$set = (x) => {
      "object" in x && t(1, (s = x.object)),
        "position" in x && t(2, (a = x.position)),
        "scale" in x && t(3, (o = x.scale)),
        "rotation" in x && t(4, (c = x.rotation)),
        "lookAt" in x && t(5, (l = x.lookAt)),
        "viewportAware" in x && t(6, (f = x.viewportAware)),
        "inViewport" in x && t(0, (h = x.inViewport)),
        "castShadow" in x && t(8, (u = x.castShadow)),
        "receiveShadow" in x && t(9, (p = x.receiveShadow)),
        "frustumCulled" in x && t(10, (m = x.frustumCulled)),
        "renderOrder" in x && t(11, (d = x.renderOrder)),
        "visible" in x && t(12, (A = x.visible)),
        "dispose" in x && t(7, (g = x.dispose)),
        "userData" in x && t(13, (_ = x.userData)),
        "$$scope" in x && t(18, (i = x.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 16128 &&
        (A !== void 0 && (E().visible = A),
        u !== void 0 && (E().castShadow = u),
        p !== void 0 && (E().receiveShadow = p),
        m !== void 0 && (E().frustumCulled = m),
        d !== void 0 && (E().renderOrder = d),
        _ !== void 0 && (E().userData = { ...E().userData, ..._ }),
        b("Object3DInstance: props changed"));
    }),
    [h, s, a, o, c, l, f, g, u, p, m, d, A, _, n, C, v, T, i]
  );
}
class wb extends pt {
  constructor(e) {
    super(),
      gt(this, e, vb, yb, ut, {
        object: 1,
        position: 2,
        scale: 3,
        rotation: 4,
        lookAt: 5,
        viewportAware: 6,
        inViewport: 0,
        castShadow: 8,
        receiveShadow: 9,
        frustumCulled: 10,
        renderOrder: 11,
        visible: 12,
        dispose: 7,
        userData: 13,
      });
  }
}
const Yc = [],
  rr = (r, e) => {
    const t = Yc.find((i) => i instanceof r);
    if (t) return t;
    const n = e();
    return Yc.push(n), n;
  },
  Kc = { type: "change" },
  ia = { type: "start" },
  Jc = { type: "end" };
let Sb = class extends Ai {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new R()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: mi.ROTATE,
        MIDDLE: mi.DOLLY,
        RIGHT: mi.PAN,
      }),
      (this.touches = { ONE: bi.ROTATE, TWO: bi.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return o.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return o.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (M) {
        M.addEventListener("keydown", kt), (this._domElementKeyEvents = M);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(Kc),
          n.update(),
          (s = i.NONE);
      }),
      (this.update = (function () {
        const M = new R(),
          F = new _n().setFromUnitVectors(e.up, new R(0, 1, 0)),
          fe = F.clone().invert(),
          pe = new R(),
          he = new _n(),
          _e = 2 * Math.PI;
        return function () {
          const ke = n.object.position;
          M.copy(ke).sub(n.target),
            M.applyQuaternion(F),
            o.setFromVector3(M),
            n.autoRotate && s === i.NONE && w(T()),
            n.enableDamping
              ? ((o.theta += c.theta * n.dampingFactor),
                (o.phi += c.phi * n.dampingFactor))
              : ((o.theta += c.theta), (o.phi += c.phi));
          let Ue = n.minAzimuthAngle,
            Je = n.maxAzimuthAngle;
          return (
            isFinite(Ue) &&
              isFinite(Je) &&
              (Ue < -Math.PI ? (Ue += _e) : Ue > Math.PI && (Ue -= _e),
              Je < -Math.PI ? (Je += _e) : Je > Math.PI && (Je -= _e),
              Ue <= Je
                ? (o.theta = Math.max(Ue, Math.min(Je, o.theta)))
                : (o.theta =
                    o.theta > (Ue + Je) / 2
                      ? Math.max(Ue, o.theta)
                      : Math.min(Je, o.theta))),
            (o.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, o.phi)
            )),
            o.makeSafe(),
            (o.radius *= l),
            (o.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, o.radius)
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(f, n.dampingFactor)
              : n.target.add(f),
            M.setFromSpherical(o),
            M.applyQuaternion(fe),
            ke.copy(n.target).add(M),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((c.theta *= 1 - n.dampingFactor),
                (c.phi *= 1 - n.dampingFactor),
                f.multiplyScalar(1 - n.dampingFactor))
              : (c.set(0, 0, 0), f.set(0, 0, 0)),
            (l = 1),
            h ||
            pe.distanceToSquared(n.object.position) > a ||
            8 * (1 - he.dot(n.object.quaternion)) > a
              ? (n.dispatchEvent(Kc),
                pe.copy(n.object.position),
                he.copy(n.object.quaternion),
                (h = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", V),
          n.domElement.removeEventListener("pointerdown", at),
          n.domElement.removeEventListener("pointercancel", It),
          n.domElement.removeEventListener("wheel", Yt),
          n.domElement.removeEventListener("pointermove", X),
          n.domElement.removeEventListener("pointerup", et),
          n._domElementKeyEvents !== null &&
            n._domElementKeyEvents.removeEventListener("keydown", kt);
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = i.NONE;
    const a = 1e-6,
      o = new Gc(),
      c = new Gc();
    let l = 1;
    const f = new R();
    let h = !1;
    const u = new ye(),
      p = new ye(),
      m = new ye(),
      d = new ye(),
      A = new ye(),
      g = new ye(),
      _ = new ye(),
      b = new ye(),
      E = new ye(),
      C = [],
      v = {};
    function T() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function x() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function w(M) {
      c.theta -= M;
    }
    function B(M) {
      c.phi -= M;
    }
    const G = (function () {
        const M = new R();
        return function (fe, pe) {
          M.setFromMatrixColumn(pe, 0), M.multiplyScalar(-fe), f.add(M);
        };
      })(),
      H = (function () {
        const M = new R();
        return function (fe, pe) {
          n.screenSpacePanning === !0
            ? M.setFromMatrixColumn(pe, 1)
            : (M.setFromMatrixColumn(pe, 0), M.crossVectors(n.object.up, M)),
            M.multiplyScalar(fe),
            f.add(M);
        };
      })(),
      P = (function () {
        const M = new R();
        return function (fe, pe) {
          const he = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const _e = n.object.position;
            M.copy(_e).sub(n.target);
            let be = M.length();
            (be *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              G((2 * fe * be) / he.clientHeight, n.object.matrix),
              H((2 * pe * be) / he.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (G(
                  (fe * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    he.clientWidth,
                  n.object.matrix
                ),
                H(
                  (pe * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    he.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function Q(M) {
      n.object.isPerspectiveCamera
        ? (l /= M)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * M)
          )),
          n.object.updateProjectionMatrix(),
          (h = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function z(M) {
      n.object.isPerspectiveCamera
        ? (l *= M)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / M)
          )),
          n.object.updateProjectionMatrix(),
          (h = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function Y(M) {
      u.set(M.clientX, M.clientY);
    }
    function K(M) {
      _.set(M.clientX, M.clientY);
    }
    function O(M) {
      d.set(M.clientX, M.clientY);
    }
    function ee(M) {
      p.set(M.clientX, M.clientY),
        m.subVectors(p, u).multiplyScalar(n.rotateSpeed);
      const F = n.domElement;
      w((2 * Math.PI * m.x) / F.clientHeight),
        B((2 * Math.PI * m.y) / F.clientHeight),
        u.copy(p),
        n.update();
    }
    function Z(M) {
      b.set(M.clientX, M.clientY),
        E.subVectors(b, _),
        E.y > 0 ? Q(x()) : E.y < 0 && z(x()),
        _.copy(b),
        n.update();
    }
    function W(M) {
      A.set(M.clientX, M.clientY),
        g.subVectors(A, d).multiplyScalar(n.panSpeed),
        P(g.x, g.y),
        d.copy(A),
        n.update();
    }
    function U(M) {
      M.deltaY < 0 ? z(x()) : M.deltaY > 0 && Q(x()), n.update();
    }
    function $(M) {
      let F = !1;
      switch (M.code) {
        case n.keys.UP:
          M.ctrlKey || M.metaKey || M.shiftKey
            ? B((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : P(0, n.keyPanSpeed),
            (F = !0);
          break;
        case n.keys.BOTTOM:
          M.ctrlKey || M.metaKey || M.shiftKey
            ? B((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : P(0, -n.keyPanSpeed),
            (F = !0);
          break;
        case n.keys.LEFT:
          M.ctrlKey || M.metaKey || M.shiftKey
            ? w((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : P(n.keyPanSpeed, 0),
            (F = !0);
          break;
        case n.keys.RIGHT:
          M.ctrlKey || M.metaKey || M.shiftKey
            ? w((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : P(-n.keyPanSpeed, 0),
            (F = !0);
          break;
      }
      F && (M.preventDefault(), n.update());
    }
    function ie() {
      if (C.length === 1) u.set(C[0].pageX, C[0].pageY);
      else {
        const M = 0.5 * (C[0].pageX + C[1].pageX),
          F = 0.5 * (C[0].pageY + C[1].pageY);
        u.set(M, F);
      }
    }
    function se() {
      if (C.length === 1) d.set(C[0].pageX, C[0].pageY);
      else {
        const M = 0.5 * (C[0].pageX + C[1].pageX),
          F = 0.5 * (C[0].pageY + C[1].pageY);
        d.set(M, F);
      }
    }
    function D() {
      const M = C[0].pageX - C[1].pageX,
        F = C[0].pageY - C[1].pageY,
        fe = Math.sqrt(M * M + F * F);
      _.set(0, fe);
    }
    function ae() {
      n.enableZoom && D(), n.enablePan && se();
    }
    function me() {
      n.enableZoom && D(), n.enableRotate && ie();
    }
    function ge(M) {
      if (C.length == 1) p.set(M.pageX, M.pageY);
      else {
        const fe = Ie(M),
          pe = 0.5 * (M.pageX + fe.x),
          he = 0.5 * (M.pageY + fe.y);
        p.set(pe, he);
      }
      m.subVectors(p, u).multiplyScalar(n.rotateSpeed);
      const F = n.domElement;
      w((2 * Math.PI * m.x) / F.clientHeight),
        B((2 * Math.PI * m.y) / F.clientHeight),
        u.copy(p);
    }
    function ue(M) {
      if (C.length === 1) A.set(M.pageX, M.pageY);
      else {
        const F = Ie(M),
          fe = 0.5 * (M.pageX + F.x),
          pe = 0.5 * (M.pageY + F.y);
        A.set(fe, pe);
      }
      g.subVectors(A, d).multiplyScalar(n.panSpeed), P(g.x, g.y), d.copy(A);
    }
    function je(M) {
      const F = Ie(M),
        fe = M.pageX - F.x,
        pe = M.pageY - F.y,
        he = Math.sqrt(fe * fe + pe * pe);
      b.set(0, he),
        E.set(0, Math.pow(b.y / _.y, n.zoomSpeed)),
        Q(E.y),
        _.copy(b);
    }
    function ve(M) {
      n.enableZoom && je(M), n.enablePan && ue(M);
    }
    function Ce(M) {
      n.enableZoom && je(M), n.enableRotate && ge(M);
    }
    function at(M) {
      n.enabled !== !1 &&
        (C.length === 0 &&
          (n.domElement.setPointerCapture(M.pointerId),
          n.domElement.addEventListener("pointermove", X),
          n.domElement.addEventListener("pointerup", et)),
        ne(M),
        M.pointerType === "touch" ? S(M) : it(M));
    }
    function X(M) {
      n.enabled !== !1 && (M.pointerType === "touch" ? I(M) : qe(M));
    }
    function et(M) {
      re(M),
        C.length === 0 &&
          (n.domElement.releasePointerCapture(M.pointerId),
          n.domElement.removeEventListener("pointermove", X),
          n.domElement.removeEventListener("pointerup", et)),
        n.dispatchEvent(Jc),
        (s = i.NONE);
    }
    function It(M) {
      re(M);
    }
    function it(M) {
      let F;
      switch (M.button) {
        case 0:
          F = n.mouseButtons.LEFT;
          break;
        case 1:
          F = n.mouseButtons.MIDDLE;
          break;
        case 2:
          F = n.mouseButtons.RIGHT;
          break;
        default:
          F = -1;
      }
      switch (F) {
        case mi.DOLLY:
          if (n.enableZoom === !1) return;
          K(M), (s = i.DOLLY);
          break;
        case mi.ROTATE:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (n.enablePan === !1) return;
            O(M), (s = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            Y(M), (s = i.ROTATE);
          }
          break;
        case mi.PAN:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (n.enableRotate === !1) return;
            Y(M), (s = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            O(M), (s = i.PAN);
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(ia);
    }
    function qe(M) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          ee(M);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          Z(M);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          W(M);
          break;
      }
    }
    function Yt(M) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== i.NONE ||
        (M.preventDefault(), n.dispatchEvent(ia), U(M), n.dispatchEvent(Jc));
    }
    function kt(M) {
      n.enabled === !1 || n.enablePan === !1 || $(M);
    }
    function S(M) {
      switch ((le(M), C.length)) {
        case 1:
          switch (n.touches.ONE) {
            case bi.ROTATE:
              if (n.enableRotate === !1) return;
              ie(), (s = i.TOUCH_ROTATE);
              break;
            case bi.PAN:
              if (n.enablePan === !1) return;
              se(), (s = i.TOUCH_PAN);
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case bi.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              ae(), (s = i.TOUCH_DOLLY_PAN);
              break;
            case bi.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              me(), (s = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(ia);
    }
    function I(M) {
      switch ((le(M), s)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          ge(M), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ue(M), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          ve(M), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          Ce(M), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function V(M) {
      n.enabled !== !1 && M.preventDefault();
    }
    function ne(M) {
      C.push(M);
    }
    function re(M) {
      delete v[M.pointerId];
      for (let F = 0; F < C.length; F++)
        if (C[F].pointerId == M.pointerId) {
          C.splice(F, 1);
          return;
        }
    }
    function le(M) {
      let F = v[M.pointerId];
      F === void 0 && ((F = new ye()), (v[M.pointerId] = F)),
        F.set(M.pageX, M.pageY);
    }
    function Ie(M) {
      const F = M.pointerId === C[0].pointerId ? C[1] : C[0];
      return v[F.pointerId];
    }
    n.domElement.addEventListener("contextmenu", V),
      n.domElement.addEventListener("pointerdown", at),
      n.domElement.addEventListener("pointercancel", It),
      n.domElement.addEventListener("wheel", Yt, { passive: !1 }),
      this.update();
  }
};
function Mb(r) {
  let e, t, n, i;
  return (
    (e = new Bs({ props: { dispose: r[2], object: r[0] } })),
    (n = new Eu({ props: { object: r[4], position: r[1] } })),
    n.$on("transform", r[5]),
    {
      c() {
        Re(e.$$.fragment), (t = st()), Re(n.$$.fragment);
      },
      l(s) {
        Le(e.$$.fragment, s), (t = rt(s)), Le(n.$$.fragment, s);
      },
      m(s, a) {
        Qe(e, s, a), We(s, t, a), Qe(n, s, a), (i = !0);
      },
      p(s, a) {
        const o = {};
        a[0] & 4 && (o.dispose = s[2]),
          a[0] & 1 && (o.object = s[0]),
          e.$set(o);
        const c = {};
        a[0] & 2 && (c.position = s[1]), n.$set(c);
      },
      i(s) {
        i || (ce(e.$$.fragment, s), ce(n.$$.fragment, s), (i = !0));
      },
      o(s) {
        Ae(e.$$.fragment, s), Ae(n.$$.fragment, s), (i = !1);
      },
      d(s) {
        Pe(e, s), s && Fe(t), Pe(n, s);
      },
    }
  );
}
function Bb(r, e, t) {
  let n,
    { autoRotate: i = void 0 } = e,
    { autoRotateSpeed: s = void 0 } = e,
    { dampingFactor: a = void 0 } = e,
    { enableDamping: o = void 0 } = e,
    { enabled: c = void 0 } = e,
    { enablePan: l = void 0 } = e,
    { enableRotate: f = void 0 } = e,
    { enableZoom: h = void 0 } = e,
    { keyPanSpeed: u = void 0 } = e,
    { keys: p = void 0 } = e,
    { maxAzimuthAngle: m = void 0 } = e,
    { maxDistance: d = void 0 } = e,
    { maxPolarAngle: A = void 0 } = e,
    { maxZoom: g = void 0 } = e,
    { minAzimuthAngle: _ = void 0 } = e,
    { minDistance: b = void 0 } = e,
    { minPolarAngle: E = void 0 } = e,
    { minZoom: C = void 0 } = e,
    { mouseButtons: v = void 0 } = e,
    { panSpeed: T = void 0 } = e,
    { rotateSpeed: x = void 0 } = e,
    { screenSpacePanning: w = void 0 } = e,
    { touches: B = void 0 } = e,
    { zoomSpeed: G = void 0 } = e,
    { target: H = void 0 } = e,
    { dispose: P = void 0 } = e;
  const Q = gu();
  ft(r, Q, (D) => t(30, (n = D)));
  const { renderer: z, invalidate: Y } = qt();
  if (!z)
    throw new Error(
      "Threlte Context missing: Is <OrbitControls> a child of <Canvas>?"
    );
  if (!(n instanceof za))
    throw new Error(
      "Parent missing: <OrbitControls> need to be a child of a <Camera>"
    );
  const K = ji(),
    O = () => {
      Y("Orbitcontrols: change event"), K("change");
    },
    ee = () => K("start"),
    Z = () => K("end"),
    W = new Sb(n, z.domElement);
  ($t(n).orbitControls = W),
    W.addEventListener("change", O),
    W.addEventListener("start", ee),
    W.addEventListener("end", Z),
    nt(() => {
      n && delete $t(n).orbitControls,
        W.removeEventListener("change", O),
        W.removeEventListener("start", ee),
        W.removeEventListener("end", Z);
    });
  const { start: U, stop: $ } = Er(() => W.update(), {
      autostart: !1,
      debugFrameloopMessage: "OrbitControlts: updating controls",
    }),
    ie = new $e(),
    se = () => {
      t(0, (W.target = ie.position), W),
        W.update(),
        Y("OrbitControls: target changed");
    };
  return (
    (r.$$set = (D) => {
      "autoRotate" in D && t(6, (i = D.autoRotate)),
        "autoRotateSpeed" in D && t(7, (s = D.autoRotateSpeed)),
        "dampingFactor" in D && t(8, (a = D.dampingFactor)),
        "enableDamping" in D && t(9, (o = D.enableDamping)),
        "enabled" in D && t(10, (c = D.enabled)),
        "enablePan" in D && t(11, (l = D.enablePan)),
        "enableRotate" in D && t(12, (f = D.enableRotate)),
        "enableZoom" in D && t(13, (h = D.enableZoom)),
        "keyPanSpeed" in D && t(14, (u = D.keyPanSpeed)),
        "keys" in D && t(15, (p = D.keys)),
        "maxAzimuthAngle" in D && t(16, (m = D.maxAzimuthAngle)),
        "maxDistance" in D && t(17, (d = D.maxDistance)),
        "maxPolarAngle" in D && t(18, (A = D.maxPolarAngle)),
        "maxZoom" in D && t(19, (g = D.maxZoom)),
        "minAzimuthAngle" in D && t(20, (_ = D.minAzimuthAngle)),
        "minDistance" in D && t(21, (b = D.minDistance)),
        "minPolarAngle" in D && t(22, (E = D.minPolarAngle)),
        "minZoom" in D && t(23, (C = D.minZoom)),
        "mouseButtons" in D && t(24, (v = D.mouseButtons)),
        "panSpeed" in D && t(25, (T = D.panSpeed)),
        "rotateSpeed" in D && t(26, (x = D.rotateSpeed)),
        "screenSpacePanning" in D && t(27, (w = D.screenSpacePanning)),
        "touches" in D && t(28, (B = D.touches)),
        "zoomSpeed" in D && t(29, (G = D.zoomSpeed)),
        "target" in D && t(1, (H = D.target)),
        "dispose" in D && t(2, (P = D.dispose));
    }),
    (r.$$.update = () => {
      r.$$.dirty[0] & 1073741761 &&
        (i !== void 0 && t(0, (W.autoRotate = i), W),
        s !== void 0 && t(0, (W.autoRotateSpeed = s), W),
        a !== void 0 && t(0, (W.dampingFactor = a), W),
        o !== void 0 && t(0, (W.enableDamping = o), W),
        c !== void 0 && t(0, (W.enabled = c), W),
        l !== void 0 && t(0, (W.enablePan = l), W),
        f !== void 0 && t(0, (W.enableRotate = f), W),
        h !== void 0 && t(0, (W.enableZoom = h), W),
        u !== void 0 && t(0, (W.keyPanSpeed = u), W),
        p !== void 0 && t(0, (W.keys = p), W),
        m !== void 0 && t(0, (W.maxAzimuthAngle = m), W),
        d !== void 0 && t(0, (W.maxDistance = d), W),
        A !== void 0 && t(0, (W.maxPolarAngle = A), W),
        g !== void 0 && t(0, (W.maxZoom = g), W),
        _ !== void 0 && t(0, (W.minAzimuthAngle = _), W),
        b !== void 0 && t(0, (W.minDistance = b), W),
        E !== void 0 && t(0, (W.minPolarAngle = E), W),
        C !== void 0 && t(0, (W.minZoom = C), W),
        v !== void 0 && t(0, (W.mouseButtons = v), W),
        T !== void 0 && t(0, (W.panSpeed = T), W),
        x !== void 0 && t(0, (W.rotateSpeed = x), W),
        w !== void 0 && t(0, (W.screenSpacePanning = w), W),
        B !== void 0 && t(0, (W.touches = B), W),
        G !== void 0 && t(0, (W.zoomSpeed = G), W),
        W.update(),
        Y("OrbitControls: props changed")),
        r.$$.dirty[0] & 576 && (i || o ? U() : $());
    }),
    [
      W,
      H,
      P,
      Q,
      ie,
      se,
      i,
      s,
      a,
      o,
      c,
      l,
      f,
      h,
      u,
      p,
      m,
      d,
      A,
      g,
      _,
      b,
      E,
      C,
      v,
      T,
      x,
      w,
      B,
      G,
    ]
  );
}
class xu extends pt {
  constructor(e) {
    super(),
      gt(
        this,
        e,
        Bb,
        Mb,
        ut,
        {
          autoRotate: 6,
          autoRotateSpeed: 7,
          dampingFactor: 8,
          enableDamping: 9,
          enabled: 10,
          enablePan: 11,
          enableRotate: 12,
          enableZoom: 13,
          keyPanSpeed: 14,
          keys: 15,
          maxAzimuthAngle: 16,
          maxDistance: 17,
          maxPolarAngle: 18,
          maxZoom: 19,
          minAzimuthAngle: 20,
          minDistance: 21,
          minPolarAngle: 22,
          minZoom: 23,
          mouseButtons: 24,
          panSpeed: 25,
          rotateSpeed: 26,
          screenSpacePanning: 27,
          touches: 28,
          zoomSpeed: 29,
          target: 1,
          dispose: 2,
          controls: 0,
        },
        null,
        [-1, -1]
      );
  }
  get controls() {
    return this.$$.ctx[0];
  }
}
function Tb(r, e, t) {
  let { pass: n } = e;
  const { addPass: i, removePass: s } = to();
  return (
    i(n),
    Er(() => {}, { debugFrameloopMessage: "Pass component" }),
    nt(() => {
      s(n);
    }),
    (r.$$set = (a) => {
      "pass" in a && t(0, (n = a.pass));
    }),
    [n]
  );
}
class Db extends pt {
  constructor(e) {
    super(), gt(this, e, Tb, null, ut, { pass: 0 });
  }
}
function Rb(r, e, t) {
  let { object: n } = e,
    i = n,
    { interactive: s = !1 } = e,
    { ignorePointer: a = !1 } = e;
  const o = ji(),
    {
      addInteractiveObject: c,
      removeInteractiveObject: l,
      addRaycastableObject: f,
      removeRaycastableObject: h,
    } = to(),
    { invalidate: u } = qt(),
    p = (d) => {
      h(d), l(d), delete $t(d).eventDispatcher;
    },
    m = (d, A, g) => {
      ($t(d).eventDispatcher = o), A ? (h(d), l(d)) : (f(d), g ? c(d) : l(d));
    };
  return (
    nt(() => {
      p(n), u("InteractiveObject: object removed");
    }),
    (r.$$set = (d) => {
      "object" in d && t(0, (n = d.object)),
        "interactive" in d && t(1, (s = d.interactive)),
        "ignorePointer" in d && t(2, (a = d.ignorePointer));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 15 &&
        (n !== i
          ? (p(i),
            m(n, a, s),
            u("InteractiveObject: object changed"),
            t(3, (i = n)))
          : n === i && (m(n, a, s), u("InteractiveObject: props changed")));
    }),
    [n, s, a, i]
  );
}
class Lb extends pt {
  constructor(e) {
    super(),
      gt(this, e, Rb, null, ut, {
        object: 0,
        interactive: 1,
        ignorePointer: 2,
      });
  }
}
const Cu = new $e();
Cu.scale.set(0, 0, 0);
Cu.matrix;
new Be().fromArray(new Array(16).fill(0));
new Se(16777215);
const Iu = (r, e) => {
    if (e.includes(".")) {
      const t = e.split("."),
        n = t.pop();
      for (let i = 0; i < t.length; i += 1) r = r[t[i]];
      return { target: r, key: n };
    } else return { target: r, key: e };
  },
  sa = Symbol("initialValueBeforeAttach"),
  Qb = () => {
    const { invalidate: r } = qt();
    let e = !1,
      t = sa,
      n,
      i,
      s;
    const a = (c, l, f) => {
        if ((o(), !f)) {
          const h = c;
          ((h == null ? void 0 : h.isMaterial) || !1) && (f = "material"),
            ((h == null ? void 0 : h.isBufferGeometry) ||
              (h == null ? void 0 : h.isGeometry) ||
              !1) &&
              (f = "geometry");
        }
        if (f) {
          if (typeof f == "function") n = f(l, c);
          else {
            const { target: h, key: u } = Iu(l, f);
            (t = h[u]), (h[u] = c), (i = h), (s = u);
          }
          (e = !0), r();
        }
      },
      o = () => {
        e &&
          (n
            ? (n(), (n = void 0))
            : i &&
              s &&
              t !== sa &&
              ((i[s] = t), (t = sa), (i = void 0), (s = void 0)),
          (e = !1),
          r());
      };
    return (
      nt(() => {
        o();
      }),
      { update: a }
    );
  },
  Pb = (r) => r && r.isCamera,
  yu = (r) => r && r.isOrthographicCamera,
  vu = (r) => r && r.isPerspectiveCamera,
  Fb = (r) => vu(r) || yu(r),
  kb = () => {
    const { invalidate: r, size: e } = qt(),
      { setCamera: t } = to();
    let n, i;
    nt(() => {
      i == null || i();
    });
    const s = (c) => {
      n &&
        (yu(n)
          ? ((n.left = c.width / -2),
            (n.right = c.width / 2),
            (n.top = c.height / 2),
            (n.bottom = c.height / -2),
            n.updateProjectionMatrix(),
            n.updateMatrixWorld(),
            r())
          : vu(n) &&
            ((n.aspect = c.width / c.height),
            n.updateProjectionMatrix(),
            n.updateMatrixWorld(),
            r()));
    };
    return {
      update: (c, l) => {
        if ((i == null || i(), l || !Fb(c))) {
          n = void 0;
          return;
        }
        (n = c), (i = e.subscribe(s));
      },
      makeDefaultCamera: (c, l) => {
        !Pb(c) || !l || (t(c), r());
      },
    };
  },
  Xc = (r) => !!(r != null && r.addEventListener),
  Nb = () => {
    const r = ji(),
      e = Vu(),
      t = (u) => {
        u != null && u.type && r(u.type, u);
      },
      n = (u, p) => {
        Xc(u) &&
          p.forEach((m) => {
            u.removeEventListener(m, t);
          });
      },
      i = (u, p) => {
        Xc(u) &&
          p.forEach((m) => {
            u.addEventListener(m, t);
          });
      };
    let s = [],
      a;
    const o = xt([]),
      c = o.subscribe((u) => {
        n(a, s), i(a, u), (s = u);
      });
    nt(c);
    const l = xt(),
      f = l.subscribe((u) => {
        n(a, s), i(u, s), (a = u);
      });
    return (
      nt(f),
      nt(() => {
        n(a, s);
      }),
      yl(() => {
        o.set(Object.keys(e.$$.callbacks));
      }),
      {
        updateRef: (u) => {
          l.set(u);
        },
      }
    );
  },
  Ub = ["$$scope", "$$slots", "type", "args", "attach", "instance"],
  Gb = [
    "fov",
    "aspect",
    "near",
    "far",
    "left",
    "right",
    "top",
    "bottom",
    "zoom",
  ],
  Ob = (r) =>
    typeof r == "string" ||
    typeof r == "number" ||
    typeof r == "boolean" ||
    typeof r > "u" ||
    r === null,
  zb = () => {
    const { invalidate: r } = qt(),
      e = new Map(),
      t = (i, s, a, o) => {
        var f, h;
        if (Ob(a)) {
          const u = e.get(s);
          if (u && u.instance === i && u.value === a) return;
          e.set(s, { instance: i, value: a });
        }
        const { key: c, target: l } = Iu(i, s);
        if (
          !Array.isArray(a) &&
          typeof a == "number" &&
          typeof ((f = l[c]) == null ? void 0 : f.setScalar) == "function"
        )
          l[c].setScalar(a);
        else if (typeof ((h = l[c]) == null ? void 0 : h.set) == "function")
          Array.isArray(a) ? l[c].set(...a) : l[c].set(a);
        else {
          if (((l[c] = a), o.manualCamera)) return;
          Gb.includes(c) &&
            (l.isPerspectiveCamera || l.isOrthographicCamera) &&
            l.updateProjectionMatrix();
        }
      };
    return {
      updateProps: (i, s, a) => {
        for (const o in s) Ub.includes(o) || t(i, o, s[o], a), r();
      },
    };
  },
  Hb = (r) => ({ ref: r & 1 }),
  Zc = (r) => ({ ref: r[0] }),
  Vb = (r) => ({ ref: r & 1 }),
  $c = (r) => ({ ref: r[0] });
function el(r) {
  let e, t;
  return (
    (e = new Bs({ props: { object: r[0], dispose: r[1] } })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p(n, i) {
        const s = {};
        i & 1 && (s.object = n[0]), i & 2 && (s.dispose = n[1]), e.$set(s);
      },
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function Wb(r) {
  let e;
  const t = r[12].default,
    n = qn(t, r, r[13], Zc);
  return {
    c() {
      n && n.c();
    },
    l(i) {
      n && n.l(i);
    },
    m(i, s) {
      n && n.m(i, s), (e = !0);
    },
    p(i, s) {
      n &&
        n.p &&
        (!e || s & 8193) &&
        Yn(n, t, i, i[13], e ? Jn(t, i[13], s, Hb) : Kn(i[13]), Zc);
    },
    i(i) {
      e || (ce(n, i), (e = !0));
    },
    o(i) {
      Ae(n, i), (e = !1);
    },
    d(i) {
      n && n.d(i);
    },
  };
}
function jb(r) {
  let e, t;
  return (
    (e = new eo({
      props: { object: r[0], $$slots: { default: [qb] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p(n, i) {
        const s = {};
        i & 1 && (s.object = n[0]),
          i & 8193 && (s.$$scope = { dirty: i, ctx: n }),
          e.$set(s);
      },
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function qb(r) {
  let e;
  const t = r[12].default,
    n = qn(t, r, r[13], $c);
  return {
    c() {
      n && n.c();
    },
    l(i) {
      n && n.l(i);
    },
    m(i, s) {
      n && n.m(i, s), (e = !0);
    },
    p(i, s) {
      n &&
        n.p &&
        (!e || s & 8193) &&
        Yn(n, t, i, i[13], e ? Jn(t, i[13], s, Vb) : Kn(i[13]), $c);
    },
    i(i) {
      e || (ce(n, i), (e = !0));
    },
    o(i) {
      Ae(n, i), (e = !1);
    },
    d(i) {
      n && n.d(i);
    },
  };
}
function Yb(r) {
  let e = r[4](r[0]),
    t,
    n,
    i,
    s,
    a,
    o,
    c = e && el(r);
  const l = [jb, Wb],
    f = [];
  function h(u, p) {
    return p & 1 && (n = null), n == null && (n = !!u[3](u[0])), n ? 0 : 1;
  }
  return (
    (i = h(r, -1)),
    (s = f[i] = l[i](r)),
    {
      c() {
        c && c.c(), (t = st()), s.c(), (a = Nt());
      },
      l(u) {
        c && c.l(u), (t = rt(u)), s.l(u), (a = Nt());
      },
      m(u, p) {
        c && c.m(u, p), We(u, t, p), f[i].m(u, p), We(u, a, p), (o = !0);
      },
      p(u, [p]) {
        p & 1 && (e = u[4](u[0])),
          e
            ? c
              ? (c.p(u, p), p & 1 && ce(c, 1))
              : ((c = el(u)), c.c(), ce(c, 1), c.m(t.parentNode, t))
            : c &&
              (cn(),
              Ae(c, 1, 1, () => {
                c = null;
              }),
              ln());
        let m = i;
        (i = h(u, p)),
          i === m
            ? f[i].p(u, p)
            : (cn(),
              Ae(f[m], 1, 1, () => {
                f[m] = null;
              }),
              ln(),
              (s = f[i]),
              s ? s.p(u, p) : ((s = f[i] = l[i](u)), s.c()),
              ce(s, 1),
              s.m(a.parentNode, a));
      },
      i(u) {
        o || (ce(c), ce(s), (o = !0));
      },
      o(u) {
        Ae(c), Ae(s), (o = !1);
      },
      d(u) {
        c && c.d(u), u && Fe(t), f[i].d(u), u && Fe(a);
      },
    }
  );
}
function Kb(r, e, t) {
  const n = [
    "type",
    "args",
    "attach",
    "manual",
    "makeDefault",
    "dispose",
    "ref",
  ];
  let i = co(e, n),
    s,
    { $$slots: a = {}, $$scope: o } = e,
    { type: c } = e,
    { args: l = void 0 } = e,
    { attach: f = void 0 } = e,
    { manual: h = void 0 } = e,
    { makeDefault: u = void 0 } = e,
    { dispose: p = void 0 } = e;
  const m = mn("threlte-hierarchical-parent-context");
  ft(r, m, (B) => t(11, (s = B)));
  const d = (B) => typeof B == "function" && /^\s*class\s+/.test(B.toString()),
    A = (B) => Array.isArray(B);
  let { ref: g = d(c) && A(l) ? new c(...l) : d(c) ? new c() : c } = e,
    _ = !1;
  const b = xt(g);
  an("threlte-hierarchical-parent-context", b);
  const E = zb(),
    C = kb(),
    v = Qb(),
    T = Nb(),
    x = (B) => !!B.isObject3D,
    w = (B) => B.dispose !== void 0;
  return (
    (r.$$set = (B) => {
      (e = lo(lo({}, e), Wu(B))),
        t(21, (i = co(e, n))),
        "type" in B && t(5, (c = B.type)),
        "args" in B && t(6, (l = B.args)),
        "attach" in B && t(7, (f = B.attach)),
        "manual" in B && t(8, (h = B.manual)),
        "makeDefault" in B && t(9, (u = B.makeDefault)),
        "dispose" in B && t(1, (p = B.dispose)),
        "ref" in B && t(0, (g = B.ref)),
        "$$scope" in B && t(13, (o = B.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 1120 &&
        (_
          ? t(0, (g = d(c) && A(l) ? new c(...l) : d(c) ? new c() : c))
          : t(10, (_ = !0))),
        r.$$.dirty & 1 && b.set(g),
        E.updateProps(g, i, { manualCamera: h }),
        r.$$.dirty & 257 && C.update(g, h),
        r.$$.dirty & 513 && C.makeDefaultCamera(g, u),
        r.$$.dirty & 2177 && v.update(g, s, f),
        r.$$.dirty & 1 && T.updateRef(g);
    }),
    [g, p, m, x, w, c, l, f, h, u, _, s, a, o]
  );
}
class An extends pt {
  constructor(e) {
    super(),
      gt(this, e, Kb, Yb, ut, {
        type: 5,
        args: 6,
        attach: 7,
        manual: 8,
        makeDefault: 9,
        dispose: 1,
        ref: 0,
      });
  }
}
function Jb(r) {
  return (
    console.error(
      "The component <T> can only be used in conjunction with the custom preprocessor."
    ),
    []
  );
}
class tl extends pt {
  constructor(e) {
    super(), gt(this, e, Jb, null, ut, {});
  }
}
new Proxy(tl, {
  get(r, e) {
    return r[e] || tl;
  },
});
rr(Ba, () => new Ba(ms));
const ra = new WeakMap();
class nl extends gi {
  constructor(e) {
    super(e),
      (this.decoderPath = ""),
      (this.decoderConfig = {}),
      (this.decoderBinary = null),
      (this.decoderPending = null),
      (this.workerLimit = 4),
      (this.workerPool = []),
      (this.workerNextTaskID = 1),
      (this.workerSourceURL = ""),
      (this.defaultAttributeIDs = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD",
      }),
      (this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array",
      });
  }
  setDecoderPath(e) {
    return (this.decoderPath = e), this;
  }
  setDecoderConfig(e) {
    return (this.decoderConfig = e), this;
  }
  setWorkerLimit(e) {
    return (this.workerLimit = e), this;
  }
  load(e, t, n, i) {
    const s = new fi(this.manager);
    s.setPath(this.path),
      s.setResponseType("arraybuffer"),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        (a) => {
          this.decodeDracoFile(a, t).catch(i);
        },
        n,
        i
      );
  }
  decodeDracoFile(e, t, n, i) {
    const s = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
    };
    return this.decodeGeometry(e, s).then(t);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (ra.has(e)) {
      const c = ra.get(e);
      if (c.key === n) return c.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let i;
    const s = this.workerNextTaskID++,
      a = e.byteLength,
      o = this._getWorker(s, a)
        .then(
          (c) => (
            (i = c),
            new Promise((l, f) => {
              (i._callbacks[s] = { resolve: l, reject: f }),
                i.postMessage(
                  { type: "decode", id: s, taskConfig: t, buffer: e },
                  [e]
                );
            })
          )
        )
        .then((c) => this._createGeometry(c.geometry));
    return (
      o
        .catch(() => !0)
        .then(() => {
          i && s && this._releaseTask(i, s);
        }),
      ra.set(e, { key: n, promise: o }),
      o
    );
  }
  _createGeometry(e) {
    const t = new en();
    e.index && t.setIndex(new wt(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const i = e.attributes[n],
        s = i.name,
        a = i.array,
        o = i.itemSize;
      t.setAttribute(s, new wt(a, o));
    }
    return t;
  }
  _loadLibrary(e, t) {
    const n = new fi(this.manager);
    return (
      n.setPath(this.decoderPath),
      n.setResponseType(t),
      n.setWithCredentials(this.withCredentials),
      new Promise((i, s) => {
        n.load(e, i, void 0, s);
      })
    );
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const e =
        typeof WebAssembly != "object" || this.decoderConfig.type === "js",
      t = [];
    return (
      e
        ? t.push(this._loadLibrary("draco_decoder.js", "text"))
        : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
          t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
      (this.decoderPending = Promise.all(t).then((n) => {
        const i = n[0];
        e || (this.decoderConfig.wasmBinary = n[1]);
        const s = Xb.toString(),
          a = [
            "/* draco decoder */",
            i,
            "",
            "/* worker */",
            s.substring(s.indexOf("{") + 1, s.lastIndexOf("}")),
          ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([a]));
      })),
      this.decoderPending
    );
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        (i._callbacks = {}),
          (i._taskCosts = {}),
          (i._taskLoad = 0),
          i.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
          (i.onmessage = function (s) {
            const a = s.data;
            switch (a.type) {
              case "decode":
                i._callbacks[a.id].resolve(a);
                break;
              case "error":
                i._callbacks[a.id].reject(a);
                break;
              default:
                console.error(
                  'THREE.DRACOLoader: Unexpected message, "' + a.type + '"'
                );
            }
          }),
          this.workerPool.push(i);
      } else
        this.workerPool.sort(function (i, s) {
          return i._taskLoad > s._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return (n._taskCosts[e] = t), (n._taskLoad += t), n;
    });
  }
  _releaseTask(e, t) {
    (e._taskLoad -= e._taskCosts[t]),
      delete e._callbacks[t],
      delete e._taskCosts[t];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad)
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return (
      (this.workerPool.length = 0),
      this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL),
      this
    );
  }
}
function Xb() {
  let r, e;
  onmessage = function (a) {
    const o = a.data;
    switch (o.type) {
      case "init":
        (r = o.decoderConfig),
          (e = new Promise(function (f) {
            (r.onModuleLoaded = function (h) {
              f({ draco: h });
            }),
              DracoDecoderModule(r);
          }));
        break;
      case "decode":
        const c = o.buffer,
          l = o.taskConfig;
        e.then((f) => {
          const h = f.draco,
            u = new h.Decoder(),
            p = new h.DecoderBuffer();
          p.Init(new Int8Array(c), c.byteLength);
          try {
            const m = t(h, u, p, l),
              d = m.attributes.map((A) => A.array.buffer);
            m.index && d.push(m.index.array.buffer),
              self.postMessage({ type: "decode", id: o.id, geometry: m }, d);
          } catch (m) {
            console.error(m),
              self.postMessage({ type: "error", id: o.id, error: m.message });
          } finally {
            h.destroy(p), h.destroy(u);
          }
        });
        break;
    }
  };
  function t(a, o, c, l) {
    const f = l.attributeIDs,
      h = l.attributeTypes;
    let u, p;
    const m = o.GetEncodedGeometryType(c);
    if (m === a.TRIANGULAR_MESH)
      (u = new a.Mesh()), (p = o.DecodeBufferToMesh(c, u));
    else if (m === a.POINT_CLOUD)
      (u = new a.PointCloud()), (p = o.DecodeBufferToPointCloud(c, u));
    else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!p.ok() || u.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
    const d = { index: null, attributes: [] };
    for (const A in f) {
      const g = self[h[A]];
      let _, b;
      if (l.useUniqueIDs) (b = f[A]), (_ = o.GetAttributeByUniqueId(u, b));
      else {
        if (((b = o.GetAttributeId(u, a[f[A]])), b === -1)) continue;
        _ = o.GetAttribute(u, b);
      }
      d.attributes.push(i(a, o, u, A, g, _));
    }
    return m === a.TRIANGULAR_MESH && (d.index = n(a, o, u)), a.destroy(u), d;
  }
  function n(a, o, c) {
    const f = c.num_faces() * 3,
      h = f * 4,
      u = a._malloc(h);
    o.GetTrianglesUInt32Array(c, h, u);
    const p = new Uint32Array(a.HEAPF32.buffer, u, f).slice();
    return a._free(u), { array: p, itemSize: 1 };
  }
  function i(a, o, c, l, f, h) {
    const u = h.num_components(),
      m = c.num_points() * u,
      d = m * f.BYTES_PER_ELEMENT,
      A = s(a, f),
      g = a._malloc(d);
    o.GetAttributeDataArrayForAllPoints(c, h, A, d, g);
    const _ = new f(a.HEAPF32.buffer, g, m).slice();
    return a._free(g), { name: l, array: _, itemSize: u };
  }
  function s(a, o) {
    switch (o) {
      case Float32Array:
        return a.DT_FLOAT32;
      case Int8Array:
        return a.DT_INT8;
      case Int16Array:
        return a.DT_INT16;
      case Int32Array:
        return a.DT_INT32;
      case Uint8Array:
        return a.DT_UINT8;
      case Uint16Array:
        return a.DT_UINT16;
      case Uint32Array:
        return a.DT_UINT32;
    }
  }
}
function il(r, e) {
  if (e === Nh)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
      ),
      r
    );
  if (e === Ia || e === Nl) {
    let t = r.getIndex();
    if (t === null) {
      const a = [],
        o = r.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++) a.push(c);
        r.setIndex(a), (t = r.getIndex());
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          r
        );
    }
    const n = t.count - 2,
      i = [];
    if (e === Ia)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0
          ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2)))
          : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n &&
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e
      ),
      r
    );
}
class sl extends gi {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new n_(t);
      }),
      this.register(function (t) {
        return new l_(t);
      }),
      this.register(function (t) {
        return new u_(t);
      }),
      this.register(function (t) {
        return new s_(t);
      }),
      this.register(function (t) {
        return new r_(t);
      }),
      this.register(function (t) {
        return new a_(t);
      }),
      this.register(function (t) {
        return new o_(t);
      }),
      this.register(function (t) {
        return new t_(t);
      }),
      this.register(function (t) {
        return new c_(t);
      }),
      this.register(function (t) {
        return new i_(t);
      }),
      this.register(function (t) {
        return new $b(t);
      }),
      this.register(function (t) {
        return new h_(t);
      }),
      this.register(function (t) {
        return new f_(t);
      });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    this.resourcePath !== ""
      ? (a = this.resourcePath)
      : this.path !== ""
      ? (a = this.path)
      : (a = Ta.extractUrlBase(e)),
      this.manager.itemStart(e);
    const o = function (l) {
        i ? i(l) : console.error(l),
          s.manager.itemError(e),
          s.manager.itemEnd(e);
      },
      c = new fi(this.manager);
    c.setPath(this.path),
      c.setResponseType("arraybuffer"),
      c.setRequestHeader(this.requestHeader),
      c.setWithCredentials(this.withCredentials),
      c.load(
        e,
        function (l) {
          try {
            s.parse(
              l,
              a,
              function (f) {
                t(f), s.manager.itemEnd(e);
              },
              o
            );
          } catch (f) {
            o(f);
          }
        },
        n,
        o
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, i) {
    let s;
    const a = {},
      o = {},
      c = new TextDecoder();
    if (typeof e == "string") s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === wu) {
        try {
          a[He.KHR_BINARY_GLTF] = new d_(e);
        } catch (h) {
          i && i(h);
          return;
        }
        s = JSON.parse(a[He.KHR_BINARY_GLTF].content);
      } else s = JSON.parse(c.decode(e));
    else s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i &&
        i(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        );
      return;
    }
    const l = new w_(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let f = 0; f < this.pluginCallbacks.length; f++) {
      const h = this.pluginCallbacks[f](l);
      (o[h.name] = h), (a[h.name] = !0);
    }
    if (s.extensionsUsed)
      for (let f = 0; f < s.extensionsUsed.length; ++f) {
        const h = s.extensionsUsed[f],
          u = s.extensionsRequired || [];
        switch (h) {
          case He.KHR_MATERIALS_UNLIT:
            a[h] = new e_();
            break;
          case He.KHR_DRACO_MESH_COMPRESSION:
            a[h] = new A_(s, this.dracoLoader);
            break;
          case He.KHR_TEXTURE_TRANSFORM:
            a[h] = new p_();
            break;
          case He.KHR_MESH_QUANTIZATION:
            a[h] = new g_();
            break;
          default:
            u.indexOf(h) >= 0 &&
              o[h] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function Zb() {
  let r = {};
  return {
    get: function (e) {
      return r[e];
    },
    add: function (e, t) {
      r[e] = t;
    },
    remove: function (e) {
      delete r[e];
    },
    removeAll: function () {
      r = {};
    },
  };
}
const He = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class $b {
  constructor(e) {
    (this.parser = e),
      (this.name = He.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions &&
        s.extensions[this.name] &&
        s.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json,
      c = (((s.extensions && s.extensions[this.name]) || {}).lights || [])[e];
    let l;
    const f = new Se(16777215);
    c.color !== void 0 && f.fromArray(c.color);
    const h = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        (l = new ki(f)), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        (l = new wm(f)), (l.distance = h);
        break;
      case "spot":
        (l = new ym(f)),
          (l.distance = h),
          (c.spot = c.spot || {}),
          (c.spot.innerConeAngle =
            c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0),
          (c.spot.outerConeAngle =
            c.spot.outerConeAngle !== void 0
              ? c.spot.outerConeAngle
              : Math.PI / 4),
          (l.angle = c.spot.outerConeAngle),
          (l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle),
          l.target.position.set(0, 0, -1),
          l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return (
      l.position.set(0, 0, 0),
      (l.decay = 2),
      zn(l, c),
      c.intensity !== void 0 && (l.intensity = c.intensity),
      (l.name = t.createUniqueName(c.name || "light_" + e)),
      (i = Promise.resolve(l)),
      t.cache.add(n, i),
      i
    );
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      s = n.json.nodes[e],
      o = ((s.extensions && s.extensions[this.name]) || {}).light;
    return o === void 0
      ? null
      : this._loadLight(o).then(function (c) {
          return n._getNodeRef(t.cache, o, c);
        });
  }
}
class e_ {
  constructor() {
    this.name = He.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return li;
  }
  extendParams(e, t, n) {
    const i = [];
    (e.color = new Se(1, 1, 1)), (e.opacity = 1);
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.fromArray(a), (e.opacity = a[3]);
      }
      s.baseColorTexture !== void 0 &&
        i.push(n.assignTexture(e, "map", s.baseColorTexture, Ne));
    }
    return Promise.all(i);
  }
}
class t_ {
  constructor(e) {
    (this.parser = e), (this.name = He.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class n_ {
  constructor(e) {
    (this.parser = e), (this.name = He.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    if (
      (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
      a.clearcoatTexture !== void 0 &&
        s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
      a.clearcoatRoughnessFactor !== void 0 &&
        (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
      a.clearcoatRoughnessTexture !== void 0 &&
        s.push(
          n.assignTexture(
            t,
            "clearcoatRoughnessMap",
            a.clearcoatRoughnessTexture
          )
        ),
      a.clearcoatNormalTexture !== void 0 &&
        (s.push(
          n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)
        ),
        a.clearcoatNormalTexture.scale !== void 0))
    ) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new ye(o, o);
    }
    return Promise.all(s);
  }
}
class i_ {
  constructor(e) {
    (this.parser = e), (this.name = He.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    return (
      a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
      a.iridescenceTexture !== void 0 &&
        s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
      a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
      t.iridescenceThicknessRange === void 0 &&
        (t.iridescenceThicknessRange = [100, 400]),
      a.iridescenceThicknessMinimum !== void 0 &&
        (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
      a.iridescenceThicknessMaximum !== void 0 &&
        (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
      a.iridescenceThicknessTexture !== void 0 &&
        s.push(
          n.assignTexture(
            t,
            "iridescenceThicknessMap",
            a.iridescenceThicknessTexture
          )
        ),
      Promise.all(s)
    );
  }
}
class s_ {
  constructor(e) {
    (this.parser = e), (this.name = He.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [];
    (t.sheenColor = new Se(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const a = i.extensions[this.name];
    return (
      a.sheenColorFactor !== void 0 &&
        t.sheenColor.fromArray(a.sheenColorFactor),
      a.sheenRoughnessFactor !== void 0 &&
        (t.sheenRoughness = a.sheenRoughnessFactor),
      a.sheenColorTexture !== void 0 &&
        s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, Ne)),
      a.sheenRoughnessTexture !== void 0 &&
        s.push(
          n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)
        ),
      Promise.all(s)
    );
  }
}
class r_ {
  constructor(e) {
    (this.parser = e), (this.name = He.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    return (
      a.transmissionFactor !== void 0 &&
        (t.transmission = a.transmissionFactor),
      a.transmissionTexture !== void 0 &&
        s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)),
      Promise.all(s)
    );
  }
}
class a_ {
  constructor(e) {
    (this.parser = e), (this.name = He.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    (t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0),
      a.thicknessTexture !== void 0 &&
        s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
      (t.attenuationDistance = a.attenuationDistance || 1 / 0);
    const o = a.attenuationColor || [1, 1, 1];
    return (t.attenuationColor = new Se(o[0], o[1], o[2])), Promise.all(s);
  }
}
class o_ {
  constructor(e) {
    (this.parser = e), (this.name = He.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pi;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = i.extensions[this.name];
    return (t.ior = s.ior !== void 0 ? s.ior : 1.5), Promise.resolve();
  }
}
class c_ {
  constructor(e) {
    (this.parser = e), (this.name = He.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    (t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1),
      a.specularTexture !== void 0 &&
        s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new Se(o[0], o[1], o[2])),
      a.specularColorTexture !== void 0 &&
        s.push(
          n.assignTexture(t, "specularColorMap", a.specularColorTexture, Ne)
        ),
      Promise.all(s)
    );
  }
}
class l_ {
  constructor(e) {
    (this.parser = e), (this.name = He.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const s = i.extensions[this.name],
      a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class u_ {
  constructor(e) {
    (this.parser = e),
      (this.name = He.EXT_TEXTURE_WEBP),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      s = i.textures[e];
    if (!s.extensions || !s.extensions[t]) return null;
    const a = s.extensions[t],
      o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function (l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class h_ {
  constructor(e) {
    (this.name = He.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name],
        s = this.parser.getDependency("buffer", i.buffer),
        a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        return null;
      }
      return s.then(function (o) {
        const c = i.byteOffset || 0,
          l = i.byteLength || 0,
          f = i.count,
          h = i.byteStride,
          u = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync
          ? a
              .decodeGltfBufferAsync(f, h, u, i.mode, i.filter)
              .then(function (p) {
                return p.buffer;
              })
          : a.ready.then(function () {
              const p = new ArrayBuffer(f * h);
              return (
                a.decodeGltfBuffer(
                  new Uint8Array(p),
                  f,
                  h,
                  u,
                  i.mode,
                  i.filter
                ),
                p
              );
            });
      });
    } else return null;
  }
}
class f_ {
  constructor(e) {
    (this.name = He.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (
        l.mode !== Xt.TRIANGLES &&
        l.mode !== Xt.TRIANGLE_STRIP &&
        l.mode !== Xt.TRIANGLE_FAN &&
        l.mode !== void 0
      )
        return null;
    const a = n.extensions[this.name].attributes,
      o = [],
      c = {};
    for (const l in a)
      o.push(
        this.parser
          .getDependency("accessor", a[l])
          .then((f) => ((c[l] = f), c[l]))
      );
    return o.length < 1
      ? null
      : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then((l) => {
          const f = l.pop(),
            h = f.isGroup ? f.children : [f],
            u = l[0].count,
            p = [];
          for (const m of h) {
            const d = new Be(),
              A = new R(),
              g = new _n(),
              _ = new R(1, 1, 1),
              b = new om(m.geometry, m.material, u);
            for (let E = 0; E < u; E++)
              c.TRANSLATION && A.fromBufferAttribute(c.TRANSLATION, E),
                c.ROTATION && g.fromBufferAttribute(c.ROTATION, E),
                c.SCALE && _.fromBufferAttribute(c.SCALE, E),
                b.setMatrixAt(E, d.compose(A, g, _));
            for (const E in c)
              E !== "TRANSLATION" &&
                E !== "ROTATION" &&
                E !== "SCALE" &&
                m.geometry.setAttribute(E, c[E]);
            $e.prototype.copy.call(b, m),
              (b.frustumCulled = !1),
              this.parser.assignFinalMaterial(b),
              p.push(b);
          }
          return f.isGroup ? (f.clear(), f.add(...p), f) : p[0];
        }));
  }
}
const wu = "glTF",
  cs = 12,
  rl = { JSON: 1313821514, BIN: 5130562 };
class d_ {
  constructor(e) {
    (this.name = He.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, cs),
      n = new TextDecoder();
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== wu)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - cs,
      s = new DataView(e, cs);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const c = s.getUint32(a, !0);
      if (((a += 4), c === rl.JSON)) {
        const l = new Uint8Array(e, cs + a, o);
        this.content = n.decode(l);
      } else if (c === rl.BIN) {
        const l = cs + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class A_ {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = He.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json,
      i = this.dracoLoader,
      s = e.extensions[this.name].bufferView,
      a = e.extensions[this.name].attributes,
      o = {},
      c = {},
      l = {};
    for (const f in a) {
      const h = Ra[f] || f.toLowerCase();
      o[h] = a[f];
    }
    for (const f in e.attributes) {
      const h = Ra[f] || f.toLowerCase();
      if (a[f] !== void 0) {
        const u = n.accessors[e.attributes[f]],
          p = Ni[u.componentType];
        (l[h] = p.name), (c[h] = u.normalized === !0);
      }
    }
    return t.getDependency("bufferView", s).then(function (f) {
      return new Promise(function (h) {
        i.decodeDracoFile(
          f,
          function (u) {
            for (const p in u.attributes) {
              const m = u.attributes[p],
                d = c[p];
              d !== void 0 && (m.normalized = d);
            }
            h(u);
          },
          o,
          l
        );
      });
    });
  }
}
class p_ {
  constructor() {
    this.name = He.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      t.texCoord !== void 0 &&
        console.warn(
          'THREE.GLTFLoader: Custom UV sets in "' +
            this.name +
            '" extension not yet supported.'
        ),
      (t.offset === void 0 && t.rotation === void 0 && t.scale === void 0) ||
        ((e = e.clone()),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class g_ {
  constructor() {
    this.name = He.KHR_MESH_QUANTIZATION;
  }
}
class Su extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      s = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = o * 2,
      l = o * 3,
      f = i - t,
      h = (n - t) / f,
      u = h * h,
      p = u * h,
      m = e * l,
      d = m - l,
      A = -2 * p + 3 * u,
      g = p - u,
      _ = 1 - A,
      b = g - u + h;
    for (let E = 0; E !== o; E++) {
      const C = a[d + E + o],
        v = a[d + E + c] * f,
        T = a[m + E + o],
        x = a[m + E] * f;
      s[E] = _ * C + b * v + A * T + g * x;
    }
    return s;
  }
}
const m_ = new _n();
class b_ extends Su {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return m_.fromArray(s).normalize().toArray(s), s;
  }
}
const Xt = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  Ni = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  al = { 9728: Et, 9729: Bt, 9984: ma, 9985: Pl, 9986: $s, 9987: Wn },
  ol = { 33071: Ht, 33648: ar, 10497: Oi },
  aa = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  Ra = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  On = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  __ = { CUBICSPLINE: void 0, LINEAR: Hi, STEP: _s },
  oa = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function E_(r) {
  return (
    r.DefaultMaterial === void 0 &&
      (r.DefaultMaterial = new Ya({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Pn,
      })),
    r.DefaultMaterial
  );
}
function ls(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = t.extensions[n]));
}
function zn(r, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(r.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras
        ));
}
function x_(r, e, t) {
  let n = !1,
    i = !1,
    s = !1;
  for (let l = 0, f = e.length; l < f; l++) {
    const h = e[l];
    if (
      (h.POSITION !== void 0 && (n = !0),
      h.NORMAL !== void 0 && (i = !0),
      h.COLOR_0 !== void 0 && (s = !0),
      n && i && s)
    )
      break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [],
    o = [],
    c = [];
  for (let l = 0, f = e.length; l < f; l++) {
    const h = e[l];
    if (n) {
      const u =
        h.POSITION !== void 0
          ? t.getDependency("accessor", h.POSITION)
          : r.attributes.position;
      a.push(u);
    }
    if (i) {
      const u =
        h.NORMAL !== void 0
          ? t.getDependency("accessor", h.NORMAL)
          : r.attributes.normal;
      o.push(u);
    }
    if (s) {
      const u =
        h.COLOR_0 !== void 0
          ? t.getDependency("accessor", h.COLOR_0)
          : r.attributes.color;
      c.push(u);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(c)]).then(
    function (l) {
      const f = l[0],
        h = l[1],
        u = l[2];
      return (
        n && (r.morphAttributes.position = f),
        i && (r.morphAttributes.normal = h),
        s && (r.morphAttributes.color = u),
        (r.morphTargetsRelative = !0),
        r
      );
    }
  );
}
function C_(r, e) {
  if ((r.updateMorphTargets(), e.weights !== void 0))
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
  }
}
function I_(r) {
  const e = r.extensions && r.extensions[He.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return (
    e
      ? (t = "draco:" + e.bufferView + ":" + e.indices + ":" + cl(e.attributes))
      : (t = r.indices + ":" + cl(r.attributes) + ":" + r.mode),
    t
  );
}
function cl(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function La(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
function y_(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0
    ? "image/webp"
    : "image/png";
}
const v_ = new Be();
class w_ {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new Zb()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let n = !1,
      i = !1,
      s = -1;
    typeof navigator < "u" &&
      ((n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0),
      (i = navigator.userAgent.indexOf("Firefox") > -1),
      (s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1)),
      typeof createImageBitmap > "u" || n || (i && s < 98)
        ? (this.textureLoader = new Ba(this.options.manager))
        : (this.textureLoader = new Mm(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new fi(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      i = this.json,
      s = this.extensions;
    this.cache.removeAll(),
      this._invokeAll(function (a) {
        return a._markDefs && a._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (a) {
          return a.beforeRoot && a.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (a) {
          const o = {
            scene: a[0][i.scene || 0],
            scenes: a[0],
            animations: a[1],
            cameras: a[2],
            asset: i.asset,
            parser: n,
            userData: {},
          };
          ls(s, o, i),
            zn(o, i),
            Promise.all(
              n._invokeAll(function (c) {
                return c.afterRoot && c.afterRoot(o);
              })
            ).then(function () {
              e(o);
            });
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++) e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, a.mesh),
        a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)),
        a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 &&
      (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(),
      s = (a, o) => {
        const c = this.associations.get(a);
        c != null && this.associations.set(o, c);
        for (const [l, f] of a.children.entries()) s(f, o.children[l]);
      };
    return s(n, i), (i.name += "_instance_" + e.uses[t]++), i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function (s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function (s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function (s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function (s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function (s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function (s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (
            ((i = this._invokeOne(function (s) {
              return s != this && s.getDependency && s.getDependency(e, t);
            })),
            !i)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (t = Promise.all(
        i.map(function (s, a) {
          return n.getDependency(e, a);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
      );
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function (s, a) {
      n.load(Ta.resolveURL(t.uri, i.path), s, void 0, function () {
        a(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const i = t.byteLength || 0,
        s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = aa[i.type],
        o = Ni[i.componentType],
        c = i.normalized === !0,
        l = new o(i.count * a);
      return Promise.resolve(new wt(l, a, c));
    }
    const s = [];
    return (
      i.bufferView !== void 0
        ? s.push(this.getDependency("bufferView", i.bufferView))
        : s.push(null),
      i.sparse !== void 0 &&
        (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        s.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
      Promise.all(s).then(function (a) {
        const o = a[0],
          c = aa[i.type],
          l = Ni[i.componentType],
          f = l.BYTES_PER_ELEMENT,
          h = f * c,
          u = i.byteOffset || 0,
          p =
            i.bufferView !== void 0
              ? n.bufferViews[i.bufferView].byteStride
              : void 0,
          m = i.normalized === !0;
        let d, A;
        if (p && p !== h) {
          const g = Math.floor(u / p),
            _ =
              "InterleavedBuffer:" +
              i.bufferView +
              ":" +
              i.componentType +
              ":" +
              g +
              ":" +
              i.count;
          let b = t.cache.get(_);
          b ||
            ((d = new l(o, g * p, (i.count * p) / f)),
            (b = new nm(d, p / f)),
            t.cache.add(_, b)),
            (A = new Wa(b, c, (u % p) / f, m));
        } else o === null ? (d = new l(i.count * c)) : (d = new l(o, u, i.count * c)), (A = new wt(d, c, m));
        if (i.sparse !== void 0) {
          const g = aa.SCALAR,
            _ = Ni[i.sparse.indices.componentType],
            b = i.sparse.indices.byteOffset || 0,
            E = i.sparse.values.byteOffset || 0,
            C = new _(a[1], b, i.sparse.count * g),
            v = new l(a[2], E, i.sparse.count * c);
          o !== null && (A = new wt(A.array.slice(), A.itemSize, A.normalized));
          for (let T = 0, x = C.length; T < x; T++) {
            const w = C[T];
            if (
              (A.setX(w, v[T * c]),
              c >= 2 && A.setY(w, v[T * c + 1]),
              c >= 3 && A.setZ(w, v[T * c + 2]),
              c >= 4 && A.setW(w, v[T * c + 3]),
              c >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
        }
        return A;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      s = t.textures[e].source,
      a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this,
      s = this.json,
      a = s.textures[e],
      o = s.images[t],
      c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c]) return this.textureCache[c];
    const l = this.loadImageSource(t, n)
      .then(function (f) {
        (f.flipY = !1), (f.name = a.name || o.name || "");
        const u = (s.samplers || {})[a.sampler] || {};
        return (
          (f.magFilter = al[u.magFilter] || Bt),
          (f.minFilter = al[u.minFilter] || Wn),
          (f.wrapS = ol[u.wrapS] || Oi),
          (f.wrapT = ol[u.wrapT] || Oi),
          i.associations.set(f, { textures: e }),
          f
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[c] = l), l;
  }
  loadImageSource(e, t) {
    const n = this,
      i = this.json,
      s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const a = i.images[e],
      o = self.URL || self.webkitURL;
    let c = a.uri || "",
      l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function (h) {
        l = !0;
        const u = new Blob([h], { type: a.mimeType });
        return (c = o.createObjectURL(u)), c;
      });
    else if (a.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    const f = Promise.resolve(c)
      .then(function (h) {
        return new Promise(function (u, p) {
          let m = u;
          t.isImageBitmapLoader === !0 &&
            (m = function (d) {
              const A = new Ct(d);
              (A.needsUpdate = !0), u(A);
            }),
            t.load(Ta.resolveURL(h, s.path), m, void 0, p);
        });
      })
      .then(function (h) {
        return (
          l === !0 && o.revokeObjectURL(c),
          (h.userData.mimeType = a.mimeType || y_(a.uri)),
          h
        );
      })
      .catch(function (h) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", c), h);
      });
    return (this.sourceCache[e] = f), f;
  }
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function (a) {
      if (!a) return null;
      if (
        (n.texCoord !== void 0 &&
          n.texCoord != 0 &&
          !(t === "aoMap" && n.texCoord == 1) &&
          console.warn(
            "THREE.GLTFLoader: Custom UV set " +
              n.texCoord +
              " for texture " +
              t +
              " not yet supported."
          ),
        s.extensions[He.KHR_TEXTURE_TRANSFORM])
      ) {
        const o =
          n.extensions !== void 0
            ? n.extensions[He.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (o) {
          const c = s.associations.get(a);
          (a = s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a, o)),
            s.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.encoding = i), (e[t] = a), a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0,
      s = t.attributes.color !== void 0,
      a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new au()),
        gn.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        (c.sizeAttenuation = !1),
        this.cache.add(o, c)),
        (n = c);
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new ru()),
        gn.prototype.copy.call(c, n),
        c.color.copy(n.color),
        this.cache.add(o, c)),
        (n = c);
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"),
        s && (o += "vertex-colors:"),
        a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c ||
        ((c = n.clone()),
        s && (c.vertexColors = !0),
        a && (c.flatShading = !0),
        i &&
          (c.normalScale && (c.normalScale.y *= -1),
          c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)),
        this.cache.add(o, c),
        this.associations.set(c, this.associations.get(n))),
        (n = c);
    }
    n.aoMap &&
      t.attributes.uv2 === void 0 &&
      t.attributes.uv !== void 0 &&
      t.setAttribute("uv2", t.attributes.uv),
      (e.material = n);
  }
  getMaterialType() {
    return Ya;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      s = n.materials[e];
    let a;
    const o = {},
      c = s.extensions || {},
      l = [];
    if (c[He.KHR_MATERIALS_UNLIT]) {
      const h = i[He.KHR_MATERIALS_UNLIT];
      (a = h.getMaterialType()), l.push(h.extendParams(o, s, t));
    } else {
      const h = s.pbrMetallicRoughness || {};
      if (
        ((o.color = new Se(1, 1, 1)),
        (o.opacity = 1),
        Array.isArray(h.baseColorFactor))
      ) {
        const u = h.baseColorFactor;
        o.color.fromArray(u), (o.opacity = u[3]);
      }
      h.baseColorTexture !== void 0 &&
        l.push(t.assignTexture(o, "map", h.baseColorTexture, Ne)),
        (o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1),
        (o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1),
        h.metallicRoughnessTexture !== void 0 &&
          (l.push(
            t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)
          ),
          l.push(
            t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture)
          )),
        (a = this._invokeOne(function (u) {
          return u.getMaterialType && u.getMaterialType(e);
        })),
        l.push(
          Promise.all(
            this._invokeAll(function (u) {
              return u.extendMaterialParams && u.extendMaterialParams(e, o);
            })
          )
        );
    }
    s.doubleSided === !0 && (o.side = Rn);
    const f = s.alphaMode || oa.OPAQUE;
    if (
      (f === oa.BLEND
        ? ((o.transparent = !0), (o.depthWrite = !1))
        : ((o.transparent = !1),
          f === oa.MASK &&
            (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)),
      s.normalTexture !== void 0 &&
        a !== li &&
        (l.push(t.assignTexture(o, "normalMap", s.normalTexture)),
        (o.normalScale = new ye(1, 1)),
        s.normalTexture.scale !== void 0))
    ) {
      const h = s.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    return (
      s.occlusionTexture !== void 0 &&
        a !== li &&
        (l.push(t.assignTexture(o, "aoMap", s.occlusionTexture)),
        s.occlusionTexture.strength !== void 0 &&
          (o.aoMapIntensity = s.occlusionTexture.strength)),
      s.emissiveFactor !== void 0 &&
        a !== li &&
        (o.emissive = new Se().fromArray(s.emissiveFactor)),
      s.emissiveTexture !== void 0 &&
        a !== li &&
        l.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, Ne)),
      Promise.all(l).then(function () {
        const h = new a(o);
        return (
          s.name && (h.name = s.name),
          zn(h, s),
          t.associations.set(h, { materials: e }),
          s.extensions && ls(i, h, s),
          h
        );
      })
    );
  }
  createUniqueName(e) {
    const t = Ke.sanitizeNodeName(e || "");
    let n = t;
    for (let i = 1; this.nodeNamesUsed[n]; ++i) n = t + "_" + i;
    return (this.nodeNamesUsed[n] = !0), n;
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      i = this.primitiveCache;
    function s(o) {
      return n[He.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(o, t)
        .then(function (c) {
          return ll(c, o, t);
        });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        f = I_(l),
        h = i[f];
      if (h) a.push(h.promise);
      else {
        let u;
        l.extensions && l.extensions[He.KHR_DRACO_MESH_COMPRESSION]
          ? (u = s(l))
          : (u = ll(new en(), l, t)),
          (i[f] = { primitive: l, promise: u }),
          a.push(u);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      s = n.meshes[e],
      a = s.primitives,
      o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const f =
        a[c].material === void 0
          ? E_(this.cache)
          : this.getDependency("material", a[c].material);
      o.push(f);
    }
    return (
      o.push(t.loadGeometries(a)),
      Promise.all(o).then(function (c) {
        const l = c.slice(0, c.length - 1),
          f = c[c.length - 1],
          h = [];
        for (let p = 0, m = f.length; p < m; p++) {
          const d = f[p],
            A = a[p];
          let g;
          const _ = l[p];
          if (
            A.mode === Xt.TRIANGLES ||
            A.mode === Xt.TRIANGLE_STRIP ||
            A.mode === Xt.TRIANGLE_FAN ||
            A.mode === void 0
          )
            (g = s.isSkinnedMesh === !0 ? new sm(d, _) : new Wt(d, _)),
              g.isSkinnedMesh === !0 &&
                !g.geometry.attributes.skinWeight.normalized &&
                g.normalizeSkinWeights(),
              A.mode === Xt.TRIANGLE_STRIP
                ? (g.geometry = il(g.geometry, Nl))
                : A.mode === Xt.TRIANGLE_FAN &&
                  (g.geometry = il(g.geometry, Ia));
          else if (A.mode === Xt.LINES) g = new cm(d, _);
          else if (A.mode === Xt.LINE_STRIP) g = new qa(d, _);
          else if (A.mode === Xt.LINE_LOOP) g = new lm(d, _);
          else if (A.mode === Xt.POINTS) g = new um(d, _);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + A.mode
            );
          Object.keys(g.geometry.morphAttributes).length > 0 && C_(g, s),
            (g.name = t.createUniqueName(s.name || "mesh_" + e)),
            zn(g, s),
            A.extensions && ls(i, g, A),
            t.assignFinalMaterial(g),
            h.push(g);
        }
        for (let p = 0, m = h.length; p < m; p++)
          t.associations.set(h[p], { meshes: e, primitives: p });
        if (h.length === 1) return h[0];
        const u = new Hn();
        t.associations.set(u, { meshes: e });
        for (let p = 0, m = h.length; p < m; p++) u.add(h[p]);
        return u;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (t = new yt(
            nf.radToDeg(i.yfov),
            i.aspectRatio || 1,
            i.znear || 1,
            i.zfar || 2e6
          ))
        : n.type === "orthographic" &&
          (t = new gr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      zn(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this.getDependency("node", t.joints[i]));
    return (
      t.inverseBindMatrices !== void 0
        ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (i) {
        const s = i.pop(),
          a = i,
          o = [],
          c = [];
        for (let l = 0, f = a.length; l < f; l++) {
          const h = a[l];
          if (h) {
            o.push(h);
            const u = new Be();
            s !== null && u.fromArray(s.array, l * 16), c.push(u);
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              t.joints[l]
            );
        }
        return new ja(o, c);
      })
    );
  }
  loadAnimation(e) {
    const n = this.json.animations[e],
      i = [],
      s = [],
      a = [],
      o = [],
      c = [];
    for (let l = 0, f = n.channels.length; l < f; l++) {
      const h = n.channels[l],
        u = n.samplers[h.sampler],
        p = h.target,
        m = p.node,
        d = n.parameters !== void 0 ? n.parameters[u.input] : u.input,
        A = n.parameters !== void 0 ? n.parameters[u.output] : u.output;
      i.push(this.getDependency("node", m)),
        s.push(this.getDependency("accessor", d)),
        a.push(this.getDependency("accessor", A)),
        o.push(u),
        c.push(p);
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(s),
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
    ]).then(function (l) {
      const f = l[0],
        h = l[1],
        u = l[2],
        p = l[3],
        m = l[4],
        d = [];
      for (let g = 0, _ = f.length; g < _; g++) {
        const b = f[g],
          E = h[g],
          C = u[g],
          v = p[g],
          T = m[g];
        if (b === void 0) continue;
        b.updateMatrix();
        let x;
        switch (On[T.path]) {
          case On.weights:
            x = Is;
            break;
          case On.rotation:
            x = di;
            break;
          case On.position:
          case On.scale:
          default:
            x = ys;
            break;
        }
        const w = b.name ? b.name : b.uuid,
          B = v.interpolation !== void 0 ? __[v.interpolation] : Hi,
          G = [];
        On[T.path] === On.weights
          ? b.traverse(function (P) {
              P.morphTargetInfluences && G.push(P.name ? P.name : P.uuid);
            })
          : G.push(w);
        let H = C.array;
        if (C.normalized) {
          const P = La(H.constructor),
            Q = new Float32Array(H.length);
          for (let z = 0, Y = H.length; z < Y; z++) Q[z] = H[z] * P;
          H = Q;
        }
        for (let P = 0, Q = G.length; P < Q; P++) {
          const z = new x(G[P] + "." + On[T.path], E.array, H, B);
          v.interpolation === "CUBICSPLINE" &&
            ((z.createInterpolant = function (K) {
              const O = this instanceof di ? b_ : Su;
              return new O(this.times, this.values, this.getValueSize() / 3, K);
            }),
            (z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
              !0)),
            d.push(z);
        }
      }
      const A = n.name ? n.name : "animation_" + e;
      return new mm(A, void 0, d);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e];
    return i.mesh === void 0
      ? null
      : n.getDependency("mesh", i.mesh).then(function (s) {
          const a = n._getNodeRef(n.meshCache, i.mesh, s);
          return (
            i.weights !== void 0 &&
              a.traverse(function (o) {
                if (o.isMesh)
                  for (let c = 0, l = i.weights.length; c < l; c++)
                    o.morphTargetInfluences[c] = i.weights[c];
              }),
            a
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      n = this.extensions,
      i = this,
      s = t.nodes[e],
      a = s.name ? i.createUniqueName(s.name) : "";
    return (function () {
      const o = [],
        c = i._invokeOne(function (u) {
          return u.createNodeMesh && u.createNodeMesh(e);
        });
      c && o.push(c),
        s.camera !== void 0 &&
          o.push(
            i.getDependency("camera", s.camera).then(function (u) {
              return i._getNodeRef(i.cameraCache, s.camera, u);
            })
          ),
        i
          ._invokeAll(function (u) {
            return u.createNodeAttachment && u.createNodeAttachment(e);
          })
          .forEach(function (u) {
            o.push(u);
          });
      const l = [],
        f = s.children || [];
      for (let u = 0, p = f.length; u < p; u++)
        l.push(i.getDependency("node", f[u]));
      const h =
        s.skin === void 0
          ? Promise.resolve(null)
          : i.getDependency("skin", s.skin);
      return Promise.all([Promise.all(o), Promise.all(l), h]);
    })().then(function (o) {
      const c = o[0],
        l = o[1],
        f = o[2];
      let h;
      if (
        (s.isBone === !0
          ? (h = new iu())
          : c.length > 1
          ? (h = new Hn())
          : c.length === 1
          ? (h = c[0])
          : (h = new $e()),
        h !== c[0])
      )
        for (let u = 0, p = c.length; u < p; u++) h.add(c[u]);
      if (
        (s.name && ((h.userData.name = s.name), (h.name = a)),
        zn(h, s),
        s.extensions && ls(n, h, s),
        s.matrix !== void 0)
      ) {
        const u = new Be();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      i.associations.has(h) || i.associations.set(h, {}),
        (i.associations.get(h).nodes = e),
        f !== null &&
          h.traverse(function (u) {
            u.isSkinnedMesh && u.bind(f, v_);
          });
      for (let u = 0, p = l.length; u < p; u++) h.add(l[u]);
      return h;
    });
  }
  loadScene(e) {
    const t = this.extensions,
      n = this.json.scenes[e],
      i = this,
      s = new Hn();
    n.name && (s.name = i.createUniqueName(n.name)),
      zn(s, n),
      n.extensions && ls(t, s, n);
    const a = n.nodes || [],
      o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function (c) {
      for (let f = 0, h = c.length; f < h; f++) s.add(c[f]);
      const l = (f) => {
        const h = new Map();
        for (const [u, p] of i.associations)
          (u instanceof gn || u instanceof Ct) && h.set(u, p);
        return (
          f.traverse((u) => {
            const p = i.associations.get(u);
            p != null && h.set(u, p);
          }),
          h
        );
      };
      return (i.associations = l(s)), s;
    });
  }
}
function S_(r, e, t) {
  const n = e.attributes,
    i = new qi();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION],
      c = o.min,
      l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (
        (i.set(new R(c[0], c[1], c[2]), new R(l[0], l[1], l[2])), o.normalized)
      ) {
        const f = La(Ni[o.componentType]);
        i.min.multiplyScalar(f), i.max.multiplyScalar(f);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
      );
      return;
    }
  } else return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new R(),
      c = new R();
    for (let l = 0, f = s.length; l < f; l++) {
      const h = s[l];
      if (h.POSITION !== void 0) {
        const u = t.json.accessors[h.POSITION],
          p = u.min,
          m = u.max;
        if (p !== void 0 && m !== void 0) {
          if (
            (c.setX(Math.max(Math.abs(p[0]), Math.abs(m[0]))),
            c.setY(Math.max(Math.abs(p[1]), Math.abs(m[1]))),
            c.setZ(Math.max(Math.abs(p[2]), Math.abs(m[2]))),
            u.normalized)
          ) {
            const d = La(Ni[u.componentType]);
            c.multiplyScalar(d);
          }
          o.max(c);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new Yi();
  i.getCenter(a.center),
    (a.radius = i.min.distanceTo(i.max) / 2),
    (r.boundingSphere = a);
}
function ll(r, e, t) {
  const n = e.attributes,
    i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function (c) {
      r.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = Ra[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function (o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return (
    zn(r, e),
    S_(r, e, t),
    Promise.all(i).then(function () {
      return e.targets !== void 0 ? x_(r, e.targets, t) : r;
    })
  );
}
var M_ = (function () {
  var r =
      "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",
    e =
      "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",
    t = new Uint8Array([
      0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0,
      1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7,
      0, 65, 0, 253, 15, 26, 11,
    ]),
    n = new Uint8Array([
      32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15,
      116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24,
      23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136,
      108, 28, 118, 29, 73, 115,
    ]);
  if (typeof WebAssembly != "object") return { supported: !1 };
  var i = WebAssembly.validate(t) ? e : r,
    s,
    a = WebAssembly.instantiate(o(i), {}).then(function (g) {
      (s = g.instance), s.exports.__wasm_call_ctors();
    });
  function o(g) {
    for (var _ = new Uint8Array(g.length), b = 0; b < g.length; ++b) {
      var E = g.charCodeAt(b);
      _[b] = E > 96 ? E - 97 : E > 64 ? E - 39 : E + 4;
    }
    for (var C = 0, b = 0; b < g.length; ++b)
      _[C++] = _[b] < 60 ? n[_[b]] : (_[b] - 60) * 64 + _[++b];
    return _.buffer.slice(0, C);
  }
  function c(g, _, b, E, C, v) {
    var T = s.exports.sbrk,
      x = (b + 3) & -4,
      w = T(x * E),
      B = T(C.length),
      G = new Uint8Array(s.exports.memory.buffer);
    G.set(C, B);
    var H = g(w, b, E, B, C.length);
    if (
      (H == 0 && v && v(w, x, E),
      _.set(G.subarray(w, w + b * E)),
      T(w - T(0)),
      H != 0)
    )
      throw new Error("Malformed buffer data: " + H);
  }
  var l = {
      NONE: "",
      OCTAHEDRAL: "meshopt_decodeFilterOct",
      QUATERNION: "meshopt_decodeFilterQuat",
      EXPONENTIAL: "meshopt_decodeFilterExp",
    },
    f = {
      ATTRIBUTES: "meshopt_decodeVertexBuffer",
      TRIANGLES: "meshopt_decodeIndexBuffer",
      INDICES: "meshopt_decodeIndexSequence",
    },
    h = [],
    u = 0;
  function p(g) {
    var _ = { object: new Worker(g), pending: 0, requests: {} };
    return (
      (_.object.onmessage = function (b) {
        var E = b.data;
        (_.pending -= E.count),
          _.requests[E.id][E.action](E.value),
          delete _.requests[E.id];
      }),
      _
    );
  }
  function m(g) {
    for (
      var _ =
          "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" +
          new Uint8Array(o(i)) +
          "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" +
          c.toString() +
          A.toString(),
        b = new Blob([_], { type: "text/javascript" }),
        E = URL.createObjectURL(b),
        C = 0;
      C < g;
      ++C
    )
      h[C] = p(E);
    URL.revokeObjectURL(E);
  }
  function d(g, _, b, E, C) {
    for (var v = h[0], T = 1; T < h.length; ++T)
      h[T].pending < v.pending && (v = h[T]);
    return new Promise(function (x, w) {
      var B = new Uint8Array(b),
        G = u++;
      (v.pending += g),
        (v.requests[G] = { resolve: x, reject: w }),
        v.object.postMessage(
          { id: G, count: g, size: _, source: B, mode: E, filter: C },
          [B.buffer]
        );
    });
  }
  function A(g) {
    a.then(function () {
      var _ = g.data;
      try {
        var b = new Uint8Array(_.count * _.size);
        c(s.exports[_.mode], b, _.count, _.size, _.source, s.exports[_.filter]),
          self.postMessage(
            { id: _.id, count: _.count, action: "resolve", value: b },
            [b.buffer]
          );
      } catch (E) {
        self.postMessage({
          id: _.id,
          count: _.count,
          action: "reject",
          value: E,
        });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function (g) {
      m(g);
    },
    decodeVertexBuffer: function (g, _, b, E, C) {
      c(s.exports.meshopt_decodeVertexBuffer, g, _, b, E, s.exports[l[C]]);
    },
    decodeIndexBuffer: function (g, _, b, E) {
      c(s.exports.meshopt_decodeIndexBuffer, g, _, b, E);
    },
    decodeIndexSequence: function (g, _, b, E) {
      c(s.exports.meshopt_decodeIndexSequence, g, _, b, E);
    },
    decodeGltfBuffer: function (g, _, b, E, C, v) {
      c(s.exports[f[C]], g, _, b, E, s.exports[l[v]]);
    },
    decodeGltfBufferAsync: function (g, _, b, E, C) {
      return h.length > 0
        ? d(g, _, b, f[E], l[C])
        : a.then(function () {
            var v = new Uint8Array(g * _);
            return c(s.exports[f[E]], v, g, _, b, s.exports[l[C]]), v;
          });
    },
  };
})();
const B_ = (r) => {
  const e = { nodes: {}, materials: {} };
  return (
    r &&
      r.traverse((t) => {
        t.name && (e.nodes[t.name] = t),
          t.material &&
            !e.materials[t.material.name] &&
            (e.materials[t.material.name] = t.material);
      }),
    e
  );
};
new R();
new R();
new R();
class T_ {
  constructor(e = 4) {
    (this.pool = e),
      (this.queue = []),
      (this.workers = []),
      (this.workersResolve = []),
      (this.workerStatus = 0);
  }
  _initWorker(e) {
    if (!this.workers[e]) {
      const t = this.workerCreator();
      t.addEventListener("message", this._onMessage.bind(this, e)),
        (this.workers[e] = t);
    }
  }
  _getIdleWorker() {
    for (let e = 0; e < this.pool; e++)
      if (!(this.workerStatus & (1 << e))) return e;
    return -1;
  }
  _onMessage(e, t) {
    const n = this.workersResolve[e];
    if ((n && n(t), this.queue.length)) {
      const { resolve: i, msg: s, transfer: a } = this.queue.shift();
      (this.workersResolve[e] = i), this.workers[e].postMessage(s, a);
    } else this.workerStatus ^= 1 << e;
  }
  setWorkerCreator(e) {
    this.workerCreator = e;
  }
  setWorkerLimit(e) {
    this.pool = e;
  }
  postMessage(e, t) {
    return new Promise((n) => {
      const i = this._getIdleWorker();
      i !== -1
        ? (this._initWorker(i),
          (this.workerStatus |= 1 << i),
          (this.workersResolve[i] = n),
          this.workers[i].postMessage(e, t))
        : this.queue.push({ resolve: n, msg: e, transfer: t });
    });
  }
  dispose() {
    this.workers.forEach((e) => e.terminate()),
      (this.workersResolve.length = 0),
      (this.workers.length = 0),
      (this.queue.length = 0),
      (this.workerStatus = 0);
  }
}
const D_ = 0,
  R_ = 2,
  L_ = 1,
  Q_ = 2,
  P_ = 0,
  Mu = 9,
  no = 15,
  Bu = 16,
  io = 22,
  Tu = 37,
  so = 43,
  Du = 76,
  Ru = 83,
  Lu = 97,
  Qu = 100,
  Pu = 103,
  Fu = 109;
class F_ {
  constructor() {
    (this.vkFormat = 0),
      (this.typeSize = 1),
      (this.pixelWidth = 0),
      (this.pixelHeight = 0),
      (this.pixelDepth = 0),
      (this.layerCount = 0),
      (this.faceCount = 1),
      (this.supercompressionScheme = 0),
      (this.levels = []),
      (this.dataFormatDescriptor = [
        {
          vendorId: 0,
          descriptorType: 0,
          descriptorBlockSize: 0,
          versionNumber: 2,
          colorModel: 0,
          colorPrimaries: 1,
          transferFunction: 2,
          flags: 0,
          texelBlockDimension: [0, 0, 0, 0],
          bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
          samples: [],
        },
      ]),
      (this.keyValue = {}),
      (this.globalData = null);
  }
}
class us {
  constructor(e, t, n, i) {
    (this._dataView = new DataView(e.buffer, e.byteOffset + t, n)),
      (this._littleEndian = i),
      (this._offset = 0);
  }
  _nextUint8() {
    const e = this._dataView.getUint8(this._offset);
    return (this._offset += 1), e;
  }
  _nextUint16() {
    const e = this._dataView.getUint16(this._offset, this._littleEndian);
    return (this._offset += 2), e;
  }
  _nextUint32() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian);
    return (this._offset += 4), e;
  }
  _nextUint64() {
    const e =
      this._dataView.getUint32(this._offset, this._littleEndian) +
      4294967296 *
        this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return (this._offset += 8), e;
  }
  _nextInt32() {
    const e = this._dataView.getInt32(this._offset, this._littleEndian);
    return (this._offset += 4), e;
  }
  _skip(e) {
    return (this._offset += e), this;
  }
  _scan(e, t = 0) {
    const n = this._offset;
    let i = 0;
    for (; this._dataView.getUint8(this._offset) !== t && i < e; )
      i++, this._offset++;
    return (
      i < e && this._offset++,
      new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, i)
    );
  }
}
const Qt = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function ul(r) {
  return typeof TextDecoder < "u"
    ? new TextDecoder().decode(r)
    : Buffer.from(r).toString("utf8");
}
function k_(r) {
  const e = new Uint8Array(r.buffer, r.byteOffset, Qt.length);
  if (
    e[0] !== Qt[0] ||
    e[1] !== Qt[1] ||
    e[2] !== Qt[2] ||
    e[3] !== Qt[3] ||
    e[4] !== Qt[4] ||
    e[5] !== Qt[5] ||
    e[6] !== Qt[6] ||
    e[7] !== Qt[7] ||
    e[8] !== Qt[8] ||
    e[9] !== Qt[9] ||
    e[10] !== Qt[10] ||
    e[11] !== Qt[11]
  )
    throw new Error("Missing KTX 2.0 identifier.");
  const t = new F_(),
    n = 17 * Uint32Array.BYTES_PER_ELEMENT,
    i = new us(r, Qt.length, n, !0);
  (t.vkFormat = i._nextUint32()),
    (t.typeSize = i._nextUint32()),
    (t.pixelWidth = i._nextUint32()),
    (t.pixelHeight = i._nextUint32()),
    (t.pixelDepth = i._nextUint32()),
    (t.layerCount = i._nextUint32()),
    (t.faceCount = i._nextUint32());
  const s = i._nextUint32();
  t.supercompressionScheme = i._nextUint32();
  const a = i._nextUint32(),
    o = i._nextUint32(),
    c = i._nextUint32(),
    l = i._nextUint32(),
    f = i._nextUint64(),
    h = i._nextUint64(),
    u = new us(r, Qt.length + n, 3 * s * 8, !0);
  for (let K = 0; K < s; K++)
    t.levels.push({
      levelData: new Uint8Array(
        r.buffer,
        r.byteOffset + u._nextUint64(),
        u._nextUint64()
      ),
      uncompressedByteLength: u._nextUint64(),
    });
  const p = new us(r, a, o, !0),
    m = {
      vendorId: p._skip(4)._nextUint16(),
      descriptorType: p._nextUint16(),
      versionNumber: p._nextUint16(),
      descriptorBlockSize: p._nextUint16(),
      colorModel: p._nextUint8(),
      colorPrimaries: p._nextUint8(),
      transferFunction: p._nextUint8(),
      flags: p._nextUint8(),
      texelBlockDimension: [
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
      ],
      bytesPlane: [
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
      ],
      samples: [],
    },
    d = (m.descriptorBlockSize / 4 - 6) / 4;
  for (let K = 0; K < d; K++) {
    const O = {
      bitOffset: p._nextUint16(),
      bitLength: p._nextUint8(),
      channelType: p._nextUint8(),
      samplePosition: [
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
        p._nextUint8(),
      ],
      sampleLower: -1 / 0,
      sampleUpper: 1 / 0,
    };
    64 & O.channelType
      ? ((O.sampleLower = p._nextInt32()), (O.sampleUpper = p._nextInt32()))
      : ((O.sampleLower = p._nextUint32()), (O.sampleUpper = p._nextUint32())),
      (m.samples[K] = O);
  }
  (t.dataFormatDescriptor.length = 0), t.dataFormatDescriptor.push(m);
  const A = new us(r, c, l, !0);
  for (; A._offset < l; ) {
    const K = A._nextUint32(),
      O = A._scan(K),
      ee = ul(O),
      Z = A._scan(K - O.byteLength);
    (t.keyValue[ee] = ee.match(/^ktx/i) ? ul(Z) : Z),
      A._offset % 4 && A._skip(4 - (A._offset % 4));
  }
  if (h <= 0) return t;
  const g = new us(r, f, h, !0),
    _ = g._nextUint16(),
    b = g._nextUint16(),
    E = g._nextUint32(),
    C = g._nextUint32(),
    v = g._nextUint32(),
    T = g._nextUint32(),
    x = [];
  for (let K = 0; K < s; K++)
    x.push({
      imageFlags: g._nextUint32(),
      rgbSliceByteOffset: g._nextUint32(),
      rgbSliceByteLength: g._nextUint32(),
      alphaSliceByteOffset: g._nextUint32(),
      alphaSliceByteLength: g._nextUint32(),
    });
  const w = f + g._offset,
    B = w + E,
    G = B + C,
    H = G + v,
    P = new Uint8Array(r.buffer, r.byteOffset + w, E),
    Q = new Uint8Array(r.buffer, r.byteOffset + B, C),
    z = new Uint8Array(r.buffer, r.byteOffset + G, v),
    Y = new Uint8Array(r.buffer, r.byteOffset + H, T);
  return (
    (t.globalData = {
      endpointCount: _,
      selectorCount: b,
      imageDescs: x,
      endpointsData: P,
      selectorsData: Q,
      tablesData: z,
      extendedData: Y,
    }),
    t
  );
}
let ca, Tn, Qa;
const la = {
  env: {
    emscripten_notify_memory_growth: function (r) {
      Qa = new Uint8Array(Tn.exports.memory.buffer);
    },
  },
};
class N_ {
  init() {
    return (
      ca ||
      ((ca =
        typeof fetch < "u"
          ? fetch("data:application/wasm;base64," + hl)
              .then((e) => e.arrayBuffer())
              .then((e) => WebAssembly.instantiate(e, la))
              .then(this._init)
          : WebAssembly.instantiate(Buffer.from(hl, "base64"), la).then(
              this._init
            )),
      ca)
    );
  }
  _init(e) {
    (Tn = e.instance), la.env.emscripten_notify_memory_growth(0);
  }
  decode(e, t = 0) {
    if (!Tn) throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const n = e.byteLength,
      i = Tn.exports.malloc(n);
    Qa.set(e, i), (t = t || Number(Tn.exports.ZSTD_findDecompressedSize(i, n)));
    const s = Tn.exports.malloc(t),
      a = Tn.exports.ZSTD_decompress(s, t, i, n),
      o = Qa.slice(s, s + a);
    return Tn.exports.free(i), Tn.exports.free(s), o;
  }
}
const hl =
    "AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",
  ua = new WeakMap();
let ha = 0,
  fa;
class on extends gi {
  constructor(e) {
    super(e),
      (this.transcoderPath = ""),
      (this.transcoderBinary = null),
      (this.transcoderPending = null),
      (this.workerPool = new T_()),
      (this.workerSourceURL = ""),
      (this.workerConfig = null),
      typeof MSC_TRANSCODER < "u" &&
        console.warn(
          'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
        );
  }
  setTranscoderPath(e) {
    return (this.transcoderPath = e), this;
  }
  setWorkerLimit(e) {
    return this.workerPool.setWorkerLimit(e), this;
  }
  detectSupport(e) {
    return (
      (this.workerConfig = {
        astcSupported: e.extensions.has("WEBGL_compressed_texture_astc"),
        etc1Supported: e.extensions.has("WEBGL_compressed_texture_etc1"),
        etc2Supported: e.extensions.has("WEBGL_compressed_texture_etc"),
        dxtSupported: e.extensions.has("WEBGL_compressed_texture_s3tc"),
        bptcSupported: e.extensions.has("EXT_texture_compression_bptc"),
        pvrtcSupported:
          e.extensions.has("WEBGL_compressed_texture_pvrtc") ||
          e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      }),
      e.capabilities.isWebGL2 && (this.workerConfig.etc1Supported = !1),
      this
    );
  }
  init() {
    if (!this.transcoderPending) {
      const e = new fi(this.manager);
      e.setPath(this.transcoderPath),
        e.setWithCredentials(this.withCredentials);
      const t = e.loadAsync("basis_transcoder.js"),
        n = new fi(this.manager);
      n.setPath(this.transcoderPath),
        n.setResponseType("arraybuffer"),
        n.setWithCredentials(this.withCredentials);
      const i = n.loadAsync("basis_transcoder.wasm");
      (this.transcoderPending = Promise.all([t, i]).then(([s, a]) => {
        const o = on.BasisWorker.toString(),
          c = [
            "/* constants */",
            "let _EngineFormat = " + JSON.stringify(on.EngineFormat),
            "let _TranscoderFormat = " + JSON.stringify(on.TranscoderFormat),
            "let _BasisFormat = " + JSON.stringify(on.BasisFormat),
            "/* basis_transcoder.js */",
            s,
            "/* worker */",
            o.substring(o.indexOf("{") + 1, o.lastIndexOf("}")),
          ].join(`
`);
        (this.workerSourceURL = URL.createObjectURL(new Blob([c]))),
          (this.transcoderBinary = a),
          this.workerPool.setWorkerCreator(() => {
            const l = new Worker(this.workerSourceURL),
              f = this.transcoderBinary.slice(0);
            return (
              l.postMessage(
                {
                  type: "init",
                  config: this.workerConfig,
                  transcoderBinary: f,
                },
                [f]
              ),
              l
            );
          });
      })),
        ha > 0 &&
          console.warn(
            "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
          ),
        ha++;
    }
    return this.transcoderPending;
  }
  load(e, t, n, i) {
    if (this.workerConfig === null)
      throw new Error(
        "THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`."
      );
    const s = new fi(this.manager);
    s.setResponseType("arraybuffer"),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        (a) => {
          if (ua.has(a)) return ua.get(a).promise.then(t).catch(i);
          this._createTexture(a)
            .then((o) => (t ? t(o) : null))
            .catch(i);
        },
        n,
        i
      );
  }
  _createTextureFrom(e, t) {
    const {
      mipmaps: n,
      width: i,
      height: s,
      format: a,
      type: o,
      error: c,
      dfdTransferFn: l,
      dfdFlags: f,
    } = e;
    if (o === "error") return Promise.reject(c);
    const h =
      t.layerCount > 1
        ? new hm(n, i, s, t.layerCount, a, Ft)
        : new ou(n, i, s, a, Ft);
    return (
      (h.minFilter = n.length === 1 ? Bt : Wn),
      (h.magFilter = Bt),
      (h.generateMipmaps = !1),
      (h.needsUpdate = !0),
      (h.encoding = l === Q_ ? Ne : bn),
      (h.premultiplyAlpha = !!(f & L_)),
      h
    );
  }
  async _createTexture(e, t = {}) {
    const n = k_(new Uint8Array(e));
    if (n.vkFormat !== P_) return G_(n);
    const i = t,
      s = this.init()
        .then(() =>
          this.workerPool.postMessage(
            { type: "transcode", buffer: e, taskConfig: i },
            [e]
          )
        )
        .then((a) => this._createTextureFrom(a.data, n));
    return ua.set(e, { promise: s }), s;
  }
  dispose() {
    return (
      this.workerPool.dispose(),
      this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL),
      ha--,
      this
    );
  }
}
on.BasisFormat = { ETC1S: 0, UASTC_4x4: 1 };
on.TranscoderFormat = {
  ETC1: 0,
  ETC2: 1,
  BC1: 2,
  BC3: 3,
  BC4: 4,
  BC5: 5,
  BC7_M6_OPAQUE_ONLY: 6,
  BC7_M5: 7,
  PVRTC1_4_RGB: 8,
  PVRTC1_4_RGBA: 9,
  ASTC_4x4: 10,
  ATC_RGB: 11,
  ATC_RGBA_INTERPOLATED_ALPHA: 12,
  RGBA32: 13,
  RGB565: 14,
  BGR565: 15,
  RGBA4444: 16,
};
on.EngineFormat = {
  RGBAFormat: vt,
  RGBA_ASTC_4x4_Format: Ca,
  RGBA_BPTC_Format: nr,
  RGBA_ETC2_EAC_Format: xa,
  RGBA_PVRTC_4BPPV1_Format: _a,
  RGBA_S3TC_DXT5_Format: tr,
  RGB_ETC1_Format: kl,
  RGB_ETC2_Format: Ea,
  RGB_PVRTC_4BPPV1_Format: ba,
  RGB_S3TC_DXT1_Format: er,
};
on.BasisWorker = function () {
  let r, e, t;
  const n = _EngineFormat,
    i = _TranscoderFormat,
    s = _BasisFormat;
  self.addEventListener("message", function (m) {
    const d = m.data;
    switch (d.type) {
      case "init":
        (r = d.config), a(d.transcoderBinary);
        break;
      case "transcode":
        e.then(() => {
          try {
            const {
                width: A,
                height: g,
                hasAlpha: _,
                mipmaps: b,
                format: E,
                dfdTransferFn: C,
                dfdFlags: v,
              } = o(d.buffer),
              T = [];
            for (let x = 0; x < b.length; ++x) T.push(b[x].data.buffer);
            self.postMessage(
              {
                type: "transcode",
                id: d.id,
                width: A,
                height: g,
                hasAlpha: _,
                mipmaps: b,
                format: E,
                dfdTransferFn: C,
                dfdFlags: v,
              },
              T
            );
          } catch (A) {
            console.error(A),
              self.postMessage({ type: "error", id: d.id, error: A.message });
          }
        });
        break;
    }
  });
  function a(m) {
    e = new Promise((d) => {
      (t = { wasmBinary: m, onRuntimeInitialized: d }), BASIS(t);
    }).then(() => {
      t.initializeBasis(),
        t.KTX2File === void 0 &&
          console.warn(
            "THREE.KTX2Loader: Please update Basis Universal transcoder."
          );
    });
  }
  function o(m) {
    const d = new t.KTX2File(new Uint8Array(m));
    function A() {
      d.close(), d.delete();
    }
    if (!d.isValid())
      throw (
        (A(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file"))
      );
    const g = d.isUASTC() ? s.UASTC_4x4 : s.ETC1S,
      _ = d.getWidth(),
      b = d.getHeight(),
      E = d.getLayers() || 1,
      C = d.getLevels(),
      v = d.getHasAlpha(),
      T = d.getDFDTransferFunc(),
      x = d.getDFDFlags(),
      { transcoderFormat: w, engineFormat: B } = h(g, _, b, v);
    if (!_ || !b || !C)
      throw (A(), new Error("THREE.KTX2Loader:	Invalid texture"));
    if (!d.startTranscoding())
      throw (A(), new Error("THREE.KTX2Loader: .startTranscoding failed"));
    const G = [];
    for (let H = 0; H < C; H++) {
      const P = [];
      let Q, z;
      for (let Y = 0; Y < E; Y++) {
        const K = d.getImageLevelInfo(H, Y, 0);
        (Q = K.origWidth), (z = K.origHeight);
        const O = new Uint8Array(d.getImageTranscodedSizeInBytes(H, Y, 0, w));
        if (!d.transcodeImage(O, H, Y, 0, w, 0, -1, -1))
          throw (A(), new Error("THREE.KTX2Loader: .transcodeImage failed."));
        P.push(O);
      }
      G.push({ data: p(P), width: Q, height: z });
    }
    return (
      A(),
      {
        width: _,
        height: b,
        hasAlpha: v,
        mipmaps: G,
        format: B,
        dfdTransferFn: T,
        dfdFlags: x,
      }
    );
  }
  const c = [
      {
        if: "astcSupported",
        basisFormat: [s.UASTC_4x4],
        transcoderFormat: [i.ASTC_4x4, i.ASTC_4x4],
        engineFormat: [n.RGBA_ASTC_4x4_Format, n.RGBA_ASTC_4x4_Format],
        priorityETC1S: 1 / 0,
        priorityUASTC: 1,
        needsPowerOfTwo: !1,
      },
      {
        if: "bptcSupported",
        basisFormat: [s.ETC1S, s.UASTC_4x4],
        transcoderFormat: [i.BC7_M5, i.BC7_M5],
        engineFormat: [n.RGBA_BPTC_Format, n.RGBA_BPTC_Format],
        priorityETC1S: 3,
        priorityUASTC: 2,
        needsPowerOfTwo: !1,
      },
      {
        if: "dxtSupported",
        basisFormat: [s.ETC1S, s.UASTC_4x4],
        transcoderFormat: [i.BC1, i.BC3],
        engineFormat: [n.RGB_S3TC_DXT1_Format, n.RGBA_S3TC_DXT5_Format],
        priorityETC1S: 4,
        priorityUASTC: 5,
        needsPowerOfTwo: !1,
      },
      {
        if: "etc2Supported",
        basisFormat: [s.ETC1S, s.UASTC_4x4],
        transcoderFormat: [i.ETC1, i.ETC2],
        engineFormat: [n.RGB_ETC2_Format, n.RGBA_ETC2_EAC_Format],
        priorityETC1S: 1,
        priorityUASTC: 3,
        needsPowerOfTwo: !1,
      },
      {
        if: "etc1Supported",
        basisFormat: [s.ETC1S, s.UASTC_4x4],
        transcoderFormat: [i.ETC1],
        engineFormat: [n.RGB_ETC1_Format],
        priorityETC1S: 2,
        priorityUASTC: 4,
        needsPowerOfTwo: !1,
      },
      {
        if: "pvrtcSupported",
        basisFormat: [s.ETC1S, s.UASTC_4x4],
        transcoderFormat: [i.PVRTC1_4_RGB, i.PVRTC1_4_RGBA],
        engineFormat: [n.RGB_PVRTC_4BPPV1_Format, n.RGBA_PVRTC_4BPPV1_Format],
        priorityETC1S: 5,
        priorityUASTC: 6,
        needsPowerOfTwo: !0,
      },
    ],
    l = c.sort(function (m, d) {
      return m.priorityETC1S - d.priorityETC1S;
    }),
    f = c.sort(function (m, d) {
      return m.priorityUASTC - d.priorityUASTC;
    });
  function h(m, d, A, g) {
    let _, b;
    const E = m === s.ETC1S ? l : f;
    for (let C = 0; C < E.length; C++) {
      const v = E[C];
      if (
        r[v.if] &&
        v.basisFormat.includes(m) &&
        !(g && v.transcoderFormat.length < 2) &&
        !(v.needsPowerOfTwo && !(u(d) && u(A)))
      )
        return (
          (_ = v.transcoderFormat[g ? 1 : 0]),
          (b = v.engineFormat[g ? 1 : 0]),
          { transcoderFormat: _, engineFormat: b }
        );
    }
    return (
      console.warn(
        "THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."
      ),
      (_ = i.RGBA32),
      (b = n.RGBAFormat),
      { transcoderFormat: _, engineFormat: b }
    );
  }
  function u(m) {
    return m <= 2 ? !0 : (m & (m - 1)) === 0 && m !== 0;
  }
  function p(m) {
    let d = 0;
    for (const _ of m) d += _.byteLength;
    const A = new Uint8Array(d);
    let g = 0;
    for (const _ of m) A.set(_, g), (g += _.byteLength);
    return A;
  }
};
const fl = {
    [Fu]: vt,
    [Lu]: vt,
    [Tu]: vt,
    [so]: vt,
    [Pu]: ds,
    [Ru]: ds,
    [Bu]: ds,
    [io]: ds,
    [Qu]: fs,
    [Du]: fs,
    [no]: fs,
    [Mu]: fs,
  },
  da = {
    [Fu]: Zt,
    [Lu]: Qn,
    [Tu]: Ft,
    [so]: Ft,
    [Pu]: Zt,
    [Ru]: Qn,
    [Bu]: Ft,
    [io]: Ft,
    [Qu]: Zt,
    [Du]: Qn,
    [no]: Ft,
    [Mu]: Ft,
  },
  U_ = { [so]: Ne, [io]: Ne, [no]: Ne };
async function G_(r) {
  const { vkFormat: e, pixelWidth: t, pixelHeight: n, pixelDepth: i } = r;
  if (fl[e] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  const s = r.levels[0];
  let a, o;
  if (r.supercompressionScheme === D_) a = s.levelData;
  else if (r.supercompressionScheme === R_)
    fa ||
      (fa = new Promise(async (l) => {
        const f = new N_();
        await f.init(), l(f);
      })),
      (a = (await fa).decode(s.levelData, s.uncompressedByteLength));
  else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
  da[e] === Zt
    ? (o = new Float32Array(
        a.buffer,
        a.byteOffset,
        a.byteLength / Float32Array.BYTES_PER_ELEMENT
      ))
    : da[e] === Qn
    ? (o = new Uint16Array(
        a.buffer,
        a.byteOffset,
        a.byteLength / Uint16Array.BYTES_PER_ELEMENT
      ))
    : (o = a);
  const c = i === 0 ? new su(o, t, n) : new jl(o, t, n, i);
  return (
    (c.type = da[e]),
    (c.format = fl[e]),
    (c.encoding = U_[e] || bn),
    (c.needsUpdate = !0),
    Promise.resolve(c)
  );
}
function dl(r, e, t) {
  const n = r.slice();
  return (n[48] = e[t]), n;
}
function Al(r, e, t) {
  const n = r.slice();
  return (n[51] = e[t]), n;
}
function pl(r) {
  let e,
    t,
    n = Object.values(r[3]),
    i = [];
  for (let a = 0; a < n.length; a += 1) i[a] = _l(Al(r, n, a));
  const s = (a) =>
    Ae(i[a], 1, 1, () => {
      i[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < i.length; a += 1) i[a].c();
      e = Nt();
    },
    l(a) {
      for (let o = 0; o < i.length; o += 1) i[o].l(a);
      e = Nt();
    },
    m(a, o) {
      for (let c = 0; c < i.length; c += 1) i[c] && i[c].m(a, o);
      We(a, e, o), (t = !0);
    },
    p(a, o) {
      if (o[0] & 106504) {
        n = Object.values(a[3]);
        let c;
        for (c = 0; c < n.length; c += 1) {
          const l = Al(a, n, c);
          i[c]
            ? (i[c].p(l, o), ce(i[c], 1))
            : ((i[c] = _l(l)), i[c].c(), ce(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (cn(), c = n.length; c < i.length; c += 1) s(c);
        ln();
      }
    },
    i(a) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) ce(i[o]);
        t = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1) Ae(i[o]);
      t = !1;
    },
    d(a) {
      Sl(i, a), a && Fe(e);
    },
  };
}
function gl(r) {
  let e = r[51].uuid,
    t,
    n,
    i = bl(r);
  return {
    c() {
      i.c(), (t = Nt());
    },
    l(s) {
      i.l(s), (t = Nt());
    },
    m(s, a) {
      i.m(s, a), We(s, t, a), (n = !0);
    },
    p(s, a) {
      a[0] & 8 && ut(e, (e = s[51].uuid))
        ? (cn(),
          Ae(i, 1, 1, vs),
          ln(),
          (i = bl(s)),
          i.c(),
          ce(i, 1),
          i.m(t.parentNode, t))
        : i.p(s, a);
    },
    i(s) {
      n || (ce(i), (n = !0));
    },
    o(s) {
      Ae(i), (n = !1);
    },
    d(s) {
      s && Fe(t), i.d(s);
    },
  };
}
function ml(r) {
  let e, t;
  return (
    (e = new Lb({
      props: { object: r[51], interactive: r[16], ignorePointer: r[15] },
    })),
    e.$on("click", r[30]),
    e.$on("contextmenu", r[31]),
    e.$on("pointerup", r[32]),
    e.$on("pointerdown", r[33]),
    e.$on("pointerenter", r[34]),
    e.$on("pointerleave", r[35]),
    e.$on("pointermove", r[36]),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p(n, i) {
        const s = {};
        i[0] & 8 && (s.object = n[51]),
          i[0] & 65536 && (s.interactive = n[16]),
          i[0] & 32768 && (s.ignorePointer = n[15]),
          e.$set(s);
      },
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function bl(r) {
  let e, t, n, i, s, a;
  (e = new Bs({ props: { dispose: r[13], object: r[51] } })),
    (n = new bu({ props: { object: r[51] } }));
  let o = (r[51].type === "Mesh" || r[51].type === "SkinnedMesh") && ml(r);
  return {
    c() {
      Re(e.$$.fragment),
        (t = st()),
        Re(n.$$.fragment),
        (i = st()),
        o && o.c(),
        (s = Nt());
    },
    l(c) {
      Le(e.$$.fragment, c),
        (t = rt(c)),
        Le(n.$$.fragment, c),
        (i = rt(c)),
        o && o.l(c),
        (s = Nt());
    },
    m(c, l) {
      Qe(e, c, l),
        We(c, t, l),
        Qe(n, c, l),
        We(c, i, l),
        o && o.m(c, l),
        We(c, s, l),
        (a = !0);
    },
    p(c, l) {
      const f = {};
      l[0] & 8192 && (f.dispose = c[13]),
        l[0] & 8 && (f.object = c[51]),
        e.$set(f);
      const h = {};
      l[0] & 8 && (h.object = c[51]),
        n.$set(h),
        c[51].type === "Mesh" || c[51].type === "SkinnedMesh"
          ? o
            ? (o.p(c, l), l[0] & 8 && ce(o, 1))
            : ((o = ml(c)), o.c(), ce(o, 1), o.m(s.parentNode, s))
          : o &&
            (cn(),
            Ae(o, 1, 1, () => {
              o = null;
            }),
            ln());
    },
    i(c) {
      a || (ce(e.$$.fragment, c), ce(n.$$.fragment, c), ce(o), (a = !0));
    },
    o(c) {
      Ae(e.$$.fragment, c), Ae(n.$$.fragment, c), Ae(o), (a = !1);
    },
    d(c) {
      Pe(e, c), c && Fe(t), Pe(n, c), c && Fe(i), o && o.d(c), c && Fe(s);
    },
  };
}
function _l(r) {
  let e,
    t,
    n = r[51] && gl(r);
  return {
    c() {
      n && n.c(), (e = Nt());
    },
    l(i) {
      n && n.l(i), (e = Nt());
    },
    m(i, s) {
      n && n.m(i, s), We(i, e, s), (t = !0);
    },
    p(i, s) {
      i[51]
        ? n
          ? (n.p(i, s), s[0] & 8 && ce(n, 1))
          : ((n = gl(i)), n.c(), ce(n, 1), n.m(e.parentNode, e))
        : n &&
          (cn(),
          Ae(n, 1, 1, () => {
            n = null;
          }),
          ln());
    },
    i(i) {
      t || (ce(n), (t = !0));
    },
    o(i) {
      Ae(n), (t = !1);
    },
    d(i) {
      n && n.d(i), i && Fe(e);
    },
  };
}
function El(r) {
  let e,
    t,
    n = Object.values(r[2]),
    i = [];
  for (let a = 0; a < n.length; a += 1) i[a] = xl(dl(r, n, a));
  const s = (a) =>
    Ae(i[a], 1, 1, () => {
      i[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < i.length; a += 1) i[a].c();
      e = Nt();
    },
    l(a) {
      for (let o = 0; o < i.length; o += 1) i[o].l(a);
      e = Nt();
    },
    m(a, o) {
      for (let c = 0; c < i.length; c += 1) i[c] && i[c].m(a, o);
      We(a, e, o), (t = !0);
    },
    p(a, o) {
      if (o[0] & 8196) {
        n = Object.values(a[2]);
        let c;
        for (c = 0; c < n.length; c += 1) {
          const l = dl(a, n, c);
          i[c]
            ? (i[c].p(l, o), ce(i[c], 1))
            : ((i[c] = xl(l)), i[c].c(), ce(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (cn(), c = n.length; c < i.length; c += 1) s(c);
        ln();
      }
    },
    i(a) {
      if (!t) {
        for (let o = 0; o < n.length; o += 1) ce(i[o]);
        t = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1) Ae(i[o]);
      t = !1;
    },
    d(a) {
      Sl(i, a), a && Fe(e);
    },
  };
}
function xl(r) {
  let e, t;
  return (
    (e = new Bs({ props: { dispose: r[13], object: r[48] } })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p(n, i) {
        const s = {};
        i[0] & 8192 && (s.dispose = n[13]),
          i[0] & 4 && (s.object = n[48]),
          e.$set(s);
      },
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function Cl(r) {
  let e, t, n;
  function i(a) {
    r[37](a);
  }
  let s = {
    object: r[0],
    position: r[4],
    scale: r[5],
    rotation: r[6],
    lookAt: r[14],
    frustumCulled: r[10],
    renderOrder: r[11],
    visible: r[12],
    dispose: r[13],
    castShadow: r[8],
    receiveShadow: r[9],
    viewportAware: r[7],
    $$slots: { default: [O_] },
    $$scope: { ctx: r },
  };
  return (
    r[1] !== void 0 && (s.inViewport = r[1]),
    (e = new wb({ props: s })),
    ka.push(() => vl(e, "inViewport", i)),
    e.$on("viewportenter", r[38]),
    e.$on("viewportleave", r[39]),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(a) {
        Le(e.$$.fragment, a);
      },
      m(a, o) {
        Qe(e, a, o), (n = !0);
      },
      p(a, o) {
        const c = {};
        o[0] & 1 && (c.object = a[0]),
          o[0] & 16 && (c.position = a[4]),
          o[0] & 32 && (c.scale = a[5]),
          o[0] & 64 && (c.rotation = a[6]),
          o[0] & 16384 && (c.lookAt = a[14]),
          o[0] & 1024 && (c.frustumCulled = a[10]),
          o[0] & 2048 && (c.renderOrder = a[11]),
          o[0] & 4096 && (c.visible = a[12]),
          o[0] & 8192 && (c.dispose = a[13]),
          o[0] & 256 && (c.castShadow = a[8]),
          o[0] & 512 && (c.receiveShadow = a[9]),
          o[0] & 128 && (c.viewportAware = a[7]),
          o[1] & 512 && (c.$$scope = { dirty: o, ctx: a }),
          !t &&
            o[0] & 2 &&
            ((t = !0), (c.inViewport = a[1]), wl(() => (t = !1))),
          e.$set(c);
      },
      i(a) {
        n || (ce(e.$$.fragment, a), (n = !0));
      },
      o(a) {
        Ae(e.$$.fragment, a), (n = !1);
      },
      d(a) {
        Pe(e, a);
      },
    }
  );
}
function O_(r) {
  let e;
  const t = r[29].default,
    n = qn(t, r, r[40], null);
  return {
    c() {
      n && n.c();
    },
    l(i) {
      n && n.l(i);
    },
    m(i, s) {
      n && n.m(i, s), (e = !0);
    },
    p(i, s) {
      n &&
        n.p &&
        (!e || s[1] & 512) &&
        Yn(n, t, i, i[40], e ? Jn(t, i[40], s, null) : Kn(i[40]), null);
    },
    i(i) {
      e || (ce(n, i), (e = !0));
    },
    o(i) {
      Ae(n, i), (e = !1);
    },
    d(i) {
      n && n.d(i);
    },
  };
}
function z_(r) {
  let e,
    t,
    n,
    i,
    s = r[3] && pl(r),
    a = r[2] && El(r),
    o = r[0] && Cl(r);
  return {
    c() {
      s && s.c(), (e = st()), a && a.c(), (t = st()), o && o.c(), (n = Nt());
    },
    l(c) {
      s && s.l(c),
        (e = rt(c)),
        a && a.l(c),
        (t = rt(c)),
        o && o.l(c),
        (n = Nt());
    },
    m(c, l) {
      s && s.m(c, l),
        We(c, e, l),
        a && a.m(c, l),
        We(c, t, l),
        o && o.m(c, l),
        We(c, n, l),
        (i = !0);
    },
    p(c, l) {
      c[3]
        ? s
          ? (s.p(c, l), l[0] & 8 && ce(s, 1))
          : ((s = pl(c)), s.c(), ce(s, 1), s.m(e.parentNode, e))
        : s &&
          (cn(),
          Ae(s, 1, 1, () => {
            s = null;
          }),
          ln()),
        c[2]
          ? a
            ? (a.p(c, l), l[0] & 4 && ce(a, 1))
            : ((a = El(c)), a.c(), ce(a, 1), a.m(t.parentNode, t))
          : a &&
            (cn(),
            Ae(a, 1, 1, () => {
              a = null;
            }),
            ln()),
        c[0]
          ? o
            ? (o.p(c, l), l[0] & 1 && ce(o, 1))
            : ((o = Cl(c)), o.c(), ce(o, 1), o.m(n.parentNode, n))
          : o &&
            (cn(),
            Ae(o, 1, 1, () => {
              o = null;
            }),
            ln());
    },
    i(c) {
      i || (ce(s), ce(a), ce(o), (i = !0));
    },
    o(c) {
      Ae(s), Ae(a), Ae(o), (i = !1);
    },
    d(c) {
      s && s.d(c), c && Fe(e), a && a.d(c), c && Fe(t), o && o.d(c), c && Fe(n);
    },
  };
}
function H_(r, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { position: s = void 0 } = e,
    { scale: a = void 0 } = e,
    { rotation: o = void 0 } = e,
    { viewportAware: c = !1 } = e,
    { inViewport: l = !1 } = e,
    { castShadow: f = void 0 } = e,
    { receiveShadow: h = void 0 } = e,
    { frustumCulled: u = void 0 } = e,
    { renderOrder: p = void 0 } = e,
    { visible: m = void 0 } = e,
    { dispose: d = void 0 } = e,
    { lookAt: A = void 0 } = e,
    { url: g } = e,
    { dracoDecoderPath: _ = void 0 } = e,
    { useDraco: b = !1 } = e,
    { useMeshopt: E = !1 } = e,
    { ktxTranscoderPath: C = void 0 } = e,
    { ignorePointer: v = !1 } = e,
    { interactive: T = !1 } = e;
  const { invalidate: x } = qt(),
    w = ji();
  let { gltf: B = void 0 } = e,
    { scene: G = void 0 } = e,
    { animations: H = void 0 } = e,
    { asset: P = void 0 } = e,
    { cameras: Q = void 0 } = e,
    { scenes: z = void 0 } = e,
    { userData: Y = void 0 } = e,
    { parser: K = void 0 } = e,
    { materials: O = void 0 } = e,
    { nodes: ee = void 0 } = e;
  const Z = rr(sl, () => new sl(ms));
  b
    ? b === !0
      ? W("https://www.gstatic.com/draco/v1/decoders/")
      : typeof b == "string" && W(b)
    : _ &&
      (console.warn("⚠️ dracoDecoderPath is deprecated, use useDraco instead"),
      W(_));
  function W(X) {
    const et = rr(nl, () => new nl(ms).setDecoderPath(X));
    Z.setDRACOLoader(et);
  }
  E && Z.setMeshoptDecoder(M_);
  const { renderer: U } = qt();
  if (U && C) {
    const X = rr(on, () => new on(ms).setTranscoderPath(C).detectSupport(U));
    Z.setKTX2Loader(X);
  }
  const $ = (X) => {
      B && w("unload"),
        t(17, (B = X)),
        t(0, (G = B.scene)),
        t(18, (H = B.animations)),
        t(19, (P = B.asset)),
        t(20, (Q = B.cameras)),
        t(21, (z = B.scenes)),
        t(22, (Y = B.userData)),
        t(23, (K = B.parser));
      const { materials: et, nodes: It } = B_(X.scene);
      t(2, (O = et)), t(3, (ee = It)), x("GLTF: model loaded"), w("load", B);
    },
    ie = (X) => {
      console.error(`Error loading GLTF: ${X.message}`),
        t(17, (B = void 0)),
        t(0, (G = void 0)),
        t(18, (H = void 0)),
        t(19, (P = void 0)),
        t(20, (Q = void 0)),
        t(21, (z = void 0)),
        t(22, (Y = void 0)),
        t(23, (K = void 0)),
        t(3, (ee = void 0)),
        t(2, (O = void 0)),
        w("error", X.message);
    };
  function se(X) {
    rn.call(this, r, X);
  }
  function D(X) {
    rn.call(this, r, X);
  }
  function ae(X) {
    rn.call(this, r, X);
  }
  function me(X) {
    rn.call(this, r, X);
  }
  function ge(X) {
    rn.call(this, r, X);
  }
  function ue(X) {
    rn.call(this, r, X);
  }
  function je(X) {
    rn.call(this, r, X);
  }
  function ve(X) {
    (l = X), t(1, l);
  }
  function Ce(X) {
    rn.call(this, r, X);
  }
  function at(X) {
    rn.call(this, r, X);
  }
  return (
    (r.$$set = (X) => {
      "position" in X && t(4, (s = X.position)),
        "scale" in X && t(5, (a = X.scale)),
        "rotation" in X && t(6, (o = X.rotation)),
        "viewportAware" in X && t(7, (c = X.viewportAware)),
        "inViewport" in X && t(1, (l = X.inViewport)),
        "castShadow" in X && t(8, (f = X.castShadow)),
        "receiveShadow" in X && t(9, (h = X.receiveShadow)),
        "frustumCulled" in X && t(10, (u = X.frustumCulled)),
        "renderOrder" in X && t(11, (p = X.renderOrder)),
        "visible" in X && t(12, (m = X.visible)),
        "dispose" in X && t(13, (d = X.dispose)),
        "lookAt" in X && t(14, (A = X.lookAt)),
        "url" in X && t(24, (g = X.url)),
        "dracoDecoderPath" in X && t(25, (_ = X.dracoDecoderPath)),
        "useDraco" in X && t(26, (b = X.useDraco)),
        "useMeshopt" in X && t(27, (E = X.useMeshopt)),
        "ktxTranscoderPath" in X && t(28, (C = X.ktxTranscoderPath)),
        "ignorePointer" in X && t(15, (v = X.ignorePointer)),
        "interactive" in X && t(16, (T = X.interactive)),
        "gltf" in X && t(17, (B = X.gltf)),
        "scene" in X && t(0, (G = X.scene)),
        "animations" in X && t(18, (H = X.animations)),
        "asset" in X && t(19, (P = X.asset)),
        "cameras" in X && t(20, (Q = X.cameras)),
        "scenes" in X && t(21, (z = X.scenes)),
        "userData" in X && t(22, (Y = X.userData)),
        "parser" in X && t(23, (K = X.parser)),
        "materials" in X && t(2, (O = X.materials)),
        "nodes" in X && t(3, (ee = X.nodes)),
        "$$scope" in X && t(40, (i = X.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty[0] & 16777216 && Z.load(g, $, void 0, ie),
        r.$$.dirty[0] & 3841 &&
          G &&
          G.traverse((X) => {
            f !== void 0 && (X.castShadow = f),
              h !== void 0 && (X.receiveShadow = h),
              u !== void 0 && (X.frustumCulled = u),
              p !== void 0 && (X.renderOrder = p);
          });
    }),
    [
      G,
      l,
      O,
      ee,
      s,
      a,
      o,
      c,
      f,
      h,
      u,
      p,
      m,
      d,
      A,
      v,
      T,
      B,
      H,
      P,
      Q,
      z,
      Y,
      K,
      g,
      _,
      b,
      E,
      C,
      n,
      se,
      D,
      ae,
      me,
      ge,
      ue,
      je,
      ve,
      Ce,
      at,
      i,
    ]
  );
}
class V_ extends pt {
  constructor(e) {
    super(),
      gt(
        this,
        e,
        H_,
        z_,
        ut,
        {
          position: 4,
          scale: 5,
          rotation: 6,
          viewportAware: 7,
          inViewport: 1,
          castShadow: 8,
          receiveShadow: 9,
          frustumCulled: 10,
          renderOrder: 11,
          visible: 12,
          dispose: 13,
          lookAt: 14,
          url: 24,
          dracoDecoderPath: 25,
          useDraco: 26,
          useMeshopt: 27,
          ktxTranscoderPath: 28,
          ignorePointer: 15,
          interactive: 16,
          gltf: 17,
          scene: 0,
          animations: 18,
          asset: 19,
          cameras: 20,
          scenes: 21,
          userData: 22,
          parser: 23,
          materials: 2,
          nodes: 3,
        },
        null,
        [-1, -1]
      );
  }
}
function Il(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function Pa(r, e, t, n) {
  if (typeof t == "number" || Il(t)) {
    const i = n - t,
      s = (t - e) / (r.dt || 1 / 60),
      a = r.opts.stiffness * i,
      o = r.opts.damping * s,
      c = (a - o) * r.inv_mass,
      l = (s + c) * r.dt;
    return Math.abs(l) < r.opts.precision && Math.abs(i) < r.opts.precision
      ? n
      : ((r.settled = !1), Il(t) ? new Date(t.getTime() + l) : t + l);
  } else {
    if (Array.isArray(t)) return t.map((i, s) => Pa(r, e[s], t[s], n[s]));
    if (typeof t == "object") {
      const i = {};
      for (const s in t) i[s] = Pa(r, e[s], t[s], n[s]);
      return i;
    } else throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function W_(r, e = {}) {
  const t = xt(r),
    { stiffness: n = 0.15, damping: i = 0.8, precision: s = 0.01 } = e;
  let a,
    o,
    c,
    l = r,
    f = r,
    h = 1,
    u = 0,
    p = !1;
  function m(A, g = {}) {
    f = A;
    const _ = (c = {});
    return r == null || g.hard || (d.stiffness >= 1 && d.damping >= 1)
      ? ((p = !0), (a = uo()), (l = A), t.set((r = f)), Promise.resolve())
      : (g.soft && ((u = 1 / ((g.soft === !0 ? 0.5 : +g.soft) * 60)), (h = 0)),
        o ||
          ((a = uo()),
          (p = !1),
          (o = ju((b) => {
            if (p) return (p = !1), (o = null), !1;
            h = Math.min(h + u, 1);
            const E = {
                inv_mass: h,
                opts: d,
                settled: !0,
                dt: ((b - a) * 60) / 1e3,
              },
              C = Pa(E, l, r, f);
            return (
              (a = b),
              (l = r),
              t.set((r = C)),
              E.settled && (o = null),
              !E.settled
            );
          }))),
        new Promise((b) => {
          o.promise.then(() => {
            _ === c && b();
          });
        }));
  }
  const d = {
    set: m,
    update: (A, g) => m(A(f, r), g),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: s,
  };
  return d;
}
const ku = xt(new R(0, 0, 0));
function j_(r) {
  let e, t;
  return (
    (e = new V_({
      props: {
        url: "/models/bust.gltf",
        scale: 4,
        position: { x: -0.1, y: -1 },
        rotation: { x: -0, y: 3.14, z: 0 },
      },
    })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p: vs,
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function q_(r) {
  let e, t;
  return (
    (e = new An({
      props: {
        type: Hn,
        rotation: [r[0].x, r[0].y, r[0].z],
        position: [0, 1, 0],
        $$slots: { default: [j_] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const s = {};
        i & 1 && (s.rotation = [n[0].x, n[0].y, n[0].z]),
          i & 16 && (s.$$scope = { dirty: i, ctx: n }),
          e.$set(s);
      },
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function Y_(r, e, t) {
  let n, i;
  ft(r, ku, (o) => t(3, (i = o)));
  let s = new R(0, 0, 0);
  const a = W_([0, 0, 0]);
  return (
    ft(r, a, (o) => t(2, (n = o))),
    (r.$$.update = () => {
      r.$$.dirty & 8 && a.set([0 - i.x / 2, 0 - i.y / 2, 0]),
        r.$$.dirty & 5 && (s.set(n[0], n[1], n[2]), t(0, s), t(2, n));
    }),
    [s, a, n, i]
  );
}
class K_ extends pt {
  constructor(e) {
    super(), gt(this, e, Y_, q_, ut, {});
  }
}
const J_ = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    nIntensity: { value: 0.5 },
    sIntensity: { value: 0.05 },
    sCount: { value: 4096 },
    grayscale: { value: 1 },
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`,
};
class X_ extends Ms {
  constructor(e, t, n, i) {
    super();
    const s = J_;
    (this.uniforms = Oa.clone(s.uniforms)),
      (this.material = new En({
        uniforms: this.uniforms,
        vertexShader: s.vertexShader,
        fragmentShader: s.fragmentShader,
      })),
      i !== void 0 && (this.uniforms.grayscale.value = i),
      e !== void 0 && (this.uniforms.nIntensity.value = e),
      t !== void 0 && (this.uniforms.sIntensity.value = t),
      n !== void 0 && (this.uniforms.sCount.value = n),
      (this.fsQuad = new du(this.material));
  }
  render(e, t, n, i) {
    (this.uniforms.tDiffuse.value = n.texture),
      (this.uniforms.time.value += i),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(t),
          this.clear && e.clear(),
          this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
function Z_(r) {
  let e, t;
  return (
    (e = new xu({ props: { target: { y: 1.1 } } })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p: vs,
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function $_(r) {
  let e, t, n, i, s, a, o, c, l, f, h, u, p, m;
  return (
    (e = new Db({ props: { pass: new X_(200, 1, 100, 0) } })),
    (n = new An({
      props: {
        type: yt,
        makeDefault: !0,
        position: [0, 1, 20],
        fov: 5,
        $$slots: { default: [Z_] },
        $$scope: { ctx: r },
      },
    })),
    (s = new An({
      props: { type: ki, position: [7, 20, 10], color: 4095, intensity: 0.03 },
    })),
    (o = new An({
      props: { type: ki, position: [-7, 1, 10], color: 4095, intensity: 0.001 },
    })),
    (l = new An({
      props: { type: ki, position: [7, 1, -10], color: 4095, intensity: 0.01 },
    })),
    (h = new An({ props: { type: hu, intensity: 1 } })),
    (p = new K_({})),
    {
      c() {
        Re(e.$$.fragment),
          (t = st()),
          Re(n.$$.fragment),
          (i = st()),
          Re(s.$$.fragment),
          (a = st()),
          Re(o.$$.fragment),
          (c = st()),
          Re(l.$$.fragment),
          (f = st()),
          Re(h.$$.fragment),
          (u = st()),
          Re(p.$$.fragment);
      },
      l(d) {
        Le(e.$$.fragment, d),
          (t = rt(d)),
          Le(n.$$.fragment, d),
          (i = rt(d)),
          Le(s.$$.fragment, d),
          (a = rt(d)),
          Le(o.$$.fragment, d),
          (c = rt(d)),
          Le(l.$$.fragment, d),
          (f = rt(d)),
          Le(h.$$.fragment, d),
          (u = rt(d)),
          Le(p.$$.fragment, d);
      },
      m(d, A) {
        Qe(e, d, A),
          We(d, t, A),
          Qe(n, d, A),
          We(d, i, A),
          Qe(s, d, A),
          We(d, a, A),
          Qe(o, d, A),
          We(d, c, A),
          Qe(l, d, A),
          We(d, f, A),
          Qe(h, d, A),
          We(d, u, A),
          Qe(p, d, A),
          (m = !0);
      },
      p(d, A) {
        const g = {};
        A & 1 && (g.$$scope = { dirty: A, ctx: d }), n.$set(g);
      },
      i(d) {
        m ||
          (ce(e.$$.fragment, d),
          ce(n.$$.fragment, d),
          ce(s.$$.fragment, d),
          ce(o.$$.fragment, d),
          ce(l.$$.fragment, d),
          ce(h.$$.fragment, d),
          ce(p.$$.fragment, d),
          (m = !0));
      },
      o(d) {
        Ae(e.$$.fragment, d),
          Ae(n.$$.fragment, d),
          Ae(s.$$.fragment, d),
          Ae(o.$$.fragment, d),
          Ae(l.$$.fragment, d),
          Ae(h.$$.fragment, d),
          Ae(p.$$.fragment, d),
          (m = !1);
      },
      d(d) {
        Pe(e, d),
          d && Fe(t),
          Pe(n, d),
          d && Fe(i),
          Pe(s, d),
          d && Fe(a),
          Pe(o, d),
          d && Fe(c),
          Pe(l, d),
          d && Fe(f),
          Pe(h, d),
          d && Fe(u),
          Pe(p, d);
      },
    }
  );
}
function e0(r) {
  let e, t, n;
  return (
    (t = new mu({
      props: { $$slots: { default: [$_] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        (e = cr("div")), Re(t.$$.fragment), this.h();
      },
      l(i) {
        e = lr(i, "DIV", { class: !0 });
        var s = ur(e);
        Le(t.$$.fragment, s), s.forEach(Fe), this.h();
      },
      h() {
        hr(e, "class", "absolute w-full h-full");
      },
      m(i, s) {
        We(i, e, s), Qe(t, e, null), (n = !0);
      },
      p(i, [s]) {
        const a = {};
        s & 1 && (a.$$scope = { dirty: s, ctx: i }), t.$set(a);
      },
      i(i) {
        n || (ce(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        Ae(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && Fe(e), Pe(t);
      },
    }
  );
}
class t0 extends pt {
  constructor(e) {
    super(), gt(this, e, null, e0, ut, {});
  }
}
function n0(r, e, t) {
  let n;
  const { pointer: i } = qt();
  return (
    ft(r, i, (s) => t(1, (n = s))),
    (r.$$.update = () => {
      r.$$.dirty & 2 && ku.set(new R(0 - n.y, 0 + n.x, 0));
    }),
    [i, n]
  );
}
class i0 extends pt {
  constructor(e) {
    super(), gt(this, e, n0, null, ut, {});
  }
}
function s0(r) {
  let e, t;
  return (
    (e = new xu({ props: { target: { y: 1.1 } } })),
    {
      c() {
        Re(e.$$.fragment);
      },
      l(n) {
        Le(e.$$.fragment, n);
      },
      m(n, i) {
        Qe(e, n, i), (t = !0);
      },
      p: vs,
      i(n) {
        t || (ce(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Ae(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        Pe(e, n);
      },
    }
  );
}
function r0(r) {
  let e, t, n, i, s, a, o, c, l, f;
  return (
    (e = new i0({})),
    (n = new An({
      props: {
        type: yt,
        makeDefault: !0,
        position: [0, 1, 2],
        fov: 50,
        $$slots: { default: [s0] },
        $$scope: { ctx: r },
      },
    })),
    (s = new An({
      props: { type: ki, castShadow: !0, position: [3, 10, 10] },
    })),
    (o = new An({
      props: { type: ki, position: [-3, 10, -10], intensity: 0.2 },
    })),
    (l = new An({ props: { type: hu, intensity: 0.2 } })),
    {
      c() {
        Re(e.$$.fragment),
          (t = st()),
          Re(n.$$.fragment),
          (i = st()),
          Re(s.$$.fragment),
          (a = st()),
          Re(o.$$.fragment),
          (c = st()),
          Re(l.$$.fragment);
      },
      l(h) {
        Le(e.$$.fragment, h),
          (t = rt(h)),
          Le(n.$$.fragment, h),
          (i = rt(h)),
          Le(s.$$.fragment, h),
          (a = rt(h)),
          Le(o.$$.fragment, h),
          (c = rt(h)),
          Le(l.$$.fragment, h);
      },
      m(h, u) {
        Qe(e, h, u),
          We(h, t, u),
          Qe(n, h, u),
          We(h, i, u),
          Qe(s, h, u),
          We(h, a, u),
          Qe(o, h, u),
          We(h, c, u),
          Qe(l, h, u),
          (f = !0);
      },
      p(h, u) {
        const p = {};
        u & 1 && (p.$$scope = { dirty: u, ctx: h }), n.$set(p);
      },
      i(h) {
        f ||
          (ce(e.$$.fragment, h),
          ce(n.$$.fragment, h),
          ce(s.$$.fragment, h),
          ce(o.$$.fragment, h),
          ce(l.$$.fragment, h),
          (f = !0));
      },
      o(h) {
        Ae(e.$$.fragment, h),
          Ae(n.$$.fragment, h),
          Ae(s.$$.fragment, h),
          Ae(o.$$.fragment, h),
          Ae(l.$$.fragment, h),
          (f = !1);
      },
      d(h) {
        Pe(e, h),
          h && Fe(t),
          Pe(n, h),
          h && Fe(i),
          Pe(s, h),
          h && Fe(a),
          Pe(o, h),
          h && Fe(c),
          Pe(l, h);
      },
    }
  );
}
function a0(r) {
  let e, t, n;
  return (
    (t = new mu({
      props: { $$slots: { default: [r0] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        (e = cr("div")), Re(t.$$.fragment), this.h();
      },
      l(i) {
        e = lr(i, "DIV", { class: !0 });
        var s = ur(e);
        Le(t.$$.fragment, s), s.forEach(Fe), this.h();
      },
      h() {
        hr(e, "class", "absolute w-full h-full");
      },
      m(i, s) {
        We(i, e, s), Qe(t, e, null), (n = !0);
      },
      p(i, [s]) {
        const a = {};
        s & 1 && (a.$$scope = { dirty: s, ctx: i }), t.$set(a);
      },
      i(i) {
        n || (ce(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        Ae(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && Fe(e), Pe(t);
      },
    }
  );
}
class o0 extends pt {
  constructor(e) {
    super(), gt(this, e, null, a0, ut, {});
  }
}
function c0(r) {
  let e, t, n, i, s, a, o;
  return (
    (i = new t0({})),
    (a = new o0({})),
    {
      c() {
        (e = cr("h1")),
          (t = qu("shot.codes")),
          (n = st()),
          Re(i.$$.fragment),
          (s = st()),
          Re(a.$$.fragment),
          this.h();
      },
      l(c) {
        e = lr(c, "H1", { class: !0 });
        var l = ur(e);
        (t = Yu(l, "shot.codes")),
          l.forEach(Fe),
          (n = rt(c)),
          Le(i.$$.fragment, c),
          (s = rt(c)),
          Le(a.$$.fragment, c),
          this.h();
      },
      h() {
        hr(e, "class", "m-4 text-white text-[20px] font-mono pointer-none");
      },
      m(c, l) {
        We(c, e, l),
          Ku(e, t),
          We(c, n, l),
          Qe(i, c, l),
          We(c, s, l),
          Qe(a, c, l),
          (o = !0);
      },
      p: vs,
      i(c) {
        o || (ce(i.$$.fragment, c), ce(a.$$.fragment, c), (o = !0));
      },
      o(c) {
        Ae(i.$$.fragment, c), Ae(a.$$.fragment, c), (o = !1);
      },
      d(c) {
        c && Fe(e), c && Fe(n), Pe(i, c), c && Fe(s), Pe(a, c);
      },
    }
  );
}
class A0 extends pt {
  constructor(e) {
    super(), gt(this, e, null, c0, ut, {});
  }
}
export { A0 as default };
