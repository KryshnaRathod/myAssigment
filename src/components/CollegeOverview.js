import React from 'react';
import {useState}  from "react";
import {Link } from 'react-router-dom'




const CollegeOverview = () => {

 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the form data, like sending it to a server
    console.log(formData);
  };

  return (
    <div>

<div class="sidebar">
  	<div>Overview</div>
  	<div>Campus Details</div>
  	<div>Course Datails</div>
  </div>

  <div className="container mt-5">
  <div className="sidebar">
          <ul className="list-unstyled">
            <li>
              <Link to="/collegeOverview">Overview</Link>
            </li>
            <li>
              <Link to="/campusDetails">Campus Details </Link>
            </li>
            <li>
              <Link to="/facilities">Course Details</Link>
            </li>
            <li>
              <Link to="/facilities">Placement Statics</Link>
            </li>
            <li>
              <Link to="/facilities">Gallary and Vedio</Link>
            </li>
            <li>
              <Link to="/facilities">Frequently asked question</Link>
            </li>
          </ul>
        </div>

    </div>
   
    <form   className='container' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"> Collage Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
     
     
        <label htmlFor="email">Year Founded  :</label>
        <input
          type="year"
          id="year"
          name=""
          value={formData.year}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Collage Over view:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        /> 
      </div>
      <div>
        <label htmlFor="message">Addresh :</label>
        <input
          type="addresh"
          id="addresh"
          name="addresh"
          value={formData.addresh}
          onChange={handleChange}
        />
         <label htmlFor="message">LandMark :</label>
        <input
          type="landmark"
          id="landmark"
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
        />
        </div>
        <div>

        
           <label htmlFor="message">Pin code :</label>
        <input
          type="pinCode"
          id="pinCode"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
        />
           <label htmlFor="message">City :</label>
        <input
          type="city"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
          <label htmlFor="message">District :</label>
        <input
          type="district"
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
        />
        <label htmlFor="message">State:</label>
        <input
          type="state"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
        /></div><div>
           <label htmlFor="message">Affillted By:</label>
        <input
          type="state"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
           <label htmlFor="message">Accreditation  :</label>
        <input
          type=""
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        
        

        

      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);
}




export default CollegeOverview;

