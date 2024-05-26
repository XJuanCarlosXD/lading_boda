import { useState, useEffect } from "react";

function Countdown() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const posi = 800.84912109375;
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-06") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrollPosition > posi) {
    return (
      <div className="fixed bottom-0 z-30 bg-pink_custom w-full flex flex-col justify-center items-center  textgap-2 py-2">
        <h2 className="font-merienda font-semibold text-2xl im-fell-english-sc-regular">
          Cuenta Regresiva
        </h2>
        <div className="text-xl flex justify-center gap-4 items-center bg-green_os w-11/12 py-2 text-pink_custom divide-x-2 divide-pink_custom rounded-lg font-black">
          {timeLeft.days !== 0 && (
            <div className="text-center w-full">
              {timeLeft.days}
              <div className="text-center w-full text-xs">días</div>
            </div>
          )}
          {timeLeft.hours !== 0 && (
            <div className="text-center w-full">
              {timeLeft.hours}{" "}
              <div className="text-center w-full text-xs">horas</div>
            </div>
          )}
          {timeLeft.minutes !== 0 && (
            <div className="text-center w-full">
              {timeLeft.minutes}
              <div className="text-center w-full text-xs">minutos</div>{" "}
            </div>
          )}
          {timeLeft.seconds !== 0 && (
            <div className="text-center w-full">
              {timeLeft.seconds}{" "}
              <div className="text-center w-full text-xs">segundos</div>
            </div>
          )}
          {timeLeft.days === 0 &&
            timeLeft.hours === 0 &&
            timeLeft.minutes === 0 &&
            timeLeft.seconds === 0 && <div>El tiempo ha terminado</div>}
        </div>
      </div>
    );
  }
}

export default Countdown;
