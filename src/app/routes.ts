import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';
import { ContactComponent } from './contact/contact.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { Error404Component } from './errors/404.component';
import { RouteActivatorService } from './services/route-activator.service';
import { CreateBlogTopic } from './blog/create-blog-topic.component';
import { BlogResolver } from './services/blog-resolver.service';

export const appRoutes: Routes = [
      { path: 'home', component: HomeComponent},
      { path: 'blog/new', component: CreateBlogTopic, canDeactivate: ['canDeactivateCreateEvent']},
      { path: 'blog', component: BlogComponent, resolve: {events: BlogResolver}},
      { path: 'blog/:id', component: TopicDetailsComponent, canActivate: [RouteActivatorService]},
      { path: 'o mnie', component: AboutMeComponent},
      { path: 'kontakt', component: ContactComponent},
      { path: '404', component: Error404Component},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
    ];
