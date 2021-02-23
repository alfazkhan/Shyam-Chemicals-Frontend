import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";

import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { Document, Page, pdfjs } from "react-pdf";
import ShyamChemicalsBrochure from '../pdf/ShyamChemicalsBrochure.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const Canvas = tw.div`mt-6 sm:-mr-8 flex flex-wrap mx-auto`;

const PageSwitcher = tw.div`block w-full max-w-xs sm:inline-block sm:w-auto border-2 rounded-full px-1 py-1 mt-8 flex flex-wrap mx-auto`;
const SwitchButton = styled.button`
  ${tw`w-1/2 sm:w-32 px-4 sm:px-8 py-3 rounded-full focus:outline-none text-sm font-bold text-gray-700 transition duration-300`}
  ${props => props.active && tw`bg-primary-500 text-gray-100`}
`;

export default () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <AnimationRevealPage>
            <Header />
            <div className="row">
                <Posts>
                    <Canvas style={{ overflowX: 'scroll' }} className="text-center mx-auto">
                        <Document
                            file={ShyamChemicalsBrochure}
                            onLoadSuccess={onDocumentLoadSuccess}
                            renderMode="svg"
                            loading="Loading..."

                        >
                            <Page pageNumber={pageNumber} size="LEGAL" wrap={false} />
                        </Document>
                    </Canvas>
                </Posts>
                <PageSwitcher>
                    <SwitchButton active={pageNumber === 1} onClick={() => setPageNumber(1)}>Page 1</SwitchButton>
                    <SwitchButton active={pageNumber === 2} onClick={() => setPageNumber(2)}>Page 2</SwitchButton>
                </PageSwitcher>
            </div>

            <Footer />
        </AnimationRevealPage>
    );
};
