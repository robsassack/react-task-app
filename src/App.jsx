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
      },
    });
  }

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
        <Overview tasks={tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
