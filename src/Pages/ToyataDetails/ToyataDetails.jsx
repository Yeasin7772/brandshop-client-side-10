import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const ToyataDetails = () => {
    


    const car = useLoaderData()
    const { user } = useContext(AuthContext)

    const {_id ,image, name, Price, brand_name,  description  } = car || {}

    const handelAddToCart = () => {
        console.log(user)
        console.log(car)

        const { _id, ...others } = car
        const newData = others

       // console.log(_id)
        newData._id
        newData.userName = user.displayName
        newData.userEmail = user.email

        fetch('https://automotive-server-shop-l5p0bj4sm-yeasin-mollas-projects.vercel.app/addToCard', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })


        }
    return (
        <div className="mt-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img  src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title"> Brand: {brand_name}</h2>
                    <h2 className="card-title"> Price: $ {Price}</h2>
                    <p>{description}</p>
                    <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                    <div className="card-actions justify-end">
                         <Link onClick={()=>handelAddToCart()} >
                                    <button className="btn btn-outline btn-success">Add TO Cart </button>
                                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyataDetails;