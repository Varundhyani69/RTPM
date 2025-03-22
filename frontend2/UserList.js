import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const { data } = await axios.get("/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name} - {user.email} ({user.role})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
