
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"




const initialState={
    products:[{
    name:"Iphone 11",
    description:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque animi minima. Soluta hic praesentium corrupti in unde consectetur placeat.",
    id:1,
    price:670,
    img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;.v=1567022219953",
    item:2,
    like:false
}
,
    {
    name:"Iphone 12",
    description:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque animi minima. Soluta hic praesentium corrupti in unde consectetur placeat.",
    id:2,
    price:970,
    img:"https://assets.swappie.com/swappie-product-iphone-12-pro-max-pacific-blue.png",
    item:5,
    like:false,
},
{
    name:"Macbook Air",
    description:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque animi minima. Soluta hic praesentium corrupti in unde consectetur placeat.",
    id:3,
    price:1500,
    img:"https://images.macrumors.com/article-new/2020/11/macbook-air-m1-unboxing.jpg",
    item:7,
    like:false,
},
{
    name:"Macbook Pro",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque animi minima. Soluta hic praesentium corrupti in unde consectetur placeat.",
    id:4,
    price:1900,
    img:"https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/Apple_16_Zoll_MacBook_Pro_wird_nicht_was_wir_erwarten.jpg",
    item:6,
    like:false,
},
{
    name:"Ipad Pro",
    description:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque animi minima. Soluta hic praesentium corrupti in unde consectetur placeat.",
    id:5,
    price:470,
    img:"https://www.logitech.com/content/dam/logitech/en/products/mobility/slim-folio-pro/gallery/slim-folio-pro-gallery-2-01.png",
    item:4,
    like:false,
}

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
                case "updateItem":
                    return {...state,products:state.products.map(p=>p.id===action.payload?{...p,like:!p.like}:p)}
            
            default:
                return state
            
    }
}


const myStore = createStore(Reducer )
 

reactDOM.render( <Provider store={myStore}><App/></Provider>,document.getElementById("root"))