import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography ,Box} from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

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

const AddCompany = () => {
    const [user, setUser] = useState(initialValue);
    const { name, mission, location, yearfounded } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Box
      style={{
        margin: "60px 0 0 0px",
       backgroundImage: `url('${process.env.PUBLIC_URL}/assets/global.jpg')`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       height: "100vh", 
          
      }}
    >
        <Container>
            <Typography variant="h4">Add Company</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Mission</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='mission' value={mission} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Location</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='location' value={location} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Year Founded</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='yearfounded' value={yearfounded} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Company</Button>
            </FormControl>
        </Container>
        </Box>
    )
}

export default AddCompany;