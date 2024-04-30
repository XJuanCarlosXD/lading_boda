import React from "react";

const Save = (props) => {
  return (
    <div className="h-screen flex w-full relative overflow-hidden">
      <div>
        <img
          src="/images/mariae.jpg"
          className="w-full h-screen absolute -z-10"
          alt="mariae.jpg"
          style={{ borderTopRightRadius: "10rem" }}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center p-2">
        <img src="/img/paloma.svg" alt="paloma.svg" />
        <h2 className="text-6xl font-bold text-amber_re brightness-150">
          SAVE <b className="text-2xl">THE</b> DATE
        </h2>
        <p className="text-4xl font-semibold">6 de julio 2024</p>
      </div>
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute rotate-180 -bottom-10 -right-10 w-11/12"
      />
    </div>
  );
};

export default Save;
