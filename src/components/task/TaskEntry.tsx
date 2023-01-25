import React from 'react';

export const TaskEntry = () => {
  return (
    <div className="task__entry mb-2">
      <div className="task__entry-body">
        <p className="task__entry-title">Un nuevo día</p>
        <p className="task__entry-content">
          Lorem ipsum dolor, sit amet consectetur adipisicings
        </p>
      </div>

      <div className="task__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
