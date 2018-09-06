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

  describe('playGame', () => {
    it('sets the winner of the game if the game is a tie', () => {
      spyOn(app, 'sample').and.returnValue(1);
      app.playGame('paper');
      expect(app.winner).toEqual('tie');
    });

    it('sets the winner of the game if the player wins', () => {
      spyOn(app, 'sample').and.returnValue(2);
      app.playGame('rock');
      expect(app.winner).toEqual('player');
    });

    it('sets the winner of the game if the computer wins', () => {
      spyOn(app, 'sample').and.returnValue(2);
      app.playGame('paper');
      expect(app.winner).toEqual('computer');
    });

    it('updates the score', () => {
      spyOn(app, 'sample').and.returnValue(2);
      app.playGame('paper');
      expect(app.score).toEqual({ computer: 1, player: 0 });
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

  describe('the compiled template', () => {
    let compiled: any;

    beforeEach(() => {
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    it('renders a button element for each weapon', () => {
      expect(compiled.querySelectorAll('ul button').length).toEqual(3);
    });

    it('hides the list once a weapon is chosen', () => {
      app.playGame('rock');
      fixture.detectChanges();
      expect(compiled.querySelectorAll('ul button').length).toBeFalsy();
    });

    it('displays the computers choice', () => {
      spyOn(app, 'sample').and.returnValue(2);
      app.playGame('rock');
      fixture.detectChanges();
      expect(compiled.querySelector('.computer-choice').textContent).toContain('scissors');
    });

    it('renders the game result if the player wins', () => {
      spyOn(app, 'sample').and.returnValue(2);
      app.playGame('rock');
      fixture.detectChanges();
      expect(compiled.querySelector('.result h2').textContent).toEqual('You win!');
    });

    it('renders the game result if the game is a tie', () => {
      spyOn(app, 'sample').and.returnValue(1);
      app.playGame('paper');
      fixture.detectChanges();
      expect(compiled.querySelector('.result h2').textContent).toEqual('The game was a tie');
    });

    it('renders the game result if the computer wins', () => {
      spyOn(app, 'sample').and.returnValue(2);
      app.playGame('rock');
      fixture.detectChanges();
      expect(compiled.querySelector('.result h2').textContent).toEqual('You win!');
    });

    it('renders a "play again" button once the game has ended', () => {
      expect(compiled.querySelector('button.reset')).toBeFalsy();
      app.playGame('paper');
      fixture.detectChanges();
      expect(compiled.querySelector('button.reset')).toBeTruthy();
    });

    it('renders the current score', () => {
      spyOn(app, 'sample').and.returnValue(2);
      app.playGame('rock');
      fixture.detectChanges();

      expect(compiled.querySelector('.score').textContent).toContain('Player - 1');
      expect(compiled.querySelector('.score').textContent).toContain('0 - Computer');
    });
  });
});
