import React from "react";
import Index from "../Components/Index";
import Invita from "../Components/Invita";
import Famili from "../Components/Famili";
import Save from "../Components/Save";
import Contact from "../Components/Contact";
import Form from "../Components/Form";
import Present from "../Components/Present";

const Home = (props) => {
  return (
    <div className="flex flex-col overflow-hidden mb-24">
      <Index />
      <Invita />
      <Famili />
      <Save />
      <Contact />
      <Present />
      <Form />
    </div>
  );
};

export default Home;
