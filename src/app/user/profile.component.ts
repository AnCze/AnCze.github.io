import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';


@Component({
templateUrl: 'app/user/profile.component.html'
})

export class ProfileComponent implements OnInit {
    profileForm: FormGroup
    private firstName: FormControl
    private lastName: FormControl

    constructor(private userAuthService: UserAuthService, private router: Router){

    }

    ngOnInit(){
      this.firstName = new FormControl(this.userAuthService.currentUser.firstName, Validators.required)
      this.lastName = new FormControl(this.userAuthService.currentUser.lastName, Validators.required)
      this.profileForm = new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName
      })
  }

  cancel(){
        this.router.navigate(['blog'])
  }

  saveProfile(formValues: any){
      if (this.profileForm.valid){
        this.userAuthService.updateCurrentUser(formValues.firstName, formValues.lastName)
        this.router.navigate(['blog'])
    }
  }

  validateFirstName(){
      return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
      return this.lastName.valid || this.lastName.untouched
  }
}