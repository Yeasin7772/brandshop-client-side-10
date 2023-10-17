

const OurItems = () => {
    return (
        <div>
            <div> 

                <div className="mb-20 space-y-3">
                    <h2 className="text-center text-4xl font-bold">Cars Store</h2>
                    <p className="text-center  font-semibold"><small>All Engine Tuning Performance Sport</small></p>
                </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* item 01 */}
                <div className="card card-compact  ">
                    <figure>
                        <img className="h-56 border" src="https://quattro.true-emotions.studio/wp-content/uploads/2018/09/ozw_assetto-blk-555x555.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card text-base font-medium underline">Wolfrace Wheels Pro-Lite Eco 2.0</h2>
                        <p className="card-title font-bold">$210.05</p>
                        <div className="card-actions justify-center">
                            <button className="btn  text-[#F00]">Add to Card</button>
                        </div>
                    </div>
                </div>
                {/* item 02 */}
                <div className="card card-compact  ">
                    <figure>
                        <img className="h-56 border" src="https://quattro.true-emotions.studio/wp-content/uploads/2018/09/fol_caliper-laq-r1-555x555.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card underline text-base  font-medium ">Brembo OE Replacement Brake Pads</h2>
                        <p className="card-title font-bold">$150.00</p>
                        <div className="card-actions justify-center">
                            <button className="btn  text-[#F00]">Add to Card</button>
                        </div>
                    </div>
                </div>
                {/* item 03 */}
                <div className="card card-compact  ">
                    <figure>
                        <img className="h-56 border" src="https://quattro.true-emotions.studio/wp-content/uploads/2018/09/meg_g3300-555x555.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card text-base font-medium underline">Meguiar’s Paint Restoration Kit</h2>
                        <p className="card-title font-bold">$28.05</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[#F00] ">Add to Card</button>
                        </div>
                    </div>
                </div>
                {/* item 04 */}
                <div className="card card-compact  ">
                    <figure>
                        <img className="h-56 border" src="https://quattro.true-emotions.studio/wp-content/uploads/2018/09/spa_club-x1-blk-555x555.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card text-base font-medium underline">Racewear & Helmets</h2>
                        <p className="card-title font-bold">$104.00</p>
                        <div className="card-actions justify-center">
                            <button className="btn  text-[#F00]">Add to Card</button>
                        </div>
                    </div>
                </div>
                {/* item 05*/}
                <div className="card card-compact ">
                    <figure>
                        <img className="h-56 border" src="https://quattro.true-emotions.studio/wp-content/uploads/2018/09/for_fmdvspltr_blk-555x555.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card text-base font-medium underline">Forge “Split R” Splitter Valve</h2>
                        <p className="card-title font-bold">$123.05</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[#F00] ">Add to Card</button>
                        </div>
                    </div>
                </div>
                {/* item 06*/}
                <div className="card card-compact ">
                    <figure>
                        <img className="h-56 border" src="https://quattro.true-emotions.studio/wp-content/uploads/2018/09/mshmmtmic-wrx-08bkrd1-555x555.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card text-base font-medium underline">Mishimoto Top-Mount Intercooler</h2>
                        <p className="card-title font-bold">$78.05</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[#F00] ">Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default OurItems;