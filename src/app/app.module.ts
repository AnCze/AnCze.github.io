import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent},
      { path: "blog", component: BlogComponent},
      { path: "o mnie", component: AboutMeComponent},
      { path: "kontakt", component: ContactComponent},
      { path: "", redirectTo: "home", pathMatch: "full"},
      { path: "**", redirectTo: "home", pathMatch: "full"}
    ]), 
    ],
  declarations: [ AppComponent, BlogComponent, HomeComponent, AboutMeComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
