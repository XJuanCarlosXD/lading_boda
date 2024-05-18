import React from "react";

const Famili = (props) => {
  return (
    <div className="h-screen bg-pink_custom flex flex-col justify-center items-center relative -top-12">
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="rotate-45 absolute -top-10 w-11/12"
      />
      <div className="font-IMFELL flex flex-col justify-center items-center gap-4 w-full p-4 pt-48 text-lg">
        <div className="text-center">
          <p className="uppercase text-md opacity-55 im-fell-english-sc-regular">
            Las Familias
          </p>
          <h2 className="font-medium text-xl italic im-fell-english-sc-regular mb-8">
            Martínez Tejeda & Abreu Paulino{" "}
          </h2>
        </div>
        <p className="text-center text-braun font-light im-fell-english-sc-regular text-2xl mb-8 ">
          Se complacen en invitarlos a celebrar el amor y la unión de{" "}
          <b className="underline text-gray-500 im-fell-english-sc-regular">
            María & Enmanuel
          </b>{" "}
        </p>
        <p className="text-justify text-braun font-light im-fell-english-sc-regular text-2xl">
          Este será un momento de alegría y felicidad, marcado por el inicio de
          una nueva vida juntos. Nos gustaría compartir esta ocasión tan
          especial con todos ustedes, quienes han sido parte importante de
          nuestras vidas y de esta historia de amor.
        </p>
        <img
          src="/img/anillos.gif"
          className="w-6/12 relative -top-6"
          alt="anillos.gif"
        />
      </div>
    </div>
  );
};

export default Famili;
