// Only the browser build makes magnet/refresh unlimited; original game effects
// and the mini-game source remain intact. Fail closed if the source moves.
module.exports = function browserProps(source) {
  const start = '      bj = class extends FGUI.Button {';
  const end = '      (gH(bj, "BtnProp"),';
  if (source.split(start).length !== 2 || source.split(end).length !== 2)
    throw new Error('Prop button class changed; review browser adaptation');
  const begin = source.indexOf(start), finish = source.indexOf(end, begin);
  if (finish < begin) throw new Error('Invalid prop button boundaries');
  let button = source.slice(begin, finish);
  function replace(before, after) {
    if (button.split(before).length !== 2)
      throw new Error('Prop button hook changed: ' + before);
    button = button.replace(before, after);
  }
  replace(start, start + `
        get webUnlimited() {
          return this.prop === bf.Prop.PropMagnet || this.prop === bf.Prop.PropRefresh;
        }`);
  replace('            cp.AdShow(fz),\n            cp.AdShow(e2));',
    '            this.webUnlimited || (cp.AdShow(fz), cp.AdShow(e2)));');
  replace('dQ.dec(dR + this.prop, 1)',
    '(this.webUnlimited ? dQ.set(dR + this.prop, 1) : dQ.dec(dR + this.prop, 1))');
  replace('dQ.add(dR + this.prop, 1)',
    '(this.webUnlimited ? dQ.set(dR + this.prop, 1) : dQ.add(dR + this.prop, 1))');
  replace('          c = dQ.get(dR + this.prop);', `          c = dQ.get(dR + this.prop);
          if (this.webUnlimited && c !== 1) {
            dQ.set(dR + this.prop, 1);
            W.ICache.saveData();
            c = 1;
          }`);
  replace('        onBtnClick() {', `        onBtnClick() {
          // No acquisition popup, video ad, or per-level usage limit for these two.
          // The real effect still checks its busy state and eligible targets.
          if (this.webUnlimited) {
            if (!this.grayed) this.propUse();
            return;
          }`);
  return source.slice(0, begin) + button + source.slice(finish);
};
