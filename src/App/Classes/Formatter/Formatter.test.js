import expect from 'expect';
import Formatter from './Formatter';

it('hello -> Hello', () => {
    expect(Formatter.capitalizeFirst('hello')).toBe('Hello');
});
