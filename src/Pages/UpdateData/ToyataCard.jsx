

const ToyataCard = ({ toyotas }) => {
    console.log(toyotas);
    // const { image,name, Price, brand_name, rating, description } = toyotas || {}
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
                                <p className="card-title">${toyota.Price}</p>
                                <div className="card-actions justify-end">
                                    <button className="badge badge-outline">Details</button>
                                    <button className="badge badge-outline">Delete</button>
                                    <button className="badge badge-outline">edit</button>


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