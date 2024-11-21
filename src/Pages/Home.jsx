import React, { useCallback, useEffect, useState } from "react";
import Index from "../Components/Index";
import Famili from "../Components/Famili";
import Save from "../Components/Save";
import Contact from "../Components/Contact";
import Form from "../Components/Form";
import Carousel from "../Components/Carousel";
import Loading from "../Components/Loading";
import Countdown from "../Components/Countdown";
import { useParams } from "react-router-dom";
import { getDatas } from "../utils/controller";
import { data } from "../utils/data.ts";

const Home = () => {
  const { tel } = useParams();
  const [state, setState] = React.useState(true);
  const [confirm, setConfirm] = React.useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const slides = [
    "https://appbot.nyc3.digitaloceanspaces.com/Isaura/Chill%20Night.png",
    "https://appbot.nyc3.digitaloceanspaces.com/Isaura/isaura1.jpg",
    "https://appbot.nyc3.digitaloceanspaces.com/Isaura/isaura2.jpg",
    "https://appbot.nyc3.digitaloceanspaces.com/Isaura/isaura3.jpg",
    "https://appbot.nyc3.digitaloceanspaces.com/Isaura/isaura4.jpg",
  ];

  useEffect(() => {
    const dt = data.find((x) => x.telefono === tel);
    if (!dt) {
      setConfirm(false);
    }
  }, [tel]);

  const getDataInit = useCallback(async () => {
    if (state === true) {
      new getDatas().listenLastesDevits((res) => {
        const d = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        try {
          const dt = d.find((x) => x.tel === tel);
          if (dt) {
            setConfirm(false);
          }
        } catch (error) {
          console.error(error);
        }
        setState(res.metadata.hasPendingWrites);
      });
    }
  }, [state, tel]);
  useEffect(() => {
    getDataInit();
  }, [getDataInit]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (!isMobile) {
    return (
      <div className="text-6xl flex w-screen h-screen font-black text-center justify-center items-center">
        Esta página solo es visible en dispositivos móviles.
      </div>
    );
  }
  return (
    <div className="flex flex-col overflow-hidden mb-20">
      <Index />
      <Famili />
      <Save />
      <Contact />
      {confirm && (
        <Form
          onClick={() => {
            setState(true);
            setConfirm(false);
          }}
        />
      )}
      <Carousel slides={slides} />
      <Loading />
      <Countdown />
    </div>
  );
};

export default Home;
