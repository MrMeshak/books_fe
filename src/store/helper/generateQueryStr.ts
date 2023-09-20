import { Filter, IPagination, PrintType, Sort } from '../libraryStore';

export function generateQueryStr(searchStr: string, sort: Sort, filters: Filter[], printType: PrintType, pagination: IPagination) {
  const query: string[] = [];

  query.push(searchStr.trim().replace(/[\s+]/, '+'));
  query.push(`&orderBy=${sort.value}`);
  query.push(`&printType=${printType.value}`);
  query.push(`&startIndex=${pagination.page * pagination.resultsPerPage}`);
  query.push(`&maxResults=${pagination.resultsPerPage}`);

  filters.forEach((filter) => {
    query.push(`&filter${filter.value}`);
  });

  return query.join('');
}
