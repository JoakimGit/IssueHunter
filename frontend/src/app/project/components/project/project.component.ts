import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/auth/models/user';
import { Project } from '../../models/project';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styles: [],
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project;
  @Input()
  user: User;

  constructor() {}

  ngOnInit(): void {}
}
