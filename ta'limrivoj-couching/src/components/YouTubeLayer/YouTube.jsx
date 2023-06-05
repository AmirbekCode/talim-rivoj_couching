import React from 'react';
import '../YouTubeLayer/youtube.css';

function YouTube() {
  const videoId = 'ZdOMo0z4xiI';
  const videoUrl = 'https://www.youtube.com/watch?v=XJi1bvCk-Jk';

  return (
    <div className="youtube-player">
      <h1 className="title">1 kun tog'da</h1>
      <div className="player">
        <iframe
          width={560}
          height={316}
          src={videoUrl}
          title="Youtube player"
        ></iframe>
      </div>
    </div>
  );
}

export default YouTube;
