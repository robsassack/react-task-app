import React from "react";

const Overview = (props) => {
  const { tasks, deleteTask, editTask, handleEditTask } = props;

  return (
    <div className='tasks'>
      {tasks.map((task) => {
        if (task.edit) {
          return (
            <div className='task-edit' key={task.id}>
              <input
                type='text'
                value={task.text}
                onChange={(e) => {
                  handleEditTask(e, task.id);
                }}
              />
              <button onClick={() => editTask(task.id)}>Save</button>
            </div>
          );
        } else {
          return (
            <div className='task' key={task.id}>
              <p>
                {task.index}. {task.text}
              </p>
              <button onClick={() => deleteTask(task.id)}>
                <i className='fa-solid fa-trash'></i>
              </button>
              <button onClick={() => editTask(task.id)}>
                <i className='fa-solid fa-edit'></i>
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Overview;
