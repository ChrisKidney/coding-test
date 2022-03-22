import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import DesignYourFirm from './components/DesignYourFirm';
import RunYourFirm from './components/RunYourFirm';
import Explore from './components/Explore';
import Leaderboards from './components/Leaderboards';
import ViewTeams from './components/ViewTeams';
import HelpFaq from './components/HelpFaq';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Navigate replace to='/home' /> }/>
        <Route path='/home' element= { <Home /> }/>
        <Route path='/design-your-firm' element= { <DesignYourFirm /> }/>
        <Route path='/run-your-firm' element= { <RunYourFirm /> }/>
        <Route path='/explore' element= { <Explore /> }/>
        <Route path='/leaderboards' element= { <Leaderboards /> }/>
        <Route path='/view-teams' element= { <ViewTeams /> }/>
        <Route path='/help' element= { <HelpFaq /> }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
