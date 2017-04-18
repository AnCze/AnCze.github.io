import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
    selector: 'sm-blog',    
    templateUrl: 'app/blog/blog.component.html',
})

export class BlogComponent implements OnInit {
    events: any[]
    constructor(private eventService: EventService){
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()        
    }

    handleEventClicked(data) {
    console.log('received: ', data)
}
}

