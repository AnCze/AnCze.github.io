//Navigation guard
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './event.service';

@Injectable()

export class RouteActivatorService implements CanActivate {
constructor(private eventService: EventService, private router: Router){

}

canActivate(route: ActivatedRouteSnapshot){
const eventExists = !!this.eventService.getEvent(+route.params['id']) // !! =cast to boolien // + =cast to number

if(!eventExists)
this.router.navigate(['/404'])
return eventExists
}
}