import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Offcanvas,Modal } from 'react-bootstrap'
import polygonIcon from '../assets/images/polygon-icon.png'
import { AiOutlineClose } from 'react-icons/ai'
import { MdSwapHorizontalCircle } from 'react-icons/md'
import banana from '../assets/images/banana.png'
import kongz from '../assets/images/kong_vx.png'
import shardz from '../assets/images/shardz.png'
import ethereum from '../assets/images/eth.png'
import polygon from '../assets/images/polygon1.png'
import DepositBananaModal from './popupModal/DepositBananaModal'
import Web3 from "web3";
import { contactAddressTroutEth, abiTrouthEth } from '../contract/trout_eth';
import { contractAddressTroutPolygon, abiTroutPolygon } from '../contract/trout_polygon';


const web3_Stake = new Web3(window.ethereum);

const TROUT_ETH_CONTRACT = new web3_Stake.eth.Contract(abiTrouthEth, contactAddressTroutEth);
console.log("TROUT_ETH_CONTRACT", TROUT_ETH_CONTRACT)

const TROUT_POLYGON_CONTRACT = new web3_Stake.eth.Contract(abiTroutPolygon, contractAddressTroutPolygon);
console.log("TROUT_POLYGON_CONTRACT", TROUT_POLYGON_CONTRACT)


function Polygon() {
    // ========== Polygon offCanvas modal=========
    const [showCanvas, setShowCanvas] = useState(false);
    const closeOffCanvas = () => setShowCanvas(false);
    const showOffCanvas = () => setShowCanvas(true);

   // ========== Deposit Banana modal=========
    const [showDeposit, setShowDeposit] = useState(false);
    const handleCloseDeposit = () => setShowDeposit(false);
    const handleShowDeposit = () => setShowDeposit(true);

    const [trout_eth_balance, setTrout_eth_balance]= useState("")
    const [trout_polygon_balance, setTrout_polygon_balance]= useState("")
    var wallet_adderess = sessionStorage.getItem("loginUserAdd")
    // var wallet_adderess = "0xAA737Df2b2C4175205Af4644cb4e44d7b9CeE5D4"


   useEffect(()=>{
        console.log("reload")
        if (wallet_adderess != null || wallet_adderess != undefined) {
            TROUT_ETH_CONTRACT.methods.balanceOf(wallet_adderess)
                .call({from: wallet_adderess})
                .then(async function (info) {
                    console.log('success ', info);
                    const trout_eth_balance = Web3.utils.fromWei(info, 'ether');
                    setTrout_eth_balance(trout_eth_balance)
                }).catch((err) => {
                    console.log('eror ', err);
            })

            // TROUT_POLYGON_CONTRACT.methods.balanceOf(wallet_adderess)
            //     .call({from: wallet_adderess})
            //     .then(async function (info) {
            //         console.log('success ', info);
            //         const trout_polygon_balance = Web3.utils.fromWei(info, 'ether');
            //         setTrout_polygon_balance(trout_polygon_balance)
            //     }).catch((err) => {
            //         console.log('eror ', err);
            // })
        }
   },[])
    return (
        <>
            <div className="polygon_section">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <div className="polygon_bg mt-5 ">
                                <div className="polygon_icon">
                                    <img src={polygonIcon} alt="polygon" className='img-fluid' onClick={showOffCanvas} />

                                    <div className="polygon_overlayText">
                                        <div className="polygon_head">Polygon Bridge</div>
                                        <div className="polygon_text">Transfer your assets between Ethereum and Polygon! </div>
                                    </div>

                                </div>
                                <Offcanvas show={showCanvas} onHide={closeOffCanvas} className="polygon_offCanvas" placement={"end"}>
                                    {/* <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header> */}
                                    <Offcanvas.Body>
                                        <Container>
                                            <Row>
                                                <Col lg={12}>
                                                    <div className='closeBtn' onClick={closeOffCanvas}>
                                                        <AiOutlineClose />
                                                    </div>

                                                    <div className="polygon_image">
                                                        <img src={polygonIcon} alt="polygon" className='img-fluid' />
                                                    </div>

                                                    <div className="polygon_head">Polygon Bride</div>

                                                    <div className="polygon_subhead">ETHEREUM/POLYGON Bridge</div>

                                                    <div className="polygon_text1">Transfer your assets between Ethereum and Polygon. Depositing assets from the Ethereum mainnet to the Polygon takes one transaction (Deposit) and ~7 to 30 minutes. If you decide to withdraw your assets back to Ethereum, it takes two transactions (Withdraw/Exit) and up to 10 hours.</div>

                                                    <div className="polygon_text2">You can track your withdrawal verification status and confirm the exit transaction via the Automatic Polygon Exit or the Manual Polygon Exit.</div>
                                                    <hr />
                                                  
                                                    <div className="polygon_table">
                                                        <table className='table table-borderless'>
                                                            <thead>
                                                                <tr>
                                                                    <td>
                                                                        <div className="asset">Asset</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="ethereum">Ethereum</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="polygon">Polygon</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="bridge">Bridge</div>
                                                                    </td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="asset_col1">
                                                                            {/* <div className="banana_img">
                                                                                <img src={banana} alt="banana" className='img-fluid' />
                                                                            </div> */}
                                                                            <div className="text">TROUT</div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="ethereum_col">
                                                                            <div className="ethereum_img">
                                                                                <img src={ethereum} alt="ethereum" className='img-fluid' />
                                                                            </div>
                                                                            <div className='zero'>{trout_eth_balance}</div>
                                                                        </div>

                                                                    </td>
                                                                    <td>
                                                                        <div className="polygon_col">
                                                                            <div className="polygon_img">
                                                                                <img src={polygon} alt="polygon" className='img-fluid' />
                                                                            </div>
                                                                            <div className='zero'>0</div>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className="bridge_col">
                                                                            <div className="swap_img">
                                                                                <MdSwapHorizontalCircle onClick={handleShowDeposit} />
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                              {/*  <tr>
                                                                    <td>
                                                                        <div className="asset_col2">
                                                                             <div className="banana_img">
                                                                                <img src={kongz} alt="banana" className='img-fluid' />
                                                                            </div> 
                                                                            <div className="text">CUBS</div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="ethereum_col">
                                                                            <div className="ethereum_img">
                                                                                <img src={ethereum} alt="ethereum" className='img-fluid' />
                                                                            </div>
                                                                            <div className='zero'>0</div>
                                                                        </div>

                                                                    </td>
                                                                    <td>
                                                                        <div className="polygon_col">
                                                                            <div className="polygon_img">
                                                                                <img src={polygon} alt="polygon" className='img-fluid' />
                                                                            </div>
                                                                            <div className='zero'>0</div>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className="bridge_col">
                                                                            <div className="swap_img">
                                                                                <MdSwapHorizontalCircle />
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="asset_col3">
                                                                             <div className="shard_img">
                                                                                <img src={shardz} alt="banana" className='img-fluid' />
                                                                            </div> 
                                                                            <div className="text">FISHERMAN</div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="ethereum_col">
                                                                            <div className="ethereum_img">
                                                                                <img src={ethereum} alt="ethereum" className='img-fluid' />
                                                                            </div>
                                                                            <div className='zero'>0</div>
                                                                        </div>

                                                                    </td>
                                                                    <td>
                                                                        <div className="polygon_col">
                                                                            <div className="polygon_img">
                                                                                <img src={polygon} alt="polygon" className='img-fluid' />
                                                                            </div>
                                                                            <div className='zero'>0</div>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className="bridge_col">
                                                                            <div className="swap_img">
                                                                                <MdSwapHorizontalCircle />
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                </tr>*/}
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className="polygon_bottom_text">
                                                        <div className="automatic">Automatic Polygon Exit</div>
                                                        <div className="manual">Manual Polygon Exit</div>
                                                    </div>
                                                    <hr/>
                                                    <div className="polygon_transaction_history">Transaction History</div>
                                                    <div className="polygon_comingSoon">Coming soon</div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ===============Deposit Modal start===============  */}
                <DepositBananaModal show={showDeposit} handleClose={handleCloseDeposit} text={trout_eth_balance}/>
            {/* ===============Deposit Modal end===============  */}
        </>
    )
}

export default Polygon