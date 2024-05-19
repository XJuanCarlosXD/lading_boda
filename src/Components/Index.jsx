import React, { useEffect, useRef } from "react";

const Index = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col gap-4 relative w-screen">
      <img
        src="/images/index.png"
        className="h-screen w-screen"
        alt="index.png"
      />
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -left-5 -bottom-10 -rotate-90 w-80"
      />
      <div className="w-4/12 absolute -bottom-6 z-20 right-1">
        <video controls autoPlay loop muted ref={videoRef}>
          <source src={"/media/song.mp3"} type="audio/mp3" />
        </video>
      </div>
    </div>
  );
};

export default Index;
