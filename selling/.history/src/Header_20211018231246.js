import React from "react";

export default class Header extends React.Component{
    render(){
        return(
            <div class=>
                <div id='left-navigation'>
                    <a href="#homepage"><img src=""/></a>
                    <a href="#product">PRODUCT</a>
                </div>
                <div id='right-navigation'>
                    <a href="#pricing">PRICING</a>
                    <a href="#about">ABOUT</a>
                    <a href="#contact">CONTACT</a>
                    <a href="#menu">...</a>
                </div>
            </div>
        )
    }
}