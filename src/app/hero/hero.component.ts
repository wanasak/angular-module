import { Component } from '@angular/core';

import { HeroService } from './hero.service';
import { UserService } from '../core/user.service';

@Component({
    template: `
        <h2>Hero of {{ username }}</h2>
        <router-outlet></router-outlet>
    `,
    providers: [HeroService]
})
export class HeroComponent {
    username: string = '';
    constructor(
        userService: UserService
    ) {
        this.username = userService.username;
    }
}