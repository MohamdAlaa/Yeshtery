import { Col, Row } from "antd";
import React from "react";

const Sections = () => {
return (
    <>
        <Row className="section-row">
            <div className="sections">
                    <Col className="section-col" span={2}>
                        <a className="section-link">Men</a>
                    </Col>
                    <Col className="section-col" span={2}>
                        <a className="section-link">Unisex</a>
                    </Col>
                    <Col className="section-col" span={2}>
                        <a className="section-link">Kids</a>
                    </Col>
                    <Col className="section-col" span={2}>
                        <a className="section-link">Best Sellers</a>
                    </Col>
                    <Col className="section-col" span={2}>
                        <a className="section-link">New Arrivals</a>
                    </Col>
                    <Col className="section-col" span={2}> 
                        <a className="section-link offers">Offers</a>
                    </Col>
            </div>
        </Row>
        <Row className="routs">
            <div>
                <p>Men / Clothing / Tops / Adidas /</p><span> Adidas Black T-Shirt</span>
            </div>
        </Row>
    </>
);
};

export default Sections;
