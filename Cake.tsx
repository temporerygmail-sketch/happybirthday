import { useState } from "react";

const candles = [0, 1, 2, 3, 4];

export function Cake() {
  const [blown, setBlown] = useState(false);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative w-full max-w-sm select-none">
        {/* glow */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-40 w-56 rounded-full blur-2xl"
          style={{
            background: "color-mix(in oklab, var(--warm) 38%, transparent)",
            opacity: blown ? 0 : 1,
            transition: "opacity 1.2s var(--ease-cine)",
          }}
        />

        {/* candles */}
        <div className="relative z-10 mx-auto flex items-end justify-center gap-5 pb-1">
          {candles.map((c) => (
            <div key={c} className="relative flex flex-col items-center">
              {/* smoke */}
              {blown && (
                <span
                  className="absolute -top-6 h-5 w-2 rounded-full"
                  style={{
                    background: "color-mix(in oklab, var(--foreground) 35%, transparent)",
                    filter: "blur(4px)",
                    animation: `smoke-rise 2.6s ${c * 0.12}s ease-out forwards`,
                  }}
                />
              )}
              {/* flame */}
              <span
                className="mb-1 block h-4 w-[9px] rounded-[50%_50%_45%_45%]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 70%, oklch(0.98 0.09 90), oklch(0.82 0.16 65) 60%, transparent 75%)",
                  boxShadow: "0 0 14px 4px color-mix(in oklab, var(--warm) 55%, transparent)",
                  opacity: blown ? 0 : 1,
                  transform: blown ? "scaleY(0.2)" : "none",
                  transformOrigin: "bottom",
                  transition: "opacity 420ms var(--ease-cine), transform 420ms var(--ease-cine)",
                  animation: blown ? undefined : `flicker ${1.6 + c * 0.2}s ease-in-out infinite`,
                }}
              />
              <span
                className="block h-9 w-[7px] rounded-sm"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--paper) 92%, transparent), color-mix(in oklab, var(--paper) 62%, var(--background)))",
                }}
              />
            </div>
          ))}
        </div>

        {/* cake */}
        <div className="relative z-0">
          <div
            className="mx-auto h-8 w-[88%] rounded-t-[10px]"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.94 0.02 90), oklch(0.88 0.03 85) 55%, oklch(0.8 0.04 80))",
              boxShadow: "inset 0 -6px 12px -6px oklch(0 0 0 / 35%)",
            }}
          />
          {/* frosting edge */}
          <div
            className="mx-auto -mt-px h-3 w-[88%] rounded-b-[14px]"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.88 0.03 85), oklch(0.82 0.035 82))",
            }}
          />
          <div
            className="mx-auto h-16 w-[95%] rounded-b-2xl rounded-t-sm"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.5 0.07 45), oklch(0.38 0.06 40) 60%, oklch(0.3 0.05 38))",
              boxShadow: "var(--shadow-soft)",
            }}
          />
          <div
            className="mx-auto h-2 w-[102%] rounded-[50%]"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--paper) 55%, transparent), transparent)",
            }}
          />
          <div
            className="mx-auto h-3 w-full rounded-full"
            style={{
              background: "color-mix(in oklab, var(--foreground) 12%, transparent)",
              filter: "blur(2px)",
            }}
          />
        </div>
      </div>

      <div className="mt-10 min-h-[4rem] text-center">
        {blown ? (
          <p
            className="text-display text-2xl sm:text-3xl"
            style={{ animation: "none", opacity: 1 }}
          >
            Wish made. ✨
          </p>
        ) : (
          <button className="btn-cine" onClick={() => setBlown(true)}>
            Blow the candles 🕯️
          </button>
        )}
      </div>
    </div>
  );
}
