define("libs/min/laya.physics.wasm.min.js", function (require, module, exports) {
  !(function () {
    const t =
      ((function (o, i) {
        var _,
          s =
            ((_ =
              "undefined" != typeof document && document.currentScript
                ? document.currentScript.src
                : void 0),
            "undefined" != typeof __filename && (_ = _ || __filename),
            function (o) {
              var i, s;
              ((o = o || {}),
                i || (i = void 0 !== o ? o : {}),
                (i.ready = new Promise(function (t) {
                  s = t;
                })));
              var a,
                y = {};
              for (a in i) i.hasOwnProperty(a) && (y[a] = i[a]);
              var f,
                j,
                $ = !1,
                tt = !1;
              (($ = "object" == typeof window),
                (tt = "function" == typeof importScripts),
                (f =
                  "object" == typeof process &&
                  "object" == typeof process.versions &&
                  "string" == typeof process.versions.node),
                (j = !$ && !f && !tt));
              var et,
                nt,
                ot,
                it,
                _t = "";
              f
                ? ((_t = tt ? require("path").dirname(_t) + "/" : __dirname + "/"),
                  (et = function (t, e) {
                    return (
                      ot || (ot = require("fs")),
                      it || (it = require("path")),
                      (t = it.normalize(t)),
                      ot.readFileSync(t, e ? null : "utf8")
                    );
                  }),
                  (nt = function (t) {
                    return ((t = et(t, !0)).buffer || (t = new Uint8Array(t)), assert(t.buffer), t);
                  }),
                  1 < process.argv.length && process.argv[1].replace(/\\/g, "/"),
                  process.argv.slice(2),
                  process.on("uncaughtException", function (t) {
                    throw t;
                  }),
                  process.on("unhandledRejection", na),
                  (i.inspect = function () {
                    return "[Emscripten Module object]";
                  }))
                : j
                  ? ("undefined" != typeof read &&
                      (et = function (t) {
                        return read(t);
                      }),
                    (nt = function (t) {
                      return "function" == typeof readbuffer
                        ? new Uint8Array(readbuffer(t))
                        : (assert("object" == typeof (t = read(t, "binary"))), t);
                    }),
                    "undefined" != typeof print &&
                      ("undefined" == typeof console && (console = {}),
                      (console.log = print),
                      (console.warn = console.error =
                        "undefined" != typeof printErr ? printErr : print)))
                  : ($ || tt) &&
                    (tt
                      ? (_t = self.location.href)
                      : document.currentScript && (_t = document.currentScript.src),
                    _ && (_t = _),
                    (_t = 0 !== _t.indexOf("blob:") ? _t.substr(0, _t.lastIndexOf("/") + 1) : ""),
                    (et = function (t) {
                      var e = new XMLHttpRequest();
                      return (e.open("GET", t, !1), e.send(null), e.responseText);
                    }),
                    tt &&
                      (nt = function (t) {
                        var e = new XMLHttpRequest();
                        return (
                          e.open("GET", t, !1),
                          (e.responseType = "arraybuffer"),
                          e.send(null),
                          new Uint8Array(e.response)
                        );
                      }));
              var rt,
                pt = i.print || console.log.bind(console),
                st = i.printErr || console.warn.bind(console);
              for (a in y) y.hasOwnProperty(a) && (i[a] = y[a]);
              ((y = null), i.wasmBinary && (rt = i.wasmBinary), i.noExitRuntime && i.noExitRuntime);
              const ct =
                "object" == typeof WXWebAssembly
                  ? WXWebAssembly
                  : "object" == typeof WebAssembly
                    ? WebAssembly
                    : null;
              "object" != typeof ct && st("no native wasm support detected");
              var ut,
                at = ct ? new ct.Table({ initial: 210, maximum: 230, element: "anyfunc" }) : null,
                lt = !1;
              function assert(t, e) {
                t || na("Assertion failed: " + e);
              }
              var yt,
                bt,
                dt,
                mt,
                ft = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
              function wa(t, e, n) {
                var o = e + n;
                for (n = e; t[n] && !(n >= o);) ++n;
                if (16 < n - e && t.subarray && ft) return ft.decode(t.subarray(e, n));
                for (o = ""; e < n;) {
                  var i = t[e++];
                  if (128 & i) {
                    var _ = 63 & t[e++];
                    if (192 == (224 & i)) o += String.fromCharCode(((31 & i) << 6) | _);
                    else {
                      var r = 63 & t[e++];
                      65536 >
                      (i =
                        224 == (240 & i)
                          ? ((15 & i) << 12) | (_ << 6) | r
                          : ((7 & i) << 18) | (_ << 12) | (r << 6) | (63 & t[e++]))
                        ? (o += String.fromCharCode(i))
                        : ((i -= 65536),
                          (o += String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i))));
                    }
                  } else o += String.fromCharCode(i);
                }
                return o;
              }
              function xa(t) {
                return t ? wa(bt, t, void 0) : "";
              }
              function Da(t) {
                ((yt = t),
                  (i.HEAP8 = new Int8Array(t)),
                  (i.HEAP16 = new Int16Array(t)),
                  (i.HEAP32 = dt = new Int32Array(t)),
                  (i.HEAPU8 = bt = new Uint8Array(t)),
                  (i.HEAPU16 = new Uint16Array(t)),
                  (i.HEAPU32 = new Uint32Array(t)),
                  (i.HEAPF32 = new Float32Array(t)),
                  (i.HEAPF64 = mt = new Float64Array(t)));
              }
              var ht = i.INITIAL_MEMORY || 16777216;
              function Fa(t) {
                for (; 0 < t.length;) {
                  var e = t.shift();
                  if ("function" == typeof e) e(i);
                  else {
                    var n = e.ev;
                    "number" == typeof n
                      ? void 0 === e.Au
                        ? i.dynCall_v(n)
                        : i.dynCall_vi(n, e.Au)
                      : n(void 0 === e.Au ? null : e.Au);
                  }
                }
              }
              ((ut = i.wasmMemory
                ? i.wasmMemory
                : ct
                  ? new ct.Memory({ initial: ht / 65536, maximum: 32768 })
                  : null) && (yt = ut.buffer),
                (ht = yt.byteLength),
                Da(yt),
                (dt[6512] = 5269088));
              var gt = [],
                Ut = [],
                wt = [],
                Jt = [],
                Dt = !1;
              function La() {
                var t = i.preRun.shift();
                gt.unshift(t);
              }
              var vt = 0,
                St = null,
                At = null;
              function na(t) {
                (i.onAbort && i.onAbort(t), pt((t += "")), st(t), (lt = !0));
              }
              function Pa(t) {
                var e = xt;
                return String.prototype.startsWith ? e.startsWith(t) : 0 === e.indexOf(t);
              }
              function Ra() {
                return Pa("data:application/octet-stream;base64,");
              }
              ((i.preloadedImages = {}), (i.preloadedAudios = {}));
              var xt = "B2D_v2.3.1_min.wasm.wasm";
              if (!Ra()) {
                var Bt = xt;
                xt = i.locateFile ? i.locateFile(Bt, _t) : _t + Bt;
              }
              function Ta() {
                try {
                  if (rt) return new Uint8Array(rt);
                  if (nt) return nt(xt);
                  throw "both async and sync fetching of the wasm failed";
                } catch (t) {
                  na(t);
                }
              }
              var jt = {
                1156: function (t, e) {
                  if (
                    !(t = i.getCache(i.JSDestructionListener)[t]).hasOwnProperty("SayGoodbyeJoint")
                  )
                    throw "a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeJoint.";
                  t.SayGoodbyeJoint(e);
                },
                1414: function (t, e) {
                  if (
                    !(t = i.getCache(i.JSDestructionListener)[t]).hasOwnProperty(
                      "SayGoodbyeFixture",
                    )
                  )
                    throw "a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeFixture.";
                  t.SayGoodbyeFixture(e);
                },
                1840: function (t, e) {
                  if (!(t = i.getCache(i.JSQueryCallback)[t]).hasOwnProperty("ReportFixture"))
                    throw "a JSImplementation must implement all functions, you forgot JSQueryCallback::ReportFixture.";
                  return t.ReportFixture(e);
                },
                2104: function (t, e, n, o, _) {
                  if (!(t = i.getCache(i.JSRayCastCallback)[t]).hasOwnProperty("ReportFixture"))
                    throw "a JSImplementation must implement all functions, you forgot JSRayCastCallback::ReportFixture.";
                  return t.ReportFixture(e, n, o, _);
                },
                2400: function (t, e) {
                  if (!(t = i.getCache(i.JSContactListener)[t]).hasOwnProperty("BeginContact"))
                    throw "a JSImplementation must implement all functions, you forgot JSContactListener::BeginContact.";
                  t.BeginContact(e);
                },
                2638: function (t, e) {
                  if (!(t = i.getCache(i.JSContactListener)[t]).hasOwnProperty("EndContact"))
                    throw "a JSImplementation must implement all functions, you forgot JSContactListener::EndContact.";
                  t.EndContact(e);
                },
                2870: function (t, e, n) {
                  if (!(t = i.getCache(i.JSContactListener)[t]).hasOwnProperty("PreSolve"))
                    throw "a JSImplementation must implement all functions, you forgot JSContactListener::PreSolve.";
                  t.PreSolve(e, n);
                },
                3103: function (t, e, n) {
                  if (!(t = i.getCache(i.JSContactListener)[t]).hasOwnProperty("PostSolve"))
                    throw "a JSImplementation must implement all functions, you forgot JSContactListener::PostSolve.";
                  t.PostSolve(e, n);
                },
                3452: function (t, e, n) {
                  if (!(t = i.getCache(i.JSContactFilter)[t]).hasOwnProperty("ShouldCollide"))
                    throw "a JSImplementation must implement all functions, you forgot JSContactFilter::ShouldCollide.";
                  return t.ShouldCollide(e, n);
                },
                3744: function (t, e, n, o) {
                  if (!(t = i.getCache(i.JSDraw)[t]).hasOwnProperty("DrawPolygon"))
                    throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawPolygon.";
                  t.DrawPolygon(e, n, o);
                },
                3968: function (t, e, n, o) {
                  if (!(t = i.getCache(i.JSDraw)[t]).hasOwnProperty("DrawSolidPolygon"))
                    throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidPolygon.";
                  t.DrawSolidPolygon(e, n, o);
                },
                4202: function (t, e, n, o) {
                  if (!(t = i.getCache(i.JSDraw)[t]).hasOwnProperty("DrawCircle"))
                    throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawCircle.";
                  t.DrawCircle(e, n, o);
                },
                4423: function (t, e, n, o, _) {
                  if (!(t = i.getCache(i.JSDraw)[t]).hasOwnProperty("DrawSolidCircle"))
                    throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidCircle.";
                  t.DrawSolidCircle(e, n, o, _);
                },
                4663: function (t, e, n, o) {
                  if (!(t = i.getCache(i.JSDraw)[t]).hasOwnProperty("DrawSegment"))
                    throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawSegment.";
                  t.DrawSegment(e, n, o);
                },
                4887: function (t, e) {
                  if (!(t = i.getCache(i.JSDraw)[t]).hasOwnProperty("DrawTransform"))
                    throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawTransform.";
                  t.DrawTransform(e);
                },
              };
              Ut.push({
                ev: function () {
                  Mt();
                },
              });
              var Gt = [null, [], []];
              function Ya(t, e) {
                Ct || (Ct = []);
                var n,
                  o = Ct;
                for (o.length = 0; (n = bt[t++]);)
                  100 === n || 102 === n
                    ? ((e = (e + 7) & -8), o.push(mt[e >> 3]), (e += 8))
                    : ((e = (e + 3) & -4), o.push(dt[e >> 2]), (e += 4));
                return o;
              }
              var Ct,
                Pt = {
                  a: function (t, e, n, o) {
                    na(
                      "Assertion failed: " +
                        xa(t) +
                        ", at: " +
                        [e ? xa(e) : "unknown filename", n, o ? xa(o) : "unknown function"],
                    );
                  },
                  g: function () {
                    na();
                  },
                  d: function (t, e, n) {
                    return ((e = Ya(e, n)), jt[t].apply(null, e));
                  },
                  b: function (t, e, n) {
                    return ((e = Ya(e, n)), jt[t].apply(null, e));
                  },
                  e: function (t, e, n) {
                    bt.copyWithin(t, e, e + n);
                  },
                  f: function (t) {
                    t >>>= 0;
                    var e = bt.length;
                    if (2147483648 < t) return !1;
                    for (var n = 1; 4 >= n; n *= 2) {
                      var o = e * (1 + 0.2 / n);
                      ((o = Math.min(o, t + 100663296)),
                        0 < (o = Math.max(16777216, t, o)) % 65536 && (o += 65536 - (o % 65536)));
                      t: {
                        try {
                          (ut.grow((Math.min(2147483648, o) - yt.byteLength + 65535) >>> 16),
                            Da(ut.buffer));
                          var i = 1;
                          break t;
                        } catch (t) {}
                        i = void 0;
                      }
                      if (i) return !0;
                    }
                    return !1;
                  },
                  c: function (t, e, n, o) {
                    for (var i = 0, _ = 0; _ < n; _++) {
                      for (
                        var r = dt[(e + 8 * _) >> 2], p = dt[(e + (8 * _ + 4)) >> 2], s = 0;
                        s < p;
                        s++
                      ) {
                        var c = bt[r + s],
                          u = Gt[t];
                        0 === c || 10 === c
                          ? ((1 === t ? pt : st)(wa(u, 0)), (u.length = 0))
                          : u.push(c);
                      }
                      i += p;
                    }
                    return ((dt[o >> 2] = i), 0);
                  },
                  memory: ut,
                  table: at,
                },
                Rt = (function () {
                  function b(t) {
                    ((i.asm = t.exports),
                      vt--,
                      i.monitorRunDependencies && i.monitorRunDependencies(vt),
                      0 == vt &&
                        (null !== St && (clearInterval(St), (St = null)),
                        At && ((t = At), (At = null), t())));
                  }
                  function c(t) {
                    b(t.instance);
                  }
                  function d(e) {
                    return (
                      rt || (!$ && !tt) || "function" != typeof fetch || Pa("file://")
                        ? new Promise(function (t) {
                            t(Ta());
                          })
                        : fetch(xt, { credentials: "same-origin" })
                            .then(function (t) {
                              if (!t.ok) throw "failed to load wasm binary file at '" + xt + "'";
                              return t.arrayBuffer();
                            })
                            .catch(function () {
                              return Ta();
                            })
                    )
                      .then(function (e) {
                        return ct.instantiate(e, t);
                      })
                      .then(e, function (t) {
                        (st("failed to asynchronously prepare wasm: " + t), na(t));
                      });
                  }
                  var t = { a: Pt };
                  if (
                    (vt++,
                    i.monitorRunDependencies && i.monitorRunDependencies(vt),
                    i.instantiateWasm)
                  )
                    try {
                      return i.instantiateWasm(t, b);
                    } catch (t) {
                      return (st("Module.instantiateWasm callback failed with error: " + t), !1);
                    }
                  return (
                    (function () {
                      if (
                        rt ||
                        "function" != typeof ct.instantiateStreaming ||
                        Ra() ||
                        Pa("file://") ||
                        "function" != typeof fetch
                      )
                        return d(c);
                      fetch(xt, { credentials: "same-origin" }).then(function (e) {
                        return ct.instantiateStreaming(e, t).then(c, function (t) {
                          (st("wasm streaming compile failed: " + t),
                            st("falling back to ArrayBuffer instantiation"),
                            d(c));
                        });
                      });
                    })(),
                    {}
                  );
                })();
              i.asm = Rt;
              var Mt = (i.___wasm_call_ctors = function () {
                return (Mt = i.___wasm_call_ctors = i.asm.h).apply(null, arguments);
              });
              i.___em_js__array_bounds_check_error = function () {
                return (i.___em_js__array_bounds_check_error = i.asm.i).apply(null, arguments);
              };
              var Tt,
                Ft = (i._emscripten_bind_b2DestructionListenerWrapper___destroy___0 = function () {
                  return (Ft = i._emscripten_bind_b2DestructionListenerWrapper___destroy___0 =
                    i.asm.j).apply(null, arguments);
                }),
                Lt = (i._emscripten_bind_b2Draw_SetFlags_1 = function () {
                  return (Lt = i._emscripten_bind_b2Draw_SetFlags_1 = i.asm.k).apply(
                    null,
                    arguments,
                  );
                }),
                It = (i._emscripten_bind_b2Draw_GetFlags_0 = function () {
                  return (It = i._emscripten_bind_b2Draw_GetFlags_0 = i.asm.l).apply(
                    null,
                    arguments,
                  );
                }),
                Wt = (i._emscripten_bind_b2Draw_AppendFlags_1 = function () {
                  return (Wt = i._emscripten_bind_b2Draw_AppendFlags_1 = i.asm.m).apply(
                    null,
                    arguments,
                  );
                }),
                Ot = (i._emscripten_bind_b2Draw_ClearFlags_1 = function () {
                  return (Ot = i._emscripten_bind_b2Draw_ClearFlags_1 = i.asm.n).apply(
                    null,
                    arguments,
                  );
                }),
                Vt = (i._emscripten_bind_b2Draw___destroy___0 = function () {
                  return (Vt = i._emscripten_bind_b2Draw___destroy___0 = i.asm.o).apply(
                    null,
                    arguments,
                  );
                }),
                Et = (i._emscripten_bind_b2Joint_GetType_0 = function () {
                  return (Et = i._emscripten_bind_b2Joint_GetType_0 = i.asm.p).apply(
                    null,
                    arguments,
                  );
                }),
                qt = (i._emscripten_bind_b2Joint_GetBodyA_0 = function () {
                  return (qt = i._emscripten_bind_b2Joint_GetBodyA_0 = i.asm.q).apply(
                    null,
                    arguments,
                  );
                }),
                kt = (i._emscripten_bind_b2Joint_GetBodyB_0 = function () {
                  return (kt = i._emscripten_bind_b2Joint_GetBodyB_0 = i.asm.r).apply(
                    null,
                    arguments,
                  );
                }),
                Nt = (i._emscripten_bind_b2Joint_GetAnchorA_0 = function () {
                  return (Nt = i._emscripten_bind_b2Joint_GetAnchorA_0 = i.asm.s).apply(
                    null,
                    arguments,
                  );
                }),
                Xt = (i._emscripten_bind_b2Joint_GetAnchorB_0 = function () {
                  return (Xt = i._emscripten_bind_b2Joint_GetAnchorB_0 = i.asm.t).apply(
                    null,
                    arguments,
                  );
                }),
                Ht = (i._emscripten_bind_b2Joint_GetReactionForce_1 = function () {
                  return (Ht = i._emscripten_bind_b2Joint_GetReactionForce_1 = i.asm.u).apply(
                    null,
                    arguments,
                  );
                }),
                zt = (i._emscripten_bind_b2Joint_GetReactionTorque_1 = function () {
                  return (zt = i._emscripten_bind_b2Joint_GetReactionTorque_1 = i.asm.v).apply(
                    null,
                    arguments,
                  );
                }),
                Qt = (i._emscripten_bind_b2Joint_GetNext_0 = function () {
                  return (Qt = i._emscripten_bind_b2Joint_GetNext_0 = i.asm.w).apply(
                    null,
                    arguments,
                  );
                }),
                Zt = (i._emscripten_bind_b2Joint_GetUserData_0 = function () {
                  return (Zt = i._emscripten_bind_b2Joint_GetUserData_0 = i.asm.x).apply(
                    null,
                    arguments,
                  );
                }),
                Yt = (i._emscripten_bind_b2Joint_SetUserData_1 = function () {
                  return (Yt = i._emscripten_bind_b2Joint_SetUserData_1 = i.asm.y).apply(
                    null,
                    arguments,
                  );
                }),
                Kt = (i._emscripten_bind_b2Joint_IsActive_0 = function () {
                  return (Kt = i._emscripten_bind_b2Joint_IsActive_0 = i.asm.z).apply(
                    null,
                    arguments,
                  );
                }),
                $t = (i._emscripten_bind_b2Joint_GetCollideConnected_0 = function () {
                  return ($t = i._emscripten_bind_b2Joint_GetCollideConnected_0 = i.asm.A).apply(
                    null,
                    arguments,
                  );
                }),
                te = (i._emscripten_bind_b2Joint_Dump_0 = function () {
                  return (te = i._emscripten_bind_b2Joint_Dump_0 = i.asm.B).apply(null, arguments);
                }),
                ee = (i._emscripten_bind_b2RayCastCallback___destroy___0 = function () {
                  return (ee = i._emscripten_bind_b2RayCastCallback___destroy___0 = i.asm.C).apply(
                    null,
                    arguments,
                  );
                }),
                ne = (i._emscripten_bind_b2ContactListener___destroy___0 = function () {
                  return (ne = i._emscripten_bind_b2ContactListener___destroy___0 = i.asm.D).apply(
                    null,
                    arguments,
                  );
                }),
                oe = (i._emscripten_bind_b2QueryCallback___destroy___0 = function () {
                  return (oe = i._emscripten_bind_b2QueryCallback___destroy___0 = i.asm.E).apply(
                    null,
                    arguments,
                  );
                }),
                ie = (i._emscripten_bind_b2JointDef_b2JointDef_0 = function () {
                  return (ie = i._emscripten_bind_b2JointDef_b2JointDef_0 = i.asm.F).apply(
                    null,
                    arguments,
                  );
                }),
                _e = (i._emscripten_bind_b2JointDef_get_type_0 = function () {
                  return (_e = i._emscripten_bind_b2JointDef_get_type_0 = i.asm.G).apply(
                    null,
                    arguments,
                  );
                }),
                re = (i._emscripten_bind_b2JointDef_set_type_1 = function () {
                  return (re = i._emscripten_bind_b2JointDef_set_type_1 = i.asm.H).apply(
                    null,
                    arguments,
                  );
                }),
                pe = (i._emscripten_bind_b2JointDef_get_userData_0 = function () {
                  return (pe = i._emscripten_bind_b2JointDef_get_userData_0 = i.asm.I).apply(
                    null,
                    arguments,
                  );
                }),
                se = (i._emscripten_bind_b2JointDef_set_userData_1 = function () {
                  return (se = i._emscripten_bind_b2JointDef_set_userData_1 = i.asm.J).apply(
                    null,
                    arguments,
                  );
                }),
                ce = (i._emscripten_bind_b2JointDef_get_bodyA_0 = function () {
                  return (ce = i._emscripten_bind_b2JointDef_get_bodyA_0 = i.asm.K).apply(
                    null,
                    arguments,
                  );
                }),
                ue = (i._emscripten_bind_b2JointDef_set_bodyA_1 = function () {
                  return (ue = i._emscripten_bind_b2JointDef_set_bodyA_1 = i.asm.L).apply(
                    null,
                    arguments,
                  );
                }),
                ae = (i._emscripten_bind_b2JointDef_get_bodyB_0 = function () {
                  return (ae = i._emscripten_bind_b2JointDef_get_bodyB_0 = i.asm.M).apply(
                    null,
                    arguments,
                  );
                }),
                le = (i._emscripten_bind_b2JointDef_set_bodyB_1 = function () {
                  return (le = i._emscripten_bind_b2JointDef_set_bodyB_1 = i.asm.N).apply(
                    null,
                    arguments,
                  );
                }),
                ye = (i._emscripten_bind_b2JointDef_get_collideConnected_0 = function () {
                  return (ye = i._emscripten_bind_b2JointDef_get_collideConnected_0 =
                    i.asm.O).apply(null, arguments);
                }),
                be = (i._emscripten_bind_b2JointDef_set_collideConnected_1 = function () {
                  return (be = i._emscripten_bind_b2JointDef_set_collideConnected_1 =
                    i.asm.P).apply(null, arguments);
                }),
                de = (i._emscripten_bind_b2JointDef___destroy___0 = function () {
                  return (de = i._emscripten_bind_b2JointDef___destroy___0 = i.asm.Q).apply(
                    null,
                    arguments,
                  );
                }),
                me = (i._emscripten_bind_b2Shape_GetType_0 = function () {
                  return (me = i._emscripten_bind_b2Shape_GetType_0 = i.asm.R).apply(
                    null,
                    arguments,
                  );
                }),
                fe = (i._emscripten_bind_b2Shape_GetChildCount_0 = function () {
                  return (fe = i._emscripten_bind_b2Shape_GetChildCount_0 = i.asm.S).apply(
                    null,
                    arguments,
                  );
                }),
                he = (i._emscripten_bind_b2Shape_TestPoint_2 = function () {
                  return (he = i._emscripten_bind_b2Shape_TestPoint_2 = i.asm.T).apply(
                    null,
                    arguments,
                  );
                }),
                ge = (i._emscripten_bind_b2Shape_RayCast_4 = function () {
                  return (ge = i._emscripten_bind_b2Shape_RayCast_4 = i.asm.U).apply(
                    null,
                    arguments,
                  );
                }),
                Ue = (i._emscripten_bind_b2Shape_ComputeAABB_3 = function () {
                  return (Ue = i._emscripten_bind_b2Shape_ComputeAABB_3 = i.asm.V).apply(
                    null,
                    arguments,
                  );
                }),
                we = (i._emscripten_bind_b2Shape_ComputeMass_2 = function () {
                  return (we = i._emscripten_bind_b2Shape_ComputeMass_2 = i.asm.W).apply(
                    null,
                    arguments,
                  );
                }),
                Je = (i._emscripten_bind_b2Shape_get_m_type_0 = function () {
                  return (Je = i._emscripten_bind_b2Shape_get_m_type_0 = i.asm.X).apply(
                    null,
                    arguments,
                  );
                }),
                De = (i._emscripten_bind_b2Shape_set_m_type_1 = function () {
                  return (De = i._emscripten_bind_b2Shape_set_m_type_1 = i.asm.Y).apply(
                    null,
                    arguments,
                  );
                }),
                ve = (i._emscripten_bind_b2Shape_get_m_radius_0 = function () {
                  return (ve = i._emscripten_bind_b2Shape_get_m_radius_0 = i.asm.Z).apply(
                    null,
                    arguments,
                  );
                }),
                Se = (i._emscripten_bind_b2Shape_set_m_radius_1 = function () {
                  return (Se = i._emscripten_bind_b2Shape_set_m_radius_1 = i.asm._).apply(
                    null,
                    arguments,
                  );
                }),
                Ae = (i._emscripten_bind_b2Shape___destroy___0 = function () {
                  return (Ae = i._emscripten_bind_b2Shape___destroy___0 = i.asm.$).apply(
                    null,
                    arguments,
                  );
                }),
                xe = (i._emscripten_bind_b2ContactFilter___destroy___0 = function () {
                  return (xe = i._emscripten_bind_b2ContactFilter___destroy___0 = i.asm.aa).apply(
                    null,
                    arguments,
                  );
                }),
                Be = (i._emscripten_bind_JSDestructionListener_JSDestructionListener_0 =
                  function () {
                    return (Be = i._emscripten_bind_JSDestructionListener_JSDestructionListener_0 =
                      i.asm.ba).apply(null, arguments);
                  }),
                je = (i._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1 = function () {
                  return (je = i._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1 =
                    i.asm.ca).apply(null, arguments);
                }),
                Ge = (i._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1 = function () {
                  return (Ge = i._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1 =
                    i.asm.da).apply(null, arguments);
                }),
                Ce = (i._emscripten_bind_JSDestructionListener___destroy___0 = function () {
                  return (Ce = i._emscripten_bind_JSDestructionListener___destroy___0 =
                    i.asm.ea).apply(null, arguments);
                }),
                Pe = (i._emscripten_bind_b2ContactImpulse_get_count_0 = function () {
                  return (Pe = i._emscripten_bind_b2ContactImpulse_get_count_0 = i.asm.fa).apply(
                    null,
                    arguments,
                  );
                }),
                Re = (i._emscripten_bind_b2ContactImpulse_set_count_1 = function () {
                  return (Re = i._emscripten_bind_b2ContactImpulse_set_count_1 = i.asm.ga).apply(
                    null,
                    arguments,
                  );
                }),
                Me = (i._emscripten_bind_b2ContactImpulse___destroy___0 = function () {
                  return (Me = i._emscripten_bind_b2ContactImpulse___destroy___0 = i.asm.ha).apply(
                    null,
                    arguments,
                  );
                }),
                Te = (i._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0 = function () {
                  return (Te = i._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0 =
                    i.asm.ia).apply(null, arguments);
                }),
                Fe = (i._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0 = function () {
                  return (Fe = i._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0 =
                    i.asm.ja).apply(null, arguments);
                }),
                Le = (i._emscripten_bind_b2DistanceJoint_SetLength_1 = function () {
                  return (Le = i._emscripten_bind_b2DistanceJoint_SetLength_1 = i.asm.ka).apply(
                    null,
                    arguments,
                  );
                }),
                Ie = (i._emscripten_bind_b2DistanceJoint_GetLength_0 = function () {
                  return (Ie = i._emscripten_bind_b2DistanceJoint_GetLength_0 = i.asm.la).apply(
                    null,
                    arguments,
                  );
                }),
                We = (i._emscripten_bind_b2DistanceJoint_SetFrequency_1 = function () {
                  return (We = i._emscripten_bind_b2DistanceJoint_SetFrequency_1 = i.asm.ma).apply(
                    null,
                    arguments,
                  );
                }),
                Oe = (i._emscripten_bind_b2DistanceJoint_GetFrequency_0 = function () {
                  return (Oe = i._emscripten_bind_b2DistanceJoint_GetFrequency_0 = i.asm.na).apply(
                    null,
                    arguments,
                  );
                }),
                Ve = (i._emscripten_bind_b2DistanceJoint_SetDampingRatio_1 = function () {
                  return (Ve = i._emscripten_bind_b2DistanceJoint_SetDampingRatio_1 =
                    i.asm.oa).apply(null, arguments);
                }),
                Ee = (i._emscripten_bind_b2DistanceJoint_GetDampingRatio_0 = function () {
                  return (Ee = i._emscripten_bind_b2DistanceJoint_GetDampingRatio_0 =
                    i.asm.pa).apply(null, arguments);
                }),
                qe = (i._emscripten_bind_b2DistanceJoint_GetType_0 = function () {
                  return (qe = i._emscripten_bind_b2DistanceJoint_GetType_0 = i.asm.qa).apply(
                    null,
                    arguments,
                  );
                }),
                ke = (i._emscripten_bind_b2DistanceJoint_GetBodyA_0 = function () {
                  return (ke = i._emscripten_bind_b2DistanceJoint_GetBodyA_0 = i.asm.ra).apply(
                    null,
                    arguments,
                  );
                }),
                Ne = (i._emscripten_bind_b2DistanceJoint_GetBodyB_0 = function () {
                  return (Ne = i._emscripten_bind_b2DistanceJoint_GetBodyB_0 = i.asm.sa).apply(
                    null,
                    arguments,
                  );
                }),
                Xe = (i._emscripten_bind_b2DistanceJoint_GetAnchorA_0 = function () {
                  return (Xe = i._emscripten_bind_b2DistanceJoint_GetAnchorA_0 = i.asm.ta).apply(
                    null,
                    arguments,
                  );
                }),
                He = (i._emscripten_bind_b2DistanceJoint_GetAnchorB_0 = function () {
                  return (He = i._emscripten_bind_b2DistanceJoint_GetAnchorB_0 = i.asm.ua).apply(
                    null,
                    arguments,
                  );
                }),
                ze = (i._emscripten_bind_b2DistanceJoint_GetReactionForce_1 = function () {
                  return (ze = i._emscripten_bind_b2DistanceJoint_GetReactionForce_1 =
                    i.asm.va).apply(null, arguments);
                }),
                Qe = (i._emscripten_bind_b2DistanceJoint_GetReactionTorque_1 = function () {
                  return (Qe = i._emscripten_bind_b2DistanceJoint_GetReactionTorque_1 =
                    i.asm.wa).apply(null, arguments);
                }),
                Ze = (i._emscripten_bind_b2DistanceJoint_GetNext_0 = function () {
                  return (Ze = i._emscripten_bind_b2DistanceJoint_GetNext_0 = i.asm.xa).apply(
                    null,
                    arguments,
                  );
                }),
                Ye = (i._emscripten_bind_b2DistanceJoint_GetUserData_0 = function () {
                  return (Ye = i._emscripten_bind_b2DistanceJoint_GetUserData_0 = i.asm.ya).apply(
                    null,
                    arguments,
                  );
                }),
                Ke = (i._emscripten_bind_b2DistanceJoint_SetUserData_1 = function () {
                  return (Ke = i._emscripten_bind_b2DistanceJoint_SetUserData_1 = i.asm.za).apply(
                    null,
                    arguments,
                  );
                }),
                $e = (i._emscripten_bind_b2DistanceJoint_IsActive_0 = function () {
                  return ($e = i._emscripten_bind_b2DistanceJoint_IsActive_0 = i.asm.Aa).apply(
                    null,
                    arguments,
                  );
                }),
                tn = (i._emscripten_bind_b2DistanceJoint_GetCollideConnected_0 = function () {
                  return (tn = i._emscripten_bind_b2DistanceJoint_GetCollideConnected_0 =
                    i.asm.Ba).apply(null, arguments);
                }),
                en = (i._emscripten_bind_b2DistanceJoint___destroy___0 = function () {
                  return (en = i._emscripten_bind_b2DistanceJoint___destroy___0 = i.asm.Ca).apply(
                    null,
                    arguments,
                  );
                }),
                nn = (i._emscripten_bind_b2Mat33_b2Mat33_0 = function () {
                  return (nn = i._emscripten_bind_b2Mat33_b2Mat33_0 = i.asm.Da).apply(
                    null,
                    arguments,
                  );
                }),
                on = (i._emscripten_bind_b2Mat33_b2Mat33_3 = function () {
                  return (on = i._emscripten_bind_b2Mat33_b2Mat33_3 = i.asm.Ea).apply(
                    null,
                    arguments,
                  );
                }),
                _n = (i._emscripten_bind_b2Mat33_SetZero_0 = function () {
                  return (_n = i._emscripten_bind_b2Mat33_SetZero_0 = i.asm.Fa).apply(
                    null,
                    arguments,
                  );
                }),
                rn = (i._emscripten_bind_b2Mat33_Solve33_1 = function () {
                  return (rn = i._emscripten_bind_b2Mat33_Solve33_1 = i.asm.Ga).apply(
                    null,
                    arguments,
                  );
                }),
                pn = (i._emscripten_bind_b2Mat33_Solve22_1 = function () {
                  return (pn = i._emscripten_bind_b2Mat33_Solve22_1 = i.asm.Ha).apply(
                    null,
                    arguments,
                  );
                }),
                sn = (i._emscripten_bind_b2Mat33_GetInverse22_1 = function () {
                  return (sn = i._emscripten_bind_b2Mat33_GetInverse22_1 = i.asm.Ia).apply(
                    null,
                    arguments,
                  );
                }),
                cn = (i._emscripten_bind_b2Mat33_GetSymInverse33_1 = function () {
                  return (cn = i._emscripten_bind_b2Mat33_GetSymInverse33_1 = i.asm.Ja).apply(
                    null,
                    arguments,
                  );
                }),
                un = (i._emscripten_bind_b2Mat33_get_ex_0 = function () {
                  return (un = i._emscripten_bind_b2Mat33_get_ex_0 = i.asm.Ka).apply(
                    null,
                    arguments,
                  );
                }),
                an = (i._emscripten_bind_b2Mat33_set_ex_1 = function () {
                  return (an = i._emscripten_bind_b2Mat33_set_ex_1 = i.asm.La).apply(
                    null,
                    arguments,
                  );
                }),
                ln = (i._emscripten_bind_b2Mat33_get_ey_0 = function () {
                  return (ln = i._emscripten_bind_b2Mat33_get_ey_0 = i.asm.Ma).apply(
                    null,
                    arguments,
                  );
                }),
                yn = (i._emscripten_bind_b2Mat33_set_ey_1 = function () {
                  return (yn = i._emscripten_bind_b2Mat33_set_ey_1 = i.asm.Na).apply(
                    null,
                    arguments,
                  );
                }),
                bn = (i._emscripten_bind_b2Mat33_get_ez_0 = function () {
                  return (bn = i._emscripten_bind_b2Mat33_get_ez_0 = i.asm.Oa).apply(
                    null,
                    arguments,
                  );
                }),
                dn = (i._emscripten_bind_b2Mat33_set_ez_1 = function () {
                  return (dn = i._emscripten_bind_b2Mat33_set_ez_1 = i.asm.Pa).apply(
                    null,
                    arguments,
                  );
                }),
                mn = (i._emscripten_bind_b2Mat33___destroy___0 = function () {
                  return (mn = i._emscripten_bind_b2Mat33___destroy___0 = i.asm.Qa).apply(
                    null,
                    arguments,
                  );
                }),
                fn = (i._emscripten_bind_b2Fixture_GetType_0 = function () {
                  return (fn = i._emscripten_bind_b2Fixture_GetType_0 = i.asm.Ra).apply(
                    null,
                    arguments,
                  );
                }),
                hn = (i._emscripten_bind_b2Fixture_GetShape_0 = function () {
                  return (hn = i._emscripten_bind_b2Fixture_GetShape_0 = i.asm.Sa).apply(
                    null,
                    arguments,
                  );
                }),
                gn = (i._emscripten_bind_b2Fixture_SetSensor_1 = function () {
                  return (gn = i._emscripten_bind_b2Fixture_SetSensor_1 = i.asm.Ta).apply(
                    null,
                    arguments,
                  );
                }),
                Un = (i._emscripten_bind_b2Fixture_IsSensor_0 = function () {
                  return (Un = i._emscripten_bind_b2Fixture_IsSensor_0 = i.asm.Ua).apply(
                    null,
                    arguments,
                  );
                }),
                wn = (i._emscripten_bind_b2Fixture_SetFilterData_1 = function () {
                  return (wn = i._emscripten_bind_b2Fixture_SetFilterData_1 = i.asm.Va).apply(
                    null,
                    arguments,
                  );
                }),
                Jn = (i._emscripten_bind_b2Fixture_GetFilterData_0 = function () {
                  return (Jn = i._emscripten_bind_b2Fixture_GetFilterData_0 = i.asm.Wa).apply(
                    null,
                    arguments,
                  );
                }),
                Dn = (i._emscripten_bind_b2Fixture_Refilter_0 = function () {
                  return (Dn = i._emscripten_bind_b2Fixture_Refilter_0 = i.asm.Xa).apply(
                    null,
                    arguments,
                  );
                }),
                vn = (i._emscripten_bind_b2Fixture_GetBody_0 = function () {
                  return (vn = i._emscripten_bind_b2Fixture_GetBody_0 = i.asm.Ya).apply(
                    null,
                    arguments,
                  );
                }),
                Sn = (i._emscripten_bind_b2Fixture_GetNext_0 = function () {
                  return (Sn = i._emscripten_bind_b2Fixture_GetNext_0 = i.asm.Za).apply(
                    null,
                    arguments,
                  );
                }),
                An = (i._emscripten_bind_b2Fixture_GetUserData_0 = function () {
                  return (An = i._emscripten_bind_b2Fixture_GetUserData_0 = i.asm._a).apply(
                    null,
                    arguments,
                  );
                }),
                xn = (i._emscripten_bind_b2Fixture_SetUserData_1 = function () {
                  return (xn = i._emscripten_bind_b2Fixture_SetUserData_1 = i.asm.$a).apply(
                    null,
                    arguments,
                  );
                }),
                Bn = (i._emscripten_bind_b2Fixture_TestPoint_1 = function () {
                  return (Bn = i._emscripten_bind_b2Fixture_TestPoint_1 = i.asm.ab).apply(
                    null,
                    arguments,
                  );
                }),
                jn = (i._emscripten_bind_b2Fixture_RayCast_3 = function () {
                  return (jn = i._emscripten_bind_b2Fixture_RayCast_3 = i.asm.bb).apply(
                    null,
                    arguments,
                  );
                }),
                Gn = (i._emscripten_bind_b2Fixture_GetMassData_1 = function () {
                  return (Gn = i._emscripten_bind_b2Fixture_GetMassData_1 = i.asm.cb).apply(
                    null,
                    arguments,
                  );
                }),
                Cn = (i._emscripten_bind_b2Fixture_SetDensity_1 = function () {
                  return (Cn = i._emscripten_bind_b2Fixture_SetDensity_1 = i.asm.db).apply(
                    null,
                    arguments,
                  );
                }),
                Pn = (i._emscripten_bind_b2Fixture_GetDensity_0 = function () {
                  return (Pn = i._emscripten_bind_b2Fixture_GetDensity_0 = i.asm.eb).apply(
                    null,
                    arguments,
                  );
                }),
                Rn = (i._emscripten_bind_b2Fixture_GetFriction_0 = function () {
                  return (Rn = i._emscripten_bind_b2Fixture_GetFriction_0 = i.asm.fb).apply(
                    null,
                    arguments,
                  );
                }),
                Mn = (i._emscripten_bind_b2Fixture_SetFriction_1 = function () {
                  return (Mn = i._emscripten_bind_b2Fixture_SetFriction_1 = i.asm.gb).apply(
                    null,
                    arguments,
                  );
                }),
                Tn = (i._emscripten_bind_b2Fixture_GetRestitution_0 = function () {
                  return (Tn = i._emscripten_bind_b2Fixture_GetRestitution_0 = i.asm.hb).apply(
                    null,
                    arguments,
                  );
                }),
                Fn = (i._emscripten_bind_b2Fixture_SetRestitution_1 = function () {
                  return (Fn = i._emscripten_bind_b2Fixture_SetRestitution_1 = i.asm.ib).apply(
                    null,
                    arguments,
                  );
                }),
                Ln = (i._emscripten_bind_b2Fixture_GetAABB_1 = function () {
                  return (Ln = i._emscripten_bind_b2Fixture_GetAABB_1 = i.asm.jb).apply(
                    null,
                    arguments,
                  );
                }),
                In = (i._emscripten_bind_b2Fixture_Dump_1 = function () {
                  return (In = i._emscripten_bind_b2Fixture_Dump_1 = i.asm.kb).apply(
                    null,
                    arguments,
                  );
                }),
                Wn = (i._emscripten_bind_b2Fixture___destroy___0 = function () {
                  return (Wn = i._emscripten_bind_b2Fixture___destroy___0 = i.asm.lb).apply(
                    null,
                    arguments,
                  );
                }),
                On = (i._emscripten_bind_b2Filter_b2Filter_0 = function () {
                  return (On = i._emscripten_bind_b2Filter_b2Filter_0 = i.asm.mb).apply(
                    null,
                    arguments,
                  );
                }),
                Vn = (i._emscripten_bind_b2Filter_get_categoryBits_0 = function () {
                  return (Vn = i._emscripten_bind_b2Filter_get_categoryBits_0 = i.asm.nb).apply(
                    null,
                    arguments,
                  );
                }),
                En = (i._emscripten_bind_b2Filter_set_categoryBits_1 = function () {
                  return (En = i._emscripten_bind_b2Filter_set_categoryBits_1 = i.asm.ob).apply(
                    null,
                    arguments,
                  );
                }),
                qn = (i._emscripten_bind_b2Filter_get_maskBits_0 = function () {
                  return (qn = i._emscripten_bind_b2Filter_get_maskBits_0 = i.asm.pb).apply(
                    null,
                    arguments,
                  );
                }),
                kn = (i._emscripten_bind_b2Filter_set_maskBits_1 = function () {
                  return (kn = i._emscripten_bind_b2Filter_set_maskBits_1 = i.asm.qb).apply(
                    null,
                    arguments,
                  );
                }),
                Nn = (i._emscripten_bind_b2Filter_get_groupIndex_0 = function () {
                  return (Nn = i._emscripten_bind_b2Filter_get_groupIndex_0 = i.asm.rb).apply(
                    null,
                    arguments,
                  );
                }),
                Xn = (i._emscripten_bind_b2Filter_set_groupIndex_1 = function () {
                  return (Xn = i._emscripten_bind_b2Filter_set_groupIndex_1 = i.asm.sb).apply(
                    null,
                    arguments,
                  );
                }),
                Hn = (i._emscripten_bind_b2Filter___destroy___0 = function () {
                  return (Hn = i._emscripten_bind_b2Filter___destroy___0 = i.asm.tb).apply(
                    null,
                    arguments,
                  );
                }),
                zn = (i._emscripten_bind_JSQueryCallback_JSQueryCallback_0 = function () {
                  return (zn = i._emscripten_bind_JSQueryCallback_JSQueryCallback_0 =
                    i.asm.ub).apply(null, arguments);
                }),
                Qn = (i._emscripten_bind_JSQueryCallback_ReportFixture_1 = function () {
                  return (Qn = i._emscripten_bind_JSQueryCallback_ReportFixture_1 = i.asm.vb).apply(
                    null,
                    arguments,
                  );
                }),
                Zn = (i._emscripten_bind_JSQueryCallback___destroy___0 = function () {
                  return (Zn = i._emscripten_bind_JSQueryCallback___destroy___0 = i.asm.wb).apply(
                    null,
                    arguments,
                  );
                }),
                Yn = (i._emscripten_bind_b2MouseJoint_SetTarget_1 = function () {
                  return (Yn = i._emscripten_bind_b2MouseJoint_SetTarget_1 = i.asm.xb).apply(
                    null,
                    arguments,
                  );
                }),
                Kn = (i._emscripten_bind_b2MouseJoint_GetTarget_0 = function () {
                  return (Kn = i._emscripten_bind_b2MouseJoint_GetTarget_0 = i.asm.yb).apply(
                    null,
                    arguments,
                  );
                }),
                $n = (i._emscripten_bind_b2MouseJoint_SetMaxForce_1 = function () {
                  return ($n = i._emscripten_bind_b2MouseJoint_SetMaxForce_1 = i.asm.zb).apply(
                    null,
                    arguments,
                  );
                }),
                to = (i._emscripten_bind_b2MouseJoint_GetMaxForce_0 = function () {
                  return (to = i._emscripten_bind_b2MouseJoint_GetMaxForce_0 = i.asm.Ab).apply(
                    null,
                    arguments,
                  );
                }),
                eo = (i._emscripten_bind_b2MouseJoint_SetFrequency_1 = function () {
                  return (eo = i._emscripten_bind_b2MouseJoint_SetFrequency_1 = i.asm.Bb).apply(
                    null,
                    arguments,
                  );
                }),
                no = (i._emscripten_bind_b2MouseJoint_GetFrequency_0 = function () {
                  return (no = i._emscripten_bind_b2MouseJoint_GetFrequency_0 = i.asm.Cb).apply(
                    null,
                    arguments,
                  );
                }),
                oo = (i._emscripten_bind_b2MouseJoint_SetDampingRatio_1 = function () {
                  return (oo = i._emscripten_bind_b2MouseJoint_SetDampingRatio_1 = i.asm.Db).apply(
                    null,
                    arguments,
                  );
                }),
                io = (i._emscripten_bind_b2MouseJoint_GetDampingRatio_0 = function () {
                  return (io = i._emscripten_bind_b2MouseJoint_GetDampingRatio_0 = i.asm.Eb).apply(
                    null,
                    arguments,
                  );
                }),
                _o = (i._emscripten_bind_b2MouseJoint_GetType_0 = function () {
                  return (_o = i._emscripten_bind_b2MouseJoint_GetType_0 = i.asm.Fb).apply(
                    null,
                    arguments,
                  );
                }),
                ro = (i._emscripten_bind_b2MouseJoint_GetBodyA_0 = function () {
                  return (ro = i._emscripten_bind_b2MouseJoint_GetBodyA_0 = i.asm.Gb).apply(
                    null,
                    arguments,
                  );
                }),
                po = (i._emscripten_bind_b2MouseJoint_GetBodyB_0 = function () {
                  return (po = i._emscripten_bind_b2MouseJoint_GetBodyB_0 = i.asm.Hb).apply(
                    null,
                    arguments,
                  );
                }),
                so = (i._emscripten_bind_b2MouseJoint_GetAnchorA_0 = function () {
                  return (so = i._emscripten_bind_b2MouseJoint_GetAnchorA_0 = i.asm.Ib).apply(
                    null,
                    arguments,
                  );
                }),
                co = (i._emscripten_bind_b2MouseJoint_GetAnchorB_0 = function () {
                  return (co = i._emscripten_bind_b2MouseJoint_GetAnchorB_0 = i.asm.Jb).apply(
                    null,
                    arguments,
                  );
                }),
                uo = (i._emscripten_bind_b2MouseJoint_GetReactionForce_1 = function () {
                  return (uo = i._emscripten_bind_b2MouseJoint_GetReactionForce_1 = i.asm.Kb).apply(
                    null,
                    arguments,
                  );
                }),
                ao = (i._emscripten_bind_b2MouseJoint_GetReactionTorque_1 = function () {
                  return (ao = i._emscripten_bind_b2MouseJoint_GetReactionTorque_1 =
                    i.asm.Lb).apply(null, arguments);
                }),
                lo = (i._emscripten_bind_b2MouseJoint_GetNext_0 = function () {
                  return (lo = i._emscripten_bind_b2MouseJoint_GetNext_0 = i.asm.Mb).apply(
                    null,
                    arguments,
                  );
                }),
                yo = (i._emscripten_bind_b2MouseJoint_GetUserData_0 = function () {
                  return (yo = i._emscripten_bind_b2MouseJoint_GetUserData_0 = i.asm.Nb).apply(
                    null,
                    arguments,
                  );
                }),
                bo = (i._emscripten_bind_b2MouseJoint_SetUserData_1 = function () {
                  return (bo = i._emscripten_bind_b2MouseJoint_SetUserData_1 = i.asm.Ob).apply(
                    null,
                    arguments,
                  );
                }),
                mo = (i._emscripten_bind_b2MouseJoint_IsActive_0 = function () {
                  return (mo = i._emscripten_bind_b2MouseJoint_IsActive_0 = i.asm.Pb).apply(
                    null,
                    arguments,
                  );
                }),
                fo = (i._emscripten_bind_b2MouseJoint_GetCollideConnected_0 = function () {
                  return (fo = i._emscripten_bind_b2MouseJoint_GetCollideConnected_0 =
                    i.asm.Qb).apply(null, arguments);
                }),
                ho = (i._emscripten_bind_b2MouseJoint___destroy___0 = function () {
                  return (ho = i._emscripten_bind_b2MouseJoint___destroy___0 = i.asm.Rb).apply(
                    null,
                    arguments,
                  );
                }),
                go = (i._emscripten_bind_b2Rot_b2Rot_0 = function () {
                  return (go = i._emscripten_bind_b2Rot_b2Rot_0 = i.asm.Sb).apply(null, arguments);
                }),
                Uo = (i._emscripten_bind_b2Rot_b2Rot_1 = function () {
                  return (Uo = i._emscripten_bind_b2Rot_b2Rot_1 = i.asm.Tb).apply(null, arguments);
                }),
                wo = (i._emscripten_bind_b2Rot_Set_1 = function () {
                  return (wo = i._emscripten_bind_b2Rot_Set_1 = i.asm.Ub).apply(null, arguments);
                }),
                Jo = (i._emscripten_bind_b2Rot_SetIdentity_0 = function () {
                  return (Jo = i._emscripten_bind_b2Rot_SetIdentity_0 = i.asm.Vb).apply(
                    null,
                    arguments,
                  );
                }),
                Do = (i._emscripten_bind_b2Rot_GetAngle_0 = function () {
                  return (Do = i._emscripten_bind_b2Rot_GetAngle_0 = i.asm.Wb).apply(
                    null,
                    arguments,
                  );
                }),
                vo = (i._emscripten_bind_b2Rot_GetXAxis_0 = function () {
                  return (vo = i._emscripten_bind_b2Rot_GetXAxis_0 = i.asm.Xb).apply(
                    null,
                    arguments,
                  );
                }),
                So = (i._emscripten_bind_b2Rot_GetYAxis_0 = function () {
                  return (So = i._emscripten_bind_b2Rot_GetYAxis_0 = i.asm.Yb).apply(
                    null,
                    arguments,
                  );
                }),
                Ao = (i._emscripten_bind_b2Rot_get_s_0 = function () {
                  return (Ao = i._emscripten_bind_b2Rot_get_s_0 = i.asm.Zb).apply(null, arguments);
                }),
                xo = (i._emscripten_bind_b2Rot_set_s_1 = function () {
                  return (xo = i._emscripten_bind_b2Rot_set_s_1 = i.asm._b).apply(null, arguments);
                }),
                Bo = (i._emscripten_bind_b2Rot_get_c_0 = function () {
                  return (Bo = i._emscripten_bind_b2Rot_get_c_0 = i.asm.$b).apply(null, arguments);
                }),
                jo = (i._emscripten_bind_b2Rot_set_c_1 = function () {
                  return (jo = i._emscripten_bind_b2Rot_set_c_1 = i.asm.ac).apply(null, arguments);
                }),
                Go = (i._emscripten_bind_b2Rot___destroy___0 = function () {
                  return (Go = i._emscripten_bind_b2Rot___destroy___0 = i.asm.bc).apply(
                    null,
                    arguments,
                  );
                }),
                Co = (i._emscripten_bind_b2MotorJoint_SetLinearOffset_1 = function () {
                  return (Co = i._emscripten_bind_b2MotorJoint_SetLinearOffset_1 = i.asm.cc).apply(
                    null,
                    arguments,
                  );
                }),
                Po = (i._emscripten_bind_b2MotorJoint_GetLinearOffset_0 = function () {
                  return (Po = i._emscripten_bind_b2MotorJoint_GetLinearOffset_0 = i.asm.dc).apply(
                    null,
                    arguments,
                  );
                }),
                Ro = (i._emscripten_bind_b2MotorJoint_SetAngularOffset_1 = function () {
                  return (Ro = i._emscripten_bind_b2MotorJoint_SetAngularOffset_1 = i.asm.ec).apply(
                    null,
                    arguments,
                  );
                }),
                Mo = (i._emscripten_bind_b2MotorJoint_GetAngularOffset_0 = function () {
                  return (Mo = i._emscripten_bind_b2MotorJoint_GetAngularOffset_0 = i.asm.fc).apply(
                    null,
                    arguments,
                  );
                }),
                To = (i._emscripten_bind_b2MotorJoint_SetMaxForce_1 = function () {
                  return (To = i._emscripten_bind_b2MotorJoint_SetMaxForce_1 = i.asm.gc).apply(
                    null,
                    arguments,
                  );
                }),
                Fo = (i._emscripten_bind_b2MotorJoint_GetMaxForce_0 = function () {
                  return (Fo = i._emscripten_bind_b2MotorJoint_GetMaxForce_0 = i.asm.hc).apply(
                    null,
                    arguments,
                  );
                }),
                Lo = (i._emscripten_bind_b2MotorJoint_SetMaxTorque_1 = function () {
                  return (Lo = i._emscripten_bind_b2MotorJoint_SetMaxTorque_1 = i.asm.ic).apply(
                    null,
                    arguments,
                  );
                }),
                Io = (i._emscripten_bind_b2MotorJoint_GetMaxTorque_0 = function () {
                  return (Io = i._emscripten_bind_b2MotorJoint_GetMaxTorque_0 = i.asm.jc).apply(
                    null,
                    arguments,
                  );
                }),
                Wo = (i._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1 = function () {
                  return (Wo = i._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1 =
                    i.asm.kc).apply(null, arguments);
                }),
                Oo = (i._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0 = function () {
                  return (Oo = i._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0 =
                    i.asm.lc).apply(null, arguments);
                }),
                Vo = (i._emscripten_bind_b2MotorJoint_GetType_0 = function () {
                  return (Vo = i._emscripten_bind_b2MotorJoint_GetType_0 = i.asm.mc).apply(
                    null,
                    arguments,
                  );
                }),
                Eo = (i._emscripten_bind_b2MotorJoint_GetBodyA_0 = function () {
                  return (Eo = i._emscripten_bind_b2MotorJoint_GetBodyA_0 = i.asm.nc).apply(
                    null,
                    arguments,
                  );
                }),
                qo = (i._emscripten_bind_b2MotorJoint_GetBodyB_0 = function () {
                  return (qo = i._emscripten_bind_b2MotorJoint_GetBodyB_0 = i.asm.oc).apply(
                    null,
                    arguments,
                  );
                }),
                ko = (i._emscripten_bind_b2MotorJoint_GetAnchorA_0 = function () {
                  return (ko = i._emscripten_bind_b2MotorJoint_GetAnchorA_0 = i.asm.pc).apply(
                    null,
                    arguments,
                  );
                }),
                No = (i._emscripten_bind_b2MotorJoint_GetAnchorB_0 = function () {
                  return (No = i._emscripten_bind_b2MotorJoint_GetAnchorB_0 = i.asm.qc).apply(
                    null,
                    arguments,
                  );
                }),
                Xo = (i._emscripten_bind_b2MotorJoint_GetReactionForce_1 = function () {
                  return (Xo = i._emscripten_bind_b2MotorJoint_GetReactionForce_1 = i.asm.rc).apply(
                    null,
                    arguments,
                  );
                }),
                Ho = (i._emscripten_bind_b2MotorJoint_GetReactionTorque_1 = function () {
                  return (Ho = i._emscripten_bind_b2MotorJoint_GetReactionTorque_1 =
                    i.asm.sc).apply(null, arguments);
                }),
                zo = (i._emscripten_bind_b2MotorJoint_GetNext_0 = function () {
                  return (zo = i._emscripten_bind_b2MotorJoint_GetNext_0 = i.asm.tc).apply(
                    null,
                    arguments,
                  );
                }),
                Qo = (i._emscripten_bind_b2MotorJoint_GetUserData_0 = function () {
                  return (Qo = i._emscripten_bind_b2MotorJoint_GetUserData_0 = i.asm.uc).apply(
                    null,
                    arguments,
                  );
                }),
                Zo = (i._emscripten_bind_b2MotorJoint_SetUserData_1 = function () {
                  return (Zo = i._emscripten_bind_b2MotorJoint_SetUserData_1 = i.asm.vc).apply(
                    null,
                    arguments,
                  );
                }),
                Yo = (i._emscripten_bind_b2MotorJoint_IsActive_0 = function () {
                  return (Yo = i._emscripten_bind_b2MotorJoint_IsActive_0 = i.asm.wc).apply(
                    null,
                    arguments,
                  );
                }),
                Ko = (i._emscripten_bind_b2MotorJoint_GetCollideConnected_0 = function () {
                  return (Ko = i._emscripten_bind_b2MotorJoint_GetCollideConnected_0 =
                    i.asm.xc).apply(null, arguments);
                }),
                $o = (i._emscripten_bind_b2MotorJoint___destroy___0 = function () {
                  return ($o = i._emscripten_bind_b2MotorJoint___destroy___0 = i.asm.yc).apply(
                    null,
                    arguments,
                  );
                }),
                ti = (i._emscripten_bind_b2Profile_get_step_0 = function () {
                  return (ti = i._emscripten_bind_b2Profile_get_step_0 = i.asm.zc).apply(
                    null,
                    arguments,
                  );
                }),
                ei = (i._emscripten_bind_b2Profile_set_step_1 = function () {
                  return (ei = i._emscripten_bind_b2Profile_set_step_1 = i.asm.Ac).apply(
                    null,
                    arguments,
                  );
                }),
                ni = (i._emscripten_bind_b2Profile_get_collide_0 = function () {
                  return (ni = i._emscripten_bind_b2Profile_get_collide_0 = i.asm.Bc).apply(
                    null,
                    arguments,
                  );
                }),
                oi = (i._emscripten_bind_b2Profile_set_collide_1 = function () {
                  return (oi = i._emscripten_bind_b2Profile_set_collide_1 = i.asm.Cc).apply(
                    null,
                    arguments,
                  );
                }),
                ii = (i._emscripten_bind_b2Profile_get_solve_0 = function () {
                  return (ii = i._emscripten_bind_b2Profile_get_solve_0 = i.asm.Dc).apply(
                    null,
                    arguments,
                  );
                }),
                _i = (i._emscripten_bind_b2Profile_set_solve_1 = function () {
                  return (_i = i._emscripten_bind_b2Profile_set_solve_1 = i.asm.Ec).apply(
                    null,
                    arguments,
                  );
                }),
                ri = (i._emscripten_bind_b2Profile_get_solveInit_0 = function () {
                  return (ri = i._emscripten_bind_b2Profile_get_solveInit_0 = i.asm.Fc).apply(
                    null,
                    arguments,
                  );
                }),
                pi = (i._emscripten_bind_b2Profile_set_solveInit_1 = function () {
                  return (pi = i._emscripten_bind_b2Profile_set_solveInit_1 = i.asm.Gc).apply(
                    null,
                    arguments,
                  );
                }),
                si = (i._emscripten_bind_b2Profile_get_solveVelocity_0 = function () {
                  return (si = i._emscripten_bind_b2Profile_get_solveVelocity_0 = i.asm.Hc).apply(
                    null,
                    arguments,
                  );
                }),
                ci = (i._emscripten_bind_b2Profile_set_solveVelocity_1 = function () {
                  return (ci = i._emscripten_bind_b2Profile_set_solveVelocity_1 = i.asm.Ic).apply(
                    null,
                    arguments,
                  );
                }),
                ui = (i._emscripten_bind_b2Profile_get_solvePosition_0 = function () {
                  return (ui = i._emscripten_bind_b2Profile_get_solvePosition_0 = i.asm.Jc).apply(
                    null,
                    arguments,
                  );
                }),
                ai = (i._emscripten_bind_b2Profile_set_solvePosition_1 = function () {
                  return (ai = i._emscripten_bind_b2Profile_set_solvePosition_1 = i.asm.Kc).apply(
                    null,
                    arguments,
                  );
                }),
                li = (i._emscripten_bind_b2Profile_get_broadphase_0 = function () {
                  return (li = i._emscripten_bind_b2Profile_get_broadphase_0 = i.asm.Lc).apply(
                    null,
                    arguments,
                  );
                }),
                yi = (i._emscripten_bind_b2Profile_set_broadphase_1 = function () {
                  return (yi = i._emscripten_bind_b2Profile_set_broadphase_1 = i.asm.Mc).apply(
                    null,
                    arguments,
                  );
                }),
                bi = (i._emscripten_bind_b2Profile_get_solveTOI_0 = function () {
                  return (bi = i._emscripten_bind_b2Profile_get_solveTOI_0 = i.asm.Nc).apply(
                    null,
                    arguments,
                  );
                }),
                di = (i._emscripten_bind_b2Profile_set_solveTOI_1 = function () {
                  return (di = i._emscripten_bind_b2Profile_set_solveTOI_1 = i.asm.Oc).apply(
                    null,
                    arguments,
                  );
                }),
                mi = (i._emscripten_bind_b2Profile___destroy___0 = function () {
                  return (mi = i._emscripten_bind_b2Profile___destroy___0 = i.asm.Pc).apply(
                    null,
                    arguments,
                  );
                }),
                fi = (i._emscripten_bind_VoidPtr___destroy___0 = function () {
                  return (fi = i._emscripten_bind_VoidPtr___destroy___0 = i.asm.Qc).apply(
                    null,
                    arguments,
                  );
                }),
                hi = (i._emscripten_bind_b2BodyDef_b2BodyDef_0 = function () {
                  return (hi = i._emscripten_bind_b2BodyDef_b2BodyDef_0 = i.asm.Rc).apply(
                    null,
                    arguments,
                  );
                }),
                gi = (i._emscripten_bind_b2BodyDef_get_type_0 = function () {
                  return (gi = i._emscripten_bind_b2BodyDef_get_type_0 = i.asm.Sc).apply(
                    null,
                    arguments,
                  );
                }),
                Ui = (i._emscripten_bind_b2BodyDef_set_type_1 = function () {
                  return (Ui = i._emscripten_bind_b2BodyDef_set_type_1 = i.asm.Tc).apply(
                    null,
                    arguments,
                  );
                }),
                wi = (i._emscripten_bind_b2BodyDef_get_position_0 = function () {
                  return (wi = i._emscripten_bind_b2BodyDef_get_position_0 = i.asm.Uc).apply(
                    null,
                    arguments,
                  );
                }),
                Ji = (i._emscripten_bind_b2BodyDef_set_position_1 = function () {
                  return (Ji = i._emscripten_bind_b2BodyDef_set_position_1 = i.asm.Vc).apply(
                    null,
                    arguments,
                  );
                }),
                Di = (i._emscripten_bind_b2BodyDef_get_angle_0 = function () {
                  return (Di = i._emscripten_bind_b2BodyDef_get_angle_0 = i.asm.Wc).apply(
                    null,
                    arguments,
                  );
                }),
                vi = (i._emscripten_bind_b2BodyDef_set_angle_1 = function () {
                  return (vi = i._emscripten_bind_b2BodyDef_set_angle_1 = i.asm.Xc).apply(
                    null,
                    arguments,
                  );
                }),
                Si = (i._emscripten_bind_b2BodyDef_get_linearVelocity_0 = function () {
                  return (Si = i._emscripten_bind_b2BodyDef_get_linearVelocity_0 = i.asm.Yc).apply(
                    null,
                    arguments,
                  );
                }),
                Ai = (i._emscripten_bind_b2BodyDef_set_linearVelocity_1 = function () {
                  return (Ai = i._emscripten_bind_b2BodyDef_set_linearVelocity_1 = i.asm.Zc).apply(
                    null,
                    arguments,
                  );
                }),
                xi = (i._emscripten_bind_b2BodyDef_get_angularVelocity_0 = function () {
                  return (xi = i._emscripten_bind_b2BodyDef_get_angularVelocity_0 = i.asm._c).apply(
                    null,
                    arguments,
                  );
                }),
                Bi = (i._emscripten_bind_b2BodyDef_set_angularVelocity_1 = function () {
                  return (Bi = i._emscripten_bind_b2BodyDef_set_angularVelocity_1 = i.asm.$c).apply(
                    null,
                    arguments,
                  );
                }),
                ji = (i._emscripten_bind_b2BodyDef_get_linearDamping_0 = function () {
                  return (ji = i._emscripten_bind_b2BodyDef_get_linearDamping_0 = i.asm.ad).apply(
                    null,
                    arguments,
                  );
                }),
                Gi = (i._emscripten_bind_b2BodyDef_set_linearDamping_1 = function () {
                  return (Gi = i._emscripten_bind_b2BodyDef_set_linearDamping_1 = i.asm.bd).apply(
                    null,
                    arguments,
                  );
                }),
                Ci = (i._emscripten_bind_b2BodyDef_get_angularDamping_0 = function () {
                  return (Ci = i._emscripten_bind_b2BodyDef_get_angularDamping_0 = i.asm.cd).apply(
                    null,
                    arguments,
                  );
                }),
                Pi = (i._emscripten_bind_b2BodyDef_set_angularDamping_1 = function () {
                  return (Pi = i._emscripten_bind_b2BodyDef_set_angularDamping_1 = i.asm.dd).apply(
                    null,
                    arguments,
                  );
                }),
                Ri = (i._emscripten_bind_b2BodyDef_get_allowSleep_0 = function () {
                  return (Ri = i._emscripten_bind_b2BodyDef_get_allowSleep_0 = i.asm.ed).apply(
                    null,
                    arguments,
                  );
                }),
                Mi = (i._emscripten_bind_b2BodyDef_set_allowSleep_1 = function () {
                  return (Mi = i._emscripten_bind_b2BodyDef_set_allowSleep_1 = i.asm.fd).apply(
                    null,
                    arguments,
                  );
                }),
                Ti = (i._emscripten_bind_b2BodyDef_get_awake_0 = function () {
                  return (Ti = i._emscripten_bind_b2BodyDef_get_awake_0 = i.asm.gd).apply(
                    null,
                    arguments,
                  );
                }),
                Fi = (i._emscripten_bind_b2BodyDef_set_awake_1 = function () {
                  return (Fi = i._emscripten_bind_b2BodyDef_set_awake_1 = i.asm.hd).apply(
                    null,
                    arguments,
                  );
                }),
                Li = (i._emscripten_bind_b2BodyDef_get_fixedRotation_0 = function () {
                  return (Li = i._emscripten_bind_b2BodyDef_get_fixedRotation_0 = i.asm.id).apply(
                    null,
                    arguments,
                  );
                }),
                Ii = (i._emscripten_bind_b2BodyDef_set_fixedRotation_1 = function () {
                  return (Ii = i._emscripten_bind_b2BodyDef_set_fixedRotation_1 = i.asm.jd).apply(
                    null,
                    arguments,
                  );
                }),
                Wi = (i._emscripten_bind_b2BodyDef_get_bullet_0 = function () {
                  return (Wi = i._emscripten_bind_b2BodyDef_get_bullet_0 = i.asm.kd).apply(
                    null,
                    arguments,
                  );
                }),
                Oi = (i._emscripten_bind_b2BodyDef_set_bullet_1 = function () {
                  return (Oi = i._emscripten_bind_b2BodyDef_set_bullet_1 = i.asm.ld).apply(
                    null,
                    arguments,
                  );
                }),
                Vi = (i._emscripten_bind_b2BodyDef_get_active_0 = function () {
                  return (Vi = i._emscripten_bind_b2BodyDef_get_active_0 = i.asm.md).apply(
                    null,
                    arguments,
                  );
                }),
                Ei = (i._emscripten_bind_b2BodyDef_set_active_1 = function () {
                  return (Ei = i._emscripten_bind_b2BodyDef_set_active_1 = i.asm.nd).apply(
                    null,
                    arguments,
                  );
                }),
                qi = (i._emscripten_bind_b2BodyDef_get_userData_0 = function () {
                  return (qi = i._emscripten_bind_b2BodyDef_get_userData_0 = i.asm.od).apply(
                    null,
                    arguments,
                  );
                }),
                ki = (i._emscripten_bind_b2BodyDef_set_userData_1 = function () {
                  return (ki = i._emscripten_bind_b2BodyDef_set_userData_1 = i.asm.pd).apply(
                    null,
                    arguments,
                  );
                }),
                Ni = (i._emscripten_bind_b2BodyDef_get_gravityScale_0 = function () {
                  return (Ni = i._emscripten_bind_b2BodyDef_get_gravityScale_0 = i.asm.qd).apply(
                    null,
                    arguments,
                  );
                }),
                Xi = (i._emscripten_bind_b2BodyDef_set_gravityScale_1 = function () {
                  return (Xi = i._emscripten_bind_b2BodyDef_set_gravityScale_1 = i.asm.rd).apply(
                    null,
                    arguments,
                  );
                }),
                Hi = (i._emscripten_bind_b2BodyDef___destroy___0 = function () {
                  return (Hi = i._emscripten_bind_b2BodyDef___destroy___0 = i.asm.sd).apply(
                    null,
                    arguments,
                  );
                }),
                zi = (i._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0 = function () {
                  return (zi = i._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0 =
                    i.asm.td).apply(null, arguments);
                }),
                Qi = (i._emscripten_bind_JSRayCastCallback_ReportFixture_4 = function () {
                  return (Qi = i._emscripten_bind_JSRayCastCallback_ReportFixture_4 =
                    i.asm.ud).apply(null, arguments);
                }),
                Zi = (i._emscripten_bind_JSRayCastCallback___destroy___0 = function () {
                  return (Zi = i._emscripten_bind_JSRayCastCallback___destroy___0 = i.asm.vd).apply(
                    null,
                    arguments,
                  );
                }),
                Yi = (i._emscripten_bind_b2ContactFeature_get_indexA_0 = function () {
                  return (Yi = i._emscripten_bind_b2ContactFeature_get_indexA_0 = i.asm.wd).apply(
                    null,
                    arguments,
                  );
                }),
                Ki = (i._emscripten_bind_b2ContactFeature_set_indexA_1 = function () {
                  return (Ki = i._emscripten_bind_b2ContactFeature_set_indexA_1 = i.asm.xd).apply(
                    null,
                    arguments,
                  );
                }),
                $i = (i._emscripten_bind_b2ContactFeature_get_indexB_0 = function () {
                  return ($i = i._emscripten_bind_b2ContactFeature_get_indexB_0 = i.asm.yd).apply(
                    null,
                    arguments,
                  );
                }),
                t_ = (i._emscripten_bind_b2ContactFeature_set_indexB_1 = function () {
                  return (t_ = i._emscripten_bind_b2ContactFeature_set_indexB_1 = i.asm.zd).apply(
                    null,
                    arguments,
                  );
                }),
                e_ = (i._emscripten_bind_b2ContactFeature_get_typeA_0 = function () {
                  return (e_ = i._emscripten_bind_b2ContactFeature_get_typeA_0 = i.asm.Ad).apply(
                    null,
                    arguments,
                  );
                }),
                n_ = (i._emscripten_bind_b2ContactFeature_set_typeA_1 = function () {
                  return (n_ = i._emscripten_bind_b2ContactFeature_set_typeA_1 = i.asm.Bd).apply(
                    null,
                    arguments,
                  );
                }),
                o_ = (i._emscripten_bind_b2ContactFeature_get_typeB_0 = function () {
                  return (o_ = i._emscripten_bind_b2ContactFeature_get_typeB_0 = i.asm.Cd).apply(
                    null,
                    arguments,
                  );
                }),
                i_ = (i._emscripten_bind_b2ContactFeature_set_typeB_1 = function () {
                  return (i_ = i._emscripten_bind_b2ContactFeature_set_typeB_1 = i.asm.Dd).apply(
                    null,
                    arguments,
                  );
                }),
                __ = (i._emscripten_bind_b2ContactFeature___destroy___0 = function () {
                  return (__ = i._emscripten_bind_b2ContactFeature___destroy___0 = i.asm.Ed).apply(
                    null,
                    arguments,
                  );
                }),
                r_ = (i._emscripten_bind_b2Vec2_b2Vec2_0 = function () {
                  return (r_ = i._emscripten_bind_b2Vec2_b2Vec2_0 = i.asm.Fd).apply(
                    null,
                    arguments,
                  );
                }),
                p_ = (i._emscripten_bind_b2Vec2_b2Vec2_2 = function () {
                  return (p_ = i._emscripten_bind_b2Vec2_b2Vec2_2 = i.asm.Gd).apply(
                    null,
                    arguments,
                  );
                }),
                s_ = (i._emscripten_bind_b2Vec2_SetZero_0 = function () {
                  return (s_ = i._emscripten_bind_b2Vec2_SetZero_0 = i.asm.Hd).apply(
                    null,
                    arguments,
                  );
                }),
                c_ = (i._emscripten_bind_b2Vec2_Set_2 = function () {
                  return (c_ = i._emscripten_bind_b2Vec2_Set_2 = i.asm.Id).apply(null, arguments);
                }),
                u_ = (i._emscripten_bind_b2Vec2_op_add_1 = function () {
                  return (u_ = i._emscripten_bind_b2Vec2_op_add_1 = i.asm.Jd).apply(
                    null,
                    arguments,
                  );
                }),
                a_ = (i._emscripten_bind_b2Vec2_op_sub_1 = function () {
                  return (a_ = i._emscripten_bind_b2Vec2_op_sub_1 = i.asm.Kd).apply(
                    null,
                    arguments,
                  );
                }),
                l_ = (i._emscripten_bind_b2Vec2_op_mul_1 = function () {
                  return (l_ = i._emscripten_bind_b2Vec2_op_mul_1 = i.asm.Ld).apply(
                    null,
                    arguments,
                  );
                }),
                y_ = (i._emscripten_bind_b2Vec2_Length_0 = function () {
                  return (y_ = i._emscripten_bind_b2Vec2_Length_0 = i.asm.Md).apply(
                    null,
                    arguments,
                  );
                }),
                b_ = (i._emscripten_bind_b2Vec2_LengthSquared_0 = function () {
                  return (b_ = i._emscripten_bind_b2Vec2_LengthSquared_0 = i.asm.Nd).apply(
                    null,
                    arguments,
                  );
                }),
                d_ = (i._emscripten_bind_b2Vec2_Normalize_0 = function () {
                  return (d_ = i._emscripten_bind_b2Vec2_Normalize_0 = i.asm.Od).apply(
                    null,
                    arguments,
                  );
                }),
                m_ = (i._emscripten_bind_b2Vec2_IsValid_0 = function () {
                  return (m_ = i._emscripten_bind_b2Vec2_IsValid_0 = i.asm.Pd).apply(
                    null,
                    arguments,
                  );
                }),
                f_ = (i._emscripten_bind_b2Vec2_Skew_0 = function () {
                  return (f_ = i._emscripten_bind_b2Vec2_Skew_0 = i.asm.Qd).apply(null, arguments);
                }),
                h_ = (i._emscripten_bind_b2Vec2_get_x_0 = function () {
                  return (h_ = i._emscripten_bind_b2Vec2_get_x_0 = i.asm.Rd).apply(null, arguments);
                }),
                g_ = (i._emscripten_bind_b2Vec2_set_x_1 = function () {
                  return (g_ = i._emscripten_bind_b2Vec2_set_x_1 = i.asm.Sd).apply(null, arguments);
                }),
                U_ = (i._emscripten_bind_b2Vec2_get_y_0 = function () {
                  return (U_ = i._emscripten_bind_b2Vec2_get_y_0 = i.asm.Td).apply(null, arguments);
                }),
                w_ = (i._emscripten_bind_b2Vec2_set_y_1 = function () {
                  return (w_ = i._emscripten_bind_b2Vec2_set_y_1 = i.asm.Ud).apply(null, arguments);
                }),
                J_ = (i._emscripten_bind_b2Vec2___destroy___0 = function () {
                  return (J_ = i._emscripten_bind_b2Vec2___destroy___0 = i.asm.Vd).apply(
                    null,
                    arguments,
                  );
                }),
                D_ = (i._emscripten_bind_b2Vec3_b2Vec3_0 = function () {
                  return (D_ = i._emscripten_bind_b2Vec3_b2Vec3_0 = i.asm.Wd).apply(
                    null,
                    arguments,
                  );
                }),
                v_ = (i._emscripten_bind_b2Vec3_b2Vec3_3 = function () {
                  return (v_ = i._emscripten_bind_b2Vec3_b2Vec3_3 = i.asm.Xd).apply(
                    null,
                    arguments,
                  );
                }),
                S_ = (i._emscripten_bind_b2Vec3_SetZero_0 = function () {
                  return (S_ = i._emscripten_bind_b2Vec3_SetZero_0 = i.asm.Yd).apply(
                    null,
                    arguments,
                  );
                }),
                A_ = (i._emscripten_bind_b2Vec3_Set_3 = function () {
                  return (A_ = i._emscripten_bind_b2Vec3_Set_3 = i.asm.Zd).apply(null, arguments);
                }),
                x_ = (i._emscripten_bind_b2Vec3_op_add_1 = function () {
                  return (x_ = i._emscripten_bind_b2Vec3_op_add_1 = i.asm._d).apply(
                    null,
                    arguments,
                  );
                }),
                B_ = (i._emscripten_bind_b2Vec3_op_sub_1 = function () {
                  return (B_ = i._emscripten_bind_b2Vec3_op_sub_1 = i.asm.$d).apply(
                    null,
                    arguments,
                  );
                }),
                j_ = (i._emscripten_bind_b2Vec3_op_mul_1 = function () {
                  return (j_ = i._emscripten_bind_b2Vec3_op_mul_1 = i.asm.ae).apply(
                    null,
                    arguments,
                  );
                }),
                G_ = (i._emscripten_bind_b2Vec3_get_x_0 = function () {
                  return (G_ = i._emscripten_bind_b2Vec3_get_x_0 = i.asm.be).apply(null, arguments);
                }),
                C_ = (i._emscripten_bind_b2Vec3_set_x_1 = function () {
                  return (C_ = i._emscripten_bind_b2Vec3_set_x_1 = i.asm.ce).apply(null, arguments);
                }),
                P_ = (i._emscripten_bind_b2Vec3_get_y_0 = function () {
                  return (P_ = i._emscripten_bind_b2Vec3_get_y_0 = i.asm.de).apply(null, arguments);
                }),
                R_ = (i._emscripten_bind_b2Vec3_set_y_1 = function () {
                  return (R_ = i._emscripten_bind_b2Vec3_set_y_1 = i.asm.ee).apply(null, arguments);
                }),
                M_ = (i._emscripten_bind_b2Vec3_get_z_0 = function () {
                  return (M_ = i._emscripten_bind_b2Vec3_get_z_0 = i.asm.fe).apply(null, arguments);
                }),
                T_ = (i._emscripten_bind_b2Vec3_set_z_1 = function () {
                  return (T_ = i._emscripten_bind_b2Vec3_set_z_1 = i.asm.ge).apply(null, arguments);
                }),
                F_ = (i._emscripten_bind_b2Vec3___destroy___0 = function () {
                  return (F_ = i._emscripten_bind_b2Vec3___destroy___0 = i.asm.he).apply(
                    null,
                    arguments,
                  );
                }),
                L_ = (i._emscripten_bind_b2AABB_b2AABB_0 = function () {
                  return (L_ = i._emscripten_bind_b2AABB_b2AABB_0 = i.asm.ie).apply(
                    null,
                    arguments,
                  );
                }),
                I_ = (i._emscripten_bind_b2AABB_IsValid_0 = function () {
                  return (I_ = i._emscripten_bind_b2AABB_IsValid_0 = i.asm.je).apply(
                    null,
                    arguments,
                  );
                }),
                W_ = (i._emscripten_bind_b2AABB_GetCenter_0 = function () {
                  return (W_ = i._emscripten_bind_b2AABB_GetCenter_0 = i.asm.ke).apply(
                    null,
                    arguments,
                  );
                }),
                O_ = (i._emscripten_bind_b2AABB_GetExtents_0 = function () {
                  return (O_ = i._emscripten_bind_b2AABB_GetExtents_0 = i.asm.le).apply(
                    null,
                    arguments,
                  );
                }),
                V_ = (i._emscripten_bind_b2AABB_GetPerimeter_0 = function () {
                  return (V_ = i._emscripten_bind_b2AABB_GetPerimeter_0 = i.asm.me).apply(
                    null,
                    arguments,
                  );
                }),
                E_ = (i._emscripten_bind_b2AABB_Combine_1 = function () {
                  return (E_ = i._emscripten_bind_b2AABB_Combine_1 = i.asm.ne).apply(
                    null,
                    arguments,
                  );
                }),
                q_ = (i._emscripten_bind_b2AABB_Combine_2 = function () {
                  return (q_ = i._emscripten_bind_b2AABB_Combine_2 = i.asm.oe).apply(
                    null,
                    arguments,
                  );
                }),
                k_ = (i._emscripten_bind_b2AABB_Contains_1 = function () {
                  return (k_ = i._emscripten_bind_b2AABB_Contains_1 = i.asm.pe).apply(
                    null,
                    arguments,
                  );
                }),
                N_ = (i._emscripten_bind_b2AABB_RayCast_2 = function () {
                  return (N_ = i._emscripten_bind_b2AABB_RayCast_2 = i.asm.qe).apply(
                    null,
                    arguments,
                  );
                }),
                X_ = (i._emscripten_bind_b2AABB_get_lowerBound_0 = function () {
                  return (X_ = i._emscripten_bind_b2AABB_get_lowerBound_0 = i.asm.re).apply(
                    null,
                    arguments,
                  );
                }),
                H_ = (i._emscripten_bind_b2AABB_set_lowerBound_1 = function () {
                  return (H_ = i._emscripten_bind_b2AABB_set_lowerBound_1 = i.asm.se).apply(
                    null,
                    arguments,
                  );
                }),
                z_ = (i._emscripten_bind_b2AABB_get_upperBound_0 = function () {
                  return (z_ = i._emscripten_bind_b2AABB_get_upperBound_0 = i.asm.te).apply(
                    null,
                    arguments,
                  );
                }),
                Q_ = (i._emscripten_bind_b2AABB_set_upperBound_1 = function () {
                  return (Q_ = i._emscripten_bind_b2AABB_set_upperBound_1 = i.asm.ue).apply(
                    null,
                    arguments,
                  );
                }),
                Z_ = (i._emscripten_bind_b2AABB___destroy___0 = function () {
                  return (Z_ = i._emscripten_bind_b2AABB___destroy___0 = i.asm.ve).apply(
                    null,
                    arguments,
                  );
                }),
                Y_ = (i._emscripten_bind_b2FixtureDef_b2FixtureDef_0 = function () {
                  return (Y_ = i._emscripten_bind_b2FixtureDef_b2FixtureDef_0 = i.asm.we).apply(
                    null,
                    arguments,
                  );
                }),
                K_ = (i._emscripten_bind_b2FixtureDef_get_shape_0 = function () {
                  return (K_ = i._emscripten_bind_b2FixtureDef_get_shape_0 = i.asm.xe).apply(
                    null,
                    arguments,
                  );
                }),
                $_ = (i._emscripten_bind_b2FixtureDef_set_shape_1 = function () {
                  return ($_ = i._emscripten_bind_b2FixtureDef_set_shape_1 = i.asm.ye).apply(
                    null,
                    arguments,
                  );
                }),
                tr = (i._emscripten_bind_b2FixtureDef_get_userData_0 = function () {
                  return (tr = i._emscripten_bind_b2FixtureDef_get_userData_0 = i.asm.ze).apply(
                    null,
                    arguments,
                  );
                }),
                er = (i._emscripten_bind_b2FixtureDef_set_userData_1 = function () {
                  return (er = i._emscripten_bind_b2FixtureDef_set_userData_1 = i.asm.Ae).apply(
                    null,
                    arguments,
                  );
                }),
                nr = (i._emscripten_bind_b2FixtureDef_get_friction_0 = function () {
                  return (nr = i._emscripten_bind_b2FixtureDef_get_friction_0 = i.asm.Be).apply(
                    null,
                    arguments,
                  );
                }),
                or = (i._emscripten_bind_b2FixtureDef_set_friction_1 = function () {
                  return (or = i._emscripten_bind_b2FixtureDef_set_friction_1 = i.asm.Ce).apply(
                    null,
                    arguments,
                  );
                }),
                ir = (i._emscripten_bind_b2FixtureDef_get_restitution_0 = function () {
                  return (ir = i._emscripten_bind_b2FixtureDef_get_restitution_0 = i.asm.De).apply(
                    null,
                    arguments,
                  );
                }),
                _r = (i._emscripten_bind_b2FixtureDef_set_restitution_1 = function () {
                  return (_r = i._emscripten_bind_b2FixtureDef_set_restitution_1 = i.asm.Ee).apply(
                    null,
                    arguments,
                  );
                }),
                rr = (i._emscripten_bind_b2FixtureDef_get_density_0 = function () {
                  return (rr = i._emscripten_bind_b2FixtureDef_get_density_0 = i.asm.Fe).apply(
                    null,
                    arguments,
                  );
                }),
                pr = (i._emscripten_bind_b2FixtureDef_set_density_1 = function () {
                  return (pr = i._emscripten_bind_b2FixtureDef_set_density_1 = i.asm.Ge).apply(
                    null,
                    arguments,
                  );
                }),
                sr = (i._emscripten_bind_b2FixtureDef_get_isSensor_0 = function () {
                  return (sr = i._emscripten_bind_b2FixtureDef_get_isSensor_0 = i.asm.He).apply(
                    null,
                    arguments,
                  );
                }),
                cr = (i._emscripten_bind_b2FixtureDef_set_isSensor_1 = function () {
                  return (cr = i._emscripten_bind_b2FixtureDef_set_isSensor_1 = i.asm.Ie).apply(
                    null,
                    arguments,
                  );
                }),
                ur = (i._emscripten_bind_b2FixtureDef_get_filter_0 = function () {
                  return (ur = i._emscripten_bind_b2FixtureDef_get_filter_0 = i.asm.Je).apply(
                    null,
                    arguments,
                  );
                }),
                ar = (i._emscripten_bind_b2FixtureDef_set_filter_1 = function () {
                  return (ar = i._emscripten_bind_b2FixtureDef_set_filter_1 = i.asm.Ke).apply(
                    null,
                    arguments,
                  );
                }),
                lr = (i._emscripten_bind_b2FixtureDef___destroy___0 = function () {
                  return (lr = i._emscripten_bind_b2FixtureDef___destroy___0 = i.asm.Le).apply(
                    null,
                    arguments,
                  );
                }),
                yr = (i._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0 = function () {
                  return (yr = i._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0 =
                    i.asm.Me).apply(null, arguments);
                }),
                br = (i._emscripten_bind_b2FrictionJointDef_Initialize_3 = function () {
                  return (br = i._emscripten_bind_b2FrictionJointDef_Initialize_3 = i.asm.Ne).apply(
                    null,
                    arguments,
                  );
                }),
                dr = (i._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0 = function () {
                  return (dr = i._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0 =
                    i.asm.Oe).apply(null, arguments);
                }),
                mr = (i._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1 = function () {
                  return (mr = i._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1 =
                    i.asm.Pe).apply(null, arguments);
                }),
                fr = (i._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0 = function () {
                  return (fr = i._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0 =
                    i.asm.Qe).apply(null, arguments);
                }),
                hr = (i._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1 = function () {
                  return (hr = i._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1 =
                    i.asm.Re).apply(null, arguments);
                }),
                gr = (i._emscripten_bind_b2FrictionJointDef_get_maxForce_0 = function () {
                  return (gr = i._emscripten_bind_b2FrictionJointDef_get_maxForce_0 =
                    i.asm.Se).apply(null, arguments);
                }),
                Ur = (i._emscripten_bind_b2FrictionJointDef_set_maxForce_1 = function () {
                  return (Ur = i._emscripten_bind_b2FrictionJointDef_set_maxForce_1 =
                    i.asm.Te).apply(null, arguments);
                }),
                wr = (i._emscripten_bind_b2FrictionJointDef_get_maxTorque_0 = function () {
                  return (wr = i._emscripten_bind_b2FrictionJointDef_get_maxTorque_0 =
                    i.asm.Ue).apply(null, arguments);
                }),
                Jr = (i._emscripten_bind_b2FrictionJointDef_set_maxTorque_1 = function () {
                  return (Jr = i._emscripten_bind_b2FrictionJointDef_set_maxTorque_1 =
                    i.asm.Ve).apply(null, arguments);
                }),
                Dr = (i._emscripten_bind_b2FrictionJointDef_get_type_0 = function () {
                  return (Dr = i._emscripten_bind_b2FrictionJointDef_get_type_0 = i.asm.We).apply(
                    null,
                    arguments,
                  );
                }),
                vr = (i._emscripten_bind_b2FrictionJointDef_set_type_1 = function () {
                  return (vr = i._emscripten_bind_b2FrictionJointDef_set_type_1 = i.asm.Xe).apply(
                    null,
                    arguments,
                  );
                }),
                Sr = (i._emscripten_bind_b2FrictionJointDef_get_userData_0 = function () {
                  return (Sr = i._emscripten_bind_b2FrictionJointDef_get_userData_0 =
                    i.asm.Ye).apply(null, arguments);
                }),
                Ar = (i._emscripten_bind_b2FrictionJointDef_set_userData_1 = function () {
                  return (Ar = i._emscripten_bind_b2FrictionJointDef_set_userData_1 =
                    i.asm.Ze).apply(null, arguments);
                }),
                xr = (i._emscripten_bind_b2FrictionJointDef_get_bodyA_0 = function () {
                  return (xr = i._emscripten_bind_b2FrictionJointDef_get_bodyA_0 = i.asm._e).apply(
                    null,
                    arguments,
                  );
                }),
                Br = (i._emscripten_bind_b2FrictionJointDef_set_bodyA_1 = function () {
                  return (Br = i._emscripten_bind_b2FrictionJointDef_set_bodyA_1 = i.asm.$e).apply(
                    null,
                    arguments,
                  );
                }),
                jr = (i._emscripten_bind_b2FrictionJointDef_get_bodyB_0 = function () {
                  return (jr = i._emscripten_bind_b2FrictionJointDef_get_bodyB_0 = i.asm.af).apply(
                    null,
                    arguments,
                  );
                }),
                Gr = (i._emscripten_bind_b2FrictionJointDef_set_bodyB_1 = function () {
                  return (Gr = i._emscripten_bind_b2FrictionJointDef_set_bodyB_1 = i.asm.bf).apply(
                    null,
                    arguments,
                  );
                }),
                Cr = (i._emscripten_bind_b2FrictionJointDef_get_collideConnected_0 = function () {
                  return (Cr = i._emscripten_bind_b2FrictionJointDef_get_collideConnected_0 =
                    i.asm.cf).apply(null, arguments);
                }),
                Pr = (i._emscripten_bind_b2FrictionJointDef_set_collideConnected_1 = function () {
                  return (Pr = i._emscripten_bind_b2FrictionJointDef_set_collideConnected_1 =
                    i.asm.df).apply(null, arguments);
                }),
                Rr = (i._emscripten_bind_b2FrictionJointDef___destroy___0 = function () {
                  return (Rr = i._emscripten_bind_b2FrictionJointDef___destroy___0 =
                    i.asm.ef).apply(null, arguments);
                }),
                Mr = (i._emscripten_bind_b2Manifold_b2Manifold_0 = function () {
                  return (Mr = i._emscripten_bind_b2Manifold_b2Manifold_0 = i.asm.ff).apply(
                    null,
                    arguments,
                  );
                }),
                Tr = (i._emscripten_bind_b2Manifold_get_localNormal_0 = function () {
                  return (Tr = i._emscripten_bind_b2Manifold_get_localNormal_0 = i.asm.gf).apply(
                    null,
                    arguments,
                  );
                }),
                Fr = (i._emscripten_bind_b2Manifold_set_localNormal_1 = function () {
                  return (Fr = i._emscripten_bind_b2Manifold_set_localNormal_1 = i.asm.hf).apply(
                    null,
                    arguments,
                  );
                }),
                Lr = (i._emscripten_bind_b2Manifold_get_localPoint_0 = function () {
                  return (Lr = i._emscripten_bind_b2Manifold_get_localPoint_0 = i.asm.jf).apply(
                    null,
                    arguments,
                  );
                }),
                Ir = (i._emscripten_bind_b2Manifold_set_localPoint_1 = function () {
                  return (Ir = i._emscripten_bind_b2Manifold_set_localPoint_1 = i.asm.kf).apply(
                    null,
                    arguments,
                  );
                }),
                Wr = (i._emscripten_bind_b2Manifold_get_type_0 = function () {
                  return (Wr = i._emscripten_bind_b2Manifold_get_type_0 = i.asm.lf).apply(
                    null,
                    arguments,
                  );
                }),
                Or = (i._emscripten_bind_b2Manifold_set_type_1 = function () {
                  return (Or = i._emscripten_bind_b2Manifold_set_type_1 = i.asm.mf).apply(
                    null,
                    arguments,
                  );
                }),
                Vr = (i._emscripten_bind_b2Manifold_get_pointCount_0 = function () {
                  return (Vr = i._emscripten_bind_b2Manifold_get_pointCount_0 = i.asm.nf).apply(
                    null,
                    arguments,
                  );
                }),
                Er = (i._emscripten_bind_b2Manifold_set_pointCount_1 = function () {
                  return (Er = i._emscripten_bind_b2Manifold_set_pointCount_1 = i.asm.of).apply(
                    null,
                    arguments,
                  );
                }),
                qr = (i._emscripten_bind_b2Manifold___destroy___0 = function () {
                  return (qr = i._emscripten_bind_b2Manifold___destroy___0 = i.asm.pf).apply(
                    null,
                    arguments,
                  );
                }),
                kr = (i._emscripten_bind_b2WorldManifold_b2WorldManifold_0 = function () {
                  return (kr = i._emscripten_bind_b2WorldManifold_b2WorldManifold_0 =
                    i.asm.qf).apply(null, arguments);
                }),
                Nr = (i._emscripten_bind_b2WorldManifold_Initialize_5 = function () {
                  return (Nr = i._emscripten_bind_b2WorldManifold_Initialize_5 = i.asm.rf).apply(
                    null,
                    arguments,
                  );
                }),
                Xr = (i._emscripten_bind_b2WorldManifold_get_normal_0 = function () {
                  return (Xr = i._emscripten_bind_b2WorldManifold_get_normal_0 = i.asm.sf).apply(
                    null,
                    arguments,
                  );
                }),
                Hr = (i._emscripten_bind_b2WorldManifold_set_normal_1 = function () {
                  return (Hr = i._emscripten_bind_b2WorldManifold_set_normal_1 = i.asm.tf).apply(
                    null,
                    arguments,
                  );
                }),
                zr = (i._emscripten_bind_b2WorldManifold_get_points_1 = function () {
                  return (zr = i._emscripten_bind_b2WorldManifold_get_points_1 = i.asm.uf).apply(
                    null,
                    arguments,
                  );
                }),
                Qr = (i._emscripten_bind_b2WorldManifold_set_points_2 = function () {
                  return (Qr = i._emscripten_bind_b2WorldManifold_set_points_2 = i.asm.vf).apply(
                    null,
                    arguments,
                  );
                }),
                Zr = (i._emscripten_bind_b2WorldManifold_get_separations_1 = function () {
                  return (Zr = i._emscripten_bind_b2WorldManifold_get_separations_1 =
                    i.asm.wf).apply(null, arguments);
                }),
                Yr = (i._emscripten_bind_b2WorldManifold_set_separations_2 = function () {
                  return (Yr = i._emscripten_bind_b2WorldManifold_set_separations_2 =
                    i.asm.xf).apply(null, arguments);
                }),
                Kr = (i._emscripten_bind_b2WorldManifold___destroy___0 = function () {
                  return (Kr = i._emscripten_bind_b2WorldManifold___destroy___0 = i.asm.yf).apply(
                    null,
                    arguments,
                  );
                }),
                $r = (i._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0 = function () {
                  return ($r = i._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0 =
                    i.asm.zf).apply(null, arguments);
                }),
                tp = (i._emscripten_bind_b2PrismaticJointDef_Initialize_4 = function () {
                  return (tp = i._emscripten_bind_b2PrismaticJointDef_Initialize_4 =
                    i.asm.Af).apply(null, arguments);
                }),
                ep = (i._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0 = function () {
                  return (ep = i._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0 =
                    i.asm.Bf).apply(null, arguments);
                }),
                np = (i._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1 = function () {
                  return (np = i._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1 =
                    i.asm.Cf).apply(null, arguments);
                }),
                op = (i._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0 = function () {
                  return (op = i._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0 =
                    i.asm.Df).apply(null, arguments);
                }),
                ip = (i._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1 = function () {
                  return (ip = i._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1 =
                    i.asm.Ef).apply(null, arguments);
                }),
                _p = (i._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0 = function () {
                  return (_p = i._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0 =
                    i.asm.Ff).apply(null, arguments);
                }),
                rp = (i._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1 = function () {
                  return (rp = i._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1 =
                    i.asm.Gf).apply(null, arguments);
                }),
                pp = (i._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0 = function () {
                  return (pp = i._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0 =
                    i.asm.Hf).apply(null, arguments);
                }),
                sp = (i._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1 = function () {
                  return (sp = i._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1 =
                    i.asm.If).apply(null, arguments);
                }),
                cp = (i._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0 = function () {
                  return (cp = i._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0 =
                    i.asm.Jf).apply(null, arguments);
                }),
                up = (i._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1 = function () {
                  return (up = i._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1 =
                    i.asm.Kf).apply(null, arguments);
                }),
                ap = (i._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0 = function () {
                  return (ap = i._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0 =
                    i.asm.Lf).apply(null, arguments);
                }),
                lp = (i._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1 = function () {
                  return (lp = i._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1 =
                    i.asm.Mf).apply(null, arguments);
                }),
                yp = (i._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0 = function () {
                  return (yp = i._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0 =
                    i.asm.Nf).apply(null, arguments);
                }),
                bp = (i._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1 = function () {
                  return (bp = i._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1 =
                    i.asm.Of).apply(null, arguments);
                }),
                dp = (i._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0 = function () {
                  return (dp = i._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0 =
                    i.asm.Pf).apply(null, arguments);
                }),
                mp = (i._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1 = function () {
                  return (mp = i._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1 =
                    i.asm.Qf).apply(null, arguments);
                }),
                fp = (i._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0 = function () {
                  return (fp = i._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0 =
                    i.asm.Rf).apply(null, arguments);
                }),
                hp = (i._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1 = function () {
                  return (hp = i._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1 =
                    i.asm.Sf).apply(null, arguments);
                }),
                gp = (i._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0 = function () {
                  return (gp = i._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0 =
                    i.asm.Tf).apply(null, arguments);
                }),
                Up = (i._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1 = function () {
                  return (Up = i._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1 =
                    i.asm.Uf).apply(null, arguments);
                }),
                wp = (i._emscripten_bind_b2PrismaticJointDef_get_type_0 = function () {
                  return (wp = i._emscripten_bind_b2PrismaticJointDef_get_type_0 = i.asm.Vf).apply(
                    null,
                    arguments,
                  );
                }),
                Jp = (i._emscripten_bind_b2PrismaticJointDef_set_type_1 = function () {
                  return (Jp = i._emscripten_bind_b2PrismaticJointDef_set_type_1 = i.asm.Wf).apply(
                    null,
                    arguments,
                  );
                }),
                Dp = (i._emscripten_bind_b2PrismaticJointDef_get_userData_0 = function () {
                  return (Dp = i._emscripten_bind_b2PrismaticJointDef_get_userData_0 =
                    i.asm.Xf).apply(null, arguments);
                }),
                vp = (i._emscripten_bind_b2PrismaticJointDef_set_userData_1 = function () {
                  return (vp = i._emscripten_bind_b2PrismaticJointDef_set_userData_1 =
                    i.asm.Yf).apply(null, arguments);
                }),
                Sp = (i._emscripten_bind_b2PrismaticJointDef_get_bodyA_0 = function () {
                  return (Sp = i._emscripten_bind_b2PrismaticJointDef_get_bodyA_0 = i.asm.Zf).apply(
                    null,
                    arguments,
                  );
                }),
                Ap = (i._emscripten_bind_b2PrismaticJointDef_set_bodyA_1 = function () {
                  return (Ap = i._emscripten_bind_b2PrismaticJointDef_set_bodyA_1 = i.asm._f).apply(
                    null,
                    arguments,
                  );
                }),
                xp = (i._emscripten_bind_b2PrismaticJointDef_get_bodyB_0 = function () {
                  return (xp = i._emscripten_bind_b2PrismaticJointDef_get_bodyB_0 = i.asm.$f).apply(
                    null,
                    arguments,
                  );
                }),
                Bp = (i._emscripten_bind_b2PrismaticJointDef_set_bodyB_1 = function () {
                  return (Bp = i._emscripten_bind_b2PrismaticJointDef_set_bodyB_1 = i.asm.ag).apply(
                    null,
                    arguments,
                  );
                }),
                jp = (i._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0 = function () {
                  return (jp = i._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0 =
                    i.asm.bg).apply(null, arguments);
                }),
                Gp = (i._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1 = function () {
                  return (Gp = i._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1 =
                    i.asm.cg).apply(null, arguments);
                }),
                Cp = (i._emscripten_bind_b2PrismaticJointDef___destroy___0 = function () {
                  return (Cp = i._emscripten_bind_b2PrismaticJointDef___destroy___0 =
                    i.asm.dg).apply(null, arguments);
                }),
                Pp = (i._emscripten_bind_b2World_b2World_1 = function () {
                  return (Pp = i._emscripten_bind_b2World_b2World_1 = i.asm.eg).apply(
                    null,
                    arguments,
                  );
                }),
                Rp = (i._emscripten_bind_b2World_SetDestructionListener_1 = function () {
                  return (Rp = i._emscripten_bind_b2World_SetDestructionListener_1 =
                    i.asm.fg).apply(null, arguments);
                }),
                Mp = (i._emscripten_bind_b2World_SetContactFilter_1 = function () {
                  return (Mp = i._emscripten_bind_b2World_SetContactFilter_1 = i.asm.gg).apply(
                    null,
                    arguments,
                  );
                }),
                Tp = (i._emscripten_bind_b2World_SetContactListener_1 = function () {
                  return (Tp = i._emscripten_bind_b2World_SetContactListener_1 = i.asm.hg).apply(
                    null,
                    arguments,
                  );
                }),
                Fp = (i._emscripten_bind_b2World_SetDebugDraw_1 = function () {
                  return (Fp = i._emscripten_bind_b2World_SetDebugDraw_1 = i.asm.ig).apply(
                    null,
                    arguments,
                  );
                }),
                Lp = (i._emscripten_bind_b2World_CreateBody_1 = function () {
                  return (Lp = i._emscripten_bind_b2World_CreateBody_1 = i.asm.jg).apply(
                    null,
                    arguments,
                  );
                }),
                Ip = (i._emscripten_bind_b2World_DestroyBody_1 = function () {
                  return (Ip = i._emscripten_bind_b2World_DestroyBody_1 = i.asm.kg).apply(
                    null,
                    arguments,
                  );
                }),
                Wp = (i._emscripten_bind_b2World_CreateJoint_1 = function () {
                  return (Wp = i._emscripten_bind_b2World_CreateJoint_1 = i.asm.lg).apply(
                    null,
                    arguments,
                  );
                }),
                Op = (i._emscripten_bind_b2World_DestroyJoint_1 = function () {
                  return (Op = i._emscripten_bind_b2World_DestroyJoint_1 = i.asm.mg).apply(
                    null,
                    arguments,
                  );
                }),
                Vp = (i._emscripten_bind_b2World_Step_3 = function () {
                  return (Vp = i._emscripten_bind_b2World_Step_3 = i.asm.ng).apply(null, arguments);
                }),
                Ep = (i._emscripten_bind_b2World_ClearForces_0 = function () {
                  return (Ep = i._emscripten_bind_b2World_ClearForces_0 = i.asm.og).apply(
                    null,
                    arguments,
                  );
                }),
                qp = (i._emscripten_bind_b2World_DrawDebugData_0 = function () {
                  return (qp = i._emscripten_bind_b2World_DrawDebugData_0 = i.asm.pg).apply(
                    null,
                    arguments,
                  );
                }),
                kp = (i._emscripten_bind_b2World_QueryAABB_2 = function () {
                  return (kp = i._emscripten_bind_b2World_QueryAABB_2 = i.asm.qg).apply(
                    null,
                    arguments,
                  );
                }),
                Np = (i._emscripten_bind_b2World_RayCast_3 = function () {
                  return (Np = i._emscripten_bind_b2World_RayCast_3 = i.asm.rg).apply(
                    null,
                    arguments,
                  );
                }),
                Xp = (i._emscripten_bind_b2World_GetBodyList_0 = function () {
                  return (Xp = i._emscripten_bind_b2World_GetBodyList_0 = i.asm.sg).apply(
                    null,
                    arguments,
                  );
                }),
                Hp = (i._emscripten_bind_b2World_GetJointList_0 = function () {
                  return (Hp = i._emscripten_bind_b2World_GetJointList_0 = i.asm.tg).apply(
                    null,
                    arguments,
                  );
                }),
                zp = (i._emscripten_bind_b2World_GetContactList_0 = function () {
                  return (zp = i._emscripten_bind_b2World_GetContactList_0 = i.asm.ug).apply(
                    null,
                    arguments,
                  );
                }),
                Qp = (i._emscripten_bind_b2World_SetAllowSleeping_1 = function () {
                  return (Qp = i._emscripten_bind_b2World_SetAllowSleeping_1 = i.asm.vg).apply(
                    null,
                    arguments,
                  );
                }),
                Zp = (i._emscripten_bind_b2World_GetAllowSleeping_0 = function () {
                  return (Zp = i._emscripten_bind_b2World_GetAllowSleeping_0 = i.asm.wg).apply(
                    null,
                    arguments,
                  );
                }),
                Yp = (i._emscripten_bind_b2World_SetWarmStarting_1 = function () {
                  return (Yp = i._emscripten_bind_b2World_SetWarmStarting_1 = i.asm.xg).apply(
                    null,
                    arguments,
                  );
                }),
                Kp = (i._emscripten_bind_b2World_GetWarmStarting_0 = function () {
                  return (Kp = i._emscripten_bind_b2World_GetWarmStarting_0 = i.asm.yg).apply(
                    null,
                    arguments,
                  );
                }),
                $p = (i._emscripten_bind_b2World_SetContinuousPhysics_1 = function () {
                  return ($p = i._emscripten_bind_b2World_SetContinuousPhysics_1 = i.asm.zg).apply(
                    null,
                    arguments,
                  );
                }),
                ts = (i._emscripten_bind_b2World_GetContinuousPhysics_0 = function () {
                  return (ts = i._emscripten_bind_b2World_GetContinuousPhysics_0 = i.asm.Ag).apply(
                    null,
                    arguments,
                  );
                }),
                es = (i._emscripten_bind_b2World_SetSubStepping_1 = function () {
                  return (es = i._emscripten_bind_b2World_SetSubStepping_1 = i.asm.Bg).apply(
                    null,
                    arguments,
                  );
                }),
                ns = (i._emscripten_bind_b2World_GetSubStepping_0 = function () {
                  return (ns = i._emscripten_bind_b2World_GetSubStepping_0 = i.asm.Cg).apply(
                    null,
                    arguments,
                  );
                }),
                os = (i._emscripten_bind_b2World_GetProxyCount_0 = function () {
                  return (os = i._emscripten_bind_b2World_GetProxyCount_0 = i.asm.Dg).apply(
                    null,
                    arguments,
                  );
                }),
                is = (i._emscripten_bind_b2World_GetBodyCount_0 = function () {
                  return (is = i._emscripten_bind_b2World_GetBodyCount_0 = i.asm.Eg).apply(
                    null,
                    arguments,
                  );
                }),
                _s = (i._emscripten_bind_b2World_GetJointCount_0 = function () {
                  return (_s = i._emscripten_bind_b2World_GetJointCount_0 = i.asm.Fg).apply(
                    null,
                    arguments,
                  );
                }),
                rs = (i._emscripten_bind_b2World_GetContactCount_0 = function () {
                  return (rs = i._emscripten_bind_b2World_GetContactCount_0 = i.asm.Gg).apply(
                    null,
                    arguments,
                  );
                }),
                ps = (i._emscripten_bind_b2World_GetTreeHeight_0 = function () {
                  return (ps = i._emscripten_bind_b2World_GetTreeHeight_0 = i.asm.Hg).apply(
                    null,
                    arguments,
                  );
                }),
                ss = (i._emscripten_bind_b2World_GetTreeBalance_0 = function () {
                  return (ss = i._emscripten_bind_b2World_GetTreeBalance_0 = i.asm.Ig).apply(
                    null,
                    arguments,
                  );
                }),
                cs = (i._emscripten_bind_b2World_GetTreeQuality_0 = function () {
                  return (cs = i._emscripten_bind_b2World_GetTreeQuality_0 = i.asm.Jg).apply(
                    null,
                    arguments,
                  );
                }),
                us = (i._emscripten_bind_b2World_SetGravity_1 = function () {
                  return (us = i._emscripten_bind_b2World_SetGravity_1 = i.asm.Kg).apply(
                    null,
                    arguments,
                  );
                }),
                as = (i._emscripten_bind_b2World_GetGravity_0 = function () {
                  return (as = i._emscripten_bind_b2World_GetGravity_0 = i.asm.Lg).apply(
                    null,
                    arguments,
                  );
                }),
                ls = (i._emscripten_bind_b2World_IsLocked_0 = function () {
                  return (ls = i._emscripten_bind_b2World_IsLocked_0 = i.asm.Mg).apply(
                    null,
                    arguments,
                  );
                }),
                ys = (i._emscripten_bind_b2World_SetAutoClearForces_1 = function () {
                  return (ys = i._emscripten_bind_b2World_SetAutoClearForces_1 = i.asm.Ng).apply(
                    null,
                    arguments,
                  );
                }),
                bs = (i._emscripten_bind_b2World_GetAutoClearForces_0 = function () {
                  return (bs = i._emscripten_bind_b2World_GetAutoClearForces_0 = i.asm.Og).apply(
                    null,
                    arguments,
                  );
                }),
                ds = (i._emscripten_bind_b2World_GetProfile_0 = function () {
                  return (ds = i._emscripten_bind_b2World_GetProfile_0 = i.asm.Pg).apply(
                    null,
                    arguments,
                  );
                }),
                ms = (i._emscripten_bind_b2World_Dump_0 = function () {
                  return (ms = i._emscripten_bind_b2World_Dump_0 = i.asm.Qg).apply(null, arguments);
                }),
                fs = (i._emscripten_bind_b2World___destroy___0 = function () {
                  return (fs = i._emscripten_bind_b2World___destroy___0 = i.asm.Rg).apply(
                    null,
                    arguments,
                  );
                }),
                hs = (i._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0 = function () {
                  return (hs = i._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0 =
                    i.asm.Sg).apply(null, arguments);
                }),
                gs = (i._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0 = function () {
                  return (gs = i._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0 =
                    i.asm.Tg).apply(null, arguments);
                }),
                Us = (i._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0 = function () {
                  return (Us = i._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0 =
                    i.asm.Ug).apply(null, arguments);
                }),
                ws = (i._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0 = function () {
                  return (ws = i._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0 =
                    i.asm.Vg).apply(null, arguments);
                }),
                Js = (i._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0 = function () {
                  return (Js = i._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0 =
                    i.asm.Wg).apply(null, arguments);
                }),
                Ds = (i._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0 = function () {
                  return (Ds = i._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0 =
                    i.asm.Xg).apply(null, arguments);
                }),
                vs = (i._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0 = function () {
                  return (vs = i._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0 =
                    i.asm.Yg).apply(null, arguments);
                }),
                Ss = (i._emscripten_bind_b2PrismaticJoint_EnableLimit_1 = function () {
                  return (Ss = i._emscripten_bind_b2PrismaticJoint_EnableLimit_1 = i.asm.Zg).apply(
                    null,
                    arguments,
                  );
                }),
                As = (i._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0 = function () {
                  return (As = i._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0 =
                    i.asm._g).apply(null, arguments);
                }),
                xs = (i._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0 = function () {
                  return (xs = i._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0 =
                    i.asm.$g).apply(null, arguments);
                }),
                Bs = (i._emscripten_bind_b2PrismaticJoint_SetLimits_2 = function () {
                  return (Bs = i._emscripten_bind_b2PrismaticJoint_SetLimits_2 = i.asm.ah).apply(
                    null,
                    arguments,
                  );
                }),
                js = (i._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0 = function () {
                  return (js = i._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0 =
                    i.asm.bh).apply(null, arguments);
                }),
                Gs = (i._emscripten_bind_b2PrismaticJoint_EnableMotor_1 = function () {
                  return (Gs = i._emscripten_bind_b2PrismaticJoint_EnableMotor_1 = i.asm.ch).apply(
                    null,
                    arguments,
                  );
                }),
                Cs = (i._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1 = function () {
                  return (Cs = i._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1 =
                    i.asm.dh).apply(null, arguments);
                }),
                Ps = (i._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0 = function () {
                  return (Ps = i._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0 =
                    i.asm.eh).apply(null, arguments);
                }),
                Rs = (i._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1 = function () {
                  return (Rs = i._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1 =
                    i.asm.fh).apply(null, arguments);
                }),
                Ms = (i._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0 = function () {
                  return (Ms = i._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0 =
                    i.asm.gh).apply(null, arguments);
                }),
                Ts = (i._emscripten_bind_b2PrismaticJoint_GetMotorForce_1 = function () {
                  return (Ts = i._emscripten_bind_b2PrismaticJoint_GetMotorForce_1 =
                    i.asm.hh).apply(null, arguments);
                }),
                Fs = (i._emscripten_bind_b2PrismaticJoint_GetType_0 = function () {
                  return (Fs = i._emscripten_bind_b2PrismaticJoint_GetType_0 = i.asm.ih).apply(
                    null,
                    arguments,
                  );
                }),
                Ls = (i._emscripten_bind_b2PrismaticJoint_GetBodyA_0 = function () {
                  return (Ls = i._emscripten_bind_b2PrismaticJoint_GetBodyA_0 = i.asm.jh).apply(
                    null,
                    arguments,
                  );
                }),
                Is = (i._emscripten_bind_b2PrismaticJoint_GetBodyB_0 = function () {
                  return (Is = i._emscripten_bind_b2PrismaticJoint_GetBodyB_0 = i.asm.kh).apply(
                    null,
                    arguments,
                  );
                }),
                Ws = (i._emscripten_bind_b2PrismaticJoint_GetAnchorA_0 = function () {
                  return (Ws = i._emscripten_bind_b2PrismaticJoint_GetAnchorA_0 = i.asm.lh).apply(
                    null,
                    arguments,
                  );
                }),
                Os = (i._emscripten_bind_b2PrismaticJoint_GetAnchorB_0 = function () {
                  return (Os = i._emscripten_bind_b2PrismaticJoint_GetAnchorB_0 = i.asm.mh).apply(
                    null,
                    arguments,
                  );
                }),
                Vs = (i._emscripten_bind_b2PrismaticJoint_GetReactionForce_1 = function () {
                  return (Vs = i._emscripten_bind_b2PrismaticJoint_GetReactionForce_1 =
                    i.asm.nh).apply(null, arguments);
                }),
                Es = (i._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1 = function () {
                  return (Es = i._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1 =
                    i.asm.oh).apply(null, arguments);
                }),
                qs = (i._emscripten_bind_b2PrismaticJoint_GetNext_0 = function () {
                  return (qs = i._emscripten_bind_b2PrismaticJoint_GetNext_0 = i.asm.ph).apply(
                    null,
                    arguments,
                  );
                }),
                ks = (i._emscripten_bind_b2PrismaticJoint_GetUserData_0 = function () {
                  return (ks = i._emscripten_bind_b2PrismaticJoint_GetUserData_0 = i.asm.qh).apply(
                    null,
                    arguments,
                  );
                }),
                Ns = (i._emscripten_bind_b2PrismaticJoint_SetUserData_1 = function () {
                  return (Ns = i._emscripten_bind_b2PrismaticJoint_SetUserData_1 = i.asm.rh).apply(
                    null,
                    arguments,
                  );
                }),
                Xs = (i._emscripten_bind_b2PrismaticJoint_IsActive_0 = function () {
                  return (Xs = i._emscripten_bind_b2PrismaticJoint_IsActive_0 = i.asm.sh).apply(
                    null,
                    arguments,
                  );
                }),
                Hs = (i._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0 = function () {
                  return (Hs = i._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0 =
                    i.asm.th).apply(null, arguments);
                }),
                zs = (i._emscripten_bind_b2PrismaticJoint___destroy___0 = function () {
                  return (zs = i._emscripten_bind_b2PrismaticJoint___destroy___0 = i.asm.uh).apply(
                    null,
                    arguments,
                  );
                }),
                Qs = (i._emscripten_bind_b2RayCastOutput_get_normal_0 = function () {
                  return (Qs = i._emscripten_bind_b2RayCastOutput_get_normal_0 = i.asm.vh).apply(
                    null,
                    arguments,
                  );
                }),
                Zs = (i._emscripten_bind_b2RayCastOutput_set_normal_1 = function () {
                  return (Zs = i._emscripten_bind_b2RayCastOutput_set_normal_1 = i.asm.wh).apply(
                    null,
                    arguments,
                  );
                }),
                Ys = (i._emscripten_bind_b2RayCastOutput_get_fraction_0 = function () {
                  return (Ys = i._emscripten_bind_b2RayCastOutput_get_fraction_0 = i.asm.xh).apply(
                    null,
                    arguments,
                  );
                }),
                Ks = (i._emscripten_bind_b2RayCastOutput_set_fraction_1 = function () {
                  return (Ks = i._emscripten_bind_b2RayCastOutput_set_fraction_1 = i.asm.yh).apply(
                    null,
                    arguments,
                  );
                }),
                $s = (i._emscripten_bind_b2RayCastOutput___destroy___0 = function () {
                  return ($s = i._emscripten_bind_b2RayCastOutput___destroy___0 = i.asm.zh).apply(
                    null,
                    arguments,
                  );
                }),
                tc = (i._emscripten_bind_b2ContactID_get_cf_0 = function () {
                  return (tc = i._emscripten_bind_b2ContactID_get_cf_0 = i.asm.Ah).apply(
                    null,
                    arguments,
                  );
                }),
                ec = (i._emscripten_bind_b2ContactID_set_cf_1 = function () {
                  return (ec = i._emscripten_bind_b2ContactID_set_cf_1 = i.asm.Bh).apply(
                    null,
                    arguments,
                  );
                }),
                nc = (i._emscripten_bind_b2ContactID_get_key_0 = function () {
                  return (nc = i._emscripten_bind_b2ContactID_get_key_0 = i.asm.Ch).apply(
                    null,
                    arguments,
                  );
                }),
                oc = (i._emscripten_bind_b2ContactID_set_key_1 = function () {
                  return (oc = i._emscripten_bind_b2ContactID_set_key_1 = i.asm.Dh).apply(
                    null,
                    arguments,
                  );
                }),
                ic = (i._emscripten_bind_b2ContactID___destroy___0 = function () {
                  return (ic = i._emscripten_bind_b2ContactID___destroy___0 = i.asm.Eh).apply(
                    null,
                    arguments,
                  );
                }),
                _c = (i._emscripten_bind_JSContactListener_JSContactListener_0 = function () {
                  return (_c = i._emscripten_bind_JSContactListener_JSContactListener_0 =
                    i.asm.Fh).apply(null, arguments);
                }),
                rc = (i._emscripten_bind_JSContactListener_BeginContact_1 = function () {
                  return (rc = i._emscripten_bind_JSContactListener_BeginContact_1 =
                    i.asm.Gh).apply(null, arguments);
                }),
                pc = (i._emscripten_bind_JSContactListener_EndContact_1 = function () {
                  return (pc = i._emscripten_bind_JSContactListener_EndContact_1 = i.asm.Hh).apply(
                    null,
                    arguments,
                  );
                }),
                sc = (i._emscripten_bind_JSContactListener_PreSolve_2 = function () {
                  return (sc = i._emscripten_bind_JSContactListener_PreSolve_2 = i.asm.Ih).apply(
                    null,
                    arguments,
                  );
                }),
                cc = (i._emscripten_bind_JSContactListener_PostSolve_2 = function () {
                  return (cc = i._emscripten_bind_JSContactListener_PostSolve_2 = i.asm.Jh).apply(
                    null,
                    arguments,
                  );
                }),
                uc = (i._emscripten_bind_JSContactListener___destroy___0 = function () {
                  return (uc = i._emscripten_bind_JSContactListener___destroy___0 = i.asm.Kh).apply(
                    null,
                    arguments,
                  );
                }),
                ac = (i._emscripten_bind_b2Mat22_b2Mat22_0 = function () {
                  return (ac = i._emscripten_bind_b2Mat22_b2Mat22_0 = i.asm.Lh).apply(
                    null,
                    arguments,
                  );
                }),
                lc = (i._emscripten_bind_b2Mat22_b2Mat22_2 = function () {
                  return (lc = i._emscripten_bind_b2Mat22_b2Mat22_2 = i.asm.Mh).apply(
                    null,
                    arguments,
                  );
                }),
                yc = (i._emscripten_bind_b2Mat22_b2Mat22_4 = function () {
                  return (yc = i._emscripten_bind_b2Mat22_b2Mat22_4 = i.asm.Nh).apply(
                    null,
                    arguments,
                  );
                }),
                bc = (i._emscripten_bind_b2Mat22_Set_2 = function () {
                  return (bc = i._emscripten_bind_b2Mat22_Set_2 = i.asm.Oh).apply(null, arguments);
                }),
                dc = (i._emscripten_bind_b2Mat22_SetIdentity_0 = function () {
                  return (dc = i._emscripten_bind_b2Mat22_SetIdentity_0 = i.asm.Ph).apply(
                    null,
                    arguments,
                  );
                }),
                mc = (i._emscripten_bind_b2Mat22_SetZero_0 = function () {
                  return (mc = i._emscripten_bind_b2Mat22_SetZero_0 = i.asm.Qh).apply(
                    null,
                    arguments,
                  );
                }),
                fc = (i._emscripten_bind_b2Mat22_GetInverse_0 = function () {
                  return (fc = i._emscripten_bind_b2Mat22_GetInverse_0 = i.asm.Rh).apply(
                    null,
                    arguments,
                  );
                }),
                hc = (i._emscripten_bind_b2Mat22_Solve_1 = function () {
                  return (hc = i._emscripten_bind_b2Mat22_Solve_1 = i.asm.Sh).apply(
                    null,
                    arguments,
                  );
                }),
                gc = (i._emscripten_bind_b2Mat22_get_ex_0 = function () {
                  return (gc = i._emscripten_bind_b2Mat22_get_ex_0 = i.asm.Th).apply(
                    null,
                    arguments,
                  );
                }),
                Uc = (i._emscripten_bind_b2Mat22_set_ex_1 = function () {
                  return (Uc = i._emscripten_bind_b2Mat22_set_ex_1 = i.asm.Uh).apply(
                    null,
                    arguments,
                  );
                }),
                wc = (i._emscripten_bind_b2Mat22_get_ey_0 = function () {
                  return (wc = i._emscripten_bind_b2Mat22_get_ey_0 = i.asm.Vh).apply(
                    null,
                    arguments,
                  );
                }),
                Jc = (i._emscripten_bind_b2Mat22_set_ey_1 = function () {
                  return (Jc = i._emscripten_bind_b2Mat22_set_ey_1 = i.asm.Wh).apply(
                    null,
                    arguments,
                  );
                }),
                Dc = (i._emscripten_bind_b2Mat22___destroy___0 = function () {
                  return (Dc = i._emscripten_bind_b2Mat22___destroy___0 = i.asm.Xh).apply(
                    null,
                    arguments,
                  );
                }),
                vc = (i._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0 = function () {
                  return (vc = i._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0 =
                    i.asm.Yh).apply(null, arguments);
                }),
                Sc = (i._emscripten_bind_b2WheelJointDef_Initialize_4 = function () {
                  return (Sc = i._emscripten_bind_b2WheelJointDef_Initialize_4 = i.asm.Zh).apply(
                    null,
                    arguments,
                  );
                }),
                Ac = (i._emscripten_bind_b2WheelJointDef_get_localAnchorA_0 = function () {
                  return (Ac = i._emscripten_bind_b2WheelJointDef_get_localAnchorA_0 =
                    i.asm._h).apply(null, arguments);
                }),
                xc = (i._emscripten_bind_b2WheelJointDef_set_localAnchorA_1 = function () {
                  return (xc = i._emscripten_bind_b2WheelJointDef_set_localAnchorA_1 =
                    i.asm.$h).apply(null, arguments);
                }),
                Bc = (i._emscripten_bind_b2WheelJointDef_get_localAnchorB_0 = function () {
                  return (Bc = i._emscripten_bind_b2WheelJointDef_get_localAnchorB_0 =
                    i.asm.ai).apply(null, arguments);
                }),
                jc = (i._emscripten_bind_b2WheelJointDef_set_localAnchorB_1 = function () {
                  return (jc = i._emscripten_bind_b2WheelJointDef_set_localAnchorB_1 =
                    i.asm.bi).apply(null, arguments);
                }),
                Gc = (i._emscripten_bind_b2WheelJointDef_get_localAxisA_0 = function () {
                  return (Gc = i._emscripten_bind_b2WheelJointDef_get_localAxisA_0 =
                    i.asm.ci).apply(null, arguments);
                }),
                Cc = (i._emscripten_bind_b2WheelJointDef_set_localAxisA_1 = function () {
                  return (Cc = i._emscripten_bind_b2WheelJointDef_set_localAxisA_1 =
                    i.asm.di).apply(null, arguments);
                }),
                Pc = (i._emscripten_bind_b2WheelJointDef_get_enableMotor_0 = function () {
                  return (Pc = i._emscripten_bind_b2WheelJointDef_get_enableMotor_0 =
                    i.asm.ei).apply(null, arguments);
                }),
                Rc = (i._emscripten_bind_b2WheelJointDef_set_enableMotor_1 = function () {
                  return (Rc = i._emscripten_bind_b2WheelJointDef_set_enableMotor_1 =
                    i.asm.fi).apply(null, arguments);
                }),
                Mc = (i._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0 = function () {
                  return (Mc = i._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0 =
                    i.asm.gi).apply(null, arguments);
                }),
                Tc = (i._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1 = function () {
                  return (Tc = i._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1 =
                    i.asm.hi).apply(null, arguments);
                }),
                Fc = (i._emscripten_bind_b2WheelJointDef_get_motorSpeed_0 = function () {
                  return (Fc = i._emscripten_bind_b2WheelJointDef_get_motorSpeed_0 =
                    i.asm.ii).apply(null, arguments);
                }),
                Lc = (i._emscripten_bind_b2WheelJointDef_set_motorSpeed_1 = function () {
                  return (Lc = i._emscripten_bind_b2WheelJointDef_set_motorSpeed_1 =
                    i.asm.ji).apply(null, arguments);
                }),
                Ic = (i._emscripten_bind_b2WheelJointDef_get_frequencyHz_0 = function () {
                  return (Ic = i._emscripten_bind_b2WheelJointDef_get_frequencyHz_0 =
                    i.asm.ki).apply(null, arguments);
                }),
                Wc = (i._emscripten_bind_b2WheelJointDef_set_frequencyHz_1 = function () {
                  return (Wc = i._emscripten_bind_b2WheelJointDef_set_frequencyHz_1 =
                    i.asm.li).apply(null, arguments);
                }),
                Oc = (i._emscripten_bind_b2WheelJointDef_get_dampingRatio_0 = function () {
                  return (Oc = i._emscripten_bind_b2WheelJointDef_get_dampingRatio_0 =
                    i.asm.mi).apply(null, arguments);
                }),
                Vc = (i._emscripten_bind_b2WheelJointDef_set_dampingRatio_1 = function () {
                  return (Vc = i._emscripten_bind_b2WheelJointDef_set_dampingRatio_1 =
                    i.asm.ni).apply(null, arguments);
                }),
                Ec = (i._emscripten_bind_b2WheelJointDef_get_type_0 = function () {
                  return (Ec = i._emscripten_bind_b2WheelJointDef_get_type_0 = i.asm.oi).apply(
                    null,
                    arguments,
                  );
                }),
                qc = (i._emscripten_bind_b2WheelJointDef_set_type_1 = function () {
                  return (qc = i._emscripten_bind_b2WheelJointDef_set_type_1 = i.asm.pi).apply(
                    null,
                    arguments,
                  );
                }),
                kc = (i._emscripten_bind_b2WheelJointDef_get_userData_0 = function () {
                  return (kc = i._emscripten_bind_b2WheelJointDef_get_userData_0 = i.asm.qi).apply(
                    null,
                    arguments,
                  );
                }),
                Nc = (i._emscripten_bind_b2WheelJointDef_set_userData_1 = function () {
                  return (Nc = i._emscripten_bind_b2WheelJointDef_set_userData_1 = i.asm.ri).apply(
                    null,
                    arguments,
                  );
                }),
                Xc = (i._emscripten_bind_b2WheelJointDef_get_bodyA_0 = function () {
                  return (Xc = i._emscripten_bind_b2WheelJointDef_get_bodyA_0 = i.asm.si).apply(
                    null,
                    arguments,
                  );
                }),
                Hc = (i._emscripten_bind_b2WheelJointDef_set_bodyA_1 = function () {
                  return (Hc = i._emscripten_bind_b2WheelJointDef_set_bodyA_1 = i.asm.ti).apply(
                    null,
                    arguments,
                  );
                }),
                zc = (i._emscripten_bind_b2WheelJointDef_get_bodyB_0 = function () {
                  return (zc = i._emscripten_bind_b2WheelJointDef_get_bodyB_0 = i.asm.ui).apply(
                    null,
                    arguments,
                  );
                }),
                Qc = (i._emscripten_bind_b2WheelJointDef_set_bodyB_1 = function () {
                  return (Qc = i._emscripten_bind_b2WheelJointDef_set_bodyB_1 = i.asm.vi).apply(
                    null,
                    arguments,
                  );
                }),
                Zc = (i._emscripten_bind_b2WheelJointDef_get_collideConnected_0 = function () {
                  return (Zc = i._emscripten_bind_b2WheelJointDef_get_collideConnected_0 =
                    i.asm.wi).apply(null, arguments);
                }),
                Yc = (i._emscripten_bind_b2WheelJointDef_set_collideConnected_1 = function () {
                  return (Yc = i._emscripten_bind_b2WheelJointDef_set_collideConnected_1 =
                    i.asm.xi).apply(null, arguments);
                }),
                Kc = (i._emscripten_bind_b2WheelJointDef___destroy___0 = function () {
                  return (Kc = i._emscripten_bind_b2WheelJointDef___destroy___0 = i.asm.yi).apply(
                    null,
                    arguments,
                  );
                }),
                $c = (i._emscripten_bind_b2CircleShape_b2CircleShape_0 = function () {
                  return ($c = i._emscripten_bind_b2CircleShape_b2CircleShape_0 = i.asm.zi).apply(
                    null,
                    arguments,
                  );
                }),
                tu = (i._emscripten_bind_b2CircleShape_GetType_0 = function () {
                  return (tu = i._emscripten_bind_b2CircleShape_GetType_0 = i.asm.Ai).apply(
                    null,
                    arguments,
                  );
                }),
                eu = (i._emscripten_bind_b2CircleShape_GetChildCount_0 = function () {
                  return (eu = i._emscripten_bind_b2CircleShape_GetChildCount_0 = i.asm.Bi).apply(
                    null,
                    arguments,
                  );
                }),
                nu = (i._emscripten_bind_b2CircleShape_TestPoint_2 = function () {
                  return (nu = i._emscripten_bind_b2CircleShape_TestPoint_2 = i.asm.Ci).apply(
                    null,
                    arguments,
                  );
                }),
                ou = (i._emscripten_bind_b2CircleShape_RayCast_4 = function () {
                  return (ou = i._emscripten_bind_b2CircleShape_RayCast_4 = i.asm.Di).apply(
                    null,
                    arguments,
                  );
                }),
                iu = (i._emscripten_bind_b2CircleShape_ComputeAABB_3 = function () {
                  return (iu = i._emscripten_bind_b2CircleShape_ComputeAABB_3 = i.asm.Ei).apply(
                    null,
                    arguments,
                  );
                }),
                _u = (i._emscripten_bind_b2CircleShape_ComputeMass_2 = function () {
                  return (_u = i._emscripten_bind_b2CircleShape_ComputeMass_2 = i.asm.Fi).apply(
                    null,
                    arguments,
                  );
                }),
                ru = (i._emscripten_bind_b2CircleShape_get_m_p_0 = function () {
                  return (ru = i._emscripten_bind_b2CircleShape_get_m_p_0 = i.asm.Gi).apply(
                    null,
                    arguments,
                  );
                }),
                pu = (i._emscripten_bind_b2CircleShape_set_m_p_1 = function () {
                  return (pu = i._emscripten_bind_b2CircleShape_set_m_p_1 = i.asm.Hi).apply(
                    null,
                    arguments,
                  );
                }),
                su = (i._emscripten_bind_b2CircleShape_get_m_type_0 = function () {
                  return (su = i._emscripten_bind_b2CircleShape_get_m_type_0 = i.asm.Ii).apply(
                    null,
                    arguments,
                  );
                }),
                cu = (i._emscripten_bind_b2CircleShape_set_m_type_1 = function () {
                  return (cu = i._emscripten_bind_b2CircleShape_set_m_type_1 = i.asm.Ji).apply(
                    null,
                    arguments,
                  );
                }),
                uu = (i._emscripten_bind_b2CircleShape_get_m_radius_0 = function () {
                  return (uu = i._emscripten_bind_b2CircleShape_get_m_radius_0 = i.asm.Ki).apply(
                    null,
                    arguments,
                  );
                }),
                au = (i._emscripten_bind_b2CircleShape_set_m_radius_1 = function () {
                  return (au = i._emscripten_bind_b2CircleShape_set_m_radius_1 = i.asm.Li).apply(
                    null,
                    arguments,
                  );
                }),
                lu = (i._emscripten_bind_b2CircleShape___destroy___0 = function () {
                  return (lu = i._emscripten_bind_b2CircleShape___destroy___0 = i.asm.Mi).apply(
                    null,
                    arguments,
                  );
                }),
                yu = (i._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0 = function () {
                  return (yu = i._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0 = i.asm.Ni).apply(
                    null,
                    arguments,
                  );
                }),
                bu = (i._emscripten_bind_b2WeldJointDef_Initialize_3 = function () {
                  return (bu = i._emscripten_bind_b2WeldJointDef_Initialize_3 = i.asm.Oi).apply(
                    null,
                    arguments,
                  );
                }),
                du = (i._emscripten_bind_b2WeldJointDef_get_localAnchorA_0 = function () {
                  return (du = i._emscripten_bind_b2WeldJointDef_get_localAnchorA_0 =
                    i.asm.Pi).apply(null, arguments);
                }),
                mu = (i._emscripten_bind_b2WeldJointDef_set_localAnchorA_1 = function () {
                  return (mu = i._emscripten_bind_b2WeldJointDef_set_localAnchorA_1 =
                    i.asm.Qi).apply(null, arguments);
                }),
                fu = (i._emscripten_bind_b2WeldJointDef_get_localAnchorB_0 = function () {
                  return (fu = i._emscripten_bind_b2WeldJointDef_get_localAnchorB_0 =
                    i.asm.Ri).apply(null, arguments);
                }),
                hu = (i._emscripten_bind_b2WeldJointDef_set_localAnchorB_1 = function () {
                  return (hu = i._emscripten_bind_b2WeldJointDef_set_localAnchorB_1 =
                    i.asm.Si).apply(null, arguments);
                }),
                gu = (i._emscripten_bind_b2WeldJointDef_get_referenceAngle_0 = function () {
                  return (gu = i._emscripten_bind_b2WeldJointDef_get_referenceAngle_0 =
                    i.asm.Ti).apply(null, arguments);
                }),
                Uu = (i._emscripten_bind_b2WeldJointDef_set_referenceAngle_1 = function () {
                  return (Uu = i._emscripten_bind_b2WeldJointDef_set_referenceAngle_1 =
                    i.asm.Ui).apply(null, arguments);
                }),
                wu = (i._emscripten_bind_b2WeldJointDef_get_frequencyHz_0 = function () {
                  return (wu = i._emscripten_bind_b2WeldJointDef_get_frequencyHz_0 =
                    i.asm.Vi).apply(null, arguments);
                }),
                Ju = (i._emscripten_bind_b2WeldJointDef_set_frequencyHz_1 = function () {
                  return (Ju = i._emscripten_bind_b2WeldJointDef_set_frequencyHz_1 =
                    i.asm.Wi).apply(null, arguments);
                }),
                Du = (i._emscripten_bind_b2WeldJointDef_get_dampingRatio_0 = function () {
                  return (Du = i._emscripten_bind_b2WeldJointDef_get_dampingRatio_0 =
                    i.asm.Xi).apply(null, arguments);
                }),
                vu = (i._emscripten_bind_b2WeldJointDef_set_dampingRatio_1 = function () {
                  return (vu = i._emscripten_bind_b2WeldJointDef_set_dampingRatio_1 =
                    i.asm.Yi).apply(null, arguments);
                }),
                Su = (i._emscripten_bind_b2WeldJointDef_get_type_0 = function () {
                  return (Su = i._emscripten_bind_b2WeldJointDef_get_type_0 = i.asm.Zi).apply(
                    null,
                    arguments,
                  );
                }),
                Au = (i._emscripten_bind_b2WeldJointDef_set_type_1 = function () {
                  return (Au = i._emscripten_bind_b2WeldJointDef_set_type_1 = i.asm._i).apply(
                    null,
                    arguments,
                  );
                }),
                xu = (i._emscripten_bind_b2WeldJointDef_get_userData_0 = function () {
                  return (xu = i._emscripten_bind_b2WeldJointDef_get_userData_0 = i.asm.$i).apply(
                    null,
                    arguments,
                  );
                }),
                Bu = (i._emscripten_bind_b2WeldJointDef_set_userData_1 = function () {
                  return (Bu = i._emscripten_bind_b2WeldJointDef_set_userData_1 = i.asm.aj).apply(
                    null,
                    arguments,
                  );
                }),
                ju = (i._emscripten_bind_b2WeldJointDef_get_bodyA_0 = function () {
                  return (ju = i._emscripten_bind_b2WeldJointDef_get_bodyA_0 = i.asm.bj).apply(
                    null,
                    arguments,
                  );
                }),
                Gu = (i._emscripten_bind_b2WeldJointDef_set_bodyA_1 = function () {
                  return (Gu = i._emscripten_bind_b2WeldJointDef_set_bodyA_1 = i.asm.cj).apply(
                    null,
                    arguments,
                  );
                }),
                Cu = (i._emscripten_bind_b2WeldJointDef_get_bodyB_0 = function () {
                  return (Cu = i._emscripten_bind_b2WeldJointDef_get_bodyB_0 = i.asm.dj).apply(
                    null,
                    arguments,
                  );
                }),
                Pu = (i._emscripten_bind_b2WeldJointDef_set_bodyB_1 = function () {
                  return (Pu = i._emscripten_bind_b2WeldJointDef_set_bodyB_1 = i.asm.ej).apply(
                    null,
                    arguments,
                  );
                }),
                Ru = (i._emscripten_bind_b2WeldJointDef_get_collideConnected_0 = function () {
                  return (Ru = i._emscripten_bind_b2WeldJointDef_get_collideConnected_0 =
                    i.asm.fj).apply(null, arguments);
                }),
                Mu = (i._emscripten_bind_b2WeldJointDef_set_collideConnected_1 = function () {
                  return (Mu = i._emscripten_bind_b2WeldJointDef_set_collideConnected_1 =
                    i.asm.gj).apply(null, arguments);
                }),
                Tu = (i._emscripten_bind_b2WeldJointDef___destroy___0 = function () {
                  return (Tu = i._emscripten_bind_b2WeldJointDef___destroy___0 = i.asm.hj).apply(
                    null,
                    arguments,
                  );
                }),
                Fu = (i._emscripten_bind_b2MassData_b2MassData_0 = function () {
                  return (Fu = i._emscripten_bind_b2MassData_b2MassData_0 = i.asm.ij).apply(
                    null,
                    arguments,
                  );
                }),
                Lu = (i._emscripten_bind_b2MassData_get_mass_0 = function () {
                  return (Lu = i._emscripten_bind_b2MassData_get_mass_0 = i.asm.jj).apply(
                    null,
                    arguments,
                  );
                }),
                Iu = (i._emscripten_bind_b2MassData_set_mass_1 = function () {
                  return (Iu = i._emscripten_bind_b2MassData_set_mass_1 = i.asm.kj).apply(
                    null,
                    arguments,
                  );
                }),
                Wu = (i._emscripten_bind_b2MassData_get_center_0 = function () {
                  return (Wu = i._emscripten_bind_b2MassData_get_center_0 = i.asm.lj).apply(
                    null,
                    arguments,
                  );
                }),
                Ou = (i._emscripten_bind_b2MassData_set_center_1 = function () {
                  return (Ou = i._emscripten_bind_b2MassData_set_center_1 = i.asm.mj).apply(
                    null,
                    arguments,
                  );
                }),
                Vu = (i._emscripten_bind_b2MassData_get_I_0 = function () {
                  return (Vu = i._emscripten_bind_b2MassData_get_I_0 = i.asm.nj).apply(
                    null,
                    arguments,
                  );
                }),
                Eu = (i._emscripten_bind_b2MassData_set_I_1 = function () {
                  return (Eu = i._emscripten_bind_b2MassData_set_I_1 = i.asm.oj).apply(
                    null,
                    arguments,
                  );
                }),
                qu = (i._emscripten_bind_b2MassData___destroy___0 = function () {
                  return (qu = i._emscripten_bind_b2MassData___destroy___0 = i.asm.pj).apply(
                    null,
                    arguments,
                  );
                }),
                ku = (i._emscripten_bind_b2GearJoint_GetJoint1_0 = function () {
                  return (ku = i._emscripten_bind_b2GearJoint_GetJoint1_0 = i.asm.qj).apply(
                    null,
                    arguments,
                  );
                }),
                Nu = (i._emscripten_bind_b2GearJoint_GetJoint2_0 = function () {
                  return (Nu = i._emscripten_bind_b2GearJoint_GetJoint2_0 = i.asm.rj).apply(
                    null,
                    arguments,
                  );
                }),
                Xu = (i._emscripten_bind_b2GearJoint_SetRatio_1 = function () {
                  return (Xu = i._emscripten_bind_b2GearJoint_SetRatio_1 = i.asm.sj).apply(
                    null,
                    arguments,
                  );
                }),
                Hu = (i._emscripten_bind_b2GearJoint_GetRatio_0 = function () {
                  return (Hu = i._emscripten_bind_b2GearJoint_GetRatio_0 = i.asm.tj).apply(
                    null,
                    arguments,
                  );
                }),
                zu = (i._emscripten_bind_b2GearJoint_GetType_0 = function () {
                  return (zu = i._emscripten_bind_b2GearJoint_GetType_0 = i.asm.uj).apply(
                    null,
                    arguments,
                  );
                }),
                Qu = (i._emscripten_bind_b2GearJoint_GetBodyA_0 = function () {
                  return (Qu = i._emscripten_bind_b2GearJoint_GetBodyA_0 = i.asm.vj).apply(
                    null,
                    arguments,
                  );
                }),
                Zu = (i._emscripten_bind_b2GearJoint_GetBodyB_0 = function () {
                  return (Zu = i._emscripten_bind_b2GearJoint_GetBodyB_0 = i.asm.wj).apply(
                    null,
                    arguments,
                  );
                }),
                Yu = (i._emscripten_bind_b2GearJoint_GetAnchorA_0 = function () {
                  return (Yu = i._emscripten_bind_b2GearJoint_GetAnchorA_0 = i.asm.xj).apply(
                    null,
                    arguments,
                  );
                }),
                Ku = (i._emscripten_bind_b2GearJoint_GetAnchorB_0 = function () {
                  return (Ku = i._emscripten_bind_b2GearJoint_GetAnchorB_0 = i.asm.yj).apply(
                    null,
                    arguments,
                  );
                }),
                $u = (i._emscripten_bind_b2GearJoint_GetReactionForce_1 = function () {
                  return ($u = i._emscripten_bind_b2GearJoint_GetReactionForce_1 = i.asm.zj).apply(
                    null,
                    arguments,
                  );
                }),
                ta = (i._emscripten_bind_b2GearJoint_GetReactionTorque_1 = function () {
                  return (ta = i._emscripten_bind_b2GearJoint_GetReactionTorque_1 = i.asm.Aj).apply(
                    null,
                    arguments,
                  );
                }),
                ea = (i._emscripten_bind_b2GearJoint_GetNext_0 = function () {
                  return (ea = i._emscripten_bind_b2GearJoint_GetNext_0 = i.asm.Bj).apply(
                    null,
                    arguments,
                  );
                }),
                oa = (i._emscripten_bind_b2GearJoint_GetUserData_0 = function () {
                  return (oa = i._emscripten_bind_b2GearJoint_GetUserData_0 = i.asm.Cj).apply(
                    null,
                    arguments,
                  );
                }),
                ia = (i._emscripten_bind_b2GearJoint_SetUserData_1 = function () {
                  return (ia = i._emscripten_bind_b2GearJoint_SetUserData_1 = i.asm.Dj).apply(
                    null,
                    arguments,
                  );
                }),
                _a = (i._emscripten_bind_b2GearJoint_IsActive_0 = function () {
                  return (_a = i._emscripten_bind_b2GearJoint_IsActive_0 = i.asm.Ej).apply(
                    null,
                    arguments,
                  );
                }),
                ra = (i._emscripten_bind_b2GearJoint_GetCollideConnected_0 = function () {
                  return (ra = i._emscripten_bind_b2GearJoint_GetCollideConnected_0 =
                    i.asm.Fj).apply(null, arguments);
                }),
                pa = (i._emscripten_bind_b2GearJoint___destroy___0 = function () {
                  return (pa = i._emscripten_bind_b2GearJoint___destroy___0 = i.asm.Gj).apply(
                    null,
                    arguments,
                  );
                }),
                sa = (i._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0 = function () {
                  return (sa = i._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0 = i.asm.Hj).apply(
                    null,
                    arguments,
                  );
                }),
                ca = (i._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0 = function () {
                  return (ca = i._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0 = i.asm.Ij).apply(
                    null,
                    arguments,
                  );
                }),
                ua = (i._emscripten_bind_b2WeldJoint_SetFrequency_1 = function () {
                  return (ua = i._emscripten_bind_b2WeldJoint_SetFrequency_1 = i.asm.Jj).apply(
                    null,
                    arguments,
                  );
                }),
                aa = (i._emscripten_bind_b2WeldJoint_GetFrequency_0 = function () {
                  return (aa = i._emscripten_bind_b2WeldJoint_GetFrequency_0 = i.asm.Kj).apply(
                    null,
                    arguments,
                  );
                }),
                la = (i._emscripten_bind_b2WeldJoint_SetDampingRatio_1 = function () {
                  return (la = i._emscripten_bind_b2WeldJoint_SetDampingRatio_1 = i.asm.Lj).apply(
                    null,
                    arguments,
                  );
                }),
                ya = (i._emscripten_bind_b2WeldJoint_GetDampingRatio_0 = function () {
                  return (ya = i._emscripten_bind_b2WeldJoint_GetDampingRatio_0 = i.asm.Mj).apply(
                    null,
                    arguments,
                  );
                }),
                ba = (i._emscripten_bind_b2WeldJoint_Dump_0 = function () {
                  return (ba = i._emscripten_bind_b2WeldJoint_Dump_0 = i.asm.Nj).apply(
                    null,
                    arguments,
                  );
                }),
                da = (i._emscripten_bind_b2WeldJoint_GetType_0 = function () {
                  return (da = i._emscripten_bind_b2WeldJoint_GetType_0 = i.asm.Oj).apply(
                    null,
                    arguments,
                  );
                }),
                ma = (i._emscripten_bind_b2WeldJoint_GetBodyA_0 = function () {
                  return (ma = i._emscripten_bind_b2WeldJoint_GetBodyA_0 = i.asm.Pj).apply(
                    null,
                    arguments,
                  );
                }),
                fa = (i._emscripten_bind_b2WeldJoint_GetBodyB_0 = function () {
                  return (fa = i._emscripten_bind_b2WeldJoint_GetBodyB_0 = i.asm.Qj).apply(
                    null,
                    arguments,
                  );
                }),
                ha = (i._emscripten_bind_b2WeldJoint_GetAnchorA_0 = function () {
                  return (ha = i._emscripten_bind_b2WeldJoint_GetAnchorA_0 = i.asm.Rj).apply(
                    null,
                    arguments,
                  );
                }),
                ga = (i._emscripten_bind_b2WeldJoint_GetAnchorB_0 = function () {
                  return (ga = i._emscripten_bind_b2WeldJoint_GetAnchorB_0 = i.asm.Sj).apply(
                    null,
                    arguments,
                  );
                }),
                Ua = (i._emscripten_bind_b2WeldJoint_GetReactionForce_1 = function () {
                  return (Ua = i._emscripten_bind_b2WeldJoint_GetReactionForce_1 = i.asm.Tj).apply(
                    null,
                    arguments,
                  );
                }),
                Ja = (i._emscripten_bind_b2WeldJoint_GetReactionTorque_1 = function () {
                  return (Ja = i._emscripten_bind_b2WeldJoint_GetReactionTorque_1 = i.asm.Uj).apply(
                    null,
                    arguments,
                  );
                }),
                va = (i._emscripten_bind_b2WeldJoint_GetNext_0 = function () {
                  return (va = i._emscripten_bind_b2WeldJoint_GetNext_0 = i.asm.Vj).apply(
                    null,
                    arguments,
                  );
                }),
                Sa = (i._emscripten_bind_b2WeldJoint_GetUserData_0 = function () {
                  return (Sa = i._emscripten_bind_b2WeldJoint_GetUserData_0 = i.asm.Wj).apply(
                    null,
                    arguments,
                  );
                }),
                Aa = (i._emscripten_bind_b2WeldJoint_SetUserData_1 = function () {
                  return (Aa = i._emscripten_bind_b2WeldJoint_SetUserData_1 = i.asm.Xj).apply(
                    null,
                    arguments,
                  );
                }),
                Ba = (i._emscripten_bind_b2WeldJoint_IsActive_0 = function () {
                  return (Ba = i._emscripten_bind_b2WeldJoint_IsActive_0 = i.asm.Yj).apply(
                    null,
                    arguments,
                  );
                }),
                ja = (i._emscripten_bind_b2WeldJoint_GetCollideConnected_0 = function () {
                  return (ja = i._emscripten_bind_b2WeldJoint_GetCollideConnected_0 =
                    i.asm.Zj).apply(null, arguments);
                }),
                Ga = (i._emscripten_bind_b2WeldJoint___destroy___0 = function () {
                  return (Ga = i._emscripten_bind_b2WeldJoint___destroy___0 = i.asm._j).apply(
                    null,
                    arguments,
                  );
                }),
                Ca = (i._emscripten_bind_b2JointEdge_b2JointEdge_0 = function () {
                  return (Ca = i._emscripten_bind_b2JointEdge_b2JointEdge_0 = i.asm.$j).apply(
                    null,
                    arguments,
                  );
                }),
                Ma = (i._emscripten_bind_b2JointEdge_get_other_0 = function () {
                  return (Ma = i._emscripten_bind_b2JointEdge_get_other_0 = i.asm.ak).apply(
                    null,
                    arguments,
                  );
                }),
                Ia = (i._emscripten_bind_b2JointEdge_set_other_1 = function () {
                  return (Ia = i._emscripten_bind_b2JointEdge_set_other_1 = i.asm.bk).apply(
                    null,
                    arguments,
                  );
                }),
                Wa = (i._emscripten_bind_b2JointEdge_get_joint_0 = function () {
                  return (Wa = i._emscripten_bind_b2JointEdge_get_joint_0 = i.asm.ck).apply(
                    null,
                    arguments,
                  );
                }),
                Oa = (i._emscripten_bind_b2JointEdge_set_joint_1 = function () {
                  return (Oa = i._emscripten_bind_b2JointEdge_set_joint_1 = i.asm.dk).apply(
                    null,
                    arguments,
                  );
                }),
                Va = (i._emscripten_bind_b2JointEdge_get_prev_0 = function () {
                  return (Va = i._emscripten_bind_b2JointEdge_get_prev_0 = i.asm.ek).apply(
                    null,
                    arguments,
                  );
                }),
                Ea = (i._emscripten_bind_b2JointEdge_set_prev_1 = function () {
                  return (Ea = i._emscripten_bind_b2JointEdge_set_prev_1 = i.asm.fk).apply(
                    null,
                    arguments,
                  );
                }),
                qa = (i._emscripten_bind_b2JointEdge_get_next_0 = function () {
                  return (qa = i._emscripten_bind_b2JointEdge_get_next_0 = i.asm.gk).apply(
                    null,
                    arguments,
                  );
                }),
                ka = (i._emscripten_bind_b2JointEdge_set_next_1 = function () {
                  return (ka = i._emscripten_bind_b2JointEdge_set_next_1 = i.asm.hk).apply(
                    null,
                    arguments,
                  );
                }),
                Na = (i._emscripten_bind_b2JointEdge___destroy___0 = function () {
                  return (Na = i._emscripten_bind_b2JointEdge___destroy___0 = i.asm.ik).apply(
                    null,
                    arguments,
                  );
                }),
                Xa = (i._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0 = function () {
                  return (Xa = i._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0 =
                    i.asm.jk).apply(null, arguments);
                }),
                Ha = (i._emscripten_bind_b2PulleyJointDef_Initialize_7 = function () {
                  return (Ha = i._emscripten_bind_b2PulleyJointDef_Initialize_7 = i.asm.kk).apply(
                    null,
                    arguments,
                  );
                }),
                za = (i._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0 = function () {
                  return (za = i._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0 =
                    i.asm.lk).apply(null, arguments);
                }),
                Qa = (i._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1 = function () {
                  return (Qa = i._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1 =
                    i.asm.mk).apply(null, arguments);
                }),
                Za = (i._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0 = function () {
                  return (Za = i._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0 =
                    i.asm.nk).apply(null, arguments);
                }),
                Ka = (i._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1 = function () {
                  return (Ka = i._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1 =
                    i.asm.ok).apply(null, arguments);
                }),
                $a = (i._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0 = function () {
                  return ($a = i._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0 =
                    i.asm.pk).apply(null, arguments);
                }),
                tl = (i._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1 = function () {
                  return (tl = i._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1 =
                    i.asm.qk).apply(null, arguments);
                }),
                el = (i._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0 = function () {
                  return (el = i._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0 =
                    i.asm.rk).apply(null, arguments);
                }),
                nl = (i._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1 = function () {
                  return (nl = i._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1 =
                    i.asm.sk).apply(null, arguments);
                }),
                ol = (i._emscripten_bind_b2PulleyJointDef_get_lengthA_0 = function () {
                  return (ol = i._emscripten_bind_b2PulleyJointDef_get_lengthA_0 = i.asm.tk).apply(
                    null,
                    arguments,
                  );
                }),
                il = (i._emscripten_bind_b2PulleyJointDef_set_lengthA_1 = function () {
                  return (il = i._emscripten_bind_b2PulleyJointDef_set_lengthA_1 = i.asm.uk).apply(
                    null,
                    arguments,
                  );
                }),
                _l = (i._emscripten_bind_b2PulleyJointDef_get_lengthB_0 = function () {
                  return (_l = i._emscripten_bind_b2PulleyJointDef_get_lengthB_0 = i.asm.vk).apply(
                    null,
                    arguments,
                  );
                }),
                rl = (i._emscripten_bind_b2PulleyJointDef_set_lengthB_1 = function () {
                  return (rl = i._emscripten_bind_b2PulleyJointDef_set_lengthB_1 = i.asm.wk).apply(
                    null,
                    arguments,
                  );
                }),
                pl = (i._emscripten_bind_b2PulleyJointDef_get_ratio_0 = function () {
                  return (pl = i._emscripten_bind_b2PulleyJointDef_get_ratio_0 = i.asm.xk).apply(
                    null,
                    arguments,
                  );
                }),
                sl = (i._emscripten_bind_b2PulleyJointDef_set_ratio_1 = function () {
                  return (sl = i._emscripten_bind_b2PulleyJointDef_set_ratio_1 = i.asm.yk).apply(
                    null,
                    arguments,
                  );
                }),
                cl = (i._emscripten_bind_b2PulleyJointDef_get_type_0 = function () {
                  return (cl = i._emscripten_bind_b2PulleyJointDef_get_type_0 = i.asm.zk).apply(
                    null,
                    arguments,
                  );
                }),
                ul = (i._emscripten_bind_b2PulleyJointDef_set_type_1 = function () {
                  return (ul = i._emscripten_bind_b2PulleyJointDef_set_type_1 = i.asm.Ak).apply(
                    null,
                    arguments,
                  );
                }),
                al = (i._emscripten_bind_b2PulleyJointDef_get_userData_0 = function () {
                  return (al = i._emscripten_bind_b2PulleyJointDef_get_userData_0 = i.asm.Bk).apply(
                    null,
                    arguments,
                  );
                }),
                ll = (i._emscripten_bind_b2PulleyJointDef_set_userData_1 = function () {
                  return (ll = i._emscripten_bind_b2PulleyJointDef_set_userData_1 = i.asm.Ck).apply(
                    null,
                    arguments,
                  );
                }),
                yl = (i._emscripten_bind_b2PulleyJointDef_get_bodyA_0 = function () {
                  return (yl = i._emscripten_bind_b2PulleyJointDef_get_bodyA_0 = i.asm.Dk).apply(
                    null,
                    arguments,
                  );
                }),
                bl = (i._emscripten_bind_b2PulleyJointDef_set_bodyA_1 = function () {
                  return (bl = i._emscripten_bind_b2PulleyJointDef_set_bodyA_1 = i.asm.Ek).apply(
                    null,
                    arguments,
                  );
                }),
                dl = (i._emscripten_bind_b2PulleyJointDef_get_bodyB_0 = function () {
                  return (dl = i._emscripten_bind_b2PulleyJointDef_get_bodyB_0 = i.asm.Fk).apply(
                    null,
                    arguments,
                  );
                }),
                ml = (i._emscripten_bind_b2PulleyJointDef_set_bodyB_1 = function () {
                  return (ml = i._emscripten_bind_b2PulleyJointDef_set_bodyB_1 = i.asm.Gk).apply(
                    null,
                    arguments,
                  );
                }),
                fl = (i._emscripten_bind_b2PulleyJointDef_get_collideConnected_0 = function () {
                  return (fl = i._emscripten_bind_b2PulleyJointDef_get_collideConnected_0 =
                    i.asm.Hk).apply(null, arguments);
                }),
                hl = (i._emscripten_bind_b2PulleyJointDef_set_collideConnected_1 = function () {
                  return (hl = i._emscripten_bind_b2PulleyJointDef_set_collideConnected_1 =
                    i.asm.Ik).apply(null, arguments);
                }),
                gl = (i._emscripten_bind_b2PulleyJointDef___destroy___0 = function () {
                  return (gl = i._emscripten_bind_b2PulleyJointDef___destroy___0 = i.asm.Jk).apply(
                    null,
                    arguments,
                  );
                }),
                Ul = (i._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0 = function () {
                  return (Ul = i._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0 =
                    i.asm.Kk).apply(null, arguments);
                }),
                wl = (i._emscripten_bind_b2ManifoldPoint_get_localPoint_0 = function () {
                  return (wl = i._emscripten_bind_b2ManifoldPoint_get_localPoint_0 =
                    i.asm.Lk).apply(null, arguments);
                }),
                Jl = (i._emscripten_bind_b2ManifoldPoint_set_localPoint_1 = function () {
                  return (Jl = i._emscripten_bind_b2ManifoldPoint_set_localPoint_1 =
                    i.asm.Mk).apply(null, arguments);
                }),
                Dl = (i._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0 = function () {
                  return (Dl = i._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0 =
                    i.asm.Nk).apply(null, arguments);
                }),
                vl = (i._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1 = function () {
                  return (vl = i._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1 =
                    i.asm.Ok).apply(null, arguments);
                }),
                Sl = (i._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0 = function () {
                  return (Sl = i._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0 =
                    i.asm.Pk).apply(null, arguments);
                }),
                Al = (i._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1 = function () {
                  return (Al = i._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1 =
                    i.asm.Qk).apply(null, arguments);
                }),
                xl = (i._emscripten_bind_b2ManifoldPoint_get_id_0 = function () {
                  return (xl = i._emscripten_bind_b2ManifoldPoint_get_id_0 = i.asm.Rk).apply(
                    null,
                    arguments,
                  );
                }),
                Bl = (i._emscripten_bind_b2ManifoldPoint_set_id_1 = function () {
                  return (Bl = i._emscripten_bind_b2ManifoldPoint_set_id_1 = i.asm.Sk).apply(
                    null,
                    arguments,
                  );
                }),
                jl = (i._emscripten_bind_b2ManifoldPoint___destroy___0 = function () {
                  return (jl = i._emscripten_bind_b2ManifoldPoint___destroy___0 = i.asm.Tk).apply(
                    null,
                    arguments,
                  );
                }),
                Gl = (i._emscripten_bind_b2Transform_b2Transform_0 = function () {
                  return (Gl = i._emscripten_bind_b2Transform_b2Transform_0 = i.asm.Uk).apply(
                    null,
                    arguments,
                  );
                }),
                Cl = (i._emscripten_bind_b2Transform_b2Transform_2 = function () {
                  return (Cl = i._emscripten_bind_b2Transform_b2Transform_2 = i.asm.Vk).apply(
                    null,
                    arguments,
                  );
                }),
                Pl = (i._emscripten_bind_b2Transform_SetIdentity_0 = function () {
                  return (Pl = i._emscripten_bind_b2Transform_SetIdentity_0 = i.asm.Wk).apply(
                    null,
                    arguments,
                  );
                }),
                Rl = (i._emscripten_bind_b2Transform_Set_2 = function () {
                  return (Rl = i._emscripten_bind_b2Transform_Set_2 = i.asm.Xk).apply(
                    null,
                    arguments,
                  );
                }),
                Ml = (i._emscripten_bind_b2Transform_get_p_0 = function () {
                  return (Ml = i._emscripten_bind_b2Transform_get_p_0 = i.asm.Yk).apply(
                    null,
                    arguments,
                  );
                }),
                Tl = (i._emscripten_bind_b2Transform_set_p_1 = function () {
                  return (Tl = i._emscripten_bind_b2Transform_set_p_1 = i.asm.Zk).apply(
                    null,
                    arguments,
                  );
                }),
                Fl = (i._emscripten_bind_b2Transform_get_q_0 = function () {
                  return (Fl = i._emscripten_bind_b2Transform_get_q_0 = i.asm._k).apply(
                    null,
                    arguments,
                  );
                }),
                Ll = (i._emscripten_bind_b2Transform_set_q_1 = function () {
                  return (Ll = i._emscripten_bind_b2Transform_set_q_1 = i.asm.$k).apply(
                    null,
                    arguments,
                  );
                }),
                Il = (i._emscripten_bind_b2Transform___destroy___0 = function () {
                  return (Il = i._emscripten_bind_b2Transform___destroy___0 = i.asm.al).apply(
                    null,
                    arguments,
                  );
                }),
                Wl = (i._emscripten_bind_b2ChainShape_b2ChainShape_0 = function () {
                  return (Wl = i._emscripten_bind_b2ChainShape_b2ChainShape_0 = i.asm.bl).apply(
                    null,
                    arguments,
                  );
                }),
                Ol = (i._emscripten_bind_b2ChainShape_Clear_0 = function () {
                  return (Ol = i._emscripten_bind_b2ChainShape_Clear_0 = i.asm.cl).apply(
                    null,
                    arguments,
                  );
                }),
                Vl = (i._emscripten_bind_b2ChainShape_CreateLoop_2 = function () {
                  return (Vl = i._emscripten_bind_b2ChainShape_CreateLoop_2 = i.asm.dl).apply(
                    null,
                    arguments,
                  );
                }),
                El = (i._emscripten_bind_b2ChainShape_CreateChain_2 = function () {
                  return (El = i._emscripten_bind_b2ChainShape_CreateChain_2 = i.asm.el).apply(
                    null,
                    arguments,
                  );
                }),
                ql = (i._emscripten_bind_b2ChainShape_SetPrevVertex_1 = function () {
                  return (ql = i._emscripten_bind_b2ChainShape_SetPrevVertex_1 = i.asm.fl).apply(
                    null,
                    arguments,
                  );
                }),
                kl = (i._emscripten_bind_b2ChainShape_SetNextVertex_1 = function () {
                  return (kl = i._emscripten_bind_b2ChainShape_SetNextVertex_1 = i.asm.gl).apply(
                    null,
                    arguments,
                  );
                }),
                Nl = (i._emscripten_bind_b2ChainShape_GetChildEdge_2 = function () {
                  return (Nl = i._emscripten_bind_b2ChainShape_GetChildEdge_2 = i.asm.hl).apply(
                    null,
                    arguments,
                  );
                }),
                Xl = (i._emscripten_bind_b2ChainShape_GetType_0 = function () {
                  return (Xl = i._emscripten_bind_b2ChainShape_GetType_0 = i.asm.il).apply(
                    null,
                    arguments,
                  );
                }),
                Hl = (i._emscripten_bind_b2ChainShape_GetChildCount_0 = function () {
                  return (Hl = i._emscripten_bind_b2ChainShape_GetChildCount_0 = i.asm.jl).apply(
                    null,
                    arguments,
                  );
                }),
                zl = (i._emscripten_bind_b2ChainShape_TestPoint_2 = function () {
                  return (zl = i._emscripten_bind_b2ChainShape_TestPoint_2 = i.asm.kl).apply(
                    null,
                    arguments,
                  );
                }),
                Ql = (i._emscripten_bind_b2ChainShape_RayCast_4 = function () {
                  return (Ql = i._emscripten_bind_b2ChainShape_RayCast_4 = i.asm.ll).apply(
                    null,
                    arguments,
                  );
                }),
                Zl = (i._emscripten_bind_b2ChainShape_ComputeAABB_3 = function () {
                  return (Zl = i._emscripten_bind_b2ChainShape_ComputeAABB_3 = i.asm.ml).apply(
                    null,
                    arguments,
                  );
                }),
                Yl = (i._emscripten_bind_b2ChainShape_ComputeMass_2 = function () {
                  return (Yl = i._emscripten_bind_b2ChainShape_ComputeMass_2 = i.asm.nl).apply(
                    null,
                    arguments,
                  );
                }),
                Kl = (i._emscripten_bind_b2ChainShape_get_m_vertices_0 = function () {
                  return (Kl = i._emscripten_bind_b2ChainShape_get_m_vertices_0 = i.asm.ol).apply(
                    null,
                    arguments,
                  );
                }),
                $l = (i._emscripten_bind_b2ChainShape_set_m_vertices_1 = function () {
                  return ($l = i._emscripten_bind_b2ChainShape_set_m_vertices_1 = i.asm.pl).apply(
                    null,
                    arguments,
                  );
                }),
                ty = (i._emscripten_bind_b2ChainShape_get_m_count_0 = function () {
                  return (ty = i._emscripten_bind_b2ChainShape_get_m_count_0 = i.asm.ql).apply(
                    null,
                    arguments,
                  );
                }),
                ey = (i._emscripten_bind_b2ChainShape_set_m_count_1 = function () {
                  return (ey = i._emscripten_bind_b2ChainShape_set_m_count_1 = i.asm.rl).apply(
                    null,
                    arguments,
                  );
                }),
                ny = (i._emscripten_bind_b2ChainShape_get_m_prevVertex_0 = function () {
                  return (ny = i._emscripten_bind_b2ChainShape_get_m_prevVertex_0 = i.asm.sl).apply(
                    null,
                    arguments,
                  );
                }),
                oy = (i._emscripten_bind_b2ChainShape_set_m_prevVertex_1 = function () {
                  return (oy = i._emscripten_bind_b2ChainShape_set_m_prevVertex_1 = i.asm.tl).apply(
                    null,
                    arguments,
                  );
                }),
                iy = (i._emscripten_bind_b2ChainShape_get_m_nextVertex_0 = function () {
                  return (iy = i._emscripten_bind_b2ChainShape_get_m_nextVertex_0 = i.asm.ul).apply(
                    null,
                    arguments,
                  );
                }),
                _y = (i._emscripten_bind_b2ChainShape_set_m_nextVertex_1 = function () {
                  return (_y = i._emscripten_bind_b2ChainShape_set_m_nextVertex_1 = i.asm.vl).apply(
                    null,
                    arguments,
                  );
                }),
                ry = (i._emscripten_bind_b2ChainShape_get_m_hasPrevVertex_0 = function () {
                  return (ry = i._emscripten_bind_b2ChainShape_get_m_hasPrevVertex_0 =
                    i.asm.wl).apply(null, arguments);
                }),
                py = (i._emscripten_bind_b2ChainShape_set_m_hasPrevVertex_1 = function () {
                  return (py = i._emscripten_bind_b2ChainShape_set_m_hasPrevVertex_1 =
                    i.asm.xl).apply(null, arguments);
                }),
                sy = (i._emscripten_bind_b2ChainShape_get_m_hasNextVertex_0 = function () {
                  return (sy = i._emscripten_bind_b2ChainShape_get_m_hasNextVertex_0 =
                    i.asm.yl).apply(null, arguments);
                }),
                cy = (i._emscripten_bind_b2ChainShape_set_m_hasNextVertex_1 = function () {
                  return (cy = i._emscripten_bind_b2ChainShape_set_m_hasNextVertex_1 =
                    i.asm.zl).apply(null, arguments);
                }),
                uy = (i._emscripten_bind_b2ChainShape_get_m_type_0 = function () {
                  return (uy = i._emscripten_bind_b2ChainShape_get_m_type_0 = i.asm.Al).apply(
                    null,
                    arguments,
                  );
                }),
                ay = (i._emscripten_bind_b2ChainShape_set_m_type_1 = function () {
                  return (ay = i._emscripten_bind_b2ChainShape_set_m_type_1 = i.asm.Bl).apply(
                    null,
                    arguments,
                  );
                }),
                ly = (i._emscripten_bind_b2ChainShape_get_m_radius_0 = function () {
                  return (ly = i._emscripten_bind_b2ChainShape_get_m_radius_0 = i.asm.Cl).apply(
                    null,
                    arguments,
                  );
                }),
                yy = (i._emscripten_bind_b2ChainShape_set_m_radius_1 = function () {
                  return (yy = i._emscripten_bind_b2ChainShape_set_m_radius_1 = i.asm.Dl).apply(
                    null,
                    arguments,
                  );
                }),
                by = (i._emscripten_bind_b2ChainShape___destroy___0 = function () {
                  return (by = i._emscripten_bind_b2ChainShape___destroy___0 = i.asm.El).apply(
                    null,
                    arguments,
                  );
                }),
                dy = (i._emscripten_bind_b2Color_b2Color_0 = function () {
                  return (dy = i._emscripten_bind_b2Color_b2Color_0 = i.asm.Fl).apply(
                    null,
                    arguments,
                  );
                }),
                my = (i._emscripten_bind_b2Color_b2Color_3 = function () {
                  return (my = i._emscripten_bind_b2Color_b2Color_3 = i.asm.Gl).apply(
                    null,
                    arguments,
                  );
                }),
                fy = (i._emscripten_bind_b2Color_Set_3 = function () {
                  return (fy = i._emscripten_bind_b2Color_Set_3 = i.asm.Hl).apply(null, arguments);
                }),
                hy = (i._emscripten_bind_b2Color_get_r_0 = function () {
                  return (hy = i._emscripten_bind_b2Color_get_r_0 = i.asm.Il).apply(
                    null,
                    arguments,
                  );
                }),
                gy = (i._emscripten_bind_b2Color_set_r_1 = function () {
                  return (gy = i._emscripten_bind_b2Color_set_r_1 = i.asm.Jl).apply(
                    null,
                    arguments,
                  );
                }),
                Uy = (i._emscripten_bind_b2Color_get_g_0 = function () {
                  return (Uy = i._emscripten_bind_b2Color_get_g_0 = i.asm.Kl).apply(
                    null,
                    arguments,
                  );
                }),
                wy = (i._emscripten_bind_b2Color_set_g_1 = function () {
                  return (wy = i._emscripten_bind_b2Color_set_g_1 = i.asm.Ll).apply(
                    null,
                    arguments,
                  );
                }),
                Jy = (i._emscripten_bind_b2Color_get_b_0 = function () {
                  return (Jy = i._emscripten_bind_b2Color_get_b_0 = i.asm.Ml).apply(
                    null,
                    arguments,
                  );
                }),
                Dy = (i._emscripten_bind_b2Color_set_b_1 = function () {
                  return (Dy = i._emscripten_bind_b2Color_set_b_1 = i.asm.Nl).apply(
                    null,
                    arguments,
                  );
                }),
                vy = (i._emscripten_bind_b2Color___destroy___0 = function () {
                  return (vy = i._emscripten_bind_b2Color___destroy___0 = i.asm.Ol).apply(
                    null,
                    arguments,
                  );
                }),
                Sy = (i._emscripten_bind_b2RopeJoint_GetLocalAnchorA_0 = function () {
                  return (Sy = i._emscripten_bind_b2RopeJoint_GetLocalAnchorA_0 = i.asm.Pl).apply(
                    null,
                    arguments,
                  );
                }),
                Ay = (i._emscripten_bind_b2RopeJoint_GetLocalAnchorB_0 = function () {
                  return (Ay = i._emscripten_bind_b2RopeJoint_GetLocalAnchorB_0 = i.asm.Ql).apply(
                    null,
                    arguments,
                  );
                }),
                xy = (i._emscripten_bind_b2RopeJoint_SetMaxLength_1 = function () {
                  return (xy = i._emscripten_bind_b2RopeJoint_SetMaxLength_1 = i.asm.Rl).apply(
                    null,
                    arguments,
                  );
                }),
                By = (i._emscripten_bind_b2RopeJoint_GetMaxLength_0 = function () {
                  return (By = i._emscripten_bind_b2RopeJoint_GetMaxLength_0 = i.asm.Sl).apply(
                    null,
                    arguments,
                  );
                }),
                jy = (i._emscripten_bind_b2RopeJoint_GetLimitState_0 = function () {
                  return (jy = i._emscripten_bind_b2RopeJoint_GetLimitState_0 = i.asm.Tl).apply(
                    null,
                    arguments,
                  );
                }),
                Gy = (i._emscripten_bind_b2RopeJoint_GetType_0 = function () {
                  return (Gy = i._emscripten_bind_b2RopeJoint_GetType_0 = i.asm.Ul).apply(
                    null,
                    arguments,
                  );
                }),
                Cy = (i._emscripten_bind_b2RopeJoint_GetBodyA_0 = function () {
                  return (Cy = i._emscripten_bind_b2RopeJoint_GetBodyA_0 = i.asm.Vl).apply(
                    null,
                    arguments,
                  );
                }),
                Py = (i._emscripten_bind_b2RopeJoint_GetBodyB_0 = function () {
                  return (Py = i._emscripten_bind_b2RopeJoint_GetBodyB_0 = i.asm.Wl).apply(
                    null,
                    arguments,
                  );
                }),
                Ry = (i._emscripten_bind_b2RopeJoint_GetAnchorA_0 = function () {
                  return (Ry = i._emscripten_bind_b2RopeJoint_GetAnchorA_0 = i.asm.Xl).apply(
                    null,
                    arguments,
                  );
                }),
                My = (i._emscripten_bind_b2RopeJoint_GetAnchorB_0 = function () {
                  return (My = i._emscripten_bind_b2RopeJoint_GetAnchorB_0 = i.asm.Yl).apply(
                    null,
                    arguments,
                  );
                }),
                Ty = (i._emscripten_bind_b2RopeJoint_GetReactionForce_1 = function () {
                  return (Ty = i._emscripten_bind_b2RopeJoint_GetReactionForce_1 = i.asm.Zl).apply(
                    null,
                    arguments,
                  );
                }),
                Fy = (i._emscripten_bind_b2RopeJoint_GetReactionTorque_1 = function () {
                  return (Fy = i._emscripten_bind_b2RopeJoint_GetReactionTorque_1 = i.asm._l).apply(
                    null,
                    arguments,
                  );
                }),
                Ly = (i._emscripten_bind_b2RopeJoint_GetNext_0 = function () {
                  return (Ly = i._emscripten_bind_b2RopeJoint_GetNext_0 = i.asm.$l).apply(
                    null,
                    arguments,
                  );
                }),
                Iy = (i._emscripten_bind_b2RopeJoint_GetUserData_0 = function () {
                  return (Iy = i._emscripten_bind_b2RopeJoint_GetUserData_0 = i.asm.am).apply(
                    null,
                    arguments,
                  );
                }),
                Wy = (i._emscripten_bind_b2RopeJoint_SetUserData_1 = function () {
                  return (Wy = i._emscripten_bind_b2RopeJoint_SetUserData_1 = i.asm.bm).apply(
                    null,
                    arguments,
                  );
                }),
                Oy = (i._emscripten_bind_b2RopeJoint_IsActive_0 = function () {
                  return (Oy = i._emscripten_bind_b2RopeJoint_IsActive_0 = i.asm.cm).apply(
                    null,
                    arguments,
                  );
                }),
                Vy = (i._emscripten_bind_b2RopeJoint_GetCollideConnected_0 = function () {
                  return (Vy = i._emscripten_bind_b2RopeJoint_GetCollideConnected_0 =
                    i.asm.dm).apply(null, arguments);
                }),
                Ey = (i._emscripten_bind_b2RopeJoint___destroy___0 = function () {
                  return (Ey = i._emscripten_bind_b2RopeJoint___destroy___0 = i.asm.em).apply(
                    null,
                    arguments,
                  );
                }),
                qy = (i._emscripten_bind_b2RayCastInput_get_p1_0 = function () {
                  return (qy = i._emscripten_bind_b2RayCastInput_get_p1_0 = i.asm.fm).apply(
                    null,
                    arguments,
                  );
                }),
                ky = (i._emscripten_bind_b2RayCastInput_set_p1_1 = function () {
                  return (ky = i._emscripten_bind_b2RayCastInput_set_p1_1 = i.asm.gm).apply(
                    null,
                    arguments,
                  );
                }),
                Ny = (i._emscripten_bind_b2RayCastInput_get_p2_0 = function () {
                  return (Ny = i._emscripten_bind_b2RayCastInput_get_p2_0 = i.asm.hm).apply(
                    null,
                    arguments,
                  );
                }),
                Xy = (i._emscripten_bind_b2RayCastInput_set_p2_1 = function () {
                  return (Xy = i._emscripten_bind_b2RayCastInput_set_p2_1 = i.asm.im).apply(
                    null,
                    arguments,
                  );
                }),
                Hy = (i._emscripten_bind_b2RayCastInput_get_maxFraction_0 = function () {
                  return (Hy = i._emscripten_bind_b2RayCastInput_get_maxFraction_0 =
                    i.asm.jm).apply(null, arguments);
                }),
                zy = (i._emscripten_bind_b2RayCastInput_set_maxFraction_1 = function () {
                  return (zy = i._emscripten_bind_b2RayCastInput_set_maxFraction_1 =
                    i.asm.km).apply(null, arguments);
                }),
                Qy = (i._emscripten_bind_b2RayCastInput___destroy___0 = function () {
                  return (Qy = i._emscripten_bind_b2RayCastInput___destroy___0 = i.asm.lm).apply(
                    null,
                    arguments,
                  );
                }),
                Zy = (i._emscripten_bind_b2PolygonShape_b2PolygonShape_0 = function () {
                  return (Zy = i._emscripten_bind_b2PolygonShape_b2PolygonShape_0 = i.asm.mm).apply(
                    null,
                    arguments,
                  );
                }),
                Yy = (i._emscripten_bind_b2PolygonShape_Set_2 = function () {
                  return (Yy = i._emscripten_bind_b2PolygonShape_Set_2 = i.asm.nm).apply(
                    null,
                    arguments,
                  );
                }),
                Ky = (i._emscripten_bind_b2PolygonShape_SetAsBox_2 = function () {
                  return (Ky = i._emscripten_bind_b2PolygonShape_SetAsBox_2 = i.asm.om).apply(
                    null,
                    arguments,
                  );
                }),
                $y = (i._emscripten_bind_b2PolygonShape_SetAsBox_4 = function () {
                  return ($y = i._emscripten_bind_b2PolygonShape_SetAsBox_4 = i.asm.pm).apply(
                    null,
                    arguments,
                  );
                }),
                tb = (i._emscripten_bind_b2PolygonShape_GetVertexCount_0 = function () {
                  return (tb = i._emscripten_bind_b2PolygonShape_GetVertexCount_0 = i.asm.qm).apply(
                    null,
                    arguments,
                  );
                }),
                eb = (i._emscripten_bind_b2PolygonShape_GetVertex_1 = function () {
                  return (eb = i._emscripten_bind_b2PolygonShape_GetVertex_1 = i.asm.rm).apply(
                    null,
                    arguments,
                  );
                }),
                nb = (i._emscripten_bind_b2PolygonShape_GetType_0 = function () {
                  return (nb = i._emscripten_bind_b2PolygonShape_GetType_0 = i.asm.sm).apply(
                    null,
                    arguments,
                  );
                }),
                ob = (i._emscripten_bind_b2PolygonShape_GetChildCount_0 = function () {
                  return (ob = i._emscripten_bind_b2PolygonShape_GetChildCount_0 = i.asm.tm).apply(
                    null,
                    arguments,
                  );
                }),
                ib = (i._emscripten_bind_b2PolygonShape_TestPoint_2 = function () {
                  return (ib = i._emscripten_bind_b2PolygonShape_TestPoint_2 = i.asm.um).apply(
                    null,
                    arguments,
                  );
                }),
                _b = (i._emscripten_bind_b2PolygonShape_RayCast_4 = function () {
                  return (_b = i._emscripten_bind_b2PolygonShape_RayCast_4 = i.asm.vm).apply(
                    null,
                    arguments,
                  );
                }),
                rb = (i._emscripten_bind_b2PolygonShape_ComputeAABB_3 = function () {
                  return (rb = i._emscripten_bind_b2PolygonShape_ComputeAABB_3 = i.asm.wm).apply(
                    null,
                    arguments,
                  );
                }),
                pb = (i._emscripten_bind_b2PolygonShape_ComputeMass_2 = function () {
                  return (pb = i._emscripten_bind_b2PolygonShape_ComputeMass_2 = i.asm.xm).apply(
                    null,
                    arguments,
                  );
                }),
                sb = (i._emscripten_bind_b2PolygonShape_get_m_centroid_0 = function () {
                  return (sb = i._emscripten_bind_b2PolygonShape_get_m_centroid_0 = i.asm.ym).apply(
                    null,
                    arguments,
                  );
                }),
                cb = (i._emscripten_bind_b2PolygonShape_set_m_centroid_1 = function () {
                  return (cb = i._emscripten_bind_b2PolygonShape_set_m_centroid_1 = i.asm.zm).apply(
                    null,
                    arguments,
                  );
                }),
                ub = (i._emscripten_bind_b2PolygonShape_get_m_count_0 = function () {
                  return (ub = i._emscripten_bind_b2PolygonShape_get_m_count_0 = i.asm.Am).apply(
                    null,
                    arguments,
                  );
                }),
                ab = (i._emscripten_bind_b2PolygonShape_set_m_count_1 = function () {
                  return (ab = i._emscripten_bind_b2PolygonShape_set_m_count_1 = i.asm.Bm).apply(
                    null,
                    arguments,
                  );
                }),
                lb = (i._emscripten_bind_b2PolygonShape_get_m_type_0 = function () {
                  return (lb = i._emscripten_bind_b2PolygonShape_get_m_type_0 = i.asm.Cm).apply(
                    null,
                    arguments,
                  );
                }),
                yb = (i._emscripten_bind_b2PolygonShape_set_m_type_1 = function () {
                  return (yb = i._emscripten_bind_b2PolygonShape_set_m_type_1 = i.asm.Dm).apply(
                    null,
                    arguments,
                  );
                }),
                bb = (i._emscripten_bind_b2PolygonShape_get_m_radius_0 = function () {
                  return (bb = i._emscripten_bind_b2PolygonShape_get_m_radius_0 = i.asm.Em).apply(
                    null,
                    arguments,
                  );
                }),
                db = (i._emscripten_bind_b2PolygonShape_set_m_radius_1 = function () {
                  return (db = i._emscripten_bind_b2PolygonShape_set_m_radius_1 = i.asm.Fm).apply(
                    null,
                    arguments,
                  );
                }),
                mb = (i._emscripten_bind_b2PolygonShape___destroy___0 = function () {
                  return (mb = i._emscripten_bind_b2PolygonShape___destroy___0 = i.asm.Gm).apply(
                    null,
                    arguments,
                  );
                }),
                fb = (i._emscripten_bind_b2EdgeShape_b2EdgeShape_0 = function () {
                  return (fb = i._emscripten_bind_b2EdgeShape_b2EdgeShape_0 = i.asm.Hm).apply(
                    null,
                    arguments,
                  );
                }),
                hb = (i._emscripten_bind_b2EdgeShape_Set_2 = function () {
                  return (hb = i._emscripten_bind_b2EdgeShape_Set_2 = i.asm.Im).apply(
                    null,
                    arguments,
                  );
                }),
                gb = (i._emscripten_bind_b2EdgeShape_GetType_0 = function () {
                  return (gb = i._emscripten_bind_b2EdgeShape_GetType_0 = i.asm.Jm).apply(
                    null,
                    arguments,
                  );
                }),
                Ub = (i._emscripten_bind_b2EdgeShape_GetChildCount_0 = function () {
                  return (Ub = i._emscripten_bind_b2EdgeShape_GetChildCount_0 = i.asm.Km).apply(
                    null,
                    arguments,
                  );
                }),
                wb = (i._emscripten_bind_b2EdgeShape_TestPoint_2 = function () {
                  return (wb = i._emscripten_bind_b2EdgeShape_TestPoint_2 = i.asm.Lm).apply(
                    null,
                    arguments,
                  );
                }),
                Jb = (i._emscripten_bind_b2EdgeShape_RayCast_4 = function () {
                  return (Jb = i._emscripten_bind_b2EdgeShape_RayCast_4 = i.asm.Mm).apply(
                    null,
                    arguments,
                  );
                }),
                Db = (i._emscripten_bind_b2EdgeShape_ComputeAABB_3 = function () {
                  return (Db = i._emscripten_bind_b2EdgeShape_ComputeAABB_3 = i.asm.Nm).apply(
                    null,
                    arguments,
                  );
                }),
                vb = (i._emscripten_bind_b2EdgeShape_ComputeMass_2 = function () {
                  return (vb = i._emscripten_bind_b2EdgeShape_ComputeMass_2 = i.asm.Om).apply(
                    null,
                    arguments,
                  );
                }),
                Sb = (i._emscripten_bind_b2EdgeShape_get_m_vertex1_0 = function () {
                  return (Sb = i._emscripten_bind_b2EdgeShape_get_m_vertex1_0 = i.asm.Pm).apply(
                    null,
                    arguments,
                  );
                }),
                Ab = (i._emscripten_bind_b2EdgeShape_set_m_vertex1_1 = function () {
                  return (Ab = i._emscripten_bind_b2EdgeShape_set_m_vertex1_1 = i.asm.Qm).apply(
                    null,
                    arguments,
                  );
                }),
                xb = (i._emscripten_bind_b2EdgeShape_get_m_vertex2_0 = function () {
                  return (xb = i._emscripten_bind_b2EdgeShape_get_m_vertex2_0 = i.asm.Rm).apply(
                    null,
                    arguments,
                  );
                }),
                Bb = (i._emscripten_bind_b2EdgeShape_set_m_vertex2_1 = function () {
                  return (Bb = i._emscripten_bind_b2EdgeShape_set_m_vertex2_1 = i.asm.Sm).apply(
                    null,
                    arguments,
                  );
                }),
                jb = (i._emscripten_bind_b2EdgeShape_get_m_vertex0_0 = function () {
                  return (jb = i._emscripten_bind_b2EdgeShape_get_m_vertex0_0 = i.asm.Tm).apply(
                    null,
                    arguments,
                  );
                }),
                Gb = (i._emscripten_bind_b2EdgeShape_set_m_vertex0_1 = function () {
                  return (Gb = i._emscripten_bind_b2EdgeShape_set_m_vertex0_1 = i.asm.Um).apply(
                    null,
                    arguments,
                  );
                }),
                Cb = (i._emscripten_bind_b2EdgeShape_get_m_vertex3_0 = function () {
                  return (Cb = i._emscripten_bind_b2EdgeShape_get_m_vertex3_0 = i.asm.Vm).apply(
                    null,
                    arguments,
                  );
                }),
                Pb = (i._emscripten_bind_b2EdgeShape_set_m_vertex3_1 = function () {
                  return (Pb = i._emscripten_bind_b2EdgeShape_set_m_vertex3_1 = i.asm.Wm).apply(
                    null,
                    arguments,
                  );
                }),
                Rb = (i._emscripten_bind_b2EdgeShape_get_m_hasVertex0_0 = function () {
                  return (Rb = i._emscripten_bind_b2EdgeShape_get_m_hasVertex0_0 = i.asm.Xm).apply(
                    null,
                    arguments,
                  );
                }),
                Mb = (i._emscripten_bind_b2EdgeShape_set_m_hasVertex0_1 = function () {
                  return (Mb = i._emscripten_bind_b2EdgeShape_set_m_hasVertex0_1 = i.asm.Ym).apply(
                    null,
                    arguments,
                  );
                }),
                Tb = (i._emscripten_bind_b2EdgeShape_get_m_hasVertex3_0 = function () {
                  return (Tb = i._emscripten_bind_b2EdgeShape_get_m_hasVertex3_0 = i.asm.Zm).apply(
                    null,
                    arguments,
                  );
                }),
                Fb = (i._emscripten_bind_b2EdgeShape_set_m_hasVertex3_1 = function () {
                  return (Fb = i._emscripten_bind_b2EdgeShape_set_m_hasVertex3_1 = i.asm._m).apply(
                    null,
                    arguments,
                  );
                }),
                Lb = (i._emscripten_bind_b2EdgeShape_get_m_type_0 = function () {
                  return (Lb = i._emscripten_bind_b2EdgeShape_get_m_type_0 = i.asm.$m).apply(
                    null,
                    arguments,
                  );
                }),
                Ib = (i._emscripten_bind_b2EdgeShape_set_m_type_1 = function () {
                  return (Ib = i._emscripten_bind_b2EdgeShape_set_m_type_1 = i.asm.an).apply(
                    null,
                    arguments,
                  );
                }),
                Wb = (i._emscripten_bind_b2EdgeShape_get_m_radius_0 = function () {
                  return (Wb = i._emscripten_bind_b2EdgeShape_get_m_radius_0 = i.asm.bn).apply(
                    null,
                    arguments,
                  );
                }),
                Ob = (i._emscripten_bind_b2EdgeShape_set_m_radius_1 = function () {
                  return (Ob = i._emscripten_bind_b2EdgeShape_set_m_radius_1 = i.asm.cn).apply(
                    null,
                    arguments,
                  );
                }),
                Vb = (i._emscripten_bind_b2EdgeShape___destroy___0 = function () {
                  return (Vb = i._emscripten_bind_b2EdgeShape___destroy___0 = i.asm.dn).apply(
                    null,
                    arguments,
                  );
                }),
                Eb = (i._emscripten_bind_JSContactFilter_JSContactFilter_0 = function () {
                  return (Eb = i._emscripten_bind_JSContactFilter_JSContactFilter_0 =
                    i.asm.en).apply(null, arguments);
                }),
                qb = (i._emscripten_bind_JSContactFilter_ShouldCollide_2 = function () {
                  return (qb = i._emscripten_bind_JSContactFilter_ShouldCollide_2 = i.asm.fn).apply(
                    null,
                    arguments,
                  );
                }),
                kb = (i._emscripten_bind_JSContactFilter___destroy___0 = function () {
                  return (kb = i._emscripten_bind_JSContactFilter___destroy___0 = i.asm.gn).apply(
                    null,
                    arguments,
                  );
                }),
                Nb = (i._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0 = function () {
                  return (Nb = i._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0 =
                    i.asm.hn).apply(null, arguments);
                }),
                Xb = (i._emscripten_bind_b2RevoluteJointDef_Initialize_3 = function () {
                  return (Xb = i._emscripten_bind_b2RevoluteJointDef_Initialize_3 = i.asm.jn).apply(
                    null,
                    arguments,
                  );
                }),
                Hb = (i._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0 = function () {
                  return (Hb = i._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0 =
                    i.asm.kn).apply(null, arguments);
                }),
                zb = (i._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1 = function () {
                  return (zb = i._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1 =
                    i.asm.ln).apply(null, arguments);
                }),
                Qb = (i._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0 = function () {
                  return (Qb = i._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0 =
                    i.asm.mn).apply(null, arguments);
                }),
                Zb = (i._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1 = function () {
                  return (Zb = i._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1 =
                    i.asm.nn).apply(null, arguments);
                }),
                Yb = (i._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0 = function () {
                  return (Yb = i._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0 =
                    i.asm.on).apply(null, arguments);
                }),
                Kb = (i._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1 = function () {
                  return (Kb = i._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1 =
                    i.asm.pn).apply(null, arguments);
                }),
                $b = (i._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0 = function () {
                  return ($b = i._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0 =
                    i.asm.qn).apply(null, arguments);
                }),
                td = (i._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1 = function () {
                  return (td = i._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1 =
                    i.asm.rn).apply(null, arguments);
                }),
                ed = (i._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0 = function () {
                  return (ed = i._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0 =
                    i.asm.sn).apply(null, arguments);
                }),
                nd = (i._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1 = function () {
                  return (nd = i._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1 =
                    i.asm.tn).apply(null, arguments);
                }),
                od = (i._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0 = function () {
                  return (od = i._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0 =
                    i.asm.un).apply(null, arguments);
                }),
                id = (i._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1 = function () {
                  return (id = i._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1 =
                    i.asm.vn).apply(null, arguments);
                }),
                _d = (i._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0 = function () {
                  return (_d = i._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0 =
                    i.asm.wn).apply(null, arguments);
                }),
                rd = (i._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1 = function () {
                  return (rd = i._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1 =
                    i.asm.xn).apply(null, arguments);
                }),
                pd = (i._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0 = function () {
                  return (pd = i._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0 =
                    i.asm.yn).apply(null, arguments);
                }),
                sd = (i._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1 = function () {
                  return (sd = i._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1 =
                    i.asm.zn).apply(null, arguments);
                }),
                cd = (i._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0 = function () {
                  return (cd = i._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0 =
                    i.asm.An).apply(null, arguments);
                }),
                ud = (i._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1 = function () {
                  return (ud = i._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1 =
                    i.asm.Bn).apply(null, arguments);
                }),
                ad = (i._emscripten_bind_b2RevoluteJointDef_get_type_0 = function () {
                  return (ad = i._emscripten_bind_b2RevoluteJointDef_get_type_0 = i.asm.Cn).apply(
                    null,
                    arguments,
                  );
                }),
                ld = (i._emscripten_bind_b2RevoluteJointDef_set_type_1 = function () {
                  return (ld = i._emscripten_bind_b2RevoluteJointDef_set_type_1 = i.asm.Dn).apply(
                    null,
                    arguments,
                  );
                }),
                yd = (i._emscripten_bind_b2RevoluteJointDef_get_userData_0 = function () {
                  return (yd = i._emscripten_bind_b2RevoluteJointDef_get_userData_0 =
                    i.asm.En).apply(null, arguments);
                }),
                bd = (i._emscripten_bind_b2RevoluteJointDef_set_userData_1 = function () {
                  return (bd = i._emscripten_bind_b2RevoluteJointDef_set_userData_1 =
                    i.asm.Fn).apply(null, arguments);
                }),
                dd = (i._emscripten_bind_b2RevoluteJointDef_get_bodyA_0 = function () {
                  return (dd = i._emscripten_bind_b2RevoluteJointDef_get_bodyA_0 = i.asm.Gn).apply(
                    null,
                    arguments,
                  );
                }),
                md = (i._emscripten_bind_b2RevoluteJointDef_set_bodyA_1 = function () {
                  return (md = i._emscripten_bind_b2RevoluteJointDef_set_bodyA_1 = i.asm.Hn).apply(
                    null,
                    arguments,
                  );
                }),
                fd = (i._emscripten_bind_b2RevoluteJointDef_get_bodyB_0 = function () {
                  return (fd = i._emscripten_bind_b2RevoluteJointDef_get_bodyB_0 = i.asm.In).apply(
                    null,
                    arguments,
                  );
                }),
                hd = (i._emscripten_bind_b2RevoluteJointDef_set_bodyB_1 = function () {
                  return (hd = i._emscripten_bind_b2RevoluteJointDef_set_bodyB_1 = i.asm.Jn).apply(
                    null,
                    arguments,
                  );
                }),
                gd = (i._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0 = function () {
                  return (gd = i._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0 =
                    i.asm.Kn).apply(null, arguments);
                }),
                Ud = (i._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1 = function () {
                  return (Ud = i._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1 =
                    i.asm.Ln).apply(null, arguments);
                }),
                wd = (i._emscripten_bind_b2RevoluteJointDef___destroy___0 = function () {
                  return (wd = i._emscripten_bind_b2RevoluteJointDef___destroy___0 =
                    i.asm.Mn).apply(null, arguments);
                }),
                Jd = (i._emscripten_bind_JSDraw_JSDraw_0 = function () {
                  return (Jd = i._emscripten_bind_JSDraw_JSDraw_0 = i.asm.Nn).apply(
                    null,
                    arguments,
                  );
                }),
                Dd = (i._emscripten_bind_JSDraw_DrawPolygon_3 = function () {
                  return (Dd = i._emscripten_bind_JSDraw_DrawPolygon_3 = i.asm.On).apply(
                    null,
                    arguments,
                  );
                }),
                vd = (i._emscripten_bind_JSDraw_DrawSolidPolygon_3 = function () {
                  return (vd = i._emscripten_bind_JSDraw_DrawSolidPolygon_3 = i.asm.Pn).apply(
                    null,
                    arguments,
                  );
                }),
                Sd = (i._emscripten_bind_JSDraw_DrawCircle_3 = function () {
                  return (Sd = i._emscripten_bind_JSDraw_DrawCircle_3 = i.asm.Qn).apply(
                    null,
                    arguments,
                  );
                }),
                Ad = (i._emscripten_bind_JSDraw_DrawSolidCircle_4 = function () {
                  return (Ad = i._emscripten_bind_JSDraw_DrawSolidCircle_4 = i.asm.Rn).apply(
                    null,
                    arguments,
                  );
                }),
                xd = (i._emscripten_bind_JSDraw_DrawSegment_3 = function () {
                  return (xd = i._emscripten_bind_JSDraw_DrawSegment_3 = i.asm.Sn).apply(
                    null,
                    arguments,
                  );
                }),
                Bd = (i._emscripten_bind_JSDraw_DrawTransform_1 = function () {
                  return (Bd = i._emscripten_bind_JSDraw_DrawTransform_1 = i.asm.Tn).apply(
                    null,
                    arguments,
                  );
                }),
                jd = (i._emscripten_bind_JSDraw___destroy___0 = function () {
                  return (jd = i._emscripten_bind_JSDraw___destroy___0 = i.asm.Un).apply(
                    null,
                    arguments,
                  );
                }),
                Gd = (i._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0 = function () {
                  return (Gd = i._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0 = i.asm.Vn).apply(
                    null,
                    arguments,
                  );
                }),
                Cd = (i._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0 = function () {
                  return (Cd = i._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0 = i.asm.Wn).apply(
                    null,
                    arguments,
                  );
                }),
                Pd = (i._emscripten_bind_b2WheelJoint_GetLocalAxisA_0 = function () {
                  return (Pd = i._emscripten_bind_b2WheelJoint_GetLocalAxisA_0 = i.asm.Xn).apply(
                    null,
                    arguments,
                  );
                }),
                Rd = (i._emscripten_bind_b2WheelJoint_GetJointTranslation_0 = function () {
                  return (Rd = i._emscripten_bind_b2WheelJoint_GetJointTranslation_0 =
                    i.asm.Yn).apply(null, arguments);
                }),
                Md = (i._emscripten_bind_b2WheelJoint_GetJointSpeed_0 = function () {
                  return (Md = i._emscripten_bind_b2WheelJoint_GetJointSpeed_0 = i.asm.Zn).apply(
                    null,
                    arguments,
                  );
                }),
                Td = (i._emscripten_bind_b2WheelJoint_IsMotorEnabled_0 = function () {
                  return (Td = i._emscripten_bind_b2WheelJoint_IsMotorEnabled_0 = i.asm._n).apply(
                    null,
                    arguments,
                  );
                }),
                Fd = (i._emscripten_bind_b2WheelJoint_EnableMotor_1 = function () {
                  return (Fd = i._emscripten_bind_b2WheelJoint_EnableMotor_1 = i.asm.$n).apply(
                    null,
                    arguments,
                  );
                }),
                Ld = (i._emscripten_bind_b2WheelJoint_SetMotorSpeed_1 = function () {
                  return (Ld = i._emscripten_bind_b2WheelJoint_SetMotorSpeed_1 = i.asm.ao).apply(
                    null,
                    arguments,
                  );
                }),
                Id = (i._emscripten_bind_b2WheelJoint_GetMotorSpeed_0 = function () {
                  return (Id = i._emscripten_bind_b2WheelJoint_GetMotorSpeed_0 = i.asm.bo).apply(
                    null,
                    arguments,
                  );
                }),
                Wd = (i._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1 = function () {
                  return (Wd = i._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1 =
                    i.asm.co).apply(null, arguments);
                }),
                Od = (i._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0 = function () {
                  return (Od = i._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0 =
                    i.asm.eo).apply(null, arguments);
                }),
                Vd = (i._emscripten_bind_b2WheelJoint_GetMotorTorque_1 = function () {
                  return (Vd = i._emscripten_bind_b2WheelJoint_GetMotorTorque_1 = i.asm.fo).apply(
                    null,
                    arguments,
                  );
                }),
                Ed = (i._emscripten_bind_b2WheelJoint_SetSpringFrequencyHz_1 = function () {
                  return (Ed = i._emscripten_bind_b2WheelJoint_SetSpringFrequencyHz_1 =
                    i.asm.go).apply(null, arguments);
                }),
                qd = (i._emscripten_bind_b2WheelJoint_GetSpringFrequencyHz_0 = function () {
                  return (qd = i._emscripten_bind_b2WheelJoint_GetSpringFrequencyHz_0 =
                    i.asm.ho).apply(null, arguments);
                }),
                kd = (i._emscripten_bind_b2WheelJoint_SetSpringDampingRatio_1 = function () {
                  return (kd = i._emscripten_bind_b2WheelJoint_SetSpringDampingRatio_1 =
                    i.asm.io).apply(null, arguments);
                }),
                Nd = (i._emscripten_bind_b2WheelJoint_GetSpringDampingRatio_0 = function () {
                  return (Nd = i._emscripten_bind_b2WheelJoint_GetSpringDampingRatio_0 =
                    i.asm.jo).apply(null, arguments);
                }),
                Xd = (i._emscripten_bind_b2WheelJoint_GetType_0 = function () {
                  return (Xd = i._emscripten_bind_b2WheelJoint_GetType_0 = i.asm.ko).apply(
                    null,
                    arguments,
                  );
                }),
                Hd = (i._emscripten_bind_b2WheelJoint_GetBodyA_0 = function () {
                  return (Hd = i._emscripten_bind_b2WheelJoint_GetBodyA_0 = i.asm.lo).apply(
                    null,
                    arguments,
                  );
                }),
                zd = (i._emscripten_bind_b2WheelJoint_GetBodyB_0 = function () {
                  return (zd = i._emscripten_bind_b2WheelJoint_GetBodyB_0 = i.asm.mo).apply(
                    null,
                    arguments,
                  );
                }),
                Qd = (i._emscripten_bind_b2WheelJoint_GetAnchorA_0 = function () {
                  return (Qd = i._emscripten_bind_b2WheelJoint_GetAnchorA_0 = i.asm.no).apply(
                    null,
                    arguments,
                  );
                }),
                Zd = (i._emscripten_bind_b2WheelJoint_GetAnchorB_0 = function () {
                  return (Zd = i._emscripten_bind_b2WheelJoint_GetAnchorB_0 = i.asm.oo).apply(
                    null,
                    arguments,
                  );
                }),
                Yd = (i._emscripten_bind_b2WheelJoint_GetReactionForce_1 = function () {
                  return (Yd = i._emscripten_bind_b2WheelJoint_GetReactionForce_1 = i.asm.po).apply(
                    null,
                    arguments,
                  );
                }),
                Kd = (i._emscripten_bind_b2WheelJoint_GetReactionTorque_1 = function () {
                  return (Kd = i._emscripten_bind_b2WheelJoint_GetReactionTorque_1 =
                    i.asm.qo).apply(null, arguments);
                }),
                $d = (i._emscripten_bind_b2WheelJoint_GetNext_0 = function () {
                  return ($d = i._emscripten_bind_b2WheelJoint_GetNext_0 = i.asm.ro).apply(
                    null,
                    arguments,
                  );
                }),
                tm = (i._emscripten_bind_b2WheelJoint_GetUserData_0 = function () {
                  return (tm = i._emscripten_bind_b2WheelJoint_GetUserData_0 = i.asm.so).apply(
                    null,
                    arguments,
                  );
                }),
                em = (i._emscripten_bind_b2WheelJoint_SetUserData_1 = function () {
                  return (em = i._emscripten_bind_b2WheelJoint_SetUserData_1 = i.asm.to).apply(
                    null,
                    arguments,
                  );
                }),
                nm = (i._emscripten_bind_b2WheelJoint_IsActive_0 = function () {
                  return (nm = i._emscripten_bind_b2WheelJoint_IsActive_0 = i.asm.uo).apply(
                    null,
                    arguments,
                  );
                }),
                om = (i._emscripten_bind_b2WheelJoint_GetCollideConnected_0 = function () {
                  return (om = i._emscripten_bind_b2WheelJoint_GetCollideConnected_0 =
                    i.asm.vo).apply(null, arguments);
                }),
                im = (i._emscripten_bind_b2WheelJoint___destroy___0 = function () {
                  return (im = i._emscripten_bind_b2WheelJoint___destroy___0 = i.asm.wo).apply(
                    null,
                    arguments,
                  );
                }),
                _m = (i._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0 = function () {
                  return (_m = i._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0 =
                    i.asm.xo).apply(null, arguments);
                }),
                rm = (i._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0 = function () {
                  return (rm = i._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0 =
                    i.asm.yo).apply(null, arguments);
                }),
                pm = (i._emscripten_bind_b2PulleyJoint_GetLengthA_0 = function () {
                  return (pm = i._emscripten_bind_b2PulleyJoint_GetLengthA_0 = i.asm.zo).apply(
                    null,
                    arguments,
                  );
                }),
                sm = (i._emscripten_bind_b2PulleyJoint_GetLengthB_0 = function () {
                  return (sm = i._emscripten_bind_b2PulleyJoint_GetLengthB_0 = i.asm.Ao).apply(
                    null,
                    arguments,
                  );
                }),
                cm = (i._emscripten_bind_b2PulleyJoint_GetRatio_0 = function () {
                  return (cm = i._emscripten_bind_b2PulleyJoint_GetRatio_0 = i.asm.Bo).apply(
                    null,
                    arguments,
                  );
                }),
                um = (i._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0 = function () {
                  return (um = i._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0 =
                    i.asm.Co).apply(null, arguments);
                }),
                am = (i._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0 = function () {
                  return (am = i._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0 =
                    i.asm.Do).apply(null, arguments);
                }),
                lm = (i._emscripten_bind_b2PulleyJoint_GetType_0 = function () {
                  return (lm = i._emscripten_bind_b2PulleyJoint_GetType_0 = i.asm.Eo).apply(
                    null,
                    arguments,
                  );
                }),
                ym = (i._emscripten_bind_b2PulleyJoint_GetBodyA_0 = function () {
                  return (ym = i._emscripten_bind_b2PulleyJoint_GetBodyA_0 = i.asm.Fo).apply(
                    null,
                    arguments,
                  );
                }),
                bm = (i._emscripten_bind_b2PulleyJoint_GetBodyB_0 = function () {
                  return (bm = i._emscripten_bind_b2PulleyJoint_GetBodyB_0 = i.asm.Go).apply(
                    null,
                    arguments,
                  );
                }),
                dm = (i._emscripten_bind_b2PulleyJoint_GetAnchorA_0 = function () {
                  return (dm = i._emscripten_bind_b2PulleyJoint_GetAnchorA_0 = i.asm.Ho).apply(
                    null,
                    arguments,
                  );
                }),
                mm = (i._emscripten_bind_b2PulleyJoint_GetAnchorB_0 = function () {
                  return (mm = i._emscripten_bind_b2PulleyJoint_GetAnchorB_0 = i.asm.Io).apply(
                    null,
                    arguments,
                  );
                }),
                fm = (i._emscripten_bind_b2PulleyJoint_GetReactionForce_1 = function () {
                  return (fm = i._emscripten_bind_b2PulleyJoint_GetReactionForce_1 =
                    i.asm.Jo).apply(null, arguments);
                }),
                hm = (i._emscripten_bind_b2PulleyJoint_GetReactionTorque_1 = function () {
                  return (hm = i._emscripten_bind_b2PulleyJoint_GetReactionTorque_1 =
                    i.asm.Ko).apply(null, arguments);
                }),
                gm = (i._emscripten_bind_b2PulleyJoint_GetNext_0 = function () {
                  return (gm = i._emscripten_bind_b2PulleyJoint_GetNext_0 = i.asm.Lo).apply(
                    null,
                    arguments,
                  );
                }),
                Um = (i._emscripten_bind_b2PulleyJoint_GetUserData_0 = function () {
                  return (Um = i._emscripten_bind_b2PulleyJoint_GetUserData_0 = i.asm.Mo).apply(
                    null,
                    arguments,
                  );
                }),
                wm = (i._emscripten_bind_b2PulleyJoint_SetUserData_1 = function () {
                  return (wm = i._emscripten_bind_b2PulleyJoint_SetUserData_1 = i.asm.No).apply(
                    null,
                    arguments,
                  );
                }),
                Jm = (i._emscripten_bind_b2PulleyJoint_IsActive_0 = function () {
                  return (Jm = i._emscripten_bind_b2PulleyJoint_IsActive_0 = i.asm.Oo).apply(
                    null,
                    arguments,
                  );
                }),
                Dm = (i._emscripten_bind_b2PulleyJoint_GetCollideConnected_0 = function () {
                  return (Dm = i._emscripten_bind_b2PulleyJoint_GetCollideConnected_0 =
                    i.asm.Po).apply(null, arguments);
                }),
                vm = (i._emscripten_bind_b2PulleyJoint___destroy___0 = function () {
                  return (vm = i._emscripten_bind_b2PulleyJoint___destroy___0 = i.asm.Qo).apply(
                    null,
                    arguments,
                  );
                }),
                Sm = (i._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0 = function () {
                  return (Sm = i._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0 =
                    i.asm.Ro).apply(null, arguments);
                }),
                Am = (i._emscripten_bind_b2MouseJointDef_get_target_0 = function () {
                  return (Am = i._emscripten_bind_b2MouseJointDef_get_target_0 = i.asm.So).apply(
                    null,
                    arguments,
                  );
                }),
                xm = (i._emscripten_bind_b2MouseJointDef_set_target_1 = function () {
                  return (xm = i._emscripten_bind_b2MouseJointDef_set_target_1 = i.asm.To).apply(
                    null,
                    arguments,
                  );
                }),
                Bm = (i._emscripten_bind_b2MouseJointDef_get_maxForce_0 = function () {
                  return (Bm = i._emscripten_bind_b2MouseJointDef_get_maxForce_0 = i.asm.Uo).apply(
                    null,
                    arguments,
                  );
                }),
                jm = (i._emscripten_bind_b2MouseJointDef_set_maxForce_1 = function () {
                  return (jm = i._emscripten_bind_b2MouseJointDef_set_maxForce_1 = i.asm.Vo).apply(
                    null,
                    arguments,
                  );
                }),
                Gm = (i._emscripten_bind_b2MouseJointDef_get_frequencyHz_0 = function () {
                  return (Gm = i._emscripten_bind_b2MouseJointDef_get_frequencyHz_0 =
                    i.asm.Wo).apply(null, arguments);
                }),
                Cm = (i._emscripten_bind_b2MouseJointDef_set_frequencyHz_1 = function () {
                  return (Cm = i._emscripten_bind_b2MouseJointDef_set_frequencyHz_1 =
                    i.asm.Xo).apply(null, arguments);
                }),
                Pm = (i._emscripten_bind_b2MouseJointDef_get_dampingRatio_0 = function () {
                  return (Pm = i._emscripten_bind_b2MouseJointDef_get_dampingRatio_0 =
                    i.asm.Yo).apply(null, arguments);
                }),
                Rm = (i._emscripten_bind_b2MouseJointDef_set_dampingRatio_1 = function () {
                  return (Rm = i._emscripten_bind_b2MouseJointDef_set_dampingRatio_1 =
                    i.asm.Zo).apply(null, arguments);
                }),
                Mm = (i._emscripten_bind_b2MouseJointDef_get_type_0 = function () {
                  return (Mm = i._emscripten_bind_b2MouseJointDef_get_type_0 = i.asm._o).apply(
                    null,
                    arguments,
                  );
                }),
                Tm = (i._emscripten_bind_b2MouseJointDef_set_type_1 = function () {
                  return (Tm = i._emscripten_bind_b2MouseJointDef_set_type_1 = i.asm.$o).apply(
                    null,
                    arguments,
                  );
                }),
                Fm = (i._emscripten_bind_b2MouseJointDef_get_userData_0 = function () {
                  return (Fm = i._emscripten_bind_b2MouseJointDef_get_userData_0 = i.asm.ap).apply(
                    null,
                    arguments,
                  );
                }),
                Lm = (i._emscripten_bind_b2MouseJointDef_set_userData_1 = function () {
                  return (Lm = i._emscripten_bind_b2MouseJointDef_set_userData_1 = i.asm.bp).apply(
                    null,
                    arguments,
                  );
                }),
                Im = (i._emscripten_bind_b2MouseJointDef_get_bodyA_0 = function () {
                  return (Im = i._emscripten_bind_b2MouseJointDef_get_bodyA_0 = i.asm.cp).apply(
                    null,
                    arguments,
                  );
                }),
                Wm = (i._emscripten_bind_b2MouseJointDef_set_bodyA_1 = function () {
                  return (Wm = i._emscripten_bind_b2MouseJointDef_set_bodyA_1 = i.asm.dp).apply(
                    null,
                    arguments,
                  );
                }),
                Om = (i._emscripten_bind_b2MouseJointDef_get_bodyB_0 = function () {
                  return (Om = i._emscripten_bind_b2MouseJointDef_get_bodyB_0 = i.asm.ep).apply(
                    null,
                    arguments,
                  );
                }),
                Vm = (i._emscripten_bind_b2MouseJointDef_set_bodyB_1 = function () {
                  return (Vm = i._emscripten_bind_b2MouseJointDef_set_bodyB_1 = i.asm.fp).apply(
                    null,
                    arguments,
                  );
                }),
                Em = (i._emscripten_bind_b2MouseJointDef_get_collideConnected_0 = function () {
                  return (Em = i._emscripten_bind_b2MouseJointDef_get_collideConnected_0 =
                    i.asm.gp).apply(null, arguments);
                }),
                qm = (i._emscripten_bind_b2MouseJointDef_set_collideConnected_1 = function () {
                  return (qm = i._emscripten_bind_b2MouseJointDef_set_collideConnected_1 =
                    i.asm.hp).apply(null, arguments);
                }),
                km = (i._emscripten_bind_b2MouseJointDef___destroy___0 = function () {
                  return (km = i._emscripten_bind_b2MouseJointDef___destroy___0 = i.asm.ip).apply(
                    null,
                    arguments,
                  );
                }),
                Nm = (i._emscripten_bind_b2Contact_GetManifold_0 = function () {
                  return (Nm = i._emscripten_bind_b2Contact_GetManifold_0 = i.asm.jp).apply(
                    null,
                    arguments,
                  );
                }),
                Xm = (i._emscripten_bind_b2Contact_GetWorldManifold_1 = function () {
                  return (Xm = i._emscripten_bind_b2Contact_GetWorldManifold_1 = i.asm.kp).apply(
                    null,
                    arguments,
                  );
                }),
                Hm = (i._emscripten_bind_b2Contact_IsTouching_0 = function () {
                  return (Hm = i._emscripten_bind_b2Contact_IsTouching_0 = i.asm.lp).apply(
                    null,
                    arguments,
                  );
                }),
                zm = (i._emscripten_bind_b2Contact_SetEnabled_1 = function () {
                  return (zm = i._emscripten_bind_b2Contact_SetEnabled_1 = i.asm.mp).apply(
                    null,
                    arguments,
                  );
                }),
                Qm = (i._emscripten_bind_b2Contact_IsEnabled_0 = function () {
                  return (Qm = i._emscripten_bind_b2Contact_IsEnabled_0 = i.asm.np).apply(
                    null,
                    arguments,
                  );
                }),
                Zm = (i._emscripten_bind_b2Contact_GetNext_0 = function () {
                  return (Zm = i._emscripten_bind_b2Contact_GetNext_0 = i.asm.op).apply(
                    null,
                    arguments,
                  );
                }),
                Ym = (i._emscripten_bind_b2Contact_GetFixtureA_0 = function () {
                  return (Ym = i._emscripten_bind_b2Contact_GetFixtureA_0 = i.asm.pp).apply(
                    null,
                    arguments,
                  );
                }),
                Km = (i._emscripten_bind_b2Contact_GetChildIndexA_0 = function () {
                  return (Km = i._emscripten_bind_b2Contact_GetChildIndexA_0 = i.asm.qp).apply(
                    null,
                    arguments,
                  );
                }),
                $m = (i._emscripten_bind_b2Contact_GetFixtureB_0 = function () {
                  return ($m = i._emscripten_bind_b2Contact_GetFixtureB_0 = i.asm.rp).apply(
                    null,
                    arguments,
                  );
                }),
                tf = (i._emscripten_bind_b2Contact_GetChildIndexB_0 = function () {
                  return (tf = i._emscripten_bind_b2Contact_GetChildIndexB_0 = i.asm.sp).apply(
                    null,
                    arguments,
                  );
                }),
                ef = (i._emscripten_bind_b2Contact_SetFriction_1 = function () {
                  return (ef = i._emscripten_bind_b2Contact_SetFriction_1 = i.asm.tp).apply(
                    null,
                    arguments,
                  );
                }),
                nf = (i._emscripten_bind_b2Contact_GetFriction_0 = function () {
                  return (nf = i._emscripten_bind_b2Contact_GetFriction_0 = i.asm.up).apply(
                    null,
                    arguments,
                  );
                }),
                of = (i._emscripten_bind_b2Contact_ResetFriction_0 = function () {
                  return (of = i._emscripten_bind_b2Contact_ResetFriction_0 = i.asm.vp).apply(
                    null,
                    arguments,
                  );
                }),
                _f = (i._emscripten_bind_b2Contact_SetRestitution_1 = function () {
                  return (_f = i._emscripten_bind_b2Contact_SetRestitution_1 = i.asm.wp).apply(
                    null,
                    arguments,
                  );
                }),
                rf = (i._emscripten_bind_b2Contact_GetRestitution_0 = function () {
                  return (rf = i._emscripten_bind_b2Contact_GetRestitution_0 = i.asm.xp).apply(
                    null,
                    arguments,
                  );
                }),
                pf = (i._emscripten_bind_b2Contact_ResetRestitution_0 = function () {
                  return (pf = i._emscripten_bind_b2Contact_ResetRestitution_0 = i.asm.yp).apply(
                    null,
                    arguments,
                  );
                }),
                sf = (i._emscripten_bind_b2Contact_SetTangentSpeed_1 = function () {
                  return (sf = i._emscripten_bind_b2Contact_SetTangentSpeed_1 = i.asm.zp).apply(
                    null,
                    arguments,
                  );
                }),
                cf = (i._emscripten_bind_b2Contact_GetTangentSpeed_0 = function () {
                  return (cf = i._emscripten_bind_b2Contact_GetTangentSpeed_0 = i.asm.Ap).apply(
                    null,
                    arguments,
                  );
                }),
                uf = (i._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0 = function () {
                  return (uf = i._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0 =
                    i.asm.Bp).apply(null, arguments);
                }),
                af = (i._emscripten_bind_b2DistanceJointDef_Initialize_4 = function () {
                  return (af = i._emscripten_bind_b2DistanceJointDef_Initialize_4 = i.asm.Cp).apply(
                    null,
                    arguments,
                  );
                }),
                lf = (i._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0 = function () {
                  return (lf = i._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0 =
                    i.asm.Dp).apply(null, arguments);
                }),
                yf = (i._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1 = function () {
                  return (yf = i._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1 =
                    i.asm.Ep).apply(null, arguments);
                }),
                bf = (i._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0 = function () {
                  return (bf = i._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0 =
                    i.asm.Fp).apply(null, arguments);
                }),
                df = (i._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1 = function () {
                  return (df = i._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1 =
                    i.asm.Gp).apply(null, arguments);
                }),
                mf = (i._emscripten_bind_b2DistanceJointDef_get_length_0 = function () {
                  return (mf = i._emscripten_bind_b2DistanceJointDef_get_length_0 = i.asm.Hp).apply(
                    null,
                    arguments,
                  );
                }),
                ff = (i._emscripten_bind_b2DistanceJointDef_set_length_1 = function () {
                  return (ff = i._emscripten_bind_b2DistanceJointDef_set_length_1 = i.asm.Ip).apply(
                    null,
                    arguments,
                  );
                }),
                hf = (i._emscripten_bind_b2DistanceJointDef_get_frequencyHz_0 = function () {
                  return (hf = i._emscripten_bind_b2DistanceJointDef_get_frequencyHz_0 =
                    i.asm.Jp).apply(null, arguments);
                }),
                gf = (i._emscripten_bind_b2DistanceJointDef_set_frequencyHz_1 = function () {
                  return (gf = i._emscripten_bind_b2DistanceJointDef_set_frequencyHz_1 =
                    i.asm.Kp).apply(null, arguments);
                }),
                Uf = (i._emscripten_bind_b2DistanceJointDef_get_dampingRatio_0 = function () {
                  return (Uf = i._emscripten_bind_b2DistanceJointDef_get_dampingRatio_0 =
                    i.asm.Lp).apply(null, arguments);
                }),
                wf = (i._emscripten_bind_b2DistanceJointDef_set_dampingRatio_1 = function () {
                  return (wf = i._emscripten_bind_b2DistanceJointDef_set_dampingRatio_1 =
                    i.asm.Mp).apply(null, arguments);
                }),
                Jf = (i._emscripten_bind_b2DistanceJointDef_get_type_0 = function () {
                  return (Jf = i._emscripten_bind_b2DistanceJointDef_get_type_0 = i.asm.Np).apply(
                    null,
                    arguments,
                  );
                }),
                Df = (i._emscripten_bind_b2DistanceJointDef_set_type_1 = function () {
                  return (Df = i._emscripten_bind_b2DistanceJointDef_set_type_1 = i.asm.Op).apply(
                    null,
                    arguments,
                  );
                }),
                vf = (i._emscripten_bind_b2DistanceJointDef_get_userData_0 = function () {
                  return (vf = i._emscripten_bind_b2DistanceJointDef_get_userData_0 =
                    i.asm.Pp).apply(null, arguments);
                }),
                Sf = (i._emscripten_bind_b2DistanceJointDef_set_userData_1 = function () {
                  return (Sf = i._emscripten_bind_b2DistanceJointDef_set_userData_1 =
                    i.asm.Qp).apply(null, arguments);
                }),
                Af = (i._emscripten_bind_b2DistanceJointDef_get_bodyA_0 = function () {
                  return (Af = i._emscripten_bind_b2DistanceJointDef_get_bodyA_0 = i.asm.Rp).apply(
                    null,
                    arguments,
                  );
                }),
                xf = (i._emscripten_bind_b2DistanceJointDef_set_bodyA_1 = function () {
                  return (xf = i._emscripten_bind_b2DistanceJointDef_set_bodyA_1 = i.asm.Sp).apply(
                    null,
                    arguments,
                  );
                }),
                Bf = (i._emscripten_bind_b2DistanceJointDef_get_bodyB_0 = function () {
                  return (Bf = i._emscripten_bind_b2DistanceJointDef_get_bodyB_0 = i.asm.Tp).apply(
                    null,
                    arguments,
                  );
                }),
                jf = (i._emscripten_bind_b2DistanceJointDef_set_bodyB_1 = function () {
                  return (jf = i._emscripten_bind_b2DistanceJointDef_set_bodyB_1 = i.asm.Up).apply(
                    null,
                    arguments,
                  );
                }),
                Gf = (i._emscripten_bind_b2DistanceJointDef_get_collideConnected_0 = function () {
                  return (Gf = i._emscripten_bind_b2DistanceJointDef_get_collideConnected_0 =
                    i.asm.Vp).apply(null, arguments);
                }),
                Cf = (i._emscripten_bind_b2DistanceJointDef_set_collideConnected_1 = function () {
                  return (Cf = i._emscripten_bind_b2DistanceJointDef_set_collideConnected_1 =
                    i.asm.Wp).apply(null, arguments);
                }),
                Pf = (i._emscripten_bind_b2DistanceJointDef___destroy___0 = function () {
                  return (Pf = i._emscripten_bind_b2DistanceJointDef___destroy___0 =
                    i.asm.Xp).apply(null, arguments);
                }),
                Rf = (i._emscripten_bind_b2Body_CreateFixture_1 = function () {
                  return (Rf = i._emscripten_bind_b2Body_CreateFixture_1 = i.asm.Yp).apply(
                    null,
                    arguments,
                  );
                }),
                Mf = (i._emscripten_bind_b2Body_CreateFixture_2 = function () {
                  return (Mf = i._emscripten_bind_b2Body_CreateFixture_2 = i.asm.Zp).apply(
                    null,
                    arguments,
                  );
                }),
                Tf = (i._emscripten_bind_b2Body_DestroyFixture_1 = function () {
                  return (Tf = i._emscripten_bind_b2Body_DestroyFixture_1 = i.asm._p).apply(
                    null,
                    arguments,
                  );
                }),
                Ff = (i._emscripten_bind_b2Body_SetTransform_2 = function () {
                  return (Ff = i._emscripten_bind_b2Body_SetTransform_2 = i.asm.$p).apply(
                    null,
                    arguments,
                  );
                }),
                Lf = (i._emscripten_bind_b2Body_GetTransform_0 = function () {
                  return (Lf = i._emscripten_bind_b2Body_GetTransform_0 = i.asm.aq).apply(
                    null,
                    arguments,
                  );
                }),
                If = (i._emscripten_bind_b2Body_GetPosition_0 = function () {
                  return (If = i._emscripten_bind_b2Body_GetPosition_0 = i.asm.bq).apply(
                    null,
                    arguments,
                  );
                }),
                Wf = (i._emscripten_bind_b2Body_GetAngle_0 = function () {
                  return (Wf = i._emscripten_bind_b2Body_GetAngle_0 = i.asm.cq).apply(
                    null,
                    arguments,
                  );
                }),
                Of = (i._emscripten_bind_b2Body_GetWorldCenter_0 = function () {
                  return (Of = i._emscripten_bind_b2Body_GetWorldCenter_0 = i.asm.dq).apply(
                    null,
                    arguments,
                  );
                }),
                Vf = (i._emscripten_bind_b2Body_GetLocalCenter_0 = function () {
                  return (Vf = i._emscripten_bind_b2Body_GetLocalCenter_0 = i.asm.eq).apply(
                    null,
                    arguments,
                  );
                }),
                Ef = (i._emscripten_bind_b2Body_SetLinearVelocity_1 = function () {
                  return (Ef = i._emscripten_bind_b2Body_SetLinearVelocity_1 = i.asm.fq).apply(
                    null,
                    arguments,
                  );
                }),
                qf = (i._emscripten_bind_b2Body_GetLinearVelocity_0 = function () {
                  return (qf = i._emscripten_bind_b2Body_GetLinearVelocity_0 = i.asm.gq).apply(
                    null,
                    arguments,
                  );
                }),
                kf = (i._emscripten_bind_b2Body_SetAngularVelocity_1 = function () {
                  return (kf = i._emscripten_bind_b2Body_SetAngularVelocity_1 = i.asm.hq).apply(
                    null,
                    arguments,
                  );
                }),
                Nf = (i._emscripten_bind_b2Body_GetAngularVelocity_0 = function () {
                  return (Nf = i._emscripten_bind_b2Body_GetAngularVelocity_0 = i.asm.iq).apply(
                    null,
                    arguments,
                  );
                }),
                Xf = (i._emscripten_bind_b2Body_ApplyForce_3 = function () {
                  return (Xf = i._emscripten_bind_b2Body_ApplyForce_3 = i.asm.jq).apply(
                    null,
                    arguments,
                  );
                }),
                Hf = (i._emscripten_bind_b2Body_ApplyForceToCenter_2 = function () {
                  return (Hf = i._emscripten_bind_b2Body_ApplyForceToCenter_2 = i.asm.kq).apply(
                    null,
                    arguments,
                  );
                }),
                zf = (i._emscripten_bind_b2Body_ApplyTorque_2 = function () {
                  return (zf = i._emscripten_bind_b2Body_ApplyTorque_2 = i.asm.lq).apply(
                    null,
                    arguments,
                  );
                }),
                Qf = (i._emscripten_bind_b2Body_ApplyLinearImpulse_3 = function () {
                  return (Qf = i._emscripten_bind_b2Body_ApplyLinearImpulse_3 = i.asm.mq).apply(
                    null,
                    arguments,
                  );
                }),
                Zf = (i._emscripten_bind_b2Body_ApplyAngularImpulse_2 = function () {
                  return (Zf = i._emscripten_bind_b2Body_ApplyAngularImpulse_2 = i.asm.nq).apply(
                    null,
                    arguments,
                  );
                }),
                Yf = (i._emscripten_bind_b2Body_GetMass_0 = function () {
                  return (Yf = i._emscripten_bind_b2Body_GetMass_0 = i.asm.oq).apply(
                    null,
                    arguments,
                  );
                }),
                Kf = (i._emscripten_bind_b2Body_GetInertia_0 = function () {
                  return (Kf = i._emscripten_bind_b2Body_GetInertia_0 = i.asm.pq).apply(
                    null,
                    arguments,
                  );
                }),
                $f = (i._emscripten_bind_b2Body_GetMassData_1 = function () {
                  return ($f = i._emscripten_bind_b2Body_GetMassData_1 = i.asm.qq).apply(
                    null,
                    arguments,
                  );
                }),
                th = (i._emscripten_bind_b2Body_SetMassData_1 = function () {
                  return (th = i._emscripten_bind_b2Body_SetMassData_1 = i.asm.rq).apply(
                    null,
                    arguments,
                  );
                }),
                eh = (i._emscripten_bind_b2Body_ResetMassData_0 = function () {
                  return (eh = i._emscripten_bind_b2Body_ResetMassData_0 = i.asm.sq).apply(
                    null,
                    arguments,
                  );
                }),
                nh = (i._emscripten_bind_b2Body_GetWorldPoint_1 = function () {
                  return (nh = i._emscripten_bind_b2Body_GetWorldPoint_1 = i.asm.tq).apply(
                    null,
                    arguments,
                  );
                }),
                oh = (i._emscripten_bind_b2Body_GetWorldVector_1 = function () {
                  return (oh = i._emscripten_bind_b2Body_GetWorldVector_1 = i.asm.uq).apply(
                    null,
                    arguments,
                  );
                }),
                ih = (i._emscripten_bind_b2Body_GetLocalPoint_1 = function () {
                  return (ih = i._emscripten_bind_b2Body_GetLocalPoint_1 = i.asm.vq).apply(
                    null,
                    arguments,
                  );
                }),
                _h = (i._emscripten_bind_b2Body_GetLocalVector_1 = function () {
                  return (_h = i._emscripten_bind_b2Body_GetLocalVector_1 = i.asm.wq).apply(
                    null,
                    arguments,
                  );
                }),
                rh = (i._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1 = function () {
                  return (rh = i._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1 =
                    i.asm.xq).apply(null, arguments);
                }),
                ph = (i._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1 = function () {
                  return (ph = i._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1 =
                    i.asm.yq).apply(null, arguments);
                }),
                sh = (i._emscripten_bind_b2Body_GetLinearDamping_0 = function () {
                  return (sh = i._emscripten_bind_b2Body_GetLinearDamping_0 = i.asm.zq).apply(
                    null,
                    arguments,
                  );
                }),
                ch = (i._emscripten_bind_b2Body_SetLinearDamping_1 = function () {
                  return (ch = i._emscripten_bind_b2Body_SetLinearDamping_1 = i.asm.Aq).apply(
                    null,
                    arguments,
                  );
                }),
                uh = (i._emscripten_bind_b2Body_GetAngularDamping_0 = function () {
                  return (uh = i._emscripten_bind_b2Body_GetAngularDamping_0 = i.asm.Bq).apply(
                    null,
                    arguments,
                  );
                }),
                ah = (i._emscripten_bind_b2Body_SetAngularDamping_1 = function () {
                  return (ah = i._emscripten_bind_b2Body_SetAngularDamping_1 = i.asm.Cq).apply(
                    null,
                    arguments,
                  );
                }),
                lh = (i._emscripten_bind_b2Body_GetGravityScale_0 = function () {
                  return (lh = i._emscripten_bind_b2Body_GetGravityScale_0 = i.asm.Dq).apply(
                    null,
                    arguments,
                  );
                }),
                yh = (i._emscripten_bind_b2Body_SetGravityScale_1 = function () {
                  return (yh = i._emscripten_bind_b2Body_SetGravityScale_1 = i.asm.Eq).apply(
                    null,
                    arguments,
                  );
                }),
                bh = (i._emscripten_bind_b2Body_SetType_1 = function () {
                  return (bh = i._emscripten_bind_b2Body_SetType_1 = i.asm.Fq).apply(
                    null,
                    arguments,
                  );
                }),
                dh = (i._emscripten_bind_b2Body_GetType_0 = function () {
                  return (dh = i._emscripten_bind_b2Body_GetType_0 = i.asm.Gq).apply(
                    null,
                    arguments,
                  );
                }),
                mh = (i._emscripten_bind_b2Body_SetBullet_1 = function () {
                  return (mh = i._emscripten_bind_b2Body_SetBullet_1 = i.asm.Hq).apply(
                    null,
                    arguments,
                  );
                }),
                fh = (i._emscripten_bind_b2Body_IsBullet_0 = function () {
                  return (fh = i._emscripten_bind_b2Body_IsBullet_0 = i.asm.Iq).apply(
                    null,
                    arguments,
                  );
                }),
                hh = (i._emscripten_bind_b2Body_SetSleepingAllowed_1 = function () {
                  return (hh = i._emscripten_bind_b2Body_SetSleepingAllowed_1 = i.asm.Jq).apply(
                    null,
                    arguments,
                  );
                }),
                gh = (i._emscripten_bind_b2Body_IsSleepingAllowed_0 = function () {
                  return (gh = i._emscripten_bind_b2Body_IsSleepingAllowed_0 = i.asm.Kq).apply(
                    null,
                    arguments,
                  );
                }),
                Uh = (i._emscripten_bind_b2Body_SetAwake_1 = function () {
                  return (Uh = i._emscripten_bind_b2Body_SetAwake_1 = i.asm.Lq).apply(
                    null,
                    arguments,
                  );
                }),
                wh = (i._emscripten_bind_b2Body_IsAwake_0 = function () {
                  return (wh = i._emscripten_bind_b2Body_IsAwake_0 = i.asm.Mq).apply(
                    null,
                    arguments,
                  );
                }),
                Jh = (i._emscripten_bind_b2Body_SetActive_1 = function () {
                  return (Jh = i._emscripten_bind_b2Body_SetActive_1 = i.asm.Nq).apply(
                    null,
                    arguments,
                  );
                }),
                Dh = (i._emscripten_bind_b2Body_IsActive_0 = function () {
                  return (Dh = i._emscripten_bind_b2Body_IsActive_0 = i.asm.Oq).apply(
                    null,
                    arguments,
                  );
                }),
                vh = (i._emscripten_bind_b2Body_SetFixedRotation_1 = function () {
                  return (vh = i._emscripten_bind_b2Body_SetFixedRotation_1 = i.asm.Pq).apply(
                    null,
                    arguments,
                  );
                }),
                Sh = (i._emscripten_bind_b2Body_IsFixedRotation_0 = function () {
                  return (Sh = i._emscripten_bind_b2Body_IsFixedRotation_0 = i.asm.Qq).apply(
                    null,
                    arguments,
                  );
                }),
                Ah = (i._emscripten_bind_b2Body_GetFixtureList_0 = function () {
                  return (Ah = i._emscripten_bind_b2Body_GetFixtureList_0 = i.asm.Rq).apply(
                    null,
                    arguments,
                  );
                }),
                xh = (i._emscripten_bind_b2Body_GetJointList_0 = function () {
                  return (xh = i._emscripten_bind_b2Body_GetJointList_0 = i.asm.Sq).apply(
                    null,
                    arguments,
                  );
                }),
                Bh = (i._emscripten_bind_b2Body_GetContactList_0 = function () {
                  return (Bh = i._emscripten_bind_b2Body_GetContactList_0 = i.asm.Tq).apply(
                    null,
                    arguments,
                  );
                }),
                jh = (i._emscripten_bind_b2Body_GetNext_0 = function () {
                  return (jh = i._emscripten_bind_b2Body_GetNext_0 = i.asm.Uq).apply(
                    null,
                    arguments,
                  );
                }),
                Gh = (i._emscripten_bind_b2Body_GetUserData_0 = function () {
                  return (Gh = i._emscripten_bind_b2Body_GetUserData_0 = i.asm.Vq).apply(
                    null,
                    arguments,
                  );
                }),
                Ch = (i._emscripten_bind_b2Body_SetUserData_1 = function () {
                  return (Ch = i._emscripten_bind_b2Body_SetUserData_1 = i.asm.Wq).apply(
                    null,
                    arguments,
                  );
                }),
                Ph = (i._emscripten_bind_b2Body_GetWorld_0 = function () {
                  return (Ph = i._emscripten_bind_b2Body_GetWorld_0 = i.asm.Xq).apply(
                    null,
                    arguments,
                  );
                }),
                Rh = (i._emscripten_bind_b2Body_Dump_0 = function () {
                  return (Rh = i._emscripten_bind_b2Body_Dump_0 = i.asm.Yq).apply(null, arguments);
                }),
                Mh = (i._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0 = function () {
                  return (Mh = i._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0 =
                    i.asm.Zq).apply(null, arguments);
                }),
                Th = (i._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0 = function () {
                  return (Th = i._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0 =
                    i.asm._q).apply(null, arguments);
                }),
                Fh = (i._emscripten_bind_b2FrictionJoint_SetMaxForce_1 = function () {
                  return (Fh = i._emscripten_bind_b2FrictionJoint_SetMaxForce_1 = i.asm.$q).apply(
                    null,
                    arguments,
                  );
                }),
                Lh = (i._emscripten_bind_b2FrictionJoint_GetMaxForce_0 = function () {
                  return (Lh = i._emscripten_bind_b2FrictionJoint_GetMaxForce_0 = i.asm.ar).apply(
                    null,
                    arguments,
                  );
                }),
                Ih = (i._emscripten_bind_b2FrictionJoint_SetMaxTorque_1 = function () {
                  return (Ih = i._emscripten_bind_b2FrictionJoint_SetMaxTorque_1 = i.asm.br).apply(
                    null,
                    arguments,
                  );
                }),
                Wh = (i._emscripten_bind_b2FrictionJoint_GetMaxTorque_0 = function () {
                  return (Wh = i._emscripten_bind_b2FrictionJoint_GetMaxTorque_0 = i.asm.cr).apply(
                    null,
                    arguments,
                  );
                }),
                Oh = (i._emscripten_bind_b2FrictionJoint_GetType_0 = function () {
                  return (Oh = i._emscripten_bind_b2FrictionJoint_GetType_0 = i.asm.dr).apply(
                    null,
                    arguments,
                  );
                }),
                Vh = (i._emscripten_bind_b2FrictionJoint_GetBodyA_0 = function () {
                  return (Vh = i._emscripten_bind_b2FrictionJoint_GetBodyA_0 = i.asm.er).apply(
                    null,
                    arguments,
                  );
                }),
                Eh = (i._emscripten_bind_b2FrictionJoint_GetBodyB_0 = function () {
                  return (Eh = i._emscripten_bind_b2FrictionJoint_GetBodyB_0 = i.asm.fr).apply(
                    null,
                    arguments,
                  );
                }),
                qh = (i._emscripten_bind_b2FrictionJoint_GetAnchorA_0 = function () {
                  return (qh = i._emscripten_bind_b2FrictionJoint_GetAnchorA_0 = i.asm.gr).apply(
                    null,
                    arguments,
                  );
                }),
                kh = (i._emscripten_bind_b2FrictionJoint_GetAnchorB_0 = function () {
                  return (kh = i._emscripten_bind_b2FrictionJoint_GetAnchorB_0 = i.asm.hr).apply(
                    null,
                    arguments,
                  );
                }),
                Nh = (i._emscripten_bind_b2FrictionJoint_GetReactionForce_1 = function () {
                  return (Nh = i._emscripten_bind_b2FrictionJoint_GetReactionForce_1 =
                    i.asm.ir).apply(null, arguments);
                }),
                Xh = (i._emscripten_bind_b2FrictionJoint_GetReactionTorque_1 = function () {
                  return (Xh = i._emscripten_bind_b2FrictionJoint_GetReactionTorque_1 =
                    i.asm.jr).apply(null, arguments);
                }),
                Hh = (i._emscripten_bind_b2FrictionJoint_GetNext_0 = function () {
                  return (Hh = i._emscripten_bind_b2FrictionJoint_GetNext_0 = i.asm.kr).apply(
                    null,
                    arguments,
                  );
                }),
                zh = (i._emscripten_bind_b2FrictionJoint_GetUserData_0 = function () {
                  return (zh = i._emscripten_bind_b2FrictionJoint_GetUserData_0 = i.asm.lr).apply(
                    null,
                    arguments,
                  );
                }),
                Qh = (i._emscripten_bind_b2FrictionJoint_SetUserData_1 = function () {
                  return (Qh = i._emscripten_bind_b2FrictionJoint_SetUserData_1 = i.asm.mr).apply(
                    null,
                    arguments,
                  );
                }),
                Zh = (i._emscripten_bind_b2FrictionJoint_IsActive_0 = function () {
                  return (Zh = i._emscripten_bind_b2FrictionJoint_IsActive_0 = i.asm.nr).apply(
                    null,
                    arguments,
                  );
                }),
                Yh = (i._emscripten_bind_b2FrictionJoint_GetCollideConnected_0 = function () {
                  return (Yh = i._emscripten_bind_b2FrictionJoint_GetCollideConnected_0 =
                    i.asm.or).apply(null, arguments);
                }),
                Kh = (i._emscripten_bind_b2FrictionJoint___destroy___0 = function () {
                  return (Kh = i._emscripten_bind_b2FrictionJoint___destroy___0 = i.asm.pr).apply(
                    null,
                    arguments,
                  );
                }),
                $h = (i._emscripten_bind_b2DestructionListener___destroy___0 = function () {
                  return ($h = i._emscripten_bind_b2DestructionListener___destroy___0 =
                    i.asm.qr).apply(null, arguments);
                }),
                tg = (i._emscripten_bind_b2GearJointDef_b2GearJointDef_0 = function () {
                  return (tg = i._emscripten_bind_b2GearJointDef_b2GearJointDef_0 = i.asm.rr).apply(
                    null,
                    arguments,
                  );
                }),
                eg = (i._emscripten_bind_b2GearJointDef_get_joint1_0 = function () {
                  return (eg = i._emscripten_bind_b2GearJointDef_get_joint1_0 = i.asm.sr).apply(
                    null,
                    arguments,
                  );
                }),
                ng = (i._emscripten_bind_b2GearJointDef_set_joint1_1 = function () {
                  return (ng = i._emscripten_bind_b2GearJointDef_set_joint1_1 = i.asm.tr).apply(
                    null,
                    arguments,
                  );
                }),
                og = (i._emscripten_bind_b2GearJointDef_get_joint2_0 = function () {
                  return (og = i._emscripten_bind_b2GearJointDef_get_joint2_0 = i.asm.ur).apply(
                    null,
                    arguments,
                  );
                }),
                ig = (i._emscripten_bind_b2GearJointDef_set_joint2_1 = function () {
                  return (ig = i._emscripten_bind_b2GearJointDef_set_joint2_1 = i.asm.vr).apply(
                    null,
                    arguments,
                  );
                }),
                _g = (i._emscripten_bind_b2GearJointDef_get_ratio_0 = function () {
                  return (_g = i._emscripten_bind_b2GearJointDef_get_ratio_0 = i.asm.wr).apply(
                    null,
                    arguments,
                  );
                }),
                rg = (i._emscripten_bind_b2GearJointDef_set_ratio_1 = function () {
                  return (rg = i._emscripten_bind_b2GearJointDef_set_ratio_1 = i.asm.xr).apply(
                    null,
                    arguments,
                  );
                }),
                pg = (i._emscripten_bind_b2GearJointDef_get_type_0 = function () {
                  return (pg = i._emscripten_bind_b2GearJointDef_get_type_0 = i.asm.yr).apply(
                    null,
                    arguments,
                  );
                }),
                sg = (i._emscripten_bind_b2GearJointDef_set_type_1 = function () {
                  return (sg = i._emscripten_bind_b2GearJointDef_set_type_1 = i.asm.zr).apply(
                    null,
                    arguments,
                  );
                }),
                cg = (i._emscripten_bind_b2GearJointDef_get_userData_0 = function () {
                  return (cg = i._emscripten_bind_b2GearJointDef_get_userData_0 = i.asm.Ar).apply(
                    null,
                    arguments,
                  );
                }),
                ug = (i._emscripten_bind_b2GearJointDef_set_userData_1 = function () {
                  return (ug = i._emscripten_bind_b2GearJointDef_set_userData_1 = i.asm.Br).apply(
                    null,
                    arguments,
                  );
                }),
                ag = (i._emscripten_bind_b2GearJointDef_get_bodyA_0 = function () {
                  return (ag = i._emscripten_bind_b2GearJointDef_get_bodyA_0 = i.asm.Cr).apply(
                    null,
                    arguments,
                  );
                }),
                lg = (i._emscripten_bind_b2GearJointDef_set_bodyA_1 = function () {
                  return (lg = i._emscripten_bind_b2GearJointDef_set_bodyA_1 = i.asm.Dr).apply(
                    null,
                    arguments,
                  );
                }),
                yg = (i._emscripten_bind_b2GearJointDef_get_bodyB_0 = function () {
                  return (yg = i._emscripten_bind_b2GearJointDef_get_bodyB_0 = i.asm.Er).apply(
                    null,
                    arguments,
                  );
                }),
                bg = (i._emscripten_bind_b2GearJointDef_set_bodyB_1 = function () {
                  return (bg = i._emscripten_bind_b2GearJointDef_set_bodyB_1 = i.asm.Fr).apply(
                    null,
                    arguments,
                  );
                }),
                dg = (i._emscripten_bind_b2GearJointDef_get_collideConnected_0 = function () {
                  return (dg = i._emscripten_bind_b2GearJointDef_get_collideConnected_0 =
                    i.asm.Gr).apply(null, arguments);
                }),
                mg = (i._emscripten_bind_b2GearJointDef_set_collideConnected_1 = function () {
                  return (mg = i._emscripten_bind_b2GearJointDef_set_collideConnected_1 =
                    i.asm.Hr).apply(null, arguments);
                }),
                fg = (i._emscripten_bind_b2GearJointDef___destroy___0 = function () {
                  return (fg = i._emscripten_bind_b2GearJointDef___destroy___0 = i.asm.Ir).apply(
                    null,
                    arguments,
                  );
                }),
                hg = (i._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0 = function () {
                  return (hg = i._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0 =
                    i.asm.Jr).apply(null, arguments);
                }),
                gg = (i._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0 = function () {
                  return (gg = i._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0 =
                    i.asm.Kr).apply(null, arguments);
                }),
                Ug = (i._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0 = function () {
                  return (Ug = i._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0 =
                    i.asm.Lr).apply(null, arguments);
                }),
                wg = (i._emscripten_bind_b2RevoluteJoint_GetJointAngle_0 = function () {
                  return (wg = i._emscripten_bind_b2RevoluteJoint_GetJointAngle_0 = i.asm.Mr).apply(
                    null,
                    arguments,
                  );
                }),
                Jg = (i._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0 = function () {
                  return (Jg = i._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0 = i.asm.Nr).apply(
                    null,
                    arguments,
                  );
                }),
                Dg = (i._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0 = function () {
                  return (Dg = i._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0 =
                    i.asm.Or).apply(null, arguments);
                }),
                vg = (i._emscripten_bind_b2RevoluteJoint_EnableLimit_1 = function () {
                  return (vg = i._emscripten_bind_b2RevoluteJoint_EnableLimit_1 = i.asm.Pr).apply(
                    null,
                    arguments,
                  );
                }),
                Sg = (i._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0 = function () {
                  return (Sg = i._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0 = i.asm.Qr).apply(
                    null,
                    arguments,
                  );
                }),
                Ag = (i._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0 = function () {
                  return (Ag = i._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0 = i.asm.Rr).apply(
                    null,
                    arguments,
                  );
                }),
                xg = (i._emscripten_bind_b2RevoluteJoint_SetLimits_2 = function () {
                  return (xg = i._emscripten_bind_b2RevoluteJoint_SetLimits_2 = i.asm.Sr).apply(
                    null,
                    arguments,
                  );
                }),
                Bg = (i._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0 = function () {
                  return (Bg = i._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0 =
                    i.asm.Tr).apply(null, arguments);
                }),
                jg = (i._emscripten_bind_b2RevoluteJoint_EnableMotor_1 = function () {
                  return (jg = i._emscripten_bind_b2RevoluteJoint_EnableMotor_1 = i.asm.Ur).apply(
                    null,
                    arguments,
                  );
                }),
                Gg = (i._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1 = function () {
                  return (Gg = i._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1 = i.asm.Vr).apply(
                    null,
                    arguments,
                  );
                }),
                Cg = (i._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0 = function () {
                  return (Cg = i._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0 = i.asm.Wr).apply(
                    null,
                    arguments,
                  );
                }),
                Pg = (i._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1 = function () {
                  return (Pg = i._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1 =
                    i.asm.Xr).apply(null, arguments);
                }),
                Rg = (i._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0 = function () {
                  return (Rg = i._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0 =
                    i.asm.Yr).apply(null, arguments);
                }),
                Mg = (i._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1 = function () {
                  return (Mg = i._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1 =
                    i.asm.Zr).apply(null, arguments);
                }),
                Tg = (i._emscripten_bind_b2RevoluteJoint_GetType_0 = function () {
                  return (Tg = i._emscripten_bind_b2RevoluteJoint_GetType_0 = i.asm._r).apply(
                    null,
                    arguments,
                  );
                }),
                Fg = (i._emscripten_bind_b2RevoluteJoint_GetBodyA_0 = function () {
                  return (Fg = i._emscripten_bind_b2RevoluteJoint_GetBodyA_0 = i.asm.$r).apply(
                    null,
                    arguments,
                  );
                }),
                Lg = (i._emscripten_bind_b2RevoluteJoint_GetBodyB_0 = function () {
                  return (Lg = i._emscripten_bind_b2RevoluteJoint_GetBodyB_0 = i.asm.as).apply(
                    null,
                    arguments,
                  );
                }),
                Ig = (i._emscripten_bind_b2RevoluteJoint_GetAnchorA_0 = function () {
                  return (Ig = i._emscripten_bind_b2RevoluteJoint_GetAnchorA_0 = i.asm.bs).apply(
                    null,
                    arguments,
                  );
                }),
                Wg = (i._emscripten_bind_b2RevoluteJoint_GetAnchorB_0 = function () {
                  return (Wg = i._emscripten_bind_b2RevoluteJoint_GetAnchorB_0 = i.asm.cs).apply(
                    null,
                    arguments,
                  );
                }),
                Og = (i._emscripten_bind_b2RevoluteJoint_GetReactionForce_1 = function () {
                  return (Og = i._emscripten_bind_b2RevoluteJoint_GetReactionForce_1 =
                    i.asm.ds).apply(null, arguments);
                }),
                Vg = (i._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1 = function () {
                  return (Vg = i._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1 =
                    i.asm.es).apply(null, arguments);
                }),
                Eg = (i._emscripten_bind_b2RevoluteJoint_GetNext_0 = function () {
                  return (Eg = i._emscripten_bind_b2RevoluteJoint_GetNext_0 = i.asm.fs).apply(
                    null,
                    arguments,
                  );
                }),
                qg = (i._emscripten_bind_b2RevoluteJoint_GetUserData_0 = function () {
                  return (qg = i._emscripten_bind_b2RevoluteJoint_GetUserData_0 = i.asm.gs).apply(
                    null,
                    arguments,
                  );
                }),
                kg = (i._emscripten_bind_b2RevoluteJoint_SetUserData_1 = function () {
                  return (kg = i._emscripten_bind_b2RevoluteJoint_SetUserData_1 = i.asm.hs).apply(
                    null,
                    arguments,
                  );
                }),
                Ng = (i._emscripten_bind_b2RevoluteJoint_IsActive_0 = function () {
                  return (Ng = i._emscripten_bind_b2RevoluteJoint_IsActive_0 = i.asm.is).apply(
                    null,
                    arguments,
                  );
                }),
                Xg = (i._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0 = function () {
                  return (Xg = i._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0 =
                    i.asm.js).apply(null, arguments);
                }),
                Hg = (i._emscripten_bind_b2RevoluteJoint___destroy___0 = function () {
                  return (Hg = i._emscripten_bind_b2RevoluteJoint___destroy___0 = i.asm.ks).apply(
                    null,
                    arguments,
                  );
                }),
                zg = (i._emscripten_bind_b2ContactEdge_b2ContactEdge_0 = function () {
                  return (zg = i._emscripten_bind_b2ContactEdge_b2ContactEdge_0 = i.asm.ls).apply(
                    null,
                    arguments,
                  );
                }),
                Qg = (i._emscripten_bind_b2ContactEdge_get_other_0 = function () {
                  return (Qg = i._emscripten_bind_b2ContactEdge_get_other_0 = i.asm.ms).apply(
                    null,
                    arguments,
                  );
                }),
                Zg = (i._emscripten_bind_b2ContactEdge_set_other_1 = function () {
                  return (Zg = i._emscripten_bind_b2ContactEdge_set_other_1 = i.asm.ns).apply(
                    null,
                    arguments,
                  );
                }),
                Yg = (i._emscripten_bind_b2ContactEdge_get_contact_0 = function () {
                  return (Yg = i._emscripten_bind_b2ContactEdge_get_contact_0 = i.asm.os).apply(
                    null,
                    arguments,
                  );
                }),
                Kg = (i._emscripten_bind_b2ContactEdge_set_contact_1 = function () {
                  return (Kg = i._emscripten_bind_b2ContactEdge_set_contact_1 = i.asm.ps).apply(
                    null,
                    arguments,
                  );
                }),
                $g = (i._emscripten_bind_b2ContactEdge_get_prev_0 = function () {
                  return ($g = i._emscripten_bind_b2ContactEdge_get_prev_0 = i.asm.qs).apply(
                    null,
                    arguments,
                  );
                }),
                tU = (i._emscripten_bind_b2ContactEdge_set_prev_1 = function () {
                  return (tU = i._emscripten_bind_b2ContactEdge_set_prev_1 = i.asm.rs).apply(
                    null,
                    arguments,
                  );
                }),
                eU = (i._emscripten_bind_b2ContactEdge_get_next_0 = function () {
                  return (eU = i._emscripten_bind_b2ContactEdge_get_next_0 = i.asm.ss).apply(
                    null,
                    arguments,
                  );
                }),
                nU = (i._emscripten_bind_b2ContactEdge_set_next_1 = function () {
                  return (nU = i._emscripten_bind_b2ContactEdge_set_next_1 = i.asm.ts).apply(
                    null,
                    arguments,
                  );
                }),
                oU = (i._emscripten_bind_b2ContactEdge___destroy___0 = function () {
                  return (oU = i._emscripten_bind_b2ContactEdge___destroy___0 = i.asm.us).apply(
                    null,
                    arguments,
                  );
                }),
                iU = (i._emscripten_bind_b2RopeJointDef_b2RopeJointDef_0 = function () {
                  return (iU = i._emscripten_bind_b2RopeJointDef_b2RopeJointDef_0 = i.asm.vs).apply(
                    null,
                    arguments,
                  );
                }),
                _U = (i._emscripten_bind_b2RopeJointDef_get_localAnchorA_0 = function () {
                  return (_U = i._emscripten_bind_b2RopeJointDef_get_localAnchorA_0 =
                    i.asm.ws).apply(null, arguments);
                }),
                rU = (i._emscripten_bind_b2RopeJointDef_set_localAnchorA_1 = function () {
                  return (rU = i._emscripten_bind_b2RopeJointDef_set_localAnchorA_1 =
                    i.asm.xs).apply(null, arguments);
                }),
                pU = (i._emscripten_bind_b2RopeJointDef_get_localAnchorB_0 = function () {
                  return (pU = i._emscripten_bind_b2RopeJointDef_get_localAnchorB_0 =
                    i.asm.ys).apply(null, arguments);
                }),
                sU = (i._emscripten_bind_b2RopeJointDef_set_localAnchorB_1 = function () {
                  return (sU = i._emscripten_bind_b2RopeJointDef_set_localAnchorB_1 =
                    i.asm.zs).apply(null, arguments);
                }),
                cU = (i._emscripten_bind_b2RopeJointDef_get_maxLength_0 = function () {
                  return (cU = i._emscripten_bind_b2RopeJointDef_get_maxLength_0 = i.asm.As).apply(
                    null,
                    arguments,
                  );
                }),
                uU = (i._emscripten_bind_b2RopeJointDef_set_maxLength_1 = function () {
                  return (uU = i._emscripten_bind_b2RopeJointDef_set_maxLength_1 = i.asm.Bs).apply(
                    null,
                    arguments,
                  );
                }),
                aU = (i._emscripten_bind_b2RopeJointDef_get_type_0 = function () {
                  return (aU = i._emscripten_bind_b2RopeJointDef_get_type_0 = i.asm.Cs).apply(
                    null,
                    arguments,
                  );
                }),
                lU = (i._emscripten_bind_b2RopeJointDef_set_type_1 = function () {
                  return (lU = i._emscripten_bind_b2RopeJointDef_set_type_1 = i.asm.Ds).apply(
                    null,
                    arguments,
                  );
                }),
                yU = (i._emscripten_bind_b2RopeJointDef_get_userData_0 = function () {
                  return (yU = i._emscripten_bind_b2RopeJointDef_get_userData_0 = i.asm.Es).apply(
                    null,
                    arguments,
                  );
                }),
                bU = (i._emscripten_bind_b2RopeJointDef_set_userData_1 = function () {
                  return (bU = i._emscripten_bind_b2RopeJointDef_set_userData_1 = i.asm.Fs).apply(
                    null,
                    arguments,
                  );
                }),
                dU = (i._emscripten_bind_b2RopeJointDef_get_bodyA_0 = function () {
                  return (dU = i._emscripten_bind_b2RopeJointDef_get_bodyA_0 = i.asm.Gs).apply(
                    null,
                    arguments,
                  );
                }),
                mU = (i._emscripten_bind_b2RopeJointDef_set_bodyA_1 = function () {
                  return (mU = i._emscripten_bind_b2RopeJointDef_set_bodyA_1 = i.asm.Hs).apply(
                    null,
                    arguments,
                  );
                }),
                fU = (i._emscripten_bind_b2RopeJointDef_get_bodyB_0 = function () {
                  return (fU = i._emscripten_bind_b2RopeJointDef_get_bodyB_0 = i.asm.Is).apply(
                    null,
                    arguments,
                  );
                }),
                hU = (i._emscripten_bind_b2RopeJointDef_set_bodyB_1 = function () {
                  return (hU = i._emscripten_bind_b2RopeJointDef_set_bodyB_1 = i.asm.Js).apply(
                    null,
                    arguments,
                  );
                }),
                gU = (i._emscripten_bind_b2RopeJointDef_get_collideConnected_0 = function () {
                  return (gU = i._emscripten_bind_b2RopeJointDef_get_collideConnected_0 =
                    i.asm.Ks).apply(null, arguments);
                }),
                UU = (i._emscripten_bind_b2RopeJointDef_set_collideConnected_1 = function () {
                  return (UU = i._emscripten_bind_b2RopeJointDef_set_collideConnected_1 =
                    i.asm.Ls).apply(null, arguments);
                }),
                wU = (i._emscripten_bind_b2RopeJointDef___destroy___0 = function () {
                  return (wU = i._emscripten_bind_b2RopeJointDef___destroy___0 = i.asm.Ms).apply(
                    null,
                    arguments,
                  );
                }),
                JU = (i._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0 = function () {
                  return (JU = i._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0 =
                    i.asm.Ns).apply(null, arguments);
                }),
                DU = (i._emscripten_bind_b2MotorJointDef_Initialize_2 = function () {
                  return (DU = i._emscripten_bind_b2MotorJointDef_Initialize_2 = i.asm.Os).apply(
                    null,
                    arguments,
                  );
                }),
                vU = (i._emscripten_bind_b2MotorJointDef_get_linearOffset_0 = function () {
                  return (vU = i._emscripten_bind_b2MotorJointDef_get_linearOffset_0 =
                    i.asm.Ps).apply(null, arguments);
                }),
                SU = (i._emscripten_bind_b2MotorJointDef_set_linearOffset_1 = function () {
                  return (SU = i._emscripten_bind_b2MotorJointDef_set_linearOffset_1 =
                    i.asm.Qs).apply(null, arguments);
                }),
                AU = (i._emscripten_bind_b2MotorJointDef_get_angularOffset_0 = function () {
                  return (AU = i._emscripten_bind_b2MotorJointDef_get_angularOffset_0 =
                    i.asm.Rs).apply(null, arguments);
                }),
                xU = (i._emscripten_bind_b2MotorJointDef_set_angularOffset_1 = function () {
                  return (xU = i._emscripten_bind_b2MotorJointDef_set_angularOffset_1 =
                    i.asm.Ss).apply(null, arguments);
                }),
                BU = (i._emscripten_bind_b2MotorJointDef_get_maxForce_0 = function () {
                  return (BU = i._emscripten_bind_b2MotorJointDef_get_maxForce_0 = i.asm.Ts).apply(
                    null,
                    arguments,
                  );
                }),
                jU = (i._emscripten_bind_b2MotorJointDef_set_maxForce_1 = function () {
                  return (jU = i._emscripten_bind_b2MotorJointDef_set_maxForce_1 = i.asm.Us).apply(
                    null,
                    arguments,
                  );
                }),
                GU = (i._emscripten_bind_b2MotorJointDef_get_maxTorque_0 = function () {
                  return (GU = i._emscripten_bind_b2MotorJointDef_get_maxTorque_0 = i.asm.Vs).apply(
                    null,
                    arguments,
                  );
                }),
                CU = (i._emscripten_bind_b2MotorJointDef_set_maxTorque_1 = function () {
                  return (CU = i._emscripten_bind_b2MotorJointDef_set_maxTorque_1 = i.asm.Ws).apply(
                    null,
                    arguments,
                  );
                }),
                PU = (i._emscripten_bind_b2MotorJointDef_get_correctionFactor_0 = function () {
                  return (PU = i._emscripten_bind_b2MotorJointDef_get_correctionFactor_0 =
                    i.asm.Xs).apply(null, arguments);
                }),
                RU = (i._emscripten_bind_b2MotorJointDef_set_correctionFactor_1 = function () {
                  return (RU = i._emscripten_bind_b2MotorJointDef_set_correctionFactor_1 =
                    i.asm.Ys).apply(null, arguments);
                }),
                MU = (i._emscripten_bind_b2MotorJointDef_get_type_0 = function () {
                  return (MU = i._emscripten_bind_b2MotorJointDef_get_type_0 = i.asm.Zs).apply(
                    null,
                    arguments,
                  );
                }),
                TU = (i._emscripten_bind_b2MotorJointDef_set_type_1 = function () {
                  return (TU = i._emscripten_bind_b2MotorJointDef_set_type_1 = i.asm._s).apply(
                    null,
                    arguments,
                  );
                }),
                FU = (i._emscripten_bind_b2MotorJointDef_get_userData_0 = function () {
                  return (FU = i._emscripten_bind_b2MotorJointDef_get_userData_0 = i.asm.$s).apply(
                    null,
                    arguments,
                  );
                }),
                LU = (i._emscripten_bind_b2MotorJointDef_set_userData_1 = function () {
                  return (LU = i._emscripten_bind_b2MotorJointDef_set_userData_1 = i.asm.at).apply(
                    null,
                    arguments,
                  );
                }),
                IU = (i._emscripten_bind_b2MotorJointDef_get_bodyA_0 = function () {
                  return (IU = i._emscripten_bind_b2MotorJointDef_get_bodyA_0 = i.asm.bt).apply(
                    null,
                    arguments,
                  );
                }),
                WU = (i._emscripten_bind_b2MotorJointDef_set_bodyA_1 = function () {
                  return (WU = i._emscripten_bind_b2MotorJointDef_set_bodyA_1 = i.asm.ct).apply(
                    null,
                    arguments,
                  );
                }),
                OU = (i._emscripten_bind_b2MotorJointDef_get_bodyB_0 = function () {
                  return (OU = i._emscripten_bind_b2MotorJointDef_get_bodyB_0 = i.asm.dt).apply(
                    null,
                    arguments,
                  );
                }),
                VU = (i._emscripten_bind_b2MotorJointDef_set_bodyB_1 = function () {
                  return (VU = i._emscripten_bind_b2MotorJointDef_set_bodyB_1 = i.asm.et).apply(
                    null,
                    arguments,
                  );
                }),
                EU = (i._emscripten_bind_b2MotorJointDef_get_collideConnected_0 = function () {
                  return (EU = i._emscripten_bind_b2MotorJointDef_get_collideConnected_0 =
                    i.asm.ft).apply(null, arguments);
                }),
                qU = (i._emscripten_bind_b2MotorJointDef_set_collideConnected_1 = function () {
                  return (qU = i._emscripten_bind_b2MotorJointDef_set_collideConnected_1 =
                    i.asm.gt).apply(null, arguments);
                }),
                kU = (i._emscripten_bind_b2MotorJointDef___destroy___0 = function () {
                  return (kU = i._emscripten_bind_b2MotorJointDef___destroy___0 = i.asm.ht).apply(
                    null,
                    arguments,
                  );
                }),
                NU = (i._emscripten_enum_b2ShapeType_e_circle = function () {
                  return (NU = i._emscripten_enum_b2ShapeType_e_circle = i.asm.it).apply(
                    null,
                    arguments,
                  );
                }),
                XU = (i._emscripten_enum_b2ShapeType_e_edge = function () {
                  return (XU = i._emscripten_enum_b2ShapeType_e_edge = i.asm.jt).apply(
                    null,
                    arguments,
                  );
                }),
                HU = (i._emscripten_enum_b2ShapeType_e_polygon = function () {
                  return (HU = i._emscripten_enum_b2ShapeType_e_polygon = i.asm.kt).apply(
                    null,
                    arguments,
                  );
                }),
                zU = (i._emscripten_enum_b2ShapeType_e_chain = function () {
                  return (zU = i._emscripten_enum_b2ShapeType_e_chain = i.asm.lt).apply(
                    null,
                    arguments,
                  );
                }),
                QU = (i._emscripten_enum_b2ShapeType_e_typeCount = function () {
                  return (QU = i._emscripten_enum_b2ShapeType_e_typeCount = i.asm.mt).apply(
                    null,
                    arguments,
                  );
                }),
                ZU = (i._emscripten_enum_b2JointType_e_unknownJoint = function () {
                  return (ZU = i._emscripten_enum_b2JointType_e_unknownJoint = i.asm.nt).apply(
                    null,
                    arguments,
                  );
                }),
                YU = (i._emscripten_enum_b2JointType_e_revoluteJoint = function () {
                  return (YU = i._emscripten_enum_b2JointType_e_revoluteJoint = i.asm.ot).apply(
                    null,
                    arguments,
                  );
                }),
                KU = (i._emscripten_enum_b2JointType_e_prismaticJoint = function () {
                  return (KU = i._emscripten_enum_b2JointType_e_prismaticJoint = i.asm.pt).apply(
                    null,
                    arguments,
                  );
                }),
                $U = (i._emscripten_enum_b2JointType_e_distanceJoint = function () {
                  return ($U = i._emscripten_enum_b2JointType_e_distanceJoint = i.asm.qt).apply(
                    null,
                    arguments,
                  );
                }),
                ew = (i._emscripten_enum_b2JointType_e_pulleyJoint = function () {
                  return (ew = i._emscripten_enum_b2JointType_e_pulleyJoint = i.asm.rt).apply(
                    null,
                    arguments,
                  );
                }),
                ow = (i._emscripten_enum_b2JointType_e_mouseJoint = function () {
                  return (ow = i._emscripten_enum_b2JointType_e_mouseJoint = i.asm.st).apply(
                    null,
                    arguments,
                  );
                }),
                iw = (i._emscripten_enum_b2JointType_e_gearJoint = function () {
                  return (iw = i._emscripten_enum_b2JointType_e_gearJoint = i.asm.tt).apply(
                    null,
                    arguments,
                  );
                }),
                _w = (i._emscripten_enum_b2JointType_e_wheelJoint = function () {
                  return (_w = i._emscripten_enum_b2JointType_e_wheelJoint = i.asm.ut).apply(
                    null,
                    arguments,
                  );
                }),
                rw = (i._emscripten_enum_b2JointType_e_weldJoint = function () {
                  return (rw = i._emscripten_enum_b2JointType_e_weldJoint = i.asm.vt).apply(
                    null,
                    arguments,
                  );
                }),
                pw = (i._emscripten_enum_b2JointType_e_frictionJoint = function () {
                  return (pw = i._emscripten_enum_b2JointType_e_frictionJoint = i.asm.wt).apply(
                    null,
                    arguments,
                  );
                }),
                cw = (i._emscripten_enum_b2JointType_e_ropeJoint = function () {
                  return (cw = i._emscripten_enum_b2JointType_e_ropeJoint = i.asm.xt).apply(
                    null,
                    arguments,
                  );
                }),
                aw = (i._emscripten_enum_b2JointType_e_motorJoint = function () {
                  return (aw = i._emscripten_enum_b2JointType_e_motorJoint = i.asm.yt).apply(
                    null,
                    arguments,
                  );
                }),
                lw = (i._emscripten_enum_b2LimitState_e_inactiveLimit = function () {
                  return (lw = i._emscripten_enum_b2LimitState_e_inactiveLimit = i.asm.zt).apply(
                    null,
                    arguments,
                  );
                }),
                bw = (i._emscripten_enum_b2LimitState_e_atLowerLimit = function () {
                  return (bw = i._emscripten_enum_b2LimitState_e_atLowerLimit = i.asm.At).apply(
                    null,
                    arguments,
                  );
                }),
                dw = (i._emscripten_enum_b2LimitState_e_atUpperLimit = function () {
                  return (dw = i._emscripten_enum_b2LimitState_e_atUpperLimit = i.asm.Bt).apply(
                    null,
                    arguments,
                  );
                }),
                fw = (i._emscripten_enum_b2LimitState_e_equalLimits = function () {
                  return (fw = i._emscripten_enum_b2LimitState_e_equalLimits = i.asm.Ct).apply(
                    null,
                    arguments,
                  );
                }),
                hw = (i._emscripten_enum_b2ManifoldType_e_circles = function () {
                  return (hw = i._emscripten_enum_b2ManifoldType_e_circles = i.asm.Dt).apply(
                    null,
                    arguments,
                  );
                }),
                gw = (i._emscripten_enum_b2ManifoldType_e_faceA = function () {
                  return (gw = i._emscripten_enum_b2ManifoldType_e_faceA = i.asm.Et).apply(
                    null,
                    arguments,
                  );
                }),
                jw = (i._emscripten_enum_b2ManifoldType_e_faceB = function () {
                  return (jw = i._emscripten_enum_b2ManifoldType_e_faceB = i.asm.Ft).apply(
                    null,
                    arguments,
                  );
                }),
                qw = (i._emscripten_enum_b2BodyType_b2_staticBody = function () {
                  return (qw = i._emscripten_enum_b2BodyType_b2_staticBody = i.asm.Gt).apply(
                    null,
                    arguments,
                  );
                }),
                kw = (i._emscripten_enum_b2BodyType_b2_kinematicBody = function () {
                  return (kw = i._emscripten_enum_b2BodyType_b2_kinematicBody = i.asm.Ht).apply(
                    null,
                    arguments,
                  );
                }),
                Zw = (i._emscripten_enum_b2BodyType_b2_dynamicBody = function () {
                  return (Zw = i._emscripten_enum_b2BodyType_b2_dynamicBody = i.asm.It).apply(
                    null,
                    arguments,
                  );
                }),
                Yw = (i._emscripten_enum_b2DrawFlag_e_shapeBit = function () {
                  return (Yw = i._emscripten_enum_b2DrawFlag_e_shapeBit = i.asm.Jt).apply(
                    null,
                    arguments,
                  );
                }),
                $w = (i._emscripten_enum_b2DrawFlag_e_jointBit = function () {
                  return ($w = i._emscripten_enum_b2DrawFlag_e_jointBit = i.asm.Kt).apply(
                    null,
                    arguments,
                  );
                }),
                tJ = (i._emscripten_enum_b2DrawFlag_e_aabbBit = function () {
                  return (tJ = i._emscripten_enum_b2DrawFlag_e_aabbBit = i.asm.Lt).apply(
                    null,
                    arguments,
                  );
                }),
                eJ = (i._emscripten_enum_b2DrawFlag_e_pairBit = function () {
                  return (eJ = i._emscripten_enum_b2DrawFlag_e_pairBit = i.asm.Mt).apply(
                    null,
                    arguments,
                  );
                }),
                nJ = (i._emscripten_enum_b2DrawFlag_e_centerOfMassBit = function () {
                  return (nJ = i._emscripten_enum_b2DrawFlag_e_centerOfMassBit = i.asm.Nt).apply(
                    null,
                    arguments,
                  );
                }),
                oJ = (i._emscripten_enum_b2ContactFeatureType_e_vertex = function () {
                  return (oJ = i._emscripten_enum_b2ContactFeatureType_e_vertex = i.asm.Ot).apply(
                    null,
                    arguments,
                  );
                }),
                iJ = (i._emscripten_enum_b2ContactFeatureType_e_face = function () {
                  return (iJ = i._emscripten_enum_b2ContactFeatureType_e_face = i.asm.Pt).apply(
                    null,
                    arguments,
                  );
                });
              function nw() {
                function b() {
                  if (!Tt && ((Tt = !0), (i.calledRun = !0), !lt)) {
                    if (
                      ((Dt = !0),
                      Fa(Ut),
                      Fa(wt),
                      s(i),
                      i.onRuntimeInitialized && i.onRuntimeInitialized(),
                      i.postRun)
                    )
                      for (
                        "function" == typeof i.postRun && (i.postRun = [i.postRun]);
                        i.postRun.length;
                      ) {
                        var t = i.postRun.shift();
                        Jt.unshift(t);
                      }
                    Fa(Jt);
                  }
                }
                if (!(0 < vt)) {
                  if (i.preRun)
                    for ("function" == typeof i.preRun && (i.preRun = [i.preRun]); i.preRun.length;)
                      La();
                  (Fa(gt),
                    0 < vt ||
                      (i.setStatus
                        ? (i.setStatus("Running..."),
                          setTimeout(function () {
                            (setTimeout(function () {
                              i.setStatus("");
                            }, 1),
                              b());
                          }, 1))
                        : b()));
                }
              }
              if (
                ((i._malloc = function () {
                  return (i._malloc = i.asm.Qt).apply(null, arguments);
                }),
                (i._free = function () {
                  return (i._free = i.asm.Rt).apply(null, arguments);
                }),
                (i.dynCall_vi = function () {
                  return (i.dynCall_vi = i.asm.St).apply(null, arguments);
                }),
                (i.dynCall_v = function () {
                  return (i.dynCall_v = i.asm.Tt).apply(null, arguments);
                }),
                (i.asm = Rt),
                (At = function mw() {
                  (Tt || nw(), Tt || (At = mw));
                }),
                (i.run = nw),
                i.preInit)
              )
                for (
                  "function" == typeof i.preInit && (i.preInit = [i.preInit]);
                  0 < i.preInit.length;
                )
                  i.preInit.pop()();
              function e() {}
              function g(t) {
                return (t || e).Wt;
              }
              function h(t, n) {
                var o = g(n),
                  i = o[t];
                return i || (((i = Object.create((n || e).prototype)).Ut = t), (o[t] = i));
              }
              (nw(),
                (e.prototype = Object.create(e.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.Vt = e),
                (e.Wt = {}),
                (i.WrapperObject = e),
                (i.getCache = g),
                (i.wrapPointer = h),
                (i.castObject = function (t, e) {
                  return h(t.Ut, e);
                }),
                (i.NULL = h(0)),
                (i.destroy = function (t) {
                  if (!t.__destroy__)
                    throw "Error: Cannot destroy object. (Did you create it yourself?)";
                  (t.__destroy__(), delete g(t.Vt)[t.Ut]);
                }),
                (i.compare = function (t, e) {
                  return t.Ut === e.Ut;
                }),
                (i.getPointer = function (t) {
                  return t.Ut;
                }),
                (i.getClass = function (t) {
                  return t.Vt;
                }));
              var _J = 0,
                rJ = 0,
                pJ = [],
                sJ = 0;
              function sw() {
                if (sJ) {
                  for (var t = 0; t < pJ.length; t++) i._free(pJ[t]);
                  ((pJ.length = 0), i._free(_J), (_J = 0), (rJ += sJ), (sJ = 0));
                }
                _J || ((rJ += 128), assert((_J = i._malloc(rJ))));
              }
              function tw() {
                throw "cannot construct a b2DestructionListenerWrapper, no constructor in IDL";
              }
              function uw() {
                throw "cannot construct a b2Draw, no constructor in IDL";
              }
              function k() {
                throw "cannot construct a b2Joint, no constructor in IDL";
              }
              function vw() {
                throw "cannot construct a b2RayCastCallback, no constructor in IDL";
              }
              function ww() {
                throw "cannot construct a b2ContactListener, no constructor in IDL";
              }
              function xw() {
                throw "cannot construct a b2QueryCallback, no constructor in IDL";
              }
              function n() {
                ((this.Ut = ie()), (g(n)[this.Ut] = this));
              }
              function p() {
                throw "cannot construct a b2Shape, no constructor in IDL";
              }
              function yw() {
                throw "cannot construct a b2ContactFilter, no constructor in IDL";
              }
              function zw() {
                ((this.Ut = Be()), (g(zw)[this.Ut] = this));
              }
              function Aw() {
                throw "cannot construct a b2ContactImpulse, no constructor in IDL";
              }
              function Bw() {
                throw "cannot construct a b2DistanceJoint, no constructor in IDL";
              }
              function q(t, e, n) {
                (t && "object" == typeof t && (t = t.Ut),
                  e && "object" == typeof e && (e = e.Ut),
                  n && "object" == typeof n && (n = n.Ut),
                  (this.Ut =
                    void 0 === t
                      ? nn()
                      : void 0 === e
                        ? _emscripten_bind_b2Mat33_b2Mat33_1(t)
                        : void 0 === n
                          ? _emscripten_bind_b2Mat33_b2Mat33_2(t, e)
                          : on(t, e, n)),
                  (g(q)[this.Ut] = this));
              }
              function t() {
                throw "cannot construct a b2Fixture, no constructor in IDL";
              }
              function u() {
                ((this.Ut = On()), (g(u)[this.Ut] = this));
              }
              function Cw() {
                ((this.Ut = zn()), (g(Cw)[this.Ut] = this));
              }
              function Dw() {
                throw "cannot construct a b2MouseJoint, no constructor in IDL";
              }
              function Ew(t) {
                (t && "object" == typeof t && (t = t.Ut),
                  (this.Ut = void 0 === t ? go() : Uo(t)),
                  (g(Ew)[this.Ut] = this));
              }
              function Fw() {
                throw "cannot construct a b2MotorJoint, no constructor in IDL";
              }
              function w() {
                throw "cannot construct a b2Profile, no constructor in IDL";
              }
              function Gw() {
                throw "cannot construct a VoidPtr, no constructor in IDL";
              }
              function x() {
                ((this.Ut = hi()), (g(x)[this.Ut] = this));
              }
              function Hw() {
                ((this.Ut = zi()), (g(Hw)[this.Ut] = this));
              }
              function z() {
                throw "cannot construct a b2ContactFeature, no constructor in IDL";
              }
              function m(t, e) {
                (t && "object" == typeof t && (t = t.Ut),
                  e && "object" == typeof e && (e = e.Ut),
                  (this.Ut =
                    void 0 === t
                      ? r_()
                      : void 0 === e
                        ? _emscripten_bind_b2Vec2_b2Vec2_1(t)
                        : p_(t, e)),
                  (g(m)[this.Ut] = this));
              }
              function r(t, e, n) {
                (t && "object" == typeof t && (t = t.Ut),
                  e && "object" == typeof e && (e = e.Ut),
                  n && "object" == typeof n && (n = n.Ut),
                  (this.Ut =
                    void 0 === t
                      ? D_()
                      : void 0 === e
                        ? _emscripten_bind_b2Vec3_b2Vec3_1(t)
                        : void 0 === n
                          ? _emscripten_bind_b2Vec3_b2Vec3_2(t, e)
                          : v_(t, e, n)),
                  (g(r)[this.Ut] = this));
              }
              function v() {
                ((this.Ut = L_()), (g(v)[this.Ut] = this));
              }
              function A() {
                ((this.Ut = Y_()), (g(A)[this.Ut] = this));
              }
              function B() {
                ((this.Ut = yr()), (g(B)[this.Ut] = this));
              }
              function C() {
                ((this.Ut = Mr()), (g(C)[this.Ut] = this));
              }
              function D() {
                ((this.Ut = kr()), (g(D)[this.Ut] = this));
              }
              function E() {
                ((this.Ut = $r()), (g(E)[this.Ut] = this));
              }
              function F(t) {
                (t && "object" == typeof t && (t = t.Ut),
                  (this.Ut = Pp(t)),
                  (g(F)[this.Ut] = this));
              }
              function G() {
                throw "cannot construct a b2PrismaticJoint, no constructor in IDL";
              }
              function Jw() {
                throw "cannot construct a b2RayCastOutput, no constructor in IDL";
              }
              function Kw() {
                throw "cannot construct a b2ContactID, no constructor in IDL";
              }
              function Lw() {
                ((this.Ut = _c()), (g(Lw)[this.Ut] = this));
              }
              function Mw(t, e, n, o) {
                (t && "object" == typeof t && (t = t.Ut),
                  e && "object" == typeof e && (e = e.Ut),
                  n && "object" == typeof n && (n = n.Ut),
                  o && "object" == typeof o && (o = o.Ut),
                  (this.Ut =
                    void 0 === t
                      ? ac()
                      : void 0 === e
                        ? _emscripten_bind_b2Mat22_b2Mat22_1(t)
                        : void 0 === n
                          ? lc(t, e)
                          : void 0 === o
                            ? _emscripten_bind_b2Mat22_b2Mat22_3(t, e, n)
                            : yc(t, e, n, o)),
                  (g(Mw)[this.Ut] = this));
              }
              function H() {
                ((this.Ut = vc()), (g(H)[this.Ut] = this));
              }
              function I() {
                ((this.Ut = $c()), (g(I)[this.Ut] = this));
              }
              function J() {
                ((this.Ut = yu()), (g(J)[this.Ut] = this));
              }
              function Nw() {
                ((this.Ut = Fu()), (g(Nw)[this.Ut] = this));
              }
              function Ow() {
                throw "cannot construct a b2GearJoint, no constructor in IDL";
              }
              function Pw() {
                throw "cannot construct a b2WeldJoint, no constructor in IDL";
              }
              function K() {
                ((this.Ut = Ca()), (g(K)[this.Ut] = this));
              }
              function L() {
                ((this.Ut = Xa()), (g(L)[this.Ut] = this));
              }
              function M() {
                ((this.Ut = Ul()), (g(M)[this.Ut] = this));
              }
              function Qw(t, e) {
                (t && "object" == typeof t && (t = t.Ut),
                  e && "object" == typeof e && (e = e.Ut),
                  (this.Ut =
                    void 0 === t
                      ? Gl()
                      : void 0 === e
                        ? _emscripten_bind_b2Transform_b2Transform_1(t)
                        : Cl(t, e)),
                  (g(Qw)[this.Ut] = this));
              }
              function N() {
                ((this.Ut = Wl()), (g(N)[this.Ut] = this));
              }
              function O(t, e, n) {
                (t && "object" == typeof t && (t = t.Ut),
                  e && "object" == typeof e && (e = e.Ut),
                  n && "object" == typeof n && (n = n.Ut),
                  (this.Ut =
                    void 0 === t
                      ? dy()
                      : void 0 === e
                        ? _emscripten_bind_b2Color_b2Color_1(t)
                        : void 0 === n
                          ? _emscripten_bind_b2Color_b2Color_2(t, e)
                          : my(t, e, n)),
                  (g(O)[this.Ut] = this));
              }
              function Rw() {
                throw "cannot construct a b2RopeJoint, no constructor in IDL";
              }
              function Sw() {
                throw "cannot construct a b2RayCastInput, no constructor in IDL";
              }
              function P() {
                ((this.Ut = Zy()), (g(P)[this.Ut] = this));
              }
              function Q() {
                ((this.Ut = fb()), (g(Q)[this.Ut] = this));
              }
              function Tw() {
                ((this.Ut = Eb()), (g(Tw)[this.Ut] = this));
              }
              function R() {
                ((this.Ut = Nb()), (g(R)[this.Ut] = this));
              }
              function Uw() {
                ((this.Ut = Jd()), (g(Uw)[this.Ut] = this));
              }
              function S() {
                throw "cannot construct a b2WheelJoint, no constructor in IDL";
              }
              function Vw() {
                throw "cannot construct a b2PulleyJoint, no constructor in IDL";
              }
              function T() {
                ((this.Ut = Sm()), (g(T)[this.Ut] = this));
              }
              function Iw() {
                throw "cannot construct a b2Contact, no constructor in IDL";
              }
              function U() {
                ((this.Ut = uf()), (g(U)[this.Ut] = this));
              }
              function l() {
                throw "cannot construct a b2Body, no constructor in IDL";
              }
              function Ww() {
                throw "cannot construct a b2FrictionJoint, no constructor in IDL";
              }
              function Xw() {
                throw "cannot construct a b2DestructionListener, no constructor in IDL";
              }
              function W() {
                ((this.Ut = tg()), (g(W)[this.Ut] = this));
              }
              function X() {
                throw "cannot construct a b2RevoluteJoint, no constructor in IDL";
              }
              function V() {
                ((this.Ut = zg()), (g(V)[this.Ut] = this));
              }
              function Y() {
                ((this.Ut = iU()), (g(Y)[this.Ut] = this));
              }
              function Z() {
                ((this.Ut = JU()), (g(Z)[this.Ut] = this));
              }
              return (
                (tw.prototype = Object.create(e.prototype)),
                (tw.prototype.constructor = tw),
                (tw.prototype.Vt = tw),
                (tw.Wt = {}),
                (i.b2DestructionListenerWrapper = tw),
                (tw.prototype.__destroy__ = function () {
                  Ft(this.Ut);
                }),
                (uw.prototype = Object.create(e.prototype)),
                (uw.prototype.constructor = uw),
                (uw.prototype.Vt = uw),
                (uw.Wt = {}),
                (i.b2Draw = uw),
                (uw.prototype.SetFlags = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Lt(e, t));
                }),
                (uw.prototype.GetFlags = function () {
                  return It(this.Ut);
                }),
                (uw.prototype.AppendFlags = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Wt(e, t));
                }),
                (uw.prototype.ClearFlags = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ot(e, t));
                }),
                (uw.prototype.__destroy__ = function () {
                  Vt(this.Ut);
                }),
                (k.prototype = Object.create(e.prototype)),
                (k.prototype.constructor = k),
                (k.prototype.Vt = k),
                (k.Wt = {}),
                (i.b2Joint = k),
                (k.prototype.GetType = function () {
                  return Et(this.Ut);
                }),
                (k.prototype.GetBodyA = function () {
                  return h(qt(this.Ut), l);
                }),
                (k.prototype.GetBodyB = function () {
                  return h(kt(this.Ut), l);
                }),
                (k.prototype.GetAnchorA = function () {
                  return h(Nt(this.Ut), m);
                }),
                (k.prototype.GetAnchorB = function () {
                  return h(Xt(this.Ut), m);
                }),
                (k.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Ht(e, t), m));
                }),
                (k.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), zt(e, t));
                }),
                (k.prototype.GetNext = function () {
                  return h(Qt(this.Ut), k);
                }),
                (k.prototype.GetUserData = function () {
                  return Zt(this.Ut);
                }),
                (k.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Yt(e, t));
                }),
                (k.prototype.IsActive = function () {
                  return !!Kt(this.Ut);
                }),
                (k.prototype.GetCollideConnected = function () {
                  return !!$t(this.Ut);
                }),
                (k.prototype.Dump = function () {
                  te(this.Ut);
                }),
                (vw.prototype = Object.create(e.prototype)),
                (vw.prototype.constructor = vw),
                (vw.prototype.Vt = vw),
                (vw.Wt = {}),
                (i.b2RayCastCallback = vw),
                (vw.prototype.__destroy__ = function () {
                  ee(this.Ut);
                }),
                (ww.prototype = Object.create(e.prototype)),
                (ww.prototype.constructor = ww),
                (ww.prototype.Vt = ww),
                (ww.Wt = {}),
                (i.b2ContactListener = ww),
                (ww.prototype.__destroy__ = function () {
                  ne(this.Ut);
                }),
                (xw.prototype = Object.create(e.prototype)),
                (xw.prototype.constructor = xw),
                (xw.prototype.Vt = xw),
                (xw.Wt = {}),
                (i.b2QueryCallback = xw),
                (xw.prototype.__destroy__ = function () {
                  oe(this.Ut);
                }),
                (n.prototype = Object.create(e.prototype)),
                (n.prototype.constructor = n),
                (n.prototype.Vt = n),
                (n.Wt = {}),
                (i.b2JointDef = n),
                (n.prototype.get_type = n.prototype.Xt =
                  function () {
                    return _e(this.Ut);
                  }),
                (n.prototype.set_type = n.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), re(e, t));
                  }),
                Object.defineProperty(n.prototype, "type", {
                  get: n.prototype.Xt,
                  set: n.prototype.Zt,
                }),
                (n.prototype.get_userData = n.prototype.Yt =
                  function () {
                    return pe(this.Ut);
                  }),
                (n.prototype.set_userData = n.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), se(e, t));
                  }),
                Object.defineProperty(n.prototype, "userData", {
                  get: n.prototype.Yt,
                  set: n.prototype.$t,
                }),
                (n.prototype.get_bodyA = n.prototype.au =
                  function () {
                    return h(ce(this.Ut), l);
                  }),
                (n.prototype.set_bodyA = n.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ue(e, t));
                  }),
                Object.defineProperty(n.prototype, "bodyA", {
                  get: n.prototype.au,
                  set: n.prototype.du,
                }),
                (n.prototype.get_bodyB = n.prototype.bu =
                  function () {
                    return h(ae(this.Ut), l);
                  }),
                (n.prototype.set_bodyB = n.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), le(e, t));
                  }),
                Object.defineProperty(n.prototype, "bodyB", {
                  get: n.prototype.bu,
                  set: n.prototype.eu,
                }),
                (n.prototype.get_collideConnected = n.prototype.cu =
                  function () {
                    return !!ye(this.Ut);
                  }),
                (n.prototype.set_collideConnected = n.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), be(e, t));
                  }),
                Object.defineProperty(n.prototype, "collideConnected", {
                  get: n.prototype.cu,
                  set: n.prototype.fu,
                }),
                (n.prototype.__destroy__ = function () {
                  de(this.Ut);
                }),
                (p.prototype = Object.create(e.prototype)),
                (p.prototype.constructor = p),
                (p.prototype.Vt = p),
                (p.Wt = {}),
                (i.b2Shape = p),
                (p.prototype.GetType = function () {
                  return me(this.Ut);
                }),
                (p.prototype.GetChildCount = function () {
                  return fe(this.Ut);
                }),
                (p.prototype.TestPoint = function (t, e) {
                  var n = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    !!he(n, t, e)
                  );
                }),
                (p.prototype.RayCast = function (t, e, n, o) {
                  var i = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    !!ge(i, t, e, n, o)
                  );
                }),
                (p.prototype.ComputeAABB = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Ue(o, t, e, n));
                }),
                (p.prototype.ComputeMass = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    we(n, t, e));
                }),
                (p.prototype.get_m_type = p.prototype.lu =
                  function () {
                    return Je(this.Ut);
                  }),
                (p.prototype.set_m_type = p.prototype.nu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), De(e, t));
                  }),
                Object.defineProperty(p.prototype, "m_type", {
                  get: p.prototype.lu,
                  set: p.prototype.nu,
                }),
                (p.prototype.get_m_radius = p.prototype.ku =
                  function () {
                    return ve(this.Ut);
                  }),
                (p.prototype.set_m_radius = p.prototype.mu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Se(e, t));
                  }),
                Object.defineProperty(p.prototype, "m_radius", {
                  get: p.prototype.ku,
                  set: p.prototype.mu,
                }),
                (p.prototype.__destroy__ = function () {
                  Ae(this.Ut);
                }),
                (yw.prototype = Object.create(e.prototype)),
                (yw.prototype.constructor = yw),
                (yw.prototype.Vt = yw),
                (yw.Wt = {}),
                (i.b2ContactFilter = yw),
                (yw.prototype.__destroy__ = function () {
                  xe(this.Ut);
                }),
                (zw.prototype = Object.create(tw.prototype)),
                (zw.prototype.constructor = zw),
                (zw.prototype.Vt = zw),
                (zw.Wt = {}),
                (i.JSDestructionListener = zw),
                (zw.prototype.SayGoodbyeJoint = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), je(e, t));
                }),
                (zw.prototype.SayGoodbyeFixture = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ge(e, t));
                }),
                (zw.prototype.__destroy__ = function () {
                  Ce(this.Ut);
                }),
                (Aw.prototype = Object.create(e.prototype)),
                (Aw.prototype.constructor = Aw),
                (Aw.prototype.Vt = Aw),
                (Aw.Wt = {}),
                (i.b2ContactImpulse = Aw),
                (Aw.prototype.get_count = Aw.prototype.xv =
                  function () {
                    return Pe(this.Ut);
                  }),
                (Aw.prototype.set_count = Aw.prototype.kx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Re(e, t));
                  }),
                Object.defineProperty(Aw.prototype, "count", {
                  get: Aw.prototype.xv,
                  set: Aw.prototype.kx,
                }),
                (Aw.prototype.__destroy__ = function () {
                  Me(this.Ut);
                }),
                (Bw.prototype = Object.create(k.prototype)),
                (Bw.prototype.constructor = Bw),
                (Bw.prototype.Vt = Bw),
                (Bw.Wt = {}),
                (i.b2DistanceJoint = Bw),
                (Bw.prototype.GetLocalAnchorA = function () {
                  return h(Te(this.Ut), m);
                }),
                (Bw.prototype.GetLocalAnchorB = function () {
                  return h(Fe(this.Ut), m);
                }),
                (Bw.prototype.SetLength = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Le(e, t));
                }),
                (Bw.prototype.GetLength = function () {
                  return Ie(this.Ut);
                }),
                (Bw.prototype.SetFrequency = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), We(e, t));
                }),
                (Bw.prototype.GetFrequency = function () {
                  return Oe(this.Ut);
                }),
                (Bw.prototype.SetDampingRatio = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ve(e, t));
                }),
                (Bw.prototype.GetDampingRatio = function () {
                  return Ee(this.Ut);
                }),
                (Bw.prototype.GetType = function () {
                  return qe(this.Ut);
                }),
                (Bw.prototype.GetBodyA = function () {
                  return h(ke(this.Ut), l);
                }),
                (Bw.prototype.GetBodyB = function () {
                  return h(Ne(this.Ut), l);
                }),
                (Bw.prototype.GetAnchorA = function () {
                  return h(Xe(this.Ut), m);
                }),
                (Bw.prototype.GetAnchorB = function () {
                  return h(He(this.Ut), m);
                }),
                (Bw.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(ze(e, t), m));
                }),
                (Bw.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Qe(e, t));
                }),
                (Bw.prototype.GetNext = function () {
                  return h(Ze(this.Ut), k);
                }),
                (Bw.prototype.GetUserData = function () {
                  return Ye(this.Ut);
                }),
                (Bw.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ke(e, t));
                }),
                (Bw.prototype.IsActive = function () {
                  return !!$e(this.Ut);
                }),
                (Bw.prototype.GetCollideConnected = function () {
                  return !!tn(this.Ut);
                }),
                (Bw.prototype.__destroy__ = function () {
                  en(this.Ut);
                }),
                (q.prototype = Object.create(e.prototype)),
                (q.prototype.constructor = q),
                (q.prototype.Vt = q),
                (q.Wt = {}),
                (i.b2Mat33 = q),
                (q.prototype.SetZero = function () {
                  _n(this.Ut);
                }),
                (q.prototype.Solve33 = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(rn(e, t), r));
                }),
                (q.prototype.Solve22 = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(pn(e, t), m));
                }),
                (q.prototype.GetInverse22 = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), sn(e, t));
                }),
                (q.prototype.GetSymInverse33 = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), cn(e, t));
                }),
                (q.prototype.get_ex = q.prototype.Cu =
                  function () {
                    return h(un(this.Ut), r);
                  }),
                (q.prototype.set_ex = q.prototype.Ru =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), an(e, t));
                  }),
                Object.defineProperty(q.prototype, "ex", {
                  get: q.prototype.Cu,
                  set: q.prototype.Ru,
                }),
                (q.prototype.get_ey = q.prototype.Du =
                  function () {
                    return h(ln(this.Ut), r);
                  }),
                (q.prototype.set_ey = q.prototype.Su =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), yn(e, t));
                  }),
                Object.defineProperty(q.prototype, "ey", {
                  get: q.prototype.Du,
                  set: q.prototype.Su,
                }),
                (q.prototype.get_ez = q.prototype.zv =
                  function () {
                    return h(bn(this.Ut), r);
                  }),
                (q.prototype.set_ez = q.prototype.mx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), dn(e, t));
                  }),
                Object.defineProperty(q.prototype, "ez", {
                  get: q.prototype.zv,
                  set: q.prototype.mx,
                }),
                (q.prototype.__destroy__ = function () {
                  mn(this.Ut);
                }),
                (t.prototype = Object.create(e.prototype)),
                (t.prototype.constructor = t),
                (t.prototype.Vt = t),
                (t.Wt = {}),
                (i.b2Fixture = t),
                (t.prototype.GetType = function () {
                  return fn(this.Ut);
                }),
                (t.prototype.GetShape = function () {
                  return h(hn(this.Ut), p);
                }),
                (t.prototype.SetSensor = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), gn(e, t));
                }),
                (t.prototype.IsSensor = function () {
                  return !!Un(this.Ut);
                }),
                (t.prototype.SetFilterData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), wn(e, t));
                }),
                (t.prototype.GetFilterData = function () {
                  return h(Jn(this.Ut), u);
                }),
                (t.prototype.Refilter = function () {
                  Dn(this.Ut);
                }),
                (t.prototype.GetBody = function () {
                  return h(vn(this.Ut), l);
                }),
                (t.prototype.GetNext = function () {
                  return h(Sn(this.Ut), t);
                }),
                (t.prototype.GetUserData = function () {
                  return An(this.Ut);
                }),
                (t.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), xn(e, t));
                }),
                (t.prototype.TestPoint = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), !!Bn(e, t));
                }),
                (t.prototype.RayCast = function (t, e, n) {
                  var o = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    !!jn(o, t, e, n)
                  );
                }),
                (t.prototype.GetMassData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Gn(e, t));
                }),
                (t.prototype.SetDensity = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Cn(e, t));
                }),
                (t.prototype.GetDensity = function () {
                  return Pn(this.Ut);
                }),
                (t.prototype.GetFriction = function () {
                  return Rn(this.Ut);
                }),
                (t.prototype.SetFriction = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Mn(e, t));
                }),
                (t.prototype.GetRestitution = function () {
                  return Tn(this.Ut);
                }),
                (t.prototype.SetRestitution = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Fn(e, t));
                }),
                (t.prototype.GetAABB = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Ln(e, t), v));
                }),
                (t.prototype.Dump = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), In(e, t));
                }),
                (t.prototype.__destroy__ = function () {
                  Wn(this.Ut);
                }),
                (u.prototype = Object.create(e.prototype)),
                (u.prototype.constructor = u),
                (u.prototype.Vt = u),
                (u.Wt = {}),
                (i.b2Filter = u),
                (u.prototype.get_categoryBits = u.prototype.rv =
                  function () {
                    return Vn(this.Ut);
                  }),
                (u.prototype.set_categoryBits = u.prototype.ex =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), En(e, t));
                  }),
                Object.defineProperty(u.prototype, "categoryBits", {
                  get: u.prototype.rv,
                  set: u.prototype.ex,
                }),
                (u.prototype.get_maskBits = u.prototype.nw =
                  function () {
                    return qn(this.Ut);
                  }),
                (u.prototype.set_maskBits = u.prototype.ay =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), kn(e, t));
                  }),
                Object.defineProperty(u.prototype, "maskBits", {
                  get: u.prototype.nw,
                  set: u.prototype.ay,
                }),
                (u.prototype.get_groupIndex = u.prototype.Iv =
                  function () {
                    return Nn(this.Ut);
                  }),
                (u.prototype.set_groupIndex = u.prototype.vx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Xn(e, t));
                  }),
                Object.defineProperty(u.prototype, "groupIndex", {
                  get: u.prototype.Iv,
                  set: u.prototype.vx,
                }),
                (u.prototype.__destroy__ = function () {
                  Hn(this.Ut);
                }),
                (Cw.prototype = Object.create(xw.prototype)),
                (Cw.prototype.constructor = Cw),
                (Cw.prototype.Vt = Cw),
                (Cw.Wt = {}),
                (i.JSQueryCallback = Cw),
                (Cw.prototype.ReportFixture = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), !!Qn(e, t));
                }),
                (Cw.prototype.__destroy__ = function () {
                  Zn(this.Ut);
                }),
                (Dw.prototype = Object.create(k.prototype)),
                (Dw.prototype.constructor = Dw),
                (Dw.prototype.Vt = Dw),
                (Dw.Wt = {}),
                (i.b2MouseJoint = Dw),
                (Dw.prototype.SetTarget = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Yn(e, t));
                }),
                (Dw.prototype.GetTarget = function () {
                  return h(Kn(this.Ut), m);
                }),
                (Dw.prototype.SetMaxForce = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), $n(e, t));
                }),
                (Dw.prototype.GetMaxForce = function () {
                  return to(this.Ut);
                }),
                (Dw.prototype.SetFrequency = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), eo(e, t));
                }),
                (Dw.prototype.GetFrequency = function () {
                  return no(this.Ut);
                }),
                (Dw.prototype.SetDampingRatio = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), oo(e, t));
                }),
                (Dw.prototype.GetDampingRatio = function () {
                  return io(this.Ut);
                }),
                (Dw.prototype.GetType = function () {
                  return _o(this.Ut);
                }),
                (Dw.prototype.GetBodyA = function () {
                  return h(ro(this.Ut), l);
                }),
                (Dw.prototype.GetBodyB = function () {
                  return h(po(this.Ut), l);
                }),
                (Dw.prototype.GetAnchorA = function () {
                  return h(so(this.Ut), m);
                }),
                (Dw.prototype.GetAnchorB = function () {
                  return h(co(this.Ut), m);
                }),
                (Dw.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(uo(e, t), m));
                }),
                (Dw.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), ao(e, t));
                }),
                (Dw.prototype.GetNext = function () {
                  return h(lo(this.Ut), k);
                }),
                (Dw.prototype.GetUserData = function () {
                  return yo(this.Ut);
                }),
                (Dw.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), bo(e, t));
                }),
                (Dw.prototype.IsActive = function () {
                  return !!mo(this.Ut);
                }),
                (Dw.prototype.GetCollideConnected = function () {
                  return !!fo(this.Ut);
                }),
                (Dw.prototype.__destroy__ = function () {
                  ho(this.Ut);
                }),
                (Ew.prototype = Object.create(e.prototype)),
                (Ew.prototype.constructor = Ew),
                (Ew.prototype.Vt = Ew),
                (Ew.Wt = {}),
                (i.b2Rot = Ew),
                (Ew.prototype.Set = Ew.prototype.Set =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), wo(e, t));
                  }),
                (Ew.prototype.SetIdentity = function () {
                  Jo(this.Ut);
                }),
                (Ew.prototype.GetAngle = function () {
                  return Do(this.Ut);
                }),
                (Ew.prototype.GetXAxis = function () {
                  return h(vo(this.Ut), m);
                }),
                (Ew.prototype.GetYAxis = function () {
                  return h(So(this.Ut), m);
                }),
                (Ew.prototype.get_s = Ew.prototype.Cw =
                  function () {
                    return Ao(this.Ut);
                  }),
                (Ew.prototype.set_s = Ew.prototype.py =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), xo(e, t));
                  }),
                Object.defineProperty(Ew.prototype, "s", {
                  get: Ew.prototype.Cw,
                  set: Ew.prototype.py,
                }),
                (Ew.prototype.get_c = Ew.prototype.qv =
                  function () {
                    return Bo(this.Ut);
                  }),
                (Ew.prototype.set_c = Ew.prototype.dx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), jo(e, t));
                  }),
                Object.defineProperty(Ew.prototype, "c", {
                  get: Ew.prototype.qv,
                  set: Ew.prototype.dx,
                }),
                (Ew.prototype.__destroy__ = function () {
                  Go(this.Ut);
                }),
                (Fw.prototype = Object.create(k.prototype)),
                (Fw.prototype.constructor = Fw),
                (Fw.prototype.Vt = Fw),
                (Fw.Wt = {}),
                (i.b2MotorJoint = Fw),
                (Fw.prototype.SetLinearOffset = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Co(e, t));
                }),
                (Fw.prototype.GetLinearOffset = function () {
                  return h(Po(this.Ut), m);
                }),
                (Fw.prototype.SetAngularOffset = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ro(e, t));
                }),
                (Fw.prototype.GetAngularOffset = function () {
                  return Mo(this.Ut);
                }),
                (Fw.prototype.SetMaxForce = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), To(e, t));
                }),
                (Fw.prototype.GetMaxForce = function () {
                  return Fo(this.Ut);
                }),
                (Fw.prototype.SetMaxTorque = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Lo(e, t));
                }),
                (Fw.prototype.GetMaxTorque = function () {
                  return Io(this.Ut);
                }),
                (Fw.prototype.SetCorrectionFactor = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Wo(e, t));
                }),
                (Fw.prototype.GetCorrectionFactor = function () {
                  return Oo(this.Ut);
                }),
                (Fw.prototype.GetType = function () {
                  return Vo(this.Ut);
                }),
                (Fw.prototype.GetBodyA = function () {
                  return h(Eo(this.Ut), l);
                }),
                (Fw.prototype.GetBodyB = function () {
                  return h(qo(this.Ut), l);
                }),
                (Fw.prototype.GetAnchorA = function () {
                  return h(ko(this.Ut), m);
                }),
                (Fw.prototype.GetAnchorB = function () {
                  return h(No(this.Ut), m);
                }),
                (Fw.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Xo(e, t), m));
                }),
                (Fw.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Ho(e, t));
                }),
                (Fw.prototype.GetNext = function () {
                  return h(zo(this.Ut), k);
                }),
                (Fw.prototype.GetUserData = function () {
                  return Qo(this.Ut);
                }),
                (Fw.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Zo(e, t));
                }),
                (Fw.prototype.IsActive = function () {
                  return !!Yo(this.Ut);
                }),
                (Fw.prototype.GetCollideConnected = function () {
                  return !!Ko(this.Ut);
                }),
                (Fw.prototype.__destroy__ = function () {
                  $o(this.Ut);
                }),
                (w.prototype = Object.create(e.prototype)),
                (w.prototype.constructor = w),
                (w.prototype.Vt = w),
                (w.Wt = {}),
                (i.b2Profile = w),
                (w.prototype.get_step = w.prototype.Kw =
                  function () {
                    return ti(this.Ut);
                  }),
                (w.prototype.set_step = w.prototype.xy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ei(e, t));
                  }),
                Object.defineProperty(w.prototype, "step", {
                  get: w.prototype.Kw,
                  set: w.prototype.xy,
                }),
                (w.prototype.get_collide = w.prototype.uv =
                  function () {
                    return ni(this.Ut);
                  }),
                (w.prototype.set_collide = w.prototype.hx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), oi(e, t));
                  }),
                Object.defineProperty(w.prototype, "collide", {
                  get: w.prototype.uv,
                  set: w.prototype.hx,
                }),
                (w.prototype.get_solve = w.prototype.Fw =
                  function () {
                    return ii(this.Ut);
                  }),
                (w.prototype.set_solve = w.prototype.sy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), _i(e, t));
                  }),
                Object.defineProperty(w.prototype, "solve", {
                  get: w.prototype.Fw,
                  set: w.prototype.sy,
                }),
                (w.prototype.get_solveInit = w.prototype.Gw =
                  function () {
                    return ri(this.Ut);
                  }),
                (w.prototype.set_solveInit = w.prototype.ty =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), pi(e, t));
                  }),
                Object.defineProperty(w.prototype, "solveInit", {
                  get: w.prototype.Gw,
                  set: w.prototype.ty,
                }),
                (w.prototype.get_solveVelocity = w.prototype.Jw =
                  function () {
                    return si(this.Ut);
                  }),
                (w.prototype.set_solveVelocity = w.prototype.wy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ci(e, t));
                  }),
                Object.defineProperty(w.prototype, "solveVelocity", {
                  get: w.prototype.Jw,
                  set: w.prototype.wy,
                }),
                (w.prototype.get_solvePosition = w.prototype.Hw =
                  function () {
                    return ui(this.Ut);
                  }),
                (w.prototype.set_solvePosition = w.prototype.uy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ai(e, t));
                  }),
                Object.defineProperty(w.prototype, "solvePosition", {
                  get: w.prototype.Hw,
                  set: w.prototype.uy,
                }),
                (w.prototype.get_broadphase = w.prototype.ov =
                  function () {
                    return li(this.Ut);
                  }),
                (w.prototype.set_broadphase = w.prototype.bx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), yi(e, t));
                  }),
                Object.defineProperty(w.prototype, "broadphase", {
                  get: w.prototype.ov,
                  set: w.prototype.bx,
                }),
                (w.prototype.get_solveTOI = w.prototype.Iw =
                  function () {
                    return bi(this.Ut);
                  }),
                (w.prototype.set_solveTOI = w.prototype.vy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), di(e, t));
                  }),
                Object.defineProperty(w.prototype, "solveTOI", {
                  get: w.prototype.Iw,
                  set: w.prototype.vy,
                }),
                (w.prototype.__destroy__ = function () {
                  mi(this.Ut);
                }),
                (Gw.prototype = Object.create(e.prototype)),
                (Gw.prototype.constructor = Gw),
                (Gw.prototype.Vt = Gw),
                (Gw.Wt = {}),
                (i.VoidPtr = Gw),
                (Gw.prototype.__destroy__ = function () {
                  fi(this.Ut);
                }),
                (x.prototype = Object.create(e.prototype)),
                (x.prototype.constructor = x),
                (x.prototype.Vt = x),
                (x.Wt = {}),
                (i.b2BodyDef = x),
                (x.prototype.get_type = x.prototype.Xt =
                  function () {
                    return gi(this.Ut);
                  }),
                (x.prototype.set_type = x.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ui(e, t));
                  }),
                Object.defineProperty(x.prototype, "type", {
                  get: x.prototype.Xt,
                  set: x.prototype.Zt,
                }),
                (x.prototype.get_position = x.prototype.yw =
                  function () {
                    return h(wi(this.Ut), m);
                  }),
                (x.prototype.set_position = x.prototype.ly =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ji(e, t));
                  }),
                Object.defineProperty(x.prototype, "position", {
                  get: x.prototype.yw,
                  set: x.prototype.ly,
                }),
                (x.prototype.get_angle = x.prototype.iv =
                  function () {
                    return Di(this.Ut);
                  }),
                (x.prototype.set_angle = x.prototype.Ww =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), vi(e, t));
                  }),
                Object.defineProperty(x.prototype, "angle", {
                  get: x.prototype.iv,
                  set: x.prototype.Ww,
                }),
                (x.prototype.get_linearVelocity = x.prototype.Wv =
                  function () {
                    return h(Si(this.Ut), m);
                  }),
                (x.prototype.set_linearVelocity = x.prototype.Jx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ai(e, t));
                  }),
                Object.defineProperty(x.prototype, "linearVelocity", {
                  get: x.prototype.Wv,
                  set: x.prototype.Jx,
                }),
                (x.prototype.get_angularVelocity = x.prototype.lv =
                  function () {
                    return xi(this.Ut);
                  }),
                (x.prototype.set_angularVelocity = x.prototype.Zw =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Bi(e, t));
                  }),
                Object.defineProperty(x.prototype, "angularVelocity", {
                  get: x.prototype.lv,
                  set: x.prototype.Zw,
                }),
                (x.prototype.get_linearDamping = x.prototype.Uv =
                  function () {
                    return ji(this.Ut);
                  }),
                (x.prototype.set_linearDamping = x.prototype.Hx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Gi(e, t));
                  }),
                Object.defineProperty(x.prototype, "linearDamping", {
                  get: x.prototype.Uv,
                  set: x.prototype.Hx,
                }),
                (x.prototype.get_angularDamping = x.prototype.jv =
                  function () {
                    return Ci(this.Ut);
                  }),
                (x.prototype.set_angularDamping = x.prototype.Xw =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Pi(e, t));
                  }),
                Object.defineProperty(x.prototype, "angularDamping", {
                  get: x.prototype.jv,
                  set: x.prototype.Xw,
                }),
                (x.prototype.get_allowSleep = x.prototype.hv =
                  function () {
                    return !!Ri(this.Ut);
                  }),
                (x.prototype.set_allowSleep = x.prototype.Vw =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Mi(e, t));
                  }),
                Object.defineProperty(x.prototype, "allowSleep", {
                  get: x.prototype.hv,
                  set: x.prototype.Vw,
                }),
                (x.prototype.get_awake = x.prototype.mv =
                  function () {
                    return !!Ti(this.Ut);
                  }),
                (x.prototype.set_awake = x.prototype.$w =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Fi(e, t));
                  }),
                Object.defineProperty(x.prototype, "awake", {
                  get: x.prototype.mv,
                  set: x.prototype.$w,
                }),
                (x.prototype.get_fixedRotation = x.prototype.Bv =
                  function () {
                    return !!Li(this.Ut);
                  }),
                (x.prototype.set_fixedRotation = x.prototype.ox =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ii(e, t));
                  }),
                Object.defineProperty(x.prototype, "fixedRotation", {
                  get: x.prototype.Bv,
                  set: x.prototype.ox,
                }),
                (x.prototype.get_bullet = x.prototype.pv =
                  function () {
                    return !!Wi(this.Ut);
                  }),
                (x.prototype.set_bullet = x.prototype.cx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Oi(e, t));
                  }),
                Object.defineProperty(x.prototype, "bullet", {
                  get: x.prototype.pv,
                  set: x.prototype.cx,
                }),
                (x.prototype.get_active = x.prototype.gv =
                  function () {
                    return !!Vi(this.Ut);
                  }),
                (x.prototype.set_active = x.prototype.Uw =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ei(e, t));
                  }),
                Object.defineProperty(x.prototype, "active", {
                  get: x.prototype.gv,
                  set: x.prototype.Uw,
                }),
                (x.prototype.get_userData = x.prototype.Yt =
                  function () {
                    return qi(this.Ut);
                  }),
                (x.prototype.set_userData = x.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ki(e, t));
                  }),
                Object.defineProperty(x.prototype, "userData", {
                  get: x.prototype.Yt,
                  set: x.prototype.$t,
                }),
                (x.prototype.get_gravityScale = x.prototype.Fv =
                  function () {
                    return Ni(this.Ut);
                  }),
                (x.prototype.set_gravityScale = x.prototype.sx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Xi(e, t));
                  }),
                Object.defineProperty(x.prototype, "gravityScale", {
                  get: x.prototype.Fv,
                  set: x.prototype.sx,
                }),
                (x.prototype.__destroy__ = function () {
                  Hi(this.Ut);
                }),
                (Hw.prototype = Object.create(vw.prototype)),
                (Hw.prototype.constructor = Hw),
                (Hw.prototype.Vt = Hw),
                (Hw.Wt = {}),
                (i.JSRayCastCallback = Hw),
                (Hw.prototype.ReportFixture = function (t, e, n, o) {
                  var i = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    Qi(i, t, e, n, o)
                  );
                }),
                (Hw.prototype.__destroy__ = function () {
                  Zi(this.Ut);
                }),
                (z.prototype = Object.create(e.prototype)),
                (z.prototype.constructor = z),
                (z.prototype.Vt = z),
                (z.Wt = {}),
                (i.b2ContactFeature = z),
                (z.prototype.get_indexA = z.prototype.Kv =
                  function () {
                    return Yi(this.Ut);
                  }),
                (z.prototype.set_indexA = z.prototype.xx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ki(e, t));
                  }),
                Object.defineProperty(z.prototype, "indexA", {
                  get: z.prototype.Kv,
                  set: z.prototype.xx,
                }),
                (z.prototype.get_indexB = z.prototype.Lv =
                  function () {
                    return $i(this.Ut);
                  }),
                (z.prototype.set_indexB = z.prototype.yx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), t_(e, t));
                  }),
                Object.defineProperty(z.prototype, "indexB", {
                  get: z.prototype.Lv,
                  set: z.prototype.yx,
                }),
                (z.prototype.get_typeA = z.prototype.Nw =
                  function () {
                    return e_(this.Ut);
                  }),
                (z.prototype.set_typeA = z.prototype.Ay =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), n_(e, t));
                  }),
                Object.defineProperty(z.prototype, "typeA", {
                  get: z.prototype.Nw,
                  set: z.prototype.Ay,
                }),
                (z.prototype.get_typeB = z.prototype.Ow =
                  function () {
                    return o_(this.Ut);
                  }),
                (z.prototype.set_typeB = z.prototype.By =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), i_(e, t));
                  }),
                Object.defineProperty(z.prototype, "typeB", {
                  get: z.prototype.Ow,
                  set: z.prototype.By,
                }),
                (z.prototype.__destroy__ = function () {
                  __(this.Ut);
                }),
                (m.prototype = Object.create(e.prototype)),
                (m.prototype.constructor = m),
                (m.prototype.Vt = m),
                (m.Wt = {}),
                (i.b2Vec2 = m),
                (m.prototype.SetZero = function () {
                  s_(this.Ut);
                }),
                (m.prototype.Set = m.prototype.Set =
                  function (t, e) {
                    var n = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut),
                      e && "object" == typeof e && (e = e.Ut),
                      c_(n, t, e));
                  }),
                (m.prototype.op_add = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), u_(e, t));
                }),
                (m.prototype.op_sub = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), a_(e, t));
                }),
                (m.prototype.op_mul = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), l_(e, t));
                }),
                (m.prototype.Length = function () {
                  return y_(this.Ut);
                }),
                (m.prototype.LengthSquared = function () {
                  return b_(this.Ut);
                }),
                (m.prototype.Normalize = function () {
                  return d_(this.Ut);
                }),
                (m.prototype.IsValid = function () {
                  return !!m_(this.Ut);
                }),
                (m.prototype.Skew = function () {
                  return h(f_(this.Ut), m);
                }),
                (m.prototype.get_x = m.prototype.Ou =
                  function () {
                    return h_(this.Ut);
                  }),
                (m.prototype.set_x = m.prototype.cv =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), g_(e, t));
                  }),
                Object.defineProperty(m.prototype, "x", {
                  get: m.prototype.Ou,
                  set: m.prototype.cv,
                }),
                (m.prototype.get_y = m.prototype.Pu =
                  function () {
                    return U_(this.Ut);
                  }),
                (m.prototype.set_y = m.prototype.dv =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), w_(e, t));
                  }),
                Object.defineProperty(m.prototype, "y", {
                  get: m.prototype.Pu,
                  set: m.prototype.dv,
                }),
                (m.prototype.__destroy__ = function () {
                  J_(this.Ut);
                }),
                (r.prototype = Object.create(e.prototype)),
                (r.prototype.constructor = r),
                (r.prototype.Vt = r),
                (r.Wt = {}),
                (i.b2Vec3 = r),
                (r.prototype.SetZero = function () {
                  S_(this.Ut);
                }),
                (r.prototype.Set = r.prototype.Set =
                  function (t, e, n) {
                    var o = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut),
                      e && "object" == typeof e && (e = e.Ut),
                      n && "object" == typeof n && (n = n.Ut),
                      A_(o, t, e, n));
                  }),
                (r.prototype.op_add = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), x_(e, t));
                }),
                (r.prototype.op_sub = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), B_(e, t));
                }),
                (r.prototype.op_mul = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), j_(e, t));
                }),
                (r.prototype.get_x = r.prototype.Ou =
                  function () {
                    return G_(this.Ut);
                  }),
                (r.prototype.set_x = r.prototype.cv =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), C_(e, t));
                  }),
                Object.defineProperty(r.prototype, "x", {
                  get: r.prototype.Ou,
                  set: r.prototype.cv,
                }),
                (r.prototype.get_y = r.prototype.Pu =
                  function () {
                    return P_(this.Ut);
                  }),
                (r.prototype.set_y = r.prototype.dv =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), R_(e, t));
                  }),
                Object.defineProperty(r.prototype, "y", {
                  get: r.prototype.Pu,
                  set: r.prototype.dv,
                }),
                (r.prototype.get_z = r.prototype.Sw =
                  function () {
                    return M_(this.Ut);
                  }),
                (r.prototype.set_z = r.prototype.Fy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), T_(e, t));
                  }),
                Object.defineProperty(r.prototype, "z", {
                  get: r.prototype.Sw,
                  set: r.prototype.Fy,
                }),
                (r.prototype.__destroy__ = function () {
                  F_(this.Ut);
                }),
                (v.prototype = Object.create(e.prototype)),
                (v.prototype.constructor = v),
                (v.prototype.Vt = v),
                (v.Wt = {}),
                (i.b2AABB = v),
                (v.prototype.IsValid = function () {
                  return !!I_(this.Ut);
                }),
                (v.prototype.GetCenter = function () {
                  return h(W_(this.Ut), m);
                }),
                (v.prototype.GetExtents = function () {
                  return h(O_(this.Ut), m);
                }),
                (v.prototype.GetPerimeter = function () {
                  return V_(this.Ut);
                }),
                (v.prototype.Combine = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    void 0 === e ? E_(n, t) : q_(n, t, e));
                }),
                (v.prototype.Contains = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), !!k_(e, t));
                }),
                (v.prototype.RayCast = function (t, e) {
                  var n = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    !!N_(n, t, e)
                  );
                }),
                (v.prototype.get_lowerBound = v.prototype.Zv =
                  function () {
                    return h(X_(this.Ut), m);
                  }),
                (v.prototype.set_lowerBound = v.prototype.Mx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), H_(e, t));
                  }),
                Object.defineProperty(v.prototype, "lowerBound", {
                  get: v.prototype.Zv,
                  set: v.prototype.Mx,
                }),
                (v.prototype.get_upperBound = v.prototype.Qw =
                  function () {
                    return h(z_(this.Ut), m);
                  }),
                (v.prototype.set_upperBound = v.prototype.Dy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Q_(e, t));
                  }),
                Object.defineProperty(v.prototype, "upperBound", {
                  get: v.prototype.Qw,
                  set: v.prototype.Dy,
                }),
                (v.prototype.__destroy__ = function () {
                  Z_(this.Ut);
                }),
                (A.prototype = Object.create(e.prototype)),
                (A.prototype.constructor = A),
                (A.prototype.Vt = A),
                (A.Wt = {}),
                (i.b2FixtureDef = A),
                (A.prototype.get_shape = A.prototype.Ew =
                  function () {
                    return h(K_(this.Ut), p);
                  }),
                (A.prototype.set_shape = A.prototype.ry =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), $_(e, t));
                  }),
                Object.defineProperty(A.prototype, "shape", {
                  get: A.prototype.Ew,
                  set: A.prototype.ry,
                }),
                (A.prototype.get_userData = A.prototype.Yt =
                  function () {
                    return tr(this.Ut);
                  }),
                (A.prototype.set_userData = A.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), er(e, t));
                  }),
                Object.defineProperty(A.prototype, "userData", {
                  get: A.prototype.Yt,
                  set: A.prototype.$t,
                }),
                (A.prototype.get_friction = A.prototype.Dv =
                  function () {
                    return nr(this.Ut);
                  }),
                (A.prototype.set_friction = A.prototype.qx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), or(e, t));
                  }),
                Object.defineProperty(A.prototype, "friction", {
                  get: A.prototype.Dv,
                  set: A.prototype.qx,
                }),
                (A.prototype.get_restitution = A.prototype.Bw =
                  function () {
                    return ir(this.Ut);
                  }),
                (A.prototype.set_restitution = A.prototype.oy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), _r(e, t));
                  }),
                Object.defineProperty(A.prototype, "restitution", {
                  get: A.prototype.Bw,
                  set: A.prototype.oy,
                }),
                (A.prototype.get_density = A.prototype.yv =
                  function () {
                    return rr(this.Ut);
                  }),
                (A.prototype.set_density = A.prototype.lx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), pr(e, t));
                  }),
                Object.defineProperty(A.prototype, "density", {
                  get: A.prototype.yv,
                  set: A.prototype.lx,
                }),
                (A.prototype.get_isSensor = A.prototype.Mv =
                  function () {
                    return !!sr(this.Ut);
                  }),
                (A.prototype.set_isSensor = A.prototype.zx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), cr(e, t));
                  }),
                Object.defineProperty(A.prototype, "isSensor", {
                  get: A.prototype.Mv,
                  set: A.prototype.zx,
                }),
                (A.prototype.get_filter = A.prototype.Av =
                  function () {
                    return h(ur(this.Ut), u);
                  }),
                (A.prototype.set_filter = A.prototype.nx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ar(e, t));
                  }),
                Object.defineProperty(A.prototype, "filter", {
                  get: A.prototype.Av,
                  set: A.prototype.nx,
                }),
                (A.prototype.__destroy__ = function () {
                  lr(this.Ut);
                }),
                (B.prototype = Object.create(n.prototype)),
                (B.prototype.constructor = B),
                (B.prototype.Vt = B),
                (B.Wt = {}),
                (i.b2FrictionJointDef = B),
                (B.prototype.Initialize = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    br(o, t, e, n));
                }),
                (B.prototype.get_localAnchorA = B.prototype.gu =
                  function () {
                    return h(dr(this.Ut), m);
                  }),
                (B.prototype.set_localAnchorA = B.prototype.iu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), mr(e, t));
                  }),
                Object.defineProperty(B.prototype, "localAnchorA", {
                  get: B.prototype.gu,
                  set: B.prototype.iu,
                }),
                (B.prototype.get_localAnchorB = B.prototype.hu =
                  function () {
                    return h(fr(this.Ut), m);
                  }),
                (B.prototype.set_localAnchorB = B.prototype.ju =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), hr(e, t));
                  }),
                Object.defineProperty(B.prototype, "localAnchorB", {
                  get: B.prototype.hu,
                  set: B.prototype.ju,
                }),
                (B.prototype.get_maxForce = B.prototype.tu =
                  function () {
                    return gr(this.Ut);
                  }),
                (B.prototype.set_maxForce = B.prototype.xu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ur(e, t));
                  }),
                Object.defineProperty(B.prototype, "maxForce", {
                  get: B.prototype.tu,
                  set: B.prototype.xu,
                }),
                (B.prototype.get_maxTorque = B.prototype.Iu =
                  function () {
                    return wr(this.Ut);
                  }),
                (B.prototype.set_maxTorque = B.prototype.Xu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Jr(e, t));
                  }),
                Object.defineProperty(B.prototype, "maxTorque", {
                  get: B.prototype.Iu,
                  set: B.prototype.Xu,
                }),
                (B.prototype.get_type = B.prototype.Xt =
                  function () {
                    return Dr(this.Ut);
                  }),
                (B.prototype.set_type = B.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), vr(e, t));
                  }),
                Object.defineProperty(B.prototype, "type", {
                  get: B.prototype.Xt,
                  set: B.prototype.Zt,
                }),
                (B.prototype.get_userData = B.prototype.Yt =
                  function () {
                    return Sr(this.Ut);
                  }),
                (B.prototype.set_userData = B.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ar(e, t));
                  }),
                Object.defineProperty(B.prototype, "userData", {
                  get: B.prototype.Yt,
                  set: B.prototype.$t,
                }),
                (B.prototype.get_bodyA = B.prototype.au =
                  function () {
                    return h(xr(this.Ut), l);
                  }),
                (B.prototype.set_bodyA = B.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Br(e, t));
                  }),
                Object.defineProperty(B.prototype, "bodyA", {
                  get: B.prototype.au,
                  set: B.prototype.du,
                }),
                (B.prototype.get_bodyB = B.prototype.bu =
                  function () {
                    return h(jr(this.Ut), l);
                  }),
                (B.prototype.set_bodyB = B.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Gr(e, t));
                  }),
                Object.defineProperty(B.prototype, "bodyB", {
                  get: B.prototype.bu,
                  set: B.prototype.eu,
                }),
                (B.prototype.get_collideConnected = B.prototype.cu =
                  function () {
                    return !!Cr(this.Ut);
                  }),
                (B.prototype.set_collideConnected = B.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Pr(e, t));
                  }),
                Object.defineProperty(B.prototype, "collideConnected", {
                  get: B.prototype.cu,
                  set: B.prototype.fu,
                }),
                (B.prototype.__destroy__ = function () {
                  Rr(this.Ut);
                }),
                (C.prototype = Object.create(e.prototype)),
                (C.prototype.constructor = C),
                (C.prototype.Vt = C),
                (C.Wt = {}),
                (i.b2Manifold = C),
                (C.prototype.get_localNormal = C.prototype.Xv =
                  function () {
                    return h(Tr(this.Ut), m);
                  }),
                (C.prototype.set_localNormal = C.prototype.Kx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Fr(e, t));
                  }),
                Object.defineProperty(C.prototype, "localNormal", {
                  get: C.prototype.Xv,
                  set: C.prototype.Kx,
                }),
                (C.prototype.get_localPoint = C.prototype.Fu =
                  function () {
                    return h(Lr(this.Ut), m);
                  }),
                (C.prototype.set_localPoint = C.prototype.Uu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ir(e, t));
                  }),
                Object.defineProperty(C.prototype, "localPoint", {
                  get: C.prototype.Fu,
                  set: C.prototype.Uu,
                }),
                (C.prototype.get_type = C.prototype.Xt =
                  function () {
                    return Wr(this.Ut);
                  }),
                (C.prototype.set_type = C.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Or(e, t));
                  }),
                Object.defineProperty(C.prototype, "type", {
                  get: C.prototype.Xt,
                  set: C.prototype.Zt,
                }),
                (C.prototype.get_pointCount = C.prototype.ww =
                  function () {
                    return Vr(this.Ut);
                  }),
                (C.prototype.set_pointCount = C.prototype.jy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Er(e, t));
                  }),
                Object.defineProperty(C.prototype, "pointCount", {
                  get: C.prototype.ww,
                  set: C.prototype.jy,
                }),
                (C.prototype.__destroy__ = function () {
                  qr(this.Ut);
                }),
                (D.prototype = Object.create(e.prototype)),
                (D.prototype.constructor = D),
                (D.prototype.Vt = D),
                (D.Wt = {}),
                (i.b2WorldManifold = D),
                (D.prototype.Initialize = function (t, e, n, o, i) {
                  var _ = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    i && "object" == typeof i && (i = i.Ut),
                    Nr(_, t, e, n, o, i));
                }),
                (D.prototype.get_normal = D.prototype.Ku =
                  function () {
                    return h(Xr(this.Ut), m);
                  }),
                (D.prototype.set_normal = D.prototype.Zu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Hr(e, t));
                  }),
                Object.defineProperty(D.prototype, "normal", {
                  get: D.prototype.Ku,
                  set: D.prototype.Zu,
                }),
                (D.prototype.get_points = D.prototype.xw =
                  function (t) {
                    var e = this.Ut;
                    return (t && "object" == typeof t && (t = t.Ut), h(zr(e, t), m));
                  }),
                (D.prototype.set_points = D.prototype.ky =
                  function (t, e) {
                    var n = this.Ut;
                    (sw(),
                      t && "object" == typeof t && (t = t.Ut),
                      e && "object" == typeof e && (e = e.Ut),
                      Qr(n, t, e));
                  }),
                Object.defineProperty(D.prototype, "points", {
                  get: D.prototype.xw,
                  set: D.prototype.ky,
                }),
                (D.prototype.get_separations = D.prototype.Dw =
                  function (t) {
                    var e = this.Ut;
                    return (t && "object" == typeof t && (t = t.Ut), Zr(e, t));
                  }),
                (D.prototype.set_separations = D.prototype.qy =
                  function (t, e) {
                    var n = this.Ut;
                    (sw(),
                      t && "object" == typeof t && (t = t.Ut),
                      e && "object" == typeof e && (e = e.Ut),
                      Yr(n, t, e));
                  }),
                Object.defineProperty(D.prototype, "separations", {
                  get: D.prototype.Dw,
                  set: D.prototype.qy,
                }),
                (D.prototype.__destroy__ = function () {
                  Kr(this.Ut);
                }),
                (E.prototype = Object.create(n.prototype)),
                (E.prototype.constructor = E),
                (E.prototype.Vt = E),
                (E.Wt = {}),
                (i.b2PrismaticJointDef = E),
                (E.prototype.Initialize = function (t, e, n, o) {
                  var i = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    tp(i, t, e, n, o));
                }),
                (E.prototype.get_localAnchorA = E.prototype.gu =
                  function () {
                    return h(ep(this.Ut), m);
                  }),
                (E.prototype.set_localAnchorA = E.prototype.iu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), np(e, t));
                  }),
                Object.defineProperty(E.prototype, "localAnchorA", {
                  get: E.prototype.gu,
                  set: E.prototype.iu,
                }),
                (E.prototype.get_localAnchorB = E.prototype.hu =
                  function () {
                    return h(op(this.Ut), m);
                  }),
                (E.prototype.set_localAnchorB = E.prototype.ju =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ip(e, t));
                  }),
                Object.defineProperty(E.prototype, "localAnchorB", {
                  get: E.prototype.hu,
                  set: E.prototype.ju,
                }),
                (E.prototype.get_localAxisA = E.prototype.Eu =
                  function () {
                    return h(_p(this.Ut), m);
                  }),
                (E.prototype.set_localAxisA = E.prototype.Tu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), rp(e, t));
                  }),
                Object.defineProperty(E.prototype, "localAxisA", {
                  get: E.prototype.Eu,
                  set: E.prototype.Tu,
                }),
                (E.prototype.get_referenceAngle = E.prototype.vu =
                  function () {
                    return pp(this.Ut);
                  }),
                (E.prototype.set_referenceAngle = E.prototype.zu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), sp(e, t));
                  }),
                Object.defineProperty(E.prototype, "referenceAngle", {
                  get: E.prototype.vu,
                  set: E.prototype.zu,
                }),
                (E.prototype.get_enableLimit = E.prototype.Bu =
                  function () {
                    return !!cp(this.Ut);
                  }),
                (E.prototype.set_enableLimit = E.prototype.Qu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), up(e, t));
                  }),
                Object.defineProperty(E.prototype, "enableLimit", {
                  get: E.prototype.Bu,
                  set: E.prototype.Qu,
                }),
                (E.prototype.get_lowerTranslation = E.prototype.$v =
                  function () {
                    return ap(this.Ut);
                  }),
                (E.prototype.set_lowerTranslation = E.prototype.Nx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), lp(e, t));
                  }),
                Object.defineProperty(E.prototype, "lowerTranslation", {
                  get: E.prototype.$v,
                  set: E.prototype.Nx,
                }),
                (E.prototype.get_upperTranslation = E.prototype.Rw =
                  function () {
                    return yp(this.Ut);
                  }),
                (E.prototype.set_upperTranslation = E.prototype.Ey =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), bp(e, t));
                  }),
                Object.defineProperty(E.prototype, "upperTranslation", {
                  get: E.prototype.Rw,
                  set: E.prototype.Ey,
                }),
                (E.prototype.get_enableMotor = E.prototype.su =
                  function () {
                    return !!dp(this.Ut);
                  }),
                (E.prototype.set_enableMotor = E.prototype.wu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), mp(e, t));
                  }),
                Object.defineProperty(E.prototype, "enableMotor", {
                  get: E.prototype.su,
                  set: E.prototype.wu,
                }),
                (E.prototype.get_maxMotorForce = E.prototype.rw =
                  function () {
                    return fp(this.Ut);
                  }),
                (E.prototype.set_maxMotorForce = E.prototype.ey =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), hp(e, t));
                  }),
                Object.defineProperty(E.prototype, "maxMotorForce", {
                  get: E.prototype.rw,
                  set: E.prototype.ey,
                }),
                (E.prototype.get_motorSpeed = E.prototype.uu =
                  function () {
                    return gp(this.Ut);
                  }),
                (E.prototype.set_motorSpeed = E.prototype.yu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Up(e, t));
                  }),
                Object.defineProperty(E.prototype, "motorSpeed", {
                  get: E.prototype.uu,
                  set: E.prototype.yu,
                }),
                (E.prototype.get_type = E.prototype.Xt =
                  function () {
                    return wp(this.Ut);
                  }),
                (E.prototype.set_type = E.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Jp(e, t));
                  }),
                Object.defineProperty(E.prototype, "type", {
                  get: E.prototype.Xt,
                  set: E.prototype.Zt,
                }),
                (E.prototype.get_userData = E.prototype.Yt =
                  function () {
                    return Dp(this.Ut);
                  }),
                (E.prototype.set_userData = E.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), vp(e, t));
                  }),
                Object.defineProperty(E.prototype, "userData", {
                  get: E.prototype.Yt,
                  set: E.prototype.$t,
                }),
                (E.prototype.get_bodyA = E.prototype.au =
                  function () {
                    return h(Sp(this.Ut), l);
                  }),
                (E.prototype.set_bodyA = E.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ap(e, t));
                  }),
                Object.defineProperty(E.prototype, "bodyA", {
                  get: E.prototype.au,
                  set: E.prototype.du,
                }),
                (E.prototype.get_bodyB = E.prototype.bu =
                  function () {
                    return h(xp(this.Ut), l);
                  }),
                (E.prototype.set_bodyB = E.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Bp(e, t));
                  }),
                Object.defineProperty(E.prototype, "bodyB", {
                  get: E.prototype.bu,
                  set: E.prototype.eu,
                }),
                (E.prototype.get_collideConnected = E.prototype.cu =
                  function () {
                    return !!jp(this.Ut);
                  }),
                (E.prototype.set_collideConnected = E.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Gp(e, t));
                  }),
                Object.defineProperty(E.prototype, "collideConnected", {
                  get: E.prototype.cu,
                  set: E.prototype.fu,
                }),
                (E.prototype.__destroy__ = function () {
                  Cp(this.Ut);
                }),
                (F.prototype = Object.create(e.prototype)),
                (F.prototype.constructor = F),
                (F.prototype.Vt = F),
                (F.Wt = {}),
                (i.b2World = F),
                (F.prototype.SetDestructionListener = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Rp(e, t));
                }),
                (F.prototype.SetContactFilter = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Mp(e, t));
                }),
                (F.prototype.SetContactListener = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Tp(e, t));
                }),
                (F.prototype.SetDebugDraw = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Fp(e, t));
                }),
                (F.prototype.CreateBody = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Lp(e, t), l));
                }),
                (F.prototype.DestroyBody = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ip(e, t));
                }),
                (F.prototype.CreateJoint = function (t) {
                  var e = this.Ut,
                    n = t.Vt.name;
                  switch ((t && "object" == typeof t && (t = t.Ut), n)) {
                    case "H":
                      return h(Wp(e, t), S);
                    case "J":
                      return h(Wp(e, t), Pw);
                    case "L":
                      return h(Wp(e, t), Vw);
                    case "E":
                      return h(Wp(e, t), G);
                    case "Z":
                      return h(Wp(e, t), Fw);
                    case "W":
                      return h(Wp(e, t), Ow);
                    case "T":
                      return h(Wp(e, t), Dw);
                    case "U":
                      return h(Wp(e, t), Bw);
                    case "R":
                      return h(Wp(e, t), X);
                    default:
                      return h(Wp(e, t), k);
                  }
                }),
                (F.prototype.DestroyJoint = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Op(e, t));
                }),
                (F.prototype.Step = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Vp(o, t, e, n));
                }),
                (F.prototype.ClearForces = function () {
                  Ep(this.Ut);
                }),
                (F.prototype.DrawDebugData = function () {
                  qp(this.Ut);
                }),
                (F.prototype.QueryAABB = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    kp(n, t, e));
                }),
                (F.prototype.QueryAllAABB = function (e, n = []) {
                  var o = F.jsqc;
                  return (
                    o || (o = F.jsqc = new Cw()),
                    (o.ReportFixture = function (e) {
                      return (n.push(h(e, t)), !0);
                    }),
                    this.QueryAABB(o, e),
                    n
                  );
                }),
                (F.prototype.QueryShape = function (e, n, i) {
                  var _ = F.QueryShape_s_aabb;
                  (_ || (_ = F.QueryShape_s_aabb = new v()), n.ComputeAABB(_, i, 0));
                  var r = e.ReportFixture;
                  ((e.ReportFixture = function (e) {
                    var _ = h(e, t);
                    const p = _.collider._shape;
                    return (
                      o.b2TestOverlapShape(n, 0, p, 0, i, _.GetBody().GetTransform()) && r(e),
                      !0
                    );
                  }),
                    this.QueryAABB(e, _));
                }),
                (F.prototype.QueryAllShape = function (e, n, o = []) {
                  var i = F.jsqc;
                  return (
                    i || (i = F.jsqc = new Cw()),
                    (i.ReportFixture = function (e) {
                      return (o.push(h(e, t)), !0);
                    }),
                    this.QueryShape(i, e, n),
                    o
                  );
                }),
                (F.prototype.RayCast = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Np(o, t, e, n));
                }),
                (F.prototype.GetBodyList = function () {
                  return h(Xp(this.Ut), l);
                }),
                (F.prototype.GetJointList = function () {
                  return h(Hp(this.Ut), k);
                }),
                (F.prototype.GetContactList = function () {
                  return h(zp(this.Ut), Iw);
                }),
                (F.prototype.SetAllowSleeping = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Qp(e, t));
                }),
                (F.prototype.GetAllowSleeping = function () {
                  return !!Zp(this.Ut);
                }),
                (F.prototype.SetWarmStarting = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Yp(e, t));
                }),
                (F.prototype.GetWarmStarting = function () {
                  return !!Kp(this.Ut);
                }),
                (F.prototype.SetContinuousPhysics = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), $p(e, t));
                }),
                (F.prototype.GetContinuousPhysics = function () {
                  return !!ts(this.Ut);
                }),
                (F.prototype.SetSubStepping = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), es(e, t));
                }),
                (F.prototype.GetSubStepping = function () {
                  return !!ns(this.Ut);
                }),
                (F.prototype.GetProxyCount = function () {
                  return os(this.Ut);
                }),
                (F.prototype.GetBodyCount = function () {
                  return is(this.Ut);
                }),
                (F.prototype.GetJointCount = function () {
                  return _s(this.Ut);
                }),
                (F.prototype.GetContactCount = function () {
                  return rs(this.Ut);
                }),
                (F.prototype.GetTreeHeight = function () {
                  return ps(this.Ut);
                }),
                (F.prototype.GetTreeBalance = function () {
                  return ss(this.Ut);
                }),
                (F.prototype.GetTreeQuality = function () {
                  return cs(this.Ut);
                }),
                (F.prototype.SetGravity = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), us(e, t));
                }),
                (F.prototype.GetGravity = function () {
                  return h(as(this.Ut), m);
                }),
                (F.prototype.IsLocked = function () {
                  return !!ls(this.Ut);
                }),
                (F.prototype.SetAutoClearForces = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), ys(e, t));
                }),
                (F.prototype.GetAutoClearForces = function () {
                  return !!bs(this.Ut);
                }),
                (F.prototype.GetProfile = function () {
                  return h(ds(this.Ut), w);
                }),
                (F.prototype.Dump = function () {
                  ms(this.Ut);
                }),
                (F.prototype.__destroy__ = function () {
                  fs(this.Ut);
                }),
                (G.prototype = Object.create(k.prototype)),
                (G.prototype.constructor = G),
                (G.prototype.Vt = G),
                (G.Wt = {}),
                (i.b2PrismaticJoint = G),
                (G.prototype.GetLocalAnchorA = function () {
                  return h(hs(this.Ut), m);
                }),
                (G.prototype.GetLocalAnchorB = function () {
                  return h(gs(this.Ut), m);
                }),
                (G.prototype.GetLocalAxisA = function () {
                  return h(Us(this.Ut), m);
                }),
                (G.prototype.GetReferenceAngle = function () {
                  return ws(this.Ut);
                }),
                (G.prototype.GetJointTranslation = function () {
                  return Js(this.Ut);
                }),
                (G.prototype.GetJointSpeed = function () {
                  return Ds(this.Ut);
                }),
                (G.prototype.IsLimitEnabled = function () {
                  return !!vs(this.Ut);
                }),
                (G.prototype.EnableLimit = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ss(e, t));
                }),
                (G.prototype.GetLowerLimit = function () {
                  return As(this.Ut);
                }),
                (G.prototype.GetUpperLimit = function () {
                  return xs(this.Ut);
                }),
                (G.prototype.SetLimits = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    Bs(n, t, e));
                }),
                (G.prototype.IsMotorEnabled = function () {
                  return !!js(this.Ut);
                }),
                (G.prototype.EnableMotor = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Gs(e, t));
                }),
                (G.prototype.SetMotorSpeed = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Cs(e, t));
                }),
                (G.prototype.GetMotorSpeed = function () {
                  return Ps(this.Ut);
                }),
                (G.prototype.SetMaxMotorForce = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Rs(e, t));
                }),
                (G.prototype.GetMaxMotorForce = function () {
                  return Ms(this.Ut);
                }),
                (G.prototype.GetMotorForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Ts(e, t));
                }),
                (G.prototype.GetType = function () {
                  return Fs(this.Ut);
                }),
                (G.prototype.GetBodyA = function () {
                  return h(Ls(this.Ut), l);
                }),
                (G.prototype.GetBodyB = function () {
                  return h(Is(this.Ut), l);
                }),
                (G.prototype.GetAnchorA = function () {
                  return h(Ws(this.Ut), m);
                }),
                (G.prototype.GetAnchorB = function () {
                  return h(Os(this.Ut), m);
                }),
                (G.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Vs(e, t), m));
                }),
                (G.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Es(e, t));
                }),
                (G.prototype.GetNext = function () {
                  return h(qs(this.Ut), k);
                }),
                (G.prototype.GetUserData = function () {
                  return ks(this.Ut);
                }),
                (G.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ns(e, t));
                }),
                (G.prototype.IsActive = function () {
                  return !!Xs(this.Ut);
                }),
                (G.prototype.GetCollideConnected = function () {
                  return !!Hs(this.Ut);
                }),
                (G.prototype.__destroy__ = function () {
                  zs(this.Ut);
                }),
                (Jw.prototype = Object.create(e.prototype)),
                (Jw.prototype.constructor = Jw),
                (Jw.prototype.Vt = Jw),
                (Jw.Wt = {}),
                (i.b2RayCastOutput = Jw),
                (Jw.prototype.get_normal = Jw.prototype.Ku =
                  function () {
                    return h(Qs(this.Ut), m);
                  }),
                (Jw.prototype.set_normal = Jw.prototype.Zu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Zs(e, t));
                  }),
                Object.defineProperty(Jw.prototype, "normal", {
                  get: Jw.prototype.Ku,
                  set: Jw.prototype.Zu,
                }),
                (Jw.prototype.get_fraction = Jw.prototype.Cv =
                  function () {
                    return Ys(this.Ut);
                  }),
                (Jw.prototype.set_fraction = Jw.prototype.px =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ks(e, t));
                  }),
                Object.defineProperty(Jw.prototype, "fraction", {
                  get: Jw.prototype.Cv,
                  set: Jw.prototype.px,
                }),
                (Jw.prototype.__destroy__ = function () {
                  $s(this.Ut);
                }),
                (Kw.prototype = Object.create(e.prototype)),
                (Kw.prototype.constructor = Kw),
                (Kw.prototype.Vt = Kw),
                (Kw.Wt = {}),
                (i.b2ContactID = Kw),
                (Kw.prototype.get_cf = Kw.prototype.tv =
                  function () {
                    return h(tc(this.Ut), z);
                  }),
                (Kw.prototype.set_cf = Kw.prototype.gx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ec(e, t));
                  }),
                Object.defineProperty(Kw.prototype, "cf", {
                  get: Kw.prototype.tv,
                  set: Kw.prototype.gx,
                }),
                (Kw.prototype.get_key = Kw.prototype.Qv =
                  function () {
                    return nc(this.Ut);
                  }),
                (Kw.prototype.set_key = Kw.prototype.Dx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), oc(e, t));
                  }),
                Object.defineProperty(Kw.prototype, "key", {
                  get: Kw.prototype.Qv,
                  set: Kw.prototype.Dx,
                }),
                (Kw.prototype.__destroy__ = function () {
                  ic(this.Ut);
                }),
                (Lw.prototype = Object.create(ww.prototype)),
                (Lw.prototype.constructor = Lw),
                (Lw.prototype.Vt = Lw),
                (Lw.Wt = {}),
                (i.JSContactListener = Lw),
                (Lw.prototype.BeginContact = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), rc(e, t));
                }),
                (Lw.prototype.EndContact = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), pc(e, t));
                }),
                (Lw.prototype.PreSolve = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    sc(n, t, e));
                }),
                (Lw.prototype.PostSolve = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    cc(n, t, e));
                }),
                (Lw.prototype.__destroy__ = function () {
                  uc(this.Ut);
                }),
                (Mw.prototype = Object.create(e.prototype)),
                (Mw.prototype.constructor = Mw),
                (Mw.prototype.Vt = Mw),
                (Mw.Wt = {}),
                (i.b2Mat22 = Mw),
                (Mw.prototype.Set = Mw.prototype.Set =
                  function (t, e) {
                    var n = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut),
                      e && "object" == typeof e && (e = e.Ut),
                      bc(n, t, e));
                  }),
                (Mw.prototype.SetIdentity = function () {
                  dc(this.Ut);
                }),
                (Mw.prototype.SetZero = function () {
                  mc(this.Ut);
                }),
                (Mw.prototype.GetInverse = function () {
                  return h(fc(this.Ut), Mw);
                }),
                (Mw.prototype.Solve = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(hc(e, t), m));
                }),
                (Mw.prototype.get_ex = Mw.prototype.Cu =
                  function () {
                    return h(gc(this.Ut), m);
                  }),
                (Mw.prototype.set_ex = Mw.prototype.Ru =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Uc(e, t));
                  }),
                Object.defineProperty(Mw.prototype, "ex", {
                  get: Mw.prototype.Cu,
                  set: Mw.prototype.Ru,
                }),
                (Mw.prototype.get_ey = Mw.prototype.Du =
                  function () {
                    return h(wc(this.Ut), m);
                  }),
                (Mw.prototype.set_ey = Mw.prototype.Su =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Jc(e, t));
                  }),
                Object.defineProperty(Mw.prototype, "ey", {
                  get: Mw.prototype.Du,
                  set: Mw.prototype.Su,
                }),
                (Mw.prototype.__destroy__ = function () {
                  Dc(this.Ut);
                }),
                (H.prototype = Object.create(n.prototype)),
                (H.prototype.constructor = H),
                (H.prototype.Vt = H),
                (H.Wt = {}),
                (i.b2WheelJointDef = H),
                (H.prototype.Initialize = function (t, e, n, o) {
                  var i = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    Sc(i, t, e, n, o));
                }),
                (H.prototype.get_localAnchorA = H.prototype.gu =
                  function () {
                    return h(Ac(this.Ut), m);
                  }),
                (H.prototype.set_localAnchorA = H.prototype.iu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), xc(e, t));
                  }),
                Object.defineProperty(H.prototype, "localAnchorA", {
                  get: H.prototype.gu,
                  set: H.prototype.iu,
                }),
                (H.prototype.get_localAnchorB = H.prototype.hu =
                  function () {
                    return h(Bc(this.Ut), m);
                  }),
                (H.prototype.set_localAnchorB = H.prototype.ju =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), jc(e, t));
                  }),
                Object.defineProperty(H.prototype, "localAnchorB", {
                  get: H.prototype.hu,
                  set: H.prototype.ju,
                }),
                (H.prototype.get_localAxisA = H.prototype.Eu =
                  function () {
                    return h(Gc(this.Ut), m);
                  }),
                (H.prototype.set_localAxisA = H.prototype.Tu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Cc(e, t));
                  }),
                Object.defineProperty(H.prototype, "localAxisA", {
                  get: H.prototype.Eu,
                  set: H.prototype.Tu,
                }),
                (H.prototype.get_enableMotor = H.prototype.su =
                  function () {
                    return !!Pc(this.Ut);
                  }),
                (H.prototype.set_enableMotor = H.prototype.wu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Rc(e, t));
                  }),
                Object.defineProperty(H.prototype, "enableMotor", {
                  get: H.prototype.su,
                  set: H.prototype.wu,
                }),
                (H.prototype.get_maxMotorTorque = H.prototype.Hu =
                  function () {
                    return Mc(this.Ut);
                  }),
                (H.prototype.set_maxMotorTorque = H.prototype.Wu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Tc(e, t));
                  }),
                Object.defineProperty(H.prototype, "maxMotorTorque", {
                  get: H.prototype.Hu,
                  set: H.prototype.Wu,
                }),
                (H.prototype.get_motorSpeed = H.prototype.uu =
                  function () {
                    return Fc(this.Ut);
                  }),
                (H.prototype.set_motorSpeed = H.prototype.yu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Lc(e, t));
                  }),
                Object.defineProperty(H.prototype, "motorSpeed", {
                  get: H.prototype.uu,
                  set: H.prototype.yu,
                }),
                (H.prototype.get_frequencyHz = H.prototype.pu =
                  function () {
                    return Ic(this.Ut);
                  }),
                (H.prototype.set_frequencyHz = H.prototype.ru =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Wc(e, t));
                  }),
                Object.defineProperty(H.prototype, "frequencyHz", {
                  get: H.prototype.pu,
                  set: H.prototype.ru,
                }),
                (H.prototype.get_dampingRatio = H.prototype.ou =
                  function () {
                    return Oc(this.Ut);
                  }),
                (H.prototype.set_dampingRatio = H.prototype.qu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Vc(e, t));
                  }),
                Object.defineProperty(H.prototype, "dampingRatio", {
                  get: H.prototype.ou,
                  set: H.prototype.qu,
                }),
                (H.prototype.get_type = H.prototype.Xt =
                  function () {
                    return Ec(this.Ut);
                  }),
                (H.prototype.set_type = H.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), qc(e, t));
                  }),
                Object.defineProperty(H.prototype, "type", {
                  get: H.prototype.Xt,
                  set: H.prototype.Zt,
                }),
                (H.prototype.get_userData = H.prototype.Yt =
                  function () {
                    return kc(this.Ut);
                  }),
                (H.prototype.set_userData = H.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Nc(e, t));
                  }),
                Object.defineProperty(H.prototype, "userData", {
                  get: H.prototype.Yt,
                  set: H.prototype.$t,
                }),
                (H.prototype.get_bodyA = H.prototype.au =
                  function () {
                    return h(Xc(this.Ut), l);
                  }),
                (H.prototype.set_bodyA = H.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Hc(e, t));
                  }),
                Object.defineProperty(H.prototype, "bodyA", {
                  get: H.prototype.au,
                  set: H.prototype.du,
                }),
                (H.prototype.get_bodyB = H.prototype.bu =
                  function () {
                    return h(zc(this.Ut), l);
                  }),
                (H.prototype.set_bodyB = H.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Qc(e, t));
                  }),
                Object.defineProperty(H.prototype, "bodyB", {
                  get: H.prototype.bu,
                  set: H.prototype.eu,
                }),
                (H.prototype.get_collideConnected = H.prototype.cu =
                  function () {
                    return !!Zc(this.Ut);
                  }),
                (H.prototype.set_collideConnected = H.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Yc(e, t));
                  }),
                Object.defineProperty(H.prototype, "collideConnected", {
                  get: H.prototype.cu,
                  set: H.prototype.fu,
                }),
                (H.prototype.__destroy__ = function () {
                  Kc(this.Ut);
                }),
                (I.prototype = Object.create(p.prototype)),
                (I.prototype.constructor = I),
                (I.prototype.Vt = I),
                (I.Wt = {}),
                (i.b2CircleShape = I),
                (I.prototype.GetType = function () {
                  return tu(this.Ut);
                }),
                (I.prototype.GetChildCount = function () {
                  return eu(this.Ut);
                }),
                (I.prototype.TestPoint = function (t, e) {
                  var n = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    !!nu(n, t, e)
                  );
                }),
                (I.prototype.RayCast = function (t, e, n, o) {
                  var i = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    !!ou(i, t, e, n, o)
                  );
                }),
                (I.prototype.ComputeAABB = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    iu(o, t, e, n));
                }),
                (I.prototype.ComputeMass = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    _u(n, t, e));
                }),
                (I.prototype.get_m_p = I.prototype.gw =
                  function () {
                    return h(ru(this.Ut), m);
                  }),
                (I.prototype.set_m_p = I.prototype.Ux =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), pu(e, t));
                  }),
                Object.defineProperty(I.prototype, "m_p", {
                  get: I.prototype.gw,
                  set: I.prototype.Ux,
                }),
                (I.prototype.get_m_type = I.prototype.lu =
                  function () {
                    return su(this.Ut);
                  }),
                (I.prototype.set_m_type = I.prototype.nu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), cu(e, t));
                  }),
                Object.defineProperty(I.prototype, "m_type", {
                  get: I.prototype.lu,
                  set: I.prototype.nu,
                }),
                (I.prototype.get_m_radius = I.prototype.ku =
                  function () {
                    return uu(this.Ut);
                  }),
                (I.prototype.set_m_radius = I.prototype.mu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), au(e, t));
                  }),
                Object.defineProperty(I.prototype, "m_radius", {
                  get: I.prototype.ku,
                  set: I.prototype.mu,
                }),
                (I.prototype.__destroy__ = function () {
                  lu(this.Ut);
                }),
                (J.prototype = Object.create(n.prototype)),
                (J.prototype.constructor = J),
                (J.prototype.Vt = J),
                (J.Wt = {}),
                (i.b2WeldJointDef = J),
                (J.prototype.Initialize = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    bu(o, t, e, n));
                }),
                (J.prototype.get_localAnchorA = J.prototype.gu =
                  function () {
                    return h(du(this.Ut), m);
                  }),
                (J.prototype.set_localAnchorA = J.prototype.iu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), mu(e, t));
                  }),
                Object.defineProperty(J.prototype, "localAnchorA", {
                  get: J.prototype.gu,
                  set: J.prototype.iu,
                }),
                (J.prototype.get_localAnchorB = J.prototype.hu =
                  function () {
                    return h(fu(this.Ut), m);
                  }),
                (J.prototype.set_localAnchorB = J.prototype.ju =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), hu(e, t));
                  }),
                Object.defineProperty(J.prototype, "localAnchorB", {
                  get: J.prototype.hu,
                  set: J.prototype.ju,
                }),
                (J.prototype.get_referenceAngle = J.prototype.vu =
                  function () {
                    return gu(this.Ut);
                  }),
                (J.prototype.set_referenceAngle = J.prototype.zu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Uu(e, t));
                  }),
                Object.defineProperty(J.prototype, "referenceAngle", {
                  get: J.prototype.vu,
                  set: J.prototype.zu,
                }),
                (J.prototype.get_frequencyHz = J.prototype.pu =
                  function () {
                    return wu(this.Ut);
                  }),
                (J.prototype.set_frequencyHz = J.prototype.ru =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ju(e, t));
                  }),
                Object.defineProperty(J.prototype, "frequencyHz", {
                  get: J.prototype.pu,
                  set: J.prototype.ru,
                }),
                (J.prototype.get_dampingRatio = J.prototype.ou =
                  function () {
                    return Du(this.Ut);
                  }),
                (J.prototype.set_dampingRatio = J.prototype.qu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), vu(e, t));
                  }),
                Object.defineProperty(J.prototype, "dampingRatio", {
                  get: J.prototype.ou,
                  set: J.prototype.qu,
                }),
                (J.prototype.get_type = J.prototype.Xt =
                  function () {
                    return Su(this.Ut);
                  }),
                (J.prototype.set_type = J.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Au(e, t));
                  }),
                Object.defineProperty(J.prototype, "type", {
                  get: J.prototype.Xt,
                  set: J.prototype.Zt,
                }),
                (J.prototype.get_userData = J.prototype.Yt =
                  function () {
                    return xu(this.Ut);
                  }),
                (J.prototype.set_userData = J.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Bu(e, t));
                  }),
                Object.defineProperty(J.prototype, "userData", {
                  get: J.prototype.Yt,
                  set: J.prototype.$t,
                }),
                (J.prototype.get_bodyA = J.prototype.au =
                  function () {
                    return h(ju(this.Ut), l);
                  }),
                (J.prototype.set_bodyA = J.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Gu(e, t));
                  }),
                Object.defineProperty(J.prototype, "bodyA", {
                  get: J.prototype.au,
                  set: J.prototype.du,
                }),
                (J.prototype.get_bodyB = J.prototype.bu =
                  function () {
                    return h(Cu(this.Ut), l);
                  }),
                (J.prototype.set_bodyB = J.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Pu(e, t));
                  }),
                Object.defineProperty(J.prototype, "bodyB", {
                  get: J.prototype.bu,
                  set: J.prototype.eu,
                }),
                (J.prototype.get_collideConnected = J.prototype.cu =
                  function () {
                    return !!Ru(this.Ut);
                  }),
                (J.prototype.set_collideConnected = J.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Mu(e, t));
                  }),
                Object.defineProperty(J.prototype, "collideConnected", {
                  get: J.prototype.cu,
                  set: J.prototype.fu,
                }),
                (J.prototype.__destroy__ = function () {
                  Tu(this.Ut);
                }),
                (Nw.prototype = Object.create(e.prototype)),
                (Nw.prototype.constructor = Nw),
                (Nw.prototype.Vt = Nw),
                (Nw.Wt = {}),
                (i.b2MassData = Nw),
                (Nw.prototype.get_mass = Nw.prototype.ow =
                  function () {
                    return Lu(this.Ut);
                  }),
                (Nw.prototype.set_mass = Nw.prototype.by =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Iu(e, t));
                  }),
                Object.defineProperty(Nw.prototype, "mass", {
                  get: Nw.prototype.ow,
                  set: Nw.prototype.by,
                }),
                (Nw.prototype.get_center = Nw.prototype.sv =
                  function () {
                    return h(Wu(this.Ut), m);
                  }),
                (Nw.prototype.set_center = Nw.prototype.fx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ou(e, t));
                  }),
                Object.defineProperty(Nw.prototype, "center", {
                  get: Nw.prototype.sv,
                  set: Nw.prototype.fx,
                }),
                (Nw.prototype.get_I = Nw.prototype.fv =
                  function () {
                    return Vu(this.Ut);
                  }),
                (Nw.prototype.set_I = Nw.prototype.Tw =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Eu(e, t));
                  }),
                Object.defineProperty(Nw.prototype, "I", {
                  get: Nw.prototype.fv,
                  set: Nw.prototype.Tw,
                }),
                (Nw.prototype.__destroy__ = function () {
                  qu(this.Ut);
                }),
                (Ow.prototype = Object.create(k.prototype)),
                (Ow.prototype.constructor = Ow),
                (Ow.prototype.Vt = Ow),
                (Ow.Wt = {}),
                (i.b2GearJoint = Ow),
                (Ow.prototype.GetJoint1 = function () {
                  return h(ku(this.Ut), k);
                }),
                (Ow.prototype.GetJoint2 = function () {
                  return h(Nu(this.Ut), k);
                }),
                (Ow.prototype.SetRatio = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Xu(e, t));
                }),
                (Ow.prototype.GetRatio = function () {
                  return Hu(this.Ut);
                }),
                (Ow.prototype.GetType = function () {
                  return zu(this.Ut);
                }),
                (Ow.prototype.GetBodyA = function () {
                  return h(Qu(this.Ut), l);
                }),
                (Ow.prototype.GetBodyB = function () {
                  return h(Zu(this.Ut), l);
                }),
                (Ow.prototype.GetAnchorA = function () {
                  return h(Yu(this.Ut), m);
                }),
                (Ow.prototype.GetAnchorB = function () {
                  return h(Ku(this.Ut), m);
                }),
                (Ow.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h($u(e, t), m));
                }),
                (Ow.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), ta(e, t));
                }),
                (Ow.prototype.GetNext = function () {
                  return h(ea(this.Ut), k);
                }),
                (Ow.prototype.GetUserData = function () {
                  return oa(this.Ut);
                }),
                (Ow.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), ia(e, t));
                }),
                (Ow.prototype.IsActive = function () {
                  return !!_a(this.Ut);
                }),
                (Ow.prototype.GetCollideConnected = function () {
                  return !!ra(this.Ut);
                }),
                (Ow.prototype.__destroy__ = function () {
                  pa(this.Ut);
                }),
                (Pw.prototype = Object.create(k.prototype)),
                (Pw.prototype.constructor = Pw),
                (Pw.prototype.Vt = Pw),
                (Pw.Wt = {}),
                (i.b2WeldJoint = Pw),
                (Pw.prototype.GetLocalAnchorA = function () {
                  return h(sa(this.Ut), m);
                }),
                (Pw.prototype.GetLocalAnchorB = function () {
                  return h(ca(this.Ut), m);
                }),
                (Pw.prototype.SetFrequency = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), ua(e, t));
                }),
                (Pw.prototype.GetFrequency = function () {
                  return aa(this.Ut);
                }),
                (Pw.prototype.SetDampingRatio = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), la(e, t));
                }),
                (Pw.prototype.GetDampingRatio = function () {
                  return ya(this.Ut);
                }),
                (Pw.prototype.Dump = function () {
                  ba(this.Ut);
                }),
                (Pw.prototype.GetType = function () {
                  return da(this.Ut);
                }),
                (Pw.prototype.GetBodyA = function () {
                  return h(ma(this.Ut), l);
                }),
                (Pw.prototype.GetBodyB = function () {
                  return h(fa(this.Ut), l);
                }),
                (Pw.prototype.GetAnchorA = function () {
                  return h(ha(this.Ut), m);
                }),
                (Pw.prototype.GetAnchorB = function () {
                  return h(ga(this.Ut), m);
                }),
                (Pw.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Ua(e, t), m));
                }),
                (Pw.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Ja(e, t));
                }),
                (Pw.prototype.GetNext = function () {
                  return h(va(this.Ut), k);
                }),
                (Pw.prototype.GetUserData = function () {
                  return Sa(this.Ut);
                }),
                (Pw.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Aa(e, t));
                }),
                (Pw.prototype.IsActive = function () {
                  return !!Ba(this.Ut);
                }),
                (Pw.prototype.GetCollideConnected = function () {
                  return !!ja(this.Ut);
                }),
                (Pw.prototype.__destroy__ = function () {
                  Ga(this.Ut);
                }),
                (K.prototype = Object.create(e.prototype)),
                (K.prototype.constructor = K),
                (K.prototype.Vt = K),
                (K.Wt = {}),
                (i.b2JointEdge = K),
                (K.prototype.get_other = K.prototype.Lu =
                  function () {
                    return h(Ma(this.Ut), l);
                  }),
                (K.prototype.set_other = K.prototype.$u =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ia(e, t));
                  }),
                Object.defineProperty(K.prototype, "other", {
                  get: K.prototype.Lu,
                  set: K.prototype.$u,
                }),
                (K.prototype.get_joint = K.prototype.Nv =
                  function () {
                    return h(Wa(this.Ut), k);
                  }),
                (K.prototype.set_joint = K.prototype.Ax =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Oa(e, t));
                  }),
                Object.defineProperty(K.prototype, "joint", {
                  get: K.prototype.Nv,
                  set: K.prototype.Ax,
                }),
                (K.prototype.get_prev = K.prototype.Mu =
                  function () {
                    return h(Va(this.Ut), K);
                  }),
                (K.prototype.set_prev = K.prototype.av =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ea(e, t));
                  }),
                Object.defineProperty(K.prototype, "prev", {
                  get: K.prototype.Mu,
                  set: K.prototype.av,
                }),
                (K.prototype.get_next = K.prototype.Ju =
                  function () {
                    return h(qa(this.Ut), K);
                  }),
                (K.prototype.set_next = K.prototype.Yu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ka(e, t));
                  }),
                Object.defineProperty(K.prototype, "next", {
                  get: K.prototype.Ju,
                  set: K.prototype.Yu,
                }),
                (K.prototype.__destroy__ = function () {
                  Na(this.Ut);
                }),
                (L.prototype = Object.create(n.prototype)),
                (L.prototype.constructor = L),
                (L.prototype.Vt = L),
                (L.Wt = {}),
                (i.b2PulleyJointDef = L),
                (L.prototype.Initialize = function (t, e, n, o, i, _, r) {
                  var p = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    i && "object" == typeof i && (i = i.Ut),
                    _ && "object" == typeof _ && (_ = _.Ut),
                    r && "object" == typeof r && (r = r.Ut),
                    Ha(p, t, e, n, o, i, _, r));
                }),
                (L.prototype.get_groundAnchorA = L.prototype.Gv =
                  function () {
                    return h(za(this.Ut), m);
                  }),
                (L.prototype.set_groundAnchorA = L.prototype.tx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Qa(e, t));
                  }),
                Object.defineProperty(L.prototype, "groundAnchorA", {
                  get: L.prototype.Gv,
                  set: L.prototype.tx,
                }),
                (L.prototype.get_groundAnchorB = L.prototype.Hv =
                  function () {
                    return h(Za(this.Ut), m);
                  }),
                (L.prototype.set_groundAnchorB = L.prototype.ux =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ka(e, t));
                  }),
                Object.defineProperty(L.prototype, "groundAnchorB", {
                  get: L.prototype.Hv,
                  set: L.prototype.ux,
                }),
                (L.prototype.get_localAnchorA = L.prototype.gu =
                  function () {
                    return h($a(this.Ut), m);
                  }),
                (L.prototype.set_localAnchorA = L.prototype.iu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), tl(e, t));
                  }),
                Object.defineProperty(L.prototype, "localAnchorA", {
                  get: L.prototype.gu,
                  set: L.prototype.iu,
                }),
                (L.prototype.get_localAnchorB = L.prototype.hu =
                  function () {
                    return h(el(this.Ut), m);
                  }),
                (L.prototype.set_localAnchorB = L.prototype.ju =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), nl(e, t));
                  }),
                Object.defineProperty(L.prototype, "localAnchorB", {
                  get: L.prototype.hu,
                  set: L.prototype.ju,
                }),
                (L.prototype.get_lengthA = L.prototype.Sv =
                  function () {
                    return ol(this.Ut);
                  }),
                (L.prototype.set_lengthA = L.prototype.Fx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), il(e, t));
                  }),
                Object.defineProperty(L.prototype, "lengthA", {
                  get: L.prototype.Sv,
                  set: L.prototype.Fx,
                }),
                (L.prototype.get_lengthB = L.prototype.Tv =
                  function () {
                    return _l(this.Ut);
                  }),
                (L.prototype.set_lengthB = L.prototype.Gx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), rl(e, t));
                  }),
                Object.defineProperty(L.prototype, "lengthB", {
                  get: L.prototype.Tv,
                  set: L.prototype.Gx,
                }),
                (L.prototype.get_ratio = L.prototype.Nu =
                  function () {
                    return pl(this.Ut);
                  }),
                (L.prototype.set_ratio = L.prototype.bv =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), sl(e, t));
                  }),
                Object.defineProperty(L.prototype, "ratio", {
                  get: L.prototype.Nu,
                  set: L.prototype.bv,
                }),
                (L.prototype.get_type = L.prototype.Xt =
                  function () {
                    return cl(this.Ut);
                  }),
                (L.prototype.set_type = L.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ul(e, t));
                  }),
                Object.defineProperty(L.prototype, "type", {
                  get: L.prototype.Xt,
                  set: L.prototype.Zt,
                }),
                (L.prototype.get_userData = L.prototype.Yt =
                  function () {
                    return al(this.Ut);
                  }),
                (L.prototype.set_userData = L.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ll(e, t));
                  }),
                Object.defineProperty(L.prototype, "userData", {
                  get: L.prototype.Yt,
                  set: L.prototype.$t,
                }),
                (L.prototype.get_bodyA = L.prototype.au =
                  function () {
                    return h(yl(this.Ut), l);
                  }),
                (L.prototype.set_bodyA = L.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), bl(e, t));
                  }),
                Object.defineProperty(L.prototype, "bodyA", {
                  get: L.prototype.au,
                  set: L.prototype.du,
                }),
                (L.prototype.get_bodyB = L.prototype.bu =
                  function () {
                    return h(dl(this.Ut), l);
                  }),
                (L.prototype.set_bodyB = L.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ml(e, t));
                  }),
                Object.defineProperty(L.prototype, "bodyB", {
                  get: L.prototype.bu,
                  set: L.prototype.eu,
                }),
                (L.prototype.get_collideConnected = L.prototype.cu =
                  function () {
                    return !!fl(this.Ut);
                  }),
                (L.prototype.set_collideConnected = L.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), hl(e, t));
                  }),
                Object.defineProperty(L.prototype, "collideConnected", {
                  get: L.prototype.cu,
                  set: L.prototype.fu,
                }),
                (L.prototype.__destroy__ = function () {
                  gl(this.Ut);
                }),
                (M.prototype = Object.create(e.prototype)),
                (M.prototype.constructor = M),
                (M.prototype.Vt = M),
                (M.Wt = {}),
                (i.b2ManifoldPoint = M),
                (M.prototype.get_localPoint = M.prototype.Fu =
                  function () {
                    return h(wl(this.Ut), m);
                  }),
                (M.prototype.set_localPoint = M.prototype.Uu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Jl(e, t));
                  }),
                Object.defineProperty(M.prototype, "localPoint", {
                  get: M.prototype.Fu,
                  set: M.prototype.Uu,
                }),
                (M.prototype.get_normalImpulse = M.prototype.sw =
                  function () {
                    return Dl(this.Ut);
                  }),
                (M.prototype.set_normalImpulse = M.prototype.fy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), vl(e, t));
                  }),
                Object.defineProperty(M.prototype, "normalImpulse", {
                  get: M.prototype.sw,
                  set: M.prototype.fy,
                }),
                (M.prototype.get_tangentImpulse = M.prototype.Lw =
                  function () {
                    return Sl(this.Ut);
                  }),
                (M.prototype.set_tangentImpulse = M.prototype.yy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Al(e, t));
                  }),
                Object.defineProperty(M.prototype, "tangentImpulse", {
                  get: M.prototype.Lw,
                  set: M.prototype.yy,
                }),
                (M.prototype.get_id = M.prototype.Jv =
                  function () {
                    return h(xl(this.Ut), Kw);
                  }),
                (M.prototype.set_id = M.prototype.wx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Bl(e, t));
                  }),
                Object.defineProperty(M.prototype, "id", {
                  get: M.prototype.Jv,
                  set: M.prototype.wx,
                }),
                (M.prototype.__destroy__ = function () {
                  jl(this.Ut);
                }),
                (Qw.prototype = Object.create(e.prototype)),
                (Qw.prototype.constructor = Qw),
                (Qw.prototype.Vt = Qw),
                (Qw.Wt = {}),
                (i.b2Transform = Qw),
                (Qw.prototype.SetIdentity = function () {
                  Pl(this.Ut);
                }),
                (Qw.prototype.Set = Qw.prototype.Set =
                  function (t, e) {
                    var n = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut),
                      e && "object" == typeof e && (e = e.Ut),
                      Rl(n, t, e));
                  }),
                (Qw.prototype.get_p = Qw.prototype.tw =
                  function () {
                    return h(Ml(this.Ut), m);
                  }),
                (Qw.prototype.set_p = Qw.prototype.gy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Tl(e, t));
                  }),
                Object.defineProperty(Qw.prototype, "p", {
                  get: Qw.prototype.tw,
                  set: Qw.prototype.gy,
                }),
                (Qw.prototype.get_q = Qw.prototype.zw =
                  function () {
                    return h(Fl(this.Ut), Ew);
                  }),
                (Qw.prototype.set_q = Qw.prototype.my =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ll(e, t));
                  }),
                Object.defineProperty(Qw.prototype, "q", {
                  get: Qw.prototype.zw,
                  set: Qw.prototype.my,
                }),
                (Qw.prototype.__destroy__ = function () {
                  Il(this.Ut);
                }),
                (N.prototype = Object.create(p.prototype)),
                (N.prototype.constructor = N),
                (N.prototype.Vt = N),
                (N.Wt = {}),
                (i.b2ChainShape = N),
                (N.prototype.Clear = function () {
                  Ol(this.Ut);
                }),
                (N.prototype.CreateLoop = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    Vl(n, t, e));
                }),
                (N.prototype.CreateChain = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    El(n, t, e));
                }),
                (N.prototype.SetPrevVertex = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), ql(e, t));
                }),
                (N.prototype.SetNextVertex = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), kl(e, t));
                }),
                (N.prototype.GetChildEdge = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    Nl(n, t, e));
                }),
                (N.prototype.GetType = function () {
                  return Xl(this.Ut);
                }),
                (N.prototype.GetChildCount = function () {
                  return Hl(this.Ut);
                }),
                (N.prototype.TestPoint = function (t, e) {
                  var n = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    !!zl(n, t, e)
                  );
                }),
                (N.prototype.RayCast = function (t, e, n, o) {
                  var i = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    !!Ql(i, t, e, n, o)
                  );
                }),
                (N.prototype.ComputeAABB = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Zl(o, t, e, n));
                }),
                (N.prototype.ComputeMass = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    Yl(n, t, e));
                }),
                (N.prototype.get_m_vertices = N.prototype.mw =
                  function () {
                    return h(Kl(this.Ut), m);
                  }),
                (N.prototype.set_m_vertices = N.prototype.$x =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), $l(e, t));
                  }),
                Object.defineProperty(N.prototype, "m_vertices", {
                  get: N.prototype.mw,
                  set: N.prototype.$x,
                }),
                (N.prototype.get_m_count = N.prototype.Gu =
                  function () {
                    return ty(this.Ut);
                  }),
                (N.prototype.set_m_count = N.prototype.Vu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ey(e, t));
                  }),
                Object.defineProperty(N.prototype, "m_count", {
                  get: N.prototype.Gu,
                  set: N.prototype.Vu,
                }),
                (N.prototype.get_m_prevVertex = N.prototype.hw =
                  function () {
                    return h(ny(this.Ut), m);
                  }),
                (N.prototype.set_m_prevVertex = N.prototype.Vx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), oy(e, t));
                  }),
                Object.defineProperty(N.prototype, "m_prevVertex", {
                  get: N.prototype.hw,
                  set: N.prototype.Vx,
                }),
                (N.prototype.get_m_nextVertex = N.prototype.fw =
                  function () {
                    return h(iy(this.Ut), m);
                  }),
                (N.prototype.set_m_nextVertex = N.prototype.Tx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), _y(e, t));
                  }),
                Object.defineProperty(N.prototype, "m_nextVertex", {
                  get: N.prototype.fw,
                  set: N.prototype.Tx,
                }),
                (N.prototype.get_m_hasPrevVertex = N.prototype.cw =
                  function () {
                    return !!ry(this.Ut);
                  }),
                (N.prototype.set_m_hasPrevVertex = N.prototype.Qx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), py(e, t));
                  }),
                Object.defineProperty(N.prototype, "m_hasPrevVertex", {
                  get: N.prototype.cw,
                  set: N.prototype.Qx,
                }),
                (N.prototype.get_m_hasNextVertex = N.prototype.bw =
                  function () {
                    return !!sy(this.Ut);
                  }),
                (N.prototype.set_m_hasNextVertex = N.prototype.Px =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), cy(e, t));
                  }),
                Object.defineProperty(N.prototype, "m_hasNextVertex", {
                  get: N.prototype.bw,
                  set: N.prototype.Px,
                }),
                (N.prototype.get_m_type = N.prototype.lu =
                  function () {
                    return uy(this.Ut);
                  }),
                (N.prototype.set_m_type = N.prototype.nu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ay(e, t));
                  }),
                Object.defineProperty(N.prototype, "m_type", {
                  get: N.prototype.lu,
                  set: N.prototype.nu,
                }),
                (N.prototype.get_m_radius = N.prototype.ku =
                  function () {
                    return ly(this.Ut);
                  }),
                (N.prototype.set_m_radius = N.prototype.mu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), yy(e, t));
                  }),
                Object.defineProperty(N.prototype, "m_radius", {
                  get: N.prototype.ku,
                  set: N.prototype.mu,
                }),
                (N.prototype.__destroy__ = function () {
                  by(this.Ut);
                }),
                (O.prototype = Object.create(e.prototype)),
                (O.prototype.constructor = O),
                (O.prototype.Vt = O),
                (O.Wt = {}),
                (i.b2Color = O),
                (O.prototype.Set = O.prototype.Set =
                  function (t, e, n) {
                    var o = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut),
                      e && "object" == typeof e && (e = e.Ut),
                      n && "object" == typeof n && (n = n.Ut),
                      fy(o, t, e, n));
                  }),
                (O.prototype.get_r = O.prototype.Aw =
                  function () {
                    return hy(this.Ut);
                  }),
                (O.prototype.set_r = O.prototype.ny =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), gy(e, t));
                  }),
                Object.defineProperty(O.prototype, "r", {
                  get: O.prototype.Aw,
                  set: O.prototype.ny,
                }),
                (O.prototype.get_g = O.prototype.Ev =
                  function () {
                    return Uy(this.Ut);
                  }),
                (O.prototype.set_g = O.prototype.rx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), wy(e, t));
                  }),
                Object.defineProperty(O.prototype, "g", {
                  get: O.prototype.Ev,
                  set: O.prototype.rx,
                }),
                (O.prototype.get_b = O.prototype.nv =
                  function () {
                    return Jy(this.Ut);
                  }),
                (O.prototype.set_b = O.prototype.ax =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Dy(e, t));
                  }),
                Object.defineProperty(O.prototype, "b", {
                  get: O.prototype.nv,
                  set: O.prototype.ax,
                }),
                (O.prototype.__destroy__ = function () {
                  vy(this.Ut);
                }),
                (Rw.prototype = Object.create(k.prototype)),
                (Rw.prototype.constructor = Rw),
                (Rw.prototype.Vt = Rw),
                (Rw.Wt = {}),
                (i.b2RopeJoint = Rw),
                (Rw.prototype.GetLocalAnchorA = function () {
                  return h(Sy(this.Ut), m);
                }),
                (Rw.prototype.GetLocalAnchorB = function () {
                  return h(Ay(this.Ut), m);
                }),
                (Rw.prototype.SetMaxLength = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), xy(e, t));
                }),
                (Rw.prototype.GetMaxLength = function () {
                  return By(this.Ut);
                }),
                (Rw.prototype.GetLimitState = function () {
                  return jy(this.Ut);
                }),
                (Rw.prototype.GetType = function () {
                  return Gy(this.Ut);
                }),
                (Rw.prototype.GetBodyA = function () {
                  return h(Cy(this.Ut), l);
                }),
                (Rw.prototype.GetBodyB = function () {
                  return h(Py(this.Ut), l);
                }),
                (Rw.prototype.GetAnchorA = function () {
                  return h(Ry(this.Ut), m);
                }),
                (Rw.prototype.GetAnchorB = function () {
                  return h(My(this.Ut), m);
                }),
                (Rw.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Ty(e, t), m));
                }),
                (Rw.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Fy(e, t));
                }),
                (Rw.prototype.GetNext = function () {
                  return h(Ly(this.Ut), k);
                }),
                (Rw.prototype.GetUserData = function () {
                  return Iy(this.Ut);
                }),
                (Rw.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Wy(e, t));
                }),
                (Rw.prototype.IsActive = function () {
                  return !!Oy(this.Ut);
                }),
                (Rw.prototype.GetCollideConnected = function () {
                  return !!Vy(this.Ut);
                }),
                (Rw.prototype.__destroy__ = function () {
                  Ey(this.Ut);
                }),
                (Sw.prototype = Object.create(e.prototype)),
                (Sw.prototype.constructor = Sw),
                (Sw.prototype.Vt = Sw),
                (Sw.Wt = {}),
                (i.b2RayCastInput = Sw),
                (Sw.prototype.get_p1 = Sw.prototype.uw =
                  function () {
                    return h(qy(this.Ut), m);
                  }),
                (Sw.prototype.set_p1 = Sw.prototype.hy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ky(e, t));
                  }),
                Object.defineProperty(Sw.prototype, "p1", {
                  get: Sw.prototype.uw,
                  set: Sw.prototype.hy,
                }),
                (Sw.prototype.get_p2 = Sw.prototype.vw =
                  function () {
                    return h(Ny(this.Ut), m);
                  }),
                (Sw.prototype.set_p2 = Sw.prototype.iy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Xy(e, t));
                  }),
                Object.defineProperty(Sw.prototype, "p2", {
                  get: Sw.prototype.vw,
                  set: Sw.prototype.iy,
                }),
                (Sw.prototype.get_maxFraction = Sw.prototype.pw =
                  function () {
                    return Hy(this.Ut);
                  }),
                (Sw.prototype.set_maxFraction = Sw.prototype.cy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), zy(e, t));
                  }),
                Object.defineProperty(Sw.prototype, "maxFraction", {
                  get: Sw.prototype.pw,
                  set: Sw.prototype.cy,
                }),
                (Sw.prototype.__destroy__ = function () {
                  Qy(this.Ut);
                }),
                (P.prototype = Object.create(p.prototype)),
                (P.prototype.constructor = P),
                (P.prototype.Vt = P),
                (P.Wt = {}),
                (i.b2PolygonShape = P),
                (P.prototype.Set = function (...t) {
                  let e, n;
                  if ("number" == typeof t[0][0]) {
                    const o = t[0];
                    if (o.length % 2 != 0) throw new Error();
                    ((e = []), (n = o.length / 2));
                    for (let t = 0; t < n; t++) e.push(new m(o[2 * t], o[2 * t + 1]));
                  } else ((e = t[0]), (n = t[1] || e.length));
                  const o = i._malloc(8 * e.length);
                  let _ = 0;
                  const r = i.HEAPF32;
                  for (let t = 0; t < e.length; t++)
                    ((r[(o + _) >> 2] = e[t].get_x()),
                      (r[(o + (_ + 4)) >> 2] = e[t].get_y()),
                      (_ += 8));
                  const p = h(o, m);
                  return this._Set(p, n);
                }),
                (P.prototype._Set = P.prototype._Set =
                  function (t, e) {
                    var n = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut),
                      e && "object" == typeof e && (e = e.Ut),
                      Yy(n, t, e));
                  }),
                (P.prototype.SetAsBox = function (t, e, n, o) {
                  var i = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    void 0 === n
                      ? Ky(i, t, e)
                      : void 0 === o
                        ? _emscripten_bind_b2PolygonShape_SetAsBox_3(i, t, e, n)
                        : $y(i, t, e, n, o));
                }),
                (P.prototype.GetVertexCount = function () {
                  return tb(this.Ut);
                }),
                (P.prototype.GetVertex = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(eb(e, t), m));
                }),
                (P.prototype.GetType = function () {
                  return nb(this.Ut);
                }),
                (P.prototype.GetChildCount = function () {
                  return ob(this.Ut);
                }),
                (P.prototype.TestPoint = function (t, e) {
                  var n = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    !!ib(n, t, e)
                  );
                }),
                (P.prototype.RayCast = function (t, e, n, o) {
                  var i = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    !!_b(i, t, e, n, o)
                  );
                }),
                (P.prototype.ComputeAABB = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    rb(o, t, e, n));
                }),
                (P.prototype.ComputeMass = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    pb(n, t, e));
                }),
                (P.prototype.get_m_centroid = P.prototype.aw =
                  function () {
                    return h(sb(this.Ut), m);
                  }),
                (P.prototype.set_m_centroid = P.prototype.Ox =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), cb(e, t));
                  }),
                Object.defineProperty(P.prototype, "m_centroid", {
                  get: P.prototype.aw,
                  set: P.prototype.Ox,
                }),
                (P.prototype.get_m_count = P.prototype.Gu =
                  function () {
                    return ub(this.Ut);
                  }),
                (P.prototype.set_m_count = P.prototype.Vu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ab(e, t));
                  }),
                Object.defineProperty(P.prototype, "m_count", {
                  get: P.prototype.Gu,
                  set: P.prototype.Vu,
                }),
                (P.prototype.get_m_type = P.prototype.lu =
                  function () {
                    return lb(this.Ut);
                  }),
                (P.prototype.set_m_type = P.prototype.nu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), yb(e, t));
                  }),
                Object.defineProperty(P.prototype, "m_type", {
                  get: P.prototype.lu,
                  set: P.prototype.nu,
                }),
                (P.prototype.get_m_radius = P.prototype.ku =
                  function () {
                    return bb(this.Ut);
                  }),
                (P.prototype.set_m_radius = P.prototype.mu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), db(e, t));
                  }),
                Object.defineProperty(P.prototype, "m_radius", {
                  get: P.prototype.ku,
                  set: P.prototype.mu,
                }),
                (P.prototype.__destroy__ = function () {
                  mb(this.Ut);
                }),
                (Q.prototype = Object.create(p.prototype)),
                (Q.prototype.constructor = Q),
                (Q.prototype.Vt = Q),
                (Q.Wt = {}),
                (i.b2EdgeShape = Q),
                (Q.prototype.Set = Q.prototype.Set =
                  function (t, e) {
                    var n = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut),
                      e && "object" == typeof e && (e = e.Ut),
                      hb(n, t, e));
                  }),
                (Q.prototype.GetType = function () {
                  return gb(this.Ut);
                }),
                (Q.prototype.GetChildCount = function () {
                  return Ub(this.Ut);
                }),
                (Q.prototype.TestPoint = function (t, e) {
                  var n = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    !!wb(n, t, e)
                  );
                }),
                (Q.prototype.RayCast = function (t, e, n, o) {
                  var i = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    !!Jb(i, t, e, n, o)
                  );
                }),
                (Q.prototype.ComputeAABB = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Db(o, t, e, n));
                }),
                (Q.prototype.ComputeMass = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    vb(n, t, e));
                }),
                (Q.prototype.get_m_vertex1 = Q.prototype.jw =
                  function () {
                    return h(Sb(this.Ut), m);
                  }),
                (Q.prototype.set_m_vertex1 = Q.prototype.Xx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ab(e, t));
                  }),
                Object.defineProperty(Q.prototype, "m_vertex1", {
                  get: Q.prototype.jw,
                  set: Q.prototype.Xx,
                }),
                (Q.prototype.get_m_vertex2 = Q.prototype.kw =
                  function () {
                    return h(xb(this.Ut), m);
                  }),
                (Q.prototype.set_m_vertex2 = Q.prototype.Yx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Bb(e, t));
                  }),
                Object.defineProperty(Q.prototype, "m_vertex2", {
                  get: Q.prototype.kw,
                  set: Q.prototype.Yx,
                }),
                (Q.prototype.get_m_vertex0 = Q.prototype.iw =
                  function () {
                    return h(jb(this.Ut), m);
                  }),
                (Q.prototype.set_m_vertex0 = Q.prototype.Wx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Gb(e, t));
                  }),
                Object.defineProperty(Q.prototype, "m_vertex0", {
                  get: Q.prototype.iw,
                  set: Q.prototype.Wx,
                }),
                (Q.prototype.get_m_vertex3 = Q.prototype.lw =
                  function () {
                    return h(Cb(this.Ut), m);
                  }),
                (Q.prototype.set_m_vertex3 = Q.prototype.Zx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Pb(e, t));
                  }),
                Object.defineProperty(Q.prototype, "m_vertex3", {
                  get: Q.prototype.lw,
                  set: Q.prototype.Zx,
                }),
                (Q.prototype.get_m_hasVertex0 = Q.prototype.dw =
                  function () {
                    return !!Rb(this.Ut);
                  }),
                (Q.prototype.set_m_hasVertex0 = Q.prototype.Rx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Mb(e, t));
                  }),
                Object.defineProperty(Q.prototype, "m_hasVertex0", {
                  get: Q.prototype.dw,
                  set: Q.prototype.Rx,
                }),
                (Q.prototype.get_m_hasVertex3 = Q.prototype.ew =
                  function () {
                    return !!Tb(this.Ut);
                  }),
                (Q.prototype.set_m_hasVertex3 = Q.prototype.Sx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Fb(e, t));
                  }),
                Object.defineProperty(Q.prototype, "m_hasVertex3", {
                  get: Q.prototype.ew,
                  set: Q.prototype.Sx,
                }),
                (Q.prototype.get_m_type = Q.prototype.lu =
                  function () {
                    return Lb(this.Ut);
                  }),
                (Q.prototype.set_m_type = Q.prototype.nu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ib(e, t));
                  }),
                Object.defineProperty(Q.prototype, "m_type", {
                  get: Q.prototype.lu,
                  set: Q.prototype.nu,
                }),
                (Q.prototype.get_m_radius = Q.prototype.ku =
                  function () {
                    return Wb(this.Ut);
                  }),
                (Q.prototype.set_m_radius = Q.prototype.mu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ob(e, t));
                  }),
                Object.defineProperty(Q.prototype, "m_radius", {
                  get: Q.prototype.ku,
                  set: Q.prototype.mu,
                }),
                (Q.prototype.__destroy__ = function () {
                  Vb(this.Ut);
                }),
                (Tw.prototype = Object.create(yw.prototype)),
                (Tw.prototype.constructor = Tw),
                (Tw.prototype.Vt = Tw),
                (Tw.Wt = {}),
                (i.JSContactFilter = Tw),
                (Tw.prototype.ShouldCollide = function (t, e) {
                  var n = this.Ut;
                  return (
                    t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    !!qb(n, t, e)
                  );
                }),
                (Tw.prototype.__destroy__ = function () {
                  kb(this.Ut);
                }),
                (R.prototype = Object.create(n.prototype)),
                (R.prototype.constructor = R),
                (R.prototype.Vt = R),
                (R.Wt = {}),
                (i.b2RevoluteJointDef = R),
                (R.prototype.Initialize = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Xb(o, t, e, n));
                }),
                (R.prototype.get_localAnchorA = R.prototype.gu =
                  function () {
                    return h(Hb(this.Ut), m);
                  }),
                (R.prototype.set_localAnchorA = R.prototype.iu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), zb(e, t));
                  }),
                Object.defineProperty(R.prototype, "localAnchorA", {
                  get: R.prototype.gu,
                  set: R.prototype.iu,
                }),
                (R.prototype.get_localAnchorB = R.prototype.hu =
                  function () {
                    return h(Qb(this.Ut), m);
                  }),
                (R.prototype.set_localAnchorB = R.prototype.ju =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Zb(e, t));
                  }),
                Object.defineProperty(R.prototype, "localAnchorB", {
                  get: R.prototype.hu,
                  set: R.prototype.ju,
                }),
                (R.prototype.get_referenceAngle = R.prototype.vu =
                  function () {
                    return Yb(this.Ut);
                  }),
                (R.prototype.set_referenceAngle = R.prototype.zu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Kb(e, t));
                  }),
                Object.defineProperty(R.prototype, "referenceAngle", {
                  get: R.prototype.vu,
                  set: R.prototype.zu,
                }),
                (R.prototype.get_enableLimit = R.prototype.Bu =
                  function () {
                    return !!$b(this.Ut);
                  }),
                (R.prototype.set_enableLimit = R.prototype.Qu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), td(e, t));
                  }),
                Object.defineProperty(R.prototype, "enableLimit", {
                  get: R.prototype.Bu,
                  set: R.prototype.Qu,
                }),
                (R.prototype.get_lowerAngle = R.prototype.Yv =
                  function () {
                    return ed(this.Ut);
                  }),
                (R.prototype.set_lowerAngle = R.prototype.Lx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), nd(e, t));
                  }),
                Object.defineProperty(R.prototype, "lowerAngle", {
                  get: R.prototype.Yv,
                  set: R.prototype.Lx,
                }),
                (R.prototype.get_upperAngle = R.prototype.Pw =
                  function () {
                    return od(this.Ut);
                  }),
                (R.prototype.set_upperAngle = R.prototype.Cy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), id(e, t));
                  }),
                Object.defineProperty(R.prototype, "upperAngle", {
                  get: R.prototype.Pw,
                  set: R.prototype.Cy,
                }),
                (R.prototype.get_enableMotor = R.prototype.su =
                  function () {
                    return !!_d(this.Ut);
                  }),
                (R.prototype.set_enableMotor = R.prototype.wu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), rd(e, t));
                  }),
                Object.defineProperty(R.prototype, "enableMotor", {
                  get: R.prototype.su,
                  set: R.prototype.wu,
                }),
                (R.prototype.get_motorSpeed = R.prototype.uu =
                  function () {
                    return pd(this.Ut);
                  }),
                (R.prototype.set_motorSpeed = R.prototype.yu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), sd(e, t));
                  }),
                Object.defineProperty(R.prototype, "motorSpeed", {
                  get: R.prototype.uu,
                  set: R.prototype.yu,
                }),
                (R.prototype.get_maxMotorTorque = R.prototype.Hu =
                  function () {
                    return cd(this.Ut);
                  }),
                (R.prototype.set_maxMotorTorque = R.prototype.Wu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ud(e, t));
                  }),
                Object.defineProperty(R.prototype, "maxMotorTorque", {
                  get: R.prototype.Hu,
                  set: R.prototype.Wu,
                }),
                (R.prototype.get_type = R.prototype.Xt =
                  function () {
                    return ad(this.Ut);
                  }),
                (R.prototype.set_type = R.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ld(e, t));
                  }),
                Object.defineProperty(R.prototype, "type", {
                  get: R.prototype.Xt,
                  set: R.prototype.Zt,
                }),
                (R.prototype.get_userData = R.prototype.Yt =
                  function () {
                    return yd(this.Ut);
                  }),
                (R.prototype.set_userData = R.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), bd(e, t));
                  }),
                Object.defineProperty(R.prototype, "userData", {
                  get: R.prototype.Yt,
                  set: R.prototype.$t,
                }),
                (R.prototype.get_bodyA = R.prototype.au =
                  function () {
                    return h(dd(this.Ut), l);
                  }),
                (R.prototype.set_bodyA = R.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), md(e, t));
                  }),
                Object.defineProperty(R.prototype, "bodyA", {
                  get: R.prototype.au,
                  set: R.prototype.du,
                }),
                (R.prototype.get_bodyB = R.prototype.bu =
                  function () {
                    return h(fd(this.Ut), l);
                  }),
                (R.prototype.set_bodyB = R.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), hd(e, t));
                  }),
                Object.defineProperty(R.prototype, "bodyB", {
                  get: R.prototype.bu,
                  set: R.prototype.eu,
                }),
                (R.prototype.get_collideConnected = R.prototype.cu =
                  function () {
                    return !!gd(this.Ut);
                  }),
                (R.prototype.set_collideConnected = R.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Ud(e, t));
                  }),
                Object.defineProperty(R.prototype, "collideConnected", {
                  get: R.prototype.cu,
                  set: R.prototype.fu,
                }),
                (R.prototype.__destroy__ = function () {
                  wd(this.Ut);
                }),
                (Uw.prototype = Object.create(uw.prototype)),
                (Uw.prototype.constructor = Uw),
                (Uw.prototype.Vt = Uw),
                (Uw.Wt = {}),
                (i.JSDraw = Uw),
                (Uw.prototype.DrawPolygon = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Dd(o, t, e, n));
                }),
                (Uw.prototype.DrawSolidPolygon = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    vd(o, t, e, n));
                }),
                (Uw.prototype.DrawCircle = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Sd(o, t, e, n));
                }),
                (Uw.prototype.DrawSolidCircle = function (t, e, n, o) {
                  var i = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    Ad(i, t, e, n, o));
                }),
                (Uw.prototype.DrawSegment = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    xd(o, t, e, n));
                }),
                (Uw.prototype.DrawTransform = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Bd(e, t));
                }),
                (Uw.prototype.__destroy__ = function () {
                  jd(this.Ut);
                }),
                (S.prototype = Object.create(k.prototype)),
                (S.prototype.constructor = S),
                (S.prototype.Vt = S),
                (S.Wt = {}),
                (i.b2WheelJoint = S),
                (S.prototype.GetLocalAnchorA = function () {
                  return h(Gd(this.Ut), m);
                }),
                (S.prototype.GetLocalAnchorB = function () {
                  return h(Cd(this.Ut), m);
                }),
                (S.prototype.GetLocalAxisA = function () {
                  return h(Pd(this.Ut), m);
                }),
                (S.prototype.GetJointTranslation = function () {
                  return Rd(this.Ut);
                }),
                (S.prototype.GetJointSpeed = function () {
                  return Md(this.Ut);
                }),
                (S.prototype.IsMotorEnabled = function () {
                  return !!Td(this.Ut);
                }),
                (S.prototype.EnableMotor = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Fd(e, t));
                }),
                (S.prototype.SetMotorSpeed = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ld(e, t));
                }),
                (S.prototype.GetMotorSpeed = function () {
                  return Id(this.Ut);
                }),
                (S.prototype.SetMaxMotorTorque = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Wd(e, t));
                }),
                (S.prototype.GetMaxMotorTorque = function () {
                  return Od(this.Ut);
                }),
                (S.prototype.GetMotorTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Vd(e, t));
                }),
                (S.prototype.SetSpringFrequencyHz = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ed(e, t));
                }),
                (S.prototype.GetSpringFrequencyHz = function () {
                  return qd(this.Ut);
                }),
                (S.prototype.SetSpringDampingRatio = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), kd(e, t));
                }),
                (S.prototype.GetSpringDampingRatio = function () {
                  return Nd(this.Ut);
                }),
                (S.prototype.GetType = function () {
                  return Xd(this.Ut);
                }),
                (S.prototype.GetBodyA = function () {
                  return h(Hd(this.Ut), l);
                }),
                (S.prototype.GetBodyB = function () {
                  return h(zd(this.Ut), l);
                }),
                (S.prototype.GetAnchorA = function () {
                  return h(Qd(this.Ut), m);
                }),
                (S.prototype.GetAnchorB = function () {
                  return h(Zd(this.Ut), m);
                }),
                (S.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Yd(e, t), m));
                }),
                (S.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Kd(e, t));
                }),
                (S.prototype.GetNext = function () {
                  return h($d(this.Ut), k);
                }),
                (S.prototype.GetUserData = function () {
                  return tm(this.Ut);
                }),
                (S.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), em(e, t));
                }),
                (S.prototype.IsActive = function () {
                  return !!nm(this.Ut);
                }),
                (S.prototype.GetCollideConnected = function () {
                  return !!om(this.Ut);
                }),
                (S.prototype.__destroy__ = function () {
                  im(this.Ut);
                }),
                (Vw.prototype = Object.create(k.prototype)),
                (Vw.prototype.constructor = Vw),
                (Vw.prototype.Vt = Vw),
                (Vw.Wt = {}),
                (i.b2PulleyJoint = Vw),
                (Vw.prototype.GetGroundAnchorA = function () {
                  return h(_m(this.Ut), m);
                }),
                (Vw.prototype.GetGroundAnchorB = function () {
                  return h(rm(this.Ut), m);
                }),
                (Vw.prototype.GetLengthA = function () {
                  return pm(this.Ut);
                }),
                (Vw.prototype.GetLengthB = function () {
                  return sm(this.Ut);
                }),
                (Vw.prototype.GetRatio = function () {
                  return cm(this.Ut);
                }),
                (Vw.prototype.GetCurrentLengthA = function () {
                  return um(this.Ut);
                }),
                (Vw.prototype.GetCurrentLengthB = function () {
                  return am(this.Ut);
                }),
                (Vw.prototype.GetType = function () {
                  return lm(this.Ut);
                }),
                (Vw.prototype.GetBodyA = function () {
                  return h(ym(this.Ut), l);
                }),
                (Vw.prototype.GetBodyB = function () {
                  return h(bm(this.Ut), l);
                }),
                (Vw.prototype.GetAnchorA = function () {
                  return h(dm(this.Ut), m);
                }),
                (Vw.prototype.GetAnchorB = function () {
                  return h(mm(this.Ut), m);
                }),
                (Vw.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(fm(e, t), m));
                }),
                (Vw.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), hm(e, t));
                }),
                (Vw.prototype.GetNext = function () {
                  return h(gm(this.Ut), k);
                }),
                (Vw.prototype.GetUserData = function () {
                  return Um(this.Ut);
                }),
                (Vw.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), wm(e, t));
                }),
                (Vw.prototype.IsActive = function () {
                  return !!Jm(this.Ut);
                }),
                (Vw.prototype.GetCollideConnected = function () {
                  return !!Dm(this.Ut);
                }),
                (Vw.prototype.__destroy__ = function () {
                  vm(this.Ut);
                }),
                (T.prototype = Object.create(n.prototype)),
                (T.prototype.constructor = T),
                (T.prototype.Vt = T),
                (T.Wt = {}),
                (i.b2MouseJointDef = T),
                (T.prototype.get_target = T.prototype.Mw =
                  function () {
                    return h(Am(this.Ut), m);
                  }),
                (T.prototype.set_target = T.prototype.zy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), xm(e, t));
                  }),
                Object.defineProperty(T.prototype, "target", {
                  get: T.prototype.Mw,
                  set: T.prototype.zy,
                }),
                (T.prototype.get_maxForce = T.prototype.tu =
                  function () {
                    return Bm(this.Ut);
                  }),
                (T.prototype.set_maxForce = T.prototype.xu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), jm(e, t));
                  }),
                Object.defineProperty(T.prototype, "maxForce", {
                  get: T.prototype.tu,
                  set: T.prototype.xu,
                }),
                (T.prototype.get_frequencyHz = T.prototype.pu =
                  function () {
                    return Gm(this.Ut);
                  }),
                (T.prototype.set_frequencyHz = T.prototype.ru =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Cm(e, t));
                  }),
                Object.defineProperty(T.prototype, "frequencyHz", {
                  get: T.prototype.pu,
                  set: T.prototype.ru,
                }),
                (T.prototype.get_dampingRatio = T.prototype.ou =
                  function () {
                    return Pm(this.Ut);
                  }),
                (T.prototype.set_dampingRatio = T.prototype.qu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Rm(e, t));
                  }),
                Object.defineProperty(T.prototype, "dampingRatio", {
                  get: T.prototype.ou,
                  set: T.prototype.qu,
                }),
                (T.prototype.get_type = T.prototype.Xt =
                  function () {
                    return Mm(this.Ut);
                  }),
                (T.prototype.set_type = T.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Tm(e, t));
                  }),
                Object.defineProperty(T.prototype, "type", {
                  get: T.prototype.Xt,
                  set: T.prototype.Zt,
                }),
                (T.prototype.get_userData = T.prototype.Yt =
                  function () {
                    return Fm(this.Ut);
                  }),
                (T.prototype.set_userData = T.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Lm(e, t));
                  }),
                Object.defineProperty(T.prototype, "userData", {
                  get: T.prototype.Yt,
                  set: T.prototype.$t,
                }),
                (T.prototype.get_bodyA = T.prototype.au =
                  function () {
                    return h(Im(this.Ut), l);
                  }),
                (T.prototype.set_bodyA = T.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Wm(e, t));
                  }),
                Object.defineProperty(T.prototype, "bodyA", {
                  get: T.prototype.au,
                  set: T.prototype.du,
                }),
                (T.prototype.get_bodyB = T.prototype.bu =
                  function () {
                    return h(Om(this.Ut), l);
                  }),
                (T.prototype.set_bodyB = T.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Vm(e, t));
                  }),
                Object.defineProperty(T.prototype, "bodyB", {
                  get: T.prototype.bu,
                  set: T.prototype.eu,
                }),
                (T.prototype.get_collideConnected = T.prototype.cu =
                  function () {
                    return !!Em(this.Ut);
                  }),
                (T.prototype.set_collideConnected = T.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), qm(e, t));
                  }),
                Object.defineProperty(T.prototype, "collideConnected", {
                  get: T.prototype.cu,
                  set: T.prototype.fu,
                }),
                (T.prototype.__destroy__ = function () {
                  km(this.Ut);
                }),
                (Iw.prototype = Object.create(e.prototype)),
                (Iw.prototype.constructor = Iw),
                (Iw.prototype.Vt = Iw),
                (Iw.Wt = {}),
                (i.b2Contact = Iw),
                (Iw.prototype.GetManifold = function () {
                  return h(Nm(this.Ut), C);
                }),
                (Iw.prototype.GetWorldManifold = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Xm(e, t));
                }),
                (Iw.prototype.IsTouching = function () {
                  return !!Hm(this.Ut);
                }),
                (Iw.prototype.SetEnabled = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), zm(e, t));
                }),
                (Iw.prototype.IsEnabled = function () {
                  return !!Qm(this.Ut);
                }),
                (Iw.prototype.GetNext = function () {
                  return h(Zm(this.Ut), Iw);
                }),
                (Iw.prototype.GetFixtureA = function () {
                  return h(Ym(this.Ut), t);
                }),
                (Iw.prototype.GetChildIndexA = function () {
                  return Km(this.Ut);
                }),
                (Iw.prototype.GetFixtureB = function () {
                  return h($m(this.Ut), t);
                }),
                (Iw.prototype.GetChildIndexB = function () {
                  return tf(this.Ut);
                }),
                (Iw.prototype.SetFriction = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), ef(e, t));
                }),
                (Iw.prototype.GetFriction = function () {
                  return nf(this.Ut);
                }),
                (Iw.prototype.ResetFriction = function () {
                  of(this.Ut);
                }),
                (Iw.prototype.SetRestitution = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), _f(e, t));
                }),
                (Iw.prototype.GetRestitution = function () {
                  return rf(this.Ut);
                }),
                (Iw.prototype.ResetRestitution = function () {
                  pf(this.Ut);
                }),
                (Iw.prototype.SetTangentSpeed = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), sf(e, t));
                }),
                (Iw.prototype.GetTangentSpeed = function () {
                  return cf(this.Ut);
                }),
                (U.prototype = Object.create(n.prototype)),
                (U.prototype.constructor = U),
                (U.prototype.Vt = U),
                (U.Wt = {}),
                (i.b2DistanceJointDef = U),
                (U.prototype.Initialize = function (t, e, n, o) {
                  var i = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    o && "object" == typeof o && (o = o.Ut),
                    af(i, t, e, n, o));
                }),
                (U.prototype.get_localAnchorA = U.prototype.gu =
                  function () {
                    return h(lf(this.Ut), m);
                  }),
                (U.prototype.set_localAnchorA = U.prototype.iu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), yf(e, t));
                  }),
                Object.defineProperty(U.prototype, "localAnchorA", {
                  get: U.prototype.gu,
                  set: U.prototype.iu,
                }),
                (U.prototype.get_localAnchorB = U.prototype.hu =
                  function () {
                    return h(bf(this.Ut), m);
                  }),
                (U.prototype.set_localAnchorB = U.prototype.ju =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), df(e, t));
                  }),
                Object.defineProperty(U.prototype, "localAnchorB", {
                  get: U.prototype.hu,
                  set: U.prototype.ju,
                }),
                (U.prototype.get_length = U.prototype.Rv =
                  function () {
                    return mf(this.Ut);
                  }),
                (U.prototype.set_length = U.prototype.Ex =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ff(e, t));
                  }),
                Object.defineProperty(U.prototype, "length", {
                  get: U.prototype.Rv,
                  set: U.prototype.Ex,
                }),
                (U.prototype.get_frequencyHz = U.prototype.pu =
                  function () {
                    return hf(this.Ut);
                  }),
                (U.prototype.set_frequencyHz = U.prototype.ru =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), gf(e, t));
                  }),
                Object.defineProperty(U.prototype, "frequencyHz", {
                  get: U.prototype.pu,
                  set: U.prototype.ru,
                }),
                (U.prototype.get_dampingRatio = U.prototype.ou =
                  function () {
                    return Uf(this.Ut);
                  }),
                (U.prototype.set_dampingRatio = U.prototype.qu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), wf(e, t));
                  }),
                Object.defineProperty(U.prototype, "dampingRatio", {
                  get: U.prototype.ou,
                  set: U.prototype.qu,
                }),
                (U.prototype.get_type = U.prototype.Xt =
                  function () {
                    return Jf(this.Ut);
                  }),
                (U.prototype.set_type = U.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Df(e, t));
                  }),
                Object.defineProperty(U.prototype, "type", {
                  get: U.prototype.Xt,
                  set: U.prototype.Zt,
                }),
                (U.prototype.get_userData = U.prototype.Yt =
                  function () {
                    return vf(this.Ut);
                  }),
                (U.prototype.set_userData = U.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Sf(e, t));
                  }),
                Object.defineProperty(U.prototype, "userData", {
                  get: U.prototype.Yt,
                  set: U.prototype.$t,
                }),
                (U.prototype.get_bodyA = U.prototype.au =
                  function () {
                    return h(Af(this.Ut), l);
                  }),
                (U.prototype.set_bodyA = U.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), xf(e, t));
                  }),
                Object.defineProperty(U.prototype, "bodyA", {
                  get: U.prototype.au,
                  set: U.prototype.du,
                }),
                (U.prototype.get_bodyB = U.prototype.bu =
                  function () {
                    return h(Bf(this.Ut), l);
                  }),
                (U.prototype.set_bodyB = U.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), jf(e, t));
                  }),
                Object.defineProperty(U.prototype, "bodyB", {
                  get: U.prototype.bu,
                  set: U.prototype.eu,
                }),
                (U.prototype.get_collideConnected = U.prototype.cu =
                  function () {
                    return !!Gf(this.Ut);
                  }),
                (U.prototype.set_collideConnected = U.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Cf(e, t));
                  }),
                Object.defineProperty(U.prototype, "collideConnected", {
                  get: U.prototype.cu,
                  set: U.prototype.fu,
                }),
                (U.prototype.__destroy__ = function () {
                  Pf(this.Ut);
                }),
                (l.prototype = Object.create(e.prototype)),
                (l.prototype.constructor = l),
                (l.prototype.Vt = l),
                (l.Wt = {}),
                (i.b2Body = l),
                (l.prototype.CreateFixture = function (e, n) {
                  var o = this.Ut;
                  return (
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    h(void 0 === n ? Rf(o, e) : Mf(o, e, n), t)
                  );
                }),
                (l.prototype.DestroyFixture = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Tf(e, t));
                }),
                (l.prototype.SetTransform = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    Ff(n, t, e));
                }),
                (l.prototype.GetTransform = function () {
                  return h(Lf(this.Ut), Qw);
                }),
                (l.prototype.GetPosition = function () {
                  return h(If(this.Ut), m);
                }),
                (l.prototype.GetAngle = function () {
                  return Wf(this.Ut);
                }),
                (l.prototype.GetWorldCenter = function () {
                  return h(Of(this.Ut), m);
                }),
                (l.prototype.GetLocalCenter = function () {
                  return h(Vf(this.Ut), m);
                }),
                (l.prototype.SetLinearVelocity = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ef(e, t));
                }),
                (l.prototype.GetLinearVelocity = function () {
                  return h(qf(this.Ut), m);
                }),
                (l.prototype.SetAngularVelocity = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), kf(e, t));
                }),
                (l.prototype.GetAngularVelocity = function () {
                  return Nf(this.Ut);
                }),
                (l.prototype.ApplyForce = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Xf(o, t, e, n));
                }),
                (l.prototype.ApplyForceToCenter = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    Hf(n, t, e));
                }),
                (l.prototype.ApplyTorque = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    zf(n, t, e));
                }),
                (l.prototype.ApplyLinearImpulse = function (t, e, n) {
                  var o = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    n && "object" == typeof n && (n = n.Ut),
                    Qf(o, t, e, n));
                }),
                (l.prototype.ApplyAngularImpulse = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    Zf(n, t, e));
                }),
                (l.prototype.GetMass = function () {
                  return Yf(this.Ut);
                }),
                (l.prototype.GetInertia = function () {
                  return Kf(this.Ut);
                }),
                (l.prototype.GetMassData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), $f(e, t));
                }),
                (l.prototype.SetMassData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), th(e, t));
                }),
                (l.prototype.ResetMassData = function () {
                  eh(this.Ut);
                }),
                (l.prototype.GetWorldPoint = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(nh(e, t), m));
                }),
                (l.prototype.GetWorldVector = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(oh(e, t), m));
                }),
                (l.prototype.GetLocalPoint = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(ih(e, t), m));
                }),
                (l.prototype.GetLocalVector = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(_h(e, t), m));
                }),
                (l.prototype.GetLinearVelocityFromWorldPoint = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(rh(e, t), m));
                }),
                (l.prototype.GetLinearVelocityFromLocalPoint = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(ph(e, t), m));
                }),
                (l.prototype.GetLinearDamping = function () {
                  return sh(this.Ut);
                }),
                (l.prototype.SetLinearDamping = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), ch(e, t));
                }),
                (l.prototype.GetAngularDamping = function () {
                  return uh(this.Ut);
                }),
                (l.prototype.SetAngularDamping = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), ah(e, t));
                }),
                (l.prototype.GetGravityScale = function () {
                  return lh(this.Ut);
                }),
                (l.prototype.SetGravityScale = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), yh(e, t));
                }),
                (l.prototype.SetType = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), bh(e, t));
                }),
                (l.prototype.GetType = function () {
                  return dh(this.Ut);
                }),
                (l.prototype.SetBullet = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), mh(e, t));
                }),
                (l.prototype.IsBullet = function () {
                  return !!fh(this.Ut);
                }),
                (l.prototype.SetSleepingAllowed = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), hh(e, t));
                }),
                (l.prototype.IsSleepingAllowed = function () {
                  return !!gh(this.Ut);
                }),
                (l.prototype.SetAwake = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Uh(e, t));
                }),
                (l.prototype.IsAwake = function () {
                  return !!wh(this.Ut);
                }),
                (l.prototype.SetActive = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Jh(e, t));
                }),
                (l.prototype.IsActive = function () {
                  return !!Dh(this.Ut);
                }),
                (l.prototype.SetFixedRotation = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), vh(e, t));
                }),
                (l.prototype.IsFixedRotation = function () {
                  return !!Sh(this.Ut);
                }),
                (l.prototype.GetFixtureList = function () {
                  return h(Ah(this.Ut), t);
                }),
                (l.prototype.GetJointList = function () {
                  return h(xh(this.Ut), K);
                }),
                (l.prototype.GetContactList = function () {
                  return h(Bh(this.Ut), V);
                }),
                (l.prototype.GetNext = function () {
                  return h(jh(this.Ut), l);
                }),
                (l.prototype.GetUserData = function () {
                  return Gh(this.Ut);
                }),
                (l.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ch(e, t));
                }),
                (l.prototype.GetWorld = function () {
                  return h(Ph(this.Ut), F);
                }),
                (l.prototype.Dump = function () {
                  Rh(this.Ut);
                }),
                (Ww.prototype = Object.create(k.prototype)),
                (Ww.prototype.constructor = Ww),
                (Ww.prototype.Vt = Ww),
                (Ww.Wt = {}),
                (i.b2FrictionJoint = Ww),
                (Ww.prototype.GetLocalAnchorA = function () {
                  return h(Mh(this.Ut), m);
                }),
                (Ww.prototype.GetLocalAnchorB = function () {
                  return h(Th(this.Ut), m);
                }),
                (Ww.prototype.SetMaxForce = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Fh(e, t));
                }),
                (Ww.prototype.GetMaxForce = function () {
                  return Lh(this.Ut);
                }),
                (Ww.prototype.SetMaxTorque = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Ih(e, t));
                }),
                (Ww.prototype.GetMaxTorque = function () {
                  return Wh(this.Ut);
                }),
                (Ww.prototype.GetType = function () {
                  return Oh(this.Ut);
                }),
                (Ww.prototype.GetBodyA = function () {
                  return h(Vh(this.Ut), l);
                }),
                (Ww.prototype.GetBodyB = function () {
                  return h(Eh(this.Ut), l);
                }),
                (Ww.prototype.GetAnchorA = function () {
                  return h(qh(this.Ut), m);
                }),
                (Ww.prototype.GetAnchorB = function () {
                  return h(kh(this.Ut), m);
                }),
                (Ww.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Nh(e, t), m));
                }),
                (Ww.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Xh(e, t));
                }),
                (Ww.prototype.GetNext = function () {
                  return h(Hh(this.Ut), k);
                }),
                (Ww.prototype.GetUserData = function () {
                  return zh(this.Ut);
                }),
                (Ww.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Qh(e, t));
                }),
                (Ww.prototype.IsActive = function () {
                  return !!Zh(this.Ut);
                }),
                (Ww.prototype.GetCollideConnected = function () {
                  return !!Yh(this.Ut);
                }),
                (Ww.prototype.__destroy__ = function () {
                  Kh(this.Ut);
                }),
                (Xw.prototype = Object.create(e.prototype)),
                (Xw.prototype.constructor = Xw),
                (Xw.prototype.Vt = Xw),
                (Xw.Wt = {}),
                (i.b2DestructionListener = Xw),
                (Xw.prototype.__destroy__ = function () {
                  $h(this.Ut);
                }),
                (W.prototype = Object.create(n.prototype)),
                (W.prototype.constructor = W),
                (W.prototype.Vt = W),
                (W.Wt = {}),
                (i.b2GearJointDef = W),
                (W.prototype.get_joint1 = W.prototype.Ov =
                  function () {
                    return h(eg(this.Ut), k);
                  }),
                (W.prototype.set_joint1 = W.prototype.Bx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ng(e, t));
                  }),
                Object.defineProperty(W.prototype, "joint1", {
                  get: W.prototype.Ov,
                  set: W.prototype.Bx,
                }),
                (W.prototype.get_joint2 = W.prototype.Pv =
                  function () {
                    return h(og(this.Ut), k);
                  }),
                (W.prototype.set_joint2 = W.prototype.Cx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ig(e, t));
                  }),
                Object.defineProperty(W.prototype, "joint2", {
                  get: W.prototype.Pv,
                  set: W.prototype.Cx,
                }),
                (W.prototype.get_ratio = W.prototype.Nu =
                  function () {
                    return _g(this.Ut);
                  }),
                (W.prototype.set_ratio = W.prototype.bv =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), rg(e, t));
                  }),
                Object.defineProperty(W.prototype, "ratio", {
                  get: W.prototype.Nu,
                  set: W.prototype.bv,
                }),
                (W.prototype.get_type = W.prototype.Xt =
                  function () {
                    return pg(this.Ut);
                  }),
                (W.prototype.set_type = W.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), sg(e, t));
                  }),
                Object.defineProperty(W.prototype, "type", {
                  get: W.prototype.Xt,
                  set: W.prototype.Zt,
                }),
                (W.prototype.get_userData = W.prototype.Yt =
                  function () {
                    return cg(this.Ut);
                  }),
                (W.prototype.set_userData = W.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), ug(e, t));
                  }),
                Object.defineProperty(W.prototype, "userData", {
                  get: W.prototype.Yt,
                  set: W.prototype.$t,
                }),
                (W.prototype.get_bodyA = W.prototype.au =
                  function () {
                    return h(ag(this.Ut), l);
                  }),
                (W.prototype.set_bodyA = W.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), lg(e, t));
                  }),
                Object.defineProperty(W.prototype, "bodyA", {
                  get: W.prototype.au,
                  set: W.prototype.du,
                }),
                (W.prototype.get_bodyB = W.prototype.bu =
                  function () {
                    return h(yg(this.Ut), l);
                  }),
                (W.prototype.set_bodyB = W.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), bg(e, t));
                  }),
                Object.defineProperty(W.prototype, "bodyB", {
                  get: W.prototype.bu,
                  set: W.prototype.eu,
                }),
                (W.prototype.get_collideConnected = W.prototype.cu =
                  function () {
                    return !!dg(this.Ut);
                  }),
                (W.prototype.set_collideConnected = W.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), mg(e, t));
                  }),
                Object.defineProperty(W.prototype, "collideConnected", {
                  get: W.prototype.cu,
                  set: W.prototype.fu,
                }),
                (W.prototype.__destroy__ = function () {
                  fg(this.Ut);
                }),
                (X.prototype = Object.create(k.prototype)),
                (X.prototype.constructor = X),
                (X.prototype.Vt = X),
                (X.Wt = {}),
                (i.b2RevoluteJoint = X),
                (X.prototype.GetLocalAnchorA = function () {
                  return h(hg(this.Ut), m);
                }),
                (X.prototype.GetLocalAnchorB = function () {
                  return h(gg(this.Ut), m);
                }),
                (X.prototype.GetReferenceAngle = function () {
                  return Ug(this.Ut);
                }),
                (X.prototype.GetJointAngle = function () {
                  return wg(this.Ut);
                }),
                (X.prototype.GetJointSpeed = function () {
                  return Jg(this.Ut);
                }),
                (X.prototype.IsLimitEnabled = function () {
                  return !!Dg(this.Ut);
                }),
                (X.prototype.EnableLimit = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), vg(e, t));
                }),
                (X.prototype.GetLowerLimit = function () {
                  return Sg(this.Ut);
                }),
                (X.prototype.GetUpperLimit = function () {
                  return Ag(this.Ut);
                }),
                (X.prototype.SetLimits = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    xg(n, t, e));
                }),
                (X.prototype.IsMotorEnabled = function () {
                  return !!Bg(this.Ut);
                }),
                (X.prototype.EnableMotor = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), jg(e, t));
                }),
                (X.prototype.SetMotorSpeed = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Gg(e, t));
                }),
                (X.prototype.GetMotorSpeed = function () {
                  return Cg(this.Ut);
                }),
                (X.prototype.SetMaxMotorTorque = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), Pg(e, t));
                }),
                (X.prototype.GetMaxMotorTorque = function () {
                  return Rg(this.Ut);
                }),
                (X.prototype.GetMotorTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Mg(e, t));
                }),
                (X.prototype.GetType = function () {
                  return Tg(this.Ut);
                }),
                (X.prototype.GetBodyA = function () {
                  return h(Fg(this.Ut), l);
                }),
                (X.prototype.GetBodyB = function () {
                  return h(Lg(this.Ut), l);
                }),
                (X.prototype.GetAnchorA = function () {
                  return h(Ig(this.Ut), m);
                }),
                (X.prototype.GetAnchorB = function () {
                  return h(Wg(this.Ut), m);
                }),
                (X.prototype.GetReactionForce = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), h(Og(e, t), m));
                }),
                (X.prototype.GetReactionTorque = function (t) {
                  var e = this.Ut;
                  return (t && "object" == typeof t && (t = t.Ut), Vg(e, t));
                }),
                (X.prototype.GetNext = function () {
                  return h(Eg(this.Ut), k);
                }),
                (X.prototype.GetUserData = function () {
                  return qg(this.Ut);
                }),
                (X.prototype.SetUserData = function (t) {
                  var e = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut), kg(e, t));
                }),
                (X.prototype.IsActive = function () {
                  return !!Ng(this.Ut);
                }),
                (X.prototype.GetCollideConnected = function () {
                  return !!Xg(this.Ut);
                }),
                (X.prototype.__destroy__ = function () {
                  Hg(this.Ut);
                }),
                (V.prototype = Object.create(e.prototype)),
                (V.prototype.constructor = V),
                (V.prototype.Vt = V),
                (V.Wt = {}),
                (i.b2ContactEdge = V),
                (V.prototype.get_other = V.prototype.Lu =
                  function () {
                    return h(Qg(this.Ut), l);
                  }),
                (V.prototype.set_other = V.prototype.$u =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Zg(e, t));
                  }),
                Object.defineProperty(V.prototype, "other", {
                  get: V.prototype.Lu,
                  set: V.prototype.$u,
                }),
                (V.prototype.get_contact = V.prototype.vv =
                  function () {
                    return h(Yg(this.Ut), Iw);
                  }),
                (V.prototype.set_contact = V.prototype.ix =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), Kg(e, t));
                  }),
                Object.defineProperty(V.prototype, "contact", {
                  get: V.prototype.vv,
                  set: V.prototype.ix,
                }),
                (V.prototype.get_prev = V.prototype.Mu =
                  function () {
                    return h($g(this.Ut), V);
                  }),
                (V.prototype.set_prev = V.prototype.av =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), tU(e, t));
                  }),
                Object.defineProperty(V.prototype, "prev", {
                  get: V.prototype.Mu,
                  set: V.prototype.av,
                }),
                (V.prototype.get_next = V.prototype.Ju =
                  function () {
                    return h(eU(this.Ut), V);
                  }),
                (V.prototype.set_next = V.prototype.Yu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), nU(e, t));
                  }),
                Object.defineProperty(V.prototype, "next", {
                  get: V.prototype.Ju,
                  set: V.prototype.Yu,
                }),
                (V.prototype.__destroy__ = function () {
                  oU(this.Ut);
                }),
                (Y.prototype = Object.create(n.prototype)),
                (Y.prototype.constructor = Y),
                (Y.prototype.Vt = Y),
                (Y.Wt = {}),
                (i.b2RopeJointDef = Y),
                (Y.prototype.get_localAnchorA = Y.prototype.gu =
                  function () {
                    return h(_U(this.Ut), m);
                  }),
                (Y.prototype.set_localAnchorA = Y.prototype.iu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), rU(e, t));
                  }),
                Object.defineProperty(Y.prototype, "localAnchorA", {
                  get: Y.prototype.gu,
                  set: Y.prototype.iu,
                }),
                (Y.prototype.get_localAnchorB = Y.prototype.hu =
                  function () {
                    return h(pU(this.Ut), m);
                  }),
                (Y.prototype.set_localAnchorB = Y.prototype.ju =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), sU(e, t));
                  }),
                Object.defineProperty(Y.prototype, "localAnchorB", {
                  get: Y.prototype.hu,
                  set: Y.prototype.ju,
                }),
                (Y.prototype.get_maxLength = Y.prototype.qw =
                  function () {
                    return cU(this.Ut);
                  }),
                (Y.prototype.set_maxLength = Y.prototype.dy =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), uU(e, t));
                  }),
                Object.defineProperty(Y.prototype, "maxLength", {
                  get: Y.prototype.qw,
                  set: Y.prototype.dy,
                }),
                (Y.prototype.get_type = Y.prototype.Xt =
                  function () {
                    return aU(this.Ut);
                  }),
                (Y.prototype.set_type = Y.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), lU(e, t));
                  }),
                Object.defineProperty(Y.prototype, "type", {
                  get: Y.prototype.Xt,
                  set: Y.prototype.Zt,
                }),
                (Y.prototype.get_userData = Y.prototype.Yt =
                  function () {
                    return yU(this.Ut);
                  }),
                (Y.prototype.set_userData = Y.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), bU(e, t));
                  }),
                Object.defineProperty(Y.prototype, "userData", {
                  get: Y.prototype.Yt,
                  set: Y.prototype.$t,
                }),
                (Y.prototype.get_bodyA = Y.prototype.au =
                  function () {
                    return h(dU(this.Ut), l);
                  }),
                (Y.prototype.set_bodyA = Y.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), mU(e, t));
                  }),
                Object.defineProperty(Y.prototype, "bodyA", {
                  get: Y.prototype.au,
                  set: Y.prototype.du,
                }),
                (Y.prototype.get_bodyB = Y.prototype.bu =
                  function () {
                    return h(fU(this.Ut), l);
                  }),
                (Y.prototype.set_bodyB = Y.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), hU(e, t));
                  }),
                Object.defineProperty(Y.prototype, "bodyB", {
                  get: Y.prototype.bu,
                  set: Y.prototype.eu,
                }),
                (Y.prototype.get_collideConnected = Y.prototype.cu =
                  function () {
                    return !!gU(this.Ut);
                  }),
                (Y.prototype.set_collideConnected = Y.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), UU(e, t));
                  }),
                Object.defineProperty(Y.prototype, "collideConnected", {
                  get: Y.prototype.cu,
                  set: Y.prototype.fu,
                }),
                (Y.prototype.__destroy__ = function () {
                  wU(this.Ut);
                }),
                (Z.prototype = Object.create(n.prototype)),
                (Z.prototype.constructor = Z),
                (Z.prototype.Vt = Z),
                (Z.Wt = {}),
                (i.b2MotorJointDef = Z),
                (Z.prototype.Initialize = function (t, e) {
                  var n = this.Ut;
                  (t && "object" == typeof t && (t = t.Ut),
                    e && "object" == typeof e && (e = e.Ut),
                    DU(n, t, e));
                }),
                (Z.prototype.get_linearOffset = Z.prototype.Vv =
                  function () {
                    return h(vU(this.Ut), m);
                  }),
                (Z.prototype.set_linearOffset = Z.prototype.Ix =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), SU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "linearOffset", {
                  get: Z.prototype.Vv,
                  set: Z.prototype.Ix,
                }),
                (Z.prototype.get_angularOffset = Z.prototype.kv =
                  function () {
                    return AU(this.Ut);
                  }),
                (Z.prototype.set_angularOffset = Z.prototype.Yw =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), xU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "angularOffset", {
                  get: Z.prototype.kv,
                  set: Z.prototype.Yw,
                }),
                (Z.prototype.get_maxForce = Z.prototype.tu =
                  function () {
                    return BU(this.Ut);
                  }),
                (Z.prototype.set_maxForce = Z.prototype.xu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), jU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "maxForce", {
                  get: Z.prototype.tu,
                  set: Z.prototype.xu,
                }),
                (Z.prototype.get_maxTorque = Z.prototype.Iu =
                  function () {
                    return GU(this.Ut);
                  }),
                (Z.prototype.set_maxTorque = Z.prototype.Xu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), CU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "maxTorque", {
                  get: Z.prototype.Iu,
                  set: Z.prototype.Xu,
                }),
                (Z.prototype.get_correctionFactor = Z.prototype.wv =
                  function () {
                    return PU(this.Ut);
                  }),
                (Z.prototype.set_correctionFactor = Z.prototype.jx =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), RU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "correctionFactor", {
                  get: Z.prototype.wv,
                  set: Z.prototype.jx,
                }),
                (Z.prototype.get_type = Z.prototype.Xt =
                  function () {
                    return MU(this.Ut);
                  }),
                (Z.prototype.set_type = Z.prototype.Zt =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), TU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "type", {
                  get: Z.prototype.Xt,
                  set: Z.prototype.Zt,
                }),
                (Z.prototype.get_userData = Z.prototype.Yt =
                  function () {
                    return FU(this.Ut);
                  }),
                (Z.prototype.set_userData = Z.prototype.$t =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), LU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "userData", {
                  get: Z.prototype.Yt,
                  set: Z.prototype.$t,
                }),
                (Z.prototype.get_bodyA = Z.prototype.au =
                  function () {
                    return h(IU(this.Ut), l);
                  }),
                (Z.prototype.set_bodyA = Z.prototype.du =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), WU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "bodyA", {
                  get: Z.prototype.au,
                  set: Z.prototype.du,
                }),
                (Z.prototype.get_bodyB = Z.prototype.bu =
                  function () {
                    return h(OU(this.Ut), l);
                  }),
                (Z.prototype.set_bodyB = Z.prototype.eu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), VU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "bodyB", {
                  get: Z.prototype.bu,
                  set: Z.prototype.eu,
                }),
                (Z.prototype.get_collideConnected = Z.prototype.cu =
                  function () {
                    return !!EU(this.Ut);
                  }),
                (Z.prototype.set_collideConnected = Z.prototype.fu =
                  function (t) {
                    var e = this.Ut;
                    (t && "object" == typeof t && (t = t.Ut), qU(e, t));
                  }),
                Object.defineProperty(Z.prototype, "collideConnected", {
                  get: Z.prototype.cu,
                  set: Z.prototype.fu,
                }),
                (Z.prototype.__destroy__ = function () {
                  kU(this.Ut);
                }),
                (function () {
                  function b() {
                    ((i.b2Shape.e_circle = NU()),
                      (i.b2Shape.e_edge = XU()),
                      (i.b2Shape.e_polygon = HU()),
                      (i.b2Shape.e_chain = zU()),
                      (i.b2Shape.e_typeCount = QU()),
                      (i.e_unknownJoint = ZU()),
                      (i.e_revoluteJoint = YU()),
                      (i.e_prismaticJoint = KU()),
                      (i.e_distanceJoint = $U()),
                      (i.e_pulleyJoint = ew()),
                      (i.e_mouseJoint = ow()),
                      (i.e_gearJoint = iw()),
                      (i.e_wheelJoint = _w()),
                      (i.e_weldJoint = rw()),
                      (i.e_frictionJoint = pw()),
                      (i.e_ropeJoint = cw()),
                      (i.e_motorJoint = aw()),
                      (i.e_inactiveLimit = lw()),
                      (i.e_atLowerLimit = bw()),
                      (i.e_atUpperLimit = dw()),
                      (i.e_equalLimits = fw()),
                      (i.b2Manifold.e_circles = hw()),
                      (i.b2Manifold.e_faceA = gw()),
                      (i.b2Manifold.e_faceB = jw()),
                      (i.b2_staticBody = qw()),
                      (i.b2_kinematicBody = kw()),
                      (i.b2_dynamicBody = Zw()),
                      (i.b2Draw.e_shapeBit = Yw()),
                      (i.b2Draw.e_jointBit = $w()),
                      (i.b2Draw.e_aabbBit = tJ()),
                      (i.b2Draw.e_pairBit = eJ()),
                      (i.b2Draw.e_centerOfMassBit = nJ()),
                      (i.b2ContactFeature.e_vertex = oJ()),
                      (i.b2ContactFeature.e_face = iJ()));
                  }
                  Dt ? b() : wt.unshift(b);
                })(),
                o.ready
              );
            });
        o.exports = s;
      })((e = { exports: {} }), e.exports),
      e.exports);
    var e;
    let n = (window.box2d = { _wasm: t });
    n.__init = (t) => {
      W.IPhy.reg(
        n,
        "laya.physics",
        (e) => {
          (box2dInit(e), t());
        },
        !1,
        !1,
        (t) => wx.loadSubpackage({ name: "asmp2", success: t, fail: () => {} }),
        !1,
      );
    };
  })();
  let box2dInit = (t) => {
    if (t && "asmp2" == t.name) return;
    (!(function (t, e) {
      "use strict";
      class n {}
      ((n.RigidBody = null), (n.Physics = null));
      class o extends e.Component {
        constructor() {
          (super(...arguments),
            (this._isSensor = !1),
            (this._density = 10),
            (this._friction = 0.2),
            (this._restitution = 0));
        }
        getDef() {
          if (!this._def) {
            var t = new window.box2d.b2FixtureDef();
            ((t.density = this.density),
              (t.friction = this.friction),
              (t.isSensor = this.isSensor),
              (t.restitution = this.restitution),
              (t.shape = this._shape),
              (this._def = t));
          }
          return this._def;
        }
        _onEnable() {
          this.rigidBody
            ? this.refresh()
            : e.Laya.systemTimer.callLater(this, this._checkRigidBody);
        }
        _checkRigidBody() {
          if (!this.rigidBody) {
            var t = this.owner.getComponent(n.RigidBody);
            t && ((this.rigidBody = t), this.refresh());
          }
        }
        _onDestroy() {
          this.rigidBody &&
            (this.fixture &&
              (this.fixture.GetBody() == this.rigidBody._getOriBody() &&
                this.rigidBody.body.DestroyFixture(this.fixture),
              (this.fixture = null)),
            (this.rigidBody = null),
            (this._shape = null),
            (this._def = null));
        }
        get isSensor() {
          return this._isSensor;
        }
        set isSensor(t) {
          ((this._isSensor = t), this._def && ((this._def.isSensor = t), this.refresh()));
        }
        get density() {
          return this._density;
        }
        set density(t) {
          ((this._density = t), this._def && ((this._def.density = t), this.refresh()));
        }
        get friction() {
          return this._friction;
        }
        set friction(t) {
          ((this._friction = t), this._def && ((this._def.friction = t), this.refresh()));
        }
        get restitution() {
          return this._restitution;
        }
        set restitution(t) {
          ((this._restitution = t), this._def && ((this._def.restitution = t), this.refresh()));
        }
        refresh() {
          if (this.enabled && this.rigidBody) {
            var t = this.rigidBody.body;
            this.fixture &&
              (this.fixture.GetBody() == this.rigidBody.body &&
                this.rigidBody.body.DestroyFixture(this.fixture),
              (this.fixture = null));
            var e = this.getDef();
            ((e.filter.groupIndex = this.rigidBody.group),
              (e.filter.categoryBits = this.rigidBody.category),
              (e.filter.maskBits = this.rigidBody.mask),
              (this.fixture = t.CreateFixture(e)),
              (this.fixture.collider = this));
          }
        }
        resetShape(t = !0) {}
        get isSingleton() {
          return !1;
        }
      }
      (e.ClassUtils.regClass("laya.physics.ColliderBase", o),
        e.ClassUtils.regClass("Laya.ColliderBase", o));
      class i extends e.Component {
        constructor() {
          (super(...arguments),
            (this._type = "dynamic"),
            (this._allowSleep = !0),
            (this._angularVelocity = 0),
            (this._angularDamping = 0),
            (this._linearVelocity = { x: 0, y: 0 }),
            (this._linearDamping = 0),
            (this._bullet = !1),
            (this._allowRotation = !0),
            (this._gravityScale = 1),
            (this.group = 0),
            (this.category = 1),
            (this.mask = -1),
            (this.label = "RigidBody"));
        }
        _createBody() {
          if (!this._body && this.owner) {
            var t = this.owner,
              o = window.box2d,
              i = new o.b2BodyDef(),
              _ = t.localToGlobal(e.Point.TEMP.setTo(0, 0), !1, n.Physics.I.worldRoot);
            (i.position.Set(_.x / n.Physics.PIXEL_RATIO, _.y / n.Physics.PIXEL_RATIO),
              (i.angle = e.Utils.toRadian(t.rotation)),
              (i.allowSleep = this._allowSleep),
              (i.angularDamping = this._angularDamping),
              (i.angularVelocity = this._angularVelocity),
              (i.bullet = this._bullet),
              (i.fixedRotation = !this._allowRotation),
              (i.gravityScale = this._gravityScale),
              (i.linearDamping = this._linearDamping));
            var r = this._linearVelocity;
            (((r && 0 != r.x) || 0 != r.y) && (i.linearVelocity = new o.b2Vec2(r.x, r.y)),
              (i.type = o.b2BodyType["b2_" + this._type + "Body"]),
              (this._body = n.Physics.I._createBody(i)),
              this.resetCollider(!1));
          }
        }
        _onAwake() {
          this._createBody();
        }
        _onEnable() {
          var t = this;
          (this._createBody(), e.Laya.physicsTimer.frameLoop(1, this, this._sysPhysicToNode));
          var n = this.owner;
          if (this.accessGetSetFunc(n, "x", "set") && !n._changeByRigidBody) {
            ((n._changeByRigidBody = !0),
              this._overSet(n, "x", function (e) {
                (t.accessGetSetFunc(n, "x", "set")(e), t._sysPosToPhysic());
              }),
              this._overSet(n, "y", function (e) {
                (t.accessGetSetFunc(n, "y", "set")(e), t._sysPosToPhysic());
              }),
              this._overSet(n, "rotation", function (e) {
                (t.accessGetSetFunc(n, "rotation", "set")(e), t._sysNodeToPhysic());
              }),
              this._overSet(n, "scaleX", function (e) {
                (t.accessGetSetFunc(n, "scaleX", "set")(e), t.resetCollider(!0));
              }),
              this._overSet(n, "scaleY", function (e) {
                (t.accessGetSetFunc(n, "scaleY", "set")(e), t.resetCollider(!0));
              }));
          }
        }
        accessGetSetFunc(t, e, n) {
          if (-1 === ["get", "set"].indexOf(n)) return;
          let o = `_$${n}_${e}`;
          if (t[o]) return t[o];
          let i,
            _ = t.constructor;
          for (; _;) {
            if ((i = Object.getOwnPropertyDescriptor(_.prototype, e)) && i[n]) {
              t[o] = i[n].bind(t);
              break;
            }
            _ = Object.getPrototypeOf(_);
          }
          return t[o];
        }
        resetCollider(t) {
          var e = this.owner.getComponents(o);
          if (e)
            for (var n = 0, i = e.length; n < i; n++) {
              var _ = e[n];
              ((_.rigidBody = this), t ? _.resetShape() : _.refresh());
            }
        }
        _sysPhysicToNode() {
          if ("static" != this.type && this._body.IsAwake()) {
            var t = this._body.GetPosition(),
              o = this._body.GetAngle(),
              i = this.owner;
            this.accessGetSetFunc(
              i,
              "rotation",
              "set",
            )(e.Utils.toAngle(o) - i.parent.globalRotation);
            var _ = i.globalToLocal(
              e.Point.TEMP.setTo(t.x * n.Physics.PIXEL_RATIO, t.y * n.Physics.PIXEL_RATIO),
              !1,
              n.Physics.I.worldRoot,
            );
            ((_.x += i.pivotX),
              (_.y += i.pivotY),
              (_ = i.toParentPoint(_)),
              this.accessGetSetFunc(i, "x", "set")(_.x),
              this.accessGetSetFunc(i, "y", "set")(_.y));
          }
        }
        _sysNodeToPhysic() {
          var t = this.owner,
            o = t.localToGlobal(e.Point.TEMP.setTo(0, 0), !1, n.Physics.I.worldRoot);
          const i = _._v2;
          (i.Set(o.x / n.Physics.PIXEL_RATIO, o.y / n.Physics.PIXEL_RATIO),
            this._body.SetTransform(i, e.Utils.toRadian(t.rotation)));
        }
        _sysPosToPhysic() {
          var t = this.owner,
            o = t.localToGlobal(e.Point.TEMP.setTo(0, 0), !1, n.Physics.I.worldRoot);
          const i = _._v2;
          (i.Set(o.x / n.Physics.PIXEL_RATIO, o.y / n.Physics.PIXEL_RATIO),
            this._body.SetTransform(i, e.Utils.toRadian(t.rotation)));
        }
        _overSet(t, e, n) {
          Object.defineProperty(t, e, {
            get: this.accessGetSetFunc(t, e, "get"),
            set: n,
            enumerable: !1,
            configurable: !0,
          });
        }
        _onDisable() {
          (e.Laya.physicsTimer.clear(this, this._sysPhysicToNode),
            this._body && n.Physics.I._removeBody(this._body),
            (this._body = null));
          var t = this.owner;
          t._changeByRigidBody &&
            (this._overSet(t, "x", this.accessGetSetFunc(t, "x", "set")),
            this._overSet(t, "y", this.accessGetSetFunc(t, "y", "set")),
            this._overSet(t, "rotation", this.accessGetSetFunc(t, "rotation", "set")),
            this._overSet(t, "scaleX", this.accessGetSetFunc(t, "scaleX", "set")),
            this._overSet(t, "scaleY", this.accessGetSetFunc(t, "scaleY", "set")),
            (t._changeByRigidBody = !1));
        }
        getBody() {
          return (this._body || this._onAwake(), this._body);
        }
        _getOriBody() {
          return this._body;
        }
        get body() {
          return (this._body || this._onAwake(), this._body);
        }
        applyForce(t, e) {
          (this._body || this._onAwake(), this._body.ApplyForce(e, t));
        }
        applyForceToCenter(t) {
          (this._body || this._onAwake(), this._body.ApplyForceToCenter(t));
        }
        applyLinearImpulse(t, e) {
          (this._body || this._onAwake(), this._body.ApplyLinearImpulse(e, t));
        }
        applyLinearImpulseToCenter(t) {
          (this._body || this._onAwake(), this._body.ApplyLinearImpulseToCenter(t));
        }
        applyTorque(t) {
          (this._body || this._onAwake(), this._body.ApplyTorque(t));
        }
        setVelocity(t) {
          (this._body || this._onAwake(), this._body.SetLinearVelocity(t));
        }
        setAngle(t) {
          this._body || this._onAwake();
          var o = this.owner.localToGlobal(e.Point.TEMP.setTo(0, 0), !1, n.Physics.I.worldRoot);
          const i = _._v2;
          (i.Set(o.x / n.Physics.PIXEL_RATIO, o.y / n.Physics.PIXEL_RATIO),
            this._body.SetTransform(i, e.Utils.toRadian(t)),
            this._body.SetAwake(!0));
        }
        getMass() {
          return this._body ? this._body.GetMass() : 0;
        }
        getCenter() {
          this._body || this._onAwake();
          var t = this._body.GetLocalCenter();
          return ((t.x = t.x * n.Physics.PIXEL_RATIO), (t.y = t.y * n.Physics.PIXEL_RATIO), t);
        }
        getWorldCenter() {
          this._body || this._onAwake();
          var t = this._body.GetWorldCenter();
          return ((t.x = t.x * n.Physics.PIXEL_RATIO), (t.y = t.y * n.Physics.PIXEL_RATIO), t);
        }
        get type() {
          return this._type;
        }
        set type(t) {
          ((this._type = t),
            this._body && this._body.SetType(window.box2d.b2BodyType["b2_" + this._type + "Body"]));
        }
        get gravityScale() {
          return this._gravityScale;
        }
        set gravityScale(t) {
          ((this._gravityScale = t), this._body && this._body.SetGravityScale(t));
        }
        get allowRotation() {
          return this._allowRotation;
        }
        set allowRotation(t) {
          ((this._allowRotation = t), this._body && this._body.SetFixedRotation(!t));
        }
        get allowSleep() {
          return this._allowSleep;
        }
        set allowSleep(t) {
          ((this._allowSleep = t), this._body && this._body.SetSleepingAllowed(t));
        }
        get angularDamping() {
          return this._angularDamping;
        }
        set angularDamping(t) {
          ((this._angularDamping = t), this._body && this._body.SetAngularDamping(t));
        }
        get angularVelocity() {
          return this._body ? this._body.GetAngularVelocity() : this._angularVelocity;
        }
        set angularVelocity(t) {
          ((this._angularVelocity = t), this._body && this._body.SetAngularVelocity(t));
        }
        get linearDamping() {
          return this._linearDamping;
        }
        set linearDamping(t) {
          ((this._linearDamping = t), this._body && this._body.SetLinearDamping(t));
        }
        get linearVelocity() {
          if (this._body) {
            var t = this._body.GetLinearVelocity();
            return { x: t.x, y: t.y };
          }
          return this._linearVelocity;
        }
        set linearVelocity(t) {
          t &&
            (t instanceof Array && (t = { x: t[0], y: t[1] }),
            (this._linearVelocity = t),
            this._body && (_._v2.Set(t.x, t.y), this._body.SetLinearVelocity(_._v2)));
        }
        get bullet() {
          return this._bullet;
        }
        set bullet(t) {
          ((this._bullet = t), this._body && this._body.SetBullet(t));
        }
      }
      (e.ClassUtils.regClass("laya.physics.RigidBody", i),
        e.ClassUtils.regClass("Laya.RigidBody", i));
      class _ extends e.EventDispatcher {
        constructor() {
          (super(),
            (this.box2d = window.box2d),
            (this.velocityIterations = 8),
            (this.positionIterations = 3),
            (this._eventList = []));
        }
        static get I() {
          return _._I || (_._I = new _());
        }
        static enable(t = null) {
          (_.I.start(t), (n.RigidBody = i), (n.Physics = this));
        }
        start(t = null) {
          if (!this._enabled) {
            ((this._enabled = !0), t || (t = {}));
            var n = window.box2d;
            if (null == n)
              return void console.error(
                "Can not find box2d libs, you should request box2d.js first.",
              );
            var o = new n.b2Vec2(0, t.gravity || 500 / _.PIXEL_RATIO);
            this.world = new n.b2World(o);
            const i = new n.JSDestructionListener();
            ((i.SayGoodbyeJoint = (t) => {
              t.m_userData && (t.m_userData.isDestroy = !0);
            }),
              (i.SayGoodbyeFixture = () => {}));
            const r = new n.JSContactListener();
            ((r.BeginContact = (t) => {
              ((t = window.box2d.wrapPointer(t, window.box2d.b2Contact)),
                _.I._eventList.push(0, t));
            }),
              (r.EndContact = (t) => {
                ((t = window.box2d.wrapPointer(t, window.box2d.b2Contact)),
                  _.I._eventList.push(1, t));
              }),
              (r.PreSolve = () => {}),
              (r.PostSolve = () => {}),
              this.world.SetContactListener(r),
              (this.allowSleeping = null == t.allowSleeping || t.allowSleeping),
              t.customUpdate || e.Laya.physicsTimer.frameLoop(1, this, this._update),
              (this._emptyBody = this._createBody(new window.box2d.b2BodyDef())));
          }
        }
        _update() {
          var t = e.Laya.timer.delta / 1e3;
          (t > 0.033 && (t = 0.033),
            this.world.Step(t, this.velocityIterations, this.positionIterations, 3));
          var n = this._eventList.length;
          if (n > 0) {
            for (var o = 0; o < n; o += 2)
              this._sendEvent(this._eventList[o], this._eventList[o + 1]);
            this._eventList.length = 0;
          }
        }
        _sendEvent(t, n) {
          var o = n.GetFixtureA().collider,
            i = n.GetFixtureB().collider;
          if (o && i) {
            var r = o.owner,
              p = i.owner;
            if (
              ((n.getHitInfo = function () {
                var t = new this.box2d.b2WorldManifold();
                this.GetWorldManifold(t);
                var e = t.points[0];
                return ((e.x *= _.PIXEL_RATIO), (e.y *= _.PIXEL_RATIO), t);
              }),
              r)
            ) {
              var s = [i, o, n];
              0 === t
                ? (r.event(e.Event.TRIGGER_ENTER, s),
                  r._triggered ? r.event(e.Event.TRIGGER_STAY, s) : (r._triggered = !0))
                : ((r._triggered = !1), r.event(e.Event.TRIGGER_EXIT, s));
            }
            p &&
              ((s = [o, i, n]),
              0 === t
                ? (p.event(e.Event.TRIGGER_ENTER, s),
                  p._triggered ? p.event(e.Event.TRIGGER_STAY, s) : (p._triggered = !0))
                : ((p._triggered = !1), p.event(e.Event.TRIGGER_EXIT, s)));
          }
        }
        _createBody(t) {
          return this.world
            ? this.world.CreateBody(t)
            : (console.error(
                'The physical engine should be initialized first.use "Physics.enable()"',
              ),
              null);
        }
        _removeBody(t) {
          this.world
            ? this.world.DestroyBody(t)
            : console.error(
                'The physical engine should be initialized first.use "Physics.enable()"',
              );
        }
        _createJoint(t) {
          if (this.world) {
            let e = this.world.CreateJoint(t);
            return ((e.m_userData = {}), (e.m_userData.isDestroy = !1), e);
          }
          return (
            console.error('The physical engine should be initialized first.use "Physics.enable()"'),
            null
          );
        }
        _removeJoint(t) {
          this.world
            ? this.world.DestroyJoint(t)
            : console.error(
                'The physical engine should be initialized first.use "Physics.enable()"',
              );
        }
        stop() {
          e.Laya.physicsTimer.clear(this, this._update);
        }
        get allowSleeping() {
          return this.world.GetAllowSleeping();
        }
        set allowSleeping(t) {
          this.world.SetAllowSleeping(t);
        }
        get gravity() {
          return this.world.GetGravity();
        }
        set gravity(t) {
          this.world.SetGravity(t);
        }
        getBodyCount() {
          return this.world.GetBodyCount();
        }
        getContactCount() {
          return this.world.GetContactCount();
        }
        getJointCount() {
          return this.world.GetJointCount();
        }
        get worldRoot() {
          return this._worldRoot || e.Laya.stage;
        }
        set worldRoot(t) {
          if (((this._worldRoot = t), t)) {
            var n = t.localToGlobal(e.Point.TEMP.setTo(0, 0));
            this.world.ShiftOrigin({ x: -n.x / _.PIXEL_RATIO, y: -n.y / _.PIXEL_RATIO });
          }
        }
        updatePhysicsByWorldRoot() {
          if (this.worldRoot) {
            var t = this.worldRoot.localToGlobal(e.Point.TEMP.setTo(0, 0));
            this.world.ShiftOrigin({ x: -t.x / _.PIXEL_RATIO, y: -t.y / _.PIXEL_RATIO });
          }
        }
      }
      ((_.PIXEL_RATIO = 50),
        e.ClassUtils.regClass("laya.physics.Physics", _),
        e.ClassUtils.regClass("Laya.Physics", _));
      class r extends o {
        constructor() {
          (super(...arguments),
            (this._x = 0),
            (this._y = 0),
            (this._width = 100),
            (this._height = 100));
        }
        getDef() {
          return (
            this._shape || ((this._shape = new window.box2d.b2PolygonShape()), this._setShape(!1)),
            (this.label = this.label || "BoxCollider"),
            super.getDef()
          );
        }
        _setShape(t = !0) {
          var e = this.owner.scaleX || 1,
            n = this.owner.scaleY || 1;
          (_._v2.Set(
            ((this._width / 2 + this._x) / _.PIXEL_RATIO) * e,
            ((this._height / 2 + this._y) / _.PIXEL_RATIO) * n,
          ),
            this._shape.SetAsBox(
              (this._width / 2 / _.PIXEL_RATIO) * e,
              (this._height / 2 / _.PIXEL_RATIO) * n,
              _._v2,
              0,
            ),
            t && this.refresh());
        }
        get x() {
          return this._x;
        }
        set x(t) {
          ((this._x = t), this._shape && this._setShape());
        }
        get y() {
          return this._y;
        }
        set y(t) {
          ((this._y = t), this._shape && this._setShape());
        }
        get width() {
          return this._width;
        }
        set width(t) {
          if (t <= 0) throw "BoxCollider size cannot be less than 0";
          ((this._width = t), this._shape && this._setShape());
        }
        get height() {
          return this._height;
        }
        set height(t) {
          if (t <= 0) throw "BoxCollider size cannot be less than 0";
          ((this._height = t), this._shape && this._setShape());
        }
        resetShape(t = !0) {
          this._setShape();
        }
      }
      (e.ClassUtils.regClass("laya.physics.BoxCollider", r),
        e.ClassUtils.regClass("Laya.BoxCollider", r));
      class p extends o {
        constructor() {
          (super(...arguments),
            (this._x = 0),
            (this._y = 0),
            (this._points = "0,0,100,0"),
            (this._loop = !1));
        }
        getDef() {
          return (
            this._shape || ((this._shape = new window.box2d.b2ChainShape()), this._setShape(!1)),
            (this.label = this.label || "ChainCollider"),
            super.getDef()
          );
        }
        _setShape(t = !0) {
          var e = this._points.split(","),
            n = e.length;
          if (n % 2 == 1) throw "ChainCollider points lenth must a multiplier of 2";
          var o = [];
          const i = window.box2d;
          for (var r = 0, p = n; r < p; r += 2)
            o.push(
              new i.b2Vec2(
                (this._x + parseInt(e[r])) / _.PIXEL_RATIO,
                (this._y + parseInt(e[r + 1])) / _.PIXEL_RATIO,
              ),
            );
          const s = i._malloc(8 * o.length);
          let c = 0;
          const u = i.HEAPF32;
          for (let t = 0; t < o.length; t++)
            ((u[(s + c) >> 2] = o[t].get_x()), (u[(s + (c + 4)) >> 2] = o[t].get_y()), (c += 8));
          const a = i.wrapPointer(s, i.b2Vec2);
          (this._loop ? this._shape.CreateLoop(a, n / 2) : this._shape.CreateChain(a, n / 2),
            t && this.refresh());
        }
        get x() {
          return this._x;
        }
        set x(t) {
          ((this._x = t), this._shape && this._setShape());
        }
        get y() {
          return this._y;
        }
        set y(t) {
          ((this._y = t), this._shape && this._setShape());
        }
        get points() {
          return this._points;
        }
        set points(t) {
          if (!t) throw "ChainCollider points cannot be empty";
          ((this._points = t), this._shape && this._setShape());
        }
        get loop() {
          return this._loop;
        }
        set loop(t) {
          ((this._loop = t), this._shape && this._setShape());
        }
      }
      (e.ClassUtils.regClass("laya.physics.ChainCollider", p),
        e.ClassUtils.regClass("Laya.ChainCollider", p));
      class s extends o {
        constructor() {
          (super(...arguments), (this._x = 0), (this._y = 0), (this._radius = 50));
        }
        getDef() {
          return (
            this._shape || ((this._shape = new window.box2d.b2CircleShape()), this._setShape(!1)),
            (this.label = this.label || "CircleCollider"),
            super.getDef()
          );
        }
        _setShape(t = !0) {
          var e = this.owner.scaleX || 1;
          ((this._shape.m_radius = (this._radius / _.PIXEL_RATIO) * e),
            this._shape.m_p.Set(
              ((this._radius + this._x) / _.PIXEL_RATIO) * e,
              ((this._radius + this._y) / _.PIXEL_RATIO) * e,
            ),
            t && this.refresh());
        }
        get x() {
          return this._x;
        }
        set x(t) {
          ((this._x = t), this._shape && this._setShape());
        }
        get y() {
          return this._y;
        }
        set y(t) {
          ((this._y = t), this._shape && this._setShape());
        }
        get radius() {
          return this._radius;
        }
        set radius(t) {
          if (t <= 0) throw "CircleCollider radius cannot be less than 0";
          ((this._radius = t), this._shape && this._setShape());
        }
        resetShape(t = !0) {
          this._setShape();
        }
      }
      (e.ClassUtils.regClass("laya.physics.CircleCollider", s),
        e.ClassUtils.regClass("Laya.CircleCollider", s));
      class c extends o {
        constructor() {
          (super(...arguments), (this._x = 0), (this._y = 0), (this._points = "0,0,100,0"));
        }
        getDef() {
          return (
            this._shape || ((this._shape = new window.box2d.b2EdgeShape()), this._setShape(!1)),
            (this.label = this.label || "EdgeCollider"),
            super.getDef()
          );
        }
        _setShape(t = !0) {
          var e = this._points.split(","),
            n = e.length;
          if (n % 2 == 1) throw "EdgeCollider points lenth must a multiplier of 2";
          for (var o = [], i = 0, r = n; i < r; i += 2)
            o.push(
              new window.box2d.b2Vec2(
                (this._x + parseInt(e[i])) / _.PIXEL_RATIO,
                (this._y + parseInt(e[i + 1])) / _.PIXEL_RATIO,
              ),
            );
          (this._shape.SetTwoSided(o[0], o[1]), t && this.refresh());
        }
        get x() {
          return this._x;
        }
        set x(t) {
          ((this._x = t), this._shape && this._setShape());
        }
        get y() {
          return this._y;
        }
        set y(t) {
          ((this._y = t), this._shape && this._setShape());
        }
        get points() {
          return this._points;
        }
        set points(t) {
          if (!t) throw "EdgeCollider points cannot be empty";
          ((this._points = t), this._shape && this._setShape());
        }
      }
      (e.ClassUtils.regClass("laya.physics.EdgeCollider", c),
        e.ClassUtils.regClass("Laya.EdgeCollider", c));
      class u extends e.Sprite {
        constructor() {
          (super(),
            (this.m_drawFlags = 99),
            u._inited || ((u._inited = !0), u.init()),
            (this._camera = {}),
            (this._camera.m_center = new u.box2d.b2Vec2(0, 0)),
            (this._camera.m_extent = 25),
            (this._camera.m_zoom = 1),
            (this._camera.m_width = 1280),
            (this._camera.m_height = 800),
            (this._mG = new e.Graphics()),
            (this.graphics = this._mG),
            (this._textSp = new e.Sprite()),
            (this._textG = this._textSp.graphics),
            this.addChild(this._textSp));
        }
        static init() {
          ((u.box2d = e.Browser.window.box2d),
            (u.DrawString_s_color = new u.box2d.b2Color(0.9, 0.6, 0.6)),
            (u.DrawStringWorld_s_p = new u.box2d.b2Vec2()),
            (u.DrawStringWorld_s_cc = new u.box2d.b2Vec2()),
            (u.DrawStringWorld_s_color = new u.box2d.b2Color(0.5, 0.9, 0.5)));
        }
        render(t, e, n) {
          (super.render(t, e, n), this._renderToGraphic());
        }
        _renderToGraphic() {
          this.world &&
            (this._textG.clear(),
            this._mG.clear(),
            this._mG.save(),
            this._mG.scale(_.PIXEL_RATIO, _.PIXEL_RATIO),
            (this.lineWidth = 1 / _.PIXEL_RATIO),
            this.world.DebugDraw ? this.world.DebugDraw() : this.world.DrawDebugData(),
            this._mG.restore());
        }
        constructJSDraw() {
          const t = this,
            e = new window.box2d.JSDraw();
          return (
            (e.DrawSegment = (e, n, o) => {
              t.DrawSegment(e, n, o);
            }),
            (e.DrawPolygon = (e, n, o) => {
              t.DrawPolygon(e, n, o);
            }),
            (e.DrawSolidPolygon = (e, n, o) => {
              t.DrawSolidPolygon(e, n, o);
            }),
            (e.DrawCircle = (e, n, o) => {
              t.DrawCircle(e, n, o);
            }),
            (e.DrawSolidCircle = (e, n, o, i) => {
              t.DrawSolidCircle(e, n, o, !0);
            }),
            (e.DrawTransform = (e) => {
              t.DrawTransform(e);
            }),
            (e.DrawPoint = (e, n, o) => {
              t.DrawPoint(e, n, o);
            }),
            e
          );
        }
        SetFlags(t) {
          this.m_drawFlags = t;
        }
        GetFlags() {
          return this.m_drawFlags;
        }
        AppendFlags(t) {
          this.m_drawFlags |= t;
        }
        ClearFlags(t) {
          this.m_drawFlags &= ~t;
        }
        PushTransform(t) {
          (this._mG.save(), this._mG.translate(t.p.x, t.p.y), this._mG.rotate(t.q.GetAngle()));
        }
        PopTransform(t) {
          this._mG.restore();
        }
        DrawPolygon(t, e, n) {
          var o, i;
          for (t.length, i = [], o = 0; o < e; o++) i.push(t[o].x, t[o].y);
          this._mG.drawPoly(0, 0, i, null, n.MakeStyleString(1), this.lineWidth);
        }
        DrawSolidPolygon(t, e, n) {
          var o, i;
          for (t.length, i = [], o = 0; o < e; o++) i.push(t[o].x, t[o].y);
          this._mG.drawPoly(0, 0, i, n.MakeStyleString(0.5), n.MakeStyleString(1), this.lineWidth);
        }
        DrawCircle(t, e, n) {
          this._mG.drawCircle(t.x, t.y, e, null, n.MakeStyleString(1), this.lineWidth);
        }
        DrawSolidCircle(t, e, n, o) {
          var i = t.x,
            _ = t.y;
          (this._mG.drawCircle(
            i,
            _,
            e,
            o.MakeStyleString(0.5),
            o.MakeStyleString(1),
            this.lineWidth,
          ),
            this._mG.drawLine(
              i,
              _,
              i + n.x * e,
              _ + n.y * e,
              o.MakeStyleString(1),
              this.lineWidth,
            ));
        }
        DrawParticles(t, e, n, o) {
          if (null !== n)
            for (var i = 0; i < o; ++i) {
              var _ = t[i],
                r = n[i];
              this._mG.drawCircle(_.x, _.y, e, r.MakeStyleString(), null, this.lineWidth);
            }
          else
            for (i = 0; i < o; ++i)
              ((_ = t[i]), this._mG.drawCircle(_.x, _.y, e, "#ffff00", null, this.lineWidth));
        }
        DrawSegment(t, e, n) {
          this._mG.drawLine(t.x, t.y, e.x, e.y, n.MakeStyleString(1), this.lineWidth);
        }
        DrawTransform(t) {
          (this.PushTransform(t),
            this._mG.drawLine(0, 0, 1, 0, u.box2d.b2Color.RED.MakeStyleString(1), this.lineWidth),
            this._mG.drawLine(0, 0, 0, 1, u.box2d.b2Color.GREEN.MakeStyleString(1), this.lineWidth),
            this.PopTransform(t));
        }
        DrawPoint(t, e, n) {
          e *= this._camera.m_zoom;
          var o = (e /= this._camera.m_extent) / 2;
          this._mG.drawRect(t.x - o, t.y - o, e, e, n.MakeStyleString(), null);
        }
        DrawString(t, e, n) {
          this._textG.fillText(
            n,
            t,
            e,
            "15px DroidSans",
            u.DrawString_s_color.MakeStyleString(),
            "left",
          );
        }
        DrawStringWorld(t, e, n) {
          this.DrawString(t, e, n);
        }
        DrawAABB(t, e) {
          var n = t.lowerBound.x,
            o = t.lowerBound.y,
            i = t.upperBound.x - t.lowerBound.x,
            _ = t.upperBound.y - t.lowerBound.y;
          this._mG.drawRect(n, o, i, _, null, e.MakeStyleString(), this.lineWidth);
        }
        static enable(t = 99) {
          if (!u.I) {
            var n = new u();
            ((n.world = _.I.world),
              n.world.SetDebugDraw(n.constructJSDraw()),
              (n.zOrder = 1e3),
              (n.m_drawFlags = t),
              e.Laya.stage.addChild(n),
              (u.I = n));
          }
          return n;
        }
      }
      ((u._inited = !1),
        e.ClassUtils.regClass("laya.physics.PhysicsDebugDraw", u),
        e.ClassUtils.regClass("Laya.PhysicsDebugDraw", u));
      class a extends o {
        constructor() {
          (super(...arguments),
            (this._x = 0),
            (this._y = 0),
            (this._points = "50,0,100,100,0,100"));
        }
        getDef() {
          return (
            this._shape || ((this._shape = new window.box2d.b2PolygonShape()), this._setShape(!1)),
            (this.label = this.label || "PolygonCollider"),
            super.getDef()
          );
        }
        _setShape(t = !0) {
          var e = this._points.split(","),
            n = e.length;
          if (n < 6) throw "PolygonCollider points must be greater than 3";
          if (n % 2 == 1) throw "PolygonCollider points lenth must a multiplier of 2";
          var o = [];
          const i = window.box2d;
          for (var r = 0, p = n; r < p; r += 2)
            o.push(
              new i.b2Vec2(
                (this._x + parseInt(e[r])) / _.PIXEL_RATIO,
                (this._y + parseInt(e[r + 1])) / _.PIXEL_RATIO,
              ),
            );
          (this._shape.Set(o, n / 2), t && this.refresh());
        }
        get x() {
          return this._x;
        }
        set x(t) {
          ((this._x = t), this._shape && this._setShape());
        }
        get y() {
          return this._y;
        }
        set y(t) {
          ((this._y = t), this._shape && this._setShape());
        }
        get points() {
          return this._points;
        }
        set points(t) {
          if (!t) throw "PolygonCollider points cannot be empty";
          ((this._points = t), this._shape && this._setShape());
        }
      }
      (e.ClassUtils.regClass("laya.physics.PolygonCollider", a),
        e.ClassUtils.regClass("Laya.PolygonCollider", a));
      class l extends e.Component {
        get joint() {
          return (this._joint || this._createJoint(), this._joint);
        }
        _onEnable() {
          this._createJoint();
        }
        _onAwake() {
          this._createJoint();
        }
        _createJoint() {}
        _onDisable() {
          (this._joint && this._joint.m_userData && this._joint.m_userData.isDestroy,
            (this._joint = null));
        }
        get isSingleton() {
          return !1;
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.JointBase", l),
        e.ClassUtils.regClass("Laya.JointBase", l));
      class y extends l {
        constructor() {
          (super(...arguments),
            (this.selfAnchor = [0, 0]),
            (this.otherAnchor = [0, 0]),
            (this.collideConnected = !1),
            (this._length = 0),
            (this._maxLength = -1),
            (this._minLength = -1),
            (this._frequency = 1),
            (this._dampingRatio = 0));
        }
        _createJoint() {
          if (!this._joint) {
            if (((this.selfBody = this.selfBody || this.owner.getComponent(i)), !this.selfBody))
              throw "selfBody can not be empty";
            var t = window.box2d,
              e = y._temp || (y._temp = new t.b2DistanceJointDef());
            ((e.bodyA = this.otherBody ? this.otherBody.getBody() : _.I._emptyBody),
              (e.bodyB = this.selfBody.getBody()));
            var n = this.otherAnchor[0] / _.PIXEL_RATIO,
              o = this.otherAnchor[1] / _.PIXEL_RATIO;
            e.localAnchorA.Set(n, o);
            var r = this.selfAnchor[0] / _.PIXEL_RATIO,
              p = this.selfAnchor[1] / _.PIXEL_RATIO;
            (e.localAnchorB.Set(r, p),
              t.b2LinearStiffness(e, this._frequency, this._dampingRatio, e.bodyA, e.bodyB),
              (e.collideConnected = this.collideConnected));
            var s = _._v2;
            (s.Set(n, o), (s = e.bodyA.GetWorldPoint(s)));
            var c = new t.b2Vec2(s.x, s.y);
            (s.Set(r, p), (s = e.bodyB.GetWorldPoint(s)));
            var u = new t.b2Vec2(s.x, s.y);
            ((e.length = this._length / _.PIXEL_RATIO || t.b2Vec2.SubVV(u, c, s).Length()),
              (this._length = e.length * _.PIXEL_RATIO),
              (e.maxLength = t.b2_maxFloat),
              (e.minLength = 0),
              this._maxLength >= 0 && (e.maxLength = this._maxLength / _.PIXEL_RATIO),
              this._minLength >= 0 && (e.minLength = this._minLength / _.PIXEL_RATIO),
              (this._joint = _.I._createJoint(e)));
          }
        }
        get length() {
          return this._length;
        }
        set length(t) {
          ((this._length = t), this._joint && this._joint.SetLength(t / _.PIXEL_RATIO));
        }
        get minLength() {
          return this._minLength;
        }
        set minLength(t) {
          this._minLength = t;
        }
        get maxLength() {
          return this._maxLength;
        }
        set maxLength(t) {
          this._maxLength = t;
        }
        get frequency() {
          return this._frequency;
        }
        set frequency(t) {
          if (((this._frequency = t), this._joint)) {
            let t = {},
              e = window.box2d,
              n = this.otherBody ? this.otherBody.getBody() : _.I._emptyBody,
              o = this.selfBody.getBody();
            (e.b2LinearStiffness(t, this._frequency, this._dampingRatio, n, o),
              this._joint.SetStiffness(t.stiffness),
              this._joint.SetDamping(t.damping));
          }
        }
        get damping() {
          return this._dampingRatio;
        }
        set damping(t) {
          if (((this._dampingRatio = t), this._joint)) {
            let t = {},
              e = window.box2d,
              n = this.otherBody ? this.otherBody.getBody() : _.I._emptyBody,
              o = this.selfBody.getBody();
            (e.b2LinearStiffness(t, this._frequency, this._dampingRatio, n, o),
              this._joint.SetDamping(t.damping));
          }
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.DistanceJoint", y),
        e.ClassUtils.regClass("Laya.DistanceJoint", y));
      class b extends l {
        constructor() {
          (super(...arguments), (this.collideConnected = !1), (this._ratio = 1));
        }
        _createJoint() {
          if (!this._joint) {
            if (!this.joint1) throw "Joint1 can not be empty";
            if (!this.joint2) throw "Joint2 can not be empty";
            var t = window.box2d,
              e = b._temp || (b._temp = new t.b2GearJointDef());
            ((e.bodyA = this.joint1.owner.getComponent(i).getBody()),
              (e.bodyB = this.joint2.owner.getComponent(i).getBody()),
              (e.joint1 = this.joint1.joint),
              (e.joint2 = this.joint2.joint),
              (e.ratio = this._ratio),
              (e.collideConnected = this.collideConnected),
              (this._joint = _.I._createJoint(e)));
          }
        }
        get ratio() {
          return this._ratio;
        }
        set ratio(t) {
          ((this._ratio = t), this._joint && this._joint.SetRatio(t));
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.GearJoint", b),
        e.ClassUtils.regClass("Laya.GearJoint", b));
      class d extends l {
        constructor() {
          (super(...arguments),
            (this.collideConnected = !1),
            (this._linearOffset = [0, 0]),
            (this._angularOffset = 0),
            (this._maxForce = 1e3),
            (this._maxTorque = 1e3),
            (this._correctionFactor = 0.3));
        }
        _createJoint() {
          if (!this._joint) {
            if (!this.otherBody) throw "otherBody can not be empty";
            if (((this.selfBody = this.selfBody || this.owner.getComponent(i)), !this.selfBody))
              throw "selfBody can not be empty";
            var t = window.box2d,
              e = d._temp || (d._temp = new t.b2MotorJointDef());
            (e.Initialize(this.otherBody.getBody(), this.selfBody.getBody()),
              (e.linearOffset = new t.b2Vec2(
                this._linearOffset[0] / _.PIXEL_RATIO,
                this._linearOffset[1] / _.PIXEL_RATIO,
              )),
              (e.angularOffset = this._angularOffset),
              (e.maxForce = this._maxForce),
              (e.maxTorque = this._maxTorque),
              (e.correctionFactor = this._correctionFactor),
              (e.collideConnected = this.collideConnected),
              (this._joint = _.I._createJoint(e)));
          }
        }
        get linearOffset() {
          return this._linearOffset;
        }
        set linearOffset(t) {
          ((this._linearOffset = t),
            this._joint &&
              (_._v2.Set(t[0] / _.PIXEL_RATIO, t[1] / _.PIXEL_RATIO),
              this._joint.SetLinearOffset(_._v2)));
        }
        get angularOffset() {
          return this._angularOffset;
        }
        set angularOffset(t) {
          ((this._angularOffset = t), this._joint && this._joint.SetAngularOffset(t));
        }
        get maxForce() {
          return this._maxForce;
        }
        set maxForce(t) {
          ((this._maxForce = t), this._joint && this._joint.SetMaxForce(t));
        }
        get maxTorque() {
          return this._maxTorque;
        }
        set maxTorque(t) {
          ((this._maxTorque = t), this._joint && this._joint.SetMaxTorque(t));
        }
        get correctionFactor() {
          return this._correctionFactor;
        }
        set correctionFactor(t) {
          ((this._correctionFactor = t), this._joint && this._joint.SetCorrectionFactor(t));
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.MotorJoint", d),
        e.ClassUtils.regClass("Laya.MotorJoint", d));
      class m extends l {
        constructor() {
          (super(...arguments),
            (this._maxForce = 1e4),
            (this._frequency = 5),
            (this._dampingRatio = 0.7));
        }
        _onEnable() {
          this.owner.on(e.Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        _onAwake() {}
        onMouseDown() {
          (this._createJoint(),
            e.Laya.stage.on(e.Event.MOUSE_MOVE, this, this.onMouseMove),
            e.Laya.stage.once(e.Event.MOUSE_UP, this, this.onStageMouseUp),
            e.Laya.stage.once(e.Event.MOUSE_OUT, this, this.onStageMouseUp));
        }
        _createJoint() {
          if (!this._joint) {
            if (((this.selfBody = this.selfBody || this.owner.getComponent(i)), !this.selfBody))
              throw "selfBody can not be empty";
            var t = window.box2d,
              n = m._temp || (m._temp = new t.b2MouseJointDef());
            if (this.anchor)
              var o = this.selfBody.owner.localToGlobal(
                e.Point.TEMP.setTo(this.anchor[0], this.anchor[1]),
                !1,
                _.I.worldRoot,
              );
            else
              o = _.I.worldRoot.globalToLocal(
                e.Point.TEMP.setTo(e.Laya.stage.mouseX, e.Laya.stage.mouseY),
              );
            var r = new t.b2Vec2(o.x / _.PIXEL_RATIO, o.y / _.PIXEL_RATIO);
            ((n.bodyA = _.I._emptyBody),
              (n.bodyB = this.selfBody.getBody()),
              (n.target = r),
              t.b2LinearStiffness(n, this._frequency, this._dampingRatio, n.bodyA, n.bodyB),
              (n.maxForce = this._maxForce),
              (this._joint = _.I._createJoint(n)));
          }
        }
        onStageMouseUp() {
          (e.Laya.stage.off(e.Event.MOUSE_MOVE, this, this.onMouseMove),
            e.Laya.stage.off(e.Event.MOUSE_UP, this, this.onStageMouseUp),
            e.Laya.stage.off(e.Event.MOUSE_OUT, this, this.onStageMouseUp),
            super._onDisable());
        }
        onMouseMove() {
          (_._v2.Set(_.I.worldRoot.mouseX / _.PIXEL_RATIO, _.I.worldRoot.mouseY / _.PIXEL_RATIO),
            this._joint.SetTarget(_._v2));
        }
        _onDisable() {
          (this.owner.off(e.Event.MOUSE_DOWN, this, this.onMouseDown), super._onDisable());
        }
        get maxForce() {
          return this._maxForce;
        }
        set maxForce(t) {
          ((this._maxForce = t), this._joint && this._joint.SetMaxForce(t));
        }
        get frequency() {
          return this._frequency;
        }
        set frequency(t) {
          if (((this._frequency = t), this._joint)) {
            let t = {},
              e = window.box2d,
              n = _.I._emptyBody,
              o = this.selfBody.getBody();
            (e.b2LinearStiffness(t, this._frequency, this._dampingRatio, n, o),
              this._joint.SetStiffness(t.stiffness),
              this._joint.SetDamping(t.damping));
          }
        }
        get damping() {
          return this._dampingRatio;
        }
        set damping(t) {
          if (((this._dampingRatio = t), this._joint)) {
            let t = {},
              e = window.box2d,
              n = _.I._emptyBody,
              o = this.selfBody.getBody();
            (e.b2LinearStiffness(t, this._frequency, this._dampingRatio, n, o),
              this._joint.SetDamping(t.damping));
          }
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.MouseJoint", m),
        e.ClassUtils.regClass("Laya.MouseJoint", m));
      class f extends l {
        constructor() {
          (super(...arguments),
            (this.anchor = [0, 0]),
            (this.axis = [1, 0]),
            (this.collideConnected = !1),
            (this._enableMotor = !1),
            (this._motorSpeed = 0),
            (this._maxMotorForce = 1e4),
            (this._enableLimit = !1),
            (this._lowerTranslation = 0),
            (this._upperTranslation = 0));
        }
        _createJoint() {
          if (!this._joint) {
            if (((this.selfBody = this.selfBody || this.owner.getComponent(i)), !this.selfBody))
              throw "selfBody can not be empty";
            var t = window.box2d,
              n = f._temp || (f._temp = new t.b2PrismaticJointDef()),
              o = this.selfBody.owner.localToGlobal(
                e.Point.TEMP.setTo(this.anchor[0], this.anchor[1]),
                !1,
                _.I.worldRoot,
              ),
              r = new t.b2Vec2(o.x / _.PIXEL_RATIO, o.y / _.PIXEL_RATIO);
            (n.Initialize(
              this.otherBody ? this.otherBody.getBody() : _.I._emptyBody,
              this.selfBody.getBody(),
              r,
              new t.b2Vec2(this.axis[0], this.axis[1]),
            ),
              (n.enableMotor = this._enableMotor),
              (n.motorSpeed = this._motorSpeed),
              (n.maxMotorForce = this._maxMotorForce),
              (n.enableLimit = this._enableLimit),
              (n.lowerTranslation = this._lowerTranslation / _.PIXEL_RATIO),
              (n.upperTranslation = this._upperTranslation / _.PIXEL_RATIO),
              (n.collideConnected = this.collideConnected),
              (this._joint = _.I._createJoint(n)));
          }
        }
        get enableMotor() {
          return this._enableMotor;
        }
        set enableMotor(t) {
          ((this._enableMotor = t), this._joint && this._joint.EnableMotor(t));
        }
        get motorSpeed() {
          return this._motorSpeed;
        }
        set motorSpeed(t) {
          ((this._motorSpeed = t), this._joint && this._joint.SetMotorSpeed(t));
        }
        get maxMotorForce() {
          return this._maxMotorForce;
        }
        set maxMotorForce(t) {
          ((this._maxMotorForce = t), this._joint && this._joint.SetMaxMotorForce(t));
        }
        get enableLimit() {
          return this._enableLimit;
        }
        set enableLimit(t) {
          ((this._enableLimit = t), this._joint && this._joint.EnableLimit(t));
        }
        get lowerTranslation() {
          return this._lowerTranslation;
        }
        set lowerTranslation(t) {
          ((this._lowerTranslation = t),
            this._joint && this._joint.SetLimits(t, this._upperTranslation));
        }
        get upperTranslation() {
          return this._upperTranslation;
        }
        set upperTranslation(t) {
          ((this._upperTranslation = t),
            this._joint && this._joint.SetLimits(this._lowerTranslation, t));
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.PrismaticJoint", f),
        e.ClassUtils.regClass("Laya.PrismaticJoint", f));
      class h extends l {
        constructor() {
          (super(...arguments),
            (this.selfAnchor = [0, 0]),
            (this.otherAnchor = [0, 0]),
            (this.selfGroundPoint = [0, 0]),
            (this.otherGroundPoint = [0, 0]),
            (this.ratio = 1.5),
            (this.collideConnected = !1));
        }
        _createJoint() {
          if (!this._joint) {
            if (!this.otherBody) throw "otherBody can not be empty";
            if (((this.selfBody = this.selfBody || this.owner.getComponent(i)), !this.selfBody))
              throw "selfBody can not be empty";
            var t = window.box2d,
              n = h._temp || (h._temp = new t.b2PulleyJointDef()),
              o = this.otherBody.owner.localToGlobal(
                e.Point.TEMP.setTo(this.otherAnchor[0], this.otherAnchor[1]),
                !1,
                _.I.worldRoot,
              ),
              r = new t.b2Vec2(o.x / _.PIXEL_RATIO, o.y / _.PIXEL_RATIO),
              p = this.selfBody.owner.localToGlobal(
                e.Point.TEMP.setTo(this.selfAnchor[0], this.selfAnchor[1]),
                !1,
                _.I.worldRoot,
              ),
              s = new t.b2Vec2(p.x / _.PIXEL_RATIO, p.y / _.PIXEL_RATIO),
              c = this.otherBody.owner.localToGlobal(
                e.Point.TEMP.setTo(this.otherGroundPoint[0], this.otherGroundPoint[1]),
                !1,
                _.I.worldRoot,
              ),
              u = new t.b2Vec2(c.x / _.PIXEL_RATIO, c.y / _.PIXEL_RATIO),
              a = this.selfBody.owner.localToGlobal(
                e.Point.TEMP.setTo(this.selfGroundPoint[0], this.selfGroundPoint[1]),
                !1,
                _.I.worldRoot,
              ),
              l = new t.b2Vec2(a.x / _.PIXEL_RATIO, a.y / _.PIXEL_RATIO);
            (n.Initialize(
              this.otherBody.getBody(),
              this.selfBody.getBody(),
              u,
              l,
              r,
              s,
              this.ratio,
            ),
              (n.collideConnected = this.collideConnected),
              (this._joint = _.I._createJoint(n)));
          }
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.PulleyJoint", h),
        e.ClassUtils.regClass("Laya.PulleyJoint", h));
      class g extends l {
        constructor() {
          (super(...arguments),
            (this.anchor = [0, 0]),
            (this.collideConnected = !1),
            (this._enableMotor = !1),
            (this._motorSpeed = 0),
            (this._maxMotorTorque = 1e4),
            (this._enableLimit = !1),
            (this._lowerAngle = 0),
            (this._upperAngle = 0));
        }
        _createJoint() {
          if (!this._joint) {
            if (((this.selfBody = this.selfBody || this.owner.getComponent(i)), !this.selfBody))
              throw "selfBody can not be empty";
            var t = window.box2d,
              n = g._temp || (g._temp = new t.b2RevoluteJointDef()),
              o = this.selfBody.owner.localToGlobal(
                e.Point.TEMP.setTo(this.anchor[0], this.anchor[1]),
                !1,
                _.I.worldRoot,
              ),
              r = new t.b2Vec2(o.x / _.PIXEL_RATIO, o.y / _.PIXEL_RATIO);
            (n.Initialize(
              this.otherBody ? this.otherBody.getBody() : _.I._emptyBody,
              this.selfBody.getBody(),
              r,
            ),
              (n.enableMotor = this._enableMotor),
              (n.motorSpeed = this._motorSpeed),
              (n.maxMotorTorque = this._maxMotorTorque),
              (n.enableLimit = this._enableLimit),
              (n.lowerAngle = this._lowerAngle),
              (n.upperAngle = this._upperAngle),
              (n.collideConnected = this.collideConnected),
              (this._joint = _.I._createJoint(n)));
          }
        }
        get enableMotor() {
          return this._enableMotor;
        }
        set enableMotor(t) {
          ((this._enableMotor = t), this._joint && this._joint.EnableMotor(t));
        }
        get motorSpeed() {
          return this._motorSpeed;
        }
        set motorSpeed(t) {
          ((this._motorSpeed = t), this._joint && this._joint.SetMotorSpeed(t));
        }
        get maxMotorTorque() {
          return this._maxMotorTorque;
        }
        set maxMotorTorque(t) {
          ((this._maxMotorTorque = t), this._joint && this._joint.SetMaxMotorTorque(t));
        }
        get enableLimit() {
          return this._enableLimit;
        }
        set enableLimit(t) {
          ((this._enableLimit = t), this._joint && this._joint.EnableLimit(t));
        }
        get lowerAngle() {
          return this._lowerAngle;
        }
        set lowerAngle(t) {
          ((this._lowerAngle = t), this._joint && this._joint.SetLimits(t, this._upperAngle));
        }
        get upperAngle() {
          return this._upperAngle;
        }
        set upperAngle(t) {
          ((this._upperAngle = t), this._joint && this._joint.SetLimits(this._lowerAngle, t));
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.RevoluteJoint", g),
        e.ClassUtils.regClass("Laya.RevoluteJoint", g));
      class U extends l {
        constructor() {
          (super(...arguments),
            (this.anchor = [0, 0]),
            (this.collideConnected = !1),
            (this._frequency = 5),
            (this._dampingRatio = 0.7));
        }
        _createJoint() {
          if (!this._joint) {
            if (!this.otherBody) throw "otherBody can not be empty";
            if (((this.selfBody = this.selfBody || this.owner.getComponent(i)), !this.selfBody))
              throw "selfBody can not be empty";
            var t = window.box2d,
              n = U._temp || (U._temp = new t.b2WeldJointDef()),
              o = this.selfBody.owner.localToGlobal(
                e.Point.TEMP.setTo(this.anchor[0], this.anchor[1]),
                !1,
                _.I.worldRoot,
              ),
              r = new t.b2Vec2(o.x / _.PIXEL_RATIO, o.y / _.PIXEL_RATIO);
            (n.Initialize(this.otherBody.getBody(), this.selfBody.getBody(), r),
              t.b2AngularStiffness(n, this._frequency, this._dampingRatio, n.bodyA, n.bodyB),
              (n.collideConnected = this.collideConnected),
              (this._joint = _.I._createJoint(n)));
          }
        }
        get frequency() {
          return this._frequency;
        }
        set frequency(t) {
          if (((this._frequency = t), this._joint)) {
            let t = {},
              e = window.box2d,
              n = this.otherBody ? this.otherBody.getBody() : _.I._emptyBody,
              o = this.selfBody.getBody();
            (e.b2AngularStiffness(t, this._frequency, this._dampingRatio, n, o),
              this._joint.SetStiffness(t.stiffness),
              this._joint.SetDamping(t.damping));
          }
        }
        get damping() {
          return this._dampingRatio;
        }
        set damping(t) {
          if (((this._dampingRatio = t), this._joint)) {
            let t = {},
              e = window.box2d,
              n = this.otherBody ? this.otherBody.getBody() : _.I._emptyBody,
              o = this.selfBody.getBody();
            (e.b2AngularStiffness(t, this._frequency, this._dampingRatio, n, o),
              this._joint.SetDamping(t.damping));
          }
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.WeldJoint", U),
        e.ClassUtils.regClass("Laya.WeldJoint", U));
      class w extends l {
        constructor() {
          (super(...arguments),
            (this.anchor = [0, 0]),
            (this.collideConnected = !1),
            (this.axis = [1, 0]),
            (this._frequency = 5),
            (this._dampingRatio = 0.7),
            (this._enableMotor = !1),
            (this._motorSpeed = 0),
            (this._maxMotorTorque = 1e4),
            (this._enableLimit = !0),
            (this._lowerTranslation = 0),
            (this._upperTranslation = 0));
        }
        _createJoint() {
          if (!this._joint) {
            if (!this.otherBody) throw "otherBody can not be empty";
            if (((this.selfBody = this.selfBody || this.owner.getComponent(i)), !this.selfBody))
              throw "selfBody can not be empty";
            var t = window.box2d,
              n = w._temp || (w._temp = new t.b2WheelJointDef()),
              o = this.selfBody.owner.localToGlobal(
                e.Point.TEMP.setTo(this.anchor[0], this.anchor[1]),
                !1,
                _.I.worldRoot,
              ),
              r = new t.b2Vec2(o.x / _.PIXEL_RATIO, o.y / _.PIXEL_RATIO);
            (n.Initialize(
              this.otherBody.getBody(),
              this.selfBody.getBody(),
              r,
              new t.b2Vec2(this.axis[0], this.axis[1]),
            ),
              (n.enableMotor = this._enableMotor),
              (n.motorSpeed = this._motorSpeed),
              (n.maxMotorTorque = this._maxMotorTorque),
              t.b2LinearStiffness(n, this._frequency, this._dampingRatio, n.bodyA, n.bodyB),
              (n.collideConnected = this.collideConnected),
              (n.enableLimit = this._enableLimit),
              (n.lowerTranslation = this._lowerTranslation / _.PIXEL_RATIO),
              (n.upperTranslation = this._upperTranslation / _.PIXEL_RATIO),
              (this._joint = _.I._createJoint(n)));
          }
        }
        get frequency() {
          return this._frequency;
        }
        set frequency(t) {
          if (((this._frequency = t), this._joint)) {
            let t = {},
              e = window.box2d,
              n = this.otherBody ? this.otherBody.getBody() : _.I._emptyBody,
              o = this.selfBody.getBody();
            (e.b2LinearStiffness(t, this._frequency, this._dampingRatio, n, o),
              this._joint.SetStiffness(t.stiffness),
              this._joint.SetDamping(t.damping));
          }
        }
        get damping() {
          return this._dampingRatio;
        }
        set damping(t) {
          if (((this._dampingRatio = t), this._joint)) {
            let t = {},
              e = window.box2d,
              n = this.otherBody ? this.otherBody.getBody() : _.I._emptyBody,
              o = this.selfBody.getBody();
            (e.b2LinearStiffness(t, this._frequency, this._dampingRatio, n, o),
              this._joint.SetDamping(t.damping));
          }
        }
        get enableMotor() {
          return this._enableMotor;
        }
        set enableMotor(t) {
          ((this._enableMotor = t), this._joint && this._joint.EnableMotor(t));
        }
        get motorSpeed() {
          return this._motorSpeed;
        }
        set motorSpeed(t) {
          ((this._motorSpeed = t), this._joint && this._joint.SetMotorSpeed(t));
        }
        get maxMotorTorque() {
          return this._maxMotorTorque;
        }
        set maxMotorTorque(t) {
          ((this._maxMotorTorque = t), this._joint && this._joint.SetMaxMotorTorque(t));
        }
        get enableLimit() {
          return this._enableLimit;
        }
        set enableLimit(t) {
          ((this._enableLimit = t), this._joint && this._joint.EnableLimit(t));
        }
        get lowerTranslation() {
          return this._lowerTranslation;
        }
        set lowerTranslation(t) {
          ((this._lowerTranslation = t),
            this._joint && this._joint.SetLimits(t, this._upperTranslation));
        }
        get upperTranslation() {
          return this._upperTranslation;
        }
        set upperTranslation(t) {
          ((this._upperTranslation = t),
            this._joint && this._joint.SetLimits(this._lowerTranslation, t));
        }
      }
      (e.ClassUtils.regClass("laya.physics.joint.WheelJoint", w),
        e.ClassUtils.regClass("Laya.WheelJoint", w),
        (t.BoxCollider = r),
        (t.ChainCollider = p),
        (t.CircleCollider = s),
        (t.ColliderBase = o),
        (t.DistanceJoint = y),
        (t.EdgeCollider = c),
        (t.GearJoint = b),
        (t.IPhysics = n),
        (t.JointBase = l),
        (t.MotorJoint = d),
        (t.MouseJoint = m),
        (t.Physics = _),
        (t.PhysicsDebugDraw = u),
        (t.PolygonCollider = a),
        (t.PrismaticJoint = f),
        (t.PulleyJoint = h),
        (t.RevoluteJoint = g),
        (t.RigidBody = i),
        (t.WeldJoint = U),
        (t.WheelJoint = w));
    })((window.Laya = window.Laya || {}), Laya),
      (t.b2BodyType = void 0),
      (t.b2_maxFloat = 1e37),
      (t.b2_epsilon = 1e-5),
      (t.b2_epsilon_sq = t.b2_epsilon * t.b2_epsilon));
    const e = 1e-5,
      n = e * e;
    var o = t.b2Vec2;
    ((o.MakeArray = function (t) {
      return (function (t, e) {
        for (var n = [], o = 0; o < t; ++o) n.push(e(o));
        return n;
      })(t, function (t) {
        return new o();
      });
    }),
      (o.AddVV = (t, e, n) => ((n.x = t.x + e.x), (n.y = t.y + e.y), n)),
      (o.SubVV = (t, e, n) => ((n.x = t.x - e.x), (n.y = t.y - e.y), n)),
      (o.MulSV = (t, e, n) => ((n.x = e.x * t), (n.y = e.y * t), n)),
      (o.MulVS = (t, e, n) => ((n.x = t.x * e), (n.y = t.y * e), n)),
      (o.DotVV = function (t, e) {
        return t.x * e.x + t.y * e.y;
      }),
      (o.CrossVV = function (t, e) {
        return t.x * e.y - t.y * e.x;
      }),
      (o.CrossVOne = function (t, e) {
        var n = t.x;
        return ((e.x = t.y), (e.y = -n), e);
      }),
      (o.CrossOneV = function (t, e) {
        var n = t.x;
        return ((e.x = -t.y), (e.y = n), e);
      }),
      (o.MidVV = function (t, e, n) {
        return ((n.x = 0.5 * (t.x + e.x)), (n.y = 0.5 * (t.y + e.y)), n);
      }),
      (o.DistanceVV = function (t, e) {
        var n = t.x - e.x,
          o = t.y - e.y;
        return Math.sqrt(n * n + o * o);
      }),
      (o.NegV = function (t, e) {
        return ((e.x = -t.x), (e.y = -t.y), e);
      }));
    const i = o.prototype;
    ((i.Copy = function (t) {
      return ((this.x = t.x), (this.y = t.y), this);
    }),
      (i.Length = function () {
        const t = this.x,
          e = this.y;
        return Math.sqrt(t * t + e * e);
      }),
      (i.SelfMulAdd = function (t, e) {
        return ((this.x += t * e.x), (this.y += t * e.y), this);
      }),
      (i.SelfMulSub = function (t, e) {
        return ((this.x -= t * e.x), (this.y -= t * e.y), this);
      }),
      (o.s_t0 = new o()),
      (o.s_t1 = new o()));
    var _ = t.b2Rot;
    _.MulTRV = function (t, e, n) {
      var o = t.c,
        i = t.s,
        _ = e.x,
        r = e.y;
      return ((n.x = o * _ + i * r), (n.y = -i * _ + o * r), n);
    };
    var r = t.b2Transform;
    ((r.MulXV = function (t, e, n) {
      var o = t.q.c,
        i = t.q.s,
        _ = e.x,
        r = e.y;
      return ((n.x = o * _ - i * r + t.p.x), (n.y = i * _ + o * r + t.p.y), n);
    }),
      (r.prototype.Copy = function (t) {
        return (this.set_p(t.p), this.set_q(t.q), this);
      }),
      (r.prototype.SetPositionXY = function (t, e) {
        var n = r._v2;
        (n || (n = r._v2 = new o()), n.Set(t, e));
        var i = this.get_q().GetAngle();
        this.Set(n, i);
      }),
      (t.b2CircleShape.prototype.SetupDistanceProxy = function (t, e) {
        ((t.m_vertices = t.m_buffer),
          t.m_vertices[0].Copy(this.m_p),
          (t.m_count = 1),
          (t.m_radius = this.m_radius));
      }),
      (t.b2PolygonShape.prototype.SetupDistanceProxy = function (t, e) {
        var n = (t.m_vertices = []);
        t.m_count = this.m_count;
        for (let e = 0; e < t.m_count; e++) n[e] = this.GetVertex(e);
        t.m_radius = t.m_radius;
      }),
      (t.b2ChainShape.prototype.SetupDistanceProxy = function (t, e) {
        ((t.m_vertices = t.m_buffer),
          t.m_vertices[0].Copy(this.m_vertices[e]),
          e + 1 < this.m_count
            ? t.m_vertices[1].Copy(this.m_vertices[e + 1])
            : t.m_vertices[1].Copy(this.m_vertices[0]),
          (t.m_count = 2),
          (t.m_radius = this.m_radius));
      }),
      (function (t) {
        ((t[(t.b2_unknown = -1)] = "b2_unknown"),
          (t[(t.b2_staticBody = 0)] = "b2_staticBody"),
          (t[(t.b2_kinematicBody = 1)] = "b2_kinematicBody"),
          (t[(t.b2_dynamicBody = 2)] = "b2_dynamicBody"));
      })(t.b2BodyType || (t.b2BodyType = {})),
      (t.b2LinearStiffness = function (t, e, n, o, i) {
        const _ = o.GetMass(),
          r = i.GetMass();
        let p;
        p = _ > 0 && r > 0 ? (_ * r) / (_ + r) : _ > 0 ? _ : r;
        const s = 6.28318530718 * e;
        ((t.stiffness = p * s * s), (t.damping = 2 * p * n * s));
      }),
      (t.b2AngularStiffness = function (t, e, n, o, i) {
        const _ = o.GetInertia(),
          r = i.GetInertia();
        let p;
        p = _ > 0 && r > 0 ? (_ * r) / (_ + r) : _ > 0 ? _ : r;
        const s = 6.28318530718 * e;
        ((t.stiffness = p * s * s), (t.damping = 2 * p * n * s));
      }));
    class p {
      constructor() {
        ((this.m_buffer = o.MakeArray(2)),
          (this.m_vertices = this.m_buffer),
          (this.m_count = 0),
          (this.m_radius = 0));
      }
      Copy(t) {
        return (
          t.m_vertices === t.m_buffer
            ? ((this.m_vertices = this.m_buffer),
              this.m_buffer[0].Copy(t.m_buffer[0]),
              this.m_buffer[1].Copy(t.m_buffer[1]))
            : (this.m_vertices = t.m_vertices),
          (this.m_count = t.m_count),
          (this.m_radius = t.m_radius),
          this
        );
      }
      Reset() {
        return ((this.m_vertices = this.m_buffer), (this.m_count = 0), (this.m_radius = 0), this);
      }
      SetShape(t, e) {
        t.SetupDistanceProxy(this, e);
      }
      SetVerticesRadius(t, e, n) {
        ((this.m_vertices = t), (this.m_count = e), (this.m_radius = n));
      }
      Set(...t) {
        t[0] instanceof box2d.b2Shape
          ? this.SetShape(t[0], t[1])
          : this.SetVerticesRadius(t[0], t[1], t[2]);
      }
      GetSupport(t) {
        let e = 0,
          n = o.DotVV(this.m_vertices[0], t);
        for (let i = 1; i < this.m_count; ++i) {
          const _ = o.DotVV(this.m_vertices[i], t);
          _ > n && ((e = i), (n = _));
        }
        return e;
      }
      GetSupportVertex(t) {
        let e = 0,
          n = o.DotVV(this.m_vertices[0], t);
        for (let i = 1; i < this.m_count; ++i) {
          const _ = o.DotVV(this.m_vertices[i], t);
          _ > n && ((e = i), (n = _));
        }
        return this.m_vertices[e];
      }
      GetVertexCount() {
        return this.m_count;
      }
      GetVertex(t) {
        return this.m_vertices[t];
      }
    }
    let s = 0;
    class c {
      constructor() {
        ((this.wA = new o()),
          (this.wB = new o()),
          (this.w = new o()),
          (this.a = 0),
          (this.indexA = 0),
          (this.indexB = 0));
      }
      Copy(t) {
        return (
          this.wA.Copy(t.wA),
          this.wB.Copy(t.wB),
          this.w.Copy(t.w),
          (this.a = t.a),
          (this.indexA = t.indexA),
          (this.indexB = t.indexB),
          this
        );
      }
    }
    class u {
      constructor() {
        ((this.m_v1 = new c()),
          (this.m_v2 = new c()),
          (this.m_v3 = new c()),
          (this.m_vertices = []),
          (this.m_count = 0),
          (this.m_vertices[0] = this.m_v1),
          (this.m_vertices[1] = this.m_v2),
          (this.m_vertices[2] = this.m_v3));
      }
      ReadCache(t, n, i, _, p) {
        this.m_count = t.count;
        const s = this.m_vertices;
        for (let e = 0; e < this.m_count; ++e) {
          const c = s[e];
          ((c.indexA = t.indexA[e]), (c.indexB = t.indexB[e]));
          const u = n.GetVertex(c.indexA),
            a = _.GetVertex(c.indexB);
          (r.MulXV(i, u, c.wA), r.MulXV(p, a, c.wB), o.SubVV(c.wB, c.wA, c.w), (c.a = 0));
        }
        if (this.m_count > 1) {
          const n = t.metric,
            o = this.GetMetric();
          (o < 0.5 * n || 2 * n < o || o < e) && (this.m_count = 0);
        }
        if (0 === this.m_count) {
          const t = s[0];
          ((t.indexA = 0), (t.indexB = 0));
          const e = n.GetVertex(0),
            c = _.GetVertex(0);
          (r.MulXV(i, e, t.wA),
            r.MulXV(p, c, t.wB),
            o.SubVV(t.wB, t.wA, t.w),
            (t.a = 1),
            (this.m_count = 1));
        }
      }
      WriteCache(t) {
        ((t.metric = this.GetMetric()), (t.count = this.m_count));
        const e = this.m_vertices;
        for (let n = 0; n < this.m_count; ++n)
          ((t.indexA[n] = e[n].indexA), (t.indexB[n] = e[n].indexB));
      }
      GetSearchDirection(t) {
        switch (this.m_count) {
          case 1:
            return o.NegV(this.m_v1.w, t);
          case 2: {
            const e = o.SubVV(this.m_v2.w, this.m_v1.w, t);
            return o.CrossVV(e, o.NegV(this.m_v1.w, o.s_t0)) > 0
              ? o.CrossOneV(e, t)
              : o.CrossVOne(e, t);
          }
          default:
            return t.SetZero();
        }
      }
      GetClosestPoint(t) {
        switch (this.m_count) {
          case 0:
            return t.SetZero();
          case 1:
            return t.Copy(this.m_v1.w);
          case 2:
            return t.Set(
              this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x,
              this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y,
            );
          case 3:
          default:
            return t.SetZero();
        }
      }
      GetWitnessPoints(t, e) {
        switch (this.m_count) {
          case 0:
            break;
          case 1:
            (t.Copy(this.m_v1.wA), e.Copy(this.m_v1.wB));
            break;
          case 2:
            ((t.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x),
              (t.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y),
              (e.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x),
              (e.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y));
            break;
          case 3:
            ((e.x = t.x =
              this.m_v1.a * this.m_v1.wA.x +
              this.m_v2.a * this.m_v2.wA.x +
              this.m_v3.a * this.m_v3.wA.x),
              (e.y = t.y =
                this.m_v1.a * this.m_v1.wA.y +
                this.m_v2.a * this.m_v2.wA.y +
                this.m_v3.a * this.m_v3.wA.y));
        }
      }
      GetMetric() {
        switch (this.m_count) {
          case 0:
          case 1:
            return 0;
          case 2:
            return o.DistanceVV(this.m_v1.w, this.m_v2.w);
          case 3:
            return o.CrossVV(
              o.SubVV(this.m_v2.w, this.m_v1.w, o.s_t0),
              o.SubVV(this.m_v3.w, this.m_v1.w, o.s_t1),
            );
          default:
            return 0;
        }
      }
      Solve2() {
        const t = this.m_v1.w,
          e = this.m_v2.w,
          n = o.SubVV(e, t, u.s_e12),
          i = -o.DotVV(t, n);
        if (i <= 0) return ((this.m_v1.a = 1), void (this.m_count = 1));
        const _ = o.DotVV(e, n);
        if (_ <= 0) return ((this.m_v2.a = 1), (this.m_count = 1), void this.m_v1.Copy(this.m_v2));
        const r = 1 / (_ + i);
        ((this.m_v1.a = _ * r), (this.m_v2.a = i * r), (this.m_count = 2));
      }
      Solve3() {
        const t = this.m_v1.w,
          e = this.m_v2.w,
          n = this.m_v3.w,
          i = o.SubVV(e, t, u.s_e12),
          _ = o.DotVV(t, i),
          r = o.DotVV(e, i),
          p = -_,
          s = o.SubVV(n, t, u.s_e13),
          c = o.DotVV(t, s),
          a = o.DotVV(n, s),
          l = -c,
          y = o.SubVV(n, e, u.s_e23),
          b = o.DotVV(e, y),
          d = o.DotVV(n, y),
          m = -b,
          f = o.CrossVV(i, s),
          h = f * o.CrossVV(e, n),
          g = f * o.CrossVV(n, t),
          U = f * o.CrossVV(t, e);
        if (p <= 0 && l <= 0) return ((this.m_v1.a = 1), void (this.m_count = 1));
        if (r > 0 && p > 0 && U <= 0) {
          const t = 1 / (r + p);
          return ((this.m_v1.a = r * t), (this.m_v2.a = p * t), void (this.m_count = 2));
        }
        if (a > 0 && l > 0 && g <= 0) {
          const t = 1 / (a + l);
          return (
            (this.m_v1.a = a * t),
            (this.m_v3.a = l * t),
            (this.m_count = 2),
            void this.m_v2.Copy(this.m_v3)
          );
        }
        if (r <= 0 && m <= 0)
          return ((this.m_v2.a = 1), (this.m_count = 1), void this.m_v1.Copy(this.m_v2));
        if (a <= 0 && d <= 0)
          return ((this.m_v3.a = 1), (this.m_count = 1), void this.m_v1.Copy(this.m_v3));
        if (d > 0 && m > 0 && h <= 0) {
          const t = 1 / (d + m);
          return (
            (this.m_v2.a = d * t),
            (this.m_v3.a = m * t),
            (this.m_count = 2),
            void this.m_v1.Copy(this.m_v3)
          );
        }
        const w = 1 / (h + g + U);
        ((this.m_v1.a = h * w), (this.m_v2.a = g * w), (this.m_v3.a = U * w), (this.m_count = 3));
      }
    }
    ((u.s_e12 = new o()), (u.s_e13 = new o()), (u.s_e23 = new o()));
    const a = new u(),
      l = [0, 0, 0],
      y = [0, 0, 0],
      b = new o(),
      d = new o(),
      m = new o(),
      f = new o(),
      h = new o();
    const g = new (class {
        constructor() {
          ((this.proxyA = new p()),
            (this.proxyB = new p()),
            (this.transformA = new r()),
            (this.transformB = new r()),
            (this.useRadii = !1));
        }
        Reset() {
          return (
            this.proxyA.Reset(),
            this.proxyB.Reset(),
            this.transformA.SetIdentity(),
            this.transformB.SetIdentity(),
            (this.useRadii = !1),
            this
          );
        }
      })(),
      U = new (class {
        constructor() {
          ((this.metric = 0),
            (this.count = 0),
            (this.indexA = [0, 0, 0]),
            (this.indexB = [0, 0, 0]));
        }
        Reset() {
          return ((this.metric = 0), (this.count = 0), this);
        }
      })(),
      w = new (class {
        constructor() {
          ((this.pointA = new o()),
            (this.pointB = new o()),
            (this.distance = 0),
            (this.iterations = 0));
        }
        Reset() {
          return (
            this.pointA.SetZero(),
            this.pointB.SetZero(),
            (this.distance = 0),
            (this.iterations = 0),
            this
          );
        }
      })();
    ((t.b2TestOverlapShape = function (t, i, p, c, u, J) {
      const D = g.Reset();
      (D.proxyA.SetShape(t, i),
        D.proxyB.SetShape(p, c),
        D.transformA.Copy(u),
        D.transformB.Copy(J),
        (D.useRadii = !0));
      const v = U.Reset();
      v.count = 0;
      const S = w.Reset();
      return (
        (function (t, i, p) {
          0;
          const c = p.proxyA,
            u = p.proxyB,
            g = p.transformA,
            U = p.transformB,
            w = a;
          w.ReadCache(i, c, g, u, U);
          const J = w.m_vertices,
            D = l,
            v = y;
          let S = 0,
            A = 0;
          for (; A < 20;) {
            S = w.m_count;
            for (let t = 0; t < S; ++t) ((D[t] = J[t].indexA), (v[t] = J[t].indexB));
            switch (w.m_count) {
              case 1:
                break;
              case 2:
                w.Solve2();
                break;
              case 3:
                w.Solve3();
            }
            if (3 === w.m_count) break;
            const t = w.GetSearchDirection(d);
            if (t.LengthSquared() < n) break;
            const e = J[w.m_count];
            ((e.indexA = c.GetSupport(_.MulTRV(g.q, o.NegV(t, o.s_t0), f))),
              r.MulXV(g, c.GetVertex(e.indexA), e.wA),
              (e.indexB = u.GetSupport(_.MulTRV(U.q, t, h))),
              r.MulXV(U, u.GetVertex(e.indexB), e.wB),
              o.SubVV(e.wB, e.wA, e.w),
              ++A,
              0);
            let i = !1;
            for (let t = 0; t < S; ++t)
              if (e.indexA === D[t] && e.indexB === v[t]) {
                i = !0;
                break;
              }
            if (i) break;
            ++w.m_count;
          }
          var x, B;
          if (
            ((s = (x = s) > (B = A) ? x : B),
            w.GetWitnessPoints(t.pointA, t.pointB),
            (t.distance = o.DistanceVV(t.pointA, t.pointB)),
            (t.iterations = A),
            w.WriteCache(i),
            p.useRadii)
          ) {
            const n = c.m_radius,
              i = u.m_radius;
            if (t.distance > n + i && t.distance > e) {
              t.distance -= n + i;
              const e = o.SubVV(t.pointB, t.pointA, m);
              (e.Normalize(), t.pointA.SelfMulAdd(n, e), t.pointB.SelfMulSub(i, e));
            } else {
              const e = o.MidVV(t.pointA, t.pointB, b);
              (t.pointA.Copy(e), t.pointB.Copy(e), (t.distance = 0));
            }
          }
        })(S, v, D),
        S.distance < 10 * e
      );
    }),
      (window.box2d = t),
      (Laya.Physics._v2 = new o()));
  };
});
