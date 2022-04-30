import React from 'react';
import styled from 'styled-components/macro';
import service1 from '../images/client1.jpg';
import RouteDetail from '../component/RouteDetail';
import { useNavigate } from 'react-router-dom';

const Main = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: repeat(1, 1fr);
 max-width: 1200px; 
 grid-gap: 8px;
 margin: 0 auto;

 img{
     outline: 1px solid white;
     outline-offset: 6px;
 }

 h4{
    text-align: center;
    color: #feb70e;
    font-family: Roboto;
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
    margin: 25px 10px;
 }

 @media screen and (max-width: 728px) {
    {
        grid-template-columns: repeat(1, 1fr);
    }
}
 @media screen and (min-width: 728px) {
    {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 1100px)  {
    {
        grid-template-columns: repeat(3, 1fr);
    }
}

`;

const ImageBox = styled.div`
    
    padding-left: 15px;
    padding-right: 15px;
    box-sizing:border-box;
    margin-top: 50px;
    text-align: center;
    cursor:pointer;

    @media screen and (max-width: 768px){
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0;
    margin-top: 20px;
    align-items: center;

}

    @media screen and (max-width: 913px){
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0;
    margin-top: 20px;
    align-items: center;
`;

const Services = () => {

    const navigate = useNavigate();

    return (
        <>
            <RouteDetail route="SERVICES" path="Home / Service" />
            <Main>
                <ImageBox>
                    <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice')}></img>
                    <h4 onClick={() => navigate('/singleservice')}>Interior Services</h4>
                </ImageBox>
                <ImageBox >

                    <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice1')}></img>

                    <h4 onClick={() => navigate('/singleservice')}>TURNKEY SERVICES</h4>
                </ImageBox>
                <ImageBox >

                    <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice2')}></img>

                    <h4 onClick={() => navigate('/singleservice')}>FURNITURE AND SOFA</h4>
                </ImageBox>
            </Main>
        </>
    )
}

export default Services;
