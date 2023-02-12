
import React,{useState,useEffect} from 'react';
import {Routes,Route} from "react-router-dom";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import axios from "axios";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";





function App() {

  const [exercises, setExercise] = useState([]);
 
  function deleteExercise(id) {
    axios.delete(`http://localhost:3001/exercises/${id}`).then(res => console.log(res.data)).catch(err => console.log(err));
    setExercise(exercises.filter(e => e.id !== id));
  }


useEffect(()=>{
   axios.get('http://localhost:3001/exercises/')
  .then(res => {
    setExercise([...res.data])
  })
})
 
  
  
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<ExercisesList exercises={exercises} deleteExercise={deleteExercise} /> }></Route>
        <Route path={`/edit-exercise/:id`} element={<><EditExercise/> </>}> </Route>
        <Route path='/create-user' element={<CreateUser/> }></Route>
        <Route path='/create-exercise' element={<CreateExercise/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
