import React, { useEffect, useState } from 'react';

import axios from 'axios';
import DataTable from 'react-data-table-component';
import { borders } from '@mui/system';
import ExpandedComponent from './ExpandedComponent';

const DataTablesTest = () => {
  const [rabbitData, setRbtData] = useState([]);

  function handleSelectChange(event) {
    // setSelectedClient(event.target.value);
    // var typepost = event.target.value;
    // // console.log(typepost);
    // // switch (typepost) {
    // //   case 'tender':
    // //     break;
    // //   default:
    // //     break;
    // // }
    // var furl = 'http://localhost:8585/v1/atm/getResultats';
    // console.log(furl);
    // let mounted = true;
    // // setSpinner(true);
    // fetch(furl).then((response) => {
    //   return response.json();
    // });
    // // .then((data) => {
    // //   if (mounted) {
    // //     // setSpinner(false);
    // //     setDatas(data);
    // //   }
    // // });
  }

  const getRabbitData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8585/v1/atm/getAllTenders'
      );
      setRbtData(response.data);
    } catch (error) {
      error;
    }
  };
  const getRabbitDataa = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8585/v1/atm/getAuctions'
      );
      setRbtData(response.data);
    } catch (error) {
      error;
    }
  };

  const columns = [
    {
      name: 'Etkazib beruvchi',
      selector: (row) => row.vendor_name,
      sortable: true,
      reorder: true,
      width: '25%',
      headerStyle: (selector, id) => {
        return { textAlign: 'left' };
      },
    },
    {
      name: 'Etkazib beruvchi STIR raqami',
      selector: (row) => row.vendor_inn,
      sortable: true,
      reorder: true,
    },

    {
      name: 'Lot raqami',
      selector: (row) => (
        <a href={row.lot_id} target='_blank' rel='noopener noreferrer'>
          {row.lot_id}
        </a>
      ),
      sortable: true,
      reorder: true,
    },
    {
      name: 'Tashkilot turi',
      selector: (row) => (row.maloy == 'Y' ? 'kichik bizness' : 'biznes'),
      sortable: true,
      reorder: true,
    },
    {
      name: 'Summasi',
      selector: (row) => row.summa,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Shartnoma sanasi',
      selector: (row) => row.contract_dat,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Savdo turi',
      selector: (row) => {
        switch (row.proc_id) {
          case 6:
            return 'Elektron katalog';
          case 3:
            return 'kelishuv amalga oshdi';
          case 17:
            return 'Tender';
          case 18:
            return 'Konkurs';
          case 19:
            return "To'g'ridan to'g'ri shartnomalar";
        }
      },
      sortable: true,
      headerStyle: (selector, id) => {
        return { textAlign: 'center' };
      },
    },
    /*

  {
    "id": 43,
    "month": 6,
    "state": null,
    "pltf": 1,
    "lot_id": 22111007083093,
    "doc_date": "2022-06-28T05:00:00.000+00:00",
    "organ_name": null,
    "sum_lot": 33900000000
  },
{
    "id": 1,
    "month": 6,
    "state": null,
    "pltf": 2,
    "lot_id": 22111008497728,
    "doc_date": "2022-06-28T05:00:00.000+00:00",
    "organ_name": null,
    "sum_lot": 33000000
  },
  {
    "id": 2084,
    "summa": 261093700000,
    "srok": 10,
    "purpose": "В электронном виде",
    "state": null,
    "lot_id": 22110006114878,
    "organ_name": null,
    "proc_id": 1
  },

*/

    // {
    //   name: 'Action',
    //   cell: (row) => (
    //     <button className='btn btn-success' onClick={() => alert(row.id)}>
    //       test
    //     </button>
    //   ),
    // },
    // {
    //   button: true,
    //   cell: (row) => (
    //     <div className='App'>
    //       <div className='openbtn text-center'>
    //         <button
    //           type='button'
    //           className='btn btn-primary'
    //           data-bs-toggle='modal'
    //           data-bs-target='#myModal'
    //         >
    //           To`liq ma`lumot
    //         </button>
    //         <div className='modal' tabIndex='-1' id='myModal'>
    //           <div className='modal-dialog'>
    //             <div className='modal-content'>
    //               <div className='modal-header'>
    //                 <h5 className='modal-title'>To`liq ma`lumot</h5>
    //                 <button
    //                   type='button'
    //                   className='btn-close'
    //                   data-bs-dismiss='modal'
    //                   aria-label='Close'
    //                 ></button>
    //               </div>
    //               <div className='modal-body'>
    //                 <p>Ma`lumotlar</p>
    //                 {/* {console.log(row)} */}
    //                 {/* {(row) => row.summa} */}
    //                 {row.id} <br />
    //                 {row.summa}
    //               </div>
    //               <div className='modal-footer'>
    //                 <button
    //                   type='button'
    //                   className='btn btn-secondary'
    //                   data-bs-dismiss='modal'
    //                 >
    //                   Yopish
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  useEffect(() => {
    getRabbitData();
  }, []);

  //   const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({ data }) => {
  //     return <pre>{JSON.stringify(data, null, 2)}</pre>;
  // };

  return (
    <div className='shadow rounded-0'>
      <button className='btn btn-success mb-4' onClick={getRabbitData}>
        {' '}
        Tender
      </button>
      <button className='btn btn-success mb-4' onClick={getRabbitDataa}>
        {' '}
        Auction
      </button>

      <DataTable
        title='Resultat method'
        columns={columns}
        data={rabbitData}
        pagination
        highlightOnHover
        responsive
        fixedHeader
        striped
        pointerOnHover
        expandableRows
        expandOnRowClicked
        // expandableRowsComponent={<ExpandedComponent />}
      />
    </div>
  );
};

export default DataTablesTest;
