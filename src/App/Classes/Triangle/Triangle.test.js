import expect from 'expect';
import Triangle from './Triangle';

it('triangle with sides 5, 6, 7 to be valid', () => {
    expect(Triangle.isValid(5, 6, 7)).toBe(true);
});

it('triangle with sides 2, 10, 3 to be not valid', () => {
    expect(Triangle.isValid(2, 10, 3)).toBe(false);
});

it('triangle with sides 5, 5, 5 is equilateral', () => {
    expect(Triangle.getType(5, 5, 5)).toBe(Triangle.EQUILATERAL);
});

it('triangle with sides 10, 8, 8 is isosceles', () => {
    expect(Triangle.getType(10, 8, 8)).toBe(Triangle.ISOSCELES);
});

it('triangle with sides 10, 11, 12 is scalene', () => {
    expect(Triangle.getType(10, 11, 12)).toBe(Triangle.SCALENE);
});

it('triangle with sides 3, 16, 2 is scalene', () => {
    expect(Triangle.getType(3, 16, 2)).toBe(false);
});

it('triangle with sides 3, abc, 3 is scalene', () => {
    expect(Triangle.getType(10, 'abc', 12)).toBe(false);
});

it('7.24 is valid positive number for triangle side', () => {
    expect(Triangle.isValidPositiveNr(7.24)).toBe(true);
});

it('-3 is not valid positive number for triangle side', () => {
    expect(Triangle.isValidPositiveNr(-3)).toBe(false);
});
