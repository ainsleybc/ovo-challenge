import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a choice of weapons to choose from', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.weapons).toEqual(['rock', 'paper', 'scissors']);
  });

  it('should render a button element for each weapon', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('button').length).toEqual(3);
  });

  describe('setPlayerChoice', () => {
    it('sets the players choice of weapon', () => {
      const app = fixture.debugElement.componentInstance;
      app.setPlayerChoice('some-weapon');
      expect(app.playerChoice).toEqual('some-weapon');
    });
  });
});
