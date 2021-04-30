import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    parentValue = 'Text Here!!';

    myFunc(event){
        this.parentValue = event.target.value;
    }
}