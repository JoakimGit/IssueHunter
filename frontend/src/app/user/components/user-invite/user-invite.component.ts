import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationFacade } from 'src/app/auth/auth.facade';
import { User } from 'src/app/auth/models/user';
import { Role } from 'src/app/shared/enums/role';
import { UserFacade } from '../../user.facade';

@Component({
  selector: 'user-invite',
  templateUrl: './user-invite.component.html',
  styles: [],
})
export class UserInviteComponent implements OnInit {
  inviteUserForm: FormGroup;
  employees$: Observable<User[]>;

  constructor(
    private fb: FormBuilder,
    private userFacade: UserFacade,
    public authFacade: AuthenticationFacade
  ) {}

  ngOnInit(): void {
    this.inviteUserForm = this.fb.group({
      email: [''],
      userType: ['User'],
    });

    this.employees$ = this.userFacade.getEmployees();
  }

  public onUpdateRole(event: any, userId: string): void {
    const role: Role = event.target.value;
    this.userFacade.updateEmployeeRole(role, userId);
  }

  public addUserToCompany(): void {
    if (this.inviteUserForm.valid) {
      const { email, userType } = this.inviteUserForm.value;
      this.userFacade.addEmployeeToCompany(email, userType);
    }
  }

  public removeUserFromCompany(userId: string): void {
    this.userFacade.removeEmployeeFromCompany(userId);
  }
}
