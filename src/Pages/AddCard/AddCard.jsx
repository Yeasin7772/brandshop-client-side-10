
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddCard = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const [datas, setData] = useState()
    const [remainingData, setRemainingData] = useState(datas)


    useEffect(() => {
        fetch(`https://automotive-server-shop-l5p0bj4sm-yeasin-mollas-projects.vercel.app/getCart/${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [user?.email])
    console.log(datas);

    const handelDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://automotive-server-shop-l5p0bj4sm-yeasin-mollas-projects.vercel.app/getCart/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Cart has been deleted.',
                                    'success'
                                )

                                const remaining = remainingData.filter(item => item._id !== _id)
                                setRemainingData(remaining)

                            }
                        })
                }
            })


    }

    return (
        <div className="py-10">
            <div className=" text-center space-y-4">
                <h1 className="text-3xl font-bold">Your Save Cart </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {
                        datas?.map(data => <div key={data._id}>
                            <div className="card  bg-base-100 shadow-xl">
                                <figure><img className="h-52 w-full" src={data.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {data.name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p className="card-title">Price: ${data.Price}</p>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>

                                    <div className="card-actions justify-end">
                                        <button onClick={() => handelDelete(data._id)} className="btn btn-outline btn-error">Delete</button>



                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>


            </div>
        </div>
    );
};

export default AddCard;