import React from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
function HuntersModal(props) {
    return (
        <div >
            <Modal show={props.show} onHide={props.handleClose} size="xl" className='hunterCub' >
                <Modal.Header className="hunterCub_modal_header">
                    <div onClick={props.handleClose} class="modal-close">✖</div>
                </Modal.Header>
                <Modal.Body className="hunterCub_modal_body">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={6}>
                                <div className='bear_game_hunterCub_modal'>
                                    <div className="bear_game_hunterCub_header">
                                        <div className="bear_game_hunterCub_title">
                                            <h1>Hunters vs Cubs Whitepaper</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            <strong>The contents of this whitepaper is subject to change up until minting day (TBD). Please check back regularly for updates.</strong>
                                        </div>
                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>Storyline</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            Hunters and Cubs compete for dominance within the Bear Game meta-prairie. An alluring prize of $FUR awaits. Only through careful gameplay can one species win over the other.
                                        </div>
                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>Public Mint</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            5,000 at .02 ETH in MATIC - 90% chance of minting a Hunter, 10% chance of minting a cub. 100% of the funds from public mint, secondary sales, and existing Bear Game royalties go to the DAO.
                                        </div>
                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>Hunters</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            Hunters can be created through 3 mechanics:
                                        </div>

                                        <ol>
                                            <li>
                                                <div className="">Mint for .02 ETH on Polygon</div>
                                            </li>
                                            <li>
                                                <div className="">Mint from L1 Bear Game - Burn an unstaked Fisherman and 50,000 $TROUT or mint with $FUR based on the points below.</div>
                                            </li>
                                            <li>
                                                <div className="">Mint with $FUR at the following costs:</div>
                                                <ul style={{ listStyleType: "circle" }}>
                                                    <li>
                                                        <div className="">Tokens 5,001 to 20,000, 250 $FUR</div>
                                                    </li>
                                                    <li>
                                                        <div className="">Tokens 20,001 to 40,000, 500 $FUR</div>
                                                    </li>
                                                    <li>
                                                        <div className="">Tokens 40,001 to 50,000, 1000 $FUR</div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            When minting with $FUR or MATIC, hunters are produced at a 9-1 ratio of hunters to cubs.
                                        </div>
                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>Cubs</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            Cubs can be created through 3 mechanics:
                                        </div>

                                        <ol>
                                            <li>
                                                <div className="">Mint for .02 ETH on Polygon</div>
                                            </li>
                                            <li>
                                                <div className="">Mint from L1 Bear Game - When holding 2 unstaked Bears and a Land NFT, 2 bears can attempt to breed.</div>
                                            </li>
                                            <li>
                                                <div className="">Mint with $FUR at the following costs:</div>
                                                <ul style={{ listStyleType: "circle" }}>
                                                    <li>
                                                        <div className="">Tokens 5,001 to 20,000, 250 $FUR</div>
                                                    </li>
                                                    <li>
                                                        <div className="">Tokens 20,001 to 40,000, 500 $FUR</div>
                                                    </li>
                                                    <li>
                                                        <div className="">Tokens 40,001 to 50,000, 1000 $FUR</div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            When minting with $FUR or MATIC, hunters are produced at a 9-1 ratio of hunters to cubs.
                                        </div>
                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>Bear DAO Trophies</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            Existing BearDAO trophies can be used to render their reward.
                                        </div>
                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>Land</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            Land is a token necessary for bear breeding (the mechanism used to potentially yield cubs). Land is minted for 200,000 $TROUT.
                                        </div>
                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>Breeding</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            With ownership of 2 Bear Game bears and a land token, bears can attempt to breed a cub. Breeding costs 75,000 $TROUT. Trying to breed is a 60% chance of failure and a 40% chance of cub creation. The cub has a 30% chance of being stolen by a hunter.
                                        </div>
                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>$FUR</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            The maximum $FUR supply is 2,500,000,000 $FUR. 1 $FUR = 1 $FUR.
                                        </div>
                                        <div className="bear_game_hunterCub_description_text">
                                            When supply reaches 2,100,000,000 the staking faucet turns off.
                                            The DAO will hold 400,000,000 $FUR.
                                        </div>
                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>Cub Levels/$FUR Yield</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                            The following are yields for each cub level prior to the hunter tax being applied.
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">

                                        <ul>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 0 (base token): 50 $FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 1 (costs 100,000 $TROUT to upgrade from L0): 100 $$FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 2 (costs 200,000 $TROUT to upgrade from L1): 200 $FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 3 (costs 300,000 $TROUT to upgrade from L2): 300 $FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 4 (costs 400,000 $TROUT to upgrade from L3): 400 $FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 5 (costs 500,000 $TROUT to upgrade from L4): 500 $FUR/day
                                                </div>
                                            </li>
                                        </ul>

                                    </div>

                                    <div className="bear_game_hunterCub_subHeader">
                                        <div className="bear_game_hunterCub_subTitle">
                                            <h1>Hunter Levels/$FUR Yield</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">
                                        <div className="bear_game_hunterCub_description_text">
                                        The following are yields for each hunter level excluding the collected hunter tax.
                                        </div>
                                    </div>
                                    <div className="bear_game_hunterCub_description">

                                        <ul>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 0 (base token): 50 $FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 1 (costs 100,000 $TROUT to upgrade from L0): 100 $$FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 2 (costs 200,000 $TROUT to upgrade from L1): 200 $FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 3 (costs 300,000 $TROUT to upgrade from L2): 300 $FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 4 (costs 400,000 $TROUT to upgrade from L3): 400 $FUR/day
                                                </div>
                                            </li>
                                            <li>
                                                <div className="bear_game_hunterCub_description_text">
                                                Level 5 (costs 500,000 $TROUT to upgrade from L4): 500 $FUR/day
                                                </div>
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default HuntersModal