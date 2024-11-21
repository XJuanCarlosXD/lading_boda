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
    <div className="flex flex-col gap-4 h-full relative w-screen">
      <img
        src="https://appbot.nyc3.digitaloceanspaces.com/Isaura/isaura1.jpg"
        className="h-full w-screen"
        alt="index.png"
      />
      {/* <img
        src="https://imgs.search.brave.com/bYVnlGbQfkbhRLewa9lTPwsWDVj1keq5AIyzVp72954/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL3ByZW1p/dW0vdGh1bWIvZ2xv/Ym9zLWNvbi1yZWdh/bG9zLWRlLWN1bXBs/ZWFub3MtMTA5ODEw/NTgtODg0MTY3Mi5w/bmc_Zj13ZWJw"
        alt="flower.png"
        className="absolute -left-5 -bottom-5 -rotate-90 w-44"
      /> */}
      <div className="w-4/12 absolute -bottom-6 z-20 right-1">
        <video controls autoPlay loop muted ref={videoRef}>
          <source
            src={
              "https://appbot.nyc3.digitaloceanspaces.com/Isaura/cumple%20song.mp3"
            }
            type="audio/mp3"
          />
        </video>
      </div>
    </div>
  );
};

export default Index;
