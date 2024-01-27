
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AddProductForm from "./AddProductForm";

export default function AlertDialog({ open, handleClose, handleAddProduct }: any) {
  

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <AddProductForm onSubmit={handleAddProduct}></AddProductForm>
      </Dialog>
    </React.Fragment>
  );
}