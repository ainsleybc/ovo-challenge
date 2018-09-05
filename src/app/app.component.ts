import { Component } from '@angular/core';

interface Score {
  player: number;
  computer: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public weapons: Array<string>;
  public playerChoice: string;
  public computerChoice: string;
  public winner: string;
  public score: Score;

  constructor() {
    this.weapons = ['rock', 'paper', 'scissors'];
    this.score = { player: 0, computer: 0 };
  }

  public playGame(weapon: string): void {
    this.playerChoice = weapon;
    this.computerChoice = this.getComputerChoice();

    if (this.playerChoice === this.computerChoice) {
      this.winner = 'tie';
    } else {
      this.winner = this.getWinner();
      this.updateScore(this.winner);
    }
  }

  public resetGame(): void {
    this.playerChoice = undefined;
    this.computerChoice = undefined;
    this.winner = undefined;
  }

  private getComputerChoice() {
    const index = this.sample(this.weapons);
    return this.weapons[index];
  }

  private getWinner(): string {
    return this.isPlayerWinner() ? 'player' : 'computer';
  }

  private updateScore(winner): void {
    this.score[winner]++;
  }

  private isPlayerWinner(): boolean {
    const computer = this.weapons.indexOf(this.computerChoice);
    const player = this.weapons.indexOf(this.playerChoice);
    const inOrder: boolean = player < computer;

    return this.isEven(player + computer) ? inOrder : !inOrder;
  }

  private sample(array): number {
    return Math.floor(Math.random() * array.length);
  }

  private isEven(number: number): boolean {
    return !(number % 2);
  }
}
