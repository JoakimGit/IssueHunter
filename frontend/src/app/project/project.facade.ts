import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProjectService } from './api/project.service';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectFacade {
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public loadProjects(): Observable<Project[]> {
    return this.projectService
      .getProjects()
      .pipe(map((data: any) => data.projects));
  }

  public createProject(project: Project): void {
    this.projectService.createProject(project).subscribe((resp) => {
      console.log(resp);
    });
  }

  public updateProject(project: Project): void {
    this.projectService.updateProject(project).subscribe((resp) => {
      console.log(resp);
    });
  }

  public getProjectById(id: string): Project {
    let project = new Project();
    this.projectService.getProjectById(id).subscribe((resp: Project) => {
      project = resp;
    });
    return project;
  }
}
