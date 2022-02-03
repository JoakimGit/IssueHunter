import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { Project } from 'src/app/project/models/project';
import { ProjectFacade } from 'src/app/project/project.facade';
import { Ticket } from '../../models/ticket';
import { TicketFacade } from '../../ticket.facade';

@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styles: [],
})
export class TicketListComponent implements OnInit {
  tickets$: Observable<Ticket[]>;
  project$: Observable<Project>;

  constructor(
    private ticketFacade: TicketFacade,
    private projectFacade: ProjectFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projectId: string = this.route.snapshot.params['id'];
    this.tickets$ = this.ticketFacade.loadTicketsByProjectId(projectId);
    this.project$ = this.projectFacade.getProjectById(projectId);
  }
}
