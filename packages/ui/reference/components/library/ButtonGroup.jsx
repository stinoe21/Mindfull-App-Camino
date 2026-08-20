import { LibraryButton } from './LibraryButton.jsx';

// figma node: 25:957 Button Group (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "align=" + __venc(p.align);

export function ButtonGroup(_p = {}) {
  const props = { ..._p, buttonStart: _p.buttonStart ?? true, align: _p.align ?? "justify", buttonEnd: _p.buttonEnd ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-400) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.buttonStart && (
      <LibraryButton
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        variant={"subtle"}
        state={"default"}
        size={"md"}
      />
      )}
      {props.buttonEnd && (
      <LibraryButton
        style={{
          position: "relative",
          width: 99,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        variant={"primary"}
        state={"default"}
        size={"md"}
      />
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-400) * 1px)",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.buttonStart && (
      <LibraryButton
        style={{
          position: "relative",
          width: 99,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        variant={"subtle"}
        state={"default"}
        size={"md"}
      />
      )}
      {props.buttonEnd && (
      <LibraryButton
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        variant={"primary"}
        state={"default"}
        size={"md"}
      />
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-400) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.buttonStart && (
      <LibraryButton
        style={{
          position: "relative",
          width: 99,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        variant={"subtle"}
        state={"default"}
        size={"md"}
      />
      )}
      {props.buttonEnd && (
      <LibraryButton
        style={{
          position: "relative",
          width: 99,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        variant={"primary"}
        state={"default"}
        size={"md"}
      />
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-400) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.buttonStart && (
      <LibraryButton
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        variant={"subtle"}
        state={"default"}
        size={"md"}
      />
      )}
      {props.buttonEnd && (
      <LibraryButton
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        variant={"primary"}
        state={"default"}
        size={"md"}
      />
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-400) * 1px)",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.buttonStart && (
      <LibraryButton
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"subtle"}
        state={"default"}
        size={"md"}
      />
      )}
      {props.buttonEnd && (
      <LibraryButton
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"primary"}
        state={"default"}
        size={"md"}
      />
      )}
    </div>
  );
  const __impls = {
    // figma: Align=Start
    "align=start": __body0,
    // figma: Align=End
    "align=end": __body1,
    // figma: Align=Center
    "align=center": __body2,
    // figma: Align=Justify
    "align=justify": __body3,
    // figma: Align=Stack
    "align=stack": __body4,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default ButtonGroup;
