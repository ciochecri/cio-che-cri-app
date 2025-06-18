import { Row, Col } from "antd";
import { useEffect, useState } from 'react';
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { CardBlockSection, Content } from "./styles";
import Papa from 'papaparse';

interface CardBlockProps {
  t: TFunction;
}

const MAX_NUM = 72;
const OFFSET = Math.max(0, Math.round((new Date("03/20/2025").getTime() - new Date().getTime())/ (1000 * 3600 * 24)));

function getColor(numberRemaining: number){
  if(numberRemaining === 0)
    return '#282c34';
  if(numberRemaining < 10)
    return '#eb9694';
  if(numberRemaining < 30)
    return '#fef3bd'; 
  return '#c1e1c5'; 
}

function getTextColor(numberRemaining : number){
  if(numberRemaining === 0)
    return '#ffffff';
  return undefined; 
}

function getSettimanaDescription(index : number){
  if(index === 1)
    return '9 giugno\n13 giugno';
  if(index === 2)
    return '16 giugno\n20 giugno';
  if(index === 3)
    return '23 giugno\n27 giugno';
  if(index === 4)
    return '30 giugno\n4 luglio';
  if(index === 5)
    return '7 luglio\n11 luglio';
  if(index === 6)
    return '14 luglio\n18 luglio';
  if(index === 7)
    return '21 luglio\n25 luglio';
  if(index === 8)
    return '28 luglio\n1 agosto';
  return '';
}

const CardBlock = ({ t }: CardBlockProps) => {
  const [cardData, setCardData] = useState<any[]>([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      var res = await (
        await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vSiQYKdJisuLcFg0vydiJGGwYTI6wv1SoWVMPECybZhtrkWm4Zsme2yAPeKfKSzkJXBsESxtY60oSrN/pub?gid=574938590&single=true&output=csv'
        )
      ).blob().then(b => b.text());
      var res_seq = await (
        await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8lYl1nsSky2wAyXJPdIzWyxrLqKYX8GAAPNdavVFDv-VHhzi9hQcgp8n85aUp5UCak91xEnh_NGGL/pub?gid=664164375&single=true&output=csv'
        )
      ).blob().then(b => b.text());

      type WeekDashboard = {
        S1: number;
        S2: number;
        S3: number;
        S4: number;
        S5: number;
        S6: number;
        S7: number;
        S8: number;
      };

      type Sequenze = {
        'Settimana corrente': number;
      };

      const results = Papa.parse<WeekDashboard>(res, {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      });

      const results_sequenze = Papa.parse<Sequenze>(res_seq, {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      });
      console.log("pippo");
      console.log(results_sequenze);

      if(results?.data[0]){
        const data = [
          results_sequenze?.data[0]['Settimana corrente'] < 1 ? results.data[0]['S1'] : MAX_NUM,
          results_sequenze?.data[0]['Settimana corrente'] < 2 ? results.data[0]['S2'] : MAX_NUM,
          results_sequenze?.data[0]['Settimana corrente'] < 3 ? results.data[0]['S3'] : MAX_NUM,
          results_sequenze?.data[0]['Settimana corrente'] < 4 ? results.data[0]['S4'] : MAX_NUM,
          results_sequenze?.data[0]['Settimana corrente'] < 5 ? results.data[0]['S5'] : MAX_NUM,
          results_sequenze?.data[0]['Settimana corrente'] < 6 ? results.data[0]['S6'] : MAX_NUM,
          results_sequenze?.data[0]['Settimana corrente'] < 7 ? results.data[0]['S7'] : MAX_NUM,
          results_sequenze?.data[0]['Settimana corrente'] < 8 ? results.data[0]['S8'] : MAX_NUM,
        ];
        setCardData(data);
      }
    };

    dataFetch();
  }, []);

  return (
    <CardBlockSection>
      {cardData.map((card, index) => (
        <Content style={{backgroundColor: getColor(MAX_NUM - card - OFFSET), color: getTextColor(MAX_NUM - card - OFFSET)}}>
          <h6 style={{fontSize: '15px', color: getTextColor(MAX_NUM - card - OFFSET)}}>Settimana {index + 1}</h6>
          <div style={{whiteSpace: 'pre-line', color: getTextColor(MAX_NUM - card - OFFSET)}}>
            {getSettimanaDescription(index + 1)}
          </div>
          <div>
            Posti rimanenti <br/> <span style={{fontWeight: 'bold'}}>{MAX_NUM - card - OFFSET}</span> / {MAX_NUM}
          </div>
        </Content>
      ))}
    </CardBlockSection>
  );
};

export default withTranslation()(CardBlock);
