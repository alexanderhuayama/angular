import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { MaintenanceUserListComponent } from './components/maintenance-user-list.component';
import { MaintenanceUserListButtonUpdateComponent } from './components/maintenance-user-list-button-update.component';
import { MaintenanceUserFormButtonSaveComponent } from './components/maintenance-user-form-button-save.component';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    MaintenanceUserListComponent,
    MaintenanceUserListButtonUpdateComponent,
    MaintenanceUserFormButtonSaveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
