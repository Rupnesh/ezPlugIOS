import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChargeBlePage } from './charge-ble.page';
import { DashBoardService } from '../../../dashboard/dashboard.service'

import { BillBlePage } from './bill/bill-ble.page'
import { StorageService } from '../../../services/storage.service';

const routes: Routes = [
  {
    path: '',
    component: ChargeBlePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ChargeBlePage, BillBlePage],
  providers: [DashBoardService, StorageService],
  entryComponents: [
    BillBlePage
  ],
})
export class ChargeBlePageModule { }
