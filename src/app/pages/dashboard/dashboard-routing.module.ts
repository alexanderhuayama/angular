import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './maintenance/user/user.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './maintenance/other/other.component';
import { UserDetailComponent } from './maintenance/user/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent },
      { path: 'user', component: UserComponent },
      { path: 'user/:id', component: UserDetailComponent },
      { path: 'other', component: OtherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
