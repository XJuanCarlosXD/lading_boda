import React from "react";
import Tilty from "react-tilty";
const Invita = () => {
  return (
    <div className="h-full text-center text-lg flex flex-col gap-5 items-center justify-center relative overflow-hidden">
      <img
        src="/img/flower.png"
        alt="flower.png"
        className=" absolute -top-24 -right-12 w-11/12"
        style={{ transform: "rotate(90deg)" }}
      />
      <div className="relative text-start w-full mt-16 mb-10">
        <h2 className="text-5xl"> ¡Nuestra Boda!</h2>
      </div>
      <div className="relative z-10 bg-pink-500/20 p-2">
        <h4 className="font-semibold text-xl italic">
          Por eso, el hombre dejará a su padre y a su madre y se unirá a su
          mujer, y los dos serán como una sola carne.
        </h4>
        <p className="text-end font-bold">Efesios 4:2 </p>
      </div>
      <Tilty perspective={3000} className="mt-10 mb-28">
        <img src="/img/faviicon.png" className="rounded-full" alt="logo.png" />
      </Tilty>
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -bottom-28 ml-5 w-11/12"
        style={{ transform: "rotate(-136deg)" }}
      />
    </div>
  );
};

export default Invita;
