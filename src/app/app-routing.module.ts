import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'mesas', loadChildren: () => import('./mesa/mesa.module').then(m => m.MesaModule)},
  {path: 'produtos', loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule)},
  {path: 'pedidos', loadChildren: () => import('./pedido/pedido.module').then(m => m.PedidoModule)},
  {path:'', pathMatch: 'full', redirectTo: 'pedidos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
