import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/signup", { name, email, password });
      localStorage.setItem("token", data.token);
      alert("Signup successful!");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
