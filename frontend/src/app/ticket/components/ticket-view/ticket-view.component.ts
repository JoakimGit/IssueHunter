import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { AuthenticationFacade } from 'src/app/auth/auth.facade';
import { Project } from 'src/app/project/models/project';
import { ProjectFacade } from 'src/app/project/project.facade';
import { Ticket } from '../../models/ticket';
import { TicketFacade } from '../../ticket.facade';

@Component({
  selector: 'ticket-view',
  templateUrl: './ticket-view.component.html',
  styles: [],
})
export class TicketViewComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  tickets$: Observable<Ticket[]>;
  project$: Observable<Project>;
  filterInput = new FormControl();
  searchTerm = '';

  constructor(
    private ticketFacade: TicketFacade,
    private projectFacade: ProjectFacade,
    public authFacade: AuthenticationFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projectId: string = this.route.snapshot.params['id'];
    this.tickets$ = this.ticketFacade.loadTicketsByProjectId(projectId);
    this.project$ = this.projectFacade.getProjectById(projectId);
    this.filterInput.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((term) => (this.searchTerm = term));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
