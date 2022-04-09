import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StationDetailsBlePage } from './station-details-ble.page';
const routes: Routes = [
  {
    path: '',
    component: StationDetailsBlePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StationDetailsBlePage],
  entryComponents: []
})
export class StationDetailsBlePageModule {}
