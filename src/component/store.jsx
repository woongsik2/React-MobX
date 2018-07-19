import { observable, action } from 'mobx';


export class Store{
    todoListArray = observable.array([{id:1, text:"테스트 데이터"}, {id:2, text:"테스트 데이터2"}]);
    // @observable badgeCount = this.todoListArray.length;
    badgeCount = observable.box(this.todoListArray.length);

    @action
    todoListInsert = (text) => {
        let id = this.todoListArray.length > 0 ? this.todoListArray[this.todoListArray.length-1].id+1 : 1
        this.todoListArray.push({id:id, text:text});
        // this.badgeCount = this.todoListArray.length;
        this.badgeCount.set(this.todoListArray.length)
    };

    todoListDelete = (id) => {
        let removeIndex = this.todoListArray.map(arr => {
            return arr.id
        }).indexOf(id);
        this.todoListArray.splice(removeIndex, 1);
        // this.badgeCount = this.todoListArray.length;
        this.badgeCount.set(this.todoListArray.length)
    };
}
