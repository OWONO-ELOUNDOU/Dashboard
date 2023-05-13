import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  Users: any[] = [];

  constructor(
    private apiService: ServicesService
  ) { }

  NgOnInit(): void{
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
      this.Users = users;
      console.log(this.Users.length);
    })
  }
}
