import * as React from 'react';
import { Box, Button, Card, CardContent, Typography,} from '@mui/material';
import { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { FileDownload, Send} from "@mui/icons-material";
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


import Papa from 'papaparse';
import './App.css';

function App() {
  const [cardData, setCardData] = useState([]);

  const MAX_NUM = 72;
  const OFFSET = 10;

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
                Posti rimanenti <br/> <span style={{fontWeight: 'bold'}}>{MAX_NUM - card - OFFSET}</span> / {MAX_NUM}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box style={styles.allLinksContainer}>
        <Box style={styles.buttonsContainer}>
          <Typography variant='h6' gutterBottom>
            Moduli
          </Typography>
          <Typography variant='subtitle2' gutterBottom>
            Prima di iscriverti assicurati di avere a portata di mano:
          </Typography>
          <ul style={{fontSize: 15, textAlign: "left"}}>
            <li>Tessera sanitaria del bambino/a</li>
            <li>Libretto verde dello sportivo</li>
            <li>Contabile del bonifico</li>
            <li>Documenti dei delegati</li>
          </ul>
          <Box>
            <Button endIcon={<Send />} style={{marginTop: 20, width: 300}} href="https://forms.gle/fBHyAVrmFGTqKgVv6" variant="contained" disabled = {false}>MODULO DI ISCRIZIONE</Button>
          </Box>
          <Box>
            <Button endIcon={<Send />} style={{marginTop: 20, width: 300, fontSize: 12}} href="https://forms.gle/CY8bV8Ss3Sh37xxw9" variant="contained" disabled = {true}>MODULO DI AGGIUNTA SETTIMANE (solo per utenti già iscritti)</Button>
          </Box>
        </Box>
      </Box>
      <Box style={styles.allLinksContainer}>
        <Box style={styles.downloadsContainer}>
          <Typography variant='text.secondary' gutterBottom>
          </Typography>
            Centro estivo Ció che CRE
          <Box>
            <Button startIcon={<FileDownload />} style={{marginTop: 15, width: 300}} href="https://drive.google.com/uc?export=download&id=1qKm7BrAIZxBb0LogOL4BqQozItDNMnp6" variant="outlined" disabled = {false}>VOLANTINO</Button>
          </Box>
          <Box>
            <Button startIcon={<FileDownload />} style={{marginTop: 15, width: 300}} href="https://drive.google.com/uc?export=download&id=1z2qdvlqzq_dEXBOuTt4JEEx2HHiXe9sE" variant="outlined" disabled = {false}>REGOLAMENTO</Button>
          </Box>
        </Box>
        <Box style={styles.downloadsContainer}>
          <Typography variant='text.secondary' gutterBottom>
            Vuoi provare pallamano?
          </Typography>
          <Box>
            <Button startIcon={<FileDownload />} style={{marginTop: 15, width: 300}} href="https://drive.google.com/uc?export=download&id=1ehp2ZJEDzjtgD0kt7BfOxGOU8TP6UKwm" variant="outlined" disabled = {false}>VOLANTINO</Button>
          </Box>
          <Box style={{marginTop: "10px"}}>
            <IconButton aria-label="Linkedin.com" href="https://www.facebook.com/pallamanoromagna1/?locale=it_IT" target="_blank">
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="Instagram.com" href="https://www.instagram.com/pallamanomordano1980/" target="_blank">
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="Instagram.com" href="https://www.pallamanoromagna.it/" target="_blank">
              <SportsHandballIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
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
  allLinksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    width: 350,
    margin: 20,
    border: "1px solid black",
    padding: 10,
    height: 330
  },
  downloadsContainer: {
    width: 350,
    margin: 20,
    border: "1px solid black",
    padding: 10,
    height: 135
  },
});

export default App;
