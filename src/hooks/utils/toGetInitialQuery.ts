export const toGetInitialQuery = (
  isStaffPage: boolean,
  selectedCategoryQuery: string,
  limit: number,
  skip: number,
  searchQuery: string
) => {
  if (isStaffPage) {
    const isSearchQuery = searchQuery !== '' && searchQuery !== undefined;
    if (isSearchQuery) {
      return { search: searchQuery };
    }
    return { limit, skip };
  }
  return { category: selectedCategoryQuery, limit, skip };
};
