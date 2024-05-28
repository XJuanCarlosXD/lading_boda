import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tilty from "react-tilty";

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
      <div className="flex flex-col justify-center items-center w-screen h-screen fixed top-0 z-50">
        <div className={`bg-white w-full h-full ${active && "slide-up"} `}>
          <img
            src="https://imgs.search.brave.com/QIjh6Lv95UPnWP16oEnACtX30Y6eYMdo65SaztgpBmI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dGV4dHVyYS1wYXBl/bC1hcnJ1Z2Fkby1i/bGFuY29fNTM4NzYt/OTU5MTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
            alt="mantel"
            className="w-full h-full"
          />
        </div>
        <div
          className={`absolute flex flex-col gap-4 justify-center items-center w-full ${
            active && "scale-0 delay-150 duration-1000 transition-all"
          }`}
        >
          <div className="relative flex flex-col gap-4 justify-center items-center w-full h-96 px-8">
            <div
              className="relative border-8 border-yellow-600 w-full h-full flex flex-col gap-4 rounded-lg justify-end items-center p-2 shadow-2xl shadow-pink-300 bg-white/35 cursor-pointer z-40"
              onClick={() => {
                setActive(true);
              }}
            >
              <div className="absolute -top-20">
                <div className="h-52 w-52 rotate-45 rounded-md border-b-8 border-r-8 border-solid border-yellow-600"></div>
              </div>
              <div className="animate-bounce w-full">
                <Tilty perspective={3000} className="pl-4 -translate-y-0">
                  <img
                    src="/images/logo1.png"
                    className="rounded-full w-36 h-36"
                    alt="logo.png"
                  />
                </Tilty>{" "}
              </div>
              <ul className="absolute bottom-0 right-3 font-bold-merienda capitalize text-xl text-yellow-600">
                <li>{peop1}</li>
                <li>{peop2}</li>
              </ul>
              {imagesLoaded === false && (
                <i
                  className={`fas fa-spinner animate-spin text-yellow-600 text-4xl absolute top-28`}
                ></i>
              )}
            </div>
            <div className="flex justify-center flex-col items-center absolute -bottom-20 z-40">
              <i className="fas fa-arrow-up text-2xl text-yellow-600"></i>
              <h2 className="uppercase text-yellow-600 text-xl font-black im-fell-english-sc-bold">
                PULSA PARA CONTINUAR
              </h2>
            </div>
          </div>
        </div>
        <div className={`bg-white h-full w-screen  ${active && "slide-donw"}`}>
          <img
            src="https://imgs.search.brave.com/QIjh6Lv95UPnWP16oEnACtX30Y6eYMdo65SaztgpBmI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dGV4dHVyYS1wYXBl/bC1hcnJ1Z2Fkby1i/bGFuY29fNTM4NzYt/OTU5MTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
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
