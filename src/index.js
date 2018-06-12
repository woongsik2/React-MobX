import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MobxTest from './mobxTest.jsx';
import TodoList from './component/TodoList.jsx';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
