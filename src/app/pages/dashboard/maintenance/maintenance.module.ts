import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    OtherComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserModule
  ]
})
export class MaintenanceModule { }
