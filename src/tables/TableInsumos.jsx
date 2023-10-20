import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export const TableInsumos = ({ tablehead, tablebody }) => {
  const columns = [
    { field: "id", headerName: "No", width: 90 },
    {
      field: "nombre_insumo",
      headerName: "Nombre Insumo",
      width: 150,
      editable: true,
    },
  ];

  return (
    <>
      <div className="font-pymo2 relative overflow-x-auto shadow-md sm:rounded-lg ">
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
