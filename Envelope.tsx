import { useState } from "react";

const letter = [
  "Dear Ismail,",
  "I don't really know what to write here without making it awkward.",
  "So I'll keep it simple.",
  "I hope you have a really good birthday.",
  "I hope the next year brings you good people, good opportunities, peaceful days, and plenty of reasons to smile.",
  "Whatever you're working towards, I hope you get a little closer to it this year.",
  "And yeah...",
  "Don't forget to enjoy life along the way.",
];

export function Envelope() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-xl">
      <div className="relative mx-auto w-full">
        {/* envelope body */}
        <div
          className="relative mx-auto w-full overflow-hidden rounded-xl"
          style={{
            aspectRatio: open ? "auto" : "3 / 2",
            background: "color-mix(in oklab, var(--paper) 92%, var(--background))",
            boxShadow: "var(--shadow-soft)",
            transition: "aspect-ratio 900ms var(--ease-cine)",
          }}
        >
          {/* flap */}
          <div
            className="absolute inset-x-0 top-0 z-20 origin-top"
            style={{
              height: "48%",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: "color-mix(in oklab, var(--paper) 78%, var(--warm))",
              transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
              transformStyle: "preserve-3d",
              transition: "transform 1s var(--ease-cine)",
              opacity: open ? 0 : 1,
            }}
          />

          {!open && (
            <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
              <button className="btn-cine" onClick={() => setOpen(true)}>
                Open it
              </button>
            </div>
          )}

          {/* letter */}
          <div
            className="relative z-30 px-6 py-8 sm:px-10 sm:py-12"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 900ms 350ms var(--ease-cine), transform 900ms 350ms var(--ease-cine)",
              pointerEvents: open ? "auto" : "none",
              color: "var(--paper-ink)",
              background:
                "repeating-linear-gradient(to bottom, transparent, transparent 33px, color-mix(in oklab, var(--paper-ink) 8%, transparent) 34px)",
            }}
          >
            <div className="space-y-4" style={{ fontFamily: "var(--font-hand)" }}>
              {letter.map((line, i) => (
                <p
                  key={i}
                  className="text-[1.35rem] leading-[34px] sm:text-2xl"
                  style={{ opacity: 0.92 }}
                >
                  {line}
                </p>
              ))}
              <p className="pt-2 text-right text-[1.45rem] sm:text-2xl">— Ayzal Mahnoor</p>
            </div>
          </div>
        </div>
      </div>

      {!open && (
        <p className="mt-5 text-center text-sm tracking-wide text-muted-foreground">
          (tap the envelope button)
        </p>
      )}
    </div>
  );
}
