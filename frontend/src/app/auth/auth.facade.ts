import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../common/enums/role';
import { AuthService } from './api/auth.service';
import { TokenPayload } from './models/token';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationFacade {
  private token = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token') || '';
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

  public getUserDetails(): User | null {
    const token = this.getToken();
    if (token) {
      let payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public login(loginForm: FormGroup): void {
    let user: TokenPayload = { ...loginForm.value };
    console.log(user);

    this.authService.login(user).subscribe((resp) => {
      console.log(resp);
      if (resp.token) {
        this.saveToken(resp.token);
        this.router.navigate(['projects'], { relativeTo: this.route });
      }
    });
  }

  public register(signupForm: FormGroup): void {
    let user: TokenPayload = { ...signupForm.value };
    signupForm.value.company
      ? (user.role = Role.ADMIN)
      : (user.role = Role.USER);
    console.log(user);

    this.authService.register(user).subscribe((resp) => {
      console.log(resp);
      if (resp.token) {
        this.saveToken(resp.token);
        this.router.navigate(['projects'], { relativeTo: this.route });
      }
    });
  }

  public secretRoute(): void {
    this.authService.secretRoute().subscribe((resp) => {
      console.log(resp);
    });
  }
}
