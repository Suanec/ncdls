define("libs/min/M.min.js", function (require, module, exports) {
  (Laya.Sprite, Laya.SkinnedMeshSprite3D, Laya.Sprite3D);
  var _u,
    _k,
    _v,
    SCR = Laya.Script3D,
    LS3D = Laya.Scene3D,
    Vec4 = Laya.Vector4;
  (!(function (t) {
    function i() {
      const t = [
        "push",
        "readUint16",
        "_cloneTo",
        "_sp3",
        "PixelLineSprite3D",
        "distance",
        "getForward",
        "destroy",
        "_ql",
        "_sl",
        "transform",
        "addChild",
        "leftToUp",
        "number",
        "27466900TfExQK",
        "shift",
        "reset",
        "_lap",
        "rotation",
        "_lookq",
        "Color",
        "cpuTail",
        "_iq",
        "lerp",
        "reduce",
        "lookAt",
        "parent",
        "abs",
        "_cell_list",
        "_pl",
        "z_min",
        "Byte",
        "floor",
        "arraybuffer",
        "_up",
        "length",
        "6460518IJjITG",
        "_sa",
        "scale",
        "Corps",
        "Quat",
        "setValue",
        "recover",
        "Vec3",
        "ref",
        "forEach",
        "_tm",
        "addLine",
        "_ss",
        "distanceSquared",
        "436564TYXHrN",
        "multiply",
        "removeLine",
        "add",
        "375347GVTHXp",
        "_ipa",
        "head",
        "position",
        "getOri",
        "5843079tVMswT",
        "clone",
        "getTail",
        "cloneTo",
        "ceil",
        "_v0",
        "17470enoKsW",
        "5IOkmwr",
        "get",
        "invert",
        "83SxObgN",
        "_ds3",
        "Res",
        "scene",
        "3EvmeNu",
        "Vector3",
        "6377368ABaLkB",
      ];
      return (i = function () {
        return t;
      })();
    }
    const _ = r;
    function r(t, s) {
      const e = i();
      return (r = function (t, s) {
        return ((t -= 449), e[t]);
      })(t, s);
    }
    ((function () {
      const t = r,
        s = i();
      for (;;)
        try {
          if (
            556990 ==
            -parseInt(t(463)) * (-parseInt(t(459)) / 2) +
              (-parseInt(t(467)) / 3) * (-parseInt(t(520)) / 4) +
              (parseInt(t(460)) / 5) * (parseInt(t(506)) / 6) +
              -parseInt(t(524)) / 7 +
              parseInt(t(469)) / 8 +
              parseInt(t(453)) / 9 +
              -parseInt(t(484)) / 10
          )
            break;
          s.push(s.shift());
        } catch (t) {
          s.push(s.shift());
        }
    })(),
      (t[_(509)] = class {
        constructor(t, h, a) {
          const l = _;
          ((this[l(500)] = 0),
            l(483) == typeof t && (t = W.LM[l(465)](t)),
            W.L.l(
              t,
              W.L.h(this, (t) => {
                const s = l;
                let e = new Laya[s(501)](t);
                this[s(498)] = new Array();
                for (let t = 0; t < e[s(505)] / 2; t += 3) {
                  var i = -W[s(514)].HF(e[s(471)]()),
                    r = W.ref.HF(e[s(471)]()),
                    n = W.ref.HF(e.readUint16()),
                    r = new W[s(513)](i, r, n);
                  (this[s(498)][s(470)](r), this[s(500)] > n && (this[s(500)] = n));
                }
                a.call(h);
              }),
              null,
              l(503),
            ));
        }
        [_(452)](t) {
          const s = _;
          return this[s(498)][t];
        }
        [_(461)](t, s, e) {
          const i = _;
          return (
            (t = this[i(452)](t)[i(454)]()),
            s && W[i(513)][i(521)](t, s, t),
            e && W.Vec3.transformQuat(t, e, t),
            t
          );
        }
      }));
    class v {
      constructor(t, s = 10, e = 0.1, i = 0, r) {
        const n = _;
        ((this[n(516)] = 10),
          (this[n(507)] = 0.1),
          (this[n(518)] = 0),
          (this._d = !1),
          (this[n(487)] = new Laya[n(468)]()),
          (this._iq = 0),
          (this[n(449)] = !1),
          (this[n(473)] = t),
          (this[n(516)] = s),
          (this[n(499)] = []),
          (this[n(479)] = []),
          (this._sa = e),
          (this[n(504)] = r),
          i && ((this[n(478)] = []), (this[n(492)] = i), (this._q = new W[n(510)]())));
      }
      [_(472)](t) {
        const s = _;
        ((t._tm = this[s(516)]), (t._sa = this[s(507)]));
      }
      get ["ss"]() {
        const t = _;
        return this[t(518)];
      }
      [_(455)](e, i, r) {
        const n = _;
        let h = !0;
        if (e <= this[n(518)]) {
          let s = 0;
          var a = this[n(479)];
          for (let t = a[n(505)] - 2; 0 <= t; t--) {
            var l = a[t];
            if (((s += l), s >= e)) {
              ((l = (s - e) / l),
                W.Vec3[n(493)](this[n(499)][t], this._pl[t + 1], l, i),
                this._iq && W[n(510)].slerp(this[n(478)][t], this[n(478)][t + 1], l, r),
                (h = !1));
              break;
            }
          }
        }
        h && ((i.x = NaN), this[n(492)] && (r.x = NaN));
      }
      [_(491)]() {
        const e = _;
        if (null !== (a = this[e(473)]) && void 0 !== a && a.active) {
          var i = this[e(492)];
          let t = this._d ? new Laya[e(490)](1, 0, 0) : null;
          const l = this[e(473)][e(480)];
          let s = l[e(451)];
          const o = this[e(499)];
          var r,
            n,
            h = o.length,
            a = W[e(513)][e(519)](s, this[e(487)]);
          Math[e(497)](a) > this._sa
            ? (s[e(456)](this[e(487)]),
              (r = o[e(485)]()),
              s.cloneTo(r),
              o[e(470)](r),
              (r = o[h - 2]),
              (a = W[e(513)][e(475)](s, r)),
              this[e(479)][e(470)](a),
              this[e(479)][e(485)](),
              0 != i &&
                ((a = this[e(478)].shift()),
                1 == i ? l[e(488)][e(456)](a) : this._lookq(l, r, s, a),
                this[e(478)].push(a)),
              this._d &&
                (this[e(464)] ||
                  (this[e(464)] = new Laya[e(474)](Math[e(457)](this[e(516)] / this[e(507)]) + 1)),
                this._ds3.parent || this[e(473)][e(466)][e(481)](this[e(464)]),
                this._ds3[e(517)](s, r, t, t[e(454)]())),
              (this[e(518)] = this[e(479)][e(494)]((t, s) => t + s, 0)),
              this._ss > this[e(516)] && this._d && this[e(464)].removeLine(0))
            : 1 < h &&
              (s[e(456)](o[h - 1]),
              (r = o[h - 2]),
              0 != i &&
                ((n = this[e(478)][h - 1]),
                1 == i ? l[e(488)][e(456)](n) : this[e(489)](l, o[h - 2], s, n)),
              (n = W[e(513)].distance(r, s)),
              (this._ss = this[e(518)] - this._sl[h - 2] + n),
              (this[e(479)][h - 2] = n),
              this._d && this[e(464)].setLine(h - 2, s, r, t, t[e(454)]()));
        }
      }
      ["_lookq"](t, s, e, i) {
        const r = _;
        let n;
        (this[r(504)] ? (n = this[r(504)]) : ((n = v[r(458)]), t.getUp(n)),
          W[r(510)][r(495)](s, e, n, i),
          W[r(510)][r(462)](i, i));
      }
      set [_(450)](t) {
        const s = _;
        this[s(473)] = t;
      }
      get [_(450)]() {
        const t = _;
        return this[t(473)];
      }
      [_(486)]() {
        const s = _;
        (this._d &&
          this[s(464)] &&
          this[s(479)][s(515)](() => {
            const t = s;
            this[t(464)][t(522)](0);
          }),
          (this[s(449)] = !1));
        var e = this[s(507)],
          i = Math[s(502)](this._tm / e),
          r = this[s(473)][s(480)][s(451)];
        const n = this[s(473)][s(480)][s(488)];
        var h = v[s(458)];
        (this[s(473)].transform[s(476)](h), W.Vec3[s(508)](h, e, h));
        var a = this[s(492)];
        const l = this._pl,
          o = this[s(479)];
        if (0 == l.length)
          for (let t = 0; t < i; t++)
            (l[s(470)](new Laya[s(468)]()),
              o[s(470)](0),
              a && this._ql[s(470)](new Laya.Quaternion()));
        this._d &&
          (this[s(464)] ||
            (this[s(464)] = new Laya.PixelLineSprite3D(
              Math[s(457)](this[s(516)] / this[s(507)]) + 1,
            )),
          this[s(464)][s(496)] || this[s(473)][s(466)][s(481)](this[s(464)]));
        for (let t = 0; t < i; t++) {
          var c = l[t],
            u = i - t - 1;
          (W.Vec3[s(508)](h, u, c),
            W[s(513)][s(523)](r, c, c),
            (o[t] = e),
            a && n[s(456)](this[s(478)][t]),
            this._d &&
              0 < t &&
              this[s(464)][s(517)](
                l[t - 1],
                l[t],
                new Laya[s(490)](+t / i, 0, 0, 1),
                new Laya[s(490)](1, 0, 0, 1),
              ));
        }
        this._ss = W[s(513)][s(475)](l[0], r);
      }
      [_(477)]() {
        const t = _;
        (this.reset(), (this[t(473)] = null), this[t(464)][t(477)]());
      }
      ["pause"]() {
        const t = _;
        this[t(449)] = !0;
      }
      [_(512)]() {
        const t = _;
        this[t(449)] = !1;
      }
      set ["up"](t) {
        const s = _;
        this[s(504)] = t;
      }
      get ["is_pausing"]() {
        const t = _;
        return this[t(449)];
      }
      [_(482)]() {
        const i = _;
        this[i(504)] = W[i(513)].up;
        let r;
        (this._d && (r = new Laya.Color(0, 0, 1)),
          this[i(499)][i(515)]((t, s) => {
            const e = i;
            (t[e(511)](-t.y, t.x, t.z),
              this._d && 0 < s && this[e(464)][e(517)](this[e(499)][s - 1], t, r, r[e(454)]()));
          }),
          this._ql &&
            (this[i(478)][i(515)]((t, s) => {
              const e = i;
              0 < s && this._lookq(this[e(473)][e(480)], this[e(499)][s - 1], this[e(499)][s], t);
            }),
            (this[i(478)][0] = this._ql[1][i(454)]())));
      }
    }
    ((v[_(458)] = new Laya[_(468)]()), (t.Snake = v));
  })((_u = _u || {})),
    (function (o) {
      var k = n;
      !(function () {
        for (var t = n, s = i(); ;)
          try {
            if (
              993498 ==
              +parseInt(t(358)) * (-parseInt(t(315)) / 2) +
                (parseInt(t(255)) / 3) * (parseInt(t(356)) / 4) +
                (parseInt(t(215)) / 5) * (parseInt(t(316)) / 6) +
                -parseInt(t(450)) / 7 +
                parseInt(t(263)) / 8 +
                parseInt(t(374)) / 9 +
                (-parseInt(t(239)) / 10) * (parseInt(t(456)) / 11)
            )
              break;
            s.push(s.shift());
          } catch (t) {
            s.push(s.shift());
          }
      })();
      class l {
        constructor(...t) {
          var s = n;
          ((this.x = t[0]),
            (this.y = t[1]),
            (this.w = t[2]),
            (this.h = t[3]),
            (this.sx = t[4]),
            (this.sy = t[5]),
            (this.sw = t[6]),
            (this.sh = t[7]),
            (this[s(295)] = this.sw / this.sh),
            (this.rw = this.w / this.sw),
            (this.rh = this.h / this.sh));
        }
      }
      class c {
        constructor(t, s, e, i) {
          var r = n;
          ((this.id = t), (this[r(375)] = s), (this.ci = e), (this.h = i));
        }
        set [k(440)](t) {
          this.s = t;
        }
        get [k(440)]() {
          return this.s;
        }
        set [k(262)](t) {
          this.p = t;
        }
        get [k(262)]() {
          return this.p;
        }
      }
      class a extends SCR {
        [k(245)](t) {
          this[k(475)] = t;
        }
        [k(459)]() {
          var t = k;
          Laya[t(473)][t(289)] == this[t(475)][t(406)] && this[t(475)] && this[t(475)][t(378)]();
        }
      }
      o[k(338)] = class {
        constructor(t, s, e, i, r = 2e3, n = !1) {
          var h = k;
          ((this[h(406)] = 0),
            (this[h(344)] = 0),
            (this[h(455)] = [0, 1, 2, 3, 2, 1]),
            (this[h(357)] = r),
            (this[h(301)] = s),
            (this[h(353)] = new Array()),
            (this[h(209)] = new Array()),
            (this[h(420)] = new Array()));
          var a = Laya[h(386)][h(269)](h(238)),
            l = new Float32Array(new Array(32 * r))[h(241)](0),
            s = new Uint16Array(new Array(6 * r))[h(241)](0);
          ((this[h(483)] = Laya[h(501)][h(412)](a, l, s)),
            this[h(483)][h(334)](this[h(353)]),
            this[h(483)][h(417)](this[h(209)]),
            this[h(483)][h(431)][h(352)](W[h(355)][h(226)]([1e6, 1e6, 1e6])),
            this[h(483)][h(431)][h(484)](W[h(355)][h(226)]([-1e6, -1e6, -1e6])),
            (this[h(246)] = new Array(6 * r)),
            n
              ? ((this[h(233)] = new Laya[h(404)]()),
                (this[h(233)][h(499)] = 1),
                (this[h(233)][h(468)] = !0),
                (this[h(233)][h(235)] = 2))
              : ((this[h(233)] = new Laya[h(410)]()), (this[h(233)][h(499)] = 2)),
            (this[h(419)] = new Laya[h(242)](this[h(483)])),
            (this[h(419)][h(472)][h(371)] = this[h(233)]),
            this[h(348)](t, e, i));
        }
        get [k(411)]() {
          return this[k(419)];
        }
        set [k(303)](t) {
          var s = k;
          this[s(233)][s(308)] = t ? 519 : 513;
        }
        [k(348)](t, n, h) {
          var s = k;
          let e = W.LM[s(379)](t);
          W.L.c(
            e,
            W.L.h(this, (i) => {
              var r = s,
                t = e[r(458)](0, e[r(471)]("/") + 1) + i[r(442)][r(448)];
              Laya[r(286)][r(345)](
                t,
                W.L.h(this, (t) => {
                  var s = r;
                  (this[s(307)](i, t), (this[s(233)][s(319)] = t));
                  let e = this[s(419)][s(479)](a);
                  (e[s(245)](this), h[s(218)](n));
                }),
              );
            }),
            null,
            s(398),
          );
        }
        [k(307)](t, s) {
          var e = k;
          this[e(291)] = new Map();
          var i,
            r = t[e(433)],
            n = s[e(213)],
            h = s[e(373)];
          for (i in r) {
            var a = r[i],
              a = new l(
                a[e(497)].x / n,
                a[e(497)].y / h,
                a[e(497)].w / n,
                a[e(497)].h / h,
                a[e(265)].x / n,
                a[e(265)].y / h,
                a[e(488)].w / n,
                a[e(488)].h / h,
              );
            this[e(291)][e(359)](i[e(458)](0, i[e(281)](".")), a);
          }
        }
        [k(335)]() {
          var t = k,
            s = Laya[t(473)][t(289)];
          0 < s - this[t(406)] && (this[t(406)] = s);
        }
        [k(320)](t, s, r = 1) {
          var n = k;
          this[n(335)]();
          var e = this[n(344)];
          let h = W[n(355)][n(226)](s),
            a = 0;
          (this[n(464)](t, r, (t, s) => {
            var e = n,
              i = this[e(344)];
            (this[e(333)](i, t, h, s, r), this[e(344)]++, a++);
          }),
            (s = this[n(420)][n(275)]));
          let i = new c(s, t, e, r);
          return ((i[n(440)] = a), (i[n(262)] = h), this[n(420)][n(467)](i));
        }
        [k(464)](t, s, e) {
          var i = k;
          let r = new Array();
          var n = t[i(243)]("##");
          let h = 0,
            a = 0;
          for (; h < n[i(275)];) {
            var l = n[h],
              o = l[i(275)];
            if (0 < o) {
              let t = l[a];
              (0 < h % 2 && (t = "##" + t + "##"), r[i(467)](t));
            }
            (a++, a >= o && (h++, (a = 0)));
          }
          let c = 0;
          var u = r[i(275)];
          let _ = !1;
          for (let t = 0; t < u - 1; t++) {
            var v,
              p = this[i(451)](r[t], s);
            (0 < p || _) && ((v = this[i(451)](r[t + 1], s)), (c += 0.5 * p + 0.5 * v), (_ = !0));
          }
          let d = 0;
          _ = !1;
          for (let t = 0; t < u; t++) {
            var f,
              y = r[t];
            (e(y, 0.5 * c - d),
              t < u - 1 &&
                (0 < (f = this[i(451)](y, s)) || _) &&
                ((y = this[i(451)](r[t + 1], s)), (d += 0.5 * f + 0.5 * y), (_ = !0)));
          }
          r[i(275)] = 0;
        }
        [k(451)](t, s) {
          var e = k;
          return this[e(291)][e(208)](t) ? this[e(291)][e(259)](t)[e(295)] * s : 0;
        }
        ["FF"](t, s) {
          var e = k;
          let i = new W[e(355)]();
          return (
            1 == this[e(301)].y
              ? i[e(480)](t, 0, s)
              : -1 == this[e(301)].x
                ? i[e(480)](0, s, t)
                : -1 == this[e(301)].z && i[e(480)](t, s, 0),
            i
          );
        }
        [k(333)](a, l, o, c, u) {
          var _ = k,
            v = 4 * a,
            p = 6 * a;
          if (this[_(291)][_(208)](l)) {
            ((l = u * (a = this[_(291)][_(259)](l))[_(295)]),
              (u *= a.rh),
              (l = (l * a.rw) / 2),
              (u /= 2));
            let t,
              s,
              e,
              i,
              r = this.FF[_(368)](this);
            i =
              -1 == this[_(301)].x
                ? ((t = r(u, l + c)), (s = r(u, -l + c)), (e = r(-u, l + c)), r(-u, -l + c))
                : ((t = r(l + c, u)), (s = r(-l + c, u)), (e = r(l + c, -u)), r(-l + c, -u));
            let n = W[_(355)][_(320)];
            ((u = this[_(353)]),
              n(o, t, u[0 + v]),
              n(o, s, u[1 + v]),
              n(o, e, u[2 + v]),
              n(o, i, u[3 + v]));
            let h = this[_(209)];
            (h[0 + v][_(480)](a.x, a.y),
              h[1 + v][_(480)](a.x + a.w, a.y),
              h[2 + v][_(480)](a.x, a.y + a.h),
              h[3 + v][_(480)](a.x + a.w, a.y + a.h));
            for (let t = 0; t < 6; t++) this[_(246)][p + t] = v + this[_(455)][t];
          } else for (let t = 0; t < 6; t++) this[_(246)][p + t] = 0;
        }
        [k(359)](t, s, e, h) {
          var a = k;
          this[a(335)]();
          let l = this[a(420)][t];
          if (l) {
            s && (this[a(466)](t), (l[a(375)] = s));
            let i = l.ci,
              r = 0,
              n = null == e ? l[a(262)] : W[a(355)][a(226)](e);
            (null == h && (h = l.h),
              this[a(464)](l[a(375)], h, (t, s) => {
                var e = a;
                (r < l[e(440)] && this[e(333)](i++, t, n, s, h), r++);
              }));
          }
        }
        [k(466)](t) {
          var e = k;
          this[e(335)]();
          var i = this[e(420)][t];
          if (i) {
            let s = this[e(246)];
            for (let t = 0; t < i[e(440)]; t++) {
              var r = 6 * (i.ci + t);
              for (let t = 0; t < 6; t++) s[r + t] = 0;
            }
          }
        }
        [k(378)]() {
          var t = k;
          (this[t(483)][t(443)](this[t(353)]), this[t(483)][t(490)](this[t(209)]));
          var s = Uint16Array[t(226)](this[t(246)]);
          this[t(483)][t(264)](s);
        }
        [k(317)]() {
          var s = k;
          (this[s(353)][s(210)]((t) => {
            t[s(480)](0, 0, 0);
          }),
            this[s(209)][s(210)]((t) => {
              t[s(480)](0, 0);
            }));
          for (let t = 0; t < this[s(246)][s(275)]; t++) this[s(246)][t] = 0;
          ((this[s(420)][s(275)] = 0), (this[s(344)] = 0), this[s(378)](), this[s(411)][s(498)]());
        }
        [k(481)]() {
          var t = k;
          (Laya[t(292)][t(253)](this),
            (this[t(353)][t(275)] = 0),
            (this[t(209)][t(275)] = 0),
            (this[t(246)][t(275)] = 0),
            (this[t(420)][t(275)] = 0),
            this[t(419)][t(481)]());
        }
      };
      class u {
        constructor(e, t, i, r, s = W[k(355)][k(492)], n = !0, h) {
          var a = k;
          ((this[a(402)] = !1),
            (this._s = s),
            (this[a(340)] = n),
            (this.co = new M[a(381)](t, this, () => {
              var t = a,
                s = Math[t(234)](this.co[t(223)]) + 1;
              ((this.sn = new o[t(342)](e, Math[t(234)](this.co[t(223)]) + 1, 0.01 * s, 2, h)),
                (this[t(322)] = new Array()),
                e[t(457)] && e[t(457)] instanceof LS3D && (this[t(402)] = !0),
                r[t(218)](i));
            })));
        }
        [k(477)]() {
          var e = k;
          (this.sn[e(302)](),
            this[e(322)][e(210)]((t, s) => {
              this[e(270)](s + 1, t);
            }));
        }
        set [k(485)](t) {
          this._s = t;
        }
        [k(393)](t, s = 500, e, i, r) {
          Laya[k(384)].to(this, { _s: t }, s, e, r && W.L.h(i, r), 0, !0);
        }
        [k(368)](t) {
          var s = k;
          this[s(322)][s(467)](t);
        }
        [k(294)](t) {
          var s = k;
          -1 < (t = this[s(322)][s(281)](t)) && this[s(322)][s(493)](t, 1);
        }
        [k(305)](t = 1, s, e) {
          var i = k,
            r = this[i(322)][i(275)];
          ((t = Math[i(288)](t, r)), (t = this[i(322)][i(493)](r - t, t)), e && e[i(218)](s, t));
        }
        [k(317)]() {
          var t = k;
          (this.sn[t(317)](), (this[t(322)][t(275)] = 0));
        }
        [k(270)](s, e) {
          var i = k;
          if (e && !e[i(377)]) {
            var t = this._s;
            const h = this.co,
              a = this.sn;
            var r = h[i(432)](s),
              n = Math[i(234)](r.z * t.z),
              s = u[i(365)];
            a[i(230)](n, s, a._q);
            const l = u[i(500)];
            if (
              (l[i(480)](r.x * t.x, r.y * t.y, 0),
              W[i(355)][i(283)](l, a._q, l),
              W[i(355)][i(320)](s, l, s),
              e[i(457)] instanceof LS3D)
            ) {
              let t = W[i(423)][i(366)](s, e);
              this[i(340)] && t[i(237)](a._q);
            } else {
              let t = W[i(423)][i(250)](s, e);
              this[i(340)] && t[i(216)](a._q);
            }
          }
        }
        [k(405)](t) {
          var s = k;
          this.sn[s(257)] = t;
        }
        set ["_d"](t) {
          this.sn._d = t;
        }
        [k(426)]() {
          var t = k;
          this.sn[t(426)]();
        }
        [k(424)]() {
          var t = k;
          this.sn[t(424)]();
        }
        get [k(427)]() {
          var t = k;
          return this.sn[t(427)];
        }
        set ["up"](t) {
          this.sn.up = t;
        }
        [k(372)]() {
          var t = k;
          this.sn[t(372)]();
        }
      }
      ((u[k(365)] = new Laya[k(346)]()), (u[k(500)] = new Laya[k(346)]()), (o[k(382)] = u));
      class _ extends SCR {
        constructor() {
          var t = k;
          (super(),
            (this._s = 1),
            (this[t(278)] = !1),
            (this[t(322)] = new Array()),
            (this[t(409)] = new Array()),
            (this[t(249)] = new Array()),
            (this[t(461)] = new Array()));
        }
        set ["_d"](t) {
          this.sn._d = t;
        }
        set [k(227)](t) {
          this._s = t;
        }
        set [k(271)](t) {
          this[k(278)] = t;
        }
        get [k(390)]() {
          return this[k(256)];
        }
        [k(236)]() {
          var e = k;
          this[e(411)] = this[e(217)];
          var i = this[e(411)][e(313)];
          this[e(256)] = this[e(411)][e(247)](i - 1)[e(328)];
          var r = this[e(411)][e(247)](0);
          let n = 0;
          const h = this[e(409)];
          for (let t = 1, s = i - 1; t < s; t++) {
            var a = this[e(411)][e(247)](t);
            const l = a[e(397)];
            (this[e(322)][e(467)](a),
              (a = l[e(441)][e(362)]()),
              h[e(467)](a),
              this[e(249)][e(467)](l[e(429)][e(362)]()),
              (a = W[e(355)][e(221)](1 == t ? r[e(397)][e(441)] : h[t - 2], a)),
              (n += a),
              this[e(461)][e(467)](a));
          }
          ((this[e(244)] = n),
            (i = 1.1 * n),
            this.sn || (this.sn = new o[e(342)](r, i, i / 50, 1)));
        }
        [k(222)]() {}
        [k(317)]() {
          var t = k;
          this.sn[t(317)]();
        }
        [k(459)]() {
          var r = k;
          let n = 0;
          var t = null == this.sn.ss ? 0 : this.sn.ss;
          let h = 1;
          (this[r(278)] && t <= this[r(244)] && (h = Math[r(288)](t / this[r(244)], 1)),
            this.sn[r(302)](),
            this[r(322)][r(210)]((t, s) => {
              var e = r;
              n += this[e(461)][s] * this._s * h;
              var i = _[e(365)],
                s = this.sn._q;
              (this.sn[e(230)](n, i, s), W[e(423)][e(250)](i, t)[e(216)](s));
            }));
        }
        [k(251)]() {
          var e = k,
            i = this[e(256)][e(436)];
          for (let t = 1, s = i[e(275)]; t < s; t++) {
            const r = i[t][e(397)];
            ((r[e(441)] = this[e(409)][t - 1]), (r[e(429)] = this[e(249)][t - 1]));
          }
        }
        [k(425)]() {
          var t = k;
          ((this[t(322)][t(275)] = 0),
            (this[t(409)][t(275)] = 0),
            (this[t(249)][t(275)] = 0),
            (this[t(461)][t(275)] = 0),
            this.sn[t(481)]());
        }
      }
      function i() {
        var t = [
          "_char_dirt",
          "lateTimer",
          "atan2",
          "unbindOne",
          "rwh",
          "_fs",
          "shift",
          "flowY",
          "len",
          "loader",
          "_fw",
          "cpuTail",
          "topRender",
          "drawM",
          "unbind",
          "Ease",
          "_pa",
          "depthTest",
          "RecalculateNormals",
          "getForward",
          "_hw",
          "LiReS",
          "numChildren",
          "DegToRad",
          "1116HlUQiQ",
          "397524aCcvkm",
          "reset",
          "position",
          "albedoTexture",
          "add",
          "_s3d",
          "_cells",
          "back",
          "fieldOfView",
          "draw",
          "setPos",
          "_dir",
          "skinnedMeshRenderer",
          "Vec2",
          "_right",
          "lerp",
          "_size",
          "_UpChar",
          "getPositions",
          "_from_mesh",
          "s3d",
          "_fwn",
          "Text3D",
          "_cloneTo",
          "is_update_ro",
          "_p3",
          "Snake",
          "_last_size",
          "_used_count",
          "load",
          "Vector3",
          "uvm",
          "_loadTex",
          "_UPN",
          "dot",
          "_UFN",
          "setMax",
          "_last_points",
          "frameX",
          "Vec3",
          "175772ndkyMA",
          "_max_count",
          "2851SfzEph",
          "set",
          "_Fcam",
          "_cvn",
          "clone",
          "floor",
          "DrawTexture2D",
          "_v0",
          "LPOS",
          "_cl",
          "bind",
          "Stage",
          "_p0",
          "sharedMaterial",
          "leftToUp",
          "height",
          "16125183SAaFNX",
          "text",
          "_lpen",
          "destroyed",
          "post",
          "Res",
          "_md",
          "Corps",
          "Snaco",
          "Clamp",
          "Tween",
          "localScale",
          "VertexMesh",
          "TAIL_SC",
          "_vs",
          "addTo",
          "render",
          "Mesh",
          "_f2",
          "tweenTo",
          "addPen",
          "right",
          "_vec3_pool",
          "transform",
          "json",
          "_amd",
          "cos",
          "Event",
          "_uw",
          "LSC",
          "BlinnPhongMaterial",
          "setHead",
          "_last_from_frame",
          "MOUSE_MOVE",
          "Mathf",
          "_obps",
          "UnlitMaterial",
          "sp3",
          "_createMesh",
          "MOUSE_UP",
          "Lerp",
          "_left",
          "_EPN",
          "getUVs",
          "InverseTransformPoint",
          "_sp3",
          "_text_sp_list",
          "saps",
          "mxp",
          "TR3",
          "recover",
          "onDestroy",
          "pause",
          "is_pausing",
          "_f2_pre",
          "localRotation",
          "V4C",
          "bounds",
          "getOri",
          "frames",
          "addToS3",
          "_evn",
          "bones",
          "getRes",
          "_pj",
          "mat",
          "size",
          "localPosition",
          "meta",
          "setPositions",
          "sin",
          "tilingOffsetZ",
          "max",
          "size_max",
          "image",
          "round",
          "12754588FpaZte",
          "_spw",
          "RadSort",
          "SFishScr",
          "_O2",
          "_fl",
          "22lJDXpg",
          "parent",
          "substr",
          "onLateUpdate",
          "setMat",
          "_ods",
          "ceil",
          "_OP",
          "_pt",
          "AB3D",
          "del",
          "push",
          "_enableLighting",
          "subtract",
          "createPlane",
          "lastIndexOf",
          "meshRenderer",
          "timer",
          "drawTo",
          "mText3D",
          "_p1",
          "update",
          "mouseY",
          "addComponent",
          "setValue",
          "destroy",
          "_flist",
          "_mesh",
          "setMin",
          "scale",
          "cross",
          "sqrt",
          "sourceSize",
          "gFN",
          "setUVs",
          "material",
          "one",
          "splice",
          "rate",
          "points",
          "translate",
          "frame",
          "removeSelf",
          "renderMode",
          "_v1",
          "PrimitiveMesh",
          "has",
          "_last_uvs",
          "forEach",
          "_ltr",
          "SUB",
          "width",
          "_O1",
          "75bhOqQX",
          "WRO",
          "owner",
          "call",
          "loadByUrl",
          "_cam",
          "distance",
          "onEnable",
          "z_min",
          "mouseX",
          "ori_uv_x",
          "from",
          "lengthScale",
          "MOUSE_DOWN",
          "orthographicVerticalSize",
          "getTail",
          "orthographic",
          "_bps3",
          "_mat",
          "abs",
          "albedoIntensity",
          "onAwake",
          "LRO",
          "POSITION,NORMAL,UV",
          "3541930fKUXVM",
          "enable",
          "fill",
          "MeshSprite3D",
          "split",
          "_os",
          "init",
          "_last_faces",
          "getChildAt",
          "quintIn",
          "_obqs",
          "WPOS",
          "onDisable",
          "_pen",
          "clearAll",
          "SSnakeScr",
          "78tYJnhQ",
          "_mr",
          "head",
          "_enable",
          "get",
          "_cplist",
          "_div",
          "pos",
          "9494488tcVZRH",
          "setIndices",
          "spriteSourceSize",
          "_p2",
          "_bb",
          "setByCam",
          "getVertexDeclaration",
          "_set",
          "autoZero",
          "_iif",
          "pop",
          "camera",
          "length",
          "tan",
          "_erad",
          "_iz",
          "rev",
          "normalize",
          "indexOf",
          "_ch",
          "transformQuat",
          "_uvs",
          "gPN",
          "Texture2D",
          "cloneTo",
          "min",
          "currFrame",
          "_Slist",
        ];
        return (i = function () {
          return t;
        })();
      }
      function n(t, s) {
        var e = i();
        return (n = function (t, s) {
          return e[(t -= 208)];
        })(t, s);
      }
      ((_[k(365)] = new Laya[k(346)]()), (o[k(453)] = _));
      class s extends SCR {
        constructor() {
          var t = k;
          (super(),
            (this[t(332)] = 1),
            (this[t(447)] = 1),
            (this[t(261)] = 0),
            (this[t(343)] = 0),
            (this[t(322)] = new Array()),
            (this[t(409)] = new Array()),
            (this[t(249)] = new Array()),
            (this[t(461)] = new Array()));
        }
        set ["_d"](t) {
          this.sn._d = t;
        }
        get [k(390)]() {
          return this[k(256)];
        }
        [k(236)]() {
          var e = k;
          this[e(411)] = this[e(217)];
          var i = this[e(411)][e(313)];
          this[e(256)] = this[e(411)][e(247)](i - 1)[e(328)];
          var r = this[e(411)][e(247)](0);
          let n = 0;
          const h = this[e(409)];
          var t = (this[e(447)] = i - 1);
          for (let t = 1, s = i - 1; t < s; t++) {
            var a = this[e(411)][e(247)](t);
            const l = a[e(397)];
            (this[e(322)][e(467)](a),
              (a = l[e(441)][e(362)]()),
              h[e(467)](a),
              this[e(249)][e(467)](l[e(429)][e(362)]()),
              (a = W[e(355)][e(221)](1 == t ? r[e(397)][e(441)] : h[t - 2], a)),
              (n += a),
              this[e(461)][e(467)](a));
          }
          ((this[e(244)] = n),
            (this[e(261)] = n / t),
            (i = 1.1 * n),
            this.sn || (this.sn = new o[e(342)](r, i, i / (t * s[e(212)]), 1)));
        }
        [k(222)]() {}
        [k(339)](t) {}
        [k(317)](t) {
          var s = k;
          (this.sn[s(317)](), (this[s(440)] = t));
        }
        get [k(440)]() {
          return this[k(332)];
        }
        set [k(440)](t) {
          var s = k;
          ((t = W[s(408)][s(383)](t, 1, this[s(447)])), (this[s(332)] = t));
        }
        [k(459)]() {
          var r = k;
          this.sn[r(302)]();
          const n = this[r(332)],
            h = this[r(261)],
            a = -1 + s[r(387)],
            l = s[r(365)],
            o = this.sn._q,
            c = s.FN,
            u = this[r(343)] != n;
          (this[r(322)][r(210)]((s, e) => {
            var i = r;
            if (0 != e) {
              var t = e <= n ? e * h : n * h;
              if (u) {
                let t = s[i(397)][i(385)];
                ((e = c(Math[i(288)](e, n), 1, a, n)),
                  (t.x = e),
                  (t.y = e),
                  (s[i(397)][i(385)] = t));
              }
              (this.sn[i(230)](t, l, o), W[i(423)][i(250)](l, s)[i(216)](o));
            }
          }),
            (this[r(343)] = n));
        }
        [k(251)]() {
          var e = k,
            i = this[e(256)][e(436)];
          for (let t = 1, s = i[e(275)]; t < s; t++) {
            const r = i[t][e(397)];
            ((r[e(441)] = this[e(409)][t - 1]), (r[e(429)] = this[e(249)][t - 1]));
          }
        }
        [k(425)]() {
          var t = k;
          ((this[t(322)][t(275)] = 0),
            (this[t(409)][t(275)] = 0),
            (this[t(249)][t(275)] = 0),
            (this[t(461)][t(275)] = 0),
            this.sn[t(481)]());
        }
      }
      ((s[k(212)] = 4),
        (s[k(387)] = 0.2),
        (s.FN = Laya[k(306)][k(248)]),
        (s[k(365)] = new Laya[k(346)]()),
        (o[k(254)] = s),
        (o.AB = class {
          constructor(e, i, r, n, h, a, l) {
            var o = k;
            ((this[o(258)] = !0),
              W[o(364)][o(219)]([r, n], this, () => {
                var t = o,
                  s = Laya[t(501)][t(470)](1, 1, 1, 1);
                ((this[t(232)] = new Laya[t(242)](s)),
                  (this[t(233)] = new Laya[t(404)]()),
                  (this[t(232)][t(472)][t(371)] = this[t(233)]),
                  i[t(434)](this[t(232)]),
                  (this[t(252)] = Laya[t(300)][t(437)](n)),
                  (this[t(233)][t(319)] = Laya[t(300)][t(437)](r)),
                  e.on(Laya[t(401)][t(228)], this, () => {
                    this[t(304)]();
                  }),
                  e.on(Laya[t(401)][t(407)], this, () => {
                    this[t(304)]();
                  }),
                  e.on(Laya[t(401)][t(413)], h, a),
                  this[t(268)](i[t(274)]),
                  l && l[t(218)](h));
              }));
          }
          set [k(240)](t) {
            t && (this[k(258)] = t);
          }
          [k(268)](t) {
            var s = k;
            ((t[s(231)] = !0),
              (t = 2 * Math[s(276)]((W[s(408)][s(314)] * t[s(324)]) / 2) * t[s(229)]),
              W[s(423)][s(403)]([t * W[s(369)][s(494)] * 0.865, 1, 0.865 * t], this[s(232)]));
          }
          [k(325)](t, s, e = new W[k(430)](255)) {
            var i,
              r,
              n = k;
            this[n(258)] &&
              ((r = (i = this[n(233)][n(319)])[n(213)] / 640),
              (e = W[n(364)][n(474)](
                i,
                this[n(252)],
                Math[n(449)](t * r),
                Math[n(449)](s * r),
                e,
                1,
                1386 / W[n(369)][n(373)],
              )),
              (this[n(233)][n(319)] = e));
          }
          [k(304)](t = new W[k(430)](255)) {
            var s = k;
            this[s(258)] &&
              this[s(325)](
                W[s(369)][s(213)] - W[s(369)][s(224)],
                (1386 * (W[s(369)][s(373)] - W[s(369)][s(478)])) / W[s(369)][s(373)],
                t,
              );
          }
        }));
      class q extends SCR {
        constructor() {
          var t = k;
          (super(),
            (this.hw = 0.5),
            (this.sa = 0),
            (this[t(347)] = 0),
            (this[t(298)] = 0),
            (this[t(354)] = 0),
            (this[t(416)] = 0),
            (this[t(349)] = 0),
            (this[t(351)] = 0),
            (this[t(277)] = 0),
            (this.ul = 0),
            (this[t(495)] = []),
            (this[t(396)] = []),
            (this[t(299)] = 0),
            (this.rn = !0));
          const s = Laya[t(346)];
          if (!q[t(370)]) {
            const e = q;
            ((e[t(370)] = new s()),
              (e[t(476)] = new s()),
              (e[t(266)] = new s()),
              (e[t(341)] = new s()),
              (e[t(301)] = new s()),
              (e[t(337)] = new s()),
              (e[t(463)] = new s()),
              (e[t(214)] = new s()),
              (e[t(454)] = new s()),
              (e[t(428)] = new s()),
              (e[t(392)] = new s()),
              (e[t(438)] = new s()),
              (e[t(267)] = new s()),
              (e[t(327)] = new s()),
              (e[t(330)] = new s()),
              (e._f = new Laya[t(346)]()));
          }
          ((this[t(272)] = new s()),
            (this[t(415)] = new s()),
            (this[t(438)] = new s()),
            (this[t(360)] = new s()));
        }
        set [k(336)](t) {
          var s = k;
          ((this[s(321)] = t), (this[s(220)] = t[s(274)]));
        }
        [k(245)](t, s = 100, e = 0.5, i = 0, r = 0, n = !0) {
          var h = k;
          switch (
            ((this[h(321)] = t),
            (this[h(220)] = t[h(274)]),
            (this.hw = e),
            (this[h(422)] = s),
            (this[h(361)] = i),
            (this[h(435)] = r),
            (this.rn = n),
            this.am)
          ) {
            case 2:
              this[h(399)] = W[h(355)].up;
              break;
            case 3:
              this[h(399)] = W[h(355)][h(323)];
              break;
            case 4:
              this[h(399)] = W[h(355)][h(395)];
          }
          ((this[h(416)] = 0 == this[h(435)] ? 0 : this[h(435)] + 1),
            0 < this[h(416)] && (this[h(277)] = Math.PI / this[h(416)]),
            (r = this[h(285)](s)),
            (this[h(388)] = new Array(r)),
            (this[h(284)] = new Array(r)),
            (this[h(482)] = new Array(s)),
            (this[h(260)] = new Array(s)),
            (this[h(290)] = new Array(s)[h(241)](0)));
          const a = Laya[h(346)];
          for (let t = 0; t < s; t++)
            ((this[h(482)][t] = new a()),
              (this[h(260)][t] = new W[h(329)]()),
              this[h(396)][h(467)](new a()));
          ((n = Laya[h(386)][h(269)](h(238))),
            (r = new Float32Array(new Array(8 * r))[h(241)](0)),
            (this[h(296)] = new Uint16Array(this[h(489)](s))[h(241)](0)),
            (this[h(483)] = Laya[h(501)][h(412)](n, r, this[h(296)])),
            this[h(483)][h(334)](this[h(388)]),
            this[h(483)][h(417)](this[h(284)]),
            this[h(483)][h(431)][h(352)](W[h(355)][h(226)]([1e6, 1e6, 1e6])),
            this[h(483)][h(431)][h(484)](W[h(355)][h(226)]([-1e6, -1e6, -1e6])),
            this[h(439)] || (this[h(439)] = new Laya[h(404)]()),
            (this[h(419)] = new Laya[h(242)](this[h(483)])),
            t[h(434)](this[h(419)]),
            (this[h(419)][h(472)][h(371)] = this[h(439)]),
            this[h(439)][h(445)] && (this[h(225)] = this[h(439)][h(445)]),
            this[h(378)]());
        }
        [k(285)](t) {
          var s = k;
          return (
            4 * (t - 1) +
            Math[s(446)](t - 2, 0) * Math[s(446)](this[s(361)] - 1, 0) +
            2 * this[s(416)]
          );
        }
        [k(489)](t) {
          var s = k;
          return 6 * (t - 1) + Math[s(446)](t - 2, 0) * this[s(361)] * 3 + 3 * this[s(416)] * 2;
        }
        [k(311)](t) {
          var s = k;
          if (0 < this.sa) {
            var e = t * Math[s(462)](1 / this.sa),
              i = Math[s(363)](e);
            return i == (t = Math[s(462)](e))
              ? 0.5 * this[s(421)][i]
              : 0.5 * W[s(408)][s(414)](this[s(421)][i], this[s(421)][t], e - i);
          }
          return this.hw;
        }
        [k(378)]() {
          var u = k;
          const _ = Laya[u(346)];
          var v = this[u(495)][u(275)];
          ((this[u(349)] = this[u(285)](v)), (this[u(351)] = this[u(489)](v)));
          const p = this[u(296)];
          if (1 < v) {
            var d = this[u(220)][u(397)][u(318)];
            this[u(220)][u(397)][u(310)](this[u(360)]);
            var t = q;
            let i = t[u(370)],
              r = t[u(476)],
              n = t[u(266)],
              h = t[u(341)];
            var f = t[u(301)],
              y = t[u(337)],
              w = t[u(463)];
            let a = t[u(214)],
              l = t[u(454)];
            var g = t[u(428)],
              m = t[u(392)],
              x = t[u(438)];
            let o = t[u(267)],
              c = this[u(290)];
            for (let t = (c[0] = 0); t < v - 1; t++)
              c[t + 1] = c[t] + _[u(221)](this[u(495)][t + 1], this[u(495)][t]);
            var M = (this[u(299)] = c[v - 1]);
            this.ul = 0 == this[u(347)] ? this[u(299)] : 1;
            var L = t[u(327)],
              S = t[u(330)],
              b = t._f;
            const H = W[u(423)][u(418)];
            for (let e = 0; e < v - 1; e++) {
              var z = e + 1,
                V = this[u(311)](c[e] / M),
                N = this[u(311)](c[z] / M),
                A = this[u(495)][e];
              let t;
              this[u(399)]
                ? (t = this[u(399)])
                : ((t = L), _[u(331)](A, this[u(495)][z], 0.5, t), _[u(469)](d, t, t));
              var C = S;
              (_[u(469)](this[u(495)][z], A, C), _[u(280)](C, C));
              var I = b;
              if ((_[u(486)](C, t, I), _[u(280)](I, I), this[u(399)]))
                switch (this.am) {
                  case 2:
                    o[u(480)](I.x, I.z, 0);
                    break;
                  case 3:
                    o[u(480)](I.x, I.y, 0);
                    break;
                  case 4:
                    o[u(480)](I.y, I.z, 0);
                }
              else H(this[u(220)][u(397)], I, o);
              let s = this[u(260)][e];
              (s[u(480)](o.x, o.y),
                W[u(329)][u(280)](s, this[u(260)][e]),
                _[u(485)](I, V, f),
                _[u(320)](A, f, i),
                _[u(469)](A, f, r),
                _[u(485)](I, N, y),
                _[u(320)](this[u(495)][z], y, n),
                _[u(469)](this[u(495)][z], y, h));
              var O = e * (4 + Math[u(446)](this[u(361)] - 1, 0)) + this[u(416)],
                N = 6 * e + e * this[u(361)] * 3 + 3 * this[u(416)];
              if (
                ((this[u(482)][e] = I),
                0 < this[u(435)] &&
                  (0 == e
                    ? this[u(367)](A, I, C)
                    : e == v - 2 && this[u(282)](this[u(495)][z], I, C)),
                0 < e)
              ) {
                var P = e - 1,
                  T = O - 4 - Math[u(446)](this[u(361)] - 1, 0),
                  C = Math[u(487)](0.5 * _[u(350)](this[u(482)][P], this[u(482)][e]) + 0.5);
                if (
                  (_[u(320)](this[u(482)][P], this[u(482)][e], w),
                  _[u(280)](w, w),
                  _[u(485)](w, V / C, w),
                  _[u(320)](A, w, a),
                  _[u(469)](A, w, l),
                  0 == this[u(361)])
                )
                  (a[u(287)](this[u(388)][2 + T]),
                    a[u(287)](i),
                    l[u(287)](this[u(388)][3 + T]),
                    l[u(287)](r));
                else {
                  var U =
                      Math[u(293)](this[u(260)][e].y, this[u(260)][e].x) -
                      Math[u(293)](this[u(260)][e - 1].y, this[u(260)][e - 1].x),
                    U = W[u(408)][u(452)](U),
                    D = this[u(311)](c[e - 1] / M);
                  (_[u(485)](this[u(482)][P], 2 * D, g), _[u(485)](this[u(482)][e], 2 * D, m));
                  let s = N - 3 * this[u(361)];
                  if (
                    (U < 0
                      ? (a[u(287)](this[u(388)][2 + T]),
                        a[u(287)](i),
                        _[u(469)](a, g, this[u(388)][3 + T]),
                        _[u(469)](a, m, r),
                        (p[s + 0] = 2 + T),
                        (p[s + 2] = 5 + T),
                        (p[s + 1] = 3 + T))
                      : (_[u(320)](l, g, this[u(388)][2 + T]),
                        _[u(320)](l, m, i),
                        l[u(287)](this[u(388)][3 + T]),
                        l[u(287)](r),
                        (p[s + 0] = 3 + T),
                        (p[s + 2] = 2 + T),
                        (p[s + 1] = 4 + T)),
                    1 < this[u(361)])
                  ) {
                    (U < 0 && (p[s + 2] = 4 + T), (s += 3));
                    for (let t = 1; t < this[u(361)]; t++)
                      (_[u(331)](this[u(482)][P], this[u(482)][e], +t / this[u(361)], x),
                        _[u(280)](x, x),
                        _[u(485)](x, 2 * D, x),
                        U < 0
                          ? (_[u(469)](a, x, this[u(388)][3 + T + t]),
                            (p[s + 0] = 2 + T),
                            (p[s + 2] = 4 + T + t),
                            (p[s + 1] = 3 + T + t),
                            t == this[u(361)] - 1 && (p[s + 2] += 1))
                          : (_[u(320)](l, x, this[u(388)][3 + T + t]),
                            (p[s + 0] = 3 + T),
                            (p[s + 2] = 3 + T + t),
                            (p[s + 1] = 4 + T + t)),
                        this[u(284)][3 + T + t][u(480)](c[e] / this.ul, U < 0 ? 1 : 0),
                        (s += 3));
                  }
                }
              }
              (i[u(287)](this[u(388)][O + 0]),
                r[u(287)](this[u(388)][O + 1]),
                n[u(287)](this[u(388)][O + 2]),
                h[u(287)](this[u(388)][O + 3]),
                this[u(284)][O + 0][u(480)](c[e] / this.ul, 0),
                this[u(284)][O + 1][u(480)](c[e] / this.ul, 1),
                this[u(284)][O + 2][u(480)](c[z] / this.ul, 0),
                this[u(284)][O + 3][u(480)](c[z] / this.ul, 1),
                (p[N] = O + 0),
                (p[2 + N] = O + 2),
                (p[1 + N] = O + 3),
                (p[3 + N] = O + 0),
                (p[5 + N] = O + 3),
                (p[4 + N] = O + 1));
            }
          }
          const s = this[u(483)];
          (s[u(443)](this[u(388)]),
            s[u(490)](this[u(284)]),
            s[u(264)](p),
            this.rn && W[u(391)][u(309)](s));
        }
        [k(367)](s, e, t) {
          var i = k;
          const r = Laya[i(346)];
          r[i(485)](e, -1, this[i(272)]);
          var n = this[i(415)];
          r[i(485)](t, -1, n);
          let h = 0;
          (s[i(287)](this[i(388)][0]), (this[i(284)][0].x = 0.5));
          const a = this[i(296)];
          var l = this[i(416)];
          ((a[h + 0] = 0), (a[h + 2] = 1), (a[h + 1] = l), (h += 3));
          var o = this[i(311)](0),
            c = this[i(438)];
          for (let t = 1; t < l; t++) {
            (l % 2 == 0 && t == l / 2
              ? r[i(485)](n, o, c)
              : (t < 0.5 * l
                  ? r[i(331)](e, n, (2 * t) / l, c)
                  : r[i(331)](n, this[i(272)], (2 * t) / l - 1, c),
                r[i(280)](c, c),
                r[i(485)](c, o, c)),
              r[i(320)](s, c, this[i(388)][t]),
              (a[h + 0] = 0),
              (a[h + 2] = t + 1),
              (a[h + 1] = t),
              t == this[i(435)] && (a[h + 2] += 1));
            var u = this[i(277)] * t;
            (this[i(284)][t][i(480)](
              0.5 - 0.5 * Math[i(400)](u),
              (0.5 * Math[i(444)](u) * 2 * o) / this.ul,
            ),
              (h += 3));
          }
        }
        [k(282)](s, e, i) {
          var r = k;
          const n = Laya[r(346)];
          n[r(485)](e, -1, this[r(272)]);
          var h = this[r(416)],
            a = this[r(349)] - h;
          let l = this[r(351)] - 3 * h;
          s[r(287)](this[r(388)][a]);
          var o = this[r(290)][this[r(495)][r(275)] - 1];
          this[r(284)][a][r(480)](0.5, o);
          const c = this[r(296)];
          var u = this[r(438)];
          ((c[l + 0] = a), (c[l + 2] = a - 2), (c[l + 1] = 1 + a), (l += 3));
          var _ = this[r(311)](1);
          for (let t = 1; t < h; t++) {
            (h % 2 == 0 && t == h / 2
              ? n[r(485)](i, _, u)
              : (t < 0.5 * h
                  ? n[r(331)](e, i, (2 * t) / h, u)
                  : n[r(331)](i, this[r(272)], (2 * t) / h - 1, u),
                n[r(280)](u, u),
                n[r(485)](u, _, u)),
              n[r(320)](s, u, this[r(388)][a + t]),
              (c[l + 0] = a),
              (c[l + 2] = a + t),
              (c[l + 1] = a + t + 1),
              t == this[r(435)] && (c[l + 1] = a - 1));
            var v = this[r(277)] * t;
            (this[r(284)][a + t][r(480)](
              0.5 - 0.5 * Math[r(400)](v),
              (o - 0.5 * Math[r(444)](v)) / this.ul,
            ),
              (l += 3));
          }
        }
        [k(362)]() {
          var t = k;
          let s = new q();
          return (
            (s[t(439)] = this[t(439)]),
            (s.am = this.am),
            s[t(245)](this[t(321)], this[t(422)], this.hw, this[t(361)], this[t(435)], this.rn),
            s
          );
        }
        [k(481)]() {
          var t = k;
          (super[t(481)](),
            this[t(419)][t(481)](),
            this[t(483)][t(481)](),
            (this[t(321)] = null),
            (this[t(220)] = null));
        }
        get ["pn"]() {
          var t = k;
          return this[t(495)][t(275)];
        }
        [k(320)](t, s) {
          var e = k,
            i = this.pn == this[e(422)] ? this[e(495)][e(297)]() : this[e(396)][e(273)]();
          (t[e(287)](i), this[e(495)][e(467)](i));
        }
        [k(326)](t, s) {
          var e = k;
          s[e(287)](this[e(495)][t]);
        }
        [k(460)](t, s = !0) {
          var e = k;
          ((this[e(439)] = t),
            s ? (this[e(419)][e(472)][e(371)] = t) : (this[e(419)][e(472)][e(491)] = t),
            this[e(439)][e(445)] && (this[e(225)] = this[e(439)][e(445)]));
        }
        get [k(411)]() {
          return this[k(419)];
        }
        ["rm"](t) {
          var s = k;
          (this[s(396)][s(467)](this[s(495)][t]), this[s(495)][s(493)](t, 1));
        }
        [k(317)]() {
          var s = k;
          (this[s(396)][s(467)](...this[s(495)]),
            (this[s(495)][s(275)] = 0),
            this[s(388)][s(210)]((t) => {
              t[s(480)](0, 0, 0);
            }),
            this[s(284)][s(210)]((t) => {
              t[s(480)](0, 0);
            }),
            this[s(296)][s(241)](0),
            this[s(378)]());
        }
        [k(279)](t = !0) {
          var s = k;
          (t && this[s(317)](), this[s(419)][s(498)]());
        }
        [k(389)](t) {
          var s = k;
          ((this[s(321)] = t), (this[s(220)] = t[s(274)]), t[s(434)](this[s(419)]), this[s(378)]());
        }
      }
      ((o[k(312)] = q),
        (o[k(465)] = class {
          constructor(t, s, e = !0) {
            var i = k;
            ((this[i(211)] = new Array()),
              (this[i(376)] = new Array()),
              (this[i(380)] = 0.01),
              (this.rn = !0),
              (this._z = 0),
              (this[i(321)] = t),
              (this[i(380)] = s),
              (this.rn = e));
          }
          [k(394)](t, s, e = 100, i = 0.5, r = 0, n = 0) {
            var h = k;
            let a = new q();
            return (
              (a[h(439)] = t),
              (a.am = s),
              a[h(245)](this[h(321)], e, i, r, n, this.rn),
              a[h(279)](),
              this[h(376)][h(467)](a) - 1
            );
          }
          [k(325)](t, s, e = 0) {
            var i = k;
            let r = this[i(376)][e];
            if (!r) return s;
            s ||
              ((r[i(336)] = this[i(321)]),
              (s = r[i(362)]())[i(389)](this[i(321)]),
              this[i(211)][i(467)](s));
            var n = s[i(495)][i(275)];
            return (
              0 == n
                ? (s[i(419)][i(397)][i(496)](new W[i(355)](0, 2e-4 * this._z, 0), !1),
                  this._z++,
                  s[i(320)](t))
                : ((e = W[i(355)][i(221)](s[i(495)][Math[i(446)](n - 2, 0)], t)),
                  1 < n && e < this[i(380)] ? t[i(287)](s[i(495)][n - 1]) : s[i(320)](t)),
              s[i(378)](),
              s
            );
          }
          ["rm"](t) {
            var s = k,
              e = this[s(211)][s(281)](t);
            -1 < e && (this[s(211)][s(493)](e, 1), t[s(481)]());
          }
          [k(317)]() {
            var s = k;
            (this[s(211)][s(210)]((t) => {
              t[s(481)]();
            }),
              (this[s(211)][s(275)] = 0),
              (this._z = 0));
          }
          [k(389)](t) {
            this[k(321)] = t;
          }
        }));
    })((_u = _u || {})),
    (function (t) {
      const tt = i;
      ((function () {
        const t = i,
          s = r();
        for (;;)
          try {
            if (
              185707 ==
              -parseInt(t(250)) * (parseInt(t(294)) / 2) +
                parseInt(t(262)) / 3 +
                parseInt(t(289)) / 4 +
                (parseInt(t(268)) / 5) * (parseInt(t(278)) / 6) +
                (-parseInt(t(325)) / 7) * (parseInt(t(275)) / 8) +
                -parseInt(t(357)) / 9 +
                parseInt(t(314)) / 10
            )
              break;
            s.push(s.shift());
          } catch (t) {
            s.push(s.shift());
          }
      })(),
        (t.SlicerExtensions = class {
          static [tt(311)](t, s, e = null, i = null) {
            const r = tt;
            var n = new W[r(437)]();
            return (s[r(416)][r(322)](n), this[r(425)](t, s.transform.position, n, e, i));
          }
          static ["Slice"](t, s, e, i = null, r = null) {
            const n = tt,
              h = new u();
            h.initByPos(s, e);
            const a = t.transform[n(283)],
              l = a[n(390)]();
            var o = new W.M4();
            l[n(420)](o);
            var c = new W[n(437)]();
            return (
              W.M4[n(426)](o, e, c),
              W[n(437)][n(383)](c, c),
              (e = new W[n(437)]()),
              W[n(434)][n(258)](t[n(416)], s, e),
              h[n(263)](e, c),
              this[n(375)](t, h, i, r)
            );
          }
          static [tt(375)](t, s, e = null, i = null) {
            const r = tt;
            return ((i = i || new Vec4(0, 0, 1, 1)), z[r(429)](t, s, new n(i.x, i.y, i.z, i.w), e));
          }
        }));
      class b {
        constructor() {
          const t = tt;
          ((this[t(403)] = new Array()), (this[t(335)] = new Array()));
        }
        get ["hasUV"]() {
          const t = tt;
          return 0 < this[t(403)][t(385)]
            ? this.upperHull[0].hasUV
            : 0 < this[t(335)].length && this[t(335)][0][t(351)];
        }
        get [tt(401)]() {
          const t = tt;
          return 0 < this[t(403)][t(385)]
            ? this.upperHull[0].hasNormal
            : 0 < this.lowerHull.length && this[t(335)][0][t(401)];
        }
        get [tt(410)]() {
          const t = tt;
          return 0 < this[t(403)][t(385)]
            ? this[t(403)][0][t(410)]
            : 0 < this.lowerHull[t(385)] && this[t(335)][0][t(410)];
        }
        get [tt(298)]() {
          const t = tt;
          return 0 < this[t(403)][t(385)] && 0 < this[t(335)][t(385)];
        }
      }
      t[tt(321)] = b;
      class z {
        static ["Slice_1"](t, s, e, i) {
          const r = tt;
          var n = t[r(417)];
          if (null == n) return null;
          if (null == (t = t[r(364)])) return null;
          var h = t[r(318)];
          if (null == (t = n[r(384)])) return null;
          if (((n = t.subMeshCount), h.length != n)) return null;
          let a = h[r(385)];
          if (null != i)
            for (let t = 0; t < a; t++)
              if (h[t] == i) {
                a = t;
                break;
              }
          return z[r(348)](t, s, e, a);
        }
        static [tt(348)](s, i, e, r) {
          const n = tt;
          if (null == s) return null;
          var h = new Array(),
            a = new Array(),
            l = new Array(),
            o = new Array();
          (s[n(360)](h), s.getUVs(a), s[n(303)](l), s[n(343)](o));
          var c = s[n(372)];
          let u = new Array(c),
            _ = new Array(),
            v = new V();
          var p = h.length == a[n(385)],
            d = h[n(385)] == l[n(385)],
            f = h.length == o[n(385)];
          for (let t = 0; t < c; t++) {
            var y = new Uint16Array(s[n(331)]()),
              w = y[n(385)];
            let e = new b();
            e.vertexDeclaration = s[n(332)]();
            for (let t = 0; t < w; t += 3) {
              var g = y[t + 0],
                m = y[t + 1],
                x = y[t + 2];
              let s = new et(h[g], h[m], h[x]);
              if (
                (p && s[n(341)](a[g], a[m], a[x]),
                d && s[n(284)](l[g], l[m], l[x]),
                f && s[n(330)](o[g], o[m], o[x]),
                s[n(435)](i, v))
              ) {
                var W = v[n(424)],
                  L = v[n(354)],
                  S = v[n(378)];
                for (let t = 0; t < W; t++) e[n(403)][n(418)](v[n(403)][t]);
                for (let t = 0; t < L; t++) e.lowerHull[n(418)](v[n(335)][t]);
                for (let t = 0; t < S; t++) _[n(418)](v[n(249)][t][n(389)]());
              } else {
                ((g = i[n(409)](h[g])), (m = i[n(409)](h[m])), (x = i[n(409)](h[x])));
                let t = M[n(253)].ON;
                (g != M[n(253)].ON && (t = g),
                  m != M[n(253)].ON && (t = m),
                  x != M[n(253)].ON && (t = x),
                  (t == M[n(253)].UP || t == M[n(253)].ON ? e[n(403)] : e.lowerHull).push(s));
              }
            }
            u[t] = e;
          }
          for (let t = 0; t < u[n(385)]; t++)
            if (null != u[t] && u[t].isValid)
              return z.CreateFrom_1(u, z[n(247)](_, i[n(310)], e), r);
          return null;
        }
        static [tt(255)](s, t, e) {
          const i = tt;
          var r = s[i(385)];
          let n = 0,
            h = 0;
          for (let t = 0; t < r; t++)
            ((n += s[t].upperHull[i(385)]), (h += s[t].lowerHull[i(385)]));
          var a = z[i(269)](s, n, t, e),
            e = z[i(366)](s, h, t, e);
          return new l(a, e);
        }
        static [tt(269)](t, s, e, i) {
          const r = tt;
          return this[r(270)](t, s, e, i, !0);
        }
        static [tt(366)](t, s, e, i) {
          return this.CreateHull(t, s, e, i, !1);
        }
        static ["CreateHull"](s, t, i, r, n) {
          const h = tt;
          if (t <= 0) return null;
          var e = s[h(385)],
            a = null != i ? i[h(385)] : 0,
            t = 3 * (t + a),
            l = s[0][h(351)],
            o = s[0][h(401)],
            c = s[0].hasTangent;
          let u = new Array(t),
            _ = l ? new Array(t) : null,
            v = o ? new Array(t) : null,
            p = c ? new Array(t) : null,
            d = new Array(),
            f = 0;
          for (let t = 0; t < e; t++) {
            var y = n ? s[t][h(403)] : s[t][h(335)],
              w = y[h(385)];
            let i = new Array(3 * w);
            for (let s = 0, e = 0; s < w; s++, e += 3) {
              let t = y[s];
              var g = f + 0,
                m = f + 1,
                x = f + 2;
              ((u[g] = t[h(297)][h(389)]()),
                (u[m] = t[h(405)][h(389)]()),
                (u[x] = t[h(361)][h(389)]()),
                l &&
                  ((_[g] = t.uvA[h(389)]()),
                  (_[m] = t.uvB[h(389)]()),
                  (_[x] = t[h(376)][h(389)]())),
                o &&
                  ((v[g] = t[h(386)][h(389)]()),
                  (v[m] = t[h(344)][h(389)]()),
                  (v[x] = t[h(431)][h(389)]())),
                c &&
                  ((p[g] = t[h(379)][h(389)]()),
                  (p[m] = t[h(421)][h(389)]()),
                  (p[x] = t[h(272)][h(389)]())),
                (i[e] = g),
                (i[e + 1] = m),
                (i[e + 2] = x),
                (f += 3));
            }
            d.push(i);
          }
          if (null != i && 0 < a) {
            let e = new Array(3 * a);
            for (let t = 0, s = 0; t < a; t++, s += 3) {
              var M = i[t],
                L = f + 0,
                S = f + 1,
                b = f + 2;
              ((u[L] = M[h(297)]),
                (u[S] = M[h(405)]),
                (u[b] = M.positionC),
                l && ((_[L] = M[h(254)]), (_[S] = M[h(381)]), (_[b] = M[h(376)])),
                o &&
                  (n
                    ? ((v[L] = new W.Vec3(M[h(386)].x, M[h(386)].y, M[h(386)].z)),
                      (v[S] = new W.Vec3(M[h(344)].x, M[h(344)].y, M[h(344)].z)),
                      (v[b] = new W[h(437)](M.normalC.x, M[h(431)].y, M[h(431)].z)))
                    : ((v[L] = new W[h(437)](-M.normalA.x, -M[h(386)].y, -M[h(386)].z)),
                      (v[S] = new W[h(437)](-M[h(344)].x, -M[h(344)].y, -M.normalB.z)),
                      (v[b] = new W[h(437)](-M[h(431)].x, -M[h(431)].y, -M.normalC.z)))),
                c && ((p[L] = M[h(379)]), (p[S] = M.tangentB), (p[b] = M[h(272)])),
                n
                  ? ((e[s] = L), (e[s + 1] = S), (e[s + 2] = b))
                  : ((e[s] = L), (e[s + 1] = b), (e[s + 2] = S)),
                (f += 3));
            }
            if (d[h(385)] <= r) d[h(418)](e);
            else {
              let t = d[r],
                s = new Array();
              s = t[h(402)](0, t.length);
              var z = e[h(402)](0, e[h(385)]);
              for (let t = 0; t < e[h(385)]; t++) s[h(418)](z[t]);
              d[r] = s;
            }
          }
          d[h(385)];
          let V = W[h(338)].createMesh(s[0][h(367)], u, d);
          return (
            Laya[h(413)][h(276)]("sc"),
            l && V.setUVs(_),
            o && V[h(312)](v),
            c && V[h(369)](p),
            V
          );
        }
        static ["CreateFrom_2"](t, s, e) {
          const i = tt;
          var r = new Array();
          return H[i(290)](t, s, r, e) ? r : null;
        }
        [tt(326)](t, s) {}
      }
      t.Slicer = z;
      class l {
        constructor(t, s) {
          const e = tt;
          ((this.upper_hull = t), (this[e(395)] = s));
        }
        [tt(269)](t, s) {
          const e = tt;
          return t ? (s ? this.CreateUpperHull_2(t, s) : this[e(273)](t)) : this[e(307)]();
        }
        [tt(273)](t) {
          const s = tt;
          return this[s(246)](t, null);
        }
        [tt(246)](e, i) {
          const r = tt;
          let n = this[r(269)]();
          if (null != n) {
            ((n[r(416)][r(394)] = e[r(416)][r(394)][r(389)]()),
              (n.transform[r(365)] = e.transform[r(365)].clone()),
              (n.transform.localScale = e[r(416)][r(349)][r(389)]()));
            let t = e[r(364)][r(318)];
            if (e[r(417)][r(384)].subMeshCount == this[r(286)].subMeshCount)
              return ((n[r(364)][r(318)] = t[r(402)](0, t.length)), n);
            let s = t[r(402)](0, t[r(385)]);
            ((s[t[r(385)]] = i), (n[r(364)][r(318)] = s));
          }
          return n;
        }
        [tt(366)](t, s) {
          const e = tt;
          return t
            ? s
              ? this.CreateLowerHull_2(t, s)
              : this.CreateLowerHull_1(t)
            : this[e(408)]();
        }
        [tt(252)](t) {
          const s = tt;
          return this[s(406)](t, null);
        }
        [tt(406)](e, i) {
          const r = tt;
          let n = this[r(366)]();
          if (null != n) {
            ((n[r(416)][r(394)] = e[r(416)][r(394)][r(389)]()),
              (n[r(416)].localRotation = e[r(416)][r(365)].clone()),
              (n.transform[r(349)] = e[r(416)][r(349)][r(389)]()));
            let t = e.meshRenderer[r(318)];
            if (e[r(417)][r(384)][r(372)] == this.lower_hull[r(372)])
              return ((n[r(364)].sharedMaterials = t[r(402)](0, t[r(385)])), n);
            let s = t[r(402)](0, t.length);
            ((s[t.length] = i), (n[r(364)][r(318)] = s));
          }
          return n;
        }
        [tt(307)]() {
          const t = tt;
          return l[t(391)]("Upper_Hull", this[t(286)]);
        }
        [tt(408)]() {
          const t = tt;
          return l[t(391)]("Lower_Hull", this.lower_hull);
        }
        get [tt(403)]() {
          return this.upper_hull;
        }
        get [tt(335)]() {
          const t = tt;
          return this[t(395)];
        }
        static [tt(391)](t, s) {
          const e = tt;
          return null == s ? null : new Laya[e(422)](s, t);
        }
        static [tt(392)](s, e, t) {
          const i = tt;
          t = t || Laya[i(419)][i(332)](i(371));
          let r = new Array();
          for (let t = 0; t < 14 * s; t++) r[t] = 0;
          var n = new Float32Array(r);
          let h = new Array();
          for (let t = 0; t < 3 * e; t++) h[t] = 0;
          var a = new Uint16Array(h);
          return Laya[i(316)][i(260)](t, n, a);
        }
      }
      t[tt(315)] = l;
      class V {
        constructor() {
          const t = tt;
          ((this[t(256)] = !1),
            (this[t(286)] = new Array(2)),
            (this.lower_hull = new Array(2)),
            (this[t(323)] = new Array(2)),
            (this[t(336)] = 0),
            (this.lower_hull_count = 0),
            (this[t(313)] = 0));
        }
        get [tt(403)]() {
          const t = tt;
          return this[t(286)];
        }
        get [tt(335)]() {
          const t = tt;
          return this[t(395)];
        }
        get [tt(249)]() {
          return this.intersection_pt;
        }
        get [tt(424)]() {
          const t = tt;
          return this[t(336)];
        }
        get ["lowerHullCount"]() {
          const t = tt;
          return this[t(296)];
        }
        get [tt(378)]() {
          const t = tt;
          return this[t(313)];
        }
        get [tt(298)]() {
          const t = tt;
          return this[t(256)];
        }
        ["AddUpperHull"](t) {
          const s = tt;
          return ((this[s(286)][this.upper_hull_count++] = t), (this[s(256)] = !0), this);
        }
        [tt(282)](t) {
          const s = tt;
          return ((this[s(395)][this[s(296)]++] = t), (this.is_success = !0), this);
        }
        ["AddIntersectionPoint"](t) {
          const s = tt;
          this.intersection_pt[this[s(313)]++] = t[s(389)]();
        }
        [tt(362)]() {
          const t = tt;
          ((this[t(256)] = !1),
            (this[t(336)] = 0),
            (this.lower_hull_count = 0),
            (this.intersection_pt_count = 0));
        }
      }
      function i(t, s) {
        const e = r();
        return (i = function (t, s) {
          return ((t -= 245), e[t]);
        })(t, s);
      }
      t[tt(388)] = V;
      class st {
        static ["Intersect_1"](t, s, e) {
          const i = tt;
          return st[i(407)](t, s[i(297)], s[i(405)], e);
        }
        static [tt(407)](t, s, e, i) {
          const r = tt;
          var n = t[r(310)],
            h = new W.Vec3();
          return (
            W[r(437)][r(412)](e, s, h),
            (n = (t[r(433)] - W[r(437)][r(340)](n, s)) / W[r(437)][r(340)](n, h)) >= -st[r(287)] &&
            n <= 1 + st[r(287)]
              ? ((i.x = s.x + n * h.x), (i.y = s.y + n * h.y), (i.z = s.z + n * h.z), !0)
              : (i.setValue(0, 0, 0), !1)
          );
        }
        static [tt(292)](t, s, e, i, r, n) {
          return (t - e) * (i - n) - (e - r) * (s - i);
        }
        static [tt(414)](t, i, r) {
          const n = tt;
          r.Clear();
          var h = i[n(297)],
            a = i[n(405)],
            l = i[n(361)],
            o = t[n(409)](h),
            e = t[n(409)](a),
            s = t[n(409)](l);
          if (
            (o != e || e != s) &&
            !(
              (o == M[n(253)].ON && o == e) ||
              (o == M.Sl_SideOfPlane.ON && o == s) ||
              (e == M.Sl_SideOfPlane.ON && e == s) ||
              (o == M[n(253)].ON && e != M[n(253)].ON && e == s) ||
              (e == M.Sl_SideOfPlane.ON && o != M[n(253)].ON && o == s) ||
              (s == M[n(253)].ON && o != M[n(253)].ON && o == e)
            )
          ) {
            var c,
              u,
              _,
              v,
              p,
              d,
              f,
              y,
              w,
              g,
              m,
              x,
              L,
              S,
              b,
              z,
              V,
              N,
              A,
              C,
              I,
              O,
              P,
              T,
              U,
              D,
              H,
              k,
              q,
              F,
              R,
              B,
              E,
              Z,
              G,
              Q,
              X,
              Y,
              J,
              j,
              K = new W[n(437)](),
              $ = new W[n(437)]();
            if (o == M[n(253)].ON) {
              if (st[n(407)](t, a, l, K)) {
                (r.AddIntersectionPoint(K), r[n(266)](h));
                let t = new et(h, a, K),
                  s = new et(h, K, l);
                (i[n(351)] &&
                  ((c = i[n(353)](K)),
                  (u = i[n(254)]),
                  (_ = i.uvB),
                  (v = i.uvC),
                  t[n(341)](u, _, c),
                  s[n(341)](u, c, v)),
                  i.hasNormal &&
                    ((f = i[n(324)](K)),
                    (d = i[n(386)]),
                    (p = i.normalB),
                    (y = i.normalC),
                    t[n(284)](d, p, f),
                    s.SetNormal(d, f, y)),
                  i.hasTangent &&
                    ((p = i[n(400)](K)),
                    (d = i[n(379)]),
                    (f = i[n(421)]),
                    (y = i[n(272)]),
                    t[n(330)](d, f, p),
                    s.SetTangent(d, p, y)),
                  e == M[n(253)].UP
                    ? r.AddUpperHull(t)[n(282)](s)
                    : e == M.Sl_SideOfPlane[n(399)] && r[n(271)](s)[n(282)](t));
              }
            } else if (e == M[n(253)].ON) {
              if (st.Intersect_2(t, h, l, K)) {
                (r[n(266)](K), r[n(266)](a));
                let t = new et(h, a, K),
                  s = new et(K, a, l);
                (i[n(351)] &&
                  ((g = i[n(353)](K)),
                  (w = i.uvA),
                  (m = i.uvB),
                  (x = i.uvC),
                  t[n(341)](w, m, g),
                  s[n(341)](g, m, x)),
                  i[n(401)] &&
                    ((w = i[n(324)](K)),
                    (g = i.normalA),
                    (m = i.normalB),
                    (x = i[n(431)]),
                    t.SetNormal(g, m, w),
                    s.SetNormal(w, m, x)),
                  i.hasTangent &&
                    ((S = i[n(400)](K)),
                    (L = i[n(379)]),
                    (b = i[n(421)]),
                    (z = i[n(272)]),
                    t[n(330)](L, b, S),
                    s[n(330)](S, b, z)),
                  o == M[n(253)].UP
                    ? r[n(271)](t).AddLowerHull(s)
                    : o == M[n(253)][n(399)] && r[n(271)](s)[n(282)](t));
              }
            } else if (s == M.Sl_SideOfPlane.ON) {
              if (st[n(407)](t, h, a, K)) {
                (r[n(266)](K), r[n(266)](l));
                let t = new et(h, K, l),
                  s = new et(K, a, l);
                (i[n(351)] &&
                  ((L = i.GenerateUV(K)),
                  (S = i[n(254)]),
                  (b = i.uvB),
                  (z = i.uvC),
                  t[n(341)](S, L, z),
                  s.SetUV(L, b, z)),
                  i.hasNormal &&
                    ((N = i[n(324)](K)),
                    (V = i.normalA),
                    (A = i.normalB),
                    (C = i[n(431)]),
                    t[n(284)](V, N, C),
                    s.SetNormal(N, A, C)),
                  i[n(410)] &&
                    ((V = i.GenerateTangent(K)),
                    (N = i[n(379)]),
                    (A = i[n(421)]),
                    (C = i[n(272)]),
                    t.SetTangent(N, V, C),
                    s.SetTangent(V, A, C)),
                  o == M[n(253)].UP
                    ? r[n(271)](t)[n(282)](s)
                    : o == M.Sl_SideOfPlane[n(399)] && r[n(271)](s)[n(282)](t));
              }
            } else if (o != e && st[n(407)](t, h, a, K)) {
              if ((r[n(266)](K), o == s)) {
                if (st[n(407)](t, a, l, $)) {
                  r[n(266)]($);
                  let t = new et(K, a, $),
                    s = new et(h, K, $),
                    e = new et(h, $, l);
                  (i[n(351)] &&
                    ((O = i[n(353)](K)),
                    (T = i[n(353)]($)),
                    (P = i[n(254)]),
                    (I = i[n(381)]),
                    (U = i.uvC),
                    t[n(341)](O, I, T),
                    s[n(341)](P, O, T),
                    e[n(341)](P, T, U)),
                    i.hasNormal &&
                      ((I = i[n(324)](K)),
                      (O = i[n(324)]($)),
                      (P = i[n(386)]),
                      (T = i[n(344)]),
                      (U = i[n(431)]),
                      t[n(284)](I, T, O),
                      s[n(284)](P, I, O),
                      e[n(284)](P, O, U)),
                    i[n(410)] &&
                      ((H = i[n(400)](K)),
                      (q = i.GenerateTangent($)),
                      (k = i[n(379)]),
                      (D = i.tangentB),
                      (F = i.tangentC),
                      t.SetTangent(H, D, q),
                      s[n(330)](k, H, q),
                      e[n(330)](k, q, F)),
                    o == M[n(253)].UP
                      ? r[n(271)](s)[n(271)](e)[n(282)](t)
                      : r[n(282)](s)[n(282)](e)[n(271)](t));
                }
              } else if (st.Intersect_2(t, h, l, $)) {
                r[n(266)]($);
                let t = new et(h, K, $),
                  s = new et(K, a, l),
                  e = new et($, K, l);
                (i[n(351)] &&
                  ((D = i[n(353)](K)),
                  (H = i[n(353)]($)),
                  (k = i[n(254)]),
                  (q = i.uvB),
                  (F = i[n(376)]),
                  t[n(341)](k, D, H),
                  s.SetUV(D, q, F),
                  e[n(341)](H, D, F)),
                  i[n(401)] &&
                    ((Z = i[n(324)](K)),
                    (E = i[n(324)]($)),
                    (R = i[n(386)]),
                    (B = i[n(344)]),
                    (G = i[n(431)]),
                    t[n(284)](R, Z, E),
                    s[n(284)](Z, B, G),
                    e.SetNormal(E, Z, G)),
                  i[n(410)] &&
                    ((R = i[n(400)](K)),
                    (B = i[n(400)]($)),
                    (E = i[n(379)]),
                    (Z = i[n(421)]),
                    (G = i.tangentC),
                    t[n(330)](E, R, B),
                    s[n(330)](R, Z, G),
                    e[n(330)](B, R, G)),
                  o == M[n(253)].UP
                    ? r.AddUpperHull(t)[n(282)](s).AddLowerHull(e)
                    : r.AddLowerHull(t).AddUpperHull(s)[n(271)](e));
              }
            } else if (st[n(407)](t, l, h, K) && st[n(407)](t, l, a, $)) {
              (r[n(266)](K), r[n(266)]($));
              let t = new et(K, $, l),
                s = new et(h, $, K),
                e = new et(h, a, $);
              (i[n(351)] &&
                ((h = i.GenerateUV(K)),
                (Y = i[n(353)]($)),
                (Q = i.uvA),
                (X = i[n(381)]),
                (a = i.uvC),
                t[n(341)](h, Y, a),
                s[n(341)](Q, Y, h),
                e[n(341)](Q, X, Y)),
                i[n(401)] &&
                  ((Q = i[n(324)](K)),
                  (j = i[n(324)]($)),
                  (X = i[n(386)]),
                  (J = i[n(344)]),
                  (Y = i.normalC),
                  t[n(284)](Q, j, Y),
                  s[n(284)](X, j, Q),
                  e[n(284)](X, J, j)),
                i[n(410)] &&
                  ((J = i[n(400)](K)),
                  (j = i[n(400)]($)),
                  (K = i[n(379)]),
                  ($ = i.tangentB),
                  (i = i[n(272)]),
                  t[n(330)](J, j, i),
                  s.SetTangent(K, j, J),
                  e[n(330)](K, $, j)),
                o == M[n(253)].UP
                  ? r[n(271)](s)[n(271)](e)[n(282)](t)
                  : r.AddLowerHull(s)[n(282)](e).AddUpperHull(t));
            }
          }
        }
      }
      ((st.Epsilon = 1e-4),
        (t[tt(393)] = st),
        (t[tt(300)] = class {
          constructor(t, s) {
            const e = tt;
            ((this[e(301)] = t[e(389)]()), (this.m_pos_b = s[e(389)]()));
          }
          get ["dist"]() {
            const t = tt;
            return W[t(437)].distance(this[t(301)], this.m_pos_b);
          }
          get [tt(363)]() {
            const t = tt;
            return W.Vec3[t(382)](this[t(301)], this[t(291)]);
          }
          get [tt(297)]() {
            const t = tt;
            return this[t(301)];
          }
          get [tt(405)]() {
            return this.m_pos_b;
          }
        }));
      class u {
        constructor() {}
        [tt(430)](t, s) {
          const e = tt;
          ((this[e(370)] = s[e(389)]()), (this[e(345)] = W[e(437)][e(340)](s, t)));
        }
        [tt(339)](t, s) {
          const e = tt;
          ((this[e(370)] = t.clone()), (this[e(345)] = s));
        }
        ["initByVector3"](t, s, e) {
          const i = tt,
            r = W.Vec3;
          var n = u[i(304)];
          (r.subtract(s, t, n),
            (s = u[i(319)]),
            r[i(412)](e, t, s),
            (e = new r()),
            r.cross(n, s, e),
            r.normalize(e, e),
            (this.m_normal = e),
            (this[i(345)] = -r.dot(this.m_normal, t)));
        }
        [tt(263)](t, s) {
          const e = tt;
          ((this[e(370)] = s), (this.m_dist = W[e(437)][e(340)](s, t)));
        }
        [tt(350)](t) {
          const s = tt;
          var e = new W.Vec3();
          (t.getUp(e), this[s(263)](t[s(396)], e));
        }
        ["Compute_3"](t) {
          const s = tt;
          this[s(350)](t[s(416)]);
        }
        get [tt(310)]() {
          return this.m_normal;
        }
        get ["dist"]() {
          const t = tt;
          return this[t(345)];
        }
        [tt(409)](t) {
          const s = tt;
          return (t = W.Vec3.dot(this.m_normal, t) - this[s(345)]) > st.Epsilon
            ? M[s(253)].UP
            : t < -st.Epsilon
              ? M[s(253)][s(399)]
              : M[s(253)].ON;
        }
      }
      ((u[tt(304)] = new Laya[tt(428)]()), (u._t2 = new Laya[tt(428)]()), (t[tt(251)] = u));
      class n {
        constructor(t, s, e, i) {
          const r = tt;
          ((this[r(285)] = t), (this[r(347)] = s), (this[r(281)] = e), (this[r(299)] = i));
        }
        [tt(329)]() {
          const t = tt;
          return this[t(285)];
        }
        [tt(305)]() {
          const t = tt;
          return this[t(347)];
        }
        [tt(308)]() {
          const t = tt;
          return this[t(281)];
        }
        [tt(358)]() {
          const t = tt;
          return this[t(299)];
        }
        ["start"]() {
          const t = tt;
          return new Laya.Vector2(this[t(329)](), this.startY());
        }
        ["end"]() {
          const t = tt;
          return new Laya[t(404)](this[t(308)](), this[t(358)]());
        }
        [tt(327)](t) {
          const s = tt;
          return this[s(374)](t.x, t.y);
        }
        ["Map_2"](t, s) {
          const e = tt;
          return (
            (t = this[e(248)](t, 0, 1, this[e(285)], this[e(281)])),
            (s = this[e(248)](s, 0, 1, this[e(347)], this[e(299)])),
            new Laya[e(404)](t, s)
          );
        }
        [tt(248)](t, s, e, i, r) {
          return ((t - s) * (r - i)) / (e - s) + i;
        }
      }
      ((t[tt(346)] = n), (t[tt(415)] = class {}));
      class et {
        constructor(t = new W[tt(437)](), s = new W[tt(437)](), e = new W[tt(437)]()) {
          const i = tt;
          ((this[i(301)] = t),
            (this.m_pos_b = s),
            (this[i(265)] = e),
            (this[i(259)] = !1),
            (this[i(432)] = W[i(373)][i(309)]),
            (this.m_uv_b = W[i(373)][i(309)]),
            (this[i(245)] = W[i(373)][i(309)]),
            (this[i(342)] = !1),
            (this.m_nor_a = W.Vec3.Z),
            (this[i(423)] = W[i(437)].Z),
            (this.m_nor_c = W[i(437)].Z),
            (this[i(356)] = !1),
            (this[i(261)] = Laya.Vector4[i(309)]),
            (this.m_tan_b = Laya.Vector4.ZERO),
            (this[i(398)] = Laya[i(377)][i(309)]));
        }
        get [tt(297)]() {
          const t = tt;
          return this[t(301)];
        }
        get [tt(405)]() {
          const t = tt;
          return this[t(291)];
        }
        get ["positionC"]() {
          const t = tt;
          return this[t(265)];
        }
        get [tt(351)]() {
          const t = tt;
          return this[t(259)];
        }
        [tt(341)](t, s, e) {
          const i = tt;
          ((this[i(432)] = t), (this[i(279)] = s), (this[i(245)] = e), (this[i(259)] = !0));
        }
        get [tt(254)]() {
          const t = tt;
          return this[t(432)];
        }
        get [tt(381)]() {
          const t = tt;
          return this[t(279)];
        }
        get ["uvC"]() {
          const t = tt;
          return this[t(245)];
        }
        get [tt(401)]() {
          const t = tt;
          return this[t(342)];
        }
        ["SetNormal"](t, s, e) {
          const i = tt;
          ((this.m_nor_a = t), (this[i(423)] = s), (this.m_nor_c = e), (this[i(342)] = !0));
        }
        get [tt(386)]() {
          const t = tt;
          return this[t(306)];
        }
        get [tt(344)]() {
          return this.m_nor_b;
        }
        get [tt(431)]() {
          const t = tt;
          return this[t(411)];
        }
        get [tt(410)]() {
          const t = tt;
          return this[t(356)];
        }
        ["SetTangent"](t, s, e) {
          const i = tt;
          ((this.m_tan_a = t), (this[i(359)] = s), (this[i(398)] = e), (this[i(356)] = !0));
        }
        get [tt(379)]() {
          const t = tt;
          return this[t(261)];
        }
        get [tt(421)]() {
          const t = tt;
          return this[t(359)];
        }
        get [tt(272)]() {
          const t = tt;
          return this[t(398)];
        }
        [tt(320)]() {
          const t = tt;
          if (this.m_nor_set && this[t(259)]) {
            var s = this[t(301)],
              e = this[t(291)],
              i = this[t(265)],
              r = this.m_uv_a,
              n = this[t(279)],
              h = this.m_uv_c,
              a = e.x - s.x,
              l = i.x - s.x,
              o = e.y - s.y,
              c = i.y - s.y,
              u = e.z - s.z,
              e = i.z - s.z,
              i = n.x - r.x,
              s = h.x - r.x,
              n = n.y - r.y,
              r = 1 / (i * (h = h.y - r.y) - s * n);
            const _ = new W.Vec3((h * a - n * l) * r, (h * o - n * c) * r, (h * u - n * e) * r);
            ((o = new W[t(437)]((i * l - s * a) * r, (i * c - s * o) * r, (i * e - s * u) * r)),
              (i = this[t(306)]),
              (s = (e = et)[t(295)]),
              _[t(328)](s),
              W.Vec3[t(293)](i, s),
              (u = e[t(368)]),
              W[t(437)].cross(i, s, u),
              (r = new Laya[t(377)](s.x, s.y, s.z, W[t(437)].dot(u, o) < 0 ? -1 : 1)),
              (i = this[t(423)]),
              (s = e._v0),
              _[t(328)](s),
              W[t(437)][t(293)](i, s),
              (u = new W.Vec3()),
              W[t(437)].cross(i, s, u),
              (i = new Laya[t(377)](s.x, s.y, s.z, W[t(437)][t(340)](u, o) < 0 ? -1 : 1)),
              (s = this[t(411)]),
              (u = e[t(295)]),
              _.cloneTo(u),
              W[t(437)][t(293)](s, u),
              (e = new W.Vec3()),
              W.Vec3[t(267)](s, u, e),
              (o = new Laya[t(377)](u.x, u.y, u.z, W[t(437)].dot(e, o) < 0 ? -1 : 1)),
              this.SetTangent(r, i, o));
          }
        }
        [tt(257)](t) {
          const s = tt;
          var e = this.m_pos_a,
            i = this.m_pos_b,
            r = this[s(265)],
            n = new W[s(437)](),
            h = new W[s(437)]();
          W[s(437)][s(412)](i, e, h);
          var a = new W.Vec3();
          (W[s(437)][s(412)](r, e, a), W.Vec3[s(267)](h, a, n));
          let l = NaN,
            o = NaN,
            c;
          var u = Math[s(333)](n.x),
            h = Math.abs(n.y),
            a = Math[s(333)](n.z);
          return (
            (c =
              h <= u && a <= u
                ? ((l = st[s(292)](t.y, t.z, i.y, i.z, r.y, r.z)),
                  (o = st[s(292)](t.y, t.z, r.y, r.z, e.y, e.z)),
                  1 / n.x)
                : u <= h && a <= h
                  ? ((l = st.TriArea2D(t.x, t.z, i.x, i.z, r.x, r.z)),
                    (o = st[s(292)](t.x, t.z, r.x, r.z, e.x, e.z)),
                    1 / -n.y)
                  : ((l = st[s(292)](t.x, t.y, i.x, i.y, r.x, r.y)),
                    (o = st[s(292)](t.x, t.y, r.x, r.y, e.x, e.y)),
                    1 / n.z)),
            (e = l * c),
            (n = o * c),
            new W.Vec3(e, n, 1 - e - n)
          );
        }
        [tt(353)](t) {
          const s = tt;
          if (!this[s(259)]) return Laya[s(404)][s(309)];
          t = this[s(257)](t);
          let e = new Laya[s(404)]();
          return (
            (e.x = t.x * this[s(432)].x + t.y * this[s(279)].x + t.z * this[s(245)].x),
            (e.y = t.x * this.m_uv_a.y + t.y * this[s(279)].y + t.z * this[s(245)].y),
            e
          );
        }
        ["GenerateNormal"](t) {
          const s = tt;
          if (!this[s(342)]) return new W[s(437)](0, 0, 0);
          t = this[s(257)](t);
          let e = new W[s(437)]();
          return (
            (e.x = t.x * this[s(306)].x + t.y * this[s(423)].x + t.z * this[s(411)].x),
            (e.y = t.x * this[s(306)].y + t.y * this[s(423)].y + t.z * this.m_nor_c.y),
            (e.z = t.x * this.m_nor_a.z + t.y * this[s(423)].z + t.z * this[s(411)].z),
            e
          );
        }
        [tt(400)](t) {
          const s = tt;
          if (!this[s(342)]) return Laya[s(377)][s(309)];
          t = this[s(257)](t);
          let e = new Laya[s(377)]();
          return (
            (e.w = t.x * this[s(261)].w + t.y * this[s(359)].w + t.z * this[s(398)].w),
            (e.x = t.x * this[s(261)].x + t.y * this[s(359)].x + t.z * this[s(398)].x),
            (e.y = t.x * this.m_tan_a.y + t.y * this.m_tan_b.y + t.z * this.m_tan_c.y),
            (e.z = t.x * this[s(261)].z + t.y * this.m_tan_b.z + t.z * this[s(398)].z),
            e
          );
        }
        [tt(435)](t, s) {
          const e = tt;
          return (st[e(414)](t, this, s), s[e(298)]);
        }
        [tt(317)]() {
          const t = tt;
          return et[t(274)](this[t(301)], this[t(291)], this.m_pos_c) >= Number[t(397)];
        }
        static [tt(274)](t, s, e) {
          return (
            t.x * (s.y * e.z - s.z * e.y) -
            t.y * (s.x * e.z - s.z * e.x) +
            t.z * (s.x * e.y - s.y * e.x)
          );
        }
      }
      ((et[tt(295)] = new Laya[tt(428)]()),
        (et[tt(368)] = new Laya[tt(428)]()),
        (t.Sl_Triangle = et));
      class D {
        constructor(t, s, e) {
          const i = tt;
          ((this.original = t[i(389)]()),
            (e = new W[i(373)](W.Vec3[i(340)](t, s), W[i(437)].dot(t, e))),
            (this[i(334)] = e));
        }
        get [tt(352)]() {
          const t = tt;
          return this[t(334)];
        }
        get [tt(380)]() {
          const t = tt;
          return this[t(280)];
        }
      }
      function r() {
        const t = [
          "Slice_2",
          "localScale",
          "Compute_2",
          "hasUV",
          "mappedValue",
          "GenerateUV",
          "lowerHullCount",
          "splice",
          "m_tan_set",
          "3000087qtLyyQ",
          "endY",
          "m_tan_b",
          "getPositions",
          "positionC",
          "Clear",
          "distSq",
          "meshRenderer",
          "localRotation",
          "CreateLowerHull",
          "vertexDeclaration",
          "_v1",
          "setTangents",
          "m_normal",
          "POSITION,NORMAL,UV",
          "subMeshCount",
          "Vec2",
          "Map_2",
          "Slice_4",
          "uvC",
          "Vector4",
          "intersectionPointCount",
          "tangentA",
          "originalValue",
          "uvB",
          "distanceSquared",
          "normalize",
          "sharedMesh",
          "length",
          "normalA",
          "MAX_VALUE",
          "Sl_IntersectionResult",
          "clone",
          "transpose",
          "CreateEmptyObject",
          "meshCreate",
          "Sl_Intersector",
          "localPosition",
          "lower_hull",
          "position",
          "EPSILON",
          "m_tan_c",
          "DOWN",
          "GenerateTangent",
          "hasNormal",
          "slice",
          "upperHull",
          "Vector2",
          "positionB",
          "CreateLowerHull_2",
          "Intersect_2",
          "CreateLowerHull_0",
          "SideOf",
          "hasTangent",
          "m_nor_c",
          "subtract",
          "stage",
          "Intersect_3",
          "Sl_TextureRegionExtension",
          "transform",
          "meshFilter",
          "push",
          "VertexMesh",
          "invert",
          "tangentB",
          "MeshSprite3D",
          "m_nor_b",
          "upperHullCount",
          "Slice",
          "MultiplyVector",
          "Sl_Triangulator",
          "Vector3",
          "Slice_1",
          "initByPos",
          "normalC",
          "m_uv_a",
          "dist",
          "TR3",
          "Split",
          "sort",
          "Vec3",
          "m_uv_c",
          "CreateUpperHull_2",
          "CreateFrom_2",
          "MAP_3",
          "intersectionPoints",
          "52ZoWJmL",
          "Sl_Plane",
          "CreateLowerHull_1",
          "Sl_SideOfPlane",
          "uvA",
          "CreateFrom_1",
          "is_success",
          "Barycentric",
          "InverseTransformPoint",
          "m_uv_set",
          "_createMesh",
          "m_tan_a",
          "399336BPDtdn",
          "Compute_1",
          "Sl_Mapped2D",
          "m_pos_c",
          "AddIntersectionPoint",
          "cross",
          "3305iErhrg",
          "CreateUpperHull",
          "CreateHull",
          "AddUpperHull",
          "tangentC",
          "CreateUpperHull_1",
          "SignedSquare",
          "32zjzmLn",
          "getChildByName",
          "MIN_VALUE",
          "1662dRMJdR",
          "m_uv_b",
          "original",
          "pos_end_x",
          "AddLowerHull",
          "localMatrix",
          "SetNormal",
          "pos_start_x",
          "upper_hull",
          "Epsilon",
          "max",
          "1062444ucClEk",
          "MonotoneChain",
          "m_pos_b",
          "TriArea2D",
          "OrthoNormalize",
          "4208QQZqNg",
          "_v0",
          "lower_hull_count",
          "positionA",
          "isValid",
          "pos_end_y",
          "Sl_Line",
          "m_pos_a",
          "MonotoneChain_2",
          "getNormals",
          "_t1",
          "startY",
          "m_nor_a",
          "CreateUpperHull_0",
          "endX",
          "ZERO",
          "normal",
          "SliceByPlane",
          "setNormals",
          "intersection_pt_count",
          "1614260JueOct",
          "SlicedHull",
          "PrimitiveMesh",
          "IsCW",
          "sharedMaterials",
          "_t2",
          "ComputeTangents",
          "SlicedSubmesh",
          "getUp",
          "intersection_pt",
          "GenerateNormal",
          "200879tZakFf",
          "addBox",
          "Map_1",
          "cloneTo",
          "startX",
          "SetTangent",
          "getIndices",
          "getVertexDeclaration",
          "abs",
          "mapped",
          "lowerHull",
          "upper_hull_count",
          "isZero",
          "Mesh",
          "initByNorm",
          "dot",
          "SetUV",
          "m_nor_set",
          "getTangents",
          "normalB",
          "m_dist",
          "Sl_TextureRegion",
          "pos_start_y",
        ];
        return (r = function () {
          return t;
        })();
      }
      t[tt(264)] = D;
      class H {
        static ["MonotoneChain_1"](t, s, e) {
          const i = tt;
          return this[i(302)](t, s, e, new n(0, 0, 1, 1));
        }
        static [tt(290)](t, s, e, i) {
          return i ? this.MonotoneChain_2(t, s, e, i) : this.MonotoneChain_1(t, s, e);
        }
        static ["MonotoneChain_2"](s, e, i, r) {
          const n = tt;
          var h = s[n(385)];
          if (h < 3) return !1;
          var t = H,
            a = t._v0,
            l = new W[n(437)]();
          (W.Vec3[n(267)](e, W.Vec3.UP, a),
            W[n(437)].normalize(a, l),
            W.Vec3[n(337)](l, !0) && (W.Vec3[n(267)](e, W[n(437)].FW, a), W.Vec3[n(383)](a, l)));
          var o = t[n(295)];
          W[n(437)].cross(l, e, o);
          const c = new Array(h);
          let u = Number[n(277)],
            _ = Number[n(277)],
            v = Number[n(387)],
            p = Number[n(387)];
          for (let t = 0; t < h; t++) {
            var d = s[t],
              f = new D(d, l, o),
              d = f.mappedValue;
            ((u = Math[n(288)](u, d.x)),
              (_ = Math[n(288)](_, d.y)),
              (v = Math.min(v, d.x)),
              (p = Math.min(p, d.y)),
              (c[t] = f));
          }
          c[n(436)]((t, s) => {
            const e = n;
            return (
              (t = t.mappedValue),
              (s = s[e(352)]),
              t.x < s.x || (t.x == s.x && t.y < s.y) ? -1 : 1
            );
          });
          let y = new Array(h + 1),
            w = 0;
          for (let t = 0; t < h; t++) {
            for (; 2 <= w;) {
              var g = y[w - 2][n(352)],
                m = y[w - 1][n(352)],
                x = c[t][n(352)];
              if (0 < st[n(292)](g.x, g.y, m.x, m.y, x.x, x.y)) break;
              w--;
            }
            y[w++] = c[t];
          }
          for (let t = h - 2, s = w + 1; 0 <= t; t--) {
            for (; w >= s;) {
              var M = y[w - 2][n(352)],
                L = y[w - 1][n(352)],
                S = c[t][n(352)];
              if (0 < st[n(292)](M.x, M.y, L.x, L.y, S.x, S.y)) break;
              w--;
            }
            y[w++] = c[t];
          }
          for (let t = 0; t < y[n(385)]; t++) y[t] || (y[n(355)](t, 1), t--);
          var b = 3 * ((t = w - 1) - 2);
          if (t < 3) return !1;
          var z = u - v,
            V = _ - p;
          let N = 1;
          const A = new W.Vec2(),
            C = new W[n(373)](),
            I = new W[n(373)]();
          for (let t = 0; t < b; t += 3) {
            const O = y[0],
              P = y[N],
              T = y[N + 1];
            (O.mappedValue[n(328)](A),
              P[n(352)][n(328)](C),
              T[n(352)][n(328)](I),
              (A.x = (A.x - v) / z),
              (A.y = (A.y - p) / V),
              (C.x = (C.x - v) / z),
              (C.y = (C.y - p) / V),
              (I.x = (I.x - v) / z),
              (I.y = (I.y - p) / V));
            const U = new et(O[n(380)], P[n(380)], T[n(380)]);
            (U[n(341)](r[n(327)](A), r.Map_1(C), r[n(327)](I)),
              U[n(284)](e, e, e),
              U.ComputeTangents(),
              i[n(418)](U),
              N++);
          }
          return !0;
        }
      }
      ((H[tt(295)] = new Laya[tt(428)]()), (t[tt(427)] = H));
    })((_k = _k || {})),
    (function (t) {
      class A {
        static init(e) {
          for (let s = 0; s < e.length; s++) {
            let t = e[s];
            ((t.f = 0),
              (t.g = 0),
              (t.h = 0),
              (t.cost = 1),
              (t.visited = !1),
              (t.closed = !1),
              (t.parent = null));
          }
        }
        static cleanUp(e) {
          for (let s = 0; s < e.length; s++) {
            let t = e[s];
            (delete t.f,
              delete t.g,
              delete t.h,
              delete t.cost,
              delete t.visited,
              delete t.closed,
              delete t.parent);
          }
        }
        static heap() {
          return new s(function (t) {
            return t.f;
          });
        }
        static search(t, s, i) {
          A.init(t);
          let r = A.heap();
          for (r.push(s); 0 < r.size();) {
            let e = r.pop();
            if (e === i) {
              let t = e,
                s = [];
              for (; t.parent;) (s.push(t), (t = t.parent));
              return (this.cleanUp(s), s.reverse());
            }
            e.closed = !0;
            var n,
              h,
              a = A.neighbours(t, e);
            for (let s = 0, t = a.length; s < t; s++) {
              let t = a[s];
              t.closed ||
                ((n = e.g + t.cost),
                (!(h = t.visited) || n < t.g) &&
                  ((t.visited = !0),
                  (t.parent = e),
                  t.centroid && i.centroid,
                  (t.h = t.h || A.heuristic(t.centroid, i.centroid)),
                  (t.g = n),
                  (t.f = t.g + t.h),
                  h ? r.rescoreElement(t) : r.push(t)));
            }
          }
          return [];
        }
        static heuristic(t, s) {
          return W.Vec3.distanceSquared(t, s);
        }
        static neighbours(e, t) {
          let i = [];
          var r = t.neighbours;
          for (let t = 0, s = r.length; t < s; t++) i.push(e[r[t]]);
          return i;
        }
      }
      class s {
        constructor(t) {
          ((this.ct = []), (this.sF = t));
        }
        push(t) {
          (this.ct.push(t), this.sinkDown(this.ct.length - 1));
        }
        pop() {
          var t = this.ct[0],
            s = this.ct.pop();
          return (0 < this.ct.length && ((this.ct[0] = s), this.bubbleUp(0)), t);
        }
        remove(t) {
          var s = this.ct.indexOf(t),
            e = this.ct.pop();
          s !== this.ct.length - 1 &&
            ((this.ct[s] = e), this.sF(e) < this.sF(t) ? this.sinkDown(s) : this.bubbleUp(s));
        }
        size() {
          return this.ct.length;
        }
        rescoreElement(t) {
          this.sinkDown(this.ct.indexOf(t));
        }
        sinkDown(t) {
          for (var s = this.ct[t]; 0 < t;) {
            var e = ((t + 1) >> 1) - 1,
              i = this.ct[e];
            if (!(this.sF(s) < this.sF(i))) break;
            ((this.ct[e] = s), (this.ct[t] = i), (t = e));
          }
        }
        bubbleUp(e) {
          for (var i = this.ct.length, r = this.ct[e], n = this.sF(r); ;) {
            var h,
              a = (e + 1) << 1,
              l = a - 1;
            let t = null,
              s;
            if (
              (l < i && ((h = this.ct[l]), (s = this.sF(h)), s < n && (t = l)),
              a < i && ((l = this.ct[a]), this.sF(l) < (null === t ? n : s) && (t = a)),
              null === t)
            )
              break;
            ((this.ct[e] = this.ct[t]), (this.ct[t] = r), (e = t));
          }
        }
      }
      class C {
        constructor() {
          this.portals = [];
        }
        push(t, s) {
          this.portals.push({ left: t, right: (s = void 0 === s ? t : s) });
        }
        trz(t, s, e) {
          var i = s.x - t.x,
            s = s.z - t.z;
          return (e.x - t.x) * s - i * (e.z - t.z);
        }
        try(t, s, e) {
          var i = s.x - t.x,
            s = s.y - t.y;
          return (e.x - t.x) * s - i * (e.y - t.y);
        }
        vequal(t, s) {
          return W.Vec3.distanceSquared(t, s) < 1e-5;
        }
        stringPull() {
          var e = this.portals;
          let i = [],
            r,
            n,
            h,
            a = 0,
            l = 0,
            o = 0;
          var t = e[0];
          ((r = t.left), (n = t.left), (h = t.right), i.push(r));
          let c = M.NavM.id2 ? this.try : this.trz;
          for (let t = 1, s = e.length; t < s; t++) {
            var u = e[t].left,
              _ = e[t].right;
            if (c(r, h, _) <= 0) {
              if (!(this.vequal(r, h) || 0 < c(r, n, _))) {
                (i.push(n), (r = n), (a = l), (n = r), (h = r), (l = a), (o = a), (t = a));
                continue;
              }
              ((h = _), (o = t));
            }
            0 <= c(r, n, u) &&
              (this.vequal(r, n) || c(r, h, u) < 0
                ? ((n = u), (l = t))
                : (i.push(h), (r = h), (a = o), (n = r), (h = r), (l = a), (o = a), (t = a)));
          }
          return (
            (0 !== i.length && this.vequal(i[i.length - 1], e[e.length - 1].left)) ||
              i.push(e[e.length - 1].left),
            (this.path = i),
            i
          );
        }
      }
      class h {
        constructor(t, s, e) {
          ((this.a = 0), (this.b = 0), (this.c = 0), (this.c = e), (this.b = s), (this.a = t));
        }
      }
      class a {
        constructor() {
          ((this.faces = []), (this.vertices = []));
        }
        mergeVertices() {
          let t = {},
            s = new Array(),
            e = [];
          var i,
            r,
            n,
            h = Math.pow(10, 4);
          let a, l, o;
          for (a = 0, l = this.vertices.length; a < l; a++)
            ((i = this.vertices[a]),
              (r = Math.round(i.x * h) + "_" + Math.round(i.y * h) + "_" + Math.round(i.z * h)),
              null == t[r] ? ((t[r] = a), s.push(i), (e[a] = s.length - 1)) : (e[a] = e[t[r]]));
          let c = [];
          for (a = 0, l = this.faces.length; a < l; a++) {
            ((o = this.faces[a]),
              (o.a = e[o.a]),
              (o.b = e[o.b]),
              (o.c = e[o.c]),
              (n = [o.a, o.b, o.c]));
            for (let t = 0; t < 3; t++)
              if (n[t] == n[(t + 1) % 3]) {
                c.push(a);
                break;
              }
          }
          for (a = c.length - 1; 0 <= a; a--) {
            var u = c[a];
            this.faces.splice(u, 1);
          }
          var _ = this.vertices.length - s.length;
          return ((this.vertices = s), _);
        }
      }
      class e {
        static c(t, s) {
          ((s = W.L.g(s)), (s = this.bu(s)), this.setZoneData(t, s));
        }
        static bu(t) {
          var s = t.vertices,
            e = t.faces;
          let i = [];
          for (let t = 0; t < e.length / 5; t++)
            i.push(new h(e[5 * t + 1], e[5 * t + 2], e[5 * t + 3]));
          let r = [];
          for (let t = 0; t < s.length; t += 3) r.push(new W.Vec3(s[t], s[t + 1], s[t + 2]));
          let n = new a();
          return ((n.faces = i), (n.vertices = r), this._buN(n));
        }
        static cm(t, s) {
          var e = s._indexBuffer.getData();
          const i = [];
          for (let t = 0, s = e.length; t < s; t += 3) i.push(new h(e[t], e[t + 1], e[t + 2]));
          var r = [];
          s.getPositions(r);
          const n = new a();
          ((n.faces = i), (n.vertices = r), (r = this._buN(n)), this.setZoneData(t, r));
        }
        static _buN(t) {
          return ((t = I.bunm(t)), I.gnm(t));
        }
        static setZoneData(t, s) {
          (this.zoneNodes.set(t, s), this.ReD(t));
        }
        static getGroup(t, i) {
          const s = this.zoneNodes;
          if (!s.has(t)) return null;
          var r = s.get(t).groups;
          if (1 == r.length) return 0;
          let n = null,
            h = 2500;
          for (let e = 0, t = r.length; e < t; e++) {
            var a = r[e];
            for (let t = 0, s = a.length; t < s; t++) {
              var l = a[t];
              (l = W.Vec3.distanceSquared(l.centroid, i)) < h && ((n = e), (h = l));
            }
          }
          return n;
        }
        static getRandomNode(t, s, e, i) {
          const r = this.zoneNodes;
          if (!r.has(t)) return new W.Vec3();
          ((e = e || null), (i = i || 0));
          let n = [];
          var h = r.get(t).groups[s];
          for (let t = 0, s = h.length; t < s; t++) {
            var a = h[t];
            (e && i && !(W.Vec3.distanceSquared(e, a.centroid) < i * i)) || n.push(a.centroid);
          }
          return 0 < (s = n.length) ? ((s = this.random(s)), n[s]) : void 0;
        }
        static random(t, s = null) {
          return (null == s && ((s = t), (t = 0)), t + Math.floor(Math.random() * (s - t + 1)));
        }
        static _isPT(t, s, e, i) {
          var r = e.x - s.x,
            n = e.z - s.z,
            h = i.x - s.x,
            a = i.z - s.z,
            e = t.x - s.x,
            i = t.z - s.z,
            t = r * r + n * n,
            s = r * h + n * a,
            r = r * e + n * i,
            n = ((n = h * h + a * a) * r - s * (a = h * e + a * i)) * (i = 1 / (t * n - s * s)),
            i = (t * a - s * r) * i;
          return 0 <= n && 0 <= i && n + i <= 1;
        }
        static findPath(e, i, t, s, r = 0) {
          var n = this.zoneNodes.get(t),
            h = n.groups[s],
            a = n.vertices;
          let l = null,
            o = 2500;
          const c = Laya.Vector3.distanceSquared;
          let u = [];
          for (let t = 0, s = h.length; t < s; t++) {
            const V = h[t];
            var _ = (V.d = c(V.centroid, e));
            (_ < o && ((l = V), (o = _)), u.push(V));
          }
          u.sort((t, s) => t.d - s.d);
          for (let t = 0, s = u.length; t < s; t++) {
            var v = u[t].vertexIds;
            if (this._isPT(e, a[v[0]], a[v[1]], a[v[2]])) {
              l = u[t];
              break;
            }
          }
          u.length = 0;
          let p = null;
          o = 2500;
          for (let t = 0, s = h.length; t < s; t++) {
            var d = h[t],
              f = c(d.centroid, i);
            f < o && I.ivp(i, d, a) && ((p = d), (o = f));
          }
          if (!l || !p)
            return 0 == r
              ? (this.FNP(i, t, s, this.v3t), this.findPath(e, this.v3t, t, s, r + 1))
              : null;
          var y = A.search(h, l, p);
          let w = new C();
          w.push(e);
          for (let t = 0, s = y.length; t < s; t++) {
            var g = y[t],
              m = y[t + 1];
            m && ((m = this.gP(g, m)), w.push(a[m[0]], a[m[1]]));
          }
          (w.push(i), w.stringPull());
          let x = [];
          var M = w.path.length;
          const L = this.vps;
          for (let t = L.length; t < M; t++) L.push(new W.Vec3());
          var S = this.id2;
          for (let t = 0; t < M; t++) {
            var b,
              z = w.path[t];
            const N = L[t];
            (N.setValue(z.x, z.y, z.z),
              0 < t
                ? ((b = x.length - 1),
                  (b = x[b]),
                  1e-8 < Math.pow(b.x - z.x, 2) + Math.pow(S ? b.y - z.y : b.z - z.z, 2) &&
                    x.push(N))
                : x.push(N));
          }
          return x.length < 2 ? null : x;
        }
        static gP(e, t) {
          var i = e.neighbours,
            r = t.id;
          for (let t = 0, s = i.length; t < s; t++) if (i[t] === r) return e.portals[t];
        }
        static ReD(t) {
          var s = this.zoneNodes.get(t),
            i = s.vertices;
          const e = s.groups;
          let r = [];
          const n = Laya.Vector3.distanceSquared;
          var h = i.length;
          for (let e = 0; e < h - 1; e++)
            for (let s = e + 1; s < h; s++)
              if (n(i[e], i[s]) < 1e-6) {
                let t = e;
                for (; null != r[t] && r[t] != t;) t = r[t];
                null == r[s] && (r[s] = t);
              }
          let a = [];
          e.forEach((t) => {
            let s = new Set();
            (t.forEach((t) => {
              ((t = t.vertexIds),
                this._label(s, r, t[0], t[1]),
                this._label(s, r, t[1], t[2]),
                this._label(s, r, t[0], t[2]));
            }),
              a.push(s));
          });
          let l = [];
          for (let i = 0; i < a.length; i++) {
            let s = [],
              t = a[i],
              e = 0;
            (t.forEach((t) => {
              (e % 2 == 0 && ((t = t.split("-")), s.push([Number(t[0]), Number(t[1])])), e++);
            }),
              l.push(s));
          }
          this.LLs.set(t, l);
        }
        static _label(t, s, e, i) {
          var r;
          (t.add(
            (null !== (r = s[e]) && void 0 !== r ? r : e) +
              "-" +
              (null !== (r = s[i]) && void 0 !== r ? r : i),
          ),
            t.add(
              (null !== (t = s[i]) && void 0 !== t ? t : i) +
                "-" +
                (null !== (s = s[e]) && void 0 !== s ? s : e),
            ));
        }
        static FNP(t, s, e, i) {
          const r = this.v2;
          let n = this.id2;
          r.setValue(t.x, n ? t.y : t.z);
          let h = 9e9,
            a = 0,
            l = 0;
          const o = this.zoneNodes.get(s).vertices,
            c = this.v0,
            u = this.v1;
          this.LLs.get(s)[e].forEach((t) => {
            var s = o[t[0]],
              e = o[t[1]];
            (c.setValue(s.x, n ? s.y : s.z),
              u.setValue(e.x, n ? e.y : e.z),
              (e = this.DPLS(r, c, u)) < h && ((h = e), (a = t[0]), (l = t[1])));
          });
          const _ = Laya.Vector3,
            v = this.va,
            p = this.vb;
          var d = this.v30;
          (o[a].cloneTo(v),
            o[l].cloneTo(p),
            (h = this.DPL(t, v, p)),
            _.subtract(v, p, d),
            _.normalize(d, d),
            (s = this.v31),
            (e = this.v32),
            _.subtract(v, t, s),
            _.normalize(s, s),
            _.subtract(p, t, e),
            _.normalize(e, e),
            _.cross(s, e, s),
            _.normalize(s, s),
            _.cross(s, d, s),
            _.normalize(s, s));
          const f = this.v33;
          (_.scale(s, h, f),
            _.add(t, f, i),
            (t = this.v34),
            _.subtract(v, i, e),
            _.normalize(e, d),
            _.subtract(p, i, f),
            _.normalize(f, t),
            (t = Math.acos(_.dot(d, t))),
            isNaN(t) || t < 0.5
              ? (_.scalarLengthSquared(e) < _.scalarLengthSquared(e) ? v : p).cloneTo(i)
              : (_.scale(s, 0.05, f), n ? (f.z = 0) : (f.y = 0), _.add(i, f, i)));
        }
        static DPLS(t, s, e) {
          const i = W.Vec2.distanceSquared,
            r = this.v10;
          var n = i(s, e);
          if (0 == n) return i(t, e);
          r.setValue(t.x - s.x, t.y - s.y);
          const h = this.v11;
          return (
            h.setValue(e.x - s.x, e.y - s.y),
            (n = W.Vec2.dot(r, h) / n) < 0
              ? i(t, s)
              : 1 < n
                ? i(t, e)
                : (r.setValue(s.x + n * (e.x - s.x), s.y + n * (e.y - s.y)), i(t, r))
          );
        }
        static DPL(t, s, e) {
          const i = W.Vec3;
          var r = this.v31;
          i.subtract(t, s, r);
          var n = this.v32;
          return (
            i.subtract(e, s, n),
            1e-6 < (e = i.scalarLength(n)) && i.div(n, e, n),
            (r = i.dot(n, r)),
            (r = W.Mathf.Clamp(r, 0, e)),
            i.scale(n, r, n),
            i.add(s, n, n),
            i.distance(n, t)
          );
        }
      }
      ((e.id2 = !1),
        (e.zoneNodes = new Map()),
        (e.vps = []),
        (e.v0 = new Laya.Vector2()),
        (e.v1 = new Laya.Vector2()),
        (e.va = new Laya.Vector3()),
        (e.vb = new Laya.Vector3()),
        (e.v30 = new Laya.Vector3()),
        (e.v31 = new Laya.Vector3()),
        (e.v32 = new Laya.Vector3()),
        (e.v33 = new Laya.Vector3()),
        (e.v34 = new Laya.Vector3()),
        (e.v3t = new Laya.Vector3()),
        (e.v10 = new Laya.Vector2()),
        (e.v11 = new Laya.Vector2()),
        (e.v2 = new Laya.Vector2()),
        (e.LLs = new Map()),
        (t.NavM = e));
      class i extends SCR {
        constructor() {
          (super(...arguments), (this.group = -1), (this.vps = []));
        }
        static __i() {
          if (this._p) {
            this._p = !1;
            let t = Laya.ClassUtils.regClass;
            t("NaMS", M.NaMS);
          }
        }
        _parse(t) {
          ((this.id2 = t.id2), this.id2 && (M.NavM.id2 = !0));
        }
        _cloneTo(t) {
          t.id2 = this.id2;
        }
        onAwake() {
          var t = this;
          t.sp3 = t.owner;
          let s = t.sp3;
          for (; s && !(s.url && 5 < s.url.length);) s = s.parent;
          t.name = s.url;
          var e = (t.nv = t.sp3.getChildByName("__nav__"));
          e && (M.NavM.cm(t.name, e.meshFilter.sharedMesh), t.h());
        }
        onEnable() {
          i.ins = this;
        }
        onDestroy() {
          (super.onDestroy(), (this.nv = null), (this.vps.length = 0));
        }
        h() {
          this.nv.meshRenderer.enable = !1;
        }
        s() {
          W.DevL && W.DevL.ShowNav(this.nv);
        }
        fP(t, s) {
          this.group = M.NavM.getGroup(this.name, t);
          const e = M.NavM.findPath(t, s, this.name, this.group);
          if (e) {
            var i = e.length;
            const r = this.vps;
            for (let t = r.length; t < i; t++) r.push(new W.Vec3());
            const n = [];
            return (
              e.forEach((t, s) => {
                (t.cloneTo(r[s]), n.push(t));
              }),
              n
            );
          }
          return null;
        }
        ffP(s, t, e) {
          W.Fl.fse([
            W.Fl.c(
              (t, s, e) => {
                t(this.fP(s, e));
              },
              [t, e],
              this,
              20,
            ),
          ]).exe((t) => {
            s(t);
          });
        }
        R(t, s) {
          var e = this.group;
          return M.NavM.getRandomNode(this.name, e < 0 ? 0 : e, t, s);
        }
      }
      ((i._p = !0), (t.NaMS = i));
      class I {
        static _cc(t) {
          const s = W.Vec3;
          let e;
          var i;
          let r;
          var n = t.faces;
          for (e = 0, i = n.length; e < i; e++) {
            r = n[e];
            var h = (r.centroid = new s(0, 0, 0)),
              a = t.vertices;
            (s.add(h, a[r.a], h), s.add(h, a[r.b], h), s.add(h, a[r.c], h), s.scale(h, 1 / 3, h));
          }
        }
        static bunm(t) {
          return (this._cc(t), t.mergeVertices(), this._bupfg(t));
        }
        static _bupfg(e) {
          const i = [];
          var t = e.vertices;
          for (let t = 0, s = e.faces.length; t < s; t++) {
            var r = e.faces[t];
            i.push({
              id: this.polygonId++,
              vertexIds: [r.a, r.b, r.c],
              centroid: r.centroid,
              normal: r.normal,
              neighbours: [],
            });
          }
          var n = { polygons: i, vertices: t };
          for (let t = 0, s = i.length; t < s; t++) {
            var h = i[t];
            this._bupn(h, n);
          }
          return n;
        }
        static _bupn(e, t) {
          e.neighbours = [];
          var i = t.polygons;
          for (let t = 0, s = i.length; t < s; t++)
            e !== i[t] &&
              (1e4 < W.Vec3.distanceSquared(e.centroid, i[t].centroid) ||
                (2 <= this._ai(e.vertexIds, i[t].vertexIds).length && e.neighbours.push(i[t])));
        }
        static _ai(...s) {
          let e,
            t,
            i,
            r,
            n,
            h = [],
            a = {},
            l;
          for (l = s.length - 1, i = s[0].length, t = 0, e = 0; e <= l; e++)
            ((r = s[e].length), r < i && ((t = e), (i = r)));
          for (e = 0; e <= l; e++) {
            ((r = e === t ? 0 : e || t), (n = s[r].length));
            for (let t = 0; t < n; t++) {
              var o = s[r][t];
              a[o] === e - 1
                ? e === l
                  ? (h.push(o), (a[o] = 0))
                  : (a[o] = e)
                : 0 === e && (a[o] = 0);
            }
          }
          return h;
        }
        static gnm(e) {
          let i = { vertices: null, groups: null };
          for (let t = 0, s = e.vertices.length; t < s; t++) {
            let t = e.vertices;
            ((t.x = I._rN(t.x, 2)), (t.y = I._rN(t.y, 2)), (t.z = I._rN(t.z, 2)));
          }
          i.vertices = e.vertices;
          var n = I._bupg(e);
          function h(s, e) {
            for (let t = 0; t < s.length; t++) if (e === s[t]) return t;
          }
          i.groups = [];
          for (let t = 0, s = n.length; t < s; t++) {
            var a = n[t];
            let r = [];
            for (let t = 0, s = a.length; t < s; t++) {
              const o = a[t];
              let e = [],
                i = [];
              for (let t = 0, s = o.neighbours.length; t < s; t++) {
                var l = o.neighbours[t];
                (e.push(h(a, l)), i.push(I._gsvo(o, l)));
              }
              ((o.centroid.x = I._rN(o.centroid.x, 2)),
                (o.centroid.y = I._rN(o.centroid.y, 2)),
                (o.centroid.z = I._rN(o.centroid.z, 2)),
                r.push({
                  id: h(a, o),
                  neighbours: e,
                  vertexIds: o.vertexIds,
                  centroid: o.centroid,
                  portals: i,
                }));
            }
            i.groups.push(r);
          }
          return i;
        }
        static _gsvo(t, s) {
          let e = t.vertexIds,
            i = s.vertexIds,
            r = [];
          for (let t = 0, s = e.length; t < s; t++) {
            var n = e[t];
            -1 < i.indexOf(n) && r.push(n);
          }
          if (r.length < 2) return [];
          (-1 < r.indexOf(e[0]) && -1 < r.indexOf(e[e.length - 1]) && e.push(e.shift()),
            -1 < r.indexOf(i[0]) && -1 < r.indexOf(i[i.length - 1]) && i.push(i.shift()),
            (r = []));
          for (let t = 0, s = e.length; t < s; t++) {
            var h = e[t];
            -1 < i.indexOf(h) && r.push(h);
          }
          return r;
        }
        static _bupg(t) {
          var e = t.polygons;
          t.vertices;
          let i = [],
            r = 0;
          for (let t = 0, s = e.length; t < s; t++) {
            const n = e[t];
            (null == n.group &&
              ((n.group = r++),
              (function e(i) {
                for (let t = 0, s = i.neighbours.length; t < s; t++) {
                  const r = i.neighbours[t];
                  null == r.group && ((r.group = i.group), e(r));
                }
              })(n)),
              i[n.group] || (i[n.group] = []),
              i[n.group].push(n));
          }
          return i;
        }
        static _rN(t, s) {
          return ((s = new Number(t + "").toFixed(s)), parseFloat(s));
        }
        static ivp(t, e, i) {
          e.centroid;
          let r = 1e5,
            n = -1e5,
            h = [];
          var a = M.NavM.id2;
          for (let t = 0, s = e.vertexIds.length; t < s; t++) {
            var l = i[e.vertexIds[t]],
              o = a ? l.z : l.y;
            ((r = Math.min(o, r)), (n = Math.max(o, n)), h.push(l));
          }
          var s = a ? t.z : t.y;
          return !!(s < n + 0.5 && s > r - 0.5 && this._ipp(h, t));
        }
        static _ipp(t, s) {
          for (
            var e = M.NavM.id2, i = e ? s.y : s.z, r = !1, n = -1, h = t.length, a = h - 1;
            ++n < h;
            a = n
          ) {
            var l = t[n],
              o = t[a],
              l = e ? l.y : l.z,
              o = e ? o.y : o.z;
            ((l <= i && i < o) || (o <= i && i < l)) &&
              s.x < ((t[a].x - t[n].x) * (i - l)) / (o - l) + t[n].x &&
              (r = !r);
          }
          return r;
        }
      }
      I.polygonId = 1;
    })((_v = _v || {})),
    (function (t) {
      !(function () {
        var s = n();
        function t(t, s) {
          return d(t - 630, s);
        }
        for (;;)
          try {
            if (
              365747 ==
              -parseInt(t(1010, 1021)) * (-parseInt(t(1017, 1020)) / 2) +
                (parseInt(t(1009, 1003)) / 3) * (-parseInt(t(1006, 1019)) / 4) +
                -parseInt(t(1018, 1014)) / 5 +
                -parseInt(t(1001, 994)) / 6 +
                -parseInt(t(1003, 1011)) / 7 +
                parseInt(t(1008, 1001)) / 8 +
                parseInt(t(996, 1005)) / 9
            )
              break;
            s.push(s.shift());
          } catch (t) {
            s.push(s.shift());
          }
      })();
      class s extends _u[p(-122, -115)] {}
      t[p(-122, -123)] = s;
      class e extends _u[p(-131, -130)] {}
      t[p(-131, -142)] = e;
      class i extends _u[p(-114, -108)] {}
      t[p(-114, -101)] = i;
      class r extends _u[p(-113, -113)] {}
      function n() {
        var t = [
          "SSnakeScr",
          "Snake",
          "Sl_SideOfPlane",
          "NaMS",
          "231612SysYRz",
          "SlicerExtensions",
          "2904265TOEnkL",
          "AB3D",
          "DOWN",
          "3308ToPOJT",
          "Corps",
          "3721632xKUcqb",
          "417HqObqL",
          "535987qhbpro",
          "SlicedHull",
          "SlicedSubmesh",
          "LiReS",
          "SFishScr",
          "Text3D",
          "Snaco",
          "2qBapzc",
          "524620BFrdcJ",
          "NavM",
          "Slicer",
          "341370gscYFW",
        ];
        return (n = function () {
          return t;
        })();
      }
      t[p(-113, -118)] = r;
      class h extends _u[p(-115, -103)] {}
      t[p(-115, -103)] = h;
      class a extends _u[p(-132, -125)] {}
      t[p(-132, -138)] = a;
      class l extends _u.AB {}
      t.AB = l;
      class o extends _u[p(-116, -121)] {}
      t[p(-116, -106)] = o;
      class c extends _u[p(-125, -121)] {}
      t[p(-125, -127)] = c;
      class u extends _k[p(-127, -117)] {}
      t[p(-127, -119)] = u;
      class _ extends _k[p(-117, -111)] {}
      t[p(-117, -112)] = _;
      class v extends _k[p(-134, -125)] {}
      function p(t, s) {
        return d(t - -499, s);
      }
      function d(t, s) {
        var e = n();
        return (d = function (t, s) {
          return e[(t -= 365)];
        })(t, s);
      }
      t[p(-134, -136)] = v;
      class f extends _k[p(-118, -119)] {}
      var y;
      ((t[p(-118, -116)] = f),
        ((y = t[p(-130, -128)] || (t[p(-130, -127)] = {}))[(y.UP = 0)] = "UP"),
        (y[(y[p(-124, -132)] = 1)] = p(-124, -112)),
        (y[(y.ON = 2)] = "ON"));
      class w extends _v[p(-110, -120)] {}
      t[p(-110, -101)] = w;
      class g extends _v[p(-129, -137)] {}
      t[p(-129, -133)] = g;
    })((window.M = window.M || {}), M));
});
