import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = () => {
   const navigate = useNavigate();
   return (
      <div>
         <Button
            variant='filled'
            size='small'
            style={{ marginBottom: 5 }}
            sx={{ borderBlockStyle: 10 }}
            onClick={() => navigate('/dashbord')}
         >
            <ArrowBackIcon />
         </Button>
      </div>
   );
};

export default BackButton;
