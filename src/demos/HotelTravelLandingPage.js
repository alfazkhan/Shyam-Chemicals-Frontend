import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";

import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";

import Footer from "components/footers/MiniCenteredFooter.js";


export default () => (
  <AnimationRevealPage>
    <Hero />
    <Testimonial/>
    <Footer />
  </AnimationRevealPage>
);
