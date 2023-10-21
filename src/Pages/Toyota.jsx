import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ToyataCard from "./UpdateData/ToyataCard";


const Toyota = () => {
  const [toyotas, setToyota] = useState(null);
  // const { image, Price, brand_name, rating, description } = toyotas || {}
  const loadedAutomotives = useLoaderData();
  const [automotives, setAutomotives] = useState(loadedAutomotives)
  const { name } = useParams();
  //console.log(automotives);
  //console.log(toyotas);

  useEffect(() => {


    const filterItems = loadedAutomotives.filter(automotive => automotive.brand_name == name);
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

  }, [name, loadedAutomotives]);

  console.log(name);


  return (
    <div>

      <div>
        <ToyataCard toyotas={toyotas} 
          setAutomotives={setAutomotives}
          automotives={automotives}
        ></ToyataCard>
      </div>

    </div>
  );
};

export default Toyota;