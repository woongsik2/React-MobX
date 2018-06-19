import React, { Component } from 'react';
import { Col, Alert } from 'reactstrap';
import Faker from 'faker/locale/ko';
import $ from 'jquery';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import TodoHeader from './TodoHeader';
import {Store} from './store';

var badgeCount = observable.box(0)

@inject('store')
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

    _click(res){
        this.props.store.test("5")
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
    }


    _insertTodoList(todoListArray){
        
    }

    render() {
        const {store} = this.props;
        return (
            <div>
                {store.test1}
                <Col lg={3}><TodoHeader badge={badgeCount}/></Col>
                <Col lg={3}><Alert>123</Alert></Col>
                <button onClick={this._click.bind(this)}>ttt</button>
            </div>
        );
    }
}

export default TodoList;