import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  fixedFooter = true;

  currentYear: number = 0;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    // Rest of the code...
  }
  
  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  collapseNavbar() {
    if (!this.isNavbarCollapsed) {
      this.isNavbarCollapsed = true;
    }
  }
}
