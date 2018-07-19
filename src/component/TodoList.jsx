import React, { Component } from 'react';
import { Col, Alert } from 'reactstrap';
import { observer, inject } from 'mobx-react';

import TodoHeader from './TodoHeader';

@inject('store')
@observer
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    _todoRemove(id){
        this.props.store.todoListDelete(id)
    }

    render() {
        const {store} = this.props;

        let listComponent = store.todoListArray.map(function(obj){
            return (
                <Alert key={obj.id} color='info' toggle={this._todoRemove.bind(this, obj.id)}>{obj.text}</Alert>
            )
        }.bind(this));

        return (
            <div>
                <Col lg={3}><TodoHeader/></Col>
                <Col lg={3}>{listComponent}</Col>
            </div>
        );
    }
}

export default TodoList;