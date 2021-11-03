import React from "react";

import './style.css'

export default class Upload extends React.Component{

    constructor(){
        super()
        this.state = {
            listFiles :null,
            response :[],
            type: "",
            haveFile: false,
            style:{
                width: 0
            }
        }
        this.handleUpload = this.handleUpload.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete(this)
    }

    handleDelete(){}

    handleClick(){
        document.querySelector('.file-input').click();
    }

    handleChange(event){
        let selected = event.target.files[0]
        this.setState({
            listFiles: selected,
            style:{
                width: 0
            }
        })
        if(selected){
            this.setState({haveFile: true})
        }
        else{
            this.setState({haveFile: false})
        }
    }


    handleUpload(){

        if(this.state.listFiles==null){
            alert('Fail to upload')
        }

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/upload");
        xhr.upload.addEventListener('progress',(event)=>{
            let fileLoaded = Math.floor((event.loaded / event.total) * 100);
            console.log(fileLoaded)
            this.setState({
                style:{
                    width: `${fileLoaded}%`
                }
            })
        })


        let formData = new FormData();
        formData.append("formData",this.state.listFiles)
        

        xhr.send(formData)
        console.log(formData)
    }


    render(){
        return(
            <div id="upload-field">
            <div className="wrapper">
                <form action="#" onClick={this.handleClick} onChange={this.handleChange}>
                  <input className="file-input" type="file" name="file" hidden />
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>Browse File to Upload</p>
                </form>
                <section className="progress-area"></section>
                <section className="uploaded-area"></section>
            </div>
            <div id="action-btns">
                <div id="upload-btn" onClick={this.handleUpload}><p>Upload</p></div>
                <div id="delete-btn" onClick={this.handleDelete}><p>Remove all</p></div>
            </div>
            <div id="display-selected">
               
            </div>
            {
                this.state.haveFile ? 
                <ul>
                    <li>
                        <div className="file">
                            <div className="file-infor">
                                <p>File type: {this.state.listFiles.type}</p>
                            </div>
                            <p className="file-name">File name: {this.state.listFiles.name}</p>
                            <div className="progress">
                                <div style={this.state.style}></div>
                            </div>
                        </div>
                    </li>
                </ul>
                : <></>
            }
            </div>

        )
    }
}
