import { FocusIndicator } from './FocusIndicator.jsx';
import { StarsFilled } from './StarsFilled.jsx';

// figma node: 37:6380 Icon button - standard (150 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state) + '|' + "width=" + __venc(p.width);

export function IconButtonStandard(_p = {}) {
  const props = { ..._p, type: _p.type ?? "round", showFocusIndicator: _p.showFocusIndicator ?? false, size: _p.size ?? "sm", state: _p.state ?? "enabled", width: _p.width ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 184,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 184,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 184,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 188,
          height: 140,
        }}>
        <FocusIndicator style={{ transform: "scale(1.880, 1.400)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 184,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={118} height={82} viewBox="0 0 118 82" fill="none" style={{
            position: "absolute",
            left: 66,
            top: 54,
            width: 118,
            height: 82,
          }}>
            <path d={"M 118 9.149 L 118 82 L 0 82 C 0 36.713 36.199 0 80.852 0 C 94.245 0 106.877 3.303 118 9.149 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 184,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 140,
          height: 140,
        }}>
        <FocusIndicator style={{ transform: "scale(1.400, 1.400)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={118} height={82} viewBox="0 0 118 82" fill="none" style={{
            position: "absolute",
            left: 18,
            top: 54,
            width: 118,
            height: 82,
          }}>
            <path d={"M 118 9.149 L 118 82 L 0 82 C 0 36.713 36.199 0 80.852 0 C 94.245 0 106.877 3.303 118 9.149 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 104,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 104,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 104,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 108,
          height: 140,
        }}>
        <FocusIndicator style={{ transform: "scale(1.080, 1.400)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 104,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={118} height={82} viewBox="0 0 118 82" fill="none" style={{
            position: "absolute",
            left: -14,
            top: 54,
            width: 118,
            height: 82,
          }}>
            <path d={"M 118 9.149 L 118 82 L 0 82 C 0 36.713 36.199 0 80.852 0 C 94.245 0 106.877 3.303 118 9.149 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 104,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 128,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 128,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 128,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 132,
          height: 100,
        }}>
        <FocusIndicator style={{ transform: "scale(1.320, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 128,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={82} height={58} viewBox="0 0 82 58" fill="none" style={{
            position: "absolute",
            left: 46,
            top: 38,
            width: 82,
            height: 58,
          }}>
            <path d={"M 82 6.471 L 82 58 L 0 58 C 0 25.967 25.155 0 56.185 0 C 65.492 0 74.27 2.336 82 6.471 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 128,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <FocusIndicator style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 100,
          height: 100,
        }} />
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={82} height={58} viewBox="0 0 82 58" fill="none" style={{
            position: "absolute",
            left: 14,
            top: 38,
            width: 82,
            height: 58,
          }}>
            <path d={"M 82 6.471 L 82 58 L 0 58 C 0 25.967 25.155 0 56.185 0 C 65.492 0 74.27 2.336 82 6.471 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 68,
          height: 100,
        }}>
        <FocusIndicator style={{ transform: "scale(0.680, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={82} height={58} viewBox="0 0 82 58" fill="none" style={{
            position: "absolute",
            left: -18,
            top: 38,
            width: 82,
            height: 58,
          }}>
            <path d={"M 82 6.471 L 82 58 L 0 58 C 0 25.967 25.155 0 56.185 0 C 65.492 0 74.27 2.336 82 6.471 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        overflow: "hidden",
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "row",
          padding: "16px 32px 16px 32px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          padding: "16px 32px 16px 32px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          padding: "16px 32px 16px 32px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 76,
          height: 60,
        }}>
        <FocusIndicator style={{ transform: "scale(0.760, 0.600)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          padding: "16px 32px 16px 32px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={46} height={38} viewBox="0 0 46 38" fill="none" style={{
            position: "absolute",
            left: 26,
            top: 18,
            width: 46,
            height: 38,
          }}>
            <path d={"M 46 4.24 L 46 38 L 0 38 C 0 17.013 14.111 0 31.519 0 C 36.739 0 41.664 1.53 46 4.24 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          padding: "16px 32px 16px 32px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 60,
          height: 60,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.600, 0.600)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={46} height={38} viewBox="0 0 46 38" fill="none" style={{
            position: "absolute",
            left: 10,
            top: 18,
            width: 46,
            height: 38,
          }}>
            <path d={"M 46 4.24 L 46 38 L 0 38 C 0 17.013 14.111 0 31.519 0 C 36.739 0 41.664 1.53 46 4.24 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 52,
          height: 60,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.520, 0.600)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={46} height={38} viewBox="0 0 46 38" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 18,
            width: 46,
            height: 38,
          }}>
            <path d={"M 46 4.24 L 46 38 L 0 38 C 0 17.013 14.111 0 31.519 0 C 36.739 0 41.664 1.53 46 4.24 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: 2,
          width: 56,
          height: 44,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.560, 0.440)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={38} height={28} viewBox="0 0 38 28" fill="none" style={{
            position: "absolute",
            left: 14,
            top: 12,
            width: 38,
            height: 28,
          }}>
            <path d={"M 38 3.124 L 38 28 L 0 28 C 0 12.536 11.657 0 26.037 0 C 30.35 0 34.418 1.128 38 3.124 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 44,
          height: 44,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.440, 0.440)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={38} height={28} viewBox="0 0 38 28" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 12,
            width: 38,
            height: 28,
          }}>
            <path d={"M 38 3.124 L 38 28 L 0 28 C 0 12.536 11.657 0 26.037 0 C 30.35 0 34.418 1.128 38 3.124 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 2,
          width: 36,
          height: 44,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.360, 0.440)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={38} height={28} viewBox="0 0 38 28" fill="none" style={{
            position: "absolute",
            left: -6,
            top: 12,
            width: 38,
            height: 28,
          }}>
            <path d={"M 38 3.124 L 38 28 L 0 28 C 0 12.536 11.657 0 26.037 0 C 30.35 0 34.418 1.128 38 3.124 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 2,
          top: 6,
          width: 44,
          height: 36,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.440, 0.360)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={34} height={22} viewBox="0 0 34 22" fill="none" style={{
            position: "absolute",
            left: 6,
            top: 10,
            width: 34,
            height: 22,
          }}>
            <path d={"M 34 2.454 L 34 22 L 0 22 C 0 9.85 10.43 0 23.296 0 C 27.155 0 30.795 0.886 34 2.454 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 36,
          height: 36,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.360, 0.360)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={34} height={22} viewBox="0 0 34 22" fill="none" style={{
            position: "absolute",
            left: -2,
            top: 10,
            width: 34,
            height: 22,
          }}>
            <path d={"M 34 2.454 L 34 22 L 0 22 C 0 9.85 10.43 0 23.296 0 C 27.155 0 30.795 0.886 34 2.454 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 8,
          top: 6,
          width: 32,
          height: 36,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.320, 0.360)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(73,69,79,0.1)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={34} height={22} viewBox="0 0 34 22" fill="none" style={{
            position: "absolute",
            left: -6,
            top: 10,
            width: 34,
            height: 22,
          }}>
            <path d={"M 34 2.454 L 34 22 L 0 22 C 0 9.85 10.43 0 23.296 0 C 27.155 0 30.795 0.886 34 2.454 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 184,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 184,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 184,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 188,
          height: 140,
        }}>
        <FocusIndicator style={{ transform: "scale(1.880, 1.400)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 184,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 140,
          height: 140,
        }}>
        <FocusIndicator style={{ transform: "scale(1.400, 1.400)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 104,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 104,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 104,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 108,
          height: 140,
        }}>
        <FocusIndicator style={{ transform: "scale(1.080, 1.400)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 104,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 136,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 128,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 128,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 128,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 132,
          height: 100,
        }}>
        <FocusIndicator style={{ transform: "scale(1.320, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 128,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <FocusIndicator style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 100,
          height: 100,
        }} />
      )}
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 96,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 68,
          height: 100,
        }}>
        <FocusIndicator style={{ transform: "scale(0.680, 1)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 96,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body100 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "row",
          padding: "16px 32px 16px 32px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body101 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          padding: "16px 32px 16px 32px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body102 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          padding: "16px 32px 16px 32px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 76,
          height: 60,
        }}>
        <FocusIndicator style={{ transform: "scale(0.760, 0.600)", transformOrigin: "0 0" }} />
      </div>
      )}
    </div>
  );
  const __body103 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 72,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          padding: "16px 32px 16px 32px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body104 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body105 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body106 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 60,
          height: 60,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.600, 0.600)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body107 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body108 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body109 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body110 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 52,
          height: 60,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.520, 0.600)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body111 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 48,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body112 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body113 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body114 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: -2,
          top: 2,
          width: 56,
          height: 44,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.560, 0.440)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body115 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body116 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body117 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 44,
          height: 44,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.440, 0.440)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body118 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body119 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body120 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body121 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 2,
          width: 36,
          height: 44,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.360, 0.440)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body122 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled />}</div>
        </div>
      </div>
    </div>
  );
  const __body123 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body124 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body125 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 2,
          top: 6,
          width: 44,
          height: 36,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.440, 0.360)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body126 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body127 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body128 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body129 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 36,
          height: 36,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.360, 0.360)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body130 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body131 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body132 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.08)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __body133 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          backgroundColor: "rgba(73,69,79,0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface-variant)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.showFocusIndicator && (
      <div style={{
          position: "absolute",
          left: 8,
          top: 6,
          width: 32,
          height: 36,
        }}>{props.icon1 ?? <FocusIndicator style={{ transform: "scale(0.320, 0.360)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body134 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 32,
          opacity: 0.38,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "var(--schemes-on-surface)",
            }}>{props.icon ?? <StarsFilled style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Round, Size=Small, Width=Default, State=Enabled
    "type=round|size=sm|state=enabled|width=default": __body0,
    // figma: Type=Square, Size=XLarge, Width=Wide, State=Enabled
    "type=square|size=xl|state=enabled|width=wide": __body1,
    // figma: Type=Square, Size=XLarge, Width=Wide, State=Hovered
    "type=square|size=xl|state=hovered|width=wide": __body2,
    // figma: Type=Square, Size=XLarge, Width=Wide, State=Focused
    "type=square|size=xl|state=focused|width=wide": __body3,
    // figma: Type=Square, Size=XLarge, Width=Wide, State=Pressed
    "type=square|size=xl|state=pressed|width=wide": __body4,
    // figma: Type=Square, Size=XLarge, Width=Wide, State=Disabled
    "type=square|size=xl|state=disabled|width=wide": __body5,
    // figma: Type=Square, Size=XLarge, Width=Default, State=Enabled
    "type=square|size=xl|state=enabled|width=default": __body6,
    // figma: Type=Square, Size=XLarge, Width=Default, State=Hovered
    "type=square|size=xl|state=hovered|width=default": __body7,
    // figma: Type=Square, Size=XLarge, Width=Default, State=Focused
    "type=square|size=xl|state=focused|width=default": __body8,
    // figma: Type=Square, Size=XLarge, Width=Default, State=Pressed
    "type=square|size=xl|state=pressed|width=default": __body9,
    // figma: Type=Square, Size=XLarge, Width=Default, State=Disabled
    "type=square|size=xl|state=disabled|width=default": __body10,
    // figma: Type=Square, Size=XLarge, Width=Narrow, State=Enabled
    "type=square|size=xl|state=enabled|width=narrow": __body11,
    // figma: Type=Square, Size=XLarge, Width=Narrow, State=Hovered
    "type=square|size=xl|state=hovered|width=narrow": __body12,
    // figma: Type=Square, Size=XLarge, Width=Narrow, State=Focused
    "type=square|size=xl|state=focused|width=narrow": __body13,
    // figma: Type=Square, Size=XLarge, Width=Narrow, State=Pressed
    "type=square|size=xl|state=pressed|width=narrow": __body14,
    // figma: Type=Square, Size=XLarge, Width=Narrow, State=Disabled
    "type=square|size=xl|state=disabled|width=narrow": __body15,
    // figma: Type=Square, Size=Large, Width=Wide, State=Enabled
    "type=square|size=lg|state=enabled|width=wide": __body16,
    // figma: Type=Square, Size=Large, Width=Wide, State=Hovered
    "type=square|size=lg|state=hovered|width=wide": __body17,
    // figma: Type=Square, Size=Large, Width=Wide, State=Focused
    "type=square|size=lg|state=focused|width=wide": __body18,
    // figma: Type=Square, Size=Large, Width=Wide, State=Pressed
    "type=square|size=lg|state=pressed|width=wide": __body19,
    // figma: Type=Square, Size=Large, Width=Wide, State=Disabled
    "type=square|size=lg|state=disabled|width=wide": __body20,
    // figma: Type=Square, Size=Large, Width=Default, State=Enabled
    "type=square|size=lg|state=enabled|width=default": __body21,
    // figma: Type=Square, Size=Large, Width=Default, State=Hovered
    "type=square|size=lg|state=hovered|width=default": __body22,
    // figma: Type=Square, Size=Large, Width=Default, State=Focused
    "type=square|size=lg|state=focused|width=default": __body23,
    // figma: Type=Square, Size=Large, Width=Default, State=Pressed
    "type=square|size=lg|state=pressed|width=default": __body24,
    // figma: Type=Square, Size=Large, Width=Default, State=Disabled
    "type=square|size=lg|state=disabled|width=default": __body25,
    // figma: Type=Square, Size=Large, Width=Narrow, State=Enabled
    "type=square|size=lg|state=enabled|width=narrow": __body26,
    // figma: Type=Square, Size=Large, Width=Narrow, State=Hovered
    "type=square|size=lg|state=hovered|width=narrow": __body27,
    // figma: Type=Square, Size=Large, Width=Narrow, State=Focused
    "type=square|size=lg|state=focused|width=narrow": __body28,
    // figma: Type=Square, Size=Large, Width=Narrow, State=Pressed
    "type=square|size=lg|state=pressed|width=narrow": __body29,
    // figma: Type=Square, Size=Large, Width=Narrow, State=Disabled
    "type=square|size=lg|state=disabled|width=narrow": __body30,
    // figma: Type=Square, Size=Medium, Width=Wide, State=Enabled
    "type=square|size=md|state=enabled|width=wide": __body31,
    // figma: Type=Square, Size=Medium, Width=Wide, State=Hovered
    "type=square|size=md|state=hovered|width=wide": __body32,
    // figma: Type=Square, Size=Medium, Width=Wide, State=Focused
    "type=square|size=md|state=focused|width=wide": __body33,
    // figma: Type=Square, Size=Medium, Width=Wide, State=Pressed
    "type=square|size=md|state=pressed|width=wide": __body34,
    // figma: Type=Square, Size=Medium, Width=Wide, State=Disabled
    "type=square|size=md|state=disabled|width=wide": __body35,
    // figma: Type=Square, Size=Medium, Width=Default, State=Enabled
    "type=square|size=md|state=enabled|width=default": __body36,
    // figma: Type=Square, Size=Medium, Width=Default, State=Hovered
    "type=square|size=md|state=hovered|width=default": __body37,
    // figma: Type=Square, Size=Medium, Width=Default, State=Focused
    "type=square|size=md|state=focused|width=default": __body38,
    // figma: Type=Square, Size=Medium, Width=Default, State=Pressed
    "type=square|size=md|state=pressed|width=default": __body39,
    // figma: Type=Square, Size=Medium, Width=Default, State=Disabled
    "type=square|size=md|state=disabled|width=default": __body40,
    // figma: Type=Square, Size=Medium, Width=Narrow, State=Enabled
    "type=square|size=md|state=enabled|width=narrow": __body41,
    // figma: Type=Square, Size=Medium, Width=Narrow, State=Hovered
    "type=square|size=md|state=hovered|width=narrow": __body42,
    // figma: Type=Square, Size=Medium, Width=Narrow, State=Focused
    "type=square|size=md|state=focused|width=narrow": __body43,
    // figma: Type=Square, Size=Medium, Width=Narrow, State=Pressed
    "type=square|size=md|state=pressed|width=narrow": __body44,
    // figma: Type=Square, Size=Medium, Width=Narrow, State=Disabled
    "type=square|size=md|state=disabled|width=narrow": __body45,
    // figma: Type=Square, Size=Small, Width=Wide, State=Enabled
    "type=square|size=sm|state=enabled|width=wide": __body46,
    // figma: Type=Square, Size=Small, Width=Wide, State=Hovered
    "type=square|size=sm|state=hovered|width=wide": __body47,
    // figma: Type=Square, Size=Small, Width=Wide, State=Focused
    "type=square|size=sm|state=focused|width=wide": __body48,
    // figma: Type=Square, Size=Small, Width=Wide, State=Pressed
    "type=square|size=sm|state=pressed|width=wide": __body49,
    // figma: Type=Square, Size=Small, Width=Wide, State=Disabled
    "type=square|size=sm|state=disabled|width=wide": __body50,
    // figma: Type=Square, Size=Small, Width=Default, State=Enabled
    "type=square|size=sm|state=enabled|width=default": __body51,
    // figma: Type=Square, Size=Small, Width=Default, State=Hovered
    "type=square|size=sm|state=hovered|width=default": __body52,
    // figma: Type=Square, Size=Small, Width=Default, State=Focused
    "type=square|size=sm|state=focused|width=default": __body53,
    // figma: Type=Square, Size=Small, Width=Default, State=Pressed
    "type=square|size=sm|state=pressed|width=default": __body54,
    // figma: Type=Square, Size=Small, Width=Default, State=Disabled
    "type=square|size=sm|state=disabled|width=default": __body55,
    // figma: Type=Square, Size=Small, Width=Narrow, State=Enabled
    "type=square|size=sm|state=enabled|width=narrow": __body56,
    // figma: Type=Square, Size=Small, Width=Narrow, State=Hovered
    "type=square|size=sm|state=hovered|width=narrow": __body57,
    // figma: Type=Square, Size=Small, Width=Narrow, State=Focused
    "type=square|size=sm|state=focused|width=narrow": __body58,
    // figma: Type=Square, Size=Small, Width=Narrow, State=Pressed
    "type=square|size=sm|state=pressed|width=narrow": __body59,
    // figma: Type=Square, Size=Small, Width=Narrow, State=Disabled
    "type=square|size=sm|state=disabled|width=narrow": __body60,
    // figma: Type=Square, Size=XSmall, Width=Wide, State=Enabled
    "type=square|size=xs|state=enabled|width=wide": __body61,
    // figma: Type=Square, Size=XSmall, Width=Wide, State=Hovered
    "type=square|size=xs|state=hovered|width=wide": __body62,
    // figma: Type=Square, Size=XSmall, Width=Wide, State=Focused
    "type=square|size=xs|state=focused|width=wide": __body63,
    // figma: Type=Square, Size=XSmall, Width=Wide, State=Pressed
    "type=square|size=xs|state=pressed|width=wide": __body64,
    // figma: Type=Square, Size=XSmall, Width=Wide, State=Disabled
    "type=square|size=xs|state=disabled|width=wide": __body65,
    // figma: Type=Square, Size=XSmall, Width=Default, State=Enabled
    "type=square|size=xs|state=enabled|width=default": __body66,
    // figma: Type=Square, Size=XSmall, Width=Default, State=Hovered
    "type=square|size=xs|state=hovered|width=default": __body67,
    // figma: Type=Square, Size=XSmall, Width=Default, State=Focused
    "type=square|size=xs|state=focused|width=default": __body68,
    // figma: Type=Square, Size=XSmall, Width=Default, State=Pressed
    "type=square|size=xs|state=pressed|width=default": __body69,
    // figma: Type=Square, Size=XSmall, Width=Default, State=Disabled
    "type=square|size=xs|state=disabled|width=default": __body70,
    // figma: Type=Square, Size=XSmall, Width=Narrow, State=Enabled
    "type=square|size=xs|state=enabled|width=narrow": __body71,
    // figma: Type=Square, Size=XSmall, Width=Narrow, State=Hovered
    "type=square|size=xs|state=hovered|width=narrow": __body72,
    // figma: Type=Square, Size=XSmall, Width=Narrow, State=Focused
    "type=square|size=xs|state=focused|width=narrow": __body73,
    // figma: Type=Square, Size=XSmall, Width=Narrow, State=Pressed
    "type=square|size=xs|state=pressed|width=narrow": __body74,
    // figma: Type=Square, Size=XSmall, Width=Narrow, State=Disabled
    "type=square|size=xs|state=disabled|width=narrow": __body75,
    // figma: Type=Round, Size=XLarge, Width=Wide, State=Enabled
    "type=round|size=xl|state=enabled|width=wide": __body76,
    // figma: Type=Round, Size=XLarge, Width=Wide, State=Hovered
    "type=round|size=xl|state=hovered|width=wide": __body77,
    // figma: Type=Round, Size=XLarge, Width=Wide, State=Focused
    "type=round|size=xl|state=focused|width=wide": __body78,
    // figma: Type=Round, Size=XLarge, Width=Wide, State=Pressed
    "type=round|size=xl|state=pressed|width=wide": __body4,
    // figma: Type=Round, Size=XLarge, Width=Wide, State=Disabled
    "type=round|size=xl|state=disabled|width=wide": __body79,
    // figma: Type=Round, Size=XLarge, Width=Default, State=Enabled
    "type=round|size=xl|state=enabled|width=default": __body80,
    // figma: Type=Round, Size=XLarge, Width=Default, State=Hovered
    "type=round|size=xl|state=hovered|width=default": __body81,
    // figma: Type=Round, Size=XLarge, Width=Default, State=Focused
    "type=round|size=xl|state=focused|width=default": __body82,
    // figma: Type=Round, Size=XLarge, Width=Default, State=Pressed
    "type=round|size=xl|state=pressed|width=default": __body9,
    // figma: Type=Round, Size=XLarge, Width=Default, State=Disabled
    "type=round|size=xl|state=disabled|width=default": __body83,
    // figma: Type=Round, Size=XLarge, Width=Narrow, State=Enabled
    "type=round|size=xl|state=enabled|width=narrow": __body84,
    // figma: Type=Round, Size=XLarge, Width=Narrow, State=Hovered
    "type=round|size=xl|state=hovered|width=narrow": __body85,
    // figma: Type=Round, Size=XLarge, Width=Narrow, State=Focused
    "type=round|size=xl|state=focused|width=narrow": __body86,
    // figma: Type=Round, Size=XLarge, Width=Narrow, State=Pressed
    "type=round|size=xl|state=pressed|width=narrow": __body14,
    // figma: Type=Round, Size=XLarge, Width=Narrow, State=Disabled
    "type=round|size=xl|state=disabled|width=narrow": __body87,
    // figma: Type=Round, Size=Large, Width=Wide, State=Enabled
    "type=round|size=lg|state=enabled|width=wide": __body88,
    // figma: Type=Round, Size=Large, Width=Wide, State=Hovered
    "type=round|size=lg|state=hovered|width=wide": __body89,
    // figma: Type=Round, Size=Large, Width=Wide, State=Focused
    "type=round|size=lg|state=focused|width=wide": __body90,
    // figma: Type=Round, Size=Large, Width=Wide, State=Pressed
    "type=round|size=lg|state=pressed|width=wide": __body19,
    // figma: Type=Round, Size=Large, Width=Wide, State=Disabled
    "type=round|size=lg|state=disabled|width=wide": __body91,
    // figma: Type=Round, Size=Large, Width=Default, State=Enabled
    "type=round|size=lg|state=enabled|width=default": __body92,
    // figma: Type=Round, Size=Large, Width=Default, State=Hovered
    "type=round|size=lg|state=hovered|width=default": __body93,
    // figma: Type=Round, Size=Large, Width=Default, State=Focused
    "type=round|size=lg|state=focused|width=default": __body94,
    // figma: Type=Round, Size=Large, Width=Default, State=Pressed
    "type=round|size=lg|state=pressed|width=default": __body24,
    // figma: Type=Round, Size=Large, Width=Default, State=Disabled
    "type=round|size=lg|state=disabled|width=default": __body95,
    // figma: Type=Round, Size=Large, Width=Narrow, State=Enabled
    "type=round|size=lg|state=enabled|width=narrow": __body96,
    // figma: Type=Round, Size=Large, Width=Narrow, State=Hovered
    "type=round|size=lg|state=hovered|width=narrow": __body97,
    // figma: Type=Round, Size=Large, Width=Narrow, State=Focused
    "type=round|size=lg|state=focused|width=narrow": __body98,
    // figma: Type=Round, Size=Large, Width=Narrow, State=Pressed
    "type=round|size=lg|state=pressed|width=narrow": __body29,
    // figma: Type=Round, Size=Large, Width=Narrow, State=Disabled
    "type=round|size=lg|state=disabled|width=narrow": __body99,
    // figma: Type=Round, Size=Medium, Width=Wide, State=Enabled
    "type=round|size=md|state=enabled|width=wide": __body100,
    // figma: Type=Round, Size=Medium, Width=Wide, State=Hovered
    "type=round|size=md|state=hovered|width=wide": __body101,
    // figma: Type=Round, Size=Medium, Width=Wide, State=Focused
    "type=round|size=md|state=focused|width=wide": __body102,
    // figma: Type=Round, Size=Medium, Width=Wide, State=Pressed
    "type=round|size=md|state=pressed|width=wide": __body34,
    // figma: Type=Round, Size=Medium, Width=Wide, State=Disabled
    "type=round|size=md|state=disabled|width=wide": __body103,
    // figma: Type=Round, Size=Medium, Width=Default, State=Enabled
    "type=round|size=md|state=enabled|width=default": __body104,
    // figma: Type=Round, Size=Medium, Width=Default, State=Hovered
    "type=round|size=md|state=hovered|width=default": __body105,
    // figma: Type=Round, Size=Medium, Width=Default, State=Focused
    "type=round|size=md|state=focused|width=default": __body106,
    // figma: Type=Round, Size=Medium, Width=Default, State=Pressed
    "type=round|size=md|state=pressed|width=default": __body39,
    // figma: Type=Round, Size=Medium, Width=Default, State=Disabled
    "type=round|size=md|state=disabled|width=default": __body107,
    // figma: Type=Round, Size=Medium, Width=Narrow, State=Enabled
    "type=round|size=md|state=enabled|width=narrow": __body108,
    // figma: Type=Round, Size=Medium, Width=Narrow, State=Hovered
    "type=round|size=md|state=hovered|width=narrow": __body109,
    // figma: Type=Round, Size=Medium, Width=Narrow, State=Focused
    "type=round|size=md|state=focused|width=narrow": __body110,
    // figma: Type=Round, Size=Medium, Width=Narrow, State=Pressed
    "type=round|size=md|state=pressed|width=narrow": __body44,
    // figma: Type=Round, Size=Medium, Width=Narrow, State=Disabled
    "type=round|size=md|state=disabled|width=narrow": __body111,
    // figma: Type=Round, Size=Small, Width=Wide, State=Enabled
    "type=round|size=sm|state=enabled|width=wide": __body112,
    // figma: Type=Round, Size=Small, Width=Wide, State=Hovered
    "type=round|size=sm|state=hovered|width=wide": __body113,
    // figma: Type=Round, Size=Small, Width=Wide, State=Focused
    "type=round|size=sm|state=focused|width=wide": __body114,
    // figma: Type=Round, Size=Small, Width=Wide, State=Pressed
    "type=round|size=sm|state=pressed|width=wide": __body49,
    // figma: Type=Round, Size=Small, Width=Wide, State=Disabled
    "type=round|size=sm|state=disabled|width=wide": __body115,
    // figma: Type=Round, Size=Small, Width=Default, State=Hovered
    "type=round|size=sm|state=hovered|width=default": __body116,
    // figma: Type=Round, Size=Small, Width=Default, State=Focused
    "type=round|size=sm|state=focused|width=default": __body117,
    // figma: Type=Round, Size=Small, Width=Default, State=Pressed
    "type=round|size=sm|state=pressed|width=default": __body54,
    // figma: Type=Round, Size=Small, Width=Default, State=Disabled
    "type=round|size=sm|state=disabled|width=default": __body118,
    // figma: Type=Round, Size=Small, Width=Narrow, State=Enabled
    "type=round|size=sm|state=enabled|width=narrow": __body119,
    // figma: Type=Round, Size=Small, Width=Narrow, State=Hovered
    "type=round|size=sm|state=hovered|width=narrow": __body120,
    // figma: Type=Round, Size=Small, Width=Narrow, State=Focused
    "type=round|size=sm|state=focused|width=narrow": __body121,
    // figma: Type=Round, Size=Small, Width=Narrow, State=Pressed
    "type=round|size=sm|state=pressed|width=narrow": __body59,
    // figma: Type=Round, Size=Small, Width=Narrow, State=Disabled
    "type=round|size=sm|state=disabled|width=narrow": __body122,
    // figma: Type=Round, Size=XSmall, Width=Wide, State=Enabled
    "type=round|size=xs|state=enabled|width=wide": __body123,
    // figma: Type=Round, Size=XSmall, Width=Wide, State=Hovered
    "type=round|size=xs|state=hovered|width=wide": __body124,
    // figma: Type=Round, Size=XSmall, Width=Wide, State=Focused
    "type=round|size=xs|state=focused|width=wide": __body125,
    // figma: Type=Round, Size=XSmall, Width=Wide, State=Pressed
    "type=round|size=xs|state=pressed|width=wide": __body64,
    // figma: Type=Round, Size=XSmall, Width=Wide, State=Disabled
    "type=round|size=xs|state=disabled|width=wide": __body126,
    // figma: Type=Round, Size=XSmall, Width=Default, State=Enabled
    "type=round|size=xs|state=enabled|width=default": __body127,
    // figma: Type=Round, Size=XSmall, Width=Default, State=Hovered
    "type=round|size=xs|state=hovered|width=default": __body128,
    // figma: Type=Round, Size=XSmall, Width=Default, State=Focused
    "type=round|size=xs|state=focused|width=default": __body129,
    // figma: Type=Round, Size=XSmall, Width=Default, State=Pressed
    "type=round|size=xs|state=pressed|width=default": __body69,
    // figma: Type=Round, Size=XSmall, Width=Default, State=Disabled
    "type=round|size=xs|state=disabled|width=default": __body130,
    // figma: Type=Round, Size=XSmall, Width=Narrow, State=Enabled
    "type=round|size=xs|state=enabled|width=narrow": __body131,
    // figma: Type=Round, Size=XSmall, Width=Narrow, State=Hovered
    "type=round|size=xs|state=hovered|width=narrow": __body132,
    // figma: Type=Round, Size=XSmall, Width=Narrow, State=Focused
    "type=round|size=xs|state=focused|width=narrow": __body133,
    // figma: Type=Round, Size=XSmall, Width=Narrow, State=Pressed
    "type=round|size=xs|state=pressed|width=narrow": __body74,
    // figma: Type=Round, Size=XSmall, Width=Narrow, State=Disabled
    "type=round|size=xs|state=disabled|width=narrow": __body134,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IconButtonStandard;
