import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUsers = useLoaderData()

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);

        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    alert('User Update Successfully')
                }
            })
    }
    return (
        <div>
            <h1>Update information of: {loadedUsers.name}</h1>
            <form onSubmit={handleUpdate} >
                <input type="name" name="name" defaultValue={loadedUsers.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUsers.email} id="" />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;