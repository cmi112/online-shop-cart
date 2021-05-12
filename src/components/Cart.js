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
        <div>
           <h1>Welcome to your Cart </h1> 
        {cart.map((item)=>{
            return (<>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <button onClick={()=>dispatch({type:"deleteitem",payload:item})}>Delete</button>
                </>
            )
        })}
        <h2>Total: {total}</h2>
        </div>

    )
}