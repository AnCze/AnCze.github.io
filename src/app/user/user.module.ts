import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common' // in app module we import BrowserModule, in feature module we import CommonModule
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'

@NgModule({
imports: [
    CommonModule,
    RouterModule.forChild(userRoutes) // in app module we call forRoot but in feature module we call forChild
],
declarations: [
    ProfileComponent
],
providers: [

]
})

export class UserModule{

}