// figma node: 127:3713 check_small
export function CheckSmall(_p = {}) {
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
      <svg width={12} height={9.400} viewBox="0 0 12 9.400" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 7,
        width: 12,
        height: 9.4,
      }}>
        <path d={"M 4 9.4 L 0 5.4 L 1.4 4 L 4 6.6 L 10.6 0 L 12 1.4 L 4 9.4 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default CheckSmall;
