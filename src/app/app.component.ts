import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
      <div>
        <nav class="navBar">
          <a class="navItem" [routerLink]="['/home']">Home</a>          
          <a class="navItem" [routerLink]="['/blog']">Blog</a>
          <a class="navItem" [routerLink]="['/o mnie']">O mnie</a>
          <a class="navItem" [routerLink]="['/kontakt']">Kontakt</a>
        </nav>
      </div>
          <div>
              <router-outlet></router-outlet>
          </div>
    </div>
  `,
})
export class AppComponent  { 

}
