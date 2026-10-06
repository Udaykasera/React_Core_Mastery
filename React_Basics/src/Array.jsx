function Twoknow(){

    const fruits = ["Apple" ,"Bananna" , "Orange"]
        

return (
    <>
    <h1>uday kasera</h1>
    <div>
        <h2>fruits list</h2>
        <ul>
        {fruits.map((one, index)=>(
                <li>{index}-{one}</li>
            
    ))}
    </ul>
    </div>
    </>
)

}
export default Twoknow