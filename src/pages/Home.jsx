import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ConnectWalletModal from './popupModal/ConnectWalletModal';
import HuntersModal from './popupModal/HuntersModal';
import MintModal from './popupModal/MintModal'
import StoryLineModal from './popupModal/StoryLineModal';
import WhitePaperModal from './popupModal/WhitePaperModal';
import {Link} from 'react-router-dom'
export default function Home() {
     // ==================== StoryLinePopup =======================
     const [storyLine, setStoryLine] = useState(false);
     const storyLineClose = () => setStoryLine(false);
     const storyLineShow = () => setStoryLine(true);

     // ==================== WhitePaperPopup =======================
     const [whitePaper, setWhitePaper] = useState(false);
     const whitePaperClose = () => setWhitePaper(false);
     const whitePaperShow = () => setWhitePaper(true);

    // ==================== HunterCubPopup =======================
    const [hunterCub, setHunterCub] = useState(false);
    const hunterCubClose = () => setHunterCub(false);
    const hunterCubShow = () => setHunterCub(true);

      // ==================== MintPopup =======================
      const [mint, setMint] = useState(false);
      const mintClose = () => setMint(false);
      const mintShow = () => setMint(true);

       // ==================== MintPopup =======================
       const [connectWallet, setConnectWallet] = useState(false);
       const connectWalletClose = () => setConnectWallet(false);
       const connectWalletShow = () => setConnectWallet(true);
  
    return (
        <>
            <section className='bear_game_home_section'>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className='bear_game_Home_Header'>
                                <div className='bear_game_title'>
                                    <h1>Bear Game</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <div className='bear_game_Home_Description'>
                                <div className='bear_game_Home_Description_text'>
                                    Forty thousand fisherman and ten thousand bears compete in the meta-prairies. An alluring prize of $TROUT awaits, however this is not without danger as the two species compete to the death to be victorious.
                                </div>
                                <div className='bear_game_Home_Description_btn1 '>
                                    <button onClick={storyLineShow}>Story Line</button>
                                    <button onClick={whitePaperShow}>Whitepaper</button>
                                </div>
                                <div className="bear_game_Home_Description_btn2">
                                    <button onClick={hunterCubShow}>Hunters vs Cubs</button>
                                    <Link to="/bear" style={{textDecoration:"none"}}><button>Polygon L2</button></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="d-flex justify-content-end">
                                <div className="bear_game_Home_joinGame">
                                    <div className='bear_game_Home_joinHeader'>
                                        <div className='bear_game_joinTitle'>
                                            <h1>Join The Game</h1>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="bear_game_home_meter">
                                            <span id="progress-bar" style={{ width: "28.158%" }}></span>

                                            <div className='bear_game_home_genY'>
                                                <h3 id="gen-id">Gen Y</h3>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="bear_game_amount_minted">14079/17000 Minted</div>
                                    <div className="mint-selectors">
                                        <div className="selector">
                                            <div onclick="onMinusClick()" className="qty">
                                                <span style={{ marginTop: "-3px ", fontSize: "20px" }}>-</span>
                                            </div>
                                            <input id="qty-input" readonly="" type="number" value="1" className="amount" />

                                            <div onclick="onPlusClick()" className="qty">
                                                <span style={{ marginTop: "-3px ", fontSize: "20px" }}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bear_game_price_token">Current cost: 20,000 $TROUT per token.</div>
                                    <div className="bear_game_mintToken_btn">
                                        <button onClick={mintShow}>Mint 1 Token</button>
                                    </div>
                                </div>
                            </div>


                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <div className="bear_game_Home_wallet">
                                <div className='bear_game_Home_walletHeader'>
                                    <div className='bear_game_walletTitle'>
                                        <h1>Your Wallet</h1>
                                    </div>
                                </div>
                                <div className="bear_game_Home_connected">
                                    Connected: Not connected.
                                </div>
                                <div className="bear_game_Home_totalCatches">
                                    Your total catches: 0 $TROUT
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className='d-flex justify-content-end'>
                                <div className="bear_game_Home_playGame">
                                    <div className='bear_game_Home_playGameHeader'>
                                        <div className='bear_game_playGameTitle'>
                                            <h1>Play (GenY + Migrated X)</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_Home_connectWalletBtn">
                                        <button onClick={connectWalletShow}>Connect Wallet</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <div className=''>
                                <div className="bear_game_Home_playGame">
                                    <div className='bear_game_Home_playGameHeader'>
                                        <div className='bear_game_playGameTitle'>
                                            <h1>Play (GenX))</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_Home_connectWalletBtn">
                                        <button onClick={connectWalletShow}>Connect Wallet</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <StoryLineModal show ={storyLine} handleClose={storyLineClose}/>
            <WhitePaperModal show ={whitePaper} handleClose={whitePaperClose}/>
            <HuntersModal show ={hunterCub} handleClose={hunterCubClose} />
            <MintModal show ={mint} handleClose={mintClose} />
            <ConnectWalletModal show ={connectWallet} handleClose={connectWalletClose}/>

        </>
    )
}
