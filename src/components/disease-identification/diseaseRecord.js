import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import '../../assets/styles/diseaseRecord.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function RecordDialog({ open, handleClose, rowData }) {
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Coral Disease Record
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Close
                </Button>
              </Toolbar>
            </AppBar>
            
            <div className="disease-record-dialog-content">
                <div className="disease-record-card-container">
                    <div className="disease-record-card-container">
                        <img src={rowData.imageUrl} alt="Coral Image Preview" className="coral-image" />
                    </div>
                    <div className="disease-record-details-container">
                        <h2 className="details-title">Details</h2>
                        <div className="details-info">
                            <p className="detail-item"><strong>User Name:</strong> {rowData.userName}</p>
                            <p className="detail-item"><strong>Prediction:</strong> {rowData.prediction}</p>
                            <p className="detail-item"><strong>Created At:</strong> {rowData.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default RecordDialog;