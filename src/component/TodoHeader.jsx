import React, { Component } from 'react';
import { Label, Badge, Input, InputGroupAddon, InputGroup, Button } from 'reactstrap';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class TodoHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
        this.todoText = React.createRef();
        this._insertTodoList = this._insertTodoList.bind(this)
    }

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
                    <InputGroup>
                    <Input type='text' innerRef={input => this.todoText = input}/>
                    <InputGroupAddon addonType="prepend"><Button onClick={this._insertTodoList}>추가</Button></InputGroupAddon>
                    </InputGroup>
                </div>
        );
    }
}

export default TodoHeader;