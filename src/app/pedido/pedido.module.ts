import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './list-pedidos/pedido.component';
import { PedidoRoutingModule } from './pedido.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PedidoComponent],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    SharedModule
  ]
})
export class PedidoModule { }
