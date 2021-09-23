import React from 'react'

const Slide2Card = () => {
    return (
        <div className="card">
            <h2 className="card_name">RR</h2>
            <img src="./Image/slide2_image2.webp" alt="RR model" loading="lazy" />
            {/* <!-- providing information for card --> */}
            <div className="wrap_information">
                <div className="block_information">
                    <div className="number"><h2>3</h2></div>
                    <p className="information">Cylinders</p>
                </div>
                <div className="block_information">
                    <div className="number">
                        <h2>798</h2>
                        <h3 className="sub_number">cc</h3>
                    </div>
                    <p className="information">Capacity</p>
                </div>
                <div className="block_information">
                    <div className="number">
                        <h2>140</h2>
                        <h3 className="sub_number">hp</h3>
                    </div>
                    <p className="information">Horsepower</p>
                </div>
            </div>
            <div className="card_btn">LEARN MORE</div>
        </div>
    )
}

export default Slide2Card
