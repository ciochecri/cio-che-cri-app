import { Box, Button, Card, CardContent, Typography,} from '@mui/material';
import { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";

import Papa from 'papaparse';
import './App.css';

function App() {
  const [cardData, setCardData] = useState([]);


  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      var res = await (
        await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vR98DbyZQkecrLhCJDNUlpfg5cDUtsOgI1PFQs60F0D69qKEfaa41HFaY2qc-IftkMgW312Y3gI6ImW/pub?gid=574938590&single=true&output=csv'
        )
      ).blob().then(b => b.text());

      var results = Papa.parse(res, {header: true});

      if(results?.data[0]){
        const data = [results.data[0]['S1'],
         results.data[0]['S2'],
         results.data[0]['S3'],
         results.data[0]['S4'],
         results.data[0]['S5'],
         results.data[0]['S6']];
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
      return '27 novembre\n1 dicembre';
    if(index === 2)
      return '4 dicembre\n8 dicembre';
    if(index === 3)
      return '11 dicembre\n15 dicembre';
    if(index === 4)
      return '18 dicembre\n22 dicembre';
    if(index === 5)
      return '8 gennaio\n12 gennaio';
    if(index === 6)
      return '15 gennaio\n19 gennaio';
    return '';
  }


  return (
    <div className="App">
      <Box style={styles.logoContainer}>
        <Typography style={styles.logo} variant='h1'>Ciò Che Cri</Typography>
      </Box>
      <Box style={styles.cardContainer}>
        {cardData.map((card, index) => (
          <Card style={{...styles.card, backgroundColor: getColor(80 - card), color: getTextColor(80 - card)}} variant="outlined" key={index}>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Settimana {index + 1}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{whiteSpace: 'pre-line', color: getTextColor(80 - card)}}>
                {getSettimanaDescription(index + 1)}
              </Typography>
              <Typography variant="body1">
                Posti rimanenti <br/> {80 - card}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Button style={{marginTop: 20}} href="https://docs.google.com/forms/d/e/1FAIpQLSe5fSJX7nVkOrSpV6dc7ZgIJto0Pc1WplG5h36TRBV9bnderw/viewform" variant="contained">VAI AL MODULO DI ISCRIZIONE</Button>
    </div>
  );
}

//backgroundColor: getColor(80 - card)

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
