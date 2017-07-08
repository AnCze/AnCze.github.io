import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { ITopic } from "../models/topic.model";

@Component({
    templateUrl: 'app/blog/create-blog-topic.component.html',
    styleUrls: ['app/styles.css']
})

export class CreateBlogTopic {
    isDirty: boolean = true
    categories = ['.Net', 'C#', 'Angular2', 'TypeScript', 'HTML', 'CSS', 'Inne'];
    constructor(private router: Router, private eventService: EventService) {

    }

    saveEvent(formValues: any) {
        this.eventService.saveEvent(formValues).subscribe(event => {
            this.router.navigate(['/blog'])
            this.isDirty = false
        })

    }

    cancel() {
        this.router.navigate(['/blog'])
    }
}