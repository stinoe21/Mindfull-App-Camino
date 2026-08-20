// figma node: 25:862 X
export function X(_p = {}) {
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
      <div style={{
        position: "absolute",
        left: 4,
        top: 4,
        width: 8,
        height: 8,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Icon</div>
    </div>
  );
}
export default X;
