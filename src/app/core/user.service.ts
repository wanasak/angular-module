import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
    username: string = 'Wanasak';
}

@Injectable()
export class UserService {
    username: string = 'Smudger';

    constructor(
        @Optional() config: UserServiceConfig
    ) {
        if (config) { this.username = config.username; }
    }

}