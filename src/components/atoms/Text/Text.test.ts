import {
  getTotalTextClassName,
  getSizeClassName,
  getColorClassName,
} from './utils';

describe('Text component tests', () => {
  test('should return correct color class name', () => {
    const colorClassName = getColorClassName('white');
    expect(colorClassName).toBe('color_white');
  });

  test('should return correct size class name', () => {
    const sizeClassName = getSizeClassName('thin');
    expect(sizeClassName).toBe('text_thin');
  });

  test('should return correct total class name based on color and size', () => {
    const totalClassName = getTotalTextClassName({
      color: 'grey',
      size: 'default',
    });
    expect(totalClassName).toBe('text color_grey text_default');
  });
});
