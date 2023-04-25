import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  Links: any[] = [];


  constructor(
    private apiService: ServicesService
  ) { }

  ngOnInit(): void{
    this.apiService.getLinks().pipe(map((res) => {
      const links = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          links.push({...res[key], id: key})
        }
      }
      return links;
    }))
    .subscribe((links) => {
      console.log(links);
      this.Links = links;
      console.log(this.Links.length)
    })
  }

}
