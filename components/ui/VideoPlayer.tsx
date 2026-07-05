"use client";

import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import {
  googleDriveEmbedUrl,
  parseGoogleDriveFileId,
  youtubeEmbedUrl,
  vimeoEmbedUrl,
  publicVideoPath,
} from "@/lib/utils/media-path";
import { cn } from "@/lib/utils";

export type VideoPlayerSource = "local" | "youtube" | "vimeo" | "google-drive";

export type VideoPlayerProps = {
  source: VideoPlayerSource;
  url?: string;
  fileId?: string;
  filename?: string;
  folder?: string;
  poster?: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  minimalChrome?: boolean;
};

export function VideoPlayer({
  source,
  url,
  fileId,
  filename,
  folder = "videos/placeholders",
  poster,
  title = "Video",
  className,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  minimalChrome = false,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);

  if (source === "youtube" && url) {
    return (
      <iframe
        src={`${youtubeEmbedUrl(url)}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={cn("aspect-video w-full rounded-xl border-0 bg-black", className)}
      />
    );
  }

  if (source === "vimeo" && url) {
    return (
      <iframe
        src={vimeoEmbedUrl(url)}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className={cn("aspect-video w-full rounded-xl border-0 bg-black", className)}
      />
    );
  }

  if (source === "google-drive" && fileId) {
    const id = parseGoogleDriveFileId(fileId);
    return (
      <iframe
        src={googleDriveEmbedUrl(id)}
        title={title}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className={cn("aspect-video w-full rounded-xl border-0 bg-black", className)}
      />
    );
  }

  if (source === "local" && filename) {
    const src = publicVideoPath(folder, filename);

    if (minimalChrome) {
      return (
        <div className={cn("group relative aspect-video overflow-hidden rounded-xl bg-black", className)}>
          <video
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            muted={isMuted}
            loop={loop}
            playsInline
            className="h-full w-full object-cover"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex w-full items-center gap-3 p-4">
              <button
                type="button"
                onClick={(e) => {
                  const video = e.currentTarget.closest("div")?.previousElementSibling as HTMLVideoElement;
                  if (video) {
                    if (playing) video.pause();
                    else video.play();
                  }
                }}
                className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30 cursor-pointer"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  const video = e.currentTarget.closest("div")?.previousElementSibling as HTMLVideoElement;
                  if (video) {
                    video.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30 cursor-pointer"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <video
        controls={controls}
        playsInline
        preload="metadata"
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        className={cn("w-full rounded-xl bg-black", className)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support video playback.
      </video>
    );
  }

  return (
    <div
      className={cn(
        "flex aspect-video items-center justify-center rounded-xl border border-dashed border-border bg-section-alt text-sm text-muted",
        className
      )}
    >
      Video placeholder — update source in data file
    </div>
  );
}
