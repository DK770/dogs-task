import { useState, useEffect } from "react";

const BreedList = ({title}) => {

    const [breeds, setBreeds] = useState( null );
    const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {
        setTimeout(()=>{
            fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => { return res.json(); })
            .then((data)=>{
                console.log(data);
                setBreeds(data.message);
                setIsPending(false);
            })
        }, 1000)
    },[]);

    useEffect(()=> {
        console.log(breeds);
    },[breeds])

    return ( 
        <div className="container">
            { isPending && <div>Loading...</div> }
            { breeds && <>
                <h2>{ title }</h2>
            {
                Object.keys(breeds).map((eachbreed, index) => (
                    <div key={index} >
                        <a href={`/${eachbreed}`}> {eachbreed} </a>
                        
                    </div>
                 ))
            } </> }       
            
            
        </div>
    );
}
 
export default BreedList;