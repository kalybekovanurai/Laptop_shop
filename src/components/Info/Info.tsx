import "./Info.css";
import { useState } from "react";
import Shop from "../../assets/images/shop.jpg";

interface InfoProps {
  emoji: string;
  title: string;
  description: string;
}

const Info: InfoProps[] = [
  {
    emoji: "🤝",
    title: "Надёжность и доверие",
    description:
      "Нас выбирают тысячи клиентов благодаря прозрачной политике, честным ценам и стабильному качеству.",
  },
  {
    emoji: "🎯",
    title: "Ориентир на клиента",
    description:
      "Мы учитываем ваши потребности, постоянно улучшаем сервис и прислушиваемся к обратной связи.",
  },
  {
    emoji: "💡",
    title: "Современный подход",
    description:
      "Интуитивный интерфейс, быстрая навигация и удобные способы оплаты делают покупки простыми и приятными.",
  },
  {
    emoji: "🚚",
    title: "Быстрая доставка",
    description:
      "Мы обеспечиваем оперативную доставку по всему Кыргызстану, чтобы вы могли наслаждаться покупками без задержек.",
  },
];

const InfoSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="info-wrapper">
      <div className="info-section">
        <h1>Почему нас выбирают?</h1>
        {Info.map(({ description, title, emoji }: InfoProps, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <div className="left">
                <p>{emoji}</p>
                <span>{title}</span>
              </div>
              <span>{openIndex === index ? "▲" : "▶"}</span>
            </button>
            {openIndex === index && (
              <div className="accordion-content">{description}</div>
            )}
          </div>
        ))}
      </div>
      <div className="shop-img">
        <img src={Shop} alt="Shop" />
      </div>
    </div>
  );
};

export default InfoSection;
