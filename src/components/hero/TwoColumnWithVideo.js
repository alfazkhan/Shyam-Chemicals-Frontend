import React, { Component } from 'react'
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
// import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
// import DesignIllustration from "../../images/design-illustration.svg";
import Carousel from "../carousel/Carousel";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;


// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;





export class TwoColumnWithVideo extends Component {

  

  render() {
    
      const heading = "About Us"
      const description = "SHYAM CHEMICALS & MINERALS is Jaipur (Rajasthan)- based business house engaged in the production and distribution of Industrial Minerals. Incepted in the year 2008. We are recknoed as a reliable Processor and Supplier of Micronised Calcite Power, Calcium Carbonate and Dolomite Power."
      const primaryActionText = "Contact Us"
      const primaryActionUrl = "/contact-us"
      const secondaryActionText = "Our Products"
      const secondaryActionUrl = "/products"
    
    return (
      <>
        <Header />
        <Container>
          <TwoColumn>
            <LeftColumn>
              <Heading>{heading}</Heading>
              <Paragraph>{description}</Paragraph>
              <Actions>
                <a href={primaryActionUrl} className="action primaryAction">
                  {primaryActionText}
                </a>
                <a href={secondaryActionUrl} className="action secondaryAction">
                  {secondaryActionText}
                </a>
              </Actions>
            </LeftColumn>
            <RightColumn>
              <Carousel location = "landing" />
            </RightColumn>
          </TwoColumn>
          <DecoratorBlob1 />
        </Container>
      </>
    )
  }
}

export default TwoColumnWithVideo
