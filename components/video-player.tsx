'use client';

import { useEffect, useRef } from 'react';

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, className, ...props }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when it's in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(error => {
              console.error('Error attempting to play video:', error);
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is in view
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={`w-full h-auto object-cover ${className || ''}`}
      playsInline
      disablePictureInPicture
      {...props}
    />
  );
}
