
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"




const initialState={
    products:[{
    name:"Iphone 11",
    id:1,
    price:670,
    item:2
}
// ,
//     {
//     name:"Iphone 12",
//     id:2,
//     price:970,
//     item:5
// },
// {
//     name:"Macbook Air",
//     id:3,
//     price:1500,
//     item:7
// },
// {
//     name:"Macbook Pro",
//     id:4,
//     price:1900,
//     item:6
// },
// {
//     name:"Ipad",
//     id:5,
//     price:470,
//     item:4
// }

]
,
cart:[]
    
}
const Reducer=(state=initialState,action)=>{
    console.log(action);
    switch(action.type){ //using swicht 
        case "addtocart":
            return {...state,cart:[...state.cart,{...action.payload,id:new Date().getTime().toString()}]}
            case "deleteitem":
                return {...state,cart:state.cart.filter(item=>item.id!==action.payload.id)}
            
            default:
                return state
    }
}


const myStore = createStore(Reducer )
 

reactDOM.render( <Provider store={myStore}><App/></Provider>,document.getElementById("root"))