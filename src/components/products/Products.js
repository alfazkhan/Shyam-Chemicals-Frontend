import React, { Component } from 'react'
import tw from "twin.macro";
import styled from "styled-components";

import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
import TypeofProducts from './TypeofProducts';
import SC1 from './SC1';
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
import SC2 from './SC2';
import SC3 from './SC3';

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0  h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;

const Subheading = tw(SubheadingBase)`mb-4 text-2xl text-center mt-6`;


export class Products extends Component {
    Table = (props) => {
        console.log(props)
        return (
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        {props.header.map(header => {
                            return <th>{header.title}</th>
                        })}

                    </tr>
                </thead>
                <tbody>
                    {props.rows.map(row => {
                        return (
                            <tr>
                                {row.content.map(data => {
                                    return <td>{data}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div tw="" >
                <TypeofProducts/>
                <SC1/>
                <SC2 Table={this.Table}/>
                <SC3 Table={this.Table} />


                < DecoratorBlob />
            </div >
        )
    }
}

export default Products
