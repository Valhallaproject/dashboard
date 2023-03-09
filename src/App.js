import './App.css';
import './components/common/commutator/Commutator.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from 'use-local-storage'
import Home from './pages/Home';


function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  return (
    <div className="App" data-theme={theme}>
              <div className="commutator" >
        <p>Dark Mode</p>
        <label className="switch" >
          <input type="checkbox" onClick={switchTheme}/>
          <span></span>
        </label>
    </div>

      <Router>
        <Routes>

        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
