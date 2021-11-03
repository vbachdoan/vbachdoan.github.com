import React from "react";

export default class Header extends React.Component{
    render(){
        return(
            <div id='wrap-header'>
                <div id='left-navigation'>
                    <a href="#homepage"><img id="logo__image" src="./image/logo.png"/></a>
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