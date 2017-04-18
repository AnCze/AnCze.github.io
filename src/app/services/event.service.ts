import { Injectable } from '@angular/core'

@Injectable()
export class EventService{
getEvents(){
return events
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
        title: 'Skąd ten pomysł?!',
        image: 'app/images/ideaPhoto.jpg',
        date: '23/04/2017',
        body: 'Pewnego czerwcowego dnia wstałem z łóżka i zacząłem się zastanawiać'
    },
    {
        id: 3,
        title: 'Skąd ten pomysł?!',
        image: 'app/images/ideaPhoto.jpg',
        date: '23/04/2017',
        body: 'Pewnego czerwcowego dnia wstałem z łóżka i zacząłem się zastanawiać'
    }
    ]