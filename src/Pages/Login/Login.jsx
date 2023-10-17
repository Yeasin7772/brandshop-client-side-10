import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



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
            <div className="hero min-h-screen ">
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

                        <div className="text-center">
                            {/* {
                                match && <p className="text-red-500">{match}</p>
                            } */}
                        </div>

                        <div className="">
                            <button className="btn w-full">

                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;