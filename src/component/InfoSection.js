import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section`
width:100%;
height:100%;
padding:4rem 0rem;

@media screen and  (max-width:768px){
    padding: 0;
}
`;

const Container = styled.div`
padding:3rem calc((100vw-1300px)/2);
display:grid;
grid-template-columns:1fr 1.5fr;

@media screen and  (max-width:768px){
    grid-template-columns:1fr;
}
`;
const ColumnLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
padding:1rem 2rem;
order: ${({ reverse }) => (reverse ? '1' : '2')};

h1{
    margin-bottom:1rem;
    font-size:clamp(1.5rem,6vw,2rem);
    color: #f7f7f7;
    font-family: 'Oakes Grotesk';
    font-weight: 700;
}

p{
    margin-bottom:1rem;
    text-align: justify;
}

`;
const ColumnRight = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:1rem 2rem;
order: ${({ reverse }) => (reverse ? '2' : '1')};

@media screen and  (max-width:768px){
    order: ${({ reverse }) => (reverse ? '1' : '2')};
}

img{
    width:100%;
    height:90vh;
    object-fit:cover;

@media screen and  (max-width:768px){
    width:90%;
    height:100%;
    margin:1rem;
}
}

`;

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft style={{ color: 'white' }}>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/Gallery' primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection;

