// figma node: 37:356 Arrow up-right
export function ArrowUpRight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
        position: "absolute",
        left: 7,
        top: 7,
        width: 10,
        height: 10,
      }}>
        <path d={"M 0 0 L 10 0 L 10 10 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default ArrowUpRight;
