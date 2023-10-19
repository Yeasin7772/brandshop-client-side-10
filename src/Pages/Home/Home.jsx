import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner";
import OurItems from "../../components/OurItems/OurItems";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <div>
            <Banner></Banner>

            {/* <div className="mt-10">
                <div className=" text-center space-y-4">
                    <h1 className="text-4xl font-bold"> Our Premium Brands </h1>
                    <p className="text-sm font-medium">top-notch automotive service that specializes in providing maintenance, <br /> repairs, and customization for leading car brands, including Toyota, Ford, </p>



                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   

                    <Link to='/toyota'>

                        <div>
                            <div className="card  bg-base-100 shadow-xl">
                                <figure className="">
                                    <img src="https://i.ibb.co/KGTfgtc/white-sport-sedan-with-colorful-tuning-road.jpg" alt="Shoes" className="rounded-xl w-fll h-36" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Toyota</h2>

                                </div>
                            </div>
                        </div>

                    </Link>
                 

                    <div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="">
                                <img src="https://i.ibb.co/fqjnd5T/23369.jpg" alt="Shoes" className="rounded-xl w-fll h-40" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Ford</h2>

                            </div>
                        </div>
                    </div>
                    

                    <div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="">
                                <img src="https://i.ibb.co/vCWnw66/37121.jpg" alt="Shoes" className="rounded-xl w-fll h-40" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">BMW</h2>

                            </div>
                        </div>
                    </div>
                   

                    <div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="">
                                <img src="https://i.ibb.co/RYP028q/3529803-64384.jpg" alt="Shoes" className="rounded-xl w-fll h-40" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Mercedes-Benz</h2>

                            </div>
                        </div>
                    </div>
                   

                    <div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="">
                                <img src="https://i.ibb.co/xCn1HzN/3d-electric-car-with-charged-battery-1.jpg" alt="Shoes" className="rounded-xl w-fll h-40" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Tesla</h2>

                            </div>
                        </div>
                    </div>
                

                    <div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="">
                                <img src="https://i.ibb.co/sJ2Zk8m/3529838-64419.jpg" alt="Shoes" className="rounded-xl w-fll h-40" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Honda</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>   */}





            <div className="mt-10">

                <div className=" text-center space-y-4">
                    <h1 className="text-4xl font-bold"> Our Premium Brands </h1>
                    <p className="text-sm font-medium">top-notch automotive service that specializes in providing maintenance, <br /> repairs, and customization for leading car brands, including Toyota, Ford, </p>



                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


                    {
                        brands.map(brand => <Link key={brand.id} to={`/toyota/${brand.name}`}>
                        
                        <div >

                            <div className="card  bg-base-100 shadow-xl">
                                <figure className="">
                                    <img src={brand.image} alt="Shoes" className="rounded-xl w-fll h-40" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{brand.name}</h2>

                                </div>
                            </div>
                        </div></Link>)
                    }


                </div>


            </div>




            <div className="bg-[#F8F8F8]">
                <OurItems></OurItems>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#F8F8F8]">

                <div className="card  ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/ws2ZqK2/fast.jpg" alt="Shoes" className="rounded-full h-28" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Fast Clearance</h2>
                        <p className="text-[#6c757d]">Excepteur sint occaecat cupidatat dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <div className="card-actions">
                            <button className="btn bg-[#F00] text-white">read more...</button>
                        </div>
                    </div>
                </div>
                {/* card 02 */}
                <div className="card  ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/8XxvDWM/cler.jpg" alt="Shoes" className="rounded-full h-28" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Fast Clearance</h2>
                        <p className="text-[#6c757d]">Excepteur sint occaecat cupidatat dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <div className="card-actions">
                            <button className="btn bg-[#F00] text-white">read more...</button>
                        </div>
                    </div>
                </div>
                {/* card 03 */}
                <div className="card   ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/vP2qzvp/ex2.jpg" alt="Shoes" className="rounded-full h-28" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Warranty Service</h2>
                        <p className="text-[#6c757d]">Ut enim ad minima veniam,
                            quis nostrum exercitationem ullam corporis suscipit laboriosam, aliquid ex commodi</p>
                        <div className="card-actions">
                            <button className="btn bg-[#F00] text-white">read more...</button>
                        </div>
                    </div>
                </div>

            </div>





            <div>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Home;