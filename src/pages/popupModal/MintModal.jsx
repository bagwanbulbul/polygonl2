import React from 'react'
import { Modal} from 'react-bootstrap'

function MintModal(props) {
  return (
    <div>
          <Modal  show = {props.show} onHide={props.handleClose} centered size="lg" className='mint_modal'>
        <Modal.Header  className="mint_modal_header">
        <div onClick={props.handleClose} class="modal-close">✖</div>
        </Modal.Header>
        <Modal.Body className="mint_modal_body">
            <div className='bear_game_mint_modal'>
                <div className="bear_game_mint_header">
                    <div className="bear_game_mint_title">
                        <h1>Mint and Stake?</h1>
                    </div>
                </div>
                <div className="bear_game_mint_description">
                    <div className="bear_game_mint_description_text">
                    Would you like to mint and stake immediately to save gas on your transaction?<br></br>
                  <strong> This mint will cost you 20,000 $TROUT</strong>
                    </div>
                </div>
                <div className="bear_game_mint_description_btn">
                    <button className='jutMint_btn'>No, just Mint</button>
                    <button className='mintStake_btn'>Yes, Mint and Stake</button>
                </div>
            </div>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default MintModal