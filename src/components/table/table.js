import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { employeeSelector } from '@/redux/employeeSelector';


const Table = () => {

    const { employeesList } = useSelector(employeeSelector);

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
            field: 'firstname',
            headerName: 'First Name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastname',
            headerName: 'Last Name',
            width: 150,
            editable: true,
        },
        {
            field: 'startdate',
            headerName: 'Start Date',
            width: 150,
            editable: true,
        },
        {
            field: 'department',
            headerName: 'Department',
            width: 150,
            editable: true,
        },
        {
            field: 'birth',
            headerName: 'Date of Birth',
            width: 150,
            editable: true,
        },
        {
            field: 'street',
            headerName: 'Street',
            width: 150,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            width: 150,
            editable: true,
        },
        {
            field: 'state',
            headerName: 'State',
            width: 150,
            editable: true,
        },
        {
            field: 'zipcode',
            headerName: 'Zip Code',
            width: 150,
            editable: true,
        },
    ];

    const rows = [];

    employeesList.map((e, index) => {
        let employee = {
            id: index,
            firstname: e.firstname,
            lastname: e.lastname,
            startdate: e.startdate,
            department: e.department,
            birth: e.birth,
            street: e.street,
            city: e.city,
            state: e.state,
            zipcode: e.zipcode
        }
        return rows.push(employee)
    })

    return (
        <div>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
};

export default Table;