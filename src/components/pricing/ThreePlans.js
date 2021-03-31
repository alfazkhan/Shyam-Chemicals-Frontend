import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
import Products from "components/products/Products";

const HeaderContainer = tw.div`mt-5 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full flex-col text-justify max-w-5xl `;





const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;


export default ({
  subheading = "",
  heading = "Our Products",
  description = "Micronised calcite power: We supply Micronised Calcite Power that is developed using quality lumps that we obtain from trusted vendors. The Micronised Calcite Power, we offer, is formulated by the experts at our own unit. The Micronised Calcite Power, we formulate, is used as a raw material to manufacture several products. The clients can avail the Micronised Calcite Power from us in varied quantity at reasonable price.",

}) => {
  

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
          <Products/>
          
          <DecoratorBlob />
      </ContentWithPaddingXl>
    </Container>
  );
};
