import { Component, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
selector: 'app-nav-bar',  imports: [AvatarModule,
    AvatarModule,
    ButtonModule,
    InputTextModule,
  RouterOutlet,
  RouterLink, RouterLinkActive],
 templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  imgURL: string = '/logo.png';
    _AuthService=inject(AuthService)
  isLogin:Boolean=false
  constructor(){
      this._AuthService.userInfo.subscribe({
        next: (res)=>{
          console.log("user's token: ", res)
          this.isLogin= res? true : false
        },
        error: (err)=>{console.log(err)}
      })
  }
  logOut(){
    this._AuthService.logOut()
  }
}
