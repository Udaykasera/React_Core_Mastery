function ThreeKnow(){
        const Person ={ name:"uday", lastname: "kasera" , age:23 , email:"udaykasera32@gmail.com" }

        function Fullname(Person){
            return Person.name+""+ Person.lastname;
        }

    return (
        <>
               

                 <h2>Person Details</h2>
                 <ul>
                    <li>first name : {Person.name}</li>
                    <li>age: {Person.age}</li>
                    <li>email: {Person.email}</li>
                    <li>full name : {Fullname(Person)}</li>

                 </ul>

        </>
    )
}
export default ThreeKnow;