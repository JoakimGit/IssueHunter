import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  Subject,
  takeUntil,
} from 'rxjs';
import { AuthenticationFacade } from 'src/app/auth/auth.facade';
import { User } from 'src/app/auth/models/user';
import { Project } from '../../models/project';
import { ProjectFacade } from '../../project.facade';

@Component({
  selector: 'projectView',
  templateUrl: './projectList.component.html',
  styles: [],
})
export class ProjectViewComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentUser: User;
  projects$: Observable<Project[]>;
  filterInput = new FormControl();
  searchTerm = '';

  constructor(
    private projectFacade: ProjectFacade,
    private authFacade: AuthenticationFacade
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authFacade.getUserDetails() ?? ({} as User);
    this.projects$ = this.projectFacade.loadProjects();
    this.filterInput.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((term) => (this.searchTerm = term));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
