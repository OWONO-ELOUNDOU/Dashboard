import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  people = 'assets/images/image.png';
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void{
  }

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
  } 
}
