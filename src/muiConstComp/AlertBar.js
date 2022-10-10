import { Snackbar, Alert } from '@mui/material'
import React, { forwardRef } from 'react'

const SnackbarAlert = forwardRef(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

const AlertBar = ({ open, setOpen, message }) => {
    return (
        <div>
            <Snackbar
                autoHideDuration={3000}
                open={open}
                message={message}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',

                }}
            >
                <SnackbarAlert>
                    {message}
                </SnackbarAlert>
            </Snackbar>
        </div>
    )
}

export default AlertBar