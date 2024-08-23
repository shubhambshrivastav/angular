import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
    { name: 'David' },
    { name: 'Eva' }
  ];

  // Variable to store the filter query
  filterQuery: string = '';

  // Function to get the filtered list of users
  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.filterQuery.toLowerCase())
    );
  }
}
