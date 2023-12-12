import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userId || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/user/login", {
        id: userId,
        pw: password,
      },
        {
          headers: {
            "Content-Type":"application/json"
          }
        }
      );

      localStorage.setItem('token', response.data.result.AccessToken);
      localStorage.setItem('id', response.data.result.userId);

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "로그인"}
        </button>
      </form>
    </div>
  );
};

export default Login;
