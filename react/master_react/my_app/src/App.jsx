import HeaderComponent from "./components/HeaderComponent";
import Home from "./components/Home";
import './styles/App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/> 
      </Routes>
    </Router>
  );
};
export default App;