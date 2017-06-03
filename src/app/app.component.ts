import { Component } from '@angular/core';
import { UserAuthService } from './services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <div>
      <div>
        <nav class="navBar">
          <a class="navItem" [routerLink]="['/home']" routerLinkActive="active">Home</a>        
          <a class="navItem" [routerLink]="['/blog']" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Blog</a>
          <a *ngIf="auth.isAuthenticated()" class="navItem" [routerLink]="['/blog/new']" routerLinkActive="active">Nowy wpis</a>
          <a class="navItem" [routerLink]="['/o mnie']" routerLinkActive="active">O mnie</a>
          <a class="navItem" [routerLink]="['/kontakt']" routerLinkActive="active">Kontakt</a>
          <a *ngIf="!auth.isAuthenticated()" class="navItem navbar-right" [routerLink]="['user/login']">Login</a>
          <a *ngIf="auth.isAuthenticated()" class="navItem navbar-right" [routerLink]="['user/profile']">Witaj {{auth.currentUser.firstName}}</a>
          <a *ngIf="auth.isAuthenticated()" role="button" class="navItem navbar-right" (click)="logout()">Logout</a>
        </nav>
      </div>
          <div>
              <router-outlet></router-outlet>
          </div>
    </div>
  `,
  styleUrls: ['app/styles.css']
})
export class AppComponent {
  
  constructor(private auth: UserAuthService,
  private router: Router) {
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/blog'])
    })
  }
}
