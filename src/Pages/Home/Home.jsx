import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner";
import OurItems from "../../components/OurItems/OurItems";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

         <div className="mt-10">
         <OurItems></OurItems>
         </div>


            <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {/* card 01 */}
                <div className="card  bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/ws2ZqK2/fast.jpg" alt="Shoes" className="rounded-full h-28" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Official Dealer</h2>
                        <p className="text-[#6c757d]">Similique minima magni quidem aliquid illo sequi corporis fugiat
                            type and llo similique magnisimilique minimamagniquidem</p>
                        <div className="card-actions">
                            <button className="btn bg-[#F00] text-white">read more...</button>
                        </div>
                    </div>
                </div>
                {/* card 02 */}
                <div className="card  bg-base-100 ">
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
                <div className="card  bg-base-100 ">
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
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;