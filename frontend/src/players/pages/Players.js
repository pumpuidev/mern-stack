// eslint-disable-next-line
// import React, { useEffect, useState } from 'react';

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Players.css';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'stat1',
      headerName: 'Minutes Per Game 2021',
      type: 'number',
      width: 90,
    },
    {
      field: 'stat2',
      headerName: 'Minutes Per Game 2022',
      type: 'number',
      width: 90,
    },
    {
      field: 'stat3',
      headerName: 'Field Goal Percentage 2021',
      type: 'number',
      width: 90,
    },
    {
      field: 'stat4',
      headerName: 'Field Goal Percentage 2022',
      type: 'number',
      width: 90,
    },
    {
      field: 'stat5',
      headerName: 'Points Per Game 2021',
      type: 'number',
      width: 90,
    },
    {
      field: 'stat6',
      headerName: 'Points Per Game 2021',
      type: 'number',
      width: 90,
    },
    
];

const columns2 = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'stat1',
    headerName: 'STAT1',
    type: 'number',
    width: 90,
  },
  {
    field: 'stat2',
    headerName: 'STAT2',
    type: 'number',
    width: 90,
  },
  {
    field: 'stat3',
    headerName: 'STAT3',
    type: 'number',
    width: 90,
  },
  {
    field: 'stat4',
    headerName: 'STAT4',
    type: 'number',
    width: 90,
  },
  {
    field: 'stat5',
    headerName: 'STAT5',
    type: 'number',
    width: 90,
  }
];
  
const rows = [
  { id: 1, lastName: 'James', firstName: 'LeBron', age: 38, stat1: 33.4, stat2: 37.2, stat3: 0.513, stat4: 0.524, stat5: 25.0, stat6: 30.2},
  { id: 2, lastName: 'Irving', firstName: 'Kyrie', age: 31, stat1: 29.4, stat2: 50.2, stat3: 0.425, stat4: 0.524, stat5: 31.0, stat6: 30.2 },
  { id: 3, lastName: 'Curry', firstName: 'Steph', age: 33, stat1: 26.4, stat2: 12.2, stat3: 0.254, stat4: 0.524, stat5: 8.0, stat6: 10.2 },
  { id: 4, lastName: 'Embid', firstName: 'Joel', age: 28, stat1: 15.4, stat2: 35.2, stat3: 0.456, stat4: 0.524, stat5: 13.0, stat6: 7.2 },
  { id: 5, lastName: 'Morant', firstName: 'Ja', age: 19, stat1: 45.4, stat2: 24.2, stat3: 0.254, stat4: 0.524, stat5: 22.0, stat6: 6.2 },
  { id: 6, lastName: 'Doncic', firstName: 'Luka', age: 22, stat1: 28.4, stat2: 34.2, stat3: 0.465, stat4: 0.524, stat5: 45.0, stat6: 7.2 },
  { id: 7, lastName: 'Paul', firstName: 'Chris', age: 37, stat1: 38.4, stat2: 24.2, stat3: 0.245, stat4: 0.524, stat5: 45.0, stat6: 5.2 },
  { id: 8, lastName: 'Rose', firstName: 'Malik', age: 36, stat1: 14.4, stat2: 14.2, stat3: 0.284, stat4: 0.524, stat5: 29.0, stat6: 45.2 },
  { id: 9, lastName: 'Brown', firstName: 'Jalen', age: 29, stat1: 5.4, stat2: 30.2, stat3: 0.578, stat4: 0.524, stat5: 14.0, stat6: 10.2},
  { id: 10, lastName: 'Russell', firstName: 'Westbrook', age: 29, stat1: 12.4, stat2: 16.2, stat3: 0.478, stat4: 0.524, stat5: 16.0, stat6: 45.2},
  { id: 11, lastName: 'Kevin', firstName: 'Durant', age: 29, stat1: 24.4, stat2: 23.2, stat3: 0.544, stat4: 0.524, stat5: 27.0, stat6: 26.2},
  { id: 12, lastName: 'Nikola', firstName: 'Jokić', age: 29, stat1: 35.4, stat2: 14.2, stat3: 0.454, stat4: 0.524, stat5: 25.0, stat6: 24.2},
  { id: 13, lastName: 'Giannis', firstName: 'Antetokounmpo', age: 29, stat1: 28.4, stat2: 22.2, stat3: 0.444, stat4: 0.524, stat5: 16.0, stat6: 34.2},
  { id: 14, lastName: 'Luka', firstName: 'Dončić', age: 29, stat1: 14.4, stat2: 23.2, stat3: 0.222, stat4: 0.333, stat5: 25.0, stat6: 33.2},
  { id: 15, lastName: 'Chris', firstName: 'Paul', age: 29, stat1: 15.4, stat2: 5.2, stat3: 0.246, stat4: 0.465, stat5: 27.0, stat6: 35.2},
  { id: 16, lastName: 'Joel', firstName: 'Embiid', age: 29, stat1: 16.4, stat2: 6.2, stat3: 0.465, stat4: 0.456, stat5: 29.0, stat6: 30.2},
  // { id: 17, lastName: 'Brown', firstName: 'Jalen', age: 29, stat1: 33.4, stat2: 37.2, stat3: 0.513, stat4: 0.524, stat5: 25.0, stat6: 30.2},
  // { id: 18, lastName: 'Brown', firstName: 'Jalen', age: 29, stat1: 33.4, stat2: 37.2, stat3: 0.513, stat4: 0.524, stat5: 25.0, stat6: 30.2},
  // { id: 19, lastName: 'Brown', firstName: 'Jalen', age: 29, stat1: 33.4, stat2: 37.2, stat3: 0.513, stat4: 0.524, stat5: 25.0, stat6: 30.2},
  // { id: 20, lastName: 'Brown', firstName: 'Jalen', age: 29, stat1: 33.4, stat2: 37.2, stat3: 0.513, stat4: 0.524, stat5: 25.0, stat6: 30.2},
];

const rows2 = [
  { id: 1, lastName: 'James', firstName: 'LeBron', age: 38 , stat1: 14.2},
  { id: 2, lastName: 'Irving', firstName: 'Kyrie', age: 31 },
  { id: 3, lastName: 'Curry', firstName: 'Steph', age: 33 },
  { id: 4, lastName: 'Embid', firstName: 'Joel', age: 28 },
  { id: 5, lastName: 'Morant', firstName: 'Ja', age: 19 },
  { id: 6, lastName: 'Doncic', firstName: 'Luka', age: 22 },
  { id: 7, lastName: 'Paul', firstName: 'Chris', age: 37 },
  { id: 8, lastName: 'Rose', firstName: 'Malik', age: 36 },
  { id: 9, lastName: 'Brown', firstName: 'Jalen', age: 29 },
];
  

const Players = () => {
    return (
      <>
        <div className='headerPlayer'>NBA Players</div>
        <div className="center" style={{ width: '55%' }}>
          <div className="datas"  style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
          </div>
        </div>
        {/* <br />

        <div className='headerPlayer'>NFL Players</div>
        <div className="center" style={{ width: '55%' }}>
          <div className="datas"  style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows2}
                columns={columns2}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
          </div>
        </div> */}
      </>
    )
};

export default Players;