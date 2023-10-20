import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ToyataCard from "./UpdateData/ToyataCard";


const Toyota = () => {
    const [toyotas, setToyota] = useState(null);
    // const { image, Price, brand_name, rating, description } = toyotas || {}
    const automotives = useLoaderData();
    const { name } = useParams();
    //console.log(automotives);
    //console.log(toyotas);

    useEffect(() => {


        const filterItems = automotives.filter(automotive => automotive.brand_name == name);
        setToyota(filterItems);
        //const mapItems = filterItems.map(filterItem => setToyota(mapItems))


        // fetch ('http://localhost:5000/automotive/:brand_name')
        // .then(res => res.json())
        // .then(datas => {
        //     console.log(datas);
        //     if (datas) {
        //         const filterItems = datas.filter(data => data.brand_name === name);
        //         setToyota(filterItems);
        //     }
        // })

    }, [name, automotives]);

    console.log(name);


    return (
        <div>

          <div>
            <ToyataCard toyotas={toyotas}></ToyataCard>
          </div>

        </div>
    );
};

export default Toyota;