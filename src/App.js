// import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from 'react-router-dom'

// // styles
// import './App.css'

// // Page Components
// import Create from './pages/create/Create'
// import Dashboard from './pages/dashboard/Dashboard'
// import Login from './pages/login/Login'
// import Project from './pages/project/Project'
// import Signup from './pages/signup/Signup'

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div className="container">
//           <Routes>
//             <Route path='/' element= { <Dashboard /> } />
//             <Route path='/create' element= { <Create /> } />
//             <Route path='/projects/:id' element= { <Project /> } />
//             <Route path='/login' element= { <Login /> } />
//             <Route path='/signup' element= { <Signup /> } />
//           </Routes>
//         </div>
//       </Router>

//     </div>
//   );
// }

// export default App


import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// pages & components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App