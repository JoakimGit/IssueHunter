import { Component, OnInit } from '@angular/core';
import { AuthenticationFacade } from 'src/app/auth/auth.facade';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  constructor(public authFacade: AuthenticationFacade) {}

  ngOnInit(): void {}
}
