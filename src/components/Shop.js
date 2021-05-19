import React from 'react'
import "../styles/styles.css"
// import { imagesData} from "./Data"
// import {makeRandomColor} from "./Footer"


import { useSelector,useDispatch } from 'react-redux';


 import { Button } from 'react-bootstrap';

export default function Shop() {

  const {products} =useSelector(state=>state)
  const dispatch=useDispatch()
  

    return (
        <div className="mydiv" >
           <h1 style={{textAlign:"center"}}>Welcome to Mini Apple Store</h1> 
           {products.map((product)=>{
             return (
                 <>
                <div style={{display:"flex",flexDirection:"column",border:"1px solid",borderRadius:"10px",padding:"10px",width:"250px",justifyContent:"space-around",margin:"0 auto"}}>
             
                <div> 
                  <img src={product.img} alt=""/>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <h3> Price: $ {product.price}</h3>
                  <span onClick={()=>dispatch({type:"updateItem",payload:product.id})}>{product.like?<i class="fas fa-heart"></i>:<i class="far fa-heart"></i>}</span>
                 
                  <div><Button style={{marginLeft:"10px"}} onClick={()=>dispatch({type:"addtocart",payload:product})} variant="primary">Add to cart <i class="fas fa-cart-plus"></i></Button></div>
                
                
            
                 </div>
                </div>
               
              
                   
             
                  
                 </>
                
                 
                 
       
          
           
            
             )
           })}


           
          
        </div>
    )
}
