import { LightningElement, api } from 'lwc';

export default class DataServiceExample extends LightningElement {
    @api recordId;  
    @api objectApiName;
    fields= ['AccountId', 'Name', 'Title', 'Phone', 'Email', 'Birthdate', 'Fax'];
}