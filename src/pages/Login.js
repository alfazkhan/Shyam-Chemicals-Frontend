import React, { Component } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/login-illustration.svg";
import Logo from "images/Logo.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { withRouter } from "react-router-dom";
import Axios from "../Axios";
import {encryption,decryption} from '../helpers/encryption'

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;




const Form = tw.div`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;





class Login extends Component {

  state = {
    email: "dev@admin.com",
    password: "123456"
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if(token !== ""){
      this.props.history.push('/admin-dashboard')
    }

  }

  inputHandler = (event) => {
    event.target.name === "email"
    ? this.setState({email:event.target.value})
    : this.setState({password:event.target.value})
  }

  loginHandler = async () => {
    const response = await Axios.post('api/user/login',this.state)
    localStorage.setItem('token', encryption(response.data.token)); 
    // console.log(response.data.token)
    
  }


  render() {
    const logoLinkUrl = "/"
    const illustrationImageSrc = illustration
    const headingText = "Sign In To Shyam Chemicals"
    
    const submitButtonText = "Sign In"
    const forgotPasswordUrl = "#"
    const logo = Logo
    return (
      <AnimationRevealPage>
        <Container>
          <Content>
            <MainContainer>
              <LogoLink href={logoLinkUrl}>
                <LogoImage src={logo} />
              </LogoLink>
              <MainContent>
                <Heading>{headingText}</Heading>
                <FormContainer>

                  <Form>
                    <Input type="email" name="email" onChange={this.inputHandler} placeholder="Email" />
                    <Input type="password" name="password" onChange={this.inputHandler} placeholder="Password" />
                    <SubmitButton onClick={this.loginHandler}>
                      <LoginIcon className="icon" />
                      <span className="text">{submitButtonText}</span>
                    </SubmitButton>
                  </Form>
                  <p tw="mt-6 text-xs text-gray-600 text-center">
                    <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                      Forgot Password ?
                    </a>
                  </p>
                </FormContainer>
              </MainContent>
            </MainContainer>
            <IllustrationContainer>
              <IllustrationImage imageSrc={illustrationImageSrc} />
            </IllustrationContainer>
          </Content>
        </Container>
      </AnimationRevealPage>
    )
  }
}

export default withRouter(Login)
