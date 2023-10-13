import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementModule } from './user-management.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserManagementModule
  }
]

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class UserManagementRoutingModule { }
