import { InputField } from './InputField.jsx';
import { TextareaField } from './TextareaField.jsx';

// figma node: 25:973 Form Contact
export function FormContact(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      minWidth: 320,
      borderRadius: 8,
      backgroundColor: "var(--background-default-default)",
      borderTop: "1px solid var(--border-default-default)",
      borderRight: "1px solid var(--border-default-default)",
      borderBottom: "1px solid var(--border-default-default)",
      borderLeft: "1px solid var(--border-default-default)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-600) * 1px)",
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-600) * 1px)",
      paddingTop: "calc(var(--space-600) * 1px)",
      paddingRight: "calc(var(--space-600) * 1px)",
      paddingBottom: "calc(var(--space-600) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <InputField
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Name"}
        state={"default"}
        valueType={"placeholder"}
      />
      <InputField
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Surname"}
        state={"default"}
        valueType={"placeholder"}
      />
      <InputField
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Email"}
        state={"default"}
        valueType={"placeholder"}
      />
      <TextareaField
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Message"}
        state={"default"}
        valueType={"placeholder"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-400) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={13.333} height={12.680} viewBox="0 0 13.333 12.680" fill="none" style={{
              position: "absolute",
              left: 1.333,
              top: 1.333,
              width: 13.333,
              height: 12.68,
              color: "rgb(44,44,44)",
            }}>
              <path d={"M 6.667 0 L 7.384 -0.354 C 7.249 -0.627 6.971 -0.8 6.667 -0.8 C 6.362 -0.8 6.084 -0.627 5.949 -0.354 L 6.667 0 Z M 8.727 4.173 L 8.009 4.527 C 8.126 4.763 8.351 4.927 8.611 4.965 L 8.727 4.173 Z M 13.333 4.847 L 13.892 5.42 C 14.11 5.207 14.188 4.89 14.094 4.6 C 14 4.31 13.75 4.099 13.449 4.055 L 13.333 4.847 Z M 10 8.093 L 9.442 7.52 C 9.253 7.704 9.167 7.969 9.212 8.229 L 10 8.093 Z M 10.787 12.68 L 10.414 13.388 C 10.684 13.53 11.01 13.506 11.257 13.327 C 11.503 13.148 11.627 12.845 11.575 12.545 L 10.787 12.68 Z M 6.667 10.513 L 7.039 9.805 C 6.806 9.683 6.527 9.683 6.294 9.805 L 6.667 10.513 Z M 2.547 12.68 L 1.758 12.545 C 1.707 12.845 1.83 13.148 2.076 13.327 C 2.323 13.506 2.649 13.53 2.919 13.388 L 2.547 12.68 Z M 3.333 8.093 L 4.122 8.229 C 4.166 7.969 4.08 7.704 3.892 7.52 L 3.333 8.093 Z M 0 4.847 L -0.116 4.055 C -0.417 4.099 -0.667 4.31 -0.761 4.6 C -0.855 4.89 -0.776 5.207 -0.558 5.42 L 0 4.847 Z M 4.607 4.173 L 4.722 4.965 C 4.983 4.927 5.208 4.763 5.324 4.527 L 4.607 4.173 Z M 6.667 0 L 5.949 0.354 L 8.009 4.527 L 8.727 4.173 L 9.444 3.819 L 7.384 -0.354 L 6.667 0 Z M 8.727 4.173 L 8.611 4.965 L 13.218 5.638 L 13.333 4.847 L 13.449 4.055 L 8.842 3.382 L 8.727 4.173 Z M 13.333 4.847 L 12.775 4.274 L 9.442 7.52 L 10 8.093 L 10.558 8.666 L 13.892 5.42 L 13.333 4.847 Z M 10 8.093 L 9.212 8.229 L 9.998 12.815 L 10.787 12.68 L 11.575 12.545 L 10.788 7.958 L 10 8.093 Z M 10.787 12.68 L 11.159 11.972 L 7.039 9.805 L 6.667 10.513 L 6.294 11.221 L 10.414 13.388 L 10.787 12.68 Z M 6.667 10.513 L 6.294 9.805 L 2.174 11.972 L 2.547 12.68 L 2.919 13.388 L 7.039 11.221 L 6.667 10.513 Z M 2.547 12.68 L 3.335 12.815 L 4.122 8.229 L 3.333 8.093 L 2.545 7.958 L 1.758 12.545 L 2.547 12.68 Z M 3.333 8.093 L 3.892 7.52 L 0.558 4.274 L 0 4.847 L -0.558 5.42 L 2.775 8.666 L 3.333 8.093 Z M 0 4.847 L 0.116 5.638 L 4.722 4.965 L 4.607 4.173 L 4.491 3.382 L -0.116 4.055 L 0 4.847 Z M 4.607 4.173 L 5.324 4.527 L 7.384 0.354 L 6.667 0 L 5.949 -0.354 L 3.889 3.819 L 4.607 4.173 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: 1,
            color: "var(--text-neutral-default)",
            flexShrink: 0,
          }}>Button</span>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 4,
              width: 8,
              height: 8,
              color: "rgb(44,44,44)",
            }}>
              <path d={"M 8.566 0.566 C 8.878 0.253 8.878 -0.253 8.566 -0.566 C 8.253 -0.878 7.747 -0.878 7.434 -0.566 L 8 0 L 8.566 0.566 Z M -0.566 7.434 C -0.878 7.747 -0.878 8.253 -0.566 8.566 C -0.253 8.878 0.253 8.878 0.566 8.566 L 0 8 L -0.566 7.434 Z M 0.566 -0.566 C 0.253 -0.878 -0.253 -0.878 -0.566 -0.566 C -0.878 -0.253 -0.878 0.253 -0.566 0.566 L 0 0 L 0.566 -0.566 Z M 7.434 8.566 C 7.747 8.878 8.253 8.878 8.566 8.566 C 8.878 8.253 8.878 7.747 8.566 7.434 L 8 8 L 7.434 8.566 Z M 8 0 L 7.434 -0.566 L -0.566 7.434 L 0 8 L 0.566 8.566 L 8.566 0.566 L 8 0 Z M 0 0 L -0.566 0.566 L 7.434 8.566 L 8 8 L 8.566 7.434 L 0.566 -0.566 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={13.333} height={12.680} viewBox="0 0 13.333 12.680" fill="none" style={{
              position: "absolute",
              left: 1.333,
              top: 1.333,
              width: 13.333,
              height: 12.68,
              color: "rgb(67,67,67)",
            }}>
              <path d={"M 6.667 0 L 7.384 -0.354 C 7.249 -0.627 6.971 -0.8 6.667 -0.8 C 6.362 -0.8 6.084 -0.627 5.949 -0.354 L 6.667 0 Z M 8.727 4.173 L 8.009 4.527 C 8.126 4.763 8.351 4.927 8.611 4.965 L 8.727 4.173 Z M 13.333 4.847 L 13.892 5.42 C 14.11 5.207 14.188 4.89 14.094 4.6 C 14 4.31 13.75 4.099 13.449 4.055 L 13.333 4.847 Z M 10 8.093 L 9.442 7.52 C 9.253 7.704 9.167 7.969 9.212 8.229 L 10 8.093 Z M 10.787 12.68 L 10.414 13.388 C 10.684 13.53 11.01 13.506 11.257 13.327 C 11.503 13.148 11.627 12.845 11.575 12.545 L 10.787 12.68 Z M 6.667 10.513 L 7.039 9.805 C 6.806 9.683 6.527 9.683 6.294 9.805 L 6.667 10.513 Z M 2.547 12.68 L 1.758 12.545 C 1.707 12.845 1.83 13.148 2.076 13.327 C 2.323 13.506 2.649 13.53 2.919 13.388 L 2.547 12.68 Z M 3.333 8.093 L 4.122 8.229 C 4.166 7.969 4.08 7.704 3.892 7.52 L 3.333 8.093 Z M 0 4.847 L -0.116 4.055 C -0.417 4.099 -0.667 4.31 -0.761 4.6 C -0.855 4.89 -0.776 5.207 -0.558 5.42 L 0 4.847 Z M 4.607 4.173 L 4.722 4.965 C 4.983 4.927 5.208 4.763 5.324 4.527 L 4.607 4.173 Z M 6.667 0 L 5.949 0.354 L 8.009 4.527 L 8.727 4.173 L 9.444 3.819 L 7.384 -0.354 L 6.667 0 Z M 8.727 4.173 L 8.611 4.965 L 13.218 5.638 L 13.333 4.847 L 13.449 4.055 L 8.842 3.382 L 8.727 4.173 Z M 13.333 4.847 L 12.775 4.274 L 9.442 7.52 L 10 8.093 L 10.558 8.666 L 13.892 5.42 L 13.333 4.847 Z M 10 8.093 L 9.212 8.229 L 9.998 12.815 L 10.787 12.68 L 11.575 12.545 L 10.788 7.958 L 10 8.093 Z M 10.787 12.68 L 11.159 11.972 L 7.039 9.805 L 6.667 10.513 L 6.294 11.221 L 10.414 13.388 L 10.787 12.68 Z M 6.667 10.513 L 6.294 9.805 L 2.174 11.972 L 2.547 12.68 L 2.919 13.388 L 7.039 11.221 L 6.667 10.513 Z M 2.547 12.68 L 3.335 12.815 L 4.122 8.229 L 3.333 8.093 L 2.545 7.958 L 1.758 12.545 L 2.547 12.68 Z M 3.333 8.093 L 3.892 7.52 L 0.558 4.274 L 0 4.847 L -0.558 5.42 L 2.775 8.666 L 3.333 8.093 Z M 0 4.847 L 0.116 5.638 L 4.722 4.965 L 4.607 4.173 L 4.491 3.382 L -0.116 4.055 L 0 4.847 Z M 4.607 4.173 L 5.324 4.527 L 7.384 0.354 L 6.667 0 L 5.949 -0.354 L 3.889 3.819 L 4.607 4.173 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: 1,
            color: "var(--text-brand-on-brand)",
            flexShrink: 0,
          }}>Submit</span>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 4,
              width: 8,
              height: 8,
              color: "rgb(67,67,67)",
            }}>
              <path d={"M 8.566 0.566 C 8.878 0.253 8.878 -0.253 8.566 -0.566 C 8.253 -0.878 7.747 -0.878 7.434 -0.566 L 8 0 L 8.566 0.566 Z M -0.566 7.434 C -0.878 7.747 -0.878 8.253 -0.566 8.566 C -0.253 8.878 0.253 8.878 0.566 8.566 L 0 8 L -0.566 7.434 Z M 0.566 -0.566 C 0.253 -0.878 -0.253 -0.878 -0.566 -0.566 C -0.878 -0.253 -0.878 0.253 -0.566 0.566 L 0 0 L 0.566 -0.566 Z M 7.434 8.566 C 7.747 8.878 8.253 8.878 8.566 8.566 C 8.878 8.253 8.878 7.747 8.566 7.434 L 8 8 L 7.434 8.566 Z M 8 0 L 7.434 -0.566 L -0.566 7.434 L 0 8 L 0.566 8.566 L 8.566 0.566 L 8 0 Z M 0 0 L -0.566 0.566 L 7.434 8.566 L 8 8 L 8.566 7.434 L 0.566 -0.566 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormContact;
