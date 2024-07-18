import { useEffect, useState } from "react";
import IconNetflix from "../../components/iconNetflex";
import { useNavigate } from "react-router-dom";
import { TypeIsTouched, TypeError, InputType } from "../../types";
import FormError from "../../components/formError/formError";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

const Login = () => {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const navigate = useNavigate();
  const [error, setError] = useState<TypeError>({
    email: "Please enter a valid email or phone number.",
    password: "Your password must contain between 4 and 60 characters.",
  });
  const [isTouched, setIsTouched] = useState<TypeIsTouched>({
    email: false,
    password: false,
  });

  const user = {
    email: "test@test.com",
    password: "test1234",
  };

  const validatePassword = () => {
    if (inputPassword.length >= 4 && inputPassword.length <= 60) {
      setError({
        ...error,
        password: "",
      });
      return;
    }
    setError({
      ...error,
      password: "Your password must contain between 4 and 60 characters.",
    });
  };

  const validateEmail = () => {
    const regex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,5}$/;
    if (regex.test(inputEmail)) {
      setError({
        ...error,
        email: "",
      });
      return;
    }
    setError({
      ...error,
      email: "Please enter a valid email or phone number.",
    });
  };

  useEffect(() => {
    validateEmail();
  }, [inputEmail]);

  useEffect(() => {
    validatePassword();
  }, [inputPassword]);

  const isValid = Boolean(error.email) || Boolean(error.password);

  const handleSubmit = () => {
    if (user.email === inputEmail && user.password === inputPassword) {
      navigate("/home");
      return;
    }
    alert("errado");
  };

  const handleBlur = () => {
    setIsTouched({
      ...isTouched,
      email: true,
      password: true,
    });
    validateEmail();
  };

  return (
    <div className="flex justify-center bg-black/50 h-screen items-center relative">
      <img
        className="h-full w-full absolute z-[-1]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/f2e98033-57b5-4cf9-993d-ee774904fc5e/CA-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />
      <IconNetflix className="absolute top-7 left-8 h-10 " />
      <form className="flex flex-col justify-center bg-black/75 px-16 pb-24 rounded-3.5 pt-11 gap-4 w-[28.125rem] text-white">
        <h1 className="text-white text-3xl font-bold pb-2">Sing In</h1>
        <Input
          className={isTouched.email && error.email ? "border-red-600" : ""}
          setValue={setInputEmail}
          value={inputEmail}
          typeInput={InputType.Email}
          placeholder="Email or phone number"
          onFocus={() =>
            setIsTouched({
              ...isTouched,
              email: false,
            })
          }
          onBlur={handleBlur}
        />
        {isTouched.email && error.email ? (
          <FormError>{error.email}</FormError>
        ) : (
          ""
        )}
        <Input
          className={
            isTouched.password && error.password ? "border-red-600" : ""
          }
          setValue={setInputPassword}
          value={inputPassword}
          typeInput={InputType.Password}
          placeholder="Password"
          onFocus={() =>
            setIsTouched({
              ...isTouched,
              password: false,
            })
          }
          onBlur={handleBlur}
        />
        {isTouched.password && error.password ? (
          <FormError>{error.password}</FormError>
        ) : (
          ""
        )}
        <Button
          color="bg-[#e50914] disabled:cursor-not-allowed"
          handleSubmit={handleSubmit}
          isDisable={isValid}
        >
          Sing In
        </Button>
        <div className="flex justify-center">
          <a
            className=" text-white hover:text-zinc-400 hover:underline"
            href="https://www.netflix.com/ca/LoginHelp"
          >
            Forgot password?
          </a>
        </div>
        <div className="flex gap-3">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <p className="flex gap-2 text-gray-300/80">
          New to Netflix?
          <a
            href="https://www.netflix.com/ca/"
            className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
          >
            Sign up now.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
