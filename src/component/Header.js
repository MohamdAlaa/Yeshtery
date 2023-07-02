import { Col, Row } from "antd";
import {AiOutlineHeart,AiOutlineUser} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs';
import React from "react";

const Header = () => {
return(
    <>
    <Row className="header">
        <Col span={8}>
            {/* <form>
                <BsSearch/>
                <input className="search-input" type="text" placeholder="Search"/>
            </form> */}
        </Col>
        <Col className="img-adidas" span={8}>
            <img src="images/adidas2.svg" alt=""/>
        </Col>
        <Col span={8} className="header-right">
            <button className="cart-btn">
                <img className="cart-img" src="images/cart.svg" alt=""/>
                <span className="cart">Cart</span>
            </button>
            <button className="whishlist-btn">
            {/* <img src="images/cart.svg" alt=""/> */}
                <AiOutlineHeart className="Heart-icon"/>
                <span className="whislist">Whislist</span>
            </button>
            <button className="login-btn">
                {/* <img src="images/login.svg" alt=""/>  */}
                <AiOutlineUser className="login-icon"/>
                <span className="login">Login</span>
            </button>
        </Col>
    </Row>
    </>
)};

export default Header;
