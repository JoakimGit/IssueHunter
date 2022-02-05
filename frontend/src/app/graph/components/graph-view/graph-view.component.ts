import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graph-view',
  templateUrl: './graph-view.component.html',
  styles: [],
})
export class GraphViewComponent implements OnInit {
  ticketStatusData = [
    { name: 'Open', value: 14, extra: { tooltip: 'Open' } },
    { name: 'In Progress', value: 8, extra: { tooltip: 'In Progress' } },
    { name: 'Review', value: 6, extra: { tooltip: 'Ready for Review' } },
  ];

  openTicketsData = [
    {
      name: 'Tickets',
      series: [
        { name: '01-20', value: '13' },
        { name: '01-21', value: '16' },
        { name: '01-22', value: '14' },
        { name: '01-23', value: '12' },
        { name: '01-24', value: '10' },
        { name: '01-25', value: '11' },
        { name: '01-26', value: '12' },
      ],
    },
  ];

  ticketTypeData = [
    { name: 'Bug', value: 11 },
    { name: 'Task', value: 8 },
    { name: 'Feature', value: 5 },
    { name: 'Support', value: 4 },
  ];

  ticketPriorityData = [
    { name: 'Low', value: 11 },
    { name: 'Medium', value: 8 },
    { name: 'High', value: 5 },
    { name: 'Critical', value: 2 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
