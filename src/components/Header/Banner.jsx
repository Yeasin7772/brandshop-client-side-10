

const Banner = () => {
    return (
        <div >

            <div className="hero h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/sW24Lg1/bannercar.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-white font-mono">
                    <div className="" >
                        <h1 className="text-3xl mb-5 font-bold">QUATTRO</h1>
                        

                      <div className="flex justify-between gap-4 ">
                      <button className="btn  text-white bg-[#F00]
                         hover:bg-[#e6b7b9] px-5 ">About Us</button>
                      <button className="btn  text-white bg-[#969191]
                         hover:bg-[#e6b7b9] px-5 ">Car listing</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;