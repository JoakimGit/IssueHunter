import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditTicketComponent } from './components/add-edit-ticket/add-edit-ticket.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { TicketViewComponent } from './components/ticket-view/ticket-view.component';

const routes: Routes = [
  {
    path: '',
    component: MyTicketsComponent,
  },
  {
    path: 'tickets',
    component: TicketViewComponent,
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
