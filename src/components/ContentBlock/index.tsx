import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import CardBlock from "../CardBlock";

import {
  ContentSection,
  Content,
  Content2,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  NotePara
} from "./styles";
import PriceCalculator from "../PriceCalculator";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
  cards,
  priceCalculator,
  notes
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          {!cards && !priceCalculator && <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
            {/* !cards && <img src="https://i.ibb.co/TKvrMsq/Logo-CRE.png" width="100%" height="100%"/>*/}
          </Col>}
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              {cards && <Content2>
                <span style={{marginBottom: 0}}>Per l’iscrizione prepara: </span>
                <ul>
                  <li>documento di identità tuo e dei delegati</li>
                  <li>⁠tessera sanitaria con codice fiscale visibile</li>
                  <li>ricevuta del bonifico in formato PDF</li>
                  <li>⁠libretto dello sportivo valido per la durata di frequenza del centro estivo</li>
                </ul>
                </Content2>}
                {button && <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                          disabled?: boolean;
                          href?: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            disabled={item.disabled}
                            onClick={()=> item.href ? window.open(item.href, "_blank") : {}}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>}
                {section &&<ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={7}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                  <Col>
                    {typeof notes === "object" &&
                      notes.map(
                        (
                          item: string,
                          id: number
                        ) => {
                          return (
                            <NotePara>{item}</NotePara>
                          );
                        }
                      )}
                  </Col>
                </ServiceWrapper>}
            </ContentWrapper>
          </Col>
          {(cards || priceCalculator) && <Col lg={11} md={11} sm={12} xs={24}>
            {cards && <CardBlock />}
            {priceCalculator && <PriceCalculator />}
          </Col>}
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
