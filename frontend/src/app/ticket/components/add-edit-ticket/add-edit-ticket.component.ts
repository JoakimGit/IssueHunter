import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthenticationFacade } from 'src/app/auth/auth.facade';
import { User } from 'src/app/auth/models/user';
import { ProjectFacade } from 'src/app/project/project.facade';
import { Comment } from '../../models/comment';
import { Ticket } from '../../models/ticket';
import { TicketFacade } from '../../ticket.facade';

@Component({
  selector: 'add-edit-ticket',
  templateUrl: './add-edit-ticket.component.html',
  styles: [],
})
export class AddEditTicketComponent implements OnInit {
  public ticketForm: FormGroup;
  public commentForm: FormGroup;
  public isAddMode: boolean;
  public selectedTicket: Ticket;
  public projectMembers$: Observable<User[]>;
  private projectId: string;
  public user: User;

  constructor(
    private fb: FormBuilder,
    private ticketFacade: TicketFacade,
    private authFacade: AuthenticationFacade,
    private projectFacade: ProjectFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    const id: string = this.route.snapshot.params['ticketid'];
    this.isAddMode = !id;

    const user = this.authFacade.getUserDetails();
    if (user) this.user = user;

    this.projectMembers$ = this.projectFacade.getProjectMembers(this.projectId);
    this.setCommentFormGroup();

    if (this.isAddMode) {
      this.selectedTicket = new Ticket();
      this.setTicketFormGroup();
    } else {
      this.ticketFacade.getTicketById(id).subscribe((resp) => {
        this.selectedTicket = resp;
        console.log(resp);

        this.setTicketFormGroup();
      });
    }
  }

  private setTicketFormGroup(): void {
    var datePipe = new DatePipe('en');

    this.ticketForm = this.fb.group({
      name: [this.selectedTicket.name, Validators.required],
      description: [this.selectedTicket.description, Validators.required],
      priority: [this.selectedTicket.priority],
      status: [this.selectedTicket.status],
      type: [this.selectedTicket.type],
      assignedTo: [this.selectedTicket.assignedTo || ''],
      dueDate: [datePipe.transform(this.selectedTicket.dueDate, 'yyyy-MM-dd')],
    });
  }

  private setCommentFormGroup(): void {
    this.commentForm = this.fb.group({
      content: [''],
    });
  }

  public onSubmit(): void {
    if (this.ticketForm.invalid) {
      return;
    }
    this.selectedTicket = {
      ...this.selectedTicket,
      ...this.ticketForm.value,
      projectId: this.projectId,
    };

    if (this.isAddMode) {
      console.log(this.selectedTicket);

      this.ticketFacade.createTicket(this.selectedTicket);
    } else {
      this.ticketFacade.updateTicket(this.selectedTicket);
    }
  }

  public onCommentSubmit(event: Event): void {
    event.preventDefault();

    const content = this.commentForm.value.content.trim();
    if (!content) return;

    this.ticketFacade
      .addCommentToTicket(content, this.selectedTicket._id)
      .subscribe((data: any) => {
        console.log(data);

        this.selectedTicket.comments.push(data.comment);
      });

    this.setCommentFormGroup();
  }
}
