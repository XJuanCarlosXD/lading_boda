import React from "react";

const Save = (props) => {
  return (
    <div
      className=" flex w-full relative overflow-hidden"
      style={{ height: "90vh" }}
    >
      <div>
        <img
          src="https://appbot.nyc3.digitaloceanspaces.com/Isaura/isaura2.jpg"
          className="w-full h-full absolute brightness-75 -z-10"
          alt="mariae.jpg"
          style={{ borderTopRightRadius: "10rem" }}
        />
      </div>
      <div className="flex flex-col gap-0 justify-start items-center p-2">
        <h2
          className="font-bold mt-10 text-braun brightness-150"
          style={{ fontSize: "3.4rem" }}
        >
          SAVE <b className="text-2xl">THE</b> DATE
        </h2>
        <p className="text-4xl font-semibold text-pink_custom">
          19 de Diciembre 2024
        </p>
      </div>
    </div>
  );
};

export default Save;
