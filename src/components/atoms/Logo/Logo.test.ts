import {
  getLogoSizeClassName,
  getColorClassName,
  getTotalLogoClassName,
} from './utils';

describe('getLogoSizeClassName', () => {
  it('should return correct class name for default size', () => {
    const result = getLogoSizeClassName('default');
    expect(result).toBe('logo_default');
  });

  it('should return correct class name for small size', () => {
    const result = getLogoSizeClassName('small');
    expect(result).toBe('logo_small');
  });

  it('should return correct class name for bg size', () => {
    const result = getLogoSizeClassName('bg');
    expect(result).toBe('logo_bg');
  });
});

describe('getColorClassName', () => {
  it('should return correct class name for white color', () => {
    const result = getColorClassName('white');
    expect(result).toBe('color_white');
  });

  it('should return correct class name for grey color', () => {
    const result = getColorClassName('grey');
    expect(result).toBe('color_grey');
  });
});
describe('getTotalLogoClassName', () => {
  it('should return correct total class name for default size and white color', () => {
    const result = getTotalLogoClassName({
      color: 'white',
      size: 'default',
    });
    expect(result).toBe('logo color_white logo_default');
  });

  it('should return correct total class name for small size and grey color', () => {
    const result = getTotalLogoClassName({
      color: 'grey',
      size: 'small',
    });
    expect(result).toBe('logo color_grey logo_small');
  });

  it('should return correct total class name for bg size and white color', () => {
    const result = getTotalLogoClassName({
      color: 'white',
      size: 'bg',
    });
    expect(result).toBe('logo color_white logo_bg');
  });
});
