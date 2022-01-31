import React, { useRef, useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  

  function handleVideo(){
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if (!playVideo) {
     vidRef.current.play()
   } else {
     vidRef.current.pause()
   }
  }
      
    

console.log(playVideo);
  return (
  <div className="app__video">
    <video
      src={meal}
      alt="meal video"
      ref={vidRef}
      type="video/mp4"
      controls={false}
      muted
      loop
    />
    <div className={`app__video-overlay flex__center`} style={playVideo ? {background: "none"}: {background: "rgba(0, 0, 0, .65)"}}>
      <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
      {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
      </div>
    </div>
  </div>
)
};

export default Intro;
