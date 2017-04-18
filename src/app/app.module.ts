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
import { EventService }from './services/event.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent},
      { path: "blog", component: BlogComponent},
      { path: "o mnie", component: AboutMeComponent},
      { path: "kontakt", component: ContactComponent},
      { path: "", redirectTo: "home", pathMatch: "full"},
      { path: "**", redirectTo: "home", pathMatch: "full"}
    ]), 
    ],
  declarations: [ AppComponent, BlogComponent, BlogTopicComponent, HomeComponent, AboutMeComponent, ContactComponent ],
  providers: [ FormPoster, EventService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
