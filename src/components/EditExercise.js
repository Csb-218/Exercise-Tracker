import axios from 'axios';
import React,{useEffect,useReducer} from 'react';
import {useParams,useNavigate} from 'react-router-dom';

function reducer(state,action){
    return{
      ...state,
      [action.name]: action.value 
    } 
}

const EditExercise = () => {

  const navigate = useNavigate();
  const params = useParams();
  const ex_id = params.id;
  
  const [state,dispatch] = useReducer(reducer,{});

  useEffect(()=> {

    axios.get(`http://localhost:3001/exercises/${ex_id}`)
    .then(res =>{
       dispatch({name: 'username',value: res.data.username});
       dispatch({name: 'description',value: res.data.description})
       dispatch({name: 'duration',value: res.data.duration})
       dispatch({name: 'date',value: res.data.date.replace('Z','')})
       console.log(res.data.date)
    })
    .catch(err => console.log(err))
  },[ex_id]
  )
   
  const handleChange = (event) => {
    dispatch(
      {
        name: event.target.name,
        value: event.target.value
      }
    )
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert('You have successfully submitted changes to your exercise');
    axios.post(`http://localhost:3001/exercises/update/${ex_id}`,state).then(res => console.log(res.data)).catch(err => console.log(err));
    console.log(state)
  }

  return (
    <div>
      <p className="text-2xl">Edit Exercise</p>
      <p> hii </p>
      <form onSubmit={handleSubmit} className="text-start">
        <fieldset className="border-2">
          <label>
            <p>Username</p>
            <input type="text" name="username" maxlength='15' className="border-2" onChange={handleChange} value={state.username} required></input>
          </label>
          <label>
            <p>Description</p>
            <input type="text" name="description" maxlength='100' className="border-2" onChange={handleChange} value={state.description} size='50' ></input>
          </label>
          <label>
            <p>Duration(in minutes)</p>
            <input type="number" name="duration" max='120' min='1' className="border-2" onChange={handleChange} value={state.duration}  ></input>
          </label>
          <label >
            <p>date and time:</p>
            <input type="datetime-local" name="date" value={state.date || ''} onChange={handleChange} />
          </label>
        </fieldset> 
        <button type="submit" className="bg-zinc-700 text-white p-2 m-2" onClick={()=>{setTimeout(()=>navigate('/'),2000)}}>Make Changes</button>
      </form>
    </div>
  )
}

export default EditExercise
