import { toGetInitialQuery } from '../toGetInitialQuery';

describe('toGetInitialQuery', () => {
  it('should return correct query object when isStaffPage is true and searchQuery is present', () => {
    const query = toGetInitialQuery(true, '', 10, 0, 'test');
    expect(query).toEqual({ search: 'test' });
  });

  it('should return correct query object when isStaffPage is true and searchQuery is not present', () => {
    const query = toGetInitialQuery(true, '', 10, 0, '');
    expect(query).toEqual({ limit: 10, skip: 0 });
  });

  it('should return correct query object when isStaffPage is false', () => {
    const query = toGetInitialQuery(false, 'smartphones', 10, 0, '');
    expect(query).toEqual({ category: 'smartphones', limit: 10, skip: 0 });
  });
});
