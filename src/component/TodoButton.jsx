import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class TodoButton extends Component {
    constructor(props){
        console.log(super(props))
        super(props)
        this.state = {

        }
        this.insertTodo = this.insertTodo.bind(this)
    }

    insertTodo(){
        this.props.todoCreate(function(res){
            this.props.store.todoListInsert(res)
        }.bind(this))
    }

    removeTodo(){
        console.log('removeTodo')
    }

    render() {
        const {store} = this.props;
        return (
            <div className="float-right">
                <Button color='primary' onClick={this.insertTodo}>추가</Button>
                <Button color='primary' onClick={this.removeTodo}>제거</Button>
            </div>
        );
    }
}

export default TodoButton;