import { sum } from './index';
import { shoppingList } from './index';

test('adds 1+2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('5 equal 5', () => {
  expect(sum(3, 2)).toBe(5);
});

test('there is a letter "t" in Mateusz', () => {
  expect('Mateusz').toMatch(/t/);
});

test('the list has a graphic card', () => {
  expect(shoppingList).toContain('graphic card');
});
