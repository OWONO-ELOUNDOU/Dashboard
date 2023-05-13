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
  isLoading = false;

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
      console.log(this.Files.length);
      localStorage.setItem('nbFile', JSON.stringify(this.Files.length));
    })
    console.log(this.Files);
  }

  onSubmit(doc: {
    nom: string,
    image: string,
    adresse: string
  }) {
    this.isLoading = true;
    this.service.createDoc(doc).subscribe((res) => {
      console.log(res);
      this.isLoading = false;
      alert('le document a été enregistré');
    }, (error) => {
      this.isLoading = false;
      alert('une erreur est survenue');
    })
  }

}