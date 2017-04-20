import { Component } from '@angular/core';

@Component({
template: `
<h1>Edytuj profil</h1>
<hr>
<h3>[Edit profile form will go here]</h3>

<button  class="btn btn-primary">Zapisz</button>
<button  class="btn btn-default" (click)="cancel()" >Anuluj</button>
`,
})

export class ProfileComponent {
  
}