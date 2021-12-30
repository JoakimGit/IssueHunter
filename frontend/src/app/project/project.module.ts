import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './components/project-list/project.component';
import { SharedModule } from '../shared/shared.module';
import { AddeditprojectComponent } from './components/addeditproject/addeditproject.component';

@NgModule({
  declarations: [ProjectComponent, AddeditprojectComponent],
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
})
export class ProjectModule {}
