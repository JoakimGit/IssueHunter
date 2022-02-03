import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserInviteComponent } from './components/user-invite/user-invite.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserInviteComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
