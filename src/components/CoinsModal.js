import React from 'react';
import Modal from 'react-bootstrap4-modal';
import {ContextConsumer} from "../context.js";
import coin from "../icons/coin.svg";

class Coins extends React.Component {
  // event handling methods go here
  
  constructor (){
    super();
    this.state = {
      selectedValue: 0,
      loading: false
    };
  }

  handleClick (event, value) {
    this.setState({
      selectedValue: value
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
            <h5 className="modal-title text-center">Claim more coins</h5>
          </div>
          <div className={this.state.loading? "modal-body text-center loading":"modal-body text-center"}>
            <div className="col-12">
              <button className={this.state.selectedValue===1000? "btn reload-btn active":"btn reload-btn"} onClick={(event)=>{this.handleClick(event, 1000)}} type="button">
                1.000 <img src={coin} width="30" height="30" alt="" />
              </button>
              <button className={this.state.selectedValue===5000? "btn reload-btn active":"btn reload-btn"} onClick={(event)=>{this.handleClick(event, 5000)}} type="button">
                5.000 <img src={coin} width="30" height="30" alt="" />
              </button>
              <button className={this.state.selectedValue===7500? "btn reload-btn active":"btn reload-btn"} onClick={(event)=>{this.handleClick(event, 7500)}} type="button">
                7.500 <img src={coin} width="30" height="30" alt="" />
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.props.closeCoinsModal}>
              Close
            </button>
            <button type="button" className="btn btn-secondary active" onClick={(event)=>{value.reloadPoints(this.state.selectedValue,this.handleLoading,this.props.closeCoinsModal)}}>
              Get Coins
            </button>
          
          </div>
        </Modal>);
      }}
      </ContextConsumer>  );
  }
}
export {Coins};