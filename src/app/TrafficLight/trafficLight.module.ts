import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllersComponent } from './controllers/controllers.component';
import { TrafficComponenteComponent } from './traffic-componente/traffic-componente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ControllersComponent,
        TrafficComponenteComponent
  ],
    imports: [
        CommonModule,
        FormsModule
      
    ],
    exports: [
        TrafficComponenteComponent

    ]
  })

export class TrafficLightModule { }