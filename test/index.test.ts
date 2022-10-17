import {sayHello} from '../src';

describe('sayHello()', () => {
  test('should say hello', () => {
    expect(sayHello('domingo2000')).toBe(undefined);
  });
});
