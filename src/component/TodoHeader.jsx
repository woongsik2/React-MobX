import React, { Component } from 'react';

import { Label, Badge } from 'reactstrap';

class TodoHeader extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Label>To-Do List <Badge>{this.props.badge}</Badge></Label>
            </div>
        );
    }
}

export default TodoHeader;