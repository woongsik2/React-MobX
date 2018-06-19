import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, Provider } from 'mobx-react';

import {Store} from './store';
import TodoList from './TodoList';

const store = new Store();

class TodoMain extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoList/>
            </Provider>
        );
    }
}

export default TodoMain;