import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have a choice of weapons to choose from', () => {
    expect(app.weapons).toEqual(['rock', 'paper', 'scissors']);
  });

  it('should render a button element for each weapon', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('ul button').length).toEqual(3);
  });

  describe('setPlayerChoice', () => {
    it('sets the players choice of weapon', () => {
      app.setPlayerChoice('some-weapon');
      expect(app.playerChoice).toEqual('some-weapon');
    });
  });

  describe('playGame', () => {
    it('sets the winner of the game if the game is a tie', () => {
      app.playerChoice = 'paper';
      spyOn(app, 'sample').and.returnValue(1);
      app.playGame();
      expect(app.winner).toEqual('tie');
    });

    it('sets the winner of the game if the player wins', () => {
      app.playerChoice = 'rock';
      spyOn(app, 'sample').and.returnValue(2);
      app.playGame();
      expect(app.winner).toEqual('player');
    });

    it('sets the winner of the game if the computer wins', () => {
      app.playerChoice = 'paper';
      spyOn(app, 'sample').and.returnValue(2);
      app.playGame();
      expect(app.winner).toEqual('computer');
    });
  });

  describe('resetGame', () => {
    it('resets the game so the user can play again', () => {
      app.resetGame();
      expect(app.playerChoice).toBeFalsy();
      expect(app.computerChoice).toBeFalsy();
      expect(app.winner).toBeFalsy();
    });
  });
});
