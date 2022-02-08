import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  Subject,
  Observable,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  tap,
} from 'rxjs';
import { AuthenticationFacade } from 'src/app/auth/auth.facade';
import { Project } from 'src/app/project/models/project';
import { ProjectFacade } from 'src/app/project/project.facade';
import { Ticket } from '../../models/ticket';
import { TicketFacade } from '../../ticket.facade';

@Component({
  selector: 'my-tickets',
  templateUrl: './my-tickets.component.html',
  styles: [],
})
export class MyTicketsComponent implements OnInit {
  private destroy$ = new Subject<void>();
  tickets$: Observable<Ticket[]>;
  project$: Observable<Project>;
  filterInput = new FormControl();
  searchTerm = '';

  constructor(
    private ticketFacade: TicketFacade,
    private projectFacade: ProjectFacade,
    private authFacade: AuthenticationFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = this.authFacade.getUserDetails()?._id;

    if (userId) {
      this.tickets$ = this.ticketFacade.getTicketsByUserId(userId);
    }

    this.filterInput.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((term) => (this.searchTerm = term));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
