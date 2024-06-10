import React, { useEffect } from "react";
import { data } from "../utils/data.ts";
import { getDatas } from "../utils/controller";
import toast from "react-hot-toast";
import * as XLSX from "xlsx";

const Admin = () => {
  const [state, setState] = React.useState(true);
  const [datas, setDatas] = React.useState([]);
  useEffect(() => {
    if (state === true) {
      new getDatas().listenLastesDevits((res) => {
        const d = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
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
    <div className="flex flex-col justify-center items-start p-4m max-sm:p-0 w-full h-full min-h-screen gap-4 bg-gray-900 overflow-hidden max-sm:overflow-scroll">
      <div className="w-screen ">
        <button
          onClick={() => {
            var wb = XLSX.utils.book_new(),
              ws = XLSX.utils.json_to_sheet(datas);
            XLSX.utils.book_append_sheet(wb, ws, "DataExport");
            XLSX.writeFile(wb, "reportInvitation.xlsx");
            return toast.success("Data Exportada a Excell 😎", {
              icon: "📗",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          }}
          type="button"
          className="w-full bg-green-500 text-xl text-white font-sans font-bold"
        >
          Excell
        </button>
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xl uppercase bg-gray-500 w-full max-sm:text-xs">
            <tr className="text-center">
              <th>Invitado</th>
              <th>Numero</th>
              <th>Confirmado</th>
              <th>Detalle</th>
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
                  <td className="text-start text-2xl max-sm:text-xs max-sm:text-center">
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
                  <td className="text-start text-2xl max-sm:text-xs max-sm:text-center">
                    {item.telefono}
                  </td>
                  <td className="text-start pl-10">
                    <input
                      type="checkbox"
                      name={`conf-${index}`}
                      className="w-8 h-8 max-sm:w-4 max-sm:h-4"
                      checked={
                        datas.find((x) => x.tel === item.telefono)?.confirma
                          ? true
                          : false
                      }
                    />
                  </td>
                  <td className="group">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 max-sm:py-1 max-sm:px-2  focus:outline-none uppercase"
                    >
                      Detalle
                    </button>
                    <div className="absolute w-56 scale-0 max-sm:right-3 text-justify transition-all group-hover:scale-100 px-2 bg-black  text-xl rounded-xl">
                      <ul className="list-disc p-3">
                        {datas.find((x) => x.tel === item.telefono)
                          ?.description && (
                          <li>
                            <b>Descripcion: </b>
                            {
                              datas.find((x) => x.tel === item.telefono)
                                ?.description
                            }
                          </li>
                        )}
                        {datas.find((x) => x.tel === item.telefono)
                          ?.cancion && (
                          <li>
                            <b>Cancion: </b>
                            {
                              datas.find((x) => x.tel === item.telefono)
                                ?.cancion
                            }
                          </li>
                        )}
                      </ul>
                    </div>
                  </td>
                  <td className="pl-10 max-sm:pl-0">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 max-sm:py-1 max-sm:px-2  focus:outline-none uppercase"
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
                            )}/${encodeURIComponent(
                              item.nombre2
                            )}/${encodeURIComponent(item.telefono)}`
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
