// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LandingComponent } from './landing.component';

import {LandingRoutingModule} from './landing-routing.module'
import { CommonModule } from '@angular/common';

import {ListItemComponent} from './components'
import { HomeModule } from './home/home.module';
import { RedSectionModule } from '../shared';

@NgModule({
    imports: [
        LandingRoutingModule,
        CommonModule,
        HomeModule,
        RedSectionModule
    ],                                                  
    declarations: [
        LandingComponent, 
        ListItemComponent
    ],
    exports: [
        LandingComponent,
    ]
})
export class LandingModule {}
