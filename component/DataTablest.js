import React, { useEffect, useState } from 'react';

import axios from 'axios';
import DataTable from 'react-data-table-component';
import MUIDataTable from 'mui-datatables';
const DataTablest = () => {
  // const columns = ['Name', 'Company', 'City', 'State'];

  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      setCountries(response.data);
      console.log('countries');
      console.log(countries);
    } catch (error) {
      error;
    }
  };
  // console.log('countries');
  // console.log(columns);
  const columns = [
    {
      name: 'countrie name',
      selector: (row) => row.name,
    },
    {
      name: 'countrie capital',
      selector: (row) => row.capital,
    },
    {
      name: 'flag',
      selector: (row) => <img src={row.flag} width={50} height={50} />,
    },
  ];
  console.log(columns.name);
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      <DataTable columns={columns} data={countries} />
    </div>
  );
};

export default DataTablest;
