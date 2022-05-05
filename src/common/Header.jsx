// import React from 'react'
import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Navbar, Nav, Modal } from 'react-bootstrap'
import logo from '../assets/images/Screenshot_52.png'
import Web3 from "web3"
const web3_Stake = new Web3(window.ethereum);
export default function Header() {
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [checkAddress, setcheckAddress] = useState("");
  // const [walletAddress, setWalletAddress] = useState(null);
  // const [lastFourDigitAddValue, setLastFourDigitAddValue] = useState(null);
  
  const networkChanged = (chainId) => {
      console.log("chainId",chainId);
      
      if(chainId == "0x5"){
          window.ethereum.enable().then((address) => {
              var loginUserAdd = address[0];
              sessionStorage.setItem("loginUserAdd", loginUserAdd);
          });

          window.location.reload();
      }
  };

  useEffect(() => {
    if(window.ethereum) {
        // window.ethereum.request({
        //     method: "wallet_addEthereumChain",
        //     params: [{
        //         chainId: "0x61",
        //         rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
        //         chainName: "BNB Testnet",
        //         nativeCurrency: {
        //             name: "BNB",
        //             symbol: "BNB",
        //             decimals: 18
        //         },
        //         blockExplorerUrls: ["https://testnet.bscscan.com"]
        //     }]
        // });
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: "0x5",
              chainName: 'Gorli',
              // chainName: 'Görli',
              nativeCurrency: {
                name: "Gorli Ether",
                // name: "Görli Ether",
                symbol: "GOR",
                decimals: 18
              },
              rpcUrls: ['https://rpc.goerli.mudit.blog/'],
              blockExplorerUrls: ['https://goerli.etherscan.io'],
          }]
        });
        window.ethereum.on("chainChanged", networkChanged);
    }else{
        // alert("Please install metamask")
        // console.log("not")
        setShow(true)
    }
}, []);

  function openMetamask(){
    window.ethereum.enable().then((address) => {
        var loginUserAdd = address[0];
        sessionStorage.setItem("loginUserAdd", loginUserAdd);
        console.log("loginUserAddress1loginUserAddress1", loginUserAdd);
    }); 
  }
  useEffect(() => {
    // =============================== SHOW ADDRESS BY COOKIE ==============================================
    let checkAddress = sessionStorage.getItem('loginUserAdd')
    setcheckAddress(checkAddress)
    console.log("sessionStorage",checkAddress)

    if (checkAddress === null || checkAddress === undefined) {
      document.getElementById('connected').innerText = 'Connect Wallet'
    } else {
        document.getElementById('connected').innerText = 'Connected'
    }
}, []);

  return (
    <div>
      <div className="header">
        <Container fluid>
          <Row>
            <Col lg={12} className="px-0">
              <Navbar collapseOnSelect expand="lg" >
                <Container>
                  <Navbar.Brand href="#">
                    <div className="header_logo">
                      <img src={logo} alt="header_logo" className='img-fluid' />
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto ">
                      <Nav.Link href="#play">PLAY <span>(</span>GENX<span>)</span></Nav.Link>
                      <Nav.Link href="#">PLAY <span>(</span>GENY <span style={{fontSize:"25px"}}>+</span> MIGRANT EDX<span>)</span></Nav.Link>

                    </Nav>
                    <Nav>
                      <div className="bear_connectWallet_btn">
                      <span className="walletAddress_txt" style={{ color:'white' }}>{checkAddress}</span>
                      <button id="connected" onClick={openMetamask} >CONNECT WALLET</button>
                      </div>
                        
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>How to Install and Use Metamask</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <p class="mx-4" style={{color: "black"}}> <b>Step 1:</b> Go to Chrome Web Store Extensions Section.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 2:</b> Search MetaMask.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 3:</b> Check the number of downloads to make sure that the legitimate MetaMask is being installed, as hackers might try to make clones of it.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 4:</b> Click the Add to Chrome button.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 5:</b> Once installation is complete this page will be displayed. Click on the Get Started button.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 6:</b> This is the first time creating a wallet, so click the Create a Wallet button. If there is already a wallet then import the already created using the Import Wallet button.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 7:</b> Click I Agree button to allow data to be collected to help improve MetaMask or else click the No Thanks button. The wallet can still be created even if the user will click on the No Thanks button.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 8:</b> Create a password for your wallet. This password is to be entered every time the browser is launched and wants to use MetaMask. A new password needs to be created if chrome is uninstalled or if there is a switching of browsers. In that case, go through the Import Wallet button. This is because MetaMask stores the keys in the browser. Agree to Terms of Use.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 9:</b> Click on the dark area which says Click here to reveal secret words to get your secret phrase. </p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 10:</b> This is the most important step. Back up your secret phrase properly. Do not store your secret phrase on your computer. Please read everything on this screen until you understand it completely before proceeding. The secret phrase is the only way to access your wallet if you forget your password. Once done click the Next button. </p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 11:</b> Click the buttons respective to the order of the words in your seed phrase. In other words, type the seed phrase using the button on the screen. If done correctly the Confirm button should turn blue.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 12:</b> Click the Confirm button. Please follow the tips mentioned.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 13:</b> One can see the balance and copy the address of the account by clicking on the Account 1 area.</p>
          <p class="mx-4" style={{color: "black"}}> <b>Step 14:</b> One can access MetaMask in the browser by clicking the Foxface icon on the top right. If the Foxface icon is not visible, then click on the puzzle piece icon right next to it.</p>
      </Modal.Body>
    </Modal>
    </div>
  )
}
