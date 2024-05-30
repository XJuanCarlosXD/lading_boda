import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getDatas } from "../utils/controller";
import { useState } from "react";

const Form = ({ onClick }) => {
  const { peop1, peop2, tel } = useParams();
  const [checkm, setCheckm] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      confirm: undefined,
      asistiran: peop2 === "null" ? [peop1] : [peop1, peop2],
    },
  });

  const onSubmit = async (data) => {
    const datas = {
      confirma: data.confirm,
      confirm: checkm,
      cancion: data.cancion,
      description: data.description,
      tel: tel,
    };
    const api = new getDatas();
    await api.handleOnAddDocc(datas, () => {}, "Invitacion Confirmada");
    reset();
    onClick();
  };
  return (
    <div className="h-full overflow-hidden  relative w-full flex flex-col justify-start items-start">
      <img
        src="/img/carton.png"
        alt="carton.png"
        className="h-full absolute -left-40 max-w-none z-10"
        style={{ width: "37rem" }}
      />
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -bottom-10 left-0 -rotate-90 w-11/12"
      />
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -bottom-10 right-0 rotate-180 w-11/12"
      />

      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -top-10 -left-10 w-11/12"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-20 py-28 pb-10 px-6 w-full flex justify-center items-start flex-col gap-4"
      >
        <h2 className="text-5xl text-center text-pink_custom font-extrabold">
          Confirmación Asistencia
        </h2>
        <div className="flex flex-col w-full gap-4">
          <div className="w-full">
            <input
              type="text"
              {...register("confirm", { required: true })}
              hidden
            />
            <label
              htmlFor="asistir"
              className="text-4xl text-white font-semibold"
            >
              ¿Podrás asistir?
            </label>
            <div
              className={`${
                errors.confirm && "outline outline-4 outline-red-500"
              } mt-2 bg-green_os text-xl font-medium text-pink_custom rounded-full flex justify-center items-center transition-all w-full`}
            >
              <button
                type="button"
                className={`${
                  watch("confirm") ? "bg-pink_custom text-black" : ""
                } rounded-l-full w-full  py-2 px-4`}
                onClick={() => {
                  setValue("confirm", true);
                }}
              >
                Sí
              </button>
              {!watch("confirm") === true && (
                <div className="h-5 bg-white w-0.5" />
              )}
              <button
                type="button"
                className={`${
                  watch("confirm") === false ? "bg-pink_custom text-black" : ""
                } rounded-r-full w-full  py-2 px-4`}
                onClick={() => {
                  setValue("confirm", false);
                }}
              >
                No
              </button>
            </div>
            \
            {errors.confirm && (
              <p className="text-black text-xl font-serif font-black">
                ⚠ Por favor, confirma Asistencia.
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="asistir"
              className="text-2xl text-white font-semibold"
            >
              ¿Quiénes asistirán?
            </label>
            {watch("asistiran").map((row, index) => (
              <div
                className="flex items-center ps-4 border border-gray-200 rounded bg-green_os"
                key={index}
              >
                <input
                  id={`check-${index}`}
                  type="checkbox"
                  value=""
                  {...register(`asisti${index}`)}
                  name="bordered-checkbox"
                  className="w-4 h-4 text-white bg-green_os border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                  onClick={() => {
                    const currentValue = watch(`asisti${index}`);
                    const updatedValue = !currentValue;

                    setCheckm((prev) => {
                      const updatedCheckm = prev.map((item) =>
                        item.asistira === row
                          ? { ...item, confir: updatedValue }
                          : item
                      );

                      if (!prev.some((item) => item.asistira === row)) {
                        updatedCheckm.push({
                          asistira: row,
                          confir: updatedValue,
                        });
                      }

                      return updatedCheckm;
                    });

                    setValue(`asisti${index}`, updatedValue, {
                      shouldValidate: false,
                    });
                  }}
                />
                <label
                  htmlFor={`check-${index}`}
                  className="w-full py-4 ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
                >
                  {row}
                </label>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="asistir"
              className="text-2xl text-white font-semibold"
            >
              Sugerir canción
            </label>
            <textarea
              className="outline-none w-full py-3 rounded-lg bg-green_os/70 border placeholder:text-pink_custom placeholder:text-xl placeholder:translate-y-0.5 text-md text-pink_custom pl-4"
              placeholder="¿Cuál canción te gustaría escuchar o bailar en nuestra boda?"
              rows={4}
              {...register("cancion")}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="asistir"
              className="text-2xl text-white font-semibold"
            >
              Comentarios o preguntas
            </label>
            <textarea
              className="outline-none w-full py-3 rounded-lg bg-green_os/70 border placeholder:text-pink_custom placeholder:text-xl placeholder:translate-y-0.5 text-md text-pink_custom pl-4"
              placeholder="Si tienes algo para comentar lo puedes hacer aqui"
              rows={4}
              {...register("description")}
            />
          </div>

          <button
            type="submit"
            className="bg-pink_custom hover:bg-green_os hover:text-white text-2xl font-semibold rounded-full py-2"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
