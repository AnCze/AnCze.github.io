import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { ITopic } from '../models/topic.model';

@Component({
    templateUrl: 'app/blog/blog.component.html',
    styleUrls: ['app/styles.css']
})

export class BlogComponent implements OnInit {
    events: ITopic[];
    filterBy = 'wszystkie';
    activeEvents: ITopic[] = [];
    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
        this.activeEvents = this.events.slice(0);
    }

    handleEventClicked(data: any) {
        console.log('received: ', data);
    }

    changeFilter() {
        if (this.events) {
            this.filterTopic(this.filterBy);
        }
    }


    filterTopic(filter: string) {
        if (filter === 'wszystkie') {
            this.activeEvents = this.events;
        } else {
            this.activeEvents = this.events.filter(event => {
                return event.category.toLocaleLowerCase() === filter;
            });
        }
    }
}

