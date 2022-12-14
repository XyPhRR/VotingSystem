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
import React, { useState } from 'react';
import Divider1 from '../muiConstComp/Divider1';
import BackButton from '../muiConstComp/BackButton';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const SuCandidate = () => {
   const  [lists, setLists] = useState([
      {
         id: 1,
         name: 'VP_Candidate1',
         classs: 'C1_Class',
      },
      {
         id: 2,
         name: 'VP_Candidate2',
         classs: 'C2_Class',
      },
      {
         id: 3,
         name: 'VP_Candidate3',
         classs: 'C3_Class',
      },
   ]);
   const [open, setOpen] = useState(false)
   const [open1, setOpen1] = useState(false)
   const [values, setValues] = useState({});
   const [id, setId] = useState("")
   const [name, setName] = useState("")
   const [classs, setClasss] = useState("")
   
   const Submit = (e) => {
      e.preventDefault()
      setLists([...lists, {
          id: id,
          name: name,
          classs: classs
      }]);
      setId("")
      setName("")
      setClasss("")
      setOpen(false)
  }

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
               open={open}
               onClose={() => setOpen(false)}
            >
               <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Add VP
               </DialogTitle>
               <form onSubmit={Submit}>
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
                        helperText='Enter name'
                        value={name}
                        onChange={e => setName(e.target.value)}

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
                        label='classs'
                        type='text'
                        value={classs}
                        onChange={e => setClasss(e.target.value)}
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button variant='contained' type='submit'>
                        Add
                     </Button>

                     <Button
                        onClick={() => {
                           setValues({});
                           setOpen(false);
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
   
   const Update = (e) => {
      e.preventDefault();
      setLists(
         lists.map((i) => {
            if (i.id == values.id) {
               return {
                  ...values,
               };
            } else return i;
         }),
      );
      setValues({});
      setOpen1(false);
   };

   const Edit = () => {
      return (
         <>
            <Dialog
               sx={{ position: 'absolute' }}
               style={{ marginLeft: 500, width: 500 }}
               open={open1}
               onClose={() => setOpen1(false)}
            >
               <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Edit
               </DialogTitle>
               <form onSubmit={Update}>
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
                        helperText='Enter name'
                        value={values.name}
                        onChange={(e) =>
                           setValues({
                              ...values,
                              name: e.target.value,
                           })
                        }
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
                        label='classs'
                        type='text'
                        value={values.classs}
                        onChange={(e) =>
                           setValues({
                              ...values,
                              classs: e.target.value,
                           })
                        }
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button variant='contained' type='submit'>
                        Update
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
                     onClick={() => setOpen(true)}
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
                           {lists.map((list, index) => (
                              <tr key={list.id}>
                                 <td style={{ padding: 10 }}>{index + 1}</td>
                                 <td style={{ padding: 10 }}>{list.name}</td>
                                 <td style={{ padding: 10 }}>{list.classs}</td>
                                 <td style={{padding: 10 }}>
                                    <Button
                                       onClick={() => {
                                          setValues(lists)
                                          setOpen1(true)
                                       }}
                                    > <EditOutlinedIcon/> 
                                    </Button>
                                 </td>
                                 <td style={{padding: 10, marginRight: 30 }}>
                                    <Button style={{ marginRight: 30 }}
                                       color='error'
                                       onClick={() => setLists(lists.filter((i) => i.id !== list.id))}
                                    > <DeleteIcon/> </Button>
                                 </td>
                              </tr>
                           ))}
                        </table>
                     </div>
                  </div>
               </div>
               </Container>
         </Stack>

         {AddVp()}
         {Edit()}

      </div>
   );
};

export default SuCandidate;
