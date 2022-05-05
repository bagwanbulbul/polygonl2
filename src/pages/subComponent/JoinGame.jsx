import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cloud from '../../assets/images/Screenshot_51.png'
import greenImg1 from '../../assets/images/Asset 1@2x 1.png'

function JoinGame() {
    return (
        <>
            <div className="joinGame_section">
                <div className="joinGame_cloudImages">
                    <img src={cloud} alt="cloud" className='img-fluid top_right_cloud' />
                    <img src={cloud} alt="cloud" className='img-fluid middle_left_cloud' />
                    <img src={cloud} alt="cloud" className='img-fluid bottom_center_cloud' />
                </div>
                <Container fluid>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <div className="joinGame_content">
                                <div className="joinGame_head">JOIN THE GAME</div>

                                <div className="joinGame_gen_text">1st Gen</div>

                                <div className="joinGame_minted_number">1000/10,000 <span>minted</span></div>

                                <div className="joinGame_mint-selectors">
                                    <div className="selector">
                                        <div onclick="onMinusClick()" className="qty">
                                            <span style={{ marginTop: "-8px ", fontSize: "50px" }}>-</span>
                                        </div>
                                        <input id="qty-input" readonly="" type="number" value="1" className="amount" />

                                        <div onclick="onPlusClick()" className="qty">
                                            <span style={{ marginTop: "-6px ", fontSize: "50px" }}>+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="joinGame_unitPrice">unit price : <span>$TROUT</span></div>

                                <div className="joinGame_mintBtn">
                                    <button>MINT</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="px-0">
                            <div className="joinGame_bottom_images">
                                <img src={greenImg1} alt="green-img" className='img-fluid' />
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default JoinGame