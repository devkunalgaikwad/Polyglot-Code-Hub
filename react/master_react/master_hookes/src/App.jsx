import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/header_components/Home';
import Coins from './components/header_components/Coins';
import Exchange from "./components/header_components/Exchange";
import CoinDetails from "./components/header_components/CoinDetails";

function App(){
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/header_components/Coins" element={<Coins/>}/>
                <Route path="/header_components/Exchange" element={<Exchange/>}/>
                <Route path="/header_components/CoinDetails" element={<CoinDetails/>}/>
            </Routes>
        </Router>
    )
};

export default App;