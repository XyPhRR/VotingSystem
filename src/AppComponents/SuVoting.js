import React from 'react';
import Divider1 from '../muiConstComp/Divider1';
import BackButton from '../muiConstComp/BackButton';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';

const SuVoting = () => {
   return (
      <div
         style={{
            marginTop: 70,
            marginLeft: 250,
         }}
      >
         <BackButton />
         <Typography
            fontSize={20}
            style={{
               marginLeft: 60,
               marginTop: -37,
               fontWeight: 'bolder',
            }}
         >
            SU VOTING
         </Typography>
         <Divider1 />
         <Stack style={{ marginTop: 20, textAlign: 'left' }}>
            <Container
               sx={{
                  border: 1,
                  borderRadius: 2,
                  borderColor: '#bdbdbd',
                  display: 'flex',
                  width: 'fit-content',
                  alignItems: 'center',
               }}
               textAlign='center'
            >
               <div>
                  <Typography style={{ marginLeft: 20, marginRight: 20 }}>
                     No. Of Students
                  </Typography>
                  <Divider variant='fullWidth' orientation='horizontal' />
                  <Typography
                     style={{
                        marginLeft: 10,
                        marginRight: 20,
                        textAlign: 'center',
                     }}
                  >
                     1
                  </Typography>
               </div>
               <Divider orientation='vertical' flexItem />
               <div>
                  <Typography style={{ marginLeft: 20, marginRight: 20 }}>
                     No. of Casted Vote
                  </Typography>
                  <Divider variant='fullWidth' orientation='horizontal' />
                  <Typography
                     style={{
                        marginLeft: 10,

                        textAlign: 'center',
                     }}
                  >
                     1
                  </Typography>
               </div>
               <Divider orientation='vertical' flexItem />
               <div>
                  <Typography style={{ marginLeft: 20, marginRight: 20 }}>
                     Percentage
                  </Typography>
                  <Divider variant='fullWidth' orientation='horizontal' />
                  <Typography
                     style={{
                        marginLeft: 10,
                        textAlign: 'center',
                     }}
                  >
                     100
                  </Typography>
               </div>
            </Container>
         </Stack>
         <div style={{ marginTop: 20, marginLeft: 20 }}>
            <Container sx={{ border: 1, borderRadius: 3, width: 'fit-content', height: 'fit-content' }}>
                  
            </Container>
         </div>
      </div>
   );
};

export default SuVoting;
