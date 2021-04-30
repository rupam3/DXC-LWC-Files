import { LightningElement, api } from 'lwc';

export default class ChildCmp extends LightningElement {
    @api                               // decorators    // @api is used to make the property public
    childValue;
}