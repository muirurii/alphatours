import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Layout/Header';
import Hero from './components/Pages/HomePage/Hero';
import Destinations from './components/Pages/Destinations/Destinations';

const App = ()=> {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/destinations' element={<Destinations />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
