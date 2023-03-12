import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, styled, Button,Box } from '@mui/material'
import { getUsers,deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        color: #00FF00;
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
        //console.log(response);
        setUsers(response.data);
    }
    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
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
                            <Button color="primary" variant="contained" onClick={()=>deleteUserData(user.id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
        </Box>
    )
}

export default AllCompanies;

