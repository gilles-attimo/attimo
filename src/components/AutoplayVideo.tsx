import { CSSProperties, useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  className?: string;
  poster?: string;
  style?: CSSProperties;
}

const forcePlay = (video: HTMLVideoElement | null) => {
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.autoplay = true;
  video.loop = true;
  video.controls = false;
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "true");

  const playPromise = video.play();
  if (playPromise) {
    playPromise.catch(() => {});
  }
};

export const AutoplayVideo = ({ src, className, poster, style }: AutoplayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => forcePlay(video);
    const handleLoadedData = () => forcePlay(video);
    const handlePageShow = () => forcePlay(video);
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        forcePlay(video);
      }
    };

    forcePlay(video);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);
    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      className={className}
      poster={poster}
      style={{ pointerEvents: "none", ...style }}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
