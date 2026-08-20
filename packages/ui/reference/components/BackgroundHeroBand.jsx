// figma node: 474:1569 Background/Hero band (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function BackgroundHeroBand(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 200,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-2f4a875b3bf21bdb" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 200,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 200,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-f3e771cda8e7097c" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 200,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 200,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-1b7c333b1db90b48" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 200,
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 200,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-6c3af41e9f7294a3" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 200,
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 200,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-2d76afdf8003b24a" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 200,
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 200,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-69c975fb5b8b0073" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 200,
      }} />
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Zonnig
    "state=zonnig": __body1,
    // figma: State=Wolken
    "state=wolken": __body2,
    // figma: State=Mist
    "state=mist": __body3,
    // figma: State=Wind
    "state=wind": __body4,
    // figma: State=Regen
    "state=regen": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default BackgroundHeroBand;
