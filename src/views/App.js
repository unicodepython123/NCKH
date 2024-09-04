import logo from './logo.svg';
import './App.scss';
// import MyComponent from './example/MyComponent';
import ListToDo from './Todos/ListToDo';
import Nav from './Navigation/Nav';
import Home from './example/Home';
import {
  BrowserRouter,
  Switch,
  Route, Routes,
  Link, NavLink
} from "react-router-dom";
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';


function App() {
  return (
    <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Nav></Nav>
              <img src={logo} className="App-logo" alt="logo" />  
              <Switch>
                <Route path='/' exact>
                  <Home />
                </Route>
                <Route path='/todo'>
                  <ListToDo />
                </Route>
                <Route path='/user'>
                  <ListUser/>
                </Route>
                <Route path='/user/:id'>
                  <DetailUser/>
                </Route>
              </Switch>
            </header>
          </div>
        
    </BrowserRouter>
  );
}

export default App;
