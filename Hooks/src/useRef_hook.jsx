import { useRef, useState } from "react"

export default function Refral(){
    const[count, setCount]= useState(0);

    const[timer, setTimer]= useState(0);
     let timeref= useRef(null);

          function Watch(){
             timeref.current=setInterval(() => {
                 setTimer(timer=>timer+1)  
               },1000);
          }

           function Stoping(){
           clearInterval(timeref.current)
          }
          function Reseting(){
          //  clearInterval(timeref.current)
          Stoping();
          setTimer(0)
          }


   let udayref= useRef();

      function ChangeColor(){
        setCount(count+1);
        if(count%2===0){
             udayref.current.style.backgroundColor= "red";
        }
        else if(count%11===0){
             udayref.current.style.backgroundColor= "green";
        }
        else{
             udayref.current.style.backgroundColor= "blue";
        }
       
    }

    return(<>
    
     <div style={{border:'2px solid black', width:'fit-content', marginLeft:'20%'}}>
          <button ref={udayref}>color changes</button>
    <button onClick={ChangeColor}>click me</button>
    <h2>{count}</h2>
     </div>
    

    <div style={{border:'2px solid black', width:'fit-content', marginLeft:'20%', marginTop:'10%'}}>
     <h2>Stop watch "{timer}"</h2>
    <button onClick={Watch}>start</button> 
     <button onClick={Stoping}>Stop</button> 
       <button onClick={Reseting}>reset</button> 
    
    </div>
  
    
    </>)


}