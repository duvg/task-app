import React from 'react';
import { TaskEntry } from './TaskEntry';

export const TaskEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6];
  return (
    <div className="task__entries pl-4 pr-4 pointer">
      {entries.map(value => (
        <TaskEntry key={value} />
      ))}
    </div>
  );
};
