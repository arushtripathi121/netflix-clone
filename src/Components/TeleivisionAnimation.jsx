import React from 'react';

const TeleivisionAnimation = () => {
  return (
    <div className="w-full">
      <video
        className="w-full h-auto"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
      </video>
    </div>
  );
};

export default TeleivisionAnimation;

 