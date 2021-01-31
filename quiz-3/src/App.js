import './App.css';
import Nav from './component/part/Nav'
import About from './component/route/About/About'
import Login from './component/route/Login/Login'
import Home from './component/route/Home/Home'
import books from './component/route/Books/Books'
import QuizContext from './Context'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Books from './component/route/Books/Books';

function App() {
  return (
    <div className="App">
      <QuizContext>
        <Router>
          <Nav/>
          <div className="content">
            <Switch>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route exact path="/login" component={Login}>
                
              </Route>
              <Route exact path="/books">
                <Books/>
              </Route>
            </Switch>
          </div>
        </Router>
      </QuizContext>
    </div>
  );
}

export default App;
