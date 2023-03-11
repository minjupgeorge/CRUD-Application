import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
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
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
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
    )
}

export default AddCompany;