import {
  Compliment,
  Dare,
  Joke,
  MovieQuote,
  Name,
  NeverHaveIEver,
  NeverHaveIEverNSFW,
  PokemonName,
  Roast,
  ShowerThought,
  SuperheroName,
  Truth,
  UselessWebsite,
} from '../index';

test('Dares', () => {
  expect(Dare());
});

test('Jokes', () => {
  expect(Joke());
});

test('Names', () => {
  expect(Name('all'));
});

test('NeverHaveIEver', () => {
  expect(NeverHaveIEver());
});

test('Roasts', () => {
  expect(Roast());
});

test('ShowerThoughts', () => {
  expect(ShowerThought());
});

test('Truths', () => {
  expect(Truth());
});

test('MovieQuote', () => {
  expect(MovieQuote());
});

test('PokemonName', () => {
  expect(PokemonName());
});

test('SuperheroName', () => {
  expect(SuperheroName());
});

test('UselessWebsite', () => {
  expect(UselessWebsite());
});

test('Compliment', () => {
  expect(Compliment());
});

test('NeverHaveIEverNSFW', () => {
  expect(NeverHaveIEverNSFW());
});
