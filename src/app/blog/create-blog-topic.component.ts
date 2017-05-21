import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
templateUrl: 'app/blog/create-blog-topic.component.html'
})

export class CreateBlogTopic {
    isDirty: boolean = true
    categories = ['.Net', 'C#', 'Angular2', 'TypeScript', 'HTML', 'CSS', 'Inne'];
    constructor(private router: Router, private eventService: EventService){

    }

    saveEvent(formValues: any){
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/blog'])
    }

    cancel(){
        this.router.navigate(['/blog'])
    }   
}