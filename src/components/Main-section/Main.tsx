import "./Main.css";
import LaptopImage from "../../assets/images/laptop-image.png";
import Button from "../UI/Button";


const Main = () => {
  return (
    <main className="main">
      <div className="main-content">
        <p>Лучшие ноутбуки по выгодным ценам</p>
        <Button text="Купить сейчас" />
      </div>
      <div className="main-image">
        <img src={LaptopImage} alt="LaptopImage" />
      </div>
    </main>
  );
};

export default Main;
