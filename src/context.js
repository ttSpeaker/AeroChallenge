import React, { Component } from "react";

const Context = React.createContext();

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

    reloadPoints(event) {
    }

    componentDidMount(){
        // Get user data 

       fetch("https://aerolab-challenge.now.sh/user/me",{
         method: 'GET', 
         headers: new Headers({
           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzk2NTU0ZWY3YWM0ZjAwNmM2YzE3MGQiLCJpYXQiOjE1NTMzNTYxMTB9.loHp7johkyytXF3JEpKtNw3mDE_uKROKy8kRpqQX3OI', 
           'Content-Type': 'application/json'
         })
         })
           .then(res => res.json())
           .then(
             (result) => {
               this.setState({
                 isUserLoaded: true,
                 userName: result.name,
                 userPoints: result.points,
                 updateOrder: this.updateOrder
               });
             },
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

          //get products list
          fetch("https://aerolab-challenge.now.sh/products",{
           method: 'GET', 
           headers: new Headers({
             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzk2NTU0ZWY3YWM0ZjAwNmM2YzE3MGQiLCJpYXQiOjE1NTMzNTYxMTB9.loHp7johkyytXF3JEpKtNw3mDE_uKROKy8kRpqQX3OI', 
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
               },
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
        changePage: this.changePage
        }}> 
            {this.props.children}
        </Context.Provider>  
    );
  }
}

const ContextConsumer = Context.Consumer;

export {ContextProvider, ContextConsumer};