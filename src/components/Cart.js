import React ,{useEffect ,useState} from 'react'
import { useSelector,useDispatch} from 'react-redux';


export default function Cart() {
    const {cart} =useSelector(state=>state)
    const dispatch=useDispatch()
    const [total,setTotal]=useState(0)
    useEffect(()=>{
let sum=cart.reduce((acc,item)=>{
acc=acc+item.price
return acc

},0)
setTotal(sum)
    },[cart])
  
    return (
        <div >
           <h1>Welcome to your Cart </h1>
          
             
        {cart.map((item)=>{
            return (<>
             <div className="cart-div" style={{display:"flex",flexDirection:"column",width:"250px",border:"1px solid",margin:"20px",padding:"10px"}}>
                 <img src={item.img} alt=""/>
                 <h3>{item.name}</h3>
                 <p>{item.description}</p>
                 <h3>$ {item.price}</h3>
                

                <button onClick={()=>dispatch({type:"deleteitem",payload:item})}><i class="fas fa-trash-alt"></i></button>
                </div> 
                </>
            )
        })}
        <div style={{border:"1px solid",padding:"20px",color:"blue"}}>
        <h2>Total: $ {total}</h2>
         </div>
       
        </div>
        

    )
}