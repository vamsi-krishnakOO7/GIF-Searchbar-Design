import './App.css';
import Header from './components/Header';
import CircleBlue from './components/CircleBlue';
import CircleOrange from './components/Circle2';
import CircleGreen from './components/Circle3';
import SearchContainer from './components/SearchContainer';
import Media from './components/Media';

function App() {
  return (
    <div className="app">
      <div className="main">
      <Header />
      <br></br>
     <SearchContainer />
      <CircleBlue />
      <CircleOrange /> 
      <CircleGreen />   
      <Media />  
      </div>
    </div>
  );
}

export default App;
