import React from 'react'
import {  useReducer } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

 const reducer = (formData,setformData) => {

  return {...formData,[setformData.name]: setformData.value}

}

 const CreateExercise = () => {
  const navigate = useNavigate();

 const [formData, setFormData] = useReducer(reducer,{username:'' , description:'' , duration:'' , date:'' });
 
 const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value  
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form");
    console.log(formData);
    
    axios.post('http://localhost:3001/exercises/add', formData).then(res => console.log(res.data));

  }

  return(
    <div>
        <form onSubmit={handleSubmit} className="text-start">
          <fieldset className="border-2">
            <label>
            <p>Username</p>
            <input type="text" name="username" maxlength='15' className="border-2" onChange={handleChange} value={formData.username ||  ''} required></input>
          </label>
          <label>
            <p>Description</p>
            <input type="text" name="description" maxlength='100' className="border-2" onChange={handleChange} value={formData.description || ''} size='50' ></input>
          </label>
          <label>
            <p>Duration(in minutes)</p>
            <input type="number" name="duration" max='120' min='1' className="border-2" onChange={handleChange} value={formData.duration ||  ''} ></input>
          </label>
          <label >
            <p>date and time:</p>
            <input type="date"  name="date" value={formData.date || ''} onChange={handleChange}></input>
          </label>
         <button type="submit" className="bg-zinc-700 text-white p-2 m-2" onClick={()=>{setTimeout(()=>navigate('/'),2000)}}>Create Exercise</button>
         
          </fieldset> 
        </form>
    </div>
  )
  
  
  
    
}
export default CreateExercise