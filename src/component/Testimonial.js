import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../index.css';

export default class Testimonials extends Component {
    render() {
        return (
            <Carousel
                className="carousel"
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >
                <div>
                    <div className="myCarousel">
                        <h3>Brijesh Vaghasiya</h3>
                        <p>
                            “SWEATMANI PVC is a professional in every sense of the word. Their work is extremely creative, innovative and individualized to reflect each client’s personal style. Berlin Interio can design a creative home and transition it towards a beautiful space in little or no time. They are honest and hardworking. They are just awesome!”
                        </p>
                    </div>
                </div>

                <div>
                    <div className="myCarousel">
                        <h3>Ghanshayam Jivani</h3>
                        <p>
                            I would like to thank the entire Berlin Interio team for the excellent work done during my house renovation. Was really impressed with the design process and the customization to my needs.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="myCarousel">
                        <h3>Gautam Bhosle</h3>
                        <p>
                            I enjoy catching up with Fetch on my laptop, or on my phone when
                            I'm on the go!
                        </p>
                    </div>
                </div>
            </Carousel>
        );
    }
}