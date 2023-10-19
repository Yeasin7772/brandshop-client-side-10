import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="py-10">
            <div className=" text-center space-y-4">
                <h1 className="text-6xl font-bold">404 </h1>
                <p className="text-5xl font-medium">Page Not Found</p>
                <Link to='/'>
                <button  className="btn">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;