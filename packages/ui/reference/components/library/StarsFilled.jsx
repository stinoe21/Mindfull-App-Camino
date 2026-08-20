// figma node: 37:6394 stars_filled
export function StarsFilled(_p = {}) {
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
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 6 16 L 10 12.95 L 14 16 L 12.5 11.05 L 16.5 8.2 L 11.6 8.2 L 10 3 L 8.4 8.2 L 3.5 8.2 L 7.5 11.05 L 6 16 Z M 10 20 C 8.617 20 7.317 19.737 6.1 19.212 C 4.883 18.687 3.825 17.975 2.925 17.075 C 2.025 16.175 1.313 15.117 0.788 13.9 C 0.262 12.683 0 11.383 0 10 C 0 8.617 0.262 7.317 0.788 6.1 C 1.313 4.883 2.025 3.825 2.925 2.925 C 3.825 2.025 4.883 1.313 6.1 0.788 C 7.317 0.262 8.617 0 10 0 C 11.383 0 12.683 0.262 13.9 0.788 C 15.117 1.313 16.175 2.025 17.075 2.925 C 17.975 3.825 18.687 4.883 19.212 6.1 C 19.737 7.317 20 8.617 20 10 C 20 11.383 19.737 12.683 19.212 13.9 C 18.687 15.117 17.975 16.175 17.075 17.075 C 16.175 17.975 15.117 18.687 13.9 19.212 C 12.683 19.737 11.383 20 10 20 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default StarsFilled;
