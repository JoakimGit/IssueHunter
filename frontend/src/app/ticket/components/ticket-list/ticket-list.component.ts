import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styles: [],
})
export class TicketListComponent implements OnInit {
  @Input()
  tickets: Ticket[];
  @Input()
  searchTerm: string;

  ngOnInit(): void {}
}
