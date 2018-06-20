import React, { Component } from 'react';
import { Col, Alert } from 'reactstrap';
import Faker from 'faker/locale/ko';
import $ from 'jquery';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import TodoHeader from './TodoHeader';
import {Store} from './store';

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
        console.log(">>>>>>>>>>>>>>>", this.props.store.todoListArray.length)
    }    

    _insertTodoList(todoListArray){
        
    }

    render() {
        const {store} = this.props
        console.log(store.todoListArray.length)
        
        let listComponent = store.todoListArray.map(function(obj){
            return (
                <Col lg={3} key={obj.id}><Alert><button type="check"></button>{obj.text}</Alert></Col>
            )
        })
        // <Col lg={3}><Alert>123</Alert></Col>

        return (
            <div>
                <Col lg={3}><TodoHeader/></Col>
                {listComponent}
            </div>
        );
    }
}

export default TodoList;