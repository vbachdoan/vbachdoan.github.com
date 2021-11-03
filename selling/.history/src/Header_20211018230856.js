import React from "react";

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <div id='left-navigation'>
                    <a href="#homepage"><img src=""/></a>
                    <a href="#product">PRODUCT</a>
                </div>
                <div id='right-navigation'>
                    <a href="#pricing">PRICING</a>
                    <a href="#about">ABOUT</a>
                    <a href="#product">CONTACT</a>
                    <a href="#product">...</a>
                </div>
            </div>
        )
    }
}