import * as React from 'react';

export interface IBookEmptyProps {}

export default function BookEmpty(props: IBookEmptyProps) {
  return (
    <div>
      <h3>Book could not be found</h3>
    </div>
  );
}
