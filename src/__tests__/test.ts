import {
  Dare,
  Joke,
  MovieQuote,
  Name,
  NeverHaveIEver,
  PokemonName,
  Roast,
  ShowerThought,
  SuperheroName,
  Truth,
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
