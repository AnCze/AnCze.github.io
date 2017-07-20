import { Component } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/user/login.component.html'
})

export class LoginComponent {
    constructor(private userAuthService: UserAuthService, private router: Router) {

    }

    login(loginFormValues: any) {
        this.userAuthService.loginUser(loginFormValues.userName, loginFormValues.password);
        this.router.navigate(['blog']);
    }

    cancel() {
        this.router.navigate(['blog']);
    }
}
