import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { UserService } from 'src/app/shared/services/user.service';

@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MaintenanceModule
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule { }
