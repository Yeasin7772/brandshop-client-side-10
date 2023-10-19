

const Banner = () => {
    return (
        <div >
            {/* https://i.ibb.co/sW24Lg1/bannercar.jpg */}

            <div className="hero h-[80vh]" style={{ backgroundImage: 'url( https://i.ibb.co/kDby4Wf/car6.jpg )' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">QUATTRO</h1>
                        <p className="mb-5"> It is a long established fact that a reader will bedistracted by the readable</p>
                        <button className="btn bg-[#F00] text-white">Car Listing</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;