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
         items:[]
       };
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
                 userPoints: result.points
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
                 console.log("loaded")
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
        <Context.Provider value={{...this.state}}> 
            {this.props.children}
        </Context.Provider>  
    );
  }
}

const ContextConsumer = Context.Consumer;

export {ContextProvider, ContextConsumer};