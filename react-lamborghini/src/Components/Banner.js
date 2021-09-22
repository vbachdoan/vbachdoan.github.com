import React from 'react'

import './Banner.css'

const styles = {
    transition: 'all .4s ease-in-out'
}

export default class Banner extends React.Component {
    state = {
        style: {
            left: '-100%',
        }
    }

    render() {
        return (
            // <!-- begin banner -->
            <div id="banner">
                {/* <!-- content of banner --> */}
                <div id="banner_content">
                    <div class="sub_title">AVENTADOR LP 780-4 ULTIMAE</div>
                    <div class="title">IT TAKES TIME TO BECOME TIMELESS</div>
                    <div class="change_slide_button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271" class="button_hexagon" id="banner_hexagon">
                            <g stroke-width="1.5" transform="translate(-1624 -187.923)" stroke="white" fill="rgba(255,255,255,0)">
                                <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" class="hexagon on-dark"></path>
                                <path class="icon on-dark" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                {/* <!-- progress symbols show the place of banner --> */}
                <div id="banner_nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <img id="banner-image" src='./image/Header_banner1.webp' alt="banner images" />

            </div>
        )
    }
}