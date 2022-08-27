import React from 'react';
import Divider1 from '../muiConstComp/Divider1';
import BackButton from '../muiConstComp/BackButton';
import { Avatar, Box, Stack, Typography } from '@mui/material';

const SuLeaders = () => {
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
            }}
         >
            SU LEADERS
         </Typography>
         <Divider1 />
         <Stack direction='row' spacing={5}>
            <Box
               sx={{
                  border: 1,
                  width: 200,
                  height: 200,
               }}
               style={{
                  marginTop: 30,
                  marginLeft: 20,
                  textAlign: 'center',
               }}
            >
               <Avatar
                  style={{
                     marginLeft: 65,
                     marginTop: 10,
                  }}
                  sx={{
                     width: 70,
                     height: 70,
                  }}
               />
               <Typography
                  style={{
                     marginTop: 20,
                     marginLeft: 5,
                     fontWeight: 'bold',
                  }}
               >
                  PRESIDENT
               </Typography>
            </Box>
            <Box
               sx={{
                  border: 1,
                  width: 200,
                  height: 200,
               }}
               style={{
                  marginTop: 30,
                  marginLeft: 20,
                  textAlign: 'center',
               }}
            >
               <Avatar
                  style={{
                     marginLeft: 65,
                     marginTop: 10,
                  }}
                  sx={{
                     width: 70,
                     height: 70,
                  }}
               />
               <Typography
                  style={{
                     marginTop: 20,
                     marginLeft: 5,
                     fontWeight: 'bold',
                  }}
               >
                  VICE PRESIDENT
               </Typography>
            </Box>
            <Box
               sx={{
                  border: 1,
                  width: 200,
                  height: 200,
               }}
               style={{
                  marginTop: 30,
                  marginLeft: 20,
                  textAlign: 'center',
               }}
            >
               <Avatar
                  style={{
                     marginLeft: 65,
                     marginTop: 10,
                  }}
                  sx={{
                     width: 70,
                     height: 70,
                  }}
               />
               <Typography
                  style={{
                     marginTop: 20,
                     marginLeft: 5,
                     fontWeight: 'bold',
                  }}
               >
                  GEN. SECRETARY
               </Typography>
            </Box>
            <Box
               sx={{
                  border: 1,
                  width: 210,
                  height: 200,
               }}
               style={{
                  marginTop: 30,
                  marginLeft: 20,
                  textAlign: 'center',
               }}
            >
               <Avatar
                  style={{
                     marginLeft: 65,
                     marginTop: 10,
                  }}
                  sx={{
                     width: 70,
                     height: 70,
                  }}
               />
               <Typography
                  style={{
                     marginTop: 20,
                     marginLeft: 5,
                     fontWeight: 'bold',
                  }}
               >
                  ASST. GEN SECRETARY
               </Typography>
            </Box>
         </Stack>
      </div>
   );
};

export default SuLeaders;
