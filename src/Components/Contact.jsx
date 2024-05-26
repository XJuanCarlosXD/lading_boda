/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

const Contact = (props) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`h-full bg-pink_custom relative w-full flex flex-col justify-start items-start ${
        active && "z-30"
      }`}
    >
      <img
        src="/img/carton.png"
        alt="carton.png"
        className="h-full absolute -left-40 max-w-none z-10"
        style={{ width: "37rem" }}
      />
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -bottom-10 -left-10 -rotate-90 w-11/12"
      />
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -bottom-10 right-0 rotate-180 w-11/12"
      />

      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -top-10 left-0 w-11/12"
      />
      <div className="relative z-20 py-28 px-8 w-full flex justify-center items-center flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-8xl text-pink_custom font-extrabold text-center">
            Lugar
          </h2>
          <p className="text-4xl italic font-cursive text-nowrap font-bold im-fell-english-sc-regular">
            Salón Vista Marina{" "}
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3297211463646!2d-69.8462615!3d18.468718199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf87ef0ca1ae39%3A0xa3a975754ff7af81!2sSalon%20De%20Eventos%20Vista%20Marina!5e0!3m2!1ses-419!2sdo!4v1714481189457!5m2!1ses-419!2sdo"
            className="w-full h-20 rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-8xl text-pink_custom font-extrabold text-center">
              Fecha
            </h2>
            <p className="text-4xl italic font-cursive font-bold text-center im-fell-english-sc-regular">
              Sábado 6 de julio <b className="text-white font-normal">5:30</b>{" "}
              pm (<b className="text-white font-normal">puntual</b>)
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            onClick={() => {
              setActive(true);
            }}
            className="left-20 bg-green_os px-8 py-2 rounded-full text-xl text-white z-20 flex justify-center items-center relative font-medium underline"
          >
            <i className="fa-solid fa-hand rotate-90 absolute -left-2 top-0.5 text-amber-500 text-4xl"></i>
            Orientaciones
          </button>
          <div className="w-full relative -left-14">
            <h2 className="text-6xl text-nowrap text-pink_custom font-extrabold">
              Dress Code
            </h2>
            <p className="text-2xl italic font-cursive font-bold text-end im-fell-english-sc-regular">
              Formal
            </p>
            <div className="flex justify-end items-end w-9/12">
              <div className="flex w-20">
                <img src="/img/mujer.png" alt="mujer.png" />
                <img src="/img/man.png" alt="man.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {active && (
        <div className="fixed w-screen h-screen top-0" style={{ zIndex: 99 }}>
          <div className="relative bg-black/75">
            <i
              className="fas fa-xmark absolute top-3 right-3 text-4xl text-red-500 z-50 cursor-pointer"
              onClick={() => {
                setActive(false);
              }}
            ></i>
            <iframe
              loading="lazy"
              className="w-screen h-screen pt-16 relative z-10"
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDvf6HBTw&#x2F;lQ5nE5la1kYzAwdsKjjFRQ&#x2F;view?embed"
              allowfullscreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
