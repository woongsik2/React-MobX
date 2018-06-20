import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';


export class Store{
    todoListArray = observable.array([{id:1, text:"테스트 데이터"}, {id:2, text:"테스트 데이터2"}])

    @action
    test = (text) => {
        // console.log("store test function")
        this.badgeCount = text;
    }

    @action
    todoListInsert = (text) => {
        console.log("todoListInsert function >> ", text)
        this.todoListArray.push({id:this.todoListArray.length+1, text:text})
        this.badgeCount = this.todoListArray.length
    }
}
