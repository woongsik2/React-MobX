import React, { Component } from 'react';
import { Col, Alert, Input, UncontrolledAlert } from 'reactstrap';
import Faker from 'faker/locale/ko';
import $ from 'jquery';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import TodoHeader from './TodoHeader';
import {Store} from './store';

@inject('store')
@observer
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }

        // this._insertTodoList = this._insertTodoList.bind(this)
        this.checkedFlag = React.createRef();
    }

    
    componentWillMount() {

    }    

    _insertTodoList(todoListArray){
        
    }

    _todoRemove(id){
        this.props.store.todoListDelete(id)
    }

    render() {
        const {store} = this.props
        // console.log(store.todoListArray.length)
        
        let listComponent = store.todoListArray.map(function(obj){
            return (

                // <UncontrolledAlert key={obj.id} color='info'>{obj.text}</UncontrolledAlert>
                <Alert key={obj.id} color='info' toggle={this._todoRemove.bind(this, obj.id)}>{obj.text}</Alert>

                /*<FormGroup check key={obj.id}>
                <Label check><Alert ><Input type="checkbox"/>{' '}{obj.text}</Alert></Label>
                </FormGroup>*/
            )
        }.bind(this))

        return (
            <div>
                <Col lg={3}><TodoHeader/></Col>
                <Col lg={3}>{listComponent}</Col>
            </div>
        );
    }
}

export default TodoList;