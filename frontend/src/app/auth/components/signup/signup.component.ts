import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationFacade } from '../../auth.facade';
import { TokenPayload } from '../../models/token';
import { User } from '../../models/user';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styles: [],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthenticationFacade
  ) {}

  public ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      company: [''],
      isNewCompany: [false],
    });
  }

  public onRegister(): void {
    if (this.signupForm.valid) {
      this.authFacade.register(this.signupForm);
    }
  }
}
