import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components/macro';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../index.css';

const MainFooter = styled.div`
  color: white;
  background-color: #43474d;
  padding-top: 3em;
  position: relative;
  bottom: 0;
  width: 100%;
  clear: both;

  @media screen and (max-width: 728px) {
    {
       padding-top: 0em;
    }
}
`;

const Footer = () => {
    const executeScroll = () => {
        document.getElementById('myHeaderDiv').scrollIntoView();
    }
    return (
        <MainFooter>
            <div className="container">
                <div className="row m-footer">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Furtine</h4>
                        <ui className="list-unstyled">
                            <li>A241, Amrkunj Soc,</li>
                            <li>Parmukh Chaya Road, Yogi Chowk,</li>
                            <li>Varachha, Surat, Gujarat-395006</li>
                            <li><span>Phone</span>: +91 97221 50272</li>
                            <li>sweatmanipvc@gmail.com</li>
                        </ui>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                        <h4>Links</h4>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" className="navlink" onClick={executeScroll}>Home</NavLink></li>
                            <li><NavLink to="/About" className="navlink" onClick={executeScroll}>About</NavLink></li>
                            <li><NavLink to="/Gallery" className="navlink" onClick={executeScroll}>Gallery</NavLink></li>
                            <li><NavLink to="/Contact" className="navlink" onClick={executeScroll}>Contact</NavLink></li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Our Product</h4>
                        <ui className="list-unstyled">
                            <li>TV SET</li>
                            <li>Sofa Chair</li>
                            <li>Door</li>
                            <li>Dining Table</li>
                            <li>BedRoom</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Our Newsletter</h4>
                        <ui className="list-unstyled">
                            <li>Our goal is to follow our values and give the best and user friendly solution to the customer.We just follow a tag line "You think , We build".

                            </li>
                        </ui>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <p className="col-sm text-center">
                        &copy;{new Date().getFullYear()} SweatMani PVC | All rights reserved |
                        Designed By Artrue
                    </p>
                </div>
            </div>
        </MainFooter>
    );
}

export default Footer;