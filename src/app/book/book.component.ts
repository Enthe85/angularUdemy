import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookModelTs } from '../models/book.model.ts';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent  implements OnInit{
    newBookCompomentTitle : string = "";
    newBookCompomentAuthor : string = "";
    
    bookcomponents : BookModelTs[] = []
    //Lädt die alten Daten
    ngOnInit(): void {
      let saveBooks = localStorage.getItem("bookcomponents")
      this.bookcomponents = saveBooks ? JSON.parse(saveBooks)  : []
    }

    addBookTitel(){
      //Prüft, ob Werte eingeben wurden
      if(this.newBookCompomentTitle.trim().length && this.newBookCompomentAuthor){
        let newBook : BookModelTs = {
          id: Date.now(),
          title: this.newBookCompomentTitle,
          author: this.newBookCompomentAuthor
        }
      //erstellt neuen Eintrag
      this.bookcomponents.push(newBook)

      //löscht einen Eintrag
      this.newBookCompomentTitle = "";
      this.newBookCompomentAuthor = "";
      localStorage.setItem("bookcomponents", JSON.stringify(this.bookcomponents))
      }
    }
    deleteBookcomponent(bookcomponents : BookModelTs):void{
      this.bookcomponents = this.bookcomponents.filter(a=>a!=bookcomponents);
      localStorage.setItem("bookcomponents",JSON.stringify(this.bookcomponents))
    }
  }
