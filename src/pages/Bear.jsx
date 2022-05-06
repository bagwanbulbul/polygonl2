import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../common/Header'
import fisherMen from '../assets/images/Screenshot_50.png'
import bear from '../assets/images/Screenshot_49.png'
import JoinGame from './subComponent/JoinGame'
import PlayGame from './subComponent/PlayGame'
import { Link } from 'react-router-dom'


function Bear() {

    var wallet_adderess = sessionStorage.getItem("loginUserAdd")
    console.log("wallet_adderess", wallet_adderess)
    return (
        <>
            <div className='bear_home'>
                <Header />

                <div className="bear_game_heroSection">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={8}>
                                <div className="bear_game_hero_content">

                                    <div className="bear_game_hero_title">BEAR GAME</div>

                                    <div className="bear_game_hero_description">
                                        Forty thousand fishermen and ten thousand bears complete in  the meta-prairies.
                                        An alluring price of $TROUT awaits, however this is not without danger as the two
                                        species complete to the death to be victorious.
                                    </div>
                                    <div className="bear_game_hero_btns ">
                                        <button>STORYLINE</button>
                                        <button>WHITEPAPER</button>
                                        {wallet_adderess ?
                                            <Link to="/polygon"><button>BRIDGING</button></Link>
                                            :
                                            <div></div>
                                        }

                                    </div>


                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="bear_game_hero_images">
                                    <div className="fisherMen_img">
                                        <img src={fisherMen} alt="fishermen" className='img-fluid' />
                                    </div>
                                    <div className="bear_img">
                                        <img src={bear} alt="bear" className='img-fluid' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <JoinGame />
            <PlayGame />
        </>
    )
}

export default Bear