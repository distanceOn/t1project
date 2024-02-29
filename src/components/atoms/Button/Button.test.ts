import { getTotalBtnClassName } from './utils';
import S from './Button.module.scss';

test('returns correct class for primary color and default type', () => {
  const result = getTotalBtnClassName({
    color: 'primary',
    type: 'default',
  });
  expect(result).toBe(
    `${S.color} ${S.color_primary} ${S.btn} ${S.btn_default}`
  );
});

test('returns correct class for secondary color and reset type', () => {
  const result = getTotalBtnClassName({
    color: 'secondary',
    type: 'reset',
  });
  expect(result).toBe(
    `${S.color} ${S.color_secondary} ${S.btn} ${S.btn_reset}`
  );
});
