import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Ticket } from '../../models/ticket';
import { TicketFacade } from '../../ticket.facade';

@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styles: [],
})
export class TicketListComponent implements OnInit {
  tickets$: Observable<Ticket[]>;

  constructor(
    private ticketFacade: TicketFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projectId: string = this.route.snapshot.params['id'];
    this.tickets$ = this.ticketFacade.loadTicketsByProjectId(projectId);
  }
}
