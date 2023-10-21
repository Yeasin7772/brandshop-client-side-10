

const Banner = () => {
    return (
        <div  className="mt-10">
            {/* https://i.ibb.co/sW24Lg1/bannercar.jpg */}

            <div className="hero h-[80vh]" style={{ backgroundImage: 'url( https://i.ibb.co/7VCVH2L/front-wheel-blue-vintage-sedan.jpg )' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-[#F00]">QUATTRO</h1>
                        <p className="mb-5 text-gray-200"> It is a long established fact that a reader will bedistracted by the readable</p>
                        <input type="text" placeholder="Find your brand" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;