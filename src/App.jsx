import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './Component/HomePage';
import AddPage from './Component/AddPage';
import ViewPage from './Component/ViewPage';
import EditPage from './Component/EditPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/addpage' Component={AddPage}></Route>
        <Route path='/viewpage/:id' Component={ViewPage}></Route>
        <Route path='/editpage/:id' Component={EditPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
