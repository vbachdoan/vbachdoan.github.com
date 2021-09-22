import React from 'react'

import '../styles/Slide2.css'

const Slide2 = () => {
    return (
        // <!-- slide2 -->
        <div id="slide2">
            <div id="wrap_card">
                {/* <!-- card 1 --> */}
                <div class="card">
                    <h2 class="card_name">ROSSO</h2>
                    <img src="./Image/slide2_image1.webp" alt="ROSSO model" loading="lazy" />
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
                                <h2>110</h2>
                                <h3 class="sub_number">hp</h3>
                            </div>
                            <p class="information">Horsepower</p>
                        </div>
                    </div>
                    <div class="card_btn">LEARN MORE</div>
                </div>

                {/* <!-- card 2 --> */}
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

                {/* <!-- card 3 --> */}
                <div class="card">
                    <h2 class="card_name">RR SCS</h2>
                    <img src="./Image/slide2_image3.webp" alt="RR SCS model" loading="lazy" />
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

                {/* card 4 */}
                <div class="card">
                    <h2 class="card_name">RC SCS</h2>
                    <img src="./Image/slide2_image4.webp" alt="RC SCS model" loading="lazy" />
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
                                <h2>150</h2>
                                <h3 class="sub_number">hp</h3>
                            </div>
                            <p class="information">Horsepower</p>
                        </div>
                    </div>
                    <div class="card_btn">LEARN MORE</div>
                </div>

            </div>
        </div>
    )
}

export default Slide2
