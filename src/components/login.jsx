import React, { useState } from "react";

function Login() {
  const [userType, setUserType] = useState("default");

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="container">
      <form>
        <select
          className="text-sm pt-1 pl-6 pr-3"
          value={userType}
          onChange={handleChange}
        >
          <option value="default">Select User</option>
          <option value="Consumer">Consumer</option>
          <option value="Retailer">Retailer</option>
          <option value="Procurement">Procurement</option>
        </select>
        <input
          onChange={handleChange}
          value={userType.uName}
          name="uName"
          placeholder="Username"
        />

        <input
          onChange={handleChange}
          value={userType.password}
          name="password"
          type="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}
export default Login;
