import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        index: 0,
        text: "",
        id: uniqid(),
        edit: false,
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        index: this.state.task.index,
        text: e.target.value,
        id: this.state.task.id,
        edit: false,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        index: this.state.task.index + 1,
        text: "",
        id: uniqid(),
        edit: false,
      },
    });
  };

  deleteTask = (id) => {
    let newTasks = [];
    let taskDeleted = false;
    this.state.tasks.forEach((task) => {
      if (task.id === id) {
        taskDeleted = true;
      } else {
        if (taskDeleted) {
          task.index -= 1;
        }
        newTasks.push(task);
      }
    });
    this.setState({
      tasks: newTasks,
      task: {
        index: this.state.task.index - 1,
        text: "",
        id: this.state.task.id,
        edit: false,
      },
    });
  };

  editTask = (id) => {
    let newTasks = [];
    this.state.tasks.forEach((task) => {
      if (task.id === id) {
        task.edit = !task.edit;
      }
      newTasks.push(task);
    });
    this.setState({
      tasks: newTasks,
    });
  };

  handleEditTask = (e, id) => {
    let newTasks = [];
    this.state.tasks.forEach((task) => {
      if (task.id === id) {
        task.text = e.target.value;
      }
      newTasks.push(task);
    });
    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type='text'
            id='taskInput'
          />
          <button type='submit'>Add Task</button>
        </form>
        <Overview
          tasks={tasks}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          handleEditTask={this.handleEditTask}
        />
      </div>
    );
  }
}

export default App;
