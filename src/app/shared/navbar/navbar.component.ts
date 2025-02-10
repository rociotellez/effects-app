import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  goUser( id: string) {
    if (!id) { return; }
    this.router.navigate(['/user', id]);
  }

}
