import { Component, OnInit } from '@angular/core';
import { AuthenticationFacade } from 'src/app/auth/auth.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor(private authFacade: AuthenticationFacade) {}

  ngOnInit(): void {}

  public logout(): void {
    this.authFacade.logout();
  }
}
