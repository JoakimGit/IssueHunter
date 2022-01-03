import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { TicketFacade } from '../../ticket.facade';

@Component({
  selector: 'add-edit-ticket',
  templateUrl: './add-edit-ticket.component.html',
  styles: [],
})
export class AddEditTicketComponent implements OnInit {
  public ticketForm: FormGroup;
  public isAddMode: boolean;
  public selectedTicket: Ticket;
  private projectId: string;

  constructor(
    private fb: FormBuilder,
    private ticketFacade: TicketFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    const id: string = this.route.snapshot.params['ticketid'];
    this.isAddMode = !id;

    if (this.isAddMode) {
      this.selectedTicket = new Ticket();
      this.setFormGroup();
    } else {
      this.ticketFacade.getTicketById(id).subscribe((resp) => {
        this.selectedTicket = resp;
        this.setFormGroup();
      });
    }
  }

  private setFormGroup(): void {
    this.ticketForm = this.fb.group({
      name: [this.selectedTicket.name],
      description: [this.selectedTicket.description],
      priority: [this.selectedTicket.priority],
      status: [this.selectedTicket.status],
      type: [this.selectedTicket.type],
      assignedTo: [this.selectedTicket.assignedTo],
      dueDate: [this.selectedTicket.dueDate],
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
      this.ticketFacade.createTicket(this.selectedTicket);
    } else {
      this.ticketFacade.updateTicket(this.selectedTicket);
    }
  }
}
