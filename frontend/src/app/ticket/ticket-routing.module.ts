import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditTicketComponent } from './components/add-edit-ticket/add-edit-ticket.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketListComponent,
  },
  {
    path: 'tickets/new',
    component: AddEditTicketComponent,
  },
  {
    path: 'tickets/:ticketid',
    component: AddEditTicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
