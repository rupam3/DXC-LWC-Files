import { api, LightningElement } from 'lwc';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';

export default class RecordEditFormExample extends LightningElement {
    @api 
    recordId;

    @api 
    objectApiName;

    accountId = ACCOUNT_FIELD;
    name = NAME_FIELD;
    phone= PHONE_FIELD;
    email = EMAIL_FIELD;
    title = TITLE_FIELD;
}