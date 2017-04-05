import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
      <div>
        <nav class="navItem">
          <a class="bootstrapOverrides" [routerLink]="['/home']">Home</a>          
          <a class="bootstrapOverrides" [routerLink]="['/blog']">Blog</a>
          <a class="bootstrapOverrides" [routerLink]="['/o mnie']">O mnie</a>
          <a class="bootstrapOverrides" [routerLink]="['/kontakt']">Kontakt</a>
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
