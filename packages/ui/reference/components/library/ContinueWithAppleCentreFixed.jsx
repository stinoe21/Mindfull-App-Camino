// figma node: 19:132 Continue with Apple / Centre / Fixed
export function ContinueWithAppleCentreFixed(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 345,
      height: 54,
      borderRadius: 10,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.084), 0px 2px 3px 0px rgba(0,0,0,0.168)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 51,
        top: 0,
        borderRadius: 10,
        backgroundColor: "rgb(0,0,0)",
        display: "flex",
        flexDirection: "row",
        gap: 15,
        padding: "15px 15px 15px 15px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          backgroundColor: "rgb(0,0,0)",
          flexShrink: 0,
        }}>
          <svg width={19.373} height={23} viewBox="0 0 19.373 23" fill="none" style={{
            position: "absolute",
            left: 2.313,
            top: 0.5,
            width: 19.373,
            height: 23,
          }}>
            <path d={"M 18.967 17.924 C 18.619 18.728 18.208 19.467 17.731 20.147 C 17.081 21.074 16.548 21.716 16.138 22.072 C 15.502 22.657 14.82 22.957 14.091 22.974 C 13.567 22.974 12.935 22.825 12.2 22.522 C 11.462 22.221 10.784 22.072 10.164 22.072 C 9.513 22.072 8.816 22.221 8.07 22.522 C 7.323 22.825 6.721 22.982 6.261 22.998 C 5.561 23.028 4.864 22.72 4.168 22.072 C 3.723 21.685 3.168 21.02 2.502 20.079 C 1.787 19.074 1.2 17.908 0.74 16.58 C 0.247 15.144 0 13.754 0 12.409 C 0 10.867 0.333 9.538 1 8.424 C 1.524 7.529 2.222 6.823 3.095 6.305 C 3.968 5.787 4.911 5.523 5.927 5.506 C 6.483 5.506 7.212 5.678 8.117 6.016 C 9.021 6.355 9.601 6.527 9.855 6.527 C 10.045 6.527 10.689 6.326 11.781 5.925 C 12.814 5.553 13.686 5.399 14.4 5.46 C 16.335 5.616 17.789 6.379 18.756 7.753 C 17.025 8.802 16.169 10.27 16.186 12.154 C 16.202 13.622 16.734 14.843 17.78 15.813 C 18.255 16.263 18.784 16.611 19.373 16.858 C 19.246 17.228 19.111 17.583 18.967 17.924 L 18.967 17.924 Z M 14.529 0.46 C 14.529 1.61 14.109 2.684 13.271 3.678 C 12.261 4.86 11.038 5.543 9.712 5.435 C 9.695 5.297 9.685 5.152 9.685 5 C 9.685 3.895 10.166 2.713 11.02 1.747 C 11.446 1.258 11.988 0.851 12.645 0.527 C 13.301 0.207 13.922 0.03 14.505 0 C 14.522 0.154 14.529 0.308 14.529 0.46 L 14.529 0.46 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "Continue with Apple"}</span>
      </div>
    </div>
  );
}
export default ContinueWithAppleCentreFixed;
