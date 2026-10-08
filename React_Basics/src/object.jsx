function ThreeKnow(){
        const Person ={ name:"uday", lastname: "kasera" , age:23 , email:"udaykasera32@gmail.com" };
            
                const PersonTow = { name: 'virat' , lastname : 'kohli' , age:38 , email: ' virat@gmail.com'};

        function Fullname(anyPerson){
            return anyPerson.name+""+ anyPerson.lastname;
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

                 <h2>PersonTwo details </h2>
                 <ul>
                    <li>first name{PersonTow.name}</li>
                    <li>email  : {PersonTow.email}</li>
                    <li>age: {PersonTow.age}</li>
                    <li>full name : {Fullname(PersonTow)}</li>
                 </ul>

        </>
    )
}
export default ThreeKnow;