import { Dares } from '../dares';
import { Jokes } from '../jokes';
import { Names } from '../names';
import { NHIE } from '../nhie';
import { Roasts } from '../roasts';
import { ShowerThoughts } from '../showerthoughts';
import { Truths } from '../truths';

test('Dares', () => {
  expect(Dares());
});

test('Jokes', () => {
  expect(Jokes());
});

test('Names', () => {
  expect(Names('all'));
});

test('NHIE', () => {
  expect(NHIE());
});

test('Roasts', () => {
  expect(Roasts());
});

test('Shower Thought', () => {
  expect(ShowerThoughts());
});

test('Truths', () => {
  expect(Truths());
});
