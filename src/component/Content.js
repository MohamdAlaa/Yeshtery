import { Col, Row } from "antd";
import {AiFillStar} from "react-icons/ai";
import React from "react";

const Content = () => {
return(
    <>
    <Row className="content-row">
        <Col span={10} className="content-col-right">
            <img className="img-main" src="images/main1.png"/>
        </Col>
        <Col span={8}>
            <div className="content">
                <div>
                    <img src="images/adidas2.svg"/>
                    <p className="specifications">Adidas black t-shirt lorem ipsum dolor sit<br/> amet, consectetuer adipiscing elit.</p>
                    <div className="ratr">
                    <AiFillStar className="stars"/>
                    <AiFillStar className="stars" />
                    <AiFillStar className="stars"/>
                    <AiFillStar className="stars"/>
                    <AiFillStar className="stars"/>
                    <span className="evaluation">5 of 5</span> <span className="rate-num">22 Ratrs</span>
                    </div> 
                </div>
                <div className="rate-div">
                    <p className="price">9,999 LE</p> <div className="descount-dev"><span className="descount">30% Off</span></div>
                </div>
                <div className="size-container">
                    <h4 className="size">Size</h4>
                    <div className="size-num">
                        <span className="size-val-sm">Small</span>
                        <span className="size-val">Meduim</span>
                        <span className="size-val">Larg</span>
                        <span className="size-val">X-larg</span>
                        <span className="size-val">XX-Larg</span>
                    </div>
                    
                </div>
                <div>
                    <h4 className="color">Color</h4>
                    <div>
                        <img className="main-black" src="images/mainblack.png"/>
                        <img className="main-red" src="images/mainred.png"/>
                    </div>
                    
                </div>
            </div>
        </Col>
    </Row>
    </> 
);
};

export default Content;
