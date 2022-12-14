import React, { useState } from 'react';
import Divider1 from '../muiConstComp/Divider1';
import BackButton from '../muiConstComp/BackButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   IconButton,
   Stack,
   TextField,
   Typography,
} from '@mui/material';

const SuLeaders = () => {
   const [lists, setLists] = useState([
      {
         id: 1,
         position: 'President',
         name: 'B. Zoliana',
         classs: 'Principal',
      },
      {
         id: 2,
         position: 'President',
         name: 'B. Zoliana',
         classs: 'Principal',
      },
      {
         id: 3,
         position: 'President',
         name: 'B. Zoliana',
         classs: 'Principal',
      },
      {
         id: 4,
         position: 'President',
         name: 'B. Zoliana',
         classs: 'Principal',
      },
      {
         id: 5,
         position: 'President',
         name: 'B. Zoliana',
         classs: 'Principal',
      },
      {
         id: 6,
         position: 'President',
         name: 'B. Zoliana',
         classs: 'Principal',
      },
      {
         id: 7,
         position: 'President',
         name: 'B. Zoliana',
         classs: 'Principal',
      },
      {
         id: 8,
         position: 'President',
         name: 'B. Zoliana',
         classs: 'Principal',
      },
   ]);
   const [open, setOpen] = useState(false);
   const [open1, setOpen1] = useState(false);
   const [values, setValues] = useState({});
   const [id, setId] = useState('');
   const [position, setPosition] = useState('');
   const [name, setName] = useState('');
   const [classs, setClasss] = useState('');

   const Submit = (e) => {
      e.preventDefault();
      setLists([
         ...lists,
         {
            id: id,
            position: position,
            name: name,
            classs: classs,
         },
      ]);
      setId('');
      setPosition('');
      setName('');
      setClasss('');
      setOpen(false)
   };

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
                        value={values.position}
                        onChange={(e) =>
                           setValues({
                              ...values,
                              position: e.target.value,
                           })
                        }
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

   const renderAddNew = () => {
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
                  Add New
               </DialogTitle>
               <form onSubmit={Submit}>
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
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
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
                        helperText='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        label='classs'
                        type='text'
                        value={classs}
                        onChange={(e) => setClasss(e.target.value)}
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button
                        variant='contained'
                        type='submit'
                     >
                        ADD NEW
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
   };

   return (
      <div
         className='ui container'
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
               fontWeight: 'bold',
            }}
         >
            SU LEADERS
         </Typography>
         <Divider1 />
         <Stack
            style={{
               marginLeft: 20,
               marginTop: 20,
            }}
         >
            <div style={{ display: 'flex' }}>
               <div style={{ flexGrow: 1 }}>
                  <table
                     style={{
                        width: 800,
                     }}
                  >
                     <tr
                        style={{
                           fontWeight: 'bold',
                        }}
                     >
                        <td style={{ padding: 10 }}>Sl no.</td>
                        <td style={{ padding: 10 }}>Position</td>
                        <td style={{ padding: 10 }}>Name</td>
                        <td style={{ padding: 10 }}>Classs</td>
                     </tr>
                     {lists.map((list, index) => (
                        <tr key={list.id}>
                           <td style={{ padding: 10 }}>{index + 1}</td>
                           <td style={{ padding: 10, marginLeft: 20 }}>{list.position}</td>
                           <td style={{ padding: 10, marginLeft: 20 }}>{list.name}</td>
                           <td style={{ padding: 10, marginLeft: 20 }}> {list.classs} </td>
                           <td style={{ padding: 10, marginLeft: 20 }}>
                              <IconButton
                                 color='info'
                                 size='large'
                                 variant='contained'
                                 onClick={() => {
                                    setValues(list);
                                    setOpen1(true);
                                 }}
                              >
                                 <EditOutlinedIcon />
                              </IconButton>
                           </td>
                           <td style={{ padding: 10 }}>
                              <IconButton
                                 color='error'
                                 size='large'
                                 variant='contained'
                                 onClick={() => setLists(lists.filter((i) => i.id !== list.id)) }
                              >
                                 <DeleteIcon/>
                              </IconButton>
                           </td>
                        </tr>
                     ))}
                  </table>
               </div>
            </div>
            <div style={{ flexShrink: 1 }}>
               <Button
                  sx={{ position: 'static' }}
                  style={{ marginLeft: 630, marginTop: 30 }}
                  variant='contained'
                  type='submit'
                  onClick={() => setOpen(true)}
               >
                  Add New
               </Button>
            </div>
         </Stack>
         {renderAddNew()}
         {Edit()}
      </div>
   );
};

export default SuLeaders;
