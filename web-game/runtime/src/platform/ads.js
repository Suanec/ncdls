define("libs/min/ad.min.js", function (require, module, exports) {
  window.Ad = (function (c) {
    "use strict";
    var n;
    ((c.Var = void 0),
      ((f = c.Var || (c.Var = {})).Version = "1.0.27"),
      (f.DebugSwitch = !1),
      (f.DebugSwitch0 = !1),
      (f.DebugSwitch1 = !1),
      (f.DebugWhite0 = !1),
      (f.DebugWhite1 = !1),
      (f.Default_Switch = !1),
      (f.isOppoSub = !1),
      (f.CH = null),
      (f._SwitchM0 = null),
      (f._Global = null),
      (f._Param = null),
      (f.otherSceneName = null),
      (f.onShortcutInstalled = null),
      (f.onVideoStart = null),
      (f.onVideoStop = null),
      (f.onAutoVideoReward = function () {
        (W.ICache.addGold(200), W.ICache.saveData());
      }),
      (f.onOpenNative = null),
      (f.onShowAlways = null),
      (f.onHide = null),
      (f.onSwitchComp = null),
      (f.pack_time = 0),
      (f.isVideo = !1),
      (f.isGaming = !1),
      (f.last_touch = 0),
      (f.show_dyzt = !0),
      (f.show_dy_report = !1),
      (f.show_rank_w = !1),
      (f.is_sz_sdk = !1),
      (f.is_wx_sw = !1),
      (f.show_wxjlyq = !0));
    const r = {
      turn_num: "turn_num",
      free_turn: "free_turn",
      physical: "physical",
      physical_time: "physical_time",
      is_na_award: "is_na_award",
      is_old_user: "is_old_user",
      clickId: "clickId",
      callback: "callback",
      click_ad_num: "click_ad_num",
      active_time: "active_time",
      is_user_info: "is_user_info",
      game_quan: "game_quan",
      is_subscribe: "is_subscribe",
      ks_ad_active: "ks_ad_active",
      user_openid: "user_openid",
    };
    class o {
      static get(e, t = 0) {
        return (
          (null != W.Cache.get(e) && null != W.Cache.get(e) && !Number.isNaN(W.Cache.get(e))) ||
            W.Cache.set(e, t),
          W.Cache.get(e)
        );
      }
      static set(e, t) {
        (W.Cache.set(e, t), W.ICache.saveData());
      }
      static add(e, t = 1) {
        (this.get(e), W.Cache.add(e, t));
      }
      static dec(e, t = 1) {
        (this.get(e), W.Cache.dec(e, t));
      }
      static getPhysical() {
        return (o.get(r.physical) < 0 && o.set(r.physical, 0), o.get(r.physical));
      }
      static addPhysical(e, t = !0) {
        (0 < e && o.set(r.physical_time, W.Time.getNow()),
          (t && o.get(r.physical) >= c.Var._SwitchM0.physical_power) ||
            (o.add(r.physical, e),
            t &&
              o.get(r.physical) > c.Var._SwitchM0.physical_power &&
              o.set(r.physical, c.Var._SwitchM0.physical_power)));
      }
      static decPhysical(e) {
        (o.get(r.physical) >= c.Var._SwitchM0.physical_power &&
          o.set(r.physical_time, W.Time.getNow()),
          o.dec(r.physical, e),
          o.get(r.physical) < 0 && o.set(r.physical, 0),
          W.ICache.saveData());
      }
      static getLockItem(e = 1) {
        var t = [],
          i = W.ItemBox.getItemsConditionsByType(1, e);
        if (0 < i.length)
          for (let e = 0; e < i.length; e++) {
            var a = i[e],
              s = a.conditions[0].item;
            2 != a.state && t.push(s);
          }
        e = null;
        return (e = 0 < t.length ? t[W.Ran.int(t.length - 1, 0)] : e);
      }
      static getLockItemByArr(t = [1], i = [1]) {
        var a = [];
        for (let e = 0; e < t.length; e++) {
          var s = W.ItemBox.getItemsConditionsByType(1, t[e]);
          if (0 < s.length)
            for (let e = 0; e < s.length; e++) {
              var n = s[e],
                r = n.conditions[0].item;
              for (let e = 0; e < i.length; e++) 2 != n.state && r.ct == i[e] && a.push(r);
            }
        }
        var e = null;
        return (
          0 < a.length &&
            (a.sort(function () {
              return 0.5 - Math.random();
            }),
            (e = a[W.Ran.int(a.length - 1, 0)])),
          e
        );
      }
      static getLockArr(t = [1]) {
        var i = [];
        for (let e = 0; e < t.length; e++) {
          var a = W.ItemBox.getItemsConditionsByType(1, t[e]);
          if (0 < a.length)
            for (let e = 0; e < a.length; e++) {
              var s = a[e],
                n = s.conditions[0].item;
              2 != s.state && i.push(n);
            }
        }
        return i;
      }
      static incVnum(e, t) {
        null == t && (t = 1);
        e = W.ItemBox.getUserBoxItem(e);
        return (
          (null != e.vnum && null != e.vnum && !Number.isNaN(e.vnum)) || (e.vnum = 0),
          (e.vnum += t),
          e
        );
      }
    }
    class h {
      static start() {
        c.Var._SwitchM0.physical_power_swtich
          ? (h.init(), h.refresh(), Laya.timer.clearAll(h), Laya.timer.loop(1e3, h, h.refresh))
          : Laya.timer.clearAll(h);
      }
      static get() {
        return o.getPhysical();
      }
      static add(e = 1, t = !0) {
        (o.addPhysical(e, t), h.init(), h.refresh());
      }
      static dec() {
        (o.decPhysical(1), h.init(), h.refresh());
      }
      static cd_str(e = 6, i = "满") {
        if (o.getPhysical() >= c.Var._SwitchM0.physical_power) return i;
        {
          var [i, e = 14] = [1e3 * h.time, e];
          i = Math.floor(i);
          var a = [null, null, null, null, null];
          16 & e &&
            (0 < (s = Math.floor(i / 1e3 / 60 / 60 / 24)) && (i -= 24 * s * 60 * 60 * 1e3),
            (a[0] = s));
          {
            var s;
            8 & e &&
              (0 < (s = Math.floor(i / 1e3 / 60 / 60)) && (i -= 60 * s * 60 * 1e3), (a[1] = s));
          }
          4 & e && (0 < (n = Math.floor(i / 1e3 / 60)) && (i -= 60 * n * 1e3), (a[2] = n));
          {
            var n;
            2 & e && (0 < (n = Math.floor(i / 1e3)) && (i -= 1e3 * n), (a[3] = n));
          }
          1 & e && ((e = Math.floor(i / 10)), (a[4] = e));
          let t = "";
          for (let e = a.length - 1; 0 <= e; e--)
            if (null == a[e]) {
              if (0 != t.length) break;
            } else t = 0 < t.length ? T(a[e], 2) + ":" + t : T(a[e], 2);
          return t;
          return;
        }
      }
      static cd_num() {
        return o.getPhysical() >= c.Var._SwitchM0.physical_power ? 0 : this.time;
      }
      static init() {
        h.time = c.Var._SwitchM0.physical_power_time;
        var e = o.get(r.physical_time),
          t = Math.floor((W.Time.getNow() - e) / 1e3 / c.Var._SwitchM0.physical_power_time);
        (0 < t && o.addPhysical(t),
          o.getPhysical() < c.Var._SwitchM0.physical_power &&
            ((e =
              Math.floor((W.Time.getNow() - e) / 1e3) - c.Var._SwitchM0.physical_power_time * t),
            (h.time = h.time - e),
            h.time <= 0 && (h.time = 20),
            h.time > c.Var._SwitchM0.physical_power_time &&
              (h.time = c.Var._SwitchM0.physical_power_time),
            isNaN(h.time)) &&
            (h.time = c.Var._SwitchM0.physical_power_time));
      }
      static refresh() {
        o.getPhysical() < c.Var._SwitchM0.physical_power &&
          0 < h.time &&
          (h.time--, h.time < 1) &&
          ((h.time = c.Var._SwitchM0.physical_power_time), o.addPhysical(1));
      }
    }
    function T(e, t) {
      return String(e).length < t ? (Array(t).join("0") + e).slice(-t) : String(e);
    }
    ((h.time = 600),
      ((f = n = n || {})[(f.onError = -1)] = "onError"),
      (f[(f.onFail = 0)] = "onFail"),
      (f[(f.onSuccess = 1)] = "onSuccess"),
      (f[(f.onLoad = 2)] = "onLoad"),
      (c.CH = void 0),
      ((f = c.CH || (c.CH = {}))[(f.WEIXIN = 0)] = "WEIXIN"),
      (f[(f.QQ = 1)] = "QQ"),
      (f[(f.ZJ = 2)] = "ZJ"),
      (f[(f.BAIDU = 3)] = "BAIDU"),
      (f[(f.VIVO = 4)] = "VIVO"),
      (f[(f.OPPO = 5)] = "OPPO"),
      (f[(f.HUAWEI = 6)] = "HUAWEI"),
      (f[(f.HONOR = 7)] = "HONOR"),
      (f[(f.XIAOMI = 8)] = "XIAOMI"),
      (f[(f.KUAI = 9)] = "KUAI"),
      (f[(f.UC = 10)] = "UC"),
      (f[(f.MEIZU = 11)] = "MEIZU"),
      (f[(f.GB4399 = 12)] = "GB4399"),
      (f[(f.Android_233 = 13)] = "Android_233"),
      (f[(f.Android_KS = 14)] = "Android_KS"),
      (f[(f.IOS_KESHENG = 15)] = "IOS_KESHENG"),
      (f[(f.WEB_360 = 16)] = "WEB_360"),
      (f[(f.WX_VIDEO = 17)] = "WX_VIDEO"),
      (f[(f.WEB_4399 = 18)] = "WEB_4399"),
      (f[(f.WX_CC = 19)] = "WX_CC"),
      (f[(f.BILI = 20)] = "BILI"),
      (f[(f.ALIPAY = 21)] = "ALIPAY"),
      (f[(f.JD = 22)] = "JD"),
      (f[(f.ZJ_HW = 23)] = "ZJ_HW"));
    class R {
      constructor() {
        ((this.systemInfo = null),
          (this.appName = ""),
          (this.screenWidth = Laya.Browser.clientWidth),
          (this.screenHeight = Laya.Browser.clientHeight),
          (this.launchOption = null),
          (this.sourceScene = null),
          (this.sourceAppId = null),
          (this.videoEnable = !1));
      }
    }
    class e {
      constructor() {
        ((this.Global = null),
          (this.SwitchM0 = null),
          (this.ch = null),
          (this.videoAd = null),
          (this.videoCallback = null),
          (this.bannerAd = null),
          (this.bannerAds = []),
          (this.bannerAdt = null),
          (this.banIndex = 0),
          (this.insertAd = null),
          (this.customAd = null),
          (this.customAds = []),
          (this.gridAds = []),
          (this.nativeAd = null),
          (this.nativeAds = []),
          (this.nativeIdIndex = 0),
          (this.gameBannerAd = null),
          (this.gamePortalAd = null),
          (this.gameDrawerAd = null),
          (this.boxBannerAdId = ""),
          (this.boxBannerAd = null),
          (this.boxPortalAdId = ""),
          (this.boxPortalAd = null),
          (this.boxAd = null),
          (this.blockAd = null),
          (this.blockAds = []),
          (this.loadingTimeoutId = null));
      }
      init(e, t, i) {
        ((this.ch = e), (this.db = new R()), t && this.set_abs(t), i ? i() : this.post_default());
      }
      post_default() {}
      set_abs(e) {
        for (const t in e) this[t] = e[t];
      }
      login(e = null) {
        e && e(!0);
      }
      getSystem() {
        var e;
        this.ch &&
          ((e = this.db.systemInfo = this.ch.getSystemInfoSync()),
          (this.db.platform = e.platform),
          (this.db.appName = this.db.systemInfo.appName),
          (this.db.screenWidth = e.screenWidth),
          (this.db.screenHeight = e.screenHeight));
      }
      getLaunchOptions() {
        var e;
        this.ch &&
          (e = this.db.launchOption = this.ch.getLaunchOptionsSync()) &&
          this.h != c.CH.HONOR &&
          (e.referrerInfo || (e.referrerInfo = {}),
          (this.db.sourceScene = this.db.launchOption.scene),
          (this.db.sourceAppId =
            this.db.launchOption.query.source_appid || this.db.launchOption.referrerInfo.appId),
          this.db.launchOption.query &&
            this.db.launchOption.query.ucode &&
            (this.Global.share_ucode = this.db.launchOption.query.ucode),
          e && "sidebar_new" == e.from && (this.Global.is_navigate_award = !0),
          e && "dsp" == e.from && (o.set(r.ks_ad_active, 1), W.ICache.saveData()),
          e && "021036" == e.scene && (this.Global.is_navigate_award = !0),
          e && "021020" == e.scene && (this.Global.is_shortcut_award = !0),
          e && 1104 == e.scene && (this.Global.is_my_mini_award = !0),
          e && 1023 == e.scene && (this.Global.is_shortcut_award_wx = !0),
          e.query && "021036" == e.query.scene && (this.Global.is_navigate_award = !0),
          !e.query ||
            (0 != e.query.feed_game_scene &&
              1 != e.query.feed_game_scene &&
              2 != e.query.feed_game_scene &&
              3 != e.query.feed_game_scene) ||
            (this.Global.is_feed_award = !0));
      }
      onShowAlways(t = null) {
        this.ch &&
          this.ch.onShow((e) => {
            ((c.Var.last_touch = Laya.Browser.now()),
              t && t(),
              e && "021036" == e.scene && (this.Global.is_navigate_award = !0),
              e && "021020" == e.scene && (this.Global.is_shortcut_award = !0),
              e && e.query && "021036" == e.query.scene && (this.Global.is_navigate_award = !0),
              e && "sidebar_new" == e.from && (this.Global.is_navigate_award = !0),
              e && 1104 == e.scene && (this.Global.is_my_mini_award = !0),
              e && 1023 == e.scene && (this.Global.is_shortcut_award_wx = !0),
              e &&
                e.query &&
                e.query.feed_game_scene &&
                1 == e.query.feed_game_scene &&
                (this.Global.is_feed_award = !0),
              c.Var.onShowAlways && c.Var.onShowAlways(e));
          });
      }
      onShow(i = null) {
        if (this.ch) {
          let t = (e) => {
            ((c.Var.last_touch = Laya.Browser.now()), i && i(), this.ch.offShow(t));
          };
          (this.ch.offShow(t), this.ch.onShow(t));
        }
      }
      onHide(e = null) {
        this.ch &&
          this.ch.onHide(() => {
            (W.ICache.setLastLeavlTime(),
              W.ICache.saveData(),
              (c.Var.last_touch = Laya.Browser.now()),
              e && e(),
              c.Var.onHide && c.Var.onHide());
          });
      }
      showLoading(t = 3e3, i = null) {
        this.ch &&
          this.ch.showLoading({
            title: "加载中...",
            success(e) {
              this.loadTimeoutId = setTimeout(() => {
                (this.hideLoading(), i && i());
              }, t);
            },
          });
      }
      showToast(e, t = "none", i = 1e3) {
        this.ch && this.ch.showToast({ title: e, icon: t, duration: i });
      }
      showModal(e, t, i = !0, a = null) {
        this.ch &&
          this.ch.showModal({
            title: e,
            content: t,
            showCancel: i,
            success(e) {
              e.confirm ? a && a(!0) : e.cancel && a && a(!1);
            },
          });
      }
      vibrateShort(e = "light") {
        this.ch &&
          this.Global.shake_switch &&
          this.ch.vibrateShort({ type: e, success() {}, fail() {}, complete() {} });
      }
      vibrateLong() {
        this.ch &&
          this.Global.shake_switch &&
          this.ch.vibrateLong({ success() {}, fail() {}, complete() {} });
      }
      hideLoading() {
        this.ch &&
          this.ch.hideLoading({
            success(e) {
              this.loadingTimeoutId &&
                (clearTimeout(this.loadingTimeoutId), (this.loadingTimeoutId = null));
            },
          });
      }
      createVideoAd() {}
      showVideoAd(e) {}
      initBannerId() {}
      createBannerAd(e) {}
      destroyBannerAd() {}
      showBannerAd(e, t) {}
      reportEvent(e) {}
      sendStageStartEvent(e, t) {}
      sendStageLevelEvent(e, t) {}
      hideBannerAd() {}
      resetBannerAd() {}
      showInterstitialAd(e) {}
      setKeepScreenOn(e) {}
      createCustomAdWx(e, t, i, a, s) {}
      showCustomAdWx(e) {}
      hideCustomAdsWx(e) {}
      hideCustomAdWx() {}
      desCustomAdsWx(e) {}
      showShareMenu() {}
      showShareImageMenu() {}
      startGameRecorderManager() {}
      stopGameRecorderManager() {}
      pauseGameRecorderManager() {}
      resumeGameRecorderManager() {}
      recordShare(e) {}
      showMoreGamesModal() {}
      setUserCloudStorage(e, t) {}
      getOpenContext() {}
      getUserInfo(e) {}
      getUserProfile(e) {}
      getSetting(e, t) {}
      getSettingState(e, t) {}
      openSetting(e, t) {}
      postMessage(e, t) {}
      requirePrivacyAuthorize(e) {}
      share(e) {}
      shareOther(e) {}
      shareInvite(e) {}
      createCustomAd(e, t, i, a, s, n, r) {}
      hasShortcutInstalled(e) {}
      installShortcut(e) {}
      showBoxPortalAd(e) {}
      hideBoxPortalAd() {}
      showBoxBannerAd(e) {}
      hideBoxBannerAd() {}
      showGamePortalAd(e) {}
      createNativeAd(e) {}
      showNativeAd(e) {}
      clickNativeAd() {}
      showCustomAd(e, t, i) {}
      hideCustomAd() {}
      getImRankList(e, t, i) {}
      setImRankData(e) {}
      exitApplication() {}
      openPrivacy() {}
      openUserAgree() {}
      showFullVideoAd() {}
      showFeedAdToKs(e, t) {}
      showInterstitialAdToKs(e, t) {}
      createBlockAd(e, t, i, a, s, n) {}
      showBlockAd(e) {}
      hideBlockAd(e) {}
      createAppBox() {}
      showAppBox() {}
      createClickBanner(e, t) {}
      revertClickBanner() {}
      hideClickBanner() {}
      showShopWindow() {}
      showInfoFlow() {}
      createCustomAds(e, t, i, a, s) {}
      showCustomAds(e, t, i, a) {}
      hideCustomAds(e) {}
      showBoxSuspendAd() {}
      hideBoxSuspendAd() {}
      destroyNativeAd() {}
      getCustomData() {}
      requestCustomData() {}
      checkScene(e) {}
      navigateToScene(e) {}
      reportAnalytics(e, t) {}
      createGameClubButton(e, t = 0, i) {}
      showGameClubButton(e) {}
      getGameClubData(e) {}
      hideGameClubButton() {}
      destroyGameClubButton() {}
      getGameRecorder() {}
      startGameRecorder() {}
      stopGameRecorder() {}
      pauseGameRecorder() {}
      resumeGameRecorder() {}
      operateGameRecorderVideo() {}
      requestSubscribeMessage(e, t) {}
      requestFeedSubscribe(e, t) {}
      storeFeedData(e, t) {}
      reportScene() {}
      checkIsAddedToMyMiniProgram(e) {}
      loadRecommend() {}
      showRecommend() {}
      checkSliderBar(e) {}
      addCommonUse(e) {}
      checkCommonUse(e) {}
      jumpToGameClub(e, t = 0) {}
      getEnterOptionsSync() {}
      onMemoryWarning(e) {}
      offMemoryWarning(e) {}
      onError(e) {}
      offError(e) {}
      getMiniReportManager(e) {
        return null;
      }
      getGameLogManager(e) {
        return null;
      }
      getRealtimeLogManager(e) {
        return null;
      }
      onUnhandledRejection(e) {}
      navigateToMiniProgram(e) {
        e.fail && e.fail();
      }
    }
    class s {
      static getOS() {
        return window.conchConfig.getOS();
      }
      static getBridge(e = this.SDK_JAVA_CLASS_NAME, t = this.IOS_CLASS_NAME) {
        var i,
          a = window.PlatformClass;
        return a
          ? ("Conch-ios" == s.getOS()
              ? (i = a.createClass(t))
              : "Conch-android" == s.getOS() && (i = a.createClass(e)),
            i)
          : null;
      }
      static getBridgeHaoTang(e = this.SDK_JAVA_CLASS_NAME_HAO_TANG) {
        var t = window.PlatformClass;
        return t ? t.createClass(e) : null;
      }
      static callWithBack(e, t, i, a) {
        var s = this.getBridge();
        s &&
          s.callWithBack(
            function (e) {
              e = JSON.parse(e);
              a.call(i, e);
            },
            e,
            JSON.stringify(t),
          );
      }
    }
    ((s.SDK_JAVA_CLASS_NAME_HAO_TANG = "com.ad.AdCall"),
      (s.SDK_JAVA_CLASS_NAME = "demo.JSBridge"),
      (s.IOS_CLASS_NAME = "JSBridge"));
    class G extends e {
      constructor() {
        (super(...arguments), (this.interstitial_time = 0));
      }
      get h() {
        return c.CH.Android_233;
      }
      openPrivacy() {
        var e = s.getBridge();
        e && e.call("openPrivacy");
      }
      openUserAgree() {
        var e = s.getBridge();
        e && e.call("openUserAgree");
      }
      vibrateShort() {
        var e;
        this.Global.shake_switch && (e = s.getBridge()) && e.call("getVibrate");
      }
      vibrateLong() {
        var e;
        this.Global.shake_switch && (e = s.getBridge()) && e.call("getVibrate");
      }
      showBannerAd() {}
      hideBannerAd() {}
      showVideoAd(t) {
        const i = (e) => t(e);
        var e = s.getBridge();
        e &&
          e.callWithBack(function (e) {
            "onVideoCompletion" == JSON.parse(e).value ? t && i(n.onSuccess) : t && i(n.onFail);
          }, "fetchRewardVideoAd");
      }
      showInterstitialAd(e) {
        Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
        Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
          ? e && e(!1)
          : ((this.interstitial_time = Laya.Browser.now()),
            (e = s.getBridge()) && e.call("fetchInterstitialAd"));
      }
      showFullVideoAd() {
        var e;
        Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
          Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time ||
          ((this.interstitial_time = Laya.Browser.now()),
          (e = s.getBridge()) && e.call("fetchFullVideoAd"));
      }
    }
    class a extends e {
      constructor() {
        (super(...arguments), (this.interstitial_time = 0), (this.showVideoAd_cb = null));
      }
      get h() {
        return c.CH.Android_KS;
      }
      init(e, t, i) {
        (super.init(e, t, i),
          (a.CallbackMap.showVideoAd = (e) => {
            this.showVideoAd_cb &&
              ((e = JSON.parse(e)),
              this.showVideoAd_cb(Number(e.value)),
              (this.showVideoAd_cb = null));
          }),
          (a.CallbackMap.requestCustomData = (e) => {
            e = e.substring(10, e.length - 2);
            var e = JSON.parse(e),
              t = e.customEvents;
            for (let e = 0; e < t.length; e++) {
              var i = t[e].eventId,
                a = t[e].eventValue;
              c.Var._SwitchM0[i] = Number(a);
            }
          }));
      }
      openPrivacy() {
        jsb &&
          jsb.reflection.callStaticMethod(
            "org/cocos2dx/javascript/demo/JSBridge",
            "openPrivacy",
            "()V",
          );
      }
      openUserAgree() {
        var e = s.getBridge();
        e && e.call("openUserAgree");
      }
      vibrateShort() {
        this.Global.shake_switch &&
          jsb &&
          jsb.reflection.callStaticMethod(
            "org/cocos2dx/javascript/demo/JSBridge",
            "getVibrate",
            "()V",
          );
      }
      vibrateLong() {
        this.Global.shake_switch &&
          jsb &&
          jsb.reflection.callStaticMethod(
            "org/cocos2dx/javascript/demo/JSBridge",
            "getVibrate",
            "()V",
          );
      }
      showBannerAd(e, t) {
        jsb &&
          jsb.reflection.callStaticMethod(
            "org/cocos2dx/javascript/demo/JSBridge",
            "fetchBannerAd",
            "(ZI)V",
            e,
            t,
          );
      }
      showVideoAd(e) {
        ((this.interstitial_time = Laya.Browser.now()),
          jsb &&
            ((this.showVideoAd_cb = e),
            jsb.reflection.callStaticMethod(
              "org/cocos2dx/javascript/demo/JSBridge",
              "fetchRewardVideoAd",
              "(Ljava/lang/String;)V",
              "",
            )));
      }
      showInterstitialAd(e, ...t) {
        Laya.Browser.now() - this.interstitial_time < 1e3 * Number(this.SwitchM0.AD_5_value) ||
          ((this.interstitial_time = Laya.Browser.now()),
          jsb &&
            jsb.reflection.callStaticMethod(
              "org/cocos2dx/javascript/demo/JSBridge",
              "fetchInterstitialAd",
              "(I)V",
              t,
            ));
      }
      showFullVideoAd() {
        ((this.interstitial_time = Laya.Browser.now()),
          jsb &&
            jsb.reflection.callStaticMethod(
              "org/cocos2dx/javascript/demo/JSBridge",
              "fetchFullVideoAd",
              "()V",
            ));
      }
      showFeedAdToKs(e, t = 0) {
        jsb &&
          jsb.reflection.callStaticMethod(
            "org/cocos2dx/javascript/demo/JSBridge",
            "fetchFeedAd",
            "(ZI)V",
            e,
            t,
          );
      }
      requestCustomData() {
        jsb &&
          jsb.reflection.callStaticMethod(
            "org/cocos2dx/javascript/demo/JSBridge",
            "requestCustomData",
            "()V",
          );
      }
      static CallJS(e, t) {
        if (this.CallbackMap[e])
          try {
            this.CallbackMap[e](t);
          } catch (e) {}
      }
    }
    a.CallbackMap = {};
    class E extends e {
      get h() {
        return c.CH.BAIDU;
      }
      createVideoAd() {
        throw new Error("Method not implemented.");
      }
      showVideoAd() {
        throw new Error("Method not implemented.");
      }
      createBannerAd() {
        throw new Error("Method not implemented.");
      }
      destroyBannerAd() {
        throw new Error("Method not implemented.");
      }
      showBannerAd() {
        throw new Error("Method not implemented.");
      }
      hideBannerAd() {
        throw new Error("Method not implemented.");
      }
    }
    class N extends e {
      constructor() {
        (super(...arguments),
          (this.isCallback = !1),
          (this.isShowToast = !1),
          (this.isShortcut = !0),
          (this.interstitial_time = 0),
          (this.nativeCallback = null));
      }
      get h() {
        return c.CH.HONOR;
      }
      post_default() {
        (this.getSystem(),
          this.getLaunchOptions(),
          this.onShowAlways(),
          this.onHide(),
          (this.Global.go_game_time = Laya.Browser.now()));
      }
      createVideoAd() {
        this.ch &&
          this.videoId &&
          ((this.videoAd = this.ch.createRewardedVideoAd({ adUnitId: this.videoId })),
          this.videoAd.onLoad(() => {
            this.db.videoEnable = !0;
          }),
          this.videoAd.onError((e) => {
            ((this.db.videoEnable = !1),
              this.videoAd.load(),
              this.isShowToast && this.showToast("暂无广告，请稍后再试"));
          }),
          this.videoAd.load());
      }
      showVideoAd(t = null) {
        ((this.isShowToast = !0),
          (this.isCallback = !1),
          this.ch && this.videoAd
            ? ((this.isShortcut = !1),
              this.videoAd.offReward(),
              this.videoAd.offClose(),
              this.videoAd.show().catch((e) => {
                t && t(!1);
              }),
              this.videoAd.onReward((e) => {
                t && t("success" === e);
              }),
              this.videoAd.onClose(() => {
                (t && t(!1), this.videoAd.load());
              }))
            : (this.showToast("暂无广告，请稍后再试"), t && t(!1)));
      }
      createBannerAd() {
        this.SwitchM0.game_banner &&
          this.ch &&
          this.bannerId &&
          "" != this.bannerId[0] &&
          ((this.bannerAd = this.ch.createBannerAd({ adUnitId: this.bannerId[0] })),
          this.bannerAd.onLoad(() => {
            this.showBannerAd();
          }),
          this.bannerAd.onResize((e) => {}),
          this.bannerAd.onError((e) => {
            this.bannerAd.load();
          }),
          this.bannerAd.onClose((e) => {
            e && "success" == e && (this.Global.bannerCloseTime = Laya.Browser.now());
          }),
          this.bannerAd.load());
      }
      destroyBannerAd() {
        this.ch && this.bannerAd && this.bannerAd.destroy();
      }
      showBannerAd() {
        !this.SwitchM0.game_banner ||
          Laya.Browser.now() - this.Global.bannerCloseTime < this.SwitchM0.banner_interval_time ||
          (this.bannerAd
            ? this.ch &&
              this.bannerAd &&
              ((this.Global.bannerShow = !0),
              this.bannerAd
                .show()
                .then(() => {})
                .catch((e) => {}))
            : this.createBannerAd());
      }
      hideBannerAd() {
        this.ch && this.bannerAd && ((this.Global.bannerShow = !1), this.bannerAd.hide());
      }
      createInterstitialAd() {
        this.ch &&
          this.insertId &&
          "" != this.insertId &&
          ((this.insertAd = this.ch.createInterstitialAd({ adUnitId: this.insertId })),
          this.insertAd.onLoad(() => {}),
          this.insertAd.onError((e) => {
            this.insertAd.load();
          }),
          this.insertAd.load());
      }
      showInterstitialAd(t = null, e = !1) {
        this.ch &&
          (this.insertAd
            ? (!e &&
                (Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
                  Laya.Browser.now() - this.interstitial_time <
                    this.SwitchM0.interval_screen_time)) ||
              ((this.interstitial_time = Laya.Browser.now()),
              this.insertAd.offClose(),
              this.insertAd.onClose(() => {
                (t && t(), this.insertAd.load());
              }),
              this.insertAd
                .show()
                .then(() => {})
                .catch((e) => {
                  t && t();
                }))
            : this.createInterstitialAd());
      }
      createNativeAd() {
        var e;
        this.ch &&
          this.nativeId &&
          ((e = Laya.stage.width > Laya.stage.height ? 1280 : Laya.Browser.clientWidth),
          (this.nativeAd = this.ch.createNativeAd({
            adUnitId: this.nativeId[0],
            style: { left: 0, width: e, gravity: "center_horizontal|center_vertical" },
          })),
          this.nativeAd.onLoad((e) => {}),
          this.nativeAd.onResize((e) => {}),
          this.nativeAd.onShow((e) => {
            this.nativeCallback && this.nativeCallback(!0);
          }),
          this.nativeAd.onError((e) => {
            this.nativeAd.load();
          }),
          this.nativeAd.onClose((e) => {
            this.nativeCallback && this.nativeCallback(!1);
          }),
          this.nativeAd.load());
      }
      showNativeAd(t = null) {
        Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
          Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time ||
          (this.ch &&
            (this.nativeAd
              ? ((this.nativeCallback = t),
                this.nativeAd
                  .show()
                  .then(() => {
                    this.interstitial_time = Laya.Browser.now();
                  })
                  .catch((e) => {
                    t && t(!1);
                  }))
              : this.createNativeAd()));
      }
      hideNativeAd() {
        this.ch && this.nativeAd && this.nativeAd.hide();
      }
      share(e = 0) {
        this.ch &&
          this.ch.share({
            success: function () {},
            fail: function (e, t) {},
            cancel: function () {},
          });
      }
      exitApplication() {
        this.ch && this.ch.exitApplication({ success: () => {}, fail: () => {} });
      }
      showToast(e, t = "none", i = 1e3) {
        this.ch && this.ch.showToast({ message: e, icon: t, duration: i });
      }
      crateBoxPortalAd() {
        this.ch &&
          this.gamePortalAdId &&
          "" != this.gamePortalAdId &&
          ((this.gamePortalAd = this.ch.createPortalBoxAd({ adUnitId: this.gamePortalAdId })),
          this.gamePortalAd.load().then(() => {}));
      }
      showBoxPortalAd() {
        this.ch && this.gamePortalAd && this.gamePortalAd.show().then(() => {});
      }
      hideBoxPortalAd() {
        this.ch && this.gamePortalAd && (this.gamePortalAd.destroy(), (this.gamePortalAd = null));
      }
      createBoxBannerAd(e, t, i, a) {
        this.ch &&
          this.boxBannerAdId &&
          "" != this.boxBannerAdId &&
          ((this.boxBannerAd = this.ch.createBoxAd({
            adUnitId: this.boxBannerAdId,
            style: { left: e, top: t, width: i, gravity: a },
          })),
          this.boxBannerAd.load().then(() => {}));
      }
      showBoxBannerAd() {
        this.ch && this.boxBannerAd && this.boxBannerAd.show().then(() => {});
      }
      hideBoxBannerAd() {
        this.ch && this.boxBannerAd && this.boxBannerAd.hide();
      }
      getLaunchOptions() {}
    }
    ((c.Alias = void 0),
      ((f = c.Alias || (c.Alias = {})).toutiao = "toutiao"),
      (f.douyin = "douyin"),
      (f.wx = "wx"),
      (f.oppo = "oppo"),
      (f.vivo = "vivo"),
      (f.huawei = "huawei"),
      (f.honor = "honor"),
      (f.oppoapp = "oppoapp"),
      (f.vivoapp = "vivoapp"),
      (f.kuaishou = "kuaishou"),
      (f.qq = "qq"),
      (f.meizu = "meizu"),
      (f.twothreethree = "twothreethree"),
      (f.kesheng = "kesheng"),
      (f.web360 = "web360"),
      (f.bilibili = "bilibili"),
      (f.alipay = "alipay"),
      (f.jd = "jd"),
      (c.WxCustomAd = void 0),
      ((f = c.WxCustomAd || (c.WxCustomAd = {}))[(f.Matrix = 0)] = "Matrix"),
      (f[(f.Carousel = 1)] = "Carousel"),
      (f[(f.Right = 2)] = "Right"),
      (f[(f.Left = 3)] = "Left"),
      (f[(f.MultipleRight = 4)] = "MultipleRight"),
      (f[(f.MultipleLeft = 5)] = "MultipleLeft"),
      (c.CustomAdType = void 0),
      ((f = c.CustomAdType || (c.CustomAdType = {}))[(f.Icon = 0)] = "Icon"),
      (f[(f.Interstitial = 1)] = "Interstitial"),
      (c.QQBlockAd = void 0),
      ((f = c.QQBlockAd || (c.QQBlockAd = {}))[(f.Bottom = 0)] = "Bottom"),
      (f[(f.Left = 1)] = "Left"),
      (f[(f.Right = 2)] = "Right"),
      (c.ScreenOrientation = void 0),
      ((f = c.ScreenOrientation || (c.ScreenOrientation = {})).portrait = "portrait"),
      (f.sensor_portrait = "sensor_portrait"),
      (f.landscape = "landscape"),
      (f.sensor_landscape = "sensor_landscape"));
    class t {
      我已阅读Param类的注释中写的打包问题汇总() {
        return !0;
      }
    }
    ((t.screenOrientation = c.ScreenOrientation.portrait),
      (t.YW = {
        API_URL: "https://api.game.chot.cn/",
        APPID: "31080165",
        GAME_VERSION: "1.0.1",
        ALIAS: c.Alias.wx,
        DEBUG: !1,
        VERSION: 1,
        INPUT_CACHE: !1,
      }),
      (t.Wx = {
        videoId: ["adunit-a9d1d679a52a672d", "adunit-ccb691e491801e4a"],
        bannerId: ["adunit-1a1769ae4125a4ea", "adunit-219c349c75e00d75"],
        insertId: ["adunit-42d61ccfb0580f93", "adunit-58481d327cb7bfd9"],
        customId: ["adunit-d2807bc2d85f91cd", "adunit-0b5f95220b2f419d", "adunit-5b8fa8c7143dc5dc"],
        gridId: [],
        img_url:
          "https://mmocgame.qpic.cn/wechatgame/MfxCqKVpqBLeckVRY33PicXd4HWZlaggxFbwWfzCejRoLzhVHO2tDjkIZ4Phyb7PW/0",
        shareTitle: "疯狂赛车漂移",
        sharePath: 0,
        CustomAdWxPox: function (e, t, i) {
          switch (i) {
            case c.WxCustomAd.Matrix:
              return { x: 0, y: 140, move: 40 };
            case c.WxCustomAd.Carousel:
              return { x: e / 2 - 160, y: t - 110 };
            case c.WxCustomAd.Right:
              return { x: e - 95 + 15, y: 80, move: 40 };
            case c.WxCustomAd.Left:
              return { x: 15, y: 80, move: 40 };
          }
        },
        BannerAdStyle: function (e, t) {
          return { adIntervals: 30, left: 0, top: t - 115, width: e, height: 80 };
        },
      }),
      (t.Oppo = {
        videoId: "931802",
        bannerId: ["931795"],
        insertId: "188160",
        nativeId: ["656272"],
        gameBannerAdId: "931795",
        gamePortalAdId: "931804",
        gameDrawerAdId: "391100",
        customId: ["931799", "931799"],
        CustomAdsPos: function (e, t, i) {
          switch (i) {
            case c.CustomAdType.Icon:
              return { left: 5, top: 450, width: 300 };
            case c.CustomAdType.Interstitial:
              return "portrait" == window.screenOrientation ||
                "sensor_portrait" == window.screenOrientation
                ? { left: 105, top: (t - 0.85 * e) / 2 + 500, width: e }
                : "landscape" == window.screenOrientation ||
                    "sensor_landscape" == window.screenOrientation
                  ? { left: 105, top: (t - 0.85 * t) / 2, width: e }
                  : { left: 0, top: 0, width: e };
          }
        },
      }),
      (t.Vivo = {
        videoId: "2e38b2dcd8eb4158be54e717efca3a7f",
        bannerId: ["e829e89d40094d4aa3ed79393d7fab90"],
        insertId: "b7f046f66aec43b5a734127c4bab028c",
        nativeId: ["898510eb97b347f4a5b376e14baf71ea"],
        boxBannerAdId: "a5b665eb6089445ca7b23a5648d6cf1e",
        boxPortalAdId: "c8aa16ab67ec449b92163ea9f77ed50f",
        customId: ["8d745ea4ca74441699c85e669351973e", "8d745ea4ca74441699c85e669351973e"],
        newCustomId: ["8d745ea4ca74441699c85e669351973e", "8d745ea4ca74441699c85e669351973e"],
        BoxPortalAdMarginTop: 220,
        CustomAdPos: function (e, t) {
          return "portrait" == window.screenOrientation ||
            "sensor_portrait" == window.screenOrientation
            ? { left: 0, top: (t - 800) / 2 + 500 }
            : "landscape" == window.screenOrientation ||
                "sensor_landscape" == window.screenOrientation
              ? { left: e / 2 - 540, top: t / 2 - 360 }
              : void 0;
        },
        BannerAdStyle: function (e, t) {
          return "portrait" != window.screenOrientation &&
            "sensor_portrait" != window.screenOrientation &&
            ("landscape" == window.screenOrientation ||
              "sensor_landscape" == window.screenOrientation)
            ? { left: (e - 1080) / 2, top: t - 170, width: e }
            : {};
        },
      }),
      (t.TT = {
        videoId: "1dbl32jmlgeb1bj8d6",
        bannerId: ["5t0bq5ktbfi5m8glc6"],
        insertId: "2gununn52521faiiij",
        shareTitle: "一挖到底",
        shareID: "",
      }),
      (t.QQ = {
        videoId: "a2ab733825f140b7a4127ebde672cd66",
        bannerId: ["6f80e4ce1dd91c34c37a5e160e111e26"],
        insertId: "5496dc133350ab5b7151bba0aeb6963d",
        boxAdId: "fdcb26cd2cb431c470c857bdf73438c5",
        blockAdId: [
          "a68f93fe1b9cecaa2ec60dc26f46f66a",
          "fd243ca3bd0fd88bfeb56b41638a419b",
          "cc92228aee9331009e6e06fcdbb40e9f",
        ],
        shareTitle: "我挖你个鬼",
        shareImage: "res/share/img/1.jpg",
        CustomBlockAdPos: function (e, t, i) {
          switch (i) {
            case c.QQBlockAd.Bottom:
              return { x: 20, y: t - 150, num: 4, move: 0, or: "landscape" };
            case c.QQBlockAd.Left:
              return { x: 20, y: 160, num: 1, move: 0, or: "vertical" };
            case c.QQBlockAd.Right:
              return { x: e - 100, y: 160, num: 1, move: 0, or: "vertical" };
          }
        },
      }),
      (t.Uc = {
        videoId: "159231",
        bannerId: ["159225", "159225"],
        insertId: "159226",
        nativeId: ["159230"],
      }),
      (t.Mz = { videoId: "yfZC8xjF", bannerId: ["ivUXNGW6"], insertId: "Lf0YWzqi" }),
      (t.Ks = {
        videoId: "2300001317_01",
        bannerId: ["159225", "159225"],
        insertId: "ad_0ef399af30f618a5",
      }),
      (t.Web360 = {
        videoId: "nIg2BB",
        shopWindowId: "sL9Jkr",
        infoFlowId: "0GcxwV",
        shopWindowDomId: "shopWindowDom",
        infoFlowDomId: "infoFlowDom",
        ShopWindowSize: function () {
          return { width: 300, height: 300, closeTimer: 5 };
        },
        InfoFlowSize: function () {
          return { width: 500 };
        },
      }),
      (t.Hw = {
        videoId: "w7cz3jw2sj",
        bannerId: ["x72g5z72gl"],
        insertId: "a4lg3m6xbn",
        nativeId: ["i3vbmdgg52"],
        BannerAdStyle: function (e, t) {
          return { adIntervals: 60, top: t / 3 - 57, left: 0, height: 57, width: 360 };
        },
      }),
      (t.Xm = {
        appId: "2882303761520211564",
        appSecret: "lP05st4ZyEtfXoN9WcSeSg==",
        videoId: "e1d8b2dd08a788548af2b792a529debd",
        bannerId: ["d795b98be6f67e64ddc58ac92d002ef7"],
        customId: ["d71e2544d09210deb4a4f7b56c32a687"],
        insertId: "1b5827c796f0f159712dfe2e68e5c489",
        boxBannerAdId: "8ef4c9cee15bee74d2e414f7ad51b1ca",
        boxPortalAdId: "9bd2d0158853d3f7e3636e17351bbe3f",
        boxSuspendAdId: "b292ec91d0202b36270d8789cf593d10",
        BannerAdStyle: function (e, t) {
          return { adIntervals: 30, left: 0, top: t - 60, width: e };
        },
        CustomAdPos: function (e, t) {
          return "portrait" == window.screenOrientation ||
            "sensor_portrait" == window.screenOrientation
            ? { left: 0, top: (t - 800) / 2 + 500 }
            : "landscape" == window.screenOrientation ||
                "sensor_landscape" == window.screenOrientation
              ? { left: e / 2 - 540, top: t / 2 - 360 }
              : void 0;
        },
      }),
      (t.IOSKs = {
        enable: !1,
        URL: "https://gamectrl.ikun666666.com",
        API: "/api/customevent",
        appId: "202323005",
        packageName: "",
        channelId: "appstore",
        androidId: "",
        versionName: "1.0.0",
        versionCode: "",
      }),
      (t.Honor = {
        videoId: "w7cz3jw2sj",
        bannerId: ["x72g5z72gl"],
        insertId: "a4lg3m6xbn",
        nativeId: ["i3vbmdgg52"],
        boxBannerAdId: "931795",
        gamePortalAdId: "931804",
        BannerAdStyle: function (e, t) {
          return { adIntervals: 60, top: t / 3 - 57, left: 0, height: 57, width: 360 };
        },
      }),
      (t.BL = { videoId: "w7cz3jw2sj", bannerId: ["x72g5z72gl"], insertId: "a4lg3m6xbn" }),
      (t.Alipay = {
        videoId: "w7cz3jw2sj",
        bannerId: ["x72g5z72gl"],
        insertId: ["a4lg3m6xbn"],
        shareTitle: "分享标题",
        shareDesc: "分享内容简介",
        BannerAdStyle: function (e, t, i) {
          return { left: 0, top: 76, width: 750 };
        },
      }),
      (t.Jd = { linkId: "", advTimerId: [""] }));
    class d {
      static closeToNative() {
        return (
          c.Var._Global.close_to_native_num++,
          0 < c.Var._SwitchM0.close_to_native &&
          c.Var._Global.close_to_native_num % c.Var._SwitchM0.close_to_native == 0 &&
          p.mainCH.h == c.CH.OPPO
            ? 1
            : 0
        );
      }
      static showNative() {
        return !(
          Laya.Browser.now() - c.Var._Global.go_game_time < c.Var._SwitchM0.fist_screen_time ||
          Laya.Browser.now() - this.interstitial_time < c.Var._SwitchM0.interval_screen_time ||
          (p.mainCH.adContent
            ? ((this.interstitial_time = Laya.Browser.now()), 0)
            : (p.mainCH.createNativeAd(), 1))
        );
      }
      static showAd() {
        return !!(
          6e4 <= Laya.Browser.now() - c.Var._Global.go_game_time || c.Var._SwitchM0.show_ad_promptly
        );
      }
      static showVideoAd() {
        return !(
          (0 != c.Var._Global.video_last_time &&
            Laya.Browser.now() - c.Var._Global.video_last_time < c.Var._Global.video_interval) ||
          ((c.Var._Global.video_last_time = Laya.Browser.now()), 0)
        );
      }
      static showScreen(a = 2, s = null, n) {
        switch (p.mainCH.h) {
          case c.CH.ZJ:
            (1 == a && c.Var._SwitchM0.normal_screen) ||
            (2 == a && c.Var._SwitchM0.normal_screen_other)
              ? Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  p.mainCH.showInterstitialAd((e) => {
                    s && s(e);
                  });
                })
              : s && s(!1);
            break;
          case c.CH.VIVO:
            (1 == a && c.Var._SwitchM0.normal_screen) ||
            (2 == a && c.Var._SwitchM0.normal_screen_other)
              ? Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  let e = !0;
                  var t;
                  (0 == c.Var._SwitchM0.show_screen_custom && (e = !0),
                    1 == c.Var._SwitchM0.show_screen_custom && (e = !1),
                    (e = 2 == c.Var._SwitchM0.show_screen_custom ? W.Ran.bool(0.5) : e)
                      ? p.mainCH.showInterstitialAd(
                          (e) => {
                            s && s(e);
                          },
                          1 == a && 1 == c.Var._SwitchM0.normal_screen,
                        )
                      : c.Var._Param.Vivo &&
                        c.Var._Param.Vivo.CustomAdPos &&
                        (t = c.Var._Param.Vivo.CustomAdPos(
                          p.mainCH.db.screenWidth,
                          p.mainCH.db.screenHeight,
                        )) &&
                        p.mainCH.createCustomAd(
                          t.left,
                          (2 != n && t.top1) || t.top,
                          1,
                          0,
                          1 == a && 1 == c.Var._SwitchM0.normal_screen,
                          (e) => {
                            ((0 != e && 2 != e) || (s && s(!1)), 1 == e && s && s(!0));
                          },
                          !1,
                        ));
                })
              : s && s(!1);
            break;
          case c.CH.OPPO:
            (1 == a && c.Var._SwitchM0.normal_screen) ||
            (2 == a && c.Var._SwitchM0.normal_screen_other)
              ? Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  let e = !0;
                  var t, i;
                  (0 == c.Var._SwitchM0.show_screen_custom && (e = !0),
                    1 == c.Var._SwitchM0.show_screen_custom && (e = !1),
                    (e = 2 == c.Var._SwitchM0.show_screen_custom ? W.Ran.bool(0.5) : e)
                      ? p.mainCH.showInterstitialAd(
                          (e) => {
                            s && s(e);
                          },
                          1 == a && 1 == c.Var._SwitchM0.normal_screen,
                        )
                      : c.Var._Param.Oppo &&
                        c.Var._Param.Oppo.CustomAdsPos &&
                        (t = c.Var._Param.Oppo.CustomAdsPos(
                          p.mainCH.db.screenWidth,
                          p.mainCH.db.screenHeight,
                          c.CustomAdType.Interstitial,
                        )) &&
                        (t.left
                          ? ((i = {
                              left: t.left,
                              top: (2 != n && t.top1) || t.top,
                              width: t.width,
                            }),
                            p.mainCH.createCustomAds(
                              c.CustomAdType.Interstitial,
                              i,
                              1 == a && 1 == c.Var._SwitchM0.normal_screen,
                              null,
                              !1,
                            ))
                          : ((i = { top: (2 != n && t.top1) || t.top, width: t.width }),
                            p.mainCH.createCustomAds(
                              c.CustomAdType.Interstitial,
                              i,
                              1 == a && 1 == c.Var._SwitchM0.normal_screen,
                              null,
                              !1,
                            ))));
                })
              : s && s(!1);
            break;
          case c.CH.WEIXIN:
          case c.CH.ALIPAY:
          case c.CH.QQ:
            2 == a &&
            c.Var._SwitchM0.normal_screen_other &&
            Laya.Browser.now() - c.Var._Global.go_game_time >= c.Var._SwitchM0.fist_screen_time &&
            Laya.Browser.now() - this.interstitial_time >= c.Var._SwitchM0.interval_screen_time
              ? ((this.interstitial_time = Laya.Browser.now()),
                Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  p.mainCH.showInterstitialAd(s);
                }))
              : 1 == a && c.Var._SwitchM0.normal_screen
                ? Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                    p.mainCH.showInterstitialAd(s);
                  })
                : s && s(!1);
            break;
          case c.CH.IOS_KESHENG:
            1 == a && c.Var._SwitchM0.normal_screen
              ? Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  W.Ran.bool(0.4) ? p.mainCH.showFullVideoAd() : p.mainCH.showInterstitialAd();
                })
              : 2 == a && c.Var._SwitchM0.normal_screen_other
                ? Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                    p.mainCH.showInterstitialAd(void 0, 2);
                  })
                : s && s(!1);
            break;
          case c.CH.Android_233:
            1 == a && c.Var._SwitchM0.normal_screen
              ? Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  p.mainCH.showFullVideoAd();
                })
              : 2 == a && c.Var._SwitchM0.normal_screen_other
                ? Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                    p.mainCH.showInterstitialAd();
                  })
                : s && s(!1);
            break;
          case c.CH.XIAOMI:
            (1 == a &&
              c.Var._SwitchM0.normal_screen &&
              Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                p.mainCH.showInterstitialAd();
              }),
              2 == a &&
                c.Var._SwitchM0.normal_screen_other &&
                Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  var e;
                  c.Var._Param.Xm &&
                    c.Var._Param.Xm.CustomAdPos &&
                    (e = c.Var._Param.Xm.CustomAdPos(
                      p.mainCH.db.screenWidth,
                      p.mainCH.db.screenHeight,
                    )) &&
                    p.mainCH.createCustomAd(
                      e.left,
                      (2 != n && e.top1) || e.top,
                      0,
                      0,
                      1 == c.Var._SwitchM0.normal_screen_other,
                      (e) => {
                        ((0 != e && 2 != e) || (s && s(!1)), 1 == e && s && s(!0));
                      },
                      !1,
                    );
                }));
            break;
          case c.CH.HUAWEI:
            if (
              (1 == a &&
                c.Var._SwitchM0.normal_screen &&
                Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  p.mainCH.showInterstitialAd();
                }),
              2 == a && c.Var._SwitchM0.normal_screen_other)
            ) {
              var e = Laya.Browser.now();
              if (
                e - c.Var._Global.go_game_time < c.Var._SwitchM0.fist_screen_time ||
                e - this.interstitial_time < c.Var._SwitchM0.interval_screen_time
              )
                return (s && s(!1), !1);
              ((this.is_show = !1),
                p.mainCH.createNativeAd((e) => {
                  e
                    ? ((this.interstitial_time = Laya.Browser.now()),
                      p.mainCH.adContent &&
                        !this.is_show &&
                        ((this.is_show = !0),
                        Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                          (c.Var.onOpenNative && c.Var.onOpenNative(e), s && s(!0));
                        })))
                    : s && s(!1);
                }));
            }
            break;
          case c.CH.HONOR:
            if (
              (1 == a &&
                c.Var._SwitchM0.normal_screen &&
                Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  ((this.interstitial_time = Laya.Browser.now()), p.mainCH.showInterstitialAd());
                }),
              2 == a && c.Var._SwitchM0.normal_screen_other)
            ) {
              e = Laya.Browser.now();
              if (
                e - c.Var._Global.go_game_time < c.Var._SwitchM0.fist_screen_time ||
                e - this.interstitial_time < c.Var._SwitchM0.interval_screen_time
              )
                return (s && s(!1), !1);
              Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                this.interstitial_time = Laya.Browser.now();
                var e = Laya.stage.width > Laya.stage.height;
                (c.Var._Global.bannerShow && e && p.mainCH.hideBannerAd(),
                  p.mainCH.showNativeAd((e) => {
                    c.Var.onOpenNative && c.Var.onOpenNative(e);
                  }));
              });
            }
            break;
          case c.CH.KUAI:
            (1 == a && c.Var._SwitchM0.normal_screen) ||
            (2 == a && c.Var._SwitchM0.normal_screen_other)
              ? Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                  p.mainCH.showInterstitialAd(
                    (e) => {
                      s && s(e);
                    },
                    1 == a && 1 == c.Var._SwitchM0.normal_screen,
                  );
                })
              : s && s(!1);
        }
      }
      static showMistake(t = null) {
        (p.mainCH.h == c.CH.ZJ &&
          p.mainCH.showInterstitialAd(
            (e) => {},
            !0,
            () => {
              t && t();
            },
          ),
          p.mainCH.h == c.CH.WEIXIN && p.mainCH.showInterstitialAd((e) => {}),
          p.mainCH.h == c.CH.VIVO &&
            p.mainCH.showCustomAd(
              (e) => {
                ((0 != e && 2 != e) || (t && t(!1)),
                  1 == e && t && t(!0),
                  0 == e && this.creatCustom());
              },
              !0,
              () => {
                t && t();
              },
            ),
          p.mainCH.h == c.CH.OPPO &&
            p.mainCH.showCustomAds(
              c.CustomAdType.Interstitial,
              (e) => {
                e || this.creatCustom();
              },
              !0,
              () => {
                t && t();
              },
            ));
      }
      static showNativeAdFake() {
        p.mainCH.createNativeAd((e) => {
          e &&
            (Laya.timer.once(10, this, () => {
              p.mainCH.showNativeAd();
            }),
            Laya.timer.once(2e3, this, () => {
              p.mainCH.destroyNativeAd();
            }));
        });
      }
      static creatCustom() {
        (p.mainCH.h, c.CH.OPPO, p.mainCH.h, c.CH.VIVO);
      }
      static creatCustomIcon() {
        var e;
        (p.mainCH.h == c.CH.OPPO &&
          (e = c.Var._Param.Oppo.CustomAdsPos(
            p.mainCH.db.screenWidth,
            p.mainCH.db.screenHeight,
            c.CustomAdType.Icon,
          )) &&
          p.mainCH.createCustomAds(c.CustomAdType.Icon, e, !1, null, !1),
          p.mainCH.h == c.CH.VIVO &&
            c.Var._Param.Vivo &&
            c.Var._Param.Vivo.CustomAdsPos &&
            (e = c.Var._Param.Vivo.CustomAdsPos(
              p.mainCH.db.screenWidth,
              p.mainCH.db.screenHeight,
              c.CustomAdType.Icon,
            )) &&
            p.mainCH.createCustomAds(c.CustomAdType.Icon, e, !1, null, !1));
      }
      static showCustomIcon() {
        p.mainCH.showCustomAds(
          c.CustomAdType.Icon,
          (e) => {},
          !0,
          () => {
            this.creatCustomIcon();
          },
        );
      }
      static mistakeAd() {}
      static randomAD0Show() {
        var e;
        return (
          !!c.Var._SwitchM0.AD_0 &&
          ((e = W.Ran.int(100, 0)),
          1 == this.useEmpty(c.Var._SwitchM0.AD_0) ? e <= 10 : e <= c.Var._SwitchM0.AD_0)
        );
      }
      static randomAD1Show() {
        var e;
        return (
          !!c.Var._SwitchM0.AD_1 &&
          ((e = W.Ran.int(100, 0)),
          1 == this.useEmpty(c.Var._SwitchM0.AD_1) ? e <= 10 : e <= c.Var._SwitchM0.AD_1)
        );
      }
      static randomAD2Show() {
        var e;
        return (
          c.Var._SwitchM0.AD_2 &&
            ((e = W.Ran.int(100, 0)),
            1 == this.useEmpty(c.Var._SwitchM0.AD_2)
              ? e <= 10 && this.randomAD3Show()
              : e <= c.Var._SwitchM0.AD_2 && this.randomAD3Show()),
          !1
        );
      }
      static randomAD3Show() {
        1 == this.useEmpty(c.Var._SwitchM0.AD_3)
          ? Laya.timer.loop(9e4, this, () => !0)
          : Laya.timer.loop(1e3 * c.Var._SwitchM0.AD_3, this, () => !0);
      }
      static randomAD4Show() {
        var e;
        return (
          !!c.Var._SwitchM0.AD_4 &&
          ((e = W.Ran.int(100, 0)),
          1 == this.useEmpty(c.Var._SwitchM0.AD_4) ? e <= 10 : e <= c.Var._SwitchM0.AD_4)
        );
      }
      static randomAD5Show() {
        var e;
        return (
          !!c.Var._SwitchM0.AD_5 &&
          ((e = W.Ran.int(100, 0)),
          1 == this.useEmpty(c.Var._SwitchM0.AD_5) ? e <= 10 : e <= c.Var._SwitchM0.AD_5)
        );
      }
      static randomAD6Show() {
        var e;
        return (
          !!c.Var._SwitchM0.AD_6 &&
          ((e = W.Ran.int(100, 0)),
          1 == this.useEmpty(c.Var._SwitchM0.AD_6) ? e <= 10 : e <= c.Var._SwitchM0.AD_6)
        );
      }
      static randomAD7Show() {
        var e;
        return (
          !!c.Var._SwitchM0.AD_7 &&
          ((e = W.Ran.int(100, 0)),
          1 == this.useEmpty(c.Var._SwitchM0.AD_7) ? e <= 10 : e <= c.Var._SwitchM0.AD_7)
        );
      }
      static randomAD8Show() {
        var e;
        return (
          !!c.Var._SwitchM0.AD_8 &&
          ((e = W.Ran.int(100, 0)),
          1 == this.useEmpty(c.Var._SwitchM0.AD_8) || e <= c.Var._SwitchM0.AD_8)
        );
      }
      static randomAD9Show() {
        var e;
        return (
          !!c.Var._SwitchM0.AD_9 &&
          ((e = W.Ran.int(100, 0)),
          1 == this.useEmpty(c.Var._SwitchM0.AD_9) || e <= c.Var._SwitchM0.AD_9)
        );
      }
      static randomAD10Show() {
        var e;
        return (
          !!c.Var._SwitchM0.AD_10 &&
          ((e = W.Ran.int(100, 0)),
          1 == this.useEmpty(c.Var._SwitchM0.AD_10) || e <= c.Var._SwitchM0.AD_10)
        );
      }
      static useEmpty(e) {
        return "" === e || (e instanceof Array && 0 === e.length) || null == e || e;
      }
    }
    ((d.interstitial_time = 0), (d.is_show = !1));
    class U extends e {
      constructor() {
        (super(...arguments),
          (this.adContents = []),
          (this.isShowToast = !1),
          (this.nativeId_time = 0),
          (this.interstitial_time = 0));
      }
      get h() {
        return c.CH.HUAWEI;
      }
      post_default() {
        (this.getLaunchOptions(), this.onShowAlways(), this.onHide());
      }
      login(i) {
        this.ch
          ? this.ch.gameLoginWithReal({
              forceLogin: 1,
              appid: c.Var._Param.YW.APPID,
              success: function (e) {
                i && i(!0);
              },
              fail: function (e, t) {
                i && i(!1);
              },
            })
          : i && i(!0);
      }
      createVideoAd() {
        this.ch &&
          ((this.videoAd = this.ch.createRewardedVideoAd({
            adUnitId: this.videoId,
            success: (e) => {},
            fail: (e, t) => {},
            complete: () => {},
          })),
          this.videoAd.onLoad(() => {
            this.db.videoEnable = !0;
          }),
          this.videoAd.onError((e) => {
            ((this.db.videoEnable = !1),
              this.videoCallback && this.videoCallback(n.onError),
              this.isShowToast && this.showToast("暂无广告，请稍后再试"));
          }),
          this.videoAd.onClose((e) => {
            e && e.isEnded;
          }),
          this.videoAd.load(),
          this.videoAd.onClose((e) => {
            e && e.isEnded
              ? this.videoCallback && this.videoCallback(n.onSuccess)
              : this.videoCallback && this.videoCallback(n.onFail);
          }));
      }
      showVideoAd(e = null) {
        d.showVideoAd() &&
          ((this.isShowToast = !0),
          this.ch && this.videoAd
            ? ((this.videoCallback = e),
              1 == this.Global.is_show_video_num
                ? this.videoAd.show()
                : (this.videoAd.load(),
                  this.videoAd.offLoad(),
                  this.videoAd.onLoad(() => {
                    (this.videoCallback && this.videoCallback(n.onLoad), this.videoAd.show());
                  })))
            : !this.ch && e && e(!0));
      }
      createBannerAd() {
        if (this.ch) {
          let e = this.refreshBanId();
          var t = c.Var._Param.Hw.BannerAdStyle(this.db.screenWidth, this.db.screenHeight);
          ((this.bannerAd = this.ch.createBannerAd({
            adUnitId: e,
            adIntervals: t.adIntervals,
            style: t,
          })),
            this.bannerAd.onLoad(() => {}),
            this.bannerAd.onError((e) => {}),
            this.bannerAd.onClose(() => {
              this.bannerAd.destroy();
            }));
        }
      }
      refreshBanId() {
        return (
          this.banIndex++,
          this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0),
          this.bannerId[this.banIndex]
        );
      }
      destroyBannerAd() {
        this.bannerAd && (this.bannerAd.destroy(), (this.bannerAd = null));
      }
      showBannerAd() {
        (this.destroyBannerAd(),
          this.createBannerAd(),
          this.ch && this.bannerAd && this.SwitchM0.game_banner && this.bannerAd.show());
      }
      hideBannerAd() {
        this.ch && this.bannerAd && this.bannerAd.hide();
      }
      createInterstitialAd() {
        this.ch &&
          ((this.insertAd = this.ch.createInterstitialAd({ adUnitId: this.insertId })),
          this.insertAd.onError((e) => {}));
      }
      showInterstitialAd(e = 0, t = !1) {
        if (this.ch) {
          if (!t) {
            if (
              Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
              Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            )
              return;
            this.interstitial_time = Laya.Browser.now();
          }
          ((this.insertAd = this.ch.createInterstitialAd({ adUnitId: this.insertId })),
            this.insertAd.load(),
            this.insertAd.offLoad(),
            this.insertAd.onLoad((e) => {
              this.insertAd.show();
            }),
            this.insertAd.onError((e) => {
              this.insertAd.offError();
            }));
        }
      }
      createNativeAd(i = null) {
        !this.ch ||
          Laya.Browser.now() - this.nativeId_time < 5e3 ||
          ((this.nativeId_time = Laya.Browser.now()),
          (this.nativeAd = this.ch.createNativeAd({
            adUnitId: this.nativeId[0],
            success: (e) => {},
            fail: (e, t) => {
              i && i(!1);
            },
            complete: () => {},
          })),
          this.nativeAd.onLoad((e) => {
            ((this.adContent = e.adList[0]), i && i(this.adContent), this.nativeAd.offLoad());
          }),
          this.nativeAd.onError((e) => {
            this.nativeAd.offError();
          }),
          this.nativeAd.load());
      }
      destroyNativeAd() {
        this.ch && this.nativeAd && (this.nativeAd.destroy(), (this.nativeAd = null));
      }
      clickNativeAd() {
        this.ch &&
          this.nativeAd &&
          this.adContent &&
          this.nativeAd.reportAdClick({ adId: this.adContent.adId + "" });
      }
      showNativeAd() {
        this.ch &&
          this.nativeAd &&
          this.adContent &&
          this.nativeAd.reportAdShow({ adId: this.adContent.adId + "" });
      }
      installShortcut(i = null) {
        this.ch &&
          this.SwitchM0.install_shortcut &&
          this.hasShortcutInstalled((e) => {
            e ||
              this.ch.installShortcut({
                message: "是否添加桌面图标",
                success: function (e) {
                  i && i(e);
                },
                fail: function (e, t) {
                  i && i(!1);
                },
                complete: function () {},
              });
          });
      }
      hasShortcutInstalled(t = null) {
        this.ch &&
          this.ch.hasShortcutInstalled({
            success: (e) => {
              t && t(e);
            },
            fail: function (e) {
              t && t(!1);
            },
            complete: function () {},
          });
      }
      setKeepScreenOn(e = !0) {
        this.ch && this.ch.setKeepScreenOn({ keepScreenOn: e, success(e) {}, fail(e) {} });
      }
      exitApplication() {
        this.ch &&
          this.ch.exitApplication({
            success: function () {},
            fail: function () {},
            complete: function () {},
          });
      }
      getLaunchOptions() {
        this.ch && (this.db.launchOption = this.ch.getLaunchOptionsSync());
      }
      onShowAlways() {
        this.ch &&
          this.ch.onShow((e) => {
            ((c.Var.last_touch = Laya.Browser.now()),
              this.Global.isNativeAd && (this.showNativeAd(), (this.Global.isNativeAd = !1)));
          });
      }
    }
    class q extends e {
      constructor() {
        (super(...arguments), (this.interstitial_time = 0));
      }
      get h() {
        return c.CH.IOS_KESHENG;
      }
      showBannerAd() {
        var e = s.getBridge(),
          t = { isShow: !0 };
        e && e.callWithBack(function (e) {}, "fetchBannerAd:", JSON.stringify(t));
      }
      hideBannerAd() {
        var e = s.getBridge(),
          t = { isShow: !1 };
        e && e.callWithBack(function (e) {}, "fetchBannerAd:", JSON.stringify(t));
      }
      showFeedAdToKs(e, t = 0) {
        var i = s.getBridge(),
          a = {};
        ((a.isShow = e),
          (a.index = t),
          i && i.callWithBack(function (e) {}, "fetchFeedAd:", JSON.stringify(a)));
      }
      showVideoAd(t) {
        t && t(n.onLoad);
        const i = Laya.Browser.now(),
          a = (e) => {
            ((this.interstitial_time += Laya.Browser.now() - i), t(e));
          };
        var e = s.getBridge();
        e &&
          e.callWithBack((e) => {
            "onVideoCompletion" == JSON.parse(e).value ? t && a(n.onSuccess) : t && a(n.onFail);
          }, "fetchRewardVideoAd");
      }
      showInterstitialAd(e, t = 0) {
        Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
        Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
          ? e && e(!1)
          : ((this.interstitial_time = Laya.Browser.now()),
            (e = s.getBridge()) &&
              e.call(0 == t ? "fetchInterstitialAd" : "fetchInterstitialAd" + t));
      }
      showInterstitialAdToKs(e, t) {
        var i, a;
        Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
          Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time ||
          ((this.interstitial_time = Laya.Browser.now()),
          (i = s.getBridge()),
          ((a = {}).index = e),
          (a.sceneName = t),
          i && i.callWithBack(function (e) {}, "fetchInterstitialAd", JSON.stringify(a)));
      }
      showFullVideoAd() {
        var e;
        Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
          Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time ||
          ((this.interstitial_time = Laya.Browser.now()),
          (e = s.getBridge()) && e.call("fetchFullVideoAd"));
      }
      openPrivacy() {
        var e = s.getBridge();
        e && e.call("openPrivacy");
      }
      openUserAgree() {
        var e = s.getBridge();
        e && e.call("openUserAgree");
      }
      vibrateShort() {
        var e;
        this.Global.shake_switch && (e = s.getBridge()) && e.call("getVibrate");
      }
      vibrateLong() {
        var e;
        this.Global.shake_switch && (e = s.getBridge()) && e.call("getVibrate");
      }
    }
    class Q extends e {
      constructor() {
        (super(...arguments),
          (this.gameRecorderManager = null),
          (this.isRecording = !1),
          (this.recordingBeginTime = 0),
          (this.recordingEndTime = 0),
          (this.recordVideoID = null),
          (this.recordTime = 0),
          (this.interstitial_time = 0),
          (this.gameClub_num = 0));
      }
      get h() {
        return c.CH.KUAI;
      }
      post_default() {
        (this.onHide(), this.readyGo(), this.createVideoAd(), this.getGameRecorderManager());
      }
      login(t = null) {
        this.ch &&
          this.ch.login({
            success: (e) => {
              t && t(!0, e);
            },
            fail: (e) => {
              t && t(!1, e);
            },
          });
      }
      readyGo() {
        this.ch && this.ch.readyGo();
      }
      getSystem() {
        this.ch &&
          this.ch.getSystemInfo({
            response: (e) => {
              ((this.db.systemInfo = e),
                (this.db.platform = e.platform),
                (this.db.screenWidth = e.screenWidth),
                (this.db.screenHeight = e.screenHeight));
            },
          });
      }
      checkSliderBar(t) {
        this.ch
          ? this.ch.checkSliderBarIsAvailable({
              success: (e) => {
                t && t(e.available);
              },
              fail: (e) => {
                t && t(!1);
              },
            })
          : t && t(!1);
      }
      createVideoAd() {
        this.ch &&
          ((this.videoAd = this.ch.createRewardedVideoAd({ adUnitId: this.videoId })),
          this.videoAd) &&
          this.videoAd.onClose((e) => {
            e && e.isEnded
              ? (c.Var.is_sz_sdk && seeg.reportAd({ complete: !0 }),
                this.videoCallback && this.videoCallback(n.onSuccess))
              : (c.Var.is_sz_sdk && seeg.reportAd({ complete: !1 }),
                this.videoCallback && this.videoCallback(n.onFail));
          });
      }
      showVideoAd(e = null) {
        this.ch && this.videoAd
          ? ((this.videoCallback = e),
            this.videoAd.show({
              success: () => {
                this.videoCallback && this.videoCallback(n.onLoad);
              },
              fail: (e) => {
                (this.showToast("暂无视频"), this.videoCallback && this.videoCallback(n.onError));
              },
            }))
          : (this.showToast("暂无视频"), e && !this.ch && e(n.onSuccess));
      }
      createBannerAd() {
        if (this.ch) {
          let e = this.refreshBanId();
          ((this.bannerAd = this.ch.createBannerAd({
            adUnitId: e,
            adIntervals: 30,
            style: { gravity: 7 },
          })),
            this.bannerAd.onLoad(() => {
              this.bannerAd.offLoad();
            }),
            this.bannerAd.onResize(() => {
              this.bannerAd.offResize();
            }),
            this.bannerAd.onError((e) => {}),
            this.hideBannerAd());
        }
      }
      refreshBanId() {
        return (
          this.banIndex++,
          this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0),
          this.bannerId[this.banIndex]
        );
      }
      destroyBannerAd() {
        this.bannerAd && (this.bannerAd.destroy(), (this.bannerAd = null));
      }
      resetBannerAd() {
        this.ch && (this.destroyBannerAd(), this.createBannerAd());
      }
      showBannerAd() {
        this.ch && this.bannerAd && this.bannerAd.show();
      }
      hideBannerAd() {
        this.ch && this.bannerAd && this.bannerAd.hide();
      }
      createInterstitialAd() {
        this.ch &&
          ((this.insertAd = this.ch.createInterstitialAd({ adUnitId: this.insertId })),
          this.insertAd) &&
          (this.insertAd.onClose((e) => {}),
          this.insertAd.onError((e) => {}),
          this.insertAd
            .show()
            .then(function (e) {})
            .catch(function (e) {
              e.code;
            }));
      }
      showInterstitialAd(e, t = !1, i) {
        if (this.ch && this.insertAd) {
          if (!t) {
            if (
              Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
              Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            )
              return void (e && e(!1));
            this.interstitial_time = Laya.Browser.now();
          }
          this.insertAd
            .show()
            .then(() => {})
            .catch((e) => {});
        } else e && e();
      }
      shareAppMessage() {
        var e, t;
        this.ch &&
          ((e = this.getOneShareData()),
          (t = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2))),
          this.ch.shareAppMessage({
            templateId: "",
            query: "&sn=" + t + "&share_id=" + e.id,
            success: (e) => {},
            fail: (e) => {},
          }));
      }
      getOneShareData() {
        var e = new W.ShareDB();
        return ((e.id = 0), (e.img_url = ""), (e.title = c.Var._Param.TT.shareTitle), e);
      }
      getGameRecorderManager() {
        this.ch &&
          ((this.gameRecorderManager = this.ch.createMediaRecorder()), this.gameRecorderManager) &&
          (this.gameRecorderManager.onError((e) => {}),
          this.gameRecorderManager.onStart((e) => {
            this.recordVideoID = null;
          }),
          this.gameRecorderManager.onResume((e) => {}),
          this.gameRecorderManager.onPause((e) => {}),
          this.gameRecorderManager.onStop((e) => {
            ((this.recordVideoID = e.videoID), Laya.timer.clearAll(this));
          }));
      }
      startGameRecorderManager() {
        this.ch && this.gameRecorderManager && this.gameRecorderManager.start();
      }
      stopGameRecorderManager() {
        this.ch &&
          this.gameRecorderManager &&
          (this.gameRecorderManager.stop(), Laya.timer.clearAll(this));
      }
      recordClip() {
        this.ch &&
          this.gameRecorderManager &&
          (this.gameRecorderManager.resume(),
          Laya.timer.once(5e3, this, () => {
            this.gameRecorderManager.pause();
          }));
      }
      clipVideo() {
        this.ch &&
          (this.recordTime = Math.floor((this.recordingEndTime - this.recordingBeginTime) / 1e3));
      }
      share(t = null, e = {}) {
        var i, a;
        this.ch &&
          ((i = this.getOneShareData()),
          (a = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2))),
          this.ch.shareAppMessage({
            title: i.title,
            imageUrl: i.img_url,
            templateId: "",
            query: "&sn=" + a + "&share_id=" + i.id,
            extra: e,
            success(e) {
              t && t(!0);
            },
            fail(e) {
              t && t(!1);
            },
          }));
      }
      recordShare(t = null) {
        if (this.ch) {
          if (null == this.recordVideoID || null == this.recordVideoID) return;
          this.gameRecorderManager.publishVideo({
            callback: (e) => {
              null != e ? t && t(!1) : t && t(!0);
            },
          });
        }
      }
      installShortcut(t = null) {
        this.ch && this.ch.addShortcut
          ? this.ch.addShortcut({
              success() {
                t && t(!0);
              },
              fail(e) {
                (e.code, t && t(!1));
              },
            })
          : this.showToast("添加桌面失败");
      }
      hasShortcutInstalled(t = null) {
        this.ch && this.ch.checkShortcut
          ? this.ch.checkShortcut({
              success(e) {
                e.installed ? t && t(!0) : t && t(!1);
              },
              fail(e) {
                (e.code, t && t(!1));
              },
            })
          : t && t(!0);
      }
      addCommonUse(e) {
        this.ch &&
          this.ch.addCommonUse({
            success() {
              (this.showToast("设为常用成功"), e && e());
            },
            fail(e) {
              -10005 === e.code ? this.showToast("暂不支持该功能") : this.showToast("设为常用失败");
            },
          });
      }
      checkCommonUse(t) {
        this.ch &&
          this.ch.checkCommonUse({
            success(e) {
              t && t(e.isCommonUse ? 2 : 1);
            },
            fail(e) {
              (t && t(0), e.code);
            },
          });
      }
      jumpToGameClub(e, t = !1) {
        this.ch &&
          this.ch.jumpToGameClub({
            success: () => {
              (t &&
                (this.gameClub_num++, 2 <= this.gameClub_num) &&
                0 == o.get(r.game_quan) &&
                o.set(r.game_quan, 1),
                e && e());
            },
            fail: (e) => {
              -10005 === e.code
                ? this.showToast("暂不支持该功能")
                : -100010 === e.code
                  ? this.showToast("游戏圈未开通")
                  : this.showToast("跳转游戏圈失败");
            },
          });
      }
      navigateToScene(t) {
        this.ch &&
          this.ch.navigateToScene &&
          this.ch.navigateToScene({
            scene: "sidebar",
            success: (e) => {
              t && t();
            },
            fail: (e) => {},
          });
      }
    }
    ((Q.clipIndexList = []), (Q.videoPath = null));
    class j extends e {
      constructor() {
        (super(...arguments), (this.qg = null));
      }
      get h() {
        return c.CH.MEIZU;
      }
      post_default() {
        ((this.qg = this.ch),
          this.getSystemInfo(),
          this.onShowAlways(),
          this.createBannerAd(),
          this.createVideoAd(),
          this.createInterstitialAd(),
          this.onHide());
      }
      getSystemInfo() {
        var e;
        this.qg &&
          ((e = this.db.systemInfo = this.qg.getSystemInfoSync()),
          (this.db.screenWidth = e.screenWidth),
          (this.db.screenHeight = e.screenHeight));
      }
      share(i = null, a = "article", s = {}) {
        this.ch &&
          W.OperationManager.shareDataLoad(() => {
            var e = W.OperationManager.getOneShareData(),
              t = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2));
            "article" == a
              ? this.ch.shareAppMessage({
                  title: e.title,
                  imageUrl: e.img_url,
                  query: "&sn=" + t + "&share_id=" + e.id,
                  extra: s,
                  success() {
                    i && i(!0);
                  },
                  fail(e) {
                    i && i(!1);
                  },
                })
              : this.ch.shareAppMessage({
                  channel: a,
                  title: e.title,
                  imageUrl: e.img_url,
                  query: "&sn=" + t + "&share_id=" + e.id,
                  extra: s,
                  success() {
                    i && i(!0);
                  },
                  fail(e) {
                    i && i(!1);
                  },
                });
          });
      }
      createVideoAd() {
        this.qg;
      }
      showVideoAd(t = null) {
        this.qg &&
          this.qg &&
          ((this.videoAd = this.qg.createRewardedVideoAd({ adUnitId: this.videoId })),
          this.videoAd.load(),
          this.videoAd.offLoad(),
          this.videoAd.onLoad(() => {
            ((this.db.videoEnable = !0), this.videoAd.show(), this.videoAd.offLoad());
          }),
          this.videoAd.offRewarded(),
          this.videoAd.onRewarded(() => {
            (t && t(1), this.videoAd.offRewarded());
          }),
          this.videoAd.onError(),
          this.videoAd.onError((e) => {
            (this.videoAd.onError(), t && t(-1));
          }));
      }
      createBannerAd(e = 0) {
        var t;
        this.qg &&
          ((t = this.refreshBanId()),
          (this.bannerAd = this.qg.createBannerAd({
            adUnitId: this.bannerId,
            adIntervals: t,
            style: { top: -1 },
          })));
      }
      refreshBanId() {
        return (
          this.banIndex++,
          this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0),
          this.bannerId[this.banIndex]
        );
      }
      destroyBannerAd() {}
      showBannerAd() {
        this.qg && this.bannerAd.show();
      }
      hideBannerAd() {
        this.qg && this.bannerAd.hide();
      }
      createInterstitialAd() {
        this.qg &&
          ((this.insertAd = this.qg.createInsertAd({ adUnitId: this.insertId })),
          this.insertAd.hide());
      }
      showInterstitialAd() {
        this.qg &&
          (this.insertAd.load(),
          this.insertAd.onLoad(() => {
            (this.insertAd.show(), this.insertAd.offLoad());
          }));
      }
      showToast(e, t = 0, i = 2e3) {
        this.ch && this.ch.showToast({ message: e, duration: i });
      }
    }
    class z extends e {
      constructor() {
        (super(...arguments),
          (this.isShowToast = !1),
          (this.isShortcut = !0),
          (this.create_shortcut_time = 0),
          (this.interstitial_time = 0),
          (this.banner_time = 0),
          (this.nativeId_time = 0),
          (this.customAd_time = 0),
          (this.customAds_time = [0, 0]),
          (this.customIdIndex = 0),
          (this.isCallback = !1),
          (this.show_vibrate_time = 0));
      }
      get h() {
        return c.CH.OPPO;
      }
      post_default() {
        (this.getSystem(),
          this.getLaunchOptions(),
          this.onShowAlways(),
          this.createVideoAd(),
          this.createNativeAd(),
          this.createGamePortalAd(),
          this.onHide(),
          this.reportMonitor());
      }
      setEnableDebug(e = !0) {
        this.ch &&
          this.ch.setEnableDebug({
            enableDebug: e,
            success: function () {},
            complete: function () {},
            fail: function () {},
          });
      }
      createVideoAd() {
        this.ch &&
          this.videoId &&
          ((this.videoAd = this.ch.createRewardedVideoAd({ adUnitId: this.videoId })),
          (this.db.videoEnable = !0),
          this.videoAd.onLoad(() => {
            ((this.db.videoEnable = !0),
              this.videoCallback && this.videoCallback(n.onLoad),
              this.videoAd.show().catch((e) => {}));
          }),
          this.videoAd.onError((e) => {
            ((this.db.videoEnable = !1),
              this.isShowToast && this.showToast("暂无广告，请稍后再试", "none", 1e3),
              this.videoCallback && this.videoCallback(n.onError));
          }),
          this.videoAd.onClose((e) => {
            e && e.isEnded
              ? this.isCallback ||
                ((this.isCallback = !0), this.videoCallback && this.videoCallback(n.onSuccess))
              : this.videoCallback && this.videoCallback(n.onFail);
          }));
      }
      showVideoAd(e = null, t = !0) {
        ((this.isShowToast = t),
          (this.isCallback = !1),
          this.ch && this.videoAd
            ? ((this.videoCallback = e), (this.isShortcut = !1), this.videoAd.load())
            : (t && this.showToast("暂无广告，请稍后再试", "none", 1e3), !this.ch && e && e(!0)));
      }
      createBannerAd(t = {}, i = !1) {
        if (
          !(Laya.Browser.now() - this.banner_time < 2e3) &&
          ((this.banner_time = Laya.Browser.now()), this.ch)
        ) {
          this.bannerAd && (this.bannerAd.destroy(), (this.bannerAd = null));
          let e = this.refreshBanId();
          e &&
            ((this.bannerAd = this.ch.createBannerAd({ adUnitId: e, style: t })),
            this.bannerAd.onLoad(() => {}),
            this.bannerAd.onResize(() => {}),
            this.bannerAd.onError((e) => {}),
            i) &&
            this.bannerAd.show();
        }
      }
      refreshBanId() {
        return (
          this.banIndex++,
          this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0),
          this.bannerId[this.banIndex]
        );
      }
      destroyBannerAd() {
        this.bannerAd && (this.bannerAd.destroy(), (this.bannerAd = null));
      }
      resetBannerAd() {
        this.ch && (this.destroyBannerAd(), this.createBannerAd(), this.bannerAd.show());
      }
      showBannerAd() {
        this.ch &&
          this.SwitchM0.game_banner &&
          (this.bannerAd ? this.bannerAd.show() : this.createBannerAd({}, !0));
      }
      hideBannerAd() {
        this.ch && this.bannerAd && this.bannerAd.hide();
      }
      createInterstitialAd() {
        this.ch &&
          this.insertId &&
          ((this.insertAd = this.ch.createInsertAd({ adUnitId: this.insertId })),
          this.insertAd.onError((e) => {}));
      }
      showInterstitialAd(e, t = !1, i) {
        if (this.ch && this.insertAd) {
          if (!t) {
            if (
              Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
              Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            )
              return void (e && e(!1));
            this.interstitial_time = Laya.Browser.now();
          }
          (this.insertAd.offClose(),
            this.insertAd.onClose(() => {
              (e && e(!1), i && i());
            }),
            this.insertAd.load(),
            this.insertAd.offLoad(),
            this.insertAd.onLoad(() => {
              (e && e(!0), this.insertAd.show());
            }));
        }
      }
      createCustomAd(e, t, i, a = 0, s = !0, n = null, r = !0) {
        !this.ch ||
          !this.customId[i] ||
          (!r && Laya.Browser.now() - this.customAd_time < 1e4) ||
          ((this.customIdIndex = i),
          (this.customAd_time = Laya.Browser.now()),
          Laya.Browser.width / Laya.Browser.height < 0.5 && (t += a),
          this.customAd && this.customAd.destroy(),
          (this.customAd =
            0 == e && 0 == t
              ? this.ch.createCustomAd({ posId: this.customId[i] })
              : this.ch.createCustomAd({
                  adUnitId: this.customId[i],
                  style: { top: t, width: this.db.screenWidth },
                })),
          this.customAd.onLoad(() => {}),
          s && this.showCustomAd(n),
          this.customAd.onError((e) => {
            n && n(!1);
          }));
      }
      showCustomAd(t = null, e = !1, i) {
        if (this.customAd) {
          if (!e) {
            if (
              Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
              Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            )
              return;
            this.interstitial_time = Laya.Browser.now();
          }
          (this.customAd
            .show()
            .then(() => {
              t && t(!0);
            })
            .catch((e) => {
              t && t(!1);
            }),
            this.customAd.offLoad(),
            this.customAd.onHide(() => {
              (t && t(!1), i && i());
            }));
        }
      }
      hideCustomAd() {
        this.customAd && this.customAd.hide();
      }
      createGameBannerAd() {
        this.ch &&
          this.gameBannerAdId &&
          1076 <= this.ch.getSystemInfoSync().platformVersionCode &&
          ((this.gameBannerAd = this.ch.createGameBannerAd({ adUnitId: this.gameBannerAdId })),
          this.gameBannerAd.onLoad(() => {}),
          this.gameBannerAd.onError((e) => {}));
      }
      showGameBannerAd(t = null) {
        this.gameBannerAd && d.showAd()
          ? this.gameBannerAd
              .show()
              .then(() => {
                t && t(!0);
              })
              .catch(function (e) {
                t && t(!1);
              })
          : t && t(!1);
      }
      hideGameBannerAd() {
        this.gameBannerAd && this.gameBannerAd.hide();
      }
      createGamePortalAd() {
        this.ch &&
          this.gamePortalAdId &&
          1076 <= this.ch.getSystemInfoSync().platformVersionCode &&
          ((this.gamePortalAd = this.ch.createGamePortalAd({ adUnitId: this.gamePortalAdId })),
          this.gamePortalAd.onLoad(() => {}),
          this.gamePortalAd.onError((e) => {}));
      }
      showGamePortalAd(e = 0) {
        this.gamePortalAd
          ? ((this.interstitial_time = Laya.Browser.now()),
            this.gamePortalAd
              .load()
              .then(() => {
                this.gamePortalAd
                  .show()
                  .then(() => {})
                  .catch((e) => {
                    this.showToast("暂无广告，请稍后再试");
                  });
              })
              .catch((e) => {
                this.showToast("暂无广告，请稍后再试");
              }))
          : this.showToast("暂无广告，请稍后再试");
      }
      hideGamePortalAd() {
        this.gamePortalAd && this.gamePortalAd.hide();
      }
      createGameDrawerAd() {
        var e;
        this.ch &&
          this.gameDrawerAdId &&
          (1090 <= this.ch.getSystemInfoSync().platformVersionCode &&
            ((e = (Laya.Browser.width / 640) * 840),
            (this.gameDrawerAd = this.ch.createGameDrawerAd({
              adUnitId: this.gameDrawerAdId,
              style: { top: e },
            })),
            this.gameDrawerAd.onError((e) => {})),
          this.hideGameDrawerAd());
      }
      showGameDrawerAd() {
        this.gameDrawerAd &&
          this.gameDrawerAd
            .show()
            .then(() => {})
            .catch((e) => {});
      }
      hideGameDrawerAd() {
        this.gameDrawerAd && this.gameDrawerAd.hide();
      }
      createNativeAd(t = null) {
        !this.ch ||
          !this.nativeId[0] ||
          Laya.Browser.now() - this.nativeId_time < 2e4 ||
          ((this.nativeId_time = Laya.Browser.now()),
          (this.nativeAd = this.ch.createNativeAd({ adUnitId: this.nativeId[0] })),
          this.nativeAd.onLoad((e) => {
            ((this.adContent = e.adList[0]), t && t(e.adList[0]), this.nativeAd.offLoad());
          }),
          this.nativeAd.onError((e) => {
            this.nativeAd.offError();
          }),
          this.nativeAd.load());
      }
      clickNativeAd() {
        this.ch &&
          this.nativeAd &&
          this.adContent &&
          this.nativeAd.reportAdClick({ adId: this.adContent.adId });
      }
      showNativeAd() {
        this.ch &&
          this.nativeAd &&
          this.adContent &&
          this.nativeAd.reportAdShow({ adId: this.adContent.adId });
      }
      destroyNativeAd() {
        this.ch && this.nativeAd && (this.nativeAd.destroy(), (this.nativeAd = null));
      }
      gotoOther(e, t, i, a = null) {
        this.ch &&
          t &&
          this.ch.navigateToMiniGame({
            pkgName: t,
            path: i,
            success: function () {
              a && a(!0);
            },
            fail: function (e) {
              a && a(!1);
            },
          });
      }
      installShortcut(t = null) {
        const i = this.ch;
        this.ch &&
          ((this.create_shortcut_time = Laya.Browser.now()),
          i.hasShortcutInstalled({
            success: (e) => {
              ((this.isShortcut = !1),
                0 == e &&
                  i.installShortcut({
                    success: () => {
                      t && t(!0);
                    },
                    fail: (e) => {
                      (t && t(!0),
                        "refused, platform limit." == e.data &&
                          this.showToast("添加桌面失败，请稍后再试"));
                    },
                    complete: () => {},
                  }));
            },
            fail: function (e) {},
            complete: function () {},
          }));
      }
      hasShortcutInstalled(t = null) {
        this.ch &&
          this.ch.hasShortcutInstalled({
            success: (e) => {
              t && t(e);
            },
            fail: function (e) {
              t && t(!1);
            },
            complete: function () {},
          });
      }
      reportMonitor() {
        this.ch && this.ch.reportMonitor("game_scene", 0);
      }
      setKeepScreenOn(e = !0) {
        this.ch && this.ch.setKeepScreenOn({ keepScreenOn: e, success(e) {}, fail(e) {} });
      }
      exitApplication() {
        this.ch &&
          this.ch.exitApplication({
            success: function () {},
            fail: function () {},
            complete: function () {},
          });
      }
      createCustomAds(e, t, i, a, s) {
        if (this.ch && this.customId[e]) {
          if (!i) {
            if (
              Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
              Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            )
              return;
            this.interstitial_time = Laya.Browser.now();
          }
          ((this.customIdIndex = e),
            (this.customAds_time[e] = Laya.Browser.now()),
            this.customAds[e] && this.customAds[e].destroy(),
            (this.customAds[e] = this.ch.createCustomAd({ adUnitId: this.customId[e], style: t })),
            this.customAds[e].onLoad(() => {}),
            this.showCustomAds(e, a),
            this.customAds[e].onError((e) => {
              a && a(!1);
            }));
        }
      }
      showCustomAds(e, t, i, a) {
        this.customAds[e] &&
          (this.customAds[e]
            .show()
            .then(() => {
              t && t(!0);
            })
            .catch((e) => {
              t && t(!1);
            }),
          this.customAds[e].offLoad(),
          this.customAds[e].onHide(() => {
            (t && t(!1), a && a());
          }));
      }
      hideCustomAds(e) {
        this.customAds[e] && this.customAds[e].hide();
      }
      getEnterOptionsSync() {
        var e;
        this.ch &&
          this.ch.getEnterOptionsSync &&
          (e = this.db.launchOption = this.ch.getEnterOptionsSync()) &&
          (e.referrerInfo || (e.referrerInfo = {}),
          (this.db.sourceScene = this.db.launchOption.scene),
          (this.db.sourceAppId =
            this.db.launchOption.query.source_appid || this.db.launchOption.referrerInfo.appId),
          this.db.launchOption.query &&
            this.db.launchOption.query.ucode &&
            (this.Global.share_ucode = this.db.launchOption.query.ucode),
          e) &&
          e.query &&
          1 == e.query.oppo_type &&
          ((this.Global.ad_video_num = e.query.oppo_video_num),
          (this.Global.is_oppo_ad = !0),
          this.showLaunchVideo());
      }
      vibrateShort(e = "light") {
        Laya.Browser.now() - this.show_vibrate_time < 50 ||
          ("light" == e && (e = "medium"),
          this.ch &&
            this.Global.shake_switch &&
            (this.ch.vibrateShort({ type: e, success() {}, fail() {}, complete() {} }),
            (this.show_vibrate_time = Laya.Browser.now())));
      }
      showLaunchVideo() {
        this.Global.is_oppo_ad &&
          0 < this.Global.ad_video_num &&
          (this.Global.ad_video_num--,
          this.showVideoAd((e) => {
            (1 != e && 0 != e && -1 != e) || this.showLaunchVideo();
          }, !1));
      }
    }
    class F extends e {
      constructor() {
        (super(...arguments),
          (this.share_start_time = 0),
          (this.share_end_time = 0),
          (this.share_interval_time = 3e3),
          (this.openContext = null),
          (this.userInfo = null));
      }
      get h() {
        return c.CH.QQ;
      }
      post_default() {
        (this.getSystem(),
          this.getLaunchOptions(),
          this.onShowAlways(),
          this.checkUpdate(),
          this.onHide());
      }
      createVideoAd() {
        this.ch &&
          ((this.videoAd = this.ch.createRewardedVideoAd({ adUnitId: this.videoId })),
          this.videoAd.onLoad(() => {
            ((this.db.videoEnable = !0), this.videoAd.offLoad());
          }),
          this.videoAd.onError((e) => {
            ((this.db.videoEnable = !1),
              (this.Global.showVideo = !1),
              this.videoCallback && this.videoCallback(n.onError));
          }),
          this.videoAd.onClose((e) => {
            (e && e.isEnded
              ? ((this.Global.isVideo = !1),
                (this.Global.isForceVideo = !1),
                (this.Global.showVideo = !1),
                this.videoCallback && this.videoCallback(n.onSuccess))
              : ((this.Global.isVideo = !1),
                (this.Global.isForceVideo = !1),
                (this.Global.showVideo = !1),
                this.videoCallback && this.videoCallback(n.onFail)),
              this.Global.sound_switch || (Laya.SoundManager.muted = !0));
          }));
      }
      showVideoAd(e = null, t = !0) {
        this.ch && this.videoAd
          ? ((this.Global.showVideo = !0),
            (this.videoCallback = e),
            this.videoAd.load().then(() => {
              this.videoAd
                .show()
                .then(() => {
                  this.videoCallback && this.videoCallback(n.onLoad);
                })
                .catch((e) => {
                  t && this.showToast("获取视频失败");
                });
            }))
          : !this.ch && e && e(n.onSuccess);
      }
      createBannerAd() {
        if (this.ch) {
          let e = this.refreshBanId();
          ((this.bannerAd = this.ch.createBannerAd({
            adUnitId: e,
            adIntervals: 30,
            style: { top: this.db.screenHeight - 80, left: 0, width: this.db.screenWidth },
          })),
            this.bannerAd.onLoad(() => {
              this.bannerAd.offLoad();
            }),
            this.bannerAd.onResize(() => {
              ((this.bannerAd.style.left =
                (this.db.screenWidth - this.bannerAd.style.realWidth) / 2),
                (this.bannerAd.style.top = this.db.screenHeight - this.bannerAd.style.realHeight),
                this.bannerAd.offResize());
            }),
            this.bannerAd.onError((e) => {}));
        }
      }
      refreshBanId() {
        return (
          this.banIndex++,
          this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0),
          this.bannerId[this.banIndex]
        );
      }
      destroyBannerAd() {
        this.bannerAd && (this.bannerAd.destroy(), (this.bannerAd = null));
      }
      resetBannerAd() {
        this.ch && (this.destroyBannerAd(), this.createBannerAd(), this.bannerAd.show());
      }
      showBannerAd() {
        this.ch && this.bannerAd && this.bannerAd.show().catch((e) => {});
      }
      hideBannerAd() {
        this.ch && this.bannerAd && this.bannerAd.hide();
      }
      createInterstitialAd() {
        this.ch &&
          ((this.insertAd = this.ch.createInterstitialAd({ adUnitId: this.insertId })),
          this.insertAd.onLoad(() => {
            this.insertAd.offLoad();
          }),
          this.insertAd.onError((e) => {
            this.insertAd.offError();
          }));
      }
      showInterstitialAd(e = null) {
        this.ch &&
          this.insertAd &&
          (e &&
            (this.insertAd.offClose(),
            this.insertAd.onClose(() => {
              (this.insertAd.offClose(), e && e());
            })),
          this.insertAd.show().catch((e) => {}));
      }
      showShareMenu(e, t) {
        this.ch && (this.setShareAppMessage(e, t), this.ch.showShareMenu({ withShareTicket: !1 }));
      }
      setShareAppMessage(e, t) {
        this.ch &&
          this.ch.onShareAppMessage(() => {
            W.OperationManager.getOneShareData();
            return { title: e, imageUrl: t, success: (e) => {}, fail: (e) => {} };
          });
      }
      share(i = null) {
        var e, t;
        this.ch &&
          ((this.share_start_time = Laya.Browser.now()),
          this.onShow((e) => {
            this.share_end_time = Laya.Browser.now();
            var t = this.share_end_time - this.share_start_time;
            3e3 <= t && t <= 5e3 ? i && i(!0) : i && i(!1);
          }),
          (e = this.getOneShareData()),
          (t = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2))),
          this.ch.shareAppMessage({
            title: e.title,
            imageUrl: e.img_url,
            query: "&sn=" + t + "&share_id=" + e.id,
          }));
      }
      getOneShareData() {
        var e = new W.ShareDB();
        return (
          (e.id = 0),
          (e.img_url = c.Var._Param.QQ.shareImage),
          (e.title = c.Var._Param.QQ.shareTitle),
          e
        );
      }
      gotoOther(e, t, i = null) {
        this.ch &&
          e &&
          this.ch.navigateToMiniProgram({
            appId: e,
            path: t,
            success(e) {
              i && i(!0);
            },
            fail(e) {
              i && i(!1);
            },
          });
      }
      createAppBox() {
        this.ch &&
          ((this.boxAd = this.ch.createAppBox({ adUnitId: this.boxAdId })), this.boxAd.load());
      }
      showAppBox() {
        this.ch && this.boxAd && this.boxAd.show();
      }
      addColorSign(t = null) {
        this.ch &&
          this.ch.addColorSign({
            success(e) {
              t && t(!0);
            },
            fail(e) {
              t && t(!0);
            },
          });
      }
      saveAppToDesktop() {
        this.ch && this.ch.saveAppToDesktop();
      }
      subscribeAppMsg() {
        this.ch && this.ch.subscribeAppMsg({ subscribe: !0, success(e) {}, fail(e) {} });
      }
      checkUpdate() {
        if (this.ch) {
          let t = this.ch.getUpdateManager();
          (t.onCheckForUpdate((e) => {}),
            t.onUpdateFailed(() => {
              this.showToast("新版本下载失败");
            }),
            t.onUpdateReady(() => {
              this.showModal("更新提示", "新版本已经准备好，是否重启应用？", !0, (e) => {
                e && t.applyUpdate();
              });
            }));
        }
      }
      createBlockAd(e, i, a, s, t = 0, n = "landscape") {
        if (this.ch) {
          let t = this.ch.createBlockAd({
            adUnitId: this.blockAdId[s],
            style: { left: e, top: i },
            size: a,
            orientation: n,
          });
          (t.onLoad(() => {}),
            t.onError((e) => {}),
            t.onResize((e) => {
              (0 == s &&
                ((t.style.left = (this.db.screenWidth - e.width) / 2),
                (t.style.top = this.db.screenHeight - (e.height + 30))),
                t.offResize());
            }),
            (this.blockAds[s] = t));
        }
      }
      showBlockAd(e) {
        this.ch && this.blockAds[e] && this.blockAds[e].show().catch((e) => {});
      }
      hideBlockAd(e) {
        this.ch && this.blockAds[e] && this.blockAds[e].hide();
      }
      destroyBlockAd() {
        this.ch && this.blockAd && this.blockAd.destroy();
      }
      exitApplication() {
        this.ch && this.ch.exitMiniProgram({ success: () => {}, fail: () => {} });
      }
      setUserCloudStorage(e, t = "score") {
        this.ch &&
          ((e = { wxgame: { score: e, update_time: new Date().getTime() }, cost_ms: 36500 }),
          this.ch.setUserCloudStorage({
            KVDataList: [{ key: t, value: JSON.stringify(e) }],
            success: (e) => {},
            fail: (e) => {},
            complete: (e) => {},
          }));
      }
      getOpenContext() {
        this.ch && (this.openContext = this.ch.getOpenDataContext());
      }
      requirePrivacyAuthorize(e) {
        this.ch && this.ch.requirePrivacyAuthorize
          ? this.ch.requirePrivacyAuthorize({
              success: () => {
                e && e(!0);
              },
              fail: () => {
                e && e(!1);
              },
            })
          : e && e(!0);
      }
      getSetting(t, i = "setting.shareFriendship") {
        this.ch &&
          this.ch.getSetting({
            success(e) {
              e.authSetting[i]
                ? t && t(!0)
                : Laya.Browser.window.qq.authorize({
                    scope: i,
                    success() {
                      t && t(!0);
                    },
                    fail(e) {
                      t && t(!1);
                    },
                  });
            },
          });
      }
      openSetting(t, i = "setting.shareFriendship") {
        this.ch &&
          this.ch.openSetting({
            success(e) {
              e = e.authSetting;
              t && t(e[i]);
            },
            fail(e) {},
          });
      }
      getUserInfo(t) {
        this.ch &&
          this.ch.getUserInfo({
            success: (e) => {
              ((this.userInfo = e.rawData), t && t(!0));
            },
            fail: (e) => {
              t && t(!1);
            },
          });
      }
      postMessage(e, t) {
        this.ch && this.openContext.postMessage({ userInfo: this.userInfo, msgType: e, score: t });
      }
    }
    (((f = S = S || {})[(f.OTHER = 0)] = "OTHER"),
      (f[(f.QR = 1)] = "QR"),
      (f[(f.RECOMMEND = 2)] = "RECOMMEND"),
      (f[(f.SEARCH = 3)] = "SEARCH"));
    class l extends W.Global {
      static get sound_switch() {
        var e;
        return c.Var._Global.save_switch && (1 === (e = W.Cache.get("sound_switch")) || 0 === e)
          ? e
          : c.Var._Global.sound_switch_def;
      }
      static set sound_switch(e) {
        c.Var._Global.save_switch
          ? (W.Cache.set("sound_switch", e), W.ICache.saveData())
          : (c.Var._Global.sound_switch_def = e);
      }
      static get shake_switch() {
        var e;
        return c.Var._Global.save_switch && (1 === (e = W.Cache.get("shake_switch")) || 0 === e)
          ? e
          : c.Var._Global.shake_switch_def;
      }
      static set shake_switch(e) {
        c.Var._Global.save_switch
          ? (W.Cache.set("shake_switch", e), W.ICache.saveData())
          : (c.Var._Global.shake_switch_def = e);
      }
      static get voice_switch() {
        var e;
        return c.Var._Global.save_switch && (1 === (e = W.Cache.get("voice_switch")) || 0 === e)
          ? e
          : c.Var._Global.voice_switch_def;
      }
      static set voice_switch(e) {
        c.Var._Global.save_switch
          ? (W.Cache.set("voice_switch", e), W.ICache.saveData())
          : (c.Var._Global.voice_switch_def = e);
      }
      static get pause() {
        return c.Var._Global.pause_video || c.Var._Global.pause_dialog;
      }
      static set pause(e) {
        c.Var._Global.pause_dialog = e;
      }
      static pxTodb(e) {
        return "portrait" == window.screenOrientation ||
          "sensor_portrait" == window.screenOrientation
          ? (e * (Laya.Browser.width / 640)) / Laya.Browser.pixelRatio
          : (e * (Laya.Browser.height / 640)) / Laya.Browser.pixelRatio;
      }
      static isX() {
        return "portrait" == window.screenOrientation ||
          "sensor_portrait" == window.screenOrientation
          ? Laya.Browser.width / Laya.Browser.height < 0.49
          : "landscape" == window.screenOrientation ||
              "sensor_landscape" == window.screenOrientation
            ? Laya.Browser.height / Laya.Browser.width < 0.49
            : void 0;
      }
    }
    ((l.currentVideoId = null),
      (l.source_type = S.OTHER),
      (l.close_ad_time = 0),
      (l.go_game_time = 0),
      (l.game_num = 1),
      (l.close_to_native_num = 0),
      (l.share_award = !0),
      (l.isResultNum = 0),
      (l.show_home_interstitialAd = !0),
      (l.isForceVideo = !0),
      (l.showVideo = !1),
      (l.video_last_time = 0),
      (l.video_interval = 1200),
      (l.is_show_video_num = 0),
      (l.isNative = !1),
      (l.isNativeAd = !1),
      (l.nativeAdStyle = { left: 0, top: 0, width: 0, height: 0 }),
      (l.user_info = null),
      (l.rank_info = []),
      (l.rank_info_time = 0),
      (l.openId = null),
      (l.is_navigate_award = !1),
      (l.is_shortcut_award = !1),
      (l.is_my_mini_award = !1),
      (l.is_shortcut_award_wx = !1),
      (l.is_feed_award = !1),
      (l.bannerShow = !1),
      (l.is_new_user = !1),
      (l.is_show_pro = []),
      (l.rank_datas = []),
      (l.get_rank_time = 0),
      (l.rank_user_data = null),
      (l.share_ucode = null),
      (l.save_switch = 1),
      (l.sound_switch_def = 1),
      (l.shake_switch_def = 1),
      (l.voice_switch_def = 1),
      (l.is_vivo_ad = !1),
      (l.ad_video_num = 0),
      (l.is_oppo_ad = !1),
      (l.is_ks_ad = !1),
      (l.bannerCloseTime = 0),
      (l.pause_video = !1),
      (l.pause_dialog = !1),
      (l.interstitial_closed = !1));
    class u extends W.SwitchM0 {
      static showResultUnlock() {
        var e = c.Var._Global.game_num - 1;
        return (
          e >= c.Var._SwitchM0.result_unlock_grade &&
          (e - c.Var._SwitchM0.result_unlock_grade) % c.Var._SwitchM0.result_unlock_grade_level == 0
        );
      }
      static showStartTry() {
        return (
          c.Var._Global.game_num >= c.Var._SwitchM0.start_try_grade &&
          (c.Var._Global.game_num - c.Var._SwitchM0.start_try_grade) %
            c.Var._SwitchM0.start_try_grade_level ==
            0
        );
      }
      static showOpenBox() {
        var e = c.Var._Global.game_num - 1;
        return (
          e >= c.Var._SwitchM0.open_box_grade &&
          (e - c.Var._SwitchM0.open_box_grade) % c.Var._SwitchM0.open_box_grade_level == 0
        );
      }
      static showGameVideo() {
        return (
          !(
            !c.Var._SwitchM0.show_game_video ||
            c.Var._Global.game_num != c.Var._SwitchM0.show_game_video_fist
          ) ||
          !!(
            c.Var._SwitchM0.show_game_video &&
            c.Var._Global.game_num >= c.Var._SwitchM0.show_game_video_fist &&
            c.Var._SwitchM0.show_game_video_num &&
            (c.Var._Global.game_num -
              c.Var._SwitchM0.show_game_video_fist -
              c.Var._SwitchM0.show_game_video_num) %
              c.Var._SwitchM0.show_game_video_num ==
              0
          )
        );
      }
      static showQuickClick() {
        var e = c.Var._Global.game_num - 1;
        if (c.Var._SwitchM0.quick_click_ui_enable) {
          if (c.Var._SwitchM0.quick_click_ui_first == e) return !0;
          if (
            c.Var._SwitchM0.quick_click_ui_first <= e &&
            (e - c.Var._SwitchM0.quick_click_ui_first) % c.Var._SwitchM0.quick_click_ui_space == 0
          )
            return !0;
        }
        return !1;
      }
      static showVideoTip() {
        return (
          0 == c.Var._SwitchM0.show_video_tip ||
          c.Var._SwitchM0.show_video_tip_rate >= W.Ran.int(100, 0)
        );
      }
      static showTurnUI() {
        return (
          c.Var._Global.game_num >= c.Var._SwitchM0.is_turn_unlock_grade &&
          (c.Var._Global.game_num - c.Var._SwitchM0.is_turn_unlock_grade) %
            c.Var._SwitchM0.is_turn_grade_level ==
            0
        );
      }
      static showGameTry() {
        var e = c.Var._Global.game_num - 1;
        return (
          e >= c.Var._SwitchM0.game_try_grade &&
          (e - c.Var._SwitchM0.game_try_grade) % c.Var._SwitchM0.game_try_grade_level == 0
        );
      }
      static showVideoPro(e) {
        return 0 == c.Var._SwitchM0.show_video_pro || !c.Var._Global.is_show_pro[e];
      }
      static refreshSwitch() {
        (c.Var._Global.is_vivo_ad || c.Var._Global.is_oppo_ad) &&
          ((c.Var._SwitchM0.show_game_video = 1),
          (c.Var._SwitchM0.quick_click_ui_enable = 1),
          (c.Var._SwitchM0.quick_click_ui_type = 1),
          (c.Var._SwitchM0.show_video_tip = 1),
          (c.Var._SwitchM0.show_video_tip_rate = 0),
          (c.Var._SwitchM0.shop_video = 1),
          (c.Var._SwitchM0.is_up_video = 1),
          (c.Var._SwitchM0.normal_screen = 1),
          (c.Var._SwitchM0.normal_screen_other = 1),
          (c.Var._SwitchM0.show_start_quick = 1));
      }
      static showKsAdSwitch() {
        var e = c.Var._Global.game_num - 1;
        return 1 == o.get(r.ks_ad_active) || (2 == o.get(r.ks_ad_active) && e % 2 == 0);
      }
    }
    ((u.isShowShareNum = 0),
      (u.game_addiction_num = 6),
      (u.show_game_video = 0),
      (u.show_game_video_num = 5),
      (u.show_game_video_fist = 2),
      (u.normal_screen = 0),
      (u.normal_screen_other = 0),
      (u.interval_screen_time = 3e4),
      (u.delay_screen_time = 10),
      (u.OpeningInt = 0),
      (u.open_delay_interval_time = 1),
      (u.fist_screen_time = 3e4),
      (u.enter_game_banner = 0),
      (u.game_banner = 0),
      (u.other_banner = 0),
      (u.HorizontalBanner = 0),
      (u.quick_click_ui_type = 0),
      (u.quick_click_ui_enable = 0),
      (u.quick_click_ui_first = 3),
      (u.quick_click_ui_space = 3),
      (u.quick_video_value = 60),
      (u.quick_video_rate = 0),
      (u.shop_video = 0),
      (u.is_up_video = 0),
      (u.show_shortcut = 0),
      (u.show_shortcut_result = 0),
      (u.start_try_grade = 999),
      (u.start_try_grade_level = 2),
      (u.game_try_grade = 999),
      (u.game_try_grade_level = 2),
      (u.result_unlock_grade = 999),
      (u.result_unlock_grade_level = 2),
      (u.open_box_grade = 99),
      (u.open_box_grade_level = 5),
      (u.checked_video = 0),
      (u.is_turn_unlock_grade = 99),
      (u.is_turn_grade_level = 5),
      (u.is_turn_video = 0),
      (u.result_close_delay = 1),
      (u.auto_video_enable = 0),
      (u.auto_video_delay = 3e4),
      (u.changeVideoIcon = 0),
      (u.normalSingleCustomAd = 0),
      (u.gameSingleCustomAd = 0),
      (u.VerticalGridChance = 0),
      (u.EndLevelCustom = 5),
      (u.EndCustom = 0),
      (u.share_probability = 0),
      (u.isShowRank = 1),
      (u.isShowRankBtn = 1),
      (u.get_rank_time_dele = 3e5),
      (u.vivobanner = 0),
      (u.icon_normal = 0),
      (u.icon_game = 0),
      (u.show_screen_custom = 0),
      (u.change_video_icon = 0),
      (u.show_video_tip_rate = 100),
      (u.show_video_tip = 0),
      (u.show_video_pro = 0),
      (u.video_grade = 0),
      (u.normal_screen_other_wx = 0),
      (u.shop_video_wx = 1),
      (u.oneGrid = 0),
      (u.show_interstitial_prob = 0),
      (u.show_feedad_prob = 0),
      (u.show_full_video_prob = 0),
      (u.show_exit_full_video_prob = 0),
      (u.show_exit_reward_video_prob = 0),
      (u.show_cutbg_interstitial_prob = 0),
      (u.show_banner_prob = 0),
      (u.show_box_suspend_ad = 0),
      (u.showBoxBanner = 0),
      (u.advertisement = 0),
      (u.advertisement_game = 0),
      (u.advertisement_result = 0),
      (u.ad_game_show_time = 5e3),
      (u.ad_game_hide_time = 5e3),
      (u.normal_screen_native = 0),
      (u.close_to_native = 0),
      (u.show_custom = 0),
      (u.show_grid = 0),
      (u.show_ad_promptly = 0),
      (u.show_ad_time = 0),
      (u.show_home_video = 0),
      (u.banner_interval_time = 3e4),
      (u.physical_power_swtich = 0),
      (u.physical_power = 5),
      (u.physical_power_time = 600),
      (u.physical_add_num = 5),
      (u.nativead_fake_show = 0),
      (u.nativead_fake_time = 30),
      (u.show_start_quick = 0),
      (u.AD_0_switch = 0),
      (u.AD_0_value = 0),
      (u.AD_1_switch = 0),
      (u.AD_1_value = 0),
      (u.AD_2_switch = 0),
      (u.AD_2_value = 0),
      (u.AD_3_switch = 0),
      (u.AD_3_value = 0),
      (u.AD_4_switch = 0),
      (u.AD_4_value = 0),
      (u.AD_5_switch = 0),
      (u.AD_5_value = 0),
      (u.AD_6_switch = 0),
      (u.AD_6_value = 0),
      (u.AD_7_switch = 0),
      (u.AD_7_value = 0),
      (u.AD_8_switch = 0),
      (u.AD_8_value = 0),
      (u.AD_9_switch = 0),
      (u.AD_9_value = 0),
      (u.AD_10_switch = 0),
      (u.AD_10_value = 0),
      (u.AD_0 = 0),
      (u.AD_1 = 0),
      (u.AD_2 = 0),
      (u.AD_3 = 0),
      (u.AD_4 = 0),
      (u.AD_5 = 0),
      (u.AD_6 = 0),
      (u.AD_7 = 0),
      (u.AD_8 = 0),
      (u.AD_9 = 0),
      (u.AD_10 = 0));
    var J = function (e, r, o, h) {
      return new (o = o || Promise)(function (i, t) {
        function a(e) {
          try {
            n(h.next(e));
          } catch (e) {
            t(e);
          }
        }
        function s(e) {
          try {
            n(h.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function n(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value) instanceof o
                ? t
                : new o(function (e) {
                    e(t);
                  })
              ).then(a, s);
        }
        n((h = h.apply(e, r || [])).next());
      });
    };
    let K = { gid: "tt_snlh2", v: "1.0.0" };
    class _ {
      static initDyzt() {
        if (c.Var.show_dyzt && Laya.Browser.window.tt) {
          var t = Laya.Browser.window.tt.getLaunchOptionsSync().query;
          if (t) {
            let e = t.channel;
            t = { channel: (e = e || ""), query: t };
            JSON.stringify(t);
          }
          (_.reportNextDayOpen(),
            o.get(r.is_old_user) ||
              ((l.is_new_user = !0),
              o.set(r.is_old_user, 1),
              o.set(r.active_time, W.Time.getNow()),
              _.dyReport(_.event_type.active)));
        }
      }
      static dyReport(t) {
        if (c.Var.show_dyzt && Laya.Browser.window.tt) {
          var i = Laya.Browser.window.tt.getLaunchOptionsSync().query;
          let e = i && i.clickid;
          (e ? (o.set(r.clickId, e), W.ICache.saveData()) : (e = o.get(r.clickId)),
            e
              ? (i && i.channel,
                (i = {
                  event_type: t,
                  context: { ad: { callback: e } },
                  timestamp: Laya.Browser.now(),
                }),
                X.dyReport(i))
              : (e = ""));
        }
      }
      static reportNextDayOpen() {
        W.ICache.checkIsNewDay() && o.get(r.is_old_user) && _.dyReport(_.event_type.next_day_open);
      }
      static gameAddReport() {
        _.isToday() &&
          (o.add(r.click_ad_num),
          o.get(r.click_ad_num) == c.Var._SwitchM0.game_addiction_num &&
            _.dyReport(_.event_type.game_addiction),
          W.ICache.saveData());
      }
      static isToday() {
        var e, t;
        return (
          !!o.get(r.active_time) &&
          ((e = new Date(o.get(r.active_time))),
          (t = new Date()),
          e.getFullYear() === t.getFullYear()) &&
          e.getMonth() === t.getMonth() &&
          e.getDate() === t.getDate()
        );
      }
    }
    _.event_type = {
      active: "active",
      active_register: "active_register",
      game_addiction: "game_addiction",
      lt_roi: "lt_roi",
      ltv_roi_7d: "ltv_roi_7d",
      next_day_open: "next_day_open",
    };
    let X = class B {
      static login(t, i) {
        return J(this, void 0, void 0, function* () {
          (t = null == t ? {} : t).gid = K.gid;
          let e = "";
          return (
            Laya.Browser.window.tt &&
              (e = Laya.Browser.window.tt.getLaunchOptionsSync().scene.toString()),
            (t.scene = e),
            B.post("login", { data: t, success: i }, null)
          );
        });
      }
      static post(e, i, a = !0, s = "post") {
        return J(this, void 0, void 0, function* () {
          var e = i.data;
          if (void 0 === e) return !1;
          let t = new XMLHttpRequest();
          (a ? t.open(s, this.api_url, a) : t.open(s, this.api_url),
            t.setRequestHeader("content-type", "application/json"),
            t.send(JSON.stringify(e)),
            (t.onreadystatechange = function () {
              if (200 === t.status && 4 === t.readyState) {
                var e = JSON.parse(t.responseText);
                if (void 0 !== i.success) return i.success(e);
              } else if (200 !== t.status) return (i.error, i.error());
            }));
        });
      }
      static dyReport(e) {
        return B.post("dyReport", { data: e });
      }
    };
    ((X.loginInfo = null), (X.api_url = "https://analytics.oceanengine.com/api/v2/conversion"));
    class Y extends e {
      constructor() {
        (super(...arguments),
          (this.btnMoreGame = null),
          (this.gameRecorderManager = null),
          (this.isRecording = !1),
          (this.recordingBeginTime = 0),
          (this.recordingEndTime = 0),
          (this.clipIndexList = []),
          (this.videoPath = null),
          (this.recordResp = null),
          (this.recordTime = 0),
          (this.interstitial_time = 0),
          (this.banner_time = 0),
          (this.is_record_share = !1),
          (this.openContext = null),
          (this.userInfo = null));
      }
      get h() {
        return c.CH.ZJ;
      }
      post_default() {
        (this.showFavoriteGuide(),
          this.getSystem(),
          this.getLaunchOptions(),
          this.onShowAlways(),
          this.createVideoAd(),
          this.getGameRecorderManager(),
          this.checkUpdate(),
          this.onHide(),
          (this.Global.go_game_time = Laya.Browser.now()));
      }
      login(t = null) {
        this.ch &&
          this.ch.login({
            success: (e) => {
              t && t(!0, e);
            },
            fail: (e) => {
              t && t(!1, e);
            },
          });
      }
      showFavoriteGuide() {
        this.ch &&
          this.ch.showFavoriteGuide &&
          this.ch.showFavoriteGuide({
            type: "bar",
            content: "一键添加到我的小程序",
            position: "bottom",
            success(e) {},
            fail(e) {},
          });
      }
      share(t = null, e = "article", i = {}) {
        var a, s;
        this.ch
          ? ((a = this.getOneShareData()),
            (s = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2))),
            "article" == e
              ? c.Var._Param.TT.shareID && "" != c.Var._Param.TT.shareID
                ? this.ch.shareAppMessage({
                    templateId: c.Var._Param.TT.shareID,
                    query: "&sn=" + s + "&share_id=" + a.id,
                    extra: i,
                    success(e) {
                      t && t(!0);
                    },
                    fail(e) {
                      t && t(!1);
                    },
                  })
                : this.ch.shareAppMessage({
                    title: a.title,
                    imageUrl: a.img_url,
                    query: "&sn=" + s + "&share_id=" + a.id,
                    extra: i,
                    success(e) {
                      t && t(!0);
                    },
                    fail(e) {
                      t && t(!1);
                    },
                  })
              : this.ch.shareAppMessage({
                  channel: e,
                  title: a.title,
                  imageUrl: a.img_url,
                  templateId: "",
                  query: "&sn=" + s + "&share_id=" + a.id,
                  extra: i,
                  success() {
                    t && t(!0);
                  },
                  fail(e) {
                    t && t(!1);
                  },
                }))
          : t && t(!0);
      }
      createVideoAd() {
        this.ch &&
          ((this.videoAd = this.ch.createRewardedVideoAd({ adUnitId: this.videoId })),
          this.videoAd.onLoad(() => {
            this.db.videoEnable = !0;
          }),
          this.videoAd.onError((e) => {
            this.db.videoEnable = !1;
          }),
          this.videoAd.load(),
          this.videoAd.onClose((e) => {
            e && e.isEnded
              ? (_.dyReport(_.event_type.lt_roi),
                _.dyReport(_.event_type.ltv_roi_7d),
                _.gameAddReport(),
                c.Var.is_sz_sdk && seeg.reportAd({ complete: !0 }),
                this.Global.openId &&
                  this.ch.uploadUserEvent &&
                  this.ch.uploadUserEvent(this.Global.openId, 1),
                this.videoCallback && this.videoCallback(n.onSuccess))
              : (c.Var.is_sz_sdk && seeg.reportAd({ complete: !1 }),
                this.videoCallback && this.videoCallback(n.onFail));
          }));
      }
      showVideoAd(e = null, t = !0, i = null) {
        this.ch && this.videoAd
          ? ((this.videoCallback = e),
            this.videoAd
              .show()
              .then(() => {
                (i && i(), this.videoCallback && this.videoCallback(n.onLoad));
              })
              .catch((e) => {
                (t && this.showToast("暂无视频，请稍后再试"),
                  this.videoAd.load(),
                  this.videoCallback && this.videoCallback(n.onError));
              }))
          : (this.showToast("暂无视频"), e && !this.ch && e(n.onSuccess));
      }
      createBannerAd(e) {
        var t;
        this.ch &&
          "" != (t = this.refreshBanId()) &&
          t &&
          (Laya.Browser.now() - this.banner_time < 1e4
            ? e && e()
            : (this.destroyBannerAd(),
              (this.banner_time = Laya.Browser.now()),
              (this.bannerAd = this.ch.createBannerAd({
                adUnitId: t,
                adIntervals: 30,
                style: {
                  left: (this.db.screenWidth - 128) / 2,
                  width: 128,
                  top: this.db.screenHeight - 72,
                },
              })),
              this.bannerAd.onLoad(() => {
                e && e();
              }),
              this.hideBannerAd(),
              this.bannerAd.onError((e) => {}),
              this.bannerAd.onResize((e) => {})));
      }
      refreshBanId() {
        return (
          this.banIndex++,
          this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0),
          this.bannerId[this.banIndex]
        );
      }
      destroyBannerAd() {
        this.bannerAd && (this.bannerAd.destroy(), (this.bannerAd = null));
      }
      resetBannerAd() {
        this.ch && (this.destroyBannerAd(), this.createBannerAd());
      }
      showBannerAd() {
        this.ch &&
          this.SwitchM0.game_banner &&
          this.Global.isX() &&
          this.bannerAd &&
          this.bannerAd
            .show()
            .then(() => {})
            .catch((e) => {});
      }
      hideBannerAd() {
        this.bannerAd && this.bannerAd.hide();
      }
      createInterstitialAd() {
        this.db.appName;
        this.ch &&
          ((this.insertAd = this.ch.createInterstitialAd({ adUnitId: this.insertId })),
          this.insertAd) &&
          (this.insertAd.onLoad(() => {
            this.insertAd.offLoad();
          }),
          this.insertAd.onError((e) => {
            this.insertAd.offError();
          }));
      }
      showInterstitialAd(e, t = !1, i, a) {
        if (this.ch) {
          if ("" != this.insertId && this.insertId) {
            if (!t) {
              if (
                Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
                Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
              )
                return void (e && e(!1));
              this.interstitial_time = Laya.Browser.now();
            }
            (this.insertAd && this.insertAd.destroy(),
              (this.insertAd = this.ch.createInterstitialAd({ adUnitId: this.insertId })),
              e &&
                this.insertAd.onClose(() => {
                  (this.insertAd.offClose(), e(!1), i && i());
                }),
              this.insertAd &&
                this.insertAd
                  .load()
                  .then(() => {
                    (this.insertAd.show(), a && a());
                  })
                  .catch((e) => {}));
          }
        } else e && e(!1);
      }
      getGameRecorderManager() {
        this.ch &&
          ((this.gameRecorderManager = this.ch.getGameRecorderManager()),
          this.gameRecorderManager) &&
          (this.gameRecorderManager.onError((e) => {}),
          this.gameRecorderManager.onInterruptionBegin((e) => {}),
          this.gameRecorderManager.onInterruptionEnd((e) => {}),
          this.gameRecorderManager.onStart((e) => {
            ((this.isRecording = !0), (this.recordingBeginTime = new Date().getTime()));
          }),
          this.gameRecorderManager.onStop((e) => {
            ((this.recordResp = e),
              (this.videoPath = e.videoPath),
              (this.isRecording = !1),
              (this.recordingEndTime = new Date().getTime()),
              this.clipVideo());
          }));
      }
      startGameRecorderManager() {
        this.ch &&
          this.gameRecorderManager &&
          ((this.is_record_share = !1),
          this.gameRecorderManager.start({ duration: 300 }),
          (this.clipIndexList = []));
      }
      stopGameRecorderManager() {
        this.ch &&
          this.gameRecorderManager &&
          (this.resumeGameRecorderManager(),
          this.gameRecorderManager.stop(),
          Laya.timer.clearAll(this));
      }
      pauseGameRecorderManager() {
        this.ch && this.gameRecorderManager && this.gameRecorderManager.pause();
      }
      resumeGameRecorderManager() {
        this.ch && this.gameRecorderManager && this.gameRecorderManager.resume();
      }
      recordClip() {
        this.ch &&
          this.gameRecorderManager &&
          this.gameRecorderManager.recordClip({
            timeRange: [120, 0],
            success: (e) => {
              this.clipIndexList.push(e.index);
            },
            fail(e) {},
          });
      }
      clipVideo() {
        this.ch &&
          this.gameRecorderManager &&
          ((this.recordTime = Math.floor((this.recordingEndTime - this.recordingBeginTime) / 1e3)),
          this.gameRecorderManager.clipVideo({
            path: this.recordResp.videoPath,
            clipRange: this.clipIndexList,
            success: (e) => {
              this.videoPath = e.videoPath;
            },
            fail(e) {},
          }));
      }
      recordShare(t = null) {
        this.ch
          ? 5 <= this.recordTime
            ? this.share(
                (e) => {
                  t && t(e);
                },
                "video",
                { videoPath: this.videoPath, withVideoId: !0 },
              )
            : this.showToast("录屏时间不足")
          : t && t(!0);
      }
      createBtnMoreGame(t, i, a) {
        if (this.ch) {
          var s = Laya.Browser.width / 640;
          let e = 450;
          ((e = Laya.Browser.width / Laya.Browser.height < 0.5 ? 550 : 450),
            (this.btnMoreGame = this.ch.createMoreGamesButton({
              type: "image",
              image: t,
              style: {
                left: 0,
                top: (e * s) / Laya.Browser.pixelRatio,
                width: (i * s) / Laya.Browser.pixelRatio,
                height: (a * s) / Laya.Browser.pixelRatio,
                lineHeight: 0,
                backgroundColor: "#00000000",
                textColor: "#00000000",
                textAlign: "center",
                fontSize: 16,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#00000000",
              },
              appLaunchOptions: [],
              onNavigateToMiniGame(e) {},
            })),
            this.btnMoreGame.onTap(() => {}));
        }
      }
      showBtnMoreGame() {
        this.ch && this.btnMoreGame && this.btnMoreGame.show();
      }
      showMoreGamesModal() {
        this.ch &&
          this.ch.showMoreGamesModal({
            appLaunchOptions: [],
            success(e) {},
            fail(e) {},
            onNavigateToMiniGame(e) {},
          });
      }
      hideBtnMoreGame() {
        this.ch && this.btnMoreGame && this.btnMoreGame.hide();
      }
      checkUpdate() {
        if (this.ch) {
          let t = this.ch.getUpdateManager();
          (t.onCheckForUpdate((e) => {}),
            t.onUpdateFailed(() => {
              this.showToast("新版本下载失败");
            }),
            t.onUpdateReady(() => {
              this.showModal("更新提示", "新版本已经准备好，是否重启应用？", !0, (e) => {
                e && t.applyUpdate();
              });
            }));
        }
      }
      setKeepScreenOn(e = !0) {
        this.ch && this.ch.setKeepScreenOn({ keepScreenOn: e, success(e) {}, fail(e) {} });
      }
      getVideoInfo() {
        this.ch &&
          this.ch.request({
            url: "https://gate.snssdk.com/developer/api/get_video_info",
            method: "POST",
            success: (e) => {},
          });
      }
      installShortcut(t = null) {
        this.ch && this.ch.addShortcut
          ? this.ch.addShortcut({
              success() {
                t && t(!0);
              },
              fail(e) {
                t && t(!1);
              },
            })
          : this.showToast("添加桌面失败");
      }
      hasShortcutInstalled(t = null) {
        this.ch && this.ch.checkShortcut
          ? this.ch.checkShortcut({
              success(e) {
                e.status.exist ? t && t(!0) : t && t(!1);
              },
              fail(e) {
                t && t(!1);
              },
            })
          : t && t(!0);
      }
      getOneShareData() {
        var e = new W.ShareDB();
        return ((e.id = 0), (e.img_url = ""), (e.title = c.Var._Param.TT.shareTitle), e);
      }
      requestSubscribeMessage(e) {
        this.ch &&
          this.ch.requestSubscribeMessage({
            tmplIds: e,
            success: (e) => {},
            fail: (e) => {},
            complete: (e) => {},
          });
      }
      requestFeedSubscribe(e, t) {
        this.ch &&
          this.ch.requestFeedSubscribe &&
          this.ch.requestFeedSubscribe({
            type: "play",
            scene: t,
            contentIDs: e,
            success(e) {},
            fail(e) {},
          });
      }
      storeFeedData(e, t) {
        this.ch &&
          this.ch.storeFeedData &&
          this.ch.storeFeedData({
            scene: t,
            contentID: e,
            leftValue: "timeStampMs",
            operator: ">=",
            rightValue: W.Time.getNow() + "",
            status: 1,
            extra: "extra",
            success(e) {},
            fail(e) {},
          });
      }
      reportScene() {
        this.ch &&
          this.ch.reportScene &&
          this.ch.reportScene({ sceneId: 7001, costTime: 350, success(e) {}, fail(e) {} });
      }
      setUserGroup() {
        this.ch && this.ch.setUserGroup({ groupId: "score_ball", success: (e) => {} });
      }
      getOpenContext() {
        this.ch && (this.openContext = this.ch.getOpenDataContext());
      }
      setUserCloudStorage(e, t = "score") {
        this.ch &&
          this.ch.setUserCloudStorage({
            KVDataList: [
              {
                key: t,
                value: JSON.stringify({
                  ttgame: { score: e, update_time: +new Date() },
                  progress: 10,
                }),
              },
            ],
            success: (e) => {},
            fail: (e) => {},
            complete: (e) => {},
          });
      }
      getUserInfo(t, i = null) {
        this.userInfo
          ? t && t(!1)
          : this.ch &&
            this.ch.getUserInfo({
              success: (e) => {
                ((this.userInfo = e.rawData), t && t(!0));
              },
              fail: (e) => {
                (t && t(!1), i && i());
              },
            });
      }
      postMessage(e, t) {
        this.ch && this.openContext.postMessage({ userInfo: this.userInfo, msgType: e, score: t });
      }
      setImRankData(e) {
        this.ch &&
          this.ch.setImRankData &&
          this.ch.setImRankData({
            dataType: 0,
            value: e + "",
            priority: 0,
            extra: "extra",
            success(e) {},
            fail(e) {},
          });
      }
      getImRankList(e = null, t, i) {
        this.ch && this.ch.getImRankList
          ? this.ch.getImRankList({
              relationType: "default",
              dataType: 0,
              rankType: "all",
              suffix: t,
              rankTitle: i,
              success(e) {},
              fail(e) {},
            })
          : e && e();
      }
      checkScene(t) {
        this.ch && this.ch.checkScene
          ? this.ch.checkScene({
              scene: "sidebar",
              success: (e) => {
                t && t(e.isExist);
              },
              fail: (e) => {
                t && t(!1);
              },
            })
          : t && t(!1);
      }
      navigateToScene(t) {
        this.ch &&
          this.ch.navigateToScene &&
          this.ch.navigateToScene({
            scene: "sidebar",
            success: (e) => {
              t && t();
            },
            fail: (e) => {},
          });
      }
      reportAnalytics(e, t) {
        this.ch && c.Var.show_dy_report && this.ch.reportAnalytics(e, t);
      }
      onMemoryWarning(e) {
        this.ch && this.ch.onMemoryWarning && this.ch.onMemoryWarning(e);
      }
      offMemoryWarning(e) {
        this.ch && this.ch.offMemoryWarning && this.ch.offMemoryWarning(e);
      }
      onError(e) {
        this.ch && this.ch.onError && this.ch.onError(e);
      }
      offError(e) {
        this.ch && this.ch.offError && this.ch.offError(e);
      }
      onUnhandledRejection(e) {
        this.ch && this.ch.onUnhandledRejection && this.ch.onUnhandledRejection(e);
      }
      getRealtimeLogManager(e = { syncToConsole: !1 }) {
        if (this.ch && this.ch.getRealtimeLogManager) return this.ch.getRealtimeLogManager(e);
      }
    }
    class Z extends e {
      get h() {
        return c.CH.UC;
      }
      post_default() {
        (this.addEventListener(), this.createVideoAd());
      }
      createVideoAd() {
        this.ch &&
          ((this.videoAd = this.ch.createRewardVideoAd()),
          this.videoAd.onLoad(() => {
            ((this.db.videoEnable = !0), this.videoAd.offLoad());
          }),
          this.videoAd.onError((e) => {
            this.db.videoEnable = !1;
          }),
          this.videoAd.load(),
          this.videoAd.onClose((e) => {
            e && e.isEnded
              ? this.videoCallback && this.videoCallback(n.onSuccess)
              : this.videoCallback && this.videoCallback(n.onFail);
          }));
      }
      showVideoAd(e = null) {
        this.ch &&
          this.videoAd &&
          ((this.videoCallback = e),
          this.videoAd
            .load()
            .then(() => {
              (this.videoAd.show(), this.videoCallback && this.videoCallback(n.onLoad));
            })
            .catch((e) => {
              (this.showToast("暂无广告，请稍后再试"),
                this.videoCallback && this.videoCallback(n.onError));
            }));
      }
      createBannerAd() {
        if (this.ch) {
          let e = this.refreshBanId();
          ((this.bannerAd = this.ch.createBannerAd({
            adUnitId: e,
            adIntervals: 30,
            style: { gravity: 7 },
          })),
            this.bannerAd.onLoad(() => {
              this.bannerAd.offLoad();
            }),
            this.bannerAd.onResize(() => {
              this.bannerAd.offResize();
            }),
            this.bannerAd.onError((e) => {}),
            this.hideBannerAd());
        }
      }
      refreshBanId() {
        return (
          this.banIndex++,
          this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0),
          this.bannerId[this.banIndex]
        );
      }
      destroyBannerAd() {
        this.bannerAd && (this.bannerAd.destroy(), (this.bannerAd = null));
      }
      resetBannerAd() {
        this.ch && (this.destroyBannerAd(), this.createBannerAd());
      }
      showBannerAd() {
        this.ch && this.bannerAd && this.bannerAd.show();
      }
      hideBannerAd() {
        this.ch && this.bannerAd && this.bannerAd.hide();
      }
      createInterstitialAd() {
        this.ch;
      }
      showInterstitialAd() {
        this.ch;
      }
      shareAppMessage() {
        this.ch &&
          W.OperationManager.shareDataLoad(() => {
            var e = W.OperationManager.getOneShareData(),
              t = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2));
            this.ch.shareAppMessage({
              title: e.title,
              imageUrl: e.img_url,
              query: "&sn=" + t + "&share_id=" + e.id,
              success: (e) => {},
              fail: (e) => {},
            });
          });
      }
      reportUserAction() {
        this.ch &&
          this.ch.reportUserAction({
            scene: "xxx",
            action: "PLAY",
            score: "100",
            success: function (e) {},
            fail: function (e) {},
          });
      }
      addEventListener() {
        this.ch &&
          document.addEventListener("visibilitychange", (e) => {
            (document.visibilityState, document.visibilityState);
          });
      }
      showToast(e, t = 0, i = 2e3) {
        this.ch && this.ch.showToast({ content: e, duration: i });
      }
    }
    class $ extends e {
      constructor() {
        (super(...arguments),
          (this.adList = []),
          (this.nativeId_time = 0),
          (this.customAd_time = 0),
          (this.is_hide_portal_ad = !1),
          (this.interstitial_time = 0),
          (this.isShortcut = !0),
          (this.create_shortcut_time = 0),
          (this.bannerAdHeight = 200),
          (this.customIdIndex = 0),
          (this.customAds_time = [0, 0]),
          (this.customAds_adList = []),
          (this.showNewNativeAd = !0),
          (this.show_vibrate_time = 0));
      }
      get h() {
        return c.CH.VIVO;
      }
      post_default() {
        (this.getSystem(),
          this.onShowAlways(),
          this.createVideoAd(),
          this.createNativeAd(),
          this.onHide(),
          (this.Global.go_game_time = Laya.Browser.now()));
      }
      createVideoAd() {
        this.ch &&
          this.videoId &&
          ((this.videoAd = qg.createRewardedVideoAd({ posId: this.videoId })),
          this.videoAd.onLoad(() => {
            ((this.db.videoEnable = !0), this.videoAd.offLoad());
          }),
          this.videoAd.onError((e) => {
            this.db.videoEnable = !1;
          }),
          this.videoAd.onClose((e) => {
            ((this.isShortcut = !0),
              e && e.isEnded
                ? this.videoCallback && this.videoCallback(n.onSuccess)
                : this.videoCallback && this.videoCallback(n.onFail),
              (this.Global.sound_switch || this.Global.voice_switch) &&
                (Laya.SoundManager.muted = !1));
          }));
      }
      showVideoAd(e = null, t = !0) {
        var i;
        this.ch && this.videoAd
          ? ((this.videoCallback = e),
            (i = this.videoAd.load()) &&
              i.catch((e) => {
                (this.videoCallback && this.videoCallback(n.onError),
                  t && this.showToast("广告拉取繁忙，请稍后再试"));
              }),
            this.videoAd.offLoad(),
            this.videoAd.onLoad(() => {
              var e = this.videoAd.show();
              (e &&
                e
                  .then(() => {
                    (this.videoCallback && this.videoCallback(n.onLoad),
                      (this.isShortcut = !1),
                      (this.Global.sound_switch || this.Global.voice_switch) &&
                        (Laya.SoundManager.muted = !0));
                  })
                  .catch((e) => {
                    (this.videoCallback && this.videoCallback(n.onError),
                      t && this.showToast("广告拉取繁忙，请稍后再试"),
                      (this.isShortcut = !0));
                  }),
                this.videoAd.offLoad());
            }))
          : e && !this.ch && e(!0);
      }
      createBannerAd(e) {
        var t;
        this.ch &&
          ((this.bannerAdHeight = 200), (t = this.refreshBanId())) &&
          ((e = e || c.Var._Param.Vivo.BannerAdStyle(this.db.screenWidth, this.db.screenHeight)),
          (this.bannerAd = qg.createBannerAd({ posId: t, style: e })),
          this.bannerAd.onSize((e) => {
            ((this.bannerAdHeight = e.height), this.bannerAd.offSize());
          }),
          this.bannerAd.onError((e) => {}),
          this.hideBannerAd());
      }
      refreshBanId() {
        return (
          this.banIndex++,
          this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0),
          this.bannerId[this.banIndex]
        );
      }
      destroyBannerAd() {
        this.bannerAd && this.bannerAd.destroy();
      }
      resetBannerAd() {
        this.ch && (this.destroyBannerAd(), this.createBannerAd());
      }
      showBannerAd() {
        this.ch &&
          this.bannerAd &&
          this.SwitchM0.game_banner &&
          this.bannerAd
            .show()
            .then(() => {})
            .catch((e) => {});
      }
      hideBannerAd() {
        this.bannerAd && this.bannerAd.hide();
      }
      createInterstitialAd() {
        this.ch &&
          this.insertId &&
          ((this.insertAd = this.ch.createInterstitialAd({ posId: this.insertId })),
          this.insertAd
            .show()
            .then(() => {})
            .catch((e) => {}));
      }
      showInterstitialAd(t, e = !1, i) {
        if (this.ch && this.insertId) {
          if (!e) {
            if (
              Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
              Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            )
              return void (t && t(!1));
            this.interstitial_time = Laya.Browser.now();
          }
          e = this.ch.createInterstitialAd({ posId: this.insertId });
          (e.onError((e) => {}),
            e
              .show()
              .then(() => {
                t && t(!0);
              })
              .catch((e) => {
                t && t(!1);
              }),
            e.onClose(() => {
              (t && t(!1), i && i());
            }),
            (this.insertAd = e));
        }
      }
      createNativeAd(t = null) {
        !this.ch ||
          !this.nativeId[0] ||
          Laya.Browser.now() - this.nativeId_time < 2e4 ||
          ((this.nativeId_time = Laya.Browser.now()),
          (this.nativeAd = this.ch.createNativeAd({ posId: this.nativeId[0] })),
          this.nativeAd.onLoad((e) => {
            ((this.adContent = e.adList[0]), t && t(e.adList[0]), this.nativeAd.offLoad());
          }),
          this.nativeAd.onError((e) => {
            this.nativeAd.offError();
          }),
          this.nativeAd.load());
      }
      destroyNativeAd() {
        this.ch &&
          this.nativeAd &&
          (this.nativeAd.destroy(), (this.nativeAd = null), (this.adContent = null));
      }
      clickNativeAd() {
        this.ch &&
          this.nativeAd &&
          this.adContent &&
          (this.nativeAd.reportAdShow({ adId: this.adContent.adId + "" }),
          this.nativeAd.reportAdClick({ adId: this.adContent.adId + "" }));
      }
      showNativeAd() {
        this.ch &&
          this.nativeAd &&
          this.adContent &&
          this.nativeAd.reportAdShow({ adId: this.adContent.adId + "" });
      }
      createCustomAd(e, t, i, a = 0, s = !0, n = null, r) {
        if (this.ch && this.customId[i]) {
          if (!s) {
            if (
              Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
              Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            )
              return void (n && n(2));
            this.interstitial_time = Laya.Browser.now();
          }
          ((this.customIdIndex = i),
            (this.customAd_time = Laya.Browser.now()),
            Laya.Browser.width / Laya.Browser.height < 0.5 && (t += a),
            this.customAd && this.customAd.destroy(),
            (this.customAd =
              0 == e && 0 == t
                ? this.ch.createCustomAd({ posId: this.customId[i] })
                : this.ch.createCustomAd({ posId: this.customId[i], style: { left: e, top: t } })),
            this.customAd.onLoad(() => {}),
            this.showCustomAd(n),
            this.customAd.onError((e) => {
              n && n(!1);
            }));
        }
      }
      showCustomAd(t = null, e, i) {
        this.customAd &&
          (this.customAd
            .show()
            .then(() => {
              t && t(1);
            })
            .catch((e) => {
              t && t(0);
            }),
          this.customAd.offClose(),
          this.customAd.onClose(() => {
            (t && t(0), i && i());
          }));
      }
      hideCustomAd() {
        this.customAd && this.customAd.hide();
      }
      createBoxBannerAd() {
        this.ch &&
          this.boxBannerAdId &&
          "" != this.boxBannerAdId &&
          this.ch.createBoxBannerAd &&
          (this.destroyBoxBannerAd(),
          (this.boxBannerAd = this.ch.createBoxBannerAd({ posId: this.boxBannerAdId })),
          this.boxBannerAd.onError((e) => {
            this.boxBannerAd.offError();
          }));
      }
      showBoxBannerAd(t = null) {
        this.boxBannerAd
          ? this.boxBannerAd
              .show()
              .then(() => {
                t && t(!0);
              })
              .catch(function (e) {
                t && t(!1);
              })
          : t && t(!1);
      }
      hideBoxBannerAd() {
        this.boxBannerAd &&
          this.boxBannerAd
            .hide()
            .then(function () {})
            .catch(function (e) {});
      }
      destroyBoxBannerAd() {
        null != this.boxBannerAd && (this.boxBannerAd.destroy(), (this.boxBannerAd = null));
      }
      createBoxPortalAd() {
        this.ch &&
          this.boxPortalAdId &&
          "" != this.boxPortalAdId &&
          this.ch.createBoxPortalAd &&
          ((this.boxPortalAd = this.ch.createBoxPortalAd({
            posId: this.boxPortalAdId,
            image: "",
            marginTop: c.Var._Global.pxTodb(c.Var._Param.Vivo.BoxPortalAdMarginTop),
          })),
          this.boxPortalAd.onLoad(function () {}),
          this.boxPortalAd.onError((e) => {}),
          this.boxPortalAd.onClose(() => {
            this.boxPortalAd.isDestroyed ||
              Laya.timer.once(2e3, this, () => {
                this.is_hide_portal_ad || this.showBoxPortalAd();
              });
          }),
          this.boxPortalAd.onShow((e) => {}));
      }
      showBoxPortalAd(e = 0) {
        ((this.is_hide_portal_ad = !1),
          this.boxPortalAd &&
            this.boxPortalAd
              .show()
              .then(() => {})
              .catch((e) => {}));
      }
      hideBoxPortalAd() {
        ((this.is_hide_portal_ad = !0),
          this.boxPortalAd &&
            this.boxPortalAd
              .hide()
              .then(function () {})
              .catch(function (e) {}));
      }
      destroyBoxPortalAd() {
        this.boxPortalAd &&
          (this.hideBoxPortalAd(),
          (this.boxPortalAd.isDestroyed = !0),
          this.boxPortalAd.destroy(),
          (this.boxPortalAd = null));
      }
      installShortcut(t = null) {
        var e = this.ch;
        this.ch &&
          ((this.create_shortcut_time = Laya.Browser.now()),
          e.installShortcut({
            success: function () {
              t && t(!0);
            },
            fail: function (e) {
              t && t(!1);
            },
            complete: function () {},
          }));
      }
      hasShortcutInstalled(t = null) {
        this.ch;
        this.ch &&
          this.ch.hasShortcutInstalled({
            success: function (e) {
              t && t(e);
            },
            fail: function (e) {
              t && t(!1);
            },
          });
      }
      share(i = null) {
        this.ch &&
          this.ch.share({
            success: () => {
              (i && i(!0), this.showToast("分享成功"));
            },
            fail: (e, t) => {
              (i && i(!1), this.showToast("分享失败"));
            },
            cancel: () => {
              (i && i(!1), this.showToast("取消分享"));
            },
            complete: function () {},
          });
      }
      gotoOther(e, t, i = null) {
        this.ch &&
          t &&
          this.ch.navigateToMiniGame({
            pkgName: t,
            success: function () {
              i && i(!0);
            },
            fail: function (e) {
              i && i(!1);
            },
          });
      }
      showToast(e, t = "none", i = 2e3) {
        this.ch && this.ch.showToast({ message: e, icon: t, duration: i });
      }
      setKeepScreenOn(e = !0) {
        this.ch && this.ch.setKeepScreenOn({ keepScreenOn: e, success(e) {}, fail(e) {} });
      }
      exitApplication() {
        this.ch &&
          this.ch.exitApplication({
            success: function () {},
            fail: function () {},
            complete: function () {},
          });
      }
      createCustomAds(t, e, i, a, s) {
        this.ch &&
          this.ch.createNewNativeAd &&
          this.showNewNativeAd &&
          (!this.ch ||
            !this.newCustomId[t] ||
            (!s && Laya.Browser.now() - this.customAds_time[t] < 1e4) ||
            ((this.customIdIndex = t),
            (this.customAds_time[t] = Laya.Browser.now()),
            this.customAds[t] && this.customAds[t].destroy(),
            (this.customAds[t] = this.ch.createNewNativeAd({ posId: this.newCustomId[t] })),
            this.customAds[t].onLoad((e) => {
              this.customAds_adList[t] = e;
            }),
            i && this.showCustomAds(t, a),
            this.customAds[t].onError((e) => {
              a && a(!1);
            })));
      }
      showCustomAds(e, t, i, a) {
        if (
          this.ch &&
          this.ch.createNewNativeAd &&
          this.showNewNativeAd &&
          this.customAds[e] &&
          this.customAds_adList.length &&
          this.customAds_adList[e]
        ) {
          if (!i) {
            if (
              Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
              Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            )
              return;
            this.interstitial_time = Laya.Browser.now();
          }
          c.Var._Param.Vivo.CustomAdsPos &&
            ((i = c.Var._Param.Vivo.CustomAdsPos(this.db.screenWidth, this.db.screenHeight, e)),
            this.customAds[e]
              .show({
                adId: this.customAds_adList[e].adList[0].adId,
                formType: this.customAds_adList[e].adList[0].formType[0],
                style: i,
              })
              .then(() => {
                t && t(!0);
              })
              .catch((e) => {
                t && t(!1);
              }),
            this.customAds[e].offClose(),
            this.customAds[e].onClose(() => {
              (t && t(!1), a && a());
            }));
        }
      }
      hideCustomAds(e) {
        this.customAds[e] && this.customAds[e].hide();
      }
      getEnterOptionsSync() {
        var e, t;
        this.ch &&
          this.ch.getEnterOptionsSync &&
          (t = this.db.launchOption = this.ch.getEnterOptionsSync()) &&
          (t.referrerInfo || (t.referrerInfo = {}),
          (this.db.sourceScene = this.db.launchOption.scene),
          (this.db.sourceAppId =
            this.db.launchOption.query.source_appid || this.db.launchOption.referrerInfo.appId),
          this.db.launchOption.query &&
            this.db.launchOption.query.ucode &&
            (this.Global.share_ucode = this.db.launchOption.query.ucode),
          t) &&
          t.query &&
          "ad" == t.query.type &&
          ((e = t.referrerInfo.extraData), t.referrerInfo.type, e) &&
          ((t = e.vivo_type), (this.Global.ad_video_num = e.vivo_video_num), 1 == t) &&
          ((this.Global.is_vivo_ad = !0), this.showLaunchVideo());
      }
      vibrateShort(e = 0) {
        Laya.Browser.now() - this.show_vibrate_time < 50 ||
          (this.ch &&
            this.Global.shake_switch &&
            (this.ch.vibrateShort(), (this.show_vibrate_time = Laya.Browser.now())));
      }
      showLaunchVideo() {
        this.Global.is_vivo_ad &&
          0 < this.Global.ad_video_num &&
          (this.Global.ad_video_num--,
          this.showVideoAd((e) => {
            (1 != e && 0 != e && -1 != e) || this.showLaunchVideo();
          }, !1));
      }
    }
    class ee extends e {
      get h() {
        return c.CH.WEB_360;
      }
      showShopWindow() {
        var e;
        this.ch &&
          ((e = c.Var._Param.Web360.ShopWindowSize()),
          this.ch.MINIGAMEAD.renderShopWindow({
            showid: this.shopWindowId,
            adDomId: c.Var._Param.Web360.shopWindowDomId,
            width: e.width,
            height: e.height,
            closeTimer: e.closeTimer,
            onSuccess: () => {},
            onFail: () => {},
            onClose: () => {},
          }));
      }
      showInfoFlow() {
        var e;
        this.ch &&
          ((e = c.Var._Param.Web360.InfoFlowSize()),
          this.ch.MINIGAMEAD.renderInfoFlow({
            showid: this.infoFlowId,
            adDomId: c.Var._Param.Web360.infoFlowDomId,
            width: e.width,
            onSuccess: () => {},
            onFail: () => {},
            onClose: () => {},
          }));
      }
      createVideoAd() {
        this.ch &&
          ((this.videoAd = this.ch.REWARD_VIDEO_AD.createRewardedVideoAd({
            adUnitId: this.videoId,
          })),
          this.videoAd.onLoad(() => {}),
          this.videoAd.onError((e) => {}),
          this.videoAd.onClose((e) => {
            e
              ? this.videoCallback && this.videoCallback(e.isEnded ? n.onSuccess : n.onFail)
              : this.videoCallback && this.videoCallback(n.onFail);
          }));
      }
      showVideoAd(e) {
        this.videoAd &&
          ((this.videoCallback = e),
          this.videoAd
            .show()
            .then(() => {
              this.videoCallback && this.videoCallback(n.onLoad);
            })
            .catch(() => {
              this.videoAd
                .load()
                .then(() => {
                  this.videoAd.show();
                })
                .catch((e) => {
                  this.videoCallback && this.videoCallback(n.onError);
                });
            }));
      }
    }
    class te extends e {
      get h() {
        return c.CH.WEB_4399;
      }
      post_default() {
        (this.onShowAlways(), this.onHide());
      }
      share(e) {
        this.ch ? (this.ch.share(), e(!0)) : e(!1);
      }
      showVideoAd(e) {
        this.ch
          ? ((this.videoCallback = e),
            this.ch.playAd((e) => {
              1e4 === e.code
                ? (this.videoCallback && this.videoCallback(n.onLoad),
                  (Laya.SoundManager.muted = !0))
                : (10001 === e.code
                    ? this.videoCallback && this.videoCallback(n.onSuccess)
                    : this.videoCallback && this.videoCallback(n.onError),
                  this.Global.sound_switch && (Laya.SoundManager.muted = !1));
            }))
          : e(0);
      }
    }
    class ie extends e {
      constructor() {
        (super(...arguments),
          (this.is_game = !1),
          (this.share_start_time = 0),
          (this.share_end_time = 0),
          (this.gameClubButton = null),
          (this.gameClubCallback = null),
          (this.gameClub_num = 0));
      }
      get h() {
        return c.CH.WX_CC;
      }
      showVideoAd(t = null) {
        wxsdk.GetAdById("Video").then((e) => {
          ("Success" == e && t && t(!0), "Fail" == e && t && t(!1), "Error" == e && t && t(!1));
        });
      }
      showToast(e, t = "none", i = 1e3) {
        this.ch && this.ch.showToast({ title: e, icon: t, duration: i });
      }
      getSystem() {
        var e;
        this.ch &&
          ((e = this.db.systemInfo = this.ch.getSystemInfoSync()),
          (this.db.platform = e.platform),
          (this.db.appName = this.db.systemInfo.appName),
          (this.db.screenWidth = e.screenWidth),
          (this.db.screenHeight = e.screenHeight));
      }
      getLaunchOptions() {
        var e;
        this.ch &&
          (e = this.db.launchOption = this.ch.getLaunchOptionsSync()) &&
          (e.referrerInfo || (e.referrerInfo = {}),
          (this.db.sourceScene = this.db.launchOption.scene),
          (this.db.sourceAppId =
            this.db.launchOption.query.source_appid || this.db.launchOption.referrerInfo.appId));
      }
      onShowAlways() {
        this.ch &&
          this.ch.onShow((e) => {
            c.Var.last_touch = Laya.Browser.now();
          });
      }
      onHide(e = null) {
        this.ch &&
          this.ch.onHide(() => {
            (W.ICache.setLastLeavlTime(),
              W.ICache.saveData(),
              (c.Var.last_touch = Laya.Browser.now()),
              e && e());
          });
      }
      showShareMenu() {
        this.ch &&
          (this.setShareAppMessage(),
          this.ch.showShareMenu({
            withShareTicket: !1,
            menus: ["shareAppMessage", "shareTimeline"],
          }));
      }
      setShareAppMessage() {
        if (this.ch) {
          let e = this.getOneShareData();
          this.ch.onShareAppMessage(() => ({
            title: e.title,
            imageUrl: e.img_url,
            success: (e) => {},
            fail: (e) => {},
          }));
        }
      }
      share(i = null) {
        var e, t;
        this.ch &&
          ((this.share_start_time = Laya.Browser.now()),
          this.onShow((e) => {
            this.share_end_time = Laya.Browser.now();
            var t = this.share_end_time - this.share_start_time;
            3e3 <= t && t <= 5e3 ? i && i(!0) : i && i(!1);
          }),
          (e = this.getOneShareData()),
          (t = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2))),
          this.ch.shareAppMessage({
            title: e.title,
            imageUrl: e.img_url,
            query: "&sn=" + t + "&share_id=" + e.id,
          }));
      }
      getOneShareData() {
        var e = new W.ShareDB();
        return (
          (e.id = 0),
          (e.img_url = c.Var._Param.Wx.img_url),
          (e.title = c.Var._Param.Wx.shareTitle),
          e
        );
      }
      createGameClubButton(e, t = "", i = !1) {
        this.ch &&
          !this.gameClubButton &&
          ((e = {
            left: e.left ? c.Var._Global.pxTodb(e.left) : 0,
            top: e.top ? c.Var._Global.pxTodb(e.top) : 0,
            width: e.width ? c.Var._Global.pxTodb(e.width) : 0,
            height: e.height ? c.Var._Global.pxTodb(e.height) : 0,
          }),
          (t = this.ch.createGameClubButton({ type: "image", image: t, style: e })).onTap((e) => {
            (i &&
              (this.gameClub_num++, 2 <= this.gameClub_num) &&
              0 == o.get(r.game_quan) &&
              o.set(r.game_quan, 1),
              this.gameClubCallback && this.gameClubCallback());
          }),
          (this.gameClubButton = t));
      }
      showGameClubButton(e) {
        this.gameClubButton && ((this.gameClubCallback = e), this.gameClubButton.show());
      }
      hideGameClubButton() {
        this.gameClubButton && this.gameClubButton.hide();
      }
      destroyGameClubButton() {
        this.gameClubButton && (this.gameClubButton.destroy(), (this.gameClubButton = null));
      }
      getGameClubData(t) {
        this.ch &&
          this.ch.getGameClubData({
            dataTypeList: [{ type: 1 }],
            success: (e) => {
              t && t(e);
            },
            fail: (e) => {},
            complete: (e) => {},
          });
      }
    }
    var ae = function (e, r, o, h) {
      return new (o = o || Promise)(function (i, t) {
        function a(e) {
          try {
            n(h.next(e));
          } catch (e) {
            t(e);
          }
        }
        function s(e) {
          try {
            n(h.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function n(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value) instanceof o
                ? t
                : new o(function (e) {
                    e(t);
                  })
              ).then(a, s);
        }
        n((h = h.apply(e, r || [])).next());
      });
    };
    let se = { gid: "wx_jlyq", v: "1.0.0" };
    class m {
      static initDyzt() {
        if (c.Var.show_wxjlyq && Laya.Browser.window.wx) {
          var t = Laya.Browser.window.wx.getLaunchOptionsSync().query;
          if (t) {
            let e = t.channel;
            t = { channel: (e = e || ""), query: t };
            JSON.stringify(t);
          }
          (m.reportNextDayOpen(),
            o.get(r.is_old_user) ||
              ((l.is_new_user = !0),
              o.set(r.is_old_user, 1),
              o.set(r.active_time, W.Time.getNow()),
              m.dyReport(m.event_type.active)));
        }
      }
      static dyReport(t) {
        if (c.Var.show_wxjlyq && Laya.Browser.window.wx) {
          var i = Laya.Browser.window.wx.getLaunchOptionsSync().query;
          let e = i && i.clickid;
          (e ? (o.set(r.clickId, e), W.ICache.saveData()) : (e = o.get(r.clickId)),
            e
              ? (i && i.channel,
                (i = {
                  event_type: t,
                  context: { ad: { callback: e } },
                  timestamp: Laya.Browser.now(),
                }),
                ne.dyReport(i))
              : (e = ""));
        }
      }
      static reportNextDayOpen() {
        W.ICache.checkIsNewDay() && o.get(r.is_old_user) && m.dyReport(m.event_type.next_day_open);
      }
      static gameAddReport() {
        (o.add(r.click_ad_num),
          o.get(r.click_ad_num) == c.Var._SwitchM0.game_addiction_num &&
            (m.dyReport(m.event_type.game_addiction), o.set(r.click_ad_num, 0)),
          W.ICache.saveData());
      }
      static isToday() {
        var e, t;
        return (
          !!o.get(r.active_time) &&
          ((e = new Date(o.get(r.active_time))),
          (t = new Date()),
          e.getFullYear() === t.getFullYear()) &&
          e.getMonth() === t.getMonth() &&
          e.getDate() === t.getDate()
        );
      }
    }
    m.event_type = {
      active: "active",
      active_register: "active_register",
      game_addiction: "game_addiction",
      lt_roi: "lt_roi",
      next_day_open: "next_day_open",
    };
    let ne = class B {
      static login(t, i) {
        return ae(this, void 0, void 0, function* () {
          (t = null == t ? {} : t).gid = se.gid;
          let e = "";
          return (
            Laya.Browser.window.wx &&
              (e = Laya.Browser.window.wx.getLaunchOptionsSync().scene.toString()),
            (t.scene = e),
            B.post("login", { data: t, success: i }, null)
          );
        });
      }
      static post(e, i, a = !0, s = "post") {
        return ae(this, void 0, void 0, function* () {
          var e = i.data;
          if (void 0 === e) return !1;
          let t = new XMLHttpRequest();
          (a ? t.open(s, this.api_url, a) : t.open(s, this.api_url),
            t.setRequestHeader("content-type", "application/json"),
            t.send(JSON.stringify(e)),
            (t.onreadystatechange = function () {
              if (200 === t.status && 4 === t.readyState) {
                var e = JSON.parse(t.responseText);
                if (void 0 !== i.success) return i.success(e);
              } else if (200 !== t.status) return (i.error, i.error());
            }));
        });
      }
      static dyReport(e) {
        return B.post("dyReport", { data: e });
      }
    };
    ((ne.loginInfo = null), (ne.api_url = "https://analytics.oceanengine.com/api/v2/conversion"));
    const re = "https://api1.game.chot.cn/";
    let i = { slide: {}, customise: {}, switch: {}, advertisement: {} };
    class oe {
      register_callback(e, t) {
        return this.PlatformSdk.register_callback(e, t);
      }
      register_init_fail_callback(e, t) {
        return (
          this.PlatformSdk.from_default(e),
          this.PlatformSdk.register_callback("init_fail_callback", t)
        );
      }
      jump_out(e, t = (e) => {}) {
        return this.PlatformSdk.jumpOut(e, t);
      }
      init_app(e) {
        return this.PlatformSdk.initApp(e);
      }
      on_show(e = (e) => {}) {
        return this.PlatformSdk.onShow(e);
      }
      active_dm(e, t = (e) => {}) {
        return this.PlatformSdk.activeDm(e, t);
      }
      user_count(e, t, i = (e) => {}) {
        return this.PlatformSdk.userCount(e, t, i);
      }
      get_customise() {
        var e = this.PlatformSdk.get_customise();
        if (0 < e.length) {
          let t = [];
          return (
            e.forEach((e) => {
              (void 0 !== e.type &&
                void 0 !== e.value &&
                3 === e.type &&
                (e.value = e.value.replace(/\s*/g, "").split(",")),
                t.push(e));
            }),
            t
          );
        }
        return [];
      }
      get_slide() {
        return this.PlatformSdk.get_slide();
      }
      get_token() {
        return this.PlatformSdk.get_token();
      }
      get_switch() {
        return this.PlatformSdk.get_switch();
      }
      get_ucode() {
        return this.PlatformSdk.get_ucode();
      }
      get_userInfo() {
        return this.PlatformSdk.get_userInfo();
      }
      get_statistic() {
        return this.PlatformSdk.getStatistic();
      }
      init_game(e) {
        return this.PlatformSdk.init_game(e);
      }
      update_level_info(e, t, i, a, s = "level") {
        return this.PlatformSdk.update_level_info(s, e, t, i, a);
      }
      update_rank_info(e, t, i, a, s) {
        return this.PlatformSdk.update_level_info(e, t, i, a, s);
      }
      get_world_rank(e, t = "level") {
        return this.PlatformSdk.get_world_rank(e, t);
      }
      append_share_info(e, t = null) {
        return this.PlatformSdk.appendShare(e, t);
      }
      get_share_info(e = null) {
        return this.PlatformSdk.getShareInfo(e);
      }
      get_shared_rewards(e, t = null) {
        return this.PlatformSdk.getSharedRewards(e, t);
      }
      explain_platform_data(e, t, i) {
        return this.PlatformSdk.explain_platform_data(e, t, i);
      }
      constructor(e) {
        switch (((this.PlatformObj = e), new he().get_alias())) {
          case c.Alias.oppo:
            this.PlatformSdk = new be(this.PlatformObj);
            break;
          case c.Alias.huawei:
            this.PlatformSdk = new ve(this.PlatformObj);
            break;
          case c.Alias.vivo:
            this.PlatformSdk = new pe(this.PlatformObj);
            break;
          case c.Alias.toutiao:
            this.PlatformSdk = new me(this.PlatformObj);
            break;
          case c.Alias.douyin:
            this.PlatformSdk = new we(this.PlatformObj);
            break;
          case c.Alias.wx:
            this.PlatformSdk = new _e(this.PlatformObj);
            break;
          case c.Alias.qq:
            this.PlatformSdk = new ge(this.PlatformObj);
            break;
          case c.Alias.meizu:
            this.PlatformSdk = new Ae(this.PlatformObj);
            break;
          case c.Alias.oppoapp:
            this.PlatformSdk = new Ce(this.PlatformObj);
            break;
          case c.Alias.vivoapp:
            this.PlatformSdk = new fe(this.PlatformObj);
            break;
          case c.Alias.kuaishou:
            this.PlatformSdk = new Se(this.PlatformObj);
            break;
          case c.Alias.twothreethree:
          case c.Alias.bilibili:
          case c.Alias.alipay:
            this.PlatformSdk = new ye(this.PlatformObj);
            break;
          case c.Alias.honor:
            this.PlatformSdk = new Ie(this.PlatformObj);
            break;
          case c.Alias.jd:
            this.PlatformSdk = new Ve(this.PlatformObj);
        }
      }
      get_user_data(e) {
        return this.PlatformSdk.get_user_data(null, e);
      }
      update_user_data(e, t) {
        this.PlatformSdk.update_user_data(e, t);
      }
      subscribe_game(e = null) {
        this.PlatformSdk.subscribeGame(e);
      }
      subscribeGame(e = null) {
        this.PlatformSdk.subscribeGame(e);
      }
      report_game_data(e, t) {
        this.PlatformSdk.report_game_data(e, t);
      }
    }
    class he {
      get_apiurl() {
        return c.Var._Param.YW.API_URL;
      }
      get_appid() {
        return c.Var._Param.YW.APPID;
      }
      get_game_version() {
        return c.Var._Param.YW.GAME_VERSION;
      }
      get_version() {
        return c.Var._Param.YW.VERSION;
      }
      get_alias() {
        return c.Var._Param.YW.ALIAS;
      }
      get_debug() {
        return c.Var._Param.YW.DEBUG;
      }
      get_input_cache() {
        return !!c.Var._Param.YW.INPUT_CACHE;
      }
      get_retry_url() {
        return re;
      }
    }
    class w {
      from_cache() {
        return ((this._from_cache = !0), this);
      }
      from_default(e) {
        return (this.init_server_data(e), this);
      }
      constructor(e) {
        ((this.init_status = 1),
          (this.input_cache = !1),
          (this._from_cache = !1),
          (this.userInfo = {}),
          (this.PlatformObj = e),
          (this.SysConfig = new he()),
          (this.Storage = new ce("", this.PlatformObj)),
          (this.appid = this.SysConfig.get_appid()),
          (this.game_version = this.SysConfig.get_game_version()),
          (this.alias = this.SysConfig.get_alias()),
          (this.api_url = this.SysConfig.get_apiurl()),
          (this.debug = this.SysConfig.get_debug()),
          (this.version = this.SysConfig.get_version()),
          (this.input_cache = this.SysConfig.get_input_cache()),
          (this.__callback = {}));
      }
      getInitStatus() {
        return this.init_status;
      }
      register_callback(e, t) {
        this.__callback[e] = t;
      }
      run_callback(e, t) {
        "function" == typeof this.__callback[e] && this.__callback[e](t);
      }
      get_customise() {
        return void 0 !== this.Storage.get("server_init_customise") &&
          this.Storage.get("server_init_customise")
          ? this.Storage.get("server_init_customise")
          : i.customise;
      }
      get_ucode() {
        try {
          return void 0 !== this.Storage.get("server_user_ucode", !0) &&
            this.Storage.get("server_user_ucode", !0)
            ? this.Storage.get("server_user_ucode", !0)
            : "";
        } catch (e) {
          return "";
        }
      }
      get_userInfo() {
        return this.userInfo;
      }
      get_advertisement() {
        return void 0 !== this.Storage.get("server_init_advertisement") &&
          this.Storage.get("server_init_advertisement")
          ? this.Storage.get("server_init_advertisement")
          : i.advertisement;
      }
      get_slide() {
        return void 0 !== this.Storage.get("server_init_slide") &&
          this.Storage.get("server_init_slide")
          ? this.Storage.get("server_init_slide")
          : i.slide;
      }
      get_switch() {
        return void 0 !== this.Storage.get("server_init_switch") &&
          this.Storage.get("server_init_switch")
          ? this.Storage.get("server_init_switch")
          : i.switch;
      }
      get_token() {
        return void 0 !== this.Storage.get("server_init_token", !0) &&
          this.Storage.get("server_init_token", !0)
          ? this.Storage.get("server_init_token", !0)
          : "";
      }
      explain_platform_data(e, t, i) {
        e = this.build_data("user.explain_platform_data", { iv: e, encryptedData: t });
        this._ajax({
          url: re,
          data: e,
          success: (e) => {
            1 == e.code ? i && i(e) : this.console_log("解释平台数据失败");
          },
          error: () => {
            this.console_log("解释平台数据失败");
          },
        });
      }
      update_user_data(e, t) {
        var i = JSON.stringify(e),
          i = de.encrypt(i),
          i = this.build_data("user.update_user_data", { user_data: i });
        (this.Storage.set("server_init_user_data", e),
          this._ajax({
            data: i,
            success: (e) => {
              null != t && t(e);
            },
            error: () => {},
          }));
      }
      get_user_data(e, i) {
        var t = this.build_data("user.get_user_data", {});
        this._ajax({
          data: t,
          success: (e) => {
            try {
              var t;
              1 == e.code &&
                null != i &&
                ((t = JSON.parse(de.decrypt(e.data.user_data))),
                this.Storage.set("server_init_user_data", t),
                i(t));
            } catch (e) {}
          },
          error: () => {},
        });
      }
      getStatistic() {}
      appendShare(t, i = null) {
        this.console_log("执行appendShare方法");
        const a = "share_local_data";
        let s = this.Storage.get(a);
        0 < s.indexOf(t)
          ? this.console_log("分享记录已存在")
          : this._ajax({
              data: this.build_data("share.append_share", { sharer: t }),
              success: (e) => {
                (null != i && i(e), s.push(t), this.Storage.set(a, s));
              },
              error: () => {},
            });
      }
      getShareInfo(t = null) {
        this._ajax({
          data: this.build_data("share.get_share_info", {}),
          success: (e) => {
            t(e);
          },
          error: () => {},
        });
      }
      getSharedRewards(e, t = null) {
        this._ajax({
          data: this.build_data("share.get_shared_rewards", { count: e }),
          success: (e) => {
            t(e);
          },
          error: () => {},
        });
      }
      subscribeGame(t = null) {
        this._ajax({
          data: this.build_data("user.subscribe_game", { count: 1 }),
          success: (e) => {
            t && t(e);
          },
          error: () => {},
        });
      }
      report_game_data(e, t = null) {
        e = this.build_data("user.report_game_data", { report: JSON.stringify(e) });
        (this.console_log("上报的数据是：", e),
          this._ajax({
            data: e,
            success: (e) => {
              t && t(e);
            },
            error: () => {
              this.console_log("上报游戏数据失败");
            },
          }));
      }
      initApp(i) {
        this.console_log("开始初始化应用");
        let a = this,
          s = a.getLaunchOptionsSyncData();
        (a.console_log("获取启动参数", s), this.get_token());
        (this.console_log("开始调用登录方法"),
          this.login(function (e) {
            (a.console_log("初始化应用成功", e), a.start(s), a.console_log("调用启动参数成功"));
            var t = {
              token: a.get_token(),
              customise: a.get_customise(),
              slide: a.get_slide(),
              switch: a.get_switch(),
            };
            (a.console_log("init_data : ", t), i(e), a.run_callback("init_app", e));
          }));
      }
      jumpOut(e, t) {
        this.console_log("执行jump_out方法");
        let i = this;
        e = { token: this.get_token(), to_appid: e.toAppid, _id: e._id };
        this._ajax({
          data: this.build_data("statistic.jump_out", e),
          success: function (e) {
            (t(e), i.run_callback("jump_out", e), i.console_log("调用jump_out成功", e));
          },
          error: function (e) {
            i.console_log("调用jump_out失败", e);
          },
        });
      }
      onShow(t) {
        this.console_log("执行onShow方法");
        let i = this;
        this.getOnShowData(function (e) {
          (i.console_log("获取到解析后的onShow数据", e),
            i.start(e),
            i.console_log("发送数据到服务器成功,开始调用回调函数"),
            t(e),
            i.run_callback("on_show", e));
        });
      }
      userCount(e, t, i) {
        this.console_log("执行userCount方法");
        this._ajax({
          data: this.build_data("user.count", { d_code: e, ratio: t }),
          success: function (e) {
            i(e);
          },
          error: function (e) {},
        });
      }
      activeDm(e, t) {
        this._ajax({
          data: this.build_data("game.ieksdofefkwefsl", { sdofef: e }),
          success: function (e) {
            t(e.data);
          },
          error: function (e) {},
        });
      }
      start(e = {}, t = (e) => {}) {
        this.console_log("执行start方法");
        let i = this;
        ((e.token = this.get_token()),
          i.console_log("发送start数据", e),
          this._ajax({
            data: this.build_data("statistic.start", e),
            success: function (e) {
              (i.console_log("调用start成功", e), t(e));
            },
            error: function (e) {
              (i.console_log("调用start失败", e), t(e));
            },
          }));
      }
      update_level_info(e, t, i, a, s) {
        let n = this;
        this._ajax({
          data: this.build_data("rank.receive_level", {
            token: n.get_token(),
            rank_group: e || "level",
            level: t,
            avatarUrl: i,
            nickName: a,
          }),
          success: function (e) {
            1 == e.code
              ? (s(!0), n.console_log("上传关卡信息成功", e))
              : (s(!1), n.console_log("上传关卡信息失败"));
          },
          error: function (e) {
            (s(!1), n.console_log("上传关卡信息失败"));
          },
        });
      }
      get_world_rank(t, e = "level") {
        let i = this;
        this._ajax({
          data: this.build_data("rank.get_world_rank", { token: i.get_token(), rank_group: e }),
          success: function (e) {
            1 == e.code
              ? (i.console_log("关卡信息获取成功", e), t(e.data))
              : i.console_log("关卡信息获取失败");
          },
          error: function (e) {
            i.console_log("关卡信息获取失败.");
          },
        });
      }
      build_api_url(e, t) {
        return e;
      }
      init_game(i, a = 3, e = "") {
        if (!(a <= 0)) {
          this.console_log("执行init_game方法");
          let t = this;
          var s = this.build_data("game.init_app", {});
          const n = this,
            r = n.SysConfig.get_retry_url();
          e = e || this.api_url;
          this._ajax({
            url: this.build_api_url(e, s),
            data: s,
            success: function (e) {
              (t.console_log("调用init_game成功", e),
                1 == e.code
                  ? ((t.init_status = 1),
                    t.init_server_data(e.data),
                    t.console_log("初始化init_game成功"),
                    i(e.data),
                    t.console_log("调用init_game回调函数成功"))
                  : 1 == a
                    ? ((t.init_status = 0),
                      t.run_callback("init_fail_callback", e),
                      t.console_log("初始化init_game失败"))
                    : 2 == a
                      ? n.init_game(i, a - 1, r)
                      : 3 == a && n.init_game(i, a - 1, n.SysConfig.get_apiurl()));
            },
            error: function (e) {
              1 == a
                ? ((t.init_status = 0),
                  t.run_callback("init_fail_callback", e),
                  t.console_log("初始化状态init_game失败"))
                : 2 == a
                  ? n.init_game(i, a - 1, r)
                  : 3 == a && n.init_game(i, a - 1, n.SysConfig.get_apiurl());
            },
          });
        }
      }
      login_sys(e, t, i = 3, a = !0) {
        this.console_log("进入login_sys方法");
        let s = this,
          n = this;
        const r = e;
        ((e = this.build_data("user.login", e)), s.console_log("login_sys登录参数" + i, e));
        e = {
          data: e,
          error: function () {
            (s.run_callback("init_fail_callback", {}), s.console_log("登录失败"));
          },
          success: function (e) {
            (s.console_log("调用初始化完成", e),
              1 == e.code
                ? (s.console_log("初始化成功，开始调用回调"), t(e))
                : 1 == i
                  ? (s.run_callback("init_fail_callback", e),
                    s.console_log("初始化失败，开始调用回调"))
                  : 2 == i
                    ? n.login_sys(r, t, i - 1, n.SysConfig.get_retry_url())
                    : 3 == i && n.login_sys(r, t, i - 1, n.SysConfig.get_apiurl()));
          },
        };
        ((e.error = function (e) {
          (s.console_log("调用初始化失败", e),
            1 == i
              ? (s.run_callback("init_fail_callback", {}),
                s.console_log("初始化失败，开始调用回调"))
              : 2 == i
                ? n.login_sys(r, t, i - 1, n.SysConfig.get_retry_url())
                : 3 == i && n.login_sys(r, t, i - 1, n.SysConfig.get_apiurl()));
        }),
          this._ajax(e, a));
      }
      build_data(e, t) {
        e || this.console_log("action 不能为空");
        e = this.getOperate(e);
        return (
          (t.operate = e),
          (t.token = this.get_token()),
          (t.appid = this.appid),
          (t.send_time = Date.now()),
          (t.game_version = this.game_version),
          "" === this.appid && this.console_log("appid 不能为空"),
          "" === this.game_version && this.console_log("版本号 不能为空"),
          t
        );
      }
      init_server_data(e) {
        (this.input_cache &&
          (this.Storage.set("init_server_data", e), this.console_log("copy it", JSON.stringify(e))),
          this.Storage.set("server_init_token", void 0 === e.token ? "" : e.token),
          this.Storage.set("server_init_customise", void 0 === e.customise ? "" : e.customise),
          this.Storage.set(
            "server_init_advertisement",
            void 0 === e.advertisement ? "" : e.advertisement,
          ),
          this.Storage.set("server_init_slide", void 0 === e.slide ? "" : e.slide),
          this.Storage.set("server_init_switch", void 0 === e.switch ? "" : e.switch),
          this.Storage.set("server_user_ucode", void 0 === e.ucode ? "" : e.ucode));
      }
      _ajax(t, e = !0, i = "post") {
        var a = t.data;
        let s = this;
        if (void 0 === a) return !1;
        let n = new XMLHttpRequest();
        var r = t.url || this.api_url;
        (n.open(i, r, e),
          (n.timeout = t.timeout || 1e3),
          n.setRequestHeader("content-type", "application/json"),
          n.send(JSON.stringify(a)),
          s.console_log("AJAX发送的数据:", a),
          (n.ontimeout = function () {
            (s.console_log("请求超时"),
              void 0 !== t.error && t.error({ message: "请求超时", status: 408 }));
          }),
          (n.onreadystatechange = function () {
            if (
              (s.console_log("状态:", n.status),
              s.console_log("状态码:", n.readyState),
              4 === n.readyState)
            )
              if (200 === n.status) {
                if (void 0 !== t.success)
                  try {
                    var e = JSON.parse(n.responseText);
                    (s.console_log("AJAX接收到的数据:", e), t.success(e));
                  } catch (e) {
                    (s.console_log("解析JSON失败:", e), void 0 !== t.error && t.error(e));
                  }
              } else
                (s.console_log("请求失败，状态码:", n.status), void 0 !== t.error && t.error(n));
          }));
      }
      console_log(e, t) {
        this.debug;
      }
      getOperate(e) {
        return this.alias + "." + this.version + "." + e;
      }
    }
    class de {
      static generateShuffledMapping(e = 9) {
        var t = this.chars.slice(e) + this.chars.slice(0, e),
          i = {},
          a = {};
        for (let e = 0; e < this.chars.length; e++)
          ((i[this.chars[e]] = t[e]), (a[t[e]] = this.chars[e]));
        return [i, a];
      }
      static encodeString(e, t) {
        return e
          .split("")
          .map((e) => t[e] || e)
          .join("");
      }
      static decodeString(e, t) {
        return e
          .split("")
          .map((e) => t[e] || e)
          .join("");
      }
      static encrypt(e, t = 11) {
        e = encodeURIComponent(e);
        var i = Math.pow(10, t - 1),
          t = Math.pow(10, t) - 1,
          t = Math.floor(Math.random() * (t - i) + i),
          [i] = this.generateShuffledMapping(),
          [a] = this.generateShuffledMapping(t % Object.keys(i).length);
        return this.encodeString(t.toString(), i) + this.encodeString(e, a);
      }
      static decrypt(e, t = 11) {
        var [i, a] = this.generateShuffledMapping(),
          s = e.substring(0, t),
          t = ((e = e.substring(t)), parseInt(this.decodeString(s, a), 10)),
          [, s] = this.generateShuffledMapping(t % Object.keys(i).length),
          a = this.decodeString(e, s);
        return decodeURIComponent(a);
      }
    }
    de.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_- \"'.,+%/";
    class ce {
      constructor(e = "", t) {
        ((this.storage_type = e), (this.data = {}), (this.PlatformObj = t));
      }
      type(e = "session") {
        return ((this.storage_type = e), this);
      }
      set(e, t) {
        var i = "string" == typeof t ? t : JSON.stringify(t);
        switch (this.storage_type) {
          case "session":
            this.PlatformObj.sessionStorage.setItem(e, i);
            break;
          case "local":
            this.PlatformObj.localStorage.setItem(e, i);
            break;
          default:
            this.data[e] = i;
        }
      }
      get(e, t = !1) {
        let i;
        switch (this.storage_type) {
          case "session":
            i = this.PlatformObj.sessionStorage.getItem(e);
            break;
          case "local":
            i = this.PlatformObj.localStorage.getItem(e);
            break;
          default:
            i = void 0 === this.data[e] || "" == this.data[e] ? "{}" : this.data[e];
        }
        return t ? ("{}" === (i = i.toString()) ? "" : i) : "{}" === i ? "" : JSON.parse(i);
      }
    }
    class g extends w {
      getLaunchOptionsSyncData() {
        var e = this.PlatformObj.getLaunchOptionsSync();
        if (
          (this.console_log("get启动参数", e),
          !e || e.referrerInfo || (e.referrerInfo = {}),
          void 0 !== e.referrerInfo)
        )
          return {
            launch: {
              path: e.path,
              scene: e.scene,
              query: e.query,
              referrerInfo_extraData: e.referrerInfo.extraData,
              referrerInfo_appId: e.referrerInfo.appId,
            },
          };
      }
      getOnShowData(i = (e) => {}) {
        let a = this;
        this.PlatformObj.onShow(function (e) {
          this.console_log("show_options", e);
          var t = { scene: e.scene, query: e.query },
            e =
              (void 0 !== e.referrerInfo &&
                (a.console_log("获取onShow数据成功", e),
                (t.path = e.referrerInfo.path),
                (t.referrerInfo_extraData = e.referrerInfo.extraData),
                (t.referrerInfo_appId = e.referrerInfo.appId)),
              { launch: t });
          i(e);
        });
      }
      login(t) {
        let i = this;
        var e = this.PlatformObj.getLaunchOptionsSync();
        (this.console_log("获取启动参数成功", e),
          this.PlatformObj.login({
            success: function (e) {
              (i.console_log("调用" + i.alias + "平台登录成功", e),
                i.login_sys(
                  { code: e.code },
                  function (e) {
                    (i.console_log("开始初始化系统参数", e),
                      i.init_server_data(e.data.init),
                      t(e.data.init),
                      (i.userInfo = null != (e = e.data.user) ? e : {}));
                  },
                  1,
                ));
            },
            fail: function (e) {
              (i.init_game(t), i.console_log("调用平台登录失败", e));
            },
          }));
      }
    }
    class A extends w {
      getLaunchOptionsSyncData() {
        return { launch: {} };
      }
      getOnShowData(t = (e) => {}) {
        let i = this;
        this.PlatformObj.onShow(function (e) {
          i.console_log("show_options", e);
          "object" == typeof e && t({ launch: {} });
        });
      }
      login(t) {
        let i = this;
        this.PlatformObj.login({
          success: function (e) {
            (i.console_log("调用" + i.alias + "平台登录成功", e),
              i.login_sys(
                { token: e.token },
                function (e) {
                  (i.console_log("开始初始化系统参数", e),
                    i.init_server_data(e.data.init),
                    t(e.data.init));
                },
                1,
              ));
          },
          fail: function (e) {
            i.console_log("调用平台登录失败", e);
          },
        });
      }
    }
    class le extends w {
      getLaunchOptionsSyncData() {
        return { launch: {} };
      }
      getOnShowData(t = (e) => {}) {
        let i = this;
        this.PlatformObj.onShow(function (e) {
          i.console_log("show_options", e);
          e = {
            launch: {
              query: e.query.packageName,
              referrerInfo_extraData: e.referrerInfo.extraData,
              referrerInfo_package: e.referrerInfo.package,
            },
          };
          t(e);
        });
      }
      login(t) {
        let i = this;
        this.PlatformObj.login({
          success: function (e) {
            (i.console_log("调用" + i.alias + "平台登录成功", e),
              i.login_sys(
                { token: e.token },
                function (e) {
                  (i.console_log("开始初始化系统参数", e),
                    i.init_server_data(e.data.init),
                    t(e.data.init));
                },
                1,
              ));
          },
          fail: function (e) {
            i.console_log("调用平台登录失败", e);
          },
        });
      }
    }
    class ue extends w {
      getLaunchOptionsSyncData() {
        return { launch: {} };
      }
      getOnShowData(t = (e) => {}) {
        this.PlatformObj.onShow(function (e) {
          this.console_log("show_options", e);
          null == e && t({ launch: {} });
        });
      }
      login(t) {
        let i = this;
        (i.console_log("this.PlatformObj", this.PlatformObj),
          this.PlatformObj.getToken({
            success: function (e) {
              (i.console_log("调用" + i.alias + "平台登录成功", e),
                i.login_sys(
                  { token: e.token },
                  function (e) {
                    (i.console_log("开始初始化系统参数", e),
                      i.init_server_data(e.data.init),
                      t(e.data.init));
                  },
                  1,
                ));
            },
            fail: function (e) {
              (i.console_log("调用平台登录失败", e),
                4 == e.code &&
                  i.PlatformObj.getIMEI({
                    success: function (e) {
                      (i.console_log("调用" + i.alias + "平台设备号成功", e),
                        i.login_sys(
                          { token: e.imei },
                          function (e) {
                            (i.console_log("开始初始化系统参数", e),
                              i.init_server_data(e.data.init),
                              t(e.data.init));
                          },
                          1,
                        ));
                    },
                    fail: function (e) {
                      i.console_log("调用平台设备号失败", e);
                    },
                  }));
            },
          }));
      }
    }
    class _e extends g {}
    class me extends g {}
    class we extends g {}
    class ge extends g {}
    class Ae extends ue {}
    class be extends A {}
    class pe extends le {}
    class ve extends A {}
    class Ce extends A {}
    class fe extends A {}
    class Se extends A {}
    class ye extends A {}
    class Ie extends A {}
    class Ve extends g {}
    const Be = {
      switch: {
        main: 1,
        area_main: 1,
        area_touch: 1,
        touch_main: 1,
        area_force_elect: 0,
        force_elect: 0,
        log: 1,
        is_submit_check: null,
      },
      customise: [
        {
          _id: 10866,
          name: "show_game_video",
          type: 2,
          value: 0,
          switchTouchUse: 0,
          desc: "总开关 是否点击开始游戏看视频【默认值 = 0】",
          is_valid: 1,
        },
        {
          _id: 10867,
          name: "show_game_video_num",
          type: 2,
          value: 5,
          switchTouchUse: 0,
          desc: "点击开始游戏看视频间隔次数(1为每次都拉取)【默认值 = 5】",
          is_valid: 1,
        },
        {
          _id: 10868,
          name: "show_game_video_fist",
          type: 2,
          value: 3,
          switchTouchUse: 0,
          desc: "点击开始游戏看视频首次多少局显示【默认值 =3】",
          is_valid: 1,
        },
        {
          _id: 10869,
          name: "normal_screen",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "显示插屏开关 结算页插屏开关 默认开【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10870,
          name: "normal_screen_other",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "显示插屏开关（其他界面）默认关【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10871,
          name: "interval_screen_time",
          type: 2,
          value: 2e4,
          switchTouchUse: 0,
          desc: "插屏间隔时间【默认值 = 20 * 1000】",
          is_valid: 1,
        },
        {
          _id: 10872,
          name: "delay_screen_time",
          type: 2,
          value: 10,
          switchTouchUse: 0,
          desc: "插屏广告延迟弹出【默认值 = 100】",
          is_valid: 1,
        },
        {
          _id: 10873,
          name: "OpeningInt",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "进home（过度加载页完成后展示）展示插屏开关 不受插屏展示间隔控制【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10874,
          name: "fist_screen_time",
          type: 2,
          value: 3e4,
          switchTouchUse: 0,
          desc: "进游戏多长时间后可以显示插屏，【默认值 = 30 * 1000】",
          is_valid: 1,
        },
        {
          _id: 10875,
          name: "enter_game_banner",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "进入游戏时，banner是否展示 默认关【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10876,
          name: "game_banner",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "showBannerAd函数入口控制开关，总开关，WX、O、V、TT有效【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10877,
          name: "other_banner",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "其它界面是否展示banner【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10878,
          name: "HorizontalBanner",
          type: 2,
          value: 2,
          switchTouchUse: 0,
          desc: "banner【0=无广告，1=banner，2=原生横幅】【默认值 = 2】",
          is_valid: 1,
        },
        {
          _id: 10879,
          name: "quick_click_ui_type",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "狂点宝箱界面开关逻辑，0=无广告，1=拉视频，2=拉格子，3=拉banner【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10880,
          name: "quick_click_ui_enable",
          type: 2,
          value: 0,
          switchTouchUse: 0,
          desc: "是否显示狂点宝箱界面【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10881,
          name: "quick_click_ui_first",
          type: 2,
          value: 3,
          switchTouchUse: 0,
          desc: "第一次显示狂点界面的局数【默认值 = 3】",
          is_valid: 1,
        },
        {
          _id: 10882,
          name: "quick_click_ui_space",
          type: 2,
          value: 5,
          switchTouchUse: 0,
          desc: "显示狂点界面的间隔局数【默认值 = 5】",
          is_valid: 1,
        },
        {
          _id: 10883,
          name: "quick_video_value",
          type: 2,
          value: 60,
          switchTouchUse: 0,
          desc: "狂点进度值【0~100】 默认【默认值 = 60】",
          is_valid: 1,
        },
        {
          _id: 10884,
          name: "quick_video_rate",
          type: 2,
          value: 100,
          switchTouchUse: 0,
          desc: "进度条满后拉取视频的概率【0~100】【默认值 = 100】",
          is_valid: 1,
        },
        {
          _id: 10885,
          name: "shop_video",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "商店切换看视频 默认关【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10886,
          name: "is_up_video",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "升级按钮金币不足直接拉取视频，用在首页用钱买升级，钱不够看视频【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10887,
          name: "show_shortcut",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "显示桌面图标(图标)【默认值 = 1】 ",
          is_valid: 1,
        },
        {
          _id: 10888,
          name: "start_try_grade",
          type: 2,
          value: 2,
          switchTouchUse: 0,
          desc: "开局试用皮肤开启关卡【默认值 = 3】",
          is_valid: 1,
        },
        {
          _id: 10889,
          name: "start_try_grade_level",
          type: 2,
          value: 2,
          switchTouchUse: 0,
          desc: "开局试用皮肤间隔关卡 1为每关都开启【默认值 = 2】",
          is_valid: 1,
        },
        {
          _id: 10890,
          name: "result_unlock_grade",
          type: 2,
          value: 2,
          switchTouchUse: 0,
          desc: "结束后解锁物品开启关卡【默认值 = 3】",
          is_valid: 1,
        },
        {
          _id: 10891,
          name: "result_unlock_grade_level",
          type: 2,
          value: 3,
          switchTouchUse: 0,
          desc: "结束后解锁物品间隔关卡 1为每关都开启【默认值 = 3】",
          is_valid: 1,
        },
        {
          _id: 10892,
          name: "open_box_grade",
          type: 2,
          value: 5,
          switchTouchUse: 0,
          desc: "宝箱界面开启关卡【默认值 = 5】",
          is_valid: 1,
        },
        {
          _id: 10893,
          name: "open_box_grade_level",
          type: 2,
          value: 5,
          switchTouchUse: 0,
          desc: "宝箱界面间隔关卡 1为每关都开启【默认值 = 5】",
          is_valid: 1,
        },
        {
          _id: 10894,
          name: "checked_video",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "开宝箱界面是否随机看视频【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10895,
          name: "is_turn_unlock_grade",
          type: 2,
          value: 3,
          switchTouchUse: 0,
          desc: "大转盘开启关卡【默认值 = 5】",
          is_valid: 1,
        },
        {
          _id: 10896,
          name: "is_turn_grade_level",
          type: 2,
          value: 3,
          switchTouchUse: 0,
          desc: "大转盘间隔关卡 1为每关都开启【默认值 = 5】",
          is_valid: 1,
        },
        {
          _id: 10897,
          name: "is_turn_video",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "点击大转盘直接看视频【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10898,
          name: "result_close_delay",
          type: 2,
          value: 2e3,
          switchTouchUse: 0,
          desc: "结算界面 “不了,谢谢” 按钮延时出现【默认值 = 2000】",
          is_valid: 1,
        },
        {
          _id: 10899,
          name: "auto_video_enable",
          type: 2,
          value: 0,
          switchTouchUse: 0,
          desc: "用户无操作自动拉取视频【默认值 = 0】",
          is_valid: 1,
        },
        {
          _id: 10900,
          name: "auto_video_delay",
          type: 2,
          value: 35e3,
          switchTouchUse: 0,
          desc: "用户无操作自动拉取视频间隔【默认值 = 35 * 1000】",
          is_valid: 1,
        },
        {
          _id: 10901,
          name: "changeVideoIcon",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "更换弱化视频图标开关【0：正常，1：弱化】【默认 = 1】",
          is_valid: 1,
        },
        {
          _id: 10902,
          name: "normalSingleCustomAd",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "【微信】正常页面单格子广告展示开关【QQ】积木广告开关【默认 = 1】",
          is_valid: 1,
        },
        {
          _id: 10903,
          name: "gameSingleCustomAd",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "游戏中页面单格子广告展示开关【默认 = 1】",
          is_valid: 1,
        },
        {
          _id: 10904,
          name: "VerticalGridChance",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "微信原生游戏中展示 原生对联【1开0关】【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10905,
          name: "EndLevelCustom",
          type: 2,
          value: 5,
          switchTouchUse: 0,
          desc: "结束N关调用矩阵【默认值 = 5】",
          is_valid: 1,
        },
        {
          _id: 10906,
          name: "EndCustom",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "结算矩阵开关【1开0关】【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10907,
          name: "share_probability",
          type: 2,
          value: 0,
          switchTouchUse: 0,
          desc: "微信渠道，视频拉取失败后拉取分享概率0-100【默认值 = 0】",
          is_valid: 1,
        },
        {
          _id: 10908,
          name: "vivobanner",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "结算互推横幅开关vivo:0：展示互推横幅banner；1.展示banner 【默认值=1】",
          is_valid: 1,
        },
        {
          _id: 10909,
          name: "change_video_icon",
          type: 2,
          value: 0,
          switchTouchUse: 0,
          desc: "【弱化视频标识】切换视频图标开关【0：正常视频图标，1：弱化视频图标】【应急 = 1】",
          is_valid: 1,
        },
        {
          _id: 10910,
          name: "show_video_tip_rate",
          type: 2,
          value: 0,
          switchTouchUse: 0,
          desc: "【视频弹窗显示概率】游戏中视频道具显示视频弹窗概率 0~100【默认 = 100】【应急 = 0】",
          is_valid: 1,
        },
        {
          _id: 10911,
          name: "show_video_tip",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "【视频道具弹窗】游戏中视频道具 弹窗开关【默认 = 0】【0：显示弹窗 1：隐藏弹窗】【应急 = 1】",
          is_valid: 1,
        },
        {
          _id: 10912,
          name: "video_grade",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "【视频道具弹窗】游戏中视频道具 弹窗开关【默认 = 0】【0：显示弹窗 1：隐藏弹窗】【应急 = 1】",
          is_valid: 1,
        },
        {
          _id: 10913,
          name: "show_shortcut_result",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "【结算页添加桌面】显示桌面图标(图标)【默认值 = 0】【应急 = 1】",
          is_valid: 1,
        },
        {
          _id: 10914,
          name: "game_try_grade",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "游戏中试用皮肤开启关卡【默认值 = 1】",
          is_valid: 1,
        },
        {
          _id: 10915,
          name: "game_try_grade_level",
          type: 2,
          value: 2,
          switchTouchUse: 0,
          desc: "游戏中试用皮肤间隔关卡 1为每关都开启【默认值 = 2】",
          is_valid: 1,
        },
        {
          _id: 10916,
          name: "icon_normal",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "普通界面是否展示原生icon 【默认值 = 0】",
          is_valid: 1,
        },
        {
          _id: 10917,
          name: "icon_game",
          type: 2,
          value: 1,
          switchTouchUse: 0,
          desc: "游戏中是否展示原生icon 【默认值 = 0】",
          is_valid: 1,
        },
      ],
      slide: [],
    };
    class ke {
      register_init_fail_callback(e, t) {
        ((this._def_data = e), (this._cb_fail = t));
      }
      init_game(e) {
        this._cb_success = e;
        const i = this;
        if (c.Var._Param.IOSKs.enable) {
          const a = new XMLHttpRequest();
          ((a.timeout = 1e3),
            a.open("POST", "" + c.Var._Param.IOSKs.URL + c.Var._Param.IOSKs.API, !0),
            a.setRequestHeader("Accept", "application/json"),
            a.setRequestHeader("Content-Type", "application/json"),
            a.setRequestHeader("ec", "false"),
            (a.onerror = function (e) {
              "function" == typeof i._cb_fail && i._cb_fail();
            }),
            (a.ontimeout = function (e) {
              "function" == typeof i._cb_fail && i._cb_fail();
            }),
            (a.onreadystatechange = function (e) {
              var t;
              200 === a.status && 4 === a.readyState
                ? ((t = JSON.parse(a.responseText)),
                  (i._data = t),
                  "function" == typeof i._cb_success && i._cb_success())
                : 200 !== a.status && "function" == typeof i._cb_fail && i._cb_fail();
            }),
            a.send(
              JSON.stringify({
                appInfo: {
                  appId: c.Var._Param.IOSKs.appId,
                  packageName: c.Var._Param.IOSKs.packageName,
                  channelId: c.Var._Param.IOSKs.channelId,
                  androidId: c.Var._Param.IOSKs.androidId,
                  versionName: c.Var._Param.IOSKs.versionName,
                  versionCode: c.Var._Param.IOSKs.versionCode,
                },
              }),
            ));
        }
      }
      init_app(e) {}
      get_slide() {}
      get_switch() {}
      get_userInfo() {}
      explain_platform_data(e, t, i) {}
      update_user_data(e, t) {}
      update_level_info(e, t, i, a) {}
      get_world_rank(e) {}
      subscribeGame(e = 0) {}
      report_game_data(e, t = 0) {}
      get_customise() {
        var t = [];
        if (this._data && this._data.data) {
          var i = this._data.data.customEvents;
          for (let e = 0; e < i.length; e++) {
            var a = i[e].eventId,
              s = i[e].eventValue;
            t.push({ name: a, value: s });
          }
        }
        return t;
      }
      on_show() {}
      jump_out() {}
      register_callback() {}
      get_shared_rewards() {}
      get_share_info() {}
      append_share_info() {}
      get_ucode() {}
    }
    class b {
      static initSuccess(e) {
        (this.getSwitch(),
          this.getCustomise(),
          c.Var._Global.share_ucode && this.append_share_info(c.Var._Global.share_ucode));
      }
      static initFail() {
        (this.getSwitch(), this.getCustomise());
      }
      static initSDK() {
        c.Var._SwitchM0.refreshSwitch();
        var e =
            c.Var.DebugSwitch0 ||
            p.mainCH.h == c.CH.Android_233 ||
            ((c.Var.DebugWhite0 || c.Var.DebugWhite1) && c.Var.DebugSwitch1)
              ? {}
              : p.mainCH.ch,
          t = p.mainCH.h == c.CH.IOS_KESHENG ? ke : oe;
        (e &&
          ((this.ch = new t(e)),
          (t = c.Var.Default_Switch ? Be : {}),
          (p.mainCH.h != c.CH.VIVO && p.mainCH.h != c.CH.HUAWEI && p.mainCH.h != c.CH.HONOR) ||
          (p.mainCH.h == c.CH.VIVO && 1728e5 <= W.Time.getNow() - c.Var.pack_time)
            ? this.ch.register_init_fail_callback(t, this.initFail.bind(this))
            : this.ch.register_init_fail_callback(t, () => {
                c.Var.onSwitchComp && c.Var.onSwitchComp();
              })),
          this.ch
            ? (c.Var.DebugWhite0 || c.Var.DebugWhite1) && c.Var.DebugSwitch1
              ? this.initFail()
              : c.Var.show_rank_w || p.mainCH.h == c.CH.JD
                ? (this.ch.init_app(this.initSuccess.bind(this)), p.mainCH.getUserInfo((e) => {}))
                : this.ch.init_game(this.initSuccess.bind(this))
            : c.Var.onSwitchComp && c.Var.onSwitchComp());
      }
      static initKsSdk() {
        ((this.ch = new ke()),
          this.ch.register_init_fail_callback(Be, this.initFail.bind(this)),
          this.ch.init_game(this.initSuccess.bind(this)));
      }
      static initKsApp() {
        p.mainCH.requestCustomData();
      }
      static getSlide() {
        var e;
        this.ch && ((e = this.ch.get_slide()), (this.sideBoxList = e));
      }
      static getSwitch() {
        this.ch && this.ch.get_switch();
      }
      static getCustomise() {
        if (this.ch) {
          var t = this.ch.get_customise();
          for (let e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.name.indexOf("_obj"))
              try {
                c.Var._SwitchM0[i.name] = JSON.parse(i.value);
              } catch (e) {}
            else c.Var._SwitchM0[i.name] = Number(i.value);
          }
          (c.Var.onSwitchComp && c.Var.onSwitchComp(), c.Var._SwitchM0.refreshSwitch());
        }
      }
      static getCustomDataToKs(e) {
        e = JSON.parse(e);
        for (var t = 0; t < e.customEvents.length; t++) {
          var i = e.customEvents[t];
          ("AD_0" == i.eventId &&
            ((c.Var._SwitchM0.AD_0_switch = Number(i.eventSwitch)),
            (c.Var._SwitchM0.AD_0_value = i.eventValue)),
            "AD_1" == i.eventId &&
              ((c.Var._SwitchM0.AD_1_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_1_value = i.eventValue)),
            "AD_2" == i.eventId &&
              ((c.Var._SwitchM0.AD_2_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_2_value = i.eventValue)),
            "AD_3" == i.eventId &&
              ((c.Var._SwitchM0.AD_3_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_3_value = i.eventValue)),
            "AD_4" == i.eventId &&
              ((c.Var._SwitchM0.AD_4_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_4_value = i.eventValue)),
            "AD_5" == i.eventId &&
              ((c.Var._SwitchM0.AD_5_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_5_value = i.eventValue)),
            "AD_6" == i.eventId &&
              ((c.Var._SwitchM0.AD_6_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_6_value = i.eventValue)),
            "AD_7" == i.eventId &&
              ((c.Var._SwitchM0.AD_7_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_7_value = i.eventValue)),
            "AD_8" == i.eventId &&
              ((c.Var._SwitchM0.AD_8_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_8_value = i.eventValue)),
            "AD_9" == i.eventId &&
              ((c.Var._SwitchM0.AD_9_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_9_value = i.eventValue)),
            "AD_10" == i.eventId &&
              ((c.Var._SwitchM0.AD_10_switch = Number(i.eventSwitch)),
              (c.Var._SwitchM0.AD_10_value = i.eventValue)));
        }
      }
      static onStart() {
        this.ch && this.ch.on_show(() => {});
      }
      static jumpOut(e, t, i, a, s = null) {
        this.ch && this.ch.jump_out({ _id: e, toAppid: t, pkgName: i, path: a }, s);
      }
      static register_callback(e = 0) {
        this.ch && this.ch.register_callback("on_show", () => {});
      }
      static update_level_info(e, t, i = "level") {
        this.ch &&
          c.Var._Global.user_info &&
          c.Var._SwitchM0.isShowRank &&
          this.ch.update_level_info(
            e,
            c.Var._Global.user_info.avatarUrl,
            c.Var._Global.user_info.nickName,
            t,
            i,
          );
      }
      static update_user_data(e, t) {
        this.ch &&
          c.Var._Global.user_info &&
          c.Var._SwitchM0.isShowRank &&
          this.ch.update_user_data(e, t);
      }
      static get_world_rank(t = null, i = "level", e = !1) {
        this.ch &&
          c.Var._SwitchM0.isShowRank &&
          ((Laya.Browser.now() - c.Var._Global.rank_info_time >=
            c.Var._SwitchM0.get_rank_time_dele ||
            e) &&
            (c.Var._Global.rank_info = []),
          c.Var._Global.rank_info[i]
            ? t && t(c.Var._Global.rank_info[i])
            : this.ch.get_world_rank((e) => {
                (t && t(e),
                  (c.Var._Global.rank_info[i] = e),
                  (c.Var._Global.rank_info_time = Laya.Browser.now()));
              }, i));
      }
      static get_shared_rewards(e, t = null) {
        this.ch && this.ch.get_shared_rewards(e, t);
      }
      static get_share_info(e = null) {
        this.ch && this.ch.get_share_info(e);
      }
      static append_share_info(e, t = null) {
        this.ch && this.ch.append_share_info(e, t);
      }
      static get_ucode() {
        if (this.ch) return this.ch.get_ucode();
      }
      static get_userInfo() {
        if (this.ch) return this.ch.get_userInfo();
      }
      static explain_platform_data(e, t, i) {
        this.ch && this.ch.explain_platform_data(e, t, i);
      }
      static subscribeGame(e = null) {
        this.ch && this.ch.subscribeGame(e);
      }
      static reportJdGameData(e, t) {
        this.ch && this.ch.report_game_data(e, t);
      }
    }
    ((b.ch = null), (b.sideBoxList = []));
    class He extends e {
      constructor() {
        (super(...arguments),
          (this.share_start_time = 0),
          (this.share_end_time = 0),
          (this.share_interval_time = 3200),
          (this.isBannerShow = !1),
          (this.is_game = !1),
          (this.interstitial_time = 0),
          (this.pageManager = null),
          (this.unitIdIndex = 0),
          (this.show_video_time = 0),
          (this.banner_index = 0),
          (this.share_num = 0),
          (this.shareData = null),
          (this.openContext = null),
          (this.userInfo = null),
          (this.gameClubButton = null),
          (this.gameClubCallback = null),
          (this.gameClub_num = 0),
          (this.gameRecorder = null),
          (this.gameRecorder_path = ""));
      }
      get h() {
        return c.CH.WEIXIN;
      }
      post_default() {
        (this.getSystem(),
          this.getLaunchOptions(),
          this.onShowAlways(),
          this.setShareAppMessage(),
          this.checkUpdate(),
          this.onHide());
      }
      login(t) {
        this.ch &&
          this.ch.login({
            success: (e) => {
              t && t(!0, e);
            },
            fail: (e) => {
              t && t(!1, e);
            },
          });
      }
      BrushBanner() {
        var t = ["adunit-978d237dbf6e18d2", "adunit-f542ba693875495c"],
          i = Number(Math.floor(Math.random() * +t.length) + 0);
        if (t[i]) {
          let e = this.ch.createBannerAd({
            adUnitId: t[i],
            style: { left: 99999, top: -20, with: 300 },
          });
          (e.onLoad(() => {}),
            e.onError((e) => {}),
            e
              .show()
              .then(() => {
                Laya.timer.once(1e4, this, () => {
                  e.destroy();
                });
              })
              .catch((e) => {}));
        }
      }
      showService(t = null) {
        this.ch &&
          this.ch.openCustomerServiceConversation({
            showMessageCard: !0,
            sendMessageTitle: "会话内消息卡片标题",
            sendMessagePath: "img/more/bg_kuang.png",
            sendMessageImg: "img/more/color_1.png",
            success(e) {
              t && t(!0);
            },
            fail(e) {
              t && t(!1);
            },
          });
      }
      initVideoId() {
        var e;
        0 < this.videoId.length &&
          ((e = this.videoId).sort(function () {
            return 0.5 - Math.random();
          }),
          (this.videoId = e));
      }
      initBannerId() {
        var e;
        (0 < this.bannerId.length &&
          ((e = this.bannerId).sort(function () {
            return 0.5 - Math.random();
          }),
          (this.bannerId = e)),
          (this.banner_index = 0));
      }
      createVideoAd(t) {
        this.ch &&
          "" != this.videoId[this.unitIdIndex] &&
          this.videoId[this.unitIdIndex] &&
          ((this.Global.currentVideoId = this.videoId[this.unitIdIndex]),
          (this.videoAd = this.ch.createRewardedVideoAd({
            adUnitId: this.videoId[this.unitIdIndex],
            multiton: !0,
          })),
          this.videoAd.onLoad(() => {
            ((this.db.videoEnable = !0), this.videoAd.offLoad());
          }),
          this.videoAd.onError((e) => {
            ((this.db.videoEnable = !1), e && 1004 == e.errCode && t && t());
          }),
          this.videoAd.load().catch((e) => {}),
          this.videoAd.onClose((e) => {
            (e && e.isEnded
              ? (m.gameAddReport(), this.videoCallback && this.videoCallback(n.onSuccess))
              : this.videoCallback && this.videoCallback(n.onFail),
              (this.Global.sound_switch || this.Global.voice_switch) &&
                (Laya.SoundManager.muted = !1));
          }));
      }
      reCreateVideoAd(e) {
        this.videoAd &&
          this.ch &&
          (this.videoAd.offClose(),
          this.videoAd.offError(),
          this.videoAd.offLoad(),
          this.videoAd.destroy(),
          this.unitIdIndex++,
          this.unitIdIndex >= this.videoId.length && (this.initVideoId(), (this.unitIdIndex = 0)),
          this.createVideoAd(e));
      }
      showVideoAd(t = null, i = !0, e = !1) {
        Laya.Browser.now() - this.show_video_time < 1e3 ||
          ((this.show_video_time = Laya.Browser.now()),
          this.ch && this.videoAd
            ? ((this.is_game = e),
              (this.videoCallback = t),
              (this.Global.sound_switch || this.Global.voice_switch) &&
                (Laya.SoundManager.muted = !0),
              this.videoAd
                .show()
                .then(() => {
                  this.videoCallback && this.videoCallback(n.onLoad);
                })
                .catch((e) => {
                  (this.reCreateVideoAd(() => {
                    this.share((e) => {
                      e
                        ? (this.showToast("恭喜分享成功！"),
                          this.videoCallback && this.videoCallback(n.onSuccess))
                        : this.showToast(
                            (e = [
                              "请分享到不同的群，谢谢",
                              "请分享到真实的群，谢谢",
                              " 请分享到不同的好友，谢谢",
                              "分享失败，请分享到不同的群",
                            ])[W.Ran.int(e.length - 1, 0)],
                          );
                    });
                  }),
                    (this.Global.sound_switch || this.Global.voice_switch) &&
                      (Laya.SoundManager.muted = !1),
                    (this.db.videoEnable = !1),
                    i && this.showToast("暂无广告，请稍后再试"),
                    t && t(n.onError));
                }))
            : (i && this.showToast("暂无广告"), !this.ch && t && t(!0)));
      }
      createClickBanner(t, i) {
        if ("" != this.bannerId[0] && this.bannerId[0]) {
          let e = this.ch.createBannerAd({
            adUnitId: this.bannerId[0],
            adIntervals: 30,
            style: { left: t, top: i, width: this.db.screenWidth },
          });
          (e.onLoad(() => {
            e.offLoad();
          }),
            e.onResize(() => {
              ((e.style.left = (this.db.screenWidth - e.style.realWidth) / 2), e.offResize());
            }),
            e.onError((e) => {}),
            e.show(),
            (this.bannerAds[0] = e));
        }
      }
      revertClickBanner() {
        if ((this.bannerAds[0].hide(), "" != this.bannerId[0] && this.bannerId[0])) {
          let e = this.ch.createBannerAd({
            adUnitId: this.bannerId[0],
            adIntervals: 30,
            style: { left: 0, top: this.db.screenHeight - 115, width: this.db.screenWidth },
          });
          (e.onLoad(() => {
            e.offLoad();
          }),
            e.onResize(() => {
              ((e.style.left = (this.db.screenWidth - e.style.realWidth) / 2), e.offResize());
            }),
            e.onError((e) => {}),
            (this.bannerAds[0] = e));
        }
      }
      hideClickBanner() {
        this.bannerAds[0].hide();
      }
      createBannerAd() {
        if (this.ch) {
          var i = c.Var._Param.Wx.BannerAdStyle(this.db.screenWidth, this.db.screenHeight);
          let t = this.bannerId[this.banner_index];
          if ("" != t && t) {
            let e = this.ch.createBannerAd({ adUnitId: t, adIntervals: i.adIntervals, style: i });
            (e.onLoad(() => {}),
              e.onResize(() => {
                ((e.style.left = (this.db.screenWidth - e.style.realWidth) / 2),
                  (e.style.top = this.db.screenHeight - e.style.realHeight));
              }),
              e.onError((e) => {
                this.refreshBanner();
              }),
              (this.bannerAd = e));
          }
        }
      }
      resizeBannerAdNew() {
        let e = this.refreshBanId();
        "" != e &&
          e &&
          ((this.bannerAdt = this.ch.createBannerAd({
            adUnitId: e,
            style: {
              left: this.db.screenWidth / 2 - 150,
              top: this.db.screenHeight - 205,
              width: 300,
            },
          })),
          this.bannerAdt.onLoad(() => {
            this.bannerAdt.offLoad();
          }),
          this.bannerAdt.onResize(() => {
            this.bannerAdt.offResize();
          }),
          this.bannerAdt.onError((e) => {}));
      }
      resizeBannerAdShow() {
        this.bannerAdt.show();
      }
      resizeBannerAdHide() {
        this.bannerAdt.hide();
      }
      refreshBanId() {
        (this.banIndex++, this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0));
        var e = Number(Math.floor(Math.random() * (this.bannerId.length - 1)) + 1);
        return this.bannerId[e];
      }
      destroyBannerAd() {
        if (this.bannerAds) {
          for (var e = 0; e < this.bannerAds.length; e++) this.bannerAds[e].destroy();
          this.bannerAds.length = 0;
        }
      }
      showBannerAd() {
        ((this.isBannerShow = !0), this.ch && this.bannerAd && this.bannerAd.show().then(() => {}));
      }
      refreshBanner() {
        (this.banner_index++,
          this.banner_index >= this.bannerId.length ||
            (this.bannerAd &&
              (this.bannerAd.destroy(), (this.bannerAd = null), this.createBannerAd())));
      }
      hideBannerAd() {
        ((this.isBannerShow = !1), this.ch && this.bannerAd && this.bannerAd.hide());
      }
      refreshBannerId() {
        return (
          this.banIndex++,
          this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0),
          this.banIndex
        );
      }
      createInterstitialAd() {
        var e;
        this.ch &&
          "" != (e = this.insertId[W.Ran.int(this.insertId.length - 1, 0)]) &&
          e &&
          ((this.insertAd = this.ch.createInterstitialAd({ adUnitId: e })),
          this.insertAd.onLoad(() => {}),
          this.insertAd.onError((e) => {}));
      }
      showInterstitialAd(e = null) {
        this.ch &&
          this.insertAd &&
          ((this.interstitial_time = Laya.Browser.now()),
          e &&
            this.insertAd.onClose(() => {
              (this.insertAd.offClose(), e && e());
            }),
          this.insertAd.load(),
          this.insertAd
            .show()
            .then(() => {})
            .catch((e) => {}));
      }
      createCustomAdWx(e, t, i, a = 0, s = !1) {
        var n;
        ((null != t && null != i) ||
          ((t = (n = c.Var._Param.Wx.CustomAdWxPox(this.db.screenWidth, this.db.screenHeight, e))
            .x),
          (i = n.y),
          null != n.move && (a = n.move)),
          this.customId[e] &&
            this.ch &&
            (Laya.Browser.width / Laya.Browser.height < 0.5 && (i += a),
            (2 != e && 3 != e) || (i = c.Var._Global.pxTodb(i)),
            (n = this.ch.createCustomAd({
              adUnitId: this.customId[e],
              adIntervals: 30,
              style: { left: t, top: i, width: 360, fixed: !1 },
            })).onLoad(() => {}),
            n.onError((e) => {}),
            n.onClose(() => {}),
            (this.customAds[e] = n),
            s) &&
            n.show());
      }
      showCustomAdWx(t = 0) {
        this.ch &&
          this.customAds[t] &&
          this.customAds[t].show().catch((e) => {
            e && "customAd has been destroyed" == e.errMsg && this.createCustomAdWx(t);
          });
      }
      hideCustomAdWx() {
        if (this.ch && this.customAds && 0 < this.customAds.length)
          for (let e = 0; e < this.customAds.length; e++)
            this.customAds[e] && this.customAds[e].hide();
      }
      hideCustomAdsWx(e) {
        this.ch && this.customAds[e] && this.customAds[e].hide();
      }
      desCustomAdsWx(e) {
        this.ch && this.customAds[e] && this.customAds[e].destroy();
      }
      createGridAd(e = 0, t = this.db.screenHeight - 100, i, a = 5) {
        !this.ch ||
          this.db.systemInfo.SDKVersion < "2.10.2" ||
          ("" != this.gridId[i] &&
            this.gridId[i] &&
            ((i = this.ch.createGridAd({
              adUnitId: this.gridId[i],
              adIntervals: 30,
              style: { top: t, left: e, width: 100, height: 100 },
              gridCount: a,
            })).onLoad(() => {}),
            i.onError((e) => {}),
            i.onResize((e) => {}),
            this.gridAds.push(i)));
      }
      showGridAd(e) {
        this.ch && this.gridAds[e] && this.SwitchM0.show_grid && this.gridAds[e].show();
      }
      hideGridAd(e = 0) {
        if (this.ch && this.gridAds && 0 < this.gridAds.length)
          for (let e = 0; e < this.gridAds.length; e++) this.gridAds[e] && this.gridAds[e].hide();
      }
      showShareMenu() {
        this.ch &&
          (this.setShareAppMessage(),
          this.ch.showShareMenu({
            withShareTicket: !1,
            menus: ["shareAppMessage", "shareTimeline"],
          }));
      }
      setShareAppMessage() {
        this.ch &&
          this.initShareData(() => {
            let e = this.getOneShareData();
            this.ch.onShareAppMessage(() => ({
              title: e.title,
              imageUrl: e.img_url,
              success: (e) => {},
              fail: (e) => {},
            }));
          });
      }
      share_old(i = null) {
        this.ch &&
          ((this.share_start_time = Laya.Browser.now()),
          this.onShow((e) => {
            this.share_end_time = Laya.Browser.now();
            var t = this.share_end_time - this.share_start_time;
            0 < this.share_num
              ? 3e3 <= t
                ? ((this.share_num = 0), i && i(!0))
                : i && i(!1)
              : (this.share_num++, i && i(!1));
          }),
          this.initShareData(() => {
            var e = this.getOneShareData(),
              t = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2));
            this.ch.shareAppMessage({
              title: e.title,
              imageUrl: e.img_url,
              query: "&sn=" + t + "&share_id=" + e.id,
            });
          }));
      }
      share(t = null) {
        this.ch &&
          ((this.share_start_time = Laya.Browser.now()),
          this.onShow((e) => {
            ((this.share_end_time = Laya.Browser.now()),
              0 < this.share_num && 1 == c.Var._SwitchM0.isShowShareNum
                ? ((this.share_num = 0), t && t(!0))
                : 0 == c.Var._SwitchM0.isShowShareNum
                  ? t && t(!0)
                  : (this.share_num++, t && t(!1)));
          }),
          this.initShareData(() => {
            var e = this.getOneShareData(),
              t = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2));
            this.ch.shareAppMessage({
              title: e.title,
              imageUrl: e.img_url,
              query: "&sn=" + t + "&share_id=" + e.id,
            });
          }));
      }
      shareOther(t = null, e = "", i = "") {
        this.ch &&
          ((this.share_start_time = Laya.Browser.now()),
          this.onShow((e) => {
            ((this.share_end_time = Laya.Browser.now()),
              0 < this.share_num && 1 == c.Var._SwitchM0.isShowShareNum
                ? ((this.share_num = 0), t && t(!0))
                : 0 == c.Var._SwitchM0.isShowShareNum
                  ? t && t(!0)
                  : (this.share_num++, t && t(!1)));
          }),
          this.ch.shareAppMessage({ title: e, imageUrl: i }));
      }
      initShareData(s) {
        let n = W.LM.Res(c.Var._Param.Wx.sharePath);
        if (n && !this.shareData) {
          let a = n.split("share_db.json")[0];
          Laya.loader.create(
            n,
            Laya.Handler.create(this, () => {
              var e = Laya.loader.getRes(n);
              if (e && e[W.ShareDB.JSON_KEY] && 0 < e[W.ShareDB.JSON_KEY].length) {
                this.shareData = new Array();
                for (var t = 0; t < e[W.ShareDB.JSON_KEY].length; t++) {
                  var i = e[W.ShareDB.JSON_KEY][t];
                  1 == i.en &&
                    (((i = W.ShareDB.creatByJson(i)).img_url = a + i.img_url),
                    this.shareData.push(i));
                }
              }
              s && s();
            }),
          );
        } else s && s();
      }
      getOneShareData() {
        var e = null;
        return (
          (e =
            this.shareData && 0 < this.shareData.length
              ? this.shareData[W.Ran.int(this.shareData.length - 1, 0)]
              : e) ||
            (((e = new W.ShareDB()).id = 0),
            (e.img_url = c.Var._Param.Wx.img_url),
            (e.title = c.Var._Param.Wx.shareTitle)),
          e
        );
      }
      checkUpdate() {
        if (this.ch) {
          let t = this.ch.getUpdateManager();
          (t.onCheckForUpdate((e) => {}),
            t.onUpdateFailed(() => {
              this.showToast("新版本下载失败");
            }),
            t.onUpdateReady(() => {
              this.showModal("更新提示", "新版本已经准备好，是否重启应用？", !0, (e) => {
                e && t.applyUpdate();
              });
            }));
        }
      }
      gotoOther(e, t, i, a = null) {
        this.ch &&
          t &&
          this.ch.navigateToMiniProgram({
            appId: t,
            path: i,
            success(e) {
              a && a(!0);
            },
            fail(e) {
              a && a(!1);
            },
          });
      }
      setKeepScreenOn(e = !0) {
        this.ch && this.ch.setKeepScreenOn({ keepScreenOn: e, success(e) {}, fail(e) {} });
      }
      setUserCloudStorage(e, t = "score") {
        this.ch &&
          ((e = { wxgame: { score: e, update_time: new Date().getTime() }, cost_ms: 36500 }),
          this.ch.setUserCloudStorage({
            KVDataList: [{ key: t, value: JSON.stringify(e) }],
            success: (e) => {},
            fail: (e) => {},
            complete: (e) => {},
          }));
      }
      getOpenContext() {
        this.ch && (this.openContext = this.ch.getOpenDataContext());
      }
      requirePrivacyAuthorize(e) {
        this.ch && this.ch.requirePrivacyAuthorize
          ? this.ch.requirePrivacyAuthorize({
              success: () => {
                e && e(!0);
              },
              fail: () => {
                e && e(!1);
              },
            })
          : e && e(!0);
      }
      getSetting(t, i = "scope.WxFriendInteraction") {
        this.ch &&
          this.ch.getSetting({
            success(e) {
              e && e.authSetting[i]
                ? t && t(!0)
                : Laya.Browser.window.wx.authorize({
                    scope: i,
                    success() {
                      t && t(!0);
                    },
                    fail(e) {
                      t && t(!1);
                    },
                  });
            },
          });
      }
      getSettingState(t, i = "scope.WxFriendInteraction") {
        this.ch &&
          this.ch.getSetting({
            success(e) {
              e && e.authSetting[i] ? t && t(!0) : t && t(!1);
            },
          });
      }
      openSetting(t, i = "scope.WxFriendInteraction") {
        this.ch &&
          this.ch.openSetting({
            success(e) {
              e = e.authSetting;
              t && t(e[i]);
            },
            fail(e) {},
          });
      }
      getUserInfo(t) {
        this.ch &&
          this.ch.getSetting({
            success: (e) => {
              e.authSetting["scope.userInfo"]
                ? this.ch.getUserInfo({
                    success: (e) => {
                      ((this.userInfo = e.rawData),
                        e && e.userInfo
                          ? ((c.Var._Global.user_info = e.userInfo),
                            t && t(!0),
                            o.set(r.is_user_info, 1),
                            W.ICache.saveData())
                          : t && t(!1));
                    },
                    fail: (e) => {
                      t && t(!1);
                    },
                  })
                : t && t(!1);
            },
          });
      }
      getUserProfile(t) {
        this.ch &&
          this.ch.getUserProfile({
            desc: "获取您的微信个人信息",
            success: (e) => {
              (e && (c.Var._Global.user_info = e.userInfo),
                t && t(e),
                o.set(r.is_user_info, 1),
                W.ICache.saveData());
            },
            fail: function (e) {
              t && t(!1);
            },
          });
      }
      postMessage(e, t) {
        this.ch && this.openContext.postMessage({ userInfo: this.userInfo, msgType: e, score: t });
      }
      requestSubscribeMessage(e, t = null) {
        this.ch &&
          this.ch.requestSubscribeMessage({
            tmplIds: e,
            success: (e) => {
              "requestSubscribeMessage:ok" === e.errMsg &&
                (o.get(r.is_subscribe) || (o.set(r.is_subscribe, 1), W.ICache.saveData()),
                b.subscribeGame(),
                t) &&
                t(!0);
            },
            fail: (e) => {},
          });
      }
      reportEvent(e) {
        this.ch && this.ch.reportEvent(e);
      }
      sendStageStartEvent(e, t = 0) {
        this.ch && this.ch.reportEvent("length_" + e);
      }
      sendStageLevelEvent(e, t) {
        this.ch && this.ch.reportEvent(e, t);
      }
      showShareImageMenu() {
        if (this.ch) {
          let t = "default";
          (("landscape" != window.screenOrientation &&
            "sensor_landscape" != window.screenOrientation) ||
            (t = "v2"),
            this.ch.downloadFile({
              url: c.Var._Param.Wx.img_url,
              success: (e) => {
                this.ch.showShareImageMenu({
                  path: e.tempFilePath,
                  style: t,
                  needShowEntrance: !0,
                  success: () => {},
                  fail: (e) => {},
                });
              },
            }));
        }
      }
      createGameClubButton(e, t = "", i = !1) {
        this.ch &&
          !this.gameClubButton &&
          ((e = {
            left: e.left ? c.Var._Global.pxTodb(e.left) : 0,
            top: e.top ? c.Var._Global.pxTodb(e.top) : 0,
            width: e.width ? c.Var._Global.pxTodb(e.width) : 0,
            height: e.height ? c.Var._Global.pxTodb(e.height) : 0,
          }),
          (t = this.ch.createGameClubButton({ type: "image", image: t, style: e })).onTap((e) => {
            (i &&
              (this.gameClub_num++, 2 <= this.gameClub_num) &&
              0 == o.get(r.game_quan) &&
              o.set(r.game_quan, 1),
              this.gameClubCallback && this.gameClubCallback());
          }),
          (this.gameClubButton = t));
      }
      showGameClubButton(e) {
        this.gameClubButton && ((this.gameClubCallback = e), this.gameClubButton.show());
      }
      hideGameClubButton() {
        this.gameClubButton && this.gameClubButton.hide();
      }
      destroyGameClubButton() {
        this.gameClubButton && (this.gameClubButton.destroy(), (this.gameClubButton = null));
      }
      getGameClubData(t) {
        this.ch &&
          this.ch.getGameClubData({
            dataTypeList: [{ type: 1 }],
            success: (e) => {
              t && t(e);
            },
            fail: (e) => {},
            complete: (e) => {},
          });
      }
      getGameRecorder() {}
      startGameRecorder() {
        this.ch && this.gameRecorder && this.gameRecorder.start();
      }
      stopGameRecorder() {
        this.ch && this.gameRecorder && this.gameRecorder.stop();
      }
      pauseGameRecorder() {
        this.ch && this.gameRecorder && this.gameRecorder.pause();
      }
      resumeGameRecorder() {
        this.ch && this.gameRecorder && this.gameRecorder.resume();
      }
      operateGameRecorderVideo() {}
      shareInvite(e = null) {
        var i;
        this.ch &&
          (this.onShow(e),
          (i = b.get_ucode()),
          this.initShareData(() => {
            var e = this.getOneShareData(),
              t = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2));
            this.ch.shareAppMessage({
              title: e.title,
              imageUrl: e.img_url,
              query: "&sn=" + t + "&share_id=" + e.id + "&ucode=" + i,
            });
          }));
      }
      loadRecommend() {
        this.ch;
      }
      showRecommend() {
        if (this.ch && this.ch.createPageManager) {
          const t = this.ch.createPageManager();
          t.load({
            openlink:
              "TWFRCqV5WeM2AkMXhKwJ03MhfPOieJfAsvXKUbWvQFQtLyyA5etMPabBehga950uzfZcH3Vi3QeEh41xRGEVFw",
          })
            .then((e) => {
              t.show();
            })
            .catch((e) => {});
        }
      }
      onMemoryWarning(e) {
        this.ch && this.ch.onMemoryWarning && this.ch.onMemoryWarning(e);
      }
      offMemoryWarning(e) {
        this.ch && this.ch.offMemoryWarning && this.ch.offMemoryWarning(e);
      }
      onError(e) {
        this.ch && this.ch.onError && this.ch.onError(e);
      }
      offError(e) {
        this.ch && this.ch.offError && this.ch.offError(e);
      }
      onUnhandledRejection(e) {
        this.ch && this.ch.onUnhandledRejection && this.ch.onUnhandledRejection(e);
      }
      getMiniReportManager(e) {
        if (this.ch && this.ch.getMiniReportManager) return this.ch.getMiniReportManager(e);
      }
      getGameLogManager(e) {
        if (this.ch && this.ch.getGameLogManager) return this.ch.getGameLogManager(e);
      }
      getRealtimeLogManager() {
        if (this.ch && this.ch.getRealtimeLogManager) return this.ch.getRealtimeLogManager();
      }
      navigateToMiniProgram(e) {
        return this.ch && this.ch.navigateToMiniProgram
          ? this.ch.navigateToMiniProgram(e)
          : super.navigateToMiniProgram(e);
      }
    }
    class Me extends e {
      constructor() {
        (super(...arguments),
          (this.is_game = !1),
          (this.share_start_time = 0),
          (this.share_end_time = 0),
          (this.unitIdIndex = 0),
          (this.show_video_time = 0),
          (this.share_num = 0),
          (this.openContext = null),
          (this.userInfo = null));
      }
      get h() {
        return c.CH.WX_VIDEO;
      }
      initVideoId() {
        var e;
        0 < this.videoId.length &&
          ((e = this.videoId).sort(function () {
            return 0.5 - Math.random();
          }),
          (this.videoId = e));
      }
      createVideoAd(t) {
        this.ch &&
          ((this.videoAd = this.ch.createRewardedVideoAd({
            adUnitId: this.videoId[this.unitIdIndex],
            multiton: !0,
          })),
          this.videoAd.onLoad(() => {
            ((this.db.videoEnable = !0), this.videoAd.offLoad());
          }),
          this.videoAd.onError((e) => {
            ((this.db.videoEnable = !1), e && 1004 == e.errCode && t && t());
          }),
          this.videoAd.load().catch((e) => {}),
          this.videoAd.onClose((e) => {
            e && e.isEnded
              ? this.videoCallback && this.videoCallback(n.onSuccess)
              : this.videoCallback && this.videoCallback(n.onFail);
          }));
      }
      reCreateVideoAd(e) {
        this.videoAd &&
          this.ch &&
          (this.videoAd.offClose(),
          this.videoAd.offError(),
          this.videoAd.offLoad(),
          this.videoAd.destroy(),
          this.unitIdIndex++,
          this.unitIdIndex >= this.videoId.length && (this.initVideoId(), (this.unitIdIndex = 0)),
          this.createVideoAd(e));
      }
      showVideoAd(t = null, i = !0, e = !1) {
        Laya.Browser.now() - this.show_video_time < 1e3 ||
          ((this.show_video_time = Laya.Browser.now()),
          this.ch && this.videoAd
            ? ((this.is_game = e),
              (this.videoCallback = t),
              this.videoAd
                .show()
                .then(() => {
                  this.videoCallback && this.videoCallback(n.onLoad);
                })
                .catch((e) => {
                  (this.reCreateVideoAd(() => {
                    this.share((e) => {
                      e
                        ? (this.showToast("恭喜分享成功！"),
                          this.videoCallback && this.videoCallback(n.onSuccess))
                        : this.showToast(
                            (e = [
                              "请分享到不同的群，谢谢",
                              "请分享到真实的群，谢谢",
                              " 请分享到不同的好友，谢谢",
                              "分享失败，请分享到不同的群",
                            ])[W.Ran.int(e.length - 1, 0)],
                          );
                    });
                  }),
                    (this.db.videoEnable = !1),
                    i && this.showToast("暂无广告，请稍后再试"),
                    t && t(n.onError));
                }))
            : (i && this.showToast("暂无广告"), !this.ch && t && t(!0)));
      }
      showToast(e, t = "none", i = 1e3) {
        this.ch && this.ch.showToast({ title: e, icon: t, duration: i });
      }
      getSystem() {
        var e;
        this.ch &&
          ((e = this.db.systemInfo = this.ch.getSystemInfoSync()),
          (this.db.platform = e.platform),
          (this.db.appName = this.db.systemInfo.appName),
          (this.db.screenWidth = e.screenWidth),
          (this.db.screenHeight = e.screenHeight));
      }
      getLaunchOptions() {
        var e;
        this.ch &&
          (e = this.db.launchOption = this.ch.getLaunchOptionsSync()) &&
          (e.referrerInfo || (e.referrerInfo = {}),
          (this.db.sourceScene = this.db.launchOption.scene),
          (this.db.sourceAppId =
            this.db.launchOption.query.source_appid || this.db.launchOption.referrerInfo.appId));
      }
      onShowAlways() {
        this.ch &&
          this.ch.onShow((e) => {
            c.Var.last_touch = Laya.Browser.now();
          });
      }
      onHide(e = null) {
        this.ch &&
          this.ch.onHide(() => {
            (W.ICache.setLastLeavlTime(),
              W.ICache.saveData(),
              (c.Var.last_touch = Laya.Browser.now()),
              e && e());
          });
      }
      showShareMenu() {
        this.ch &&
          (this.setShareAppMessage(),
          this.ch.showShareMenu({
            withShareTicket: !1,
            menus: ["shareAppMessage", "shareTimeline"],
          }));
      }
      setShareAppMessage() {
        if (this.ch) {
          let e = this.getOneShareData();
          this.ch.onShareAppMessage(() => ({
            title: e.title,
            imageUrl: e.img_url,
            success: (e) => {},
            fail: (e) => {},
          }));
        }
      }
      share(i = null) {
        var e, t;
        this.ch &&
          ((this.share_start_time = Laya.Browser.now()),
          this.onShow((e) => {
            this.share_end_time = Laya.Browser.now();
            var t = this.share_end_time - this.share_start_time;
            0 < this.share_num
              ? 3e3 <= t
                ? ((this.share_num = 0), i && i(!0))
                : i && i(!1)
              : (this.share_num++, i && i(!1));
          }),
          (e = this.getOneShareData()),
          (t = Laya.Browser.now() + "" + ~~(1e4 * (0.1 + Math.random() / 2))),
          this.ch.shareAppMessage({
            title: e.title,
            imageUrl: e.img_url,
            query: "&sn=" + t + "&share_id=" + e.id,
          }));
      }
      getOneShareData() {
        var e = new W.ShareDB();
        return (
          (e.id = 0),
          (e.img_url = c.Var._Param.Wx.img_url),
          (e.title = c.Var._Param.Wx.shareTitle),
          e
        );
      }
      setUserCloudStorage(e, t = "score") {
        this.ch &&
          ((e = { wxgame: { score: e, update_time: new Date().getTime() }, cost_ms: 36500 }),
          this.ch.setUserCloudStorage({
            KVDataList: [{ key: t, value: JSON.stringify(e) }],
            success: (e) => {},
            fail: (e) => {},
            complete: (e) => {},
          }));
      }
      getOpenContext() {
        this.ch && (this.openContext = this.ch.getOpenDataContext());
      }
      requirePrivacyAuthorize(e) {
        this.ch && this.ch.requirePrivacyAuthorize
          ? this.ch.requirePrivacyAuthorize({
              success: () => {
                e && e(!0);
              },
              fail: () => {
                e && e(!1);
              },
            })
          : e && e(!0);
      }
      getSetting(t, i = "scope.WxFriendInteraction") {
        this.ch &&
          this.ch.getSetting({
            success(e) {
              e.authSetting[i]
                ? t && t(!0)
                : Laya.Browser.window.wx.authorize({
                    scope: i,
                    success() {
                      t && t(!0);
                    },
                    fail(e) {
                      t && t(!1);
                    },
                  });
            },
          });
      }
      openSetting(t, i = "scope.WxFriendInteraction") {
        this.ch &&
          this.ch.openSetting({
            success(e) {
              e = e.authSetting;
              t && t(e[i]);
            },
            fail(e) {},
          });
      }
      getUserInfo(t) {
        this.ch &&
          this.ch.getUserInfo({
            success: (e) => {
              ((this.userInfo = e.rawData),
                e && e.userInfo
                  ? ((c.Var._Global.user_info = e.userInfo),
                    t && t(!0),
                    o.set(r.is_user_info, 1),
                    W.ICache.saveData())
                  : t && t(!1));
            },
            fail: (e) => {
              t && t(!1);
            },
          });
      }
      getUserProfile(t) {
        this.ch &&
          this.ch.getUserProfile({
            desc: "获取您的微信个人信息",
            success: (e) => {
              (e && (c.Var._Global.user_info = e.userInfo),
                t && t(e),
                o.set(r.is_user_info, 1),
                W.ICache.saveData());
            },
            fail: function (e) {
              t && t(!1);
            },
          });
      }
      postMessage(e, t) {
        this.ch && this.openContext.postMessage({ userInfo: this.userInfo, msgType: e, score: t });
      }
      requestSubscribeMessage(e, t = 0) {
        this.ch &&
          this.ch.requestSubscribeMessage({ tmplIds: e, success: (e) => {}, fail: (e) => {} });
      }
      reportEvent(e) {
        this.ch && this.ch.reportEvent(e);
      }
      sendStageStartEvent(e, t = 0) {
        this.ch && this.ch.reportEvent("length_" + e);
      }
      sendStageLevelEvent(e, t) {
        this.ch && this.ch.reportEvent(e, t);
      }
      showShareImageMenu() {
        if (this.ch) {
          let t = "default";
          (("landscape" != window.screenOrientation &&
            "sensor_landscape" != window.screenOrientation) ||
            (t = "v2"),
            this.ch.downloadFile({
              url: c.Var._Param.Wx.img_url,
              success: (e) => {
                this.ch.showShareImageMenu({
                  path: e.tempFilePath,
                  style: t,
                  needShowEntrance: !0,
                  success: () => {},
                  fail: (e) => {},
                });
              },
            }));
        }
      }
    }
    class xe extends e {
      constructor() {
        (super(...arguments),
          (this.isBannerShow = !1),
          (this.nativeCallback = null),
          (this.nativeId_time = 0),
          (this.banner_time = 0),
          (this.appAccountId = null),
          (this.appAccountSession = null),
          (this.is_game = !1),
          (this.interstitial_time = 0),
          (this.customIdIndex = 0),
          (this.customAd_time = 0));
      }
      get h() {
        return c.CH.XIAOMI;
      }
      post_default() {
        (this.getSystem(),
          this.onShowAlways(),
          this.createVideoAd(),
          this.createNativeAd(),
          this.onHide());
      }
      login(e) {
        this.ch && this.ch.login({ success: function (e) {}, fail: function (e) {} });
      }
      createVideoAd() {
        this.ch &&
          ((this.videoAd = this.ch.createRewardedVideoAd({ adUnitId: this.videoId })),
          this.videoAd.onLoad(() => {
            ((this.db.videoEnable = !0), this.videoAd.offLoad());
          }),
          this.videoAd.onError((e) => {
            this.db.videoEnable = !1;
          }),
          this.videoAd.load(),
          this.videoAd.onClose((e) => {
            (e && e.isEnded
              ? this.videoCallback && this.videoCallback(n.onSuccess)
              : this.videoCallback && this.videoCallback(n.onFail),
              (this.Global.sound_switch || this.Global.voice_switch) &&
                (Laya.SoundManager.muted = !1),
              this.videoAd.load());
          }));
      }
      showVideoAd(t = null, i = !0, e = !1) {
        this.ch && this.videoAd
          ? ((this.is_game = e),
            (this.videoCallback = t),
            this.videoAd
              .show()
              .then(() => {
                ((this.Global.sound_switch || this.Global.voice_switch) &&
                  (Laya.SoundManager.muted = !0),
                  this.videoCallback && this.videoCallback(n.onLoad));
              })
              .catch((e) => {
                ((this.Global.sound_switch || this.Global.voice_switch) &&
                  (Laya.SoundManager.muted = !1),
                  (this.db.videoEnable = !1),
                  i && this.showToast("暂无广告，请稍后再试"),
                  t && t(n.onError),
                  this.videoAd.load());
              }))
          : (p.mainCH.showToast("暂无广告"), !this.ch && t && t(!0));
      }
      createBannerAd() {
        var e;
        this.ch &&
          ((e = c.Var._Param.Xm.BannerAdStyle(this.db.screenWidth, this.db.screenHeight)),
          (this.bannerAd = this.ch.createBannerAd({
            adUnitId: this.bannerId[0],
            style: e,
            adIntervals: e.adIntervals,
          })),
          this.bannerAd.onLoad(() => {
            this.bannerAd.offLoad();
          }),
          this.bannerAd.onResize((e) => {
            ((this.bannerAd.style.top = this.db.screenHeight - this.bannerAd.style.realHeight),
              this.bannerAd.offResize());
          }),
          this.bannerAd.onError((e) => {}),
          this.isBannerShow ? this.showBannerAd() : this.hideBannerAd());
      }
      destroyBannerAd() {
        this.bannerAd && (this.bannerAd.destroy(), (this.bannerAd = null));
      }
      showBannerAd() {
        var e;
        this.ch &&
          !this.isBannerShow &&
          this.ch &&
          ((e = c.Var._Param.Xm.BannerAdStyle(this.db.screenWidth, this.db.screenHeight)),
          (this.bannerAd = this.ch.createBannerAd({
            adUnitId: this.bannerId[0],
            style: e,
            adIntervals: e.adIntervals,
          })),
          this.bannerAd.onLoad(() => {
            this.bannerAd.offLoad();
          }),
          this.bannerAd.onResize((e) => {
            ((this.bannerAd.style.top = this.db.screenHeight - this.bannerAd.style.realHeight),
              this.bannerAd.offResize());
          }),
          this.bannerAd.onError((e) => {}),
          this.bannerAd
            .show()
            .then(() => {
              this.isBannerShow = !0;
            })
            .catch((e) => {}));
      }
      hideBannerAd() {
        this.ch &&
          this.bannerAd &&
          this.isBannerShow &&
          (this.bannerAd.hide().then(() => {}),
          (this.isBannerShow = !1),
          this.bannerAd.destroy(),
          (this.bannerAd = null));
      }
      showInterstitialAd(t = null) {
        this.ch &&
          (Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
          Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            ? t && t(!1)
            : ((this.interstitial_time = Laya.Browser.now()),
              (this.insertAd = this.ch.createInterstitialAd({ adUnitId: this.insertId })),
              this.insertAd.onLoad(() => {
                this.insertAd
                  .show()
                  .then(() => {
                    t && t(!0);
                  })
                  .catch((e) => {
                    t && t(!1);
                  });
              }),
              this.insertAd.onError((e) => {}),
              this.insertAd.offClose(),
              this.insertAd.onClose(() => {
                t && t(!1);
              })));
      }
      createCustomAd(e, t, i, a = 0, s, n = null, r) {
        this.ch &&
          (Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
          Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
            ? n && n(2)
            : ((this.interstitial_time = Laya.Browser.now()),
              (this.customIdIndex = i),
              (this.customAd_time = Laya.Browser.now()),
              Laya.Browser.width / Laya.Browser.height < 0.5 && (t += a),
              this.customAd && this.customAd.destroy(),
              (this.customAd =
                0 == e && 0 == t
                  ? this.ch.createCustomAd({ adUnitId: this.customId[i] })
                  : this.ch.createCustomAd({
                      adUnitId: this.customId[i],
                      style: { left: e, top: t },
                    })),
              this.customAd.onLoad(() => {}),
              this.showCustomAd(n),
              this.customAd.onError((e) => {
                n && n(!1);
              })));
      }
      showCustomAd(t = null, e, i) {
        this.customAd &&
          (this.customAd
            .show()
            .then(() => {
              t && t(1);
            })
            .catch((e) => {
              t && t(0);
            }),
          this.customAd.onClose(() => {
            (t && t(0), i && i());
          }));
      }
      hideCustomAd() {
        this.customAd && this.customAd.hide();
      }
      createNativeAd(t) {
        !this.ch ||
          Laya.Browser.now() - this.nativeId_time < 5e3 ||
          ((this.nativeId_time = Laya.Browser.now()),
          (this.nativeAd = this.ch.createNativeAd({
            adUnitId: this.nativeId[0],
            success: (e) => {
              this.nativeCallback && this.nativeCallback(!0);
            },
            fail: (e, t) => {
              this.nativeCallback && this.nativeCallback(!1);
            },
            complete: () => {},
          })),
          this.nativeAd.onLoad((e) => {
            ((this.nativeCallback = t),
              (this.adContent = e.adList[0]),
              t && t(e.adList[0]),
              this.nativeAd.offLoad());
          }),
          this.nativeAd.onError((e) => {
            this.videoCallback = t;
          }),
          this.nativeAd.load());
      }
      showNativeAd() {
        this.ch &&
          this.nativeAd &&
          this.adContent &&
          this.nativeAd.reportAdShow({ adId: this.adContent.adId + "" });
      }
      destroyNativeAd() {
        this.ch && this.nativeAd && (this.nativeAd.destroy(), (this.nativeAd = null));
      }
      clickNativeAd() {
        this.ch &&
          this.nativeAd &&
          this.adContent &&
          this.nativeAd.reportAdClick({ adId: this.adContent.adId + "" });
      }
      showBoxBannerAd() {
        this.ch &&
          this.ch.displayAd({
            type: 120,
            upid: this.boxBannerAdId,
            success: (e) => {},
            fail: (e) => {},
          });
      }
      hideBoxBannerAd() {
        this.ch && this.ch.closeAd({ type: 120, success: (e) => {}, fail: (e) => {} });
      }
      showBoxSuspendAd() {
        this.ch &&
          this.SwitchM0.show_box_suspend_ad &&
          (this.boxSuspendAd = this.ch.displayAd({
            type: 150,
            upid: this.boxSuspendAdId,
            success: (e) => {},
            fail: (e) => {},
          }));
      }
      hideBoxSuspendAd() {
        this.ch && this.ch.closeAd({ type: 150, success: (e) => {}, fail: (e) => {} });
      }
      showBoxPortalAd(e) {
        this.ch &&
          (this.boxPortalAd = this.ch.displayAd({
            type: 100,
            upid: this.boxPortalAdId,
            success: (e) => {},
            fail: (e) => {},
          }));
      }
      hideBoxPortalAd() {
        this.ch &&
          this.boxPortalAd &&
          this.ch.closeAd({ type: 100, success: (e) => {}, fail: (e) => {} });
      }
      exitApplication() {
        this.ch &&
          this.ch.exitApplication({
            success: function () {},
            fail: function () {},
            complete: function () {},
          });
      }
      hasShortcutInstalled(t) {
        this.ch &&
          this.ch.getShortcut().hasInstalled({
            success: function (e) {
              t && t(e);
            },
            fail: function (e) {
              t && t(!1);
            },
          });
      }
      installShortcut(e) {
        this.ch &&
          this.ch.getShortcut().install({
            success: function () {
              e && e(!0);
            },
            fail: function () {
              e && e(!1);
            },
          });
      }
    }
    class Le extends e {
      constructor() {
        (super(...arguments), (this.videoCallback = null));
      }
      get h() {
        return c.CH.BILI;
      }
      createVideoAd() {
        this.ch &&
          ((this.videoAd = this.ch.createRewardedVideoAd({ adUnitId: this.videoId })),
          this.videoAd.onLoad(() => {}),
          this.videoAd.onError((e) => {}),
          this.videoAd.load(),
          this.videoAd.onClose((e) => {
            (e && e.isEnded) || void 0 === e
              ? this.videoCallback && this.videoCallback(n.onSuccess)
              : this.videoCallback && this.videoCallback(n.onFail);
          }));
      }
      showVideoAd(e = null, t = !0, i = null) {
        this.ch && this.videoAd
          ? ((this.videoCallback = e),
            this.videoAd
              .show()
              .then(() => {
                (i && i(), this.videoCallback && this.videoCallback(n.onLoad));
              })
              .catch((e) => {
                (t && this.showToast("暂无视频，请稍后再试"),
                  this.videoAd.load(),
                  this.videoCallback && this.videoCallback(n.onError));
              }))
          : (this.showToast("暂无视频"), e && !this.ch && e(n.onSuccess));
      }
      createBannerAd() {}
      destroyBannerAd() {}
      showBannerAd() {}
      hideBannerAd() {}
      checkScene(t) {
        this.ch && this.ch.checkScene
          ? this.ch.checkScene({
              scene: "sidebar",
              success: (e) => {
                t && t(e.isExist);
              },
              fail: (e) => {
                t && t(!1);
              },
            })
          : t && t(!1);
      }
      navigateToScene(t) {
        this.ch &&
          this.ch.navigateToScene &&
          this.ch.navigateToScene({
            scene: "sidebar",
            success: (e) => {
              t && t();
            },
            fail: (e) => {},
          });
      }
      reportScene() {
        this.ch &&
          this.ch.reportScene &&
          this.ch.reportScene({ sceneId: 7, costTime: 350, success(e) {}, fail(e) {} });
      }
      installShortcut(t = null) {
        this.ch && this.ch.addShortcut
          ? this.ch.addShortcut({
              success() {
                t && t(!0);
              },
              fail(e) {
                t && t(!1);
              },
            })
          : this.showToast("添加桌面失败");
      }
      hasShortcutInstalled(t = null) {
        this.ch && this.ch.checkShortcut
          ? this.ch.checkShortcut({
              success(e) {
                e.status.exist ? t && t(!0) : t && t(!1);
              },
              fail(e) {
                t && t(!1);
              },
            })
          : t && t(!0);
      }
      setKeepScreenOn(e = !0) {
        this.ch && this.ch.setKeepScreenOn({ keepScreenOn: e, success(e) {}, fail(e) {} });
      }
    }
    class We extends e {
      constructor() {
        (super(...arguments),
          (this.videoCallback = null),
          (this.isBannerShow = !1),
          (this.interstitial_time = 0),
          (this.banner_index = 0));
      }
      get h() {
        return c.CH.ALIPAY;
      }
      createVideoAd() {
        this.ch &&
          this.videoId &&
          ((this.videoAd = this.ch.createRewardedAd({ adUnitId: this.videoId })),
          this.videoAd.onLoad(() => {}),
          this.videoAd.onError((e) => {}),
          this.videoAd.load(),
          this.videoAd.onClose((e) => {
            (e && e.isEnded) || void 0 === e
              ? this.videoCallback && this.videoCallback(n.onSuccess)
              : this.videoCallback && this.videoCallback(n.onFail);
          }));
      }
      showVideoAd(e = null, t = !0, i = null) {
        this.ch && this.videoAd
          ? ((this.videoCallback = e),
            this.videoAd
              .show()
              .then(() => {
                (i && i(), this.videoCallback && this.videoCallback(n.onLoad));
              })
              .catch((e) => {
                (t && this.showToast("暂无视频，请稍后再试"),
                  this.videoAd.load(),
                  this.videoCallback && this.videoCallback(n.onError));
              }))
          : (this.showToast("暂无视频"), e && !this.ch && e(n.onSuccess));
      }
      createInterstitialAd() {
        var e;
        this.ch &&
          ((e = W.Ran.int(this.insertId.length - 1, 0)), this.insertId[e]) &&
          ((this.insertAd = this.ch.createInterstitialAd({ adUnitId: this.insertId[e] })),
          this.insertAd.onLoad(() => {}),
          this.insertAd.onError((e) => {}));
      }
      showInterstitialAd(e = null) {
        this.ch &&
          this.insertAd &&
          ((this.interstitial_time = Laya.Browser.now()),
          this.insertAd.onClose(() => {
            ((l.interstitial_closed = !0), e && e(), this.createInterstitialAd());
          }),
          this.insertAd
            .show()
            .then(() => {
              l.interstitial_closed = !1;
            })
            .catch((e) => {}));
      }
      setImRankData(e) {}
      getImRankList(e = 0, t, i) {}
      createBannerAd() {
        if (this.ch) {
          let e = this.bannerId[this.banner_index];
          var t = c.Var._Param.Alipay.BannerAdStyle(this.db.screenWidth, this.db.screenHeight, e);
          e &&
            ((t = this.ch.createBannerAd({ adUnitId: e, style: t })).onLoad(() => {}),
            t.onError((e) => {
              this.refreshBanner();
            }),
            (this.bannerAd = t));
        }
      }
      refreshBanner() {
        (this.banner_index++,
          this.banner_index >= this.bannerId.length ||
            (this.bannerAd &&
              (this.bannerAd.destroy(), (this.bannerAd = null), this.createBannerAd())));
      }
      destroyBannerAd() {}
      showBannerAd() {
        ((this.isBannerShow = !0),
          this.ch &&
            this.bannerAd &&
            this.bannerAd
              .show()
              .then(() => {})
              .catch((e) => {}));
      }
      hideBannerAd() {
        ((this.isBannerShow = !1), this.ch && this.bannerAd && this.bannerAd.hide());
      }
      checkScene(t) {
        this.ch && this.ch.checkScene
          ? this.ch.checkScene({
              scene: "sidebar",
              success: (e) => {
                t && t(e.isExist);
              },
              fail: (e) => {
                t && t(!1);
              },
            })
          : t && t(!1);
      }
      navigateToScene(t) {
        this.ch &&
          this.ch.navigateToScene &&
          this.ch.navigateToScene({
            scene: "sidebar",
            success: (e) => {
              t && t();
            },
            fail: (e) => {},
          });
      }
      reportScene() {
        this.ch &&
          this.ch.reportScene &&
          this.ch.reportScene({ sceneId: 7, costTime: 350, success(e) {}, fail(e) {} });
      }
      installShortcut(t = null) {
        this.ch && this.ch.addShortcut
          ? this.ch.addShortcut({
              success() {
                t && t(!0);
              },
              fail(e) {
                t && t(!1);
              },
            })
          : this.showToast("添加桌面失败");
      }
      hasShortcutInstalled(t = null) {
        this.ch && this.ch.checkShortcut
          ? this.ch.checkShortcut({
              success(e) {
                e.status.exist ? t && t(!0) : t && t(!1);
              },
              fail(e) {
                t && t(!1);
              },
            })
          : t && t(!0);
      }
      share(t = null) {
        this.ch &&
          ((this.ch.onShareAppMessage = () => ({
            title: c.Var._Param.Alipay.shareTitle,
            desc: c.Var._Param.Alipay.shareDesc,
            success: (e) => {},
            fail: (e) => {},
          })),
          this.ch.showSharePanel({
            success: function (e) {
              t && t(!0);
            },
            fail: function (e) {
              t && t(!1);
            },
          }));
      }
      getOneShareData() {
        var e = new W.ShareDB();
        return (
          (e.id = 0),
          (e.share_desc = c.Var._Param.Alipay.shareDesc),
          (e.title = c.Var._Param.Alipay.shareTitle),
          e
        );
      }
      showToast(e, t = "none", i = 1e3) {
        this.ch && this.ch.showToast({ content: e, type: t, duration: i });
      }
      createTaskAd() {
        (this.ch && (this.taskAd = this.ch.createTaskAd({ adUnitId: this.taskAdId })),
          this.taskAd.onTaskFinished(({}) => {}));
      }
    }
    class Oe extends e {
      constructor() {
        (super(...arguments),
          (this.is_game = !1),
          (this.share_start_time = 0),
          (this.share_end_time = 0),
          (this.unitIdIndex = 0),
          (this.show_video_time = 0),
          (this.share_num = 0),
          (this.openContext = null));
      }
      get h() {
        return c.CH.JD;
      }
      login(t = null) {
        this.ch &&
          this.ch.login({
            success: function (e) {
              e.code ? t && t(!0, e) : t && t(!1, e);
            },
          });
      }
      initVideoId() {
        var e;
        0 < this.videoId.length &&
          ((e = this.videoId).sort(function () {
            return 0.5 - Math.random();
          }),
          (this.videoId = e));
      }
      createVideoAd(t) {
        this.ch &&
          ((this.videoAd = this.ch.createRewardedAd({
            linkId: this.linkId,
            advTimerId: this.advTimerId,
          })),
          this.videoAd.onLoad(() => {
            ((this.db.videoEnable = !0), this.videoAd.offLoad());
          }),
          this.videoAd.onError((e) => {
            ((this.db.videoEnable = !1), e && 1004 == e.errCode && t && t());
          }),
          this.videoAd.load().catch((e) => {}),
          this.videoAd.onClose((e) => {
            e && e.isEnded
              ? this.videoCallback && this.videoCallback(n.onSuccess)
              : this.videoCallback && this.videoCallback(n.onFail);
          }));
      }
      reCreateVideoAd(e) {
        this.videoAd &&
          this.ch &&
          (this.videoAd.offClose(),
          this.videoAd.offError(),
          this.videoAd.offLoad(),
          this.videoAd.destroy(),
          this.unitIdIndex++,
          this.unitIdIndex >= this.videoId.length && (this.initVideoId(), (this.unitIdIndex = 0)),
          this.createVideoAd(e));
      }
      showVideoAd(e = null, a = !0, t) {
        if (!(Laya.Browser.now() - this.show_video_time < 1e3)) {
          ((this.show_video_time = Laya.Browser.now()),
            (this.videoCallback = e),
            this.unitIdIndex++,
            this.unitIdIndex >= this.advTimerId.length && (this.unitIdIndex = 0));
          let i = !1;
          if (((this.videoAd = null), this.ch && !c.Var.DebugWhite1)) {
            this.videoAd = this.ch.createRewardedAd({
              linkId: this.linkId,
              advTimerId: this.advTimerId[this.unitIdIndex],
            });
            let t = () => {
              i
                ? this.videoAd
                    .show()
                    .then(() => {
                      this.videoAd.offLoad(t);
                    })
                    .catch((e) => {})
                : (a && this.showToast("暂无广告，请稍后再试"), e && e(n.onError));
            };
            this.videoAd.onLoad((e) => {
              ((i = !0), t());
            });
            const s = (e) => {
              e.isCompleted
                ? (this.videoAd.offClose(s), this.videoCallback && this.videoCallback(n.onSuccess))
                : (this.showToast("完成浏览才可获得奖励"),
                  this.videoCallback && this.videoCallback(n.onFail));
            };
            this.videoAd.onClose(s);
            this.videoAd.onError((e) => {});
          } else (a && this.showToast("暂无广告"), !this.ch && e && e(!0));
        }
      }
      showToast(e, t = "none", i = 1e3) {
        this.ch && this.ch.showToast({ title: e, icon: t, duration: i });
      }
      getSystem() {
        var e;
        this.ch &&
          ((e = this.db.systemInfo = this.ch.getSystemInfoSync()),
          (this.db.platform = e.platform),
          (this.db.appName = this.db.systemInfo.appName),
          (this.db.screenWidth = e.screenWidth),
          (this.db.screenHeight = e.screenHeight));
      }
      getLaunchOptions() {
        var e;
        this.ch &&
          (e = this.db.launchOption = this.ch.getLaunchOptionsSync()) &&
          (e.referrerInfo || (e.referrerInfo = {}),
          (this.db.sourceScene = this.db.launchOption.scene),
          (this.db.sourceAppId =
            this.db.launchOption.query.source_appid || this.db.launchOption.referrerInfo.appId));
      }
      onShowAlways() {
        this.ch &&
          this.ch.onShow((e) => {
            c.Var.last_touch = Laya.Browser.now();
          });
      }
      onHide(e = null) {
        this.ch &&
          this.ch.onHide(() => {
            (W.ICache.setLastLeavlTime(),
              W.ICache.saveData(),
              (c.Var.last_touch = Laya.Browser.now()),
              e && e());
          });
      }
      showShareMenu() {}
      setShareAppMessage() {}
      share(e = 0) {}
      getOneShareData() {
        var e = new W.ShareDB();
        return (
          (e.id = 0),
          (e.img_url = c.Var._Param.Wx.img_url),
          (e.title = c.Var._Param.Wx.shareTitle),
          e
        );
      }
      setUserCloudStorage(e, t = 0) {}
      getOpenContext() {}
      requirePrivacyAuthorize(e) {}
      getSetting(t, i = "scope.WxFriendInteraction") {
        this.ch &&
          this.ch.getSetting({
            success(e) {
              e.authSetting[i]
                ? t && t(!0)
                : Laya.Browser.window.wx.authorize({
                    scope: i,
                    success() {
                      t && t(!0);
                    },
                    fail(e) {
                      t && t(!1);
                    },
                  });
            },
          });
      }
      openSetting(t, i = "scope.WxFriendInteraction") {
        this.ch &&
          this.ch.openSetting({
            success(e) {
              e = e.authSetting;
              t && t(e[i]);
            },
            fail(e) {},
          });
      }
      hasShortcutInstalled(t) {
        this.ch &&
          this.ch.queryShortcut({
            success(e) {
              t && t(e);
            },
            fail(e) {
              t && t(!1);
            },
          });
      }
      installShortcut(t) {
        this.ch &&
          this.ch.addToDesktop({
            success(e) {
              t && t(!0);
            },
            fail(e) {
              t && t(!1);
            },
          });
      }
    }
    class Pe extends e {
      constructor() {
        (super(...arguments), (this.interstitial_time = 0));
      }
      get h() {
        return c.CH.ZJ_HW;
      }
      vibrateShort(e = 0) {
        if (this.Global.shake_switch)
          try {
            window.overseas.adapter.shortVibrate();
          } catch (e) {}
      }
      vibrateLong() {
        if (this.Global.shake_switch)
          try {
            window.overseas.adapter.longVibrate();
          } catch (e) {}
      }
      showVideoAd(t = null, e, i = null) {
        this.videoCallback = t;
        try {
          window.overseas.advertising.showReward(
            () => {
              (i && i(), this.videoCallback, this.videoCallback(n.onSuccess));
            },
            (e) => {
              t && t(n.onError);
            },
          );
        } catch (e) {}
      }
      showInterstitialAd(t, e = !1, i, a) {
        if (!e) {
          if (
            Laya.Browser.now() - this.Global.go_game_time < this.SwitchM0.fist_screen_time ||
            Laya.Browser.now() - this.interstitial_time < this.SwitchM0.interval_screen_time
          )
            return void (t && t(!1));
          this.interstitial_time = Laya.Browser.now();
        }
        try {
          ((this.videoCallback = t),
            window.overseas.advertising.showInterstitial(
              () => {
                (a && a(),
                  (this.interstitial_time = Laya.Browser.now()),
                  this.videoCallback,
                  this.videoCallback(n.onSuccess));
              },
              (e) => {
                (t && t(n.onError), i && i());
              },
            ));
        } catch (e) {}
      }
      showToast(e, t = 0, i) {
        try {
          window.overseas.toast.show(e);
        } catch (e) {}
      }
    }
    class De extends a {
      init(e, t, i) {
        super.init(e, { videoId: "" }, () => {
          c.Var._Global.go_game_time = Laya.Browser.now();
        });
      }
    }
    class p extends class {
      static init() {
        ((this.mainCH = new c.Var.CH()),
          (this.mainCH.SwitchM0 = c.Var._SwitchM0),
          (this.mainCH.Global = c.Var._Global));
        var e = this.onWindow();
        this.mainCH.init(e);
      }
      static onWindow() {
        switch (this.mainCH.h) {
          case c.CH.WEIXIN:
          case c.CH.WX_VIDEO:
          case c.CH.WX_CC:
            return window.wx;
          case c.CH.QQ:
            return window.qq;
          case c.CH.ZJ:
            return window.tt;
          case c.CH.BAIDU:
            return window.swan;
          case c.CH.OPPO:
          case c.CH.VIVO:
          case c.CH.XIAOMI:
          case c.CH.HUAWEI:
          case c.CH.HONOR:
            return window.qg;
          case c.CH.MEIZU:
            return window.mz;
          case c.CH.UC:
            return window.uc;
          case c.CH.KUAI:
            return window.ks;
          case c.CH.BILI:
            return window.bl;
          case c.CH.ALIPAY:
            return window.my;
          case c.CH.JD:
            return window.jd;
          case c.CH.WEB_360:
            if (window.MINIGAMEAD && window.REWARD_VIDEO_AD)
              return { MINIGAMEAD: window.MINIGAMEAD, REWARD_VIDEO_AD: window.REWARD_VIDEO_AD };
            break;
          case c.CH.WEB_4399:
            return window.h5api;
          case c.CH.IOS_KESHENG:
          case c.CH.Android_233:
            return s;
        }
        return null;
      }
    } {}
    var v,
      C,
      Te,
      f,
      S,
      y,
      I,
      Re = function (e, r, o, h) {
        return new (o = o || Promise)(function (i, t) {
          function a(e) {
            try {
              n(h.next(e));
            } catch (e) {
              t(e);
            }
          }
          function s(e) {
            try {
              n(h.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function n(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof o
                  ? t
                  : new o(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          n((h = h.apply(e, r || [])).next());
        });
      };
    let Ge = { gid: "tt_snlh2", v: "1.0.0" };
    class V {
      static initKszt() {
        if (c.Var.show_dyzt && Laya.Browser.window.ks) {
          var t = Laya.Browser.window.ks.getLaunchOptionsSync().query;
          if (t) {
            let e = t.callback;
            t = { callback: (e = e || ""), query: t };
            JSON.stringify(t);
          }
          (V.reportNextDayOpen(),
            o.get(r.is_old_user) ||
              ((l.is_new_user = !0),
              o.set(r.is_old_user, 1),
              o.set(r.active_time, W.Time.getNow()),
              V.ksReport(V.event_type.active)));
        }
      }
      static ksReport(t, i) {
        if (c.Var.show_dyzt && Laya.Browser.window.ks) {
          var a = Laya.Browser.window.ks.getLaunchOptionsSync().query;
          let e = a && a.callback;
          (e ? (o.set(r.callback, e), W.ICache.saveData()) : (e = o.get(r.callback)),
            e
              ? (a && a.channel,
                i
                  ? ((a = {
                      event_type: t,
                      callback: e,
                      event_time: Laya.Browser.now(),
                      event_props: i,
                    }),
                    B.ksReport(a))
                  : ((i = { event_type: t, callback: e, event_time: Laya.Browser.now() }),
                    B.ksReport(i)))
              : (e = ""));
        }
      }
      static reportNextDayOpen() {
        W.ICache.checkIsNewDay() && o.get(r.is_old_user);
      }
      static gameAddReport() {
        (V.ksReport(V.event_type.game_addiction, {
          key_action_category1: 1,
          key_action_category2: 5,
          key_action_threshold1: 10,
          key_action_threshold2: 9e3,
        }),
          W.ICache.saveData());
      }
      static isToday() {
        var e, t;
        return (
          !!o.get(r.active_time) &&
          ((e = new Date(o.get(r.active_time))),
          (t = new Date()),
          e.getFullYear() === t.getFullYear()) &&
          e.getMonth() === t.getMonth() &&
          e.getDate() === t.getDate()
        );
      }
    }
    V.event_type = { active: 1, active_register: 2, game_addiction: 143 };
    class B {
      static login(t, i) {
        return Re(this, void 0, void 0, function* () {
          (t = null == t ? {} : t).gid = Ge.gid;
          let e = "";
          return (
            Laya.Browser.window.ks &&
              (e = Laya.Browser.window.ks.getLaunchOptionsSync().scene.toString()),
            (t.scene = e),
            B.post("login", { data: t, success: i }, null)
          );
        });
      }
      static post(e, i, a = !0, s = "GET") {
        return Re(this, void 0, void 0, function* () {
          var e = i.data;
          if (
            ((B.api_url +=
              "?event_type=" +
              e.event_type +
              "&event_time" +
              e.event_time +
              "&callback=" +
              e.callback),
            void 0 === e)
          )
            return !1;
          let t = new XMLHttpRequest();
          (a ? t.open(s, this.api_url, a) : t.open(s, this.api_url),
            t.setRequestHeader("content-type", "application/json"),
            t.send(JSON.stringify(e)),
            (t.onreadystatechange = function () {
              if (200 === t.status && 4 === t.readyState) {
                var e = JSON.parse(t.responseText);
                if (void 0 !== i.success) return i.success(e);
              } else if (200 !== t.status) return (i.error, i.error());
            }));
        });
      }
      static ksReport(e) {
        return B.post("ksReport", { data: e });
      }
    }
    function k() {
      c.Var.last_touch = Laya.Browser.now();
    }
    function Ee() {
      1 != c.Var._SwitchM0.auto_video_enable
        ? (Laya.timer.clear(null, Ee),
          Laya.stage.off(Laya.Event.MOUSE_DOWN, null, k),
          Laya.stage.off(Laya.Event.MOUSE_MOVE, null, k))
        : c.Var.isVideo ||
          (Laya.Browser.now() - c.Var.last_touch >= c.Var._SwitchM0.auto_video_delay &&
            (k(),
            L(() => {
              c.Var.onAutoVideoReward && c.Var.onAutoVideoReward();
            })));
    }
    function H(t) {
      p.mainCH.hasShortcutInstalled((e) => {
        (e && t && t(e), c.Var.onShortcutInstalled && c.Var.onShortcutInstalled(e));
      });
    }
    function M(e = !0, t = !0, i = !0, a = !0) {
      switch (
        (c.Var._Global.game_num++,
        (c.Var._Global.is_game_back = !0),
        (c.Var.isGaming = !0),
        p.mainCH.h)
      ) {
        case c.CH.WEIXIN:
          (l.is_new_user && ((l.is_new_user = !1), m.dyReport(m.event_type.active_register)),
            p.mainCH.stopGameRecorder(),
            Laya.timer.once(100, this, () => {
              e && p.mainCH.startGameRecorder();
            }),
            1 == c.Var._SwitchM0.enter_game_banner
              ? null != t &&
                (t
                  ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                    2 == c.Var._SwitchM0.HorizontalBanner &&
                      p.mainCH.showCustomAdWx(c.WxCustomAd.Carousel))
                  : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                    2 == c.Var._SwitchM0.HorizontalBanner &&
                      p.mainCH.hideCustomAdsWx(c.WxCustomAd.Carousel)))
              : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                2 == c.Var._SwitchM0.HorizontalBanner &&
                  p.mainCH.hideCustomAdsWx(c.WxCustomAd.Carousel)),
            1 == c.Var._SwitchM0.gameSingleCustomAd
              ? (null != a &&
                  (a
                    ? p.mainCH.showCustomAdWx(c.WxCustomAd.Right)
                    : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right)),
                null != i &&
                  (i
                    ? p.mainCH.showCustomAdWx(c.WxCustomAd.Left)
                    : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)))
              : (p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right),
                p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)));
          break;
        case c.CH.QQ:
          (1 == c.Var._SwitchM0.enter_game_banner
            ? null != t &&
              (t
                ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                  2 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBlockAd(c.QQBlockAd.Bottom))
                : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                  2 == c.Var._SwitchM0.HorizontalBanner &&
                    p.mainCH.hideBlockAd(c.QQBlockAd.Bottom)))
            : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
              2 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBlockAd(c.QQBlockAd.Bottom)),
            1 == c.Var._SwitchM0.gameSingleCustomAd &&
              (null != a &&
                (a
                  ? p.mainCH.showBlockAd(c.QQBlockAd.Right)
                  : p.mainCH.hideBlockAd(c.QQBlockAd.Right)),
              null != i) &&
              (i
                ? p.mainCH.showBlockAd(c.QQBlockAd.Left)
                : p.mainCH.hideBlockAd(c.QQBlockAd.Left)));
          break;
        case c.CH.ZJ:
          (l.is_new_user && ((l.is_new_user = !1), _.dyReport(_.event_type.active_register)),
            p.mainCH.stopGameRecorderManager(),
            Laya.timer.once(100, this, () => {
              e && p.mainCH.startGameRecorderManager();
            }),
            p.mainCH.hideBannerAd());
          break;
        case c.CH.KUAI:
          l.is_new_user && ((l.is_new_user = !1), V.ksReport(V.event_type.active_register));
          break;
        case c.CH.VIVO:
        case c.CH.OPPO:
          1 == c.Var._SwitchM0.icon_game
            ? null != i && (i ? d.showCustomIcon() : p.mainCH.hideCustomAds(c.CustomAdType.Icon))
            : p.mainCH.hideCustomAds(c.CustomAdType.Icon);
        case c.CH.XIAOMI:
          p.mainCH.hideBoxSuspendAd();
        default:
          1 == c.Var._SwitchM0.enter_game_banner
            ? null != t && (t ? p.mainCH.showBannerAd() : p.mainCH.hideBannerAd())
            : p.mainCH.hideBannerAd();
      }
    }
    function x(e, t, i) {
      p.mainCH.showToast(e, t, i);
    }
    function L(i, a, s, e) {
      if (c.Var.DebugWhite0) (a && a(), p.mainCH.showToast("暂无视频"));
      else if (c.Var.DebugWhite1) i && i();
      else {
        p.mainCH.h != c.CH.WEIXIN &&
          p.mainCH.h != c.CH.WX_VIDEO &&
          p.mainCH.h != c.CH.QQ &&
          p.mainCH.h != c.CH.IOS_KESHENG &&
          ((c.Var.isVideo = !0), (c.Var._Global.pause_video = !0), c.Var.onVideoStart) &&
          c.Var.onVideoStart();
        let t = !1;
        p.mainCH.showVideoAd((e) => {
          ((e != n.onSuccess && e != n.onError && e != n.onFail) ||
            ((t = !0),
            k(),
            (c.Var.isVideo = !1),
            (c.Var._Global.pause_video = !1),
            c.Var.onVideoStop && c.Var.onVideoStop(e)),
            e == n.onSuccess && i && i(),
            (e != n.onFail && e != n.onError) || (a && a(e)),
            e != n.onLoad ||
              t ||
              (s && s(),
              (c.Var.isVideo = !0),
              (c.Var._Global.pause_video = !0),
              c.Var.onVideoStart && c.Var.onVideoStart()));
        }, e);
      }
    }
    ((B.loginInfo = null),
      (B.api_url = "https://ad.partner.gifshow.com/track/activate"),
      (c.Event = void 0),
      ((f = c.Event || (c.Event = {})).dispatcher = new Laya.EventDispatcher()),
      (f.close_start_try = "close_start_try"),
      (f.close_agree = "close_agree"),
      (f.close_record = "close_record"),
      (f.close_chest = "close_chest"),
      (f.close_quick_click = "close_quick_click"),
      (f.close_turntable = "close_turntable"),
      (f.show_phy = "show_phy"),
      ((v || (v = {})).open = function (t, i, a, e) {
        if (
          (e = (t =
            W.LM.h == W.CH.OPPO && W.LM.onMiniGame() && e ? t.replace("res/atlas/", "") : t).split(
            "/",
          )).length <= 1
        )
          throw new Error(`输入路径"${t}"有误`);
        const s = e[e.length - 2],
          n = e[e.length - 1];
        ((e = e.slice(0, e.length - 1).join("/")),
          fairygui.UIPackage.loadPackage(
            e,
            Laya.Handler.create(this, () => {
              var e = fairygui.UIPackage.createObject(s, n, i);
              if (!e) throw new Error(`创建组件"${t}"失败，请检查路径，和是否在编辑器中设置为导出`);
              (e.makeFullScreen(),
                fairygui.GRoot.inst.addChild(e),
                e._pivotAsAnchor && e.setXY(e.width * e.pivotX, e.height * e.pivotY),
                a && a(e));
            }),
          ));
      }),
      (c.QuickClick = void 0),
      ((C = c.QuickClick || (c.QuickClick = {})).QuickClickH = "res/atlas/fgui/QuickClickH/Main"),
      (C.QuickClickV = "res/atlas/fgui/QuickClickV/Main"),
      (C.QuickClickTimeTotal = 6e4),
      (C.QuickClickRate = 4),
      (C.QuickClickGridWidth = 65),
      (C.QuickClickGridHeight = 80),
      (C.QuickClickBannerHeight = 115),
      (C.QuickClickDelay = 10),
      (C.OpenQuickClickUI = function (e, t, i, a, s, n) {
        v.open(
          e,
          class extends fairygui.GComponent {
            constructor() {
              (super(...arguments),
                (this.main = null),
                (this.btn_click = null),
                (this.progress = null),
                (this.ani_open = null),
                (this.lab_gold = null),
                (this.click_start = null),
                (this.click_count = 0),
                (this.show_ad = !1),
                (this.hide_ad = !1),
                (this.last_time = 0),
                (this.onOpenAniComplete = new Laya.Handler(this, () => {
                  (this.onChest && this.onChest(), Laya.timer.once(2e3, this, this.playHide));
                })),
                (this.isPlayVideo = c.Var._SwitchM0.quick_video_rate / 100 >= Math.random()));
            }
            onConstruct() {
              if (
                ((this.displayObject.zOrder = 99),
                !(this.btn_click && this.btn_click instanceof fairygui.GButton))
              )
                throw new Error("没有狂点按钮或btn_click组件不是按钮");
              if (!(this.progress && this.progress instanceof fairygui.GProgressBar))
                throw new Error("没有狂点进度条或progress组件不是进度条");
              if (!(this.ani_open && this.ani_open instanceof fairygui.Transition))
                throw new Error("没有宝箱打开动画或ani_open组件不是动画");
              if (!(this.lab_gold && this.lab_gold instanceof fairygui.GTextField))
                throw new Error("没有金币文本或lab_gold组件不是label");
              if (this.main) {
                let e = Laya.stage.width;
                (("landscape" != window.screenOrientation &&
                  "sensor_landscape" != window.screenOrientation) ||
                  (e = Laya.stage.height),
                  (this.main.scaleX = e / 640),
                  (this.main.scaleY = e / 640));
              }
              (this.btn_click.onClick(this, this.onBtnClick),
                Laya.timer.frameLoop(1, this, this.onUpdateProgress),
                Laya.timer.loop(1e3, this, this.onUpdateHide),
                (2 != c.Var._SwitchM0.quick_click_ui_type &&
                  3 != c.Var._SwitchM0.quick_click_ui_type) ||
                  Laya.timer.once(C.QuickClickTimeTotal, this, this.playHide),
                c.Var._SwitchM0.quick_click_ui_type,
                this.playShow());
            }
            dispose() {
              (this.onClose && this.onClose(),
                Laya.timer.clearAll(this),
                Laya.Tween.clearAll(this),
                c.Event.dispatcher.event(c.Event.close_quick_click),
                super.dispose());
            }
            playShow() {
              (this.setScale(0, 0),
                fairygui.GTween.to(0, 1, 0.25)
                  .setTarget(this, (e) => this.setScale(e, e))
                  .setEase(fairygui.EaseType.BackOut));
            }
            playHide() {
              this.btn_click.visible = !1;
              var e = fairygui.GTween.to(1, 0, 0.25);
              (e.setTarget(this, (e) => this.setScale(e, e)).setEase(fairygui.EaseType.BackIn),
                e.onComplete(this.dispose, this));
            }
            onBtnClick() {
              var e;
              Laya.timer.currTimer - this.last_time <= C.QuickClickDelay ||
                ((this.last_time = Laya.timer.currTimer),
                this.soundBtnPath
                  ? Laya.SoundManager.playSound(this.soundBtnPath, 1)
                  : Laya.SoundManager.playSound(W.LM.Res(5e4), 1),
                (this.progress.value += 10),
                100 <= this.progress.value
                  ? ((this.progress.value = 100),
                    Laya.timer.clearAll(this),
                    (1 == c.Var._SwitchM0.quick_click_ui_type &&
                      (1 != c.Var._SwitchM0.quick_click_ui_type || this.isPlayVideo)) ||
                      this.ani_open.play(this.onOpenAniComplete))
                  : this.progress.value >= c.Var._SwitchM0.quick_video_value
                    ? 1 != c.Var._SwitchM0.quick_click_ui_type ||
                      this.show_ad ||
                      ((this.show_ad = !0),
                      this.isPlayVideo &&
                        L(
                          (e = () => {
                            ((this.progress.value = 100),
                              Laya.timer.clearAll(this),
                              this.ani_open.play(this.onOpenAniComplete));
                          }),
                          e,
                        ))
                    : this.checkRate());
            }
            onUpdateProgress() {
              ((this.progress.value -= 0.04 * Math.min(16.6, Laya.timer.delta)),
                this.progress.value <= 0 && (this.progress.value = 0));
            }
            onUpdateHide() {
              this.hide_ad &&
                (2 == c.Var._SwitchM0.quick_click_ui_type
                  ? p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right)
                  : 3 == c.Var._SwitchM0.quick_click_ui_type && p.mainCH.hideClickBanner());
            }
            checkRate() {
              var e;
              this.show_ad ||
                (2 != c.Var._SwitchM0.quick_click_ui_type &&
                  3 != c.Var._SwitchM0.quick_click_ui_type) ||
                (this.click_count++,
                this.click_start
                  ? ((e = this.click_count / (W.Time.getDuan(this.click_start) / 1e3)),
                    this.click_count > 2 * C.QuickClickRate &&
                      e > C.QuickClickRate &&
                      ((this.show_ad = !0),
                      2 == c.Var._SwitchM0.quick_click_ui_type
                        ? p.mainCH.h == c.CH.WEIXIN &&
                          (((e = { x: Laya.stage.mouseX, y: Laya.stage.mouseY }).x =
                            (e.x * Laya.Browser.clientWidth) / Laya.stage.width -
                            C.QuickClickGridWidth / 2),
                          (e.y =
                            (e.y * Laya.Browser.clientHeight) / Laya.stage.height -
                            C.QuickClickGridHeight / 2),
                          p.mainCH.createCustomAdWx(c.WxCustomAd.Right, e.x, e.y, 0, !0),
                          Laya.timer.once(3e3, this, () => {
                            (p.mainCH.desCustomAdsWx(c.WxCustomAd.Right),
                              p.mainCH.createCustomAdWx(c.WxCustomAd.Right),
                              (this.hide_ad = !0));
                          }))
                        : 3 == c.Var._SwitchM0.quick_click_ui_type &&
                          p.mainCH.h == c.CH.WEIXIN &&
                          (((e = { x: Laya.stage.mouseX, y: Laya.stage.mouseY }).x = 0),
                          (e.y =
                            (e.y * Laya.Browser.clientHeight) / Laya.stage.height -
                            C.QuickClickBannerHeight / 2),
                          p.mainCH.createClickBanner(e.x, e.y),
                          Laya.timer.once(3e3, this, () => {
                            (p.mainCH.revertClickBanner(), (this.hide_ad = !0));
                          }))))
                  : (this.click_start = W.Time.getNow()));
            }
          },
          (e) => {
            (a && a(),
              (e.lab_gold.text = "+" + W.Str.toGold(t)),
              (e.onChest = i),
              (e.onClose = s),
              (e.soundBtnPath = n));
          },
          c.Var.isOppoSub,
        );
      }));
    const Ne = L;
    ((c.VideoPop = void 0),
      ((Te = c.VideoPop || (c.VideoPop = {})).VideoPopPath = null),
      (Te.showVideoAd = function (e, t, i, a, s) {
        if (c.Var._SwitchM0.showVideoTip()) {
          s = s || Te.VideoPopPath;
          if (!s) throw new Error("没有传入弹窗UI的路径");
          ((n = e),
            (r = t),
            (o = i),
            (h = a),
            v.open(
              s,
              class extends fairygui.GComponent {
                onConstruct() {
                  if (!(this.btn_video && this.btn_video instanceof fairygui.GButton))
                    throw new Error("没有确认播放按钮或btn_video组件不是按钮");
                  (this.btn_video.onClick(this, this.onBtnVideo),
                    this.btn_no && this.btn_no.onClick(this, this.dispose),
                    this.btn_close && this.btn_close.onClick(this, this.dispose));
                }
                onBtnVideo() {
                  Ne(
                    () => {
                      (this.success && this.success(), Laya.timer.callLater(this, this.dispose));
                    },
                    this.fail,
                    this.load,
                    this.show_toast,
                  );
                }
              },
              (e) => {
                ((e.success = n), (e.fail = r), (e.load = o), (e.show_toast = h));
              },
              c.Var.isOppoSub,
            ));
        } else Ne(e, t, i, a);
        var n, r, o, h;
      }),
      (c.NativeAd = void 0),
      ((S = c.NativeAd || (c.NativeAd = {})).ScreenHPath = "res/atlas/fgui/NativeAd/ScreenH"),
      (S.ScreenVPath = "res/atlas/fgui/NativeAd/ScreenV"),
      (S.showScreen = function (e, t, i) {
        if (!e) throw new Error("没有传入弹窗UI的路径");
        var a, s, n;
        ((a = class extends fairygui.GComponent {
          constructor() {
            (super(...arguments),
              (this.btn_sure = null),
              (this.iv_icon = null),
              (this.lb_title = null),
              (this.lb_des = null),
              (this.btn_close = null),
              (this.btn_look = null),
              (this.lb_btn = null));
          }
          onConstruct() {
            ((this.displayObject.zOrder = 99), this.initData(), this.initBtn());
          }
          initBtn() {
            ((c.Var._Global.isNative = !0),
              this.btn_close && this.btn_close.onClick(this, this.onBtnClose),
              this.btn_look && this.btn_look.onClick(this, this.onBtnLook),
              this.btn_sure && this.btn_sure.onClick(this, this.onBtnLook),
              this.iv_icon && this.iv_icon.onClick(this, this.onBtnLook));
          }
          initData() {
            if (p.mainCH.adContent) {
              let e = p.mainCH.adContent.imgUrlList[0] || p.mainCH.adContent.icon;
              (-1 < (e = -1 < e.indexOf("jpg?") ? e.split("jpg?")[0] + "jpg" : e).indexOf("png?") &&
                (e = e.split("png?")[0] + "png"),
                this.iv_icon && (this.iv_icon.url = e),
                this.lb_title && (this.lb_title.text = p.mainCH.adContent.title),
                this.lb_des &&
                  (this.lb_des.text =
                    p.mainCH.h == c.CH.HUAWEI
                      ? p.mainCH.adContent.source
                      : p.mainCH.adContent.desc),
                Laya.timer.callLater(this, () => {
                  p.mainCH.showNativeAd();
                }));
            }
          }
          onBtnLook() {
            (p.mainCH.clickNativeAd(), (c.Var._Global.isNativeAd = !0));
          }
          onBtnClose() {
            (this.dispose(),
              p.mainCH.h == c.CH.HUAWEI &&
                (p.mainCH.destroyNativeAd(), (c.Var._Global.isNative = !1)));
          }
        }),
          (s = t),
          (n = i),
          v.open(
            e,
            a,
            (e) => {
              ((e.success = s), (e.fail = n));
            },
            c.Var.isOppoSub,
          ));
      }),
      (c.NativeAdHonor = void 0),
      ((f = c.NativeAdHonor || (c.NativeAdHonor = {})).ScreenHHPath =
        "res/atlas/fgui/NativeAd/ScreenHH"),
      (f.ScreenHVPath = "res/atlas/fgui/NativeAd/ScreenHV"),
      (f.showScreen = function (e, t, i) {
        if (!e) throw new Error("没有传入弹窗UI的路径");
        var a, s, n;
        ((a = class extends fairygui.GComponent {
          constructor() {
            (super(...arguments), (this.iv_bg = null));
          }
          onConstruct() {
            ((this.displayObject.zOrder = 99), this.initData());
          }
          initData() {
            this.iv_bg &&
              ((this.iv_bg.x = c.Var._Global.nativeAdStyle.left),
              (this.iv_bg.y = c.Var._Global.nativeAdStyle.top),
              (this.iv_bg.width = c.Var._Global.nativeAdStyle.width),
              (this.iv_bg.height = c.Var._Global.nativeAdStyle.height));
          }
          onBtnClose() {
            this.dispose();
          }
        }),
          (s = t),
          (n = i),
          v.open(
            e,
            a,
            (e) => {
              ((e.success = s), e.success && e.success(e), (e.fail = n));
            },
            c.Var.isOppoSub,
          ));
      }),
      (c.Navigate = void 0),
      ((S = c.Navigate || (c.Navigate = {})).path = "res/atlas/fgui/Navigate/Main"),
      (S.showNavigate = function (e, t, i, a, s) {
        if (!e) throw new Error("没有传入弹窗UI的路径");
        var n, r, o, h, d;
        ((n = class extends fairygui.GComponent {
          constructor() {
            (super(...arguments),
              (this.is_na_awarded = !1),
              (this.main = null),
              (this.btn_award = null),
              (this.btn_go = null),
              (this.btn_close = null),
              (this.btn_awarded = null));
          }
          onConstruct() {}
          onOpen() {
            if (!(this.btn_award && this.btn_award instanceof fairygui.GButton))
              throw new Error("没有btn_award或btn_award组件不是按钮");
            if (!(this.btn_go && this.btn_go instanceof fairygui.GButton))
              throw new Error("没有btn_go或btn_go组件不是按钮");
            if (!(this.btn_close && this.btn_close instanceof fairygui.GButton))
              throw new Error("没有btn_close或btn_close组件不是按钮");
            if (!(this.btn_awarded && this.btn_awarded instanceof fairygui.GButton))
              throw new Error("没有btn_awarded或btn_awarded组件不是按钮");
            if (((this.displayObject.zOrder = 2), this.main)) {
              let e = Laya.stage.width;
              (("landscape" != window.screenOrientation &&
                "sensor_landscape" != window.screenOrientation) ||
                (e = Laya.stage.height),
                (this.main.scaleX = e / 640),
                (this.main.scaleY = e / 640));
            }
            (this.initData(), this.initBtn());
          }
          initData() {
            c.Var._Global.is_navigate_award
              ? ((this.btn_award.visible = !this.is_na_awarded),
                (this.btn_awarded.visible = this.is_na_awarded),
                (this.btn_go.visible = !1))
              : ((this.btn_award.visible = !1),
                (this.btn_awarded.visible = !1),
                (this.btn_go.visible = !0));
          }
          initBtn() {
            (this.btn_close.onClick(this, this.onBtnClose),
              this.btn_go.onClick(this, this.onBtnGo),
              this.btn_award.onClick(this, this.onBtnAward));
          }
          onBtnClose() {
            (this.soundBtnPath && Laya.SoundManager.playSound(this.soundBtnPath, 1),
              this.dispose(),
              this.close && this.close());
          }
          onBtnGo() {
            (this.soundBtnPath && Laya.SoundManager.playSound(this.soundBtnPath, 1),
              p.mainCH.navigateToScene(() => {}),
              this.dispose(),
              this.close && this.close());
          }
          onBtnAward() {
            (this.soundBtnPath && Laya.SoundManager.playSound(this.soundBtnPath, 1),
              this.award && this.award(),
              this.dispose(),
              this.close && this.close());
          }
        }),
          (r = t),
          (o = i),
          (h = a),
          (d = s),
          v.open(
            e,
            n,
            (e) => {
              ((e.soundBtnPath = r),
                (e.is_na_awarded = o),
                (e.award = h),
                (e.close = d),
                e.onOpen());
            },
            c.Var.isOppoSub,
          ));
      }),
      (c.CheckIn = void 0),
      ((y = c.CheckIn || (c.CheckIn = {})).CheckInPath = "res/atlas/fgui/CheckIn/Main"),
      (y.Mul = 2),
      (y.DayName = [
        "ui://CheckIn/1",
        "ui://CheckIn/2",
        "ui://CheckIn/3",
        "ui://CheckIn/4",
        "ui://CheckIn/5",
        "ui://CheckIn/6",
        "ui://CheckIn/qiand_ (13)",
      ]),
      (y.DayGoods = [
        "ui://CheckIn/qiand_ (22)",
        "",
        "ui://CheckIn/qiand_ (21)",
        "ui://CheckIn/qiand_ (23)",
        "ui://CheckIn/qiand_ (25)",
        "ui://CheckIn/qiand_ (26)",
        "",
      ]),
      (y.DayPrize = [
        "ui://CheckIn/x100",
        "ui://CheckIn/x1",
        "ui://CheckIn/x150",
        "ui://CheckIn/x200",
        "ui://CheckIn/x300",
        "ui://CheckIn/x400",
        "ui://CheckIn/qiand_ (11)",
      ]),
      (y.GetToast = { 1: "恭喜获得武器", 2: "恭喜获得角色", 3: "恭喜获得金币" }),
      (y.PtToast = {
        item: "奖励已领取，额外赠送金钱 x",
        gold: "恭喜获得金钱 x",
        diamond: "恭喜获得砖石 x",
      }),
      (y.OpenCheckInUI = function (e, t, i, a, s) {
        v.open(
          e,
          (function (e) {
            e = e || fairygui.GComponent;
            return class extends e {
              constructor() {
                (super(...arguments),
                  (this.btn_close = null),
                  (this.btn_get = null),
                  (this.btn_mul = null),
                  (this.state = null),
                  (this.item0 = null),
                  (this.item1 = null),
                  (this.item2 = null),
                  (this.item3 = null),
                  (this.item4 = null),
                  (this.item5 = null),
                  (this.item6 = null),
                  (this.onClose = null),
                  (this.onChest = null));
              }
              onConstruct() {
                if (
                  (super.onConstruct(),
                  !(this.btn_close && this.btn_close instanceof fairygui.GButton))
                )
                  throw new Error("没btn_close点按钮或btn_close组件不是按钮");
                if (!(this.btn_get && this.btn_get instanceof fairygui.GButton))
                  throw new Error("没btn_get点按钮或btn_get组件不是按钮");
                if (!(this.btn_mul && this.btn_mul instanceof fairygui.GButton))
                  throw new Error("没有btn_mul按钮或btn_mul组件不是按钮");
                for (let e = 0; e < 7; e++)
                  if (!(this["item" + e] && this["item" + e] instanceof fairygui.GComponent))
                    throw new Error(`没有${"item" + e}按钮或${"item" + e}不是组件`);
                (this.btn_close.onClick(this, this.dispose),
                  this.btn_get.onClick(this, this.onBtnGet),
                  this.btn_mul.onClick(this, this.onBtnMul),
                  this.refresh());
              }
              dispose() {
                (this.onClose && this.onClose(this),
                  Laya.timer.clearAll(this),
                  Laya.Tween.clearAll(this),
                  super.dispose());
              }
              onBtnGet() {
                (Laya.SoundManager.playSound(W.LM.Res(5e4), 1), this.getCheckin(1));
              }
              onBtnMul() {
                (Laya.SoundManager.playSound(W.LM.Res(5e4), 1),
                  L(() => {
                    this.getCheckin(y.Mul);
                  }));
              }
              onBtnToast() {
                x("今日已签到，请明日再来~");
              }
              refresh() {
                ((this.list_data = W.CheckinTask.getList()), W.CheckinTask.refresh());
                for (let e = 0; e < 7; e++) this.refreshItem(this["item" + e], e);
                this.refreshBtn();
              }
              refreshItem(e, t) {
                var i = this.list_data[t].prt,
                  i = W.CheckinTask.getState(i),
                  a = e.getChild("dayName"),
                  s = e.getChild("dayGoods"),
                  n = e.getChild("dayPrize"),
                  r = e.getController("state");
                if (a instanceof fairygui.GLoader) a.url = y.DayName[t];
                else {
                  if (!(a instanceof fairygui.GBasicTextField))
                    throw new Error("dayName组件必须是图片装载器或文本");
                  a.text = y.DayName[t];
                }
                if (!(s instanceof fairygui.GLoader))
                  throw new Error("dayGoods组件必须是图片装载器");
                if (((s.url = y.DayGoods[t]), n instanceof fairygui.GLoader)) n.url = y.DayPrize[t];
                else {
                  if (!(n instanceof fairygui.GBasicTextField))
                    throw new Error("dayPrize组件必须是图片装载器或文本");
                  n.text = y.DayPrize[t];
                }
                if (!(r instanceof fairygui.Controller))
                  throw new Error("state组件必须是状态控制器");
                ((r.selectedIndex = i),
                  this.offClick(this, this.onBtnGet),
                  this.offClick(this, this.onBtnToast),
                  1 == i ? e.onClick(this, this.onBtnGet) : e.onClick(this, this.onBtnToast));
              }
              refreshBtn() {
                let e = !0,
                  t = null;
                for (var i = 0; i < this.list_data.length; i++) {
                  var a = this.list_data[i];
                  1 == W.CheckinTask.getState(a.prt) && ((t = a), (e = !1));
                }
                this.state &&
                  this.state instanceof fairygui.Controller &&
                  ((this.state.selectedIndex = e ? 1 : 0), !e) &&
                  t &&
                  "item" == t.pt &&
                  (this.state.selectedIndex = 2);
              }
              getCheckin(e) {
                this.state &&
                  this.state instanceof fairygui.Controller &&
                  (this.state.selectedIndex = 1);
                for (var t = 0; t < this.list_data.length; t++) {
                  var i = this.list_data[t];
                  if (1 == W.CheckinTask.getState(i.prt))
                    return (
                      W.CheckinTask.completeTask(i.prt),
                      this.refresh(),
                      this.mergeItemByTask(i, e),
                      void W.ICache.saveData()
                    );
                }
              }
              mergeItemByTask(e, t = 1) {
                var i;
                ("item" == e.pt
                  ? ((i = W.ItemBox.getItemByID(e.eid)),
                    2 != W.ItemBox.getItemState(i.id).state
                      ? (W.ItemBox.incItem(i, 1),
                        x(y.GetToast[i.sid]),
                        this.onChest && this.onChest(this, i, e, e.pq * t))
                      : (x(y.PtToast[e.pt] + e.pq * t),
                        W.ICache.addGold(e.pq * t),
                        this.onChest && this.onChest(this, "gold", e, e.pq * t)))
                  : ("gold" == e.pt
                      ? (W.ICache.addGold(e.pq * t), x(y.PtToast[e.pt] + e.pq * t))
                      : "diamond" == e.pt &&
                        (W.ICache.addDiamond(e.pq * t), x(y.PtToast[e.pt] + e.pq * t)),
                    this.onChest && this.onChest(this, e.pt, e, e.pq * t)),
                  W.ICache.saveData(),
                  this.dispose());
              }
            };
          })(s),
          (e) => {
            (i && i(e), (e.onChest = t), (e.onClose = a));
          },
          c.Var.isOppoSub,
        );
      }),
      (c.TurnTable = void 0),
      ((I = c.TurnTable || (c.TurnTable = {})).TurnTablePath = "res/atlas/fgui/TurnTable/Main"),
      (I.RewardSids = [{ sids: [1], cts: [1] }]),
      (I.ResultIndex = 1),
      (I.MaxImg = ["ui://TurnTable/lucky_ (20)", "ui://TurnTable/lucky_ (20)"]),
      (I.MaxText = ["ui://TurnTable/lucky_ (14)", "ui://TurnTable/lucky_ (14)"]),
      (I.MaxMul = [200, 200]),
      (I.MaxType = ["gold", "gold"]),
      (I.MulList = [100, 1, 400, 1, 300, 200]),
      (I.ImgList = [
        "ui://TurnTable/lucky_ (12)",
        "ui://TurnTable/lucky_ (20)",
        "ui://TurnTable/lucky_ (13)",
        "ui://TurnTable/lucky_ (19)",
        "ui://TurnTable/lucky_ (22)",
        "ui://TurnTable/lucky_ (21)",
      ]),
      (I.TextList = [
        "ui://TurnTable/x100",
        "ui://TurnTable/lucky_ (15)",
        "ui://TurnTable/x400",
        "ui://TurnTable/lucky_ (14)",
        "ui://TurnTable/x300",
        "ui://TurnTable/x200",
      ]),
      (I.ResultType = ["gold", "gold", "gold", "gold", "gold", "gold"]),
      (I.RewardScale = 1),
      (I.BestRewards = [1, 3]),
      (I.OpenTurnTableUI = function (e, t, i, a, s) {
        v.open(
          e,
          (function (e) {
            e = e || fairygui.GComponent;
            return class extends e {
              constructor() {
                (super(...arguments),
                  (this.btn_close = null),
                  (this.btn_close1 = null),
                  (this.btn_free_start = null),
                  (this.btn_video_start = null),
                  (this.btn_center_start = null),
                  (this.table = null),
                  (this.lab_hint = null),
                  (this.state = null),
                  (this.progress = null),
                  (this.num = null),
                  (this.item0 = null),
                  (this.item1 = null),
                  (this.item2 = null),
                  (this.item3 = null),
                  (this.item4 = null),
                  (this.item5 = null),
                  (this.onClose = null),
                  (this.onChest = null),
                  (this.rewards = [null, null, null, null, null, null]),
                  (this.is_turn = !1),
                  (this.is_max_award = !1),
                  (this.result_handler = new Laya.Handler(this, this.showResult)));
              }
              onConstruct() {
                if (
                  (super.onConstruct(),
                  !(this.btn_close && this.btn_close instanceof fairygui.GButton))
                )
                  throw new Error("没btn_close点按钮或btn_close组件不是按钮");
                if (!(this.btn_free_start && this.btn_free_start instanceof fairygui.GButton))
                  throw new Error("没btn_free_start点按钮或btn_free_start组件不是按钮");
                if (!(this.btn_video_start && this.btn_video_start instanceof fairygui.GButton))
                  throw new Error("没btn_video_start点按钮或btn_video_start组件不是按钮");
                if (!(this.table && this.table instanceof fairygui.GComponent))
                  throw new Error("没有table或table不是组件");
                if (!(this.lab_hint && this.lab_hint instanceof fairygui.GBasicTextField))
                  throw new Error("没有lab_hint或lab_hint不是文本");
                if (!(this.state && this.state instanceof fairygui.Controller))
                  throw new Error("没有state或state不是控制器");
                for (let e = 0; e < 6; e++)
                  if (!(this["item" + e] && this["item" + e] instanceof fairygui.GComponent))
                    throw new Error(`没有${"item" + e}或${"item" + e}不是组件`);
                (this.btn_close.onClick(this, this.dispose),
                  this.btn_close1 &&
                    this.btn_close1 instanceof fairygui.GButton &&
                    this.btn_close1.onClick(this, this.dispose),
                  this.btn_free_start.onClick(this, this.onBtnFree),
                  this.btn_video_start.onClick(this, this.onBtnVideo),
                  this.btn_center_start &&
                    this.btn_center_start instanceof fairygui.GButton &&
                    this.btn_center_start.onClick(this, this.onBtnCenter),
                  Laya.timer.loop(1, this, this.updateUI),
                  (this.is_turn = !1),
                  (this.is_max_award = !1),
                  this.setRewardSkin(),
                  this.refreshData());
              }
              dispose() {
                (this.onClose && this.onClose(this),
                  Laya.timer.clearAll(this),
                  Laya.Tween.clearAll(this),
                  Laya.Tween.clearAll(this.table),
                  super.dispose());
              }
              onBtnFree() {
                (Laya.SoundManager.playSound(W.LM.Res(5e4), 1),
                  this.is_turn ||
                    (o.get(r.free_turn)
                      ? ((this.is_turn = !0),
                        o.set(r.free_turn, 0),
                        o.add(r.turn_num, 1),
                        this.startTable(),
                        this.refreshData())
                      : (this.state.selectedIndex = 1)));
              }
              onBtnVideo() {
                (Laya.SoundManager.playSound(W.LM.Res(5e4), 1),
                  this.is_turn ||
                    L(() => {
                      ((this.is_turn = !0),
                        o.add(r.turn_num, 1),
                        this.startTable(),
                        this.refreshData());
                    }));
              }
              onBtnCenter() {
                (Laya.SoundManager.playSound(W.LM.Res(5e4), 1),
                  this.is_turn ||
                    (0 == this.state.selectedIndex ? this.onBtnFree() : this.onBtnVideo()));
              }
              refreshData() {
                ((this.lab_hint.text = 3 - o.get(r.turn_num) + "次之后必得最佳奖励"),
                  this.num && (this.num.selectedIndex = o.get(r.turn_num)),
                  this.progress && (this.progress.value = (o.get(r.turn_num) / 3) * 100 + 1),
                  3 - o.get(r.turn_num) == 0 && (this.lab_hint.text = "本次获得最佳奖励"),
                  o.get(r.free_turn)
                    ? ((this.lab_hint.text = "每日登录可免费抽奖1次"),
                      (this.state.selectedIndex = 0))
                    : (this.state.selectedIndex = 1));
              }
              updateUI() {
                this.is_turn && this.checkPointerAngel();
              }
              checkPointerAngel() {
                var e = ~~Math.abs(this.table.rotation) % 360;
                let t = 0;
                if (328 <= e || e <= 28) t = 0;
                else if (28 < e && e <= 88) t = 1;
                else if (88 < e && e <= 148) t = 2;
                else if (148 < e && e <= 208) t = 3;
                else if (208 < e && e <= 268) t = 4;
                else {
                  if (!(268 < e && e <= 328)) return;
                  t = 5;
                }
                this.lastIndex != t &&
                  ((e = this.table.getChild("item" + t)),
                  this.setItemData(e, 1),
                  null != this.lastIndex &&
                    null != this.lastIndex &&
                    ((e = this.table.getChild("item" + this.lastIndex)), this.setItemData(e, 0)),
                  (this.lastIndex = t));
              }
              setItemData(e, t) {
                e = e.getChild("light");
                e && (e.visible = !!t);
              }
              setRewardSkin() {
                let t = 0;
                for (let e = 0; e < I.BestRewards.length; e++)
                  "item" == I.ResultType[I.BestRewards[e]] &&
                    (I.RewardSids[t] &&
                      (this.rewards[I.BestRewards[e]] = o.getLockItemByArr(
                        I.RewardSids[t].sids,
                        I.RewardSids[t].cts,
                      )),
                    this.rewards[I.BestRewards[e]]
                      ? (I.ImgList[I.BestRewards[e]] = I.GetImg(this.rewards[I.BestRewards[e]]))
                      : ((this.rewards[I.BestRewards[e]] = null),
                        (I.MulList[I.BestRewards[e]] = I.MaxMul[t]),
                        (I.ImgList[I.BestRewards[e]] = I.MaxImg[t]),
                        (I.TextList[I.BestRewards[e]] = I.MaxText[t]),
                        (I.ResultType[I.BestRewards[e]] = I.MaxType[t])),
                    t++);
                for (var e = 0; e < 6; e++) this.showSkin(e);
              }
              showSkin(e) {
                var t = this.table.getChild("item" + e),
                  i = t.getChild("ivAward"),
                  t = t.getChild("lbAward");
                if (!(i instanceof fairygui.GLoader))
                  throw new Error("ivAward组件必须是图片装载器");
                if (((i.url = I.ImgList[e]), t instanceof fairygui.GLoader)) t.url = I.TextList[e];
                else {
                  if (!(t instanceof fairygui.GBasicTextField))
                    throw new Error("lbAward组件必须是图片装载器或文本");
                  t.text = I.TextList[e];
                }
                i.setScale(
                  "item" == I.ResultType[e] ? I.RewardScale : 1,
                  "item" == I.ResultType[e] ? I.RewardScale : 1,
                );
              }
              startTable() {
                if ((this.resetTable(), (this.is_max_award = !1), 0 < I.BestRewards.length))
                  if (3 <= o.get(r.turn_num))
                    ((this.is_max_award = !0),
                      (I.ResultIndex = I.BestRewards[W.Ran.int(0, I.BestRewards.length - 1)]));
                  else {
                    var a = [0, 1, 2, 3, 4, 5],
                      e = [];
                    for (let i = 0; i < a.length; i++) {
                      let t = !1;
                      for (let e = 0; e < I.BestRewards.length; e++)
                        if (a[i] == I.BestRewards[e]) {
                          t = !0;
                          break;
                        }
                      t || e.push(a[i]);
                    }
                    I.ResultIndex = e[W.Ran.int(0, e.length - 1)];
                  }
                var t = 1e3 * (4 * Math.random() + 4),
                  i = 5 + ~~(5 * Math.random()),
                  s = 60 * I.ResultIndex + W.Ran.intR(-25, 25);
                this.rotateTable(s + 360 * i, t);
              }
              resetTable() {
                this.table.rotation = 0;
              }
              rotateTable(e, t) {
                Laya.Tween.to(
                  this.table,
                  { rotation: e },
                  t,
                  Laya.Ease.cubicOut,
                  this.result_handler,
                );
              }
              showResult() {
                var e;
                ((this.is_turn = !1),
                  this.is_max_award && o.set(r.turn_num, 0),
                  this.refreshData(),
                  "item" == I.ResultType[I.ResultIndex]
                    ? (W.ItemBox.incItem(this.rewards[I.ResultIndex]),
                      this.onChest && this.onChest(this, this.rewards[I.ResultIndex], 1),
                      Laya.timer.once(800, this, () => {
                        this.setRewardSkin();
                      }))
                    : ((e = I.MulList[I.ResultIndex]),
                      this.onChest && this.onChest(this, I.ResultType[I.ResultIndex], e)),
                  W.ICache.saveData());
              }
            };
          })(s),
          (e) => {
            (i && i(e), (e.onChest = t), (e.onClose = a));
          },
          c.Var.isOppoSub,
        );
      }),
      (c.Log = void 0));
    {
      var O = c.Log || (c.Log = {});
      let a = null,
        s = null,
        i = Date.now();
      function P() {
        return {
          WVer: W.Mem.v,
          AdVer: c.Var._Param.YW.GAME_VERSION,
          n: W.M2.p.n,
          debug: c.Var.DebugSwitch0 || c.Var.DebugSwitch1 || c.Var.DebugWhite0 || c.Var.DebugWhite1,
        };
      }
      function D(e) {
        let t = null;
        var i;
        switch (typeof e) {
          case "string":
            t = e;
            break;
          case "object":
            t = (function (e) {
              const i = new WeakSet();
              return JSON.stringify(e, (e, t) => {
                if ("object" == typeof t && null !== t) {
                  if (i.has(t)) return "[Circular]";
                  i.add(t);
                }
                return "function" == typeof t
                  ? `[function:${t.name}]`
                  : "symbol" == typeof t
                    ? t.toString()
                    : t;
              });
            })(
              ((i = e),
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      { message: i.message, name: i.name, stack: i.stack },
                      i.code && { code: i.code },
                    ),
                    i.fileName && { fileName: i.fileName },
                  ),
                  i.lineNumber && { lineNumber: i.lineNumber },
                ),
                i,
              )),
            );
            break;
          default:
            t = String(e);
        }
        return t;
      }
      ((O.globalErrorListener = function (e) {
        O.error("global", e);
      }),
        (O.rejectionErrorListener = function (e) {
          e && e.reason
            ? O.error("unhandledrejection", e.reason)
            : e
              ? O.error("unhandledrejection", e)
              : O.error("unhandledrejection", "null");
        }),
        (O.layaLoaderErrorListener = function (e) {
          O.error("Laya.loader", e);
        }),
        (O.memoryWarningListener = function (e) {
          var e = null != e && "object" == typeof e ? e : { res: e },
            t = (e) => (isNaN(e) ? "NaN" : Math.floor((e / 1048576) * 100) / 100),
            t =
              ((e.gpuMemory = t(Laya.Resource.gpuMemory)),
              (e.cpuMemory = t(Laya.Resource.cpuMemory)),
              Date.now() - i);
          ((e.duration = `${Math.floor(t / 6e4)}m${Math.floor((t / 1e3) % 60)}s`),
            (e.grade = W.ICache.getGrade()),
            O.warn("memorywarning", e));
        }),
        (O.consoleErrorListener = null),
        (O.chTryCatchErrorListener = function (e, t) {
          if (null != t && "object" == typeof t) {
            var i = {};
            for (const s of Object.getOwnPropertyNames(t))
              if ("__proto__" !== s && "constructor" !== s && "prototype" !== s) {
                var a = Object.getOwnPropertyDescriptor(t, s);
                if (a && a.enumerable)
                  if (a.get || a.set) Object.defineProperty(i, s, a);
                  else {
                    const n = t[s];
                    "function" == typeof n
                      ? (i[s] = (function (s, n, r) {
                          return function () {
                            const t = [];
                            for (let e = 0; e < arguments.length; e++) {
                              var i = arguments[e];
                              ("vibrateShort" == r ||
                                "object" != typeof i ||
                                (i.fail && "function" != typeof i.fail) ||
                                (i.fail = (function (e, i, a) {
                                  return function () {
                                    var t = [];
                                    for (let e = 0; e < arguments.length; e++) t.push(arguments[e]);
                                    if (
                                      (O.warn(`ch.${i}.fail`, {
                                        args: a,
                                        reason: t,
                                        stack: new Error().stack,
                                      }),
                                      e)
                                    )
                                      return e.apply(null, t);
                                  };
                                })(i.fail, r, t)),
                                t.push(i));
                            }
                            let e = void 0;
                            try {
                              (e = n.apply(s, t)) &&
                                e.catch &&
                                "function" == typeof e.catch &&
                                e.catch(function (e) {
                                  e = null != e && "object" == typeof e ? e : { error: e };
                                  ((e.args = t), O.error("ch." + r, e));
                                });
                            } catch (e) {
                              var a = null != e && "object" == typeof e ? e : { error: e };
                              ((a.args = t), O.error("ch." + r, a));
                            }
                            return e;
                          };
                        })(t, n, s))
                      : Object.defineProperty(i, s, {
                          get: () => n,
                          enumerable: a.enumerable,
                          configurable: !0,
                        });
                  }
              }
            e.ch = i;
          }
        }),
        (O.onErrorCallback = null),
        (O.init = function () {
          p.mainCH &&
            ((a =
              a ||
              p.mainCH.getGameLogManager({
                commonInfo: P(),
                debug: !0,
                success: function () {},
                fail: function () {},
              })) || (s = p.mainCH.getRealtimeLogManager({ syncToConsole: c.Var.DebugWhite1 })),
            (null == a && null == s) ||
              (null != O.globalErrorListener &&
                (p.mainCH.onError(function (e) {
                  (O.onErrorCallback && O.onErrorCallback(e), O.globalErrorListener(e));
                }),
                window) &&
                window.addEventListener &&
                window.addEventListener("error", function (e) {
                  (O.onErrorCallback && O.onErrorCallback(e), O.globalErrorListener(e));
                }),
              null != O.rejectionErrorListener &&
                (p.mainCH.onUnhandledRejection(function (e) {
                  (O.onErrorCallback && O.onErrorCallback(e), O.rejectionErrorListener(e));
                }),
                window) &&
                window.addEventListener &&
                window.addEventListener("unhandledrejection", function (e) {
                  (O.onErrorCallback && O.onErrorCallback(e), O.rejectionErrorListener(e));
                }),
              O.layaLoaderErrorListener &&
                Laya.loader.on(Laya.Event.ERROR, null, O.layaLoaderErrorListener),
              O.memoryWarningListener && p.mainCH.onMemoryWarning(O.memoryWarningListener),
              O.consoleErrorListener && (console.error = O.consoleErrorListener),
              O.chTryCatchErrorListener && O.chTryCatchErrorListener(p.mainCH, p.mainCH.ch)));
        }),
        (O.error = function (e, t) {
          var i;
          (a && a.log({ level: "error", key: e, value: D(t) }),
            s && (((i = P()).value = e + ":" + D(t)), s.error(i)));
        }),
        (O.warn = function (e, t) {
          var i;
          (a && a.log({ level: "warn", key: e, value: D(t) }),
            s && (((i = P()).value = e + ":" + D(t)), s.warn(i)));
        }),
        (O.info = function (e, t) {
          var i;
          (a && a.log({ level: "info", key: e, value: D(t) }),
            s && (((i = P()).value = e + ":" + D(t)), s.info(i)));
        }));
    }
    return (
      (c.AlipayCH = class extends We {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.Alipay.videoId,
              bannerId: c.Var._Param.Alipay.bannerId,
              insertId: c.Var._Param.Alipay.insertId,
            },
            () => {
              (c.Var.DebugWhite0 ||
                c.Var.DebugWhite1 ||
                (this.createVideoAd(), this.createInterstitialAd(), this.createBannerAd()),
                this.getLaunchOptions(),
                this.onShowAlways(),
                (c.Var._Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.Android233CH = class extends G {
        init(e, t, i) {
          super.init(e, { videoId: "" }, () => {
            c.Var._Global.go_game_time = Laya.Browser.now();
          });
        }
      }),
      (c.AndroidKs = De),
      (c.BDCH = class extends E {
        init(e, t, i) {
          super.init(e, { videoId: "" });
        }
      }),
      (c.BLCH = class extends Le {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.BL.videoId,
              bannerId: c.Var._Param.BL.bannerId,
              insertId: c.Var._Param.BL.insertId,
            },
            () => {
              (c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
                this.getLaunchOptions(),
                this.onShowAlways(),
                (c.Var._Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.CacheData = o),
      (c.CacheType = r),
      (c.Global = l),
      (c.HonorCH = class extends N {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.Honor.videoId,
              bannerId: c.Var._Param.Honor.bannerId,
              insertId: c.Var._Param.Honor.insertId,
              nativeId: c.Var._Param.Honor.nativeId,
              gamePortalAdId: c.Var._Param.Honor.gamePortalAdId,
              boxBannerAdId: c.Var._Param.Honor.boxBannerAdId,
            },
            () => {
              (this.getSystem(),
                this.getLaunchOptions(),
                this.onShowAlways(),
                c.Var.DebugWhite0 ||
                  c.Var.DebugWhite1 ||
                  (this.createVideoAd(),
                  this.createInterstitialAd(),
                  this.createNativeAd(),
                  this.createBannerAd(),
                  this.crateBoxPortalAd(),
                  this.createBoxBannerAd(0, 0, this.db.screenWidth, "bottom|center_horizontal")),
                this.onHide());
            },
          );
        }
      }),
      (c.HwCH = class extends U {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.Hw.videoId,
              bannerId: c.Var._Param.Hw.bannerId,
              insertId: c.Var._Param.Hw.insertId,
              nativeId: c.Var._Param.Hw.nativeId,
            },
            () => {
              (this.getLaunchOptions(),
                this.onShowAlways(),
                this.createInterstitialAd(),
                this.onHide(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createBannerAd(),
                (c.Var._Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.IOSKsCH = class extends q {
        init(e, t, i) {
          super.init(e, { videoId: "" }, () => {
            c.Var._Global.go_game_time = Laya.Browser.now();
          });
        }
      }),
      (c.IsOpenNativePrivacy = function (e) {
        p.mainCH.h == c.CH.IOS_KESHENG ||
        p.mainCH.h == c.CH.Android_233 ||
        p.mainCH.h == c.CH.Android_KS
          ? p.mainCH.openPrivacy()
          : e && e();
      }),
      (c.IsOpenQuickClick = function (e, t) {
        switch (p.mainCH.h) {
          case c.CH.ZJ:
          case c.CH.VIVO:
          case c.CH.OPPO:
          case c.CH.QQ:
          case c.CH.WEIXIN:
          case c.CH.HONOR:
          case c.CH.XIAOMI:
            c.Var._SwitchM0.showQuickClick()
              ? (c.Event.dispatcher.once(c.Event.close_quick_click, this, e), t && t())
              : e && e();
            break;
          default:
            e && e();
        }
      }),
      (c.IsOpenRecordHint = function (e, t, i) {
        (p.mainCH.h === c.CH.ZJ
          ? (p.mainCH.stopGameRecorderManager(),
            i && c.Var._SwitchM0.showOpenBox() && t
              ? (c.Event.dispatcher.once(c.Event.close_record, this, i),
                c.Event.dispatcher.once(c.Event.close_chest, this, e),
                t)
              : t
                ? (c.Event.dispatcher.once(c.Event.close_record, this, e), t)
                : e)
          : i && c.Var._SwitchM0.showOpenBox()
            ? (c.Event.dispatcher.once(c.Event.close_chest, this, e), i)
            : e)();
      }),
      (c.IsOpenStartTry = function (e, t, i) {
        ((null == i || i()) && c.Var._SwitchM0.showStartTry()
          ? (c.Event.dispatcher.once(c.Event.close_start_try, this, t), e)
          : t)();
      }),
      (c.IsShowStartVideo = function (t) {
        c.Var._SwitchM0.showGameVideo()
          ? L(
              () => t(1),
              (e) => {
                t(0 == e ? 1 : 0);
              },
              () => {
                t(2);
              },
              !1,
            )
          : t(0);
      }),
      (c.JdCH = class extends Oe {
        init(e, t, i) {
          super.init(
            e,
            { linkId: c.Var._Param.Jd.linkId, advTimerId: c.Var._Param.Jd.advTimerId },
            () => {
              (c.Var.DebugWhite0 || c.Var.DebugWhite1,
                this.getLaunchOptions(),
                this.onShowAlways(),
                (c.Var._Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.KsCH = class extends Q {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.Ks.videoId,
              bannerId: c.Var._Param.Ks.bannerId,
              insertId: c.Var._Param.Ks.insertId,
            },
            () => {
              (this.getSystem(),
                this.getLaunchOptions(),
                this.onShowAlways(),
                this.showShareMenu(),
                this.onHide(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createInterstitialAd(),
                (c.Var._Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.MzCH = class extends j {
        init(e, t, i) {
          super.init(e, {
            videoId: c.Var._Param.Mz.videoId,
            bannerId: c.Var._Param.Mz.bannerId,
            insertId: c.Var._Param.Mz.insertId,
          });
        }
      }),
      (c.OppoCH = class extends z {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.Oppo.videoId,
              bannerId: c.Var._Param.Oppo.bannerId,
              insertId: c.Var._Param.Oppo.insertId,
              nativeId: c.Var._Param.Oppo.nativeId,
              gameBannerAdId: c.Var._Param.Oppo.gameBannerAdId,
              gamePortalAdId: c.Var._Param.Oppo.gamePortalAdId,
              gameDrawerAdId: c.Var._Param.Oppo.gameDrawerAdId,
              customId: c.Var._Param.Oppo.customId,
            },
            () => {
              (this.getSystem(),
                this.getLaunchOptions(),
                this.onShowAlways(() => {
                  c.Var._Global.is_oppo_ad ||
                    (this.getEnterOptionsSync(), c.Var._SwitchM0.refreshSwitch());
                }),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createBannerAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createInterstitialAd(),
                c.Var.DebugWhite0 ||
                  c.Var.DebugWhite1 ||
                  Laya.timer.once(2e3, this, () => {
                    this.createGamePortalAd();
                  }),
                this.onHide(),
                this.reportMonitor(),
                this.getEnterOptionsSync(),
                (c.Var._Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.Param = t),
      (c.Physical = h),
      (c.QQCH = class extends F {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.QQ.videoId,
              bannerId: c.Var._Param.QQ.bannerId,
              insertId: c.Var._Param.QQ.insertId,
              boxAdId: c.Var._Param.QQ.boxAdId,
              blockAdId: c.Var._Param.QQ.blockAdId,
            },
            () => {
              if (
                (this.getSystem(),
                this.getLaunchOptions(),
                this.showShareMenu(c.Var._Param.QQ.shareTitle, c.Var._Param.QQ.shareImage),
                this.onShowAlways(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createBannerAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createInterstitialAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createAppBox(),
                this.checkUpdate(),
                this.onHide(),
                this.ch)
              ) {
                var { windowWidth: t, windowHeight: i } = this.ch.getSystemInfoSync();
                for (let e = 0; e < this.blockAdId.length; e++) {
                  var a = c.Var._Param.QQ.CustomBlockAdPos(t, i, e);
                  !a ||
                    c.Var.DebugWhite0 ||
                    c.Var.DebugWhite1 ||
                    p.mainCH.createBlockAd(a.x, a.y, a.num, e, a.move, a.or);
                }
              }
              this.Global.go_game_time = Laya.Browser.now();
            },
          );
        }
      }),
      (c.SwitchM0 = u),
      (c.TTCH = class extends Y {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.TT.videoId,
              bannerId: c.Var._Param.TT.bannerId,
              insertId: c.Var._Param.TT.insertId,
            },
            () => {
              (this.showFavoriteGuide(),
                this.getSystem(),
                this.getLaunchOptions(),
                this.onShowAlways(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createBannerAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
                this.getGameRecorderManager(),
                this.checkUpdate(),
                this.onHide(),
                (c.Var._Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.TTHWCH = class extends Pe {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.TT.videoId,
              bannerId: c.Var._Param.TT.bannerId,
              insertId: c.Var._Param.TT.insertId,
            },
            () => {
              this.ch = null;
            },
          );
        }
      }),
      (c.UcCH = class extends Z {
        init(e, t, i) {
          super.init(e, {
            videoId: c.Var._Param.Uc.videoId,
            bannerId: c.Var._Param.Uc.bannerId,
            insertId: c.Var._Param.Uc.insertId,
            nativeId: c.Var._Param.Uc.nativeId,
          });
        }
      }),
      (c.VivoCH = class extends $ {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.Vivo.videoId,
              bannerId: c.Var._Param.Vivo.bannerId,
              insertId: c.Var._Param.Vivo.insertId,
              nativeId: c.Var._Param.Vivo.nativeId,
              boxBannerAdId: c.Var._Param.Vivo.boxBannerAdId,
              boxPortalAdId: c.Var._Param.Vivo.boxPortalAdId,
              customId: c.Var._Param.Vivo.customId,
              newCustomId: c.Var._Param.Vivo.newCustomId,
            },
            () => {
              (this.getSystem(),
                this.onShowAlways(() => {
                  c.Var._Global.is_vivo_ad ||
                    (this.getEnterOptionsSync(), c.Var._SwitchM0.refreshSwitch());
                }),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createBannerAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
                c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createBoxBannerAd(),
                this.onHide(),
                c.Var.DebugWhite0 ||
                  c.Var.DebugWhite1 ||
                  Laya.timer.once(2e3, this, () => {
                    this.createBoxPortalAd();
                  }),
                this.getEnterOptionsSync(),
                (c.Var._Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.Web360CH = class extends ee {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.Web360.videoId,
              shopWindowId: c.Var._Param.Web360.shopWindowId,
              infoFlowId: c.Var._Param.Web360.infoFlowId,
            },
            () => {
              (c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
                (c.Var._Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.Web4399CH = class extends te {
        init(e, t, i) {
          super.init(e, { videoId: "" }, () => {
            c.Var._Global.go_game_time = Laya.Browser.now();
          });
        }
      }),
      (c.WxCC = class extends ie {
        init(e, t, i) {
          super.init(e, { videoId: null }, () => {
            (this.getSystem(),
              this.getLaunchOptions(),
              this.onShowAlways(),
              this.onHide(),
              (c.Var._Global.go_game_time = Laya.Browser.now()));
          });
        }
      }),
      (c.WxCH = class extends He {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.Wx.videoId,
              bannerId: c.Var._Param.Wx.bannerId,
              insertId: c.Var._Param.Wx.insertId,
              customId: c.Var._Param.Wx.customId,
              gridId: c.Var._Param.Wx.gridId,
            },
            () => {
              if (c.Var.is_wx_sw) this.ch = null;
              else {
                ((c.Var._Global.go_game_time = Laya.Browser.now()),
                  this.initVideoId(),
                  this.initBannerId(),
                  this.getGameRecorder(),
                  this.getSystem(),
                  this.getLaunchOptions(),
                  this.onShowAlways(),
                  c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createBannerAd(),
                  c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
                  c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createInterstitialAd(),
                  this.checkUpdate(),
                  this.onHide());
                for (let e = 0; e < this.customId.length; e++)
                  c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createCustomAdWx(e);
              }
            },
          );
        }
        checkUpdate() {}
      }),
      (c.WxVideo = class extends Me {
        init(e, t, i) {
          super.init(e, { videoId: c.Var._Param.Wx.videoId }, () => {
            (this.getSystem(),
              this.getLaunchOptions(),
              this.onShowAlways(),
              c.Var.DebugWhite0 || c.Var.DebugWhite1 || this.createVideoAd(),
              this.onHide(),
              (c.Var._Global.go_game_time = Laya.Browser.now()));
          });
        }
      }),
      (c.XMCH = class extends xe {
        init(e, t, i) {
          super.init(
            e,
            {
              videoId: c.Var._Param.Xm.videoId,
              bannerId: c.Var._Param.Xm.bannerId,
              customId: c.Var._Param.Xm.customId,
              insertId: c.Var._Param.Xm.insertId,
              boxBannerAdId: c.Var._Param.Xm.boxBannerAdId,
              boxPortalAdId: c.Var._Param.Xm.boxPortalAdId,
              boxSuspendAdId: c.Var._Param.Xm.boxSuspendAdId,
            },
            () => {
              (this.getSystem(),
                this.getLaunchOptions(),
                this.onShowAlways(),
                c.Var.DebugWhite0 ||
                  c.Var.DebugWhite1 ||
                  Laya.timer.once(2e3, this, () => {
                    this.createVideoAd();
                  }),
                this.onHide(),
                (this.Global.go_game_time = Laya.Browser.now()));
            },
          );
        }
      }),
      (c.addCommonUse = function (e) {
        p.mainCH.addCommonUse(e);
      }),
      (c.append_share_info = function (e, t = null) {
        b.append_share_info(e, t);
      }),
      (c.ch = function () {
        return p.mainCH.ch;
      }),
      (c.changeBanner = function (e = !1, t = !1) {
        let i = {};
        switch (p.mainCH.h) {
          case c.CH.WEIXIN:
          case c.CH.QQ:
          case c.CH.ZJ:
            break;
          case c.CH.VIVO:
            (e
              ? "portrait" == window.screenOrientation ||
                "sensor_portrait" == window.screenOrientation
                ? (i = { left: 0, top: 0 })
                : ("landscape" != window.screenOrientation &&
                    "sensor_landscape" != window.screenOrientation) ||
                  (i = { left: (p.mainCH.db.screenWidth - 1080) / 2, top: 0 })
              : "portrait" == window.screenOrientation ||
                  "sensor_portrait" == window.screenOrientation
                ? (i = {})
                : ("landscape" != window.screenOrientation &&
                    "sensor_landscape" != window.screenOrientation) ||
                  (i = {
                    left: (p.mainCH.db.screenWidth - 1080) / 2,
                    top: p.mainCH.db.screenHeight - 170,
                    width: p.mainCH.db.screenWidth,
                  }),
              !(e ? 1 == c.Var._SwitchM0.enter_game_banner : 1 == c.Var._SwitchM0.other_banner) ||
                c.Var.DebugWhite0 ||
                c.Var.DebugWhite1 ||
                (p.mainCH.createBannerAd(i), t && p.mainCH.showBannerAd()));
            break;
          case c.CH.OPPO:
            (e && (i = { top: 0 }),
              !(e ? 1 == c.Var._SwitchM0.enter_game_banner : 1 == c.Var._SwitchM0.other_banner) ||
                c.Var.DebugWhite0 ||
                c.Var.DebugWhite1 ||
                (p.mainCH.createBannerAd(i), t && p.mainCH.showBannerAd()));
            break;
          case c.CH.XIAOMI:
        }
      }),
      (c.checkCommonUse = function (e) {
        p.mainCH.checkCommonUse(e);
      }),
      (c.checkIsAddedToMyMiniProgram = function (e) {
        p.mainCH.checkIsAddedToMyMiniProgram(e);
      }),
      (c.closeSceneHome = function (e = !0, t = !0, i = !0) {
        switch (p.mainCH.h) {
          case c.CH.WEIXIN:
            (e &&
              (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
              2 == c.Var._SwitchM0.HorizontalBanner) &&
              p.mainCH.hideCustomAdsWx(c.WxCustomAd.Carousel),
              t && p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left),
              i && p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right));
            break;
          case c.CH.QQ:
            (e &&
              (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
              2 == c.Var._SwitchM0.HorizontalBanner) &&
              p.mainCH.hideBlockAd(c.QQBlockAd.Bottom),
              t && p.mainCH.hideBlockAd(c.QQBlockAd.Left),
              i && p.mainCH.hideBlockAd(c.QQBlockAd.Right));
            break;
          case c.CH.ALIPAY:
            e && p.mainCH.hideBannerAd();
            break;
          case c.CH.VIVO:
            p.mainCH.showBoxPortalAd();
          case c.CH.OPPO:
            (i || t) && p.mainCH.hideCustomAds(c.CustomAdType.Icon);
          case c.CH.XIAOMI:
            (i || t) && p.mainCH.hideBoxSuspendAd();
          default:
            e && p.mainCH.hideBannerAd();
        }
        Laya.timer.clearAll(this);
      }),
      (c.closeSceneOther = function (e = !0, t = !0, i = !0, a = null, s = !1) {
        if (!c.Var.DebugWhite0 && !c.Var.DebugWhite1)
          switch (((c.Var.otherSceneName = null), p.mainCH.h)) {
            case c.CH.WEIXIN:
              (1 == c.Var._SwitchM0.normalSingleCustomAd &&
                (null != i &&
                  (i
                    ? p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right)
                    : p.mainCH.showCustomAdWx(c.WxCustomAd.Right)),
                null != t) &&
                (t
                  ? p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)
                  : p.mainCH.showCustomAdWx(c.WxCustomAd.Left)),
                1 == c.Var._SwitchM0.VerticalGridChance &&
                  (null != i &&
                    (i
                      ? p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleRight)
                      : p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleRight)),
                  null != t) &&
                  (t
                    ? p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleLeft)
                    : p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleLeft)),
                null != e &&
                  (e
                    ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.hideCustomAdsWx(c.WxCustomAd.Carousel))
                    : (s ? 1 == c.Var._SwitchM0.enter_game_banner : c.Var._SwitchM0.other_banner) &&
                      (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner) &&
                      p.mainCH.showCustomAdWx(c.WxCustomAd.Carousel)));
              break;
            case c.CH.ALIPAY:
              null != e &&
                (e
                  ? p.mainCH.hideBannerAd()
                  : (s ? 1 == c.Var._SwitchM0.enter_game_banner : c.Var._SwitchM0.other_banner) &&
                    p.mainCH.showBannerAd());
              break;
            case c.CH.XIAOMI:
              1 == c.Var._SwitchM0.other_banner && p.mainCH.hideBannerAd();
              break;
            case c.CH.VIVO:
              a && p.mainCH.hideCustomAd();
            case c.CH.OPPO:
              (a && p.mainCH.hideCustomAds(c.CustomAdType.Interstitial),
                null != t &&
                  (t
                    ? p.mainCH.hideCustomAds(c.CustomAdType.Icon)
                    : (s ? 1 == c.Var._SwitchM0.icon_game : c.Var._SwitchM0.icon_normal) &&
                      d.showCustomIcon()),
                null != e &&
                  (e
                    ? p.mainCH.hideBannerAd()
                    : (s ? 1 == c.Var._SwitchM0.enter_game_banner : c.Var._SwitchM0.other_banner) &&
                      p.mainCH.showBannerAd()));
              break;
            case c.CH.QQ:
              (1 == c.Var._SwitchM0.normalSingleCustomAd &&
                (null != i &&
                  (i
                    ? p.mainCH.showBlockAd(c.QQBlockAd.Right)
                    : p.mainCH.hideBlockAd(c.QQBlockAd.Right)),
                null != t) &&
                (t
                  ? p.mainCH.hideBlockAd(c.QQBlockAd.Left)
                  : p.mainCH.showBlockAd(c.QQBlockAd.Left)),
                null != e &&
                  (e
                    ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.hideBlockAd(c.QQBlockAd.Bottom))
                    : (s ? 1 == c.Var._SwitchM0.enter_game_banner : c.Var._SwitchM0.other_banner) &&
                      (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner) &&
                      p.mainCH.showBlockAd(c.QQBlockAd.Bottom)));
              break;
            default:
              null != e && (e ? p.mainCH.hideBannerAd() : p.mainCH.showBannerAd());
          }
      }),
      (c.closeSceneResult = function (e = !0, t = !0, i = !0, a = null) {
        if (!c.Var.DebugWhite0 && !c.Var.DebugWhite1)
          switch (p.mainCH.h) {
            case c.CH.WEIXIN:
              (1 == c.Var._SwitchM0.normalSingleCustomAd &&
                (null != i &&
                  (i
                    ? p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right)
                    : p.mainCH.showCustomAdWx(c.WxCustomAd.Right)),
                null != t) &&
                (t
                  ? p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)
                  : p.mainCH.showCustomAdWx(c.WxCustomAd.Left)),
                1 == c.Var._SwitchM0.VerticalGridChance &&
                  (null != i &&
                    (i
                      ? p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleRight)
                      : p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleRight)),
                  null != t) &&
                  (t
                    ? p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleLeft)
                    : p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleLeft)),
                null != e &&
                  (e
                    ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.hideCustomAdsWx(c.WxCustomAd.Carousel))
                    : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.showCustomAdWx(c.WxCustomAd.Carousel))),
                p.mainCH.hideCustomAdsWx(c.WxCustomAd.Matrix));
              break;
            case c.CH.ALIPAY:
              null != e && (e ? p.mainCH.hideBannerAd() : p.mainCH.showBannerAd());
              break;
            case c.CH.QQ:
              (1 == c.Var._SwitchM0.normalSingleCustomAd &&
                (null != i &&
                  (i
                    ? p.mainCH.showBlockAd(c.QQBlockAd.Right)
                    : p.mainCH.hideBlockAd(c.QQBlockAd.Right)),
                null != t) &&
                (t
                  ? p.mainCH.hideBlockAd(c.QQBlockAd.Left)
                  : p.mainCH.showBlockAd(c.QQBlockAd.Left)),
                1 == c.Var._SwitchM0.other_banner &&
                  null != e &&
                  (e
                    ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.hideBlockAd(c.QQBlockAd.Bottom))
                    : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.showBlockAd(c.QQBlockAd.Bottom))));
              break;
            case c.CH.VIVO:
              p.mainCH.showBoxPortalAd();
            case c.CH.OPPO:
              (a && p.mainCH.hideCustomAds(c.CustomAdType.Interstitial),
                1 == c.Var._SwitchM0.icon_normal &&
                  null != t &&
                  (t ? p.mainCH.hideCustomAds(c.CustomAdType.Icon) : d.showCustomIcon()),
                1 == c.Var._SwitchM0.other_banner &&
                  null != e &&
                  (e ? p.mainCH.hideBannerAd() : p.mainCH.showBannerAd()));
            default:
              (p.mainCH.hideBoxBannerAd(),
                null != e && (e ? p.mainCH.hideBannerAd() : p.mainCH.showBannerAd()));
          }
      }),
      (c.createGameClubButton = function (e, t = "", i = !1) {
        p.mainCH.createGameClubButton(e, t, i);
      }),
      (c.destroyGameClubButton = function () {
        p.mainCH.destroyGameClubButton();
      }),
      (c.exitApplication = function () {
        p.mainCH.exitApplication();
      }),
      (c.explain_platform_data = function (e, t, i) {
        b.explain_platform_data(e, t, i);
      }),
      (c.getCh = function () {
        return p.mainCH.h;
      }),
      (c.getGameClubData = function (e) {
        p.mainCH.getGameClubData(e);
      }),
      (c.getSetting = function (e, t) {
        p.mainCH.getSetting(e, t);
      }),
      (c.getSettingState = function (e, t) {
        p.mainCH.getSettingState(e, t);
      }),
      (c.getUserInfo = function (t) {
        p.mainCH.getUserInfo((e) => {
          e
            ? t && t(!0)
            : p.mainCH.getUserProfile((e) => {
                e ? t && t(!0) : t && t(!1);
              });
        });
      }),
      (c.get_share_info = function (e = null) {
        b.get_share_info(e);
      }),
      (c.get_shared_rewards = function (e, t = null) {
        b.get_shared_rewards(e, t);
      }),
      (c.get_ucode = function () {
        return b.get_ucode();
      }),
      (c.get_userInfo = function (e = "openid", t = null) {
        var i,
          a = b.get_userInfo();
        let s = null;
        return (
          a && (s = null != (i = a[e]) ? i : t),
          a &&
            !o.get(r.user_openid) &&
            a[e] &&
            a[e] != o.get(r.user_openid) &&
            o.set(r.user_openid, a[e]),
          (s = !s && o.get(r.user_openid) ? o.get(r.user_openid) : s)
        );
      }),
      (c.get_world_rank = function (e = null, t = "level", i = !1) {
        b.get_world_rank(e, t, i);
      }),
      (c.hideBannerAd = function () {
        p.mainCH.hideBannerAd();
      }),
      (c.hideGameClubButton = function () {
        p.mainCH.hideGameClubButton();
      }),
      (c.init = function (e, t) {
        var i = { touch_video: !0 };
        if (
          ((t = t ? Object.assign(Object.assign({}, i), t) : i),
          _.initDyzt(),
          V.initKszt(),
          m.initDyzt(),
          c.Var.is_sz_sdk && seeg.init({ gid: t.zs_gid, version: "1.0.0" }),
          !c.Var._Param)
        )
          throw new Error(
            "Ad.Var._Param未被赋值，请在你的项目中新建一个继承自Ad.Param的类，然后将其赋值给Ad.Var._Param",
          );
        if (!c.Var._SwitchM0)
          throw new Error(
            "Ad.Var._SwitchM0未被赋值，请在你的项目中新建一个继承自Ad.SwitchM0的类，然后将其赋值给Ad.Var._SwitchM0",
          );
        if (!c.Var._Global)
          throw new Error(
            "Ad.Var._Global未被赋值，请在你的项目中新建一个继承自Ad.Global的类，然后将其赋值给Ad.Var._Global",
          );
        (null != window &&
          null == window.screenOrientation &&
          (window.screenOrientation = c.Var._Param.screenOrientation),
          (Laya.SoundManager.soundMuted = 0 == c.Var._Global.voice_switch),
          (Laya.SoundManager.musicMuted = 0 == c.Var._Global.sound_switch),
          t.onVideoStart && (c.Var.onVideoStart = t.onVideoStart),
          t.onVideoStop && (c.Var.onVideoStop = t.onVideoStop),
          t.onShortcutInstalled && (c.Var.onShortcutInstalled = t.onShortcutInstalled),
          t.onAutoVideoReward && (c.Var.onAutoVideoReward = t.onAutoVideoReward),
          t.onOpenNative && (c.Var.onOpenNative = t.onOpenNative),
          t.onShowAlways && (c.Var.onShowAlways = t.onShowAlways),
          t.onHide && (c.Var.onHide = t.onHide),
          t.onSwitchComp && (c.Var.onSwitchComp = t.onSwitchComp),
          t.pack_time && (c.Var.pack_time = t.pack_time),
          e && ((c.Var.CH = e), p.init()),
          (!c.Var.DebugWhite0 &&
            !c.Var.DebugWhite1 &&
            p.mainCH.h != c.CH.WX_VIDEO &&
            p.mainCH.h != c.CH.WEB_4399 &&
            p.mainCH.h != c.CH.WX_CC &&
            p.mainCH.h != c.CH.WEB_360 &&
            p.mainCH.h != c.CH.ZJ_HW) ||
          c.Var.DebugSwitch0 ||
          c.Var.DebugSwitch1
            ? p.mainCH.h == c.CH.Android_KS
              ? b.initKsApp()
              : b.initSDK()
            : c.Var.onSwitchComp && c.Var.onSwitchComp(),
          p.mainCH.showShareMenu(),
          t.touch_video &&
            (k(),
            Laya.stage.on(Laya.Event.MOUSE_DOWN, null, k),
            Laya.stage.on(Laya.Event.MOUSE_MOVE, null, k),
            Laya.timer.loop(5e3, null, Ee)),
          1 == o.get(r.ks_ad_active) && o.set(r.ks_ad_active, 2));
      }),
      (c.isCh = function (e) {
        return p.mainCH.h == e;
      }),
      (c.isX = function () {
        return "portrait" == window.screenOrientation ||
          "sensor_portrait" == window.screenOrientation
          ? Laya.Browser.width / Laya.Browser.height < 0.49
          : "landscape" == window.screenOrientation ||
              "sensor_landscape" == window.screenOrientation
            ? Laya.Browser.height / Laya.Browser.width < 0.49
            : void 0;
      }),
      (c.jumpToGameClub = function (e, t = !1) {
        p.mainCH.jumpToGameClub(e, t);
      }),
      (c.loadRecommend = function () {
        p.mainCH.loadRecommend();
      }),
      (c.login = function (e = null) {
        p.mainCH.login(e);
      }),
      (c.mainCH = function () {
        return p.mainCH;
      }),
      (c.onBtnAdd = function (t) {
        p.mainCH.h == c.CH.ZJ || p.mainCH.h == c.CH.VIVO || p.mainCH.h == c.CH.KUAI
          ? p.mainCH.installShortcut((e) => {
              e && t && t(e);
            })
          : (p.mainCH.installShortcut(), p.mainCH.onShow(() => H(t)));
      }),
      (c.onBtnMore = function () {
        switch (p.mainCH.h) {
          case c.CH.ZJ:
            p.mainCH.showMoreGamesModal();
            break;
          case c.CH.OPPO:
            p.mainCH.showGamePortalAd();
            break;
          case c.CH.WEIXIN:
            p.mainCH.showCustomAdWx(c.WxCustomAd.Matrix);
            break;
          case c.CH.QQ:
            p.mainCH.showAppBox();
            break;
          case c.CH.XIAOMI:
          case c.CH.HONOR:
            p.mainCH.showBoxPortalAd();
        }
      }),
      (c.onBtnRecordShare = function (t, i) {
        switch (p.mainCH.h) {
          case c.CH.ZJ:
            p.mainCH.recordShare((e) => {
              e &&
                (c.Var._Global.share_award && ((c.Var._Global.share_award = !1), i) && i(), t) &&
                t();
            });
            break;
          case c.CH.WEIXIN:
            p.mainCH.operateGameRecorderVideo();
        }
      }),
      (c.onBtnShare = function (e, ...t) {
        p.mainCH.share(e, ...t);
      }),
      (c.onEnterGame = M),
      (c.onShow = function (e) {
        p.mainCH.onShow(e);
      }),
      (c.onStartGame = function (t) {
        var e = {
          onReward: c.Var.onAutoVideoReward,
          record: !0,
          showBanner: !0,
          showCustomL: !0,
          showCustomR: !0,
          delay: 200,
        };
        t = t ? Object.assign(Object.assign({}, e), t) : e;
        const i = () => {
          c.Var._SwitchM0.showGameVideo()
            ? L(
                () => {
                  (t.onReward && t.onReward(),
                    t.onResume && t.onResume(),
                    M(t.record, t.showBanner, t.showCustomL, t.showCustomR));
                },
                (e) => {
                  (e == n.onFail && t.onReward && t.onReward(),
                    t.onResume && t.onResume(),
                    M(t.record, t.showBanner, t.showCustomL, t.showCustomR));
                },
                () => {
                  t.onPause && t.onPause();
                },
                !1,
              )
            : M(t.record, t.showBanner, t.showCustomL, t.showCustomR);
        };
        t.delay ? Laya.timer.once(t.delay, this, () => i()) : i();
      }),
      (c.openSceneHome = function (e, t = !0, i = 1e3, a = 2e3, s = !0, n = !0, r = 1) {
        if (
          (Laya.timer.clearAll(this),
          (c.Var._Global.is_game_back = !1),
          !c.Var.DebugWhite0 && !c.Var.DebugWhite1)
        ) {
          switch (p.mainCH.h) {
            case c.CH.ZJ:
              (t
                ? Laya.timer.once(i, this, () => {
                    p.mainCH.showBannerAd();
                  })
                : p.mainCH.hideBannerAd(),
                l.is_new_user && ((l.is_new_user = !1), _.dyReport(_.event_type.active_register)));
              break;
            case c.CH.VIVO:
            case c.CH.OPPO:
              (t
                ? Laya.timer.once(i, this, () => {
                    p.mainCH.showBannerAd();
                  })
                : p.mainCH.hideBannerAd(),
                Laya.timer.once(a, this, () => {
                  p.mainCH.showBoxPortalAd();
                }),
                Laya.timer.once(i, this, () => {
                  1 == c.Var._SwitchM0.icon_normal &&
                    null != s &&
                    (s ? d.showCustomIcon() : p.mainCH.hideCustomAds(c.CustomAdType.Icon));
                }));
              break;
            case c.CH.WEIXIN:
              (l.is_new_user && ((l.is_new_user = !1), m.dyReport(m.event_type.active_register)),
                p.mainCH.initBannerId(),
                1 == c.Var._SwitchM0.HorizontalBanner
                  ? (t ? p.mainCH.showBannerAd() : p.mainCH.hideBannerAd(),
                    1 == c.Var._SwitchM0.normalSingleCustomAd
                      ? (null != n &&
                          (n
                            ? p.mainCH.showCustomAdWx(c.WxCustomAd.Right)
                            : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right)),
                        null != s &&
                          (s
                            ? p.mainCH.showCustomAdWx(c.WxCustomAd.Left)
                            : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)))
                      : (p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right),
                        p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)),
                    1 == c.Var._SwitchM0.VerticalGridChance &&
                      (null != n &&
                        (n
                          ? p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleRight)
                          : p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleRight)),
                      null != s) &&
                      (s
                        ? p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleLeft)
                        : p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleLeft)))
                  : 2 == c.Var._SwitchM0.HorizontalBanner &&
                    (t
                      ? p.mainCH.showCustomAdWx(c.WxCustomAd.Carousel)
                      : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Carousel),
                    1 == c.Var._SwitchM0.normalSingleCustomAd
                      ? (null != n &&
                          (n
                            ? p.mainCH.showCustomAdWx(c.WxCustomAd.Right)
                            : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right)),
                        null != s &&
                          (s
                            ? p.mainCH.showCustomAdWx(c.WxCustomAd.Left)
                            : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)))
                      : (p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right),
                        p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)),
                    1 == c.Var._SwitchM0.VerticalGridChance) &&
                    (null != n &&
                      (n
                        ? p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleRight)
                        : p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleRight)),
                    null != s) &&
                    (s
                      ? p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleLeft)
                      : p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleLeft)),
                1 == c.Var._SwitchM0.OpeningInt &&
                  c.Var._Global.show_home_interstitialAd &&
                  ((c.Var._Global.show_home_interstitialAd = !1),
                  Laya.timer.once(u.open_delay_interval_time, this, () => {
                    p.mainCH.showInterstitialAd();
                  })));
              break;
            case c.CH.ALIPAY:
              t ? p.mainCH.showBannerAd() : p.mainCH.hideBannerAd();
              break;
            case c.CH.QQ:
              (Laya.timer.once(i, this, () => {
                (null != t &&
                  (t && c.Var._SwitchM0.other_banner
                    ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.showBlockAd(c.QQBlockAd.Bottom))
                    : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.hideBlockAd(c.QQBlockAd.Bottom))),
                  1 == c.Var._SwitchM0.normalSingleCustomAd
                    ? (null != n &&
                        (n
                          ? p.mainCH.showBlockAd(c.QQBlockAd.Right)
                          : p.mainCH.hideBlockAd(c.QQBlockAd.Right)),
                      null != s &&
                        (s
                          ? p.mainCH.showBlockAd(c.QQBlockAd.Left)
                          : p.mainCH.hideBlockAd(c.QQBlockAd.Left)))
                    : (p.mainCH.hideBlockAd(c.QQBlockAd.Right),
                      p.mainCH.hideBlockAd(c.QQBlockAd.Left)));
              }),
                1 == c.Var._SwitchM0.OpeningInt &&
                  c.Var._Global.show_home_interstitialAd &&
                  ((c.Var._Global.show_home_interstitialAd = !1),
                  Laya.timer.once(r, this, () => {
                    p.mainCH.showInterstitialAd();
                  })));
              break;
            case c.CH.WEB_360:
              Laya.timer.once(r, this, () => {
                (p.mainCH.showShopWindow(), p.mainCH.showInfoFlow());
              });
              break;
            case c.CH.XIAOMI:
              p.mainCH.showBoxSuspendAd();
              break;
            case c.CH.KUAI:
              l.is_new_user && ((l.is_new_user = !1), V.ksReport(V.event_type.active_register));
              break;
            case c.CH.HUAWEI:
              t
                ? Laya.timer.once(i, this, () => {
                    p.mainCH.showBannerAd();
                  })
                : p.mainCH.hideBannerAd();
              break;
            case c.CH.IOS_KESHENG:
              t ? p.mainCH.showBannerAd() : p.mainCH.hideBannerAd();
              break;
            case c.CH.HONOR:
              (t
                ? Laya.timer.once(i, this, () => {
                    p.mainCH.showBannerAd();
                  })
                : p.mainCH.hideBannerAd(),
                1 == c.Var._SwitchM0.OpeningInt &&
                  c.Var._Global.show_home_interstitialAd &&
                  ((c.Var._Global.show_home_interstitialAd = !1),
                  Laya.timer.once(r, this, () => {
                    p.mainCH.showInterstitialAd();
                  })));
          }
          (e && (c.Var.onShortcutInstalled = e),
            c.Var._SwitchM0.show_shortcut
              ? H()
              : c.Var.onShortcutInstalled && c.Var.onShortcutInstalled(!0),
            Laya.timer.once(1e3, this, () => {
              try {
                c.Var._SwitchM0.show_shortcut
                  ? H()
                  : c.Var.onShortcutInstalled && c.Var.onShortcutInstalled(!0);
              } catch (e) {}
            }),
            d.creatCustom(),
            d.creatCustomIcon());
        }
      }),
      (c.openSceneOther = function (e = !0, t = !0, i = !0, a = !0, s, n, r) {
        if (!c.Var.DebugWhite0 && !c.Var.DebugWhite1)
          switch ((null != r && (c.Var.otherSceneName = r), p.mainCH.h)) {
            case c.CH.WEIXIN:
              (1 == c.Var._SwitchM0.normalSingleCustomAd
                ? (null != i &&
                    (i
                      ? p.mainCH.showCustomAdWx(c.WxCustomAd.Right)
                      : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right)),
                  null != t &&
                    (t
                      ? p.mainCH.showCustomAdWx(c.WxCustomAd.Left)
                      : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)))
                : (p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right),
                  p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)),
                1 == c.Var._SwitchM0.VerticalGridChance &&
                  (null != i &&
                    (i
                      ? p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleRight)
                      : p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleRight)),
                  null != t) &&
                  (t
                    ? p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleLeft)
                    : p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleLeft)),
                null != e &&
                  (1 == c.Var._SwitchM0.other_banner && e
                    ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.showCustomAdWx(c.WxCustomAd.Carousel))
                    : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.hideCustomAdsWx(c.WxCustomAd.Carousel))),
                s ? a && d.showScreen(s) : a && d.showScreen(2));
              break;
            case c.CH.ALIPAY:
              1 == c.Var._SwitchM0.other_banner && e
                ? p.mainCH.showBannerAd()
                : p.mainCH.hideBannerAd();
              break;
            case c.CH.QQ:
              (1 == c.Var._SwitchM0.normalSingleCustomAd
                ? (null != i &&
                    (i
                      ? p.mainCH.showBlockAd(c.QQBlockAd.Right)
                      : p.mainCH.hideBlockAd(c.QQBlockAd.Right)),
                  null != t &&
                    (t
                      ? p.mainCH.showBlockAd(c.QQBlockAd.Left)
                      : p.mainCH.hideBlockAd(c.QQBlockAd.Left)))
                : (p.mainCH.hideBlockAd(c.QQBlockAd.Right), p.mainCH.hideBlockAd(c.QQBlockAd.Left)),
                null != e &&
                  (1 == c.Var._SwitchM0.other_banner && e
                    ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.showBlockAd(c.QQBlockAd.Bottom))
                    : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.hideBlockAd(c.QQBlockAd.Bottom))),
                s ? a && d.showScreen(s) : a && d.showScreen(2));
              break;
            case c.CH.WEB_360:
              p.mainCH.showInfoFlow();
              break;
            case c.CH.XIAOMI:
              (1 == c.Var._SwitchM0.other_banner && p.mainCH.showBannerAd(),
                s ? a && d.showScreen(s, null, n || 2) : a && d.showScreen(2, null, n || 2));
              break;
            case c.CH.VIVO:
            case c.CH.OPPO:
              1 == c.Var._SwitchM0.icon_normal &&
                null != t &&
                (t ? d.showCustomIcon() : p.mainCH.hideCustomAds(c.CustomAdType.Icon));
            default:
              (null != e &&
                (1 == c.Var._SwitchM0.other_banner && e
                  ? p.mainCH.showBannerAd()
                  : p.mainCH.hideBannerAd()),
                s ? a && d.showScreen(s, null, n || 2) : a && d.showScreen(2, null, n || 2));
          }
      }),
      (c.openSceneResult = function (t = !0, e = !0, i = !0, a) {
        if (
          ((c.Var.isGaming = !1),
          (c.Var._Global.isResultNum = c.Var._Global.isResultNum + 1),
          !c.Var.DebugWhite0 && !c.Var.DebugWhite1)
        ) {
          switch (p.mainCH.h) {
            case c.CH.ZJ:
              (l.is_new_user && ((l.is_new_user = !1), _.dyReport(_.event_type.active_register)),
                null != t && (t ? p.mainCH.showBannerAd() : p.mainCH.hideBannerAd()));
              break;
            case c.CH.KUAI:
              l.is_new_user && ((l.is_new_user = !1), V.ksReport(V.event_type.active_register));
              break;
            case c.CH.VIVO:
              (1 == c.Var._SwitchM0.icon_normal &&
                null != e &&
                (e ? d.showCustomIcon() : p.mainCH.hideCustomAds(c.CustomAdType.Icon)),
                0 == c.Var._SwitchM0.vivobanner
                  ? (p.mainCH.hideBannerAd(), p.mainCH.hideBoxPortalAd())
                  : t && 1 == c.Var._SwitchM0.other_banner
                    ? p.mainCH.showBannerAd()
                    : p.mainCH.hideBannerAd());
              break;
            case c.CH.OPPO:
              (1 == c.Var._SwitchM0.icon_normal &&
                null != e &&
                (e ? d.showCustomIcon() : p.mainCH.hideCustomAds(c.CustomAdType.Icon)),
                t && 1 == c.Var._SwitchM0.other_banner
                  ? p.mainCH.showBannerAd()
                  : p.mainCH.hideBannerAd());
              break;
            case c.CH.WEIXIN:
              if (
                (l.is_new_user && ((l.is_new_user = !1), m.dyReport(m.event_type.active_register)),
                p.mainCH.stopGameRecorder(),
                1 == c.Var._SwitchM0.EndCustom &&
                  c.Var._Global.game_num % c.Var._SwitchM0.EndLevelCustom == 0)
              )
                return (
                  p.mainCH.hideCustomAdWx(),
                  void p.mainCH.showCustomAdWx(c.WxCustomAd.Matrix)
                );
              (1 == c.Var._SwitchM0.normalSingleCustomAd
                ? (null != i &&
                    (i
                      ? p.mainCH.showCustomAdWx(c.WxCustomAd.Right)
                      : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right)),
                  null != e &&
                    (e
                      ? p.mainCH.showCustomAdWx(c.WxCustomAd.Left)
                      : p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)))
                : (p.mainCH.hideCustomAdsWx(c.WxCustomAd.Right),
                  p.mainCH.hideCustomAdsWx(c.WxCustomAd.Left)),
                1 == c.Var._SwitchM0.VerticalGridChance &&
                  (null != i &&
                    (i
                      ? p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleRight)
                      : p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleRight)),
                  null != e) &&
                  (e
                    ? p.mainCH.showCustomAdWx(c.WxCustomAd.MultipleLeft)
                    : p.mainCH.hideCustomAdsWx(c.WxCustomAd.MultipleLeft)),
                null != t &&
                  c.Var._SwitchM0.other_banner &&
                  (t
                    ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.showCustomAdWx(c.WxCustomAd.Carousel))
                    : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.hideCustomAdsWx(c.WxCustomAd.Carousel))));
              break;
            case c.CH.ALIPAY:
              null != t && (t ? p.mainCH.showBannerAd() : p.mainCH.hideBannerAd());
              break;
            case c.CH.QQ:
              (1 == c.Var._SwitchM0.normalSingleCustomAd
                ? (null != i &&
                    (i
                      ? p.mainCH.showBlockAd(c.QQBlockAd.Right)
                      : p.mainCH.hideBlockAd(c.QQBlockAd.Right)),
                  null != e &&
                    (e
                      ? p.mainCH.showBlockAd(c.QQBlockAd.Left)
                      : p.mainCH.hideBlockAd(c.QQBlockAd.Left)))
                : (p.mainCH.hideBlockAd(c.QQBlockAd.Right), p.mainCH.hideBlockAd(c.QQBlockAd.Left)),
                null != t &&
                  (1 == c.Var._SwitchM0.other_banner && t
                    ? (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.showBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.showBlockAd(c.QQBlockAd.Bottom))
                    : (1 == c.Var._SwitchM0.HorizontalBanner && p.mainCH.hideBannerAd(),
                      2 == c.Var._SwitchM0.HorizontalBanner &&
                        p.mainCH.hideBlockAd(c.QQBlockAd.Bottom))));
              break;
            case c.CH.WEB_360:
              p.mainCH.showInfoFlow();
              break;
            case c.CH.XIAOMI:
              (p.mainCH.showBoxSuspendAd(),
                p.mainCH.showBoxBannerAd(),
                c.Var._SwitchM0.normal_screen &&
                  Laya.timer.once(c.Var._SwitchM0.delay_screen_time, this, () => {
                    p.mainCH.showInterstitialAd();
                  }));
              break;
            case c.CH.HONOR:
              null != t &&
                (t
                  ? c.Var._SwitchM0.showBoxBanner
                    ? (p.mainCH.hideBannerAd(), p.mainCH.showBoxBannerAd())
                    : p.mainCH.showBannerAd()
                  : p.mainCH.hideBannerAd());
          }
          (d.showScreen(
            1,
            (e) => {
              e ||
                (p.mainCH.h == c.CH.VIVO &&
                  (0 == c.Var._SwitchM0.vivobanner
                    ? p.mainCH.showBoxBannerAd((e) => {
                        e ||
                          (t && 1 == c.Var._SwitchM0.other_banner
                            ? p.mainCH.showBannerAd()
                            : p.mainCH.hideBannerAd());
                      })
                    : t && 1 == c.Var._SwitchM0.other_banner
                      ? p.mainCH.showBannerAd()
                      : p.mainCH.hideBannerAd()));
            },
            1,
          ),
            c.Var._SwitchM0.show_shortcut_result ? H(a) : a && a());
        }
      }),
      (c.pauseGameRecorderManager = function () {
        p.mainCH.pauseGameRecorderManager();
      }),
      (c.postMessage = function (e, t) {
        p.mainCH.postMessage(e, t);
      }),
      (c.reportAnalytics = function (e, t) {
        p.mainCH.reportAnalytics(e, t);
      }),
      (c.reportEvent = function (e) {
        p.mainCH.reportEvent(e);
      }),
      (c.reportJdGameData = function (e, t) {
        b.reportJdGameData(e, t);
      }),
      (c.reportScene = function () {
        p.mainCH.reportScene();
      }),
      (c.requestFeedSubscribe = function (e, t) {
        p.mainCH.requestFeedSubscribe(e, t);
      }),
      (c.requestSubscribeMessage = function (e, t) {
        p.mainCH.requestSubscribeMessage(e, t);
      }),
      (c.resumeGameRecorderManager = function () {
        p.mainCH.resumeGameRecorderManager();
      }),
      (c.sendStageLevelEvent = function (e, t) {
        p.mainCH.sendStageLevelEvent(e, t);
      }),
      (c.sendStageStartEvent = function (e, t) {
        p.mainCH.sendStageStartEvent(e, t);
      }),
      (c.setImRankData = function (e) {
        p.mainCH.setImRankData(e);
      }),
      (c.setUserCloudStorage = function (e, t = "score") {
        p.mainCH.setUserCloudStorage(e, t);
      }),
      (c.shareInvite = function (e) {
        p.mainCH.shareInvite(e);
      }),
      (c.showBannerAd = function () {
        p.mainCH.showBannerAd();
      }),
      (c.showBannerAdToKs = function (e, t) {
        (!e || d.randomAD10Show()) && p.mainCH.showBannerAd(e, t);
      }),
      (c.showFeedAdToKs = function (e, t) {
        e
          ? d.randomAD10Show() &&
            (0 == t
              ? d.randomAD6Show() && p.mainCH.showFeedAdToKs(e, t)
              : 1 != t && 2 == t && d.randomAD7Show() && p.mainCH.showFeedAdToKs(e, t))
          : p.mainCH.showFeedAdToKs(e, t);
      }),
      (c.showFullVideAdToKs = function () {
        d.randomAD10Show() &&
          (d.randomAD0Show() ? p.mainCH.showFullVideoAd() : p.mainCH.showInterstitialAd(null, 0));
      }),
      (c.showGameClubButton = function (e) {
        p.mainCH.showGameClubButton(e);
      }),
      (c.showInterstitialAdToKs = function (e) {
        d.randomAD10Show() &&
          (0 == e
            ? p.mainCH.showInterstitialAd(null, e)
            : 1 == e
              ? d.randomAD1Show() && p.mainCH.showInterstitialAd(null, e)
              : 2 == e && d.randomAD2Show() && p.mainCH.showInterstitialAd(null, e));
      }),
      (c.showMistake = function (e) {
        d.showMistake(e);
      }),
      (c.showNativeAdFake = function () {
        c.Var._SwitchM0.nativead_fake_show && !c.Var._Global.isNative && d.showNativeAdFake();
      }),
      (c.showRecommend = function () {
        p.mainCH.showRecommend();
      }),
      (c.showShareImageMenu = function () {
        p.mainCH.showShareImageMenu();
      }),
      (c.showToast = x),
      (c.showVideoAd = L),
      (c.startGameRecorderManager = function () {
        p.mainCH.startGameRecorderManager();
      }),
      (c.stopGameRecorderManager = function () {
        p.mainCH.stopGameRecorderManager();
      }),
      (c.storeFeedData = function (e, t) {
        p.mainCH.storeFeedData(e, t);
      }),
      (c.switchManager = function () {
        return d;
      }),
      (c.update_level_info = function (e, t, i = "level") {
        b.update_level_info(e, t, i);
      }),
      (c.update_user_data = function (e, t) {
        b.update_user_data(e, t);
      }),
      (c.vibrateLong = function () {
        p.mainCH.vibrateLong();
      }),
      (c.vibrateShort = function (e = "light") {
        p.mainCH.vibrateShort(e);
      }),
      c
    );
  })({});
});
