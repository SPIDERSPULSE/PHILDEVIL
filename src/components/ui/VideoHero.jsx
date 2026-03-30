import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const VideoHero = ({ videoSrc, children }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.6)' }}
      >
        <source src={videoSrc || "https://assets.mixkit.co/videos/preview/mixkit-digital-technology-animation-1261-large.mp4"} type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      
      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        <button
          onClick={togglePlay}
          className="p-3 bg-black/50 backdrop-blur rounded-full hover:bg-black/70 transition"
        >
          {isPlaying ? <FaPause className="text-white" /> : <FaPlay className="text-white" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-3 bg-black/50 backdrop-blur rounded-full hover:bg-black/70 transition"
        >
          {isMuted ? <FaVolumeMute className="text-white" /> : <FaVolumeUp className="text-white" />}
        </button>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default VideoHero;