import { HashRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home';



function App() {
  return (
    <div className='App'>
      <HashRouter>
      <Home />
    
      </HashRouter>
 
    </div>
  );
}

export default App;
