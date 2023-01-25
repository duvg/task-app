import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';
import { Sidebar } from './Sidebar';
// import { NothingSelected } from "./NothingSelected";

export const taskScreen = () => {
  return (
    <div className="task__main-content">
      <Sidebar />
      <main style={{ width: '100%' }}>
        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
};
