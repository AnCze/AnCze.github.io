import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/RX'

@Injectable()
export class EventService{
getEvents(){
    let subject = new Subject()
    setTimeout(() => {subject.next(events); subject.complete();}, 100)
return subject
}

getEvent(id: number){
    return events.find(event => event.id === id)
}

}

const events = [
    {
        id: 1,
        title: 'Skąd ten pomysł?!',
        image: 'app/images/ideaPhoto.jpg',
        date: '23/04/2017',
        body: 'Pewnego czerwcowego dnia wstałem z łóżka i zacząłem się zastanawiać'
    },
    {
        id: 2,
        title: 'Sam nie wiem?!',
        image: 'app/images/ideaPhoto.jpg',
        date: '23/04/2017',
        body: 'Pewnego czerwcowego dnia wstałem z łóżka i zacząłem się zastanawiać'
    },
    {
        id: 3,
        title: 'Jakoś idzie?!',
        image: 'app/images/ideaPhoto.jpg',
        date: '23/04/2017',
        body: 'Pewnego czerwcowego dnia wstałem z łóżka i zacząłem się zastanawiać'
    }
    ]