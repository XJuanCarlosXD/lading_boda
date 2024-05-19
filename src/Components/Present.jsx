import React, { useState } from "react";
import toast from "react-hot-toast";

const Present = () => {
  const [active, setActive] = useState(null);
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  };

  return (
    <div className="h-full text-center text-lg flex flex-col gap-5 items-center justify-start relative overflow-hidden bg-white py-10 z-10">
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -left-36 w-full -z-10"
        style={{ transform: "rotate(-30deg)" }}
      />
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -right-36 -rotate-90 w-11/12 -z-10"
        style={{ transform: "rotate(135deg)" }}
      />
      <h2 className="font-bold-merienda text-4xl">Detalles y Regalos</h2>
      <p className="im-fell-english-sc-regular text-justify p-4 bg-pink_custom/60">
        Estamos emocionados de celebrar este momento tan especial junto a todos
        ustedes. <br /> <br />
        Para aquellos que deseen honrarnos con un regalo, les agradecemos de
        antemano su generosidad. <br /> Si desean contribuir a construir los
        cimientos de nuestro nuevo hogar, hemos registrado algunas opciones que
        serían de gran ayuda para comenzar esta nueva etapa juntos.
      </p>
      <h2 className="font-bold-merienda text-4xl">Transferencias Bancarias</h2>
      <div className="grid grid-cols-2 place-items-center w-full p-4">
        <button type="button">
          <img
            src="https://imgs.search.brave.com/6RRKjRRPRwluAcDY1Ynu9wwKJtQhEtFu9oQ0Bl_Ao8Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zYi5n/b2IuZG8vbWVkaWEv/ZGxnaGMyMzMvYmFu/cmVzZXJ2YXMuc3Zn.svg"
            alt="banreservas.svg"
            className={`w-44 h-14 py-2 px-4 rounded-full outline  outline-blue-950 ${
              active && active === true ? "outline-4 bg-blue-100" : "outline-2"
            } transition-all`}
            onClick={() => {
              setActive(true);
              toast.success("Cuenta BANRESERVA copiada");
              copyToClipboard("9606628900");
            }}
          />
        </button>
        <button type="button">
          <img
            src="https://imgs.search.brave.com/eeawTpYiu6lKRBhnzPGCQD2Ob72G20uHqPzJhMMqi6M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zYi5n/b2IuZG8vbWVkaWEv/bGRkcGNmMjMvYmhk/LnN2Zw.svg"
            alt="bhd.svg"
            className={`w-44 h-14 py-2 px-4 rounded-full outline outline-green-600 ${
              active === false ? "outline-4 bg-green-100" : "outline-2"
            } transition-all`}
            onClick={() => {
              setActive(false);
              toast.success("Cuenta BHD copiada");
              copyToClipboard("21546640023");
            }}
          />
        </button>
      </div>
      {active && active === true ? (
        <ul className="im-fell-english-sc-regular text-start w-full">
          <li>
            <b>Cuenta:</b> 9606628900
          </li>
          <li>
            <b>Tipo:</b> Ahorro
          </li>
          <li>
            <b>Cédula:</b> 402-2519283-6
          </li>
          <li>
            <b>Titular:</b> María A. Abreu
          </li>
        </ul>
      ) : (
        active === false && (
          <ul className="im-fell-english-sc-regular text-end w-full">
            <li>
              <b>Cuenta:</b> 21546640023
            </li>
            <li>
              <b>Tipo:</b> Ahorro
            </li>
            <li>
              <b>Cédula:</b> 402-2660649-5
            </li>
            <li>
              <b>Titular:</b> Enmanuel Martínez
            </li>
          </ul>
        )
      )}
      <h2 className="font-bold-merienda text-4xl">Lista de Regalos</h2>
      <button
        type="button"
        className="bg-green_os px-8 py-2 rounded-full text-xl text-white flex justify-center items-center relative font-medium underline"
      >
        <i className="fa-solid fa-hand rotate-90 absolute -left-2 top-0.5 text-amber-500 text-4xl"></i>
        Ver Detalles
      </button>
    </div>
  );
};

export default Present;
