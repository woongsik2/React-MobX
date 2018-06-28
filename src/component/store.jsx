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
        let id = this.todoListArray.length > 0 ? this.todoListArray[this.todoListArray.length-1].id+1 : 1
        this.todoListArray.push({id:id, text:text})
        this.badgeCount = this.todoListArray.length
    }

    todoListDelete = (id) => {
        console.log("todoListDelete function >>", id)
        let removeIndex = this.todoListArray.map(arr => {
            return arr.id
        }).indexOf(id)
        this.todoListArray.splice(removeIndex, 1)
        this.badgeCount = this.todoListArray.length
    }
}
