import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../auth/guards/admin.guard';
import { Role } from '../shared/enums/role';
import { UserInviteComponent } from './components/user-invite/user-invite.component';

const routes: Routes = [
  {
    path: '',
    component: UserInviteComponent,
    canActivate: [AdminGuard],
    data: { roles: [Role.ADMIN] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
