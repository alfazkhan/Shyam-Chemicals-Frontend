import React, { Component } from 'react'
import tw from "twin.macro";

import {  Subheading as SubheadingBase } from "components/misc/Headings.js";

const Subheading = tw(SubheadingBase)`mb-4 text-2xl text-center mt-6`;

export class TypeofProducts extends Component {
    render() {
        return (
            <div>
                <Subheading>Type of Products</Subheading>
                <table class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>Practical Size Availability</th>
                            <th>Powder (100-700 Mesh &amp; Up to 2 Micron)</th>
                        </tr>
                        <tr>
                            <td>Packing</td>
                            <td>50 kg HDPE bags / 25 kg bags<br /> Or as per customer requirments</td>
                        </tr>
                        <tr>
                            <td>Applications</td>
                            <td>
                                <ul>
                                    <li>&bull; &nbsp;Sheet / Float Glass Indutries</li>
                                    <li>&bull; &nbsp;Glassware Industries</li>
                                    <li>&bull; &nbsp;Cermic Floor &amp; Wall Tile Industries</li>
                                    <li>&bull; &nbsp;Sanitary ware &amp; Insultor Industries</li>
                                    <li>&bull; &nbsp;Ceramic Frit Industriws</li>
                                    <li>&bull; &nbsp;Rubber Industries</li>
                                    <li>&bull; &nbsp;Pipe Coating Industries &amp; Rigid PVC Pipes</li >
                                    <li>&bull; &nbsp;PP / LDPE master batches &amp; Automotive</li >
                                    <li>&bull; &nbsp;Leather Cloth Industry</li >
                                    <li>&bull; &nbsp;Paints, Inks, Powder Coating</li>
                                </ul >
                            </td >
                        </tr >
                        <tr>
                            <td>Typical Properties of Calcite:</td>
                            <td>
                                <ul>
                                    <li>&bull; &nbsp;Higher flow properties</li>
                                    <li>&bull; &nbsp;Higher mechinical properties in thermoplastic</li>
                                    <li>&bull; &nbsp;applications</li>
                                    <li>&bull; &nbsp;Better gloss and whiteness in Paints &amp; Powder</li>
                                    <li>&bull; &nbsp;coating applications</li>
                                    <li>&bull; &nbsp;Excellent dispersion properties</li>
                                    <li>&bull; &nbsp;Prevents chalking</li>
                                    <li>&bull; &nbsp;Better corrosion resistance</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody >
                </table >
            </div>
        )
    }
}

export default TypeofProducts
