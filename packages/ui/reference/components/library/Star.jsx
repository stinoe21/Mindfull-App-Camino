// figma node: 25:864 Star
export function Star(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={13.333} height={12.680} viewBox="0 0 13.333 12.680" fill="none" style={{
        position: "absolute",
        left: 1.333,
        top: 1.333,
        width: 13.333,
        height: 12.68,
      }}>
        <path d={"M 6.667 0 L 8.727 4.173 L 13.333 4.847 L 10 8.093 L 10.787 12.68 L 6.667 10.513 L 2.547 12.68 L 3.333 8.093 L 0 4.847 L 4.607 4.173 L 6.667 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Star;
