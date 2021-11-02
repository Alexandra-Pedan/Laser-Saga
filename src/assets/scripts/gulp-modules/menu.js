!(function () {
  function t(t) {
    if (void 0 === t) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); }
    return t;
  }
  function e(t, e) {
    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
  }
  /*!
   * GSAP 3.7.0
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ let r;
  let i;
  let n;
  let s;
  let a;
  let o;
  let u;
  let h;
  let l;
  let f;
  let c;
  let p;
  let _;
  let d;
  let m;
  let g;
  let v;
  let y;
  let T;
  let x;
  let w;
  let b;
  let M;
  let O;
  let D;
  let k;
  let A;
  let C;
  const S = {
    autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' },
  };
  const P = { duration: 0.5, overwrite: !1, delay: 0 };
  const E = 1e8;
  const z = 1e-8;
  const F = 2 * Math.PI;
  const R = F / 4;
  let I = 0;
  const B = Math.sqrt;
  const L = Math.cos;
  const q = Math.sin;
  const Y = function (t) {
    return typeof t === 'string';
  };
  const U = function (t) {
    return typeof t === 'function';
  };
  const X = function (t) {
    return typeof t === 'number';
  };
  const N = function (t) {
    return void 0 === t;
  };
  const V = function (t) {
    return typeof t === 'object';
  };
  const j = function (t) {
    return !1 !== t;
  };
  const W = function () {
    return typeof window !== 'undefined';
  };
  const G = function (t) {
    return U(t) || Y(t);
  };
  const Q = (typeof ArrayBuffer === 'function' && ArrayBuffer.isView) || function () {};
  const H = Array.isArray;
  const Z = /(?:-?\.?\d|\.)+/gi;
  const $ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  const J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  const K = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  const tt = /[+-]=-?[.\d]+/;
  const et = /[^,'"\[\]\s]+/gi;
  const rt = /[\d.+\-=]+(?:e[-+]\d*)*/i;
  const it = {};
  let nt = {};
  const st = function (t) {
    return (nt = St(t, it)) && mr;
  };
  const at = function (t, e) {
    return console.warn(
      'Invalid property',
      t,
      'set to',
      e,
      'Missing plugin? gsap.registerPlugin()',
    );
  };
  const ot = function (t, e) {
    return !e && console.warn(t);
  };
  const ut = function (t, e) {
    return (t && (it[t] = e) && nt && (nt[t] = e)) || it;
  };
  const ht = function () {
    return 0;
  };
  const lt = {};
  const ft = [];
  let ct = {};
  const pt = {};
  const _t = {};
  let dt = 30;
  const mt = [];
  let gt = '';
  const vt = function (t) {
    let e;
    let r;
    const i = t[0];
    if ((V(i) || U(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = mt.length; r-- && !mt[r].targetTest(i););
      e = mt[r];
    }
    for (r = t.length; r--;) { (t[r] && (t[r]._gsap || (t[r]._gsap = new Ue(t[r], e)))) || t.splice(r, 1); }
    return t;
  };
  const yt = function (t) {
    return t._gsap || vt(ae(t))[0]._gsap;
  };
  const Tt = function (t, e, r) {
    return (r = t[e]) && U(r) ? t[e]() : (N(r) && t.getAttribute && t.getAttribute(e)) || r;
  };
  const xt = function (t, e) {
    return (t = t.split(',')).forEach(e) || t;
  };
  const wt = function (t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  };
  const bt = function (t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
    return i < r;
  };
  const Mt = function () {
    let t;
    let e;
    const r = ft.length;
    const i = ft.slice(0);
    for (ct = {}, ft.length = 0, t = 0; t < r; t++) { (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0); }
  };
  const Ot = function (t, e, r, i) {
    ft.length && Mt(), t.render(e, r, i), ft.length && Mt();
  };
  const Dt = function (t) {
    const e = parseFloat(t);
    return (e || e === 0) && (`${t}`).match(et).length < 2 ? e : Y(t) ? t.trim() : t;
  };
  const kt = function (t) {
    return t;
  };
  const At = function (t, e) {
    for (const r in e) r in t || (t[r] = e[r]);
    return t;
  };
  const Ct = function (t, e) {
    for (const r in e) r in t || r === 'duration' || r === 'ease' || (t[r] = e[r]);
  };
  var St = function (t, e) {
    for (const r in e) t[r] = e[r];
    return t;
  };
  const Pt = function t(e, r) {
    for (const i in r) {
      i !== '__proto__'
          && i !== 'constructor'
          && i !== 'prototype'
          && (e[i] = V(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
    }
    return e;
  };
  const Et = function (t, e) {
    let r;
    const i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  };
  const zt = function (t) {
    let e = t.parent || i;
    const r = t.keyframes ? Ct : At;
    if (j(t.inherit)) for (; e;) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  };
  const Ft = function (t, e, r, i) {
    void 0 === r && (r = '_first'), void 0 === i && (i = '_last');
    const n = e._prev;
    const s = e._next;
    n ? (n._next = s) : t[r] === e && (t[r] = s),
    s ? (s._prev = n) : t[i] === e && (t[i] = n),
    (e._next = e._prev = e.parent = null);
  };
  const Rt = function (t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
  };
  const It = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) { for (let r = t; r;) (r._dirty = 1), (r = r.parent); }
    return t;
  };
  const Bt = function (t) {
    for (let e = t.parent; e && e.parent;) (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  };
  const Lt = function t(e) {
    return !e || (e._ts && t(e.parent));
  };
  const qt = function (t) {
    return t._repeat ? Yt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  };
  var Yt = function (t, e) {
    const r = Math.floor((t /= e));
    return t && r === t ? r - 1 : r;
  };
  const Ut = function (t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  };
  const Xt = function (t) {
    return (t._end = wt(t._start + (t._tDur / Math.abs(t._ts || t._rts || z) || 0)));
  };
  const Nt = function (t, e) {
    const r = t._dp;
    return (
      r
          && r.smoothChildTiming
          && t._ts
          && ((t._start = wt(
            r._time
              - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
          )),
          Xt(t),
          r._dirty || It(r, t)),
      t
    );
  };
  const Vt = function (t, e) {
    let r;
    if (
      ((e._time || (e._initted && !e._dur))
          && ((r = Ut(t.rawTime(), e)),
          (!e._dur || re(0, e.totalDuration(), r) - e._tTime > z) && e.render(r, !0)),
      It(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration()) { for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp); }
      t._zTime = -1e-8;
    }
  };
  const jt = function (t, e, r, n) {
    return (
      e.parent && Rt(e),
      (e._start = wt((X(r) ? r : r || t !== i ? Kt(t, r, e) : t._time) + e._delay)),
      (e._end = wt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
      (function (t, e, r, i, n) {
        void 0 === r && (r = '_first'), void 0 === i && (i = '_last');
        let s;
        let a = t[i];
        if (n) for (s = e[n]; a && a[n] > s;) a = a._prev;
        a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[r]), (t[r] = e)),
        e._next ? (e._next._prev = e) : (t[i] = e),
        (e._prev = a),
        (e.parent = e._dp = t);
      }(t, e, '_first', '_last', t._sort ? '_start' : 0)),
      Ht(e) || (t._recent = e),
      n || Vt(t, e),
      t
    );
  };
  const Wt = function (t, e) {
    return (it.ScrollTrigger || at('scrollTrigger', e)) && it.ScrollTrigger.create(e, t);
  };
  const Gt = function (t, e, r, i) {
    return (
      Qe(t, e),
      t._initted
        ? !r
            && t._pt
            && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy))
            && u !== Ae.frame
          ? (ft.push(t), (t._lazy = [e, i]), 1)
          : void 0
        : 1
    );
  };
  const Qt = function t(e) {
    const r = e.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
  };
  var Ht = function (t) {
    const e = t.data;
    return e === 'isFromStart' || e === 'isStart';
  };
  const Zt = function (t, e, r, i) {
    const n = t._repeat;
    const s = wt(e) || 0;
    const a = t._tTime / t._tDur;
    return (
      a && !i && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : wt(s * (n + 1) + t._rDelay * n)) : s),
      a && !i ? Nt(t, (t._tTime = t._tDur * a)) : t.parent && Xt(t),
      r || It(t.parent, t),
      t
    );
  };
  const $t = function (t) {
    return t instanceof Ne ? It(t) : Zt(t, t._dur);
  };
  const Jt = { _start: 0, endTime: ht, totalDuration: ht };
  var Kt = function t(e, r, i) {
    let n;
    let s;
    let a;
    const o = e.labels;
    const u = e._recent || Jt;
    const h = e.duration() >= E ? u.endTime(!1) : e._dur;
    return Y(r) && (isNaN(r) || r in o)
      ? ((s = r.charAt(0)),
      (a = r.substr(-1) === '%'),
      (n = r.indexOf('=')),
      s === '<' || s === '>'
        ? (n >= 0 && (r = r.replace(/=/, '')),
        (s === '<' ? u._start : u.endTime(u._repeat >= 0))
                + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1))
        : n < 0
          ? (r in o || (o[r] = h), o[r])
          : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
          a && i && (s = (s / 100) * (H(i) ? i[0] : i).totalDuration()),
          n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s))
      : r == null
        ? h
        : +r;
  };
  const te = function (t, e, r) {
    let i;
    let n;
    const s = X(e[1]);
    const a = (s ? 2 : 1) + (t < 2 ? 0 : 1);
    const o = e[a];
    if ((s && (o.duration = e[1]), (o.parent = r), t)) {
      for (i = o, n = r; n && !('immediateRender' in i);) { (i = n.vars.defaults || {}), (n = j(n.vars.inherit) && n.parent); }
      (o.immediateRender = j(i.immediateRender)),
      t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
    }
    return new Je(e[0], o, e[a + 1]);
  };
  const ee = function (t, e) {
    return t || t === 0 ? e(t) : e;
  };
  var re = function (t, e, r) {
    return r < t ? t : r > e ? e : r;
  };
  const ie = function (t) {
    if (typeof t !== 'string') return '';
    const e = rt.exec(t);
    return e ? t.substr(e.index + e[0].length) : '';
  };
  const ne = [].slice;
  const se = function (t, e) {
    return (
      t
        && V(t)
        && 'length' in t
        && ((!e && !t.length) || (t.length - 1 in t && V(t[0])))
        && !t.nodeType
        && t !== n
    );
  };
  var ae = function (t, e, r) {
    return !Y(t) || r || (!s && Ce())
      ? H(t)
        ? (function (t, e, r) {
          return (
            void 0 === r && (r = []),
            t.forEach((t) => {
              let i;
              return (Y(t) && !e) || se(t, 1) ? (i = r).push.apply(i, ae(t)) : r.push(t);
            }) || r
          );
        }(t, r))
        : se(t)
          ? ne.call(t, 0)
          : t
            ? [t]
            : []
      : ne.call((e || a).querySelectorAll(t), 0);
  };
  const oe = function (t) {
    return t.sort(() => 0.5 - Math.random());
  };
  const ue = function (t) {
    if (U(t)) return t;
    const e = V(t) ? t : { each: t };
    let r = Ie(e.ease);
    const i = e.from || 0;
    const n = parseFloat(e.base) || 0;
    const s = {};
    const a = i > 0 && i < 1;
    const o = isNaN(i) || a;
    const u = e.axis;
    let h = i;
    let l = i;
    return (
      Y(i)
        ? (h = l = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !a && o && ((h = i[0]), (l = i[1])),
      function (t, a, f) {
        let c;
        let p;
        let _;
        let d;
        let m;
        let g;
        let v;
        let y;
        let T;
        let x = (f || e).length;
        let w = s[x];
        if (!w) {
          if (!(T = e.grid === 'auto' ? 0 : (e.grid || [1, E])[1])) {
            for (v = -1e8; v < (v = f[T++].getBoundingClientRect().left) && T < x;);
            T--;
          }
          for (
            w = s[x] = [],
            c = o ? Math.min(T, x) * h - 0.5 : i % T,
            p = o ? (x * l) / T - 0.5 : (i / T) | 0,
            v = 0,
            y = E,
            g = 0;
            g < x;
            g++
          ) {
            (_ = (g % T) - c),
            (d = p - ((g / T) | 0)),
            (w[g] = m = u ? Math.abs(u === 'y' ? d : _) : B(_ * _ + d * d)),
            m > v && (v = m),
            m < y && (y = m);
          }
          i === 'random' && oe(w),
          (w.max = v - y),
          (w.min = y),
          (w.v = x = (parseFloat(e.amount)
                  || parseFloat(e.each)
                    * (T > x ? x - 1 : u ? (u === 'y' ? x / T : T) : Math.max(T, x / T))
                  || 0) * (i === 'edges' ? -1 : 1)),
          (w.b = x < 0 ? n - x : n),
          (w.u = ie(e.amount || e.each) || 0),
          (r = r && x < 0 ? Fe(r) : r);
        }
        return (x = (w[t] - w.min) / w.max || 0), wt(w.b + (r ? r(x) : x) * w.v) + w.u;
      }
    );
  };
  const he = function (t) {
    const e = t < 1 ? Math.pow(10, (`${t}`).length - 2) : 1;
    return function (r) {
      const i = Math.round(parseFloat(r) / t) * t * e;
      return (i - (i % 1)) / e + (X(r) ? 0 : ie(r));
    };
  };
  const le = function (t, e) {
    let r;
    let i;
    let n = H(t);
    return (
      !n
          && V(t)
          && ((r = n = t.radius || E),
          t.values ? ((t = ae(t.values)), (i = !X(t[0])) && (r *= r)) : (t = he(t.increment))),
      ee(
        e,
        n
          ? U(t)
            ? e => ((i = t(e)), Math.abs(i - e) <= r ? i : e)
            : (e) => {
              for (
                var n,
                  s,
                  a = parseFloat(i ? e.x : e),
                  o = parseFloat(i ? e.y : 0),
                  u = E,
                  h = 0,
                  l = t.length;
                l--;

              ) {
                (n = i ? (n = t[l].x - a) * n + (s = t[l].y - o) * s : Math.abs(t[l] - a))
                      < u && ((u = n), (h = l));
              }
              return (h = !r || u <= r ? t[h] : e), i || h === e || X(e) ? h : h + ie(e);
            }
          : he(t),
      )
    );
  };
  const fe = function (t, e, r, i) {
    return ee(H(t) ? !e : !0 === r ? !!(r = 0) : !i, () => (H(t)
      ? t[~~(Math.random() * t.length)]
      : (r = r || 1e-5)
              && (i = r < 1 ? Math.pow(10, (`${r}`).length - 2) : 1)
              && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * i)
                / i));
  };
  const ce = function (t, e, r) {
    return ee(r, r => t[~~e(r)]);
  };
  const pe = function (t) {
    for (var e, r, i, n, s = 0, a = ''; ~(e = t.indexOf('random(', s));) {
      (i = t.indexOf(')', e)),
      (n = t.charAt(e + 7) === '['),
      (r = t.substr(e + 7, i - e - 7).match(n ? et : Z)),
      (a += t.substr(s, e - s) + fe(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
      (s = i + 1);
    }
    return a + t.substr(s, t.length - s);
  };
  const _e = function (t, e, r, i, n) {
    const s = e - t;
    const a = i - r;
    return ee(n, e => r + (((e - t) / s) * a || 0));
  };
  const de = function (t, e, r) {
    let i;
    let n;
    let s;
    const a = t.labels;
    let o = E;
    for (i in a) (n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && ((s = i), (o = n));
    return s;
  };
  const me = function (t, e, r) {
    let i;
    let n;
    const s = t.vars;
    const a = s[e];
    if (a) {
      return (
        (i = s[`${e}Params`]),
        (n = s.callbackScope || t),
        r && ft.length && Mt(),
        i ? a.apply(n, i) : a.call(n)
      );
    }
  };
  const ge = function (t) {
    return (
      Rt(t),
      t.scrollTrigger && t.scrollTrigger.kill(!1),
      t.progress() < 1 && me(t, 'onInterrupt'),
      t
    );
  };
  const ve = function (t) {
    let e = (t = (!t.name && t.default) || t).name;
    const r = U(t);
    const i = e && !r && t.init
      ? function () {
        this._props = [];
      }
      : t;
    const n = {
      init: ht, render: or, add: We, kill: hr, modifier: ur, rawVars: 0,
    };
    const s = {
      targetTest: 0, get: 0, getSetter: ir, aliases: {}, register: 0,
    };
    if ((Ce(), t !== i)) {
      if (pt[e]) return;
      At(i, At(Et(t, n), s)),
      St(i.prototype, St(n, Et(t, s))),
      (pt[(i.prop = e)] = i),
      t.targetTest && (mt.push(i), (lt[e] = 1)),
      (e = `${e === 'css' ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)}Plugin`);
    }
    ut(e, i), t.register && t.register(mr, i, cr);
  };
  const ye = 255;
  const Te = {
    aqua: [0, ye, ye],
    lime: [0, ye, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ye],
    navy: [0, 0, 128],
    white: [ye, ye, ye],
    olive: [128, 128, 0],
    yellow: [ye, ye, 0],
    orange: [ye, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ye, 0, 0],
    pink: [ye, 192, 203],
    cyan: [0, ye, ye],
    transparent: [ye, ye, ye, 0],
  };
  const xe = function (t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
          ? r
          : 3 * t < 2
            ? e + (r - e) * (2 / 3 - t) * 6
            : e)
          * ye
          + 0.5)
        | 0
    );
  };
  const we = function (t, e, r) {
    let i;
    let n;
    let s;
    let a;
    let o;
    let u;
    let h;
    let l;
    let f;
    let c;
    let p = t ? (X(t) ? [t >> 16, (t >> 8) & ye, t & ye] : 0) : Te.black;
    if (!p) {
      if ((t.substr(-1) === ',' && (t = t.substr(0, t.length - 1)), Te[t])) p = Te[t];
      else if (t.charAt(0) === '#') {
        if (
          (t.length < 6
              && ((i = t.charAt(1)),
              (n = t.charAt(2)),
              (s = t.charAt(3)),
              (t = `#${i}${i}${n}${n}${s}${s}${t.length === 5 ? t.charAt(4) + t.charAt(4) : ''}`)),
          t.length === 9)
        ) {
          return [
            (p = parseInt(t.substr(1, 6), 16)) >> 16,
            (p >> 8) & ye,
            p & ye,
            parseInt(t.substr(7), 16) / 255,
          ];
        }
        p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ye, t & ye];
      } else if (t.substr(0, 3) === 'hsl') {
        if (((p = c = t.match(Z)), e)) {
          if (~t.indexOf('=')) return (p = t.match($)), r && p.length < 4 && (p[3] = 1), p;
        } else {
          (a = (+p[0] % 360) / 360),
          (o = +p[1] / 100),
          (i = 2 * (u = +p[2] / 100) - (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
          p.length > 3 && (p[3] *= 1),
          (p[0] = xe(a + 1 / 3, i, n)),
          (p[1] = xe(a, i, n)),
          (p[2] = xe(a - 1 / 3, i, n));
        }
      } else p = t.match(Z) || Te.transparent;
      p = p.map(Number);
    }
    return (
      e
          && !c
          && ((i = p[0] / ye),
          (n = p[1] / ye),
          (s = p[2] / ye),
          (u = ((h = Math.max(i, n, s)) + (l = Math.min(i, n, s))) / 2),
          h === l
            ? (a = o = 0)
            : ((f = h - l),
            (o = u > 0.5 ? f / (2 - h - l) : f / (h + l)),
            (a = h === i
              ? (n - s) / f + (n < s ? 6 : 0)
              : h === n
                ? (s - i) / f + 2
                : (i - n) / f + 4),
            (a *= 60)),
          (p[0] = ~~(a + 0.5)),
          (p[1] = ~~(100 * o + 0.5)),
          (p[2] = ~~(100 * u + 0.5))),
      r && p.length < 4 && (p[3] = 1),
      p
    );
  };
  const be = function (t) {
    const e = [];
    const r = [];
    let i = -1;
    return (
      t.split(Oe).forEach((t) => {
        const n = t.match(J) || [];
        e.push.apply(e, n), r.push((i += n.length + 1));
      }),
      (e.c = r),
      e
    );
  };
  const Me = function (t, e, r) {
    let i;
    let n;
    let s;
    let a;
    let o = '';
    let u = (t + o).match(Oe);
    const h = e ? 'hsla(' : 'rgba(';
    let l = 0;
    if (!u) return t;
    if (
      ((u = u.map(t => (
        (t = we(t, e, 1))
            && `${h + (e ? `${t[0]},${t[1]}%,${t[2]}%,${t[3]}` : t.join(','))})`
      ))),
      r && ((s = be(t)), (i = r.c).join(o) !== s.c.join(o)))
    ) {
      for (a = (n = t.replace(Oe, '1').split(J)).length - 1; l < a; l++) {
        o
            += n[l]
            + (~i.indexOf(l)
              ? u.shift() || `${h}0,0,0,0)`
              : (s.length ? s : u.length ? u : r).shift());
      }
    }
    if (!n) for (a = (n = t.split(Oe)).length - 1; l < a; l++) o += n[l] + u[l];
    return o + n[a];
  };
  var Oe = (function () {
    let t;
    let e = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
    for (t in Te) e += `|${t}\\b`;
    return new RegExp(`${e})`, 'gi');
  }());
  const De = /hsl[a]?\(/;
  const ke = function (t) {
    let e;
    const r = t.join(' ');
    if (((Oe.lastIndex = 0), Oe.test(r))) { return (e = De.test(r)), (t[1] = Me(t[1], e)), (t[0] = Me(t[0], e, be(t[1]))), !0; }
  };
  var Ae = ((g = Date.now),
  (v = 500),
  (y = 33),
  (T = g()),
  (x = T),
  (b = w = 1e3 / 240),
  (O = function t(e) {
    let r;
    let i;
    let n;
    let s;
    const a = g() - x;
    const o = !0 === e;
    if (
      (a > v && (T += a - y),
      ((r = (n = (x += a) - T) - b) > 0 || o)
            && ((s = ++_.frame),
            (d = n - 1e3 * _.time),
            (_.time = n /= 1e3),
            (b += r + (r >= w ? 4 : w - r)),
            (i = 1)),
      o || (f = c(t)),
      i)
    ) { for (m = 0; m < M.length; m++) M[m](n, d, s, e); }
  }),
  (_ = {
    time: 0,
    frame: 0,
    tick() {
      O(!0);
    },
    deltaRatio(t) {
      return d / (1e3 / (t || 60));
    },
    wake() {
      o
            && (!s
              && W()
              && ((n = s = window),
              (a = n.document || {}),
              (it.gsap = mr),
              (n.gsapVersions || (n.gsapVersions = [])).push(mr.version),
              st(nt || n.GreenSockGlobals || (!n.gsap && n) || {}),
              (p = n.requestAnimationFrame)),
            f && _.sleep(),
            (c = p
              || function (t) {
                return setTimeout(t, (b - 1e3 * _.time + 1) | 0);
              }),
            (l = 1),
            O(2));
    },
    sleep() {
      (p ? n.cancelAnimationFrame : clearTimeout)(f), (l = 0), (c = ht);
    },
    lagSmoothing(t, e) {
      (v = t || 1e8), (y = Math.min(e, v, 0));
    },
    fps(t) {
      (w = 1e3 / (t || 240)), (b = 1e3 * _.time + w);
    },
    add(t) {
      M.indexOf(t) < 0 && M.push(t), Ce();
    },
    remove(t) {
      let e;
      ~(e = M.indexOf(t)) && M.splice(e, 1) && m >= e && m--;
    },
    _listeners: (M = []),
  }));
  var Ce = function () {
    return !l && Ae.wake();
  };
  const Se = {};
  const Pe = /^[\d.\-M][\d.\-,\s]/;
  const Ee = /["']/g;
  const ze = function (t) {
    for (
      var e,
        r,
        i,
        n = {},
        s = t.substr(1, t.length - 3).split(':'),
        a = s[0],
        o = 1,
        u = s.length;
      o < u;
      o++
    ) {
      (r = s[o]),
      (e = o !== u - 1 ? r.lastIndexOf(',') : r.length),
      (i = r.substr(0, e)),
      (n[a] = isNaN(i) ? i.replace(Ee, '').trim() : +i),
      (a = r.substr(e + 1).trim());
    }
    return n;
  };
  var Fe = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  };
  const Re = function t(e, r) {
    for (var i, n = e._first; n;) {
      n instanceof Ne
        ? t(n, r)
        : !n.vars.yoyoEase
            || (n._yoyo && n._repeat)
            || n._yoyo === r
            || (n.timeline
              ? t(n.timeline, r)
              : ((i = n._ease), (n._ease = n._yEase), (n._yEase = i), (n._yoyo = r))),
      (n = n._next);
    }
  };
  var Ie = function (t, e) {
    return (
      (t
          && (U(t)
            ? t
            : Se[t]
              || (function (t) {
                let e;
                let r;
                let i;
                let n;
                const s = (`${t}`).split('(');
                const a = Se[s[0]];
                return a && s.length > 1 && a.config
                  ? a.config.apply(
                    null,
                    ~t.indexOf('{')
                      ? [ze(s[1])]
                      : ((e = t),
                      (r = e.indexOf('(') + 1),
                      (i = e.indexOf(')')),
                      (n = e.indexOf('(', r)),
                      e.substring(r, ~n && n < i ? e.indexOf(')', i + 1) : i))
                        .split(',')
                        .map(Dt),
                  )
                  : Se._CE && Pe.test(t)
                    ? Se._CE('', t)
                    : a;
              }(t))))
        || e
    );
  };
  const Be = function (t, e, r, i) {
    void 0 === r
        && (r = function (t) {
          return 1 - e(1 - t);
        }),
    void 0 === i
          && (i = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
    let n;
    const s = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      xt(t, (t) => {
        for (const e in ((Se[t] = it[t] = s), (Se[(n = t.toLowerCase())] = r), s)) {
          Se[n + (e === 'easeIn' ? '.in' : e === 'easeOut' ? '.out' : '.inOut')] = Se[
            `${t}.${e}`
          ] = s[e];
        }
      }),
      s
    );
  };
  const Le = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
    };
  };
  const qe = function t(e, r, i) {
    const n = r >= 1 ? r : 1;
    let s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1);
    const a = (s / F) * (Math.asin(1 / n) || 0);
    const o = function (t) {
      return t === 1 ? 1 : n * Math.pow(2, -10 * t) * q((t - a) * s) + 1;
    };
    const u = e === 'out'
      ? o
      : e === 'in'
        ? function (t) {
          return 1 - o(1 - t);
        }
        : Le(o);
    return (
      (s = F / s),
      (u.config = function (r, i) {
        return t(e, r, i);
      }),
      u
    );
  };
  const Ye = function t(e, r) {
    void 0 === r && (r = 1.70158);
    const i = function (t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    };
    const n = e === 'out'
      ? i
      : e === 'in'
        ? function (t) {
          return 1 - i(1 - t);
        }
        : Le(i);
    return (
      (n.config = function (r) {
        return t(e, r);
      }),
      n
    );
  };
  xt('Linear,Quad,Cubic,Quart,Quint,Strong', (t, e) => {
    const r = e < 5 ? e + 1 : e;
    Be(
      `${t},Power${r - 1}`,
      e
        ? t => Math.pow(t, r)
        : t => t,
      t => 1 - Math.pow(1 - t, r),
      t => (t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2),
    );
  }),
  (Se.Linear.easeNone = Se.none = Se.Linear.easeIn),
  Be('Elastic', qe('in'), qe('out'), qe()),
  (D = 7.5625),
  (A = 1 / (k = 2.75)),
  Be(
    'Bounce',
    t => 1 - C(1 - t),
    (C = function (t) {
      return t < A
        ? D * t * t
        : t < 0.7272727272727273
          ? D * Math.pow(t - 1.5 / k, 2) + 0.75
          : t < 0.9090909090909092
            ? D * (t -= 2.25 / k) * t + 0.9375
            : D * Math.pow(t - 2.625 / k, 2) + 0.984375;
    }),
  ),
  Be('Expo', t => (t ? Math.pow(2, 10 * (t - 1)) : 0)),
  Be('Circ', t => -(B(1 - t * t) - 1)),
  Be('Sine', t => (t === 1 ? 1 : 1 - L(t * R))),
  Be('Back', Ye('in'), Ye('out'), Ye()),
  (Se.SteppedEase = Se.steps = it.SteppedEase = {
    config(t, e) {
      void 0 === t && (t = 1);
      const r = 1 / t;
      const i = t + (e ? 0 : 1);
      const n = e ? 1 : 0;
      return function (t) {
        return (((i * re(0, 0.99999999, t)) | 0) + n) * r;
      };
    },
  }),
  (P.ease = Se['quad.out']),
  xt('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', t => (gt += `${t},${t}Params,`));
  var Ue = function (t, e) {
    (this.id = I++),
    (t._gsap = this),
    (this.target = t),
    (this.harness = e),
    (this.get = e ? e.get : Tt),
    (this.set = e ? e.getSetter : ir);
  };
  const Xe = (function () {
    function t(t) {
      (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0)
            && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Zt(this, +t.duration, 1, 1),
      (this.data = t.data),
      l || Ae.wake();
    }
    const e = t.prototype;
    return (
      (e.delay = function (t) {
        return t || t === 0
          ? (this.parent
                && this.parent.smoothChildTiming
                && this.startTime(this._start + t - this._delay),
          (this._delay = t),
          this)
          : this._delay;
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t)
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
          Zt(
            this,
            this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1),
          ))
          : this._tDur;
      }),
      (e.totalTime = function (t, e) {
        if ((Ce(), !arguments.length)) return this._tTime;
        let r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Nt(this, t), !r._dp || r.parent || Vt(r, this); r.parent;) {
            r.parent._time
                !== r._start
                  + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts)
                && r.totalTime(r._tTime, !0),
            (r = r.parent);
          }
          !this.parent
              && this._dp.autoRemoveChildren
              && ((this._ts > 0 && t < this._tDur)
                || (this._ts < 0 && t > 0)
                || (!this._tDur && !t))
              && jt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t
              || (!this._dur && !e)
              || (this._initted && Math.abs(this._zTime) === z)
              || (!t && !this._initted && (this.add || this._ptLookup)))
              && (this._ts || (this._pTime = t), Ot(this, t, e)),
          this
        );
      }),
      (e.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
            Math.min(this.totalDuration(), t + qt(this)) % this._dur || (t ? this._dur : 0),
            e,
          )
          : this._time;
      }),
      (e.totalProgress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
      }),
      (e.progress = function (t, e) {
        return arguments.length
          ? this.totalTime(
            this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + qt(this),
            e,
          )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
      }),
      (e.iteration = function (t, e) {
        const r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
            ? Yt(this._tTime, r) + 1
            : 1;
      }),
      (e.timeScale = function (t) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === t) return this;
        const e = this.parent && this._ts ? Ut(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -1e-8 ? 0 : this._rts),
          Bt(this.totalTime(re(-this._delay, this._tDur, e), !0))
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t
                && ((this._ps = t),
                t
                  ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                  : (Ce(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 && (this._tTime -= z) && Math.abs(this._zTime) !== z,
                  ))),
          this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          const e = this.parent || this._dp;
          return e && (e._sort || !this.parent) && jt(e, this, t - this._delay), this;
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return this._start + (j(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
      }),
      (e.rawTime = function (t) {
        const e = this.parent || this._dp;
        return e
          ? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Ut(e.rawTime(t), this)
              : this._tTime
          : this._tTime;
      }),
      (e.globalTime = function (t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e;) { (r = e._start + r / (e._ts || 1)), (e = e._dp); }
        return r;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), $t(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        return arguments.length ? ((this._rDelay = t), $t(this)) : this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, e) {
        return this.totalTime(Kt(this, t), j(e));
      }),
      (e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, j(e));
      }),
      (e.play = function (t, e) {
        return t != null && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (t, e) {
        return t != null && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
      }),
      (e.pause = function (t, e) {
        return t != null && this.seek(t, e), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (e.isActive = function () {
        let t;
        const e = this.parent || this._dp;
        const r = this._start;
        return !(
          e
            && !(
              this._ts
              && this._initted
              && e.isActive()
              && (t = e.rawTime(!0)) >= r
              && t < this.endTime(!0) - z
            )
        );
      }),
      (e.eventCallback = function (t, e, r) {
        const i = this.vars;
        return arguments.length > 1
          ? (e
            ? ((i[t] = e), r && (i[`${t}Params`] = r), t === 'onUpdate' && (this._onUpdate = e))
            : delete i[t],
          this)
          : i[t];
      }),
      (e.then = function (t) {
        const e = this;
        return new Promise((r) => {
          let i = U(t) ? t : kt;
          const n = function () {
            const t = e.then;
            (e.then = null),
            U(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
            r(i),
            (e.then = t);
          };
          (e._initted && e.totalProgress() === 1 && e._ts >= 0) || (!e._tTime && e._ts < 0)
            ? n()
            : (e._prom = n);
        });
      }),
      (e.kill = function () {
        ge(this);
      }),
      t
    );
  }());
  At(Xe.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ne = (function (r) {
    function n(e, n) {
      let s;
      return (
        void 0 === e && (e = {}),
        ((s = r.call(this, e) || this).labels = {}),
        (s.smoothChildTiming = !!e.smoothChildTiming),
        (s.autoRemoveChildren = !!e.autoRemoveChildren),
        (s._sort = j(e.sortChildren)),
        i && jt(e.parent || i, t(s), n),
        e.reversed && s.reverse(),
        e.paused && s.paused(!0),
        e.scrollTrigger && Wt(t(s), e.scrollTrigger),
        s
      );
    }
    e(n, r);
    const s = n.prototype;
    return (
      (s.to = function (t, e, r) {
        return te(0, arguments, this), this;
      }),
      (s.from = function (t, e, r) {
        return te(1, arguments, this), this;
      }),
      (s.fromTo = function (t, e, r, i) {
        return te(2, arguments, this), this;
      }),
      (s.set = function (t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          zt(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Je(t, e, Kt(this, r), 1),
          this
        );
      }),
      (s.call = function (t, e, r) {
        return jt(this, Je.delayedCall(0, t, e), r);
      }),
      (s.staggerTo = function (t, e, r, i, n, s, a) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = s),
          (r.onCompleteParams = a),
          (r.parent = this),
          new Je(t, r, Kt(this, n)),
          this
        );
      }),
      (s.staggerFrom = function (t, e, r, i, n, s, a) {
        return (
          (r.runBackwards = 1),
          (zt(r).immediateRender = j(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, s, a)
        );
      }),
      (s.staggerFromTo = function (t, e, r, i, n, s, a, o) {
        return (
          (i.startAt = r),
          (zt(i).immediateRender = j(i.immediateRender)),
          this.staggerTo(t, e, i, n, s, a, o)
        );
      }),
      (s.render = function (t, e, r) {
        let n;
        let s;
        let a;
        let o;
        let u;
        let h;
        let l;
        let f;
        let c;
        let p;
        let _;
        let d;
        let m = this._time;
        let g = this._dirty ? this.totalDuration() : this._tDur;
        let v = this._dur;
        let y = this !== i && t > g - z && t >= 0 ? g : t < z ? 0 : t;
        const T = this._zTime < 0 != t < 0 && (this._initted || !v);
        if (y !== this._tTime || r || T) {
          if (
            (m !== this._time && v && ((y += this._time - m), (t += this._time - m)),
            (n = y),
            (c = this._start),
            (h = !(f = this._ts)),
            T && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (((_ = this._yoyo), (u = v + this._rDelay), this._repeat < -1 && t < 0)) { return this.totalTime(100 * u + t, e, r); }
            if (
              ((n = wt(y % u)),
              y === g
                ? ((o = this._repeat), (n = v))
                : ((o = ~~(y / u)) && o === y / u && ((n = v), o--), n > v && (n = v)),
              (p = Yt(this._tTime, u)),
              !m && this._tTime && p !== o && (p = o),
              _ && 1 & o && ((n = v - n), (d = 1)),
              o !== p && !this._lock)
            ) {
              let x = _ && 1 & p;
              const w = x === (_ && 1 & o);
              if (
                (o < p && (x = !x),
                (m = x ? 0 : v),
                (this._lock = 1),
                (this.render(m || (d ? 0 : wt(o * u)), e, !v)._lock = 0),
                (this._tTime = y),
                !e && this.parent && me(this, 'onRepeat'),
                this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1),
                (m && m !== this._time)
                  || h !== !this._ts
                  || (this.vars.onRepeat && !this.parent && !this._act))
              ) { return this; }
              if (
                ((v = this._dur),
                (g = this._tDur),
                w
                  && ((this._lock = 2),
                  (m = x ? v : -1e-4),
                  this.render(m, !0),
                  this.vars.repeatRefresh && !d && this.invalidate()),
                (this._lock = 0),
                !this._ts && !h)
              ) { return this; }
              Re(this, d);
            }
          }
          if (
            (this._hasPause
              && !this._forcing
              && this._lock < 2
              && (l = (function (t, e, r) {
                let i;
                if (r > e) {
                  for (i = t._first; i && i._start <= r;) {
                    if (!i._dur && i.data === 'isPause' && i._start > e) return i;
                    i = i._next;
                  }
                } else {
                  for (i = t._last; i && i._start >= r;) {
                    if (!i._dur && i.data === 'isPause' && i._start < e) return i;
                    i = i._prev;
                  }
                }
              }(this, wt(m), wt(n))))
              && (y -= n - (n = l._start)),
            (this._tTime = y),
            (this._time = n),
            (this._act = !f),
            this._initted
              || ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (m = 0)),
            !m && n && !e && (me(this, 'onStart'), this._tTime !== y))
          ) { return this; }
          if (n >= m && t >= 0) {
            for (s = this._first; s;) {
              if (((a = s._next), (s._act || n >= s._start) && s._ts && l !== s)) {
                if (s.parent !== this) return this.render(t, e, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (n - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts,
                    e,
                    r,
                  ),
                  n !== this._time || (!this._ts && !h))
                ) {
                  (l = 0), a && (y += this._zTime = -1e-8);
                  break;
                }
              }
              s = a;
            }
          } else {
            s = this._last;
            for (let b = t < 0 ? t : n; s;) {
              if (((a = s._prev), (s._act || b <= s._end) && s._ts && l !== s)) {
                if (s.parent !== this) return this.render(t, e, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (b - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) + (b - s._start) * s._ts,
                    e,
                    r,
                  ),
                  n !== this._time || (!this._ts && !h))
                ) {
                  (l = 0), a && (y += this._zTime = b ? -1e-8 : z);
                  break;
                }
              }
              s = a;
            }
          }
          if (
            l
            && !e
            && (this.pause(), (l.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1), this._ts)
          ) { return (this._start = c), Xt(this), this.render(t, e, r); }
          this._onUpdate && !e && me(this, 'onUpdate', !0),
          ((y === g && g >= this.totalDuration()) || (!y && m))
              && ((c !== this._start && Math.abs(f) === Math.abs(this._ts))
                || this._lock
                || ((t || !v) && ((y === g && this._ts > 0) || (!y && this._ts < 0)) && Rt(this, 1),
                e
                  || (t < 0 && !m)
                  || (!y && !m && g)
                  || (me(this, y === g && t >= 0 ? 'onComplete' : 'onReverseComplete', !0),
                  this._prom && !(y < g && this.timeScale() > 0) && this._prom())));
        }
        return this;
      }),
      (s.add = function (t, e) {
        const r = this;
        if ((X(e) || (e = Kt(this, e, t)), !(t instanceof Xe))) {
          if (H(t)) {
            return (
              t.forEach(t => r.add(t, e)),
              this
            );
          }
          if (Y(t)) return this.addLabel(t, e);
          if (!U(t)) return this;
          t = Je.delayedCall(0, t);
        }
        return this !== t ? jt(this, t, e) : this;
      }),
      (s.getChildren = function (t, e, r, i) {
        void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === r && (r = !0),
        void 0 === i && (i = -1e8);
        for (var n = [], s = this._first; s;) {
          s._start >= i
            && (s instanceof Je
              ? e && n.push(s)
              : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))),
          (s = s._next);
        }
        return n;
      }),
      (s.getById = function (t) {
        for (let e = this.getChildren(1, 1, 1), r = e.length; r--;) { if (e[r].vars.id === t) return e[r]; }
      }),
      (s.remove = function (t) {
        return Y(t)
          ? this.removeLabel(t)
          : U(t)
            ? this.killTweensOf(t)
            : (Ft(this, t), t === this._recent && (this._recent = this._last), It(this));
      }),
      (s.totalTime = function (t, e) {
        return arguments.length
          ? ((this._forcing = 1),
          !this._dp
              && this._ts
              && (this._start = wt(
                Ae.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts),
              )),
          r.prototype.totalTime.call(this, t, e),
          (this._forcing = 0),
          this)
          : this._tTime;
      }),
      (s.addLabel = function (t, e) {
        return (this.labels[t] = Kt(this, e)), this;
      }),
      (s.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (s.addPause = function (t, e, r) {
        const i = Je.delayedCall(0, e || ht, r);
        return (i.data = 'isPause'), (this._hasPause = 1), jt(this, i, Kt(this, t));
      }),
      (s.removePause = function (t) {
        let e = this._first;
        for (t = Kt(this, t); e;) e._start === t && e.data === 'isPause' && Rt(e), (e = e._next);
      }),
      (s.killTweensOf = function (t, e, r) {
        for (let i = this.getTweensOf(t, r), n = i.length; n--;) Ve !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (s.getTweensOf = function (t, e) {
        for (var r, i = [], n = ae(t), s = this._first, a = X(e); s;) {
          s instanceof Je
            ? bt(s._targets, n)
              && (a
                ? (!Ve || (s._initted && s._ts))
                  && s.globalTime(0) <= e
                  && s.globalTime(s.totalDuration()) > e
                : !e || s.isActive())
              && i.push(s)
            : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
          (s = s._next);
        }
        return i;
      }),
      (s.tweenTo = function (t, e) {
        e = e || {};
        let r;
        const i = this;
        const n = Kt(i, t);
        const s = e;
        const a = s.startAt;
        const o = s.onStart;
        const u = s.onStartParams;
        const h = s.immediateRender;
        var l = Je.to(
          i,
          At(
            {
              ease: e.ease || 'none',
              lazy: !1,
              immediateRender: !1,
              time: n,
              overwrite: 'auto',
              duration:
                  e.duration
                  || Math.abs((n - (a && 'time' in a ? a.time : i._time)) / i.timeScale())
                  || z,
              onStart() {
                if ((i.pause(), !r)) {
                  const t = e.duration
                      || Math.abs((n - (a && 'time' in a ? a.time : i._time)) / i.timeScale());
                  l._dur !== t && Zt(l, t, 0, 1).render(l._time, !0, !0), (r = 1);
                }
                o && o.apply(l, u || []);
              },
            },
            e,
          ),
        );
        return h ? l.render(0) : l;
      }),
      (s.tweenFromTo = function (t, e, r) {
        return this.tweenTo(e, At({ startAt: { time: Kt(this, t) } }, r));
      }),
      (s.recent = function () {
        return this._recent;
      }),
      (s.nextLabel = function (t) {
        return void 0 === t && (t = this._time), de(this, Kt(this, t));
      }),
      (s.previousLabel = function (t) {
        return void 0 === t && (t = this._time), de(this, Kt(this, t), 1);
      }),
      (s.currentLabel = function (t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + z);
      }),
      (s.shiftChildren = function (t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, s = this.labels; n;) { n._start >= r && ((n._start += t), (n._end += t)), (n = n._next); }
        if (e) for (i in s) s[i] >= r && (s[i] += t);
        return It(this);
      }),
      (s.invalidate = function () {
        let t = this._first;
        for (this._lock = 0; t;) t.invalidate(), (t = t._next);
        return r.prototype.invalidate.call(this);
      }),
      (s.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r;) (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          It(this)
        );
      }),
      (s.totalDuration = function (t) {
        let e;
        let r;
        let n;
        let s = 0;
        const a = this;
        let o = a._last;
        let u = E;
        if (arguments.length) {
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t),
          );
        }
        if (a._dirty) {
          for (n = a.parent; o;) {
            (e = o._prev),
            o._dirty && o.totalDuration(),
            (r = o._start) > u && a._sort && o._ts && !a._lock
              ? ((a._lock = 1), (jt(a, o, r - o._delay, 1)._lock = 0))
              : (u = r),
            r < 0
                && o._ts
                && ((s -= r),
                ((!n && !a._dp) || (n && n.smoothChildTiming))
                  && ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)),
                a.shiftChildren(-r, !1, -Infinity),
                (u = 0)),
            o._end > s && o._ts && (s = o._end),
            (o = e);
          }
          Zt(a, a === i && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (n.updateRoot = function (t) {
        if ((i._ts && (Ot(i, Ut(t, i)), (u = Ae.frame)), Ae.frame >= dt)) {
          dt += S.autoSleep || 120;
          let e = i._first;
          if ((!e || !e._ts) && S.autoSleep && Ae._listeners.length < 2) {
            for (; e && !e._ts;) e = e._next;
            e || Ae.sleep();
          }
        }
      }),
      n
    );
  }(Xe));
  At(Ne.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  let Ve;
  const je = function (t, e, r, i, n, s, a) {
    let o;
    let u;
    let h;
    let l;
    let f;
    let c;
    let p;
    let _;
    const d = new cr(this._pt, t, e, 0, 1, ar, null, n);
    let m = 0;
    let g = 0;
    for (
      d.b = r,
      d.e = i,
      r += '',
      (p = ~(i += '').indexOf('random(')) && (i = pe(i)),
      s && (s((_ = [r, i]), t, e), (r = _[0]), (i = _[1])),
      u = r.match(K) || [];
      (o = K.exec(i));

    ) {
      (l = o[0]),
      (f = i.substring(m, o.index)),
      h ? (h = (h + 1) % 5) : f.substr(-5) === 'rgba(' && (h = 1),
      l !== u[g++]
            && ((c = parseFloat(u[g - 1]) || 0),
            (d._pt = {
              _next: d._pt,
              p: f || g === 1 ? f : ',',
              s: c,
              c:
                l.charAt(1) === '='
                  ? parseFloat(l.substr(2)) * (l.charAt(0) === '-' ? -1 : 1)
                  : parseFloat(l) - c,
              m: h && h < 4 ? Math.round : 0,
            }),
            (m = K.lastIndex));
    }
    return (
      (d.c = m < i.length ? i.substring(m, i.length) : ''),
      (d.fp = a),
      (tt.test(i) || p) && (d.e = 0),
      (this._pt = d),
      d
    );
  };
  var We = function (t, e, r, i, n, s, a, o, u) {
    U(i) && (i = i(n || 0, t, s));
    let h;
    const l = t[e];
    const f = r !== 'get'
      ? r
      : U(l)
        ? u
          ? t[e.indexOf('set') || !U(t[`get${e.substr(3)}`]) ? e : `get${e.substr(3)}`](u)
          : t[e]()
        : l;
    const c = U(l) ? (u ? er : tr) : Ke;
    if (
      (Y(i)
          && (~i.indexOf('random(') && (i = pe(i)),
          i.charAt(1) === '='
            && ((h = parseFloat(f)
              + parseFloat(i.substr(2)) * (i.charAt(0) === '-' ? -1 : 1)
              + (ie(f) || 0))
              || h === 0)
            && (i = h)),
      f !== i)
    ) {
      return isNaN(f * i) || i === ''
        ? (!l && !(e in t) && at(e, i), je.call(this, t, e, f, i, c, o || S.stringFilter, u))
        : ((h = new cr(
          this._pt,
          t,
          e,
          +f || 0,
          i - (f || 0),
          typeof l === 'boolean' ? sr : nr,
          0,
          c,
        )),
        u && (h.fp = u),
        a && h.modifier(a, this, t),
        (this._pt = h));
    }
  };
  const Ge = function (t, e, r, i, n, s) {
    let a; let o; let u; let
      l;
    if (
      pt[t]
        && !1
          !== (a = new pt[t]()).init(
            n,
            a.rawVars
              ? e[t]
              : (function (t, e, r, i, n) {
                if (
                  (U(t) && (t = He(t, n, e, r, i)),
                  !V(t) || (t.style && t.nodeType) || H(t) || Q(t))
                ) { return Y(t) ? He(t, n, e, r, i) : t; }
                let s;
                const a = {};
                for (s in t) a[s] = He(t[s], n, e, r, i);
                return a;
              }(e[t], i, n, s, r)),
            r,
            i,
            s,
          )
        && ((r._pt = o = new cr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority)), r !== h)
    ) { for (u = r._ptLookup[r._targets.indexOf(n)], l = a._props.length; l--;) u[a._props[l]] = o; }
    return a;
  };
  var Qe = function t(e, n) {
    let s;
    let a;
    let o;
    let u;
    let h;
    let l;
    let f;
    let c;
    let p;
    let _;
    let d;
    let m;
    let g;
    const v = e.vars;
    let y = v.ease;
    const T = v.startAt;
    let x = v.immediateRender;
    let w = v.lazy;
    const b = v.onUpdate;
    const M = v.onUpdateParams;
    const O = v.callbackScope;
    const D = v.runBackwards;
    let k = v.yoyoEase;
    const A = v.keyframes;
    const C = v.autoRevert;
    const S = e._dur;
    const E = e._startAt;
    const F = e._targets;
    const R = e.parent;
    const I = R && R.data === 'nested' ? R.parent._targets : F;
    const B = e._overwrite === 'auto' && !r;
    const L = e.timeline;
    if (
      (L && (!A || !y) && (y = 'none'),
      (e._ease = Ie(y, P.ease)),
      (e._yEase = k ? Fe(Ie(!0 === k ? y : k, P.ease)) : 0),
      k && e._yoyo && !e._repeat && ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)),
      (e._from = !L && !!v.runBackwards),
      !L)
    ) {
      if (
        ((m = (c = F[0] ? yt(F[0]).harness : 0) && v[c.prop]),
        (s = Et(v, lt)),
        E && E.render(-1, !0).kill(),
        T)
      ) {
        if (
          (Rt(
            (e._startAt = Je.set(
              F,
              At(
                {
                  data: 'isStart',
                  overwrite: !1,
                  parent: R,
                  immediateRender: !0,
                  lazy: j(w),
                  startAt: null,
                  delay: 0,
                  onUpdate: b,
                  onUpdateParams: M,
                  callbackScope: O,
                  stagger: 0,
                },
                T,
              ),
            )),
          ),
          n < 0 && !x && !C && e._startAt.render(-1, !0),
          x)
        ) {
          if ((n > 0 && !C && (e._startAt = 0), S && n <= 0)) return void (n && (e._zTime = n));
        } else !1 === C && (e._startAt = 0);
      } else if (D && S) {
        if (E) !C && (e._startAt = 0);
        else if (
          (n && (x = !1),
          (o = At(
            {
              overwrite: !1,
              data: 'isFromStart',
              lazy: x && j(w),
              immediateRender: x,
              stagger: 0,
              parent: R,
            },
            s,
          )),
          m && (o[c.prop] = m),
          Rt((e._startAt = Je.set(F, o))),
          n < 0 && e._startAt.render(-1, !0),
          x)
        ) {
          if (!n) return;
        } else t(e._startAt, z);
      }
      for (e._pt = 0, w = (S && j(w)) || (w && !S), a = 0; a < F.length; a++) {
        if (
          ((f = (h = F[a])._gsap || vt(F)[a]._gsap),
          (e._ptLookup[a] = _ = {}),
          ct[f.id] && ft.length && Mt(),
          (d = I === F ? a : I.indexOf(h)),
          c
              && !1 !== (p = new c()).init(h, m || s, e, d, I)
              && ((e._pt = u = new cr(e._pt, h, p.name, 0, 1, p.render, p, 0, p.priority)),
              p._props.forEach((t) => {
                _[t] = u;
              }),
              p.priority && (l = 1)),
          !c || m)
        ) {
          for (o in s) {
            pt[o] && (p = Ge(o, s, e, d, h, I))
              ? p.priority && (l = 1)
              : (_[o] = u = We.call(e, h, o, 'get', s[o], d, I, 0, v.stringFilter));
          }
        }
        e._op && e._op[a] && e.kill(h, e._op[a]),
        B
              && e._pt
              && ((Ve = e), i.killTweensOf(h, _, e.globalTime(0)), (g = !e.parent), (Ve = 0)),
        e._pt && w && (ct[f.id] = 1);
      }
      l && fr(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = b), (e._initted = (!e._op || e._pt) && !g);
  };
  var He = function (t, e, r, i, n) {
    return U(t) ? t.call(e, r, i, n) : Y(t) && ~t.indexOf('random(') ? pe(t) : t;
  };
  const Ze = `${gt}repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase`;
  const $e = (`${Ze},id,stagger,delay,duration,paused,scrollTrigger`).split(',');
  var Je = (function (n) {
    function s(e, s, a, o) {
      let u;
      typeof s === 'number' && ((a.duration = s), (s = a), (a = null));
      let h;
      let l;
      let f;
      let c;
      let p;
      let _;
      let d;
      let m;
      const g = (u = n.call(this, o ? s : zt(s)) || this).vars;
      let v = g.duration;
      let y = g.delay;
      const T = g.immediateRender;
      const x = g.stagger;
      const w = g.overwrite;
      const b = g.keyframes;
      const M = g.defaults;
      const O = g.scrollTrigger;
      const D = g.yoyoEase;
      const k = s.parent || i;
      const A = (H(e) || Q(e) ? X(e[0]) : 'length' in s) ? [e] : ae(e);
      if (
        ((u._targets = A.length
          ? vt(A)
          : ot(`GSAP target ${e} not found. https://greensock.com`, !S.nullTargetWarn)
              || []),
        (u._ptLookup = []),
        (u._overwrite = w),
        b || x || G(v) || G(y))
      ) {
        if (
          ((s = u.vars),
          (h = u.timeline = new Ne({ data: 'nested', defaults: M || {} })).kill(),
          (h.parent = h._dp = t(u)),
          (h._start = 0),
          b)
        ) {
          At(h.vars.defaults, { ease: 'none' }),
          x
            ? A.forEach((t, e) => b.forEach((r, i) => h.to(t, r, i ? '>' : e * x)))
            : b.forEach(t => h.to(A, t, '>'));
        } else {
          if (((c = A.length), (d = x ? ue(x) : ht), V(x))) { for (p in x) ~Ze.indexOf(p) && (m || (m = {}), (m[p] = x[p])); }
          for (l = 0; l < c; l++) {
            for (p in ((f = {}), s)) $e.indexOf(p) < 0 && (f[p] = s[p]);
            (f.stagger = 0),
            D && (f.yoyoEase = D),
            m && St(f, m),
            (_ = A[l]),
            (f.duration = +He(v, t(u), l, _, A)),
            (f.delay = (+He(y, t(u), l, _, A) || 0) - u._delay),
            !x
                  && c === 1
                  && f.delay
                  && ((u._delay = y = f.delay), (u._start += y), (f.delay = 0)),
            h.to(_, f, d(l, _, A));
          }
          h.duration() ? (v = y = 0) : (u.timeline = 0);
        }
        v || u.duration((v = h.duration()));
      } else u.timeline = 0;
      return (
        !0 !== w || r || ((Ve = t(u)), i.killTweensOf(A), (Ve = 0)),
        jt(k, t(u), a),
        s.reversed && u.reverse(),
        s.paused && u.paused(!0),
        (T
            || (!v && !b && u._start === wt(k._time) && j(T) && Lt(t(u)) && k.data !== 'nested'))
            && ((u._tTime = -1e-8), u.render(Math.max(0, -y))),
        O && Wt(t(u), O),
        u
      );
    }
    e(s, n);
    const a = s.prototype;
    return (
      (a.render = function (t, e, r) {
        let i;
        let n;
        let s;
        let a;
        let o;
        let u;
        let h;
        let l;
        let f;
        const c = this._time;
        const p = this._tDur;
        const _ = this._dur;
        const d = t > p - z && t >= 0 ? p : t < z ? 0 : t;
        if (_) {
          if (
            d !== this._tTime
              || !t
              || r
              || (!this._initted && this._tTime)
              || (this._startAt && this._zTime < 0 != t < 0)
          ) {
            if (((i = d), (l = this.timeline), this._repeat)) {
              if (((a = _ + this._rDelay), this._repeat < -1 && t < 0)) { return this.totalTime(100 * a + t, e, r); }
              if (
                ((i = wt(d % a)),
                d === p
                  ? ((s = this._repeat), (i = _))
                  : ((s = ~~(d / a)) && s === d / a && ((i = _), s--), i > _ && (i = _)),
                (u = this._yoyo && 1 & s) && ((f = this._yEase), (i = _ - i)),
                (o = Yt(this._tTime, a)),
                i === c && !r && this._initted)
              ) { return this; }
              s !== o
                  && (l && this._yEase && Re(l, u),
                  !this.vars.repeatRefresh
                    || u
                    || this._lock
                    || ((this._lock = r = 1), (this.render(wt(a * s), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Gt(this, t < 0 ? t : i, r, e)) return (this._tTime = 0), this;
              if (_ !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = d),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = h = (f || this._ease)(i / _)),
              this._from && (this.ratio = h = 1 - h),
              i && !c && !e && me(this, 'onStart'),
              i && !c && !e && (me(this, 'onStart'), this._tTime !== d))
            ) { return this; }
            for (n = this._pt; n;) n.r(h, n.d), (n = n._next);
            (l && l.render(t < 0 ? t : !i && u ? -1e-8 : l._dur * h, e, r))
                || (this._startAt && (this._zTime = t)),
            this._onUpdate
                  && !e
                  && (t < 0 && this._startAt && this._startAt.render(t, !0, r), me(this, 'onUpdate')),
            this._repeat
                  && s !== o
                  && this.vars.onRepeat
                  && !e
                  && this.parent
                  && me(this, 'onRepeat'),
            (d !== this._tDur && d)
                  || this._tTime !== d
                  || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                  (t || !_)
                    && ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0))
                    && Rt(this, 1),
                  e
                    || (t < 0 && !c)
                    || (!d && !c)
                    || (me(this, d === p ? 'onComplete' : 'onReverseComplete', !0),
                    this._prom && !(d < p && this.timeScale() > 0) && this._prom()));
          }
        } else {
          !(function (t, e, r, i) {
            let n;
            let s;
            let a;
            let o = t.ratio;
            let u = e < 0
                  || (!e
                    && ((!t._start && Qt(t) && (t._initted || !Ht(t)))
                      || ((t._ts < 0 || t._dp._ts < 0) && !Ht(t))))
              ? 0
              : 1;
            const h = t._rDelay;
            let l = 0;
            if (
              (h
                  && t._repeat
                  && ((l = re(0, t._tDur, e)),
                  (s = Yt(l, h)),
                  (a = Yt(t._tTime, h)),
                  t._yoyo && 1 & s && (u = 1 - u),
                  s !== a && ((o = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== o || i || t._zTime === z || (!e && t._zTime))
            ) {
              if (!t._initted && Gt(t, e, i, r)) return;
              for (
                a = t._zTime,
                t._zTime = e || (r ? z : 0),
                r || (r = e && !a),
                t.ratio = u,
                t._from && (u = 1 - u),
                t._time = 0,
                t._tTime = l,
                n = t._pt;
                n;

              ) { n.r(u, n.d), (n = n._next); }
              t._startAt && e < 0 && t._startAt.render(e, !0, !0),
              t._onUpdate && !r && me(t, 'onUpdate'),
              l && t._repeat && !r && t.parent && me(t, 'onRepeat'),
              (e >= t._tDur || e < 0)
                    && t.ratio === u
                    && (u && Rt(t, 1),
                    r || (me(t, u ? 'onComplete' : 'onReverseComplete', !0), t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          }(this, t, e, r));
        }
        return this;
      }),
      (a.targets = function () {
        return this._targets;
      }),
      (a.invalidate = function () {
        return (
          (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(),
          n.prototype.invalidate.call(this)
        );
      }),
      (a.kill = function (t, e) {
        if ((void 0 === e && (e = 'all'), !(t || (e && e !== 'all')))) { return (this._lazy = this._pt = 0), this.parent ? ge(this) : this; }
        if (this.timeline) {
          const r = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Ve && !0 !== Ve.vars.overwrite)._first || ge(this),
            this.parent
                && r !== this.timeline.totalDuration()
                && Zt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
            this
          );
        }
        let i;
        let n;
        let s;
        let a;
        let o;
        let u;
        let h;
        const l = this._targets;
        const f = t ? ae(t) : l;
        const c = this._ptLookup;
        const p = this._pt;
        if (
          (!e || e === 'all')
            && (function (t, e) {
              for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
              return r < 0;
            }(l, f))
        ) { return e === 'all' && (this._pt = 0), ge(this); }
        for (
          i = this._op = this._op || [],
          e !== 'all'
                && (Y(e)
                  && ((o = {}),
                  xt(e, t => (o[t] = 1)),
                  (e = o)),
                (e = (function (t, e) {
                  let r;
                  let i;
                  let n;
                  let s;
                  const a = t[0] ? yt(t[0]).harness : 0;
                  const o = a && a.aliases;
                  if (!o) return e;
                  for (i in ((r = St({}, e)), o)) { if ((i in r)) for (n = (s = o[i].split(',')).length; n--;) r[s[n]] = r[i]; }
                  return r;
                }(l, e)))),
          h = l.length;
          h--;

        ) {
          if (~f.indexOf(l[h])) {
            for (o in ((n = c[h]),
            e === 'all' ? ((i[h] = e), (a = n), (s = {})) : ((s = i[h] = i[h] || {}), (a = e)),
            a)) {
              (u = n && n[o])
                  && (('kill' in u.d && !0 !== u.d.kill(o)) || Ft(this, u, '_pt'), delete n[o]),
              s !== 'all' && (s[o] = 1);
            }
          }
        }
        return this._initted && !this._pt && p && ge(this), this;
      }),
      (s.to = function (t, e) {
        return new s(t, e, arguments[2]);
      }),
      (s.from = function (t, e) {
        return te(1, arguments);
      }),
      (s.delayedCall = function (t, e, r, i) {
        return new s(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i,
        });
      }),
      (s.fromTo = function (t, e, r) {
        return te(2, arguments);
      }),
      (s.set = function (t, e) {
        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e);
      }),
      (s.killTweensOf = function (t, e, r) {
        return i.killTweensOf(t, e, r);
      }),
      s
    );
  }(Xe));
  At(Je.prototype, {
    _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0,
  }),
  xt('staggerTo,staggerFrom,staggerFromTo', (t) => {
    Je[t] = function () {
      const e = new Ne();
      const r = ne.call(arguments, 0);
      return r.splice(t === 'staggerFromTo' ? 5 : 4, 0, 0), e[t].apply(e, r);
    };
  });
  var Ke = function (t, e, r) {
    return (t[e] = r);
  };
  var tr = function (t, e, r) {
    return t[e](r);
  };
  var er = function (t, e, r, i) {
    return t[e](i.fp, r);
  };
  const rr = function (t, e, r) {
    return t.setAttribute(e, r);
  };
  var ir = function (t, e) {
    return U(t[e]) ? tr : N(t[e]) && t.setAttribute ? rr : Ke;
  };
  var nr = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  };
  var sr = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  };
  var ar = function (t, e) {
    let r = e._pt;
    let i = '';
    if (!t && e.b) i = e.b;
    else if (t === 1 && e.e) i = e.e;
    else {
      for (; r;) {
        (i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i),
        (r = r._next);
      }
      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  };
  var or = function (t, e) {
    for (let r = e._pt; r;) r.r(t, r.d), (r = r._next);
  };
  var ur = function (t, e, r, i) {
    for (var n, s = this._pt; s;) (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
  };
  var hr = function (t) {
    for (var e, r, i = this._pt; i;) {
      (r = i._next),
      (i.p === t && !i.op) || i.op === t ? Ft(this, i, '_pt') : i.dep || (e = 1),
      (i = r);
    }
    return !e;
  };
  const lr = function (t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  };
  var fr = function (t) {
    for (var e, r, i, n, s = t._pt; s;) {
      for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
      (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
      (s._next = r) ? (r._prev = s) : (n = s),
      (s = e);
    }
    t._pt = i;
  };
  var cr = (function () {
    function t(t, e, r, i, n, s, a, o, u) {
      (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = s || nr),
      (this.d = a || this),
      (this.set = o || Ke),
      (this.pr = u || 0),
      (this._next = t),
      t && (t._prev = this);
    }
    return (
      (t.prototype.modifier = function (t, e, r) {
        (this.mSet = this.mSet || this.set),
        (this.set = lr),
        (this.m = t),
        (this.mt = r),
        (this.tween = e);
      }),
      t
    );
  }());
  xt(
    `${gt
    }parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,
    t => (lt[t] = 1),
  ),
  (it.TweenMax = it.TweenLite = Je),
  (it.TimelineLite = it.TimelineMax = Ne),
  (i = new Ne({
    sortChildren: !1,
    defaults: P,
    autoRemoveChildren: !0,
    id: 'root',
    smoothChildTiming: !0,
  })),
  (S.stringFilter = ke);
  const pr = {
    registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(t => ve(t));
    },
    timeline(t) {
      return new Ne(t);
    },
    getTweensOf(t, e) {
      return i.getTweensOf(t, e);
    },
    getProperty(t, e, r, i) {
      Y(t) && (t = ae(t)[0]);
      const n = yt(t || {}).get;
      const s = r ? kt : Dt;
      return (
        r === 'native' && (r = ''),
        t
          ? e
            ? s(((pt[e] && pt[e].get) || n)(t, e, r, i))
            : function (e, r, i) {
              return s(((pt[e] && pt[e].get) || n)(t, e, r, i));
            }
          : t
      );
    },
    quickSetter(t, e, r) {
      if ((t = ae(t)).length > 1) {
        const i = t.map(t => mr.quickSetter(t, e, r));
        const n = i.length;
        return function (t) {
          for (let e = n; e--;) i[e](t);
        };
      }
      t = t[0] || {};
      const s = pt[e];
      const a = yt(t);
      const o = (a.harness && (a.harness.aliases || {})[e]) || e;
      const u = s
        ? function (e) {
          const i = new s();
          (h._pt = 0), i.init(t, r ? e + r : e, h, 0, [t]), i.render(1, i), h._pt && or(1, h);
        }
        : a.set(t, o);
      return s
        ? u
        : function (e) {
          return u(t, o, r ? e + r : e, a, 1);
        };
    },
    isTweening(t) {
      return i.getTweensOf(t, !0).length > 0;
    },
    defaults(t) {
      return t && t.ease && (t.ease = Ie(t.ease, P.ease)), Pt(P, t || {});
    },
    config(t) {
      return Pt(S, t || {});
    },
    registerEffect(t) {
      const e = t.name;
      const r = t.effect;
      const i = t.plugins;
      const n = t.defaults;
      const s = t.extendTimeline;
      (i || '').split(',').forEach(t => t && !pt[t] && !it[t] && ot(`${e} effect requires ${t} plugin.`)),
      (_t[e] = function (t, e, i) {
        return r(ae(t), At(e || {}, n), i);
      }),
      s
          && (Ne.prototype[e] = function (t, r, i) {
            return this.add(_t[e](t, V(r) ? r : (i = r) && {}, this), i);
          });
    },
    registerEase(t, e) {
      Se[t] = Ie(e);
    },
    parseEase(t, e) {
      return arguments.length ? Ie(t, e) : Se;
    },
    getById(t) {
      return i.getById(t);
    },
    exportRoot(t, e) {
      void 0 === t && (t = {});
      let r;
      let n;
      const s = new Ne(t);
      for (
        s.smoothChildTiming = j(t.smoothChildTiming),
        i.remove(s),
        s._dp = 0,
        s._time = s._tTime = i._time,
        r = i._first;
        r;

      ) {
        (n = r._next),
        (!e && !r._dur && r instanceof Je && r.vars.onComplete === r._targets[0])
            || jt(s, r, r._start - r._delay),
        (r = n);
      }
      return jt(i, s, 0), s;
    },
    utils: {
      wrap: function t(e, r, i) {
        const n = r - e;
        return H(e)
          ? ce(e, t(0, e.length), r)
          : ee(i, t => ((n + ((t - e) % n)) % n) + e);
      },
      wrapYoyo: function t(e, r, i) {
        const n = r - e;
        const s = 2 * n;
        return H(e)
          ? ce(e, t(0, e.length - 1), r)
          : ee(i, t => e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t));
      },
      distribute: ue,
      random: fe,
      snap: le,
      normalize(t, e, r) {
        return _e(t, e, 0, 1, r);
      },
      getUnit: ie,
      clamp(t, e, r) {
        return ee(r, r => re(t, e, r));
      },
      splitColor: we,
      toArray: ae,
      selector(t) {
        return (
          (t = ae(t)[0] || ot('Invalid scope') || {}),
          function (e) {
            const r = t.current || t.nativeElement || t;
            return ae(
              e,
              r.querySelectorAll ? r : r === t ? ot('Invalid scope') || a.createElement('div') : t,
            );
          }
        );
      },
      mapRange: _e,
      pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (t) {
          return e.reduce((t, e) => e(t), t);
        };
      },
      unitize(t, e) {
        return function (r) {
          return t(parseFloat(r)) + (e || ie(r));
        };
      },
      interpolate: function t(e, r, i, n) {
        let s = isNaN(e + r)
          ? 0
          : function (t) {
            return (1 - t) * e + t * r;
          };
        if (!s) {
          let a;
          let o;
          let u;
          let h;
          let l;
          const f = Y(e);
          const c = {};
          if ((!0 === i && (n = 1) && (i = null), f)) (e = { p: e }), (r = { p: r });
          else if (H(e) && !H(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
            h--,
            (s = function (t) {
              t *= h;
              const e = Math.min(l, ~~t);
              return u[e](t - e);
            }),
            (i = r);
          } else n || (e = St(H(e) ? [] : {}, e));
          if (!u) {
            for (a in r) We.call(c, e, a, 'get', r[a]);
            s = function (t) {
              return or(t, c) || (f ? e.p : e);
            };
          }
        }
        return ee(i, s);
      },
      shuffle: oe,
    },
    install: st,
    effects: _t,
    ticker: Ae,
    updateRoot: Ne.updateRoot,
    plugins: pt,
    globalTimeline: i,
    core: {
      PropTween: cr,
      globals: ut,
      Tween: Je,
      Timeline: Ne,
      Animation: Xe,
      getCache: yt,
      _removeLinkedListItem: Ft,
      suppressOverwrites(t) {
        return (r = t);
      },
    },
  };
  xt('to,from,fromTo,delayedCall,set,killTweensOf', t => (pr[t] = Je[t])),
  Ae.add(Ne.updateRoot),
  (h = pr.to({}, { duration: 0 }));
  const _r = function (t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
    return r;
  };
  const dr = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init(t, r, i) {
        i._onInit = function (t) {
          let i; let
            n;
          if (
            (Y(r)
                && ((i = {}),
                xt(r, t => (i[t] = 1)),
                (r = i)),
            e)
          ) {
            for (n in ((i = {}), r)) i[n] = e(r[n]);
            r = i;
          }
          !(function (t, e) {
            let r;
            let i;
            let n;
            const s = t._targets;
            for (r in e) {
              for (i = s.length; i--;) {
                (n = t._ptLookup[i][r])
                    && (n = n.d)
                    && (n._pt && (n = _r(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r));
              }
            }
          }(t, r));
        };
      },
    };
  };
  var mr = pr.registerPlugin(
    {
      name: 'attr',
      init(t, e, r, i, n) {
        let s; let
          a;
        for (s in e) {
          (a = this.add(
            t,
            'setAttribute',
            `${t.getAttribute(s) || 0}`,
            e[s],
            i,
            n,
            0,
            0,
            s,
          )) && (a.op = s),
          this._props.push(s);
        }
      },
    },
    {
      name: 'endArray',
      init(t, e) {
        for (let r = e.length; r--;) this.add(t, r, t[r] || 0, e[r]);
      },
    },
    dr('roundProps', he),
    dr('modifiers'),
    dr('snap', le),
  ) || pr;
  (Je.version = Ne.version = mr.version = '3.7.0'), (o = 1), W() && Ce();
  Se.Power0,
  Se.Power1,
  Se.Power2,
  Se.Power3,
  Se.Power4,
  Se.Linear,
  Se.Quad,
  Se.Cubic,
  Se.Quart,
  Se.Quint,
  Se.Strong,
  Se.Elastic,
  Se.Back,
  Se.SteppedEase,
  Se.Bounce,
  Se.Sine,
  Se.Expo,
  Se.Circ;
  let gr;
  let vr;
  let yr;
  let Tr;
  let xr;
  let wr;
  let br;
  const Mr = {};
  const Or = 180 / Math.PI;
  const Dr = Math.PI / 180;
  const kr = Math.atan2;
  const Ar = /([A-Z])/g;
  const Cr = /(?:left|right|width|margin|padding|x)/i;
  const Sr = /[\s,\(]\S/;
  const Pr = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' };
  const Er = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  };
  const zr = function (t, e) {
    return e.set(e.t, e.p, t === 1 ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  };
  const Fr = function (t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  };
  const Rr = function (t, e) {
    const r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  };
  const Ir = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  };
  const Br = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  };
  const Lr = function (t, e, r) {
    return (t.style[e] = r);
  };
  const qr = function (t, e, r) {
    return t.style.setProperty(e, r);
  };
  const Yr = function (t, e, r) {
    return (t._gsap[e] = r);
  };
  const Ur = function (t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  };
  const Xr = function (t, e, r, i, n) {
    const s = t._gsap;
    (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
  };
  const Nr = function (t, e, r, i, n) {
    const s = t._gsap;
    (s[e] = r), s.renderTransform(n, s);
  };
  let Vr = 'transform';
  let jr = `${Vr}Origin`;
  const Wr = function (t, e) {
    const r = vr.createElementNS
      ? vr.createElementNS((e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), t)
      : vr.createElement(t);
    return r.style ? r : vr.createElement(t);
  };
  const Gr = function t(e, r, i) {
    const n = getComputedStyle(e);
    return (
      n[r]
        || n.getPropertyValue(r.replace(Ar, '-$1').toLowerCase())
        || n.getPropertyValue(r)
        || (!i && t(e, Hr(r) || r, 1))
        || ''
    );
  };
  const Qr = 'O,Moz,ms,Ms,Webkit'.split(',');
  var Hr = function (t, e, r) {
    const i = (e || xr).style;
    let n = 5;
    if (t in i && !r) return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Qr[n] + t in i););
    return n < 0 ? null : (n === 3 ? 'ms' : n >= 0 ? Qr[n] : '') + t;
  };
  const Zr = function () {
    typeof window !== 'undefined'
        && window.document
        && ((gr = window),
        (vr = gr.document),
        (yr = vr.documentElement),
        (xr = Wr('div') || { style: {} }),
        Wr('div'),
        (Vr = Hr(Vr)),
        (jr = `${Vr}Origin`),
        (xr.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
        (br = !!Hr('perspective')),
        (Tr = 1));
  };
  const $r = function t(e) {
    let r;
    const i = Wr(
      'svg',
      (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns'))
            || 'http://www.w3.org/2000/svg',
    );
    const n = this.parentNode;
    const s = this.nextSibling;
    const a = this.style.cssText;
    if ((yr.appendChild(i), i.appendChild(this), (this.style.display = 'block'), e)) {
      try {
        (r = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
      } catch (t) {}
    } else this._gsapBBox && (r = this._gsapBBox());
    return (
      n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
      yr.removeChild(i),
      (this.style.cssText = a),
      r
    );
  };
  const Jr = function (t, e) {
    for (let r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  };
  const Kr = function (t) {
    let e;
    try {
      e = t.getBBox();
    } catch (r) {
      e = $r.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === $r || (e = $r.call(t, !0)),
      !e || e.width || e.x || e.y
        ? e
        : {
          x: +Jr(t, ['x', 'cx', 'x1']) || 0,
          y: +Jr(t, ['y', 'cy', 'y1']) || 0,
          width: 0,
          height: 0,
        }
    );
  };
  const ti = function (t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Kr(t));
  };
  const ei = function (t, e) {
    if (e) {
      const r = t.style;
      e in Mr && e !== jr && (e = Vr),
      r.removeProperty
        ? ((e.substr(0, 2) !== 'ms' && e.substr(0, 6) !== 'webkit') || (e = `-${e}`),
        r.removeProperty(e.replace(Ar, '-$1').toLowerCase()))
        : r.removeAttribute(e);
    }
  };
  const ri = function (t, e, r, i, n, s) {
    const a = new cr(t._pt, e, r, 0, 1, s ? Br : Ir);
    return (t._pt = a), (a.b = i), (a.e = n), t._props.push(r), a;
  };
  const ii = { deg: 1, rad: 1, turn: 1 };
  const ni = function t(e, r, i, n) {
    let s;
    let a;
    let o;
    let u;
    let h = parseFloat(i) || 0;
    const l = (`${i}`).trim().substr((`${h}`).length) || 'px';
    const f = xr.style;
    const c = Cr.test(r);
    const p = e.tagName.toLowerCase() === 'svg';
    const _ = (p ? 'client' : 'offset') + (c ? 'Width' : 'Height');
    const d = 100;
    const m = n === 'px';
    const g = n === '%';
    return n === l || !h || ii[n] || ii[l]
      ? h
      : (l !== 'px' && !m && (h = t(e, r, i, 'px')),
      (u = e.getCTM && ti(e)),
      (!g && l !== '%') || (!Mr[r] && !~r.indexOf('adius'))
        ? ((f[c ? 'width' : 'height'] = d + (m ? l : n)),
        (a = ~r.indexOf('adius') || (n === 'em' && e.appendChild && !p) ? e : e.parentNode),
        u && (a = (e.ownerSVGElement || {}).parentNode),
        (a && a !== vr && a.appendChild) || (a = vr.body),
        (o = a._gsap) && g && o.width && c && o.time === Ae.time
          ? wt((h / o.width) * d)
          : ((g || l === '%') && (f.position = Gr(e, 'position')),
          a === e && (f.position = 'static'),
          a.appendChild(xr),
          (s = xr[_]),
          a.removeChild(xr),
          (f.position = 'absolute'),
          c && g && (((o = yt(a)).time = Ae.time), (o.width = a[_])),
          wt(m ? (s * h) / d : s && h ? (d / s) * h : 0)))
        : ((s = u ? e.getBBox()[c ? 'width' : 'height'] : e[_]),
        wt(g ? (h / s) * d : (h / 100) * s)));
  };
  const si = function (t, e, r, i) {
    let n;
    return (
      Tr || Zr(),
      e in Pr && e !== 'transform' && ~(e = Pr[e]).indexOf(',') && (e = e.split(',')[0]),
      Mr[e] && e !== 'transform'
        ? ((n = mi(t, i)),
        (n = e !== 'transformOrigin'
          ? n[e]
          : n.svg
            ? n.origin
            : `${gi(Gr(t, jr))} ${n.zOrigin}px`))
        : (!(n = t.style[e]) || n === 'auto' || i || ~(`${n}`).indexOf('calc('))
            && (n = (hi[e] && hi[e](t, e, r)) || Gr(t, e) || Tt(t, e) || (e === 'opacity' ? 1 : 0)),
      r && !~(`${n}`).trim().indexOf(' ') ? ni(t, e, n, r) + r : n
    );
  };
  const ai = function (t, e, r, i) {
    if (!r || r === 'none') {
      const n = Hr(e, t, 1);
      const s = n && Gr(t, n, 1);
      s && s !== r ? ((e = n), (r = s)) : e === 'borderColor' && (r = Gr(t, 'borderTopColor'));
    }
    let a;
    let o;
    let u;
    let h;
    let l;
    let f;
    let c;
    let p;
    let _;
    let d;
    let m;
    let g;
    const v = new cr(this._pt, t.style, e, 0, 1, ar);
    let y = 0;
    let T = 0;
    if (
      ((v.b = r),
      (v.e = i),
      (r += ''),
      (i += '') === 'auto' && ((t.style[e] = i), (i = Gr(t, e) || i), (t.style[e] = r)),
      ke((a = [r, i])),
      (i = a[1]),
      (u = (r = a[0]).match(J) || []),
      (i.match(J) || []).length)
    ) {
      for (; (o = J.exec(i));) {
        (c = o[0]),
        (_ = i.substring(y, o.index)),
        l
          ? (l = (l + 1) % 5)
          : (_.substr(-5) !== 'rgba(' && _.substr(-5) !== 'hsla(') || (l = 1),
        c !== (f = u[T++] || '')
              && ((h = parseFloat(f) || 0),
              (m = f.substr((`${h}`).length)),
              (g = c.charAt(1) === '=' ? +(`${c.charAt(0)}1`) : 0) && (c = c.substr(2)),
              (p = parseFloat(c)),
              (d = c.substr((`${p}`).length)),
              (y = J.lastIndex - d.length),
              d || ((d = d || S.units[e] || m), y === i.length && ((i += d), (v.e += d))),
              m !== d && (h = ni(t, e, f, d) || 0),
              (v._pt = {
                _next: v._pt,
                p: _ || T === 1 ? _ : ',',
                s: h,
                c: g ? g * p : p - h,
                m: (l && l < 4) || e === 'zIndex' ? Math.round : 0,
              }));
      }
      v.c = y < i.length ? i.substring(y, i.length) : '';
    } else v.r = e === 'display' && i === 'none' ? Br : Ir;
    return tt.test(i) && (v.e = 0), (this._pt = v), v;
  };
  const oi = {
    top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%',
  };
  const ui = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      let r;
      let i;
      let n;
      const s = e.t;
      const a = s.style;
      let o = e.u;
      const u = s._gsap;
      if (o === 'all' || !0 === o) (a.cssText = ''), (i = 1);
      else {
        for (n = (o = o.split(',')).length; --n > -1;) { (r = o[n]), Mr[r] && ((i = 1), (r = r === 'transformOrigin' ? jr : Vr)), ei(s, r); }
      }
      i && (ei(s, Vr), u && (u.svg && s.removeAttribute('transform'), mi(s, 1), (u.uncache = 1)));
    }
  };
  var hi = {
    clearProps(t, e, r, i, n) {
      if (n.data !== 'isFromStart') {
        const s = (t._pt = new cr(t._pt, e, r, 0, 0, ui));
        return (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1;
      }
    },
  };
  const li = [1, 0, 0, 1, 0, 0];
  const fi = {};
  const ci = function (t) {
    return t === 'matrix(1, 0, 0, 1, 0, 0)' || t === 'none' || !t;
  };
  const pi = function (t) {
    const e = Gr(t, Vr);
    return ci(e)
      ? li
      : e
        .substr(7)
        .match($)
        .map(wt);
  };
  const _i = function (t, e) {
    let r;
    let i;
    let n;
    let s;
    const a = t._gsap || yt(t);
    const o = t.style;
    let u = pi(t);
    return a.svg && t.getAttribute('transform')
      ? (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(
        ',',
      )
          === '1,0,0,1,0,0'
        ? li
        : u
      : (u !== li
            || t.offsetParent
            || t === yr
            || a.svg
            || ((n = o.display),
            (o.display = 'block'),
            ((r = t.parentNode) && t.offsetParent)
              || ((s = 1), (i = t.nextSibling), yr.appendChild(t)),
            (u = pi(t)),
            n ? (o.display = n) : ei(t, 'display'),
            s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : yr.removeChild(t))),
      e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  };
  const di = function (t, e, r, i, n, s) {
    let a;
    let o;
    let u;
    const h = t._gsap;
    const l = n || _i(t, !0);
    const f = h.xOrigin || 0;
    const c = h.yOrigin || 0;
    const p = h.xOffset || 0;
    const _ = h.yOffset || 0;
    const d = l[0];
    const m = l[1];
    const g = l[2];
    const v = l[3];
    let y = l[4];
    let T = l[5];
    const x = e.split(' ');
    let w = parseFloat(x[0]) || 0;
    let b = parseFloat(x[1]) || 0;
    r
      ? l !== li
          && (o = d * v - m * g)
          && ((u = w * (-m / o) + b * (d / o) - (d * T - m * y) / o),
          (w = w * (v / o) + b * (-g / o) + (g * T - v * y) / o),
          (b = u))
      : ((w = (a = Kr(t)).x + (~x[0].indexOf('%') ? (w / 100) * a.width : w)),
      (b = a.y + (~(x[1] || x[0]).indexOf('%') ? (b / 100) * a.height : b))),
    i || (!1 !== i && h.smooth)
      ? ((y = w - f),
      (T = b - c),
      (h.xOffset = p + (y * d + T * g) - y),
      (h.yOffset = _ + (y * m + T * v) - T))
      : (h.xOffset = h.yOffset = 0),
    (h.xOrigin = w),
    (h.yOrigin = b),
    (h.smooth = !!i),
    (h.origin = e),
    (h.originIsAbsolute = !!r),
    (t.style[jr] = '0px 0px'),
    s
          && (ri(s, h, 'xOrigin', f, w),
          ri(s, h, 'yOrigin', c, b),
          ri(s, h, 'xOffset', p, h.xOffset),
          ri(s, h, 'yOffset', _, h.yOffset)),
    t.setAttribute('data-svg-origin', `${w} ${b}`);
  };
  var mi = function (t, e) {
    const r = t._gsap || new Ue(t);
    if ('x' in r && !e && !r.uncache) return r;
    let i;
    let n;
    let s;
    let a;
    let o;
    let u;
    let h;
    let l;
    let f;
    let c;
    let p;
    let _;
    let d;
    let m;
    let g;
    let v;
    let y;
    let T;
    let x;
    let w;
    let b;
    let M;
    let O;
    let D;
    let k;
    let A;
    let C;
    let P;
    let E;
    let z;
    let F;
    let R;
    const I = t.style;
    const B = r.scaleX < 0;
    const L = 'px';
    const q = 'deg';
    const Y = Gr(t, jr) || '0';
    return (
      (i = n = s = u = h = l = f = c = p = 0),
      (a = o = 1),
      (r.svg = !(!t.getCTM || !ti(t))),
      (m = _i(t, r.svg)),
      r.svg
          && ((D = (!r.uncache || Y === '0px 0px') && !e && t.getAttribute('data-svg-origin')),
          di(t, D || Y, !!D || r.originIsAbsolute, !1 !== r.smooth, m)),
      (_ = r.xOrigin || 0),
      (d = r.yOrigin || 0),
      m !== li
          && ((T = m[0]),
          (x = m[1]),
          (w = m[2]),
          (b = m[3]),
          (i = M = m[4]),
          (n = O = m[5]),
          m.length === 6
            ? ((a = Math.sqrt(T * T + x * x)),
            (o = Math.sqrt(b * b + w * w)),
            (u = T || x ? kr(x, T) * Or : 0),
            (f = w || b ? kr(w, b) * Or + u : 0) && (o *= Math.abs(Math.cos(f * Dr))),
            r.svg && ((i -= _ - (_ * T + d * w)), (n -= d - (_ * x + d * b))))
            : ((R = m[6]),
            (z = m[7]),
            (C = m[8]),
            (P = m[9]),
            (E = m[10]),
            (F = m[11]),
            (i = m[12]),
            (n = m[13]),
            (s = m[14]),
            (h = (g = kr(R, E)) * Or),
            g
                && ((D = M * (v = Math.cos(-g)) + C * (y = Math.sin(-g))),
                (k = O * v + P * y),
                (A = R * v + E * y),
                (C = M * -y + C * v),
                (P = O * -y + P * v),
                (E = R * -y + E * v),
                (F = z * -y + F * v),
                (M = D),
                (O = k),
                (R = A)),
            (l = (g = kr(-w, E)) * Or),
            g
                && ((v = Math.cos(-g)),
                (F = b * (y = Math.sin(-g)) + F * v),
                (T = D = T * v - C * y),
                (x = k = x * v - P * y),
                (w = A = w * v - E * y)),
            (u = (g = kr(x, T)) * Or),
            g
                && ((D = T * (v = Math.cos(g)) + x * (y = Math.sin(g))),
                (k = M * v + O * y),
                (x = x * v - T * y),
                (O = O * v - M * y),
                (T = D),
                (M = k)),
            h && Math.abs(h) + Math.abs(u) > 359.9 && ((h = u = 0), (l = 180 - l)),
            (a = wt(Math.sqrt(T * T + x * x + w * w))),
            (o = wt(Math.sqrt(O * O + R * R))),
            (g = kr(M, O)),
            (f = Math.abs(g) > 2e-4 ? g * Or : 0),
            (p = F ? 1 / (F < 0 ? -F : F) : 0)),
          r.svg
            && ((D = t.getAttribute('transform')),
            (r.forceCSS = t.setAttribute('transform', '') || !ci(Gr(t, Vr))),
            D && t.setAttribute('transform', D))),
      Math.abs(f) > 90
          && Math.abs(f) < 270
          && (B
            ? ((a *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
      (r.x = i
          - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0)
          + L),
      (r.y = n
          - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0)
          + L),
      (r.z = s + L),
      (r.scaleX = wt(a)),
      (r.scaleY = wt(o)),
      (r.rotation = wt(u) + q),
      (r.rotationX = wt(h) + q),
      (r.rotationY = wt(l) + q),
      (r.skewX = f + q),
      (r.skewY = c + q),
      (r.transformPerspective = p + L),
      (r.zOrigin = parseFloat(Y.split(' ')[2]) || 0) && (I[jr] = gi(Y)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = S.force3D),
      (r.renderTransform = r.svg ? Mi : br ? bi : yi),
      (r.uncache = 0),
      r
    );
  };
  var gi = function (t) {
    return `${(t = t.split(' '))[0]} ${t[1]}`;
  };
  const vi = function (t, e, r) {
    const i = ie(e);
    return wt(parseFloat(e) + parseFloat(ni(t, 'x', `${r}px`, i))) + i;
  };
  var yi = function (t, e) {
    (e.z = '0px'), (e.rotationY = e.rotationX = '0deg'), (e.force3D = 0), bi(t, e);
  };
  const Ti = '0deg';
  const xi = '0px';
  const wi = ') ';
  var bi = function (t, e) {
    const r = e || this;
    const i = r.xPercent;
    const n = r.yPercent;
    let s = r.x;
    let a = r.y;
    let o = r.z;
    const u = r.rotation;
    const h = r.rotationY;
    const l = r.rotationX;
    const f = r.skewX;
    const c = r.skewY;
    const p = r.scaleX;
    const _ = r.scaleY;
    const d = r.transformPerspective;
    const m = r.force3D;
    const g = r.target;
    const v = r.zOrigin;
    let y = '';
    const T = (m === 'auto' && t && t !== 1) || !0 === m;
    if (v && (l !== Ti || h !== Ti)) {
      let x;
      let w = parseFloat(h) * Dr;
      const b = Math.sin(w);
      const M = Math.cos(w);
      (w = parseFloat(l) * Dr),
      (x = Math.cos(w)),
      (s = vi(g, s, b * x * -v)),
      (a = vi(g, a, -Math.sin(w) * -v)),
      (o = vi(g, o, M * x * -v + v));
    }
    d !== xi && (y += `perspective(${d}${wi}`),
    (i || n) && (y += `translate(${i}%, ${n}%) `),
    (T || s !== xi || a !== xi || o !== xi)
          && (y
            += o !== xi || T
              ? `translate3d(${s}, ${a}, ${o}) `
              : `translate(${s}, ${a}${wi}`),
    u !== Ti && (y += `rotate(${u}${wi}`),
    h !== Ti && (y += `rotateY(${h}${wi}`),
    l !== Ti && (y += `rotateX(${l}${wi}`),
    (f === Ti && c === Ti) || (y += `skew(${f}, ${c}${wi}`),
    (p === 1 && _ === 1) || (y += `scale(${p}, ${_}${wi}`),
    (g.style[Vr] = y || 'translate(0, 0)');
  };
  var Mi = function (t, e) {
    let r;
    let i;
    let n;
    let s;
    let a;
    const o = e || this;
    const u = o.xPercent;
    const h = o.yPercent;
    const l = o.x;
    const f = o.y;
    let c = o.rotation;
    let p = o.skewX;
    let _ = o.skewY;
    const d = o.scaleX;
    const m = o.scaleY;
    const g = o.target;
    const v = o.xOrigin;
    const y = o.yOrigin;
    const T = o.xOffset;
    const x = o.yOffset;
    const w = o.forceCSS;
    let b = parseFloat(l);
    let M = parseFloat(f);
    (c = parseFloat(c)),
    (p = parseFloat(p)),
    (_ = parseFloat(_)) && ((p += _ = parseFloat(_)), (c += _)),
    c || p
      ? ((c *= Dr),
      (p *= Dr),
      (r = Math.cos(c) * d),
      (i = Math.sin(c) * d),
      (n = Math.sin(c - p) * -m),
      (s = Math.cos(c - p) * m),
      p
              && ((_ *= Dr),
              (a = Math.tan(p - _)),
              (n *= a = Math.sqrt(1 + a * a)),
              (s *= a),
              _ && ((a = Math.tan(_)), (r *= a = Math.sqrt(1 + a * a)), (i *= a))),
      (r = wt(r)),
      (i = wt(i)),
      (n = wt(n)),
      (s = wt(s)))
      : ((r = d), (s = m), (i = n = 0)),
    ((b && !~(`${l}`).indexOf('px')) || (M && !~(`${f}`).indexOf('px')))
          && ((b = ni(g, 'x', l, 'px')), (M = ni(g, 'y', f, 'px'))),
    (v || y || T || x)
          && ((b = wt(b + v - (v * r + y * n) + T)), (M = wt(M + y - (v * i + y * s) + x))),
    (u || h)
          && ((a = g.getBBox()),
          (b = wt(b + (u / 100) * a.width)),
          (M = wt(M + (h / 100) * a.height))),
    (a = `matrix(${r},${i},${n},${s},${b},${M})`),
    g.setAttribute('transform', a),
    w && (g.style[Vr] = a);
  };
  const Oi = function (t, e, r, i, n, s) {
    let a;
    let o;
    const u = 360;
    const h = Y(n);
    const l = parseFloat(n) * (h && ~n.indexOf('rad') ? Or : 1);
    let f = s ? l * s : l - i;
    const c = `${i + f}deg`;
    return (
      h
          && ((a = n.split('_')[1]) === 'short' && (f %= u) !== f % 180 && (f += f < 0 ? u : -360),
          a === 'cw' && f < 0
            ? (f = ((f + 36e9) % u) - ~~(f / u) * u)
            : a === 'ccw' && f > 0 && (f = ((f - 36e9) % u) - ~~(f / u) * u)),
      (t._pt = o = new cr(t._pt, e, r, i, f, zr)),
      (o.e = c),
      (o.u = 'deg'),
      t._props.push(r),
      o
    );
  };
  const Di = function (t, e) {
    for (const r in e) t[r] = e[r];
    return t;
  };
  const ki = function (t, e, r) {
    let i;
    let n;
    let s;
    let a;
    let o;
    let u;
    let h;
    const l = Di({}, r._gsap);
    const f = r.style;
    for (n in (l.svg
      ? ((s = r.getAttribute('transform')),
      r.setAttribute('transform', ''),
      (f[Vr] = e),
      (i = mi(r, 1)),
      ei(r, Vr),
      r.setAttribute('transform', s))
      : ((s = getComputedStyle(r)[Vr]), (f[Vr] = e), (i = mi(r, 1)), (f[Vr] = s)),
    Mr)) {
      (s = l[n]) !== (a = i[n])
          && 'perspective,force3D,transformOrigin,svgOrigin'.indexOf(n) < 0
          && ((o = ie(s) !== (h = ie(a)) ? ni(r, n, s, h) : parseFloat(s)),
          (u = parseFloat(a)),
          (t._pt = new cr(t._pt, i, n, o, u - o, Er)),
          (t._pt.u = h || 0),
          t._props.push(n));
    }
    Di(i, l);
  };
  xt('padding,margin,Width,Radius', (t, e) => {
    const r = 'Top';
    const i = 'Right';
    const n = 'Bottom';
    const s = 'Left';
    const a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(r => (e < 2 ? t + r : `border${r}${t}`));
    hi[e > 1 ? `border${t}` : t] = function (t, e, r, i, n) {
      let s; let
        o;
      if (arguments.length < 4) {
        return (
          (s = a.map(e => si(t, e, r))),
          (o = s.join(' ')).split(s[0]).length === 5 ? s[0] : o
        );
      }
      (s = (`${i}`).split(' ')),
      (o = {}),
      a.forEach((t, e) => (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0])),
      t.init(e, o, n);
    };
  });
  let Ai;
  let Ci;
  let Si;
  const Pi = {
    name: 'css',
    register: Zr,
    targetTest(t) {
      return t.style && t.nodeType;
    },
    init(t, e, r, i, n) {
      let s;
      let a;
      let o;
      let u;
      let h;
      let l;
      let f;
      let c;
      let p;
      let _;
      let d;
      let m;
      let g;
      let v;
      let y;
      let T;
      let x;
      let w;
      let b;
      const M = this._props;
      const O = t.style;
      const D = r.vars.startAt;
      for (f in (Tr || Zr(), e)) {
        if (f !== 'autoRound' && ((a = e[f]), !pt[f] || !Ge(f, e, r, i, t, n))) {
          if (
            ((h = typeof a),
            (l = hi[f]),
            h === 'function' && (h = typeof (a = a.call(r, i, t, n))),
            h === 'string' && ~a.indexOf('random(') && (a = pe(a)),
            l)
          ) { l(this, t, f, a, r) && (y = 1); } else if (f.substr(0, 2) === '--') {
            (s = (`${getComputedStyle(t).getPropertyValue(f)}`).trim()),
            (a += ''),
            (Oe.lastIndex = 0),
            Oe.test(s) || ((c = ie(s)), (p = ie(a))),
            p ? c !== p && (s = ni(t, f, s, p) + p) : c && (a += c),
            this.add(O, 'setProperty', s, a, i, n, 0, 0, f),
            M.push(f);
          } else if (h !== 'undefined') {
            if (
              (D && f in D
                ? ((s = typeof D[f] === 'function' ? D[f].call(r, i, t, n) : D[f]),
                f in S.units && !ie(s) && (s += S.units[f]),
                (`${s}`).charAt(1) === '=' && (s = si(t, f)))
                : (s = si(t, f)),
              (u = parseFloat(s)),
              (_ = h === 'string' && a.charAt(1) === '=' ? +(`${a.charAt(0)}1`) : 0)
                  && (a = a.substr(2)),
              (o = parseFloat(a)),
              f in Pr
                  && (f === 'autoAlpha'
                    && (u === 1 && si(t, 'visibility') === 'hidden' && o && (u = 0),
                    ri(
                      this,
                      O,
                      'visibility',
                      u ? 'inherit' : 'hidden',
                      o ? 'inherit' : 'hidden',
                      !o,
                    )),
                  f !== 'scale'
                    && f !== 'transform'
                    && ~(f = Pr[f]).indexOf(',')
                    && (f = f.split(',')[0])),
              (d = f in Mr))
            ) {
              if (
                (m
                    || (((g = t._gsap).renderTransform && !e.parseTransform)
                      || mi(t, e.parseTransform),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt = new cr(
                      this._pt,
                      O,
                      Vr,
                      0,
                      1,
                      g.renderTransform,
                      g,
                      0,
                      -1,
                    )).dep = 1)),
                f === 'scale')
              ) {
                (this._pt = new cr(
                  this._pt,
                  g,
                  'scaleY',
                  g.scaleY,
                  (_ ? _ * o : o - g.scaleY) || 0,
                )),
                M.push('scaleY', f),
                (f += 'X');
              } else {
                if (f === 'transformOrigin') {
                  (x = void 0),
                  (w = void 0),
                  (b = void 0),
                  (x = (T = a).split(' ')),
                  (w = x[0]),
                  (b = x[1] || '50%'),
                  (w !== 'top' && w !== 'bottom' && b !== 'left' && b !== 'right')
                        || ((T = w), (w = b), (b = T)),
                  (x[0] = oi[w] || w),
                  (x[1] = oi[b] || b),
                  (a = x.join(' ')),
                  g.svg
                    ? di(t, a, 0, v, 0, this)
                    : ((p = parseFloat(a.split(' ')[2]) || 0) !== g.zOrigin
                            && ri(this, g, 'zOrigin', g.zOrigin, p),
                    ri(this, O, f, gi(s), gi(a)));
                  continue;
                }
                if (f === 'svgOrigin') {
                  di(t, a, 1, v, 0, this);
                  continue;
                }
                if (f in fi) {
                  Oi(this, g, f, u, a, _);
                  continue;
                }
                if (f === 'smoothOrigin') {
                  ri(this, g, 'smooth', g.smooth, a);
                  continue;
                }
                if (f === 'force3D') {
                  g[f] = a;
                  continue;
                }
                if (f === 'transform') {
                  ki(this, a, t);
                  continue;
                }
              }
            } else f in O || (f = Hr(f) || f);
            if (d || ((o || o === 0) && (u || u === 0) && !Sr.test(a) && f in O)) {
              o || (o = 0),
              (c = (`${s}`).substr((`${u}`).length))
                    !== (p = ie(a) || (f in S.units ? S.units[f] : c)) && (u = ni(t, f, s, p)),
              (this._pt = new cr(
                this._pt,
                d ? g : O,
                f,
                u,
                _ ? _ * o : o - u,
                d || (p !== 'px' && f !== 'zIndex') || !1 === e.autoRound ? Er : Rr,
              )),
              (this._pt.u = p || 0),
              c !== p && ((this._pt.b = s), (this._pt.r = Fr));
            } else if (f in O) ai.call(this, t, f, s, a);
            else {
              if (!(f in t)) {
                at(f, a);
                continue;
              }
              this.add(t, f, s || t[f], a, i, n);
            }
            M.push(f);
          }
        }
      }
      y && fr(this);
    },
    get: si,
    aliases: Pr,
    getSetter(t, e, r) {
      const i = Pr[e];
      return (
        i && i.indexOf(',') < 0 && (e = i),
        e in Mr && e !== jr && (t._gsap.x || si(t, 'x'))
          ? r && wr === r
            ? e === 'scale'
              ? Ur
              : Yr
            : (wr = r || {}) && (e === 'scale' ? Xr : Nr)
          : t.style && !N(t.style[e])
            ? Lr
            : ~e.indexOf('-')
              ? qr
              : ir(t, e)
      );
    },
    core: { _removeProperty: ei, _getMatrix: _i },
  };
  (mr.utils.checkPrefix = Hr),
  (Si = xt(
    `${Ai = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent'
    },${
      Ci = 'rotation,rotationX,rotationY,skewX,skewY'
    },transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
    (t) => {
      Mr[t] = 1;
    },
  )),
  xt(Ci, (t) => {
    (S.units[t] = 'deg'), (fi[t] = 1);
  }),
  (Pr[Si[13]] = `${Ai},${Ci}`),
  xt(
    '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
    (t) => {
      const e = t.split(':');
      Pr[e[1]] = Si[e[0]];
    },
  ),
  xt('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', (t) => {
    S.units[t] = 'px';
  }),
  mr.registerPlugin(Pi);
  const Ei = mr.registerPlugin(Pi) || mr;
  Ei.core.Tween;
  const zi = (t, e, r, i) => {
    const n = t - r;
    const s = e - i;
    return n * n + s * s;
  };
  class Fi {
    constructor(t) {
      (this.DOM = { el: t }),
      (this.DOM.link = this.DOM.el.querySelector('a.menu__item-link')),
      (this.DOM.marquee = this.DOM.el.querySelector('.marquee')),
      (this.DOM.marqueeInner = this.DOM.marquee.querySelector('.marquee__inner-wrap')),
      (this.animationDefaults = { duration: 0.6, ease: 'expo' }),
      this.initEvents();
    }

    initEvents() {
      (this.onMouseEnterFn = t => this.mouseEnter(t)),
      this.DOM.link.addEventListener('mouseenter', this.onMouseEnterFn),
      (this.onMouseLeaveFn = t => this.mouseLeave(t)),
      this.DOM.link.addEventListener('mouseleave', this.onMouseLeaveFn);
    }

    mouseEnter(t) {
      const e = this.findClosestEdge(t);
      Ei.timeline({ defaults: this.animationDefaults })
        .set(this.DOM.marquee, { y: e === 'top' ? '-101%' : '101%' }, 0)
        .set(this.DOM.marqueeInner, { y: e === 'top' ? '101%' : '-101%' }, 0)
        .to([this.DOM.marquee, this.DOM.marqueeInner], { y: '0%' }, 0);
    }

    mouseLeave(t) {
      const e = this.findClosestEdge(t);
      Ei.timeline({ defaults: this.animationDefaults })
        .to(this.DOM.marquee, { y: e === 'top' ? '-101%' : '101%' }, 0)
        .to(this.DOM.marqueeInner, { y: e === 'top' ? '101%' : '-101%' }, 0);
    }

    findClosestEdge(t) {
      return ((t, e, r, i) => {
        const n = zi(t, e, r / 2, 0);
        const s = zi(t, e, r / 2, i);
        return Math.min(n, s) === n ? 'top' : 'bottom';
      })(
        t.pageX - this.DOM.el.offsetLeft,
        t.pageY - this.DOM.el.offsetTop,
        this.DOM.el.clientWidth,
        this.DOM.el.clientHeight,
      );
    }
  }
  new (class {
    constructor(t) {
      (this.DOM = { el: t }),
      (this.DOM.menuItems = this.DOM.el.querySelectorAll('.menu__item')),
      (this.menuItems = []),
      this.DOM.menuItems.forEach(t => this.menuItems.push(new Fi(t)));
    }
  })(document.querySelector('.menu'));
}());
