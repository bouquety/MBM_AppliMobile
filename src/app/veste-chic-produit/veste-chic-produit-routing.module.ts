import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VesteChicProduitPage } from './veste-chic-produit.page';

const routes: Routes = [
  {
    path: '',
    component: VesteChicProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VesteChicProduitPageRoutingModule {}
