import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styles: [],
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project;

  constructor() {}

  ngOnInit(): void {}
}
