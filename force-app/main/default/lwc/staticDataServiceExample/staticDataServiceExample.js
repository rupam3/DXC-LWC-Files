import { LightningElement, api } from 'lwc';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class StaticDataServiceExample extends LightningElement {
    @api recordId;  
    @api objectApiName;
    fields = [ACCOUNT_FIELD, NAME_FIELD, PHONE_FIELD, EMAIL_FIELD];
}