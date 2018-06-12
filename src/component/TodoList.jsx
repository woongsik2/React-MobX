import React, { Component } from 'react';
import { Col, Alert } from 'reactstrap';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

import TodoHeader from './TodoHeader';
import TodoButton from './TodoButton';

var badgeCount = observable.box(0)

@observer
class TodoList extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
            
    //     }

    //     this._insertTodoList = this._insertTodoList.bind(this)
    // }

    
    componentWillMount() {
        badgeCount = 3
    }
    

    _insertTodoList(todoListArray){
        
    }

    render() {
        return (
            <div>
                <Col lg={3}><TodoHeader badge={badgeCount}/></Col>
                <Col lg={3}><Alert>123</Alert></Col>
                <Col lg={3}><TodoButton insert={this._insertTodoList}/></Col>
            </div>
        );
    }
}

export default TodoList;