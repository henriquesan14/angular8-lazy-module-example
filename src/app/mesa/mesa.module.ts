import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesaComponent } from './list-mesas/mesa.component';
import { MesaRoutingModule } from './mesa.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MesaComponent],
  imports: [
    CommonModule,
    MesaRoutingModule,
    SharedModule
  ]
})
export class MesaModule { }
