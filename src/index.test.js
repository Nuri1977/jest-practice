import { stringLength, reverseString, capitalizeString } from './index.js';

describe('Testing strings', () => {
  test('lenght of the string should be 4', () => {
    const textLength = stringLength('Nuri');
    expect(textLength).toBe(4);
  });

  test('lenght of the string max 10', () => {
    const textLength = stringLength('Nuri LAcka Placka');
    expect(textLength).toBeUndefined();
  });

  test('lenght of the string min 1', () => {
    const textLength = stringLength('');
    expect(textLength).toBeUndefined();
  });

  test('reverse string nuri', () => {
    const textReverse = reverseString('nuri');
    expect(textReverse).toBe('irun');
  });

  test('reverse string nuri lacka', () => {
    const textReverse = reverseString('nuri lacka');
    expect(textReverse).toBe('akcal irun');
  });

  test('capitalize string nuri', () => {
    const textCapitalized = capitalizeString('nuri');
    expect(textCapitalized).toBe('Nuri');
  });
});
