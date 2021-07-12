import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Card, Timeline} from "../timelines";
import {TimelinesComponent} from "../timelines/timelines.component";
import {Service} from "../service";




@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardstoGuess : Card [] = []
  guessingCard!: Card |undefined;
  guesscards: Card[] = [];
  timeslines = TimelinesComponent;
  message = "";
  constructor(
    private route: ActivatedRoute,
    private service: Service,

  )
   {
  }


  ngOnInit() {
    // on récupère déjà toutes les cartes
    this.service.getCardsList().subscribe(cardList => {
      // remplir la liste des cartes à deviner
      this.cardstoGuess = cardList;
      // on fait le tirage aléatoire
      this.guessingCard = this.cardstoGuess[Math.floor(Math.random() * (this.cardstoGuess.length - 0 + 1)) + 0];

    });

  }

  onSubmit(form: NgForm,) {
    // je vérifie la date donnée par l'utilisateur
    console.log('liste en entrée')
    console.log(this.cardstoGuess)
    // @ts-ignore
    if (form.value.date === new Date(this.guessingCard?.date).getFullYear()) {
      // on insere la carte dans la liste des cartes déjà devinées
      // @ts-ignore
      this.guesscards.push(this.guessingCard);
      // on supprime la carte du paquet de carte existant
      console.log(this.guessingCard)
      // @ts-ignore
      this.cardstoGuess.splice((this.guessingCard?.id) - 1, 1)
      console.log('liste en sortie')
      console.log(this.cardstoGuess)
      // reselection d'une carte aléatoirement
      this.guessingCard = this.cardstoGuess[Math.floor(Math.random() * (this.cardstoGuess.length))];
      //affichage ordre chronologique
      this.guesscards.sort((a, b) => (a.date < b.date ? -1 : 1));
      this.message ="c'est la bonne date";
      console.log(this.message)
      // je réinitialise le form
      form.resetForm(form);
    }
    //on fait un message indiquant que c'est la mauvaise carte
    else { this.message="Vous n'avez pas saisi la bonne date"
      // je réinitialise le form
      form.resetForm(form);
      }
    }
  }

