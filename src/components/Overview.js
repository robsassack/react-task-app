import React from 'react';

const Overview = (props) => {
  const {tasks} = props;

  return (
    <div>
      {tasks.map((task, index) => {
        return <p key={task.id}>{index+1}. {task.text}</p>;
      })}
    </div>
  );
};

export default Overview;
