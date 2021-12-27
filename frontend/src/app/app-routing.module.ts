import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { LayoutComponent } from './common/components/layout/layout.component';

const routes: Routes = [
  /* {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  }, */
  {
    path: 'auth',
    loadChildren: () => AuthModule,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'tickets',
        loadChildren: () =>
          import('./ticket/ticket.module').then((m) => m.TicketModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./project/project.module').then((m) => m.ProjectModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
