import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Usecase8recordeditform extends LightningElement {
    @api objectApiName;

    handleSubmit(event){
        event.preventDefault();

        const fields = event.detail.fields;
        fields.Type = "New Customer";

        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(event){
        const evt = new ShowToastEvent({
            title: "Success",
            message: "New Opportunity created successfully " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}
