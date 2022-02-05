import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent implements OnInit {
  @Input()
  searchPlaceholder: string;

  ngOnInit(): void {}
}
