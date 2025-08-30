import Logo from "../assets/icons/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={Logo} alt="logo" />
        <h1>LAPTOPS</h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Акции</a>
          </li>
          <li>
            <a href="#">Доставка</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
