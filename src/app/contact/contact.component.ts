import { Component } from '@angular/core';

@Component({
    selector: 'sm-contact',
    templateUrl: 'app/contact/contact.component.html'
})

export class ContactComponent{
public contactEnvelope: ContactEnvelope;

sendMessage (){

}

}

export class ContactEnvelope{

    constructor(
        public firstName: string,
        public email: string,
        public message: string
    ){}
    
}