import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUri = environment.apiUri;

  constructor(private http: HttpClient) {}

  public getTicketsByProjectId(projectId: string): Observable<Ticket> {
    return this.http.get<Ticket>(
      this.apiUri + `/projects/${projectId}/tickets`
    );
  }

  public getTicketById(ticketId: string): Observable<Ticket> {
    return this.http.get<Ticket>(this.apiUri + `/tickets/${ticketId}`);
  }

  public createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUri + '/tickets', ticket);
  }

  public updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(
      this.apiUri + '/tickets/' + ticket._id,
      ticket
    );
  }
}
