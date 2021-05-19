import React, {useEffect,useRef}from 'react'
import  "../styles/styles.css"


// how to use this function inside my components or this file 
export function makeRandomColor(){
    var c = '';
    while (c.length < 6) {
      c += (Math.random()).toString(16).substr(-6).substr(-1)
    }
    return '#' + c;
  }
  

export default function Footer() {
    
    const myStyle =useRef()
    useEffect(()=>{
        console.log(myStyle);
        console.log(makeRandomColor());
        myStyle.current.style.color=makeRandomColor()//How to use this random color in to my style
        
       

     
    

    },[])

    const currentDate=new Date().getFullYear();
  
    return (
        <div>
            
   <footer>
            <p ref={myStyle}>&#x00A9; CMI @eidle {currentDate}</p>
            
        </footer>
        </div>
     
    )
}
