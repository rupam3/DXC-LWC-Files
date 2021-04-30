import { LightningElement } from 'lwc';

export default class ForEachExample extends LightningElement {

    contacts = [
        {
            Id: 1,
            Name: 'Mark',
            Title: 'CEO',
            Email: 'mark@salesforce.com'
        },
        {
            Id: 2,
            Name: 'Ammy',
            Title: 'VP',
            Email: 'ammy@salesforce.com'
        },
        {
            Id: 3,
            Name: 'John',
            Title: 'Sales Agent',
            Email: 'john@salesforce.com'
        }
    ];

}