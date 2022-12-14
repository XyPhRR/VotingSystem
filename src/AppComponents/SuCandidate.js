import {
   Button,
   Container,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Stack,
   TextField,
   Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Divider1 from '../muiConstComp/Divider1';
import BackButton from '../muiConstComp/BackButton';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../api/api';

const SuCandidate = () => {
   const VicePresident = [
      {
         id: 1,
         Name: 'VP_Candidate1',
         Class: 'C1_Class',
      },
      {
         id: 2,
         Name: 'VP_Candidate2',
         Class: 'C2_Class',
      },
      {
         id: 3,
         Name: 'VP_Candidate3',
         Class: 'C3_Class',
      },
   ];
   const GS = [
      {
         id: 1,
         Name: 'GS_Candidate1',
         Class: 'C1_Class',
      },
      {
         id: 2,
         Name: 'GS_Candidate2',
         Class: 'C2_Class',
      },
      {
         id: 3,
         Name: 'GS_Candidate3',
         Class: 'C3_Class',
      },
   ];
   const IS = [
      {
         id: 1,
         Name: 'IS_Candidate1',
         Class: 'C1_Class',
      },
      {
         id: 2,
         Name: 'IS_Candidate2',
         Class: 'C2_Class',
      },
      {
         id: 3,
         Name: 'IS_Candidate3',
         Class: 'C3_Class',
      },
   ];

   const [lists, setLists] = useState('');
   const [open1, setOpen1] = useState(false);
   const [open2, setOpen2] = useState(false);
   const [open3, setOpen3] = useState(false);
   const [open4, setOpen4] = useState(false);
   const [values, setValues] = useState({});

   // useEffect(() => {
   //    fetchLists()
   // }, [])

   // const fetchList = async () => {
   //    try {
   //       const response = await api.get('/api/')
   //    } catch (error) {
         
   //    }
   // }

   const AddVp = () => {
      return (
         <>
            <Dialog
               sx={{
                  position: 'absolute',
               }}
               style={{
                  marginLeft: 500,
                  width: 500,
               }}
               open={open2}
               onClose={() => setOpen2(false)}
            >
               <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Add
               </DialogTitle>
               <form>
                  <DialogContent>
                     <TextField
                        required
                        style={{
                           width: 350,
                           marginTop: 10,
                           marginLeft: 10,
                           paddingTop: 5,
                           marginRight: 10,
                        }}
                        size='small'
                        label='NAME'
                        type='text'
                        helperText='Enter Name'
                     />
                     <br></br>
                     <TextField
                        required
                        style={{
                           marginTop: 10,
                           marginLeft: 10,
                           paddingTop: 5,
                           marginRight: 10,
                           width: 350,
                        }}
                        size='small'
                        label='Class'
                        type='text'
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button variant='contained' type='submit'>
                        Add
                     </Button>

                     <Button
                        onClick={() => {
                           setValues({});
                           setOpen2(false);
                        }}
                        variant='outlined'
                     >
                        CANCEL
                     </Button>
                  </DialogActions>
               </form>
            </Dialog>
         </>
      );
   }

   const AddGS = () => {
      return (
         <>
            <Dialog
               sx={{
                  position: 'absolute',
               }}
               style={{
                  marginLeft: 500,
                  width: 500,
               }}
               open={open3}
               onClose={() => setOpen3(false)}
            >
               <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Add
               </DialogTitle>
               <form>
                  <DialogContent>
                     <TextField
                        required
                        style={{
                           width: 350,
                           marginTop: 10,
                           marginLeft: 10,
                           paddingTop: 5,
                           marginRight: 10,
                        }}
                        size='small'
                        label='NAME'
                        type='text'
                        helperText='Enter Name'
                     />
                     <br></br>
                     <TextField
                        required
                        style={{
                           marginTop: 10,
                           marginLeft: 10,
                           paddingTop: 5,
                           marginRight: 10,
                           width: 350,
                        }}
                        size='small'
                        label='Class'
                        type='text'
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button variant='contained' type='submit'>
                        Add
                     </Button>

                     <Button
                        onClick={() => {
                           setValues({});
                           setOpen3(false);
                        }}
                        variant='outlined'
                     >
                        CANCEL
                     </Button>
                  </DialogActions>
               </form>
            </Dialog>
         </>
      );
   }

   const AddIS = () => {
      return (
         <>
            <Dialog
               sx={{
                  position: 'absolute',
               }}
               style={{
                  marginLeft: 500,
                  width: 500,
               }}
               open={open4}
               onClose={() => setOpen4(false)}
            >
               <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Add
               </DialogTitle>
               <form>
                  <DialogContent>
                     <TextField
                        required
                        style={{
                           width: 350,
                           marginTop: 10,
                           marginLeft: 10,
                           paddingTop: 5,
                           marginRight: 10,
                        }}
                        size='small'
                        label='NAME'
                        type='text'
                        helperText='Enter Name'
                     />
                     <br></br>
                     <TextField
                        required
                        style={{
                           marginTop: 10,
                           marginLeft: 10,
                           paddingTop: 5,
                           marginRight: 10,
                           width: 350,
                        }}
                        size='small'
                        label='Class'
                        type='text'
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button variant='contained' type='submit'>
                        Add
                     </Button>

                     <Button
                        onClick={() => {
                           setValues({});
                           setOpen4(false);
                        }}
                        variant='outlined'
                     >
                        CANCEL
                     </Button>
                  </DialogActions>
               </form>
            </Dialog>
         </>
      );
   }

   const Add = () => {
      return (
         <>
            <Dialog
               sx={{
                  position: 'absolute',
               }}
               style={{
                  marginLeft: 500,
                  width: 500,
               }}
               open={open1}
               onClose={() => setOpen1(false)}
            >
               <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Add
               </DialogTitle>
               <form>
                  <DialogContent>
                     <TextField
                        style={{
                           width: 350,
                           marginTop: 10,
                           marginLeft: 10,
                           marginRight: 10,
                           paddingTop: 5,
                        }}
                        required
                        label='Post'
                        size='small'
                        type='text'
                        helperText='Post'
                     />
                     <br></br>
                     <TextField
                        required
                        style={{
                           width: 350,
                           marginTop: 10,
                           marginLeft: 10,
                           paddingTop: 5,
                           marginRight: 10,
                        }}
                        size='small'
                        label='NAME'
                        type='text'
                        helperText='Enter Name'
                     />
                     <br></br>
                     <TextField
                        required
                        style={{
                           marginTop: 10,
                           marginLeft: 10,
                           paddingTop: 5,
                           marginRight: 10,
                           width: 350,
                        }}
                        size='small'
                        label='Class'
                        type='text'
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button variant='contained' type='submit'>
                        Add
                     </Button>

                     <Button
                        onClick={() => {
                           setValues({});
                           setOpen1(false);
                        }}
                        variant='outlined'
                     >
                        CANCEL
                     </Button>
                  </DialogActions>
               </form>
            </Dialog>
         </>
      );
   };
   // const [lists, setLists] = useState([])
   // useEffect(() => {
   // 	fetchList()
   // }, [])

   // const fetchList = async () => {
   // 	try {
   // 		const response = await api.get(`/api/candidate`)
   // 		setLists(response.data.data)
   // 	} catch (error) {
   // 		setLists([])
   // 	}
   // }
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
            SU CANDIDATE
         </Typography>
         <Divider1 />
         <Stack
            style={{
               marginTop: 20,
            }}
         >
            <Container
               sx={{
                  border: 1,
                  borderRadius: 3,
                  borderColor: '#bdbdbd',
                  width: 685,
               }}
               style={{
                  marginLeft: 10,
               }}
            >
               <div
                  style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 20 }}
               >
                  Candidate For Vice President
                  <Button
                     variant='contained'
                     startIcon={<AddIcon />}
                     style={{ marginLeft: 250 }}
                     onClick={() => setOpen2(true)}
                  >
                     Add New
                  </Button>
               </div>
               <div style={{ display: 'flex' }}>
                  <div style={{ flexGrow: 1 }}>
                     <div style={{ marginTop: 20, marginLeft: 20 }}>
                        <table style={{ width: 700 }}>
                           <tr>
                              <td style={{ padding: 10, fontWeight: 'bold' }}>
                                 Sl. NO
                              </td>
                              <td style={{ padding: 10, fontWeight: 'bold' }}>
                                 Name
                              </td>
                              <td style={{ padding: 10, fontWeight: 'bold' }}>
                                 Class
                              </td>
                           </tr>
                           {VicePresident.map((lists, id) => (
                              <tr key={lists.id}>
                                 <td style={{ padding: 10 }}>{id + 1}</td>
                                 <td style={{ padding: 10 }}>{lists.Name}</td>
                                 <td style={{ padding: 10 }}>
                                    {' '}
                                    {lists.Class}{' '}
                                 </td>
                                 <td style={{padding: 10 }}>
                                    <Button> <EditOutlinedIcon/> </Button>
                                 </td>
                                 <td style={{padding: 10, marginRight: 30 }}>
                                    <Button style={{ marginRight: 30 }}> <DeleteIcon/> </Button>
                                 </td>
                              </tr>
                           ))}
                        </table>
                     </div>
                  </div>
               </div>
            </Container>
         </Stack>
         <Stack style={{ marginTop: 20 }}>
            <Container
               sx={{
                  border: 1,
                  borderRadius: 3,
                  borderColor: '#bdbdbd',
                  width: 685,
               }}
               style={{
                  marginLeft: 10,
               }}
            >
               <div
                  style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 20 }}
               >
                  Candidate For Genreral Secretary
                  <Button
                     variant='contained'
                     startIcon={<AddIcon />}
                     style={{ marginLeft: 215 }}
                     onClick={() => setOpen3(true)}
                  >
                     Add New
                  </Button>
               </div>
               <div style={{ display: 'flex' }}>
                  <div style={{ flexGrow: 1 }}>
                     <div style={{ marginTop: 20, marginLeft: 20 }}>
                        <table style={{ width: 700 }}>
                           <tr>
                              <td style={{ padding: 10, fontWeight: 'bold' }}>
                                 Sl. NO
                              </td>
                              <td style={{ padding: 10, fontWeight: 'bold' }}>
                                 Name
                              </td>
                              <td style={{ padding: 10, fontWeight: 'bold' }}>
                                 Class
                              </td>
                           </tr>
                           {GS.map((lists, id) => (
                              <tr key={lists.id}>
                                 <td style={{ padding: 10 }}>{id + 1}</td>
                                 <td style={{ padding: 10 }}>{lists.Name}</td>
                                 <td style={{ padding: 10 }}>
                                    {' '}
                                    {lists.Class}{' '}
                                 </td>
                                 <td style={{padding: 10 }}>
                                    <Button> <EditOutlinedIcon/> </Button>
                                 </td>
                                 <td style={{padding: 10, marginRight: 30 }}>
                                    <Button style={{ marginRight: 30 }}> <DeleteIcon/> </Button>
                                 </td>
                              </tr>
                           ))}
                        </table>
                     </div>
                  </div>
               </div>
            </Container>
         </Stack>
         <Stack style={{ marginTop: 20 }}>
            <Container
               sx={{
                  border: 1,
                  borderRadius: 3,
                  borderColor: '#bdbdbd',
                  width: 685,
               }}
               style={{
                  marginLeft: 10,
               }}
            >
               <div
                  style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 20 }}
               >
                  Candidate For Indoor Secretary
                  <Button
                     variant='contained'
                     startIcon={<AddIcon />}
                     style={{ marginLeft: 215 }}
                     onClick={() => setOpen4(true)}
                  >
                     Add New
                  </Button>
               </div>
               <div style={{ display: 'flex' }}>
                  <div style={{ flexGrow: 1 }}>
                     <div style={{ marginTop: 20, marginLeft: 20 }}>
                        <table style={{ width: 700 }}>
                           <tr>
                              <td style={{ padding: 10, fontWeight: 'bold' }}>
                                 Sl. NO
                              </td>
                              <td style={{ padding: 10, fontWeight: 'bold' }}>
                                 Name
                              </td>
                              <td style={{ padding: 10, fontWeight: 'bold' }}>
                                 Class
                              </td>
                           </tr>
                           {IS.map((lists, id) => (
                              <tr key={lists.id}>
                                 <td style={{ padding: 10 }}>{id + 1}</td>
                                 <td style={{ padding: 10 }}>{lists.Name}</td>
                                 <td style={{ padding: 10 }}>{lists.Class}</td>
                                 <td style={{padding: 10 }}>
                                    <Button> <EditOutlinedIcon/> </Button>
                                 </td>
                                 <td style={{padding: 10, marginRight: 30 }}>
                                    <Button style={{ marginRight: 30 }}> <DeleteIcon/> </Button>
                                 </td>
                              </tr>
                           ))}
                        </table>
                     </div>
                  </div>
               </div>
            </Container>
            <Button
               style={{ width: 150, marginLeft: 500, marginTop: 20 }}
               startIcon={<AddIcon />}
               variant='contained'
               onClick={() => setOpen1(true)}
            >
               Add New
            </Button>
         </Stack>
         {Add()}
         {AddVp()}
         {AddGS()}
         {AddIS()}
      </div>
   );
};

export default SuCandidate;
