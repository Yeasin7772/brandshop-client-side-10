import { useActionData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateData = () => {

    const automotive = useActionData()
    console.log(automotive);
    const { _id, image, name, Price, brand_name, rating, description } = automotive || {}


    const handelUpdate = e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value;
        const name = form.name.value;
        const Price = form.Price.value;
        const brand_name = form.brand_name.value
        const rating = form.rating.value
        const description = form.description.value
        //console.log(image, name, Price, brand, rating, description);
        const updateData = { image, name, Price, brand_name, rating, description }
        console.log(updateData);
        form.reset()
        fetch(`http://localhost:5000/automotive/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });

    }
    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="text-4xl text-center font-bold mb-5">
                    <h1>Add Your Car</h1>
                </div>

                <div className="bg-[#F9F6E2] sm:static md:w-[700px]  ">
                    <form onSubmit={handelUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Car Name</span>
                            </label>
                            <input name="name" required type="text" defaultValue={name} placeholder="Enter You Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name="Price" required type="text" defaultValue={Price} placeholder="Price" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Band Name</span>
                            </label>
                            <input name="brand_name" required type="text" defaultValue={brand_name} placeholder="Band Name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input name="rating" required type="text" defaultValue={rating} placeholder="Rating" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input name="description" required type="text" defaultValue={description} placeholder="Short description" className="input input-bordered" />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="image" type="Image URL" defaultValue={image} placeholder="Image URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#F00] text-white">Add to click</button>
                        </div>


                    </form>
                </div>
            </div>


        </div>
    );
};

export default UpdateData;