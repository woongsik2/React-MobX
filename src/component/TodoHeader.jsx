import React, { Component } from 'react';

import { Col, Label, Badge, Input, Form, FormGroup } from 'reactstrap';

import { observable } from 'mobx';
import { observer, Provider } from 'mobx-react';

import TodoButton from './TodoButton';

var todoText = observable.box('')

class Store{
    @observable test = 'text'
}

const store = new Store();

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
        todoText = this.todoText.value
        next(todoText)
    }
    

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Label>To-Do List <Badge>{this.props.badge}</Badge></Label>
                    <Form inline>
                        <FormGroup>
                            <Input type='text' innerRef={input => this.todoText = input}></Input><TodoButton todoCreate={this._insertTodoList}/>
                        </FormGroup>
                    </Form>
                </div>
            </Provider>
        );
    }
}

export default TodoHeader;