import { LightningElement } from 'lwc';

export default class MyFirstComp extends LightningElement {
    name = 'Rupam';
    isVisible = false;

    handleChange(event){
        this.name = event.target.value;
    }

    handleClick(){
        this.isVisible = true;
    }

    handleCancel(){
        this.isVisible = false;
        
    }
}