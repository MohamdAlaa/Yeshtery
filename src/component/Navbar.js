import React from "react";
import { Col, Row } from 'antd';
import {RiMenu2Fill} from 'react-icons/ri';
import {FiPhoneCall} from 'react-icons/fi'
import {SlBasket} from 'react-icons/sl'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'


const Navbar = () => {
return (
    <>
        <Row className="nav">
            
            <Col span={7} >
                <div className="logo">
                    <RiMenu2Fill className="menu" />
                    <img src="images/yeshtery.svg" alt=""/>
                </div>
            </Col>
            <Col span={8}>
                <div className="offer">
                    <AiOutlineLeft className="left"/>
                <p className="free">Valentine's Day Offers! Buy Two Get One One Free <span className="shop">Shop Now</span></p>
                <AiOutlineRight className="right"/>
                </div>  
            </Col>
            <Col span={9} className="info">
                <button className="contact">
                    <FiPhoneCall className="info-icon"/> 
                    <span > Contact Us</span>
                </button>
                <button className="order">
                <SlBasket className="info-icon"/> <span>Tract order</span>
                </button>
                <button className="store">
                <HiOutlineLocationMarker className="info-icon"/> <span>Find A Store</span>
                </button>
            </Col>
            
        </Row>
    </>
);
};

export default Navbar;
