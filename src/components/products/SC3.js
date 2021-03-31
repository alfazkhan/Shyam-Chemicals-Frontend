import React, { Component } from 'react'
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
import tw from "twin.macro";


const Subheading = tw(SubheadingBase)`mb-4 text-2xl text-center mt-6`;
export class SC3 extends Component {
    render() {
        return (
            <div>
                <Subheading>Product Specifications Of Imported Calcite Powder<wbr /> <span className="text-danger"> SC3</span> </Subheading>
                {
                    this.props.Table(
                        {
                            header: [
                                {
                                    title: 'Chemical Composition',                       
                                },
                                {
                                    title: 'SC-2',    
                                }
                            ],
                            rows: [
                                {
                                    content: ['Colour', "White"],    
                                },
                                {
                                    content: ['Whiteness', "97.00"],         
                                },
                                {
                                    content: ['Specific Gravity','2.60'], 
                                },
                                {
                                    content: ['Bulk Density(gm/ml)','0.95'], 
                                },
                                {
                                    content: ['Oil Absorption(gms per 100 gms)','22'], 
                                },
                                {
                                    content: ['Moisture Content','0.08'], 
                                },
                                {
                                    content: ['Silica SIO2','1.05'], 
                                },
                                {
                                    content: ['Iron Fe2O3','0.04'], 
                                },
                                {
                                    content: ['Aluminia Al2O3','0.05'], 
                                },
                                {
                                    content: ['Calcium Carbonate CaCO3',<>90 &#177; 1%</>], 
                                },

                            ],
                        }
                    )
                }
            </div>
        )
    }
}

export default SC3
