import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';
import { PageTitleComponent } from './page-title/page-title.component';


@NgModule({
  declarations: [PainelComponent, PageTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [PainelComponent, PageTitleComponent]
})
export class SharedModule { }
