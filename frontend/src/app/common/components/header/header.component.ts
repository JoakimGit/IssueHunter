import { Component, OnInit } from '@angular/core';
import { AuthenticationFacade } from 'src/app/auth/auth.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  public theme = '';
  public showMenu = false;
  constructor(private authFacade: AuthenticationFacade) {}

  ngOnInit(): void {
    const mode = localStorage.getItem('theme');
    if (mode === 'dark') document.body.classList.toggle('dark');
  }

  public logout(): void {
    this.authFacade.logout();
  }

  public toggleTheme(): void {
    this.theme === 'dark' ? (this.theme = '') : (this.theme = 'dark');
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.className || '');
  }

  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
