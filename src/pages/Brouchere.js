import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";

import {     ContentWithPaddingXl } from "components/misc/Layouts";
import {SectionHeading, Subheading } from "components/misc/Headings";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { Document, Page, pdfjs } from "react-pdf";
import ShyamChemicalsBrochure from '../pdf/ShyamChemicalsBrochure.pdf'
import ShyamChemicalsBrochure01 from '../pdf/ShyamChemicalsBrochure-1.jpg'
import ShyamChemicalsBrochure02 from '../pdf/ShyamChemicalsBrochure-2.jpg'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const Canvas = tw.div`mt-6 sm:-mr-8 flex flex-wrap mx-auto`;

const PageSwitcher = tw.div`block w-5 max-w-xs sm:inline-block sm:w-auto border-2 rounded-full px-1 py-1 mt-8 flex flex-wrap mx-auto my-5`;
const SwitchButton = styled.button`
  ${tw`w-1/2 sm:w-32 px-4 sm:px-8 py-3 rounded-full focus:outline-none text-sm font-bold text-gray-700 transition duration-300`}
  ${props => props.active && tw`bg-primary-500 text-gray-100`}
`;
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative justify-center lg:pr-0 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

export default () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <AnimationRevealPage>
            <Header />
            <div className="container">

                <TwoColumn>
                    <LeftColumn>
                        {
                            pageNumber === 1
                                ?
                                <img loading="lazy" src={ShyamChemicalsBrochure01} className="d-block w-50" alt="..." />
                                :
                                <img loading="lazy" src={ShyamChemicalsBrochure02} className="d-block w-50" alt="..." />
                        }
                    </LeftColumn>
                    <RightColumn>
                        <SectionHeading>Hello</SectionHeading>
                    </RightColumn>
                </TwoColumn>
                <Container>
                    <PageSwitcher>
                        <SwitchButton active={pageNumber === 1} onClick={() => setPageNumber(1)}>Page 1</SwitchButton>
                        <SwitchButton active={pageNumber === 2} onClick={() => setPageNumber(2)}>Page 2</SwitchButton>
                    </PageSwitcher>
                </Container>
            </div>

            <Footer />
        </AnimationRevealPage>
    );
};
