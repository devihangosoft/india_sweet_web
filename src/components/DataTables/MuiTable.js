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
import * as Icon from "react-feather"
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import UpdateStoreForm from '../Dashboard/Stores/UpdateStoreForm';
import Swal from 'sweetalert2';

export default function MuiTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const dispatch = useDispatch();

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

        const updateColumn = {
            id: 1002,
            label: "Edit",
            minWidth: 70,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        }

        const deleteColumn = {
            id: 1003,
            label: "Delete",
            minWidth: 70,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        }

        const activateColumn = {
            id: 1004,
            label: "Activate",
            minWidth: 70,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        }




        props.viewColumn && columns.push(viewColumn)
        props.updateColumn && columns.push(updateColumn)
        props.deleteColumn && columns.push(deleteColumn)
        props.activateColumn && columns.push(activateColumn)

    }

    let rows = [];
    if (tData != null) {
        rows = tData.map((item, index) => {

            let rowVal = {}
            
            columns.map((columnItem, index) => {
                rowVal[columnItem.id] = (item[columnItem.id] == undefined) ? item[columnItem.id] : item[columnItem.id].toString()
            })

            props.viewColumn && (rowVal[1001] = <NavLink to={`/orders/${rowVal.lead_id}`}><Icon.Eye color='orange' /></NavLink>)
            
            props.updateColumn && (rowVal[1002] = <button className='border-0 bg-transparent' onClick={() => dispatch({ type: "openModal", payload: <props.updateForm rowData={rowVal} callback={props.callback} /> })} ><Icon.Edit color='orange' /></button>)


            props.deleteColumn && (rowVal[1003] = <button className='border-0 bg-transparent' onClick={() => dispatch({ type: "openModal", payload: <props.deleteForm rowData={rowVal} callback={props.callback} /> })} ><Icon.Trash color='red' /></button>)
            
            props.activateColumn && (rowVal[1004] = <props.activateForm rowData={rowVal} callback={props.callback} />)
                
            

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
