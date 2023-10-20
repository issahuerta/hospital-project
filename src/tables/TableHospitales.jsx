import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export const TableHospitales = ({ tablehead, tablebody }) => {
  const columns = [
    { field: "id", headerName: "No", width: 90 },
    {
      field: "nombre_hospital",
      headerName: "Nombre Hospital",
      width: 150,
      editable: true,
    },
    {
      field: "num_casos",
      headerName: "Numero de casos",
      width: 150,
      editable: true,
    },
  ];

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <Box sx={{ height: 690, width: "100%" }}>
          <DataGrid
            rows={tablebody}
            slots={{
              toolbar: GridToolbar,
            }}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
          />
        </Box>
      </div>
    </>
  );
};
