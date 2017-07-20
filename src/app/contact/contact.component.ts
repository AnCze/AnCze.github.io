import { Component } from '@angular/core';
import { ContactEnvelope } from '../models/contactEnvelope.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from '../services/toastr.service';

@Component({
    selector: 'sm-contact',
    templateUrl: 'app/contact/contact.component.html',
    styleUrls: ['app/styles.css']
})

export class ContactComponent {
    contactEnvelope = new ContactEnvelope;

    imputNameToUpperCase(value: string) {
        if (value && value.length > 0) {
            this.contactEnvelope.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.contactEnvelope.firstName = value;
        }
    }

    constructor(private formPoster: FormPoster, private toastr: ToastrService) {

    }

    sendMessage(form: any) {
        this.toastr.info('Wysyłanie...');
        this.formPoster.posteContactEnvelope(this.contactEnvelope)
            .subscribe((event: any) => {
                this.toastr.success('Wiadomość wysłana pomyślnie!');
                this.contactEnvelope = new ContactEnvelope;
                form.resetForm();
            },
            err => {
                this.toastr.error('Wiadomość nie została wysłana!');
            });

    }
}
