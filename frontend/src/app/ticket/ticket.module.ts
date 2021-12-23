import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [TicketListComponent, CommentComponent],
  imports: [CommonModule, TicketRoutingModule],
})
export class TicketModule {}
