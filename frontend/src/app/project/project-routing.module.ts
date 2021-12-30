import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditprojectComponent } from './components/addeditproject/addeditproject.component';
import { ProjectComponent } from './components/project-list/project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: 'new',
    component: AddeditprojectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
