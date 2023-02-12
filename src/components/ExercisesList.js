
import React from 'react';
import {NavLink} from 'react-router-dom';


const ExercisesList = (props) => {
  
  function f(date){
    let d  = new Date(date.slice(0,10))
    let text = d.toString().slice(0,15).replaceAll(" ","-")
    return text;
  }

  return (
    <div className="">
      <table className =" w-11/12 mx-10 border-2">
        <tr  className ="bg-slate-200 border-2">
          <th>Username</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        {
          
          props.exercises.map((item) => {
            return(
              <tr className="border-2">
                <td >{item.username}</td>
                <td >{item.description}</td>
                <td >{item.duration}</td>
                <td >{f(item.date)}</td>
                <td> 
                  <NavLink to={`/edit-exercise/${item._id}`} className=" text-blue-500"  > Edit </NavLink>
                  |
                  <NavLink  className=" text-blue-500" onClick={()=>props.deleteExercise(item._id)}> Delete </NavLink>
                </td>
              </tr>
            )
          }
         )
        }

      </table>
     
    </div>
  )
}

export default ExercisesList
