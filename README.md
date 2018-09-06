# OvoChallenge

A web application game of rock, paper, scissors.

## Approach

I decided to build this app in Angular 6 (boilerplate created with [@angular/cli](https://github.com/angular/angular-cli)), using a TDD style approach to build out the skeleton; writing an e2e test, then unit tests, and then implementing the logic to pass the tests.

After the core logic was implemented, I then added a simple score counter and some basic styling.

Given more time, I'dd some extra features such as:
- multiplayer
- ability to input player's names
- additonal weapons (eg. lizard, spock..)**
- the above features would also likely require splitting out multiple components

**the logic for the game-play was taken from the [wiki page](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) and makes it much easier to add additional weapons:
> the rankings in rock-paper-scissors-Spock-lizard may be modeled by a comparison of the parity of the two choices. If it is the same (two odd-numbered moves or two even-numbered ones) then the lower number wins, while if they are different (one odd and one even) the higher wins. Using this algorithm, additional moves can easily be added two at a time while keeping the game balanced

## User story
```
As a games player,
I'd like to play rock, paper, scissors,
So that I can spend an hour of my day having fun.
```

## Install
Run `npm install` to install dependencies.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
