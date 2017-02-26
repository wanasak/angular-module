import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { UserServiceConfig } from './user.service';

@NgModule({
    imports: [CommonModule],
    declarations: [TitleComponent],
    exports: [TitleComponent],
    providers: [UserService]
})
export class CoreModule {
    // @SkipSelf - look for CoreModule in an ancestore injector
    // @Optional - By default the injector throws an error when it can't find a requested provider. @Optional means not finding the service is OK
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
        }
    }
    static forRoot(config: UserServiceConfig) : ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        };
    }
}