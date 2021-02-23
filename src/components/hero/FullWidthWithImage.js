import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "../headers/light.js";
// import Carousel from "components/carousel/Carousel.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pt-8 pt-5`;
const RightColumn = styled.div`
  // background-image: url("https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&width=1440&height=1024&q=75");
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-auto`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

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

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="/products">Products</NavLink>
      <NavLink href="/application">Application</NavLink>
      <NavLink href="/brouchere">Brouchere</NavLink>
      <NavLink href="/feedback">Feedback</NavLink>
      <NavLink href="/contact-us">Contact Us</NavLink>
    </NavLinks>
  ],
  heading = (
    <>
      About
      <wbr />
      <span tw="text-primary-500"> Us</span>
    </>
  ),
  description = "SHYAM CHEMICALS & MINERALS is Jaipur (Rajasthan)- based business house engaged in the production and distribution of Industrial Minerals. Incepted in the year 2008. We are recknoed as a reliable Processor and Supplier of Micronised Calcite Power, Calcium Carbonate and Dolomite Power.",
  primaryActionUrl = "/contact-us",
  primaryActionText = "Contact us",
  secondaryActionUrl = "/products",
  secondaryActionText = "Our Products"
}) => {
  return (
    <Container >
      <TwoColumn >
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
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
          </Content>
        </LeftColumn>
        {/* <RightColumn> */}
          {/* <Carousel /> */}
        {/* </RightColumn> */}
      </TwoColumn>
    </Container>
  );
};
