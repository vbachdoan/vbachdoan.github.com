import React from 'react'
import "../styles/Banner.css"

export default function Banner() {
    return (
        <div id="banner">
            <img src="./Image/header-banner-pcSize.webp" id="banner_image" alt="Dragster models" loading="lazy" />
            <div id="banner_content">
                <img src="./Image/header-banner-word.svg" id="banner_title" alt="Dragster" loading="lazy" />
                <div id="banner_explain">Born to impress</div>
            </div>
        </div>
    )
}
