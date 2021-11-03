import React from 'react'

import Slide2Card from './Slide2Card'
import '../styles/Slide2.css'
export default class Slide2 extends React.Component {

    state = {
        properties: [{
            cardName: "ROSSO",
            srcImg: "./Image/slide2_image1.webp",
            information: ["3", "Cylinders", "798", "cc", "Capacity", "110", "hp", "HorsePower"]
        },
        {
            cardName: "RR",
            srcImg: "./Image/slide2_image2.webp",
            information: ["3", "Cylinders", "798", "cc", "Capacity", "140", "hp", "HorsePower"],

        },
        {
            cardName: "RR SCS",
            srcImg: "./Image/slide2_image3.webp",
            information: ["3", "Cylinders", "798", "cc", "Capacity", "140", "hp", "HorsePower"]
        },
        {
            cardName: "RC SCS",
            srcImg: "./Image/slide2_image4.webp",
            information: ["3", "Cylinders", "798", "cc", "Capacity", "150", "hp", "HorsePower"]
        }
        ]
    }

    render() {
        return (
            // <!-- slide2 -->
            <div id="slide2">
                <div id="wrap_card">
                    {
                        this.state.properties.map((property, key) => {
                            return (
                                <>
                                    <Slide2Card
                                        cardName={property.cardName}
                                        srcImg={property.srcImg}
                                        information={property.information}
                                        key={key}
                                    />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

