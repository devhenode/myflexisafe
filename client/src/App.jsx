import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotesApp from './components/NotesApp';
import ArrayImplementation from './components/ArrayImplementation';

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
      </Link>
    </div>
  );
}

export default App;
