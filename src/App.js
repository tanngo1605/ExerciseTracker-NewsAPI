import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser  from './components/create-user.component';
import HealthNews from './components/healthNews.component';
import SportNews from './components/sportNews.component';


function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/exercise" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/healthNews" component = {HealthNews}/>
      <Route path="/sportNews" component = {SportNews}/>
      </div>
    </Router>
  );
}

export default App;
