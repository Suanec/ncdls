define("libs/min/utils.min.js", function (require, module, exports) {
  window.Utils = (function (x) {
    "use strict";
    var r,
      R,
      X,
      Y = function (t, a, o, l) {
        return new (o = o || Promise)(function (n, e) {
          function r(t) {
            try {
              s(l.next(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            try {
              s(l.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function s(t) {
            var e;
            t.done
              ? n(t.value)
              : ((e = t.value) instanceof o
                  ? e
                  : new o(function (t) {
                      t(e);
                    })
                ).then(r, i);
          }
          s((l = l.apply(t, a || [])).next());
        });
      };
    function l(t, e, n) {
      if (t < (e = isNaN(e) ? t : e)) {
        if (e <= (t += n)) return e;
      } else if (e < t && (t -= n) <= e) return e;
      return t;
    }
    function s(t, e) {
      return String(t).length < e ? (Array(e).join("0") + t).slice(-e) : String(t);
    }
    function O(t) {
      ((this.array = t), (this.pos = 0));
    }
    function G() {
      return (
        "object" == typeof process &&
        "object" == typeof process.versions &&
        void 0 !== process.versions.node
      );
    }
    function Z(t) {
      return t instanceof Uint8Array && (!G() || !Buffer.isBuffer(t));
    }
    function I(t) {
      return t instanceof ArrayBuffer;
    }
    function F(t, e) {
      if (!(Z(t) || I(t) || ((r = t), G() && Buffer.isBuffer(r)))) throw new TypeError(X);
      var n,
        r = !1,
        i = !1,
        t = (Z(t) ? (r = !0) : I(t) && ((i = !0), (t = new Uint8Array(t))), new O(t)),
        s = t.readUncompressedLength();
      if (-1 === s) throw new Error("Invalid Snappy bitstream");
      if (e < s) throw new Error(`The uncompressed length of ${s} is too big, expect at most ` + e);
      if (r) {
        if (((n = new Uint8Array(s)), !t.uncompressToBuffer(n)))
          throw new Error("Invalid Snappy bitstream");
      } else if (i) {
        if (((n = new ArrayBuffer(s)), (e = new Uint8Array(n)), !t.uncompressToBuffer(e)))
          throw new Error("Invalid Snappy bitstream");
      } else if (((n = Buffer.alloc(s)), !t.uncompressToBuffer(n)))
        throw new Error("Invalid Snappy bitstream");
      return n;
    }
    ((x.Async = void 0),
      ((r = x.Async || (x.Async = {})).later = function () {
        return new Promise((t, e) => Laya.timer.callLater(null, t));
      }),
      (r.once = function (n) {
        return new Promise((t, e) => Laya.timer.once(n, null, t));
      }),
      (r.frame = function (n) {
        return new Promise((t, e) => Laya.timer.frameOnce(n, null, t));
      }),
      (r.tween = function (n, r, i, s, a) {
        return new Promise((t, e) =>
          Laya.Tween.to(
            n,
            r,
            i,
            s,
            Laya.Handler.create(null, () => (a && a.run(), t(null))),
          ),
        );
      }),
      (r.tweens = function (r, t) {
        let e = Promise.resolve();
        return (
          t.forEach(
            (n) =>
              (e = e
                .then(
                  () =>
                    new Promise((t, e) =>
                      Laya.Tween.to(
                        r,
                        n.props,
                        n.duration,
                        n.ease,
                        Laya.Handler.create(null, () => (n.handler && n.handler.run(), t(null))),
                      ),
                    ),
                )
                .then()),
          ),
          e
        );
      }),
      (r.to = function (n, r) {
        return new Promise((t, e) => r.call(n, t, e));
      }),
      (r.list = function (t) {
        let e = Promise.resolve();
        return (
          t.forEach(([n, r]) => (e = e.then(() => new Promise((t, e) => r.call(n, t, e))).then())),
          e
        );
      }),
      (r.all = function (t) {
        let e = [];
        return (
          t.forEach(([n, r]) => e.push(new Promise((t, e) => r.call(n, t, e)))),
          Promise.all(e)
        );
      }),
      (r.recursive = function (e, n) {
        return Y(this, void 0, void 0, function* () {
          if (!1 !== (yield n(e)))
            for (let t = 0; t < e.numChildren; t++) yield r.recursive(e.getChildAt(t), n);
        });
      }),
      (x.Decode = void 0),
      (N = x.Decode || (x.Decode = {})),
      (R = [0, 255, 65535, 16777215, 4294967295]),
      (O.prototype.readUncompressedLength = function () {
        for (var t, e, n = 0, r = 0; r < 32 && this.pos < this.array.length;) {
          if (((t = this.array[this.pos]), (this.pos += 1), ((e = 127 & t) << r) >>> r != e))
            return -1;
          if (((n |= e << r), t < 128)) return n;
          r += 7;
        }
        return -1;
      }),
      (O.prototype.uncompressToBuffer = function (t) {
        for (var e, n, r, i, s = this.array, a = s.length, o = this.pos, l = 0; o < s.length;) {
          if (((e = s[o]), (o += 1), 0 == (3 & e))) {
            if (60 < (n = 1 + (e >>> 2))) {
              if (a <= o + 3) return !1;
              ((r = n - 60),
                (n =
                  1 + ((n = s[o] + (s[o + 1] << 8) + (s[o + 2] << 16) + (s[o + 3] << 24)) & R[r])),
                (o += r));
            }
            if (a < o + n) return !1;
            y = d = f = u = c = h = void 0;
            for (var h = s, c = o, u = t, f = l, d = n, y = 0; y < d; y++) u[f + y] = h[c + y];
            o += n;
          } else {
            switch (3 & e) {
              case 1:
                ((n = 4 + ((e >>> 2) & 7)), (i = s[o] + ((e >>> 5) << 8)), (o += 1));
                break;
              case 2:
                if (a <= o + 1) return !1;
                ((n = 1 + (e >>> 2)), (i = s[o] + (s[o + 1] << 8)), (o += 2));
                break;
              case 3:
                if (a <= o + 3) return !1;
                ((n = 1 + (e >>> 2)),
                  (i = s[o] + (s[o + 1] << 8) + (s[o + 2] << 16) + (s[o + 3] << 24)),
                  (o += 4));
            }
            if (0 === i || l < i) return !1;
            v = x = m = p = g = void 0;
            for (var g = t, p = l, m = i, x = n, v = 0; v < x; v++) g[p + v] = g[p - m + v];
          }
          l += n;
        }
        return !0;
      }),
      (X = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array"),
      (N.Init = function () {
        ((Laya.Loader.prototype._onLoadImageBuff = function (t, e, n, r, i) {
          var i = F(i, i.length),
            s = new Laya.Browser.window.Image();
          ((s.onerror = function () {
            ((s.onload = null), (s.onerror = null), r.call(n));
          }),
            (s.onload = function () {
              ((s.onload = null), (s.onerror = null), e.call(t, s));
            }),
            (s.src = (function (t) {
              var e = new Uint8Array(t);
              let n = "";
              for (let t = 0; t < e.length; t++) n += String.fromCharCode(e[t]);
              return "data:image/png;base64," + window.btoa(n);
            })(i)));
        }),
          (Laya.Loader.prototype._loadHtmlImage = function (e, t, n, r, i) {
            function s() {
              var t = a;
              ((t.onload = null), (t.onerror = null), delete Laya.Loader._imgCache[e]);
            }
            var a;
            (!e.endsWith(".png") && !e.endsWith(".jpg")) || e.includes("loading/")
              ? (((a = new Laya.Browser.window.Image()).crossOrigin = ""),
                (a.onload = function () {
                  (s(), n.call(t, a));
                }),
                (a.onerror = function () {
                  (s(), i.call(r));
                }),
                (a.src = e),
                (Laya.Loader._imgCache[e] = a))
              : (this._tempHttp || (this._tempHttp = new Laya.HttpRequest()),
                this._tempHttp.on(Laya.Event.COMPLETE, this, this._onLoadImageBuff, [t, n, r, i]),
                this._tempHttp.send(e, null, "get", Laya.Loader.BUFFER));
          }));
      }));
    var N = new (class {
      constructor() {
        ((this._buff_time = []),
          (this._buff_count = []),
          (this._buff_remaining = {}),
          (this._buff_total = {}),
          (this._buff_def = null));
      }
      init(t) {
        this._dispatcher = t;
      }
      initTime(t) {
        this._buff_time = [];
        for (const n of Object.keys(t)) {
          var e = t[n];
          (this._buff_time.push(e),
            (this._buff_remaining[e] = 0),
            this._dispatcher.on(e, this, this.onBuffChange, [e]));
        }
      }
      initCount(t) {
        this._buff_count = [];
        for (const n of Object.keys(t)) {
          var e = t[n];
          (this._buff_count.push(e),
            (this._buff_remaining[e] = 0),
            this._dispatcher.on(e, this, this.onBuffChange, [e]));
        }
      }
      initDefault(t) {
        this._buff_def = t;
      }
      Update(e) {
        for (let t = 0; t < this._buff_time.length; t++) {
          var n = this._buff_time[t];
          0 != this._buff_remaining[n] &&
            ((this._buff_remaining[n] -= e), this._buff_remaining[n] <= 0) &&
            this._dispatcher.event(n, !1);
        }
      }
      onBuffChange(t, e, n) {
        null != this._buff_remaining[t] &&
          (!0 === e
            ? (null != n
                ? (this._buff_remaining[t] = n)
                : this._buff_def && this._buff_def[t]
                  ? (this._buff_remaining[t] = this._buff_def[t])
                  : (this._buff_remaining[t] = 1 / 0),
              (this._buff_total[t] = this._buff_remaining[t]))
            : !1 === e && (this._buff_remaining[t] = 0));
      }
      rate(t) {
        return this._buff_remaining[t] / this._buff_total[t];
      }
      remaining(t) {
        return this._buff_remaining[t];
      }
      running(t) {
        return 0 < this.remaining(t);
      }
      use(t) {
        this._buff_remaining[t] &&
          (this._buff_remaining[t]--, this._buff_remaining[t] <= 0) &&
          this._dispatcher.event(t, !1);
      }
    })();
    ((x.Config = void 0), ((t = x.Config || (x.Config = {})).STORAGE = "Utils"), (t.DEBUG = !1));
    function i(t) {
      t = q + t;
      var e = W.Cache.get(t);
      return (e || W.Cache.set(t, 0), e);
    }
    function a(t, e) {
      ((t = q + t), W.Cache.set(t, e), W.ICache.saveData());
    }
    const q = "game_task_";
    ((x.TaskState = void 0),
      ((t = x.TaskState || (x.TaskState = {}))[(t.Unexecuted = 0)] = "Unexecuted"),
      (t[(t.Executing = 1)] = "Executing"),
      (t[(t.Complete = 2)] = "Complete"));
    var o,
      t = new (class {
        constructor() {
          ((this._binds = []), (this._event = ""));
        }
        init(t, e) {
          ((this._dispatcher = t), (this._event = e));
        }
        initTask(t, e) {
          ((this._tasks = t), e && (this._binds = e));
          for (const r of Object.keys(this._tasks)) {
            var n = this._tasks[r];
            i(n) == x.TaskState.Executing && a(n, x.TaskState.Unexecuted);
          }
        }
        start(t, e = !0, ...n) {
          var r = i(t);
          if (r)
            return (
              r == x.TaskState.Executing
                ? x.Config.DEBUG && console.log("事件执行中:", t)
                : r == x.TaskState.Complete && x.Config.DEBUG && console.log("事件已完成:", t),
              !1
            );
          if (e) {
            r = this.getPrevious(t);
            if (r && !this.complete(r, !1))
              return (x.Config.DEBUG && console.log("前置未启动:", t), !1);
          }
          return (
            a(t, x.TaskState.Executing),
            this._dispatcher.event(this._event, [t, x.TaskState.Executing, ...n]),
            x.Config.DEBUG && console.log("启动事件:", t),
            !0
          );
        }
        restart(t, e = !0, ...n) {
          var r = i(t);
          if (r && r != x.TaskState.Executing)
            return (
              r == x.TaskState.Complete && x.Config.DEBUG && console.log("事件已完成:", t),
              !1
            );
          if (e) {
            r = this.getPrevious(t);
            if (r && !this.complete(r, !1))
              return (x.Config.DEBUG && console.log("前置未启动:", t), !1);
          }
          return (
            a(t, x.TaskState.Executing),
            this._dispatcher.event(this._event, [t, x.TaskState.Executing, ...n]),
            x.Config.DEBUG && console.log("启动事件:", t),
            !0
          );
        }
        state(t) {
          t = i(t);
          return t || x.TaskState.Unexecuted;
        }
        complete(t, e = !0, ...n) {
          var r = i(t);
          if (r) {
            if (r == x.TaskState.Executing)
              return (
                x.Config.DEBUG && console.log("完成事件:", t),
                a(t, x.TaskState.Complete),
                this._dispatcher.event(this._event, [t, x.TaskState.Complete, ...n]),
                e && (n = this.getNext(t)) && this.start(n, !1),
                !0
              );
            if (r == x.TaskState.Complete)
              return (x.Config.DEBUG && console.log("事件已完成:", t), !0);
          } else x.Config.DEBUG && console.log("事件未启动:", t);
          return !1;
        }
        getPrevious(n) {
          if (this._binds && this._binds.length)
            for (const e of this._binds) {
              var t = x.List.getIdx(e, (t, e) => t == n && 0 < e);
              if (null != t) return e[t - 1];
            }
          return null;
        }
        getNext(n) {
          if (this._binds && this._binds.length)
            for (const r of this._binds) {
              var t = x.List.getIdx(r, (t, e) => t == n && e < r.length - 1);
              if (null != t) return r[t + 1];
            }
          return null;
        }
      })();
    class y {
      static save() {
        this.data && Laya.LocalStorage.setJSON(x.Config.STORAGE, this.data);
      }
      constructor(t) {
        ((this.name = t),
          y.data || (y.data = Laya.LocalStorage.getJSON(x.Config.STORAGE)),
          y.data[this.name] || (y.data[this.name] = {}),
          (this.data = y.data[this.name]));
      }
      set(t, e) {
        this.data[t] = e;
      }
      get(t) {
        return this.data[t];
      }
      save() {
        y.save();
      }
    }
    ((y.data = null), (x.Tasks = void 0));
    {
      var n = x.Tasks || (x.Tasks = {});
      let e,
        h =
          (((m = e = n.State || (n.State = {}))[(m.Unexecuted = 0)] = "Unexecuted"),
          (m[(m.Executing = 1)] = "Executing"),
          (m[(m.Complete = 2)] = "Complete"),
          null),
        c = null,
        u,
        f = null,
        d = null;
      function j(t) {
        return d[t];
      }
      ((n.init = function (t, e, n) {
        ((h = t), (c = e), (u = n), (f = new y("Tasks")), (d = {}));
        for (const o of Object.keys(this._tasks)) {
          var r = c[o];
          d[r] = new at(r);
        }
        if (u)
          for (const l of u)
            for (let t = 0; t < l.length; t++) {
              var i = l[t],
                s = l[t - 1],
                a = l[t + 1];
              (s && (d[i]._previous = d[s]), a && (d[i]._next = d[a]));
            }
      }),
        (n.reboot = function () {
          for (const e of Object.keys(this._tasks)) {
            var t = d[c[e]];
            t.isExecuting &&
              (x.Config.DEBUG && console.log("任务重启:", t.name), h.event(this._name, t.name));
          }
        }),
        (n.refresh = function () {
          for (const e of Object.keys(this._tasks)) {
            var t = d[c[e]];
            t.isExecuting && t.unexecuted();
          }
          f.save();
        }),
        (n.get = j),
        (n.previous = function t(e, n) {
          e = j(e);
          return n
            ? n(e)
              ? e
              : e.previous
                ? t(e.previous.name, n)
                : null
            : e.previous
              ? t(e.previous.name, n)
              : this;
        }),
        (n.next = function t(e, n) {
          e = j(e);
          return n
            ? n(e)
              ? e
              : e.next
                ? t(e.next.name, n)
                : null
            : e.next
              ? t(e.next.name, n)
              : this;
        }));
      class at {
        get name() {
          return this._name;
        }
        get previous() {
          return this._previous;
        }
        get next() {
          return this._next;
        }
        get state() {
          return f.get(this._name);
        }
        get isUnexecuted() {
          return f.get(this._name) == e.Unexecuted;
        }
        get isExecuting() {
          return f.get(this._name) == e.Executing;
        }
        get isComplete() {
          return f.get(this._name) == e.Complete;
        }
        constructor(t) {
          ((this._name = null),
            (this._previous = null),
            (this._next = null),
            (this._name = t),
            null == f.get(this._name) && f.set(this._name, e.Unexecuted));
        }
        unexecuted() {
          return (
            x.Config.DEBUG && console.log("重置任务:", this._name),
            f.set(this._name, e.Unexecuted),
            this
          );
        }
        execute(...t) {
          return this.isUnexecuted
            ? this.previous && !this.previous.isComplete
              ? (x.Config.DEBUG &&
                  console.log("前置未完成:", this.previous._name, this.previous.state),
                !1)
              : (x.Config.DEBUG && console.log("任务启动:", this._name, t),
                f.set(this._name, e.Executing),
                f.save(),
                h.event(this._name, t),
                !0)
            : (x.Config.DEBUG && console.log("启动失败:", this._name, this.state), !1);
        }
        complete(...t) {
          return this.isExecuting
            ? (x.Config.DEBUG && console.log("任务完成:", this._name),
              f.set(this._name, e.Complete),
              f.save(),
              h.event(this._name, t),
              !0)
            : (x.Config.DEBUG && console.log("完成失败:", this._name, this.state), !1);
        }
      }
    }
    ((x.Event = void 0),
      ((x.Event || (x.Event = {})).bind = function (t, e, n) {
        for (const i of Object.keys(n)) {
          var r = n[i];
          null != e[r] && "function" == typeof e[r] && t.on(r, e, e[r]);
        }
      }),
      (x.HFSM = void 0),
      ((x.HFSM || (x.HFSM = {})).Machine = class {
        Enter(t, ...e) {
          this._current
            ? this._current.Enter(this.owner, ...e)
            : this.default &&
              ((this._current = this.default), this._current.Enter(this.owner, ...e));
        }
        Update(t) {
          this._current && this._current.Update(this.owner);
        }
        LateUpdate(t) {
          this._current && this._current.LateUpdate(this.owner);
        }
        Exit(t) {
          this._current &&
            (this._current.Exit(this.owner),
            (this._previous = this._current),
            (this._current = null));
        }
        get current() {
          return this._current;
        }
        get previous() {
          return this._previous;
        }
        constructor(t, e, n) {
          if (((this.owner = t), e && (this._current = e), !0 === n))
            for (const r of [
              "SetState",
              "ChangeState",
              "RevertState",
              "Enter",
              "Update",
              "LateUpdate",
              "Exit",
            ]) {
              const i = this[r].bind(this);
              this[r] = function () {
                try {
                  i(...arguments);
                } catch (t) {
                  console.log("状态机捕获异常:", t);
                }
              };
            }
        }
        SetState(t) {
          if (this._current) {
            if (this._current == t) return;
            this._previous = this._current;
          }
          this._current = t;
        }
        ChangeState(t, ...e) {
          if (this._current) {
            if (this._current == t) return;
            (this._current.Exit(this.owner), (this._previous = this._current));
          }
          ((this._current = t), this._current && this._current.Enter(this.owner, ...e));
        }
        RevertState() {
          this.ChangeState(this._previous);
        }
        SetLog() {
          const e = this.SetState.bind(this),
            n =
              ((this.SetState = function (t) {
                (e(t),
                  console.log(
                    `%c${this.owner.constructor.name}.${this.constructor.name}%c 设置状态: %c${this._previous ? this._previous.constructor.name : "null"}%c => %c` +
                      (this._current ? this._current.constructor.name : "null"),
                    "color:red",
                    "color:black",
                    "color:blue",
                    "color:black",
                    "color:blue",
                  ));
              }),
              this.ChangeState.bind(this));
          this.ChangeState = function (t, ...e) {
            (n(t, ...e),
              console.log(
                `%c${this.owner.constructor.name}.${this.constructor.name}%c 切换状态: %c${this._previous ? this._previous.constructor.name : "null"}%c => %c` +
                  (this._current ? this._current.constructor.name : "null"),
                "color:red",
                "color:black",
                "color:blue",
                "color:black",
                "color:blue",
              ));
          };
        }
        SetRule(s, a = !1) {
          const o = this.ChangeState.bind(this);
          this.ChangeState = function (e, ...t) {
            if (e)
              for (var [n, r, i] of s)
                if (this._current === n) {
                  if (r && (r.length <= 0 || null == x.List.get(r, (t) => e === t)))
                    return void (
                      a &&
                      console.log(
                        `${this.owner.constructor.name}.${this.constructor.name} 切换失败: ` +
                          e.constructor.name,
                      )
                    );
                  if (i && null != x.List.get(i, (t) => e === t))
                    return void (
                      a &&
                      console.log(
                        `${this.owner.constructor.name}.${this.constructor.name} 切换失败: ` +
                          e.constructor.name,
                      )
                    );
                  break;
                }
            o(e, ...t);
          };
        }
      }),
      (x.V3 = void 0));
    {
      var h = x.V3 || (x.V3 = {});
      const C = new Laya.Vector3();
      ((h.Forward = new Laya.Vector3(0, 0, 1)),
        (h.Back = new Laya.Vector3(0, 0, -1)),
        (h.Up = new Laya.Vector3(0, 1, 0)),
        (h.Down = new Laya.Vector3(0, -1, 0)),
        (h.Right = new Laya.Vector3(1, 0, 0)),
        (h.Left = new Laya.Vector3(-1, 0, 0)),
        (h.euler = function (t, e) {
          return e ? (e.setValue(-t.x, t.y + 180, t.z), e) : new Laya.Vector3(-t.x, t.y + 180, t.z);
        }),
        (h.forward = function (t, e) {
          var n = new Laya.Vector3();
          return (t.transform.getForward(n), e && Laya.Vector3.scale(n, -1, n), n);
        }),
        (h.up = function (t) {
          var e = new Laya.Vector3();
          return (t.transform.getUp(e), e);
        }),
        (h.down = function (t) {
          var e = new Laya.Vector3();
          return (t.transform.getUp(e), Laya.Vector3.scale(e, -1, e), e);
        }),
        (h.right = function (t) {
          var e = new Laya.Vector3();
          return (t.transform.getRight(e), e);
        }),
        (h.left = function (t) {
          var e = new Laya.Vector3();
          return (t.transform.getRight(e), Laya.Vector3.scale(e, -1, e), e);
        }),
        (h.disXZ = function (t, e) {
          return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.z - e.z, 2));
        }),
        (h.disYZ = function (t, e) {
          return Math.sqrt(Math.pow(t.y - e.y, 2) + Math.pow(t.z - e.z, 2));
        }),
        (h.disXY = function (t, e) {
          return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
        }),
        (h.disXZS = function (t, e) {
          return Math.pow(t.x - e.x, 2) + Math.pow(t.z - e.z, 2);
        }),
        (h.disYZS = function (t, e) {
          return Math.pow(t.y - e.y, 2) + Math.pow(t.z - e.z, 2);
        }),
        (h.disXYS = function (t, e) {
          return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2);
        }),
        (h.cross = function (t, e, n) {
          return (
            (n = n || new Laya.Vector3()),
            Laya.Vector3.cross(t, e, n),
            Laya.Vector3.normalize(n, n),
            n
          );
        }),
        (h.a2b = function (t, e, n) {
          return (
            (n = n || new Laya.Vector3()),
            Laya.Vector3.subtract(e, t, n),
            Laya.Vector3.normalize(n, n),
            n
          );
        }),
        (h.a2bXZ = function (t, e, n) {
          return (
            (n = n || new Laya.Vector3()),
            (t = t.clone()),
            (e = e.clone()),
            (t.y = 0),
            (e.y = 0),
            Laya.Vector3.subtract(e, t, n),
            Laya.Vector3.normalize(n, n),
            n
          );
        }),
        (h.a2bYZ = function (t, e, n) {
          return (
            (n = n || new Laya.Vector3()),
            (t = t.clone()),
            (e = e.clone()),
            (t.x = 0),
            (e.x = 0),
            Laya.Vector3.subtract(e, t, n),
            Laya.Vector3.normalize(n, n),
            n
          );
        }),
        (h.a2bXY = function (t, e, n) {
          return (
            (n = n || new Laya.Vector3()),
            (t = t.clone()),
            (e = e.clone()),
            (t.z = 0),
            (e.z = 0),
            Laya.Vector3.subtract(e, t, n),
            Laya.Vector3.normalize(n, n),
            n
          );
        }),
        (h.move = function (t, e, n, r) {
          return (
            (r = r || new Laya.Vector3()),
            h.a2b(t, e, r),
            Laya.Vector3.scale(r, n, r),
            Laya.Vector3.add(t, r, r),
            r
          );
        }),
        (h.move_rate = function (t, e, n, r) {
          return (
            (r = r || new Laya.Vector3()),
            (n = Laya.Vector3.distance(t, e) * n),
            h.move(t, e, n, r)
          );
        }),
        (h.trans = function (t, e, n, r) {
          return (
            (r = r || new Laya.Vector3()),
            Laya.Vector3.scale(e, n, r),
            Laya.Vector3.add(t, r, r),
            r
          );
        }),
        (h.lerp = function (t, e, n) {
          return Laya.Vector3.distance(t, e) <= n
            ? (e.cloneTo(t), !0)
            : (Laya.Vector3.subtract(e, t, C),
              Laya.Vector3.normalize(C, C),
              Laya.Vector3.scale(C, n, C),
              Laya.Vector3.add(t, C, t),
              Laya.Vector3.equals(t, e));
        }),
        (h.lerpSq = function (t, e, n) {
          return Laya.Vector3.distanceSquared(t, e) <= n * n
            ? (e.cloneTo(t), !0)
            : (Laya.Vector3.subtract(e, t, C),
              Laya.Vector3.normalize(C, C),
              Laya.Vector3.scale(C, n, C),
              Laya.Vector3.add(t, C, t),
              Laya.Vector3.equals(t, e));
        }),
        (h.lerpRe = function (t, e, n) {
          return (x.Angle.valueClosest(t, e), h.lerp(t, e, n));
        }),
        (h.lerpReSq = function (t, e, n) {
          return (x.Angle.valueClosest(t, e), h.lerpSq(t, e, n));
        }),
        (h.transformPoint = function (t, e) {
          var n = new Laya.Vector3();
          return (
            Laya.Vector3.transformQuat(e, t.rotation, n),
            Laya.Vector3.add(n, t.position, n),
            n
          );
        }),
        (h.inverseTransformPoint = function (t, e) {
          var n = new Laya.Vector3(),
            r = (t.getRight(n), new Laya.Vector3()),
            i = (t.getUp(r), new Laya.Vector3()),
            i = (t.getForward(i), new Laya.Vector3(-i.x, -i.y, -i.z)),
            n = this.projectDistance(e, t.position, n),
            r = this.projectDistance(e, t.position, r),
            e = this.projectDistance(e, t.position, i);
          return new Laya.Vector3(n, r, e);
        }),
        (h.projectDistance = function (t, e, n) {
          var r = new Laya.Vector3(),
            r = (Laya.Vector3.subtract(t, e, r), x.Angle.ab(r, n) * x.Angle.RandinToAngle),
            n = Laya.Vector3.distance(t, e);
          return (n *= Math.cos(r));
        }),
        (h.str = function (t, e = 2) {
          return `v3(${t.x.toFixed(e)}, ${t.y.toFixed(e)}, ${t.z.toFixed(e)})`;
        }),
        (h.rotateY = function (t, e) {
          var e = e * x.Angle.RandinToAngle,
            n = t.x,
            r = t.z;
          ((t.x = n * Math.cos(e) - r * Math.sin(e)), (t.z = n * Math.sin(e) + r * Math.cos(e)));
        }));
    }
    function $(t, e) {
      for (; e < t && 180 < Math.abs(t - e);) t -= 360;
      for (; t < e && 180 < Math.abs(t - e);) t += 360;
      return t;
    }
    function H(t, e) {
      var n,
        r = t.x * t.x + t.y * t.y + t.z * t.z,
        i = e.x * e.x + e.y * e.y + e.z * e.z;
      return 0 == r || 0 == i
        ? 0
        : ((t = (t.x * e.x + t.y * e.y + t.z * e.z) / Math.sqrt(r * i)),
          (e = t),
          (r = 1) < (i = -1) && ((n = i), (i = r), (r = n)),
          Math.acos((t = e < i ? i : r < e ? r : e)) * o.AngleToRandin);
    }
    ((x.Angle = void 0),
      ((o = x.Angle || (x.Angle = {})).AngleToRandin = 180 / Math.PI),
      (o.RandinToAngle = Math.PI / 180),
      (o.findClosest = function (n, r) {
        let i = null,
          s = null;
        for (let e = 0; e < n.length; e++) {
          var a = n[e];
          let t = Math.abs(r - a);
          for (; 360 < t;) t -= 360;
          (null == i || t < i) && ((i = t), (s = a));
        }
        for (let e = 0; e < n.length; e++) {
          var o = -n[e];
          let t = Math.abs(r - o);
          for (; 360 < t;) t -= 360;
          (null == i || t < i) && ((i = t), (s = -o));
        }
        return s;
      }),
      (o.numClosest = $),
      (o.vClosest = function (t, e) {
        for (; e < t && 180 < Math.abs(t - e);) t -= 360;
        for (; t < e && 180 < Math.abs(e - t);) t += 360;
        return t;
      }),
      (o.valueClosest = function (t, e = null) {
        var n = [t.x, t.y, t.z],
          r = null != e ? [e.x, e.y, e.z] : [0, 0, 0];
        for (let t = 0; t < n.length; t++) {
          for (; n[t] > r[t] && 180 < Math.abs(n[t] - r[t]);) n[t] -= 360;
          for (; n[t] < r[t] && 180 < Math.abs(n[t] - r[t]);) n[t] += 360;
        }
        ((t.x = n[0]), (t.y = n[1]), (t.z = n[2]));
      }),
      (o.pnClosest = function (t, e) {
        var n = [t.x, t.y, t.z],
          r = [e.x, e.y, e.z];
        for (let t = 0; t < n.length; t++) {
          for (; 0 < n[t] && r[t] < 0;) n[t] -= 360;
          for (; n[t] < 0 && 0 < r[t];) n[t] += 360;
        }
        ((t.x = n[0]), (t.y = n[1]), (t.z = n[2]));
      }),
      (o.ab = H),
      (o.abX = function (t, e) {
        return o.ab(new Laya.Vector3(0, t.y, t.z), new Laya.Vector3(0, e.y, e.z));
      }),
      (o.abY = function (t, e) {
        return o.ab(new Laya.Vector3(t.x, 0, t.z), new Laya.Vector3(e.x, 0, e.z));
      }),
      (o.abZ = function (t, e) {
        return o.ab(new Laya.Vector3(t.x, t.y, 0), new Laya.Vector3(e.x, e.y, 0));
      }),
      (o.lookY = function (t, e, n, r = x.V3.Forward) {
        (t = x.V3.a2b(t, e)).y = 0;
        let i = t.x < 0 ? -H(r, t) : H(r, t);
        return (isNaN(i) && (i = 0), null != n ? $(i, n) : i);
      }),
      (o.lookAtRotation = function (t, e, n) {
        var r = t.position,
          t = (n || ((n = new Laya.Vector3()), t.getUp(n)), new Laya.Quaternion());
        return (Laya.Quaternion.lookAt(r, e, n, t), t.invert(t), t);
      }),
      (o.lookAtLocalRotation = function (t, e, n) {
        return (
          (e = this.lookAtRotation(t, e, n)),
          (n = new Laya.Quaternion()),
          null != t.owner.parent
            ? (t.owner.parent.transform.rotation.invert(n), Laya.Quaternion.multiply(n, e, n))
            : e.cloneTo(n),
          n.normalize(n),
          n
        );
      }),
      (o.lookAtEuler = function (t, e, n) {
        var r = new Laya.Vector3();
        return (
          this.lookAtRotation(t, e, n).getYawPitchRoll(r),
          new Laya.Vector3(
            r.y * this.AngleToRandin,
            r.x * this.AngleToRandin,
            r.z * this.AngleToRandin,
          )
        );
      }),
      (o.lookAtLocalEuler = function (t, e, n) {
        var r = new Laya.Vector3();
        return (
          this.lookAtLocalRotation(t, e, n).getYawPitchRoll(r),
          new Laya.Vector3(
            r.y * this.AngleToRandin,
            r.x * this.AngleToRandin,
            r.z * this.AngleToRandin,
          )
        );
      }),
      (x.Comp = void 0),
      ((m = x.Comp || (x.Comp = {})).add = function (t, e) {
        var n = t.getComponents(e);
        if (n) for (const r of n) r.destroy();
        return t.addComponent(e);
      }),
      (m.clear = function (t) {
        var e = t._components;
        for (let t = e.length; 0 <= t; t--) {
          var n = e[t];
          (n instanceof Laya.Script3D || n instanceof Laya.Script) && e.splice(t, 1);
        }
      }),
      (x.Node = void 0));
    {
      var c = x.Node || (x.Node = {});
      function K(e, n) {
        if ("string" == typeof n) {
          if (e.name == n) return e;
        } else if ("function" == typeof n) {
          if (n(e)) return e;
        } else if (n.test(e.name)) return e;
        for (let t = 0; t < e.numChildren; t++) {
          var r = this.find(e.getChildAt(t), n);
          if (null != r) return r;
        }
        return null;
      }
      function J(t, e, n) {
        var r = e.getCenter(),
          i = e.getMax(),
          e = e.getMin(),
          i = new Laya.Vector3(Math.abs(i.x - e.x), Math.abs(i.y - e.y), Math.abs(i.z - e.z)),
          e = new Laya.Vector3(
            r.x - (null != n ? n.x : 0),
            r.y - (null != n ? n.y : 0),
            r.z - (null != n ? n.z : 0),
          ),
          r = (t, e, n, r, i) => {
            n = new Laya.Vector3(n * t.x * 0.5, r * t.y * 0.5, i * t.z * 0.5);
            return (Laya.Vector3.add(e, n, n), n);
          };
        return [
          r(t, e, i.x, i.y, i.z),
          r(t, e, -i.x, i.y, i.z),
          r(t, e, i.x, -i.y, i.z),
          r(t, e, i.x, i.y, -i.z),
          r(t, e, -i.x, -i.y, i.z),
          r(t, e, i.x, -i.y, -i.z),
          r(t, e, -i.x, i.y, -i.z),
          r(t, e, -i.x, -i.y, -i.z),
        ];
      }
      function Q(t) {
        let e = null;
        return (
          t instanceof Laya.MeshSprite3D
            ? (e = t.meshRenderer.bounds)
            : t instanceof Laya.SkinnedMeshSprite3D && (e = t.skinnedMeshRenderer.bounds),
          e
        );
      }
      ((c.recover = function e(n) {
        if (n.numChildren) for (let t = n.numChildren - 1; 0 <= t; t--) e(n.getChildAt(t));
        var r = n.getComponents(x.Script.Base);
        if (r) for (let t = 0; t < r.length; t++) r[t].destroy();
      }),
        (c.getTargetByTreeId = function (t, e) {
          if (!e || e.length <= 0 || "0" == e) return t;
          var n,
            r = e.split("-");
          Number(r.shift());
          let i = t;
          for (; 0 < r.length;) {
            if (((n = Number(r.shift())), !i || n >= i.numChildren)) return null;
            i = i.getChildAt(n);
          }
          return i;
        }),
        (c.getTreeIdByTarget = function (t, e) {
          const s = [],
            a = (e, n, r) => {
              if (n == r) return (s.push(e), !0);
              for (let t = 0; t < n.numChildren; t++) {
                var i = n.getChildAt(t);
                if (a(t, i, r)) return (s.push(e), !0);
              }
              return !1;
            };
          return (a(0, t, e), 0 < s.length ? s.reverse().join("-") : null);
        }),
        (c.isParent = function (t, e) {
          if (t == e) return !0;
          let n = e.parent;
          for (; null != n;) {
            if (t == n) return !0;
            n = n.parent;
          }
          return !1;
        }),
        (c.disableComp = function (t) {
          if (t._components)
            for (const n of t._components) {
              var e;
              ((n.enabled = !1),
                n instanceof Laya.Animator && (e = n.getControllerLayer(0)) && (e.playOnWake = !1));
            }
        }),
        (c.find = K),
        (c.findAll = function (e, n, r) {
          ((r = r || []),
            "string" == typeof n
              ? e.name == n && r.push(e)
              : "function" == typeof n
                ? n(e) && r.push(e)
                : n.test(e.name) && r.push(e));
          for (let t = 0; t < e.numChildren; t++) this.findAll(e.getChildAt(t), n, r);
          return r;
        }),
        (c.findHp = function (t, e) {
          e = e.concat();
          let i = (e, n, r) => {
            if (!(
              e.length <= 0 ||
              (((e, n) => {
                for (let t = 0; t < n.length; t++) if (e == n[t]) return (n.splice(t, 1), !0);
                return !1;
              })(n.name, e) && r.push(n),
              e.length <= 0) ||
              n.numChildren <= 0
            ))
              for (let t = 0; t < n.numChildren; t++) i(e, n.getChildAt(t), r);
          };
          var n = [];
          return (i(e, t, n), n);
        }),
        (c.mount = function (t, e, n, r, g) {
          const p = (e, n, r, i, s) => {
            g && g(n);
            for (let t = 0; t < n.numChildren; t++) {
              var a = n.getChildAt(t);
              ((o = e),
                (l = a.name),
                (h = a),
                0 <= r.indexOf(l) &&
                  (null == o[l]
                    ? (o[l] = h)
                    : o[l] instanceof Array
                      ? o[l].push(h)
                      : console.warn(
                          `名为${l}的节点含有多个，请将成员变量${l}声明为数组: ${l}: Laya.sprite3D[] = []`,
                        )),
                p(e, a, r, i, s));
            }
            var o, l, h;
            if (i)
              for (let t = 0; t < i.length; t++) {
                var [c, u, f] = i[t];
                if (
                  ("string" == typeof u && u == n.name) ||
                  ("function" == typeof u && u(n)) ||
                  (u instanceof RegExp && u.test(n.name))
                ) {
                  var d = x.Comp.add(n, c);
                  if (
                    (null != f &&
                      (null === e[f] ? (e[f] = d) : e[f] instanceof Array && e[f].push(d)),
                    s)
                  )
                    for (const y of s) d[y[0]] = y[1];
                  break;
                }
              }
          };
          var i = Object.keys(t);
          p(t, e, i, n, r);
        }),
        (c.recursive = function (e, n) {
          if (!1 !== n(e)) for (let t = 0; t < e.numChildren; t++) c.recursive(e.getChildAt(t), n);
        }),
        (c.getRectPos = J),
        (c.bounds = Q),
        (c.getCenter = function (t) {
          var e = Q(t);
          if (!e) return t.transform.position;
          var t = J(t.transform.localScale, e),
            n = new Laya.Vector3();
          for (const r of t) ((n.x += r.x), (n.y += r.y), (n.z += r.z));
          return ((n.x /= t.length), (n.y /= t.length), (n.z /= t.length), n);
        }));
      const z = new Laya.Vector3(),
        S = new Laya.Vector3(),
        E = new Laya.Vector3();
      ((c.linearModel = function (t, e, n, r) {
        var i = t.getSubMesh(0).getIndices(),
          s = [];
        t.getPositions(s);
        for (let t = 0; t < i.length; t += 3) {
          var a = s[i[t]],
            o = s[i[t + 1]],
            l = s[i[t + 2]];
          r
            ? (Laya.Vector3.transformV3ToV3(a, r, z),
              Laya.Vector3.transformV3ToV3(o, r, S),
              Laya.Vector3.transformV3ToV3(l, r, E),
              e.addLine(z, S, n, n),
              e.addLine(S, E, n, n),
              e.addLine(E, z, n, n))
            : (e.addLine(a, o, n, n), e.addLine(o, l, n, n), e.addLine(l, a, n, n));
        }
      }),
        (c.drawNormal = function (t, e = 1) {
          let n = K(t, "_lineNormal");
          (n || ((n = new Laya.PixelLineSprite3D()), t.addChild(n)), n.clear());
          var r = [],
            i = [];
          (t.meshFilter.sharedMesh.getPositions(r),
            t.meshFilter.sharedMesh.getNormals(i),
            (n.maxLineCount = r.length));
          for (let t = 0; t < r.length; t++) {
            var s = r[t],
              a = x.V3.trans(s, i[t], e);
            n.addLine(s, a, Laya.Color.RED, Laya.Color.RED);
          }
          return n;
        }));
    }
    ((x.V2 = void 0),
      ((n = x.V2 || (x.V2 = {})).re = function (t, e) {
        var n = t.x,
          r = t.y;
        ((t.x = n * Math.cos(e) - r * Math.sin(e)), (t.y = n * Math.sin(e) + r * Math.cos(e)));
      }),
      (n.lerp = function (t, e, n) {
        var r = e.x - t.x,
          i = e.y - t.y,
          s = Math.sqrt(r * r + i * i);
        return s <= n
          ? ((t.x = e.x), (t.y = e.y), !0)
          : ((t.x += (n = n / s) * r), (t.y += n * i), t.x == e.x && t.y == e.y);
      }),
      (n.dis = function (t, e) {
        var n = t.x - e.x,
          t = t.y - e.y;
        return Math.sqrt(n * n + t * t);
      }),
      (n.disS = function (t, e) {
        var n = t.x - e.x,
          t = t.y - e.y;
        return n * n + t * t;
      }),
      (n.len = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y);
      }),
      (n.sub = function (t, e, n) {
        return ((n.x = t.x - e.x), (n.y = t.y - e.y), n);
      }),
      (n.add = function (t, e, n) {
        return ((n.x = t.x + e.x), (n.y = t.y + e.y), n);
      }),
      (n.normalize = function (t, e) {
        var n = t.x,
          t = t.y,
          r = n * n + t * t;
        0 < r && ((r = 1 / Math.sqrt(r)), (e.x = n * r), (e.y = t * r));
      }),
      (n.trans = function (t, e, n, r) {
        ((r.x = e.x * n + t.x), (r.y = e.y * n + t.y));
      }),
      (n.angle = function (t, e) {
        var n = t.x,
          t = t.y,
          r = e.x,
          e = e.y,
          i = n * r + t * e,
          n = Math.sqrt(n * n + t * t),
          t = Math.sqrt(r * r + e * e);
        return 0 === n || 0 === t ? 0 : Math.acos(i / (n * t));
      }),
      (x.D2 = void 0));
    {
      var u = x.D2 || (x.D2 = {});
      let i;
      function f(t) {
        if (t instanceof Laya.Vector2) return t;
        var e = new Laya.Vector2();
        switch (u.Axis) {
          case i.XY:
            ((e.x = t.x), (e.y = t.y));
            break;
          case i.XZ:
            ((e.x = t.x), (e.y = t.z));
            break;
          case i.YZ:
            ((e.x = t.y), (e.y = t.z));
        }
        return e;
      }
      (((m = i = u.AxisV2 || (u.AxisV2 = {}))[(m.XY = 0)] = "XY"),
        (m[(m.XZ = 1)] = "XZ"),
        (m[(m.YZ = 2)] = "YZ"),
        (u.Axis = i.XZ),
        (u.v2 = f),
        (u.center = function (t) {
          let e = 0,
            n = 0,
            r = 0;
          for (const o of t) {
            var i = (o.x * Math.PI) / 180,
              s = (o.z * Math.PI) / 180;
            ((e += Math.cos(i) * Math.cos(s)),
              (n += Math.cos(i) * Math.sin(s)),
              (r += Math.sin(i)));
          }
          ((e /= t.length), (n /= t.length), (r /= t.length));
          var t = Math.atan2(n, e),
            a = Math.sqrt(e * e + n * n),
            a = Math.atan2(r, a);
          return new Laya.Vector3((180 * a) / Math.PI, 0, (180 * t) / Math.PI);
        }));
      class b {
        static CreateFromVector(t, e) {
          ((t = f(t)), (e = f(e)));
          return new b(t.y / t.x, -1, e.y - (t.y / t.x) * e.x);
        }
        static CreateFromPoint(t, e) {
          ((t = f(t)), (e = f(e)));
          return new b(t.y - e.y, e.x - t.x, t.x * e.y - e.x * t.y);
        }
        static CreateFromVertical(t, e) {
          t = f(t);
          return new b(e.B, -e.A, e.A * t.y - e.B * t.x);
        }
        static Cross(t, e) {
          var n = t.A * e.B - e.A * t.B;
          return 0 == n
            ? null
            : new Laya.Vector2((t.B * e.C - e.B * t.C) / n, (e.A * t.C - t.A * e.C) / n);
        }
        constructor(t, e, n) {
          ((this.A = t), (this.B = e), (this.C = n));
        }
        cross(t) {
          return b.Cross(this, t);
        }
        formX(t) {
          return new Laya.Vector2(t, (-this.C - this.A * t) / this.B);
        }
        formY(t) {
          return new Laya.Vector2((-this.C - this.B * t) / this.A, t);
        }
        dis(t) {
          t = f(t);
          return (
            Math.abs(this.A * t.x + this.B * t.y + this.C) /
            Math.sqrt(this.A * this.A + this.B * this.B)
          );
        }
      }
      u.Line = b;
      class V {
        static calcPos(t, e, n, r, i) {
          n = new Laya.Vector3(
            n * t.localScale.x * 0.5,
            r * t.localScale.y * 0.5,
            i * t.localScale.z * 0.5,
          );
          return (Laya.Vector3.add(e, n, n), x.V3.transformPoint(t, n));
        }
        static CreateFromBounds(t) {
          let e = null;
          if (
            (t instanceof Laya.MeshSprite3D
              ? (e = t.meshRenderer.bounds)
              : t instanceof Laya.SkinnedMeshSprite3D && (e = t.skinnedMeshRenderer.bounds),
            !e)
          )
            return null;
          let n = x.Node.getRectPos(t.transform.localScale, e);
          return (
            (n = n.sort((t, e) =>
              Math.round(1e3 * t.x) > Math.round(1e3 * e.x) ||
              (!(Math.round(1e3 * t.x) < Math.round(1e3 * e.x)) &&
                Math.round(1e3 * t.y) > Math.round(1e3 * e.y))
                ? -1
                : 1,
            )),
            new V(n[0], n[7], n[4], n[3])
          );
        }
        static CreateFromRigBox(t) {
          var e = t.getComponent(Laya.Rigidbody3D);
          if (!e) return null;
          e = e.colliderShape;
          if (!(e && e instanceof Laya.BoxColliderShape)) return null;
          var n = e.localOffset,
            t = t.transform;
          let r = [
            V.calcPos(t, n, e.sizeX, e.sizeY, e.sizeZ),
            V.calcPos(t, n, -e.sizeX, e.sizeY, e.sizeZ),
            V.calcPos(t, n, e.sizeX, -e.sizeY, e.sizeZ),
            V.calcPos(t, n, e.sizeX, e.sizeY, -e.sizeZ),
            V.calcPos(t, n, -e.sizeX, -e.sizeY, e.sizeZ),
            V.calcPos(t, n, e.sizeX, -e.sizeY, -e.sizeZ),
            V.calcPos(t, n, -e.sizeX, e.sizeY, -e.sizeZ),
            V.calcPos(t, n, -e.sizeX, -e.sizeY, -e.sizeZ),
          ];
          return (
            (r = r.sort((t, e) =>
              Math.round(1e3 * t.x) > Math.round(1e3 * e.x) ||
              (!(Math.round(1e3 * t.x) < Math.round(1e3 * e.x)) &&
                Math.round(1e3 * t.y) > Math.round(1e3 * e.y))
                ? -1
                : 1,
            )),
            new V(r[0], r[7], r[4], r[3])
          );
        }
        static CreateFromBox(t) {
          var e = t.getComponent(Laya.PhysicsCollider),
            n = e.colliderShape;
          if (!(e && n instanceof Laya.BoxColliderShape)) return null;
          ((e = n.localOffset), (t = t.transform));
          let r = [
            V.calcPos(t, e, n.sizeX, n.sizeY, n.sizeZ),
            V.calcPos(t, e, -n.sizeX, n.sizeY, n.sizeZ),
            V.calcPos(t, e, n.sizeX, -n.sizeY, n.sizeZ),
            V.calcPos(t, e, n.sizeX, n.sizeY, -n.sizeZ),
            V.calcPos(t, e, -n.sizeX, -n.sizeY, n.sizeZ),
            V.calcPos(t, e, n.sizeX, -n.sizeY, -n.sizeZ),
            V.calcPos(t, e, -n.sizeX, n.sizeY, -n.sizeZ),
            V.calcPos(t, e, -n.sizeX, -n.sizeY, -n.sizeZ),
          ];
          return (
            (r = r.sort((t, e) =>
              Math.round(1e3 * t.x) > Math.round(1e3 * e.x) ||
              (!(Math.round(1e3 * t.x) < Math.round(1e3 * e.x)) &&
                Math.round(1e3 * t.y) > Math.round(1e3 * e.y))
                ? -1
                : 1,
            )),
            new V(r[0], r[7], r[4], r[3])
          );
        }
        static Area(t) {
          let e = 0;
          return (t.forEach((t) => (e += t.area)), e);
        }
        static Contain(e, n) {
          for (let t = 0; t < e.length; t++) if (e[t].contain(n)) return !0;
          return !1;
        }
        constructor(t, e, n, r) {
          switch (
            ((this.maxAxis = 0),
            (this.lines = []),
            (this.RT = t),
            (this.rt = f(this.RT)),
            (this.LB = e),
            (this.lb = f(this.LB)),
            (this.LT = n),
            (this.lt = f(this.LT)),
            (this.RB = r),
            (this.rb = f(this.RB)),
            this.lines.push(b.CreateFromPoint(this.rt, this.lt)),
            this.lines.push(b.CreateFromPoint(this.rt, this.rb)),
            this.lines.push(b.CreateFromPoint(this.lb, this.lt)),
            this.lines.push(b.CreateFromPoint(this.lb, this.rb)),
            u.Axis)
          ) {
            case i.XY:
              this.maxAxis = Math.max(this.RT.z, this.LB.z, this.LT.z, this.RB.z);
              break;
            case i.XZ:
              this.maxAxis = Math.max(this.RT.y, this.LB.y, this.LT.y, this.RB.y);
              break;
            case i.YZ:
              this.maxAxis = Math.max(this.RT.x, this.LB.x, this.LT.x, this.RB.x);
          }
        }
        get points() {
          return [this.rt, this.lt, this.lb, this.rb];
        }
        get area() {
          return (this.rt.x - this.lb.x) * (this.lt.y - this.rb.y);
        }
        get width() {
          return Math.abs(this.rt.x - this.lb.x);
        }
        get height() {
          return Math.abs(this.lt.y - this.rb.y);
        }
        get center() {
          return b.Cross(b.CreateFromPoint(this.rt, this.lb), b.CreateFromPoint(this.lt, this.rb));
        }
        contain(n) {
          if (n instanceof Laya.Vector2 || n instanceof Laya.Vector3)
            return (
              (n = f(n)),
              0 <= this.cross(this.rt, this.lt, n) * this.cross(this.lb, this.rb, n) &&
                0 <= this.cross(this.lt, this.lb, n) * this.cross(this.rb, this.rt, n)
            );
          if (n instanceof b) {
            for (let t = 0; t < this.points.length; t++)
              if (this.contain(b.Cross(n, b.CreateFromVertical(this.points[t], n)))) return !0;
          } else if (n instanceof V) {
            var t = this.area,
              r = n.area;
            if (t < r) return !1;
            if (r == t) return ((r = this.center), (t = n.center), r.x == t.x && r.y == t.y);
            let e = !0;
            for (let t = 0; t < n.points.length; t++)
              if (!this.contain(n.points[t])) {
                e = !1;
                break;
              }
            return e;
          }
          return !1;
        }
        mixed(e) {
          if (e instanceof V) {
            for (let t = 0; t < e.points.length; t++) if (this.contain(e.points[t])) return !0;
            return !1;
          }
          return this.contain(e);
        }
        cross(t, e, n) {
          return (e.x - t.x) * (n.y - t.y) - (n.x - t.x) * (e.y - t.y);
        }
      }
      ((u.Rect = V),
        (u.Circle = class D {
          static CreateFromSphere(t) {
            var e = t.getComponent(Laya.PhysicsCollider),
              n = e.colliderShape;
            return e && n
              ? ((e = t.transform.position.clone()),
                (t = n.localOffset),
                Laya.Vector3.add(e, t, e),
                new D(e, n.radius))
              : null;
          }
          constructor(t, e) {
            ((this.center = f(t)), (this.radius = e), (this.rss = this.radius * this.radius));
          }
          contain(t) {
            return t instanceof Laya.Vector2 || t instanceof Laya.Vector3
              ? ((t = f(t)), x.V2.disS(t, this.center) <= this.rss)
              : t instanceof D && x.V2.disS(this.center, t.center) <= this.rss - t.rss;
          }
          mixed(t) {
            return t instanceof D
              ? x.V2.disS(this.center, t.center) <= this.rss + t.rss
              : this.contain(t);
          }
        }));
    }
    x.D3 = void 0;
    {
      var n;
      (((n = x.D3 || (x.D3 = {})).boxContainsPointXZ = function (t, e) {
        var n = t.min,
          t = t.max;
        return n.x <= e.x && t.x >= e.x && n.z <= e.z && t.z >= e.z
          ? Laya.ContainmentType.Contains
          : Laya.ContainmentType.Disjoint;
      }),
        (n.boundBoxFromCube = function (t) {
          var e = new Laya.BoundBox(new Laya.Vector3(), new Laya.Vector3()),
            n = t.transform.position.x,
            r = t.transform.position.y,
            i = t.transform.position.z,
            s = t.transform.localScale.x / 2,
            a = t.transform.localScale.y / 2,
            t = t.transform.localScale.z / 2,
            n = [
              new Laya.Vector3(n + s, r + a, i + t),
              new Laya.Vector3(n - s, r + a, i + t),
              new Laya.Vector3(n + s, r - a, i + t),
              new Laya.Vector3(n + s, r + a, i - t),
              new Laya.Vector3(n - s, r - a, i + t),
              new Laya.Vector3(n + s, r - a, i - t),
              new Laya.Vector3(n - s, r + a, i - t),
              new Laya.Vector3(n - s, r - a, i - t),
            ];
          return (Laya.BoundBox.createfromPoints(n, e), e);
        }),
        (n.Line = class {
          constructor(t, e) {
            ((this.P = t), (this.D = e));
          }
          fromX(t) {
            return new Laya.Vector3(
              t,
              ((t - this.P.x) / this.D.x) * this.D.y + this.P.y,
              ((t - this.P.x) / this.D.x) * this.D.z + this.P.z,
            );
          }
          fromY(t) {
            return new Laya.Vector3(
              ((t - this.P.y) / this.D.y) * this.D.x + this.P.x,
              t,
              ((t - this.P.y) / this.D.y) * this.D.z + this.P.z,
            );
          }
          fromZ(t) {
            return new Laya.Vector3(
              ((t - this.P.z) / this.D.z) * this.D.x + this.P.x,
              ((t - this.P.z) / this.D.z) * this.D.y + this.P.y,
              t,
            );
          }
          disPos(t) {
            var e = this.fromX(1),
              n = this.fromX(-1),
              r = new Laya.Vector3(),
              n = (Laya.Vector3.subtract(n, e, r), new Laya.Vector3()),
              t = (Laya.Vector3.subtract(t, e, n), r.x * n.x + r.y * n.y + r.z * n.z),
              e = Math.sqrt(r.x * r.x + r.z * r.z + r.z * r.z),
              r = Math.sqrt(n.x * n.x + n.z * n.z + n.z * n.z),
              n = Math.acos(t / (e * r));
            return Math.abs(r / Math.sin(n));
          }
          verticalPos(t) {
            var e = Laya.Vector3.distanceSquared(this.P, t),
              n = this.P,
              e = x.V3.trans(this.P, this.D, e),
              t =
                -(
                  (n.x - t.x) * (e.x - n.x) +
                  (n.y - t.y) * (e.y - n.y) +
                  (n.z - t.z) * (e.z - n.z)
                ) /
                (Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2) + Math.pow(e.z - n.z, 2));
            return new Laya.Vector3(
              t * (e.x - n.x) + n.x,
              t * (e.y - n.y) + n.y,
              t * (e.z - n.z) + n.z,
            );
          }
          toArea() {
            var t = 13 * (this.D.x + 4),
              e = 12 * (this.D.y + 3),
              n = (-t * this.D.x - e * this.D.y) / this.D.z,
              t = new Laya.Vector3(t, e, n),
              e = (Laya.Vector3.normalize(t, t), 11 * (this.D.x + 2)),
              n = 10 * (this.D.y + 1),
              r = (-e * this.D.x - n * this.D.y) / this.D.z,
              e = new Laya.Vector3(e, n, r);
            return (
              Laya.Vector3.normalize(e, e),
              [k.CreateFromDDP(this.D, t, this.P), k.CreateFromDDP(this.D, e, this.P)]
            );
          }
        }));
      class k {
        static CreateFromPPP(t, e, n) {
          return new k(
            t.y * (e.z - n.z) + e.y * (n.z - t.z) + n.y * (t.z - e.z),
            t.z * (e.x - n.x) + e.z * (n.x - t.x) + n.z * (t.x - e.x),
            t.x * (e.y - n.y) + e.x * (n.y - t.y) + n.x * (t.y - e.y),
            -t.x * (e.y * n.z - n.y * e.z) -
              e.x * (n.y * t.z - t.z * n.z) -
              n.x * (t.y * e.z - e.y * t.z),
          );
        }
        static CreateFromDDP(t, e, n) {
          ((t = x.V3.trans(n, t, 10)), (e = x.V3.trans(n, e, 10)));
          return this.CreateFromPPP(n, t, e);
        }
        constructor(t, e, n, r) {
          ((this.A = t), (this.B = e), (this.C = n), (this.D = r));
        }
        normal() {
          var t = new Laya.Vector3(this.A, this.B, this.C);
          return (Laya.Vector3.normalize(t, t), t);
        }
        corssLine(t) {
          var e =
            -(this.A * t.P.x + this.B * t.P.y + this.C * t.P.z + this.D) /
            (this.A * t.D.x + this.B * t.D.y + this.C * t.D.z);
          return new Laya.Vector3(t.D.x * e + t.P.x, t.D.y * e + t.P.y, t.D.z * e + t.P.z);
        }
      }
      n.Area = k;
    }
    function tt(e, n) {
      for (let t = 0; t < e.length; t++) if (!0 === n(e[t], t)) return e[t];
      return null;
    }
    function d(t, e) {
      for (; e >= t.length;) e -= t.length;
      for (; e < 0;) e += t.length;
      return e;
    }
    function g(t, e) {
      return t + Math.round((e - t) * Math.random());
    }
    ((x.List = void 0),
      ((m = x.List || (x.List = {})).include = function (e, n, r) {
        r = r || ((t, e) => t === e);
        for (let t = 0; t < e.length; t++) if (r(e[t], n)) return !0;
        return !1;
      }),
      (m.includes = function (t, n, r) {
        for (let e = 0; e < n.length; e++)
          if (null == tt(t, (t) => (r ? r(t, n[e]) : t == n[e]))) return !1;
        return !0;
      }),
      (m.max = function (e, n) {
        let r = null,
          i = null,
          s = null;
        for (let t = 0; t < e.length; t++) {
          var a = n ? n(e[t]) : e[t];
          null != a && (null == r || a > r) && ((r = a), (i = e[t]), (s = t));
        }
        return [i, s, r];
      }),
      (m.min = function (e, n) {
        let r = null,
          i = null,
          s = null;
        for (let t = 0; t < e.length; t++) {
          var a = n ? n(e[t]) : e[t];
          null != a && (null == r || a < r) && ((r = a), (i = e[t]), (s = t));
        }
        return [i, s, r];
      }),
      (m.cull = function (e, n) {
        var r = [];
        for (let t = e.length - 1; 0 <= t; t--) !0 === n(e[t]) && r.push(e.splice(t, 1)[0]);
        return r;
      }),
      (m.get = tt),
      (m.getIdx = function (e, n) {
        for (let t = 0; t < e.length; t++) if (!0 === n(e[t], t)) return t;
        return null;
      }),
      (m.getList = function (e, n) {
        var r = [];
        for (let t = 0; t < e.length; t++) !0 === n(e[t], t) && r.push(e[t]);
        return r;
      }),
      (m.getListIdx = function (e, n) {
        var r = [];
        for (let t = 0; t < e.length; t++) !0 === n(e[t], t) && r.push(t);
        return r;
      }),
      (m.merge = function (e) {
        var n = [];
        for (let t = 0; t < e.length; t++) {
          var r = e[t];
          if (r)
            if (r instanceof Array)
              for (let t = 0; t < r.length; t++) {
                var i = r[t];
                i && n.indexOf(i) < 0 && n.push(i);
              }
            else n.indexOf(r) < 0 && n.push(r);
        }
        return n;
      }),
      (m.index = d),
      (m.at = function (t, e) {
        return t[d(t, e)];
      }),
      (m.slice = function (t, e, n) {
        return (
          (n = n || t.length - 1),
          (e = d(t, e)),
          (n = d(t, n)),
          t.slice(Math.min(e, n), Math.max(e, n))
        );
      }),
      (m.compare = function (n, r) {
        if (n.length != r.length) return !1;
        var i = [];
        for (let t = 0; t < n.length; t++) {
          let e = !1;
          var s = n[t];
          for (let t = 0; t < r.length; t++)
            if (!(0 <= i.indexOf(t)))
              if (s == r[t]) {
                ((e = !0), i.push(t));
                break;
              }
          if (!e) return !1;
        }
        return !0;
      }),
      (m.mapFilter = function (e, n, r) {
        var i = [];
        for (let t = 0; t < e.length; t++) {
          var s = n(e[t], t, e);
          r(s, t, e) && i.push(s);
        }
        return i;
      }),
      (m.filterMap = function (e, n, r) {
        var i = [];
        for (let t = 0; t < e.length; t++) n(e[t], t, e) && i.push(r(e[t], t, e));
        return i;
      }),
      (x.Random = void 0),
      ((n = x.Random || (x.Random = {})).range = g),
      (n.get = function (e, n) {
        let r = e;
        if (n) {
          r = [];
          for (let t = 0; t < e.length; t++) {
            var i = e[t];
            1 == n(i) && r.push(i);
          }
        }
        return r.length <= 0 ? null : r[g(0, r.length - 1)];
      }),
      (n.getIdx = function (e, n) {
        let r = e;
        if (n) {
          r = [];
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            1 == n(i) && r.push(i);
          }
        }
        if (!(r.length <= 0)) {
          const i = r[g(0, r.length - 1)];
          for (let t = 0; t < e.length; t++) if (e[t] === i) return t;
        }
        return null;
      }),
      (n.getlist = function (e, t, n) {
        var r = [],
          i = [];
        if (n)
          for (let t = 0; t < e.length; t++) {
            var s = e[t];
            1 == n(s) && r.push(s);
          }
        else for (let t = 0; t < e.length; t++) r.push(e[t]);
        for (x.Config.DEBUG && console.log("随机池:", r); i.length < t && 0 < r.length;) {
          var a = g(0, r.length - 1),
            a = r.splice(a, 1)[0];
          i.push(a);
        }
        return i;
      }),
      (n.circle2pos = function (t, e, n = 0) {
        var t = t.clone(),
          r = g(2 * Math.PI, 0),
          e = g(e, n);
        return ((t.x += Math.cos(r) * e), (t.y += Math.sin(r) * e), t);
      }));
    class p {
      static now() {
        return Date.now();
      }
      static diff(t) {
        return Date.now() - t;
      }
    }
    var et = function (t, a, o, l) {
      return new (o = o || Promise)(function (n, e) {
        function r(t) {
          try {
            s(l.next(t));
          } catch (t) {
            e(t);
          }
        }
        function i(t) {
          try {
            s(l.throw(t));
          } catch (t) {
            e(t);
          }
        }
        function s(t) {
          var e;
          t.done
            ? n(t.value)
            : ((e = t.value) instanceof o
                ? e
                : new o(function (t) {
                    t(e);
                  })
              ).then(r, i);
        }
        s((l = l.apply(t, a || [])).next());
      });
    };
    x.Script = void 0;
    {
      var m;
      function nt(e, n, r) {
        for (let t = 0; t < n.length; t++) {
          var [i, s] = n[t];
          if (null != r) {
            var a = r(i, s, e);
            if ("string" == typeof a) return [i, s, a];
            if (!0 === a) return [i, s];
            if (!1 === a) return [null, null];
          }
          if (e.name == s) return [i, s];
        }
        return [null, null];
      }
      (m = x.Script || (x.Script = {})).mountSp3 = function (
        s,
        a,
        o = ["prop/"],
        l = null,
        h = null,
        c = null,
      ) {
        return et(this, void 0, void 0, function* () {
          var t = (function (r, t) {
              var i = [];
              var e = W.LM.res_arr.keys();
              for (const o of e) {
                var s = W.LM.res_arr.get(o).res;
                if (s && "string" == typeof s) {
                  let e = -1,
                    n = 0;
                  for (let t = 0; t < r.length; t++)
                    if (-1 < (e = s.indexOf(r[t]))) {
                      n = r[t].length;
                      break;
                    }
                  var a = s.indexOf(".lh");
                  -1 < e &&
                    -1 < a &&
                    ((a = s.slice(e + n, a)),
                    (t && -1 < t.indexOf(a)) || ((a = a.split("/")), i.push([o, a[a.length - 1]])));
                }
              }
              return i;
            })(o, l),
            e = (function e(n, r, i, s, a) {
              a = a || [];
              if (!n) return a;
              if (s && s(n)) return a;
              let [t, o, l] = nt(n, r, i);
              null != t && (l ? a.push([t, o, n, l]) : a.push([t, o, n]));
              for (let t = 0; t < n.numChildren; t++) e(n.getChildAt(t), r, i, s, a);
              return a;
            })(s, t, h, c);
          if (
            (x.Config.DEBUG && console.log("loader中道具", t),
            x.Config.DEBUG && console.log("挂载的道具", e),
            !(e.length <= 0))
          )
            for (let t = 0; t < e.length; t++) {
              var [n, , r, i] = e[t];
              const s = yield W.Mem.g({ id: n, sn: i });
              if (!s) return void console.log("资源加载失败", n);
              ((s.transform.localPosition = new Laya.Vector3()),
                (s.transform.localRotationEuler = new Laya.Vector3()),
                (s.transform.localScale = new Laya.Vector3(1, 1, 1)),
                (s.active = !0),
                r.addChild(s),
                !(function (e, n) {
                  for (let t = 0; t < n.length; t++) {
                    var [r, i, s] = n[t];
                    if (
                      ("string" == typeof i && i == e.name) ||
                      ("function" == typeof i && i(e)) ||
                      (i instanceof RegExp && i.test(e.name))
                    )
                      return (
                        (r = x.Comp.add(e, r)),
                        s && s(r),
                        x.Config.DEBUG && console.log("挂脚本", e, i)
                      );
                  }
                  x.Config.DEBUG && console.log("无脚本，略过", e);
                })(s, a));
            }
        });
      };
      class ot extends Laya.Script3D {
        _onEnable() {
          (this.owner && this.owner._scene && this.owner._scene._addScript(this), this.onEnable());
        }
        onTriggerEnter(t) {
          this.delegate && this.delegate.onTriggerEnter(t);
        }
        onTriggerStay(t) {
          this.delegate && this.delegate.onTriggerStay(t);
        }
        onTriggerExit(t) {
          this.delegate && this.delegate.onTriggerExit(t);
        }
        onCollisionEnter(t) {
          this.delegate && this.delegate.onCollisionEnter(t);
        }
        onCollisionStay(t) {
          this.delegate && this.delegate.onCollisionStay(t);
        }
        onCollisionExit(t) {
          this.delegate && this.delegate.onCollisionExit(t);
        }
      }
      class P extends Laya.Script3D {
        static GetByClass(e, n) {
          var t;
          if (null != (t = e.getComponent(P)) && t instanceof n) return t;
          if (null != (t = e.__base) && t instanceof n) return t;
          for (let t = 0; t < e.numChildren; t++) {
            var r = this.GetByClass(e.getChildAt(t), n);
            if (null != r) return r;
          }
          return null;
        }
        static GetScript(e) {
          var t;
          if (null != (t = e.getComponent(P))) return t;
          if (null != (t = e.__base)) return t;
          for (let t = 0; t < e.numChildren; t++) {
            var n = this.GetScript(e.getChildAt(t));
            if (null != n) return n;
          }
          return null;
        }
        static Call(t, e, n) {
          t = this.GetScript(t);
          t && (n ? e.call(n, t) : e(t));
        }
        static ExecEnter(t, ...e) {
          var n;
          t instanceof P
            ? t.executeEnter(t.sp3, ...e)
            : (n = this.GetScript(t)) && n.executeEnter(t, ...e);
        }
        static ExecStay(t, ...e) {
          var n;
          t instanceof P
            ? t.executeStay(t.sp3, ...e)
            : (n = this.GetScript(t)) && n.executeStay(t, ...e);
        }
        static ExecExit(t, ...e) {
          var n;
          t instanceof P
            ? t.executeExit(t.sp3, ...e)
            : (n = this.GetScript(t)) && n.executeExit(t, ...e);
        }
        setDelay(t, e = 0) {
          ((this.timer_count[e] = p.now()), (this.timer_delay[e] = t));
        }
        timeout(t = !0, e = 0) {
          var n = p.diff(this.timer_count[e]) >= this.timer_delay[e];
          return (n && t && (this.timer_count[e] = p.now()), n);
        }
        constructor() {
          (super(),
            (this.timer_count = {}),
            (this.timer_delay = {}),
            (this.exec_count = 0),
            (this.exec_once = !1));
        }
        clear() {}
        onAwake() {
          this.sp3 = this.owner;
        }
        setDelegate(t) {
          x.Comp.add(t, ot).delegate = this;
        }
        executeEnter(...t) {
          (!this.exec_once || this.exec_count <= 0) && (this.exec_count++, this.execEnter(...t));
        }
        executeStay(...t) {
          (!this.exec_once || this.exec_count <= 0) && (this.exec_count++, this.execStay(...t));
        }
        executeExit(...t) {
          (!this.exec_once || this.exec_count <= 0) && (this.exec_count++, this.execExit(...t));
        }
        execEnter() {}
        execStay() {}
        execExit() {}
      }
      m.Base = P;
      let o;
      (((n = o = m.Axis || (m.Axis = {}))[(n.X = 0)] = "X"),
        (n[(n.Y = 1)] = "Y"),
        (n[(n.Z = 2)] = "Z"));
      class e extends P {
        constructor() {
          (super(...arguments),
            (this._euler_range = !0),
            (this._pos_range = !0),
            (this._scale_range = !0));
        }
        onAwake(t, e, n) {
          ((this.sp3 = this.owner), x.Node.mount(this, this.sp3, t, e, n));
        }
        updateEuler(t, e, n, r) {
          var i = t.transform.localRotationEuler;
          let s = 0,
            a = !1;
          return (
            (r = null == r ? o.Y : r) == o.X
              ? (s = i.x)
              : r == o.Y
                ? (s = i.y)
                : r == o.Z && (s = i.z),
            null != n ? ((s = l(s, n, e)), (a = s == n)) : (s += e),
            r == o.X ? (i.x = s) : r == o.Y ? (i.y = s) : r == o.Z && (i.z = s),
            (t.transform.localRotationEuler = i),
            a
          );
        }
        updateEulerRange(t, e, n, r) {
          var i = t.transform.localRotationEuler;
          let s = 0;
          (r == o.X ? (s = i.x) : r == o.Y ? (s = i.y) : r == o.Z && (s = i.z),
            this._euler_range
              ? (s = l(s, n[0], e)) == n[0] && (this._euler_range = !1)
              : (s = l(s, n[1], e)) == n[1] && (this._euler_range = !0),
            r == o.X ? (i.x = s) : r == o.Y ? (i.y = s) : r == o.Z && (i.z = s),
            (t.transform.localRotationEuler = i));
        }
        updatePos(t, e, n, r) {
          var i = t.transform.localPosition;
          let s = 0,
            a = !1;
          return (
            (r = null == r ? o.Y : r) == o.X
              ? (s = i.x)
              : r == o.Y
                ? (s = i.y)
                : r == o.Z && (s = i.z),
            null != n ? ((s = l(s, n, e)), (a = s == n)) : (s += e),
            r == o.X ? (i.x = s) : r == o.Y ? (i.y = s) : r == o.Z && (i.z = s),
            (t.transform.localPosition = i),
            a
          );
        }
        updatePosRange(t, e, n, r) {
          var i = t.transform.localPosition;
          let s = 0;
          (r == o.X ? (s = i.x) : r == o.Y ? (s = i.y) : r == o.Z && (s = i.z),
            this._pos_range
              ? (s = l(s, n[0], e)) == n[0] && (this._pos_range = !1)
              : (s = l(s, n[1], e)) == n[1] && (this._pos_range = !0),
            r == o.X ? (i.x = s) : r == o.Y ? (i.y = s) : r == o.Z && (i.z = s),
            (t.transform.localPosition = i));
        }
        updateScale(t, e, n) {
          var r = t.transform.localScale;
          let i = r.x,
            s = !1;
          return (
            null != n ? ((i = l(i, n, e)), (s = i == n)) : (i += e),
            (r.x = i),
            (r.y = i),
            (r.z = i),
            (t.transform.localScale = r),
            s
          );
        }
        updateScaleRange(t, e, n, r) {
          var i = t.transform.localScale;
          let s = i.x;
          (r == o.Y ? (s = i.y) : r == o.Z && (s = i.z),
            this._scale_range
              ? (s = l(s, n[0], e)) == n[0] && (this._scale_range = !1)
              : (s = l(s, n[1], e)) == n[1] && (this._scale_range = !0),
            null == r
              ? ((i.x = s), (i.y = s), (i.z = s))
              : r == o.X
                ? (i.x = s)
                : r == o.Y
                  ? (i.y = s)
                  : r == o.Z && (i.z = s),
            (t.transform.localScale = i));
        }
      }
      ((m.Prop = e),
        (m.Prop2D = class extends e {
          initCol(e, n, r, i = !0, s = !1) {
            if (e instanceof Array) {
              var a = [];
              for (let t = 0; t < e.length; t++) {
                var o = this.refreshSp3Col(e[t], n, r, i, s);
                o && a.push(o);
              }
              return a;
            }
            return this.refreshSp3Col(e, n, r, i, s);
          }
          refreshSp3Col(t, e, n, r, i) {
            var s = t.getComponent(B.B2PhysicsCollider);
            return s
              ? ((s.enabled = !0),
                (s.collisionGroup = e),
                (s.canCollideWith = n),
                (s.isTrigger = r),
                s.sTR({ wp: t.transform.position }),
                i && t != this.sp3 && (t.__base = this),
                s)
              : (x.Config.DEBUG && console.error("没有碰撞盒", t), null);
          }
          initRig(e, n, r, i = !0, s = !1, a = !1) {
            if (e instanceof Array) {
              var o = [];
              for (let t = 0; t < e.length; t++) {
                var l = this.refreshRig(e[t], n, r, i, s, a);
                l && o.push(l);
              }
              return o;
            }
            return this.refreshRig(e, n, r, i, s, a);
          }
          refreshRig(t, e, n, r, i, s) {
            var a = t.getComponent(B.B2Rigidbody);
            if (a)
              return (
                (a.collisionGroup = e),
                (a.canCollideWith = n),
                (a.isKinematic = i),
                (a.isTrigger = r),
                (a.canSleep = !1),
                a.sTR({ wp: t.transform.position }),
                s && t != this.sp3 && (t.__base = this),
                a
              );
            x.Config.DEBUG && console.error("没有刚体", t);
          }
        }),
        (m.Prop3D = class extends e {
          initCol(e, n, r, i = !0, s = !1) {
            if (e instanceof Array) {
              var a = [];
              for (let t = 0; t < e.length; t++) {
                var o = this.refreshCol(e[t], n, r, i, s);
                o && a.push(o);
              }
              return a;
            }
            return this.refreshCol(e, n, r, i, s);
          }
          refreshCol(t, e, n, r, i) {
            var s = t.getComponent(Laya.PhysicsCollider);
            if (s)
              return (
                (s.enabled = !0),
                (s.collisionGroup = e),
                (s.canCollideWith = n),
                (s.isTrigger = r),
                i && t != this.sp3 && (t.__base = this),
                s
              );
            x.Config.DEBUG && console.error("没有碰撞盒", t);
          }
          initRig(e, n, r, i = !0, s = !1, a = !1) {
            if (e instanceof Array) {
              var o = [];
              for (let t = 0; t < e.length; t++) {
                var l = this.refreshRig(e[t], n, r, i, s, a);
                l && o.push(l);
              }
              return o;
            }
            return this.refreshRig(e, n, r, i, s, a);
          }
          refreshRig(t, e, n, r, i, s) {
            var a = t.getComponent(Laya.Rigidbody3D);
            if (a)
              return (
                (a.collisionGroup = e),
                (a.canCollideWith = n),
                (a.isKinematic = i),
                (a.isTrigger = r),
                s && t != this.sp3 && (t.__base = this),
                a
              );
            x.Config.DEBUG && console.error("没有刚体", t);
          }
        }));
    }
    ((x.Algorithm = void 0),
      ((n = x.Algorithm || (x.Algorithm = {})).getTurnPath = function (t, i, s, e = 90) {
        ((t = t.clone()), (i = i.clone()));
        var e = (e / 2) * x.Angle.RandinToAngle,
          n = Laya.Vector3.distance(t, i) / 2;
        let a = Math.abs(n / Math.sin(e)),
          o =
            ((e = Math.sqrt(a * a - n * n)),
            (n = x.V3.move_rate(t, i, 0.5)),
            (t = x.V3.a2b(t, i)),
            (t = x.V3.cross(t, x.V3.Up)),
            Laya.Vector3.scale(t, s, t),
            x.V3.trans(n, t, e)),
          l = a * a,
          h = null;
        return function (t, e) {
          let n = t.transform.position;
          var r = x.V3.a2b(n, o),
            r = (Laya.Vector3.scale(r, -s, r), x.V3.cross(r, x.V3.Up)),
            r =
              ((n = x.V3.trans(n, r, e)),
              x.V3.disXZS(n, o) > l && (n = x.V3.move(o, n, a)),
              x.V3.disXZS(n, i));
          return null != h && r > h
            ? ((t.transform.position = i), !0)
            : ((h = r), (t.transform.position = n), !1);
        };
      }),
      (n.getJumpPath = function (r, i, s, a = -9.8, o = -1) {
        ((s /= 1e3), (r = r.clone()), (i = i.clone()));
        let l = x.V3.a2bXZ(r, i);
        var t;
        let h = (x.V3.disXZ(r, i) + Math.abs((o * Math.pow(s, 2)) / 2)) / s,
          c = Math.abs((s * a) / 2),
          u =
            (r.y != i.y && ((t = Laya.Vector3.distance(r, i)), (c += ((t / s) * (i.y - r.y)) / t)),
            0);
        return function (t, e) {
          var n,
            e = (u += e) / 1e3;
          return s <= e && t.transform.position.y <= i.y
            ? ((t.transform.position = i), !0)
            : (((n = x.V3.trans(r, l, h * e - Math.abs((o * Math.pow(e, 2)) / 2))).y =
                r.y + c * e - Math.abs((a * Math.pow(e, 2)) / 2)),
              r.y > i.y && n.y < i.y && (n.y = i.y),
              (t.transform.position = n),
              !1);
        };
      }),
      (n.getThrowPath = function (r, t, e, i = -9.8, s = 1) {
        ((r = r.clone()), (t = t.clone()), Laya.Vector3.normalize(t, t));
        let a = new Laya.Vector3(t.x, 0, t.z);
        Laya.Vector3.normalize(a, a);
        var n = Math.sqrt(t.x * t.x + t.z * t.z),
          o = Laya.Vector3.scalarLength(t);
        let l = (e * n) / o,
          h = (e * t.y) / o,
          c = 0;
        return function (t, e) {
          var e = (c += e) / 1e3,
            n = x.V3.trans(r, a, l * e - Math.abs((s * Math.pow(e, 2)) / 2));
          ((n.y = r.y + h * e - Math.abs((i * Math.pow(e, 2)) / 2)), (t.transform.position = n));
        };
      }),
      (n.getBezier3 = function (t, e, n = x.Script.Axis.Y) {
        var r = t[0],
          i = t[1],
          t = t[2];
        let s, a, o, l, h;
        n == x.Script.Axis.Y
          ? ((s = x.V3.disXZ(r, i)),
            (a = x.V3.disXZ(i, t)),
            (o = x.V3.a2bXZ(r, i)),
            (l = x.V3.a2bXZ(i, t)),
            (h = [0, r.y, s, i.y, s + a, t.y]))
          : n == x.Script.Axis.X
            ? ((s = x.V3.disYZ(r, i)),
              (a = x.V3.disYZ(i, t)),
              (o = x.V3.a2bYZ(r, i)),
              (l = x.V3.a2bYZ(i, t)),
              (h = [0, r.x, s, i.x, s + a, t.x]))
            : n == x.Script.Axis.Z &&
              ((s = x.V3.disXY(r, i)),
              (a = x.V3.disXY(i, t)),
              (o = x.V3.a2bXY(r, i)),
              (l = x.V3.a2bXY(i, t)),
              (h = [0, r.z, s, i.z, s + a, t.z]));
        var c = Laya.Bezier.I.getBezierPoints(h, e),
          u = [];
        for (let t = 0; t < c.length; t += 2) {
          var f = new Laya.Vector3(),
            d = c[t],
            y = c[t + 1];
          (d <= s ? x.V3.trans(r, o, d, f) : x.V3.trans(i, l, d - s, f),
            n == x.Script.Axis.Y
              ? (f.y = y)
              : n == x.Script.Axis.X
                ? (f.x = y)
                : n == x.Script.Axis.Z && (f.z = y),
            u.push(f));
        }
        return u;
      }),
      (n.getBezier4 = function (t, e, n = x.Script.Axis.Y) {
        var r = t[0],
          i = t[1],
          s = t[2],
          t = t[3];
        let a, o, l, h, c, u, f;
        n == x.Script.Axis.Y
          ? ((a = x.V3.disXZ(r, i)),
            (o = x.V3.disXZ(i, s)),
            (l = x.V3.disXZ(s, t)),
            (h = x.V3.a2bXZ(r, i)),
            (c = x.V3.a2bXZ(i, s)),
            (u = x.V3.a2bXZ(s, t)),
            (f = [0, r.y, a, i.y, a + o, s.y, a + o + l, t.y]))
          : n == x.Script.Axis.X
            ? ((a = x.V3.disYZ(r, i)),
              (o = x.V3.disYZ(i, s)),
              (l = x.V3.disYZ(s, t)),
              (h = x.V3.a2bYZ(r, i)),
              (c = x.V3.a2bYZ(i, s)),
              (u = x.V3.a2bYZ(s, t)),
              (f = [0, r.x, a, i.x, a + o, s.x, a + o + l, t.x]))
            : n == x.Script.Axis.Z &&
              ((a = x.V3.disXY(r, i)),
              (o = x.V3.disXY(i, s)),
              (l = x.V3.disXY(s, t)),
              (h = x.V3.a2bXY(r, i)),
              (c = x.V3.a2bXY(i, s)),
              (u = x.V3.a2bXY(s, t)),
              (f = [0, r.z, a, i.z, a + o, s.z, a + o + l, t.z]));
        var d = Laya.Bezier.I.getBezierPoints(f, e),
          y = [];
        for (let t = 0; t < d.length; t += 2) {
          var g = new Laya.Vector3(),
            p = d[t],
            m = d[t + 1];
          (p <= a
            ? x.V3.trans(r, h, p, g)
            : p <= a + o
              ? x.V3.trans(i, c, p - a, g)
              : x.V3.trans(s, u, p - a - o, g),
            n == x.Script.Axis.Y
              ? (g.y = m)
              : n == x.Script.Axis.X
                ? (g.x = m)
                : n == x.Script.Axis.Z && (g.z = m),
            y.push(g));
        }
        return y;
      }));
    x.Shader = void 0;
    {
      var m = x.Shader || (x.Shader = {});
      const A = {};
      m.record = function () {
        ((Laya.Shader3D.debugMode = !0),
          Laya.stage.on(Laya.Event.KEY_DOWN, null, function (t) {
            if (t.keyCode == Laya.Keyboard.SPACE) {
              for (let t = 0; t < Laya.Shader3D.debugShaderVariantCollection.variantCount; t++) {
                var e = Laya.Shader3D.debugShaderVariantCollection.getByIndex(t),
                  n = e.shader.name,
                  r = (A[n] || (A[n] = []), (n = A[n]), {});
                ((r.defineNames = e.defineNames),
                  (r.passIndex = e.passIndex),
                  (r.subShaderIndex = e.subShaderIndex),
                  n.push(r));
              }
              (console.log(A), console.log(JSON.stringify(A)));
            }
          }));
      };
    }
    class v {
      constructor(t, e) {
        if (
          ((this.map = {}),
          (this.list = []),
          (this.forceUpdate = !1),
          (this.vs_completion = []),
          (this.skin = t),
          (this.vs_origin = new Array()),
          (this.vs_result = new Array()),
          this.skin.meshFilter.sharedMesh.url)
        ) {
          var n = x.List.get(v.vs_origin_save, ([t]) => t == this.skin.meshFilter.sharedMesh.url);
          if (n) {
            this.vs_origin = n[1];
            for (let t = 0; t < this.vs_origin.length; t++)
              this.vs_result.push(this.vs_origin[t].clone());
          } else
            (this.skin.meshFilter.sharedMesh.getPositions(this.vs_origin),
              this.skin.meshFilter.sharedMesh.getPositions(this.vs_result),
              v.vs_origin_save.push([this.skin.meshFilter.sharedMesh.url, this.vs_origin]));
        } else
          (this.skin.meshFilter.sharedMesh.getPositions(this.vs_origin),
            this.skin.meshFilter.sharedMesh.getPositions(this.vs_result));
        x.Config.DEBUG && console.log(`读取节点: ${t.name}, 顶点数: ` + this.vs_origin.length);
        for (let t = 0; t < e.numChildren; t++) {
          var r = e.getChildAt(t),
            i = new rt(r.meshFilter.sharedMesh);
          ((this.map[r.name] = i),
            this.list.push(i),
            x.Config.DEBUG && console.log(`读取通道: ${r.name}, 顶点数: ` + i.vs_origin.length));
        }
        if (this.list.length) {
          var s = this.vs_origin.length - this.list[0].vs_origin.length;
          for (let t = this.vs_origin.length - s, e = 0; e < s; e++, t++) {
            const o = this.vs_origin[t];
            var a = this.vs_origin.findIndex((t) => t.x == o.x && t.y == o.y && t.z == o.z);
            (x.Config.DEBUG && console.log(`补点: ${t}, 找到对应点: ` + a),
              this.vs_completion.push(a));
          }
        }
      }
      onUpdate() {
        let e = !1;
        var n = this.list[0].vs_origin.length;
        for (let t = 0; t < this.list.length; t++) {
          var r = this.list[t];
          if (r.needUpdate || this.forceUpdate) {
            r.needUpdate = !1;
            for (let t = 0; t < n; t++) {
              var i = this.vs_result[t];
              (e || this.vs_origin[t].cloneTo(i), r.calc(t, i));
            }
            e = !0;
          }
        }
        if (e || this.forceUpdate) {
          for (let t = 0; t < this.vs_completion.length; t++)
            this.vs_result[this.vs_completion[t]].cloneTo(this.vs_result[n + t]);
          (this.skin.meshFilter.sharedMesh.setPositions(this.vs_result),
            this.skin.meshFilter.sharedMesh.calculateBounds(),
            (this.forceUpdate = !1));
        }
      }
      getPass(t) {
        return this.map[t] || null;
      }
    }
    v.vs_origin_save = [];
    class rt {
      set value(t) {
        ((this.needUpdate = !0), (this._value = t));
      }
      get value() {
        return this._value;
      }
      constructor(t, e = 0) {
        ((this.name = ""),
          (this._value = 0),
          (this.needUpdate = !1),
          (this.name = t.name),
          (this._value = e),
          (this.vs_origin = new Array()),
          t.getPositions(this.vs_origin));
      }
      calc(t, e) {
        ((e.x += this.vs_origin[t].x * this.value),
          (e.y += this.vs_origin[t].y * this.value),
          (e.z += this.vs_origin[t].z * this.value));
      }
    }
    ((x.Spine = void 0),
      ((n = x.Spine || (x.Spine = {})).addSkin = function (t, e, n = 0) {
        var r = t.skeleton;
        let i = null;
        if (
          !(i =
            "string" == typeof e ? x.List.get(r.data.skins, (t) => t.name == e) : r.data.skins[e])
        )
          throw new Error("没有对应的skin:" + e);
        (t.showSkinByIndex(n), r.skin.addSkin(i), t.showSkinByIndex(n));
      }),
      (n.addSkins = function (t, n, e = 0) {
        if (!(n.length <= 0)) {
          var r = t.skeleton;
          t.showSkinByIndex(e);
          for (let e = 0; e < n.length; e++) {
            const i = n[e];
            let t = null;
            if (
              !(t =
                "string" == typeof i
                  ? x.List.get(r.data.skins, (t) => t.name == i)
                  : r.data.skins[i])
            )
              throw new Error("没有对应的skin:" + i);
            r.skin.addSkin(t);
          }
          t.showSkinByIndex(e);
        }
      }),
      (n.removeSkin = function (t, e, n = 0) {
        var r = t.skeleton;
        let i = null;
        if (
          !(i =
            "string" == typeof e ? x.List.get(r.data.skins, (t) => t.name == e) : r.data.skins[e])
        )
          throw new Error("没有对应的skin:" + e);
        var s = i.getAttachments();
        for (let t = 0; t < s.length; t++) {
          var a = s[t];
          r.skin.removeAttachment(a.slotIndex, a.name);
        }
        t.showSkinByIndex(n);
      }),
      (n.removeSkins = function (t, n, e = 0) {
        var r = t.skeleton;
        for (let e = 0; e < n.length; e++) {
          const a = n[e];
          let t = null;
          if (
            !(t =
              "string" == typeof a ? x.List.get(r.data.skins, (t) => t.name == a) : r.data.skins[a])
          )
            throw new Error("没有对应的skin:" + a);
          var i = t.getAttachments();
          for (let t = 0; t < i.length; t++) {
            var s = i[t];
            r.skin.removeAttachment(s.slotIndex, s.name);
          }
        }
        t.showSkinByIndex(e);
      }),
      (n.removeAllSkins = function (t, n = [0], e = 0) {
        var r = t.skeleton;
        r.skin || t.showSkinByIndex(e);
        for (let e = 0; e < r.data.skins.length; e++)
          if (null == x.List.get(n, (t) => t == e)) {
            var i = r.data.skins[e].getAttachments();
            for (let t = 0; t < i.length; t++) {
              var s = i[t];
              r.skin.removeAttachment(s.slotIndex, s.name);
            }
          }
        t.showSkinByIndex(e);
      }),
      (n.xyByIdx = function (t, e) {
        var n = t.skeleton.slots[e];
        if (n) return [(n = n.bone).ax * t.scaleX, n.ay * t.scaleY, n.ascaleX, n.ascaleY];
        throw new Error("没有对应的slot:" + e);
      }),
      (n.xyByName = function (t, e) {
        var n = t.skeleton.slots;
        if ((n = x.List.get(n, (t) => t.data.name == e)))
          return [(n = n.bone).ax * t.scaleX, n.ay * t.scaleY, n.ascaleX, n.ascaleY];
        throw new Error("没有对应的slot:" + e);
      }),
      (n.skinsName = function (t) {
        var e = [],
          n = t.skeleton.data.skins;
        for (let t = 0; t < n.length; t++) e.push(n[t].name);
        return e;
      }),
      (n.slotsName = function (t) {
        var e = [],
          n = t.skeleton.slots;
        for (let t = 0; t < n.length; t++) e.push(n[t].data.name);
        return e;
      }),
      (n.anisName = function (t) {
        var e = [],
          n = t.stateData.skeletonData.animations;
        for (let t = 0; t < n.length; t++) e.push(n[t].name);
        return e;
      }));
    class _ {
      get text() {
        return this._text ? this._text.text : "";
      }
      set text(t) {
        this._text &&
          this._text.text != t &&
          ((this._text.text = t), (this._renderCount = _.renderCount));
      }
      constructor(t, e, n, r, i) {
        ((this._renderCount = _.renderCount),
          (this._mesh = t),
          (this._text = new Laya.Text()),
          (this._text.align = "center"),
          (this._text.valign = "middle"),
          (this._text.width = r || _.width),
          (this._text.height = i || _.height),
          n && (this._text.fontSize = n),
          e && (this._text.font = e),
          (this._renderTexture2D = new Laya.RenderTexture2D(
            this._text.width,
            this._text.height,
            Laya.TextureFormat.R8G8B8A8,
          )),
          this._mesh.meshRenderer.material._shaderValues.addDefine(
            Laya.UnlitMaterial.SHADERDEFINE_ALBEDOTEXTURE,
          ));
      }
      onLateUpdate() {
        this._mesh &&
          this._text &&
          0 < this._renderCount &&
          (this._renderCount--,
          this._text.drawToTexture(
            this._renderTexture2D.width,
            this._renderTexture2D.height,
            0,
            0,
            this._renderTexture2D,
          ),
          this._mesh.meshRenderer.material._shaderValues.setTexture(
            Laya.UnlitMaterial.ALBEDOTEXTURE,
            this._renderTexture2D,
          ));
      }
      onDestroy() {
        this._mesh &&
          this._text &&
          this._renderTexture2D &&
          (this._mesh.meshRenderer.material._shaderValues.removeDefine(
            Laya.UnlitMaterial.SHADERDEFINE_ALBEDOTEXTURE,
          ),
          this._text.destroy(),
          this._renderTexture2D.destroy());
      }
    }
    ((_.width = 256), (_.height = 64), (_.renderCount = 5));
    class L {
      get image() {
        return this._url;
      }
      set image(t) {
        this._image &&
          this._url != t &&
          ((this._url = t), this._image.loadImage(t), (L._renderCount = L.renderCount));
      }
      constructor(t, e, n) {
        ((this._url = ""),
          (this._mesh = t),
          (this._image = new Laya.Sprite()),
          (this._image.width = e || L.width),
          (this._image.height = n || L.height),
          L._renderTexture2D ||
            (L._renderTexture2D = new Laya.RenderTexture2D(
              this._image.width,
              this._image.height,
              Laya.TextureFormat.R8G8B8A8,
            )),
          this._mesh.meshRenderer.material._shaderValues.addDefine(
            Laya.UnlitMaterial.SHADERDEFINE_ALBEDOTEXTURE,
          ));
      }
      onLateUpdate() {
        this._mesh &&
          0 < L._renderCount &&
          (L._renderCount--,
          this._image.drawToTexture(
            L._renderTexture2D.width,
            L._renderTexture2D.height,
            0,
            0,
            L._renderTexture2D,
          ),
          this._mesh.meshRenderer.material._shaderValues.setTexture(
            Laya.UnlitMaterial.ALBEDOTEXTURE,
            L._renderTexture2D,
          ));
      }
      onDestroy() {
        this._mesh &&
          this._image &&
          (this._mesh.meshRenderer.material._shaderValues.removeDefine(
            Laya.UnlitMaterial.SHADERDEFINE_ALBEDOTEXTURE,
          ),
          this._image.destroy());
      }
    }
    ((L.width = 1024),
      (L.height = 256),
      (L.renderCount = 5),
      (L._renderCount = L.renderCount),
      (x.SP3 = void 0),
      ((m = x.SP3 || (x.SP3 = {})).setPos = function (t, e) {
        var n = t.transform.position;
        (null != e.x && (n.x = e.x),
          null != e.y && (n.y = e.y),
          null != e.z && (n.z = e.z),
          (t.transform.position = n));
      }),
      (m.setlPos = function (t, e) {
        var n = t.transform.localPosition;
        (null != e.x && (n.x = e.x),
          null != e.y && (n.y = e.y),
          null != e.z && (n.z = e.z),
          (t.transform.localPosition = n));
      }),
      (m.setEuler = function (t, e) {
        var n = t.transform.rotationEuler;
        (null != e.x && (n.x = e.x),
          null != e.y && (n.y = e.y),
          null != e.z && (n.z = e.z),
          (t.transform.rotationEuler = n));
      }),
      (m.setlEuler = function (t, e) {
        var n = t.transform.localRotationEuler;
        (null != e.x && (n.x = e.x),
          null != e.y && (n.y = e.y),
          null != e.z && (n.z = e.z),
          (t.transform.localRotationEuler = n));
      }),
      (m.setlScale = function (t, e) {
        var n = t.transform.localScale;
        (null != e.x && (n.x = e.x),
          null != e.y && (n.y = e.y),
          null != e.z && (n.z = e.z),
          (t.transform.localScale = n));
      }),
      (m.clonePos = function (t, e) {
        var t = t.transform.position,
          n = e.transform.position;
        (n.setValue(t.x, t.y, t.z), (e.transform.position = n));
      }),
      (m.cloneEuler = function (t, e) {
        var t = t.transform.rotationEuler,
          n = e.transform.rotationEuler;
        (n.setValue(t.x, t.y, t.z), (e.transform.rotationEuler = n));
      }),
      (m.clonelPos = function (t, e) {
        var t = t.transform.localPosition,
          n = e.transform.localPosition;
        (n.setValue(t.x, t.y, t.z), (e.transform.localPosition = n));
      }),
      (m.clonelEuler = function (t, e) {
        var t = t.transform.localRotationEuler,
          n = e.transform.localRotationEuler;
        (n.setValue(t.x, t.y, t.z), (e.transform.localRotationEuler = n));
      }),
      (m.clonelScale = function (t, e) {
        var t = t.transform.localScale,
          n = e.transform.localScale;
        (n.setValue(t.x, t.y, t.z), (e.transform.localScale = n));
      }),
      (m.eqPos = function (t, e, n = !1) {
        return (
          (t = t.transform.position),
          (e = e.transform.position),
          n ? t.x == e.x && t.y == e.y && t.z == e.z : Laya.Vector3.equals(t, e)
        );
      }),
      (m.eqlPos = function (t, e, n = !1) {
        return (
          (t = t.transform.localPosition),
          (e = e.transform.localPosition),
          n ? t.x == e.x && t.y == e.y && t.z == e.z : Laya.Vector3.equals(t, e)
        );
      }),
      (m.eqEuler = function (t, e, n = !1) {
        return (
          (t = t.transform.rotationEuler),
          (e = e.transform.rotationEuler),
          n ? t.x == e.x && t.y == e.y && t.z == e.z : Laya.Vector3.equals(t, e)
        );
      }),
      (m.eqlEuler = function (t, e, n = !1) {
        return (
          (t = t.transform.localRotationEuler),
          (e = e.transform.localRotationEuler),
          n ? t.x == e.x && t.y == e.y && t.z == e.z : Laya.Vector3.equals(t, e)
        );
      }),
      (m.eqlScale = function (t, e, n = !1) {
        return (
          (t = t.transform.localScale),
          (e = e.transform.localScale),
          n ? t.x == e.x && t.y == e.y && t.z == e.z : Laya.Vector3.equals(t, e)
        );
      }),
      (m.getLForward = function (t, e) {
        ((t = t.transform.localMatrix.elements), (e.x = -t[8]), (e.y = -t[9]), (e.z = -t[10]));
      }),
      (x._W = void 0));
    {
      n = x._W || (x._W = {});
      const U = {};
      n.playEffect = function (e) {
        if (e.delay) {
          var t = null != e.delayId ? e.delayId : e.id;
          if (U[t] && p.diff(U[t]) < e.delay) return;
          U[t] = p.now();
        }
        W.Mem.G({ id: e.id }, null, (t) => {
          t &&
            (e.parent.addChild(t),
            e.pos
              ? (t.transform.position = e.pos)
              : e.localPos
                ? (t.transform.localPosition = e.localPos)
                : (t.transform.localPosition = new Laya.Vector3()),
            e.re
              ? (t.transform.rotationEuler = e.re)
              : e.parent && (t.transform.localRotationEuler = new Laya.Vector3()),
            e.scale && (t.transform.localScale = e.scale),
            e.recover &&
              Laya.timer.once(e.recover, t, () => {
                W.Mem.rec(t, { self: !0 });
              }),
            e.callback) &&
            e.callback.call(e.caller, t);
        });
      };
      let r = null,
        i = 0,
        s = 0,
        a = 0,
        o = 0;
      ((n.postCameraViewport = function (t, e, n) {
        ((r = t.projectionViewMatrix),
          (e = null != e ? e : Laya.stage.clientScaleX),
          (n = null != n ? n : Laya.stage.clientScaleY),
          (i = (0.5 * t.viewport.width) / e),
          (s = (-0.5 * t.viewport.height) / n),
          (a = (0.5 * t.viewport.width + t.viewport.x) / e),
          (o = (0.5 * t.viewport.height + t.viewport.y) / n));
      }),
        (n.calcPos = function (t, e) {
          r && W.TR3.W2ScF(r, t, e, i, s, a, o);
        }));
    }
    function w(t) {
      return `(${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)})`;
    }
    ((x.Test = void 0),
      ((m = x.Test || (x.Test = {})).v3 = w),
      (m.object2Json = function (t) {
        const s = (t, e) => {
          let n = null;
          if (t instanceof Array) {
            n = [];
            for (const r of t) n.push(s(r, e));
          } else if ("object" == typeof t) {
            if (((n = {}), t && e.indexOf(t) < 0)) {
              e.push(t);
              for (const i of Object.keys(t)) n[i] = s(t[i], e);
            }
          } else n = t;
          return n;
        };
        return s(t, []);
      }),
      (m.bindPos = function (n, r = 1) {
        Laya.stage.on(Laya.Event.KEY_DOWN, null, function (t) {
          var e = n.transform.position;
          (t.keyCode == Laya.Keyboard.W
            ? (n.transform.position = x.V3.trans(e, x.V3.forward(n), r))
            : t.keyCode == Laya.Keyboard.S
              ? (n.transform.position = x.V3.trans(e, x.V3.down(n), r))
              : t.keyCode == Laya.Keyboard.A
                ? (n.transform.position = x.V3.trans(e, x.V3.right(n), r))
                : t.keyCode == Laya.Keyboard.D
                  ? (n.transform.position = x.V3.trans(e, x.V3.left(n), r))
                  : t.keyCode == Laya.Keyboard.NUMPAD_4
                    ? ((e.x -= r), (n.transform.position = e))
                    : t.keyCode == Laya.Keyboard.NUMPAD_6
                      ? ((e.x += r), (n.transform.position = e))
                      : t.keyCode == Laya.Keyboard.NUMPAD_2
                        ? ((e.y -= r), (n.transform.position = e))
                        : t.keyCode == Laya.Keyboard.NUMPAD_8
                          ? ((e.y += r), (n.transform.position = e))
                          : t.keyCode == Laya.Keyboard.NUMPAD_7
                            ? ((e.z -= r), (n.transform.position = e))
                            : t.keyCode == Laya.Keyboard.NUMPAD_9 &&
                              ((e.z += r), (n.transform.position = e)),
            console.log(
              `pos: world${w(n.transform.position)}; local${w(n.transform.localPosition)};`,
            ));
        });
      }),
      (m.bindEuler = function (n, r = 1) {
        Laya.stage.on(Laya.Event.KEY_DOWN, null, function (t) {
          var e = n.transform.rotationEuler;
          (t.keyCode == Laya.Keyboard.UP
            ? (e.x -= r)
            : t.keyCode == Laya.Keyboard.DOWN
              ? (e.x += r)
              : t.keyCode == Laya.Keyboard.LEFT
                ? (e.y += r)
                : t.keyCode == Laya.Keyboard.RIGHT
                  ? (e.y -= r)
                  : t.keyCode == Laya.Keyboard.Q
                    ? (e.z -= r)
                    : t.keyCode == Laya.Keyboard.E && (e.z += r),
            (n.transform.rotationEuler = e),
            console.log(
              `euler: world${w(n.transform.rotationEuler)}; local${w(n.transform.localRotationEuler)};`,
            ));
        });
      }),
      (m.bindPress = function (i) {
        Laya.stage.on(Laya.Event.KEY_DOWN, null, function (e) {
          for (let t = 0; t < i.length; t++) {
            var [n, r] = i[t];
            if (e.keyCode == n) {
              r(n);
              break;
            }
          }
        });
      }),
      (m.stringify = function (t) {
        const n = [];
        return JSON.stringify(t, function (t, e) {
          if ("object" == typeof e && null !== e) {
            if (-1 !== n.indexOf(e)) return;
            n.push(e);
          }
          return e;
        });
      }),
      (x.Script2D = void 0));
    {
      n = x.Script2D || (x.Script2D = {});
      class T extends Laya.Script {
        constructor() {
          (super(...arguments),
            (this.timer_count = {}),
            (this.timer_delay = {}),
            (this.exec_count = 0),
            (this.exec_once = !1));
        }
        static GetByClass(e, n) {
          var t;
          if (null != (t = e.getComponent(T)) && t instanceof n) return t;
          if (null != (t = e._delegate) && t instanceof n) return t;
          for (let t = 0; t < e.numChildren; t++) {
            var r = this.GetByClass(e.getChildAt(t), n);
            if (null != r) return r;
          }
          return null;
        }
        static GetScript(e) {
          var t;
          if (null != (t = e.getComponent(T))) return t;
          if (null != (t = e._delegate)) return t;
          for (let t = 0; t < e.numChildren; t++) {
            var n = this.GetScript(e.getChildAt(t));
            if (null != n) return n;
          }
          return null;
        }
        static Call(t, e, n) {
          t = this.GetScript(t);
          t && (n ? e.call(n, t) : e(t));
        }
        static ExecEnter(t, ...e) {
          var n;
          t instanceof T
            ? t.executeEnter(t.sp, ...e)
            : (n = this.GetScript(t)) && n.executeEnter(t, ...e);
        }
        static ExecStay(t, ...e) {
          var n;
          t instanceof T
            ? t.executeStay(t.sp, ...e)
            : (n = this.GetScript(t)) && n.executeStay(t, ...e);
        }
        static ExecExit(t, ...e) {
          var n;
          t instanceof T
            ? t.executeExit(t.sp, ...e)
            : (n = this.GetScript(t)) && n.executeExit(t, ...e);
        }
        setDelay(t, e = 0) {
          ((this.timer_count[e] = p.now()), (this.timer_delay[e] = t));
        }
        timeout(t = !0, e = 0) {
          var n = p.diff(this.timer_count[e]) >= this.timer_delay[e];
          return (n && t && (this.timer_count[e] = p.now()), n);
        }
        onAwake() {
          this.sp = this.owner;
        }
        setDelegate(t) {
          t._delegate = this;
        }
        executeEnter(...t) {
          (!this.exec_once || this.exec_count <= 0) && (this.exec_count++, this.execEnter(...t));
        }
        executeStay(...t) {
          (!this.exec_once || this.exec_count <= 0) && (this.exec_count++, this.execStay(...t));
        }
        executeExit(...t) {
          (!this.exec_once || this.exec_count <= 0) && (this.exec_count++, this.execExit(...t));
        }
        execEnter() {}
        execStay() {}
        execExit() {}
      }
      n.Base = T;
      class lt extends Laya.Script {
        onTriggerEnter(t, e, n) {
          this.delegate && this.delegate.onTriggerEnter(t, e, n);
        }
        onTriggerStay(t, e, n) {
          this.delegate && this.delegate.onTriggerStay(t, e, n);
        }
        onTriggerExit(t, e, n) {
          this.delegate && this.delegate.onTriggerExit(t, e, n);
        }
      }
      n.PhysicsDelegate = lt;
      class ht extends T {}
      ((n.Prop = ht),
        (n.Prop2D = class extends ht {
          get colBox() {
            return this.col;
          }
          get colChain() {
            return this.col;
          }
          get colCircle() {
            return this.col;
          }
          get colPolygon() {
            return this.col;
          }
          addCollider(t) {
            ((this.rig =
              this.sp.getComponent(Laya.RigidBody) || this.sp.addComponent(Laya.RigidBody)),
              (this.col = this.sp.getComponent(t) || this.sp.addComponent(t)));
          }
        }));
    }
    var it = function (t, a, o, l) {
      return new (o = o || Promise)(function (n, e) {
        function r(t) {
          try {
            s(l.next(t));
          } catch (t) {
            e(t);
          }
        }
        function i(t) {
          try {
            s(l.throw(t));
          } catch (t) {
            e(t);
          }
        }
        function s(t) {
          var e;
          t.done
            ? n(t.value)
            : ((e = t.value) instanceof o
                ? e
                : new o(function (t) {
                    t(e);
                  })
              ).then(r, i);
        }
        s((l = l.apply(t, a || [])).next());
      });
    };
    class st {
      static load(r) {
        return it(this, void 0, void 0, function* () {
          return new Promise((e, n) => {
            this.originIns.has(r)
              ? e(this.originIns.get(r))
              : Laya.Sprite3D.load(
                  W.LM.Res(r),
                  Laya.Handler.create(this, (t) => {
                    t
                      ? (this.originIns.set(r, t), e(this.originIns.get(r)))
                      : (console.error("load加载对象失败"), n(null));
                  }),
                );
          });
        });
      }
      static get(e) {
        return it(this, void 0, void 0, function* () {
          let t = Laya.Pool.getItem(String(e));
          return (
            t ||
              ((t = (t = this.originIns[e]) || (yield this.load(e))),
              ((t = Laya.Sprite3D.instantiate(t)).mem_rid = e)),
            t
          );
        });
      }
      static put(e, n = !0, r = !0) {
        if (r)
          for (let t = 0; t < e.numChildren; t++) {
            var i = e.getChildAt(t);
            this.put(i, n, r);
          }
        null != e.mem_rid && (e.removeSelf(), Laya.Pool.recover(String(e.mem_rid), e));
      }
      static clear() {
        (this.originIns.forEach((t, e) => {
          Laya.Pool.clearBySign(String(e));
        }),
          this.originIns.clear());
      }
      static Update() {}
    }
    ((st.originIns = new Map()), (x.Joystick = void 0));
    {
      var M = x.Joystick || (x.Joystick = {});
      ((M.dmax = 800),
        (M.is_center_move = !1),
        (M.onDown = !0),
        (M.onUp = !0),
        (M.onMove = !0),
        (M.onOut = !0),
        (M.onOver = !0),
        (M.multi = !0));
      class ct {
        constructor(t, e, n, r, i) {
          ((this._identifier = -1),
            (this._centerX = -1),
            (this._centerY = -1),
            (this.touch_panel = t),
            (this.caller = e),
            M.onDown && this.touch_panel.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown, [n]),
            M.onUp && this.touch_panel.on(Laya.Event.MOUSE_UP, this, this.onMouseUp, [r]),
            M.onMove && this.touch_panel.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove, [i]),
            M.onOut && this.touch_panel.on(Laya.Event.MOUSE_OUT, this, this.onMouseOver, [r]),
            M.onOver && this.touch_panel.on(Laya.Event.MOUSE_OVER, this, this.onMouseOver, [r]));
        }
        destroy() {
          (M.onDown && this.touch_panel.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
            M.onUp && this.touch_panel.off(Laya.Event.MOUSE_UP, this, this.onMouseUp),
            M.onMove && this.touch_panel.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
            M.onOut && this.touch_panel.off(Laya.Event.MOUSE_OUT, this, this.onMouseOver),
            M.onOver && this.touch_panel.off(Laya.Event.MOUSE_OVER, this, this.onMouseOver),
            (this.touch_panel = null),
            (this.caller = null));
        }
        get bgX() {
          return this._centerX;
        }
        get bgY() {
          return this._centerY;
        }
        Joystick2DTo3DForward(t, e) {
          return Math.atan2(e, t) + 0.5 * Math.PI;
        }
        onMouseDown(t, e) {
          x.Config.DEBUG && console.log("onMouseDown", e);
          var n =
            null != (n = e.touches) ? n : [{ identifier: 0, stageX: e.stageX, stageY: e.stageY }];
          if (0 < n.length) {
            if (!M.multi && 1 < n.length) return !1;
            e = n[0];
            if (-1 == this._identifier)
              return (
                (this._identifier = e.identifier),
                (this._centerX = e.stageX / W.Stage.scale),
                (this._centerY = e.stageY / W.Stage.scale),
                null != t && t.call(this.caller),
                !0
              );
          }
          return !1;
        }
        onMouseUp(t, e) {
          x.Config.DEBUG && console.log("onMouseUp", e);
          var n,
            r =
              null != (n = e.touches)
                ? n
                : [{ identifier: -1, stageX: e.stageX, stageY: e.stageY }];
          let i = !0;
          if (1 < r.length)
            for (let t = 0; t < r.length; t++)
              if (r[t].identifier == this._identifier) {
                i = !1;
                break;
              }
          return !!i && (this.exeUp(t), !0);
        }
        onMouseOver(t, e) {
          return (x.Config.DEBUG && console.log("onMouseOver", e), this.exeUp(t), !0);
        }
        exeUp(t) {
          ((this._identifier = -1),
            (this._centerX = -1),
            (this._centerY = -1),
            null != t && t.call(this.caller));
        }
        onMouseMove(e, t) {
          x.Config.DEBUG && console.log("onMouseMove", t);
          var n,
            r =
              null != (n = t.touches) ? n : [{ identifier: 0, stageX: t.stageX, stageY: t.stageY }];
          for (let t = 0; t < r.length; t++) {
            var i,
              s,
              a = r[t];
            if (a.identifier == this._identifier)
              return (
                (i = a.stageX / W.Stage.scale - this._centerX),
                (a = a.stageY / W.Stage.scale - this._centerY),
                null != e && e.call(this.caller, i, a),
                (s = Math.sqrt(i * i + a * a)) > M.dmax &&
                  ((s = 1 - M.dmax / s),
                  (this._centerX = this._centerX + i * s),
                  (this._centerY = this._centerY + a * s)),
                [i, a]
              );
          }
          return null;
        }
      }
      ((M.Core = ct),
        (M.bg_skin = ""),
        (M.dot_skin = ""),
        (M.up_hide = !1),
        (M.UI = class extends ct {
          constructor(t, e, n, r, i, s, a) {
            (super(t, e, n, r, i),
              (this.radius = 100),
              (this.def_centerX = -1),
              (this.def_centerY = -1),
              (this.bg = new Laya.Image()),
              (this.bg.skin = M.bg_skin),
              (this.bg.anchorX = 0.5),
              (this.bg.anchorY = 0.5),
              this.touch_panel.addChild(this.bg),
              (this.dot = new Laya.Image()),
              (this.dot.skin = M.dot_skin),
              (this.dot.anchorX = 0.5),
              (this.dot.anchorY = 0.5),
              this.touch_panel.addChild(this.dot),
              (this.def_centerX = s / W.Stage.scale),
              (this.def_centerY = a / W.Stage.scale),
              this.hideRing());
          }
          destroy() {
            (super.destroy(), this.bg.destroy(), this.dot.destroy());
          }
          onMouseDown(t, e) {
            t = super.onMouseDown(t, e);
            return (t && this.showRing(), t);
          }
          onMouseUp(t, e) {
            t = super.onMouseUp(t, e);
            return (t && this.hideRing(), t);
          }
          onMouseMove(t, e) {
            t = super.onMouseMove(t, e);
            return (t && this.moveDot(t[0], t[1]), t);
          }
          moveDot(t, e) {
            Math.sqrt(t * t + e * e) <= this.radius
              ? this.dot.pos(this._centerX + t, this._centerY + e)
              : ((e = Math.atan2(e, t)),
                this.dot.pos(
                  this._centerX + Math.cos(e) * this.radius,
                  this._centerY + Math.sin(e) * this.radius,
                ));
          }
          showRing() {
            (M.up_hide && (this.bg.visible = this.dot.visible = !0),
              (this.dot.x = this.bg.x = this._centerX),
              (this.dot.y = this.bg.y = this._centerY),
              (this.radius = 0.5 * (this.bg.width - this.dot.width)));
          }
          hideRing() {
            (M.up_hide && (this.bg.visible = this.dot.visible = !1),
              (this.bg.x = this.dot.x = this.def_centerX),
              (this.bg.y = this.dot.y = this.def_centerY));
          }
        }));
    }
    x.Interaction = void 0;
    m = x.Interaction || (x.Interaction = {});
    ((m.Scale = class {
      constructor(t) {
        ((this.lastDistance = 0),
          (this.lastDelta = 0),
          Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp),
          Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp),
          Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
          Laya.stage.on(Laya.Event.MOUSE_WHEEL, this, this.onMouseWheel),
          (this.onScale = t));
      }
      destory() {
        Laya.stage.offAllCaller(this);
      }
      onMouseDown(t) {
        t = t.touches;
        t &&
          2 == t.length &&
          ((this.lastDistance = this.getDistance(t)),
          (this.lastDelta = 0),
          Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove));
      }
      onMouseMove(t) {
        t = this.getDistance(t.touches);
        (this.onScale && this.onScale(t - this.lastDistance), (this.lastDistance = t));
      }
      onMouseWheel(t) {
        (this.onScale && this.onScale(this.lastDelta + t.delta),
          ((0 < this.lastDelta && t.delta < 0) || (this.lastDelta < 0 && 0 < t.delta)) &&
            (this.lastDelta = 0),
          (this.lastDelta += t.delta));
      }
      onMouseUp(t) {
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
      }
      getDistance(t) {
        var e,
          n = 0;
        return (
          t &&
            2 == t.length &&
            ((e = t[0].stageX - t[1].stageX),
            (t = t[0].stageY - t[1].stageY),
            (n = Math.sqrt(e * e + t * t))),
          n
        );
      }
    }),
      (m.Rotate = class {
        constructor(t) {
          ((this.preRadian = 0),
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp),
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp),
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
            (this.onRotate = t));
        }
        destory() {
          Laya.stage.offAllCaller(this);
        }
        onMouseDown(t) {
          t = t.touches;
          t &&
            2 == t.length &&
            ((this.preRadian = Math.atan2(t[0].stageY - t[1].stageY, t[0].stageX - t[1].stageX)),
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove));
        }
        onMouseMove(t) {
          var t = t.touches;
          t &&
            2 == t.length &&
            ((t = Math.atan2(t[0].stageY - t[1].stageY, t[0].stageX - t[1].stageX)),
            this.onRotate && this.onRotate((180 / Math.PI) * (t - this.preRadian)),
            (this.preRadian = t));
        }
        onMouseUp(t) {
          Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        }
      }),
      (x.TweenSequence = void 0));
    {
      (n = x.TweenSequence || (x.TweenSequence = {})).createSequence = function () {
        return new ut();
      };
      class ut {
        constructor() {
          ((this.tasks = []), (this.complete = null));
        }
        get length() {
          return this.tasks.length;
        }
        Append(t) {
          this.tasks.push(t);
        }
        AppendInterval(t) {
          this.tasks.push(t);
        }
        SetDelay(t) {
          this.tasks.unshift(t);
        }
        OnComplete(t) {
          this.complete = t;
        }
        Start() {
          this.doTask();
        }
        Stop() {
          (this.current && "object" == typeof this.current
            ? Laya.Tween.clearAll(this.current.target)
            : Laya.timer.clearAll(this),
            (this.tasks.length = 0));
        }
        doTask() {
          (this.current &&
            "object" == typeof this.current &&
            (this.current.complete && this.current.complete.run(), (this.current = null)),
            this.tasks.length
              ? ((this.current = this.tasks.shift()),
                "number" == typeof this.current
                  ? Laya.timer.once(this.current, this, this.doTask)
                  : Laya.Tween.to(
                      this.current.target,
                      this.current.props,
                      this.current.duration,
                      this.current.ease,
                      Laya.Handler.create(this, this.doTask),
                      this.current.delay,
                      this.current.coverBefore,
                      this.current.autoRecover,
                    ))
              : this.complete && this.complete());
        }
      }
      n.Sequence = ut;
    }
    return (
      (x.Bezier = class ft {
        constructor() {
          ((this.total = 0), (this.delta = 0), (this.out = new Laya.Vector3()));
        }
        static GetAllPos(e, t, n, r, i) {
          var s = [];
          if (null != i) {
            var a = t,
              o = r,
              l = i,
              h = n;
            for (let t = 0; t <= e; t++) {
              var c = t / e;
              s.push(
                new Laya.Vector3(
                  Math.pow(1 - c, 3) * a.x +
                    3 * o.x * c * (1 - c) * (1 - c) +
                    3 * l.x * c * c * (1 - c) +
                    h.x * Math.pow(c, 3),
                  Math.pow(1 - c, 3) * a.y +
                    3 * o.y * c * (1 - c) * (1 - c) +
                    3 * l.y * c * c * (1 - c) +
                    h.y * Math.pow(c, 3),
                  Math.pow(1 - c, 3) * a.z +
                    3 * o.z * c * (1 - c) * (1 - c) +
                    3 * l.z * c * c * (1 - c) +
                    h.z * Math.pow(c, 3),
                ),
              );
            }
          } else {
            var u = t,
              f = r,
              d = n;
            for (let t = 0; t <= e; t++) {
              var y = t / e;
              s.push(
                new Laya.Vector3(
                  Math.pow(1 - y, 2) * u.x + 2 * y * (1 - y) * f.x + Math.pow(y, 2) * d.x,
                  Math.pow(1 - y, 2) * u.y + 2 * y * (1 - y) * f.y + Math.pow(y, 2) * d.y,
                  Math.pow(1 - y, 2) * u.z + 2 * y * (1 - y) * f.z + Math.pow(y, 2) * d.z,
                ),
              );
            }
          }
          return s;
        }
        static Get(t) {
          var e = new ft();
          return ((e.total = t), (e.delta = 0), e);
        }
        static Tween(a, o, l, h, c, u) {
          let f = 0;
          return null != u
            ? {
                get progress() {
                  return f;
                },
                set progress(t) {
                  var e,
                    n,
                    r,
                    i,
                    t = +(f = t),
                    s = a();
                  s &&
                    ((e = l),
                    (n = c),
                    (r = u),
                    (i = h),
                    s.setValue(
                      Math.pow(1 - t, 3) * e.x +
                        3 * n.x * t * (1 - t) * (1 - t) +
                        3 * r.x * t * t * (1 - t) +
                        i.x * Math.pow(t, 3),
                      Math.pow(1 - t, 3) * e.y +
                        3 * n.y * t * (1 - t) * (1 - t) +
                        3 * r.y * t * t * (1 - t) +
                        i.y * Math.pow(t, 3),
                      Math.pow(1 - t, 3) * e.z +
                        3 * n.z * t * (1 - t) * (1 - t) +
                        3 * r.z * t * t * (1 - t) +
                        i.z * Math.pow(t, 3),
                    ),
                    o(s));
                },
              }
            : {
                get progress() {
                  return f;
                },
                set progress(t) {
                  var e,
                    n,
                    r,
                    t = +(f = t),
                    i = a();
                  i &&
                    ((e = l),
                    (n = c),
                    (r = h),
                    i.setValue(
                      Math.pow(1 - t, 2) * e.x + 2 * t * (1 - t) * n.x + Math.pow(t, 2) * r.x,
                      Math.pow(1 - t, 2) * e.y + 2 * t * (1 - t) * n.y + Math.pow(t, 2) * r.y,
                      Math.pow(1 - t, 2) * e.z + 2 * t * (1 - t) * n.z + Math.pow(t, 2) * r.z,
                    ),
                    o(i));
                },
              };
        }
        static Tween2Obj(a, o, l, h, c, u, f) {
          ((a._bezier_progress = 0),
            null != f
              ? Object.defineProperty(a, "bezier_progress", {
                  configurable: !0,
                  get() {
                    return a._bezier_progress;
                  },
                  set(t) {
                    a._bezier_progress = t;
                    var e,
                      n,
                      r,
                      i,
                      t = +a._bezier_progress,
                      s = o();
                    s &&
                      ((e = h),
                      (n = u),
                      (r = f),
                      (i = c),
                      s.setValue(
                        Math.pow(1 - t, 3) * e.x +
                          3 * n.x * t * (1 - t) * (1 - t) +
                          3 * r.x * t * t * (1 - t) +
                          i.x * Math.pow(t, 3),
                        Math.pow(1 - t, 3) * e.y +
                          3 * n.y * t * (1 - t) * (1 - t) +
                          3 * r.y * t * t * (1 - t) +
                          i.y * Math.pow(t, 3),
                        Math.pow(1 - t, 3) * e.z +
                          3 * n.z * t * (1 - t) * (1 - t) +
                          3 * r.z * t * t * (1 - t) +
                          i.z * Math.pow(t, 3),
                      ),
                      l(s));
                  },
                })
              : Object.defineProperty(a, "bezier_progress", {
                  configurable: !0,
                  get() {
                    return a._bezier_progress;
                  },
                  set(t) {
                    a._bezier_progress = t;
                    var e,
                      n,
                      r,
                      t = +a._bezier_progress,
                      i = o();
                    i &&
                      ((e = h),
                      (n = u),
                      (r = c),
                      i.setValue(
                        Math.pow(1 - t, 2) * e.x + 2 * t * (1 - t) * n.x + Math.pow(t, 2) * r.x,
                        Math.pow(1 - t, 2) * e.y + 2 * t * (1 - t) * n.y + Math.pow(t, 2) * r.y,
                        Math.pow(1 - t, 2) * e.z + 2 * t * (1 - t) * n.z + Math.pow(t, 2) * r.z,
                      ),
                      l(i));
                  },
                }));
        }
        calc(t, e, n, r, i) {
          (this.out.setValue(0, 0, 0),
            (this.delta += t),
            this.delta >= this.total && (this.delta = this.total));
          var s,
            a,
            o,
            t = this.delta / this.total;
          return (
            null != i
              ? ((a = e),
                (o = r),
                (s = n),
                this.out.setValue(
                  Math.pow(1 - t, 3) * a.x +
                    3 * o.x * t * (1 - t) * (1 - t) +
                    3 * i.x * t * t * (1 - t) +
                    s.x * Math.pow(t, 3),
                  Math.pow(1 - t, 3) * a.y +
                    3 * o.y * t * (1 - t) * (1 - t) +
                    3 * i.y * t * t * (1 - t) +
                    s.y * Math.pow(t, 3),
                  Math.pow(1 - t, 3) * a.z +
                    3 * o.z * t * (1 - t) * (1 - t) +
                    3 * i.z * t * t * (1 - t) +
                    s.z * Math.pow(t, 3),
                ))
              : ((a = e),
                (o = r),
                (i = n),
                this.out.setValue(
                  Math.pow(1 - t, 2) * a.x + 2 * t * (1 - t) * o.x + Math.pow(t, 2) * i.x,
                  Math.pow(1 - t, 2) * a.y + 2 * t * (1 - t) * o.y + Math.pow(t, 2) * i.y,
                  Math.pow(1 - t, 2) * a.z + 2 * t * (1 - t) * o.z + Math.pow(t, 2) * i.z,
                )),
            this.delta >= this.total
          );
        }
      }),
      (x.BlendShapes = class {
        constructor(e) {
          ((this.map = {}), (this.list = []));
          for (let t = 0; t < e.numChildren; t++) {
            var n,
              r = e.getChildAt(t);
            if (!r.name.startsWith("BL") && r instanceof Laya.SkinnedMeshSprite3D) {
              let t = x.Node.find(e, "BL" + r.name);
              (t = t || x.Node.find(e, "BL")) &&
                ((n = new v(r, t)), (this.map[r.name] = n), this.list.push(n));
            }
          }
        }
        set forceUpdate(e) {
          for (let t = 0; t < this.list.length; t++) this.list[t].forceUpdate = e;
        }
        onUpdate() {
          for (let t = 0; t < this.list.length; t++) this.list[t].onUpdate();
        }
        setValue(t, e, n) {
          var r;
          null != this.map[t]
            ? null != (r = this.map[t]).map[e]
              ? (x.Config.DEBUG && console.log("设置", t, e, n), (r.map[e].value = n))
              : x.Config.DEBUG && console.log("pass为空", e, r)
            : x.Config.DEBUG && console.log("skin", t, e, this);
        }
        getSkin(t) {
          return this.map[t] || null;
        }
        getPass(t, e) {
          t = this.getSkin(t);
          return t ? t.getPass(e) : null;
        }
      }),
      (x.Buff = N),
      (x.Image3D = L),
      (x.Mat = class {
        constructor() {
          ((this.mats = new Map()), (this.urls = new Map()), (this.loadList = []));
        }
        Add(e) {
          const n = [];
          if (e instanceof Array)
            for (let t = 0; t < e.length; t++) {
              var r = e[t];
              this.mats.has(r) || (this.mats.set(r, null), this.urls.set(r, r), n.push([r, r]));
            }
          else
            Object.keys(e).forEach((t) => {
              this.mats.has(t) ||
                (this.mats.set(t, null), this.urls.set(t, e[t]), n.push([t, e[t]]));
            });
          return n;
        }
        Urls() {
          const n = [];
          return (this.urls.forEach((t, e) => n.push([e, t])), n);
        }
        Load(t, e, n) {
          (n && (this.loadComplete = n),
            (this.loadList = null != e ? this.Add(e) : this.Urls()),
            t && 0 < t.length
              ? W.LM.lss(t, { caller: this, fcb: () => this.loadMats() })
              : this.loadMats());
        }
        LoadSync(n, r) {
          return new Promise((t, e) => {
            this.Load(n, r, t);
          });
        }
        Clear() {
          (this.mats.forEach((t, e) => {
            (this.mats.set(e, null), Laya.Loader.clearRes(W.LM.Res(this.urls.get(e))));
          }),
            this.mats.clear());
        }
        loadMats() {
          if (this.loadList.length <= 0)
            (x.Config.DEBUG && console.log("加载完成"),
              this.loadComplete && this.loadComplete(),
              (this.loadComplete = null));
          else
            for (let t = 0; t < this.loadList.length; t++) {
              var e = this.loadList[t][0],
                n = this.loadList[t][1],
                n = W.LM.Res(n);
              Laya.loader.load(
                n,
                Laya.Handler.create(
                  this,
                  (t, e, n) => {
                    (n
                      ? (this.loadList.pop(),
                        x.Config.DEBUG &&
                          console.log("加载完成:", e, "剩余:", this.loadList.length),
                        this.mats.set(t, n))
                      : (this.loadList.pop(),
                        x.Config.DEBUG &&
                          console.error(`加载失败: ${e} 剩余: ` + this.loadList.length)),
                      this.loadList.length <= 0 &&
                        (x.Config.DEBUG && console.log("加载完成"),
                        this.loadComplete && this.loadComplete(),
                        (this.loadComplete = null)));
                  },
                  [e, n],
                ),
                null,
                Laya.Material.MATERIAL,
              );
            }
        }
        Set(e, n, t = 0) {
          if (this.mats.has(e)) {
            var r,
              i = this.mats.get(e);
            if (i)
              n.skinnedMeshRenderer
                ? (((r = n.skinnedMeshRenderer.sharedMaterials)[t] = i),
                  (n.skinnedMeshRenderer.sharedMaterials = r))
                : n.meshRenderer
                  ? (((r = n.meshRenderer.sharedMaterials)[t] = i),
                    (n.meshRenderer.sharedMaterials = r))
                  : n.skyRenderer
                    ? (n.skyRenderer.material = i)
                    : x.Config.DEBUG && console.log("未知类型", n);
            else {
              t = this.urls.get(e);
              const s = W.LM.Res(t);
              (x.Config.DEBUG && console.log("开始加载:", t, s),
                void Laya.Material.load(
                  s,
                  Laya.Handler.create(this, (t) => {
                    t
                      ? (x.Config.DEBUG && console.log("加载完成:", s),
                        this.mats.set(e, t),
                        this.Set(e, n))
                      : x.Config.DEBUG && console.error("加载失败: " + s);
                  }),
                ));
            }
          } else x.Config.DEBUG && console.warn("未定义的字符: " + e);
        }
        Get(t) {
          return this.mats.has(t)
            ? this.mats.get(t) || (x.Config.DEBUG && console.warn("未加载的字符: " + t), null)
            : (x.Config.DEBUG && console.warn("未定义的字符: " + t), null);
        }
        Setter0(l, t, h, c) {
          let u = "x";
          switch (t) {
            case x.Script.Axis.X:
              u = "x";
              break;
            case x.Script.Axis.Y:
              u = "y";
              break;
            case x.Script.Axis.Z:
              u = "z";
          }
          return (e) => {
            var n = (e.length > l.length ? l : e).length,
              t = x.List.getList(e.split(""), (t) => "." == t).length,
              r = h - (t * (0.5 * c) + (n - t) * c) / 2 + c / 2;
            let i = 0;
            for (let t = 0; t < l.length; t++) {
              var s,
                a,
                o = l[t];
              t < n
                ? ((o.active = !0),
                  (s = e[t]),
                  this.Set(s, o),
                  (a = o.transform.localPosition),
                  "." == s ? ((i += c / 2), (a[u] = r + i + 0.25 * c)) : ((i += c), (a[u] = r + i)),
                  (o.transform.localPosition = a))
                : (o.active = !1);
            }
          };
        }
        Setter1(c, t, u, f, d) {
          let y = "x";
          switch (t) {
            case x.Script.Axis.X:
              y = "x";
              break;
            case x.Script.Axis.Y:
              y = "y";
              break;
            case x.Script.Axis.Z:
              y = "z";
          }
          return (e) => {
            var n = (e.length > c.length ? c : e).length,
              t = x.List.getList(e.split(""), (t) => "." == t).length,
              r = f[n - 1],
              i = d[n - 1],
              s = u - (t * (0.5 * r) + (n - t) * r) / 2 + r / 2 - r;
            let a = 0;
            for (let t = 0; t < c.length; t++) {
              var o,
                l,
                h = c[t];
              (t < n
                ? ((h.active = !0),
                  (o = e[t]),
                  this.Set(o, h),
                  (l = h.transform.localPosition),
                  "." == o ? ((a += r / 2), (l[y] = s + a + 0.25 * r)) : ((a += r), (l[y] = s + a)),
                  (h.transform.localPosition = l))
                : (h.active = !1),
                (h.transform.localScale = new Laya.Vector3(i, i, i)));
            }
          };
        }
        Setter2(i) {
          return (e) => {
            var n = (e.length > i.length ? i : e).length;
            for (let t = 0; t < i.length; t++) {
              var r = i[t];
              t < n ? ((r.active = !0), this.Set(e[t], r)) : (r.active = !1);
            }
          };
        }
      }),
      (x.Pool = st),
      (x.Task = t),
      (x.Text3D = _),
      (x.addTo = function (t, e) {
        var n = t.transform.position.clone(),
          r = t.transform.rotation.clone();
        (e.addChild(t), (t.transform.position = n), (t.transform.rotation = r));
      }),
      (x.convertToChinaNum = function (t) {
        var e = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
          n = [
            "",
            "十",
            "百",
            "千",
            "万",
            "十",
            "百",
            "千",
            "亿",
            "十",
            "百",
            "千",
            "万",
            "十",
            "百",
            "千",
            "亿",
          ];
        if (!t || isNaN(t)) return "零";
        for (var r = t.toString().split(""), i = "", s = 0; s < r.length; s++) {
          var a = r.length - 1 - s,
            i = n[s] + i;
          i = e[r[a]] + i;
        }
        return (i = (i = (i = (i = (i = (i = i
          .replace(/零(千|百|十)/g, "零")
          .replace(/十零/g, "十")).replace(/零+/g, "零"))
          .replace(/零亿/g, "亿")
          .replace(/零万/g, "万")).replace(/亿万/g, "亿")).replace(/零+$/, "")).replace(
          /^一十/g,
          "十",
        ));
      }),
      (x.delta = function (t = 16.6, e = 33.2) {
        var n = Laya.timer.delta;
        return n < t ? t : e < n ? e : n;
      }),
      (x.equal = function (t, e, n = 1e-5) {
        return Math.abs(t - e) < n || Math.abs(e - t) < n;
      }),
      (x.getDuration = function (t, e) {
        var n = t.getControllerLayer()._states;
        for (let t = 0; t < n.length; t++) {
          var r = n[t];
          e[r.name] = r.clip.duration();
        }
      }),
      (x.keys = function (t) {
        return Object.keys(t);
      }),
      (x.lerp = l),
      (x.lerpV2 = function (t, e, n) {
        if (((n *= (e = isNaN(e) ? t : e) - t), t < e)) {
          if (e <= t + n) return e;
        } else if (e < t && t + n <= e) return e;
        return t + n;
      }),
      (x.meshTiling = function (t, e, n) {
        var r = new Laya.Vector4();
        return (
          (r.x = 1 / n),
          (r.y = 1 / e),
          (r.z = (t % n) * r.x),
          (r.w = 1 - r.y - Math.floor(t / n) * r.y),
          r
        );
      }),
      (x.numFixed = s),
      (x.rate = function (t, e) {
        if (0 == t || 0 == e) return 0;
        let n, r;
        return (
          (r = e <= t ? ((n = t), e) : ((n = e), t)),
          (e = Math.abs(n - r) / Math.abs(n)),
          isNaN(e) || e == 1 / 0 ? 0 : e
        );
      }),
      (x.setOnClick = function (e, n, t, r) {
        (Laya.Tween.clearAll(e),
          x.Async.list([
            [
              n,
              (t) =>
                Laya.Tween.to(
                  e,
                  { scaleX: 1.1, scaleY: 1.1 },
                  50,
                  Laya.Ease.linearNone,
                  Laya.Handler.create(n, t),
                ),
            ],
            [
              n,
              (t) =>
                Laya.Tween.to(
                  e,
                  { scaleX: 1, scaleY: 1 },
                  50,
                  Laya.Ease.linearNone,
                  Laya.Handler.create(n, t),
                ),
            ],
          ]).then(() => {
            t.call(n, r);
          }));
      }),
      (x.time2Countdown = function (t, e = 14) {
        t = Math.floor(t);
        var n,
          r = [null, null, null, null, null];
        (16 & e &&
          (0 < (n = Math.floor(t / 1e3 / 60 / 60 / 24)) && (t -= 24 * n * 60 * 60 * 1e3),
          (r[0] = n)),
          8 & e &&
            (0 < (n = Math.floor(t / 1e3 / 60 / 60)) && (t -= 60 * n * 60 * 1e3), (r[1] = n)),
          4 & e && (0 < (n = Math.floor(t / 1e3 / 60)) && (t -= 60 * n * 1e3), (r[2] = n)),
          2 & e && (0 < (n = Math.floor(t / 1e3)) && (t -= 1e3 * n), (r[3] = n)),
          1 & e && ((n = Math.floor(t / 10)), (r[4] = n)));
        let i = "";
        for (let t = r.length - 1; 0 <= t; t--)
          if (null == r[t]) {
            if (0 != i.length) break;
          } else i = 0 < i.length ? s(r[t], 2) + ":" + i : s(r[t], 2);
        return i;
      }),
      (x.upper = function (t) {
        return t.slice(0, 1).toUpperCase() + t.slice(1).toLowerCase();
      }),
      (x.values = function (e) {
        var n = Object.keys(e),
          r = [];
        for (let t = 0; t < n.length; t++) r.push(e[n[t]]);
        return r;
      }),
      x
    );
  })({});
});
