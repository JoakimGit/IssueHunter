import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user';
import { Project } from '../../models/project';
import { ProjectFacade } from '../../project.facade';

@Component({
  selector: 'invite',
  templateUrl: './invite.component.html',
  styles: [],
})
export class InviteComponent implements OnInit {
  employees$: Observable<User[]>;
  public selectedProject: Project;

  invitedMembers: string[] = [];
  private projectId: string;

  constructor(
    private projectFacade: ProjectFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];

    this.employees$ = this.projectFacade.getEmployees();
    this.projectFacade.getProjectById(this.projectId).subscribe((resp) => {
      this.selectedProject = resp;
    });
  }

  public checkBoxChanged(event: any) {
    const userId = event.target.value;
    if (this.invitedMembers.includes(userId)) {
      this.invitedMembers = this.invitedMembers.filter((id) => id !== userId);
    } else {
      this.invitedMembers.push(userId);
    }
  }

  public addMember(): void {
    if (this.invitedMembers.length) {
      this.projectFacade.addMemberToProject(
        this.invitedMembers,
        this.projectId
      );
    }
  }
}
