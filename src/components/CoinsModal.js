import React from 'react';
import Modal from 'react-bootstrap4-modal';
 
class Coins extends React.Component {
  // event handling methods go here

  render() {
    return (
      <Modal visible={this.props.visible} onClickBackdrop={this.props.closeCoinsModal}>
        <div className="modal-header">
          <h5 className="modal-title">Claim more coins</h5>
        </div>
        <div className="modal-body">
          <p>Get more more coins!!!</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.props.closeCoinsModal}>
            Close
          </button>
         
        </div>
      </Modal>
    );
  }
}
export {Coins};