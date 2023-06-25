import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { User } from '../auth/models/user';
import { Role } from '../shared/enums/role';
import { UserService } from './api/user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public getEmployees(): Observable<User[]> {
    return this.userService
      .getEmployees()
      .pipe(map((data: any) => data.members));
  }

  public updateEmployeeRole(role: Role, employeeId: string): void {
    this.userService.updateEmployeeRole(role, employeeId).subscribe(() => {
      this.toastr.success('User Updated', 'Success');
    });
  }

  public addEmployeeToCompany(email: string, role: Role): void {
    this.userService
      .getUserByEmail(email)
      .pipe(
        switchMap((user) =>
          this.userService.addEmployeeToCompany(user._id, role)
        ),
        tap(() => {
          this.reloadComponent();
          this.toastr.success('User added', 'Success');
        })
      )
      .subscribe();
  }

  public removeEmployeeFromCompany(userId: string): void {
    this.userService.removeEmployeeFromCompany(userId).subscribe(() => {
      this.reloadComponent();
      this.toastr.success('User removed', 'Success');
    });
  }

  public reloadComponent(): void {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
