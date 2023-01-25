import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_1280.png"
            alt="load"
          />
        </div>
      </div>
    </div>
  );
};
