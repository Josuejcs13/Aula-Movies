import FormLogin from "./component/form/form";

const Login = () => {
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
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
