import {DataGrid} from "@mui/x-data-grid";
import React from "react";

export default function ResultsTable({data}) {
    const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'firstName', headerName: 'First name', flex: 1 },
    { field: 'lastName', headerName: 'Last name', flex: 1 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        flex: 1,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    }
];
    const paginationModel = { page: 0, pageSize: 20 };
    const rows = data.rows;
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
        />
    )
}