import React, { Component } from 'react'
import tw from "twin.macro";


const Container = tw.div``;



export class Carousel extends Component {

    state = {
        imageURL: []
    }

    componentDidMount() {
        const imageURL = []
        for (var i = 0; i < 10; i++) {
            imageURL.push('https://picsum.photos/id/' + Math.floor(Math.random() * 100) + '/1440/1024')
        }
        console.log(imageURL)
        this.setState({
            imageURL: imageURL
        })
    }



    render() {
        return (
            <Container>
                <div id="carouselExampleIndicators" className="carousel slide ml-auto" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        {this.state.imageURL.map((i, index) => {
                            return (
                                <button key={index} 
                                type="button" 
                                data-bs-target="#carouselExampleIndicators" 
                                data-bs-slide-to={index} aria-label={"Slide " + (index + 1)}
                                className={index===0?"active":""}
                                />
                                
                            )
                        })}
                    </div>
                    <div className="carousel-inner">
                        
                        {this.state.imageURL.map((image, index) => {
                            return (
                                <div className={index===0?"carousel-item active":"carousel-item "} >
                                    <img loading="lazy" src={image} className="d-block w-100" alt="..." />
                                </div>
                            )
                        })}

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </Container>
        )
    }
}

export default Carousel



