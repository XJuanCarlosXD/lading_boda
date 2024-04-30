import React from "react";
import Tilty from "react-tilty";

const Invita = (props) => {
  return (
    <div className="h-screen p-4 text-center text-lg flex flex-col gap-5 items-center justify-center relative overflow-hidden">
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="rotate-45 absolute -top-10 w-11/12"
      />
      <div className="relative z-10 bg-pink-500/20 rounded-lg p-2">
        <h4 className="font-semibold text-xl italic">
          Por eso, el hombre dejará a su padre y a su madre y se unirá a su
          mujer, y los dos serán como una sola carne.
        </h4>
        <p className="text-end font-bold">Efesios 4:2 </p>
      </div>
      <Tilty perspective={3000}>
        <img src="/img/faviicon.png" className="rounded-full" alt="logo.png" />
      </Tilty>
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -bottom-10 ml-5 w-11/12"
        style={{ transform: "rotate(-135deg)" }}
      />
    </div>
  );
};

export default Invita;
