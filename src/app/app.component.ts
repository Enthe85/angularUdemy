import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from "./book/book.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-management-system';
}
