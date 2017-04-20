import { Injectable } from '@angular/core'
import { IUser } from '../models/user.model'

@Injectable()
export class UserAuthService{
    currentUser: IUser

    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,            
            firstName: 'Andrzej',
            lastName: 'Czechowski'
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}