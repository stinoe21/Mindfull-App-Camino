// figma node: 127:3702 close
export function Close(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--schemes-on-surface)",
      ...props.style,
    }}>
      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
        position: "absolute",
        left: 5,
        top: 5,
        width: 14,
        height: 14,
      }}>
        <path d={"M 1.4 14 L 0 12.6 L 5.6 7 L 0 1.4 L 1.4 0 L 7 5.6 L 12.6 0 L 14 1.4 L 8.4 7 L 14 12.6 L 12.6 14 L 7 8.4 L 1.4 14 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Close;
