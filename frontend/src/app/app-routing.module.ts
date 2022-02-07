import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { LayoutComponent } from './common/components/layout/layout.component';
import { UnderConstructionComponent } from './common/components/under-construction/under-construction.component';

const routes: Routes = [
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
        path: 'settings',
        component: UnderConstructionComponent,
      },
      {
        path: 'terms',
        component: UnderConstructionComponent,
      },
      {
        path: 'users/profile',
        component: UnderConstructionComponent,
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./project/project.module').then((m) => m.ProjectModule),
      },
      {
        path: 'projects/:id',
        loadChildren: () =>
          import('./ticket/ticket.module').then((m) => m.TicketModule),
      },
      {
        path: 'tickets',
        loadChildren: () =>
          import('./ticket/ticket.module').then((m) => m.TicketModule),
      },
      {
        path: 'people',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'graphs',
        loadChildren: () =>
          import('./graph/graph.module').then((m) => m.GraphModule),
      },
    ],
  },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
