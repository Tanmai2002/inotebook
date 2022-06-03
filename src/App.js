
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import MyNavbar from './components/MyNavbar';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <NoteState>
    <Router>
    <div className="App">
      <MyNavbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        {/* <Route exact path='/' element={<Home/>}/> */}
       
      </Routes>
    </div>
    </Router>
    </NoteState>
  );
}

export default App;
