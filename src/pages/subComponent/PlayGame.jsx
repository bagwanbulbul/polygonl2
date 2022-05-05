import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import playTopImg  from '../../assets/images/Asset 2@2x 4.png'
import playImgflag from '../../assets/images/Group 335.png'
function PlayGame() {
  return (
    <>
        <div className="playGame_section" id='play'>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col lg={12} className="px-0">
                    <img src={playTopImg} alt="green-img" className='img-fluid' />
                    </Col>
                    <Col lg={8}>
                        <div className="playGame_content">
                            <div className="playGame_header">PLAY <span>(</span>GENY+MIGRANT EDX<span>)</span></div>

                            <div className="playGame_connectWallet_btn1">
                                <button>CONNECT WALLET</button>
                            </div>

                            <div className="playGame_text">PLAY <span>(</span>GENX<span>)</span></div>

                            <div className="playGame_connectWallet_btn2">
                                <button>CONNECT WALLET</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} className="px-0">
                        <img src={playImgflag} alt="play_img" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default PlayGame