import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {

  constructor() {

    if(localStorage.getItem('index') === null ) {
      localStorage.setItem('index', '0');
    }
  }

}
