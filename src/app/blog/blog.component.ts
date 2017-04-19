import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    //selector: 'sm-blog',    
    templateUrl: 'app/blog/blog.component.html',
})

export class BlogComponent implements OnInit {
    events: any[]
    constructor(private eventService: EventService, private route: ActivatedRoute){
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']        
    }

    handleEventClicked(data) {
    console.log('received: ', data)
}
}

