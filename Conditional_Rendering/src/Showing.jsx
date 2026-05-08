export default function Showing(){

    const login = true;
     let message;
    if(login===false){
        message = "Its my turn";
    }else{
        message = "Its your turn";
    }

// conditional rendering using ternery operator
    let Guest =false ;


return(<>

    <h2>{message}</h2>

    <h1>{Guest? "Welcome":"Bhidkam"}</h1>
</>)

}