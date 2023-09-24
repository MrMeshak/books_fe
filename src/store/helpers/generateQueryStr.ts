import { Search_Filter, Search_Pagination, Search_PrintType, Search_Sort } from '../libraryStore';

export function generateQueryStr(searchStr: string, sort: Search_Sort, filter: Search_Filter, printType: Search_PrintType, page: number, resultsPerPage: number) {
  const queryStrArr: string[] = [];
  queryStrArr.push('/volumes?q=');
  queryStrArr.push(searchStr.trim().replace(/[\s+]/, '+'));
  queryStrArr.push(`&sort=${sort}`);
  if (filter !== '') queryStrArr.push(`&filter=${filter}`);
  queryStrArr.push(`&printType=${printType}`);
  queryStrArr.push(`&startIndex=${page * resultsPerPage}`);
  queryStrArr.push(`&maxResults=${resultsPerPage}`);
  queryStrArr.push('&projection=lite');

  return queryStrArr.join('');
}
