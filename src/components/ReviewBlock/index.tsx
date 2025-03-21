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
  src?: string;
  role?: string;
  text?: string;
}

const ReviewItem = ({ name, src, role, text }: ReviewProps) => {
    return (
      <Review style={{ minWidth: 300, margin: 10}}>
        <Row>
          <Avatar size={48} icon={<UserOutlined />} />
          <Col style={{ marginLeft: 10}}>
            <ReviewName>Nome Cognome</ReviewName>
            <ReviewName>8 anni</ReviewName>
          </Col>
          <Rate disabled defaultValue={5} style={{ marginLeft: "auto"}}/>
        </Row>
        <ReviewText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </ReviewText>
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
              <ReviewItem/>
              <ReviewItem/>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ReviewItem/>
              <ReviewItem/>
            </Col>
          </Row>
        </Col>
      </Slide>
    </ReviewBlockSection>
  );
};

export default withTranslation()(ReviewBlock);
