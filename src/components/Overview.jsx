import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <div className='tasks'>
      {tasks.map((task) => {
        return (
          <div className="task" key={task.id}>
            <p>
              {task.index}. {task.text}
            </p>
            <button onClick={() => deleteTask(task.id)}><i className="fa-solid fa-trash"></i></button>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;
