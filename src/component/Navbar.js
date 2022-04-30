import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import MenuData from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.png';
import '../index.css';


const Nav = styled.nav`
height:90px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
width:100%; 
background:transparent;
z-index: 30;
position: fixed;
transition: 0.8s all ease
   
`;

const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
font-weight:600;
text-decoration:none;
font-size: 14px;

`;

const Logo = styled(Link)`
${NavLink}
font-style:italic;
`;


const MenuBars = styled(FaBars)`
    display:none;
    height: 30px;
    color: #fff;
    cursor:pointer;

    @media screen and (max-width: 768px){
    display:block;
}
`;

const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-48px;

@media screen and (max-width: 768px){
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink};

&:hover{
  transition: all ease-in-out .2s;
  color: #fff;
  border-bottom: 1px solid #feb70e;
    
}

&:active{
 border-bottom: 1px solid #fff;
}

`;

const NavBtn = styled.div`
 display:flex;
 align-items:center;
 border:2px solid #ffc451;
 margin-right:48px;
 display:flex;

 @media screen and (max-width: 768px){
    display:none;
}
`;


const Navbar = ({ toggle }) => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY > 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


    return (
        <>
            <div id="myHeaderDiv">
                <Nav className={colorChange ? 'navbar colorChange' : 'navbar'} >
                    <Logo to='/'><img src={logo} alt="logo" width='100px' ></img></Logo>
                    <MenuBars onClick={toggle} />
                    <NavMenu >

                        {MenuData.map((item, index) => {
                            return (
                                <NavMenuLinks to={item.link} key={index}>
                                    {item.title}
                                </NavMenuLinks>
                            );
                        })
                        }
                    </NavMenu>
                    <NavBtn>
                        <Button to='/Contact' style={{
                            color: 'white', fontWeight: '600', textTransform: 'uppercase', fontSize: '12px'
                        }} >Contact Us</Button>
                    </NavBtn>
                </Nav>
            </div>
        </>
    )
}

export default Navbar;