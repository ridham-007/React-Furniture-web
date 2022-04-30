import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
width:100vw;
height:100%;
padding:5rem calc((100vw - 1300px)/2);
background:#E8E8E8;
color:#000;
`;

const ProductWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto;

`;

const ProductCard = styled.div`
margin:0 2rem;
width:300px;
`;

const ProductImg = styled.img`
height:300px;
min-width:300px;
max-width:100%;
box-shadow: 8px 8px #fdc500;
`;

const ProductsHeading = styled.h1`
font-size:25px;
text-align:center;
margin-bottom:5rem;
`;

const ProductTitle = styled.h2`
font-weight:600;
font-size:19px;
margin-bottom:10px;
`;

const ProductInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
text-align:center;
`;

const ProductDesc = styled.p`
margin-bottom:1rem;
`;

const ProductPrice = styled.p`
margin-bottom:1rem;
font-size:2rem;
`;

const ProductButton = styled.button`
font-size:1rem;
padding:1rem 4rem;
border:none;
background:#e31837;
color:#fff;
transition:0.2 ease-out;
&:hover{
    background:#ffc500;
    transition:0.2 ease-out;
    cursor:pointer;
    color:#000;
}   
`;

const Product = ({ heading, data }) => {
    return (
        <ProductContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {
                    data.map((product, index) => {
                        return (
                            <ProductCard key={index}>
                                <ProductImg src={product.img} alt={product.alt} />
                                <ProductInfo>
                                    <ProductTitle>{product.name}</ProductTitle>
                                    <ProductDesc>{product.desc}</ProductDesc>
                                    <ProductPrice>{product.price}</ProductPrice>
                                    <ProductButton>{product.button}</ProductButton>
                                </ProductInfo>
                            </ProductCard>
                        )
                    }
                    )}
            </ProductWrapper>
        </ProductContainer>
    )

}

export default Product;