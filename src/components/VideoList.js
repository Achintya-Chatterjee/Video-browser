import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const rendered = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div>{rendered}</div>;
};
export default VideoList;
