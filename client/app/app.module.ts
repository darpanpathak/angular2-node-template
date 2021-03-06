import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SitemenuComponent } from './sitemenu/sitemenu.component';
import { routing } from './app.routes';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    imports: [BrowserModule, RouterModule, routing, HttpModule, FormsModule],
    declarations: [AppComponent, loginComponent, HomeComponent, SitemenuComponent, AboutComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AuthGuard, AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
