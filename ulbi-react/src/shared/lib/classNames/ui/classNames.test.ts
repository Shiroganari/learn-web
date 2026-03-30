import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first parameter', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['primary', 'secondary'])).toBe(
      'someClass primary secondary'
    );
  });

  test('with mods', () => {
    expect(classNames('someClass', {hovered: true}, ['primary', 'secondary'])).toBe(
      'someClass primary secondary hovered'
    );
  });
});
