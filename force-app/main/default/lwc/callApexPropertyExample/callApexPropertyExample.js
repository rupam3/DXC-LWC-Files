import { LightningElement, wire } from 'lwc';
import returnListOfContact from '@salesforce/apex/getContactsList.returnListOfContact';

export default class CallApexPropertyExample extends LightningElement {
    key = '';

    @wire(returnListOfContact, {searchKey : '$key'}) 
    contacts;

    handleChange(event){
        this.key = event.target.value;
    }
}