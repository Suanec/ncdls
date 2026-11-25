// Browser builds keep pool maintenance but do not run the mini-game platform guard.
// That guard burns CPU after frame 300 and writes stage.renderingEnabled=false
// after frame 900 on an ordinary web origin. See docs/PLATFORM_FREEZE_FIX.md.
module.exports = function browserRuntime(source) {
  const call = "          i.j(0);";
  if (source.split(call).length !== 2)
    throw new Error("Platform guard call changed; review the browser adaptation");
  return source.replace(call, "          // Browser host: no mini-game platform watchdog.");
};
