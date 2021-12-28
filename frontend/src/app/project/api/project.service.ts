import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUri = environment.apiUri;
  
  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Project>  {
    return this.http.get<Project>(this.apiUri + '/projects');
  }

  public createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUri + '/projects', project);
  }

  public updateProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUri + '/projects/'+ project._id, project);
  }
}
