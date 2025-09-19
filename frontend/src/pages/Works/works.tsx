import Title from "../../components/PageTitle";
import MainButton from "../../components/Button";

import icon_tg from "../../assets/img/works/icon-tg.png";
import icon_web from "../../assets/img/works/icon-web.png";

function ChooseButton({
  text,
  img,
  href,
}: {
  text: string;
  img: string;
  href: string;
}) {
  return (
    <a href={href} className="choose_button">
        <h3 className="type">{text}</h3>
        <img src={img} alt="" />
    </a>
  );
}
function Works() {
  return (
    <div className="Works">
      {/* TODO: почему-то главный заголовок ниже чем надо */}
      <Title text="Работы"></Title>
      <div className="work">
        <MainButton></MainButton>
        <div className="work_types">
          <ChooseButton
            text="Telegram-боты"
            img={icon_tg}
            href="/works/tg_works"
          ></ChooseButton>
          <ChooseButton
            text="Web-сайты"
            img={icon_web}
            href="/works/web_works"
          ></ChooseButton>
        </div>
      </div>
    </div>
  );
}

export default Works;
