import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const { data } = await axios.get("/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(data.user);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.name} ({user.role})</h1>
          {user?.role === "admin" && <a href="/users">Manage Users</a>}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Dashboard;
