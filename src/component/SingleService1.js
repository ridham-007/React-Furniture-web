import React from 'react';
import client1 from '../images/client1.jpg';
import RouteDetail from './RouteDetail';
import styled from 'styled-components/macro';
import '../index.css';


const Main = styled.div`
 width: 100%;
 display: flex;
 max-width: 1100px; 
 grid-gap: 8px;
 margin: 0 auto;

@media screen and (max-width: 728px) {
    {
        display:block;
        padding-bottom:15px;
    }
}
`;

const AboutMain = styled.div`
 width: 100%;
 display: flex;
 max-width: 1100px;
 margin: 0 auto;
 display: flex-start;

 @media screen and (max-width: 912px) {
    {
        margin-left: 20px;
        padding-top: 20px;
    }
}
`;

const SingleService1 = () => {
    return (
        <>
            <RouteDetail route="SERVICES" path="Home /Service/ Turnkey Service" />
            <AboutMain className='about_main_head'>
                <h3><b>INTERIOR DESIGN</b></h3><br />
            </AboutMain>
            <Main>
                <div className="about_main_desc">

                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                    </p>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                    </p>

                </div>

                <div className="about_main_header" >
                    {/* <h2> Who We Are </h2> */}
                    <img src={client1} width="300" height="200" alt="Natural" />
                </div>
            </Main>
        </>
    )
}

export default SingleService1;
