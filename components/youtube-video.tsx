'use client';

import React from 'react';

export default function YouTubeVideo() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/bTQg2PK3AjA"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
