import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer'
import HomePage from './components/Pages/HomePage/HomePage';
import Destinations from './components/Pages/Destinations/Destinations';
import DestinationDetails from './components/Pages/Destinations/DestinationDetails';
import ContactsPage from './components/Pages/Contacts/Contacts';
import Booking from './components/Pages/Booking/Booking';
import places from './utilities/places.js';

const App = ()=> {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage places={places}/>} />
        <Route path='/destinations/:category' element={<Destinations places={places}/>} />
        <Route path='/destination/:id' element={<DestinationDetails places={places}/>} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/booking/:id' element={<Booking places={places}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;
