import './app.css'


function Play(){
           
    let Login = "false"
     let message;
        if(Login===false){
            message= "sita ram"
        }else{
            message= 'jai shre ram';
        }

    const Hindu =()=>{

        return "Jai shree Mahakal"
    }
    let uday = false;

return(
    <>
    <h1>{Hindu()}</h1>
    {/* <h2>{message}</h2> */}
    <h1 className={uday? "visible" : "invisible"}>welcome back uday kasera</h1>

    </>
)
}
export default Play; 