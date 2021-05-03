import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE from '@salesforce/messageChannel/record_msg__c'

export default class Subscriber extends LightningElement {
    recievedMessage = '';
    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscriberMessageChannel();
    }

    subscriberMessageChannel(){
        subscribe(this.messageContext, SAMPLE_MESSAGE, (result) => this.handleMessageChannel(result));
    }

    handleMessageChannel(result){
        this.recievedMessage = result.message;
    }
}