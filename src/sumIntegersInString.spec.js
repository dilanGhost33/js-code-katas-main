import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  test('should return 3', () => {
    const value = 'h3ll0w0rld';
    const expectedResult = 3;
    const resp = sumOfIntegersInString(value);
    expect(resp).toBe(expectedResult);
  });
  test('should return 3635', () => {
    const value = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';
    const expectedResult = 3635;
    const resp = sumOfIntegersInString(value);
    expect(resp).toBe(expectedResult);
  });
});
