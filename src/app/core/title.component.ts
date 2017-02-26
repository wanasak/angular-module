import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: './title.component.html'
})
export class TitleComponent {
    @Input() subTitle = '';
    title: String = 'Title';
    user: String = '';

    constructor( 
        userService: UserService
    ) {
        this.user = userService.username;
    }
}