import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role.guard';
import { Role } from '../shared/enums/role';
import { AddeditprojectComponent } from './components/addeditproject/addeditproject.component';
import { InviteComponent } from './components/invite/invite.component';
import { ProjectViewComponent } from './components/project-list/projectList.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectViewComponent,
  },
  {
    path: 'new',
    component: AddeditprojectComponent,
    canActivate: [RoleGuard],
    data: { roles: [Role.ADMIN] },
  },
  {
    path: ':id',
    component: AddeditprojectComponent,
    canActivate: [RoleGuard],
    data: { roles: [Role.ADMIN] },
  },
  {
    path: ':id/invite',
    component: InviteComponent,
    canActivate: [RoleGuard],
    data: { roles: [Role.ADMIN, Role.MANAGER] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
