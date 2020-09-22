import { calcShipsCount, isValidArea } from '../src/calcShipsCount.js';

test('is valid area', () => {
  const area1 = [];

  const area2 = [0];

  const area3 = [
    [1, 0],
    [0, 1],
  ];

  const area4 = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
  ];

  const area5 = [
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ];

  const area6 = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];

  const area7 = [
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
  ];

  expect(isValidArea(area1)).toBe(true);
  expect(isValidArea(area2)).toBe(true);
  expect(isValidArea(area3)).toBe(false);
  expect(isValidArea(area4)).toBe(true);
  expect(isValidArea(area5)).toBe(true);
  expect(isValidArea(area6)).toBe(false);
  expect(isValidArea(area7)).toBe(false);
});

test('calcShipsCount', () => {
  const area1 = [];

  const area2 = [0];

  const area3 = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
  ];

  const area4 = [
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ];

  const area5 = [
    [1, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
  ];

  const area6 = [
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
  ];

  expect(calcShipsCount(area1)).toBe(0);
  expect(calcShipsCount(area2)).toBe(0);
  expect(calcShipsCount(area3)).toBe(1);
  expect(calcShipsCount(area4)).toBe(3);
  expect(calcShipsCount(area5)).toBe(4);
  expect(calcShipsCount(area6)).toBe(3);
});
