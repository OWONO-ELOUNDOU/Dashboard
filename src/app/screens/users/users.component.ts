import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersList: User[] = [];

  constructor(
    private apiService: ServicesService
  ) { }

  ngOnInit(): void{
    this.apiService.getUsers().pipe(map((res) => {
      const users = [];
      for(const key in res){
        if(res.hasOwnProperty(key)) {
          users.push({...res[key], id: key})
        }
      }
      return users;
    }))
    .subscribe((users) => {
      console.log(users);
      this.usersList = users;
      console.log(this.usersList.length);
      localStorage.setItem('nbUser', JSON.stringify(this.usersList.length));
    })
  }

  delete(id: string) {
    // TODO : Delete user by ID and refresh the list of users
    this.apiService.deleteUser(id)
  }

  showUserList() {
    this.apiService.getUsers().subscribe((res) => {
      console.log('users:' + JSON.stringify(res));
    })
  }
}
