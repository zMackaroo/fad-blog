import { FormEvent, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthUserCredentials } from "../../Services/Auth/AuthUserCredentials";

function useLogin() {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies();
  const [formStatus, setFormStats] = useState({
    disableInput: false,
    isPending: false,
    isLoggedIn: false,
    isInvalidCredentials: false,
  });
  const formInputs = {
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  useEffect(() => {
    if (cookies.accessToken !== undefined) {
      navigate("/a/blog/posts");
    }
  }, []);

  const formSubmitAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStats({
      disableInput: true,
      isPending: true,
      isLoggedIn: false,
      isInvalidCredentials: false,
    });

    const email = formInputs?.email?.current?.value;
    const password = formInputs?.password?.current?.value;
    AuthUserCredentials(
      setCookies,
      { email, password },
      () => {
        setTimeout(() => {
          setFormStats({
            disableInput: false,
            isPending: false,
            isLoggedIn: true,
            isInvalidCredentials: false,
          });
          navigate("/a/blog/posts");
        }, 5000);
      },
      () => {
        setTimeout(() => {
          setFormStats({
            disableInput: false,
            isPending: false,
            isLoggedIn: false,
            isInvalidCredentials: true,
          });
        }, 5000);
      }
    );
  };

  return {
    cookies,
    formStatus,
    formInputs,
    formSubmitAction,
  };
}

export default useLogin;
