import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITopic } from '../models/topic.model';

@Component({
    selector: 'blog-topic',
    template: `
                <article>
                    <header>
                        <h2>{{event.title}}</h2>
                        <p class="blogPostMeta">{{event.date}}<a href="">AnCze</a></p>
                    </header>
                    <div>
                        <img class="blogPostPhoto" [src]='event.image'/>
                    </div>
                    <div class="blogPostContent">
                        <p>{{event.body}}</p>
                        <button id="anczeButton" class="btn btn-default"  [routerLink]="['/blog', event.id]" (click)="readMore()">Czytaj dalej</button>
                    </div>
                    <hr>
                </article>
    `
})

export class BlogTopicComponent{
   @Input() event: ITopic
   @Output() eventClick = new EventEmitter()

   readMore(){
       this.eventClick.emit(this.event.title)
   }
}