import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';



const ToyataCard = ({ toyotas, automotives, setAutomotives }) => {
    console.log(toyotas);




    // const { image,name, Price, brand_name, rating, description } = toyotas || {}
    const handelDelete = (_id) => {
        console.log(_id);
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

                    fetch(`http://localhost:5000/automotive/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    " has been deleted.",
                                    'success'
                                )

                                const remaining = automotives.filter(automotive => automotive._id !== _id)
                                setAutomotives(remaining)

                            }
                        })
                }
            })

    }
    return (
        <div className="mt-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    toyotas?.map(toyota => <div key={toyota._id}>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img className="h-52 w-full" src={toyota.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {toyota.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p className="card-title">Price: ${toyota.Price}</p>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                             
                                <div className="card-actions justify-end">
                                    {/* <Link to={`/myCard/${toyota._id}`} >
                                    <button className="btn btn-outline btn-success">Save </button>
                                    </Link> */}
                                    <Link to={`/details/${toyota._id}`} >
                                        <button className="btn btn-outline btn-warning">Details </button>
                                    </Link>
                                    {/* <button onClick={() => handelDelete(toyota._id)}
                                     className="btn btn-outline btn-error">Delete</button> */}
                                    <Link to={`/update/${toyota._id}`}>
                                        <button className="btn btn-outline btn-info">Update</button>
                                    </Link>


                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ToyataCard;