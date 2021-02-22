import React, { Component } from 'react'
import tw from "twin.macro";

import { Subheading as SubheadingBase } from "components/misc/Headings.js";

const Subheading = tw(SubheadingBase)`mb-4 text-2xl text-center mt-6`;

export class SC1 extends Component {
    render() {
        return (
            <div style={{ marginTop: 70 }}>
                <Subheading>Product Specifications Of Imported Calcite Powder<wbr /> <span className="text-danger"> SC1</span> </Subheading>
                <table class="table table-striped table-bordered">
                    <tbody><tr>
                        <th>No.</th>
                        <th>PRODUCTS</th>
                        <th colspan="3" className="text-center">SC-1</th>
                    </tr>
                        <tr>
                            <td>1</td>
                            <td>GCC-SC105</td>
                            <td>D5O &lt;= 1.4 μm</td>
                            <td>D97=5±1 μm</td>
                            <td>2.500 mesh</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>GCC-SC108</td>
                            <td>D5O &lt;= 1.8 μm</td>
                            <td>D97=8±1 μm</td>
                            <td>1.880 mesh</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GCC-SC110</td>
                            <td>D5O &lt;= 2.5 μm</td>
                            <td>D97=10±1 μm</td>
                            <td>1.250 mesh</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>GCC-SC112</td>
                            <td>D5O &lt;= 3.0 μm</td>
                            <td>D97=12±1 μm</td>
                            <td>1.100 mesh</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>GCC-SC115</td>
                            <td>D5O &lt;= 4.0 μm</td>
                            <td>D97=15±1 μm</td>
                            <td>1.000 mesh</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>GCC-SC120</td>
                            <td>D5O &lt;= 5.0 μm</td>
                            <td>D97=20±1 μm</td>
                            <td>625 mesh</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>GCC-SC125</td>
                            <td>D5O &lt;= 6.0 μm</td>
                            <td>D97=25±1 μm</td>
                            <td>600 mesh</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>GCC-SC130</td>
                            <td>D5O &lt;= 7.5 μm</td>
                            <td>D97=30±1 μm</td>
                            <td>500 mesh</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>GCC-SC135</td>
                            <td>D5O &lt;= 12.0 μm</td>
                            <td>D97=35±1 μm</td>
                            <td>428 mesh</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>GCC-SC145</td>
                            <td>D5O &lt;= 14.5 μm</td>
                            <td>D97=45±1 μm</td>
                            <td>325 mesh</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>GCC-SC175</td>
                            <td>D5O &lt;= 23.0 μm</td>
                            <td>D97=70±1 μm</td>
                            <td>188 mesh</td>
                        </tr>
                    </tbody>
                </table >
                <div style={{ overflow: 'scroll' }}>
                    <table class="table table-striped table-bordered mt-5" >
                        <tbody><tr>
                            <th rowspan="2">TECHINAL SPECIFICATION</th>
                            <th colspan="4">PRODUCTS</th>
                        </tr>

                            <tr>
                                <th>CGCC-SC108</th>
                                <th>CGCC-SC110</th>
                                <th>CGCC</th>
                                <th>CGCC-SC120</th>
                            </tr>


                            <tr>
                                <td>Dry Brightness</td>
                                <td>94,00% min</td>
                                <td>94,00% min</td>
                                <td>94,00% min</td>
                                <td>94,00% min</td>
                            </tr>


                            <tr>
                                <td>Whiteness</td>
                                <td>97,00% min</td>
                                <td>97,00% min</td>
                                <td>97,00% min</td>
                                <td>97,00% min</td>
                            </tr>

                            <tr>
                                <td>D50</td>
                                <td>1,8 μm max</td>
                                <td>2,5 μm max</td>
                                <td>4,0 μm</td>
                                <td>5,0 μm max</td>
                            </tr>


                            <tr>
                                <td>D97</td>
                                <td>8+1 μm max</td>
                                <td>10 μm max</td>
                                <td>15 μm</td>
                                <td>15 μm max</td>
                            </tr>


                            <tr>
                                <td>Mesh</td>
                                <td>1,880 mesh</td>
                                <td>1,250 mesh</td>
                                <td>1,000 mesh</td>
                                <td>625 mesh</td>
                            </tr>


                            <tr>
                                <td>Oil absorption</td>
                                <td>23,00 g alcohol</td>
                                <td>23,00 g alcohol</td>
                                <td>23,00 g alcohol</td>
                                <td>23,00 g alcohol</td>
                            </tr>


                            <tr>
                                <td>Moisture</td>
                                <td>0,2 % max</td>
                                <td>0,2 % max</td>
                                <td>0,2 % max</td>
                                <td>0,2 % max</td>
                            </tr>

                        </tbody>
                    </table >
                </div>
                <table class="table table-striped table-bordered mt-5">
                    <tbody><tr>
                        <th colspan="2">CHEMICAL COMPONENTS</th>
                        <th colspan="2">PHYSICAL CHARACTERISTICS</th>
                    </tr>

                        <tr>
                            <td>CaCO3 content</td>
                            <td>≥98 %</td>
                            <td>Brightness</td>
                            <td>≥94 %</td>
                        </tr>

                        <tr>
                            <td>MgO content</td>
                            <td>≤ 0,16 %</td>
                            <td>Whiteness</td>
                            <td>≥ 97 %</td>
                        </tr>

                        <tr>
                            <td>Fe2O3 content</td>
                            <td>≤ 0,01 %</td>
                            <td>Mixture</td>
                            <td>≤ 0,2 %</td>
                        </tr>


                        <tr>
                            <td>Al2O3 content</td>
                            <td>≤ 0,04 %</td>
                            <td>Proportion</td>
                            <td>1g/cm3</td>
                        </tr>


                        <tr>
                            <td>Sio2</td>
                            <td>≤ 0,01 %</td>
                            <td>Oil absorption</td>
                            <td>≥ 24g/100g CaCO3</td>
                        </tr>


                        <tr>
                            <td>Na2O</td>
                            <td>≤ 0,16 %</td>
                            <td>Content loss on</td>
                            <td>≤ 43,08 %</td>
                        </tr>


                    </tbody>
                </table >
            </div>
        )
    }
}

export default SC1
