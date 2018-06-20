import React, { Component } from 'react';

import { Col, Label, Badge, Input, Form, FormGroup } from 'reactstrap';

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

    _insertTodoList(next){
        let todoText = this.todoText.value
        if(todoText.length === 0) return
        next(todoText)
    }
    

    render() {
        const {store} = this.props;

        return (
                <div>
                    <Label>To-Do List<Badge>{store.todoListArray.length}</Badge></Label>
                    <Form inline>
                        <FormGroup>
                            <Input type='text' innerRef={input => this.todoText = input}></Input><TodoButton todoCreate={this._insertTodoList}/>
                        </FormGroup>
                    </Form>
                </div>
        );
    }
}

export default TodoHeader;