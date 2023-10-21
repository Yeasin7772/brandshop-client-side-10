import { Link, useLoaderData } from "react-router-dom";


const ToyataDetails = () => {
    const automotive = useLoaderData()
    console.log(automotive);
    const {  image, name, Price, brand_name,  description } = automotive || {}

    return (
        <div className="mt-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img  src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title"> Brand: {brand_name}</h2>
                    <p>{description}</p>
                    <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                    <div className="card-actions justify-end">
                         <Link to={`/myCard`} >
                                    <button className="btn btn-outline btn-success">Add Cart </button>
                                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyataDetails;