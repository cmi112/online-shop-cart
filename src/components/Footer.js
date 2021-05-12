import React from 'react'
import  "../styles/styles.css"


export default function Footer() {
    const currentDate=new Date().getFullYear();
  
    return (
        <footer>
            <p>&#x00A9; CMI @eidle {currentDate}</p>
            
        </footer>
    )
}
