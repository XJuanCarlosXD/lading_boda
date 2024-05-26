import React from "react";

const Save = (props) => {
  return (
    <div className="h-screen flex w-full relative overflow-hidden">
      <div>
        <img
          src="/images/boda-2.jpg"
          className="w-full h-screen absolute brightness-75 -z-10"
          alt="mariae.jpg"
          style={{ borderTopRightRadius: "10rem" }}
        />
      </div>
      <div className="flex flex-col gap-0  justify-start items-center p-2">
        <h2
          className="font-bold mt-10 text-yellow-300 brightness-150"
          style={{ fontSize: "3.4rem" }}
        >
          SAVE <b className="text-2xl">THE</b> DATE
        </h2>
        <p className="text-4xl font-semibold text-pink_custom">
          6 de julio 2024
        </p>
      </div>
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute rotate-180 -bottom-44 -right-10 w-11/12"
      />
    </div>
  );
};

export default Save;
