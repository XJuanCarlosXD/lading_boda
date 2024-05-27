import React, { useEffect, useState } from "react";
import Tilty from "react-tilty";

const Loading = () => {
  const [active, setActive] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
        <div
          className={`bg-white w-full h-full ${
            active && "slide-up"
          } w-full h-full flex flex-col gap-4 justify-end items-center overflow-hidden relative`}
        >
          <img
            src="https://imgs.search.brave.com/QIjh6Lv95UPnWP16oEnACtX30Y6eYMdo65SaztgpBmI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dGV4dHVyYS1wYXBl/bC1hcnJ1Z2Fkby1i/bGFuY29fNTM4NzYt/OTU5MTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
            alt="mantel"
            className=" w-full h-full"
          />
          <div className="border-8 absolute rounded-lg border-yellow-600 h-full -bottom-64 w-10/12"></div>
        </div>
        <div
          className={`absolute flex flex-col gap-4 justify-center items-center w-full ${
            active && "slide-up transition-all"
          }`}
        >
          <div className="relative flex flex-col gap-4 justify-center items-center w-full  h-96 px-8">
            <div className="w-full h-full flex flex-col gap-4 rounded-lg justify-end items-center p-2">
              <div
                className={`absolute -top-20 z-20 ${
                  active && "-top-72 transition-all duration-700"
                }`}
              >
                <div className="h-52 w-52 rotate-45 rounded-md border-b-8 border-r-8 border-solid border-yellow-600"></div>
              </div>
              {imagesLoaded === false && (
                <i
                  className={`fas fa-spinner animate-spin text-yellow-400 text-4xl absolute top-28`}
                ></i>
              )}
            </div>
          </div>
        </div>
        <div
          className={`bg-white h-full w-screen  ${
            active && "slide-donw"
          }  w-full h-full flex flex-col gap-4 justify-start items-center overflow-hidden relative`}
        >
          {" "}
          <img
            src="https://imgs.search.brave.com/QIjh6Lv95UPnWP16oEnACtX30Y6eYMdo65SaztgpBmI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dGV4dHVyYS1wYXBl/bC1hcnJ1Z2Fkby1i/bGFuY29fNTM4NzYt/OTU5MTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
            alt="mantel"
            className="w-full h-full"
          />
          <div
            className={`border-8 absolute rounded-lg border-yellow-600 h-full -top-60 w-10/12 ${
              active && "slide-donw"
            }`}
          ></div>
          <div
            className={`${active && "slide-donw"} animate-bounce fixed z-30`}
            onClick={() => {
              setActive(true);
            }}
          >
            <Tilty
              perspective={3000}
              className={`pl-4 -translate-y-2 ${active && "slide-donw"}`}
            >
              <img
                src="/images/logo1.png"
                className="rounded-full w-full"
                alt="logo.png"
              />
            </Tilty>
          </div>
          <div
            className={`flex justify-center flex-col items-center absolute bottom-36 ${
              active && "slide-donw"
            }`}
          >
            <i className="fas fa-arrow-up text-2xl text-pink-400"></i>
            <h2 className="uppercase text-pink-400 text-xl font-black im-fell-english-sc-bold">
              PULSA PARA CONTINUAR
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
