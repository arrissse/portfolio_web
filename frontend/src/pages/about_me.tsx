import Title from "../components/PageTitle";
import MainButton from "../components/Button";
import photo from "../assets/img/about_me/photo.png";
import tg from "../assets/img/about_me/tg.png";
import whatsapp from "../assets/img/about_me/whatsapp.png";
import github from "../assets/img/about_me/github.png";

function Images() {
  return (
    <div className="images">
      <img src={photo} alt="me" />
      <div className="socials">
        <a
          href="https://t.me/arrisse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tg} alt="telegram" />
        </a>
        <a
          href="https://wa.me/qr/4HIHPO5O2MK7C1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a
          href="https://github.com/arrissse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="text">
      <p>и здесь какая-нибудь инфа</p>
    </div>
  );
}

function About() {
  return (
    <div className="About">
      <Title text="Обо мне"></Title>
      <div className="about_me">
        <MainButton></MainButton>
        <div className="info">
          <Images></Images>
          <Text></Text>
        </div>
      </div>
    </div>
  );
}

export default About;
