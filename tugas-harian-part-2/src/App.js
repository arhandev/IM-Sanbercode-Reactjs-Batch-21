import './App.css'
import Tugas9 from './Tugas-9/Tugas9'
import Tugas10 from './Tugas-10/Tugas10'
import Tugas11 from './Tugas-11/Tugas11'
import Tugas12 from './Tugas-12/Tugas12'
import Tugas13 from './Tugas-13/Tugas13'
import Tugas14 from './Tugas-14/Tugas14'
import Tugas15 from './Tugas-15/Tugas15'
import Nav from './component/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useReducer } from 'react'
import React from 'react'

const initialState = false

const reducer = (state, action) => {
  console.log(state)
  return !state
}

export const ClickContext = React.createContext()

function App() {

  const [click, dispatch] = useReducer(reducer, initialState)

  let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]
  return (
    <div className="App">
      <ClickContext.Provider value={{clickState: click, clickDispatch: dispatch}}>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Tugas9/>
          </Route>
          <Route exact path="/tugas10">
            <Tugas10 buah={dataHargaBuah}/>
          </Route>
          <Route exact path="/tugas11">
            <Tugas11 start={110}/>
          </Route>
          <Route exact path="/tugas12">
            <Tugas12/>
          </Route>
          <Route exact path="/tugas13">
            <Tugas13/>
          </Route>
          <Route exact path="/tugas14">
            <Tugas14/>
          </Route>
          <Route exact path="/tugas15">
            <Tugas15/>
          </Route>
        </Switch>
      </Router>
      </ClickContext.Provider>
    </div>
  );
}

export default App;
