import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Navbar from './Components/Navbar'
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/Home'>
              {!user && <Redirect to='/login' />}
              {user && <Home />}
            </Route>
            <Route path='/Login'>
              {user && <Redirect to ='/Home'/>}
              {!user && <Login />}
            </Route >
            <Route path='/Signup'>
              {user && <Redirect to = '/Home'/>}
              {user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
