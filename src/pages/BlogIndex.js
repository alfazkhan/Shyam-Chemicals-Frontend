import React, { Component } from 'react'
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import Axios from '../Axios';


const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 text-justify font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase  text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 `;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;




export class BlogIndex extends Component {

  state = {
    applications: []
  }

  componentDidMount = async () => {
    const applications = await Axios.get('api/application')
    console.log(applications.data)
    this.setState({
      applications: applications.data
    })
  }



  render() {
    const headingText = "Applications"
    const posts =
    {
      imageSrc:
        "https://5.imimg.com/data5/WV/DC/MY-36580823/calcium-carbonate-500x500.jpg",
      // category: "Travel Tips",
      // date: "April 21, 2020",
      title: "Calcium",
      description:
        "Backed by rich industry experience and knowledge, we have been able to manufacture, export and supply highly pure Pvd Salt. Offered salt is widely used in oil drilling operation. In addition to this, it is hygienically processed using superior quality ingredients and brine in compliance with international food norms. Our quality inspectors rigorously checks this salt on various parameters to ensure its high quality. Moreover, this Pvd Salt is available in different packaging options and keep it safe from contamination.",

    }
    return (
      <AnimationRevealPage>
        <Header />
        <Container>
          <ContentWithPaddingXl>
            <HeadingRow>
              <Heading>{headingText}</Heading>
            </HeadingRow>
            <Posts>
              {
                this.state.applications.map(application => {
                  if(!application.show){
                    return
                  }
                  return (
                    <PostContainer>
                      <Post className="group">
                        <Image imageSrc={'https://api.shyamchemical.co.in/'+application.image} />
                        <Info>
                          {/* <Category>{posts.category}</Category> */}
                          {/* <CreationDate>{posts.date}</CreationDate> */}
                          <Title>{application.title}</Title>
                          {application.description && <Description>{application.description}</Description>}
                        </Info>
                      </Post>
                    </PostContainer>
                  )
                })
              }

            </Posts>
            {/* {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )} */}
          </ContentWithPaddingXl>
        </Container>
        <Footer />
      </AnimationRevealPage>
    )
  }
}

export default BlogIndex
