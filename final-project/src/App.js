import Main from './components/Main'
// import './App.css';
import {DataListProvider} from './context/DataListContext';
import {UserProvider} from './context/UserContext';
import 'antd/dist/antd.css'

function App() {
  return (
    <>
    <UserProvider>
      <DataListProvider>
        <Main/>
      </DataListProvider>
    </UserProvider>
    </>
  );
}

export default App;
