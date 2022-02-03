import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user';
import { Role } from 'src/app/shared/enums/role';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUri = environment.apiUri;

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUri + '/people');
  }

  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.apiUri + '/people/email/' + email);
  }

  public updateEmployeeRole(role: Role, userId: string) {
    return this.http.patch(this.apiUri + '/people/' + userId, { role });
  }

  public addEmployeeToCompany(userId: string, role: Role) {
    return this.http.post(this.apiUri + '/company/members', { userId, role });
  }

  public removeEmployeeFromCompany(userId: string) {
    return this.http.delete(this.apiUri + '/company/members/' + userId);
  }
}
