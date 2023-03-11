import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, styled, Button } from '@mui/material'
import { getUsers,deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #800080;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllCompanies = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);
 


    const getAllUsers = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }
    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
     }
    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Mission</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Year founded</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.mission}</TableCell>
                        <TableCell>{user.location}</TableCell>
                        <TableCell>{user.yearfounded}</TableCell>
                        <TableCell>
                        <Button color="success" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={()=>deleteUserData(user.id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllCompanies;

