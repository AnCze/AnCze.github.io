import { Component } from '@angular/core'
import { EventService } from '../services/event.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/topic-details/topic-details.component.html'
})

export class TopicDetailsComponent{
    event: any

    constructor(private eventService: EventService, private route: ActivatedRoute){

    }

ngOnInit(){
this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
}

}