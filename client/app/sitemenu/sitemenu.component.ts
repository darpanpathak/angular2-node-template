import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'site-menu',
    moduleId: module.id,
    templateUrl: './sitemenu.component.html'
})
export class SitemenuComponent{
    private isLoggedin: boolean;
    private username:string;

    constructor(public authService: AuthenticationService) {
        this.isLoggedin = authService.isLoggedin();
        this.username = JSON.parse(localStorage.getItem("token")).username;
    }

    logout(){
        this.authService.logout();
    }
}