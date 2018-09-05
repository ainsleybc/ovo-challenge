import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public weapons: Array<string> = ['rock', 'paper', 'scissors'];
  public playerChoice: string;
  public computerChoice: string;
  public winner: string;

  public setPlayerChoice(weapon: string): void {
    this.playerChoice = weapon;
  }

  public play(): void {
    this.computerChoice = this.getComputerChoice();
    this.winner = this.getWinner();
  }

  private getComputerChoice() {
    const index = this.sample(this.weapons);
    return this.weapons[index];
  }

  private getWinner(): string {
    if (this.playerChoice === this.computerChoice) {
      return 'tie';
    } else if (this.isPlayerWinner()) {
      return 'player';
    } else {
      return 'computer';
    }
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
