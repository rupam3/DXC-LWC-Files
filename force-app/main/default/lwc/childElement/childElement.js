import { LightningElement } from 'lwc';

export default class ChildElement extends LightningElement {
    childValue = 'Text Here!!';

    myFunc(event){
        this.childValue = event.target.value;
    }

    handleClick(){
        const event = new CustomEvent('evt',{detail: this.childValue});
        this.dispatchEvent(event);
    }
}