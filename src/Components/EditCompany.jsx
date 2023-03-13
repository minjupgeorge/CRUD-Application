import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography,Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser,editUser} from '../Service/api';

const initialValue = {
    name: '',
    mission: '',
    location: '',
    yearfounded: ''
}
const Container = styled(FormGroup)`
width: 50%;
margin: 3% 0 0 25%;
& > div {
    margin-top: 20px;
    color: #111111;  
`;


const EditCompany = () => {
    const [user, setUser] = useState(initialValue);
    const { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
        //eslint-disable-next-line
    }, [])

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        await editUser(user,id);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Box
      style={{
        margin: "60px 0 0 0px",
       backgroundImage: `url('${process.env.PUBLIC_URL}/assets/global.jpg')`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       height: "100vh", 
      
      }}>
        
        <Container>
        
    
            <Typography variant="h4">Edit Company</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Mission</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='mission' value={user.mission}  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Location</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='location' value={user.location} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Year Founded</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='yearfounded' value={user.yearfounded}  />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Update Company</Button>
            </FormControl>
        </Container>
        </Box>
    )
}

export default EditCompany;
