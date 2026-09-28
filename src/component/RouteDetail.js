import React from "react";
import '../index.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import main from '../images/2076086.webp';

const PageRoute = styled.div`
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),url(${main});
  background-position: center center;
  display: flex;
  color: #fff;
  padding: 30px;
  padding-bottom: 10px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-top: 80px;

  h2{
    display: flex;
    flex: 1 2 50%;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;

    @media screen and  (max-width:768px){
        flex: 1 2 30%;
        font-size: 18px;
    }
    }
    
`;

const PageMain = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    margin: 0 auto;

`;

const PathTop = styled.div`
  display: flex;
  align-self: flex-end;
  opacity:1;
  font-size: 10px;

@media screen and  (max-width:768px){
    font-size: 8px;
}

`;

const Path = styled.div`
letter-spacing: 1px;
text-transform: uppercase;
cursor: ${props => (props.isClickable ? 'pointer' : 'default')};
color: ${props => (props.isClickable ? '#ffffff80' : 'default')};
&:hover {
    color: ${props => (props.isClickable && 'white')};
  }
`;



const RouteDetail = (props) => {
    const navigate = useNavigate();

    const pathArray = props?.path?.split(`/`);

    const handleClick = (path) => {
        if (path === 'Home ') {
            navigate(`/`);
        } else {
            navigate(`/${path}`);
        }
    }
    return (
        <>
            <PageRoute>
                <PageMain>
                    <h2>{props.route}</h2>
                    <PathTop >
                        {pathArray?.map((route, index) => (
                            <Path isClickable={index < pathArray.length - 1} onClick={index < pathArray.length - 1 ? () => handleClick(route) : () => {/* nothing to do */ }}>
                                {route}{index < pathArray.length - 1 && '/'}
                            </Path>
                        ))
                        }
                    </PathTop>
                </PageMain>
            </PageRoute>
        </>
    )

}

export default RouteDetail;