import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TicketService } from './api/ticket.service';
import { Ticket } from './models/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketFacade {
  constructor(
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public loadTicketsByProjectId(projectId: string): Observable<Ticket[]> {
    return this.ticketService
      .getTicketsByProjectId(projectId)
      .pipe(map((data: any) => data.tickets));
  }

  public createTicket(ticket: Ticket): void {
    const projectId = ticket.projectId;
    this.ticketService.createTicket(ticket).subscribe(() => {
      this.router.navigate(['projects', projectId, 'tickets']);
    });
  }

  public updateTicket(ticket: Ticket): void {
    const projectId = ticket.projectId;
    this.ticketService.updateTicket(ticket).subscribe(() => {
      this.router.navigate(['projects', projectId, 'tickets']);
    });
  }

  public getTicketById(id: string): Observable<Ticket> {
    return this.ticketService.getTicketById(id);
  }
}
