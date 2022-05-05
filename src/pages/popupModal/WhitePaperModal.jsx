import React from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'

function WhitePaperModal(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} size="xl" className='whitePaper' >
                <Modal.Header className="whitePaper_modal_header">
                    <div onClick={props.handleClose} class="modal-close">✖</div>
                </Modal.Header>
                <Modal.Body className="whitePaper_modal_body">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={5}>
                                <div className='bear_game_whitePaper_modal'>
                                    <div className="bear_game_whitePaper_header">
                                        <div className="bear_game_whitePaper_title">
                                            <h1>Story Line</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_subHeader">
                                        <div className="bear_game_whitePaper_subtitle">
                                            <h1>Minting</h1>
                                        </div>
                                    </div>

                                </div>
                            </Col>

                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={4}>
                                <div className='bear_game_whitePaper_modal'>

                                    <div className="bear_game_minting_table">
                                        <table className='table table-striped'>

                                            <tbody>
                                                <tr className='head'>
                                                    <th>Token ID</th>
                                                    <th>Minting Cost</th>
                                                </tr>
                                                <tr class="active-row">
                                                    <th>0 - 10,498 (Gen X)</th>
                                                    <th>SOLD OUT</th>
                                                </tr>
                                                <tr>
                                                    <td>10,499 - 17,000 (Gen Y)</td>
                                                    <td>20,000 $TROUT</td>
                                                </tr>
                                                <tr>
                                                    <td>17,001 - 27,000 (Gen Y)</td>
                                                    <td>40,000 $TROUT</td>
                                                </tr>
                                                <tr>
                                                    <td>27,001 - 37,000 (Gen Y)</td>
                                                    <td>60,000 $TROUT</td>
                                                </tr>
                                                <tr>
                                                    <td>37,001 - 50,000 (Gen Y)</td>
                                                    <td>80,000 $TROUT</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={5}>
                                <div className='bear_game_whitePaper_modal'>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                            The total cost to mint/spawn all of the Fishermen and Bears in existence will be 2,170,020,000 $TROUT.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_subHeader">
                                        <div className="bear_game_whitePaper_subtitle">
                                            <h1>Fishermen</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                            You have a 90% chance of minting a Fishermen, each with unique traits.
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className='justify-content-center'>
                            <Col lg={7}>
                                <div className='bear_game_whitePaper_modal'>

                                    <div className="bear_game_minting_table">
                                        <table className='table table-striped'>

                                            <tbody>
                                                <tr className='head'>
                                                    <th>Action</th>
                                                    <th>Notes</th>
                                                    <th>Risk</th>
                                                </tr>
                                                <tr>
                                                    <td>Enter River (Stake)</td>
                                                    <td>Accumulate 10,000 $TROUT / day (Gen X) <br /> Accumulate 6,000 $TROUT / day (Gen Y)</td>
                                                    <td>No risk.</td>
                                                </tr>
                                                <tr>
                                                    <td>Collect $TROUT (Claim)</td>
                                                    <td>Receive 80% of the $TROUT you fished.</td>
                                                    <td>Bears take a guaranteed 20% tax on your $TROUT to keep them from attacking you. $TROUT given is split among all the BEARS currently staked around the river, proportional to their ranking.</td>
                                                </tr>
                                                <tr>
                                                    <td>Leave River (Unstake)</td>
                                                    <td>Fishermen leave the river and all $TROUT is collected. Can only be done if the Fishermen has accumulated 2 days worth of $TROUT.</td>
                                                    <td>50% chance of ALL of your accumulated $TROUT being stolen by Bears. Stolen $TROUT is split among all the Bears currently staked around the river, proportional to their ranking.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={6}>
                                <div className='bear_game_whitePaper_modal'>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                            Only staked Bears are able to steal new fishermen or earn the $TROUT tax.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_subHeader">
                                        <div className="bear_game_whitePaper_subtitle">
                                            <h1>Bear Game Theory: $TROUT</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                            The maximum $TROUT supply is 5,000,000,000 $TROUT:
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                            When supply reaches 2,400,000,000 $TROUT earned for staking, the staking “faucet” turns off.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                            The developers will receive 600,000,000 $TROUT.
                                            Community Rewards will be allocated 2,000,000,000 $TROUT.
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={7}>
                                <div className='bear_game_whitePaper_modal'>

                                    <div className="bear_game_minting_table">
                                        <table className='table table-striped'>

                                            <tbody>
                                                <tr className='head'>
                                                    <th>Action</th>
                                                    <th>Notes</th>
                                                    <th>Risk</th>
                                                </tr>
                                                
                                                <tr>
                                                    <td>Mint a new Fishermen using $TROUT</td>
                                                    <td>There is a 10% chance that the NFT is actually a Bear!</td>
                                                    <td>10% chance of the new Fishermen or a Bear being stolen by a staked Bear. Each Bear’s chance of success is proportional to their ranking.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                     </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={6}>
                                <div className='bear_game_whitePaper_modal'>
                                    
                                    <div className="bear_game_whitePaper_subHeader">
                                        <div className="bear_game_whitePaper_subtitle">
                                            <h1>The Token</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        Our $TROUT contract is designed following the nature of SafeMoon, which was done to create a strong token that has potential beyond the scope of Bear Game, Bear DAO, and the ecosystem. This token has a 25% sale tax applied to it that contributes directly to the liquidity pool.<br></br> This sale tax was a community suggestion, was voted on by the community, and has been a proven way of increasing stability with the token.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        To stabilize $TROUT, the goal of the team is to add meaningful utility to $TROUT instead of aimlessly adding funds to the liquidity pool. This promotes the longevity of the token, increasing community involvement, and leads to further growth within the DAO and ecosystem. More details follow below.
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={6}>
                                <div className='bear_game_whitePaper_modal'>
                                    
                                    <div className="bear_game_whitePaper_subHeader">
                                        <div className="bear_game_whitePaper_subtitle">
                                            <h1>The DAO</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        The DAO was established to allow the community to drive the conversation, development, and funding behind meaningful updates to power the longevity and utility of $TROUT. Their decisions will be backed by the development team and any other exterior help they wish to add to our team.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        GenX NFTs are the voting power in the DAO. Holders of GenX NFTs can vote on the official Snapshot voting platform for Bear Game, and there decisions can be made that the community deems important for the future of the Game and DAO.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        A multi-sig wallet has been established and the holders were voted on by the community via the Snapshot voting platform. The proposal and results remain live on the platform for all to see. The multi-sig wallet holders can be seen in the Discord by their light green names and "DAO Leaders" role.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        The DAO will be funded by 80% of the GenX/GenY royalties, 100% of the BearDAO OpenSea royalties, and an initial seed funding of 50 ETH from the development team.
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={6}>
                                <div className='bear_game_whitePaper_modal'>
                                    
                                    <div className="bear_game_whitePaper_subHeader">
                                        <div className="bear_game_whitePaper_subtitle">
                                            <h1>The Ecosystem</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        The ecosystem has been established to give further value to $TROUT. This ecosystem includes giveaways, updates to the existing game, sister projects, and any other ideas created and pushed by the DAO.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        These ecosystem related projects will be available on the BearDAO OpenSea if they're tokens created by the DAO and team. Other sister projects will have their own OpenSea pages with royalties from the purchases being partially pushed directly to the BearDAO.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        Sister games will offer benefits to trophy bucket holders and some benefits from the mints will be directly contributed to the DAO. These exact percentages will be decided on a project-by-project basis.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        The benefit that BearDAO offers fellow creators is an already established community, partial funding by the DAO (if decided by our community), and connections to experts in each aspect of the development journey.
                                        </div>
                                    </div>
                                    <div className="bear_game_whitePaper_description">
                                        <div className="bear_game_whitePaper_description_text">
                                        Projects will be able to pitch their ideas directly to the DAO and the community will be able to decide which projects to support and how that support is granted.
                                        </div>
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

export default WhitePaperModal
