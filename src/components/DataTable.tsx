import React, { useState } from 'react';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'vin', headerName: 'VIN', flex: 1 },
    { field: 'make', headerName: 'Make', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'year', headerName: 'Year', flex: 1 },
    { field: 'color', headerName: 'Color', flex: 2 },
  ];

  function DataTable() {
    const [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<any>([]);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const deleteData = async () => {
      server_calls.delete(selectionModel[0]);
      getData();
      console.log(`Selection model: ${selectionModel}`);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    };
  
    return (
      <>
        <Modal id={selectionModel} open={open} onClose={handleClose} />
        <div className="flex flex-row">
          <div>
            <button
              className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white"
              onClick={() => handleOpen()}
            >
              Add Car
            </button>
          </div>
          <button
            onClick={handleOpen}
            className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white onClick={handleOpen}"
          >
            Update
          </button>
          <button
            onClick={deleteData}
            className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white onClick={handleOpen}"
          >
            Delete
          </button>
        </div>
        <div
          className={
            open ? "hidden" : "container mx-10 my-5 flex flex-col"
          }
          style={{ height: 400, width: "100%" }}
        >
          <h2 className="p-3 bg-slate-300 my-2 rounded">Car Collection Inventory</h2>
          <DataGrid
            rows={contactData}
            columns={columns}
            pageSizeOptions={[5]}
            checkboxSelection={true}
            onRowSelectionModelChange={(item: any) => {
              setSelectionModel(item);
            }}
            getRowId={(row) => row.vin}
          />
        </div>
      </>
    );
  }
  

export default DataTable
