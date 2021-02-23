import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Surendra Khator",
            description: (
              <>
                <a target="0" href="https://www.google.com/maps/place/Shyam+Chemicals+%26+Minerals/@26.9971311,75.7373208,13z/data=!4m8!1m2!2m1!1sE-412,+Road+No.+14+V.K.I.+Area,+Near+Dehli+Rajasthan+Transport+Co.,+Jaipur-302013!3m4!1s0x396db27001edb35d:0xf471318eee44abdf!8m2!3d26.9971311!4d75.7723397"><Address>
                  <AddressLine>E-412, Road No. 14</AddressLine>
                  <AddressLine>V.K.I. Area, Near Dehli Rajasthan Transport Co., Jaipur-302013</AddressLine>
                </Address>
                </a>
                <a target="0" href="mailto:info@shyamchemicals.co.in"><Email>info@shyamchemicals.co.in</Email></a>
                <a href="tel:1412239708" target="0"><Phone>+91-141-2239708</Phone></a>
                <a href="tel:9829866681" target="0"><Phone>+91-98298-66681</Phone></a>
                <a href="tel:9829050467" target="0"><Phone>+91-98290-50467</Phone></a>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
