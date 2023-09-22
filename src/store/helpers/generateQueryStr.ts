import { Search_Filter, Search_Pagination, Search_PrintType, Search_Sort } from '../libraryStore';

export function generateQueryStr(searchStr: string, sort: Search_Sort, filter: Search_Filter, printType: Search_PrintType, pagination: Search_Pagination) {
  const { page, resultsPerPage } = pagination;

  const queryStrArr: string[] = [];
  queryStrArr.push('/volumes?q=');
  queryStrArr.push(searchStr.trim().replace(/[\s+]/, '+'));
  queryStrArr.push(`&sort=${sort}`);
  if (filter !== '') queryStrArr.push(`&filter=${filter}`);
  queryStrArr.push(`&printType=${printType}`);
  queryStrArr.push(`&startIndex=${page * resultsPerPage}`);
  queryStrArr.push(`&maxResults=${resultsPerPage}`);

  return queryStrArr.join('');
}
