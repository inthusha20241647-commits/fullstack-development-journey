import { useState } from "react";

function Login() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  function handleUname(event) {
    setUname(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleLogin() {
    const username = "Inthusha";
    const demopassword = "123@";
    if (uname == username && password == demopassword) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }
  return (
    <>
      <h1>Login</h1>
      {login ? <h1>Login successfull</h1> : <h1>Try again</h1>}
      <input
        value={uname}
        onChange={handleUname}
        placeholder="username"
      ></input>
      <input
        value={password}
        onChange={handlePassword}
        placeholder="password"
      ></input>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
