import { Component } from '@angular/core';

@Component({
template: `
<h1>Edytuj profil</h1>
<hr>
<h3>[Create new topic will go here]</h3>

<button id="anczeButton" class="btn btn-default">Zapisz</button>
<button id="anczeButton" class="btn btn-default" (click)="cancel()" >Anuluj</button>
`
})

export class CreateBlogTopic {
  
}