import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="45px" height="45px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection id="footer">
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>Contatti</Language>
              <Para>
                {t(`Hai delle domande? Non esitare a contattarci.`)}
              </Para>
              <a href="mailto:ciochecre@gmail.com">
                <Chat>Inviaci una mail!</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>Indirizzo</Language>
              <Para>A. S. D. PALLAMANO MORDANO</Para>
              <Para>Via Aldo Moro, 1</Para>
              <Para>40027 Mordano (BO)</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>Centro estivo</Title>
              <Large href="https://drive.google.com/uc?export=download&id=1onVXxdUhJdAc9o8US5DC6i1-A9H1pctZ">Volantino</Large>
              <Large href="https://drive.google.com/uc?export=download&id=1z2qdvlqzq_dEXBOuTt4JEEx2HHiXe9sE">Regolamento</Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >

            <LanguageSwitchContainer>
              {/*<LanguageSwitch onClick={() => handleChange("en")}>
                <SvgIcon
                  src="united-states.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => handleChange("es")}>
                <SvgIcon
                  src="spain.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>*/}
            </LanguageSwitchContainer>
            <FooterContainer>
              <SocialLink
                href="https://www.facebook.com/pallamanoromagna1/?locale=it_IT"
                src="facebook.svg"
              />
              <SocialLink
                href="https://www.instagram.com/pallamanomordano1980/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.pallamanoromagna.it/"
                src="handball.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
