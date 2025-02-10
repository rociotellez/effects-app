import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{
  users: User[] = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUsers().subscribe((users) => {
        this.users = users;
      });
  }

}
