
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from './Extrapages/Header';
import Home from './Extrapages/Home';
import Doctors from './Extrapages/Doctors';
import About from './Extrapages/About';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Appointment from './Extrapages/DoctorForm';
import Gallery from './components/Images';
import Admin from './Extrapages/Admin';
import View from './Extrapages/View';
import AddEdit from './Extrapages/AddEdit';
import Register from './Register';
import Login from './Login';
import AppointmentDetails from './Extrapages/AppointmentDetails';
import UserDataDisplay from './Extrapages/UserDataDisplay';
import Try from './Extrapages/Try';
import AdminLogin from './Extrapages/AdminLogin';
import PopupMessage from './Extrapages/PopupMessage';





function App() {

 

  const [authenticated, setAuthenticated] = useState(false);
  return (
    <BrowserRouter>
     <div className="App">
      <ToastContainer position="top-center"/>
     
      <Header />
      
      {/* <PopupMessage /> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/doctors' element={<Doctors />}></Route>
        <Route exact path='/images' element={<Gallery />}></Route>
        
        <Route exact path='/DoctorForm' element={<Appointment />}></Route> 
        {/* <Route exact path='/admin' element={<Admin />}></Route> */}
        <Route exact path='/view/:id' element={<View />}></Route>
        <Route exact path='/update/:id' element={<AddEdit />}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        {/* <Route exact path='/login' element={<Login/>}></Route> */}
        <Route exact path='/userdatadisplay' element={<UserDataDisplay />}></Route>
        <Route exact path='/appointmentdetails' element={<AppointmentDetails/>}></Route>
        <Route exact path='/h' element={<Try/>}></Route>


        <Route
            path="/admin"
            element={authenticated ? <Admin /> : <Navigate to="/adminlogin" />}
          />
          
         
          <Route path="/adminlogin"
          element={<AdminLogin setAuthenticated={setAuthenticated} />} />

      </Routes>
    
    </div>
    </BrowserRouter>
  );
}





export default App;
