import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { collection, getDocs } from 'firebase/firestore';
import { styled } from '@mui/system';
import { withStyles } from '@mui/styles';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/diseaseIdentifiedTable.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#20A382',
      color: 'black',
      fontWeight: 500,
      padding: '0.7rem',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: '0.7rem',
    },
  }));
  
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#ffffff',
    },
  },
}))(TableRow);

const columns = [
    { id: 'userName', label: 'User Name', minWidth: 170 },
    { id: 'imageUrl', label: 'Image', minWidth: 100, align: 'center' },
    { id: 'prediction', label: 'Prediction', minWidth: 170 },
    { id: 'createdAt', label: 'Created At', minWidth: 170, align: 'right' },
];

function DiseaseTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);
    const navigate = useNavigate(); // for navigation

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
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Handle navigation to DiseaseIdentifier
    const handleNavigateToAdd = () => {
        navigate('/diseaseIdentifier');
    };

    return (
        <div>
            <div className="title-button-container">
                <h2 className="table-title">Coral Disease Identifitaction</h2>
                <button className="add-button" onClick={handleNavigateToAdd}>
                    Add
                </button>
            </div>
            
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <StyledTableRow>
                      {columns.map((column) => (
                        <StyledTableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        return (
                          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <StyledTableCell key={column.id} align={column.align}>
                                  {column.id === 'imageUrl' ? (
                                    <img src={value} alt="Coral" style={{ width: 50, height: 50 }} />
                                  ) : (
                                    value
                                  )}
                                </StyledTableCell>
                              );
                            })}
                          </StyledTableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
        </div>
    );
}

export default DiseaseTable;