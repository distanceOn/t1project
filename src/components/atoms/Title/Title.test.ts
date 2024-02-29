import { titleTagMap } from './constants';
import { getTitleClasses, getTotalTitleClassName } from './utils';

describe('titleTagMap function tests', () => {
  test('should return correct HTML tag based on size', () => {
    expect(titleTagMap.large).toBe('h1');
    expect(titleTagMap.small).toBe('h3');
    expect(titleTagMap.min).toBe('h4');
    expect(titleTagMap.xmin).toBe('h4');
    expect(titleTagMap.default).toBe('h2');
  });
});

describe('getTitleClasses function tests', () => {
  test('should return correct color and size classes based on props', () => {
    const { color, size } = getTitleClasses({
      color: 'black',
      size: 'small',
    });
    expect(color).toBe('color_black');
    expect(size).toBe('title_small');
  });
});

describe('Title component tests', () => {
  test('should return correct total class name based on color and size', () => {
    const totalClassName = getTotalTitleClassName({
      color: 'black',
      size: 'small',
    });
    expect(totalClassName).toBe('title color_black title_small');
  });
});
