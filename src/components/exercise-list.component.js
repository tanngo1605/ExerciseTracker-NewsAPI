import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date}</td>
      <td>
        <Link to={"/edit/" + props.exercise._id}>edit</Link> |
        <a
          href="#"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: []
    };
  }
  deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercise/" + id)
      .then(res => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercise/")
      .then(res => {
        this.setState({
          exercises: res.data
        });
      })
      .catch(err => console.log(err));
  }
  exerciseList() {
    return this.state.exercises.map(ex => {
      return (
        <Exercise
          exercise={ex}
          deleteExercise={this.deleteExercise}
          key={ex._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
