import {
  getColorClassName,
  getSizeClassName,
  getTotalTextClassName,
} from './utils';
import S from './Text.module.scss';
import { TextColors, TextSizes, TextStyles } from './types';

describe('getColorClassName function tests', () => {
  test('should return correct color class name based on color prop', () => {
    expect(getColorClassName('white')).toBe(S.color_white);
    expect(getColorClassName('grey')).toBe(S.color_grey);
    expect(getColorClassName('lightgrey')).toBe(S.color_lightgrey);
    expect(getColorClassName('black')).toBe(S.color_black);
  });

  test('should throw an error when invalid color prop is provided', () => {
    expect(() => getColorClassName('red' as TextColors)).toThrow(
      'Invalid color prop'
    );
  });
});

describe('getSizeClassName function tests', () => {
  test('should return correct size class name based on size prop', () => {
    expect(getSizeClassName('default')).toBe(S.text_default);
    expect(getSizeClassName('thin')).toBe(S.text_thin);
    expect(getSizeClassName('lineheight')).toBe(S.text_lineheight);
  });

  test('should throw an error when invalid size prop is provided', () => {
    expect(() => getSizeClassName('large' as TextSizes)).toThrow(
      'Invalid size prop'
    );
  });
});

describe('getTotalTextClassName function tests', () => {
  test('should return correct total class name based on color and size props', () => {
    const totalClassName = getTotalTextClassName({
      color: 'white',
      size: 'default',
    } as TextStyles);
    expect(totalClassName).toBe(`${S.text} ${S.color_white} ${S.text_default}`);
  });
});
