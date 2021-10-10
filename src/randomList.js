import { useState, useEffect } from "react";

const RandomList = ({title}) => {

    const [dogs, setDogs] = useState( null );
    const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {
        setTimeout(()=>{
            fetch("https://dog.ceo/api/breeds/image/random/10")
            .then(res => { return res.json(); })
            .then((data)=>{
                console.log(data);
                setDogs(data.message);
                setIsPending(false);
            })
        }, 1000)
    },[]);

    useEffect(()=> {
        console.log(dogs);
    },[dogs])

    return ( 
        <div className="container">
            { isPending && <div>Loading...</div> }
            { dogs && <>
                <h2>{ title }</h2>
                { dogs.map((eachdog, index) => (
                    <div key={index} >
                        <h3>Image: </h3>
                        <img src={eachdog} alt="www.google.com" />
                    </div>
                 )) }
            </> }
        </div>
    );
}
 
export default RandomList;