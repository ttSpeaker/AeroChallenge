import React, { Component } from "react";

const Context = React.createContext();

const url = "https://aerolab-challenge.now.sh" //production bug-with POST points
// var url = "https://private-anon-4a4d7ecc5f-aerolabchallenge.apiary-mock.com"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzk2NTU0ZWY3YWM0ZjAwNmM2YzE3MGQiLCJpYXQiOjE1NTMzNTYxMTB9.loHp7johkyytXF3JEpKtNw3mDE_uKROKy8kRpqQX3OI"

class ContextProvider extends Component {
    constructor(props) {
        super(props);
       this.state = {
         error: null,
         isUserLoaded: false,
         userName: "",
         userPoints: null,
         isProductsLoaded: false,
         items:[],
         orderBy: "_id",
         itemsPage: 16,
         pageNum: 0
       };
     }
     changePage = (change) => {
        this.setState({
             pageNum: this.state.pageNum+change
            })
     }
     updateOrder = (newOrder) => {
        if (newOrder == "lowCost"){
            var reverse = true;
            var orderField = "cost"
        } else if (newOrder == "hiCost"){
            var reverse = false;
            var orderField = "cost";
        } else {
            var reverse = false;
            var orderField = "_id"
        }
        var sort_by = function(field, reverse){
            var key = function (x) {return x[field]};
            return function (a,b) {
               var A = key(a), B = key(b);
               return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1,1][+!!reverse];                  
            }
         }
         this.setState({
            orderBy: newOrder,
            items: this.state.items.sort(sort_by(orderField,reverse))
         });
          

     }

     reloadPoints = (points,loadingCallback,closeCallback) =>  {
      loadingCallback(true);
      var request = new XMLHttpRequest();

      request.open('POST', url + '/user/points');

      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('Accept', 'application/json');
      request.setRequestHeader('Authorization', 'Bearer ' + token);

      var body = {
        'amount': points
      };
      request.onload = () => {
        loadingCallback(false);
        closeCallback();
        this.setState({
          userPoints: JSON.parse(request.response)["New Points"]
        })
      }
      request.send(JSON.stringify(body));

     }
    // reloadPoints = (points,loadingCallback) =>  {
    //   loadingCallback(true);
    //   fetch(url + "/user/points",{
    //     method: 'POST', 
    //     headers: new Headers({
    //       'Authorization': 'Bearer '+ token, 
    //       'Content-Type': 'application/jsonp',
    //       'Accept': 'application/json'
    //     }),
    //     body: {
    //      "amount": points
    //     }
    //     })
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           console.log(result);
    //           this.setState({
    //             userPoints: result["new Points"]
    //            });
    //            loadingCallback(false);
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           this.setState({
    //             error
    //           });
    //         }
    //       )
    // }
  
  redeemPrize = (id, loadingCallback,closeCallback) => {
    loadingCallback(true);
    var request = new XMLHttpRequest();

    request.open('POST', url + '/redeem');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Authorization', 'Bearer ' + token);

    var body = {
      'productId': id
    };
    request.onload = () => {
      this.getUserData();
      loadingCallback(false);
      closeCallback();
    }
    request.send(JSON.stringify(body));

  }

  getUserData = () => {
    fetch(url + "/user/me",{
      method: 'GET', 
      headers: new Headers({
        'Authorization': 'Bearer ' + token, 
        'Content-Type': 'application/json'
      })
      })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isUserLoaded: true,
              userName: result.name,
              userPoints: result.points
              });
          }).catch(
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isUserLoaded: true,
              error
            });
          }
        )
    }

    componentDidMount(){
      // Get user data 
      this.getUserData();
      

      //get products list
      fetch(url + "/products",{
        method: 'GET', 
        headers: new Headers({
          'Authorization': 'Bearer ' + token, 
          'Content-Type': 'application/json'
        })
        })
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isProductsLoaded: true,
                items: result
                });
            }).catch(
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isProductsLoaded: true,
                error
              });
            }
          )
     }


  render() {
    return (
        <Context.Provider value={{
        ...this.state, 
        reloadPoints: this.reloadPoints,
        updateContextItems: this.updateContextItems,
        updateOrder: this.updateOrder,
        changePage: this.changePage,
        redeemPrize: this.redeemPrize
        }}> 
            {this.props.children}
        </Context.Provider>  
    );
  }
}

const ContextConsumer = Context.Consumer;

export {ContextProvider, ContextConsumer};