import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="bg-zinc-700 p-3 flex gap-4">
        <p className="text-xl text-white">ExcerTracker</p>
        <NavLink to='/' className={({ isActive }) =>isActive ? "font-bold text-white" : " text-white"}>Exercises</NavLink>
        <NavLink to='/create-exercise' className={({ isActive }) =>isActive ? "font-bold text-white" : " text-white"}>Create Exercise</NavLink>
        <NavLink to='/create-user' className={({ isActive }) =>isActive ? "font-bold text-white" : " text-white"}>Create User</NavLink>

    </div>
  )
}

export default Navbar