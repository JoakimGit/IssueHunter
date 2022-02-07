import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectViewComponent } from './components/project-list/projectList.component';
import { SharedModule } from '../shared/shared.module';
import { AddeditprojectComponent } from './components/addeditproject/addeditproject.component';
import { InviteComponent } from './components/invite/invite.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    ProjectViewComponent,
    AddeditprojectComponent,
    InviteComponent,
    ProjectComponent,
  ],
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
})
export class ProjectModule {}
