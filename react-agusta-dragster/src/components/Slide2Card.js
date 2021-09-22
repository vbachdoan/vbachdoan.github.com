import React from 'react'

const Slide2Card = () => {
    return (
        <div class="card">
            <h2 class="card_name">RR</h2>
            <img src="./Image/slide2_image2.webp" alt="RR model" loading="lazy" />
            {/* <!-- providing information for card --> */}
            <div class="wrap_information">
                <div class="block_information">
                    <div class="number"><h2>3</h2></div>
                    <p class="information">Cylinders</p>
                </div>
                <div class="block_information">
                    <div class="number">
                        <h2>798</h2>
                        <h3 class="sub_number">cc</h3>
                    </div>
                    <p class="information">Capacity</p>
                </div>
                <div class="block_information">
                    <div class="number">
                        <h2>140</h2>
                        <h3 class="sub_number">hp</h3>
                    </div>
                    <p class="information">Horsepower</p>
                </div>
            </div>
            <div class="card_btn">LEARN MORE</div>
        </div>
    )
}

export default Slide2Card
