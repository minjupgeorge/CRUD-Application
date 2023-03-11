import axios from 'axios';

const usersUrl = 'http://localhost:3002/users';
export const addUser = async (user) => {
   
    try {
        return await axios.post(usersUrl,user);
    } catch (error) {
        console.log('Error while adding Users api ', error.message);
    
    }
}
    export const getUsers = async ( ) => {
   
        try {
            return await axios.get(usersUrl);
        } catch (error) {
            console.log('Error while calling getUsers api ', error.message);
        }
}
export const getUser = async (data ) => {
   
    try {
        return await axios.get(`${usersUrl}/${data}`);
    } catch (error) {
        console.log('Error while calling getUsers api by id ', error.message);
    }
}
export const editUser = async (data,id ) => {
    try {
        return await axios.put(`${usersUrl}/${id}`,data);
    } catch (error) {
        console.log('Error while calling edituser api ', error.message);
    }
   
}
export const deleteUser =async (id) => {
    try {
        return await axios.delete(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteuser api ', error.message);
    }
}