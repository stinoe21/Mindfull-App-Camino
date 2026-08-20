// figma node: 41:21 Focus indicator
export function FocusIndicator(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      borderRadius: 2,
      boxShadow: "0 0 0 3px var(--schemes-secondary)",
      position: "relative",
      ...props.style,
    }} />
  );
}
export default FocusIndicator;
