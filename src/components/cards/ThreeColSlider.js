import React, { Component } from 'react'
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import Axios from '../../Axios';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4 text-justify`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;




export class ThreeColSlider extends Component {
  state = {
    sliderRef: React.createRef(),
    feedbacks: []
  }

  componentDidMount = async () => {
    const feedbacks = await Axios.get('/api/feedback')
    console.log(feedbacks.data)
    setInterval(() => {
      this.state.sliderRef.current.slickNext()
    }, 3000);
    this.setState({
      feedbacks: feedbacks.data
    })
  }

  slickNextHandler = () => {
    this.state.sliderRef.current.slickNext()
  }

  slickPrevHandler = () => {
    this.state.sliderRef.current.slickPrev()
  }

  render() {
    // const [sliderRef, setSliderRef] = useState(null);
    const sliderSettings = {
      arrows: false,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
          }
        },

        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    };

    /* Change this according to your needs */

    return (
      <Container>
        <Content>
          <HeadingWithControl>
            <Heading>Customer Feedbacks</Heading>
            <Controls>
              <PrevButton onClick={this.slickPrevHandler}><ChevronLeftIcon /></PrevButton>
              <NextButton onClick={this.slickNextHandler}><ChevronRightIcon /></NextButton>
            </Controls>
          </HeadingWithControl>
          <CardSlider ref={this.state.sliderRef} {...sliderSettings}>
            {this.state.feedbacks.map(feedback => {
              if (feedback.show) {
                return(
                <Card key={feedback._id}>
                  {/* <CardImage imageSrc={"https://picsum.photos/200/800"} /> */}
                  <TextInfo>
                    <TitleReviewContainer>
                      <Title>{feedback.name}</Title>
                      <RatingsInfo>
                        {/* <StarIcon /> */}
                        {/* <Rating>{feedback.rating}</Rating> */}
                      </RatingsInfo>
                    </TitleReviewContainer>
                    <SecondaryInfoContainer>
                      {/* <IconWithText>
                      <IconContainer>
                        <LocationIcon />
                      </IconContainer> */}
                      <Text>{feedback.company_name}</Text>
                      {/* </IconWithText> */}
                      {/* <IconWithText>
                      <IconContainer>
                        <PriceIcon />
                      </IconContainer>
                      <Text>{feedback.message}</Text>
                    </IconWithText> */}
                    </SecondaryInfoContainer>
                    <Description>{feedback.message}</Description>
                  </TextInfo>
                  {/* <PrimaryButton>Book Now</PrimaryButton> */}
                </Card>)
              }
            })}
          </CardSlider>
        </Content>
      </Container>
    )
  }
}

export default ThreeColSlider
