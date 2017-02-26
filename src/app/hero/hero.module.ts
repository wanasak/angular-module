import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroRoutingModule } from './hero-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule,
        SharedModule
    ],
    declarations: [
        HeroComponent,
        HeroDetailComponent,
        HeroListComponent
    ],
})
export class HeroModule { }