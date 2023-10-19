import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from 'react-icons/fa';



const Login = () => {
    const { signIn } = useContext(AuthContext)

    const location = useLocation()
      // console.log('location', location);
    const navigate = useNavigate()
 
    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "Invalidate Password",
                    showConfirmButton: false,
                    timer: 1500
                  })

            })

    }
    return (
        <div>
            <div className="text-center mt-6 ">
                <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>

            </div>
            <div className="hero min-h-screen  bg-[#F8F8F8] ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" required type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" required type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>

                            <p>Do not Have An Account ? <Link className="text-[#F75B5F]" to='/register'>Register</Link></p>
                        </form>

                      

                        <div className="">
                            <button className="btn w-full">

                               <FaGoogle></FaGoogle>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company 1: Toyota

Car 1: Toyota Camry

Description: The Toyota Camry is a reliable and fuel-efficient sedan known for its practicality, comfortable interior, and a reputation for longevity. It's a popular choice for those seeking a well-rounded family car.
Car 2: Toyota RAV4

Description: The Toyota RAV4 is a compact SUV that combines excellent cargo space with off-road capability. With a comfortable ride and advanced safety features, it's a versatile choice for adventure seekers.
Car 3: Toyota Prius

Description: The Toyota Prius is the iconic hybrid vehicle known for its exceptional fuel efficiency. It's a great eco-friendly option for those looking to reduce their carbon footprint.
Car 4: Toyota Tacoma

Description: The Toyota Tacoma is a rugged and durable pickup truck built for off-road adventures. It's a favorite among truck enthusiasts and outdoor enthusiasts.
Company 2: Ford

Car 1: Ford Mustang

Description: The Ford Mustang is an American classic, known for its powerful engines and iconic design. It's a symbol of performance and muscle in the automotive world.
Car 2: Ford F-150

Description: The Ford F-150 is the best-selling pickup truck in the United States, offering robust towing and payload capabilities along with a range of features for work and play.
Car 3: Ford Escape

Description: The Ford Escape is a compact SUV with a comfortable ride and a spacious interior. It's a versatile choice for urban and suburban drivers.
Car 4: Ford Focus

Description: The Ford Focus is a compact car known for its affordability and practicality. It's an excellent option for daily commuting and city driving.
Company 3: BMW

Car 1: BMW 3 Series

Description: The BMW 3 Series is a luxury compact sedan with a perfect balance of performance and comfort. It's often regarded as the benchmark in its class.
Car 2: BMW X5

Description: The BMW X5 is a luxury SUV that combines sporty handling and a premium interior. It's a top choice for those seeking an upscale and versatile SUV.
Car 3: BMW i3

Description: The BMW i3 is an electric car with a unique and futuristic design. It's environmentally friendly and perfect for city driving.
Car 4: BMW 7 Series

Description: The BMW 7 Series is a full-size luxury sedan known for its opulent features and advanced technology. It's the epitome of luxury and comfort.
Company 4: Mercedes-Benz

Car 1: Mercedes-Benz C-Class

Description: The Mercedes-Benz C-Class is a luxury compact sedan with a refined interior, advanced technology, and a range of powerful engines.
Car 2: Mercedes-Benz GLE

Description: The Mercedes-Benz GLE is a midsize luxury SUV that offers a combination of performance, comfort, and cutting-edge features.
Car 3: Mercedes-Benz A-Class

Description: The Mercedes-Benz A-Class is a compact luxury car known for its stylish design and advanced infotainment system.
Car 4: Mercedes-Benz S-Class

Description: The Mercedes-Benz S-Class is a flagship luxury sedan with unparalleled comfort, innovative technology, and a smooth, quiet ride.
(Note: Descriptions are brief and for reference, and each car model may have various trims and features.)




User
Tesla, Honda too
ChatGPT
Company 5: Tesla

Car 1: Tesla Model 3

Description: The Tesla Model 3 is an all-electric, affordable sedan known for its impressive range, cutting-edge technology, and sleek design.
Car 2: Tesla Model S

Description: The Tesla Model S is a high-performance electric sedan with luxurious features and industry-leading acceleration.
Car 3: Tesla Model X

Description: The Tesla Model X is an electric SUV with distinctive falcon-wing doors, spacious interior, and impressive electric range.
Car 4: Tesla Model Y

Description: The Tesla Model Y is a compact electric SUV that combines practicality and electric efficiency, making it a versatile choice for families.
Company 6: Honda

Car 1: Honda Civic

Description: The Honda Civic is a well-regarded compact car known for its reliability, fuel efficiency, and a range of body styles to suit various preferences.
Car 2: Honda CR-V

Description: The Honda CR-V is a popular compact SUV offering a comfortable ride, spacious interior, and a reputation for safety and reliability.
Car 3: Honda Accord

Description: The Honda Accord is a midsize sedan praised for its well-rounded nature, including a comfortable interior, good fuel economy, and strong resale value.
Car 4: Honda Fit

Description: The Honda Fit is a subcompact car with a clever and adaptable interior, making it an ideal choice for urban and small-space driving.
These descriptions provide a snapshot of each car model, but keep in mind that each model may have different trims and features to cater to a wide range of customer preferences. */}




        </div>
    );
};

export default Login;