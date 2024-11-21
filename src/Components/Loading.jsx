import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Loading = () => {
  const [active, setActive] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { peop1, peop2 } = useParams();

  useEffect(() => {
    const images = document.querySelectorAll("img");
    const imagePromises = Array.from(images).map(
      (image) =>
        new Promise((resolve, reject) => {
          if (image.complete) {
            resolve();
          } else {
            image.onload = resolve;
            image.onerror = reject;
          }
        })
    );

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, []);
  return (
    <div className={`relative ${active && "showOFF"}`}>
      <div
        className="flex flex-col justify-center items-center w-screen h-screen fixed top-0 z-50"
        onClick={() => {
          setActive(true);
        }}
      >
        <div className={`bg-white w-full h-full ${active && "slide-up"} `}>
          <img
            src="https://appbot.nyc3.digitaloceanspaces.com/Isaura/cum1.png"
            alt="mantel"
            className="w-full h-full"
          />
        </div>
        <div
          className={`absolute flex flex-col gap-4 justify-center items-center w-full ${
            active && "scale-0 delay-150 duration-1000 transition-all"
          }`}
        >
          <div
            className="relative flex flex-col gap-4 justify-center items-center w-full"
            style={{ height: "25rem" }}
          >
            <div
              className="relative w-full h-full flex flex-col gap-4 rounded-lg justify-center items-center cursor-pointer z-40"
              onClick={() => {
                setActive(true);
              }}
            >
              <ul className="absolute -bottom-24 text-end right-0 font-bold-merienda capitalize text-2xl text-white bg-pink_custom/40 p-4 rounded w-full">
                <li>{peop1}</li>
                {peop2 !== "null" && <li>{peop2}</li>}
              </ul>
              {imagesLoaded === false && (
                <i
                  className={`fas fa-spinner animate-spin text-blue-950 text-4xl absolute top-28`}
                ></i>
              )}
            </div>
            <div className="flex justify-center flex-col items-center absolute -bottom-44 z-40">
              <i className="fas fa-arrow-up text-2xl text-blue-950"></i>
              <h2 className="uppercase text-blue-950 text-xl font-black im-fell-english-sc-bold animate-bounce">
                PULSA PARA CONTINUAR
              </h2>
            </div>
          </div>
        </div>
        <div className={`bg-white h-full w-screen  ${active && "slide-donw"}`}>
          <img
            src="https://appbot.nyc3.digitaloceanspaces.com/Isaura/cum2.png"
            alt="mantel"
            className=" w-full h-full"
          />
        </div>
        <div className={`bubbles ${active && "absolute opacity-60"} z-10`}>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
