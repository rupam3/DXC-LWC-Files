import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class CreateRecordExample extends LightningElement {
    accountId;

    name='';

    handleNameChange(event){
        this.name = event.target.value;
        this.accountId = undefined;
    }

    createAccount(){
        const fields= {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields};
        createRecord(recordInput)
            .then( account => {
                this.accountId = account.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Success",
                        message: "Account Created Successfully",
                        variant: "success",
                        mode: "sticky"
                    })
                );
            })
            .catch( error => {
                console.log(error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Error",
                        message: "Error creating new record",
                        variant: "success"
                    })
                );
            })
    }
}