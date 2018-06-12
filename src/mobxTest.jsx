import _ from 'lodash';
import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Test from './test';

const count1 = observable.box(0);
const count2 = observable.box(0);
const array = observable.array();

@observer
class MobxTest extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         array : []
    //     }
    // }

    insertButton(){
        console.log('insertButton')
        // array.set(5)
        // array.set(array.get() + 1)
        array.push([])
        console.log(array.length)
    }

    removeButton(){
        
    }

    render() {
        const Test1 = observer(
            () => (
                <div>{count2.get()}</div>
            )
        )

        const Test2 = observer(
            () => (
                array.map(function(obj, index){
                    return <div key={index}>{count2.get()}</div>
                })
            )
        )

        // let array = [];
        // array.push(Test1)
        // array.push(Test2)

        // const Test3 = _.concat(Test1, Test2);
        // console.log(array)
        return (
            <div>
                <button onClick={this.insertButton}>추가</button>
                <button onClick={this.removeButton}>제거</button><br/>
                <button onClick={() => {count1.set(count1.get() -1), count2.set(count2.get() -1)}}>-</button>
                <div>{count1.get()}</div>
                
                <Test2/>
                
                <button onClick={() => {count1.set(count1.get() +1), count2.set(count2.get() +1)}}>+</button>
                <Test/>
            </div>
        );
    }
}

export default MobxTest;