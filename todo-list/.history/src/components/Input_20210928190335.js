import React from "react";

import './Input.css'
import Axios from 'axios'

export default class Input extends React.Component {

    constructor() {
        super()
        this.state = {
            toDoItem: '',
            listToDoItem: []
        }
    }


    handleClick = () => {
        this.setState({
            listToDoItem: this.state.listToDoItem.concat(this.state.toDoItem),
            toDoItem: ''
        })
    }

    handleChange(e) {
        console.log(e.target.files[0])
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
                <input type="file" onChange={this.handleChange}></input>
                <button onClick={(e) => this.onFileUpload(e)}>
                    Upload!
                </button>
            </>
        )
    }

}