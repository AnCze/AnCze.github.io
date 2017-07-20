import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ITopic } from '../models/topic.model';

@Component({
    selector: 'blog-topic',
    templateUrl: 'app/blog/blog-topic.component.html',
    styleUrls: ['app/styles.css']
})

export class BlogTopicComponent {
    @Input() event: ITopic;
    @Output() eventClick = new EventEmitter();

    readMore() {
        this.eventClick.emit(this.event.title);
    }
}
