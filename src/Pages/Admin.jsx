import React, { useEffect } from "react";
import { data } from "../utils/data.ts";
import { getData, getDatas } from "../utils/controller";
import toast from "react-hot-toast";

const Admin = () => {
  const [state, setState] = React.useState(true);
  const [datas, setDatas] = React.useState([]);
  useEffect(() => {
    if (state === true) {
      new getDatas().listenLastesDevits((res) => {
        const d = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log(d);
        setDatas(d);
        setState(res.metadata.hasPendingWrites);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Texto copiado al portapapeles");
      })
      .catch((err) => {
        toast.success("Error al copiar al portapapeles: ", err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-start p-4 w-full h-full min-h-screen gap-4 bg-gray-900 overflow-hidden">
      <div className="w-screen ">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xl uppercase bg-gray-500 w-full">
            <tr>
              <th>Invitado</th>
              <th>Numero</th>
              <th>Confirmado</th>
              <th>Notificado</th>
              <th>Enlance</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((item, index) => {
              const datTO = datas.find((x) => x.tel === item.telefono);
              const confr1 = datTO?.confirm.find(
                (x) => x.asistira === item.nombre1
              )?.confir;
              const confr2 = datTO?.confirm.find(
                (x) => x.asistira === item.nombre2
              )?.confir;

              return (
                <tr key={index} className="text-start">
                  <td className="text-start text-2xl">
                    <ul>
                      <li>
                        {item.nombre1}{" "}
                        {confr1 && <i className="fas fa-check"></i>}
                      </li>
                      {item.nombre2 && (
                        <li>
                          {item.nombre2}
                          {confr2 && <i className="fas fa-check"></i>}
                        </li>
                      )}
                    </ul>
                  </td>
                  <td className="text-start text-2xl">{item.telefono}</td>
                  <td className="text-start pl-10">
                    <input
                      type="checkbox"
                      name={`conf-${index}`}
                      className="w-8 h-8"
                      checked={
                        datas.find((x) => x.tel === item.telefono)?.confirma
                          ? true
                          : false
                      }
                    />
                  </td>
                  <td className=" pl-10">
                    <input
                      type="checkbox"
                      name={`noti-${index}`}
                      className="w-8 h-8"
                      onClick={async () => {
                        const dataTO = datas.find(
                          (x) => x.tel === item.telefono
                        );
                        let valor = dataTO?.noti ? dataTO.noti : false;
                        if (dataTO) {
                          new getData(dataTO.id).handleOnUpdateDoc(
                            {
                              noti: !valor,
                            },
                            "Invitado Notificado"
                          );
                          valor = !valor;
                        }
                        setState(true);
                      }}
                      checked={
                        datas.find((x) => x.tel === item.telefono)?.noti
                          ? true
                          : false
                      }
                    />
                  </td>
                  <td className=" pl-10">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none uppercase"
                      onClick={() => {
                        if (item.nombre2 === "") {
                          copyToClipboard(
                            `https://invitacion-boda-maria-enmanuel.netlify.app/#/${encodeURIComponent(
                              item.nombre1
                            )}/null/${encodeURIComponent(item.telefono)}`
                          );
                        } else {
                          copyToClipboard(
                            `https://invitacion-boda-maria-enmanuel.netlify.app/#/${encodeURIComponent(
                              item.nombre1
                            )}/null/${encodeURIComponent(item.telefono)}`
                          );
                        }
                      }}
                    >
                      Copiar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
