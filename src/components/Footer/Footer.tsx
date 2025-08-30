import "./Footer.css"
import LogoImage from "../../assets//icons/logo.png";
import TwitterIcon from "../../assets/icons/twitterIcon.svg";
import InstagramIcon from "../../assets/icons/insta.svg";
import FacebookIcon from "../../assets/icons/facebookIcon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={LogoImage} alt="logo" />
          <h1>LAPTOPS</h1>
        </div>
        <h2 className="footer-title">Лучшие ноутбуки по выгодным ценам</h2>
        <p className="footer-phone">+7 123 456–78–90</p>
        <p className="footer-email">info@example.com</p>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <p>©204 Логотип компании</p>
          <div className="footer-social">
            <a href="#">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/laptops.shop.kg?igsh=amU5Y2x1YW5qMnBh">
              <img src={InstagramIcon} alt="InstagramIcon" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Бренды</h3>
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
            </ul>
          </div>
          <div>
            <h3>Навигация</h3>
            <ul>
              <li>
                <a href="#">Каталог</a>
              </li>
              <li>
                <a href="#">Доставка</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
