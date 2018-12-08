import expect from 'expect';
import String from './String';

it('hello -> Hello', () => {
    expect(String.capitalizeFirst('hello')).toBe('Hello');
});
