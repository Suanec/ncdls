define("libs/min/B.min.js", function (require, module, exports) {
  var _p,
    SP3D = Laya.Sprite3D,
    Vector2 = Laya.Vector2,
    Vector3 = Laya.Vector3,
    Vec4 = Laya.Vector4,
    Component = Laya.Component;
  (!(function (a) {
    !(function () {
      const e = f();
      function t(t, e) {
        return y(t - 449, e);
      }
      for (;;)
        try {
          if (
            672022 ==
            +parseInt(t(1401, 1427)) +
              -parseInt(t(1400, 1336)) / 2 +
              -parseInt(t(1336, 1257)) / 3 +
              parseInt(t(1257, 1098)) / 4 +
              (-parseInt(t(1057, 1290)) / 5) * (parseInt(t(1192, 1251)) / 6) +
              (-parseInt(t(1314, 1439)) / 7) * (parseInt(t(1278, 1384)) / 8) +
              parseInt(t(1024, 1030)) / 9
          )
            break;
          e.push(e.shift());
        } catch (t) {
          e.push(e.shift());
        }
    })();
    let s = !1,
      c = !1,
      l = !1,
      h = !1,
      m;
    class _ extends Laya.Sprite {
      static [g(1338, 1550)]() {}
      [g(1619, 1473)](t, e, i) {
        (this._renderToGraphic(), super.render(t, e, i));
      }
      [g(1622, 1447)]() {}
      static [g(1719, 1583)](t = 0) {
        if (c || !W[e(811, 1029)] || !m || !m[e(922, 1021)]) return null;
        function e(t, e) {
          return g(t, e - -619);
        }
        if (!_.I) {
          let t = new _();
          ((t[e(999, 1064)] = 1e3),
            Laya[e(696, 893)][e(579, 778)](t),
            (_.I = t),
            (t.d = W.DevL.B2Draw(t, s)));
        }
        return null;
      }
      static ["D"](t) {
        _.I && W[g(14, 1648)].B2Loop(t, s);
      }
    }
    function g(t, e) {
      return y(e - 743, t);
    }
    const e = Laya[g(1434, 1639)];
    if (e) {
      let t = e[g(1380, 1550)];
      e.init = () => {
        (t(), _.enable());
      };
    } else Laya[g(1396, 1639)] = _;
    class t {
      static ["__b2init__"]() {
        function t(t, e) {
          return g(t, e - -1417);
        }
        ((this[t(-62, 182)] = m),
          m &&
            (m.wrapPointer
              ? ((l = s = !0), void 0 !== m.b2Body.prototype[t(12, 75)] && (h = !0))
              : m[t(96, 110)] || (l = c = !0),
            a.WN._i(m, s, c),
            B.B2PhysicsSimulation[t(305, 254)](),
            u[t(372, 254)](),
            v[t(415, 254)](),
            B.B2MeshColliderShape.__init__(),
            B[t(-221, 9)].__init__(),
            B[t(330, 214)].__init__(),
            B[t(200, 260)][t(20, 254)](),
            B.B2ConstraintComponent[t(462, 254)](),
            (window.B = B)));
      }
      static ["_init"]() {
        this.is_use_component = !1;
        const t = Laya.Scene3DUtils;
        function e(t, e) {
          return g(t, e - -620);
        }
        t._createNodeByJson = W[e(760, 726)][e(806, 845)];
      }
      static [g(1561, 1550)]() {
        function t(t, e) {
          return g(t, e - -1692);
        }
        ((SP3D._parseSprite3DInstance = W[t(-153, -346)][t(-346, -383)]),
          (Laya[t(74, -20)]._createComponentInstance = W.IPhy[t(19, -72)]),
          (W[t(-396, -346)][t(23, -201)] = W[t(-21, -208)].B2_J),
          this[t(-508, -378)]());
      }
      static ["initV2"](i, s, t = {}, e = !0) {
        var n;
        function r(t, e) {
          return g(e, t - -786);
        }
        const o = null !== (n = t[r(613, 601)]) && void 0 !== n ? n : 0,
          a = null !== (n = t.transformFromRender) && void 0 !== n && n,
          c = null !== (t = t.debug) && void 0 !== t && t,
          h = this;
        (e && h[r(528, 719)](), (h.is_use_component = !0));
        const l = window;
        if (
          ((m = l.B2D),
          (e = (t = null) => {
            function e(t, e) {
              return r(e - 478, t);
            }
            (t && (m = l[e(1052, 971)] = t),
              h[e(1088, 1135)](o, a),
              c && _[e(1062, 1275)](),
              s.call(i));
          }),
          m)
        )
          m[r(677, 470)]
            ? e()
            : m._wasm
              ? W.IPhy.reg(
                  m,
                  "b2d",
                  e,
                  !1,
                  !0,
                  (t, e) =>
                    W.LM._Ls(e, r(597, 457), () => {
                      t(0);
                    }),
                  !1,
                )
              : m()[r(750, 830)](e);
        else {
          const u = l.wx;
          u && !l.tt ? e(u.getBox2D()) : s[r(476, 288)](i);
        }
      }
      static [g(1560, 1443)](t, e) {
        this[s(1598, 1512)]();
        let i = Laya3D[s(1825, 1596)];
        if (!i) {
          i = Laya3D.b2PhysicsSettings = new B.B2PhysicsSettings();
          let t = Laya[s(2011, 1839)][s(1329, 1462)];
          (t("Laya.B2PhysicsCollider", B[s(1261, 1446)]),
            t("Laya.B2Rigidbody", B.B2Rigidbody),
            t(s(1439, 1446), B.B2PhysicsCollider),
            t("B2Rigidbody", B.B2Rigidbody),
            t(s(1530, 1554), B[s(1386, 1554)]),
            t("B2HingeConstraint", B[s(1501, 1589)]),
            t("B2MeshColliderShape", B[s(2077, 1914)]),
            t("B2Phy", B[s(1262, 1446)]),
            t("B2Rig", B.B2Rigidbody));
        }
        function s(t, e) {
          return g(t, e - 223);
        }
        ((i.mapping_type = t), (i[s(1498, 1507)] = e));
      }
      static [g(1470, 1573)](t, e, i, s, n = !1, r, o = !0, a = !0) {
        if (!(r = r || W[c(1110, 1035)][c(1062, 1271)].scene3D)) return !1;
        function c(t, e) {
          return g(t, e - -259);
        }
        const h = r.phy_n;
        return (
          !!h &&
          ((i = c(1053, 1186) != typeof i ? h.get(i) : i),
          r.b2PhysicsSimulation["rayCast" + (n ? "All" : "")](
            t,
            s,
            e,
            null == i ? -1 : r[c(1208, 1259)][i],
            null == i ? -1 : r.phy_m[i],
            o,
            a,
          ))
        );
      }
      static ["rayGMP"](t, e, i, s, n = !1, r, o = !0, a = !0) {
        if (!(r = r || W.S3D.main.scene3D))
          return new Promise((t) => {
            t(!1);
          });
        const c = r[h(-370, -162)];
        function h(t, e) {
          return g(t, e - -1536);
        }
        return c
          ? ((i = "number" != typeof i ? c.get(i) : i),
            r[h(-62, 30)][h(-38, 39) + (n ? h(-181, -75) : "P")](
              t,
              s,
              e,
              null == i ? -1 : r[h(216, -18)][i],
              null == i ? -1 : r[h(-420, -197)][i],
              o,
              a,
            ))
          : new Promise((t) => {
              t(!1);
            });
      }
      static [g(1548, 1629)](t, e, i, s, n = !1, r) {
        if (!(r = r || W.S3D.main[a(911, 1060)])) return !1;
        const o = r.phy_n;
        function a(t, e) {
          return g(t, e - -409);
        }
        return (
          !!o &&
          ((i = "number" != typeof i ? o.get(i) : i),
          r[a(1335, 1157)]._cirj(
            n,
            t,
            e,
            s,
            null == i ? -1 : r.phy_g[i],
            null == i ? -1 : r.phy_m[i],
          ))
        );
      }
      static [g(1376, 1220)](t, e, i, s, n = !1, r) {
        if (!(r = r || W.S3D.main[o(434, 225)]))
          return new Promise((t) => {
            t(!1);
          });
        function o(t, e) {
          return g(e, t - -1035);
        }
        const a = r.phy_n;
        return a
          ? ((i = "number" != typeof i ? a[o(226, 95)](i) : i),
            r.b2PhysicsSimulation[o(187, 239)](
              n,
              t,
              e,
              s,
              null == i ? -1 : r[o(483, 260)][i],
              null == i ? -1 : r[o(304, 447)][i],
            ))
          : new Promise((t) => {
              t(!1);
            });
      }
      static ["en"](t) {
        B.B2PhysicsSimulation[g(1337, 1377)] = t;
      }
    }
    ((t[g(1463, 1619)] = !1), (a.IBox2D = t));
    class n extends Component {
      constructor(t, e) {
        function i(t, e) {
          return g(e, t - -775);
        }
        (super(),
          (this[i(877, 1053)] = 0),
          (this._friction = 0.5),
          (this[i(497, 485)] = 0),
          (this[i(444, 463)] = 0),
          (this[i(767, 544)] = 0),
          (this[i(473, 573)] = null),
          (this._enableProcessCollisions = !0),
          (this._inPhysicUpdateListIndex = -1),
          (this.canScaleShape = !0),
          (this[i(499, 314)] = !1),
          (this[i(620, 466)] = !1),
          (this[i(569, 625)] = 0),
          (this._is_laya_comp = !0),
          (this[i(629, 581)] = W[i(482, 399)][i(684, 623)]),
          (this._x = NaN),
          (this._y = NaN),
          (this._z = 0),
          (this._w = 0),
          (this._a = 0),
          (this._b = 0),
          (this._c = NaN),
          (this._s = NaN),
          (this._k = 0),
          (this._inner = !1),
          (this.wx_inter_frame = 1),
          null !== t && (this[i(444, 514)] = t),
          null !== e && (this._canCollideWith = e),
          ((B.B2PhysicsComponent[i(570, 523)][this.id] = this).bodyDef = new m.b2BodyDef()),
          (this[i(569, 779)] = 0));
      }
      static [g(1905, 1671)]() {
        function t(t, e) {
          return g(t, e - -1103);
        }
        if (
          ((this[t(286, 494)] = new Vector2()),
          (this[t(236, 126)] = new Vector3()),
          (this[t(598, 512)] = new W.Quat()),
          (this[t(-34, 164)] = new W[t(676, 489)]()),
          (this._m40 = new W.M4()),
          (this[t(366, 583)] = new m.b2Vec2()),
          h)
        ) {
          const e = m[t(503, 539)][t(250, 397)];
          ((e.SetActive = e[t(573, 499)]), (e.IsActive = e.IsEnabled));
        }
      }
      static [g(1344, 1250)](t) {
        function e(t, e) {
          return g(e, t - -497);
        }
        let i;
        var s = t[e(914, 708)];
        switch (t.type) {
          case e(727, 535):
            var n = t[e(874, 1046)];
            i = n
              ? new B[e(910, 957)](n[0], n[1], n[2], s[0], s[1], s[2])
              : new B.B2BoxColliderShape();
            break;
          case e(1130, 936):
          case e(957, 950):
            i = new B.B2SphereColliderShape(t[e(1013, 1059)], s[0], s[1], s[2]);
            break;
          case e(1168, 1238):
            i = new B[e(1194, 1135)](t[e(1191, 1058)]);
            break;
          default:
            throw "unknown shape type.";
        }
        if (t[e(914, 1023)]) {
          const r = i.localOffset;
          (r.fromArray(t[e(914, 900)]), (i[e(952, 771)] = r));
        }
        return i;
      }
      get [g(1360, 1468)]() {
        var t = this._colliderShape;
        return t ? t[g(1457, 1455)] : 0;
      }
      set ["density"](t) {
        const e = this[g(-92, 1248)];
        e && (e.density = t);
      }
      get ["restitution"]() {
        return this[g(880, 1652)];
      }
      set ["restitution"](t) {
        function e(t, e) {
          return g(t, e - -1697);
        }
        this[e(-29, -45)] = t;
        const i = this[e(-485, -449)];
        i && (i[e(-473, -306)] = t);
      }
      get ["friction"]() {
        return this[g(-347, 1398)];
      }
      set [g(1538, 1569)](t) {
        this._friction = t;
        const e = this._colliderShape;
        e && (e.friction = t);
      }
      get [g(1456, 1268)]() {
        return this[g(-37, 1395)];
      }
      [g(1328, 1305)](t) {
        const e = this[i(1734, 1689)];
        function i(t, e) {
          return g(t, e - 80);
        }
        e && (e.SetActive(t), (this[i(1440, 1475)] = t));
      }
      get ["colliderShape"]() {
        return this[g(186, 1248)];
      }
      set [g(1369, 1393)](t) {
        function e(t, e) {
          return g(e, t - -603);
        }
        let i = this[e(645, 441)];
        if (
          (i && ((i[e(673, 868)] = !1), (i._attatchedCollisionObject = null), i[e(635, 693)]()),
          (this[e(645, 464)] = t))
        ) {
          if (t[e(673, 491)]) throw "PhysicsComponent: this shape has attatched to other entity.";
          ((t._attatched = !0),
            (t[e(869, 848)] = this)[e(1006, 847)] ||
              (this._simulation &&
                this[e(646, 573)] &&
                (this._addToSimulation(), this[e(696, 613)](!0))),
            t.sFilter(this._collisionGroup, this[e(939, 1059)]));
        }
      }
      get ["simulation"]() {
        return this._simulation;
      }
      get [g(1286, 1237)]() {
        return this._collisionGroup;
      }
      set ["collisionGroup"](t) {
        function e(t, e) {
          return g(e, t - -1377);
        }
        this[e(-158, -105)] = t;
        const i = this[e(-129, -304)];
        i && (i.collisionGroup = t);
      }
      get [g(1207, 1343)]() {
        return this[g(406, 1542)];
      }
      set [g(1100, 1343)](t) {
        this[g(1924, 1542)] = t;
        const e = this._colliderShape;
        e && (e.canCollideWith = t);
      }
      ["sFilter"](t, e) {
        function i(t, e) {
          return g(e, t - -1536);
        }
        ((this._collisionGroup = t), (this._canCollideWith = e));
        const s = this[i(-288, -438)];
        s && s[i(-116, -240)](t, e);
      }
      get ["ccdMotionThreshold"]() {
        const t = this[e(1165, 1142)];
        function e(t, e) {
          return g(t, e - -467);
        }
        return t && t[e(1271, 1053)]() ? 1 : 0;
      }
      set [g(1574, 1589)](t) {
        this._ccdMotionThreshold = t;
        const e = this[g(812, 1609)];
        e && e.SetBullet(0 != t);
      }
      ["_parseShape"](e) {
        function i(t, e) {
          return g(e, t - 56);
        }
        var s = e.length;
        if (1 === s) {
          var t = B[i(1482, 1395)][i(1306, 1109)](e[0]);
          this.colliderShape = t;
        } else {
          let t = new B[i(1421, 1651)]();
          for (var n = 0; n < s; n++) {
            var r = B.B2PhysicsComponent[i(1306, 1376)](e[n]);
            t[i(1264, 1143)](r, n == s, !1);
          }
          this.colliderShape = t;
        }
      }
      [g(1170, 1293)](t) {
        var e = this[i(108, 239)].transform;
        function i(t, e) {
          return g(e, t - -1163);
        }
        return (
          !!(
            this[i(85, 257)] &&
            e &&
            this[i(86, -92)] &&
            1e-4 < W.Vec3[i(53, -61)](this[i(241, 0)], t, B[i(462, 262)][i(272, 98)])
          ) && (this._RCS(e, t), !0)
        );
      }
      [g(1178, 1378)](t, e) {
        e = e || t[s(154, 300)]();
        let i = this._colliderShape.clone();
        function s(t, e) {
          return g(t, e - -927);
        }
        (i.refreshSize(e, t),
          e.cloneTo(this._last_scale),
          this._colliderShape.destroy(),
          (this._colliderShape = i),
          (i._attatched = !0),
          (i[s(487, 545)] = this),
          i.CreateFixture(this, this[s(457, 310)], this[s(305, 416)]));
      }
      [g(1585, 1451)]() {
        var t = this[n(1236, 1420)];
        ((this[n(1359, 1597)] = t._scene[n(1326, 1460)]), (this[n(1740, 1702)] = t.name));
        let e = t[n(1741, 1793)],
          i = e[n(1438, 1376)]();
        i.cloneTo(this[n(1411, 1553)]);
        let s = B[n(1641, 1774)];
        function n(t, e) {
          return g(t, e - 149);
        }
        var r = s._v1;
        (s.v2(e.position, r),
          this.bodyDef.position.Set(r.x, r.y),
          (this[n(1602, 1803)][n(1462, 1615)] = s.Ag(e.rotationEuler)));
        const o = this._colliderShape;
        (o && !o._refreshSizeInit && o[n(1969, 1827)](i, e),
          this[n(1921, 1758)]
            ? this.SetActive(!0)
            : this[n(1198, 1397)] && (this[n(1405, 1465)](), this._derivePhysicsTransformation(!0)),
          (r = t.scene) &&
            r.phy_cm &&
            ((t = t[n(1455, 1572)]), this[n(1781, 1569)](r.phy_g[t], r.phy_m[t])));
      }
      [g(1294, 1304)]() {
        this.enabled = this._enabled;
      }
      ["_onDisable"]() {
        (this._btColliderObject && (this.SetActive(!1), this._remove()),
          (this._colliderShape[g(1245, 1580)] = !1),
          (this.wx_inter_frame = 1));
      }
      [g(1494, 1396)](t) {
        function e(t, e) {
          return g(e, t - -1410);
        }
        B[e(215, 252)]._en &&
          (t
            ? (this[e(-23, -97)] || ((this._awaked = !0), this._onAwake()), this._onEnable())
            : this._onDisable());
      }
      ["_remove"]() {
        const t = this[e(-281, -157)];
        function e(t, e) {
          return g(t, e - -1605);
        }
        t && t[e(-99, -161)](this);
        const i = this._btColliderObject;
        (i && (i[e(-53, -15)] = null),
          (this._btColliderObject = null),
          (this[e(-387, -157)] = null));
      }
      [g(1497, 1430)]() {
        function t(t, e) {
          return g(t, e - -1157);
        }
        (delete B.B2PhysicsComponent._physicObjectsMap[this.id],
          this[t(83, 160)](),
          this[t(25, 91)][t(-98, 81)](),
          (this._colliderShape = null),
          (this.bodyDef = null),
          (this[t(-36, 187)] = 0));
      }
      ["_parse"](t) {
        function e(t, e) {
          return g(e, t - -1275);
        }
        (null != t[e(-38, -151)] && this.sFilter(t.collisionGroup, t.canCollideWith),
          null != t[e(314, 260)] && (this[e(314, 194)] = t[e(314, 374)]));
      }
      static [g(1357, 1406)](t) {
        function n(t, e) {
          return g(t, e - -537);
        }
        if (t.s) {
          let s = [];
          (t.s[n(1020, 1039)]((t) => {
            let e = {
              type: "C" == t.t ? "SphereColliderShape" : i(74, -17),
              center: [t.c[0], t.c[1], 0],
            };
            function i(t, e) {
              return n(t, e - -704);
            }
            ("C" == t.t ? (e[i(287, 269)] = t.r) : (e[i(-72, 130)] = [t.s[0], t.s[1], 0]),
              s.push(e));
          }),
            (t.shapes = s),
            delete t.s,
            (t.restitution = 0),
            (t.friction = 0),
            (t[n(1042, 1070)] = 0),
            (t.isTrigger = !!t.iT),
            delete t.iT);
        }
      }
      [g(1160, 1316)]() {
        function t(t, e) {
          return g(t, e - -1498);
        }
        this[t(-115, -50)][t(-420, -277)](this, this[t(-75, -279)], this[t(-170, 44)]);
      }
      ["_derivePhysicsTransformation"](t) {
        this._innerDerivePhysicsTransformation();
      }
      ["_innerDerivePhysicsTransformation"]() {
        let t = B.B2PhysicsSimulation;
        function e(t, e) {
          return g(t, e - -682);
        }
        var i, s, n;
        this.owner &&
          !this.owner.destroyed &&
          ((n = (i = this.owner[e(1109, 962)])[e(747, 565)]),
          (s = B[e(887, 744)][e(1171, 1004)]),
          t.V2(n, s),
          (n = this._btColliderObject)
            ? this[e(1226, 1010)](s, t.Ag(i[e(916, 993)]))
            : (this.bodyDef.position[e(893, 660)](s.x, s.y),
              (this.bodyDef.angle = t.Ag(i.rotationEuler))),
          n && this._onScaleChange(i[e(723, 545)]()));
      }
      [g(1457, 1462)](t) {
        function e(t, e) {
          return g(t, e - 27);
        }
        ((t._simulation = this.simulation),
          this[e(1086, 1275)] && (t.colliderShape = this._colliderShape.clone()),
          (t[e(1297, 1418)] = this._restitution),
          (t[e(1696, 1596)] = this._friction),
          (t[e(1431, 1616)] = this[e(1415, 1299)]),
          t.sFilter(this[e(1003, 1246)], this._canCollideWith),
          (t.canScaleShape = this.canScaleShape));
      }
      ["b2SetTransform"](t, e) {
        const i = this[s(1898, 1812)];
        function s(t, e) {
          return g(t, e - 203);
        }
        null == i.SetTransformVec ? i[s(1850, 1655)](t, e) : i[s(1552, 1693)](t, e);
      }
      [g(1250, 1350)](e) {
        function i(t, e) {
          return g(t, e - -1679);
        }
        if (this._btColliderObject) {
          W[i(-89, -66)][i(-444, -255)](this[i(-447, -408)], e);
          let t = B[i(-277, -54)];
          var s,
            n = this.owner[i(-171, -35)];
          ((e.wp || e.wre || e.wq) &&
            ((s = B.B2PhysicsComponent[i(52, 7)]),
            t.V2(n[i(-571, -432)], s),
            this[i(141, 13)](s, t.Ag(n[i(138, -4)]))),
            (e.ws || e.ls) && this[i(-580, -386)](n[i(-376, -452)]()));
        }
      }
      ["OP"](t) {
        var e = this[n(-79, -285)],
          i = this[n(-617, -407)][n(40, -34)];
        let s = B[n(-176, -53)];
        function n(t, e) {
          return g(t, e - -1678);
        }
        var r = s._v0,
          o = s[n(-380, -383)];
        return (
          W.TR3.InverseTransformPoint(i, t, r),
          s.v2(r, o),
          (i = o.x),
          (t = o.y),
          e instanceof v
            ? (s.v2(e.localOffset, o),
              (r = o.x),
              (o = o.y),
              -0.5 + r <= i && i <= 0.5 + r && -0.5 + o <= t && t <= 0.5 + o)
            : e instanceof C && Math.sqrt(i * i + t * t) <= e[n(-14, -168)]
        );
      }
    }
    ((n[g(1164, 1345)] = {}), (n[g(1465, 1532)] = !0), (a[g(1557, 1426)] = n));
    class i extends n {
      constructor(t, e) {
        (super(t, e), (this[g(47, 1359)] = !1));
      }
      get [g(1174, 1355)]() {
        return this[g(802, 1359)];
      }
      set [g(1304, 1355)](t) {
        function e(t, e) {
          return g(t, e - -620);
        }
        this._isTrigger = t;
        const i = this[e(823, 628)];
        i && (i[e(890, 653)] = t);
      }
      ["_onAdded"]() {
        function t(t, e) {
          return g(t, e - -579);
        }
        (super[t(575, 725)](), (this.isTrigger = this[t(1001, 780)]));
      }
      ["_cloneTo"](t) {
        function e(t, e) {
          return g(t, e - -103);
        }
        (super[e(1514, 1359)](t), (t[e(1278, 1252)] = this._isTrigger));
      }
    }
    ((a.B2PhysicsTriggerComponent = i),
      (a.B2PhysicsCollider = class extends i {
        constructor(t, e) {
          (super(t, e), (this._enableProcessCollisions = !1), (this.bodyDef.type = 0));
        }
        [g(1213, 1421)](t) {
          function e(t, e) {
            return g(e, t - -876);
          }
          (n._ssh(t),
            this[e(524, 318)](t[e(551, 551)]),
            null != t[e(693, 600)] && (this.friction = t[e(693, 549)]),
            null != t.restitution && (this[e(515, 369)] = t.restitution),
            null != t[e(479, 686)] && (this[e(479, 631)] = t[e(479, 322)]),
            super._parse(t));
        }
        [g(1131, 1304)]() {}
      }));
    class r extends i {
      constructor(t = 1, e = 65535) {
        function i(t, e) {
          return g(e, t - -107);
        }
        (super(t, e),
          (this._isKinematic = !1),
          (this._angularDamping = 0),
          (this[i(1107, 932)] = 0),
          (this._overrideGravity = !1),
          (this[i(1180, 1026)] = !0),
          (this.bodyDef.type = 2));
      }
      static [g(1880, 1671)]() {
        function t(t, e) {
          return g(t, e - -816);
        }
        ((this[t(295, 393)] = new m[t(883, 647)]()),
          (this[t(802, 778)] = new m.b2Vec2()),
          (this[t(885, 721)] = new m.b2Vec2(0, 0)),
          (this._btImpulse = new m.b2Vec2()),
          (this[t(625, 819)] = new m[t(618, 647)]()));
      }
      get [g(1647, 1514)]() {
        return this._isKinematic;
      }
      set ["isKinematic"](t) {
        function e(t, e) {
          return g(t, e - -1069);
        }
        t = (this._isKinematic = t) ? 1 : 2;
        const i = this[e(742, 540)];
        (i && i.SetType(t), (this.bodyDef[e(205, 366)] = t));
      }
      get [g(1496, 1509)]() {
        return this[g(-202, 1214)];
      }
      set ["linearDamping"](t) {
        function e(t, e) {
          return g(t, e - 47);
        }
        this[e(1200, 1261)] = t;
        const i = this[e(1684, 1656)];
        (i && i[e(1750, 1643)](t), (this[e(1716, 1701)][e(1651, 1556)] = t));
      }
      get ["angularDamping"]() {
        return this._angularDamping;
      }
      set [g(1375, 1380)](t) {
        function e(t, e) {
          return g(t, e - -529);
        }
        this[e(736, 886)] = t;
        const i = this[e(967, 1080)];
        (i && i.SetAngularDamping(t), (this[e(938, 1125)][e(973, 851)] = t));
      }
      get ["overrideGravity"]() {
        return this._overrideGravity;
      }
      set ["overrideGravity"](t) {
        this[i(633, 398)] = t;
        const e = this._btColliderObject;
        function i(t, e) {
          return g(t, e - -1141);
        }
        ((t = t ? 0 : 1), e && e.SetGravityScale(t), (this[i(455, 513)].gravityScale = t));
      }
      get [g(1586, 1521)]() {
        var t = this._btColliderObject;
        const e = B.B2PhysicsComponent[i(1036, 963)];
        function i(t, e) {
          return g(t, e - -266);
        }
        return (e[i(1507, 1305)](0, 0, 0), t ? B[i(1323, 1359)].V3(t[i(1080, 1219)], e) : e);
      }
      get [g(1776, 1690)]() {
        function t(t, e) {
          return g(e, t - -130);
        }
        const e = this._btColliderObject,
          i = B.B2PhysicsComponent[t(1099, 1250)];
        return (i[t(1441, 1217)](0, 0, 0), e ? B.B2PhysicsSimulation.V3(e[t(1264, 1039)](), i) : i);
      }
      set [g(1896, 1690)](t) {
        const e = this._btColliderObject;
        var i;
        function s(t, e) {
          return g(e, t - -1124);
        }
        e &&
          (this.wakeUp(),
          (i = B.B2Rigidbody[s(85, 42)]),
          B[s(501, 520)].V2(t, i),
          e[s(255, 110)](i));
      }
      get ["angularFactor"]() {
        const t = this._btColliderObject;
        function e(t, e) {
          return g(t, e - -1551);
        }
        t && (this[e(-210, -277)] = t[e(37, -68)]());
        const i = B.B2PhysicsComponent._v30;
        return (this._isFixedRotation ? i[e(-108, 20)](0, 0, 0) : i[e(89, 20)](1, 1, 1), i);
      }
      set [g(1566, 1410)](t) {
        this._isFixedRotation = !(0 < t.x || 0 < t.y || 0 < t.z);
        const e = this._btColliderObject;
        function i(t, e) {
          return g(t, e - -655);
        }
        (e && e[i(805, 864)](this._isFixedRotation),
          (this[i(787, 999)][i(483, 655)] = this._isFixedRotation));
      }
      get [g(1685, 1681)]() {
        const t = this._btColliderObject,
          e = B.B2PhysicsComponent[i(1182, 1379)];
        function i(t, e) {
          return g(e, t - -47);
        }
        return (e[i(1524, 1335)](0, 0, 0), t ? B[i(1578, 1346)].Ro(t.GetAngularVelocity(), e) : e);
      }
      set [g(1767, 1681)](t) {
        const e = this[i(2, -13)];
        function i(t, e) {
          return g(t, e - -1622);
        }
        e && (this.wakeUp(), e[i(138, 29)](B[i(67, 3)].Ag(t, !1)));
      }
      get [g(1421, 1441)]() {
        var t = this._btColliderObject;
        function e(t, e) {
          return g(e, t - -1395);
        }
        const i = B.B2PhysicsComponent._v30;
        return (i[e(176, 69)](0, 0, 0), t ? B.B2PhysicsSimulation.Ro(t[e(-11, -62)], i) : i);
      }
      get [g(1391, 1290)]() {
        function t(t, e) {
          return g(e, t - -1396);
        }
        const e = this[t(213, 356)];
        return !!e && !e[t(270, 344)]();
      }
      get [g(1127, 1231)]() {
        return this._canSleep;
      }
      set [g(1254, 1231)](t) {
        function e(t, e) {
          return g(e, t - -1561);
        }
        this[e(-274, -395)] = t;
        const i = this._btColliderObject;
        (i && i.SetSleepingAllowed(t), (this.bodyDef[e(-351, -407)] = t));
      }
      set ["constaintRigidbodyA"](t) {
        this._constaintRigidbodyA = t;
      }
      get ["constaintRigidbodyA"]() {
        return this[g(777, 1425)];
      }
      set [g(1504, 1264)](t) {
        this[g(153, 1390)] = t;
      }
      get [g(1481, 1264)]() {
        return this._constaintRigidbodyB;
      }
      [g(1066, 1293)](t) {
        return !!super._onScaleChange(t);
      }
      [g(1131, 1304)]() {}
      [g(1265, 1451)]() {
        function t(t, e) {
          return g(e, t - -1203);
        }
        (super[t(248, 220)](),
          this._colliderShape &&
            (this.SetActive(!0),
            this[t(198, 28)](this._constaintRigidbodyA),
            this._enableConstraint(this._constaintRigidbodyB)),
          (this[t(28, -78)] = this._canSleep));
      }
      [g(1408, 1508)]() {
        function t(t, e) {
          return g(e, t - -153);
        }
        this._btColliderObject &&
          (this[t(1537, 1611)][t(1418, 1376)](0, 0, 0),
          this.angularVelocity[t(1418, 1258)](0, 0, 0),
          this[t(1481, 1349)](),
          super[t(1355, 1539)]());
      }
      [g(1547, 1401)](t) {
        function e(t, e) {
          return g(e, t - -1303);
        }
        t &&
          (t[e(-6, -223)] && !t[e(178, 229)] && t[e(214, 452)](),
          t[e(85, 253)]._simulation && (t[e(353, 512)](), t._onEnable()));
      }
      ["_parse"](t) {
        var e;
        function i(t, e) {
          return g(t, e - -884);
        }
        (n[i(306, 522)](t),
          5 == t[i(458, 551)].length &&
            ((t.mass = t.ma),
            delete t.ma,
            (t.isKinematic = !!t.iK),
            delete t.iK,
            (t[i(725, 625)] = t.lD),
            delete t.lD,
            (t[i(398, 496)] = t.aD),
            delete t.aD,
            (t[i(478, 620)] = !t.g),
            delete t.g,
            (t[i(297, 505)] = [0, 0, 0]),
            (t[i(425, 492)] = [1, 1, 1]),
            (t[i(698, 526)] = [1, t.fa, 1]),
            delete t.fa),
          this._parseShape(t[i(667, 543)]),
          null != t.friction && (this[i(669, 685)] = t[i(540, 685)]),
          null != t[i(458, 507)] && (this[i(417, 507)] = t.restitution),
          null != t.isTrigger && (this[i(659, 471)] = t.isTrigger),
          null != t[i(809, 625)] && (this.linearDamping = t.linearDamping),
          null != t[i(607, 496)] && (this[i(732, 496)] = t[i(693, 496)]),
          null != t[i(710, 620)] && (this[i(853, 620)] = t.overrideGravity),
          null != t[i(330, 526)] &&
            ((e = this.angularFactor).fromArray(t[i(568, 526)]), (this[i(679, 526)] = e)),
          super._parse(t),
          null != t.isKinematic && (this[i(616, 630)] = t[i(537, 630)]));
      }
      [g(1201, 1430)]() {
        super._onDestroy();
      }
      ["_cloneTo"](t) {
        function e(t, e) {
          return g(e, t - -687);
        }
        (super[e(775, 963)](t),
          (t[e(827, 755)] = this._isKinematic),
          (t.density = this.density),
          (t.angularDamping = this._angularDamping),
          (t[e(822, 912)] = this._linearDamping),
          (t.overrideGravity = this[e(852, 1088)]),
          this[e(1003, 1104)].cloneTo(t.linearVelocity),
          this.angularVelocity.cloneTo(t.angularVelocity),
          this[e(723, 552)].cloneTo(t[e(723, 719)]),
          (t[e(544, 346)] = this[e(600, 665)]));
      }
      ["applyForce"](t, e = null) {
        const i = this[s(855, 856)];
        function s(t, e) {
          return g(e, t - -754);
        }
        var n;
        i &&
          ((n = B.B2Rigidbody[s(455, 507)]),
          B.B2PhysicsSimulation.V2(t, n),
          e
            ? ((t = B.B2Rigidbody[s(840, 816)]), B[s(871, 905)].V2(e, t), i.ApplyForce(n, t, !0))
            : i.ApplyForceToCenter(n, !0));
      }
      [g(1267, 1281)](t) {
        const e = this._btColliderObject;
        e && ((t = B.B2PhysicsSimulation.Ag(t, !1)), e[g(1660, 1505)](t, !0));
      }
      ["applyImpulse"](t, e = null) {
        function i(t, e) {
          return g(t, e - -1051);
        }
        const s = this._btColliderObject;
        var n, r;
        s &&
          ((n = (r = B[i(532, 580)])[i(808, 584)]),
          (r = r[i(636, 634)]),
          B[i(447, 574)].V2(t, r),
          e
            ? (B.B2PhysicsSimulation.V2(e, n), s[i(123, 191)](r, n, !0))
            : s[i(345, 202)]
              ? s.ApplyLinearImpulseToCenter(r, !0)
              : s[i(-28, 191)](r, s[i(722, 633)](), !0));
      }
      [g(1586, 1659)](t) {
        const e = this[g(661, 1609)];
        e && ((t = B.B2PhysicsSimulation.Ag(t, !1)), e.ApplyAngularImpulse(t, !0));
      }
      [g(1554, 1487)]() {
        function t(t, e) {
          return g(e, t - -343);
        }
        const e = this[t(1266, 1183)];
        e && e[t(979, 867)](!0);
      }
      ["clearForces"]() {
        function t(t, e) {
          return g(t, e - -955);
        }
        const e = this._btColliderObject;
        e && (e.SetLinearVelocity(B[t(701, 676)][t(767, 582)]), e.SetAngularVelocity(0));
      }
    }
    ((r[g(1196, 1422)] = 0),
      (r.TYPE_DYNAMIC = 1),
      (r.TYPE_KINEMATIC = 2),
      (r[g(1221, 1460)] = 1),
      (r[g(1788, 1586)] = 2),
      (a[g(1809, 1631)] = r));
    class o {
      constructor(t, e) {
        function i(t, e) {
          return g(e, t - -331);
        }
        ((this._ciri = 0),
          (this[i(1163, 1209)] = 0),
          (this._utd = 0),
          (this._utds = []),
          (this[i(1182, 1124)] = 1),
          (this[i(1109, 1036)] = []),
          (this[i(1127, 938)] = 1 / 60),
          (this[i(1180, 1081)] = 6),
          (this[i(1165, 1380)] = 6),
          (this.transformFromRender = !1));
        let s = B[i(1294, 1115)];
        ((this[i(940, 732)] = e),
          (this.fixedTimeStep = t[i(1127, 1159)]),
          (this[i(1180, 1123)] = t.velocityIterations),
          (this.positionIterations = t.positionIterations),
          s[i(1050, 1249)](t[i(1068, 1276)]),
          (this[i(953, 1012)] = t[i(953, 910)]),
          (this[i(1109, 1284)] = []),
          (this[i(976, 909)] = new Vector3(0, 0, 0)),
          s.V2(this[i(976, 884)], s[i(1355, 1588)]));
        const n = (this._btDiscreteDynamicsWorld = new m.b2World(s._bv20));
        n[i(1021, 911)](!0);
        const r = (this._cl = new B.B2ContactListener());
        if (c)
          B[i(1171, 1179)]
            ? ((this[i(1010, 897)] = new a.AABBTree()),
              this[i(1010, 970)][i(1147, 1169)](),
              (r.ccN = r[i(1111, 1003)]))
            : (r.ccN = r[i(947, 914)]);
        else {
          const o = (this[i(957, 802)] = new (m.JSContactListener || m[i(1151, 987)])());
          ((o[i(1191, 1283)] = r[i(1191, 1344)][i(1006, 893)](r)),
            (o.EndContact = r.EndContact.bind(r)),
            (o[i(1143, 1299)] = () => {}),
            (o.PostSolve = () => {}),
            n.SetContactListener(o));
        }
        ((this._ds_map = new Map()),
          (this._cirs = []),
          (this[i(1247, 1116)] = []),
          (this._lines = []),
          (this[i(1088, 1185)] = []),
          (this[i(938, 1065)] = new m[i(1082, 1277)]()),
          (this._tr = new m.b2Transform()),
          s._b || (s._b = W.Mem._j.b),
          _.I && n.SetDebugDraw(_.I.d));
      }
      static ["__init__"]() {
        ((this[r(1425, 1528)] = new m.b2Vec2()),
          (this._bv21 = new m[r(1202, 1066)]()),
          (this[r(1306, 1284)] = new Vector3()),
          (this._v1 = new Vector2()),
          (this[r(990, 994)] = new Vector2()),
          (this[r(1031, 877)] = new Vector2()));
        const t = this[r(1239, 1448)];
        function r(t, e) {
          return g(e, t - -261);
        }
        if (s)
          ((t._simulate = a.WN[r(1272, 1122)]),
            (t._cirj = a.WN[r(1394, 1400)]),
            (t[r(961, 815)] = a.WN._cirwP2));
        else if (c) {
          ((t._simulate = a.WN[r(1272, 1103)]),
            (t[r(1293, 1093)] = t._trN_),
            (t.mouse = t[r(1005, 791)]),
            (t._cirj = a.WN[r(1066, 1119)]),
            (t[r(961, 923)] = a.WN._cirNP2),
            (t[r(1014, 938)] = a.WN[r(950, 943)]),
            (t[r(1265, 1331)] = a.WN[r(1040, 1141)]),
            (t[r(1095, 901)] = () => {}),
            (t[r(1151, 1342)] = () => {}));
          const e = Laya.Script3D,
            i = e.prototype;
          ((e.t1 = [r(1063, 906), r(1402, 1181)]),
            (e.t2 = ["Enter", r(1019, 836), "Stay"]),
            (i[r(1375, 1346)] = i._onAdded),
            (i[r(1043, 1194)] = function () {
              function i(t, e) {
                return r(e - -905, t);
              }
              if ((this._onA2(), !this[i(-127, 47)])) {
                var t = Laya[i(-20, 142)],
                  s = t.t1,
                  n = t.t2;
                for (let e = 0; e < 2; e++) {
                  for (let t = 0; t < 3; t++)
                    if (40 < this["on" + s[e] + n[t]].toString().length) {
                      this[i(154, 47)] = !0;
                      break;
                    }
                  if (this._onphy) break;
                }
              }
            }),
            (this._dm = []),
            B[r(1241, 1187)] && a[r(995, 1211)]._i());
        }
      }
      static [g(1326, 1549)]() {}
      get [g(1190, 1389)]() {
        function t(t, e) {
          return g(e, t - -1125);
        }
        if (!this[t(468, 304)]) throw t(370, 543);
        return this._gravity;
      }
      set ["gravity"](t) {
        if (!this._btDiscreteDynamicsWorld)
          throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
        function e(t, e) {
          return g(t, e - -112);
        }
        this._gravity = t;
        let i = B.B2PhysicsSimulation;
        (i.V2(t, i._bv20), this[e(1624, 1481)][e(1104, 1200)](i[e(1538, 1574)]));
      }
      static [g(1502, 1381)](t) {
        let e = this;
        function i(t, e) {
          return g(e, t - -614);
        }
        e.type = t;
        let s = ["g1", "g2", "V3", "V2", "Ro", "Ag", "v3", "v2", "Rl"];
        (s[i(962, 732)]((t) => {
          e[t] = a.WN[t + e.type];
        }),
          (s = ["tP"]),
          s[i(962, 925)]((t) => {
            e[t] = a.WN[t + e.type + e[i(857, 1291)]];
          }));
      }
      ["_update"](t) {
        function e(t, e) {
          return g(e, t - -1397);
        }
        const i = this._btDiscreteDynamicsWorld;
        if (i) {
          this.transformFromRender && this[e(-82, 137)]();
          const r = this[e(146, 267)];
          this[e(171, -56)]();
          const o = W[e(67, -119)];
          var s = Date[e(260, 301)]();
          r._updatePreStep();
          var n = Date.now();
          ((o._cost_phy_tr = n - s),
            (s = n),
            i[e(163, 407)](t, this.velocityIterations, this.positionIterations),
            (B.f = Laya.timer[e(252, 308)]),
            (t = Date[e(260, 498)]()),
            this[e(19, -36)](),
            (n = Date[e(260, 214)]()),
            (this[e(150, -85)] = n - t),
            (o[e(37, 142)] = n - s),
            (s = n),
            c ? r.ccN(this[e(43, -122)], this.tree) : r[e(261, 325)](),
            r[e(194, 288)](),
            (o[e(276, 437)] = Date.now() - s),
            (this[e(-49, -278)] = 0),
            (this._linei = 0),
            W[e(251, 112)] && W.DevL._UpB2(i),
            W.DevL && _.D(i));
        }
      }
      ["_destroyBodys"]() {
        function t(t, e) {
          return g(e, t - -1525);
        }
        (this._ds_map[t(51, 197)]((t) => {
          this._btDiscreteDynamicsWorld.DestroyBody(t);
        }),
          this._ds_map[t(13, -122)]());
      }
      [g(1313, 1416)]() {
        function s(t, e) {
          return g(e, t - -376);
        }
        if (this[s(1217, 1267)]) {
          var n = this[s(1064, 988)];
          let i = B[s(1249, 1466)];
          for (let t = 0, e = n[s(978, 866)]; t < e; t++) {
            var r = n[t];
            if (!r._inner) {
              const h = r[s(1233, 1085)];
              var o,
                a,
                c = r.owner;
              c &&
                !c[s(1062, 1265)] &&
                h &&
                r[s(1019, 873)] &&
                h[s(1290, 1297)]() &&
                ((o = c.transform),
                (c = (a = h[s(1308, 1497)]()).x),
                (a = a.y),
                (i.tP(o, c, a) || 0 < r[s(968, 1003)]) &&
                  !r[s(898, 1008)] &&
                  ((r = 57.2957795 * h.GetAngle()), i.Rl(o, r)));
            }
          }
        }
      }
      ["_uPTR"]() {
        function t(t, e) {
          return g(t, e - -645);
        }
        for (var e = this[t(1030, 795)], i = 0, s = e.length; i < s; i++) {
          var n = e[i];
          n._inner || (n._derivePhysicsTransformation(!1), (n[t(1058, 978)] = -1));
        }
      }
      ["_addPhysicsCollider"](t, e, i) {
        const s = this._ds_map;
        let n;
        function r(t, e) {
          return g(t, e - -1113);
        }
        (s.has(t)
          ? ((n = t._btColliderObject = s.get(t)), s[r(440, 418)](t))
          : (n = t._btColliderObject = this._btDiscreteDynamicsWorld.CreateBody(t.bodyDef)),
          t[r(419, 192)](!0),
          B[r(600, 512)]._b(t, e, i, this[r(549, 327)], t instanceof B[r(548, 518)]),
          (n[r(386, 477)] = t),
          c &&
            this.tree &&
            ((i = (e = t._btColliderObject.GetFixtureList()[r(492, 367)](0))[r(134, 215)]),
            (e = e[r(451, 435)]),
            (e = new a.AABB(i.x, i.y, e.x, e.y)),
            (e = this[r(345, 228)][r(669, 482)](t, e)),
            (t[r(-36, 102)] = e)));
      }
      [g(1328, 1444)](t) {
        function e(t, e) {
          return g(t, e - -1008);
        }
        var i;
        (t instanceof B[e(412, 623)] &&
          -1 < (i = this._pUL[e(454, 247)](t)) &&
          this[e(336, 432)][e(581, 359)](i, 1),
          t[e(409, 297)](!1),
          this[e(456, 312)].set(t, t[e(691, 601)]),
          c && this[e(176, 333)] && this[e(516, 333)][e(270, 469)](t[e(415, 207)]));
      }
      [g(1365, 1556)]() {
        function t(t, e) {
          return g(t, e - -1409);
        }
        (c && this.tree && (this[t(-264, -68)][t(119, 69)](), (this.tree = null)),
          this._btDiscreteDynamicsWorld &&
            (this[t(281, 159)](),
            (this[t(118, 184)] = null),
            (this[t(201, 31)][t(-41, -55)] = 0),
            (this[t(95, 31)] = null),
            (this._gravity = null),
            this._cl[t(9, -71)](),
            (this[t(192, 134)] = null),
            (this[t(-187, -121)] = null)),
          this._ds_map.clear(),
          (this[t(41, -89)] = null),
          (this[t(-252, -138)] = null));
      }
      ["clearForces"]() {
        this._btDiscreteDynamicsWorld && this._btDiscreteDynamicsWorld[g(564, 1228)]();
      }
      [g(1436, 1561)](t, e, i) {
        return (
          !(-1 < e) || (0 < (i & (t = t.GetFilterData()).categoryBits) && 0 < (t[g(681, 1674)] & e))
        );
      }
      ["_rayj"](o, t, e, a, c = -1, h = -1) {
        o = !!(a && a instanceof Array);
        const l = B[u(924, 748)];
        function u(t, e) {
          return g(e, t - -701);
        }
        var i = l._bv20,
          s = l._bv21;
        (l.V2(t, i), l.V2(e, s));
        let _ = 1,
          d = !1;
        const p = this[u(860, 701)];
        let f = this[u(842, 1086)]._cU;
        const y = function (e, i, s, n) {
            if (e && p(e, c, h) && (e = e[r(658, 721)]()) && !(e = e._component)[r(819, 720)]) {
              if (((d = !0), a && (o || _ >= n))) {
                let t = o ? f.gHR() : a;
                ((t.collider = e),
                  (t[r(1022, 965)] = d),
                  l.V3(i, t[r(1156, 962)]),
                  l.V3(s, t.normal),
                  (t.hitFraction = n),
                  o && a.push(t),
                  (_ = n));
              }
              return n;
            }
            function r(t, e) {
              return u(e - 13, t);
            }
            return 1;
          },
          n = m.JSRayCastCallback;
        let r;
        return (
          n
            ? ((r = new n()),
              (r[u(511, 665)] = function (t, e, i, s) {
                const n = m[r(253, 22)];
                function r(t, e) {
                  return u(e - -953, t);
                }
                return (
                  (t = n(t, m.b2Fixture)),
                  (e = n(e, m[r(-14, -191)])),
                  (i = n(i, m[r(-276, -191)])),
                  (s = y(t, e, i, s)),
                  o ? 1 : s
                );
              }))
            : (r = function (t, e, i, s) {
                return ((s = y(t, e, i, s)), o ? 1 : s);
              }),
          this[u(892, 844)].RayCast(r, i, s),
          d
        );
      }
      ["raycastFromTo"](t, e, i, s = -1, n = -1) {
        return this[g(1125, 1275)](!1, t, e, i, s, n);
      }
      [g(1283, 1291)](t, e, i, s = -1, n = -1) {
        return this[g(701, 1275)](!0, t, e, i, s, n);
      }
      ["rayCast"](t, e = null, i = 2e8, s = -1, n = -1) {
        function r(t, e) {
          return g(t, e - -743);
        }
        var o = t.origin,
          a = B[r(980, 882)][r(717, 824)];
        return (W[r(319, 514)].rayTo(t, i, a), this[r(460, 532)](!1, o, a, e, s, n));
      }
      [g(1742, 1498)](t, e, i = 2e8, s = -1, n = -1) {
        var r = t[a(22, -151)],
          o = B.B2PhysicsSimulation[a(83, -63)];
        function a(t, e) {
          return g(t, e - -1630);
        }
        return (W.Vec3.rayTo(t, i, o), this[a(-299, -355)](!0, r, o, e, s, n));
      }
      ["_rayjP"](e, i, s, n, r, o, t, a) {
        return new Promise((t) => {
          t(this[y(532, 1737)](e, i, s, n, r, o));
        });
      }
      [g(1680, 1488)](t, e, i, s = -1, n = -1, r = !0, o = !0) {
        return this[g(498, 1526)](!1, t, e, i, s, n, r, o);
      }
      ["raycastAllFromToP"](t, e, i, s = -1, n = -1, r = !0, o = !0) {
        return this._rayjP(!0, t, e, i, s, n, r, o);
      }
      ["rayCastP"](t, e = null, i = 2e8, s = -1, n = -1, r = !0, o = !0) {
        function a(t, e) {
          return g(t, e - -679);
        }
        var c = t[a(813, 800)],
          h = B[a(939, 946)][a(730, 888)];
        return (W.Vec3[a(823, 679)](t, i, h), this[a(964, 847)](!1, c, h, e, s, n, r, o));
      }
      ["rayCastAllP"](t, e, i = 2e8, s = -1, n = -1, r = !0, o = !0) {
        var a = t.origin,
          c = B.B2PhysicsSimulation[h(46, -63)];
        function h(t, e) {
          return g(t, e - -1630);
        }
        return (W.Vec3[h(-156, -272)](t, i, c), this[h(73, -104)](!0, a, c, e, s, n, r, o));
      }
      [g(1161, 1356)](t, e) {
        function i(t, e) {
          return g(e, t - -1425);
        }
        const s = this[i(168, 160)];
        s && (t._btConstraint = s[i(110, 41)](t.jointDef));
      }
      ["removeConstraint"](t) {
        const e = this._btDiscreteDynamicsWorld;
        e && e.DestroyJoint(t._btConstraint);
      }
      static ["g1"](t) {
        return 0;
      }
      static ["g2"](t) {
        return 0;
      }
      static ["v2"](t, e) {}
      static ["v3"](t, e) {}
      static ["tP"](t, e, i) {
        return !1;
      }
      static ["V3"](t, e) {
        return e;
      }
      static ["V2"](t, e) {
        return e;
      }
      static ["V32s"](i, s) {
        s = s || [];
        for (let e = 0, t = i[g(259, 1354)]; e < t; e++) {
          let t = new Vector2();
          ((t.x = this.g1(i[e])), (t.y = this.g2(i[e])), s.push(t));
        }
        return s;
      }
      static ["Ro"](t, e) {
        return e;
      }
      static ["Rl"](t, e) {}
      static ["Ag"](t, e = 0) {
        return 0;
      }
      ["mouse"](t, e, s) {
        e = this._aabb(t, e, 0.001);
        let n = !1;
        function i(t, e) {
          return g(t, e - -482);
        }
        s && s.reset();
        const r = function (e) {
            function i(t, e) {
              return y(t - 306, e);
            }
            if (e && e.GetBody() && ((n = !0), s)) {
              let t = s;
              ((t.collider = e[i(972, 746)]()[i(1153, 1046)]), (t[i(1216, 1374)] = n));
            }
          },
          o = m[i(827, 1043)];
        let a;
        return (
          o
            ? ((a = this._mqcb),
              (a = a || (this._mqcb = new o())),
              (a.ReportFixture = function (t) {
                const e = m.wrapPointer;
                return ((t = e(t, m[i(25, 1135)])), r(t), !0);
              }))
            : (a = function (t) {
                return (r(t), !0);
              }),
          this[i(944, 1111)][i(820, 954)](a, e),
          n
        );
      }
      ["_moN"](t, e, i) {
        function s(t, e) {
          return g(e, t - -1577);
        }
        let n = B[s(48, -104)]._bv20;
        ((n.x = t), (n.y = e));
        var r = this._pUL,
          o = r[s(-223, -289)];
        i && i[s(-99, 111)]();
        let a = !1;
        for (let t = 0; t < o; t++) {
          var c = r[t];
          const h = c._btColliderObject,
            l = c[s(-184, -4)][s(-352, -238)];
          if (h && l && ((a = l[s(-213, -101)](h.GetTransform(), n)), a)) {
            if (i) {
              let t = i;
              ((t.collider = c), (t[s(76, 157)] = a));
            }
            break;
          }
        }
        return a;
      }
      ["_pp"](t) {
        const e = B[g(474, 1625)];
        var i = e._bv20;
        return (e.V2(t, i), i);
      }
      [g(1168, 1245)](t, e, i) {
        function s(t, e) {
          return g(e, t - -1103);
        }
        let n = this.aabb;
        return (
          n
            ? (n.lowerBound.Set(t - i, e - i), n[s(445, 233)][s(239, 128)](t + i, e + i))
            : ((n = this[s(557, 373)] = new m[s(233, 184)]()),
              (n[s(225, 328)] = new m[s(360, 445)](t - i, e - i)),
              (n.upperBound = new m[s(360, 272)](t + i, e + i))),
          n
        );
      }
      ["_cir_"](t) {
        function e(t, e) {
          return g(e, t - -96);
        }
        return ((this._cir[e(1156, 1008)] = t), this[e(1173, 1276)]);
      }
      [g(1741, 1554)](t) {
        return ((t = this[g(1304, 1368)](t)), this._tr.p.Set(t.x, t.y), this._tr);
      }
      [g(1446, 1323)](t) {
        function e(t, e) {
          return g(t, e - -1431);
        }
        return ((t = this[e(-26, -63)](t)), this[e(-126, -69)].Set(t, 0), this[e(-3, -69)]);
      }
      ["_cirj"](e, t, i, s, n = -1, r = -1) {
        ((i = this[h(-175, -244)](i)), (t = this._tr_(t)));
        let o = !1;
        const a = this[h(90, -134)];
        let c = this[h(72, -25)][h(170, -13)];
        function h(t, e) {
          return g(e, t - -1471);
        }
        return (
          this[h(122, -21)][h(36, 85)](
            function (t) {
              return (
                (t = (function (e) {
                  function i(t, e) {
                    return y(t - -896, e);
                  }
                  if (
                    e &&
                    e.GetBody() &&
                    a(e, n, r) &&
                    !(e = e[i(-230, -442)]()[i(-49, 172)])[i(-231, -383)]
                  ) {
                    if (((o = !0), s)) {
                      let t = s instanceof Array ? c[i(-278, -284)]() : s;
                      ((t.collider = e), (t[i(14, 225)] = o), s instanceof Array && s.push(t));
                    }
                    return 0;
                  }
                  return 1;
                })(t)),
                e ? 1 : t
              );
            },
            i,
            t,
          ),
          o
        );
      }
      ["circle"](t, e, i, s = -1, n = -1) {
        return this[g(613, 1349)](!1, t, e, i, s, n);
      }
      [g(1204, 1382)](t, e, i, s = -1, n = -1) {
        return this[g(494, 1349)](!0, t, e, i, s, n);
      }
      ["_cirP"](e, i, s, n, r = -1, o = -1) {
        return new Promise((t) => {
          t(this._cirj(e, i, s, n, r, o));
        });
      }
      [g(1737, 1581)](t, e, i, s = -1, n = -1) {
        return this[g(350, 1222)](!1, t, e, i, s, n);
      }
      [g(1350, 1243)](t, e, i, s = -1, n = -1) {
        return this._cirP(!0, t, e, i, s, n);
      }
    }
    ((o.disableSimulation = !1),
      (o._en = !0),
      (o[g(1767, 1523)] = !1),
      (o[g(1384, 1471)] = 0),
      (o.type = 0),
      (a[g(1463, 1625)] = o),
      (a.B2PhysicsSettings = class {
        constructor() {
          function t(t, e) {
            return g(t, e - -1375);
          }
          ((this.fixedTimeStep = 1 / 60),
            (this[t(312, 136)] = 6),
            (this.positionIterations = 6),
            (this.mapping_type = 0),
            (this[t(-140, -91)] = !1),
            (this.canSleep = !0));
        }
      }));
    class u {
      constructor() {
        function t(t, e) {
          return g(t, e - -849);
        }
        ((this[t(722, 582)] = -1),
          (this[t(383, 427)] = !1),
          (this[t(571, 391)] = -1),
          (this._compoundParent = null),
          (this[t(767, 623)] = null),
          (this[t(380, 476)] = 0),
          (this[t(679, 606)] = 0),
          (this._localOffset = W[t(365, 408)].zero),
          (this._refreshSizeInit = !1),
          (this[t(486, 553)] = null),
          (this[t(877, 680)] = new m.b2FixtureDef()),
          (this.density = 1),
          (this._lo = new Vector2()));
      }
      static ["__init__"]() {
        function t(t, e) {
          return g(e, t - 241);
        }
        ((this._v30 = new Vector3()),
          (this._bv20 = new m.b2Vec2()),
          c && (this[t(1741, 1563)].fixdens = this[t(1698, 1462)]));
      }
      get ["type"]() {
        return this[g(145, 1431)];
      }
      get [g(1610, 1449)]() {
        return this[g(889, 1298)];
      }
      set ["localOffset"](t) {
        function e(t, e) {
          return g(e, t - -615);
        }
        t[e(1013, 1118)](this[e(683, 475)]);
      }
      [g(1756, 1628)](t) {
        function e(t, e) {
          return g(e, t - -182);
        }
        this._localOffset.cloneTo(t.localOffset);
        var i = this._fidef;
        const s = t._fidef;
        var n = i[e(1436, 1680)];
        const r = s.filter;
        if (
          ((r.categoryBits = n[e(1081, 1130)]),
          (r.maskBits = n.maskBits),
          (s[e(1387, 1401)] = i[e(1387, 1198)]),
          (s[e(1209, 1176)] = i[e(1209, 1257)]),
          (s[e(1091, 919)] = i.isSensor),
          this[e(1147, 907)] && t[e(1147, 1104)])
        ) {
          const o = this._fi,
            a = t[e(1147, 1001)];
          n = o[e(1095, 1079)]();
          const c = a[e(1095, 1272)]();
          ((c[e(1081, 929)] = n[e(1081, 1015)]),
            (c[e(1492, 1254)] = n[e(1492, 1514)]),
            a[e(1288, 1344)](c),
            a[e(1311, 1471)](i[e(1387, 1257)]),
            a[e(1035, 1172)](i.restitution),
            a.SetSensor(i[e(1091, 1006)]));
        }
        t.density = this.density;
      }
      ["clone"]() {
        return null;
      }
      ["destroy"]() {
        function t(t, e) {
          return g(t, e - -253);
        }
        c &&
          (B[t(1261, 1372)][t(1260, 1434)][Math[t(1624, 1414)](1e5 * this[t(1247, 1202)])] = null);
        const e = this.owner ? this.owner[t(1371, 1356)] : null;
        (s && this[t(845, 1076)] && this._fi._ && (this[t(1266, 1076)]._ = null),
          e && this[t(863, 1076)] && e.DestroyFixture(this._fi),
          this._btShape && (this[t(995, 972)] = null),
          (this._attatchedCollisionObject = null),
          (this[t(1219, 1045)] = null),
          (this.owner = null),
          (this[t(1046, 1276)] = null),
          (this._fi = null));
      }
      ["refreshSize"](t, e) {
        this[g(1469, 1580)] = !0;
      }
      get ["density"]() {
        return this[g(672, 1455)];
      }
      set [g(1403, 1468)](t) {
        function e(t, e) {
          return g(e, t - -1041);
        }
        ((t = this.fixdens(t)),
          (this._density = t),
          (this._fidef.density = t),
          this[e(288, 442)] && this[e(288, 292)][e(493, 258)](t));
      }
      set [g(1696, 1569)](t) {
        ((this._fidef.friction = t), this._fi && this._fi[g(90, 1493)](t));
      }
      set ["restitution"](t) {
        ((this._fidef.restitution = t), this[g(1179, 1329)] && this._fi.SetRestitution(t));
      }
      set [g(1510, 1273)](t) {
        function e(t, e) {
          return g(e, t - -1743);
        }
        ((this[e(-214, -246)].isSensor = t), this[e(-414, -278)] && this._fi[e(-110, -350)](t));
      }
      set [g(1102, 1237)](e) {
        function t(t, e) {
          return g(t, e - -1387);
        }
        this[t(-4, 142)][t(346, 231)].categoryBits = e;
        let i = this[t(-108, -58)];
        if (i) {
          let t = i.GetFilterData();
          ((t.categoryBits = e), i.SetFilterData(t));
        }
      }
      set [g(1420, 1343)](e) {
        this._fidef[s(660, 533)].maskBits = e;
        let i = this._fi;
        function s(t, e) {
          return g(t, e - -1085);
        }
        if (i) {
          let t = i[s(284, 192)]();
          ((t.maskBits = e), i[s(199, 385)](t));
        }
      }
      [g(1602, 1420)](e, i) {
        let t = this._fidef[n(897, 972)];
        ((t[n(542, 534)] = e), (t[n(953, 900)] = i));
        let s = this._fi;
        function n(t, e) {
          return g(e, t - -721);
        }
        if (s) {
          let t = s.GetFilterData();
          ((t[n(542, 653)] = e), (t.maskBits = i), s[n(749, 987)](t));
        }
      }
      [g(1316, 1403)](i, s, n) {
        function r(t, e) {
          return g(e, t - -1272);
        }
        if (((this[r(-1, 148)] = i), this[r(-47, 196)])) {
          let t = (this._fi = i._btColliderObject[r(131, -102)](this._fidef)),
            e = t[r(5, 223)]();
          ((e[r(-9, 108)] = s), (e[r(402, 540)] = n), t.SetFilterData(e));
        }
      }
      ["fixdens"](t) {
        return Math[g(1046, 1446)](t, 1e-7);
      }
      static ["_fdn"](t) {
        function e(t, e) {
          return g(e, t - -568);
        }
        let i = B[e(1057, 1005)]._dm;
        for (t = Math.round(1e5 * Math.max(t, 1e-5)); i[t];)
          t += Math[e(1099, 1154)](Math.max(1e-4 * W[e(1043, 1027)].real(2 * t, t), 1));
        return ((i[t] = this), 1e-5 * t);
      }
    }
    a[g(1554, 1503)] = u;
    class d extends u {
      constructor() {
        function t(t, e) {
          return g(t, e - 68);
        }
        (super(), (this[t(1491, 1440)] = []), (this[t(1743, 1499)] = 5));
      }
      static ["__init__"]() {}
      [g(1533, 1515)](t) {
        function e(t, e) {
          return g(t, e - -1600);
        }
        (this[e(-258, -329)]._btColliderObject[e(-415, -260)](t._fi),
          (t[e(-163, -324)] = !1),
          (t[e(6, -198)] = null),
          (t[e(-115, -360)] = -1),
          (t[e(-284, -329)] = null));
      }
      [g(1468, 1632)]() {}
      ["_removeReference"]() {}
      ["_updateChildTransform"](t) {}
      [g(1369, 1208)](t, e = !0, i = !0) {
        function s(t, e) {
          return g(t, e - -421);
        }
        if (t[s(1014, 855)]) throw s(945, 1164);
        if (
          ((t._attatched = !0),
          (t[s(970, 981)] = this),
          (t._indexInCompound = this._childColliderShapes[s(1122, 933)]),
          this._childColliderShapes.push(t),
          i)
        ) {
          const o = t[s(1257, 1108)];
          var n = this[s(1090, 1108)];
          const a = o[s(1326, 1197)];
          ((i = n.filter),
            (a.categoryBits = i.categoryBits),
            (a[s(1379, 1253)] = i.maskBits),
            (o[s(1259, 1148)] = n.friction),
            (o.restitution = n.restitution),
            (o.isSensor = n.isSensor));
        }
        isNaN(this.density) || (t[s(853, 1047)] = this[s(921, 1047)]);
        const r = (n = this.owner) ? n[s(1196, 1188)] : null;
        r && (t[s(1220, 982)](n, n[s(992, 816)], n[s(1015, 922)]), e && r.ResetMassData());
      }
      ["removeChildShape"](e) {
        function i(t, e) {
          return g(t, e - -1721);
        }
        if (e._compoundParent === this) {
          var s = e._indexInCompound;
          this[i(-111, -206)](e);
          const n = this._childColliderShapes;
          let t = n[n[i(-450, -367)] - 1];
          ((t._indexInCompound = s), (n[s] = t), n[i(-236, -166)]());
        }
      }
      ["clearChildShape"]() {
        const t = this[s(321, 453)];
        for (var e = 0, i = t.length; e < i; e++) this[s(355, 596)](t[e]);
        function s(t, e) {
          return g(t, e - -919);
        }
        t.length = 0;
      }
      [g(1671, 1506)]() {
        function t(t, e) {
          return g(t, e - 196);
        }
        return this[t(1752, 1568)][t(1678, 1550)];
      }
      ["cloneTo"](t) {
        function i(t, e) {
          return g(t, e - -360);
        }
        let s = t;
        s[i(1138, 1180)]();
        const n = this[i(947, 1012)];
        for (let t = 0, e = n[i(933, 994)]; t < e; t++)
          s[i(1056, 848)](n[t][i(1316, 1214)](), t == e);
      }
      ["clone"]() {
        var t = new B[g(528, 1365)]();
        return (this.cloneTo(t), t);
      }
      ["destroy"]() {
        function t(t, e) {
          return g(t, e - -1729);
        }
        super[t(-492, -491)]();
        for (var e = this._childColliderShapes, i = 0, s = e[t(-168, -375)]; i < s; i++) {
          var n = e[i];
          0 === n._referenceCount && n[t(-703, -491)]();
        }
      }
      set [g(1420, 1468)](t) {
        function e(t, e) {
          return g(t, e - -1439);
        }
        ((super[e(59, 29)] = t), this[e(112, 241)](e(-25, 29), t));
      }
      set ["friction"](t) {
        ((super.friction = t), this[g(427, 1680)]("friction", t));
      }
      set ["restitution"](t) {
        ((super.restitution = t), this._sChildValue("restitution", t));
      }
      set ["isSensor"](t) {
        ((super.isSensor = t), this._sChildValue("isSensor", t));
      }
      set ["collisionGroup"](t) {
        function e(t, e) {
          return g(e, t - -958);
        }
        ((super[e(279, 375)] = t), this._sChildValue(e(279, 218), t));
      }
      set [g(1228, 1343)](t) {
        function e(t, e) {
          return g(e, t - -622);
        }
        ((super[e(721, 843)] = t), this[e(1058, 1064)]("canCollideWith", t));
      }
      ["sFilter"](t, e) {
        function i(t, e) {
          return g(e, t - -279);
        }
        super[i(1141, 984)](t, e);
        for (var s = this._childColliderShapes, n = 0, r = s.length; n < r; n++)
          s[n][i(1141, 961)](t, e);
      }
      ["CreateFixture"](t) {
        function e(t, e) {
          return g(e, t - -1117);
        }
        this[e(154, 306)] = t;
        for (
          var i = this._childColliderShapes,
            s = this.owner.collisionGroup,
            n = this.owner[e(226, 429)],
            r = 0,
            o = i[e(237, 327)];
          r < o;
          r++
        )
          i[r][e(286, 49)](t, s, n);
      }
      [g(1599, 1680)](t, e) {
        var i = this[g(-138, 1372)];
        if (i) for (var s = 0, n = i.length; s < n; s++) i[s][t] = e;
      }
    }
    function p(e) {
      let i = [0, -1, 1, 0, 0, 1, -1, 0];
      function s(t, e) {
        return g(t, e - -322);
      }
      for (let t = 0; t < this._c; t++) {
        var n = e.GetVertex(t);
        (this._ps[s(958, 963)](new Vector2(n.x, n.y)),
          this[s(1228, 1010)].push(new Vector2(i[2 * t], i[2 * t + 1])));
      }
      i[s(839, 1032)] = 0;
    }
    function f() {
      const t = [
        "anchor",
        "1000084pkzOVG",
        "222855mxJiIF",
        "_connectAnchor",
        "addChildShape",
        "_bv21",
        "allowSleep",
        "_rayN2",
        "ReportFixture",
        "_onphy",
        "_linearDamping",
        "node",
        "distance2D",
        "SetRestitution",
        "value",
        "_collisionGroup",
        "circleGMP",
        "_addPhysicsCollider",
        "_cirP",
        "B2PhysicsCollider",
        "BoxColliderShape",
        "_btShape",
        "_setUpdateFrame",
        "getWorldLossyScale",
        "ClearForces",
        "_v30",
        "_cP",
        "canSleep",
        "setMesh",
        "_autoChangeAngularLimitEnable",
        "collideConnected",
        "_connectUp",
        "_positions",
        "collisionGroup",
        "destroy",
        "regClass",
        "_indexInCompound",
        "upperAngle",
        "ApplyLinearImpulse",
        "circleAllP",
        "GetUpperLimit",
        "_aabb",
        "b2RevoluteJoint",
        "position",
        "_colliderShape",
        "enabled",
        "_creatShape",
        "_v2",
        "m_radius",
        "ApplyLinearImpulseToCenter",
        "linearBounce",
        "indexOf",
        "AABBTree",
        "Vec3",
        "_ps",
        "jointDef",
        "_lo",
        "get",
        "call",
        "categoryBits",
        "constaintRigidbodyB",
        "parent",
        "_moN",
        "_q1",
        "isActive",
        "_cir",
        "V2_Pool",
        "owner",
        "_ccdMotionThreshold",
        "isSensor",
        "_isFixedRotation",
        "_rayj",
        "_attatched",
        "GetFilterData",
        "ccN2",
        "B2D",
        "Exit",
        "applyTorque",
        "colliderB",
        "_connectIndex",
        "transformFromRender",
        "push",
        "_hRPI",
        "_canSleep",
        "_js_cl",
        "__b2init__",
        "isSleeping",
        "raycastAllFromTo",
        "_v3",
        "_onScaleChange",
        "S3D",
        "_v1",
        "_cir_",
        "_is_clone_create",
        "_localOffset",
        "_derivePhysicsTransformation",
        "_anchor",
        "_rayNP4",
        "shape",
        "m_p",
        "_onAdded",
        "SetActive",
        "data",
        "_gravity",
        "Script3D",
        "_pSI",
        "fixedRotation",
        "_b2PhysicsSimulation",
        "SetGravity",
        "multiply",
        "_init",
        "_uPTR",
        "_addToSimulation",
        "_remove",
        "20105226wGgpmP",
        "_maxAngularLimit",
        "_ds_map",
        "_convex",
        "SetAwake",
        "_trN_",
        "Trigger",
        "_referenceCount",
        "dampingRatio",
        "_cirN4",
        "lowerBound",
        "_fi",
        "scan",
        "B2FixedConstraint",
        "_ns",
        "_hRP",
        "_r2",
        "_isRevoluteJoint",
        "b2AABB",
        "bind",
        "destory",
        "phy_m",
        "DestroyFixture",
        "tree",
        "Set",
        "canCollideWith",
        "_jc",
        "_physicObjectsMap",
        "IPhy",
        "damping",
        "_ciri",
        "_cirj",
        "sTR",
        "84170pYUQzv",
        "SetAllowSleeping",
        "_cs",
        "length",
        "isTrigger",
        "addConstraint",
        "_connectedBody",
        "rayTo",
        "_isTrigger",
        "b2ChainShape",
        "gHR",
        "_tr",
        "distance",
        "TestPoint",
        "B2CompoundColliderShape",
        "B2HingeConstraint",
        "splice",
        "_pp",
        "DouglasPeuckerMax",
        "hitFraction",
        "size",
        "_childColliderShapes",
        "b2PhysicsSettings",
        "phy_n",
        "_cPP",
        "linearFactor",
        "_en",
        "_RCS",
        "SetLinearVelocity",
        "angularDamping",
        "mtpye",
        "circleAll",
        "asmb2",
        "m_torque",
        "linearLimitDamper",
        "enableAngularLimit",
        "_awaked",
        "ownBody",
        "gravity",
        "_constaintRigidbodyB",
        "restitution",
        "_btConstraint",
        "colliderShape",
        "GetLinearVelocity",
        "_isAct",
        "_setActive",
        "addChild",
        "_friction",
        "mapping_type",
        "_parseShape",
        "_enableConstraint",
        "_compoundParent",
        "CreateFixture",
        "_last_scale",
        "_nc",
        "_ssh",
        "B2BoxColliderShape",
        "_inner",
        "GetBody",
        "angularFactor",
        "center",
        "removeConstraint",
        "b2CircleShape",
        "_parseInteractive",
        "_angularDamping",
        "_simulate",
        "m_vertices",
        "EnableLimit",
        "_lineF",
        "sFilter",
        "_parse",
        "TYPE_STATIC",
        "layer",
        "set",
        "_constaintRigidbodyA",
        "B2PhysicsComponent",
        "shapes",
        "CONSTRAINT_HINGE_CONSTRAINT_TYPE",
        "CONSTRAINT_FIXED_CONSTRAINT_TYPE",
        "_onDestroy",
        "_type",
        "getComponent",
        "positionOnB",
        "_cost_phy_sim",
        "type",
        "QueryAABB",
        "collider",
        "destroyed",
        "_colliderA",
        "_pUL",
        "totalTorque",
        "ccN3",
        "_initV2",
        "_removePhysicsCollider",
        "number",
        "max",
        "_renderToGraphic",
        "_simulation",
        "localOffset",
        "SetAsBox",
        "_onEnable",
        "SetTransform",
        "ref",
        "CapsuleColliderShape",
        "_density",
        "Scene3D",
        "_fdn",
        "fixedTimeStep",
        "one",
        "_BT_DISABLE_WORLD_GRAVITY",
        "AllP",
        "_cloneTo",
        "b2Vec2",
        "FPS",
        "_cNJ",
        "angle",
        "MeshSprite3D",
        "density",
        "scene3D",
        "SetFilterData",
        "tfast",
        "_attatchedCollisionObject",
        "render",
        "PreSolve",
        "_linearDamp",
        "SetAsArray",
        "destroyNode",
        "reset",
        "origin",
        "GetAABB",
        "connectedBody",
        "b2ContactListener",
        "IsFixedRotation",
        "PhyType",
        "m_force",
        "474zFahga",
        "wakeUp",
        "raycastFromToP",
        "V32s",
        "SetTransformVec",
        "MAIN",
        "IsEnabled",
        "SetFriction",
        "_linei",
        "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly",
        "positionIterations",
        "_sizeY",
        "rayCastAll",
        "localScale",
        "prototype",
        "_connectFind",
        "wxOnCollisionFast",
        "B2ColliderShape",
        "overrideGravity",
        "ApplyTorque",
        "getChildShapeCount",
        "QueryShape",
        "_onDisable",
        "linearDamping",
        "radius",
        "velocityIterations",
        "stage",
        "_fic",
        "isKinematic",
        "_clearChildShape",
        "DEBUG",
        "setConnectBodyBySearch",
        "phy_g",
        "SetFixedRotation",
        "IsBullet",
        "totalForce",
        "BeginContact",
        "ffast",
        "Initialize",
        "JSQueryCallback",
        "_rayjP",
        "b2_pi",
        "_enableAngularLimit",
        "_fidef",
        "main",
        "delete",
        "_addUpdateList",
        "_simN2",
        "SetDensity",
        "CreateJoint",
        "then",
        "_bv2z",
        "clear",
        "_overrideGravity",
        "clearChildShape",
        "B2Collision",
        "_canCollideWith",
        "_cl",
        "_minAngularLimit",
        "_mesh",
        "constaintRigidbodyA",
        "_utd",
        "upperBound",
        "createConstraint",
        "init",
        "1050976KRfCIS",
        "rigidbodyID",
        "name",
        "_tr_",
        "pop",
        "_destroy",
        "txy",
        "b2PolygonShape",
        "_ownBody",
        "Step",
        "_mg",
        "searchConnectSprite3DLink",
        "B2ConstraintComponent",
        "_btframBTrans",
        "sizeY",
        "b2PhysicsSimulation",
        "_v0",
        "_destroyBodys",
        "friction",
        "CHull2D",
        "setValue",
        "8agvuYz",
        "rayGM",
        "clone",
        "rayCast",
        "forEach",
        "fromArray",
        "_cirF",
        "convex",
        "_refreshSizeInit",
        "circleP",
        "_malloc",
        "enable",
        "_removeFromSimulation",
        "CompoundColliderShape: this shape has attatched to other entity.",
        "_BT_ENABLE_GYROPSCOPIC_FORCE",
        "_radius",
        "_searchConnectSprite3DLinkCore",
        "ccdMotionThreshold",
        "_component",
        "_uPS2",
        "Quat",
        "_btDiscreteDynamicsWorld",
        "_bv22",
        "createNode",
        "SetLinearDamping",
        "_v20",
        "angularYLimit",
        "_b2",
        "douglasPeucker",
        "linearDamp",
        "SetEnabled",
        "b2DistanceJointDef",
        "_mesh_url",
        "connectRigidbodyID",
        "_setFrame",
        "rollingFriction",
        "990542CEHUwQ",
        "_btColliderObject",
        "_getB2V",
        "Ran",
        "sqrt",
        "TR3",
        "isZero",
        "_q0",
        "ClassUtils",
        "b2Fixture",
        "filter",
        "is_use_component",
        "_cCI",
        "SetLimits",
        "_pxy",
        "_inPhysicUpdateListIndex",
        "connectAnchor",
        "B2PhysicsSimulation",
        "setFrames",
        "SphereColliderShape",
        "cloneTo",
        "circleGM",
        "228171zrptHn",
        "B2Rigidbody",
        "_addReference",
        "SetSensor",
        "clearForces",
        "_btImpulseOffset",
        "_onA2",
        "TransformPoint",
        "_breakTorque",
        "PhysicsDebugDraw",
        "b2World",
        "_cU",
        "b2Body",
        "linearLimitBounciness",
        "transform",
        "_sizeX",
        "normal",
        "minAngularLimit",
        "DevL",
        "currFrame",
        "point",
        "SetAngularVelocity",
        "_restitution",
        "succeeded",
        "bodyDef",
        "_cirw3",
        "_createConstraint",
        "now",
        "_uPS",
        "applyTorqueImpulse",
        "aabb",
        "_colliderB",
        "getAnchorDistance",
        "Collision",
        "abs",
        "MeshColliderShape",
        "IsAwake",
        "round",
        "_set",
        "_sizeZ",
        "_btframATrans",
        "__init__",
        "Scene3DUtils",
        "_cost_phy_up",
        "maskBits",
        "rotationEuler",
        "wrapPointer",
        "B2ContactListener",
        "refreshSize",
        "_poss_v2",
        "_sChildValue",
        "angularVelocity",
        "B2SphereColliderShape",
        "zOrder",
        "GetPosition",
        "_btImpulse",
        "_bv20",
        "_dm",
        "mesh",
        "maxAngularLimit",
        "linearVelocity",
        "B2MeshColliderShape",
        "b2SetTransform",
      ];
      return (f = function () {
        return t;
      })();
    }
    function y(t, e) {
      const i = f();
      return (y = function (t, e) {
        return ((t -= 464), i[t]);
      })(t, e);
    }
    function b(t) {
      function e(t, e) {
        return g(e, t - -84);
      }
      var i = t[e(1333, 1373)],
        s = t.m_normals;
      for (let t = 0; t < this._c; t++) {
        var n = i[t];
        (this[e(1174, 1399)].push(new Vector2(n.x, n.y)),
          (n = s[t]),
          this[e(1248, 1037)][e(1201, 1250)](new Vector2(n.x, n.y)));
      }
    }
    a[g(1511, 1365)] = d;
    class v extends u {
      constructor(t = 1, e = 1, i = 1, s = 0, n = 0, r = 0) {
        (super(),
          (this[a(1252, 1490)] = t),
          (this._sizeY = e),
          (this[a(1276, 1390)] = i),
          (this._type = 0));
        const o = u._v30;
        function a(t, e) {
          return g(e, t - -393);
        }
        o[a(1178, 975)](t, e, i);
        const c = B[a(1232, 1007)];
        ((e = c.g1(o)),
          (i = c.g2(o)),
          o[a(1178, 937)](s, n, r),
          (this[a(1056, 1081)] = o),
          (this[a(1136, 1185)].shape = this[a(832, 797)] = new m[a(1165, 950)]()));
        let h = this._btShape;
        (h.SetAsBox(0.5 * e, 0.5 * i, this[a(1217, 1400)](o), 0), l && this._n(e, i));
      }
      static ["__init__"]() {
        function t(t, e) {
          return g(t, e - 197);
        }
        v[t(1640, 1697)][t(1360, 1602)] = s ? p : c ? b : () => {};
      }
      get ["sizeX"]() {
        return this[g(-149, 1645)];
      }
      get [g(1637, 1565)]() {
        return this[g(1397, 1497)];
      }
      get ["sizeZ"]() {
        return this._sizeZ;
      }
      ["_n"](t, e) {
        var i = this._btShape;
        function s(t, e) {
          return g(t, e - -100);
        }
        ((this._c = i.m_count),
          (this[s(988, 1158)] = []),
          (this[s(1083, 1232)] = []),
          this[s(1485, 1305)](i),
          (t = 0.5 * t + Math.abs(this[s(952, 1160)].x)),
          (e = 0.5 * e + Math[s(1792, 1564)](this._lo.y)),
          (this._r = Math[s(1329, 1512)](t * t + e * e)),
          (this._r2 = this._r * this._r));
      }
      ["_nc"](t) {}
      ["clone"]() {
        var t = this[e(783, 799)],
          t = new B.B2BoxColliderShape(this._sizeX, this._sizeY, this._sizeZ, t.x, t.y, t.z);
        function e(t, e) {
          return g(t, e - -650);
        }
        return (this[e(803, 978)](t), t);
      }
      get ["localOffset"]() {
        return this._localOffset;
      }
      set ["localOffset"](e) {
        function t(t, e) {
          return g(t, e - 117);
        }
        e[t(1962, 1745)](this[t(1594, 1415)]);
        const i = this._btShape;
        if (i) {
          var s = new m.b2Vec2();
          let t = B.B2PhysicsSimulation;
          (t.V2(e, s),
            t.v2(e, this._lo),
            i.set_m_centroid ? i.set_m_centroid(s) : (i.m_centroid = s));
        }
      }
      ["refreshSize"](t, e) {
        function i(t, e) {
          return g(t, e - -833);
        }
        const s = u._v30;
        (s[i(748, 738)](this[i(577, 812)], this[i(644, 664)], this[i(819, 836)]),
          Vector3[i(694, 480)](s, t, s));
        const n = B[i(793, 792)];
        var r = n.g1(s),
          o = n.g2(s),
          a = s;
        (Vector3.multiply(this[i(621, 616)], t, a),
          this[i(566, 392)][i(392, 617)](0.5 * r, 0.5 * o, this[i(885, 777)](a), 0),
          super.refreshSize(t, e),
          l && this._n(r, o));
      }
      [g(1536, 1610)](t) {
        function e(t, e) {
          return g(t, e - -744);
        }
        return (B[e(849, 881)].V2(t, u._bv20), u[e(1007, 942)]);
      }
    }
    a[g(1622, 1407)] = v;
    class C extends u {
      constructor(t = 0.5, e = 0, i = 0, s = 0, n = 1) {
        (super(),
          (this._radius = t),
          (this._r = t * n),
          (this._r2 = this._r * this._r),
          (this[o(-281, -276)] = 1));
        const r = (this[o(-344, -482)] = new m.b2CircleShape());
        function o(t, e) {
          return g(t, e - -1707);
        }
        ((r.m_radius = this._r), (this[o(-85, -178)][o(-380, -405)] = r));
        const a = u[o(-317, -478)];
        (a[o(29, -136)](e, i, s), (this.localOffset = a));
      }
      get [g(1460, 1510)]() {
        return this[g(969, 1587)];
      }
      get ["localOffset"]() {
        return this[g(776, 1298)];
      }
      set ["localOffset"](t) {
        t[s(861, 1049)](this[s(531, 544)]);
        var e = new m[s(696, 617)]();
        let i = B.B2PhysicsSimulation;
        function s(t, e) {
          return g(e, t - -767);
        }
        (i.V2(t, e), i.v2(t, this[s(493, 694)]));
        const n = this._btShape;
        n.set_m_p ? n.set_m_p(e) : (n[s(536, 758)] = e);
      }
      [g(1438, 1574)]() {
        function t(t, e) {
          return g(t, e - 157);
        }
        var e = this.localOffset,
          i = this[t(1915, 1744)],
          i = new B[t(2053, 1839)](i, e.x, e.y, e.z, this._r / i);
        return (this.cloneTo(i), i);
      }
      ["refreshSize"](t, e) {
        function i(t, e) {
          return g(e, t - -1613);
        }
        let s = B.B2PhysicsSimulation;
        var n = this._radius * Math.max(s.g1(t), s.g2(t));
        Math[i(51, -2)](n - this._r) > 0.001 * this._r &&
          ((this._r = n),
          (this[i(-279, -515)] = n * n),
          (this[i(-388, -358)].m_radius = n),
          super[i(65, 308)](t, e));
      }
    }
    function S(i) {
      var s,
        t = i[o(1319, 1256)];
      let n = [],
        r = w[o(1367, 1172)];
      for (let e = 0; e < t; e++) {
        r.length - 1 < e && ((s = new m.b2Vec2()), r[o(1119, 1187)](s));
        let t = r[e];
        ((t.x = i[e].x), (t.y = i[e].y), n.push(t));
      }
      function o(t, e) {
        return g(t, e - -98);
      }
      return n;
    }
    function x(e) {
      var i = e.length,
        s = m[g(1273, 1582)](8 * i);
      const n = m.HEAPF32;
      let r = 0;
      for (let t = 0; t < i; t++)
        ((n[(s + r) >> 2] = e[t].x), (n[(s + (r + 4)) >> 2] = e[t].y), (r += 8));
      return m.wrapPointer(s, m.b2Vec2);
    }
    a.B2SphereColliderShape = C;
    class w extends u {
      constructor(t = null) {
        function e(t, e) {
          return g(t, e - -248);
        }
        (super(),
          t
            ? ((this[e(1288, 1356)] = t),
              (this[e(1451, 1440)] = W.L.g(t)),
              (t = new Array()),
              this[e(1641, 1440)].getPositions(t),
              (t = B[e(1537, 1377)].V32s(t)),
              (this[e(1284, 1431)] = a[e(1428, 1322)][e(1051, 1082)](t)),
              0 < (t = B[e(1681, 1443)][e(1143, 1121)]) &&
                (this[e(1337, 1431)] = a[e(1490, 1322)][e(1206, 1352)](this[e(1439, 1431)], t)),
              8 < this[e(1260, 1431)].length
                ? ((this._convex = !1), (this[e(957, 977)] = new m.b2ChainShape()))
                : ((this[e(946, 1183)] = 4),
                  (this._convex = !0),
                  (this._btShape = new m[e(1487, 1310)]())))
            : ((this[e(1164, 1073)] = !1), (this[e(956, 977)] = new m[e(903, 1112)]())),
          B[e(1456, 1443)].DEBUG,
          this._btShape && (this._fidef[e(1158, 1054)] = this._btShape));
      }
      static ["__init__"]() {
        ((w.V2_Pool = []), (this.txy = w.txy = s ? x : S));
      }
      static [g(1337, 1557)](t) {
        return null;
      }
      get ["mesh"]() {
        return this._mesh;
      }
      set ["mesh"](t) {
        this[g(920, 1545)] !== t && (this._mesh = t);
      }
      get ["convex"]() {
        return this[g(1250, 1321)];
      }
      set ["convex"](t) {
        this._convex = t;
      }
      [g(1119, 1232)](e) {
        function t(t, e) {
          return g(t, e - -276);
        }
        const i = this._btShape;
        if (i) {
          const r = this._poss_v2;
          var s = r[t(1244, 1078)];
          const o = B.B2PhysicsSimulation;
          if (e)
            for (let t = 0; t < s; t++) ((r[t].x = r[t].x * o.g1(e)), (r[t].y = r[t].y * o.g2(e)));
          var n = w[t(1075, 1281)](r);
          8 < s ? i.CreateLoop(n) : i[t(1316, 1200)] ? i.SetAsArray(n) : i.Set(n, s);
        }
      }
      ["setLines"](t, e) {
        const i = B[s(1443, 1242)];
        function s(t, e) {
          return g(t, e - -383);
        }
        let n;
        n =
          e instanceof Array
            ? void 0 === e[0].z
              ? e
              : i[s(914, 1106)](e)
            : i.V32s(e[s(878, 853)]);
        var r = n[s(852, 971)],
          o = (e = void 0 === t.z) ? t.x : i.g1(t),
          a = e ? t.y : i.g2(t);
        for (let t = 0; t < r; t++) ((n[t].x *= o), (n[t].y *= a));
        ((t = w[s(1330, 1174)](n)), this[s(1058, 842)].CreateChain(t, r));
      }
      ["refreshSize"](t, e) {
        function i(t, e) {
          return g(e, t - -1225);
        }
        (e.owner instanceof Laya[i(242, 451)] && this.mesh
          ? this[i(7, -148)](t)
          : e.owner instanceof W.LineSprite3D && this.setLines(t, e[i(46, 191)]),
          super.refreshSize(t, e));
      }
      ["cloneTo"](t) {
        var e = t;
        function i(t, e) {
          return g(t, e - -1189);
        }
        ((e[i(590, 390)] = this._convex), (e[i(537, 499)] = this[i(161, 356)]), super.cloneTo(t));
      }
      [g(1805, 1574)]() {
        var t = new B.B2MeshColliderShape(this[g(1342, 1604)]);
        return (this.cloneTo(t), t);
      }
      ["destroy"]() {
        (super.destroy(), (this[e(1666, 1799)] = null), (this[e(1725, 1701)] = null));
        const t = this[e(1743, 1570)];
        function e(t, e) {
          return g(e, t - 121);
        }
        (t && (t[e(1475, 1596)] = 0), (this[e(1743, 1630)] = null));
      }
    }
    ((w.DouglasPeuckerMax = 0.2), (w[g(1500, 1516)] = !0), (a.B2MeshColliderShape = w));
    class P extends u {
      constructor() {
        (super(),
          (this._btShape = new m.b2EdgeShape()),
          (this._fidef[g(-215, 1302)] = this._btShape));
      }
      static [g(1629, 1671)]() {}
      [g(1802, 1668)](t, e) {
        this._btShape[g(-252, 1342)](t, e);
      }
      ["refreshSize"](t, e) {
        super.refreshSize(t, e);
      }
      [g(1765, 1628)](t) {
        super.cloneTo(t);
      }
      ["clone"]() {
        var t = new P();
        return (this[g(1267, 1628)](t), t);
      }
      ["destroy"]() {
        super[g(1604, 1238)]();
      }
    }
    a.B2LineColliderShape = P;
    class V {
      constructor() {
        function t(t, e) {
          return g(t, e - -1403);
        }
        ((this.succeeded = !1),
          (this.collider = null),
          (this[t(177, 247)] = new Vector3()),
          (this.normal = new Vector3()),
          (this[t(122, -33)] = 0));
      }
      [g(1516, 1478)]() {
        function t(t, e) {
          return g(t, e - -162);
        }
        ((this[t(1481, 1491)] = !1),
          (this[t(1038, 1275)] = null),
          this[t(1672, 1488)].setValue(0, 0, 0),
          this[t(1549, 1484)][t(1652, 1409)](0, 0, 0),
          (this.hitFraction = 0));
      }
    }
    ((a.B2HitResult = V),
      (a[g(1574, 1541)] = class {
        constructor() {
          ((this._lastUpdateFrame = -2147483648),
            (this._updateFrame = -2147483648),
            (this[g(372, 1359)] = !1),
            (this.contacts = []));
        }
        [g(1128, 1226)](t) {
          ((this._lastUpdateFrame = this._updateFrame), (this._updateFrame = t));
        }
      }));
    class A {
      constructor() {
        function t(t, e) {
          return g(t, e - -1714);
        }
        ((this._idCounter = 0),
          (this.colliderA = null),
          (this[t(-261, -432)] = null),
          (this.distance = 0),
          (this[t(-274, -68)] = new Vector3()),
          (this.positionOnA = new Vector3()),
          (this[t(-284, -281)] = new Vector3()),
          (this._id = ++this._idCounter));
      }
    }
    ((a.B2ContactPoint = A),
      (a.B2CollisionTool = class {
        constructor() {
          function t(t, e) {
            return g(t, e - -1355);
          }
          ((this._hRPI = 0),
            (this[t(99, -22)] = []),
            (this._cPPI = 0),
            (this[t(-2, 20)] = []),
            (this._cP = []),
            (this[t(145, -2)] = {}));
        }
        ["gHR"]() {
          function t(t, e) {
            return g(t, e - -708);
          }
          var e = this._hRP[this[t(641, 578)]++];
          return (
            e
              ? ((e[t(883, 945)] = !1), (e.collider = null))
              : ((e = new V()), this[t(854, 625)].push(e)),
            e
          );
        }
        ["rAHRP"]() {
          this[g(1558, 1286)] = 0;
        }
        ["gCP"]() {
          var t = this[g(1407, 1375)][this._cPPI++];
          return (t || ((t = new A()), this._cPP.push(t)), t);
        }
        ["rACPP"]() {
          this._cPPI = 0;
        }
        ["gC"](t, e) {
          function i(t, e) {
            return g(t, e - -394);
          }
          var s,
            n = t.id,
            r = e.id,
            o = this._cs[n];
          return (
            (s = o ? o[r] : s) ||
              (o || (this._cs[n] = o = {}),
              ((s =
                0 === this[i(636, 836)].length
                  ? new B[i(1066, 1147)]()
                  : this._cP.pop())._colliderA = t),
              (s[i(1319, 1267)] = e),
              (o[r] = s)),
            s
          );
        }
        ["rC"](t) {
          function e(t, e) {
            return g(t, e - -440);
          }
          var i = t[e(1049, 999)].id,
            s = t._colliderB.id;
          ((this[e(1119, 913)][i][s] = null), this._cP[e(999, 845)](t));
        }
        ["gCNoC"](t, e) {
          var i = null,
            t = t.id,
            e = e.id;
          return (t = this[g(646, 1353)][t]) ? t[e] : i;
        }
      }));
    class D extends Component {
      constructor(t) {
        function e(t, e) {
          return g(t, e - -328);
        }
        (super(),
          (this._is_clone_create = !1),
          (this._is_laya_comp = !0),
          (this._anchor = new Vector3(0)),
          (this._connectAnchor = new Vector3(0)),
          (this._constraintType = t),
          (this[e(1551, 1342)] = new Vector3(0)),
          (this[e(1455, 1236)] = new Vector3(0)),
          (this._breakForce = -1),
          (this[e(1383, 1310)] = -1));
      }
      static [g(1429, 1671)]() {
        let t = m.b2Vec2;
        ((this._bv20 = new t()), (this._bv21 = new t()), (this._v30 = new Vector3()));
      }
      get [g(1020, 1249)]() {
        return super[g(857, 1249)];
      }
      set ["enabled"](t) {
        super[g(937, 1249)] = t;
      }
      get ["connectedBody"]() {
        return this._connectedBody;
      }
      set [g(1565, 1481)](t) {
        (this._connectedBody = t)[g(319, 1264)] = this;
      }
      get ["ownBody"]() {
        return this[g(516, 1559)];
      }
      set ["ownBody"](t) {
        (this._ownBody = t).constaintRigidbodyA = this;
      }
      set [g(1504, 1693)](t) {
        function e(t, e) {
          return g(e, t - -1412);
        }
        (t.cloneTo(this[e(-112, 91)]), this[e(214, 142)]());
      }
      get ["anchor"]() {
        return this[g(798, 1300)];
      }
      set ["connectAnchor"](t) {
        function e(t, e) {
          return g(t, e - -1358);
        }
        (t.cloneTo(this[e(-218, -151)]), this[e(304, 268)]());
      }
      get [g(1808, 1624)]() {
        return this._connectAnchor;
      }
      [g(1326, 1451)]() {
        function t(t, e) {
          return g(e, t - -73);
        }
        (super[t(1378, 1157)](), (this[t(1176, 1388)] = !0));
      }
      ["_onDisable"]() {
        (super[g(527, 1508)](), (this.enabled = !1));
      }
      [g(1591, 1626)]() {
        function t(t, e) {
          return g(t, e - 57);
        }
        (this[t(1565, 1663)](this.owner, this[t(1629, 1750)], this._btframATrans),
          this[t(1757, 1538)] &&
            this[t(1809, 1663)](this.connectedBody.owner, this.connectAnchor, this[t(1538, 1621)]));
      }
      [g(1505, 1606)](t, e, i) {
        t = t[n(384, 279)];
        let s = !1;
        function n(t, e) {
          return g(e, t - -1260);
        }
        (W[n(-3, -174)].isZero(e)
          ? i.setValue(e.x, e.y, e.z)
          : (Vector3[n(53, 80)](t[n(239, -4)], e, i), (s = !0)),
          W.TR3[n(377, 440)](t, i, i, s));
      }
      [g(1746, 1584)]() {}
      ["_createConstraint"]() {
        this._connectFind || this.searchConnectSprite3DLink();
      }
      ["setConnectRigidBody"](t, e) {
        var i = t && !!(t[n(677, 639)] && t[n(478, 404)] && t[n(622, 782)]),
          s = e && !!(e[n(677, 913)] && e.enabled && e[n(622, 643)]);
        function n(t, e) {
          return g(e, t - -771);
        }
        if (!i || !s) throw "ownerRigid or connectRigidBody is not in Simulation";
        (t == this[n(788, 776)] && e == this._connectedBody) ||
          (this[n(478, 516)] && this._simulation && this._removeFromSimulation(),
          (this._ownBody = t),
          (this[n(586, 662)] = e),
          ((this._ownBody[n(775, 931)] = this)._connectedBody[n(493, 605)] = this)[n(885, 642)]());
      }
      ["_onDestroy"]() {
        function t(t, e) {
          return g(t, e - -1084);
        }
        (this[t(729, 500)](),
          this[t(164, 308)] && this._simulation && (this[t(384, 308)] = null),
          super._onDisable());
      }
      [g(1255, 1421)](t) {
        function e(t, e) {
          return g(e, t - -1227);
        }
        (this._anchor.fromArray(t.anchor),
          (this[e(73, -132)].x = -this._anchor.x),
          this._connectAnchor[e(350, 587)](t[e(397, 255)]),
          (this[e(-20, 186)].x = -this[e(-20, 11)].x),
          this[e(399, 260)]());
      }
      [g(1601, 1414)](t = null, e = null) {
        function i(t, e) {
          return g(t, e - -405);
        }
        var s = e[t[i(929, 1147)]].getComponent(B.B2Rigidbody),
          t = e[t[i(1121, 1200)]].getComponent(B.B2Rigidbody);
        ((this[i(1070, 983)] = s), (this[i(846, 1076)] = t), this[i(1156, 1157)]());
      }
      ["_cloneTo"](t) {
        function e(t, e) {
          return g(t, e - -1583);
        }
        ((t._is_clone_create = !0),
          (t[e(147, 110)] = this.anchor[e(-203, -9)]()),
          this.connectAnchor && (t[e(-118, 41)] = this[e(168, 41)].clone()),
          (t._simulation = this[e(-271, -135)]),
          (t[e(-338, -195)] = t[e(-372, -312)][e(-216, -151)](B.B2Rigidbody)),
          (t[e(-427, -348)] = this[e(-463, -348)]),
          (t._connectIndex = this._connectIndex),
          (t[e(-56, -82)] = this._connectFind),
          t.setConnectBodyBySearch());
      }
      ["setConnectBodyBySearch"]() {
        var t = this.getConnectBodyBySearch();
        t && (this[g(1707, 1481)] = t);
      }
      ["searchConnectSprite3DLink"]() {
        function t(t, e) {
          return g(t, e - -981);
        }
        var e = this[t(501, 290)].parent,
          i = new W[t(548, 472)](0),
          s = new W[t(455, 472)](-1),
          n = new W.ref(!1);
        (this._searchConnectSprite3DLinkCore(e, i, s, n, 1),
          (this._connectUp = i.value),
          (this[t(292, 302)] = s.value),
          (this._connectFind = n[t(-2, 237)]));
      }
      [g(1683, 1588)](i, s, n, r, o) {
        function a(t, e) {
          return g(t, e - -1342);
        }
        if (!r.value) {
          let e = !1;
          if (i == this[a(363, 139)].owner)
            return ((s[a(105, -124)] = o), (n[a(101, -124)] = -1), void (r[a(39, -124)] = !0));
          for (let t = 0; t < i.numChildren; t++)
            if (i.getChildAt(t) == this[a(309, 139)][a(-280, -71)]) {
              ((s[a(56, -124)] = o), (n.value = t), (r.value = !0), (e = !0));
              break;
            }
          e ||
            i instanceof W[a(39, 114)] ||
            this._searchConnectSprite3DLinkCore(i[a(-110, -77)], s, n, r, o + 1);
        }
      }
      ["getConnectBodyBySearch"]() {
        function i(t, e) {
          return g(t, e - -961);
        }
        if (this[i(424, 540)]) {
          let e = this[i(446, 310)];
          for (let t = 0; t < this._connectUp && ((e = e[i(204, 304)]), e && !e[i(668, 477)]); t++);
          return !e || e[i(269, 477)]
            ? null
            : (-1 < this[i(200, 322)] && (e = e.getChildAt(this._connectIndex)),
              e[i(532, 471)](B.B2Rigidbody) || null);
        }
        return null;
      }
    }
    ((D[g(1439, 1429)] = 11),
      (D[g(1634, 1428)] = 4),
      (a[g(1533, 1563)] = D),
      (a.B2FixedConstraint = class extends D {
        constructor() {
          super(B.B2ConstraintComponent[g(1009, 1429)]);
        }
        [g(1472, 1316)]() {
          function t(t, e) {
            return g(e, t - 104);
          }
          this[t(1552, 1595)] && this._simulation[t(1460, 1614)](this, this[t(1353, 1260)]);
        }
        ["_removeFromSimulation"]() {
          (this[g(245, 1448)].removeConstraint(this), (this._simulation = null));
        }
        [g(1712, 1656)]() {
          const t = this.ownBody,
            e = this[s(809, 1007)];
          var i;
          function s(t, e) {
            return g(t, e - -474);
          }
          t &&
            t._simulation &&
            e &&
            e[s(1192, 974)] &&
            ((i = B.B2ConstraintComponent._bv20),
            B[s(1348, 1151)].V2(this[s(1396, 1196)], i),
            (t.canSleep = !1),
            (e.canSleep = !1),
            (this[s(720, 785)] = new m.b2WeldJointDef()),
            this.jointDef.Initialize(t._btColliderObject, e._btColliderObject, i),
            (this.jointDef.dampingRatio = 0),
            (this[s(615, 785)].frequencyHz = 0),
            (this._simulation = t._simulation),
            this[s(627, 842)](),
            this[s(594, 823)] || super._createConstraint());
        }
        [g(1488, 1451)]() {
          this._btConstraint && super[g(874, 1451)]();
        }
        ["_onDisable"]() {
          function t(t, e) {
            return g(e, t - -1522);
          }
          (super[t(-14, -156)](), this.connectedBody || this[t(62, 63)]());
        }
        ["_parse"](t, e = null) {
          function i(t, e) {
            return g(t, e - -285);
          }
          (super._parse(t),
            -1 != t[i(1235, 1267)] &&
              -1 != t[i(1446, 1320)] &&
              (e.component[i(964, 1e3)](this), e[i(1017, 1021)][i(1114, 1e3)](t)));
        }
        ["_cloneTo"](t) {
          super[g(675, 1462)](t);
        }
      }),
      (a.B2HingeConstraint = class extends D {
        constructor() {
          function t(t, e) {
            return g(t, e - -413);
          }
          (super(B[t(1145, 1150)][t(784, 1015)]),
            (this._enableAngularLimit = !1),
            (this._minAngularLimit = new Vector3()),
            (this._maxAngularLimit = new Vector3()),
            (this._linearDamp = new Vector3()),
            (this._linearBounce = new Vector3()));
        }
        get ["minAngularLimit"]() {
          return this._minAngularLimit;
        }
        set [g(1587, 1647)](t) {
          function e(t, e) {
            return g(e, t - 65);
          }
          t.cloneTo(this[e(1609, 1581)]);
          let i = this[e(1457, 1226)];
          (i &&
            i instanceof m[e(1311, 1550)] &&
            ((t = B[e(1690, 1652)].Ag(t)), i[e(1686, 1687)](t, i[e(1309, 1386)]())),
            this[e(1298, 1357)]());
        }
        get [g(1836, 1689)]() {
          return this._maxAngularLimit;
        }
        set ["maxAngularLimit"](t) {
          function e(t, e) {
            return g(t, e - -121);
          }
          t.cloneTo(this._maxAngularLimit);
          let i = this[e(1506, 1271)];
          (i &&
            i instanceof m[e(1122, 1125)] &&
            ((t = B[e(1643, 1504)].Ag(t)), i.SetLimits(i.GetLowerLimit(), t)),
            this._autoChangeAngularLimitEnable());
        }
        set [g(1610, 1386)](t) {
          this._enableAngularLimit = t;
          let e = this._btConstraint;
          e && e instanceof m.b2RevoluteJoint && e[g(395, 1418)](t);
        }
        get ["linearDamp"]() {
          return this._linearDamp;
        }
        get [g(1034, 1254)]() {
          return this._linearBounce;
        }
        [g(1008, 1233)]() {
          function t(t, e) {
            return g(e, t - -1281);
          }
          W.Vec3[t(333, 127)](this[t(366, 434)]) &&
          W[t(-24, -49)][t(333, 118)](this.maxAngularLimit)
            ? (this.enableAngularLimit = !1)
            : (this[t(105, 113)] = !0);
        }
        [g(1447, 1316)]() {
          function t(t, e) {
            return g(t, e - -19);
          }
          this[t(1307, 1429)] && this[t(1537, 1429)][t(1541, 1337)](this, this.enabled);
        }
        ["_removeFromSimulation"]() {
          function t(t, e) {
            return g(t, e - -1088);
          }
          (this[t(363, 300)] && this.ownBody[t(230, 256)]--,
            this[t(578, 393)] && this[t(540, 393)]._jc--,
            this._simulation[t(152, 324)](this),
            (this._simulation = null));
        }
        ["_createConstraint"]() {
          const t = this.ownBody,
            e = this.connectedBody;
          function i(t, e) {
            return g(e, t - -174);
          }
          if (t && t._simulation && e && e._simulation) {
            ((t.canSleep = !1),
              (e.canSleep = !1),
              t && this[i(1432, 1470)](t.owner, this.anchor, this[i(1496, 1473)]),
              e && this[i(1432, 1591)](e.owner, this.connectAnchor, this[i(1390, 1514)]));
            var s = B.B2ConstraintComponent,
              n = s._bv20;
            const r = B[i(1451, 1355)];
            if ((r.V2(this._btframATrans, n), this[i(1161, 1307)]())) {
              const o = (this[i(1085, 847)] = new m.b2RevoluteJointDef());
              (this[i(1354, 1287)] &&
                ((o.lowerAngle = r.Ag(this._minAngularLimit)),
                (o[i(1067, 860)] = r.Ag(this[i(1145, 1160)]))),
                (o.collideConnected = !1),
                o[i(1350, 1228)](t._btColliderObject, e._btColliderObject, n));
            } else {
              const a = (this[i(1085, 933)] = new m[i(1429, 1657)]());
              ((a[i(1060, 1178)] = !0),
                (a[i(1180, 1323)] = this[i(1488, 1250)]()),
                h
                  ? ((a[i(1173, 946)] = this.linearDamp.x), (a.stiffness = this[i(1080, 1046)].x))
                  : ((a[i(1152, 1181)] = this[i(1427, 1376)].x),
                    (a.frequencyHz = this.linearBounce.x)),
                (s = s[i(1035, 958)]),
                r.V2(this._btframBTrans, s),
                a.Initialize(t._btColliderObject, e._btColliderObject, n, s));
            }
            ((this[i(1274, 1337)] = t[i(1274, 1478)]),
              this._addToSimulation(),
              t._jc++,
              e[i(1170, 1234)]++,
              this[i(1123, 1088)] || super._createConstraint());
          }
        }
        ["_onEnable"]() {
          this[g(-160, 1392)] && super._onEnable();
        }
        ["_onDisable"]() {
          (super._onDisable(), this[g(-78, 1481)] || this._removeFromSimulation());
        }
        [g(1250, 1421)](t, e = null) {
          (super._parse(t),
            -1 != t.rigidbodyID &&
              -1 != t.connectRigidbodyID &&
              (e.component.push(this), e[r(437, 553)].push(t)));
          var i = t.lowAngularXLimit,
            s = t.highAngularXLimit,
            n = t[r(944, 845)],
            e = t.angularZLimit;
          function r(t, e) {
            return g(t, e - -753);
          }
          (this._minAngularLimit[r(820, 818)](i, -n, -e),
            this[r(363, 566)].setValue(s, n, e),
            (this[r(689, 894)] = this[r(1015, 791)]),
            (this.maxAngularLimit = this._maxAngularLimit),
            (e = t[r(753, 632)]),
            this[r(887, 722)].setValue(e, e, e),
            (t = t[r(858, 890)]),
            this._linearBounce[r(579, 818)](t, t, t));
        }
        [g(1164, 1335)]() {
          function t(t, e) {
            return g(e, t - -1571);
          }
          var e = B.B2ConstraintComponent._v30;
          return (
            Vector3.subtract(this[t(99, 284)], this._btframBTrans, e),
            W.Vec3[t(43, 116)](e, !0)
          );
        }
        ["getAnchorDistance"]() {
          return Vector3[g(-3, 1363)](this._btframATrans, this._btframBTrans);
        }
        ["_cloneTo"](t) {
          function e(t, e) {
            return g(t, e - 5);
          }
          (super[e(1646, 1467)](t),
            (t._enableAngularLimit = this._enableAngularLimit),
            this._minAngularLimit[e(1521, 1633)](t._minAngularLimit),
            this[e(1330, 1324)].cloneTo(t[e(1482, 1324)]),
            this._linearDamp[e(1819, 1633)](t._linearDamp),
            this._linearBounce[e(1604, 1633)](t._linearBounce));
        }
      }));
  })((_p = _p || {})),
    (function (t) {
      class e {
        constructor(t) {
          this._shapes = new Array();
          let e = B.P3Sim;
          (e._ray || e._i(), (this.s3d = t));
        }
        static _i() {
          ((this._ray = new Laya.Ray(W.Vec3.zero, W.Vec3.one)),
            (this._v0 = new Vector2()),
            (this._v1 = new Vector3()),
            (this._v2 = new Vector3()),
            (this._vvs = []),
            (this._m0 = new W.M4()),
            (this._m1 = new W.M4()),
            (this._hpool = []),
            B.P3Box._i(),
            Laya.timer.frameLoop(1, this, () => {
              this._hpi = 0;
            }));
        }
        add(t) {
          this._shapes.push(t);
        }
        del(t) {
          -1 < (t = this._shapes.indexOf(t)) && this._shapes.splice(t, 1);
        }
        unbind(i) {
          let s = this._shapes;
          for (let e = 0, t = s.length; e < t; e++) {
            let t = s[e];
            if (t.beyound == i) {
              (t.destroy(), s.splice(e, 1));
              break;
            }
          }
        }
        destroy() {
          (this._shapes.forEach((t) => {
            t.destroy();
          }),
            (this._shapes.length = 0),
            (this.s3d = null));
        }
        CamRC(e, i = null, s = !1, n) {
          if (this.s3d.camera) {
            var r = B.P3Sim,
              o = r._ray;
            let t = r._v0;
            return (
              i ? t.setValue(i.x, i.y) : t.setValue(Laya.stage.mouseX, Laya.stage.mouseY),
              this.s3d.camera.viewportPointToRay(t, o),
              this.RC(o, e, 9999, s, n)
            );
          }
          return !1;
        }
        RC(e, i, s = 999, n = !1, r) {
          let o = B.P3Sim,
            a = o._gHit(),
            c = !1;
          for (let t = (r = r || this._shapes).length - 1; 0 <= t; t--) {
            var h = r[t];
            if (
              (h instanceof l
                ? B.P3Plane.RC(e, s, h, a, !0)
                : h instanceof y
                  ? B.P3Sphere.RC(e, s, h, a, !0)
                  : h instanceof m && B.P3Box.RC(e, s, h, a, !0),
              a.succeeded)
            )
              if (i instanceof Array) (i.push(a), 0 < t && (a = o._gHit()), (c = !0));
              else {
                if (!n) return (a.cloneTo(i), !0);
                a.distance < 9999 && (a.cloneTo(i), a.reset(), (c = !0));
              }
          }
          return c;
        }
        SpC(e, n, i, r, s = 0, o) {
          var a = 0 == s ? 1 : Math.ceil(s / n) + 1;
          o = o || this._shapes;
          let c = B.P3Sim;
          var h = o.length,
            l = c._v1;
          let u = c._vvs;
          for (let t = 0; t < a; t++) {
            var _ = (_ = u[t]) || (u[t] = new Vector3());
            (t != a - 1 ? Vector3.scale(i, n * t, l) : Vector3.scale(i, s, l),
              Vector3.add(e, l, _));
          }
          for (let t = 0; t < h; t++) {
            var d = o[t],
              p = d.beyound.transform,
              f = p.position;
            let e, i, s;
            d instanceof y ? (e = d.radius) : d instanceof m && ((i = d.size), (s = p.rotation));
            for (let t = 0; t < a; t++)
              if (i ? c.ISB(u[t], n, f, s, i) : e ? c.ISS(u[t], n, f, e) : c.ISP(u[t], n, d)) {
                let t = c._gHit();
                if (((t.collider = d), (t.succeeded = !0), r instanceof Array)) {
                  r.push(t);
                  break;
                }
                return (t.cloneTo(r), !0);
              }
          }
        }
        static _gHit() {
          let t = this._hpool[this._hpi++];
          return (t ? t.reset() : ((t = new i()), this._hpool.push(t)), t);
        }
        fromRender() {
          this._shapes.forEach((t) => {
            t.fromRender();
          });
        }
        static ISB(t, e, i, s, n) {
          var r = this._v1;
          Vector3.subtract(t, i, r);
          let o = this._m0;
          (W.M4.SetTRS(W.Vec3.Z, s, W.Vec3.ONE, o), o.invert(this._m1));
          let a = this._v2;
          W.M4.MultiplyVector(this._m1, r, a);
          let c = !1;
          return (
            a.x < -n.x ? ((c = !0), (a.x = -n.x)) : a.x > n.x && ((c = !0), (a.x = n.x)),
            a.y < -n.y ? ((c = !0), (a.y = -n.y)) : a.y > n.y && ((c = !0), (a.y = n.y)),
            a.z < -n.z ? ((c = !0), (a.z = -n.z)) : a.z > n.z && ((c = !0), (a.z = n.z)),
            !(
              c &&
              (W.M4.MultiplyVector(o, a, a),
              Vector3.subtract(r, a, a),
              e * e < Vector3.scalarLengthSquared(a))
            )
          );
        }
        static ISS(t, e, i, s) {
          return ((s = e + s), Vector3.distanceSquared(t, i) <= s * s);
        }
        static ISP(t, e, i) {
          return i.distance(t) <= e;
        }
      }
      ((e._hpi = 0), (t.P3Sim = e));
      class i {
        constructor() {
          ((this.point = new Vector3()), (this.normal = new Vector3()), this.reset());
        }
        reset() {
          ((this.succeeded = !1),
            (this.collider = null),
            this.point.setValue(0, 0, 0),
            this.normal.setValue(0, 0, 0),
            (this.distance = 0));
        }
        cloneTo(t) {
          ((t.succeeded = this.succeeded),
            (t.collider = this.collider),
            this.point.cloneTo(t.point),
            this.normal.cloneTo(t.normal),
            (t.distance = this.distance));
        }
      }
      t.P3Hit = i;
      class s {
        constructor(t) {
          ((this.beyound = t), (this.center = t.transform.position));
        }
        fromRender() {
          return !(
            !this.beyound ||
            this.beyound.destroyed ||
            ((this.center = this.beyound.transform.position), 0)
          );
        }
        destroy() {
          ((this.beyound = null), (this.center = null));
        }
      }
      t.P3Shape = s;
      class l extends s {
        constructor(t, e = W.Vec3.up, i = 0) {
          (super(t), (this.normal = e), (this.d = i));
        }
        static fromSP3(t, e) {
          e = e || t;
          var i = new Vector3();
          e.transform.getUp(i);
          var s = new Vector3();
          return (
            e.transform.getForward(s),
            Vector3.add(e.transform.position, s, s),
            (s = -Vector3.dot(i, s)),
            new l(t, i, s)
          );
        }
        distance(t) {
          return Vector3.dot(t, this.normal) + this.d;
        }
        contains(t) {
          return Math.abs(this.distance(t)) < 0.001;
        }
        static RC(t, e, i, s, n) {
          var r = t.direction,
            o = t.origin;
          return (
            !(-1e-7 < (t = Vector3.dot(r, i.normal)) && t < 1e-7) &&
            ((t = -i.distance(o) / t) < e
              ? ((s.distance = t),
                n &&
                  ((n = s.point),
                  Vector3.scale(r, t, n),
                  Vector3.add(o, n, n),
                  i.normal.cloneTo(s.normal)),
                t < 0 ? (s.succeeded = !1) : ((s.collider = i), (s.succeeded = !0)))
              : (s.succeeded = !1))
          );
        }
        destroy() {
          ((this.normal = null), super.destroy());
        }
      }
      t.P3Plane = l;
      class y extends s {
        constructor(t, e) {
          (super(t), (this.radius = e));
        }
        static _meshR(t) {
          if (t instanceof Laya.MeshSprite3D) {
            var e = t.meshFilter.sharedMesh.bounds.getExtent(),
              t = t.transform.getWorldLossyScale();
            return e.x * t.x;
          }
          return NaN;
        }
        fromRender() {
          var t,
            e = super.fromRender();
          return (e && ((t = y._meshR(this.beyound)), isNaN(t) || (this.radius = t)), e);
        }
        static fromSP3(t, e) {
          return ((e = this._meshR((e = e || t))), isNaN(e) ? null : new y(t, e));
        }
        Contains(t) {
          return Vector3.distanceSquared(t, this.center) <= this.radius * this.radius;
        }
        static RC(t, e, i, s, n) {
          return (
            !!this._IRS(t, e, i, s, n) &&
            (n &&
              (Vector3.subtract(s.point, i.center, s.normal),
              Vector3.normalize(s.normal, s.normal)),
            (s.collider = i),
            (s.succeeded = !0))
          );
        }
        static _IRS(t, e, i, s, n) {
          const r = Vector3;
          var o = s.point;
          r.subtract(i.center, t.origin, o);
          var a = r.dot(t.direction, o),
            c = r.dot(o, o),
            h = i.radius;
          return c <= (i = h * h)
            ? (n && t.origin.cloneTo(o),
              n && s.normal.setValue(0, 0, 0),
              (s.distance = 0),
              (s.succeeded = !0))
            : a <= 0 || h < a - e || (c = i - (c - a * a)) < 0
              ? (s.succeeded = !1)
              : ((c = a - Math.sqrt(c)),
                e < (s.distance = c)
                  ? (s.succeeded = !1)
                  : (n && (r.scale(t.direction, c, o), r.add(t.origin, o, o)), (s.succeeded = !0)));
        }
        destroy() {
          ((this.center = null), super.destroy());
        }
      }
      t.P3Sphere = y;
      class m extends s {
        constructor(t, e, i, s) {
          (super(t), (this.size = new Vector3(e, i, s)));
        }
        static _i() {
          ((this._v0 = new Vector3()),
            (this._v1 = new Vector3()),
            (this._v2 = new Vector3()),
            (this._q0 = new W.Quat()),
            (this._ray = new Laya.Ray(W.Vec3.zero, W.Vec3.one)),
            (this._vn = ["x", "y", "z"]));
        }
        static _meshSize(t, e) {
          var i;
          t instanceof Laya.MeshSprite3D &&
            ((i = t.meshFilter.sharedMesh.bounds.getExtent()),
            (t = t.transform.getWorldLossyScale()),
            Vector3.multiply(i, t, e),
            Vector3.scale(e, 2, e));
        }
        fromRender() {
          var t = super.fromRender();
          return (t && m._meshSize(this.beyound, this.size), t);
        }
        static fromSP3(t, e) {
          e = e || t;
          var i = this._v0;
          return (m._meshSize(e, i), new m(t, i.x, i.y, i.z));
        }
        Contains(t) {
          var e = 0.5 * (s = this.size).x,
            i = 0.5 * s.y,
            s = 0.5 * s.z;
          return t.x < e && t.x > -e && t.y < i && t.y > -i && t.z < s && t.z > -s;
        }
        static RC(t, e, i, s, n) {
          return !!this._IRS(t, e, i, s, n) && ((s.collider = i), !0);
        }
        static _IRS(t, e, i, s, n) {
          const r = Vector3,
            o = r.transformQuat,
            a = W.Quat;
          var c = i.beyound.transform,
            h = this._q0,
            l = this._ray,
            u = l.origin,
            _ = c.position,
            c = c.rotation;
          return (
            a.invert(c, h),
            r.subtract(t.origin, _, u),
            o(u, h, u),
            (u = l.direction),
            o(t.direction, h, u),
            (u = this._v1),
            Vector3.scale(i.size, 0.5, u),
            this._IRAB(l, e, u, s, n)
              ? (n && (o(s.normal, c, s.normal), (n = s.point), o(n, c, n), r.add(n, _, n)),
                (s.succeeded = !0))
              : (s.succeeded = !1)
          );
        }
        static _IRAB(t, e, i, s, n) {
          var r = this._v0;
          Vector3.scale(i, -1, r);
          var o = this._v1;
          let a = this._v2;
          a.setValue(-1, -1, -1);
          let c = !0;
          var h = this._vn;
          let l = s.point,
            u = t.direction,
            _ = t.origin;
          for (let t = 0; t < 3; t++) {
            var d = h[t];
            _[d] < r[d]
              ? ((l[d] = r[d]), (c = !1), 0 != u[d] && (a[d] = (r[d] - _[d]) / u[d]))
              : _[d] > o[d] &&
                ((l[d] = o[d]), (c = !1), 0 != u[d] && (a[d] = (o[d] - _[d]) / u[d]));
          }
          let p = s.normal;
          if (c)
            return (
              (s.distance = 0),
              n && (_.cloneTo(l), u.cloneTo(p), Vector3.scale(p, -1, p)),
              (s.succeeded = !0)
            );
          let f = 0;
          (a[h[1]] > a[h[f]] && (f = 1), a[h[2]] > a[h[f]] && (f = 2));
          var y = h[f];
          if (a[y] > e) return (s.succeeded = !1);
          for (let t = 0; t < 3; t++)
            if (
              ((d = h[t]),
              t != f && ((l[d] = _[d] + a[y] * u[d]), l[d] < r[d] - 1e-5 || l[d] > o[d] + 1e-5))
            )
              return (s.succeeded = !1);
          return (
            (s.distance = a[y]),
            n && (p.setValue(0, 0, 0), (p[y] = 0 < l[y] ? 1 : -1)),
            (s.succeeded = !0)
          );
        }
        destroy() {
          ((this.center = null), super.destroy());
        }
      }
      t.P3Box = m;
    })((_p = _p || {})),
    (function (L) {
      ((L.CHull2D = class {
        static getCenterAndR(t) {
          (this._v0 ||
            ((this._v0 = new Vector2()), (this._v1 = new Vector2()), (this._v2 = new Vector2())),
            this._vs || (this._vs = []));
          let s = this._vs,
            n = [];
          t.forEach((t, e) => {
            let i = s[e];
            (i || ((i = new Vector2()), s.push(i)), i.setValue(t.x, t.z), n.push(i));
          });
          var e = this.scan(n),
            i = this._v2;
          return (
            this.bary_center(e, i),
            (t = i.x),
            (i = i.y),
            (e = this.rotating_calipers(e)),
            new Vec4(t, 0, i, e)
          );
        }
        static scan(e) {
          var t = W.Vec2;
          const i = t.distanceSquared,
            s = t.multiply;
          var n = [];
          for (let t = 0; t < e.length; t++) n.push(e[t]);
          for (var r, o = 0, a = 2, c = 1; c < n.length; c++)
            (n[c].y < n[o].y || (n[c].y == n[o].y && n[c].x < n[o].x)) && (o = c);
          var h = n[0];
          ((n[0] = n[o]), (n[o] = h));
          for (var l = n.length, u = [], c = 1; c < l - 1; c++) {
            for (r = (o = c) + 1; r < l; r++) {
              var _ = s(n[0], n[o], n[r]);
              0 < _
                ? (o = r)
                : 0 == _ &&
                  (l--,
                  0 < i(n[0], n[r]) - i(n[0], n[o])
                    ? ((n[o] = n[r]), (n[r] = n[l]), r--)
                    : ((h = n[l]), (n[l] = n[r]), (n[r] = h)));
            }
            ((h = n[c]), (n[c] = n[o]), (n[o] = h));
          }
          for (u.push(n[0]), u.push(n[1]), u.push(n[2]), c = 3; c < l; c++) {
            for (; !(s(n[c], u[a - 1], u[a]) < 0);) (a--, u.pop());
            (a++, u.push(n[c]));
          }
          return (n.splice(0, n.length), (n.length = 0), u);
        }
        static bary_center(e, i) {
          this._v0 ||
            ((this._v0 = new Vector2()), (this._v1 = new Vector2()), (this._v2 = new Vector2()));
          let s = 0;
          const n = W.Vec2,
            r = n.subtract;
          i.setValue(0, 0);
          var o = this._v0,
            a = this._v1;
          for (let t = 2; t < e.length; t++) {
            (r(e[t - 1], e[0], o), r(e[t], e[0], a));
            var c = n.cross(o, a);
            ((s += c),
              (i.x = i.x + ((e[0].x + e[t - 1].x + e[t].x) / 3) * c),
              (i.y = i.y + ((e[0].y + e[t - 1].y + e[t].y) / 3) * c));
          }
          ((i.x = i.x / s), (i.y = i.y / s));
        }
        static rotating_calipers(e) {
          this._v0 ||
            ((this._v0 = new Vector2()), (this._v1 = new Vector2()), (this._v2 = new Vector2()));
          var i = this._v0,
            s = this._v1,
            n = this._v2;
          let r = 1,
            o = 0;
          var a = e.length;
          e.push(e[0].clone());
          var t = W.Vec2;
          const c = t.subtract,
            h = t.cross,
            l = t.distanceSquared;
          for (let t = 0; t < a; t++) {
            for (c(e[t + 1], e[t], i), c(e[r + 1], e[t], s), c(e[r], e[t], n); h(i, s) > h(i, n);)
              ((r = (r + 1) % a), c(e[r + 1], e[t], s), c(e[r], e[t], n));
            o = Math.max(o, Math.max(l(e[t], e[r]), l(e[t + 1], e[r + 1])));
          }
          return o;
        }
        static is_in(t, e) {
          let i = 1,
            s = t.length - 1,
            n,
            r = W.Vec2.crossC.bind(W.Vec2);
          var o;
          if (
            (0 < r(t[0], t[i], t[s]) && ((o = i), (i = s), (s = o)),
            0 < r(t[0], t[i], e) || r(t[0], t[s], e) < 0)
          )
            return !1;
          for (; 1 < Math.abs(i - s);)
            ((n = Math.floor((i + s) / 2)), 0 < r(t[0], t[n], e) ? (s = n) : (i = n));
          return ((n = r(t[i], t[s], e)), n <= 0);
        }
        static douglasPeucker(t, e = 0.2) {
          return t && 2 < t.length
            ? (t.forEach((t, e) => {
                t.id = e;
              }),
              (e = this.compressLine(t, [], 0, t.length - 1, e)).push(t[0]),
              e.push(t[t.length - 1]),
              (e = e.sort((t, e) => (t.id < e.id ? -1 : t.id > e.id ? 1 : 0))).forEach((t) => {
                delete t.id;
              }),
              e)
            : null;
        }
        static compressLine(s, t, n, r, o) {
          if (n < r) {
            let e = 0,
              i = 0;
            var a = s[n],
              c = s[r];
            for (let t = n + 1; t < r; t++) {
              var h = W.Vec2.distToSeg(a, c, s[t]);
              h > e && ((e = h), (i = t));
            }
            e >= o &&
              (t.push(s[i]), this.compressLine(s, t, n, i, o), this.compressLine(s, t, i, r, o));
          }
          return t;
        }
      }),
        (L.ConvM = class {
          constructor() {
            this.points = new Array();
          }
          init(t, e = 0, i, s, n) {}
        }));
      let R,
        s = !1,
        n = !1,
        p;
      class T {
        static _i(t, e, i) {
          ((p = t),
            (s = e),
            (n = i),
            (this.RayCast_s_d = new Vector2()),
            (this.s_t0 = new Vector2()),
            (this.RayCast_s_output = { fraction: 0, normal: new Vector2() }),
            (R = new L.AABB(0, 0, 0, 0)));
        }
        static g10(t) {
          return t.x;
        }
        static g11(t) {
          return t.x;
        }
        static g12(t) {
          return t.y;
        }
        static g20(t) {
          return t.z;
        }
        static g21(t) {
          return t.y;
        }
        static g22(t) {
          return t.z;
        }
        static v20(t, e) {
          ((e.x = t.x), (e.y = t.z));
        }
        static v21(t, e) {
          ((e.x = t.x), (e.y = t.y));
        }
        static v22(t, e) {
          ((e.x = t.y), (e.y = t.z));
        }
        static v30(t, e) {
          ((e.x = t.x), (e.z = t.y));
        }
        static v31(t, e) {
          ((e.x = t.x), (e.y = t.y));
        }
        static v32(t, e) {
          ((e.y = t.x), (e.z = t.y));
        }
        static tP00(t, e, i) {
          let s = t.position;
          return ((s.x = e), (s.z = i), (t.position = s), !0);
        }
        static tP10(t, e, i) {
          let s = t.position;
          return ((s.x = e), (s.y = i), (t.position = s), !0);
        }
        static tP20(t, e, i) {
          let s = t.position;
          return ((s.y = e), (s.z = i), (t.position = s), !0);
        }
        static tP01(t, e, i) {
          let s = t.position;
          return !(
            (Math.abs(s.x - e) < 0.01 && Math.abs(s.z - i) < 0.01) ||
            ((s.x = e), (s.z = i), (t.position = s), 0)
          );
        }
        static tP11(t, e, i) {
          let s = t.position;
          return !(
            (Math.abs(s.x - e) < 0.01 && Math.abs(s.y - i) < 0.01) ||
            ((s.x = e), (s.y = i), (t.position = s), 0)
          );
        }
        static tP21(t, e, i) {
          let s = t.position;
          return !(
            (Math.abs(s.y - e) < 0.01 && Math.abs(s.z - i) < 0.01) ||
            ((s.y = e), (s.z = i), (t.position = s), 0)
          );
        }
        static V30(t, e) {
          return ((e.x = t.x), (e.z = t.y), e);
        }
        static V31(t, e) {
          return ((e.x = t.x), (e.y = t.y), e);
        }
        static V32(t, e) {
          return ((e.y = t.x), (e.z = t.y), e);
        }
        static V20(t, e) {
          return (e.Set(t.x, t.z), e);
        }
        static V21(t, e) {
          return (e.Set(t.x, t.y), e);
        }
        static V22(t, e) {
          return (e.Set(t.y, t.z), e);
        }
        static Ro0(t, e) {
          return (e.setValue(0, -t, 0), e);
        }
        static Ro1(t, e) {
          return (e.setValue(0, 0, t), e);
        }
        static Ro2(t, e) {
          return (e.setValue(-t, 0, 0), e);
        }
        static Rl0(t, e) {
          t.localRotationEulerY = -e;
        }
        static Rl1(t, e) {
          t.localRotationEulerZ = e;
        }
        static Rl2(t, e) {
          t.localRotationEulerX = -e;
        }
        static Ag0(t, e = !0) {
          return ((t = -t.y), e ? 0.01745329252 * t : t);
        }
        static Ag1(t, e = !0) {
          return ((t = t.z), e ? 0.01745329252 * t : t);
        }
        static Ag2(t, e = !0) {
          return ((t = -t.x), e ? 0.01745329252 * t : t);
        }
        static _rayN2(e, t, i, s, n = -1, r = -1, o = !0, a = !0) {
          let c = this._cl._cU;
          e = !!(s && s instanceof Array);
          const h = B.B2PhysicsSimulation;
          let l = h._v1;
          h.v2(t, l);
          var u = l.x,
            _ = l.y;
          h.v2(i, l);
          var d = l.x,
            p = l.y;
          let f = 1,
            y = !1;
          var m = this._physicsUpdateList,
            g = m.length;
          let b, v;
          o && ((v = h.v3), (b = T.RayCast_s_output));
          var C = d - u,
            S = p - _;
          ((C /= i = Math.sqrt(C * C + S * S)), (S /= i));
          for (let t = 0; t < g; t++) {
            var x = m[t];
            if (!x._inner) {
              var w = x._btColliderObject,
                P = x.colliderShape._btShape;
              if (
                w &&
                P &&
                (!(-1 < n) || (0 < (r & x._collisionGroup) && 0 < (x._canCollideWith & n))) &&
                (P = x.colliderShape._r2) &&
                T._RS(u, _, C, S, x._x, x._y, P) &&
                T._cRay(b, x, u, _, d, p, e ? 1 : f, a)
              )
                if (((P = b.fraction), (y = !0), s && (e || f >= P))) {
                  let t = e ? c.gHR() : s;
                  ((t.hitFraction = P),
                    (t.collider = x),
                    (t.succeeded = y),
                    o &&
                      (l.setValue((1 - P) * u + P * d, (1 - P) * _ + P * p),
                      v(l, t.point),
                      a && v(b.normal, t.normal)),
                    e && s.push(t),
                    (f = P));
                } else if (!s && !e) break;
            }
          }
          return y;
        }
        static _rayNP4(r, e, i, o, a, c, R, h) {
          o ? (o instanceof Array ? (r = !0) : (R = !(r = !1))) : (R = r = !1);
          const l = this;
          if (l.owner && !l.owner.destroyed) {
            const f = l._lines;
            var u = l._linei;
            let s = f[u],
              t;
            var _,
              d = T._Lp(e, i),
              p = d[2];
            (!s || s.destroyed
              ? (t = new SP3D())
              : ((_ = s.colliderShape),
                0.01 < Math.abs(p - _.l) && ((t = s.owner), s.destroy(), t.removeSelf())),
              t &&
                ((s = t.addComponent(B.B2Rigidbody)),
                (s._inner = !0),
                (_ = new L.B2LineColliderShape()),
                T._Le(p, _),
                (s.colliderShape = _),
                (s.isKinematic = !1),
                (s.overrideGravity = !0),
                (s.isTrigger = !0),
                (s.canSleep = !1),
                (f[u] = s),
                t.parent || l.owner.addChild(t)),
              s.sFilter(a, c),
              s._btColliderObject.SetTransform(d[0], d[1]),
              (s.owner.transform.position = e),
              l._linei++);
            let n = null;
            if (R) {
              const y = B.B2PhysicsSimulation;
              ((d = y._v1), y.v2(e, d), (n = [d.x, d.y]), y.v2(i, d), n.push(d.x), n.push(d.y));
            }
            return new Promise((t) => {
              const e = l._cl;
              var i = l._pUL;
              e._postFunc.push(
                Laya.Handler.create(
                  this,
                  (t, c, e, h, i, s, l, u, _, d) => {
                    let p = !1,
                      f = 0,
                      y = 0,
                      m;
                    if (e && !e.destroyed && !e.owner.destroyed) {
                      const n = e._btColliderObject;
                      let t = n.GetContactList();
                      if (t) {
                        var g = Math.round(1e5 * e.density);
                        let s, n, r;
                        (_ &&
                          ((e = B.B2PhysicsSimulation),
                          (n = e._v1),
                          (r = e.v3),
                          (s = T.RayCast_s_output)),
                          (m = u[l]),
                          (m = m || (u[l] = ["GetFixtureA", "GetFixtureB"])));
                        var b = m[0],
                          v = m[1],
                          C = B.B2PhysicsSimulation._dm;
                        let o = i._cU;
                        var S = _[0],
                          x = _[1],
                          w = _[2],
                          P = _[3];
                        let a = 1;
                        for (; t;) {
                          const D = t.contact;
                          if (D.IsTouching()) {
                            f++;
                            var V,
                              A = Math.round(1e5 * D[b]().GetDensity());
                            let i;
                            if (
                              (A == g
                                ? ((V = Math.round(1e5 * D[v]().GetDensity())), (i = C[V]), y++)
                                : (i = C[A]),
                              (i = i.owner),
                              !i._inner)
                            ) {
                              let e = !0;
                              if (h) {
                                let t = c ? o.gHR() : h;
                                (_
                                  ? T._cRay(s, i, S, x, w, P, c ? 1 : a, d)
                                    ? ((A = s.fraction),
                                      (c || a > A) &&
                                        ((t.hitFraction = A),
                                        R &&
                                          (n.setValue((1 - A) * S + A * w, (1 - A) * x + A * P),
                                          r(n, t.point),
                                          d && r(s.normal, t.normal)),
                                        c && h.push(t),
                                        (a = A)))
                                    : (e = !1)
                                  : c && h.push(t),
                                  (t.collider = i),
                                  (t.succeeded = p));
                              }
                              if (((p = p || e), p && !c)) break;
                            }
                          }
                          t = t.next;
                        }
                      }
                    }
                    ((_ = null),
                      0 < f &&
                        0.5 < (y - 1e-5) / f &&
                        ((i = m[0]), (m[0] = m[1]), (m[1] = i), (i = null), (m = null)),
                      t(p));
                  },
                  [t, r, s, o, e, i, l._linei - 1, l._lineF, n, h],
                ),
              );
            });
          }
        }
        static _RS(t, e, i, s, n, r, o) {
          return 0 <= o - ((t = n - t) * t + (e = r - e) * e - (s = t * i + e * s) * s);
        }
        static _cRay(t, e, i, s, n, r, o, a) {
          var c = e.colliderShape;
          let h = !1;
          switch (c._type) {
            case 1:
              var l = c._lo;
              h = this._CiRC(t, i, s, n, r, e._x, e._y, e._c, e._s, c._r2, l.x, l.y, o, a);
              break;
            case 0:
              h = this._PoRC(t, i, s, n, r, e._x, e._y, e._c, e._s, c._c, c._ns, c._ps, o, a);
          }
          return h;
        }
        static b2SubVV(t, e, i, s, n) {
          return ((n.x = t - i), (n.y = e - s), n);
        }
        static b2DotVV(t, e) {
          return t.x * e.x + t.y * e.y;
        }
        static b2MulRV(t, e, i, s) {
          var n = i.x,
            i = i.y;
          ((s.x = t * n - e * i), (s.y = e * n + t * i));
        }
        static b2AddVMulSV(t, e, i, s) {
          ((s.x = t.x + e * i.x), (s.y = t.y + e * i.y));
        }
        static _PoRC(t, e, i, s, n, r, o, a, c, h, l, u, _ = 1, d = !0) {
          for (
            var p = a * (e = e - r) + c * (i = i - o),
              f = -c * e + a * i,
              r = s - r,
              o = n - o,
              y = this.b2SubVV(a * r + c * o, -c * r + a * o, p, f, this.RayCast_s_d),
              m = 0,
              g = -1,
              b = 0;
            b < h;
            ++b
          ) {
            var v = u[b],
              C = l[b],
              v = this.b2DotVV(C, this.b2SubVV(v.x, v.y, p, f, this.s_t0));
            if (0 === (C = this.b2DotVV(C, y))) {
              if (v < 0) return !1;
            } else C < 0 && v < m * C ? ((m = v / C), (g = b)) : 0 < C && v < _ * C && (_ = v / C);
            if (_ < m) return !1;
          }
          return 0 <= g && ((t.fraction = m), d && this.b2MulRV(a, c, l[g], t.normal), !0);
        }
        static _CiRC(t, e, i, s, n, r, o, a, c, h, l, u, _ = 1, d = !0) {
          if (
            ((o = this.b2SubVV(e, i, a * l - c * u + r, c * l + a * u + o, this.RayCast_s_d)),
            (h = this.b2DotVV(o, o) - h),
            (n = this.b2SubVV(s, n, e, i, this.s_t0)),
            (h = (e = this.b2DotVV(o, n)) * e - (i = this.b2DotVV(n, n)) * h) < 0 || i < 1e-5)
          )
            return !1;
          let p = -(e + Math.sqrt(h));
          return (
            0 <= p &&
            p <= _ * i &&
            ((p /= i),
            (t.fraction = p),
            d && (this.b2AddVMulSV(o, p, n, t.normal), W.Vec2.normalized(t.normal)),
            !0)
          );
        }
        static _Lp(t, e) {
          const i = B.B2PhysicsSimulation;
          var s = i._bv20;
          i.V2(t, s);
          var n = i._v0;
          return (
            Vector3.subtract(t, e, n),
            (e = i._v1),
            i.v2(n, e),
            [s, -Math.atan2(e.y, e.x), Vector2.scalarLength(e)]
          );
        }
        static _Le(t, e) {
          let i = p.b2Vec2;
          (e._set(new i(0, 0), new i(t, 0)), (e.l = t));
        }
        static _cirw3(i, t, n, r, o = -1, a = -1) {
          var e = this,
            s = e._tr_(t).p,
            t = e._aabb(s.x, s.y, n);
          let c = !1;
          const h = s.x,
            l = s.y,
            u = n * n;
          let _ = e._cl._cU,
            d = e._mqcb;
          return (
            (d = d || (e._mqcb = new p.JSQueryCallback())),
            (d.ReportFixture = function (t) {
              const e = p.wrapPointer;
              return (
                (t = (function (i) {
                  if (i) {
                    let e = i._;
                    if (
                      (e || ((s = i.GetBody()) && ((e = s._component), (i._ = e))),
                      e &&
                        !e._inner &&
                        (!(-1 < o) || (0 < (a & e._collisionGroup) && 0 < (e._canCollideWith & o))))
                    ) {
                      var s = e.colliderShape;
                      let t = !1;
                      if (
                        (1 == (i = s._type)
                          ? (t = T._CiCC(e, e._x, h, l, n, s))
                          : 0 == i && (t = T._ReCC(e, e._x, e._y, h, l, u, s)),
                        t)
                      ) {
                        if (((c = !0), r)) {
                          let t = r instanceof Array ? _.gHR() : r;
                          ((t.collider = e), (t.succeeded = c), r instanceof Array && r.push(t));
                        }
                        return 0;
                      }
                    }
                  }
                  return 1;
                })(e(t, p.b2Fixture))),
                i ? 1 : t
              );
            }),
            e._btDiscreteDynamicsWorld.QueryAABB(d, t),
            c
          );
        }
        static _cirwP2(e, i, s, n, r = -1, o = -1) {
          const a = this;
          if (a.owner && !a.owner.destroyed) {
            const h = a._cirs;
            var c = a._ciri;
            let u = h[c],
              t;
            return (
              !u || u.destroyed
                ? (t = new SP3D())
                : 0.05 < Math.abs(u.colliderShape.radius - s) &&
                  ((t = u.owner), u.destroy(), t.removeSelf()),
              t &&
                ((u = t.addComponent(B.B2Rigidbody)),
                (u._inner = !0),
                (s = new B.B2SphereColliderShape(s)),
                (u.colliderShape = s),
                (u.isKinematic = !1),
                (u.overrideGravity = !0),
                (u.canSleep = !1),
                (u.isTrigger = !0),
                (h[c] = u),
                t.parent || a.owner.addChild(t)),
              u.sFilter(r, o),
              u._btColliderObject.SetTransform(a._pp(i), 0),
              a._ciri++,
              new Promise((t) => {
                a._cl._postFunc.push(
                  Laya.Handler.create(
                    this,
                    (t, s, e, n, r) => {
                      let o = !1;
                      var i = Date.now();
                      if (e && !e.destroyed && !e.owner.destroyed) {
                        const h = e._btColliderObject;
                        let t = h.GetContactList();
                        var a = t.Ut || t.a ? u.colliderShape._fi : null;
                        let i = r._cU;
                        for (; t.Ut || t.a;) {
                          const l = t.contact;
                          if (l.IsTouching()) {
                            let e;
                            var c = l._;
                            if (null != c) {
                              let t = c ? l.GetFixtureB() : l.GetFixtureA();
                              ((e = t._), (e = e || (t._ = t.GetBody()._component)));
                            } else {
                              c = l.GetFixtureA();
                              let t;
                              ((t = a == c ? ((l._ = !0), l.GetFixtureB()) : ((l._ = !1), c)),
                                (e = t._ = t.GetBody()._component));
                            }
                            if (!e._inner) {
                              if (((o = !0), n)) {
                                let t = n instanceof Array ? i.gHR() : n;
                                ((t.collider = e),
                                  (t.succeeded = o),
                                  n instanceof Array && n.push(t));
                              }
                              if (!s) break;
                            }
                          }
                          t = t.next;
                        }
                      }
                      ((W.FPS._cost_phy_sim = Date.now() - i), t(o));
                    },
                    [t, e, u, n, a._cl],
                  ),
                );
              })
            );
          }
        }
        static _cirN4(e, t, i, s, n = -1, r = -1) {
          let o = B.B2PhysicsSimulation;
          var a = o._v1;
          o.v2(t, a);
          var c = a.x,
            h = a.y,
            l = c - i,
            u = h - i,
            _ = c + i,
            d = h + i,
            p = i * i;
          let f = !1;
          var y = this._pUL,
            m = y.length;
          let g = this._cl._cU;
          for (let t = 0; t < m; t++) {
            var b = y[t];
            if (!b._inner) {
              var v = b._btColliderObject,
                C = b.colliderShape,
                S = C._btShape;
              if (
                v &&
                S &&
                (!(-1 < n) || (0 < (r & b._collisionGroup) && 0 < (b._canCollideWith & n)))
              ) {
                let t = !1;
                var x = b._x;
                if (!isNaN(x)) {
                  if (1 == (v = C._type)) t = T._CiCC(b, x, c, h, i, C);
                  else if (0 == v) {
                    if (((S = b._y), 0 < x - (v = C._r) - _ || 0 < S - v - d)) continue;
                    if (0 < l - x - v || 0 < u - S - v) continue;
                    t = T._ReCC(b, x, S, c, h, p, C);
                  }
                  if (t) {
                    if (((f = !0), s)) {
                      let t = s instanceof Array ? g.gHR() : s;
                      ((t.collider = b), (t.succeeded = f), s instanceof Array && s.push(t));
                    }
                    if (!e) break;
                  }
                }
              }
            }
          }
          return f;
        }
        static _CiCC(t, e, i, s, n, r) {
          let o = t._y;
          var a = r._lo,
            c = a.x,
            h = a.y;
          return (
            (0 == c && 0 == h) || ((e += c * (a = t._c) - h * (t = t._s)), (o += c * t + h * a)),
            (i = e - i) * i + (s = o - s) * s <= (r = n + r._r) * r
          );
        }
        static _CiCC2(t, e) {
          let i = t._x,
            s = t._y;
          var n = t.colliderShape,
            r = n._lo,
            o = r.x,
            a = r.y;
          return (
            (0 == o && 0 == a) ||
              ((r = t._c), (t = t._s), (i += o * r - a * t), (s += o * t + a * r)),
            this._CiCC(e, e._x, i, s, n._r, e.colliderShape)
          );
        }
        static _ReCC(t, e, i, s, n, r, o) {
          var a = (h = o._lo).x,
            c = h.y,
            o = (h = o._ps[0]).x - a - 0.01,
            h = h.y - c - 0.01;
          let l = (e = s - e) + a,
            u = (i = n - i) + c;
          return (
            0 != t._s && ((c = t._s), (t = t._c - 1), (l += e * t + i * c), (u += i * t - e * c)),
            (o = l - Math.max(o, Math.min(l, -o))) * o +
              (h = u - Math.max(h, Math.min(u, -h))) * h <
              r
          );
        }
        static _ReCC2(t, e) {
          let i = t.colliderShape;
          i instanceof L.B2BoxColliderShape && ((o = t), (t = e), (e = o), (i = t.colliderShape));
          let s = t._x,
            n = t._y;
          var r,
            o,
            a = i._lo;
          return (
            (0 == a.x && 0 == a.y) ||
              ((r = a.x),
              (o = a.y),
              (a = t._c),
              (t = t._s),
              (s += r * a - o * t),
              (n += r * t + o * a)),
            this._ReCC(e, e._x, e._y, s, n, i._r2, e.colliderShape)
          );
        }
        static _ReReC2(t, e) {
          var i = t.colliderShape,
            s = e.colliderShape,
            r = this.corners1,
            o = this.corners2;
          (this._gRCs(t, i, r), this._gRCs(e, s, o));
          const n = this.corners,
            a = this.axes;
          for (let t = 0; t < 8; t++) ((n[t] = r[t]), (n[t + 8] = o[t]));
          for (let t = 0; t < 8; t++) {
            var c = n[2 * t],
              h = n[2 * t + 1],
              l = (t + 1) % 8,
              u = n[2 * l],
              l = n[2 * l + 1];
            ((a[2 * t] = -(l - h)), (a[2 * t + 1] = u - c));
          }
          for (let t = 0; t < 8; t++) {
            var _ = a[2 * t],
              d = a[2 * t + 1];
            let e = 1 / 0,
              i = -1 / 0,
              s = 1 / 0,
              n = -1 / 0;
            for (let t = 0; t < 4; t++) {
              var p = r[2 * t] * _ + r[2 * t + 1] * d;
              ((e = Math.min(e, p)), (i = Math.max(i, p)));
            }
            for (let t = 0; t < 4; t++) {
              var f = o[2 * t] * _ + o[2 * t + 1] * d;
              ((s = Math.min(s, f)), (n = Math.max(n, f)));
            }
            if (i < s || n < e) return !1;
          }
          return !0;
        }
        static _gRCs(t, e, i) {
          var s = null !== (a = t._c) && void 0 !== a ? a : 1,
            n = null !== (o = t._s) && void 0 !== o ? o : 0,
            r = (c = e._ps)[0],
            o = (a = e._lo).x,
            e = a.y,
            a = Math.abs(r.x - c[2].x) / 2 + 0.016,
            c = Math.abs(r.y - c[2].y) / 2 + 0.016,
            o = t._x + o,
            t = t._y + e,
            e = a * s,
            a = a * n,
            s = c * s;
          ((i[0] = o - e + (n = c * n)),
            (i[1] = t - a - s),
            (i[2] = o + e + n),
            (i[3] = t + a - s),
            (i[4] = o + e - n),
            (i[5] = t + a + s),
            (i[6] = o - e - n),
            (i[7] = t - a + s));
        }
        static _cirNP2(n, e, i, r, o = -1, a = -1) {
          const c = this;
          if (c.owner && !c.owner.destroyed) {
            const l = c._cirs;
            var h = c._ciri;
            let s = l[h],
              t;
            return (
              !s || s.destroyed
                ? (t = new SP3D())
                : 0.05 < Math.abs(s.colliderShape.radius - i) &&
                  ((t = s.owner), s.destroy(), t.removeSelf()),
              t &&
                ((s = t.addComponent(B.B2Rigidbody)),
                (s._inner = !0),
                (i = new B.B2SphereColliderShape(i)),
                (s.colliderShape = i),
                (s.isKinematic = !1),
                (s.overrideGravity = !0),
                (s.isTrigger = !0),
                (s.canSleep = !1),
                (l[h] = s),
                t.parent || c.owner.addChild(t)),
              s.sFilter(o, a),
              s._btColliderObject.SetTransform(c._pp(e), 0),
              c._ciri++,
              new Promise((t) => {
                const e = c._cl;
                var i = c._pUL;
                e._postFunc.push(
                  Laya.Handler.create(
                    this,
                    (t, s, e, n, r, i, o, a) => {
                      let c = !1,
                        h = 0,
                        l = 0,
                        u;
                      if (e && !e.destroyed && !e.owner.destroyed) {
                        const g = e._btColliderObject;
                        let t = g.GetContactList();
                        if (t) {
                          var _ = Math.round(1e5 * e.density);
                          ((u = a[o]), (u = u || (a[o] = ["GetFixtureA", "GetFixtureB"])));
                          var d = u[0],
                            p = u[1],
                            f = B.B2PhysicsSimulation._dm;
                          let i = r._cU;
                          for (; t;) {
                            const b = t.contact;
                            if (b.IsTouching()) {
                              h++;
                              var y,
                                m = Math.round(1e5 * b[d]().GetDensity());
                              let e;
                              if (
                                (m == _
                                  ? ((y = Math.round(1e5 * b[p]().GetDensity())), (e = f[y]), l++)
                                  : (e = f[m]),
                                (e = e.owner),
                                !e._inner)
                              ) {
                                if (((c = !0), n)) {
                                  let t = n instanceof Array ? i.gHR() : n;
                                  ((t.collider = e),
                                    (t.succeeded = c),
                                    n instanceof Array && n.push(t));
                                }
                                if (!s) break;
                              }
                            }
                            t = t.next;
                          }
                        }
                      }
                      (0 < h &&
                        0.5 < (l - 1e-5) / h &&
                        ((r = u[0]), (u[0] = u[1]), (u[1] = r), (r = null), (u = null)),
                        t(c));
                    },
                    [t, n, s, r, e, i, c._ciri - 1, c._cirF],
                  ),
                );
              })
            );
          }
        }
        static _simN2() {
          var e = this;
          if (e._btDiscreteDynamicsWorld) {
            var r = e._pUL;
            let i = B.B2PhysicsSimulation,
              s = 1,
              n = 1;
            var o = i.ffast;
            if (o) {
              let t = e._utds;
              10 <= t.length && t.shift();
              var a = e._utd;
              (t.push(a),
                (a =
                  +t.reduce(function (t, e) {
                    return t + e;
                  }, 0) / t.length),
                (s = e._fic),
                1 == s
                  ? 3 < a
                    ? (e._fic = 2)
                    : 6 < a && (e._fic = 3)
                  : 2 == s
                    ? a < 2
                      ? (e._fic = 1)
                      : 6 < a && (e._fic = 3)
                    : 3 == s && (a < 2 ? (e._fic = 1) : a < 5 && (e._fic = 2)),
                (s = e._fic),
                (n = Laya.timer.currFrame % s));
            }
            const A = e.tree;
            var l = i._v1;
            (i._v2, i._v3);
            var u = 0.016;
            for (let t = 0, e = r.length; t < e; t++) {
              let e = r[t];
              var _,
                d,
                p,
                f,
                y,
                m,
                g = e.owner;
              if (g && !g.destroyed)
                if (e._inner) {
                  var b = g.transform.position;
                  (i.v2(b, l), (e._x = l.x), (e._y = l.y));
                  var v = i.Ag(g.transform.rotationEuler);
                  ((e._c = Math.cos(v)), (e._s = Math.sin(v)));
                } else {
                  const D = e._btColliderObject;
                  D &&
                    e._isAct &&
                    ((_ = g.transform),
                    o
                      ? ((d = e._z),
                        (p = e._w),
                        (b = e._b),
                        (v = e.id % s) != n &&
                        Math.abs(d) < 0.2 &&
                        Math.abs(p) < 0.2 &&
                        Math.abs(b) < 5
                          ? ((f = 0.6 + 2 * Math.min(Math.abs(d) + Math.abs(p), 0.2)),
                            (f = (Math.abs(v - n) * f) / s),
                            (e._x += d * f),
                            (e._y += p * f),
                            (d = e._x),
                            (p = e._y),
                            i.tP(_, d, p) &&
                              !e._isFixedRotation &&
                              ((e._a += b * f), i.Rl(_, e._a)))
                          : D.IsAwake() &&
                            ((f = (m = D.GetPosition()).x),
                            (m = m.y),
                            (e._z = f - e._x),
                            (e._w = m - e._y),
                            (e._x = f),
                            (e._y = m),
                            i.tP(_, f, m) && !e._isFixedRotation
                              ? ((y = D.GetAngle()),
                                (e._c = Math.cos(y)),
                                (e._s = Math.sin(y)),
                                (y *= 57.2957795),
                                (e._b = y - e._a),
                                (e._a = y),
                                i.Rl(_, y))
                              : (e._b = 0)))
                      : D.IsAwake() &&
                        ((y = (m = D.GetPosition()).x),
                        (m = m.y),
                        (e._z = y - e._x),
                        (e._w = m - e._y),
                        (e._x = y),
                        (e._y = m),
                        i.tP(_, y, m) && !e._isFixedRotation
                          ? ((m = D.GetAngle()),
                            (e._c = Math.cos(m)),
                            (e._s = Math.sin(m)),
                            (m *= 57.2957795),
                            (e._b = m - e._a),
                            (e._a = m),
                            i.Rl(_, m))
                          : (e._b = 0)));
                  let c = e._c,
                    h = e._s;
                  if (
                    (isNaN(c) &&
                      ((C = g.transform.position),
                      i.v2(C, l),
                      (e._x = l.x),
                      (e._y = l.y),
                      (C = i.Ag(g.transform.rotationEuler)),
                      (c = e._c = Math.cos(C)),
                      (h = e._s = Math.sin(C)),
                      (e._a = 57.2957795 * C)),
                    A)
                  ) {
                    e.check = !1;
                    var C = e.colliderShape;
                    let r = e._x,
                      o = e._y,
                      t,
                      a;
                    if (C instanceof L.B2SphereColliderShape) {
                      var S = C._r + u;
                      ((t = r + S), (a = o + S), (r -= S), (o -= S));
                    } else if (
                      C instanceof L.B2BoxColliderShape ||
                      (C instanceof L.B2MeshColliderShape && C.convex)
                    ) {
                      var x = C._ps,
                        S = x[0].x,
                        C = x[0].y;
                      let e,
                        i,
                        s = (e = c * S - h * C + r),
                        n = (i = h * S + c * C + o);
                      for (let t = 0; t < x.length; ++t) {
                        var w = x[t].x,
                          P = x[t].y,
                          V = c * w - h * P + r,
                          P = h * w + c * P + o;
                        ((s = Math.min(V, s)),
                          (n = Math.min(P, n)),
                          (e = Math.max(V, e)),
                          (i = Math.max(P, i)));
                      }
                      ((r = s - u), (o = n - u), (t = e + u), (a = i + u));
                    } else L.B2CompoundColliderShape;
                    (R.set(r, o, t, a), A.moveNode(e.node, R, Vector2.ZERO, !1));
                  }
                }
            }
          }
        }
        static b2MulXV(t, e, i, s, n, r) {
          var o = n.x,
            n = n.y;
          return ((r.x = t * o - e * n + i), (r.y = e * o + t * n + s), r);
        }
      }
      function t(t) {
        return p.wrapPointer(t, p.b2Contact);
      }
      ((T.corners = []),
        (T.corners1 = []),
        (T.corners2 = []),
        (T.axes = []),
        (L.WN = T),
        (L.B2ContactListener = class {
          constructor() {
            ((this._cU = new B.B2CollisionTool()),
              (this._cFC = []),
              (this._enterFunc = []),
              (this._exitFunc = []),
              (this._postFunc = []),
              (this._CL = []),
              (this._CL2 = []),
              (this._CF = []),
              (this._v2 = new Vector2()),
              n &&
                ((this._lastContact = new Set()),
                (this._curContact = new Set()),
                (this._idmap = new Map()),
                (this._PLS = new Set())));
          }
          static __init__() {
            ((this._Mf = new p.b2WorldManifold()), s && (this.prototype._wp = t));
          }
          _updatePreStep() {
            ((this._enterFunc.length = 0), (this._exitFunc.length = 0));
          }
          _uPS() {
            for (var t = Laya.Stat.loopCount, e = this._cFC, i = 0, s = e.length; i < s; i++) {
              var n,
                r,
                o,
                a = e[i];
              a &&
                ((n = this.gTA(a)),
                (r = this.gTB(a)),
                n.destroyed ||
                  r.destroyed ||
                  n._inner ||
                  n._inner ||
                  ((o = this._cU.gCNoC(n, r)) &&
                    0 < t - o._lastUpdateFrame &&
                    (o._setUpdateFrame(t),
                    (o = this._cCP(a, o, n, r)),
                    this._eSc(o, n, r, 2),
                    this._eSc(o, r, n, 2))));
            }
          }
          _uPS2() {
            for (var t = 0, e = this._enterFunc.length; t < e; t++)
              W.FuP.exeIFunc(this._enterFunc[t]);
            for (t = 0, e = this._exitFunc.length; t < e; t++) W.FuP.exeIFunc(this._exitFunc[t]);
            const i = this._postFunc;
            for (t = 0, e = i.length; t < e; t++) i[t].run();
            ((i.length = 0),
              this._CL2.forEach((t) => {
                t.clear();
              }),
              this._cU.rAHRP());
          }
          BeginContact(t) {
            t = this._wp(t);
            var e = this.gTA(t),
              i = this.gTB(t);
            e._inner ||
              i._inner ||
              (this._bN(t, e, i) && -1 == this._cFC.indexOf(t) && this._cFC.push(t));
          }
          _bN(t, e, i) {
            var s,
              n = Laya.Stat.loopCount,
              r = null,
              o = null;
            return (
              (e.isTrigger || i.isTrigger) &&
              (e.owner._needProcessTriggers || i.owner._needProcessTriggers)
                ? ((o = (r = this._cU.gC(e, i)).contacts),
                  (s = r._updateFrame !== n) && ((r._isTrigger = !0), (o.length = 0)))
                : (e.owner._needProcessCollisions || i.owner._needProcessCollisions) &&
                  (e._enableProcessCollisions || i._enableProcessCollisions) &&
                  (s = (r = this._cCP(t, r, e, i))._updateFrame !== n),
              r && s && (r._setUpdateFrame(n), r._setUpdateFrame(n)),
              r &&
                (this._enterFunc.push({ func: this._eSc, args: [r, e, i, 0] }),
                this._enterFunc.push({ func: this._eSc, args: [r, i, e, 0] })),
              r
            );
          }
          _eN(t, e) {
            let i = this._cU,
              s = i.gCNoC(t, e);
            s &&
              (i.rC(s),
              this._exitFunc.push({ func: this._eSc, args: [s, t, e, 1] }),
              this._exitFunc.push({ func: this._eSc, args: [s, e, t, 1] }),
              s.contacts.forEach((t) => {
                -1 < (t = i._cPP.indexOf(t)) && (i._cPP.splice(t, 1), i._cPPI--);
              }));
          }
          _cCP(e, t, i, s) {
            let n = this._cU,
              r;
            if (
              (t
                ? 0 < t.contacts.length && (r = t.contacts[0])
                : ((t = n.gC(i, s)), (r = n.gCP()), (r.colliderA = i), (r.colliderB = s)),
              !r)
            )
              return t;
            if (e) {
              var o = r.normal,
                a = r.positionOnA,
                i = r.positionOnB,
                s = B.B2ContactListener._Mf;
              e.GetWorldManifold(s);
              let t = B.B2PhysicsSimulation;
              (t.V3(s.normal, o),
                s.points instanceof Array
                  ? (t.V3(s.points[0], a), t.V3(s.points[1], i))
                  : (t.V3(s.points, a), i.setValue(0, 0, 0)));
            }
            let c = t.contacts;
            return (
              t._updateFrame !== Laya.Stat.loopCount && ((t._isTrigger = !1), (c.length = 0)),
              (c[0] = r),
              t
            );
          }
          _eSc(t, e, i, s) {
            var n = (e = e.owner)._scripts;
            if (n)
              if (t._isTrigger) {
                if (e._needProcessTriggers)
                  for (var r = 0, o = n.length; r < o; r++)
                    switch (s) {
                      case 0:
                        n[r].onTriggerEnter(i);
                        break;
                      case 1:
                        n[r].onTriggerExit(i);
                        break;
                      case 2:
                        n[r].onTriggerStay(i);
                    }
              } else if (e._needProcessCollisions)
                for (r = 0, o = n.length; r < o; r++)
                  switch (((t.other = i), s)) {
                    case 0:
                      n[r].onCollisionEnter(t);
                      break;
                    case 1:
                      n[r].onCollisionExit(t);
                      break;
                    case 2:
                      n[r].onCollisionStay(t);
                  }
          }
          EndContact(t) {
            t = this._wp(t);
            var e = this._cFC.indexOf(t);
            (-1 < e && this._cFC.splice(e, 1),
              (e = this.gTA(t)),
              (t = this.gTB(t)),
              e._inner || t._inner || this._eN(e, t));
          }
          _wp(t) {
            return t;
          }
          gTA(t) {
            return t.GetFixtureA().GetBody()._component;
          }
          gTB(t) {
            return t.GetFixtureB().GetBody()._component;
          }
          ccN(t, e) {}
          ccN2(t) {
            const e = this._CL,
              n = this._CL2;
            var r = Laya.Stat.loopCount,
              i = t.length,
              o = B.B2PhysicsSimulation._dm,
              s = t,
              a = Laya.timer.currFrame;
            for (let t = 0; t < i; t++) {
              const f = s[t];
              if (!f._inner && !f.destroyed && (a + f.id) % f.wx_inter_frame == 0) {
                var c = f.owner._scripts;
                if (c) {
                  let t = !1;
                  for (var h = 0, l = c.length; h < l && ((t = c[h]._onphy), !t); h++);
                  if (t) {
                    let t = f._btColliderObject.GetContactList();
                    if (t) {
                      var u = f.id;
                      let i = e[u];
                      i || ((i = new Set()), (e[u] = i));
                      let s = n[u];
                      s || ((s = new Set()), (n[u] = s));
                      for (var _ = Math.round(1e5 * f.density); t;) {
                        const y = t.contact;
                        var d = Math.round(1e5 * y.GetFixtureA().GetDensity()),
                          p = d == _ ? o[Math.round(1e5 * y.GetFixtureB().GetDensity())] : o[d];
                        if (!(p = p.owner)._inner && !s.has(p)) {
                          let t = n[p.id];
                          (t || ((t = new Set()), (n[p.id] = t)), t.add(f), s.add(p));
                          let e = !1;
                          if (
                            ((d = y.IsTouching()),
                            i.has(p) ? ((e = !0), d || i.delete(p)) : d && i.add(p),
                            !e && d && this._bN(y, f, p),
                            e && !d && this._eN(f, p),
                            !f.destroyed && !p.destroyed)
                          ) {
                            let t = this._cU.gCNoC(f, p);
                            t &&
                              0 < r - t._lastUpdateFrame &&
                              (t._setUpdateFrame(r),
                              (t = this._cCP(y, t, f, p)),
                              this._eSc(t, f, p, 2),
                              this._eSc(t, p, f, 2));
                          }
                        }
                        t = t.next;
                      }
                    }
                  }
                }
              }
            }
          }
          ccN3(t, e) {
            var s,
              n,
              r,
              e = e.getCollisionPairs();
            const o = this._lastContact,
              a = this._curContact,
              c = this._idmap,
              h = this._PLS;
            t.forEach((e) => {
              c.set(e.id, e);
              var i = e.owner._scripts;
              if (i) {
                let t = !1;
                for (var s = 0, n = i.length; s < n && ((t = i[s]._onphy), !t); s++);
                t && h.add(e.id);
              }
            });
            for (s of e) {
              let e = s.p1.data,
                i = s.p2.data;
              if (
                !(e._inner || e.destroyed || i._inner || i.destroyed) &&
                (h.has(e.id) || h.has(i.id)) &&
                (!(-1 < e._collisionGroup) ||
                  (0 < (e._canCollideWith & i._collisionGroup) &&
                    0 < (i._canCollideWith & e._collisionGroup)))
              ) {
                let t = !1;
                isNaN(e._x) ||
                  isNaN(i._x) ||
                  ((n = e.colliderShape._type),
                  (r = i.colliderShape._type),
                  1 == n && 1 == r
                    ? (t = T._CiCC2(e, i))
                    : (0 == n && 1 == r) || (1 == n && 0 == r)
                      ? (t = T._ReCC2(e, i))
                      : 0 == n && 0 == r && (t = T._ReReC2(e, i)),
                  t &&
                    ((e.check = !0),
                    (i.check = !0),
                    (n = e.id),
                    (r = i.id),
                    a.add(n < r ? n + 1e4 * r : r + 1e4 * n)));
              }
            }
            (a.forEach((t) => {
              var e = Math.floor(t / 1e4),
                i = t % 1e4,
                e = c.get(e),
                i = c.get(i);
              o.has(t) ? (this._eSc({}, e, i, 2), this._eSc({}, i, e, 2)) : this._bN(null, e, i);
            }),
              o.forEach((t) => {
                var e, i;
                a.has(t) ||
                  ((e = Math.floor(t / 1e4)),
                  (i = t % 1e4),
                  (t = c.get(e)),
                  (e = c.get(i)),
                  t &&
                    e &&
                    (this._exitFunc.push({ func: this._eSc, args: [(i = {}), t, e, 1] }),
                    this._exitFunc.push({ func: this._eSc, args: [i, e, t, 1] })));
              }),
              o.clear(),
              a.forEach((t) => o.add(t)),
              a.clear(),
              c.clear(),
              h.clear());
          }
          destory() {
            ((this._CL.length = 0),
              (this._CL = null),
              (this._CL2.length = 0),
              (this._CL2 = null),
              (this._CF.length = 0),
              (this._CF = null),
              this._cU.rACPP(),
              (this._cU = null),
              (this._cFC = null),
              (this._enterFunc.length = 0),
              (this._exitFunc.length = 0),
              (this._enterFunc = null),
              (this._exitFunc = null),
              this._lastContact && (this._lastContact.clear(), (this._lastContact = null)),
              this._curContact && (this._curContact = null),
              this._idmap && (this._idmap = null),
              this._PLS && (this._PLS = null));
          }
        }));
    })((_p = _p || {})),
    (function (t) {
      class f {
        constructor(t, e, i, s) {
          ((this.min = new Vector2(Math.min(t, i), Math.min(e, s))),
            (this.max = new Vector2(Math.max(t, i), Math.max(e, s))));
        }
        set(t, e, i, s) {
          ((this.min.x = Math.min(t, i)),
            (this.min.y = Math.min(e, s)),
            (this.max.x = Math.max(t, i)),
            (this.max.y = Math.max(e, s)));
        }
        contains(t) {
          return (
            this.min.x <= t.min.x &&
            this.min.y <= t.min.y &&
            this.max.x >= t.max.x &&
            this.max.y >= t.max.y
          );
        }
        testPoint(t) {
          return !(this.min.x > t.x || this.max.x < t.x || this.min.y > t.y || this.max.y < t.y);
        }
        testOverlap(t) {
          return !(
            this.min.x > t.max.x ||
            this.max.x < t.min.x ||
            this.min.y > t.max.y ||
            this.max.y < t.min.y
          );
        }
        get area() {
          return (this.max.x - this.min.x) * (this.max.y - this.min.y);
        }
      }
      function y(t, e, i) {
        var s = Math.min(t.min.x, e.min.x),
          n = Math.min(t.min.y, e.min.y),
          r = Math.max(t.max.x, e.max.x),
          e = Math.max(t.max.y, e.max.y);
        i.set(s, n, r, e);
      }
      function m(t, e) {
        var i = Math.min(t.min.x, e.min.x),
          s = Math.min(t.min.y, e.min.y);
        return (Math.max(t.max.x, e.max.x) - i) * (Math.max(t.max.y, e.max.y) - s);
      }
      function i(t, e, i = 0) {
        return e.set(t.x - i, t.y - i, t.x + t.w + i, t.y + t.h + i);
      }
      t.AABB = f;
      let a, e, s, n;
      class r {
        constructor() {
          ((this.uid = 0), (this.root = void 0), (this.debugCount = 0), r._i());
        }
        static _i() {
          a ||
            ((a = new Vector2()),
            (e = new Set()),
            (s = new f(0, 0, 0, 0)),
            (n = new f(0, 0, 0, 0)));
        }
        reset() {
          ((this.uid = 0), (this.root = void 0));
        }
        createNode(t, e) {
          let i = e;
          return (
            (e = c.aabbMargin),
            (i.max.x += e),
            (i.max.y += e),
            (i.min.x -= e),
            (i.min.y -= e),
            (t = {
              id: this.uid++,
              aabb: i,
              isLeaf: !0,
              data: t,
              parent: void 0,
              child1: void 0,
              child2: void 0,
            }),
            this.insertLeaf(t),
            t
          );
        }
        destroyNode(t) {
          this.removeLeaf(t);
        }
        moveNode(t, e, i, s = !1) {
          let n = t.aabb;
          if (n.contains(e) && 0 == s) return !1;
          ((s = e), (e = a), Vector2.scale(i, c.aabbMultiplier, e));
          const r = s.max,
            o = s.min;
          return (
            0 < e.x ? (r.x += e.x) : (o.x += e.x),
            0 < e.y ? (r.y += e.y) : (o.y += e.y),
            (e = c.aabbMargin),
            (r.x += e),
            (r.y += e),
            (o.x -= e),
            (o.y -= e),
            this.removeLeaf(t),
            t.aabb.set(r.x, r.y, o.x, o.y),
            this.insertLeaf(t),
            !0
          );
        }
        insertLeaf(o) {
          if (null != this.root) {
            var a = o.aabb;
            let t = this.root,
              e = m(this.root.aabb, a),
              i = [{ p1: this.root, p2: 0 }];
            for (; 0 != i.length;) {
              var c = i.shift(),
                h = c.p1,
                l = c.p2,
                u = m(h.aabb, a);
              ((c = u + l) < e && ((e = c), (t = h)),
                (l += u - h.aabb.area),
                a.area + l < e &&
                  (h.isLeaf || (i.push({ p1: h.child1, p2: l }), i.push({ p1: h.child2, p2: l }))));
            }
            let s = t.parent;
            var _ = new f(0, 0, 0, 0);
            y(a, t.aabb, _);
            let n = { id: this.uid++, parent: s, aabb: _, isLeaf: !1 };
            null != s
              ? (s.child1 == t ? (s.child1 = n) : (s.child2 = n),
                (n.child1 = t),
                (n.child2 = o),
                (t.parent = n),
                (o.parent = n))
              : ((n.child1 = t), (n.child2 = o), (t.parent = n), (o.parent = n), (this.root = n));
            let r = o.parent;
            for (; null != r;) {
              var d = r.child1,
                p = r.child2;
              (y(d.aabb, p.aabb, r.aabb), (r = r.parent));
            }
          } else this.root = o;
        }
        removeLeaf(i) {
          var s = i.parent;
          if (null != s) {
            let t = s.child1 == i ? s.child2 : s.child1;
            if (null != s.parent) {
              const o = (t.parent = s.parent);
              o.child1 == s ? (o.child1 = t) : (o.child2 = t);
            } else ((this.root = t), (t.parent = void 0));
            let e = t.parent;
            for (; null != e;) {
              var n = e.child1,
                r = e.child2;
              (y(n.aabb, r.aabb, e.aabb), (e = e.parent));
            }
          } else this.root == i && (this.root = void 0);
        }
        getCollisionPairs() {
          if (((this.debugCount = 0), null == this.root)) return [];
          var t = [];
          return (e.clear(), this.root.isLeaf || this.cC(this.root, t, e), t);
        }
        cC(t, e, i) {
          t.isLeaf ||
            (this.cNP(t.child1, t.child2, e, i),
            t.child1.isLeaf || this.cC(t.child1, e, i),
            t.child2.isLeaf || this.cC(t.child2, e, i));
        }
        cNP(t, e, i, s) {
          var n,
            r = (((n = t.id) + (r = e.id)) * (n + r + 1)) / 2 + r;
          s.has(r) ||
            (s.add(r),
            this.debugCount++,
            t.aabb.testOverlap(e.aabb) &&
              (t.isLeaf && e.isLeaf
                ? i.push({ p1: t, p2: e })
                : t.isLeaf || e.isLeaf
                  ? t.isLeaf && !e.isLeaf
                    ? (this.cNP(t, e.child1, i, s), this.cNP(t, e.child2, i, s))
                    : !t.isLeaf &&
                      e.isLeaf &&
                      (this.cNP(t.child1, e, i, s), this.cNP(t.child2, e, i, s))
                  : (this.cNP(t.child1, e.child1, i, s),
                    this.cNP(t.child1, e.child2, i, s),
                    this.cNP(t.child2, e.child1, i, s),
                    this.cNP(t.child2, e.child2, i, s))));
        }
        static detectCollision(t, e) {
          return (i(t, s), i(e, n), !!s.testOverlap(n));
        }
        static CiCC(t, e) {
          var i = 0.5 * t.w,
            s = 0.5 * e.w,
            n = t.x + i - e.x - s;
          return n * n + (e = t.y + i - e.y - s) * e <= i + s;
        }
      }
      t.AABBTree = r;
      const c = { aabbMargin: 0.1, aabbMultiplier: 2 };
    })((_p = _p || {})),
    (function (t) {
      !(function () {
        function t(t, e) {
          return l(e - -347, t);
        }
        for (var e = v(); ;)
          try {
            if (
              726367 ==
              -parseInt(t(175, 177)) * (parseInt(t(159, 157)) / 2) +
                (parseInt(t(145, 163)) / 3) * (parseInt(t(161, 161)) / 4) +
                (-parseInt(t(190, 171)) / 5) * (-parseInt(t(171, 176)) / 6) +
                (parseInt(t(197, 185)) / 7) * (-parseInt(t(180, 164)) / 8) +
                (-parseInt(t(195, 187)) / 9) * (-parseInt(t(170, 165)) / 10) +
                parseInt(t(149, 159)) / 11 +
                -parseInt(t(154, 152)) / 12
            )
              break;
            e.push(e.shift());
          } catch (t) {
            e.push(e.shift());
          }
      })();
      class e extends _p[L(107, 88)] {}
      t[L(100, 88)] = e;
      class i extends _p[L(129, 122)] {}
      t[L(132, 122)] = i;
      class s extends _p[L(78, 94)] {}
      t[L(93, 94)] = s;
      class n extends _p[L(138, 123)] {}
      t[L(109, 123)] = n;
      class r extends _p[L(101, 118)] {}
      t[L(123, 118)] = r;
      class o extends _p[L(121, 104)] {}
      t[L(91, 104)] = o;
      class a extends _p[L(100, 115)] {}
      t[L(98, 115)] = a;
      class c extends _p[L(87, 107)] {}
      t[L(91, 107)] = c;
      class h extends _p[L(144, 126)] {}
      function l(t, e) {
        var i = v();
        return (l = function (t, e) {
          return i[(t -= 499)];
        })(t, e);
      }
      t[L(124, 126)] = h;
      class u extends _p[L(84, 89)] {}
      t[L(68, 89)] = u;
      class _ extends _p[L(113, 117)] {}
      t[L(132, 117)] = _;
      class d extends _p[L(109, 102)] {}
      t[L(109, 102)] = d;
      class p extends _p[L(85, 100)] {}
      t[L(86, 100)] = p;
      class f extends _p[L(99, 120)] {}
      t[L(117, 120)] = f;
      class y extends _p[L(106, 116)] {}
      t[L(125, 116)] = y;
      class m extends _p[L(97, 113)] {}
      t[L(100, 113)] = m;
      class g extends _p[L(73, 92)] {}
      t[L(110, 92)] = g;
      class b extends _p[L(144, 124)] {}
      function v() {
        var t = [
          "15hvgQXO",
          "AABB",
          "B2ColliderShape",
          "P3Sim",
          "wxOnCollisionFast",
          "624882WBsuuy",
          "1ReFRUW",
          "P3Shape",
          "B2CollisionTool",
          "P3Plane",
          "B2PhysicsSettings",
          "B2Collision",
          "B2SphereColliderShape",
          "B2Rigidbody",
          "1444975IOAlgm",
          "B2HitResult",
          "3296907DLhAxJ",
          "B2PhysicsComponent",
          "B2PhysicsCollider",
          "B2FixedConstraint",
          "P3Sphere",
          "B2CompoundColliderShape",
          "7241328RkFiAq",
          "B2HingeConstraint",
          "IBox2D",
          "B2BoxColliderShape",
          "CHull2D",
          "1189462WwDkcr",
          "B2ConstraintComponent",
          "3744147dToMqt",
          "B2PhysicsTriggerComponent",
          "151672phGpYg",
          "P3Hit",
          "30BzeyTg",
          "8HToVFP",
          "30ktuWrU",
          "B2ContactListener",
          "AABBTree",
          "B2MeshColliderShape",
          "P3Box",
          "B2PhysicsSimulation",
        ];
        return (v = function () {
          return t;
        })();
      }
      t[L(123, 124)] = b;
      class C extends _p[L(70, 87)] {}
      t[L(70, 87)] = C;
      class S extends _p[L(121, 108)] {}
      t[L(107, 108)] = S;
      class B extends _p[L(97, 96)] {}
      t[L(79, 96)] = B;
      class x extends _p[L(106, 112)] {}
      t[L(125, 112)] = x;
      class w extends _p[L(132, 114)] {}
      t[L(121, 114)] = w;
      class P extends _p[L(134, 125)] {}
      t[L(137, 125)] = P;
      class V extends _p[L(82, 103)] {}
      t[L(96, 103)] = V;
      class A extends _p[L(98, 90)] {}
      t[L(103, 90)] = A;
      class D extends _p[L(92, 106)] {}
      t[L(127, 106)] = D;
      class R extends _p[L(110, 101)] {}
      function L(t, e) {
        return l(e - -413, t);
      }
      ((t[L(93, 101)] = R), (t.f = -1), (t[L(90, 109)] = !1));
    })((window.B = window.B || {}), B));
});
