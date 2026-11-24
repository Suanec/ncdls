define("libs/min/C.min.js", function (require, module, exports) {
  var _z;
  (!(function (r) {
    var t,
      L = S;
    !(function () {
      for (var t = S, e = n(); ;)
        try {
          if (
            214851 ==
            +parseInt(t(603)) +
              parseInt(t(429)) / 2 +
              parseInt(t(446)) / 3 +
              parseInt(t(797)) / 4 +
              parseInt(t(729)) / 5 +
              (-parseInt(t(575)) / 6) * (parseInt(t(607)) / 7) +
              -parseInt(t(425)) / 8
          )
            break;
          e.push(e.shift());
        } catch (t) {
          e.push(e.shift());
        }
    })();
    class U {
      constructor(t, e, i, n, a) {
        var r = S;
        ((this.FieldOfView = t),
          (this.OrthographicSize = e),
          (this[r(677)] = i),
          (this[r(713)] = n),
          (this.Dutch = a),
          (this[r(533)] = new W.Vec2()));
      }
      static get ["Default"]() {
        return new U(40, 10, 0.1, 5e3, 0);
      }
      get [L(435)]() {
        var t = L;
        return 0 == this[t(533)].y ? 1 : this[t(533)].x / this[t(533)].y;
      }
      static ["FromCamera"](t) {
        var e = L;
        let i = this.Default;
        return (
          t &&
            ((i[e(673)] = t.fieldOfView),
            (i.OrthographicSize = 0.5 * t[e(594)]),
            (i[e(677)] = t[e(601)]),
            (i[e(713)] = t[e(757)]),
            i[e(517)](t)),
          i
        );
      }
      [L(517)](t) {
        var e = L;
        t instanceof U
          ? ((this[e(716)] = t.Orthographic), t[e(533)][e(470)](this[e(533)]))
          : t && ((this[e(716)] = t[e(473)]), this[e(533)][e(461)](t[e(671)], 1));
      }
      static [L(696)](t, e, i, n) {
        var a = L;
        const r = W[a(426)];
        ((i = r[a(642)](i)),
          (n[a(713)] = r[a(696)](t[a(713)], e[a(713)], i)),
          (n.NearClipPlane = r[a(696)](t.NearClipPlane, e[a(677)], i)),
          (n[a(673)] = r[a(696)](t[a(673)], e[a(673)], i)),
          (n.OrthographicSize = r[a(696)](t[a(511)], e[a(511)], i)),
          (n[a(666)] = r.Lerp(t[a(666)], e.Dutch, i)),
          (n.Orthographic = t[a(716)] && e[a(716)]),
          W[a(502)][a(604)](t[a(533)], e[a(533)], i, n[a(533)]));
      }
      [L(416)]() {
        var t = L;
        (this[t(716)] || (this[t(677)] = Math[t(668)](this[t(677)], 0.001)),
          (this.FarClipPlane = Math.max(this[t(713)], this[t(677)] + 0.001)),
          (this.FieldOfView = W.Mathf[t(731)](this[t(673)], 0.01, 179)));
      }
      [L(470)](t) {
        var e = L,
          i = this;
        ((t.FarClipPlane = i[e(713)]),
          (t.NearClipPlane = i.NearClipPlane),
          (t.FieldOfView = i[e(673)]),
          (t.OrthographicSize = i.OrthographicSize),
          (t.Dutch = i[e(666)]),
          (t[e(716)] = i[e(716)]),
          i.SensorSize[e(470)](t[e(533)]));
      }
    }
    function n() {
      var t = [
        "aspectRatio",
        "abs",
        "FieldOfView",
        "Damp",
        "Encapsulate",
        "RadToDeg",
        "NearClipPlane",
        "kLogNegligibleResidual",
        "PredictPositionDelta",
        "Manual",
        "enabled",
        "transformQuat",
        "ParentCamera",
        "Count",
        "BlendTime",
        "Sphere",
        "RemoveActiveCamera",
        "EncapsulateV",
        "UpdateLookAtTargetCache",
        "numWindowLateUpdateMoves",
        "SetMinMax",
        "InvokePostPipelineStageCallback",
        "CinemachineTargetGroup",
        "mExtraState",
        "DetachedFollowTargetDamp",
        "Lerp",
        "VirtualCamera",
        "UpdateSlaveStatus",
        "ReferenceLookAt",
        "IsCut",
        "StepSize",
        "InterpolatePosition",
        "End",
        "Start",
        "OrientationCorrection",
        "multiply",
        "Smoothing",
        "m_OnValidateCalled",
        "gameObject",
        "UpdateVirtualCamera",
        "onEnable",
        "LookAtTargetPosition",
        "FarClipPlane",
        "onLateUpdate",
        "value",
        "Orthographic",
        "m_Custom",
        "mExtensions",
        "FindMember",
        "m_Velocity",
        "ShotQuality",
        "lastPos",
        "BoundSphere",
        "set",
        "CorrectedPosition",
        "BoundingBox",
        "PrePipelineMutateCameraState",
        "Item",
        "339385gJrEGA",
        "DoUpdate",
        "Clamp",
        "GetMaxDampTime",
        "LookAtTarget",
        "Include",
        "add",
        "BlendWeight",
        "ConnectToVcam",
        "GetViewSpaceBoundingBox",
        "invert",
        "Add",
        "ClearCache",
        "m_HavePos",
        "LookAt",
        "Update",
        "getComponents",
        "ClosestPointOnSegment",
        "Contains",
        "Vector3",
        "State",
        "AbstractFollowTargetGroup",
        "CiC",
        "IsValid",
        "_m0",
        "getYawPitchRoll",
        "_v5",
        "CalculateBoundingSphere",
        "farPlane",
        "scale",
        "Quat",
        "MultiplyPoint3x4",
        "_q2",
        "m_StreamingVersion",
        "MAX_VALUE",
        "VirtualCameraGameObject",
        "owner",
        "GetCustomBlendable",
        "InternalUpdateCameraState",
        "m_UpdateMethod",
        "clear",
        "weight",
        "Evaluate",
        "log",
        "RemoveExtension",
        "UpdateFollowTargetCache",
        "Instance",
        "PredictPosition",
        "m_QueuePriority",
        "div",
        "CurrentTime",
        "BlendCurve",
        "GetAllExtraStates",
        "_v2",
        "_v0",
        "Mid-blend",
        "OnValidate",
        "scalarLengthSquared",
        "Abs",
        "PrePipelineMutateCameraStateCallback",
        "m_AveragePos",
        "PreviousStateIsValid",
        "Blend",
        "CalculateAverageOrientation",
        "m_Targets",
        "dot",
        "Abs2",
        "ReferenceUp",
        "897080OXThnr",
        "LensSettings",
        "Validate",
        "AddUntil",
        "PositionDampingBypass",
        "GetWeightedBoundsForMember",
        "mCustom0",
        "_q1",
        "currFrame",
        "Epsilon",
        "FindPotentialTargetBrain",
        "4040056JzUOQq",
        "Mathf",
        "Priority",
        "DetachedLookAtTargetDamp",
        "116838WPhwTR",
        "Approximately",
        "Curve",
        "Bounds",
        "setCenter",
        "ApplyCameraRotation",
        "Aspect",
        "m_parentVcam",
        "CalculateBoundingBox",
        "windowStart",
        "CalculateNewState",
        "IsRecording",
        "mCachedLookAtTargetVcam",
        "NumCustomBlendables",
        "_v9",
        "LookAtTargetGroup",
        "GroupAverage",
        "1000320kyRaAq",
        "Uses",
        "ApplyPosBlendHint",
        "Name",
        "kNegligibleResidual",
        "CameraDisabled",
        "m_BoundingSphere",
        "LoRo",
        "m_SmoothDampVelocity",
        "forEach",
        "UpdateCameraState",
        "CiCoB",
        "m_Priority",
        "m_Pos",
        "m_Time",
        "setValue",
        "transform",
        "TR3",
        "OnTransformParentChanged",
        "localToWorldMatrix",
        "Transform",
        "CalculateAveragePosition",
        "kWraparoundSlush",
        "UpdateTargets",
        "cloneTo",
        "GetTargetPosition",
        "_bs0",
        "orthographic",
        "onAwake",
        "mCustom3",
        "_p0",
        "Angle",
        "FixedUpdate",
        "LateUpdate",
        "UseCache",
        "_p2",
        "m_ValidatingStreamVersion",
        "IsEmpty",
        "PositionCorrection",
        "onStart",
        "DegToRad",
        "delete",
        "_q4",
        "Lens",
        "Follow",
        "SafeFromToRotation",
        "ONE",
        "FinalOrientation",
        "HasHurrentTime",
        "m_PositionMode",
        "Description",
        "TimeInBlend",
        "Reset",
        "PostPipelineStageCallback",
        "FollowTarget",
        "_b0",
        "Vec2",
        "m_RotationMode",
        "mCachedLookAtTargetGroup",
        "target",
        "ValidatingStreamVersion",
        "createFromAxisAngle",
        "m_Script",
        "mCustom1",
        "BlendHint",
        "OrthographicSize",
        "MIN_VALUE",
        "GetCameraRotationToTarget",
        "subtract",
        "timer",
        "cross",
        "SnapshotCameraReadOnlyProperties",
        "Pos",
        "AddRawItem",
        "push",
        "get",
        "RawPosition",
        "ApplyRotBlendHint",
        "FindCustomBlendable",
        "ZERO",
        "kWindowSize",
        "m_StandbyUpdate",
        "Comp",
        "OutputCamera",
        "AbstractLookAtTargetGroup",
        "numWindowFixedUpdateMoves",
        "lastFrameUpdated",
        "SensorSize",
        "DecayedRemainder",
        "center",
        "getMin",
        "_c0",
        "CamA",
        "InitializeModule",
        "AngleAxis",
        "AddCustomBlendable",
        "IsCameraCut",
        "_q0",
        "SignedAngle",
        "onDisable",
        "onDestroy",
        "mCachedFollowTargetVcam",
        "CamB",
        "m_WasStarted",
        "mCachedLookAtTarget",
        "InvokePrePipelineMutateCameraStateCallback",
        "mUpdateStatus",
        "ApplyPositionBlendMethod",
        "InvokeOnTransitionInExtensions",
        "CreateCurves",
        "OnTargetObjectWarped",
        "sign",
        "ForceCameraPosition",
        "rotation",
        "sToDelete",
        "ResolveLookAt",
        "SlerpWithReferenceUp",
        "mCachedFollowTargetGroup",
        "FollowTargetAttachment",
        "m_CustomOverflow",
        "bind",
        "slerp",
        "Duration",
        "CacheTimeRange",
        "zero",
        "parent",
        "HasLookAt",
        "Default",
        "FollowTargetRotation",
        "174mqAiud",
        "length",
        "normalize",
        "AddActiveCamera",
        "CameraEnabled",
        "MoveToTopOfPrioritySubqueue",
        "position",
        "exp",
        "scalarLength",
        "CorrectedOrientation",
        "_q3",
        "cos",
        "CiVCB",
        "kNoPoint",
        "m_CacheTimeRange",
        "RawItems",
        "_v7",
        "DampNNN",
        "InterpolateFOV",
        "orthographicVerticalSize",
        "m_vcamOwner",
        "TargetPositionCache",
        "mCachedFollowTarget",
        "m_CacheMode",
        "GetTargetRotation",
        "m_Weight",
        "nearPlane",
        "getExtent",
        "236706pNlMPd",
        "lerp",
        "_v8",
        "mSlaveStatusUpdated",
        "48482etqJSA",
        "StartTime",
        "CinemachineExtension",
        "name",
        "Vec3",
        "UpdateVcamPoolStatus",
        "_v4",
        "ProjectOnPlane",
        "_v6",
        "_p1",
        "radius",
        "active",
        "Empty",
        "FollowTargetGroup",
        "CacheMode",
        "CacheStepSize",
        "m_Cache",
        "EnsureStarted",
        "UpdateTracker",
        "getCenter",
        "floor",
        "getComponent",
        "CameraDestroyed",
        "createFromYawPitchRoll",
        "IsLiveChild",
        "DecayConstant",
        "onUpdate",
        "LookAtTargetAttachment",
        "PullStateFromVirtualCamera",
        "numWindows",
        "_v3",
        "ResolveFollow",
        "GroupCenter",
        "RawOrientation",
        "RemoveMember",
        "Clamp01",
        "PositionPredictor",
        "m_MaxWeight",
        "AddExtension",
        "Rot",
        "OnTransitionFromCamera",
        "VcamStateLens",
        "setExtent",
        "SetState",
        "sin",
        "splice",
        "PreferredUpdate",
        "OnUpdate",
        "_v1",
        "mCustom2",
        "Script3D",
        "Time",
        "LerpAngle",
        "FollowTargetPosition",
        "AlmostZero",
        "tan",
        "getMax",
        "mLastUpdateTime",
        "min",
        "Dutch",
        "m_ExcludedPropertiesInInspector",
        "max",
        "WeightedMemberBounds",
        "indexOf",
      ];
      return (n = function () {
        return t;
      })();
    }
    r[L(415)] = U;
    class i {
      constructor(t, e) {
        var i = L;
        ((this.m_Custom = t), (this[i(600)] = e));
      }
    }
    class c {
      constructor() {
        var t = L;
        ((this[t(518)] = new W[t(611)]()), (this[t(646)] = new W.Quat()));
      }
      static [L(696)](t, e, i, n) {
        var a = L;
        (W[a(611)][a(604)](t[a(518)], e[a(518)], i, n[a(518)]),
          W[a(759)][a(604)](t[a(646)], e.Rot, i, n[a(646)]));
      }
      ["cloneTo"](t) {
        var e = L;
        (this.Pos[e(470)](t.Pos), this[e(646)][e(470)](t[e(646)]));
      }
    }
    c[L(619)] = new c();
    class s {
      constructor(t, e, i) {
        var n = L;
        ((this[n(701)] = i), (this.StartTime = t), (this[n(623)] = []));
      }
      get [L(684)]() {
        return this[L(623)].length;
      }
      [L(740)](t) {
        var e = L;
        this[e(623)][e(520)](t);
      }
      [L(417)](e, t, i) {
        var n = L,
          a = this[n(623)][n(576)] - 1,
          r = a * this[n(701)],
          s = t - this[n(608)] - r;
        if (i) for (let t = this[n(701)]; t <= s; t += this[n(701)]) this[n(740)](e);
        else {
          var o = this[n(623)][a];
          for (let t = this[n(701)]; t <= s; t += this[n(701)]) {
            var h = new c();
            (c[n(696)](o, e, t / s, h), this[n(740)](h));
          }
        }
      }
      [L(771)](t, e) {
        var i,
          n,
          a = L,
          r = this.m_Cache[a(576)];
        0 != r
          ? ((i = t - this[a(608)]),
            (n = W[a(426)][a(731)](Math[a(627)](i / this[a(701)]), 0, r - 1)),
            (t = this[a(623)][n]),
            n != r - 1
              ? c[a(696)](t, this[a(623)][n + 1], (i - n * this.StepSize) / this[a(701)], e)
              : t[a(470)](e))
          : c[a(619)][a(470)](e);
      }
    }
    class m {}
    class o {
      constructor() {
        this[L(590)] = [];
      }
      [L(519)](t, e, i) {
        for (
          var n = L, a = t - d.CacheStepSize, r = this[n(590)].length - 1, s = r;
          0 <= s && this[n(590)][s][n(658)] > a;
        )
          --s;
        const o = i[n(462)];
        if (s == r) {
          var h = new c();
          (o[n(581)].cloneTo(h.Pos), o[n(559)][n(470)](h[n(646)]));
          const l = new m();
          ((l[n(658)] = t), (l[n(700)] = e), (l.Item = h), this[n(590)].push(l));
        } else {
          ((h = s + 2) <= r && this[n(590)].splice(h, this[n(590)][n(576)] - h),
            (h = new c()),
            o[n(581)][n(470)](h.Pos),
            o.rotation[n(470)](h[n(646)]));
          const u = (this.RawItems[s + 1] = new m());
          ((u[n(658)] = t), (u[n(700)] = e), (u[n(728)] = h));
        }
      }
      [L(555)]() {
        var e = L;
        const i = this[e(590)];
        var n = i[e(576)] - 1,
          t = n < 0 ? 0 : i[0][e(658)],
          a = n < 0 ? 0 : i[n].Time;
        ((this[e(431)] = new s(t, a, d[e(622)])),
          this.Curve[e(740)](n < 0 ? c[e(619)] : i[0].Item));
        for (let t = 1; t <= n; ++t) this[e(431)][e(417)](i[t].Item, i[t][e(658)], i[t].IsCut);
        i[e(576)] = 0;
      }
    }
    class a {
      constructor(t, e) {
        var i = L;
        ((this[i(704)] = t), (this[i(703)] = e));
      }
      get [L(483)]() {
        var t = L;
        return this[t(703)] < this[t(704)];
      }
      ["Contains"](t) {
        var e = L;
        return t >= this.Start && t <= this[e(703)];
      }
      static get ["Empty"]() {
        var t = L;
        return new a(Number[t(763)], Number[t(512)]);
      }
      ["Include"](t) {
        var e = L;
        ((this[e(704)] = Math[e(665)](this[e(704)], t)),
          (this.End = Math[e(668)](this[e(703)], t)));
      }
    }
    class d {
      static get [L(621)]() {
        return this[L(598)];
      }
      static set ["CacheMode"](t) {
        var e = L;
        if (t != this[e(598)])
          switch ((this[e(598)] = t)) {
            default:
            case 0:
            case 1:
              this[e(741)]();
              break;
            case 2:
              this.CreatePlaybackCurves();
          }
      }
      static get [L(440)]() {
        return this.UseCache && 1 == this.m_CacheMode;
      }
      static get ["CurrentPlaybackTimeValid"]() {
        var t = L;
        return this.UseCache && 2 == this[t(598)] && this[t(494)];
      }
      static get [L(483)]() {
        var t = L;
        return this[t(569)][t(483)];
      }
      static get [L(569)]() {
        return this[L(589)];
      }
      static get ["HasHurrentTime"]() {
        var t = L;
        return this[t(589)][t(747)](this[t(779)]);
      }
      static [L(741)]() {
        var t = L,
          e = this;
        ((e[t(623)] = 0 == e[t(621)] ? null : new Map()),
          (e[t(589)] = a.Empty),
          (e[t(779)] = 0),
          (e.CurrentFrame = 0),
          (e[t(542)] = !1));
      }
      static ["CreatePlaybackCurves"]() {
        var e = L;
        (null == this[e(623)] && (this[e(623)] = new Map()),
          this[e(623)][e(455)]((t) => {
            t[e(555)]();
          }));
      }
      static ["GetTargetPosition"](e, i) {
        var n = L,
          a = this;
        const r = e[n(462)];
        if (a[n(480)] && 0 != a[n(621)])
          if (
            (1 == a[n(621)] &&
              !a[n(589)][n(483)] &&
              a[n(779)] < a[n(589)][n(704)] - a[n(468)] &&
              a[n(741)](),
            2 != a.CacheMode || a[n(494)])
          ) {
            let t = a[n(623)].get(e);
            if (!t) {
              if (1 != a[n(621)]) return void r.position[n(470)](i);
              ((t = new o()), a[n(623)].set(e, t));
            }
            if (1 == a[n(621)])
              return (
                t[n(519)](a[n(779)], a[n(542)], e),
                a.m_CacheTimeRange[n(734)](a.CurrentTime),
                void r[n(581)][n(470)](i)
              );
            if (null != t[n(431)]) {
              const s = d._c0;
              (t[n(431)][n(771)](a[n(779)], s), s.Pos[n(470)](i));
            } else r.position[n(470)](i);
          } else r.position[n(470)](i);
        else r.position.cloneTo(i);
      }
      static [L(599)](e, i) {
        var n = L,
          a = this;
        const r = e[n(462)];
        if (0 != a[n(621)])
          if (
            (1 == a[n(621)] &&
              !a[n(589)].IsEmpty &&
              a[n(779)] < a[n(589)].Start - a.kWraparoundSlush &&
              a[n(741)](),
            2 != a[n(621)] || a[n(494)])
          ) {
            let t = a.m_Cache[n(521)](e);
            if (!t) {
              if (1 != a[n(621)]) return void r[n(559)][n(470)](i);
              ((t = new o()), a[n(623)][n(724)](e, t));
            }
            if (1 == a[n(621)])
              return (
                a[n(589)][n(703)] <= a[n(779)] &&
                  (t[n(519)](a.CurrentTime, a[n(542)], e), a[n(589)][n(734)](a.CurrentTime)),
                void r[n(559)].cloneTo(i)
              );
            const s = d[n(537)];
            (t[n(431)][n(771)](a[n(779)], s), s[n(646)][n(470)](i));
          } else r.rotation[n(470)](i);
        else r.rotation[n(470)](i);
      }
    }
    ((d._c0 = new c()), (d[L(622)] = 1 / 60), (d[L(598)] = 0), (d[L(468)] = 0.1), (r[L(596)] = d));
    class D {
      static [L(746)](t, e, i) {
        var n = L,
          a = this;
        let r, s, o;
        return (
          (o =
            t instanceof Laya[n(748)]
              ? ((r = a[n(783)]), (s = a._v1), W.Vec3)
              : ((r = a[n(476)]), (s = a[n(616)]), W.Vec2)),
          o.subtract(i, e, r),
          (i = o[n(786)](r)) < a.Epsilon
            ? 0
            : (o[n(514)](t, e, s), W[n(426)].Clamp01(o[n(794)](s, r) / i))
        );
      }
      static [L(787)](t, e) {
        var i = L;
        e[i(461)](Math.abs(t.x), Math[i(672)](t.y), Math.abs(t.z));
      }
      static [L(795)](t, e) {
        var i = L;
        e[i(461)](Math.abs(t.x), Math[i(672)](t.y));
      }
      static ["AlmostZero"](t) {
        var e = L;
        return W[e(611)][e(786)](t) < 1e-8;
      }
      static ["Angle"](t, e) {
        var i = L;
        const n = W[i(611)];
        var a = this[i(783)];
        n[i(577)](t, a);
        var r = this[i(655)];
        return (
          n.normalize(e, r),
          (t = this._v2),
          n[i(514)](a, r, t),
          (e = n.scalarLength(t)),
          n[i(735)](a, r, t),
          (t = n[i(583)](t)),
          Math.atan2(e, t) * W[i(426)][i(676)] * 2
        );
      }
      static ["SignedAngle"](t, e, i) {
        var n = L;
        const a = W.Vec3;
        var r = this[n(477)](t, e),
          s = this[n(782)];
        return (a[n(516)](t, e, s), Math[n(557)](a[n(794)](i, s)) < 0 ? -r : r);
      }
      static [L(491)](t, e, i, n) {
        var a = L,
          r = this._v2;
        (W[a(611)][a(516)](t, e, r),
          this[a(661)](r) && i[a(470)](r),
          W[a(759)][a(507)](r, this[a(477)](t, e) / 57.29578, n));
      }
      static [L(562)](t, e, i, n, a) {
        var r,
          s = L;
        const o = W[s(611)];
        var h,
          l = this[s(423)],
          u = o[s(583)](t),
          c = o[s(583)](e);
        u < l || c < l
          ? o[s(604)](t, e, i, a)
          : ((h = this._v0),
            (l = this[s(655)]),
            o[s(778)](t, u, h),
            o[s(778)](e, c, l),
            (t = this._q0),
            (e = this[s(421)]),
            W[s(759)][s(453)](h, n, t),
            W[s(759)][s(453)](l, n, e),
            (r = this[s(761)]),
            R[s(562)](t, e, i, n, r),
            o[s(682)](o.FW, r, h),
            o.scale(h, W[s(426)][s(696)](u, c, i), a));
      }
    }
    ((D[L(543)] = new W[L(759)]()),
      (D[L(421)] = new W.Quat()),
      (D[L(761)] = new W[L(759)]()),
      (D._q3 = new W.Quat()),
      (D[L(488)] = new W[L(759)]()),
      (D._v0 = new W[L(611)]()),
      (D._v1 = new W[L(611)]()),
      (D[L(782)] = new W.Vec3()),
      (D[L(637)] = new W[L(611)]()),
      (D[L(476)] = new W.Vec2()),
      (D[L(616)] = new W[L(502)]()),
      (D[L(423)] = 1e-4),
      (r.UVEs = D));
    class R {
      static [L(562)](t, e, i, n, a) {
        var r,
          s = L;
        const o = W[s(611)],
          h = W.Quat;
        var l = this[s(783)],
          u = this[s(655)];
        (o[s(682)](o.FW, t, l),
          o.ProjectOnPlane(l, n, l),
          o[s(682)](o.FW, e, u),
          o[s(614)](u, n, u));
        const c = D.AlmostZero;
        (c(l) || c(u)) && h[s(567)](t, e, i, a);
        var m = this[s(585)],
          u = this[s(488)];
        (h[s(453)](l, n, m), h[s(739)](m, u));
        const d = this._q0,
          v = this._q1;
        (h[s(706)](u, t, d),
          h[s(706)](u, e, v),
          (e = this[s(783)]),
          (r = this[s(655)]),
          d[s(754)](e),
          v[s(754)](r));
        const p = W[s(426)][s(659)][s(566)](W[s(426)]);
        (h[s(630)](p(e.x, r.x, i), p(e.y, r.y, i), p(e.z, r.z, i), u), h[s(706)](m, u, a));
      }
      static ["Normalized"](t, e) {
        W.Quat.normalize(t, e);
      }
      static [L(513)](t, e, i, n) {
        var a = L,
          r = this;
        const s = W[a(611)],
          o = W[a(759)],
          h = D,
          l = h[a(661)];
        l(e) && W.Vec2.ZERO[a(470)](n);
        var u = r._q2;
        o[a(739)](t, u);
        var c = r[a(783)],
          t = r[a(655)];
        (s[a(682)](i, u, c), s[a(682)](e, u, t));
        let m = 0;
        ((e = r._v2),
          s[a(614)](t, c, e),
          l(e) ||
            ((u = r[a(637)]),
            s.ProjectOnPlane(s.FW, c, u),
            l(u) && (0 < s[a(794)](u, c) ? s[a(614)](s.DW, c, u) : s[a(614)](s.UP, c, u)),
            (m = h[a(544)](u, e, c))),
          (e = r._q2),
          o[a(507)](c, m / 57.29578, e),
          (c = r._v0),
          (r = r._v2),
          s.transformQuat(s.FW, e, c),
          s.transformQuat(s.RI, e, r),
          (r = h[a(544)](c, t, r)),
          n[a(461)](r, m));
      }
      static [L(434)](t, e, i, n) {
        var a = L,
          r = this[a(543)],
          s = this[a(421)];
        const o = W[a(759)];
        (o[a(507)](W[a(611)].RI, e.x / 57.29578, r),
          o[a(507)](i, e.y / 57.29578, s),
          o[a(706)](s, t, s),
          o.multiply(s, r, n));
      }
      static [L(540)](t, e, i) {
        var n = L;
        (W.Vec3[n(577)](t, this[n(783)]),
          (e = e * W[n(426)][n(486)] * 0.5),
          W.Vec3[n(758)](this._v0, Math[n(651)](e), this[n(783)]),
          i[n(461)](this[n(783)].x, this[n(783)].y, this[n(783)].z, Math[n(586)](e)));
      }
    }
    ((R[L(543)] = new W[L(759)]()),
      (R[L(421)] = new W[L(759)]()),
      (R._q2 = new W[L(759)]()),
      (R[L(585)] = new W[L(759)]()),
      (R._q4 = new W[L(759)]()),
      (R._v0 = new W.Vec3()),
      (R._v1 = new W[L(611)]()),
      (R._v2 = new W[L(611)]()),
      (R[L(637)] = new W[L(611)]()),
      (r.UQEs = R));
    class v {
      constructor() {
        var t = L;
        ((this.ShotQuality = 1), (this[t(510)] = 0));
      }
      get ["HasLookAt"]() {
        return !isNaN(this[L(699)].x);
      }
      static get [L(588)]() {
        return new Laya[L(748)](NaN, NaN, NaN);
      }
      ["CorrectedPosition"](t) {
        var e = L;
        W[e(611)].add(this[e(522)], this[e(484)], t);
      }
      [L(584)](t) {
        var e = L;
        W[e(759)][e(706)](this[e(640)], this[e(705)], t);
      }
      ["FinalPosition"](t) {
        var e = L;
        W[e(611)][e(735)](this[e(522)], this.PositionCorrection, t);
      }
      ["FinalOrientation"](t) {
        var e = L;
        const i = v[e(761)];
        if ((this[e(584)](i), Math[e(672)](this.Lens.Dutch) > D[e(423)]))
          return (
            W[e(759)].createFromAxisAngle(W.Vec3.FW, this.Lens[e(666)] / 57.29578, t),
            void W.Quat[e(706)](i, t, t)
          );
        i[e(470)](t);
      }
      static get ["Default"]() {
        var t = L;
        let e = new v();
        return (
          (e.Lens = U[t(573)]),
          (e[t(796)] = W.Vec3.up),
          (e[t(699)] = this.kNoPoint),
          (e[t(522)] = W.Vec3[t(570)]),
          (e.RawOrientation = new W.Quat()),
          (e[t(721)] = 1),
          (e[t(484)] = W[t(611)].zero),
          (e[t(705)] = new W[t(759)]()),
          (e[t(418)] = W[t(611)][t(570)]),
          (e[t(510)] = 0),
          e
        );
      }
      ["GetCustomBlendable"](t) {
        var e = L;
        switch (t) {
          case 0:
            return this[e(420)];
          case 1:
            return this.mCustom1;
          case 2:
            return this[e(656)];
          case 3:
            return this[e(475)];
          default:
            return (
              (t -= 4),
              null != this.m_CustomOverflow && t < this.m_CustomOverflow.length
                ? this[e(565)][t]
                : new i(null, 0)
            );
        }
      }
      [L(524)](e) {
        var i = L,
          n = this;
        if (n.mCustom0.m_Custom == e) return 0;
        if (n[i(509)][i(717)] == e) return 1;
        if (n[i(656)][i(717)] == e) return 2;
        if (n.mCustom3[i(717)] == e) return 3;
        if (null != n.m_CustomOverflow)
          for (let t = 0; t < n.m_CustomOverflow[i(576)]; ++t)
            if (n[i(565)][t][i(717)] == e) return t + 4;
        return -1;
      }
      [L(541)](t) {
        var e = L,
          i = this;
        let n = i.FindCustomBlendable(t.m_Custom);
        switch (
          (0 <= n
            ? (t[e(600)] += i.GetCustomBlendable(n)[e(600)])
            : ((n = i[e(442)]), (i.NumCustomBlendables = n + 1)),
          n)
        ) {
          case 0:
            i.mCustom0 = t;
            break;
          case 1:
            i[e(509)] = t;
            break;
          case 2:
            i[e(656)] = t;
            break;
          case 3:
            i[e(475)] = t;
            break;
          default:
            (null == i[e(565)] && (i[e(565)] = []), i[e(565)][e(520)](t));
        }
      }
      static [L(696)](e, i, n, a) {
        var r = L,
          t = this,
          s = D;
        const o = R,
          h = W.Vec2,
          l = W[r(611)],
          u = W[r(759)];
        let c = (n = W.Mathf.Clamp01(n));
        var m = e[r(510)],
          d = i[r(510)];
        (0 != (m & d & 1) && (a[r(510)] |= 1),
          0 != (m & d & 2) && (a[r(510)] |= 2),
          0 != (m & d & 64) && (a.BlendHint |= 64),
          0 != (4 & (m | d)) && (a[r(510)] |= 4),
          0 != (8 & (m | d)) && (a.BlendHint |= 8),
          0 == (64 & (m | d))
            ? U[r(696)](e.Lens, i.Lens, n, a[r(489)])
            : 0 == (m & d & 64) && (0 != (64 & m) ? i : e)[r(489)][r(470)](a[r(489)]),
          l[r(567)](e[r(796)], i[r(796)], n, a[r(796)]),
          (a[r(721)] = W[r(426)][r(696)](e[r(721)], i.ShotQuality, n)));
        var v = e[r(484)],
          p = i[r(484)],
          C = a[r(484)],
          f = t[r(613)];
        l[r(604)](v, p, n, f);
        let g = t[r(448)](v, m, p, d, C, f);
        g[r(470)](C);
        var _,
          f = e[r(705)],
          v = i[r(705)],
          p = a.OrientationCorrection,
          C = t._q0;
        u[r(567)](f, v, n, C);
        let w = t.ApplyRotBlendHint(f, m, v, d, p, C);
        (w[r(470)](p), (v = e[r(699)]), (C = i[r(699)]));
        const S = a[r(699)];
        if (e[r(572)] && i.HasLookAt) {
          var P = e[r(489)][r(673)],
            T = i[r(489)].FieldOfView;
          if (0 == (64 & (m | d)) && !a[r(489)][r(716)] && !W[r(426)][r(430)](P, T)) {
            const A = a.Lens,
              F = t._v4;
            var M = t[r(755)];
            (e.CorrectedPosition(F),
              i[r(725)](M),
              l.subtract(v, F, F),
              l[r(514)](C, M, M),
              (A[r(673)] = W.Mathf[r(696)](P, T, n)),
              (c = Math.abs((A.FieldOfView - P) / (T - P))));
          }
          l.lerp(v, C, c, S);
        } else S.setValue(NaN, NaN, NaN);
        ((p = e.RawPosition),
          (M = i[r(522)]),
          (T = t[r(613)]),
          a.InterpolatePosition(p, v, M, C, n, T),
          (P = a.RawPosition));
        const V = t[r(448)](p, m, M, d, P, T);
        if (
          (V[r(470)](P),
          a[r(572)] &&
            0 != (16 & (m | d)) &&
            ((p = t[r(613)]),
            (_ = t[r(755)]),
            l[r(514)](v, P, p),
            l[r(514)](C, P, _),
            l[r(567)](p, _, c, p),
            l[r(735)](P, p, S)),
          (M = t[r(543)]),
          a[r(640)][r(470)](M),
          (T = e[r(640)]),
          (_ = i[r(640)]),
          0 == (2 & (m | d)))
        ) {
          ((P = t[r(613)]),
            l.Z[r(470)](P),
            a[r(572)] && u.Angle(T, _) > s[r(423)] && (a[r(725)](P), l[r(514)](S, P, P)));
          const y = s[r(661)];
          y(P) || 0 != (32 & (m | d))
            ? u[r(567)](T, _, n, M)
            : ((s = t[r(615)]),
              a.ReferenceUp.cloneTo(s),
              l.normalize(P, P),
              (m = t[r(755)]),
              l.cross(P, s, m),
              y(m) && (u[r(567)](T, _, n, M), l[r(682)](l.UP, M, s)),
              u[r(453)](P, s, M),
              (P = t[r(613)]),
              e[r(725)](P),
              l.subtract(v, P, P),
              (v = t[r(616)]),
              o[r(513)](T, P, s, v),
              h[r(758)](v, -1, v),
              i.CorrectedPosition(m),
              l.subtract(C, m, m),
              (t = t[r(481)]),
              o[r(513)](_, m, s, t),
              h.scale(t, -1, t),
              h[r(604)](v, t, c, v),
              o.ApplyCameraRotation(M, v, s, M));
        }
        const x = this[r(523)](T, d, _, d, a[r(640)], M);
        x.cloneTo(a[r(640)]);
        for (let t = 0; t < e[r(442)]; ++t) {
          const O = e[r(766)](t);
          ((O[r(600)] *= 1 - n), 0 < O.m_Weight && a[r(541)](O));
        }
        for (let t = 0; t < i[r(442)]; ++t) {
          const B = i[r(766)](t);
          ((B[r(600)] *= n), 0 < B[r(600)] && a[r(541)](B));
        }
      }
      static [L(593)](t, e, i, n, a) {
        var r = L;
        const s = W[r(426)];
        var o = 2 * i * Math.tan((t * s[r(486)]) / 2),
          h = 2 * n * Math[r(662)]((e * s.DegToRad) / 2),
          h = s.Lerp(o, h, a);
        let l = 179;
        return (
          (a = s.Lerp(i, n, a)) > D[r(423)] && (l = 2 * Math.tan(h / (2 * a)) * s.RadToDeg),
          s[r(731)](l, Math[r(665)](t, e), Math[r(668)](t, e))
        );
      }
      static ["ApplyPosBlendHint"](t, e, i, n, a, r) {
        return 0 == (1 & (e | n)) ? r : 0 != (e & n & 1) ? a : 0 != (1 & e) ? i : t;
      }
      static [L(523)](t, e, i, n, a, r) {
        return 0 == (2 & (e | n)) ? r : 0 != (e & n & 2) ? a : 0 != (2 & e) ? i : t;
      }
      [L(702)](t, e, i, n, a, r) {
        var s = L,
          o = (l = v)._v7,
          h = l[s(605)],
          l = l[s(443)];
        const u = W[s(611)];
        (t[s(470)](o),
          i[s(470)](h),
          isNaN(e.x) ||
            isNaN(n.x) ||
            (0 != (8 & this.BlendHint)
              ? (u[s(514)](t, e, o),
                u.ProjectOnPlane(o, this[s(796)], o),
                u.subtract(i, n, h),
                u[s(614)](h, this[s(796)], h),
                u[s(567)](o, h, a, l),
                u[s(514)](t, o, o),
                u[s(735)](o, l, o),
                u[s(514)](i, h, h),
                u[s(735)](h, l, h))
              : 0 != (4 & this[s(510)]) &&
                (u[s(514)](t, e, o),
                u[s(514)](i, n, h),
                u[s(567)](o, h, a, l),
                u[s(735)](e, l, o),
                u[s(735)](n, l, h))),
          u[s(604)](o, h, a, r));
      }
      [L(470)](t) {
        var e = L,
          i = this;
        (i[e(489)].cloneTo(t[e(489)]),
          i[e(796)].cloneTo(t[e(796)]),
          i.ReferenceLookAt[e(470)](t[e(699)]),
          i[e(522)][e(470)](t[e(522)]),
          i[e(640)][e(470)](t[e(640)]),
          i[e(484)][e(470)](t[e(484)]),
          i[e(705)].cloneTo(t[e(705)]),
          i[e(418)].cloneTo(t.PositionDampingBypass),
          (t.ShotQuality = i.ShotQuality),
          (t[e(510)] = i[e(510)]));
      }
    }
    ((v[L(783)] = new W.Vec3()),
      (v._v1 = new W.Vec3()),
      (v[L(782)] = new W.Vec3()),
      (v[L(613)] = new W[L(611)]()),
      (v[L(755)] = new W[L(611)]()),
      (v[L(615)] = new W.Vec3()),
      (v[L(591)] = new W[L(611)]()),
      (v[L(605)] = new W[L(611)]()),
      (v[L(443)] = new W[L(611)]()),
      (v[L(543)] = new W[L(759)]()),
      (v[L(421)] = new W[L(759)]()),
      (v[L(761)] = new W[L(759)]()),
      (v[L(616)] = new W[L(502)]()),
      (v[L(481)] = new W.Vec2()),
      (v.I = v[L(573)]),
      (r.CameraState = v));
    class h extends Laya[L(657)] {
      constructor() {
        var t = L;
        (super(...arguments),
          (this[t(667)] = [t(508)]),
          (this.m_ValidatingStreamVersion = 0),
          (this.m_OnValidateCalled = !1),
          (this[t(458)] = 10),
          (this[t(527)] = 2),
          (this[t(718)] = []),
          (this[t(606)] = !1),
          (this.m_parentVcam = null),
          (this[t(777)] = Number.MAX_VALUE));
      }
      get [L(506)]() {
        var t = L;
        return this[t(708)] ? this[t(482)] : 20170927;
      }
      set ["ValidatingStreamVersion"](t) {
        this[L(482)] = t;
      }
      ["GetMaxDampTime"]() {
        var e = L;
        let i = 0;
        if (null != this[e(718)])
          for (let t = 0; t < this.mExtensions.length; ++t)
            i = Math.max(i, this.mExtensions[t][e(732)]());
        return i;
      }
      [L(695)](t, e, i) {
        var n = L,
          a = this[n(564)],
          r = h[n(783)];
        (e instanceof Laya[n(748)]
          ? (W[n(611)][n(668)](W[n(611)].ONE, e, r), W[n(611)].lerp(r, e, a, e))
          : (e = W[n(426)][n(696)](Math[n(668)](1, e), e, a)),
          (i = W[n(426)][n(696)](0, i, a)));
        const s = (t instanceof Laya[n(748)] ? C.Damp : C[n(592)])[n(566)](C);
        return s(t, e, i);
      }
      [L(428)](t, e, i) {
        var n = L,
          a = this[n(634)],
          r = h[n(783)];
        (e instanceof Laya[n(748)]
          ? (W[n(611)][n(668)](W[n(611)][n(492)], e, r), W[n(611)][n(604)](r, e, a, e))
          : (e = W[n(426)][n(696)](Math[n(668)](1, e), e, a)),
          (i = W[n(426)][n(696)](0, i, a)));
        const s = (t instanceof Laya[n(748)] ? C[n(674)] : C.DampNNN).bind(C);
        return s(t, e, i);
      }
      [L(645)](t) {
        const e = this.mExtensions;
        -1 == e.indexOf(t) && e.push(t);
      }
      [L(773)](t) {
        var e = L;
        const i = this[e(718)];
        -1 < (t = i[e(670)](t)) && i.splice(t, 1);
      }
      [L(692)](e, i, n, a) {
        var r = L;
        const s = this[r(718)];
        if (s)
          for (let t = 0; t < s.length; ++t) {
            var o = s[t];
            null == o ? (s[r(652)](t, 1), --t) : o[r(681)] && o[r(692)](e, i, n, a);
          }
        let t = this.ParentCamera instanceof h ? this[r(683)] : null;
        t && t[r(692)](e, i, n, a);
      }
      [L(551)](e, i, n) {
        var a = L;
        const r = this.mExtensions;
        if (r)
          for (let t = 0; t < r[a(576)]; ++t) {
            var s = r[t];
            null == s
              ? (r[a(652)](t, 1), --t)
              : s[a(681)] && s.PrePipelineMutateCameraStateCallback(e, i, n);
          }
        let t = this[a(683)] instanceof h ? this.ParentCamera : null;
        t && t[a(551)](e, i, n);
      }
      [L(554)](e, i, n) {
        var a = L;
        const r = this[a(718)];
        let s = !1;
        if (null != r)
          for (let t = 0; t < r.length; ++t) {
            var o = r[t];
            null == o ? (r[a(652)](t, 1), --t) : o[a(681)] && o[a(647)](e, i, n) && (s = !0);
          }
        return s;
      }
      get [L(449)]() {
        var t = L;
        return this.gameObject[t(610)];
      }
      get [L(496)]() {
        return "";
      }
      get [L(427)]() {
        return this[L(458)];
      }
      set [L(427)](t) {
        this[L(458)] = t;
      }
      [L(553)](t, e) {
        var i = L;
        switch (e) {
          case 1:
            t[i(510)] |= 4;
            break;
          case 2:
            t[i(510)] |= 8;
            break;
          case 3:
            t[i(510)] |= 16;
        }
      }
      get [L(764)]() {
        return null == this ? null : this.gameObject;
      }
      get [L(752)]() {
        return !(null == this);
      }
      get [L(683)]() {
        var t = L;
        return (this.mSlaveStatusUpdated || this[t(698)](), this[t(436)]);
      }
      [L(631)](t, e = 0) {
        return !1;
      }
      [L(456)](t, e) {
        var i = L;
        r[i(751)][i(775)][i(710)](this, t, e);
      }
      ["OnTransitionFromCamera"](t, e, i) {
        var n = L;
        this[n(709)][n(618)] || (this[n(790)] = !1);
      }
      [L(546)]() {
        var t = L;
        r.CiC[t(775)][t(629)](this);
      }
      [L(464)]() {
        var t = L;
        const e = r[t(751)][t(775)];
        (e[t(451)](this), e[t(579)](this), this[t(698)](), this[t(612)]());
      }
      [L(485)]() {
        this.m_WasStarted = !0;
      }
      [L(624)]() {
        var e = L;
        if (!this[e(549)]) {
          this[e(549)] = !0;
          var i = W[e(528)].gChild(this[e(709)], l);
          for (let t = 0; t < i[e(576)]; ++t) i[t][e(624)]();
        }
      }
      [L(785)]() {
        var t = L;
        ((this[t(708)] = !0), (this[t(506)] = this[t(762)]));
      }
      [L(711)]() {
        var i = L;
        const t = (this.gameObject = this.owner);
        (this.UpdateSlaveStatus(), this[i(612)]());
        const e = r[i(751)][i(775)];
        (e.IsLive(this) || (this[i(790)] = !1), e[i(579)](this));
        var n = t[i(745)](h);
        for (let t = 0, e = n[i(576)]; t < e; ++t)
          n[t].enabled && n[t] != this && (this.enabled = !1);
      }
      [L(545)]() {
        var t = L;
        (this.UpdateVcamPoolStatus(), r.CiC[t(775)][t(451)](this));
      }
      [L(633)]() {
        var t = L;
        this[t(458)] != this[t(777)] && this[t(612)]();
      }
      [L(698)]() {
        var t = L;
        ((this.mSlaveStatusUpdated = !0), (this[t(436)] = null));
        let e = this[t(709)][t(571)];
        null != e && (this[t(436)] = e[t(628)](h));
      }
      [L(561)](t) {
        var e = L;
        let i = t;
        return (null == i && null != this.ParentCamera && (i = this[e(683)][e(743)]), i);
      }
      [L(638)](t) {
        var e = L;
        let i = t;
        return (null == i && null != this.ParentCamera && (i = this[e(683)][e(490)]), i);
      }
      ["UpdateVcamPoolStatus"]() {
        var t = L;
        const e = r[t(751)].Instance;
        (e[t(687)](this),
          null == this.m_parentVcam && this[t(681)] && this.gameObject[t(618)] && e[t(578)](this),
          (this.m_QueuePriority = this.m_Priority));
      }
      [L(580)]() {
        this.UpdateVcamPoolStatus();
      }
      [L(556)](e, i) {
        var n = L;
        const a = this[n(718)];
        if (null != a) for (let t = 0; t < a.length; ++t) a[t][n(556)](e, i);
      }
      [L(558)](e, i) {
        var n = L;
        const a = this.mExtensions;
        if (a) for (let t = 0; t < a[n(576)]; ++t) a[t].ForceCameraPosition(e, i);
      }
      ["CreateBlend"](t, e, i, n) {
        var a = L;
        return null == i[a(780)] || i[a(685)] <= 0 || (null == t && null == e)
          ? null
          : ((t =
              null != n
                ? (n.CamA == e &&
                    n[a(548)] == t &&
                    n[a(568)] <= i.BlendTime &&
                    (i[a(460)] = n[a(497)]),
                  new _(n))
                : t || new g(this[a(749)], "(none)")),
            new f(t, e, i[a(780)], i[a(685)], 0));
      }
      [L(635)](t, e, i) {
        var n = L;
        v.I[n(470)](i);
        var a = this[n(709)];
        (d.GetTargetPosition(a, i[n(522)]),
          d[n(599)](a, i[n(640)]),
          t[n(470)](i[n(796)]),
          (t = r.CiC[n(775)][n(424)](this)) && e.SnapshotCameraReadOnlyProperties(t[n(529)]),
          e[n(470)](i[n(489)]));
      }
    }
    ((h[L(783)] = new W[L(611)]()), (h[L(655)] = new W.Vec3()), (r[L(587)] = h));
    class l extends Laya.Script3D {
      constructor() {
        var t = L;
        (super(...arguments), (this.Epsilon = D[t(423)]));
      }
      get [L(697)]() {
        var t = L;
        return (null == this[t(595)] && (this.m_vcamOwner = this.owner[t(628)](h)), this[t(595)]);
      }
      [L(474)]() {
        this[L(737)](!0);
      }
      [L(546)]() {
        this.ConnectToVcam(!1);
      }
      ["EnsureStarted"]() {
        this[L(737)](!0);
      }
      [L(737)](t) {
        var e = L;
        const i = this[e(697)];
        (null != i && (t ? i[e(645)](this) : i[e(773)](this)), (this.mExtraState = null));
      }
      [L(788)](t, e, i) {}
      ["InvokePostPipelineStageCallback"](t, e, i, n) {
        this[L(499)](t, e, i, n);
      }
      [L(499)](t, e, i, n) {}
      ["OnTargetObjectWarped"](t, e) {}
      ["ForceCameraPosition"](t, e) {}
      [L(647)](t, e, i) {
        return !1;
      }
      [L(732)]() {
        return 0;
      }
      ["GetExtraState"](t, e) {
        var i = L;
        let n = this[i(694)];
        n = n || (this[i(694)] = new Map());
        let a = n[i(521)](e);
        return (a || ((a = new t()), n[i(724)](e, a)), a);
      }
      [L(781)]() {
        const t = this[L(694)];
        let e = [];
        return (
          t &&
            t.forEach((t) => {
              e.push(t);
            }),
          e
        );
      }
    }
    r[L(609)] = l;
    class u {
      constructor(t, e) {
        var i = L;
        ((this[i(526)] = 30),
          (this[i(438)] = 0),
          (this[i(690)] = 0),
          (this[i(531)] = 0),
          (this.numWindows = 0),
          (this[i(532)] = 0),
          (this.windowStart = t),
          (this[i(532)] = Laya[i(515)][i(422)]),
          (this[i(653)] = 1),
          (this[i(722)] = new W.M4()),
          e[i(470)](this[i(722)]));
      }
      [L(654)](t, e, i) {
        var n = L;
        this[n(722)] != i &&
          (1 == e ? ++this[n(690)] : this[n(532)] != t && ++this[n(531)],
          i[n(470)](this[n(722)]),
          (i = 3 < this.numWindowFixedUpdateMoves && this[n(690)] < this[n(531)] / 3 ? 0 : 1),
          0 == this.numWindows && (this[n(653)] = i),
          this[n(438)] + this[n(526)] <= t &&
            ((this[n(653)] = i),
            ++this[n(636)],
            (this.windowStart = t),
            (this.numWindowLateUpdateMoves = 1 == this[n(653)] ? 1 : 0),
            (this[n(531)] = 0 == this[n(653)] ? 1 : 0)));
      }
    }
    class e {
      static [L(539)]() {
        var t = L;
        this[t(552)][t(769)]();
      }
      static [L(469)](n) {
        var a = L;
        let r = Laya[a(515)][a(422)];
        const s = this._m;
        this[a(552)].forEach((t, e) => {
          var i = a;
          (W.TR3.localToWorldMatrix(e, s), t[i(654)](r, n, s));
        });
        for (let t = this[a(560)][a(576)] - 1; 0 <= t; --t)
          this.mUpdateStatus[a(487)](this[a(560)][t]);
        this[a(560)][a(576)] = 0;
      }
      static ["GetPreferredUpdate"](e) {
        var i = L;
        if (e) {
          let t = this[i(552)].get(e);
          if (t) return t.PreferredUpdate;
          var n = this._m;
          (W[i(463)][i(465)](e, n),
            (t = new u(Laya[i(515)][i(422)], n)),
            this.mUpdateStatus[i(724)](e, t));
        }
        return 1;
      }
      static [L(654)](t) {
        var e = L,
          i = r[e(751)][e(779)];
        i != this[e(664)] && ((this[e(664)] = i), this[e(469)](t));
      }
    }
    ((e._m = new W.M4()), (e[L(552)] = new Map()), (e.sToDelete = []), (r[L(625)] = e));
    class p {
      constructor() {
        var t = L;
        ((this[t(720)] = new W[t(611)]()),
          (this[t(454)] = new W[t(611)]()),
          (this[t(459)] = new W[t(611)]()),
          (this[t(742)] = !1),
          (this[t(707)] = 0));
      }
      ["IsEmpty"]() {
        return !this.m_HavePos;
      }
      ["ApplyTransformDelta"](t) {
        var e = L,
          i = this[e(459)];
        W[e(611)].add(i, t, i);
      }
      [L(498)]() {
        var t = L;
        ((this.m_HavePos = !1),
          W[t(611)].Z[t(470)](this[t(454)]),
          W[t(611)].Z.cloneTo(this.m_Velocity));
      }
      ["AddPosition"](t, e, i) {
        var n = L,
          a = this;
        e < 0 && a[n(498)]();
        var r = a[n(459)];
        if (a[n(742)] && e > D[n(423)]) {
          var s = p[n(783)];
          (W[n(611)][n(514)](t, r, s), W[n(611)][n(778)](s, e, s));
          const l = Laya.Vector3[n(786)];
          var o = a[n(720)],
            h = l(s) < l(o);
          W.Vec3.SmoothDamp(o, s, a.m_SmoothDampVelocity, a[n(707)] / (h ? 30 : 10), 1e30, e, o);
        }
        (t[n(470)](r), (this[n(742)] = !0));
      }
      [L(679)](t, e) {
        var i = L;
        W[i(611)][i(758)](this.m_Velocity, t, e);
      }
      [L(776)](t, e) {
        var i = L;
        (this[i(679)](t, e), W[i(611)][i(735)](this.m_Pos, e, e));
      }
    }
    ((p[L(783)] = new W[L(611)]()), (r[L(643)] = p));
    class C {
      static [L(632)](t, e) {
        return Math[L(772)](1 / e) / t;
      }
      static [L(534)](t, e, i) {
        return t / Math[L(582)](e * i);
      }
      static ["DampNNN"](t, e, i) {
        var n = L;
        return (
          this[n(423)],
          e < this[n(423)] || Math[n(672)](t) < this.Epsilon
            ? t
            : i < this[n(423)]
              ? 0
              : ((e = -this.kLogNegligibleResidual / e), t * (1 - Math[n(582)](-e * i)))
        );
      }
      static [L(674)](t, e, i) {
        var n = L;
        let a, r, s;
        return (
          e instanceof Laya[n(748)] ? ((a = e.x), (r = e.y), (s = e.z)) : (a = r = s = e),
          (t.x = this[n(592)](t.x, a, i)),
          (t.y = this[n(592)](t.y, r, i)),
          (t.z = this[n(592)](t.z, s, i)),
          t
        );
      }
    }
    ((C[L(423)] = D.Epsilon), (C[L(450)] = 0.01), (C[L(678)] = -4.605170186));
    class f {
      constructor(t, e, i, n, a) {
        var r = L;
        ((this.CamA = t),
          (this.CamB = e),
          (this[r(780)] = i),
          (this[r(497)] = a),
          (this[r(568)] = n));
      }
      get [L(736)]() {
        var t = L;
        const e = this[t(780)];
        return null == e || e[t(576)] < 2 || this.IsComplete
          ? 1
          : W.Mathf[t(642)](e.Evaluate(this.TimeInBlend / this[t(568)]));
      }
      get [L(752)]() {
        var t = L;
        return (this[t(538)] && this[t(538)][t(752)]) || (this.CamB && this.CamB[t(752)]);
      }
      get ["IsComplete"]() {
        var t = L;
        return this[t(497)] >= this[t(568)] || !this[t(752)];
      }
      [L(447)](t) {
        var e = L,
          i = this[e(538)],
          n = this[e(548)];
        if (t == i || t == n) return !0;
        let a = i instanceof _ ? i : null;
        return !!(
          (a && a.Blend[e(447)](t)) ||
          ((a = n instanceof _ ? n : null), a && a[e(791)][e(447)](t))
        );
      }
      ["UpdateCameraState"](t, e) {
        var i = L;
        const n = this[i(538)],
          a = this[i(548)];
        (n && n.IsValid && n.UpdateCameraState(t, e), a && a[i(752)] && a[i(456)](t, e));
      }
      [L(749)](t) {
        var e = L;
        const i = this[e(538)],
          n = this[e(548)];
        if (!i || !i[e(752)])
          return n && n.IsValid ? void n[e(749)][e(470)](t) : void v.I[e(470)](t);
        n && n[e(752)] ? v[e(696)](i[e(749)], n[e(749)], this[e(736)], t) : i[e(749)][e(470)](t);
      }
    }
    r.CinemachineBlend = f;
    class g {
      constructor(t, e) {
        var i = L;
        ((this[i(749)] = t), (this[i(449)] = e));
      }
      [L(650)](t) {
        this[L(749)] = t;
      }
      get [L(496)]() {
        return "";
      }
      get ["VirtualCameraGameObject"]() {
        return null;
      }
      get ["IsValid"]() {
        return !0;
      }
      get [L(683)]() {
        return null;
      }
      ["IsLiveChild"](t, e = 0) {
        return !1;
      }
      [L(456)](t, e) {}
      [L(767)](t, e) {}
      [L(647)](t, e, i) {}
      [L(556)](t, e) {}
    }
    class _ {
      constructor(t) {
        var e = L;
        ((this[e(427)] = 0), (this[e(791)] = t), (this[e(749)] = v[e(573)]));
      }
      get [L(449)]() {
        return L(784);
      }
      get [L(496)]() {
        return null;
      }
      get [L(764)]() {
        return null;
      }
      get [L(752)]() {
        var t = L;
        return null != this[t(791)] && this[t(791)][t(752)];
      }
      get [L(683)]() {
        return null;
      }
      [L(631)](t, e = 0) {
        var i = L;
        return null != this[i(791)] && (t == this[i(791)].CamA || t == this[i(791)][i(548)]);
      }
      [L(439)](t, e) {
        var i = L;
        this.State[i(470)](e);
      }
      [L(456)](t, e) {
        var i = L;
        null != this[i(791)] && (this.Blend[i(456)](t, e), this[i(791)][i(749)](this[i(749)]));
      }
      [L(767)](t, e) {}
      [L(647)](t, e, i) {}
      [L(556)](t, e) {}
    }
    r.BlendSourceVirtualCamera = _;
    class w {}
    function S(t, e) {
      var i = n();
      return (S = function (t, e) {
        return i[(t -= 415)];
      })(t, e);
    }
    let P;
    (((t = P = P || {})[(t[L(639)] = 0)] = "GroupCenter"), (t[(t[L(445)] = 1)] = L(445)));
    let T;
    (((t = T = T || {})[(t[L(680)] = 0)] = L(680)), (t[(t.GroupAverage = 1)] = L(445)));
    let M;
    (((t = M = M || {})[(t[L(744)] = 0)] = "Update"),
      (t[(t[L(478)] = 1)] = L(478)),
      (t[(t[L(479)] = 2)] = "LateUpdate"));
    class V extends Laya[L(657)] {
      constructor() {
        var t = L;
        (super(...arguments),
          (this[t(495)] = P[t(639)]),
          (this[t(503)] = T[t(680)]),
          (this[t(768)] = M[t(479)]),
          (this[t(793)] = []));
      }
      get [L(466)]() {
        return this[L(709)];
      }
      get [L(686)]() {
        return this.m_BoundingSphere;
      }
      get [L(483)]() {
        var e = L;
        for (let t = 0; t < this[e(793)][e(576)]; ++t)
          if (null != this.m_Targets[t][e(505)] && this[e(793)][t][e(770)] > D[e(423)]) return !1;
        return !0;
      }
      ["AddMember"](t, e, i) {
        var n = L;
        let a = this.m_Targets,
          r = 0;
        (null == a ? (a = this[n(793)] = []) : ((r = a[n(576)]), (a[r] = new w())),
          (a[r][n(505)] = t),
          (a[r][n(770)] = e),
          (a[r][n(617)] = i));
      }
      [L(641)](t) {
        var e = L;
        0 <= (t = this.FindMember(t)) && this.m_Targets[e(652)](t, 1);
      }
      [L(719)](e) {
        var i = L,
          n = this[i(793)];
        if (null != n) for (let t = n[i(576)] - 1; 0 <= t; --t) if (n[t][i(505)] == e) return t;
        return -1;
      }
      [L(419)](t, e) {
        var i = L,
          n = this[i(793)];
        t < 0 || t >= n.length
          ? this[i(686)][i(470)](e)
          : V[i(669)](n[t], this[i(789)], this[i(644)][i(715)], e);
      }
      [L(738)](t, i) {
        var n = L;
        const a = V;
        var r = a._m0;
        t[n(739)](r);
        var s = a[n(783)];
        (W.M4[n(760)](r, this[n(789)], s), i[n(433)](s), i.setExtent(W.Vec3.Z));
        var o = a._bs0;
        const h = a[n(501)];
        for (let t = 0, e = this[n(793)][n(576)]; t < e; ++t)
          (this[n(419)](t, o),
            W.M4[n(760)](r, o[n(535)], o.center),
            h[n(433)](o[n(535)]),
            W.Vec3[n(758)](W.Vec3[n(492)], 2 * o[n(617)], s),
            h.setExtent(s),
            a[n(675)](i, h));
      }
      static [L(691)](t, e, i) {
        var n = L;
        (W[n(611)][n(514)](i, e, i),
          W.Vec3[n(758)](i, 0.5, i),
          t.setExtent(i),
          W.Vec3[n(735)](e, t.getExtent(), e),
          t[n(433)](e));
      }
      static [L(688)](t, e) {
        var i = L,
          n = this[i(637)],
          a = this[i(613)];
        (W.Vec3.min(t.getMin(), e, n), W[i(611)][i(668)](t[i(663)](), e, a), this[i(691)](t, n, a));
      }
      static ["Encapsulate"](t, e) {
        var i = L,
          n = this[i(783)];
        (W[i(611)][i(514)](e[i(626)](), e[i(602)](), n),
          this[i(688)](t, n),
          W[i(611)][i(735)](e[i(626)](), e.getExtent(), n),
          this[i(688)](t, n));
      }
      static ["WeightedMemberBounds"](t, e, i, n) {
        var a = L;
        let r = 0;
        var s = V[a(655)];
        (e[a(470)](s),
          t[a(505)] &&
            (d.GetTargetPosition(t[a(505)], s),
            (r = Math[a(668)](0, t.weight)),
            i > D[a(423)] && r < i ? (r /= i) : (r = 1)),
          e[a(470)](n.center),
          (n[a(617)] = t[a(617)] * r),
          W.Vec3[a(604)](e, s, r, n.center));
      }
      [L(730)]() {
        var t = L;
        (this[t(467)](this.m_MaxWeight, this[t(789)]),
          this[t(437)](this[t(789)], this[t(644)][t(715)], this[t(726)]),
          this[t(756)](this[t(644)][t(715)], this[t(452)]));
        const e = this.gameObject.transform;
        switch (this.m_PositionMode) {
          case P[t(639)]:
            e.position = this[t(686)][t(535)];
            break;
          case P[t(445)]:
            e[t(581)] = this[t(789)];
        }
        switch (this[t(503)]) {
          case T[t(680)]:
            break;
          case T.GroupAverage:
            var i = V[t(543)];
            (this[t(792)](i), (e.rotation = i));
        }
      }
      [L(756)](i, n) {
        var a = L;
        const t = this[a(709)][a(462)];
        var r = n[a(535)];
        t[a(581)][a(470)](r);
        let s = !(n[a(617)] = 1);
        const o = V;
        var h = o[a(783)],
          l = o[a(655)];
        const u = o[a(472)];
        var c,
          m = this.m_Targets;
        for (let t = 0, e = m[a(576)]; t < e; ++t)
          null == m[t][a(505)] ||
            m[t][a(770)] < D[a(423)] ||
            (o[a(669)](m[t], this[a(789)], i, u),
            s
              ? (W.Vec3[a(514)](u.center, r, h),
                (c = W[a(611)].scalarLength(h) + u[a(617)]) > n[a(617)] &&
                  ((n[a(617)] = 0.5 * (n[a(617)] + c)),
                  W.Vec3[a(758)](r, n.radius, h),
                  W[a(611)].scale(r, c - n.radius, l),
                  W.Vec3[a(735)](h, l, h),
                  W[a(611)][a(778)](h, c, r)))
              : ((s = !0), u.cloneTo(n)));
      }
      [L(467)](e, t) {
        var i = L;
        const n = this[i(709)][i(462)];
        var a = V,
          r = a._v0;
        const s = a[i(655)];
        W[i(611)].Z.cloneTo(t);
        let o = 0;
        for (let t = (e[i(715)] = 0); t < this.m_Targets[i(576)]; ++t)
          null != this[i(793)][t].target &&
            ((o += this.m_Targets[t].weight),
            d[i(471)](this.m_Targets[t].target, r),
            W[i(611)][i(758)](r, this[i(793)][t][i(770)], r),
            W[i(611)].add(s, r, r),
            (e[i(715)] = Math[i(668)](e[i(715)], this.m_Targets[t][i(770)])));
        (o > D.Epsilon ? W[i(611)][i(778)](s, o, s) : n[i(581)][i(470)](s), s[i(470)](t));
      }
      [L(792)](e) {
        var i = L;
        this[i(644)][i(715)] <= D[i(423)] && this[i(709)][i(462)][i(559)][i(470)](e);
        let n = 0;
        var a,
          r,
          s = V,
          o = s[i(421)];
        W[i(759)].I.cloneTo(o);
        for (let t = 0; t < this[i(793)][i(576)]; ++t)
          null != this[i(793)][t][i(505)] &&
            ((a = this.m_Targets[t][i(770)] / this.m_MaxWeight[i(715)]),
            (r = s[i(761)]),
            d.GetTargetRotation(this.m_Targets[t][i(505)], r),
            W[i(759)][i(567)](W[i(759)].I, r, a, e),
            W[i(759)][i(706)](o, e, o),
            (n += a));
        W.Quat.slerp(W[i(759)].I, o, 1 / n, e);
      }
      [L(437)](t, i, n) {
        var a = L;
        if ((new Laya[a(432)](t, W[a(611)].Z), i > D.Epsilon)) {
          var r = this.m_Targets;
          const h = V,
            l = h._bs0,
            u = h[a(501)];
          var s = h[a(637)],
            o = h[a(613)];
          for (let t = 0, e = r[a(576)]; t < e; ++t)
            r[t].target &&
              (h[a(669)](r[t], this[a(789)], i, l),
              l[a(535)][a(470)](s),
              W[a(611)][a(492)][a(470)](o),
              W[a(611)][a(758)](o, 2 * l.radius, o),
              u.setCenter(s),
              u[a(649)](o),
              h[a(675)](n, u));
        }
      }
      ["OnValidate"]() {
        var i = L;
        const n = this.m_Targets;
        for (let t = 0, e = n.length; t < e; ++t)
          ((n[t][i(770)] = Math[i(668)](0, n[t].weight)),
            (n[t].radius = Math[i(668)](0, n[t][i(617)])));
      }
      [L(633)]() {
        var t = L;
        this[t(768)] == M[t(744)] && this[t(730)]();
      }
      [L(714)]() {
        var t = L;
        this[t(768)] == M[t(479)] && this[t(730)]();
      }
      ["GetViewSpaceAngularBounds"](t, e, i, n) {
        var a = L;
        const r = V;
        W.Vec2[a(525)][a(470)](n);
        var s = r[a(753)];
        t[a(739)](s);
        const o = r[a(501)];
        var h,
          l = r._bs0,
          u = r[a(637)];
        const c = r._v4,
          m = r[a(655)],
          d = r[a(783)];
        let v = !1;
        for (let t = 0, e = this[a(793)].length; t < e; ++t)
          (this[a(419)](t, l),
            W.M4[a(760)](s, l[a(535)], u),
            u.z < D[a(423)] ||
              ((h = l.radius / u.z),
              c[a(461)](h, h, 0),
              W[a(611)][a(778)](u, u.z, m),
              v
                ? (W.Vec3[a(735)](m, c, d),
                  r[a(688)](o, d),
                  W[a(611)].subtract(m, c, d),
                  r.EncapsulateV(o, d),
                  (n.x = Math[a(665)](n.x, u.z - l[a(617)])),
                  (n.y = Math[a(668)](n.y, u.z + l.radius)))
                : (o[a(433)](m),
                  o[a(649)](c),
                  n[a(461)](u.z - l[a(617)], u.z + l[a(617)]),
                  (v = !0))));
        var p = o[a(536)](),
          t = o[a(663)]();
        (d[a(461)](0, p.y, 1),
          m[a(461)](p.x, 0, 1),
          e[a(461)](
            W[a(611)][a(544)](W[a(611)].FW, d, W[a(611)].RI),
            W[a(611)][a(544)](W[a(611)].FW, m, W[a(611)].UP),
          ),
          d[a(461)](0, t.y, 1),
          m.setValue(t.x, 0, 1),
          i[a(461)](
            W.Vec3[a(544)](W[a(611)].FW, d, W[a(611)].RI),
            W.Vec3[a(544)](W[a(611)].FW, m, W[a(611)].UP),
          ));
      }
    }
    ((V[L(783)] = new W[L(611)]()),
      (V._v1 = new W.Vec3()),
      (V[L(637)] = new W[L(611)]()),
      (V[L(613)] = new W[L(611)]()),
      (V[L(543)] = new W[L(759)]()),
      (V._q1 = new W[L(759)]()),
      (V[L(761)] = new W.Quat()),
      (V[L(753)] = new W.M4()),
      (V._b0 = new Laya[L(432)](W[L(611)][L(570)], W.Vec3[L(570)])),
      (V[L(472)] = new Laya[L(723)](W[L(611)][L(570)], 0)),
      (r[L(693)] = V));
    class x extends Laya[L(657)] {
      constructor() {
        var t = L;
        (super(...arguments), (this[t(423)] = D[t(423)]));
      }
      get [L(697)]() {
        var t = L;
        let e = this[t(595)];
        var i = h;
        null == e && (e = this.owner[t(628)](i));
        const n = this[t(765)][t(571)];
        return (null == e && null != n && (e = n[t(628)](i)), (this[t(595)] = e), e);
      }
      get ["FollowTarget"]() {
        var t = L,
          e = this[t(697)];
        return null == e ? null : e[t(490)];
      }
      get [L(733)]() {
        var t = L,
          e = this[t(697)];
        return null == e ? null : e[t(743)];
      }
      [L(774)]() {
        var t = L;
        ((this.mCachedFollowTargetVcam = null), (this[t(563)] = null));
        const e = (this[t(597)] = this[t(500)]);
        e &&
          ((this[t(547)] = e.getComponent(h)), (this.mCachedFollowTargetGroup = e.getComponent(V)));
      }
      get ["AbstractFollowTargetGroup"]() {
        var t = L;
        return (this[t(500)] != this[t(597)] && this[t(774)](), this[t(563)]);
      }
      get [L(620)]() {
        return this[L(750)];
      }
      [L(660)](t) {
        var e = L,
          i = this,
          n = i.FollowTarget;
        return (
          n != i.mCachedFollowTarget && i[e(774)](),
          i[e(547)]
            ? i[e(547)][e(749)].FinalPosition(t)
            : n
              ? d[e(471)](n, t)
              : W[e(611)].Z[e(470)](t)
        );
      }
      [L(574)](t) {
        var e = L;
        let i = this[e(500)],
          n = this[e(547)];
        return (
          i != this[e(597)] &&
            ((this[e(547)] = null),
            (this.mCachedFollowTarget = i),
            i && (n = this[e(547)] = i[e(628)](h))),
          n ? n[e(749)][e(493)](t) : i ? d.GetTargetRotation(i, t) : W[e(759)].I[e(470)](t)
        );
      }
      [L(689)]() {
        var t = L,
          e = this;
        ((e[t(441)] = null), (e[t(504)] = null));
        const i = (e[t(550)] = e[t(733)]);
        null != i && ((e[t(441)] = i.getComponent(h)), (this[t(504)] = i.getComponent(V)));
      }
      get [L(530)]() {
        var t = L;
        return (this.LookAtTarget != this[t(550)] && this[t(689)](), this[t(504)]);
      }
      get [L(444)]() {
        return this[L(530)];
      }
      [L(712)](t) {
        var e = L,
          i = this[e(733)];
        i != this.mCachedLookAtTarget && this[e(689)]();
        const n = this.mCachedLookAtTargetVcam;
        return n ? n[e(749)].FinalPosition(t) : i ? d[e(471)](i, t) : W.Vec3.Z[e(470)](t);
      }
      ["LookAtTargetRotation"](t) {
        var e = L,
          i = this.LookAtTarget;
        i != this[e(550)] && this[e(689)]();
        const n = this.mCachedLookAtTargetVcam;
        return n ? n[e(749)].FinalOrientation(t) : i ? d[e(599)](i, t) : W.Quat.I[e(470)](t);
      }
      ["VcamState"](t) {
        const e = this[L(697)];
        e || e.State.cloneTo(t);
      }
      get [L(648)]() {
        var t = L;
        return this[t(697)] ? this[t(697)][t(749)][t(489)] : null;
      }
      [L(727)](t, e) {}
      get ["BodyAppliesAfterAim"]() {
        return !1;
      }
      [L(647)](t, e, i, n) {
        return !1;
      }
      [L(556)](t, e) {}
      [L(558)](t, e) {}
      [L(732)]() {
        return 0;
      }
    }
    ((x[L(783)] = new W[L(611)]()),
      (x[L(543)] = new W[L(759)]()),
      (x._q1 = new W.Quat()),
      (x[L(761)] = new W[L(759)]()),
      (r[L(457)] = x));
  })((_z = _z || {})),
    (function (x) {
      !(function () {
        function t(t, e) {
          return n(t - -436, e);
        }
        for (var e = o(); ;)
          try {
            if (
              138145 ==
              +parseInt(t(35, 54)) +
                -parseInt(t(328, 221)) / 2 +
                (parseInt(t(171, 227)) / 3) * (parseInt(t(318, 120)) / 4) +
                (-parseInt(t(88, 196)) / 5) * (-parseInt(t(400, 239)) / 6) +
                -parseInt(t(271, 358)) / 7 +
                parseInt(t(285, 306)) / 8 +
                (parseInt(t(65, 151)) / 9) * (-parseInt(t(310, 88)) / 10)
            )
              break;
            e.push(e.shift());
          } catch (t) {
            e.push(e.shift());
          }
      })();
      class e extends W[I(628, 769)] {}
      x[I(818, 925)] = e;
      class h {
        constructor(t, e, i, n) {
          function a(t, e) {
            return I(e, t - -179);
          }
          ((this[a(582, 387)] = t),
            (this[a(801, 861)] = e),
            (this[a(637, 583)] = i),
            (this[a(456, 379)] = n));
        }
      }
      (class extends W[I(878, 652)] {});
      class c {
        constructor() {
          function t(t, e) {
            return I(t, e - 22);
          }
          ((this.mActiveBrains = []),
            (this[t(994, 958)] = []),
            (this[t(692, 642)] = []),
            (this[t(725, 851)] = null));
        }
        static get [I(719, 781)]() {
          function t(t, e) {
            return I(e, t - 197);
          }
          return (null == this[t(1117, 1126)] && (this[t(1117, 1262)] = new c()), this.sInstance);
        }
        static get [I(817, 671)]() {
          function t(t, e) {
            return I(t, e - -661);
          }
          return 0 <= this[t(143, -54)]
            ? this.UniformDeltaTimeOverride
            : 0.001 * W[t(-214, -66)].avg_d;
        }
        static get ["CurrentTime"]() {
          function t(t, e) {
            return I(e, t - -139);
          }
          return 0 <= this[t(820, 788)] ? this[t(820, 721)] : 0.001 * Date[t(482, 680)]();
        }
        get [I(806, 690)]() {
          return this.mActiveBrains.length;
        }
        static [I(1087, 875)]() {
          function t(t, e) {
            return I(e, t - 314);
          }
          const e = Laya.ClassUtils[t(1155, 1229)];
          (e(t(1082, 955), C[t(1082, 918)]),
            e(t(1002, 1179), C.CiVC),
            e(t(1042, 823), C.CiPi),
            e(t(1080, 923), C[t(1080, 1294)]),
            e(t(960, 1081), C[t(960, 1116)]),
            e(t(1137, 984), C[t(1137, 953)]),
            e(t(906, 785), C[t(906, 1116)]),
            e(t(1164, 1352), C.Ci3PF),
            e(t(996, 1135), C[t(996, 1162)]));
        }
        [I(1019, 870)](t) {
          return this[I(726, 541)][t];
        }
        ["AddActiveBrain"](t) {
          function i(t, e) {
            return I(t, e - -577);
          }
          this[i(376, 180)](t);
          const n = this[i(-241, -36)];
          for (let t = 0, e = n[i(198, 365)]; t < e; t++) n[t + 1] = n[t];
          n[0] = t;
        }
        ["RemoveActiveBrain"](t) {
          function e(t, e) {
            return I(e, t - 467);
          }
          const i = this[e(1008, 988)];
          -1 < (t = i[e(1110, 941)](t)) && i[e(1086, 1024)](t, 1);
        }
        get [I(1009, 904)]() {
          function t(t, e) {
            return I(e, t - -870);
          }
          return this[t(66, 50)][t(72, -122)];
        }
        [I(435, 616)](t) {
          return this.mActiveCameras[t];
        }
        [I(935, 966)](t) {
          this[n(476, 657)](t);
          let e;
          const i = this[n(1078, 916)];
          function n(t, e) {
            return I(t, e - -20);
          }
          var a = i[n(1129, 922)];
          for (e = 0; e < a && !(t[n(1003, 780)] >= i[e][n(999, 780)]); ++e);
          for (let t = e; t < a; t++) i[t + 1] = i[t];
          i[e] = t;
        }
        ["RemoveActiveCamera"](t) {
          const e = this.mActiveCameras;
          function i(t, e) {
            return I(t, e - 723);
          }
          -1 < (t = e[i(1182, 1366)](t)) && e[i(1369, 1342)](t, 1);
        }
        ["CameraDestroyed"](t) {
          function e(t, e) {
            return I(t, e - 272);
          }
          const i = this.mActiveCameras;
          var n = i[e(828, 915)](t);
          (-1 < n && i[e(715, 891)](n, 1),
            null != this[e(892, 977)] &&
              this.mUpdateStatus[e(874, 825)](t) &&
              this.mUpdateStatus.delete(t));
        }
        [I(852, 817)](e) {
          let i = 0;
          for (let t = e[n(1116, 956)]; null != t; t = t[n(841, 956)]) ++i;
          for (; this[n(818, 639)][n(939, 961)] <= i;) this[n(518, 639)].push(new Array());
          function n(t, e) {
            return I(t, e - 19);
          }
          this.mAllCameras[i].push(e);
        }
        [I(781, 572)](t) {
          function e(t, e) {
            return I(t, e - 252);
          }
          ((this.mAllCameras[e(1234, 1194)] = 0),
            this.mRoundRobinVcamLastFrame == t && (this[e(1235, 1081)] = null));
        }
        ["UpdateAllActiveVirtualCameras"](e, i, n) {
          var a = this.CurrentUpdateFilter,
            r = 8 != a;
          let s = this[o(1378, 1188)];
          var t = c[o(1160, 967)];
          function o(t, e) {
            return I(t, e - 359);
          }
          t != c[o(1071, 1161)] && ((c[o(1184, 1161)] = t), 0 == (-9 & a) && ++this[o(1266, 1326)]);
          for (let t = this[o(1041, 979)][o(1345, 1301)] - 1; 0 <= t; --t) {
            var h = this.mAllCameras[t];
            for (let t = h[o(1293, 1301)] - 1; 0 <= t; --t) {
              var l = h[t];
              (r && l == this[o(1102, 1188)] && (s = null),
                null != l
                  ? 1 == l[o(1265, 1086)] || this[o(1350, 1256)](l)
                    ? 0 != ((1 << l[o(973, 1160)][o(1264, 1287)]) & e) &&
                      this.UpdateVirtualCamera(l, i, n)
                    : null == s &&
                      this[o(978, 1188)] != l &&
                      r &&
                      0 != l[o(952, 1086)] &&
                      l[o(1318, 1254)] &&
                      l[o(1037, 1160)][o(1369, 1334)] &&
                      ((this.CurrentUpdateFilter &= -9),
                      this[o(1281, 1183)](l, i, n),
                      (this[o(1318, 1144)] = a),
                      (s = l))
                  : h[o(1005, 978)](t, 1));
            }
          }
          r && (s == this.mRoundRobinVcamLastFrame && (s = null), (this[o(1228, 1188)] = s));
        }
        [I(697, 824)](e, i, n) {
          function a(t, e) {
            return I(t, e - -959);
          }
          if (null != e) {
            var r = 8 == (8 & this[a(-110, -174)]),
              s = -9 & this.CurrentUpdateFilter;
            if (r) {
              var o = c.GetUpdateTarget(e);
              if (null == o) return;
              if (x[a(-488, -295)][a(-83, -77)](o) != s) return;
            }
            null == this[a(-208, -254)] && (this[a(-177, -254)] = new Map());
            let t = this.mUpdateStatus[a(-234, -185)](e);
            if (
              ((r = Laya[a(-63, 2)][a(-233, -176)]),
              t || ((t = new h(-2, 1, r + 2, this[a(-201, 8)] + 2)), this[a(-326, -254)].set(e, t)),
              (o = 1 == s ? r - t[a(12, -143)] : r - t[a(-450, -324)]),
              0 <= n)
            ) {
              if (0 == o && t.lastUpdateMode == s && t[a(5, -198)] == n) return;
              0 < o && (n *= o);
            }
            (e[a(-44, -47)](i, n),
              (t[a(-216, -143)] = r),
              (t.lastUpdateFixedFrame = r),
              (t[a(-174, 21)] = s),
              (t[a(-230, -198)] = n));
          }
        }
        static [I(802, 659)]() {
          function t(t, e) {
            return I(t, e - 843);
          }
          c[t(1596, 1624)][t(1488, 1548)] = new Map();
        }
        static [I(670, 879)](t) {
          if (!t) return null;
          if (!t[e(899, 803)]) return null;
          function e(t, e) {
            return I(e, t - 98);
          }
          let i = t[e(660, 759)];
          return null != i ? i : ((i = t.Follow), null != i ? i : t[e(899, 1101)]);
        }
        [I(646, 745)](t) {
          function e(t, e) {
            return I(t, e - -369);
          }
          return (
            (t = this.mUpdateStatus[e(302, 405)](t)),
            null != this[e(190, 336)] && t ? t[e(758, 611)] : 1
          );
        }
        [I(972, 897)](i) {
          function n(t, e) {
            return I(e, t - -607);
          }
          if (null != i)
            for (let e = 0; e < this[n(83, 227)]; ++e) {
              let t = this[n(263, 138)](e);
              if (null != t && t[n(290, 413)](i)) return !0;
            }
          return !1;
        }
        ["GenerateCameraActivationEvent"](i, n) {
          function a(t, e) {
            return I(t, e - 827);
          }
          if (null != i)
            for (let e = 0; e < this.BrainCount; ++e) {
              let t = this[a(1705, 1697)](e);
              null != t && t[a(1851, 1724)](i) && t[a(1986, 1783)][a(1248, 1390)](i, n);
            }
        }
        [I(931, 832)](i) {
          function n(t, e) {
            return I(e, t - 521);
          }
          if (i)
            for (let e = 0; e < this.BrainCount; ++e) {
              let t = this[n(1391, 1175)](e);
              if (t && t[n(1418, 1533)](i)) {
                const a = t[n(1455, 1507)];
                a && a[n(1084, 1280)](t);
                const r = c.CameraCutEvent;
                r && r[n(1084, 1245)](t);
              }
            }
        }
        [I(594, 702)](i) {
          if (null != i) {
            var n = this[r(310, 93)];
            for (let e = 0; e < n; ++e) {
              let t = this[r(490, 607)](e);
              if (null != t && null != t[r(289, 148)] && t[r(517, 654)](i)) return t;
            }
            var e = 1 << i[r(421, 327)].layer;
            for (let t = 0; t < n; ++t) {
              var a = this[r(490, 550)](t);
              if (null != a && null != a[r(289, 207)] && 0 != (a[r(289, 63)][r(223, 195)] & e))
                return a;
            }
          }
          function r(t, e) {
            return I(e, t - -380);
          }
          return null;
        }
      }
      ((c[I(950, 920)] = null),
        (c[I(519, 625)] = !1),
        (c.UniformDeltaTimeOverride = -1),
        (c[I(734, 959)] = -1),
        (c.CameraUpdatedEvent = new e()),
        (c[I(577, 606)] = new e()),
        (x[I(715, 796)] = c));
      class i {
        constructor() {
          ((this[I(1215, 853)] = 0), (this.m_InheritPosition = !1));
        }
        [I(682, 751)](t) {
          ((t.m_BlendHint = this[I(1195, 853)]), (t.m_InheritPosition = this.m_InheritPosition));
        }
      }
      function n(t, e) {
        var i = o();
        return (n = function (t, e) {
          return i[(t -= 444)];
        })(t, e);
      }
      x[I(704, 615)] = i;
      class a extends W.Eve2 {}
      ((x[I(1064, 974)] = a), class extends W.Dg3 {}, class extends W[I(795, 694)] {});
      class m extends x[I(777, 799)] {
        constructor() {
          function t(t, e) {
            return I(e, t - -589);
          }
          (super(...arguments),
            (this[t(285, 150)] = null),
            (this[t(119, 71)] = null),
            (this[t(263, 129)] = x[t(256, 328)][t(318, 520)]),
            (this.m_Transitions = new i()),
            (this.m_LegacyBlendHint = 0),
            (this[t(287, 183)] = "cm"),
            (this[t(8, -175)] = !1),
            (this[t(206, 70)] = x[t(144, -8)][t(318, 139)]),
            (this[t(77, -42)] = null),
            (this[t(373, 408)] = null));
        }
        get [I(1117, 921)]() {
          return this.m_State;
        }
        get [I(510, 562)]() {
          function t(t, e) {
            return I(t, e - -240);
          }
          return this[t(540, 404)](this[t(619, 634)]);
        }
        set [I(754, 562)](t) {
          this[I(910, 874)] = t;
        }
        get [I(985, 900)]() {
          function t(t, e) {
            return I(e, t - 787);
          }
          return this[t(1410, 1319)](this[t(1495, 1415)]);
        }
        set [I(868, 900)](t) {
          this[I(-214, 708)] = t;
        }
        ["GetMaxDampTime"]() {
          let i = super[a(1426, 1335)]();
          this[a(1101, 1157)]();
          const n = this[a(1397, 1193)];
          function a(t, e) {
            return I(t, e - 527);
          }
          if (n)
            for (let t = 0, e = n[a(1670, 1469)]; t < e; ++t)
              i = Math[a(1139, 1313)](i, n[t][a(1514, 1335)]());
          return i;
        }
        ["InternalUpdateCameraState"](t, e) {
          var i = this;
          function n(t, e) {
            return I(t, e - 255);
          }
          if (
            (i[n(938, 918)](t, e, i[n(943, 1050)]),
            i[n(1395, 1201)](i[n(902, 1050)], i[n(986, 915)][n(1071, 1108)]),
            !i[n(923, 852)])
          ) {
            const a = i[n(1051, 1056)][n(994, 1160)];
            (i.Follow && (a[n(771, 832)] = i[n(998, 1176)][n(1016, 1198)]),
              i[n(747, 817)] && (a[n(1031, 1220)] = i[n(1258, 1176)][n(1235, 1146)]));
          }
          i[n(824, 979)] = !0;
        }
        [I(793, 739)](t) {
          ((this[s(1045, 1173)] = t[s(1045, 1101)]), (this.m_StandbyUpdate = t.m_StandbyUpdate));
          var e,
            i = t[s(1070, 1118)];
          const n = this[s(1070, 1269)];
          for (e in i) n[e] = i[e];
          var a = t[s(878, 1015)];
          const r = this.m_Transitions;
          function s(t, e) {
            return I(e, t - 218);
          }
          ((r[s(1071, 1089)] = a[s(1071, 1222)]),
            (r.m_InheritPosition = a[s(1049, 1248)]),
            (this[s(1194, 1334)] = t.m_LegacyBlendHint));
        }
        [I(855, 822)](i) {
          function n(t, e) {
            return I(t, e - -550);
          }
          (this[n(269, 302)][n(396, 201)](i.m_Lens), this[n(248, 110)].cloneTo(i.m_Transitions));
          var a = [n(149, 277), "m_StandbyUpdate", n(296, 426)];
          for (let t = 0, e = a[n(439, 392)]; t < e; t++) {
            var r = a[t];
            i[r] = this[r];
          }
        }
        ["onEnable"]() {
          super[e(225, 190)]();
          var t = this;
          function e(t, e) {
            return I(e, t - -475);
          }
          (t[e(137, 234)](W[e(229, 36)].UP, t[e(377, 533)], t[e(320, 252)]),
            t[e(121, 178)](),
            t[e(489, 556)] < 20170927 &&
              (null != t[e(425, 259)] && null == t[e(329, 333)](0) && t[e(176, 286)](u),
              null != t[e(87, -42)] && null == t[e(329, 462)](1) && t[e(176, -45)](v)));
        }
        [I(833, 622)]() {
          super[I(1144, 622)]();
        }
        [I(950, 972)]() {
          function t(t, e) {
            return I(t, e - 583);
          }
          (super[t(1619, 1555)](),
            this[t(1219, 1435)].Validate(),
            0 != this[t(1711, 1559)] &&
              ((this[t(1378, 1243)][t(1311, 1436)] = this[t(1462, 1559)]),
              (this.m_LegacyBlendHint = 0)));
        }
        [I(791, 945)]() {
          this.InvalidateComponentPipeline();
        }
        ["Reset"]() {
          this.DestroyPipeline();
        }
        [I(1150, 950)]() {
          let e = [];
          const i = this[n(1094, 1316)];
          function n(t, e) {
            return I(e, t - 293);
          }
          for (let t = 0; t < i.numChildren; t++) {
            const r = i[n(986, 1022)](t);
            r[n(1060, 964)](l) && e[n(1159, 1079)](r);
          }
          const a = m[n(971, 1086)];
          (e[n(934, 988)]((t) => {
            a ? a.exe(t) : t[n(1261, 1708)]();
          }),
            (this[n(1255, 1195)] = null),
            (this[n(1017, 897)] = !1));
        }
        [I(667, 851)](t) {
          let e = null;
          null != t && (t[a(56, 156)](), (e = t[a(3, 112)]()));
          let i = null;
          const n = m[a(344, 385)];
          function a(t, e) {
            return I(t, e - -440);
          }
          if (n) i = n.exe(this, this.PipelineName, e);
          else {
            const r = new Laya[a(58, 244)](this[a(397, 436)]);
            (this[a(515, 361)][a(383, 316)](r), r[a(305, 100)](l), (i = r));
          }
          return ((this.PreviousStateIsValid = !1), i);
        }
        [I(596, 596)]() {
          this[I(886, 666)] = null;
        }
        [I(677, 775)]() {
          function t(t, e) {
            return I(e, t - -513);
          }
          return (this[t(117, -13)](), this[t(288, 467)]);
        }
        ["GetComponentPipeline"]() {
          return (this[I(1063, 630)](), this.m_ComponentPipeline);
        }
        ["GetCinemachineComponent"](i) {
          var n = this[r(1420, 1398)]();
          if (n)
            for (let t = 0, e = n.length; t < e; t++) {
              var a = n[t];
              if (a[r(1580, 1747)] == i) return a;
            }
          function r(t, e) {
            return I(t, e - 846);
          }
          return null;
        }
        [I(857, 651)](t) {
          let e = this[n(-9, 164)]();
          if (null == e) return null;
          let i = e[n(288, 101)](x.CiCoB);
          function n(t, e) {
            return I(t, e - -611);
          }
          if ((t = e[n(-249, -71)](t)) && i) {
            var a = t[n(173, 290)];
            for (let t = i.length - 1; 0 <= t; --t) i[t][n(445, 290)] == a && (i[t].enabled = !1);
          }
          return (this[n(-228, -15)](), t);
        }
        [I(600, 687)](i) {
          function n(t, e) {
            return I(e, t - -1034);
          }
          let t = this[n(-482, -633)]();
          t &&
            t[n(-393, -551)]((t) => {
              function e(t, e) {
                return n(e - 1607, t);
              }
              t instanceof i && ((t[e(1270, 1468)] = !1), this[e(997, 1169)]());
            });
        }
        [I(769, 630)]() {
          const e = this.gameObject;
          function i(t, e) {
            return I(t, e - -661);
          }
          if (!this[i(290, 301)] || !this[i(73, 5)]) {
            this[i(385, 301)] = null;
            const n = [];
            for (let t = 0; t < e[i(501, 320)]; t++) {
              const a = e[i(-119, 32)](t);
              if (a[i(207, 106)](l)) {
                this.m_ComponentOwner = a;
                const r = a[i(263, 51)](x.CiCoB);
                r &&
                  r[i(-111, -20)]((t) => {
                    t[i(132, 234)] && n.push(t);
                  });
              }
            }
            (null == this.m_ComponentOwner && (this[i(512, 301)] = this.CreatePipeline(null)),
              this[i(159, 301)] &&
                (n[i(-23, 160)]((t, e) => t[i(112, 240)] - e.Stage), (this[i(-178, 5)] = n)));
          }
        }
        [I(662, 663)](t, i, n) {
          var a = this;
          function r(t, e) {
            return I(e, t - 828);
          }
          ((a[r(1535, 1669)] = 1),
            (a[r(1478, 1647)] = 1),
            a[r(1440, 1296)](t, a[r(1680, 1813)], n));
          const e = a[r(1390, 1466)];
          (e != a[r(1633, 1636)] &&
            ((a.mCachedLookAtTarget = e),
            (a[r(1772, 1849)] = null),
            e && (a[r(1772, 1572)] = e[r(1595, 1421)](x[r(1627, 1449)]))),
            e &&
              ((t = n[r(1407, 1607)]),
              a[r(1772, 1859)]
                ? a[r(1772, 1908)][r(1749, 1823)][r(1766, 1929)](t)
                : x.TargetPositionCache.GetTargetPosition(e, t)),
            a[r(1458, 1497)](),
            a[r(1738, 1683)](a, n, i));
          const s = a.m_ComponentPipeline;
          if (null == s) {
            n.BlendHint |= 32;
            for (var o = 0; o <= 3; ++o) a[r(1484, 1322)](a, o, n, i);
          } else {
            var h = s.length;
            for (let t = 0; t < h; ++t) s[t].PrePipelineMutateCameraState(n, i);
            let t = 0,
              e = null;
            for (o = 0; o <= 3; ++o) {
              var l = t < h ? s[t] : null;
              if (null != l && o == l[r(1729, 1949)]) {
                if ((++t, 0 == o && l[r(1701, 1631)])) {
                  e = l;
                  continue;
                }
                l[r(1734, 1892)](n, i);
              }
              (a[r(1484, 1347)](a, o, n, i),
                1 == o &&
                  (null == l && (n[r(1382, 1449)] |= 32),
                  e && (e.MutateCameraState(n, i), a[r(1484, 1389)](a, 0, n, i))));
            }
          }
        }
        ["OnTargetObjectWarped"](i, n) {
          var t = this;
          if (i == t[a(1516, 1412)]) {
            const e = t[a(1417, 1195)][a(1521, 1399)],
              s = m[a(1543, 1707)];
            (W.Vec3.add(e[a(1193, 1277)], n, s),
              (e.position = s),
              W.Vec3[a(1250, 1372)](t.m_State.RawPosition, n, s),
              s[a(1367, 1358)](t[a(1411, 1463)][a(1559, 1751)]));
          }
          function a(t, e) {
            return I(e, t - 616);
          }
          t[a(1246, 1323)]();
          const r = t[a(1282, 1098)];
          if (r) for (let t = 0, e = r[a(1558, 1764)]; t < e; ++t) r[t][a(1227, 1122)](i, n);
          super.OnTargetObjectWarped(i, n);
        }
        ["ForceCameraPosition"](e, i) {
          function n(t, e) {
            return I(e, t - 699);
          }
          this.PreviousStateIsValid = !0;
          const t = this[n(1500, 1416)][n(1604, 1391)];
          if (
            ((t[n(1276, 1070)] = e),
            (t.rotation = i),
            (this[n(1494, 1371)][n(1642, 1549)] = e),
            (this[n(1494, 1494)][n(1590, 1373)] = i),
            this[n(1329, 1176)](),
            this[n(1365, 1306)])
          )
            for (let t = 0; t < this[n(1365, 1283)][n(1641, 1832)]; ++t)
              this[n(1365, 1315)][t][n(1270, 1386)](e, i);
          super[n(1270, 1481)](e, i);
        }
        ["SetStateRawPosition"](t) {
          function e(t, e) {
            return I(t, e - 160);
          }
          this[e(1138, 955)][e(1022, 1103)] = t;
        }
        [I(464, 683)](i, n, a) {
          function r(t, e) {
            return I(t, e - -219);
          }
          super.OnTransitionFromCamera(i, n, a);
          var t = this;
          t[r(128, 339)](i, n, a);
          let s = !1;
          var o = t[r(530, 441)];
          if (o[r(733, 612)] && i) {
            const u = t.gameObject[r(554, 686)];
            var e = m[r(509, 708)];
            (i[r(701, 702)].FinalPosition(e),
              (u[r(233, 358)] = e),
              (t[r(662, 505)] = !1),
              (s = !0));
          }
          t[r(526, 411)]();
          const h = t[r(460, 447)];
          if (h)
            for (let t = 0, e = h[r(816, 723)]; t < e; ++t)
              h[t][r(314, 464)](i, n, a, o) && (s = !0);
          s ? (t[r(699, 693)](n, a), t[r(514, 693)](n, a)) : t[r(886, 703)](n, a);
          const l = o[r(420, 627)];
          l && l[r(164, 344)](t, i);
        }
        [I(1002, 838)]() {
          function t(t, e) {
            return I(t, e - 206);
          }
          W[t(775, 871)][t(892, 891)][t(847, 957)](this[t(1193, 1058)][t(802, 886)]);
        }
      }
      x.CiVC = m;
      class r {
        constructor(t, e) {
          function i(t, e) {
            return I(t, e - -103);
          }
          ((this.m_Style = t), (this[i(465, 662)] = e), (this[i(874, 704)] = null));
        }
        get [I(851, 636)]() {
          return 0 == this[I(1291, 872)] ? 0 : this.m_Time;
        }
        ["cloneTo"](t) {
          function e(t, e) {
            return I(e, t - -248);
          }
          ((t[e(624, 611)] = this[e(624, 481)]),
            (t.m_Time = this[e(517, 356)]),
            (t[e(559, 359)] = this[e(559, 636)]));
        }
        ["CreateStandardCurves"]() {
          const t = (this[n(1054, 933)].sStandardCurves = []),
            e = W[n(955, 987)];
          ((t[0] = null),
            (t[1] = e[n(1097, 900)](0, 0, 1, 1)),
            (t[2] = e[n(722, 899)](0, 0, 1, 1)));
          let i = t[2][n(1050, 1085)];
          function n(t, e) {
            return I(e, t - 165);
          }
          return (
            (i[0][n(897, 972)] = 1.4),
            (i[1][n(818, 868)] = 0),
            (t[2].keys = i),
            (t[3] = e[n(722, 502)](0, 0, 1, 1)),
            (i = t[3].keys),
            (i[0].outTangent = 0),
            (i[1][n(818, 819)] = 1.4),
            (t[3][n(1050, 1159)] = i),
            (t[4] = e[n(722, 865)](0, 0, 1, 1)),
            (i = t[4].keys),
            (i[0].outTangent = 0),
            (i[1][n(818, 654)] = 3),
            (t[4][n(1050, 878)] = i),
            (t[5] = e.Linear(0, 0, 1, 1)),
            (i = t[5].keys),
            (i[0][n(897, 788)] = 3),
            (i[1][n(818, 966)] = 0),
            (t[5].keys = i),
            (t[6] = e.Linear(0, 0, 1, 1)),
            t
          );
        }
        get [I(451, 675)]() {
          var t = this,
            e = t[n(645, 603)];
          if (7 == e)
            return t[n(580, 454)] || (t[n(580, 495)] = W[n(563, 770)][n(705, 614)](0, 0, 1, 1));
          const i = t[n(662, 850)];
          function n(t, e) {
            return I(e, t - -227);
          }
          return (i[n(465, 481)] || (i[n(465, 494)] = t[n(319, 169)]()))[e];
        }
      }
      x.CinemachineBlendDefinition = r;
      class s {
        constructor(t) {
          function e(t, e) {
            return I(t, e - -764);
          }
          ((this[e(-57, -174)] = new x.CinemachineBlend(null, null, null, 0, 0)),
            (this[e(-49, 160)] = new x[e(-58, -41)](null, null, null, 0, 0)),
            (this[e(284, 75)] = new x[e(18, 129)](null)),
            (this.id = t));
        }
        get [I(416, 566)]() {
          return this.blend[I(-607, 617)];
        }
      }
      function I(t, e) {
        return n(e - 90, t);
      }
      function o() {
        var t = [
          "Lens",
          "m_AdjustmentMode",
          "TimeInBlend",
          "blend",
          "72blBOBj",
          "CiHL",
          "xMin",
          "m_UpdateMethod",
          "FPS",
          "InvalidateComponentPipeline",
          "UserIsDragging",
          "m_SoftZoneWidth",
          "m_DeadZoneWidth",
          "mHardGuideRect",
          "OnUpdate",
          "GetHeading",
          "cullingMask",
          "sgRect",
          "FollowTargetPosition",
          "CameraCutEvent",
          "UniformDeltaTimeOverride",
          "CurrentTime",
          "FieldOfView",
          "m_DeadZoneDepth",
          "OnTargetObjectWarped",
          "PullStateFromVirtualCamera",
          "ShoulderOffset",
          "17815hSalnc",
          "TransitionParams",
          "GetVirtualCamera",
          "IsValid",
          "ManualUpdate",
          "splice",
          "mAllCameras",
          "now",
          "onDestroy",
          "ResolveFollow",
          "m_GroupFramingMode",
          "sShowHiddenObjects",
          "blendStartPosition",
          "DetachedLookAtTargetDamp",
          "UVEs",
          "yMax",
          "UpdateComponentPipeline",
          "getCenter",
          "_w1",
          "_b0",
          "add",
          "lastUpdateFixedFrame",
          "BlendTime",
          "forward",
          "GetCameraRotationToTarget",
          "distance",
          "m_BiasX",
          "forEach",
          "PushStateToUnityCamera",
          "indexOf",
          "ResolveLookAt",
          "m_ZDamping",
          "CiFT",
          "m_ShowCameraFrustum",
          "VerticalArmLength",
          "OrthoOffsetToScreenBounds",
          "LookAtTargetAttachment",
          "AddCinemachineComponent",
          "Dg4",
          "inTangent",
          "GetBrainFrame",
          "m_LookaheadSmoothing",
          "InvokePostPipelineStageCallback",
          "MultiplyPoint",
          "ProjectOnPlane",
          "InitializeModule",
          "m_Transitions",
          "DetachedFollowTargetDamp",
          "m_ScreenOffsetPrevFrame",
          "CalculateNewState",
          "UpdateTracker",
          "Vec2",
          "m_ComponentPipeline",
          "_v5",
          "UpdateVirtualCameras",
          "OutputCamera",
          "AbstractFollowTargetGroup",
          "DeltaTime",
          "_w0",
          "CameraRadius",
          "m_TrackedObjectOffset",
          "BlendCurve",
          "m_LookAtPrevFrame",
          "RemoveActiveCamera",
          "DestroyPipelineOverride",
          "FinalOrientation",
          "SensorSize",
          "m_ScreenY",
          "CiSFT",
          "OnTransitionFromCamera",
          "Sprite3D",
          "ONE",
          "LookRotation",
          "DestroyCinemachineComponent",
          "CiVC",
          "HasLookAt",
          "BrainCount",
          "LastBoundsMatrix",
          "sStandardCurves",
          "getChildAt",
          "Dg1",
          "_r0",
          "FollowTarget",
          "386724WkvOIF",
          "m_PreviousCameraPosition",
          "m_MaximumDistance",
          "onEnable",
          "ScreenToFOV",
          "FindPotentialTargetBrain",
          "UpdateCache",
          "Vec3",
          "mUpdateStatus",
          "ReleaseCameraOverride",
          "FollowTargetAttachment",
          "m_Follow",
          "m_MaximumOrthoSize",
          "mAspect",
          "Blend",
          "getComponents",
          "m_CameraOrientationPrevFrame",
          "invert",
          "m_prevRotation",
          "ProcessActiveCamera",
          "PositionCamera",
          "avg_d",
          "HardGuideRect",
          "FarClipPlane",
          "Duration",
          "m_UnlimitedSoftZone",
          "CinemachineBlend",
          "PreviousStateIsValid",
          "yMin",
          "Smoothing",
          "m_StandbyUpdate",
          "CiPi",
          "Bounds",
          "m_DefaultBlend",
          "SignedAngle",
          "outTangent",
          "CameraState",
          "abs",
          "getExtent",
          "GetTargetHeight",
          "m_Damping",
          "ReferenceUp",
          "_parse",
          "zero",
          "m_BiasY",
          "m_MaxDollyIn",
          "m_LookaheadIgnoreY",
          "m_TargetMovementOnly",
          "GetVcamUpdateStatus",
          "IsComplete",
          "m_WorldUpOverride",
          "GetRigPositions",
          "m_MinimumFOV",
          "VirtualCamera",
          "cloneTo",
          "DegToRad",
          "GetBlendForVirtualCameras",
          "Angle",
          "EnsureStarted",
          "addChild",
          "RemoveActiveBrain",
          "m_YDamping",
          "_v6",
          "UpdateFrame0",
          "lastUpdateDeltaTime",
          "m_ScreenX",
          "FollowTargetRotation",
          "ComputeGroupBounds",
          "m_Time",
          "CiCo",
          "getComponent",
          "CiBr",
          "Eve1",
          "m_CameraPosPrevFrame",
          "AlmostZero",
          "SetCameraOverride",
          "_q0",
          "get",
          "GetComponentOwner",
          "_v3",
          "IsLiveChild",
          "ActiveVirtualCamera",
          "getUp",
          "SoftGuideRect",
          "Instance",
          "exe",
          "currFrame",
          "CiCoB",
          "CurrentUpdateFilter",
          "max",
          "CameraSide",
          "ScreenToOrtho",
          "Aspect",
          "AniCu",
          "GetEffectiveDeltaTime",
          "xMax",
          "CamB",
          "mFrameStack",
          "m_State",
          "CiC",
          "800317QEnBXQ",
          "m_MinimumDistance",
          "CiVCB",
          "Priority",
          "gameObject",
          "mLastUpdateTime",
          "gCenter",
          "GetCinemachineComponent",
          "mCachedLookAtTarget",
          "width",
          "m_CustomCurve",
          "GetMaxDampTime",
          "UQEs",
          "kMinimumGroupSize",
          "1709904wDHVBn",
          "subtract",
          "owner",
          "PositionPredictor",
          "TopCameraFromPriorityQueue",
          "lastUpdateFrame",
          "CameraEnabled",
          "lerp",
          "CurrentCameraState",
          "gSoftGuideRect",
          "sort",
          "_cloneTo",
          "CiHLT",
          "UpdateVirtualCamera",
          "CreatePipelineOverride",
          "Reset",
          "m_Priority",
          "Normalized",
          "mRoundRobinVcamLastFrame",
          "onDisable",
          "m_InheritPosition",
          "GenerateCameraCutEvent",
          "m_IgnoreTimeScale",
          "multiply",
          "onStart",
          "133270tvpQrS",
          "LookAtTarget",
          "OnBeforeSerialize",
          "workingBlendSource",
          "dot",
          "regClass",
          "AddPosition",
          "transformQuat",
          "4NRwdog",
          "LensSettings",
          "m_OnCameraLive",
          "m_GroupFramingSize",
          "DefaultWorldUp",
          "m_PreviousFollowTargetPosition",
          "Ci3PF",
          "CreatePipeline",
          "m_Lens",
          "m_BlendHint",
          "362898GdCrtZ",
          "setCenter",
          "PredictPositionDelta",
          "scale",
          "SoloCamera",
          "m_CamPosCollisionCorrection",
          "m_HorizontalDamping",
          "_w3",
          "Script3D",
          "FromToRotation",
          "scalarLength",
          "sPos",
          "push",
          "m_PreviousTargetPosition",
          "bool",
          "OrthographicSize",
          "GetActiveBrain",
          "Mem",
          "m_Style",
          "BodyAppliesAfterAim",
          "m_LookAt",
          "__i",
          "PipelineName",
          "createFromYawPitchRoll",
          "m_CameraDistance",
          "GetUpdateTarget",
          "Equals",
          "Clamp",
          "GetPreferredUpdate",
          "mFov",
          "mFovH",
          "keys",
          "m_PO",
          "TrackedPoint",
          "m_MaximumFOV",
          "constructor",
          "orthographicVerticalSize",
          "RawOrientation",
          "Rect",
          "BlendSourceVirtualCamera",
          "height",
          "enabled",
          "m_DeadZoneHeight",
          "IsLive",
          "kMinimumCameraDistance",
          "gPos",
          "Follow",
          "Stage",
          "_v2",
          "mCache",
          "VirtualCameraCount",
          "transform",
          "MutateCameraState",
          "Default",
          "m_MaxDollyOut",
          "hgRect",
          "InvokePrePipelineMutateCameraStateCallback",
          "Set",
          "InternalUpdateCameraState",
          "Mathf",
          "LookupBlend",
          "InheritingPosition",
          "_q1",
          "orthographic",
          "m_DampingCorrection",
          "Perspective",
          "sInstance",
          "State",
          "UpdateCameraState",
          "ApplyCameraRotation",
          "workingBlend",
          "BrainEvent",
          "66QmUQEE",
          "_v0",
          "layer",
          "mFovSoftGuideRect",
          "LastBounds",
          "RadToDeg",
          "EaseInOut",
          "DeepCamBFromBlend",
          "m_CameraCutEvent",
          "CamA",
          "mActiveCameras",
          "ParentCamera",
          "FinalPosition",
          "Quat",
          "setValue",
          "mActiveCameraPreviousFrame",
          "length",
          "RawPosition",
          "mCachedLookAtTargetVcam",
          "OnTransformChildrenChanged",
          "ApplyPositionBlendMethod",
          "ComputeCurrentBlend",
          "setExtent",
          "mSoloCamera",
          "DestroyPipeline",
          "VcamStateLens",
          "mNextFrameId",
          "gHardGuideRect",
          "IsEmpty",
          "LookAtTargetRotation",
          "m_CameraActivatedEvent",
          "_q2",
          "_w2",
          "CurrentTimeOverride",
          "m_prevFOV",
          "timer",
          "m_ComponentOwner",
          "m_CustomBlends",
          "ValidatingStreamVersion",
          "rotation",
          "AddActiveCamera",
          "FixedFrameCount",
          "destroy",
          "AfterPhysics",
          "GetLookAtPointAndSetTrackedPoint",
          "_v1",
          "OnValidate",
          "CameraDistance",
          "VcamActivatedEvent",
          "active",
          "m_LegacyBlendHint",
          "cross",
          "m_BlendUpdateMethod",
          "LoRo",
          "lastUpdateMode",
          "numChildren",
          "m_CenterOnActivate",
          "GetBlendOverride",
          "m_Predictor",
          "Epsilon",
          "mSoftGuideRect",
          "Damping",
          "Orthographic",
          "m_LastFrameUpdated",
          "GetRawRigPositions",
          "mFovHardGuideRect",
          "addComponent",
          "mActiveBrains",
          "m_OutputCamera",
          "RotateToScreenBounds",
          "MultiplyPoint3x4",
          "GetViewSpaceAngularBounds",
          "CreateStandardCurves",
          "onLateUpdate",
          "m_VerticalDamping",
          "tan",
          "SetTRS",
          "IsBlending",
          "GetComponentPipeline",
          "has",
          "BlendHint",
          "m_LookaheadTime",
          "ActiveBlend",
          "Linear",
          "InvokeOnTransitionInExtensions",
          "mCurrentLiveCameras",
          "_v4",
          "158702RQHDah",
          "LookAt",
          "Invoke",
          "_q3",
          "m_XDamping",
          "Active",
          "CorrectedPosition",
          "Name",
          "atan",
          "_m1",
          "ForceCameraPosition",
          "CameraDisabled",
          "m_SoftZoneHeight",
          "CameraCollisionFilter",
          "m_MinimumOrthoSize",
          "arr",
          "position",
          "slerp",
          "ReferenceLookAt",
          "CameraUpdatedEvent",
          "min",
          "GetScreenSpaceGroupBoundingBox",
          "ApplyTransformDelta",
          "Abs2",
          "mOrthoSizeOverDistance",
          "fieldOfView",
        ];
        return (o = function () {
          return t;
        })();
      }
      class d extends W.SCRU {
        constructor() {
          function t(t, e) {
            return I(t, e - -291);
          }
          (super(...arguments),
            (this[t(558, 356)] = !0),
            (this[t(451, 542)] = !1),
            (this[t(126, 303)] = 2),
            (this[t(486, 687)] = 1),
            (this[t(253, 439)] = new r(1, 2)),
            (this[t(726, 672)] = null),
            (this.m_OutputCamera = null),
            (this[t(808, 643)] = new e()),
            (this[t(579, 665)] = new a()),
            (this[t(43, 246)] = 0),
            (this[t(319, 503)] = []),
            (this[t(759, 661)] = 1),
            (this[t(197, 268)] = new x.CinemachineBlend(null, null, null, 0, 0)));
        }
        get [I(680, 669)]() {
          function t(t, e) {
            return I(t, e - -106);
          }
          if (this[t(346, 436)]) return this[t(495, 436)];
        }
        static get [I(815, 858)]() {
          return this[I(2006, 949)];
        }
        static set [I(981, 858)](t) {
          function e(t, e) {
            return I(t, e - -696);
          }
          (null == t ||
            c[e(22, 85)][e(300, 201)](t) ||
            t[e(93, -13)](null, W[e(-2, 8)].UP, c[e(-7, -25)]),
            (this[e(404, 253)] = t));
        }
        ["DefaultWorldUp"](t) {
          function e(t, e) {
            return I(e, t - 884);
          }
          const i = this[e(1631, 1631)];
          return (i ? i.transform[e(1663, 1676)](t) : W[e(1588, 1630)].UP.cloneTo(t), t);
        }
        [I(803, 739)](t) {
          function e(t, e) {
            return I(t, e - -212);
          }
          ((this.m_ShowCameraFrustum = t[e(551, 435)]),
            (this[e(580, 621)] = t[e(627, 621)]),
            (this[e(295, 382)] = t[e(530, 382)]),
            (this.m_BlendUpdateMethod = t[e(742, 766)]),
            (t = t[e(391, 518)]));
          const i = this[e(683, 518)];
          ((i[e(545, 660)] = t[e(664, 660)]), (i[e(426, 553)] = t[e(522, 553)]));
        }
        [I(934, 822)](i) {
          function t(t, e) {
            return I(e, t - 477);
          }
          this[t(1207, 1268)][t(1228, 1382)](i[t(1207, 1277)]);
          var n = [t(1124, 998), t(1310, 1366), t(1071, 913), t(1455, 1301)];
          for (let t = 0, e = n.length; t < e; t++) {
            var a = n[t];
            i[a] = this[a];
          }
        }
        [I(814, 700)]() {
          const t = this[e(-202, -143)];
          function e(t, e) {
            return I(t, e - -937);
          }
          (0 == t.length && t.push(new s()),
            (this.m_OutputCamera = this[e(-36, -124)]),
            this[e(-246, -118)] || (this[e(-262, -118)] = x[e(-155, -204)].Default),
            c[e(-366, -156)].AddActiveBrain(this),
            c._c || (c._c = W[e(-282, -66)]._j.c));
        }
        [I(685, 830)]() {
          function t(t, e) {
            return I(e, t - -1043);
          }
          (c[t(-262, -45)][t(-286, -60)](this), (this.mFrameStack[t(-101, -150)] = 0));
        }
        ["OnSceneLoaded"](t) {
          function e(t, e) {
            return I(t, e - 865);
          }
          Laya[e(1843, 1826)][e(1516, 1648)] == this[e(1528, 1402)] &&
            0 < this[e(1606, 1659)][e(1811, 1807)] &&
            this[e(1340, 1483)]();
        }
        ["OnSceneUnloaded"](t) {
          function e(t, e) {
            return I(e, t - 717);
          }
          Laya[e(1678, 1479)][e(1500, 1319)] == this[e(1254, 1473)] &&
            0 < this[e(1511, 1473)].length &&
            this[e(1335, 1432)]();
        }
        [I(942, 835)]() {
          function t(t, e) {
            return I(e, t - -968);
          }
          ((this[t(-431, -645)] = -1), this[t(-300, -202)](1, -1));
        }
        *[I(1019, 969)]() {}
        [I(709, 547)]() {
          3 != this.m_UpdateMethod && this[I(1445, 618)]();
        }
        ["ManualUpdate"]() {
          this[i(1357, 1520)] = Laya[i(1781, 1797)].currFrame;
          var t,
            e = this[i(1611, 1755)](!1);
          if (
            (0 != this.m_BlendUpdateMethod && this[i(1580, 1543)](e),
            this[i(1767, 1784)](this[i(1379, 1312)], 0),
            0 == this[i(1414, 1291)])
          )
            0 != this[i(1798, 1683)] &&
              ((c[i(1601, 1633)][i(1605, 1510)] = 0),
              null == (t = d)[i(1678, 1886)] &&
                ((t = t[i(1747, 1699)]),
                this[i(1668, 1648)](t),
                this[i(1379, 1489)][i(1742, 1665)](t, this[i(1611, 1729)](!0))));
          else {
            let t = 1;
            (2 == this.m_UpdateMethod && (x[i(1484, 1282)][i(1421, 1356)](1), (t = 9)),
              this[i(1488, 1305)](t, e));
          }
          function i(t, e) {
            return I(e, t - 820);
          }
          0 != this[i(1798, 1901)] && this[i(1536, 1689)](e);
        }
        [I(908, 791)](t) {
          var e = c[i(548, 579)];
          function i(t, e) {
            return I(t, e - -28);
          }
          return 0 <= e ? e : (d.SoloCamera, 0.001 * W[i(549, 567)][i(665, 690)]);
        }
        [I(812, 668)](t, e) {
          const i = c[s(910, 977)];
          i.CurrentUpdateFilter = t;
          var n = this[s(798, 774)],
            a = d._v0;
          (this.DefaultWorldUp(a),
            i.UpdateAllActiveVirtualCameras(null == n ? -1 : n[s(732, 644)], a, e));
          const r = d.SoloCamera;
          function s(t, e) {
            return I(e, t - 129);
          }
          (r && r[s(1051, 985)](a, e),
            this.mCurrentLiveCameras.UpdateCameraState(a, e),
            (t = 1),
            2 == this[s(723, 694)] ? (t |= 8) : 0 == this[s(723, 758)] && (t = 0),
            (i[s(914, 909)] = t));
        }
        get [I(724, 778)]() {
          function t(t, e) {
            return I(t, e - -188);
          }
          return d.SoloCamera || d[t(925, 745)](this[t(146, 371)]);
        }
        static [I(1060, 933)](t) {
          function e(t, e) {
            return I(e, t - 443);
          }
          let i = t[e(1236, 1387)];
          for (; i;) {
            if (!i[e(1060, 884)]) return null;
            var n = i instanceof x[e(1336, 1121)] ? i : null;
            if (!n) break;
            i = n.Blend[e(1236, 1250)];
          }
          return i;
        }
        get [I(699, 551)]() {
          return null != this[I(-495, 556)];
        }
        get [I(561, 556)]() {
          if (d[t(1417, 1372)]) return null;
          function t(t, e) {
            return I(e, t - 559);
          }
          var e = this.mCurrentLiveCameras;
          return null == e[t(1494, 1598)] || !e || e[t(1305, 1218)] ? null : e;
        }
        [I(569, 654)](e) {
          const i = this[n(-216, -192)];
          for (let t = i[n(181, -44)] - 1; 0 < t; --t) if (i[t].id == e) return t;
          function n(t, e) {
            return I(t, e - -986);
          }
          return (i[n(-232, -120)](new s(e)), i[n(47, -44)] - 1);
        }
        [I(972, 772)](t, e, i, n, a) {
          function r(t, e) {
            return I(e, t - 763);
          }
          t < 0 && (t = this.mNextFrameId++);
          let s = this[r(1557, 1540)][this[r(1417, 1629)](t)];
          s.deltaTimeOverride = a;
          const o = s.blend;
          return (
            (o.CamA = e),
            (o.CamB = i),
            (o.BlendCurve = d.mDefaultLinearAnimationCurve),
            (o[r(1484, 1692)] = 1),
            (o[r(1352, 1349)] = n),
            null != (e = e instanceof (n = x[r(1562, 1751)]) ? e : null) && e[r(1518, 1447)](),
            null != (e = i instanceof n ? i : null) && e[r(1518, 1368)](),
            t
          );
        }
        [I(563, 706)](e) {
          const i = this.mFrameStack;
          for (let t = i[I(675, 942)] - 1; 0 < t; --t) if (i[t].id == e) return void i.splice(t, 1);
        }
        [I(841, 716)](t) {
          var e = this;
          const i = e[s(646, 825)];
          if (i) {
            var n = d,
              a = e[s(901, 988)];
            if (i != a) {
              var r = n[s(1112, 974)];
              (e[s(1076, 895)](r), i[s(739, 730)](a, r, t));
              const h = e.m_CameraActivatedEvent;
              if (
                (null != h && h[s(523, 610)](i, a),
                !e[s(511, 598)] || (null != a && !e[s(418, 603)].Uses(a)))
              ) {
                const l = e[s(1134, 981)];
                null != l && l[s(638, 610)](e);
                const u = c[s(649, 653)];
                null != u && u[s(388, 610)](e);
              }
              i[s(1040, 969)](r, t);
            }
            const o = n.SoloCamera;
            ((n = n._cs),
              o ? o[s(899, 968)][s(869, 798)](n) : e.mCurrentLiveCameras[s(921, 968)](n),
              e[s(589, 689)](n));
          }
          function s(t, e) {
            return I(t, e - 47);
          }
          e[s(1040, 988)] = i;
        }
        [I(781, 760)](t) {
          let i = this[r(1132, 923)][0];
          var n = this[r(1153, 1293)]();
          const a = i[r(928, 993)];
          function r(t, e) {
            return I(e, t - 338);
          }
          var s = a[r(1131, 1251)];
          if (n != s) {
            if (n && s && 0 <= t) {
              var o,
                h,
                l = this[r(1252, 1082)](s, n);
              let t = l[r(974, 1126)],
                e = 0;
              (l[r(1013, 1059)] &&
                t > x[r(966, 843)].Epsilon &&
                (a.IsComplete
                  ? (a[r(1273, 1425)] = s)
                  : ((h =
                      (o = a.CamA) instanceof x.BlendSourceVirtualCamera &&
                      o.Blend[r(1131, 1117)] == n),
                    (o != n && !h) ||
                      a[r(1131, 1222)] != s ||
                      ((s =
                        i[r(964, 1162)] +
                        ((1 - i[r(964, 817)]) * a[r(927, 712)]) / a[r(1059, 888)]),
                      (t *= s),
                      (e = 1 - s)),
                    (a[r(1273, 1130)] = new x[r(1231, 1360)](
                      new x.CinemachineBlend(
                        a[r(1273, 1077)],
                        a[r(1131, 1053)],
                        a[r(1013, 1030)],
                        a[r(1059, 1093)],
                        a[r(927, 725)],
                      ),
                    )))),
                (a[r(1013, 887)] = l[r(1013, 973)]),
                (a[r(1059, 930)] = t),
                (a[r(927, 793)] = 0),
                (i[r(964, 987)] = e));
            }
            a[r(1131, 966)] = n;
          }
          c._c(a, t);
        }
        [I(887, 947)](t, e) {
          function i(t, e) {
            return I(t, e - -907);
          }
          let n = 0;
          var a = this.mFrameStack,
            r = Math[i(-195, -121)](1, a[i(68, 35)] - e);
          for (let t = 0; t < r; ++t) {
            var s = a[t];
            if (0 == t || s[i(-331, -341)]) {
              const h = s[i(-22, 17)];
              var o = s[i(-162, -317)];
              if (
                ((h.CamA = o[i(-104, 28)]),
                (h.CamB = o[i(-53, -114)]),
                (h.BlendCurve = o[i(-209, -232)]),
                (h.Duration = o[i(-51, -186)]),
                (h[i(-395, -318)] = o[i(-330, -318)]),
                0 < t && !o[i(58, -161)])
              ) {
                const l = s.workingBlendSource;
                null == h.CamA
                  ? a[n][i(-388, -317)][i(-55, -161)]
                    ? (h[i(-38, 28)] = a[n].blend[i(-58, -114)])
                    : ((l[i(-284, -196)] = a[n].workingBlend), (h[i(-40, 28)] = l))
                  : null == h.CamB &&
                    (a[n][i(-511, -317)][i(-98, -161)]
                      ? (h[i(-6, -114)] = a[n][i(-249, -317)].CamB)
                      : ((l.Blend = a[n][i(41, 17)]), (h[i(84, -114)] = l)));
              }
              n = t;
            }
          }
          ((e = a[n].workingBlend),
            (t.CamA = e.CamA),
            (t.CamB = e[i(-148, -114)]),
            (t.BlendCurve = e[i(-452, -232)]),
            (t[i(-133, -186)] = e.Duration),
            (t[i(-225, -318)] = e[i(-372, -318)]));
        }
        [I(784, 897)](t, e = !1) {
          var i = d;
          if (i.SoloCamera == t) return !0;
          if (this[n(566, 714)].Uses(t)) return !0;
          function n(t, e) {
            return I(t, e - 155);
          }
          let a = t.ParentCamera;
          for (; null != a && a[n(742, 932)](t, e);) {
            if (i[n(860, 1013)] == a || this[n(665, 714)].Uses(a)) return !0;
            ((t = a), (a = t[n(881, 1092)]));
          }
          return !1;
        }
        ["TopCameraFromPriorityQueue"]() {
          let e = c.Instance;
          function i(t, e) {
            return I(t, e - -946);
          }
          var t = this[i(-476, -277)],
            n = null == t ? -1 : t[i(-150, -343)],
            a = e[i(-90, -42)];
          for (let t = 0; t < a; ++t) {
            var r = e[i(-394, -330)](t),
              s = r ? r[i(-23, -145)] : null;
            if (s && 0 != (n & (1 << s[i(-59, -18)]))) return r;
          }
          return null;
        }
        [I(1063, 914)](t, e) {
          let i = this[r(735, 815)];
          var n, a;
          function r(t, e) {
            return I(t, e - 85);
          }
          this[r(1069, 1048)] &&
            ((n = t ? t.Name : ""),
            (a = e ? e[r(596, 653)] : ""),
            (i = this[r(837, 1048)][r(837, 838)](n, a, i)));
          const s = c;
          return (s[r(1288, 1068)] && (i = s[r(975, 1068)][r(915, 867)](t, e, i, this)), i);
        }
        [I(636, 642)](t) {
          const e = this[a(1136, 927)];
          t.cloneTo(e);
          var i = e[a(438, 662)];
          const n = this.owner[a(945, 1013)];
          if ((0 == (1 & i) && ((t = d._v0), e[a(868, 1046)](t), (n.position = t)), 0 == (2 & i))) {
            const s = d[a(998, 881)];
            (e[a(856, 787)](s), s.setValue(-s.z, s.w, s.x, -s.y), (n.rotation = s));
          }
          function a(t, e) {
            return I(t, e - 108);
          }
          if (0 == (64 & i)) {
            let t = this[a(723, 777)];
            t &&
              ((t.nearPlane = e.Lens.NearClipPlane),
              (t.farPlane = e[a(599, 695)][a(927, 828)]),
              (t[a(513, 694)] = e[a(551, 695)].FieldOfView),
              t[a(882, 1025)] && (t[a(861, 998)] = 2 * e.Lens[a(865, 977)]));
          }
          const r = c[a(611, 688)];
          r && r[a(771, 671)](this);
        }
      }
      ((d[I(860, 927)] = new W[I(782, 704)]()),
        (d[I(898, 773)] = new W[I(724, 939)]()),
        (d._cs = x[I(909, 733)][I(927, 907)]),
        (d.mDefaultLinearAnimationCurve = W[I(874, 790)].Linear(0, 0, 1, 1)),
        (x[I(941, 768)] = d));
      class l extends Laya[I(770, 862)] {}
      x[I(503, 728)] = l;
      class u extends x[I(642, 784)] {
        constructor() {
          function t(t, e) {
            return I(t, e - -344);
          }
          (super(...arguments), (this.m_Damping = 0), (this[t(312, 523)] = new W[t(574, 360)]()));
        }
        get [I(757, 617)]() {
          return this[I(1497, 895)] && null != this.FollowTarget;
        }
        get [I(930, 901)]() {
          return 0;
        }
        [I(712, 739)](t) {
          this[I(1078, 737)] = t.m_Damping;
        }
        [I(746, 822)](t) {
          function e(t, e) {
            return I(e, t - -353);
          }
          t[e(384, 582)] = this[e(384, 473)];
        }
        [I(886, 808)]() {
          return this[I(1277, 737)];
        }
        ["MutateCameraState"](t, e) {
          function i(t, e) {
            return I(e, t - -842);
          }
          var n = this;
          if (n[i(-225, -39)]) {
            var a = u;
            const s = a[i(129, 154)];
            n[i(-237, -321)](s);
            var r = n[i(25, 118)];
            (0 <= e &&
              ((a = a[i(85, 121)]),
              W[i(-138, -134)][i(-30, 81)](s, r, a),
              n[i(-92, -14)][i(-181, -394)](a, n.m_Damping, e),
              W.Vec3[i(-208, -83)](r, a, s)),
              s[i(-91, -223)](r),
              s[i(-91, 1)](t[i(101, 304)]));
          }
        }
      }
      ((u._v0 = new W[I(638, 704)]()), (u[I(859, 971)] = new W[I(693, 704)]()), (x.CiHLT = u));
      class v extends x.CiCoB {
        get [I(500, 617)]() {
          function t(t, e) {
            return I(t, e - -708);
          }
          return this[t(50, 187)] && null != this[t(286, 129)];
        }
        get [I(874, 901)]() {
          return 1;
        }
        [I(1057, 906)](t, e) {
          function i(t, e) {
            return I(t, e - 350);
          }
          var n, a, r;
          this[i(1121, 967)] &&
            t[i(950, 1039)] &&
            ((n = (r = v)[i(1461, 1277)]),
            (a = r[i(1390, 1321)]),
            t[i(892, 917)](n),
            W[i(1117, 1054)][i(1144, 1162)](t[i(793, 929)], n, n),
            (r = this[i(1248, 1335)]),
            W[i(866, 1054)][i(1060, 1214)](n) > r &&
              (W.Vec3.normalize(n, a),
              W[i(1175, 1054)].cross(a, t[i(889, 1088)], a),
              W[i(829, 1054)].scalarLength(a) < r
                ? W[i(1064, 1289)][i(1063, 1213)](W[i(913, 1054)].FW, n, t[i(1404, 1241)])
                : W[i(1216, 1289)][i(1112, 1329)](n, t[i(1062, 1088)], t[i(1291, 1241)])));
        }
      }
      ((v[I(799, 927)] = new W[I(599, 704)]()),
        (v[I(788, 971)] = new W[I(574, 704)]()),
        (x[I(793, 592)] = v));
      class p {
        constructor() {
          function t(t, e) {
            return I(e, t - -52);
          }
          ((this[t(877, 778)] = W[t(840, 956)][t(688, 887)]),
            (this[t(487, 710)] = W[t(840, 1009)][t(688, 697)]),
            (this.mFovH = 0),
            (this[t(831, 883)] = 0),
            (this.mAspect = 0),
            (this[t(482, 590)] = W[t(840, 674)][t(688, 905)]),
            (this[t(548, 375)] = W.Rect[t(688, 471)]));
        }
        [I(629, 703)](t, e, i, n) {
          var a,
            r = this,
            s = W[h(799, 775)][h(817, 714)];
          let o =
            r[h(596, 517)] != t.Aspect ||
            !e.Equals(r[h(420, 520)]) ||
            !i[h(766, 900)](r[h(486, 514)]);
          function h(t, e) {
            return I(e, t - -114);
          }
          (t[h(422, 583)]
            ? ((a = Math.abs(t[h(755, 600)] / n)),
              (0 == (n = r[h(471, 527)]) || Math[h(620, 804)](a - n) / n > 0.01 * n) && (o = !0),
              o &&
                ((r[h(769, 630)] = (n = 2 * s) * Math[h(455, 388)](a)),
                (r[h(770, 701)] = n * Math[h(455, 471)](t[h(675, 802)] * a)),
                (r[h(471, 368)] = a)))
            : (r.mFov != t[h(495, 543)] && (o = !0),
              o &&
                ((r[h(769, 771)] = t[h(495, 519)]),
                (a =
                  2 *
                  Math[h(455, 344)](
                    Math[h(435, 218)]((r[h(769, 653)] * W[h(799, 1001)][h(638, 538)]) / 2) *
                      t[h(675, 541)],
                  )),
                (r[h(770, 964)] = s * a),
                (r[h(471, 485)] = 0))),
            o &&
              (r[h(587, 747)](e, r[h(769, 661)], r[h(770, 581)], t.Aspect, r[h(815, 792)]),
              e[h(637, 489)](r[h(420, 646)]),
              r[h(587, 686)](i, r[h(769, 699)], r[h(770, 660)], t[h(675, 811)], r[h(425, 431)]),
              i.cloneTo(r[h(486, 568)]),
              (r[h(596, 658)] = t[h(675, 616)])));
        }
        ["ScreenToFOV"](t, e, i, n, a) {
          const r = a;
          function s(t, e) {
            return I(t, e - -423);
          }
          t.cloneTo(r);
          const o = p._m0;
          (W.M4[s(652, 496)](e, n, 1e-4, 2, o), o.invert(o));
          const h = p[s(285, 504)],
            l = p._v1;
          (h[s(470, 517)](0, 2 * r.yMin - 1, 0.5),
            W.M4.MultiplyPoint(o, h, l),
            (l.z = -l.z),
            (n = x.UVEs[s(410, 308)](W[s(467, 281)].FW, l, W[s(401, 281)].RI)),
            (r[s(391, 302)] = (e / 2 + n) / e),
            h.setValue(0, 2 * r[s(312, 206)] - 1, 0.5),
            W.M4[s(406, 234)](o, h, l),
            (l.z = -l.z),
            (n = x[s(168, 205)][s(329, 308)](W[s(168, 281)].FW, l, W.Vec3.RI)),
            (r[s(85, 206)] = (e / 2 + n) / e),
            h[s(486, 517)](2 * r[s(311, 170)] - 1, 0, 0.5),
            W.M4[s(107, 234)](o, h, l),
            (l.z = -l.z),
            (n = x[s(57, 205)][s(196, 308)](W[s(142, 281)].FW, l, W.Vec3.UP)),
            (r.xMin = (i / 2 + n) / i),
            h[s(520, 517)](2 * r[s(269, 369)] - 1, 0, 0.5),
            W.M4.MultiplyPoint(o, h, l),
            (l.z = -l.z),
            (n = x[s(70, 205)].SignedAngle(W[s(67, 281)].FW, l, W.Vec3.UP)),
            (r.xMax = (i / 2 + n) / i));
        }
      }
      ((p._v0 = new W[I(564, 704)]()),
        (p[I(1014, 971)] = new W[I(929, 704)]()),
        (p._m0 = new W.M4()));
      class A extends x[I(644, 784)] {
        constructor() {
          function t(t, e) {
            return I(t, e - -676);
          }
          (super(...arguments),
            (this[t(205, -2)] = W[t(191, 28)].zero),
            (this[t(59, -121)] = 0),
            (this[t(51, -21)] = 0),
            (this[t(268, 67)] = !1),
            (this[t(83, 184)] = 0.5),
            (this[t(92, -128)] = 0.5),
            (this[t(12, 86)] = 0.5),
            (this[t(39, 5)] = 0.5),
            (this.m_DeadZoneWidth = 0),
            (this.m_DeadZoneHeight = 0),
            (this.m_SoftZoneWidth = 0.8),
            (this[t(-236, -103)] = 0.8),
            (this[t(91, -36)] = 0),
            (this.m_BiasY = 0),
            (this.m_CenterOnActivate = !0),
            (this[t(32, 211)] = new W[t(-183, 28)]()),
            (this.m_CameraPosPrevFrame = W[t(46, 28)][t(55, 64)]),
            (this.m_LookAtPrevFrame = W.Vec3.zero),
            (this[t(-94, -14)] = W[t(17, -11)][t(121, 64)]),
            (this[t(-108, 37)] = new W[t(368, 263)]()),
            (this.m_Predictor = new x[t(119, 138)]()),
            (this.sgRect = W[t(295, 216)][t(-72, 64)]),
            (this[t(311, 233)] = W[t(402, 216)][t(267, 64)]),
            (this[t(121, 227)] = new p()));
        }
        get [I(663, 617)]() {
          function t(t, e) {
            return I(t, e - -1022);
          }
          return this[t(-53, -127)] && null != this[t(-78, -185)];
        }
        get [I(1073, 901)]() {
          return 1;
        }
        ["GetLookAtPointAndSetTrackedPoint"](t, e, i, n) {
          var a = this;
          const r = A[s(1537, 1565)];
          function s(t, e) {
            return I(e, t - 566);
          }
          (t[s(1317, 1411)](r),
            (t = A[s(1493, 1482)]),
            null != a[s(1403, 1265)] &&
              ((o = A[s(1339, 1146)]),
              a[s(1521, 1467)](o),
              W[s(1270, 1272)].transformQuat(a[s(1240, 1397)], o, t),
              W[s(1270, 1197)].add(r, t, r)));
          var o = a[s(1121, 1071)];
          if (o < a[s(1551, 1726)]) r.cloneTo(a.TrackedPoint);
          else {
            const h = a[s(1550, 1507)];
            ((h[s(1292, 1330)] = a.m_LookaheadSmoothing),
              h[s(1408, 1379)](r, a.VirtualCamera[s(1290, 1450)] ? i : -1, o),
              h[s(1422, 1220)](o, t),
              a.m_LookaheadIgnoreY && W.Vec3[s(1224, 1031)](t, e, t),
              W[s(1270, 1146)][s(1200, 1224)](r, t, a[s(1453, 1678)]));
          }
          r.cloneTo(n);
        }
        ["_parse"](t) {
          for (var e in t) {
            var i = t[e];
            "m_TrackedObjectOffset" == e ? this[e][I(41, 940)](-i.x, i.y, i.z) : (this[e] = i);
          }
        }
        ["_cloneTo"](i) {
          this[a(374, 532)][a(732, 609)](i[a(739, 532)]);
          var n = [
            a(517, 413),
            a(365, 513),
            a(434, 601),
            a(579, 718),
            a(385, 406),
            a(398, 620),
            a(349, 539),
            "m_DeadZoneWidth",
            "m_DeadZoneHeight",
            a(613, 456),
            a(479, 431),
            "m_BiasX",
            a(567, 599),
            a(786, 840),
          ];
          function a(t, e) {
            return I(t, e - -142);
          }
          for (let t = 0, e = n[a(911, 800)]; t < e; t++) {
            var r = n[t];
            i[r] = this[r];
          }
        }
        [I(666, 611)](t, e) {
          function i(t, e) {
            return I(e, t - 407);
          }
          (super[i(1018, 1162)](t, e),
            t == this[i(1244, 1160)] &&
              ((t = this[i(1177, 1151)]),
              W.Vec3[i(1041, 927)](t, e, t),
              (t = this[i(1083, 1229)]),
              W[i(1111, 1312)][i(1041, 1058)](t, e, t),
              this.m_Predictor[i(990, 925)](e)));
        }
        [I(528, 571)](t, e) {
          (super.ForceCameraPosition(t, e),
            (this.m_CameraPosPrevFrame = t),
            (this[I(612, 713)] = e));
        }
        [I(965, 808)]() {
          function t(t, e) {
            return I(e, t - 570);
          }
          return Math[t(1356, 1507)](this[t(1430, 1474)], this[t(1118, 995)]);
        }
        ["PrePipelineMutateCameraState"](t, e) {
          function i(t, e) {
            return I(e, t - -614);
          }
          var n;
          this[i(3, 132)] &&
            t.HasLookAt &&
            ((n = t[i(-35, -113)]), this[i(356, 336)](n, t[i(124, -79)], e, n));
        }
        [I(981, 906)](t, e) {
          function i(t, e) {
            return I(t, e - -186);
          }
          if (this.IsValid && t[i(661, 503)]) {
            var n = A;
            const p = this[i(690, 701)];
            var a = t[i(298, 393)],
              r = t[i(707, 552)],
              s = n[i(855, 785)],
              o = n[i(851, 716)],
              h = n[i(710, 741)];
            const C = W.Vec3,
              f = C.subtract,
              g = W[i(654, 753)],
              _ = x[i(626, 442)],
              w = x[i(802, 623)],
              S = t.RawOrientation;
            (f(p, a, h),
              _[i(770, 585)](h) ||
                (t[i(310, 381)](h),
                C[i(450, 632)](h, a, 0.5, h),
                f(a, h, s),
                f(p, h, o),
                C[i(607, 654)](s, o) < 0 &&
                  ((m = C[i(670, 453)](a, h) / C.distance(a, p)), C.lerp(a, p, m, p))));
            const P = this[i(434, 527)];
            var l = this[i(693, 564)];
            if ((t[i(507, 381)](h), f(p, h, h), (v = C[i(630, 678)](h)) < this[i(790, 799)]))
              0 <= e && l.PreviousStateIsValid && P[i(554, 565)](S);
            else {
              const T = this[i(862, 717)];
              (this[i(610, 634)](this[i(519, 418)]),
                this[i(916, 767)](this[i(499, 723)]),
                T.UpdateCache(t[i(250, 401)], this[i(629, 418)], this[i(668, 723)], v));
              var u = this.m_LookAtPrevFrame;
              const M = this.m_ScreenOffsetPrevFrame;
              var c = this[i(584, 584)],
                o = n[i(515, 730)];
              S.cloneTo(o);
              var m = n[i(449, 486)];
              if (e < 0 || !l[i(619, 538)]) {
                (C[i(784, 657)](C[i(232, 451)], o, h), g[i(842, 793)](h, r, o));
                const V = n[i(389, 509)];
                (T.mFovSoftGuideRect[i(788, 565)](V),
                  this[i(867, 796)] && (V[i(466, 617)](m), V[i(515, 725)](m.x, m.y, 0, 0)),
                  this[i(517, 357)](t, V, a, o, T.mFov, T[i(752, 698)], -1));
              } else {
                var d,
                  v = h;
                (f(u, c, v),
                  _.AlmostZero(v)
                    ? ((d = s), C[i(805, 657)](C.FW, P, d), g.LoRo(d, r, o))
                    : ((s = t.PositionDampingBypass),
                      (d = n._q0),
                      (n = W[i(780, 727)][i(551, 566)]),
                      g[i(619, 691)](s.x * n, s.y * n, s.z * n, d),
                      C[i(565, 657)](v, d, v),
                      g[i(800, 793)](v, r, o),
                      M[i(368, 565)](m),
                      W[i(368, 479)][i(847, 671)](m, -1, m),
                      w.ApplyCameraRotation(o, m, r, o)),
                  this[i(544, 357)](t, T[i(675, 743)], p, o, T[i(750, 697)], T[i(801, 698)], e),
                  (e < 0 || l[i(339, 464)] > 1 - this[i(773, 799)]) &&
                    this[i(326, 357)](t, T[i(406, 353)], a, o, T.mFov, T[i(747, 698)], -1));
              }
              (t[i(255, 381)](c),
                p.cloneTo(u),
                w[i(718, 642)](o, P),
                t[i(218, 381)](h),
                f(u, h, h),
                w.GetCameraRotationToTarget(P, h, r, M),
                P[i(549, 565)](S));
            }
          }
        }
        [I(1023, 820)](t) {
          var e = this[n(417, 505)],
            i = this[n(622, 802)];
          function n(t, e) {
            return I(t, e - -94);
          }
          t.setValue(this[n(502, 668)] - e / 2, this.m_ScreenY - i / 2, e, i);
        }
        set ["SoftGuideRect"](t) {
          function e(t, e) {
            return I(t, e - -649);
          }
          var i = (this[e(-151, -50)] = W[e(329, 264)].Clamp(t.width, 0, 2)),
            n = (this[e(223, 247)] = W[e(178, 264)][e(354, 232)](t.height, 0, 2));
          ((this[e(49, 113)] = W.Mathf.Clamp(t.x + i / 2, -0.5, 1.5)),
            (this[e(-85, 32)] = W[e(319, 264)][e(351, 232)](t.y + n / 2, -0.5, 1.5)),
            (this[e(1, -51)] = Math[e(295, 137)](this[e(128, -51)], i)),
            (this[e(-227, -76)] = Math[e(-88, 137)](this[e(-139, -76)], n)));
        }
        [I(796, 953)](t) {
          var e = this,
            i = e.m_SoftZoneWidth,
            n = e.m_SoftZoneHeight;
          function a(t, e) {
            return I(t, e - 378);
          }
          t[a(1536, 1318)](e[a(1169, 1140)] - i / 2, e[a(834, 1059)] - n / 2, i, n);
          const r = A[a(1275, 1050)];
          (t[a(1421, 1277)](r),
            (r.x += e[a(961, 1018)] * (i - e.m_DeadZoneWidth)),
            (r.y += e[a(1341, 1119)] * (n - e[a(1227, 1274)])),
            t.sPos(r));
        }
        set [I(636, 719)](t) {
          var e = this;
          const i = W[n(655, 816)][n(652, 784)];
          function n(t, e) {
            return I(t, e - -97);
          }
          var a = (e[n(351, 501)] = i(t[n(630, 709)], 0, 2)),
            r = (e[n(555, 476)] = i(t[n(870, 797)], 0, 2));
          ((e[n(342, 502)] = Math.min(e[n(395, 502)], a)),
            (e.m_DeadZoneHeight = Math[n(383, 484)](e[n(669, 799)], r)));
          const s = A[n(527, 575)];
          (t.gCenter(s),
            (s.x -= e[n(512, 665)]),
            (s.y -= e[n(779, 584)]),
            (t = Math[n(877, 689)](0, a - e[n(707, 502)])),
            (a = Math[n(629, 689)](0, r - e[n(579, 799)])),
            (r = e[n(900, 888)]),
            (e[n(375, 543)] = t < r ? 0 : i(s.x / t, -0.5, 0.5)),
            (e[n(490, 644)] = a < r ? 0 : i(s.y / a, -0.5, 0.5)));
        }
        ["RotateToScreenBounds"](t, e, i, n, a, r, s) {
          var o = A[h(293, 515)];
          function h(t, e) {
            return I(e, t - -634);
          }
          (t[h(-67, -125)](o), W[h(70, 101)].subtract(i, o, o));
          const l = A[h(38, 143)];
          (x[h(175, 74)][h(4, -80)](n, o, t.ReferenceUp, l),
            this.ClampVerticalBounds(e, o, t[h(104, -58)], a));
          let u = (e[h(91, 148)] - 0.5) * a,
            c = (e[h(-5, -1)] - 0.5) * a;
          (l.x < u ? (l.x -= u) : l.x > c ? (l.x -= c) : (l.x = 0),
            (u = (e[h(-41, -206)] - 0.5) * r),
            (c = (e[h(158, 177)] - 0.5) * r),
            l.y < u ? (l.y -= u) : l.y > c ? (l.y -= c) : (l.y = 0),
            0 <= s &&
              this[h(116, 177)][h(90, 90)] &&
              ((l.x = this[h(116, 294)][h(-7, 138)](l.x, this[h(-86, 132)], s)),
              (l.y = this[h(116, 280)][h(-7, -211)](l.y, this[h(226, 38)], s))),
            x.UQEs[h(289, 228)](n, l, t[h(104, 108)], n));
        }
        ["ClampVerticalBounds"](t, e, i, n) {
          var a = x[r(855, 711)][r(836, 837)](e, i);
          function r(t, e) {
            return I(t, e - 83);
          }
          return a < (e = n / 2 + 1) && ((i = 1 - (e - a) / n), t[r(509, 712)] > i)
            ? ((t.yMin = Math[r(619, 664)](t[r(914, 808)], i)),
              (t.yMax = Math[r(831, 664)](t.yMax, i)),
              !0)
            : 180 - e < a &&
                (n = (a - (180 - e)) / n) > t[r(594, 808)] &&
                ((t[r(818, 808)] = Math[r(840, 869)](t[r(1e3, 808)], n)),
                (t[r(651, 712)] = Math[r(644, 869)](t[r(610, 712)], n)),
                !0);
        }
      }
      ((A._v0 = new W[I(860, 704)]()),
        (A[I(1025, 971)] = new W[I(726, 704)]()),
        (A[I(825, 902)] = new W[I(677, 704)]()),
        (A._r0 = W[I(838, 892)].zero),
        (A._w0 = new W.Vec2()),
        (x.CiCo = A));
      class b extends x[I(970, 784)] {
        constructor() {
          function t(t, e) {
            return I(e, t - -179);
          }
          (super(...arguments),
            (this.m_TrackedObjectOffset = new W.Vec3()),
            (this[t(376, 553)] = 0),
            (this.m_LookaheadSmoothing = 0),
            (this.m_LookaheadIgnoreY = !1),
            (this.m_XDamping = 1),
            (this.m_YDamping = 1),
            (this[t(466, 538)] = 1),
            (this[t(565, 683)] = !0),
            (this[t(583, 403)] = 0.5),
            (this[t(502, 388)] = 0.5),
            (this[t(699, 483)] = 10),
            (this[t(420, 375)] = 0),
            (this.m_DeadZoneHeight = 0),
            (this[t(431, 419)] = 0),
            (this.m_UnlimitedSoftZone = !1),
            (this[t(419, 487)] = 0.8),
            (this.m_SoftZoneHeight = 0.8),
            (this[t(461, 678)] = 0),
            (this[t(562, 374)] = 0),
            (this[t(803, 973)] = !0),
            (this.m_GroupFramingMode = 2),
            (this[t(409, 301)] = 0),
            (this[t(668, 554)] = 0.8),
            (this[t(563, 683)] = 5e3),
            (this[t(729, 610)] = 5e3),
            (this[t(619, 784)] = 1),
            (this[t(520, 617)] = 5e3),
            (this[t(570, 525)] = 3),
            (this[t(709, 556)] = 60),
            (this.m_MinimumOrthoSize = 1),
            (this.m_MaximumOrthoSize = 5e3),
            (this[t(425, 599)] = W[t(713, 791)][t(561, 378)]),
            (this[t(730, 851)] = W[t(713, 642)][t(561, 409)]),
            (this[t(719, 788)] = 0.01),
            (this[t(631, 790)] = 0.01),
            (this[t(519, 566)] = W[t(525, 538)].zero),
            (this.m_Predictor = new x[t(635, 441)]()),
            (this[t(708, 755)] = new W[t(525, 386)]()),
            (this[t(736, 868)] = !1),
            (this[t(781, 868)] = 0),
            (this.m_prevRotation = new W[t(760, 683)]()),
            (this[t(751, 577)] = new Laya[t(550, 550)](new W[t(525, 346)](), new W[t(525, 382)]())),
            (this[t(512, 595)] = new W.M4()));
        }
        ["gSoftGuideRect"](t) {
          var e = this[n(1388, 1471)],
            i = this[n(1649, 1768)];
          function n(t, e) {
            return I(t, e - 872);
          }
          t[n(1662, 1812)](this.m_ScreenX - e / 2, this[n(1773, 1553)] - i / 2, e, i);
        }
        set [I(682, 780)](t) {
          function e(t, e) {
            return I(t, e - -999);
          }
          var i = (this.m_DeadZoneWidth = W[e(-219, -86)].Clamp(t.width, 0, 2)),
            n = (this[e(-188, -103)] = W[e(41, -86)][e(-175, -118)](t[e(74, -105)], 0, 2));
          ((this[e(-182, -237)] = W.Mathf[e(-21, -118)](t.x + i / 2, -0.5, 1.5)),
            (this.m_ScreenY = W[e(61, -86)][e(-51, -118)](t.y + n / 2, -0.5, 1.5)),
            (this.m_SoftZoneWidth = Math.max(this[e(-436, -401)], i)),
            (this.m_SoftZoneHeight = Math[e(-79, -213)](this.m_SoftZoneHeight, n)));
        }
        ["gHardGuideRect"](t) {
          var e = this,
            i = e[a(-26, -151)],
            n = e.m_SoftZoneHeight;
          function a(t, e) {
            return I(e, t - -624);
          }
          t[a(316, 499)](e[a(138, 214)] - i / 2, e[a(57, 36)] - n / 2, i, n);
          const r = b[a(48, 91)];
          (t[a(275, 391)](r),
            (r.x += e[a(16, -111)] * (i - e[a(-25, -160)])),
            (r.y += e[a(117, 190)] * (n - e[a(272, 418)])),
            t[a(241, 171)](r));
        }
        set ["HardGuideRect"](t) {
          function e(t, e) {
            return I(t, e - -316);
          }
          var i = this;
          const n = W[e(750, 597)][e(594, 565)];
          var a = (i[e(397, 282)] = n(t[e(305, 490)], 0, 2)),
            r = (i.m_SoftZoneHeight = n(t[e(722, 578)], 0, 2));
          ((i[e(334, 283)] = Math.min(i[e(310, 283)], a)),
            (i[e(510, 580)] = Math[e(320, 265)](i.m_DeadZoneHeight, r)));
          const s = b[e(506, 356)];
          (t[e(626, 487)](s),
            (s.x -= i[e(494, 446)]),
            (s.y -= i[e(445, 365)]),
            (t = Math[e(505, 470)](0, a - i[e(355, 283)])),
            (a = Math[e(262, 470)](0, r - i[e(382, 580)])),
            (r = i[e(887, 669)]),
            (i.m_BiasX = t < r ? 0 : n(s.x / t, -0.5, 0.5)),
            (i.m_BiasY = a < r ? 0 : n(s.y / a, -0.5, 0.5)));
        }
        [I(821, 972)]() {
          var t = this;
          function e(t, e) {
            return I(t, e - -659);
          }
          ((t[e(74, 219)] = Math[e(135, 127)](t.m_CameraDistance, this[e(422, 239)])),
            (t[e(129, -49)] = Math[e(81, 127)](t[e(-232, -49)], 0)),
            (t[e(407, 188)] = Math[e(-7, 127)](0.001, t[e(313, 188)])),
            (t[e(-75, 83)] = Math.max(0, t[e(255, 83)])),
            (t[e(229, 249)] = Math[e(157, 127)](0, t[e(333, 249)])),
            (t[e(188, 139)] = Math.max(0, t[e(225, 139)])),
            (t.m_MaximumDistance = Math[e(38, 127)](t.m_MinimumDistance, t[e(233, 40)])),
            (t.m_MinimumFOV = Math[e(269, 127)](1, t[e(195, 90)])),
            (t[e(444, 229)] = W.Mathf.Clamp(t[e(139, 229)], t.m_MinimumFOV, 179)),
            (t[e(-95, -84)] = Math[e(-98, 127)](0.01, t[e(-147, -84)])),
            (t[e(-131, 50)] = Math[e(235, 127)](t[e(26, -84)], t.m_MaximumOrthoSize)));
        }
        get ["IsValid"]() {
          function t(t, e) {
            return I(t, e - -159);
          }
          return this[t(683, 736)] && null != this[t(484, 537)];
        }
        get [I(688, 901)]() {
          return 0;
        }
        get [I(680, 868)]() {
          return !0;
        }
        [I(682, 739)](t) {
          function e(t, e) {
            return I(t, e - -82);
          }
          for (var i in t) {
            var n = t[i];
            e(384, 592) == i ? this[i][e(636, 858)](-n.x, n.y, n.z) : (this[i] = n);
          }
        }
        [I(758, 822)](i) {
          function n(t, e) {
            return I(t, e - 666);
          }
          this[n(1373, 1340)][n(1530, 1417)](i[n(1500, 1340)]);
          var a = b[n(1130, 1242)];
          for (let t = 0, e = a[n(1591, 1608)]; t < e; t++) {
            var r = a[t];
            i[r] = this[r];
          }
        }
        [I(528, 611)](t, e) {
          function i(t, e) {
            return I(t, e - 300);
          }
          (super.OnTargetObjectWarped(t, e),
            t == this[i(975, 996)] &&
              ((t = this[i(958, 998)]),
              W[i(1026, 1004)].add(t, e, t),
              this[i(1187, 1284)].ApplyTransformDelta(e)));
        }
        [I(642, 571)](t, e) {
          function i(t, e) {
            return I(e, t - -764);
          }
          (super[i(-193, -252)](t, e),
            t.cloneTo(this[i(-66, -205)]),
            e[i(-13, -13)](this[i(-49, -243)]));
        }
        [I(855, 808)]() {
          function t(t, e) {
            return I(e, t - 49);
          }
          return Math[t(835, 773)](
            this[t(614, 720)],
            Math[t(835, 856)](this[t(807, 688)], this[t(694, 738)]),
          );
        }
        ["OnTransitionFromCamera"](t, e, i, n) {
          function a(t, e) {
            return I(e, t - -318);
          }
          return (
            !(null == t || !n[a(513, 710)]) &&
            (t.State.RawPosition[a(433, 438)](this[a(380, 411)]),
            t[a(603, 706)][a(573, 595)].cloneTo(this[a(397, 323)]),
            (this[a(597, 811)] = !0))
          );
        }
        [I(871, 788)](t, e, i, n) {
          function a(t, e) {
            return I(e, t - -406);
          }
          var r = t[a(319, 108)],
            s = t[a(223, 81)],
            o = t[a(187, 61)],
            t = t[a(386, 393)];
          ((n.yMax = 2 * e * (1 - r - 0.5)),
            (n.yMin = 2 * e * (1 - s - 0.5)),
            (n[a(187, 28)] = 2 * e * i * (o - 0.5)),
            (n.xMax = 2 * e * i * (t - 0.5)));
        }
        [I(529, 649)](t, e, i) {
          function n(t, e) {
            return I(e, t - 350);
          }
          var a = t.x,
            r = t.y,
            s = e[n(943, 933)],
            o = e.xMax,
            t = e.yMin,
            e = e[n(979, 960)];
          (W[n(1054, 1065)].Z[n(1101, 943)](i),
            a < s && (i.x += a - s),
            o < a && (i.x += a - o),
            r < t && (i.y += r - t),
            e < r && (i.y += r - e));
        }
        [I(947, 906)](i, n) {
          function a(t, e) {
            return I(e, t - 832);
          }
          var r = this;
          const s = i[a(1419, 1259)];
          var o = b;
          const h = o._v0;
          var l = o[a(1605, 1680)];
          r[a(1595, 1467)](l);
          const u = W[a(1536, 1682)];
          u[a(1675, 1680)](r[a(1506, 1514)], l, h);
          var c = o[a(1734, 1852)];
          (r[a(1437, 1473)](c), u[a(1466, 1385)](c, h, h));
          const m = r[a(1582, 1774)];
          var d = 0 <= n && m[a(1556, 1716)];
          const v = i[a(1775, 1796)],
            p = i.RawOrientation,
            C = o[a(1803, 1615)],
            f = r[a(1530, 1642)];
          if (
            (d ||
              (r[a(1816, 1651)].Reset(),
              v[a(1583, 1506)](f),
              (r[a(1792, 1842)] = s[a(1368, 1217)] ? s[a(1701, 1717)] : s.FieldOfView),
              p[a(1583, 1603)](r[a(1547, 1552)]),
              !r[a(1747, 1847)] &&
                r[a(1814, 2030)] &&
                (u[a(1675, 1887)](u.BK, p, C),
                u[a(1689, 1677)](C, r[a(1710, 1850)], C),
                u[a(1466, 1577)](c, C, f))),
            r.IsValid)
          ) {
            var g = r[a(1502, 1585)],
              _ = null != g && 3 != r[a(1456, 1521)] && !g[a(1786, 2012)];
            _ && r[a(1596, 1729)](g, i, h);
            var w = r[a(1719, 1496)];
            h[a(1583, 1681)](w);
            var S = o._v3,
              P = r[a(1817, 1775)],
              T = r.m_LookaheadTime;
            if (P < T) {
              const L = r.m_Predictor;
              ((L[a(1558, 1418)] = r.m_LookaheadSmoothing),
                L.AddPosition(h, n, T),
                (g = C),
                L[a(1688, 1721)](T, g),
                r[a(1575, 1360)] && u[a(1490, 1555)](g, i[a(1570, 1449)], g));
              const U = c;
              if ((u[a(1466, 1413)](h, g, U), _)) {
                const D = r[a(1762, 1861)];
                W.M4[a(1376, 1575)](r[a(1523, 1715)], g, S);
                var M = D[a(1463, 1477)]();
                u[a(1466, 1561)](M, S, M);
              }
              U[a(1583, 1622)](w);
            }
            i.HasLookAt || h[a(1583, 1437)](i[a(1411, 1451)]);
            let t = r[a(1710, 1541)];
            var V,
              M = s[a(1368, 1485)];
            let e = 0;
            (_ &&
              ((V = o[a(1591, 1599)]),
              (i = r[a(1762, 1739)].getExtent()),
              u.div(i, r[a(1679, 1783)], V),
              r.GetTargetHeight(V)),
              (e = Math.max(e, r[a(1642, 1597)])),
              !M &&
                _ &&
                ((V = r[a(1762, 1642)][a(1567, 1767)]().z) <
                  (x = r.LastBounds[a(1463, 1263)]().z) && (e = W.Mathf.Lerp(0, e, (x - V) / x)),
                0 != r[a(1420, 1211)] &&
                  ((t =
                    e /
                    (2 *
                      Math[a(1381, 1603)](
                        (s[a(1441, 1370)] * W[a(1745, 1827)][a(1584, 1512)]) / 2,
                      ))),
                  (t = W[a(1745, 1683)][a(1713, 1607)](t, r[a(1630, 1444)], r[a(1531, 1602)])),
                  (A = r[a(1710, 1915)]),
                  (F = t - A),
                  (F = W[a(1745, 1940)][a(1713, 1840)](F, -r[a(1574, 1723)], r.m_MaxDollyOut)),
                  (t = A + F))));
            const y = l;
            var x = o._q1;
            (p[a(1583, 1571)](y),
              d &&
                r.m_TargetMovementOnly &&
                (W[a(1771, 1546)].invert(r[a(1547, 1732)], x),
                W[a(1771, 1750)][a(1666, 1567)](y, x, x),
                u[a(1644, 1445)](f, w, C),
                u[a(1675, 1491)](C, x, C),
                u[a(1466, 1461)](w, C, f)),
              y[a(1583, 1801)](r[a(1547, 1444)]));
            var A = C;
            f[a(1583, 1425)](A);
            var F = x;
            (W.Quat[a(1546, 1336)](y, F),
              (l = c),
              u.transformQuat(A, F, l),
              u[a(1675, 1864)](w, F, S));
            const O = S;
            (u[a(1644, 1721)](S, l, S), (c = C), O[a(1583, 1788)](c));
            const B = o._v4;
            if (
              (u.Z.cloneTo(B),
              (A = Math.max(r[a(1730, 1688)], t - r[a(1442, 1454)] / 2)),
              (w = Math[a(1618, 1462)](A, t + r[a(1442, 1254)] / 2)),
              (c = Math[a(1413, 1333)](O.z, c.z)) < A && (B.z = c - A),
              w < c && (B.z = c - w),
              (A = s[a(1368, 1296)]
                ? s[a(1701, 1758)]
                : Math[a(1381, 1180)](0.5 * s.FieldOfView * W.Mathf[a(1584, 1728)]) * (c - B.z)),
              (w = r[a(1436, 1499)]),
              r[a(1652, 1805)](w),
              r[a(1620, 1655)](w, A, s.Aspect, w),
              (c = o[a(1504, 1450)]),
              d)
            )
              (r[a(1481, 1345)](O, w, O),
                W[a(1536, 1645)][a(1466, 1391)](B, O, B),
                C[a(1772, 1621)](r[a(1397, 1432)], r[a(1590, 1680)], r[a(1477, 1575)]),
                m[a(1493, 1632)](B, C, n),
                !r.m_UnlimitedSoftZone &&
                  (n < 0 || m[a(1539, 1686)] > 1 - P) &&
                  ((o = r[a(1741, 1827)]),
                  r[a(1785, 1979)](o),
                  r[a(1620, 1746)](o, A, s[a(1621, 1667)], o),
                  (A = S),
                  W[a(1536, 1314)][a(1675, 1598)](h, F, S),
                  W[a(1536, 1691)][a(1644, 1845)](S, l, A),
                  W.Vec3.subtract(A, B, A),
                  r[a(1481, 1279)](A, o, A),
                  W[a(1536, 1363)].add(B, A, B)));
            else {
              const R = w;
              (r[a(1814, 1727)] &&
                !r[a(1747, 1536)] &&
                (R[a(1635, 1729)](c), R.setValue(c, W[a(1497, 1588)].ZERO)),
                r[a(1481, 1332)](O, R, O),
                u[a(1466, 1366)](B, O, B));
            }
            if ((u[a(1466, 1261)](l, B, S), u[a(1675, 1848)](S, y, v), v[a(1583, 1420)](f), _))
              if (M)
                ((_ = r[a(1407, 1598)]),
                  (M = r[a(1541, 1388)]),
                  (e = W[a(1745, 1605)][a(1713, 1872)](e / 2, _, M)),
                  d &&
                    (e =
                      r[a(1792, 1854)] +
                      m[a(1493, 1553)](e - r[a(1792, 1675)], r[a(1477, 1481)], n)),
                  (r[a(1792, 1683)] = e),
                  (s[a(1701, 1479)] = W[a(1745, 1724)].Clamp(e, _, M)));
              else if (1 != r.m_AdjustmentMode) {
                (u[a(1644, 1569)](h, v, S),
                  W[a(1771, 1698)][a(1546, 1644)](p, x),
                  u[a(1675, 1681)](S, x, S));
                let t = 179;
                (P < (S = S.z) &&
                  (t = 2 * Math.atan(e / (2 * S)) * W[a(1745, 1709)][a(1763, 1741)]),
                  (t = W[a(1745, 1870)].Clamp(t, r[a(1581, 1705)], r.m_MaximumFOV)),
                  d &&
                    (t =
                      r.m_prevFOV +
                      m.DetachedFollowTargetDamp(t - r[a(1792, 1876)], r[a(1477, 1563)], n)),
                  (r[a(1792, 1766)] = t),
                  (s[a(1441, 1613)] = t));
              }
            r[a(1747, 1628)] = !1;
          } else r.InheritingPosition = !1;
        }
        [I(804, 736)](t) {
          function e(t, e) {
            return I(t, e - 791);
          }
          switch (this[e(1564, 1415)]) {
            case 0:
              return t.x / this[e(1551, 1742)].Aspect;
            case 1:
              return t.y;
            default:
              return Math[e(1477, 1577)](t.x / this[e(1565, 1742)][e(1617, 1580)], t.y);
          }
        }
        [I(917, 764)](t, e, i) {
          const n = b;
          var a = n[r(354, 389)];
          function r(t, e) {
            return I(t, e - -387);
          }
          e[r(602, 556)][r(286, 364)](a);
          var s = n[r(355, 173)];
          const o = e.RawOrientation;
          W[r(481, 317)][r(551, 456)](W[r(279, 317)].FW, o, s);
          var h = n._m0;
          W.M4[r(200, 163)](a, o, W[r(107, 317)][r(231, 298)], h);
          const l = n[r(105, 246)];
          t.GetViewSpaceBoundingBox(h, l);
          var u = i;
          W.M4[r(74, 157)](h, l[r(134, 244)](), u);
          var c = l.getExtent().z,
            m = n[r(533, 386)],
            d = n[r(338, 280)];
          (e[r(242, 200)][r(63, 149)] ||
            (o.invert(m),
            W[r(519, 317)][r(213, 425)](u, a, d),
            W.Vec3[r(372, 456)](d, m, d),
            (m = d.z),
            W[r(398, 317)][r(623, 470)](s, Math[r(266, 399)](m, c) + c, d),
            W[r(352, 317)][r(313, 425)](u, d, a),
            n.GetScreenSpaceGroupBoundingBox(t, a, o, l),
            W.M4[r(219, 163)](a, o, W[r(138, 317)][r(248, 298)], h),
            W.M4.MultiplyPoint3x4(h, l[r(35, 244)](), u)),
            l[r(414, 364)](this[r(576, 543)]),
            W[r(126, 317)][r(576, 470)](s, c, d),
            W.Vec3[r(280, 425)](u, d, i));
        }
        static [I(644, 582)](t, e, i, n) {
          var a = this[c(956, 1009)];
          W.M4[c(936, 803)](e, i, W.Vec3[c(1071, 853)], a);
          const r = this[c(1018, 807)];
          var s = this._w2,
            o = this._w3;
          t[c(931, 1014)](a, r, s, o);
          const h = this[c(1058, 1085)];
          (W[c(1051, 847)][c(1020, 1037)](r, s, h),
            W[c(1051, 1265)][c(1243, 1377)](h, 0.5, h),
            (h.x *= -1));
          var l = this[c(1302, 1283)];
          (x[c(1195, 1375)][c(1309, 1533)](W[c(1325, 1181)].I, h, W[c(1090, 1281)].UP, l),
            e[c(1326, 1487)](0, 0, (o.y + o.x) / 2),
            W[c(1090, 1245)][c(1229, 1117)](e, l, e),
            (e.z = 0),
            W.M4[c(930, 1067)](a, e, e),
            W.M4[c(936, 1082)](e, i, W.Vec3[c(1071, 1107)], a),
            t[c(931, 1e3)](a, r, s, o),
            (a = o.y + o.x));
          const u = h;
          function c(t, e) {
            return I(e, t - 386);
          }
          (u[c(1326, 1315)](89.5, 89.5),
            0 < o.x &&
              (x.UVEs[c(970, 893)](r, r),
              W[c(1051, 1004)][c(1172, 1367)](s, r, u),
              r[c(1326, 1469)](89.5, 89.5),
              W.Vec2[c(967, 813)](u, r, u)),
            W.Vec2.scale(u, W[c(1299, 1297)][c(1138, 1133)], u));
          const m = this[c(1145, 1340)];
          (m[c(1326, 1110)](0, 0, a / 2),
            n[c(1241, 1044)](m),
            m[c(1326, 1521)](Math[c(935, 792)](u.y) * a, Math[c(935, 923)](u.x) * a, o.y - o.x),
            n[c(1334, 1447)](m));
        }
      }
      ((b[I(786, 971)] = new W[I(683, 704)]()),
        (b[I(901, 902)] = new W[I(910, 704)]()),
        (b[I(649, 776)] = new W[I(798, 704)]()),
        (b[I(777, 560)] = new W[I(603, 704)]()),
        (b._v5 = new W.Vec3()),
        (b._v6 = new W[I(892, 704)]()),
        (b._r0 = W[I(671, 892)].zero),
        (b[I(459, 672)] = new W[I(624, 665)]()),
        (b[I(614, 632)] = new W[I(870, 665)]()),
        (b[I(836, 958)] = new W.Vec2()),
        (b[I(1008, 861)] = new W[I(662, 665)]()),
        (b._q1 = new W[I(1025, 939)]()),
        (b._m0 = new W.M4()),
        (b._m1 = new W.M4()),
        (b[I(516, 633)] = new Laya[I(765, 729)](
          W[I(534, 704)][I(704, 740)],
          W[I(658, 704)][I(900, 740)],
        )),
        (b[I(429, 576)] = [
          I(397, 555),
          "m_LookaheadSmoothing",
          I(664, 743),
          I(444, 565),
          "m_YDamping",
          I(710, 645),
          I(682, 744),
          I(614, 762),
          I(781, 681),
          I(845, 878),
          "m_DeadZoneWidth",
          "m_DeadZoneHeight",
          I(789, 610),
          I(796, 722),
          "m_SoftZoneWidth",
          I(459, 573),
          I(535, 640),
          I(797, 741),
          I(1043, 982),
          I(607, 624),
          I(805, 588),
          "m_GroupFramingSize",
          I(654, 742),
          I(1008, 908),
          I(627, 798),
          "m_MaximumDistance",
          I(766, 749),
          "m_MaximumFOV",
          I(533, 575),
          "m_MaximumOrthoSize",
        ]),
        (x[I(795, 646)] = b));
      class f extends x[I(1006, 784)] {
        constructor() {
          function t(t, e) {
            return I(t, e - 9);
          }
          (super(...arguments),
            (this.Damping = new W[t(526, 713)](0.1, 0.5, 0.3)),
            (this[t(676, 622)] = new W[t(804, 713)](0.5, -0.4, 0)),
            (this[t(655, 657)] = 0.4),
            (this[t(885, 796)] = 1),
            (this[t(779, 982)] = 2),
            (this[t(853, 682)] = 0),
            (this.m_PreviousFollowTargetPosition = W[t(574, 713)][t(573, 749)]),
            (this.m_DampingCorrection = W.Vec3[t(590, 749)]),
            (this[t(836, 868)] = 0));
        }
        ["_parse"](t) {
          function e(t, e) {
            return I(e, t - 348);
          }
          for (var i in t) {
            var n = t[i];
            e(883, 1008) == i
              ? this[i][e(1288, 1510)](n.x, n.y, n.z)
              : "ShoulderOffset" == i
                ? this[i][e(1288, 1173)](-n.x, n.y, n.z)
                : e(922, 1025) == i || (this[i] = n);
          }
        }
        [I(943, 822)](i) {
          function n(t, e) {
            return I(e, t - -693);
          }
          (this.Damping.cloneTo(i[n(-158, -30)]), this[n(-80, -261)][n(58, 205)](i[n(-80, -277)]));
          var a = [n(-45, -267), n(94, -95), n(280, 474), n(-20, -123)];
          for (let t = 0, e = a[n(249, 282)]; t < e; t++) {
            var r = a[t];
            i[r] = this[r];
          }
        }
        [I(1033, 826)]() {
          function t(t, e) {
            return I(t, e - -503);
          }
          (this[t(147, 110)][t(409, 437)](0.5, -0.4, 0),
            (this.VerticalArmLength = 0.4),
            (this[t(382, 284)] = 1),
            (this[t(654, 470)] = 2),
            this.Damping[t(438, 437)](0.1, 0.5, 0.3),
            (this[t(62, 170)] = 0.02));
        }
        get [I(526, 617)]() {
          function t(t, e) {
            return I(e, t - 304);
          }
          return this[t(1199, 1077)] && null != this[t(1e3, 1137)];
        }
        get [I(929, 901)]() {
          return 0;
        }
        [I(889, 808)]() {
          var t = this[e(653, 711)];
          function e(t, e) {
            return I(e, t - 118);
          }
          return Math[e(904, 895)](t.x, Math[e(904, 952)](t.y, t.z));
        }
        [I(826, 906)](t, e) {
          function i(t, e) {
            return I(e, t - 438);
          }
          this[i(1055, 907)] &&
            (this[i(1188, 1198)].PreviousStateIsValid || (e = -1), this.PositionCamera(t, e));
        }
        ["OnTargetObjectWarped"](t, e) {
          function i(t, e) {
            return I(t, e - -843);
          }
          (super[i(-419, -232)](t, e),
            t == this[i(-327, -147)] &&
              W[i(-124, -139)][i(-178, -209)](this[i(132, 6)], e, this[i(-75, 6)]));
        }
        [I(551, 717)](t, e) {
          var i = f;
          const n = W[c(-28, -163)],
            a = i[c(-18, 60)];
          t[c(-17, -129)][c(10, -116)](a);
          const r = i[c(98, 104)];
          this[c(-478, -262)](r);
          const s = i[c(-297, -94)];
          this[c(-68, -104)](s);
          var o = i[c(200, 35)];
          n[c(-24, -24)](n.FW, s, o);
          var h = i[c(265, 49)];
          this.GetHeading(o, a, h);
          var l = i[c(-56, 90)],
            u = this[c(196, -18)];
          function c(t, e) {
            return I(t, e - -867);
          }
          const m = this[c(175, 51)];
          var d = i[c(95, -91)];
          (e < 0
            ? n.Z[c(-84, -116)](m)
            : (W[c(-124, 72)].invert(h, l),
              n[c(70, -55)](u, r, u),
              n[c(88, -24)](u, l, u),
              n.add(m, u, m),
              m.cloneTo(d),
              this[c(-206, -117)][c(-192, -206)](d, this[c(-200, -332)], e),
              n[c(-60, -55)](m, d, m)),
            r[c(-203, -116)](u),
            (e = i[c(-301, -307)]),
            r.cloneTo(e),
            (u = d),
            this.GetRawRigPositions(e, s, h, i._v5, u),
            n[c(-98, -10)](o, this.CameraDistance - m.z, o));
          const v = d;
          (n[c(-119, -55)](u, o, v),
            v[c(-131, -116)](t[c(-89, 76)]),
            s[c(-118, -116)](t[c(118, 24)]),
            a[c(-7, -116)](t[c(-283, -129)]));
        }
        [I(634, 748)](t, e, i) {
          var n = f,
            a = this[s(-308, -422)].State[s(-320, -438)],
            r = n[s(-101, -275)];
          function s(t, e) {
            return I(e, t - -1058);
          }
          this[s(-295, -480)](r);
          var o = i;
          (W[s(-354, -247)][s(-215, -306)](W.Vec3.FW, r, o),
            (n = n[s(-494, -617)]),
            this.GetHeading(o, a, n),
            this[s(-209, -160)][s(-307, -497)](t),
            this.GetRawRigPositions(t, r, n, e, i));
        }
        [I(616, 602)](t, e, i) {
          var n = f[r(-33, 80)];
          const a = W[r(216, 117)];
          function r(t, e) {
            return I(t, e - -587);
          }
          (a[r(67, 71)](t, e, n),
            a[r(350, 390)](n, e, n),
            a[r(602, 390)](e, n, n),
            W.Quat[r(199, 99)](n, e, i));
        }
        [I(355, 538)](t, e, i, n, a) {
          function r(t, e) {
            return I(t, e - -664);
          }
          const s = f[r(21, 3)],
            o = W[r(-111, 40)];
          var h = this[r(-195, -51)],
            l = o.RI,
            u = -2 * o.dot(l, h);
          s[r(378, 276)](u * l.x + h.x, u * l.y + h.y, u * l.z + h.z);
          const c = s;
          (o[r(182, 154)](s, h, this[r(-99, 123)], c),
            (h = this[r(441, 254)]),
            (c.x += h.x),
            (c.y += h.y),
            o[r(194, 179)](c, i, n),
            o.add(t, n, n));
          const m = f[r(263, 95)];
          (m.setValue(0, this[r(168, -16)], 0), o[r(238, 179)](m, e, m), o.add(n, m, a));
        }
      }
      ((f._v0 = new W[I(687, 704)]()),
        (f[I(1119, 971)] = new W[I(702, 704)]()),
        (f[I(765, 902)] = new W[I(553, 704)]()),
        (f[I(861, 776)] = new W.Vec3()),
        (f[I(662, 560)] = new W[I(704, 704)]()),
        (f[I(576, 667)] = new W.Vec3()),
        (f[I(592, 759)] = new W[I(488, 704)]()),
        (f[I(574, 773)] = new W[I(1147, 939)]()),
        (f._q1 = new W[I(750, 939)]()),
        (f[I(883, 957)] = new W[I(736, 939)]()),
        (f[I(364, 564)] = new W[I(856, 939)]()),
        (x.Ci3PF = f));
      class g extends x[I(792, 784)] {
        constructor() {
          function t(t, e) {
            return I(t, e - -479);
          }
          (super(...arguments), (this[t(93, 258)] = 0), (this[t(625, 407)] = new W[t(301, 460)]()));
        }
        get ["IsValid"]() {
          return this[I(1444, 895)] && null != this.FollowTarget;
        }
        get ["Stage"]() {
          return 1;
        }
        ["GetMaxDampTime"]() {
          return this[I(525, 737)];
        }
        [I(893, 739)](t) {
          this.m_Damping = t[I(814, 737)];
        }
        [I(616, 822)](t) {
          function e(t, e) {
            return I(e, t - 614);
          }
          t[e(1351, 1241)] = this[e(1351, 1129)];
        }
        [I(1083, 906)](t, e) {
          function i(t, e) {
            return I(t, e - 903);
          }
          if (this[i(1428, 1520)]) {
            const a = g[i(1527, 1676)];
            this.FollowTargetRotation(a);
            var n = this[i(1944, 1789)];
            (0 <= e &&
              ((e = this[i(1460, 1653)][i(1396, 1564)](1, this[i(1418, 1640)], e)),
              W.Quat[i(1398, 1481)](n, a, e, a)),
              a[i(1871, 1654)](n),
              a[i(1628, 1654)](t[i(1855, 1794)]),
              W[i(1447, 1607)][i(1624, 1746)](W[i(1731, 1607)].UP, a, t[i(1569, 1641)]));
          }
        }
      }
      ((g._q0 = new W[I(915, 939)]()), (x[I(787, 682)] = g));
    })((_z = _z || {})),
    (function (t) {
      !(function () {
        var e = m();
        function t(t, e) {
          return w(e - 275, t);
        }
        for (;;)
          try {
            if (
              238215 ==
              +parseInt(t(666, 651)) +
                (-parseInt(t(636, 653)) / 2) * (-parseInt(t(605, 624)) / 3) +
                (-parseInt(t(616, 625)) / 4) * (-parseInt(t(666, 645)) / 5) +
                parseInt(t(648, 640)) / 6 +
                (parseInt(t(633, 649)) / 7) * (-parseInt(t(644, 623)) / 8) +
                (-parseInt(t(628, 637)) / 9) * (-parseInt(t(656, 663)) / 10) +
                -parseInt(t(626, 628)) / 11
            )
              break;
            e.push(e.shift());
          } catch (t) {
            e.push(e.shift());
          }
      })();
      class e extends _z[g(-551, -542)] {}
      t[g(-534, -542)] = e;
      class i extends _z[g(-553, -558)] {}
      t[g(-570, -558)] = i;
      class n extends _z[g(-572, -566)] {}
      t[g(-560, -566)] = n;
      class a extends _z[g(-583, -578)] {}
      t[g(-557, -578)] = a;
      class r extends _z[g(-550, -540)] {}
      t[g(-560, -540)] = r;
      class s extends _z[g(-528, -550)] {}
      t[g(-535, -550)] = s;
      class o extends _z[g(-546, -549)] {}
      t[g(-551, -549)] = o;
      class h extends _z[g(-564, -547)] {}
      t[g(-528, -547)] = h;
      class l extends _z[g(-554, -535)] {}
      t[g(-551, -535)] = l;
      class u extends _z[g(-543, -556)] {}
      t[g(-562, -556)] = u;
      class c extends _z[g(-563, -576)] {}
      function m() {
        var t = [
          "UVEs",
          "15ANecsF",
          "VcamActivatedEvent",
          "CiHLT",
          "CiHL",
          "657615KyqrlK",
          "CiCo",
          "117183KkCeeU",
          "TransitionParams",
          "12358sPovvB",
          "UpdateMethod",
          "UpdateTracker",
          "StandbyUpdateMode",
          "BlendSourceVirtualCamera",
          "Stage",
          "BrainUpdateMethod",
          "Late",
          "BlendHintValue",
          "CiFT",
          "220HykQWd",
          "CiVC",
          "UpdateClock",
          "CiSFT",
          "_UpdateFilter",
          "8NhaLgz",
          "135QnyQoZ",
          "42236IWdKww",
          "BlendHint",
          "FramingMode",
          "9069016nTJxFS",
          "CinemachineBlendDefinition",
          "LensSettings",
          "CiBr",
          "CiPi",
          "CameraState",
          "TargetPositionCache",
          "BrainEvent",
          "UQEs",
          "191907qpzFxo",
          "Fixed",
          "CiC",
          "1563570empoMB",
          "Ci3PF",
          "AdjustmentMode",
          "Style",
        ];
        return (m = function () {
          return t;
        })();
      }
      t[g(-589, -576)] = c;
      class d extends _z[g(-580, -564)] {}
      t[g(-563, -564)] = d;
      class v extends _z[g(-548, -565)] {}
      t[g(-561, -565)] = v;
      class p extends _z[g(-556, -567)] {}
      t[g(-584, -567)] = p;
      class C extends _z[g(-533, -553)] {}
      t[g(-570, -553)] = C;
      class f extends _z[g(-553, -561)] {}
      t[g(-579, -561)] = f;
      class W extends _z[g(-536, -545)] {}
      function g(t, e) {
        return w(e - -922, t);
      }
      t[g(-558, -545)] = W;
      class _ extends _z[g(-583, -563)] {}
      function w(t, e) {
        var i = m();
        return (w = function (t, e) {
          return i[(t -= 344)];
        })(t, e);
      }
      t[g(-559, -563)] = _;
      class S extends _z[g(-582, -568)] {}
      t[g(-563, -568)] = S;
      class P extends _z[g(-542, -551)] {}
      t[g(-539, -551)] = P;
      class T extends _z[g(-581, -562)] {}
      var M;
      ((t[g(-571, -562)] = T),
        ((M = t[g(-594, -577)] || (t[g(-581, -577)] = {}))[(M[g(-542, -559)] = 0)] = g(-571, -559)),
        (M[(M[g(-547, -537)] = 1)] = g(-556, -537)),
        t[g(-581, -575)] || (t[g(-590, -575)] = {}),
        t[g(-547, -536)] || (t[g(-544, -536)] = {}),
        t[g(-530, -541)] || (t[g(-541, -541)] = {}),
        t[g(-560, -571)] || (t[g(-578, -571)] = {}),
        t[g(-545, -543)] || (t[g(-520, -543)] = {}),
        t[g(-545, -538)] || (t[g(-528, -538)] = {}),
        t[g(-531, -539)] || (t[g(-532, -539)] = {}),
        t[g(-535, -554)] || (t[g(-558, -554)] = {}),
        t[g(-567, -570)] || (t[g(-552, -570)] = {}),
        t[g(-535, -555)] || (t[g(-545, -555)] = {}));
    })((window.C = window.C || {}), C));
});
