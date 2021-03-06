import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, tap } from 'rxjs';
import { User } from '../auth/models/user';
import { ProjectService } from './api/project.service';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectFacade {
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  public loadProjects(): Observable<Project[]> {
    return this.projectService
      .getProjects()
      .pipe(map((data: any) => data.projects));
  }

  public createProject(project: Project): void {
    this.projectService.createProject(project).subscribe((resp) => {
      this.router.navigate(['projects']);
      this.toastr.success('Project created', 'Success');
    });
  }

  public updateProject(project: Project): void {
    this.projectService.updateProject(project).subscribe((resp) => {
      this.router.navigate(['projects']);
      this.toastr.success('Project updated', 'Success');
    });
  }

  public getProjectById(id: string): Observable<Project> {
    return this.projectService.getProjectById(id);
  }

  public getEmployees(): Observable<User[]> {
    return this.projectService
      .getEmployees()
      .pipe(map((data: any) => data.members));
  }

  public addMemberToProject(userIds: string[], projectId: string): void {
    this.projectService.addMemberToProject(userIds, projectId).subscribe(() => {
      this.router.navigate([`projects/${projectId}/tickets`]);
      this.toastr.success('Member added to project', 'Success');
    });
  }

  public getProjectMembers(projectId: string): Observable<User[]> {
    return this.projectService
      .getProjectMembers(projectId)
      .pipe(map((data: any) => data.members));
  }
}
