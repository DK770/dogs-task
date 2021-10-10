import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BreedPics = ({ title }) => {
    const [dogs, setDogs] = useState( null );
    const [isPending, setIsPending] = useState(true);
    const {breed} = useParams();

    useEffect(() => {
        setTimeout(()=>{
            fetch("https://dog.ceo/api/breed/"+breed+"/images/random/10")
            .then(res => { return res.json(); })
            .then((data)=>{
                console.log(data);
                setDogs(data.message);
                setIsPending(false);
            })
        }, 1000)
    },[]);

    return ( 
        <div className="container">
            { isPending && <div>Loading...</div> }
            { dogs && <>
                
                <h3>Breed: { breed }</h3>
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
 
export default BreedPics;