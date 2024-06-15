import { useEffect, useState } from "react";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import Checkbox from "../../../../components/checkbox/checkbox";
import FormError from "../../../../components/formError/formError";

type errorType = {
  password: string;
  email: string;
};

function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({ password: "", email: "" });

  const validateEmail = () => {
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
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

  useEffect(() => {
    validateEmail();
  }, [email]);

  useEffect(() => {
    validatePassword();
  }, [password]);

  return (
    <div
      className="bg-black/70 w-[28.125rem] h-4/6 py-12
        z-10 rounded-md flex flex-col gap-4 px-16"
    >
      <h1 className="text-3xl opacity-100 text-white font-bold mb-3">Entrar</h1>
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
        handleClick={() => {}}
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
      <p className="text-white text-center">OU</p>
      <Button color="bg-gray-500/50" handleClick={() => {}}>
        Usar código de acesso
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
          className="font-bold hover:underline decoration-solid transition-all duration-300"
          href="#"
        >
          {" "}
          Clique aqui.
        </a>
      </p>
      <p className="text-gray-500 text-xs">
        Esta página é protegida pelo Google reCAPTCHA para garantir que você não
        é um robô.{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline decoration-solid transition-all duration-300"
        >
          Saiba mais.
        </a>
      </p>
    </div>
  );
}

export default FormLogin;
