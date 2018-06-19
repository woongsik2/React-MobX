import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';


export class Store{
    @observable test1 = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

    @action
    test = (text) => {
        this.test1 = text;
    }
}
