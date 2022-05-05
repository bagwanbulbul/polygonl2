import React from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import metamask from '../../assets/images/metamask.svg'
import walletconnent from '../../assets/images/walletconnent.svg'
import coinbase from '../../assets/images/coinbase-wallet.svg'
function ConnectWalletModal(props) {
  return (
    <div>
         <Modal show={props.show} onHide={props.handleClose} size="lg" className='connectWallet' centered>
                
                <Modal.Body className="connectWallet_modal_body">
                    <Container fluid>
                        <Row >
                            <Col lg={6} className="metamask_div">
                                <div className='bear_game_connectWallet_metamask'>
                                    <div className="metamsk_img">
                                        <img src={metamask} alt="metamask" />
                                    </div>
                                    <div className="head">MetaMask</div>
                                    <div className="description">Connect to your MetaMask Wallet</div>
                                </div>
                            </Col>
                            <Col lg={6} className="walletconnent_div">
                                <div className='bear_game_connectWallet_metamask'>
                                    <div className="metamsk_img">
                                        <img src={walletconnent} alt="metamask" />
                                    </div>
                                    <div className="head">WalletConnect</div>
                                    <div className="description">Scan with WalletConnect to connect</div>
                                </div>
                            </Col>
                            <Col lg={6} className="coinbase_div">
                                <div className='bear_game_connectWallet_metamask'>
                                    <div className="metamsk_img">
                                        <img src={coinbase} alt="metamask" />
                                    </div>
                                    <div className="head">Coinbase Wallet</div>
                                    <div className="description">Scan with Coinbase Wallet to connect</div>
                                </div>
                            </Col>

                        </Row>
                       
                    </Container>
                </Modal.Body>

            </Modal>
    </div>
  )
}

export default ConnectWalletModal