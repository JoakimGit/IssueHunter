import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role.guard';
import { Role } from '../shared/enums/role';
import { UserInviteComponent } from './components/user-invite/user-invite.component';

const routes: Routes = [
  {
    path: '',
    component: UserInviteComponent,
    canActivate: [RoleGuard],
    data: { roles: [Role.ADMIN] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
