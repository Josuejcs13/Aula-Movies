import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import FormError from "../../components/formError/formError";
import Checkbox from "../../components/checkbox/checkbox";

type errorType = {
  password: string;
  email: string;
};

const user = {
  email: "teste@teste.com",
  password: "asdf",
};

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();
  const [error, setError] = useState<errorType>({ password: "", email: "" });

  const validateEmail = () => {
    const emailRegex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,5}$/;
    if (!emailRegex.test(email)) {
      setError({
        ...error,
        email: "Informe um email ou número de telefone válido.",
      });
      return;
    }
    setError({ ...error, email: "" });
  };

  const validatePassword = () => {
    if (!(password.length >= 4 && password.length <= 60)) {
      setError({
        ...error,
        password: "A senha deve ter entre 4 e 60 caracteres.",
      });
      return;
    }
    setError({ ...error, password: "" });
  };

  const handleLogin = () => {
    if (user.email === email && user.password === password) {
      navigate("/home");
      return;
    }
    alert("usuário inválido");
  };

  useEffect(() => {
    validateEmail();
  }, [email]);

  useEffect(() => {
    validatePassword();
  }, [password]);

  return (
    <div className="flex items-center justify-center h-screen bg-black/43">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          className="absolute top-6 left-8 opacity-100 h-10"
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt="netflix logo"
        />
        <img
          className="h-full absolute top-0 left-0 w-full -z-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/db9d7243-d5cf-4778-885d-731db4bb13a2/BR-pt-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix background image"
        />

        <div
          className="bg-black/70 w-[28.125rem] py-12
        z-10 rounded-md flex flex-col gap-4 px-16"
        >
          <h1 className="text-3xl opacity-100 text-white font-bold mb-3">
            Entrar
          </h1>
          <Input
            value={email}
            setValue={setEmail}
            placeholder="Email ou número de celular"
            type="text"
          />
          {error.email && <FormError>{error.email}</FormError>}
          <Input
            value={password}
            setValue={setPassword}
            placeholder="Senha"
            type="text"
          />
          {error.password && <FormError>{error.password}</FormError>}
          <Button
            handleClick={handleLogin}
            disabled={
              !email || !password || error.email !== "" || error.password !== ""
            }
            color={
              !email || !password || error.email !== "" || error.password !== ""
                ? "bg-gray-400"
                : "bg-red-600"
            }
          >
            Entrar
          </Button>
          <a
            href="#"
            className="text-white text-center ease-in-out hover:underline decoration-solid"
          >
            Esqueceu a senha?
          </a>
          <Checkbox
            value={rememberMe}
            setValue={setRememberMe}
            id="checkbox"
            label="Lembrar de mim"
          />
          <p className="text-white">
            Novo por aqui?
            <a
              className="text-blue-600 font-medium hover:underline hover:text-blue-800 decoration-solid transition-all duration-300"
              href="#"
            >
              Clique aqui.
            </a>
          </p>
          <p className="text-gray-500 text-xs">
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô.
            <a
              href="#"
              className="text-blue-700 hover:underline decoration-solid transition-all duration-300"
            >
              Saiba mais.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
