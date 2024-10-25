import useLogin from "../../Utils/Hooks/useLogin";

function Login() {
  const { formInputs, formStatus, formSubmitAction } = useLogin();

  return (
    <div className="login__form">
      <form onSubmit={formSubmitAction} className="login__form--container">
        <h1>Welcome back, Writer !</h1>
        <div className="login__form__input">
          <label>Email</label>
          <input
            ref={formInputs.email}
            type="email"
            disabled={formStatus.disableInput}
            aria-invalid={formStatus.isInvalidCredentials}
            required
          />
        </div>
        <div className="login__form__input">
          <label>Password</label>
          <input
            ref={formInputs.password}
            type="password"
            disabled={formStatus.disableInput}
            aria-invalid={formStatus.isInvalidCredentials}
            required
          />
        </div>
        <button
          type="submit"
          className="login__form--btn"
          disabled={formStatus.disableInput}
        >
          {formStatus.isPending ? "Checking Credentials" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
