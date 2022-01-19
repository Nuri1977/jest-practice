import Calcualtor from "./calculator.js";

describe('Testing calculator', () => {
  test('Adding number 2 and 3 should give 5', () => {
    const result = Calcualtor.add(2, 3);
    expect(result).toBe(5);
  });

  test('Substratcting number 2 from 5 should give 3', () => {
    const result = Calcualtor.subtract(5, 2);
    expect(result).toBe(3);
  });

  test('Dividing  number 6 with 3 should give 2', () => {
    const result = Calcualtor.divide(6, 3);
    expect(result).toBe(2);
  });

  test('Multiplaying number 4 with 6 should give 24', () => {
    const result = Calcualtor.multiply(4, 6);
    expect(result).toBe(24);
  });
});