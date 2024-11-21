/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Contact = (props) => {
  return (
    <div
      className={`h-full bg-pink_custom relative w-full flex flex-col justify-start items-start`}
    >
      <img
        src="/img/carton.png"
        alt="carton.png"
        className="h-full absolute -left-40 max-w-none z-20"
        style={{ width: "37rem" }}
      />
      <img
        src="https://imgs.search.brave.com/QCdYzD3EJCr4f-Qq__kBJ2GDr0-0rkq4rdCg2ziKxDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL3ByZW1p/dW0vdGh1bWIvbWFu/b2pvLWRlLWdsb2Jv/cy1kZS1jdW1wbGVh/bm9zLTExOTIwODY3/LTk3MzM0OTQucG5n/P2Y9d2VicA"
        alt="flower.png"
        className="absolute -bottom-28 -left-10 -rotate-90 w-11/12 z-10"
      />
      <img
        src="https://imgs.search.brave.com/QCdYzD3EJCr4f-Qq__kBJ2GDr0-0rkq4rdCg2ziKxDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL3ByZW1p/dW0vdGh1bWIvbWFu/b2pvLWRlLWdsb2Jv/cy1kZS1jdW1wbGVh/bm9zLTExOTIwODY3/LTk3MzM0OTQucG5n/P2Y9d2VicA"
        alt="flower.png"
        className="absolute -bottom-10 right-0 rotate-180 w-11/12"
      />

      <img
        src="https://imgs.search.brave.com/QCdYzD3EJCr4f-Qq__kBJ2GDr0-0rkq4rdCg2ziKxDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL3ByZW1p/dW0vdGh1bWIvbWFu/b2pvLWRlLWdsb2Jv/cy1kZS1jdW1wbGVh/bm9zLTExOTIwODY3/LTk3MzM0OTQucG5n/P2Y9d2VicA"
        alt="flower.png"
        className="absolute -top-36 -left-10 w-11/12"
      />
      <div className="relative z-20 py-28 px-8 w-full flex justify-center items-center flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-8xl text-pink_custom font-extrabold text-center">
            Lugar
          </h2>
          <p className="text-4xl italic font-cursive text-nowrap font-bold im-fell-english-sc-regular">
            Frindays Acrópolis
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3100375535737!2d-69.9417367886844!3d18.469610470655333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e52f8187cd%3A0x635ab0b0c6305162!2sAcr%C3%B3polis%20Business%20Mall!5e0!3m2!1ses-419!2sdo!4v1732214469865!5m2!1ses-419!2sdo"
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
            <p className="text-3xl italic font-cursive font-bold text-center im-fell-english-sc-regular">
              Jueves 19 de Diciembre{" "}
              <b className="text-white font-normal">8:00</b> pm (
              <b className="text-white font-normal">puntual</b>)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
