
import './App.css';



import React from 'react';
import { BrowserRouter ,Routes, Route,  } from 'react-router-dom';
import CampusDetails   from './components/CampusDetails'
import Facilities from './components/Facilities'
import CollegeOverview from  './components/CollegeOverview'
import HostelLife from './components/HostelLife'
import Sidebar from './Sidebar'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path ='/collegeOverview'element ={<CollegeOverview />}  />
      <Route  path ="/campusDetails " element ={<CampusDetails />}  />
      <Route  path ="/facilities" element ={<Facilities/>}  />
      <Route  path ="/hostelLife" element ={<HostelLife />}  />
    

      
    </Routes>
    </BrowserRouter>
  );
};

export default App;