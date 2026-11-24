define("OpenWalls/js/bundle.js", function (require, module, exports) {
  var __extends =
    (this && this.__extends) ||
    (function () {
      var e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        };
      return function (t, i) {
        function __() {
          this.constructor = t;
        }
        (e(t, i),
          (t.prototype = null === i ? Object.create(i) : ((__.prototype = i.prototype), new __())));
      };
    })();
  !(function r(e, t, i) {
    function o(a, s) {
      if (!t[a]) {
        if (!e[a]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(a, !0);
          if (n) return n(a, !0);
          var c = new Error("Cannot find module '" + a + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var h = (t[a] = { exports: {} });
        e[a][0].call(
          h.exports,
          function (t) {
            return o(e[a][1][t] || t);
          },
          h,
          h.exports,
          r,
          e,
          t,
          i,
        );
      }
      return t[a].exports;
    }
    for (var n = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
    return o;
  })(
    {
      1: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e("./sceneui/RankUI"),
            a = (function () {
              function GameConfig() {}
              return (
                (GameConfig.init = function () {
                  (0, Laya.ClassUtils.regClass)("sceneui/RankUI.ts", n.default);
                }),
                (GameConfig.width = 640),
                (GameConfig.height = 1136),
                (GameConfig.scaleMode = "fixedwidth"),
                (GameConfig.screenMode = "none"),
                (GameConfig.alignV = "top"),
                (GameConfig.alignH = "left"),
                (GameConfig.startScene = "imgsc/RankScene.scene"),
                (GameConfig.sceneRoot = ""),
                (GameConfig.debug = !1),
                (GameConfig.stat = !1),
                (GameConfig.physicsDebug = !1),
                (GameConfig.exportSceneToJson = !0),
                GameConfig
              );
            })();
          ((i.default = a), a.init());
        },
        { "./sceneui/RankUI": 3 },
      ],
      2: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e("./GameConfig"),
            a = e("./sceneui/RankUI");
          new ((function () {
            function Main() {
              ((Laya.isWXOpenDataContext = !0),
                (Laya.isWXPosMsg = !0),
                Laya.init(n.default.width, n.default.height, !1),
                (Laya.stage.scaleMode = n.default.scaleMode),
                (Laya.stage.screenMode = n.default.screenMode),
                (Laya.stage.alignV = n.default.alignV),
                (Laya.stage.alignH = n.default.alignH),
                Laya.Browser.window.wx
                  ? Laya.Browser.window.wx.onMessage(
                      function (e) {
                        "res/atlas/img/rank.atlas" == e.url &&
                          Laya.loader.load(
                            "res/atlas/img/rank.atlas",
                            Laya.Handler.create(this, this.onComplete),
                          );
                      }.bind(this),
                    )
                  : Laya.loader.load(
                      "res/atlas/img/rank.atlas",
                      Laya.Handler.create(this, this.onComplete),
                    ));
            }
            return (
              (Main.prototype.onComplete = function () {
                new a.default().init();
              }),
              Main
            );
          })())();
        },
        { "./GameConfig": 1, "./sceneui/RankUI": 3 },
      ],
      3: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e("../ui/layaMaxUI"),
            a = e("./UiUtils"),
            r = (function (e) {
              function RankUI() {
                var t = e.call(this) || this;
                return (
                  (t._key = "score"),
                  (t.userInfo = null),
                  (t.userScore = 0),
                  (t.rankList = null),
                  (t.ch = null),
                  t
                );
              }
              return (
                __extends(RankUI, e),
                (RankUI.prototype.onOpened = function () {
                  RankUI.instance = this;
                }),
                (RankUI.prototype.init = function () {
                  ((this.ch = Laya.Browser.window.wx),
                    Laya.stage.removeChildren(),
                    Laya.stage.addChild(this),
                    this.ch && this.ch.onMessage(this.recevieData.bind(this)),
                    this.initList());
                }),
                (RankUI.prototype.initList = function () {
                  ((this.list.vScrollBarSkin = ""), (this.list.selectEnable = !0));
                }),
                (RankUI.prototype.recevieData = function (e) {
                  var t = this;
                  if (e.msgType == a.UiUtils.SCENE_RANK) {
                    this.userScore = e.score;
                    var i = Laya.Browser.window.wx;
                    (i &&
                      i.getUserInfo({
                        openIdList: ["selfOpenId"],
                        success: function (e) {
                          ((t.userInfo = e.data[0]), t.initUser());
                        },
                        fail: function (e) {},
                      }),
                      this.getFriendData());
                  }
                }),
                (RankUI.prototype.getFriendData = function () {
                  var e = this;
                  this.ch.getFriendCloudStorage({
                    keyList: [e._key],
                    success: function (t) {
                      var i = t.data;
                      (i.sort(function (e, t) {
                        if (0 == e.KVDataList.length && 0 == t.KVDataList.length) return 0;
                        if (0 == e.KVDataList.length) return 1;
                        if (0 == t.KVDataList.length) return -1;
                        var i = JSON.parse(e.KVDataList[0].value).wxgame.score;
                        return JSON.parse(t.KVDataList[0].value).wxgame.score - i;
                      }),
                        (e.rankList = i),
                        e.refreshListData());
                    },
                    fail: function (e) {},
                  });
                }),
                (RankUI.prototype.refreshListData = function () {
                  this.list.dataSource = null;
                  var e = this.rankList;
                  if (this.rankList.length > 100) {
                    e = [];
                    for (var t = 0; t <= 100; t++) this.rankList[t] && e.push(this.rankList[t]);
                  }
                  if (e.length > 0) {
                    var i = [],
                      n = null;
                    for (t = 0; t < e.length; t++) {
                      if (e[t]) {
                        var a = 0;
                        (e[t].KVDataList.length > 0 &&
                          e[t].KVDataList[0] &&
                          (a = JSON.parse(e[t].KVDataList[0].value).wxgame.score),
                          (n = {
                            iv_bg_item: {
                              skin:
                                t < 3 ? "img/rank/paih_" + (t + 4) + ".png" : "img/rank/paih_7.png",
                            },
                            iv_rank: {
                              visible: t < 3,
                              skin: t < 3 ? "img/rank/rank_" + (t + 1) + ".png" : "",
                            },
                            lb_rank: { visible: t >= 3, text: t + 1 + "" },
                            lb_name: { text: e[t].nickname + "" },
                            lb_grade: { text: a + "关" },
                            iv_icon: { skin: e[t].avatarUrl },
                          }));
                      }
                      (i.push(n), (this.list.visible = !0), (this.user.visible = !0));
                    }
                    this.list.dataSource = i;
                  }
                  (this.initUser(), this.list.refresh());
                }),
                (RankUI.prototype.initUser = function () {
                  var e = this.rankList;
                  if (e) {
                    for (var t = 9999, i = null, n = null, a = 0, r = 0; r < e.length; r++) {
                      if (this.userInfo && this.userInfo.avatarUrl) {
                        var o = this.userInfo.avatarUrl.split("/"),
                          s = e[r].avatarUrl.split("/");
                        o[o.length - 1] == s[s.length - 1] &&
                          this.userInfo.nickName == e[r].nickname &&
                          ((i = e[r].avatarUrl),
                          (n = e[r].nickName),
                          e[r].KVDataList.length > 0 &&
                            e[r].KVDataList[0] &&
                            (a = JSON.parse(e[r].KVDataList[0].value).wxgame.score),
                          this.refreshUserData(a, e[r].nickname, r, e[r].avatarUrl));
                      }
                      (e[r].KVDataList.length > 0 &&
                        e[r].KVDataList[0] &&
                        (a = JSON.parse(e[r].KVDataList[0].value).wxgame.score),
                        this.userScore >= a && 9999 == t && (t = r - 1) < 0 && (t = 0));
                    }
                    this.userInfo || this.refreshUserData(this.userScore, n, t, i);
                  }
                }),
                (RankUI.prototype.refreshUserData = function (e, t, i, n) {
                  ((this.iv_rank.visible = i < 3),
                    (this.iv_rank.skin = i < 3 ? "img/rank/rank_" + (i + 1) + ".png" : ""),
                    (this.lb_rank.visible = i >= 3),
                    (this.lb_rank.text = i + 1 + ""),
                    (this.lb_name.text = t + ""),
                    (this.lb_grade_user.text = e + "关"),
                    (this.iv_icon_user.skin = n));
                }),
                (RankUI.prototype.onDisable = function () {}),
                (RankUI.SCENE_NAME = "imgsc/RankScene.scene"),
                RankUI
              );
            })(n.ui.imgsc.RankSceneUI);
          i.default = r;
        },
        { "../ui/layaMaxUI": 5, "./UiUtils": 4 },
      ],
      4: [
        function (e, t, i) {
          "use strict";
          (Object.defineProperty(i, "__esModule", { value: !0 }), (i.UiUtils = void 0));
          var n = (function () {
            function UiUtils() {}
            return (
              (UiUtils.init = function () {
                ((this.eventDispatcher = new Laya.EventDispatcher()),
                  (this.eventDis = new Laya.EventDispatcher()));
              }),
              (UiUtils.isX = function () {
                return Laya.Browser.width / Laya.Browser.height < 0.49;
              }),
              (UiUtils.screenAdaptation = function (e, t) {
                (void 0 === t && (t = 100),
                  Laya.Browser.width / Laya.Browser.height < 0.49 && (e.y = e.y + t));
              }),
              (UiUtils.pxTodb = function (e) {
                return (e * (Laya.Browser.width / Laya.stage.width)) / Laya.Browser.pixelRatio;
              }),
              (UiUtils.setScale = function (e) {
                ((e.width = Laya.stage.width), (e.height = Laya.stage.height));
              }),
              (UiUtils.eventDispatcher = null),
              (UiUtils.eventDis = null),
              (UiUtils.SCENE_RANK = "badge"),
              (UiUtils.SCENE_RANK_LEVEL = 1),
              UiUtils
            );
          })();
          i.UiUtils = n;
        },
        {},
      ],
      5: [
        function (e, t, i) {
          "use strict";
          (Object.defineProperty(i, "__esModule", { value: !0 }), (i.ui = void 0));
          var n = Laya.Scene,
            a = Laya.ClassUtils.regClass;
          !(function (e) {
            !(function (e) {
              var t = (function (e) {
                function RankSceneUI() {
                  return e.call(this) || this;
                }
                return (
                  __extends(RankSceneUI, e),
                  (RankSceneUI.prototype.createChildren = function () {
                    (e.prototype.createChildren.call(this), this.createView(RankSceneUI.uiView));
                  }),
                  (RankSceneUI.uiView = {
                    type: "Scene",
                    props: { width: 640, runtime: "sceneui/RankUI.ts", height: 1138 },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: { width: 640, var: "root", height: 1138, centerY: 0, centerX: 0 },
                        compId: 5,
                        child: [
                          {
                            type: "List",
                            props: {
                              y: 291,
                              x: 103,
                              width: 434,
                              visible: !1,
                              var: "list",
                              spaceY: 12,
                              repeatY: 6,
                              repeatX: 1,
                              height: 496,
                            },
                            compId: 84,
                            child: [
                              {
                                type: "Box",
                                props: { y: 0, x: 0, width: 434, renderType: "render", height: 75 },
                                compId: 86,
                                child: [
                                  {
                                    type: "Image",
                                    props: {
                                      y: 0,
                                      x: 0,
                                      width: 434,
                                      skin: "img/rank/paih_4.png",
                                      name: "iv_bg_item",
                                      height: 75,
                                    },
                                    compId: 87,
                                  },
                                  {
                                    type: "Image",
                                    props: {
                                      y: 38,
                                      x: 36,
                                      skin: "img/rank/rank_3.png",
                                      name: "iv_rank",
                                      anchorY: 0.5,
                                      anchorX: 0.5,
                                    },
                                    compId: 88,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 37,
                                      x: 36,
                                      visible: !1,
                                      text: "5",
                                      strokeColor: "#000000",
                                      stroke: 5,
                                      name: "lb_rank",
                                      fontSize: 40,
                                      font: "SimHei",
                                      color: "#ffffff",
                                      bold: !0,
                                      anchorY: 0.5,
                                      anchorX: 0.5,
                                    },
                                    compId: 89,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 12,
                                      x: 194,
                                      width: 103,
                                      valign: "middle",
                                      text: "兮虞卿等啊",
                                      strokeColor: "#000000",
                                      stroke: 3,
                                      overflow: "hidden",
                                      name: "lb_name",
                                      height: 50,
                                      fontSize: 20,
                                      font: "Microsoft YaHei",
                                      color: "#ffffff",
                                      align: "center",
                                    },
                                    compId: 90,
                                  },
                                  {
                                    type: "Image",
                                    props: {
                                      y: 39,
                                      x: 112,
                                      width: 55,
                                      skin: "img/rank/paih_22.png",
                                      name: "iv_icon",
                                      height: 56,
                                      anchorY: 0.5,
                                      anchorX: 0.5,
                                    },
                                    compId: 91,
                                    child: [
                                      {
                                        type: "Sprite",
                                        props: {
                                          y: 0,
                                          x: 0,
                                          width: 55,
                                          texture: "img/rank/paih_22.png",
                                          renderType: "mask",
                                          height: 56,
                                        },
                                        compId: 92,
                                      },
                                    ],
                                  },
                                  {
                                    type: "Image",
                                    props: {
                                      y: 9,
                                      x: 82,
                                      width: 59,
                                      skin: "img/rank/paih_11.png",
                                      name: "iv_icon_bg",
                                      height: 59,
                                    },
                                    compId: 93,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 17,
                                      x: 354,
                                      width: 72,
                                      valign: "middle",
                                      text: "25关",
                                      strokeColor: "#000000",
                                      stroke: 4,
                                      overflow: "hidden",
                                      name: "lb_grade",
                                      height: 50,
                                      fontSize: 24,
                                      font: "Microsoft YaHei",
                                      color: "#ffffff",
                                      align: "left",
                                    },
                                    compId: 94,
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "Box",
                            props: {
                              y: 798,
                              x: 75,
                              visible: !1,
                              var: "user",
                              renderType: "render",
                            },
                            compId: 85,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: 0,
                                  x: 0,
                                  width: 488,
                                  var: "item_bg",
                                  skin: "img/rank/paih_8.png",
                                  name: "item_bg",
                                  height: 85,
                                },
                                compId: 95,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 46,
                                  x: 42,
                                  width: 80,
                                  visible: !1,
                                  var: "lb_rank",
                                  valign: "middle",
                                  text: "5",
                                  strokeColor: "#000000",
                                  stroke: 5,
                                  name: "lb_rank",
                                  fontSize: 40,
                                  font: "SimHei",
                                  color: "#ffffff",
                                  bold: !0,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 96,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 42,
                                  x: 41,
                                  visible: !1,
                                  var: "iv_rank",
                                  text: "5",
                                  strokeColor: "#000000",
                                  stroke: 5,
                                  skin: "img/rank/rank_1.png",
                                  name: "iv_rank",
                                  fontSize: 40,
                                  font: "SimHei",
                                  color: "#ffffff",
                                  bold: !0,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                },
                                compId: 97,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 19,
                                  x: 241,
                                  width: 98,
                                  var: "lb_name",
                                  valign: "middle",
                                  text: "lemon",
                                  strokeColor: "#000000",
                                  stroke: 3,
                                  overflow: "hidden",
                                  name: "lb_name",
                                  height: 50,
                                  fontSize: 20,
                                  font: "Microsoft YaHei",
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "left",
                                },
                                compId: 98,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 42,
                                  x: 128,
                                  width: 62,
                                  var: "iv_icon_user",
                                  skin: "img/rank/paih_22.png",
                                  name: "iv_icon_user",
                                  height: 63,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                },
                                compId: 99,
                                child: [
                                  {
                                    type: "Sprite",
                                    props: {
                                      y: 0,
                                      x: 0,
                                      width: 62,
                                      texture: "img/rank/paih_22.png",
                                      renderType: "mask",
                                      height: 63,
                                    },
                                    compId: 100,
                                  },
                                ],
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 8,
                                  x: 95,
                                  width: 66,
                                  skin: "img/rank/paih_11.png",
                                  name: "iv_icon_bg_user",
                                  height: 66,
                                },
                                compId: 101,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 18,
                                  x: 387,
                                  width: 72,
                                  var: "lb_grade_user",
                                  valign: "middle",
                                  text: "7关",
                                  strokeColor: "#000000",
                                  stroke: 4,
                                  overflow: "hidden",
                                  name: "lb_grade_user",
                                  height: 50,
                                  fontSize: 28,
                                  font: "Microsoft YaHei",
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "left",
                                },
                                compId: 102,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    loadList: [
                      "img/rank/paih_4.png",
                      "img/rank/rank_3.png",
                      "img/rank/paih_22.png",
                      "img/rank/paih_11.png",
                      "img/rank/paih_8.png",
                      "img/rank/rank_1.png",
                    ],
                    loadList3D: [],
                  }),
                  RankSceneUI
                );
              })(n);
              ((e.RankSceneUI = t), a("ui.imgsc.RankSceneUI", t));
            })(e.imgsc || (e.imgsc = {}));
          })(i.ui || (i.ui = {}));
        },
        {},
      ],
    },
    {},
    [2],
  );
});
