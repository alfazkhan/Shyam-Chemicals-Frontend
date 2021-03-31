import React, { Component } from 'react'
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import Axios from '../../Axios';

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

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`
const Input = tw.input`border-2 sm:mt-5 px-4 py-3 mr-2 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw(PrimaryButtonBase)`inline-block py-3  mt-5 `




export class TwoColContactUsWithIllustration extends Component {

  state = {
    name: 'Alfaz',
    phone_number: '9982080781',
    email: 'abe@123.com',
    alerts: []

  }

  inputHandler = (e) => {
    switch (e.target.name) {
      case "name":
        this.setState({ name: e.target.value }); break;
      case "phone":
        this.setState({ phone_number: e.target.value }); break;
      case "email":
        this.setState({ email: e.target.value }); break;
    }
  }

  submitFormHandler = async () => {
    const data = {
      "name":this.state.name,
      "phone_number":this.state.phone_number,
      "email":this.state.email
  }
    const response = await Axios.post('api/contact', data)
    const message = {
      message: 'Contact info Sent!!! We will reach out to you shortly',
      classes: 'alert-success'
    }
    const alerts = []
    alerts.push(message)
    this.setState({ alerts: alerts })
  }

  render(
    subheading = "Contact Us",
    heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr /> with us.</>,
    description = "",
    submitButtonText = "Contact Me",
    formAction = "#",
    formMethod = "get",
    textOnLeft = true,
  ) {
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
              <Description>{description}</Description>
              {
                this.state.alerts.map(alert => (
                  <div className={"alert container alert-dismissible fade show " + alert.classes} role="alert">
                    <div className="row">
                      <strong className="col-10">{alert.message}</strong>
                      <button type="button" className="close col-2" data-dismiss="alert" aria-label="Close" onClick={() => this.setState({ alerts: [] })}>
                        <span className="font-weight-bold" aria-hidden="true">&#10060;</span>
                      </button>
                    </div>
                  </div>
                ))
              }
              <Form action={formAction} method={formMethod}>
                <Input type="name" name="name" placeholder="Your Name" />
                <Input type="phone" name="name" placeholder="Your Phone (+91)" />
                <Input type="email" name="email" placeholder="Your Email Address" />
              </Form>
              <SubmitButton type="submit" onClick={this.submitFormHandler}>{submitButtonText}</SubmitButton>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    );
  }
}

export default TwoColContactUsWithIllustration

