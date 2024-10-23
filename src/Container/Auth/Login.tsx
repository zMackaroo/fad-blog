function Login() {
  return (
    <div className="login__form">
      <div className="login__form--container">
        <h1>Welcome back, Writer !</h1>
        <div className="login__form__input">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="login__form__input">
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <button className="login__form--btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
