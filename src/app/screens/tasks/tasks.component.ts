import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  Tasks: any[] = [];

  constructor(
    private apiService: ServicesService
  ) { }

  NgOnInit(): void{
    this.apiService.getTasks().pipe(map((res) => {
      const tasks = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          tasks.push({...res[key], id: key})
        }
      }
      return tasks;
    }))
    .subscribe((tasks) => {
      console.log(tasks);
      this.Tasks = tasks;
      console.log(this.Tasks.length);
    })
  }
}
