import React from "react";

function login({ login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <div>
        <h2> Login</h2>

        <div>
          <label>Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Login"></input>
      </div>
    </form>
  );
}

export default login;
