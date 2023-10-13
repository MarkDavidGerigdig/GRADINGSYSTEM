import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent
  }
]

@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    RouterModule.forChild(routes)],
  exports:[RouterModule]
  
})
export class UserManagementModule { }
