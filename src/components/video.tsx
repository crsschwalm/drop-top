import React from 'react';
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="relative h-0 pb-fluid-video">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
export default Video;
