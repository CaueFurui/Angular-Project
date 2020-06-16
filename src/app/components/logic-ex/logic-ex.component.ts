import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../../assets/rounds.json';

@Component({
  selector: 'app-logic-ex',
  templateUrl: './logic-ex.component.html',
  styleUrls: ['./logic-ex.component.scss']
})
export class LogicExComponent implements OnInit {

  joaoPoints: number;
  mariaPoints: number;
  aux: any;
  resultado: number

  jogo = {
    rodada: {
        last: 0,
        inProgress: 0,
        after: 0
    },
    rules: {
        limit: 5,
        pointsOfRound: 1
    },
    players: []
};

  rounds:  any  = (data  as  any).default;

// Cada jogador pode ter no máximo 5 cartas na mão em qualquer momento. 

  constructor(
    ) { }

  ngOnInit() {
    // this.getJson()
    console.log(this.rounds)

    this.setPlayer("Joao");
    this.setPlayer("Maria");
    
    console.log(this.jogo)

    this.rounds.map((card, index) => {
      // 3,5,1,7,5,1,10,4,2,9
      this.round(index+1, card, this.jogo.players[0]);
      this.round(index+1, card, this.jogo.players[1]);
      this.jogo.rodada.inProgress++;
  });

  }

  round(round, card, player){
    if(player.deck.length === 0) {
      //add carta ao deck
        return player.deck = [...player.deck, {
            card,
            qtOfRoundsInDeck: round
        }]
    } else if(player.deck.find(value => value === card)) {
      // add um ponto
        const cardInHands = player.deck.find(value => value === card);
        cardInHands.qtOfRoundsInDeck === round;
        return player.points += 1;
    } else if (player.deck.find(value => value !== card) && player.deck.length >= 5){
      //estrategia de descarte de cada jogador
      // infelizmente não concluído :/  
    } else {
        return player.deck = [...player.deck, {
            card,
            qtOfRoundsInDeck: round
        }]
    }
}

  setPlayer(name){
    this.jogo.players.push({
      name,
      points: 0,
      deck: []
    });
}

}
