import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './list-pedidos/pedido.component';

const routes: Routes = [
    {path: '', component: PedidoComponent}
]

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)  
    ],
    exports: [RouterModule]
})

export class PedidoRoutingModule{}