import React, { useState } from "react";
import Carousel from "../../Home/Carousel";
import mainVisual from "../../../Assets/images/main_visual.png";

function Home() {
  const images = [mainVisual];
  return (
    <main>
      <Carousel images={images} interval={10000} />
    </main>
  );
}

export default Home;
