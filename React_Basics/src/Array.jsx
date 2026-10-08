function Twoknow(){

    const fruits = ["Apple" ,"Bananna" , "Orange"]
        const vegies =["potato" , "ladifingers" , "tomatoo"]

        // Array of objects

        const Peoples= [

            { name:"uday", lastname: "kasera" , age:23 , email:"udaykasera32@gmail.com" },
            { name:"virat", lastname: "kohli" , age:38 , email:"virat32@gmail.com" },
              { name:"sanju", lastname: "samson" , age:29, email:"sanju32@gmail.com" },
            
        ]
         function Fullname(user){
            return user.name+""+ user.lastname;
        }

return (
    <>
    <h1>uday kasera</h1>
    <div>
        <h2>fruits list</h2>
        <ul>
        {fruits.map((one, index)=>(
                <li>{index}-{one}</li>))} 
                </ul>
    </div>

    <ul>
                {vegies.map((one, index)=>(
                <li>{index}-{one}</li>))} 
                <li>{vegies[1]}</li>
                </ul>

                    <h3>People details</h3>
                <ul>
                    {Peoples.map((user ,index)=>(
                        <li> {Fullname(user)} and his age is{user.age}</li>
                    ))}
                </ul>

    
    </>
)

}
export default Twoknow