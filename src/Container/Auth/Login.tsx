import { useEffect, useState } from "react";

function Login() {
  const [formStatus, setFormStats] = useState({
    disableInput: false,
    isPending: false,
  });

  useEffect(() => {
    setFormStats({
      disableInput: false,
      isPending: false,
    });
  }, []);
  return (
    <div className="login__form">
      <form className="login__form--container">
        <h1>Welcome back, Writer !</h1>
        <div className="login__form__input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            disabled={formStatus.disableInput}
            required
          />
        </div>
        <div className="login__form__input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            disabled={formStatus.disableInput}
            required
          />
        </div>
        <button type="submit" className="login__form--btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
