import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesaComponent } from './list-mesas/mesa.component';

const routes: Routes =  [
    {path: '', component: MesaComponent}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MesaRoutingModule{}