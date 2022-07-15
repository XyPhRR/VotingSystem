// import { Stack } from '@mui/material'
import { Button, Container, Stack, Typography,  } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

let FolderIcon1 = require('../../src/folder.jpg')

const StudentsUnion = () => {
  const navigate = useNavigate()
  return (
    <div style={{
      textAlign:'left',
      marginTop: 100,
      marginLeft: 300
    }}>
        <h1>STUDENTS' UNION</h1>
        <Stack direction='row' spacing={1} style={{textAlign: 'left', marginTop: 100, marginLeft: -50  , marginRight: 10 }}>
          <Button 
            variant='filled' 
            size='large'
            onClick={() => navigate('/student-union/leader')} 
          >
            <Container sx={{ border:1, width: 400, borderRadius: 3,height: 100, borderColor: '#bdbdbd' }}>
              <img
                align='left'
                src={FolderIcon1} 
                alt='folder'  
                className='folderIcon1' 
                width={60}
                height={50}
              />
              <Typography fontSize={12} variant='h1' component='h1' align='bottom'> STUDENTS' UNION LEADERS </Typography>
            </Container>
          </Button>
          <Button 
            variant='filled' 
            size='small'
            onClick={() => navigate('/student-union/candidate')}
          >
            <Container style={{marginRight: 100}} sx={{ border:1, width: 400, borderRadius: 3, height: 100, borderColor: '#bdbdbd'}}>
              <img 
                src={FolderIcon1} 
                alt='folder'  
                className='folderIcon1' 
                width={60}
                height={50}
              />
              <Typography fontSize={12} variant='h1' component='h1' align='left'> STUDENTS' UNION CANDIDATE </Typography>
            </Container>
          </Button>
          <Button 
            variant='filled' 
            size='small'
            onClick={() => navigate('/student-union/voting')}
          >
            <Container style={{marginRight: 100}} sx={{ border:1, width: 400, borderRadius: 3, height: 100, borderColor: '#bdbdbd'}}>
              <img 
                src={FolderIcon1} 
                alt='folder'  
                className='folderIcon1' 
                width={60}
                height={50}
              />
              <Typography fontSize={12} variant='h1' component='h1' align='left'> STUDENTS' UNION VOTING </Typography>
            </Container>
          </Button>
        </Stack>
    </div>
  )
}

export default StudentsUnion