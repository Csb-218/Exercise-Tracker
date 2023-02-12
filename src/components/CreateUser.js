import React,{useState,useReducer} from 'react';
import axios from 'axios';

const CreateUser = () => {
  
  const [userName,setuserName]= useState({username:" "});

  const handleChange = (e) =>{
    setuserName(
      {
        username: e.target.value
      }
    )
   
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have submitted the form");
    //console.log(userName)
    axios.post('http://localhost:3001/users/add', userName).then(res => console.log(res.data));
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Username:</p>
            <input type="text" name="username" maxlength='15' className="border-2" onChange={handleChange} ></input>
          </label>
        </fieldset>
        <button type="submit" className=" bg-zinc-700 text-white p-2 m-2" >create username</button>
      </form>
    </div>
  )
}

export default CreateUser