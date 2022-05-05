import React from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'

function StoryLineModal(props) {
    return (
        <div >
            <Modal show={props.show} onHide={props.handleClose} size="xl" className='storyLine' >
                <Modal.Header className="storyLine_modal_header">
                    <div onClick={props.handleClose} class="modal-close">✖</div>
                </Modal.Header>
                <Modal.Body className="storyLine_modal_body">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={9}>
                                <div className='bear_game_storyLine_modal'>
                                    <div className="bear_game_storyLine_header">
                                        <div className="bear_game_storyLine_title">
                                            <h1>Story Line</h1>
                                        </div>
                                    </div>
                                    <div className="bear_game_storyLine_description">
                                        <div className="bear_game_storyLine_description_text">
                                            On a prosperous grassland located in the deep meta-prairies, a tiny village of fisherman gather together around a beautiful, deep river to fish $TROUT.
                                        </div>

                                        <div className="bear_game_storyLine_description_text">
                                            The high abundance of $TROUT in the river attracts fishermen to the village.
                                        </div>

                                        <div className="bear_game_storyLine_description_text">
                                            However, this is not without danger; this rich, bountiful river attracts not only fishermen but animals of all sorts, including heinous bears!
                                        </div>

                                        <div className="bear_game_storyLine_description_text">
                                            The bears are on the hunt to find all the fishermen and their precious delicious $TROUT!
                                            They will acquire it by any means necessary!
                                        </div>

                                        <div className="bear_game_storyLine_description_text">
                                            To counter these aggressive attacks, the fisherman have decided to start offering a small portion of their composed $TROUT to the bears.
                                        </div>

                                        <div className="bear_game_storyLine_description_text">
                                            Although, when a fisherman aimlessly moves away from the river alone, or when a new fisherman is born, the bears all lose control.
                                        </div>

                                        <div className="bear_game_storyLine_description_text">
                                            The bears don’t hold back and there is no way to repress them!
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={7}>
                                <div className="bear_game_storyLine_tldr_header">
                                    <div className="bear_game_storyLine_tldr_title">
                                        <h1>TLDR</h1>
                                    </div>
                                </div>
                                <div className="bear_game_storyLine_tldr_description">

                                    <ul>
                                        <li>
                                            <div className="bear_game_storyLine_tldr_description_text">
                                                There will only ever be 10,498 Gen X, minted for 0.069420 ETH each. The 39,502 Gen Y are minted by farming $TROUT.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="bear_game_storyLine_tldr_description_text">
                                            Fishermen can be staked on the river to earn $TROUT and pay a tax anytime they claim their $TROUT.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="bear_game_storyLine_tldr_description_text">
                                            If a Fishermen is unstaked from the river, the Bears try to steal all of its accumulated $TROUT.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="bear_game_storyLine_tldr_description_text">
                                            When a new Fisherman is born, the Bears attempt to steal it. If they’re successful, it’s given to a randomly selected bear instead of the owner who minted it.
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default StoryLineModal