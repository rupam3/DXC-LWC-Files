import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    
    handlePrevious(){
        const event = new CustomEvent('previous');
        this.dispatchEvent(event);
    }

    handleNext(){
        const nextEvent = new CustomEvent('next');
        this.dispatchEvent(nextEvent);
    }
}