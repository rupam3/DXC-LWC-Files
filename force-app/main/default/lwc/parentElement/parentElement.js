import { LightningElement } from 'lwc';

export default class ParentElement extends LightningElement {
    parentValue="";
    
    eventHandler(event){
        this.parentValue = event.detail;
    }
}