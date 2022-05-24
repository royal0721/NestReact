import React from "react";
import Video from './component/Video'

function App() {
  const play＿details = {
    fill: true,
    fluid: true,
    autoplay: true,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: "https://stream.chinasuntv.com/680k/mid_video_index.m3u8",
        type: "application/x-mpegURL"
      }
    ]
  };
  return (
    <div className="App">
      <Video {...play＿details} />
    </div>
  );
}
export default App;