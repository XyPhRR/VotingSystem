import React from 'react';
import Divider1 from '../muiConstComp/Divider1';
import BackButton from '../muiConstComp/BackButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertBar from '../muiConstComp/AlertBar';
import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Stack,
   TextField,
   Typography,
} from '@mui/material';
import { useState } from 'react';

const SuLeaders = () => {
   const list = [
      {
         id: 1,
         Position: 'President',
         Name: 'B. Zoliana',
         Class: 'Principal',
      },
      {
         id: 2,
         Position: 'President',
         Name: 'B. Zoliana',
         Class: 'Principal',
      },
      {
         id: 3,
         Position: 'President',
         Name: 'B. Zoliana',
         Class: 'Principal',
      },
      {
         id: 4,
         Position: 'President',
         Name: 'B. Zoliana',
         Class: 'Principal',
      },
      {
         id: 5,
         Position: 'President',
         Name: 'B. Zoliana',
         Class: 'Principal',
      },
      {
         id: 6,
         Position: 'President',
         Name: 'B. Zoliana',
         Class: 'Principal',
      },
      {
         id: 7,
         Position: 'President',
         Name: 'B. Zoliana',
         Class: 'Principal',
      },
      {
         id: 8,
         Position: 'President',
         Name: 'B. Zoliana',
         Class: 'Principal',
      },
   ];
   const [lists, setLists] = useState('');
   const [open, setOpen] = useState(false);
   const [open1, setOpen1] = useState(false);
   const [openAlert, setOpenAlert] = useState(false)
   const [alertMessage, setAlertMessage] = useState("")
   const [sem, setSem] = useState('');
   const [core, setCore] = useState('');
   const [values, setValues] = useState({});

  const onDelete = async (e) => {
   try {
      await (`api/student`)
   } catch (error) {
      
   }
  }

  const Update = async (e) => {
   try {
      await (`${values.id}`,values)
      setLists(lists.map((i) => {
         if (i.id == values.id) {
            return {
                ...values,

            }
        }
        else
            return i
      }))
   } catch (error) {
      setAlertMessage("Update Error")
      setOpenAlert(true)
   }
    
  }

   const Edit = () => {
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
               <DialogTitle style={{textAlign: 'center', fontWeight: 'bold' }}>Edit</DialogTitle>
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
                        value={values.id}
                        onChange={e => setValues({
                           ...values,
                           Position: e.target.value
                        })}
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
               <DialogTitle style={{textAlign: 'center', fontWeight: 'bold' }}>Add New</DialogTitle>
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
                           width: 350,
                           marginTop: 10,
                           marginLeft: 10,
                           paddingTop: 5,
                           marginRight: 10,
                        }}
                        size='small'
                        label='Class'
                        type='text'
                     />
                  </DialogContent>
                  <DialogActions>
                     <Button variant='contained' type='submit'>
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
                        <td style={{ padding: 10 }}>Class</td>
                     </tr>
                     {list.map((lists, id) => (
                        <tr key={lists.id}>
                           <td style={{ padding: 10 }}>{id + 1}</td>
                           <td style={{ padding: 10 }}>{lists.Position}</td>
                           <td style={{ padding: 10 }}>{lists.Name}</td>
                           <td style={{ padding: 10 }}> {lists.Class} </td>
                           <td>
                              <Button onClick={() => setOpen1(true)}>
                                 <EditOutlinedIcon />
                              </Button>
                           </td>
                           <td>
                              <Button onClick={() => onDelete(lists.id) }>
                                 <DeleteIcon />
                              </Button>
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
         <AlertBar
            open={openAlert}
            setOpen={setOpenAlert}
            message={alertMessage}
         />
      </div>
   );
};

export default SuLeaders;
