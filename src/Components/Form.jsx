import React from "react";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { confirm: undefined } });

  const onSubmit = (data) => {
    console.log("datas", data);
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
        className="absolute -top-10 left-0 w-11/12"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-20 py-28 pb-10 px-6 w-full flex justify-center items-start flex-col gap-4"
      >
        <h2 className="text-3xl text-center text-pink_custom font-extrabold capitalize">
          Confirmación de asistencia
        </h2>
        <p className="text-justify font-cursive">
          Estamos emocionados de celebrar este día con ustedes y queremos
          asegurarnos de que todo esté listo para recibirte. <br /> Por favor,
          háznoslo saber lo antes posible para que podamos hacer los arreglos
          necesarios. Si necesitas más detalles o tienes alguna pregunta, no
          dudes en contactarnos. <br /> ¡Esperamos verte pronto y compartir este
          momento especial juntos!
        </p>
        <div className="flex flex-col w-full gap-4">
          <div className="w-full">
            <input
              type="text"
              {...register("confirm", { required: true })}
              hidden
            />
            <label
              htmlFor="asistir"
              className="text-4xl text-pink_custom font-semibold"
            >
              ¿Podrás asistir?
            </label>
            <div className="mt-2 bg-green_os text-xl font-medium text-pink_custom rounded-full flex justify-center items-center transition-all w-full">
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
            {errors.asistir && (
              <p className="text-pink_custom">
                Por favor, selecciona una opción.
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="asistir"
              className="text-2xl text-pink_custom font-semibold"
            >
              ¿Quiénes asistirán?
            </label>
            <textarea
              className="outline-none w-full py-3 rounded-lg bg-green_os/70 border placeholder:text-pink_custom placeholder:text-xl placeholder:translate-y-0.5 text-md text-pink_custom pl-4"
              placeholder="¿Quiénes asistirán?"
              rows={4}
              {...register("asistiran", { required: true })}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="asistir"
              className="text-2xl text-pink_custom font-semibold"
            >
              Sugerir canción
            </label>
            <textarea
              className="outline-none w-full py-3 rounded-lg bg-green_os/70 border placeholder:text-pink_custom placeholder:text-xl placeholder:translate-y-0.5 text-md text-pink_custom pl-4"
              placeholder="¿Cuál canción te gustaría escuchar o bailar en nuestra boda?"
              rows={4}
              {...register("cancion", { required: true })}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="asistir"
              className="text-2xl text-pink_custom font-semibold"
            >
              Comentarios o preguntas
            </label>
            <textarea
              className="outline-none w-full py-3 rounded-lg bg-green_os/70 border placeholder:text-pink_custom placeholder:text-xl placeholder:translate-y-0.5 text-md text-pink_custom pl-4"
              placeholder="Si tienes algo para comentar lo pudes hacer aqui"
              rows={4}
              {...register("description", { required: true })}
            />
          </div>

          <button
            type="submit"
            className="bg-pink_custom text-2xl font-semibold rounded-full py-2"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
