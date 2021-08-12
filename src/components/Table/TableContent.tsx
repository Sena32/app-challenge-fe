import React from 'react';
import { TBody, TD, TR } from './styles';

export interface ColumnIterface<T, K extends keyof T> {
  Header: string;
  accessor?: K;
  element?: any;
  cell?: (item: T) => JSX.Element;
  width?: number;
}

interface PropsColumns<T, K extends keyof T> {
  dataImport?: Array<T>;
  columns?: ColumnIterface<T, K>[];
}

const TableContent = <T, K extends keyof T>({
  dataImport,
  columns,
}: PropsColumns<T, K>): JSX.Element => {
  const rows = dataImport && dataImport.map((item, index) => {
    return (
      <TR>
        {columns.map((col, pos) => (
          <>
            {col.accessor ? (
              <TD key={`cell-${String(pos)}`}>{item[col.accessor]}</TD>
            ) : (
              <TD key={`cell-${String(pos)}`}>{col.cell(item)}</TD>
            )}
          </>
        ))}
      </TR>
    );
  });

  return <TBody>{rows}</TBody>;
};

export default TableContent;
