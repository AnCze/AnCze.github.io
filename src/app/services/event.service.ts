import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { ITopic } from '../models/topic.model'

@Injectable()
export class EventService{
getEvents(): Observable<ITopic[]>{             // Subject is a type of observable
    let subject = new Subject<ITopic[]>()
    setTimeout(() => {subject.next(events); subject.complete();}, 100)
return subject
}

getEvent(id: number): ITopic{
    return events.find(event => event.id === id)
}

}

const events: ITopic[] = [
    {
        id: 1,
        title: 'Skąd ten pomysł?!',
        image: 'app/images/ideaPhoto.jpg',
        date: new Date('23/04/2017'),
        body: 'Pewnego czerwcowego dnia wstałem z łóżka i zacząłem się zastanawiać'
    },
    {
        id: 2,
        title: 'Sam nie wiem?!',
        image: 'app/images/ideaPhoto.jpg',
        date: new Date('23/04/2017'),
        body: 'Pewnego czerwcowego dnia wstałem z łóżka i zacząłem się zastanawiać'
    },
    {
        id: 3,
        title: 'Jakoś idzie?!',
        image: 'app/images/ideaPhoto.jpg',
        date: new Date('23/04/2017'),
        body: 'Pewnego czerwcowego dnia wstałem z łóżka i zacząłem się zastanawiać'
    }
    ]