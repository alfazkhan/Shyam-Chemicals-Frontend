import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/ThreePlans.js";
import Footer from "components/footers/MiniCenteredFooter.js";


export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing/>
      <Footer/>
    </AnimationRevealPage>
  );
};
