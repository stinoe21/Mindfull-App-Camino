// figma node: 19:122 Continue with Google / Centre / Fixed
export function ContinueWithGoogleCentreFixed(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 345,
      height: 54,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.084), 0px 2px 3px 0px rgba(0,0,0,0.168)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 42,
        top: 0,
        borderRadius: 10,
        backgroundColor: "rgb(255,255,255)",
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
          backgroundColor: "rgb(255,255,255)",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0.5,
            top: 0.5,
            width: 23,
            height: 23,
            overflow: "hidden",
          }}>
            <svg width={11.040} height={10.805} viewBox="0 0 11.040 10.805" fill="none" style={{
              position: "absolute",
              left: 11.5,
              top: 9.409,
              width: 11.04,
              height: 10.805,
              color: "rgb(66,133,244)",
            }}>
              <path d={"M 11.04 2.352 C 11.04 1.537 10.967 0.753 10.831 0 L 0 0 L 0 4.448 L 6.189 4.448 C 5.922 5.886 5.112 7.104 3.894 7.919 L 3.894 10.805 L 7.611 10.805 C 9.785 8.803 11.04 5.855 11.04 2.352 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
            <svg width={17.888} height={9.315} viewBox="0 0 17.888 9.315" fill="none" style={{
              position: "absolute",
              left: 1.223,
              top: 13.685,
              width: 17.888,
              height: 9.315,
              color: "rgb(52,168,83)",
            }}>
              <path d={"M 10.277 9.315 C 13.382 9.315 15.985 8.285 17.888 6.529 L 14.171 3.643 C 13.141 4.333 11.824 4.741 10.277 4.741 C 7.282 4.741 4.746 2.718 3.842 0 L 0 0 L 0 2.98 C 1.892 6.738 5.781 9.315 10.277 9.315 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
            <svg width={5.065} height={10.329} viewBox="0 0 5.065 10.329" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 6.336,
              width: 5.065,
              height: 10.329,
              color: "rgb(251,188,5)",
            }}>
              <path d={"M 5.065 7.35 C 4.835 6.66 4.705 5.923 4.705 5.165 C 4.705 4.407 4.835 3.67 5.065 2.98 L 5.065 0 L 1.223 0 C 0.444 1.553 0 3.309 0 5.165 C 0 7.02 0.444 8.777 1.223 10.329 L 5.065 7.35 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
            <svg width={17.971} height={9.315} viewBox="0 0 17.971 9.315" fill="none" style={{
              position: "absolute",
              left: 1.223,
              top: 0,
              width: 17.971,
              height: 9.315,
              color: "rgb(234,67,53)",
            }}>
              <path d={"M 10.277 4.574 C 11.965 4.574 13.481 5.154 14.673 6.294 L 17.971 2.995 C 15.98 1.14 13.377 0 10.277 0 C 5.781 0 1.892 2.577 0 6.335 L 3.842 9.315 C 4.746 6.597 7.282 4.574 10.277 4.574 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
            {/* Figma exported this clipping-mask rect as an opaque filled path,
                which painted a black square over the Google mark. Kept as a no-op. */}
            <svg width={23} height={23} viewBox="0 0 23 23" fill="none" style={{
              display: "none",
              position: "absolute",
              left: 0,
              top: 0,
              width: 23,
              height: 23,
            }}>
              <path d={"M 0 0 L 23 0 L 23 23 L 0 23 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgba(0,0,0,0.54)",
          flexShrink: 0,
        }}>{props.text1 ?? "Continue with Google"}</span>
      </div>
    </div>
  );
}
export default ContinueWithGoogleCentreFixed;
