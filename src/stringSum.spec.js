import { sum } from "./stringSum";

describe('String Sum code kata', () => {
  test('should return 0 when num1 and num2 are empty stringss',()=>{
    //arrenge
    const num1='0';
    
    const num2='0';

    const result=0;
    //act
    const sumResult = sum(num1,num2);
    //asert
    expect(sumResult).toBe(result);
  });
  test('should return 15 when num1 is 7  and num2 is 8',()=>{
    //arrenge
    const num1='7';
    
    const num2='8';

    const result=15;
    //act
    const sumResult = sum(num1,num2);
    //asert
    expect(sumResult).toBe(result);
  });
  test('should return 50 when num1 is empty string and num2 is 50',()=>{
    //arrenge
    const num1='';
    
    const num2='50';

    const result=50;
    //act
    const sumResult = sum(num1,num2);
    //asert
    expect(sumResult).toBe(result);
  });
  test('should return 30 when num1 is 30 string and num2 is not natural',()=>{
    //arrenge
    const num1='30';
    
    const num2='-50';

    const result=30;
    //act
    const sumResult = sum(num1,num2);
    //asert
    expect(sumResult).toBe(result);
  });
  test('should return corect result with more parameters',()=>{
    //arrenge
    const num1='30';
    const num2='-50';
    const num3='5';
    const num4='11';
    const result=46;
    //act
    const sumResult = sum(num1,num2,num3,num4);
    //asert
    expect(sumResult).toBe(result);
  });
});