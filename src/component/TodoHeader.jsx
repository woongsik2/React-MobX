import React, { Component } from 'react';

import { Col, Label, Badge, Input, Form, FormGroup, InputGroupAddon, InputGroup, Button } from 'reactstrap';

import { observable } from 'mobx';
import { observer, Provider, inject } from 'mobx-react';

import TodoButton from './TodoButton';

@inject('store')
@observer
class TodoHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.todoText = React.createRef();
        this._insertTodoList = this._insertTodoList.bind(this)
    }

    // _insertTodoList(next){
    //     let todoText = this.todoText.value
    //     if(todoText.length === 0) return
    //     next(todoText)
    // }

    _insertTodoList(){
        let todoText = this.todoText.value
        if(todoText.length === 0) return
        this.props.store.todoListInsert(todoText)
    }
    
    render() {
        const {store} = this.props;

        return (
                <div>
                    <Label>To-Do List <Badge>{store.todoListArray.length}</Badge></Label>
                    {/*<Input type='text' innerRef={input => this.todoText = input}></Input><TodoButton todoCreate={this._insertTodoList}/>*/}
                    <InputGroup>
                    <Input type='text' innerRef={input => this.todoText = input}/>
                    <InputGroupAddon addonType="prepend"><Button onClick={this._insertTodoList}>추가</Button></InputGroupAddon>
                    {/*<InputGroupAddon addonType="prepend"><Button onClick={this._insertTodoList}>제거</Button></InputGroupAddon>*/}
                    </InputGroup>
                </div>
        );
    }
}

export default TodoHeader;