import React from "react";

import './Input.css'
import axios from "axios";
export default class Input extends React.Component {

    constructor() {
        super()
        this.state = {
            toDoItem: '',
            listToDoItem: [],
            file: null,
        }
    }



    handleChange(e) {
        this.setState({
            file: e.target.file[0]
        })
        console.log(e.target.files[0])
    }

    handleUpload() {

        let file = this.state.file
        let formData = new FormData()

        formData.append('image', file)
        formData.append('name', "Vuong dep trai")

        axios({
            method: 'POST',
            url: '/user/12345',
            headers: {
                authorization: "Your token"
            },
            data: formData,
        }).then((res) => {
            console.log("res")

        })

    }

    render() {
        return (
            <>
                <div id='wrap-input'>
                    <input id="input" type='text' value={this.state.toDoItem} onChange={(event) => { this.setState({ toDoItem: event.target.value }) }}></input>
                </div>
                <button id='add-button' onClick={this.handleClick}>Add</button>
                <ul id='todo-Item'>
                    {this.state.listToDoItem.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <input type="file" onChange={(e) => this.handleChange(e)}></input>
                <button onClick={this.handleUpload()}>
                    Upload!
                </button>
            </>
        )
    }

}