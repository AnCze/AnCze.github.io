import { Component } from '@angular/core'
import { EventService } from '../services/event.service'
import { ActivatedRoute } from '@angular/router';
import { ITopic } from '../models/topic.model';

@Component({
    selector: 'topic-detail',
    templateUrl: 'app/topic-details/topic-details.component.html',
    styleUrls: ['app/styles.css']
})

export class TopicDetailsComponent{
    event: ITopic

    constructor(private eventService: EventService, private route: ActivatedRoute){

    }

ngOnInit(){
this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
}

}