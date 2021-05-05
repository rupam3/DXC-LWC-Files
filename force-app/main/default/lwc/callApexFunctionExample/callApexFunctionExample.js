import { LightningElement, wire } from 'lwc';
import returnListOfContact from '@salesforce/apex/getContactsList.returnListOfContact';
import imperativeCallContact from '@salesforce/apex/getContactsList.imperativeCallContact';

export default class CallApexFunctionExample extends LightningElement {
    key = '';
    result;
    error;

    @wire(returnListOfContact, {searchKey : '$key'}) 
    wiredData({error, data}){
        if(data){
            this.result = data;
        } else if(error){
            this.error = error;
        }
    }

    handleChange(event){
        this.key = event.target.value;
    }

    handleClick(){
        alert('Calling Imperatively');
        imperativeCallContact()
            .then((result) => {
                this.result = result;
            })
            .catch((error) => {
                this.error =error;
            })
    }
}