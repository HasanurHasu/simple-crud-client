import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDeleteUser = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                alert('user delete successfully')

                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            }
        })
    }
    return (
        <div>
            <p>{users.length}</p>
            <div>
                {
                    users.map(user => <p key={user._id}>Name: {user.name} Email: {user.email} id: {user._id}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                     <button 
                    onClick={() => handleDeleteUser(user._id)}
                    >x</button> </p>)
                }
            </div>
        </div>
    );
};

export default Users;