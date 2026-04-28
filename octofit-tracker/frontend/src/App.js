
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <div className="container py-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
        <NavLink className="navbar-brand fw-bold" to="/">Octofit Tracker</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={<div className="text-center"><h1 className="display-4 mb-4">Welcome to Octofit Tracker</h1><p className="lead">Track your fitness journey with style!</p></div>} />
      </Routes>
    </div>
  );
}

export default App;
