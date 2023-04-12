import axios from "axios";
import {useState, useEffect} from "react";
import {BASE_URL} from '../../constants';

const tableStyle = {
    border: "1px Solid"
}

function User(){
    const url = BASE_URL + "users/";

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setUsers(response.data)
        });
    }, [])

    return (
        <div>
            <h1>Users List</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user) => {
                    return <tr><td>{user.first_name}</td><td>{user.last_name}</td></tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default User;