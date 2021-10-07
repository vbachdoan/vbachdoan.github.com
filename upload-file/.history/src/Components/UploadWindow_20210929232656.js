import React from "react";

import "../Styles/UploadWindow.scss"

export default class UploadWindow extends React.Component{
    render(){
        return(
            <div id="wrap-upload">
                <input type="file" id="input" value=""/>
            </div>
        )
    }
}