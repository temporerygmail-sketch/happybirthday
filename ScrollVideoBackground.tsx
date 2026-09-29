import { useEffect, useRef } from "react";
import videoAsset from "@/assets/birthday-bg.mp4.asset.json";
import videoWebm from "@/assets/birthday-bg.webm.asset.json";
import posterAsset from "@/assets/birthday-poster.jpg.asset.json";

/**
 * Full-screen fixed background video whose currentTime is driven by page
 * scroll progress (0% scroll -> 0s, 100% scroll -> end). Never autoplays,
 * never loops. Falls back to a static frame if scrubbing is unavailable.
 */
export function ScrollVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    let current = 0;
    let target = 0;
    let duration = 0;
    let disposed = false;

    const readProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return 0;
      return Math.min(1, Math.max(0, window.scrollY / max));
    };

    const tick = () => {
      if (disposed) return;
      target = readProgress() * duration;
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.004) current = target;
      if (duration > 0 && !Number.isNaN(current)) {
        try {
          if (Math.abs(video.currentTime - current) > 0.02) {
            video.currentTime = current;
          }
        } catch {
          /* ignore seek errors */
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
      video.pause();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    if (video.readyState >= 1) start();
    video.addEventListener("loadedmetadata", start);

    // iOS needs a play()/pause() cycle before it will honour seeks.
    const unlock = () => {
      video
        .play()
        .then(() => video.pause())
        .catch(() => {});
    };
    video.addEventListener("loadeddata", unlock, { once: true });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", start);
      video.removeEventListener("loadeddata", unlock);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster={posterAsset.url}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
      >
        <source src={videoAsset.url} type="video/mp4" />
        <source src={videoWebm.url} type="video/webm" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--background) 72%, transparent), color-mix(in oklab, var(--background) 55%, transparent) 45%, color-mix(in oklab, var(--background) 80%, transparent))",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 30%, transparent 35%, color-mix(in oklab, var(--background) 70%, transparent) 100%)",
        }}
      />
    </div>
  );
}
