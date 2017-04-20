import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
template: `
<h1>Nowy Wpis</h1>
<hr>
<h3>[Create new topic will go here]</h3>

<button  class="btn btn-primary">Zapisz</button>
<button  class="btn btn-default" (click)="cancel()" >Anuluj</button>
`
})

export class CreateBlogTopic {
    isDirty: boolean = true
    constructor(private router: Router){

    }

cancel(){
this.router.navigate(['/blog'])
}
}