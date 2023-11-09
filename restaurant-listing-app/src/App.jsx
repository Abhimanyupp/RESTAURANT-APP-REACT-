
import { Route, Routes } from 'react-router-dom';
import AllRest from './AllRest/AllRest';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ViewRest from './ViewRest/ViewRest';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      {/*localhost:3000*/}
      <Route path="/" element={<AllRest/>} />
      {/*localhost:3000/view/1*/}
      <Route path="/view/:id" element={<ViewRest/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
