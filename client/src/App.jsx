import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotesApp from './components/NotesApp';
import WeekSix from './components/Week6';
import Apps from './components/week7'
// import ArrayImplementation from './components/ArrayImplementation';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/notes">Notes App</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NotesApp />} />
          <Route path="/week6" element={<WeekSix />} />
          <Route path="/week7" element={<Apps />} />

        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Click the button below to go to the Notes App.</p>
      <Link to="/notes">
        <button>Go to Notes App</button>
      </Link> 👈 Week 5 task
        <br />
      <Link to="/week6">
        <button>Go to Notes App</button>
      </Link> 👈 Week 6 task
      <br />
      <Link to="/week7">
        <button>Go to Notes App</button>
      </Link> 👈 Week 7 task
    </div>
  );
}

export default App;
