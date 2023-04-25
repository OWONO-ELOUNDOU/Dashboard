import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  Files: any[] = [];

  constructor(
    private service: ServicesService
  ) { }

  ngOnInit(): void{
    this.service.getFiles().pipe(map((res) => {
      const files = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          files.push({...res[key], id: key})
        }
      }
      return files;
    }))
    .subscribe((files) => {
      console.log(files);
      this.Files = files;
    })
    console.log(this.Files);
  }

}