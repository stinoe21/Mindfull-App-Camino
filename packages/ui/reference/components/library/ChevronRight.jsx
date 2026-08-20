// figma node: 25:1481 Chevron right (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function ChevronRight(_p = {}) {
  const props = { ..._p, size: _p.size ?? "20" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={12} height={24} viewBox="0 0 12 24" fill="none" style={{
        position: "absolute",
        left: 18,
        top: 12,
        width: 12,
        height: 24,
      }}>
        <path d={"M 0 24 L 12 12 L 0 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={4} height={8} viewBox="0 0 4 8" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 4,
        width: 4,
        height: 8,
      }}>
        <path d={"M 0 8 L 4 4 L 0 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={5} height={10} viewBox="0 0 5 10" fill="none" style={{
        position: "absolute",
        left: 7.5,
        top: 5,
        width: 5,
        height: 10,
      }}>
        <path d={"M 0 10 L 5 5 L 0 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={6} height={12} viewBox="0 0 6 12" fill="none" style={{
        position: "absolute",
        left: 9,
        top: 6,
        width: 6,
        height: 12,
      }}>
        <path d={"M 0 12 L 6 6 L 0 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={8} height={16} viewBox="0 0 8 16" fill="none" style={{
        position: "absolute",
        left: 12,
        top: 8,
        width: 8,
        height: 16,
      }}>
        <path d={"M 0 16 L 8 8 L 0 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={10} height={20} viewBox="0 0 10 20" fill="none" style={{
        position: "absolute",
        left: 15,
        top: 10,
        width: 10,
        height: 20,
      }}>
        <path d={"M 0 20 L 10 10 L 0 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Size=48
    "size=48": __body0,
    // figma: Size=16
    "size=16": __body1,
    // figma: Size=20
    "size=20": __body2,
    // figma: Size=24
    "size=24": __body3,
    // figma: Size=32
    "size=32": __body4,
    // figma: Size=40
    "size=40": __body5,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ChevronRight;
