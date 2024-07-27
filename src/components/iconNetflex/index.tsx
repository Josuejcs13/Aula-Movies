import LogoNetflix from "../../assets/NetflixLogoSvg.svg";

type LogoNetflixProp = {
  className: string;
};

function IconNetflix({ className }: LogoNetflixProp) {
  return <img src={LogoNetflix} alt="Icon Netflix" className={className} />;
}

export default IconNetflix;
