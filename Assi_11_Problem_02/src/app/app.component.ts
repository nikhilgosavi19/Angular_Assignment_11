import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], // Use Router directives
  template: `
    <nav class="nav-tabs">
      <a routerLink="/technologies" routerLinkActive="active">Technologies</a>
      <a routerLink="/books" routerLinkActive="active">Books</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .nav-tabs {
        display: flex;
        justify-content: center;
        background-color: #f8f9fa;
        padding: 10px;
      }
      .nav-tabs a {
        text-decoration: none;
        color: #007bff;
        padding: 10px 20px;
        margin: 0 10px;
        border-radius: 5px;
        font-weight: bold;
      }
      .nav-tabs a.active {
        background-color: #007bff;
        color: white;
      }
    `,
  ],
})
export class AppComponent {}
