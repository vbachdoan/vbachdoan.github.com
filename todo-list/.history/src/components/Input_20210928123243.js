import React from "react";

import './Input.css'


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
                <input
            </>
        )
    }

}