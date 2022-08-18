import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import { NavLink } from "react-router-dom";

export default function MuiTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    let tData = props.data;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getLabel = (item) => {
        let res = item.split('_').join(' ')
        return res;
    }

    let columns = [];
    if (tData != null) {
        columns = ((Object.keys(tData[0]))).map((item, index) => {
            return {
                id: item,
                label: getLabel(item),
                minWidth: 70,
                align: 'left',
                format: (value) => value.toLocaleString('en-US'),
            }
        })


        const viewColumn = {
            id: 1001,
                label: "View",
                minWidth: 70,
                align: 'left',
                format: (value) => value.toLocaleString('en-US'),
                
        }

        props.viewColumn && columns.push(viewColumn)

    }

    let rows = [];
    if (tData != null) {
        rows = tData.map((item, index) => {

            let rowVal = {}
            columns.map((columnItem, index) => {
                rowVal[columnItem.id] = item[columnItem.id]                
            })

            // props.viewColumn && (rowVal[1001] = <NavLink className='btn btn-primary' to="/orderdetails">view</NavLink>)
            props.viewColumn && (rowVal[1001] = <NavLink className='btn btn-primary' to={`/orders/${1}`}>view</NavLink>)

            return rowVal
        })
    }
    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow style={{ backgroundColor: '#fff', margin: '10px 0', }} hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
}
