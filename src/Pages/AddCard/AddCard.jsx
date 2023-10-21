import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
const AddCard = () => {
    // const myCars = useLoaderData()
    // const [saveCars, setSaveCars] = useState(nu)
    // console.log(saveCars);

    // useEffect(()=> {
    //     fetch('http://localhost:5000/save')
    //     .then(res => res.json)
    //     .then(data => setSaveCars(data))
    // },[])



   // console.log(myCars);
    // const { image, name, Price, brand_name, rating, description } = myCars || {}

    // fetch('http://localhost:5000/save', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(myCars)
    // })


    return (
        <div className="py-10">
        <div className=" text-center space-y-4">
            <h1 className="text-3xl font-bold">Your Save Cart </h1>
            
           
        </div>
    </div>
    );
};

export default AddCard;