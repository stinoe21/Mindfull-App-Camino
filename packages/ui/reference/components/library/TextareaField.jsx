// figma node: 25:818 Textarea Field (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "valueType=" + __venc(p.valueType);

export function TextareaField(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", value: _p.value ?? "Value", hasLabel: _p.hasLabel ?? true, hasDescription: _p.hasDescription ?? false, label: _p.label ?? "Label", description: _p.description ?? "Description", hasError: _p.hasError ?? false, error: _p.error ?? "Hint", valueType: _p.valueType ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--icon-default-tertiary)",
      ...props.style,
    }}>
      {props.hasLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      )}
      {props.hasDescription && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        minWidth: 120,
        minHeight: 80,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--background-default-default)",
        borderTop: "1px solid var(--border-default-default)",
        borderRight: "1px solid var(--border-default-default)",
        borderBottom: "1px solid var(--border-default-default)",
        borderLeft: "1px solid var(--border-default-default)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 16px 12px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--space-400) * 1px)",
        paddingTop: "calc(var(--space-300) * 1px)",
        paddingRight: "calc(var(--space-400) * 1px)",
        paddingBottom: "calc(var(--space-300) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.399999976158142,
          color: "var(--text-default-tertiary)",
          flexGrow: 1,
        }}>{props.value}</span>
        <div style={{
          position: "absolute",
          left: 108.354,
          top: 67.354,
          width: 6.627,
          height: 6.627,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Drag</div>
      </div>
      {props.hasError && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.error}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--icon-default-tertiary)",
      ...props.style,
    }}>
      {props.hasLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      )}
      {props.hasDescription && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        minWidth: 120,
        minHeight: 80,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--background-default-default)",
        borderTop: "1px solid var(--border-default-default)",
        borderRight: "1px solid var(--border-default-default)",
        borderBottom: "1px solid var(--border-default-default)",
        borderLeft: "1px solid var(--border-default-default)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 16px 12px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--space-400) * 1px)",
        paddingTop: "calc(var(--space-300) * 1px)",
        paddingRight: "calc(var(--space-400) * 1px)",
        paddingBottom: "calc(var(--space-300) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.399999976158142,
          color: "var(--text-default-default)",
          flexGrow: 1,
        }}>{props.value}</span>
        <div style={{
          position: "absolute",
          left: 108.354,
          top: 67.354,
          width: 6.627,
          height: 6.627,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Drag</div>
      </div>
      {props.hasError && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.error}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--icon-default-tertiary)",
      ...props.style,
    }}>
      {props.hasLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      )}
      {props.hasDescription && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        minWidth: 120,
        minHeight: 80,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--background-default-default)",
        borderTop: "1px solid var(--border-danger-default)",
        borderRight: "1px solid var(--border-danger-default)",
        borderBottom: "1px solid var(--border-danger-default)",
        borderLeft: "1px solid var(--border-danger-default)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 16px 12px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--space-400) * 1px)",
        paddingTop: "calc(var(--space-300) * 1px)",
        paddingRight: "calc(var(--space-400) * 1px)",
        paddingBottom: "calc(var(--space-300) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.399999976158142,
          color: "var(--text-default-tertiary)",
          flexGrow: 1,
        }}>{props.value}</span>
        <div style={{
          position: "absolute",
          left: 108.354,
          top: 67.354,
          width: 6.627,
          height: 6.627,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Drag</div>
      </div>
      {props.hasError && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-danger-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.error}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--icon-default-tertiary)",
      ...props.style,
    }}>
      {props.hasLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      )}
      {props.hasDescription && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        minWidth: 120,
        minHeight: 80,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--background-default-default)",
        borderTop: "1px solid var(--border-danger-default)",
        borderRight: "1px solid var(--border-danger-default)",
        borderBottom: "1px solid var(--border-danger-default)",
        borderLeft: "1px solid var(--border-danger-default)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 16px 12px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--space-400) * 1px)",
        paddingTop: "calc(var(--space-300) * 1px)",
        paddingRight: "calc(var(--space-400) * 1px)",
        paddingBottom: "calc(var(--space-300) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.399999976158142,
          color: "var(--text-default-default)",
          flexGrow: 1,
        }}>{props.value}</span>
        <div style={{
          position: "absolute",
          left: 108.354,
          top: 67.354,
          width: 6.627,
          height: 6.627,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Drag</div>
      </div>
      {props.hasError && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-danger-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.error}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--icon-disabled-on-disabled)",
      ...props.style,
    }}>
      {props.hasLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-disabled-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      )}
      {props.hasDescription && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-default-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        minWidth: 120,
        minHeight: 80,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--background-disabled-default)",
        borderTop: "1px solid var(--border-disabled-default)",
        borderRight: "1px solid var(--border-disabled-default)",
        borderBottom: "1px solid var(--border-disabled-default)",
        borderLeft: "1px solid var(--border-disabled-default)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 16px 12px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--space-400) * 1px)",
        paddingTop: "calc(var(--space-300) * 1px)",
        paddingRight: "calc(var(--space-400) * 1px)",
        paddingBottom: "calc(var(--space-300) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.399999976158142,
          color: "var(--text-disabled-default)",
          flexGrow: 1,
        }}>{props.value}</span>
        <div style={{
          position: "absolute",
          left: 108.354,
          top: 67.354,
          width: 6.627,
          height: 6.627,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Drag</div>
      </div>
      {props.hasError && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.399999976158142,
        color: "var(--text-disabled-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.error}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Default, Value Type=Placeholder
    "state=default|valueType=placeholder": __body0,
    // figma: State=Default, Value Type=Default
    "state=default|valueType=default": __body1,
    // figma: State=Error, Value Type=Placeholder
    "state=error|valueType=placeholder": __body2,
    // figma: State=Error, Value Type=Default
    "state=error|valueType=default": __body3,
    // figma: State=Disabled, Value Type=Default
    "state=disabled|valueType=default": __body4,
    // figma: State=Disabled, Value Type=Placeholder
    "state=disabled|valueType=placeholder": __body4,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default TextareaField;
