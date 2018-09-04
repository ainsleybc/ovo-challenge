import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public weapons: Array<string> = ['rock', 'paper', 'scissors'];
  public playerChoice: string;

  public setPlayerChoice(weapon: string) {
    this.playerChoice = weapon;
  }
}
