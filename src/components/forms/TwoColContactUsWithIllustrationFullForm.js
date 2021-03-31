import React, { Component } from 'react'
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/happy-illustration.svg";
import Axios from '../../Axios';
import { withRouter } from 'react-router-dom';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`


export class TwoColContactUsWithIllustrationFullForm extends Component {


  state = {
    name: "",
    email_id: "",
    mobile_no: "",
    company_name: "",
    address: "",
    message: "",
    show: false
  }

  componentDidMount() {
    this.setState({
      name: ""
    })
    // console.log(this.props.history)
  }
  

  inputHandler=(e)=>{
    var state = this.state
    const value = e.target.value
    switch(e.target.name){
      case "name":
        state.name = value;
        break;
      case "email":
        state.email_id = value;
        break;
      case "phone":
        state.mobile_no = value;
        break;
      case "company":
        state.company_name = value;
        break;
      case "address":
        state.address = value;
        break;
      case "message":
        state.message = value;
        break;
    }

    this.setState({...state})

  }

  submitFeedbackHander=async()=>{
    const response = await Axios.post('api/feedback',this.state)
    console.log(response)
    this.props.history.go(0)
  }

  render() {
    const subheading = "Contact Us"
    const heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr /> with us.</>
    const description = ""
    const submitButtonText = "Send"
    const formAction = "#"
    const formMethod = "get"
    const textOnLeft = true
    return (
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
              {description && <Description>{description}</Description>}
              <Form action={formAction} method={formMethod}>
                <Input type="text" onChange={this.inputHandler} name="name" placeholder="Full Name" />
                <Input type="email" name="email" placeholder="Your Email Address" onChange={this.inputHandler}/>
                <Input type="phone" name="phone" placeholder="Phone Number (+91)" onChange={this.inputHandler}/>
                <Input type="text" name="company" placeholder="Company Name" onChange={this.inputHandler}/>
                <Textarea name="address" placeholder="Your Address" onChange={this.inputHandler}/>
                <Textarea name="message" placeholder="Your Message Here" onChange={this.inputHandler}/>
              </Form>
                <SubmitButton onClick={this.submitFeedbackHander}>{submitButtonText}</SubmitButton>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    );
  };
}


export default withRouter(TwoColContactUsWithIllustrationFullForm)
