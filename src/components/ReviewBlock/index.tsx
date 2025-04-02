import { Row, Col, Avatar, Rate } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Review, ReviewName, ReviewText, ReviewBlockSection, ContentWrapper, Content} from "./styles";
import { UserOutlined } from '@ant-design/icons';

interface ReviewBlockProps {
  t: TFunction;
}

interface ReviewProps {
  name?: string;
  age?: string;
  src?: string;
  text?: string;
}

const ReviewItem = ({ name, age, src, text }: ReviewProps) => {
    return (
      <Review style={{ minWidth: 300, margin: 10}}>
        <Row>
          <Avatar size={48} icon={<UserOutlined />} />
          <Col style={{ marginLeft: 10}}>
            <ReviewName>{name}</ReviewName>
            <ReviewName>{age}</ReviewName>
          </Col>
          <Rate disabled defaultValue={5} style={{ marginLeft: "auto"}}/>
        </Row>
        <ReviewText>{text}</ReviewText>
      </Review>
    );
  };

const ReviewBlock = ({ t }: ReviewBlockProps) => {
  return (
    <ReviewBlockSection>
      <Slide direction="up" triggerOnce>
        <Col lg={24} md={24} sm={24} xs={24} id="dicono">
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <h6>Dicono di noi!</h6>
                <Content>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Content>
              </Col>
            </ContentWrapper>
          </Row>
          <Row justify="space-between" align="middle">
            <Col lg={12} md={11} sm={24} xs={24}>
              <ReviewItem text="Nessun consiglio, solo complimenti per aver fatto passare a mio figlio un’estate super divertente e in compagnia! Grazie, vi faremo come sempre una gran pubblicità, ci vediamo l’anno prossimo!"/>
              <ReviewItem text="Siamo stati davvero molto contenti di aver partecipato a Ció che CRE! Torneremo sicuramente il prossimo anno e lo consiglieremo ai nostri amici! Ringraziamo tutto lo staff per la professionalità e per tutte le belle esperienze vissute insieme! Se ci fosse la possibilità di poter usufruire del servizio anche a settembre sarebbe meraviglioso!!! Grazie ragazzi!!!"/>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ReviewItem text="Ci eravamo già trovati bene lo scorso anno, ma quest'anno siamo stati ancora più contenti. Abbiamo apprezzato molto le destinazioni delle gite e i laboratori. Il personale ci è parso accogliente e attento. Nostro figlio è rimasto incuriosito dalla pallamano e si è sempre divertito molto. Grazie."/>
              <ReviewItem text="Carissimi grazie! Abbiamo visto un miglioramento sul comportamento dello staff e di Ció che CRE! in generale quest'anno. Sicuramente c'è tanto lavoro dietro!Lo sappiamo non e facile lavorare con cosi tanti bimbi, poi ogni uno è a modo suo, con ii suoi capricci 🙂, ma siete stati bravissimi, una squadra fantastica 🎊🤗 Vi ringraziamo di tutto!Buon estate a tutti!❤️ A presto!🙏🎉💪🤗"/>
            </Col>
          </Row>
        </Col>
      </Slide>
    </ReviewBlockSection>
  );
};

export default withTranslation()(ReviewBlock);
