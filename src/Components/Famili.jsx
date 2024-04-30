import React from "react";

const Famili = (props) => {
  return (
    <div className="h-screen bg-pink_custom flex flex-col justify-center items-center relative overflow-hidden">
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="rotate-45 absolute -top-10 w-11/12"
      />
      <div className="font-IMFELL flex flex-col justify-center items-center gap-4 w-full p-4 text-lg">
        <div className="text-center">
          <p className="uppercase text-md opacity-55">Las Familias</p>
          <h2 className="font-medium text-2xl italic">
            Martínez Tejeda & Abreu Paulino{" "}
          </h2>
        </div>
        <p className="text-center text-braun font-light font-cursive">
          Se complacen en invitarlos a celebrar el amor y la unión de{" "}
          <b className="underline text-gray-500">María & Enmanuel</b> en el día
          de su boda.
        </p>
        <p className="text-justify text-braun font-light font-cursive">
          María & Enmanuel en el día de su boda. Este será un momento de alegría
          y felicidad, marcado por el inicio de una nueva vida juntos. Nos
          gustaría compartir esta ocasión tan especial con todos ustedes,
          quienes han sido parte importante de nuestras vidas y de esta historia
          de amor.
        </p>
        <img src="/img/anillos.gif" className="w-8/12" alt="anillos.gif" />
      </div>

      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -bottom-10 w-11/12"
        style={{ transform: "rotate(-135deg)" }}
      />
    </div>
  );
};

export default Famili;
