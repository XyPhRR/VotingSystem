import { Button, Divider } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'

const Notice = () => {
  return (
    <div style={{ marginLeft: 250, marginTop: 80}}>
      <Button variant='filled' size='small' style={{marginBottom: 5}}>
        <ArrowBackIcon />
      </Button>
      NOTICE
      <Divider variant='middle' component='article' style={{ width: 1240, marginTop: 5 }} sx={{borderColor: 'red'}} />
    </div>
  )
}

export default Notice