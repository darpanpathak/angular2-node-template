import { Component } from '@angular/core';
import { SitemenuComponent } from '../sitemenu/sitemenu.component';

@Component({
    selector: 'home',
    providers: [SitemenuComponent],
    moduleId: module.id,
    templateUrl: './home.component.html'
})
export class HomeComponent {

}