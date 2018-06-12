import React, { Component } from 'react';
import { Button } from 'reactstrap';

class TodoButton extends Component {
    constructor(props){
        console.log(super(props))
        super(props)
        this.state = {

        }
        this.insertTodo = this.insertTodo.bind(this)
    }

    insertTodo(){
        console.log('insertTodo')
        this.props.insert([{id:1},{id:2},{id:3}])

    }

    removeTodo(){
        console.log('removeTodo')
    }

    render() {
        return (
            <div className="float-right">
                <Button color='primary' onClick={this.insertTodo}>추가</Button>
                <Button color='primary' onClick={this.removeTodo}>제거</Button>
            </div>
        );
    }
}

export default TodoButton;