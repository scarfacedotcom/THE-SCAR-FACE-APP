import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from 'react-router-dom'

// styles
import './App.css'

// Page Components
import Create from './pages/create/Create'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route path='/' element= { <Dashboard /> } />
            {/* <Route path='/' element= { <Dashboard /> } />
            <Route path='/' element= { <Dashboard /> } />
            <Route path='/' element= { <Dashboard /> } /> */}
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App
