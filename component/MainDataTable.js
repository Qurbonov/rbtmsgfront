import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';

const MainDataTable = () => {
  const [tableData, setTableData] = useState([]);
  const getTableData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8585/v1/atm/getResultats'
      );
      setTableData(response.data);
      // console.log('tableData');
      // console.log(tableData);
      // console.log('response');
      // console.log(response);
    } catch (error) {
      error;
    }
  };
  useEffect(() => {
    getTableData();
  }, []);

  const columns = [
    {
      lot_id: 'lot_id',
      label: 'Lot',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      maloy: 'maloy',
      label: 'Biznes',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      summa: 'summa',
      label: 'Summa',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      proc_id: 'proc_id',
      label: 'PROC',
      options: {
        filter: true,
        sort: true,
      },
    },
  ];
  const data = [];

  for (let i = 0; i < tableData.length; i++) {
    data.push({
      lot_id: tableData[i].lot_id,
      maloy: tableData[i].maloy,
      summa: tableData[i].summa,
      proc_id: tableData[i].proc_id,
    });
  }

  console.log('columns');
  console.log(columns);
  console.log('data');
  console.log(data);

  return (
    <div>
      <MUIDataTable title={'Employee List'} data={data} columns={columns} />
    </div>
  );
};

export default MainDataTable;
