import React, { ReactElement, ReactNode } from 'react';
import {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';
import { TinCheckbox } from './TinCheckbox';

const tableStyles = makeStyles(() => ({
  paper: {
    width: '100%',
    boxShadow: 'none',
    borderRadius: '10px !important',
  },
  header: {
    padding: '1rem 3rem',
    fontSize: '1.5rem',
    color: '#fdfdfd',
    minWidth: '15rem',
    backgroundColor: '#252645',
    fontFamily: "'Muli', sans-serif",
    borderBottom: '1px solid rgb(142 131 131 / 17%)',
  },
  checkbox: {
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    color: '#fdfdfd',
    backgroundColor: 'white',
    borderTop: '1px solid rgba(224, 224, 224, 1)',
  },
  container: {
    borderRadius: '5px',
    backgroundColor: '#252547',
  },
  cell: {
    padding: '1rem 3rem',
    fontSize: '1.4rem',
    fontWeight: 500,
    maxWidth: '24rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: '#fdfdfd',
    fontFamily: "'Muli', sans-serif",
    borderBottom: '1px solid rgb(142 131 131 / 17%)',
  },
  head: {
    borderRadius: '5px',
  },
  body: {
    backgroundColor: '#252547',
  },
}));

interface ITableContainerProps {
  fullHeight: boolean;
  maxContentHeight: string;
}
const StyledTableContainer = styled(
  ({ fullHeight, maxContentHeight, ...props }: ITableContainerProps) => (
    <TableContainer {...props} />
  )
)<ITableContainerProps>`
  && {
    border-radius: 6px;
    max-height: ${({ fullHeight, maxContentHeight }) =>
      fullHeight ? '75vh' : maxContentHeight};
  }
`;

interface DefaultCellProps<RowData> {
  data?: RowData[keyof RowData] | number;
}
/* tslint:disable:@typescript-eslint/ban-types*/
const DefaultCell = <RowData extends {}>({
  data,
}: DefaultCellProps<RowData>) => {
  return <div>{data}</div>;
};

export interface CellConfig<RowData> {
  name: string;
  propKey?: keyof RowData;
  renderCell?: (d: RowData, name: string | number) => ReactElement;
}

export interface TinCustomTableProps<RowData> {
  data: RowData[];
  config: CellConfig<RowData>[];
  fullHeight?: boolean;
  maxContentHeight?: string;
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxValue?: boolean;
  checkboxIndeterminate?: boolean;
}

export const TinCustomTable = <RowData extends {}>({
  config,
  data,
  children,
  fullHeight = false,
  maxContentHeight = '100%',
  onCheckboxChange,
  checkboxValue,
  checkboxIndeterminate,
}: TinCustomTableProps<RowData> & { children?: ReactNode }) => {
  const classes = tableStyles();

  const Header = config.map(({ name }, index: number) => (
    <>
      {name === 'checkbox' ? (
        <TableCell
          className={classes.checkbox}
          align={'center'}
          key={`${index}`}
          padding="checkbox"
        >
          <TinCheckbox
            value={checkboxValue}
            onChange={onCheckboxChange}
            indeterminate={checkboxIndeterminate}
          />
        </TableCell>
      ) : (
        <TableCell className={classes.header} align={'left'} key={`${index}`}>
          {name}
        </TableCell>
      )}
    </>
  ));

  return (
    <Paper className={classes.paper}>
      {children}
      <StyledTableContainer
        fullHeight={fullHeight}
        maxContentHeight={maxContentHeight}
      >
        <Table stickyHeader>
          <TableHead className={classes.head}>
            <TableRow>{Header}</TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {data.map((rowData, index) => {
              return (
                <TableRow key={index}>
                  {config.map(({ name, renderCell, propKey }, index) => {
                    const key = propKey ? String(propKey) : index;
                    return (
                      <TableCell key={key} className={classes.cell}>
                        {renderCell ? (
                          renderCell(rowData, key)
                        ) : (
                          <DefaultCell
                            data={propKey ? rowData[propKey] : Math.random()}
                          />
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
};
