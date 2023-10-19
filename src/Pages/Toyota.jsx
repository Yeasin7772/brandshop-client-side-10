import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Toyota = () => {
    const [toyota, setToyata] = useState(null)
    const automotives = useLoaderData()
    const {name} = useParams()
    console.log(name);


    
    // useEffect(() => {
    //     const filterItems = automotives?.filter(automotive => automotive.brand_name ==name )
    //     setToyata(filterItems)

    // }, [name,automotives])


    return (
        <div>

        </div>
    );
};

export default Toyota;