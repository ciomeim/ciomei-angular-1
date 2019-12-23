import { Component, OnInit } from '@angular/core';
import { Articolo }  from '../articolo'
@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {
  articolo: Articolo;
  constructor() {
    this.articolo = {
            titolo: "Creare componenti Angular 2",
            autore: "Mario Rossi",
            testo:  "Creare componenti con Angular 2 è molto semplice."
        };
   }

  ngOnInit() {
  }

}