import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <p key={task.id}>{task.index}. {task.text}</p>;
      })}
    </div>
  );
};

export default Overview;
