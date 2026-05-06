import { useEffect, useState } from "react"

function Effect() {

  const[value,setValue]=useState(0);
 
  
  // const name;
// now below lets play with the steEffect 

  useEffect(()=>{
    console.log("uday kasera")
  })


  return (
    <div style={{border:'2px solid black', width:'fit-content', height:'fit-content'}}>
      
        <div>
            <h1>please change the number!</h1>
            <h2>{value}</h2>
            <button style={{margin:'10%', fontSize:'20px'}} onClick={()=>{
              setValue(value+1)
            }}>Click</button>


        </div>

    </div>
  )
}

export default Effect
