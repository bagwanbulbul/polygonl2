import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import ethereum from '../../assets/images/eth_big.png'
import banana from '../../assets/images/banana.png'
import {MdSwapVerticalCircle} from 'react-icons/md'

import Web3 from "web3";


const config = require("../../config.json")
const WalletConnectProvider = require ("@maticnetwork/walletconnect-provider");
const MaticPoSClient = require("@maticnetwork/maticjs").MaticPOSClient;
// const Network = require("@maticnetwork/meta/network");
// const Matic = require("@maticnetwork/maticjs");


function DepositBananaModal(props) {

    useEffect(() => {
        loadWeb3();
        loadBlockchainData();
      }, []);

    const [ethtopolygon, setEthtopolygon] = useState("")
    const [maticProvider, setMaticProvider] = useState();

    // let content;
    const [Networkid, setNetworkid] = useState(0);
    const [account, setAccount] = useState("");
    const [loading, setLoading] = useState(true);
    // const [inputValue, setInputValue] = useState("");
    // const [burnHash, setBurnHash] = useState("");
    const [ethereumprovider, setEthereumProvider] = useState();


    const loadWeb3 = async () => {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
        } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
        } else {
          window.alert(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
          );
        }
      };
    

    // posClientGeneral facilitates the operations like approve, deposit, exit

    const loadBlockchainData = async () => {
        setLoading(true);
        const maticProvider = new WalletConnectProvider({
          host: config.MATIC_RPC,
          callbacks: {
            onConnect: console.log("matic connected"),
            onDisconnect: console.log("matic disconnected!"),
          },
        });
    
        const ethereumProvider = new WalletConnectProvider({
          host: config.ETHEREUM_RPC,
          callbacks: {
            onConnect: console.log("mainchain connected"),
            onDisconnect: console.log("mainchain disconnected"),
          },
        });
    
        setMaticProvider(maticProvider);
        setEthereumProvider(ethereumProvider);
        const web3 = window.web3;
    
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const networkId = await web3.eth.net.getId();
    
        setNetworkid(networkId);
    
        if (networkId === config.ETHEREUM_CHAINID) {
          setLoading(false);
        } else if (networkId === config.MATIC_CHAINID) {
          setLoading(false);
        } else {
          window.alert(" switch to  Matic or Ethereum network");
        }
      };
      // posClientGeneral facilitates the operations like approve, deposit, exit
      const posClientParent = () => {
        const maticPoSClient = new MaticPoSClient({
          network: config.NETWORK,
          version: config.VERSION,
          maticProvider: maticProvider,
          parentProvider: window.web3,
          parentDefaultOptions: { from: account },
          maticDefaultOptions: { from: account },
        });
        return maticPoSClient;
      };
      // posclientBurn facilitates the burning of tokens on the matic chain
      const posClientChild = () => {
        const maticPoSClient = new MaticPoSClient({
          network: config.NETWORK,
          version: config.VERSION,
          maticProvider: window.web3,
          parentProvider: ethereumprovider,
          parentDefaultOptions: { from: account },
          maticDefaultOptions: { from: account },
        });
        return maticPoSClient;
      };

    const depositERC20 = async () => {
        const maticPoSClient = posClientParent();
        const maticChildPoSClient = posClientChild();
        console.log("ethtopolygon",ethtopolygon)
        const x = ethtopolygon * 1000000000000000000; // 18 decimals
        const x1 = x.toString();
        await maticPoSClient.approveERC20ForDeposit(config.posRootERC20, x1, {
          from: account,
        });
        await maticPoSClient.depositERC20ForUser(config.posRootERC20, account, x1, {
          from: account,
        });
      };

    return (
        <>

            <Modal show={props.show} onHide={props.handleClose} className="depositBanana">
                <Modal.Header className="depositBanana_modal_header">
                    <div onClick={props.handleClose} class="modal-close">✖</div>
                </Modal.Header>
                <Modal.Body className="depositBanana_modal_body">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="deposit_content">
                                    <div className="deposit_head">Deposit</div>

                                    <div className="deposit_text">Enter the amount you want to deposit from Mainnet to Polygon</div>

                                    <div className="deposit_from">From</div>

                                    <div className="deposit_mainnet">MAINNET</div>

                                    <div className="deposit_input_field">
                                        <input type="text" placeholder='0' onChange={e=>setEthtopolygon(e.target.value)} />
                                        <div className="deposit_max_div">
                                            <div className="max text-white">MAX</div>
                                            {/* <img src={banana} alt="banana" className='img-fluid' /> */}
                                            <img src={ethereum} alt="polygon" className='img-fluid' />
                                        </div>
                                    </div>

                                    <div className="available_balance">AVAILABLE BALANCE: {props.text}</div>

                                    <div className="switch">
                                        <div className="switch_img">
                                            <MdSwapVerticalCircle/>
                                        </div>
                                        <div className="switch_text">SWITCH</div>
                                    </div>

                                    <div className="deposit_to">To</div>

                                    <div className="deposit_polygon">POLYGON</div>

                                    <div className="deposit_input_field">
                                        <input type="text" value= {ethtopolygon} disabled /> 
                                        <div></div>
                                        <div className="deposit_max_div">
                                           
                                            {/* <img src={banana} alt="banana" className='img-fluid' /> */}
                                            <img src={ethereum} alt="polygon" className='img-fluid' />
                                        </div>
                                    </div>

                                    <div className="available_balance">AVAILABLE BALANCE: 0.0000</div>

                                    <div className="deposit_bridge">
                                        <button className='bridge_btn'  onClick={depositERC20}>BRIDGE</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

            </Modal>

        </>
    )
}

export default DepositBananaModal