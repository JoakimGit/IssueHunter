import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddEditTicketComponent } from './components/add-edit-ticket/add-edit-ticket.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TicketListComponent, CommentComponent, AddEditTicketComponent],
  imports: [CommonModule, TicketRoutingModule, SharedModule],
})
export class TicketModule {}
