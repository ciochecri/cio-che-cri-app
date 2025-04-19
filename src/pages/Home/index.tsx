import { lazy, useEffect } from "react";
import { Modal } from 'antd';
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import QuantoCostiamo from "../../content/QuantoCostiamo.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import DoveAndiamo from "../../content/DoveAndiamo.json";
import MiddleBlock from "../../components/MiddleBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const ReviewBlock = lazy(() => import("../../components/ReviewBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


const countDown = () => {
  let secondsToGo = 60;

  const modal = Modal.info({
    title: <>
         L’estate sta arrivando (anche se non sembra) e con lei come ogni anno torna il Ció che CRE! 😎<br />
         Quest’anno siamo ricchi di novità e non vediamo l’ora di svelarvele tutte lunedì 28 aprile alle 20:00 nella Sala Polivalente di Mordano (Via della Repubblica, dietro al Comune di Mordano) per la serata di presentazione dei centri estivi! 🤟🏼
      </>,
    content: `Questo pop-up verrà eliminato automaticamente tra ${secondsToGo} secondi.`,
  });

  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `Questo pop-up verrà eliminato automaticamente tra ${secondsToGo} secondi.`,
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};

const Home = () => {
  useEffect(() => {
    var varDate = new Date("2025-04-28T20:00:00"); //dd-mm-YYYY
    var today = new Date();
    console.log(varDate);
    console.log(today);
    if(varDate >= today)
      countDown()
 });
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="left"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
        cards={true}
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="cosa-facciamo.svg"
        id="attivita"
      />
      <ContentBlock
        direction="left"
        title={DoveAndiamo.title}
        content={DoveAndiamo.text}
        icon="dove-andiamo.svg"
        id="attivita2"
      />
      <ContentBlock
        direction="right"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="cosa-mangiamo.svg"
        id="menu"
      />
      
      <ContentBlock
        direction="right"
        title={QuantoCostiamo.title}
        content={QuantoCostiamo.text}
        section={QuantoCostiamo.section}
        notes={QuantoCostiamo.notes}
        icon="graphs.svg"
        id="prezzi"
        priceCalculator={true}
      />
      <ReviewBlock/>
      {/*<Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />*/}
    </Container>
  );
};

export default Home;
