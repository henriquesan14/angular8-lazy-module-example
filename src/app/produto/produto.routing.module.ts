import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './list-produtos/produto.component';

const routes: Routes = [
    {path: '', component: ProdutoComponent}
]

@NgModule({
    declarations:[],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule{}