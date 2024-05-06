import { Box, Button, Card, CardContent, Typography,} from '@mui/material';
import { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";

import Papa from 'papaparse';
import './App.css';

function App() {
  const [cardData, setCardData] = useState([]);

  const MAX_NUM = 72;


  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      var res = await (
        await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vSiQYKdJisuLcFg0vydiJGGwYTI6wv1SoWVMPECybZhtrkWm4Zsme2yAPeKfKSzkJXBsESxtY60oSrN/pub?gid=574938590&single=true&output=csv'
        )
      ).blob().then(b => b.text());

      var results = Papa.parse(res, {header: true});

      if(results?.data[0]){
        const data = [results.data[0]['S1'],
         results.data[0]['S2'],
         results.data[0]['S3'],
         results.data[0]['S4'],
         results.data[0]['S5'],
         results.data[0]['S6'],
         results.data[0]['S7'],        
         results.data[0]['S8']];
        setCardData(data);
      }
    };

    dataFetch();
  }, []);


  function getColor(numberRemaining){
    if(numberRemaining === 0)
      return '#282c34';
    if(numberRemaining < 10)
      return '#eb9694';
    if(numberRemaining < 30)
      return '#fef3bd'; 
    return '#c1e1c5'; 
  }

  function getTextColor(numberRemaining){
    if(numberRemaining === 0)
      return '#ffffff';
    return undefined; 
  }

  function getSettimanaDescription(index){
    if(index === 1)
      return '10 giugno\n14 giugno';
    if(index === 2)
      return '17 giugno\n21 giugno';
    if(index === 3)
      return '24 giugno\n28 giugno';
    if(index === 4)
      return '1 luglio\n5 luglio';
    if(index === 5)
      return '8 luglio\n12 luglio';
    if(index === 6)
      return '15 luglio\n19 luglio';
    if(index === 7)
      return '22 luglio\n26 luglio';
    if(index === 8)
      return '29 luglio\n2 agosto';
    return '';
  }


  return (
    <div className="App">
      <Box style={styles.logoContainer}>
        <img src="https://i.ibb.co/TKvrMsq/Logo-CRE.png" alt="Logo" style={{width: 200}}/>
      </Box>
      <Box style={styles.cardContainer}>
        {cardData.map((card, index) => (
          <Card style={{...styles.card, backgroundColor: getColor(MAX_NUM - card), color: getTextColor(MAX_NUM - card)}} variant="outlined" key={index}>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Settimana {index + 1}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{whiteSpace: 'pre-line', color: getTextColor(MAX_NUM - card)}}>
                {getSettimanaDescription(index + 1)}
              </Typography>
              <Typography variant="body1">
                Posti rimanenti <br/> <span style={{fontWeight: 'bold'}}>{MAX_NUM - card}</span> / {MAX_NUM}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box>
        <Button style={{marginTop: 20}} href="https://forms.gle/fBHyAVrmFGTqKgVv6" variant="contained" disabled = {false}>VAI AL MODULO DI ISCRIZIONE</Button>
      </Box>
      <Box>
      <Button style={{marginTop: 20}} href="https://forms.gle/aJTkQ9Z5pRf1BRfP9" variant="contained" disabled = {true}>VAI AL MODULO DI AGGIUNTA SETTIMANE (solo per utenti già iscritti)</Button>
      </Box>
    </div>
  );
}

//backgroundColor: getColor(MAX_NUM - card)

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 20
  },
  logo: {
    fontFamily: 'Fontdiner Swanky',
    fontSize : 50
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 150,
    margin: 10,
    border: "1px solid white"
  },
});

export default App;
