import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/auth/models/user';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUri = environment.apiUri;

  constructor(private http: HttpClient) {}

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUri + '/projects');
  }

  public getProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(this.apiUri + '/projects/' + id);
  }

  public createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUri + '/projects', project);
  }

  public updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(
      this.apiUri + '/projects/' + project._id,
      project
    );
  }

  public getEmployees(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUri + '/people');
  }

  public addMemberToProject(
    userIds: string[],
    projectId: string
  ): Observable<any> {
    return this.http.patch<any>(
      this.apiUri + `/projects/${projectId}/add-user`,
      {
        members: userIds,
      }
    );
  }

  public getProjectMembers(projectId: string): Observable<User[]> {
    return this.http.get<User[]>(
      this.apiUri + `/projects/${projectId}/members`
    );
  }
}
