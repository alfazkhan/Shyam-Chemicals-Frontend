import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FAQ from "components/faqs/SingleCol.js";
import Products from "components/products/Products";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing/>
      <Footer/>
    </AnimationRevealPage>
  );
};
