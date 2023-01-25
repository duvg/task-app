import React from 'react';
import { TaskEntries } from './TaskEntries';

export const Sidebar = () => {
  return (
    <aside className="task__sidebar">
      <div className="task__sidebar-navbar pl-4 pr-4">
        <h3 className="mt-5">
          <i className="fas fa-tachometer-alt"></i> <span>Duviel</span>
        </h3>
        <button className="btn">Logout</button>
      </div>

      <div className="task__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <TaskEntries />
    </aside>
  );
};
