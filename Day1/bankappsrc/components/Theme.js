
import React,{useState} from "react";

function Theme()
{
    const dar={
        backgroundColor:"black",
        color:"white",
         
        };
        const li={
            backgroundColor:"white",
            color:"black",
        
    };
    const[th,setTheme]=useState(dar);
   
    const transformationHandler =() =>{
   
    if(th==="dar")
        setTheme(li)
    else 
       setTheme(dar)
   
    }


    return(
          
          
              <div style={th}>
            <button style={{backgroundColor:"violet"}} onClick = {transformationHandler}>Switch Theme</button>
        
             </div>
           
    );
}

export default Theme;