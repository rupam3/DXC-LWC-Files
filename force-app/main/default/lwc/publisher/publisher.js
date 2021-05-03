import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE from '@salesforce/messageChannel/record_msg__c'

export default class Publisher extends LightningElement {
    msg;

    @wire(MessageContext)
    messageContext;

    handleChange(event){
        this.msg = event.target.value;
    }

    handleSubmit(){
        publish(this.messageContext, SAMPLE_MESSAGE, {message : this.msg});
    }
}