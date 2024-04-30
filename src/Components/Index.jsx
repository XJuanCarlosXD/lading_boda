import React from "react";

const Index = (props) => {
  return (
    <div className="flex flex-col gap-4 relative w-screen">
      <img
        src="/images/index.png"
        className="h-screen w-screen"
        alt="index.png"
      />
      <img
        src="/img/flower.png"
        alt="flower.png"
        className="absolute -rotate-90 bottom-0 w-80"
      />
    </div>
  );
};

export default Index;
