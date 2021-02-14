import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import HomeRemedy from './pages/HomeRemedy/HomeRemedy';
import Blogs from './pages/Blogs/Blogs';
import ClinicalTrials from './pages/ClinicalTrials/ClinicalTrials';
import ClinicalTrialData from './pages/ClinicalTrialData/ClinicalTrialData';
import Form from './pages/SignIn/Form';
import { Navbar, Footer } from './Components';
import ScrollToTop from './Components/ScrollToTop';
import { ayurTrialAbi } from './abis/abis';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xeE09A278AF6F570f4785B14FF842F560eC6C947D';
const SimpleContract = new web3.eth.Contract(ayurTrialAbi, contractAddr);

function App() {
  // const [number, setNumber] = useState(0);
  // const [getNumber, setGetNumber] = useState(0);

  // const handleSet = async (e) => {
  //   e.preventDefault();
  //   const accounts = await window.ethereum.enable();
  //   const account = accounts[0];
  //   const gas = await SimpleContract.methods.set(number).estimateGas();
  //   const result = await SimpleContract.methods.set(number).send({ from: account, gas });
  //   console.log(result);
  // }

  // const handleGet = async (e) => {
  //   e.preventDefault();
  //   const result = await SimpleContract.methods.get().call();
  //   setGetNumber(result);
  //   console.log(result);
  // }
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/HomeRemedy" exact component={HomeRemedy} />
        <Route path="/Blogs" exact component={Blogs} />
        <Route path="/ClinicalTrials" exact component={ClinicalTrials} />
        <Route path="/SignIn" exact component={Form} />
        <Route path="/ClinicalTrialData" exact component={ClinicalTrialData} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;