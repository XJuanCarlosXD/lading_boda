import React from "react";
import Index from "../Components/Index";
import Invita from "../Components/Invita";
import Famili from "../Components/Famili";
import Save from "../Components/Save";
import Contact from "../Components/Contact";
import Form from "../Components/Form";
import Present from "../Components/Present";
import Carousel from "../Components/Carousel";
import Loading from "../Components/Loading";

const Home = (props) => {
  const slides = [];
  for (let i = 1; i <= 15; i++) {
    if (i === 5 || i === 2 || i === 15 || i === 1 || i === 10) {
    } else {
      slides.push(`/images/boda-${i}.jpg`);
    }
  }
  return (
    <div className="flex flex-col overflow-hidden mb-20">
      <Index />
      <Invita />
      <Famili />
      <Save />
      <Contact />
      <Present />
      <Form />
      <Carousel slides={slides} />
      <Loading />
    </div>
  );
};

export default Home;
