import React from "react";

export default class Header extends React.Component{
    render(){
        return(
            <div id='wrap-header'>
                <div id='left-navigation'>
                    <a href="#homepage"><img alt="logo" id="homepage__logo" src="./image/logo.png"/></a>
                    <a href="#product">PRODUCT</a>
                </div>
                <div id='right-navigation'>
                    <a href="#pricing">PRICING</a>
                    <a href="#about">ABOUT</a>
                    <a href="#contact">CONTACT</a>
                    <a href="#menu" id="header">...</a>
                </div>
            </div>
        )
    }
}