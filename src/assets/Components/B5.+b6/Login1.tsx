import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login1() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Thông tin đăng nhập hợp lệ
    if (
      user.email === "admin@example.com" &&
      user.password === "admin123" &&
      user.role === "admin"
    ) {
      navigate("/account");
    } else {
      setError("Thông tin đăng nhập không hợp lệ");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mật khẩu:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Quyền:
          <select name="role" value={user.role} onChange={handleChange}>
            <option value="">Chọn quyền</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <br />
        <button type="submit">Đăng nhập</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

