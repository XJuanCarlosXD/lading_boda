import React, { useCallback, useEffect, useState } from "react";
import Index from "../Components/Index";
import Invita from "../Components/Invita";
import Famili from "../Components/Famili";
import Save from "../Components/Save";
import Contact from "../Components/Contact";
import Form from "../Components/Form";
import Present from "../Components/Present";
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
  const slides = [];
  for (let i = 1; i <= 15; i++) {
    if (i === 5 || i === 2 || i === 15 || i === 1 || i === 10) {
    } else {
      slides.push(`/images/boda-${i}.jpg`);
    }
  }

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
      <Invita />
      <Famili />
      <Save />
      <Contact />
      <Present />
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
