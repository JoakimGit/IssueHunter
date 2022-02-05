import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';
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

  public getTicketsByUserId(userId: string): Observable<Ticket> {
    return this.http.get<Ticket>(this.apiUri + `/tickets/user/${userId}`);
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

  public addCommentToTicket(
    content: string,
    ticketId: string
  ): Observable<Comment> {
    return this.http.post<Comment>(
      this.apiUri + `/tickets/${ticketId}/comments`,
      { content }
    );
  }
}
