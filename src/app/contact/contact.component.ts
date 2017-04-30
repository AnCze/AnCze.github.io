import { Component } from '@angular/core';
import { ContactEnvelope } from '../models/contactEnvelope.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from '../services/toastr.service';

@Component({
    selector: 'sm-contact',
    templateUrl: 'app/contact/contact.component.html'
})

export class ContactComponent{
contactEnvelope = new ContactEnvelope("", "", ""); 

imputNameToUpperCase(value: string){
if(value.length >0)
this.contactEnvelope.nameInput = value.charAt(0).toUpperCase() + value.slice(1);
else
this.contactEnvelope.nameInput = value;
}

constructor(private formPoster: FormPoster, private toastr: ToastrService){

}

sendMessage (form: NgForm){
    this.toastr.info('Wysyłanie...');
    this.formPoster.posteContactEnvelope(this.contactEnvelope)
            .subscribe(            
            data => {
                console.log('succes: ', data); 
                this.toastr.success('Wiadomość wysłana pomyślnie!'); 
                this.contactEnvelope = new ContactEnvelope("", "", "");                
            },
            err => {
                console.log('error: ', err); 
                this.toastr.error('Wiadomość nie została wysłana!')
            }        
)
}
}