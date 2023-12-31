import { Link } from "react-router-dom";

const ToyataCard = ({ toyotas}) => {
    console.log(toyotas);

  
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