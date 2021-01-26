import './App.css'
import Tugas9 from './Tugas-9/Tugas9'
import Tugas10 from './Tugas-10/Tugas10'
import Tugas11 from './Tugas-11/Tugas11'
import Tugas12 from './Tugas-12/Tugas12'

function App() {
  let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]
  return (
    <div className="App">
      {/* <Tugas9/>
      <Tugas10 buah={dataHargaBuah}/>
      <Tugas11 start={110}/> */}
      <Tugas12/>
    </div>
  );
}

export default App;
