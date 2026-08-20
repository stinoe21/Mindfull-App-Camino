import { Star } from './Star.jsx';
import { X } from './X.jsx';

// figma node: 25:884 Button (18 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function LibraryButton(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Button", variant: _p.variant ?? "primary", hasIconStart: _p.hasIconStart ?? false, hasIconEnd: _p.hasIconEnd ?? false, state: _p.state ?? "default", size: _p.size ?? "md" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-default)",
      borderTop: "1px solid var(--border-brand-default)",
      borderRight: "1px solid var(--border-brand-default)",
      borderBottom: "1px solid var(--border-brand-default)",
      borderLeft: "1px solid var(--border-brand-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-300) * 1px)",
      paddingTop: "calc(var(--space-300) * 1px)",
      paddingRight: "calc(var(--space-300) * 1px)",
      paddingBottom: "calc(var(--space-300) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-brand-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-hover)",
      boxShadow: "inset 0 0 0 1px var(--border-brand-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-300) * 1px)",
      paddingTop: "calc(var(--space-300) * 1px)",
      paddingRight: "calc(var(--space-300) * 1px)",
      paddingBottom: "calc(var(--space-300) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-brand-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-disabled-default)",
      boxShadow: "inset 0 0 0 1px var(--border-disabled-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-300) * 1px)",
      paddingTop: "calc(var(--space-300) * 1px)",
      paddingRight: "calc(var(--space-300) * 1px)",
      paddingBottom: "calc(var(--space-300) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-disabled-on-disabled)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-neutral-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--border-neutral-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-300) * 1px)",
      paddingTop: "calc(var(--space-300) * 1px)",
      paddingRight: "calc(var(--space-300) * 1px)",
      paddingBottom: "calc(var(--space-300) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-neutral-tertiary-hover)",
      boxShadow: "inset 0 0 0 1px var(--border-neutral-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-300) * 1px)",
      paddingTop: "calc(var(--space-300) * 1px)",
      paddingRight: "calc(var(--space-300) * 1px)",
      paddingBottom: "calc(var(--space-300) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-300) * 1px)",
      paddingTop: "calc(var(--space-300) * 1px)",
      paddingRight: "calc(var(--space-300) * 1px)",
      paddingBottom: "calc(var(--space-300) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-neutral-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--border-default-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-300) * 1px)",
      paddingTop: "calc(var(--space-300) * 1px)",
      paddingRight: "calc(var(--space-300) * 1px)",
      paddingBottom: "calc(var(--space-300) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-default)",
      boxShadow: "inset 0 0 0 1px var(--border-brand-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-brand-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-hover)",
      boxShadow: "inset 0 0 0 1px var(--border-brand-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-brand-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-disabled-default)",
      boxShadow: "inset 0 0 0 1px var(--border-disabled-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-disabled-on-disabled)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-neutral-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--border-neutral-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-neutral-tertiary-hover)",
      boxShadow: "inset 0 0 0 1px var(--border-neutral-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--border-default-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.hasIconStart && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconStart ?? <Star />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.hasIconEnd && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconEnd ?? <X />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Variant=Primary, State=Default, Size=Medium
    "variant=primary|state=default|size=md": __body0,
    // figma: Variant=Primary, State=Hover, Size=Medium
    "variant=primary|state=hover|size=md": __body1,
    // figma: Variant=Primary, State=Disabled, Size=Medium
    "variant=primary|state=disabled|size=md": __body2,
    // figma: Variant=Neutral, State=Default, Size=Medium
    "variant=neutral|state=default|size=md": __body3,
    // figma: Variant=Neutral, State=Hover, Size=Medium
    "variant=neutral|state=hover|size=md": __body4,
    // figma: Variant=Neutral, State=Disabled, Size=Medium
    "variant=neutral|state=disabled|size=md": __body2,
    // figma: Variant=Subtle, State=Default, Size=Medium
    "variant=subtle|state=default|size=md": __body5,
    // figma: Variant=Subtle, State=Hover, Size=Medium
    "variant=subtle|state=hover|size=md": __body6,
    // figma: Variant=Subtle, State=Disabled, Size=Medium
    "variant=subtle|state=disabled|size=md": __body2,
    // figma: Variant=Primary, State=Default, Size=Small
    "variant=primary|state=default|size=sm": __body7,
    // figma: Variant=Primary, State=Hover, Size=Small
    "variant=primary|state=hover|size=sm": __body8,
    // figma: Variant=Primary, State=Disabled, Size=Small
    "variant=primary|state=disabled|size=sm": __body9,
    // figma: Variant=Neutral, State=Default, Size=Small
    "variant=neutral|state=default|size=sm": __body10,
    // figma: Variant=Neutral, State=Hover, Size=Small
    "variant=neutral|state=hover|size=sm": __body11,
    // figma: Variant=Neutral, State=Disabled, Size=Small
    "variant=neutral|state=disabled|size=sm": __body9,
    // figma: Variant=Subtle, State=Default, Size=Small
    "variant=subtle|state=default|size=sm": __body12,
    // figma: Variant=Subtle, State=Hover, Size=Small
    "variant=subtle|state=hover|size=sm": __body13,
    // figma: Variant=Subtle, State=Disabled, Size=Small
    "variant=subtle|state=disabled|size=sm": __body9,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default LibraryButton;
