import React from 'react';
import RouteDetail from '../component/RouteDetail';
import client1 from '../images/client1.jpg';
import client2 from '../images/client21.png';
import client3 from '../images/client31.png';
import client4 from '../images/client41.png';
import client5 from '../images/client51.png';
import styled from 'styled-components/macro';
import '../index.css';

const Main = styled.div`
 width: 100%;
 display: flex;
 max-width: 1250px; 
 grid-gap: 12px;
 margin: 0 auto;

@media screen and (max-width: 728px) {
    {
        display:block;
        padding-bottom:15px;
    }
}

p{
    margin-top:35px;
    
}

`;

const BottomMain = styled.div`

    max-width:100%;

    @media screen and (max-width: 765px) {
    {
        padding:25px;
    }
}

`;


const About = () => {
    return (
        <>

            <RouteDetail route="ABOUT US" path="Home / About us" />

            <Main>
                <div className="about_main_desc">

                    <p>We specialise in providing tailored office design that works for you. Attractive office design isn’t enough. For a truly effective place to work, you need a combination of aesthetics and practicality. That’s why we create workspaces that not only look and feel great, but also allow businesses to thrive.For over 40 years we’ve crafted outstanding workspaces that truly make a difference. Our designs facilitate collaboration, inspire creativity, and deliver work environments that are perfectly suited to you and your team.
                    </p>
                    <p>Whether you're looking to modernise your work processes, move offices, or just need some expert advice – we’re here to provide the very best for your business.</p>
                    <p>
                        Atelier is a full service, award-winning interior design firm.Our designs are driven by vibrant color & pattern complimented with textural & sculptural details.With our eclectic style, anything global and cultural continues to inspire us. With over 20 years of experience, we’ve got the expertise to match our energetic approach. We travel, cherish family and understand modern lifestyles. Our team is full of laughter, while being serious about your project and its outcome.
                    </p>

                </div>

                <div className="about_main_header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '15px', paddingLeft: '15px' }}>
                    {/* <h2> Who We Are </h2> */}
                    <img src={client1} width="400" height="300" alt="Natural" style={{
                        outline: '1px solid white',
                        outlineOffset: '6px'
                    }} />
                </div>
            </Main>

            {/* <BottomMain>
                <div className="col-lg-12 customer">
                    <h3>Our Customer</h3>
                    <marquee behavior="scroll" direction="left" padding="15px" >
                        <img src={client1} width="250" height="180" alt="Natural" />
                        <img src={client2} width="250" height="180" alt="Natural" />
                        <img src={client3} width="250" height="180" alt="Natural" />
                        <img src={client4} width="250" height="180" alt="Natural" />
                        <img src={client5} width="250" height="180" alt="Natural" />
                    </marquee>
                </div>
            </BottomMain> */}

        </>
    )
}

export default About;
