import React from 'react'
import "../styles/styles.css"
import { imagesData} from "./Data"


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
               
               <div style={{backgroundColor:"#e1e5ea",display:"flex",justifyContent:"space-around"}}>
                 <div>
                   <img src={imagesData.img1} alt=""/>
                  
                   <h2> {product.name}</h2>
                   <p>This is a description</p>
                  <h3> Price: $ {product.price}</h3>
                   <Button style={{marginLeft:"10px"}} onClick={()=>dispatch({type:"addtocart",payload:product})} variant="primary">Add to Cart</Button>
                  
                 </div>
                 {/* section 2 */}
                 <div>
                   <img src={imagesData.img2} alt=""/> 
                   <h2> {product.name}</h2>
                   <p>This is a description</p>
                  <h3> Price: $ {product.price}</h3>
                   <Button style={{marginLeft:"10px"}} onClick={()=>dispatch({type:"addtocart",payload:product})} variant="primary">Add to Cart</Button>
                  
                 </div>
                 {/* section 3 */}
                 <div>
                   <img src={imagesData.img3} alt=""/>
                   <h2> {product.name}</h2>
                   <p>This is a description</p>
                  <h3> Price: $ {product.price}</h3>
                   <Button style={{marginLeft:"10px"}} onClick={()=>dispatch({type:"addtocart",payload:product})} variant="primary">Add to Cart</Button>
                  
                 </div>
                  {/* section 4 */}
                  <div>
                   <img src="https://cdn.notebookgalerie.de/magento_catalog/catalog/product/a/p/apple_macbook_pro_11.4_a1398_b1_1.jpg?q=90&canvas.width=700&canvas.height=467&canvas.color=ffffff&w=700&h=467" alt=""/>
                   <h2> {product.name}</h2>
                   <p>This is a description</p>
                  <h3> Price: $ {product.price}</h3>
                   <Button style={{marginLeft:"10px"}} onClick={()=>dispatch({type:"addtocart",payload:product})} variant="primary">Add to Cart</Button>
                  
                 </div>
                 
       
          
            </div>
            
             )
           })}


           
          
        </div>
    )
}
