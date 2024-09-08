import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const columns = [
    { id: 'userName', label: 'User Name', minWidth: 170 },
    { id: 'imageUrl', label: 'Image', minWidth: 100 },
    { id: 'prediction', label: 'Prediction', minWidth: 170 },
    { id: 'createdAt', label: 'Created At', minWidth: 170, align: 'right' },
];

function DiseaseTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState([]);

    // Fetch Firestore data
    useEffect(() => {
        const fetchCoralData = async () => {
        try {
            const coralDataSnapshot = await getDocs(collection(db, 'coral-predictions'));
            const coralData = coralDataSnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                userName: data.userName,
                imageUrl: data.imageUrl,
                prediction: data.prediction,
                createdAt: data.createdAt.toDate().toLocaleString(),
            };
            });
            setRows(coralData);
        } catch (error) {
            console.error("Error fetching coral data: ", error);
        }
        };
        fetchCoralData();
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                  .map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === 'imageUrl' ? (
                                <img src={value} alt="Coral" style={{ width: 50, height: 50 }} />
                              ) : (
                                value
                              )}
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
        </Paper>
    );

}

export default DiseaseTable;