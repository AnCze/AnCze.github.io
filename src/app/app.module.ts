import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';
import { ContactComponent } from './contact/contact.component';
import { FormPoster } from './services/form-poster.service';
import { BlogTopicComponent } from './blog/blog-topic.component';
import { EventService } from './services/event.service';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { RouteActivatorService } from './services/route-activator.service';
import { CreateBlogTopic } from './blog/create-blog-topic.component';
import { BlogResolver } from './services/blog-resolver.service';
import { UserAuthService } from './services/user-auth.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), 
    ],
  declarations: [ 
    AppComponent, 
    BlogComponent, 
    BlogTopicComponent, 
    HomeComponent, 
    AboutMeComponent, 
    ContactComponent, 
    TopicDetailsComponent,
    Error404Component,
    CreateBlogTopic
     ],
  providers: [ 
    FormPoster, 
    EventService, 
    RouteActivatorService,
    BlogResolver,
    UserAuthService,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    } 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

function checkDirtyState(component: CreateBlogTopic){
  if(component.isDirty)
  return window.confirm('You have not saved this topic, do you really want to cancel?')
  return true
}
