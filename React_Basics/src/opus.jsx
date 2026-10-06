// react js learning function and events 
function Opus(){

                // event function
            function show(){
                return alert("the click")
            }

            // basic funciton for writing something
        function getName(){
          return"welcome again";
        }
       const fire=()=>{
                return "this time we finishing all the concepts";
        }



        // now the funtion with parameter
        function hero(write){
            return write;
        }


        const uk="ji jan lagana he is bar agg laga denge ";
        const sure = "bande ek no"



        const Clicker=()=>{
               return alert("please enter captcha")
        }

        function Onform(event){
            console.clear()
            console.log(event.target.value);

        }
            const Dubling=()=>{
                console.log("welcome uday kasera");
            }

   return (
            <>
            <h1>hello Uday {getName()}</h1>
            <h2>uday {fire()}</h2>
            <h2>uday {hero(uk)}</h2>

            <p onMouseEnter={show} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ut, aliquam natus magni, numquam eum quibusdam tenetur labore enim sequi modi magnam optio molestias unde dignissimos! Libero voluptatum nisi enim!</p>

            <div style={{border:'2', border:'black'}}>
                <button onClick={Clicker} style={{border:2,color:'blue', backgroundColor:'red',alignContent:'center'}}>captcha</button> 


                <h3>{hero(sure)}</h3>


                <button onClick={()=> alert("button was clicked")}> click me </button>

                <input type="text" onChange={Onform} placeholder="enter text"/>

               <select name="first" id="uk">uday</select>
               <p onMouseOver={()=>{console.log("kasera ji")}} onDoubleClick={()=>{console.log("uday kasera")}}>uday kasera</p>


            </div>
                 </>

          
   )
   
   

}
// export default write;
export  default Opus;