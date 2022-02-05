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
import { Project } from '../../models/project';
import { ProjectFacade } from '../../project.facade';

@Component({
  selector: 'projectView',
  templateUrl: './projectList.component.html',
  styles: [],
})
export class ProjectViewComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  projects$: Observable<Project[]>;
  filterInput = new FormControl();
  searchTerm = '';

  constructor(private projectFacade: ProjectFacade) {}

  ngOnInit(): void {
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
