import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import '../index.css';

const HeroSection = styled.section`
height:100vh;
max-height:1100px;
position:relative;
overflow:hidden;

@media (max-width: 767px){
    height: 75vh;
} 
`;

const HeroWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;

`
const HeroSlide = styled.div`
z-index:1;
width:100%;
height:100%;
`;
const HeroSlider = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;

&::before{
    content:'';
    position:absolute;
    z-index:2;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.4;
    background:linear-gradient(0deg , rgba(0,0,0,0.2) 0% ,rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%  )

}`;

const HeroImage = styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:fill;
opacity: 0.5;

@media (max-width: 767px){
    height: 75vh;
} 
`;

const HeroContent = styled.div`
position:relative;
z-index:10;
display:flex;
flex-direction:column;
max-width:1600px;
width:calc(100%-100px); 
color:#fff;
opacity:1;

@media (max-width: 540px){
    max-width:550px;
    display:flex;
    margin: 0 auto;
} 

@media (max-width: 767px){
    max-width:250px;
    display:flex;
    margin: 0 auto;
} 

${`h1{
    font-size: 40px;
    text-align: center;
} `};

@media (max-width: 768px) {
    ${`h1{
        font-size: 30px;
        text-align: center;
    }`}
  }

${`p{
    max-width:1134px;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    align-items: center;
} `}

@media (max-width: 768px) {
    ${`p{
        max-width:425px;
        font-size: 15px;
        text-align: center;
    }`}
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
margin-left:10px;
`;

const SliderButtons = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    z-index:10;
`;

const arrowButtons = css`
position: absolute;
top: 50%;
left: 15px;
width:50px;
height:50px;
color:#fff;
cursor:pointer;
border-radius:50px;
background:#000;
padding:10px;
margin-right:1rem;
user-select:none;
transition:0.3s;

&:hover{
    background:#cd853f;
    transform:scale(1.05);
}
`;

const arrowButtonsR = css`
position: absolute;
top: 50%;
right: 15px;
width:50px;
height:50px;
color:#fff;
cursor:pointer;
border-radius:50px;
background:#000;
padding:10px;
margin-right:1rem;
user-select:none;
transition:0.3s;

&:hover{
    background:#cd853f;
    transform:scale(1.05);
}
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtonsR}
`;

const Hero = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        timeout.current = setTimeout(nextSlide, 100000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }
    }, [current, length]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt} />
                                    <HeroContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                    </HeroContent>
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    );
                })};
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero


