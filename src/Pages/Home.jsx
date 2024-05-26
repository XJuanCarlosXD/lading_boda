import React from "react";
import Index from "../Components/Index";
import Invita from "../Components/Invita";
import Famili from "../Components/Famili";
import Save from "../Components/Save";
import Contact from "../Components/Contact";
import Form from "../Components/Form";
import Present from "../Components/Present";
import Carousel from "../Components/Carousel";

const Home = (props) => {
  const slides = [];
  for (let i = 1; i <= 15; i++) {
    if (i === 5 || i === 2 || i === 7 || i === 1 || i === 14) {
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
    </div>
  );
};

export default Home;
