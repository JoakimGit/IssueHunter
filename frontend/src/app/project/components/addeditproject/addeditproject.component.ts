import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectFacade } from '../../project.facade';

@Component({
  selector: 'addeditproject',
  templateUrl: './addeditproject.component.html',
  styles: [],
})
export class AddeditprojectComponent implements OnInit {
  public projectForm: FormGroup;
  public isAddMode: boolean;
  public selectedProject: Project;

  constructor(
    private fb: FormBuilder,
    private projectFacade: ProjectFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.isAddMode = !id;

    if (this.isAddMode) {
      this.selectedProject = new Project();
      this.setFormGroup();
    } else {
      this.projectFacade.getProjectById(id).subscribe((resp) => {
        this.selectedProject = resp;
        this.setFormGroup();
      });
    }
  }

  private setFormGroup(): void {
    this.projectForm = this.fb.group({
      name: [this.selectedProject.name, Validators.required],
      description: [this.selectedProject.description, Validators.required],
    });
  }

  public onSubmit() {
    if (this.projectForm.invalid) {
      return;
    }
    this.selectedProject = {
      ...this.selectedProject,
      ...this.projectForm.value,
    };

    if (this.isAddMode) {
      this.projectFacade.createProject(this.selectedProject);
    } else {
      this.projectFacade.updateProject(this.selectedProject);
    }
  }
}
