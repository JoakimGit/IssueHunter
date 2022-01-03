import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Project } from '../../models/project';
import { ProjectFacade } from '../../project.facade';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styles: [],
})
export class ProjectComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private projectFacade: ProjectFacade) {}

  ngOnInit(): void {
    this.projects$ = this.projectFacade.loadProjects();
  }
}
