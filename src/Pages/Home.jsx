import React from "react";
import Index from "../Components/Index";
import Invita from "../Components/Invita";
import Famili from "../Components/Famili";
import Save from "../Components/Save";
import Contact from "../Components/Contact";
import Form from "../Components/Form";
import Countdown from "../Components/Countdown";

const Home = (props) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Index />
      <Invita />
      <Famili />
      <Save />
      <Contact />
      <Form />
    </div>
  );
};

export default Home;