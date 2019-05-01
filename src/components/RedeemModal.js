import React from 'react';
import Modal from 'react-bootstrap4-modal';
import {ContextConsumer} from "../context.js";
import coin from "../icons/coin.svg";

class Redeem extends React.Component {
  // event handling methods go here
  
  constructor (){
    super();
    this.state = {
        loading: false
    };
  }

  handleClick (event, value) {
    this.setState({
    });
  }
  handleLoading = (loading) => {
    this.setState({
      loading: loading
    })
  }

  render() {
    return (
      <ContextConsumer>
      { value => {
        return (
        <Modal visible={this.props.visible} onClickBackdrop={this.props.closeCoinsModal}>
          <div className="modal-header">
            <h5 className="modal-title text-center">Redeem {this.props.id? <span> {(value.items.find(el => el._id == this.props.id)).name}</span>:""} </h5>
          </div>
          <div className="modal-body text-center">
            <div className="col-12">
                <span>Your points: {value.userPoints}</span><br></br>
                {this.props.id? <span>Price points: {(value.items.find(el => el._id == this.props.id)).cost}</span>:""}<br></br>

            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.props.closeRedeemModal}>
              Close
            </button>
            <button type="button" className="btn btn-secondary active" onClick={(event)=>{value.redeemPrize(this.props.id,this.handleLoading,this.props.closeRedeemModal)}}>
              Redeem
            </button>
          
          </div>
        </Modal>);
      }}
      </ContextConsumer>  );
  }
}
export {Redeem};