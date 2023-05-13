import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nbLink = localStorage.getItem('nbLink');
  nbFile = localStorage.getItem('nbFile');

  constructor() { }

  ngOnInit(): void{
    console.log('le nombre de liens est', this.nbLink);
  }

}
